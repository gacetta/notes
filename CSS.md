# CSS - Cascading Style Sheets

## IN-LINE STYLE ATTRIBUTE
the style attribute can be added to many elements to alter their appearance

    <p style="color: blue;">

***NOTE:***  It is best practice to end inline style declaration with a `;`

---

## CASCADING STYLE SHEET & STYLE BLOCK
Using inline style attributes could get repetative if we need to assign a style to every separate `<p>` tag.  However, we can define the style for all `<p>` elements at once using a style block.  

`<style></style>` can be created at the top of the document and contain information to be applied to the entire page.  The following code would make every `<p>` element text blue.

    <style>
        p: {
            color: blue;
        }
    </style>

---

## SELECTORS

---
### CLASSES

**classes** are reusable styles that can be added to multiple HTML elements

      .blue-text {
        color: blue;
      }

this class can now be applied to an element inline using:


    <p class="blue-text">


multiple classes can be applied to the same element by separating each class name with a space.  

    <p class="class1 class2">


**NOTE** that the declaration in the style block requires a `.` but the declaration in the element tag does not include the `.`

---

### IDs 

**ids** are similar to classes, however they're a unique attribute used to target only one element of code.  They require a `#` instead of `.` in their definition: 

    #cat-photo-caption {
      background-color: green;
    }

ids attributes are assigned similarly to classes:

    <p id="cat-photo-caption">

**NOTE:**  Never give more than one element the same `id` attribute  

---
### ATTRIBUTE SELECTORS
---
We've seen how elements can be selected using classes and ids, however they can be selected using the attribute selector as well.

the `[attr=value]` selector matches and styles elements with a specific attribute value

      [type='radio'] {
          margin: 20px 10px 10px 20px;
      }

