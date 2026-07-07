/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var subarraySum = function (nums, k) {
  // Running prefix sum
  let sum = 0;

  // Number of subarrays whose sum = k
  let count = 0;

  // Stores:
  // prefixSum -> frequency
  let map = new Map();

  // Prefix sum 0 exists once before the array starts
  map.set(0, 1);

  for (let num of nums) {
    // Update running sum
    sum += num;

    // We need a previous prefix sum such that:
    // currentSum - previousSum = k
    //
    // previousSum = currentSum - k
    let need = sum - k;

    // If we've seen this prefix sum before,
    // then we found one (or more) valid subarrays
    if (map.has(need)) {
      count += map.get(need);
    }

    // Store current prefix sum frequency
    //
    // If sum already exists:
    // increment frequency
    //
    // Otherwise:
    // start with frequency 1
    map.set(sum, (map.get(sum) || 0) + 1);
  }

  return count;
};

// -------------------------revision-1------------------------------------
var subarraySum = function (nums, k) {
  let sum = 0;
  let res = 0;
  let map = new Map();
  map.set(0, 1);

  for (num of nums) {
    sum = sum + num;
    let need = sum - k;

    if (map.has(need)) {
      res = res + map.get(need);
    }
    map.set(sum, (map.get(sum) || 0) + 1);
  }
  return res;
};
