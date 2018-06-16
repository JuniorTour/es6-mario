# specific-todo-list

### Game Related

- [x] BGM:

TODO: After finish all the sound, consider a mute whole function

https://codepen.io/MarvinVK/pen/FgAht

- [] Level Design:

- [] Spawn entity at certain time

eg: when mario go to index 124, then spawn the surround other entities.

- [] Sound Effect:

How about Web Sound/Audio API?



### Performance

- [] Better way to link css.

- [] Webpack Env

https://doc.webpack-china.org/guides/production/#%E9%85%8D%E7%BD%AE

- [] Search for performance bottle neck

``` javascript
console.memory()

console.time()
console.timeEnd()

console.trace()

```

After testing the performance by `control the variable - delete code progressively`,I found the main bottle neck which lead to the heavy stutter in mobile devices at the beginning of game start is `the number of entity`, especially the goomba and koopa.

Besides, the `github-button` in index.html and the `autoPlayOniOS();` also have some influence on the start.

> On my iPhone se @iOS 9.3, once the number of goomba and koopa is more than 1, the game will get heavy stutter.
>
> When there is only one mario on the screen, the game can run smoothly at almost 30fps.

I get some ideas about optimizing it:

1. Optimize the spawn logic, only when the entities are near the camera, then we add and show the entities.

2. Web Workers

3. Add a loading anim when start up.





### Compatibility

- [x] Edge KeyBoard Input support.   **Abandoned**

- [x] Mobile Control: **Done**

0. Temp Test

Able to implement the function, but I also found some problems.

eg: Multiple Touch not Support??? **Done**


- [x] Compatibility Improve
*
* 0. Before compiled by Babel, Only chrome-61+ (Mainly because of the Async Function).
* 1. After compiled by Babel,
*       firefox-47 worked perfect;
*       Edge-14 worked but cannot handle keyboard input;
*       IE11 still not work, with Error: Unhandled promise rejection ReferenceError: “fetch”未定义. Abandoned  IE.
*
*       Mobile:
*           Android:
*               7.0 - Samsung s7, working perfect and smooth.
*               YUNOS 5.11 - HUAGAN HT6 , A low end device, cannot run.
*           IOS:
*               9.3.2 - iPhone se, no screen, mainly because the fetch API.
*               Solved by add `whatwg-fetch polyfill` like below in entry property.
*               Worked but FPS is low.
*               11.0.3 - iPhone 8, Run perfect, full FPS, even without fetch polyfill.

- [x] Screen Rotate Support

How to implement same ratio scale?

Original Game is 256/240 = 1.0667

Solved by media query:

``` css
/* iPad Pro : 768*1024*/
@media (max-width: 1024px) and (orientation:portrait) {
    #screen {
        width: 100%;
        height: auto;
    }
}
@media (max-width: 1024px) and (orientation:landscape) {
    #screen {
        width: auto;
        height:100vh;
    }
}
```


- [] BGM auto play on mobile:

https://gist.github.com/ufologist/50b4f2768126089c3e11


### Other

- [x] Mobile Magnifier

On Mobile Phone, long press will trigger a magnifier.

- [] Add Mobile Icon

- [] PWA

### BUG

- [x] 0. Collision Judgement Sequence Wrong

In stomer.js:
 When Mario was bounded down by the bricks above his head, his vel.y will be -400,
 it is less than the vel.y of Goomba, so the Mario will be killed wrongly.
 After a deeper researching, I found the real cause is the trigger sequence of Stomer and Goomba's collides.
 The right sequence should be 1. Goomba's collides => 2. Stomer's debounce.
 But, on the contrary, the sequence usually is Stomer => Goomba, so Mario usually is killed wrongly.


### High Order

- [] Mobile Landscape Fullscreen support

For mobile safari, think about the slide to hide ui bar hack.

- [] Optimize Entity respawn logic

- [] Sound Effec