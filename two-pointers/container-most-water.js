/**
 * @param {number[]} height
 * @return {number}
 */

/* INTUITION: 
since area in height*width so first calculate width by difference 
between indices.
for height, it will the min between the height at those indices.
now by using two-pointers approach we keep the indices at two end 
and then keep on iterating for smaller height*/

var maxArea = function (height) {
  let max = 0,
    left = 0,
    right = height.length - 1;
  while (left < right) {
    let area = Math.min(height[right], height[left]) * (right - left);
    max = Math.max(area, max);
    if (height[left] < height[right]) left++;
    else right--;
  }
  return max;
};

//----------------------------revision-1-------------------------------------
var maxArea = function (height) {
  let maxArea = 0,
    left = 0,
    right = height.length - 1;

  while (left < right) {
    let area = Math.min(height[left], height[right]) * (right - left);
    maxArea = Math.max(area, maxArea);
    if (height[left] < height[right]) left++;
    else right--;
  }
  return maxArea;
};
