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