---
## CSS Units
---
**ABSOLUTE UNITS** - tie to physical units of length. (won't necessarily line up to a ruler if held to screen.  Use measurements when doing things for print)  
  * Pixels (`px`)
  * `pt`
  * `cm`
  * `mm`
  * `in`

**PERCENTAGES** - mainly used for widths.  Relative to their parent  (Heights get weird)

**RELATIVE UNITS** - relative to another length value.  

* UNITS RELATIVE TO FONT-SIZE:
  * `em` is relative to the parents's `font-size`, which is an inherited property.  If none of the parents have a declared `font-size` then `em` will inherit its size from the `<body>` (or the default which is usually 16px).
    * for example: `1em` = 100% of its parent's font-size.  `1.5em` = 150% of parent's font-size.
    * **NOTE:** when used for the font-size, `em` units can get out of control and have a cascading effect.
  * `rem` - short for root em.  It's always relative to the font size at the "root" of the document.  The "root" being the `<html>` element

* UNITS RELATIVE TO VIEWPORT
    * `vw` - relative to 1% of the viewport width
    * `vh` - relative to 1% of the viewport height
    * `lh` - relative to the line height of the element
    * `vmin` - uses the ratio of the _smallest side_.  If the browser is wider than it is tall, `1vmin` will be equivalent to `1vh`.  If the viewport is taller than it is wide, `1vmin` is equivalent to `1vw`.
    * `vmax`- similarly to `vmin`, `vmax` uses the ratio of the _largest side_.  `1vmax` is equivalent to `1vw` if the viewport is wider than it is tall; if the browser is taller than it is wide, `1vmax` will be equivalent to `1vh`.
---
### WHICH UNITS TO USE?
---
general rule of thumb:
* font-size = `rem`
* padding and margin = `em`
* widths = `em` or `percentage` (sometimes `pixels`)

when `em` units are being used on the `font-size` property, they reference the `parent`.  If they're being used on any other property, they reference the font-size of the element they're in.

### FONT-SIZE AND PADDING/MARGINS

In the following code, `rem` units are used to set the `font-size`, but `em` units are used to set the `padding`.  This way, the `padding` for each button will scale with the `font-size` of that element so they have similar proportions:

    .button {
        padding: .5em 1.25em;
    }

    .btn-big {
        font-size: 1.5rem;/
    }

    .btn-small {
        font-size: .75rem;
    }

    <button class="button btn-big">Big Text</button>
    <button class="button btn-small">Small Text</button>

*it's important to have things that react to changing font sizes for reactive web design*

### CONTAINER WIDTH
---
`percentages` are a common unit to use for setting `width`. The following code sets the `width` to 50% of the `parent` container.  If the `parent` container has no `width` setting, it will default to 100% of the screen:

    .class {
        width: 50%;
    }

### IMAGES

**NOTE:** any `images` in that class are _not_ resized and will extend outside of that 50%.  This is because `images` are `inline-elements`.  They default to the size of themselves.  So we can style them as well. 

    img {
        width: 100%;  
    }

**NOTE:** do not set a width AND height for an image.  otherwise the aspect ratio will be altered.

`max-width:` is a great property that allows us to set an absolute size as the maximum (so text and images are formatted properly).  Then we can use a percentage to scale down the site as the viewport changes

`min-width:` like `max-width`

**NOTE:** setting `font-size: 62.5%` for html element in CSS sheet will change the default text size from `16` to `10`, which makes `rem` easier to understand.

***BEST PRACTICE:*** is to not alter `<html>` `font-size` and just use `rem` to style other elements.

---
## List of CSS Properties
---
`color`  - specifies the color of text in an element  

    color: color; 

Color values can be `hex`, `rgb`, `hsl`, `rgba`, `hsla`, or a `color name`.

---
`font-size`  - sets the size of the font for an element  

    font-size: medium | xx-small | x-small | small | 
              large | x-large | xx-large | smaller | 
              larger | length;

`larger` and `smaller` specifies larger or smaller font size than parent element.

**_BEST PRACTICE:_** use `rem` units.

---
`font-family` - sets the font family for an element.  

The following sets font to `FAMILY_NAME` and `GENERIC_NAME` is a fallback font that the browser will **"degrade"** to if the first font isn't available:

    font-family: family-name, generic-name;

  * family names are case-sensitive and need to be wrapped in quotes if there is a space in the name, such as `"Open Sans"`
  * generic font family names are CSS keywords and thus are not case-sensitive and do not require quotes.  Generic font families available in all browsers include: `serif`, `sans-serif`, `monospace`, `cursive` and `fantasy`.
  * any number of fonts names may be listed - all but the first are the `fallback fonts`.
  * a non-standard, custom web font can be imported using a link at the top of the document before the font is called in the style block. The following will import the lobster font:

    ```
    <link href="https://fonts.googleapis.com/css?family=Lobster" rel="stylesheet" type="text/css">
    ```

---
`width` - sets the width of an element, such as an image.  

    width: auto | length;

***BEST PRACTICE:*** use `em` or `percentage` (occasionally `px`)

---
`background-color` - sets the background color of the element

  background-color: color | transparent;

colors can be:
1. named colors (`aqua`)
2. hex colors (`#00FFFF` or `0FF`)
3. RG and RGBa colors: (`rgb(0, 255, 255)` and `rgba(0, 255, 255, .5)`)
4. HSL and HSLa colors: (`hsl(180, 100%, 50%)` and `hsla(180, 100%, 50%, .5)`)
---
### BORDERS
---

`border-color` - sets the color of the border

    border-color: color | transparent;
---
`border-width` - sets the width of the border.

    border-width: medium | thin | thick |
    length;

width can be set with a `px` value or with `thin`, `medium` or `thick` 

---
`border-style` - sets the style of the border

It accepts one to four values for top, right, bottom, and left style.

    border-style: none | hidden | dotted | dashed | 
    solid | double | groove | ridge | inset | outset;
---
`border-radius` - adds rounded corners to an element

It accepts one to four values for top-left, top-right, bottom-right, bottom-left corners.

    border-radius: 1-4 length | % / 1-4 length | %;

can be defined using `px` or using a percentage, such as `50%` (which makes a circle)  

---
`border` is a shorthand property that combines the `border-width`, `border-style`, and `border-color` properties

    /* style */
    border: solid;

    /* width | style */
    border: 2px dotted;

    /* style | color */
    border: outset #f33;

    /* width | style | color */
    border: medium dashed green;

---

### LISTS
---
`list-style-image` - defines an image marker (bullet points) for items in a list.

    list-style-image: none (default) | url

image may be specified with url or image path

---
`list-style-position` - specifies marker position for a list

    list-style-position: inside | outside (default)

---
`list-style-type` - defines the type of marker for a list

    list-style-type: value;

**UNORDERED LIST VALUES:** `disc` (default), `circle`, `none`, `square`

**ORDERED LIST VALUES:** `decimal`, `decimal-leading-zero`, `lower-alpha`, `lower-roman`, `none`, `upper-alpha`, `upper-roman`;

---
`list-style` is a shorthand property 

it combines `list-style-type`, `list-style-position`, and, optionally, `list-style-image`

    list-style: list-style-type list-style-position list-style-image (optional)

    /* type */
    list-style: square;

    /* image */
    list-style: url("../img/shape.png");

    /* position */
    list-style: inside;

    /* type | position */
    list-style: georgian inside;

    /* type | image | position */
    list-style: lower-roman url("../img/shape.png") outside;

    /* Keyword value */
    list-style: none;

---
### PADDING
---
There are three properties that control the space surrounding an HTML element:
* **Padding** controls the amount of space between the elements content and its border
* **Border** is the edge of the html element
* **Margin** controls the amount between the border and surrounding elements
    * setting the margin to a negative value makes the element grow larger  
    * setting `margin: auto;` will center a block element horizontally.
      * this method works for images too.  They're inline elements by default but can be changed to block elements using `display: block;`

These three properties can have different values for all sides: `padding-top`, `padding-right`, `padding-bottom`, and `padding-left`.  Same for margin (and border)
* padding (and margin and border) notation has various shorthands:

**Shorthand**
*four values* - clockwise starting at top
`padding: 10px, 5px, 15px, 20px;`
  * top padding is 10px
  * right padding is 5px
  * bottom padding is 15px
  * left padding is 20px

*three values* - top, sides, bottom
`padding: 10px, 5px, 15px;`
  * top padding is 10px
  * right & left padding is 5px
  * bottom padding is 15px

*two values* - top/bottom, sides
`padding: 10px, 5px;`
  * top & bottom padding is 10px
  * right & left padding is 5px

*one value* - all sides
`padding: 10px;`
  * all four paddings are 10px

---
### INHERITANCE / OVERRIDE
---
Sometimes HTML elements will receive multiple styles that conflict with one another.  There is a heirarchy of which declarations will take precedence over each other.

**inheritance** controls what happens when no value is specified for a property on an element

```
<style>
  body {
    color: green;
  }
  .pink-text {
    color: pink;
  }
  .blue-text {
    color: blue;
  }
  #orange-text {
      color: orange;
  }
</style>
<body>
  <h1>Green Text!</h1>
  <h2 class="pink-text">Pink Text!</h2>
  <h3 class="blue-text pink-text">Blue Text!</h3>
  <h4 id="orange-text" class="pink-text blue-text">Orange Text!</h4>
  <h5 style="color: white;" id="orange-text" class="pink-text blue-text">White Text!</h5>
</body>
```

The results of the above code:
* `<h1>` inherits `color` trait of body resulting in green text
* `<h2>` inherits `color` trait of body but `color` is overridden with the class call to `pink-text` resulting in pink text.
* `<h3>` inherits `color` trait of body but `color` is overridden with the class call to `blue-text` AND `pink-text`.  
    * The order of the class call in the h3 element doesn't matter, however the declarations in the `<style>` section does.  Since `.blue-text` is declared second, it overrides the attributes of `.pink-text` resulting in blue text.
* `<h4>` inherits `color` trait of body, but then is overridden with class calls to `blue-text` and `pink-text` which is then overriden with an id call to `orange-text` resulting in orange text.
* `<h5>` has an inline style declaration that overrides any properties assigned in the CSS above resulting in white text.

**One more way to override CSS**  
`!important` can be used to make sure an element has specific CSS: `color: red !important;`

### COLORS
#### HEX CODES
A hex code is another method of representing colors in CSS
* **hexadecimal digit** is a base 16 number, meaning it uses sixteen distinct symbols to represent a value.  0-9 represent the values zero to nine and A,B,C,D,E,F represent the values ten to fiften.  Altogether, 0 to F can represent a digit in hexadecimal giving us 16 total possible values.
    * the digit `0` is lowest number in hex code and represents a complete absence of color
    * the digit `F` is the highest number and represents maximum possible brightness
* a **hex code** uses 6 hexadecimal digits to represent colors, two for the red component (R), two for the green component (G) and two for the blue component (B) such as  `color: #000000;`
* hex code can be abbreviated to three hexadecimal digits instead of 6.  `#FF0000` is equal to `#F00`

### RGB VALUES
Another method of representing colors: RGB values can be used the specify the brightness of each color with a number between 0 and 255  

`color: rgb(255, 165, 0)` is equal to orange

### RGBA VALUES
Yet another method of setting color:

    rgba stands for:
      r = red
      g = green
      b = blue
      a = alpha/level of opacity 

`background-color: rgba(45, 45, 45, 0.1)` produces a dark gray color that is nearly transparent givent the low opacity value of 0.1

### HUE, SATURATION, LIGHTNESS
`hsl()` function is another method to pick a color by setting `hue` or color, `saturation` or amount of gray in a color and `lightness` or amount of white or black in a color.

red = `hsl(0, 100%, 50%)`

### GRADIENTS
**Linear Gradient**  
accessed through the `background` property's `linear-gradient()` function.
the syntax:  

`background: linear-gradient(gradient_direction, color 1, color 2, color 3, ...);`  

`gradient_direction` specifies the direction from which color transition starts.  `90deg` makes a horizontal gradient from left to right and `45deg` makes a diagonal gradient from bottom left to top right

**Repeating Linear Gradient**
`repeating-linear-gradient` is similar to `linear-gradient` with one major difference that it repeats the gradient pattern.


### CSS VARIABLES
CSS Variables are a way to change many CSS style properties at once by changing only one value.

* to create a CSS variable you need to give it a name with two hyphens in front of it `--penguin-skin: gray;`

* then call that variable by assigning it to over values: `background: var(--penguin-skin);`  

CSS Variables are often defined in the `:root` element to allow the variable to be accessible globally.
* `:root` is a _pseudo-class_ selector that matches the root element in the document, usually the `html` element
* variables created in `:root` will set the value of that variable for the entire page.  They can be overridden byt setting them again within a specific selector.

A **FALLBACK VALUE** can be assigned in the instance the variable isn't found: 
* `background: var(--penguin-skin, black);`  

Browser compatibility can be improved with **BROWSER FALLBACKS**.
* some browsers (IE) don't support CSS variables so we can create a fallback by defining a property twice.  This way if a CSS variable isn't supported, a default value will still be applied:
```
<style>
    :root {
        --red-color: red;
    }
    .red-box {
        background: red;
        background: var(--red-color);
    }
</style>
```

### APPLIED VISUAL DESIGN

#### TEXT  

**Text Align**
The `text-align` property has several options:
* `text-align: justify;` - spaces the text so each line has equal width
* `text-align: center;` - centers the text
* `text-align: right;` - right-aligns the text
* `text-align: left` - (default) left-aligns the text

**Element Height and Width**  

use the `width` property with a relative length unit (such as `em`), an absolute length (`px`) or a percentage (`%`).  `width: 200px;`  

use the `height` property similarly to `width` property.  `height: 20px;`

**Text styling using HTML elements**  

a `<strong>` tag can be wrapped around text to apply the CSS style `font-weight: bold;` to the element  

a `<u>` tag can be wrapped around text to apply the CSS style `text-decoration: underline;` to the element  **NOTE:** avoid using `u` tags when it could be confused for a link as anchor tags also have a default underlined formatting.  

a `<em>` tag is used to emphasize text and applies the CSS style `font-style: italic;` to the element

a `<s>` tag is used to strike through text and applies the CSS style `text-decoration: line-through;` to the element

an `<hr>` tag is used to add a horizontal line across the width of its containing element.  It is a SELF-CLOSING TAB

**text transform**
the `text-transform` property in CSS is a conenient way to make sure text appears consistently.  It has several different values:
* `lowercase` - "transform me"
* `uppercase` - "TRANSFORM ME"
* `capitalize` - "Transform Me"
* `initial` - Use the default value
* `inherit` - use the `text-transform` value from the parent element
* `none` - **Default:** use the original text

**font size**
`font-size` CSS property sets the size of the text for a given element, which could be helpful for setting the sizes of all the h1-h6 elements for example.

**Font Weight**  
`font-weight` CSS property that sets how thick or thin characters are

**Line Height**
`line-height` CSS property sets the height of each line in a block of text.

#### VISUAL ELEMENTS
**Box Shadow**
`box-shadow` property applies one or more shaddows to an element and has the following values, in order:
1. `offset-x` - how far to push shadow horizontally from element (+ is right)
2. `offset-y` - how far to push shadow vertically from element (+ is down)
3. `blur-radius` - optional
4. `spread-radius` - optional
5. `color`  
`box-shadow: 0 10px 20px rgba(0,0,0,0.19), 0 6px 6px rgba(0,0,0,0.23);` creates a pair of shadows with slight blur

**Opacity**
Use the CSS property `opacity` to adjust the opacity / transparency of an item  

    A value of 1 is opaque, which isn't transparent at all.
    A value of 0.5 is half see-through.
    A value of 0 is completely transparent.

**Background Image**
`background` property supports the `url()` function in order to link to an image.
`background: url("https://cdn-media-1.freecodecamp.org/imgr/MJAkxbh.png");`

**CSS Transform**
`transform` property has a variety of functions that let you scale, move, rotate, skew, etc. your elements:

* `transform: scale(2);` will double the size of elements
* `transform: skewX(24deg);` skews the element along its X axis by a given degree
* `transform: skewY(-10deg)` skews the element along the Y axis by -10 degrees

`transform` properties can be combined with `:hover` to transform elements when a user hovers over them


#### PSEUDO-CLASSES
a **pseudo-class** is a keyword that can be added to selectors in order to select a specific state 

the styling of an anchor tag can be changed for its hover state using `:hover` pseudo-class selector.  

    a:hover {
      color: red;
    }

**pseudo-elements**
* `::before` creates a pseudo-element that is the first child of the selected element
* `::after` creates a pseudo-element that is the last child of the selected element.

for these elements to work the must have a defined `content` property.  This property is usually used to add things like a photo or text to the selected element.  In some cases it can just be set to an empty string.

    .heart::before {
      content: "";
      background-color: yellow;
      border-radius: 25%;
      position: absolute;
      height: 50px;
      width: 70px;
      top: -50px;
      left: 5px;
    }


#### POSITIONING
CSS treats each HTML element as its own box which is usually referred to as the _CSS Box Model_.
* block-level items (h1, p, div) start on a new line
* inline items sit withing surround content (img, span)

Default layout of elements in this way is called _normal flow_ of a document but can be overridden with CSS property `position`.

`position: relative` allows you to specifiy how CSS should move it _relative_ to it's current position in the normal flow of the page.  Pairs with **offset** properties: `left` or `right` and `top` or `bottom` which say how many pixels/percentages/or ems to move the item ***away*** from where it is normally positioned.

    p {
      position: relative;
      botton: 10px;
    }

**NOTE:** changing an elements position to relative does not remove it from the normal flow.  Other items around it still behave as if that item were in its default position.


`position: absolute` locks the element in place relative to its parent container.  Unlike `relative`, this removes the element from the normal flow of the document so surrounding elements ignore it.  **offset** properties are used to adjust the position.

**NOTE** absolute positioning will lock an element relative to its closest _positioned_ ancestor.  If no parent item has a position rule (typically done with `position: relative;`), the browser will keep looking up the chain and ultimately default to the `body` tag.

`position: fixed;` is a type of absolute positioning that locks an element relative to the browser window.  Just like absolute, it uses offset properties and removes the element from the normal flow of the document.

**NOTE** a key difference between absolute and fixed is that an item with fixed position will not move when the user scrolls

`position: sticky;` - TBD

**Z Index**
by default, the element coming later in HTML markup will appear on top of the other elements.

the `z-index` property can specify the order of stacking by assigning a `z-index` value (an integer).  The higher the value, the higher in the stack that element is.

**FLOAT PROPERTY**
An alternative to position, the `float` property removes an element from the normal flow and pushes it either to the `left` or the `right` of it's containing parent element.  It is commonly used with `width` property to specify how much horizontal space the floated element requires

---

### KEYFRAMES AND ANIMATION

---
animation properties control how an animation should behave and `@keyframes` rule controls what happens during that animation

There are eight animation properties in total:
* `animation-name` sets the name of the animation, which is later used by
* `@keyframes` to tell CSS which rules go with which animation
* `animation-duration` sets the length of time for the animation
* `animation-fill-mode` specifies the style applied to an element when the animation has finished
* `animation-iteration-count` controls how many times to loop through the animation.  
  * A value of `infinite` can be used for a continuous loop.
* `animation-timing-function` controls how quickly an animated element changes over the duration of the animation.  (like a car accelerates and decelerates).  Several values:
  * `ease` - **Default** starts slow, speeds up in middle, slows down at end
  * `ease-out` - quick in the beginning, then slows down
  * `ease-in` - slow in the beginning, then speeds up at end
  * `linear` - consistent speed throughout

**keyframes**
`@keyframes` is how to specify exactly what happens within the animation over the duration.  We do this by giving CSS properties for specific "frames" during the animation with percentages from 0% - 100%.  If this were a movie, the CSS properties at 0% is how the element displays in the opening scene and 100% is how it appears at the end right before the credits roll.  

    #anim {
      animation-name: colorful;
      animation-duration: 3s;
    }

    @keyframes colorful {
      0% {
        background-color: blue;
      }
      100% {
        background-color: yellow;
      }
    }

