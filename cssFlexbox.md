# CSS FLEXBOX

## DISPLAY PROPERTY
_flex container property_

The CSS property `display` specifies the display behavior of an element. There are many options, including:

* `display: block;` The element generates a block element box, generating line breaks both before and after the element when in the normal flow.  (**DEFAULT VALUE**)
* `display: flex` positions in as a flex container.  Applying this style is known as _flexbox_.
* `display: inline` The element generates one or more inline element boxes that do not generate line breaks before or after themselves. In normal flow, the next element will be on the same line if there is space.
* `display: grid` The element behaves like a block element and lays out its content according to the grid model.
* `display: table` These elements behave like HTML <table> elements. It defines a block-level box.
* `display: none` Turns off the display of an element so that it has no effect on layout.  Document is rendered as if the element (and all descendants) did not exist. **NOTE:** To have an element take up the space that it would normally take, but without actually rendering anything, use the `visibility` property instead.

## FLEX-DIRECTION PROPERTY
_flex container property_

The CSS property `flex-direction` specifies the display direction for a flexbox and has four values: 
* `row` (default) - horizontal main axis
* `column` - veritcal main axis
* `row-reverse` - horizontal main axis (reversed)
* `column-reverse` - vertical main axis (reversed)

## JUSTIFY-CONTENT
_flex container property_

The CSS property `justify-content` specifies how to align and space out flex items along the _main-axis_.  There are several possible values:

* `center` - aligns all the flex items to the center inside the flex container.
* `flex-start` - aligns items to the start of the flex container (**DEFAULT VALUE**) 
* `flex-end` - aligns items to the end of the flex container.
* `space-between` - aligns items to the center of the main axis, with extra space placed between the items.  First and last items are pushed to the very edge of the flex container.
* `space-around` - aligns items to the center of the main axis, with extra space distributed around all the items with a half space on either end of the flex container.
* `space-evenly` - distributes space evenly between the flex items with a full space at either end of the flex container.

## ALIGN-ITEMS
_flex container property_

The CSS property `align-items` specifies how to align and space items along the _cross axis_.  There are several possible values:

* `flex-start` - aligns items to the start of the flex container.  Items are only as large as their content.
* `flex-end` - aligns items to the end of the flex container.  Items are only as large as their content.
* `center` - aligns items to the center. Items are only as large as their content.
* `stretch` - stretch the items to fill the flex container.  Items are uniform in size.(**DEFAULT VALUE**)
* `baseline` - align items to their baselines.  A text concept, this property aligns the baseline of the first line of text for each element.  

## ALIGN-CONTENT
_flex container property_

The CSS property `align-content` determines the spacing between lines (while `align-items` determines the how the items as a whole are aligned within a container).  There are several values:

* `flex-start` - lines are packed at the start of the container
* `flex-end` - lines are packed at the end of the container
* `center` - lines are packed at the center of the container
* `space-between` - lines display with equal spacing between them
* `space-around` - lines display with equal spacing around them
* `stretch` - lines are stretched to fit the container (**DEFAULT VALUE**)

**NOTE:** if there is only one line, `align-content` has no effect.

## FLEX-WRAP
_flex container property_

By default, a flex container will fit all flex items together.  However there is a feature to split a flex container into multiple rows (or columns).

The CSS property `flex-wrap` tells CSS how to wrap items into a new row or column.  The break point of where the wrapping happens depends on the size of the items and the size of the container.  There are several possible values:

* `nowrap` - do not wrap items (**DEFAULT**)
* `wrap` - wraps items onto multiple lines from top-to-bottom if they are in rows and left-to-right if they're in columns
* `wrap-reverse` - wraps items onto multiple lines from bottom-to-top if they're in rows, and right-to-left if they're in columns.

## FLEX-FLOW
_flex container property_

`flex-direction` and `flex-wrap` are used so often together that the shorthand property `flex-flow` was created to combine them.  It accepts the value of the two properties separated by a space:

For example, `flex-flow: row wrap;` will set rows and wrap them

