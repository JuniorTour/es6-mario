/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 9);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__math_js__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__BoundingBox_js__ = __webpack_require__(12);



const Sides = {
    LEFT: Symbol('left'),
    RIGHT: Symbol('right'),
    BOTTOM: Symbol('bottom'),
    TOP: Symbol('top')
};
/* harmony export (immutable) */ __webpack_exports__["a"] = Sides;


class Trait {
    constructor(name) {
        this.NAME = name;

        this.tasks = [];
    }

    finalize() {
        this.tasks.forEach(task => task());
        this.tasks.length = 0;
    }

    queue(task) {
        this.tasks.push(task);
    }

    collides(us, them) {
        // console.log('Collides with ', them);
    }

    obstruct() {

    }

    update() {
        // console.warn('Unhandled update call in Trait')
    }
}
/* harmony export (immutable) */ __webpack_exports__["b"] = Trait;


class Entity {
    constructor() {
        this.canCollides = true;

        this.pos = new __WEBPACK_IMPORTED_MODULE_0__math_js__["b" /* Vec2 */](0,0);
        this.vel = new __WEBPACK_IMPORTED_MODULE_0__math_js__["b" /* Vec2 */](0,0);
        this.size = new __WEBPACK_IMPORTED_MODULE_0__math_js__["b" /* Vec2 */](0,0);
        this.offset = new __WEBPACK_IMPORTED_MODULE_0__math_js__["b" /* Vec2 */](0,0);
        this.bounds = new __WEBPACK_IMPORTED_MODULE_1__BoundingBox_js__["a" /* default */](this.pos, this.size, this.offset);
        this.lifeTime = 0;

        this.traits = [];
    }

    addTrait(trait) {
        this.traits.push(trait);
        this[trait.NAME] = trait;
    }

    finalize() {
        this.traits.forEach(trait => {
            trait.finalize();
        })
    }

    collides(candidate) {
        // console.log('Touched', candidate);
        this.traits.forEach(trait => {
            trait.collides(this, candidate);
        })
    }

    obstruct(side, match) {
        this.traits.forEach(trait => {
            trait.obstruct(this, side, match);
        })
    }

    draw() {

    }

    update(deltaTime, level) {
        this.traits.forEach(trait => {
            trait.update(this, deltaTime, level);
        });

        this.lifeTime +=deltaTime;
    }
}
/* harmony export (immutable) */ __webpack_exports__["c"] = Entity;



/***/ }),
/* 1 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = loadImage;
/* harmony export (immutable) */ __webpack_exports__["b"] = loadJSON;
/* harmony export (immutable) */ __webpack_exports__["c"] = loadSpriteSheet;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__SpriteSheet_js__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__anim_js__ = __webpack_require__(19);



function loadImage(url) {
    return new Promise(resolve => {
        const image = new Image();
        image.addEventListener('load', () => {
            resolve(image)
        });

        image.src = url
    })
}

function loadJSON(url) {
    return fetch(url)
        .then(r => r.json());
}

function loadSpriteSheet(name) {
    return loadJSON(`/sprites/${name}.json`)
        .then(sheetSpec => Promise.all([
                sheetSpec,
                loadImage(sheetSpec.imageURL)
            ]))
            .then(([sheetSpec, image]) => {
                const sprites = new __WEBPACK_IMPORTED_MODULE_0__SpriteSheet_js__["a" /* default */](
                    image,
                    sheetSpec.tileW,
                    sheetSpec.tileH);

                if (sheetSpec.tiles) {
                    sheetSpec.tiles.forEach(tileSpec => {
                        sprites.defineTile(
                            tileSpec.name, ...tileSpec.index);
                    })
                }

                if (sheetSpec.frames) {
                    sheetSpec.frames.forEach(frameSpec => {
                        sprites.define(frameSpec.name, ...frameSpec.rect);
                    })
                }

                if (sheetSpec.animations) {
                    sheetSpec.animations.forEach(animSpec => {
                        const animation = Object(__WEBPACK_IMPORTED_MODULE_1__anim_js__["a" /* createAnim */])(animSpec.frames, animSpec.frameLen);

                        sprites.defineAnim(animSpec.name, animation);
                    })
                }

                return sprites;
        });
}



/***/ }),
/* 2 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";

class Matrix {
    constructor() {
        this.grid = []
    }

    forEach(callback) {
        this.grid.forEach((column,x) => {
            column.forEach((val,y) => {
                callback(val,x,y)
            })
        })
    }

    get(x,y) {
        const col = this.grid[x]

        if (col) {
            return col[y]
        }
        return undefined
    }

    set (x,y,value) {
        if (!this.grid[x]) {
            this.grid[x] = []
        }

        this.grid[x][y] = value
    }
}
/* harmony export (immutable) */ __webpack_exports__["a"] = Matrix;


class Vec2 {
    constructor(x, y) {
        this.set(x, y)
    }

    set(x, y) {
        this.x = x
        this.y = y
    }
}
/* harmony export (immutable) */ __webpack_exports__["b"] = Vec2;



/***/ }),
/* 3 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__Entity_js__ = __webpack_require__(0);


class Killable extends __WEBPACK_IMPORTED_MODULE_0__Entity_js__["b" /* Trait */] {
    constructor() {
        super('killable');
        this.dead = false;
        this.deadTime = 0;
        this.removeAfter = 1;
    }

    kill() {
        this.queue(() => this.dead = true);
    }

