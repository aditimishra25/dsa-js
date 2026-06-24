/**
 * @param {number[]} temperatures
 * @return {number[]}
 */

var dailyTemperatures = function (temperatures) {

    // Step 1: Create result array filled with 0
    // Default is 0 because if no warmer day exists → answer is 0
    let result = new Array(temperatures.length).fill(0);

    // Step 2: Create a stack
    // We will store INDICES (not temperatures)
    // Why indices? Because we need to calculate the number of days difference
    let stack = [];

    // Step 3: Loop through each day
    for (let i = 0; i < temperatures.length; i++) {

        // Step 4: While stack is not empty
        // AND current temperature is greater than temperature at top index of stack
        // That means we found a warmer day for the previous day
        while (
            stack.length > 0 &&
            temperatures[i] > temperatures[stack[stack.length - 1]]
        ) {

            // Remove the previous day's index
            let prevIndex = stack.pop();

            // Calculate how many days we waited
            result[prevIndex] = i - prevIndex;
        }

        // Step 5: Push current index into stack
        // This day is waiting for a warmer future day
        stack.push(i);
    }

    // Step 6: Return result array
    return result;
};
