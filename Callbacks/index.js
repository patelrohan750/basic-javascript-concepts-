/*
Callbacks
In javascript, a callback is simply a function that is passed to another function as a parameter and is invoked or executed inside the other function.
*/

// Example:1
// const callbackfunction = (name) => {
// 	console.log(name);
// };

// const function1 = (callbackfunction) => {
// 	var name = 'rohan';
// 	callbackfunction(name);
// };
// function1(callbackfunction);

//Example:2

// function demo(name, callback) {
// 	console.log('hiii', name);
// 	callback(name);
// }
// function callback(name) {
// 	console.log('hey ' + name + ' this is callback function called');
// }
// demo('rohan', callback);

//Example:3
// let numbers = [ 10, 25, 6, 4, 89, 10, 54, 63, 88 ];
// const filternumbers = numbers.filter((items) => {
// 	return items > 10;
// });
// console.log(filternumbers);
