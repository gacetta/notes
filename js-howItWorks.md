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