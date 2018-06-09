import {Matrix} from '../math.js'
import Level from '../Level.js'
import {loadJSON, loadSpriteSheet} from '../loader.js'
import {createSpriteLayer} from '../layers/sprites.js'
import {createBackgroundLayer} from '../layers/background.js'

function setupLevel(levelSpec, level) {
    const mergedCollisionGrid = levelSpec.layers.reduce((mergedTiles, layerSpec) => {
        return mergedTiles.concat(layerSpec.tiles);
    }, []);

    const collisionGrid = createCollisionGrid(mergedCollisionGrid, levelSpec.patterns);
    level.setCollisionGrid(collisionGrid);
}

function setupBackground(levelSpec, level, backgroundSprites) {
    levelSpec.layers.forEach(layer => {
        const backgroundGrid = createBackgroundGrid(layer.tiles, levelSpec.patterns);
        const backgroundLayer = createBackgroundLayer(level, backgroundGrid, backgroundSprites);
        level.comp.layers.push(backgroundLayer);
    });
}

function recordEntities(level, levelSpec) {
    const tileSize = 16;

    level.toBeAddedEntities = [];
    level.checkEntitiesPoints = [];

    levelSpec.entities.forEach(({name, positions}) => {
        positions.forEach(gridPos => {
            const hashId = `${level.toBeAddedEntities.length}`;
            level.toBeAddedEntities.push({
                hashId,
                name,
                pos: {
                    x: gridPos[0] * tileSize,
                    y: gridPos[1] * tileSize
                },
                added: false
            });

            // TODO: Optimize logic
            level.checkEntitiesPoints.push(gridPos[0] * 16 - 301);
            level.checkEntitiesPoints.push(gridPos[0] * 16 - 300);
            level.checkEntitiesPoints.push(gridPos[0] * 16 - 299);
        })
    })

    level.entitiesRecord = JSON.parse(JSON.stringify(level.toBeAddedEntities));
}

function setupEntities(level, levelSpec) {
    /*TODO: Major Performance Bottle Neck
    *
    * In order to solve this bottle-neck, I have to change the logic of adding entity.
    * Only when an entity near the Camera or Player, then it will be added.
    *  So this process should be checked synchronously with Timer.*/

    // const tileSize = 16;
    // levelSpec.entities.forEach(({name, positions}) => {
    //     positions.forEach(([x, y]) => {
    //         // debugger
    //         if (x > (camera.pos - (8 * tileSize)) || x < (camera.pos + (8 * tileSize))) {
    //             const createEntity = entityFactory[name];
    //             const entity = createEntity();
    //             entity.pos.set(x*tileSize, y*tileSize);
    //             level.entities.add(entity);
    //         }
    //     })
    // });

    recordEntities(level, levelSpec);

    const spriteLayer = createSpriteLayer(level.entities);
    level.comp.layers.push(spriteLayer);
}

export function createLevelLoader() {
    return function loadLevel(name) {
        return loadJSON(`../assets/levels/${name}.json`)
            .then(levelSpec => Promise.all([
                levelSpec,
                loadSpriteSheet(levelSpec.spriteSheet)
            ]))
            .then(([levelSpec, backgroundSprites]) => {
                const level = new Level();

                setupLevel(levelSpec, level);
                setupBackground(levelSpec, level, backgroundSprites);
                setupEntities(level, levelSpec);

                return level;
            })
    }
}

function createCollisionGrid(tiles, patterns) {
    const grid = new Matrix();

    for (const {tile, x, y} of expandTiles(tiles, patterns)) {
        grid.set(x, y, {type: tile.type})
    }

    return grid;
}

function createBackgroundGrid(tiles, patterns) {
    const grid = new Matrix();

    for (const {tile, x, y} of expandTiles(tiles, patterns)) {
        grid.set(x, y, {name: tile.name})
    }

    return grid;
}

// ES6 Generator Function
function* expandSpan(xStart, xLen, yStart, yLen) {
    // debugger
    // const coords = [];
    const xEnd = xStart + xLen;
    const yEnd = yStart + yLen;
    for (let x = xStart; x < xEnd; x++) {
        for (let y = yStart; y < yEnd; y++) {
            // coords.push({x, y});
            yield {x, y};
            // create a Iterator Object for the following for...of
        }
    }

    // return coords;
}

function expandRange(range) {
    if (range.length === 4) {
        const [xStart, xLen, yStart, yLen] = range;
        return expandSpan(xStart, xLen, yStart, yLen)
    } else if (range.length === 3) {
        const [xStart, xLen, yStart] = range;
        return expandSpan(xStart, xLen, yStart, 1)
    } else if (range.length === 2) {
        const [xStart, yStart] = range;
        return expandSpan(xStart, 1, yStart, 1)
    }
}

function* expandRanges(ranges) {
    for (const range of ranges) {
        yield* expandRange(range);
    }
}

function* expandTiles(tiles, patterns) {
    // let expandedTiles = [];

    function* walkTiles(tiles, offsetX, offsetY) {
        for (const tile of tiles) {
            for (const {x, y} of expandRanges(tile.ranges)) {
                /* http://es6.ruanyifeng.com/?search=yield&x=0&y=0#docs/generator#for---of-%E5%BE%AA%E7%8E%AF
                 Use for...of to iterate the Iterator Object generated by the yield of Generator Function.*/
                const derivedX = x + offsetX;
                const derivedY = y + offsetY;

                // debugger
                if (tile.pattern) {
                    // console.log(patterns[tile.pattern]);
                    const tiles = patterns[tile.pattern].tiles;
                    // createTiles(level, tiles, patterns, derivedX, derivedY);
                    /*TODO:Figure out th useage of yield**/
                    yield* walkTiles(tiles, derivedX, derivedY);
                } else {
                    yield {
                        tile,
                        x: derivedX,
                        y: derivedY
                    };
                    // expandedTiles.push({
                    //     tile,
                    //     x: derivedX,
                    //     y: derivedY
                    // });
                }
            }
        }
    }

    yield* walkTiles(tiles, 0, 0);

    // return expandedTiles;
}
