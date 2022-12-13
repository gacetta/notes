# Random Numbers

## Math.random()

`Math.random()` is a Math function that generates a random decimal number between 0(inclusive) and 1(exclusive).

### GENERATE RANDOM WHOLE NUMBER

Steps to generate a random whole number between 0 and `num`:

1. Use `Math.random()` to generate a random decimal.
2. Multiply that random decimal by `num`.
3. Use another function, `Math.floor()` to round the number down to its nearest whole number.

        Math.floor(Math.random() * num);    

**NOTE:** Remember that `Math.random()` can never quite return a 1 and, because we're rounding down, it's impossible to actually get `num`. This technique will give us a whole number between 0 and `num - 1`.

### GENERATE RANDOM WHOLE NUMBERS WITHIN A RANGE

It's possible to generate a random whole number that falls within a range of two specific numbers.

To do this, we'll define a minimum number `min` and a maximum number `max`:

    Math.floor(Math.random() * (max - min + 1)) + min

_MIN_  (result `+ min`)
Since this generator returns a value inclusive of `0`, adding `min` to the result ensures `min` as a minimum value of this expression

_MAX_ (`max - min + 1`)
Since this generator returns a value that is noninclusive of the max value, we add 1 to the multiplier.  Additionally, since we add min to the final value, we subtract it here so the `max` value remains consistant