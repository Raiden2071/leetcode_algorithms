/**
 * @param {number[]} nums
 * @return {number}
 */

var removeDuplicates = function(nums) {
    var uniqueCount = 0;

    for (let i = 0; i < nums.length; i++) {
        if (nums[i] === nums[i - 1]) {

        } else {
            nums[uniqueCount] = nums[i];
            uniqueCount++;
        }
    }

    console.log(nums);
    return uniqueCount;
};

var nums = [0,0,1,1,2,3]; // [5,2,1,1,3,4];
console.log(removeDuplicates(nums)); // [1,2] , [1,2,3,4,5,_,_,_]

// return k elements