import Entity from '../Entity.js'
// import Velocity from '../traits/Velocity.js'
import Go from '../traits/Go.js'
import Jump from '../traits/Jump.js'
import Stomer from '../traits/Stomer.js'
import Killable from '../traits/Killable.js'
import Solid from '../traits/Solid.js'
import Physics from '../traits/Physics.js'
// import PlayerController from '../traits/PlayerController.js'
import {loadSpriteSheet} from '../loader.js';

/*Name Convention:
* 1. loadSomething is synchronous, createSomething is asynchronous.*/

export function loadMario() {
    return loadSpriteSheet('mario')
        .then(createMarioFactory)
}

function createMarioFactory(sprite) {
    const runAnim = sprite.animations.get("run");

        function frameRoute(mario) {
        if (mario.jump.falling) {
            return 'jump';
        }

        if (mario.go.distance > 0) {
            if ((mario.vel.x > 0 && mario.go.dir < 0) ||
                (mario.vel.x < 0 && mario.go.dir > 0)) {
                return 'break';
            }

            return runAnim(mario.go.distance);
        }

        return 'idle';
    }

    function drawMario(context) {
        sprite.draw(frameRoute(this), context, 0, 0, this.go.heading < 0);
    }

    return function createMario() {
        const mario = new Entity();
        mario.size.set(14, 16);
        mario.name = 'mario';

        mario.addTrait(new Physics());
        mario.addTrait(new Solid());
        mario.addTrait(new Go());
        mario.addTrait(new Jump());
        mario.addTrait(new Stomer());
        mario.addTrait(new Killable());

        mario.killable.removeAfter = 0;

        mario.draw = drawMario;

        return mario;
    }
}

