# JAVASCRIPT - est. 1995

---
## Javascript Engine
---

V8 Javascript Engine - 'translates JS to bytecode for computer'
- parser (breaks js into tokens)
- AST (abstract syntax tree based on tokens)
- interpreter---------------------  (translate and read code line by line on the fly)
- bytecode                        | (not as low level as machine code, but readable)
- RUN BY COMPUTER                 |
                                  | *MEANWHILE*
(optimizing for hot code)---------
- profiler (or monitor) - makes notes about how to optimize code (if something appears often, e.g.)
- compiler  (runs ahead of time to compile optimized code - write a new program in a new language)
- optimized code (replaces the bytecode in places)
- RUN BY COMPUTER (FASTER)

JIT COMPILER - just in time compiler - combo of interpreter and compiler

**HOW CAN WE HELP THE COMPILER WITH THIS KNOWLEDGE**
Things to avoid or be careful of that result in de-optimized code:
- eval()
- arguments
- for in (object.keys and iterate over that can be better)
- with
- delete

Reasons:
Hidden classes - assign variables in objs in the the same order
Inline caching

We should write code that is predictable for humans, AND machines.

---
## Garbage Collection
---
memory is freed up automatically by JS.
Mark and Sweep.  Mark what we need, sweep (delete) what we don't (unmarked)

---
## Memory Leaks
---
memory leaks are pieces of memory that the application used in the past but is no longer needed but has not yet been returned back to us to the pool of free memory (garbage collected)

Three common leaks:
1. Global Variables
2. Event Listeners - created but rarely removed
3. setInterval - references object

---
## JS Runtime / Event loop
---
Browser provides Web API.  Does a variety of things - send http requests, fetch(), DOM listening, setTimeout(), caching, etc.

we can access the web API with `window` in dev tools

Web APIs are asynchronous

**EVENT LOOP**

1. JS runs synchronously adding functions to call stack as needed.
2. When it encounters a function that can be handled by the web API, it passes it off
3. JS continues running its code while web API does its business
4. When web API is complete, the result is added to the callback queue to be handled by JS
**NOTE** - Promises are added to the microtask queue
5. When the call stack is empty, if there is a task in microtask queue, it is added to call stack.  If  microtask is empty, then check callback queue.  Any task there is added to call stack.  
**NOTE** - microtask and callback queues are first-in-first-out structures.

---
## Node.js - est 2009
---
A JS runtime that allows us to run JS outside of the browser.

---
## execution context
---
1. initially - a global execution context is created with global memory
2. each time a function is added to call stack, a new local execution context is created with local memory

Creation of a new execution context consists of two phases:
1. Creation Phase
2. Execution Phase

Global Execution Context - Creation Phase
- Given access to the `global object` and `this`
- JS takes a pass over the code to allocate memory space for functions and variables.  (Hoisting)

Execution Phase
- JS executes our code line by line.

`lexical environment` - each function is like a separate universe.  If we do lexical analysis - we're asking, where did we write the function?  In what universe?  In other words: `execution context tells you which lexical environment is currently running`.

In JS - our `lexical scope` (available data + variables where the function was defined) determines our available variables.  Not where the function is called (`dynamic scope`)

---
## Hoisting
---
During the creation phase of the execution context, JS allocates memory space for the functions and variables.
In the case of functions, the whole function body is stored
In the case of variables, they are declared and assigned a default value of `undefined`
This phenomena is called `hoisting`

---
## Function Invocation
---
When creating a function execution context (instead of global execution context)
- We're given access to `this` and `arguments`

`arguments` is dangerous to use.  It looks like an array, but it's not.  
Ways to accomplish the same thing with ES6 and avoid `arguments`:
- create an actual array using `Array.from(arguments)`
- create an actual array using `rest parameters` to create our own quasi `argsArr`.

---
## scope chain
---
a `scope chain` links an execution context to its parent execution context.  We (and the compiler) and determine what the `scope chain` is due to `Static scope` 

This is the way a function on the top of the call stack has access to a global variable defined in the global lexical environment (CodeSmith says global memory)

TERMS: 
`global lexical environment` - AKA global execution context
`function lexical environment` - AKA local execution context

---
## [[scope]]
---
Lexical Environment === [[scopes]]

The way the scope is stored in JS which We can see in console log.  If JS searches for a variable and can't find it in the current scope, it references [[scopes]] to move up the scope chain and check the next location.

