FontAwesome is a library of SVG-powered icons, many of which are freely available to use. You will be using some of these icons in this project, so you will need to link the external stylesheet to your HTML:

https://use.fontawesome.com/releases/v5.8.2/css/all.css

The `i` element is used for idiomatic text, or text that is separate from the "normal" text content. This could be for italic text, such as scientific terms, or for icons like those provided by FontAwesome.

    <i class="fas fa-music"></i>


This special class is how FontAwesome determines which icon to load. `fas` indicates the category of icons (FontAwesome Solid, here), while `fa-music` selects the specific icon

## Form Submit

`<form action="url-of-file-that-will-process-input-control-on-submission>`

URL	Specifies the URL of the file that will process the input control when the form is submitted.
Possible values:

An absolute URL - the full address of a page (like href="http://www.example.com/formresult.asp")
A relative URL - points to a file within the current site (like href="formresult.asp")

## submit buttons