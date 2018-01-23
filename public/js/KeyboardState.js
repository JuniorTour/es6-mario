const PRESSED = 1, RELEASED = 0;

export default class KeyboardState {
    constructor() {
        // hold the current state of a given key
        this.keyStates = new Map()

        // holds the callback functions for a key code
        this.keyMap = new Map()
    }

    addMapping(keyCode, callBack) {
        this.keyMap.set(keyCode, callBack)
    }

    handleEvent(event) {
        const {keyCode} = event

        if (!this.keyMap.has(keyCode)) {
            return
        }

        event.preventDefault()

        const keyState = event.type === 'keydown' ? PRESSED : RELEASED

        if (this.keyStates.get(keyCode) === keyState) {
            // avoid triggering multiple times
            return
        }

        this.keyStates.set(keyCode, keyState)
        console.log(this.keyStates)

        this.keyMap.get(keyCode)(keyState)
    }

    listenTo(window) {
        ['keydown', 'keyup'].forEach(eventName => {
            window.addEventListener(eventName, event => {
                this.handleEvent(event)
            })
        })
    }
}
