import '../scss/index.scss';

/*
TESTS

Tests return 0 if fully supported.
They return 1 if partially supported.
They return 2 if not supported at all.
They return 3 if because of a user setting.
They return 4 if unknown.
*/
const tests = [
    {
        name: "Cookies",
        codeName: "cookies",
        test: "/tests/cookies.js",
        description: "",
        element: "#cookiesTest",
    }
]

// TODO: put it into html
tests.forEach((test) => {
    fetch(test.test).then((response) => {
        return response.text()
    })
    .then((text) => {
        const fn = new Function(text);
        const result = fn();
        console.log(result);
    })
    .catch((error) => {
        console.error(error);
    });
});