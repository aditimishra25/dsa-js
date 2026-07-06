/**
 * Intuition:
 * We need to check if any permutation of s1 exists as a substring in s2.
 * Two strings are permutations of each other if their character frequencies match.
 *
 * Instead of generating permutations, we use a sliding window of size s1.length
 * over s2 and compare character frequency maps.
 *
 * If at any point the frequency map of the window matches s1's frequency map,
 * we return true.
 */

/**
 * @param {string} s1
 * @param {string} s2
 * @return {boolean}
 */
var checkInclusion = function (s1, s2) {
  // If s1 is longer than s2, it's impossible to find a permutation
  if (s1.length > s2.length) return false;

  // Frequency maps for s1 and the current window in s2
  let s1Count = {};
  let s2Count = {};

  // Build frequency map for s1 and initialize the first window in s2
  for (let i = 0; i < s1.length; i++) {
    s1Count[s1[i]] = (s1Count[s1[i]] || 0) + 1;
    s2Count[s2[i]] = (s2Count[s2[i]] || 0) + 1;
  }

  //Check if the first window is a permutation
  if (isEqual(s1Count, s2Count)) {
    return true;
  }

  // Slide the window across s2
  let left = 0;
  for (let right = s1.length; right < s2.length; right++) {
    // Add the new character entering the window
    s2Count[s2[right]] = (s2Count[s2[right]] || 0) + 1;

    // Remove the character leaving the window
    s2Count[s2[left]]--;

    // Clean up map to keep comparison accurate
    if (s2Count[s2[left]] === 0) {
      delete s2Count[s2[left]];
    }

    // Move the window forward
    left++;

    // Step 4: Check if current window matches s1's frequency
    if (isEqual(s1Count, s2Count)) {
      return true;
    }
  }

  // No permutation found
  return false;
};

/**
 * Helper function to compare two frequency maps
 * Returns true if both maps contain the same characters
 * with the same frequencies.
 */
function isEqual(obj1, obj2) {
  // If number of unique characters differ, they can't be equal
  if (Object.keys(obj1).length !== Object.keys(obj2).length) {
    return false;
  }

  // Compare frequency of each character
  for (let key in obj1) {
    if (obj1[key] !== obj2[key]) {
      return false;
    }
  }

  return true;
}

//----------revision-1------------------
var checkInclusion = function (s1, s2) {
  if (s1.length > s2.length) return false;

  let s1Count = {},
    s2Count = {};
  for (let i = 0; i < s1.length; i++) {
    s1Count[s1[i]] = (s1Count[s1[i]] || 0) + 1;

    s2Count[s2[i]] = (s2Count[s2[i]] || 0) + 1;
  }

  if (isEqual(s1Count, s2Count)) return true;

  for (let right = s1.length; right < s2.length; right++) {
    let leftChar = s2[right - s1.length];
    let rightChar = s2[right];

    s2Count[leftChar]--;

    if (s2Count[leftChar] == 0) {
      delete s2Count[leftChar];
    }

    s2Count[rightChar] = (s2Count[rightChar] || 0) + 1;

    if (isEqual(s1Count, s2Count)) return true;
  }
  return false;
};

var isEqual = (s1Count, s2Count) => {
  for (let key in s1Count) {
    if (s1Count[key] != s2Count[key]) return false;
  }
  return true;
};

// -------------------------revision-2------------------------------------------
var checkInclusion = function (s1, s2) {
  if (s1.length > s2.length) return false;

  let s1Count = {},
    s2Count = {};

  for (let i = 0; i < s1.length; i++) {
    s1Count[s1[i]] = (s1Count[s1[i]] || 0) + 1;
    s2Count[s2[i]] = (s2Count[s2[i]] || 0) + 1;
  }

  if (isEqual(s1Count, s2Count)) return true;

  let left = 0;
  for (right = s1.length; right < s2.length; right++) {
    let leftChar = s2[right - s1.length];
    let rightChar = s2[right];

    s2Count[leftChar]--;

    if (s2Count[leftChar] == 0) {
      delete s2Count[leftChar];
    }

    s2Count[rightChar] = (s2Count[rightChar] || 0) + 1;

    if (isEqual(s1Count, s2Count)) return true;
  }
  return false;
};

var isEqual = (s1Count, s2Count) => {
  for (let key in s1Count) {
    if (s1Count[key] != s2Count[key]) return false;
  }
  return true;
};
