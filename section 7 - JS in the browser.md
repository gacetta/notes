### HTML

define document type in index.html file.    

`<!DOCTYPE html>` at the top of the doc

HTML = tags.  `<html>` opens `</html>` closes  
* No console in browser
    * for `console.log()` to run, you need to open developer tools to see an output
    * you don't want to mix JS and html in the same document when possible
        * to do this create a separate .js file.  
        * tags can be customized with **attributes**
        * to access a .js file in the same folder as the .html use `<script src="file-PATH">`.  If using the `src` attribute, there should be no script embedded in the `<script>` tags

* **DOM or Document Object Model** is a way of referencing an html document from a js document.  uses the syntax `document` so something like `document.querySelectorAll('query')` would search the html document for every instance of <'query'> elements. 'query' might be "p" or "body" or any other tag type

    * `appendChild('new element')` is a method for adding a new element to the end of the contents of a pair of tags in an html document from javascript

### Event Handlers
* An **Event** is something the user does such as click a button, hover over a link or scrolling on the screen.  All of these evenets you can attach event listeners to.
* An **Event Listener** is a function to run when the event happens.
    * a method. `.addEventListener(arg1, arg2)`  
     `arg1` is the event = mouseUp, Click, Hover, etc.
     `arg2` is the function to run when `arg1` occurs
* Most straightforward example = when someone clicks a button, run this function.

### ID attribute in HTML
* An **ID attribute** is a unique name that can help identify an element in HTML.
    * no two element tags should have the same ID, even if they're different element types.
    * helps identify different buttons, for example
    * <button id="remove-all"> ID names can contain no spaces and common practice is to separate words by hyphen.
    * to search for an id attribute, use `.querySelector()` (cause there should be only one instance of an id attribute) and search for an `'#id-name'`

### Classes
* classes are another method of organizing elements in HTML.  
    * multiple items can share the same class, and thus the same formatting, eventListeners, etc.
    * `<p class="class1">` is the syntax for defining one class.
    * a single item may have multiple classes.  They are all contained within the quotes, separated by a single space.  For examply, `<p class="class1 class2">`
    * to serach for a class attribute, use `.querySelectorAll()` (since there are likely multiple instances of the same class attribute), and search for a `.class-name`

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

### input element
* an input element is known as an empty element.  It does not take something between two tags like a `<p>` tag or `<h1>`.
    * the syntax: `<input>` defaults to `type="text"`
    * other types: password, range, month, radio, checkbox, etc.

* types of events: 
    * `'click'` - when a button is clicked 
    * `"change"` - when the cursor is moved and the selected item is _changed_
    * `'input'` - new event with each new character added or removed from text field
    * `'hover'` - when mouse is hovering over an item

* placeholder attribute allows to store something in a field when there is no value

`<div>` stands for content division.  The most common HTML tag  

`innerHTML` accesses everything between two element tags.  

### form element
a way to encapsulate a bunch of different inputs.  the addEventListener type will most usually be 'submit' for forms

### select element
* can be used to create dropdown menus.  Each different element of the dropdown menu is contained in `<option> tags
* the `value=""` attribute is a good practice for naming each option.  
Here's an example of using `<select>` and `<option>`tags to create a dropdown menu:

```

    <select id="filter-by">
    <option value="byEdited">Sort by last edited</option>
    <option value="byCreated">Sort by recently created</option>
    <option value="alphabetical">Sort alphabetically</option>
    </select>`

```
