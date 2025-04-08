/**
 * @param {number[][]} intervals
 * @param {number[]} newInterval
 * @return {number[][]}
 */

var insert = function(intervals, newInterval) {
  const result = [];

  for (let i = 0; i < intervals.length; i++) {
    const [a1, a2] = intervals[i];
    const [b1, b2] = newInterval;

    if (a2 < b1) {
      result.push([a1, a2]);
    }
    else if (a1 > b2) {
      result.push(newInterval);
      newInterval = [a1, a2]; // теперь newInterval — текущий
    }
    else {
      newInterval = [
        Math.min(a1, b1),
        Math.max(a2, b2)
      ];
    }
  }

  result.push(newInterval);

  return result;
};


// var insert = function(intervals, newInterval) {
//   const resultInterval = [];
//   let currentIntervalIndex = 0;
//
//   if (intervals.length === 0) {
//     resultInterval.push(newInterval);
//   }
//
//   for (let i = 0; i < intervals.length; i++) {
//       const [a1, a2] = intervals[i];
//       const [b1, b2] = newInterval;
//
//       // intervals intersects each other
//       if (a2 >= b1 && b2 >= a1) {
//
//         let first = Math.min(a1, b1, resultInterval[currentIntervalIndex]?.[0]);
//         let second = Math.max(a2, b2, resultInterval[currentIntervalIndex]?.[1]);
//
//         resultInterval[currentIntervalIndex] = [first, second];
//       } else if (i === 0) {
//         const [a1, a2] = intervals[i];
//         resultInterval[currentIntervalIndex] = [a1, a2];
//         currentIntervalIndex++;
//       } else {
//         currentIntervalIndex++;
//         const [a1, a2] = intervals[i];
//         resultInterval[currentIntervalIndex] = [a1, a2];
//       }
//   }
//
//   return resultInterval;
// };


console.log(insert([], [5,7]));
console.log(insert([[1,3],[6,9]], [2,5]));
console.log(insert([[1,2],[3,5],[6,7],[8,10],[12,16]], [4,8]));
