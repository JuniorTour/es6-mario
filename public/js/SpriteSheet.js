export default class SpriteSheet {
    constructor(image, width, height) {
        this.image = image
        this.width = width
        this.height = height
        this.tiles = new Map()
    }

    define(name, x, y, width, height) {
        // 明确定义一块位于sprite sheet中x,y位置width, height的sprite
        const buffer = document.createElement('canvas')
        buffer.width = width
        buffer.height = height
        buffer
            .getContext('2d')
            .drawImage(
                this.image,
                x,
                y,
                width,
                height,
                0,
                0,
                width,
                height)
        this.tiles.set(name, buffer)
    }

    defineTile(name, x, y) {
        // 粗略定义一块位于sprite sheet中x,y位置宽度固定的sprite
        this.define(name, x * this.width, y * this.height, this.width, this.height)
    }

    draw(name, context, x, y) {
        const buffer = this.tiles.get(name)
        context.drawImage(buffer, x, y)
    }

    drawTile(name, context, x, y) {
        const buffer = this.tiles.get(name)
        context.drawImage(buffer, x * this.width, y * this.height)
    }
}

