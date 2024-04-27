/**
 * @param {string} a
 * @param {string} b
 * @return {string}
 */
var addBinary = function(a, b) {
    let res = "";
    let carry = 0;

    a = a.split("").reverse().join("");
    b = b.split("").reverse().join("");

    for (let i = 0; i < Math.max(a.length, b.length); i++) {
        const digitA = i < a.length ? parseInt(a[i]) : 0;
        const digitB = i < b.length ? parseInt(b[i]) : 0;

        let total = digitA + digitB + carry;
        let char = String(total % 2);
        res = char + res;
        carry = Math.floor(total / 2);
    }

    if (carry) {
        res = "1" + res;
    }

    return res;
};