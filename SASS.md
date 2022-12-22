# SASS
## What is SASS
---
`SASS` is a CSS preprocessor, an extension of CSS that adds power and elegance to the basic language.

CSS files get huge, messy and unmangeable after time.  SASS can help us with our program architecture

SASS Source Code ----Sass compiler----> Compiled CSS Code

Instead of writing in CSS, we write SASS which is compiled into a css file that then can be read by the browser.
 
Functionality added by SASS:

- `Variables`: for reusable values such as colors, font-sizes, spacing, etc.
- `Nesting`: to nest selectors inside of one another, allowing us to write less code
- `Operators`: for mathematical operations right inside of Css
- `Partials and imports`: to write CSS in different files and importing them all into one single file
- `Mixins`: to write reusable pieces of CSS code
- `Functions`: similar to mixins, with the difference that they produce a value that can then be used
- `Extends`: to make different selectors inherit declarations that are common to all of them
- `Control directives`: for writing complex code using conditionals and loops

Two different syntaxes - similar but different:  
`Sass syntax` & `SCSS syntax` (also known as sassy css)

**We're using SCSS**

---
## Variables
---
Variables are named using the `$` character followed immediately by the variable name: 

     $color-primary: red;

Variables are referenced with the same syntax: 

    color: $color-primary;

---
## Nesting
---
An important part of SCSS is nesting of selectors, which provides visual clarity of the heirarchy much like `html`

In SCSS we can nest selector elements.  
Take this CSS for example:

    nav ul {
      margin: 0;
      padding: 0;
      list-style: none;
    }
    nav li {
      display: inline-block;
    }
    nav a {
      display: block;
      padding: 6px 12px;
      text-decoration: none;
    }

The same code written in SCSS, with the `ul`, `li`, and `a` selectors nested inside the `nav` selector:

    nav {
      ul {
        margin: 0;
        padding: 0;
        list-style: none;
      }

      li { display: inline-block; }

      a {
        display: block;
        padding: 6px 12px;
        text-decoration: none;
      }
    }

There's no limit to how deep the nesting can go (though overly nested rules will result in over-qualified CSS that could prove hard to maintain and is considered BAD PRACTICE)

Lets say the above CSS also has the following selector:

    nav li:first-child {
      color: blue;
    }

we can use the `&` character to represent the current path: `nav li` and nest the `:first-child` selector _inside_ the `li` selector

  nav {
    ul {
      margin: 0;
      padding: 0;
      list-style: none;
    }

    li { 
      display: inline-block; 
      
      &:first-child {
        color: blue
      }
    }

    a {
      display: block;
      padding: 6px 12px;
      text-decoration: none;
    }
  }


---
## Color Functions in SASS
---
### Lighten / Darken
`lighten($base-color, value%)` function to calculate a lighter shade of the base color.
`darken($base-color, value%)` function to calculate a darker shade of the base color.

---
### Saturate / Desaturate
---
`saturate($base-color, value%)` function to calculate a more saturated shade of the base color.
`desaturate($base-color, value%)` function to calculate a less saturated shade of the base color.

---
### Adjust Hue
---
`adjust-hue($base-color, value%)` function to adjust the hue value of HSL

---
### Adding Alpha Transparency
---
`rgba($base-color, opacity-value)` function can turn our color variable into a transparent value easily.

---
## Float
---
The `float` CSS property places an element on the left or right side of its container, allowing text and inline elements to wrap around it. The element is removed from the normal flow of the page, though still remaining a part of the flow (in contrast to `absolute positioning`).

### How Floating Elements are Positioned
As mentioned above, when an element is floated, it is taken out of the normal flow of the document (though still remaining part of it). It is shifted to the left, or right, until it touches the edge of its containing box, or another floated element.

A floated element is at least as tall as its tallest nested floated children. We gave the parent width: 100% and floated it to ensure it is tall enough to encompass its floated children, and to make sure it takes up the width of the parent so we don't have to clear its adjacent sibling.

In other words, if a container element only contains `floated` elements, that container element sees itself as having no height.

### Clearfix 
The clearfix method fixes the problem of floated content having no height.  Simply add a class to the parent container named `clearfix`.  Then use `.clearfix::after{}` to create an element after that gives the container height.

    <nav class='clearfix'>
      <ul class="navigation">
        <li><a href='#'>About Us</a></li>
        <li><a href='#'>Pricing</a></li>
        <li><a href='#'>Contact</a></li>
      </ul>
      <div class="buttons">
        <a class="btn-main" href="#">Sign up</a>
        <a class="btn-hot" href="#">Get A Quote</a>
      </div>
    </nav>

    nav {
      margin: 30px;
      background-color: $color-primary;
    }

    .clearfix::after {      //<----- Clearfix!
      content: '';
      clear: both;
      display: table;
    }

    .navigation {
      list-style: none;
      float: left;
    }

    .buttons {
      float: right;
    }

---
## Mixins
---
A snippet of code that can be "mixed in" to the code easily.

