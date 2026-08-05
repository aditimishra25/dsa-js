// -----------------------------Approach 1: Brute Force (Recursion)-----------------------------
/**
 *
 * Time  : Exponential (O(2^n) approximately)
 * Space : O(n) (Recursion stack)
 *
 * Idea:
 * At every index, try every possible word starting from that index.
 * If the current word exists in the dictionary,
 * recursively check whether the remaining string can also be segmented.
 *
 * If any path succeeds, return true.
 * Otherwise return false.
 */

var wordBreak = function (s, wordDict) {
  // Convert dictionary into a Set
  // O(1) lookup instead of looping through the dictionary every time.
  let set = new Set(wordDict);

  // Start checking from index 0
  return helper(s, set, 0);
};

function helper(s, set, index) {
  // ===============================
  // Base Case
  // ===============================

  // We've successfully consumed the entire string.
  // That means every previous split was valid.
  if (index === s.length) {
    return true;
  }

  // ===============================
  // Try every possible ending position
  // ===============================

  // Current word starts at 'index'.
  // Keep increasing its ending position.
  for (let end = index; end < s.length; end++) {
    // Current substring
    // Example:
    // s = "leetcode"
    // index = 0
    //
    // end = 0 -> "l"
    // end = 1 -> "le"
    // end = 2 -> "lee"
    // end = 3 -> "leet"
    let word = s.substring(index, end + 1);

    // Check if the current word exists in the dictionary.
    if (set.has(word)) {
      // Current word is valid.
      // Now recursively check the remaining string.
      //
      // Example:
      //
      // "leetcode"
      //  ^^^^^
      //   leet
      //
      // Next recursion starts from:
      //
      // "code"
      //      ^
      if (helper(s, set, end + 1)) {
        return true;
      }
    }
  }

  // We tried every possible split.
  // None of them worked.
  return false;
}

// -----------------------------Approach 2: Memoization (Top Down)-----------------------------
/**
 *
 * Time: O(n²)
 * Space: O(n)
 *
 * memo[index] stores:
 * Can the substring starting from 'index' be segmented?
 *
 * true  -> Yes
 * false -> No
 */

var wordBreak = function (s, wordDict) {
  // Convert dictionary into a Set for O(1) lookup
  let set = new Set(wordDict);

  // memo[index]
  // undefined -> Not computed yet
  // true      -> Can break from this index
  // false     -> Cannot break from this index
  let memo = new Array(s.length);

  return helper(s, set, 0, memo);
};

function helper(s, set, index, memo) {
  // Base Case:
  // Successfully consumed the entire string
  if (index === s.length) {
    return true;
  }

  // If we've already solved this index,
  // return the stored answer.
  if (memo[index] !== undefined) {
    return memo[index];
  }

  // Try every possible ending position
  for (let end = index; end < s.length; end++) {
    // Current word
    let word = s.substring(index, end + 1);

    // If the word exists in the dictionary
    if (set.has(word)) {
      // Can the remaining string also be segmented?
      if (helper(s, set, end + 1, memo)) {
        // Store the answer before returning
        memo[index] = true;
        return true;
      }
    }
  }

  // None of the splits worked
  memo[index] = false;
  return false;
}

// -----------------------------Approach 3: Bottom-Up DP-----------------------------
/**
 *
 * Time  : O(n²)
 * Space : O(n)
 *
 * dp[index] means:
 * Can the substring starting from 'index' be segmented?
 *
 * Example:
 *
 * s = "leetcode"
 *
 * Index
 * 0 1 2 3 4 5 6 7
 * l e e t c o d e
 *
 * dp[4] means:
 * Can "code" be segmented?
 *
 * dp[0] means:
 * Can "leetcode" be segmented?
 */

var wordBreak = function (s, wordDict) {
  // Convert dictionary into a Set
  // O(1) lookup for every word
  let set = new Set(wordDict);

  // dp[index]
  // true  -> substring from index can be segmented
  // false -> cannot be segmented
  let dp = new Array(s.length + 1).fill(false);

  // Base Case:
  // Empty string can always be segmented.
  // This is equivalent to:
  // helper(s.length) = true
  dp[s.length] = true;

  // Build DP from right to left
  // because dp[index] depends on dp[end + 1]
  for (let index = s.length - 1; index >= 0; index--) {
    // Try every possible ending position
    // of the current word.
    for (let end = index; end < s.length; end++) {
      // Current word
      //
      // Example:
      // index = 0
      //
      // end = 0 -> "l"
      // end = 1 -> "le"
      // end = 2 -> "lee"
      // end = 3 -> "leet"
      let word = s.substring(index, end + 1);

      // If current word exists in dictionary
      // AND
      // remaining substring can also be segmented
      if (set.has(word) && dp[end + 1]) {
        // Current substring can also be segmented
        dp[index] = true;

        // No need to check longer words.
        // We already found one valid split.
        break;
      }
    }
  }

  // Can the entire string be segmented?
  return dp[0];
};
