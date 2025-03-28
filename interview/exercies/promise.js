new Promise((resolve, reject) => {
  resolve(123);
})
.then((value) => {
  console.log(value);
  return 155
})
.then((value) => {
  console.log(value);
})

console.log(new Promise())

// -------- методы Promise
async function getPosts() {
  const response = await fetch("https://jsonplaceholder.typicode.com/posts/1");

  return await response.json();
}

function getUsers() {
  return fetch("https://jsonplaceholder.typicode.com/users/2").then(
    (response) => response.text()
  );
}

const getComments = async () => {
  const response = await fetch(
    "https://jsonplaceholder.typicode.com/comments/3"
  );
  return await response.json();
};

Promise.all([getPosts(), getUsers(), getComments()])
  .then(console.log)
  .catch(err => console.log(err));

Promise.allSettled([getPosts(), getUsers(), getComments()])
  .then(console.log)
  .catch(err => console.log(err));

const getImagesResolve = async () => {
  // const response = await fetch('https://jsonplaceholder.typicode.com/images');
  // return await response.json();

  return Promise.resolve([
    { id: 1, src: "https://img.placeholder.com", alt: "text" },
  ]);
};

const getImagesReject = async () => {
  return Promise.reject("server error");
};

getImagesReject().then(console.log).catch(console.error);

// Задача
(() => {
  "use strict";

  const p1 = Promise.reject("Murych boh");
  const runPromise = async () => {
    try {
      await Promise.all([p1]);
      return "Hmurych";
    } catch (error) {
      throw new Error(error);
    }
  };
  runPromise()
    .then((res) => console.log("res: ", res))
    .catch((rej) => console.log("rej: ", rej));
})();
