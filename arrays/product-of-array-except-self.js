var productExceptSelf = function (nums) {
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

// ----------------------revision-1------------------------------------
// Input: nums = [1,2,3,4]
// Output: [24,12,8,6]

var productExceptSelf = function (nums) {
  let res = new Array(nums.length).fill(1);

  //brute force
  // for(let i =0; i<nums.length; i++){
  //     for(let j =0; j<nums.length; j++){
  //         if(i==j) continue;
  //         res[i] *= nums[j]
  //     }
  // }

  //optimal: product of elements on left and right side
  let prefix = 1,
    suffix = 1;
  for (let i = 0; i < nums.length; i++) {
    res[i] = prefix; //1,1,2,6
    prefix = prefix * nums[i]; //1,1,6,24
  }

  for (let i = nums.length - 1; i >= 0; i--) {
    res[i] = res[i] * suffix; //6,8,12,24
    suffix = suffix * nums[i]; //4,12,24,24
  }
  return res;
};

productExceptSelf([1, 2, 3, 4])