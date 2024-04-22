/**
 * @param {string} ransomNote
 * @param {string} magazine
 * @return {boolean}
 */
var canConstruct = function(ransomNote, magazine) {
    let charCount = new Map()

    // count occurrence of characters in magazine
    for(const char of magazine){
        charCount.set(char, (charCount.get(char) || 0) + 1)
    }

    // Check if ransomNote can be constructed from characters in magazine
    for(const char of ransomNote) {
        if(!charCount.has(char) || charCount.get(char) === 0) {
            return false
        }
        charCount.set(char, charCount.get(char) -1)
    }
    return true
};