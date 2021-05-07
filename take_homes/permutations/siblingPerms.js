// Question:
// Two non-negative integers are called siblings if they can be obtained by each other by
// rearranging the digits of their decimal representations.

// that, given any String input, returns all the distinct siblings that can be formed by the
// positive integers that can be found on it in descending order. Please keep in mind the efficiency
// of your algorithm when writing the solution.

// My solution:
// This recursively calls itself building the array number strings by slicing the trimmedInput,
// checking how many letters left and calling itself on the remaining.
const findPerms = (trimmedInput) => {
	const resultsArray = [];
	const trimmedInputLength = trimmedInput.length;
	if (trimmedInputLength < 2) return trimmedInput;
	for (let i = 0; i < trimmedInputLength; i++) {
		const num = trimmedInput[i];
		if (trimmedInput.indexOf(num) != i) continue; // This stops duplicates, and massively helps performance
		const remainingNums =
			trimmedInput.slice(0, i) + trimmedInput.slice(i + 1, trimmedInputLength);
		for (const perm of findPerms(remainingNums)) {
			resultsArray.push(num + perm);
		}
	}
	return resultsArray;
};

//This returns a filtered (by regEx) string leaving only numbers 0-9
const trimInput = (unTrimmedInput) => {
	let result = null;
	result = unTrimmedInput.match(/[0-9]+/g);
	if (result) result = result.join('');
	return result;
};

//This sorts a passed in array of numbers in descending order.
const sortDescending = (numberArray) => {
	return numberArray.sort((a, b) => {
		return b - a;
	});
};

function solution(input) {
	//string assumed and not checked for due to question
	const trimmedInput = trimInput(input);
	if (trimmedInput === null) return 'No Numbers found';
	if (trimmedInput.length < 2) return 'No siblings found';
	if (trimmedInput.length >= 2) {
		const solutionResults = findPerms(trimmedInput);
		return sortDescending(solutionResults);
	}
}

// some example inputs and expected outputs given to me
console.log(solution('326')); // expected ouput 632,623,362,326,263,236
console.log(solution('A 3B2 C6D')); // expected ouput 632,623,362,326,263,236

//My extra testing for edge cases below:
console.log(solution('ABGASD 3B2 C6D'));

//2 numbers
console.log(solution('ABGASD 12'));
console.time();
//very large number
console.log(solution('623123392366'));
console.timeEnd();
//one number - no siblings
console.log(solution('ABGASD 2'));

//no numbers
console.log(solution('ABGASD'));
