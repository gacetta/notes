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