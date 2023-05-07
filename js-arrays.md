# Arrays in javascript

## Array destructuring
  const age = [65, 99, 13, 21]
  const [firstAge, secondAge] = age

  firstAge // 65
  secondAge // 99

### Skipping elements while destructuring arrays
skip elements while destructuring by using commas and a blank space:

  const age = [65, 99, 13, 21]
  const [firstAge, secondAge, , lastAge] = age

  firstAge // 65
  secondAge // 99
  lastAge // 21

### default values in array destructuring
we can assign a default value to an array element in the instance that the element isn't found in the array

  const age = [65, 99, 13]
  const [firstAge, secondAge, , lastAge = 123] = age

  firstAge // 65
  secondAge // 99
  lastAge // 123 since destructuring is looking for a 4th (non-existant) element in the array.

### rest operator while destructuring arrays

  const age = [65, 99, 13]
  const [firstAge, ...otherAges] = age

  firstAge // 65
  otherAges // [99, 13]



## array methods

### flat()
`Array.prototype.flat(depth)`

`depth` - (optional) the depth level specifying how deep a nested array structure should be flattened. Defaults to 1.

**NOTE:** when you don't know the depth level, you can use `Infinity` to recursively concatenate all elements of the sub-arrays into the new array.

`return value` - a new array

### some()
`Array.prototype.some()` - tests whether at least one element in the array passes the test implemented by the provided function. It returns true if, in the array, it finds an element for which the provided function returns true; otherwise it returns false. It doesn't modify the array.