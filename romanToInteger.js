



const romanObj = {
	I: 1,
	V: 5,
	X: 10,
	L: 50,
	C: 100,
	D: 500,
	M: 1000,
};


function romanToInt(s){

    let result = 0;
    for(let i = 0; i < s.length; i++){

       let currentValue = romanObj[s[i]];
       let nextValue = romanObj[s[i + 1]];

       if(nextValue && currentValue < nextValue){
          result -=  currentValue
       }else{
          result += currentValue
       }

    }
    return  result
}

//Time complexity - O(n) and space - O(1)

// let s = 'III';
// let s = "LVIII"
let s = "MCMXCIV"

// let s = "MIV"
romanToInt(s)



//The pattern is called "Two Pointers" 
//and it involves maintaining two pointers (indices) 
//in the input string and 
//moving them according to a certain rule until the desired output is achieved.

//In the case of the Roman to Integer problem, 
//we can use two pointers to iterate through the 
//string and compare adjacent characters to determine whether 
//a subtraction is needed. Specifically, we can check whether 
//the current character has a smaller value than the next character, 
//and subtract the current value from the next value if so.
// Otherwise, we simply add the current value to the total.

//This pattern can be used to solve other similar string manipulation problems
// involving pattern matching, such as:

//Longest Substring Without Repeating Characters
//Valid Parentheses
//Palindrome Linked List
//By using the Two Pointers pattern, 
// we can often achieve linear time complexity
//  and constant space complexity, making our solutions efficient and scalable.



/* 
Apart from the "Two Pointers" pattern that I mentioned earlier, 
there are a few other patterns that can be used to solve 
the Roman to Integer problem and other similar string manipulation problems.
 Here are a few:

Hash Table / Dictionary Pattern: 
This pattern involves creating a hash table or dictionary 
to map the Roman numerals to their integer values. 
This mapping can be used to convert the Roman numerals
 to integers in a single pass through the input string. 
 This approach has a time complexity of O(n), where 
 n is the length of the input string. This is the approach 
 used in the solution provided earlier.

Stack Pattern: This pattern involves using a stack data structure to keep track of the Roman numerals in the input string. The stack is used to detect and handle cases where a smaller numeral precedes a larger numeral (e.g. IV, IX, etc.). This approach has a time complexity of O(n), where n is the length of the input string.

Regular Expression Pattern: This pattern involves using regular expressions to match the Roman numerals in the input string and replace them with their integer values. This approach can be more concise than the previous approaches, but may be less efficient due to the overhead of regular expression matching. This approach has a time complexity of O(n), where n is the length of the input string.

Recursive Pattern: This pattern involves using recursion to process the Roman numerals in the input string. The base case of the recursion is a single Roman numeral, which is converted to its integer value. The recursion is then used to combine the integer values of adjacent Roman numerals according to the rules of Roman numerals. This approach can be elegant, but may be less efficient due to the overhead of function calls. This approach has a time complexity of O(n), where n is the length of the input string.
*/


//stach approach

///** recursive version
//  * @param {string} s
// * @return {number}
// */
// var romanToInt = function(s) {
//    const romanToIntMap = new Map([
//        ['I', 1],
//        ['V', 5],
//        ['X', 10],
//        ['L', 50],
//        ['C', 100],
//        ['D', 500],
//        ['M', 1000]
//    ]);
   
//    function recursiveHelper(s, index) {
//        // Base case: If index is out of bounds, return 0
//        if (index >= s.length) {
//            return 0;
//        }
       
//        // Recursive case: If the next numeral is larger, subtract the current numeral from the result
//        const currentInt = romanToIntMap.get(s[index]);
//        const nextInt = romanToIntMap.get(s[index + 1]);
       
//        if (nextInt && nextInt > currentInt) {
//            return recursiveHelper(s, index + 2) - currentInt;
//        } 
//        // Otherwise, add the current numeral to the result
//        else {
//            return recursiveHelper(s, index + 1) + currentInt;
//        }
//    }
   
//    return recursiveHelper(s, 0);
// };
