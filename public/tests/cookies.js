if (navigator.cookieEnabled) {
    if (document.cookie !== undefined) {
        return [0, "Test passed."];
    }
    else {
        return [1, "Test partially passed. Cookies are enabled, but document.cookie is undefined."];
    }
}
else if (navigator.cookieEnabled === undefined) return [2, "Test failed."];
else if (navigator.cookieEnabled === false) return [3, "Test failed, most likely because cookies are disabled in user settings."];
else return [4, "Unknown test result."];
