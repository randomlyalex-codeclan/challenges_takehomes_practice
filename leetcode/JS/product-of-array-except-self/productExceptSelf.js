/**
 * @param {number[]} nums
 * @return {number[]}
 */
var productExceptSelf = function (nums) {
	let zerosFound = 0;
	const nonZeroTotalProduct = nums.reduce((total, amount) => {
		if (amount != 0) {
			return total * amount;
		} else zerosFound += 1;
		return total;
	});
	let productArray = [];

	if (zerosFound === 0) {
		for (num of nums) {
			productArray.push(nonZeroTotalProduct / num);
		}
	} else if (zerosFound === 1) {
		for (num of nums) {
			if (num !== 0) {
				productArray.push(0);
			} else {
				productArray.push(nonZeroTotalProduct);
			}
		}
	} else if (zerosFound > 1) {
		for (let j = 0; j < nums.length; j++) productArray[j] = 0;
	}

	return productArray;
};

console.log(productExceptSelf([1, 2, 3, 4]));
console.log(productExceptSelf([-1, 1, 0, -3, 3]));
console.log(productExceptSelf([-1, 0, 1, -3, 3, 0]));
