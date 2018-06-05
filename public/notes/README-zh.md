# 🎮 ES6-Mario

这是一个用原生ES6语法和HTML5新特性写成的`Web 游戏`。

通过这个项目，你可以在实践中对`ES6`的主要内容、`HTML Canvas` 相关API以及`Webpack`的基础配置有一个直观的认识。

主体结构学习自 [Meth Meth Method On Youtube](https://www.youtube.com/channel/UC8A0M0eDttdB11MHxX58vXQ) [@Meth Meth Method](https://github.com/meth-meth-method).

非常感谢原作者 [@pomler](https://github.com/pomle)，从他那里学到了很多人生经验。


## 浏览器兼容性

- Modern Chrome and Firefox

- iOS 9+ Safari

- Android 7.0+

- NO IE


## Demo

### 在线 Demo

# [在线试玩 es6-mario](http://juniortour.net:666/)

# 扫码试玩：

![QR-CODE-es6-mario](https://github.com/JuniorTour/es6-mario/blob/master/public/notes/demo-img/es6-mario-qr-code.png?raw=true)


### Gif Demo

![mario-eg-1-60fps.gif](https://github.com/JuniorTour/es6-mario/blob/master/public/notes/demo-img/mario-eg-1-60fps.gif?raw=true)

![mario-eg-2-60fps.gif](https://github.com/JuniorTour/es6-mario/blob/master/public/notes/demo-img/mario-eg-2-60fps.gif?raw=true)


## 运行

```
git clone https://github.com/JuniorTour/es6-mario

cd es6-mario

npm install        // 国内推荐cnpm，速度更快

npm run dev     // 在 http://localhost:8080 启动开发服务器

npm run build   // 打包编译源代码至 ./public/dist

npm run prod    // 打包编译源代码至 ./public/dist 并且 在 http://localhost:666 启动生产环境服务器

```



## 学习指南

首先我觉得`好的代码本身就是注释`，这个项目的代码语义性还是挺强的，变量、类名都能解释它自己，仅仅阅读源代码，也能大致理解项目的运行逻辑。

我向大家概括的介绍一下游戏的主要逻辑：

0. 项目由es6-mario/public/js/main.js开始，在这个主函数中，创建了游戏内的一个个`实体（Entity）`，就是马里奥、乌龟等等，并且开始游戏的`主循环`：

```
    const timer = new Timer(fps);

    timer.update = function update(deltaTime) {
        level.update(deltaTime);

        camera.pos.x = Math.max(0, mario.pos.x - 100);

        level.comp.draw(context, camera);
    };

    timer.start();

```

这个主循环就是游戏的核心，主循环中的这三行分别负责一帧一帧地`更新实体`、`移动镜头`、`绘制背景`等层次。



1. 更新实体
   这部分的内容由主循环中的`level.update(deltaTime);`开始，进入到Level.js中的update方法：

```
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

这个方法再分别调用各个实体的update方法，将各个实体的状态（位置、碰撞检测）等等计算出来。



2. 移动镜头

移动镜头的功能是和绘制各层相配合实现的，在主循环中只有简单的更新镜头位置这一行代码，但是对于各层来说，会根据这个镜头（camera）的位置（pos）决定绘制出该层的某一段。

例如在 /public/js/layers/background.js 中，每次绘制这个背景层时，就会根据 camera.pos.x 来决定具体绘制那哪一段背景：

```
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

3. 绘制背景

这部分的代码主要在/public/js/layers文件夹下，目前有背景层、镜头层、碰撞层、精灵层、面板层，分别控制相应层次的绘制内容。

你可以在这：<https://www.youtube.com/watch?v=I1RTsqUz-t0&t=903s> ， 看到一个非常直观的演示。

分层绘制也是2D游戏编程的常用技巧。



4. 输入、内置时钟、实体特性、物理效果等

除了主循环的这三个主要功能外，这个游戏还有很多特别的功能，诸如内置时钟：es6-mario/public/js/Timer.js ， 保证游戏运行速度不受帧数影响；键盘输入、虚拟触摸输入：[https://github.com/JuniorTour/es6-mario/tree/master/public/js/input；影响实体行为的不同特性：/public/js/traits/](https://github.com/JuniorTour/es6-mario/tree/master/public/js/input%EF%BC%9B%E5%BD%B1%E5%93%8D%E5%AE%9E%E4%BD%93%E8%A1%8C%E4%B8%BA%E7%9A%84%E4%B8%8D%E5%90%8C%E7%89%B9%E6%80%A7%EF%BC%9A/public/js/traits/) 等等等等。



另外，如果你确实有意系统地学习这个项目的代码，我还是向你推荐 **原作者的视频教程**：**[https://www.youtube.com/watch?v=g-FpDQ8Eqw8&t=2s。](https://www.youtube.com/watch?v=g-FpDQ8Eqw8&t=2s%E3%80%82)**





## 经验总结

0. 经常整理代码

可以通过`借助module语法分离声明和实现`，`构建类`等来实现。

([More.........](https://github.com/JuniorTour/es6-mario/blob/master/public/notes/notes.md))



## 关键点总结记录

0. Es6 语法

- <1> Module

``` javascript

<script type="module" src="/js/main.js"></script>

import {loadLevel} from './loader.js'
import {loadBackgroundSprites, loadMarioSprite} from './sprites.js'

```

- <2> Super Class - 超类

  ([More.........](https://github.com/JuniorTour/es6-mario/blob/master/public/notes/notes.md))





## ToDo-List

| No.  | Content      | Finish Date | Extra                              |
| ---- | ------------ | ----------- | ---------------------------------- |
| 0    | 基础结构         | 2018/2/14   | 春节前日                               |
| 1    | 打包工具         | 2018/3/1    | 为了实现更好的兼容性和性能。                     |
| 2    | 移动端兼容        | 2018/3/4    | 为了支持目前互联网的主流。                      |
| 3    | 原版地图和游戏内容    | 2018/3/1    |                                    |
| 4    | 性能优化         |             | 尝试让低端设备（iPhone se,...）也能以较为流畅的帧数运行 |
| 5    | 游戏体验相关优化     | ......      | 让游戏更有趣！                            |
| 6    | Webpack 环境配置 | ......      |                                    |



## 文件结构

```javascript
|__ public                          主文件夹
  |__ index.html
  |__ assets
      |__ img
        |__ characters.gif
        |__ font.png
        |__ tiles.png
      |__ levels                    关卡内容配置
        |__ 1-1.json
      |__ sound
        |__ overworld-bgm.mp3
      |__ sprites                   角色精灵（雪碧图）配置
        |__ goomba.json
        |__ koopa.json
        |__ mario.json
        |__ overworld.json
        |__ underworld.json
  |__ build
    |__ prod-server.js          生产环境服务器
    |__ webpack.config.js     webpack配置文件
  |__ css
    |__ ......
  |__ js
    |__ entities
      |__ Goomba.js
      |__ Koopa.js
      |__ Mario.js
    |__ input                       键盘及触控操作输入控制
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
    |__ polyfill                    兼容性垫片
      |__ ......
    |__ traits                      游戏内角色特性
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


## 结语

这个项目还在开发之中，仍有许多不足之处，请原谅我迫不及待地分（pian）享（zan），我会尽快修复这些问题，也很欢迎你来帮助我。

非常渴望听到你的意见！欢迎通过各种方式联系我：

My GitHub: [@JuniorTour](https://github.com/JuniorTour).

My Email: [juniortour@qq.com](mailto:juniortour@qq.com).