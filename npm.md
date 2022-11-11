# NPM

`npm` = node package manager

in the folder of your project:

1. `npm init` which initializes the project and creates a `package.json` file.
2. `npm install node-sass --save-dev` to install node-sass and save it as a development dependency.  This will update the package.json file (which has all the info from the `npm init` step).  By saving that info in the `package.json` file, it allows us to share our project without sharing the entire node-modules folder.
3. To share our project with someone, share the appropriate files, including `package.json`, but NOT the `node-modules` folder.  The user can run `npm install` to download all necessary files based on the `package.json` information.


---
## Implementing Sass into our workflow
---
in the package.json file.  Update scripts:

"scripts": {
    "compile:sass": "node-sass sass/main.scss css/style.css"

This is writing a script called compile:sass.  It specificies the name of the package, `node-sass`, then the location of the source file, and the location of the output file.

however, to run the script, we have to use the terminal:

`npm run compile:sass`

To avoid this, we can add a `watch` flag to the end of the script, which tells the script to watch the source file and to run every time the source file is updated.  This is done with `-w`:

"scripts": {
    "compile:sass": "node-sass sass/main.scss css/style.css -w"