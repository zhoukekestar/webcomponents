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
* `action` the action url.
* `method` optional `GET`, `PUT`, `POST`, `DELETE`. Default: `POST`.
* `auto` auto submit after page loaded.
* `tempalte` bind template-mini. After loading data, auto set modal for template-mini.
