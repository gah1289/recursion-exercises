/** product: calculate the product of an array of numbers. */

function product(nums, i = nums.length) {
	let total = 1;
	if (i === 0) return total;
	total *= nums[i];
	i--;
	return nums[i] * product(nums, i);
}

/** longest: return the length of the longest word in an array of words. */

function longest(words, longestWord = '') {
	if (words.length) {
		words[0].length > longestWord.length ? (longestWord = words[0]) : longestWord;
		return longest(words.slice(1), longestWord);
	}
	else {
		return longestWord.length;
	}
}

/** everyOther: return a string with every other letter. */

function everyOther(str, i = 0, everyOtherStr = '') {
	if (i < str.length) {
		if (i % 2 === 0) {
			everyOtherStr = everyOtherStr.concat(str[i]);
		}
		i += 1;
		return everyOther(str, i, everyOtherStr);
	}
	return everyOtherStr;
}

/** isPalindrome: checks whether a string is a palindrome or not. */

function isPalindrome(str, firstIdx = 0, lastIdx = str.length - 1) {
	if (str.length % 2 !== 0) {
		// strings with odd length
		if (str.length === 1) return true;
		// return function until you've reached the middle letter
		if (firstIdx !== lastIdx) {
			if (str[firstIdx] !== str[lastIdx]) return false;
			firstIdx++;
			lastIdx--;
			return isPalindrome(str, firstIdx, lastIdx);
		}
		return true;
	}
	else {
		// strings with even length
		if (str[firstIdx] !== str[lastIdx]) return false;
		// return function until you've reached the middle two letters
		if (lastIdx - firstIdx !== 1) {
			firstIdx++;
			lastIdx--;
			return isPalindrome(str, firstIdx, lastIdx);
		}
		return true;
	}
}

/** findIndex: return the index of val in arr (or -1 if val is not present). */

function findIndex(arr, val, i = 0) {
	if (i < arr.length) {
		if (arr[i] !== val) {
			i++;
			return findIndex(arr, val, i);
		}
		return i;
	}
	return -1;
}

/** revString: return a copy of a string, but in reverse. */

function revString(str, reverseStr = '') {
	let arr = str.split('');
	if (arr.length) {
		let poppedLetter = arr.pop();
		reverseStr = reverseStr.concat(poppedLetter);
		let newStr = arr.join('');
		return revString(newStr, reverseStr);
	}
	return reverseStr;
}

/** gatherStrings: given an object, return an array of all of the string values. */

function gatherStrings(obj, i = 0, strings = []) {
	for (let key in obj) {
		if (typeof obj[key] === 'string') strings.push(obj[key]);
		if (typeof obj[key] === 'object' && obj[key] !== null) strings.push(...gatherStrings(obj[key]));
	}

	return strings;
}

/** binarySearch: given a sorted array of numbers, and a value,
 * return the index of that value (or -1 if val is not present). */

function binarySearch(arr, val) {}

module.exports = {
	product,
	longest,
	everyOther,
	isPalindrome,
	findIndex,
	revString,
	gatherStrings,
	binarySearch
};
