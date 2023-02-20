# express
express is a fast, unopinionated and minimal web framework.  It is the most used Node framework for the web.

Express is written in JS and hosted within Node.js runtime environment.  This makes developing and maintaining a web server much friendlier than doing it using built-in Node.js utilities

Other frameworks include Hapi and Koa. Hapi was very opinionated, Kao was not. Kao was developed by TJ Holowaychuk, who also created Express.

## why use express
provides abstractions while being flexible
- no more listening for stream events
- express' request and response objects wrap the vanilla Node request and response objects, adding tons of useful methods
- powerful yet flexible due to the middleware design pattern

**GOLDEN RULE**: requests must send a response!

## creating RESTful server
- route names should be nouns representing a namespace or collection
- the request method determines what functionality we're performing

**REMEMBER:**
`server.js` is the entry point
`app.use` runs on any type of request
`(req, res, next)` - middleware params. order matters
`res.send()` sends response as a string
`res.json()` sends response as json


----------------------
## middleware
----------------------
### what is middleware
- `middleware` - functions that help process HTTP requests 
- in express, middleware helps modularize server functionality
- express provides built-in middleware for common tasks (such as parsing a request body) `express.json()`
- also open-source middleware packages

### how does middleware pattern work/
- we tell express to use middleware by passing it into a routing function (`app.get`, `app.post`, `app.use`, etc)
- express calls middleware in the order that we tell it to

### Syntax
middleware functions are called with three arguments:
1. request object `req`
2. response object `res`
3. function to invoke the next piece of middleware (optional), `next()`. allows for middleware chaining:

`app.get('/', func1, func2, func3, (req, res) =>....)`
// func1, func2, func3 will need a next arg but anonymous func won't

the final function is almost always an anonymous middleware function.  This is because this isn't reusable like other labeled middlewares... we need it to do something more specific to our current task.

**NOTE:** (req, res) => {} is also considered middleware

### middleware chain
Apply the current middleware, then run the next function
incoming request --> func1 --> func2 --> func3 -->final endpoint handler

use `next()` to move through the middleware chain.  `return next()`

### how does data persist in middleware
- use `res.locals` to persist state over the course of a single request/response cycle
- we have access to the `res.locals` until the response is sent.

-------------------------------
## MVC - Model View Controller
-------------------------------
an architectural design pattern
- involves splitting an application into three parts - `model`(data), `view`(UI/page), `controller`(connection)
- model - any data that may be seen/used/processed, such as DB data
- view - UI which renders the data from the model in a user-friendly way
- controller - the connection between the model and the view, handling any processing of info back and forth

VIEW -  CONTROLLER - MODEL
client    server    database

------------------------
## basic implementation
------------------------

In its most basic implementation, we import the express library, create an express object and then use various methods on that object to create a server.

    const express = require('express')
    const app = express()
    const port = 3000

    app.get('/', (req, res) => {
      res.send('Hello World!')
    })

    app.listen(port, () => {
      console.log(`Example app listening on port ${port}`)
    })

-----------------
## app.get()
-----------------
`express.get()` is used to define a route handler for GET requests to a given URL.  It takes two arguments:
- `path` // '' or '/' is an empty path www.site.com, '/help' www.site.com/help, etc.
- `callback` // instructions for handling get request from specified path. 

`app.get('/', (req, res) => {});`


-----------------
## res.send()
-----------------
`res.send(body)` is used to send an HTTP response.  The `body` parameter can be : a string, a Buffer object, an object, or an Array.  

`return res.status(420).send('Hello World!');`

**NOTE:** if no argument, no response body is sent, just status code
**NOTE:** sending an object or array will automatically be parsed as JSON (but use `res.json()` for clarity)

-----------------
## res.json()
-----------------
When an object or array is passed to it, `res.json()` is identical to `res.send()`.  Unlike `res.send()`, however, `res.json()` may also be used for explicit JSON conversion of non-objects (`null`, `undefined`, etc.), even though these are technically not valid JSON.

this method is **terminal** and should be the last line of code AKA `return res.json()`

-----------------
## res.render()
-----------------
`res.render()` function is used to render a view and sends the rendered HTML string to the client.

`res.render(view [, locals] [, callback])`

- `view` is the name of the view (.html doc)
- `[locals]` is an object whos properties define local variables for the view

--------------------
## app.listen()
--------------------
When setting up a server, we need to listen for GET requests. The `app.listen()` function is used to bind and listen the connections on the specified host and port.

It takes several optional arguments:
- `port` - specifies the port on which we want the app to listen
- `callback` - specifies a function that will get executed when the app starts listening at the specified port

----------------------------------------
## serving static pages
----------------------------------------
`express.static()` serves static `html` pages.  Takes a single argument of an **ABSOLUTE** folder path containing the `html` file(s) to serve.

```
const publicDirPath = path.resolve(__dirname, 'public') // uses Node `path` method
app.use(express.static(publicDirPath)) // serves up all html files in the specified dir
```

