/**
 * @param position
 * @param {number[]} nums
 * @return {boolean}
 */
// надо определить на какую переменную я могу скакнуть и продолжить с ней работу.

//MY FIRST CUSTOM
// var canJump = function(nums) {
//     const lastIndexNumber = nums.length - 1;
//
//     if (nums.length === 1) {
//         return true;
//     }
//     if (nums.length > 1 && nums[0] === 0) {
//         return false;
//     }
//
//     const canWorkIndex = {};
//
//     for (let i = 0; i < nums.length; i++) {
//         if (i !== 0 && !canWorkIndex[i]) {
//             //skip
//             continue;
//         }
//
//         for (let j = 1; j <= nums[i]; j++) {
//             const totalIndex = i + j;
//             canWorkIndex[totalIndex] = true;
//
//             if (totalIndex === lastIndexNumber) {
//                 return true;
//             }
//         }
//     }
//
//     return false;
// };

// MY Approach 2: Dynamic Programming Top-down

// let memo;
// var canJumpFromPosition = function(position, nums) {
//     debugger
//
//     if (memo[position] !== "UNKNOWN") {
//         return memo[position] === 'GOOD';
//     }
//     const furthestJump = Math.min(position + nums[position], nums.length);
//     for (
//         let nextPosition = position + 1;
//         nextPosition <= furthestJump;
//         nextPosition++
//     ) {
//         if (canJumpFromPosition(nextPosition, nums)) {
//             memo[position] = "GOOD";
//             return true;
//         }
//     }
//
//     memo[position] = "BAD";
//     return false;
// };
//
// function canJump (nums) {
//     memo = new Array(nums.length).fill("UNKNOWN");
//     memo[nums.length - 1] = "GOOD";
//     return canJumpFromPosition(0, nums);
// }


//MY APPROACH 3: GREEDY

function canJump(nums) {
    let lastPosition = nums.length - 1;

    for (
        let i = nums.length - 1;
         i>=0;
         i--
    ) {
        if (i+nums[i] >= lastPosition) {
            lastPosition = i;
        }
    }

    return lastPosition === 0;
}



console.log(canJump([2,3,1,1,4])); // true
// console.log(canJump([0])); // true
// console.log(canJump([1])); // true
// console.log(canJump([3,2,1,0,4])); // false
// console.log(canJump([0,2,3])); // false
// console.log(canJump([1,0,1,0])); // false