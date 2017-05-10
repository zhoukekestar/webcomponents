# template-mini

# Install
```html
<link rel="import" href="template-mini/index.html">
```

# Create
```html
<template-mini>
  <p>{{name}}</p>
</template-mini>
```

# Syntax
* `repeat`
```html
<template-mini model='{"list": ["a", "b", "c"], "list2": {"key1": "value1", "key2": "value2", "key3": "value3"}}'>
  <ul>
    <li repeat='item in list'>{{item}}</li>
  </ul>
  <ul>
    <li repeat='item, index in list'>{{index}}: {{item}}</li>
  </ul>
  <ul>
    <li repeat='item in list2'>{{item}}</li>
  </ul>
  <ul>
    <li repeat='item, key in list2'>{{key}}: {{item}}</li>
  </ul>
  <ul>
    <li repeat='item, key, index in list2'>{{index}}-{{key}}-{{item}}</li>
  </ul>
</template-mini>
```
* `if`
```html
<template-mini model='{"show": true}'>
  <p if='show'>Hi</p>
</template-mini>
```

* `elseif`, `else`
```html
<template-mini model='{"num": 1}'>
  <p if='num === 1'>num is one</p>
  <p elseif='num === 2'>num is two</p>
  <p else>num is greater than two</p>
</template-mini>
```

* `data-src` (only for img)
```html
<template-mini>
  <img src='/{{imgurl}}'> // This will request a image with url `/%7B%7Bimgurl%7D%7D` after page is loaded.
  <img data-src='{{img}}'> // Template-mini will set attribute `src` from attribute `data-src` if `src` is null.
</template-mini>
```
* [Try it online!](https://zhoukekestar.github.io/webcomponents/components/template-mini/demo.html)

# scripts
* `script-before`
```html
<template-mini model='{"time": 1480067606959}'>
  <p>date: {{formatDate(time)}}</p>
  <script-before>
    this.formatDate = function(num) {
      return new Date(num).toGMTString();
    }
  </script-before>
</template-mini>
```
* `script-after`
```html
<template-mini>
  <button>sayhi</button>
  <script-after>
    this.querySelector('button').onclick = function() {
      alert('hi');
    }
  </script-after>
</template-mini>
```
* *Attention*! If you use `<script type='text/beforeUpdate'></script>`, the script `must` be last child.
  * [https://bugs.chromium.org/p/chromium/issues/detail?id=502872](https://bugs.chromium.org/p/chromium/issues/detail?id=502872)
  * [http://stackoverflow.com/questions/40814688/the-way-to-get-full-innerhtml-in-createdcallback-while-it-has-script-tags](http://stackoverflow.com/questions/40814688/the-way-to-get-full-innerhtml-in-createdcallback-while-it-has-script-tags)
  * [https://github.com/skatejs/skatejs/issues/221](https://github.com/skatejs/skatejs/issues/221)

# Attributes
* `model` The model for template
```html
<template-mini>
  <p>{{name}}</p>
</template-mini>
<script>
  var tmpl = document.querySelector('template-mini')
  tmpl.model = {name: 'template-mini'};
  // This code pdate name as we observe the model's property.
  tmpl.model.name = 'template-mini2';

  // Attention !!! WARNING.
  // We can't observe a nested object, the code below will not work as expected
  // tmpl.model.nested.object.name = 'new-value';
  // We can only observe the model property like:
  // tmpl.model.nested = {object: {name: 'new-value'}}
  // OR model object.
  // tmpl.model = {nested: {object: {name: 'new-value'}}};

  // This code will update name too.
  // tmpl.model = {name: 'template-mini3'};
</script>
```

# Methods
* on(event, [selector,] callback), `selector` is optional.
```html
<template-mini model='{}'>
  <a href="javascript:;">say yeah</a>
  <ul>
    <li data-msg='hi1'><button>say hi1</button></li>
    <li data-msg='hi2'><button>say hi2</button></li>
  </ul>
</template-mini>
<script>
  document.querySelector('template-mini').on('click', 'a', function() {
    alert('yeah')
  })
  document.querySelector('template-mini').on('click', 'ul > li', function() {
    alert(this.dataset.msg)
  })
</script>
```

# online demo
* [demo](https://zhoukekestar.github.io/webcomponents/components/template-mini/demo.html)

# Other Repos
* [TemplateBinding](https://github.com/Polymer/TemplateBinding)
* [TemplateBinding.js](https://github.com/Polymer/TemplateBinding/blob/master/src/TemplateBinding.js)
