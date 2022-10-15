### Objects!
* objects are another type of variable that are defined by the user.
* they can contain many variables within
* the notation for an object is:  
```
let myBook = {
    title: '1984',
    author: 'George Orwell',
    pageCount: 326,
}
```  
This object contains three variables - title, author and pageCount.

* to reference those variables we can use dot notation  
`object.variable` where object is the object name, such as `myBook` above.  and variable is the variable you want to reference, such as `author` above.
* this notation can be used to access or to modify a variable

#### Methods
* a method is an object property whose value is a function
* here is an object named _restaurant_ with several variables, _name, guestCapacity, and guestCount_. _checkAvailability_ is a method - a property whose value is a function.

```
let restaurant = {
    name: 'Homer',
    guestCapacity: 75,
    guestCount: 73,
    checkAvailability: function (partySize) {
        let seatsLeft = this.guestCapacity - this.guestCount
        return partySize <= seatsLeft
    },
```  

#### THIS

* `this` references the object that the method is defined on.  In the above example, `this` refers to the object `restaurant`

### String properties and methods

* strings have one property that can be accessed    
    * length property - if a variable stores a string, the length of that string can be accessed via dot notation using `variableName.length`
* strings also have methods that can be accessed:
    * convert to upper case - if you want to convert an entire string to upper case characters use dot notation `variableName.toUpperCase()`.  It doesn't take any arguments, but since it is a method, it needs the parenthesis
    * `toLowerCase()`
    * `includes()` - searches string to see if it contains the argument
    * `trim()` - removes whitespace from both ends of a string

* **DOCUMENTATION OF STRING PROPERTIES AND METHODS** is available at mozilla developer network.  Google: MDN string

### Number Properties and methods

* just like strings, numbers have properties and methods as well.  They are called in the same manner as string properties and methods, using dot notation.

* there aren't many useful number methods:

    * `toFixed(argument)` takes an argument about how many digits of decimals the number should show.

* math methods are more useful.  called using `Math.methodName(number)`.  Documentation at the same place as above - google: MDN math
    * `Math.round(num)` returns value of a number rounded to nearest integer
    * `Math.floor(num)` returns value of a number rounded down to nearest integer
    * `Math.ceil(num)` returns value of a number rounded up to nearest integer
    * `Math.random()` generates a number between 0 and 1 (inclusive of 0 but not 1)
        * complicated at first but to create a whole number between two values, say 10 and 20, the following code is pretty common practice:
        ```
        let min = 10
        let max = 20
        let randomNum = Math.floor(Math.random() * (max - min + 1)) + min
        ```  

### defining variables
* there are several ways to define a variable.  
    * `let` is the method most familiar to us at the moment
    * another method is `const`.  It differs from `let` in that once a `const` is declared, it cannot be reassigned
        * it's best to use a `const` if the variable isn't going to be reassigned
        * an object can be declared as a `const` but the properties inside may still be reassigned
    * `var` which isn't something we use in day to day development.  In the past it was the ONLY way to create a variable.  There was no `let` and no `const`.  But `var` has some quirks and flaws:
        * `var` allows the the same variable to be declared twice
        * `var` is function scoped, not block scoped.  Variables defined in a more local scope are available globally.  Creates problems with figuring out scope and less control of where variables are accessible.
        * 
* why not use `let` at all times?  ***READABILITY***
        * shows more clearly which variables will be changing and which will remain constant.  Allows someone unfamiliar with the code to more quickly understand it.