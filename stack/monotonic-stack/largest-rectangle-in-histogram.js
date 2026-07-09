/**
 * Largest Rectangle in Histogram
 *
 * Monotonic Increasing Stack
 *
 * Stack stores indices.
 */
var largestRectangleArea = function (heights) {
  let area = 0;

  let stack = [];

  for (let i = 0; i < heights.length; i++) {
    // Current bar is smaller,
    // so previous taller bars cannot extend further right.
    while (stack.length > 0 && heights[stack[stack.length - 1]] > heights[i]) {
      let poppedIndex = stack.pop();

      let height = heights[poppedIndex];

      let right = i;

      let left = stack.length === 0 ? -1 : stack[stack.length - 1];

      let width = right - left - 1;

      area = Math.max(area, height * width);
    }

    stack.push(i);
  }

  // Process remaining bars
  while (stack.length > 0) {
    let poppedIndex = stack.pop();

    let height = heights[poppedIndex];

    let right = heights.length;

    let left = stack.length === 0 ? -1 : stack[stack.length - 1];

    let width = right - left - 1;

    area = Math.max(area, height * width);
  }

  return area;
};

// ------------------------revision-1---------------------------------
var largestRectangleArea = function (heights) {
  let maxArea = 0;
  let stack = [];

  for (let i = 0; i <= heights.length; i++) {
    let currHeight = i === heights.length ? 0 : heights[i];
    while (stack.length && currHeight < heights[stack[stack.length - 1]]) {
      let height = heights[stack.pop()];
      let right = i;
      let left = stack.length ? stack[stack.length - 1] : -1;

      let width = right - left - 1;

      maxArea = Math.max(maxArea, height * width);
    }

    stack.push(i);
  }

  return maxArea;
};
