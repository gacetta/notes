# HTML
---
## Create an HTML Document
---
`<!DOCTYPE html>` at the top of a document.  The default document is saved as `index.html`

---
## HTML Elements - 
---
All require a closing tab unless otherwise indicated:

---
### HTML

* `<html>` - HTML tag that contains all your HTML code.  
---

* `<h1>` -Header tag.  6 different levels of headers with different sizes:
    * `<h2>`
    * `<h3>`
    * `<h4>`
    * `<h5>`
    * `<h6>`
* `<p>` - Paragraph tag.  Creates a text block on a new line
* ` <!--       -->` is the syntax for commenting in html
* `<main>` - The main content of your page
* `<header>` - The header / introductory content of a page
* `<footer>` - The footer content of a page
* `<nav>` - A section of a page whose purpose is to provide navigation links, either within the page or from page to page
* `<video>` - embeds a media player which supports video playback
* `<article>` - an element used to specify independent, self-contained content.
    * for example: forum post, blog post, news story
* `<section>` - an element that represents a generic standalone section of a document which doesn't have a more specific semantic element to represent it.
    * sections should always have a heading with very few exceptions
* `<img>` - adds an image to a page. **NO CLOSING TAG REQUIRED**
    * use the `src=""` attribute to link to an image.
    * requires `alt=""` attribute to improve accessibility
* `<a>` - anchor element to link to content outside of your page.
    * `href=""` attribute is used to provide link address in the quotes.  link text is provided between nested tags
        * `href="#id-name"` can also point to a location on the current page using an id `#id-name`
        * `href='#'` creates a dead link for times when you want to add an `<a>` element before you know where it will link.
* `<u1>` - element for an unordered list
* `<ol>` - element for an ordered list
    * `<li>` - list element for either ordered or unordered list
* `<input>` - element that allows you to get input from your user **NO CLOSING TAG REQUIRED**
    * can take `type=""` attribute to define what type of input.  Defaults to "text".  There are many types:
        * `text` - default value.  A text field
        * `radio` - a radio button.  Allows user to only give one answer to multiple options
            * all radio button options can be nested between `<label>` elements
                * best practice to set a `for=""` attribute for label elements with a value that matches the value of the `id` attribute of the `input` element
        * `checkbox` - a checkbox.  has a `checked` attribute `<input type="checkbox" checked>`

        **INPUTS OF TYPE `radio` and `checkbox` REPORT THEIR VALUES FROM THE VALUE ATTRIBUTE**  
        
        In the following code, there are two `radio` inputs.  When the form is submitted with the `indoor` option selected, the form data will include the line: `indoor-outdoor=indoor`.  

        If the `value` attribute is omitted and the form is submitted with `indoor` option selected, the form data will include the line: `indoor-outdoor=on` which is not helpful

        ```
        <label for="indoor">
        <input id="indoor" value="indoor" type="radio" name="indoor-outdoor">Indoor
        </label>
        <label for="outdoor">
        <input id="outdoor" value="outdoor" type="radio" name="indoor-outdoor">Outdoor
        </label>
        ```

    * can take `placeholder=""` attribute to add placeholder text to the empty input field
    * can take `required` attribute to make the input from a certain field required
    * can take the `name=""` attribute for clarity and allow for grouping / reference
* `<form>` - an element that creates a documnent section containing controls to submit information
    * can take `action=""` attribute to tell the form where to submite data
* `<button>` - creates a button.  There are many types:
    * can take `type=""` argument to specify what type of button.  There are three types:
        * `type="submit"` - button sends form data to the server.  Default value
        * `type="reset"` - resets all controls to their initial value
        * `type="button"` - no default behavior and does nothing when pressed by default.
* `<div>` - the division element is a general purpose container for other elements.
* `<head>` - an element that contains any information about your page.  Metadata elements typically reside in `<head>`:
    * `<link>` - specifies relationships between the current document and an eternal resource.  Most commonly used to link to stylesheets
    * `<meta>` - represents metadata that cannot be represented by other HTML elements
    * `<title>` - defines the documents title that is shown in the browser's title bar.  Contains only text - tags within this element are ignored
    * `<style>` - contains style information, or CSS, for a document.
* `<body>` - the element that contains the content of the page

---
## TEXT ALTERNATIVE TO IMAGES FOR VISUALLY IMPAIRED ACCESSIBILITY
---
`alt` attribute in an `img` tag provides a text description of the image content.  This is helpful when the image fails to load, for visually impaired users and to help search engines.

    <img src="importantLogo.jpeg" alt="Company Logo">

`alt` attributes are considered mandatory / best practice **EXCEPT** for images that are grouped with a caption that describes them, OR for images that are decoration only (such as a page break)

