/**
 * @param {number[]} nums
 * @return {boolean}
 */
var containsDuplicate = function(nums) {
    const numsSet = new Set()

    for (let num of nums) {
        if (numsSet.has(num)) return true
        numsSet.add(num)
    }
    return false

    // // Cool Trick
    // // Create new set, check set length against length of nums
    // let numsSet = new Set(nums);
    // return (nums.length!=numsSet.size)
};