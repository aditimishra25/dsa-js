/**
 * LeetCode 502 - IPO
 *
 * Intuition:
 * ----------
 * We can only choose projects whose required capital <= current capital (w).
 *
 * Steps:
 * 1. Combine capital & profit into one array.
 * 2. Sort projects by required capital.
 * 3. Maintain a Max Heap of profits of all currently affordable projects.
 * 4. Pick the most profitable project, increase capital.
 * 5. Repeat at most k times.
 *
 * Time Complexity:
 * O(n log n + k log n)
 *
 * Space Complexity:
 * O(n)
 */

var findMaximizedCapital = function (k, w, profits, capital) {
  // -----------------------------------
  // Step 1: Combine capital & profit
  // Each project becomes:
  // [capitalNeeded, profit]
  // -----------------------------------
  let projects = [];
  for (let i = 0; i < profits.length; i++) {
    projects.push([capital[i], profits[i]]);
  }

  // -----------------------------------
  // Step 2: Sort by required capital
  // -----------------------------------
  projects.sort((a, b) => a[0] - b[0]);

  // -----------------------------------
  // Max Heap stores only profits
  // -----------------------------------
  let heap = [];

  // Pointer to first unseen project
  let i = 0;

  // -----------------------------------
  // We can complete at most k projects
  // -----------------------------------
  for (let j = 0; j < k; j++) {
    // -----------------------------------
    // Add every affordable project
    // into the Max Heap
    // -----------------------------------
    while (i < projects.length && projects[i][0] <= w) {
      heap.push(projects[i][1]);
      bubbleUp(heap);
      i++;
    }

    // -----------------------------------
    // No affordable project left
    // -----------------------------------
    if (heap.length === 0) {
      break;
    }

    // -----------------------------------
    // Choose the most profitable project
    // -----------------------------------
    let profit = heapPop(heap);

    // Increase current capital
    w += profit;
  }

  return w;
};

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
