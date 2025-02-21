/**
 * @param {string} s
 * @return {boolean}
 */
var isPalindrome = function(s) {
    const stringWithoutSpecialCharacters = s.replace(/[^a-zA-Z0-9]/g, "").replace(/ /g, "").toLowerCase();
    const reversedString = stringWithoutSpecialCharacters.split("").reverse().join("");
  
    return stringWithoutSpecialCharacters === reversedString;
  };

console.log(isPalindrome("A man, a plan, a canal: Panama"));