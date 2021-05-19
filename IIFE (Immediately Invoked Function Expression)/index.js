/* 
 IIFE (Immediately Invoked Function Expression)

 -->As the name suggests IIFE is a function in javascript which immediately invoked and executed as soon as it is defined. Variables declared within the IIFE cannot be accessed by the outside world and this way you can avoid global scope from getting polluted. So the primary reason to use IIFE is to immediately executes the code and obtain data privacy.
 */

//  synatx
// (function () {
//     statements
//   })();

// Example:1

// (function() {
// 	let name = 'rohan';
// 	console.log(name);
// })();
// console.log(name);

//Example:2
// (function(name) {
// 	console.log('name is:' + name);
// })('rohan');

// Example:3
// (function() {
// 	var username = 'rohan';
// 	function displayname(name) {
// 		console.log(name);
// 	}
// 	displayname(username);
// })();

//Example:4
let add = (function(a, b) {
	return a + b;
})(10, 20);

console.log(add);
