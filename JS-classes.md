# Class Syntax

Class syntax was introduced to JS in ES6.  It is syntax known as syntactical sugar.  It has the same functionality as other syntax, it just makes writing it a bit nicer.

**NOTE:** `class` syntax is just syntax, and not a full-fledged class-based implementation of an object-oriented paradigm, unlike in languages such as Java, Python, Ruby, etc.

---
## Declaring the Class
---
    class ClassName {

    }

In ES5 we usually define a `constructor` function and use the `new` keyword to instantiate an object:

    var SpaceShuttle = function(targetPlanet) {
      this.targetPlanet = targetPlanet;
    }
    var zeus = new SpaceShuttle('Jupiter');

The `class` syntax simply replaces the `constructor` function creation:

    class SpaceShuttle {
      constructor(targetPlanet) {
          this.targetPlanet = targetPlanet;
      }
    }
    const zeus = new SpaceShuttle('Jupiter');

**NOTE:** the `class` keyword declares a new function, to which a constructor is added.  This constructor is invoked when `new` is called to create a new object.

**BEST PRACTICE -** UpperCamelCase should be used by convention for ES6 class names, as in `SpaceShuttle` used above

---
### Constructor

    class ClassName {
      constructor(arg1, arg2, arg3) {
        this.arg1 = codeGoesHere
        this.arg2 = codeGoesHere
        this.arg3 = codeGoesHere
      }
    }

**NOTE:** this looks very similar to the shorthand syntax for creating a method in an object:

    {
      myMethod() {    //shorthand for myMethod: function() {} (won't work for classes)

      }
    }
---
#### Methods with Constructors
---
  class ClassName {
    constructor(arg1, arg2, arg3) {
      this.arg1 = codeGoesHere
      this.arg2 = codeGoesHere
      this.arg3 = codeGoesHere
    }  // <------ NOTE: no comma, semi colon, etc. here unlike an object
    newMethod() {

    }
  }

---
## Getters and Setters
---
we can access data stored in an object by directly accessing the object properties:

    const data = {
        location: 'Seattle'
    }

    console.log(data.location)  // 'Seattle'

However, we can create methods on an object that can customize the behavior (and provide behind the scenes functionality, such as trimming a string or just creating more privacy) by using `getters` and `setters`.  

---
### Getters

A method that is used to access and retrieve data from an object.  The syntax uses the `get` keyword:

    const data = {
        get location() {
            return this._location;
        }
    }

    console.log(data.location)

---
### Setters

A method that is used to set the value of an object property.  The syntax uses the `set` keyword:

    const data = {
        get location() {
            return this._location;
        },  // <------- a comma separates properties (and methods) in an object
        set location(value) {
            this._location = value.trim(); //setting ._location as the spot for the data to be stored
        }
    }

    data.location = 'Miami'

---
## Sub-Classes
---
a `sub-class` will inherit properties of it's parent class.  If you have a class of person, sub-class of employee would make sense.  It could inherit properties from person, since it is a type of person, and could have unique properties that only employees have, such as job-title, say.

---
### Extends

the keyword `extends` is used to connect a sub-class to a parent class and inherit its properties:

    class ClassName {
      constructor(arg1, arg2, arg3) {
        this.arg1 = codeGoesHere
        this.arg2 = codeGoesHere
        this.arg3 = codeGoesHere
      }
    }

    class SubClassName extends ClassName {

    }

In the above case, SubClassName has the exact same properties as ClassName.

---
### Super Constructor

to declare a constructor function for a sub class, the subclass must call the constructor function of the parent class.  This is known as the super constructor:

    class ClassName {
      constructor(arg1, arg2, arg3) {
        this.arg1 = codeGoesHere
        this.arg2 = codeGoesHere
        this.arg3 = codeGoesHere
      }
    }

    class SubClassName extends ClassName {
      constructor(arg1, arg2, arg4, arg3) {
        super(arg1, arg2, arg3);    // this is a call to the ClassName constructor
        this.arg4 = arg4;           // remaining SubClassName constructor code here
      }
    }

---
### Overwriting Properties and Methods

a subclass will inherit properties and methods from its parent class if they aren't re-declared in the subclass.  These properties and methods can be overwritten to behave differently for different subclasses.  For example, if you have a person class and an employee class, you might have a method `getBio()` that prints information about that person (or employee).  `getBio()` for a person might be casual and talk about your likes and hobbies, where as `getBio()` for an employee might want to be more formal and mention your job title and years at the company.  This behavior can be redeclared in the subclass:

class ClassName {
      constructor(arg1, arg2, arg3) {
        this.arg1 = codeGoesHere
        this.arg2 = codeGoesHere
        this.arg3 = codeGoesHere
      }
      classMethod() {         // this method will run for the Class
        codeGoesHere
      }
    }

    class SubClassName extends ClassName {
      constructor(arg1, arg2, arg4, arg3) {
        super(arg1, arg2, arg3);
        this.arg4 = arg4;
      }
      classMethod() {         // this method runs different code 
                              for the SubClass. Without this declaration, 
                              the method from ClassName will be inherited
        
        updatedCodeGoesHere   
      }
    }
---
## instanceof
---
`instanceof` operator allows you to compare an object to a constructor, returning a boolean whether or not that object was created with the constructor

---
## constructor property
---
an object prototype has a `constructor` property that can be used, like `instanceof` to check how it was constructed.  However this property can be overridden, so it's best to use `instanceof`.

If you manually set the prototype to a new object, it erases the `constructor` property so it can be useful to define the property when doing so.

---
## isPrototypeOf
---
`isPrototypeOf` method returns a boolean if the passed object inherits its prototype from the Prototype constructor function.

`Bird.prototype.isPrototypeOf(duck);` // true

---
## Mixin
---
A mixin allows other objects to use a collection of functions.

    let flyMixin = function(obj) {
      obj.fly = function() {
        console.log("Flying, wooosh!");
      }
    };

The `flyMixin` takes any object and gives it the `fly` method.

    let bird = {
      name: "Donald",
      numLegs: 2
    };

    let plane = {
      model: "777",
      numPassengers: 524
    };

    flyMixin(bird);
    flyMixin(plane);

Here bird and plane are passed into flyMixin, which then assigns the fly function to each object. 
Now bird and plane can both fly:

    bird.fly();   // Flying, wooosh!
    plane.fly();  // Flying, wooosh!

---
## Private Class Fields
---
adding `#` to a variable in a class says "this is private data only accessible by the class"

  class Character {
    constructor(name) {
      this.name = name;
    }
    greet() {
      console.log('hi' + this.name)
    }
  }

  const mikey = new Character('Mikey')

this could potentially be modified:

  Character.prototype.greet = false;
  mikey.greet() //false

We can name private state:

class Character {
  #age = 54;
  constructor(name) {
    this.name = name;
  }
  greet() {
    console.log('hi' + this.name is this.#age)
  }
}

const Mikey = new Character('Mikey')

    Mikey.age //undefined
    Mikey.#age //54
    Mikey.#age = 23 //error
    Mikey.#age //54

https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Classes/Private_class_fields

## Abstract Class
- can't be used to create an object directly
- only used as a parent class
- can contain real implementation for some methods
- the implemented methods can refer to other methods that don't actually exist yet (we still have to provide names and types for the un-implemented methods)
- can make child classes promise to implement some other method

`abstract class ClassName {}`