# Object Oriented Programming (OOP)
---
## Constructor Functions
---
functions that use the `new` keyword are constructor functions.  This is where we can initialize the data for our new object.

`new` operator:
1. generates a new empty object for this new instance
2. gives us access to that empty object in the constructor function via the `this` value

**BEST PRACTICE NAMING CONVENTION:** - constructor functions that require the use of `new` keyword should be named using CapitalCase.

---
### THIS KEYWORD
In OOP, the `this` keyword gives us access to the object we're working within.  It allows us to define properties in an object.  For example:

        const Person = function (firstName) {
            this.firstName = firstName
        }
        const me = new Person('Michael);
        console.log(me) // Person { firstName: 'Michael'}

**NOTE:** remember that arrow functions do not bind `this`

---
## Prototypes
---
The `prototype` is an object that is associated with every function and object by default in JavaScript, where function's prototype property is accessible and modifiable and object's prototype property (aka attribute) is not visible.

---
### Prototypal Inheritance
---
`ES6` update introduced `prototypal inheritance` meaning that objects and methods can be shared, extended and copied.  This allows for easy inheritance of structure (data fields), behavior (functions / methods), and state (data values) and when used appropriately can save hours of coding.

**PROTOTYPAL INHERITANCE** - refers to the ability to access object properties from another object.  The JS `prototype` is used to add new properties and methods to an existing object constructor.  We essentially tell JS code to inherit properties from a prototype, and thus `prototypical inheritance` allows us to reuse the properties or methods from one JS object to another through a reference pointer function.

All JS `objects` inherit properties and methods from a prototype:
* `Date` objects inherit from `Date.prototype`
* `Array` objects inherit from `Array.prototype`
* `Player` objects inherit from `Player.prototype`

This is known as the `prototypal inheritance chain`

---
### Prototypal Inheritance Chain
---
The `Object.prototype` is on top of the prototype inheritance chain.  `Date` objects, `Array` objects, and `Player` objects all inherit from `Object.prototype`.

    Non-Prototypical                        Prototypical Inheritance

    ____________                            ___________________
    |  Animal   |   ---> A1                 | Animal prototype |   <--- A1       
    |___________|   ---> A2                 |__________________|   <--- A2
        |                                         ^
        |                                         |
        |                                         |
    ____V_______                            ______|__________
    |  DOG      |   ---> A1                 |  DOG prototype |   <--- D1       
    |___________|   ---> A2                 |________________|   <--- D2

Most everything in JavaScript is an object that has a prototype chain.  

A **primitive value** is a value that does not have properties.  It is a non-object.  There are 5 primitive values in JS:
1. string
2. number
3. boolean
4. null
5. undefined:

- Object: myObject --> Object.prototype --> null 
- Array: myArray --> Array.prototype --> Object.prototype --> null 
- Function: myFunc --> Function.prototype --> Object.prototype --> null
- String: myStr --> String.prototype --> Object.prototype --> null
- Number: myNum --> Number.prototype --> Object.prototype --> null
- Boolean: myBoo --> Boolean.prototype --> Object.prototype --> null

**NOTE:** strings, numbers and booleans are primitive values that have an __Object Wrapper__.  That is what gives it the functionality of methods and such.  This can be seen when using the `new String('testString')` constructor (something that JS will do for us automatically).

***Behind the scenes*** - When we try to access a method on a `string(primitive)`, it converts it into an object and then calls a method on that.

---
**GRADE SCHOOL EXAMPLE:**   
All squares are rectangles, but not all rectangles are squares. 

If we think about this in terms of a JS program, we could reword it: "`rectangle` is a prototype to the `square`.  The `square` inherits all the properties of the `rectangle` (i.e. four-sides and closed) while also adding a new feature (i.e. all sides are the same length)

**NOTE:** this example only works one direction.  `square` cannot be the `prototype` for the `rectangle` because not all properties of the `square` apply to the `rectangle`.  This is how prototypal inheritance works: specifying categories within a group from least specific to most.

_TIPS & TRICKS -_ in code, this concept of heirarchy and inheritance can sometimes be lost to syntax.  If this happens, **speak the relations** between objects and listen for distinctions.  When you hear "all ____ are, ***but not all ___ are***", that's where a new prototypical relationship should be added.

---
## Linking to Prototype
---
How is a `new` instance linked to the prototype?  With a `[[prototype]]` property.  This is a hidden property for internal use only.  We have access to the property using `__proto__` (referred to as `dunder proto`)
```
                            __________________
                            |PERSON CONSTRUCTOR|
                            |__________________|
                            _________|__________
                        ---->|PROTOTYPE PROPERTY|
    ________________  |     |__________________|
    |PERSON INSTANCE| |     |getBio            |
    |_______________| |     |setName           |
    | prop1: value1 | |     |__________________|
    | prop2: value 2| |
    |[[prototype]]---- 
    |_______________|

const me = new Person('Clancey', 'Turner', 54)
// me.[[prototype]] = Person.prototype

console.log(me.firstName)  //looks in the current Object instance for firstName property.  It finds it and prints it to console.

const bio = me.getBio();
console.log(bio) //JS looks in the current Object instance for getBio.  It isn't found so it looks to see if there is a [[prototype]] set up.  There is, so it goes up the prototype chain to search for getBio method which is found on the Object prototype.

console.log(me.testing) // JS looks to current Object instance for testing property.  It isn't found so it goes up the prototype chain and searches the Object prototype.  It isn't found there and goes further up the prototype chain and reaches null.  Search is over and we get `undefined`
```

---
## Methods
---
in OOP, Methods are defined on the prototype object, giving access to all instances of the object through prototypal inheritance.

        Person.prototype.methodName() = function () {
            return `${this.firstName} is ${this.age}`;
        }

---
## Use Class Syntax to Define a Constructor Function
---
**NOTE:** `class` syntax is just syntax, and not a full-fledged class-based implementation of an object-oriented paradigm, unlike in languages such as Java, Python, Ruby, etc.

In ES5 we usually define a `constructor` function and use the `new` keyword to instantiate an object:

    var SpaceShuttle = function(targetPlanet){
    this.targetPlanet = targetPlanet;
    }
    var zeus = new SpaceShuttle('Jupiter');

The `class` syntax simple replaces the `constructor` function creation:

    class SpaceShuttle {
    constructor(targetPlanet) {
        this.targetPlanet = targetPlanet;
    }
    }
    const zeus = new SpaceShuttle('Jupiter');

**NOTE:** the `class` keyword declares a new function, to which a constructor is added.  This constructor is invoked when `new` is called to create a new object.

**BEST PRACTICE -** UpperCamelCase should be used by convention for ES6 class names, as in `SpaceShuttle` used above



## Getters and Setters

we can access data stored in an object by directly accessing the object properties:

    const data = {
        location: 'Seattle'
    }

    console.log(data.location)  // 'Seattle'

However, we can create methods on an object that can customize the behavior (and provide behind the scenes functionality, such as trimming a string or just creating more privacy) by using `getters` and `setters`.  

### Getters

A method that is used to access and retrieve data from an object.  The syntax uses the `get` keyword:

    const data = {
        get location() {
            return this._location;
        }
    }

    console.log(data.location)


### Setters

A method that is used to set the value of an object property.  The syntax uses the `set` keyword:

    const data = {
        get location() {
            return this._location;
        },  // <------- a comma separates properties (and methods) in an object
        set location(value) {
            this._location = value.trim();
        }
    }

    data.location = 'Miami'
