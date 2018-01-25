
function drawBackground(background,context,sprites) {
    background.ranges.forEach(([x1,x2,y1,y2]) => {
        for (let x = x1; x < x2; x++) {
            for (let y = y1; y < y2; y++) {
                sprites.drawTile(background.title, context, x, y);
            }
        }
    })
}

export function createBackgroundLayer(level, sprites) {
    const buffer = document.createElement('canvas')
    buffer.width = 356;
    buffer.height = 486;

    const context = buffer.getContext('2d');

    level.titles.forEach((tile, x, y) => {
        sprites.drawTile(tile.name, context, x, y);
    })

    // High-Order Function
    return function drawBackgroundLayer(context) {
        context.drawImage(buffer, 0, 0);
    }
}

export function createSpriteLayer(entities) {
    return function drawSpriteLayer(context) {
        entities.forEach(entity => {
            entity.draw(context);
        })
    }
}

// CollisionLayer used to debug
export function createCollisionLayer(level) {
    const resolvedTiles = [];

    const tileResolver = level.tileCollider.tile;
    const tileSize = tileResolver.tileSize;

    const getByIndexOriginal = tileResolver.getByIndex;
    tileResolver.getByIndex = function getByIndexFake(x, y) {
        // console.log("The pos of tile = ", x, y);
        resolvedTiles.push({x, y});
        return getByIndexOriginal.call(tileResolver, x, y);
    }

    return function drawCollision(context) {
        context.strokeStyle = 'blue';
        resolvedTiles.forEach(({x, y}) => {
            // debugger
            // console.log("Would draw collision = ", x, y);
            context.beginPath();
            context.rect(x * tileSize, y * tileSize, tileSize, tileSize);
            context.stroke();
        })

        context.strokeStyle = 'red';
        level.entities.forEach(entity => {
            context.beginPath();
            context.rect(
                entity.pos.x, entity.pos.y,
                entity.size.x, entity.size.y);
            context.stroke();
        })

        resolvedTiles.length = 0;
    }
}
