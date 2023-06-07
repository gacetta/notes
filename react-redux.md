# redux

`redux` is a library that helps manage state.  

In other words, it is a store to store the state of the variables in your app globally.

----------------------------------
## shortcomings of component state
----------------------------------
component state = `this.state`

1. Where is it stored?

Component state works for a simple app where state is stored in the one parent component and passed down

              IndecisionApp
            /               \
      Options               AddOptions
          |
      Option

However, in a complex app, there will likely be more than one parent component.  Where do we store state?

AddExpensePage            ExpenseDashboardPage
    |                             |
AddExpense                    Expenses
                                  |
                              Expense

2. Reusability?

When we're passing props and sharing state often, components become tightly bound to each other.  This limits their reusability as they need specific things from the parent that the parent might not have access to.

**NOTE:** avoid passing props (`prop drilling`) down a chain of a tree just so the last component can use it.  Instead keep our state in a specific place (`store`) and inject that into certain components.

SOLUTION: redux

-----------------------
## benefits of redux
-----------------------
What are the benefits of a state management library, like `redux`?
- 'simplified' access to state in complex apps
- better debugging, including time travel
- simplified testing
- single source of truth

Redux is opinionated state management library
`opinionated` - the more opinionated, the less flexible the code is
Based on `flux` architecture used by Facebook which is a modified version of the observer design pattern.

-----------------------
### Observer Pattern
-----------------------
- software design pattern in which an object called the `subject` which references state, publishes its presence.
- has a list of dependents called `observers` or `listeners`that have subscribed to notifications.  When state changes, the subject notifies all subscribed observers.
- `observer pattern` is used primarily in `event-driven apps`.  

-----------------------
### Flux (modified Observer Pattern)
-----------------------
Terminology:
- `Actions` (object)
- `Action Creator` (function)
- `Dispatcher` (function)
- `Store(s)` (object)  **NOTE:** can be plural
- `Views`

-----------------------
### Flux Data Flow
-----------------------
1. An action occurs, which is created and passed by an action creator to the global Dispatcher, which then passes it to every registered callback.
2. If a store has a callback registered with the Dispatcher, it will receive the dispatched action.
3. Logic within the store runs functionality using the action, and then emits a change event
4. Views get the change event and update themselves accordingly

Action -> Dispatch -> Stores -> Views

-----------------------
## redux pattern
-----------------------
action (object):

```
{
  Type: SOME_ACTION
  Payload: "Some New Value'
}
```

1. Action Creator creates action
2. Dispatch action to the Reducer which invokes callbacks
3. Reducer returns new state object to the Store{}
4. Change of store causes re-render of React Component

------------------------
## Golden Rules of Redux
------------------------
- Redux Store (single source of truth) - just an object containing app state
- Actions - describe updates to state (Objects = type:ACTION, paylod:'new data'(OPT))
- Action Creators - functions that we call to dynamically create Actions
- Displatch - sends actions to all Reducers
- Reducers - functions that apply updates to state

-----------------------
## redux store
-----------------------
`redux` uses a single `store` of data.  That store can consist of deeply embedded objects, referencing all the data required by the app.

**NOTE:** there should only be a single store in your app
**NOTE:** `createStore` depreciated.  Use `configureStore` from `redux-toolkit`

UNDER THE HOOD:
A `store` is an object consisting of:
1. the state object representing the state of the app
2. the reducers used to calculate new state objects
3. a "dispatch" method used to accept an action object to activate reducers
(4. methods)
(5. a getState method used to return the current state of app)

1. install redux with `npm i redux`
2. import functionality from `redux` to create a store

    import { createStore } from 'Redux'

3. `createStore()` expects a function for the first argument which sets the state.

    const store = createStore((state = { count: 0 }) => {
      return state
    })

4. we can see our store using `store.getState()`

    console.log(store.getStore());

----------------------------------
## actions
----------------------------------
`action` - an object that gets sent to the store that describes the action we want to take. `actions` are simple objects that contain data for reducers to update state and are the only way to update state in the Redux store.

CREATE:
Some actions we might want to take: increment, decrement, reset, etc.  e.g. an increment action would look like:

    {
      type: 'INCREMENT'
    }

_BEST PRACTICE:_ action types are named with UPPERCASE

DISPATCH:
actions must be `dispatched` to the store using `store.dispatch(action)`:

    store.dispatch({
      type: 'INCREMENT'
    });

ADD FUNCTIONALITY:
the second argument of `createStore()` is `action`.  This gives `createStore()` access to actions.  Typically we handle actions with `switch` statement.

    const store = createStore((state = { count: 0 }, action) => {
      switch (action.type) {
        case 'INCREMENT': 
          return {
            count: state.count + 1
        };
        default: 
          return state;
      }
    });

