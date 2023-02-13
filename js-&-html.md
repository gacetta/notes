## MODULE SCRIPT

`<script>` tag can be used to share JS file. To utilize `module` functionality, we need to create a script in HTML with a `type` of `module`

    <script type="module" src="filename.js"></script>

A script with type `module` can use `import` and `export` features.

## EXPORT (named export)

Imagine you have a file, `math_functions.js` full of mathematical functions. You want to use a function in several different JS files. In order to share it, you first need to `export` it:

    export const add = (x, y) => {
    return x + y;
    }

The above is a common way to export a single function, but you can achieve the same thing like this:

    const add = (x, y) => {
    return x + y;
    }

    export { add };

When you export a variable or function, you can import it into another file and use it without having to rewrite the code. You can even export multiple things by placing them all in the export statement, like this:

    export { add, subtract };

## EXPORT (export default)

The above _named export_ allows us to make multiple functions and variables available for use in other files.

There's another syntax, known as _export default_ which is usually used if only one value is being exported from a file. It is also used to create a fallback value for a file or module:

    //named function
    export default function add(x, y) {
        return x + y;
    }

    //anonymous function
    export default function (x, y) {
        return x + y;
    }

Since `export default` is used to declare a fallback value for a module or file, you can only have one value be a default export in each module or file. Additionally, you cannot use `export default` with `var`, `let`, or `const`

## IMPORT

`import` allows you to choose which parts of a file or module to load after they've been `exported`

to import a function to use in another file:

    import { add } from './math_functions.js';

Here, `import` will find `add` in `math_functions.js`, import just that function for you to use, and ignore the rest. The `./` tells the import to look for the `math_functions.js` file in the same folder as the current file. The relative file path (`./`) and file extension (`.js`) are required when using import in this way.

You can import more than one item from the file by adding them in the `import` statement like this:

    import { add, subtract } from './math_functions.js';

## IMPORT DEFAULT

To import a `default export`, there is a different `import` syntax:

    import add from "./math_functions.js";

The syntax differs in one key place - the imported value, `add`, is not surrounded by curly braces `{}`. `add` here is simply a variable name for whatever the default export of the `math_functions.js` file is. You can use any name here when importing a default.

## IMPORT ALL

If you want to import all the content from a file into the current file, this can be done with `import * as` syntax. Here's an example where the contents of a file named `math_functions.js` are imported into a file in the same directory:

    import * as myMathModule from "./math_functions.js";

The above `import` statement will create an object called `myMathModule`. You can name this object anything you like. It will contain all the exports from `math_functions.js` inside, so you can access the functions like you would any other object property. Here's how you would access `add` and `subtract` functions that were imported:

    myMathModule.add(2, 3);
    myMathModule.subtract(8, 3);
