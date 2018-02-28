const PRESSED = 1, RELEASED = 0;

export default class TouchPadState {
    constructor(buttons) {
        this.buttons = buttons;

        this.keyStates = new Map();

        this.keyMap = new Map()
    }

    addMapping(code, callBack) {
        this.keyMap.set(code, callBack)
    }

    handleEvent(event) {
        const codeId = event.currentTarget.id;

        if (!this.keyMap.has(codeId)) {
            return;
        }

        event.preventDefault();

        const keyState = event.type === 'touchstart' ? PRESSED : RELEASED;

        if (this.keyStates.get(codeId) === keyState) {
            // avoid triggering multiple times
            return;
        }

        this.keyStates.set(codeId, keyState);

        this.keyMap.get(codeId)(keyState);
    }

    startListenTo() {
        ['touchstart', 'touchend'].forEach(evtName => {
            this.buttons.forEach(btn => {
                btn.addEventListener(evtName, evt=> {
                    this.handleEvent(evt);
                })
            })
        })
    }

}
