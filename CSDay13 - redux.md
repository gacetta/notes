Day 13 - Feb 13

# Redux

Allows us to avoid `prop drilling`.  Instead keep our state in a specific place (`store`) and inject that into certain components, 

In `redux`, we keep the state in the `STORE`

What are the benefits of a state management library, like `redux`?
- 'simplified' access to state in complex apps
- better debugging, including time travel
- simplified testing
- single source of truth

Redux is opinionated state management library
`opinionated` - the more opinionated, the less flexible the code is
Based on `flux` architecture used by Facebook which is a modified version of the observer design pattern.

## Observer Pattern
- software design pattern in which an object called the `subject` which references state, publishes its presence.
- has a list of dependents called `observers` or `listeners`that have subscribed to notifications.  When state changes, the subject notifies all subscribed observers.
- `observer pattern` is used primarily in `event-driven apps`.  

## Flux (modified Observer Pattern)
Terminology:
- `Actions` (object)
- `Action Creator` (function)
- `Dispatcher` (function)
- `Store(s)` (object)  **NOTE:** can be plural
- `Views`

### Data Flow
1. An action occurs, which is created and passed by an action creator to the global Dispatcher, which then passes it to every registered callback.
2. If a store has a callback registered with the Dispatcher, it will receive the dispatched action.
3. Logic within the store runs functionality using the action, and then emits a change event
4. Views get the change event and update themselves accordingly

Action -> Dispatch -> Stores -> Views

## Redux Pattern
action (object)
```
{
  Type: SOME_ACTION
  Payload: "Some New Value'
}
111

1. Action Creator creates action
2. Dispatch action to the Reducer which invokes callbacks
3. Reducer returns new state object to the Store{}
4. Change of store causes re-render of React Component

To connect React Component to store:
- mapsStateToProps()
- mapDispatchToProps()
- connect()
```

## Why React and Redux?
- efficient state management
- hot module reloading that doesn't lose track of state
- time travel debugging with redux devTools

## Redux Dev Tools

Chrome Extension for DevTools
Requires minimal setup in the app you want to use DevTool in 

## Golden Rules of Redux
- Redux Store (single source of truth) - just an object containing app state
- Actions - describe updates to state (Objects = type:ACTION, paylod:'new data'(OPT))
- Action Creators - functions that we call to dynamically create Actions
- Displatch - sends actions to all Reducers
- Reducers - functions that apply updates to state

## Store
- redux uses a single store of data.  That store can consist of deeply embedded objects, referencing all the data required by the app.

## Actions
- simple objects that contain data for reducers to update state.  Actions are the only way to update state in the Redux store.


## Reducers
A pure function that updates state via an action
Takes two args:
- current state object
- the action that was dispatched

Fire when dispatch method is invoked
Often use switch statements for controlling based on action
Treat state as immutable - make a change on a copy of the state (using Object.assign or spread operator)
Initialize our store

## Redux Store under the hood
Store is an object consisting of:
1. the state object representing the state of the app
2. the reducers used to calculate new state objects
3. a "dispatch" method used to accept an action object to activate reducers
(4. methods)
(5. a getState method used to return the current state of app)

# Implementing Redux

     -------Store  <---------
 re-renders {   }        Render


 ## How do we write Reducers?
1. Map out state logically across different reducers
2. Within each reducer file:
  a. Create an object to store your initial state values that you want Reducer to be connected to
  b. Create a pure function that takes two parameters: state and action
    - state should default to your initial state (usually using default parameters)
  c. Create a switch statement that checks the action.type and performs the logic to create the new state object
  d. Return the new state.  This will update the state in Redux and re-render

_COMMON PRACTICE_
store action types in a constant `types` and reference that types obj for the switch cases.  Feels like an extra step, but it's helpful when debugging as a typo referencing a constant will throw an error.

## How do we create Redux Store
1. Combine reducers into a single function/object using `combineReducers` from redux
2. Import object 

```
const store = createStore(
  reducers,
  composeWithDevTools()
);
```
**NOTE:** - `createStore()` is deprecated - use `configStore()` from redux toolkit

_COMMON PRACTICE_
Folder System:
  Reducers
    index.js //file that contains combineReducers
    reducer1.js
    reducer2.js
    etc.


**NOTE:** it is in this step that we add Redux Dev Tools access

 ## How do we make Store available to Components
 1. Import Provider from react-redux, the store from store.js, and your top level component
 2. Wrap your top level component in the Provider component
 3. Pass the store as an attribute to the Provider component

 ```
render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.querySelector('#root')
)
 ```

 ## How do we access the store from within React components?
 1. mapStateToProps
 A pure function that receives state as an argument and returns an object listing any properties of state that the componanent wants to subscribe to.
 - These keys will then be passed on as props to the component they are connected to:

 Within a component definition:
 ```
 const mapStateToProps = (state) => (
  {
    counter: state.counter.count
    user: state.user
  }
 )
 ```

 2. mapDispatchToProps
A pure function that receives dispatch as an argument and returns an object containg event handloers
- Even handlers can be passed to events (onClick, onChange, etc.)
- When invoked, they will dispatch actions
- This is accomplished by invoking action creators that will return action objects, which are passed into dispatch

"Dispatch takes an action and moves it to the reducer"
if you click on the + button, it dispatches an action to the count reducer


```
const mapDispatchToProps = (dispatch) => (
  {
    eventHandlerLabel: valueIsAFunction
    increment: () => dispatch(incrementActionCreator())
    increment: () => dispatch({ type: INCREMENT_COUNT, payload: 5})

    // EX: <button onClick={this.props.increment}/>
  }
)
```

 3. connect
Once these functions have been defined, they should be passed to the connect function that we import from react-redux.  This ties our component to the redux store.
 "takes mapStateToProps and mapDispatchToProps and connects the component to state"

```
export default connect(mapStateToProps, mapDispatchToProps)(componentToConnect)
```

if you have a component that is just reading data from state, but not updating store, `mapDispatchToProps` = null.  Conversely, a component that only writes to state, `mapStateToProps` = null.

## How do we write action creators
1. Create a file and export constant variables that represent all the ways we want to change state. (AKA all of the actions).  These will be the values passed as the type properties in your action objects.
2. All processing of side effects (ajax calls) should be handled in Action Creators.  Once all the data necessary to facilitate the state change is derived, the value should be passed as the payload in your action objects.
- In order to implement async functionality in redux, you'll need another 

ACTION:
```
import { CHANGE_COUNT } from './types.js';

dispatch({
  type: CHANGE_COUNT,
  payload: 5
});
```
types.js
`export const CHANGE_COUNT = 'CHANGE_COUNT';`
why: a lot of room for error.  prevent errors and provide debugging assistance

REDUCER
```
import { CHANGE_COUNT } from './types.js'
```

## Redux Debug Workflow
1. Log actions and states.  They are just simple objects.
2. Go through the log and find the action that caused the bad state
3. Check the action.  is that good?
4. Check the reducer.  If you haven't found it yet, the problem is in here.
5. Write a test.  Since the reducers are pure functions, testing simply requires calling the function with the requisite params.