-----------------------------
## subscribing
-----------------------------
`store.subscribe(function)` is a change listener that calls a function every time the `store` changes.

to UNSUBSCRIBE:
`subscribe` returns a function that is used to unsubscribe the listener.

```
const unsubscribe = store.subscribe(() => {}))   // sets up listener
unsubscribe() // when called, unsubscribes listener
```

-----------------------------
## dynamic actions
-----------------------------
we can set up actions use extra information, e.g. dynamic information from user input.

For each action, `type` must always be provided or redux will crash.

We can provide additional information: 
```
store.dispatch({
  type: 'INCREMENT',
  incrementBy: 5
})
```
Now we have access to more data on the `action` object.  `action.incrementBy` //5

-----------------------------
## action generators
-----------------------------
creating in-line action objects can lead to spelling errors that are difficult to debug

instead we can use action generators, i.e. functions that return action objects.  These action generators can be called in a `store.dispatch()` call to clean up our code.  Use of object destructuring and default parameters helps for very clean code:

    const incrementCount = ({ incrementBy = 1} = {}) => ({
      type: 'INCREMENT',
      incrementBy
    })

    store.dispatch(incrementCount({ incrementBy: 5}));

-----------------------------
## reducers
-----------------------------
A `reducer` is a pure function that updates state via an action.
It takes two args:
1. current state object
2. the action that was dispatched

the concept: `(state, action) => newState`

    const initialState = {};
    const reducer = (state = initialState, action) => {
      // Write your code here
    }

Key `reducer` points:
- Fires when dispatch method is invoked
- _Best Practice_ Use switch statements for controlling based on action
- Treat state as immutable - make a change on a copy of the state (using Object.assign or spread operator)
- Initialize our store with a reducer

When we create a new store, we pass the reducer we want to use as the arg for createStore():

    const store = createStore(reducer())

-----------------------------
## combineReducers
-----------------------------
as state gets more complex, a single reducer can get out of control.
`combineReducers` allows us to use multiple reducer functions to more easily manage state change.

for example, given a complex state:

    const demoState = {
      expenses: [{
        id: 'kjahsgdfas',
        description: 'January Rent',
        note: 'This was the last payment for this apartment',
        amount: 54500,
        createdAt: 0
      }],
      filters: {
        text: 'rent',
        sortBy: 'date', //date or amount
        startDate: undefined,
        endDate: undefined
      }
    }

Note there are two `root` properties of the state we need to manage: `expenses` and `filters`.  combineReducers allows us to specify which reducers we want to use to manage what parts of the state.  So after creating a reducer for expenses and a reducer for filters, we call `combineReducers` as the argument when we create the store:

    const store = createStore(
      combineReducers({
        // specify root property (expenses) and what reducer to use
        expenses: expensesReducer,    
        filters: filtersReducer
      })
    );

-------------------------
## higher order component
-------------------------
Higher-order components (HOCs) in React were inspired by higher-order functions in JavaScript. A HOC is an advanced technique for reusing logic in React components. It is a pattern created out of React’s compositional nature.

Components take one or more components as arguments, and return a new upgraded component.

HOCs:
- don't modify or mutate components.  they create new ones
- are used to compose components for code reuse
- are pure functions.  They have no side effects and return only a new component


Say we have the component:

    const Info = (props) => (
      <div>
        <p>The info is {props.info}</p>
      </div>
    );

