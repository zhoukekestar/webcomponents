# Create a custom element
```html
var proto = Object.create(HTMLElement.prototype)
  , tmpl = (document._currentScript || document.currentScript).ownerDocument.querySelector('template');
  
proto.createdCallback  = function() {

}

proto.attachedCallback = function() {
}

document.registerElement('custom-element', {
  prototype: proto
});
```

# Enhance a exist element

```html
var proto = Object.create(HTMLTextAreaElement.prototype);

proto.createdCallback  = function() {

}

proto.attachedCallback = function() {

}

document.registerElement('custom-element', {
  prototype: proto,
  extends: 'textarea'
});
```
