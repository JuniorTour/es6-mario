export default class EvenEmitter {
    constructor() {
        this.listners = []
    }

    listen(name, callback) {
        this.listners.push({
            name,
            callback
        })
    }

    emit(name, ...payload) {
        this.listners.forEach((listener) => {
            if (listener.name === name) {
                listener.callback(...payload)
            }
        })
    }
}