## FLEX-SHRINK
_flex item property_

The CSS property `flex-shrink` allows an item to shrink if the flex container is too small.  Items will shrink when the width of the parent container is smaller than the combined widths of all the flex items within it.

`flex-shrink` takes numbers as values.  The higher the number, the more it will shrink compared to the other items in the container.

For example, if one item has a `flex-shrink: 1;`  and the other has `flex-shrink: 3;`, the one with the value of `3` will shrink three times as much as the other.

## FLEX-GROW
_flex item property_

The CSS property `flex-grow` is the opposite of `flex-shrink`.  It controls the size of items when the parent container expands.

`flex-grow` takes numbers as values.  The higher the number, the more it will grow compared to the other items in the container.

For example, if one item has a `flex-grow: 1;`  and the other has `flex-grow: 3;`, the one with the value of `3` will grow three times as much as the other.

## FLEX-BASIS
_flex item property_

The CSS property `flex-basis` specifies the initial size of an item before CSS makes adjustments with `flex-shrink` or `flex-grow`

The units used by `flex-basis` are the same as other size properties (`px`, `em`, `%`, etc.).  The value `auto` sizes items based on the content.

## FLEX SHORTHAND
_flex item property_

`flex-grow`, `flex-shrink` and `flex-basis` properties can all be set together using the CSS property `flex`

For example:  
`flex: 1 0 10px` will set the item to
* `flex-grow: 1;`
* `flex-shrink: 0;`
* `flex-basis: 10px;`

    /* Keyword values */
    flex: auto;
    flex: initial;
    flex: none;

    /* One value, unitless number: flex-grow
    flex-basis is then equal to 0. */
    flex: 2;

    /* One value, width/height: flex-basis */
    flex: 10em;
    flex: 30%;
    flex: min-content;

    /* Two values: flex-grow | flex-basis */
    flex: 1 30px;

    /* Two values: flex-grow | flex-shrink */
    flex: 2 2;

    /* Three values: flex-grow | flex-shrink | flex-basis */
    flex: 2 2 10%;

The default property settings are: `flex: 0 1 auto`

## ORDER
_flex item property_

The CSS property `order` is used to tell CSS the order of how flex items appear in the flex container.  By default, items will appear in the same order they declared in the source HTML.  

The `order` property takes numbers as values, and negative numbers can be used.  The lower the value, the earlier that item will appear.

(**DEFAULT VALUE**) is `0`.

## ALIGN-SELF
_flex item property_

The CSS property `align-self` allows you to adjust each item's alignment individually along the _cross axis_.

**NOTE:** this is useful since `float`, `clear`, and `vertical-align` do not work on flex items. 

`align-self` aceepts the same values as `align-items` and will override any value set by the `align-items` property.

(**DEFAULT VALUE**) - `auto`

---
## JONAS FLEXBOX
---
Spacing 4 items to item1/item2/space/item3/item4 you can use `margin-right: auto;` on item2.

If you apply auto margins to a flex item, that item will automatically extend its specified margin to occupy the extra space in the flex container, depending on the direction in which the auto-margin is applied.

Setting the `margin` property on a flex child will push the child away from that direction. Set `margin-left` to `auto`, the child will push right. Set `margin-top` to `auto` and the child will push to the bottom.

---
## adding svg icons as list decoration in CSS
---
use icon.svg instead of sprite.svg

list-style: none;

.list-item::before {
  content='';
  display: inline-block;
  height: 2rem;
  width: 2rem;
  background-image: url(svg-icon-path/icon.svg);
  background-size: cover;
}

### using masks
.list-item::before {
  content='';
  display: inline-block;
  height: 2rem;
  width: 2rem;

  background-color: var(--color-primary);
  -webkit-mask-image: url(svg-icon-path/icon.svg);
  -webkit-mask-size: cover;
}

---
## Border inside vs border outside
---

`box-sizing: border-box` - border is included on element sizing (border inside);
`box-sizing: content-box` - border is added to element sizing (border outside);
