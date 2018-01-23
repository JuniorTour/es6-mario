import Compositor from './compositor.js'
import Timer from './Timer.js'
import {loadLevel} from './loader.js'
import {loadBackgroundSprites, loadMarioSprite} from './sprites.js'
import {createBackgroundLayer, createSpriteLayer} from './layers.js'
import {createMario} from './entities.js'
import  keyBoard from './KeyboardState.js'


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

        const gravity = 2000;
        mario.pos.set(64, 180);
        mario.vel.set(200, -600);


        const SPACE = 32
        const input = new keyBoard()
        input.addMapping(SPACE, keyState => {
            console.log(keyState)

            // Fantastic! - 妙！
            if (keyState) {
                mario.jump.start()
            } else {
                mario.jump.cancel()
            }
            console.log(mario.pos)
        })
        input.listenTo(window)

        const spriteLayer = createSpriteLayer(mario)
        comp.layers.push(spriteLayer)

        const timer = new Timer(1/60)

        timer.update = function update(deltaTime) {
            mario.update(deltaTime)
            // console.log(mario.pos)
            comp.draw(context)
            mario.vel.y += gravity * deltaTime
        }

        timer.start()

    })

