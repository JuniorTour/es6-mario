import {Trait} from '../Entity.js'

export default class Stomer extends Trait {
    constructor() {
        super('stomer');
        this.queueBounce = false;
        this.bounceSpeed = 400;
    }

    bounce() {
        this.queueBounce = true;
    }

    update(entity) {
        if (this.queueBounce) {
            entity.vel.y = -this.bounceSpeed;
            this.queueBounce = false;
        }
    }
}
