import '../css/main.css';
import '../css/controller.css';
/*TODO: CSS import in JS, I don't like it.*/

import Timer from './Timer.js';
import Camera from './Camera.js';
import Entity from './Entity.js';
import PlayerController from './traits/PlayerController.js';
import {createLevelLoader} from './loaders/level.js';
import {loadFont} from './loaders/font.js';
import {loadEntities} from './entities.js';
import {createDashboardLayer} from './layers/dashboard.js';
import {setupTouchPad, setupKeyboard} from './input/input.js';
import {getUserAgent} from './polyfills/getUserAgent.js';
import {autoPlayOniOS} from './polyfills/autoPlayOniOS.js';
import {createCollisionLayer} from './layers/collision.js'
// import {createCameraLayer} from './layers/camera.js';
// import {setupMouseControl} from './debug.js';

function hasAdded(levelEntities, targetEntity) {
    let ret = {
        addedEntity: {},
        entityExisting: false
    };

    for (let addedEntity of levelEntities) {
        if (addedEntity.hashId &&
            addedEntity.hashId === targetEntity.hashId) {
            ret.entityExisting = true;
            ret.addedEntity = addedEntity;
        }
    }

    debugger
    return ret;
}

function addEntities(level, targetEntity, index, entityFactory) {
    const tileSize = 16;
    // debugger
    const createEntity = entityFactory[targetEntity.name];
    const entity = createEntity();
    entity.pos.set(targetEntity.gridPos.x*tileSize, targetEntity.gridPos.y*tileSize);
    entity.hashId = targetEntity.hashId;
    entity.name = targetEntity.name;
    level.entities.add(entity);

    // level.toBeAddedEntities[index].ableToDelete = true;

    /*In case of adding an entity multiple times: */
    // const targetDeleteIndex = level.entitiesRecord.indexOf(targetEntity);
    // level.entitiesRecord.splice(targetDeleteIndex, 1);

    level.toBeAddedEntities.forEach((toBeAddedEntity, index) => {
        if (toBeAddedEntity.hashId === targetEntity.hashId) {
            level.toBeAddedEntities.splice(index, 1);
        }
    })

}

function checkEntities(level, entityFactory, camera) {
    /*The logic can be:
    * 0. Record: When game initiating, record the entity pos and a Unique id for identifying.
    * 1. Checking: During playing, check the pos recorded continuously(Trigger frequency should be optimized).
    * 2. Add: If the pos of an entity is near the camera, And it was not added yet (judge by id), then add it to game.
    * 3. Deleting: When an entity was killed, delete it from level.entities.
    * 4. Respawn: When the camera get close to the entity Once Again(How to detect???), add it again.
    *
    * Data Struc: Two Set.
    *
    */
    const tileSize = 16;
    debugger
    level.entitiesRecord.forEach((entity, index) => {
        const disFromCamera = (entity.gridPos.x * tileSize) - camera.pos.x;
        const entityNearCamera = disFromCamera < 400 && disFromCamera > -400;

        if (entityNearCamera) {
            const {existEntity, entityNotDuplicate} = hasAdded(level.entities, entity);

            let entityNotAddedYet = false;
            level.toBeAddedEntities.forEach((toBeAddedEntity) => {
                if (toBeAddedEntity.hashId === entity.hashId) {
                    entityNotAddedYet = true;
                }
            })

            if (!entityNotDuplicate && entityNotAddedYet) {
                // debugger
                addEntities(level, entity, index, entityFactory);
            }
        }
        /* TODO: Step 4 is difficult now, so I decide to just implement the others. */
        // else {
        //     // if (entity.ableToDelete) {
        //     // }
        //     debugger
        //     const {entityExisting, existEntity} = hasAdded(level.entities, entity);
        //     if (entityExisting) {
        //         // remove existed entity to save memory
        //         level.entities.delete(existEntity);
        //         console.log('entities.delete');
        //     }
        // }

    })
}

function deleteUselessEntities(level, levelEntities, camera) {
    levelEntities.forEach(entity => {
        const disFromCamera = entity.pos.x - camera.pos.x;
        const entityNearCamera = disFromCamera < 400 && disFromCamera > -400;

        if (!entityNearCamera && entity.killable !== undefined) {
            // debugger
            levelEntities.delete(entity);

            level.checkEntitiesPoints.push(entity.pos.x - 301);
            level.checkEntitiesPoints.push(entity.pos.x - 300);
            level.checkEntitiesPoints.push(entity.pos.x - 299);

            level.toBeAddedEntities.push({
                name: entity.name,
                hashId: entity.hashId,
                gridPos: {
                    x: entity.pos.x / 16,
                    y: entity.pos.y / 16
                }
            });

            console.log('deleteUselessEntities; levelEntities.length = ', levelEntities.size);
        }
    })
}

function createPlayerEnv(playerEntity) {
    const playerEnv = new Entity();
    const playerControl = new PlayerController();
    playerControl.setPlayer(playerEntity);
    playerEnv.addTrait(playerControl);

    return playerEnv;
}

async function main(canvas) {
    const context = canvas.getContext('2d');

    const [entityFactory, font] = await Promise.all([
        loadEntities(),
        loadFont()
    ]);
    const loadLevel = await createLevelLoader(entityFactory);
    const level = await loadLevel('1-1');

    const camera = new Camera();

    const mario = entityFactory.mario();
    mario.pos.set(4*16, 12*16);
    level.entities.add(mario);

    const playerEnv = createPlayerEnv(mario);
    level.entities.add(playerEnv);

    level.comp.layers.push(createDashboardLayer(font, playerEnv));

    /*Debug Tools : */
    level.comp.layers.push(createCollisionLayer(level));
    // level.comp.layers.push(createCameraLayer(camera));
    // setupMouseControl(canvas, mario, camera);

    // TODO Optimize Hack for Compatibility
    let fps = 1/60;

    const uaInfo = getUserAgent();
    if (uaInfo.platform === 'Android' ||
        uaInfo.platform === 'iOS') {
        setupTouchPad(mario);

        // For low-end device, decrease fps for performance.
        // if ((uaInfo.platform === 'iOS' && uaInfo.ver < 11)
        //       || (uaInfo.platform === 'Android' && uaInfo.ver < 7)) {
        //     fps = 1/20;
        // }

        // if (uaInfo.platform === 'iOS') {
        //     autoPlayOniOS();
        // }
    } else {
        const input = setupKeyboard(mario);
        input.listenTo(window);
    }

    const timer = new Timer(fps);

    let intCameraPosX = 0;

    timer.update = function update(deltaTime) {
        level.update(deltaTime);

        camera.pos.x = Math.max(0, mario.pos.x - 100);

        level.comp.draw(context, camera);

        // debugger
        intCameraPosX = Math.floor(camera.pos.x);
        // if ((intCameraPosX > 30) &&
        //     (intCameraPosX % 200 < 50)) {

        const checkEntitiesPointIndex = level.checkEntitiesPoints.indexOf(intCameraPosX);
        if (checkEntitiesPointIndex !== -1) {
            // debugger
            level.checkEntitiesPoints.splice(checkEntitiesPointIndex, 1);
            // 写在这里，触发次数已经降低到了三位数级别，且实现了想要的功能，但明显还能继续优化。
            // 最理想的状态是，只有当“需要”添加实体时，才检测一次，
            // 一个关卡有几个实体，就只有几次 checkEntities
            console.log('checkEntities');
            checkEntities(level, entityFactory, camera);
            deleteUselessEntities(level, level.entities, camera);
        }
    };

    timer.start();
}


const canvas = document.getElementById('screen');
main(canvas);