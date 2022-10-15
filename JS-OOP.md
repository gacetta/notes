# OBJECT ORIENTED PROGRAMMING

## USE CLASS SYNTAX TO DEFINE A CONSTRUCTOR FUNCTION

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

### **PROTOTYPAL INHERITANCE**
`ES6` update introduced `prototypal inheritance` meaning that objects and methods can be shared, extended and copied.  This allows for easy inheritance of structure (data fields), behavior (functions / methods), and state (data values) and when used appropriately can save hours of coding.

**PROTOTYPAL INHERITANCE** - refers to the ability to access object properties from another object.  The JS `prototype` is used to add new properties and methods to an existing object constructor.  We essentially tell JS code to inherit properties from a prototype, and thus `prototypical inheritance` allows us to reuse the properties or methods from one JS object to another through a reference pointer function.

All JS `objects` inherit properties and moethods from a prototype:
* `Date` objects inherit from `Date.prototype`
* `Array` objects inherit from `Array.prototype`
* `Player` objects inherit from `Player.prototype`

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

#### GRADE SCHOOL EXAMPLE:
all squares are rectangles, but not all rectangles are squares. 

If we think about this in terms of a JS program, we could reword it: "`rectangle` is a prototype to the `square`.  The `square` inherits all the properties of the `rectangle` (i.e. four-sides and closed) while also adding a new feature (i.e. all sides are the same length)

**NOTE:** this example only works one direction.  `square` cannot be the `prototype` for the `rectangle` because not all properties of the `square` apply to the `rectangle`.  This is how prototypal inheritance works: specifying categories within a group from least specific to most.

_TIPS & TRICKS - _ in code, this concept of heirarchy and inheritance can sometimes be lost to syntax.  If this happens, **speak the relations** between objects and listen for distinctions.  When you hear "all ____ are, ***but not all ___ are***", that's where a new prototypical relationship should be added.

                         __________________
                        |PERSON CONSTRUCTOR|
                        |__________________|
                        _________|__________
                  |---->|PROTOTYPE PROPERTY|
________________  |     |__________________|
|PERSON INSTANCE| |     |getBio            |
|_______________| |     |setName           |
| prop1: value1 | |     |__________________|
| prop2: value 2| |
|[[prototype]]----|
|_______________|

The following code:

```
        const me = new Person('Clancey', 'Turner')
        // me.[[prototype]] = Person.prototype
```

String, Boolean, Numbers - primitive values that have an __Object Wrapper__.  That is what gives it the functionality of methods and such...

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
