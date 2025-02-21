function makeCounter(count) {
  return function() {
    count++;
  }
}

let counter = makeCounter(1);
let counter2 = makeCounter(2);

counter();
counter();
counter2();
counter2();
