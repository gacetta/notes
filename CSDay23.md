`writeFile` is async func.  So we call done() to end the invocation.
`writeFileSync` is synchronous.  no need to call done().

`res.json()` implicitly returns status 200
