// Interview Questions
// Given a list of inputs for player injuries and duration over a 17 week period, merge those injuries together and output list of all ranges of weeks that player was injured.

// EXAMPLE:
// In: [[1,4],[2,6],[15,17]]
// Out: [[1,6],[15,17]]

const injuries = (array) => {
	// first sort by 0 index of each item in array if theyre not in order
	let left = 0;
	let right = 1;
	let output = [];
	while (right < array.length) {
		if (array[left][1] < array[right][0]) {
			output.push(array[left]);
			left = right;
			if ((right = array.length)) {
				output.push(array[left]);
			} else {
				right = left + 1;
			}
		} else {
			array[left][1] = array[right][1];
			right += 1;
		}
	}
	return output;
};

// no this looks good but it needs further thought on the pointers, its late and i need to actually do my own work :D

//Below are all the edge

console.log(
	injuries([
		[1, 4],
		[2, 6],
		[15, 17],
	])
);

console.log(
	injuries([
		[1, 4],
		[2, 6],
		[3, 7],
		[4, 8],
		[10, 12],
		[15, 17],
	])
);

console.log(
	injuries([
		[1, 4],

		[15, 17],
	])
);

console.log(
	injuries([
		[1, 4],
		[10, 12],
		[11, 14],
		[15, 17],
	])
);
