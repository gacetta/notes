# Hoisting
---
**HOISTING** is a JavaScript mechanism where variables and function declarations are moved to the top of their scope before code execution

**NOTE:** the hoisting mechanism only moves the declaration.  The assignments are left in place.

---
## ERRORS
---

_undefined_ vs _ReferenceError_

    `console.log(typeof variable); // Output: undefined`

In JavaScript, an undeclared variable is assigned the value `undefined` at execution and is also of type `undefined`

    `console.log(variable); // Output: ReferenceError: variable is not defined`

In JavaScript, a `ReferenceError` is thrown when trying to access a previously undeclared variable.

---

## HOISTING VARIABLES
---
### ASSIGNMENT

The sequence of assigning a value to a variable is first _declaration_ and then _initialization_:

_declaration_ --> _initialization / assignment_ --> _usage_

This is often combined into one step in JS and we can declare and initialize our variables simultaneously:

    var a = 100;

However, in the background, JS is always:
1. declarating a variable
2. initializing the variable

---
### UNDECLARED VARIABLES

All variable and function declarations are hoisted to the top of their scope.  Additionally, variable _declarations_ are processed before any code is executed.

**HOWEVER**, in contrast, _undeclared_ variables do not exist until the code assigning them is executed.  Therefore, assigning a value to an undeclared variable implicitly creates it as a global variable when the assignment is executed.  This means **all undeclared variables are global variables**

    function hoist() {
    a = 20;
    var b = 100;
    }

    hoist();

    console.log(a); 
    /* 
    Accessible as a global variable outside hoist() function
    Output: 20
    */

    console.log(b); 
    /*
    Since it was declared, it is confined to the hoist() function scope.
    We can't print it out outside the confines of the hoist() function.
    Output: ReferenceError: b is not defined
    */

---
## ES5
---
### VAR

* GLOBALLY SCOPED HOISTING

    the scope of `var` is its _current execution context_ which is either the **enclosing function**, or for variables declared outside, **global**

        console.log(hoist); // Output: undefined

        var hoist = 'The variable has been hoisted.';

    Expected `ReferenceError: hoist is not defined` but instead the output is `undefined`.  This is what the above code looks like to the interpreter:

        var hoist;
        console.log(hoist); // Output: undefined
        hoist = 'The variable has been hoisted.';

* FUNCTION SCOPED HOISTING

        function hoist() {
            console.log(message);
            var message = 'Hoisting is all the rage!';
        }

        hoist();


    The above code has an output of `undefined`.  When `hoist()` is invoked, the declaration of `message` is hoisted to the top of the function scope, but not the assignment, resulting in a value of `undefined` in the `console.log()`.  The interpreter views the code as: 

        function hoist() {
        var message;
        console.log(message);
        message = 'Hoisting is all the rage!';
        }

        hoist(); // Ouput: undefined

    **NOTE:** this is why it's important to declare and initialize variables before referencing them.

---
### STRICT MODE

**strict mode** tells JS not to tolerate the usage of variables before they are declared

1. It eliminates some silent JS errors by changing them to explicit throw errors which will be spit out by the interpreter
2. It fixes mistakes that make it difficult for JS engines to perform optimizations
3. It prohibits some syntax likely to be defined in future versions of JS

strict mode can be enabled by typing \'use strict\' or "use strict" at the top of the code:

    'use strict';

    console.log(hoist); // Output: ReferenceError: hoist is not defined
    hoist = 'Hoisted';

---
## ES6
---
### LET

`let` variables are _block scoped_ and not _function scoped_, meaning that its scope is bound to the code block in which it is declared and not the function in which it is declared

    console.log(hoist); // Output: ReferenceError: hoist is not defined ...
    let hoist = 'The variable has been hoisted.';

**UNLIKE** `var`, the use of `let` before declaration throws a `ReferenceError`.  This ensures that we always declare our variables first.

The following code WILL output `undefined` instead of `ReferenceError`

    let hoist;

    console.log(hoist); // Output: undefined
    hoist = 'Hoisted'

**NOTE:** to err on the side of caution, we should declare then assign variables to a value before using them.

