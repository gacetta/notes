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

  /* The syntax of the first radius allows one to four values */
  /* Radius is set for all 4 sides */
  border-radius: 10px;

  /* top-left-and-bottom-right | top-right-and-bottom-left */
  border-radius: 10px 5%;

  /* top-left | top-right-and-bottom-left | bottom-right */
  border-radius: 2px 4px 2px;

  /* top-left | top-right | bottom-right | bottom-left */
  border-radius: 1px 0 3px 4px;

  /* The syntax of the second radius allows one to four values */
  /* (first radius values) / radius */
  border-radius: 10px / 20px;

  /* (first radius values) / top-left-and-bottom-right | top-right-and-bottom-left */
  border-radius: 10px 5% / 20px 30px;

  /* (first radius values) / top-left | top-right-and-bottom-left | bottom-right */
  border-radius: 10px 5px 2em / 20px 25px 30%;

  /* (first radius values) / top-left | top-right | bottom-right | bottom-left */
  border-radius: 10px 5% / 20px 25em 30px 35em;

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
    * It's helpful to have your margins all push in the same one direction.  That means setting the top margin to 0 and adjusting the bottom margin for items.

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

**NOTE:** best to avoid `!important` as it can cause real issues with debugging

---
## COLORS
---
### HEX CODES
A hex code is another method of representing colors in CSS
* **hexadecimal digit** is a base 16 number, meaning it uses sixteen distinct symbols to represent a value.  0-9 represent the values zero to nine and A,B,C,D,E,F represent the values ten to fiften.  Altogether, 0 to F can represent a digit in hexadecimal giving us 16 total possible values.
    * the digit `0` is lowest number in hex code and represents a complete absence of color
    * the digit `F` is the highest number and represents maximum possible brightness
* a **hex code** uses 6 hexadecimal digits to represent colors, two for the red component (R), two for the green component (G) and two for the blue component (B) such as  `color: #000000;`
* hex code can be abbreviated to three hexadecimal digits instead of 6.  `#FF0000` is equal to `#F00`

---
### RGB VALUES
---
Another method of representing colors: RGB values can be used the specify the brightness of each color with a number between 0 and 255  

`color: rgb(255, 165, 0)` is equal to orange

---
### RGBA VALUES
---
Yet another method of setting color:

    rgba stands for:
      r = red
      g = green
      b = blue
      a = alpha/level of opacity 

`background-color: rgba(45, 45, 45, 0.1)` produces a dark gray color that is nearly transparent givent the low opacity value of 0.1

---
### HUE, SATURATION, LIGHTNESS (hsl)
---
`hsl()` function is another method to pick a color by setting `hue` or color, `saturation` or amount of gray in a color and `lightness` or amount of white or black in a color.

red = `hsl(0, 100%, 50%)`

---
### hsla values
---
The final method of setting color:

  hsla stands for:
    h = hue
    s = saturation
    l = lightness
    a = alpha/level of opacity

---
### GRADIENTS
---
**Linear Gradient**  
accessed through the `background` property's `linear-gradient()` function.

  `background: linear-gradient(gradient_direction, color 1, color 2, color 3, ...);`  

  `gradient_direction` specifies the direction from which color transition starts.  `90deg` makes a horizontal gradient from left to right and `45deg` makes a diagonal gradient from bottom left to top right

**NOTE:** works on `background` and `background-image` but not `background-color`

**Repeating Linear Gradient**
`repeating-linear-gradient` is similar to `linear-gradient` with one major difference that it repeats the gradient pattern.

    /* A repeating gradient tilted 45 degrees,
      starting blue and finishing red, repeating 3 times */
    repeating-linear-gradient(45deg, blue, red 33.3%);

    /* A repeating gradient going from the bottom right to the top left,
      starting blue and finishing red, repeating every 20px */
    repeating-linear-gradient(to left top, blue, red 20px);

    /* A gradient going from the bottom to top,
      starting blue, turning green after 40%,
      and finishing red. This gradient doesn't repeat because
      the last color stop defaults to 100% */
    repeating-linear-gradient(0deg, blue, green 40%, red);

    /* A gradient repeating five times, going from the left to right,
      starting red, turning green, and back to red */
    repeating-linear-gradient(to right, red 0%, green 10%, red 20%);

---
### APPLIED VISUAL DESIGN
---
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
## CSS SYNTAX
properties can be combined in a single line.  For example, defining the absolute size of an image:  
`img { height: 250px; width: 250px; }`

### Filter
`filter: blur(radius)` applies a gaussian blur to input image.

Examples: 

    blur(0)        /* No effect */
    blur(8px)      /* Blur with 8px radius */
    blur(1.17rem)  /* Blur with 1.17rem radius */

