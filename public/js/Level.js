import Compositor from './compositor.js'
import EntityCollider from './EntityCollider.js'
import TileCollider from './TileCollider.js'
import MusicController from "./MusicController";

export default class Level {
    constructor() {
        this.gravity = 1500;
        this.comp = new Compositor();
        this.entities = new Set();
        this.entityCollider = new EntityCollider(this.entities);
        this.totalTime = 0;
        this.music = new MusicController()
        this.tileCollider = null;
    }

    setCollisionGrid(matrix) {
        this.tileCollider = new TileCollider(matrix);
    }

    update(gameContext) {
        this.entities.forEach(entity => {
            entity.update(gameContext, this);
        });


        this.entities.forEach(entity => {
            entity.finalize();

            this.entityCollider.check(entity);
        });

        this.totalTime += gameContext.deltaTime;
    }
}
