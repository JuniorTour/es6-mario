import {Trait} from '../Entity.js'

/*extends keyword can be used to inherit all the properties and methods. */
export default class Go extends Trait {
    constructor() {
        /*super keyword in here means the father class's constructor of this class. */
        super('go');

        this.dir = 0;
        this.speed = 6000;
    }

    update(entity, deltaTime) {
        entity.vel.x = this.speed * this.dir * deltaTime;
    }
}
