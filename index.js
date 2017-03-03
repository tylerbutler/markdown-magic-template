const fs = require('fs');
const path = require('path');
const template = require('lodash.template');

module.exports = (obj) => function TEMPLATE(content, options = {}, config) {
  const filepath = path.resolve(path.dirname(config.originalPath), options.src);
  return template(fs.readFileSync(filepath, 'utf8'))(obj);
}
