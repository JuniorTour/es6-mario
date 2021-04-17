const Camera = {
    width: 224,
    height: 224,
}

const HIGHLIGHT_CLASS = 'highlight'
const EXAMPLE_IMG_WRAPPER_CLASS = 'example-img-wrapper'

export default class UI {
    constructor() {
        const {canvas, ctx} = this.createCanvas()
        this.canvas = canvas
        this.canvasCtx = ctx
        this.tipModal = document.getElementsByClassName('tip-modal')[0]
    }

    createCanvas() {
        const canvas = document.createElement('canvas')
        canvas.width = Camera.width;
        canvas.height = Camera.height;
        const ctx = canvas.getContext('2d');
        return {canvas, ctx}
    }

    getImageDataFromTensor(image, width = Camera.width, height = Camera.height) {
        const imageData = new ImageData(width, height);
        const data = image.dataSync();
        for (let i = 0; i < height * width; ++i) {
            const j = i * 4;
            imageData.data[j + 0] = (data[i * 3 + 0] + 1) * 127;
            imageData.data[j + 1] = (data[i * 3 + 1] + 1) * 127;
            imageData.data[j + 2] = (data[i * 3 + 2] + 1) * 127;
            imageData.data[j + 3] = 255;
        }
        return imageData
    }

    getImgSrc(tensorImg) {
        this.canvasCtx.putImageData(this.getImageDataFromTensor(tensorImg), 0, 0)
        return this.canvas.toDataURL("image/png");
    }

    drawThumb(tensorImg, classId, key) {
        const keyWrapper = document.querySelector(`.${EXAMPLE_IMG_WRAPPER_CLASS}.${key}`)
        if (keyWrapper) {
            const img = document.createElement('img')
            img.classList.add(`label-${classId}`)

            this.canvasCtx.putImageData(this.getImageDataFromTensor(tensorImg), 0, 0)
            img.src = this.getImgSrc(tensorImg)

            keyWrapper.appendChild(img);
        }
    }

    setHighlightExample(key, label) {
        const allHighlightEls = document.querySelectorAll(`.${EXAMPLE_IMG_WRAPPER_CLASS} .${HIGHLIGHT_CLASS}`)
        if (allHighlightEls && allHighlightEls.length) {
            allHighlightEls.forEach(el => el.classList.remove(HIGHLIGHT_CLASS))
        }
        const keyExample = document.querySelector(`.example-img-wrapper.${key} .label-${label}`)
        if (keyExample) {
            keyExample.classList.add(HIGHLIGHT_CLASS)
        }
    }

    showTip(msg, ms) {
        if (!this.tipModal) {
            return
        }
        this.tipModal.style.top = '50%'
        this.tipModal.innerHTML = msg
        setTimeout(() => {
            this.hideTip()
        }, ms)
    }

    hideTip() {
        if (!this.tipModal) {
            return
        }
        this.tipModal.style.top = '999em'
    }
}
