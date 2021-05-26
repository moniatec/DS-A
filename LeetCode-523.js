// https://leetcode.com/problems/continuous-subarray-sum/

/**
 * @param {number[]} nums
 * @param {number} k
 * @return {boolean}
 */
var checkSubarraySum = function (nums, k) {

    for (let i = 0; i < nums.length; i++) {
        let sum = nums[i]
        let j = i + 1
        while (j < nums.length) {
            sum += nums[j]
            j++
            if (sum % k === 0 || sum === k) return true
        }
    }
    return false
};