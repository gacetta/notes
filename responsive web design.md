# Responsive Web Design

## MEDIA QUERY
**Responsive web design** refers to web design that is _responsive_ to different devices, namely, different screen sizes.  Layout can be altered using **Media Queries**

A **media query** consists of a _media type_ and/or a _media feature_:
* **media type** defines the broad category of device for which the media query applies.  Only three types: `all` (default except when using `not` or `only`), `print`, and `screen`

* **media features** (more common) describe a specific characteristc that, when true, executes specified media query: `any-hover`, `any-pointer`, `aspect-ratio`, `color`, `color-gamut`, `color-index`, `display-mode`, `dynamic-range`, `forced-colors`, `grid`, `height`, `hover`, `inverted-colors`, `max-width`, `min-width`, `max-height`, `min-height`, `monochrome`, `orientation`, `overflow-block`, `overflow-inline`, `pointer`, `prefers-color-scheme`, `prefers-contrast`, `prefers-reduced-motion`, `resolution`, `scripting`, `update`, `video-dynamic-range`, `width`.

**NOTE:** _A media query_ requires either a _media type_ or a _media feature_, though both can be combined using **logical operators** such as `not`, `and`, and `only`.

## TARGETING MEDIA TYPES

Media types describe the general category of the given device.  Most commonly websites are designed with screens in mind, but you can also target devices such as printers or audio-based screenreaders.  _Very general_

Here's a media query that targets printers:  
`@media print {...}`  

**Targeting multiple devices**:  
Here's a media query that targets screen and print devices:  
`@media screen, print {...}`  

## TARGETING MEDIA FEATURES

Most commonly, media queries are used to target specific characterists of the given _user agent_.  For instance, you can apply specific styles to widescreen monitors, or devices that are being used in low-light conditions.

A simple media query targeting a viewport that is equal to or narrower than 900 px:  
`@media (max-width: 900px) {...}`  

**NOTE:** if you create a media query without specifying a value, the nested styles will be used as long as the feature's value is not zero.  For example, this CSS will apply to any device with a color screen:  
`@media (color) {...}`

## COMPLEX MEDIA QUERIES

Sometimes a media query is need that depends on multiple conditions, which is where the _logical operators_ (`not`, `and`, `only`) are used.  Furthermore, bultiple media queries can be combined with a _comma-separated list_.

**COMBINING MULTIPLE TYPES OR FEATURES**  
`@media (min-width: 30em) and (orientation: landscape) {...}`  

The same media query but limiting styles to devices with a screen:  
`@media screen and (min-width: 30em) and (orientation: landscape) {...}`

**TESTING FOR MULTIPLE QUERIES**  
The following will apply its styles if the user's device has either a minimum height of 680px _or_ is a screen device in portait mode:  
`@media (min-height: 680px), screen and (orientation: portrait) {...}`

## INVERTING A QUERY'S MEANING

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
# Remember: you still have to declare selectors inside the media query
```
@media (min-width: 680px) {
    h1 {
        color: orange;
    }
}
```