    revive() {
        this.dead = false;
        this.deadTime = 0;
    }

    update(entity, deltaTime, level) {
        if (this.dead) {
            this.deadTime += deltaTime;
            if (this.deadTime > this.removeAfter) {
                this.queue(() => {
                    level.entities.delete(entity);
                })
            }
        }
    }
}
/* harmony export (immutable) */ __webpack_exports__["a"] = Killable;



/***/ }),
/* 4 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__Entity_js__ = __webpack_require__(0);


class Solid extends __WEBPACK_IMPORTED_MODULE_0__Entity_js__["b" /* Trait */] {
    constructor() {
        super('solid');
        this.obstructs =true;
    }

    obstruct(entity, sides, match) {
        if (!this.obstructs) {
            return;
        }

        if (sides === __WEBPACK_IMPORTED_MODULE_0__Entity_js__["a" /* Sides */].BOTTOM) {
            entity.bounds.top = match.y1 - entity.size.y;
            entity.vel.y = 0;
        } else if (sides === __WEBPACK_IMPORTED_MODULE_0__Entity_js__["a" /* Sides */].TOP) {
            entity.bounds.top = match.y2;
            entity.vel.y = 0;
        } else if (sides === __WEBPACK_IMPORTED_MODULE_0__Entity_js__["a" /* Sides */].LEFT) {
            entity.bounds.left = match.x1 - entity.size.x;
            entity.vel.x = 0;
        } else if (sides === __WEBPACK_IMPORTED_MODULE_0__Entity_js__["a" /* Sides */].RIGHT) {
            entity.bounds.left = match.x2;
            entity.vel.x = 0;
        }
    }
}
/* harmony export (immutable) */ __webpack_exports__["a"] = Solid;



/***/ }),
/* 5 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__Entity_js__ = __webpack_require__(0);


class Physics extends __WEBPACK_IMPORTED_MODULE_0__Entity_js__["b" /* Trait */] {
    constructor() {
        super('physics');
    }

    update(entity, deltaTime, level) {
        entity.pos.x += entity.vel.x * deltaTime;
        level.tileCollider.checkX(entity);

        entity.pos.y += entity.vel.y * deltaTime;
        level.tileCollider.checkY(entity);

        entity.vel.y += level.gravity * deltaTime;
    }
}
/* harmony export (immutable) */ __webpack_exports__["a"] = Physics;



/***/ }),
/* 6 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
class TileResolver {
    constructor(matrix, tileSize = 16) {
        this.matrix = matrix;
        this.tileSize = tileSize;
    }

    toIndex(pos) {
        return Math.floor(pos / this.tileSize);
    }

    toIndexRange(pos1, pos2) {
        const pMax = Math.ceil(pos2 / this.tileSize) * this.tileSize;
        let range = [];
        let pos = pos1;
        do {
            range.push(this.toIndex(pos));
            pos += this.tileSize;
        } while (pos < pMax);

        return range;
    }

    getByIndex(indexX, indexY) {
        const tile = this.matrix.get(indexX, indexY);
        const x1 = indexX * this.tileSize;
        const x2 = x1 + this.tileSize;
        const y1 = indexY * this.tileSize;
        const y2 = y1 + this.tileSize;
        if (tile) {
            return {
                tile,
                x1,
                x2,
                y1,
                y2
            };
        }
    }

    searchByPosition(posX, posY) {
        return this.getByIndex(
            this.toIndex(posX),
            this.toIndex(posY),
        );
    }

    searchByRange(x1,x2,y1,y2) {
        let matches = [];
        this.toIndexRange(x1,x2).forEach(indexX => {
            this.toIndexRange(y1,y2).forEach(indexY => {
                let match = this.getByIndex(indexX, indexY);
                if (match) {
                    matches.push(match);
                }
            })
        });

        return matches;
    }
}
/* harmony export (immutable) */ __webpack_exports__["a"] = TileResolver;




/***/ }),
/* 7 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
class SpriteSheet {
    constructor(image, width, height) {
        this.image = image;
        this.width = width;
        this.height = height;
        this.tiles = new Map();
        this.animations = new Map();
    }

    defineAnim(name, animation) {
        this.animations.set(name, animation);
    }

    define(name, x, y, width, height) {
        // define a sprite in the image with name
        // 明确定义一块位于sprite sheet中x,y位置width, height的sprite
        const buffers = [false, true].map(flip => {
            const buffer = document.createElement('canvas');
            buffer.width = width;
            buffer.height = height;

            const context = buffer.getContext('2d');

            if (flip) {
                // Mirror the canvas
                context.scale(-1, 1);
                context.translate(-width, 0);
            }

            context.drawImage(
                    this.image,
                    x,
                    y,
                    width,
                    height,
                    0,
                    0,
                    width,
                    height);

            return buffer;
        });

        this.tiles.set(name, buffers);
    }

    defineTile(name, x, y) {
        this.define(name, x * this.width, y * this.height, this.width, this.height);
    }

    draw(name, context, x, y, flip = false) {
        const buffer = this.tiles.get(name)[flip ? 1 : 0];
        context.drawImage(buffer, x, y);
    }

    drawTile(name, context, x, y) {
        this.draw(name, context, x*this.width, y*this.height);
    }

    drawAnim(name, context, x, y, distance) {
        const anim = this.animations.get(name);
        this.drawTile(anim(distance), context, x, y);
    }
}
/* harmony export (immutable) */ __webpack_exports__["a"] = SpriteSheet;




