var moveZeroes = function(nums) {

    // right = position where next non-zero should go
    let right = 0;

    // left scans the array
    for(let left = 0; left < nums.length; left++) {

        // if current number is NOT zero
        if(nums[left] != 0) {

            // swap current non-zero with right position
            let temp = nums[right];
            nums[right] = nums[left];
            nums[left] = temp;

            // move right forward
            right++;
        }
    }

    return nums;
};