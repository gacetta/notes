# Css Animations
---
## KEYFRAMES 
---
The `@keyframes` rule controls what happens during an animation.  

(MDN) The `@keyframes` CSS at-rule controls the intermediate steps in a CSS animation sequence by defining styles for keyframes (or waypoints) along the animation sequence. This gives more control over the intermediate steps of the animation sequence than _transitions_.

`@keyframes` allows us to define an animation by assigning it a name, and assigning various properties at different stages of the animation.  

We specify the name immediately following the `@keyframes` keyword:

    @keyframes animation-name-here {

    }

We specify these stages (or waypoints) using several values:
- percentages (`0%` - `100%`)
- `from` - a starting offset of `0%`
- `to` - an ending offset of `100%`

Syntax (using `from` and `to`):

    @keyframes slideIn {
      from {
        transform: translateX(100%);
      }

      to {
        transform: translateX(0%);
      }
    }

Syntax (using percentages):

    @keyframes slideOut {
      0% {
        transform: translateY(0%);
      }

      90% {
        transform: translateY(110%);
      }

      100% {
        transform: translateY(100%)
      }
    }

---
## ANIMATION PROPERTIES
---
_animation properties_ control how an animation should behave.

There are eight animation properties in total:

1. `animation-name:` 
2. `animation-duration:`
3. `animation-delay:` 
4. `animation-fill-mode:` 
5. `animation-timing-function:` 
6. `animation-iteration-count:` 
7. `animation-direction:` 
8. `animation-play-state:` 
9. `animation:` shorthand property that can be used to combine all 8 animation properties.

---
### ANIMATION NAME
---
`animation-name` property specifies the names of one or more `@keyframe` at-rules.  Multiple `@keyframes` at-rules are specified as a comma-separated list of names.  If the specified name does not match any `@keyframe` at-rule, no properties are animated.

    animation-name: slideIn;

---
### ANIMATION-DURATION
---
`animation-duration` property sets the length of time that an animation takes to complete one cycle.

    animation-duration: .5s;

---
### ANIMATION-DELAY
---
`animation-delay` property specifies the amount of time to wait, from applying the animation to an element before beginning to perform the animation.
    
    animation-delay: 2s;

The animation can be set to start later, immediately from its beginning, or immediately and partway through the animation.

- A positive value indicates the animation should begin after the specified amount of time has elapsed
- A value of `0s` (DEFAULT) indicates that the animation should begin as soon as it's applied.
- A negative value causes the animation to begin immediately, but partway through its cycle.  For example, if the value is `-1s`, the animation will begin immediately but will start 1 second into the animation sequence.

---
### ANIMATION-ITERATION-COUNT
---
`animation-iteration-count` property sets the number of times an animation sequence should be played before stopping.  The value `infinite` will tell the animation to repeat forever.

    animation-iteration-count: infinite;

---
### ANIMATION-PLAY-STATE
---
`animation-play-state` property sets whether an animation is `running` or `paused`.

    animation-play-state: running;

---
### ANIMATION-DIRECTION
---
`animation-direction` property sets whether an animation should play forward, backward or alternate back and forth between playing the sequence forward and backwards.

    animation-direction: reverse;

Values:
* `normal` (DEFAULT) - animation plays _forwards_ each cycle.  In other words, upon completion, the animation resets to the beginning and starts over.
* `reverse` - animation plays _backwards_ each cycle.  In other words, each time the animation cycles, it resets to the end state and performs backwards.  **NOTE:** timing-functions are also reversed.  E.g. `ease-in` becomes `ease-out`.
* `alternate` - animation reverses direction each cycle, with first iteration played _forwards_.
* `alternate-reverse` - animation reverses direction each cycle, with first iteration played _backwards_
---
### ANIMATION-FILL-MODE
---
`animation-fill-mode` property sets how a CSS animation applies styles to its target before and after its execution.

Four values:
1. `none` (DEFAULT) - The animation will not apply any styles to the target when it's not executing. The element will instead be displayed using any other CSS rules applied to it.
2. `forwards` - The target will retain the computed values set by the last keyframe encountered during execution.  The last keyframe depends on the value of `animation-direction` and `animation-iteration-count`.
3. `backwards` - The animation will apply the values defined in the first relevent keyframe as soon as it is applied to the target.  It will retain these values during the `animation-delay` period.  The first relevent keyframe depends on the value of `animation-direction`.
4. `both` - animation will follow the rules for both `forwards` and `backwards` thus extending the animation properties in both directions.

    animation-fill-mode: backwards;

