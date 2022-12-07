# Arrays in javascript

## Array destructuring
  const age = [65, 99, 13, 21]
  const [firstAge, secondAge] = age

  firstAge // 65
  secondAge // 99

### Skipping elements while destructuring arrays
we can skip elements while destructuring by using commas and a blank space:
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
