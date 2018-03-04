
## Experience Summary

0. Regularly Clean up your code

By `split the implementation and declaration with module syntax`, `build a Class`.


1. `rm -rf folders` in Windows

`rd /s /q node_modules` or `rmdir /s /q node_modules`.

- /S Removes all directories and files in the specified directory in addition to the directory itself. Used to remove a directory tree.

- /Q Quiet mode, do not ask if ok to remove a directory tree with /S

2. npm

> `npm i something --save --save-exact`

[https://docs.npmjs.com/cli/install](https://docs.npmjs.com/cli/install)

The `--save-exact` param means save the EXACT version of package, which does't have the `^` before ites version.

eg: `"something-exact": "1.23"` and `"something": "^1.23"

> `--save` can be simplified to '-S', `--save-dev` can be simplified to '-D'

## Topic Summary Notes
0. Es6 Syntax

- <1> Module

``` javascript

<script type="module" src="/js/main.js"></script>

import {loadLevel} from './loader.js'
import {loadBackgroundSprites, loadMarioSprite} from './sprites.js'

```

- <2> Super Class

``` javascript
import {Trait} from '../Entity.js'

export default class Go extends Trait {
    constructor() {
        /*super keyword inner class means the father class's constructor of this class.
        Here the father class is the Trait class.*/
        super('go');

        // ...
    }
}
```


- <3> Symbol

``` javascript
// Entity.js
export const Sides = {
    BOTTOM: Symbol('bottom'),
    TOP: Symbol('top')
};
```

Symbol has some unique traits.

- It is the seventh basic value type of Javascript, the other is: undefined, null, Boolean, String, Number, Object.

- It represent a UNIQUE symbol:
``` javascript
// 没有参数的情况
let s1 = Symbol();
let s2 = Symbol();

s1 === s2 // false

// 有参数的情况
let s1 = Symbol('foo');
let s2 = Symbol('foo');

s1 === s2 // false
```

- As property name, this property can only be visited or declared by `[]` syntax
``` javascript
let mySymbol = Symbol();

// 第一种写法
let a = {};
a[mySymbol] = 'Hello!';

// 第二种写法
let a = {
  [mySymbol]: 'Hello!'
};

// 第三种写法
let a = {};
Object.defineProperty(a, mySymbol, { value: 'Hello!' });

// 以上写法都得到同样结果
a[mySymbol] // "Hello!"
```

Can not use the `.` to visit the prop:
```
const mySymbol = Symbol();
const a = {};

a.mySymbol = 'Hello!';  // Here mySymbol only means a string, not a Symbol
a[mySymbol] // undefined
a['mySymbol'] // "Hello!"
```

- <4> Promise

``` javascript
Promise.all([
    promiseA,
    promiseB
]).then(([resolveA, resolveB]) => {//...})
```

``` javascript
    // entities.js
    return Promise.all([
        loadMario().then(saveAs('mario')),
        loadGoomba().then(saveAs('goomba')),
        loadKoopa().then(saveAs('koopa')),
    ])
        .then(() => entitiesFactory)
```

- <5> Generator, yield and Iterator


``` javascript
// level.js
function* expandSpan(xStart, xLen, yStart, yLen) {
    // const coords = [];
    const xEnd = xStart + xLen;
    const yEnd = yStart + yLen;
    for (let x = xStart; x < xEnd; x++) {
        for (let y = yStart; y < yEnd; y++) {
            // coords.push({x, y});
            yield {x,y};
        }
    }

    // return coords;
}
```

- <6> Async / Await

``` javascript

// Without Async / Await:
const targetValue;
returnPromise()
    .then(asyncValue => {
        targetValue = asyncValue;
    })

// With it :
 const targetValue = await returnPromise();

```

- <7> ES6 - Data Structure

On ES5, there are mainly two kinds of data structure: Array and Object.

ES6 added `Map` and `Set`.

By the way, in order to handle with these different structure unitedly, ES6 also brought the new `Iterator` syntax.

> Map

A key-value data structure.

It has some methods and prop:

- aMap.size

- aMap.set(key, value)

- aMap.delete(value)

- aMap.get(key)

- aMap.clear()

``` javascript
const m = new Map();

m.set('edition', 6);
m.get('edition');   // 6

m.has('edition')     // true

```


And iterator methods: keys()，values()，entries(), forEach()

> Set

`Set` has main traits:

- Unique Member

- the order of Add is the order of Iterate

It has some methods and prop:

- aSet.size

- aSet.add(value)

- aSet.delete(value)

- aSet.has(value)

- aSet.clear()

And iterator methods: keys()，values()，entries(), forEach()

``` javascript
// .entries() return both the kay and its value.
for (let item of set.entries()) {
  console.log(item);
}
// ["red", "red"]
// ["green", "green"]
// ["blue", "blue"]

aSet.size   // 3

```







1. High-Order Function In Javascript

> The function which:
> 1. Has function parameter.
> 2. Return-value is a function.

The High-Order Function can be used to simplify code.

eg:
**Without High-Order Function**
``` javascript
var aIndex = "a".charCodeAt(0); // 97
var alphabet = "";
for (var i = 0; i < 26; i++) {
    alphabet += String.fromCharCode(aIndex + i);
}
alphabet; // "abcdefghijklmnopqrstuvwxyz"

var digits = "";
for (var i = 0; i < 10; i++) {
    digits += i;
}
digits; // "0123456789"

var random = "";
for (var i = 0; i < 8; i++) {
    random += String.fromCharCode(Math.floor(Math.random() * 26)
+ aIndex);
}
random; // "bdwvfrtp" (different result each time)
```


**Refrain by High-Order Function**
``` javascript
// buildString is a High-Order Function, It has a function parameter(callback)

function buildString(n, callback) {
    var result = "";
    for (var i = 0; i < n; i++) {
        result += callback(i);
    }
    return result;
}

var alphabet = buildString(26, function(i) {
    return String.fromCharCode(aIndex + i);
});
alphabet; // "abcdefghijklmnopqrstuvwxyz"

var digits = buildString(10, function(i) { return i; });
digits; // "0123456789"

var random = buildString(8, function() {
    return String.fromCharCode(Math.floor(Math.random() * 26) + aIndex);
});
random; // "ltvisfjr" (different result each time)

// Life is simplier~
```


3. The Amazing `requestAnimationFrame()`

https://www.paulirish.com/2011/requestanimationframe-for-smart-animating/

4. Game Theory:

- <1> Timer and Main Loop(Ep3)

https://www.scirra.com/tutorials/67/delta-time-and-framerate-independence

目前的游戏运行速度（具体例如一秒钟人物可以移动多远）由requestAnimationFrame决定，
但当计算机的性能不足，帧数较低时，游戏的速度会变慢；相反，帧数太高，游戏的速度又会太快。
例如：在30fps时，马里奥每秒钟走16格；但是在60fps时，却会走32格。
这不利于良好的游戏体验。

为了解决这个问题，我们需要一个更独立的时钟用来更新画面、稳定游戏运行的速度。
“Decouple the internal frame rate from running frame rate.”

参考这个问题：Controlling fps with requestAnimationFrame?
https://stackoverflow.com/questions/19764018/controlling-fps-with-requestanimationframe


Still confused with the EP3, from the "different parabola" in 19:34.

Why the first `deltaTime` value will NOT be 16.7ms, but 300-500ms?

When I change the `lastTime` by `let lastTime = performance.now()`, It seems was solved?

``` javascript

        /*Confused*/

        let deltaTime = 0
        // let lastTime = 0
        let lastTime = performance.now()
        /*如果让lastTime = 0，那么第二帧的deltaTime将会太大，performance.now()则刚好解决了这个问题，因为
         * requestAnimationFrame这个方法传入的时间戳就是由performance.now()得来的。*/

        function update(time) {
            deltaTime = (time - lastTime) / 1000
            // deltaTime = 1/60
            console.log(deltaTime,time)

            comp.draw(context)
            mario.update(deltaTime)
            mario.vel.y += gravity

            console.log(mario.pos)

            requestAnimationFrame(update)
            // setTimeout(update,1000/60,performance.now())

            lastTime = time
        }

        update(performance.now())

```

```
if (积累的时间 > 1/60) {
    更新一帧（）；
    减去一帧积累的时间；
}
```

- <2> Physical Effect - Inertia Force and Friction Force in Game(Ep8)

In our game, mario has Inertia Force and Friction Force, when he stop to run, he have to walk a bit more.
And when he is running, his velocity will be slow down partly by the Friction Force, the implementation is like below:

``` javascript
// ./js/traits/go.js

class GO {
    constructor() {

        this.dir = 0;
        /*1. We declare the acceleration, deceleration, dragFactor(friction factor) for preparation.
        Besides, each entity has an vel (velocity) property which indicates its speed.*/
        this.acceleration = 400;
        this.deceleration = 300;
        this.dragFactor = 1/5000;

        this.distance = 0;
    }

    update(entity, deltaTime) {
        const absX = Math.abs(entity.vel.x);

        if (this.dir !== 0) {
            /*2. When an entity start to move, it will speed up GRADUALLY (+=) due to the inertia force in the static status.*/
            entity.vel.x += this.acceleration * deltaTime * this.dir;
            this.heading = this.dir;
        } else if (entity.vel.x !== 0) {
            const decel = Math.min(absX, this.deceleration * deltaTime);
            entity.vel.x += entity.vel.x > 0 ? -decel : decel;
        } else {
            this.distance = 0;
        }

        /*3. Every time we update a frame, we caculate the drag, which is friction force of an entity, and SUBTRACT(-=) the drag from entity's velocity, slow down the entity, just like the real world does.*/
        const drag = this.dragFactor * entity.vel.x * absX;
        entity.vel.x -= drag;

        /*4. At last we record the distance we have went through by timing the velocity and time. Just like the real world too.*/
        this.distance += absX * deltaTime;
    }
}

// ./js/entities.js

function frameRoute(mario) {
    return runAnim(mario.go.distance);
}

```

- <3> Grace Period (宽限期) - EP8

Without the Grace Period, the mario's jump is hard to control.
When we press the jump key many times continuously, we can only get one time of jump, and another jump have to be trigger when we landed. It makes the game tricky.

 With the Grace Period (implementation is in ./js/traits/jump.js), during a limit time period, we allow mario to jump another time followed by his former jump. Then the game feels more silky~~~

5. Semicolon or Not?

```
input.listenTo(window);
/*without the prev ;, this sentence will be parsed as "input.listenTo(x)[].forEach(...)", and get error.*/

        ['mousedown', 'mousemove'].forEach(eventName => {
```

6. Magic String / Number

