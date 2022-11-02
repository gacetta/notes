# Linking between pages in HTML

Each different webpage is a different html file.  When no .html file is specified, the browser defaults to `index.html`

For example: 

http://www.website.com is shorthand for http://www.website.com/index.html

## Use an anchor tag with a link to the new page
An anchor tag with an `href` attribute is a good way to create a link

## relative urls
rather than full link address, use `/index.html` or `/edit.html`

All html pages must be in the same folder on your computer.

## Location variable

like `document`, `location` provides us with much helpful information.

one variable on `location` is `assign`.  We can use this variable to redirect our page.

  location.assign('/new-site.html')

## Hash variable

Another variable on `location`, is `hash`.  This is part of the url that doesn't affect the loading of a site.

  `http://www.website.com/edit.html#thisInfoInHash`

if we were to call `location.hash` // thisInfoInHash

This can be a convenient way to store information (such as UUIDs)