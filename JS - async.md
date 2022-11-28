# ASYNCRONOUS FUNCTIONS IN JAVASCRIPT

JS is single threaded - one command runs at a time

JS Engine has 3 main parts:
1. Thread of execution
2. Memory/Variable Environment
3. Call Stack

Need to add some new components
- web browser APIs / Node background threads
- Promises
- Callback / Task queue and micro task queue
- Event Loop

---
## synchronous vs asynchronous
---
_synchronous_ code runs in a sequence.  javascript is a single threaded code that can only execute one operation at any given time.  Thus, in _synchronous_ code, each operation must wait for the previous one to complete before executing

_asynchronous_ code runs in parallel.  Although JS is single threaded, certain operations can run in the background.  Thus, an operation can occur while another one is still being processed.  Asynchronous code is preferable in situations where JS execution can be blocked indefinitely.  Examples of this are network requests, long-running calculations, etc.  Something like `setTimeout()` is executed in JS, and then when completed, is added to the callback queue, or task queue.  These are First-in-first-out data structures.  The event loop continually checks the call stack, the browser APIs, and the callback queue.  When the JS call stack is empty, empty the callback queue to the callstack.

---
## XML HTTP REQUEST
---
// request - what we want to do
// response - what was actually done


**XML, or Extensible Markup Language** is a markup language similar to HTML.  It doesn't _DO_ anything: `XML` is designed to carry and store data, wheras `HTML` is designed to display data

Steps for XML Http Request:

1. **Create New XML Http Request**  
    `XMLHttpRequest()` used to request data from a web server.  This constructor must be used with the `new` keyword:

        const request = new XMLHttpRequest();       
    
    **Note:** Capitalization is important
    

2. **Create event listener**
    `addEventListener` takes two arguments (`event`, `function`).  
    
    In this case, we pass `'readystatechange'` as the first arg to execute code every time the status of the XMLHttpRequest object changes.

    The second argument is a callback function.  We have access to the variable `e` (for event) that gives us access to the event we're listening for

        request.addEventListener('readystatechange', (e) => {
            // code goes here to deal with successful or failed request
        })

3. **Check for successful request**

    `if (e.target.readyState === 4 && e.target.status === 200)` checks `readyState` and `status` to determine if the request was successful.  

    **STATUS**  
    There are many possible HTTP status codes.  `status` value `200` represents a successful request

    List of statuses can be found at:  
    https://www.webfx.com/web-development/glossary/http-status-codes/

    **READY STATE**
    
    The `readyState` of an `XMLHttpRequest` has 5 potential values.  State `4` is the readyState of completion.

    0 - Unsent - Client has been created.  `open()` not called yet.
    1 - Opened - `open()` has been called.
    2 - Headers_Received - `send()` has been called, and headers & status are available.
    3 - Loading - Downloading; responseText holds partial data.
    4 - Done - The operation is complete.

    The complete eventListener code:

        request.addEventListener('readystatechange', (e) => {
            if (e.target.readyState === 4 && e.target.status === 200) {
                // codeForRequestSuccess
            } else if (e.target.readyState === 4) {
                // codeForRequestFail (error message)
            }
        }) 
4. **Open Request**  
    The `XMLHttpRequest` method `open()` initializes a newly-created request

        XMLHttpRequest.open(method, url, async, user, password)

    `method` - the HTTP request method to use.  `GET`, `POST`, `PUT`, `DELETE`, etc.  **NOTE:** must be all caps  

    `url` - a string representing the URL of where to send the request

    `async` - An **optional** Boolean parameter, defaulting to `true`, indicating whether or not to perform the operation asynchronously. If this value is `false`, the `send()` method does not return until the response is received. If `true`, notification of a completed transaction is provided using event listeners. This must be `true` if the `multipart` attribute is `true`, or an exception will be thrown.  

    `user` - The **optional** user name to use for authentication purposes; by default, this is the `null` value.

    `password` - The **optional** password to use for authentication purposes; by default, this is the `null` value.

        request.open('GET', `http://puzzle.mead.io/puzzle`);

5. **Send Request**  
    The `XMLHttpRequest` method `send()` sends the request to the server.

    If the request is asynchronous (which is the default), this method returns as soon as the request is sent and the result is delivered using events. If the request is synchronous, this method doesn't return until the response has arrived.

        request.send();

