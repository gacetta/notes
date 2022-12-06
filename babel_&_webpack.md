# Babel

Babel is a compiler that takes JavaScript code and compiles it for compatability across browsers.  It can be installed with `npm install @babel/core -g`.  also `npm install @babel/cli -g` will install the cli interface

Create a folder for all your source files, such as `boilerplate` in Andrew's class
run `npm init` in the folder to create `package.json` file.

install babel preset which specifies what modifications babel should make to the file.  NOT a global install - this is specific to the local directory (which is why it's good idea to make a folder for source files)
`npm install @babel/preset-env`

You should see a `node-modules` folder and `package-lock.json` file were added.  We should NEVER modify these items.

To run through CLI, you need a source file and output file name:
While in the folder of the source file:
`babel source.js -o output.js --presets=@babel/preset-env`

---
## JS Modules
---

## Using Import in JS
at the top of a JS document, we can link other .js docs using `import 'path/file-name` 
**NOTE:** we can leave off the `.js` from the file name.  `import './utilities` is the same as `import './utilities.js`

## Using Export in JS
to use code from another file, we can use `export` in front of a function name to tell JS that we want that function available to other files.  To use it, however, the `import` implementation must be changed

## alternate import method:
`import { add } from '/utilities`

## two types of export
1. named export - as many exports as we'd like (using `export` in front of function to export)
2. default export - maximum one default export (using `export default`)

## To grab default export
`import default-func, { named-export-1, named-export-2 } from './file'`

## Which export to use?
- if a file has one large function, default export
- if a file has a bunch of smaller functions, named exports

## named exports all in one place

line at the bottom of JS doc
`export { add, name, square as default }` where `add` and `name` are named exports and `square` is the default export

---
## Integrate Babel into webpack
---
we add the following to the `webpack.config.js` file:

we want to include the `babel` MODULE, so we specify `module:`

    const path = require('path')

    module.exports = {
      entry: './src/index.js',
      output: {
        path: path.resolve(__dirname, 'public/scripts'),
        filename: "bundle.js"
      },
      module: {
        rules: [{
          test: /\.js$/,
          exclude: /node_modules/,
          use: {
            loader: "babel-loader",
            options: {
              presets: ['@babel/preset-env']
            }
          }
        }]
      }
    }

---
## webpack dev server
---
Two methods of streamlining our workflow to avoid running `webpack` in the terminal constantly:
1. (5 seconds) - add `--watch` flag to the webpack script in package.json.
2. (5 minutes) - use webpack dev server

---
## webpack example
---
package.json:

{
  "name": "boilerplate",
  "version": "1.0.0",
  "description": "",
  "main": "input.js",
  "scripts": {
    "serve": "live-server public",
    "build": "webpack",
    "build-and-serve": "run-p build serve",
    "dev-server": "webpack-dev-server --open",
    "dev-server2": "webpack serve --open"
  },
  "author": "",
  "license": "ISC",
  "devDependencies": {
    "@babel/cli": "^7.19.3",
    "@babel/core": "^7.20.5",
    "@babel/preset-env": "^7.20.2",
    "babel-loader": "^9.1.0",
    "npm-run-all": "^4.1.5",
    "webpack": "^5.75.0",
    "webpack-cli": "^5.0.0",
    "webpack-dev-server": "^4.11.1"
  }
}

webpack.config.js:

const path = require('path')

module.exports = {
  entry: './src/index.js',
  output: {
    path: path.resolve(__dirname, 'public/scripts'),
    filename: "bundle.js"
  },
  module: {
    rules: [{
      test: /\.js$/,
      exclude: /node_modules/,
      use: {
        loader: "babel-loader",
        options: {
          presets: ['@babel/preset-env']
        }
      }
    }]
  },
  devServer: {
    watchFiles: ['../src/index.js'],
    static: {
      directory: path.resolve(__dirname, 'public'),
    },
    compress: true,
    port: 9000,
    devMiddleware: {
      publicPath: "https://localhost:9000/scripts"
    }
  }
}




My understanding is now this:
1. I created a `script` in `package.json` that calls `webpack-dev-server --open`.  That then runs `webpack-dev-server` which accesses `webpack.config.js` settings. The `--open` flag opens up the project in a new browser window.   **INTERESTING:** I created a second script that calls `webpack serve --open` and that works too.  Seems that those are both ways to call `webpack-dev-server`
When I npm run dev-server it runs the webpack-dev-server module (is that the correct terminology?) which in turn accesses webpack.config.js to know what it should do.
In webpack.config.js many things happen:
Access Node.js utilities
First we access the node:path Node.js module which gives us utilities for working with file and directory paths - such as __dirname (all lowercase unlike JS camelCase variables)
Webpack Export Settings
we use module.exports to configure options for exported compiled files (??)
entry: tells webpack where the source file is. 
output: tells webpack where to save the compiled output file (and we give it a name since it defaults to main.js I think?
Module handling
module: tells webpack how to handle each module
module.rules - an array of rules that are applied to each module.  A rule has three parts: conditions, results and nested rules. 
module.rules.test- says “apply these rules only to modules that pass this test”.  In our case, we only want to apply babelto our .js files.
module.rules.exclude - says “do not apply these rules to any modules that pass these conditions”. In our case, we don’t want to do anything to the files in the node_modules folder.
module.rules.use specifies what loader to use.  Here, we want to run our code through babel to increase the browser compatibility.  We also know that babel requires a preset so we specify that in  module.rules.use.options
Webpack-dev-server handling (devServer:)
devServer.watchFiles: [] - specifies which files dev-server will watch for changes and live update (like live-server).  In this case I specified index.js since that is linked to all my other .js files using import and export.  Not 100% sure I needed this, but it’s working…
devServer.static.directory - specifies the directory of the static files.  In this case it’s my index.html file since that isn’t being modified by JS and thus, is static.
devServer.compress - compresses file?  Not 100% sure but some help I found included it so why not.  It works….
devServer.port - I’m setting a port for devServer to serve the site to.  That way I can access it in my browser
devServer.devMiddleware.publicPath - THIS WAS KEY.  Since webpack-dev-server stores the updated compiled file in memory (rather than writing it to disk where we specified in ouput), this tells webpack-dev-server where to look for the updated compiled file.  So rather than access the bundle.js file in the local directory on the computer, it accesses it via the file that is served from memory via express.

---
## mode option
---
`mode` option is asking to set the use of `webpack` as a developer or production.
- developer doesn't compress files and is much faster since it's used often
- production optimizes files for production, and thus is much slower since it's used much less often

to set:
in `package.json`, in the calling script, add a `--mode development` or `--mode production` flag.

---
## source-map
---
when `webpack` compiles code using babel, it expands the file from the input file, thus errors don't correspond to the correct lines from the input file.  This creates problems while debugging, so adding `devtool: 'source-map'` to the `webpack.config.js` file fixes that issue

---
## third party libraries
---

1. check documentation:
- how to install package (save or save-dev?)
- how to import
- how to call?

---
## semantic versioning
---
semantic versioning  - `major-release.minor-release.patch-release` - e.g. `1.0.0`

**As a publisher of a package**

version should always start a `1.0.0`.  (`0.0.0` is used historically when a package isn’t yet stable for initial release) 

`patch-release`: a change that doesn’t break anything, doesn’t add any functionality.  a minor bug fix
`minor-release`: a change that doesn’t break anything but adds functionality.
`major-release`: a change that breaks things.  A change to the API that is not backward compatible.

**As the user of a package:**

Patch releases only: `1.0.0 -> 1.0.1` but not `1.0.0 -> 1.1.0` ? How to specify in package.json :
- `1.0`
- `1.0.x`
- `~1.0.4` ( (any version compatible with 1.0.4  AKA any version up but not including the next minor update)

Minor releases only: `1.0.0 -> 1.1.0` but not `1.0.0 -> 2.0.0` ? How to specify in package.json :
- `1`
- `1.x` 
- `^1.0.4` (any version compatible with 1.0.4 AKA any version up to but not including the next major update)

Major releases too: `1.0.0 -> 2.0.0`
- `*`
- `x`

https://www.youtube.com/watch?v=kK4Meix58R4

---
## multiple html pages in webpack
---
create a .js page for each .html page.  `index.html index.js` and `edit.html edit.js`

do this with the `entry` and `output` fields of `webpack`

entry: {
    index: ['regenerator-runtime/runtime.js', './src/index.js'],
    edit: ['regenerator-runtime/runtime.js', './src/edit.js']
  },
  output: {
    path: path.resolve(__dirname, 'public/scripts'),
    filename: "[name]-bundle.js"
  },