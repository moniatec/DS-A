// https://leetcode.com/problems/swap-nodes-in-pairs/

/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */

var swapPairs = function (head) {
    let headR = head
    while (head) {
        let val = head.val
        if (head.next) {
            head.val = head.next.val
            head.next.val = val
            head = head.next.next
        } else {
            break
        }
    }
    return headR
}