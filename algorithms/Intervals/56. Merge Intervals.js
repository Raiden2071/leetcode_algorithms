/**
 * @param {number[][]} intervals
 * @return {number[][]}
 */
var merge = function(intervals) {
  if (!intervals.length) return [];

  intervals.sort((a,b) => a[0] - b[0]);

  let output = [intervals[0]]; // [ [1,3], ]

  for (let i = 1; i < intervals.length; i++) {
    const [a, b] = output[output.length - 1]; // 1,3
    const [c, d] = intervals[i]; // 8,10 || 15,18, || 2,6

    if (c <= b) {
      output[output.length - 1][1] = Math.max(b, d);
    } else {
      output.push([c, d]);
    }
  }

  return output
};

console.log(merge([[1, 3],  [8, 10], [15, 18],[2, 6],])); // [[1,6], [8,10], [15,18]]
// console.log(merge([[1,4],[4,5]])); // [[1, 5]]