/***/ }),
/* 8 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__Entity_js__ = __webpack_require__(0);


class PendulumMove extends __WEBPACK_IMPORTED_MODULE_0__Entity_js__["b" /* Trait */] {
    constructor() {
        super('pendulumMove');
        this.enable = true;
        this.speed =  -30;
    }

    obstruct(koopa, sides) {
        if (sides === __WEBPACK_IMPORTED_MODULE_0__Entity_js__["a" /* Sides */].LEFT || sides === __WEBPACK_IMPORTED_MODULE_0__Entity_js__["a" /* Sides */].RIGHT) {
            this.speed = -this.speed;
        }
    }

    update(entity, deltaTime) {
        entity.lifeTime += deltaTime;
        if (this.enable) {
            entity.vel.x = this.speed;
        }
    }
}
/* harmony export (immutable) */ __webpack_exports__["a"] = PendulumMove;



/***/ }),
/* 9 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__Timer_js__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__Camera_js__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__Entity_js__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__traits_PlayerController_js__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__loaders_level_js__ = __webpack_require__(14);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__loaders_font_js__ = __webpack_require__(22);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__entities_js__ = __webpack_require__(23);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__layers_dashboard_js__ = __webpack_require__(30);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__input_js__ = __webpack_require__(31);









// import {createCollisionLayer} from './layers/collision.js'
// import {createCameraLayer} from './layers/camera.js';
// import {setupMouseControl} from './debug.js';

function createPlayerEnv(playerEntity) {
    const playerEnv = new __WEBPACK_IMPORTED_MODULE_2__Entity_js__["c" /* default */]();
    const playerControl = new __WEBPACK_IMPORTED_MODULE_3__traits_PlayerController_js__["a" /* default */]();
    playerControl.setPlayer(playerEntity);
    playerEnv.addTrait(playerControl);

    return playerEnv;
}

async function main(canvas) {
    const context = canvas.getContext('2d');

    const [entityFactory, font] = await Promise.all([
        Object(__WEBPACK_IMPORTED_MODULE_6__entities_js__["a" /* loadEntities */])(),
        Object(__WEBPACK_IMPORTED_MODULE_5__loaders_font_js__["a" /* loadFont */])()
    ]);
    const loadLevel = await Object(__WEBPACK_IMPORTED_MODULE_4__loaders_level_js__["a" /* createLevelLoader */])(entityFactory);
    const level = await loadLevel('1-1');

    const camera = new __WEBPACK_IMPORTED_MODULE_1__Camera_js__["a" /* default */]();

    const mario = entityFactory.mario();
    mario.pos.set(64, 100);
    level.entities.add(mario);

    const playerEnv = createPlayerEnv(mario);
    level.entities.add(playerEnv);

    const input = Object(__WEBPACK_IMPORTED_MODULE_8__input_js__["a" /* setupKeyboard */])(mario);
    input.listenTo(window);


    level.comp.layers.push(Object(__WEBPACK_IMPORTED_MODULE_7__layers_dashboard_js__["a" /* createDashboardLayer */])(font, playerEnv));

    /*Debug Tools : */
    // level.comp.layers.push(
    //     createCollisionLayer(level),
    //     createCameraLayer(camera));
    // setupMouseControl(canvas, mario, camera);


    const timer = new __WEBPACK_IMPORTED_MODULE_0__Timer_js__["a" /* default */](1/60);

    timer.update = function update(deltaTime) {
        level.update(deltaTime);

        camera.pos.x = Math.max(0, mario.pos.x - 100);

        level.comp.draw(context, camera);

    };

    timer.start();
}


const canvas = document.getElementById('screen');
main(canvas);



/***/ }),
/* 10 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
class Timer {
    constructor(deltaTime = 1/60) {
        let accumulatedTime = 0;
        // let lastTime = 0;
        let lastTime = performance.now();

        this.updateProxy =  (time) => {
            accumulatedTime += (time - lastTime) / 1000;

            if (accumulatedTime > 1) {
                /* A hack to Solve the time accumulate
                * when it is running background.
                * So that our computer wont be slow down by this,
                * after long time of running this in background.*/
                accumulatedTime = 1;
            }

            // console.log(accumulatedTime,deltaTime)
            // TODO:BUG The first time update too many times if the lastTime = 0 .
            while (accumulatedTime > deltaTime) {
                this.update(deltaTime);

                accumulatedTime -= deltaTime;
            }

            lastTime = time;

            this.enqueue();
        }
    }

    enqueue() {
        requestAnimationFrame(this.updateProxy);
    }

    start() {
        this.enqueue();
    }
}
/* harmony export (immutable) */ __webpack_exports__["a"] = Timer;



/***/ }),
/* 11 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__math_js__ = __webpack_require__(2);


class Camera {
    constructor() {
        this.pos = new __WEBPACK_IMPORTED_MODULE_0__math_js__["b" /* Vec2 */](0,0);
        this.size = new __WEBPACK_IMPORTED_MODULE_0__math_js__["b" /* Vec2 */](256,240);
    }
}
/* harmony export (immutable) */ __webpack_exports__["a"] = Camera;



