# this in JS

FOUR WAYS OF BINDING THIS:

## New Binding This
when we invoke the constructor function using the `new` keyword, `this` is bound to the created instance

  function Person(name, age) {
    this.name = name;
    this.age = age
  }

  const person1 = new Person('Xena', 55) //this = person1 (from `new` keyword)

## Implicit Binding
Most common use... just kind of how `this` works.  When simply referenced inside an object, `this` refers to that object.

  const person2 = {
    name: 'Karen',
    age: 40,
    hi() {
      console.log('hi' + this.name)   // this = person2 (implicit binding)
    }
  }

## Explicit Binding
When we explicitly dictate what `this` is bound to:

const person3 = {
  name: 'Kiko',
  age: 99,
  hi: function() {
    console.log('hi' + this.setTimeout)
    }.bind(window)         // this = window (from `.bind()`)
  }
}

## Arrow Function

const person4 = {
  name: "frank",
  age: 28,
  hi: function() {
    let inner = () => {
      console.log('hi' + this.name)  // this = window (arrow functions don't lexically bind `this`)
    }
    return inner();
  }
}