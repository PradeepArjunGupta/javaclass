function bubbleSort(arr) {
	let n = arr.length;
	for (let i = 0; i < n; i++) {
    	let swapped = false;
    	for (let j = 0; j < n - i - 1; j++) {
        	if (arr[j] > arr[j + 1]) {
            // Swap elements
            [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]];
            swapped = true;
        	}
    	}
    	// If no swaps happened, array is already sorted
    	if (!swapped) break;
	}
	return arr;
}
let result = bubbleSort([5, 3, 8, 4, 2]);
console.log(result); 
// Output: [2, 3, 4, 5, 8]

