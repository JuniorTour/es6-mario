/*
    const audioContext = new window.AudioContext()
    const audioBoard = new AudioBoard(audioContext)
    const loadAudio = createAudioLoader(audioContext)
    loadAudio('/assets/audio/stomp.ogg')
        .then(buffer => {
            console.log(buffer)
            audioBoard.addAudio('stomp', buffer)
        })
    loadAudio('/assets/audio/jump.ogg')
        .then(buffer => {
            console.log(buffer)
            audioBoard.addAudio('jump', buffer)
        })
* */

import {loadJSON} from "../loader";
import AudioBoard from "../AudioBoard";

export function loadAudioBoard(name, audioContext) {
    const loadAudio = createAudioLoader(audioContext)
    return loadJSON(`/assets/sound/${name}.json`)
        .then(audioSheet => {
            // console.log(audioSheet)
            // console.log(audioContext)
            const audioBoard = new AudioBoard()
            const fx = audioSheet.fx
            const jobs = []
            Object.keys(fx).forEach(name => {
                const url = fx[name].url
                const job = loadAudio(url)
                    .then(audioBuffer => {
                        audioBoard.addAudio(name, audioBuffer)
                    })
                jobs.push(job)
            })
            return Promise.all(jobs)
                .then(() => audioBoard)
        })
}

export function createAudioLoader(context) {
    return function loadAudio(url) {
        return fetch(url)
            .then(resp => {
                return resp.arrayBuffer()
            })
            .then(arrayBuffer => {
                return context.decodeAudioData(arrayBuffer)
            })
    }

}
