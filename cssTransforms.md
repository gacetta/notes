## skew
---
`transform: skew()` - defines a transformation that skews an element on the 2D plane.  Its result is a `<transform-function>` data type.

The `skew()` function is specified with either one or two values, which represent the amount of skewing to be applied in each direction. If you only specify one value it is used for the x-axis and there will be no skewing on the y-axis.

    skew(ax) . //an <angle> representing the angle to use to distort the element along the x-axis

    skew(ax, ay) . //ay is an <angle> representing the angle to use to distort the element along the y-axis (or ordinate). If not defined, its default value is 0, resulting in a purely horizontal skewing.

---
`transform: scaleX()` defines a transformation that resizes an element along the x-axis (horizontally).  Its result is a `<transform-function>` data type.

`scaleX(-1)` inverts the element on the x-axis.