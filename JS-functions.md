# Functions
## ARROW FUNCTIONS

Arrow functions can be used to write concise anonymous functions.  These inlnine functions don't need names because we do not reuse them anywhere else.

Common syntax:

    const myFunc = function() {
    const myVar = "value";
    return myVar;
    }

Arrow function syntax:
    
    const myFunc = () => {
    const myVar = "value";
    return myVar;
    }

arrow function allows you to omit the `return` keyword as well as the brackets surrounding the code which helps simplify smaller functions into one-line statements:

    const myFunc = () => "value";

### PARAMETERS

adding parameters to arrow functions is as simple as including them inside the `()`.  

If an arrow function has a single parameter, the parenthesis may be omitted:

    const doubler = item => item * 2;

Multiple parameters is straight forward:

    const multiplier = (item, multi) => item * multi;
    multiplier(4, 2);


### DEFAULT PARAMETERS

a default parameter kicks in when the argument is not specified (it is undefined).  In the code below, the parameter `name` will receive its default value `Anonymous` when there is no provided value for the parameter.

    const greeting = (name = "Anonymous") => "Hello " + name;

    console.log(greeting("John"));
    console.log(greeting());

## REST PARAMETER WITH FUNCTION PARAMETERS

The rest parameter (`...`) allows a function to take in a variable number of arguments.  These arguments are stored in an array that can be accessed later in the function

    function howMany(...args) {
    return "You have passed " + args.length + " arguments.";
    }
    console.log(howMany(0, 1, 2));
    console.log(howMany("string", null, [1, 2, 3], { }));

the console would display `You have passed 3 arguments` and `You have passed 4 arguments`

The rest parameter eliminates the need to check the `args` array and allows us to apply `map()`, `filter()`, and `reduce()` on the parameters array.

## CONCISE DECLARATIVE FUNCTIONS

