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
1. Initially - global execution context and global memory
2. each time a function is added to call stack, we open a new local execution context and local memory

`lexical environment` - each function is like a separate universe.  If we do lexical analysis - we're asking, where did we write the function?  In what universe?  In other words: `execution context tells you which lexical environment is currently running`.

In JS - our `lexical scope` (available data + variables where the function was defined) determines our available variables.  Not where the function is called (`dynamic scope`)

Creation of a new execution context consists of two phases:
1. Creation Phase
2. Execution Phase

Creation Phase
- Given access to the `global object` and `this`
- JS takes a pass over the code to allocate memory space for functions and variables.  (Hoisting)

Execution Phase
- JS executes our code line by line.

---
## Hoisting
---
During the creation phase of the execution context, JS allocates memory space for the functions and variables.
In the case of functions, the whole function body is stored
In the case of variables, they are declared and assigned a default value of `undefined`
This phenomena is called `hoisting`