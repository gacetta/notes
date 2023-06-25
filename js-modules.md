# JS Modules
modules refers to breaking up a single JS file into multiple parts (or modules).  Kind of like making chapters in a novel.  This has numerous benefits such as readability, maintainability, namespacing and resuability.  

We achieve this multi-js-file-structure with the use of `import` and `export`.  It takes some setup, but is worth the trouble in the end.

----------------------------
## specifying paths in JS
----------------------------
**relative path** is appended to the path of the current directory, (as stored in the globally available `current` property of the Folder class). It starts with a folder or file name, or with one of the special names dot (`.`) for the current directory, or dot dot (`..`) for the parent of the current directory. A slash (`/`) separates path elements. 

For example, the following paths describe various relative locations for the file myFile.jsx:
myFile.jsx          In the current directory
./myFile.jsx        In the current directory (different notation using `./` to specify current dir)
../myFile.jsx       In the parent of the current directory. (using `../` to move up a dir)
../../myFile.jsx    In the grandparent of the current directory. (using `../` twice to move up 2 dir)
../dir1/myFile.jsx  In dir1, which is parallel to the current directory.

**NOTE:** `~` can be used to represent user's home directory

----------------------------
## import
----------------------------
`import` is used to import functionality between js files.  Functionality must also be `exported` from target js file.

WAYS TO USE `import`:
- to import multiple items (no default export) `import { func1, func2 } from './file-name` 
- to import single default item `import defaultFunc from './file-name'`
- to import default and named items `import defaultFunc, { func1, func2 } from './file-name'`

**NOTE:** we can leave off the `.js` from the file name.  `import './file-name` is the same as `import './file-name.js`

**NOTE:** we can link to other js files to run their code but not share functionality across files.
at the top of a JS document, link other .js docs using `import 'path/file-name` 

----------------------------
## export
----------------------------
`export` is used to export functionality between js files.  Functionality can then be imported with `import`

WAYS TO USE `export`:
- named export - as many exports as we'd like `export { func1, func2 }`
- default export - maximum one default export `export { only1Func as default }`
- default and named exports - `export { func1, func2, func3 as default }` // func1, func2 are named exports. func3 is default export
- inline named export - `export const namedFunc = (x) => x % 2 === 0`
- inline anonymous default func - `export default (x) => x % 2 === 0`

Which export to use?
- if a file has one large function, default export
- if a file has a bunch of smaller functions, named exports

----------------------------
## using 3rd party libraries
----------------------------
to use an npm library, reference the documentation to understand installation, importing and usage.

### importing
After installing library, `import` the module providing name rather than a directory.  `webpack` will search for a module with the same name in the `node_modules/` folder

Example: `import validator from 'validator'`

-------------------
## Module Pattern
-------------------
Before there were modules, there was the `module pattern`

### Scope
// Global Scope
  // Module Scope
    // Function Scope
      // Block Scope - let and const

Important not to pollute global scope, so module scope can be used to share variables between functions.  

Module scope allows us to be explicit: In Module 1, I want to export these functions / variables.  In Module 2, I want to import this function from this other module.

### Module Scope
IIFE - immediately invoked function expression
essentially a function as a module

```
var fightModule = (function() {
  let harry = 'potter'
  let voldemort = 'he who must not be named'

  function fight(char1, char2) {
    var attack1 = Math.floor(Math.random() * char1.length);
    var attack2 = Math.floor(Math.random() * char2.length);
    return attack1 > attack2 ? `${char1} wins` : `${char2} wins`
  }
  return {
    fight: fight
  }
})()
```

now we have access to fight via the fightModule.  Trying to run fight() will result in an error whereas fightModule.fight() will run properly;

### pros and cons of module pattern
PROS:
- only revealing what we want to reveal
- lower dependencies: rather than look up the scope for information, we import what we need and don't modify outside of our scope

CONS:
- technically still polluting global namespace: fightModule is a global variable.  While we've minimized number of global variables, we can still have name clashes.
- we don't know all the dependencies, AKA the order of the script tags matters.

-------------------
## CommonJS and AMD
-------------------
`CommonJS` and `AMD` or `Asynchronous Module Definition` were the next step after the `Module Pattern`.  They help solve the problem of interfering with the global scope.

### CommonJS
This pattern is still utilized by NodeJS and is one reason Node became so popular.  It made code very easy to share in Node.  `NPM` is a result of the simplicity of sharing code and has grown in popularity.

```
const module1 = require('module1');
const module2 = require('module2);

function fight() {

}

module.exports = {
  fight: fight
}
```

### Browserify
CommonJS Modules are meant to be loaded synchronously, which can result is slow load times.

Browserify is a module bundler.  It will read all the scripts in the project, resolve dependencies and bundle them in one place, `bundle.js`.

`Webpack` also handles module bundling.

### AMD
Designed specifically for broswers.  It loads scripts/modules asynchronously .
While it may not seem familiar, a library that helped used AMD may be: `Require.js`.  
```
define(['module1', 'module2'],
  function (module1Import, module2Import) {
    const module1 = module1Import;
    const module2 = module2Import;

    funtion dance() {

    }

    return {
      dance: dance
    }
  }
);
```

### UMD
Due to a lack of standardization, CommonJS and AMD were both methodologies of accomplishing the same task.  So to share code on NPM, now it was necessary to have two versions of the code for best compatibility.

`UMD` - `universal module definition` tried to solve this problem.  It was essentially an if/then statement to determine if CommonJS or AMD was needed, and then it would just load the correct version of the code.  It didn't solve the core problem.

--------------
## ES6 Modules
--------------
JavaScript has grown into a much more powerful language than it was initially designed for, and thus, the need for a standardized way to import and export became necessary.



```
import module1 from 'module1'
import module2 from 'module2'

export function jump() {

}
```

and in `html` file, scripts must be defined as:
`<script type='module' src='./script.js></script>`

Additionally, these modules must be served from a server (not running in Node)