// Напишіть функцію, яка приймає масив об'єктів та ключ групування, і повертає об'єкт,
// де кожен ключ - це значення відповідного ключа групування, а значення - це масиви об'єктів, що належать до цієї групи.

const inputData = [
  { name: "John", age: 20, occupation: "Engineer" },
  { name: "Jane", age: 25, occupation: "Doctor" },
  { name: "Bob", age: 20, occupation: "Engineer" },
];

function groupBy(dataList, key) {
  const uniqueKeysAndResult = new Map();

  for (const list of dataList) {
    const realKey = list[key];

    if (uniqueKeysAndResult.has(realKey)) {
      const aa = uniqueKeysAndResult.get(realKey);

      uniqueKeysAndResult.set(realKey, [list, ...aa]);
    } else {
      uniqueKeysAndResult.set(realKey, [list]);
    }
  }

  return Object.fromEntries(uniqueKeysAndResult);
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