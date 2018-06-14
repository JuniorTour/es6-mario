import {Sides, Trait} from '../Entity.js'

/*extends keyword can be used to inherit all the properties and methods. */
export default class Jump extends Trait {
    constructor() {
        /*super keyword in here means the father class's constructor of this class. */
        super('jump');

        this.duration = 0.3;
        this.velocity = 180;
        this.engageTime = 0; // total time allow to  pressing key
        this.ready = 0;
        this.gracePeriod = 0.1;
        this.requestTime = 0;
        this.speedBoost = 0.2;
    }

    get falling() {
        return this.ready < 0;
    }

    start() {
        // if (this.ready > 0) {
        //     this.engageTime = this.duration;
        // }
        this.requestTime = this.gracePeriod;
    }

    cancel() {
        this.engageTime = 0;
        this.requestTime = 0;
    }

    obstruct(entity, side) {
        if (side === Sides.BOTTOM) {
            this.ready = 1;
        } else if (side === Sides.TOP) {
            this.cancel();
        }
    }

    update(entity, deltaTime) {
        if (this.requestTime > 0) {
            if (this.ready > 0) {
                this.engageTime = this.duration;
                this.requestTime = 0;
            }

            this.requestTime -= deltaTime;
        }


        if (this.engageTime > 0) {
            entity.vel.y = -(this.velocity + Math.abs(entity.vel.x) * this.speedBoost);
            /*If keep pressing the key, the engageTime (total time allow to  pressing key ) will decrease in a row until less than 0, which means the total time of pressing a key is bigger than the allow duration( this. duration = 0.5 (second)), so the entity.vel.y should not decrease anymore, in other words, the mario should not travel up anymore.*/
            this.engageTime -= deltaTime;
        }

        // console.log('If we are ready to jump?', this.ready)
        this.ready --;
    }
}
