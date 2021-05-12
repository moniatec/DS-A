// https://leetcode.com/problems/next-greater-node-in-linked-list/

/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {number[]}
 */
var nextLargerNodes = function (head) {
    let arr = []
    while (head) {
        let node = head.next
        while (node) {
            if (node.val > head.val) {
                arr.push(node.val)
                break
            }
            node = node.next
        }
        if (node === null) arr.push(0)
        head = head.next
    }
    return arr
};