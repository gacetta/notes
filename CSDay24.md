# Build Tools

Webpack is a module bundler

## Why Build Tools?

1. Modularity

- modularize our code for maintainability
- code bundlers allow us to bundle those modules into one JS file for browser

2. Use newest tech for building

- source code typically isn't code that can be run in browser
- what about typescript, JSX, CoffeeScript, SASS, ES6 (old browsers)
- build tools transpile these languages into browser readable code
- uglifying (change variables to one letter variables) / minifying (removing all whitespace)

## Webpack

- module/core bundler
- many plugins
- highly optimizable with:
  - `HMR (hot module replacement)` - apply changes without fully reloading app
  - `Tree-shaking`
  - `Codespliting`

This is all done through `webpack.config.js` and ran with `webpack`

## Modules

NODE:

- each file is module
- each module exports via `module.exports` (defaults to empty object)
- modules imported with `require()`
- set `module.exports` to be some object, or set properties on the `module.exports` object

Three types:

1. modules you write (source code)
2. built-in modules: `http`, `fs`, `stream`, `path`, etc.
3. community node_modules from npm: `express`, `mongoose`, `postgres`

based on `require` and `module.exports` (CommonJS)

## Modules in the browser

`CommonJS` and `ES6` are both supported by Webpack
CommonJS: `require` and `module.exports`
ES6: `import` and `export`

_NOTE:_ React code should be written with `import` and `export`

## Webpack flow

`webpack` needs an entry point into JS. it will package files based on that entry point and its dependencies (any `imports` and/or `requires`)

`import Apple, * as myModule from 'fruits';`
importing Default export as Apple, importing ALL exports (including default) and storing them in an object named myModule. To access them: `myModule.Banana`

`npm run bundle` will create Dist folder and bundle all files into one bundled file: main.js. _BEST PRACTICE_ is to name this `bundle.js`

## Webpack Loader

- webpack enables use of loaders to preprocess files
- loaders are defined in `webpack.config.js`
- they can transform JS as well as CSS, images, HTML, template files, etc.

BABEL
babel-loaders transpile JS code:

- ES6+ to ES5
- react JSX transpiled down to React.createElement
- typeScript gets transpiled down to JS

MODULARIZED CSS

- import individual CSS file into JS file
- transpile style languages beyond CSS, like SASS and LESS.

## Webpack plugins

- plugins perform logic that a loader cannot do
- `minifying` - removing whitespace
- `uglifying (UglifyJSPlugin)` - renaming variables to be unreadable one or two letter names. Code downloads faster.

_NOTE:_ Webpack uglifys when its mode is set to:

`HTMLWebpackPlugin` - automatically sets up an HTML file with a `<script>` tag for bundle.js. Useful for cache-busting for new versions of a webpage.

`cache-busting` - invalidating your cache. Essentially Removes previous bundle from cache

`ExtractTextWebpackPlugin` - takes CSS modules and puts them in a separate bundle.css file, rather than inlined within the bundle.js file.

## Code Splitting

have two entry points into your app:

- serve part of code unless a certain endpoint is reached
- only serve other part if needed

allows for more performant code

## Production vs Development

- webpack based projects have different needs whether final product or developing

PRODUCTION: JS uglified, CSS/images separate from main bundle (rather than inlined). Performance matters

DEV: quick change in code we write can show up on the screen faster

## Webpack-dev-server (WDS)

- live-reloading.
- WDS spawns a localhost server under the hood that watches for fs change events. The browser has a websocket connection to the dev-server so that it knows to live-relaod
- WDS does not write a bundle.js file to the file system. There is no bundle.js file! It keeps the bundle in memory

## Full stack web architecture

DEVELOPMENT: two servers

- One server is WDS, typically localhost:8080. This serves our html file and our Reach bundle.js, where bundle.js is stored in RAM rather than fs.
- The other is express server, typically on localhost:3000. Handles API backend routes to retrieve/store data

PRODUCTION: one server

- single server is express server, which will be hosted at www.mysite.com. This handles our API backend routes

To make fetch request from React codebase on the localhost:8080 domain that will hit the localhost:3000 domain, we utilize the proxy setting within our devServer setting in our webpack config.

## Alternatives

Grunt, Gulp - on their way out
Browserify
Parcel
Rollup

# Build Approach Lecture

`loaders` - transpilers
`sass-loader` - transpiles SASS into CSS
`CSS-loader` - transpiles CSS into a long string
`style-loader` - injects CSS into html file in an inline `<style>`

`production mode` - uglify and minify
`development mode` - just minify

## package.json scripts

`&` will run two packages concurrently
`&&` will run two packages sequentually

## webpack.config.js

A BIGASS OBJECT

ALSO, `process` object (ANOTHER BIGASS OBJECT) is available in Node.

bundle stuff: mode, entry, output, modules
everything else is stuff for after bundle:

### mode

`mode: 'development'` or `production`
we can use `process.env.NODE_ENV` to set it
that can be set in the `package.json` scripts

### entry

The entry point into our javascript:

entry: {
src: './client/index.js'
}

it's possible to use: `entry: './client/index.js'`

_Note:_ this is where we use the react `render(<App/>)` method.

### output

Settings for the exported file:

output: {
filename: 'bundle.js',
path: path.resolve(\_\_dirname, 'build')
}

### module - rules

an array of rules for handling of modules

{
test: /\.jsx?/,
exclude: /node_modules/,
loader: 'babel-loader',
options: {
// for babel-loader8.x | babel 7.x
presets: ['@babel/env', '@babel/react']
}
}

`presets` and `use[]` ORDER MATTERS. applied in _reverse_

### Plugins

#### HtmlWebpackPlugin

plugins: [
new HtmlWebpackPlugin({
title: 'Development',
template: 'index.html'
})
]

#### devServer

builds a server to server up our static files
runs from a virtual build folder

devServer: {
static: {
publicPath: '/build',
directory: path.resolve(\_\_direname, 'build')
},
port: 8080,
proxy: {
'/api': 'http://localhost:3000'
}
}

spaghetti code is ok. Don't worry about understanding it SUPER deeply
