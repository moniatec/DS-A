// https://leetcode.com/problems/n-ary-tree-level-order-traversal/

/**
 * // Definition for a Node.
 * function Node(val,children) {
 *    this.val = val;
 *    this.children = children;
 * };
 */

/**
 * @param {Node} root
 * @return {number[][]}
 */
var levelOrder = function (root) {
    if (!root) return []
    let q = [root]
    let array = []
    while (q.length > 0) {
        let arr = []
        let i = q.length
        while (i > 0) {
            let node = q.shift()
            arr.push(node.val)
            for (let j = 0; j < node.children.length; j++) {
                q.push(node.children[j])
            }
            i--
        }
        array.push(arr)
    }
    return array
};