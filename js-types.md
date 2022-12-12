# Types

---
## types of data
---
// Primitive(immutable) - memory represents a single value 
1. number
2. boolean
3. string     
4. undefined  // absence of definition
5. null       // absence of value  **NOTE:** typeof null === 'object'

// Non-primitive(mutable) - memory doesn't contain value directly.  memory contains a reference to mem loc.
6. symbol     // new in ES6 - useful for object properties
7. object     // obj, array, and functions are all objects

---
## object wrappers
---
Primitives have object wrappers.  

`true.toString()` // 'true'

When accessing methods on primitive types, JS uses object wrapper. The result of above code wit object wrapper that provides additional functionality:

`Boolean(true).toString()`  // 'true'

---
## type coercion
---
_KNOW ABOUT THIS BUT DON"T SPEND TIME LEARNING SPECIFICS - DON'T USE IN YOUR CODE_
`type coercion` is the language converting one data type to another data type.
All languages have type coercion.  JS has more than normal because of dynamic typing.

https://dorey.github.io/JavaScript-Equality-Table/

`==` results in very unpredictable behavior
`===` is much more predictable.  USE THIS
`if ()` behavior can be odd in some cases
`Object.is()` is a way of comparing that handles `NaN === Nan // true` and `-0 === +0 //false`

---
## statically typed vs dynamically typed language
---
STATIC
Pros:
- **less bugs and better error prevention**
- documentation of type
- helps while developing - autocompletion by IDE or text editor
- less bugs in production - they're all caught earlier on

Cons:
- **more flexible / write software faster**
- code is more complex / harder to read
- could be unneccessary if we write better tests
- slower development process

---
## strong vs weak typing
---
type coercion ("string" + number = "string17") is an example of weak typing 
if a program throws an error when mixing data types, that is an example of strong typing

---
## typescript
---
several ways to add static type checking to JS: `flow` (facebook), `typescript`(microsoft), `reasonML`, `elm`
- `typescript` is based on the JS language and has its own compiler
- `flow` static type checker relies on external compiler such as babel to remove type conflicts. Included in react.
- `reasonML` is an entirely different language than JS and has its own compiler
- `elm` is an entirely different language than JS and has its own compiler

Angular is built using typescript.  

Why use typescript: project grows larger and larger, you already have tests written, as team grows you want the code to be self documenting, and avoid bugs.  Also, have budget to train employees on TS.  Finally, be aware that development is going to slow slightly as we're writing more code.