/**
 * add (num:int) -> adds a number to the ds
 * remove (num:int) -> removes a number from the ds
 * has (num:int) -> returns if the number already exists in ds
 * All in O(1) time
 * 
 * We know that a hashmap / Set() has all these properties
 * 
 * Here's an implementation that assumes:
 *  - no duplicate values 
 *    -> add('test') & add('test') would result in only one 'test' in ds
 *    -> add(42) & add('42') would result in both values stored
 */

class ConstantTimeDS {
  // store data in a hashmap
  // private property only accessible from within class
  #data = {}

  // private helper function to give create a key for the value
  // this allows for edge case of add(42) & add('42')
  #createKey(value) {
    return `${value.toString()}-${typeof value}`
  }

  // saves the data type in the key
  // allows for storing duplicate entries
  add(value) {
    const key = this.#createKey(value)
    if (this.has(value)) this.#data[key] += 1
    else this.#data[key] = 1
  }

  // removes the value from ds if it exists
  remove(value) {
    const key = this.#createKey(value);
    if (this.has(value)) {
      this.#data[key] -= 1
      if (this.#data[key] <= 0) delete this.#data[key]
    }
  }

  // returns bool if the ds contains the value provided
  has(value) {
    const key = this.#createKey(value);
    return this.#data.hasOwnProperty(key);
  }
}

const test = new ConstantTimeDS();
console.log(test.has(1))
test.add(1)
console.log(test.has(1))
test.add(1)
console.log(test.has(1))
test.remove(1)
console.log(test.has(1))
test.remove(1)
console.log(test.has(1))