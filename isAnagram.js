
function isAnagram(s,t){
    
    if(s.length !== t.length) return false;
    let charCountObj = {};
    for (let i = 0; i <= s.length - 1; i++){
        if(charCountObj[s[i]]){
            charCountObj[s[i]] ++;
        }else{
            charCountObj[s[i]] = 1;
        }
    }
    for (let i = 0; i <= t.length - 1; i++){
        
        if(!charCountObj[t[i]]){
            return false;
        }
            charCountObj[t[i]] -- ;
        if(charCountObj[t[i]] == 0){
            delete charCountObj[t[i]]
        }
    }
    console.log(charCountObj)
    return Object.keys(charCountObj).length == 0;
}

let s = "anagram", t = "nagaram"
isAnagram(s,t)

// The time complexity of the solution is O(n), where n is the length of the input string. This is because the two loops iterate through the strings once, which takes O(n) time. The operations inside the loops, such as accessing and updating the frequency map, take constant time on average. 

/* 
Alternate approach
function isAnagram(s, t) {
    if (s.length !== t.length) return false;
    const charCountMap = new Map();
    for (let i = 0; i < s.length; i++) {
        charCountMap.set(s[i], (charCountMap.get(s[i]) ?? 0) + 1);
    }
    for (let i = 0; i < t.length; i++) {
        charCountMap.set(t[i], (charCountMap.get(t[i]) ?? 0) - 1);
        if (charCountMap.get(t[i]) === 0) charCountMap.delete(t[i]);
    }
    return charCountMap.size === 0;
}

*/