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
        element: "#cookies",
        result: 4,
        points: 50,
        status: "Unknown test result"
    }
]

export { tests };