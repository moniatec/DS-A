// https://leetcode.com/problems/find-all-duplicates-in-an-array/

/**
 * @param {number[]} nums
 * @return {number[]}
 */
var findDuplicates = function (nums) {
    nums.sort((a, b) => a - b)
    let arr = []
    for (let i = 0; i < nums.length - 1; i++) {
        if (nums[i] === nums[i + 1]) arr.push(nums[i])
    }
    return arr
};