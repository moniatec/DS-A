// https://leetcode.com/problems/maximum-level-sum-of-a-binary-tree/

/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number}
 */
var maxLevelSum = function (root) {
    if (!root) return 1
    let q = [root]
    let max = root.val
    let level = 1
    let l = 0
    while (q.length > 0) {
        let c = q.length
        let sum = 0
        l++
        while (c > 0) {
            let node = q.shift()
            sum += node.val
            if (node.left) q.push(node.left)
            if (node.right) q.push(node.right)
            c--
        }
        if (sum > max) {
            max = sum
            level = l
        }
    }
    return level
};