var fizzBuzz = function (n) {
	let answers = [];
	for (let i = 1; i <= n; i++) {
		if (i % 5 == 0 && i % 3 == 0) {
			answers.push("FizzBuzz");
		} else if (i % 3 == 0) {
			answers.push("Fizz");
		} else if (i % 5 == 0) {
			answers.push("Buzz");
		} else {
			answers.push(`${i}`);
		}
	}
	answers;
};

let n = 5;
fizzBuzz(n);
// Output: ["1","2","Fizz","4","Buzz"]
// The time complexity of your solution is O(n), where n is the given input 
// number. This is because the solution uses a loop that iterates from 1 to n,
//  and the operations inside the loop have constant time complexity.

// The space complexity of your solution is also O(n). This is because 
// the solution creates an array called answers to store the generated strings.
//  The size of this array is directly proportional to the input number n, 
//  so the space complexity is linear in terms of the input size.

// Initialize an empty array to store the generated strings.
// Iterate from 1 to n.
// For each iteration:
// Check if the current number is divisible by both 3 and 5. If so, append "FizzBuzz" to the array.
// Else, check if the number is divisible by 3. If so, append "Fizz" to the array.
// Else, check if the number is divisible by 5. If so, append "Buzz" to the array.
// If none of the above conditions are met, append the number itself as a string to the array.
// Return the array containing the generated strings.