the above code sets the `animation-name` and `animation-duration`.  Then `@keyframes` sets the color to blue at the beginning of the animation (`0%`) and yellow at the end (`100%`).  

**NOTE:** you aren't limited to just the beginning and the end frames.  You can set properties for any percentage between 0 and 100.

**CSS Animation for Hover State**

    <style>
      img {
        width: 30px;
      }
      img:hover {
        animation-name: width;
        animation-duration: 500ms;
      }

      @keyframes width {
        100% {
          width: 40px;
        }
      }
    </style>

    <img src="https://cdn.freecodecamp.org/curriculum/applied-visual-design/google-logo.png" alt="Google's Logo" />

**CSS Animation for creating movement**
when elements have specified `position` such as `fixed` or `relative`, the offset properties `left`, `right`, `top`, and `bottom` can be used in animation rules to create movement

    @keyframes rainbow {
      0% {
        background-color: blue;
        top: 0px;
      }
      50% {
        background-color: green;
        top: 50px;
      }
      100% {
        background-color: yellow;
        top: 0px;
      }
    }

**Bezier Curves**
`cubic-bezier` function provides even finer control over how the animation plays out.  The shape of the curve represents how the animation plays out.  It is a curve that lies on a 1 by 1 coordinate system where X-axis is the animation-duration (the time scale) and the Y-axis is the change in the animation.

the `cubic-bezier` function consists of four main points that sit on this 1 by 1 grid: `p0`, `p1`, `p2`, and `p3`

`p0` and `p3` are set for you, they are the beginning and end points always located at (0,0) and (1,1).

`p1` and `p2` are set by you using the form: `(x1, y1, x2, y2)`

    animation-timing-function: cubic-bezier(0.25, 0.25, 0.75, 0.75); //a representation of linear
    animation-timing-function: cubic-bezier(0, 0, 0.58, 1); //mimics ease-out style

**NOTE** the x value must be a value between 0 and 1.  The Y value may exceed 1.

## CSS SYNTAX
properties can be combined in a single line.  For example, defining the absolute size of an image:  
`img { height: 250px; width: 250px; }`