import  keyBoard from './KeyboardState.js'

export function setupTouchController(entity) {
    const input = new keyBoard();

    input.addMapping('ArrowRight', keyState => {
        entity.go.dir += keyState ? 1 : -1;
    });

    input.addMapping('ArrowLeft', keyState => {
        entity.go.dir += keyState ? -1 : 1;
    });

    const controllerJump = document.getElementById('controller-jump');
    const controllerLeft = document.getElementById('controller-left');

    controllerJump.onclick = (keyState) => {
        if (keyState) {
            entity.jump.start();
        } else {
            entity.jump.cancel();
        }
    };

    controllerLeft.ontouchstart = (keyState) => {
        entity.go.dir += 1;
    };

    controllerLeft.ontouchend = (keyState) => {
        entity.go.dir += -1;
    };
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
