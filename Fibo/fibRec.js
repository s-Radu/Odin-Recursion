// 2. Using recursion, write a function fibsRec which takes a number and retrns an array containing that many numbers from the Fibonacci sequence.
// Using an example input of 8, this function should return an array [0, 1, 1, 2, 3, 5, 8, 13]

function fibsRec(n) {
	// base cases for each number to avoid stack overflow if the function is called with these numbers
	if (n === 0) return [];
	if (n === 1) return [0];
	if (n === 2) return [0, 1];

	let arr = fibsRec(n - 1);
	arr.push(arr[n - 2] + arr[n - 3]);
	return arr;
}

console.log(fibsRec(15));
