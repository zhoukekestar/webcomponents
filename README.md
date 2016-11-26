
# WebComponents
* [template-mini](https://github.com/zhoukekestar/webcomponents/tree/master/components/template-mini)
```html
<template-mini modal='{"items": [{"name": "Hello"}, {"name": "World"}]}'>
  <ul repeat='item in items'>
    <li>{{item.name}}</li>
  </ul>
</template-mini>
```
* [form-json](https://github.com/zhoukekestar/webcomponents/tree/master/components/form-json)
```html
<form-json action='/api' method='POST'>
  <input name="key" value="value">
  <input type='submit' value='submit'>
<form-json>
// POST /api
// {"key": "value"}
```
* More components in folder `components`, you can [try it online!](https://zhoukekestar.github.io/webcomponents/)


# Tutorials
* [imports](https://www.html5rocks.com/en/tutorials/webcomponents/imports/)
```html
<link rel="import" href="/path/to/imports/stuff.html">
```
* [customelements](https://www.html5rocks.com/en/tutorials/webcomponents/customelements/)
```js
var proto = Object.create(HTMLElement.prototype);
proto.createdCallback = function() {
}
document.registerElement('x-foo', {prototype: proto});
```
* [template](https://www.html5rocks.com/en/tutorials/webcomponents/template/)
```html
<template>
  <p>Hello World!</p>
</template>
```
* [customelements v1](https://developers.google.com/web/fundamentals/getting-started/primers/customelements)
```js
class AppDrawer extends HTMLElement {...}
window.customElements.define('app-drawer', AppDrawer);
```

# Polyfill (for Firefox, IE11)
* [webcomponentsjs](https://github.com/webcomponents/webcomponentsjs)
* [Do not use document.currentScript](https://github.com/webcomponents/webcomponentsjs#currentscript)
* Do not use your [named element](https://html.spec.whatwg.org/multipage/browsers.html#named-access-on-the-window-object) without query.

```html
<div id='foo'></div>

// Do not use this code, you will get false on Firefox or Old-Chrome with expression:
// document.querySelector('#foo') === foo  ====> false
<script>console.log(document.querySelector('#foo') === foo)</script>   

// This code is fine.
<script>var foo = document.getElementById('foo'); console.log(foo.id); </script>
```

* Do not use your `this` inline like this:

```html
// This code is bad as this == HTMLUnknoenElement on Old-Chrome, so you can't use your custom method or prop.
// https://github.com/webcomponents/webcomponentsjs/issues/580
<form-json id='form' onchange="this.submit()"></form-json>

// This code is fine
<form-json id='form' onchange="form.submit()"></form-json>
```

# Other Webcomponents Project

* [W3C](http://w3c.github.io/webcomponents/spec/custom/), [hello-world.html](https://github.com/webcomponents/hello-world-element/blob/master/hello-world.html)
* [webcomponents.org](http://webcomponents.org/)
* [VUE](http://vuejs.org/guide/single-file-components.html), [single-file-components](http://vuejs.org/v2/guide/single-file-components.html)
* [WEEX](http://alibaba.github.io/weex/doc/syntax/composed-component.html), [component-defs.html](http://alibaba.github.io/weex/doc/references/component-defs.html)
* [Polymer](https://github.com/Polymer/polymer) , [hello-world-polymer.html](https://github.com/webcomponents/hello-world-polymer/blob/master/hello-world.html)
* [skatejs](https://github.com/skatejs/skatejs)
