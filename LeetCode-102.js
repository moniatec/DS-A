// https://leetcode.com/problems/binary-tree-level-order-traversal/

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
var levelOrder = function (root) {
    if (!root) return []
    let queu = [root]
    let arr = []
    while (queu.length > 0) {
        let arrRow = []
        let size = queu.length
        while (size > 0) {
            let node = queu.shift()
            if (node.left) queu.push(node.left)
            if (node.right) queu.push(node.right)
            arrRow.push(node.val)
            size--
        }
        arr.push(arrRow)
    }
    return arr
};
