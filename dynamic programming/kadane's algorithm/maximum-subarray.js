/**
 * @param {number[]} nums
 * @return {number}
 */
var maxSubArray = function (nums) {
  //init max sum to -infinity and current sum to 0
  let maxSoFar = -Infinity,
    currentMax = 0;

  for (num of nums) {
    // if current sum is less than 0, it implies that negative numbers were found along the way and hence create a new subarray
    if (currentMax < 0) currentMax = 0;

    // increment current max
    currentMax += nums[i];

    // set max sum so far
    if (currentMax > maxSoFar) maxSoFar = currentMax;
  }

  //return max sum
  return maxSoFar;
};
