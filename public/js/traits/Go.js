import {Trait} from '../Entity.js'

/*extends keyword can be used to inherit all the properties and methods. */
export default class Go extends Trait {
    constructor() {
        /*super keyword in here means the father class's constructor of this class. */
        super('go');

        this.dir = 0;
        this.acceleration = 300;
        this.deceleration = 200;
        this.dragFactor = 1/5000;

        this.distance = 0;
        this.heading = 1;
    }

    update(entity, deltaTime) {
        const absX = Math.abs(entity.vel.x);

        if (this.dir !== 0) {
            entity.vel.x += this.acceleration * deltaTime * this.dir;
            if (entity.jump) {
                if (!entity.jump.falling) {
                    this.heading = this.dir;
                }
            } else {
                this.heading = this.dir;
            }
        } else if (entity.vel.x !== 0) {
            const decel = Math.min(absX, this.deceleration * deltaTime);
            entity.vel.x += entity.vel.x > 0 ? -decel : decel;
        } else {
            this.distance = 0;
        }

        const drag = this.dragFactor * entity.vel.x * absX;
        entity.vel.x -= drag;

        this.distance += absX * deltaTime;
    }
}
