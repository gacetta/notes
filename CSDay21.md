# Authentication
`authentication` - making sure users are who they claim to be.  Always involves two steps:
1. Validating the users' credentials
2. Managing a session - ensure a user remains authenticated.  Usually done using cookies

## Authorization vs Authentication
`authorization` is different than `authentication`.  It is the process by which we control which resources an authenticated user is allowed to access.

## HTTP vs HTTPS
`HTTPS` - Hypertext Transfer Protocol Secure.
- in normal HTTP, requests are transferred in *plaintext*
- in HTTPS, data is *encrypted*, it's useless to anyone except for the intended recipient (the server)
- secure connections are established through SSL or TLS protocol.

## Protecting Users
goal of authentication - protect users.  assume users choose terrible passwords
1. users often reuse username/pass across multiple sites
  - hacker will try them on other sites
2. passwords are typically not random or unique.  Multiple users may have the same password on the same site.
  - if a password is guessed, it might exist elsewhere on the site

## Password Hashing
_BEST PRACTICE_ - alter passwords through a "hashing" process to protect users
AKA **NEVER STORE PASSWORDS AS CLEARTEXT**

`cleartext` or `plaintext` ishumanly readable.  `ciphertext` is obscured by hashing, encoding or encryption

`encoding` - process of transofrming data into another format
ex: URL Encoding: `'that's cool' -> 'text=that%27s+cool'`
*PREVENTS* - HTML injection attack

`encryption` - process of transforming input data so only intended recipient can access it
ex: HTTPS (server holds secret key), E2E encryption (client holds secret key)

`hashing` - process of transforming an input into a new string of text that cannot be reverse engineered

## Hash functions
- pure functions.  will always produce same output for a given input
- one-way.  There is no inverse function to go from the has back to the plain cleartext password.
- they are slow.  This is an advantage for security.

The only way to determine the stored hashed password is to hash a candidate password and see if it matches.  This is how you would verify login.

## Bcrypt
*npm library*

`bcrypt` - hashing algo that uses randomly generated string of char called a `salt` to make every stored password unique

- when a user sets their password, bcrypt will also generate a unique salt and append it to the password.
- bcrypt then repeatedly hashes the 'password + salt'.  The developer can specify a `work factor` parameter that indicates how many times the hash function should run.

Because of this, even two people with the same plaintext password, e.g. qwerty123, will have different stored passwords.

CREATE USER PASSWORD:

  bcrypt.hash(userPassword, workFactor)  // returns promise
    .then((hash) => {
      // now have access to hash to store in DB
    })


VALIDATE PASSWORD:

  bcrypt.compare(inputtedPassword, storedHash)    // returns promise
    .then((result) => {
      // returns boolean if the pasworsds match
    })

## SECURITY ATTACKS

### Dictionary Attack
Most common way to get passwords is through brute force, by trying thousands or millions of possibilities until there's a match

`dictionary attack` - when a hacker tries to guess passwors by running through a list ('dictionary') of numerous possibilities until something eventually works.

`dictionaries` contain common passwords as well as stings that are determined to be l,.ikely password candidaates based on conmmon patterns.

these attacks can be used on a small scale to target individual users, and on a large scale to target entire databases.

Hashed passwords can still be compromised if a hacker gets access to a database.  This is because there are a number of known standard hashing algos (MD-5, SHA-1, SHA-2, etc.) that most sites use.  

More efficient dictionary attacks - create a lookup table (known as rainbow table)

*PREVENTING*
bcrypt
1. hashes password along with random salts, making a lookup table useless.
  -  with salts added, it's infeasible to query a database for hashes of common passwords... because none of the passwords are coommon
  - all passwords are unique, finding one match won't reveal another.
2. runs slow.

### User Enumeration
Hackers correctly guess users' info if our authentication system reveals too much information in feedback and errors:
- stating whether a username is valid
- analyzing error codes on login pages
- analyzing URLs and URL redirects
- friendly 404 error messages

Ashley Madison attack

## Authorization
apps often have different types of users: unregistered, registered, admin, etc.
Good authorization protocals should always:
- clearly define which users are allowed to access what resources
- ensure these rules are consistently enforced throughout your app

### SECURITY: insecure direct object reference
`insecure direct object reference` (IDOR) - a vulnerability that occurs when an identifier used in a tour is exposed to users

`GET api.com/users/13/messages`

Attacker can guess the ID of other resources and if the app does not have sufficient access control, they will be able to access them without authentication.

*PREVENT*
- obfuscate record id (w/ encryption, hashing, etc.)
- enforce authorization

_BEST PRACTICE_
- `principle of least privilege`
- validate permissions on every request
- don't rely on UI to prevent users from accessing resources.  Anything that requires any permission level should be protected!

----------------------
# Managing Sessions
----------------------
## session
`session` - period of time in which our server remembers a specific user's identity across multiple HTTP requests.  

typically implemented by using cookies to store identifying information within a Client's browser.

## cookie
`cookie` - commonly used to persist authentication.
small string (4kb) stored in browser
- each domain has it's own "cookie storage"
- broswers can store ~50 cookies per domain
- browser can store at most ~3000 cookies total

any stored cookies for a domain are sent with every HTTP request to that domain's server
- AJAX calls always include these cookies
- they are placed in a "cookie" header on the request object

## creating cookies
server sends a set-cookie header in its response to a client.  This header contains any new cookies to be added, each with a key and a value

