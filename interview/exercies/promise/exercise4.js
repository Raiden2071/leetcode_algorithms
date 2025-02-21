// console.log(1);
// var promise = Promise.resolve(2);
// console.log(3);
//
// promise.then((value) => {
//   console.log(value);
// });

// -----
console.log("0");
new Promise((resolve, reject) => {
  console.log("1");
  resolve();
}).then(() => {
  console.log("2");
});
console.log("3");
