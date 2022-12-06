# Sorting Algorithms

**WHAT IS SORTING?**
`Sorting` is the process of rearranging the items in a collection (e.g an array) so that the items are in some sort of order.

Examples:
- sorting numbers from smallest to largest
- sorting names alphabetically
- sorting movies based on release year
- sorting movies based on revenue

Sorting is a very common, fundamental task, so it's important to understand how it works.

There are many different ways to sort things, and different techniques have their own pros and cons

### SWAPPING
Many algorithms involve some type of swapping functionality

    // ES5
    function swap(arr, index1, index2) {
      let temp = arr[index1];
      arr[index1] = arr[index2];
      arr[index2] = temp;
    }

    // ES6
    const swap = (arr, index1, index2) => {
      [arr[index1], arr[index2]] = [arr[index2], arr[index1]]
    }
---
## BASIC SORTING METHODS
---
### Built-In JavaScript Sort Method
---
`array.sort()` doesn't always behave as expected.  The default sort order is according to string Unicode code points.

**COMPARATOR FUNCTION**
- the built-in sort method accepts an optional _comparator_ function which can be used to tell JS how you want to sort the data.
- the camparator function looks at pairs of elements (`a` and `b`) and determines their sort order based on the return value
- if `return value` is `negative`, then `a` should come before `b`
- if `return value` is `positive`, then `b` should come before `a`
- if `return value` is `0`, then `a` is the same as `b` as far as sort is concerned

    function numCompare(num1, num2) {
      return num1 - num2;
    }

    [6, 4, 15, 10].sort(numCompare) // [4, 6, 10, 15]

---
### Bubble Sort
---
A sorting algorithm where the largest values "bubble" up to the top.

Basically, the algo compares two elements, [a, b].  If `a` is larger than `b`, then those elements swap.  We continue to compare elements until we reach the end of the array.

**NOTE:** each iteration we should be comparing one less pair of elements since the largest value should have bubbled up to the top.  This is acheived by iterating over the array first (with `i`) from the end to the front, and second (with `j`) from the front to the back.  Second iteration should stop on the element before the `i` index.  (`let j = 0; j < i - 1; j++>`)

**NOTE:** there's a case when an array is properly sorted, either at the start or achieved while bubbleSort is still running, where we want to tell the function to stop iterating since the array is sorted.  We do this by introducing a `noSwaps` variable.


[5, 3, 4, 1, 2]
 |  |
 compare  (5 is larger than 3 -> SWAP!)

[3, 5, 4, 1, 2]
    |  |
    compare  (5 is larger than 4 -> SWAP!)

[3, 4, 5, 1, 2]
       |  |
       compare  (5 is larger than 1 -> SWAP!)

[3, 4, 1, 5, 2]
          |  |
          compare  (5 is larger than 2 -> SWAP!)


Implementation:

    function bubbleSort(arr) {
      let noSwaps;
      for (let i = arr.length; i > 0; i--) {
        noSwaps = true;
        for (let j = 0; j < i - 1; j++) {
          const firstEl = arr[j];
          const secondEl = arr[j + 1]
          if (firstEl > secondEl) {
            let temp = arr[j];
            arr[j] = arr[j + 1];
            arr[j + 1] = temp;
            noSwaps = false;
          }
        }
        if (noSwaps) break;
      }
      return arr;
    }

**TIME COMPLEXITY:** - worst case O(n^2).  Best case (nearly sorted using noSwap) - O(n)

*WHEN IT'S GOOD* - Bubble Sort (with noSwaps) is potentially a good choice if the data set is nearly sorted.

---
### Selection Sort
---
Similar to bubble sort, but instead of first placing large values into sorted position, it places small values into sorted position.  It does this by finding the smallest value in each iteration, storing that index, and swapping it with the first element after traversing the entire array.

EXAMPLE - single pass
go through array looking for minimum value, then swap that to the front

[5, 3, 4, 1, 2]   // compare 5 & 3, we find that 3 is minimum (for now)
 |  |

[5, `3`, 4, 1, 2] // keep track of 5, compare 4, 3 is still minimum (for now)
 |       |

[5, `3`, 4, 1, 2] // keep track of 5, compare 1, 1 is now minimum (for now)
 |          |
 
[5, 3, 4, `1`, 2] // keep track of 5, compare 2, 1 is still minimum
 |             |

