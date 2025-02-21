/**
 * @param {string[]} words
 * @param {number} maxWidth
 * @return {string[]}
 *
 * у нас должно быть как можно больше слов в рядку maxWidth
 * если слово не влезает тогда мы делаем равноценные пробелы между словами
 * если это последний рядок, тогда мы делаем пробелы только справа
 *
 *
 * Добавлять слово и пробел к нему далее ещё одно слово и так пока мы не дойдём до слова что не влезает.
 * Далее, раздели грамотно по пробелам
 */
var fullJustify = function(words, maxWidth) {
  const justifiedWords = [];
  let currentLine = [];
  let currentLength = 0;

  for (let word of words) {
    if (currentLength + word.length + currentLine.length <= maxWidth) {
      currentLine.push(word);
      currentLength += word.length;
    } else {
      const spacesToAdd = maxWidth - currentLength;
      const numberOfSlots = currentLine.length - 1;

      if (numberOfSlots > 0) {
        const spacesPerSlot = Math.floor(spacesToAdd / numberOfSlots);
        let extraSpaces = spacesToAdd % numberOfSlots;

        let line = '';
        for (let i = 0; i < currentLine.length; i++) {
          line += currentLine[i];
          if (i < numberOfSlots) {
            line += ' '.repeat(spacesPerSlot + (extraSpaces > 0 ? 1 : 0));
            extraSpaces--;
          }
        }
        justifiedWords.push(line);
      } else {
        justifiedWords.push(currentLine[0] + ' '.repeat(spacesToAdd));
      }

      currentLine = [word];
      currentLength = word.length;
    }
  }

  const lastLine = currentLine.join(' ') + ' '.repeat(maxWidth - currentLength - (currentLine.length - 1));
  justifiedWords.push(lastLine);

  return justifiedWords;
};

// console.log(fullJustify(["This", "is", "an", "example"], 16))
console.log(fullJustify(["This", "is", "an", "example", "of", "text", "justification."], 16))
