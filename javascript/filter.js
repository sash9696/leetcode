var filter = function(arr, fn) {
    const filteredArr = [];
    for (let i = 0; i < arr.length; i++) {
      if (fn(arr[i], i)) {
        filteredArr.push(arr[i]);
      }
    }
    return filteredArr;
  };
  

// let arr = [0, 10, 20, 30],
// 	fn = function greaterThan10(n) {
// 		return n > 10;
// 	};
// console.log(filter(arr, fn))

// The time complexity of your implementation of the filter function is O(n), where n is the length of the input array arr. This is because the function needs to iterate over every element in the array to apply the filtering function and add the elements that pass the filter condition to the new array.

// The space complexity is also O(n), as the function creates a new array newArr to store the filtered elements. The size of this array can be at most the same as the input array arr, which is n in this case.

// function filter(arr, fn) {
//     let j = 0;
//     for (let i = 0; i < arr.length; i++) {
//       if (fn(arr[i], i)) {
//         // move the current element to the beginning of the array
//         [arr[i], arr[j]] = [arr[j], arr[i]];
//         j++;
//       }
//     }
//     // remove the remaining elements from the end of the array
//     arr.splice(j);
//     return arr;
//   }
  
// let arr = [0, 10, 20, 30],
// 	fn = function greaterThan10(n) {
// 		return n > 10;
// 	};
// console.log(filter(arr, fn))
// This implementation has a space complexity of O(1) because 
// it does not create a new array. The time complexity is still O(n) 
// because it needs to examine each element in the input array at least once.

// [0,10,20,30]
// i = 0
// j = 3
// false
// i = 0
// j=2
// new array [30,10,20,0]

// true
// i = 1
// j = 2
// new array [30,10,20,0]

// false
// i = 1
// j = 1
// newArray [30,20,10,0]

// true
// i = 2
// j = 1

