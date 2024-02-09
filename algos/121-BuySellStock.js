/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function(prices) {
    // left p inter - lowest price
    let l = 0;
    // right pointer - highest price
    let r = 1;
    // maxProfit
    let maxProfit = 0;
    
    // iterate over price array
    while (r < prices.length) {
        const profit = prices[r]-prices[l]
        // when it's profitable
        if (profit > 0) {
            // update maxP
            maxProfit = Math.max(maxProfit, profit)
        } else {
            // otherwise update left pointer
            l = r;
        }
            r++;
    }
    return maxProfit
};

// // Another syntactical approach, similar concept
// var maxProfit = function(prices) {
//     let minPrice = prices[0];
//     let maxProfit = 0;

//     for (let i = 1; i < prices.length; i++) {
//         if (prices[i] < minPrice) {
//             minPrice = prices[i];
//         } else if (prices[i] - minPrice > maxProfit) {
//             maxProfit = prices[i] - minPrice;
//         }
//     }

//     return maxProfit;
// };