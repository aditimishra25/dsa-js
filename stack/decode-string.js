/**
 * Decode String
 *
 * Example:
 * "3[a]2[bc]"
 * => "aaabcbc"
 *
 * "3[a2[c]]"
 * => "accaccacc"
 *
 * "100[leetcode]"
 * => "leetcode" repeated 100 times
 *
 * Time Complexity: O(n)
 * Space Complexity: O(n)
 *
 * @param {string} s
 * @return {string}
 */
var decodeString = function (s) {
  // Stack stores:
  // digits, letters, '[' and decoded strings
  let stack = [];

  for (let i = 0; i < s.length; i++) {
    // Keep pushing until we find a closing bracket
    if (s[i] !== "]") {
      stack.push(s[i]);
    }

    // Time to decode a substring
    else {
      let str = "";

      // Build the string inside the brackets
      //
      // Example:
      // Stack:
      // ['3', '[', 'a', 'b', 'c']
      //
      // Result:
      // str = "abc"
      while (stack.length > 0 && stack[stack.length - 1] !== "[") {
        str = stack.pop() + str;
      }

      // Remove '['
      stack.pop();

      // Build the repeat count
      //
      // Handles:
      // 3[a]
      // 12[a]
      // 100[a]
      let num = "";

      while (stack.length > 0 && !isNaN(stack[stack.length - 1])) {
        num = stack.pop() + num;
      }

      let count = Number(num);

      // Repeat the decoded string
      let decoded = str.repeat(count);

      // Push back onto stack
      //
      // Important for nested cases:
      // 3[a2[c]]
      stack.push(decoded);
    }
  }

  // Combine everything remaining in stack
  return stack.join("");
};

// ------------------------revision-1---------------------------------
var decodeString = function (s) {
  let stack = [];

  for (let i = 0; i < s.length; i++) {
    if (s[i] !== "]") {
      stack.push(s[i]);
    } else {
      let str = "";
      while (stack.length && stack.at(-1) != "[") {
        str = stack.pop() + str;
      }

      stack.pop();

      let num = "";
      while (stack.length && !isNaN(stack.at(-1))) {
        num = stack.pop() + num;
      }

      let count = Number(num);
      let decoded = str.repeat(count)
      stack.push(decoded);
    }
  }
  return stack.join('')
};

decodeStringNew("3[a]2[bc]"); //aaabcbc
