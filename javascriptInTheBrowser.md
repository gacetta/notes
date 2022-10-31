# JavaScript in the Browser

To access a JS file from an HTML document, it requires a `script` tag with the `src` attribute

  <script src="javascript-file.js"></script>;

**NOTE:** if using the `src` attribute, there should be no code between the `script` tags
**NOTE:** `script` tag should be at the bottom of the HTML document to allow the JS file access to all the HTML code

---
## DOM (Document Object Model) Manipulation
---
The DOM is a way of referencing an html document from a js document.  It uses the syntax `document` 

`querySelector()` searches DOM for a single certain element. `document.querySelectorAll('query')` would search the html document for every instance of <'query'> elements. 'query' might be "p" or "body" or any other tag type

Once `querySelector()` has found an element, we can then use a method on that element such as `remove()` which deletes the targeted element

Basic DOM manipulation is a two step process that involves:
1. selecting an element 
2. then performing an action on it.

---
### removing element
---
select element (for instance, the first <p> tag):

  `document.querySelector('p');`

remove element:

  `p.remove();`

---
### adding elements
---
create a new element:

  `const newElement = document.createElement('p');`

update text content:

  `newElement.textContent = 'this is some new text';`

use `appendChild` to add new element.  This will append the new element to the very end of the area that we choose to add it.
The following selects the body element in the DOM, then adds our new element to the end of <body>:

  `document.querySelector('body').appendChild(newElement)`;

---
### handling user interaction
---
* An **Event** is something the user does such as click a button, hovering over a link or scrolling on the screen.  All of these evenets you can attach event listeners to.
* An **Event Listener** is a function to run when the event happens.
    * a method. `.addEventListener('event', function)`  
     `event` is the event to listen for (_always a string_)= 'hover', 'click', 'dblclick', etc. 
     `function` is the function to run when `event` occurs
* function often uses the `e` variable (for event).  (e) => {}
* `event.target` is a useful way to target the element that the event is occuring on.
* Most straightforward example = when someone clicks a button, run this function.

---
### selecting elements with more precision
---
We can target multiple elements of the same type using bracket notation.  
Lets say we have two buttons and we want to target the second one.  We use bracket notation after the `querySelector` and use array indexing

  document.querySelector('button')[1]

This can become an issue if the HTML is altered so there's a better way!

---
### IDs and Classes
---
Once a tag has an ID, we can select it using the `#id-name`

  document.querySelector('#id-name');

Once a tag has a class, we can select it using the `.class-name`

  document.querySelectorAll('.class-name')

***Creating and accessing IDs and CLASSes is the same in CSS***
// Syntax for searches

//-- Single--
// p                        //Searches for <p>
// #replace                 //Searches for id="replace"
// .item                    //Searches for class="item"

// -- Multiple --
// p#order                  //Searches for <p id="order">
// button.inventory         //Searches for <button class="inventory">
// h1#title.application     //Searches for <h1 id="title" class="application">
// h1.application#title     //Searches for <h1 class="application" id="title">

---
### Live Filtering
---

To allow a user to filter a list and see results in realtime, involves several steps:
1. create filter object
2. create input field - store the value in the filter object
3. Create a Div with a specific ID that allows for querySelection of the Div
4. Create a function that filtersNotes 
      const filteredNotes = notes.filter((note) => {
            return note.title.toLowerCase().includes(filters.searchText.toLowerCase());
      })
5. Clear the div using `div.innerHTML = ''`
6. Render the notes:
      filteredNotes.forEach((note) => {
          const newNote = document.createElement('p');
          newNote.textContent = note.title;
          document.querySelector('#notes').appendChild(newNote);
      })  



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