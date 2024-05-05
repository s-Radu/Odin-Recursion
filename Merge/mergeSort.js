// Build a function mergeSort that takes in an array and returns a sorted array, using a recursive merge sort methodology.

const arr1 = [3, 2, 1, 13, 8, 5];
const arr2 = [105, 79, 100, 110];

function mergeSort(arr, start = 0, end = arr.length - 1) {
	if (start < end) {
		let mid = Math.floor((start + end) / 2);
		mergeSort(arr, start, mid);
		mergeSort(arr, mid + 1, end);
		merge(arr, start, mid, end);
	}
	return arr;
}

function merge(arr, start, mid, end) {
	let left = arr.slice(start, mid + 1);
	let right = arr.slice(mid + 1, end + 1);

	let i = 0,
		j = 0,
		k = start;

	while (i < left.length && j < right.length) {
		if (left[i] < right[j]) {
			arr[k++] = left[i++];
		} else {
			arr[k++] = right[j++];
		}
	}

	while (i < left.length) {
		arr[k++] = left[i++];
	}

	while (j < right.length) {
		arr[k++] = right[j++];
	}
}

console.log(mergeSort(arr1));
console.log(mergeSort(arr2));
