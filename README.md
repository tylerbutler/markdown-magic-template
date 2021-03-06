# Template plugin

Add [Lodash template](https://lodash.com/docs/4.17.4#template) support to markdown files via [markdown-magic](https://github.com/DavidWells/markdown-magic)

## Install

```
npm i markdown-magic markdown-magic-template --save-dev
```

## Adding the plugin

See `example.js` for usage.

<!-- AUTO-GENERATED-CONTENT:START (CODE:src=./example.js) -->
<!-- The below code snippet is automatically added from ./example.js -->
```js
const path = require('path');
const markdownMagic = require('markdown-magic');

const config = {
  transforms: {
    TEMPLATE: require('./index.js')({ name: 'world' }),
  }
}

const markdownPath = path.join(__dirname, 'README.md');
markdownMagic(markdownPath, config);
```
<!-- AUTO-GENERATED-CONTENT:END *-->

## Usage in markdown

<!-- AUTO-GENERATED-CONTENT:START (TEMPLATE:src=./template.md) -->
## hello world!

<!-- AUTO-GENERATED-CONTENT:END -->

## Options
* **src** (required) - path to template, relative to the Markdown file
