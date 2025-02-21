/**
 * @param {number[]} gas
 * @param {number[]} cost
 * @return {number}
 */

// найти начальную точку (пройтись по массиву и найти где будет самое большое кол-во gas)
// написать алгоритм, чтобы мы прошлись по всем элементам массива

// fisrt incorrect variant
// var getNextGas = (gas, currentIndex) => {
//     if (currentIndex+1 === gas.length) {
//         return gas[0];
//     }
//     return gas[currentIndex+1];  
// };

// var stationCondition = (gas, cost, currentIndex, bestStationValue) => {
//     const nextGasIndex = getNextGas(gas, currentIndex);
//     return {
//         index: nextGasIndex,
//         value: gas[currentIndex] - cost[currentIndex] + nextGasIndex,
//     };
// };

// var defineStartPosition = (gas, cost) => {
//     var profitableStation = {
//         index: null,
//         value: null,
//     };

//     for (var i=0;i<gas.length;i++) {
//         // console.log('gas', gas[i]);
//         var stationValue = stationCondition(gas, cost, i, profitableStation);
//         if (stationValue.value > profitableStation.value) {
//             profitableStation = stationValue;
//         }
//     }

//     return profitableStation;
// };

// var canCompleteCircuit = function(gas, cost) {
//     const profitableStation = defineStartPosition(gas, cost);
    
    

//     return profitableStation;
// };


// -------------
var canCompleteCircuit = function (gas, cost) {
    function hasEnoughResources(gas, cost) {
        let totalGas = 0;
        let totalCost = 0;

        for (let i = 0; i < gas.length; i++) {
            totalGas += gas[i];
            totalCost += cost[i];
        }

        return totalGas >= totalCost;
    }

    function findStartPosition(gas, cost) {
        let totalSum = 0;
        let startPositionIndex = 0;

        for (let i = 0; i < gas.length; i++) {
            totalSum += gas[i] - cost[i];

            if (totalSum < 0) {
                startPositionIndex = i + 1;
                totalSum = 0;
            }
        }

        return startPositionIndex;
    }

    if (!hasEnoughResources(gas, cost)) {
        return -1;
    }

    return findStartPosition(gas, cost);
};
console.log(canCompleteCircuit([1, 2, 3, 4, 5], [3, 4, 5, 1, 2]));
console.log(canCompleteCircuit([2,3,4], [3,4,3]));
console.log(canCompleteCircuit([5,1,2,3,4], [4,4,1,5,1]));

// 5-4 == 1
// 1+1 -4 = -2