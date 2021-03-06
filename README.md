
# WebComponents
* [WebComponents List](https://github.com/zhoukekestar/webcomponents/tree/master/components)
* You can [try it online!](https://zhoukekestar.github.io/webcomponents/)


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

# Convention
* Every component **should** call its' `beforeRegister` function before register it to document. And you **should** export it as a global object like "HTML**AbcDef**Element". Here is an example:

```js

// <hello-world></hello-world>

!(function() {

  var proto = Object.create(HTMLElement.prototype)

  proto.createdCallback  = function() {
    alert(this.greeting || 'Hello world')
  }

  // Call beforeRegister.
  window.HTMLHelloWorldElement && window.HTMLHelloWorldElement.beforeRegister && HTMLHelloWorldElement.beforeRegister.call(proto);

  // Export to global scope.
  window.HTMLHelloWorldElement = document.registerElement('hello-world', {
    prototype: proto
  });

})();

// So you can do extern thing like:
// note: you should place this code before linking "hello-world.html" .
window.HTMLHelloWorldElement = {

  beforeRegister: function() {

    // 重写构造函数
    var _createdCallback = this.createdCallback;

    this.createdCallback = function() {
      this.greeting = 'Hello Webcomponents.'
      _createdCallback.call(this);
    }
    
  }

}
```

# Polyfill (For Firefox, IE11)
* [webcomponentsjs](https://github.com/webcomponents/webcomponentsjs)
* [Do not use document.currentScript](https://github.com/webcomponents/webcomponentsjs#currentscript), use `(document._currentScript || document.currentScript)` instead.
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

# Other Webcomponents Projects

* [W3C](http://w3c.github.io/webcomponents/spec/custom/), [hello-world.html](https://github.com/webcomponents/hello-world-element/blob/master/hello-world.html)
* [webcomponents.org](http://webcomponents.org/)
* [VUE](http://vuejs.org/guide/single-file-components.html), [single-file-components](http://vuejs.org/v2/guide/single-file-components.html)
* [WEEX](http://alibaba.github.io/weex/doc/syntax/composed-component.html), [component-defs.html](http://alibaba.github.io/weex/doc/references/component-defs.html)
* [Polymer](https://github.com/Polymer/polymer) , [hello-world-polymer.html](https://github.com/webcomponents/hello-world-polymer/blob/master/hello-world.html)
* [skatejs](https://github.com/skatejs/skatejs)
