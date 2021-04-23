/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} n
 * @return {ListNode}
 */
var removeNthFromEnd = function (head, n) {
    let node = head
    let node1 = head
    let next = head.next
    let l = 1

    while (node.next) {
        node = node.next
        l++
    }
    if (l === n) {
        head = head.next
        return head
    }
    for (let i = 0; i < l - n - 1; i++) {
        node1 = node1.next
        next = node1.next
    }

    if (l >= 1) {
        node1.next = next.next

        return head
    }
    return null
};