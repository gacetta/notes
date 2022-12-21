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