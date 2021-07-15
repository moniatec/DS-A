// https://leetcode.com/problems/top-k-frequent-elements/

/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */
var topKFrequent = function (nums, k) {
    let obj = {}
    let arr = []
    let ans = []
    nums.sort((a, b) => a - b)
    let i = 0
    while (i < nums.length) {
        let c = 1
        let j = i + 1
        while (nums[i] === nums[j]) {
            c++
            j++
        }
        obj[nums[i]] = c
        i = j
    }
    for (let key in obj) arr.push([key, obj[key]])
    arr.sort((a, b) => b[1] - a[1])
    for (let i = 0; i < k; i++) ans[i] = arr[i][0]

    return ans

};