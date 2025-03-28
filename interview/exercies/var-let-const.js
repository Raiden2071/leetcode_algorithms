var i = 1

function doNothing() {}

for (var i=0; i<10;i++) {
  doNothing();
}

console.log(i); // 10