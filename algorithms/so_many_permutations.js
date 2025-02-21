// function permutations(elements) {
// }
//
// console.log(permutations(['a','b','c']));
x




























// function permutations(elements) {
//     if (elements.length === 0) return [[]];
//
//     const firstElement = elements[0];
//     const restElements = elements.slice(1);
//
//     const permutationWithoutFirstElement = permutations(restElements);
//
//     const allPermutations = [];
//
//     permutationWithoutFirstElement.forEach((perm) => {
//         console.log('perm', perm);
//         for (let i = 0; i <= perm.length; i++) {
//             const permWithFirst = [...perm.slice(0,i), firstElement, ...perm.slice(i)];
//             allPermutations.push(permWithFirst);
//         }
//     });
//
//     return allPermutations;
// }
//
// console.log(permutations(['a','b','c', 'd']));