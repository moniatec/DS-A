// https://leetcode.com/problems/binary-search-tree-to-greater-sum-tree/


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
 * @return {TreeNode}
 */
var bstToGst = function (root) {
    let sum = 0
    bstSum(root, sum)
    return root
};

function bstSum(root, sum) {
    if (!root) return
    if (root.right && root.left) {

        root.val += bstSum(root.right, sum)
        sum = root.val
        return bstSum(root.left, sum)

    } else if (root.right && !root.left) {

        root.val += bstSum(root.right, sum)
        sum = root.val
    }
    else if (root.left && !root.right) {

        root.val += sum
        sum = root.val
        bstSum(root.left, sum)
    } else {
        root.val += sum
        sum = root.val

    }

    return sum
}