# data structures

## What makes something a data structure?
Data structures are collections of values, the relationships among them and the functions or operations that can be applied to the data.

Simply put - `data structures` are ways of organizing data on our computer

---------------
## Storing Data
---------------
CPU stores data in RAM (temporary) and Secondary Storage (Persistent).
1. CPU runs code.  When it encounters a variable, it:
2. stores variable in RAM.  We want to store variable longterm so we:
3. store code in persistent storage.  We turn off and on the machine and next time:
4. CPU runs code... repeat step #1...

### RAM
Massive storage area (like a data structure) that has numbered shelves.  These are called `addresses`.  Each "shelf" has 8 `bits` (for 8 bit system) that can be off or on.  8 bits is a `byte`.  So each `address` has 1 `byte`.

Address         
0         00000001
1         00100001
2         00000001
3         01100001
4         00000001
5         00000001
6         11000001
7         01000001

The CPU is connected to a memory controller that reads and writes to the RAM.  It has connections to each `address` in the `RAM` which results in fast access to the memory (`Random Access Memory`).  So when the CPU says, what's at address 7, address 0 and address 255 - that information is quickly retrievable.

The process is optimized to retrieve data from nearby addresses, so it's faster to access data in addresses 0 and 1, vs. 0 and 1000.

To further optimize things, the CPU has a very small cache to store the most recent data.  A common one is an LRU cache


### storing an integer
integers take 32 bits of space to store.  That would take addresses 0-3 in RAM to store:
0         00000000
1         00000000
2         00000000
3         00000001

An 8-bit system(11111111) can store 255 digits
16-bit:   65,536
32-bit:   2,147,483,647
64-bit:   9,223,372,036,854,775,807

### Operations on data structures:
1. insertion
2. deletion
3. traversal
4. searching
5. sorting

---------
## Arrays
---------
search  - O(n)
lookup  - O(1)
push*   - O(1)
insert  - O(n)
delete  - O(n)
* can be O(n)

const strings = [1, 2, 3, 4]
4*4 = 16 bytes of storage

### push
`strings.push(5)` - O(1)

### pop
`strings.pop()` - O(1)

### unshift
`strings.unshift(0)` - O(n)

### splice
`strings.splice(2, 0, 3.5)` - O(n)

### Static vs Dynamic Arrays
In C++:
int a[20];
int b[5] {1,2,3,4,5}

to add another element to b array, we'd have to copy all of that data over to a new location in RAM where there's room to add a new element

### push with O(n) under the hood
Because JS is dynamically typed, an array has a possibility of O(n) time when adding a new element.  Imagine JS allocated just enough space in memory for:

    const numbers = [1, 2, 3, 4]

If we add a number to that array: `numbers.push(5)` and JS needed to make more space in memory, under the hood it may have to iterate over the entire array to store data in a new location in memory then add the new element, thus resulting in O(n) complexity.

### Pros and Cons of Array
PRO:
- fast lookups
- fast push / pop
- ordered

CON:
- slow inserts
- slow deletes
- fixed size (if using static array)

--------------
## Hash Tables
--------------
AKA Hash Maps, Maps, Unordered Maps, Dictionaries, Objects

JavaScript - Object
Python - Dictionary
Java - Map
Ruby - Hash

lookup*  - O(1)
insert  - O(1)
delete  - O(1)
search  - O(1)
* on occasion may take O(n)

### collisions
when two entries are assigned to the same bucket, we need a way to handle overflow.  This is often handled with a linked list.

When collisions occur, the lookup time for that specific bucket is slower: O(n/k) where k is the size of the hash table.  This reduces to O(n)

### Hash Tables PRO / CON
PRO:
- Fast lookups (good collision resolution needed)
- Fast inserts
- Flexible Keys

CON:
- unordered
- slow key iteration
