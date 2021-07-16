// https://leetcode.com/problems/find-largest-value-in-each-tree-row/

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
 * @return {number[]}
 */
var largestValues = function (root) {
    if (!root) return []
    let arr = []
    let q = [root]
    while (q.length > 0) {
        let c = q.length
        let max = q[0].val
        while (c > 0) {
            let node = q.shift()
            if (node.val > max) max = node.val
            c--
            if (node.left) q.push(node.left)
            if (node.right) q.push(node.right)
        }
        arr.push(max)
    }
    return arr
};