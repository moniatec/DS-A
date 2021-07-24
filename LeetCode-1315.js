// https://leetcode.com/problems/sum-of-nodes-with-even-valued-grandparent/

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
var sumEvenGrandparent = function (root, sum = 0) {
    if (!root) return 0
    let sumEven = (root, pr, grp) => {
        if (!root) return
        if (root.left) sumEven(root.left, root, pr)
        if (grp !== null && grp.val % 2 === 0) sum += root.val

        if (root.right) sumEven(root.right, root, pr)
        return sum
    }
    return sumEven(root, pr = null, grp = null)

};