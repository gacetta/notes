# Client - Server

`frontend` - frontend UX design. In general, anything that deals with the user interface of an app.
`frontend logic` - JavaScript
`backend` - server logic, databases, web services. Anything that happens remotely on your services or elsewhere on the cloud is considered to be backend dev.
`UX` - user experience. How the user experiences the app. More psychological, ethereal. #simple, #calming, #energetic
`UI` - user interfaces. How the user interacts with the app. Task bar, controls, etc.
`full-stack dev` - responsible for both client-side and server-side tasks, delivering end-to-end solutions

`client` - any device (computer) that can send a request and receive a response. Typically a web browser, however could be command line, or any desktop or mobile app that connects to the network.
`server` - any device (computer) that can receive a request and send a response.

- Servers deliver content.
- Servers connect to DBs.
- Servers connect to web APIs
- Servers provide central business logic

`database` - a computer designed to store data. Stores data and state of the app. Usually the server handles business logic, while state and any other data is stored in the databases.
`Web APIs` (`web services / network services`) - your application can connect to other applications on the web using web APIs
`Oauth` - 'Login with Facebook' or "Login with github"
`HTTP` - hypertext transfer protocol. a way for information to be transferred

- an application-layer protocol for transmitting documents, such as HTML.
- designed for communication between web browsers and web servers
- client initiates the conversation (request) and the server replies (response)

`HTTP Request` -
GET - 3 required parts

1. Method:

- `GET` - retrieve some data / resources
- `POST` - give data to the server.
- `PUT` - update entire entry
- `PATCH` - update a piece of an entry
- `DELETE` - delete an entry

2. URL: `http://www.ebay.com`
3. Headers:

- `CORS`
- `User-Agent`
- `Cookies`

  Accept:
  Accept-Language:
  User-Agent:
  Cookie:

POST - 4 parts.
Above Parts + Body

`HTTP Response`
Pieces:

1. Status

- 200-299 OK
- 300-399 additional action
- 400-499 client error
- 500-599 server error

2. Headers(again)

   Content-Type:
   Content-Language:
   Date:
   Set-Cookie:

3. Body - the actual stuff you'll see

We need organization for routing: semantic/intuitive, optimizable, scalable

`REST` - Representational State Transfer. The dominant pattern for almost 20 years.

1. REST has Intuitive Routing (routes that make sense to the client)
2. REST is stateless - client state is not stored on the server
3. REST allows for performance tuning

Visible: every request contains all context necessary to understand it. Therefore, looking at a single request is sufficient to visualize the interaction
Reliable: since a request stands on its own, failure of one request does not influence others.
Scalable: The server doesn't not have to remember the application state, enabling it to serve more requests in a shorted amount of time.

How does data move through the application? - it's a series of requests and responses.

What is the internet?

## routers

The path that HTTP requests take is often not linear. It's routed through many directions.

## IP Addresses

All clients and servers have an Internet Protocol (IP) address.

- 4 (or 6) period separated numbers ranging from 0 to 255
- required for routers and ISP to work

## DNS (Domain Name System)

DNS converts IP addresses to humanly readable domain names

Step By Step URL in browser and hit enter:

1. browser checks browser cache for a DNS record to find corresponding IP address of the URL
2. if the request URL is not in the cache, ISPs DNS server initiates a DNS query to find the IP address of the server of the URL
3. The browser initiates the connection to the server
4. Client/Broswer sends HTTP request

ASIDE: Security Vulnerabilities
`Phishing Attacks` - an attacker impersonates a website in order to gain access to its users' sensitive info:

1. Open redirects - exploit a website's redirect functionality to create seemingly trustworthy links that send users to a malicious website.

- URL: `https://www.google.com?redirect to=https://www.attacker.com`

2. HTML injection, or content spoofing - attacker injects HTML content into a website (e.g. fake form that tricks users into submitting sensitive data). Usually injected through the website's form input or URL parameters
3. Cross-site scripting - malicious JS is embedded into a website and runs in a client's browser

- `reflected XSS` - affects 1 user
- `persistent XSS` - affects all requests

to prevent injection attacks, sanitize all client-submitted data.

# AJAX

Asynchronous JavaScript and XML

- communication with servers from front-end code
- originally designed to fetch XML
- supports many data formats: JSON, HTML, TEXT, etc.
- makes single page app (SPA) development possible

## `XMLHttpRequest`

many different functions abstract it away, but still use it

- jQuery
- Fetch API
- Axios
- Superagent

Benefits:

- make non-blocking HTTP requests to a server
- request data and receive data from a server after a page has loaded
- send data to server in background
- don't have to refresh the page to send data
- don't have to tie POSTing data to a <form> tag

problem with old HTTP:

- blocking
- initiated full page reloads
- forces browser to wait until the server returns a response

AJAX Workflow:
`XHR` = XMLHttpRequest

const xhttp = new XMLHttpRequest();
xhttp.open('POST', 'ajax_test.asp', true); // first two params required, third is boolean ifAsync
xhttp.setRequestHeader('Content-type', 'urlencoded');
xhttp.send('fname=Henry&lname=Ford');

XHR has readyState property:

0=unsent(uninitialized)
1=opened (.open() has been called)
2=headers_received (.send() has been called)
3=loading (interactive) - data received, but not finished
4=done (complete) - request finished and response is ready

assign a callback function to `onreadystatechange` event. This is called five times as the state changes (Chacta says only 2, 3, 4...). Even t handler should: check readyState for value 4, check response status for value 200, work with returned daata supplied in `responseText`

instead of `onreadystatechange` we could use `onload` which fires when readyState === 4

## fetch GET

`fetch` - native javascript method
`FETCH` - browser API

    fetch(url)
      .then((data) => data.json())
      .then((data) => {
        function body...
      })

readyState and status check is built into the above functionality

## fetch POST

use an options object

fetch(url, {
method: 'POST',
body: ,
headers:
}).then(),then

# Cross-Site Request Forgery (CSRF)

`cross-site request forgery` - an attack is able to make their target's browser send a request to another website. This typically occurs after the target visits a malicious sit, which sends the request without their knowledge.

This type of attack relies on the target being previously authenticated on the vulnerable website, which makes it believe the forged request is legitimate.

-log into your bank account
-check you email and click a nefarious link

# same-origin policy

restricts how a document or script loaded from one origin can interact with a resource from another origin

CORS - cross origin resource sharing - a relaxation of the same-origin policy
