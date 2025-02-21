
// 1) Должна быть хотя бы одна конфета
// 2) Ребёнок с большим рейтингом получает больше конфет чем их соседи

// * ЕСЛИ рейтинг одинаковый 2 2 тогда у второго будет меньше конфет чем у первого (при условии следующего соседа)
// * Вернуть минимально нужное кол-во конфет



/**
 * @param {number[]} ratings
 * @return {number}
 */
var candy = function(ratings) {
    let candies = [];

    for (let i = 0; i < ratings.length; i++) {
        const currentRatingMoreThanPrevious = ratings[i] > ratings[i-1];
        const currentRatingMoreThanNext = ratings[i] > ratings[i+1];
        const currentRatingMoreThanNextAndPrevious = currentRatingMoreThanPrevious && currentRatingMoreThanNext;

        let candySum = 1;
        if (currentRatingMoreThanPrevious) {
            candySum += candies[i-1];
        }

        if (currentRatingMoreThanNext && !currentRatingMoreThanNextAndPrevious) {
            candySum += 1;
        }

        candies.push(candySum);
    }

    for (let i = ratings.length - 2; i >= 0; i--) {
        const currentRatingMoreThanNext = ratings[i] > ratings[i + 1];

        if (currentRatingMoreThanNext) {
            candies[i] = Math.max(candies[i], candies[i + 1] + 1);
        }
    }

    return candies;
    // return candies.reduce((acc, cur) => {
    //     return acc + cur;
    // }, 0);
};

// var candy = function(ratings) {
//     const minimumSumOfCandies = 0;
//     let candies = [];
//
//     for (let i = 0; i < ratings.length; i++) {
//         const previousIndex = i-1;
//         const currentIndex = i;
//         const nextIndex = i+1;
//
//         const currentRatingMoreThanPreviousAndNext = ratings[currentIndex] > ratings[previousIndex] && ratings[currentIndex] < ratings[nextIndex];
//         console.log(`rating[currentIndex] ${ratings[currentIndex]}, rating[previousIndex] ${ratings[previousIndex]}, rating[nextIndex] ${ratings[nextIndex]}, result ${currentRatingMoreThanPreviousAndNext}`);
//         if (currentRatingMoreThanPreviousAndNext) {
//             if (candies[previousIndex] >= 0) {
//                 const giveMoreCandiesThanPreviousOne = candies[previousIndex] + 1;
//                 candies.push(giveMoreCandiesThanPreviousOne);
//             } else {
//                 candies.push(2);
//             }
//         } else {
//
//         }
//
//     }
//
//     console.log('candies', candies);
// };


// console.log(candy([1, 0, 2])); // 5
// console.log(candy([1, 2, 2])); // 4
// console.log(candy([1, 3, 2, 2, 1])); // 7
console.log(candy([1, 2, 87, 87, 87, 2, 1])); // 13
//                      without second for [1, 2, 3, 1, 2, 2, 1], with [1, 2, 3, 1, 3, 2, 1]
