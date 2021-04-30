// https://leetcode.com/problems/binary-tree-right-side-view/

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


var rightSideView = function (root) {
    if (!root) return []
    let arr = []
    let q = [root]  //q=[1]
    while (q.length > 0) {
        let c = q.length //
        arr.push(q[c - 1].val) //arr=[1,3]
        while (c > 0) {
            let node = q.shift()//node=3 q=[5]
            if (node.left) q.push(node.left) // q=[5]
            if (node.right) q.push(node.right)//q=[5,4]
            c-- //c=0
        }
    }
    return arr
}