/** *
 * Intuition:
 * ----------
 * Maintain two heaps:
 *
 * Max Heap (left)  -> Stores the smaller half
 * Min Heap (right) -> Stores the larger half
 *
 * Rules:
 * 1. Every element in maxHeap <= every element in minHeap.
 * 2. Heap sizes can differ by at most 1.
 *
 * Time:
 * addNum()      -> O(log n)
 * findMedian()  -> O(1)
 *
 * Space:
 * O(n)
 */

// ALGORITHM:
//              addNum(x)
//                  │
//                  ▼
// Compare with maxHeap.top()
//         │                 │
//         ▼                 ▼
//     Max Heap          Min Heap
//         │
//         ▼
//           Rebalance if needed
//                  │
//                  ▼

// findMedian()

// If left bigger
//     return left.top()

// If right bigger
//     return right.top()

// If equal
//     return (left.top()+right.top())/2

// ===================================================
// Median Finder
// ===================================================

var MedianFinder = function () {
  // Smaller half
  this.maxHeap = [];

  // Larger half
  this.minHeap = [];
};

// ===================================================
// Add a new number
// ===================================================

MedianFinder.prototype.addNum = function (num) {
  // ---------------------------------------
  // Step 1:
  // Decide which heap the number belongs to
  // ---------------------------------------

  if (this.maxHeap.length === 0 || num <= this.maxHeap[0]) {
    maxHeapPush(this.maxHeap, num);
  } else {
    minHeapPush(this.minHeap, num);
  }

  // ---------------------------------------
  // Step 2:
  // Balance the heaps
  // Difference in size should never exceed 1
  // ---------------------------------------

  if (this.maxHeap.length > this.minHeap.length + 1) {
    let value = maxHeapPop(this.maxHeap);

    minHeapPush(this.minHeap, value);
  } else if (this.minHeap.length > this.maxHeap.length + 1) {
    let value = minHeapPop(this.minHeap);

    maxHeapPush(this.maxHeap, value);
  }
};

// ===================================================
// Return Median
// ===================================================

MedianFinder.prototype.findMedian = function () {
  // Left heap has more elements
  if (this.maxHeap.length > this.minHeap.length) {
    return this.maxHeap[0];
  }

  // Right heap has more elements
  if (this.minHeap.length > this.maxHeap.length) {
    return this.minHeap[0];
  }

  // Equal size
  return (this.maxHeap[0] + this.minHeap[0]) / 2;
};

// ===================================================
// MAX HEAP
// ===================================================

function maxHeapPush(heap, value) {
  heap.push(value);

  let index = heap.length - 1;

  while (index > 0) {
    let parent = Math.floor((index - 1) / 2);
    if (heap[parent] >= heap[index]) break;
    [heap[parent], heap[index]] = [heap[index], heap[parent]];
    index = parent;
  }
}

function maxHeapPop(heap) {
  if (heap.length === 1) {
    return heap.pop();
  }

  let root = heap[0];
  heap[0] = heap.pop();
  let index = 0;

  while (true) {
    let left = 2 * index + 1;
    let right = 2 * index + 2;

    let largest = index;

    if (left < heap.length && heap[left] > heap[largest]) {
      largest = left;
    }

    if (right < heap.length && heap[right] > heap[largest]) {
      largest = right;
    }

    if (largest === index) break;
    [heap[index], heap[largest]] = [heap[largest], heap[index]];
    index = largest;
  }

  return root;
}

// ===================================================
// MIN HEAP
// ===================================================

function minHeapPush(heap, value) {
  heap.push(value);

  let index = heap.length - 1;

  while (index > 0) {
    let parent = Math.floor((index - 1) / 2);
    if (heap[parent] <= heap[index]) break;
    [heap[parent], heap[index]] = [heap[index], heap[parent]];
    index = parent;
  }
}

function minHeapPop(heap) {
  if (heap.length === 1) {
    return heap.pop();
  }

  let root = heap[0];
  heap[0] = heap.pop();
  let index = 0;

  while (true) {
    let left = 2 * index + 1;
    let right = 2 * index + 2;

    let smallest = index;

    if (left < heap.length && heap[left] < heap[smallest]) {
      smallest = left;
    }
    if (right < heap.length && heap[right] < heap[smallest]) {
      smallest = right;
    }
    if (smallest === index) break;

    [heap[index], heap[smallest]] = [heap[smallest], heap[index]];
    index = smallest;
  }

  return root;
}
