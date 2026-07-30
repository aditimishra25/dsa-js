// Available Work
//       ↓
//    Max Heap

// Unavailable Work
//       ↓
//      Queue

//      Time
//       ↓
// Move expired work back into heap

/**
 *
 * Time Complexity:
 * O(n log 26) ≈ O(n)
 *
 * Space Complexity:
 * O(26)
 */

var leastInterval = function (tasks, n) {
  // -----------------------------
  // Step 1 : Count frequencies
  // -----------------------------
  let map = new Map();

  for (let task of tasks) {
    map.set(task, (map.get(task) || 0) + 1);
  }

  // -----------------------------
  // Step 2 : Build Max Heap
  // Heap stores only frequencies
  // -----------------------------
  let heap = [];

  for (let freq of map.values()) {
    heap.push(freq);
    bubbleUp(heap);
  }

  // -----------------------------
  // Queue stores:
  // [remainingFrequency, availableTime]
  // -----------------------------
  let queue = [];
  let time = 0;

  // Continue until every task finishes
  while (heap.length > 0 || queue.length > 0) {
    time++;

    // ---------------------------------
    // Step 3:
    // Move all cooled-down tasks
    // back into the heap
    // ---------------------------------
    while (queue.length > 0 && queue[0][1] <= time) {
      let [freq, availableTime] = queue.shift();
      heap.push(freq);
      bubbleUp(heap);
    }

    // ---------------------------------
    // Step 4:
    // Execute the task with the highest
    // remaining frequency
    // ---------------------------------
    if (heap.length > 0) {
      let freq = heapPop(heap);

      // One occurrence executed
      freq--;

      // Still more occurrences left
      if (freq > 0) {
        // Put into cooldown
        queue.push([freq, time + n + 1]);
      }
    }
  }
  return time;
};

/*==================================================
                MAX HEAP FUNCTIONS
===================================================*/

// Insert into heap
function bubbleUp(heap) {
  let index = heap.length - 1;

  while (index > 0) {
    let parent = Math.floor((index - 1) / 2);

    // Parent already larger
    if (heap[parent] >= heap[index]) break;
    
    [heap[parent], heap[index]] = [heap[index], heap[parent]];
    index = parent;
  }
}

// Restore heap after deletion
function bubbleDown(heap) {
  let index = 0;

  while (true) {
    let left = 2 * index + 1;
    let right = 2 * index + 2;

    let largest = index;

    if (left < heap.length && heap[left] > heap[largest]) largest = left;
    if (right < heap.length && heap[right] > heap[largest]) largest = right;
    if (largest === index) break;

    [heap[index], heap[largest]] = [heap[largest], heap[index]];
    index = largest;
  }
}

// Remove maximum element
function heapPop(heap) {
  if (heap.length === 1) {
    return heap.pop();
  }
  let root = heap[0];
  heap[0] = heap.pop();
  bubbleDown(heap);
  return root;
}
