export default class Timer {
    constructor(deltaTime = 1/60) {
        let accumulatedTime = 0;
        // let lastTime = 0;
        // TODO:BUG The first time update too many times if the lastTime = 0 .
        let lastTime = performance.now();

        this.updateProxy =  (time) => {
            accumulatedTime += (time - lastTime) / 1000;

            if (accumulatedTime > 1) {
                /* A hack to Solve the time accumulate
                * when it is running background.
                * So that our computer wont be slow down by this,
                * after long time of running this in background.*/
                accumulatedTime = 1;
            }

            while (accumulatedTime > deltaTime) {
                this.update(deltaTime);

                accumulatedTime -= deltaTime;
            }

            lastTime = time;

            this.enqueue();
        }
    }

    enqueue() {
        requestAnimationFrame(this.updateProxy);
    }

    start() {
        this.enqueue();
    }
}
