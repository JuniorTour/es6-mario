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
            x = entity.pos.x + entity.size.x;
        } else if (entity.vel.x < 0) {
            // mario is going toward LEFT
            // else we only need to check the LEFT side of entity
            x = entity.pos.x;
        } else {
            return;
        }

        const matches = this.tile.searchByRange(
            x, x,
            entity.pos.y, entity.pos.y + entity.size.y
        );

        matches.forEach(match => {
            if (match.tile.type !== 'ground') {
                return;
            }

            if (entity.vel.x > 0) {
                if (entity.pos.x + entity.size.x > match.x1) {
                    entity.pos.x = match.x1 - entity.size.x;
                    entity.vel.x = 0;
                }
            } else if (entity.vel.x < 0) {
                if (entity.pos.x < match.x2) {
                    entity.pos.x = match.x2;
                    entity.vel.x = 0;
                }
            }
        })

    }

    checkY(entity) {
        let y;
        if (entity.vel.y > 0) {
            // mario is going toward B
            y = entity.pos.y + entity.size.y;
        } else if (entity.vel.y < 0) {
            // mario is going toward TOP
            y = entity.pos.y;
        } else {
            return;
        }

        const matches = this.tile.searchByRange(
            entity.pos.x, entity.pos.x + entity.size.x,
            y, y
        );

        matches.forEach(match => {
            if (match.tile.type !== 'ground') {
                return;
            }

            if (entity.vel.y > 0) {
                if (entity.pos.y + entity.size.y > match.y1) {
                    entity.pos.y = match.y1 - entity.size.y;
                    entity.vel.y = 0;

                    entity.obstruct(Sides.BOTTOM);
                }
            } else if (entity.vel.y < 0) {
                if (entity.pos.y < match.y2) {
                    entity.pos.y = match.y2;
                    entity.vel.y = 0;

                    entity.obstruct(Sides.TOP);
                }
            }
        })

    }

    // test(entity) {
    //     this.checkY(entity);
    //     // const match = this.tile.matchPosition(entity.pos.x, entity.pos.y)
    //     // if (match) {
    //     //     console.log('Matched', match)
    //     // }
    // }
}