---
## function scope vs block scope
---
`var` has function scoping, meaning it's accessible from outside a block unless the block is a function block:

    if (5 < 4) {
      var secret = '54321';
    }

    console.log(secret) // '54321'

`let` and `const`, like variables from most other languages, have block scoping, meaning variables are only accessible from within the block they're declared.  (inside the block meaning inside `{}`)

    if (5 < 4) {
      let secret = '54321';
    }

    console.log(secret) // reference error: secret is not defined

---
## Global Variables
---
`Variable Collision` - when global variables are reassigned 

IIFE - Immediately Invoked Function Expression - prevents global variable leak

(function() {
  var a = 89
})();

console.log(a) // reference error

Trick for preventing variable leak - 
Create a quasi "global environment"

function a() {
  return 5;
}
a() // 5

function a() {
  return 5;
}
function a() {
  return 'hahaha'
}
a() // 'hahaha'

use `IIFE`:

var script = (function () {
  return 5;
})();
function a() {
  return 'hahaha'
}
a() // 'hahaha'

var script1 = (function () {
  function a() {
    return 5
  }
  return {
    a: a
  }
})()
function a() {
  return 'hahaha'
}
script1.a() // 5

script1 becomes the global namespace.  But we can have one name for an object that contains many properties we might want to use.

---
## this
---
`this` is the object that the function is a property of

often that means `this` is whatever is to the left of the `.` in a method call

`this` is dynamically scoped.  It doesn't matter where it was written, it matters how it was called.

---
## this methods
---
`call()` method calls the function with the given `this` value and individually provided arguments (comma separated list). 
In a way, automatically invoked under the hood.

  function a() {
    console.log('hi')
  }

  a() //'hi'
  a.call() //'hi'  (everything is an object - this is what's actually happening under the hood.)

We can invoke `call()` with additional arguments. `call(thisArg, arg1, arg2, ...argN)`
Using the arguments allows us to pass `this` to the call.

  const wizard = {
    health: 50,
    heal() {
      return this.health = 100;
    }
  }

  const archer = {
    health: 30
  }

  wizard.heal() // wizard.health = 100;
  wizard.heal.call() // wizard.health = 100;
  wizard.heal.call(archer) // archer.health = 100;

Now lets say heal() takes arguments.  We can pass those into the `call()` function as well (after the `thisArg`):

  const wizard = {
    health: 50,
    heal(num1, num2) {
      return this.health += num1 + num2;
    }
  }

  const archer = {
    health: 30
  }

  wizard.heal.call(archer, 30, 70) //archer.health = 130




`apply()` method calls the specified function with a given `this` value and `arguments` provided as an array.
the difference between `call()` and `apply()` is how arguments are provided.
`call()` - arguments as a comma-separated list
`apply()` - arguments as array

  const wizard = {
      health: 50,
      heal(num1, num2) {
        return this.health += num1 + num2;
      }
    }

  const archer = {
    health: 30
  }

  wizard.heal.apply(archer, [30, 70]) //archer.health = 130

`bind()` method creates and returns a new function that, when called, has its `this` keyword set to the provided value.
Arguments may also be provided as a comma-separated list.

Bind is useful for us to call functions later on with a certain context (or certain `this` keyword)

`bind(thisArg)`
`bind(thisArg, arg1, arg2, /* …, */ argN)`

  const wizard = {
      health: 50,
      heal(num1, num2) {
        return this.health += num1 + num2;
      }
    }

  const archer = {
    health: 30
  }

  wizard.heal.bind(archer, 30, 70) //archer.health = 30
  const healArcher = wizard.heal.bind(archer, 30, 70) // archer.health = 30
  healArcher() // archer.health = 130

---
## function currying and bind()
---
we can use bind to split our function into multiple parts

function multiply(a,b) {
  return a*b;
}

function multiplyByTwo = multiply.bind(this, 2);
function multiplyByTen = multiply.bind(this, 10);
multiplyByTwo(4) //8
multiplyByTen(4) //40

---
## Context vs Scope
---
SCOPE: function based
- "what is the variable access of a function when it is invoked"
- "what is in the variable environment"

refers to the visibility of variables

CONTEXT: object based
- "what's the value of the `this` keyword which is a reference to the object that owns that current executing code"

most often determined by HOW a function is invoked with the value of `this` keyword