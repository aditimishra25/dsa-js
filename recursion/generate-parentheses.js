/**
 * Generate all valid combinations of n pairs of parentheses
 *
 * Time Complexity: O(4^n / √n)  (Catalan number)
 * Space Complexity: O(n) recursion stack
 *
 * @param {number} n
 * @return {string[]}
 */
var generateParenthesis = function (n) {
  // Stores all valid combinations
  let result = [];

  // Start recursion with:
  // open = 0 brackets used
  // close = 0 brackets used
  // curr = current string being built
  backtrack(0, 0, n, "", result);

  return result;
};

/**
 * @param {number} open   Number of "(" used so far
 * @param {number} close  Number of ")" used so far
 * @param {number} n      Total pairs required
 * @param {string} curr   Current parentheses string
 * @param {string[]} result Final answer array
 */
let backtrack = (open, close, n, curr, result) => {
  // Base case:
  // When string length becomes 2*n,
  // we have used all parentheses.
  if (curr.length === 2 * n) {
    result.push(curr);
    return;
  }

  // Choice 1:
  // Add an opening bracket if we still have some left.
  if (open < n) {
    backtrack(open + 1, close, n, curr + "(", result);
  }

  // Choice 2:
  // Add a closing bracket only if
  // there is an unmatched opening bracket available.
  //
  // Example:
  // open = 2, close = 1  -> can add ")"
  // open = 2, close = 2  -> cannot add ")"
  if (close < open) {
    backtrack(open, close + 1, n, curr + ")", result);
  }
};

// ------------------------revision-1------------------------------------
let result = [];
var generateParenthesis = function (n) {
  let result = [];
  backtrack(0, 0, n, "", result);
  return result;
};

backtrack = (open, close, n, curr, result) => {
  if ((curr.length == 2 * n)) {
    result.push(curr);
    return;
  }

  if (open < n) backtrack(open + 1, close, n, curr + "(", result);
  if (close < open) backtrack(open, close + 1, n, curr + ")", result);
};
