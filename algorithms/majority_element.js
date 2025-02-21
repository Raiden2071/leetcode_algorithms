/**
 * @param {number[]} nums
 * @return {number}
 */
var majorityElement = function(nums) {
    var elements = new Map();
    var majorityElementName = 'biggerElement';

    nums.forEach(num => {
        var repetitionCount = elements.has(num) ? elements.get(num) + 1 : 1;
        elements.set(num, repetitionCount);

        if (elements.has(majorityElementName)) {
            var majorityElement = elements.get(majorityElementName);
            var majorityElementRepetitionCount = elements.get(majorityElement);

            if (elements.get(num) > majorityElementRepetitionCount) {
                elements.set(majorityElementName, num);
            }
        } else {
            elements.set(majorityElementName, num);
        }
    });

    return elements.get(majorityElementName);
};

console.log(majorityElement([2,2,1,1,1,2,2]));
