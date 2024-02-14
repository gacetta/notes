/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var search = function(nums, target) {
    // declare pointers
    let l = 0;
    let r = nums.length - 1;

    // iterate over nums array.
    // once l crosses r we have seen entire array
    while (l <= r) {
        // find midpoint
        const m = Math.floor((r + l)/2);
        // // EXTREME EDGE CASE
        // // if l and r are extremely large nums, 
        // // possible error adding l + r = TOO BIG
        // // this method: find dist. between l & r
        // // add half of that distance to l
        // // this way we will never be larger than r
        // const m = Math.floor(l + ((r - l)/2));

        // if midpoint is less than target, move left pointer
        if (nums[m] < target) l = m + 1;
        // if midpoint is greater than target, move right pointer
        else if (nums[m] > target) r = m - 1;
        // if nums[m] is neither < or >, we must have found the target: 
        // return index
        else return m;
    }

    return -1;
};