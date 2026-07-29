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

topKFrequent([1, 1, 1, 2, 2, 3, 4], 2); //[1, 2]

// ------------------revision-2(using heap)---------------------------------
var topKFrequent = function (nums, k) {
  let map = new Map();

  for (let num of nums) {
    map.set(num, (map.get(num) || 0) + 1);
  }
  
  let heap = [];
  for (let [num, freq] of map) {
    heap.push([num, freq]);
    bubbleUp(heap);

    if (heap.length > k) heapPop(heap);
  }
  let result = [];
  for (let item of heap) {
    result.push(item[0]);
  }
  return result;
};

bubbleUp = (heap) => {
  let index = heap.length - 1;
  while (index > 0) {
    let parent = Math.floor((index - 1) / 2);
    if (heap[parent][1] <= heap[index][1]) break;
    [heap[parent], heap[index]] = [heap[index], heap[parent]];
    index = parent;
  }
};

bubbleDown = (heap) => {
  let index = 0;
  while (true) {
    let left = 2 * index + 1;
    let right = 2 * index + 2;

    let smallest = index;

    if (left < heap.length && heap[left][1] < heap[smallest][1]) smallest = left;
    if (right < heap.length && heap[right][1] < heap[smallest][1]) smallest = right;
    if (smallest == index) break;

    [heap[index], heap[smallest]] = [heap[smallest], heap[index]];
    index = smallest;
  }
};

heapPop = (heap) => {
  if (heap.length == 1) return heap.pop();
  let root = heap[0];
  let last = heap.pop();
  if (heap.length > 0) {
    heap[0] = last;
    bubbleDown(heap);
  }
  return root;
};

topKFrequent([1, 1, 1, 2, 2, 3, 4], 2);
