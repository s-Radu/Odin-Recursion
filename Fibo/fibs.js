// 1. Using iteration, write a function fibs which takes a number and retrns an array containing that many numbers from the Fibonacci sequence.
// Using an example input of 8, this function should return an array [0, 1, 1, 2, 3, 5, 8, 13]

function fibs(n) {
	// x is representing the first term,
	// y is representing the second term, and
	// z is representing the sum of x and y.

	let a = 0;
	let b = 1;
	let c;

	const arr = [];
	n > 0 ? arr.push(a) : false;
	n > 1 ? arr.push(b) : false;
	for (let i = 2; i < n; i++) {
		c = a + b;
		a = b;
		b = c;
		arr.push(c);
	}
	return arr;
}

console.log(fibs(15));
