// https://leetcode.com/problems/all-elements-in-two-binary-search-trees/


/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root1
 * @param {TreeNode} root2
 * @return {number[]}
 */
var getAllElements = function (root1, root2) {
    let tab1 = []
    let tab2 = []

    let tab = []
    tab1 = arrTree(root1, tab1)
    tab2 = arrTree(root2, tab2)
    console.log(tab1)
    console.log(tab2)
    if (tab1.length === 0) return tab2
    if (tab2.length === 0) return tab1
    let i = 0
    let j = 0
    while (i < tab1.length && j < tab2.length) {
        if (tab1[i] < tab2[j]) {
            tab.push(tab1[i])
            i++
        } else {
            tab.push(tab2[j])
            j++
        }
    }
    while (i < tab1.length) {
        tab.push(tab1[i])
        i++
    }
    while (j < tab2.length) {
        tab.push(tab2[j])
        j++
    }
    return tab
};

function arrTree(root, tab) {
    if (!root) return tab
    arrTree(root.left, tab)
    tab.push(root.val)
    arrTree(root.right, tab)
    return tab
}