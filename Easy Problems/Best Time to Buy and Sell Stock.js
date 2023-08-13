function maxProfit(prices) {
    let left = 0;
    let right = 1;
    let max_profit = 0;
    while (right < prices.length) {
      if (prices[left] < prices[right]) {
        let current_profit = prices[right] - prices[left];
        max_profit = Math.max(current_profit, max_profit);
      } else {
        left = right;
      }
      right++;
    }

    return max_profit;
};


console.log(maxProfit([7,1,5,3,6,4]))
console.log(maxProfit([7,6,4,3,1]))
console.log(maxProfit([1, 2]));
console.log(maxProfit([2, 4, 1]));