/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */

var middleNode = function(head) {

    // Both start at head
    let slow = head;
    let fast = head;

    // Move fast twice as fast as slow
    while (fast !== null && fast.next !== null) {
        slow = slow.next;           // move 1 step
        fast = fast.next.next;      // move 2 steps
    }

    // When fast reaches end,
    // slow will be at middle
    return slow;
};
