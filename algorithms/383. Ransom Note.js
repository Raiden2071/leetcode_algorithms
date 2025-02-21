/**
 * @param {string} ransomNote
 * @param {string} magazine
 * @return {boolean}
 */


var canConstruct = function(ransomNote, magazine) {
  var magazineKeysQuantity = new Map();

  if (ransomNote.length > magazine.length) return false;

  for (let m of magazine) {
    if (magazineKeysQuantity.has(m)) {
      var value = magazineKeysQuantity.get(m);
      magazineKeysQuantity.set(m, value + 1);
    } else {
      magazineKeysQuantity.set(m, 1);
    }
  }

  for (let ransom of ransomNote) {
    if (!magazineKeysQuantity.has(ransom)) {
      return false;
    }

    var magazineQuantity = magazineKeysQuantity.get(ransom);
    if (magazineQuantity === 1) {
      magazineKeysQuantity.delete(ransom);
    } else {
      magazineKeysQuantity.set(ransom, magazineQuantity-1);
    }
  }

  return true;
};


console.log(canConstruct("a", "b"));
console.log(canConstruct("aa", "ab"));
console.log(canConstruct("aa", "aab"));
console.log(canConstruct("abc", "ab")); // false
console.log(canConstruct("aa", "a"));
