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
var detectCycle = function (head) {
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

// The surprising trick
// After they meet:
// Put one pointer back at head.
// Keep the other pointer at the meeting point.
// Move both one step at a time.
// ptr1 = head;
// ptr2 = slow; // meeting point

// while (ptr1 !== ptr2) {
//     ptr1 = ptr1.next;
//     ptr2 = ptr2.next;
// }

// return ptr1;

// They meet exactly at the cycle start.

// The question is: Why?

// The Math

// Let:

// a = distance from head to cycle start
// b = distance from cycle start to meeting point
// c = remaining distance in the cycle

// Diagram:

// head
//  |
//  v
// ---- a ----> [cycle start]
//                |
//                | b
//                v
//           [meeting point]
//                |
//                | c
//                v
//           back to cycle start

// Cycle length:

// b + c
// Distance traveled by slow

// Slow moves:

// a + b

// before meeting.

// Distance traveled by fast

// Fast moves twice as fast:

// 2(a + b)
// Key fact

// When they meet, fast has traveled some whole number of extra cycles compared to slow.

// So:

// 2(a + b) - (a + b)
// = n(b + c)

// which simplifies to:

// a + b = n(b + c)

// Take the simplest case:

// n = 1

// Then:

// a + b = b + c

// Subtract b:

// a = c

// This is the magic result.

// What does a = c mean?

// Recall:

// a = head → cycle start
// c = meeting point → cycle start

// around the cycle.

// So:

// Distance from head to cycle start
// =
// Distance from meeting point to cycle start
// Therefore

// Put:

// Pointer 1 at head
// Pointer 2 at meeting point

// Move both one step.

// After a steps:

// Pointer 1 reaches cycle start
// Pointer 2 also reaches cycle start

// They meet there.

// Visual Example
// 1 → 2 → 3 → 4 → 5
//         ↑     ↓
//         ← ← ←

// Cycle start:

// 3

// Suppose slow/fast meet at:

// 5

// Then:

// head → 3 = 2 steps
// 5 → 3 = 2 steps around cycle

// Move both one step:

// head side: 1 → 2 → 3
// meeting side: 5 → 4 → 3

// Meet at:

// 3

// which is the cycle start.

// The one sentence to remember

// For Linked List Cycle II:

// When slow and fast meet,
// distance(head → cycle start)
// =
// distance(meeting point → cycle start)

// That's why resetting one pointer to head and moving both one step finds the cycle's entry node.

// -------------------revision-1--------------------------
var detectCycle = function (head) {
  if (!head || !head.next) return null;

  let slow = head;
  let fast = head;

  while (fast != null && fast.next != null) {
    slow = slow.next;
    fast = fast.next.next;

    if (slow === fast) {
      let pointer = head;

      while (pointer != slow) {
        pointer = pointer.next;
        slow = slow.next;
      }
      return pointer;
    }
  }
  return null;
};
