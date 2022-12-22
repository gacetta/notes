# react

## why learn react
1. react library itself
- react builds on what you already know about javascript
- component based, helps to break code into small pieces
- react is very fast
- can be used for many applications
2. react community is strong
- no need to reinvent the wheel for your app.  likely already a library available
- great resources
- used by many companies

---
## JSX - JavaScript XML
---
language extension provided to us by React.  We can integrate HTML into our JS language:

  `const pElement = <p>This is JSX</p>`
  `const destination = document.querySelector('#app')`

---
## ReactDOM.render()
---
**NOTE:** ReactDOM.render is no longer supported in React 18. Use createRoot instead. Until you switch to the new API, your app will behave as if it's running React 17. Learn more: https://reactjs.org/link/switch-to-createroot

`ReactDOM` has a `.render()` method.  Takes 2 args: element-you-want-to-render, where-you-want-to-render-it-to
we can use `ReactDOM.render()` to render the above code

  `ReactDOM.render(pElement, destination)` // doesn't render to DOM.  Not valid JS

---
# babel
---
Since JSX isn't valid JS, we use babel to compile JSX down to regular readable vanilla JS.  We can see that behind the scenes, `ReactDOM` is using other `React` methods when passed through Babel:

  const template = <p id='poo'>This is JSX</p>

Is transpiled to:

  "use strict";

  const template = /*#__PURE__*/ React.createElement(
    "p",
    {
      id: "poo"
    },
    "This is JSX"
  );


---
## JSX syntax
---
We can access variables or call functions inside JSX by using `{}`

  const test = 'platypus o'plenty';

  <p>{test}</p> 

Function call:

  const testFunc = (text) => text ?? 'unknown';
  <p>testFunc('hey boobie')</p> 

---
## JSX - booleans, undefined, null
---
booleans, undefined and null are all ignored in JSX.

For example, we could call a function that renders a phrase if a string or number value is returned, nothing if undefined

  const testFunc = (text) => text ? <p>{text}<p> : undefined;
  {testFunc('I am the walrus')} // 'I am the walrus'
  {testFunc()}                  // renders nothing

---
## JSX - attributes
---
Some attributes work as expected (`id`).  
Others have been renamed (`class` = `className`).  This is due to the fact that certain words in JS are reserved keywords.

For a list of what is supported and what is slightly different: https://reactjs.org/docs/dom-elements.html

**NOTE:** attributes are named using camelCase in JSX.  so something like `maxlength` in HTML is referred to as `maxLength` in JSX.

We can use variables to assign attributes using the same `{}` as before.

---
## JSX - data binding
---
JSX does not have built in data binding.
We build a DOM structure based on the variable data at the time of construction, and render that DOM to the screen.
If it changes, the DOM is not re-rendered.

To properly update and render, we have to re-render each time a function is called.  React is very efficient with "re-rendering the entire page".  It doesn't actually erase, re-construct and re-render.  Instead, it figures out the minimum amount of elements that need to be re-rendered and only updates those elements.

---
## JSX - arrays
---
Numbers are valid datatype in JSX:
```
{
  [99, 98, 97]
}
```
is equivalent to `{99}{98}{97}`   //999897 is rendered

Strings are valid datatype in JSX:
{
  [99, 'Mike Mike Mike Mike Mike']  //99Mike Mike Mike Mike Mike
}

Booleans are valid but ignored in JSX:
{
  [99, 'Bananahands', false]    //99Bananahands
}

Can we render an array of JSX in JSX?
{
  [{<p>a</p>},{<p>b</p>},{<p>c</p>}]    // valid but react throws an error - it has no way to reference each element
}

{
  [{<p key='1'>a</p>},{<p key='2'>b</p>},{<p key='3'>c</p>}]    // no error, in the future, they will have id
}

---
## components
---
react uses component based architecture

one component might responsible for rendering the header, another for the rendering the user profile, another for rendering a form and handling form submission.

Each component is responsible for defining the JSX when that compoenent is used and responsible for handling interaction with that component.

---
### component implementation
---
**To create**
extend the `React.Component` class:

  class Header extends React.Component {
    render() {
      return <p>Test element</p>
    }
  }

**NOTE:** extended class name must have capitalized naming convention to work properly (e.g. Header vs header).  If not properly capitalized, program won't crash, but React won't recognize the component.

**To use**

    const jsx = (
      <div>
        <Header />
      </div>
    )

    ReactDOM.render(jsx, document.getElementById('app'));

These components can be nested as needed so one Component might contain other components.

---
## component props
---
we can pass values into our Components as property/value pairs.
`<Header title="test-title">` //title: test-title

to access the properties from within the Component, use `this.props.propName`
`console.log(this.props.title)` // test-title

variables can be passed as well:
`const title = 'Test Title By Variable'`
`<Header title={title}>`  //title: Test Title By Variable

