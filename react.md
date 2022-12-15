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
## booleans, undefined, null in JSX
---
booleans, undefined and null are all ignored in JSX.

For example, we could call a function that renders a phrase if a string or number value is returned, nothing if undefined

  const testFunc = (text) => text ? <p>{text}<p> : undefined;
  {testFunc('I am the walrus')} // 'I am the walrus'
  {testFunc()}                  // renders nothing