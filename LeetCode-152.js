// https://leetcode.com/problems/maximum-product-subarray/

/**
 * @param {number[]} nums
 * @return {number}
 */
var maxProduct = function (nums) {
    let pro = 1
    for (let i = 0; i < nums.length; i++) {
        pro = pro * nums[i]
    }
    for (let i = 0; i < nums.length; i++) {
        let proI = nums[i]
        if (proI > pro) pro = proI
        let j = i + 1
        while (j < nums.length) {
            proI *= nums[j]
            if (proI > pro) pro = proI
            j++
        }
    }
    return pro
};