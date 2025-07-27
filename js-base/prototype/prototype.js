const  toyota = {
  model: 'rav4',
  age: 10,
  getInfo: function () {
    console.log('Model' + this.model, 'Age' + this.age);
  }
};

const nissan = {
  model: 'teana',
  age: 5,
  getInfo: function () {
    console.log('Model' + this.model, 'Age' + this.age);
  }
}

toyota.getInfo();
nissan.getInfo();
