/**
 * @param {number[]} nums
 * @return {number}
 */
var longestConsecutive = function(nums) {
  if (nums.length === 0) return 0;

  nums = nums.sort((a, b) => a - b);

  var consecutiveNumber = 1;
  var maxConsecutive = 1;

  for (var i = 1; i < nums.length; i++) {
    if (nums[i] === nums[i - 1] + 1) {
      consecutiveNumber += 1;
    } else if (nums[i] !== nums[i - 1]) {
      maxConsecutive = Math.max(maxConsecutive, consecutiveNumber);
      consecutiveNumber = 1;
    }
  }

  return Math.max(maxConsecutive, consecutiveNumber);
};

console.log(longestConsecutive([100, 4, 200, 1, 3, 2]));
console.log(longestConsecutive([0,3,7,2,5,8,4,6,0,1]));
console.log(longestConsecutive([1,0,1,2]));
console.log(longestConsecutive([]));
console.log(longestConsecutive([5,2,4,6]));
