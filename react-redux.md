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