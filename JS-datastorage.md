# Data Storage in JavaScript
---
**CRUD OPERATIONS** = mnemonic for 4 data storage mechanisms.  
1. Create
2. Read
3. Update
4. Delete

`localStorage` is a read-only property of the `window` interface.  Data can be stored here that won't get lost when a web page is reloaded or closed.  Only stores strings.  
Includes all the CRUD operations:
* CREATE - `localStorage.setItem('keyName', 'keyValue');` has two parameters - a key name and a key value;
* READ - `localStorage.getItem('keyName');` takes one argument, a key name, and returns the corresponding keyValue
* UPDATE - use `.setItem()`
* DELETE - `localStorage.removeItem('keyName');` takes one argument, a key name, and deletes the key:value pair.
    * additionally, `localStorage.clear();` has no parameters and deletes all stored data.

* **JSON** - JavaScript Object Notation.  Used for converting an object to a string and back.  This is useful for `localStorage` which only accepts strings
There are two methods we use:
1. `JSON.stringify(obj);` which takes an object as an argument and converts it to a string.  Double quotes only are allowed in this string so any single quotes will be converted.
```
const user = {
    name: 'Michael',
    age: 37
}
const userJSON = JSON.stringify(user);
console.log(userJSON); //{"name":"Michael","age":37}
localStorage.setItem('user', userJSON);
```
2. `JSON.parse(string);` which takes a string as an argument and converts it to an object.  

**refactoring** - the process of restructuring your code without changing it's external behavior

The goal of refactoring isn't to reduce the code to as few lines as possible.  The goal is to take existing features and break them out into something more reasonable that can easily be understood at a glance.

---
## referencing multiple .js files in an html doc
---
1. all files share a single global namespace.  a variable defined in one file may be accessed by a different file.  Remember .js files are read in order so the latter of two files may access variables from the former.  However, the former will not have access to variables from the latter file as that script has not been parsed yet.

---
## debugging
---
using `console.log()` does work but there's a better way!  

Use `debugger;` statement!  
* **Only** When dev tools are open, a browser will parse through the code until it reaches `debugger` at which point it will pause, allowing you to investigate variable values and troubleshoot your code easier than 
* more than one `debugger` statement can be used to troubleshoot multiple spots

---
## more HTML tags
---
* `<p>` elements will always create a new line
* `<span>` is an element that can be created to help move items around (such as in place of a `<p>` tag to eliminate the new line)
* `<a>` anchor element is a place for a link.  Often has an attribute to direct to the link.  `<a href="http://www.google.com">`
* `<textarea>` creates an empty editable text box

---
## setAttribute
---
* when we create a new element in the DOM, we can also assign it attributes, such as `type="text"` or `placeholder="typeHereDummy"`.  To do so we use `nodeName.setAttribute('attributeName', 'attributeValue').  So to create a checkbox we could use the following code:

//creates a new `<input>` element in DOM  
`const checkbox = document.createElement('input');`  

//assigns `<input type="checkbox">`  
`checkbox.setAttribute('type', 'checkbox');`          

---
## location global variable
---
* similar to `document`, `location` is a global object that represents the URL of the object it is linked to.
* can use `location.assign` to direct an html document to a new page

---
## window global variable
---
* similar to `document` and `location`, `window` is a representation of the browser window.  It allows us to check `window.innerHeight` or `window.innerWidth` for example.
* `window` acts as a sort global variable.  So adding a `click` event listener to window would respond to clicking anywhere (globally)

---
## Syncing data across pages
---

* there are certain event listeners that don't make sense attached to a visual elements on the page, such as watching localStorage for changes.  Instead we can attach them to window as a whole and think of it as a way to attach a global event
* new type of `addEventListener` = `'storage'`.  It fires whenever there is a change to localStorage.  T
    * ***NOTE*** the 'storage' listener will not fire on the current page.  If there are 2 tabs open, it will not fire on the current page, but will fire on the other open tabs.

