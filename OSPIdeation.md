# Recoil
state management for react
- improves state mgmt while retaining API and semantics/behavior to be as Reactish as possible
- shared state (global state?) has same simple get/set interface as React local state (but can be encapsulated with reducers)

THOUGHTS:
- might be too specific.  if your company doesn't use it, it won't transfer much




# Obsidian
caching graphQL router for Oak Deno server and a caching client for your server-side rendered React App

# GraphQL
Traditionally, APIs consumed with Rest requests - results in UNDER fetching (multiple calls) and OVER fetching (get back a lot of data just for one thing)

GraphQL is a query language for reading and mutating data in APIs


# Signal / Solid
Solid - 2018
- extremely performant
- components that return JSX
- no VDom, compiled js (like svelte) to bring code to vanilla js
- lightweight and out performs nearly every other framework
- truly reactive: a function component is only called once
- signal is like state 

Solid - state visualizer?

HIGH RISK / HIGH REWARD



# Spearmint
easy to create testing via GUI
- works with react, svelte, solid, redux, vue
- graphQL, Hooks, Context
- implements puppeteer, jest
- axe-core testing library for accessibility standards
- snyk library for security standards

THOUGHTS:
1. front-end is pretty fleshed out
2. Generic react related tech, widely applicable for all interview settings: 
- React/Vue/Svelte/Solid, AKA framework independent.
3. Bootcamp for learning typescript

ITERATION ROADMAP
Continual TypeScript Conversion:
- This will help with the maintainability and quality of spearmint
Persistant data:
- There is a framework for login, including github and google, however it is not implemented
- Adding more features to make login and user data more valuable, such as favorited or saved tests
Adding more testing:
- Either more frameworks to test
- Or deeper testing of existing frameworks
Revamp UI for certain test cases:
- Some of test cases needs improvement on UI as they do not have any styling or optimal user experience

KNOWN BUG:
- Screen reader for Accessibilty can turn on and off but does not read.

CHALLENGES:
- learn typescript...
- OAuth
- refine testing understanding, both in jest and puppeteer



LOGIN:
Cleanup UI - clear after incorrect login, separate sign up page, 
- CHECK Oauth functioning properly
- BUG: logging in to google doesn't display your name, just Welcome!
- ADD FUNC - saved tests? favorite tests? last opened project? display your name?

TEST CREATION SCREEN:
- CLEAN UI input fields lack consistency, some are dropdown, some are text input, some are dropdown with text input.
- CLEAN UI lacks clear instructions for buttons
- CLEAN UI confusing to set up test: what is `describe`, what is `it`
- ADD FUNCTIONALITY doesn't look like there's `before` or `after` capabilities
- FIX UI fix draggable interface - describes move easily and cleanly, its do not
- ADD FUNCTIONALITY - copy and drag ability
- FIX Scrolling - it's possible to lose the Add Describe Block
- ACCESSIBILITY: tabbing through app is unpredictable
- FUNCTIONALITY to go back to what kind of test to create
- FUNCTIONALITY - choose save location or overwrite


SIDE WINDOW:
- ADD FUNCTIONALITY: separate tab for tests and for code
- FIX FUNC terminal doesn't resize properly with expansion
- CLEAN UI update colors to match theme
- BUG: entering URL into browser tab crashes program
- FUNCTIONALITY: window resizing?
- FUNCTIONALITY: toggle switch for side window

RUN TESTS:
- FIX UI - nice menu expand, clicking on new tab doesn't close other tab.

NEED HELP:
- BUG: clicking the need help crashes app

SUGGESTIONS:
1. Exporting test files in TypeScript: the tests currently export in JS.

2. Convert codebase to TypeScript: currently, there are some files in TS, and others in JS. It would be great to convert all to TS.

3. Dry refactoring of codebase: A lot of the folders and files for the frontend frameworks testing are the same, and the codebase would GREATLY benefit from refactoring and modularizing those.

(4. and 5.) Persist user data: there is currently sign up and login functionality. V0.13.0 commented out the login functionality because there is currently no user data being persisted. A great feature would be to save tests to work on them later, or create templates for each user.

