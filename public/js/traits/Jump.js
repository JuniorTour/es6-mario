import {Trait} from '../Entity.js'

/*extends keyword can be used to inherit all the properties and methods. */
export default class Jump extends Trait {
    constructor() {
        /*super keyword in here means the father class's constructor of this class. */
        super('jump')

        this.duration = 0.5
        this.velocity = 200
        this.engageTime = 0 // total time allow to  pressing key
    }

    start() {
        this.engageTime = this.duration
    }

    cancel() {
        this.engageTime = 0
    }

    update(entity, deltaTime) {
        if (this.engageTime > 0) {
            // debugger
            entity.vel.y = -this.velocity
            console.log(entity.vel.y)
            /*If keep pressing the key, the engageTime (total time allow to  pressing key ) will decrease in a row until less than 0, which means the total time of pressing a key is bigger than the allow duration( this. duration = 0.5 (second)), so the entity.vel.y should not decrease anymore, in other words, the mario should not travel up anymore.*/
            this.engageTime -= deltaTime
        }
    }
}
