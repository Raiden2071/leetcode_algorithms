const Say = new Proxy({}, {
  get (_, property) {
    let string = property;
    const proxy = new Proxy(String.prototype, {
      get (target, prop) {
        return string += ' ' + prop;
      }
    });

    Reflect.setPrototypeOf(String.prototype, proxy);

    return string;
  },
});

console.log(Say.fullName.surName.how.are.you.dude);

console.log(1);
