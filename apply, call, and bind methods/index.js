/*
In traditionally JS have object, Properties, and methods, so each object has properties and methods.

1.call method
using call method we can bound obj to add function

2.Apply Method
The same way the Apply method also works but the only difference is using the apply method the passing arguments could be an array, 

3.Bind Method:
bind method returns a method instance instead of result value, after that need to execute a bound method with arguments.
*/

var obj = {
	num: 2
};
var add = function(num1, num2, num3, num4) {
	return this.num + num1 + num2 + num3 + num4;
};
var numbers = [ 5, 4, 6, 7 ];

//call method
console.log(`using call method: ${add.call(obj, 1, 2, 3, 4)}`);

//apply method
console.log(`using apply method: ${add.apply(obj, numbers)`)};

//bind method
var bound = add.bind(obj);
console.log(bound(1, 2, 3, 4));
