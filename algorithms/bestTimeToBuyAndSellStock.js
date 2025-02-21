/**
 * @param {number[]} prices
 * @return {number}
 */
const prices = [7,6,4,3,1]

var maxProfit = function(prices) {
    if (!prices  || !prices.length) {
        return 0;
    }

    let minimumPriceForBuy = prices[0]; // we should get the smallest value
    let maximumPriceForSell = 0; // we should get the biggest value
    let maxProfit = 0;

    prices.forEach((price) => {
        if (price < minimumPriceForBuy) {
            minimumPriceForBuy = price;
            maximumPriceForSell = 0;
        }
        if (price > maximumPriceForSell) {
            maximumPriceForSell = price;
        }

        // calculate current profit
        const profitPrice = maximumPriceForSell - minimumPriceForBuy;
        if (profitPrice > maxProfit) {
            maxProfit = profitPrice;
        }
    });

    return maxProfit;
};

// BEST VARIANT
// var maxProfit = function(prices) {
//
//     let minimumPriceForBuy = Infinity;
//     let maxProfit = 0;
//
//     prices.forEach((price) => {
//         if (minimumPriceForBuy > price) {
//             minimumPriceForBuy = price;
//         } else {
//             maxProfit = Math.max(maxProfit, price - minimumPriceForBuy);
//         }
//     });
//
//     return maxProfit;
// };

console.log(maxProfit(prices));