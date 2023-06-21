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

