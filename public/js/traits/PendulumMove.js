import {Sides, Trait} from '../Entity.js'

export default class PendulumMove extends Trait {
    constructor() {
        super('pendulumMove');
        this.enable = true;
        this.speed =  -30;
    }

    obstruct(entity, side) {
        debugger
        if (side === Sides.LEFT || side === Sides.RIGHT) {
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
