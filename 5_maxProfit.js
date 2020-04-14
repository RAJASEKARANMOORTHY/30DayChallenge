// 122. Best Time to Buy and Sell Stock II

// Say you have an array for which the ith element is the price of a given stock on day i.

// Design an algorithm to find the maximum profit. You may complete as many transactions as you like (i.e., buy one and sell one share of the stock multiple times).

// Note: You may not engage in multiple transactions at the same time (i.e., you must sell the stock before you buy again).

// Example 1:

// Input: [7,1,5,3,6,4]
// Output: 7
// Explanation: Buy on day 2 (price = 1) and sell on day 3 (price = 5), profit = 5-1 = 4.
//              Then buy on day 4 (price = 3) and sell on day 5 (price = 6), profit = 6-3 = 3.
// Example 2:

// Input: [1,2,3,4,5]
// Output: 4
// Explanation: Buy on day 1 (price = 1) and sell on day 5 (price = 5), profit = 5-1 = 4.
//              Note that you cannot buy on day 1, buy on day 2 and sell them later, as you are
//              engaging multiple transactions at the same time. You must sell before buying again.
// Example 3:

// Input: [7,6,4,3,1]
// Output: 0
// Explanation: In this case, no transaction is done, i.e. max profit = 0.

// https://leetcode.com/problems/best-time-to-buy-and-sell-stock-ii/


/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit_1 = function (prices) {
    let noOfDay = prices.length;
    let buyDay = 0,
        sellDay = 1;

    let minPrice = prices[buyDay];
    let profit = 0;

    while (sellDay < noOfDay) {

        // Buy on today and Sell on next day.
        if (prices[buyDay] < prices[sellDay]) {
            profit += (prices[sellDay] - prices[buyDay]);
        }

        buyDay += 1;
        sellDay += 1;
    }

    return profit;
};

// Peak Valley

var maxProfit = function (prices) {
    let day = 0;
    let minPrice = prices[0]; // Valley
    let maxPrice = prices[0]; // Peak
    let maxprofit = 0;

    let noOfDay = prices.length - 1;
    while (day < noOfDay) {
        while (day < noOfDay && prices[day] >= prices[day + 1])
            day++;

        minPrice = prices[day];

        while (day < noOfDay && prices[day] <= prices[day + 1])
            day++;

        maxPrice = prices[day];

        maxprofit += maxPrice - minPrice;
    }
    return maxprofit;
}

console.log(maxProfit([7, 1, 5, 3, 6, 4])) // 7
console.log(maxProfit([1, 2, 3, 4, 5])) // 4
console.log(maxProfit([7, 6, 4, 3, 1])) // 0