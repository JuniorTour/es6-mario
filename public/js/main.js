import '../css/main.css';
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
import {controlEntities} from './entitiesControlSystem.js';
import {createCollisionLayer} from './layers/collision.js'
// import {createCameraLayer} from './layers/camera.js';
// import {setupMouseControl} from './debug.js';

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
    const loadLevel = await createLevelLoader();
    const level = await loadLevel('1-1');

    level.entityFactory = entityFactory;
    window.level = level;

    const camera = new Camera();

    window.camera = camera;

    const mario = entityFactory.mario();
    mario.pos.set(2.5*16, 12*16);
    level.entities.add(mario);

    const playerEnv = createPlayerEnv(mario);
    level.entities.add(playerEnv);

    level.comp.layers.push(createDashboardLayer(font, playerEnv));

    /*Debug Tools : */
    level.comp.layers.push(createCollisionLayer(level));
    // level.comp.layers.push(createCameraLayer(camera));
    // setupMouseControl(canvas, mario, camera);

    let fps = 1/60;

    const uaInfo = getUserAgent();
    if (uaInfo.platform === 'Android'
        || uaInfo.platform === 'iOS') {
        setupTouchPad(mario);

        // For low-end device, decrease fps for better experience.
        if ((uaInfo.platform === 'iOS' && uaInfo.ver < 11)
              || (uaInfo.platform === 'Android' && uaInfo.ver < 7)) {
            fps = 1/30;
        }

        // TODO: Sound System - Web Audio API
        if (uaInfo.platform === 'iOS') {
            autoPlayOniOS();
        }
    } else {
        const input = setupKeyboard(mario);
        input.listenTo(window);
    }

    const timer = new Timer(fps);

    timer.update = function update(deltaTime) {
        level.update(deltaTime);

        camera.pos.x = Math.max(0, mario.pos.x - 100);

        level.comp.draw(context, camera);

        // controlEntities(camera, level, entityFactory)
    };

    timer.start();
}


const canvas = document.getElementById('screen');
main(canvas);