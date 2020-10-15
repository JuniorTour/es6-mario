import '../css/main.css';
import '../css/controller.css';
/*TODO: CSS import in Js, I don't like it.*/

import Timer from './Timer.js';
import Camera from './Camera.js';
import {createLevelLoader} from './loaders/level.js';
import {loadFont} from './loaders/font.js';
import {loadEntities} from './entities.js';
import {createDashboardLayer} from './layers/dashboard.js';
import {setupTouchPad, setupKeyboard} from './input/input.js';
import {getUserAgent} from './polyfills/getUserAgent.js';
import {autoPlayOniOS} from './polyfills/autoPlayOniOS.js';
import {createPlayerEnv, createPlayer} from "./player";
import {loadImage} from "./loader";
import {createWaitingLayer} from "./layers/wating";
// import {createCollisionLayer} from './layers/collision.js'
// import {createCameraLayer} from './layers/camera.js';
// import {setupMouseControl} from './debug.js';

let curRunningGameTimer = null
const startControlDemo = (totalTime, mario) => {
    if (totalTime < 5) {
        if (totalTime >= 3) {
            mario.go.dir = 1
        }
        if (totalTime >= 4.2 && totalTime < 4.5) {
            mario.jump.start()
        }
    } else {
        mario.go.dir = totalTime.toFixed() % 2 ? 1: -1
    }
}

async function main(canvasLayers, isWaitingScreen) {
    const threeLayersContext = [].map.call(canvasLayers, canvas => {
        return canvas.getContext('2d');
    })
    // const context = canvas.getContext('2d');

    const audioContext = new window.AudioContext()
    const [entityFactory, font] = await Promise.all([
        loadEntities(audioContext),
        loadFont()
    ]);
    const loadLevel = await createLevelLoader(entityFactory);
    const level = await loadLevel('1-1');

    const camera = new Camera();

    const mario = createPlayer(entityFactory.mario());
    mario.pos.set(4*16, 12*16);
    level.entities.add(mario);

    const playerEnv = createPlayerEnv(mario);
    level.entities.add(playerEnv);

    level.comp.layers.push(createDashboardLayer(font, playerEnv, isWaitingScreen));

    if (isWaitingScreen) {
        const logoImg = await loadImage('/assets/img/logo.png')
        level.comp.layers.push(createWaitingLayer(font, logoImg));
    }

    /*Debug Tools : */
    // level.comp.layers.push(createCollisionLayer(level));
    // level.comp.layers.push(createCameraLayer(camera));
    // setupMouseControl(canvas, mario, camera);

    // TODO Optimize Hack for Compatibility
    let fps = 1/60;

    const uaInfo = getUserAgent();
    if (uaInfo.platform === 'Android' ||
        uaInfo.platform === 'iOS') {
        if (!isWaitingScreen) {
            setupTouchPad(mario);
        }

        // For low-end device, decrease fps for performance.
        if ((uaInfo.platform === 'iOS' && uaInfo.ver < 10)
              || (uaInfo.platform === 'Android' && uaInfo.ver < 7)) {
            fps = 1/20;
        }

        if (uaInfo.platform === 'iOS') {
            autoPlayOniOS();
        }
    } else {
        // TODO: listen to window.onresize???
        if (!isWaitingScreen) {
            const input = setupKeyboard(mario);
            input.listenTo(window);
        }
    }

    const gameContext = {
        accumulatedTime: 0,
        deltaTime: undefined,
        audioContext
        // audioBoard
    }

    const timer = new Timer(fps);

    timer.update = function update(deltaTime) {
        gameContext.accumulatedTime += deltaTime
        gameContext.deltaTime = deltaTime
        level.update(gameContext);

        camera.pos.x = Math.max(0, mario.pos.x - 100);

        level.comp.draw(threeLayersContext, camera);

        if (isWaitingScreen) {
            startControlDemo(gameContext.accumulatedTime, mario)
        }
    };

    timer.start();
    if (!isWaitingScreen) {
        level.music.player.playTrack('main')
    }

    curRunningGameTimer = timer
}


const canvasLayers = document.querySelectorAll('.layer');
main(canvasLayers)


const layers = [...document.querySelectorAll('canvas')];
var x = 0;
var y = 0;
let distance = 0;

function update() {
    layers.forEach((layer, i) => {
        layer.style.transform = [
            `rotateX(${y}deg)`,
            `rotateY(${-x}deg)`,
            `translateZ(${i * distance}px)`,
        ].join(' ');
    });
}

document.addEventListener('mousewheel', event => {
    distance += event.wheelDelta * 0.2;
    update();
});

document.addEventListener('mousemove', event => {
    if (event.buttons === 1) {
        x += event.movementX;
        y += event.movementY;
        update();
    }
});