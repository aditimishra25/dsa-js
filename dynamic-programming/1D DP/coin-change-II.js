// -----------------------------Approach 1: Brute Force (Recursion)-----------------------------
/**
 *
 * Time  : Exponential
 * Space : O(amount) (recursion stack)
 */

var change = function (amount, coins) {
  return helper(amount, coins, 0);
};

function helper(amount, coins, index) {
  // Successfully made the amount
  if (amount === 0) {
    return 1;
  }

  // Invalid path
  if (amount < 0) {
    return 0;
  }

  // No coins left
  if (index === coins.length) {
    return 0;
  }

  // Take current coin (stay at same index because we can reuse it)
  let take = helper(amount - coins[index], coins, index);

  // Skip current coin (move to next coin)
  let skip = helper(amount, coins, index + 1);

  // Total combinations
  return take + skip;
}

// -----------------------------Approach 2: Memoization (Top Down)-----------------------------
/**
 *
 * Time  : O(amount × number of coins)
 * Space : O(amount × number of coins)
 */

let memo = [];

var change = function (amount, coins) {
  // memo[amount][index]
  memo = Array.from({ length: amount + 1 }, () => new Array(coins.length));

  return helper(amount, coins, 0);
};

function helper(amount, coins, index) {
  // Successfully made the amount
  if (amount === 0) {
    return 1;
  }

  // Invalid path
  if (amount < 0) {
    return 0;
  }

  // No coins left
  if (index === coins.length) {
    return 0;
  }

  // Already solved
  if (memo[amount][index] !== undefined) {
    return memo[amount][index];
  }

  // Take current coin
  let take = helper(amount - coins[index], coins, index);

  // Skip current coin
  let skip = helper(amount, coins, index + 1);

  memo[amount][index] = take + skip;

  return memo[amount][index];
}

// -----------------------------Approach 3: Bottom-Up DP-----------------------------
/**
 * Approach 3: Bottom-Up DP (2D)
 *
 * dp[currentAmount][index]
 *
 * = Number of ways to make currentAmount
 *   using coins from index onwards.
 *
 * Time  : O(amount × number of coins)
 * Space : O(amount × number of coins)
 */

var change = function (amount, coins) {
  // One extra column for index == coins.length
  let dp = Array.from({ length: amount + 1 }, () => new Array(coins.length + 1).fill(0));

  // Base case:
  // There is exactly ONE way to make amount 0
  // (Choose nothing)
  for (let index = 0; index <= coins.length; index++) {
    dp[0][index] = 1;
  }

  // Build DP table
  for (let currentAmount = 1; currentAmount <= amount; currentAmount++) {
    // Traverse backwards because recurrence uses index+1
    for (let index = coins.length - 1; index >= 0; index--) {
      let take = 0;

      // Can we take current coin?
      if (currentAmount >= coins[index]) {
        take = dp[currentAmount - coins[index]][index];
      }

      // Skip current coin
      let skip = dp[currentAmount][index + 1];

      dp[currentAmount][index] = take + skip;
    }
  }

  return dp[amount][0];
};

// -----------------------------Approach 4: Bottom-Up Space Optimized-----------------------------
/**
 *
 * Time  : O(amount × number of coins)
 * Space : O(amount)
 */

var change = function (amount, coins) {
  // dp[i] = Number of ways to make amount i
  let dp = new Array(amount + 1).fill(0);

  // Base case
  dp[0] = 1;

  // Process one coin at a time
  for (let coin of coins) {
    // Build answers using this coin
    for (let currentAmount = coin; currentAmount <= amount; currentAmount++) {
      dp[currentAmount] += dp[currentAmount - coin];
    }
  }

  return dp[amount];
};
