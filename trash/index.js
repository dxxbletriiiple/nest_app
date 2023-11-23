//function makeObjectDeepCopy(obj) {
//	if (typeof obj !== 'object' || obj == null) return obj;
//	let result = '';
//	for (let key in obj) {
//		result += obj[key];
//	}
//	return result;
//}

//const x = {
//	userId: 1,
//	id: 1,
//	title: 'delectus aut autem',
//	completed: false,
//};
//console.log(makeObjectDeepCopy(x));

function customStringify(obj, replacer, indent) {
	const seen = new WeakSet();

	return JSON.stringify(
		obj,
		function (key, value) {
			if (replacer) {
				value = replacer(key, value);
			}

			if (typeof value === 'object' && value !== null) {
				if (seen.has(value)) {
					return; // Circular reference found, discard key
				}
				seen.add(value);
			}

			return value;
		},
		indent,
	);
}

// Example usage:
const obj = {
	name: 'John',
	age: 30,
	address: {
		city: 'New York',
		country: 'USA',
	},
};

const jsonString = customStringify(obj, null, 2);
console.log(typeof jsonString);
