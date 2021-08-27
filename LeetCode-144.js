// https://leetcode.com/problems/binary-tree-preorder-traversal/

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
//recursive
// var preorderTraversal = function(root, arr=[]) {
//     if(root === null) return arr
//     arr.push(root.val)
//     if(root.left) preorderTraversal(root.left, arr)
//     if(root.right) preorderTraversal(root.right, arr)
//     return arr
// };

//iterative
var preorderTraversal = function (root) {
    if (!root) return []
    let arr = []
    let q = []
    q.push(root)
    while (q.length > 0) {
        let node = q.shift()
        console.log(node)
        arr.push(node.val)
        if (node.left) q.push(node.left)
        if (node.right) q.push(node.right)
    }
    return arr
}