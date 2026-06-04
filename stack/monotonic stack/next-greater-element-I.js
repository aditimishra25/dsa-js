/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
var nextGreaterElement = function(nums1, nums2) {

    // Step 1: Create a map to store next greater for each number in nums2
    let map = new Map();

    // Step 2: Stack for monotonic decreasing order
    let stack = [];

    // Step 3: Traverse nums2
    for (let i = 0; i < nums2.length; i++) {

        // While current element is greater than stack top
        while (
            stack.length > 0 &&
            nums2[i] > stack[stack.length - 1]
        ) {
            let smaller = stack.pop();

            // Current number is next greater for popped number
            map.set(smaller, nums2[i]);
        }

        // Push current element into stack
        stack.push(nums2[i]);
    }

    // Step 4: Remaining elements in stack have no greater element
    while (stack.length > 0) {
        map.set(stack.pop(), -1);
    }

    // Step 5: Build result for nums1
    let result = [];

    for (let num of nums1) {
        result.push(map.get(num));
    }

    return result;
};

// ------------------------revision-1-----------------------
var nextGreaterElement = function(nums1, nums2) {
    let map = new Map();

    let stack = [];

    for(let i =0; i<nums2.length; i++){
        while(stack.length > 0 && nums2[i] > stack[stack.length - 1]){
            map.set(stack.pop(), nums2[i])
        }
        stack.push(nums2[i])
    }

     while (stack.length > 0) {
        map.set(stack.pop(), -1);
    }
    let result = [];

    for (let num of nums1) {
        result.push(map.get(num));
    }
    return result
};