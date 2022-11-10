## Background Image
---
`background-image: url()` - set the background image by specifying the url path

`background-size: cover` - sets the background image to scale to the smallest possible size to fill the container (both its height and width completely **cover** the container) leaving no empty space.  If the proportions of the background differ from the element, the image is cropped either vertically or horizontally

`background-position: top` - sets the background image to lock to the top edge of the container

`clip-path: polygon()` specify which part of the image will be shown.  `polygon(x1 y1, x2 y2, x3 y3, x4 y4)` accepts pairs of x y coordinates to "draw" a polygon.

_RESOURCE:_ Clippy which makes a clip-path easily: https://bennettfeely.com/clippy/

---
### Easy way to center something

`position: absolute` needs to reference something for positioning.  That reference is the parent element that has its position set to `relative`

`<span /><span />` to stack two span elements, set each to `display: block`

`letter-spacing: 35px` - sets the spacing between text characters

`transform: translate(-50%, -50%)` shift the element to the left 50% the length of the element and to the top 50% the length of the element

---
### CSS Animations

#### Keyframes Animation Setup

`@keyframes animation-name-id {
  0% {
    // properties at start time
  }

  50% {
    // properties at 50% time
  }

  100% {
    // properties at end
  }
}

In a browser, it's best to animate for two properties: `opacity` and `transform`.  That is what they are optimized for.

#### Calling Keyframes Animation

.heading {
  animation-name: keyframes-id;
  animation-duration: 5s;
}

Other properties:

`animation-delay: 3s;` time to wait before animation begins
`animation-iteration-count: 3;` number of iterations of animation
`animation-timing-function: ease-out` tells CSS how the animation should progress over the duration of each cycle.  `ease`, `ease-in`, `ease-out`, `ease-in-out`, `linear`, `step-start`, `step-end`, `cubic-bezier(0.1, 0.7, 1.0, 0.1)`, `frames(10)`, `steps(4, end)`, 

Can be combined in shorthand property:
`animation: animation-name animation-duration animation-timing-function animation-delay`

#### Animation Wiggle Fix

The animation wiggles a little bit and travels very slightly upwards at completion.  Nobody really knows why but there is a fix:

`backside-visibility: hidden;`

---
### Animated Button

`.btn:link {}` special state of a selector when it is an anchor element 

`transition: all .2s` is a shorthand property for `transition` that provides a way to control animation speeds.

**NOTE:** `transition` must be declared on the initial state

`animation-fill-mode: backwards` - applies the styles at 0% in the keyframes before the start

---
## Three Pillars of Writing Good HTML and CSS
---
1. Responsive Design
2. Maintainable and Scalable Code
3. Web Performance

Responsive design:
* fluid layouts
* media queries
* responsive images
* correct units
* desktop-first vs mobile-first

Maintainable and Scalable Code:
(more for the developer than the user)
* clean
* easy to understand
* growth
* reusable
* How to organize files
* How to name classes
* How to structure HTML

Web Performance:
* Less HTTP requests
* less code
* compress code
* use a CSS preprocessor
* less images
* compress images

---
## How CSS Works Behind The Scenes
---
What happens to CSS when we load up a webpage?

Load HTML ->  Parse HTML -------------------------> Document Object Model (DOM) --|
                  |             Parse CSS                                         |
                  v       ----------------------                                  |
              Load CSS -> | Resolve conflicting |----> CSS Object Model (CSSOM)---|
                          | CSS declarations    |                                 |
                          | (cascade)           |                                 |
                          | --------------------|                                 |
                          | Process final CSS   |                                 |
                          |   values            |                                 |
                          -----------------------                                 |
                                                                                  |
Final rendered <-----  Website rendering:    <-------------- Render Tree <---------
   website          the visual formatting mode

---
## How CSS is Parsed
---
### The Cascade (The 'C' in CSS)
---
Cascade - Process of combining different stylesheets and resolving conflicts between different CSS rules and declarations, when more than one rule applies to a certain element.

Source of declarations:
- Author: e.g. the styles.css sheet for the site
- User: e.g. when a user changes the font size in the browser
- Broswer (user agent): e.g. if an <a> element isn't styled, the browser will style it with it's default (blue text, purple when visited)

Importance (Weight) > Specificity > Source Order

Order of importance:
1. User `!important` declarations
2. Author `!important` declarations
3. Author declarations
4. User declarations
5. Default browser declarations

Often there are many conflicting declarations in the Author declarations, AKA all of the same importance.

Order of Specificity
1. Inline styles
2. IDs
3. Classes, pseudo-classes, attribute
4. Elements, pseudo-elements

specificity is actually 4 numbers, one for each element of specificity listed above.

Take the following example:
// We want to determine the background-color.  
//All elements are of the same importance

    .button {
      font-size: 20px;
      color: white;              (inline, id, classes, elements)
      background-color: blue;   // (0,     0,     1,     0)
    }

    nav#nav div.pull-right .button {
      background-color: green;  //  (0, 1, 2, 2)
    }

    a {
      background-color: purple; // (0, 0, 0, 1)
    }

    #nav a.button:hover {
      background-color: yellow; // (0, 1, 2, 1)
    }

How are these read?
From left to right, whatever has the highest value, is the most specific.
If multiple elements share the same specificity, move to the right one digit, Repeat
1. (0, 0, 1, 0)
2. (0, 1, 2, 2)
3. (0, 0, 0, 1)
4. (0, 1, 2, 1)

1. First digit = 0 for all.  Move to the right
2. Second digit = 1 for #2 and #4.  #1 and #3 are out.  Move to the right.
3. Third digit = 2 for #2 and #4.  Move to the right.
4. Fourth digit = 2 for #2.  #4 is out and #2 is most specific.  The button is green.  This value is called the _cascaded value_.

Source Order:
The last declaration in the code will override all other declarations and will be applied.

Summary:
- CSS declarations marked with `!important` have the highest priority
- But, only use `!important` as a last resource.  It's better to use correct specificites - **more maintainable code.**
- Inline styles will always have priority over styles in external stylesheets;
- A selector that contains 1 ID is more specific than one with 1000 classes
- A selector that contains 1 class is more specific than one with 1000 elements
- The universal selector `*` has no specificity value (0, 0, 0, 0)
- Rely more on specificity than on the order of selectors;
- But, rely on order when using 3rd-party stylesheets - always put your author stylesheet last.

---
### How CSS values are processed
---

    <div class="section">
      <p class="amazing">CSS is absolutely amazing</p>
    </div>

    .section {
      font-size: 1.5rem'
      width: 280px;
      background-color: orangered;
    }

    p {
      width: 140px;
      background-color: green;
    }

    .amazing {
      width: 66%;
    }

Lets determine the width (paragraph):
1. Declared value (author declarations): 140px & 66%.  66% is more specific
2. Cascaded value (after the cascade): 66%
3. Specified value (defaulting, if there is no cascaded value): 66%
4. Computer value (converting relative values to absolute): 66% (a percentage value is technically not a unit)
5. Used value (final calculations, based on layout): 184.8px (66% is based on it's parent element which has a width of 280px)
6. Actual value (browser and device restrictions): 185px

How about padding (paragraph)? (ignoring inheritance)
1. no value
2. no value
3. 0px (initial value) - different properties have different initial value.
4. 0px
5. 0px
6. 0px

What about font-size (root)?
1. no value
2. 16px (browser default which is a result of the cascade process).
3. 16px
4. 16px
5. 16px
6. 16px

What about font-size (section)?
1. 1.5rem
2. 1.5rem
3. 1.5rem
4. 24px (always relative to the root font-size, thus 1.5 * 16px = 24px)
5. 24px
6. 24px

What about font-size(paragraph)?
1. no value
2. no value
3. 24px (inheritance - takes the font-size value from the parent element)
4. 24px
5. 24px
6. 24px

---
### How units are converted from relative to absolute (px)
---
`%`(fonts): `x% * parent-computed-font-size`
`%`(lengths): `x% * parent-computed-WIDTH`
`em`(font): `x * parent-computed-font-size`
`em`(lengths): `x * current-element-computed-font-size`
`rem`(font & lengths): `x * root-computed-font-size`
`vh` - 1% of the viewport height: `x * 1% of viewport height`
`vw` - 1% of the viewport width: `x * 1% of viewport width`

---
## Inheritance in CSS
---
    .parent {
      font-size: 20px;
      line-height: 150%;
    }

    .child {
      font-size: 25px;
    }

Every CSS property must have a value:
1. Is there a cascade value?  If Yes -----> Specified value = cascaded value
2. If no, is the property inherited (specific to each property)? If yes -----> specified value = computed value of parent element.  THIS IS INHERITANCE!
3. If no, specified value = initial value (specific to each property)

Rule of thumb: properties related to text are inherited.
Other properties like padding, margins are not inherited.

`inherit` keyword forces inheritance on a certain property.

`initial` keyword resets a property to its initial value.

---
### REM
---
REMs do not apply to IE

We can make the conversion from `px` to `rem` easier by setting:

    html {
      font-size: 10px;  //default is 16px
    }

This way, 1rem = 10px, 2rem = 20px, 1.5rem = 15px

However, setting the font-size to a `px` value is bad practice as it overrides a browser text-size option.  If a user wants bigger text and tells the browser that, this will over ride that preference.

INSTEAD, set `font-size:` to a percentage value.  That way it can still scale with the user preference from the browser

Divide what you want by what you're given: 10px / 16px = 62.5%

    html {
      font-size: 62.5%;
    }

---
## CSS VISUAL FORMATTING MODEL
---
An algorithm that calculates boxes and determines the layout of these boxes, for each element in the render tree, in order to determine the final layout of the page.

### The Box Model
- content: text, images, etc.
- padding: transparent area around the content, inside of the box;
- border: goes around the padding and the content
- margin: space between boxes;
- fill area: area that gets filled with background color or background image.  Includes content, padding and border, but not the margin.

---
### Box Type
---
Types:

1. `block-level` boxes (DEFAULT for p)
  - Elements formatted visually as blocks
  - 100% of parent's width
  - vertically, one after another
  - _box-model applies as showed_

      display: block
      (display: flex)
      (display: list-item)
      (display: table)

2. `inline` boxes
  - Content is distributed in lines
  - _occupies only content's space_
  - _no line-breaks_
  - no heights and widths
  - paddings and margins only horizontal (left and right)

    display: inline

3. `inline-block` boxes
  - a mix of block and inline
  - _occupies only content's space_
  - _no line-breaks_
  - _box-model applies as shown_

    display: inline-block

---
### Positioning Schemes
---

`Normal flow`
- default positioning scheme
- NOT floated
- NOT absolutely positioned
- Elements laid out according to their source order

  -Default value-
  position: relative

`Floats`
- Element is removed from the normal flow
- Text and inline elements will wrap around the floated element
- The container will not adjust its height to the element

  float: left
  float: right

`Absolute positioning`
- Element is removed from the normal flow
- No impact on surrounding content or elements
- We use `top`, `bottom`, `left` and `right` to offset the element from its relatively positioned container.

  position: absolute
  position: fixed

  ---
  ### Stacking Contexts
  ---
  Like layers 
  most common approach is `z-index`.  The lower the number, the lower the layer (or further back the layer).

  There are other properties that affect the layer, though.