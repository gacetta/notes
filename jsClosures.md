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

