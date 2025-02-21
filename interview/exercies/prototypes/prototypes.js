// const person = {
//   name: 'Slava',
//   age: 24,
//   greet: function() {
//     console.log('greet', person.name);
//   }
// };

const person = new Object({
  name: 'Slava',
  age: 24,
  greet: function() {
    console.log('greet', this.name);
  }
});

console.log(person);
console.log(Object);
