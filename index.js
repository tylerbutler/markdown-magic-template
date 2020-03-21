const fs = require('fs');
const path = require('path');
const process = require('process');
const template = require('lodash.template');

module.exports = (obj) => function TEMPLATE(content, options = {}, config) {
  // any options passed in with values of the form $variable will be expanded as
  // environment variables
  for (let [key, value] of Object.entries(options)) {
    if (value.startsWith('$')) {
      const envVar = value.substring(1);
      const envVarVal = process.env[envVar];
      options[key] = envVarVal;
    }
  }

  // obj.vars = vars;
  let templateString = content;
  if (options.src) {
    const filepath = path.resolve(path.dirname(config.originalPath), options.src);
    templateString = fs.readFileSync(filepath, 'utf8');
  }

  return template(templateString)(obj);
}
