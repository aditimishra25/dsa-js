/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function (nums, target) {
  let ans = new Map();
  for (let i = 0; i < nums.length; i++) {
    let complement = target - nums[i];
    if (ans.has(complement)) return [ans.get(complement), i];
    else ans.set(nums[i], i);
  }
};

// -----------------revision-1-----------------------------------
var twoSum = function (nums, target) {
  let map = new Map();
  for (let i = 0; i < nums.length; i++) {
    let remaining = target - nums[i];
    if (map.has(remaining)) return [map.get(remaining), i];
    else map.set(nums[i], i);
  }
};
