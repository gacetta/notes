
var RandomizedSet = function() {
    this.indexMap = {}
    this.data = []
    this.length = 0
};

/** 
 * @param {number} val
 * @return {boolean}
 */
RandomizedSet.prototype.insert = function(val) {
    if (this.indexMap.hasOwnProperty(val.toString())) return false;
    else {
        // deal with array
        this.data.push(val);

        // deal with hashMap
        this.indexMap[val.toString()] = this.length;

        // deal with length
        this.length++;
        return true;
    }
};

/** 
 * @param {number} val
 * @return {boolean}
 */
RandomizedSet.prototype.remove = function(val) {
    if (this.indexMap.hasOwnProperty(val.toString())) {
        // deal with length
        this.length--;

        const valIndex = this.indexMap[val.toString()];
        const lastEl = this.data[this.length];

        // deal with array
        this.data[valIndex] = lastEl;
        this.data.pop();

        // deal with hashMap
        this.indexMap[lastEl.toString()] = valIndex;
        delete this.indexMap[val.toString()]

        return true;
    } else {
        return false;
    }
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