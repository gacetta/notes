# Post CSS
PostCSS is more of a transpiler like babel.  You write normal CSS and postCSS takes that code, modifies it to work with older browsers (or based on other installed plugins - such as cssnano which condenses code).  By default all postCSS does is transform basic CSS into a different location, but it's very customizable.


## Installation
- create package.json with `npm init -y`
- install postCSS and postCSS-cli with `npm i --save-dev postcss postcss-cli`

## setup package.json && html files
- create `build:css` script in `package.json`:

  "build:css": "postcss src/styles.css --dir dest"

- make sure index.html imports `styles.css` from the output location specificied in build script (`dest`)
- create `watch:css` script with `-w` flag: 

  "watch:css": "postcss src/styles.css --dir dest -w"

## setup postcss.config.js file
https://www.postcss.parts/ - list of plug-ins available for postCSS (and documentation)

- create `postcss.config.jss` file
- configure file based on documentation

tip for cleanliness:

  module.exports = {
    plugins: [
      require("cssnano")({
        preset: 'default',
      }),
    ],
  };

we could remove the inline `require`:

  const cssnano = require('cssnano')

  module.exports = {
    plugins: [
      cssnano({
        preset: 'default',
      }),
    ],
  };

**NOTE:** whenever you change your config file, you need to re-run a watch script


## Resources:

quick tutorial: https://www.youtube.com/watch?v=Kn2SKUOaoT4
good tutorial: https://www.youtube.com/watch?v=ohJcZW60br0


