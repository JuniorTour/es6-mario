import TileResolver from './TileResolver.js'

// function drawBackground(background, context, sprites) {
//     background.ranges.forEach(([xStart, xLen, yStart, yLen]) => {
//         const xEnd = xStart + xLen;
//         const yEnd = yStart + yLen;
//         for (let x = xStart; x < xEnd; x++) {
//             for (let y = yStart; y < yEnd; y++) {
//                 sprites.drawTile(background.title, context, x, y);
//             }
//         }
//     })
// }
export function createBackgroundLayer(level, tiles, sprites) {
    const resolver = new TileResolver(tiles);

    const buffer = document.createElement('canvas');
    buffer.width = 256 + 16;    // 16 + 1 column
    buffer.height = 240;

    const context = buffer.getContext('2d');

    function redraw(startIndex, endIndex) {
        // if (startIndex === drawFrom && endIndex === drawTo) {
        //     return;
        // }

        context.clearRect(0,0,buffer.width,buffer.height);

        for (let x = startIndex; x <= endIndex; x++) {
            const col = tiles.grid[x];
            if (col) {
                // console.log(x - startIndex);
                /*TODO Cannot figure out the mean of x - startIndex and -camera.pos.x % 16 OPTIMIZATION in EP 6*/
                col.forEach((tile, y) => {
                    if (sprites.animations.has(tile.name)) {
                        sprites.drawAnim(
                            tile.name,
                            context,
                            x - startIndex,
                            y,
                            level.totalTime);
                    } else {
                        sprites.drawTile(
                            tile.name,
                            context,
                            x - startIndex,
                            y);
                    }
                })
            }
        }
    }

    return function drawBackgroundLayer(context, camera) {
        const drawWidth = resolver.toIndex(camera.size.x),
                    drawFrom = resolver.toIndex(camera.pos.x);
        const drawEnd = drawFrom + drawWidth;

        redraw(drawFrom, drawEnd);

        context.drawImage(
            buffer,
            -camera.pos.x % 16,
            -camera.pos.y);
    }

    // level.titles.forEach((tile, x, y) => {
    //     sprites.drawTile(tile.name, context, x, y);
    // })
    //
    // // High-Order Function
    // return function drawBackgroundLayer(context, camera) {
    //     context.drawImage(buffer, -camera.pos.x, -camera.pos.y);
    // }
}

export function createSpriteLayer(entities, width = 64, height = 64) {
    const spriteBuffer = document.createElement('canvas')
    spriteBuffer.width = width;
    spriteBuffer.height = height;

    const spriteContext = spriteBuffer.getContext('2d');
    return function drawSpriteLayer(context, camera) {
        entities.forEach(entity => {
            spriteContext.clearRect(0, 0, width, height);   // set background to transparent.
            entity.draw(spriteContext);

            context.drawImage(
                spriteBuffer,
                entity.pos.x - camera.pos.x,
                entity.pos.y - camera.pos.y
            )
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

    return function drawCollision(context, camera) {
        context.strokeStyle = 'blue';
        resolvedTiles.forEach(({x, y}) => {
            // debugger
            // console.log("Would draw collision = ", x, y);
            context.beginPath();
            context.rect(
                x * tileSize - camera.pos.x,
                y * tileSize - camera.pos.y,
                tileSize,
                tileSize);
            context.stroke();
        })

        context.strokeStyle = 'red';
        level.entities.forEach(entity => {
            context.beginPath();
            context.rect(
                entity.pos.x - camera.pos.x,
                entity.pos.y - camera.pos.y,
                entity.size.x,
                entity.size.y);
            context.stroke();
        })

        resolvedTiles.length = 0;
    }
}

export function createCameraLayer(cameraToDraw) {
    return function drawCamera(context, fromCamera) {
        context.strokeStyle = 'purple';
        context.beginPath();
        context.rect(
            cameraToDraw.pos.x - fromCamera.pos.x,
            cameraToDraw.pos.y - fromCamera.pos.y,
            cameraToDraw.size.x,
            cameraToDraw.size.y);
        context.stroke();
    }
}
