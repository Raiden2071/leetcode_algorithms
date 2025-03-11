/**
 * @param {number[]} nums
 * @param {number} k
 * @return {boolean}
 */
var containsNearbyDuplicate = function(nums, k) {
  const numbersAndTheirIndex = new Map();

  for (let i = 0; i < nums.length; i++) {
    if (numbersAndTheirIndex.has(nums[i])) {
      const lastIndex = numbersAndTheirIndex.get(nums[i]);
        const distance = i - lastIndex;
        if (distance <= k) {
          return true;
        }
    }

    numbersAndTheirIndex.set(nums[i], i);
  }

  return false;
};


console.log(containsNearbyDuplicate([1, 2, 3, 1], 3));
console.log(containsNearbyDuplicate([1, 0, 1, 1], 1));
console.log(containsNearbyDuplicate([1, 2, 3, 1, 2, 3], 2));