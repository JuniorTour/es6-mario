export default class Timer {
    constructor(deltaTime = 1/60) {
        this.animationFrameID = null

        let accumulatedTime = 0;
        let lastTime = 0;

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
        this.animationFrameID = requestAnimationFrame(this.updateProxy);
    }

    start() {
        this.enqueue();
    }

    stop() {
        if (this.animationFrameID) {
            window.cancelAnimationFrame(this.animationFrameID)
        }
    }
}
