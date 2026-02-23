/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var reverseList = function (head) {
  // prev will eventually become the new head
  let prev = null;

  // curr starts from original head
  let curr = head;

  // Traverse until we reach end of list
  while (curr != null) {
    // Step 1: Store next node
    // Because we are about to break the link
    let nextTemp = curr.next;

    // Step 2: Reverse pointer
    // Current node should now point backward
    curr.next = prev;

    // Step 3: Move prev forward
    prev = curr;

    // Step 4: Move curr forward
    curr = nextTemp;
  }

  // prev is the new head
  return prev;
};
