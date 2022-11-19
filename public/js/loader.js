const IS_DEV = location.host.indexOf('github.io') < 0

export const PUBLIC_PATH = IS_DEV ? '' : 'https://juniortour.github.io/es6-mario/public/dist'

export function loadImage(url) {
    return new Promise(resolve => {
        const image = new Image();
        image.addEventListener('load', () => {
            resolve(image)
        });

        image.src = PUBLIC_PATH + url
    })
}

export function loadJSON(url) {
    return fetch(PUBLIC_PATH + url)
        .then(r => r.json());
}
