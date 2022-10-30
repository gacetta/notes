# Algorithms and Problem Solving Patterns

## How to improve algos
1. Devise a plan for solving problems
2. Master common problem solving patterns

## Problem Solving Strategies
1. understand the problem
2. explore concrete examples
3. break it down
4. solve/simplify
5. look back and refactor

Resource: How To Solve It - George Polya

## 1. Understand The Problem
Fight the urge to jump in too quickly.  Really understand what the problem is asking you.

1. Can I restate the problem in my own words?
2. What are the inputs / outputs?
3. Can the outputs be determined from the inputs?  AKA - do I have enough info to solve the problem?
4. How should I label the important pieces of data that are a part of the problem?

## 2. Explore Examples
- coming up with examples helps you understand the problem better
- examples also provide sanity checks that your eventual solution works how it should
-user stories!  Unit tests!

1. start with simple examples
2. progress to more complex examples
3. explore examples with empty inputs
4. explore examples with invalid inputs

## 3. Break It Down
- kind of like pseudo-code
- explicitly write out the steps you need to take.  
  - this forces you to think about the code you'll need to write before you write it.  It helps you catch and lingering conceptual / logic issues or misunderstandings before you dive in and worry about details (e.g. language syntax)

## 4. Solve / Simplify
Solve the problem!... if you can't... Solve a simpler problem.  AKA, ignore the part that is giving you a hard time and solve a simpler version.

### Simplify
1. Find the corse difficulty in what you're trying to do
2. Temporarily ignore that difficulty
3. Write a simplified solution
4. Then incorporate that difficulty back in

## 5. Look Back & Refactor
You solved it!  But you're not done!

### Refactoring Questions:
1. Can you check the result?
2. Can you derive the result differently?
3. Can you understand it at a glance?
4. Can you use the result or method for some other problem?
5. Can you improve the performance of your solution?
6. Can you think of other ways to refactor?
7. How have other people solved this problem?

    if (/[a-z0-9]/.test(char)) {
      if (obj[char] > 0) {
        obj[char]++;
      } else {
        obj[char] = 1;
      }
    }

    if (/[a-z0-9]/.test(char)) {
      obj[char] = obj[char] > 0 ? ++obj[char] : 1
    }

    if (/[a-z0-9]/.test(char)) {
      obj[char] = ++obj[char] || 1;
    }

# MASTERING COMMON PROBLEM SOLVING PATTERNS

Not a notebook of solutions that will solve ALL algos.  But there are some commmon approaches that are applicable to many problems.

Some patterns:
- Frequency Counter
- Multiple Pointers
- Sliding Window
- Divide and Conquer
- Dynamic Programming
- Greedy Algos
- Backtracking
---
## Frequency Counters
---
A pattern that uses objects or sets to collect values / frequencies of values

This can often avoid the need for nested loops or `O(n^2)` operations with arrays / strings.

Example Problem:

Write a function called **same** which accepts two arrays.  The function should return true if every value in the array has it's corresponding value squared in the second array.  The frequency of values must be the same.

    same([1, 2, 3], [4, 1, 9]) // true
    same([1, 2, 3], [1, 9]) // false
    same([1, 2, 1], [4, 4, 1]) // false (must be same frequency. [1, 4, 1] would return true)

**A _Naive_ Solution:**

    function same(arr1, arr2) {
      if (arr1.length !== arr2.length) {
        return false;
      }
      for (let i = 0; i < arr1.length; i++) {
        let correctIndex = arr2.indexOf(arr1[i] ** 2)
        if (correctIndex === -1) {
          return false;
        }
        arr2.splice(correctIndex, 1)
      }
      return true;
    }

Nested loops: a `for loop` with `indexOf` inside (which is another loop) results in time complexity of `O(n^2)`

**Refactored For Better Time Complexity**
Loop over each array ONE time individually:

  function same(arr1, arr2) {
    if(arr1.length !== arr2.length) {
      return false;
    }
    let frequencyCounter1 = {};
    let frequencyCounter2 = {};
    for (let val of arr1) {
      frequencyCounter1[val] = (frequencyCounter1[val] || 0) + 1;
    }
    for (let val of arr2) {
      frequencyCounter2[val] = (frequencyCounter2[val] || 0) + 1;
    }
    for (let key in frequencyCounter1) {
      if (!(key ** 2 in frequencyCounter2)) {
        return false;
      }
      if (frequencyCounter2[key ** 2] !== frequencyCounter1[key]) {
        return false;
      }
    }
    return true;
  }

**ADDITIONAL EXAMPLE:**

Prompt: given two strings, write a function to determine if the second string is an anagram of the first.  An anagram is a word, phrase or name formed by rearranging the letters of another, such as _cinema_ formed from _iceman_.

  validAnagram('', '') // true
  validAnagram('aaz', 'zza') // false
  validAnagram('anagram', 'nagaram') // true
  validAnagram('rat', 'car') // false
  validAnagram('awesome', 'awesom') // false
  validAnagram('qwerty', 'qeywrt') // true
  validAnagram('texttwisttime', 'timetwisttext') // true


    function validAnagram(str1, str2) {
      if (str1.length !== str2.length) {
        return false;
      }
      let countObj = {};

      for (let letter of str1) {
          countObj[letter] ? countObj[letter] += 1 : countObj[letter] = 1;
      }

      for (let letter of str2) {
          if (!countObj[letter]) {
              return false;
          } else {
              countObj[letter] -= 1;
          }
      }

      return true;
    }
