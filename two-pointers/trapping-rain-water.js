/**
 * @param {number[]} height
 * @return {number}
 */
var trap = function (height) {
  let left = 0;
  let right = height.length - 1;

  // highest wall seen from left
  let leftMax = 0;

  // highest wall seen from right
  let rightMax = 0;

  let water = 0;

  while (left < right) {
    // process smaller side
    if (height[left] < height[right]) {
      // update left max
      leftMax = Math.max(leftMax, height[left]);

      // trapped water at current position
      water += leftMax - height[left];

      left++;
    } else {
      // update right max
      rightMax = Math.max(rightMax, height[right]);

      // trapped water
      water += rightMax - height[right];

      right--;
    }
  }

  return water;
};

//----------------------------revision-1-------------------------------------
// trap([4, 2, 0, 3, 2, 5]); //Output: 9

var trap = function (height) {
  let water = 0;
  let left = 0,
    right = height.length - 1, //6
    leftMax = 0,
    rightMax = 0;

  while (left < right) {
    //0<5, 1<5,2<5, 3<5, 4<5
    if (height[left] < height[right]) {
      //height[0] < height[5], height[1] < height[5], height[2] < height[5], height[3] < height[5], height[4] < height[5]
      leftMax = Math.max(height[left], leftMax); //4, 4, 4, 4, 4
      water = water + (leftMax - height[left]); //0, 2, 6, 7, 9
      left++; //1, 2, 3, 4, 5
    } else {
      rightMax = Math.max(height[right], rightMax);
      water = water + (rightMax - height[right]);
      right--;
    }
  }
  return water; //9
};
