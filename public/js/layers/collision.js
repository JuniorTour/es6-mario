
function createEntityLayers(entities) {
    return function drawBoundingBox(context, camera) {
        context.strokeStyle = 'red';
        entities.forEach(entity => {
            context.beginPath();
            context.rect(
                entity.pos.x - camera.pos.x,
                entity.pos.y + entity.offset.y - camera.pos.y,
                entity.size.x,
                entity.size.y);
            context.stroke();
        });
    }
}

function createTileCandidateLayer(tileCollider) {
    const resolvedTiles = [];

    const tileResolver = tileCollider.tile;
    const tileSize = tileResolver.tileSize;

    const getByIndexOriginal = tileResolver.getByIndex;
    tileResolver.getByIndex = function getByIndexFake(x, y) {
        // console.log("The pos of tile = ", x, y);
        resolvedTiles.push({x, y});
        return getByIndexOriginal.call(tileResolver, x, y);
    };

    return function drawTileCandidates(context, camera) {
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
        });

        resolvedTiles.length = 0;
    }
}

// CollisionLayer used to debug
export function createCollisionLayer(level) {


    const drawTileCandidates = createTileCandidateLayer(level.tileCollider);
    const drawBoundingBoxes = createEntityLayers(level.entities);

    return function drawCollision(context, camera) {

        drawTileCandidates(context, camera);
        drawBoundingBoxes(context, camera);
    }
}
