/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */

var topKFrequent = function (nums, k) {
  // Step 1: frequency map
  let freq = {};
  for (let num of nums) {
    freq[num] = (freq[num] || 0) + 1;
  }

  // Step 2: convert to array [num, freq]
  let arr = Object.entries(freq);

  let n = arr.length;

  // build max heap (based on frequency)
  for (let i = Math.floor(n / 2) - 1; i >= 0; i--) {
    heapify(arr, n, i);
  }

  // heap sort style: extract top k
  let result = [];
  for (let i = n - 1; i >= 0 && result.length < k; i--) {
    [arr[0], arr[i]] = [arr[i], arr[0]];

    result.push(Number(arr[i][0])); // push number

    heapify(arr, i, 0);
  }

  return result;
};

var heapify = (arr, n, i) => {
  let largest = i;
  let left = 2 * i + 1;
  let right = 2 * i + 2;

  // compare by frequency (index 1)
  if (left < n && arr[left][1] > arr[largest][1]) largest = left;
  if (right < n && arr[right][1] > arr[largest][1]) largest = right;

  if (largest !== i) {
    [arr[i], arr[largest]] = [arr[largest], arr[i]];
    heapify(arr, n, largest);
  }
};

// ---------------Approach-2-----------------------------
var topKFrequent = function (nums, k) {
  // Store frequency of each number
  const count = {};

  for (const num of nums) {
    count[num] = (count[num] || 0) + 1;
  }

  // bucket[i] = numbers that appear i times
  const bucket = Array(nums.length + 1)
    .fill()
    .map(() => []);

  // Put each number into its frequency bucket
  for (const num in count) {
    const freq = count[num];

    bucket[freq].push(Number(num));
  }

  const result = [];

  // Start from highest frequency
  for (let i = bucket.length - 1; i >= 0; i--) {
    // Add all numbers from this bucket
    for (const num of bucket[i]) {
      result.push(num);

      // Stop once we have k elements
      if (result.length === k) {
        return result;
      }
    }
  }
};

// ------------------revision-1---------------------------------
var topKFrequent = function (nums, k) {
  let count = {};

  for (num of nums) {
    count[num] = (count[num] || 0) + 1;
  }

  let bucket = new Array(nums.length + 1).fill().map(() => []);

  for (num in count) {
    let freq = count[num];
    bucket[freq].push(Number(num));
  }
  let result = [];
  for (let i = bucket.length - 1; i >= 0; i--) {
    for (const num of bucket[i]) {
      result.push(num);
      if (result.length === k) {
        return result;
      }
    }
  }
  return result;
};

topKFrequent([1, 1, 1, 2, 2, 3, 4], 2);
