# UI - Templates and Directives

application has data

pixels on the screen are not data.  They are just pixels / lights on the screen.  The actual data is stored in your computer.

inconsistency between display info and actual data is the UI nightmare (think key main and key backup out of sync)

maintaining consistency between the UI and the data is profoundly difficult

The pixels wwe see (the structure of the page) is stored at any given time at a different environment to the code to where we save our data.

Data (DOM) is stored in a different environment from our javascript which is in charge of our view.
(preserved/held in storage in a DOM - Document Object Model (an environment/runtime which is created in Cpp aka C++))

**Everything you do is designed to try to make your life easier as a developer**

HTML: adding element to page = easy and intuitive, NOT dynamic
JS: adding element to page = difficult and involved, IS dynamic

--------------------
## Templating
--------------------
- UI is the essence of our experience of technology
- Rests on the deceptively simply challenge of maintaining data & view consistency.
- React will give us a set of tools to handle many of the challenges of complex UIs

--------------------
## HTML + DOM
--------------------
1. provide html code
2. each command tells HTML parser to add something to DOM (a C++ object)
3. DOM is then rendered to screen

HTML is painted to the page and cannot be changed
JS allows us to change the data on the page

JS can control pixels before even accessing the DOM with `requestAnimationFrame()`?

----------------------
## JS Dom manipulation
----------------------
```
let likes = 0
const element = document.createElement('p')
element.innerText = likes
const root = document.body
root.append(element)
```

`document.createElement('p')` - doesn't go to JS callStack.  Instead ports to DOM and creates an element in the Unattached elements part of DOM.  The output is a link (or reference) to the created element (not the element itself).

what is returned from document.createElement() 
= empty object {} with hidden property [[hostDefined]]
that object is linked to an object with innerText method 

----------------------
## creating a function to simplify JS DOM manipulation
----------------------

will@codesmith.io

if we don't store `document.createElement('p') in a variable, what happens to the newly created element?  Since we don't have a reference to it, is it deleted or is it still stored somewhere in memory bu inaccessible?