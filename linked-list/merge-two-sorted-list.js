/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */

var mergeTwoLists = function (list1, list2) {
  // Dummy node to simplify logic
  let dummy = new ListNode(-1);

  // Tail will build the new list
  let tail = dummy;

  // Traverse both lists
  while (list1 !== null && list2 !== null) {
    if (list1.val <= list2.val) {
      tail.next = list1; // attach smaller
      list1 = list1.next; // move pointer
    } else {
      tail.next = list2;
      list2 = list2.next;
    }

    tail = tail.next; // move tail forward
  }

  // If one list is remaining, attach it
  if (list1 !== null) {
    tail.next = list1;
  }

  if (list2 !== null) {
    tail.next = list2;
  }

  // Return merged list (skip dummy)
  return dummy.next;
};

// ----------------revision-1-----------------------------
var mergeTwoLists = function (list1, list2) {
  let dummy = new ListNode(-1);
  let tail = dummy;

  while (list1 !== null && list2 !== null) {
    if (list1.val > list2.val) {
      tail.next = list2;
      list2 = list2.next;
    } else {
      tail.next = list1;
      list1 = list1.next;
    }
    tail = tail.next;
  }

  if (list1 !== null) {
    tail.next = list1;
  }

  if (list2 !== null) {
    tail.next = list2;
  }

  return dummy.next;
};

// -----------------revision-2----------------------------------
var mergeTwoLists = function (list1, list2) {
  let dummy = new ListNode(-1);
  let tail = dummy;

  while (list1 !== null && list2 !== null) {
    if (list1.val > list2.val) {
      tail.next = list2;
      list2 = list2.next;
    } else {
      tail.next = list1;
      list1 = list1.next;
    }
    tail = tail.next
  }

  if(list1 !== null){
    tail.next = list1;
  }

  if(list2 !== null){
    tail.next = list2
  }
  return dummy.next;
};
