// https://leetcode.com/problems/count-complete-tree-nodes/

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
var countNodes = function (root) {
    if (!root) return 0
    let q = [root]
    let count = 0
    while (q.length > 0) {
        let i = q.length
        while (i > 0) {
            let node = q.shift()
            count++
            if (node.left) {
                q.push(node.left)
                if (node.right) q.push(node.right)
            }

            i--
        }
    }
    return count
};