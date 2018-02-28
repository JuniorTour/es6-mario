export function detectMobileMode() {
    return window.matchMedia('(max-width: 1024px)').matches;
}
