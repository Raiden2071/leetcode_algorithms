/**
 * @param {number[]} nums
 * @return {number}
 */
var removeDuplicates = function(nums) {
  debugger
  for (let i = 0; i <= nums.length; i++) {
    if (nums[i] === nums[i-1]) {
      nums.splice(i,1);
      i--;
    }
  }

  return nums.length;
};


removeDuplicates([1,1]);
removeDuplicates([1,1,2,2,2]);
removeDuplicates([0,0,1,1,1,2,2,2,3,3,4]);
