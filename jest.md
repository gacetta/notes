-------------------------
# Testing
-------------------------
Testing replicates tests we can test as humans.  It provides automation of testing without human error

processes for testing code vary based on the needs for the team

## Why test?
Over time, codebases can quickly become too large to hold in your mind at once.

Adding new features can have unintended consequences in other (often seemingly unrelated) areas of the codebase.  Testing provides a safety net for these cases.

Good tests allow devs to iterate on code quickly and confidently, without having to laboriously and unreliably test new features by hand.

## Test Driven Development (TDD)
`test-driven development` - a development process in which code is iterated upon quickly to add new features.

- write tests before adding new code. test will fail since code hasn't been implemented
- TDD results in more maintainable, readable, modular code
- As codebase grows, this coding style influences the architecture of the project in such a way that it can be more easily refactored, tested and iterated upon.

*In this workflow, testing "drives" the development process...*

1. Scope out requirements of new feature
2. write a test for those requirements
3. run test and any others.  new test should fail since nothing has been implemented
4. write code to make test pass
5. run tests to verify test passes (and others don't fail)
6. refactor 
7. test again
8. to add more features, repeat from step 1.

## Types of Tests
- `unit tests`: *most important in TDD.* focus on a single piece of code, usualy a specific func or module.  Unit tests are isolated from other pieces.
- `integration tests`: *med important in TDD.* multiple parts tested together.  Ex: when hit certain http route, does that send me back what I need and store necessary info in the DB?  This depends on multiple controllers/modules/functions...
- `End-to-end (acceptance) test`: *least important in TDD.* Test the app as a whole (both frontend and backend) in a way that replicates the user's experience.  

## Testing Framework
Testing frameworks provide:
- `coordination:` running many tests for a codebase requires coordination.  we want to be able to independently run tests and parallelize them.
- `assertion:` the ability to test our expectations cleanly.
- `isolation:` tests for different parts of our code should be isolated.  This makes it easier to identify specific points of failure.

A testing framework controls the flow of tests, output format, diffing of expected vs actual results, etc.

Some testing framworks: `Jest`, `Mocha`, `Jasmine`, `QUnit`, `Karma`

--------------
## Jest
--------------
provides description functions as global variables (describe, it, before, beforeEach, after, afterEach, etc...)

- automatically runs tests in parallel, making testing faster (coordination).
- has a wider built-in feature set, including:
  - assertions
  - data mocking
  - clearer console output

### Creating Test File
1. create a test folder
2. create sub-folder to match the location of the file to be tested
3. create a test file using naming convention: `filename.test.js`

ex: src>actions>expenses.js &src>test>actions>expenses.test.js

### Expect 
An assertion library is simple way to assert that output matches what is expected, and throw an error otherwise.

Jest uses the function `expect` as an assertion:

  const result = add(1,3);
  expect(result).toEqual(4);

Other assertion libraries: `Chai`, `Should.js`

#### Assertion Operators
`expect.toBe()` should be the EXACT same object (reference)
`expect.toEqual()` should be the the shape...

#### Asymmetric Matchers
`expect.any(constructor)` - matches anything that was created with the given constructor or if it's a primitive that is of the passed type.  Can be used inside `toEqual()` or `toBeCalledWith` instead of a literal value

### Syntax
`describe(test-name, callback)` - describes the tests

`beforeEach()` - functionality to be performed beforeEach test. scoped to a `describe` block.

`toBe` should be the EXACT same object (reference)

`toEqual` should be the shape...

`test` or `it` - both work as a test.

`expect(func()).toEqual(value)`

Example test:
```
const add = (a, b) => a + b;

test('should add two numbers', () => {
  const result = add(3, 4);
  expect(result).toBe(7)
})
```

**NOTE:** `npm start` and `npm test` are special script names that don't need `npm run`

## Isolating Tests / Mocking
we often need to test an individual module that relies on other modules

To test just that module, we fake its dependencies with predictable mocks that mimic the API of the actual dependencies, but return hard-coded results.

We can mock data (e.g. from a DB or external API) as well as functions that our modules depend on.

## Jest's Mocking Library
`Mock`: a fuinction that returns fake data
`Stub`: the fake result that's returned from the mock
`Spy`: recording metadata for a test subject function (i.e. spying on it)

## Writing testable code
- `pure functions` - always produce the same output
- `dependency injection` - 

## Testing Server-Side (Node and Express)
`Supertest` - used to test routes on server with Node.  Uses http request library called `Superagent`to provide a high-level abstraction for testing routes. 

## End-to-end testing
end-to-end testing should resemble a real browser as closely as possible.  We can do this using headless browser or browser automater

Headless: puppeteer, phantomJS, JSDOM
- only supplies the DOM
- Lightweight and fast

Browser Automation: Puppeteer, Selenium, Cypress.io
- provide full browser functionality (actually paints out the dom)
- slower

## Testing React Components
several strategies:
- DOM simulattion - fully rendering components using a headless browser (typically JSDOM).  Userful for integration tests, as well as unit tests.
- snapshots (built into Jest): keeps records of of a component's render to catch unexpected changes.  useful for unit testing simple components
- shallow rendering - moving away from it (and Enzyme - developed by Airbnb) 

## React Testing Library *STANDARD*
released in 2018 and is industry standard.
part of a larger family of libraries for testing frontend frameworks, all of which are used on top ofa core DOM Testing Library, in conjunction with Jest DOM.

## Testing Library Philosophy
- discourages testing of implementation details
- emphasizes using DOM nodes