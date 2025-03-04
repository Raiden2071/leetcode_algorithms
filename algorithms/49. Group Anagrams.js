/**
 * @param {string[]} strs
 * @return {string[][]}
 */
var groupAnagrams = function(strs) {
    var results = {};
    
    strs.forEach(str => {
        var sortedString = str.split('').sort().join('');
        
        if (sortedString in results) {
            results[sortedString] = [...results[sortedString], str]
        } else {
            results[sortedString] = [str];
        }
    });

    return Object.values(results)
};

console.log(groupAnagrams(["eat","tea","tan","ate","nat","bat"]));
console.log(groupAnagrams([""]));
console.log(groupAnagrams(["a"]));
