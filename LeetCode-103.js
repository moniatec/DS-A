// https://leetcode.com/problems/binary-tree-zigzag-level-order-traversal/

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
 * @return {number[][]}
 */
var zigzagLevelOrder = function (root) {
    if (!root) return []
    let arr = []
    let q = [root]
    let l = 1
    while (q.length > 0) {
        let c = q.length
        let ar = []
        while (c > 0) {
            let node = q.shift()
            if (node.left) q.push(node.left)
            if (node.right) q.push(node.right)
            if (l % 2 === 0) {
                ar.unshift(node.val)
            } else {
                ar.push(node.val)
            }
            c--
        }
        arr.push(ar)
        l++
    }
    return arr
};