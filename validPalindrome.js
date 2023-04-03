function isPalindrome(s) {
	if (s == "") {
		return true;
	}

	s = s.toLowerCase().replace(/[^a-z0-9]/gi, "");

	for (let i = 0, j = s.length - 1; i <= j; i++, j--) {
		if (s.charAt(i) !== s.charAt(j)) return false;
	}
    return true
}

let s = "A man, a plan, a canal: Panama";
isPalindrome(s);