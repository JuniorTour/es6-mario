import {loadImage} from '../loader.js';
import SpriteSheet from '../SpriteSheet.js';

const CHARS = ' !"#$%&\'()*+,-./0123456789:;<=>?@ABCDEFGHIJKLMNOPQRSTUVWXYZ[\\]^_`abcdefghijklmnopqrstuvwxyz{|}~';


class Font {
    constructor(spriteSheet, size) {
        this.sprites = spriteSheet;
        this.size = size;
    }

    print(text, context, x, y) {
        [...text].forEach((char, pos) => {
            this.sprites.draw(char, context, x + pos * this.size, y);
        })
    }
}

export function loadFont() {
    return loadImage('/assets/img/font.png')
        .then(img => {
            const fontSprite = new SpriteSheet(img);

            const size = 8, rowLen = img.width;
            const colNum = img.width / size;
            for (let [index, char] of [...CHARS].entries()) {

                const x  = (index * size) % rowLen;
                const y = Math.floor(index / colNum)*size;

                fontSprite.define(char, x, y, size, size);
            }

            return new Font(fontSprite, size);
        })
}