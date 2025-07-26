let fullSay = '';

const target = {
  name: 'Slava',
  fullName: {
    name: 'Slava',
    surName: 'Danilchak',
  }
};

const Say = new Proxy(target, {
  get (target, property, receiver) {
    console.log('get', target, ' - ', property, ' --- ', target[property]);
    if (property in target) {
      console.log('hello brother', target[property], target[property] === 'string')
      if (typeof target[property] === 'string') {
        fullSay += ' ' + target[property];

        return target[property];
      }
    }
    return '';
  },
});

console.log(Say.fullName.surName);

console.log('fullSay', fullSay);

console.log('fullSay2');
