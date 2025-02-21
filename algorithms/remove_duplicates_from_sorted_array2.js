/**
 * @param {number[]} nums
 * @return {number}
 */
var removeDuplicates = function(nums) {
    var sumElements = 0;
    var counterNumbers = new Map();

    for (let i = 0; i < nums.length; i++) {
        if (counterNumbers.has(nums[i]) && counterNumbers.get(nums[i]) > 1) {

        } else {
            counterNumbers.set(nums[i], counterNumbers.has(nums[i]) ? 2 : 1);
            nums[sumElements] = nums[i];
            sumElements += 1;
        }

        console.log(sumElements, counterNumbers);
    }

    return sumElements;
};


console.log(removeDuplicates([1,1,1,2,2,3]));