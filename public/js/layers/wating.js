export function createWaitingLayer(font, logoImg) {
    return function drawDashboard(context) {
        context.drawImage(
            logoImg,
            30,
            24,
            200,
            90
        )
        font.print('CLICK TO START', context, 76, 140);
    }
}
