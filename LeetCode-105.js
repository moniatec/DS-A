// https://leetcode.com/problems/construct-binary-tree-from-preorder-and-inorder-traversal/

/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {number[]} preorder
 * @param {number[]} inorder
 * @return {TreeNode}
 */
var buildTree = function (preorder, inorder) {
    if (preorder.length === 0 && inorder.length === 0) return null

    let root = new TreeNode(preorder[0])
    let index = inorder.indexOf(preorder[0])
    let inorderLeft = inorder.slice(0, index)
    let inorderRight = inorder.slice(index + 1, inorder.length)
    let preorderLeft = preorder.slice(1, inorderLeft.length + 1)
    let preorderRight = preorder.slice(inorderLeft.length + 1, preorder.length)
    root.left = buildTree(preorderLeft, inorderLeft)
    root.right = buildTree(preorderRight, inorderRight)
    return root
};