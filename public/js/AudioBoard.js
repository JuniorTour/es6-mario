export default class AudioBoard {
    constructor () {
        // this.context = context
        // not hardcore audioContext, but send it as a param below,
        // so than we can change the context easily.
        this.buffers = new Map()
    }

    addAudio(name, buffer) {
        this.buffers.set(name, buffer)
    }

    playAudio(name, audioContext) {
        const source = audioContext.createBufferSource()

        // TODO Global Volume Setting
        // const gainNode = audioContext.createGain();
        // gainNode.gain.setValueAtTime(0.3, audioContext.currentTime);
        // source.connect(gainNode)
        // gainNode.connect(audioContext.destination);

        source.connect(audioContext.destination)
        source.buffer = this.buffers.get(name)
        source.start(0)
    }
}
