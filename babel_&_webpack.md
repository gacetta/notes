# Babel

Babel is a compiler that takes JavaScript code and compiles it for compatability across browsers.
Documentation here: https://babeljs.io/

1. `npm init -y` to create `package.json` file
2. `npm install @babel/preset-env` installs babel preset which specifies what modifications babel should make to the file. 
3. To run `babel` through CLI, you need a source file and output file name:
`babel source.js -o output.js --presets=@babel/preset-env`

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
2. When I `npm run dev-server` it runs the `webpack-dev-server` `module` (is that the correct terminology?) which in turn accesses `webpack.config.js` to know what it should do.
3. In `webpack.config.js` many things happen:

Access Node.js utilities
  - First we access the `node:path` Node.js module which gives us utilities for working with file and directory paths - such as `__dirname` (all lowercase unlike JS camelCase variables)

Webpack Export Settings
  - we use `module.exports` to configure options for exported compiled files (??)
  - `entry`: tells webpack where the source file is. 
  - `output`: tells webpack where to save the compiled output file (and we give it a name since it defaults to main.js I think?

Module handling
  - `module`: tells webpack how to handle each module
  - `module.rules` - an array of rules that are applied to each module.  A rule has three parts: conditions, results and nested rules. 
  - `module.rules.test`- says “apply these rules only to modules that pass this test”.  In our case, we only want to apply babel to our .js files.
  - `module.rules.exclude` - says “do not apply these rules to any modules that pass these conditions”. In our case, we don’t want to do anything to the files in the node_modules folder.
  - `module.rules.use` specifies what loader to use.  Here, we want to run our code through babel to increase the browser compatibility.  We also know that babel requires a preset so we specify that in  `module.rules.use.options`

Webpack-dev-server handling (devServer:)
  - `devServer.watchFiles: []` - specifies which files dev-server will watch for changes and live update (like live-server).  In this case I specified index.js since that is linked to all my other .js files using import and export.  Not 100% sure I needed this, but it’s working…
  - `devServer.static.directory` - specifies the directory of the static files.  In this case it’s my index.html file since that isn’t being modified by JS and thus, is static.
  - `devServer.compress` - compresses file?  Not 100% sure but some help I found included it so why not.  It works….
  - `devServer.port` - I’m setting a port for devServer to serve the site to.  That way I can access it in my browser
  - `devServer.devMiddleware.publicPath` - THIS WAS KEY.  Since webpack-dev-server stores the updated compiled file in memory (rather than writing it to disk where we specified in ouput), this tells webpack-dev-server where to look for the updated compiled file.  So rather than access the bundle.js file in the local directory on the computer, it accesses it via the file that is served from memory via express.

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

### configure webpack
---
the file `webpack.config.js` must reside in the root directory of your site.

`Node.js` is used for configuration so some boilerplate code:

```
const path = require('path')

module.exports = {
  entry: './src/index.js',
  output: {
    path: path.resolve(__dirname, 'public/scripts'),
    filename: "bundle.js"
  }
}
```

  `entry` is the source file
  `output.path` is the location out of the output file
    `__dirname` is from node.js and is an environment varialbe that tells you the absolute path of the directory containing the currently executing file
    `path.resolve` is a node function that concats `__dirfile` with the remaining path.
  `output.filename` - sets the output filename