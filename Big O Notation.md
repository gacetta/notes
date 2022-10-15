Big O notation always assumes worst case scenario meaning every item would be accessed

O(1) - Order of 1
Code that executes in the same amount of time no matter how big the array is

O(N) - Order of N
Time to execute grows in direct proportion to the amount of data

Example: linear search, since you'll have to look at each item of the array once.

O(N^2) - 
Time to execute grows in proportion to N^2

Example: bubble sort
One trip through an array = O(N), second trip O(N) = O(N^2)

O(log N)
Data being used is decreased by roughly 50% each time through the algorithm

Example: binary sort

O(N log N)

quick sort - comparing and moving values very efficiently without shifting, which means values are only compared once.  
So the number of comparisons = log n!
comparisons = log(n) + log(n-1) + .... + log(1)
comparisons = n log n

- O(N) the minimum O notation for a sort, since every item must be accessed
---
# Big O Notation

**Big O Notation** is a way to compare multiple implementations of code and comparing their performance.

- It's important to have a precise vocabulary to talk about how our code performs.  We can use this vocabulary to discuss trade-offs between different approaches.

- When your code slows down or crashes, identifying parts of the code that are inefficient can help us find pain points in our applications
---
## Compare Functions

We can take a look at two functions that calculate the sum of all numbers from 1 to n:

    function addUpTo(n) {
      let total = 0;
      for (let i = 1; i <= n; i++) {
        total += i;
      }
      return total;
    }

and:

    function addUpTo(n) {
      return n * (n + 1) / 2;
    }
  
Which is better?
What is better?  faster, less memory intensive

## Measuring speed

Time to run a program will differ from machine to machine.  In fact, the time will differ on the SAME machine.

For fast algorithms, speed measurements might not be precise enough.

So rather than counting `seconds` which are so variable, we can count `the number of simple operations` a machine needs to perform. 

    function addUpTo(n) {
      return n * (n + 1) / 2;
    }

So for the above code, we have 3 operations:
1 multiplication, 1 addition, 1 division

It doesn't matter what `n` is, we still only have 3 operations.

In comparison

    function addUpTo(n) {
      let total = 0;
      for (let i = 1; i <= n; i++) {
        total += i;
      }
      return total;
    } 

The above code has a loop and thus, has `n` operations.  If `n=5` then we go through the loop `5` times and have `5` addition operations.

We could count the exact number of operations, but more important is the general trend.  How does the number of operations grow in proportionality to `n`?

## Big O Notation

**Big O Notation** is a way to formalize fuzzy counting.  It's a way to talk formally about how the runtime of an algo grows as the inputs grow.  It's not about details, only broad trends.

We say that an algorithm is `O(f(n))` if the number of simple operations the computer has to do is eventually less than a constant times `f(n)`, as `n` increases.

- `f(n)` could be linear `(f(n) = n)`
- `f(n)` could be quadratic`(f(n) = n^2)`
- `f(n)` could be constant `(f(n) = 1)`
- `f(n)` could be something entirely different!

Examples:

    function addUpTo(n) {
      return n * (n + 1) / 2;
    }

The above function ALWAYS has 3 operations, no matter the input
It has a big O of `O(1)`

    function addUpTo(n) {
      let total = 0;
      for (let i = 1; i <= n; i++) {
        total += i;
      }
      return total;
    } 

In the above function, the number of operations is (eventually) bounded by a multiple of `n` (say, 10n).
It has a big O of `O(n)`

Another example:

    function countUpAndDown(n) {
      console.log('Going up!');
    | for (let i = 0; i < n; i++) {
O(n)|  console.log(i);
    | }
      console.log('At the top!\nGoing down...');]
    | for (let j = n - 1; j >= 0; j--) {
O(n)|  console.log(j);
    | }
      console.log('Back down.  Bye!);
    }

In the above function, the first loop will increase dependent on `n`.  A simple loop has a big of of `O(n)`.  The second loop has the same big O of `O(n)`

