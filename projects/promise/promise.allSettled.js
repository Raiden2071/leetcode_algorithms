let values = [
  '0 slava',
  144,
  new Promise(resolve => resolve('2hello world new Promise')),
  Promise.resolve('3hello slava promise resolve'),
  new Promise(resolve => setTimeout(() => {
    console.log('jopa')
    resolve("4setTimeout");
  }, 500)),
  new Promise((resolve, reject) => setTimeout(() => {
    reject("5 Something went wrong");
  }, 500)),
];


const rejectHandler = reason => ({ status: "rejected", reason });
const resolveHandler = value => ({ status: "fulfilled", value });

function promiseAllSettled(values) {
  return values.reduce((acc, cur) => {

    return acc.then(values => {

      return Promise.resolve(cur)
        .then(value => {
          values.push(resolveHandler(value));
          return values;
        })
        .catch(reason => {
          values.push(rejectHandler(reason));
          return values;
        });
    });
  }, Promise.resolve([]));
}

promiseAllSettled(values).then(console.log);

Promise.allSettled2 = function (promises) {
  const convertedPromises = promises.map(promise => Promise.resolve(promise).then(resolveHandler).catch(rejectHandler));
  console.log('convertedPromises', convertedPromises[0].then(console.log));
  return Promise.all(convertedPromises);
};

Promise.allSettled2(values).then();