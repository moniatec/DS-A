// https://leetcode.com/problems/single-element-in-a-sorted-array/

/**
 * @param {number[]} nums
 * @return {number}
 */
var singleNonDuplicate = function (nums) {
    if (nums.length === 1) return nums[0]
    let l = 0
    let r = nums.length - 1
    while (l < r) {
        if (nums[r] !== nums[r - 1]) return nums[r]
        if (nums[l] !== nums[l + 1]) return nums[l]
        r -= 2
        l += 2
    }
    return nums[r]
};