// -----------------------------Approach 1 - Brute Force-----------------------------
/**
 * Time : O(2^n)
 * Space: O(n)
 */

var rob = function (nums) {
  if (nums.length === 1) return nums[0];

  return Math.max(helper(nums, 0, nums.length - 2), helper(nums, 1, nums.length - 1));
};

function helper(nums, start, end) {
  if (start > end) return 0;

  let robCurrent = nums[start] + helper(nums, start + 2, end);

  let skipCurrent = helper(nums, start + 1, end);

  return Math.max(robCurrent, skipCurrent);
}

// -----------------------------Approach 2 - Memoization (Top Down)-----------------------------
/**
 * Time : O(n)
 * Space: O(n)
 */

var rob = function (nums) {
  if (nums.length === 1) return nums[0];

  return Math.max(robRange(nums, 0, nums.length - 2), robRange(nums, 1, nums.length - 1));
};

function robRange(nums, start, end) {
  let memo = new Array(nums.length);

  return helper(nums, start, end, memo);
}

function helper(nums, i, end, memo) {
  if (i > end) return 0;

  if (memo[i] !== undefined) {
    return memo[i];
  }

  let robCurrent = nums[i] + helper(nums, i + 2, end, memo);

  let skipCurrent = helper(nums, i + 1, end, memo);

  memo[i] = Math.max(robCurrent, skipCurrent);

  return memo[i];
}

// -----------------------------Approach 3 - Bottom-Up DP  (Most Common)-----------------------------
/**
 * Time : O(n)
 * Space: O(n)
 */

var rob = function (nums) {
  // Edge case:
  // Only one house exists
  if (nums.length === 1) {
    return nums[0];
  }

  // Solve both possible ranges
  return Math.max(robRange(nums, 0, nums.length - 2), robRange(nums, 1, nums.length - 1));
};

// Solves normal House Robber for houses [start...end]
function robRange(nums, start, end) {
  // Extra two spaces because we access dp[i+2]
  let dp = new Array(nums.length + 2).fill(0);

  // Build DP from right to left
  for (let i = end; i >= start; i--) {
    // Option 1:
    // Rob current house
    let robCurrent = nums[i] + dp[i + 2];

    // Option 2:
    // Skip current house
    let skipCurrent = dp[i + 1];

    // Store best answer
    dp[i] = Math.max(robCurrent, skipCurrent);
  }

  // Answer starts from 'start'
  return dp[start];
}
// -----------------------------Approach 4 - Space Optimized (Best)-----------------------------
/**
 *
 * Time : O(n)
 * Space: O(1)
 */

var rob = function (nums) {
  // Edge case:
  // Only one house
  if (nums.length === 1) {
    return nums[0];
  }

  // Compute both valid cases
  return Math.max(robRange(nums, 0, nums.length - 2), robRange(nums, 1, nums.length - 1));
};

// Solves House Robber I on a given range
function robRange(nums, start, end) {
  // Represents dp[i+1]
  let oneAhead = 0;

  // Represents dp[i+2]
  let twoAhead = 0;

  // Build answers from right to left
  for (let i = end; i >= start; i--) {
    // Option 1:
    // Rob this house
    let robCurrent = nums[i] + twoAhead;

    // Option 2:
    // Skip this house
    let skipCurrent = oneAhead;

    // Best answer for current house
    let current = Math.max(robCurrent, skipCurrent);

    // Shift variables:
    // twoAhead becomes old oneAhead
    twoAhead = oneAhead;

    // oneAhead becomes current answer
    oneAhead = current;
  }

  return oneAhead;
}
