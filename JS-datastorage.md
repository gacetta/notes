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

---
## dealing with time in JS
---
The function in JS that we use for time is `Date()`.  It requires the `new` keyword when called.

    const now = new Date();
    const timestamp = now.getTime();

    const myDate = new Date(timestamp);
    console.log(myDate.getFullYear());

There are many different methods we can use on `Date()`.  Some of the most useful:
// console.log(`Year ${now.getFullYear()}`);
// console.log(`Month ${now.getMonth()}`);
// console.log(`Day of month ${now.getDate()}`);
// console.log(`Hours ${now.getHours()}`);
// console.log(`Minutes ${now.getMinutes()}`);
// console.log(`Seconds ${now.getSeconds()}`);

## Timestamp
Although referring to a date in `day, month, year` format is easy for humans to read, it's easier to reference a time as a single number.  This allows us to easily compare dates.

A single number representation of a `Date()` is often called a `timestamp`.  We can get a numeric representation using `Date().getTime()`

Representing `Date()` as a single number in JS is a reference to the Unix Epoch - January 1st 1970 00:00:00
* 0 represents the exact time of the Unix Epoch
* positive numbers represent times post Unix Epoch (such as todays date)
* negative numbers represent times before Unix Epoch (such as WWI)
* the number is a representation in milliseconds.  AKA, it big.

An example of how two `Date()`s can be compared 

    const date1 = new Date('August 6 1984 08:30:06');
    const timestamp1 = date1.getTime();
    console.log(timestamp1);
    const date2 = new Date('August 17 1986 08:30:06');
    const timestamp2 = date2.getTime();
    console.log(timestamp2);

    if (timestamp1 < timestamp2) {
        console.log(date1.toString());
    } else {
        console.log(date2.toString());
    }

console.log(`Year ${now.getFullYear()}`);
console.log(`Month ${now.getMonth()}`);
console.log(`Day of month ${now.getDate()}`);
console.log(`Hours ${now.getHours()}`);
console.log(`Minutes ${now.getMinutes()}`);
console.log(`Seconds ${now.getSeconds()}`);

* `.getTime()` converts a date to a number in milliseconds.  The Unix Epoch is January 1st 1970 00:00:00.  Any time before that will be a negative number and any time after will be positive

---
### moment
---
reference: https://momentjs.com/

`Date()` is clunky.  The third party library `moment()` helps address issues.

* `moment()` acts like `date()` though it has a bunch of different methods available.  Check out momentjs.com
    * `moment().second(Number)` - with an argument, `.second()` or `.seconds()` sets the seconds.  Without an argument, `.second()` returns the value for seconds.
    * `.minute()` or `.minutes()`
    * `.hour()` or `.hours()`
    * `.hour()` or `.hours()`
    * `.date()` or `.dates()`
    * `.week()` or `.weeks()`
    * `.month()` or `.months()`
    * `.year()` or `.years()`
* setting a timestamp: `.moment().valueOf()` will output the number of milliseconds since the Unix Epoch just like `Date#valueOf`