/***/ }),
/* 12 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
class BoundingBox {
    constructor(pos, size, offset) {
        this.pos = pos;
        this.size = size;
        this.offset = offset;
    }

    overlaps(box) {
        return this.bottom > box.top
                     && this.top < box.bottom
                     && this.left < box.right
                     && this.right > box.left
    }

    get bottom() {
        return this.pos.y + this.size.y + this.offset.y;
    }

    set bottom(y) {
        this.pos.y = y - (this.size.y + this.offset.y);
    }

    get top() {
        return this.pos.y + this.offset.y;
    }

    set top(y) {
        this.pos.y = y - this.offset.y;
    }

    get left() {
        return this.pos.x + this.offset.x;
    }

    set left(x) {
        this.pos.x = x - this.offset.x;
    }

    get right() {
        return this.pos.x + this.size.x + this.offset.x;
    }

    set right(x) {
        this.pos.x = x - (this.size.x + this.offset.x);
    }
}
/* harmony export (immutable) */ __webpack_exports__["a"] = BoundingBox;



/***/ }),
/* 13 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__Entity_js__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__math_js__ = __webpack_require__(2);



class PlayerController extends __WEBPACK_IMPORTED_MODULE_0__Entity_js__["b" /* Trait */] {
    constructor() {
        super('playerController');
        this.player = null;
        this.checkPoint = new __WEBPACK_IMPORTED_MODULE_1__math_js__["b" /* Vec2 */](64,64);
        this.time = 300;
        this.score = 0;
    }

    setPlayer(entity) {
        this.player = entity;
        this.player.stomer.onStomp = () => {
            this.score += 100;
        }
    }

    update(entity, deltaTime, level) {
        if (!level.entities.has(this.player)) {
            this.player.killable.revive();
            this.player.pos.set(this.checkPoint.x ,this.checkPoint.y);
            level.entities.add(this.player);
        } else {
            this.time -= deltaTime * 2;
        }
    }
}
/* harmony export (immutable) */ __webpack_exports__["a"] = PlayerController;



/***/ }),
/* 14 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = createLevelLoader;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__math_js__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__Level_js__ = __webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__loader_js__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__layers_sprites_js__ = __webpack_require__(20);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__layers_background_js__ = __webpack_require__(21);






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
        const backgroundLayer = Object(__WEBPACK_IMPORTED_MODULE_4__layers_background_js__["a" /* createBackgroundLayer */])(level, backgroundGrid, backgroundSprites);
        level.comp.layers.push(backgroundLayer);
    });
}

function setupEntities(levelSpec, level, entityFactory) {
    levelSpec.entities.forEach(({name, pos: [x,y]}) => {
        // console.log(name, x,y);
        const createEntity = entityFactory[name];
        const entity = createEntity();
        entity.pos.set(x, y);
        level.entities.add(entity);
    });

    const spriteLayer = Object(__WEBPACK_IMPORTED_MODULE_3__layers_sprites_js__["a" /* createSpriteLayer */])(level.entities);
    level.comp.layers.push(spriteLayer);
}

function createLevelLoader(entityFactory) {
    return function loadLevel(name) {
        return Object(__WEBPACK_IMPORTED_MODULE_2__loader_js__["b" /* loadJSON */])(`../levels/${name}.json`)
            .then(levelSpec => Promise.all([
                levelSpec,
                Object(__WEBPACK_IMPORTED_MODULE_2__loader_js__["c" /* loadSpriteSheet */])(levelSpec.spriteSheet)
            ]))
            .then(([levelSpec, backgroundSprites]) => {
                const level = new __WEBPACK_IMPORTED_MODULE_1__Level_js__["a" /* default */]();

                setupLevel(levelSpec, level);
                setupBackground(levelSpec, level, backgroundSprites);
                setupEntities(levelSpec, level, entityFactory);

                return level;
            })
    }
}

function createCollisionGrid(tiles, patterns) {
    const grid = new __WEBPACK_IMPORTED_MODULE_0__math_js__["a" /* Matrix */]();

    for (const {tile, x, y} of expandTiles(tiles, patterns)) {
        grid.set(x, y, {type: tile.type})
    }

    return grid;
}

function createBackgroundGrid(tiles, patterns) {
    const grid = new __WEBPACK_IMPORTED_MODULE_0__math_js__["a" /* Matrix */]();

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


/***/ }),
/* 15 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__compositor_js__ = __webpack_require__(16);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__EntityCollider_js__ = __webpack_require__(17);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__TileCollider_js__ = __webpack_require__(18);




class Level {
    constructor() {
        this.gravity = 1500;
        this.comp = new __WEBPACK_IMPORTED_MODULE_0__compositor_js__["a" /* default */]();
        this.entities = new Set();
        this.entityCollider = new __WEBPACK_IMPORTED_MODULE_1__EntityCollider_js__["a" /* default */](this.entities);
        this.totalTime = 0;

        this.tileCollider = null;
    }

    setCollisionGrid(matrix) {
        this.tileCollider = new __WEBPACK_IMPORTED_MODULE_2__TileCollider_js__["a" /* default */](matrix);
    }

    update(deltaTime) {
        this.entities.forEach(entity => {
            entity.update(deltaTime, this);
        });


        this.entities.forEach(entity => {
            entity.finalize();

            this.entityCollider.check(entity);
        });

        this.totalTime += deltaTime;
    }
}
/* harmony export (immutable) */ __webpack_exports__["a"] = Level;



/***/ }),
/* 16 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
class Compositor {
    constructor() {
        this.layers = [];
    }

    draw(context, camera) {
        this.layers.forEach(layer => {
            layer(context, camera);
        })
    }
}
/* harmony export (immutable) */ __webpack_exports__["a"] = Compositor;