---
### Box-Shadow
---
`box-shadow` property adds shadow effects around an element's frame.  A box shadow is described by X and Y offsets relative to the element, blur and spread radius, and color.  We can set multiple effects separated by commas.

    /* Keyword values */
    box-shadow: none;

    /* offset-x | offset-y | color */
    box-shadow: 60px -16px teal;

    /* offset-x | offset-y | blur-radius | color */
    box-shadow: 10px 5px 5px black;

    /* offset-x | offset-y | blur-radius | spread-radius | color */
    box-shadow: 2px 2px 2px 1px rgba(0, 0, 0, 0.2);

    /* inset | offset-x | offset-y | color */
    box-shadow: inset 5em 1em gold;

    /* Any number of shadows, separated by commas */
    box-shadow: 3px 3px red, -1em 0 0.4em olive;

---
### Transform
---
`transform: rotate(angle)` defines a transformation that rotates an element around a fixed point on the 2D plane without deforming it.

---
### Images
---
`object-fit` property sets how the content of a replaced element such as `<img>` or `<video>` should be resized.

This can be a better choice than `width` and `height` to better maintain aspect ratio

  object-fit: contain;
  object-fit: cover;
  object-fit: fill;
  object-fit: none;
  object-fit: scale-down;

---
### Box-Sizing
---
`box-sizing` property sets how the total width and height of an element is calculated.

By default, the `width` and `height` you assign to an element is applied only to the element's content box.  If you add `border` or `padding`, that will be added to the existing content box.  This can be a problem.  

**For example**, if you have four boxes with `width: 25%`, if any has left or right padding or left or right borders, all four boxes will not fit on one line.

That default value is `box-sizing: content-box`.

By contrast, `box-sizing: border-box` will account for any border and padding values and factor those into the `width` and `height` values. 

---
## Text Properties
---
`text-transform` property specifies how to capitalize an elements text.  

  /* Keyword values */
  text-transform: none;
  text-transform: capitalize;
  text-transform: uppercase;
  text-transform: lowercase;
  text-transform: full-width;
  text-transform: full-size-kana; // for <ruby> annotation text

  ---
  ## Layout Properties
  ---
  `gap` property sets gaps (or `gutters`) between rows and columns

  It is shorthand property for `row-gap` | `column-gap`.  If one value is specified, it sets both the row and column gaps equally.

---
## Custom Properties
---
Just like declaring a variable in JS, we can declare a custom property (sometimes called a CSS variable) in CSS.

Property names that are prefixed with `--`, like `--example-name`, represent _custom properties_ that contain a value that can be used in other declarations using the `var()` function.

Custom properties are scoped to the element(s) they are declared on.  It's common to declare custom properties at the top of the CSS stylesheet in the `:root` pseudo-selector.  This allows the custom properties to be accessible on the entire page

Example:

    :root {
      --text-color: #8f9f0f;
      --background-color: #33ff22;
    }

    .container {
      color: var(--text-color);
    }

### Naming Conventions
good reference: https://codepen.io/piggyslasher/pen/vQyegv

---
## CSS Functions
---
`var()` can be used to insert the value of a custom property instead of any part of a value of another property

Example:

  // --primary-color: seafoamgreen is declared in :root 
  border-color: var(--primary-color)  // sets border to seafoamgreen

---
`calc()` is a CSS function that lets you perform calculations when specifying CSS property values.  It can be used anywhere a `<length>`, `<frequency>`, `<angle>`, `<time>`, `<percentage>`, `<number>`, or `<integer>` is allowed.

Examples:

    /* property: calc(expression) */
    width: calc(100% - 80px);

    width: calc(2em * 5);

    width: calc(var(--variable-width) + 20px)
    ---

---
## selectors of elements & classes

`span[class~="class-name"]` is a selector that will select any `span` element whose `class` includes `class-name`.  

---
`span[class]` will target any span element that has a `class` attribute set, regardless of the attribute's value

---
The key difference between `tr[class="total"]` and `tr.total` is that the first will select tr elements where the only class is total. The second will select tr elements where the class includes total.

---
## Completely hiding an element visually

Including the following properties is a common way to ensure that an element is completely hidden visually:

- `border: 0;`
- `clip: rect(1px, 1px, 1px, 1px);`
- `clip-path: inset(50%)`
- `-webkit-clip-path: inset(50%)`

The `clip` property is used to define the visible portions of an element. (_depreciated_ use `clip-path` instead)


