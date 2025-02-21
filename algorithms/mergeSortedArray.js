var merge = function merge(nums1, m, nums2, n) {
    // nums1 = [...nums1.splice(0, m), ...nums2].sort((a, b) => a - b);
    nums1.splice(m,n,...nums2);
    nums1.sort((a, b) => a - b);

    console.log('nums1', nums1);
};

// do not return anything, modify nums1

var nums1 = [1, 2, 3, 0, 0, 0];
var m = 3; // Use first "m" elements
var nums2 = [2, 5, 6];
var n = 3; // Skip last "n" elements
merge(nums1, m, nums2, n);
