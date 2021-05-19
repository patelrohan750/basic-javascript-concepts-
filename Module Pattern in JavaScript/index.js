/*
Working with Module Patterns
The Module Pattern is one of the important patterns in JavaScript. It is a commonly used Design Pattern which is used to wrap a set of variables and functions together in a single scope.

*/

//Example:1
// function student() {
// 	var name = 'Abc';
// 	var classroom = 'A';
// 	var std = 10;
// 	var roll = 14;

// 	return {
// 		name: name,
// 		classroom: classroom,
// 		std: std,
// 		roll: roll
// 	};
// }

// var obj1 = new student();
// var studentname = obj1.name;
// console.log(studentname);

//Example:2
function student() {
	var name = 'Abc';
	var classroom = 'A';
	var std = 10;
	var roll = 14;

	return {
		name: name,
		classroom: classroom,
		std: std
	};
}

var obj1 = new student();
var studentroll = obj1.roll;
console.log(studentroll);
