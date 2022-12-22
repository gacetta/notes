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

Which export to use?
- if a file has one large function, default export
- if a file has a bunch of smaller functions, named exports