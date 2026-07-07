/**
 * @param {number} n
 * @return {number}
 */
var climbStairs = function (n) {
  if (n <= 2) return n;
  return climbStairs(n - 1) + climbStairs(n - 2);
};

// -------------------revision-1---------------------------
// this will give time limit exceeded error because each value is getting counted numerous times, eg climbStairs(10) - > we check 9 + 8 and then for 9 again 8 + 7 and so on
// var climbStairs = function (n) {
//     if (n <= 2) return n
//     return climbStairs(n - 1) + climbStairs(n - 2)
// };

// Approach-1(Iterative)
var climbStairs = function (n) {
  if (n <= 2) return n;
  let x1Steps = 1;
  let x2Steps = 2;

  for (let i = 3; i <= n; i++) {
    let sum = x1Steps + x2Steps;
    x1Steps = x2Steps;
    x2Steps = sum;
  }

  return x2Steps;
};

// Approach-2(Memoization -> Store answers we've already calculated)
let hasSum = {};
var climbStairs = function (n) {
  hasSum = {};
  return calculateStairs(n);
};

calculateStairs = (n) => {
  if (n <= 2) return n;

  if (hasSum[n]) return hasSum[n];

  hasSum[n] = calculateStairs(n - 1) + calculateStairs(n - 2);
  return hasSum[n]
};
