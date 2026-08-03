/**
 *
 * Intuition:
 * ----------
 * Instead of merging the arrays, we try to partition them into:
 *
 * Left Half | Right Half
 * such that:
 * 1. Left half contains exactly half of the elements.
 * 2. Every element in Left <= Every element in Right.
 * We binary search only on the smaller array to find the correct partition.
 *
 * Time Complexity:
 * O(log(min(m, n)))
 *
 * Space Complexity:
 * O(1)
 */

var findMedianSortedArrays = function (nums1, nums2) {
  // ---------------------------------------------------
  // Always binary search on the smaller array.
  // This keeps partitionB valid and minimizes work.
  // ---------------------------------------------------
  if (nums1.length > nums2.length) {
    return findMedianSortedArrays(nums2, nums1);
  }

  let m = nums1.length;
  let n = nums2.length;

  let low = 0;
  let high = m;

  // Number of elements that should be on the left side
  let totalLeft = Math.floor((m + n + 1) / 2);

  while (low <= high) {
    // -----------------------------------------------
    // Partition in nums1
    // -----------------------------------------------
    let partitionA = Math.floor((low + high) / 2);

    // Remaining elements must come from nums2
    let partitionB = totalLeft - partitionA;

    // -----------------------------------------------
    // Boundary values around the partitions
    //
    //          partitionA
    // nums1: 1 3 | 8 9
    //
    // leftMaxA = 3
    // rightMinA = 8
    // -----------------------------------------------

    let leftMaxA = partitionA === 0 ? -Infinity : nums1[partitionA - 1];
    let rightMinA = partitionA === m ? Infinity : nums1[partitionA];

    let leftMaxB = partitionB === 0 ? -Infinity : nums2[partitionB - 1];
    let rightMinB = partitionB === n ? Infinity : nums2[partitionB];

    // -----------------------------------------------
    // Found the correct partition
    // -----------------------------------------------
    if (leftMaxA <= rightMinB && leftMaxB <= rightMinA) {
      // -----------------------------
      // Odd total number of elements
      // Left side has one extra element
      // -----------------------------
      if ((m + n) % 2 === 1) {
        return Math.max(leftMaxA, leftMaxB);
      }

      // -----------------------------
      // Even total number of elements
      // Median is average of the two
      // boundary values
      // -----------------------------
      return (Math.max(leftMaxA, leftMaxB) + Math.min(rightMinA, rightMinB)) / 2;
    }

    // -----------------------------------------------
    // We took too many elements from nums1.
    // Move partitionA left.
    // -----------------------------------------------
    else if (leftMaxA > rightMinB) {
      high = partitionA - 1;
    }

    // -----------------------------------------------
    // We took too few elements from nums1.
    // Move partitionA right.
    // -----------------------------------------------
    else {
      low = partitionA + 1;
    }
  }

  // This line should never execute because
  // a valid partition is guaranteed.
  return 0;
};
