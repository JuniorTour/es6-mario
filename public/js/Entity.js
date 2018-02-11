import {Vec2} from './math.js'
import BoundingBox from './BoundingBox.js'

export const Sides = {
    LEFT: Symbol('left'),
    RIGHT: Symbol('right'),
    BOTTOM: Symbol('bottom'),
    TOP: Symbol('top')
};

export class Trait {
    constructor(name) {
        this.NAME = name
    }

    collides(us, them) {
        // console.log('Collides with ', them);
    }

    obstruct() {

    }

    update() {
        // console.warn('Unhandled update call in Trait')
    }
}

export default class Entity {
    constructor() {
        this.pos = new Vec2(0,0);
        this.vel = new Vec2(0,0);
        this.size = new Vec2(0,0);
        this.offset = new Vec2(0,0);
        this.bounds = new BoundingBox(this.pos, this.size, this.offset);
        this.lifeTime = 0;

        this.traits = [];
    }

    addTrait(trait) {
        this.traits.push(trait);
        this[trait.NAME] = trait;
    }

    collides(candidate) {
        // console.log('Touched', candidate);
        this.traits.forEach(trait => {
            trait.collides(this, candidate);
        })
    }

    obstruct(side) {
        this.traits.forEach(trait => {
            trait.obstruct(this, side);
        })
    }

    update(deltaTime, level) {
        this.traits.forEach(trait => {
            trait.update(this, deltaTime, level);
        });

        this.lifeTime +=deltaTime;
    }
}
