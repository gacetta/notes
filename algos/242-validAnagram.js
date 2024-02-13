/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */

// less verbose - SORT
// Time - O(nlogn) 
// Space = O(1)
var isAnagram = function(s, t) {
    // compare length
    if (s.length != t.length) return false;

    // sort the two strings
    const sortS = s.split('').sort().join();
    const sortT = t.split('').sort().join();

    // check equality
    return sortS === sortT;
};