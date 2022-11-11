# SASS
## What is SASS
---
`SASS` is a CSS preprocessor, an extension of CSS that adds power and elegance to the basic language.

CSS files get huge, messy and unmangeable after time.  SASS can help us with our program architecture

SASS Source Code ----Sass compiler----> Compiled CSS Code

Instead of writing in CSS, we write SASS which is compiled into a css file that then can be read by the browser.
 
Functionality added by SASS:

- `Variables`: for reusable values such as colors, font-sizes, spacing, etc.
- `Nesting`: to nest selectors inside of one another, allowing us to write less code
- `Operators`: for mathematical operations right inside of Css
- `Partials and imports`: to write CSS in different files and importing them all into one single file
- `Mixins`: to write reusable pieces of CSS code
- `Functions`: similar to mixins, with the difference that they produce a value that can then be used
- `Extends`: to make different selectors inherit declarations that are common to all of them
- `Control directives`: for writing complex code using conditionals and loops

Two different syntaxes - similar but different:  
`Sass syntax` & `SCSS syntax` (also known as sassy css)

**We're using SCSS**

---
## Variables
---
Variables are named using the `$` character followed immediately by the variable name: 

     $color-primary: red;

Variables are referenced with the same syntax: 

    color: $color-primary;

---
## Nesting
---
An important part of SCSS is nesting of selectors, which provides visual clarity of the heirarchy much like `html`

In SCSS we can nest selector elements.  
Take this CSS for example:

    nav ul {
      margin: 0;
      padding: 0;
      list-style: none;
    }
    nav li {
      display: inline-block;
    }
    nav a {
      display: block;
      padding: 6px 12px;
      text-decoration: none;
    }

The same code written in SCSS, with the `ul`, `li`, and `a` selectors nested inside the `nav` selector:

    nav {
      ul {
        margin: 0;
        padding: 0;
        list-style: none;
      }

      li { display: inline-block; }

      a {
        display: block;
        padding: 6px 12px;
        text-decoration: none;
      }
    }

There's no limit to how deep the nesting can go (though overly nested rules will result in over-qualified CSS that could prove hard to maintain and is considered BAD PRACTICE)

Lets say the above CSS also has the following selector:

    nav li:first-child {
      color: blue;
    }

we can use the `&` character to represent the current path: `nav li` and nest the `:first-child` selector _inside_ the `li` selector

  nav {
    ul {
      margin: 0;
      padding: 0;
      list-style: none;
    }

    li { 
      display: inline-block; 
      
      &:first-child {
        color: blue
      }
    }

    a {
      display: block;
      padding: 6px 12px;
      text-decoration: none;
    }
  }


---
## Color Functions in SASS
---
### Lighten / Darken
`lighten($base-color, value%)` function to calculate a lighter shade of the base color.
`darken($base-color, value%)` function to calculate a darker shade of the base color.

---
### Saturate / Desaturate
---
`saturate($base-color, value%)` function to calculate a more saturated shade of the base color.
`desaturate($base-color, value%)` function to calculate a less saturated shade of the base color.

---
### Adjust Hue
---
`adjust-hue($base-color, value%)` function to adjust the hue value of HSL

---
### Adding Alpha Transparency
---
`rgba($base-color, opacity-value)` function can turn our color variable into a transparent value easily.

---
## Float
floating elements lose their height

clearfix method fixes this problem.  Simply add a class to the parent container named `clearfix`.  Then use `.clearfix::after{}` to create an element after that gives the container height.

    <nav class='clearfix'>
      <ul class="navigation">
        <li><a href='#'>About Us</a></li>
        <li><a href='#'>Pricing</a></li>
        <li><a href='#'>Contact</a></li>
      </ul>
      <div class="buttons">
        <a class="btn-main" href="#">Sign up</a>
        <a class="btn-hot" href="#">Get A Quote</a>
      </div>
    </nav>

    nav {
      margin: 30px;
      background-color: $color-primary;
    }

    .clearfix::after {
      content: '';
      clear: both;
      display: table;
    }

    .navigation {
      list-style: none;
      float: left;
    }

    .buttons {
      float: right;
    }

---
### Mixin
---
A snippet of code that can be "mixed in" to the code easily.

Lets say there are a lot of `clearfix` moments in the code.  Rather than add the following code into every selector, we can create a mixin:

    nav {
      margin: 30px;
      background-color: $color-primary;
      
      &::after {        //The code from here
        content: '';    // |
        clear: both;    // |
        display: table; // |
      }                 // To here
    }

Using the syntax:

@mixin clearfix {
  &::after {
    content: '';
    clear: both;
    display: table;
  }
}

nav {
  margin: 30px;
  background-color: $color-primary;
  
  @include clearfix;    
}

#### Mixin Arguments

We can pass an argument to a mixin as well.  
Lets say we have a mixin to style our links.  But we want different to use different colors for different applications.  

Declaration:

    @mixin style-link-text($color) {
      text-decoration: none;
          text-transform: uppercase;
          color: $color;
    }

Call:

    @include style-link-text($text-color-dark);


---
## Functions in SASS
---
Not often used, but possible!

to declare:
@function divide($a, $b) {
  @return $a / $b;
}

to call:
margin: divide(60 / 2) * 1px;

---
## Extend
---

%btn-placeholder {
  padding: 10px;
  display: inline-block;
  text-align: center;
  border-radius: 100px;
  width: $width-button;
  @include style-link-text($color-text-light);
}

.btn-hot {
  &:link {
    @extend %btn-placeholder;
    background-color: $color-tertiary;  
  }
  
  &:hover {
    background-color: lighten($color-tertiary, 10%);
  }
}

### Extend vs Mixin. 

Mixin copies properties into the place of call
Extend copies selector into its rule

