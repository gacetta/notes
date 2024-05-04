/**
 * @param {string[]} strs
 * @return {string}
 */
var longestCommonPrefix = function(strs) {
    let prefix = ''; // Initialize the common prefix string

    // Loop through each character of the first string in strs
    for (let charIndex = 0; charIndex < strs[0].length; charIndex++) {
        const currentCharacter = strs[0][charIndex]; // Get the current character being checked
        // Loop through each string in strs starting from the second string
        for (let stringIndex = 0; stringIndex < strs.length; stringIndex++) {
            const currentString = strs[stringIndex]; // Get the current string being checked
            // Check if the character at the same index in the current string is different
            // from the character in the same position in the first string
            if (currentString[charIndex] !== currentCharacter) {
                return prefix; // If different, return the current common prefix
            }
        }
        prefix += currentCharacter; // If all strings have the same character at the current index, add it to the prefix
    }
    return prefix; // Return the longest common prefix found
};