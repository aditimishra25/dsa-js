/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

var hasCycle = function (head) {
  // If list is empty or only one node
  if (!head || !head.next) return false;

  let slow = head;
  let fast = head;

  // Move until fast reaches end
  while (fast !== null && fast.next !== null) {
    slow = slow.next; // 1 step
    fast = fast.next.next; // 2 steps

    // If they meet -> cycle exists
    if (slow === fast) {
      return true;
    }
  }

  // If fast reaches null -> no cycle
  return false;
};

// --------------revision-1-------------------------
var hasCycle = function (head) {
  if (!head || !head.next) return false;

  let slow = head;
  let fast = head;

  while (fast != null && fast.next != null) {
    slow = slow.next;
    fast = fast.next.next;

    if (slow == fast) return true;
  }
  return false;
};

// -----------------------revision-2----------------------------------
var hasCycle = function (head) {
  if (!head || !head.next) return false;

  let slow = head;
  let fast = head;

  while (fast != null && fast.next != null) {
    slow = slow.next;
    fast = fast.next.next;

    if(slow == fast) return true
  }

  return false;
};
