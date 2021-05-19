// Scope means variable access.

// Local Scope allow access to everything within the boundaries (inside the box)
// Global Scope is everything outside the boundaries (outside the box). A global scope can not access a variable defined in local scope because it is enclosed from the outer world, except if you return it.

//local Scope
// Example:1
// function showName() {
// 	var name = 'rohan';
// 	console.log(name); //rohan
// }
// showName();
// console.log(name); //error

//global scope
// Exmpale:2
// var name;
// function showname() {
// 	var name = 'rohan';
// 	console.log('inside Function: ', name);
// }
// showname();
// console.log('outside Function: ', name);

// Exmpale:3
// var name;
// function showname() {
// 	name = 'rohan';
// 	console.log('inside Function: ', name);
// }
// showname();
// console.log('outside Function: ', name);

//using let
//Example:4
// let name = 'patel';
// function showname() {
// 	name = 'rohan';
// 	console.log('inside Function: ', name);
// }
// console.log('outside Function: ', name);
// showname();

//Example:5
// var whoWillWinTodayMatch = 'india';

// if (true) {
// 	var whoWillWinTodayMatch = 'Aus';
// 	console.log(whoWillWinTodayMatch);
// }
// console.log(whoWillWinTodayMatch);

//Example 6:
let whoWillWinTodayMatch = 'india';

if (true) {
	let whoWillWinTodayMatch = 'Aus';
	console.log(whoWillWinTodayMatch);
}
console.log(whoWillWinTodayMatch);
