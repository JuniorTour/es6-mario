export const TOTAL_LABELS = 16

// Sequence generator function (commonly referred to as "range", e.g. Clojure, PHP etc)
const range = (start, stop, step) => Array.from(
    { length: (stop - start) / step + 1},
    (_, i) => start + (i * step)
)

let allLabels = []
function getLabels(part, len) {
    if (allLabels.length === 0) {
        allLabels = range(1, TOTAL_LABELS, 1)
    }
    const start = (part-1)*len
    const end = start+len
    return allLabels.slice(start, end)
}

export const CONTROLLERS = {
    ArrowUp: {
        key: 'ArrowUp',
        labels: getLabels(1, 4)
    },
    ArrowRight: {
        key: 'ArrowRight',
        labels: getLabels(2, 4)
    },
    ArrowLeft: {
        key: 'ArrowLeft',
        labels: getLabels(3, 4)
    },
    NoMove: {
        key: 'NoMove',
        labels: getLabels(4, 4)
    },
}

export default class Controller {
    constructor() {}

    triggerEvent(name, code) {
        window.dispatchEvent(new KeyboardEvent(name,  {code}));
    }

    keydown(code) {
        log(`**** keydown: ${code} ****`)
        this.triggerEvent('keydown', code)
    }

    keyup(code) {
        log(`keyup: ${code} ****`)
        this.triggerEvent('keyup', code)
    }
}
