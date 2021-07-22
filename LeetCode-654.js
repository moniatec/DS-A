// https://leetcode.com/problems/maximum-binary-tree/

/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {number[]} nums
 * @return {TreeNode}
 */



var constructMaximumBinaryTree = function (nums) {
    if (nums.length === 0) return null
    let root = new TreeNode(Math.max(...nums));
    let rootIndex = nums.indexOf(root.val);
    root.left = constructMaximumBinaryTree(nums.slice(0, rootIndex));
    root.right = constructMaximumBinaryTree(nums.slice(rootIndex + 1, nums.length));

    return root
};