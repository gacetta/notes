# NPM - Node Package Manager

`npm` is a package manager for the JS programming language.  It is the default package manager for `Node.js`.  It consists of a command line client (`npm`) and an online database of public and paid-for private packages called the `npm registry`.  The registry is accessed via the client and the available packages can be browsed and searched via the npm website.

How to add npm functionality to a project:

1. In CLI, Navigate to the folder that contains the project.
2. run `npm init` which initializes the project and creates a `package.json` file in the current directory.  This file will contain all the information set in the `init` stage, and will be updated as other functionality is added.
3. `npm install node-sass --save-dev` to install node-sass and save it as a development dependency.  This will update the `package.json` file.  By saving that info in the `package.json` file, it tells the program what npm functionality is needed for runtime.  Thus making it easier to share a project with others.  Like sharing a recipe rather than giving someone all the ingredients.
4. To share our project with someone, share the appropriate files, including `package.json`, but NOT the `node-modules` folder.  The user can run `npm install` to download all necessary files based on the `package.json` information.

---
## Implementing Sass into our workflow
---
1. **CREATING A SCRIPT**
We can write our own scripts in the `package.json` file.
In our case, we want to compile the `.scss` file to convert it to `.css` to be rendered by the browser.  

We do this with the following code:

    "scripts": {
        "compile:sass": "node-sass sass/main.scss css/style.css"

We have written a script called `compile:sass`.  It specificies the name of the package, `node-sass`, then the location of the source file, `sass/main.scss`, and the location of the output file, `css/style.css`.

2. ***RUNNING THE SCRIPT***
To run the script, we have to use the terminal:

`npm run compile:sass`

This works as expected - runs the script we have named `compile:sass` which compiles the .scss file to .css file!  

However, every time we make changes, we have to run the script again in the CLI to see the results in the browser.

To avoid this, we can add a `watch` flag to the end of the script, which tells the script to watch the source file and to run every time the source file is updated.  This is done using `-w`:

    "scripts": {
        "compile:sass": "node-sass sass/main.scss css/style.css -w"

---
## CLI commands and flags
---
**Install**
`npm install [<package-spec> ...]` will install the specified package
aliases: `add`, `i`, `in`, `ins`, `inst`, `insta`, `instal`, `isnt`, `isnta`, `isntal`, `isntall`

Flags:

  `-D` is equivalent to `--save-dev`.  Package will appear in your `devDependencies`


---
## npm build process
---
main.sass
|   //COMPILATION
v
style.comp.css    icon-font.css
|  //CONCATENATION  |
v                   |
style.concat.css  <-
|  //PREFIXING
v
style.prefix.css
| //COMPRESSING
v
style.css (production code)

modify "scripts" in `package.json`
`"watch:sass": "node-sass sass/main.scss css/style.css -w"` // watches for changes in main.scss and compiles into style.css
`"compile:sass": "node-sass sass/main.scss css/style.comp.css"` //compiles all scss files into .comp.css file
`"concat:css": "concat -o css/style.concat.css css/icon-font.css css/style.comp.css"` //concat icon-font.css and style.comp.css files
`"prefix:css": "postcss --use autoprefixer -b 'last 10 versions' css/style.comp.css -o css/style.prefix.css"` //POSTCSS autoprefixes for compatibility (`-webkit`, `moz`, etc.)
`"compress:css": "node-sass css/style.prefix.css css/style.css --output-style compressed"`

NOW that we've set up each step of the build process, we can combine them into one command using the npm package, npm-run-all
`"build:css": "npm-run-all compile:sass concat:css prefix:css compress:css"`

---
## combining watch and live-server
---
We have to have two terminals open to run both `watch:sass` and `live-server` concurrently.  We can do better:

`"watch:sass": "node-sass sass/main.scss css/style.css -w"` // watches for changes in main.scss and compiles into style.css
`"devserver": "live-server"`
`"start": "npm-run-all --parallel devserver watch:sass" `

we can use `--browser:` to tell this project to run live-server in a specific browser (if we want to use the firefox dev tools for grid, say)
`"devserver": "live-server --browser:firefox"`