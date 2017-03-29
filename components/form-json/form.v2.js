!(function() {
  /**
   * Override Submit method if enctype is application/json.
   */
  var originalSubmit = HTMLFormElement.prototype.submit;
  HTMLFormElement.prototype.submit = function () {
    if (this.getAttribute('enctype') === 'application/json') {
      if (isNotInMainDocumentBody(this)) {
        submitHandler({
          target: this,
          preventDefault: function() {}
        });
      } else {
        this.dispatchEvent(new CustomEvent('submit', {
          bubbles: true
        }));
      }
    } else {
      originalSubmit.apply(this, arguments);
    }
  };

  // Code form Zepto.js
  // @see https://github.com/madrobby/zepto/blob/master/src/form.js#files
  var serializeArray = function (form) {
    var name, type, result = [],
      add = function(value) {
        if (value.forEach) return value.forEach(add)
        result.push({ name: name, value: value })
      };

    [].slice.apply(form.elements || form.querySelectorAll('input,select,textarea')).forEach(function(field) {

      type = field.type, name = field.name
      if (name && field.nodeName.toLowerCase() !== 'fieldset' &&
        !field.disabled && type !== 'submit' && type !== 'reset' && type !== 'button' && type !== 'file' &&
        ((type !== 'radio' && type !== 'checkbox') || field.checked))
        add(field.value)
    })
    return result;
  }

  var serializeJSONForGET = function (res) {
    var keys = Object.keys(res || {});
    var arr = [];

    keys.forEach(function (key) {
      if (typeof res[key] === 'string') {
        arr.push(key + '=' + encodeURIComponent(res[key]));
      } else {
        arr.push(key + '=' + encodeURIComponent(JSON.stringify(res[key])));
      }
    });

    return arr.join('&');
  };

  /**
   * Use this component in webcomponents will not get BODY
   */
  var isNotInMainDocumentBody = function (ele) {
    var body = ele;
    while (body.nodeName !== 'BODY') {
      body = body.parentNode;
    }
    return body !== document.body;
  };

  /**
   * Set obj's value by keys
   * @param  {[object]}           obj   The target you want to set.
   * @param  {[array]}            keys  The value's path.
   * @param  {[string, array...]} value Target's value.
   * @return {[object]}                 The target after setting value.
   *
   * Example: obj = {'a':'a'}, keys = ['b','bb'], value = 'b-value'
   * return {
   *         'a': 'a',
   *         'b': {
   *           'bb': 'b-value'
   *          }
   *        }
   */
  var deepSet = function (obj, keys, value) {
    var curKey = keys[0];
    if (keys.length === 1) {
      curKey === '' ? obj.push(value) : obj[curKey] = value;
      return;
    }

    if (keys.length > 1 && obj[curKey] === undefined) {
      obj[curKey] = keys[1] === '' ? [] : {};
    }

    var o = obj[curKey];
    keys.shift();
    return deepSet(o, keys, value);
  };


  // TEST: integerKeysAsArrayIndexes
  // var json = integerKeysAsArrayIndexes({
  //   a: {
  //     0: {
  //       aa: "aa",
  //       bb: {
  //         0: "bb0",
  //         1: "bb1",
  //         3: "bb3"
  //       }
  //     },
  //     1: "a"
  //   },
  //   b: "b"
  // })
  // console.log(JSON.stringify(json));
  // var json = integerKeysAsArrayIndexes({
  //   0: "a",
  //   1: {
  //     "a": "b"
  //   }
  // })
  // console.log(JSON.stringify(json));

  var findIndex = function (names, keys, property) {
    return names.findIndex(function (name) {
      return new RegExp('^' + keys.concat(property).join('\\.')).test(name);
    });
  };

  var integerKeysAsArrayIndexes = function (form, obj, keys, value) {
    var allKeysIsInteger = true;
    var arr = [];
    var temp;
    var properties;

    keys = keys || [];
    value = value || obj;

    properties = Object.keys(value);

    // Sort by element
    if (form.getAttribute('orderby') === 'element') {
      properties.sort(function (a, b) {
        return findIndex(form.names, keys, a) > findIndex(form.names, keys, b);
      });
    }

    properties.forEach(function (property) {
      temp = keys.concat();

      if (isNaN(Number(property))) {
        allKeysIsInteger = false;
      } else {
        arr.push(value[property]);
      }
      temp.push(property);

      if ((typeof value[property] === 'object') && !Array.isArray(value[property])) {
        integerKeysAsArrayIndexes(form, obj, temp, value[property]);
      }
    });

    if (allKeysIsInteger) {
      if (keys.length === 0) {
        obj = arr;
      } else {
        deepSet(obj, keys, arr);
      }
    }
    return obj;
  };

  var serializeJSON = function (form) {
    var res = {};
    form.names = [];
    serializeArray(form).forEach(function (t) {
      /**
       * name could be:
       * a.b.c
       * a.b.c.
       * a.b.c:number
       */
      var keys = t.name.split('.');
      var value = t.value;
      var lastKeyIndex = keys.length - 1;
      var type = 'string';

      form.names.push(t.name);

      var match = keys[lastKeyIndex].match(/([^:]*):(.*)/);
      if (match) {
        keys[lastKeyIndex] = match[1];
        type = match[2];
      }

      if (type === 'number') {
        value = Number(value);
      } else if (type === 'datetime') {
        // var value = '2016-05-05 05:05:05';
        // Not an UTC-time. Convert it to an UTC-time.
        if (value.indexOf('T') === -1) {
          value = value.replace(' ', 'T');
          value = new Date(value + 'Z');
          value = new Date(value.getTime() + value.getTimezoneOffset() * 60 * 1000);

        // var value = '2016-05-05T05:05:05';
        // An UTC-time, just new it directly.
        } else {
          value = new Date(value + 'Z');
        }

        if (value.toString() === 'Invalid Date') {
          value = '';
        } else {
          value = value.getTime();
        }
      } else if (type === 'date') {
        value = new Date(value);
        if (value.toString() === 'Invalid Date') {
          value = '';
        } else {
          value = value.getTime();
        }
      } else if (type === 'bool' || type === 'boolean') {
        value = value === 'false' ? false : !!value;
      }
      deepSet(res, keys, value);
    })
    return res;
  };

  var submitHandler = function (e) {

    if (e.target.getAttribute('enctype') === 'application/json') {
      e.preventDefault();

      if (e.target.running) {
        console.log('form submiting. return.');
        return;
      }

      var form = e.target;
      var res = serializeJSON(form);
      res = integerKeysAsArrayIndexes(form, res);

      var method = form.getAttribute('method') || 'GET';

      if (method === 'GET') {
        res = serializeJSONForGET(res);
      } else {
        res = JSON.stringify(res);
      }

      /**
       *
       * AJAX request
       *
       */
      var xmlHttp = new XMLHttpRequest();
      var action = (action === undefined ? (form.getAttribute('action') || location.href) : action);

      if (method === 'GET') {
        action += action.indexOf('?') === -1 ? ('?' + res) : ('&' + res);
      }

      xmlHttp.open(method, action, true);
      xmlHttp.setRequestHeader('Content-Type', 'application/json');

      /**
      * Add session header for cross-domain request.
      * You can't set cookies for ajax
      * and you have to response #options request# like:
      * "Access-Control-Allow-Headers: X-CUSTOME-HEADERS"
      * before you send it.
      *
      * Call beforeSend function before send xhr.
      * */
      if (form.beforeSend) {
        form.beforeSend.call(form, xmlHttp);
      }

      xmlHttp.onreadystatechange = function () {
        if (xmlHttp.readyState === 4) {
          form.running = false;

          var detail = {
            allheaders: xmlHttp.getAllResponseHeaders(),
            status: xmlHttp.status,
            responseText: xmlHttp.responseText,
          }

          try {
            detail.body = JSON.parse(xmlHttp.responseText);
          } catch (e) {}

          form.dispatchEvent(new CustomEvent((xmlHttp.status >= 200 && xmlHttp.status < 300) ? 'ended' : 'error', {
            bubbles: true,
            detail: detail,
          }));
        }
      };

      form.running = true;
      if (method === 'GET') {
        xmlHttp.send();
      } else {
        xmlHttp.send(res);
      }
    }
  };

  document.addEventListener('submit', submitHandler);
})();
