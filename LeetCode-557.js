// https://leetcode.com/problems/reverse-words-in-a-string-iii/

/**
 * @param {string} s
 * @return {string}
 */
var reverseWords = function (s) {
    let arr = s.split(" ")
    for (let i = 0; i < arr.length; i++) {
        arr[i] = reverse(arr[i])

    }
    return arr.join(" ")
};

function reverse(s) {
    let s1 = ''
    for (let i = s.length - 1; i >= 0; i--) {
        s1 = s1.concat(s[i])
    }
    return s1
}