Lets say there are a lot of `clearfix` moments in the code.  Rather than add the following code into every selector, we can create a `mixin`:

    nav {
      margin: 30px;
      background-color: $color-primary;
      
      &::after {        //The code from here
        content: '';    // |
        clear: both;    // |
        display: table; // |
      }                 // To here
    }

Declaration syntax: `@mixin mixin-name`

    @mixin clearfix {
      &::after {
        content: '';
        clear: both;
        display: table;
      }
    }

Calling syntax: `@include mixin-name`

    nav {
      margin: 30px;
      background-color: $color-primary;
      
      @include clearfix;    // call the mixin with @include
}

#### Mixin Arguments

We can pass an argument to a mixin as well.  
Lets say we have a mixin to style our links.  But we want different to use different colors for different applications.  

Declaration:

    @mixin style-link-text($color) {
      text-decoration: none;
          text-transform: uppercase;
          color: $color;
    }

Call:

    @include style-link-text($text-color-dark);


---
## Functions in SASS
---
Not often used, but possible!

to declare: `@function func-name(args)`

    @function divide($a, $b) {
      @return $a / $b;
    }

to call: `func-name(args)`

    margin: divide(60 / 2) * 1px;

---
## Extend
---
There are often cases when designing a page when one class should have all the styles of another class, as well as its own specific styles.  But this can create cluttered HTML, it's prone to errors from forgetting to include both classes, and it can bring non-semantic style concerns into your markup.

Sass’s @extend rule solves this. It’s written `@extend <selector>`, and it tells Sass that one selector should inherit the styles of another.

SCSS syntax:

    .error {
      border: 1px #f00;
      background-color: #fdd;

      &--serious {
        @extend .error;
        border-width: 3px;
      }
    }

CSS syntax:

    .error, .error--serious {
      border: 1px #f00;
      background-color: #fdd;
    }
    .error--serious {
      border-width: 3px;
    }

### Placeholder Selectors
Sass has a special kind of selector known as a `“placeholder”`. It looks and acts a lot like a class selector, but it starts with a `%` and it's not included in the CSS output. In fact, any complex selector (the ones between the commas) that even _contains_ a placeholder selector isn't included in the CSS, nor is any style rule whose selectors all contain placeholders.

SCSS Syntax:

    .alert:hover, %strong-alert {
      font-weight: bold;
    }

    %strong-alert:hover {
      color: red;
    }

Compiled to CSS:

    .alert:hover {
      font-weight: bold;
    }

What’s the use of a selector that isn’t emitted? It can still be extended! Unlike class selectors, placeholders don’t clutter up the CSS if they aren’t extended and they don’t mandate that users of a library use specific class names for their HTML.