---
## Multiple Pointers
---
Create pointers or values that correspond to an index or position and move towards the beginning, end or middle based on a certain condition.

This method is VERY efficient for solving problems with minimal space complexity as well.

Example:
Write a function called sumZero which accepts a **SORTED** array of integers.  The function should find ht efirst pair where the sum is 0.  Return an array that includes both values that sum to zero or undefined if a pair does not exist.

sumZero([-3,-2,-1,0,1,2,3]) // [-3,3]
sumZero([-2,0,1,3]) // undefined
sumZero([1,2,3]) // undefined

**A _Naive_ Solution:**

    function sumZero(arr) {
      for (let i = 0; i < arr.length; i++) {
        for (let j = i + 1; j < arr.length; j++) {
          if (arr[i] + arr[j] === 0) {
            return [arr[i], arr[j]];
          }
        }
      }
    }

This contains nested `for` loops and results in a time complexity of `O(n^2)`.  Space complexity is `O(1)`

**Refactored for better time complexity**

    function sumZero(arr) {
      let left = 0;
      let right = arr.length - 1;
      while (left < right) {
        let sum = arr[left] + arr[right];
        if (sum === 0) {
          return [arr[left], arr[right]];
        } else if (sum > 0) {
          right--;
        } else {
          left++;
        }
      }
    }

This results in a time complexity of `O(n)` and Space Complexity of `O(1)`

**Additional example:**

Implement a function called countUniqueValues which accepts a sorted array, and counts the unique values in the array.  There can be negative numbers in the array, but it will always be sorted.

countUniqueValues([1, 1, 1, 1, 2]) // 2
countUniqueValues([1, 2, 3, 4, 4, 4, 7, 7, 12, 13]) // 7
countUniqueValues([]) // 0
countUniqueValues([-2, -1, -1, 0, 1]) // 4

    function countUniqueValues(arr) {
        if (arr.length === 0) {
            return 0;
        }
        let first = 0;
        let second = 1;
        while (second < arr.length) {
            const el1 = arr[first];
            const el2 = arr[second];
            if (el1 === el2) {
                second++;
            } else {
                first++;
                arr[first] = arr[second]
                second++;
            }
        }
        return first + 1;
    }
---
## Sliding Window
---

This pattern involves creating a window which can either be an array or number from one position to another.

Depending on a certain condition, the window either increases or closes (and a new window is created)

Very useful for keeping track of a subset of data in an array/string/etc.

**Example:**

Write a function called maxSubarraySum which accepts an array of integers and a number called n.  The function should calculate the maximum sum of n consecutive elements in the array.

maxSubarraySum([1, 2, 5, 2, 8, 1, 5], 2) // 10
maxSubarraySum([1, 2, 5, 2, 8, 1, 5], 4) // 17
maxSubarraySum([4, 2, 1, 6], 1) // 6
maxSubarraySum([4, 2, 1, 6, 2], 4) // 13
maxSubarraySum([], 4) // null

**A _Naive_ Solution:**

    function maxSubarraySum(arr, num) {
      if (num > arr.length) {
        return null;
      }

      let max = -Infinity;

      for (let i = 0; i < arr.length - num + 1; i++) {
        let temp = 0;
        for (let j = 0; j < num; j++) {
          temp += arr[i + j];
        }
        if (temp < max) {
          max = temp;
        }
      }
      return max;
    }

Time complexity - `O(n^2)` because #NestedLoops

**_Sliding Window_ Refactor**

    function maxSubarraySum(arr, num) {
      let maxSum = 0;
      let tempSum = 0;
      if (arr.length < num) return null;
      for (let i = 0; i < num; i++) {
        maxSum += arr[i]
      }
      tempSum = maxSum;
      for (let i = num; i < arr.length; i++) {
        tempSum = tempSum - arr[i - num] + arr[i];
        maxSum = Math.max(maxSum, tempSum);
      }
      return maxSum;
    }

Time complexity - `O(n)`

---
## Divide and Conquer
---
This pattern involves dividing a data set into smaller chunks and then repeating a process with a subset of data.  

This pattern can tremendously decrease time complexity.

**Example:**

Given a **sorted** array of integers, write a function called binarySearch, that accepts a value and returns the index where the value passed to the function is located.  If the value is not found, return -1.

binarySearch([1, 2, 3, 4, 5, 6], 4) // 3
binarySearch([1, 2, 3, 4, 5, 6], 6) // 5
binarySearch([1, 2, 3, 4, 5, 6], 11) // -1

**A _Naive_ Solution:**

Look at each element in the array in a linear search:

  function binarySearch(arr, val) {
    for (let i = 0; i < arr.length; i++) {
      if (arr[i] === val) {
        return i;
      }
    }
    return -1;
  }

Time complexity: `O(n)`

**Solution Refactored with _Divide And Conquer_**

    function binarySearch(arr, val) {

      let min = 0;
      let max = arr.length - 1;

      while (min <= max) {
        let middle = Math.floor((min + max) / 2);
        let currEl = arr[middle];

        if (arr[middle] < val) {
          min = middle + 1;
        } else if ((arr[middle] > val) {
          max = middle - 1;
        } else {
          return middle;
        }
      }
      return -1;
    }

Time complexity - `O(logN)` for a binary search!