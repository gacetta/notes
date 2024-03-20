/**
 * @param {string[]} strs
 * @return {string}
 */
var longestCommonPrefix = function(strs) {
    prefix = '';
    if (strs.length === 0) return prefix;

    // loop through characters
    for (let i = 0; i < strs[0].length; i++) {
        // loop through strings (str)
        for (let j = 0; j < strs.length; j++) {
            if (strs[j][i] !== strs[0][i]) {
                return prefix;
            }
        }
        prefix += strs[0][i];
    }
    return prefix;

};