/***/ }),
/* 17 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";


class EntityCollider {
    constructor(entities) {
        this.entities = entities;
    }

    check(subject) {
        this.entities.forEach(candidate => {
            if (subject === candidate) {
                return;
            }

            if (subject.bounds.overlaps(candidate.bounds)) {
              subject.collides(candidate);
              candidate.collides(subject);
            }
        })
    }
}
/* harmony export (immutable) */ __webpack_exports__["a"] = EntityCollider;



/***/ }),
/* 18 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__TileResolver_js__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__Entity_js__ = __webpack_require__(0);



class TileCollider {
    constructor(tileMatrix) {
        this.tile = new __WEBPACK_IMPORTED_MODULE_0__TileResolver_js__["a" /* default */](tileMatrix);
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
                    entity.obstruct(__WEBPACK_IMPORTED_MODULE_1__Entity_js__["a" /* Sides */].LEFT, match);
                }
            } else if (entity.vel.x < 0) {
                if (entity.bounds.left < match.x2) {
                    entity.obstruct(__WEBPACK_IMPORTED_MODULE_1__Entity_js__["a" /* Sides */].RIGHT, match);
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
                    entity.obstruct(__WEBPACK_IMPORTED_MODULE_1__Entity_js__["a" /* Sides */].BOTTOM, match);
                }
            } else if (entity.vel.y < 0) {
                if (entity.pos.y < match.y2) {
                    entity.obstruct(__WEBPACK_IMPORTED_MODULE_1__Entity_js__["a" /* Sides */].TOP, match);
                }
            }
        })

    }

}
/* harmony export (immutable) */ __webpack_exports__["a"] = TileCollider;



/***/ }),
/* 19 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = createAnim;
function createAnim(frames, frameLen) {
    return function resolveFrame(distance) {
        const frameIndex = Math.floor(distance / frameLen) % frames.length;

        return frames[frameIndex];
    }
}


/***/ }),
/* 20 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = createSpriteLayer;
function createSpriteLayer(entities, width = 64, height = 64) {
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


/***/ }),
/* 21 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = createBackgroundLayer;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__TileResolver_js__ = __webpack_require__(6);


function createBackgroundLayer(level, tiles, sprites) {
    const resolver = new __WEBPACK_IMPORTED_MODULE_0__TileResolver_js__["a" /* default */](tiles);

    const buffer = document.createElement('canvas');
    buffer.width = 256 + 16;    // 16 + 1 column
    buffer.height = 240;

    const context = buffer.getContext('2d');

    function redraw(startIndex, endIndex) {

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

    // // High-Order Function
    // return function drawBackgroundLayer(context, camera) {
    //     context.drawImage(buffer, -camera.pos.x, -camera.pos.y);
    // }
}


/***/ }),
/* 22 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = loadFont;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__loader_js__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__SpriteSheet_js__ = __webpack_require__(7);



const CHARS = ' !"#$%&\'()*+,-./0123456789:;<=>?@ABCDEFGHIJKLMNOPQRSTUVWXYZ[\\]^_`abcdefghijklmnopqrstuvwxyz{|}~';


class Font {
    constructor(spriteSheet, size) {
        this.sprites = spriteSheet;
        this.size = size;
    }

    print(text, context, x, y) {
        [...text].forEach((char, pos) => {
            this.sprites.draw(char, context, x + pos * this.size, y);
        })
    }
}

function loadFont() {
    return Object(__WEBPACK_IMPORTED_MODULE_0__loader_js__["a" /* loadImage */])('./img/font.png')
        .then(img => {
            const fontSprite = new __WEBPACK_IMPORTED_MODULE_1__SpriteSheet_js__["a" /* default */](img);

            const size = 8, rowLen = img.width;
            const colNum = img.width / size;
            for (let [index, char] of [...CHARS].entries()) {

                const x  = (index * size) % rowLen;
                const y = Math.floor(index / colNum)*size;

                fontSprite.define(char, x, y, size, size);
            }

            return new Font(fontSprite, size);
        })
}

/***/ }),
/* 23 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = loadEntities;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__entities_Mario_js__ = __webpack_require__(24);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__entities_Goomba_js__ = __webpack_require__(28);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__entities_Koopa_js__ = __webpack_require__(29);




function loadEntities() {
    const entitiesFactory = {};

    function addAs(name) {
        return factory => {entitiesFactory[name] = factory}
    }

    return Promise.all([
        Object(__WEBPACK_IMPORTED_MODULE_0__entities_Mario_js__["a" /* loadMario */])().then(addAs('mario')),
        Object(__WEBPACK_IMPORTED_MODULE_1__entities_Goomba_js__["a" /* loadGoomba */])().then(addAs('goomba')),
        Object(__WEBPACK_IMPORTED_MODULE_2__entities_Koopa_js__["a" /* loadKoopa */])().then(addAs('koopa')),
    ])
        .then(() => entitiesFactory)
}



/***/ }),
/* 24 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = loadMario;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__Entity_js__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__traits_Go_js__ = __webpack_require__(25);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__traits_Jump_js__ = __webpack_require__(26);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__traits_Stomer_js__ = __webpack_require__(27);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__traits_Killable_js__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__traits_Solid_js__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__traits_Physics_js__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__loader_js__ = __webpack_require__(1);

// import Velocity from '../traits/Velocity.js'






// import PlayerController from '../traits/PlayerController.js'


/*Name Convention:
* 1. loadSomething is synchronous, createSomething is asynchronous.*/

