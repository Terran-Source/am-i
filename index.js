const isFunction = function(obj) {
    return typeof obj === 'function';
  },
  isObject = function(obj) {
    return obj === Object(obj);
  },
  isArray = function(obj) {
    return Object.prototype.toString.call(obj) === '[object Array]';
  },
  isString = function(obj) {
    return typeof obj === 'string' || obj instanceof String;
  },
  isBoolean = function(obj) {
    return true === obj || false === obj;
  },
  isDate = function(dt) {
    return typeof dt === 'Date' || dt instanceof Date;
  },
  isUpperCase = function(s) {
    return s == s.toUpperCase();
  },
  isLowerCase = function(s) {
    return s == s.toLowerCase();
  },
  isNumber = function(str, ignoreString) {
    //var str = this;
    //return $.trim(str).replace(/(\r\n|\n|\r)/gm, "").replace(/[^a-zA-Z0-9]/g, '_');
    var _rex = /^[-]?(?=.)(?:\d+,)*\d*(?:\.\d+)?$/;
    if (true === ignoreString) return !isString(str) && _rex.test(str);
    return _rex.test(str) && _rex.test(parseFloat(str));
  };

// Don't extent Object.prototype with jquery. all hell's break loose
// read: http://erik.eae.net/archives/2005/06/06/22.13.54/
if (!Object.keys) {
  Object.keys = (function() {
    'use strict';
    var hasOwnProperty = Object.prototype.hasOwnProperty,
      hasDontEnumBug = !{ toString: null }.propertyIsEnumerable('toString'),
      dontEnums = [
        'toString',
        'toLocaleString',
        'valueOf',
        'hasOwnProperty',
        'isPrototypeOf',
        'propertyIsEnumerable',
        'constructor'
      ],
      dontEnumsLength = dontEnums.length;

    return function(obj) {
      if (
        typeof obj !== 'function' &&
        (typeof obj !== 'object' || obj === null)
      ) {
        throw new TypeError('Object.keys called on non-object');
      }

      var result = [],
        prop,
        i;

      for (var prop in obj) {
        if (hasOwnProperty.call(obj, prop)) {
          result.push(prop);
        }
      }

      if (hasDontEnumBug) {
        for (i = 0; i < dontEnumsLength; i++) {
          if (hasOwnProperty.call(obj, dontEnums[i])) {
            result.push(dontEnums[i]);
          }
        }
      }
      return result;
    };
  })();
}

if (!Object.properties) {
  Object.properties = (function() {
    'use strict';
    var hasOwnProperty = Object.prototype.hasOwnProperty;
    return function(obj) {
      if (!isObject(obj)) {
        // (typeof obj !== 'function' && (typeof obj !== 'object' || obj === null)) {
        throw new TypeError('Object.properties called on non-object');
      }
      var result = [];
      for (var prop in obj) {
        if (hasOwnProperty.call(obj, prop) && !isFunction(obj[prop]))
          result.push(prop);
      }
      return result;
    };
  })();
}

module.exports = {
  isFunction: isFunction,
  isObject: isObject,
  isArray: isArray,
  isString: isString,
  isBoolean: isBoolean,
  isDate: isDate,
  isUpperCase: isUpperCase,
  isLowerCase: isLowerCase,
  isNumber: isNumber
};
