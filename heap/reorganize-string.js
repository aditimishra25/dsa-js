/**
 * Reorganize String
 *
 * Idea:
 * -----
 * 1. Count frequency of every character.
 * 2. Store [character, frequency] in a Max Heap.
 * 3. Always pick the character with the highest frequency.
 * 4. Don't put it back immediately (otherwise it could be picked again).
 * 5. Keep it aside in 'prev'.
 * 6. Before processing the next character, put the previous character
 *    back into the heap (if it still has remaining frequency).
 *
 * Time Complexity:
 * O(N log K)
 * N = length of string
 * K = number of unique characters (<=26 for lowercase letters)
 *
 * Space Complexity:
 * O(K)
 */

var reorganizeString = function (s) {
  // -----------------------------
  // Step 1: Count character frequency
  // -----------------------------
  let map = new Map();

  for (let char of s) {
    map.set(char, (map.get(char) || 0) + 1);
  }

  // -----------------------------
  // Step 2: Build Max Heap
  // Heap stores:
  // [character, frequency]
  // -----------------------------
  let heap = [];

  for (let [char, freq] of map) {
    heap.push([char, freq]);
    bubbleUp(heap);
  }

  // Final answer
  let result = "";

  // Previous character that cannot be reused immediately
  let prev = null;

  // -----------------------------
  // Step 3: Build answer
  // -----------------------------
  while (heap.length > 0) {
    // Remove the character with highest frequency
    let [char, freq] = heapPop(heap);

    // Add character to answer
    result += char;

    // One occurrence has been used
    freq--;

    // Push previous character back into heap
    // (if it still has remaining occurrences)
    if (prev && prev[1] > 0) {
      heap.push(prev);
      bubbleUp(heap);
    }

    // Current character becomes previous
    prev = [char, freq];
  }

  // If we couldn't use every character,
  // then no valid answer exists.
  return result.length === s.length ? result : "";
};

// =========================================
// Bubble Up (Max Heap)
// =========================================

function bubbleUp(heap) {
  let index = heap.length - 1;

  while (index > 0) {
    let parent = Math.floor((index - 1) / 2);

    // Parent already has higher frequency
    if (heap[parent][1] >= heap[index][1]) {
      break;
    }

    // Swap parent and child
    [heap[parent], heap[index]] = [heap[index], heap[parent]];

    index = parent;
  }
}

// =========================================
// Bubble Down (Max Heap)
// =========================================

function bubbleDown(heap) {
  let index = 0;

  while (true) {
    let left = 2 * index + 1;
    let right = 2 * index + 2;

    let largest = index;

    // Left child has larger frequency
    if (left < heap.length && heap[left][1] > heap[largest][1]) {
      largest = left;
    }

    // Right child has larger frequency
    if (right < heap.length && heap[right][1] > heap[largest][1]) {
      largest = right;
    }

    // Heap property satisfied
    if (largest === index) {
      break;
    }

    // Swap
    [heap[index], heap[largest]] = [heap[largest], heap[index]];

    index = largest;
  }
}

// =========================================
// Remove Root of Max Heap
// =========================================

function heapPop(heap) {
  // Only one element
  if (heap.length === 1) {
    return heap.pop();
  }

  // Save root
  let root = heap[0];

  // Remove last node
  let last = heap.pop();

  // Move last node to root
  heap[0] = last;

  // Restore heap
  bubbleDown(heap);
  return root;
}

reorganizeString("aab"); // "aba"
