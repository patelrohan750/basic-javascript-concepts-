/*
the various way of creating objects in JavaScript. One of the ways to create objects in JavaScript is the constructor function.

When an object is created in JavaScript, JavaScript engine adds a __proto__ property to the newly created object which is called dunder proto. dunder proto or __proto__ points to the prototype object of the constructor function.
*/

//Example:1
// function student(name, roll) {
// 	this.name = name;
// 	this.roll = roll;

// 	this.getDetails = () => {
// 		return `name is: ${this.name} and roll no is: ${this.roll}`;
// 	};
// }
// var s1 = new student('rohan', 14);
// var s2 = new student('patel', 20);
// console.log(s1.getDetails());
// console.log(s2.getDetails());

//Using Prototype
//The JavaScript prototype property allows you to add new properties to object constructors:
// function student(name, roll) {
// 	(this.name = name), (this.roll = roll);
// }

// student.prototype.getDetails = function() {
// 	return `name is: ${this.name} and roll no is: ${this.roll}`;
// };

// var s1 = new student('rohan', 14);
// var s2 = new student('patel', 20);
// console.log(s1.getDetails());
// console.log(s2.getDetails());

//Example:3
function student(name, roll) {
	this.name = name;
	this.roll = roll;
}
student.prototype.degree = 'B.tech';
student.prototype.getDetails = function() {
	return `name is: ${this.name} and roll no is: ${this.roll} degree is: ${this.degree} `;
};

var s1 = new student('rohan', 14);
var s2 = new student('patel', 20);
console.log(s1.getDetails());
console.log(s2.getDetails());