function loadMario() {
    return Object(__WEBPACK_IMPORTED_MODULE_7__loader_js__["c" /* loadSpriteSheet */])('mario')
        .then(createMarioFactory)
}

function createMarioFactory(sprite) {
    const runAnim = sprite.animations.get("run");

        function frameRoute(mario) {
        if (mario.jump.falling) {
            return 'jump';
        }

        if (mario.go.distance > 0) {
            if ((mario.vel.x > 0 && mario.go.dir < 0) ||
                (mario.vel.x < 0 && mario.go.dir > 0)) {
                return 'break';
            }

            return runAnim(mario.go.distance);
        }

        return 'idle';
    }

    function drawMario(context) {
        sprite.draw(frameRoute(this), context, 0, 0, this.go.heading < 0);
    }

    return function createMario() {
        const mario = new __WEBPACK_IMPORTED_MODULE_0__Entity_js__["c" /* default */]();
        mario.size.set(14, 16);

        mario.addTrait(new __WEBPACK_IMPORTED_MODULE_6__traits_Physics_js__["a" /* default */]());
        mario.addTrait(new __WEBPACK_IMPORTED_MODULE_5__traits_Solid_js__["a" /* default */]());
        mario.addTrait(new __WEBPACK_IMPORTED_MODULE_1__traits_Go_js__["a" /* default */]());
        mario.addTrait(new __WEBPACK_IMPORTED_MODULE_2__traits_Jump_js__["a" /* default */]());
        mario.addTrait(new __WEBPACK_IMPORTED_MODULE_3__traits_Stomer_js__["a" /* default */]());
        mario.addTrait(new __WEBPACK_IMPORTED_MODULE_4__traits_Killable_js__["a" /* default */]());
        // mario.addTrait(new PlayerController());

        mario.killable.removeAfter = 0;
        // mario.playerController.setPlayer(mario);

        mario.draw = drawMario;

        return mario;
    }
}



/***/ }),
/* 25 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__Entity_js__ = __webpack_require__(0);


/*extends keyword can be used to inherit all the properties and methods. */
class Go extends __WEBPACK_IMPORTED_MODULE_0__Entity_js__["b" /* Trait */] {
    constructor() {
        /*super keyword in here means the father class's constructor of this class. */
        super('go');

        this.dir = 0;
        this.acceleration = 400;
        this.deceleration = 300;
        this.dragFactor = 1/5000;

        this.distance = 0;
        this.heading = 1;
    }

    update(entity, deltaTime) {
        const absX = Math.abs(entity.vel.x);

        if (this.dir !== 0) {
            entity.vel.x += this.acceleration * deltaTime * this.dir;
            if (entity.jump) {
                if (!entity.jump.falling) {
                    this.heading = this.dir;
                }
            } else {
                this.heading = this.dir;
            }
        } else if (entity.vel.x !== 0) {
            const decel = Math.min(absX, this.deceleration * deltaTime);
            entity.vel.x += entity.vel.x > 0 ? -decel : decel;
        } else {
            this.distance = 0;
        }

        const drag = this.dragFactor * entity.vel.x * absX;
        entity.vel.x -= drag;

        this.distance += absX * deltaTime;
    }
}
/* harmony export (immutable) */ __webpack_exports__["a"] = Go;



/***/ }),
/* 26 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__Entity_js__ = __webpack_require__(0);


/*extends keyword can be used to inherit all the properties and methods. */
class Jump extends __WEBPACK_IMPORTED_MODULE_0__Entity_js__["b" /* Trait */] {
    constructor() {
        /*super keyword in here means the father class's constructor of this class. */
        super('jump');

        this.duration = 0.3;
        this.velocity = 200;
        this.engageTime = 0; // total time allow to  pressing key
        this.ready = 0;
        this.gracePeriod = 0.1;
        this.requestTime = 0;
        this.speedBoost = 0.3;
    }

    get falling() {
        return this.ready < 0;
    }

    start() {
        // if (this.ready > 0) {
        //     this.engageTime = this.duration;
        // }
        this.requestTime = this.gracePeriod;
    }

    cancel() {
        this.engageTime = 0;
        this.requestTime = 0;
    }

    obstruct(entity, side) {
        if (side === __WEBPACK_IMPORTED_MODULE_0__Entity_js__["a" /* Sides */].BOTTOM) {
            this.ready = 1;
        } else if (side === __WEBPACK_IMPORTED_MODULE_0__Entity_js__["a" /* Sides */].TOP) {
            this.cancel();
        }
    }

    update(entity, deltaTime) {
        if (this.requestTime > 0) {
            if (this.ready > 0) {
                this.engageTime = this.duration;
                this.requestTime = 0;
            }

            this.requestTime -= deltaTime;
        }


        if (this.engageTime > 0) {
            entity.vel.y = -(this.velocity + Math.abs(entity.vel.x) * this.speedBoost);
            /*If keep pressing the key, the engageTime (total time allow to  pressing key ) will decrease in a row until less than 0, which means the total time of pressing a key is bigger than the allow duration( this. duration = 0.5 (second)), so the entity.vel.y should not decrease anymore, in other words, the mario should not travel up anymore.*/
            this.engageTime -= deltaTime;
        }

        // console.log('If we are ready to jump?', this.ready)
        this.ready --;
    }
}
/* harmony export (immutable) */ __webpack_exports__["a"] = Jump;



