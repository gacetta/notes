# react
React is a JavaScript library developed by Facebook that was used to build instagram.  It allows developers to easily create fast user interfaces for websites and applications.  The main concept is virtual DOM - it is tree based, using javascript components created with react to mimic a DOM tree.  It does the least amound of DOM manipulation possible to keep React components up to date.

React is an open-source JavaScript framework and library developed by Facebook.  It is used for building interactive user interfaces and web applications quickly and efficiently with significantly less code than with vanilla JS.

--------------------------------------------------------
## why do we need a front end framework
--------------------------------------------------------
If you're building a web app with js, css, and html, the work flow is usually.

1. build html structure first
2. JS somwhere.. either in the html file, or in another file(s)
3. add style

JS COULD be inline as a script tag but there are no rules about where they are stored.

The user interface is generally created in HTML on the SERVER first, then sent to the browser.

In react, the html file might be minimal and most of the structure is in react js files and components, meaning
the user interface is defined on the BROWSER first as JSX, and ReactDOM will render that into the html file.
In react components, the structure and the JS code that manipulates that structure is in the SAME place.

In vanilla, it was very hard to figure out WHERE the js functionality existed in the file structure and what DOM elements they pertained to.

Main differences
VANILLA JS:
1. Vanilla js stores data in the DOM as a value. To access it, you need to find the dom and get its value.
2. Vanilla js has no "state" tracking/updating so you have to always access a value to see if it's changed based on the user input

```
addButton.addEventListener("click", function() {
  const input = document.getElementById("item-input");
  const list = document.getElementById("grocery-list");

  const listNode = document.createElement("li");
  const textNode = document.createTextNode(input.value);

  listNode.appendChild(textNode);
  list.appendChild(listNode);
});
```
REACT:
1. React stores values in js variables
2. State tracks and updates specified values

```
function addItem() { setItems([...items, itemInput]); }
```

### why React?
1. react library itself
- react builds on what you already know about javascript
- component based, helps to break code into small pieces
- react is very fast
- can be used for many applications
2. react community is strong
- no need to reinvent the wheel for your app.  likely already a library available
- great resources
- used by many companies

