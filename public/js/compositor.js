export default class Compositor {
    constructor() {
        this.layers = [];
    }

    draw(threeLayersContext, camera) {
        this.layers.forEach((layer, index) => {
            const context = threeLayersContext[index]
            context.clearRect(0,0, 256, 256)
            layer(context, camera);
        })
    }
}
