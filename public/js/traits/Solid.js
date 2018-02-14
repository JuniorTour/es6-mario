import {Sides, Trait} from '../Entity.js'

export default class Solid extends Trait {
    constructor() {
        super('solid');
        this.obstructs =true;
    }

    obstruct(entity, sides, match) {
        if (!this.obstructs) {
            return;
        }

        if (sides === Sides.BOTTOM) {
            entity.bounds.top = match.y1 - entity.size.y;
            entity.vel.y = 0;
        } else if (sides === Sides.TOP) {
            entity.bounds.top = match.y2;
            entity.vel.y = 0;
        } else if (sides === Sides.LEFT) {
            entity.bounds.left = match.x1 - entity.size.x;
            entity.vel.x = 0;
        } else if (sides === Sides.RIGHT) {
            entity.bounds.left = match.x2;
            entity.vel.x = 0;
        }
    }
}
