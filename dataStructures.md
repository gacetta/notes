# Data Structures

----------------------------------------
## Singly Linked List
----------------------------------------
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

----------------------------------------
## Doubly Linked List
----------------------------------------
Almost identical to singly linked lists except every node has a nother pointer to the previous node.

### Big O Notation:
INSERTION - O(1)
REMOVAL - O(1)
SEARCHING - O(N)
ACCESS - O(N)

### Advantages and Disadvantages
- Better than Singly Linked Lists for finding nodes and can be done in half the time.
- Take up more memory considering the extra pointer

----------------------------------------
## Stacks
----------------------------------------
A `LIFO or Last In First Out` data structure.  

Where Stacks Are Used:
- Managing Function Invocations (call stack)
- Undo / Redo
- Routing (the history object)

A "stack" is more of a concept than a strict data structure implementation.  They are a built in data structure in some languages, but not JavaScript.  They are relatively simple to implement and there are multiple ways to do so:
- Array Implementation (push/pop or unshift/shift)
- A class similar to singly linked list (best choice since we don't need indexes)

Requires two operations: 
1. `push` - add something to queue
2. `pop` - remove something from queue

BIG O of Stacks
Insertion - O(1)  <---- should have linear big O
Removal - O(1)    <---- should have linear big O
Searching - O(N)  <---- doesn't matter for stack
Access - O(N)     <---- doesn't matter for stack

----------------------------------------
## Queues
----------------------------------------
A `FIFO or First In First Out` data structure

Commonly used in programming:
- background tasks
- uploading resources
- printing / task processing

A "queue" is more of a concept than a strict data structure implementation.  They are a built in data structure in some languages, but not JavaScript.  They are relatively simple to implement and there are multiple ways to do so:
- Array Implementation (push/pop or unshift/shift)
- A class similar to singly linked list (best choice since we don't need indexes)

Requires two operations: 
1. `enqueue` - add something to queue
2. `dequeue` - remove something from queue
