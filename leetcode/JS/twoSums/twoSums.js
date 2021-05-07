/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
const twoSums = (nums, target) => {
	store = new Map();

	for (let [index, num] of nums.entries()) {
		if (store.has(num)) return [store.get(num), index];
		store.set(target - num, index);
	}
	return 'No sums found';
};

console.log(twoSums([2, 7, 11, 15], 9));
console.log(twoSums([3, 2, 4], 6));

module.exports = twoSums;
