/**
 * @param {number[]} nums
 * @return {boolean}
 */
const containsDuplicate = (nums) => {
	store = new Map();
	for (i = 0; i < nums.length; i++) {
		if (store.has(nums[i])) return true;
		store.set(nums[i], i);
	}
	return false;
};

// Map uses
//O(n) time complexity, and O(n) space because it makes a hashmap.
// Instead of a Map could just add each to a set, and check before adding if it "has" the item, return true or false.
//Sorting the array and checking each item and item + 1
//would give worse time complexity O(nlogn), but save space complexity O(1).
console.log(containsDuplicate([1, 2, 3, 1])); //true
console.log(containsDuplicate([1, 1, 1, 3, 3, 4, 3, 2, 4, 2])); //true
console.log(containsDuplicate([1, 2, 3, 4, 5, 6, 7, 8, 9])); //false

module.exports = containsDuplicate;
