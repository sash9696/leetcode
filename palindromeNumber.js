// function palindrome(x) {
// 	let stringNum = String(x).split("");

// 	stringNum.reverse();

// 	if (JSON.stringify(stringNum) === JSON.stringify(stringNum.reverse())) {
// 		return true;
// 	}

// 	return false;
// }
// let x = 12321;
// console.log(palindrome(x));

//bad solution because
/*
The time complexity of this code is O(n), where n is the number of digits in the input x. This is because the code first converts x to a string and then splits it into an array of characters, which takes O(n) time. Then it reverses the array using the reverse() method, which takes O(n) time. Finally, it uses JSON.stringify() twice to compare the reversed array with the original array, which takes O(n) time in total. Thus, the total time complexity is O(n) + O(n) + O(n) = O(n).

The space complexity of this code is also O(n), where n is the number of digits in the input x. This is because the code creates an array of characters with length n using String(x).split(""), and then it creates a reversed copy of that array with length n using stringNum.reverse(). The JSON.stringify() method also creates a new string with length n, so the total space complexity is O(n) + O(n) + O(n) = O(n).
*/

//Approach 1: Revert half of the number and compare



function isPalindrome(x) {
    if (x < 0 || (x % 10 == 0 && x != 0)) {
        return false;
    }

    let reversedNumber = 0;
    while (x > reversedNumber) {
        reversedNumber = reversedNumber * 10 + x % 10;
        x = Math.floor(x / 10);
    }
    
    // If the number of digits is even, we may have one extra digit in the middle, so we need to check for that
    return x == reversedNumber || x == Math.floor(reversedNumber / 10);
}
let x = 11;
console.log(isPalindrome(x));


// Time complexity : O(log⁡10(n))O(\log_{10}(n))O(log 
//     10
//     ​
//      (n)). We divided the input by 10 for every iteration, so the time complexity is O(log⁡10(n))O(\log_{10}(n))O(log 
//     10
//     ​
//      (n))
    
//     Space complexity : O(1)O(1)O(1).






// The "Two Pointers" pattern involves iterating through an array (or in this case, the digits of the input number) using two pointers that move in opposite directions. This pattern is often used to find pairs of elements that meet a certain condition, or to find a subarray with a certain property.