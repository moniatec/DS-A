// https://leetcode.com/problems/deepest-leaves-sum/


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
var deepestLeavesSum = function (root) {
    let q = [root]
    let dep = 0
    let arr = []
    let count = 0
    while (q.length > 0) {
        dep++
        let c = q.length
        count = c
        while (c > 0) {
            node = q.shift()
            arr.push(node.val)
            // if(!node) break
            if (node.left) q.push(node.left)
            if (node.right) q.push(node.right)
            c--
        }
    }
    console.log(arr)
    console.log(count)
    let sum = 0
    let i = arr.length - 1
    while (count > 0) {
        sum += arr[i]
        i--
        count--
    }
    return sum
};