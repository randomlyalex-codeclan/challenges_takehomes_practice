//Find the longest unbroken set of zeros in the binary equivelent of a
//decimal number given. The run of zeros need to begin and end with a 1.

// returns an array of locally grouped 1's and 0's from the converted bit shifted (to avoid two complement) binary
function dec2binArr(dec) {
	return (dec >>> 0).toString(2).match(/(0|1)\1*/g);
}

function mostZeroes(array) {
	let longest = 0; //assume longest stretch of zeros doesnt exist.
	if (array.length < 3) return 0;
	// edge case that the only run of zeros cant have 1 either side.
	else {
		for (let i = 0; i < array.length - 2; i++) {
			if (
				// this checks the three elements and tests if they pass the condition
				array[i].includes(1) &&
				array[i + 1].includes(0) &&
				array[i + 2].includes(1)
			) {
				//if the condition of zeros between a 1 is met, then the length of the element is saved as longest once it evaluated to the previous saved longest.
				array[i + 1].length > longest ? (longest = array[i + 1].length) : null;
			}
		}
		return longest;
	}
}

function solution(input) {
	let inputAsArray = dec2binArr(input);
	return mostZeroes(inputAsArray);
}

console.log(solution(2049));
console.log(solution(23245));
console.log(solution(232323232323245));
console.log(solution(8192));
console.log(solution(12));
console.log(solution(1));
console.log(solution(0));
console.log(solution(-10));
