# Node and Asynchronousity

Our Tasks:
1. connect to DB
2. fetch a markdown file from the file system
3. Save new article to the database

## CALLBACK APPROACH
When we perform an async operation, we pass two arguments, error and success

```
mockDB.connect(DB_URL, (err) => {
  if (err) return console.log('db error: ', err.message)
  console.log('Connected to DB);

  fs.readFile(BLOG_PATH, 'utf-8', (err, data) => {
    if (err) return console.log('readFile error: ', err)
    console.log('Got article from file system')

    mockDB.create({
      mdFileName: 'fileName',
      title: 'title',
      body: markdown.toHTML(data)
    }, (err, result) => {
      if (err) return console.log('db create error: ', err);
      console.log('created article in db: ', result._id)
    });
  });
})
```

ADVANTAGES/DISADVANTAGES
- hard to read
  - nesting is hard to follow
  - one homogeneous block of code

UNDER THE HOOD:
1. JS thread evaluates line by line
2. Utilize features outside of JS to process long/complex tasks without blocking our thread by utilizing the Web Browser API (or Libuv Worker Threads in Node)
3. As soon as task is passed off, JS thread continues executing code.
4. Once the background task is complete, rely on a callback queue and event loop to push callbacks 

## CALLBACKS REFACTORS
give callbacks names and function definitions

ADVANTAGES/DISADVANTAGES
Better?
  - not quite so much nesting
  - better organization, imo

Not Great
- hard to read what's going on
  -  nesting still hard to follow
  - one homogeneous block of code
- we aren't grouping related code together
  - error handling happens separately in each callback

## PROMISES
`what's a promise`
- a `proxy` (AKA placeholder) for a value that's not yet known
- immediately returned object that represents the evventual outcome of an async operation
- it _promises_ to `resolve` your request with a success handler or to `reject` your request with a failure handler

```
function connectToDB() {
  return new Promise((resolve, reject) => {     //resolve, reject are functions.  
    mockDB.connect(DB_URL, (err) => {
      if (err) return reject({ type: 'dbConnection', err });  // invoking reject() passes thread to catch block
      console.log('connected to DB');
      return resolve();                       // invoking resolve() passes the thread into the next function invoked on the promise
    })
  })
}

function getLocalArticle() {
  return new Promise((resolve, reject) => {
    if (err) return reject({ type: 'fs', err});
    console.log('got article from file system');
    return resolve(markdown.toHTML(data));
  })
}

function createArticle(html) {
  return new Promise((resolve, reject) => {
    mockDB.create({
      mdFileName: 'my-first-feature-article'
    }, (err, result) => {
      if (err) return reject({ type: 'dbCreate', err })
      console.log('created article in db');
      return resolve(result);
    });
  });
}

function promises() {

  connectToDB()
    .then(getLocalArticle)
    .then(createArticle)
    .then((result) => {
      console.log('created article: ', result_id)
    })
    .catch((err) => console.log('unidentified error: '. err));
}
```

### PROMISES UNDER THE HOOD:
- promises are mainly syntactic sugar for asyc activity.  Complex tasks are still being offloaded to the web browser
- what we get with promises is an immediately returned object in JS that keeps track of the status of the async task.  it's responsible for storing and invoking any delayed functionality based on the resolution of the of the async task.
- promises go to the microtask queue and take priority over the callback queue 

`[[PromiseStatus]]`
3 states:
- pending - final value not yet available
- rejected - something went wrong
- fulfilled - final value is available

`[[PromiseValue]]`

## Then and Catch
`resolve('success data')`
`reject('error message)`

.then and promise methods return Promises

ADVANTAGES / DISADVANTAGES
Better:
- no excessive nesting
- everything is a function and we're describing our actions with verbs
- we can pass results of previous async func to subsequent functions

Improvement
- clunky syntax, slightly more verbose
- haven't totally escaped callbacks, still using them internally

## Promise.all
- promise.all is a method on the promise object that returns a single promise
- it accepts an array of promises as an input
  - it will execute all of them (resolving in no particular orrder) and returns an array of all the resolved promises
  - if any promise rejects, promise.all rejects

``` 
function paCreateArticle(results) {
  const newArticle = {
    body: results[1],       // the value of getLocalArticle (which is in index 1) is stored here.
  }
  return new Promise ((resolve, reject) => {
    mockDB.create(newArticle, (err, result) => {

    })
  })
}

function promiseAll() {
  const initialPromises = [
    connectToDB(),
    getLocalArticle(),
  ];

  Promise.all(initialProms)
  .then(paCreateArticle)
  .then((result) => {
    console.log('created article: ', result._id)
  })
}
```
ADVANTAGES / DISADVANTAGES:
Benefits
- more efficient!@  Achieves parallel execution of concurrent operations

Drawbacks
- potentially less clear what promises are in your array, especially with largers arrays
- if even one promise fails, the whole chain is brokem, so be positive that Promise.all() is really how you want to facilitate parallel promise execution

## Async / Await (syntactice sugar for promises)
`async` is just a shortcut for defining a function which returns a promise.

```
function f() {
  return Promise.resolve('TEST');
}
// same as
async function asyncF() {
  return 'TEST';
}
```

`await` keyword tells javascript to wait for 

ERROR HANDLING - use `try`/`catch`.  Anything that throws an error in the try block, goes to catch block.

ADVANTAGES:
- cleaner code
- essentially wrapping the whole promise chain in a function so it's clearly defined what the chain is doing
- easier to see what is async and blocking and what is not

NOTE
- still uses promises under the hood
- can be used with Promise.all


```
const express = require('express');
const path = require('path');
const app = express()                                   // app is the preferred label for invoking express
const PORT = 3000;
                                                        // .get is a request handler
                                                        // req/res is standard naming for request/response
app.get('/', (req, res) => {                            // when app receives a get request, run this function
  res.sendFile(path.join(__dirname, './index.html'));
  }
);

app.listen(PORT, () => {
  console.log(`Listening on port ${PORT}...`))
};
```
