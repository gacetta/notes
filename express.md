# express
express is a fast, unopinionated and minimal web framework.  It is the most used Node framework for the web.

Express is written in JS and hosted within Node.js runtime environment.  This makes developing and maintaining a web server much friendlier than doing it using built-in Node.js utilities

Other frameworks include Hapi and Koa. Hapi was very opinionated, Kao was not. Kao was developed by TJ Holowaychuk, who also created Express.

----------------------
## middleware
----------------------
express middleware is simply a function that takes on 3 args (third is optional)

1. req object
2. res object
3. next function (optional)

You simply apply the current middleware, then run the next function

app.get('/', middleWare1, middleWare2);

// middleWare1 will need a next function but not middleWare2

Stuff that you write with (req, res) => {} is also considered middleware!!

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

This `callback` typically takes two arguments, `req` (short for request) and `res` (short for response)
```
app.get('/', (req, res) => {});
```

-----------------
## res.send()
-----------------
We typically want to send something back in response to a GET request.  `res.send()` is used to send an HTTP response.  The `body` parameter can : a string, a Buffer object, an object, or an Array.
```
res.send(body)
```

**NOTE:** sending an object or array will automatically be parsed as JSON

-----------------
## res.render()
-----------------
`res.render()` function is used to render a view and sends the rendered HTML string to the client.
```
res.render(view [, locals] [, callback])
```
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
we can serve static `html` pages with express using `express.static()`.  This method takes a single argument of an **ABSOLUTE** folder path containing the `html` file(s) to serve.

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
- set up static location
- set up `app.get()` calls for each view
- set up `app.listen()` at the end

----------------------------------------
## 404 pages / universal selector
----------------------------------------
if we try to access a page that doesn't exist, we can set up a route handler for that case using the universal selector.

set up an `app.get()` handler after all other handlers using `'*'` as the path argument.  This tells express to use this route handler for any request with any path name.  By including this after all other handlers, it's a catch case for any route that doesn't match a view.

The universal selector can be used for ALL paths, or for specific paths:

    app.get('/help/*', (req, res) => {
      res.render('404', {
        title: 'Help/404',
        error: 'Help article not found',
        name: 'Michael Gacetta'
      })
    })

    app.get('*', (req, res) => {
      res.render('404', {
        title: '404',
        error: 'Page not found',
        name: 'Michael Gacetta'
      })
    })