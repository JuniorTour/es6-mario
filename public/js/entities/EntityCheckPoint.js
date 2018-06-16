import Entity from '../Entity.js';
import {Trait} from '../Entity.js';

class Behaviour extends Trait {
    constructor() {
        super('checkEntity');
    }

    collides(us, them, levelEntities) {

        if (them.name === 'mario') {
            console.log('mario collides entity check point');
            levelEntities.delete(us);
        }
    }
}

export function createEntityCheckPoint(targetPosX) {
    const entityCheckPoint = new Entity();
    entityCheckPoint.size.set(1, 256);
    entityCheckPoint.pos.set(targetPosX, 0);

    entityCheckPoint.addTrait(new Behaviour());

    return entityCheckPoint;
}