[`1`, 3, 4, 5, 2] // we've reached the end, swap 1 and 5.   1 is now in the sorted position
  |         |

Implementation:

    function selectionSort(arr) {
      for (let i = 0; i < arr.length; i++) {
        let min = i;
        for (let j = i + 1; j < arr.length; j++) {
          const minVal = arr[min];
          const currVal = arr[j];
          if (currVal < minVal) min = j;
        }
        if (min !== i) swap(arr, i, min)
      }
      return arr;

      function swap(arr, idx1, idx2) {
        let temp = arr[idx1];
          arr[idx1] = arr[idx2];
          arr[idx2] = temp;
      }
    }
  
**TIME COMPLEXITY:**  O(n^2)

*WHEN IT'S GOOD* - Selection sort is potentially better than something like bubble sort if you want to minimize the number of swaps made.  Otherwise, not usually ideal.

---
### Insertion Sort
---
Builds up the sort by gradually creating a larger left portion which is always sorted

`1` numbers are already `sorted`

[`5`, 3, 4, 1, 2]
      |
      
[`3, 5`, 4, 1, 2]
         |
      
[`3, 4, 5`, 1, 2]
            |

[`1, 3, 4, 5`, 2]
               | 

[`1, 2, 3, 4, 5`] 

Implementation:

    function insertionSort(arr) {
      for (let i = 1; i < arr.length; i++) {
        const currEl = arr[i];
        let j = i - 1;
        while(j >= 0 && arr[j] > currEl) {
          const sortedEl = arr[j];
          arr[j + 1] = sortedEl;
          j--;
        }
        arr[j + 1] = currEl;
      }
      return arr;
    }

