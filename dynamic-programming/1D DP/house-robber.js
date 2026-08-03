// ----------------------------- Approach 1: Brute Force Recursion-----------------------------
/**
 *
 * Time : O(2^n)
 * Space: O(n)
 */

var rob = function (nums) {
  return helper(nums, 0);
};

function helper(nums, i) {
  // No houses left
  if (i >= nums.length) {
    return 0;
  }

  // Choice 1:
  // Rob current house and skip next
  let robCurrent = nums[i] + helper(nums, i + 2);

  // Choice 2:
  // Skip current house
  let skipCurrent = helper(nums, i + 1);

  // Take better choice
  return Math.max(robCurrent, skipCurrent);
}

// -----------------------------Approach 2: Memoization-----------------------------
/**
 *
 * Time : O(n)
 * Space: O(n)
 */

var memo = [];

var rob = function (nums) {
  memo = new Array(nums.length);

  return helper(nums, 0);
};

function helper(nums, i) {
  if (i >= nums.length) {
    return 0;
  }

  if (memo[i] !== undefined) {
    return memo[i];
  }

  let robCurrent = nums[i] + helper(nums, i + 2);

  let skipCurrent = helper(nums, i + 1);

  memo[i] = Math.max(robCurrent, skipCurrent);

  return memo[i];
}

// -----------------------------Approach 3: Bottom-Up DP-----------------------------
/**
 *
 * Time : O(n)
 * Space: O(n)
 */

var rob = function (nums) {
  let n = nums.length;

  // Extra two spaces so dp[i+2] is always valid
  let dp = new Array(n + 2).fill(0);

  // Build answers from right to left
  for (let i = n - 1; i >= 0; i--) {
    // Rob this house
    let robCurrent = nums[i] + dp[i + 2];

    // Skip this house
    let skipCurrent = dp[i + 1];

    dp[i] = Math.max(robCurrent, skipCurrent);
  }

  return dp[0];
};

// -----------------------------Approach 4: Space Optimized-----------------------------
/**
 *
 * Time : O(n)
 * Space: O(1)
 */

var rob = function (nums) {
  // dp[i+1]
  let oneAhead = 0;

  // dp[i+2]
  let twoAhead = 0;

  for (let i = nums.length - 1; i >= 0; i--) {
    let current = Math.max(nums[i] + twoAhead, oneAhead);

    // Shift values
    twoAhead = oneAhead;
    oneAhead = current;
  }

  return oneAhead;
};

// -----------------------------Approach 5: Forward DP-----------------------------
/**
 *
 * Time : O(n)
 * Space: O(n)
 */

var rob = function (nums) {
  let n = nums.length;

  if (n === 1) return nums[0];

  let dp = new Array(n);

  dp[0] = nums[0];

  dp[1] = Math.max(nums[0], nums[1]);

  for (let i = 2; i < n; i++) {
    dp[i] = Math.max(dp[i - 1], nums[i] + dp[i - 2]);
  }

  return dp[n - 1];
};
