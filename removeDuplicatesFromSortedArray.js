function removeDuplicates(nums) {
    if (nums.length === 0) {
        return 0;
    }
    var index = 1;
    for (var i = 1; i < nums.length; i++) {
        if (nums[i] !== nums[i - 1]) {
            nums[index] = nums[i];
            index++;
        }
    }
    return index;
}
var numberArray = [1, 1, 2, 2, 3, 3, 3];
var result = removeDuplicates(numberArray);
console.log(result);
