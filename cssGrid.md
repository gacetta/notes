# CSS Grid

## DISPLAY: GRID
The CSS property `display: grid` turns any HTML element into a grid container.

**NOTE:** the parent element is referred to as the _container_ and the children are called _items_

---
## COLUMNS AND ROWS
_grid container property_

### GRID-TEMPLATE-COLUMNS
_grid container property_
The CSS property `grid-template-columns` will define the column structure of the grid.

The following creates two columns 50px wide:

    `grid-template-columns: 50px 50px`

### GRID-TEMPLATE-ROWS
Likewise, the CSS property `grid-template-rows` will define the row structure of the grid.

The number of parameters given to the `grid-template-columns` (and `grid-template-rows`) indicates the number of columns (and rows) in the grid, and the value of each parameter indicates the width of each column (and row).

**NOTE:** number (and size) of columns will be set automatically if no `grid-template-rows` property is defined and vice versa.

### GRID-TEMPLATE
The CSS shorthand property `grid-template` combines `grid-template-rows` and `grid-template-columns` into one.

The syntax:  

`grid-template: grid-template-rows / grid-template-columns`

The following would create 5 columns and 5 rows equally spaced:

    grid-template: 20% 20% 20% 20% 20% / 20% 20% 20% 20% 20%;

---

## CSS GRID UNITS
_grid container property_

Absolute and relative units such as `px` or `em` can be used to define column and row size.  There are a few other units available in CSS grid:

* `fr` - fractional - sets the column or row to a fraction of the available space
* `auto` - sets the column or row to the width or height of its content automatically
* `%` - adjusts the column or row to the percent width of its container.  Doesn't take into account the gap.

---

## COLUMN AND ROW GAP
_grid container properties_

The CSS property `grid-column-gap` will add a gap between the columns.  The CSS property `grid-row-gap` will add a gap between the rows.  Both properties require a numerical value and a unit.

    `grid-columnn-gap: 10px`

These two properties can be combined into a shorthand property: `grid-gap`.  

* If `grid-gap` has one value it will create a gap between all rows and columns.
* If there are two values, it will use the first one to set the gap between the rows and the second value for the columns.

`grid-gap: 10px 20px;`

---

## GRID COLUMNS
_grid item property_

The hypothetical horizontal and veritcal lines that create the grid are referred to as _lines_.  They're numbered starting with 1 at the top left corner of the grid and move right for columns and down for rows, counting upwards.

This is the numbering convention for a 3x3 grid:
```
  1 1__2__3__4
  2 |__|__|__|
  3 |__|__|__|
  4 |__|__|__|
  ```

### GRID-COLUMN-START

The CSS property `grid-column-start` specifies a grid item's start position within the grid column by contributing a line, a span, or nothing (automatic) to its grid placement. This start position defines the block-start edge of the grid area.

**span** creates a desired column width

**NOTE:** `span` only works with positive values

### GRID-COLUMN-END
The CSS property `grid-column-end` specifies a grid item's end position within the grid column by contributing a line, a span, or nothing (automatic) to its grid placement, thereby specifying the block-end edge of its grid area.

### GRID-COLUMN
The CSS shorthand property `grid-column` combines `grid-column-start` and `grid-column-end`. 

`grid-column` specifies the number of columns an item will consume.  You specify the line number you want the item to start and stop at, For example:

    `grid-column: 1 / 3;`  

The above code will make the item start at the first vertical line of the grid on the left and span to the 3rd line of the grid, consuming two columns.

**span** can also be used and acheive the same result:

    `grid-column: 1 / span 2;`

---

## GRID ROWS
_grid item property_

### GRID-ROW-START

The CSS property `grid-row-start` specifies a grid item's start position within the grid row by contributing a line, a span, or nothing (automatic) to its grid placement. This start position defines the block-start edge of the grid area.

**span** creates a desired row height

**NOTE:** `span` only works with positive values

