/**
 * @param {number} n
 * @return {boolean}
 */
var isHappy = function(n) {
    let seen = new Set();

    while (n !== 1 && !seen.has(n)) {
        seen.add(n);
        n = [...n.toString()].reduce((sum, digit) => sum + digit ** 2, 0);
    }

    return n === 1;
};


console.log(isHappy(19));
console.log(isHappy(2));
console.log(isHappy(21));