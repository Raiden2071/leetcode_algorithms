/*
    1. Create a Promise that resolves with the number 10 after
       3 seconds
    2. Create another Promise that resolves with the number
       20 after 5 seconds

    How can we log out the sum (30) of these two resolved values
    once, after BOTH promises successfully fulfill?

    HINT: Use Google/Documentation to help find an answer
    HINT2: You can Google for something like:
           "resolve 2 promises at the same time javascript"
*/

var firstPromise = new Promise(resolve => {
  setTimeout(() => {
    resolve(10)
  }, 3000);
});

var secondPromise = new Promise(resolve => {
  setTimeout(() => {
    resolve(20)
  }, 5000);
});

Promise.all([firstPromise, secondPromise])
  .then(([first, second]) => {
    console.log(first + second);
  });

