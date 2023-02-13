# AJAX Event Loop

`concurrency` - a form of computing in which several computations are executed during overlapping time periods. A computation can advance without waiting for all other computations to complete.
`parallelism` - simultaneous execution of separate parts of a program
`thread` - a linear sequence of machine instructions that cannot be divided into parallel sequences. If a runtime maintains a single call stack it is a strong indicator the language is single threaded
`selection` - answer a question based on what it finds in order to figure out which path to take next
`sequential computing` - code running sequentially (one line completing before the next starts)
`JavaScript Engines` - JS engines only manage a single sequence of tasks at a time.
`V8`

Microtask:
promised deferred functions
Prioritized by event loop after the call stack and before the callback queue

CB Queue:

## Async / Await

response.ok
