/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isSubsequence = function(s, t) {
  let sIndex = 0;
  if (!s.length) return true;
  if (!t.length) return false;

  debugger
  for (let i = 0; i < t.length; i++) {
    if (t[i] === s[sIndex]) {
      sIndex++;

      if (sIndex === s.length) return true;
    }
  }

  return false;
};

// console.log(isSubsequence("abc", "ahbgdc"));
// console.log(isSubsequence("axc", "ahbgdc"));
// console.log(isSubsequence("abc", ""));
// console.log(isSubsequence("", "ahbgdc"));
console.log(isSubsequence("b", "c"));

