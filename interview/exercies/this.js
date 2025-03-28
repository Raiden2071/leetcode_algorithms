// console.log(this);
//
// function myFunction() {
//   console.log(this);
// }
//
// const item = { title: "phone" };
//
// myFunction.apply(item);


// const obj = {
//   lastName: 'Danilchak',
//   firstNames: ['Slava', 'Vadik'],
//   logName: function() {
//     console.log(this);
//     this.firstNames.forEach(function (firstName) {
//       console.log(this);
//     })
//   }
// };
//
// obj.logName()


// -----
const item = {
  title: 'Phone',
  logTitle: function() {
    setTimeout((function() {
      console.log(`Product ${this.title}`)
    }).bind(this));
  }
}

item.logTitle()