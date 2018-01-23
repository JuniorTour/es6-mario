import {Trait} from '../Entity.js'

/*extends keyword can be used to inherit all the properties and methods. */
export default class Velocity extends Trait {
    constructor() {
        /*super keyword in here means the father class's constructor of this class. */
        super('velocity')
    }

    update(entity, deltaTime) {
        entity.pos.x += entity.vel.x * deltaTime
        entity.pos.y += entity.vel.y * deltaTime
    }
}
