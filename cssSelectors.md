# CSS SELECTORS
---
## CLASSES

a class can now be applied to an element inline using:


    <p class="blue-text">


multiple classes can be applied to the same element by separating each class name with a space (**not a comma**).

    <p class="class1 class2">
---
## IDs 
---
ids attributes are assigned similarly to classes:

    <p id="cat-photo-caption">

**NOTE:**  Never give more than one element the same `id` attribute  

---
## ATTRIBUTE SELECTORS
---
Elements can be selected using the _attribute selector_ as well.

The `[attr=value]` selector matches elements with a specific attribute value

    /* <a> elements with a title attribute */
    a[title] {
      color: purple;
    }

    /* <a> elements with an href matching "https://example.org" */
    a[href="https://example.org"]
    {
      color: green;
    }

    /* <a> elements with an href containing "example" */
    a[href*="example"] {
      font-size: 2em;
    }

    /* <a> elements with an href ending ".org" */
    a[href$=".org"] {
      font-style: italic;
    }

    /* <a> elements whose class attribute contains the word "logo" */
    a[class~="logo"] {
      padding: 2px;
    }
---
## PSEUDO-CLASSES
---
a **pseudo-class** is a keyword that can be added to selectors to specify a special state of the selected element(s).

    selector:pseudo-class {
      property: value;
    }

For example, the styling of an anchor tag can be changed for its hover state using `:hover` pseudo-class selector.  

    a:hover {
      color: red;
    }

---
### Types of Pseudo-Classes
---
**ELEMENT DISPLAY STATE PSEUDO-CLASSES**

These pseudo-classes enable the selection of elements based on their display states.

---
`:fullscreen` - matches an element that is currently in fullscreen mode.

---
`:modal` - matches an element that is in a state in which it excludes all interaction with elements outside it until the interaction has been dismissed.

---
`:picture-in-picture` - matches an element that is currently in picture-in-picture mode.

---
**INPUT PSEUDO-CLASSES**

These pseudo-classes relate to form elements, and enable selecting elements based on HTML attributes and the state that the field is in before and after interaction.

---
`:autofill` - matches when an `<input>` has been autofilled by the browser.

---
`:enabled` - represents a user interface element that is in an enabled state.

---
`:checked` - matches when elements such as checkboxes and radio buttons are toggled on.

---
**LOCATION PSEUDO-CLASS**

These pseudo-classes relate to links, and to targeted elements within the current document.

---
`:visited` - matches links that have been visited.

---
`:target` - matches the element which is the target of the document url.

---
**RESOURCE STATE PSEUDO-CLASS**

These pseudo-classes apply to media that is capable of being in a state where it would be described as playing, such as a video.

---
`:playing` - Represents a media element that is capable of playing when that element is playing.

---
`:paused` - Represents a media element that is capable of playing when that element is paused.

---
**TREE-STRUCTURAL PSEUDO-CLASSES**

These pseudo-classes relate to the location of an element within the document tree.

---
`:root` matches the root element of a tree representing the document.  In an HTML document, `:root` often represents the `<html>` element and is identical to the selector `html` (except that its specificity is higher)

**NOTE:**  *custom properties* are usually declared in `:root`.

For example: 

    /* Selects the root element of the document:
      <html> in the case of HTML */
    :root {
      background: yellow;
    }

Is similar to:

    html {
      background: yellow;
    }



---
`:first-of-type` targets the first element that matches the selector.

It can get complicated with nested elements:

    <article>
      <div>This `div` is first!</div>
      <div>This <span>nested `span` is first</span>!</div>
      <div>
        This <em>nested `em` is first</em>, but this <em>nested `em` is last</em>!
      </div>
      <div>This <span>nested `span` gets styled</span>!</div>
      <p>This `p` qualifies!</p>
      <div>This is the final `div`.</div>
    </article>

    article :first-of-type {
      background-color: pink;
    }

---
`:last-of-type` targets the last element that matches the selector.

