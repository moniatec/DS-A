// https://leetcode.com/problems/find-first-and-last-position-of-element-in-sorted-array/

/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var searchRange = function (nums, target) {
    if (nums.length === 0) return [-1, -1]
    let arr = []
    let i = 0
    let j = nums.length - 1
    while (i <= j) {
        if (nums[i] === target && nums[j] === target) {
            arr.push(i)
            arr.push(j)
            break
        } else if (nums[i] < target) i++
        else if (nums[j] > target) j--
        else break

    }
    if (arr.length === 0) return [-1, -1]
    return arr
};