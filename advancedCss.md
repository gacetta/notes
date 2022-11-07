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