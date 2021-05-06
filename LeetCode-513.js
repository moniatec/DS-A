// https://leetcode.com/problems/find-bottom-left-tree-value/

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
var findBottomLeftValue = function (root) {
    let q = [root]
    let arr = []
    while (q.length > 0) {
        let c = q.length
        let a = []
        while (c > 0) {
            let node = q.shift()
            a.push(node.val)
            if (node.left) q.push(node.left)
            if (node.right) q.push(node.right)
            c--
        }
        arr.push(a)
    }
    return arr[arr.length - 1][0]
};