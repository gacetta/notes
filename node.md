# node.js
From the old site:
Node.js is a JavaScript runtime built on Chrome's V8 JavaScript engine.  Node.js uses an event-driven, non-blocking I/O model that makes it lightweight and efficient.  Node.js' package ecosystem, npm, is the largest ecosystem of open source libraries in the world.

Node.js is a runtime environment for javascript built on Chrome's V8 JS engine.  When it was introduced in 1995, Javascript could only be run inside a browser, which limited its functionality to client-side use.  In 2009, Node.js was introduced which allowed for Javascript to be run outside of a browser.  This provided the ability for javascript to be used server-side as well.

Node.js is not a language.  Inside the node environment, we will be running JavaScript code.

---
## node vs browser
---
both node and browser create a runtime environment for JS and are built using C++  

They both also provide extra external functionality to JS, such as DOM manipulation, web API for browsers and file structure and OS information for node.  This functionality is not part of JS, instead the runtime environment handles it

Each runtime has access to different items:
BROWSER:
- document  (The DOM tree)
- window    (the browser window on which the DOM tree is rendered)

NODE:
- global    (The global namespace object)
- process   (The process object provides information about, and control over, the current Node.js process.)

---
## why node
---
because node uses a non-blocking I/O model, it's fast and efficient which is useful for backend work.

---
## require
---
we need to load in functionality before using them
the `require()` function in node does this for us.

`const fs = require('fs');`

We can load in our own files by specifying a path name:

`require('./utils')` will load in and run the utils.js file.  The file-path is required to specify where our path is in relation to the current file. `./` means the directory of the current file.

---
## exports
---
pre ES6, to export funtionality we can use `module.exports`

 `module.exports = funcOrVariableName`

 we then store that export in the function that is accessing it:

 `const funcOrVariableName = require('filePath')`

 ---
 ## importing npm packages
 ---
 create a `package.json` file by running `npm init` from the project folder.  (OPTIONAL use the `-y` to generate it without having it ask any questions:)

 install a given package by running `npm install <package-name>` or `npm i <package-name>` for short.  
 OPT flags: 
 `--save-dev` to save in `devDependencies`
 `--save` to save in `dependencies` (default)
 `<package-name>@versionNumber` to install specific version

 **NOTE** the contents of node_module folder are downloaded when we run `npm install`.  The computer knows what to install based on the configuration of `package.json` file.  It's a good idea to add `node_module` to the `.gitignore` global file.

---
## nodemon
---
npm package to run node and continuously watch for changes in your .js file

---
## passing variables into node
---
on the node process object, we have access to process.argv.

the first two arguments are always provided:
- the first: the path to the location of node on your machine
- the second: the path to the .js file you're executing

This means we can pass arguments in on the CLI when running node:

`node app.js Michael` passes a third argument, 'Michael' that is accessible using `process.argv[2]`

---
## yargs
---