The number of operations is eventually bounded by a multiple of `n` (in this case `O(2n)`.  But we care about the big picture and say this has a big O of `O(n)`

    function printAllPairs(n) {
      for (let i = 0; i < n; i++) {
        for (let j = 0; j < n; j++) {
          console.log(i, j);
        }
      }
    }

The above code contains two loops.  However, in this case, the loops are nested.  The outer loop (with the `i` variable) is `O(n)` and the inner loop (with the `j` variable) is `O(n)` as well.  

An `O(n)` operation inside of an `O(n)` operation results in `O(n^2)`

## Clarifying

**Constants Don't Matter**
`O(2n)` is reduced to `O(n)`
`O(500)` is reduced to `O(1)`
`O(13n^2)` is reduced to `O(n^2)`

**Smaller Terms Don't Matter**
`O(n + 10)` can be reduced to `O(n)`
`O(100n + 50)` can be reduced to `O(n)`
`O(n^2 + 5n + 8)` can be reduced to `O(n^2)` <--- in the end `5n + 8` is meaningless compared to `n^2`

**Shorthands**
- Arithmetic operations are constant
- Variable assignment is constant
- Accessing elements in an array (by index) or object (by key) is constant
- In a loop, the complexity is the length of the loop times the complexity of whatever happens inside the loop.

## More examples

    function logAtLeast5(n) {
      for (let i = 0; i <= Math.max(5, n); i++) {
        console.log(i);
      }
    }

we could worry about the loop at 5, but we care about the complexity as n gets big.  So in this case: `O(n)`

    function logAtMost5(n) {
      for (let i = 0; i <= Math.min(5, n); i++) {
        console.log(i);
      }
    }

In this case, as `n` grows, we get `O(1)`

## Space Complexity

If **time complexity** analyzes the runtime of an algorithm as the size of the inputs increases, then **space complexity** analyzes how much additional memory we need to allocate in order to run the code in our algorithm.

We can still use big O notation for space complexity.

The term **auxiliary space complexity** refers to the space required by the algorithm, not including space taken up by the inputs.  This is what we refer to - basically we assume that as the size of the input increases, the space taken up by the input increases as well.  We're interested in how the space required by the algorithm increases.

Rules of Thumb:
1. most primitives (booleans, numbers, undefined, null) are constant space
2. Strings require `O(n)` space, where `n` is the string length
3. Reference types are generally `O(n)`, where `n` is the length (for arrays) or the number of keys (for objects)

    function sum(arr) {
      let total = 0;
      for (let i = 0; i < arr.length; i++) {
        total += arr[i];
      }
      return total;
    }

analyzing the _space complexity_ above: we see that there are two declared `numbers`.  `total` and `i`.  Thus, this has a space complexity of `O(1) space`

    function double(arr) {
      let newArr = [];
      for (let i = 0; i < arr.length; i++) {
        newArr.push(2 * arr[i]);
      }
      return newArr;
    }

analyzing the space complexity for the code above, we see that we declare a new array, `newArr`.  That's not as important as the fact that we're making the array as big as `arr.length` since we `push` a value to `newArr` in the loop.  If `arr` is 10 elements long, then we create a new array that is 10 elements long.  Thus, we have `O(n) space`.

## Logarithms
The most common complexities: `O(1)`, `O(n)`, `O(n^2)`

Another complexity is `O(log n)`

**logarithm** is the inverse of an exponentiation

log base 2 of 8 = 3 is asking, '2 to what power will give us 8'?
in more generic terms, log base 2 of a value = exponent.  Inversely, 2 to the exponent = value

most common are log base 2, log base 10, log base `e`, 

in big O notation, we omit the two, so for our needs `log === log base 2`

**Logarithmic time complexity is great!**

Some searching algos involve log time complexity, as do efficient sorting algos.  

Recursion sometimes involves log space complexity.

---
## Objects and Arrays using Big O

### Objects

**When to use objects?**
- when you don't need order
- when you need fast access / insertion & removal

#### Big O of Objects

Insertion   `O(1)`
Removal     `O(1)`
Searching   `O(n)`
Access      `O(1)`

When you don't need ordering, objects are a great way to go.

#### Big O of Object Methods

Object.keys()           `O(n)`
Object.values()         `O(n)`
Object.entries()        `O(n)`
Object.hasOwnProperty() `O(1)`

### Arrays

**When to use arrays**
- you need order
- when you need fast access / insertion and removal (sort of...)

#### Big O of Arrays

Insertion   It depends...  
Removal     It depends...
Searching   `O(n)`
Access      `0(1)`

Inserting and removing from the beginning of an Array is problem

`push()` and `pop()` always faster than `shift()` and `unshift()`

#### Big O Array Methods
push      `O(1)`
pop       `O(1)`
shift     `O(n)`
unshift   `O(n)`
concat    `O(n)`
slice     `O(n)`
splice    `O(n)`
sort      `O(n * log n)`
forEach/map/filter/reduce/etc.   `O(n)`