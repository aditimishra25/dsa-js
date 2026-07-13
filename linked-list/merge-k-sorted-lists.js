/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val === undefined ? 0 : val)
 *     this.next = (next === undefined ? null : next)
 * }
 */

/**
 * Merge K Sorted Lists
 *
 * Idea:
 * Keep merging lists in pairs until only one list remains.
 *
 * Example:
 *
 * [
 *   L1,
 *   L2,
 *   L3,
 *   L4
 * ]
 *
 * Round 1:
 * merge(L1, L2) -> A
 * merge(L3, L4) -> B
 *
 * [
 *   A,
 *   B
 * ]
 *
 * Round 2:
 * merge(A, B)
 *
 * [
 *   Final List
 * ]
 *
 * Time: O(N log K)
 * N = total number of nodes
 * K = number of lists
 */
var mergeKLists = function (lists) {
  // No lists provided
  if (lists.length === 0) {
    return null;
  }

  // Keep merging until only one list remains
  while (lists.length > 1) {
    let mergedLists = [];

    // Merge lists in pairs
    for (let i = 0; i < lists.length; i += 2) {
      let l1 = lists[i];

      // If there is no pair, use null
      let l2 = i + 1 < lists.length ? lists[i + 1] : null;

      // Merge the two lists
      let merged = mergeTwoLists(l1, l2);

      // Store merged result
      mergedLists.push(merged);
    }

    // Use merged results for next round
    lists = mergedLists;
  }

  // Only one list remains
  return lists[0];
};

/**
 * Merge Two Sorted Lists
 *
 * Example:
 *
 * 1 -> 4 -> 5
 * 1 -> 3 -> 4
 *
 * Result:
 *
 * 1 -> 1 -> 3 -> 4 -> 4 -> 5
 */
function mergeTwoLists(l1, l2) {
  // Dummy node helps avoid edge cases
  let dummy = new ListNode(-1);

  // Tail always points to last node
  // in merged list
  let tail = dummy;

  // Compare both lists until one ends
  while (l1 !== null && l2 !== null) {
    // Take smaller value
    if (l1.val <= l2.val) {
      tail.next = l1;

      l1 = l1.next;
    } else {
      tail.next = l2;

      l2 = l2.next;
    }

    // Move tail forward
    tail = tail.next;
  }

  // Attach remaining nodes

  if (l1 !== null) {
    tail.next = l1;
  }

  if (l2 !== null) {
    tail.next = l2;
  }

  // Return actual head
  return dummy.next;
}

// ----------------revision-1-----------------------
var mergeKLists = function (lists) {
  if (lists.length == 0) return null;

  while (lists.length > 1) {
    let mergedLists = [];
    for (let i = 0; i < lists.length; i += 2) {
      let l1 = lists[i];
      let l2 = i + 1 < lists.length ? lists[i + 1] : null;

      let merged = mergeTwoLists(l1, l2);
      mergedLists.push(merged);
    }
    lists = mergedLists
  }

  return lists[0]
};

mergeTwoLists = (list1, list2) => {
  let dummy = new ListNode(-1);
  let tail = dummy;

  while (list1 != null && list2 != null) {
    if (list1.val > list2.val) {
      tail.next = list2;
      list2 = list2.next;
    } else {
      tail.next = list1;
      list1 = list1.next;
    }
    tail = tail.next;
  }

  if (list1 != null) tail.next = list1;
  if (list2 != null) tail.next = list2;

  return dummy.next;
};
