// https://leetcode.com/problems/subsets/

/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var subsets = function (nums) {




    let res = [];
    function dfs(nums, index, path, res) {
        res.push([...path]);
        for (let i = index; i < nums.length; i += 1) {
            path.push(nums[i]);
            dfs(nums, i + 1, path, res);
            path.pop();
        }
    }
    dfs(nums, 0, [], res);
    return res;
};