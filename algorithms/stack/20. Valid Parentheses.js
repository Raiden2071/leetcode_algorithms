/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function(s) {
  const stack = [];
  const pairs = {
    ')': '(',
    ']': '[',
    '}': '{'
  };

  for (let i = 0; i < s.length; i++) {
    const char = s[i];

    if (char === '(' || char === '[' || char === '{') {
      stack.push(s[i]);
    } else if (stack.pop() !== pairs[char]) {
       return false;
    }
  }

  return !stack.length;
};

console.log(isValid('()'));
console.log(isValid("()[]{}"));
console.log(isValid("(]"));
console.log(isValid("([])"));
