/**
 * @param {number[]} citations
 * @return {number}
 */
var hIndex = function(citations) {
    let hIndex = 0;

    citations.sort((a,b) => b - a);
    for (let i=0; i<citations.length;i++) {
        if (citations[i] >= i+1) {
            hIndex += 1;
        } else {
            break;
        }

    }
    return hIndex;
};

console.log(hIndex([3,0,6,1,5]));
console.log(hIndex([1,3,1]));


// 3,0,6,1,5
// h=3
//
// 1 3 1
// h=1