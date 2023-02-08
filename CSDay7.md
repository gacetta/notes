Day 7 - Feb 6

# DOM Manipulation

- Javascript is a runtime language, meaning that it renders dynamically as you're interacting with the browser

DOM Tree - a huge massive object

      window
        |
      document
        |
     --html--
     |      |
    head   body
     |      |
        etc.

- HTML elements represented as objects

How it works:

1. HTML page loads, browser creates DOM of page
2. DOM is exposed to our JS via `document`
3. THEN, browser should load our JS

## Traversing the DOM

`document` is a global variable that you can use to traverse the DOM

- `getElementById`
- `getElementsByTagName`
- `getElementsByClassName`
- `querySelector` <------- more flexible and more often used
- `querySelectorAll` <------- more flexible and more often used

multiple elements are returned in an array like structure called a NodeList

changing style:
`selector.style.style_attribute = `

## adding and removing elements

- `document.createElement(element)`
- `document.appendChild(element)`
- `document.removeChild(element)`
- `document.replaceChild(element)`

## events

- `element.onclick = function(e) {}` <------ overwrites any existing functionality for click
- `element.addEvenetListener(eventType, function(event) {})` <------- preferred since it ADDS functionality vs overwrites

# jQuery

a JS library that abstracts and simplifies common DOM manipulation tasks into a quick and easy workflow

much less common now than it was several years ago

Basic syntax: `$(selector)` (bling operator)

1. use `$` to accessjQuery followed by a (css-selector) to find the element.
2. Followed by an action() to manipulate the element

ID: #('#myid')

# How to get the most out of Codesmith

`Why are you here?`

1: You will find the answer tot he problem if you're resilient and follow the right steps
2: code, code, code. Build project you care about - don't "learn to code"
