# HTML/CSS

block vs inline:
BLOCK
- force line break
- take full width of parent by default
- <div> is canonical block
- <p>, <h1>, <ul>, <section>

INLINE
- allow other elements to sit on left/right
- cannot set width and height
- <span> is canonical block
- <strong>, <a>

## semantic HTML
- semantic - relating to meaning in language or logic
- HTML should connotate the meaning of the page components
- tags are used by browser (to build / render page) and search engines (find / index pages).
examples: <article>, <section>, <header>, <footer>, <nav>, <cite>, <blockquote>, <strong> (<b> renders the same, but not semantic), <em> (<i> renders the same, but not semantic), <mark>, <h1>, <ol>, <ul>, <li>

benefits:
- Search engine optimization
- increased accessibility

## CSS

specificity: is defined by a combo of 4 numbers

!important, id, class, elements
    0,       0,     0,        0

0, 0, 0, 1
p {
  font-size: 20rem;
}

0, 0, 1, 0
.colorful {
  color: purple
}

## Responsive Design
- modern development is for multiple browsers and devices
- some different rules for different screen sizes, focus on DRY CSS
- mobile-first means devloping fully featured mobile friendly sites and ONLY THEN expanding to tablet/desktop

How to vary display:
- Avoid sizing in terms of pixels, prefer proportion based sizing (percentages, em, rem, etc.)
- CSS properties like min-width and max-width
- CSS tools like flexbox and CSS grid
- CSS libraries like Bootstrap
- @media queries

## media queries
```
@media screen and (max-width: 600px) {
  .selector {
    // rules
  }
}
```

- why screen?  cause there are other types of medias like printer.
- this rule applies to any screen up to 600px wide

ADVANCED:
```
@media screen and (min-width: 768px) and (max-width: 1024px) and (orientation: landscape) {
  .selector {
    // rules
  }
}
```
- this works for tablet device
- we can chain multiple conditions with `and`
- width isn't the only property to consider

## flexbox basics

- parent is set `display: flex`
- child elements follow rules set on parent
- can be made highly adaptive to viewport size

## CSS preprocessor - SASS
- `CSS preprocessor` is a language that extends CSS, adds features to CSS and gets compiled into regular CSS

- variables begin with `$`
```
$font-size: 16px;

div {
  font-size: $font-size;
}
```

- sass color functions

## Secure Design
- The more complex the website is, the more likely they are to accidentally skip or incorrectly follow security protocols.  Should be intuitive and simple to navigate for all users.
- Make it clear what data is required and where it will be used.
- A secure UI helps control access to your site.  Limit data access so that only registered users can view and share
- adjust settings so administrators and users can select who can share content
- use end-to-end encryption to build trust.
- don't allow emails as usernames
- require strong passwords
