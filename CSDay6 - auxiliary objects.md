Day 6 - Feb 4

# Auxiliary Objects

5 Prompts:
Naive solution vs auxiliary object

`Set()` - an object that stores unique values of any type, whether primitive or object references. Requires `new` keyword.

- maintains original insertion order of values
- constructor accepts any iterable object
- set has its own methods: `add`, `delete`, `has`, `clear`, `entries`, `forEach`, `keys`

1. REMOVE DUPLICATES
   Given an array, return a new array with the duplicate elements removed.

Ex: removeDuplicates([3, 1, 3, 2, 9, 1]) -> [3, 1, 2, 9]

Naive: O(n^2)

- outputArr = []
- loop over inputArr
- if element is not in outputArr, push to output
- return output

Auxiliary Object: O(n) can we improve to save space?

- seen = new Set();
- outputArr = [];
- loop over inputArr
- if seen.has(element) - guaranteed sub-linear time, likely O(1)
  - seen.add(element)
  - output.push(element)
- return outputArr;

RemoveDup3

- seen = new Set()
- iterate over inputArr
- seen.add(element)
- return [...seen]

Remove Dup4

- return [...new Set(arr)]

2. UNION
   Given an arbitrary number of arrays, return a new array representing the union of the arrays.
   Do this in O(n) time.

Ex:
union([1, 3, 7], )

Naive:

- outputArr = [];
- iterate over each array in inputArr
  - iterate over each element of each array
    - if output doesn't include element, push element to outputArr
- return outputArr

Union2:

- new Set()
- iterate over each array in inputArr
  - iterate over each element of each array - Set.add(element)
    return [...Set()]

3. MAX CHAR
   Given a string, return the character that has the maximum frequency.
   If multiple characters occur the max number of times,
   return the character that occurs first in the string.

naive:

- countObj = {}
- loop over characters of string
  - if key doesn't exist in countObj, instantiate to 0
  - increment count
- declar maxCharCandidate, maxFreq = 0;

- iterate over each entry in countObj

  - if we have a maxCharCan, check freq > maxFreq
  - if true, grab new maxCharCand and maxFreq

- return maxCharCand

objects don't maintain insertion order -

improved: same idea as before, but use Map()
`map()` - an object that holds key/val pairs

- maintains original insertion order
- keys can be any data type
- has size property
- has own methods: `set`, `get`, `has`, `clear`, `entries`, `forEach`, `keys`

4. TWO SUM

naive: O(n^2)

- iterate over array
  - for each element, check if array.includes() element to hit target

improved: O(n)

- use a set()

5. FIBONACCI

improved: use a cache object to save evaluated results

# Algorithms Approach

- functionBind

- rockPaperScissors
  `combination` - order doesn't matter
  `permutation` - order of combinations matters

- mergeSort
  `divide and conquer` - subproblem is easier than problem
