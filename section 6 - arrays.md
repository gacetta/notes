### Arrays

Arrays are defined using square brackets `const newArray = []`  
_there is no requirement for each item in an array be the same type, though that is helpful_

* arrays have methods and properties just like strings.
    * they are called in a similar fashion with dot notation
    * arrays are very method heavy
    * **documentation available** google search: MDN array

* accessing arrays
    * to access an array, we use bracket notation `newArray[index]` where newArray is our array and index is an integer that represents which item we want to access.  Items are stored (or indexed)in order with the first item being item 0.  So `newArray[0]` would access the first item in the array
    * if we call an index that doesn't exists, `undefined` will be returned
    * accessing last item in an array = `array[array.length - 1]`
    
* modifying an array from the end
    * **push** adds an element to the end of an array `array.push(newItem)`
    * **pop** removes an element from the end of an array `array.pop()` - no arguments needed  
    pop returns the value of the removed element

* modifying an array from the start
    * **shift** `array.shift()` removes the very first item from an array.  Works just like _pop_ but from the first element
    * **unshift** `array.unshift(newItem)` adds an element to the begining of the array.  Functions like _push_ but from the front of the array

* modifying an array from the middle
    * **splice** `array.splice(start, deleteCount, item1, item 2)` 
        * _start_ is the index number of where you're trying to take action  
        * _deleteCount_ is the number of elements to remove
        * _item1_ is the first item to add
        * _item2_ is second item to add, etc.
    * splice can be used to remove or add items (or both) from a specific point of an array  
    if you want to replace just one item, bracket notation can be used: `array[index] = newItem`

### looping in arrays

* **FOR EACH** is a method of looping where an action is perform FOR EACH of the items in an array  
`array.forEach()` is the implentation.

* This is the first instance where we've seen a function be passed as an argument.  T
his is known as a **callback function** - a function that is passed to another function.  

* _for each loops are good when accessing all elements of an array in order_.  They cannot return (and break) a loop.

* **FOR LOOP**  

    * `for (initializer; condition; final expression) {}` takes three arguments

        * _initializer_ - is where we set up the initial count
        * _condition_ - determines how long loop should run
        * _final expression_ - where the count is modified  
        ***SHORTHAND*** `count = count + 1` is equiavalent to `count++`

    * _for loops are good when accessing elements in an array out of order, or when accessing only part of the array_

* **FOR IN LOOP**

* **ENUMERABLE PROPERTIES** - an object is an unordered list of key-value pairs.  These object properties have several internal attributes including `value`, `writable`, `enumerable`, and `configurable`.  The `enumerable` attribute determines whether or a not a property is accessible when the object's properties are enumerated using the `for..in` loop or `Object.keys()` method.  By default all properties created via a simple assignment or via a property initializer are enumerable.

* **WHILE LOOP**

* **CONTROL FLOW**



### INDEX OF

`indexOf()` is a method that searches an array for a certain argument.  When the argument is found, it returns the index value of that element.  If no elements match the argument, a value of -1 is returned.

### Arrays of objects

The code looks funny at first:
```
const notes = [{

}, {

}, {
    
}]
```

* two empty objects are not considered equal.  So `{} === {}` would return false.  Two objects are equal if they are referencing the exact same object.  It does not matter if two different objects have identical properties with identical property values.
    * so indexOf() will not work with objects
    * instead use `findIndex()`  If it finds what you're looking for, it returns true.  Otherwise, it returns false.
    * `findIndex()` searches for the first match it finds.  When it finds that, it stops running the function.  It will return the index number if finds a match, or a -1 if no match is found.
    * `find()` is similar to `findIndex()` except it will return the item match rather than the index value.  However, if not match is found, `undefined` will be returned.

#### Filtering

**Filtering** is the process of creating a new array that includes only some of the elements from the parent array.  `array.filter()` returns a new array with any elements that have be stored.  It will store an item when a `true` value is returned to it.  It will always return an array, it's just a question of whether or not there are items in that array

**method chaining** is the process of chaining methods on to a string of methods.  

```
const isTitleMatch = note.title.toLowerCase().includes
```
what comes back from `note` is an object  
what comes back from `title` is a string which means we can call a string method
what comes back from the string method `toLowerCase()` is a string which means we can call another string method, the `includes()` method.  

***Passed by reference***

#### Sorting Arrays

* Sort Array Method  

    * with strings `array.sort()` will sort alphabetically  
    * `array.Sort()` takes a `compareFunction(a, b)` where `a` and `b` are two items from the array to be compared.  
        * if the `compareFunction()` returns a -1, then `a` should be sorted before `b`
        * if the `compareFunction()` returns a 1, then `b` should be sorted before `a`
        * if the `compareFunction()` returns a 0, then keep the original order of `a` and `b`
