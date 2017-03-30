# WebComponents List

* [address-selector Readme.md](https://github.com/zhoukekestar/webcomponents/tree/master/components/address-selector)
* [address-selector Demo](https://zhoukekestar.github.io/webcomponents/components/address-selector/demo.html)
```html
<address-selector>
  <select name="province"></select>
  <select name="city"></select>
</address-selector>
```

* [chart-js Readme.md](https://github.com/zhoukekestar/webcomponents/tree/master/components/chart-js)
* [chart-js Demo](https://zhoukekestar.github.io/webcomponents/components/chart-js/demo.html)
```html
<chart-js
  labels='["jan", "feb", "mar"]'
  datasets='[{"label": "first", "data": [56, 4, 89]}, {"label": "second", "data": [89, 60, 12]}]'>
</chart-js>
```

* [code-mirror Readme.md](https://github.com/zhoukekestar/webcomponents/tree/master/components/code-mirror)
* [code-mirror Demo](https://zhoukekestar.github.io/webcomponents/components/code-mirror/demo.html)
```html
<textarea is='code-mirror' rows="10">
  <html>
    <head>hello</head>
    <body>
      <p>hello world</p>
    </body>
  </html>
</textarea>
```

* [form-json Readme.md](https://github.com/zhoukekestar/webcomponents/tree/master/components/form-json)
* [form-json Demo](https://zhoukekestar.github.io/webcomponents/components/form-json/demo.html)
```html
<form-json action='./demo.json' method='GET' template='template-mini' auto>
  <input type="submit">
</form-json>
<template-mini>
  <h1><center>Hello {{name}}. </center></h1>
</template-mini>
```

* [form-graphql Readme.md](https://github.com/zhoukekestar/webcomponents/tree/master/components/form-graphql)
```html
<form-graphql>
  <code>
    mutation CreateUser($input: UserInput) {
      createUser(input: $input) {
        id
      }
    }
  </code>
  <input type="text" name='input.name' value='name'>
  <input type="submit">
</form-graphql>
```

* [input-validator Readme.md](https://github.com/zhoukekestar/webcomponents/tree/master/components/input-validator)
* [input-validator Demo](https://zhoukekestar.github.io/webcomponents/components/input-validator/demo.html)
```html
<form-json>
  <input is='input-validator' required msg='{"required": "you forget somthing!"}'>
</form-json>
```

<!--
* [hello-world](https://zhoukekestar.github.io/webcomponents/components/hello-world/demo.html)
* [hello-world-v1](https://zhoukekestar.github.io/webcomponents/components/hello-world-v1/demo.html), Your Chrome version should be [greater than 54](http://caniuse.com/#search=Custom%20Elements%20v1) as the demo use [Custom Elements v1](https://developers.google.com/web/fundamentals/getting-started/primers/customelements)
-->

* [modal-js Readme.md](https://github.com/zhoukekestar/webcomponents/tree/master/components/modal-js)
* [modal-js Demo](https://zhoukekestar.github.io/webcomponents/components/modal-js/demo.html)
```html
<modal-js id='modal-1'>
  <header>title</header>
  <p>hello World</p>
  <footer>
    <button hide>hide</button>
  </footer>
</modal-js>
<button onclick='document.querySelector("#modal-1").show()'>show</button>
```

* [template-mini Readme.md](https://github.com/zhoukekestar/webcomponents/tree/master/components/template-mini)
* [template-mini Demo](https://zhoukekestar.github.io/webcomponents/components/template-mini/demo.html)
```html
<template-mini model='{"items": [{"name": "Hello"}, {"name": "World"}]}'>
  <ul repeat='item in items'>
    <li>{{item.name}}</li>
  </ul>
</template-mini>
```

* [template-mustache Readme.md](https://github.com/zhoukekestar/webcomponents/tree/master/components/template-mustache)
* [template-mustache Demo](https://zhoukekestar.github.io/webcomponents/components/template-mustache/demo.html)
```html
<template-mustache model='{"name": "World"}'>
  <p name='{{name}}'>Hello {{ name }}!</p>
</template-mustache>
```

<!-- * [template-vue](https://zhoukekestar.github.io/webcomponents/components/template-vue/demo.html) -->


* [upload-file Readme.md](https://github.com/zhoukekestar/webcomponents/tree/master/components/upload-file)
<!--* [upload-file Demo](https://zhoukekestar.github.io/webcomponents/components/upload-file/demo.html)-->
```html
<upload-file>upload it!</upload-file>
```

* [x-slider Readme.md](https://github.com/zhoukekestar/webcomponents/tree/master/components/x-slider)
* [x-slider Demo](https://zhoukekestar.github.io/webcomponents/components/x-slider/demo.html)
```html
<x-slider>
  <div class="swiper-wrapper">
    <div class="swiper-slide">Slide 1</div>
    <div class="swiper-slide">Slide 2</div>
    <div class="swiper-slide">Slide 3</div>
  </div>
</x-slider>
```
