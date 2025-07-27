const car = {
  getInfo: function () {
    console.log('Model' + this.model, 'Age' + this.age);
  }
};

const toyota = {
  model: 'rav4',
  age: 10,
};

Object.setPrototypeOf(toyota, car); // не рекомендують використовувати, так як погано для перформансу

const nissan = {
  model: 'teana',
  age: 5,
  getInfo: function () {
    console.log('Model' + this.model, 'Age' + this.age);
  }
}

Object.setPrototypeOf(nissan, car);


toyota.getInfo();
nissan.getInfo();
