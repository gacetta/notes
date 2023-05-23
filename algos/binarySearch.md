# general shape to memorize first!

- pseudocode

## find idx of a target in a sorted array of nums

    left = 0
    right = idx of last element of array

    while left <= right
    mid = floor ((left + right) / 2)

    if nums[mid] is target, return mid

    if nums[mid] < target
    left = mid + 1
    else (the opposite of above)
    right = mid - 1

## if the target was never found, the while loop will exit

    return -1 (or whatever that stands for "not found")

---------------
## variation 1
---------------

- when one conditional is not “done”, but satisfies the condition, declare the result in a higher scope than the while loop and keep updating
- usually, one conditional is used to update and move mid, and the other only moves the mid
- pseudocode

## find the SMALLEST idx that is bigger than target in a sorted array

- if none exists, return -1

    left = 0
    right = lastIdx of array

    result = -1 
    
*NOTE:* that I'm using the "bad" path as the default here

    while left <= right
        mid = floor((left + right) / 2)

        if arr[mid] > target:
            result = min(result, mid)
            // satisfied condition, but see if you can get even better
            // note that this is not necessarily the final result, so don't return
            r = mid - 1
        else
          // smaller than target, so the condition is not satisfied, don't update
          result
          l = mid + 1

        return result

### leetcode examples:
- #69 Sqrt(x)
- #33 Search in rotated sorted array

---------------
## varation 2
---------------

- when the “good” condition is not obvious, you may need to first work on the logic that tells you if the condition is valid
- pseudocode

*NOTE:* identical to variation 1, but there is the step of figuring out the logic

- usually good to organize as a helper function

    function is_valid(idx) {
            // some sort of function that takes in the idx and gives back
            a boolean to see if the condition is valid
        }

    left = 0
    right = someMaxIdx

    res = -1
    while left <= right
        mid = floor of (left+right) / 2
        if is_valid(mid)
            // update res
            // move mid in the correct direction
        else
            // don't update res
            // move mid in the opposite direction as the above condition


    return res

### leetcode examples:
- #153 Find minimum in rotated sorted array
- #1891 Cutting ribbons
- #1011 Capacity to ship packages in d days
- #528 Random Pick with Weight
- #875 Koko eating bananas