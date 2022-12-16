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
