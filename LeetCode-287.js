// https://leetcode.com/problems/find-the-duplicate-number/

/**
 * @param {number[]} nums
 * @return {number}
 */
var findDuplicate = function (nums) {
    for (let i = 0; i < nums.length; i++) {
        let j = i + 1
        while (nums[i] !== nums[j] && j < nums.length) j++
        if (j < nums.length) return nums[j]
    }
};