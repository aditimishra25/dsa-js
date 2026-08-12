// -----------------------------Approach 1: Brute Force (Recursion)-----------------------------
/**
 * @param {string} s
 * @return {number}
 */
var numDecodings = function (s) {
  return helper(s, 0);
};

function helper(s, index) {
  // We successfully consumed the entire string
  // So this is one valid decoding
  if (index === s.length) {
    return 1;
  }

  // A single 0 cannot be decoded
  if (s[index] === "0") {
    return 0;
  }
  // Choice 1: Take one digit
  let oneDigit = helper(s, index + 1);

  // Choice 2: Take two digits
  let twoDigit = 0;

  // Make sure there are at least
  // two characters remaining
  if (index + 1 < s.length) {
    let twoDigitNumber = Number(s.substring(index, index + 2));

    // Valid two-digit encoding:
    // 10 through 26
    if (twoDigitNumber >= 10 && twoDigitNumber <= 26) {
      twoDigit = helper(s, index + 2);
    }
  }

  // We are counting all possible decodings
  return oneDigit + twoDigit;
}

// -----------------------------Approach 2: Memoization (Top-Down DP)-----------------------------
var numDecodings = function (s) {
  // memo[index] =
  // number of ways to decode the string
  // starting from this index
  let memo = new Array(s.length);

  return helper(s, 0, memo);
};

function helper(s, index, memo) {
  // We successfully consumed the entire string
  // This represents ONE valid decoding
  if (index === s.length) {
    return 1;
  }

  // A single 0 cannot be decoded
  if (s[index] === "0") {
    return 0;
  }

  // If we already solved this index,
  // return the stored result
  if (memo[index] !== undefined) {
    return memo[index];
  }

  // -----------------------------
  // Choice 1: Take one digit
  // -----------------------------

  let oneDigit = helper(s, index + 1, memo);

  // -----------------------------
  // Choice 2: Take two digits
  // -----------------------------

  let twoDigit = 0;

  // We need at least TWO characters
  // remaining in the string
  if (index + 1 < s.length) {
    let twoDigitNumber = Number(s.substring(index, index + 2));

    // Valid two-digit encoding:
    // 10 through 26
    if (twoDigitNumber >= 10 && twoDigitNumber <= 26) {
      twoDigit = helper(s, index + 2, memo);
    }
  }

  // We are COUNTING possible decodings,
  // so add both choices
  memo[index] = oneDigit + twoDigit;

  return memo[index];
}

// -----------------------------Approach 3: Bottom-Up DP-----------------------------
var numDecodings = function (s) {
  let n = s.length;

  // dp[index] =
  // number of ways to decode s[index...end]
  let dp = new Array(n + 1).fill(0);

  // Base case:
  // If we reach the end of the string,
  // there is exactly ONE valid way to finish.
  dp[n] = 1;

  // Build from right to left
  for (let index = n - 1; index >= 0; index--) {
    // A single 0 cannot be decoded
    if (s[index] === "0") {
      dp[index] = 0;
      continue;
    }

    // -----------------------------
    // Choice 1: Take one digit
    // -----------------------------

    let oneDigit = dp[index + 1];

    // -----------------------------
    // Choice 2: Take two digits
    // -----------------------------

    let twoDigit = 0;

    // Need at least two characters
    if (index + 1 < n) {
      let twoDigitNumber = Number(s.substring(index, index + 2));

      // Two-digit number must be 10 to 26
      if (twoDigitNumber >= 10 && twoDigitNumber <= 26) {
        twoDigit = dp[index + 2];
      }
    }

    // We are counting all possible decodings
    dp[index] = oneDigit + twoDigit;
  }

  // Answer = number of ways starting from index 0
  return dp[0];
};