/***/ }),
/* 27 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__Entity_js__ = __webpack_require__(0);


class Stomer extends __WEBPACK_IMPORTED_MODULE_0__Entity_js__["b" /* Trait */] {
    constructor() {
        super('stomer');
        this.bounceSpeed = 400;

        this.onStomp = function () {
        }
    }

    bounce(us, them) {
        us.bounds.bottom = them.bounds.top;
        us.vel.y = -this.bounceSpeed;
    }

    collides(us, them) {
        /*此处是否反弹跳跃（bounce）的判断严重依赖事件（kill，collide等）的触发顺序。
        * 我们可以选择通过一些细微的改动---来调整顺序，但是！过于依赖这种细微的改动不利以后续项目的扩展。
        * 所以我们需要更健壮的解决方案。*/
        if (!them.killable || them.killable.dead) {
            return;
        }

        if ( us.vel.y > them.vel.y) {
            this.bounce(us, them);
            this.onStomp(us, them);
        }
    }
}
/* harmony export (immutable) */ __webpack_exports__["a"] = Stomer;



/***/ }),
/* 28 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = loadGoomba;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__Entity_js__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__loader_js__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__traits_PendulumMove_js__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__traits_Killable_js__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__traits_Solid_js__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__traits_Physics_js__ = __webpack_require__(5);







function loadGoomba() {
    return Object(__WEBPACK_IMPORTED_MODULE_1__loader_js__["c" /* loadSpriteSheet */])('goomba')
        .then(createGoombaFactory)
}

class Behavior extends __WEBPACK_IMPORTED_MODULE_0__Entity_js__["b" /* Trait */] {
    constructor() {
        super('behavior');
    }

    collides(us, them) {
        // us is our goomba, them often are mario.
        if (us.killable.dead) {
            return;
        }

        if (them.stomer) {
            if (them.vel.y > us.vel.y) {
                us.killable.kill();
                us.pendulumMove.speed = 0;
            } else {
                them.killable.kill();
            }
        }
    }
}

function createGoombaFactory(sprite) {
    const walkAnim = sprite.animations.get('walk');

    function routeAnim(goomba) {
        if (goomba.killable.dead) {
            return 'flat';
        }

        return walkAnim(goomba.lifeTime);
    }

    function drawGoomba(context) {
        sprite.draw(routeAnim(this), context, 0, 0);
    }

    return function createGoomba() {
        const goomba = new __WEBPACK_IMPORTED_MODULE_0__Entity_js__["c" /* default */]();
        goomba.size.set(16, 16);

        goomba.addTrait(new __WEBPACK_IMPORTED_MODULE_5__traits_Physics_js__["a" /* default */]());
        goomba.addTrait(new __WEBPACK_IMPORTED_MODULE_4__traits_Solid_js__["a" /* default */]());
        goomba.addTrait(new __WEBPACK_IMPORTED_MODULE_2__traits_PendulumMove_js__["a" /* default */]());
        goomba.addTrait(new Behavior());
        goomba.addTrait(new __WEBPACK_IMPORTED_MODULE_3__traits_Killable_js__["a" /* default */]());

        goomba.draw = drawGoomba;

        return goomba;
    }
}



/***/ }),
/* 29 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = loadKoopa;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__Entity_js__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__loader_js__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__traits_PendulumMove_js__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__traits_Solid_js__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__traits_Physics_js__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__traits_Killable_js__ = __webpack_require__(3);







function loadKoopa() {
    return Object(__WEBPACK_IMPORTED_MODULE_1__loader_js__["c" /* loadSpriteSheet */])('koopa')
        .then(createKoopaFactory)
}

const STATE_WALKING = Symbol('walking');
const STATE_HIDING = Symbol('hiding');
const STATE_PANIC = Symbol('panic');

class Behavior extends __WEBPACK_IMPORTED_MODULE_0__Entity_js__["b" /* Trait */] {
    constructor() {
        super('behavior');
        this.state = STATE_WALKING;
        this.hideTime = 0;
        this.hideDuration = 3;
        this.panicSpeed = 200;
        this.walkSpeed = null;
    }

    collides(us, them) {
        // us is our goomba, them often are mario.
        if (us.killable.dead) {
            return;
        }

        if (them.stomer) {
            if (them.vel.y > us.vel.y) {
                this.handleState(us, them);
            } else {
                this.handleKick(us, them);
            }
        }
    }

    handleKick(us, them) {
        if (this.state === STATE_WALKING) {
            them.killable.kill();
        } else if (this.state === STATE_HIDING) {
            this.panic(us, them);
        } else if (this.state === STATE_PANIC) {
            const travelDir = Math.sign(us.vel.x);
            const impactDir = Math.sign(us.pos.x - them.pos.x);
            if (travelDir !== 0 && impactDir !== travelDir) {
                them.killable.kill();
            }
        }
    }

    handleState(us, them) {
        if (this.state === STATE_WALKING) {
            if (us.pendulumMove.speed !== 0) {
                this.walkSpeed = us.pendulumMove.speed;
            }
            this.hiding(us);
        } else if (this.state === STATE_HIDING) {
            us.killable.kill();
            us.vel.set(100, -200);
            us.solid.obstructs = false;
        } else if (this.state === STATE_PANIC) {
            this.hiding(us);
        }
    }

