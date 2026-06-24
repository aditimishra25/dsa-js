/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */

var sortColors = function(nums) {

    // left = where next 0 should go
    let left = 0;

    // right = where next 2 should go
    let right = nums.length - 1;

    // current pointer
    let i = 0;

    while(i <= right) {

        // If current is 0
        if(nums[i] === 0) {

            // swap with left
            [nums[i], nums[left]] = [nums[left], nums[i]];

            left++;
            i++;
        }

        // If current is 2
        else if(nums[i] === 2) {

            // swap with right
            [nums[i], nums[right]] = [nums[right], nums[i]];

            right--;

            // IMPORTANT:
            // don't increment i here
            // because swapped value needs checking
        }

        // If current is 1
        else {
            i++;
        }
    }

    return nums;
};

// --------------------revision-1-------------------------------------
var sortColors = function(nums) {

    
};