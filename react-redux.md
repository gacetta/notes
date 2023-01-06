# redux

`redux` is a library that helps manage state.  

In other words, it is a store to store the state of the variables in your app.

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

