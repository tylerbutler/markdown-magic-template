const path = require('path');
const markdownMagic = require('markdown-magic');

const config = {
  transforms: {
    TEMPLATE: require('./index.js')({ vars: vars }),
  }
}

const markdownPath = path.join(__dirname, 'README.md');
markdownMagic(markdownPath, config);
