# Recursion in Nested Structures

## flattenDeep
given a nested array, return a flattened array containing the same values in the same order.  A flattened array means none of the elemnts should be of type array themselves.  Your function `should` account for various levels of nesting.

flattenDeep([]1,[2,3,[4]]]); -> [1,2,3,4]

INPUT: Array (could contain more arrays)
OUTPUT: Array (should have no nesting)

```
function flattenDeep(arr) {
  const flat = [];
  for (let element of arr) {
    Array.isArray(element) 
    ? flat.push(...flattenDeep(element)) 
    : flat.push(element);
  }
  return flat;
}
const array = [1, [2, 'a', [3]], 'b'];
flattenDeep(array)
```
`flat` method: 
`Array.prototype.flat(depth)`
_______________________________
`depth` - (optional) the depth level specifying how deep a nested 
array structure should be flattened.  Defaults to 1

**NOTE:** when you don't know the depth level, you can pass `Infinity` into the `flat()` method to recursively concatenate all elements of the sub-arrays into the new array.

`return value` - a new array

## SumNestedArrays
```
function sumNestedArrays(arr) {
  let sum = 0;
  for (let element of arr) {
    Array.isArray(element)
    ? sum += sumNestedArrays(element)
    : sum += element;
  }
  return sum;
}
```

## linkedListLength
Given the head node of a Linked List, return the length of the Linked List (number of nodes present within the linked list).

INPUT: head of a LL
OUTPUT: number

This is a valid Linked List:
```
function Node(val) {
  this.value = val;
  this.next = null;
}

const LL = new Node('A');
LL.next = new Node('B');
LL.next.next = new Node('C');
LL.next.next.next = new Node('D');
LL.next.next.next.next = new Node('E');
LL.next.next.next.next.next = new Node('F');
```

This is what we're used to seeing:
```
function LinkedList() {
  this.head = null;
  this.tail = null;
}

function Node(val) {
  this.value = val;
  this.next = null;
}

LinkedList.prototype.add = function(val) {
  ...code here
}

const myLL = new LinkedList();
myLL.add('A');
myLL.add('B');
...etc...
----------------
function linkedListLength(currNode, count = 0) {
  if (!currNode) return count;
  return linkedListLength(currNode.next, ++count);
}
```
## bstHeight
given given the root of a binary search tree, return the height of the binary search tree (number of connections)

```
function BST(val) {
  this.val = val;
  this.left = nuill;
  this.right = null;
}

BST.prototype.add = function(val) {
  const leaf = new BST(val)
  ... more code
}

function bstHeight(root) {
  if (!root) return - 1;
  return 1 + Math.max(bstHeight(root.left), bstHeight(root.right));
}
```

# Express Approach

## Core Components
- server.js
- routes
- controllers / middleware

# Server Set-Up

## 1. express set-up: require and express()
## 2. require routers
## 3. handle parsing request body
- `app.use(express.json())`
- `app.use(express.urlencoded( {extended: true} ));`

## 4. handle requests for static files
- `express.static()`
- will need to use `path.resolve(__dirname, 'pathToFileFromYourCurrentFileLocation')`

## 5. define route handles
- order matters.  more descriptive routes first
  - this is because a more generic path will match, and then it will check inside that router to see if there's a match.  If no match, look to next router.

## 6. route handler to respond with main app
- `app.get('/', (req,res) => ...code)`
- will need `.sendFile()` to send the html file

## 7. catch-all-route handler for requests to an unknown route
- must be the last route handler (except error handler)

## 8. configure express global error handler

  app.use((req, res, next) =>  {
    console.log('unknown route');

    return next({
      log: 'No handler for provided route',
      status: 404,
      message: { err: 'Page not found'}
    });
  });

**NOTE:** everything should return and end a response

# Router Set-Up

## router set-up: require and express.Router()
`const router = express.Router()`
## request route handlers

  router.get(path, middlewareChain, (req, res, next) => {
    return res.status(200).json()  // or .send / .sendFile / etc.
  })

# Middleware / Controllers
BOILERPLATE: 

  controller.functionName = (req, res, next) => {
    ...code
    // if error, invoke next() WITH an argument
    // if no error, invoke and return next() WITHOUT an argument
  }

- to allow middleware chain: `return next()`. _BEST PRACTICE_ to return next() so we explicitly end the thread of JS execution.
- to persist data in the middleware chain, it is stored on `res.locals`
- `request parameters` - getting variable stored in URL (as `:variableName`).  These are stored on `req.params` object as `req.params.variableName`
- `request query` - `www.page.com/?queryName=6`
- `convertToPhotoUrl()`

**NOTE:** - object destructuring helps for security for requests