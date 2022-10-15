# JavaScript - Switch Statements

When there are many options to choose from, there's another method other than `if else` statements.

The `switch` statement tests a value and can have many _case_ statements which define various possible values.  Statemenets are executed from the first matched `case` value until a `break` is encountered.

Here's an example:

    switch (lowercaseLetter) {
    case "a":
        console.log("A");
        break;
    case "b":
        console.log("B");
        break;
    }


`case` values are tested with strict equality.  The `break` tells JS to stop executing statements.  If the `break` is omitted, the next statement will be executed.

## DEFAULT OPTION
In a switch statement you may not be able to specify all possible values as case statements. Instead, you can add the **default statement** which will be executed if no matching case statements are found. Think of it like the final `else` statement in an `if/else` chain.

A default statement should be the last case:

    switch (num) {
    case value1:
        statement1;
        break;
    case value2:
        statement2;
        break;
    ...
    default:
        defaultStatement;
        break;
    }

## MULTIPLE IDENTICAL OPTIONS
If the `break` statement is omitted from a switch statement's case, the following case statement(s) are executed until a `break` is encountered. If you have multiple inputs with the same output, you can represent them in a switch statement like this:

    let result = "";
    switch (val) {
    case 1:
    case 2:
    case 3:
        result = "1, 2, or 3";
        break;
    case 4:
        result = "4 alone";
    }

Cases for 1, 2, and 3 will all produce the same result.

## REPLACING IF ELSE CHAINS WITH SWITCH

If you have many options to choose from, a switch statement can be easier to write than many chained if/else if statements. The following:

    if (val === 1) {
    answer = "a";
    } else if (val === 2) {
    answer = "b";
    } else {
    answer = "c";
    }

can be replaced with:

    switch (val) {
    case 1:
        answer = "a";
        break;
    case 2:
        answer = "b";
        break;
    default:
        answer = "c";
    }

while more `verbose` than `if / else`, `switch` statements are clear and easy to read