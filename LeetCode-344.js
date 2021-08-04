// https://leetcode.com/problems/reverse-string/

/**
 * @param {character[]} s
 * @return {void} Do not return anything, modify s in-place instead.
 */
var reverseString = function (s) {
    let len = s.length
    for (let i = 0; i < len / 2; i++) {
        let mid = s[i]
        s[i] = s[len - i - 1]
        s[len - i - 1] = mid
    }
    return s
};