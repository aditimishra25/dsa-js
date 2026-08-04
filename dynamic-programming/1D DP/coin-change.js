// -----------------------------Approach 1: Brute Force Recursion-----------------------------
/**
 *
 * Time  : O(coins.length ^ amount)
 * Space : O(amount) (recursion stack)
 */

var coinChange = function (coins, amount) {
  let answer = helper(coins, amount);

  // If no solution exists
  return answer === Infinity ? -1 : answer;
};

function helper(coins, amount) {
  // Successfully formed the amount
  if (amount === 0) {
    return 0;
  }

  // Invalid path
  if (amount < 0) {
    return Infinity;
  }

  // Minimum coins needed
  let minCoins = Infinity;

  // Try every coin
  for (let coin of coins) {
    // Solve the remaining amount
    let result = helper(coins, amount - coin);

    // Include current coin
    minCoins = Math.min(minCoins, 1 + result);
  }

  return minCoins;
}

// -----------------------------Approach 2: Memoization (Top Down)-----------------------------
/**
 *
 * Time  : O(amount × coins.length)
 * Space : O(amount)
 */

var memo = [];

var coinChange = function (coins, amount) {
  // memo[i] = minimum coins required for amount i
  memo = new Array(amount + 1);

  let answer = helper(coins, amount);
  return answer === Infinity ? -1 : answer;
};

function helper(coins, amount) {
  // Successfully formed the amount
  if (amount === 0) {
    return 0;
  }

  // Invalid path
  if (amount < 0) {
    return Infinity;
  }

  // Already solved
  if (memo[amount] !== undefined) {
    return memo[amount];
  }

  let minCoins = Infinity;

  // Try every coin
  for (let coin of coins) {
    let result = helper(coins, amount - coin);
    minCoins = Math.min(minCoins, 1 + result);
  }

  // Store answer
  memo[amount] = minCoins;
  return memo[amount];
}

// -----------------------------Approach 3: Bottom-Up DP-----------------------------
/**
 *
 * Time  : O(amount × coins.length)
 * Space : O(amount)
 */

var coinChange = function (coins, amount) {
  // dp[i] = minimum coins needed to make amount i
  let dp = new Array(amount + 1).fill(Infinity);

  // Base case
  dp[0] = 0;

  // Compute answers from smaller amounts to larger amounts
  for (let currentAmount = 1; currentAmount <= amount; currentAmount++) {
    // Try every coin
    for (let coin of coins) {
      // Can we use this coin?
      if (currentAmount >= coin) {
        dp[currentAmount] = Math.min(dp[currentAmount], 1 + dp[currentAmount - coin]);
      }
    }
  }

  // Impossible to form the amount
  return dp[amount] === Infinity ? -1 : dp[amount];
};
