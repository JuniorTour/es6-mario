import Entity, {Sides, Trait} from '../Entity.js'
import {loadSpriteSheet} from '../loaders/sprite.js';
import PendulumWalk from '../traits/PendulumMove.js';
import Killable from '../traits/Killable.js';
import Solid from '../traits/Solid.js'
import Physics from '../traits/Physics.js'

export function loadGoomba() {
    return loadSpriteSheet('goomba')
        .then(createGoombaFactory)
}

class Behavior extends Trait {
    constructor() {
        super('behavior');
    }

    collides(us, them) {
        // us is our goomba, them often are mario.
        if (us.killable.dead) {
            return;
        }

        if (them.stomer) {
            if (them.vel.y > us.vel.y) {
                us.killable.kill();
                us.pendulumMove.speed = 0;
            } else {
                them.killable.kill();
            }
        }
    }
}

function createGoombaFactory(sprite) {
    const walkAnim = sprite.animations.get('walk');

    function routeAnim(goomba) {
        if (goomba.killable.dead) {
            return 'flat';
        }

        return walkAnim(goomba.lifeTime);
    }

    function drawGoomba(context) {
        sprite.draw(routeAnim(this), context, 0, 0);
    }

    return function createGoomba() {
        const goomba = new Entity();
        goomba.size.set(16, 16);

        goomba.addTrait(new Physics());
        goomba.addTrait(new Solid());
        goomba.addTrait(new PendulumWalk());
        goomba.addTrait(new Behavior());
        goomba.addTrait(new Killable());

        goomba.draw = drawGoomba;

        return goomba;
    }
}

