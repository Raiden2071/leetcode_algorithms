var intToRoman = function(sum) {
  const values = [
    { number: 1000, roman: "M" },
    { number: 500, roman: "D" },
    { number: 100, roman: "C" },
    { number: 50, roman: "L" },
    { number: 10, roman: "X" },
    { number: 5, roman: "V" },
    { number: 1, roman: "I" },
  ];
  let romanResult = "";

  for (let { number, roman } of values) {
    while (sum >= number) {
      sum -= number;
      romanResult += roman;
    }
  }

  return romanResult;
};

console.log(intToRoman("3749"));
console.log(intToRoman("58"));
console.log(intToRoman("1994"));
