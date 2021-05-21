// https://leetcode.com/problems/even-odd-tree/

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
 * @return {boolean}
 */
var isEvenOddTree = function (root) {
    let q = [root]
    let level = 0
    while (q.length > 0) {
        let prev = null
        let n = q.length
        while (n > 0) {
            let node = q.shift()
            if (level % 2 === 0) {
                if (node.val % 2 === 0) return false
                if (prev !== null && prev.val >= node.val) return false
            }
            if (level % 2 !== 0) {
                // console.log(node)
                if (node.val % 2 !== 0) return false
                if (prev !== null && prev.val <= node.val) return false
            }
            if (node.left) q.push(node.left)
            if (node.right) q.push(node.right)
            n--
            prev = node
        }
        level++
    }
    return true