----------------
# Day 1 - Jan 30
----------------

Paired with Erika Jung - reminded me of the nullish coallescing operator

```
leftExpr ?? rightExpr       // if leftExpr is truthy, returns leftExpr
                            // if leftExpr is falsy, returns rightExpr
```

----------------
# Day 2 - Jan 31
----------------

Use of `.constructor`:

```
const copy = new testObject.constructor  // uses the constructor to make a copy of the datatype
```

----------------
# Day 3 - Feb 1
----------------

- Learned HashTables

- Array.unshift(1, 2, 3) = [1, 2, 3, ...Array] NOT [3, 2, 1, ..Array]

----------------
# Day 4 - Feb 2
----------------

- `this.head = this.tail = newNode` assigns both `this.head` and `this.tail` to `newNode`

- hash O(n) solution to Two Sum(numArr, target):

```
hash= {};
iterate over numArr check what number is needed to match to target
if number is in hash - return both indices
otherwise add curr element to hash { element: index}
```

----------------
# Day 5 - Feb 3
----------------

`.repeat()` - string method that constructs and returns a new string which contains the specified numbers of copies of the string on which it was called

approach to binary convertor:
Given a string that represents a Binary Number, write a function that converts this string into a decimal number. DO NOT use the native parseInt() method.

For example:

binToDec('0') -> 0
binToDec('11') -> 3
binToDec('100') -> 4
binToDec('101') -> 5
binToDec('0101') -> 5

```
function binToDec(binString){
    let output = 0;
    for (const digit of binString){
        output *= 2;
        output += Number(digit);
    }
    return output;
```

----------------
# Day 6 - Feb 4
----------------

`console.time(label)` start timer of name label
`console.timeEnd(label)` end timer of name label

----------------
isPrime() - check all divisors up to Math.sqrt(num) for efficiency

fibonacci bottom up approach:

- APPROACH W/CACHE: cache = {0:0, 1:1}. cache[num] = cache[num - 2] + cache[num - 1]
- APPROACH W/TWO VARIABLES: space: O(1): twoBefore = 0, oneBefore = 1. update values as you go

**factorial could be the same**

----------------
# Day 7 - Feb 6
----------------

"Every single dynamic programming video should start out with the explanation of the subproblem.
This is not about table behind me. It’s about subproblem and how they relate to each other.

- coinSum2
dynamic programming solution to "Total Unique Ways to Make Change or 'Coin Change 2' on Leet Code" - https://www.youtube.com/watch?v=DJ4a7cmjZY0

- `element.onclick = function(e) {}` <------ overwrites any existing functionality for click
- `element.addEvenetListener(eventType, function(event) {})` <------- preferred since it ADDS functionality vs overwrites

DOM Tree - "a huge massive object"

      window        <---- window is at higher scope than document
        |
      document
        |
     --html--
     |      |
    head   body
     |      |
        etc.

- HTML elements represented as objects

----------------
# Day 8 - Feb 7
----------------

- `setTimeout` returns a `timeoutID` that can be used to end the setTimeout.  Same with `setInterval`
to end - `clearTimeout(timeoutID)`


- got snake working after struggle bus. Remind

----------------
# Day 9 - Feb 8
----------------

helpful eventlistener event types:
- `mouseover` - fired when pointing device is used to move the cursor onto the element or one of its child elements  
- `mouseout` - fired when pointing device is used to move the cursor so that it is no longer contained within the element or one of its children

- built a chrome extension!
Used: Vanilla Dom Manipulation, CSS animations/keyframes/transitions, eventListeners (mouseover), manifest.json (for chrome extension)

----------------
# Day 10 - Feb 9
----------------

- `targetElement.insertAdjacentHTML(position, element)`
insets a given element node at given position relative to the element it is invoked upon
`targetElement` - the targetElement
`element` - the element to be inserted in the tree
`position` - a string representing the position relative to the `targetElement`.  Must be one of the following:
1. `beforebegin` - before the targetElement itself
2. `afterbegin` - just inside the targetElement, before its first child
3. `beforeend` - just inside the targetElement, after its first child 
4. `afterend` - after the targetElement itself
**NOTE** all lowercase

- `continue` - terminates execution of the statements in the current iteration of the loop and continues execution of the loop with the next iteration

- Got 3rd place in chrome extension!

----------------
# Day 11 - Feb 10
----------------

element.className = 'class1 class2' vs element.classList.add('class1'):

`className` - overwrites all classes (like `setAttribute('class', classNames`)) - use at element creation for multiple classes
`classList` use ALL other times

----------------
# Day 12 - Feb 11
----------------

- ES6 computed property names:
To access object of variable key - `var myObj = {[a]: b};`

- React fragment: `<>`.  Instead of returning JSX in <div> tags

-`prop drilling` - when class components "drill" the state down to a lower level for access

- From Nick: check out `useContext` with `useReducer`


-----------------
# Day 13 - Feb 13
-----------------

CHECK YOUR LOCAL HOST PORT.  3000 !== 8080

Namespace Import:

The following code inserts myModule into the current scope, containing all the exports from the module located at /modules/my-module.js:

`import * as myModule from "/modules/my-module.js";`

Here, myModule represents a namespace object which contains all exports as properties. For example, if the module imported above includes an export doAllTheAmazingThings(), you would call it like this:

`myModule.doAllTheAmazingThings();`

-----------------
# Day 14 - Feb 14
-----------------
`isNaN()` - checks if element is not a number

array destructuring while iterating over Map:
`for (const [key, value] of Map) {}`

-----------------
# Day 15 - Feb 15
-----------------

- CSS specificity is 4 numbers (!important, id, class, element)
- Look up critical rendering path (not important for interviews)
- look up margin collapsing (https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_Box_Model/Mastering_margin_collapsing)

`killall node`

gridbox auto column resizing: `repeat(auto-fill, minmax(280px, 1fr))`

-----------------
# Day 16 - Feb 16
-----------------
`__dirname`
`response.on`
TO DO: LEARN POSTMAN

-----------------
# Day 17 - Feb 17
-----------------
javascript `.sort` - implemented with heap sort under the hood?
express

-----------------
# Day 18 - Feb 18
-----------------
CSV - Comma Separated Values

`flat` method: 
`Array.prototype.flat(depth)`
_______________________________
`depth` - (optional) the depth level specifying how deep a nested 
array structure should be flattened.  Defaults to 1

**NOTE:** when you don't know the depth level, you can pass `Infinity` into the `flat()` method to recursively concatenate all elements of the sub-arrays into the new array.

`return value` - a new array

- Binary Tree !== Binary Search Tree
- get used to answering LL questions with 
- LOOK UP - heaps and graphs (adjacency matrix)


- bodyParser.json is depricated - use express.json()

- research copy relative path in VSCode

Express!  `next()` and error handling!  

-----------------
# Day 19 - Feb 21
-----------------
Databases and SQL

-----------------
# Day 20 - Feb 22
-----------------
look up urlencoded

Did I learn MongoDB?  Confusion...