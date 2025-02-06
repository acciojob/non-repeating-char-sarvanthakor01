function firstNonRepeatedChar(str) {
 // Write your code here
	let obj = [];
	let str = 'aabbcdd';

	for(let i=0; i<str.length; i++){
		if(obj[str[i]]==undefined){
			obj[str[i]]=1;
		}
		else{
			obj[str[i]]++;
		}
	}

	for(let x in obj){
		if(obj[x]==1){
			console.log(x);
		}
	}
	console.log(obj);
}
const input = prompt("Enter a string");
alert(firstNonRepeatedChar(input)); 
