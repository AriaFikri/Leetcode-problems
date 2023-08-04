/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function(prices) {
let forBuy = prices[0];
let max = 0;

for (let i = 1; i < prices.length; i++) {
  let diff = forBuy - prices[i];

  if (diff < max) max = diff;
  if (prices[i] < forBuy) forBuy = prices[i];
}
return Math.abs(max);
};