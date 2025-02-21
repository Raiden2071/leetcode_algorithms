/**
 * @param {number[]} prices
 * @return {number}
 */
const prices = [7,1,5,3,6,4];

// var maxProfit = function(prices) {
//
//     let totalProfit = 0;
//
//     for (let i = 0; i < prices.length; i++) {
//         const currentBoughtPrice = prices[i]; // 1
//         let maxLocalProfit = 0;
//
//         for (let j = i + 1; j < prices.length - 1; j++) {
//             let sellPrice = prices[j];
//             maxLocalProfit = Math.max(maxLocalProfit, sellPrice - currentBoughtPrice);
//         }
//         totalProfit += maxLocalProfit;
//     }
//
//     return totalProfit;
// };
var maxProfit = function(prices) {
    let maxProfit = 0;

    for (let i = 1; i < prices.length; i++) {
        if (prices[i] > prices[i - 1]) {
            maxProfit += prices[i] - prices[i - 1];
        }
    }

    return maxProfit;
};


console.log(maxProfit(prices));