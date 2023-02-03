# Data Structures

---

## Singly Linked List

---

What is a linked list?

- ordered list
- no index (like an array has)
- instead it has a pointer to the next element, like a train

A linked list is a data structure that contains a `head`, `tail`, and `length` property.

Linked lists consist of `nodes`, and each node has a `value` and a `pointer` to another node or null.

"A skyscraper that has no elevators, only stairs"

### Comparison with Arrays

LISTS

- do not have indexes
- connected vai nodes with a `next` pointer
- random access is not allow

ARRAYS

- indexed in order
- insertion and deletion can be expensive (shift and unshift)
- can quickly be accessed at a specific index

### Big O Notation:

INSERTION - O(1)
REMOVAL - it depends, O(1) or O(N)
SEARCHING - O(N)
ACCESS - O(N)

### Advantages and Disadvantages

- Singly Linked Lists are excellent alternative to arrays when insertion and deletion at the beginning are frequently required
- Arrays contain a built in index whereas Linked Lists do not
- The idea of a list data structure that consists of nodes is the foundation for other data structures like Stacks and Queues

---

## Doubly Linked List

---

Almost identical to singly linked lists except every node has a nother pointer to the previous node.

### Big O Notation:

INSERTION - O(1)
REMOVAL - O(1)
SEARCHING - O(N)
ACCESS - O(N)

### Advantages and Disadvantages

- Better than Singly Linked Lists for finding nodes and can be done in half the time.
- Take up more memory considering the extra pointer

---

## Stacks

---

A `LIFO or Last In First Out` data structure.

Where Stacks Are Used:

- Managing Function Invocations (call stack)
- Undo / Redo
- Routing (the history object)

A "stack" is more of a concept than a strict data structure implementation. They are a built in data structure in some languages, but not JavaScript. They are relatively simple to implement and there are multiple ways to do so:

- Array Implementation (push/pop or unshift/shift)
- A class similar to singly linked list (best choice since we don't need indexes)

Requires two operations:

1. `push` - add something to queue
2. `pop` - remove something from queue

BIG O of Stacks
Insertion - O(1) <---- should have linear big O (only thing that matters)
Removal - O(1) <---- should have linear big O (only thing that matters)
Searching - O(N) <---- doesn't matter for stack
Access - O(N) <---- doesn't matter for stack

---

## Queues

---

A `FIFO or First In First Out` data structure

Commonly used in programming:

- background tasks
- uploading resources
- printing / task processing

A "queue" is more of a concept than a strict data structure implementation. They are a built in data structure in some languages, but not JavaScript. They are relatively simple to implement and there are multiple ways to do so:

- Array Implementation (push/shift or unshift/pop)
- A class similar to singly linked list (best choice since we don't need indexes)

Requires two operations:

1. `enqueue` - add something to queue
2. `dequeue` - remove something from queue

BIG O of Stacks
Insertion - O(1) <---- should have linear big O (only thing that matters)
Removal - O(1) <---- should have linear big O (only thing that matters)
Searching - O(N) <---- doesn't matter for stack
Access - O(N) <---- doesn't matter for stack

---

## Trees

---

A `tree` is a data structure that consists of nodes in a `parent / child` relationship

lists are `linear`. trees are `nonlinear`

- all nodes must point away from the root. No nodes can connect "sideways" to another sibling. That is a `graph`
- has only one entry point (`root`)

TREE TERMINOLOGY
`root` - the top node in a tree
`child` - a node directly connected to another node when moving away from the root.
`parent`- the converse notion of a child
`siblings` - a group of nodes with the same parent
`leaf` - a node with no children
`edge` - the connection between one node and another

APPLICATIONS

- HTML DOM
- Network Routing
- Abstract Syntax Tree
- Artificial Intelligence
- Folders in OS
- JSON

### Types of Trees

There are many many types of trees, all with a similar structure, but slightly different functionality / features:

- Binary Trees
- Heaps
- Multiway Trees
- B-trees
- etc.

#### Binary Search Tree

A binary tree is a tree data structure where each node has at most 2 children. These children are typically referred to as left and right.

A binary SEARCH tree involves sorting of those nodes:
Every node to the left of a parent node is always less than the parent.
Every node to the right of the parent node is always greater than the parent.

### Big O of BST

Insertion - O(log n)
Search - O(log n)
NOT guaranteed!

---

## Hash Tables

---

In a hash table, data is stored in an array format, where each data has its own unique index value. A `hash function` is used to convert a key into a index value which corresponds to the "bucket" in the array where the data is stored.

A common problem occurs when two distinct keys are converted to the same address - an occurrence called a collision. Collisions need to be handled in a way that ensures no data is overwritten and all data can still be efficiently retrieved.

### Hash Function

`hash function` - function that takes data of an arbitrary size and outputs data of a fixed size. It is a `one-way function`, meaning we can't determine the input value if we just have the output. It is `deterministic`, meaning the same input yields the same output every time.

Good Hash:

1. Fast (i.e. constant time)
2. Doesn't cluster outputs at specific indices, but distributes uniformly
3. Deterministic / pure function
