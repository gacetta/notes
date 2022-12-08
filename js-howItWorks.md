# JAVASCRIPT - est. 1995

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