Complete code for XML request:

    const request = new XMLHttpRequest();

    request.addEventListener('readystatechange', (e) => {
        if (e.target.readyState === 4 && e.target.status === 200) {
        const data = JSON.parse(e.target.responseText);
        console.log(data.puzzle);
        } else if (e.target.readyState === 4) {
        console.log('An error has occurred');
        }
    })

    request.open('GET', `http://puzzle.mead.io/puzzle`);
    request.send();
---
## PROMISES
---
Introduced in ES6 

The `Promise` object represents the eventual completion (or failure) of an asynchronous operation and its resulting value.

a two-pronged 'facade' function that both:
1. initiates background web browser work
2. returns a placehold object (`promise`) immediately in JS

    const futureData = fetch('https://twitter.com/will/tweets/1')

    futureData.then(display)

    futureData.then(display).then(grabComments).then......etc

`promise` is a constructor function, needs `new` keyword to create.  It takes a callback function as its argument, with two parameters - `resolve` and `reject`.  These are methods used to determine the outcome of the promise:

    const myPromise = new Promise((resolve, reject) => {

    });

A promise object has three keys:
1. value: the eventual value.  Until that is resolved, has value of `undefined`
2. status: either `pending`, `fulfilled` or `settled`
3. onFulfilled: `[ ]` //holds the function definition that will be handled once the status has changed from pending to fulfilled

Statuses or states:
- `fulfilled` - action related to the promise succeeded
- `rejected` - action related to the promise failed
- `pending` - promise state still undetermined, i.e. not fulfilled nor rejected yet
- `settled` - promise has fulfilled or rejected

`resolve` is used when your promise succeeds  
`reject` is used when your promise fails

    const myPromise = new Promise((resolve, reject) => {
    if(condition here) {
        resolve("Promise was fulfilled");
    } else {
        reject("Promise was rejected");
    }
    });

The example above uses strings for the argument of these functions, but it can really be anything.  Often, it might be an object, that you would use data

---
### then()
---
Promises are most useful when you have a process that takes an unknown amount of time to execute (i.e. something asynchronous) such as a server request.

When you make a server request it takes some amount of time, and after it completes you usually want to do something with the response from the server.  This can be achieved by using the `then` method.  The `then` method is executed immediately after your promise is fulfilled with `resolve`:

    myPromise.then(result => {
    
    });

`result` comes from the argument given to the `resolve` method.


`Promise.prototype.then()` returns a Promise.  Takes two arguments: callback functions for onFulfilled and onRejected cases.

        then(onFulfilled) . //one arg
        then(onFulfilled, onRejected)  //both args

        then(
        (value) => { /* fulfillment handler */ },
        (reason) => { /* rejection handler */ },
        );
---
### catch()
---
`catch` is the method used when your promise has been rejected.  It's exectued immediately after a promise's `reject` method is called:

    myPromise.catch(error => {

    });

`error` is the argument passed into the `reject` method

---
### Nested Callback Hell
---
To understand promise chains, it's helpful to see how using nested callbacks can get real ugly real fast.  

Here's some code that multiplies the data received from a request by 2:

    const getDataCallback = (num, callback) => {
        setTimeout(() => {
            if (typeof num === 'number') {
            callback(undefined, num * 2);
            } else {
            callback(`Number must be provided`)
            }
        }, 2000)
    }

The async function takes a number and callback as arguments.  It runs the callback function on the number after the request has completed (in this case it is simulated using `setTimeout()`)

What if we wanted to do calculations on multiple requests? For example:  

First request: What region is MX in? 
Async response: Central America
Second request: What are all the countries in Central America? 
Async response: MX, Panama, Belize, etc.

These calls all rely on the previous request.  If we implement this using our callback approach, things get messy:

    // DECLARE THE CALLBACK
    const getDataCallback = (num, callback) => {
        setTimeout(() => {
            if (typeof num === 'number') {
            callback(undefined, num * 2);
            } else {
            callback(`Number must be provided`)
            }
        }, 2000)
    }
    
    // CALLBACK HELL
    // FIRST CALLBACK REQUEST
    getDataCallback(2, (err, data) => { 
        if (err) {                      // 1st Error Check
            console.log(err);
        } else {                        // 1st Success Check
                                        // SECOND CALLBACK REQUEST
            getDataCallback(data, (err, data) => {  
                if (err) {                  // 2nd Error check
                    console.log('err');
                } else {                    // 2nd Success Check
                    console.log(data);
                }
            })
        }
    })
