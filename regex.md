# REGEX

Regex is short for `Regular Expression`. It helps to match, find or manage text.

---
## BASIC MATCHERS
---


### Basic Regex Search

The character or word we want to find is written directly. It is similar to a normal search process. For example, to find the word `curious` in the text, type the same. (case sensitive)

    curious Curious
    /curious/   // matches "curious"
---
### Dot: Any Character
`.` Matches any character except line breaks. Equivalent to `[^\n\r]`.  

    ex. 1!
    /./   // matches 'e' 'x' '.' '(space)' '1' '!'
---
## Character Classes
---
### Character Sets 

If one of the characters in a word can be various characters, we write it in square brackets `[]` with all alternative characters. For example, to write an expression that can find all the words in the text, type the characters `a`, `e`, `i`, `o`, `u` adjacently within square brackets `[]`.

    bag beg big bog bug
    /b[aeiou]g/   // matches "bag", "beg", "big", "bog", "bug"
---
### Negated Character Sets

`[^abc]` Match any character that is not in the set.

    bag beg big bog bug
    /b[^eo]g/   // matches "bag", "big", "bug" 
---
### Range

To find the letters (or numbers) in the specified range, the starting letter and the ending letter are written in square brackets `[]` with a dash between them `-`.  `[a-z]`

    fuck
    [f-k] // matches 'f', 'k'
---
### Match Any
A character set that can be used to match any character, including line breaks, without the dotall flag (`s`).
An alternative is [^], but it is not supported in all browsers.

    [\s\S] // matches any character including line break

    [^] // matches any character including line break (not supported by all browsers)
---
### Word Character: Letter, Number and Underscore

`\w` mathes any word character (alphanumberic and underscore).  Only matches low-ascii characters (no accented or non-roman characters).  Equivalent to the character class `[A-Za-z0-9_]`

    bonjour, mon frère
    /\w/g   // matches all the char except ',' '(space)' 'è'
---
### Not Word Character

`\W` Matches any character that is not a word character (alphanumeric & underscore). Equivalent to the character class `[^A-Za-z0-9_]`

    bonjour, mon frère
    /\W/g   // matches ',' '(space)' 'è'
---
### Digit Character

`\d` Matches any digit character (0-9). Equivalent to `[0-9]`.

    +1-(444)-555-1234
    /\d/    // matches all the char except '+' '-' '(' ')'
---
### Not Digit Character

`\D` Matches any character that is not a digit character (0-9). Equivalent to `[^0-9]`

    +1-(444)-555-1234
    /\D/    // matches '+' '-' '(' ')'
---
### Whitespace Character

`\s` matches only space, carraige return, tab, form feed, and new line characters.  It is equal to the character class `[ \r\t\f\n\v]`.

    glib jocks vex dwarves!
    /\w/    // matches '(space)'
---
### Except Space Character

`\S` matches any character that are **NOT** space, carraige return, tab, form feed, and new line characters.  It is equal to the character class `[^ \r\t\f\n\v]`.

     glib jocks vex dwarves!
    /\W/    // matches all characters except '(space)'
---
### Unicode Category
`\p{L}` matches a character in the specified unicode category. Requires the `u` flag.

    /\p{Ll}/u   // matches any lowercase letter (`Ll` is the key for the unicode category lowercase letter)
---
### Not Unicode Category
`\P{L}` matches any character that is not in the specified unicode category. Requires the `u` flag.

    /\P{Lu}/u /  / matches any character that is not an uppercase letter (Lu is the key for the unicode category uppercase letter)
---
### Unicode Script
`\p{Han}` matches any character in the specified unicode script.  Requires the `u` flag.

    \p{Arabic}   // matches any character in the Arabic script.
---
### Not Unicode Script
`\P{Han}` matches any character that is not in the specified unicode script.  Requires the `u` flag.

    \p{Greek}   // matches any character that is not in the Greek script.
---
## QUANTIFIERS & ALTERNATION

Quantifiers indicate that the preceding token must be matched a certain number of times. By default, quantifiers are **greedy**, and will match as many characters as possible.  

Alternation acts like a boolean OR, matching one sequence or another.

---
### Plus
`+` matches 1 or more of the preceding token.

    b be bee beer beers
    /b\w+/    // matches be, bee, beer, beers