### GRID-ROW-END
The CSS property `grid-row-end` specifies a grid item's end position within the grid row by contributing a line, a span, or nothing (automatic) to its grid placement, thereby specifying the block-end edge of its grid area.

### GRID-ROW
The CSS shorthand property `grid-row` combines `grid-row-start` and `grid-row-end`. 

`grid-row` specifies the number of columns an item will consume.  You specify the line number you want the item to start and stop at, For example:   

    `grid-row: 1 / 3;`  

The above code will make the item start at the first horizontal line of the grid at the top and span to the 3rd line of the grid, consuming two rows.

**span** can also be used and acheive the same result:

    `grid-row: 1 / span 2;`

---
## HORIZONTAL AND VERTICAL ALIGNMENT
---
In CSS grid, the content of each item is located in a box which is referrred to as a _cell_.

### HORIZONTALLY: JUSTIFY-SELF
_grid item property_  

The CSS property `justify-self` is used to align the content's position within its cell horizontally.  

### VERTICALLY: ALIGN-SELF
_grid item property_  

Likewise, the CSS property `align-self` is used to align the content's position within its cell vertically. 

### ALIGN ALL ITEMS HORIZONTALLY: JUSTIFY-ITEMS
_grid container property_

If `justify-self` is used to adjust the horizontal alignment of a single item, then the CSS property `justify-items` adjusts the horizontal alignment of all items in the CSS grid. 

### ALIGN ALL ITEMS VERTICALLY: ALIGN-ITEMS
_grid container property_

If `align-self` is used to adjust the vertical alignment of a single item, then the CSS property `align-items` adjusts the vertical alignment of all items in the CSS grid. 

### ACCEPTED VALUES
There are several accepted values for `justify` and `align` properties:

* `stretch` - **DEFAULT** content fills the whole width of the cell.
* `start` - aligns the content at the left of the cell
* `center` - aligns the content in the center of the cell
* `end` - aligns the content at the right of the cell

---
## DIVIDING THE GRID - AREA TEMPLATE
_grid container property_

It is possible to group cells of the grid together into an _area_ and give that area a custom name using the CSS property `grid-template-areas`.

For example: 
```
grid-template-areas:
    "header header header"
    "advert content content"
    "advert footer footer";
```
The above code groups the cells of the grid into four areas: `header`, `advert`, `content`, and `footer`.  Every word represents a cell and every pair of quotation marks represents a row.

---

## GRID-AREA
_grid item property_

### WITH AREAS TEMPLATE
After creating an area template for the grid container, its possible to place an item in the custom area by referencing the name it was given using the CSS property `grid-area`

```
.item1 {
    grid-area: header;
}
```

The above code lets the grid know that the `item1` class should go in the area named `header`.

### WITHOUT AREAS TEMPLATE
The CSS property `grid-area` can be used without `grid-template-areas`.  

If the CSS grid doesn't have an areas template to reference, you can create an area on the fly for an item to be placed like this:  

    `item {grid-area: 1/1/2/4};`

The code above uses the line numbers and represents these values:  

    `grid-area: grid-row-start / grid-column-start / grid-row-end / grid-column-end:`

So the item in this example will consume the rows between lines 1 and 2 and the columns between lines 1 and 4.

---
## HANDLING MULTIPLE ITEMS

You can easily overlap multiple items without any trouble in a CSS grid.  The overlapping order can be adjusted.

### ORDER

If grid items aren't explicitly placed, they are automatically placed according to their order in the source code.  This order can be overridden using the `order` property.  Items are sorted low to high.

    `order: -1`

**NOTE:** by default all grid items have an order of 0, but this can be set to any positive or negative value, similar to `z-index`.

---
## REPEAT FUNCTION
_grid container property_

Using `grid-template-row` to define 100 rows of the same width individual would take too much time and code.

The `repeat` function can be used to specify the number of times you want your row (or column)) to be repeated, followed by a comma and the value you want to repeat.

