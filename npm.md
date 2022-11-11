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
