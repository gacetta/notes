## DELETE

We can delete properties from objects using `delete`.

The following code removes the `"bark"` property from the `ourDog` object:

    const ourDog = {
    "name": "Camper",
    "legs": 4,
    "tails": 1,
    "friends": ["everything!"],
    "bark": "bow-wow"
    };

    delete ourDog.bark;

## ACCESSING NESTED OBJECT

sub-properties of objects can be accessed by chaining together the dot and bracket notation

consider the nested object:

    const ourStorage = {
    "desk": {
        "drawer": "stapler"
    },
    "cabinet": {
        "top drawer": { 
        "folder1": "a file",
        "folder2": "secrets"
        },
        "bottom drawer": "soda"
    }
    };

    ourStorage.cabinet["top drawer"].folder2;
    ourStorage.desk.drawer;

`ourStorage.cabinet["top drawer"].folder2` would be the string `secrets`, and `ourStorage.desk.drawer` would be the string `stapler`.

## PREVENT OBJECT MUTATION

`const` alone doesn't really protect data from mutation (for ex. `.pop()` can be used on a `const arr`).  

`Object.freeze` is a function designed to prevent data mutation.  After calling `Object.freeze`, any attempt at changing the object will be rejected, with an error thrown if the script is running in strict mode.

    let obj = {
    name:"FreeCodeCamp",
    review:"Awesome"
    };
    Object.freeze(obj);
    obj.review = "bad"; // ERROR in strict mode
    obj.newProp = "Test"; //ERROR in strict mode
    console.log(obj); // logs { name: "FreeCodeCamp", review: "Awesome" }

**NOTE:** `Object.freeze()` is a "shallow freeze"

This means the result of calling Object.freeze(object) only applies to the immediate properties of object itself and will prevent future property addition, removal or value re-assignment operations only on object. If the value of those properties are objects themselves, those objects are not frozen and may be the target of property addition, removal or value re-assignment operations.

## DESTRUCTURING ASSIGNMENT

_Destructuring assignment_ is a special syntax introduced in ES6 for neatly assigning values taken directly from an object.

* **FOR EXTRACTING VALUES FROM OBJECTS**  

    ES5 code:

        const user = { name: 'John Doe', age: 34 };

        const name = user.name;
        const age = user.age;

    Equivalent code in ES6:

        const { name, age } = user;

    in the above code, the `name` and `age` variables will be created and assigned the values of their respective values from the user object

* **FOR ASSIGNING VARIABLES FROM OBJECTS**

    Using the same object from last example:

        const user = { name: 'John Doe', age: 34 };

    We can give new variable names in the assignment: 

        const { name: userName, age: userAge } = user;

    Is equivalent to:

        const userName = user.name;
        const userAge = user.age;

    You may read it as "get the value of `user.name` and assign it to a new variable named `userName`" and so on. The value of `userName` would be the string `John Doe`, and the value of `userAge` would be the number `34`.

* **TO ASSIGN VARIABLES FROM NESTED OBJECTS**

    Given the nested object:

        const user = {
            johnDoe: { 
                age: 34,
                email: 'johnDoe@freeCodeCamp.com'
            }
        };

    here's how to extract the values of object properties and assign them to variables with the same name:

        const { johnDoe: { age, email }} = user;

    And here's how you can assign an object properties' values to variables with different names:

        const { johnDoe: { age: userAge, email: userEmail }} = user;

* **TO ASSIGN VARIABLES FROM ARRAYS**

    Destructuring arrays is as easy as destructuring objects!

    A key difference between the `spread` operator and `array destructuring` is that the spread operator unpacks all contents of an array into a comma-separated list.  Consequently, you cannot pick or choose which elements you want to assign to variables.

    Destructuring lets us do just that:

        const [a, b] = [1, 2, 3, 4, 5, 6];
        console.log(a, b);

    The variable `a` is assigned the first value of the array, and `b` is assigned the second value of the array.  Thus, the console will display the values of `a` and `b` as `1, 2` 

    We can also access the value at any index in an array with destructuring by using commas to reach the desired index:

        const [a, b,,, c] = [1, 2, 3, 4, 5, 6];
        console.log(a, b, c);

    The console will dispalay the values of `a`, `b`, and `c` as `1, 2, 5`

