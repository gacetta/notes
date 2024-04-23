/**
 * @param {string} s
 * @return {number}
 */
var longestPalindrome = function(s) {
    // Build a Map of character counts
    const charMap = new Map();
    let result = 0;
    let oddFound = false;

    // Count the occurrences of each character
    for (const char of s) {
        charMap.set(char, (charMap.get(char) || 0) + 1);
    }

    // Calculate the length of the longest palindrome
    for (const [char, charCount] of charMap) {
        if (charCount % 2 === 0) {
            result += charCount;
        } else {
            oddFound = true;
            result += charCount - 1;
        }
    }

    // If an odd count is found, add one more character to the result
    if (oddFound) {
        result += 1;
    }

    return result;
};