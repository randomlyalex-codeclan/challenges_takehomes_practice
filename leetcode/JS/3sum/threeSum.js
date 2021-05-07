/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var threeSum = function (nums) {
	let [solution, left, right, pivot] = [[], 0, nums.length - 1, 0];
	if (nums.length < 3) return solution;
	nums.sort((a, b) => a - b);

	for (let [index, num] of nums.entries()) {
		if (num > 0) return solution;
		if (num === nums[index - 1]) continue;

		left = index + 1;
		right = nums.length - 1;
		let sum = 0 - num;

		while (left < right) {
			if (nums[left] + nums[right] === sum) {
				solution.push([num, nums[left], nums[right]]);
				left++;
				right--;

				while (left < right && nums[left] == nums[left - 1]) left++;
				while (left < right && nums[right] == nums[right + 1]) right--;
			} else if (nums[left] + nums[right] > sum) right--;
			else if (nums[left] + nums[right] < sum) left++;
		}
	}
	return solution;
};

console.log(threeSum([-1, 0, 1, 2, -1, -4]));
