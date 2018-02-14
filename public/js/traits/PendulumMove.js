import {Sides, Trait} from '../Entity.js'

export default class PendulumMove extends Trait {
    constructor() {
        super('pendulumMove');
        this.enable = true;
        this.speed =  -30;
    }

    obstruct(koopa, sides) {
        if (sides === Sides.LEFT || sides === Sides.RIGHT) {
            this.speed = -this.speed;
        }
    }

    update(entity, deltaTime) {
        entity.lifeTime += deltaTime;
        if (this.enable) {
            entity.vel.x = this.speed;
        }
    }
}
