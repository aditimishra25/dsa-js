var reorderList = function (head) {
  if (!head || !head.next) return;

  // -------------------------
  // STEP 1: Find middle
  // -------------------------
  let slow = head;
  let fast = head;

  while (fast && fast.next) {
    slow = slow.next;
    fast = fast.next.next;
  }

  // -------------------------
  // STEP 2: Reverse second half
  // -------------------------
  let prev = null;
  let curr = slow.next;

  // Cut first half from second half
  slow.next = null;

  while (curr) {
    let nextTemp = curr.next;

    curr.next = prev;

    prev = curr;
    curr = nextTemp;
  }

  // prev is head of reversed second half

  // -------------------------
  // STEP 3: Merge two halves
  // -------------------------
  let first = head;
  let second = prev;

  while (second) {
    let temp1 = first.next;
    let temp2 = second.next;

    first.next = second;
    second.next = temp1;

    first = temp1;
    second = temp2;
  }
};

// ----------------revision-1-----------------------
var reorderList = function (head) {
  if (!head || !head.next) return head;

  let slow = head;
  let fast = head;

  while (fast != null && fast.next != null) {
    slow = slow.next;
    fast = fast.next.next;
  }

  let prev = null;
  let curr = slow.next;
  slow.next = null;

  while (curr) {
    let temp = curr.next;
    curr.next = prev;
    prev = curr;
    curr = temp;
  }

  let first = head;
  let second = prev;

  while (second) {
    let temp1 = first.next;
    let temp2 = second.next;

    first.next = second;
    second.next = temp1;

    first = temp1;
    second = temp2;
  }

};
