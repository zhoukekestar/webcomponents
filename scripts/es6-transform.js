var babel = require('babel-core')
  , fs = require('fs')
  , path = require('path')
  , options = JSON.parse(fs.readFileSync(path.resolve(__dirname, '../.babelrc')))

var result = babel.transform(fs.readFileSync(path.resolve(__dirname, './hello.js')), options);

console.log(result.code)
