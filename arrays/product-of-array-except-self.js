var productExceptSelf = function(nums) {

    // Create result array
    // Initially everything is 1
    // Example: [1,1,1,1]
    let res = new Array(nums.length).fill(1);

    // prefix = product of all LEFT side numbers
    let prefix = 1;

    // LEFT TO RIGHT pass
    for (let i = 0; i < nums.length; i++) {

        // Store left product at current index
        // Example:
        // i=0 -> nothing on left -> 1
        // i=1 -> left product = 1
        // i=2 -> left product = 1*2 = 2
        res[i] = prefix;

        // Update prefix for next position
        prefix *= nums[i];
    }

    // suffix = product of all RIGHT side numbers
    let suffix = 1;

    // RIGHT TO LEFT pass
    for (let i = nums.length - 1; i >= 0; i--) {

        // Multiply existing LEFT product
        // with RIGHT product
        //
        // Example:
        // res[2] already has left product = 2
        // suffix might be 4
        // final = 2 * 4 = 8
        res[i] *= suffix;

        // Update suffix for next position
        suffix *= nums[i];
    }

    return res;
};