/**
 * @param {string} s
 * @return {number}
 */

/* used dynamic sliding window as length of longest substring is not known 

intuition: 
        A Set tracks the unique characters within the current window. 
        If a duplicate is encountered, the left side of the window is contracted    
        until the substring becomes unique again, ensuring only unique characters 
        are ever within the window. 
*/
var lengthOfLongestSubstring = function (s) {
  let left = 0;
  let maxLength = 0;
  let unique = new Set();

  for (let right = 0; right < s.length; right++) {
    while (unique.has(s.charAt(right))) {
      unique.delete(s.charAt(left));
      left++;
    }
    unique.add(s.charAt(right));
    maxLength = Math.max(maxLength, right - left + 1);
  }

  return maxLength;
};

// --------revision-1--------------------
var lengthOfLongestSubstring = function (s) {
  let left = 0;
  let maxLength = 0;

  let set = new Set();

  for (let right = 0; right < s.length; right++) {
    // shrink window until duplicate removed
    while (set.has(s[right])) {
      // remove left character
      set.delete(s[left]);

      // move left pointer
      left++;
    }

    // add current character
    set.add(s[right]);

    // update max length
    maxLength = Math.max(maxLength, right - left + 1);
  }

  return maxLength;
};

// -------------------------revision-2------------------------------------------
var lengthOfLongestSubstring = function (s) {
  let left = 0;
  let maxLength = 0;
  let uniqueChars = new Set();

  for (let right = 0; right < s.length; right++) {
    while (uniqueChars.has(s[right])) {
      uniqueChars.delete(s[left]);
      left++;
    }
    uniqueChars.add(s[right]);
    maxLength = Math.max(maxLength, right - left + 1);
  }
  return maxLength;
};
