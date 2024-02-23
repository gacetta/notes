/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */

// Solve using hash map
// Time = O(n)
// Space = O(1) since array is always 26
var isAnagram = function(s, t) {
    // compare lengths
    if (s.length !== t.length) {
        return false;
    }
    
    // create hashmap for entire alphabet
    var freq = new Array(26).fill(0);
    // iterate over both strings concurrently
    for (var i = 0; i < s.length; i++) {
        // use charCodes to count number of appearances of characters
        // appearance in s increases count, in t decreases count
        freq[s.charCodeAt(i) - 'a'.charCodeAt(0)]++;
        freq[t.charCodeAt(i) - 'a'.charCodeAt(0)]--;
    }
    
    // any character whos count is 0 either doesn't exist 
    // or exists with the same frequency in both strings
    for (var i = 0; i < freq.length; i++) {
        if (freq[i] !== 0) {
            return false;
        }
    }
    
    return true;
};

// // less verbose - SORT
// // Time - O(nlogn) 
// // Space = O(1)
// var isAnagram = function(s, t) {
//     // compare length
//     if (s.length != t.length) return false;

//     // sort the two strings
//     const sortS = s.split('').sort().join();
//     const sortT = t.split('').sort().join();

//     // check equality
//     return sortS === sortT;
// };