// https://leetcode.com/problems/binary-tree-level-order-traversal-ii/

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
var levelOrderBottom = function (root) {
    if (!root) return []
    let q = [root]
    let array = []
    while (q.length > 0) {
        let arr = []
        let c = q.length
        while (c > 0) {
            let node = q.shift()
            arr.push(node.val)
            if (node.left) q.push(node.left)
            if (node.right) q.push(node.right)
            c--
        }
        array.unshift(arr)
    }
    return array
};