const user = {
  name: "Slavik",
  _password: "12345"
};

const protectedUser = new Proxy(user, {
  get (target, property) {
    console.log(target[property]);
    return Reflect.get(target, property);
  },
  set(target, property, value) {
    if (property.startsWith('_')) {
      throw new Error(`Cannot set protected property: ${property}`);
    }
    return Reflect.set(target, property, value);
  }
});

console.log(protectedUser.name);
// Лог: Get property "name"
// => Slavik

console.log(protectedUser._password);
// Лог: Get property "_password"
// => 12345

protectedUser.name = "Viacheslav";
// Лог: Set property "name" to "Viacheslav"

protectedUser._password = "newPass";
// Лог: Attempt to set protected property "_password"
// => Ошибка: Cannot set protected property: _password