---
- `clip-path` property creates a clipping region that sets what part of an element should be shown.  Parts that are inside the region are shown, while those outside are hidden.

    /* Keyword values */
    clip-path: none;

    /* <clip-source> values */
    clip-path: url(resources.svg#c1);

    /* <geometry-box> values */
    clip-path: margin-box;
    clip-path: border-box;
    clip-path: padding-box;
    clip-path: content-box;
    clip-path: fill-box;
    clip-path: stroke-box;
    clip-path: view-box;

    /* <basic-shape> values */
    clip-path: inset(100px 50px);
    clip-path: circle(50px at 0 100px);
    clip-path: ellipse(50px 60px at 0 10% 20%);
    clip-path: polygon(50% 0%, 100% 50%, 50% 100%, 0% 50%);
    clip-path: path(
      "M0.5,1 C0.5,1,0,0.7,0,0.3 A0.25,0.25,1,1,1,0.5,0.3 A0.25,0.25,1,1,1,1,0.3 C1,0.7,0.5,1,0.5,1 Z"
    );

    /* Box and shape values combined */
    clip-path: padding-box circle(50px at 0 100px);

---
## Outline
---
Outline property, specified like a border with `thickness style color`, is a line outside of the elements border.  Doesn't take up space so it doesn't affect the document layout. Can be styled with `outline-offset` and `border-radius`

**NOTE:** outline style defaults to `none` for most elements (except `input`) so it will be invisible if style isn't defined.  

---
### outline-offset
`outline-offset` sets amount of space between an outline and the edge or border of an element

---
## Rotating Cards Feature
---
Set transition to .8 s or something like that on the parent
Make two cards (one with ::after) have them stack on stop of each other with position absolute

Have the back card already hidden and rotated 180 deg on rotateY
Backface-visibility: hidden

On hover (or click), transform rotateY(-180deg) the front card, and rotate the back card back to 0 deg
Perspective (apply to parent): the lower it is, the more drastic the rotation transformation is

---
## button effect
create btn::after hiding behind btn.  Should be exact same size and position as btn, with z-index:-1

set transition property and position: relative on both btn and btn::after

::hover:
1. btn element - translateY(`-3px`) / alter or add box shadow (increase distance, blur, darkness)
2. ::after element - increase scale, opacity: 0

on ::active update btn properties - translateY(`-1px`) and box shadow accordingly 

---
## text gradient effect
---
think: background image that is clipped using the text path, text is transparent.
background-image: gradient
-webkit-background-clip: text
color: transparent

---
## composition effect
---
group of overlapped images.  On hover, selected image gets larger with outline, other images get smaller

create container for all images
img::hover, add outline, scale(1.1), translateY(-3px)
container:hover img:not(::hover) - scale(.9)

---
## skewed container effect
---
for parent container - skewY(-7deg)
select all direct children of that parent container and skew the opposite direction 
use child combiner (direct child selector) - `container > *` selects all direct children of skewed parent container

---
## Child Combiner (Direct Child Selector)
---
The child combinator (`>`) is placed between two CSS selectors. It matches only those elements matched by the second selector that are the direct children of elements matched by the first.

---
## circle image with text wrapping around it
---
a given element must have declared width, height values and be floated.
-webkit-shape-outside: circle(50% at 50% 50%) // for full support of property
shape-outside: circle(50% at 50% 50%) // creates a circle for text to wrap around
-webkit-clip-path: circle(50% at 50% 50%) // full support of property
clip-path: circle(50% at 50% 50%) // clips element to match the outside path

---
## filter properties
---
similar to `transform`
`filter: blur(6px) brightness(80%)`

---
### background video effect
---
html
create container for video
create video element but don't use `src` attribute
create source elements for various video types (best practice to include "Browser not supported" as final option)

reduce container opacity, set content to object-fit: cover; 

---
## solid color gradient
---
background-image: linear-gradient(105deg, rgba($white, .9) 0%, rgba($white, .9) 50%, transparent 50%)

---
## selecting input placeholder
---
input::-webkit-input-placeholder { //only works on chrome and safari
  color: gray;
} 

---
## selecting invalid state
---
input:focus:invalid {   //if type='email' and you haven't entered properly

}

---
## input placeholder slide down on entry effect
---
format label for final state
set label initial state
    input:placeholder-shown + label {
      opacity: 0;
      visibility: hidden;
      transform: translateY(-4rem);
    }

### Sibling selector
`+` Selects element that is immediately following (a sibling)

---
## Custom Styled Radio Buttons
---
we can't use css to style radio buttons

solution: create our own buttons and hide the default buttons

create the outside circle
create an inside cicrle (for when checked) using ::after

set the initial state for the inside circle to opacity: 0;

select only our custom button::after that follows the checked radio button

    button:checked ~ label button::after {   // selects the button::after element 
                                             // that is a child of the label element 
                                             // that is a sibling of btn:checked element
    opacity: 1;
    }

hide default radio button with display: none'