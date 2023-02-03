**Day 1 - Jan 30**
Paired with Erika Jung - reminded me of the nullish coallescing operator

```
leftExpr ?? rightExpr       // if leftExpr is truthy, returns leftExpr
                            // if leftExpr is falsy, returns rightExpr
```

**Day 2 - Jan 31**
Use of `.constructor`:

```
const copy = new testObject.constructor  // uses the constructor to make a copy of the datatype
```

**Day 3 - Feb 1**

- Learned HashTables

- Array.unshift(1, 2, 3) = [1, 2, 3, ...Array]

**Day 4 - Feb 2**

- `this.head = this.tail = newNode` assigns both `this.head` and `this.tail` to `newNode`

- hash O(1) solution to Two Sum(numArr, target):

```
hash= {};
iterate over numArr check what number is needed to match to target
if number is in hash - return both indices
otherwise add curr element to hash { element: index}
```
