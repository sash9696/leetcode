

// var firstUniqChar = function(s) {
//     let charCountObj = {};

//     for(let i = 0; i <= s.length - 1 ; i++){
//         charCountObj[s[i]] = (charCountObj[s[i]] ?? 0) + 1;
//     }
//     charCountObj

//     for(let i = 0; i <= s.length - 1 ; i++){
//         if(charCountObj[s[i]] == 1){
//             return i
//         }
//     }
//     return -1
// };

// let s = "leetcode";
// firstUniqChar(s)

// The time complexity of the solution is O(n), where n is the length
//  of the input string s. This is because the solution iterates over 
//  the string twice, but each iteration is O(n).


// The space complexity of the solution is also O(n), because 
// the charCountObj object can potentially store all characters of 
// the input string, resulting in a space complexity of O(n).


//optimized version with o(1) space complexity under the assumption of
//lowercase letters only

// var firstUniqChar = function(s) {
//     let charCountArr = new Array(26).fill(0);

//     for(let i = 0; i < s.length; i++){
//         charCountArr[s.charCodeAt(i) - 97]++;
//     }

//     for(let i = 0; i < s.length; i++){
//         if(charCountArr[s.charCodeAt(i) - 97] === 1){
//             return i;
//         }
//     }

//     return -1;
// };