Here's an example that would create a 100 row grid, each row at 50px tall.

    `grid-template-rows: repeat(100, 50px);`

You can also repeat multiple values with the repeat function and insert the function amongst other values when defining a grid structure:

    `grid-template-columns: repeat(2, 1fr 50px) 20px;`

which translates to:

    `grid-template-columns: 1fr 50px 1fr 50px 20px;`

---
## MINMAX FUNCTION

The `minmax` function is a built-in function for use with `grid-template-columns` and `grid-template-rows`.

`minmax` is used to limit the size of items when the grid container changes size.  To do so, an acceptable size range for the item must be specified:

    `grid-template-columns: 100px minmax(50px, 200px);`

The code above will create two columns, the first is 100px wide, the second has a min width of 50px and a max width of 200px.

---
## AUTO-FILL

The `repeat` function comes with an option called _auto-fill_ which allows you to automatically insert as many rows or columns of your desired size as possible depending on the size of the container.

When combined with `minmax`, it's possible to create flexible layouts.

    `repeat(auto-fill, minmax(60px, 1fr));`

With the above code, when the container changes size, this setup keeps inserting 60px columns and stretching them until it can insert another one.

**NOTE:** if your container can't fit all your items on one row, it will move them down to a new one.

---
## AUTO-FIT

`auto-fit` works almost identically to `auto-fill`

The only difference is that when the container's size exceeds the size of all the items combined, `auto-fill` keeps inserting empty rows or columns and pushes your items to the side, while `auto-fit` collapses those empty rows or columns and stretches your items to fit the size of the container.

     `repeat(auto-fit, minmax(60px, 1fr));`

With the above code, when the container changes size, this set up will 

---
## MEDIA QUERIES WITH CSS GRID

Media queries can be used to rearrange grid areas, change dimensions of a gridw, and rearrange placement of items when the screen size changes.

---
## GRIDS WITHIN GRIDS

Turning an element into a grid only affects the behavior of its direct descendants.  So by turning a direct descendant into a grid, you have a grid within a grid.

---

`grid-auto-flow:` - controls how the auto-placement algorithm works, specifying exactly how auto-placed items get flowed into the grid.

        /* Keyword values */
        grid-auto-flow: row;
        grid-auto-flow: column;
        grid-auto-flow: dense;
        grid-auto-flow: row dense;
        grid-auto-flow: column dense;

`dense` packing algorithm attempts to fill in holes earlier in the grid, if smaller items come up later. This may cause items to appear out-of-order, when doing so would fill in holes left by larger items.

If it is omitted, a "sparse" algorithm is used, where the placement algorithm only ever moves "forward" in the grid when placing items, never backtracking to fill holes. This ensures that all of the auto-placed items appear "in order", even if this leaves holes that could have been filled by later items.

---
`grid-auto-columns:` property specifies the size of an implicitly-created grid column track or pattern of tracks.

        /* Keyword values */
        grid-auto-columns: min-content;
        grid-auto-columns: max-content;
        grid-auto-columns: auto;

        // non negative lengths
        grid-auto-columns: 100px;
        grid-auto-columns: 10%;
        grid-auto-columns: 3fr;
        grid-auto-columns: minmax(100px, auto);
        grid-auto-columns: fit-content(400px);

`place-items` - shorthand property that allows you to set both `align-items` and `justify-items` at the same time when using a relevant layout system like `grid` or `flexbox`

        /* Keyword values */
        place-items: center;
        place-items: normal start;

        /* Positional alignment */
        place-items: center normal;
        place-items: start legacy;
        place-items: end normal;
        place-items: self-start legacy;
        place-items: self-end normal;
        place-items: flex-start legacy;
        place-items: flex-end normal;
        place-items: left legacy;
        place-items: right normal;

        /* Baseline alignment */
        place-items: baseline normal;
        place-items: first baseline legacy;
        place-items: last baseline normal;
        place-items: stretch legacy;

