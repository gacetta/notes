# Types

---
## types of data
---
// Primitive - memory represents a single value
1. number
2. boolean
3. string     
4. undefined  // absence of definition
5. null       // absence of value  **NOTE:** typeof null === 'object'

// Non-primitive - memory doesn't contain value directly.  memory contains a reference to mem loc.
6. symbol     // new in ES6 - useful for object properties
7. object     // obj, array, and functions are all objects

---
## object wrappers
---
Primitives have object wrappers.  

`true.toString()` // 'true'

When accessing methods on primitive types, JS uses object wrapper. The result of above code wit object wrapper that provides additional functionality:

`Boolean(true).toString()`  // 'true'