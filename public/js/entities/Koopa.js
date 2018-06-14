import Entity, {Sides, Trait} from '../Entity.js';
import {loadSpriteSheet} from '../loader.js';
import PendulumWalk from '../traits/PendulumMove.js';
import Solid from '../traits/Solid.js'
import Physics from '../traits/Physics.js'
import Killable from '../traits/Killable.js';

export function loadKoopa() {
    return loadSpriteSheet('koopa')
        .then(createKoopaFactory)
}

const STATE_WALKING = Symbol('walking');
const STATE_HIDING = Symbol('hiding');
const STATE_PANIC = Symbol('panic');

class Behavior extends Trait {
    constructor() {
        super('behavior');
        this.state = STATE_WALKING;
        this.hideTime = 0;
        this.hideDuration = 3;
        this.panicSpeed = 200;
        this.walkSpeed = null;
    }

    collides(us, them) {
        if (us.killable.dead) {
            return;
        }

        if (them.stomer) {
            if (them.pos.y < us.pos.y) {
                this.handleState(us, them);
            } else {
                this.handleKick(us, them);
            }
        }
    }

    handleKick(us, them) {
        if (this.state === STATE_WALKING) {
            them.killable.kill();
        } else if (this.state === STATE_HIDING) {
            this.panic(us, them);
        } else if (this.state === STATE_PANIC) {
            const travelDir = Math.sign(us.vel.x);
            const impactDir = Math.sign(us.pos.x - them.pos.x);
            if (travelDir !== 0 && impactDir !== travelDir) {
                them.killable.kill();
            }
        }
    }

    handleState(us, them) {
        if (this.state === STATE_WALKING) {
            if (us.pendulumMove.speed !== 0) {
                this.walkSpeed = us.pendulumMove.speed;
            }
            this.hiding(us);
        } else if (this.state === STATE_HIDING) {
            us.killable.kill();
            us.vel.set(100, -200);
            us.solid.obstructs = false;
        } else if (this.state === STATE_PANIC) {
            this.hiding(us);
        }
    }

    hiding(us) {
        us.vel.x = 0;
        us.pendulumMove.enable = false;
        this.state = STATE_HIDING;
    }

    unHide(us) {
        us.vel.x = 100;
        us.pendulumMove.enable = true;
        us.pendulumMove.speed = this.walkSpeed;
        this.state = STATE_WALKING;
        this.hideTime = 0;
    }

    panic(us, them) {
        us.pendulumMove.enable = true;
        us.pendulumMove.speed = this.panicSpeed * Math.sign(them.vel.x);
        this.state = STATE_PANIC;
    }

    update(us, deltaTime) {
        if (this.state === STATE_HIDING) {
            this.hideTime += deltaTime;

            if (this.hideTime > this.hideDuration) {
                this.unHide(us);
            }
        }
    }
}

function createKoopaFactory(sprite) {
    const walkAnim = sprite.animations.get('walk');
    const wakeAnim = sprite.animations.get('wake');


    function routeAnim(koopa) {
        if (koopa.behavior.state === STATE_HIDING) {
            if (koopa.behavior.hideTime > 2) {
                return wakeAnim(koopa.behavior.hideTime);
            }
            return 'hiding';
        }
        if (koopa.behavior.state === STATE_PANIC) {
            return 'hiding'
        }

        return walkAnim(koopa.lifeTime);
    }

    function drawKoopa(context) {
        sprite.draw(routeAnim(this), context, 0, 0, this.vel.x < 0);
    }

    return function createKoopa() {
        const koopa = new Entity();
        koopa.size.set(16, 16);
        koopa.offset.y = 8;

        koopa.addTrait(new Physics());
        koopa.addTrait(new Solid());
        koopa.addTrait(new PendulumWalk());
        koopa.addTrait(new Behavior());
        koopa.addTrait(new Killable());

        koopa.draw = drawKoopa;

        return koopa;
    }
}