---
## Naming Lines (or Tracks)
---
`grid-template-rows: [header-start] 1fr [header-end box-start] 3fr [box-end main-start] 5fr [main-end footer-start] 1fr [footer-end];`

implementing with `repeat`

`grid-template-columns: repeat(3, [col-start] 1fr [col-end]) 200px [grid-end];`

this would create conflicting line names (multiple `col-start` columns).  So CSS automatically assigns numbers resulting in:
`col-start 1` `col-end 1`
`col-start 2` `col-end 2`
`col-start 3` `col-end 3`

**NOTE:** lines can have multiple names.  in the above convention, separate names with a space

--
### Using Line Names
---
  
`grid-row: box-start / main-end;`
`grid-column: col-start 1 / col-end 1` // selects just the first column (lines 1 / 2)

---
## Naming Grid Areas - Good for 4x4 or 5x5 layouts
---
Give EACH cell a name using strings.  
The first string names the first row.  The next string names the next row.
Each cell name is separated by a space.
Don't forget `;` at the end.

```
grid-template-areas: "head head head head"
                     "box box box side"
                     "main main main side"
                     ". foot foot .";
```
we can have empty or unnamed boxes in our grid using `.` in place of a name

**NOTE:** if there isn't a name or `.` for EVERY cell, then the grid will break.

then to position an item in a named area:
.header {
    grid-area: head;
}

---
`grid-auto-flow` styles the flow of the filling of columns.
- `row` will fill row 1 from L to R before moving to row 2
- `column` will fill column 1 Top to Bottom before moving to column 2

`row dense` and `column dense` will change the fill of cells to pack more densely.

---
## Implicit vs Explicit Grids
---
The `explicit grid` is the grid space that you create with `grid-template-rows` and `grid-template-column`

If you have more items than you have space in the grid, CSS adds more space to fit the remaining items.  This added space is known as the `implicit grid`.

To style the implicit grid, use `grid-auto-rows` and `grid-auto-columns`

**NOTE:** negative values in `grid-template-rows` and `grd-template-columns` target the last line of an explicity specified grid.  You can't target implicit lines.

---
## Aligning tracks
---
`justify-content` center | start | end | space-between | space-around | space-evenly
`align-content:` center | start | end | space-between | space-around | space-evenly

---
## Min-content, Max-content, and MinMax
---
`max-content` makes largest size possible to fit content. (And minimize line breaks)
`min-content` makes the minimum size possible to fit content (line breaks OK, not hyphenating words)

`grid-template-rows: repeat(2, minmax(150px, min-content))` - specifies the min and max value for a track (in this case height).  minimum of 150px but as high as needed to fit content

---
## note about fractional unit
---
`fr` will fill up a fractional space but will never be smaller than the `min-content` of a row or column

---
## auto fit and auto fill
---
`auto-fit` and `auto-fill` are values that can replace the number value in the `repeat()` function.

`auto-fill` FILLS the row with as many columns as it can fit. So it creates implicit columns whenever a new column can fit, because it’s trying to FILL the row with as many columns as it can. The newly added columns can and may be empty, but they will still occupy a designated space in the row.

`auto-fit` FITS the CURRENTLY AVAILABLE columns into the space by expanding them so that they take up any available space. The browser does that after FILLING that extra space with extra columns (as with auto-fill ) and then collapsing the empty ones.

`grid-template-columns: repeat(auto-fit, min-max(200px, 1fr));`

https://css-tricks.com/auto-sizing-columns-css-grid-auto-fill-vs-auto-fit/

---
## Designing with Grid
---
start big picture how many sections and how are the rows are defined
keep it responsive by using `vh` `vw` and `min-content` to define track sizes
for columns, it's helpful to have several columns so you can layout your grid on those
`grid-template-columns: 8rem repeat(8, minmax(min-content 14rem));`

Often we just define the columns, and not the rows.

LOOK UP - grid `subgrids` value