/**
 * @param {string[]} strs
 * @return {string}
 */
var longestCommonPrefix = function(strs) {
  const firstWord = strs[0];
  let resultString = '';

  for (let i = 0; i < firstWord.length; i++) {
    const letter = firstWord[i];
    if (!letter.length) {
      return resultString;
    }

    for (let j = 0; j < strs.length; j++) {
      const letterOfTheAnotherWord = strs[j][i];
      if (letter !== letterOfTheAnotherWord) {
        return resultString;
      }

      const checkOnTheLastWord = j === strs.length - 1;
      if (checkOnTheLastWord) {
        resultString += letter;
      }
    }
  }

  return resultString;
};

console.log(longestCommonPrefix(["flower","flow","flight"]));
console.log(longestCommonPrefix(["dog","racecar","car"]));
console.log(longestCommonPrefix(["a"]));
