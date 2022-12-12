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

---
## closures and memory
---
we can use closures to make programs more efficiant.  Rather than run heavy duty, time consuming memory heavy operations repeatedly, we can run them once and access the results via closure.

