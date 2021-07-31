// https://leetcode.com/problems/merge-two-sorted-lists/

/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
var mergeTwoLists = function (l1, l2) {
    let root1 = l1
    let root2 = l2
    let root = new ListNode(0, null)
    if (root1 === null) {
        return root2
    } else if (root2 === null) {
        return root1
    } else if (root1 === null && root2 === null) {
        return root
    }

    if (root1.val < root2.val) {
        root.val = root1.val
        root1 = root1.next
    } else {
        root.val = root2.val
        root2 = root2.next
    }
    let head = root

    while (root1 && root2) {
        if (root1.val < root2.val) {
            root.next = root1
            root1 = root1.next
            root = root.next
        } else {
            root.next = root2
            root2 = root2.next
            root = root.next
        }


    }

    while (root1) {
        root.next = root1
        root1 = root1.next
        root = root.next
    }
    while (root2) {
        root.next = root2
        root2 = root2.next
        root = root.next
    }

    return head

};