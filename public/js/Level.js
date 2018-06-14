import Compositor from './compositor.js'
import EntityCollider from './EntityCollider.js'
import TileCollider from './TileCollider.js'

export default class Level {
    constructor() {
        this.gravity = 1000;
        this.comp = new Compositor();
        this.entities = new Set();
        this.entityCollider = new EntityCollider(this.entities);
        this.totalTime = 0;

        this.tileCollider = null;
    }

    setCollisionGrid(matrix) {
        this.tileCollider = new TileCollider(matrix);
    }

    update(deltaTime) {
        this.entities.forEach(entity => {
            entity.update(deltaTime, this);
        });

        this.entities.forEach(entity => {
            this.entityCollider.check(entity);
        });

        // The order of collide and finalize is determined, can not be combined.
        this.entities.forEach(entity => {
            entity.finalize();
        });

        this.totalTime += deltaTime;
    }
}
