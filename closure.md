# Closure

NAMES: 
- closure
- "backpack"
- C.O.V.E. or _Closed Over Variable Environment_
- P.L.S.R.D or _Persistent Lexically Scoped Referece Data_

as soon as a function is created with a creator function, local memory is attached to the function definition with hidden property `[[scope]]`

**Currying** refers to the process of transforming a single function that takes a lot of arguments multiple functions that take a subset of those functions

For example:
Standard Version:

    const add = (a, b) => a + b

Currried Version:

    const createAdder = (a) => {
      return (b) => {
        return a + b;
      }
    }

    const add10 = createAdder(10);