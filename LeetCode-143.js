//https://leetcode.com/problems/reorder-list/

/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {void} Do not return anything, modify head in-place instead.
 */
var reorderList = function (head) {
    let curr = head;
    let arr = [curr];
    while (curr?.next) {
        curr = curr.next;
        arr.push(curr);
    }
    let mid = arr.length / 2;
    let len = arr.length;

    for (let i = 0, j = len - 1; i < mid && j !== i; i++, j--) {

        let temp = arr[i].next;
        if (arr[i]?.next !== arr[j]) {
            arr[i].next = arr[j] || null;
            arr[j].next = temp;
            arr[j - 1].next = null;
        }
    }
};