---
### Asterisk
`*` matches 0 or more of the preceding token.

    b be bee beer beers
    /b\w*/   // matches be, bee, beer, beers
---
### Quantifier
`{number, number}` matches the specified quantity of the previous token. 
#### RANGE
`{1,3}` will match 1 to 3. 
#### EXACT QUANTITY
`{3}` will match exactly 3. 
#### AT LEAST 
`{3,}` will match 3 or more.

    b be bee beer beers
    /b\w{2,3}/  // matches bee beer
    /b\w{2}/    // matches bee
    /b\w{3,}/   // matches beer beers
---
### Optional
`?` matches 0 or 1 of the preceding token, effectively making it optional.

    color colour
    /colou?r/   // matches 'color' 'colour'
---
### Lazy
`?` makes the preceding quantifier lazy, causing it to match as few characters as possible. By default, quantifiers are greedy, and will match as many characters as possible.

    b be bee beer beers
    /b\w+?/ matches 'be' 
    /b\w+/ matches 'be' 'bee' 'beer' 'beers'
---
### Alternation

`|` acts like a boolean OR. Matches the expression before or after the `|`. It can operate within a group, or on a whole expression. The patterns will be tested in order.

In other words, all possible statements are written separated by the pipe sign `|`. This differs from charset `[abc]`, charsets operate at the character level. Alternatives are at the expression level. 

    bag beg big bog bug bob
    /b(a|e|i)g|bob/     //matches 'bag' 'beg' 'big' 'bob'
---
## GROUPS

Groups allow you to combine a sequence of tokens to operate on them together. Capture groups can be referenced by a backreference and accessed separately in the results.

---
### Capturing Group

`()` groups multiple tokens together and creates a capture group for extracting a substring or using a backreference.

For example, if you want to find either `Penguin` or `Pumpkin` in a string, you can use the following Regular Expression: `/P(engu|umpk)in/g`

    let testStr = "Pumpkin";
    let testRegex = /P(engu|umpk)in/;
    testRegex.test(testStr);        // returns true

    hahahaha haa hah!
    /(ha)+/     // matches hahahaha ha
---
### Referencing a Group by Number

`\n` (where n = number) matches the results of a capture group. For example `\1` matches the results of the first capture group & `\3` matches the third.

    bob mom mop pop pot tot
    /(\w)o\1/   // matches 'bob' 'mom' 'pop' 'tot'
---
### Named Capturing Group
`(?<GroupNameHere>regexHere)`creates a capturing group that can be referenced via the specified name.

