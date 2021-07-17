// https://leetcode.com/problems/single-number-ii/

/**
 * @param {number[]} nums
 * @return {number}
 */
var singleNumber = function (nums) {
    nums.sort((a, b) => a - b)
    let i = 0
    while (i < nums.length) {
        if (i === nums.length - 1 || nums[i] !== nums[i + 2]) return nums[i]
        else i = i + 3
    }

};