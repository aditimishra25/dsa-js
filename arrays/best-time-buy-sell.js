/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function (prices) {
  let minPrice = prices[0],
    profit = 0;
  for (let i = 1; i < prices.length; i++) {
    if (prices[i] < minPrice) minPrice = prices[i];
    profit = Math.max(prices[i] - minPrice, profit);
  }

  return profit;
};

// --------------------------revision-1------------------------------------
var maxProfit = function (prices) {
  let minPrice = prices[0],
    maxProfit = 0;

  for (let i = 0; i < prices.length; i++) {
    if (prices[i] < minPrice) minPrice = prices[i];
    maxProfit = Math.max(prices[i] - minPrice, maxProfit);
  }
  return maxProfit;
};
