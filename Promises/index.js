/*
A promise may be in three possible states…

Fulfilled: When the operation is completed successfully.
Rejected: When the operation is failed.
Pending: initial state, neither fulfilled nor rejected.

*/

// Example:1
// const p1 = new Promise((resolve, reject) => {
// 	setTimeout(() => {
// 		let numbers = [ 1, 2, 3, 4, 5, 6 ];
// 		resolve(numbers);
// 		// reject('error occured!!!');
// 	}, 2000);
// });
// p1
// 	.then((result) => {
// 		console.log(result);
// 	})
// 	.catch((e) => {
// 		console.log(e);
// 	});

//Example:2
// const p = new Promise((resolve, reject) => {
// 	userExist = true;
// 	if (userExist) {
// 		resolve('user is Exis');
// 	} else {
// 		reject('error occured');
// 	}
// });
// p
// 	.then((result) => {
// 		console.log(result);
// 	})
// 	.catch((e) => {
// 		console.log(e);
// 	});
