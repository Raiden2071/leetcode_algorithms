function quickSort(arr) {
  if (arr.length < 2) return arr;
  else {
    var pivot = arr[0];

    var smaller = [];
    var equal = [];
    var greater = [];

    for (var i = 0; i < arr.length; i++) {
      var iteratedValue = arr[i];

      if (iteratedValue > pivot) {
        greater.push(iteratedValue);
      }
      else if (iteratedValue < pivot) {
        smaller.push(iteratedValue);
      }
      else {
        equal.push(iteratedValue);
      }
    }

    return [...quickSort(smaller), ...equal, ...quickSort(greater)];
  }
}

var findMedianSortedArrays = function(nums1, nums2) {
  debugger;
  var mergedArray = [...nums1, ...nums2];
  if (mergedArray < 2) {
    return mergedArray[0];
  }

  mergedArray = quickSort(mergedArray);

  if (mergedArray.length % 2 === 0) {
    var mid = mergedArray.length / 2;
    return (mergedArray[mid-1] + mergedArray[mid]) / 2;
  } else {
    return mergedArray[Math.floor(mergedArray.length / 2)]
  }
};

console.log(findMedianSortedArrays([1, 3], [2]));;
console.log(findMedianSortedArrays([1, 2], [3, 4]));
console.log(findMedianSortedArrays([], [2,3]));
