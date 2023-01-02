# Babel

Babel is a compiler that takes JavaScript code and compiles it for compatability across browsers.
Documentation here: https://babeljs.io/

## Setup

1. set up git
2. `npm init -y` 
3. `npm i -D live-server @babel/cli @babel/core @babel/preset-env @babel/preset-react`
4. `babel source.js -o output.js --presets=@babel/preset-env`

1. `npm init -y` to create `package.json` file
2. `npm install @babel/preset-env` installs babel preset which specifies what modifications babel should make to the file. 
3. To run `babel` through CLI, you need a source file and output file name:
`babel source.js -o output.js --presets=@babel/preset-env`

---
## webpack
---
current build process:
`index.js` - code we write
    |
    V
`Babel` - convert modern JS to work everytwhere
    |
    v
`bundle.js` - code browser runs (**NOTE:** naming convention for this file)

Introducing webpack
`index.js` - code we write
    |
    V
`Webpack` - 1. Enable modules 2. Run babel
    |
    v
`bundle.js` - code browser runs (**NOTE:** naming convention for this file)