SCSS Syntax:

    %toolbelt {
      box-sizing: border-box;
      border-top: 1px rgba(#000, .12) solid;
      padding: 16px 0;
      width: 100%;

      &:hover { border: 2px rgba(#000, .5) solid; }
    }

    .action-buttons {
      @extend %toolbelt;
      color: #4285f4;
    }

    .reset-buttons {
      @extend %toolbelt;
      color: #cddc39;
    }

Compiled CSS:

    .action-buttons, .reset-buttons {
      box-sizing: border-box;
      border-top: 1px rgba(0, 0, 0, 0.12) solid;
      padding: 16px 0;
      width: 100%;
    }
    .action-buttons:hover, .reset-buttons:hover {
      border: 2px rgba(0, 0, 0, 0.5) solid;
    }

    .action-buttons {
      color: #4285f4;
    }

    .reset-buttons {
      color: #cddc39;
    }


### Extend vs Mixin. 

Mixin copies properties into the place of call
Extend copies its selector into the specified rule.

---
### Partials and Imports
---

A partial SASS file is just that, a part of the complete SASS.  These files are conventionally named with an underscore as the first character `_base.scss`

These partials are imported into the main.scss file using `@import "file-path"` such as `@import "base/base"`

---
## Architecture
---
One of the advantages of sass is having multiple files for different aspects of styling your site.  Multiple files in multiple folders makes it easier to organize your css.

**FILE NAMING CONVENTION:** - start with underscore: `_filename.scss`

Folders:
1. /sass/abstracts - contains abstracted styling: `_variables`, `_mixins`, `_functions`
2. /sass/base - contains core styling that is referenced throughout site: `_animations`, `_base`(reset, html body selectors), `_typography`, `utilities`
3. /sass/components - contains components you've created for the page such as `buttons`, `cards`, etc.
4. /sass/layout - contains layout information for the page such as `header`, `grid`, etc.
5. /sass/pages - contains an scss sheet for each page.  `_home.scss` might contain styling information for each `section` of that page
6. /`main.scss` - `main.scss` (no underscore) is used to link all scss pages together.  It should live in the /scss folder.

example `main.scss`
```
@import "abstracts/functions";
@import "abstracts/mixins";
@import "abstracts/variables";

@import 'base/animations';
@import 'base/base';
@import 'base/typography';
@import 'base/utilities';

@import 'components/button';
@import 'components/card';
@import 'components/composition';
@import 'components/feature-box';

@import 'layout/grid';
@import 'layout/header';

@import "pages/home";
```

---
## media queries in SASS
---
media queries can be nested just like selectors

    .story {
      width: 75%;

      @media (max-width: 600px) {
        width: 50%;
      }
    }

compiles to:

    .story {
      width: 75%;
    }
    @media (max-width: 600px) {
      .story {
        width: 75%;
      }
    }

---
### mixin media query with @content

Declaration:

    @mixin respond-phone {
      @media (max-width: 600px) { @content }
    }

Call:

    @include respond-phone {
      font-size: 50%;
    }

// MEDIA QUERY MANAGER
/*
0-600px:    phone
600-900px:  Tablet portrait
900-1200px: Tablet landscape
[1200-1800]: is where our normal styles apply
1800px+:    Big Desktop
*/

/*
$breakpoint argument choices:
- phone
- tab-port
- tab-land
- big-desktop
*/

**`ems` and `rems`aren't affected by the root font-size setting.  They are always equal to the browser font-size (default 16px)**

converting px to ems we get:

    @mixin respond($breakpoint) {
      @if $breakpoint == phone {
        @media (max-width: 37.5em) { @content }   //600px
      }
      @if $breakpoint == tab-port {
        @media (max-width: 56.25em) { @content }  //900px
      }
      @if $breakpoint == tab-land {
        @media (max-width: 75em) { @content }     //1200px
      }
      @if $breakpoint == big-desktop {
        @media (max-width: 112.5em) { @content }  //1800px
      }
    }

---
### Media query design / implementation approach
---
ORDER: Base + typography > general layout + grid > page layout > components



---
## SAMPLE SASS SETUP
---

1. in CLI navigate to project root folder
2. run `npm init` to create `package.json` file
3. `npm install node-sass --save-dev` to install node-sass and save it as a development dependency.  This will update the `package.json` file.  By saving that info in the `package.json` file, it tells the program what npm functionality is needed for runtime.  Thus making it easier to share a project with others.  Like sharing a recipe rather than giving someone all the ingredients.
4. To share our project with someone, share the appropriate files, including `package.json`, but NOT the `node-modules` folder.  The user can run `npm install` to download all necessary files based on the `package.json` information.

---
## Implementing Sass into our workflow
---
1. **CREATING A SCRIPT**
We can write our own scripts in the `package.json` file.
In our case, we want to compile the `.scss` file to convert it to `.css` to be rendered by the browser.  

We do this with the following code:

    "scripts": {
        "compile:sass": "node-sass sass/main.scss css/style.css"

We have written a script called `compile:sass`.  It specificies the name of the package, `node-sass`, then the location of the source file, `sass/main.scss`, and the location of the output file, `css/style.css`.

2. ***RUNNING THE SCRIPT***
To run the script, we have to use the terminal:

`npm run compile:sass`

This works as expected - runs the script we have named `compile:sass` which compiles the .scss file to .css file!  

However, every time we make changes, we have to run the script again in the CLI to see the results in the browser.

To avoid this, we can add a `watch` flag to the end of the script, which tells the script to watch the source file and to run every time the source file is updated.  This is done using `-w`:

    "scripts": {
        "compile:sass": "node-sass sass/main.scss css/style.css -w"

---
## npm build process
---
main.sass
|   //COMPILATION
v
style.comp.css    icon-font.css
|  //CONCATENATION  |
v                   |
style.concat.css  <-
|  //PREFIXING
v
style.prefix.css
| //COMPRESSING
v
style.css (production code)

modify "scripts" in `package.json`
`"watch:sass": "node-sass sass/main.scss css/style.css -w"` // watches for changes in main.scss and compiles into style.css
`"compile:sass": "node-sass sass/main.scss css/style.comp.css"` //compiles all scss files into .comp.css file
`"concat:css": "concat -o css/style.concat.css css/icon-font.css css/style.comp.css"` //concat icon-font.css and style.comp.css files
`"prefix:css": "postcss --use autoprefixer -b 'last 10 versions' css/style.comp.css -o css/style.prefix.css"` //POSTCSS autoprefixes for compatibility (`-webkit`, `moz`, etc.)
`"compress:css": "node-sass css/style.prefix.css css/style.css --output-style compressed"`

NOW that we've set up each step of the build process, we can combine them into one command using the npm package, npm-run-all
`"build:css": "npm-run-all compile:sass concat:css prefix:css compress:css"`

---
## combining watch and live-server
---
We have to have two terminals open to run both `watch:sass` and `live-server` concurrently.  We can do better:

`"watch:sass": "node-sass sass/main.scss css/style.css -w"` // watches for changes in main.scss and compiles into style.css
`"devserver": "live-server"`
`"start": "npm-run-all --parallel devserver watch:sass" `

we can use `--browser:` to tell this project to run live-server in a specific browser (if we want to use the firefox dev tools for grid, say)
`"devserver": "live-server --browser:firefox"`
