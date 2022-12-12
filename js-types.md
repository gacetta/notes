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