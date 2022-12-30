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