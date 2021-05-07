/**
 * @param {number[]} nums
 * @return {number}
 */
var maxSubArray = function (nums) {
	let maxSum = nums[0];
	let currentSum = nums[0];
	let currentNums = [nums[0]];

	const total = (array) => {
		array.reduce((total, amount) => total + amount);
	};

	for (i = 1; i < nums.length; i++) {
		currentNums.push(nums[i]);
		currentSum += nums[i];
		if (nums[i] > currentSum) {
			currentNums = [nums[i]];
			currentSum = nums[i];
		}
		if (currentSum > maxSum) {
			maxSum = currentSum;
		}
	}

	return maxSum;
};

console.log(maxSubArray([-2, 1, -3, 4, -1, 2, 1, -5, 4]));
console.log(maxSubArray([1]));
console.log(maxSubArray([5, 4, -1, 7, 8]));