## HEADINGS

Headings help convey the hierarchical relationships of content  

Headings with equal (or higher) rank start new implied sections, headings with lower rank start subsections of the previous one.

**NOTE** each page should always have only one `h1` element.  This is the main subject of your content and is used in part by search engines to understand the topic of the page.

---
## TAGS WITH SEMANTIC MEANING
---
There are several tags that are similar to `div` yet give additional meaning to your markup and incorporate accessibility features.  They are: `main`, `header`, `footer`, `nav`, `article`, `section`, among others
### Main
* The `main` element is used to wrap the main content of the page and there should be only one per page.  It should not include items that repeat across pages, like nav links or banners.  

    It also has an embedded landmark feature that assistive technology can use to navigate to the main content quickly.

### Article
* The `article` element is used to wrap independent, self-contained content, such as blog entries, forum posts or news articles.  

    How to know if you should use `article`?  Ask yourself if you removed all surrounding context, would that content still make sense? Similarly, for text, would the content hold up if it were in an RSS feed?

### Section
* The `section` element is used for grouping thematically related content.  `article` and `section` can be used within each other as needed.  For example, if a book is the `article`, then each chapter is a `section`.  If there is no relationship between groups of content, use `div`

### Header
* The `header` element is used to wrap introductory info or nav links for its parent tag.  It works well around content that's repeated at the top of multiple pages.  

    Like `main`, the `header` tag has an embedded landmark feature used to quickly navitage to that content.

    **NOTE:** `header` is meant for use in the `body` tag.  Not to be confused with `head`

### Nav
* The `nav` element is meant to wrap around the main nav links on the page.  It has an embedded landmark feature like `header` and `main`

    **NOTE:** if there are repeated site links at the bottom of the page, `nav` tags aren't neccessary.  Using a `footer` tag is sufficient

### Footer
* The `footer` element is used to contain copyright info or links to related documents that normally sit at the bottom of the page.  It has a built-in landmark feature as well.

### Audio
* `audio` is use to wrap around a pages audio stream content.  
    
    `controls` attribute  shows the browsers default play, pause and other controls.  It is a boolean value, thus its presence in a tag turns the setting on.

        <audio controls></audio>

    *BEST PRACTICE* There should always be a text alternative to the audio, in the form of nearby text or a link to the transcript.

### Figure
* The `figure` element is used to wrap a visual representation like an image, diagram or chart.  `figcaption` is nexted inside the `figure` tags to provide a text description of the figure.

    ```
    <figure>
        <img src="roundhouseDestruction.jpeg" alt="Photo of Camper Cat executing a roundhouse kick">
        <br>
        <figcaption>
            Master Camper Cat demonstrates proper form of a roundhouse kick.
        </figcaption>
    </figure>
    ```

`<div>` - groups content  
`<section>` - groups related content  
`<article>` - groups independent, self-contained content  
`<main>` - main content of page.  has landmark  
`<header>` - intro and nav links.  has landmark  
`<nav>` - navigation links.  has landmark  
`<footer>` - copyright info / links at bottom of page.  has landmark  
`<audio>` - groups audio stream content.  has `controls` attribute.  
`<figure>` - wraps diagrams, charts, figures. nest `<figcaption>` inside to provide text description 

## ELEMENTS FOR FORM FIELD ACCESSIBILITY

### Label Element
* The `<label>` element wraps the text for a specific form control item, usually name or label for a choice.  Has a `for` attribute that associates that `<label>` with the form control and is used by screen readers.

    **NOTE:** The value of the `for` attribute must be the same as the value of the `id` attribute of the form control.  

    ```
    <form>
    <label for="name">Name:</label>
    <input type="text" id="name" name="name">
    </form>
    ```

### Fieldset Element
* The `<fieldset>` tag surrounds a grouping of radio buttons to semantically show the choices are part of a set.  Nest the associated `<legend>` tag inside of `<fieldset>` to provide a description for the grouping.

    **NOTE:** `fieldset` and `legend` are not necessary when choices are self explanitory like gender selection.  Using `label` with `for` attribute is sufficient.

    ```
    <form>
    <fieldset>
        <legend>Choose one of these three items:</legend>
        <input id="one" type="radio" name="items" value="one">
        <label for="one">Choice One</label><br>
        <input id="two" type="radio" name="items" value="two">
        <label for="two">Choice Two</label><br>
        <input id="three" type="radio" name="items" value="three">
        <label for="three">Choice Three</label>
    </fieldset>
    </form>
    ```

### Accessible Date Picker
* An `<input>` field `type` attribute value, `date` tells the browser to show a date picker in the `input` field when in focus.

    **NOTE:** Will default to `text` in older browsers without `date` support

    ```
    <label for="input1">Enter a date:</label>
    <input type="date" id="input1" name="input1">
    ```
