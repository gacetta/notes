/**
 * @param {string} a - The first binary string
 * @param {string} b - The second binary string
 * @return {string} - The sum of the two binary strings as a binary string
 */
var addBinary = function(a, b) {
    // Initialize an empty string to store the result
    let res = "";
    // Initialize a variable to keep track of the carry
    let carry = 0;

    // Reverse both input strings to simplify addition from right to left
    a = a.split("").reverse().join("");
    b = b.split("").reverse().join("");

    // Iterate through each digit of the longer binary string
    for (let i = 0; i < Math.max(a.length, b.length); i++) {
        // Extract the current digits of a and b (or 0 if the string is shorter)
        const digitA = i < a.length ? parseInt(a[i]) : 0;
        const digitB = i < b.length ? parseInt(b[i]) : 0;

        // Calculate the total sum of the current digits and carry
        let total = digitA + digitB + carry;
        // Calculate the current digit of the result
        let char = String(total % 2);
        // Append the current digit to the result
        res = char + res;
        // Update the carry for the next iteration
        carry = Math.floor(total / 2);
    }

    // If there is a remaining carry after the loop, append it to the result
    if (carry) {
        res = "1" + res;
    }

    // Return the final result
    return res;
};
