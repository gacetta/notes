# NPM - Node Package Manager
------------------------------

`npm` is a package manager for the JS programming language and the default package manager for `Node.js` runtime environment.  It consists of a command line client (`npm`) and an online database of public and paid-for private packages called the `npm registry`.  The registry is accessed via the client and the available packages can be browsed and searched via the npm website.  `npm` is the world's largest software registry.

------------------------------
## package.json
------------------------------
the `package.json` file contains all the information about a project.  This includes `name`, `version` and `license` information as well as information about how to interact with and run the application.  It is created using the `npm init` command.

### name
`name:` defines the name of the package

### version
`version:` defines the current version of the software `package.json` is describing
Semantic Versioning isn't required, but is best practice

### license
`license:` defines what license applies to the code

### author and contributors
`author:` for a single person
`contributors:` is an array of people

### description
`description:` describes what the package is for

### keywords
`keywords:` an array of keywords to help for searching the npm registry

### main
`main:` defines the entry point into your project and commonly the file used to start the project

  "main": "src/index.js",

### scripts
`scripts:` takes an object with its keys being scripts we can run using `npm run <scriptName>`, and the value is the actual command which is run

  "scripts": {
    "start": "node index.js",
    "dev": "nodemon"
  }

To run in CLI:

  npm run start //runs node index.js

### repository
`repository:` takes an object which defines the repo type and location for the project.

  "repository": {
    "type": "git",
    "url": "https://github.com/osiolabs/example.git"
  }

### dependencies
This is one of the most important fields in your `package.json`, and likely the entire reason you need one. All of the dependencies your project uses (the external code that the project relies on) are listed here. When a package is installed using the npm CLI, it is downloaded to your `node_modules/` folder and an entry is added to your dependencies property, noting the name of the package and the installed version.

`dependencies:` takes an object with package names as keys, and a version or version range as a value. From this list, npm knows what packages to fetch and install (and at what versions) when `npm install` is run in the directory. The dependency field of your package.json is at the heart of your project, and defines the external packages your project requires.  See semantic versioning (SemVer) for more info.

  "dependencies": {
    "express": "^4.16.4",
      "compression": "~1.7.4"
  }

### devDependencies
Similar to the `dependencies` field, but for packages which are only needed during development, and aren't needed in production.  An example would be `nodemon` which is used to reload a project during development, but has no use one the application is deployed and in production.

`devDependencies:` takes an object similarly to `dependencies`

To specify that a package is installed to `devDependencies`, use the `--save-dev` or `-D` flag when running `npm install <package-name> --save-dev`

------------------------------
## npm commands
------------------------------
### npm init
------------------------------
`npm init` creates a `package.json` file in the directory it is run from
 **NOTE:** `npm init -y` will skip all the questions.

------------------------------
### npm install
------------------------------
`npm install [<package-spec> ...]` will install the specified package
common aliases:
`npm i [<package-spec> ...]`
`npm add [<package-spec> ...]`
also: (`in`, `ins`, `inst`, `insta`, `instal`, `isnt`, `isnta`, `isntal`, `isntall`)

Flags:

  `-D` is equivalent to `--save-dev`.  Package will appear in your `devDependencies`

**NOTE: about global install**
why we should avoid global install
1. a global install doesn't keep track of what is needed for your project in package.json file
2. having a global install doesn't allow for different versioning for each project
3. we have to type out the entire command in the CLI.  no alias ability

---
## global modules
---
to uninstall:
`npm uninstall -g package-name next-package-name-which-is-separated-by-space`