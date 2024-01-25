function getCookie(name) {
    let cookieString = RegExp("" + name + "[^;]+").exec(document.cookie);
    return decodeURIComponent(!!cookieString ? cookieString.toString().replace(/^[^=]+./, "") : "");
}

function setCookie(name, value, validUntil) {
    const date = new Date();
    date.setTime(validUntil);
    const cookie = `${name}=${value || ""}; expires=${date.toUTCString()}; path=/`;

    document.cookie = cookie;
}
