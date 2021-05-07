/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isAnagram = function (s, t) {
	if (s.length != t.length) return false;
	charStore = new Map();
	// if we dont care about storage we can use a hashmap
	for (i = 0; i < s.length; i++) {
		if (charStore.has(s[i])) {
			charStore.set(s[i], charStore.get(s[i]) + 1);
		} else charStore.set(s[i], 1);
		if (charStore.has(t[i])) {
			charStore.set(t[i], charStore.get(t[i]) - 1);
		} else charStore.set(t[i], -1);
	}

	for (char of charStore.values) {
		if (char != 0) return false;
	}

	// if we do care about storage we could sort the strings in place and compare inline I think?

	// s = [...s].sort();
	// t = [...t].sort();

	// for (i = 0; i < s.length; i++) {
	// 	if (s[i] != t[i]) {
	// 		return false;
	// 	}
	// }
	return true;
};

console.log(isAnagram('anagram', 'nagaram'));
console.log(isAnagram('rat', 'car'));
