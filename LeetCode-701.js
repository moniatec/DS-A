// https://leetcode.com/problems/insert-into-a-binary-search-tree/

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
 * @param {number} val
 * @return {TreeNode}
 */
var insertIntoBST = function (root, val) {
    if (root === null) {
        let node = new TreeNode(val)
        return node
    }
    if (root.val > val) {
        if (root.left) insertIntoBST(root.left, val)
        else {
            let node = new TreeNode(val)
            root.left = node
        }
    }
    if (root.val < val) {
        if (root.right) insertIntoBST(root.right, val)
        else {
            let node = new TreeNode(val)
            root.right = node
        }
    }
    return root
};