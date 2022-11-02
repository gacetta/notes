# Libraries

**Third party libraries** are JS code that somebody else wrote. By introducing third party libraries to our code, it provides more functionality to solve specific problems.

For Example, in a todo app, we need to generate a unique ID for each new todo to make each not selectable.  It's a common requirement for code, so we can search for a library that has already "solved that problem" and use their pre-written code.

We link to third party libraries just like we link to JS files in our html.  

`<script src="third-party-library-url"></script>`

Now we have functionality provided by that library in our js files.  `thirdPartyFunc()`
**NOTE:** remember to place third party script elements before any files that require access to the contents of that library!