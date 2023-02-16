# REACT

"a layer on top of DOM manipulation but in a more user friendly way"

"you're gonna hate it at first"

"react really becomes beneficial when you're building apps with scale"

HTML/CSS/JS shortcomings

1. You end up recreating a lot of built in browser functionality to support SPAs
2. Large, data-driven apps become too complicated and hard to maintain state.

`state` - data in the application specific to the user

SPAs - great for performance. Lose some built in browser functionality (such as back button)

FRAMEWORKS:

1. organize code using shared metaphor, making teamwork easier
2. can help performance with prebuilt optimizations (latest & greatest algos)
3. provide construct for handling state across multiple components
4. can help security (most have built-in security features)
5. write less code

React, Vue, Angular, (Backbone, Ember - more dated)

HTML shortcomings:

1. HTML sucks
2. not expressive. Designed for marking up things like Wikipedia
3. not a programming language

- no loopings
- no variables
- no capability to generate visualizations for large data sets
- groups of HTML tags are not reusable

Function call: Post()
React call: <Post />

## Introducing React

- created by Facebook in 2013
- creates "expressive user interfaces"
- encapsulates the look and behavior of HTML and JS logic into "components"

## Components

What are they?

1. split UI into independent, reusable pieces and think about each piece in isolation
2. represent part of the DOM, can display data and provide user interactivity
3. can be made up of DOM elements and/or other components
   _They are the building blocks for React Apps_

To Create:

1. `JSX` - JavaScript XML - is precompiled syntax extension to JS that produces React 'elements' that can be rendered into HTML elements on the DOM
2. you can embed JSX into JS expressions
3. you can embed any JS expression into JSX by wrapping it in curly braces.

## Class Components

They must have a `render()` method. What is returned from that is what will be showing up in the DOM.

Components have hierarchy - parent / child.

Components can pass data DOWN from parent to child via JSX attributes. To access that data in the child component, we use the `props` object. `this.props.propName`

```
class App extends React.Component {
  render () {
    return (
      <div>
        <Welcome name='Richard' />
        <Welcome name='Dinesh' />
        <Welcome name='Sammijack' />
      </div>
    )
  }
}

class Welcome extends React.Component {
  render() {
    return <h1>Hello, {this.props.name}. Welcome!</h1>
  }
}

// As Functional Component

const App = () => {
  return (
    <div>
        <Welcome name='Richard' />
        <Welcome name='Dinesh' />
        <Welcome name='Sammijack' />
      </div>
  )
}

const Welcome = (props) => {
  return <h1>Hello, {this.props.name}.  Welcome!</h1>
}
```

## Getting Started

IMPORTS:
React from 'react'
ReactDom from 'react-dom/client'
CSS

...Components Here...

AT BOTTOM
root = ReactDOM.createRoot(document.querySelector('#root'));
root.render(<App />)

## How does React handle State

State in React follows a top down, unidirectional data flow in order to keep data accessible and easily maintained.

Data never goes from child --> parent. or sibling --> sibling

Golden Rules of State:

1. maintained in top level components (as an object) and is passed down (on props object) to child components
2. Props never go upstream and never from sibling to sibling. Data only goes from parent to child
3. This assists in data flow, but the values of these props are immutable.

### Store State

```
class App extends React.Component {
  constructor() {
    super();
    this.state = {
      numbers: [50, 51, 52, 53, 54, 55, 56]
    }
  }
  render () {
    return (
      <div>
        <Box number={this.state.numbers[0]}>
        {this.state.numbers.map(
          (cohort) => <Box cohort={cohort}/>)}
      </div>
    )
  }
}
```

**NOTE:** an array in JSX renders each element almost like forEach

### Update State

`setState`

1. The only way you should ever update state in a React application is by calling setState()
2. setState should only be declared from within the component where state is defined. We call this a stateful component.

Virtual DOM

1. optimizes performance
2. uses React-Dom library - represents DOM elements in a lightweight JS form
3. by doing so, it processes changes very quickly, only rendering the real DOM when and where needed

## State And Event Handling

**THIS IS BAD** `this.state.property = value`
`setState()` must be declared in the same component that our state is declared

we can accees setState in descended components by creating handler methods in our stateful component that invoke setState. We then pass these functions down as props to our descendants.

- once our child receives as a prop, we can pass into evant handlers on DOM elements as callbacks. When even fires, the callback is invoked, which calls setState, updates state.

### BINDING CLASS METHODS

- before passing functions down as props, you must bind their `this` value in the constructor

DON"T FORGET EVENTS Argument in listeners

## Synthetic Events

when event callback is invoked, React creates synthetic event and passes `event` object as first parameter to the handler.

## Updating State Under The Hood

Reconciliation
Each time there is a state change (setState), a reconciliation process kicks off:

1. All components that reference the changed state value are re-rendered in the new virtual DOM
2. The difference between the previous virtual DOM and the new one will be calculated with React's optimized diffing algo
3. The real DOM will be updated with what has changed.

### Optimized Diffing Algo

Typical tree diffing algos have time O(n^3). React has O(n)

React operates on various assumptions when comparing DOM nodes and component structure:

1. When comparing two nodes if they are of different types it assumes the rest of the tree below it needs to be re-rendered
2. If you specify a key on each node in a list (optional), React is able to find, insertion, deletion, substitution changes.

### React performant

1. Updating actual DOM is inexpensive. Painting DOM to screen is... React does this efficiently by batching changes together to paint only once.
2. React only updates the sub tree
3. Further optimizations can be set up through specific lifecycle methods like shouldComponentUpdate.

## Component Lifecycle Methods

1. they allow us to inject code at different points during a component's lifecycle birth/growth/death process
2. render method is primary lifecycle function to be concerned about

- add rending logic and computational logic to the render function
- the only required lifecycle method
- should be a pure function (no setState)

`componentDidMount()`

- called immediately after component is rendered
- where fetch calls should live

`componentDidUpdate`

- called immediately after updating occurs (more specifically after `render`)

`componentWillUnmount`

- called JUST before a component is removed from the DOM

## Types of Components

`container` - a top-level stateful component that manages state and passes props to its children. class ClassName extends React.Component. AKA Smart/Stateful/Class components

`presentation` - stateless components that are only responsible for receiving props and displaying a view. Classes OR functions AKA Dumb/Functional/Stateless components.

### Class components

require `this` and thus, binding

### Stateless Functional components

pass in `props`, no `render()` function required

## BONUS - React Hooks

Introduced 2018 v16.8
Allow functional components ability to do things that previously only class components could do.
MOST IMPORTANTLY - store state

Problems solved:

1. classes are verbose
2. lifecycle methods group unrelated functionality
3. Sharing state between components was convoluted
4. To add state to stateless functional component, you'd need to completely refactor it to a class

Various Hooks:

- useState
- useEffect
- useContext
- useReducer
- useRef
- useCallback
- useMemo
  and more

## useState

hook that gives functional component access to a state.
returns an array containing a piece of the state and a function that can be used to updated it
`const[state, updateState] = React.useState('initial state')`

## useEffect

equivalent of lifecycle methods componentDidMount, componentDidUpdate, and componentWillUnmount

functions passed into useEffect will run each time the component re-renders

```
`React.useEffect(() => {
console.log('component updated');
})
```

