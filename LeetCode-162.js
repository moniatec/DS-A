// https://leetcode.com/problems/find-peak-element/

/**
 * @param {number[]} nums
 * @return {number}
 */
var findPeakElement = function (nums) {
    if (nums.length === 1) return 0
    let i = 0

    while (i < nums.length) {
        if (nums[0] > nums[1]) return 0
        if (nums[i - 1] < nums[i] && nums[i] > nums[i + 1]) return i
        i++
    }
    return nums.length - 1
};