import Entity from './Entity.js'
import {loadMarioSprite} from './sprites.js'

export function createMario() {
    return loadMarioSprite()
        .then(sprite => {
            const mario = new Entity()

            mario.draw = function drawMario(context) {
                sprite.draw('idle', context, this.pos.x, this.pos.y)
            }

            mario.update = function updateMario (deltaTime) {
                // debugger
                mario.pos.x += mario.vel.x * deltaTime
                mario.pos.y += mario.vel.y * deltaTime
                // Y axis is different in direction！
            }

            return mario
        })

}