---
### ANIMATION-TIMING-FUNCTION
---
`animation-timing-function` - sets how quickly an animated element changes over the duration of the animation.  (like a car accelerates and decelerates).  

    animation-timing-function: ease-out;

There are several values:

* `ease` (DEFAULT) Equal to `cubic-bezier(0.25, 0.1, 0.25, 1.0)`, starts slow, speeds up in middle, slows down at end. 
* `linear` - Equal to `cubic-bezier(0.0, 0.0, 1.0, 1.0)`, animates at an even speed.
* `ease-out` - Equal to `cubic-bezier(0, 0, 0.58, 1.0)`, quick in the beginning, slows down at the end
* `ease-in` - Equal to `cubic-bezier(0.42, 0, 1.0, 1.0)`, slow in the beginning, speeds up at end
* `ease-in-out` - Equal to `cubic-bezier(0.42, 0, 0.58, 1.0)`, properties slowly transition, speeding up, and then slowing down again.

Complex Values:
* `cubic-bezier()` - custom defined cubic-bezier curve.  See below
* `steps()` - Displays an animation iteration along n stops along the transition, displaying each stop for equal lengths of time. See below
* `step-start` - Equal to `steps(1, jump-start)`
* `step-end` - Equal to `steps(1, jump-end)`

---
#### BEZIER CURVES
---
`cubic-bezier(p1, p2, p3, p4)` function provides even finer control over how the animation plays out.  The shape of the curve represents how the animation plays out.  It is a curve that lies on a 1 by 1 coordinate system where X-axis is the animation-duration (the time scale) and the Y-axis is the change in the animation.

the `cubic-bezier` function consists of four main points that sit on this 1 by 1 grid: `p0`, `p1`, `p2`, and `p3`

`p0` and `p3` are set for you, they are the beginning and end points always located at (0,0) and (1,1).

`p1` and `p2` are set by you using the form: `(x1, y1, x2, y2)`

    animation-timing-function: cubic-bezier(0.25, 0.25, 0.75, 0.75); //a representation of linear
    animation-timing-function: cubic-bezier(0, 0, 0.58, 1); //mimics ease-out style

**NOTE** the x value must be a value between 0 and 1.  The Y value may exceed 1.

---
#### STEPS
---
`steps(n, <jumpterm>)` - displays an animation iteration along `n` stops along the transition, displaying each stop for equal lengths of time.

For example, if `n = 5`, there are 5 steps.  Where the stops for the 5 steps are placed, is determined by the `<jumpterm>` parameter.  

There are several values (lets say there are 4 steps):
* `jump-start` or `start` - denotes a left-continuopus function, so that the first jump happens when the animation begins. (4 steps holds at 0%, 25%, 50%, 75%)
* `jump-end` or `end` - denotes a right-continuous function, so that the last jump happens when the animation ends.  (4 steps holds at 25%, 50%, 75%, 100%)
* `jump-none`- there is no jump on either end. Instead, holding at both the 0% mark and the 100% mark, each for 1/n of the duration.  (4 stops between 0% and 100% along the animation cycle)
*  `jump-both` Includes pauses at both the 0% and 100% marks, effectively adding a step during the animation iteration. (4 stops 0% 33.333% 66.666% 100%)



---
### ANIMATION SHORTHAND PROPERTY
---
`animation` is a shorthand property that can be used to combine all 8 animation properties.

**ORDER OF VALUES:** 
The order of time values within each animation definition is important: the first value that can be parsed as a `<time>` is assigned to the `animation-duration`, and the second one is assigned to `animation-delay`.

The order of other values within each animation definition is also important for distinguishing an `animation-name` value from other values. If a value in the `animation` shorthand can be parsed as a value for an animation property other than `animation-name`, then the value will be applied to that property first and not to `animation-name`. *For this reason, the recommended practice is to specify a value for `animation-name` as the last value in a list of values when using the `animation` shorthand*; this holds true even when you specify multiple, comma-separated animations using the `animation` shorthand.

An `animation-name` value is not required to be declared in the `animation` shorthand property. If no name exists, there is no animation to apply on any of the properties.


    /* @keyframes duration | easing-function | delay |
    iteration-count | direction | fill-mode | play-state | name */
    animation: 3s ease-in 1s 2 reverse both paused slidein;

    /* @keyframes duration | easing-function | delay | name */
    animation: 3s linear 1s slidein;

    /* two animations */
    animation: 3s linear slidein, 3s ease-out 5s slideout;

---
### Putting it all together
---

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



`transform-origin` - sets the point of origin for an element's transformations.