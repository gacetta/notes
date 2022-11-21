# svg icons

## svg icon vs icon-font icons
- using icons is just a hack to display icons as an image
- icon fonts fail often and in that case, the browser displays a black box
- screen readers don't support icon font

`svg` - Scalable Vector Graphics
https://icomoon.io/ - good resource for svg icons

symbol-defs.svg - an icon sprite file that contains all downloaded icons.  rename sprite.svg
to access individual iconts we use the `xlink:href` attribute.
`<sprite-path>#<icon-name>`
## to use
    <svg>
      <use xlink:href="img/sprite.svg#icon-magnifying-glass"></use>
    </svg>

## to format svg icons
  .icon {
    height: 2rem;
    width: 2rem;
    fill: var(--color-white); // fill property sets the icon color
  }

  `fill:` used to change svg icon color.  Can set it with a color OR with `currentColor` which allows the color to be inherited from the parent.