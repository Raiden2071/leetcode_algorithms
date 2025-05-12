function sortByDescending(string) {
  string = string.split('');

  for (let i = 0; i < string.length; i++) {
    for (let j = 0; j < string.length - 1; j++) {
      if (string[j] < string[j + 1]) {
        const currentValue = string[j];
        string[j] = string[j + 1];
        string[j + 1] = currentValue;
      }
    }
  }

  return string.join('');
}

console.log(sortByDescending('7359'));