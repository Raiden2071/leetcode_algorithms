/**
 * @param {number[]} nums
 * @param {number} val
 * @return {number}
 */

// Изменить массив nums. (меняя плохое число на _ )
// вернуть K - кол-во подходящих элементов массива.

var removeElement = function(nums, val) {
    let k = 0
    for (let i = 0; i < nums.length; i++) {
        if (nums[i] !== val){
            nums[k] = nums[i]
            k++
        }
    }
    return k
};

var nums = [3,2,2,3];
var val = 3;
console.log(removeElement(nums, val));
