function firstNonRepeatedChar(str) {
 // Write your code here
	function firstNonRepeatedChar(str) {
    if (!str) return null;

    for (let char of str) {
        if (str.indexOf(char) === str.lastIndexOf(char)) {
            return char;
        }
    }
    
    return null;
}

console.log(firstNonRepeatedChar("aabbcdd")); // Output: 'c'
console.log(firstNonRepeatedChar("aabbcc"));  // Output: null

const input = prompt("Enter a string");
alert(firstNonRepeatedChar(input)); 
