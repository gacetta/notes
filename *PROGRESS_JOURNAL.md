---
# Day 1 - Jan 30
---

Paired with Erika Jung - reminded me of the nullish coallescing operator

```
leftExpr ?? rightExpr       // if leftExpr is truthy, returns leftExpr
                            // if leftExpr is falsy, returns rightExpr
```

---

# Day 2 - Jan 31

---

Use of `.constructor`:

```
const copy = new testObject.constructor  // uses the constructor to make a copy of the datatype
```

---

# Day 3 - Feb 1

---

- Learned HashTables

- Array.unshift(1, 2, 3) = [1, 2, 3, ...Array]

---

# Day 4 - Feb 2

---

- `this.head = this.tail = newNode` assigns both `this.head` and `this.tail` to `newNode`

- hash O(n) solution to Two Sum(numArr, target):

```
hash= {};
iterate over numArr check what number is needed to match to target
if number is in hash - return both indices
otherwise add curr element to hash { element: index}
```

---

# Day 5 - Feb 3

---

`.repeat()` - string method that constructs and returns a new string which contains the specified numbers of copies of the string on which it was called

approach to binary convertor
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

---

# Day 6 - Feb 4

---

`console.time(label)` start timer of name label
`console.timeEnd(label)` end timer of name label

isPrime() - check all divisors up to Math.sqrt(num) for efficiency

fibonacci bottom up approach:

- w/cache. cache = {0:0, 1:1}. cache[num] = cache[num - 2] + cache[num - 1]
- space: O(1): twoBefore = 0, oneBefore = 1. update values as you go

**factorial could be the same**

---

# Day 7 - Feb 6

---

"Every single dynamic programming video should start out with the explanation of the subproblem.
This is not about table behind me. It’s about subproblem and how they relate to each other.

coinSum2
dynamic programming solution to "Total Unique Ways to Make Change or 'Coin Change 2' on Leet Code" - https://www.youtube.com/watch?v=DJ4a7cmjZY0

- `element.onclick = function(e) {}` <------ overwrites any existing functionality for click
- `element.addEvenetListener(eventType, function(event) {})` <------- preferred since it ADDS functionality vs overwrites

DOM Tree - a huge massive object

      window
        |
      document
        |
     --html--
     |      |
    head   body
     |      |
        etc.

- HTML elements represented as objects

---

# Day 8 - Feb 7

---
