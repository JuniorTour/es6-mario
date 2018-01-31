import Entity from './Entity.js'
// import Velocity from './traits/Velocity.js'
import Go from './traits/Go.js'
import Jump from './traits/Jump.js'
// import {loadMarioSprite} from './sprites.js'
import {loadSpriteSheet} from './loader.js';
import {createAnim} from './anim.js'

export function createMario() {
    return loadSpriteSheet('mario')
        .then(sprite => {
            const mario = new Entity();
            mario.size.set(14, 16);

            mario.addTrait(new Go());
            mario.addTrait(new Jump());
            // mario.addTrait(new Velocity());

            const runAnim = createAnim(['run-1', 'run-2', 'run-3'], 10);

            function frameRoute(mario) {
                if (mario.go.dir !== 0) {
                    return runAnim(mario.go.distance);
                }

                return 'idle';
            }

            mario.draw = function drawMario(context) {
                sprite.draw(frameRoute(this), context, 0, 0, this.go.heading < 0);
            }

            return mario;
        })
}
