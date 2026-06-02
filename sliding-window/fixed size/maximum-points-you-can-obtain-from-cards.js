/**
 * @param {number[]} cardPoints
 * @param {number} k
 * @return {number}
 */
var maxScore = function(cardPoints, k) {
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