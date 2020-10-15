import {loadJSON} from "../loader.js";
import MusicPlayer from "../MusicPlayer";

export function loadMusicSheet(name) {
    return loadJSON(`/assets/sound/${name}.json`)
        .then(musicSheet => {
            // console.log(musicSheet)
            const musicPlayer = new MusicPlayer()
            for (const [name, track] of Object.entries(musicSheet)) {
                musicPlayer.addTrack(name, track.url)
            }

            return musicPlayer
        })
}
