function removeDuplicates(nums: number[]): number {
	if (nums.length === 0) {
		return 0;
	}

	let index = 1;
	for (let i = 1; i < nums.length; i++) {
		if (nums[i] !== nums[i - 1]) {
			nums[index] = nums[i];
			index++;
		}
	}

	return index;
}

let numberArray: number[] = [1, 1, 2, 2, 3, 3, 3];
let result = removeDuplicates(numberArray);
console.log(result);
// Overall, the function has a time complexity of O(n) and a space complexity of O(1). This makes it an efficient solution for removing duplicates from an array, as it uses minimal extra memory and runs in linear time with respect to the size of the input.

// Yes, the problem of removing duplicates from a sorted array can be solved using the two-pointer pattern.

// The basic idea of the two-pointer pattern is to use two pointers that start at the beginning of the array and move towards the end, while maintaining some invariant between them. In this case, we can use two pointers, i and index, where i iterates over the input array and index points to the next position where a unique element can be stored.

// The invariant we want to maintain is that all elements up to the index position in the array are unique and in sorted order. At each step, we check if the current element is a duplicate of the previous unique element. If it is, we skip it and move on to the next element. If it's not, we copy it to the next position in the array and increment the index.