*Syntax* response cookie method:
`res.cookie('key', 'value', optionsObj(optional))` -> { status: 200, headers: {cookie: "id=a3fWa";} }

**Note:** Once the cookie exists on the client, it's sent back to the server with every HTTP request
cookie is set per domain.  this determines "scope" of the cookie

## cookies on the client
cookies - series of key-value pairs.  A semicolon is used to separate each pair.

`cookie: HSID=AC_PRIHJSDGKjwek; SSID=JKDlkmefnklsdkfjllkAK.; APISID=lkj24098jasdlkfnwe' SAPISID=kjrslkJSDFKLnwefKJLK; __Secure-1PAPISID=iv`

Typically store encrypted information, which the server can use to keep track of who you are.

## cookies on the server
cookies will be sent in the header.  access via `req.cookies`.  It's an objecct...

## types of cookies
`persistent` (AKA tracking cookies) - that persist for longer than the browsing session
`secure` - can only be transferred over HTTPS
`HttpOnly` - can only be transferred via HTTP and HTTPs.  Cannot be accessed by JS.

## cookie metadata
`cookie` contains specific metadata, such as domain and when it will expire.
Server specifies this data upon creation of the cookie.  It will be stored along with the cookie in the client's browser.

## cookies for authentication
`session cookie` - created on user login.  Value is a unique ID
- sent back to the client and saved on their browser
- store the cookie's value in our database and have it correspond to the user

Next time user makes a request to our server, their browser sends the session cookie.  We query the DB for its value to confirm the users identiy.

## other uses for cookies
`persistent (tracking) cookies`
- identifying recurring user on a site without needing to log in
- maintains user settings info without login needed
- maintaining your e-commerce shopping cart across multiple pages
- tracking visitor statistics

## third-party ad cookies
- an <iframe> is an HTML element that allows another HTML doc to be embedded into a page.  Sites often contain iframes that belong to third-party advertisers.
- When your browser loads a third-party iframe, it will send an additional request to the third-party server that iframe belongs to.
- the cookies that are sent with this request will tell the third-party advertiser who you are and which site you are on.

## cookie theft & session hijacking
Cookies are freely editable.  They are not a source you can explicityly trust, and you should be careful with what you store in them.

Attackers can steal cookies from a user's browser.  If those cookies contain an active session, the attacker can subsequently use it to impersonate the user.

## how are cookies stolen
- network eavesdropping
  - "person-in-the-middle" attack occurs when network traffic is intercepted and a request (including any cookies) is received by a maliscious third party.
  *prevent* - use secure cookies sent over HTTPS
- cross-site scripting
  - malicious code injected via XSS attack can run in the victim's browser, giving it full access to their cookies
  *prevent* use HTTP only cookies to they can't be accessed via JavaScript

## drawbacks to cookies
- inaccurate identification.  cif you have a user on multiple browsers, you my not be tracking people as expected
- inconsistent across devicces

## LocalStorage
`localStorage` propertyy gives access to a local Storage object on each domain.  It's stored on the browser's window object
- key-value store
- each domain has it's own storage
- stores strings (5mb)
- persists forever

## cookies vs localStorage
Cookies:
- automatical sent on requests
- expire after given time
- sent on every request, even when unnecessary
- limited space (4kb)
- built in security: HTTP Only, Secure

LocalStorage
- must be created, expired and sent manually
- lasts for ever unless deleted
- only send when necessary
- more space 5mb
- no built in security

## localStorage vs sessionStorage
`sessionStorage` - browser storage
- also stored on the window object, has an identical API to localStorage
- usually contains same amount of space (browser dependent)
- values do not persist forever.  sessionStorage is cleared once the tab instance ends

## Token
`token authentication` - approach used instead of session authentication to lower the load on your server.

`tokens` are generated for users after they present verifiab;e credentials.  They store user's identifying info on the *client side* rather than the serve side.

## JSON Web Token (JWT)
JWTs allow us to avoid continually querying a DB to authorize users.
`JWT` - open standard (RFC 7519) that defines a compact and self-contained way for transmitting info between parties as a JSON object that are integrity protected through a signature.

Contain two parts:
- payload
- signature

## JWT payload
payload contains user info stored as JSON object.  Sent between the lclient and the server

Server checks 

## JWT signature
`signature` is used to confirm the validity of the payload.  Signature is essentially a one-way hash of the payload, plus a `secret` stored on the server.  `secret` is a string
- veritifcation requeres us to take the payload plus the secret, hash it, and compare to the signature.
- clinets don't know the sectet, they can't make a valid signature

## Why JWT
payload contains all required info about the user, avoiding the need to continually query the database.

Once user is logged in, each subseuent request will inclue the JWT, allowing the user to access routes, services, and resources that are permitted with that token.

## JWT is compact
JWTs are base64 encoded strings.  Because of small size, they can be sent through:
- URL parameters
- POST request body
- HTTP header

## JWT structure
three parts sepaarated by dots:
- `header` indicates the hashing algo name (in base64)
- `payload` is our data (base64)
- `signature` is hashed version of the header+payload+secret.  

*Syntax:*
`hhhhh.ppppp.sssss`

## JWT Storage
use cookies for safer storage of JWTYS
adding the HttpOnly and Secure options to your cookie, you can block it from access by JS.  This is limited to one domain but can help avoid XSS attacks
