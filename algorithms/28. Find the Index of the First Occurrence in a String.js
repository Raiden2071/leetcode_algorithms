/**
 * @param {string} haystack
 * @param {string} needle
 * @return {number}
 */
// var strStr = function(haystack, needle) {
//   if (!needle.length) return -1;
//
//   var length = haystack.length - needle.length + 1
//   for (var i = 0; i < length; i++) {
//     for (var j = 0; j < needle.length; j++) {
//       if (haystack[i + j] !== needle[j]) {
//         break;
//       }
//
//       if (j === needle.length -1) {
//         return i
//       }
//     }
//   }
//
//   return -1;
// };

var strStr = function(haystack, needle) {
  if (!needle.length) return -1;

  var pointer = 0;
  debugger
  for (var i = 0; i < haystack.length; i++) {
    if (haystack[i] !== needle[pointer]) {
      i -= pointer;
      pointer = 0;
    } else if (pointer === needle.length - 1) {
      return i - pointer;
    } else {
      pointer++;
    }
  }

  return -1;
};

// console.log(strStr("sadbutsad", "sad"));
// console.log(strStr("hello", "ll"));
// console.log(strStr("aaa", "aaa"));
console.log(strStr("mississippi", "issip"));
