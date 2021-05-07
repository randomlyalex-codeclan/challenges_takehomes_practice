/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function (prices) {
	let maxProfit = 0;
	let minVal = prices[0];
	for (let i = 0; i < prices.length; i++) {
		if (prices[i] < minVal) {
			minVal = prices[i];
		}
		const currentProfit = prices[i] - minVal;

		if (currentProfit > maxProfit) {
			maxProfit = currentProfit;
		}
	}
	return maxProfit;
};

console.log(maxProfit([7, 1, 5, 3, 6, 4]));
console.log(maxProfit([7, 6, 4, 3, 1]));
