# template-mustache
This component is based on [mustache.js](https://github.com/janl/mustache.js).

More details about template syntax can be found [@here](http://mustache.github.io/mustache.5.html).

# Install
`<link rel="import" href="template-mustache/index.html">`

# Usage
```html
<template-mustache model='{"name": "World"}'>
  <p>Hello {{ name }}!</p>
</template-mustache>
```

# Update View
```js
var tmpl = document.querySelector('template-mustache');
tmpl.setAttribute('model', '{"name": "mustache"}');
// OR
tmpl.model = {name: mustache};
```
