# Searching Algorithms
JavaScript includes many different search methods for arrays:
- `indexOf`
- `includes`
- `find`
- `findIndex`

---
## Linear Search on Arrays
---
- Simplest method of searching for a value in an array - look at every element in the array and cehck if it's the value we want.

- Checks every item, one item at a time.

Big(O): best case - O(1).  Worst/Avg case - O(n) - best we can do for an `unsorted` list

---
## Binary Search
___
- Can be much faster form of search
- Rather than eliminating one element at a time, it eliminates _half_ the remaining elements at a time
- Only works on **SORTED** arrays!

Also known as *Divide and Conquer*

    function binarySearch(arr, target) {
      let left = 0;
      let right = arr.length - 1;
      let mid = Math.floor((left + right)/ 2);

      while (arr[mid] !== target && left <= right) {
        if (target < arr[mid]) right = mid -1;
        else left = mid + 1
        mid = Math.floor((left + right)/ 2);
      }
      return arr[mid] === target ? mid : -1;
    }

Big(O): best case - O(1).  Worst/Average case - O(logN)

---
## Naive String Search
---
Suppose you want to count the number of times a smaller string appears in a larger string

Given string `wowomgzomg` 
find how many times `omg` appears

    function searchString(str, target) {
      let count = 0;
      for (let i = 0; i < str.length; i++) {
        for (let j = 0; j < target.length; j++) {
          const targetChar = target[j];
          const strChar = str[i + j]
          if (strChar !== targetChar) break
          if (j === target.length - 1) count++;
        }
      }
      return count;
    }