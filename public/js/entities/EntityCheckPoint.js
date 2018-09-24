import Entity from '../Entity.js';
import {Trait} from '../Entity.js';
import {controlEntities} from '../entitiesControlSystem.js';

class Behaviour extends Trait {
    constructor() {
        super('checkEntity');
    }

    collides(us, them, levelEntities) {

        if (them.type === 'player') {
            console.log('mario collides entity check point');
            levelEntities.delete(us);

            controlEntities(them, window.level, window.level.entityFactory);
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
