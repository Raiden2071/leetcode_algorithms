function quicksort(str) {
  if (!Array.isArray(str)) {
    str = str.split('');
  }

  debugger;
  if (str.length < 2) return str.join('');
  else {
    var pivot = str[0];
    var less = str.filter(arr => arr < pivot);
    var greater = str.filter(arr => arr > pivot);

    return quicksort(greater) + [pivot] + quicksort(less);
  }
}


console.log(quicksort('7359'));