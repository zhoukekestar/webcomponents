# Demo List
* [chart-js](https://zhoukekestar.github.io/webcomponents/components/chart-js/demo.html)
```html
<chart-js
  labels='["jan", "feb", "mar"]'
  datasets='[{"label": "first", "data": [56, 4, 89]}, {"label": "second", "data": [89, 60, 12]}, {"label": "third", "data": [50, 80, 50]}, {"label": "4th", "data": [60, 20, 60]}]'></chart-js>
```

* [code-mirror](https://zhoukekestar.github.io/webcomponents/components/code-mirror/demo.html)
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

* [form-json](https://zhoukekestar.github.io/webcomponents/components/form-json/demo.html)
```html
<form-json action='./demo.json' method='GET' data-template='template-mini' auto>
  <input type="submit">
</form-json>
<template-mini>
  <h1><center>Hello {{name}}. </center></h1>
</template-mini>
```

* [hello-world](https://zhoukekestar.github.io/webcomponents/components/hello-world/demo.html)
* [hello-world-v1](https://zhoukekestar.github.io/webcomponents/components/hello-world-v1/demo.html), Your Chrome version should be [greater than 54](http://caniuse.com/#search=Custom%20Elements%20v1) as the demo use [Custom Elements v1](https://developers.google.com/web/fundamentals/getting-started/primers/customelements)
* [modal-js](https://zhoukekestar.github.io/webcomponents/components/modal-js/demo.html)
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

* [template-mini](https://zhoukekestar.github.io/webcomponents/components/template-mini/demo.html)
```html
<template-mini modal='{"items": [{"name": "Hello"}, {"name": "World"}]}'>
  <ul repeat='item in items'>
    <li>{{item.name}}</li>
  </ul>
</template-mini>
```
* [template-vue](https://zhoukekestar.github.io/webcomponents/components/template-vue/demo.html)
* [x-slider](https://zhoukekestar.github.io/webcomponents/components/x-slider/demo.html)
```html
<x-slider>
  <div class="swiper-wrapper">
    <div class="swiper-slide">Slide 1</div>
    <div class="swiper-slide">Slide 2</div>
    <div class="swiper-slide">Slide 3</div>
  </div>
</x-slider>
```
