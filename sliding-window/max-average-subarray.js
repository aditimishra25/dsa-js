/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */

/* used fixed sliding window as length of longest substring is known 

intuition: 
        i) Initial Window Calculation:The algorithm starts by calculating the sum of 
        the first \(k\) elements, which represents the sum of the initial fixed-size 
        window. The average is derived from this sum and stored as the initial maxAvg.
        ii) Sliding the Window:Instead of recalculating the entire sum for each subsequent 
        window (which would be inefficient), the algorithm slides the window one element to 
        the right in each iteration.
        iii) Efficient Updates:To maintain the current window's sum efficiently, when the 
        window moves from index \(i-k\) to \(i-k+1\) (and adding the new element at 
        index \(i\)), the algorithm subtracts the element that is leaving the window 
        (nums[i - k]) and adds the new element entering the window (nums[i]). 
        This operation is maxSum += nums[i] - nums[i - k].
        iv) Tracking the Maximum:In each step, after updating the maxSum, the code 
        calculates the current window's average (maxSum / k) and compares it with the 
        existing maxAvg, updating maxAvg if the current average is higher.  
*/
var findMaxAverage = function (nums, k) {
  let maxSum = 0,
    maxAvg = 0;

  for (let i = 0; i < k; i++) {
    maxSum += nums[i];
  }

  maxAvg = maxSum / k;

  for (let i = k; i < nums.length; i++) {
    maxSum += nums[i] - nums[i - k];
    maxAvg = Math.max(maxAvg, maxSum / k);
  }

  return maxAvg;
};