### Time Element
* The `<time>` element is an inline element used to wrap a date or time on a page.  It's attribute, `datetime`, holds the valid formate of that date.  This value can be accessed by assistive devices.

    ```
    <p>Master Camper Cat officiated the cage match between Goro and Scorpion <time datetime="2013-02-13">last Wednesday</time>, which ended in a draw.</p>
    ```

## VISUAL CLARITY
### Hiding Content Meant only for screen readers using CSS

```
.sr-only {
  position: absolute;
  left: -10000px;
  width: 1px;
  height: 1px;
  top: auto;
  overflow: hidden;
}
```

**NOTE:** the following CSS approaches will not do the same thing:
* `display: none;` or `visibility: hidden;` hides content for everyone, including screen reader users
* Zero values for pixel sizes, such as `width: 0px; height: 0px;` removes that element from the flow of your document, meaning screen readers will ignore it

### Text Readability - High Contrast Text & Colorblindness
* Color alone should never be used as the only way to convey important information since screen reader users won't see it.

* _Web Content Accessibility Guidelines (WCAG)_ recommends a 4.5 to 1 contrast ratio for normal text (calculated using lightness values of foreground and background colors).  This recommendation applies to both color use and gray-scale combos.  

* Colorblind users have trouble destinguishing some colors from others, usually in hue but sometimes in lightness as well.

    Most common form is reduced sensitivity to detect greens.  So a foreground and background of green might not be recognizable for a colorblind user.

## LINKS
### Give Links Meaning
Screen readers can provide a user with the links available on a page.  They do this by reading the link text between the `<a>` tags.  Use brief but descriptive text for links, rather than "click here" or "read more"

### Make site keyboard-only friendly
* The `accesskey` attribute specifies a shortbut key to activate or bring focus to an element.  This is helpful to keyboard-only users.  

    `accesskey` can be used on any element, but it's most useful on interactive elements such as links, buttons and form 
    controls.

    ```
    <button accesskey="b">Important Button</button>
    ```

* The `tabindex` attribute has three distinct functions relating to an element's keyboard focus.  The value (integer that's positive, negative or zero) determines the behavior  

    `tabindex="-1"` means the element is not reachable via keyboard navigation
 
    `tabindex="0"` means element should be focusable in sequential keyboard navigation, but only after an positive `tabindex` value

    `tabindex="3"` means element should be focusable in sequential keyboard navigation, with its order defined by the value of the number.  Low numbers are focused first, high numbers last, THEN zero.

    **NOTE:** if multiple elements share the same positive `tabindex`, their orderrelative to each other follows their position in the document source

    **NOTE:** the maximum value for `tabindex` is 32767

    **NOTE:** by assigning `tabindex` values, the default order of top to bottom is overwritten.  

---
### Tables
---
`<table>` element represents tabular data - that is, info presented in a two-dimensional table comprised of rows and columns of cells containing data

Flow Content:

1. (optional) `<caption>` element
2. zero or more `<colgroup>` elements
3. (optional) `<thead>` element
4. either one of the following:
    - zero or more `<tbody>` elements
    - one or more `<tr>` elements
5. an optional `<tfoot>` element

---
`<caption>` element (optional) specifies the caption (or title) of a table.

It should always be the first child of `<table>` though it may be positioned using `caption-side` CSS property.

**NOTE:** a `background-color` on the table will not include the caption.  Add a `background-color` to the `<caption>` element as well if you want the same color to be behind both.

---
`<thead>` element defines a set of rows defining the head of the columns of the table

---
`<tbody>` element encapsulates a set of table rows (`<tr>` elements) indicating that they comprise the body of the table.

---
`<tr>` element is used to indicate a table row.

---
`<td>` element indicates a data cell

---
`<th>` element indicates a header cell

---
### meta tag name="viewport"
---
`<meta name="viewport" content="width=device-width, initial-scale=1.0">` tells the browser that the website should be rendered with a width of the device.

if we don't specify this, the browser will zoom out to the largest possible version of the page.

---
## Superscript Element
---
`<sup>` gives us superscript like squared or exponents

## Html Entities

An HTML entitiy is a piece of text `string` that begins with ampersand and ends with semicolon.  They're used to display reserved characters which would otherwise be interpolated as HTML code or invisible characters.

copyright symbol (©) is `&copy;`
ampersand (&) is `&amp;`
less than (<) is `&lt;`
greater than (>) is `&gt;`
quote (") is ``&quot;`
non breaking space `&nbsp;`
apostrophe (') `&apos;`
registered trademark (®) `&reg;`
