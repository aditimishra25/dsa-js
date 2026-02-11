/**
 * Definition for isBadVersion()
 * 
 * @param {integer} version number
 * @return {boolean} whether the version is bad
 * isBadVersion = function(version) {
 *     ...
 * };
 */

/**
 * We are given access to isBadVersion(version).
 * Our goal: Find the FIRST bad version.
 *
 * Instead of checking every version (O(n)),
 * we use Binary Search to reduce it to O(log n).
 *
 * @param {function} isBadVersion()
 * @return {function}
 */
var solution = function (isBadVersion) {

    /**
     * @param {integer} n Total versions
     * @return {integer} The first bad version
     */
    return function (n) {

        // Binary search range
        let left = 1, right = n;

        // Continue until the search space is reduced to one element
        while (left < right) {

            // Find middle version
            let mid = Math.floor((left + right) / 2);

            // If mid is bad,
            // the first bad version could be mid or before it
            if (isBadVersion(mid)) {
                right = mid;  // Keep mid in the search space
            } 
            // If mid is good,
            // the first bad version must be after mid
            else {
                left = mid + 1;
            }
        }

        // When left == right, we found the first bad version
        return left;
    };
};
