# JavaScript in the Browser

To access a JS file from an HTML document, it requires a `script` tag with the `src` attribute

  <script src="javascript-file.js"></script>;

**NOTE:** if using the `src` attribute, there should be no code between the `script` tags
**NOTE:** `script` tag should be at the bottom of the HTML document to allow the JS file access to all the HTML code

---
## DOM (Document Object Model) Manipulation
---
The DOM is a way of referencing an html document from a js document.  It uses the syntax `document` 

`querySelector()` searches DOM for a certain element. `document.querySelectorAll('query')` would search the html document for every instance of <'query'> elements. 'query' might be "p" or "body" or any other tag type

Once `querySelector()` has found an element, we can then use a method on that element such as `remove()` which deletes the targeted element

Basic DOM manipulation is a two step process that involves selecting an element and then performing an action on it.

---



Data Storage needs to do the 4 **CRUD** operations = `create`, `read`, `update` and `delete`.

## Under The Browser Hood

two most important parts of the browser are the JS engine and a rendering engine.

**Rendering Engine**
`Blink` is a rendering engine responsible for the entire rendering pipeline.  That includes: DOM trees, styles, events, and V8 integration.  It parses the DOm tree, resolves styles, and determines the visual geometry of all the elements.

**JavaScript Engine**
The JS engine executes and compiles JS into native machine code.  Each browser has it's own JS Engine.
Chrome uses `V8`, Safari uses `JavaScriptCore`, Firefox uses `SpiderMonkey`.

1. JS Engine downloads source code.
2. Parse the code - change the code in a way that the compiler can understand
  - `Scanner` converts JS file into a list of known `tokens`
  - `Parser` takes that list and creates an Abstract Syntax Tree (AST).  The AST is a representation of the source code.  Each node of the tree denotes a construct occurring in the code.

Example:

  function foo() {
    let bar = 1;
    return bar;
  }

results in:

                                ------------
                                | function  |
                                | literal   |
                                ------------
                                     |
                                     v
                                ------------
          --------------------- | block    |-----------------
          |                     ------------                |
          |                          |                      |
          v                          v                      v
      ------------              ------------           ------------
      | variable  |             |assignment |         |  return   |
      |declaration|          |--|           |--       | statement |
      ------------           |   ------------ |        -----------
          |                  |                |            |
          v                  v                v            v
      ------------     ------------    ------------    ------------
      | variable  |   |variable   |    |  literal  |   | variable  |
      |  proxy    |   | proxy     |    |           |   | proxy     |
      ------------    ------------     ------------    ------------

In laymans terms from (root, left, right):
1. Define the `foo` function
2. declare the `bar` variable
3. assign `1` to `bar`
4. return `bar` out of the function

`VariableProxy` is an element that connects the abstract variable to a place in the memory.  The process of resolving a `VariableProxy` is called **Scope Analysis**

In the example above, all `VariableProxy`'s point to the same `bar` variable.

## Just In Time Paradigm

Languages need to be compiled to be run by the machine.  
1. Ahead-Of-Time compilation: performed before running the program and results in faster, more efficient code
2. Interpretation: each line of code is executed at runtime.
3. **Just-in-Time (JIT) compilation**: combines both.  The JS Engine can detect functions that are used more frequently and compile them using type information from previous executions.  It's possible the type might change, then we need to `de-optimize` compiled code and fall back to `interpretation`.  Then we can `recompile` as needed.

V8 uses an interpreter called `Ignition`, which takes the AST and generates byte code.  This byte code instructions also has metadata which is helpful for debugging.

Generating Bytecode from the above 

    LdaSmi #1 // write 1 to accumulator
    Star r0   // read to r0 (bar) from accumulator 
    Ldar r0   // write from r0 (bar) to accumulator
    Return    // returns accumulator

***THIS IS TOO IN DEPTH AT THE MOMENT - TO CONTINUE VISIT THIS LINK*** https://www.freecodecamp.org/news/javascript-under-the-hood-v8/