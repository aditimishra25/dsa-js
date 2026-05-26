/**
 * @param {number[]} height
 * @return {number}
 */
var trap = function(height) {

    let left = 0;
    let right = height.length - 1;

    // highest wall seen from left
    let leftMax = 0;

    // highest wall seen from right
    let rightMax = 0;

    let water = 0;

    while(left < right) {

        // process smaller side
        if(height[left] < height[right]) {

            // update left max
            leftMax = Math.max(leftMax, height[left]);

            // trapped water at current position
            water += leftMax - height[left];

            left++;
        }
        else {

            // update right max
            rightMax = Math.max(rightMax, height[right]);

            // trapped water
            water += rightMax - height[right];

            right--;
        }
    }

    return water;
};

trap([4,2,0,3,2,5])