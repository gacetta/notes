# node.js
From the old site:
Node.js is a JavaScript runtime built on Chrome's V8 JavaScript engine.  Node.js uses an event-driven, non-blocking I/O model that makes it lightweight and efficient.  Node.js' package ecosystem, npm, is the largest ecosystem of open source libraries in the world.

Node.js is a runtime environment for javascript built on Chrome's V8 JS engine.  When it was introduced in 1995, Javascript could only be run inside a browser, which limited its functionality to client-side use.  In 2009, Node.js was introduced which allowed for Javascript to be run outside of a browser.  This provided the ability for javascript to be used server-side as well.

Node.js is not a language.  Inside the node environment, we will be running JavaScript code.

---
## node vs browser
---
both node and browser create a runtime environment for JS and are built using C++  

They both also provide extra external functionality to JS, such as DOM manipulation, web API for browsers and file structure and OS information for node.  This functionality is not part of JS, instead the runtime environment handles it

Each runtime has access to different items:
BROWSER:
- document  (The DOM tree)
- window    (the browser window on which the DOM tree is rendered)

NODE:
- global    (The global namespace object)
- process   (The process object provides information about, and control over, the current Node.js process.)

---
## why node
---
because node uses a non-blocking I/O model, it's fast and efficient which is useful for backend work.

---
## require
---
we need to load in functionality before using them
the `require()` function in node does this for us.

`const fs = require('fs');`