---
## this binding in event listeners
---
`this` binding is lost in an event listener.  To workaround, we can use `bind()`

this can be done in two ways:
1. in line: `onClick={this.eventHandler.bind(this)}` however this is inefficient since `bind` will be called every time we click the button
2. modify the constructor function.  This way `bind` is only called once and the function is properly bound to the component no matter where it is called (including event listener)

    class Name extends React.Component {
      constructor(props) {
        super(props);
        this.eventHandler = this.eventHandler.bind(this)
      }
    }

---
## component state
---
`state` is an object within the class that stores values we need to reference and modify.

A general overview of the big picture implementation:

1. Setup default state object
2. Component rendered with default state values (implicit - behind the scenes)
3. Change state based on event
4. Component re-rendered using updated state values (implicit - behind the scenes)
5. Start again at 3

---
### create component state
---

CREATING A COMPONENT STATE - is relatively simple.  We just declare the `state` object with any properties we want inside the constructor:

    class ComponentCounter extends React.Component {
      constructor(props) {
        super(props);
        this.componentFunc = this.componentFunc.bind(this);
        this.state = {
          count: 0
        };
      }
    }

---
### updating component state with this.setState
---
we use `this.setState` to update state.  When we're finished, it will render automatically.

`this.setState` gives us access to the previous state object.  We can use this to update the state object with our modified values.

  componentFunc() {
    this.setState((prevState) => {
      return {
        count: prevState.count + 1
      };
    });
  }

`this.setState` doesn't have to include all properties from `state` object, only the properties that are being modified.  When we're defining the updates in our `this.setState` function, we're not overriding the state object completely, we are just changing specific values.

---
### alternate setState syntax - OLD OUTDATED
---
`this.setState` can take an object as an argument (instead of using arrow function with `prevState` to return an updated object).  In this way, we can declare a new `state` object to update our values.  However, this can cause issues as `setState` is an `async` func in React.

componentFunc() {
  this.setState({
    count: 0                      // never updates count = 0
  });
  this.setState({
    count: this.state.count + 1   // updates count + 1 
  })
}

this is due to the fact that react is doing a lot in the background with `setState`.  It bundles all the setState state updates in one step and the `state` object isn't updated until the end.  So the second `setState` call is referencing the old `count` value instead of the updated `0` count.

---
## props vs state
---
Props                                   State
- an object                             - an object
- can be used when rendering            - can be used when rendering
- changes from above cause re-render    - changes cause re-render
- comes from above                      - defined in component itself
- can't be changed by component itself  - can be changed by component itself

---
## Stateless Functional Components
---
Components can also be written as functions.  These functional components do not have access to state (or `this` in an arrow function).  The function implies `render()` so we can just return what we want to render.

    const ComponentName = (props) => {
      return (
        <div>
          {props.optionText}
        </div>
      )
    }

**NOTE:** we don't have access to `this` with an arrow function, so we use the `props` parameter to access `props` instead of `this.props`.

Advantages: 
- faster than class based components (since they don't include all the class functionality and state functionality).
- easier to read and write
- easier to test

----------------------------------------------------------
## adding defaultProps to functional components
----------------------------------------------------------
we can add default properties after we define a component.  We can use these property values (or not) for each instance of our component.  If a property isn't defined -> grab the value from the default properties.  OR if a property is defined, overwrite the default property.  OR if a property isn't defined -> don't display the property at all. 

  const Header = (props) => {
    return (
      <div>
        <h1>{props.title}</h1>
      </div>
    )
  }

  Header.defaultProps = {
    title: 'Default Value Here!'
  }

-----------------------------
## lifecycle methods
-----------------------------
these are methods that are invoked at certain times in the lifecycle of a component: when component updates, when component loads, when component is deleted, when component is changed, etc.

we never call these functions directly.  They are always invoked behind the scenes at specific times in the lifecycle - thus naming is important as these are reserved names that JS/React will reference

**NOTE:** lifecycle methods are only accessible for our class based components (another reason functional components are faster)

### componentDidMount
`componentDidMount` is invoked immediately after a component is mounted (inserted into the tree)

### componentDidUpdate
`componentDidUpdate` is invoked immediately after updating occurs.  This method is not called for the initial render.

`componentDidUpdate(prevProps, prevState)` has access to both the previousProps and previousState variables

### componentWillUnmount
`componentWillUnmount` is invoked immediately before a component is unmounted and destroyed.  

-----------------------------
## creating components
-----------------------------
It's _GOOD PRACTICE_ to have a different file for each component.  This keeps code readable and maintainable.

When naming component files, it's _GOOD PRACTICE_ to give the file the same name as the component.

**TRICK:** we can export a class based component as default by using `export default` in front of the `class` keyword.

`export default class AddOption extends React.Component { ...code... }`

**NOTE:** even though some components aren't referencing React directly, if there is JSX then we need to import React since Babel will convert JSX to React.CreateElement calls.