# browser support

## graceful degradation using supports

if using a property that might not be supported by all browsers, we can use `@supports`. 
`@supports` is kind of like `media`.  If the browser supports this property, implement this code:

    @supports (-webkit-backdrop-filter: blur(10px)) and (backdrop-filter: blur(10px)) {
      -webkit-backdrop-filter: blur(10px);
      backdrop-filter: blur(10px);
    }

WORKFLOW: is to style the element how you want it with all support, then create @support to contain questionable properties, and update the element style for a case that isn't supported.