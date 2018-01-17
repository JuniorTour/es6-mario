import Compositor from './compositor.js'
import {loadLevel} from './loader.js'
import {loadBackgroundSprites, loadMarioSprite} from './sprites.js'
import {createBackgroundLayer} from './layers.js'

const canvas = document.getElementById('screen')
const context = canvas.getContext('2d')


function createSpriteLayer(sprite, pos) {
    return function drawSpriteLayer(context) {
        for (let i = 0; i < 20; ++i) {
            sprite.draw('idle', context, pos.x + i * 16, pos.y)
        }
    }
}


Promise.all([
    loadMarioSprite(),
    loadBackgroundSprites(),
    loadLevel('1-1')
])
    .then(([marioSprite, backgroundSprites, level]) => {
        const comp = new Compositor()

        const backgroundLayer = createBackgroundLayer(level.background, backgroundSprites)
        comp.layers.push(backgroundLayer)

        const pos = {
            x: 0,
            y: 0
        }

        const spriteLayer = createSpriteLayer(marioSprite, pos)
        comp.layers.push(spriteLayer)

        function update(DOMHighResTimeStamp) {
            // context.drawImage(backgroundBuffer, 0, 0)
            comp.draw(context)

            pos.x += 2
            pos.y += 2
            // marioSprite.draw('idle', context, pos.x, pos.y)

            requestAnimationFrame(update)
        }

        update()
        // marioSprite.draw('idle',context,80,80)
    })