If we had more requests, this syntax would be impossible to follow.

The above code using promises with `.then()` already looks cleaner, but nesting still could get confusing:

    getDataPromise(2).then((data) => {
        getDataPromise(data).then((data) => {
            console.log(`Promise data: ${data}`);
        }, (err) => {
            console.log(err);
        })
        }, (err) => {
        console.log(err);
    })

---
### PROMISE CHAINS
---
We can rewrite the above code without nesting our callbacks.  Instead we can chain them just like we chain methods.  The key difference being that our `resolve` function must `return`

use `then()` with one argument for `resolve` and `catch()` with one argument for `reject`

The syntax, though still complicated, is cleaner than nesting.  Everything is `flat` and the `.then()` calls are all on the same level:

    `Promise().then((resolve) => {
        //code body
    }, (reject) => {
        //code body
    }).then((resolve) => {
        //code body
    }, (reject) => {
        //code body
    }).then((resolve) => {
        //code body
    }, (reject) => {
        //code body
    })  // and so on and so forth

so for our code:

    getDataPromise('10').then((data) => {
        return getDataPromise(data);
    }).then((data) => {
        return getDataPromise(data);
    }).then((data) => {
        console.log(data);
    }).catch((err) => {
        console.log(err);
    })

**NOTE:** this makes it easy to throw a `catch()` at the end of a chain. If we want to trigger the catch in an earlier `then()` block, we can `throw` an `error` in that black.

---
## Fetch API
---
`fetch()` returns a `promise` which will resolve or reject ONLY when it is ready.  no more need to check `readystatechange` as we did for `XMLHttpRequest`

`fetch(resource, {options})` where `resource` is the URL.  `options` is an optional argument.  Refer to MDN

We know request completed so we don't need to know IF it completed, only HOW it completed.  We can check this by checking the `status`.

    fetch('http://puzzle.mead.io/puzzle', {}).then((response) => {
        if (response.status === 200) {
            return response.json()
        } else {
            throw new Error('Unable to fetch the puzzle');
        }
    }).then((data) => {
        console.log(data.puzzle)
    }).catch((error) => {
        console.log(error)
    })


On the response we have `json()` method.  It will take the response body and parse it as json and eventually return a JS object.
`json()` returns a promise (not a JS object) which will resolve to an object in the future (when the request is complete)
thus promise chaining is necessary in this moment (other option is nesting promises but that messy) 

---
### Fetch Boilerplate
---
**Declaration**

const getFunction = (index) {
    return fetch('url').then((response) => {
        if (response.status === 200) {
            return // code here
        } else {
            throw new Error('here')
        }
    }).then((data) => {
        return data.property //etc.
    })
}

**Call**

    getFunction(index).then((result) => {
        // code for resolve
    }, (err) => {
        // code for error
    })

---
## HTTP REQUESTS
---

HTTP - Hypertext Transfer Protocol
Request - What do we want to do
Response - What was actually done

### HTTP QUERY
in the http address, add a query using `?key=value`
so for our hangman example, the http address is: `http://puzzle.mead.io/puzzle`
to search for a puzzle with two words, we add an http query: `http://puzzle.mead.io/puzzle?wordCount=2`

---
## Codesmith - Promises, Async & The Event Loop
---
### Asynchronicity
Once our async code has been off loaded to the web browser API, it can only come back when we are done with our synchronous code (when the call stack is empty)

---
### The Event Loop
Like a panicked wedding planner - They are always checking if everything is going according to plan

When something is async, it's sent to the browser API.  When it is completed, it is pushed to the callback queue.  Only when the call stack is empty and all synchronous code is complete, the callback queue then empties to the call stack.

if using promises and thens...
the value stored in `onFulfilled` will be pushed to the microtask queue NOT the callback queue

The event loop will ALWAYS check the microtask queue before the callback queue

---
## XML vs Promises
---
1. promise API is much easier to reason about / read. Clear semantics
2. with callback, it's possible to call the callback twice.  With promises it's impossible to run more than one function one time.
3. with promises we don't have to know what we're going to do with the code before we start the process of fetching the data.

---
## Async / Await
---
when creating a function we can choose to create a function as an `async` function.

we do so by adding `async` before the function:
    
    const processData = async () => {}

we can access the `async` data that we're waiting for using the `await` keyword

    const processData = async () => {
        let data = await asyncFunc(2);
        data = await asyncFunc(data);
        return data;
    }