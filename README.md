# ES6-Mario

A web game made by ES6 syntax and HTML5.

Learn by https://www.youtube.com/watch?v=g-FpDQ8Eqw8&index=1&list=PLS8HfBXv9ZWWe8zXrViYbIM2Hhylx8DZx .

## Run

```
git clone ...

npm install

//....
```

## Demo

### Online Demo
# [play es6-mario]()

### Gif Demo

![]()

![]()


## Experience Summary

0. Regularly Clean up your code

By `split the implementation and declaration with module syntax`, `build a Class`


## Topic Summary Notes
0. Es6 Module

``` javascript

<script type="module" src="/js/main.js"></script>

import {loadLevel} from './loader.js'
import {loadBackgroundSprites, loadMarioSprite} from './sprites.js'

```

1. Promise

``` javascript
Promise.all([
    promiseA,
    promiseB
]).then(([resolveA, resolveB]) => {//...})
```

2. High-Order Function In Javascript

> The function which:
> 1. Has function prameter
> 2. Return value is function

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

4. Game Theory: Timer and Main Loop(Ep3)

目前的帧数（更新画面的频率）由requestAnimationFrame决定，
但当计算机的性能不足，帧数较低时，游戏内的速度（FPS-frame per second）会变的很慢；
相反，帧数太高，游戏的速度又会太快。
为了解决这个问题，我们需要一个更独立的时钟用来更新画面、决定帧数。
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


## File Structure