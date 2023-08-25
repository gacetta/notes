# WebSocket
The WebSocket protocol allows for full-duplex (bi-directional) communication.  AKA the client can initiate communication with the server, and the server can initiate communication with the server.  This is unlike http requests where the client initiates the request and the server responds.

Seperate protocol from Http Requests

WebSocket is a persistent connection between the client and the server

## Socket.io 
an npm library for websockets

**NOTE:** affects the set-up of express server.  see docs

socket.io serves a `js` file from `socket.io/socket.io.js` that gives access to the resources needed to connect and maintain a websocket connection

### create a socket

server-side: `io.on()`
client-sdet: `const socket = io()`  then `socket.on()`

### send events
`socket.emit()` - emits event to specific connection
`socket.broadcast.emit()` - emits event to all connected sockets EXCEPT self
`io.emit()` - emits even to all connections

### built in events
`connection` - fires when a websocket connection is made
`disconnect` - fires when a websocket connection is ended

### join
We can create different "rooms" so we can better control where events are emitted to.

`socket.join(<room>)`

### to
we can further specify where to emit events with `.to()`

### socket properties
`socket.id` - the unique id for the socket connection

### autoscroll

not a websocket thing, but correlated to chat room
great autoscroll feature in Andrew Node Udemy course vid 173.