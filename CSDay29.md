# Linked Lists and Binary Search Trees

## Linked Lists
- One of the most common and essential data structures
- common questions in interviews

## ARRAY vs  LINKED LIST
ARRAY
strengths:
- random access (AKA indexed access) (fast search time)
- less memory needed per element
- better cache locality

weaknesses:
-slow insert/delete time
- fixed size (in some languages)

LINKED LIST:
strengths:
- faster insertion / deletion time
- dynamic size

weaknesses:
- slower search time
- more memory needed per node as additional storage is require for pointers

## Examples
- browser history: linked list
- playlists: linked list

## LL Interview Questions
**LEARN** implement a stack and queue with a linked list
- find the middle of a linked list.  *EXT* if it's an even length, return both nodes
use a 'fast' and 'slow' pointer approach.  for every 1 step the slow takes, fast takes 2 steps
- find the kth to last node
use a 'lagging' pointer and 'normal' pointer
- add a node to a sorted linked list
- reverse a linked list

**Linked list doesn't always have a head and tail**

## Binary Search Tree
rarely used.  Binary search algos are much more common
- enable to retrieve data in log time O(logn)
- however, they're very common interview questions

In any situation where elements of a collection can be compared in a great than / less than manner.

Example: git bisect

## Interview Questions
- search for a given value in a BST
- calculate the height of a BST
- determine if a BST is valid
- how can we handle duplicate values being added to a BST?

## LOOK UP:
- graphs: directed graphs, weighted graphs
- minimal heaps
