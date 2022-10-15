### Functions!
* a _function_ takes an input (argument), executes some code and gives an output (return value)

* the syntax for a function is `function() {}`  
* the function takes an argument (in the parenthesis) and execudes codes (contained in the curly brackets)
    * functions can take multiple arguments 
    ```
    let thisFunction = function(variable A, variable B, variable C) {
        code goes here
    }
    ```  

    * **DEFAULT VALUES** - there are times where no arguments will be provided but a function expects them.  We can set default values that will be assigned to the variables in these instances.  taking the code from above:  
    ```
    let thisFunction = function(variable A = defaultValue, variable B = anotherDefaultValue) {
    }
    ```  

    * **TEMPLATE STRING** you can create a string with many methods.  A method different from concatonation is template string.  Note that the backtick is used to define the string and the variable is defined in that string with `${}`
    ```
    let name = 'Thor'
    console.log(`Hello mortals, my name is ${name}!)
    ```  

    * there are many ways to do everything, but a **style choice** I like is to keep template strings simple and free of calculations
    ```
    let tipCalculator = function (total, tipPercent = .2) {
    let percent = tipPercent *100
    let tipAmount = total * tipPercent
    return `A ${percent}% tip on $${total} would be $${tipAmount}`
    ```
    is cleaner than
    ```
    let tipCalculator = function (total, tipPercent = .2) {
    return `A ${tipPercent * 100}% tip on $${total} would be $${total * tipPercent}`
    ```



#### Undefined
Undefined is a value that can be implicitly set by javascript in certain situations  

* Undefined as a variable
    * When a variable is called that hasn't been assigned a value, it is given the value of undefined

* Undefined as a function
    * When an argument isn't provided but it's named in a function definition, it is assigned a value of undefined.

* Undefined as a function return default value
    * If a return value is expected from a function, but the function doesn't return a value, a value of undefined will be assigned.  

Undefined can also be assigned on purpose:
```
let age = undefined
```

However, it may become difficult to differentiate what has been assigned implicitly, and what has been assigned on purpose and make it more difficult to troubleshoot.  

It's better practice to use the value of ***null*** instead of _undefined_ in these instances