    hiding(us) {
        us.vel.x = 0;
        us.pendulumMove.enable = false;
        this.state = STATE_HIDING;
    }

    unHide(us) {
        us.vel.x = 100;
        us.pendulumMove.enable = true;
        us.pendulumMove.speed = this.walkSpeed;
        this.state = STATE_WALKING;
        this.hideTime = 0;
    }

    panic(us, them) {
        us.pendulumMove.enable = true;
        us.pendulumMove.speed = this.panicSpeed * Math.sign(them.vel.x);
        this.state = STATE_PANIC;
    }

    update(us, deltaTime) {
        if (this.state === STATE_HIDING) {
            this.hideTime += deltaTime;

            if (this.hideTime > this.hideDuration) {
                this.unHide(us);
            }
        }
    }
}

function createKoopaFactory(sprite) {
    const walkAnim = sprite.animations.get('walk');
    const wakeAnim = sprite.animations.get('wake');


    function routeAnim(koopa) {
        if (koopa.behavior.state === STATE_HIDING) {
            if (koopa.behavior.hideTime > 2) {
                return wakeAnim(koopa.behavior.hideTime);
            }
            return 'hiding';
        }
        if (koopa.behavior.state === STATE_PANIC) {
            return 'hiding'
        }

        return walkAnim(koopa.lifeTime);
    }

    function drawKoopa(context) {
        sprite.draw(routeAnim(this), context, 0, 0, this.vel.x < 0);
    }

    return function createKoopa() {
        const koopa = new __WEBPACK_IMPORTED_MODULE_0__Entity_js__["c" /* default */]();
        koopa.size.set(16, 16);
        koopa.offset.y = 8;

        koopa.addTrait(new __WEBPACK_IMPORTED_MODULE_4__traits_Physics_js__["a" /* default */]());
        koopa.addTrait(new __WEBPACK_IMPORTED_MODULE_3__traits_Solid_js__["a" /* default */]());
        koopa.addTrait(new __WEBPACK_IMPORTED_MODULE_2__traits_PendulumMove_js__["a" /* default */]());
        koopa.addTrait(new Behavior());
        koopa.addTrait(new __WEBPACK_IMPORTED_MODULE_5__traits_Killable_js__["a" /* default */]());

        koopa.draw = drawKoopa;

        return koopa;
    }
}



/***/ }),
/* 30 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = createDashboardLayer;
function createDashboardLayer(font, playerEnv) {
    const LINE1 = font.size;
    const LINE2 = font.size*2;

    const coins = 99;
    return function drawDashboard(context) {
        const {time,score} = playerEnv.playerController;
        font.print('MARIO', context,16, LINE1);
        font.print(score.toString().padStart(6, '0'), context,16, LINE2);

        font.print('@x' + coins.toString().padStart(2, '0'), context,96, LINE2);

        font.print('WORLD', context,152, LINE1);
        font.print('1-1', context,160, LINE2);

        font.print('TIME', context,208, LINE1);
        font.print(time.toFixed().toString().padStart(3, '0'), context,216, LINE2);
        // font.draw('A', context, 0, 0);
    }
}


/***/ }),
/* 31 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = setupKeyboard;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__KeyboardState_js__ = __webpack_require__(32);


function setupKeyboard(entity) {
    const input = new __WEBPACK_IMPORTED_MODULE_0__KeyboardState_js__["a" /* default */]();

    input.addMapping('Space', keyState => {
        // Fantastic! - 妙！
        /*By such a fantastic Class, now we take over the event of key board input,
         so that we can get how long a key is pressed and draw the canvas semantically.*/
        if (keyState) {
            entity.jump.start();
        } else {
            entity.jump.cancel();
        }
    })
    input.addMapping('ArrowUp', keyState => {
        if (keyState) {
            entity.jump.start();
        } else {
            entity.jump.cancel();
        }
    });

    input.addMapping('KeyO', keyState => {
        // Ep8 - Turbo Mode, I think it is unnecessary.
    });

    input.addMapping('ArrowRight', keyState => {
        // entity.go.dir = keyState;
        entity.go.dir += keyState ? 1 : -1;
    });

    input.addMapping('ArrowLeft', keyState => {
        // entity.go.dir = -keyState;
        entity.go.dir += keyState ? -1 : 1;
    });

    return input;
}


/***/ }),
/* 32 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
const PRESSED = 1, RELEASED = 0;

class KeyboardState {
    constructor() {
        // hold the current state of a given key
        this.keyStates = new Map();

        // holds the callback functions for a key code
        this.keyMap = new Map()
    }

    addMapping(code, callBack) {
        this.keyMap.set(code, callBack)
    }

    handleEvent(event) {
        const {code} = event;

        if (!this.keyMap.has(code)) {
            return
        }

        event.preventDefault();

        const keyState = event.type === 'keydown' ? PRESSED : RELEASED;

        if (this.keyStates.get(code) === keyState) {
            // avoid triggering multiple times
            return;
        }

        this.keyStates.set(code, keyState);

        this.keyMap.get(code)(keyState);
    }

    listenTo(window) {
        ['keydown', 'keyup'].forEach(eventName => {
            window.addEventListener(eventName, event => {
                this.handleEvent(event)
            })
        })
    }
}
/* harmony export (immutable) */ __webpack_exports__["a"] = KeyboardState;



/***/ })
/******/ ]);