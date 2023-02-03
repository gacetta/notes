## Data Structures

### Type Systems

`type system` - how we are allowed to store info and how we are allowed to pass that info around our program

`typing` - assigning a data type.
`type error` when you try to use a thing in a context where it doesn't make sense (it doesn't work)

**DYNAMIC TYPING VS STATIC TYPING**
Essentially about _when_ type information is acquired: either compile-time or at runtime. Statically typed languages require knowledge of what data type each variable holds.

**JavaScript is dynamically typed.**
`dynamic typing` - variables DO NOT have a type. values they hold DO have a type. They get assigned at runtime.
`statically typed` - variables DO have a type and can only hold values of that type. Assigned

**WEAK VS STRONG TYPE**
Essentially about _how strictly_ types are distinguished. In other words: does the language attempt to change types?

JavaScript is weakly typed.
`weakly typed` - changes types if necessary to work properly. `type coercion`

### Primitive Data Types

`immutable values` - cannot change or alter any portion

- boolean
- null
- undefined
- number
- string
- BigInt
- Symbol

### Composite (Compound) Data Types

`composite data type` - any data type which can be constructed using primitive data types and other composite types.

### Searching Arrays

1. direct lookup by index - O(1);
2. loop through to find a match O(n);

### Searching Objects

1. direct lookup by key - O(1);

### Stacks and Queues

STACK - Last In, First Out
QUEUES - First In, First Out

### Linked List

- collection of objects (called `nodes`)
- each node has a property that points to the next object in the list (`next`)
- track first node: `head`
- track last node: `tail` (not required but makes insertion of new nodes more efficient O(1) vs O(n))

Tail's `next` points to null

Benefit: removing node from the middle of the list is more efficient than Array

### Hash Table

- an array that is used to store info
- data input into an array at a specific location
  `hash` turns
  Map to unique numbers as much as possible with minimal collision

**Collision**
if there are collisions - store extra info as another node on a Linked List or an Object

### Binary Search Trees (BST)

- designed to make data lookup fast and efficient
- collections of objects that point to each other
- BST allows you to store nodes with lesser values on the left side, greater value on right side of parent node
- top most node: `root`
- bottom most node with no pointers: `leaf`
- BST always has left node and right node.

### BST Tree Traversal

DEPTH FIRST:

- `pre order` - emit as you get to each node
- `post order` - emit the last time you visit the node
- `in order` - display in sorted order by going down the left side first

BREADTH-FIRST

- traverse in lel order where we visit each node on a level before going to a lower level

## Git & GitHub

### Git

GIT COMMANDS
`git init` - initializes a folder as a Git repo
`git log` - logs recent operations
`git checkout` - switches to branch
`git checkout -b branchName` - creates and switches to branch
`git merge` - merges one branch with another

FILE SYSTEM COMMANDS
`touch fileName.txt` - creates an empty text file
`echo 'hi' > foo.txt` - creates a file with text in it
`cp foo.txt bar.txt` - creates a new file by copying a file

_BEST PRACTICE_ choose which files you want to commit. AKA not `git add .`

`sha` - secure hash
`git reset --hard commitNumber` - once you do this, you can't go back.

MERGE CONFLICTS

- non-overlapping changes, simply pull changes into files when merge

### GitHub
