# TypeScript

`Typescript` is a superset of JavaScript

JS was created with the internet of 1995 in mind...
DYNAMIC VS STATIC typing has to do with `when` variables are assigned a type:
`dynamic` - types declared at runtime
`static` - types declared at compile time

STRONG VS WEAK typing refers to the ability to change data type for a variable
`weak` - types can be reassigned
`strong` - types cannot be changed

JavaScript is dynamic and weak
PROS

- decreases verbosity and easier to write
  CONS
- less manageable at scale:
- unintentional type coercion causes code to "fail silently" or keep running even when a breaking change is introduced. Harder to debug because there's no error thrown
- JS flexibility makes it difficult to enforce good practices. It's easy to write bad JS.

## SOLUTIONS FOR JS PROBLEMS

- ECMAScript standards: strict mode, block scoping, class syntax, etc. But Web development evolves quicker than ES can keep up.

Compile to JS tools

- allowed devs to write code in a language with their desired features and eventually run it in JS: CoffeeScript, Dart, GWT, Script#.
- never really gained traction since they were made to resemble other languages, so JS codebases would need to be fully rewritten

## Introducing TypeScript

Released by Microsoft in 2012 - it is a strongly and statically typed language that compiles to JS.  
It adheres to ES standard, is built ontop of JS and enhances it by incorporating popular features from other languages:

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

To provide more flexibility, the `union operator` `|` specifies if a variable may be assigned two or more types:

```
let numberOrColor: (number | string) = 1;
numberOrColor = 'turquoise'; // no error
numberOrColor = false; // error (code will be underlined)
```

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
                          |            |
                          V            V

const multiplyBy2 = (num: number): number => {
const result: number = num \* 2;
return result;
}

              1 string as arg     returns nothing (undefined)
                      |            |
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

What if we want a function to work on any number of types?
In these cases, we can define `generics` or `type parameters`

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

We can also use an `interface` to define the shape of an object.

interface Person {
name: string;
age: number;
occupation?: string
}

interfaces are similar to aliases, but also allow us to `extend` properties from one to another.

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

```
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
```

## in operator narrowing

The `in` operator in JS can determin if an object or its prototyupe chain has a property with a name.

For example, with the code `'value' in x` where `'value'` is a string literal and `x` is a union type.

```
interface A {
  x: number;
}
interface B {
  y: string;
}

let q: A | B = ...;
if ('x' in q) {
  // q: A
} else {
  // q: B
}
```

## Type Predicates

`type predicates` are a way to narrow down the type of a variable within a conditional statement.
They provide a way to make assertions about the type of an object and allow TypeScript compiler
to refine the type of that object within the conditional block.

To define a user-defined type guard, we simply need to define a function whose return type is a `type predicate`:

```
function isFish(pet: Fish | Bird): pet is Fish {
  return (pet as Fish).swim !== undefined;
}
```

## Utility Types

### Partial<Type>

Constructs a type with all properties of Type set to optional. This utility will return a type that represents all subsets of a given type.

(from: https://www.typescriptlang.org/docs/handbook/utility-types.html#partialtype)

```
interface Todo {
  title: string;
  description: string;
}

function updateTodo(todo: Todo, fieldsToUpdate: Partial<Todo>) {
  return { ...todo, ...fieldsToUpdate };
}

const todo1 = {
  title: "organize desk",
  description: "clear clutter",
};

const todo2 = updateTodo(todo1, {
  description: "throw out trash",
});
```

## Conditional Types

### Predefined Conditional Types

(from: https://www.typescriptlang.org/docs/handbook/release-notes/typescript-2-8.html#predefined-conditional-types)

### Exclude

Exclude<T, U> — Exclude from T those types that are assignable to U.

    type T00 = Exclude<"a" | "b" | "c" | "d", "a" | "c" | "f">; // "b" | "d"
    type T02 = Exclude<string | number | (() => void), Function>; // string | number

similar to `Omit` but not exactly...
**Note:** The Exclude type is a proper implementation of the Diff type suggested here. We’ve used the name Exclude to avoid breaking existing code that defines a Diff, plus we feel that name better conveys the semantics of the type. We did not include the Omit<T, K> type because it is trivially written as Pick<T, Exclude<keyof T, K>>.

### Extract

Extract<T, U> — Extract from T those types that are assignable to U.

    type T01 = Extract<"a" | "b" | "c" | "d", "a" | "c" | "f">; // "a" | "c"
    type T03 = Extract<string | number | (() => void), Function>; // () => void

### NonNullable

NonNullable<T> — Exclude null and undefined from T.

    type T04 = NonNullable<string | number | undefined>; // string | number
    type T05 = NonNullable<(() => string) | string[] | null | undefined>; // (() => string) | string[]

### ReturnType

ReturnType<T> — Obtain the return type of a function type.

    function f1(s: string) {
      return { a: 1, b: s };
    }
    class C {
      x = 0;
      y = 0;
    }
    type T10 = ReturnType<() => string>; // string
    type T11 = ReturnType<(s: string) => void>; // void
    type T12 = ReturnType<<T>() => T>; // {}
    type T13 = ReturnType<<T extends U, U extends number[]>() => T>; // number[]
    type T14 = ReturnType<typeof f1>; // { a: number, b: string }
    type T15 = ReturnType<any>; // any
    type T16 = ReturnType<never>; // any
    type T17 = ReturnType<string>; // Error
    type T18 = ReturnType<Function>; // Error

### InstanceType

InstanceType<T> — Obtain the instance type of a constructor function type.

    type T20 = InstanceType<typeof C>; // C
    type T21 = InstanceType<any>; // any
    type T22 = InstanceType<never>; // any
    type T23 = InstanceType<string>; // Error
    type T24 = InstanceType<Function>; // Error

## Function Overloads