-----------------------------------
## JSX - JavaScript XML (and babel)
-----------------------------------
All react code is written in JSX, a language extension provided by React (as of now, wasn't the case in the beginning).  It allows the integration of HTML into our JS language:

  `const pElement = <p>This is JSX</p>`
  `const destination = document.querySelector('#app')`

Since JSX isn't valid JS, we use `babel` to compile JSX down to vanilla JS.  We can see that, behind the scenes, `ReactDOM` is using other `React` methods when passed through Babel:
```
  const template = <p id='poo'>This is JSX</p>
```
Is transpiled to:
```
  "use strict";

  const template = /*#__PURE__*/ React.createElement(
    "p",
    {
      id: "poo"
    },
    "This is JSX"
  );
```

----------------------------
## ReactDOM.render()
----------------------------
**NOTE:** ReactDOM.render is no longer supported in React 18. Use createRoot instead. Until you switch to the new API, your app will behave as if it's running React 17. Learn more: https://reactjs.org/link/switch-to-createroot

`ReactDOM` has a `.render()` method.  Takes 2 args: element-you-want-to-render, where-you-want-to-render-it-to
we can use `ReactDOM.render()` to render the above code

----------------------------
## JSX - syntax
----------------------------
We can access variables or call functions inside JSX by using `{}`
```
  const test = 'platypus o'plenty';

  <p>{test}</p> 
```
Function call:
```
  const testFunc = (text) => text ?? 'unknown';
  <p>testFunc('hey boobie')</p> 
```
----------------------------
## JSX - booleans, undefined, null
----------------------------
booleans, undefined and null are all ignored by JSX (but they don't throw errors).

This allows to call a function that renders a phrase if a string or number value is returned, nothing if undefined
```
  const testFunc = (text) => text ? <p>{text}<p> : undefined;
  {testFunc('I am the walrus')} // 'I am the walrus'
  {testFunc()}                  // renders nothing
```
----------------------------
## JSX - attributes
----------------------------
Some attributes work as expected, such as `id`.
Others have been renamed (`class` = `className`).  This is due to the fact that certain words in JS are reserved keywords.

what is supported and what differs: https://reactjs.org/docs/dom-elements.html

**NOTE:** attributes are named using camelCase in JSX. `onclick` in HTML is `onClick` in JSX.

We can use variables to assign attributes using the same `{}` as before.
```
<button 
  className="button button--link"
  onClick={props.handleDeleteOptions}
>
```
----------------------------
## JSX - data binding and rendering
----------------------------
JSX does not have built in data binding.
We build a DOM structure based on the variable data at the time of construction, and render that DOM to the screen.
If it changes, the DOM is not re-rendered.

To properly update and render, we have to re-render each time a function is called.  React is very efficient with "re-rendering the entire page".  It doesn't actually erase, re-construct and re-render.  Instead, it figures out the minimum amount of elements that need to be re-rendered and only updates those elements.

----------------------------
## JSX - arrays
----------------------------
Arrays will render multiple elements in order:
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
      [{<p key='1'>a</p>},{<p key='2'>b</p>},{<p key='3'>c</p>}]    // no error since each has a reference
    }

----------------------------
# components
----------------------------
react uses component based architecture which means creating smaller lego-like building blocks.  By splitting our code into separate components, the overall project is more manageable and understandable.

one component might responsible for rendering the header, another for the rendering the user profile, another for rendering a form and handling form submission.

Each component is responsible for defining the JSX when that component is used and responsible for handling interaction with that component.  I.e. the code for the structure and JS code that manipulates the structure is in the same place.

There are two types of components:
1. Class components
2. Functional components

----------------------------
## class component implementation
----------------------------
TO CREATE COMPONENT:
we can use `classes` to implement components by extending the `React.Component` class:
```
  class Header extends React.Component {
    render() {
      return <p>Test element</p>
    }
  }
```
**NOTE:** extended class name must have capitalized naming convention to work properly (e.g. Header vs header).  If not properly capitalized, program won't crash, but React won't recognize the component.

TO USE COMPONENT:
we use a single HTML like tag: `<Component />`.  We also have to render the ReactDom somewhere:
```
    const jsx = (
      <div>
        <Header />
      </div>
    )

    ReactDOM.render(jsx, document.getElementById('app'));
```
**NOTE:** Components can be nested as needed so one Component might contain other components.

----------------------------
## component props
----------------------------
we can pass values into our Components as property/value pairs, e.g. 
```
<Header title="test-title">` //title: test-title
```

When React sees an element representing a user-defined component, it passes JSX attributes and children to this component as a single object. We call this object `props`.  That means to access a variable such as `title` above, we use `this.props.propName`:
```
console.log(this.props.title) // test-title
```

variables can be passed as well:
`const title = 'Test Title By Variable'`
`<Header title={title}>`  //title: Test Title By Variable

----------------------------
## this binding in event listeners
----------------------------
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
**NOTE:** the only purpose of the constructor here is to bind the eventHandler method.

----------------------------
## component state
----------------------------
`state` is a built-in react object used to contain data or information about a component.  A component's state can change over time - whenever it changes, the component re-renders.

A general overview of the big picture implementation:

1. Setup default state object
2. Component rendered with default state values (implicit - behind the scenes)
3. Change state based on event
4. Component re-rendered using updated state values (implicit - behind the scenes)
5. Start again at 3

----------------------------
### create component state
----------------------------
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

--------------------------------------------------------
### updating component state with this.setState
--------------------------------------------------------
Don't modify state directly:  While the values will update, they won't re-render.  
Instead use `this.setState` to update state. This will update values and re-render.

`this.setState` gives us access to the previous state object via the first argument.  We can use this to update the state object with our modified values.

  componentFunc() {
    this.setState((prevState) => {
      return {
        count: prevState.count + 1
      };
    });
  }

**NOTE:** `this.setState` doesn't have to include all properties from `state` object, only the properties that are being modified.  When we're defining the updates in our `this.setState` function, we're not overriding the state object completely, we are just changing specific values.

--------------------------------------------------------
### alternate setState syntax - OLD OUTDATED
--------------------------------------------------------
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

----------------------------
## props vs state
----------------------------
Props                                   State
- an object                             - an object
- can be used when rendering            - can be used when rendering
- changes from above cause re-render    - changes cause re-render
- comes from above                      - defined in component itself
- can't be changed by component itself  - can be changed by component itself

--------------------------------------------------------
## Stateless Functional Components
--------------------------------------------------------
Components can also be written as arrow functions.  These functional components do not have access to state (or `this` in an arrow function).  The function implies `render()` so we can just return what we want to render.

    const ComponentName = (props) => {
      return (
        <div>
          {props.optionText}
        </div>
      )
    }

**NOTE:** we don't have access to `this` with an arrow function, so we must provide the `props` parameter to access `props` instead of `this.props`.

Advantages: 
- faster than class based components (since they don't include all the class functionality and state functionality).
- easier to read and write
- easier to test

----------------------------------------------------------
## defaultProps to functional components
----------------------------------------------------------
after defining a component, we can set default property values which can be used (or not) for each instance of our component.  
- if a prop isn't defined -> grab the value from the default props.  
- if a prop is defined, overwrite the default prop.  
- if a prop isn't defined -> don't display the property at all. 

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

-----------------------------
## ES6 class properties
-----------------------------
We can now declare properties in a new class without using the constructor function

class NewSyntax {
  name = 'AGreatName',
  age = 'aged 100 days'
}

--------------------------------
## passing children to component
--------------------------------
`props.children` is a special built-in property of React components that gives us access to any child elements defined within the component.

We know how to use components using the `<Component />` syntax.
We can also use components with a different syntax that looks even more like HTML open and close tags: 
```
<Component></Component>
```
That syntax allows us to put JSX inside the component tags.  That JSX will be passed to the component via `props.children`

    const Component = (props) => {
      return (
        <div>
          {props.children}
        </div>
      );
    }

    ReactDOM.render(
      <Layout>
        <div>
          <h1>This becomes a chilren prop in Component</h1>
        </div>
      </Layout>
    ), document.getElementById('app'))

--------------------------------
## react-modal
--------------------------------
react modal is a 3rd party library that provides a modal component to pop up on the page.

`react-modal` requires two args:
- `isOpen` takes boolean.  `true` - modal is open.  `false` - modal is closed.
- `contentLabel` - text for accessibility

A third arg is helpful:
- `onRequestClose` is similar to `onClick`.  It specifies what action to take when trying to close the window by hitting ESC or clicking outside the window. 

--------------------------------
## hooks
--------------------------------

### useState

----------------------------------------
## useEffect
----------------------------------------

### CLEAN-UP
`useEffect()` returns a cleanup function with behavior similar to `componentDidUnmount`

```
const Component = () => {
  useEffect(() => {
    console.log('setting up effect')

    return () => {
      console.log('cleaning up effect')
    }
  }, [])


  return (
    <div>
      <h1>test</h1>
    </div>
  )
}
```

----------------------------------------
## useReducer
----------------------------------------
`const [state, dispatch] = useReducer(reducer, initialArg, init?)`

example:
```
const notesReducer = (state, action) => {
  switch (action.type) {
    case 'POPULATE_NOTES':
      return action.notes
    default:
      return state
  };
}

const NoteApp = () => {
  const [notes, notesDispatch] = useReducer(notesReducer, []);
}
```

**NOTE:** `useState` uses `useReducer` behind the scenes

----------------------------------------
## useContext
----------------------------------------
To provide context:
```
const NotesContext = React.createContext()

<NotesContext.Provider value={{ notes, dispatch}}>
  ...code...
</ NotesContext.Provider>
```

To consume context:
```
const { notes } = useContext(NotesContext);
```

----------------------------------------
## Fragments
----------------------------------------
react requires the return of a single root JSX element.  Sometimes we don't need a `<div>`, and instead we can use React fragments.  These fragments aren't shown in the html markup.

----------------------------------------
## Custom Hooks
----------------------------------------

