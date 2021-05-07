const twoSums = require('./twoSums');

test('Show nums[0] + nums[1] == 9, we return [0, 1]', () => {
	const nums = [2, 7, 11, 15];
	const target = 9;
	expect(twoSums(nums, target)).toEqual([0, 1]);
});

test('Find that nums[1] + nums[2] == 6', () => {
	const nums = [3, 2, 4];
	const target = 6;
	expect(twoSums(nums, target)).toEqual([1, 2]);
});
