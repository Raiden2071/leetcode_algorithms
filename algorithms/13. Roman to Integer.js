/**
 * @param {string} s
 * @return {number}
 */
var romanToInt = function(s) {
    const symbolsToNumber = {
      "I": 1,
      "V": 5,
      "X": 10,
      "L": 50,
      "C": 100,
      "D": 500,
      "M": 1000,
    };
    let sum = 0;

    for (let i = 0; i < s.length; i++) {
        const roman = symbolsToNumber[s[i]];
        const nextRoman = symbolsToNumber[s[i+1]];

        console.log('roman', roman, 'index', i, 'sum', sum);

        if (nextRoman > roman) {
            console.log('nextRoman', nextRoman, 'nextRoman', nextRoman, '---', nextRoman - roman);
            sum += nextRoman - roman;
            i++;
        } else {
            sum += roman;
        }
    }

    return sum;
};



// console.log(romanToInt("XCIV"));
// console.log(romanToInt("LVIII"));
console.log(romanToInt("MCMXCIV"));
