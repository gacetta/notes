# Closure

Also known as: 
- closure
- "backpack"
- C.O.V.E. or _Closed Over Variable Environment_
- P.L.S.R.D or _Persistent Lexically Scoped Reference Data_

as soon as a function is created with a creator function, local memory is attached to the function definition with hidden property `[[scope]]`

**Currying** refers to the process of transforming a single function that takes a lot of arguments multiple functions that take a subset of those functions

For example:
Standard Version:
    
    function unCurried(x, y) {
      return x + y;
    }

Curried Version:

    function curried(x) {
      return function(y) {
        return x + y;
      }
    }

    const curried = x => y => x + y

Sample calls:

    curried(1)(2) // 3

    const funcForY = curried(1);
    console.log(funcForY(2)); // 3