const splitWords = (stringInput) => {
	return stringInput.split(' ');
};

const minify = (array) => {
	arrayMap = new Map();
	for (let i = 0; i < array.length; i++) {
		if (arrayMap.has(array[i])) {
			array[i] = `$${arrayMap.get(array[i])}`;
		} else arrayMap.set(array[i], i);
	}
	return array;
};

const minimiser = (stringInput) => {
	let splitWordsArray = splitWords(stringInput);
	let minimisedArray = minify(splitWordsArray);
	let stringOutput = minimisedArray.join(' ');
	return stringOutput;
};

console.log(minimiser('you say yes, I say no you say stop and I say go go go'));