Each doc is the accessible via `www.website.com/html-doc-name.html`.
**NOTE:** `http://www.website.com/index.html` is a special case where `index.html` may be omitted

----------------------------------------
## serving dynamic pages with template engine
----------------------------------------
`handlebars` is a template engine that provides `express` new functionality:
1. it allows us to serve dynamic pages
2. create code that we can easily reuse across pages

we can use `hbs` to integrate handlebars into express.  This allows us to create a different `view`, a `.hbs` file, for each page of our site.  We can store all of our views in a single folder for organization and then serve this folder using express.  

To inject a value in an `hbs` file, we use `{{valueName}}` in the view.  This value comes from the object of values that is passed via `res.render()`.

### setting handlebars views location
handlebars needs to know where all the views are stored.  By default, it expects them in a folder named `views` in the `rootDir` of the project.  

To specify a custom location: `app.set('views', viewsPath)`

----------------------------------------
## partials
----------------------------------------
`partials` are little templates that can be used to reuse the same HTML across multiple views, something like a header or footer for example.  Think of partials like functions, they make large websites easier to maintain as you don't have to change a piece of text in every page it appears in.  Instead you define a reusable bundle of code in a file and include it wherever you need it.

a partial file isn't an entire HTML document, instead it contains a portion of HTML, such as a `<header></header>`.  It can create static or dynamic content (using `{{}}`)

To use:
- load in handlebars
- set partials location: `hbs.registerPartials(partialsPath)`
- create a `.hbs` partial file
- to use partial in a view: `{{>partialName}}`

**NOTE:** By default, `nodemon` looks for files with the .js, .mjs, .coffee, .litcoffee, and .json extensions  To specify a custom list of filetypes, call with the `-e` or `--ext` flag:  `nodemon filePath -e js,hbs` 

----------------------------------------
## file structure organization
----------------------------------------
Our project folder is starting to get crowded:
ROOT (our git repo)
- node_modules (.gitignore)
- public
  - css
  - img
  - js
- src
  - app.js
- templates
  - partials
  - views
- package.json

in our main `app.js` file we can start to organize things:
- imports / requires
- define our app = express()
- define paths for express config
- setup handlebars engine and views / partials locations
- set up static locations
- set up `app.get()` calls for each view
- `app.use()` for 404
- set up `app.listen()` at the end

----------------------------------------
## 404 pages / universal selector
----------------------------------------
we can set up a route handler for a page that doesn't exist using the universal selector.

set up an `app.get()` handler **after all other handlers** using `'*'` as the path argument.  This tells express to use this route handler for any request with any path name.  By including this after all other handlers, it's a catch case for any route that doesn't match a view.

The universal selector can be used for ALL paths, or for specific paths:

    app.get('/help/*', (req, res) => {
      ...code
    })

    app.get('*', (req, res) => {
      ...code
    })

----------------------------------------
## request parameters
----------------------------------------
`/:articleID` - takes the request parameter from the URL and stores it to the variable articleID on the `req.params` object


----------------------------------------
## next()
----------------------------------------
- `return next()` at the end of middleware to more to next middleware function
- `return next(errObj)` when an error occurs.  Invoking `next()` with an argument invokes the global error handler. 

----------------------------------------
## global error handler
----------------------------------------
when `next()` has an argument, it goes to the global error handler

error-handling functions are defined with four arguments instead of three: 
`app.use((err, req, res, next) => {})`
- `err` is paired with the object we pass into `next(err)`

- Define error-handling middleware functions last, after all other `app.use()` and routes calls.

### BOILERPLATE:
IN SERVER:
```
  const errorHandler = (err, req, res, next) => {
    const defaultError = {
      log: 'Express error handler caught unknown middleware error',
      status: 400,
      message: { err: 'An error occurred' }, 
    };

    const errorObj = Object.assign(defaultError, err);  // overwrites properties from our err
    console.log('ERROR: ', err)
    res.status(errorObj.status).json(errorObj.message);
  };

  app.use(errorHandler);
```

IN CONTROLLER:

```
  // helper function to create fileController error objects
  // return value will be the object we pass into next, invoking global error handler
  const createErr = (errInfo) => {
    const { method, type, err } = errInfo;
    return { 
      log: `fileController.${method} ${type}: ERROR: ${typeof err === 'object' ? JSON.stringify(err) : err}`,
      message: { err: `Error occurred in fileController.${method}. Check server logs for more details.` }
    };
  };

  // MIDDLEWARE FOR GETTING CHARACTERS
  fileController.getCharacters = (req, res, next) => {
    fsCallback.readFile(path.resolve(__dirname, '../data/characters.json'),
      'UTF-8', 
      (err, chars) => {                     
        if (err) return next(createErr({    // error handling
            method: 'getCharacters',        //       |
            type: 'reading file',           //       |
            err,                            //       |
          }));                              // error handling
        const parsedData = JSON.parse(chars);
        res.locals.characters = parsedData.results;
        return next();
      });
  };
```