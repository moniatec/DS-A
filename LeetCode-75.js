https://leetcode.com/problems/sort-colors/

/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var sortColors = function (nums) {
    let count0 = count1 = count2 = 0
    for (let i = 0; i < nums.length; i++) {
        switch (nums[i]) {
            case (0):
                count0++
                break
            case (1):
                count1++
                break
            case (2):
                count2++
                break
        }
    }
    for (let i = 0; i < count0; i++) {
        nums[i] = 0
    }
    for (let j = count0; j < count1 + count0; j++) {
        nums[j] = 1
    }
    for (let k = count0 + count1; k < count2 + count0 + count1; k++) {
        nums[k] = 2
    }
    return nums
};