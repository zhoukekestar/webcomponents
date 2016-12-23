# form-json

# Install
`<link rel="import" href="form-json/index.html">`

# Create
```html
<form-json action='/action' method='GET'>
  <input name="key" value="value">
</form-json>
```

# Attributes
* `action='xx'` the action url.
* `method='xx'` optional `GET`, `PUT`, `POST`, `DELETE`. Default: `POST`.
* `auto` auto submit after page loaded.
* `tempalte='xx'` bind template-mini. After loading data, auto set modal for template-mini.
* `inwebcomponents` Specify it if `form-json` in your webcomponents.

# Methods
* `onended(response, xhr)` Executed if request is successful.
* `onerror(xhr)` Executed if request throw an error.

# Events
* `form-json-ended` Dispatch if request is successful. You can get `XMLHttpRequest` by `e.target._XMLHttpRequest`
* `form-json-error` Dispatch if request throw an error. You can get `XMLHttpRequest` by `e.target._XMLHttpRequest`
