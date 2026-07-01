/**
 * @param {number[]} cardPoints
 * @param {number} k
 * @return {number}
 */

// Problem:
// Maximum Points From Cards

// Pattern:
// Fixed Size Sliding Window

// Trick:
// Instead of picking k cards,
// find minimum window of size n-k.

var maxScore = function (cardPoints, k) {
  let total = cardPoints.reduce((sum, num) => sum + num, 0);

  if (cardPoints.length === k) {
    return total;
  }

  let windowSize = cardPoints.length - k;

  let windowSum = 0;

  for (let i = 0; i < windowSize; i++) {
    windowSum += cardPoints[i];
  }

  let minWindowSum = windowSum;

  let left = 0;

  for (let right = windowSize; right < cardPoints.length; right++) {
    // Add new element entering window
    windowSum += cardPoints[right];

    // Remove old element leaving window
    windowSum -= cardPoints[left];

    left++;

    minWindowSum = Math.min(minWindowSum, windowSum);
  }

  return total - minWindowSum;
};

// -------------------------revision-1------------------------------------------
var maxScore = function (cardPoints, k) {
  let totalSum = cardPoints.reduce((sum, num) => sum + num, 0);

  if (cardPoints.length == k) return totalSum;

  let windowSize = cardPoints.length - k;
  let windowSum = 0;
  for (let i = 0; i < windowSize; i++) {
    windowSum += cardPoints[i];
  }

  let minSum = windowSum
  for (let i = windowSize; i < cardPoints.length; i++) {
    windowSum = windowSum + cardPoints[i] - cardPoints[i - windowSize]
    minSum = Math.min(minSum, windowSum);
  }

  return totalSum - minSum;
};

maxScore([1, 2, 3, 4, 5, 6, 1], (k = 3));