**TIME COMPLEXITY:**  worst case - O(n^2).  Best case (data is all sorted and we're inserting a value) - O(n)

*WHEN IT'S GOOD* - for a nearly sorted list this excels.  Also, if you need to continuously sort data, such as data that is coming in live, this can be a good method for sorting as long as new elemet is pushed to the correct side of the array.
*WHEN IT FAILS* - when the list is 100% opposite of the goal

---
### Comparing Bubble, Insertion and Selection Sort
---

    -----------------------------------------------------------------------------
    |   ALGO    | Best Time Comp | Avg Time Comp | Worst Time Comp | Space Comp |
    |---------------------------------------------------------------------------|
    | Bubble    |     O(n)       |      O(n^2)   |    O(n^2)       |  O(1)      |
    |---------------------------------------------------------------------------|
    | Insertion |     O(n)       |      O(n^2)   |    O(n^2)       |  O(1)      |
    |---------------------------------------------------------------------------|
    | Selection |     O(n^2)     |      O(n^2)   |    O(n^2)       |  O(1)      |
    -----------------------------------------------------------------------------

---
## INTERMEDIATE SORTING METHODS
---
There is a family of sorting algorithms that can improve time complexity from O(n^2) to O(n logn).
There is a trade off of efficiency and simplicity.
These faster algorithms are much more complex.

---
## MergeSort
---
### How It Works
Combination of three things:
1. splitting up
2. sorting
3. merging

- Exploits the fact that arrays of 0 or 1 element are "already sorted"
- Works by decomposing an array into smaller arrays of 0 or 1 elements , then building up a sorted array
- Sorting (or merging) two sorted arrays is easy relative to sorting two random arrays.

                      [8, 3, 5, 4, 7, 6, 1, 2]        // not an array of 0 or 1 element
                                                      // split in half
                 [8, 3, 5, 4]         [7, 6, 1, 2]    // still not arrays with 0 or 1 element
                                                      // split in half
               [8, 3]     [5, 4]   [7, 6]    [1, 2]   // still not arrays with 0 or 1 element
                                                      // split in half
              [8]  [3]  [5]  [4]   [7]  [6]  [1]  [2] // arrays of 0 or 1 element
                                                      // now we merge the "sorted" arrays
                                                      // compare numbers, smaller goes first
               [3, 8]     [4, 5]   [6, 7]    [1, 2]   // merge again. 
                 [3, 4, 5, 8]         [1, 2, 6, 7]    // merge again.
                      [1, 2, 3, 4, 5, 6, 7, 8]        // sorted!

### Merge Helper Function

- In order to implement merge sort, it's useful to first implement a function responsible for merging two sorted arrays
- Given two arrays which are sorted, this helper function should create a new array which is also sorted, and consists of all the elements in the two input arrays
- This function should run in `O(n + m)` time and `O(n + m)` space and should not modify the parameters passed to it

Implementation:

    function merge(arr1, arr2) {
        const outputArr = [];
        let arr1Point = 0;
        let arr2Point = 0;
        while (arr1Point < arr1.length && arr2Point < arr2.length) {
          const arr1El = arr1[arr1Point]; 
          const arr2El = arr2[arr2Point];
          if (arr1El < arr2El) {
            outputArr.push(arr1El);
            arr1Point++;
          } else {
            outputArr.push(arr2El);
            arr2Point++;
          }
        }
      
        arr1Point === arr1.length ? outputArr.push(...arr2.slice(arr2Point)) : outputArr.push(...arr1.slice(arr1Point))
        return outputArr;
    }

### Merge Sort Implementation:

    function mergeSort(arr) {
      // BASE CASE - check if length is 1 or less
      if (arr.length <= 1) return arr;

      // RECURSIVE CASE - split then merge
      // split into two arrays
      const splitPoint = Math.floor(arr.length / 2);
      // 1st half - slice, then mergeSort
      const arr1 = mergeSort(arr.slice(0, splitPoint));
      // 2nd half - slice, then mergeSort
      const arr2 = mergeSort(arr.slice(splitPoint));
      // merge two sorted arrays
      return merge(arr1, arr2);

      function merge(arr1, arr2) {
        const outputArr = [];
        let arr1Point = 0;
        let arr2Point = 0;
        while (arr1Point < arr1.length && arr2Point < arr2.length) {
          const arr1El = arr1[arr1Point]; 
          const arr2El = arr2[arr2Point];
          if (arr1El < arr2El) {
            outputArr.push(arr1El);
            arr1Point++;
          } else {
            outputArr.push(arr2El);
            arr2Point++;
          }
        }
      
        arr1Point === arr1.length ? outputArr.push(...arr2.slice(arr2Point)) : outputArr.push(...arr1.slice(arr1Point))
        return outputArr;
      }
    }

### Big O Notation
**TIME COMPLEXITY:**  Best / Average / Worst case - O(n log n)
WHY?
O(log n) decompositions * O(n) comparisons per decomposition = O(n log n)
**SPACE COMPLEXITY:** O(n)

---
## Quick Sort
---
### How It Works
- Like `merge sort`, exploits the fact that arrays of - or 1 element are always sorted
- Works by selecting one element (called the "pivot") and finding the index where the pivot should end up in the sorted array
- Once the pivot is positioned appropriately, quick sort can be applied on either side of the pivot


[`5`, 2, 1, 8, 4, 7, 6, 3]  // pick some element, in this case 5.  
             `5`            // Move all numbers < 5 to the left and numbers > 5 to the right
[3, 2, 1, 4,    , 7, 6, 8]  // we now know 5 is in the correct spot in the array
      `3`           `7`     // repeat the process for the left and right side, recursively
[1, 2,  , 4]     [6,  , 8]]
`1`                         // repeat the process for the left and right side, recursively
[ , 2]

### Pivot Helper Function (or partition)
- In order to implement quick sort, it's useful to first implement a function responsible for arranging elements in an array on either side of a pivot
- Given an array, this helper function should designate an element as the pivot
- It should then rearrange elements in the array so that all values less than the pivot are moved to the left of the pivot and all values greater than the pivot are moved to the right of the pivot
- The order of elements on either side of the pivot doesn't matter
- The helper should do this **in place**, that is, it should not create a new array
- When complete, the helper should return the index of the pivot

#### Picking a Pivot
- The runtime of quick sort depends in part on how one selects the pivot
- Ideally, the pivot should be chosen so that it's roughly the median value in the sata set you're sorting
- For now, we're going to choose the pivot to be the first element (and discuss the consequences of this later)

#### Pivot Example

let arr = [5, 2, 1, 8, 4, 7, 6, 3]
pivot(arr); //4
arr;
// any of these is an ecceptable mutation:
// [2, 1, 4, 3, 5, 8, 7, 6]
// [1, 4, 3, 2, 5, 7, 6, 8]
// [3, 2, 1, 4, 5, 7, 6, 8]
// [4, 1, 2, 3, 5, 6, 7, 8]