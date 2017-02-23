# modal-js

# Install
`<link rel="import" href="modal-js/index.html">`

# Create
```html
<modal-js>
  <header>title</header>
  <p>Hello world!</p>
  <footer><button close>close</button></footer>
</modal-js>
```

# Elements
* `header` The dialog header
* `footer` The dialog footer
* `Others` The dialog body
* `<header><div class='close'></div></header>` Any Tag with class name `close` in the `header` node can trigger close event.

# Button Attributes
* `hide` Hide Or Close dialog
* `close` Hide Or Close dialog
```html
<modal-js>
  <button close>close</button>
</modal-js>
```
* `type=submit` submit form if modal-js has one
```html
<modal-js>
  <form></form>
  <button type="submit">submit</button>
</modal-js>
```

# Methods
* `hide()` Hide Or Close dialog
* `close()` Hide Or Close dialog
* `show()` Show dialog
* `show(modal)` Show dialog with modal. The modal will set to `template-mini`

```html
<modal-js>
  <form-json>
    <template-mini>
      <p>Hello {{name}}</p>
    </template-mini>
  </form-json>
</modal-js>

<script>
  document.querySelector('modal-js').show({name: 'Bob'})
</script>
```
