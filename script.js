function firstNonRepeatedChar(str) {
 // Write your code here
	if(!str){
		return null;
	}
	let map = new Map();
	 for (let char of str) {
        charMap.set(char, (charMap.get(char) || 0) + 1);
    }

    for (let [key, value] of charMap) {
        if (value === 1) return key;
    }

    return null;
}
console.log(firstNonRepeatedChar("aabbcdd")); 
console.log(firstNonRepeatedChar("aabbcc")); 
}
// const input = prompt("Enter a string");
// alert(firstNonRepeatedChar(input)); 
