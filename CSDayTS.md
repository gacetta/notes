# TypeScript

a superset of JavaScript

JS was created with the internet of 1995 in mind...
dynamic vs static typing has to do with when variables are assigned a type. Dynamic - types declared at runtime
strong vs weak. weaky - variable types can be reassigned

dynamic and weak
PROS
-decreases verbosity and easier to write
CONS
less manageable at scale:

- unintentional type coercion causes code to "fail silently" or keep running even when a breaking change is introduced. Harder to debug because there's no error thrown
- JS flexibility makes it difficult to enforce good practices. It's easy to write bad JS.

## SOLUTIONS FOR JS PROBLEMS

- ECMAScript standards: strict mode, block scoping, class syntax, etc. But Web development evolves quicker than ES can keep up.

Compile to JS tools

- allowed devs to write code in a language with their desired features and eventually run it in JS: CoffeeScript, Dart, GWT, Script#.
- never really gained traction since they were made to resemble other languages, so JS codebases would need to be fully rewritten

## Introducing TypeScript

Released by Microsoft in 2012 - it is a strongly and statically typed language that compiles to JS

TS adheres to ES standard. Built ontop of JS and enhances it by incorporating popular features from other languages:

- JS devs can quickly learn and use TS
- easy for dev with backgrounds in other languages
- can be gradually integrated into existing codebases

Advantages:

- TS provides standard for large teams
  - allows new devs to onboard a codebase more quickly
  - speeds up dev time and complements test coverages
  - provide single source of truth between client & server
- When devs started incorporating TS, it would flag numerous existing errors that had previously been overlooked.
  - one survey found 38% of bugs could have been prevented by TS

## Defining Types

Variables are statically typed, AKA their types must be specified when they are declared and cannot be changed later on.

`type annotation`

PRIMITIVES
let num: number = 3;

ARRAYS:
const nums: number[] = [1, 2, 3, 4];
const colors: string[] = ['red', 'blue', 'green'];

ALTERNATIVE SYNTAX:
const colors: Array<string> = ['red', 'blue', 'green'];

## Union Types

To provide more flexibility, the `union operator` specifies if a variable may be assigned two or more types:

let numberOrColor: (number | string) = 1;
numberOrColor = 'turquoise'; // no error
numberOrColor = false; // error (code will be underlined)

ARRAYS:
const numsAndColors: (number | string)[] = [1, 'red', 2, 'blue'];

## The 'any' type

By giving variables the type `any`, we can remove all type restrictions and allow them to be assigned to anything, thus operating like normal JS

let anything: any = 'This variable can change type';
anything = 1;
anything = true;
anything = [1, true, 'green'];

Allows for migrating codebase slowly from JS to TS
_AVOID ANY WHEN POSSIBLE_

## Defining Functions

When defining functions, parameters and return value must be explicitly typed:

              takes 1 num as arg      returns num
                          V            V

const multiplyBy2 = (num: number): number => {
const result: number = num \* 2;
return result;
}

              1 string as arg     returns nothing (undefined)
                      V            V

const sayHello = (name: string): void => {
console.log(`Hello, ${name}!`);
}

We can use `union types` in our parameters. We can also define optional parameters by using `?`

const callback = (error: string | null, data?: string): string | void => {
if (error) return error;
else return data;
}

## Generics & Parameterizing Types

What if we want a function to work on any number of types? In these cases, we can define `generics` or `type parameters`

    function map<Input, Output>(array: Input[], callback: (element: Input)) => Output):
    Ouput[] {
      const newArray: Outpu[] = [];
      for (let element of array) {
        newArray.push(callback(element));
      }
      return newArray;
    }

Type parameters are assigned to the type of the function's arguments when it's invoked

## Type Aliases

For more specificity, we can define aliases for our own custom types, and reuse them across our application

type AllowedColors = 'red' | 'blue' | 'green';
type ArrayOfColors = AllowedColors[];

const myArray: ArrayOfColors = ['red', 'blue', 'green'];

myArray.push('orange'); // error since 'orange' isn't of type AllowedColors

## Type Aliases: Objects

all properties and methods on an object should be typed. Aliases offer a convenient way for us to do this.

    type Dog = {
      name: string,
      age: number,
      breed?: string,
      weight: number,
      bark: () => void
    }

when typing a method, we need to specify its return value and parameters (if any). This this case, the mothod bark must be defined with 0 params and return nothing.

## Interfaces

We can also use an `interface` to define the shape of an object. interfaces are similar to aliases, but allow us to extend properties from one to another.

    type Dog = {
      name: string,
      age: number,
      breed?: string,
      weight: number,
      bark: () => void
    }

    interface Labrador extends Dog {
      color: 'black' | 'yellow' | 'chocolate'
    }

    const teddy: Labrador = {
      name: 'teddy',
      age: 5,
      weight: 70,
      color: 'chocolate',
      bark: () => console.log('woof')
    }

Objects defined using an interface must contain all fields on that interface as well as any other interfaces they extend from.

## Defining Classes

When we define classes we can specify the type of each property above the constructor method.

TS incorporates access modifiers, a popular feature of object-oriented languages such as C++ and Java. Acess modifiers let us restrict where properties or methods can be accessed from.

- Public: can be accessed anywhere
- Private: can only be accessed from within the class itself

class User {
public name: string;
private score: number;

constructor(name: string) {
this.name = name;
this.score = 0;
}

public setScore(value: number) {
this.score = value;
}

public getScore() {
return this.score;
}
}
