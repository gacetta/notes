Day 5 - Feb 3, 2023

# Algorithms

Different data structures exist to provide better efficiency

`algorithm` is a step by step set of instructions that provide a solution to a problem.
`business logic` - determines how data can be created, stored and changed

- image processing
- recommendations for user to connect to
- file compression
- targeted advertising

# time complexity

`Big O notation` describes the relationship between the size of an algo's input and the number of computational steps it takes for the algo to complete

- don't memorize "code shape"
- nested loops do not automatically mean O(n^2)
- single loops do not automatically mean O(n)

# recursion

imagine you're teleported to sitting in a movie theatre. when you're sitting in a seat, you can't see the people in front of you. You want to know what row you're in - you can tap on the shoulder of the person in front of you and ask what row they're in. This continues until the person in the front row says, "i'm in row one". Person behind them knows they're in row 2. Telephone continues.

**What is recursion?**
A function is recursive if:

- it calls itself within its own definition

common traits - iterative / recursive

- initialized value
- changing initial value
- terminating condition

**Why use recursion?**
Recursive functions are frequently more readable, maintainable, and easier to understand.

- non-recursive functions tend to describe HOW to get to a solution
- recursive solutions describe WHAT the solution is
- writing recursive functions often forces you to write `declarative` code instead of `imperative` code

**Types of recursion?**

1. linear recursion - once we hit a base case, we close up execution contexts and do the work as we close up

   const factorial = (n) => {
   if (n === 0) return 1;
   return n \* factorial(n - 1):
   }

time - O(n)
space - O(n)

2. tail call recursion (or iterative recursion) - all the work is done when we open the execution context

   const factorial = (n, product = 1) => {
   if (n === 0) return product;
   return factorial(n - 1, product \* n);
   }

`Stack Frame Replacement` - rather than pushing a new stack frame on top for each recursive call, we remove/replace the current recursive stack frame with our new call. When we hit base case and return, then we just return the value to the global stack, rather than pass the value through all the stack frames. **NOTE:** not all browsers implement Tail Call Optimization (TCO) - only safari. Optional with `continue` keyword?

browser:

- brings down performance
- linting -> looking for tail call recursion

developers:

- debugging

time - O(n)
space - O(1) <----- with stack frame replacement

3. mutual recursion

   function isEven(n) {
   if (n === 0) return true;
   else return isOdd(n - 1);
   }

   function isOdd(n) {
   if (n === 0) return false;
   else return isEven(n - 1)
   }

4. tree recursion (multiple recursion)

fibonacci numbers: 0, 1, 1, 2, 3, 5, 8, 13, 21, 34...

    function fib(n) {
      if (n ===0) return 0;
      else if (n === 1) return 1;
      else return fib(n - 1) + fib(n - 2);
    }

time - O(2 ^ n)
space - O(n)

# JSON Parser - Approach

`JSON` - Javascript Object Notation. A lightweight format for representing structure data based on Javascript syntax as a string It is useful when communicating between a front-end, a back-end or to an external API. Independent of language (even though JavaScript is part of the name)

`JSON.stringify()` takes in a valid object and converts it to a json string
`JSON.parse()` takes in a valid JSON string and converts it to a valid JS Object

Data Types representable by JSON:
-string
-bool
-number
-null
-object
-array
**NOT undefined**

JSON rules:

- JSON is purely a string with a specified data format
- must be syntactically correct JS
- does not include functions
- requires double quotes to be used around strings. single quotes aren't valid (other than to surround entire JSON string)
- JSON property names must be inside quotes

JSON parser

## control flow

parseBool()
parseString()
parseNumber()
parseNull()
partition(string) -> parseObject() -> recursively call JSONParser()
-> parseArray() -> recursively call JSONParser()
