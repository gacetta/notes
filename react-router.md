# react router
React Router is used to implement client side rendering

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

--------------------------
## react-router-dom
--------------------------
**IMPORTANT:** use `npm react-router-dom` NOT `react-router`

`import { BrowserRouter as Router, Routes, Route, Link, NavLink } from 'react-router-dom';`

### BrowserRouter
`BrowserRouter` expects the child to either not exist or have a length of 1.  More than one child will throw error.

### Routes
`Routes` exists presumably since `BrowserRouter` may contain at max one child.  This child is `Routes` and it will match a set of child routes from the current location.

### Route
A `Route` couples a URL segment to a component.  It requires:
- a `path` such as `path='/'` which is the URL path to match this route to
- an `element` render when the route matches the URL:
```
  <Route path='/about' element={<About />}/>
```
#### Catch-All Route
To catch any page that doesn't have a specific route and display a 404 message, we can use the universal selector as the path:
```
  <Route path='*' element={<NotFoundPage />}/>
```

---------
## Link
---------
if we use <a> for links, that's still server-side rendering.  To avoid this, to use browser side JS, add event listeners and tell the browser NOT to render via server, we can use `<Link>` with a `to=''` attribute akin to href.

```
<Link to='/'>Home</Link>
```
For nav bar components, use `<NavLink>` which gives access to a special property, `className`:
```
<NavLink to='/' className={({ isActive }) => isActive ? 'is-active' : undefined} end>Dashboard</NavLink>
```

-----------------------------------
## Workflow
-----------------------------------
1. create AppRouter.js in src/routers. this is all our `<Routes>` go
2. break up all pages into component.js files. put in src/components.  import / export as necessary
3. app.js imports AppRouter and renders it with ReactDOM.render()

Folder Structure:
public
  - images
  - index.html
src
  - components
  - routers
  - styles
  - app.js
.babelrc
package.json
webpack.config.js

-----------------------------------
## Dynamic URLs
-----------------------------------
**OUTDATED** - see react-hooks.md
react router passes info into component which can be accessed via props.

Useful one - if you pass `<Route exact path=”/whatever/:id”` in AppRouter.js, you can now access `website/whatever/` and the `props.match.params.id` will be that `id` number.

So if we want to have many pages (website/gallery1, website/gallery2, website/gallery3, etc.) we can use `exact path=”/gallery/:id”`

**NOTE** this will not match with “/gallery” so you’ll need two different components, one for the main gallery page and one for gallery items in that page