/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
const twoSum = function(nums, target) {
  const cache = new Map();

  // loop over nums
  for (let i = 0; i < nums.length; i++) {
    const currNum = nums[i];
    const numPair = target - currNum;
    if (cache.has(numPair)) {
      return [i, cache.get(numPair)]
    }
    else cache.set(currNum, i);
  }
};