# Object Oriented Programming

`new` operator:
1. generates a new empty object for this new instance
2. gives us access to that empty object in the constructor function via the `this` value

**BEST PRACTICE NAMING CONVENTION:** - constructor functions that require the use of `new` keyword should be named using CapitalCase.

How is a `new` instance linked to the prototype?  With a `[[prototype]]` property.  This is a hidden property for internal use only.  We have access to the property using `__proto__`.

        const me = new Person('Clancey', 'Turner', 54)
        // me.[[prototype]] = Person.prototype

        console.log(me.firstName)  //looks in the current Object instance for firstName property.  It finds it and prints it to console.

        const bio = me.getBio();
        console.log(bio) //JS looks in the current Object instance for getBio.  It isn't found so it looks to see if there is a [[prototype]] set up.  There is, so it goes up the prototype chain to search for getBio method which is found on the Object prototype.

        console.log(me.testing) // JS looks to current Object instance for testing property.  It isn't found so it goes up the prototype chain and searches the Object prototype.  It isn't found there and goes further up the prototype chain and reaches null.  Search is over and we use `undefined`



A **primitive value** is a value that does not have properties.  It is a non-object.  There are 5 primitive values in JS:
1. string
2. number
3. boolean
4. null
5. undefined

Prototypal Inheritance Chains:
// Object: myObject --> Object.prototype --> null
// Array: myArray --> Array.prototype --> Object.prototype --> null
// Function: myFunc --> Function.prototype --> Object.prototype --> null
// String: myStr --> String.prototype --> Object.prototype --> null
// Number: myNum --> Number.prototype --> Object.prototype --> null
// Boolean: myBoo --> Boolean.prototype --> Object.prototype --> null

strings, numbers and booleans have an `Object wrapper`.  