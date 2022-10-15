**machine code** - a low level programming language composed of digital binary numbers used to control a computer's CPU and run as fast as possible.
* Machine code is the lowst level of programming detail visible to programmer, though _microcode_ often exists within microprocessors to optimize code instructions

**assembly language** - a type of low-level programming language that communicates with your computer's hardware.  Unlike _machine code_, which consists of binary characters, assembly languages are designed to be readable by humans.
* translates high-level languages into machine code.

**binary** - text, computer processor instructions or any other data that uses a two-symbol system, on / off, most often symbolized by 0 and 1.

**bit** - short for **binary digits**

**byte** - 1 byte = 8 bits.  
* A string of 8 bits can represent 256 values ( 2 to the 8th power). 

**executable** - a file, program or portion of code that causes a computer "to perform indicated tasks according to encoded instructions."  Also known as "compiled" files, they are usually non-readable, non-editable, and in binary format.
* Common file formats: .BAT, .COM, .EXE, .BIN, .DMG, .APP, .ELF, and more

**program** - a set of instructions that a computer uses to perform a specific function, like a recipe.  It contains a list of ingredients (_variables_) and directions (_statements_) that show a computer how to make a dish (execute a taks)

**compile vs interpret program language**
**compiled program language** - a compiled language is translated directly into machine code allowing for immediate execution. This tends to run faster than interpreted code though requires additional time to compile whenever an edit is made and is dependent on the operating system.  It's like a translated recipe book - if the author changes the ingredients, the entire recipe book needs to be re-translated.
    
* Examples of pure compiled languages: C, C++, Erland, Haskell, Rust, Go  

**interpreted program language** - source code that is not directly translated by the target machine and instead by a different program.  This program, or _translator_, reads and executes the code, resulting in a slower execution speed.  However, unlike _compiled program languages_, these tend to be more flexible, have a smaller program size, and are platform independent.
* Emaples of common interpreted languages: 

**translator (or programming language processor)** - a generic term that refers to anything that converts code from one computer language to another.

