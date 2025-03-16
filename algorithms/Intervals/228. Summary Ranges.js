/**
 * @param {number[]} nums
 * @return {string[]}
 */
var summaryRanges = function(nums) {
  if (nums.length === 0) return [];

  var ranges = [];
  var currentStartRange = nums[0];

  debugger;
  for (let i = 1; i < nums.length; i++) {
    var previousNumber = nums[i-1];
    var currentNumber = nums[i];

    if (previousNumber+1 !== currentNumber) {
      ranges.push(addIntervalToRange(currentStartRange, previousNumber));
      currentStartRange = currentNumber;
    }
  }

  ranges.push(addIntervalToRange(currentStartRange, nums[nums.length-1]));

  return ranges;
};

const addIntervalToRange = (currentStartRange, previousNumber) => {
  return currentStartRange === previousNumber ? `${currentStartRange}` : `${currentStartRange}->${previousNumber}`
}

console.log(summaryRanges([0, 1, 2, 4, 5, 7])); // [ '0->2', '4->5', '7' ]
console.log(summaryRanges([6,8,9])); // [ '6', '8->9' ]
console.log(summaryRanges([0,2,3,4,6,8,9])); // [ '0', '2->4', '6', '8->9' ]
console.log(summaryRanges([]));
console.log(summaryRanges([2,5,6,7,10,12,13,15])); // [ '2', '5->7', '10', '12->13', '15' ]


