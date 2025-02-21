/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isIsomorphic = function(s, t) {
  if (!(s.length === t.length)) return false;

  var sMap = new Map();
  var tMap = new Map();

  for (var i = 0; i < s.length; i++) {
    var sLetter = s[i];
    var tLetter = t[i];

    if (sMap.has(sLetter)) {
      if (sMap.get(sLetter) !== tLetter) return false;
    } else {
      sMap.set(sLetter, tLetter);
    }

    if (tMap.has(tLetter)) {
      if (tMap.get(tLetter) !== sLetter) return false;
    } else {
      tMap.set(tLetter, sLetter);
    }
  }

  return true;
};


console.log(isIsomorphic("egg", 'add')); // true
console.log(isIsomorphic("foo", 'bar')); // false
console.log(isIsomorphic("paper", 'title')); // true
console.log(isIsomorphic("badc", 'baba')); // false
