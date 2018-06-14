import {Trait} from '../Entity.js'

export default class Stomer extends Trait {
    constructor() {
        super('stomer');
        this.bounceSpeed = 200;

        this.onStomp = function () {}
    }

    bounce(us, them) {
        us.bounds.bottom = them.bounds.top;
        us.vel.y = -this.bounceSpeed;
    }

    collides(us, them) {
        if (!them.killable || them.killable.dead) {
            return;
        }

        debugger
        if ( us.vel.y > them.vel.y) {
            this.bounce(us, them);
            this.onStomp(us, them);
        }
    }
}
