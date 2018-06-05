import '../css/main.css';
import '../css/controller.css';
/*TODO: CSS import in Js, I don't like it.*/

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
// import {createCollisionLayer} from './layers/collision.js'
// import {createCameraLayer} from './layers/camera.js';
// import {setupMouseControl} from './debug.js';

function addEntities(level, targetEntity, entityFactory) {
    const tileSize = 16;
    // debugger
    const createEntity = entityFactory[targetEntity.name];
    const entity = createEntity();
    entity.pos.set(targetEntity.gridPos.x*tileSize, targetEntity.gridPos.y*tileSize);
    entity.hashId = targetEntity.hashId;
    level.entities.add(entity);
}

function checkEntities(level, entityFactory, camera) {
    /*The logic can be:
    * 0. When game initiating, record the entity pos and a Unique id for identifying.
    * 1. During playing, check the pos recorded continuously.
    * 2. If the pos of an entity is near the camera, And it was not added yet (judge by id), then add it to game.
    * 3. When an entity was killed, delete it from level.entities.
    * 4. When the camera get close to the entity Once Again(How to detect???), add it again.
    *
    * Data Struc: Two Set.
    *
    * Step 4 is difficult now, so I decide to just implement the others.*/

    const tileSize = 16;
    level.recordedEntities.forEach(entity => {
        const disFromCamera = (entity.gridPos.x * tileSize) - camera.pos.x;
        let hasAdded = false;

        let addedEntity;
        for (addedEntity of level.entities) {
            if (addedEntity.hashId &&
                 addedEntity.hashId === entity.hashId) {
                hasAdded = true;
                break;
            }

        }

        if (disFromCamera < 400 && disFromCamera > -400) {
            if (!hasAdded) {
                debugger
                addEntities(level, entity, entityFactory);
            }
        } else {
            // if (hasAdded) {
            //     // remove added entity
            //     debugger
            //     level.entities.delete(addedEntity);
            // }
        }

        // level.entities.forEach(addedEntity => {
        //     if (addedEntity.hashId &&
        //          addedEntity.hashId === entity.hashId) {
        //         hasAdded = true;
        //     }
        // });

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
    // level.comp.layers.push(createCollisionLayer(level));
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

    timer.update = function update(deltaTime) {
        level.update(deltaTime);

        camera.pos.x = Math.max(0, mario.pos.x - 100);

        level.comp.draw(context, camera);

        // debugger
        checkEntities(level, entityFactory, camera);
    };

    timer.start();
}


const canvas = document.getElementById('screen');
main(canvas);