# Node

running multiple ports - `killall node`

INSTALL POSTMAN!
`Node` - an open-source runtime environment for javascript.  Built on V8.  Can do much more than Javascript in the browser - make files, delete theme, kill processes, shut down the computer, system calls, etc.  **It is not sandboxed**.

## Why Node?
- relatively high-level
- non-blocking, great for I/O bound applications
- NPM is great

## Browser JS vs Node JS
JS Ecosystem: 
1. JS runtime
2. Event Loop
3. Queue(s)

**NOT IMPORTANT** Node uses V8 engine for runtime, but not the V8 eventloop / callback queue.  It uses `libuv` library to handle event loop, callback queue and also for background I/O operations

- NODE has no Web API, window, document, navigator, XMLHttpRequest, or any browser-specific objects
- Instead, has its own system-related globals like `__dirname,` `__filename`, and `process`
- Still have event loop functions/objects like `setTimeout` and `console` but their underlying implementation is different

## Node Modules & NPM
ES modules - used in front end
JS modules - used in Node

- node modules help you avoid globals and keep namespace clean
- modules allow us to expose only the parts of your program you want exposed (sort of like a closure)

**TO USE MODULES IN NODE:**
New Import Syntax, require instead of import...from:
`const http = require('http');`

- Node provides some built-in modules: `http`, `fs`(file system), `path`, `events`, `child_process`, and many more
- There are also Node modules you write yourself
- As well as Node modules from the open-source ecosystem (this is why we use npm)

## Using your own modules
To import/export our own modules
To EXPORT (default):
`module.exports = counter`
To IMPORT (default):
`const counter = require('./counter.js');`
To EXPORT (named):
`module.exports = { counter, countByTwo };`
To IMPORT (named):
`const { counter, countByTwo } = require('./counter.js);`

## Node Package Manager (NPM)
- command line tool for downloading packages
- a package is a collection of modules
- you can 'npm install' packages, giving you a `node_modules` folder

## Package Dependencies
- `npm init` creates `package.json` file
- `npm install <package name> --save`

## Node Server
Why create a server?
- Fetch Data from other services (i.e. Facebook / Twitter)
- Save/fetch data from our own database
- Process large quantities / complex data outside browser

## How do servers work?
- Listen for requests on specific port.
  - They can even listen for specific methods and/opr requests to sspecific routes(endpoints)
- Depending on the method and route(endpoint) specified in the request, a server may or may not process the request in some way.
- In the end, the server will respond to the request with a status (success/failure) and [optionally] some data.


## Event Emitter
An event emitter is a type of class which enables attaching specific functionality to a particular event.

```
const EventEmitter = require('events');

const myEmitter = new EventEmitter();

myEmitter.on('action-occurred', function() {
  console.log('I heard the action!');
})

function action() {
  myEmitter.emit('action-occurred');
}

action ();
```

## http modules and EventEmitters
Node.js has got some great built-in modules!
- `http` - allows Node to transfer data over http
- `fs` - allows you to work with the file system in your computer
- `path` - provides utilities for working with file and directory paths

Third-party modules and libraries can be installed via npm;

### FS methods
- `fs.readFileSync` - locates and reads a given file and sends it back to the client
- `fs.appendFileSync` - sync adds given data to a file.  If file doesn't exist, it creates it.
- `fs.writeFileSync` - overwrites data in a specified file
- `fs.unlinkSync` - deletes file

### Path methods
- `path.join` - concatenates the path segments
- `path.resolve`:
  - creates an absolute path from the root
  - looks for the first segment with / from the right and append everything up to this point to the root
- `__dirname` - an environment variable that links to the 

## what are streams
"if i have a giant rock, it would take a long time to move that rock"
"if i break it into pieces, you can move it much easier piece by piece"
"you can have part of it while I get the next piece"

- In a stream, data is handled in partial `chunks`, which can be managed incrementally

Readable Streams:
  Events: 'data', 'end', 'close', 'error'
  Method: pause(), resume(), destroy(), pipe()

Writable Streams:
  Events: 'pipe', 'drain', 'close', 'error'
  Methods: write(), end(), destroy()

## Postman
- A robust tool for testing requests to your server
- Test different request methods and routes(endpoints) to ensure your backend is working as expected (even in error states)
- Send the exact data your server is expecting
  - enables decoupling of your frontend and backend code

## Process
An instance of a program and the environment it is running in
Your computer's OS manages many processes simultaneously
In node, we can access information about the process that is executing our program via the process keyword

## XMLHttpRequest Properties
`onreadystatechange` - event function that is called automatically each time the readyState property changes

`readyState` - changes from 0 to 4

## request object
Method:
 - action/verb client wants to perform
 - GET, POST, PUT, DELETE

URL
  - address where a resource is location

Headers
  - metadata to provide information about the request

### the stream
We can grab the data right out of the stream by listening (using `.on`) to the stream's 'data' and 'end' events.

The chunk emitted in each 'data' event is a `buffer`.  If you know it's going to be string data, the best thing to do is concatenate each chunk of string, then at the 'end', handle the resulting completed string.

## response object
Status Code:
  -  notes the status of the response.  200 is ok
Headers:
  - metadata to provide info about the response
  - `.writeHead` method writes

## Error Handling
An unsuccessful response, the error must be handled!

Status Code:
- 400 is a request / browser error
- 500 is a server error

Body
- Detailed log / message for developer
- Handle client display

## Postman
