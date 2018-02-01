import  keyBoard from './KeyboardState.js'

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
    })
    input.addMapping('ArrowUp', keyState => {
        if (keyState) {
            entity.jump.start();
        } else {
            entity.jump.cancel();
        }
    });

    input.addMapping('KeyO', keyState => {
        // Ep8 - Turbo Mode, I think it is unnecessary.
    });

    input.addMapping('ArrowRight', keyState => {
        // entity.go.dir = keyState;
        entity.go.dir += keyState ? 1 : -1;
    });

    input.addMapping('ArrowLeft', keyState => {
        // entity.go.dir = -keyState;
        entity.go.dir += keyState ? -1 : 1;
    });

    return input;
}
