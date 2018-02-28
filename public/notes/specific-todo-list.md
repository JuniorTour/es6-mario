# specific-todo-list

- [] Edge KeyBoard Input support.   **Abandoned**

- [] Better way to link css.

- [] Mobile Control: **Done**

0. Temp Test

Able to implement the function, but I also found some problems.

eg: Multiple Touch not Support??? **Done**


- [] Compatibility Improve
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


- [] BGM:

- [] Level Design:

- [] Sound Effect:

Web Sound API?

- [] Screen Rotate Support
