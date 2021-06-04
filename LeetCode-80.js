// https://leetcode.com/problems/remove-duplicates-from-sorted-array-ii/

/**
 * @param {number[]} nums
 * @return {number}
 */
var removeDuplicates = function (nums) {
    let i = 0
    while (i < nums.length) {
        if (nums[i] === nums[i + 2]) {
            nums.splice(i + 2, 1)
        } else i = i + 1
    }
    return nums.length
};