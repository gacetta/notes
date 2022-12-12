# closures in javascript

---
## functions under the hood
---
  function woohoo() {
    console.log('woohoo')
  }

  woohoo.yell = 'ahhhhhh'

  const specialObj = {
    yell: 'ahhhhhh',
    name: woohoo,
    (): console.log('woohoo')
  }

somefunc() object contains: code(), name(optional), properties

---
## first class citizens
---
1. assign functions to variable
2. pass functions as arguments into a function
3. return functions as values from other functions