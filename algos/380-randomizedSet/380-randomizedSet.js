
var RandomizedSet = function() {
    // num: indexInData
    this.indexMap = {}
    this.data = []
    this.length = 0
};

/** 
 * @param {number} val
 * @return {boolean}
 */
RandomizedSet.prototype.insert = function(val) {
    if (this.indexMap.hasOwnProperty(val)) return false;

    // update array
    this.data.push(val);

    // update hashMap
    this.indexMap[val] = this.length;

    // update length
    this.length++;
    return true;
};

/** 
 * @param {number} val
 * @return {boolean}
 */
RandomizedSet.prototype.remove = function(val) {
    if (this.indexMap.hasOwnProperty(val)) {
        // update length
        this.length--;

        const valIndex = this.indexMap[val];
        const lastEl = this.data[this.length];

        // update array
        this.data[valIndex] = lastEl;
        this.data.pop();

        // update hashMap
        this.indexMap[lastEl] = valIndex;
        delete this.indexMap[val]

        return true;
    } 
    return false;
};

/**
 * @return {number}
 */
RandomizedSet.prototype.getRandom = function() {
    const randomIndex = Math.floor(Math.random()*this.length)
    return this.data[randomIndex]
};

/** 
 * Your RandomizedSet object will be instantiated and called as such:
 * var obj = new RandomizedSet()
 * var param_1 = obj.insert(val)
 * var param_2 = obj.remove(val)
 * var param_3 = obj.getRandom()
 */