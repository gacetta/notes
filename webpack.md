# webpack

Webpack is a static module bundler for JS applications - it takes all the code from your application and makes it usable in a web browser.

Modules are reusable chunks of code built from JS, node_modules, images, and CSS.  Webpack separates and sorts through all this code, and builds a dependency graph to map out which modules are needed by the project.  From this dependency graph, webpack generates one (or more) bundles to be used by the browser.

----------------------------------------------------
## webpack.config.js
----------------------------------------------------
To use webpack properly, we create a `webpack.config.js` file in the root directory of the project (like `package.json`).
The webpack config file is a JS file, that exports a JS object containing all of the configuration info for webpack.

More specifically it is a node script that is exporting a module: `module.exports = {}`

**NOTE:** whenever `webpack.config.js` is updated, `webpack` must be run again.

### BOILERPLATE:
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

`webpack` can be broken down into 5 principals:
- Entry
- Output
- Loaders
- Plugins
- Mode

----------------------------------------------------
### entry
----------------------------------------------------
`entry:` is the entry point for the application. It is the first module that webpack will process to build out the full dependency graph.  It builds this graph by looking at files that are imported into the entry and walking through all imported files until all code necessary to the run the application is accounted for.

The default entry point in modern JS is:
  `entry: './src/index.js'`

Multiple entry points are possible for multi-page applications:
  entry: {
    pageOne: `./src/pageOne/index.js`,
    pageTwo: `./src/pageTwo/index.js`,
    pageThree: `./src/pageThree/index.js`
  }

----------------------------------------------------
### output
----------------------------------------------------
`output:` is where the bundled file(s) are to be written to disk with the name of the file

#### path
the **absolute** path of the output destination.  

We can use node `path` methods here:
`path.join` merges two paths together but it doesn't necessarily return an absolute path
`path.resolve` will always resolve to an absolute path
the Node variable `__dirname` will give us the absolute path of the directory containing the source file that is being executed.

With these methods we get:
const path = require('path')
...
path: path.resolve(__dirname, 'public')

#### filename
the desired name for the output bundled file
*BEST PRACTICE* is to name this file `bundle.js`

----------------------------------------------------
### loaders
----------------------------------------------------
By default, `webpack` only knows how to process `.js` or `.json` files, which can be limiting. 
`Loaders` allow webpack to extend functionality to process other file types by converting them into modules for your application.

`loaders` are specified in the `module:` key under `rules`
 There are 2 configuration options required to add a loader:
 - `test` which identifies file or file types should be transformed
 - `use` which tells Webpack which loader to use in order to transform these files.

  module.exports = {
    output: {
      filename: 'bundle.js'
    },
    module: {
      rules: [{ 
        test: /\.txt$/,
        use: 'raw-loader'
      }]
    }
  }

----------------------------------------------------
### plugins
----------------------------------------------------
`plugins` handle additional tasks that can't be completed by a loader.  Example tasks: bundle optimization, defining environment variables, extracting a style sheet, etc.

For example, here's a plugin setup to generate an `index.html` file for a single page web app:

  plugins: [
    new HtmlWebpackPlugin({ template: './src/index.html' })
  ]

----------------------------------------------------
### mode
----------------------------------------------------
`mode:` tells webpack which configuration and optimizations to use.  Mode triggers specific built-in plugins for webpack that optimize build for the correct environment.

Three modes:
1. `mode: 'development'` - optimizes for fast build time (no file compression) and code readability for debugging
2. `mode: 'production'` - optimizes for smallest possible build, resulting in longer build time
3. `mode: 'none'`

**NOTE:** if mode is not specified, webpack defaults to production

**NOTE:** can also be set in `package.json`, in the calling script: add a `--mode development` or `--mode production` flag.

----------------------------------------------------
### devtool - (source maps)
----------------------------------------------------
since `webpack` bundles multiple modules into a single file, debugging can become difficult due to the trouble in tracking where (what line) the error is on.  

Enter `source maps`.  A source map is a file that maps from the transformed source to the original source, enabling the browser to reconstruct the original source and present the reconstructed original in the debugger

the `devtool:` option in `webpack` controls if and how source maps are generated.

----------------------------------------------------
### webpack dev server
----------------------------------------------------
`webpack` has it's own built in version of `live-server` that we can use while in development.  

`devServer:` sets the options for `webpack-dev-server`, namely where the `public/` folder is located:
`devServer.static.directory`


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

