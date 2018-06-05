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
            entity.bounds.left, entity.bounds.right,
           entity.bounds.top, entity.bounds.bottom
        );

        matches.forEach(match => {
            // TODO: Improve a better logic, maybe not here
            if (match.tile.type === 'death-border') {
                entity.killable.kill();
            }

            if (match.tile.type !== 'ground') {
                return;
            }

            if (entity.vel.x > 0) {
                if (entity.bounds.right > match.x1) {
                    entity.obstruct(Sides.LEFT, match);
                }
            } else if (entity.vel.x < 0) {
                if (entity.bounds.left < match.x2) {
                    entity.obstruct(Sides.RIGHT, match);
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
            entity.bounds.top, entity.bounds.bottom
        );

        matches.forEach(match => {
            if (match.tile.type === 'death-border') {
                entity.killable.kill();
            }

            if (match.tile.type !== 'ground') {
                return;
            }

            if (entity.vel.y > 0) {
                if (entity.bounds.bottom > match.y1) {
                    entity.obstruct(Sides.BOTTOM, match);
                }
            } else if (entity.vel.y < 0) {
                if (entity.pos.y < match.y2) {
                    entity.obstruct(Sides.TOP, match);
                }
            }
        })

    }

}
