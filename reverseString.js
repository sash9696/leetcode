s = ["h","e","l","l","o"]

var reverseString = function(s) {

    let left = 0;
    let right = s.length - 1;

    while(left < right){
        swap(left, right);
        left ++;
        right --;

    }
};

function swap(left, right){
    let temp = s[right]
    s[right] = s[left]
    s[left] = temp
}

reverseString(s)

//The time complexity of this algorithm is O(n)
//Space: O(1)