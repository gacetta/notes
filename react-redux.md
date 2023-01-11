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
      Options               AddOptions
      Option

However, in a complex app, there will likely be more than one parent component.  Where do we store state?

AddExpensePage            ExpenseDashboardPage
AddExpense                    Expenses
                              Expense

2. Reusability?

When we're passing props and sharing state often, components become tightly bound to each other.  This limits their reusability as they need specific things from the parent that the parent might not have access to.

**NOTE:** avoid passing props down a chain of a tree just so the last component can use it.

SOLUTION: redux

-----------------------
## create a redux store
-----------------------
**NOTE:** there should only be a single store in your app
**NOTE:** `createStore` depreciated.  Use `configureStore` from `redux-toolkit`

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
## updating the store with actions
----------------------------------
`action` - an object that gets sent to the store that describes the action we want to take.  

CREATE:
Some actions we might want to take: increment, decrement, reset, etc.  e.g an increment action would look like:

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
In redux, the reducers are the **pure functions** that contain the logic and calculation that needed to be performed on the state. These functions accept the initial state of the state being used and the action type. It updates the state and responds with the new state. This updated state is sent back to the view components of the react to make the necessary changes. Basically, In short, we can say that Reducer’s work is to return the updated state and to also describe how the state changes.

the concept: `(state, action) => newState`

    const initialState = {};
    const reducer = (state = initialState, action) => {
      // Write your code here
    }

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
        expenses: expensesReducer,    // specify root property (expenses) and what reducer to use
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