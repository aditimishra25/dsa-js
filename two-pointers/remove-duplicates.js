/**
 * @param {number[]} nums
 * @return {number}
 */
var removeDuplicates = function (nums) {
  let j = 1;
  if (nums.length) {
    for (let i = 1; i < nums.length; i++) {
      if (nums[i] !== nums[i - 1]) {
        nums[j] = nums[i];
        j++;
      }
    }
    return j;
  }
  return 0;
};

//----------------------------revision-1-------------------------------------
var removeDuplicates = function (nums) {
  let right = 1;

  if (!nums.length) return 0;
  for (let left = 1; left < nums.length; left++) {
    if (nums[left] != nums[left - 1]) {
      nums[right] = nums[left];
      right++;
    }
  }
  return right;
};