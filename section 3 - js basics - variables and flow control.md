### Strings and Variables

a **variable** is a way to store a value for later

to create a variable use `let`  
`let` is a reserved word in javascript

`let variable_name = variable_value`

* there are many types of variables.
    * a **string** is a string of characters.  It's notated between two single quotes
    * a **num** is a number.  No need to use quotes to define it

* variables must be continuous characters - no spaces  
Best practice is to camelCase things  

### Strings
* Strings can be combined with a `+` operator, also known as _concatonator_

### numbers

There are operators like on a calculator
    * addition is `+`
    * subtraction is `-`
    * multiplication is `*`
    * division is `/`

Order of operations = My Dear Ant Sally  
Multiplication, Division, Addition, Subtraction

* Parenthesis will alter this order just like in algebra

***JavaScript comments are created using `//`***

### Variables

the first time you declare a variable you use `let`  
but when changing the value, no need to use `let`  
***You cannot define a variable more than once***

`let petName = 'Hal'`  
`petName = 'spot'`


1. you can't define a variable more than once
2. there are rules to variable names
    * variable names must start with letters, underscore, or dollar sign ONLY
    * after first character, numbers may be introduced
    * no symbols may be used except for underscore or dollar sign
3. Variable names cannot be reserved keywords
    * `let` is one of those words

### Boolean

a variable that has two values.  either `true` or `false`

#### comparison
* `===` - equality operator
* `!==` - not equal operator
* `<` - less than operator
* `<=`- less than or equal operator
* `>` - greater than operator
* `>=` - greater than or equal operator

#### if-else statements

`if (conditional statement) {

} else {
    
}`

_else_ statement is completely optional

#### logical and operator

the operator `&&` can be used to have multiple conditions  - it is true if both sides are true. False otherwise

#### logical Or Operator
the operator `||` is true if at least one side is true.  False otherwise

### Scope

javascript uses lexical scope (static scope)

two types of scope
    * global scope - defined outside of all code blocks
    * local scope - defined inside a code block

scope heirarchy

In a scope you can access variables defined in that scope, or in any parent/ancestor scope

_variable shadowing_ is when a local variable "shadows" a global variable and takes preference

**Leaked Global** when a variable isn't explicitly defined, a global variable can be created
```
if (true) {
    //let name = 'Bozo'

    if (true) {
        name = 'Jen'
        console.log(name)
    }
}

if (true) {
    console.log(name)
}
```
in this case, because there is no variable 'name', one is created

to avoid that issue, always make sure variables are defined with a `let` command