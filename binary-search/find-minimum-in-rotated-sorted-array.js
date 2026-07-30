// In a rotated sorted array, at least one half is always sorted. I compare nums[mid] with nums[right]. If nums[mid] > nums[right], the rotation point—and therefore the minimum—must lie to the right of mid, so I move left = mid + 1. Otherwise, the right half is sorted, and mid could itself be the minimum, so I keep it by setting right = mid. I continue shrinking the range until left == right, which is the minimum.

/**
 * Time  : O(log n)
 * Space : O(1)
 */

var findMin = function (nums) {
  // Binary Search boundaries
  let left = 0;
  let right = nums.length - 1;

  // We are NOT searching for a target.
  // We are shrinking the search space until
  // only one element (the minimum) remains.
  while (left < right) {
    // Standard binary search midpoint
    let mid = left + Math.floor((right - left) / 2);

    // Compare mid with the RIGHTMOST element.
    //
    // Why?
    // Because the rightmost element tells us
    // which side contains the rotation.
    //
    // Example:
    //
    // 4 5 6 7 0 1 2
    //         ^
    //       right
    //
    // If nums[mid] > nums[right],
    // minimum must be on the RIGHT side.

    if (nums[mid] > nums[right]) {
      // Mid cannot be the minimum.
      // Everything on the left side is larger.
      //
      // Search the right half.
      left = mid + 1;
    } else {
      // nums[mid] <= nums[right]
      //
      // Right half is sorted.
      //
      // The minimum could be:
      // 1. mid itself
      // 2. somewhere on the left
      //
      // Therefore DON'T discard mid.
      right = mid;
    }
  }

  // left == right
  // Only one element remains.
  return nums[left];
};
