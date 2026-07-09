/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
var nextGreaterElement = function (nums1, nums2) {
  // Step 1: Create a map to store next greater for each number in nums2
  let map = new Map();

  // Step 2: Stack for monotonic decreasing order
  let stack = [];

  // Step 3: Traverse nums2
  for (let i = 0; i < nums2.length; i++) {
    // While current element is greater than stack top
    while (stack.length > 0 && nums2[i] > stack[stack.length - 1]) {
      let smaller = stack.pop();

      // Current number is next greater for popped number
      map.set(smaller, nums2[i]);
    }

    // Push current element into stack
    stack.push(nums2[i]);
  }

  // Step 4: Remaining elements in stack have no greater element
  while (stack.length > 0) {
    map.set(stack.pop(), -1);
  }

  // Step 5: Build result for nums1
  let result = [];

  for (let num of nums1) {
    result.push(map.get(num));
  }

  return result;
};

// ------------------------revision-1-----------------------
var nextGreaterElement = function (nums1, nums2) {
  let map = new Map();

  let stack = [];

  for (let i = 0; i < nums2.length; i++) {
    while (stack.length > 0 && nums2[i] > stack[stack.length - 1]) {
      map.set(stack.pop(), nums2[i]);
    }
    stack.push(nums2[i]);
  }

  while (stack.length > 0) {
    map.set(stack.pop(), -1);
  }
  let result = [];

  for (let num of nums1) {
    result.push(map.get(num));
  }
  return result;
};

// -----------------------revision-2-----------------------
/**
 * Next Greater Element I
 *
 * nums1 is a subset of nums2.
 * For each element in nums1, find its next greater element in nums2.
 *
 * Time Complexity: O(n + m)
 * n = nums1.length
 * m = nums2.length
 *
 * Space Complexity: O(m)
 *
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
var nextGreaterElement = function (nums1, nums2) {
  // Stores next greater element for every index in nums2.
  // Default is -1 because some elements may not have a greater element.
  let result = new Array(nums2.length).fill(-1);

  // Monotonic decreasing stack.
  // Stores indices whose next greater element has not been found yet.
  let stack = [];

  // Process nums2 from left to right
  for (let i = 0; i < nums2.length; i++) {
    // If current number is greater than the number
    // represented by the stack top, then current number
    // is the answer for that previous index.
    while (stack.length > 0 && nums2[i] > nums2[stack[stack.length - 1]]) {
      // Remove the waiting index
      let prevIndex = stack.pop();

      // Current number is its next greater element
      result[prevIndex] = nums2[i];
    }

    // Current index now waits for its own next greater element
    stack.push(i);
  }

  // Build:
  // value -> next greater value
  //
  // Example:
  // 1 -> 3
  // 3 -> 4
  // 4 -> -1
  // 2 -> -1
  let map = new Map();

  for (let i = 0; i < nums2.length; i++) {
    map.set(nums2[i], result[i]);
  }

  // Build answer for nums1
  let answer = [];

  for (let num of nums1) {
    answer.push(map.get(num));
  }

  return answer;
};

// ------------------------revision-3---------------------------------
var nextGreaterElement = function (nums1, nums2) {
  let stack = [];
  let result = new Array(nums2.length).fill(-1);

  for (let i = 0; i < nums2.length; i++) {
    while (stack.length > 0 && nums2[i] > nums2[stack[stack.length - 1]]) {
      let prevIndex = stack.pop();
      result[prevIndex] = nums2[i];
    }
    stack.push(i);
  }

  let map = new Map();
  for (let i = 0; i < nums2.length; i++) {
    map.set(nums2[i], result[i]);
  }

  let answer = [];
  for(num of nums1){
    answer.push(map.get(num))
  }

  return answer;
};

nextGreaterElement([4, 1, 2], [1, 3, 4, 2]); //[-1,3,-1]
