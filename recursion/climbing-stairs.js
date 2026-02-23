/**
 * @param {number} n
 * @return {number}
 */
var climbStairs = function (n) {
    if (n <= 2) return n;
    return climbStairs(n - 1) + climbStairs(n - 2)

};