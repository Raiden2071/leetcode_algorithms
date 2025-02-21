/**
 * @param {string} pattern
 * @param {string} s
 * @return {boolean}
 */
var wordPattern = function(pattern, s) {
  var words = s.split(' ');
  if (pattern.length !== words.length) return false;

  var patternMap = new Map();
  var wordMap = new Map();

  for (var i = 0; i < pattern.length; i++) {
    var p = pattern[i], w = words[i];

    if ((patternMap.get(p) && patternMap.get(p) !== w) ||
      (wordMap.get(w) && wordMap.get(w) !== p)) {
      return false;
    }

    patternMap.set(p, w);
    wordMap.set(w, p);
  }

  return true;
};


// console.log(wordPattern("abba", "dog cat cat dog")); //true
// console.log(wordPattern("abba", "dog cat cat fish")); //false
// console.log(wordPattern("aaaa", "dog cat cat dog")); //false
console.log(wordPattern("abba", "dog dog dog dog")); //false

