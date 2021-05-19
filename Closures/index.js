/*
Closures

A closure is simply a function inside another function that has access to the outer function variable.

*/

// Example:1
// function demo() {
// 	let name = 'color';
// 	function blue() {
// 		let colorname = 'red';
// 		console.log(colorname);
// 		console.log(name);
// 	}
// 	return blue;
// }
// const f1 = demo();
// f1();

// Example:2
// function add(x) {
// 	console.log('x is:', x);
// 	return function(y) {
// 		console.log('y is:', y);
// 		return x + y;
// 	};
// }

// const add1 = add(5);

// console.log(add1(10));

//Example:3
function Add(a) {
	console.log('a is:', a);
	return function(b) {
		console.log('b is:', b);
		return function(c) {
			console.log('c is:', c);
			return function(d) {
				console.log('d is:', d);
				return a + b + c + d;
			};
		};
	};
}
console.log(Add(3)(2)(5)(4));
