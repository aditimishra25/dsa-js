// Constructor function to initialize MinStack
var MinStack = function () {
    // This array will act as our stack.
    // Each element in the stack will store:
    // [value, minimum_value_at_this_point]
    this.stack = [];
};

/** 
 * Push a value onto the stack.
 * Also store the minimum value at this stage.
 * @param {number} val
 * @return {void}
 */
MinStack.prototype.push = function (val) {

    // Get current minimum from the stack
    let min_val = this.getMin();

    // If stack is empty OR current value is smaller than existing minimum
    if (min_val === null || val < min_val) {
        min_val = val;  // Update minimum
    }

    // Push an array containing:
    // [actual value, minimum so far]
    this.stack.push([val, min_val]);
};

/**
 * Remove the top element from the stack.
 * @return {void}
 */
MinStack.prototype.pop = function () {
    // Remove the last inserted element (LIFO principle)
    this.stack.pop();
};

/**
 * Get the top element of the stack.
 * @return {number|null}
 */
MinStack.prototype.top = function () {

    // If stack is not empty:
    // Return the first value (actual element) of last array
    if (this.stack.length > 0) {
        return this.stack[this.stack.length - 1][0];
    }

    // If stack is empty, return null
    return null;
};

/**
 * Retrieve the minimum element in the stack.
 * @return {number|null}
 */
MinStack.prototype.getMin = function () {

    // If stack is not empty:
    // Return the second value (minimum so far) of last array
    if (this.stack.length > 0) {
        return this.stack[this.stack.length - 1][1];
    }

    // If stack is empty, return null
    return null;
};

/** 
 * Usage Example:
 * var obj = new MinStack();
 * obj.push(val);
 * obj.pop();
 * var topValue = obj.top();
 * var minValue = obj.getMin();
 */