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
        test: "/tests/cookies.js",
        points: 50,
    },
    {
        name: "BigInt",
        test: "/tests/bigint.js",
        points: 50,
    }
]

export { tests };