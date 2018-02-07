import TileResolver from './TileResolver.js'
import {Sides} from './Entity.js'

export default class TileCollider {
    constructor(tileMatrix) {
        this.tile = new TileResolver(tileMatrix);
    }

    checkX(entity) {
        let x;
        if (entity.vel.x > 0) {
            // mario is going toward RIGHT
            // so we just need to check the RIGHT side of entity
            x = entity.bounds.right;
        } else if (entity.vel.x < 0) {
            // mario is going toward LEFT
            // else we only need to check the LEFT side of entity
            x = entity.bounds.left;
        } else {
            return;
        }

        const matches = this.tile.searchByRange(
            x, x,
           entity.bounds.top, entity.bounds.bottom
        );

        matches.forEach(match => {
            if (match.tile.type !== 'ground') {
                return;
            }

            if (entity.vel.x > 0) {
                if (entity.bounds.right > match.x1) {
                    entity.bounds.left = match.x1 - entity.size.x;
                    entity.vel.x = 0;

                    entity.obstruct(Sides.LEFT);
                }
            } else if (entity.vel.x < 0) {
                if (entity.bounds.left < match.x2) {
                    entity.bounds.left = match.x2;
                    entity.vel.x = 0;

                    entity.obstruct(Sides.RIGHT);
                }
            }
        })

    }

    checkY(entity) {
        let y;
        if (entity.vel.y > 0) {
            // mario is going toward B
            y = entity.bounds.bottom;
        } else if (entity.vel.y < 0) {
            // mario is going toward TOP
            y =entity.bounds.top;
        } else {
            return;
        }

        const matches = this.tile.searchByRange(
            entity.bounds.left, entity.bounds.right,
            y, y
        );

        matches.forEach(match => {
            if (match.tile.type !== 'ground') {
                return;
            }

            if (entity.vel.y > 0) {
                if (entity.bounds.bottom > match.y1) {
                   entity.bounds.top = match.y1 - entity.size.y;
                   entity.vel.y = 0;

                    entity.obstruct(Sides.BOTTOM);
                }
            } else if (entity.vel.y < 0) {
                if (entity.pos.y < match.y2) {
                   entity.bounds.top = match.y2;
                   entity.vel.y = 0;

                    entity.obstruct(Sides.TOP);
                }
            }
        })

    }

}
