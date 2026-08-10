// -----------------------------Approach 1: Brute Force (Recursion)-----------------------------
var canPartition = function (nums) {
  let totalSum = nums.reduce((sum, num) => sum + num, 0);

  // Odd sum can never be divided equally
  if (totalSum % 2 !== 0) {
    return false;
  }

  let target = totalSum / 2;

  return helper(0, target, nums);
};

function helper(index, target, nums) {
  // Found a subset whose sum is target
  if (target === 0) {
    return true;
  }

  // No numbers left OR target became negative
  if (index === nums.length || target < 0) {
    return false;
  }

  // Take current number
  let take = helper(index + 1, target - nums[index], nums);

  // Skip current number
  let skip = helper(index + 1, target, nums);

  return take || skip;
}

// -----------------------------Approach 2: Memoization (Top-Down DP)-----------------------------
/**
 *
 * Time: O(n * target)
 * Space: O(n * target)
 *
 * State:
 * helper(index, target)
 *
 * Meaning:
 * Can we make "target" using nums[index...end]?
 */

var canPartition = function (nums) {
  // Calculate total sum
  let totalSum = nums.reduce((sum, num) => sum + num, 0);

  // If total is odd, it cannot be divided into
  // two equal integer sums
  if (totalSum % 2 !== 0) {
    return false;
  }

  // Each subset must have this sum
  let target = totalSum / 2;

  // memo[index][target]
  //
  // Rows    -> index
  // Columns -> target
  let memo = Array.from({ length: nums.length }, () => new Array(target + 1));

  return helper(0, target, nums, memo);
};

function helper(index, target, nums, memo) {
  // We successfully created a subset with
  // exactly the required sum
  if (target === 0) {
    return true;
  }

  // No numbers left OR target became negative
  if (target < 0 || index === nums.length) {
    return false;
  }

  // If we have already solved this state,
  // return the stored answer
  if (memo[index][target] !== undefined) {
    return memo[index][target];
  }

  // Choice 1: TAKE current number
  let take = helper(index + 1, target - nums[index], nums, memo);

  // Choice 2: SKIP current number
  let skip = helper(index + 1, target, nums, memo);

  // If either choice works, this state is true
  memo[index][target] = take || skip;

  return memo[index][target];
}

// -----------------------------Approach 3: Bottom-Up DP-----------------------------
/**
 * Time Complexity: O(n * target)
 * Space Complexity: O(n * target)
 *
 * dp[i][sum] means:
 *
 * Can we make "sum" using the numbers
 * from index i onwards?
 */

var canPartition = function (nums) {
  // Calculate total sum
  let totalSum = nums.reduce((sum, num) => sum + num, 0);

  // If total sum is odd,
  // equal partition is impossible
  if (totalSum % 2 !== 0) {
    return false;
  }

  // Each subset must have this sum
  let target = totalSum / 2;

  let n = nums.length;

  /*
   * dp[index][sum]
   *
   * Rows    -> index
   * Columns -> sum
   *
   * We need n + 1 rows because
   * index can reach n.
   */
  let dp = Array.from({ length: n + 1 }, () => new Array(target + 1).fill(false));

  /*
   * BASE CASE
   *
   * If target/sum is 0,
   * we can always make it by choosing nothing.
   *
   * Therefore:
   *
   * dp[index][0] = true
   *
   * for every index.
   */
  for (let index = 0; index <= n; index++) {
    dp[index][0] = true;
  }

  /*
   * Build the table from bottom to top.
   *
   * We go from n - 1 down to 0
   * because our recursion moves:
   *
   * index -> index + 1
   */
  for (let index = n - 1; index >= 0; index--) {
    // Try every possible target/sum
    for (let sum = 1; sum <= target; sum++) {
      /*
       * SKIP current number
       *
       * If we don't take nums[index],
       * we move to the next index.
       */
      let skip = dp[index + 1][sum];

      /*
       * TAKE current number
       *
       * We can take it only if
       * nums[index] <= sum.
       */
      let take = false;

      if (nums[index] <= sum) {
        take = dp[index + 1][sum - nums[index]];
      }

      /*
       * Either taking or skipping
       * the current number can work.
       */
      dp[index][sum] = take || skip;
    }
  }

  /*
   * Start from index 0
   * with the full target.
   */
  return dp[0][target];
};
canPartition([1, 5, 11, 5]); //true
