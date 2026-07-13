var findDuplicate = function (nums) {
  // Both start at index 0
  let slow = 0;
  let fast = 0;

  // Phase 1:
  // Find where slow and fast meet inside the cycle
  do {
    slow = nums[slow]; // move 1 step
    fast = nums[nums[fast]]; // move 2 steps
  } while (slow !== fast);

  // Phase 2:
  // Start a new pointer from index 0
  let pointer = 0;

  // Move both one step at a time
  while (pointer !== slow) {
    pointer = nums[pointer];
    slow = nums[slow];
  }

  // Meeting point = duplicate number
  return pointer;
};

// ----------------revision-1-----------------------
var findDuplicate = function (nums) {
  let slow = 0;
  let fast = 0;

  do {
    slow = nums[slow];
    fast = nums[nums[fast]];
  } while (slow != fast);

  let pointer = 0;

  while(pointer != slow){
    pointer = nums[pointer];
    slow = nums[slow];
  }

  return pointer
};
