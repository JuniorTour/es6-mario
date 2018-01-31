export default class SpriteSheet {
    constructor(image, width, height) {
        this.image = image;
        this.width = width;
        this.height = height;
        this.tiles = new Map();
        this.animations = new Map();
    }

    defineAnim(name, animation) {
        this.animations.set(name, animation);
    }

    define(name, x, y, width, height) {
        // 明确定义一块位于sprite sheet中x,y位置width, height的sprite
        const buffers = [false, true].map(flip => {
            const buffer = document.createElement('canvas');
            buffer.width = width;
            buffer.height = height;

            const context = buffer.getContext('2d');

            if (flip) {
                // Mirror the canvas
                context.scale(-1, 1);
                context.translate(-width, 0);
            }

            context.drawImage(
                    this.image,
                    x,
                    y,
                    width,
                    height,
                    0,
                    0,
                    width,
                    height);

            return buffer;
        });

        this.tiles.set(name, buffers);
    }

    defineTile(name, x, y) {
        // 粗略定义一块位于sprite sheet中x,y位置宽度固定的sprite
        this.define(name, x * this.width, y * this.height, this.width, this.height);
    }

    draw(name, context, x, y, flip = false) {
        const buffer = this.tiles.get(name)[flip ? 1 : 0];
        context.drawImage(buffer, x, y);
    }

    drawTile(name, context, x, y) {
        this.draw(name, context, x*this.width, y*this.height);
    }

    drawAnim(name, context, x, y, distance) {
        const anim = this.animations.get(name);
        this.drawTile(anim(distance), context, x, y);
    }
}

