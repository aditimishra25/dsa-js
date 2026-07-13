/**
 * Remove Nth Node From End
 */
var removeNthFromEnd = function (head, n) {
  // Dummy handles edge cases like removing head
  let dummy = new ListNode(0);
  dummy.next = head;

  let slow = dummy;
  let fast = dummy;

  // Move fast n steps ahead
  for (let i = 0; i < n; i++) {
    fast = fast.next;
  }

  // Move both until fast reaches last node
  while (fast.next !== null) {
    slow = slow.next;
    fast = fast.next;
  }

  // Remove node after slow
  slow.next = slow.next.next;

  return dummy.next;
};

// Why does this work?

// The entire solution is based on:
// If fast stays n nodes ahead of slow,
// then when fast reaches the end,
// slow will be immediately before
// the nth node from the end.
// That's why this is called a fixed-gap two-pointer problem. The gap never changes after we create it.

// ----------------revision-1--------------------------
// ----Approach-1(brute force)
var removeNthFromEnd = function (head, n) {
  let length = 0;
  let curr = head;

  while (curr) {
    length++;
    curr = curr.next;
  }

  if (length == n) return head.next;

  let positionToDeleteFromStart = length - n;

  curr = head;
  for (let i = 1; i < positionToDeleteFromStart; i++) {
    curr = curr.next;
  }

  curr.next = curr.next.next;

  return head;
};

// ----Approach-1(optimal)
var removeNthFromEnd = function (head, n) {
  let dummy = new ListNode(0);
  dummy.next = head;

  let slow = dummy;
  let fast = dummy;

  for (let i = 0; i < n; i++) {
    fast = fast.next;
  }

  while (fast.next !== null) {
    slow = slow.next;
    fast = fast.next;
  }

  // Remove node after slow
  slow.next = slow.next.next;

  return dummy.next;
};
