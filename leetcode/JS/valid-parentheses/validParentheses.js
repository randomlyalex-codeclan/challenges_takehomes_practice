/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function (s) {
	if (s.length % 2 !== 0) return false;
	openBrackets = ['(', '{', '['];
	closeBrackets = [')', '}', ']'];
	stack = [];

	for (i = 0; i < s.length; i++) {
		if (openBrackets.includes(s[i])) {
			stack.push(s[i]);
		}
		if (closeBrackets.includes(s[i])) {
			if (openBrackets.indexOf(stack.pop()) != closeBrackets.indexOf(s[i]))
				return false;
		}
	}
	if (stack.length === 0) return true;
	return false;
};

console.log(isValid('()'));

console.log(isValid('()[]{}'));
console.log(isValid('(]'));
console.log(isValid('([)]'));
console.log(isValid('{[]}'));
console.log(isValid('['));
console.log(isValid('(('));
