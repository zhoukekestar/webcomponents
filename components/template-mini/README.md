# template-mini

# Install
`<link rel="import" href="template-mini/index.html">`

# Create
```html
<template-mini>
  <p>{{name}}</p>
</template-mini>
```

# Syntax
* `repeat`
```html
<template-mini data-modal='{"list": ["a", "b", "c"]}'>
  <ul repeat='item in list'>
    <li>{{index}}: {{item}}</li>
  </ul>
</template-mini>
```
* `if`
```html
<template-mini data-modal='{"show": true}'>
  <p if='show'>Hi</p>
</template-mini>
```

* `elseif`, `else`
```html
<template-mini data-modal='{"num": 1}'>
  <p if='num === 1'>num is one</p>
  <p elseif='num === 2'>num is two</p>
  <p else>num is greater than two</p>
</template-mini>
```

# scripts
* 'text/beforeUpdate'
```html
<template-mini data-modal='{"time": 1480067606959}'>
  <p>date: {{formatDate(time)}}</p>
  <script type="text/beforeUpdate">
    this.formatDate = function(num) {
      return new Date(num).toGMTString();
    }
  </script>
</template-mini>
```
* 'text/afterUpdate'
```html
<template-mini>
  <button>sayhi</button>
  <script type="text/afterUpdate">
    this.querySelector('button').onclick = function() {
      alert('hi');
    }
  </script>
</template-mini>
```
* *Attention*! the script `must` be last child.
  * [https://bugs.chromium.org/p/chromium/issues/detail?id=502872](https://bugs.chromium.org/p/chromium/issues/detail?id=502872)
  * [http://stackoverflow.com/questions/40814688/the-way-to-get-full-innerhtml-in-createdcallback-while-it-has-script-tags](http://stackoverflow.com/questions/40814688/the-way-to-get-full-innerhtml-in-createdcallback-while-it-has-script-tags)
  * [https://github.com/skatejs/skatejs/issues/221](https://github.com/skatejs/skatejs/issues/221)


# Methods
* on(event, [selector,] callback), `selector` is optional.
```html
<template-mini modal='{}'>
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
