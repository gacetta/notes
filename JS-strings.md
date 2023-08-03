# Strings

## Template Literals

Makes creation of strings simpler.  

    const person = {
    name: "Zodiac Hasbro",
    age: 56
    };

    const greeting = `Hello, my name is ${person.name}!
    I am ${person.age} years old.`;

    console.log(greeting);

The console will display the strings `Hello, my name is Zodiac Hasbro!` and `I am 56 years old.`.

A lot of things happened there. Firstly, the example uses backticks (\`), not quotes (`'` or `"`), to wrap the string. Secondly, notice that the string is multi-line, both in the code and the output. This saves inserting `\n` within strings. The `${variable}` syntax used above is a placeholder. Basically, you won't have to use concatenation with the `+` operator anymore. To add variables to strings, you just drop the variable in a template string and wrap it with `${` and `}`. Similarly, you can include other expressions in your string literal, for example `${a + b}`. This new way of creating strings gives you more flexibility to create robust strings.

## String.prototype.endsWith()
The `endsWith()` method determines whether a string ends with the characters of a specified string, returning true or false as appropriate.

```
endsWith(searchString)
endsWith(searchString, endPosition)
```

`searchString`
The characters to be searched for at the end of str. *Cannot be a regex.* All values that are not regexes are coerced to strings, so omitting it or passing undefined causes endsWith() to search for the string "undefined", which is rarely what you want.

`endPosition` <optional>
The end position at which searchString is expected to be found (the index of searchString's last character plus 1). Defaults to str.length.

```
const str = "To be, or not to be, that is the question.";
console.log(str.endsWith("to be", 19)); // true
```

**Return value**
`true` if the given characters are found at the end of the string, including when searchString is an empty string; otherwise, `false`.