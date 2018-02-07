import {Sides} from '../Entity.js'
import {Trait} from '../Entity.js'

export default class PendulumWalk extends Trait {
    constructor() {
        super('pendulum');
        this.speed =  -30;
    }

    obstruct(koopa, sides) {
        if (sides === Sides.LEFT || sides === Sides.RIGHT) {
            this.speed = -this.speed;
        }
    }

    update(entity, deltaTime) {
        entity.lifeTime += deltaTime;
        entity.vel.x = this.speed;
    }
}
