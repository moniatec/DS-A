// https://leetcode.com/problems/maximum-binary-tree-ii/


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
var insertIntoMaxTree = function (root, val) {
    if (!root) {
        root = new TreeNode(val)
    }
    if (val > root.val) {
        let node = new TreeNode(val)
        node.left = root
        root = node
    }
    if (val < root.val) {
        if (!root.left && !root.right) root.right = insertIntoMaxTree(root.right, val)
        // else if(!root.right && root.left) root.right=insertIntoMaxTree(root.right, val)
        // else if(root.right && !root.left) root.left=insertIntoMaxTree(root.left, val)
        else {
            root.right = insertIntoMaxTree(root.right, val)
        }
    }
    return root
};