/**
 * Largest Rectangle in Histogram
 *
 * Monotonic Increasing Stack
 *
 * Stack stores indices.
 */
var largestRectangleArea = function(heights) {

    let area = 0;

    let stack = [];

    for (let i = 0; i < heights.length; i++) {

        // Current bar is smaller,
        // so previous taller bars cannot extend further right.
        while (
            stack.length > 0 &&
            heights[stack[stack.length - 1]] > heights[i]
        ) {

            let poppedIndex = stack.pop();

            let height = heights[poppedIndex];

            let right = i;

            let left =
                stack.length === 0
                    ? -1
                    : stack[stack.length - 1];

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

        let left =
            stack.length === 0
                ? -1
                : stack[stack.length - 1];

        let width = right - left - 1;

        area = Math.max(area, height * width);
    }

    return area;
};