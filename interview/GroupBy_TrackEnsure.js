// Напишіть функцію, яка приймає масив об'єктів та ключ групування, і повертає об'єкт,
// де кожен ключ - це значення відповідного ключа групування, а значення - це масиви об'єктів, що належать до цієї групи.

const inputData = [
  { name: "John", age: 20, occupation: "Engineer" },
  { name: "Jane", age: 25, occupation: "Doctor" },
  { name: "Bob", age: 20, occupation: "Engineer" },
];

function groupBy(dataList, key) {
  return dataList.reduce((acc, curr) => {
    const realKey = curr[key];
    if (acc[realKey]) {
      acc[realKey].push(curr);
    } else {
      acc[realKey] = [curr];
    }
    return acc;
  }, {});
}

const groupedData = groupBy(inputData, "occupation");

console.dir(groupedData, { depth: null });
// Очікуваний Результат:
// {
//   "Engineer": [
//     { name: "John", age: 20, occupation: "Engineer" },
//     { name: "Bob", age: 20, occupation: "Engineer" }
//   ],
//   "Doctor": [
//     { name: "Jane", age: 25, occupation: "Doctor" }
//   ]
// }