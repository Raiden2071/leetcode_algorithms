/**
 * @param {number[]} nums
 * @param {number} k
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var rotate = function(nums, k) {
    k = k % nums.length;

    function reverse(start, end) {
        while (start < end) {
            let temp = nums[start];
            nums[start] = nums[end];
            nums[end] = temp;
            start++;
            end--;
        }
    }

    nums.reverse();
    reverse(0, k - 1);
    reverse(k, nums.length - 1);
};

rotate([1,2,3,4,5,6,7], 3);

// [1,2,3,4,5,6,7], 3
// [-1,-100,3,99], 2
// [1, 2], 3