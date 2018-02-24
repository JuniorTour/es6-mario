# 🎮 ES6-Mario

A web game made by ES6 syntax and HTML5.

Learned from [[Meth Meth Method On Youtube](https://www.youtube.com/channel/UC8A0M0eDttdB11MHxX58vXQ)](https://www.youtube.com/watch?v=g-FpDQ8Eqw8&index=1&list=PLS8HfBXv9ZWWe8zXrViYbIM2Hhylx8DZx) by [@Meth Meth Method][https://github.com/meth-meth-method] .

Many thanks to the [@Meth Meth Method][https://github.com/meth-meth-method] and  [@pomler][https://github.com/pomle].



### [中文版README](./notes/README-zh.md)



## Run

```
git clone https://github.com/JuniorTour/es6-mario

cd es6-mario

npm install

npm run dev     // Start Development at http://localhost:8080

npm run build   // Bundle project with Webpack to ./public/dist

npm run prod    // Serve the bundled project in Production Env at http://localhost:666

```



## Demo

### Online Demo

# [Play es6-mario Online]()

![QR-CODE-es6-mario]()


### Gif Demo

![]()

![]()





## Experience Summary

0. Regularly Clean up your code

By `split the implementation and declaration with module syntax`, `build a Class`([More.........](https://github.com/JuniorTour/es6-mario/blob/master/public/notes/notes.md))



## Topic Summary Notes

0. Es6 Syntax

- <1> Module

``` javascript

<script type="module" src="/js/main.js"></script>

import {loadLevel} from './loader.js'
import {loadBackgroundSprites, loadMarioSprite} from './sprites.js'

```

- <2> Super Class
  ([More.........](https://github.com/JuniorTour/es6-mario/blob/master/public/notes/notes.md))





## ToDo-List

| No.  | Content                    | Finish Date | Extra                                    |
| ---- | -------------------------- | ----------- | ---------------------------------------- |
| 0    | Basic Structure            | 2018/2/14   | The day before Spring Festival.          |
| 1    | Bundle Tool                | ......      | For better compatibilty and performance. |
| 2    | Mobile Support             | ......      | For more players. Including Virtual Pad. |
| 3    | Original Map and Minor fix | ......      |                                          |
| 4    | ......                     | ......      |                                          |





##File Structure

```javascript
|__ public
  |__ index.html
  |__ img
    |__ characters.gif
    |__ font.png
    |__ tiles.png
  |__ js
    |__ entities
      |__ Goomba.js
      |__ Koopa.js
      |__ Mario.js
    |__ layers
      |__ background.js
      |__ camera.js
      |__ collision.js
      |__ dashboard.js
      |__ sprites.js
    |__ loaders
      |__ font.js
      |__ level.js
    |__ anim.js
    |__ BoundingBox.js
    |__ Camera.js
    |__ compositor.js
    |__ debug.js
    |__ entities.js
    |__ Entity.js
    |__ EntityCollider.js
    |__ input.js
    |__ KeyboardState.js
    |__ main.js
    |__ math.js
    |__ sprites.js
    |__ SpriteSheet.js
    |__ TileCollider.js
    |__ TileResolver.js
    |__ Timer.js
    |__ Level.js
    |__ loader.js
    |__ traits
      |__ Go.js
      |__ Jump.js
      |__ Killable.js
      |__ PendulumMove.js
      |__ Physics.js
      |__ PlayerController.js
      |__ Solid.js
      |__ Stomer.js
      |__ Velocity.js
  |__ levels
    |__ 1-1.json
  |__ notes
    |__ notes.md
  |__ sprites
    |__ goomba.json
    |__ koopa.json
    |__ mario.json
    |__ overworld.json
    |__ underworld.json
|__ .gitignore
|__ package.json
|__ README.md

```





## The End

If you have any idea about this project, feel free to talk with me in any way.

My GitHub: [@JuniorTour](https://github.com/JuniorTour).

My Email: [juniortour@qq.com](mailto:juniortour@qq.com).