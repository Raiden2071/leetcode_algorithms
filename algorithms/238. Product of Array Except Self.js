/**
 * @param {number[]} nums
 * @return {number[]}
 */
// my time exceeded
// var productExceptSelf = function(nums) {
//     const resultNums = [];
//
//     for (let i = 0; i < nums.length; i++) {
//         let iterationSum = null;
//
//         for (let j=0; j<nums.length;j++) {
//             if (iterationSum === 0) break;
//             if (i === j) continue;
//             iterationSum === null ? iterationSum += nums[j] : iterationSum *= nums[j];
//         }
//         resultNums.push(iterationSum);
//     }
//     return resultNums;
// };

// Left to Right
// var productExceptSelf = function(nums) {
//     const left = [1];
//     const right = [1];
//     const finalResult = [];
//
//     for (let i = 1; i < nums.length; i++) {
//         let sum = left[i-1] * nums[i-1];
//         left.push(sum);
//     }
//     console.log('nums length', nums.length);
//     for (let i = nums.length - 1; i > 0; --i) {
//         let sum = right[0] * nums[i];
//         right.unshift(sum);
//     }
//
//     for (let i = 0; i < nums.length; i++) {
//         finalResult.push(left[i]*right[i]);
//     }
//
//     return finalResult;
// };
var productExceptSelf = function(nums) {
    const finalResult = [];

    let prevLeft = 0;
    let prefRight = 0;

    for (let i = 0; i < nums.length; i++) {
        let left = ;
        let right = nums[i];

    }

    return finalResult;
};

console.log(productExceptSelf([4,5,1,8,2]));
// console.log(productExceptSelf([1,2,3,4]));
// console.log(productExceptSelf([-1,1,0,-3,3]));
