if (navigator.cookieEnabled) {
    if (document.cookie !== undefined) {
        return 0;
    }
    else {
        return 1;
    }
}
else if (navigator.cookieEnabled === undefined) return 2;
else if (navigator.cookieEnabled === false) return 3;
else return 4;
