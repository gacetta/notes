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

**I expect one argument at a time**

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

**I expect all the remaining arguments in the second call**

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

-----------------------------
## compose & pipe
-----------------------------
### compose
composing or composition is the process of creating a sort of assembly line with our functions and data.  It requires that all of our functions are pure. (it is a sort of currying)

data --> function --> data --> function --> etc.

`compose()` is not a function included in JS.  However, `compose()` is included in many libraries such as `Ramda`, a library designed specifially for functional programming.  It allows us to run several functions on a piece of data in order from right to left.  The last argument may have any arity; the remaining arguments must be unary.

`const compose = (f,g) => (data) => f(g(data))`

### pipe
`pipe()` is similar to `compose()` but the order the functions are performed in order from left to right. The first argument may have any arity; the remaining arguments must be unary.

`const pipe = (f,g) => (data) => g(f(data))`

These all evaluate the same:

    func1(func2(func3(data)));
    compose(func1, func2, func3)(data);
    pipe(func3, func2, func1)(data)

-----------------------------
## arity
-----------------------------
`arity` refers to the number of arguments a function takes.
`nullary` function is a function that has no inputs
`unary` function is a function with one parameter
`binary` function accepts two parameters
`trinary` functions have an arity of 3, i.e. they accept three inputs.
`n-ary` functions have `n` inputs

**NOTE:** the fewer number of parameters in a function, the easier it is to use (and understand)
_BEST PRACTICE_ - aim for 0-2 args.

-----------------------------
## Composition vs inheritence
-----------------------------
`inheritence` is a super class that is extended to smaller pieces that add or overwrite things.
focus on "what it is"
`composition` is using smaller pieces to make something bigger
focus on "what it has" or "what it does"

PROBLEMS FROM INHERITENCE:
- `tight coupling` - children (sub-classes) are dependent on parent (super class).  
- `fragile base class` problem - a base class (superclass) is considered "fragile" because a seemingly safe modification, when inherited by the derived classes, may break things.
- `heirarchy` problem - what happens if there's a change and a child becomes higher up the inheritence chain than its parent?  Or you have a very simple subclass that only needs one method from the superclass, but due to heirarchy inheritence, it gets that method in addition to ALL the additional functionality of super class that it doesn't want / shouldn't have.

RESULT: A compositional approach adds more flexibility for future changes

--------------------------------
## OOP vs Functional Programming
--------------------------------
FUNCTIONAL
- many operations on fixed data
- stateless
- pure functions
- declarative

OOP
- few operations on common data
- stateful
- side effects
- imperitive