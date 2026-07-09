/**
 * Next Greater Element II (Circular Array)
 *
 * For every element, find the first greater element
 * when moving to the right.
 *
 * Since the array is circular:
 * after the last element we continue from index 0.
 *
 * Example:
 * [1,2,1]
 *
 * Answer:
 * [2,-1,2]
 *
 * Time Complexity: O(n)
 * Space Complexity: O(n)
 *
 * @param {number[]} nums
 * @return {number[]}
 */
var nextGreaterElements = function (nums) {
  const n = nums.length;

  // Default every answer to -1.
  // If no greater element is found, -1 remains.
  let result = new Array(n).fill(-1);

  // Monotonic decreasing stack.
  //
  // Stores INDICES whose next greater element
  // has not been found yet.
  let stack = [];

  // Traverse twice to simulate circular behavior.
  //
  // Example:
  // [1,2,1]
  //
  // behaves like:
  // [1,2,1,1,2,1]
  //
  // without actually creating a new array.
  for (let i = 0; i < 2 * n; i++) {
    // Wrap around the array.
    //
    // Example:
    // i = 3 -> idx = 0
    // i = 4 -> idx = 1
    // i = 5 -> idx = 2
    let idx = i % n;

    // If current number is greater than the number
    // represented by the stack top,
    // then current number is the answer
    // for that waiting index.
    while (stack.length > 0 && nums[idx] > nums[stack[stack.length - 1]]) {
      // Remove the index that was waiting.
      let prevIdx = stack.pop();

      // Current number is its next greater element.
      result[prevIdx] = nums[idx];
    }

    // IMPORTANT:
    //
    // Only push indices during the FIRST pass.
    //
    // First pass:
    // 0 ... n-1
    //
    // Second pass:
    // only used to help unresolved elements
    // find answers after wrapping around.
    if (i < n) {
      stack.push(idx);
    }
  }

  return result;
};

// ------------------------revision-1---------------------------------
var nextGreaterElements = function (nums) {
  let n = nums.length;
  let stack = [];
  let result = new Array(n).fill(-1);

  for (let i = 0; i < 2 * n; i++) {
    let idx = i % n;
    while (stack.length > 0 && nums[idx] > nums[stack[stack.length - 1]]) {
      let prevIdx = stack.pop();
      result[prevIdx] = nums[idx];
    }

    if (i < n) {
      stack.push(idx);
    }
  }

  return result;
};
