export function createWaitingLayer(font, logoImg) {
    let showClickTip = 0
    return function drawDashboard(context) {
        context.drawImage(
            logoImg,
            30,
            24,
            200,
            90
        )
        if (showClickTip <= 60) {
            font.print('CLICK TO START', context, 76, 140);
            showClickTip++
        } else if (showClickTip > 90) {
            showClickTip = 0
        } else if (showClickTip > 60) {
            showClickTip++
        }
    }
}
