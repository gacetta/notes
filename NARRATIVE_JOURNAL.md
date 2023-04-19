PERSONNEL
“can you tell me of a challenging situation you had to overcome?”

- I was working with a team on an OS project and my engineering manager didn’t embrace any kind of workflow strategy and didn’t even have tickets. All tasks were very vague and people were getting duplicate tasks, moving very slowly as a team.
  "What did you to resolve it?" - have an answer

- I was on a team that had very loose code review requirements and very suspect code was being merged, then we’d have to backtrack or refactor it until it was production ready
  "What did you to resolve it?" - etc..

TECHNICAL CHALLENGES

- All aspects of our application needed to reference different parts of the GraphQL schema. The challenge was to retrieve the schema from any endpoint and parse it accordingly.
  _SOLUTION_ - an introspection query to the endpoint which we could then parse into usable schema for our editor and visualizer.

- React Node, customizing a well documented existing library and understand the innerworkings. I was successfully accessing the target handles and changing their location, yet the edges wouldn't update. Digging through docs to understand `updateNodeInternals()`

- Monoco Editor - GraphQL, working with a library with no documentation that extends a well documented library. Couldn't access the editor contents directly. involved accessing the editor model which was stored as a virtual model in the memory via a URI.

- Needed to toggle state that affected an event listener. The event listener was initialized only once onPageLoad via a `useEffect()` call. Said event listener referenced a piece of toggle-able state. When state was updated, it resulted in stale state for the event listener and broken functionality.  
  _Solution:_ `useRef()` on that toggle-able state to provide fresh/updated state for the eventListener.

- Accessing performance metrics, namely response time. Due to the asynchronous nature of the graphQL fetcher, measuring the time was difficult. `Date.now()` and `performance.now()` proved less accurate than **\_\_\_\_**. Even that however, included queueing time from the Browser API which I was unable to work around. My metrics matched the "overall" time from Chrome DevTools. Attempted response size, but since we were running a serverless application without control of the graphQL responses.

Useful Phrases
"Security is about protecting your users when your application goes wrong, Privacy is about protecting your users when your application goes right"

Questions:
What is node?
What's the difference between SQL / NoSQL?
What's a promise? Why use async/await instead of then chaining?
What's your favorite thing you've ever built?
What's the hardest thing you've ever built?

BE YOURSELF the whole time
