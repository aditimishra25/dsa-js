/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var threeSum = function (nums) {
  let res = [];
  nums.sort((a, b) => a - b); //sort the array

  for (let i = 0; i < nums.length; i++) {
    let left = i + 1,
      right = nums.length - 1,
      sum = 0;
    if (nums[i] > 0) break; //if nums[i] > 0 in a sorted array then sum of next 3 digits cannot be 0

    if (i > 0 && nums[i] == nums[i - 1]) continue; //handle duplicates
    while (left < right) {
      sum = nums[i] + nums[left] + nums[right];
      if (sum == 0) {
        res.push([nums[i], nums[left], nums[right]]);

        //handle duplicates
        while (left < right && nums[left] === nums[left + 1]) left++;
        while (left < right && nums[right] === nums[right - 1]) right--;

        left++;
        right--;
      } else if (sum < 0) {
        left++;
      } else {
        right--;
      }
    }
  }
  return res;
};

//----------------------------revision-1-------------------------------------
var threeSum = function (nums) {
  let res = [];
  nums.sort((a, b) => a - b);

  if (!nums.length) return [];

  for (let i = 0; i < nums.length - 1; i++) {
    let left = i + 1;
    let right = nums.length - 1;
    let sum = 0;

    if (nums[i] > 0) break;

    if (i > 0 && nums[i] == nums[i - 1]) continue;

    while (left < right) {
      sum = nums[left] + nums[i] + nums[right];
      if (sum === 0) {
        res.push([nums[i], nums[left], nums[right]]);
        while (left < right && nums[left] == nums[left + 1]) left++;
        while (left < right && nums[right] == nums[right - 1]) right--;
        left++;
        right--;
      } else if (sum < 0) {
        left++;
      } else if (sum > 0) {
        right--;
      }
    }
  }
  return res;
};

threeSum([-1, 0, 1, 2, -1, -4]);
