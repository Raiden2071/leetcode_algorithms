/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLastWord = function(s) {
  const arr = s.trim().split(' ').reverse();

  return arr[0].length;
};

console.log(lengthOfLastWord("dadada  ddadadad  "));
