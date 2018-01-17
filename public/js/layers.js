
function drawBackground(background,context,sprites) {
    background.ranges.forEach(([x1,x2,y1,y2]) => {
        for (let x = x1; x < x2; x++) {
            for (let y = y1; y < y2; y++) {
                sprites.drawTile(background.title, context, x, y)
            }
        }
    })
}

export function createBackgroundLayer(backgrounds, sprites) {
    const buffer = document.createElement('canvas')
    buffer.width = 356;
    buffer.height = 486;

    backgrounds.forEach(background => {
        drawBackground(background, buffer.getContext('2d'), sprites)
    })

    // High-Order Function
    return function drawBackgroundLayer(context) {
        context.drawImage(buffer, 0, 0)
    }
}
