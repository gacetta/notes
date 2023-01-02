# react router

-------------------------------------
## client-side vs server-side routing
-------------------------------------

Traditional server-side router is expensive, both computational power and network latency:
1. browser detects URL change (from clicking link or typing in new URL)
2. browser makes an http request to the server
3. the server responds with the HTML to be shown
4. the browser re-renders things.  This process repeats for each URL change.

Client-side routing handles the re-rendering of the application using client-side JS:
1. The first time we load the app we make a traditional server request.
2. All subsequent page changes are handled client-side with HTML5 history API. no more expensive http requests.
3. Watch for URL changes, prevent browser from making http request, instead run some JS code when a change occurs
4. Then we can re-render something to the screen, either the entire page, or just one component.

URL           Component
/               App
/help           Help
/about          About

so when URL changes:
1. Find matching component
2. Render with JS function call