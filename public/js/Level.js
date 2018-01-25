import Compositor from './compositor.js'
import TileCollider from './TileCollider.js'
import {Matrix} from './math.js'

export default class Level {
    constructor() {
        this.gravity = 2000;
        this.comp = new Compositor()
        this.entities = new Set()
        this.titles = new Matrix()

        this.tileCollider = new TileCollider(this.titles)
    }

    update(deltaTime) {
        this.entities.forEach(entity => {
            entity.update(deltaTime);

            entity.vel.y += this.gravity * deltaTime

            entity.pos.x += entity.vel.x * deltaTime;
            this.tileCollider.checkX(entity);

            entity.pos.y += entity.vel.y * deltaTime;
            this.tileCollider.checkY(entity);

            // this.tileCollider.test(entity)
        })
    }
}