**transpiler (source to source translator, source to source compiler (S2S Compiler) or transcompiler**, is a type of translator that takes source code in one programming language and converts it to equivalent source code in another programming language.  A transpiler converst bettwen source code that operates at approximately the same level of abstraction, such as python -> JavaScript, or C -> Java or Assembler

* ***How do transpilers / transformers work specifically within JS? Instead of JS -> Python, look for JS -> JS examples with slight different flavors***

**compiler** in contrast, a compiler translates source code from a higher level programming language to a lower level programming langugage. 

**UNIX (trademarked)** - a multiuser, multitasking operating system designed for flexibility and adaptability.  It was originally developed in 1969 by employees at AT&T with newly invented C language and inspired many common OS such as LINUX and MacOS.

* Some characteristics of UNIX: 
    * use of text files for data storage
    * heirarchical files system
    * large number of small programs strung together through a command-line interpreter
    * use of shell scripts
    * the avoidance of _captive user interfaces_

**captive user interface (or CUI)** - a style of interaction with an application that exists outside the scope of the highest-level command interpreter present on the system.  Once you invoke an application from the command interpreter, it is not possible to communicate with the command interpreter until the application exits.  Essentially, the user is held captive in the program.  Also considered slow since a human is drastically slower than a computer.

**command line** - a text interface with the computer that communicates with the system using only a keyboard, such as terminal on mac.  Takes commands such as `cd`, `ls`, `mkdir`, `touch`, `rm`, and others

**PATH** - a string of characters that denotes a unique location of a file or program in a directory structure.  Folders are separated by directory separator.  For example `User/Gacetta/Downloads` is the _PATH_ to the downloads folder

**bash, zsh** - both _bash_ and _zsh_ are command languages that run in terminal.
* **bash** is a _UNIX_ shell - was the default for macOS until Catalina and is an acronym for "Bourne Again Shell" as _bash_ replaced the previous _Bourne Shell_.  
* **zsh** is an improved version of _Bourne shell_ and _BASH_.  Now the default shell for macOS, the name _zsh_ is derived from the name of Yale professor Zhong Shao

**node.js** - is an open-source, cross-platform, runtime environment for server-side JavaScript applications.

**brew, or Binary Runtime Environment for Wireless** is free and open-source application development platform developed by Qualcomm for CDMA (code division multiple access) based mobile phones.
* Brew applications are written in C or C++.  

**command line flags** - a method of specifying options for a command-line program.
    * in `wc -l` the `-l` is a command-line flag.  
    * "arguments", "options" and "switches" are likely to be used interchangeably.  A "flag" specifically is a boolena argument.  Inclusion of the flag/option/argument counts as "true" and excluding it counts as "false"

**code editor** -  a text editor that is specifically designed for writing source code, which may be a stand alone program or part of an **IDE** or _integrated development environment_.
* some common code editors: vs code, atom, sublime, vim

**IDE (or Integrated Development Environment** - a set of programming tools that include a source code editor, compiler and debugger.  Use of IDEs is standard procedure for most program development, whether desktop or mobile application.  Most IDEs are entirely different, so switching between them is not a seamless process.
* some common IDEs: visual studio (VS), Eclipse, VS Code, pyCharm, xCode  
___
### Make a general statement using your words including the concepts "low-level language", "high-level language", "binary", "assembly code", "javascript". If you don't know the terms, research and take notes
___
A **low-level programming language** , such as **machine code**, is a programming language can be used to give instructions to a computer.  It is composed of **binary** characters and may be executed directly on computer hardware quickly and without translation.  **Assembly code** is another low-level language that communicates with computer hardware, however it is written in language understandable by humans, rather than binary.  **JavaScript** is a **high-level programming language** that is greatly abstracted from the details of a computer.  It's easier to understand than **machine code**, using natural language elements to make program development easier, more efficient and more understandable.
___
### Another one using "ES (or EcmaScript)", "browser", "javascript engine", "babel", "transpiler" 
___
**EcmaScript** is a scripting standard for **browser** developers to implement that insures operability of web pages across many web browsers.  **JavaScript** is the most popular scripting language that conforms to the ES standard and is executed within a **JavaScript Engine**, such as V8 (Node.js is a **Javascript runtime environment** that is built on the V8 javascript engine).  ES is updated annually which results in old browsers that lack support of new ES syntax.  The solution to this is to use a **transpiler**, such as **Babel**, to translate source code into equivalent code that will execute properly.  For example, Babel might be used to translate code written in Javascript with ES10 standards, to JavaScript with ES5 standards that would allow older browsers to process the code properly. 
___

## UPDATE FROM HERE ONWARDS






- **SSH** or _Secure shell protocol_ is a network protocol for operating network services over an unsecured network.
    * most notable use is for remote login and command-line execution

- **Boilerplate Code** is sections of code that have to be included in many places with little or no alteration.  Think of a 5 page contract where the first 4 pages are given to every client.

- **callback function** - a function that gets passed to another function as an argument.  It is then invoked inside the outer function to complete some kind of routine or action.

- **API** application programming interface - 

**Memoize**

**Primitive Types** - also referred to as primitive values, primitive data types are strings, numbers, bigInts, boolean, null, undefined and symbol.  They are _immutable_

Immutable

Reference Values

Static Data - data whose size is fixed at compile time.  Includes primitive data types and reference values that refer to objects.

Stack - a data structure that holds a list of element that works based on the Last In, First Out method (LIFO) meaning the most recently added element is the first one to remove.  Like a vertical array.

static memory allocation - the process of allocating memory right before execution.  Since the engine knows the size won't change, this is the method which the stack stores data but assigning a fixed amount of memory for each value.  Size is known at compile time.

Heap - a data structure that is used for storing objects and functions.

dynamic memory allocation - the opposite of allocating a fixed amount of memory, instead, more space will be allocated as needed.  Size is known at run time.

pointer or reference

pass by reference

- **EcmaScript** is a JavaScript standard meant to ensure interoperability of web pages across different web browsers.  The sripting language was created to standardaize JavaScript.  

    * ES6 was released in 2015 and introduced:
        * new primitive data type, `symbol`
        * new variables `let` and `const` 
        * arrow functions
        * `for..of` loop
        * default parameters
        * rest and spread operators (...)
        * promises
        * classes
    * ES7 was released in 2017:
        * exponentiation operator
        * `includes()` function
    * ES8 was released in 2018:
        * padstart and padend functions
        * async/await
        * added functions in object class

    It's commonly used for client-side scripting on the WWW and is increasingly being used for writing server apps and services using Node.js.  ES6 

- **Client-Side Scripting** 

- **DOM - Document Object Model**

- **parsed**

- **escapeSequences**
\' => single quote
\" => double quote
\\ => backslash
\n => newline
\r => carriage return
\t => tab
\b => backspace
\f => form feed

- **template literal** - Template literals are a special type of string that make creating complex strings so much easier. Template literals are created by surrounding text between opening and closing backticks (` `). Inside a template literal, you're able to refer to variables or execute code by using `${}`.

- **float**

- **incrementor** `++`

- **decrementor** `--`

- **assignment operator** 
assignment operator:

+= - addition
-= - subtraction
*= - multiplication
/= - division
`variable +=`

- **comparison operators** 
< - Less than
> - Greater than
<= - Less than or equal to
>= - Greater than or equal to
== - Is loosely equal to
=== - Is strictly equal to
!= - Is not loosely equal to
!== - Is not strictly equal to

- **type coercion**

- **expression** - a bit of javascript code that evaluates to a single value

- **initial expression**
- **conditional expression**
- **increment expression**

- **KEY / VALUE PAIRS**

- **GLOBAL EXECUTION CONTEXT** - as soon as we start running our code, a global execution context is created.  This is where we go through the code.

- **LOCAL EXECUTION CONTEXT** - similar to global execution context.  The space where code is executed at a different scope than the global code, such as when a function is called.

- **GLOBAL VARIABLE ENVIRONMENT (GLOBAL MEMORY)** - where variables are stored that are available anywhere

- **LOCAL VARIABLE ENVIRONMENT (LOCAL MEMORY)** - where variables are stored at a local scope.

- **SINGLE THREAD** - JS is *parsed*, or read, one thing at a time. Parsing one thing at a time can be referred to as single thread.

- **SYNCHRONOUS EXECUTION** - executed in order of encountering, line by line from top to bottom.

- **FUNCTIONS** a way of wrapping up some code, _instructions_, to be done later on.  We give it a label and refer to it later on.

- **CALL STACK** 

- **type coercion**

**rubber ducking**

**leaked global variable**

**Blob** - a blob object is a file-like object of immutable, raw data.  Blobs can be read as text or binary data, or converted into a ReadableStream so its methods can be used for processing the data.  _Blobs_ are used in the VCS storage of GitHub (as I saw in a CS workshop).

**Bootstrap time** - refers to the time it takes for an application to load all the auto configures / start-up

**JS Engine (AKA virtual machine)** is the component of the browser that takes your JS code, optimizes and executes it.  They execute code in an environment that is platform-independent, meaning the same JS script can be run on MacOS, Windows, Linux as well as in a browser, or on the desktop with a Node application.

**Garbage Collected**

**REPL (Read Evaluate Print Loop)**

**Declarative vs Imperative** - two different ways of thinking about code
Imperative - you give the computer a set of instructions and the computer does what you want in an easy to follow sequence

Declarative - a process of constantly defining what things are.  Much more intuitive naming process.

**scope** - the area where an item is visible and accessible to other code
**lexical** refers to the definition of things, so anything related to creating words, expressions or variables is termed _lexical_.

**Lexical scope (or static scope)** - the definition area of an expression.  In other words, the place in which the item got created.
```
const myName = 'global scope';
function checkScope(myName) {
    console.log('myName's lexical scope is global scope');
}

function checkScope() {
    const myName = 'local scope';
    console.log('myName's lexical scope is checkScope()'s local environment);
}
```

**User agent** - a computer program represesnting a person, for example, a browser in a Web context.

**DOM - Document Object Model**

**CSSOM - CSS Object Model**

**render tree**

**Defer** is an attribute for the `<script>` tag in HTML.  It is a boolean attribute that, when set, specifies that the script is downloaded in parallel to parsing the page and executed after the page has finished parsing.  

```
<script src="demo_defer.js" defer></script>
```

***NOTE:*** defer is only for external scripts

**hot code** - (or hot code path) are execution paths in your application / compiler in which most of the execution time is spent, and thus which are potentially executed very often.  Possibly named as they run slower and thus "burn" the CPU.

**boilerplate code**

**bootstrap time**

**event loop** - The only job of the event loop is to look at callback queue and once there is something pending in callback queue, push that callback to the stack. The event loop pushes one callback function at a time, to the stack, once the stack is empty. Later, the stack will execute the callback function.

**callback queue** - otherwise known as message queue or task queue, the callback queue is a feature in Javascript (applicable during ansychronous JS) which queues codes that would be called back when the call stack is empty.