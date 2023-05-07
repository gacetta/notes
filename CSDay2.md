<!-- ## Approach to Problem Solving

BRAINSTORMING SESSION

1. Define Success Conditions:

- what about the question/prompt determines success? Ex. should something specific be returned?

2. Define or Explore Key Phrases:

- what info is provided? input/output? data type? what info is available that will help get closer to success conditions?

3. Match actions to actionable key phrases:

- what can we do using code having these key phrases? Ex, if an array should we use iteration/looping?

4. Redefine Success Conditions

- based on provided info, is there any about success conditions that we should reconsider?
  REPEAT 2-4

5. Create Strategy from Actions

- take info you've gathered and come up with strategy to execute your code

6. THEN PSEUDO CODE

1. define input / output
1. interpret input / output as JS
1. play around, consider example inputs
1. describe approach using plain english
1. write pseudo-code
1. write some code -->

## OOP in JavaScript

`paradigm` - a way of organizing your code

benefits of OOP:

1. easy to add features and functionality
2. performant - efficient in terms of memory
3. easy for devs to reason about. provides a clear structure

`encapsulation` - storing / bundling together functions with their associate data.

multiple ways to create:

1. object literal
2. using dot notation to manually assign each property
3. `Object.create(null);`

## Prototype and New keyword

the `new` keyword:

```
const user1 = new userCreator('sam', 10)
```

1. creates a new object in local mem: `this: {}`
2. creates link: `this.__proto__: userCreator.prototype`
3. returns new object

`__proto__` always points to the `.prototype` version of an object

_Best Practice_ to capitalize any function that requires the `new` keyword

new keyword:
BENEFITS:

- faster to write
- common practice in professional code
  PROBLEMS:
- many developers have no idea how it works
- have to upper case the first letter of the function so we know it must be called with `new` to work properly

SLIDES Solution 3 = functional OOP
SLIDES Solution 4 = class `syntactic sugar`

`classes`
BENEFITS:

- emerging as the new standard for constructor functions
- similar to style of other languages
  PROBLEMS:
- even more devs don't know how it works under the hood

## approach

**memoize**
returns a function that when called, will check if it has already computed the result for the given argument and return that value instead if possible.

CLOSURE

_scope_ property is where closure variables are stored.
`rest parameter` - "zips" arguments into an array

- "unknown # of args"
- must be the last parameter
  `spread operator` - "unzips" arrays

DEEP CLONE
`shallow copy` / `deep copy`
`pass by reference`
`pass by value`

THROTTLE
`more closure`
`Date.now()`

## feedback
