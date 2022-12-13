# Set

A `Set` object lets you store unique values of any type, whether primitive values or object references

## Description

`Set` objects are collections of values.  A value in the `Set` **may only occur once**.  Thus each value is unique in the `Set`'s collection.  

## Methods

### Constructor
`new Set()` is used to create a new `Set` object which is empty.

It has an optional `iterable` parameter.  If passed an `iterable object`, all it's elements will be added to the new `Set`

const mySet = new Set();

### Add
`Set.prototype.add(value)` inserts a new element with a specified value in to a Set object, if there isn't an element with the same value already in the Set.

mySet.add(5);

### Delete  
`Set.prototype.delete(value)` removes a specified value from a Set object, if it is in the set.

### Clear
`Set.prototype.clear()` removes all elements from a Set object.

### Has
`Set.prototype.has()` returns a boolean indicating whether an element with the specified value exists in a Set object or not.

### Values
`Set.prototype.values()` returns a new Iterator object that contains the values for each element in the Set object in insertion order.

### Keys
`Set.prototype.keys()` an alias for `values()` method

### Entries
`Set.prototype.entries()` returns a new Iterator object that contains an array of `[value, value]` for each element in the Set object, in insertion order. For `Set` objects there is no key like in `Map` objects. However, to keep the API similar to the `Map` object, each entry has the same value for its key and value here, so that an array `[value, value]` is returned.

### Size
`Set.prototype.size()` returns the number of (unique) elements in a Set object.