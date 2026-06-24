/**
 * @param {string} s
 * @return {boolean}
 */
var isPalindrome = function (s) {
  let left = 0,
    right = s.length - 1;

  while (left < right) {
    while (!/[a-zA-Z0-9]/.test(s[left])) left++;
    while (!/[a-zA-Z0-9]/.test(s[right])) right--;

    if (left < right && s[left].toLowerCase() != s[right].toLowerCase()) return false;

    left++;
    right--;
  }
  return true;
};

//----------------------------revision-1-------------------------------------
var isPalindrome = function (s) {
  let left = 0,
    right = s.length - 1;

  while (left < right) {
    while (!/[a-zA-Z0-9]/.test(s[left])) left++;
    while (!/[a-zA-Z0-9]/.test(s[right])) right--;

    if (left < right && s[left].toLowerCase() != s[right].toLowerCase()) return false;

    left++;
    right--;
  }

  return true;
};
