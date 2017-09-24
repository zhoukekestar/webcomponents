# template-handlebars
This component is based on [mustache.js](https://github.com/janl/mustache.js).

More details about template syntax can be found [@here](http://mustache.github.io/mustache.5.html).

# Install
`<link rel="import" href="template-handlebars.html">`

# Usage
```html
<template-handlebars model='{"name": "World"}'>
  <p>Hello {{ name }}!</p>
</template-handlebars>
```

# Update View
```js
var tmpl = document.querySelector('template-handlebars');
tmpl.setAttribute('model', '{"name": "handlebars"}');
// OR
tmpl.model = {name: handlebars};
```