* **WITH THE REST PARAMETER TO REASSIGN ARRAY ELEMENTS**

    Occasionally with array destructuring, we might want to collect the rest of the elements into a separate array.

    The result is similar to `Array.prototype.slice()`:

        const [a, b, ...arr] = [1, 2, 3, 4, 5, 7];
        console.log(a, b);
        console.log(arr);  

    The console would display `1, 2` and `[3, 4, 5, 7]`

    Variables `a` and `b` take the first and second values from the array. After that, because of the rest parameter's presence, `arr` gets the rest of the values in the form of an array. The rest element only works correctly as the last variable in the list. As in, you cannot use the rest parameter to catch a subarray that leaves out the last element of the original array

* **TO PASS AN OBJECT AS A FUNCTION'S PARAMETERS**

    In some cases, you can destructure the object in a function argument itself:

        const profileUpdate = (profileData) => {
            const { name, age, nationality, location } = profileData;

        }

    The above code effectively destructures the object sent into the function.  This can also be done in-place:

        const profileUpdate = ({ name, age, nationality, location }) => {

        }

    When `profileData` is passed to the above function, the values are destructured from the function parameter for use within the function.

## OBJECT LITERAL DECLARATIONS USING OBJECT PROPERTY SHORTHAND

The following code: 

    const getMousePosition = (x, y) => ({
    x: x,
    y: y
    });

Can be rewritten with ES6.  Rather than writing `x: x` we can simply write `x` once and it will be converted to `x: x` under the hood.

    const getMousePosition = (x, y) => ({ x, y });

## CONCISE FUNCTION DECLARATIONS IN OBJECTS

ES5 required the use of the `function` keyword to define a function:

    const person = {
    name: "Taylor",
    sayHello: function() {
        return `Hello! My name is ${this.name}.`;
    }
    };

In ES6, the `function` keyword and colon aren't required when defining functions in objects:

    const person = {
    name: "Taylor",
    sayHello() {
        return `Hello! My name is ${this.name}.`;
    }
    };

## GETTERS AND SETTERS

You can obtain values from an object and set the value of a property within an object.  These are classically called _getters_ and _setters_

* Getter functions - are meant to simply return (get) the value of an object's private variable to the user without the user directly accessing the private variable

* Setter functions - are meant to modify (set) the value of an object's private variable based on the value passed into the setter function.  This change could involve calculations, or even overwriting the previous value completely.

    class Book {
    constructor(author) {
        this._author = author;
    }
    // getter
    get writer() {
        return this._author;
    }
    // setter
    set writer(updatedAuthor) {
        this._author = updatedAuthor;
    }
    }
    const novel = new Book('anonymous');
    console.log(novel.writer);
    novel.writer = 'newAuthor';
    console.log(novel.writer);

The console displays the strings `anonymous` and `newAuthor`

Notice that the syntax used to invoke the getter and setter doesn't even look like functions.   Getters and setters are important because they hide internal implementation details.

**BEST PRACTICE -** it is convention to precede the name of a private variable with an underscore (`_`).  However, the practice itself does not make a variable private.



---
## Rest and Spread Operator in Objects
---
### Clone object using spread operator
use spread syntax to create shallow copy of an object: `const clone = { ...object }`

    const hero = {
    name: 'Batman',
    city: 'Gotham'
    };

    const heroClone = {
    ...hero
    };

    heroClone;          // { name: 'Batman', city: 'Gotham' }
    hero === heroClone; // => false

**SPREAD BONUS:** update or add new properties to cloned object in place if needed:

    const hero = {
    name: 'Batman',
    city: 'Gotham'
    };

    const heroEnhancedClone = {
    ...hero,
    name: 'Batman Clone',
    realName: 'Bruce Wayne'
    };

    heroEnhancedClone; 
    // { name: 'Batman Clone', city: 'Gotham', realName: 'Bruce Wayne' }

---
### Clone object using rest
use rest operator to make shallow clone of an obj: `const {...clone} = object`

    const hero = {
    name: 'Batman',
    city: 'Gotham'
    };

    const { ...heroClone } = hero;

    heroClone;          // { name: 'Batman', city: 'Gotham' }
    hero === heroClone; // => false

**REST BONUS:** skip cloned properties if needed by naming properies you want to skip before `...`

    const hero = {
    name: 'Batman',
    city: 'Gotham'
    };

    const { city, ...heroClone } = hero;
    heroClone; // { name: 'Batman' }

### Combining object spread and rest
- object spread - bonus of updating/adding new properties
- object rest - bonus of skipping properties in resulting clone
- combine to do both!

    const hero = {
    name: 'Batman',
    city: 'Gotham'
    };

    const { city, ...heroClone } = {
    ...hero,
    realName: 'Bruce Wayne'
    };

    heroClone; // { name: 'Batman', realName: 'Bruce Wayne' }