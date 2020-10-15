# 🎮 ES6-Mario

A web game written in ES6 syntax and HTML5 features, such as `Module, Canvas`.

You can get a specific impression of the `ES6` syntax, `HTML Canvas` Related API and `Webpack` simple config through this project.

Learned from [Meth Meth Method On Youtube](https://www.youtube.com/channel/UC8A0M0eDttdB11MHxX58vXQ) by [@Meth Meth Method](https://github.com/meth-meth-method) . Also recommend this channel strongly for you!

Many thanks to the author [@pomler](https://github.com/pomle), learned a lot from him.



### [中文README](https://github.com/JuniorTour/es6-mario/blob/master/public/notes/README-zh.md)


## Browser Support

- Modern Chrome and Firefox

- iOS Safari 9+

- Android 7.0+

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



## Study Guide

At first, personally I think `good code is self documenting`, the code of this project is **semantic**. The class name, variable name can express themselves. Only read the source code you can understand the main logic of this game.

Let me introduce the main logic:

0. This game is start from `es6-mario/public/js/main.js`, in this function, each Entities(Like mario, goomba etc) are created. And the `Main Loop` start:

```javascript
const timer = new Timer(fps);

timer.update = function update(deltaTime) {
  level.update(deltaTime);

  camera.pos.x = Math.max(0, mario.pos.x - 100);

  level.comp.draw(context, camera);
};

timer.start();
```

This is the core of game, the three lines are responsible for `update the entity status`, `move the camera`, `draw every layers`.



1. Update the entity

This part start from `level.update(deltaTime);` in the main loop, then step into the `update()` method in public/js/Level.js .

```javascript
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
```

Here, this method invoke each entities' update method, calculate the status (pos, collision etc) of them.



2. Move camera

This function is cooperate with the draw layers function, after main loop update the pos of camera, each layer will update itself according to the pos of camera.

For example, in /public/js/layers/background.js, every time it `drawBackgroundLayer`, the exact pos of background layer will move according to the pos of camera.

```javascript
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
```



3. Draw layers

The code of his part is mainly under the /public/js/layers. There are background layer, camera layer, collision layer, sprite layer, dashboard layer. As the name of each layers, it control the painting of itself.

In here: https://www.youtube.com/watch?v=I1RTsqUz-t0&t=903s , you can get a directly demo.



4. Input, Timer, Entity Trait, Physical Effect and so on

In addition to the function above, this game also have many other unique function you deserve to learn about.



Besides, If you really intend to learn this project systemically, I **strongly recommend the series of the original author: <https://www.youtube.com/watch?v=g-FpDQ8Eqw8&t=2s>  **。





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
| 0    | Basic Structure            | 2018/2/14   | The day before Spring Festival.          |
| 1    | Bundle Tool                | 2018/3/1    | For better compatibilty and performance. |
| 2    | Mobile Support             | 2018/3/4    | For more players. Including Virtual Pad. |
| 3    | Original Map and Minor fix | 2018/3/1    |                                          |
| 4    | Performance Optimize       | ......      | Try to run this game smoothly in low end device. |
| 5    | Game Related Optimize      | ......      | Make this game more funny!               |
| 6    | Webpack Env Config         | 2020/9/27      | Something makes today special. |





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

This project is developing, there are still many bugs, please forgive for this troubles, I will fix it up asap and you are welcome to help it.

 If you have any idea about this project, feel free to talk with me in any way.

My GitHub: [@JuniorTour](https://github.com/JuniorTour).

My Email: [juniortour@qq.com](mailto:juniortour@qq.com).