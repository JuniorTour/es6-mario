import  keyBoard from './KeyboardState.js'
import  TouchPad from './TouchPadState.js'

export function setupTouchPad(entity) {
    const jumpBtn = document.getElementById('jump-btn');
    const leftBtn = document.getElementById('left-btn');
    const rightBtn = document.getElementById('right-btn');

    const buttons = [jumpBtn, leftBtn, rightBtn];

    const input = new TouchPad(buttons);

    input.startListenTo();

    input.addMapping('jump-btn', keyState => {
        if (keyState) {
            entity.jump.start();
        } else {
            entity.jump.cancel();
        }
    });

    input.addMapping('right-btn', keyState => {
        entity.go.dir += keyState ? 1 : -1;
    });

    input.addMapping('left-btn', keyState => {
        entity.go.dir += keyState ? -1 : 1;
    });

}

export function setupKeyboard(entity) {
    const input = new keyBoard();

    input.addMapping('Space', keyState => {
        // Fantastic! - 妙！
        /*By such a fantastic Class, now we take over the event of key board input,
         so that we can get how long a key is pressed and draw the canvas semantically.*/
        if (keyState) {
            entity.jump.start();
        } else {
            entity.jump.cancel();
        }
    });

    input.addMapping('ArrowUp', keyState => {
        if (keyState) {
            entity.jump.start();
        } else {
            entity.jump.cancel();
        }
    });

    // input.addMapping('KeyO', keyState => {
    //     // Ep8 - Turbo Mode, I think it is unnecessary.
    // });

    input.addMapping('ArrowRight', keyState => {
        entity.go.dir += keyState ? 1 : -1;
    });

    input.addMapping('ArrowLeft', keyState => {
        entity.go.dir += keyState ? -1 : 1;
    });

    return input;
}
