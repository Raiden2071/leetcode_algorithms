var RandomizedSet = function() {
    this.values = [];
    this.indexMap = new Map();
};

/** 
 * @param {number} val
 * @return {boolean}
 */
RandomizedSet.prototype.insert = function(val) {
    if (this.indexMap.has(val)) return false;

    this.indexMap.set(val, this.values.length);
    this.values.push(val);
    return true;
};

/** 
 * @param {number} val
 * @return {boolean}
 */
RandomizedSet.prototype.remove = function(val) {
    if (!this.indexMap.has(val)) return false;

    let currentIndex = this.indexMap.get(val);

    let lastElement = this.values[this.values.length - 1];

    this.values[currentIndex] = lastElement;
    this.indexMap.set(lastElement, currentIndex)
    this.values.pop();
    this.indexMap.delete(val);

    return true;
};

/**
 * @return {number}
 */
RandomizedSet.prototype.getRandom = function() {
    let randomIndex = Math.floor(Math.random() * this.values.length);
    return this.values[randomIndex];
};

const randomizedSet = new RandomizedSet();
randomizedSet.insert(15);
randomizedSet.insert(25);
randomizedSet.insert(55);
console.log(randomizedSet.remove(25));
console.log('getRandom', randomizedSet.getRandom());

/**
 * Your RandomizedSet object will be instantiated and called as such:
 * var obj = new RandomizedSet()
 * var param_1 = obj.insert(val)
 * var param_2 = obj.remove(val)
 * var param_3 = obj.getRandom()
 */


// ---- ---- ---- ---- ----
// var RandomizedSet = function() {
//     this.values = new Map();
// };

// /** 
//  * @param {number} val
//  * @return {boolean}
//  */
// RandomizedSet.prototype.insert = function(val) {
//     if (this.values.has(val)) return false;

//     this.values.set(val, val);
//     return true;
// };

// /** 
//  * @param {number} val
//  * @return {boolean}
//  */
// RandomizedSet.prototype.remove = function(val) {
//     if (this.values.has(val)) return true;

//     this.values.delete(val);
//     return false;
// };

// /**
//  * @return {number}
//  */
// RandomizedSet.prototype.getRandom = function() {
//     const generateRandomIndex = Math.round(Math.random() * (this.values.size - 0) + 0);
//     return this.values.get(generateRandomIndex);
// };

// const randomizedSet = new RandomizedSet();
// console.log(randomizedSet.insert(15));
// console.log(randomizedSet.insert(25));
// console.log(randomizedSet.insert(55));

// console.log(randomizedSet.remove(155));
// console.log('getRandom', randomizedSet.getRandom());randomizedSet