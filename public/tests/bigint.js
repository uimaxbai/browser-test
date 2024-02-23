// test for bigint

function main() {
    if (typeof BigInt !== "undefined" && typeof BigInt(1) === "bigint") {
        return [0, "Test passed."];
    } else {
        return [2, "Test failed."];
    }
}