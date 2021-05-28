// https://leetcode.com/problems/search-in-rotated-sorted-array/

/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var search = function (nums, target) {
    let len = nums.length
    for (let i = 0; i < len / 2; i++) {
        if (nums[i] == target) {
            return i
        }
        if (nums[len - i - 1] == target) {
            return (len - i - 1)
        }
    }
    return -1
};