We can create an HOC by passing that component into another component:

    const withAdminWarning = (WrappedComponent) => {
      return (props) => (
        <div>
          {props.isAdmin && <p>This is private info. Don't share yo!</p>}
          <WrappedComponent {...props}/>
        </div>
      )
    };

**NOTE:** it's _BEST PRACTICE_ to name the argument `WrappedComponent`
**NOTE:** the use of spread operator to pass props into the returned HOC.

----------------------------
## connecting React to Redux
----------------------------
When combined, `react` and `redux` are very powerful:
- efficient state management
- hot module reloading that doesn't lose track of state
- time travel debugging with redux devTools

To connect our React app to the Redux store, we need to install `react-redux` via `npm`
This provides two tools we need:
1. `Provider`- the `<Provider />` component which makes the redux store available to the rest of the app
2. `connect` - the `connect()` function connects a React component to the redux store.  It provides its connected component with the pieces of the data it needs from the store, and the functions it can use to dispatch actions to the store.  It does not modify the component class passed to it; instead, it returns a new, connected component class that wraps the component you passed in.

PROVIDER:
To give our React app access to the redux store, we can wrap our AppRouter component in a `<Provider>` tag.  We then give it access to store with a store prop.  We then pass this all to `ReactDOM.render()`

    const jsx = (
      <Provider store={store}>
        <AppRouter />
      </Provider>
    )

    ReactDOM.render(jsx, document.querySelector('#app'))

**NOTE:** `<Provider>` is not a component, but an html tag.  

CONNECT:
`connect` returns a function so the standard call looks like: `connect()()`
The first invocation takes a `mapStateToProps` function.  This is a function we create that accesses the state and returns a props object.
The second invocation is the component we want to "connect" to the redux store

    const ExpenseList = (props) => (
      <div>
        {props.filters.text}
      </div>
    );

    const mapStateToProps = (state) => {
      return {
        filters: state.filters
      }
    };

    export const ConnectedExpenseList = connect(mapStateToProps)(ExpenseList);

------------------
## Redux Dev Tools
------------------
Chrome Extension for DevTools
Requires minimal setup in the app in which you want to use DevTool

`time travel` - a excellent useful debugging tool to see how state is changing step by step in the app

------------------
## redux data flow
------------------

     ------------Store  <--------------
     |           {   }                |
 (re-renders)             (returns new state object)
     |                                |
     v                                |
React Component                    Reducer
     |                                ^
     |                                |
  (invokes)                     (dispatch action)
     |                                |
     ---------> Action Creator -------

# Redux Setup

--------------------
## Creating Reducers
--------------------
1. Map out state logically across different reducers
2. Within each reducer file:
  a. Create an object to store your initial state values that you want Reducer to be connected to
  b. Create a pure function that takes two parameters: state and action
    - state should default to your initial state (usually using default parameters)
  c. Create a switch statement that checks the action.type and performs the logic to create the new state object
  d. Return the new state.  This will update the state in Redux and re-render

_COMMON PRACTICE_
store action types in a constant `types` and reference that types obj for the switch cases.  Feels like an extra step, but it's helpful when debugging as a typo referencing a constant will throw an error.

--------------------
## Creating A Store
--------------------
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


**NOTE:** it is in this step that we add Redux Dev Tools access with `composeWithDevTools()`

----------------------------------------
## Connecting the Store to Components
----------------------------------------
 1. Import `Provider` from `react-redux`, the store from store.js, and your top level component
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

----------------------------------------
## Accessing the Store from Components
----------------------------------------
3 steps:
1. `mapStateToProps()`
2. `mapDispatchToProps()`
3. `connect()`

 1. `mapStateToProps()`
 A **pure function** that receives state as an argument and returns an object listing any properties of state that the componanent wants to subscribe to.
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

2. `mapDispatchToProps()`
A **pure function** that receives dispatch as an argument and returns an object containg event handlers
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

3. `connect()`
Once these functions have been defined, they should be passed to the connect function that we import from `react-redux`.  This ties our component to the redux store.
"takes mapStateToProps and mapDispatchToProps and connects the component to state"

```
export default connect(mapStateToProps, mapDispatchToProps)(componentToConnect)
```

if you have a component that is just reading data from state, but not updating store, `mapDispatchToProps` = null.  Conversely, a component that only writes to state, `mapStateToProps` = null.

------------------
## Action Creators
------------------
1. Create a file and export constant variables that represent all the ways we want to change state. (AKA all of the actions).  These will be the values passed as the type properties in your action objects.
2. All processing of side effects (ajax calls) should be handled in Action Creators.  Once all the data necessary to facilitate the state change is derived, the value should be passed as the payload in your action objects.
- In order to implement async functionality in redux, you'll need to employ middleware like `redux-thunk` or `redux-saga`
3. Each action creator should return and action object (which will be passed to dispatch which will invoke your reducers)

ACTION:
```
import { CHANGE_COUNT } from './types.js';

dispatch({
  type: CHANGE_COUNT,
  payload: 5
});
```

types.js:
`export const CHANGE_COUNT = 'CHANGE_COUNT';`

**NOTE:** This seems tedious but there is a lot of room for error.  Creating a separate types file prevents errors and provides debugging assistance

REDUCER:
```
import { CHANGE_COUNT } from './types.js'

const initialState = { count: 0 };

function countReducer (state = initialState, action) {
  switch (action.type) {
    case CHANGE_COUNT:
      return Object.assign({}, state, {count: action.payload});
    default: 
      return state;
  };
};

export default countReducer;
```

-----------------------
## Redux Debug Workflow
-----------------------
1. Log actions and states.  They are just simple objects.
2. Go through the log and find the action that caused the bad state
3. Check the action.  is that good?
4. Check the reducer.  If you haven't found it yet, the problem is in here.
5. Write a test.  Since the reducers are pure functions, testing simply requires calling the function with the requisite params.
