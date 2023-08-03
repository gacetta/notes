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
a npm package that helps handle arguments.  For it to work, we must access the `argv` property on yargs.  `console.log(yargs.argv)`.  A better way is to use `yargs.parse()`

rather than access arguments with `process.argv`, now we can access them via `yargs.argv`

**Setup first arg to be a command**

  yargs.command({
    command: 'add',
    describe: 'Add a new note',
    handler: function () {
      console.log('adding a new note')
    }
  })

**Adding a title argument**
use `builder:`   The following configs the building of --title as a required value of type string:

  yargs.command({
    command: 'add',
    describe: 'Add a new note',
    builder: {
      title: {
        describe: 'Note title',
        demandOption: true,
        type: 'string'
      }
    },
    handler: function (argv) {
      console.log('title:', argv.title)
    }
  })

---
## File System
---
*Writing*
`file_system.writeFileSync('output-file-name.json', 'data')` to write a new file

*Reading*
`file_system.readFileSync('file-name')` to read a new file.  

**NOTE:** returns a buffer.  To parse as a string use `buffer.toString()`


---
## storing data with json
---
we can use the file system functions to store our data as a json object in a separate file.

---
## debugging in node
---
Two types of errors:
1. When things go wrong and there is an explicit error message
2. When things go wrong and there is no error message

we can add `debugger` into our code but for node to recognize it we need to tell it to look using `inspect`:  The CLI: `node inspect file-name (etc.)`

When we run `node` with `inspect` and it finds a `debugger`, it stops the code.

We can inspect it using the chrome browser (since Node uses V8 and so does chrome).  Go to chrome://inspect and click on `inspect` under the REMOTE tab.

If we step through our program and still want to continue debugging, just type `restart` in the terminal.   CLI: `debug> restart`

-----------------------
## Node Version Manager
-----------------------
Node Version Manager (nvm) is a tool for managing Node versions on a device.

### install Node versions
`nvm install latest` - install the latest version of Node
`nvm install vX.Y.Z` - install Node version `X.Y.Z`
`nvm install carbon` - installs v8.16.2, the latest release of the Carbon LTS line

### list available versions
`nvm ls-remote` - *NOTE:* long list

### list installed versions
`nvm ls`

### set default version
`nvm alias default vX.Y.Z` - set a version to default

### switch to another version
`nvm use vA.B.C`
`nvm use node` - switch to the latest installed version
`nvm use --lts` - use the latest LTS verion

*NOTE:* `LTS` means "long-term support" 

## File Uploads
Node does not (?) handle file uploading on its own.  

### Multer
Use npm package `multer` to handle file uploads.

various settings to consider:
`dest` - file destination
`limits.filesize` - limit the file size in bytes, 1000000 = 1MB
`fileFilter(req, file, callback)` - to filter allowable file types

## Images

### Sharp
Use npm package `sharp` to handle image cropping and resizing in node

## Emails

### Sendgrid