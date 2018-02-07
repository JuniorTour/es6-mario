import Timer from './Timer.js'
import Camera from './Camera.js'
import {loadLevel} from './loaders/level.js'
import {loadEntities} from './entities.js'
import {createCollisionLayer, createCameraLayer} from './layers.js'
import {setupKeyboard} from './input.js'
// import {setupMouseControl} from './debug.js'


const canvas = document.getElementById('screen');
const context = canvas.getContext('2d');

Promise.all([
    loadEntities(),
    loadLevel('1-1')
])
    .then(([entity, level]) => {
        const camera = new Camera();

        const mario = entity.mario();
        mario.pos.set(64, 100);
        level.entities.add(mario);

        const goomba = entity.goomba();
        goomba.pos.set(195, 40);
        level.entities.add(goomba);

        const koopa = entity.koopa();
        koopa.pos.set(180, 40);
        level.entities.add(koopa);


        const input = setupKeyboard(mario);
        input.listenTo(window);

        /*Debug Tools : */

        level.comp.layers.push(
            createCollisionLayer(level),
            createCameraLayer(camera));

        // setupMouseControl(canvas, mario, camera);


        const timer = new Timer(1/60);

        timer.update = function update(deltaTime) {
            level.update(deltaTime);

            if (mario.pos.x > 100) {
                camera.pos.x = mario.pos.x - 100;
            }

            level.comp.draw(context, camera);
        };

        timer.start();

    })

