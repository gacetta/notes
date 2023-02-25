# OAuth
`OAuth` - Open Authorization.  Communication protocol for third-party access to other servers.
"Would you like to sign in with your google account" or Twitter, FB, Github, etc...

- potentially access some data

`authentication` is the processes of verifying a client is who they claim to be
`authorization` is the process of granting a client access to a protected resource

**Authorization requires Authentication first!**

## Dataflow
several different dataflows.  This is one:
`client` - user on the browser
`server` - first-party application we are building (`client` in OAuth)
`GitHub` - OAuth provider

1. Client initiates Actions to Server
2. Server REDIRECTS Auth URL with Client ID (where `client` is ) and Scope
  a. this redirect response goes to client
  b. client then makes a request to GitHub OAuth
3. GitHub REDIRECTS with Authorization Code (http://localhose:3000/github/callback)
  a. this redirect response goes to client
  b. client then makes a request to First Party App
  *note:* this authorization code is short-lived (like 10 seconds)
4. Server calls Access Token URL with Auth. code and client secret to GitHub
5. GitHub responds to server with Access Token / Server saves Token in Cookie
  a. now Server has access to GitHub resources
6. Server sends API call including Access Token
7. Server responds to Client with data from GitHub

## Implementing OAuth
1. register app with OAuth API provider

  a. get client_id            // client refers to application, not user
  b. get client_secret        // store in .env file
  c. register a redirect URI

2. Obtain authorization code

Parameters for request:
  a. scope
  b. redirect_uri (maybe)
  c. client_id

3. Exchange Code for Token - combine authorization code with client_id and client_secret, send to github to authenticate and generate an access token.  This is generally done over a query string

4. access token will grant you access to the scope of the API you requested

Subsequent Requests will include:
  a. API URL
  b. Header with access token

### env file
import dotenv
this is where you want to store client_secret

## Pros & Cons
1. nice feature for UX (making new accounts for everything can be annoying)
2. Utilize other website's features (calidation is already fully handled on GitHub, let them handle it).
3. Rely on someone else's security and validation.
4. More setup involved?
5. Some users might not have/want to use other accounts.  Users might be weary of your application using FB on their behalf!

-------------------------
# Testing
-------------------------
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

## Jest - testing framework
provides description functions as global variables (describe, it, before, beforeEach, after, afterEach, etc...)

- automatically runs tests in parallel, making testing faster (coordination).
- has a wider built-in feature set, including:
  - assertions
  - data mocking
  - clearer console output

  ## Assertion library
  A simple way to asserrt that output matches what is expected, and throw an error otherwise.

  Jest uses the function `expect` as an assertion:

    const result = add(1,3);
    expect(result).toEqual(4);

  Other assertion libraries: `Chai`, `Should.js`

  ## Jest syntax
  `describe(test-name, callback)` - describes the tests
  `beforeEach()` - functionality to be performed beforeEach test. scoped to a `describe` block.

  `toBe` should be the EXACT same object (reference)
  `toEqual` should be the shape...

  `test` or `it` - both work as a test.
  `expect(func()).toEqual(value)`

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