export function autoPlayOniOS() {
    const bgmAudioEl = document.getElementById('bgm');

    function forceSafariAutoPlay() {
        bgmAudioEl.load();
        bgmAudioEl.play();
    }

    window.addEventListener('touchstart', forceSafariAutoPlay);

    bgmAudioEl.addEventListener('play', () => {
        console.log('BGM Played!');

        window.removeEventListener('touchstart', forceSafariAutoPlay);
    });
}
