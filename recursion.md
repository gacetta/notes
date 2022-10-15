# Recursion

## What is Recursion?
A process (a function in our case) that calls itself

## Why?
It's everywhere!
- `JSON.parse / JSON.stringify` doesn't have to be written recursively but often is
- `document.getElementById`
- `DOM traversal algos`
- `Object traversal`
- we see it with more complex data structures
- sometimes a cleaner alternative to iteration

### CALL STACK
- With `iterative` functions, functions are pushed on the call stack and popped off when they are finished
- with `recursive` functions, we keep pushing the same function onto the call stack!

## How do recursive functions work?
Invoke the same function with a different input until you reach your base case!

**Two essential parts of a recursive function:**
- `Base Case` - the condition when the recursion ends. 
- `Recursive Case` - call the same function with a new input

## Where Things Go Wrong
- no base case
- recursive call doesn't update the input in the direction of reaching the base case
- base case doesn't return or break

## Helper Method Recursion

general shape:

    function outer(input) {

      const outerScopedVariable = [];
      helper(input);
      return outerScopedVariable;

      function helper(helperInput) {
        // modify the outerScoped Variable
        helper(helperInput--);
      }
    }

Example: collect all of the odd values in an array:

    function collectOddValues(arr) {

      let result = [];
      helper(arr);
      return result;


      function helper(helperInput) {
        if (helperInput.length === 0) {
          return;
        }

        if (helperInput[o] % 2 !== 0) {
          result.push(helperInput[0]);
        }

        helper(helperInput.slice(1));
      }
    }

## Pure Recursion

Example: collect all of the odd values in an array:

    function collectOddValues(arr) {
      const newArr = [];

      if (arr.length === 0) {
        return newArr;
      }

      if (arr[0] % 2 === 0) {
        newArr.push(arr[0]) ;
      }

      newArr = newArr.concat(collectOddValues(arr.slice(1)));
      return newArr;
    }

## Pure Recursion Tips
- For arrays, use methods like `slice`, `spread operator`, and `concat` that make copies of arrays so you do not mutate them
- Remember that strings are immutable so you will need to use methods like `slice`, `substr` or `substring` to make copies of strings
- To make copies of objects use `Object.assign` or the `spread operator`