# Map

The `Map` object holds key-value pairs and remembers the original insertion order of the keys. Any value (both objects and primitive values) may be used as either a key or a value.

---
## Object vs Map
---
1. Key types - Map - any value (including functions, objects or any primitive).  Object must be string or symbol.
2. Key Order - Map object iterates entries, keys and values in the order of entry insertion. Object - cannot rely on that.
3. Size - number of items in Map can be retrieved from its `size` property.
4. Map does not contain any keys by default.  An Object has a prototype so it contains default keys.
## constructing

`Map()` creates new Map object
`cosnt contacts = new Map()`

## set 
`Map.prototype.set(key, value)` adds or updates an entry in the Map object with specified key and value.

## get
`Map.prototype.get(key)` returns the specified element from the Map object.  If key can't be found, returns `undefined`
    const myMap = new Map();
    myMap.set('bar', 'foo');

    console.log(myMap.get('bar')); // Returns "foo"
    console.log(myMap.get('baz')); // Returns undefined

## iterating
### For Of
Maps can be iterated using `for...of` loops:
    const myMap = new Map();
    myMap.set(0, 'zero');
    myMap.set(1, 'one');

    for (const [key, value] of myMap) {
      console.log(`${key} = ${value}`);
    }
    // 0 = zero
    // 1 = one

    for (const key of myMap.keys()) {
      console.log(key);
    }
    // 0
    // 1

    for (const value of myMap.values()) {
      console.log(value);
    }
    // zero
    // one
### forEach
    myMap.forEach((value, key) => {
      console.log(`${key} = ${value}`);
    });
    // 0 = zero
    // 1 = one
---
## methods
---
### clear
`Map.prototype.clear()` removes all key-value pairs from the `Map` object

###
`Map.prototype.delete(key)` removes the specified element from a `Map` object by key.

### has
`Map.prototype.has(key)` returns a boolean indicating whether an element with the specified key exists or not.

### keys
`Map.prototype.keys()` returns a new Iterator object that contains keys for each element in `Map` object in insertion order

### values
`Map.prototype.values()` returns a new Iterator object that contains the value for each element in the `Map` object in insertion order.

### entries
`Map.prototype.entries()` Returns a new Iterator object that contains a two-member array of [key, value] for each element in the Map object in insertion order.