It can get complicated with nested elements:

    <article>
      <div>This `div` is first.</div>
      <div>This <span>nested `span` is last</span>!</div>
      <div>
        This <em>nested `em` is first</em>, but this <em>nested `em` is last</em>!
      </div>
      <p>This `p` qualifies!</p>
      <div>This is the final `div`!</div>
    </article>

    article :last-of-type {
      background-color: pink;
    }


---
`:nth-of-type()` targets specific elements based on their order among siblings of the same type.

---
**USER ACTION PSEUDO-CLASSES**

These pseudo-classes require some interaction by the user in order for them to apply, such as holding a mouse pointer over an element.

---
`:hover` - matches when a user designates an item with a pointing device, such as holding the mouse pointer over the item.

---
`:active` - matches when an item is being activated by the user. For example, when the item is clicked on.

---
`:focus` - matches when an element has focus.

---
**FUNCTIONAL PSEUDO-CLASSES**

These pseudo-classes accept a forgiving selector list as a parameter.

---
`:not()` represents elements that do not match a list of selectors.  Since it prevents specific items from being selected, it is known as a _negation pseudo-class_.

It requires a comma-separated list of one or more selectors as its argument.  The list **must not** contain another negation selector or a pseudo-element.  For example:

    p:not(.class-name) { 
      //selects all p elements that do NOT have class '.class-name'
    }

    p:not(strong, .important) {
      //selects all p elements that are NOT strong, or have class '.important'
    }

There are many quirks, tricks and unexpected results when using `:not()` (from MDN):

* Useless selectors can be written using this pseudo-class. For example, `:not(*)` matches any element which is not an element, which is obviously nonsense, so the accompanying rule will never be applied.

* This pseudo-class can increase the _specificity_ of a rule. For example, `#foo:not(#bar)` will match the same element as the simpler `#foo`, but has the higher specificity of two `id` selectors.

* The _specificity_ of the `:not()` pseudo-class is replaced by the specificity of the most specific selector in its comma-separated argument of selectors; providing the same specificity as if it had been written `:not(:is(argument))`.

* `:not(.foo)` will match anything that isn't `.foo`, including `<html>` and `<body>`.

* This selector will match everything that is "not an X". This may be surprising when used with _descendant combinators_, since there are multiple paths to select a target element. For instance, body `:not(table) a` will still apply to links inside a `<table>`, since `<tr>`, `<tbody>`, `<th>`, `<td>`, `<caption>`, etc. can all match the `:not(table)` part of the selector.

* You can negate several selectors at the same time. Example: `:not(.foo, .bar)` is equivalent to `:not(.foo):not(.bar)`.

* If any selector passed to the `:not()` pseudo-class is invalid or not supported by the browser, the whole rule will be invalidated. The effective way to overcome this behavior is to use `:is()` pseudo-class, which accepts a forgiving selector list. For example `:not(.foo, :invalid-pseudo-class)` will invalidate a whole rule, but `:is(:not(.foo), :not(:invalid-pseudo-class))` will match any element that isn't .foo.
---

## pseudo-elements
* `::before` creates a pseudo-element that is the first child of the selected element

for these elements to work the must have a defined `content` property.  This property is usually used to add things like a photo or text to the selected element.  In some cases it can just be set to an empty string.

    .heart::before {
      content: "";
      background-color: yellow;
      border-radius: 25%;
      position: absolute;
      height: 50px;
      width: 70px;
      top: -50px;
      left: 5px;
    }

* `::after` creates a _pseudo-element_ that is the last child of the selected element.  It's often used to add content to an element with the `content` property.  Inline by default.

Example: cat photo gallery.  Last element is centered when odd number of photos.  The following code adds an element to the end to push the last cat photo to the left

```
gallery::after {
  content: '';
  width: photo-width;
}
```

---
## Select all 
---
`*` - Select all elements

thusly
`*::before` - selects all `::before` pseudo-elements
`*::after` - selects all `::after` pseudo-elements

A common **global reset** strategy is:

    *,
    *::before,
    *::after {
      margin: 0;
      padding: 0;
      box-sizing: border-box;
    }

---