# File-Upload-MERN-Stack-with-Multer-
File Upload MERN Stack with Multer 

Below String to Array Convert Method
https://javascript.plainenglish.io/5-ways-to-convert-string-to-array-in-javascript-4f86ce362534

let str = 'Tiger,Horse,Elephant,Wolf';
let arr = str.split(','); 
//split string by comma
console.log(arr);
//["Tiger", "Horse", "Elephant", "Wolf"]

--------------------------------------------------------

let str = 'jscurious';
let arr = str.split('');
console.log(arr); 
// ["j", "s", "c", "u", "r", "i", "o", "u", "s"]

--------------------------------------------------------

let str = 'Cricket | Hockey | Football | Tennis';
let arr = str.split(' | ', 2);
console.log(arr); 
// ['Cricket', 'Hockey']

--------------------------------------------------------

let str = 'jscurious';
let arr = Array.from(str);
console.log(arr); 
// ["j", "s", "c", "u", "r", "i", "o", "u", "s"]

--------------------------------------------------------

let str = 'jscurious';
let arr = Array.from(str, (val, index) => val + index);
// adding index value to each element of array
console.log(arr); 
// ["j0", "s1", "c2", "u3", "r4", "i5", "o6", "u7", "s8"]

--------------------------------------------------------

let str = 'jscurious';
let arr = [...str];
console.log(arr); 
// ["j", "s", "c", "u", "r", "i", "o", "u", "s"]

--------------------------------------------------------

let str = 'jscurious';
let arr = Object.assign([], str);
console.log(arr); 
// ["j", "s", "c", "u", "r", "i", "o", "u", "s"]

--------------------------------------------------------

let str = 'jscurious';
let arr = [];
for(let i of str) {
    arr.push(i);
}
console.log(arr); 
// ["j", "s", "c", "u", "r", "i", "o", "u", "s"]
