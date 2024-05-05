// 1. Using iteration, write a function fibs which takes a number and retrns an array containing that many numbers from the Fibonacci sequence.
// Using an example input of 8, this function should return an array [0, 1, 1, 2, 3, 5, 8, 13]

function fibs(n) {
	// x is representing the first term,
	// y is representing the second term, and
	// z is representing the sum of x and y.

	let x = 0;
	let y = 1;
	let z;

	const arr = [];

	n > 0 ? arr.push(x) : '';
	n > 1 ? arr.push(y) : '';

	for (let i = 2; i < n; i++) {
		z = x + y;
		x = y;
		y = z;
		arr.push(y);
	}
	return arr;
}

console.log(fibs(27));