`\k<GroupNameHere>` is then used to backreference the named capturing group

    I was definitely "working"

    /(['"])\w+\1/    
    /(?<quote>['"])\w+\k{quote}/   
    
    // These are the same regex 
    // 1st References Group by Number
    // 2nd Uses Named Capturing Group
    // both match "working"
---
### Parentheses: Non-capturing Grouping

`(?:)` groups multiple tokens together without creating a capture group.

For example, below are two groups. However, the first group reference we denote with `\1` actually indicates the second group, as the first is a non-capturing group.

    ha-ha,haa-haa
    /(?:ha)-ha,(haa)-\1/ // matches ha-ha,haa-haa
---
## LOOKAROUND  

Lookaround lets you match a group before (lookbehind) or after (lookahead) your main pattern without including it in the result.
Negative lookarounds specify a group that can NOT match before or after the pattern.

---
### Positive Lookahead

`(?=abc)` matches a group after the main expression without including it in the result.

A positive lookahead will look to make sure the element in the search pattern is there, but won't actually match it. A positive lookahead is used as `(?=...)` where the `...` is the required part that is not matched.

For example, we want to select the hour value in the text. Therefore, to select only the numerical values that have `PM` after them, we need to write the positive look-ahead expression `(?=)` after our expression. Include `PM` after the `=` sign inside the parentheses.

    Date: 4 Aug 3PM
    /\d+(?=PM)/  // matches '3'
---
### Negative Lookahead

`(?!abc)` specifies a group that can not match after the main expression (if it matches, the result is discarded).

A negative lookahead will look to make sure the element in the search pattern is not there. A negative lookahead is used as `(?!...)` where the `...` is the pattern that you do not want to be there. The rest of the pattern is returned if the negative lookahead part is not present.

For example, we want to select numbers other than the hour value in the text. Therefore, we need to write the negative look-ahead `(?!)` expression after our expression to select only the numerical values that do not have `PM` after them. Include `PM` after the `!` sign inside the parentheses.

    Date: 4 Aug 3PM
    /\d+(?!PM)/g    // matches '4'
---
### Positive Lookbehind

`(?<=abc)` matches a group before the main expression without including it in the result.

For example, we want to select the price value in the text. Therefore, to select only the number values that are preceded by `$`, we need to write the positive lookbehind expression `(?<=...)` before our expression. The `...` is the pattern that you want to match (in our case: `\$`).
    
    Product Code: 1064 Price: $5
    /(?<=\$)\d+/  // matches '5'
---
### Negative Lookbehind

`(?<!abc)` specifies a group that can not match before the main expression (if it matches, the result is discarded).

For example, we want to select numbers in the text other than the price value. Therefore, to select only numeric values that are not preceded by `$`, we need to write the negative lookbehind `(?<!...)` before our expression. The `...` is the pattern that you do not want to be there (in our case: `\$`).

    Product Code: 1064 Price: $5
    /(?<!\$)\d+/    // matches '1064'
---
## ESCAPED CHARACTERS
Escape sequences can be used to insert reserved, special, and unicode characters. All escaped characters begin with the `\` character.

---
### Reserved Characters

The following character have special meaning, and should be preceded by a `\` (backslash) to represent a literal character:  

 `{ } [ ] / \ + * . $^ | ?`

Within a character set, only `\`, `-`, and `]` need to be escaped. 

    1 + 1 + 2
    /\+/    // matches '+'
---
### Octal Escape

Octal escaped character in the form `\000`. Value must be less than 255 (\377).

    RegExr is ©2014
    /\251/  // matches '©'
---
### Hexadecimal Escape

Hexadecimal escaped character in the form `\xFF`.

    RegExr is ©2014
    /\xA9/  // matches '©'
---
### Unicode Escape

Unicode escaped character in the form `\uFFFF`.

    RegExr is ©2014
    /\u00A9/  // matches '©'
---
### Extended Unicode Escape

Unicode escaped character in the form `\u{FFFF}`. Supports a full range of unicode point escapes with any number of hex digits.
Requires the unicode flag (`u`).

    RegExr is ©2014
    /\u{00A9}/  // matches '©'
---
### Control Character Escape

Escaped control character in the form `\cZ`. This can range from `\cA` (SOH, char code 1) to `\cZ` (SUB, char code 26).


    /\cI/   // matches TAB (char code 9).
---
### Tab

`\t` matches a TAB character (char code 9)

    /\t/   // matches TAB (char code 9).
---
### Line Feed

`\n` matches a LINE FEED character (char code 10).

    /\n/   // matches LINE FEED (char code 10).
---
### Vertical Tab

`\v` matches a VERTICAL TAB character (char code 11).

    /\v/   // matches VERTICAL TAB (char code 11).
---
### Form Feed

`\f` matches a FORM FEED character (char code 12).

    /\f/    // matches FORM FEED character (char code 12)
---
### Carraige Return

`\r` matches a CARRIAGE RETURN character (char code 13).

    /\r/    // matches a CARRIAGE RETURN character (char code 13).
---
### Null

`\0` matches a NULL character (char code 0).

    /\0/    // matches a NULL character (char code 0).
---
## ANCHORS

Anchors are unique in that they match a position within a string, not a character.  

---
### Beginning
`^` matches the beginning of the string, or the beginning of a line if the multiline flag (`m`) is enabled. This matches a _position_, not a character.

    she sells seashells
    /^\w+/      // matches 'she'
---
### End
`$` matches the end of the string, or the end of a line if the multiline flag (`m`) is enabled. This matches a position, not a character.

    she sells seashells
    /\w+$/      // matches 'seashells'
---
### Word Boundary

`\b` matches a word boundary position between a word character and non-word character or position (start / end of string). See the word character class (`w`) for more info.

    she sells seashells
    /s\b/      // matches 's', 's'
              // she sell(s) seashell(s)
---
### Not Word Boundary

`\B` matches any position that is not a word boundary. This matches a position, not a character.

    she sells seashells
    /s\B/      // matches 's', 's', 's', 's'
              // (s)he (s)ells (s)ea(s)hells
---
## FLAGS

Expression flags change how the expression is interpreted. Flags follow the closing forward slash of the expression (ex. `/.+/igm` ).

---
### Ignore Case

`i` enables ignore case flag and makes the whole expression case-insensitive. 
    
    abc ABC AbC
    /abc/   // matches 'abc'
            // (abc) ABC AbC
    /abc/i  // matches 'abc', 'ABC', 'AbC'
            // (abc) (ABC) (AbC)
---
### Global Search

`g` enables the global flag.

Global search retains the index of the last match, allowing subsequent searches to start from the end of the previous match.

Without the global flag, subsequent searches will return the same match.

**NOTE:** RegExr only searches for a single match when the global flag is disabled to avoid infinite match errors.

    we were weak
    /we\w*/     // matches 'we'
                // (we) were weak
    /we\w*/g    // matches 'we', 'were', 'weak'
                // (we) (were) (weak)
---
### Multiline

`m` enables the multiline flag

When the multiline flag is enabled, beginning and end anchors (`^` and `$`) will match the start and end of a line, instead of the start and end of the whole string.

**NOTE:** patterns such as `/^[\s\S]+$/m` may return matches that span multiple lines because the anchors will match the start/end of any line.

    test.com
    site.com
    /\w+\.com$/g     // matches 'test.com'
                     // (test.com)
                     // site.com
    /\w+\.com$/gm    // matches 'test.com', 'site.com'
                     // (test.com)
                     // (site.com)
---
### Unicode

`u` enables the unicode flag.

When the unicode flag is enabled, you can use extended unicode escapes in the form `\x{FFFFF}`.

**NOTE:** It also makes other escapes stricter, causing unrecognized escapes (ex. `\j`) to throw an error.

    Smile more 😄
    /\u{1f604}/      // no matches
    /\u{1f604}/u     // matches '😄'
---
### Dotall

`s` enables dot all sticky flag.  

Dot (`.`) will match any character, including newline.

    a
    b
    c
    /.+/g       // matches 'a', 'b', 'c'
    /.+/gs      // matches 'a\rb\rc' (where \r is a carraige return)
---                    
### Sticky

`y` enables the sticky flag.

The expression will only match from its lastIndex position and ignores the global (`g`) flag if set. Because each search in RegExr is discrete, this flag has no further impact on the displayed results.

In a nutshell, a `regexp.exec()` call starts searching at position `lastIndex` and then goes further. If there’s no word at position `lastIndex`, but it’s somewhere after it, then it will be found.  

    let str = 'let varName = "value"';

    let regexp = /\w+/g;

    // start the search from position 3
    regexp.lastIndex = 3;

    let word = regexp.exec(str);  // found the match at position 4
    alert(word[0]);               // varName
    alert(word.index);            // 4

For some tasks, including the lexical analysis, that’s just wrong. We need to find a match exactly at the given position at the text, not somewhere after it. And that’s what the flag `y` is for.

The flag `y` makes `regexp.exec()` search **exactly at** position `lastIndex`, not _“starting from”_ it.

Here's the same search from above, this time with the `y` flag:

    let str = 'let varName = "value"';

    let regexp = /\w+/y;

    regexp.lastIndex = 3;
    alert( regexp.exec(str) ); // null (there's a space at position 3, not a word)

    regexp.lastIndex = 4;
    alert( regexp.exec(str) ); // varName (word at position 4)

more information here: https://javascript.info/regexp-sticky

---
## METHODS
---

### Test
### Match
### Replace

`string.replace(regex)`

Searching is useful. However, you can make searching even more powerful when it also changes (or replaces) the text you match.

You can search and replace text in a string using `.replace()` on a string. The inputs for `.replace()` is first the regex pattern you want to search for. The second parameter is the string to replace the match or a function to do something.

    let wrongText = "The sky is silver.";
    let silverRegex = /silver/;
    wrongText.replace(silverRegex, "blue");
    // returns "The sky is blue"

You can also access capture groups in the replacement string with dollar signs (`$`).

    "Code Camp".replace(/(\w+)\s(\w+)/, '$2 $1');
    // returns 'Camp Code'
---
