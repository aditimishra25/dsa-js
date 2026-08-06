// -----------------------------Approach 1: Brute Force (Recursion)-----------------------------
/**
 * Time Complexity: O(2^n) (approximately)
 * Space Complexity: O(n) (recursion stack)
 *
 * Idea:
 * helper(i) = Length of the Longest Increasing Subsequence
 *             starting from index i.
 *
 * Since the LIS can start from ANY index,
 * we try every index as the starting point.
 */

var lengthOfLIS = function (nums) {
  let answer = 0;

  // Try every index as the starting point
  for (let i = 0; i < nums.length; i++) {
    answer = Math.max(answer, helper(nums, i));
  }

  return answer;
};

function helper(nums, currIndex) {
  // At minimum, current element itself forms a subsequence
  let answer = 1;

  // Try every future index
  for (let next = currIndex + 1; next < nums.length; next++) {
    // Can only extend the subsequence if it is increasing
    if (nums[next] > nums[currIndex]) {
      answer = Math.max(answer, 1 + helper(nums, next));
    }
  }

  return answer;
}

// -----------------------------Approach 2: Memoization (Top-Down DP)-----------------------------
/**
 * Time Complexity: O(n²)
 * Space Complexity: O(n)
 *
 * memo[i] = LIS starting from index i
 */

var lengthOfLIS = function (nums) {
  let memo = new Array(nums.length);

  let answer = 0;

  // Try every index as starting point
  for (let i = 0; i < nums.length; i++) {
    answer = Math.max(answer, helper(nums, i, memo));
  }

  return answer;
};

function helper(nums, currIndex, memo) {
  // Already solved
  if (memo[currIndex] !== undefined) {
    return memo[currIndex];
  }

  // Current element itself
  let answer = 1;

  // Try every future index
  for (let next = currIndex + 1; next < nums.length; next++) {
    if (nums[next] > nums[currIndex]) {
      answer = Math.max(answer, 1 + helper(nums, next, memo));
    }
  }

  // Save before returning
  memo[currIndex] = answer;

  return answer;
}

// -----------------------------Approach 3: Bottom-Up DP-----------------------------
/**
 * Time Complexity: O(n²)
 * Space Complexity: O(n)
 *
 * dp[i] = Length of LIS starting from index i
 */

var lengthOfLIS = function (nums) {
  let n = nums.length;

  // Every number alone is an increasing subsequence
  let dp = new Array(n).fill(1);

  // LIS can start from any index
  let answer = 1;

  // Build DP from right to left
  for (let i = n - 1; i >= 0; i--) {
    // Try every future index
    for (let next = i + 1; next < n; next++) {
      // Only consider increasing numbers
      if (nums[next] > nums[i]) {
        // Either:
        // 1. Keep current answer
        // 2. Take current number + LIS from next
        dp[i] = Math.max(dp[i], 1 + dp[next]);
      }
    }

    // Overall LIS may start from any index
    answer = Math.max(answer, dp[i]);
  }

  return answer;
};
