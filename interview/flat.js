let arr = [[[3, 4, 58], [709, 8, 9], [10, 11]], [111, 2]];


function flat(array) {
  const result = [];

  debugger
  for (let a in array) {
    if (Array.isArray(array[a])) {
      result.push(...flat(array[a]));
    } else {
      result.push(array[a]);
    }
  }
  return result;
}

console.log(flat(arr));


