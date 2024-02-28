/**
 * @param {number[]} nums
 * @return {number}
 */
// BRUTE FORCE
// var findPeakElement = function(nums) {

//     for (let i = 0; i < nums.length; i++) {
//         console.log("i:", i)
//         console.log('current element:', nums[i])

//         // single element edge case
//         if (nums.length === 1) return i

//         // first element edge case
//         if (i===0 && nums[i] > nums[i+1]) {
//             console.log('first element is peak')
//             return i
//         }
//         // last element edge case
//         if (i===nums.length-1 && nums[i] > nums[i-1]) {
//             console.log('last element is peak')
//             return i
//         }
//         // check l and r to be lower
//         if (nums[i-1] < nums[i] && nums[i] >nums[i+1]) {
//             console.log('found a peak');
//             return i;
//         }
//     }
// };


var findPeakElement = function(nums) {

    let l = 0
    let r = nums.length-1

    while(l < r){
        let mid = Math.floor((l+r) / 2)

        if(nums[mid] > nums[mid-1] && nums[mid] > nums[mid+1]) return mid

        if(nums[mid] < nums[mid+1]){
            l = mid+1
        } else if(nums[mid] > nums[mid+1]){
            r = mid
        } 
    }
    
    return r
};