(4. and 5.) GitHub OAuth is functional, but Google OAuth is currently broken. If you are planning to persist user data, this is an excellent feature to resolve.

6. Add more customization to the tests themseleves such as chaining expects, add the ability to use siblings and children, etc., or having the ability to test more than one component in one test file.

Some of test cases needs improvement on UI as they do not have any styling or optimal user experience

KNOWN BUG:
- Screen reader for Accessibilty can turn on and off but does not read.


RESOURCES:
- excalidraw React Tree
- discord channel with previous team

Spearmint - iteration
PROBLEM: 
- Spearmint is "an exclusive, accessibility-first GUI for generating clean, semantic JS tests in only a few clicks of a button."
- While tests can be created for many different frameworks, the testing capability is limited: spearmint lacks the ability for beforeEach, beforeAll, afterEach, afterAll, nested describe blocks, chaining expects, the use of siblings & children and is limited to testing only one component per test file.
- The codebase is in both javascript and typescript and exported tests are in Javascript.
- for an accessibility-first GUI, tabbing ability isn't always clear and functional and there's a reported bug for screen-reader capability
- The app also has a UX that might disappoint users in some places, fixing draggability in test constructor, window resizing are several features that could be improved
SOLUTION:
MVP FEATURES:
WHY will impress seasoned engineers


FRICTION LOG:
*npm install*
Depreciated Files:
- @npmcli/move-file@2.0.1: This functionality has been moved to @npmcli/fs
- sourcemap-codec@1.4.8: Please use @jridgewell/sourcemap-codec instead
- @types/webpack-dev-server@4.7.2: This is a stub types definition. webpack-dev-server provides its own type definitions, so you do not need this installed.
- electron-osx-sign@0.6.0: Please use @electron/osx-sign moving forward. Be aware the API is slightly different
- asar@3.2.0: Please use @electron/asar moving forward.  There is no API change, just a package name change
- electron-rebuild@3.2.9: Please use @electron/rebuild moving forward.  There is no API change, just a package name change

11 vulnerabilities (4 moderate, 7 high)

*start*
no official login.  but framework is mostly setup: 
router - endpoint
bcrypt - in userController
controllers - signup, login, logout
sessions - simple SSID cookie
github
google
way to upload 

_PROBLEM_: no login functionality in main branch.  
_SOLUTION_: implement bcrypt encrypted login with JWT and OAuth.  Add ability to save tests and open last file worked on.

*main test page*
*UI* Search Component dropdown doesn't select with 'enter'
*UI* Separate `describe` and `it` block colors
*UI* Fix draggability
*Func* Include before & after test capability
*Func* Include nested describe blocks
*Func* Include ability to test multiple components in one file
*Func* Can we mock children components (such as for testing props passed correctly)


react shallow rendering?

# Kafka (or aws, azure, google cloud)
https://pandio.com/top-10-problems-when-using-apache-kafka/
data-streaming
  -real-time
  -scalable

CON
complex
different arrival times
MORE data
different data types
might not be necessary if you can handle batch processing every hour, 15-30 min?

1. in sync replica alerts - when data isn't being properly replicated/passed to brokers.  one cause of this is a downlevel client(older version).
2. liveness check - when host w/live check cannot reach host with broker.  everything fails.  quick fix - turn off the liveness check.
3. Do not have complete set of monitoring tools: Apache Kafka does not contain a complete set of monitoring as well as managing tools. Thus, new startups or enterprises fear to work with Kafka.
4. Availability and reliability: Kafka is designed to be highly available and reliable, but ensuring that clusters remain available and reliable can be challenging. It can be difficult to detect and troubleshoot issues when they arise, particularly in large and complex clusters.

TECH CHALLENGES
- creating a data stream!
- implmenting kafka
- monitoring metrics: flow rate, DB usages, 

# websockets
1. connection reliability - if connection fails, reconnecting / maintaining solutions
2. security concerns - more prone to cross-site scripting (XSS) and cross-site request forgery (CSRF) attacks.