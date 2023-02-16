# Redux redux

- redux has ONE state, but can have multiple reducers to manage that state.

`container components` - houses presentational components.  Doesn't directly render anything.  It's connected to the redux store, prop drill to presentational comps
`presentational components` - render something to the screen

"the relationship between hooks and redux is yet to be determined"

`mapStateToProps` runs every time the store changes (AKA a lot), so we don't want too many connected components.


- choosing how to distribute connected components in your app is a developers challenge.


## where to start?
index.js is good
follow the imports