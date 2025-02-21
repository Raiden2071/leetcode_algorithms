/**
 * @param {number[]} numbers
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(numbers, target) {
  var left = 0, right = numbers.length - 1;

  while (left < right) {
    var sum = numbers[left] + numbers[right];

    if (sum === target) {
      return [left+1, right+1];
    }

    if (sum > target) {
      right = right - 1;
    } else if (sum < target) {
      left = left + 1;
    }
  }
};




// console.log(twoSum([2, 7, 11, 15], 9));
// console.log(twoSum([2, 3, 4], 6));
// console.log(twoSum([-1,0], -1));
// console.log(twoSum([0, 0, 3, 4], -0));
console.log(twoSum([-1000,-1,0,1], 1));
