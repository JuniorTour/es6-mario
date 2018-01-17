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
1. Has function prameter
2. Return value is function

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



## File Structure