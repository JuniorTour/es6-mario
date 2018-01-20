import Compositor from './compositor.js'
import Timer from './Timer.js'
import {loadLevel} from './loader.js'
import {loadBackgroundSprites, loadMarioSprite} from './sprites.js'
import {createBackgroundLayer, createSpriteLayer} from './layers.js'
import {createMario} from './entities.js'

const canvas = document.getElementById('screen')
const context = canvas.getContext('2d')


Promise.all([
    createMario(),
    loadBackgroundSprites(),
    loadLevel('1-1')
])
    .then(([mario, backgroundSprites, level]) => {
        const comp = new Compositor()

        const backgroundLayer = createBackgroundLayer(level.background, backgroundSprites)
        // comp.layers.push(backgroundLayer)

        // const gravity = 0.5
        // mario.pos.set(60,180)
        // mario.vel.set(2,-10)

        const gravity = 30;
        mario.pos.set(64, 180);
        mario.vel.set(200, -600);

        const spriteLayer = createSpriteLayer(mario)
        comp.layers.push(spriteLayer)

        const timer = new Timer(1/60)

        timer.update = function update(deltaTime) {
                comp.draw(context)
                mario.update(deltaTime)
                mario.vel.y += gravity
        }

        timer.start()

    })

