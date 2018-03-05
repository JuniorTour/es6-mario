function getPlatform(ua) {
    if (/windows/i.test(ua)) {
        return ['Windows', 0];
    }

    if (/android/i.test(ua)) {
        const match = ua.match(/android\s([0-9\.]*)/i);
        let ver = match ? parseFloat(match[1]) : 0;
        return ['Android', ver];
    }

    // iOS detection from: http://stackoverflow.com/a/9039885/177710
    if (/iP(hone|od|ad)/.test(ua) && !window.MSStream) {
        const match = (navigator.appVersion).match(/OS (\d+)_(\d+)_?(\d+)?/);
        let ver = match ? parseInt(match[1], 10) : 0;
        return ['iOS', ver];
    }

    if (ua.indexOf('Mac') > -1) {
        return ['Mac', 0];
    }

    return ['unknown', 0];
}

export function getUserAgent() {
    let uaInfo = {};

    const ua = navigator.userAgent;

    // TODO Better Compatibility Detect
    try {
        [uaInfo.platform, uaInfo.ver] = getPlatform(ua);
    } catch (err) {
        [uaInfo.platform, uaInfo.ver] = ['Windows', 0];
    }

    // alert(uaInfo.platform, uaInfo.ver);

    return uaInfo;
}