---
### CONST

`const` is used to declare _immutable variables_ and will throw a `ReferenceError` when referenced before declaration, similar to `let`.

this can be seen when using `const` in a function:

    function getCircumference(radius) {
        console.log(circumference);
        circumference = PI*radius*2;
        const PI = 22/7;
    }

    getCircumference(2); // ReferenceError: circumference is not defined

With `const`, es6 goes further and throws an error if we use the constant before declaring and initiailzing it

As the interpreter sees it:  

    const PI;
    console.log(PI); // Ouput: SyntaxError: Missing initializer in const declaration
    PI=3.142;

**THEREFORE** a constant variable must be both declared **AND** initialized before use

---
## HOISTING FUNCTIONS
---

Functions can be loosely classified as the following:
1. function declarations
2. function expressions

* FUNCTION DECLARATIONS

    The following form of a function declaration will be hoisted completely to the top:

        hoisted(); // Output: "This function has been hoisted."

        function hoisted() {
            console.log('This function has been hoisted.');
        };

* FUNCTION EXPRESSIONS

    Function expressions are not hoisted:

        expression(); //Output: "TypeError: expression is not a function

        var expression = function() {
            console.log('Will this work?');
        };

    As we can see above, the variable declaration var expression is hoisted but it’s assignment to a function is not. Therefore, the intepreter throws a TypeError since it sees expression as a variable and not a function.

---
## ORDER OF PRECEDENCE - FUNCTIONS & VARIABLES
---

To understand the specific order that JS executes code:
1. Variable assignment takes precedence over function declaration
2. Function declarations take precedence over variable declarations

This means **function declarations are hoisted over variable declarations but not over variable assignments**

###  VARIABLE ASSIGNMENT OVER FUNCTION DECLARATION  
    var double = 22;

    function double(num) {
        return (num*2);
    }

    console.log(typeof double); // Output: number

### FUNCTION DECLARATIONS OVER VARIABLE DECLARATIONS
    var double;

    function double(num) {
        return (num*2);
    }

    console.log(typeof double); // Output: function

---
## HOISTING CLASSES
---
just like functions, JS classes too can be loosely classified either as:
1. Class declarations
2. Class expressioins

* CLASS DECLARATIONS

    Like their function counterparts, JS class declarations are hoisted, however, they remain uninitialized until evaluation.  This effectively means that you have to declare a class before you can use it:

        var Frodo = new Hobbit();
        Frodo.height = 100;
        Frodo.weight = 300;
        console.log(Frodo); // Output: ReferenceError: Hobbit is not defined

        class Hobbit {
        constructor(height, weight) {
            this.height = height;
            this.weight = weight;
        }
        }

    The above code results in a `ReferenceError` instead of `undefined` which is evidence that class declarations are hoisted.

    To access the class declaration, it must be declared first:

        class Hobbit {
        constructor(height, weight) {
            this.height = height;
            this.weight = weight;
        }
        }

        var Frodo = new Hobbit();
        Frodo.height = 100;
        Frodo.weight = 300;
        console.log(Frodo); // Output: { height: 100, weight: 300 }


* CLASS EXPRESSIONS

    Similar to their function counterparts, class expressions are not hoisted:

    An example with the un-named or anonymous variant of the class expression:

        var Square = new Polygon();
        Square.height = 10;
        Square.width = 10;
        console.log(Square); // Output: TypeError: Polygon is not a constructor

        var Polygon = class {
        constructor(height, width) {
            this.height = height;
            this.width = width;
        }
        };

    An example with a named class expression:

        var Square = new Polygon();
        Square.height = 10;
        Square.width = 10;
        console.log(Square); // Output: TypeError: Polygon is not a constructor


        var Polygon = class Polygon {
        constructor(height, width) {
            this.height = height;
            this.width = width;
        }
        };

    **The correct way to do it is:**

        var Polygon = class Polygon {
        constructor(height, width) {
            this.height = height;
            this.width = width;
        }
        };

        var Square = new Polygon();
        Square.height = 10;
        Square.width = 10;
        console.log(Square);