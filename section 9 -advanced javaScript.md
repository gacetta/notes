### Arrow Functions  
An arrow function is an alternate method of defining a function.  The syntax is similar though slightly different:
* `const funcName = (args) => {}`  it can have parameters or not, just like any function we've worked with before.
    * **shorthand syntax** can be used for simple one-line functions that return something (and only works for arrow functions)
    * when using shorthand syntax, there is no `{}` and no `return`
    * `const square = (num) => num * num;`
* subtle differences between arrow functions and regular functions
    * in a regular function you have access to arguments even if they're not named in the definition.  `
    ```
    const add = function (a,b) {
    }
    add (11, 22, 33, 44);
    ```
    * in the above code, the function add still has access to the 3rd and 4th arguments even though they're not defined.  They can be accessed as `arguments[2]` and `arguments[3]` where the numbers are the indexes.
    * `arguments` only exists in regular functions, ***NOT*** in arrow functions
    * when defining a function on an object, arrow functions don't have access to `this`.
```
const car = {
    color: 'Red',
    getSummary: function() {
        return `The car is ${this.color}`;
    }
}

console.log(car.getSummary());
```
* the above code works as expected.  However:
```
const car = {
    color: 'Red',
    getSummary: () => {
        return `The car is ${this.color}`;
    }
}

console.log(car.getSummary());
```
* the above code doesn't work as expected as the arrow function does not have access to `this`.
* there is another syntax for setting up a method:
```
const car = {
    color: 'Red',
    getSummary() {
        return `The car is ${this.color}`;
    }
}

console.log(car.getSummary());
```
* the above code works as expected for a method.

### conditional (ternary) operator  
allows us to use conditional logic in our code without using an if statement
* not a complete replacement for if statements
* useful shorthand for specific cases  

optimal to use when there is one condition with two options as a result.  Such as:  

```
const myAge = 37;
let message;

if (myAge >= 18) {
    message = 'message 1';    
} else {
    message = 'message 2';
}
console.log(message);
```  

this code can be re-written using the conditional operator:  

`const message = myAge >= 18 ? 'message 1' : 'message 2'`

likewise the _conditional operator_ can be used with functions:

```
const myAge = 37;
const showPage = () => {
    console.log('You can drink!');
}
const showErrorPage = () +. {
    console.log('You ain't old enough, bro!');
}

if (myAge >= 21) {
    showPage();
} else {
    showErrorPage();
}
```  

this code can be re-written as:
`myAge >= 21 ? showPage() : showErrorPage();`

### Truthy and Falsy  
everything in JS has a true or false value.  Obviously booleans hold a literal value of true or false, but strings, numbers, arrays, undefined, all have a true or false value when asked.

* Falsy - values that resolve to false in a boolean context.  The falsy values are:
    * false
    * 0
    * empty string
    * null
    * undefined
    * NaN - not a number, the result of a math operation that is not valid such as 1/0
* Truthy - values that resolve to true in a boolean context.  
    * Truthy values - everything that's not falsy including empty arrays, empty objects

### Type Coercion
**Type Coercion** is taking a value of one type (such as string) and in a specific context, automatically translate it over to a value of a different type
* truthy and falsy is a good example of type coercion where everything is forced to a boolean value
    * other than truthy / falsy, type coercion is unpredictable and something that we try to avoid
* `console.log(5 === 5)` is the strict equality operator that says the value AND TYPE of one item is the same as the other.  
* `console.log(5 == 5)` is the equality operator that says the value (NOT THE TYPE) of one item is the same as the other
    * this operator can create problems due to type coercion

* to check the type of a value we can use the typeof operator  
`typeof 123`

### Throwing errors  
There are times where we want to crash the program and provide an error message, such as if a function is passed an argument of a different type than expected.  We can use the `throw` syntax.  For example:  

```
const getTip = (amount) => {
    if (typeof amount === 'number') {
        return amount * .25;
    } else {
        throw 'Argument must be a number';
    }
}
```  

We can throw an error message with more information with the syntax  
 `throw Error('Argument must be a number')`.  
 This will print the string we provided but also provide much more informative data to help with debugging  
 #### Try Catch  
 Try catch is an approach to error checking that doesn't crash your program.  The boilerplate syntax:  

 ```
 try {
     function body here
 } catch (e) {
     if an error is thrown, execute this block
 }
 ```

### Strict mode
A mode that runs JavaScript files without allowing certain actions, such as a leaked global variable.  Take the following code:  
```
const processData = () => {
    data = '10987432590827'
}
processData();
console.log(data);
```  

the variable data is never properly defined, so when it is assigned a value, a global variable named data is created (Andrew refers to this as a leaked global).  As a result, we have access to this new (previously undefined) variable and the code runs without error.

* Strict mode is enabled by adding the string 'use strict' as the first line of the JS document.  When a leaked global is attempted, an error is thrown and the program crashes.
* strict mode also helps keep code clean for future use by protecting "reserved words" that are going to be used in the future.  We know "const" and "let" can't be variable names, since they're reserved words.  "public" is a reserved word to be used in the future.  If we run in strict mode and define a variable named public, an error is thrown.