# form-graphql
A graphql form based form-json.

# Install
`<link rel="import" href="form-graphql/index.html">`

# Create
```html
<form-graphql>
  <code>
    mutation CreateAuthority($input: AuthorityInput) {
      createAuthority(input: $input) {
        id
      }
    }
  </code>
  <input type="text" name='input.name' value='name'>
  <input type="text" name='input.group:number' value='2'>
  <input type="text" name='input.url' value='url'>
  <input type="submit">
</form-graphql>
```

# Code
GraphQL query should be placed in a node named `code`.

# This component is based on `form-json`!
