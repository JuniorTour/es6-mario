# 🎮 ES6-Mario

A web game written in `ES6` syntax and `HTML5` features, such as `Module, Canvas`.

You can get a specific impression of the ES6 syntax and HTML Canvas Related API through this project.

Learned from [Meth Meth Method On Youtube](https://www.youtube.com/channel/UC8A0M0eDttdB11MHxX58vXQ) by [@Meth Meth Method](https://github.com/meth-meth-method) . Also recommend this channel strongly for you!

Many thanks to the author [@pomler](https://github.com/pomle), learned a lot from him.



### [中文README](https://github.com/JuniorTour/es6-mario/blob/master/public/notes/README-zh.md)


## Compatibility

- modern Chrome and Firefox

- iOS 9.3.2+ Safari

- Android 7.0

- NO IE



## Demo

### Online Demo

# [Click to Play es6-mario Online](http://juniortour.net:666/)

# Scan to Play:

![QR-CODE-es6-mario](https://github.com/JuniorTour/es6-mario/blob/master/public/notes/demo-img/es6-mario-qr-code.png?raw=true)


### Gif Demo

![mario-eg-1-60fps.gif](https://github.com/JuniorTour/es6-mario/blob/master/public/notes/demo-img/mario-eg-1-60fps.gif?raw=true)

![mario-eg-2-60fps.gif](https://github.com/JuniorTour/es6-mario/blob/master/public/notes/demo-img/mario-eg-2-60fps.gif?raw=true)



## Run

```
git clone https://github.com/JuniorTour/es6-mario

cd es6-mario

npm install

npm run dev     // Start Development at http://localhost:8080

npm run build   // Bundle project with Webpack to ./public/dist

npm run prod    // Bundle project with Webpack to ./public/dist and Serve the bundled project in Production Env at http://localhost:666

```



## Experience Summary

0. Regularly Clean up your code

By `split the implementation and declaration with module syntax`, `build a Class`.

([More.........](https://github.com/JuniorTour/es6-mario/blob/master/public/notes/notes.md))



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
| 0    | Basic Structure                        | 2018/2/14  | The day before Spring Festival.                                                                     |
| 1    | Bundle Tool                               | 2018/3/1 | For better compatibilty and performance.                                                      |
| 2    | Mobile Support                         | 2018/3/4 | For more players. Including Virtual Pad.                                                           |
| 3    | Original Map and Minor fix     | 2018/3/1 |                                                                                                                                 |
| 4    | Performance Optimize            | ......            |  Try to run this game smoothly in low end device.                                        |
| 5    | Game Related Optimize          | ......            |  Make this game more funny!                                                                               |
| 6    | Webpack Env Config                 | ......            |                                                                                                                               |





## File Structure

```javascript
|__ public                          Source Code
  |__ index.html
  |__ assets
      |__ img
        |__ characters.gif
        |__ font.png
        |__ tiles.png
      |__ levels                    Level Content Config
        |__ 1-1.json
      |__ sound
        |__ overworld-bgm.mp3
      |__ sprites                   Charecter Sprites Config
        |__ goomba.json
        |__ koopa.json
        |__ mario.json
        |__ overworld.json
        |__ underworld.json
  |__ build
    |__ prod-server.js
    |__ webpack.config.js     webpack Config
  |__ css
    |__ ......
  |__ js
    |__ entities
      |__ Goomba.js
      |__ Koopa.js
      |__ Mario.js
    |__ input                       Keyboard and Touch Input Control
      |__ ......
    |__ layers
      |__ background.js
      |__ camera.js
      |__ collision.js
      |__ dashboard.js
      |__ sprites.js
    |__ loaders
      |__ font.js
      |__ level.js
    |__ polyfill
      |__ ......
    |__ traits                      Charecter Traits Config
      |__ Go.js
      |__ Jump.js
      |__ Killable.js
      |__ PendulumMove.js
      |__ Physics.js
      |__ PlayerController.js
      |__ Solid.js
      |__ Stomer.js
      |__ Velocity.js
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
  |__ notes
    |__ ......
|__ .babelrc
|__ .gitignore
|__ package.json
|__ README.md

```





## The End

If you have any idea about this project, feel free to talk with me in any way.

My GitHub: [@JuniorTour](https://github.com/JuniorTour).

My Email: [juniortour@qq.com](mailto:juniortour@qq.com).