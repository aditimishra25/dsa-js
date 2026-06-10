/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var detectCycle = function(head) {

    // Slow and fast pointers start at head
    let slow = head;
    let fast = head;

    // Phase 1: Detect if cycle exists
    while (fast !== null && fast.next !== null) {

        // Move slow by 1 step
        slow = slow.next;

        // Move fast by 2 steps
        fast = fast.next.next;

        // Cycle detected
        if (slow === fast) {

            // Phase 2:
            // Start another pointer from head
            let pointer = head;

            // Move both one step at a time
            while (pointer !== slow) {
                pointer = pointer.next;
                slow = slow.next;
            }

            // Where they meet = cycle start
            return pointer;
        }
    }

    // No cycle found
    return null;
};

// Why does this work?

// The proof is mathematical, but the interview rule is:

// After slow and fast meet:

// 1 pointer starts from head
// 1 pointer starts from meeting point

// Move both 1 step at a time

// They meet at cycle start