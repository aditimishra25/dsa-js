/**
 * Minimum Size Subarray Sum
 *
 * Goal:
 * Find the smallest length subarray
 * whose sum is greater than or equal to target.
 *
 * Example:
 * target = 7
 * nums = [2,3,1,2,4,3]
 *
 * Output = 2
 * Because [4,3] has sum = 7 and length = 2
 *
 * Approach:
 * Sliding Window (Dynamic Window)
 *
 * Why Sliding Window works?
 * Because all numbers are POSITIVE.
 *
 * This means:
 * - Expanding window increases sum
 * - Shrinking window decreases sum
 *
 * Time Complexity  -> O(n)
 * Space Complexity -> O(1)
 */

/**
 * @param {number} target
 * @param {number[]} nums
 * @return {number}
 */
var minSubArrayLen = function (target, nums) {

    // left pointer of window
    let left = 0;

    // stores current window sum
    let sum = 0;

    // stores smallest valid window length found
    // initialized to Infinity because
    // we are looking for MINIMUM
    let minLength = Infinity;

    /**
     * right pointer expands the window
     *
     * Window:
     * [left ........ right]
     */
    for (let right = 0; right < nums.length; right++) {

        // add current element into window sum
        sum += nums[right];

        /**
         * If current window sum satisfies condition
         * try shrinking the window from left
         * to find smaller valid subarray
         */
        while (sum >= target) {

            /**
             * Calculate current window length
             *
             * Example:
             * left = 2
             * right = 5
             *
             * length = 5 - 2 + 1 = 4
             */
            minLength = Math.min(
                minLength,
                right - left + 1
            );

            /**
             * Shrink window from left
             *
             * Remove left element from sum
             */
            sum -= nums[left];

            // move left pointer forward
            left++;
        }
    }

    /**
     * If minLength was never updated,
     * no valid subarray exists
     */
    return minLength === Infinity ? 0 : minLength;
};