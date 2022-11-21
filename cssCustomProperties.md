# Custom Properties (CSS variables)
---

Just like declaring a variable in JS, we can declare a custom property (sometimes called a CSS variable) in CSS.  Custom properties are a way to change many CSS style properties at once by changing only one value.

* Property names that are prefixed with `--`, like `--example-name`, represent _custom properties_ that contain a value that can be used in other declarations using the `var()` function.

* to call that variable, we use the `var()` function - `background: var(--example-name);`

Custom properties are scoped to the element(s) they are declared on.  Thus, CSS Variables are often defined in the `:root` element to allow the variable to be accessible globally.
* `:root` is a _pseudo-class_ selector that matches the root element in the document, usually the `html` element
* variables created in `:root` will set the value of that variable for the entire page.  They can be overridden byt setting them again within a specific selector.

A **FALLBACK VALUE** can be assigned in the instance the variable isn't found: 
* `background: var(--penguin-skin, black);`  

why css variables vs sass variables?
- can be manipulated in JS
- can edit them in dev tools
- easier to use css variables in the calc function 
- css variables cascade and are inherited

---
## Browser Fallbacks
---
Browser compatibility can be improved with **BROWSER FALLBACKS**.
* some browsers (IE) don't support CSS variables so we can create a fallback by defining a property twice.  This way if a CSS variable isn't supported, a default value will still be applied:

Example:

 ```
<style>
    :root {
        --red-color: red;
    }
    .red-box {
        background: red;
        background: var(--red-color);
    }
</style>
```
---
## Custom Property Naming Conventions
good reference: https://codepen.io/piggyslasher/pen/vQyegv  

---
## Theming
---
### Theming with custom properties
Instead of referencing a custom property for a specific color, the components reference a named custom property from the color scheme, and this again can be changed from somewhere central without bothering the component:

HTML:

    <section class="purpleTheme">
      <button>Do something</button>
    </section>

    <section class="greenishTheme">
      <button>Do something else</button>
    </section>

CSS:

    :root { 
      --white: #ffffff;
      --gray: #dddddd;
      --purple: #ccbbff;
      --darkPurple: #aa99dd;
      --greenish: #ccffbb;
      --darkGreenish: #aadd99;
      --themecolor: var(--white);
      --darkThemecolor: var(--gray);
    }

    //every button references a themecolor / darkThemecolor
    button{
      font: 14px Arial;
      padding: 8px;
      background-color: var(--themecolor);
      border: 3px solid var(--darkThemecolor);
      margin: 8px;
    }

    // then we create themes in classes to override --themecolor set in :root
    .purpleTheme {
      --themecolor: var(--purple);
      --darkThemecolor: var(--darkPurple);
    }

    .greenishTheme {
      --themecolor: var(--greenish);
      --darkThemecolor: var(--darkGreenish);
    }

---
## Co-variation with calc()
---
Taking it further, we can use co-variation.  This is the process of using a single custom variable in conjunction with calc to get two different (but related) values:

    --marginSides: 30px;
    --marginTopBottom: calc(var(--marginSides) * .7);

In the above code, if `--marginSides` changes, `--marginTopBottom` will follow.

### Colors
This same co-variation process works for colors using HSL.  Since the hue, saturation, and lumnosity are broken out, we can set each of those variables as a custom property:

    --hue: 255;
    --saturation: 100%;
    --lumnosity: 87%;
    --themecolor: hsla(var(--hue), var(--saturation), var(--lumnosity),1);

All these properties can be used for theming and co-variation between color values, such as a slightly darker border for a given background color:

HTML:

    <section class="themed purplishTheme">
      <button>Do something</button>
    </section>

    <section class="themed greenishTheme">
      <button>Do something else</button>
    </section>

    <section class="themed">
      <button>Just do it!</button>
    </section>

CSS:

    themed { 
      --hueBasic: 35;
      --hueGreen: 105;
      --huePurple: 255;
      --saturation: 100%;
      --lumnosity: 87%;
      --darkSaturation: calc(var(--saturation) * 0.6);
      --darkLumnosity: calc(var(--lumnosity) * 0.5);
      --themecolor: hsla(var(--hue), var(--saturation), var(--lumnosity), 1);
      --darkThemecolor: hsla(var(--hue), var(--darkSaturation), var(--darkLumnosity), 1);
      --borderSize: 3px;
      --themeBorder: var(--borderSize) solid var(--darkThemecolor);
      --hue: var(--hueBasic);
    }

    button{
      font: 14px Arial;
      padding: 8px;
      background-color: var(--themecolor);
      border: var(--themeBorder);
      margin: 8px;
    }

    .greenishTheme{
      --hue:  var(--hueGreen);  
    }

    .purplishTheme{
      --hue:  var(--huePurple);  
    }

You can still overwrite specific properties within the components if you need:

  .cracyButton {
    border: var(--themeBorder);
    border-left: 15px dotted var(--cracyColor);
  }

**NOTE:** use caution with `calc()` as it isn't automatically re-calculated 

---
## Make sure rules are calculated as they should be
---
From MDN: "Custom properties are scoped to the element(s) they are declared on, and participate in the cascade: the value of such a custom property is that from the declaration decided by the cascading algorithm."

This means that a CSS rule is not automatically updated if a property is changed.  
**So if a property used in `calc()` is changed, you have to make sure the rule is recalculated.**

So this does not work, since the `--hue` property is updated after using it in `calc()` for `--themecolor` above:

    //Does not work
    .themed {
        --hue: var(--basichue);
        --themecolor: hsla(calc(var(--hue), ...);
    }
    .procolTheme {
        --hue: var(--aWhiterShadeOfPale);
    }
    .hendrixTheme {
        --hue: var(--purpleHaze);
    }
    <main class="themed">
        <section class="procolTheme">...</section>
        <section class="hendrixTheme">...</section>
    </main>

This can be remedied by changing the order, or having them on the same node.

There are several possible strategies for forcing a recalc of the calculating rule.  
- You could add a rule later in the flow that partly updates the rule.
- If the usecase is theme per route, you can have a shared CSS with basic theming, and a per route CSS that overwrites the rule with jsut the needed properties.
- if the usecase is dark/lightmode and the browsers at the point all supports the media query `prefers-color-scheme`, you can trigger recalculation within the media query:

    @media (prefers-color-scheme: dark) {
        .themed {
            --hue: var(--backInBlack);
        }
    } 

---
## Exceptions
---
CSS custom properties aren't supported in media queries conditionals.  Use SASS variables.