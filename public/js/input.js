import  keyBoard from './KeyboardState.js'

export function setupKeyboard(entity) {
    const input = new keyBoard()

    input.addMapping('Space', keyState => {
        // Fantastic! - 妙！
        /*By such a fantastic Class, now we take over the event of key board input,
         so that we can get how long a key is pressed and draw the canvas semantically.*/
        if (keyState) {
            entity.jump.start()
        } else {
            entity.jump.cancel()
        }
    })

    input.addMapping('ArrowRight', keyState => {
        entity.go.dir = keyState;
    })

    input.addMapping('ArrowLeft', keyState => {
        entity.go.dir = -keyState;
    })

    return input;
}
