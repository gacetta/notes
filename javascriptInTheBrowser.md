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