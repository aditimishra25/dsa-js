/**
 * @param {string} s
 * @return {boolean}
 */

//#Approach - 1
var isValid = function (s) {
  // Stack to store opening brackets
  let stack = [];

  // Map of closing brackets to their matching opening brackets
  let map = {
    ")": "(",
    "}": "{",
    "]": "[",
  };

  // Loop through each character in the string
  for (let ch of s) {
    // If character is not a closing bracket
    // (meaning it's an opening bracket)
    if (!map[ch]) {
      stack.push(ch); // Push opening bracket onto stack
    } else {
      // If it's a closing bracket:
      // Pop the top element from stack and check if it matches
      // the correct opening bracket from map
      if (stack.pop() !== map[ch]) {
        return false; // If not matching -> invalid string
      }
    }
  }

  // After processing entire string:
  // If stack is empty -> all brackets matched correctly
  // If not empty -> some opening brackets were never closed
  return stack.length === 0;
};

// ##Approach-2

var isValid = function (s) {
  let stack = [];
  let map = {
    "(": ")",
    "{": "}",
    "[": "]",
  };

  for (ch of s) {
    if (map[ch]) stack.push(ch);
    else {
      if (map[stack.pop()] !== ch) return false;
    }
  }
  return stack.length == 0;
};

// ------------------------revision-1---------------------------------
var isValid = function (s) {
  let stack = [];
  let map = {
    "(": ")",
    "{": "}",
    "[": "]",
  };

  for (let ch in s) {
    if (map[ch]) stack.push(ch);
    else {
      if (map[stack.pop()] != ch) return false;
    }
  }
  return stack.length == 0;
};
