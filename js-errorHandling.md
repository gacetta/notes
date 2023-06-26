# Error Handling

Stop thinking of errors as mistakes.  Think of them as a features to improve our code and tell the user/programmer when something is wrong (and possibly how to fix the error).

-----------------------------
## Error Object / Constructor
-----------------------------

### Error Constructor
`Error()` constructor creates `Error` objects.

`new Error()`
`new Error(<message>, <options>, <fileName>, <lineNumber>)`

- `message` <optional> - a description of the error
- `options` <optional> - object with following properties:
  - `cause` <optional> - value indicating specific cause of error, reflecting in the cause property.  When catching an re-throwing an error with a more-specific or useful error message, this property can be used to pass the original error.
- `fileName` <optional> - path to the file that raised the error.  Default: name of file containing code that called `Error()` constructor
- `lineNumber` <optional> - the line number within the file on which the error was raised reflected in the `lineNumber` property.  Defaults to line number containing `Error()` constructor invocation.

**Note:** `Error()` can be called with or without `new`.  Both create new Error instance.

### Error Object
an error object has three properties:
`const myError = new Error('oopsie')`
1. `Error.name`
2. `Error.message`
3. `Error.stack` // stack trace that shows where the function happened

### Types of Errors
`SyntaxError`
`ReferenceError`
`TypeError`

### Throw Keyword
When we use `throw` keyword, the current script stops running and the error is handled.

### Error Handling Under The Hood
ERROR!
  |
  V
Is there a catch?
  |
(goes up an execution context)
  |
  V
Is there a catch?
  |
(etc.)
  |
  V
Runtime catch: oneerror()
process.on('uncaughtException')

-----------------------------
## Try Catch
-----------------------------
Two ways to catch an error:
1. `try {} catch {}` block
2. `.catch()` method

**NOTE:** Try / Catch is used to handle synchronous errors.

```
try {
  code you want to run...
} catch (error) {
  code to run when error is thrown...
}
```

**NOTE:** `try{}` block requires a `catch{}`.  Without it a `SyntaxError` will be thrown.

### Finally Block
A `finally{}` block can be added AFTER a `catch{}` block to run after the completion of try and/or catch.

This can be helpful to still return something from a function even when an error is thrown and caught

```
try {
  code you want to run...
} catch (error) {
  code to run when error is thrown...
} finally {
  code to run after try and/or catch completed...
}
```
-----------------------------
## Asynchronous Code
-----------------------------
to handle async errors, we use the `.catch()` method.

### Promises
`.catch()` will handle errors in a Promise chain.

Without `.catch()` in a Promise change, we have a silent fail.  AKA There will be no error message.

```
Promise.resolve('asyncFail')
  .then((response) => {
    console.log(response)
    return response
  })
  .then((response) => {
    console.log(response)
  })
  .catch((err) => {
    console.log(err)
  })
```

### Async / Await
to handle errors in async / await, we use `try{} catch{}`

```
async function() {
  try {
    await Promise.reject('oopsies')
  } catch (err) {
    console.log(err)
  }
}
```

## Extending Errors
we can create custom errors by extending the Error object.
This is useful when we want to return an error to the user that doesn't contain a full stack trace

```
class AuthenticationError extends Error {
  constructor(message) {
    super(message);
    this.name = 'AuthenticationError'
    this.favoriteSnack = 'funions'
  }
}
```