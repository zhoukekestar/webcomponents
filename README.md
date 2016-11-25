# WebComponents! Now!
* [imports](https://www.html5rocks.com/en/tutorials/webcomponents/imports/)
* [customelements](https://www.html5rocks.com/en/tutorials/webcomponents/customelements/)
* [template](https://www.html5rocks.com/en/tutorials/webcomponents/template/)
* [customelements v1](https://developers.google.com/web/fundamentals/getting-started/primers/customelements)


# Chorme-Only maybe not so that bad.
There are some scenes can be uesed. So we can use The Last HTML5 Specification.
* Maybe: The company's internal management system. (You can ask them to use last Chrome. ^-^)
* Maybe: Personal System.
* Maybe: Any other systems are not used a lot. (The Chromer is the most part of your visitors)

# Why we should write components with W3C ?

I love components, But I just tired with kinds of components.  `W3C` > `Polymer` > `Others`.

* [VUE](http://vuejs.org/guide/single-file-components.html)
* [WEEX](http://alibaba.github.io/weex/doc/syntax/composed-component.html)
* [Polymer](https://github.com/Polymer/polymer) , [hello-world-polymer.html](https://github.com/webcomponents/hello-world-polymer/blob/master/hello-world.html)
* [skatejs](https://github.com/skatejs/skatejs)
* [W3C](http://w3c.github.io/webcomponents/spec/custom/), [hello-world.html](https://github.com/webcomponents/hello-world-element/blob/master/hello-world.html)
* [webcomponents.org](http://webcomponents.org/)

# [Try it online!](https://zhoukekestar.github.io/webcomponents/)

# webcomponents-polyfill (polyfill for Firefox, IE11)
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
