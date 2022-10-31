**JavaScript:**  
The Language is:
- High-level
- Interpreted
- Dynamically Typed
- Multi-Paradigm
    * Object-Oriented
    * Functional
- Memory-managed
- Garbage Collected

The execution is:
- Single-threaded
- Synchronous
- Blocking

# Technical Communication 

"Declaring the constant with the label sumOfAges and assigning it to the evaluated result of invoking the function addAges passing in the arguments myAge and yourAge."

"pair our arguments with our parameters"

"save a function definition to the label ____"

**Functions and return values**
- a return statement tells the interpreter that the invocation of the current function is complete

**Side effect** - any application state change that is or remains observable outside a function invocation

**Interpreter**  
Interpreter runs through our code in two "passes":

The Allocation or Creation Phase
* Variable and Function declarations are stored in memory, "hoisted" to the top of their scopes
* Variable declarations are stored with the label only
* function declarations are stored with both the label and its definition.

The assignment or execution phase:
* This is the part we diagram.
* values are assigned
* expressions are evaluated

**Hoisting**
Allocation Phase:
* variable thing is declared in global memory.  Its current value is undefined.
* Function declaration sayHello is stored in global memory.
* Variable otherThing is declared in global memory.  its current value is undefined.

Assignment Phase:
* The string "hello" is assigned to thing in global memory.
* The string 'bye bye' is assigned to otherThing in global memory.

Many ways to write functions: 
*Function declarations* - hoisted
function sayHello() {
    console.log('hello');
}    
*Function expression* - not hoisted
const sayHello = function() {
    console.log('hello');
}

in the allocation phase, const thing is declared in global memory, BUT, its current value is inaccessible and uninitialized

hoisting: it’s when the interpreter allocates memory for a variable and function declaration prior to the execution of code.

VARIABLES AND THEIR DECLARATIONS **REVISIT SLIDE**
---
Variables declared with `var`
* lexical (function-level) scope
* Hoisted - access before assignment returns undefined
* Can be reassigned

Variables declared with `let`
* Block scope
* hoisted - access before assignment throws ReferenceError
* Can be reassigned

Variables declared with `const`
* Block scope
* hoisted - access before assignment throws ReferenceError
* Cannot be reassigned

#### POD
edge cases should always be at the top of your code - saves time for your program (like throwing an error)

#### Objects
object is a key-value pair data type  
Keys MUST be unique and are stored as strings.
**Object literal** is named such cause it's defined using this literal syntax
    const user = {

    }:

Goal of OOP is to keep data and functionality as close together as possibile

##### Accessing Objects:
**Dot notation** - used when you're retrieving or adding a specific key name
**Bracket notation** - used when you need to use a variable or non-string type to represent the key name

when an object has a key that has a value of function(), it's referred to as an method.

`Object.create()`
`Object.create(null)` creates an empty object

`Object.create(userFunctionStore)` points to `userFunctionStore` in the global memory

`Object.create()` adds a hidden property `_ _ proto _ _: userFunctionStore` (no spaces in `__proto__`) (double underscore proto or... dunder proto)

`__proto__: null` is a possibility if it points to no function

#### Inheritance and Prototypes
* Objects all inherit properties and methods from a parent object ***REVIEW SLIDE***

Arrow functions handle `this` keyword differently.  Arrow functions do not bind their own `this`, instead, they inherit the one from the parent scope, which is called `lexical scoping`.

`Number()` - constructor function
`String()` - similar to the above

### NEW KEYWORD & CLASSES
`new` keyword:
* automatically creates an object for us
* automatically creates the __proto__ link
* automatically returns that object out

`prototype`

`const user1 = new userCreator('Rajeeb', 5);

We're declaring the constant with the label user1 and we're assigning it the evaluated result of new userCreator and passing in the arguments 'Rajeeb" and 5

functions named with the first letter capitalized signals to use with `new` keyword.  (and are named using PascalCase)

### spread syntax
three dots `...` allow you to use a single variable name to represent more items (e.g. array elements or object).
"spread out the elements into one array"

**REST PARAMETERS**
using the `...` as parameters "The rest parameters syntax allow us to represent an indefinite number of arguments as an array"


## Callbacks and Higher Order Functions
### Object Oriented Programming - keeping data and functionality closely together

### Functional Programming
**Side effects** are when an operation, function or expression modies some state variable value outside its local environment
**Pure Function** no side effects - never reaches outside of its execution context to affect something else


**copied by value vs copied by reference**
`copied by value` - primitive datatypes.  the variable stores in memory the actual value specified
`copied by reference` - for non-primitive datatypes.  The variable stores in memory a reference pointer to the location where the values are stored.

**Errors**
`if (typeof num !== 'number') throw new TypeError('datatype needs to be a number');`

### Recusrion
**Base Case** is required.  It returns a value without making any more recursive calls
each recursive calls must bring the program closer to reaching the base case.

WHEN To Recurse?
sorting
- mergesort, quicksort

binary search tree traversals
- calc height, find a value, add a value, etc.

graph traversals
- depth frist search

combinations and permutations

non-recursive functions tend to describe how to get to a solution (imperative)
recursive solutions describe what the solution is (declarative)

thus, using recursive functions often forces you to write declarative code instead of imperative code.

**ALL RECURSIVE FUNCTIONS MUST APPROACH A NON-RECURSIVE BASE CASE**

## Big O Notation
* how we communicate about time complexity
* Big O is a mathematical notation that describes _the rate at which the number of computational steps grows in relation to the input size_
* it refers to the max number of steps the algorithm **could** take under the _worst-case scenario_

Common time complexities (from fastest to slowest)
1. Constant   `O(1)`   "My algorithm has O(1) (constant) time complexity)
* regardless of the size of the input, my algorithm will always take the same number of steps to complete
2. Linear   `O(n)`  "My algorithm has O(n) (linear) time complexity"
* As the input size grows, the maximum number of steps my algorithm might take to complete will grow at the same rate
3. Quadratic `O(n^2)`
* as the input size grows

### Closure
The 'backpack'
Closed over variable environment
persistent lexical scope referenced data (PLSRD)
`[[scope]]` is the backpack

## Spread Operator

```
return (...callbackArgs) =>
    if (!hasBeenRun) {
        firstReturnedValue = callback(...callbackArgs):
        hasBeenRun = true;
    }
    return firstReturnedValue;
}
```

callbackArgs stored in memory.  callbackArgs = []

When searching for a variable
"First look in it's current memory.
If it doesn't find it, it's then going to check up the scope chain under [[scope]] property.
If it doesn't find it there, then it would check global memory"

PURE RECURSION?
TREE RECURSION
TAIL CALL RECURSION
