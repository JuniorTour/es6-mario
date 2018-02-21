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
/******/ 	__webpack_require__.p = "/";
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAgYmZlYzIyZThkZjJhOTZlMTY0YWQiLCJ3ZWJwYWNrOi8vLy4vcHVibGljL2pzL0VudGl0eS5qcyIsIndlYnBhY2s6Ly8vLi9wdWJsaWMvanMvbG9hZGVyLmpzIiwid2VicGFjazovLy8uL3B1YmxpYy9qcy9tYXRoLmpzIiwid2VicGFjazovLy8uL3B1YmxpYy9qcy90cmFpdHMvS2lsbGFibGUuanMiLCJ3ZWJwYWNrOi8vLy4vcHVibGljL2pzL3RyYWl0cy9Tb2xpZC5qcyIsIndlYnBhY2s6Ly8vLi9wdWJsaWMvanMvdHJhaXRzL1BoeXNpY3MuanMiLCJ3ZWJwYWNrOi8vLy4vcHVibGljL2pzL1RpbGVSZXNvbHZlci5qcyIsIndlYnBhY2s6Ly8vLi9wdWJsaWMvanMvU3ByaXRlU2hlZXQuanMiLCJ3ZWJwYWNrOi8vLy4vcHVibGljL2pzL3RyYWl0cy9QZW5kdWx1bU1vdmUuanMiLCJ3ZWJwYWNrOi8vLy4vcHVibGljL2pzL21haW4uanMiLCJ3ZWJwYWNrOi8vLy4vcHVibGljL2pzL1RpbWVyLmpzIiwid2VicGFjazovLy8uL3B1YmxpYy9qcy9DYW1lcmEuanMiLCJ3ZWJwYWNrOi8vLy4vcHVibGljL2pzL0JvdW5kaW5nQm94LmpzIiwid2VicGFjazovLy8uL3B1YmxpYy9qcy90cmFpdHMvUGxheWVyQ29udHJvbGxlci5qcyIsIndlYnBhY2s6Ly8vLi9wdWJsaWMvanMvbG9hZGVycy9sZXZlbC5qcyIsIndlYnBhY2s6Ly8vLi9wdWJsaWMvanMvTGV2ZWwuanMiLCJ3ZWJwYWNrOi8vLy4vcHVibGljL2pzL2NvbXBvc2l0b3IuanMiLCJ3ZWJwYWNrOi8vLy4vcHVibGljL2pzL0VudGl0eUNvbGxpZGVyLmpzIiwid2VicGFjazovLy8uL3B1YmxpYy9qcy9UaWxlQ29sbGlkZXIuanMiLCJ3ZWJwYWNrOi8vLy4vcHVibGljL2pzL2FuaW0uanMiLCJ3ZWJwYWNrOi8vLy4vcHVibGljL2pzL2xheWVycy9zcHJpdGVzLmpzIiwid2VicGFjazovLy8uL3B1YmxpYy9qcy9sYXllcnMvYmFja2dyb3VuZC5qcyIsIndlYnBhY2s6Ly8vLi9wdWJsaWMvanMvbG9hZGVycy9mb250LmpzIiwid2VicGFjazovLy8uL3B1YmxpYy9qcy9lbnRpdGllcy5qcyIsIndlYnBhY2s6Ly8vLi9wdWJsaWMvanMvZW50aXRpZXMvTWFyaW8uanMiLCJ3ZWJwYWNrOi8vLy4vcHVibGljL2pzL3RyYWl0cy9Hby5qcyIsIndlYnBhY2s6Ly8vLi9wdWJsaWMvanMvdHJhaXRzL0p1bXAuanMiLCJ3ZWJwYWNrOi8vLy4vcHVibGljL2pzL3RyYWl0cy9TdG9tZXIuanMiLCJ3ZWJwYWNrOi8vLy4vcHVibGljL2pzL2VudGl0aWVzL0dvb21iYS5qcyIsIndlYnBhY2s6Ly8vLi9wdWJsaWMvanMvZW50aXRpZXMvS29vcGEuanMiLCJ3ZWJwYWNrOi8vLy4vcHVibGljL2pzL2xheWVycy9kYXNoYm9hcmQuanMiLCJ3ZWJwYWNrOi8vLy4vcHVibGljL2pzL2lucHV0LmpzIiwid2VicGFjazovLy8uL3B1YmxpYy9qcy9LZXlib2FyZFN0YXRlLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFBQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsYUFBSztBQUNMO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsbUNBQTJCLDBCQUEwQixFQUFFO0FBQ3ZELHlDQUFpQyxlQUFlO0FBQ2hEO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLDhEQUFzRCwrREFBK0Q7O0FBRXJIO0FBQ0E7O0FBRUE7QUFDQTs7Ozs7Ozs7OztBQzdEYTtBQUNiOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQUE7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQUE7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7O0FBRUE7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsU0FBUzs7QUFFVDtBQUNBO0FBQ0E7QUFBQTtBQUFBOzs7Ozs7Ozs7Ozs7O0FDeEZBO0FBQ21COztBQUVuQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUzs7QUFFVDtBQUNBLEtBQUs7QUFDTDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLGdDQUFnQyxLQUFLO0FBQ3JDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHFCQUFxQjtBQUNyQjs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxxQkFBcUI7QUFDckI7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0EscUJBQXFCO0FBQ3JCOztBQUVBO0FBQ0EsU0FBUztBQUNUOzs7Ozs7Ozs7O0FDckRBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsYUFBYTtBQUNiLFNBQVM7QUFDVDs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQUE7QUFBQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFBQTs7Ozs7Ozs7O0FDekNjOztBQUVkO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxpQkFBaUI7QUFDakI7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUFBOzs7Ozs7Ozs7QUM3QnFCOztBQUVyQjtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQUE7Ozs7Ozs7OztBQzNCcUI7O0FBRXJCO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUFBO0FBQUE7Ozs7Ozs7O0FDaEJBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUzs7QUFFVDtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsYUFBYTtBQUNiLFNBQVM7O0FBRVQ7QUFDQTtBQUNBO0FBQUE7QUFBQTs7Ozs7Ozs7O0FDM0RBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxTQUFTOztBQUVUO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFBQTs7Ozs7Ozs7OztBQy9EcUI7O0FBRXJCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFBQTs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDckJBO0FBQ0E7QUFDQTtBQUNBO0FBQzBCO0FBQ1Q7QUFDSTtBQUNRO0FBQ1A7QUFDdEIsV0FBVyxxQkFBcUI7QUFDaEMsV0FBVyxrQkFBa0I7QUFDN0IsV0FBVyxrQkFBa0I7OztBQUc3QjtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7O0FBR0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7O0FBR0E7O0FBRUE7QUFDQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTtBQUNBOzs7QUFHQTtBQUNBOzs7Ozs7OztBQ3ZFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFBQTs7Ozs7Ozs7O0FDdENhOztBQUViO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQUE7Ozs7Ozs7O0FDUEE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUFBOzs7Ozs7Ozs7O0FDN0NjO0FBQ0Q7O0FBRWI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQUE7Ozs7Ozs7Ozs7Ozs7O0FDNUJlO0FBQ2Y7QUFDa0M7QUFDUjtBQUNJOztBQUU5QjtBQUNBO0FBQ0E7QUFDQSxLQUFLOztBQUVMO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMOztBQUVBO0FBQ0EsaUNBQWlDLGlCQUFpQjtBQUNsRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSzs7QUFFTDtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLGlHQUFxQyxLQUFLO0FBQzFDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxhQUFhO0FBQ2I7QUFDQTs7QUFFQTtBQUNBOztBQUVBLGdCQUFnQixXQUFXO0FBQzNCLHdCQUF3QixnQkFBZ0I7QUFDeEM7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBLGdCQUFnQixXQUFXO0FBQzNCLHdCQUF3QixnQkFBZ0I7QUFDeEM7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSx3QkFBd0IsVUFBVTtBQUNsQyw0QkFBNEIsVUFBVTtBQUN0Qyw0QkFBNEIsS0FBSztBQUNqQyxtQkFBbUI7QUFDbkI7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLHdCQUF3QixLQUFLO0FBQzdCO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsaUJBQWlCO0FBQ2pCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHdCQUF3QjtBQUN4QjtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBOzs7Ozs7Ozs7OztBQ3BKQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsU0FBUzs7O0FBR1Q7QUFDQTs7QUFFQTtBQUNBLFNBQVM7O0FBRVQ7QUFDQTtBQUNBO0FBQUE7QUFBQTs7Ozs7Ozs7QUNqQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFBQTtBQUFBOzs7Ozs7Ozs7O0FDUkE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQUE7QUFBQTs7Ozs7Ozs7OztBQ25CQTtBQUNjOztBQUVkO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGFBQWE7QUFDYjtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7O0FBRVQ7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxhQUFhO0FBQ2I7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTOztBQUVUOztBQUVBO0FBQUE7QUFBQTs7Ozs7Ozs7O0FDaEZBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7Ozs7Ozs7OztBQ05BO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLHlEQUF5RDtBQUN6RDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7Ozs7Ozs7Ozs7QUNsQkE7O0FBRUE7QUFDQTs7QUFFQTtBQUNBLDRCQUE0QjtBQUM1Qjs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQSxnQ0FBZ0MsZUFBZTtBQUMvQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxxQkFBcUI7QUFDckI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsaUJBQWlCO0FBQ2pCO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7O0FDekRrQjtBQUNsQjs7QUFFQSw0Q0FBNEMsaUVBQWlFLEVBQUU7OztBQUcvRztBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQSxTQUFTO0FBQ1QsQzs7Ozs7Ozs7Ozs7QUNwQ2tCO0FBQ0M7QUFDRDs7QUFFbEI7QUFDQTs7QUFFQTtBQUNBLDJCQUEyQjtBQUMzQjs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDakJBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUN3Qjs7QUFFeEI7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7QUM5RGM7O0FBRWQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxhQUFhO0FBQ2I7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFBQTtBQUFBOzs7Ozs7Ozs7QUN6Q3FCOztBQUVyQjtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSw0QkFBNEI7QUFDNUI7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7OztBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUFBOzs7Ozs7Ozs7QUM3RGM7O0FBRWQ7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQUE7Ozs7Ozs7Ozs7Ozs7OztBQzdCNkI7QUFDTDtBQUN4QjtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsYUFBYTtBQUNiO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7QUMvRDZCO0FBQ0w7QUFDeEI7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLGFBQWE7QUFDYjtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOzs7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTs7Ozs7Ozs7OztBQzNJQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLGVBQWUsV0FBVztBQUMxQjtBQUNBOztBQUVBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7OztBQ25CQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0EsS0FBSzs7QUFFTDtBQUNBO0FBQ0EsS0FBSzs7QUFFTDtBQUNBO0FBQ0E7QUFDQSxLQUFLOztBQUVMO0FBQ0E7QUFDQTtBQUNBLEtBQUs7O0FBRUw7QUFDQTs7Ozs7Ozs7QUN0Q0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLGVBQWUsS0FBSzs7QUFFcEI7QUFDQTtBQUNBOztBQUVBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxhQUFhO0FBQ2IsU0FBUztBQUNUO0FBQ0E7QUFBQTtBQUFBIiwiZmlsZSI6ImJ1bmRsZS5qcyIsInNvdXJjZXNDb250ZW50IjpbIiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0ge307XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKSB7XG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG4gXHRcdH1cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGk6IG1vZHVsZUlkLFxuIFx0XHRcdGw6IGZhbHNlLFxuIFx0XHRcdGV4cG9ydHM6IHt9XG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmwgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb24gZm9yIGhhcm1vbnkgZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kID0gZnVuY3Rpb24oZXhwb3J0cywgbmFtZSwgZ2V0dGVyKSB7XG4gXHRcdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywgbmFtZSkpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgbmFtZSwge1xuIFx0XHRcdFx0Y29uZmlndXJhYmxlOiBmYWxzZSxcbiBcdFx0XHRcdGVudW1lcmFibGU6IHRydWUsXG4gXHRcdFx0XHRnZXQ6IGdldHRlclxuIFx0XHRcdH0pO1xuIFx0XHR9XG4gXHR9O1xuXG4gXHQvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5uID0gZnVuY3Rpb24obW9kdWxlKSB7XG4gXHRcdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuIFx0XHRcdGZ1bmN0aW9uIGdldERlZmF1bHQoKSB7IHJldHVybiBtb2R1bGVbJ2RlZmF1bHQnXTsgfSA6XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0TW9kdWxlRXhwb3J0cygpIHsgcmV0dXJuIG1vZHVsZTsgfTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgJ2EnLCBnZXR0ZXIpO1xuIFx0XHRyZXR1cm4gZ2V0dGVyO1xuIFx0fTtcblxuIFx0Ly8gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSBmdW5jdGlvbihvYmplY3QsIHByb3BlcnR5KSB7IHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCBwcm9wZXJ0eSk7IH07XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIi9cIjtcblxuIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhfX3dlYnBhY2tfcmVxdWlyZV9fLnMgPSA5KTtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyB3ZWJwYWNrL2Jvb3RzdHJhcCBiZmVjMjJlOGRmMmE5NmUxNjRhZCIsImltcG9ydCB7VmVjMn0gZnJvbSAnLi9tYXRoLmpzJ1xyXG5pbXBvcnQgQm91bmRpbmdCb3ggZnJvbSAnLi9Cb3VuZGluZ0JveC5qcydcclxuXHJcbmV4cG9ydCBjb25zdCBTaWRlcyA9IHtcclxuICAgIExFRlQ6IFN5bWJvbCgnbGVmdCcpLFxyXG4gICAgUklHSFQ6IFN5bWJvbCgncmlnaHQnKSxcclxuICAgIEJPVFRPTTogU3ltYm9sKCdib3R0b20nKSxcclxuICAgIFRPUDogU3ltYm9sKCd0b3AnKVxyXG59O1xyXG5cclxuZXhwb3J0IGNsYXNzIFRyYWl0IHtcclxuICAgIGNvbnN0cnVjdG9yKG5hbWUpIHtcclxuICAgICAgICB0aGlzLk5BTUUgPSBuYW1lO1xyXG5cclxuICAgICAgICB0aGlzLnRhc2tzID0gW107XHJcbiAgICB9XHJcblxyXG4gICAgZmluYWxpemUoKSB7XHJcbiAgICAgICAgdGhpcy50YXNrcy5mb3JFYWNoKHRhc2sgPT4gdGFzaygpKTtcclxuICAgICAgICB0aGlzLnRhc2tzLmxlbmd0aCA9IDA7XHJcbiAgICB9XHJcblxyXG4gICAgcXVldWUodGFzaykge1xyXG4gICAgICAgIHRoaXMudGFza3MucHVzaCh0YXNrKTtcclxuICAgIH1cclxuXHJcbiAgICBjb2xsaWRlcyh1cywgdGhlbSkge1xyXG4gICAgICAgIC8vIGNvbnNvbGUubG9nKCdDb2xsaWRlcyB3aXRoICcsIHRoZW0pO1xyXG4gICAgfVxyXG5cclxuICAgIG9ic3RydWN0KCkge1xyXG5cclxuICAgIH1cclxuXHJcbiAgICB1cGRhdGUoKSB7XHJcbiAgICAgICAgLy8gY29uc29sZS53YXJuKCdVbmhhbmRsZWQgdXBkYXRlIGNhbGwgaW4gVHJhaXQnKVxyXG4gICAgfVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBFbnRpdHkge1xyXG4gICAgY29uc3RydWN0b3IoKSB7XHJcbiAgICAgICAgdGhpcy5jYW5Db2xsaWRlcyA9IHRydWU7XHJcblxyXG4gICAgICAgIHRoaXMucG9zID0gbmV3IFZlYzIoMCwwKTtcclxuICAgICAgICB0aGlzLnZlbCA9IG5ldyBWZWMyKDAsMCk7XHJcbiAgICAgICAgdGhpcy5zaXplID0gbmV3IFZlYzIoMCwwKTtcclxuICAgICAgICB0aGlzLm9mZnNldCA9IG5ldyBWZWMyKDAsMCk7XHJcbiAgICAgICAgdGhpcy5ib3VuZHMgPSBuZXcgQm91bmRpbmdCb3godGhpcy5wb3MsIHRoaXMuc2l6ZSwgdGhpcy5vZmZzZXQpO1xyXG4gICAgICAgIHRoaXMubGlmZVRpbWUgPSAwO1xyXG5cclxuICAgICAgICB0aGlzLnRyYWl0cyA9IFtdO1xyXG4gICAgfVxyXG5cclxuICAgIGFkZFRyYWl0KHRyYWl0KSB7XHJcbiAgICAgICAgdGhpcy50cmFpdHMucHVzaCh0cmFpdCk7XHJcbiAgICAgICAgdGhpc1t0cmFpdC5OQU1FXSA9IHRyYWl0O1xyXG4gICAgfVxyXG5cclxuICAgIGZpbmFsaXplKCkge1xyXG4gICAgICAgIHRoaXMudHJhaXRzLmZvckVhY2godHJhaXQgPT4ge1xyXG4gICAgICAgICAgICB0cmFpdC5maW5hbGl6ZSgpO1xyXG4gICAgICAgIH0pXHJcbiAgICB9XHJcblxyXG4gICAgY29sbGlkZXMoY2FuZGlkYXRlKSB7XHJcbiAgICAgICAgLy8gY29uc29sZS5sb2coJ1RvdWNoZWQnLCBjYW5kaWRhdGUpO1xyXG4gICAgICAgIHRoaXMudHJhaXRzLmZvckVhY2godHJhaXQgPT4ge1xyXG4gICAgICAgICAgICB0cmFpdC5jb2xsaWRlcyh0aGlzLCBjYW5kaWRhdGUpO1xyXG4gICAgICAgIH0pXHJcbiAgICB9XHJcblxyXG4gICAgb2JzdHJ1Y3Qoc2lkZSwgbWF0Y2gpIHtcclxuICAgICAgICB0aGlzLnRyYWl0cy5mb3JFYWNoKHRyYWl0ID0+IHtcclxuICAgICAgICAgICAgdHJhaXQub2JzdHJ1Y3QodGhpcywgc2lkZSwgbWF0Y2gpO1xyXG4gICAgICAgIH0pXHJcbiAgICB9XHJcblxyXG4gICAgZHJhdygpIHtcclxuXHJcbiAgICB9XHJcblxyXG4gICAgdXBkYXRlKGRlbHRhVGltZSwgbGV2ZWwpIHtcclxuICAgICAgICB0aGlzLnRyYWl0cy5mb3JFYWNoKHRyYWl0ID0+IHtcclxuICAgICAgICAgICAgdHJhaXQudXBkYXRlKHRoaXMsIGRlbHRhVGltZSwgbGV2ZWwpO1xyXG4gICAgICAgIH0pO1xyXG5cclxuICAgICAgICB0aGlzLmxpZmVUaW1lICs9ZGVsdGFUaW1lO1xyXG4gICAgfVxyXG59XHJcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vcHVibGljL2pzL0VudGl0eS5qc1xuLy8gbW9kdWxlIGlkID0gMFxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJpbXBvcnQgU3ByaXRlU2hlZXQgZnJvbSAnLi9TcHJpdGVTaGVldC5qcydcclxuaW1wb3J0IHtjcmVhdGVBbmltfSBmcm9tICcuL2FuaW0uanMnXHJcblxyXG5leHBvcnQgZnVuY3Rpb24gbG9hZEltYWdlKHVybCkge1xyXG4gICAgcmV0dXJuIG5ldyBQcm9taXNlKHJlc29sdmUgPT4ge1xyXG4gICAgICAgIGNvbnN0IGltYWdlID0gbmV3IEltYWdlKCk7XHJcbiAgICAgICAgaW1hZ2UuYWRkRXZlbnRMaXN0ZW5lcignbG9hZCcsICgpID0+IHtcclxuICAgICAgICAgICAgcmVzb2x2ZShpbWFnZSlcclxuICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgaW1hZ2Uuc3JjID0gdXJsXHJcbiAgICB9KVxyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gbG9hZEpTT04odXJsKSB7XHJcbiAgICByZXR1cm4gZmV0Y2godXJsKVxyXG4gICAgICAgIC50aGVuKHIgPT4gci5qc29uKCkpO1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gbG9hZFNwcml0ZVNoZWV0KG5hbWUpIHtcclxuICAgIHJldHVybiBsb2FkSlNPTihgL3Nwcml0ZXMvJHtuYW1lfS5qc29uYClcclxuICAgICAgICAudGhlbihzaGVldFNwZWMgPT4gUHJvbWlzZS5hbGwoW1xyXG4gICAgICAgICAgICAgICAgc2hlZXRTcGVjLFxyXG4gICAgICAgICAgICAgICAgbG9hZEltYWdlKHNoZWV0U3BlYy5pbWFnZVVSTClcclxuICAgICAgICAgICAgXSkpXHJcbiAgICAgICAgICAgIC50aGVuKChbc2hlZXRTcGVjLCBpbWFnZV0pID0+IHtcclxuICAgICAgICAgICAgICAgIGNvbnN0IHNwcml0ZXMgPSBuZXcgU3ByaXRlU2hlZXQoXHJcbiAgICAgICAgICAgICAgICAgICAgaW1hZ2UsXHJcbiAgICAgICAgICAgICAgICAgICAgc2hlZXRTcGVjLnRpbGVXLFxyXG4gICAgICAgICAgICAgICAgICAgIHNoZWV0U3BlYy50aWxlSCk7XHJcblxyXG4gICAgICAgICAgICAgICAgaWYgKHNoZWV0U3BlYy50aWxlcykge1xyXG4gICAgICAgICAgICAgICAgICAgIHNoZWV0U3BlYy50aWxlcy5mb3JFYWNoKHRpbGVTcGVjID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgc3ByaXRlcy5kZWZpbmVUaWxlKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGlsZVNwZWMubmFtZSwgLi4udGlsZVNwZWMuaW5kZXgpO1xyXG4gICAgICAgICAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgaWYgKHNoZWV0U3BlYy5mcmFtZXMpIHtcclxuICAgICAgICAgICAgICAgICAgICBzaGVldFNwZWMuZnJhbWVzLmZvckVhY2goZnJhbWVTcGVjID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgc3ByaXRlcy5kZWZpbmUoZnJhbWVTcGVjLm5hbWUsIC4uLmZyYW1lU3BlYy5yZWN0KTtcclxuICAgICAgICAgICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgIGlmIChzaGVldFNwZWMuYW5pbWF0aW9ucykge1xyXG4gICAgICAgICAgICAgICAgICAgIHNoZWV0U3BlYy5hbmltYXRpb25zLmZvckVhY2goYW5pbVNwZWMgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBjb25zdCBhbmltYXRpb24gPSBjcmVhdGVBbmltKGFuaW1TcGVjLmZyYW1lcywgYW5pbVNwZWMuZnJhbWVMZW4pO1xyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgc3ByaXRlcy5kZWZpbmVBbmltKGFuaW1TcGVjLm5hbWUsIGFuaW1hdGlvbik7XHJcbiAgICAgICAgICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICByZXR1cm4gc3ByaXRlcztcclxuICAgICAgICB9KTtcclxufVxyXG5cclxuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9wdWJsaWMvanMvbG9hZGVyLmpzXG4vLyBtb2R1bGUgaWQgPSAxXG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIlxyXG5leHBvcnQgIGNsYXNzIE1hdHJpeCB7XHJcbiAgICBjb25zdHJ1Y3RvcigpIHtcclxuICAgICAgICB0aGlzLmdyaWQgPSBbXVxyXG4gICAgfVxyXG5cclxuICAgIGZvckVhY2goY2FsbGJhY2spIHtcclxuICAgICAgICB0aGlzLmdyaWQuZm9yRWFjaCgoY29sdW1uLHgpID0+IHtcclxuICAgICAgICAgICAgY29sdW1uLmZvckVhY2goKHZhbCx5KSA9PiB7XHJcbiAgICAgICAgICAgICAgICBjYWxsYmFjayh2YWwseCx5KVxyXG4gICAgICAgICAgICB9KVxyXG4gICAgICAgIH0pXHJcbiAgICB9XHJcblxyXG4gICAgZ2V0KHgseSkge1xyXG4gICAgICAgIGNvbnN0IGNvbCA9IHRoaXMuZ3JpZFt4XVxyXG5cclxuICAgICAgICBpZiAoY29sKSB7XHJcbiAgICAgICAgICAgIHJldHVybiBjb2xbeV1cclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIHVuZGVmaW5lZFxyXG4gICAgfVxyXG5cclxuICAgIHNldCAoeCx5LHZhbHVlKSB7XHJcbiAgICAgICAgaWYgKCF0aGlzLmdyaWRbeF0pIHtcclxuICAgICAgICAgICAgdGhpcy5ncmlkW3hdID0gW11cclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHRoaXMuZ3JpZFt4XVt5XSA9IHZhbHVlXHJcbiAgICB9XHJcbn1cclxuXHJcbmV4cG9ydCBjbGFzcyBWZWMyIHtcclxuICAgIGNvbnN0cnVjdG9yKHgsIHkpIHtcclxuICAgICAgICB0aGlzLnNldCh4LCB5KVxyXG4gICAgfVxyXG5cclxuICAgIHNldCh4LCB5KSB7XHJcbiAgICAgICAgdGhpcy54ID0geFxyXG4gICAgICAgIHRoaXMueSA9IHlcclxuICAgIH1cclxufVxyXG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL3B1YmxpYy9qcy9tYXRoLmpzXG4vLyBtb2R1bGUgaWQgPSAyXG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsImltcG9ydCB7VHJhaXR9IGZyb20gJy4uL0VudGl0eS5qcydcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEtpbGxhYmxlIGV4dGVuZHMgVHJhaXQge1xyXG4gICAgY29uc3RydWN0b3IoKSB7XHJcbiAgICAgICAgc3VwZXIoJ2tpbGxhYmxlJyk7XHJcbiAgICAgICAgdGhpcy5kZWFkID0gZmFsc2U7XHJcbiAgICAgICAgdGhpcy5kZWFkVGltZSA9IDA7XHJcbiAgICAgICAgdGhpcy5yZW1vdmVBZnRlciA9IDE7XHJcbiAgICB9XHJcblxyXG4gICAga2lsbCgpIHtcclxuICAgICAgICB0aGlzLnF1ZXVlKCgpID0+IHRoaXMuZGVhZCA9IHRydWUpO1xyXG4gICAgfVxyXG5cclxuICAgIHJldml2ZSgpIHtcclxuICAgICAgICB0aGlzLmRlYWQgPSBmYWxzZTtcclxuICAgICAgICB0aGlzLmRlYWRUaW1lID0gMDtcclxuICAgIH1cclxuXHJcbiAgICB1cGRhdGUoZW50aXR5LCBkZWx0YVRpbWUsIGxldmVsKSB7XHJcbiAgICAgICAgaWYgKHRoaXMuZGVhZCkge1xyXG4gICAgICAgICAgICB0aGlzLmRlYWRUaW1lICs9IGRlbHRhVGltZTtcclxuICAgICAgICAgICAgaWYgKHRoaXMuZGVhZFRpbWUgPiB0aGlzLnJlbW92ZUFmdGVyKSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLnF1ZXVlKCgpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICBsZXZlbC5lbnRpdGllcy5kZWxldGUoZW50aXR5KTtcclxuICAgICAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9XHJcbn1cclxuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9wdWJsaWMvanMvdHJhaXRzL0tpbGxhYmxlLmpzXG4vLyBtb2R1bGUgaWQgPSAzXG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsImltcG9ydCB7U2lkZXMsIFRyYWl0fSBmcm9tICcuLi9FbnRpdHkuanMnXHJcblxyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBTb2xpZCBleHRlbmRzIFRyYWl0IHtcclxuICAgIGNvbnN0cnVjdG9yKCkge1xyXG4gICAgICAgIHN1cGVyKCdzb2xpZCcpO1xyXG4gICAgICAgIHRoaXMub2JzdHJ1Y3RzID10cnVlO1xyXG4gICAgfVxyXG5cclxuICAgIG9ic3RydWN0KGVudGl0eSwgc2lkZXMsIG1hdGNoKSB7XHJcbiAgICAgICAgaWYgKCF0aGlzLm9ic3RydWN0cykge1xyXG4gICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBpZiAoc2lkZXMgPT09IFNpZGVzLkJPVFRPTSkge1xyXG4gICAgICAgICAgICBlbnRpdHkuYm91bmRzLnRvcCA9IG1hdGNoLnkxIC0gZW50aXR5LnNpemUueTtcclxuICAgICAgICAgICAgZW50aXR5LnZlbC55ID0gMDtcclxuICAgICAgICB9IGVsc2UgaWYgKHNpZGVzID09PSBTaWRlcy5UT1ApIHtcclxuICAgICAgICAgICAgZW50aXR5LmJvdW5kcy50b3AgPSBtYXRjaC55MjtcclxuICAgICAgICAgICAgZW50aXR5LnZlbC55ID0gMDtcclxuICAgICAgICB9IGVsc2UgaWYgKHNpZGVzID09PSBTaWRlcy5MRUZUKSB7XHJcbiAgICAgICAgICAgIGVudGl0eS5ib3VuZHMubGVmdCA9IG1hdGNoLngxIC0gZW50aXR5LnNpemUueDtcclxuICAgICAgICAgICAgZW50aXR5LnZlbC54ID0gMDtcclxuICAgICAgICB9IGVsc2UgaWYgKHNpZGVzID09PSBTaWRlcy5SSUdIVCkge1xyXG4gICAgICAgICAgICBlbnRpdHkuYm91bmRzLmxlZnQgPSBtYXRjaC54MjtcclxuICAgICAgICAgICAgZW50aXR5LnZlbC54ID0gMDtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbn1cclxuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9wdWJsaWMvanMvdHJhaXRzL1NvbGlkLmpzXG4vLyBtb2R1bGUgaWQgPSA0XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsImltcG9ydCB7U2lkZXMsIFRyYWl0fSBmcm9tICcuLi9FbnRpdHkuanMnXHJcblxyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBQaHlzaWNzIGV4dGVuZHMgVHJhaXQge1xyXG4gICAgY29uc3RydWN0b3IoKSB7XHJcbiAgICAgICAgc3VwZXIoJ3BoeXNpY3MnKTtcclxuICAgIH1cclxuXHJcbiAgICB1cGRhdGUoZW50aXR5LCBkZWx0YVRpbWUsIGxldmVsKSB7XHJcbiAgICAgICAgZW50aXR5LnBvcy54ICs9IGVudGl0eS52ZWwueCAqIGRlbHRhVGltZTtcclxuICAgICAgICBsZXZlbC50aWxlQ29sbGlkZXIuY2hlY2tYKGVudGl0eSk7XHJcblxyXG4gICAgICAgIGVudGl0eS5wb3MueSArPSBlbnRpdHkudmVsLnkgKiBkZWx0YVRpbWU7XHJcbiAgICAgICAgbGV2ZWwudGlsZUNvbGxpZGVyLmNoZWNrWShlbnRpdHkpO1xyXG5cclxuICAgICAgICBlbnRpdHkudmVsLnkgKz0gbGV2ZWwuZ3Jhdml0eSAqIGRlbHRhVGltZTtcclxuICAgIH1cclxufVxyXG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL3B1YmxpYy9qcy90cmFpdHMvUGh5c2ljcy5qc1xuLy8gbW9kdWxlIGlkID0gNVxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJleHBvcnQgZGVmYXVsdCBjbGFzcyBUaWxlUmVzb2x2ZXIge1xyXG4gICAgY29uc3RydWN0b3IobWF0cml4LCB0aWxlU2l6ZSA9IDE2KSB7XHJcbiAgICAgICAgdGhpcy5tYXRyaXggPSBtYXRyaXg7XHJcbiAgICAgICAgdGhpcy50aWxlU2l6ZSA9IHRpbGVTaXplO1xyXG4gICAgfVxyXG5cclxuICAgIHRvSW5kZXgocG9zKSB7XHJcbiAgICAgICAgcmV0dXJuIE1hdGguZmxvb3IocG9zIC8gdGhpcy50aWxlU2l6ZSk7XHJcbiAgICB9XHJcblxyXG4gICAgdG9JbmRleFJhbmdlKHBvczEsIHBvczIpIHtcclxuICAgICAgICBjb25zdCBwTWF4ID0gTWF0aC5jZWlsKHBvczIgLyB0aGlzLnRpbGVTaXplKSAqIHRoaXMudGlsZVNpemU7XHJcbiAgICAgICAgbGV0IHJhbmdlID0gW107XHJcbiAgICAgICAgbGV0IHBvcyA9IHBvczE7XHJcbiAgICAgICAgZG8ge1xyXG4gICAgICAgICAgICByYW5nZS5wdXNoKHRoaXMudG9JbmRleChwb3MpKTtcclxuICAgICAgICAgICAgcG9zICs9IHRoaXMudGlsZVNpemU7XHJcbiAgICAgICAgfSB3aGlsZSAocG9zIDwgcE1heCk7XHJcblxyXG4gICAgICAgIHJldHVybiByYW5nZTtcclxuICAgIH1cclxuXHJcbiAgICBnZXRCeUluZGV4KGluZGV4WCwgaW5kZXhZKSB7XHJcbiAgICAgICAgY29uc3QgdGlsZSA9IHRoaXMubWF0cml4LmdldChpbmRleFgsIGluZGV4WSk7XHJcbiAgICAgICAgY29uc3QgeDEgPSBpbmRleFggKiB0aGlzLnRpbGVTaXplO1xyXG4gICAgICAgIGNvbnN0IHgyID0geDEgKyB0aGlzLnRpbGVTaXplO1xyXG4gICAgICAgIGNvbnN0IHkxID0gaW5kZXhZICogdGhpcy50aWxlU2l6ZTtcclxuICAgICAgICBjb25zdCB5MiA9IHkxICsgdGhpcy50aWxlU2l6ZTtcclxuICAgICAgICBpZiAodGlsZSkge1xyXG4gICAgICAgICAgICByZXR1cm4ge1xyXG4gICAgICAgICAgICAgICAgdGlsZSxcclxuICAgICAgICAgICAgICAgIHgxLFxyXG4gICAgICAgICAgICAgICAgeDIsXHJcbiAgICAgICAgICAgICAgICB5MSxcclxuICAgICAgICAgICAgICAgIHkyXHJcbiAgICAgICAgICAgIH07XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIHNlYXJjaEJ5UG9zaXRpb24ocG9zWCwgcG9zWSkge1xyXG4gICAgICAgIHJldHVybiB0aGlzLmdldEJ5SW5kZXgoXHJcbiAgICAgICAgICAgIHRoaXMudG9JbmRleChwb3NYKSxcclxuICAgICAgICAgICAgdGhpcy50b0luZGV4KHBvc1kpLFxyXG4gICAgICAgICk7XHJcbiAgICB9XHJcblxyXG4gICAgc2VhcmNoQnlSYW5nZSh4MSx4Mix5MSx5Mikge1xyXG4gICAgICAgIGxldCBtYXRjaGVzID0gW107XHJcbiAgICAgICAgdGhpcy50b0luZGV4UmFuZ2UoeDEseDIpLmZvckVhY2goaW5kZXhYID0+IHtcclxuICAgICAgICAgICAgdGhpcy50b0luZGV4UmFuZ2UoeTEseTIpLmZvckVhY2goaW5kZXhZID0+IHtcclxuICAgICAgICAgICAgICAgIGxldCBtYXRjaCA9IHRoaXMuZ2V0QnlJbmRleChpbmRleFgsIGluZGV4WSk7XHJcbiAgICAgICAgICAgICAgICBpZiAobWF0Y2gpIHtcclxuICAgICAgICAgICAgICAgICAgICBtYXRjaGVzLnB1c2gobWF0Y2gpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9KVxyXG4gICAgICAgIH0pO1xyXG5cclxuICAgICAgICByZXR1cm4gbWF0Y2hlcztcclxuICAgIH1cclxufVxyXG5cclxuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9wdWJsaWMvanMvVGlsZVJlc29sdmVyLmpzXG4vLyBtb2R1bGUgaWQgPSA2XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsImV4cG9ydCBkZWZhdWx0IGNsYXNzIFNwcml0ZVNoZWV0IHtcclxuICAgIGNvbnN0cnVjdG9yKGltYWdlLCB3aWR0aCwgaGVpZ2h0KSB7XHJcbiAgICAgICAgdGhpcy5pbWFnZSA9IGltYWdlO1xyXG4gICAgICAgIHRoaXMud2lkdGggPSB3aWR0aDtcclxuICAgICAgICB0aGlzLmhlaWdodCA9IGhlaWdodDtcclxuICAgICAgICB0aGlzLnRpbGVzID0gbmV3IE1hcCgpO1xyXG4gICAgICAgIHRoaXMuYW5pbWF0aW9ucyA9IG5ldyBNYXAoKTtcclxuICAgIH1cclxuXHJcbiAgICBkZWZpbmVBbmltKG5hbWUsIGFuaW1hdGlvbikge1xyXG4gICAgICAgIHRoaXMuYW5pbWF0aW9ucy5zZXQobmFtZSwgYW5pbWF0aW9uKTtcclxuICAgIH1cclxuXHJcbiAgICBkZWZpbmUobmFtZSwgeCwgeSwgd2lkdGgsIGhlaWdodCkge1xyXG4gICAgICAgIC8vIGRlZmluZSBhIHNwcml0ZSBpbiB0aGUgaW1hZ2Ugd2l0aCBuYW1lXHJcbiAgICAgICAgLy8g5piO56Gu5a6a5LmJ5LiA5Z2X5L2N5LqOc3ByaXRlIHNoZWV05LiteCx55L2N572ud2lkdGgsIGhlaWdodOeahHNwcml0ZVxyXG4gICAgICAgIGNvbnN0IGJ1ZmZlcnMgPSBbZmFsc2UsIHRydWVdLm1hcChmbGlwID0+IHtcclxuICAgICAgICAgICAgY29uc3QgYnVmZmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnY2FudmFzJyk7XHJcbiAgICAgICAgICAgIGJ1ZmZlci53aWR0aCA9IHdpZHRoO1xyXG4gICAgICAgICAgICBidWZmZXIuaGVpZ2h0ID0gaGVpZ2h0O1xyXG5cclxuICAgICAgICAgICAgY29uc3QgY29udGV4dCA9IGJ1ZmZlci5nZXRDb250ZXh0KCcyZCcpO1xyXG5cclxuICAgICAgICAgICAgaWYgKGZsaXApIHtcclxuICAgICAgICAgICAgICAgIC8vIE1pcnJvciB0aGUgY2FudmFzXHJcbiAgICAgICAgICAgICAgICBjb250ZXh0LnNjYWxlKC0xLCAxKTtcclxuICAgICAgICAgICAgICAgIGNvbnRleHQudHJhbnNsYXRlKC13aWR0aCwgMCk7XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIGNvbnRleHQuZHJhd0ltYWdlKFxyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuaW1hZ2UsXHJcbiAgICAgICAgICAgICAgICAgICAgeCxcclxuICAgICAgICAgICAgICAgICAgICB5LFxyXG4gICAgICAgICAgICAgICAgICAgIHdpZHRoLFxyXG4gICAgICAgICAgICAgICAgICAgIGhlaWdodCxcclxuICAgICAgICAgICAgICAgICAgICAwLFxyXG4gICAgICAgICAgICAgICAgICAgIDAsXHJcbiAgICAgICAgICAgICAgICAgICAgd2lkdGgsXHJcbiAgICAgICAgICAgICAgICAgICAgaGVpZ2h0KTtcclxuXHJcbiAgICAgICAgICAgIHJldHVybiBidWZmZXI7XHJcbiAgICAgICAgfSk7XHJcblxyXG4gICAgICAgIHRoaXMudGlsZXMuc2V0KG5hbWUsIGJ1ZmZlcnMpO1xyXG4gICAgfVxyXG5cclxuICAgIGRlZmluZVRpbGUobmFtZSwgeCwgeSkge1xyXG4gICAgICAgIHRoaXMuZGVmaW5lKG5hbWUsIHggKiB0aGlzLndpZHRoLCB5ICogdGhpcy5oZWlnaHQsIHRoaXMud2lkdGgsIHRoaXMuaGVpZ2h0KTtcclxuICAgIH1cclxuXHJcbiAgICBkcmF3KG5hbWUsIGNvbnRleHQsIHgsIHksIGZsaXAgPSBmYWxzZSkge1xyXG4gICAgICAgIGNvbnN0IGJ1ZmZlciA9IHRoaXMudGlsZXMuZ2V0KG5hbWUpW2ZsaXAgPyAxIDogMF07XHJcbiAgICAgICAgY29udGV4dC5kcmF3SW1hZ2UoYnVmZmVyLCB4LCB5KTtcclxuICAgIH1cclxuXHJcbiAgICBkcmF3VGlsZShuYW1lLCBjb250ZXh0LCB4LCB5KSB7XHJcbiAgICAgICAgdGhpcy5kcmF3KG5hbWUsIGNvbnRleHQsIHgqdGhpcy53aWR0aCwgeSp0aGlzLmhlaWdodCk7XHJcbiAgICB9XHJcblxyXG4gICAgZHJhd0FuaW0obmFtZSwgY29udGV4dCwgeCwgeSwgZGlzdGFuY2UpIHtcclxuICAgICAgICBjb25zdCBhbmltID0gdGhpcy5hbmltYXRpb25zLmdldChuYW1lKTtcclxuICAgICAgICB0aGlzLmRyYXdUaWxlKGFuaW0oZGlzdGFuY2UpLCBjb250ZXh0LCB4LCB5KTtcclxuICAgIH1cclxufVxyXG5cclxuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9wdWJsaWMvanMvU3ByaXRlU2hlZXQuanNcbi8vIG1vZHVsZSBpZCA9IDdcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiaW1wb3J0IHtTaWRlcywgVHJhaXR9IGZyb20gJy4uL0VudGl0eS5qcydcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFBlbmR1bHVtTW92ZSBleHRlbmRzIFRyYWl0IHtcclxuICAgIGNvbnN0cnVjdG9yKCkge1xyXG4gICAgICAgIHN1cGVyKCdwZW5kdWx1bU1vdmUnKTtcclxuICAgICAgICB0aGlzLmVuYWJsZSA9IHRydWU7XHJcbiAgICAgICAgdGhpcy5zcGVlZCA9ICAtMzA7XHJcbiAgICB9XHJcblxyXG4gICAgb2JzdHJ1Y3Qoa29vcGEsIHNpZGVzKSB7XHJcbiAgICAgICAgaWYgKHNpZGVzID09PSBTaWRlcy5MRUZUIHx8IHNpZGVzID09PSBTaWRlcy5SSUdIVCkge1xyXG4gICAgICAgICAgICB0aGlzLnNwZWVkID0gLXRoaXMuc3BlZWQ7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIHVwZGF0ZShlbnRpdHksIGRlbHRhVGltZSkge1xyXG4gICAgICAgIGVudGl0eS5saWZlVGltZSArPSBkZWx0YVRpbWU7XHJcbiAgICAgICAgaWYgKHRoaXMuZW5hYmxlKSB7XHJcbiAgICAgICAgICAgIGVudGl0eS52ZWwueCA9IHRoaXMuc3BlZWQ7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59XHJcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vcHVibGljL2pzL3RyYWl0cy9QZW5kdWx1bU1vdmUuanNcbi8vIG1vZHVsZSBpZCA9IDhcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiaW1wb3J0IFRpbWVyIGZyb20gJy4vVGltZXIuanMnO1xyXG5pbXBvcnQgQ2FtZXJhIGZyb20gJy4vQ2FtZXJhLmpzJztcclxuaW1wb3J0IEVudGl0eSBmcm9tICcuL0VudGl0eS5qcyc7XHJcbmltcG9ydCBQbGF5ZXJDb250cm9sbGVyIGZyb20gJy4vdHJhaXRzL1BsYXllckNvbnRyb2xsZXIuanMnO1xyXG5pbXBvcnQge2NyZWF0ZUxldmVsTG9hZGVyfSBmcm9tICcuL2xvYWRlcnMvbGV2ZWwuanMnO1xyXG5pbXBvcnQge2xvYWRGb250fSBmcm9tICcuL2xvYWRlcnMvZm9udC5qcyc7XHJcbmltcG9ydCB7bG9hZEVudGl0aWVzfSBmcm9tICcuL2VudGl0aWVzLmpzJztcclxuaW1wb3J0IHtjcmVhdGVEYXNoYm9hcmRMYXllcn0gZnJvbSAnLi9sYXllcnMvZGFzaGJvYXJkLmpzJztcclxuaW1wb3J0IHtzZXR1cEtleWJvYXJkfSBmcm9tICcuL2lucHV0LmpzJztcclxuLy8gaW1wb3J0IHtjcmVhdGVDb2xsaXNpb25MYXllcn0gZnJvbSAnLi9sYXllcnMvY29sbGlzaW9uLmpzJ1xyXG4vLyBpbXBvcnQge2NyZWF0ZUNhbWVyYUxheWVyfSBmcm9tICcuL2xheWVycy9jYW1lcmEuanMnO1xyXG4vLyBpbXBvcnQge3NldHVwTW91c2VDb250cm9sfSBmcm9tICcuL2RlYnVnLmpzJztcclxuXHJcblxyXG5mdW5jdGlvbiBjcmVhdGVQbGF5ZXJFbnYocGxheWVyRW50aXR5KSB7XHJcbiAgICBjb25zdCBwbGF5ZXJFbnYgPSBuZXcgRW50aXR5KCk7XHJcbiAgICBjb25zdCBwbGF5ZXJDb250cm9sID0gbmV3IFBsYXllckNvbnRyb2xsZXIoKTtcclxuICAgIHBsYXllckNvbnRyb2wuc2V0UGxheWVyKHBsYXllckVudGl0eSk7XHJcbiAgICBwbGF5ZXJFbnYuYWRkVHJhaXQocGxheWVyQ29udHJvbCk7XHJcblxyXG4gICAgcmV0dXJuIHBsYXllckVudjtcclxufVxyXG5cclxuYXN5bmMgZnVuY3Rpb24gbWFpbihjYW52YXMpIHtcclxuICAgIGNvbnN0IGNvbnRleHQgPSBjYW52YXMuZ2V0Q29udGV4dCgnMmQnKTtcclxuXHJcbiAgICBjb25zdCBbZW50aXR5RmFjdG9yeSwgZm9udF0gPSBhd2FpdCBQcm9taXNlLmFsbChbXHJcbiAgICAgICAgbG9hZEVudGl0aWVzKCksXHJcbiAgICAgICAgbG9hZEZvbnQoKVxyXG4gICAgXSk7XHJcbiAgICBjb25zdCBsb2FkTGV2ZWwgPSBhd2FpdCBjcmVhdGVMZXZlbExvYWRlcihlbnRpdHlGYWN0b3J5KTtcclxuICAgIGNvbnN0IGxldmVsID0gYXdhaXQgbG9hZExldmVsKCcxLTEnKTtcclxuXHJcbiAgICBjb25zdCBjYW1lcmEgPSBuZXcgQ2FtZXJhKCk7XHJcblxyXG4gICAgY29uc3QgbWFyaW8gPSBlbnRpdHlGYWN0b3J5Lm1hcmlvKCk7XHJcbiAgICBtYXJpby5wb3Muc2V0KDY0LCAxMDApO1xyXG4gICAgbGV2ZWwuZW50aXRpZXMuYWRkKG1hcmlvKTtcclxuXHJcbiAgICBjb25zdCBwbGF5ZXJFbnYgPSBjcmVhdGVQbGF5ZXJFbnYobWFyaW8pO1xyXG4gICAgbGV2ZWwuZW50aXRpZXMuYWRkKHBsYXllckVudik7XHJcblxyXG4gICAgY29uc3QgaW5wdXQgPSBzZXR1cEtleWJvYXJkKG1hcmlvKTtcclxuICAgIGlucHV0Lmxpc3RlblRvKHdpbmRvdyk7XHJcblxyXG5cclxuICAgIGxldmVsLmNvbXAubGF5ZXJzLnB1c2goY3JlYXRlRGFzaGJvYXJkTGF5ZXIoZm9udCwgcGxheWVyRW52KSk7XHJcblxyXG4gICAgLypEZWJ1ZyBUb29scyA6ICovXHJcbiAgICAvLyBsZXZlbC5jb21wLmxheWVycy5wdXNoKFxyXG4gICAgLy8gICAgIGNyZWF0ZUNvbGxpc2lvbkxheWVyKGxldmVsKSxcclxuICAgIC8vICAgICBjcmVhdGVDYW1lcmFMYXllcihjYW1lcmEpKTtcclxuICAgIC8vIHNldHVwTW91c2VDb250cm9sKGNhbnZhcywgbWFyaW8sIGNhbWVyYSk7XHJcblxyXG5cclxuICAgIGNvbnN0IHRpbWVyID0gbmV3IFRpbWVyKDEvNjApO1xyXG5cclxuICAgIHRpbWVyLnVwZGF0ZSA9IGZ1bmN0aW9uIHVwZGF0ZShkZWx0YVRpbWUpIHtcclxuICAgICAgICBsZXZlbC51cGRhdGUoZGVsdGFUaW1lKTtcclxuXHJcbiAgICAgICAgY2FtZXJhLnBvcy54ID0gTWF0aC5tYXgoMCwgbWFyaW8ucG9zLnggLSAxMDApO1xyXG5cclxuICAgICAgICBsZXZlbC5jb21wLmRyYXcoY29udGV4dCwgY2FtZXJhKTtcclxuXHJcbiAgICB9O1xyXG5cclxuICAgIHRpbWVyLnN0YXJ0KCk7XHJcbn1cclxuXHJcblxyXG5jb25zdCBjYW52YXMgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnc2NyZWVuJyk7XHJcbm1haW4oY2FudmFzKTtcclxuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9wdWJsaWMvanMvbWFpbi5qc1xuLy8gbW9kdWxlIGlkID0gOVxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJleHBvcnQgZGVmYXVsdCBjbGFzcyBUaW1lciB7XHJcbiAgICBjb25zdHJ1Y3RvcihkZWx0YVRpbWUgPSAxLzYwKSB7XHJcbiAgICAgICAgbGV0IGFjY3VtdWxhdGVkVGltZSA9IDA7XHJcbiAgICAgICAgLy8gbGV0IGxhc3RUaW1lID0gMDtcclxuICAgICAgICBsZXQgbGFzdFRpbWUgPSBwZXJmb3JtYW5jZS5ub3coKTtcclxuXHJcbiAgICAgICAgdGhpcy51cGRhdGVQcm94eSA9ICAodGltZSkgPT4ge1xyXG4gICAgICAgICAgICBhY2N1bXVsYXRlZFRpbWUgKz0gKHRpbWUgLSBsYXN0VGltZSkgLyAxMDAwO1xyXG5cclxuICAgICAgICAgICAgaWYgKGFjY3VtdWxhdGVkVGltZSA+IDEpIHtcclxuICAgICAgICAgICAgICAgIC8qIEEgaGFjayB0byBTb2x2ZSB0aGUgdGltZSBhY2N1bXVsYXRlXHJcbiAgICAgICAgICAgICAgICAqIHdoZW4gaXQgaXMgcnVubmluZyBiYWNrZ3JvdW5kLlxyXG4gICAgICAgICAgICAgICAgKiBTbyB0aGF0IG91ciBjb21wdXRlciB3b250IGJlIHNsb3cgZG93biBieSB0aGlzLFxyXG4gICAgICAgICAgICAgICAgKiBhZnRlciBsb25nIHRpbWUgb2YgcnVubmluZyB0aGlzIGluIGJhY2tncm91bmQuKi9cclxuICAgICAgICAgICAgICAgIGFjY3VtdWxhdGVkVGltZSA9IDE7XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIC8vIGNvbnNvbGUubG9nKGFjY3VtdWxhdGVkVGltZSxkZWx0YVRpbWUpXHJcbiAgICAgICAgICAgIC8vIFRPRE86QlVHIFRoZSBmaXJzdCB0aW1lIHVwZGF0ZSB0b28gbWFueSB0aW1lcyBpZiB0aGUgbGFzdFRpbWUgPSAwIC5cclxuICAgICAgICAgICAgd2hpbGUgKGFjY3VtdWxhdGVkVGltZSA+IGRlbHRhVGltZSkge1xyXG4gICAgICAgICAgICAgICAgdGhpcy51cGRhdGUoZGVsdGFUaW1lKTtcclxuXHJcbiAgICAgICAgICAgICAgICBhY2N1bXVsYXRlZFRpbWUgLT0gZGVsdGFUaW1lO1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICBsYXN0VGltZSA9IHRpbWU7XHJcblxyXG4gICAgICAgICAgICB0aGlzLmVucXVldWUoKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgZW5xdWV1ZSgpIHtcclxuICAgICAgICByZXF1ZXN0QW5pbWF0aW9uRnJhbWUodGhpcy51cGRhdGVQcm94eSk7XHJcbiAgICB9XHJcblxyXG4gICAgc3RhcnQoKSB7XHJcbiAgICAgICAgdGhpcy5lbnF1ZXVlKCk7XHJcbiAgICB9XHJcbn1cclxuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9wdWJsaWMvanMvVGltZXIuanNcbi8vIG1vZHVsZSBpZCA9IDEwXG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsImltcG9ydCB7VmVjMn0gZnJvbSAnLi9tYXRoLmpzJztcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIENhbWVyYSB7XHJcbiAgICBjb25zdHJ1Y3RvcigpIHtcclxuICAgICAgICB0aGlzLnBvcyA9IG5ldyBWZWMyKDAsMCk7XHJcbiAgICAgICAgdGhpcy5zaXplID0gbmV3IFZlYzIoMjU2LDI0MCk7XHJcbiAgICB9XHJcbn1cclxuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9wdWJsaWMvanMvQ2FtZXJhLmpzXG4vLyBtb2R1bGUgaWQgPSAxMVxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJleHBvcnQgZGVmYXVsdCBjbGFzcyBCb3VuZGluZ0JveCB7XHJcbiAgICBjb25zdHJ1Y3Rvcihwb3MsIHNpemUsIG9mZnNldCkge1xyXG4gICAgICAgIHRoaXMucG9zID0gcG9zO1xyXG4gICAgICAgIHRoaXMuc2l6ZSA9IHNpemU7XHJcbiAgICAgICAgdGhpcy5vZmZzZXQgPSBvZmZzZXQ7XHJcbiAgICB9XHJcblxyXG4gICAgb3ZlcmxhcHMoYm94KSB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuYm90dG9tID4gYm94LnRvcFxyXG4gICAgICAgICAgICAgICAgICAgICAmJiB0aGlzLnRvcCA8IGJveC5ib3R0b21cclxuICAgICAgICAgICAgICAgICAgICAgJiYgdGhpcy5sZWZ0IDwgYm94LnJpZ2h0XHJcbiAgICAgICAgICAgICAgICAgICAgICYmIHRoaXMucmlnaHQgPiBib3gubGVmdFxyXG4gICAgfVxyXG5cclxuICAgIGdldCBib3R0b20oKSB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMucG9zLnkgKyB0aGlzLnNpemUueSArIHRoaXMub2Zmc2V0Lnk7XHJcbiAgICB9XHJcblxyXG4gICAgc2V0IGJvdHRvbSh5KSB7XHJcbiAgICAgICAgdGhpcy5wb3MueSA9IHkgLSAodGhpcy5zaXplLnkgKyB0aGlzLm9mZnNldC55KTtcclxuICAgIH1cclxuXHJcbiAgICBnZXQgdG9wKCkge1xyXG4gICAgICAgIHJldHVybiB0aGlzLnBvcy55ICsgdGhpcy5vZmZzZXQueTtcclxuICAgIH1cclxuXHJcbiAgICBzZXQgdG9wKHkpIHtcclxuICAgICAgICB0aGlzLnBvcy55ID0geSAtIHRoaXMub2Zmc2V0Lnk7XHJcbiAgICB9XHJcblxyXG4gICAgZ2V0IGxlZnQoKSB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMucG9zLnggKyB0aGlzLm9mZnNldC54O1xyXG4gICAgfVxyXG5cclxuICAgIHNldCBsZWZ0KHgpIHtcclxuICAgICAgICB0aGlzLnBvcy54ID0geCAtIHRoaXMub2Zmc2V0Lng7XHJcbiAgICB9XHJcblxyXG4gICAgZ2V0IHJpZ2h0KCkge1xyXG4gICAgICAgIHJldHVybiB0aGlzLnBvcy54ICsgdGhpcy5zaXplLnggKyB0aGlzLm9mZnNldC54O1xyXG4gICAgfVxyXG5cclxuICAgIHNldCByaWdodCh4KSB7XHJcbiAgICAgICAgdGhpcy5wb3MueCA9IHggLSAodGhpcy5zaXplLnggKyB0aGlzLm9mZnNldC54KTtcclxuICAgIH1cclxufVxyXG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL3B1YmxpYy9qcy9Cb3VuZGluZ0JveC5qc1xuLy8gbW9kdWxlIGlkID0gMTJcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiaW1wb3J0IHtUcmFpdH0gZnJvbSAnLi4vRW50aXR5LmpzJztcclxuaW1wb3J0IHtWZWMyfSBmcm9tICcuLi9tYXRoLmpzJztcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFBsYXllckNvbnRyb2xsZXIgZXh0ZW5kcyBUcmFpdCB7XHJcbiAgICBjb25zdHJ1Y3RvcigpIHtcclxuICAgICAgICBzdXBlcigncGxheWVyQ29udHJvbGxlcicpO1xyXG4gICAgICAgIHRoaXMucGxheWVyID0gbnVsbDtcclxuICAgICAgICB0aGlzLmNoZWNrUG9pbnQgPSBuZXcgVmVjMig2NCw2NCk7XHJcbiAgICAgICAgdGhpcy50aW1lID0gMzAwO1xyXG4gICAgICAgIHRoaXMuc2NvcmUgPSAwO1xyXG4gICAgfVxyXG5cclxuICAgIHNldFBsYXllcihlbnRpdHkpIHtcclxuICAgICAgICB0aGlzLnBsYXllciA9IGVudGl0eTtcclxuICAgICAgICB0aGlzLnBsYXllci5zdG9tZXIub25TdG9tcCA9ICgpID0+IHtcclxuICAgICAgICAgICAgdGhpcy5zY29yZSArPSAxMDA7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIHVwZGF0ZShlbnRpdHksIGRlbHRhVGltZSwgbGV2ZWwpIHtcclxuICAgICAgICBpZiAoIWxldmVsLmVudGl0aWVzLmhhcyh0aGlzLnBsYXllcikpIHtcclxuICAgICAgICAgICAgdGhpcy5wbGF5ZXIua2lsbGFibGUucmV2aXZlKCk7XHJcbiAgICAgICAgICAgIHRoaXMucGxheWVyLnBvcy5zZXQodGhpcy5jaGVja1BvaW50LnggLHRoaXMuY2hlY2tQb2ludC55KTtcclxuICAgICAgICAgICAgbGV2ZWwuZW50aXRpZXMuYWRkKHRoaXMucGxheWVyKTtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICB0aGlzLnRpbWUgLT0gZGVsdGFUaW1lICogMjtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbn1cclxuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9wdWJsaWMvanMvdHJhaXRzL1BsYXllckNvbnRyb2xsZXIuanNcbi8vIG1vZHVsZSBpZCA9IDEzXG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsImltcG9ydCB7TWF0cml4fSBmcm9tICcuLi9tYXRoLmpzJ1xyXG5pbXBvcnQgTGV2ZWwgZnJvbSAnLi4vTGV2ZWwuanMnXHJcbmltcG9ydCB7bG9hZEpTT04sIGxvYWRTcHJpdGVTaGVldH0gZnJvbSAnLi4vbG9hZGVyLmpzJ1xyXG5pbXBvcnQge2NyZWF0ZVNwcml0ZUxheWVyfSBmcm9tICcuLi9sYXllcnMvc3ByaXRlcy5qcydcclxuaW1wb3J0IHtjcmVhdGVCYWNrZ3JvdW5kTGF5ZXJ9IGZyb20gJy4uL2xheWVycy9iYWNrZ3JvdW5kLmpzJ1xyXG5cclxuZnVuY3Rpb24gc2V0dXBMZXZlbChsZXZlbFNwZWMsIGxldmVsKSB7XHJcbiAgICBjb25zdCBtZXJnZWRDb2xsaXNpb25HcmlkID0gbGV2ZWxTcGVjLmxheWVycy5yZWR1Y2UoKG1lcmdlZFRpbGVzLCBsYXllclNwZWMpID0+IHtcclxuICAgICAgICByZXR1cm4gbWVyZ2VkVGlsZXMuY29uY2F0KGxheWVyU3BlYy50aWxlcyk7XHJcbiAgICB9LCBbXSk7XHJcblxyXG4gICAgY29uc3QgY29sbGlzaW9uR3JpZCA9IGNyZWF0ZUNvbGxpc2lvbkdyaWQobWVyZ2VkQ29sbGlzaW9uR3JpZCwgbGV2ZWxTcGVjLnBhdHRlcm5zKTtcclxuICAgIGxldmVsLnNldENvbGxpc2lvbkdyaWQoY29sbGlzaW9uR3JpZCk7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIHNldHVwQmFja2dyb3VuZChsZXZlbFNwZWMsIGxldmVsLCBiYWNrZ3JvdW5kU3ByaXRlcykge1xyXG4gICAgbGV2ZWxTcGVjLmxheWVycy5mb3JFYWNoKGxheWVyID0+IHtcclxuICAgICAgICBjb25zdCBiYWNrZ3JvdW5kR3JpZCA9IGNyZWF0ZUJhY2tncm91bmRHcmlkKGxheWVyLnRpbGVzLCBsZXZlbFNwZWMucGF0dGVybnMpO1xyXG4gICAgICAgIGNvbnN0IGJhY2tncm91bmRMYXllciA9IGNyZWF0ZUJhY2tncm91bmRMYXllcihsZXZlbCwgYmFja2dyb3VuZEdyaWQsIGJhY2tncm91bmRTcHJpdGVzKTtcclxuICAgICAgICBsZXZlbC5jb21wLmxheWVycy5wdXNoKGJhY2tncm91bmRMYXllcik7XHJcbiAgICB9KTtcclxufVxyXG5cclxuZnVuY3Rpb24gc2V0dXBFbnRpdGllcyhsZXZlbFNwZWMsIGxldmVsLCBlbnRpdHlGYWN0b3J5KSB7XHJcbiAgICBsZXZlbFNwZWMuZW50aXRpZXMuZm9yRWFjaCgoe25hbWUsIHBvczogW3gseV19KSA9PiB7XHJcbiAgICAgICAgLy8gY29uc29sZS5sb2cobmFtZSwgeCx5KTtcclxuICAgICAgICBjb25zdCBjcmVhdGVFbnRpdHkgPSBlbnRpdHlGYWN0b3J5W25hbWVdO1xyXG4gICAgICAgIGNvbnN0IGVudGl0eSA9IGNyZWF0ZUVudGl0eSgpO1xyXG4gICAgICAgIGVudGl0eS5wb3Muc2V0KHgsIHkpO1xyXG4gICAgICAgIGxldmVsLmVudGl0aWVzLmFkZChlbnRpdHkpO1xyXG4gICAgfSk7XHJcblxyXG4gICAgY29uc3Qgc3ByaXRlTGF5ZXIgPSBjcmVhdGVTcHJpdGVMYXllcihsZXZlbC5lbnRpdGllcyk7XHJcbiAgICBsZXZlbC5jb21wLmxheWVycy5wdXNoKHNwcml0ZUxheWVyKTtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIGNyZWF0ZUxldmVsTG9hZGVyKGVudGl0eUZhY3RvcnkpIHtcclxuICAgIHJldHVybiBmdW5jdGlvbiBsb2FkTGV2ZWwobmFtZSkge1xyXG4gICAgICAgIHJldHVybiBsb2FkSlNPTihgLi4vbGV2ZWxzLyR7bmFtZX0uanNvbmApXHJcbiAgICAgICAgICAgIC50aGVuKGxldmVsU3BlYyA9PiBQcm9taXNlLmFsbChbXHJcbiAgICAgICAgICAgICAgICBsZXZlbFNwZWMsXHJcbiAgICAgICAgICAgICAgICBsb2FkU3ByaXRlU2hlZXQobGV2ZWxTcGVjLnNwcml0ZVNoZWV0KVxyXG4gICAgICAgICAgICBdKSlcclxuICAgICAgICAgICAgLnRoZW4oKFtsZXZlbFNwZWMsIGJhY2tncm91bmRTcHJpdGVzXSkgPT4ge1xyXG4gICAgICAgICAgICAgICAgY29uc3QgbGV2ZWwgPSBuZXcgTGV2ZWwoKTtcclxuXHJcbiAgICAgICAgICAgICAgICBzZXR1cExldmVsKGxldmVsU3BlYywgbGV2ZWwpO1xyXG4gICAgICAgICAgICAgICAgc2V0dXBCYWNrZ3JvdW5kKGxldmVsU3BlYywgbGV2ZWwsIGJhY2tncm91bmRTcHJpdGVzKTtcclxuICAgICAgICAgICAgICAgIHNldHVwRW50aXRpZXMobGV2ZWxTcGVjLCBsZXZlbCwgZW50aXR5RmFjdG9yeSk7XHJcblxyXG4gICAgICAgICAgICAgICAgcmV0dXJuIGxldmVsO1xyXG4gICAgICAgICAgICB9KVxyXG4gICAgfVxyXG59XHJcblxyXG5mdW5jdGlvbiBjcmVhdGVDb2xsaXNpb25HcmlkKHRpbGVzLCBwYXR0ZXJucykge1xyXG4gICAgY29uc3QgZ3JpZCA9IG5ldyBNYXRyaXgoKTtcclxuXHJcbiAgICBmb3IgKGNvbnN0IHt0aWxlLCB4LCB5fSBvZiBleHBhbmRUaWxlcyh0aWxlcywgcGF0dGVybnMpKSB7XHJcbiAgICAgICAgZ3JpZC5zZXQoeCwgeSwge3R5cGU6IHRpbGUudHlwZX0pXHJcbiAgICB9XHJcblxyXG4gICAgcmV0dXJuIGdyaWQ7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIGNyZWF0ZUJhY2tncm91bmRHcmlkKHRpbGVzLCBwYXR0ZXJucykge1xyXG4gICAgY29uc3QgZ3JpZCA9IG5ldyBNYXRyaXgoKTtcclxuXHJcbiAgICBmb3IgKGNvbnN0IHt0aWxlLCB4LCB5fSBvZiBleHBhbmRUaWxlcyh0aWxlcywgcGF0dGVybnMpKSB7XHJcbiAgICAgICAgZ3JpZC5zZXQoeCwgeSwge25hbWU6IHRpbGUubmFtZX0pXHJcbiAgICB9XHJcblxyXG4gICAgcmV0dXJuIGdyaWQ7XHJcbn1cclxuXHJcbi8vIEVTNiBHZW5lcmF0b3IgRnVuY3Rpb25cclxuZnVuY3Rpb24qIGV4cGFuZFNwYW4oeFN0YXJ0LCB4TGVuLCB5U3RhcnQsIHlMZW4pIHtcclxuICAgIC8vIGRlYnVnZ2VyXHJcbiAgICAvLyBjb25zdCBjb29yZHMgPSBbXTtcclxuICAgIGNvbnN0IHhFbmQgPSB4U3RhcnQgKyB4TGVuO1xyXG4gICAgY29uc3QgeUVuZCA9IHlTdGFydCArIHlMZW47XHJcbiAgICBmb3IgKGxldCB4ID0geFN0YXJ0OyB4IDwgeEVuZDsgeCsrKSB7XHJcbiAgICAgICAgZm9yIChsZXQgeSA9IHlTdGFydDsgeSA8IHlFbmQ7IHkrKykge1xyXG4gICAgICAgICAgICAvLyBjb29yZHMucHVzaCh7eCwgeX0pO1xyXG4gICAgICAgICAgICB5aWVsZCB7eCwgeX07XHJcbiAgICAgICAgICAgIC8vIGNyZWF0ZSBhIEl0ZXJhdG9yIE9iamVjdCBmb3IgdGhlIGZvbGxvd2luZyBmb3IuLi5vZlxyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICAvLyByZXR1cm4gY29vcmRzO1xyXG59XHJcblxyXG5mdW5jdGlvbiBleHBhbmRSYW5nZShyYW5nZSkge1xyXG4gICAgaWYgKHJhbmdlLmxlbmd0aCA9PT0gNCkge1xyXG4gICAgICAgIGNvbnN0IFt4U3RhcnQsIHhMZW4sIHlTdGFydCwgeUxlbl0gPSByYW5nZTtcclxuICAgICAgICByZXR1cm4gZXhwYW5kU3Bhbih4U3RhcnQsIHhMZW4sIHlTdGFydCwgeUxlbilcclxuICAgIH0gZWxzZSBpZiAocmFuZ2UubGVuZ3RoID09PSAzKSB7XHJcbiAgICAgICAgY29uc3QgW3hTdGFydCwgeExlbiwgeVN0YXJ0XSA9IHJhbmdlO1xyXG4gICAgICAgIHJldHVybiBleHBhbmRTcGFuKHhTdGFydCwgeExlbiwgeVN0YXJ0LCAxKVxyXG4gICAgfSBlbHNlIGlmIChyYW5nZS5sZW5ndGggPT09IDIpIHtcclxuICAgICAgICBjb25zdCBbeFN0YXJ0LCB5U3RhcnRdID0gcmFuZ2U7XHJcbiAgICAgICAgcmV0dXJuIGV4cGFuZFNwYW4oeFN0YXJ0LCAxLCB5U3RhcnQsIDEpXHJcbiAgICB9XHJcbn1cclxuXHJcbmZ1bmN0aW9uKiBleHBhbmRSYW5nZXMocmFuZ2VzKSB7XHJcbiAgICBmb3IgKGNvbnN0IHJhbmdlIG9mIHJhbmdlcykge1xyXG4gICAgICAgIHlpZWxkKiBleHBhbmRSYW5nZShyYW5nZSk7XHJcbiAgICB9XHJcbn1cclxuXHJcbmZ1bmN0aW9uKiBleHBhbmRUaWxlcyh0aWxlcywgcGF0dGVybnMpIHtcclxuICAgIC8vIGxldCBleHBhbmRlZFRpbGVzID0gW107XHJcblxyXG4gICAgZnVuY3Rpb24qIHdhbGtUaWxlcyh0aWxlcywgb2Zmc2V0WCwgb2Zmc2V0WSkge1xyXG4gICAgICAgIGZvciAoY29uc3QgdGlsZSBvZiB0aWxlcykge1xyXG4gICAgICAgICAgICBmb3IgKGNvbnN0IHt4LCB5fSBvZiBleHBhbmRSYW5nZXModGlsZS5yYW5nZXMpKSB7XHJcbiAgICAgICAgICAgICAgICAvKiBodHRwOi8vZXM2LnJ1YW55aWZlbmcuY29tLz9zZWFyY2g9eWllbGQmeD0wJnk9MCNkb2NzL2dlbmVyYXRvciNmb3ItLS1vZi0lRTUlQkUlQUElRTclOEUlQUZcclxuICAgICAgICAgICAgICAgICBVc2UgZm9yLi4ub2YgdG8gaXRlcmF0ZSB0aGUgSXRlcmF0b3IgT2JqZWN0IGdlbmVyYXRlZCBieSB0aGUgeWllbGQgb2YgR2VuZXJhdG9yIEZ1bmN0aW9uLiovXHJcbiAgICAgICAgICAgICAgICBjb25zdCBkZXJpdmVkWCA9IHggKyBvZmZzZXRYO1xyXG4gICAgICAgICAgICAgICAgY29uc3QgZGVyaXZlZFkgPSB5ICsgb2Zmc2V0WTtcclxuXHJcbiAgICAgICAgICAgICAgICAvLyBkZWJ1Z2dlclxyXG4gICAgICAgICAgICAgICAgaWYgKHRpbGUucGF0dGVybikge1xyXG4gICAgICAgICAgICAgICAgICAgIC8vIGNvbnNvbGUubG9nKHBhdHRlcm5zW3RpbGUucGF0dGVybl0pO1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IHRpbGVzID0gcGF0dGVybnNbdGlsZS5wYXR0ZXJuXS50aWxlcztcclxuICAgICAgICAgICAgICAgICAgICAvLyBjcmVhdGVUaWxlcyhsZXZlbCwgdGlsZXMsIHBhdHRlcm5zLCBkZXJpdmVkWCwgZGVyaXZlZFkpO1xyXG4gICAgICAgICAgICAgICAgICAgIC8qVE9ETzpGaWd1cmUgb3V0IHRoIHVzZWFnZSBvZiB5aWVsZCoqL1xyXG4gICAgICAgICAgICAgICAgICAgIHlpZWxkKiB3YWxrVGlsZXModGlsZXMsIGRlcml2ZWRYLCBkZXJpdmVkWSk7XHJcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgIHlpZWxkIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdGlsZSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgeDogZGVyaXZlZFgsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHk6IGRlcml2ZWRZXHJcbiAgICAgICAgICAgICAgICAgICAgfTtcclxuICAgICAgICAgICAgICAgICAgICAvLyBleHBhbmRlZFRpbGVzLnB1c2goe1xyXG4gICAgICAgICAgICAgICAgICAgIC8vICAgICB0aWxlLFxyXG4gICAgICAgICAgICAgICAgICAgIC8vICAgICB4OiBkZXJpdmVkWCxcclxuICAgICAgICAgICAgICAgICAgICAvLyAgICAgeTogZGVyaXZlZFlcclxuICAgICAgICAgICAgICAgICAgICAvLyB9KTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICB5aWVsZCogd2Fsa1RpbGVzKHRpbGVzLCAwLCAwKTtcclxuXHJcbiAgICAvLyByZXR1cm4gZXhwYW5kZWRUaWxlcztcclxufVxyXG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL3B1YmxpYy9qcy9sb2FkZXJzL2xldmVsLmpzXG4vLyBtb2R1bGUgaWQgPSAxNFxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJpbXBvcnQgQ29tcG9zaXRvciBmcm9tICcuL2NvbXBvc2l0b3IuanMnXHJcbmltcG9ydCBFbnRpdHlDb2xsaWRlciBmcm9tICcuL0VudGl0eUNvbGxpZGVyLmpzJ1xyXG5pbXBvcnQgVGlsZUNvbGxpZGVyIGZyb20gJy4vVGlsZUNvbGxpZGVyLmpzJ1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgTGV2ZWwge1xyXG4gICAgY29uc3RydWN0b3IoKSB7XHJcbiAgICAgICAgdGhpcy5ncmF2aXR5ID0gMTUwMDtcclxuICAgICAgICB0aGlzLmNvbXAgPSBuZXcgQ29tcG9zaXRvcigpO1xyXG4gICAgICAgIHRoaXMuZW50aXRpZXMgPSBuZXcgU2V0KCk7XHJcbiAgICAgICAgdGhpcy5lbnRpdHlDb2xsaWRlciA9IG5ldyBFbnRpdHlDb2xsaWRlcih0aGlzLmVudGl0aWVzKTtcclxuICAgICAgICB0aGlzLnRvdGFsVGltZSA9IDA7XHJcblxyXG4gICAgICAgIHRoaXMudGlsZUNvbGxpZGVyID0gbnVsbDtcclxuICAgIH1cclxuXHJcbiAgICBzZXRDb2xsaXNpb25HcmlkKG1hdHJpeCkge1xyXG4gICAgICAgIHRoaXMudGlsZUNvbGxpZGVyID0gbmV3IFRpbGVDb2xsaWRlcihtYXRyaXgpO1xyXG4gICAgfVxyXG5cclxuICAgIHVwZGF0ZShkZWx0YVRpbWUpIHtcclxuICAgICAgICB0aGlzLmVudGl0aWVzLmZvckVhY2goZW50aXR5ID0+IHtcclxuICAgICAgICAgICAgZW50aXR5LnVwZGF0ZShkZWx0YVRpbWUsIHRoaXMpO1xyXG4gICAgICAgIH0pO1xyXG5cclxuXHJcbiAgICAgICAgdGhpcy5lbnRpdGllcy5mb3JFYWNoKGVudGl0eSA9PiB7XHJcbiAgICAgICAgICAgIGVudGl0eS5maW5hbGl6ZSgpO1xyXG5cclxuICAgICAgICAgICAgdGhpcy5lbnRpdHlDb2xsaWRlci5jaGVjayhlbnRpdHkpO1xyXG4gICAgICAgIH0pO1xyXG5cclxuICAgICAgICB0aGlzLnRvdGFsVGltZSArPSBkZWx0YVRpbWU7XHJcbiAgICB9XHJcbn1cclxuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9wdWJsaWMvanMvTGV2ZWwuanNcbi8vIG1vZHVsZSBpZCA9IDE1XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsImV4cG9ydCBkZWZhdWx0IGNsYXNzIENvbXBvc2l0b3Ige1xyXG4gICAgY29uc3RydWN0b3IoKSB7XHJcbiAgICAgICAgdGhpcy5sYXllcnMgPSBbXTtcclxuICAgIH1cclxuXHJcbiAgICBkcmF3KGNvbnRleHQsIGNhbWVyYSkge1xyXG4gICAgICAgIHRoaXMubGF5ZXJzLmZvckVhY2gobGF5ZXIgPT4ge1xyXG4gICAgICAgICAgICBsYXllcihjb250ZXh0LCBjYW1lcmEpO1xyXG4gICAgICAgIH0pXHJcbiAgICB9XHJcbn1cclxuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9wdWJsaWMvanMvY29tcG9zaXRvci5qc1xuLy8gbW9kdWxlIGlkID0gMTZcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiXHJcblxyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBFbnRpdHlDb2xsaWRlciB7XHJcbiAgICBjb25zdHJ1Y3RvcihlbnRpdGllcykge1xyXG4gICAgICAgIHRoaXMuZW50aXRpZXMgPSBlbnRpdGllcztcclxuICAgIH1cclxuXHJcbiAgICBjaGVjayhzdWJqZWN0KSB7XHJcbiAgICAgICAgdGhpcy5lbnRpdGllcy5mb3JFYWNoKGNhbmRpZGF0ZSA9PiB7XHJcbiAgICAgICAgICAgIGlmIChzdWJqZWN0ID09PSBjYW5kaWRhdGUpIHtcclxuICAgICAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgaWYgKHN1YmplY3QuYm91bmRzLm92ZXJsYXBzKGNhbmRpZGF0ZS5ib3VuZHMpKSB7XHJcbiAgICAgICAgICAgICAgc3ViamVjdC5jb2xsaWRlcyhjYW5kaWRhdGUpO1xyXG4gICAgICAgICAgICAgIGNhbmRpZGF0ZS5jb2xsaWRlcyhzdWJqZWN0KTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0pXHJcbiAgICB9XHJcbn1cclxuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9wdWJsaWMvanMvRW50aXR5Q29sbGlkZXIuanNcbi8vIG1vZHVsZSBpZCA9IDE3XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsImltcG9ydCBUaWxlUmVzb2x2ZXIgZnJvbSAnLi9UaWxlUmVzb2x2ZXIuanMnXHJcbmltcG9ydCB7U2lkZXN9IGZyb20gJy4vRW50aXR5LmpzJ1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgVGlsZUNvbGxpZGVyIHtcclxuICAgIGNvbnN0cnVjdG9yKHRpbGVNYXRyaXgpIHtcclxuICAgICAgICB0aGlzLnRpbGUgPSBuZXcgVGlsZVJlc29sdmVyKHRpbGVNYXRyaXgpO1xyXG4gICAgfVxyXG5cclxuICAgIGNoZWNrWChlbnRpdHkpIHtcclxuICAgICAgICBsZXQgeDtcclxuICAgICAgICBpZiAoZW50aXR5LnZlbC54ID4gMCkge1xyXG4gICAgICAgICAgICAvLyBtYXJpbyBpcyBnb2luZyB0b3dhcmQgUklHSFRcclxuICAgICAgICAgICAgLy8gc28gd2UganVzdCBuZWVkIHRvIGNoZWNrIHRoZSBSSUdIVCBzaWRlIG9mIGVudGl0eVxyXG4gICAgICAgICAgICB4ID0gZW50aXR5LmJvdW5kcy5yaWdodDtcclxuICAgICAgICB9IGVsc2UgaWYgKGVudGl0eS52ZWwueCA8IDApIHtcclxuICAgICAgICAgICAgLy8gbWFyaW8gaXMgZ29pbmcgdG93YXJkIExFRlRcclxuICAgICAgICAgICAgLy8gZWxzZSB3ZSBvbmx5IG5lZWQgdG8gY2hlY2sgdGhlIExFRlQgc2lkZSBvZiBlbnRpdHlcclxuICAgICAgICAgICAgeCA9IGVudGl0eS5ib3VuZHMubGVmdDtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBjb25zdCBtYXRjaGVzID0gdGhpcy50aWxlLnNlYXJjaEJ5UmFuZ2UoXHJcbiAgICAgICAgICAgIHgsIHgsXHJcbiAgICAgICAgICAgZW50aXR5LmJvdW5kcy50b3AsIGVudGl0eS5ib3VuZHMuYm90dG9tXHJcbiAgICAgICAgKTtcclxuXHJcbiAgICAgICAgbWF0Y2hlcy5mb3JFYWNoKG1hdGNoID0+IHtcclxuICAgICAgICAgICAgaWYgKG1hdGNoLnRpbGUudHlwZSAhPT0gJ2dyb3VuZCcpIHtcclxuICAgICAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgaWYgKGVudGl0eS52ZWwueCA+IDApIHtcclxuICAgICAgICAgICAgICAgIGlmIChlbnRpdHkuYm91bmRzLnJpZ2h0ID4gbWF0Y2gueDEpIHtcclxuICAgICAgICAgICAgICAgICAgICBlbnRpdHkub2JzdHJ1Y3QoU2lkZXMuTEVGVCwgbWF0Y2gpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9IGVsc2UgaWYgKGVudGl0eS52ZWwueCA8IDApIHtcclxuICAgICAgICAgICAgICAgIGlmIChlbnRpdHkuYm91bmRzLmxlZnQgPCBtYXRjaC54Mikge1xyXG4gICAgICAgICAgICAgICAgICAgIGVudGl0eS5vYnN0cnVjdChTaWRlcy5SSUdIVCwgbWF0Y2gpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSlcclxuXHJcbiAgICB9XHJcblxyXG4gICAgY2hlY2tZKGVudGl0eSkge1xyXG4gICAgICAgIGxldCB5O1xyXG4gICAgICAgIGlmIChlbnRpdHkudmVsLnkgPiAwKSB7XHJcbiAgICAgICAgICAgIC8vIG1hcmlvIGlzIGdvaW5nIHRvd2FyZCBCXHJcbiAgICAgICAgICAgIHkgPSBlbnRpdHkuYm91bmRzLmJvdHRvbTtcclxuICAgICAgICB9IGVsc2UgaWYgKGVudGl0eS52ZWwueSA8IDApIHtcclxuICAgICAgICAgICAgLy8gbWFyaW8gaXMgZ29pbmcgdG93YXJkIFRPUFxyXG4gICAgICAgICAgICB5ID1lbnRpdHkuYm91bmRzLnRvcDtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBjb25zdCBtYXRjaGVzID0gdGhpcy50aWxlLnNlYXJjaEJ5UmFuZ2UoXHJcbiAgICAgICAgICAgIGVudGl0eS5ib3VuZHMubGVmdCwgZW50aXR5LmJvdW5kcy5yaWdodCxcclxuICAgICAgICAgICAgeSwgeVxyXG4gICAgICAgICk7XHJcblxyXG4gICAgICAgIG1hdGNoZXMuZm9yRWFjaChtYXRjaCA9PiB7XHJcbiAgICAgICAgICAgIGlmIChtYXRjaC50aWxlLnR5cGUgIT09ICdncm91bmQnKSB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIGlmIChlbnRpdHkudmVsLnkgPiAwKSB7XHJcbiAgICAgICAgICAgICAgICBpZiAoZW50aXR5LmJvdW5kcy5ib3R0b20gPiBtYXRjaC55MSkge1xyXG4gICAgICAgICAgICAgICAgICAgIGVudGl0eS5vYnN0cnVjdChTaWRlcy5CT1RUT00sIG1hdGNoKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfSBlbHNlIGlmIChlbnRpdHkudmVsLnkgPCAwKSB7XHJcbiAgICAgICAgICAgICAgICBpZiAoZW50aXR5LnBvcy55IDwgbWF0Y2gueTIpIHtcclxuICAgICAgICAgICAgICAgICAgICBlbnRpdHkub2JzdHJ1Y3QoU2lkZXMuVE9QLCBtYXRjaCk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9KVxyXG5cclxuICAgIH1cclxuXHJcbn1cclxuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9wdWJsaWMvanMvVGlsZUNvbGxpZGVyLmpzXG4vLyBtb2R1bGUgaWQgPSAxOFxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJleHBvcnQgZnVuY3Rpb24gY3JlYXRlQW5pbShmcmFtZXMsIGZyYW1lTGVuKSB7XHJcbiAgICByZXR1cm4gZnVuY3Rpb24gcmVzb2x2ZUZyYW1lKGRpc3RhbmNlKSB7XHJcbiAgICAgICAgY29uc3QgZnJhbWVJbmRleCA9IE1hdGguZmxvb3IoZGlzdGFuY2UgLyBmcmFtZUxlbikgJSBmcmFtZXMubGVuZ3RoO1xyXG5cclxuICAgICAgICByZXR1cm4gZnJhbWVzW2ZyYW1lSW5kZXhdO1xyXG4gICAgfVxyXG59XHJcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vcHVibGljL2pzL2FuaW0uanNcbi8vIG1vZHVsZSBpZCA9IDE5XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsImV4cG9ydCBmdW5jdGlvbiBjcmVhdGVTcHJpdGVMYXllcihlbnRpdGllcywgd2lkdGggPSA2NCwgaGVpZ2h0ID0gNjQpIHtcclxuICAgIGNvbnN0IHNwcml0ZUJ1ZmZlciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2NhbnZhcycpXHJcbiAgICBzcHJpdGVCdWZmZXIud2lkdGggPSB3aWR0aDtcclxuICAgIHNwcml0ZUJ1ZmZlci5oZWlnaHQgPSBoZWlnaHQ7XHJcblxyXG4gICAgY29uc3Qgc3ByaXRlQ29udGV4dCA9IHNwcml0ZUJ1ZmZlci5nZXRDb250ZXh0KCcyZCcpO1xyXG4gICAgcmV0dXJuIGZ1bmN0aW9uIGRyYXdTcHJpdGVMYXllcihjb250ZXh0LCBjYW1lcmEpIHtcclxuICAgICAgICBlbnRpdGllcy5mb3JFYWNoKGVudGl0eSA9PiB7XHJcbiAgICAgICAgICAgIHNwcml0ZUNvbnRleHQuY2xlYXJSZWN0KDAsIDAsIHdpZHRoLCBoZWlnaHQpOyAgIC8vIHNldCBiYWNrZ3JvdW5kIHRvIHRyYW5zcGFyZW50LlxyXG4gICAgICAgICAgICBlbnRpdHkuZHJhdyhzcHJpdGVDb250ZXh0KTtcclxuXHJcbiAgICAgICAgICAgIGNvbnRleHQuZHJhd0ltYWdlKFxyXG4gICAgICAgICAgICAgICAgc3ByaXRlQnVmZmVyLFxyXG4gICAgICAgICAgICAgICAgZW50aXR5LnBvcy54IC0gY2FtZXJhLnBvcy54LFxyXG4gICAgICAgICAgICAgICAgZW50aXR5LnBvcy55IC0gY2FtZXJhLnBvcy55XHJcbiAgICAgICAgICAgIClcclxuICAgICAgICB9KVxyXG4gICAgfVxyXG59XHJcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vcHVibGljL2pzL2xheWVycy9zcHJpdGVzLmpzXG4vLyBtb2R1bGUgaWQgPSAyMFxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJpbXBvcnQgVGlsZVJlc29sdmVyIGZyb20gJy4uL1RpbGVSZXNvbHZlci5qcydcclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBjcmVhdGVCYWNrZ3JvdW5kTGF5ZXIobGV2ZWwsIHRpbGVzLCBzcHJpdGVzKSB7XHJcbiAgICBjb25zdCByZXNvbHZlciA9IG5ldyBUaWxlUmVzb2x2ZXIodGlsZXMpO1xyXG5cclxuICAgIGNvbnN0IGJ1ZmZlciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2NhbnZhcycpO1xyXG4gICAgYnVmZmVyLndpZHRoID0gMjU2ICsgMTY7ICAgIC8vIDE2ICsgMSBjb2x1bW5cclxuICAgIGJ1ZmZlci5oZWlnaHQgPSAyNDA7XHJcblxyXG4gICAgY29uc3QgY29udGV4dCA9IGJ1ZmZlci5nZXRDb250ZXh0KCcyZCcpO1xyXG5cclxuICAgIGZ1bmN0aW9uIHJlZHJhdyhzdGFydEluZGV4LCBlbmRJbmRleCkge1xyXG5cclxuICAgICAgICBjb250ZXh0LmNsZWFyUmVjdCgwLDAsYnVmZmVyLndpZHRoLGJ1ZmZlci5oZWlnaHQpO1xyXG5cclxuICAgICAgICBmb3IgKGxldCB4ID0gc3RhcnRJbmRleDsgeCA8PSBlbmRJbmRleDsgeCsrKSB7XHJcbiAgICAgICAgICAgIGNvbnN0IGNvbCA9IHRpbGVzLmdyaWRbeF07XHJcbiAgICAgICAgICAgIGlmIChjb2wpIHtcclxuICAgICAgICAgICAgICAgIC8vIGNvbnNvbGUubG9nKHggLSBzdGFydEluZGV4KTtcclxuICAgICAgICAgICAgICAgIC8qVE9ETyBDYW5ub3QgZmlndXJlIG91dCB0aGUgbWVhbiBvZiB4IC0gc3RhcnRJbmRleCBhbmQgLWNhbWVyYS5wb3MueCAlIDE2IE9QVElNSVpBVElPTiBpbiBFUCA2Ki9cclxuICAgICAgICAgICAgICAgIGNvbC5mb3JFYWNoKCh0aWxlLCB5KSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKHNwcml0ZXMuYW5pbWF0aW9ucy5oYXModGlsZS5uYW1lKSkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBzcHJpdGVzLmRyYXdBbmltKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGlsZS5uYW1lLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY29udGV4dCxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHggLSBzdGFydEluZGV4LFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgeSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxldmVsLnRvdGFsVGltZSk7XHJcbiAgICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgc3ByaXRlcy5kcmF3VGlsZShcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRpbGUubmFtZSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnRleHQsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB4IC0gc3RhcnRJbmRleCxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHkpO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgcmV0dXJuIGZ1bmN0aW9uIGRyYXdCYWNrZ3JvdW5kTGF5ZXIoY29udGV4dCwgY2FtZXJhKSB7XHJcbiAgICAgICAgY29uc3QgZHJhd1dpZHRoID0gcmVzb2x2ZXIudG9JbmRleChjYW1lcmEuc2l6ZS54KSxcclxuICAgICAgICAgICAgZHJhd0Zyb20gPSByZXNvbHZlci50b0luZGV4KGNhbWVyYS5wb3MueCk7XHJcbiAgICAgICAgY29uc3QgZHJhd0VuZCA9IGRyYXdGcm9tICsgZHJhd1dpZHRoO1xyXG5cclxuICAgICAgICByZWRyYXcoZHJhd0Zyb20sIGRyYXdFbmQpO1xyXG5cclxuICAgICAgICBjb250ZXh0LmRyYXdJbWFnZShcclxuICAgICAgICAgICAgYnVmZmVyLFxyXG4gICAgICAgICAgICAtY2FtZXJhLnBvcy54ICUgMTYsXHJcbiAgICAgICAgICAgIC1jYW1lcmEucG9zLnkpO1xyXG4gICAgfVxyXG5cclxuICAgIC8vIC8vIEhpZ2gtT3JkZXIgRnVuY3Rpb25cclxuICAgIC8vIHJldHVybiBmdW5jdGlvbiBkcmF3QmFja2dyb3VuZExheWVyKGNvbnRleHQsIGNhbWVyYSkge1xyXG4gICAgLy8gICAgIGNvbnRleHQuZHJhd0ltYWdlKGJ1ZmZlciwgLWNhbWVyYS5wb3MueCwgLWNhbWVyYS5wb3MueSk7XHJcbiAgICAvLyB9XHJcbn1cclxuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9wdWJsaWMvanMvbGF5ZXJzL2JhY2tncm91bmQuanNcbi8vIG1vZHVsZSBpZCA9IDIxXG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsImltcG9ydCB7bG9hZEltYWdlfSBmcm9tICcuLi9sb2FkZXIuanMnO1xyXG5pbXBvcnQgU3ByaXRlU2hlZXQgZnJvbSAnLi4vU3ByaXRlU2hlZXQuanMnO1xyXG5cclxuY29uc3QgQ0hBUlMgPSAnICFcIiMkJSZcXCcoKSorLC0uLzAxMjM0NTY3ODk6Ozw9Pj9AQUJDREVGR0hJSktMTU5PUFFSU1RVVldYWVpbXFxcXF1eX2BhYmNkZWZnaGlqa2xtbm9wcXJzdHV2d3h5ent8fX4nO1xyXG5cclxuXHJcbmNsYXNzIEZvbnQge1xyXG4gICAgY29uc3RydWN0b3Ioc3ByaXRlU2hlZXQsIHNpemUpIHtcclxuICAgICAgICB0aGlzLnNwcml0ZXMgPSBzcHJpdGVTaGVldDtcclxuICAgICAgICB0aGlzLnNpemUgPSBzaXplO1xyXG4gICAgfVxyXG5cclxuICAgIHByaW50KHRleHQsIGNvbnRleHQsIHgsIHkpIHtcclxuICAgICAgICBbLi4udGV4dF0uZm9yRWFjaCgoY2hhciwgcG9zKSA9PiB7XHJcbiAgICAgICAgICAgIHRoaXMuc3ByaXRlcy5kcmF3KGNoYXIsIGNvbnRleHQsIHggKyBwb3MgKiB0aGlzLnNpemUsIHkpO1xyXG4gICAgICAgIH0pXHJcbiAgICB9XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBsb2FkRm9udCgpIHtcclxuICAgIHJldHVybiBsb2FkSW1hZ2UoJy4vaW1nL2ZvbnQucG5nJylcclxuICAgICAgICAudGhlbihpbWcgPT4ge1xyXG4gICAgICAgICAgICBjb25zdCBmb250U3ByaXRlID0gbmV3IFNwcml0ZVNoZWV0KGltZyk7XHJcblxyXG4gICAgICAgICAgICBjb25zdCBzaXplID0gOCwgcm93TGVuID0gaW1nLndpZHRoO1xyXG4gICAgICAgICAgICBjb25zdCBjb2xOdW0gPSBpbWcud2lkdGggLyBzaXplO1xyXG4gICAgICAgICAgICBmb3IgKGxldCBbaW5kZXgsIGNoYXJdIG9mIFsuLi5DSEFSU10uZW50cmllcygpKSB7XHJcblxyXG4gICAgICAgICAgICAgICAgY29uc3QgeCAgPSAoaW5kZXggKiBzaXplKSAlIHJvd0xlbjtcclxuICAgICAgICAgICAgICAgIGNvbnN0IHkgPSBNYXRoLmZsb29yKGluZGV4IC8gY29sTnVtKSpzaXplO1xyXG5cclxuICAgICAgICAgICAgICAgIGZvbnRTcHJpdGUuZGVmaW5lKGNoYXIsIHgsIHksIHNpemUsIHNpemUpO1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICByZXR1cm4gbmV3IEZvbnQoZm9udFNwcml0ZSwgc2l6ZSk7XHJcbiAgICAgICAgfSlcclxufVxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vcHVibGljL2pzL2xvYWRlcnMvZm9udC5qc1xuLy8gbW9kdWxlIGlkID0gMjJcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiaW1wb3J0IHtsb2FkTWFyaW99IGZyb20gJy4vZW50aXRpZXMvTWFyaW8uanMnXHJcbmltcG9ydCB7bG9hZEdvb21iYX0gZnJvbSAnLi9lbnRpdGllcy9Hb29tYmEuanMnXHJcbmltcG9ydCB7bG9hZEtvb3BhfSBmcm9tICcuL2VudGl0aWVzL0tvb3BhLmpzJ1xyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIGxvYWRFbnRpdGllcygpIHtcclxuICAgIGNvbnN0IGVudGl0aWVzRmFjdG9yeSA9IHt9O1xyXG5cclxuICAgIGZ1bmN0aW9uIGFkZEFzKG5hbWUpIHtcclxuICAgICAgICByZXR1cm4gZmFjdG9yeSA9PiB7ZW50aXRpZXNGYWN0b3J5W25hbWVdID0gZmFjdG9yeX1cclxuICAgIH1cclxuXHJcbiAgICByZXR1cm4gUHJvbWlzZS5hbGwoW1xyXG4gICAgICAgIGxvYWRNYXJpbygpLnRoZW4oYWRkQXMoJ21hcmlvJykpLFxyXG4gICAgICAgIGxvYWRHb29tYmEoKS50aGVuKGFkZEFzKCdnb29tYmEnKSksXHJcbiAgICAgICAgbG9hZEtvb3BhKCkudGhlbihhZGRBcygna29vcGEnKSksXHJcbiAgICBdKVxyXG4gICAgICAgIC50aGVuKCgpID0+IGVudGl0aWVzRmFjdG9yeSlcclxufVxyXG5cclxuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9wdWJsaWMvanMvZW50aXRpZXMuanNcbi8vIG1vZHVsZSBpZCA9IDIzXG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsImltcG9ydCBFbnRpdHkgZnJvbSAnLi4vRW50aXR5LmpzJ1xyXG4vLyBpbXBvcnQgVmVsb2NpdHkgZnJvbSAnLi4vdHJhaXRzL1ZlbG9jaXR5LmpzJ1xyXG5pbXBvcnQgR28gZnJvbSAnLi4vdHJhaXRzL0dvLmpzJ1xyXG5pbXBvcnQgSnVtcCBmcm9tICcuLi90cmFpdHMvSnVtcC5qcydcclxuaW1wb3J0IFN0b21lciBmcm9tICcuLi90cmFpdHMvU3RvbWVyLmpzJ1xyXG5pbXBvcnQgS2lsbGFibGUgZnJvbSAnLi4vdHJhaXRzL0tpbGxhYmxlLmpzJ1xyXG5pbXBvcnQgU29saWQgZnJvbSAnLi4vdHJhaXRzL1NvbGlkLmpzJ1xyXG5pbXBvcnQgUGh5c2ljcyBmcm9tICcuLi90cmFpdHMvUGh5c2ljcy5qcydcclxuLy8gaW1wb3J0IFBsYXllckNvbnRyb2xsZXIgZnJvbSAnLi4vdHJhaXRzL1BsYXllckNvbnRyb2xsZXIuanMnXHJcbmltcG9ydCB7bG9hZFNwcml0ZVNoZWV0fSBmcm9tICcuLi9sb2FkZXIuanMnO1xyXG5cclxuLypOYW1lIENvbnZlbnRpb246XHJcbiogMS4gbG9hZFNvbWV0aGluZyBpcyBzeW5jaHJvbm91cywgY3JlYXRlU29tZXRoaW5nIGlzIGFzeW5jaHJvbm91cy4qL1xyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIGxvYWRNYXJpbygpIHtcclxuICAgIHJldHVybiBsb2FkU3ByaXRlU2hlZXQoJ21hcmlvJylcclxuICAgICAgICAudGhlbihjcmVhdGVNYXJpb0ZhY3RvcnkpXHJcbn1cclxuXHJcbmZ1bmN0aW9uIGNyZWF0ZU1hcmlvRmFjdG9yeShzcHJpdGUpIHtcclxuICAgIGNvbnN0IHJ1bkFuaW0gPSBzcHJpdGUuYW5pbWF0aW9ucy5nZXQoXCJydW5cIik7XHJcblxyXG4gICAgICAgIGZ1bmN0aW9uIGZyYW1lUm91dGUobWFyaW8pIHtcclxuICAgICAgICBpZiAobWFyaW8uanVtcC5mYWxsaW5nKSB7XHJcbiAgICAgICAgICAgIHJldHVybiAnanVtcCc7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBpZiAobWFyaW8uZ28uZGlzdGFuY2UgPiAwKSB7XHJcbiAgICAgICAgICAgIGlmICgobWFyaW8udmVsLnggPiAwICYmIG1hcmlvLmdvLmRpciA8IDApIHx8XHJcbiAgICAgICAgICAgICAgICAobWFyaW8udmVsLnggPCAwICYmIG1hcmlvLmdvLmRpciA+IDApKSB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gJ2JyZWFrJztcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgcmV0dXJuIHJ1bkFuaW0obWFyaW8uZ28uZGlzdGFuY2UpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgcmV0dXJuICdpZGxlJztcclxuICAgIH1cclxuXHJcbiAgICBmdW5jdGlvbiBkcmF3TWFyaW8oY29udGV4dCkge1xyXG4gICAgICAgIHNwcml0ZS5kcmF3KGZyYW1lUm91dGUodGhpcyksIGNvbnRleHQsIDAsIDAsIHRoaXMuZ28uaGVhZGluZyA8IDApO1xyXG4gICAgfVxyXG5cclxuICAgIHJldHVybiBmdW5jdGlvbiBjcmVhdGVNYXJpbygpIHtcclxuICAgICAgICBjb25zdCBtYXJpbyA9IG5ldyBFbnRpdHkoKTtcclxuICAgICAgICBtYXJpby5zaXplLnNldCgxNCwgMTYpO1xyXG5cclxuICAgICAgICBtYXJpby5hZGRUcmFpdChuZXcgUGh5c2ljcygpKTtcclxuICAgICAgICBtYXJpby5hZGRUcmFpdChuZXcgU29saWQoKSk7XHJcbiAgICAgICAgbWFyaW8uYWRkVHJhaXQobmV3IEdvKCkpO1xyXG4gICAgICAgIG1hcmlvLmFkZFRyYWl0KG5ldyBKdW1wKCkpO1xyXG4gICAgICAgIG1hcmlvLmFkZFRyYWl0KG5ldyBTdG9tZXIoKSk7XHJcbiAgICAgICAgbWFyaW8uYWRkVHJhaXQobmV3IEtpbGxhYmxlKCkpO1xyXG4gICAgICAgIC8vIG1hcmlvLmFkZFRyYWl0KG5ldyBQbGF5ZXJDb250cm9sbGVyKCkpO1xyXG5cclxuICAgICAgICBtYXJpby5raWxsYWJsZS5yZW1vdmVBZnRlciA9IDA7XHJcbiAgICAgICAgLy8gbWFyaW8ucGxheWVyQ29udHJvbGxlci5zZXRQbGF5ZXIobWFyaW8pO1xyXG5cclxuICAgICAgICBtYXJpby5kcmF3ID0gZHJhd01hcmlvO1xyXG5cclxuICAgICAgICByZXR1cm4gbWFyaW87XHJcbiAgICB9XHJcbn1cclxuXHJcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vcHVibGljL2pzL2VudGl0aWVzL01hcmlvLmpzXG4vLyBtb2R1bGUgaWQgPSAyNFxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJpbXBvcnQge1RyYWl0fSBmcm9tICcuLi9FbnRpdHkuanMnXHJcblxyXG4vKmV4dGVuZHMga2V5d29yZCBjYW4gYmUgdXNlZCB0byBpbmhlcml0IGFsbCB0aGUgcHJvcGVydGllcyBhbmQgbWV0aG9kcy4gKi9cclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgR28gZXh0ZW5kcyBUcmFpdCB7XHJcbiAgICBjb25zdHJ1Y3RvcigpIHtcclxuICAgICAgICAvKnN1cGVyIGtleXdvcmQgaW4gaGVyZSBtZWFucyB0aGUgZmF0aGVyIGNsYXNzJ3MgY29uc3RydWN0b3Igb2YgdGhpcyBjbGFzcy4gKi9cclxuICAgICAgICBzdXBlcignZ28nKTtcclxuXHJcbiAgICAgICAgdGhpcy5kaXIgPSAwO1xyXG4gICAgICAgIHRoaXMuYWNjZWxlcmF0aW9uID0gNDAwO1xyXG4gICAgICAgIHRoaXMuZGVjZWxlcmF0aW9uID0gMzAwO1xyXG4gICAgICAgIHRoaXMuZHJhZ0ZhY3RvciA9IDEvNTAwMDtcclxuXHJcbiAgICAgICAgdGhpcy5kaXN0YW5jZSA9IDA7XHJcbiAgICAgICAgdGhpcy5oZWFkaW5nID0gMTtcclxuICAgIH1cclxuXHJcbiAgICB1cGRhdGUoZW50aXR5LCBkZWx0YVRpbWUpIHtcclxuICAgICAgICBjb25zdCBhYnNYID0gTWF0aC5hYnMoZW50aXR5LnZlbC54KTtcclxuXHJcbiAgICAgICAgaWYgKHRoaXMuZGlyICE9PSAwKSB7XHJcbiAgICAgICAgICAgIGVudGl0eS52ZWwueCArPSB0aGlzLmFjY2VsZXJhdGlvbiAqIGRlbHRhVGltZSAqIHRoaXMuZGlyO1xyXG4gICAgICAgICAgICBpZiAoZW50aXR5Lmp1bXApIHtcclxuICAgICAgICAgICAgICAgIGlmICghZW50aXR5Lmp1bXAuZmFsbGluZykge1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuaGVhZGluZyA9IHRoaXMuZGlyO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5oZWFkaW5nID0gdGhpcy5kaXI7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9IGVsc2UgaWYgKGVudGl0eS52ZWwueCAhPT0gMCkge1xyXG4gICAgICAgICAgICBjb25zdCBkZWNlbCA9IE1hdGgubWluKGFic1gsIHRoaXMuZGVjZWxlcmF0aW9uICogZGVsdGFUaW1lKTtcclxuICAgICAgICAgICAgZW50aXR5LnZlbC54ICs9IGVudGl0eS52ZWwueCA+IDAgPyAtZGVjZWwgOiBkZWNlbDtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICB0aGlzLmRpc3RhbmNlID0gMDtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGNvbnN0IGRyYWcgPSB0aGlzLmRyYWdGYWN0b3IgKiBlbnRpdHkudmVsLnggKiBhYnNYO1xyXG4gICAgICAgIGVudGl0eS52ZWwueCAtPSBkcmFnO1xyXG5cclxuICAgICAgICB0aGlzLmRpc3RhbmNlICs9IGFic1ggKiBkZWx0YVRpbWU7XHJcbiAgICB9XHJcbn1cclxuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9wdWJsaWMvanMvdHJhaXRzL0dvLmpzXG4vLyBtb2R1bGUgaWQgPSAyNVxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJpbXBvcnQge1NpZGVzLCBUcmFpdH0gZnJvbSAnLi4vRW50aXR5LmpzJ1xyXG5cclxuLypleHRlbmRzIGtleXdvcmQgY2FuIGJlIHVzZWQgdG8gaW5oZXJpdCBhbGwgdGhlIHByb3BlcnRpZXMgYW5kIG1ldGhvZHMuICovXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEp1bXAgZXh0ZW5kcyBUcmFpdCB7XHJcbiAgICBjb25zdHJ1Y3RvcigpIHtcclxuICAgICAgICAvKnN1cGVyIGtleXdvcmQgaW4gaGVyZSBtZWFucyB0aGUgZmF0aGVyIGNsYXNzJ3MgY29uc3RydWN0b3Igb2YgdGhpcyBjbGFzcy4gKi9cclxuICAgICAgICBzdXBlcignanVtcCcpO1xyXG5cclxuICAgICAgICB0aGlzLmR1cmF0aW9uID0gMC4zO1xyXG4gICAgICAgIHRoaXMudmVsb2NpdHkgPSAyMDA7XHJcbiAgICAgICAgdGhpcy5lbmdhZ2VUaW1lID0gMDsgLy8gdG90YWwgdGltZSBhbGxvdyB0byAgcHJlc3Npbmcga2V5XHJcbiAgICAgICAgdGhpcy5yZWFkeSA9IDA7XHJcbiAgICAgICAgdGhpcy5ncmFjZVBlcmlvZCA9IDAuMTtcclxuICAgICAgICB0aGlzLnJlcXVlc3RUaW1lID0gMDtcclxuICAgICAgICB0aGlzLnNwZWVkQm9vc3QgPSAwLjM7XHJcbiAgICB9XHJcblxyXG4gICAgZ2V0IGZhbGxpbmcoKSB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMucmVhZHkgPCAwO1xyXG4gICAgfVxyXG5cclxuICAgIHN0YXJ0KCkge1xyXG4gICAgICAgIC8vIGlmICh0aGlzLnJlYWR5ID4gMCkge1xyXG4gICAgICAgIC8vICAgICB0aGlzLmVuZ2FnZVRpbWUgPSB0aGlzLmR1cmF0aW9uO1xyXG4gICAgICAgIC8vIH1cclxuICAgICAgICB0aGlzLnJlcXVlc3RUaW1lID0gdGhpcy5ncmFjZVBlcmlvZDtcclxuICAgIH1cclxuXHJcbiAgICBjYW5jZWwoKSB7XHJcbiAgICAgICAgdGhpcy5lbmdhZ2VUaW1lID0gMDtcclxuICAgICAgICB0aGlzLnJlcXVlc3RUaW1lID0gMDtcclxuICAgIH1cclxuXHJcbiAgICBvYnN0cnVjdChlbnRpdHksIHNpZGUpIHtcclxuICAgICAgICBpZiAoc2lkZSA9PT0gU2lkZXMuQk9UVE9NKSB7XHJcbiAgICAgICAgICAgIHRoaXMucmVhZHkgPSAxO1xyXG4gICAgICAgIH0gZWxzZSBpZiAoc2lkZSA9PT0gU2lkZXMuVE9QKSB7XHJcbiAgICAgICAgICAgIHRoaXMuY2FuY2VsKCk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIHVwZGF0ZShlbnRpdHksIGRlbHRhVGltZSkge1xyXG4gICAgICAgIGlmICh0aGlzLnJlcXVlc3RUaW1lID4gMCkge1xyXG4gICAgICAgICAgICBpZiAodGhpcy5yZWFkeSA+IDApIHtcclxuICAgICAgICAgICAgICAgIHRoaXMuZW5nYWdlVGltZSA9IHRoaXMuZHVyYXRpb247XHJcbiAgICAgICAgICAgICAgICB0aGlzLnJlcXVlc3RUaW1lID0gMDtcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgdGhpcy5yZXF1ZXN0VGltZSAtPSBkZWx0YVRpbWU7XHJcbiAgICAgICAgfVxyXG5cclxuXHJcbiAgICAgICAgaWYgKHRoaXMuZW5nYWdlVGltZSA+IDApIHtcclxuICAgICAgICAgICAgZW50aXR5LnZlbC55ID0gLSh0aGlzLnZlbG9jaXR5ICsgTWF0aC5hYnMoZW50aXR5LnZlbC54KSAqIHRoaXMuc3BlZWRCb29zdCk7XHJcbiAgICAgICAgICAgIC8qSWYga2VlcCBwcmVzc2luZyB0aGUga2V5LCB0aGUgZW5nYWdlVGltZSAodG90YWwgdGltZSBhbGxvdyB0byAgcHJlc3Npbmcga2V5ICkgd2lsbCBkZWNyZWFzZSBpbiBhIHJvdyB1bnRpbCBsZXNzIHRoYW4gMCwgd2hpY2ggbWVhbnMgdGhlIHRvdGFsIHRpbWUgb2YgcHJlc3NpbmcgYSBrZXkgaXMgYmlnZ2VyIHRoYW4gdGhlIGFsbG93IGR1cmF0aW9uKCB0aGlzLiBkdXJhdGlvbiA9IDAuNSAoc2Vjb25kKSksIHNvIHRoZSBlbnRpdHkudmVsLnkgc2hvdWxkIG5vdCBkZWNyZWFzZSBhbnltb3JlLCBpbiBvdGhlciB3b3JkcywgdGhlIG1hcmlvIHNob3VsZCBub3QgdHJhdmVsIHVwIGFueW1vcmUuKi9cclxuICAgICAgICAgICAgdGhpcy5lbmdhZ2VUaW1lIC09IGRlbHRhVGltZTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIC8vIGNvbnNvbGUubG9nKCdJZiB3ZSBhcmUgcmVhZHkgdG8ganVtcD8nLCB0aGlzLnJlYWR5KVxyXG4gICAgICAgIHRoaXMucmVhZHkgLS07XHJcbiAgICB9XHJcbn1cclxuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9wdWJsaWMvanMvdHJhaXRzL0p1bXAuanNcbi8vIG1vZHVsZSBpZCA9IDI2XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsImltcG9ydCB7VHJhaXR9IGZyb20gJy4uL0VudGl0eS5qcydcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFN0b21lciBleHRlbmRzIFRyYWl0IHtcclxuICAgIGNvbnN0cnVjdG9yKCkge1xyXG4gICAgICAgIHN1cGVyKCdzdG9tZXInKTtcclxuICAgICAgICB0aGlzLmJvdW5jZVNwZWVkID0gNDAwO1xyXG5cclxuICAgICAgICB0aGlzLm9uU3RvbXAgPSBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIGJvdW5jZSh1cywgdGhlbSkge1xyXG4gICAgICAgIHVzLmJvdW5kcy5ib3R0b20gPSB0aGVtLmJvdW5kcy50b3A7XHJcbiAgICAgICAgdXMudmVsLnkgPSAtdGhpcy5ib3VuY2VTcGVlZDtcclxuICAgIH1cclxuXHJcbiAgICBjb2xsaWRlcyh1cywgdGhlbSkge1xyXG4gICAgICAgIC8q5q2k5aSE5piv5ZCm5Y+N5by56Lez6LeD77yIYm91bmNl77yJ55qE5Yik5pat5Lil6YeN5L6d6LWW5LqL5Lu277yIa2lsbO+8jGNvbGxpZGXnrYnvvInnmoTop6blj5Hpobrluo/jgIJcclxuICAgICAgICAqIOaIkeS7rOWPr+S7pemAieaLqemAmui/h+S4gOS6m+e7huW+rueahOaUueWKqC0tLeadpeiwg+aVtOmhuuW6j++8jOS9huaYr++8gei/h+S6juS+nei1lui/meenjee7huW+rueahOaUueWKqOS4jeWIqeS7peWQjue7remhueebrueahOaJqeWxleOAglxyXG4gICAgICAgICog5omA5Lul5oiR5Lus6ZyA6KaB5pu05YGl5aOu55qE6Kej5Yaz5pa55qGI44CCKi9cclxuICAgICAgICBpZiAoIXRoZW0ua2lsbGFibGUgfHwgdGhlbS5raWxsYWJsZS5kZWFkKSB7XHJcbiAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGlmICggdXMudmVsLnkgPiB0aGVtLnZlbC55KSB7XHJcbiAgICAgICAgICAgIHRoaXMuYm91bmNlKHVzLCB0aGVtKTtcclxuICAgICAgICAgICAgdGhpcy5vblN0b21wKHVzLCB0aGVtKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbn1cclxuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9wdWJsaWMvanMvdHJhaXRzL1N0b21lci5qc1xuLy8gbW9kdWxlIGlkID0gMjdcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiaW1wb3J0IEVudGl0eSwge1NpZGVzLCBUcmFpdH0gZnJvbSAnLi4vRW50aXR5LmpzJ1xyXG5pbXBvcnQge2xvYWRTcHJpdGVTaGVldH0gZnJvbSAnLi4vbG9hZGVyLmpzJztcclxuaW1wb3J0IFBlbmR1bHVtV2FsayBmcm9tICcuLi90cmFpdHMvUGVuZHVsdW1Nb3ZlLmpzJztcclxuaW1wb3J0IEtpbGxhYmxlIGZyb20gJy4uL3RyYWl0cy9LaWxsYWJsZS5qcyc7XHJcbmltcG9ydCBTb2xpZCBmcm9tICcuLi90cmFpdHMvU29saWQuanMnXHJcbmltcG9ydCBQaHlzaWNzIGZyb20gJy4uL3RyYWl0cy9QaHlzaWNzLmpzJ1xyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIGxvYWRHb29tYmEoKSB7XHJcbiAgICByZXR1cm4gbG9hZFNwcml0ZVNoZWV0KCdnb29tYmEnKVxyXG4gICAgICAgIC50aGVuKGNyZWF0ZUdvb21iYUZhY3RvcnkpXHJcbn1cclxuXHJcbmNsYXNzIEJlaGF2aW9yIGV4dGVuZHMgVHJhaXQge1xyXG4gICAgY29uc3RydWN0b3IoKSB7XHJcbiAgICAgICAgc3VwZXIoJ2JlaGF2aW9yJyk7XHJcbiAgICB9XHJcblxyXG4gICAgY29sbGlkZXModXMsIHRoZW0pIHtcclxuICAgICAgICAvLyB1cyBpcyBvdXIgZ29vbWJhLCB0aGVtIG9mdGVuIGFyZSBtYXJpby5cclxuICAgICAgICBpZiAodXMua2lsbGFibGUuZGVhZCkge1xyXG4gICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBpZiAodGhlbS5zdG9tZXIpIHtcclxuICAgICAgICAgICAgaWYgKHRoZW0udmVsLnkgPiB1cy52ZWwueSkge1xyXG4gICAgICAgICAgICAgICAgdXMua2lsbGFibGUua2lsbCgpO1xyXG4gICAgICAgICAgICAgICAgdXMucGVuZHVsdW1Nb3ZlLnNwZWVkID0gMDtcclxuICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgIHRoZW0ua2lsbGFibGUua2lsbCgpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59XHJcblxyXG5mdW5jdGlvbiBjcmVhdGVHb29tYmFGYWN0b3J5KHNwcml0ZSkge1xyXG4gICAgY29uc3Qgd2Fsa0FuaW0gPSBzcHJpdGUuYW5pbWF0aW9ucy5nZXQoJ3dhbGsnKTtcclxuXHJcbiAgICBmdW5jdGlvbiByb3V0ZUFuaW0oZ29vbWJhKSB7XHJcbiAgICAgICAgaWYgKGdvb21iYS5raWxsYWJsZS5kZWFkKSB7XHJcbiAgICAgICAgICAgIHJldHVybiAnZmxhdCc7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICByZXR1cm4gd2Fsa0FuaW0oZ29vbWJhLmxpZmVUaW1lKTtcclxuICAgIH1cclxuXHJcbiAgICBmdW5jdGlvbiBkcmF3R29vbWJhKGNvbnRleHQpIHtcclxuICAgICAgICBzcHJpdGUuZHJhdyhyb3V0ZUFuaW0odGhpcyksIGNvbnRleHQsIDAsIDApO1xyXG4gICAgfVxyXG5cclxuICAgIHJldHVybiBmdW5jdGlvbiBjcmVhdGVHb29tYmEoKSB7XHJcbiAgICAgICAgY29uc3QgZ29vbWJhID0gbmV3IEVudGl0eSgpO1xyXG4gICAgICAgIGdvb21iYS5zaXplLnNldCgxNiwgMTYpO1xyXG5cclxuICAgICAgICBnb29tYmEuYWRkVHJhaXQobmV3IFBoeXNpY3MoKSk7XHJcbiAgICAgICAgZ29vbWJhLmFkZFRyYWl0KG5ldyBTb2xpZCgpKTtcclxuICAgICAgICBnb29tYmEuYWRkVHJhaXQobmV3IFBlbmR1bHVtV2FsaygpKTtcclxuICAgICAgICBnb29tYmEuYWRkVHJhaXQobmV3IEJlaGF2aW9yKCkpO1xyXG4gICAgICAgIGdvb21iYS5hZGRUcmFpdChuZXcgS2lsbGFibGUoKSk7XHJcblxyXG4gICAgICAgIGdvb21iYS5kcmF3ID0gZHJhd0dvb21iYTtcclxuXHJcbiAgICAgICAgcmV0dXJuIGdvb21iYTtcclxuICAgIH1cclxufVxyXG5cclxuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9wdWJsaWMvanMvZW50aXRpZXMvR29vbWJhLmpzXG4vLyBtb2R1bGUgaWQgPSAyOFxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJpbXBvcnQgRW50aXR5LCB7U2lkZXMsIFRyYWl0fSBmcm9tICcuLi9FbnRpdHkuanMnO1xyXG5pbXBvcnQge2xvYWRTcHJpdGVTaGVldH0gZnJvbSAnLi4vbG9hZGVyLmpzJztcclxuaW1wb3J0IFBlbmR1bHVtV2FsayBmcm9tICcuLi90cmFpdHMvUGVuZHVsdW1Nb3ZlLmpzJztcclxuaW1wb3J0IFNvbGlkIGZyb20gJy4uL3RyYWl0cy9Tb2xpZC5qcydcclxuaW1wb3J0IFBoeXNpY3MgZnJvbSAnLi4vdHJhaXRzL1BoeXNpY3MuanMnXHJcbmltcG9ydCBLaWxsYWJsZSBmcm9tICcuLi90cmFpdHMvS2lsbGFibGUuanMnO1xyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIGxvYWRLb29wYSgpIHtcclxuICAgIHJldHVybiBsb2FkU3ByaXRlU2hlZXQoJ2tvb3BhJylcclxuICAgICAgICAudGhlbihjcmVhdGVLb29wYUZhY3RvcnkpXHJcbn1cclxuXHJcbmNvbnN0IFNUQVRFX1dBTEtJTkcgPSBTeW1ib2woJ3dhbGtpbmcnKTtcclxuY29uc3QgU1RBVEVfSElESU5HID0gU3ltYm9sKCdoaWRpbmcnKTtcclxuY29uc3QgU1RBVEVfUEFOSUMgPSBTeW1ib2woJ3BhbmljJyk7XHJcblxyXG5jbGFzcyBCZWhhdmlvciBleHRlbmRzIFRyYWl0IHtcclxuICAgIGNvbnN0cnVjdG9yKCkge1xyXG4gICAgICAgIHN1cGVyKCdiZWhhdmlvcicpO1xyXG4gICAgICAgIHRoaXMuc3RhdGUgPSBTVEFURV9XQUxLSU5HO1xyXG4gICAgICAgIHRoaXMuaGlkZVRpbWUgPSAwO1xyXG4gICAgICAgIHRoaXMuaGlkZUR1cmF0aW9uID0gMztcclxuICAgICAgICB0aGlzLnBhbmljU3BlZWQgPSAyMDA7XHJcbiAgICAgICAgdGhpcy53YWxrU3BlZWQgPSBudWxsO1xyXG4gICAgfVxyXG5cclxuICAgIGNvbGxpZGVzKHVzLCB0aGVtKSB7XHJcbiAgICAgICAgLy8gdXMgaXMgb3VyIGdvb21iYSwgdGhlbSBvZnRlbiBhcmUgbWFyaW8uXHJcbiAgICAgICAgaWYgKHVzLmtpbGxhYmxlLmRlYWQpIHtcclxuICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgaWYgKHRoZW0uc3RvbWVyKSB7XHJcbiAgICAgICAgICAgIGlmICh0aGVtLnZlbC55ID4gdXMudmVsLnkpIHtcclxuICAgICAgICAgICAgICAgIHRoaXMuaGFuZGxlU3RhdGUodXMsIHRoZW0pO1xyXG4gICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5oYW5kbGVLaWNrKHVzLCB0aGVtKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBoYW5kbGVLaWNrKHVzLCB0aGVtKSB7XHJcbiAgICAgICAgaWYgKHRoaXMuc3RhdGUgPT09IFNUQVRFX1dBTEtJTkcpIHtcclxuICAgICAgICAgICAgdGhlbS5raWxsYWJsZS5raWxsKCk7XHJcbiAgICAgICAgfSBlbHNlIGlmICh0aGlzLnN0YXRlID09PSBTVEFURV9ISURJTkcpIHtcclxuICAgICAgICAgICAgdGhpcy5wYW5pYyh1cywgdGhlbSk7XHJcbiAgICAgICAgfSBlbHNlIGlmICh0aGlzLnN0YXRlID09PSBTVEFURV9QQU5JQykge1xyXG4gICAgICAgICAgICBjb25zdCB0cmF2ZWxEaXIgPSBNYXRoLnNpZ24odXMudmVsLngpO1xyXG4gICAgICAgICAgICBjb25zdCBpbXBhY3REaXIgPSBNYXRoLnNpZ24odXMucG9zLnggLSB0aGVtLnBvcy54KTtcclxuICAgICAgICAgICAgaWYgKHRyYXZlbERpciAhPT0gMCAmJiBpbXBhY3REaXIgIT09IHRyYXZlbERpcikge1xyXG4gICAgICAgICAgICAgICAgdGhlbS5raWxsYWJsZS5raWxsKCk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgaGFuZGxlU3RhdGUodXMsIHRoZW0pIHtcclxuICAgICAgICBpZiAodGhpcy5zdGF0ZSA9PT0gU1RBVEVfV0FMS0lORykge1xyXG4gICAgICAgICAgICBpZiAodXMucGVuZHVsdW1Nb3ZlLnNwZWVkICE9PSAwKSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLndhbGtTcGVlZCA9IHVzLnBlbmR1bHVtTW92ZS5zcGVlZDtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB0aGlzLmhpZGluZyh1cyk7XHJcbiAgICAgICAgfSBlbHNlIGlmICh0aGlzLnN0YXRlID09PSBTVEFURV9ISURJTkcpIHtcclxuICAgICAgICAgICAgdXMua2lsbGFibGUua2lsbCgpO1xyXG4gICAgICAgICAgICB1cy52ZWwuc2V0KDEwMCwgLTIwMCk7XHJcbiAgICAgICAgICAgIHVzLnNvbGlkLm9ic3RydWN0cyA9IGZhbHNlO1xyXG4gICAgICAgIH0gZWxzZSBpZiAodGhpcy5zdGF0ZSA9PT0gU1RBVEVfUEFOSUMpIHtcclxuICAgICAgICAgICAgdGhpcy5oaWRpbmcodXMpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBoaWRpbmcodXMpIHtcclxuICAgICAgICB1cy52ZWwueCA9IDA7XHJcbiAgICAgICAgdXMucGVuZHVsdW1Nb3ZlLmVuYWJsZSA9IGZhbHNlO1xyXG4gICAgICAgIHRoaXMuc3RhdGUgPSBTVEFURV9ISURJTkc7XHJcbiAgICB9XHJcblxyXG4gICAgdW5IaWRlKHVzKSB7XHJcbiAgICAgICAgdXMudmVsLnggPSAxMDA7XHJcbiAgICAgICAgdXMucGVuZHVsdW1Nb3ZlLmVuYWJsZSA9IHRydWU7XHJcbiAgICAgICAgdXMucGVuZHVsdW1Nb3ZlLnNwZWVkID0gdGhpcy53YWxrU3BlZWQ7XHJcbiAgICAgICAgdGhpcy5zdGF0ZSA9IFNUQVRFX1dBTEtJTkc7XHJcbiAgICAgICAgdGhpcy5oaWRlVGltZSA9IDA7XHJcbiAgICB9XHJcblxyXG4gICAgcGFuaWModXMsIHRoZW0pIHtcclxuICAgICAgICB1cy5wZW5kdWx1bU1vdmUuZW5hYmxlID0gdHJ1ZTtcclxuICAgICAgICB1cy5wZW5kdWx1bU1vdmUuc3BlZWQgPSB0aGlzLnBhbmljU3BlZWQgKiBNYXRoLnNpZ24odGhlbS52ZWwueCk7XHJcbiAgICAgICAgdGhpcy5zdGF0ZSA9IFNUQVRFX1BBTklDO1xyXG4gICAgfVxyXG5cclxuICAgIHVwZGF0ZSh1cywgZGVsdGFUaW1lKSB7XHJcbiAgICAgICAgaWYgKHRoaXMuc3RhdGUgPT09IFNUQVRFX0hJRElORykge1xyXG4gICAgICAgICAgICB0aGlzLmhpZGVUaW1lICs9IGRlbHRhVGltZTtcclxuXHJcbiAgICAgICAgICAgIGlmICh0aGlzLmhpZGVUaW1lID4gdGhpcy5oaWRlRHVyYXRpb24pIHtcclxuICAgICAgICAgICAgICAgIHRoaXMudW5IaWRlKHVzKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH1cclxufVxyXG5cclxuZnVuY3Rpb24gY3JlYXRlS29vcGFGYWN0b3J5KHNwcml0ZSkge1xyXG4gICAgY29uc3Qgd2Fsa0FuaW0gPSBzcHJpdGUuYW5pbWF0aW9ucy5nZXQoJ3dhbGsnKTtcclxuICAgIGNvbnN0IHdha2VBbmltID0gc3ByaXRlLmFuaW1hdGlvbnMuZ2V0KCd3YWtlJyk7XHJcblxyXG5cclxuICAgIGZ1bmN0aW9uIHJvdXRlQW5pbShrb29wYSkge1xyXG4gICAgICAgIGlmIChrb29wYS5iZWhhdmlvci5zdGF0ZSA9PT0gU1RBVEVfSElESU5HKSB7XHJcbiAgICAgICAgICAgIGlmIChrb29wYS5iZWhhdmlvci5oaWRlVGltZSA+IDIpIHtcclxuICAgICAgICAgICAgICAgIHJldHVybiB3YWtlQW5pbShrb29wYS5iZWhhdmlvci5oaWRlVGltZSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgcmV0dXJuICdoaWRpbmcnO1xyXG4gICAgICAgIH1cclxuICAgICAgICBpZiAoa29vcGEuYmVoYXZpb3Iuc3RhdGUgPT09IFNUQVRFX1BBTklDKSB7XHJcbiAgICAgICAgICAgIHJldHVybiAnaGlkaW5nJ1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgcmV0dXJuIHdhbGtBbmltKGtvb3BhLmxpZmVUaW1lKTtcclxuICAgIH1cclxuXHJcbiAgICBmdW5jdGlvbiBkcmF3S29vcGEoY29udGV4dCkge1xyXG4gICAgICAgIHNwcml0ZS5kcmF3KHJvdXRlQW5pbSh0aGlzKSwgY29udGV4dCwgMCwgMCwgdGhpcy52ZWwueCA8IDApO1xyXG4gICAgfVxyXG5cclxuICAgIHJldHVybiBmdW5jdGlvbiBjcmVhdGVLb29wYSgpIHtcclxuICAgICAgICBjb25zdCBrb29wYSA9IG5ldyBFbnRpdHkoKTtcclxuICAgICAgICBrb29wYS5zaXplLnNldCgxNiwgMTYpO1xyXG4gICAgICAgIGtvb3BhLm9mZnNldC55ID0gODtcclxuXHJcbiAgICAgICAga29vcGEuYWRkVHJhaXQobmV3IFBoeXNpY3MoKSk7XHJcbiAgICAgICAga29vcGEuYWRkVHJhaXQobmV3IFNvbGlkKCkpO1xyXG4gICAgICAgIGtvb3BhLmFkZFRyYWl0KG5ldyBQZW5kdWx1bVdhbGsoKSk7XHJcbiAgICAgICAga29vcGEuYWRkVHJhaXQobmV3IEJlaGF2aW9yKCkpO1xyXG4gICAgICAgIGtvb3BhLmFkZFRyYWl0KG5ldyBLaWxsYWJsZSgpKTtcclxuXHJcbiAgICAgICAga29vcGEuZHJhdyA9IGRyYXdLb29wYTtcclxuXHJcbiAgICAgICAgcmV0dXJuIGtvb3BhO1xyXG4gICAgfVxyXG59XHJcblxyXG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL3B1YmxpYy9qcy9lbnRpdGllcy9Lb29wYS5qc1xuLy8gbW9kdWxlIGlkID0gMjlcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiZXhwb3J0IGZ1bmN0aW9uIGNyZWF0ZURhc2hib2FyZExheWVyKGZvbnQsIHBsYXllckVudikge1xyXG4gICAgY29uc3QgTElORTEgPSBmb250LnNpemU7XHJcbiAgICBjb25zdCBMSU5FMiA9IGZvbnQuc2l6ZSoyO1xyXG5cclxuICAgIGNvbnN0IGNvaW5zID0gOTk7XHJcbiAgICByZXR1cm4gZnVuY3Rpb24gZHJhd0Rhc2hib2FyZChjb250ZXh0KSB7XHJcbiAgICAgICAgY29uc3Qge3RpbWUsc2NvcmV9ID0gcGxheWVyRW52LnBsYXllckNvbnRyb2xsZXI7XHJcbiAgICAgICAgZm9udC5wcmludCgnTUFSSU8nLCBjb250ZXh0LDE2LCBMSU5FMSk7XHJcbiAgICAgICAgZm9udC5wcmludChzY29yZS50b1N0cmluZygpLnBhZFN0YXJ0KDYsICcwJyksIGNvbnRleHQsMTYsIExJTkUyKTtcclxuXHJcbiAgICAgICAgZm9udC5wcmludCgnQHgnICsgY29pbnMudG9TdHJpbmcoKS5wYWRTdGFydCgyLCAnMCcpLCBjb250ZXh0LDk2LCBMSU5FMik7XHJcblxyXG4gICAgICAgIGZvbnQucHJpbnQoJ1dPUkxEJywgY29udGV4dCwxNTIsIExJTkUxKTtcclxuICAgICAgICBmb250LnByaW50KCcxLTEnLCBjb250ZXh0LDE2MCwgTElORTIpO1xyXG5cclxuICAgICAgICBmb250LnByaW50KCdUSU1FJywgY29udGV4dCwyMDgsIExJTkUxKTtcclxuICAgICAgICBmb250LnByaW50KHRpbWUudG9GaXhlZCgpLnRvU3RyaW5nKCkucGFkU3RhcnQoMywgJzAnKSwgY29udGV4dCwyMTYsIExJTkUyKTtcclxuICAgICAgICAvLyBmb250LmRyYXcoJ0EnLCBjb250ZXh0LCAwLCAwKTtcclxuICAgIH1cclxufVxyXG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL3B1YmxpYy9qcy9sYXllcnMvZGFzaGJvYXJkLmpzXG4vLyBtb2R1bGUgaWQgPSAzMFxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJpbXBvcnQgIGtleUJvYXJkIGZyb20gJy4vS2V5Ym9hcmRTdGF0ZS5qcydcclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBzZXR1cEtleWJvYXJkKGVudGl0eSkge1xyXG4gICAgY29uc3QgaW5wdXQgPSBuZXcga2V5Qm9hcmQoKTtcclxuXHJcbiAgICBpbnB1dC5hZGRNYXBwaW5nKCdTcGFjZScsIGtleVN0YXRlID0+IHtcclxuICAgICAgICAvLyBGYW50YXN0aWMhIC0g5aaZ77yBXHJcbiAgICAgICAgLypCeSBzdWNoIGEgZmFudGFzdGljIENsYXNzLCBub3cgd2UgdGFrZSBvdmVyIHRoZSBldmVudCBvZiBrZXkgYm9hcmQgaW5wdXQsXHJcbiAgICAgICAgIHNvIHRoYXQgd2UgY2FuIGdldCBob3cgbG9uZyBhIGtleSBpcyBwcmVzc2VkIGFuZCBkcmF3IHRoZSBjYW52YXMgc2VtYW50aWNhbGx5LiovXHJcbiAgICAgICAgaWYgKGtleVN0YXRlKSB7XHJcbiAgICAgICAgICAgIGVudGl0eS5qdW1wLnN0YXJ0KCk7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgZW50aXR5Lmp1bXAuY2FuY2VsKCk7XHJcbiAgICAgICAgfVxyXG4gICAgfSlcclxuICAgIGlucHV0LmFkZE1hcHBpbmcoJ0Fycm93VXAnLCBrZXlTdGF0ZSA9PiB7XHJcbiAgICAgICAgaWYgKGtleVN0YXRlKSB7XHJcbiAgICAgICAgICAgIGVudGl0eS5qdW1wLnN0YXJ0KCk7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgZW50aXR5Lmp1bXAuY2FuY2VsKCk7XHJcbiAgICAgICAgfVxyXG4gICAgfSk7XHJcblxyXG4gICAgaW5wdXQuYWRkTWFwcGluZygnS2V5TycsIGtleVN0YXRlID0+IHtcclxuICAgICAgICAvLyBFcDggLSBUdXJibyBNb2RlLCBJIHRoaW5rIGl0IGlzIHVubmVjZXNzYXJ5LlxyXG4gICAgfSk7XHJcblxyXG4gICAgaW5wdXQuYWRkTWFwcGluZygnQXJyb3dSaWdodCcsIGtleVN0YXRlID0+IHtcclxuICAgICAgICAvLyBlbnRpdHkuZ28uZGlyID0ga2V5U3RhdGU7XHJcbiAgICAgICAgZW50aXR5LmdvLmRpciArPSBrZXlTdGF0ZSA/IDEgOiAtMTtcclxuICAgIH0pO1xyXG5cclxuICAgIGlucHV0LmFkZE1hcHBpbmcoJ0Fycm93TGVmdCcsIGtleVN0YXRlID0+IHtcclxuICAgICAgICAvLyBlbnRpdHkuZ28uZGlyID0gLWtleVN0YXRlO1xyXG4gICAgICAgIGVudGl0eS5nby5kaXIgKz0ga2V5U3RhdGUgPyAtMSA6IDE7XHJcbiAgICB9KTtcclxuXHJcbiAgICByZXR1cm4gaW5wdXQ7XHJcbn1cclxuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9wdWJsaWMvanMvaW5wdXQuanNcbi8vIG1vZHVsZSBpZCA9IDMxXG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsImNvbnN0IFBSRVNTRUQgPSAxLCBSRUxFQVNFRCA9IDA7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBLZXlib2FyZFN0YXRlIHtcclxuICAgIGNvbnN0cnVjdG9yKCkge1xyXG4gICAgICAgIC8vIGhvbGQgdGhlIGN1cnJlbnQgc3RhdGUgb2YgYSBnaXZlbiBrZXlcclxuICAgICAgICB0aGlzLmtleVN0YXRlcyA9IG5ldyBNYXAoKTtcclxuXHJcbiAgICAgICAgLy8gaG9sZHMgdGhlIGNhbGxiYWNrIGZ1bmN0aW9ucyBmb3IgYSBrZXkgY29kZVxyXG4gICAgICAgIHRoaXMua2V5TWFwID0gbmV3IE1hcCgpXHJcbiAgICB9XHJcblxyXG4gICAgYWRkTWFwcGluZyhjb2RlLCBjYWxsQmFjaykge1xyXG4gICAgICAgIHRoaXMua2V5TWFwLnNldChjb2RlLCBjYWxsQmFjaylcclxuICAgIH1cclxuXHJcbiAgICBoYW5kbGVFdmVudChldmVudCkge1xyXG4gICAgICAgIGNvbnN0IHtjb2RlfSA9IGV2ZW50O1xyXG5cclxuICAgICAgICBpZiAoIXRoaXMua2V5TWFwLmhhcyhjb2RlKSkge1xyXG4gICAgICAgICAgICByZXR1cm5cclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XHJcblxyXG4gICAgICAgIGNvbnN0IGtleVN0YXRlID0gZXZlbnQudHlwZSA9PT0gJ2tleWRvd24nID8gUFJFU1NFRCA6IFJFTEVBU0VEO1xyXG5cclxuICAgICAgICBpZiAodGhpcy5rZXlTdGF0ZXMuZ2V0KGNvZGUpID09PSBrZXlTdGF0ZSkge1xyXG4gICAgICAgICAgICAvLyBhdm9pZCB0cmlnZ2VyaW5nIG11bHRpcGxlIHRpbWVzXHJcbiAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHRoaXMua2V5U3RhdGVzLnNldChjb2RlLCBrZXlTdGF0ZSk7XHJcblxyXG4gICAgICAgIHRoaXMua2V5TWFwLmdldChjb2RlKShrZXlTdGF0ZSk7XHJcbiAgICB9XHJcblxyXG4gICAgbGlzdGVuVG8od2luZG93KSB7XHJcbiAgICAgICAgWydrZXlkb3duJywgJ2tleXVwJ10uZm9yRWFjaChldmVudE5hbWUgPT4ge1xyXG4gICAgICAgICAgICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcihldmVudE5hbWUsIGV2ZW50ID0+IHtcclxuICAgICAgICAgICAgICAgIHRoaXMuaGFuZGxlRXZlbnQoZXZlbnQpXHJcbiAgICAgICAgICAgIH0pXHJcbiAgICAgICAgfSlcclxuICAgIH1cclxufVxyXG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL3B1YmxpYy9qcy9LZXlib2FyZFN0YXRlLmpzXG4vLyBtb2R1bGUgaWQgPSAzMlxuLy8gbW9kdWxlIGNodW5rcyA9IDAiXSwic291cmNlUm9vdCI6IiJ9