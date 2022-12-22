# webpack

Webpack is a static module bundler for JS applications - it takes all the code from your application and makes it usable in a web browser.

Modules are reusable chunks of code built from JS, node_modules, images, and CSS.  Webpack separates and sorts through all this code, and builds a dependency graph to map out which modules are needed by the project.  From this dependency graph, webpack generates one (or more) bundles to be used by the browser.

----------------------------------------------------
## webpack.config.js
----------------------------------------------------
To use webpack properly, we create a `webpack.config.js` file in the root directory of the project (like `package.json`).
The webpack config file is a JS file, that exports a JS object containing all of the configuration info for webpack.

More specifically it is a node script that is exporting a module: `module.exports = {}`

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
1. `mode: 'development'` - optimizes for fast build time and code readability for debugging
2. `mode: 'production'` - optimizes for smallest possible build, resulting in longer build time
3. `mode: 'none'`

**NOTE:** if mode is not specified, webpack defaults to production