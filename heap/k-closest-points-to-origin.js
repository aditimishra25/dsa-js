/**
 * K Closest Points to Origin
 *
 * Approach:
 * 1. Maintain a Max Heap of size k.
 * 2. Store [point, distance] in the heap.
 * 3. If heap size exceeds k, remove the farthest point.
 * 4. Remaining points in heap are the answer.
 *
 * Time: O(N log K)
 * Space: O(K)
 */

var kClosest = function (points, k) {
    // Max Heap
    let heap = [];
    // Process every point
    for (let point of points) {

        // Calculate squared distance
        // No need for sqrt because relative order remains the same
        let distance = point[0] * point[0] + point[1] * point[1];

        // Store point and its distance
        heap.push([point, distance]);

        // Restore Max Heap property
        bubbleUp(heap);

        // Keep only k closest points
        // Remove the farthest point
        if (heap.length > k) {
            heapPop(heap);
        }
    }

    // Extract only the points
    let result = [];
    for (let item of heap) {
        result.push(item[0]);
    }
    return result;
};


// =====================
// Bubble Up (Max Heap)
// =====================

function bubbleUp(heap) {
    let index = heap.length - 1;
    while (index > 0) {
        let parent = Math.floor((index - 1) / 2);

        // Parent already larger
        if (heap[parent][1] >= heap[index][1]) {
            break;
        }

        // Swap
        [heap[parent], heap[index]] = [heap[index], heap[parent]];

        index = parent;
    }
}


// =======================
// Bubble Down (Max Heap)
// =======================

function bubbleDown(heap) {
    let index = 0;
    while (true) {
        let left = 2 * index + 1;
        let right = 2 * index + 2;

        let largest = index;

        // Check left child
        if (left < heap.length && heap[left][1] > heap[largest][1]) {
            largest = left;
        }

        // Check right child
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


// =================
// Remove Root
// =================

function heapPop(heap) {
    // Only one element
    if (heap.length === 1) {
        return heap.pop();
    }

    // Save answer
    let root = heap[0];

    // Remove last node
    let last = heap.pop();

    // Move last node to root
    heap[0] = last;

    // Restore heap
    bubbleDown(heap);

    return root;
}

kClosest([[1, 3],[-2, 2],],1,); //[[-2,2]]
