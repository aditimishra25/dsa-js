// *******************************************************************
// ****************DP Template (Save this!)***************************
// Every time you see a DP problem, follow this checklist:

// 1. Define the state
//    What does dp[i] or dfs(i) represent?

// 2. Identify the choices
//    What decisions can I make from this state?

// 3. Write the recurrence
//    How is the current state computed from smaller states?

// 4. Define the base cases
//    What are the smallest subproblems with known answers?

// 5. Optimize
//    - Brute Force
//    - Memoization
//    - Bottom-Up
//    - Space Optimization (if possible)
// *************************************************************************
// *************************************************************************

// // | Approach               | Time   | Space | Interview Use            |
// | ---------------------- | ------ | ----- | ------------------------ |
// | Brute Force Recursion  | O(2^n) | O(n)  | ❌ Shows initial thinking |
// | Memoization (Top-Down) | O(n)   | O(n)  | ✅ Excellent              |
// | Bottom-Up DP           | O(n)   | O(n)  | ✅ Excellent              |
// | Space Optimized DP     | O(n)   | O(1)  | ⭐ Very Common            |
// | Fibonacci Style        | O(n)   | O(1)  | ⭐ Most Common            |

// ---------------------------------Approach 1 - Brute Force Recursion-----------------------------
// Intuition:
// At every stair, we have only 2 choices:
// Climb 1 step
// Climb 2 steps
// So recursively explore both choices.

// State:
// ways(stair) = Number of ways to reach the top starting from stair.

// Recurrence:
// ways(stair) = ways(stair + 1) + ways(stair + 2)

// Base Cases:
// Reached exactly the top → 1 way

// Went past the top → 0 ways
/**
 *
 * Time: O(2^n)
 * Space: O(n) (Recursion stack)
 */

var climbStairs = function (n) {
  return helper(0, n);
};

function helper(stair, n) {
  // Reached exactly the top
  if (stair === n) return 1;

  // Went past the top
  if (stair > n) return 0;

  // Two choices:
  // 1. Take one step
  // 2. Take two steps
  return helper(stair + 1, n) + helper(stair + 2, n);
}

// -----------------------------Approach 2 - Memoization (Top-Down DP)-----------------------------
// Intuition:
// The recursion keeps solving the same subproblem.

// Example:
// ways(2) is calculated again and again.

// Store every answer after computing it once.
// Next time, return it immediately.
/**
 *
 * Time: O(n)
 * Space: O(n)
 */

var memo = [];

var climbStairs = function (n) {
  memo = new Array(n + 1);

  return helper(0, n);
};

function helper(stair, n) {
  // Reached destination
  if (stair === n) return 1;

  // Invalid path
  if (stair > n) return 0;

  // Already calculated
  if (memo[stair] !== undefined) {
    return memo[stair];
  }

  // Store answer
  memo[stair] = helper(stair + 1, n) + helper(stair + 2, n);

  return memo[stair];
}

// -----------------------------Approach 3 - Bottom-Up DP-----------------------------
// Intuition:
// Instead of starting from stair 0, start from the destination.

// We already know dp[n] = 1
// Then build answers backwards.

// State:
// dp[i] = Number of ways to reach the top from stair i.

// Transition:
// dp[i] = dp[i+1] + dp[i+2]
/**
 *
 * Time: O(n)
 * Space: O(n)
 */

var climbStairs = function (n) {
  // Extra two spaces because we access dp[i+2]
  let dp = new Array(n + 2).fill(0);

  // Base case
  dp[n] = 1;

  // Fill from right to left
  for (let i = n - 1; i >= 0; i--) {
    dp[i] = dp[i + 1] + dp[i + 2];
  }

  return dp[0];
};

// -----------------------------Approach 4 - Space Optimized DP-----------------------------
// Notice dp[i] only needs dp[i+1] and dp[i+2]

// We don't need the whole DP array.
// Keep only the last two values.
/**
 *
 * Time: O(n)
 * Space: O(1)
 */

var climbStairs = function (n) {
  // Represents dp[i+1]
  let oneStepAway = 1;

  // Represents dp[i+2]
  let twoStepsAway = 0;

  // Build answers backwards
  for (let i = n - 1; i >= 0; i--) {
    let current = oneStepAway + twoStepsAway;

    // Shift values
    twoStepsAway = oneStepAway;
    oneStepAway = current;
  }

  return oneStepAway;
};
// -----------------------------Approach 5 - Fibonacci Style (Most Common Interview Solution)-----------------------------
// Most interviewers expect this version.
// Since
// ways(n) = ways(n-1) + ways(n-2)
// we can compute the answer like Fibonacci.

/**
 *
 * Time: O(n)
 * Space: O(1)
 */

var climbStairs = function (n) {
  if (n <= 2) return n;

  let first = 1;
  let second = 2;

  for (let i = 3; i <= n; i++) {
    let third = first + second;

    first = second;
    second = third;
  }

  return second;
};
