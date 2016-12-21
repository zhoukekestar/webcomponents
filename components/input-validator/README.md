# input-validator
This component based on [form Validator](https://github.com/zhoukekestar/modules/tree/master/src/formValidator)

# Quick Start
```html
<link rel="import" href="input-validator/index.html">
<input type="url" is='input-validator'>
```

# Attributes
| Attribute | Message Property | Default Message | Detail |
| --- | --- | --- | --- |
| `type="email"` | `email` | 邮箱地址错误 | Check the value is email or not. |
| `type="number"`| `number` | 数字格式错误 | Check the value is number or not. |
| `type="cellphone tel phone"` |`cellphone` | 手机号错误 | The type can be one of `cellphone`, `tel`, `phone`. Check the value is phone number or not. |
| `type="integer"` | `integer` | 请输入整数 | Check the value is integer or not. |
| `type="url"` | `url` | 请输入正确的网址 | Check the value is url or not. |
| `type="date"`|`date` | 日期错误 | Check the value is date or not. |
| `required` |`required` | 必须填写 | Check the value is empty or not. |
| `pattern` | `pattern` | 请输入正确的值 | Check the value is match current pattern or not. Demo: `<input patter="abc">`, you have to input "abc" to match it. |
| `minlength` | `minlength`| 最小长度为{num} | Check the value's length is less than current min-length or not. The `{num}` is your specified value. |
| `maxlength` |`maxlength` | 最大长度为{num} | Check the value's length is greater than current max-length or not.  The `{num}` is your specified value. |
| `msg` | \ | \ | A JSON Object that can be specify the invalid message. |
| `errorMsgBoxHolder` | \ | \ | The error message holder, default: `body`. |

# Methods
* `_checkValidity` custom validator.

# Events
* `input-validator-default-holder` You can change your error message box's default holder by `e.value`;
```js
var e = new Event('input-validator-default-holder');
e.value = '.scroll';
document.dispatchEvent(e);
```
