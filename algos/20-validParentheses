/**
 * @param {string} s
 * @return {boolean}
 */
const isValid = function(s) {
    if (s.length % 2) return false; 
    const pairs = {
        ')': '(',
        '}': '{',
        ']': '['
    }  
    const stack = [];

    for (let i = 0; i < s.length; i++) {
        if (s[i] in pairs) {
            if (stack.length > 0 && stack[stack.length - 1] === pairs[s[i]]) stack.pop();
            else return false;
        }
        else stack.push(s[i]);
    }
    return stack.length === 0;
};