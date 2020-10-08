import SpriteSheet from "../SpriteSheet";
import {createAnim} from "../anim";
import {loadImage, loadJSON} from "../loader";

export function loadSpriteSheet(name) {
    return loadJSON(`/assets/sprites/${name}.json`)
        .then(sheetSpec => Promise.all([
            sheetSpec,
            loadImage(sheetSpec.imageURL)
        ]))
        .then(([sheetSpec, image]) => {
            const sprites = new SpriteSheet(
                image,
                sheetSpec.tileW,
                sheetSpec.tileH);

            if (sheetSpec.tiles) {
                sheetSpec.tiles.forEach(tileSpec => {
                    sprites.defineTile(
                        tileSpec.name, ...tileSpec.index);
                })
            }

            if (sheetSpec.frames) {
                sheetSpec.frames.forEach(frameSpec => {
                    sprites.define(frameSpec.name, ...frameSpec.rect);
                })
            }

            if (sheetSpec.animations) {
                sheetSpec.animations.forEach(animSpec => {
                    const animation = createAnim(animSpec.frames, animSpec.frameLen);

                    sprites.defineAnim(animSpec.name, animation);
                })
            }

            return sprites;
        });
}
