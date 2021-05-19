/*
 Hoisting

In javascript, you can call a function before it is defined 
*/

// Example:1
// sum(10, 20);
// sub(20, 10);
// function sum(a, b) {
// 	var add = a + b;
// 	console.log(add);
// }

// function sub(a, b) {
// 	var add = a - b;
// 	console.log(add);
// }

// Example:2
// a = 5;
// console.log(5);
// var a;

// Example:3
// console.log(a);
// var a = 10;

//Example:4
console.log(a);
var a;
a = 10;
