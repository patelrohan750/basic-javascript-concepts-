/*
 JavaScript(ES6) Class

 JavaScript classes, introduced in ES6, are primarily syntactical sugar over JavaScript’s existing prototype-based inheritance. The class syntax does not introduce a new object-oriented inheritance model to JavaScript. In early ES5 using function expression.

*/

// Example:1
class student {
	constructor(name, age) {
		this.name = name;
		this.age = age;
	}
	getName() {
		return `name is:${this.name}`;
	}
	getAge() {
		return `name is:${this.age}`;
	}
}

const obj1 = new student('rohan', 14);
console.log(obj1.getName());
console.log(obj1.getAge());
