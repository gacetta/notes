## async / await
1. opens execution context
2. `await` is almost like a pause button. 

JS is like a nerve engine

`fetch` are most powerful 5 letters in JS (`await` is quite powerful as well)
think of `await` "closing" the execution context until `fetch` gets a response
When `fetch` gets a response, "re-open" the execution context and continue

local execution has a `lineStart` which defaults to `0:0`
`await` tells the "re-opened" execution context where to start:
e.g. `lineStart: 4:11` 

`await` and `fetch` work hand in hand.  