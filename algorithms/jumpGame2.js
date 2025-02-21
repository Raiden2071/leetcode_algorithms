function jump(nums) {
    let jumps = 0;
    let end = 0;
    let farthest = 0;

    for (let i = 0; i < nums.length-1; i++) {
        farthest = Math.max(farthest, i + nums[i]);

        if (i >= end) {
            end = farthest;
            jumps += 1;
        }
        if (end >= nums.length-1) {
            break;
        }
    }

    return jumps;
}



console.log(jump([2,3,1,1,4])); // true
console.log(jump([0])); // true
console.log(jump([1])); // true
console.log(jump([3,2,1,0,4])); // false
console.log(jump([0,2,3])); // false
console.log(jump([1,0,1,0])); // false