# Responsive Web Design
---
## MEDIA QUERY
---
A **media query** consists of a _media type_ and/or a _media feature_:
A **media type** defines the broad category of device for which the media query applies.  Only three types: `all` (default except when using `not` or `only`), `print`, and `screen`

**media features** (more common) describe a specific characteristc that, when true, executes specified media query: 
`any-hover`, `any-pointer`, `aspect-ratio`, `color`, `color-gamut`, `color-index`, `display-mode`, `dynamic-range`, `forced-colors`, `grid`, `height`, `hover`, `inverted-colors`, `max-width`, `min-width`, `max-height`, `min-height`, `monochrome`, `orientation`, `overflow-block`, `overflow-inline`, `pointer`, `prefers-color-scheme`, `prefers-contrast`, `prefers-reduced-motion`, `resolution`, `scripting`, `update`, `video-dynamic-range`, `width`.

**NOTE:** _A media query_ requires either a _media type_ or a _media feature_, though both can be combined using **logical operators** such as `not`, `and`, and `only`.

---
## TARGETING MEDIA TYPES
---
Media types describe the general category of the given device.  Most commonly websites are designed with screens in mind, but you can also target devices such as printers or audio-based screenreaders.  _Very general_

Here's a media query that targets printers:  
`@media print {...}`  

**Targeting multiple devices**:  
Here's a media query that targets screen and print devices:  
`@media screen, print {...}`  

---
## TARGETING MEDIA FEATURES
---
Most commonly, media queries are used to target specific characterists of the given _user agent_.  For instance, you can apply specific styles to widescreen monitors, or devices that are being used in low-light conditions.

A simple media query targeting a viewport that is equal to or narrower than 900 px:  
`@media (max-width: 900px) {...}`  

**NOTE:** if you create a media query without specifying a value, the nested styles will be used as long as the feature's value is not zero.  For example, this CSS will apply to any device with a color screen:  
`@media (color) {...}`

---
## COMPLEX MEDIA QUERIES
---
Multiple conditions - use _logical operators_ (`not`, `and`, `only`).  Multiple media queries can be combined with a _comma-separated list_.

### Combining Multiple Types or Features 
`@media (min-width: 30em) and (orientation: landscape) {...}`  

The same media query but limiting styles to devices with a screen:  
`@media screen and (min-width: 30em) and (orientation: landscape) {...}`
  
### Testing for Multiple Queries
The following will apply its styles if the user's device has either a minimum height of 680px _or_ is a screen device in portait mode:  

        @media (min-height: 680px), 
            screen and (orientation: portrait) {
                ...
        }

### Media Query Not
`not` keyword inverts the meaning of the entire media query and will ONLY negate the specific media query it is applied to. (thus it will not apply to every media query in a comma-separated list of media queries.)

The `not` keyword can't be used to negate an individual feature query, only an entire media query.  

The `not` is evaluated last in the following query:  
`@media not all and (monochrome) {...}`  

...so that the above query is evaluated like this:  
`@media not (all and (monochrome)) {...}`  

...rather than like this:  
`@media (not all) and (monochrome) {...}`  

Another more complex example:  
`@media not screen and (color), print and (color) {...}`  

...is evaluated like this:  
`@media (not (screen and (color))), print and (color) {...}`


---
## desktop first vs mobile first
---
desktop first then media query for smaller screen - easier way to learn
mobile first then media query for bigger screens - forces us to design for essential elements only

mobile-first pros and cons:
PROS:
- 100% optimised for the mobile experience
- Reduces websites and apps to the absolute essentials
- Results in smaller, faster, and more efficient products
- Prioritizes content over aesthetic design, which may be desirable

CONS:
- The desktop version might feel overly empty and simplistic
- More difficult and counterintuitive to develop
- Less creative freedom, making it more difficult to create distinctive products
- Clients are used to see a desktop version of a site as a prototype
- Do your users even use the mobile internet?  What's the purpose of your website?

**no matter what you do, always keep both desktop and mobile in mind**

---
## media queries
---
`max-width` = "maximum width at which media query still applies"
`min-width` = "minimum width at which media query starts to apply"

media queries only at the end since code order matters

---
## selecting breakpoinst
---
BAD - using screenwidth of apple devices.  DON"T USE SPECIFIC DEVICES

GOOD - group similar devices into categories
https://gs.statcounter.com/screen-resolution-stats#monthly-202110-202210-bar

PERFECT - put your breakpoints wherever your design starts to look wrong and out of place (don't think about devices)

---
## Responsive Images using HTML
---
The goal of responsive images is to serve the right image to the right screen size and device, in order to avoid downloading unneccesary large images on smaller screens

3 use cases of responsive images:
1. resolution switching - decrease image resolution on small screen
2. density switching - half the image resolution on a @1x screen
3. art direction - different image on a smaller screen

---
### Density switching
---
for an img element, use `srcset=""` instead of `src=""` to declare the image path

`<img srcset="img/logo-1x.png 1x, img/logo-2x.png 2x">` where the `1x` and `2x` refer to the screen density.  This allows the browser to choose which image to use based on device screen density resolution

---
### art direction
---
similar to a media query, we can select which image to render based on a user-provided conditional.
To do so we need to use `<picture>` tag as a container and `<source>` tag with `media` attribute (like a media query)

        <picture class="footer__logo">
            <source srcset="img/logo-small-1x.png 1x, img/logo-small-2x.png 2x" media="(max-width: 37.5rem)">
            <img srcset="img/logo-1x.png 1x, img/logo-2x.png 2x" alt="Full logo">
        </picture>

**Note:** we always need to include an <img> in our <picture> parent.

---
### switching using image width and sizes attribute
---
instaed of specifying density `1x` or `2x`, we can specify image width:  `srcset="img/face.png 300w, img/face-large.png 1000w"` 

This isn't enough for the browser to know which image to choose.  We use the `sizes` attribute to inform the browser of the approximate width of the image at different viewport widths.

<img srcset="img/face.png 300w, img/face-large.png 1000w"
    sizes="(max-width: 900px) 20vw, (max-width:600px) 30vw, 300px"     // final default value if none of the conditions apply
    alt="photo 1"
    class="face_pic"
    src="img/face-large.png">           // should always include `src` in case `srcset` isn't supported by browser

---
## responsive images using CSS
---
use @media to target resolution (instead of min-width).  

backgroundimage: image-small.jpg

@media (min-resolution: 1920dpi) and (min-width: 600px) {
    background-image: image-large.jpg
}

---
## identify touch devices
---
max-width isn't the best way to check if we're on a mobile device or desktop (ipad pro landscape for example)...

We can use the (hover: ) condition in the query.

@media only screen and (max-width: 56%),
only screen and (hover: none) {} . // opposite is hover: hover