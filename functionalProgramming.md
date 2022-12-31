# functional programming

Functional programming is a style of programming where solutions are simple, isolated functions, without any side effects outside of the function scope: 

    INPUT -> PROCESS -> OUTPUT

Functional programming is about:

1. Isolated functions - there is no dependence on the state of the program, which includes global variables that are subject to change
2. Pure functions - the same input always gives the same output
3. Functions with limited side effects - any changes, or mutations, to the state of the program outside the function are carefully controlled

---------------------------
## pure functions
---------------------------
1. the same input always gives the same output
2. function cannot modify anything except for itself / AKA no side-effects

The benefit of pure functions is that it makes functions very easy to test, very easy to compose and avoids many bugs because there are no mutations and no side-effects.

**TERMINOLOGY:** `referential transparancy` - A piece of code is referentially transparent if we can safely replace that piece of code with the value it computes and vice-versa, anywhere where that piece is used, without changing the meaning or result of our program.

The perfect function should:
- do only one single task
- have a return statement
- be pure 
- no shared state with other functions
- immutable state (never modify inputs / global state)
- composable
- predictable

---------------------------
## idempotence
---------------------------
`idempotence` - where performing an operation more than once has the same effect as performing it once.  This is important because it results in `predictable` code.

Example: a function that deletes a user is `idempotent`.  If we call it once it deletes the user.  If we call it again, the user is already deleted - we have the same result as calling it once as there's nothing else to delete.

Example: HTTP GET method is `idempotent` - it is defined as `safe` meaning it's only intended for retrieving data.  Thus, it's `idempotent` since multiple, identical requests will behave the same.

-----------------------------
## currying
-----------------------------
`currying` - the technique of translating the evaluation of a function that takes multiple arguments into evaluating a sequence of functions, each with a single argument.

```
const multiply = (a, b) => a*b;
const curriedMultiply = (a) => (b) => a*b;
curriedMultiply(5)(3);  //15
const curriedMultiplyBy5 = curriedMultiply(5);
curriedMultiplyBy5(3);  //15
```

-----------------------------
## partial application
-----------------------------
a way to partially apply a function, or the process of producing a function with a smaller number of parameters.  In other words, apply a portion of the arguments to a function, and then apply the remaining arguments the next time you call that function.

function: 
`const multiply = (a, b, c) => a*b*c;`

curried:
`const curriedMultiply = (a) => (b) => (c) => a*b*c;`
`curriedMultiply(5)(4)(10);  //200`

partial application:
`const partialMultiplyBy5 = multiply.bind(null, 5)`
`partialMultiplyBy5(4, 10); //200`

-----------------------------
## caching & memoization
-----------------------------
`caching` is a way of storing values so you can use them later on.  Think of caching as a backpack - when you go to school you have what you need without already, instead of going home each time you need an item. 

`memoization` is a way to remember the output of a function so you don't have to calculate it again.  . It does this by storing computation results in cache, and retrieving that same information from the cache the next time it's needed instead of computing it again.

_BEST PRACTICE_ is to store the cache in closure:
```
function memoize(callback) {
  cache = {};
  return function memoizedFunc(arg) {
    if (arg in cache) {
        return cache[arg];
    } else {
        cache[arg] = callback(arg);
        return cache[arg]
    }
  }
}
const memoizeSquare = memoize((num) => num*num);
memoizeSquare(10) //100
```