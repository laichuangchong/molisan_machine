webpackJsonp([0],{

/***/ "./node_modules/babel-runtime/core-js/json/stringify.js":
/***/ (function(module, exports, __webpack_require__) {

module.exports = { "default": __webpack_require__("./node_modules/babel-runtime/node_modules/core-js/library/fn/json/stringify.js"), __esModule: true };

/***/ }),

/***/ "./node_modules/babel-runtime/core-js/object/assign.js":
/***/ (function(module, exports, __webpack_require__) {

module.exports = { "default": __webpack_require__("./node_modules/babel-runtime/node_modules/core-js/library/fn/object/assign.js"), __esModule: true };

/***/ }),

/***/ "./node_modules/babel-runtime/core-js/object/create.js":
/***/ (function(module, exports, __webpack_require__) {

module.exports = { "default": __webpack_require__("./node_modules/babel-runtime/node_modules/core-js/library/fn/object/create.js"), __esModule: true };

/***/ }),

/***/ "./node_modules/babel-runtime/core-js/object/define-property.js":
/***/ (function(module, exports, __webpack_require__) {

module.exports = { "default": __webpack_require__("./node_modules/babel-runtime/node_modules/core-js/library/fn/object/define-property.js"), __esModule: true };

/***/ }),

/***/ "./node_modules/babel-runtime/core-js/object/get-prototype-of.js":
/***/ (function(module, exports, __webpack_require__) {

module.exports = { "default": __webpack_require__("./node_modules/babel-runtime/node_modules/core-js/library/fn/object/get-prototype-of.js"), __esModule: true };

/***/ }),

/***/ "./node_modules/babel-runtime/core-js/object/keys.js":
/***/ (function(module, exports, __webpack_require__) {

module.exports = { "default": __webpack_require__("./node_modules/babel-runtime/node_modules/core-js/library/fn/object/keys.js"), __esModule: true };

/***/ }),

/***/ "./node_modules/babel-runtime/core-js/object/set-prototype-of.js":
/***/ (function(module, exports, __webpack_require__) {

module.exports = { "default": __webpack_require__("./node_modules/babel-runtime/node_modules/core-js/library/fn/object/set-prototype-of.js"), __esModule: true };

/***/ }),

/***/ "./node_modules/babel-runtime/core-js/symbol.js":
/***/ (function(module, exports, __webpack_require__) {

module.exports = { "default": __webpack_require__("./node_modules/babel-runtime/node_modules/core-js/library/fn/symbol/index.js"), __esModule: true };

/***/ }),

/***/ "./node_modules/babel-runtime/core-js/symbol/iterator.js":
/***/ (function(module, exports, __webpack_require__) {

module.exports = { "default": __webpack_require__("./node_modules/babel-runtime/node_modules/core-js/library/fn/symbol/iterator.js"), __esModule: true };

/***/ }),

/***/ "./node_modules/babel-runtime/helpers/classCallCheck.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;

exports.default = function (instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
};

/***/ }),

/***/ "./node_modules/babel-runtime/helpers/createClass.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;

var _defineProperty = __webpack_require__("./node_modules/babel-runtime/core-js/object/define-property.js");

var _defineProperty2 = _interopRequireDefault(_defineProperty);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = function () {
  function defineProperties(target, props) {
    for (var i = 0; i < props.length; i++) {
      var descriptor = props[i];
      descriptor.enumerable = descriptor.enumerable || false;
      descriptor.configurable = true;
      if ("value" in descriptor) descriptor.writable = true;
      (0, _defineProperty2.default)(target, descriptor.key, descriptor);
    }
  }

  return function (Constructor, protoProps, staticProps) {
    if (protoProps) defineProperties(Constructor.prototype, protoProps);
    if (staticProps) defineProperties(Constructor, staticProps);
    return Constructor;
  };
}();

/***/ }),

/***/ "./node_modules/babel-runtime/helpers/defineProperty.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;

var _defineProperty = __webpack_require__("./node_modules/babel-runtime/core-js/object/define-property.js");

var _defineProperty2 = _interopRequireDefault(_defineProperty);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = function (obj, key, value) {
  if (key in obj) {
    (0, _defineProperty2.default)(obj, key, {
      value: value,
      enumerable: true,
      configurable: true,
      writable: true
    });
  } else {
    obj[key] = value;
  }

  return obj;
};

/***/ }),

/***/ "./node_modules/babel-runtime/helpers/extends.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;

var _assign = __webpack_require__("./node_modules/babel-runtime/core-js/object/assign.js");

var _assign2 = _interopRequireDefault(_assign);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = _assign2.default || function (target) {
  for (var i = 1; i < arguments.length; i++) {
    var source = arguments[i];

    for (var key in source) {
      if (Object.prototype.hasOwnProperty.call(source, key)) {
        target[key] = source[key];
      }
    }
  }

  return target;
};

/***/ }),

/***/ "./node_modules/babel-runtime/helpers/inherits.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;

var _setPrototypeOf = __webpack_require__("./node_modules/babel-runtime/core-js/object/set-prototype-of.js");

var _setPrototypeOf2 = _interopRequireDefault(_setPrototypeOf);

var _create = __webpack_require__("./node_modules/babel-runtime/core-js/object/create.js");

var _create2 = _interopRequireDefault(_create);

var _typeof2 = __webpack_require__("./node_modules/babel-runtime/helpers/typeof.js");

var _typeof3 = _interopRequireDefault(_typeof2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = function (subClass, superClass) {
  if (typeof superClass !== "function" && superClass !== null) {
    throw new TypeError("Super expression must either be null or a function, not " + (typeof superClass === "undefined" ? "undefined" : (0, _typeof3.default)(superClass)));
  }

  subClass.prototype = (0, _create2.default)(superClass && superClass.prototype, {
    constructor: {
      value: subClass,
      enumerable: false,
      writable: true,
      configurable: true
    }
  });
  if (superClass) _setPrototypeOf2.default ? (0, _setPrototypeOf2.default)(subClass, superClass) : subClass.__proto__ = superClass;
};

/***/ }),

/***/ "./node_modules/babel-runtime/helpers/objectWithoutProperties.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;

exports.default = function (obj, keys) {
  var target = {};

  for (var i in obj) {
    if (keys.indexOf(i) >= 0) continue;
    if (!Object.prototype.hasOwnProperty.call(obj, i)) continue;
    target[i] = obj[i];
  }

  return target;
};

/***/ }),

/***/ "./node_modules/babel-runtime/helpers/possibleConstructorReturn.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;

var _typeof2 = __webpack_require__("./node_modules/babel-runtime/helpers/typeof.js");

var _typeof3 = _interopRequireDefault(_typeof2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = function (self, call) {
  if (!self) {
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  }

  return call && ((typeof call === "undefined" ? "undefined" : (0, _typeof3.default)(call)) === "object" || typeof call === "function") ? call : self;
};

/***/ }),

/***/ "./node_modules/babel-runtime/helpers/typeof.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;

var _iterator = __webpack_require__("./node_modules/babel-runtime/core-js/symbol/iterator.js");

var _iterator2 = _interopRequireDefault(_iterator);

var _symbol = __webpack_require__("./node_modules/babel-runtime/core-js/symbol.js");

var _symbol2 = _interopRequireDefault(_symbol);

var _typeof = typeof _symbol2.default === "function" && typeof _iterator2.default === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof _symbol2.default === "function" && obj.constructor === _symbol2.default && obj !== _symbol2.default.prototype ? "symbol" : typeof obj; };

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = typeof _symbol2.default === "function" && _typeof(_iterator2.default) === "symbol" ? function (obj) {
  return typeof obj === "undefined" ? "undefined" : _typeof(obj);
} : function (obj) {
  return obj && typeof _symbol2.default === "function" && obj.constructor === _symbol2.default && obj !== _symbol2.default.prototype ? "symbol" : typeof obj === "undefined" ? "undefined" : _typeof(obj);
};

/***/ }),

/***/ "./node_modules/babel-runtime/node_modules/core-js/library/fn/json/stringify.js":
/***/ (function(module, exports, __webpack_require__) {

var core = __webpack_require__("./node_modules/babel-runtime/node_modules/core-js/library/modules/_core.js");
var $JSON = core.JSON || (core.JSON = { stringify: JSON.stringify });
module.exports = function stringify(it) { // eslint-disable-line no-unused-vars
  return $JSON.stringify.apply($JSON, arguments);
};


/***/ }),

/***/ "./node_modules/babel-runtime/node_modules/core-js/library/fn/object/assign.js":
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__("./node_modules/babel-runtime/node_modules/core-js/library/modules/es6.object.assign.js");
module.exports = __webpack_require__("./node_modules/babel-runtime/node_modules/core-js/library/modules/_core.js").Object.assign;


/***/ }),

/***/ "./node_modules/babel-runtime/node_modules/core-js/library/fn/object/create.js":
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__("./node_modules/babel-runtime/node_modules/core-js/library/modules/es6.object.create.js");
var $Object = __webpack_require__("./node_modules/babel-runtime/node_modules/core-js/library/modules/_core.js").Object;
module.exports = function create(P, D) {
  return $Object.create(P, D);
};


/***/ }),

/***/ "./node_modules/babel-runtime/node_modules/core-js/library/fn/object/define-property.js":
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__("./node_modules/babel-runtime/node_modules/core-js/library/modules/es6.object.define-property.js");
var $Object = __webpack_require__("./node_modules/babel-runtime/node_modules/core-js/library/modules/_core.js").Object;
module.exports = function defineProperty(it, key, desc) {
  return $Object.defineProperty(it, key, desc);
};


/***/ }),

/***/ "./node_modules/babel-runtime/node_modules/core-js/library/fn/object/get-prototype-of.js":
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__("./node_modules/babel-runtime/node_modules/core-js/library/modules/es6.object.get-prototype-of.js");
module.exports = __webpack_require__("./node_modules/babel-runtime/node_modules/core-js/library/modules/_core.js").Object.getPrototypeOf;


/***/ }),

/***/ "./node_modules/babel-runtime/node_modules/core-js/library/fn/object/keys.js":
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__("./node_modules/babel-runtime/node_modules/core-js/library/modules/es6.object.keys.js");
module.exports = __webpack_require__("./node_modules/babel-runtime/node_modules/core-js/library/modules/_core.js").Object.keys;


/***/ }),

/***/ "./node_modules/babel-runtime/node_modules/core-js/library/fn/object/set-prototype-of.js":
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__("./node_modules/babel-runtime/node_modules/core-js/library/modules/es6.object.set-prototype-of.js");
module.exports = __webpack_require__("./node_modules/babel-runtime/node_modules/core-js/library/modules/_core.js").Object.setPrototypeOf;


/***/ }),

/***/ "./node_modules/babel-runtime/node_modules/core-js/library/fn/symbol/index.js":
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__("./node_modules/babel-runtime/node_modules/core-js/library/modules/es6.symbol.js");
__webpack_require__("./node_modules/babel-runtime/node_modules/core-js/library/modules/es6.object.to-string.js");
__webpack_require__("./node_modules/babel-runtime/node_modules/core-js/library/modules/es7.symbol.async-iterator.js");
__webpack_require__("./node_modules/babel-runtime/node_modules/core-js/library/modules/es7.symbol.observable.js");
module.exports = __webpack_require__("./node_modules/babel-runtime/node_modules/core-js/library/modules/_core.js").Symbol;


/***/ }),

/***/ "./node_modules/babel-runtime/node_modules/core-js/library/fn/symbol/iterator.js":
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__("./node_modules/babel-runtime/node_modules/core-js/library/modules/es6.string.iterator.js");
__webpack_require__("./node_modules/babel-runtime/node_modules/core-js/library/modules/web.dom.iterable.js");
module.exports = __webpack_require__("./node_modules/babel-runtime/node_modules/core-js/library/modules/_wks-ext.js").f('iterator');


/***/ }),

/***/ "./node_modules/babel-runtime/node_modules/core-js/library/modules/_a-function.js":
/***/ (function(module, exports) {

module.exports = function (it) {
  if (typeof it != 'function') throw TypeError(it + ' is not a function!');
  return it;
};


/***/ }),

/***/ "./node_modules/babel-runtime/node_modules/core-js/library/modules/_add-to-unscopables.js":
/***/ (function(module, exports) {

module.exports = function () { /* empty */ };


/***/ }),

/***/ "./node_modules/babel-runtime/node_modules/core-js/library/modules/_an-object.js":
/***/ (function(module, exports, __webpack_require__) {

var isObject = __webpack_require__("./node_modules/babel-runtime/node_modules/core-js/library/modules/_is-object.js");
module.exports = function (it) {
  if (!isObject(it)) throw TypeError(it + ' is not an object!');
  return it;
};


/***/ }),

/***/ "./node_modules/babel-runtime/node_modules/core-js/library/modules/_array-includes.js":
/***/ (function(module, exports, __webpack_require__) {

// false -> Array#indexOf
// true  -> Array#includes
var toIObject = __webpack_require__("./node_modules/babel-runtime/node_modules/core-js/library/modules/_to-iobject.js");
var toLength = __webpack_require__("./node_modules/babel-runtime/node_modules/core-js/library/modules/_to-length.js");
var toAbsoluteIndex = __webpack_require__("./node_modules/babel-runtime/node_modules/core-js/library/modules/_to-absolute-index.js");
module.exports = function (IS_INCLUDES) {
  return function ($this, el, fromIndex) {
    var O = toIObject($this);
    var length = toLength(O.length);
    var index = toAbsoluteIndex(fromIndex, length);
    var value;
    // Array#includes uses SameValueZero equality algorithm
    // eslint-disable-next-line no-self-compare
    if (IS_INCLUDES && el != el) while (length > index) {
      value = O[index++];
      // eslint-disable-next-line no-self-compare
      if (value != value) return true;
    // Array#indexOf ignores holes, Array#includes - not
    } else for (;length > index; index++) if (IS_INCLUDES || index in O) {
      if (O[index] === el) return IS_INCLUDES || index || 0;
    } return !IS_INCLUDES && -1;
  };
};


/***/ }),

/***/ "./node_modules/babel-runtime/node_modules/core-js/library/modules/_cof.js":
/***/ (function(module, exports) {

var toString = {}.toString;

module.exports = function (it) {
  return toString.call(it).slice(8, -1);
};


/***/ }),

/***/ "./node_modules/babel-runtime/node_modules/core-js/library/modules/_core.js":
/***/ (function(module, exports) {

var core = module.exports = { version: '2.5.1' };
if (typeof __e == 'number') __e = core; // eslint-disable-line no-undef


/***/ }),

/***/ "./node_modules/babel-runtime/node_modules/core-js/library/modules/_ctx.js":
/***/ (function(module, exports, __webpack_require__) {

// optional / simple context binding
var aFunction = __webpack_require__("./node_modules/babel-runtime/node_modules/core-js/library/modules/_a-function.js");
module.exports = function (fn, that, length) {
  aFunction(fn);
  if (that === undefined) return fn;
  switch (length) {
    case 1: return function (a) {
      return fn.call(that, a);
    };
    case 2: return function (a, b) {
      return fn.call(that, a, b);
    };
    case 3: return function (a, b, c) {
      return fn.call(that, a, b, c);
    };
  }
  return function (/* ...args */) {
    return fn.apply(that, arguments);
  };
};


/***/ }),

/***/ "./node_modules/babel-runtime/node_modules/core-js/library/modules/_defined.js":
/***/ (function(module, exports) {

// 7.2.1 RequireObjectCoercible(argument)
module.exports = function (it) {
  if (it == undefined) throw TypeError("Can't call method on  " + it);
  return it;
};


/***/ }),

/***/ "./node_modules/babel-runtime/node_modules/core-js/library/modules/_descriptors.js":
/***/ (function(module, exports, __webpack_require__) {

// Thank's IE8 for his funny defineProperty
module.exports = !__webpack_require__("./node_modules/babel-runtime/node_modules/core-js/library/modules/_fails.js")(function () {
  return Object.defineProperty({}, 'a', { get: function () { return 7; } }).a != 7;
});


/***/ }),

/***/ "./node_modules/babel-runtime/node_modules/core-js/library/modules/_dom-create.js":
/***/ (function(module, exports, __webpack_require__) {

var isObject = __webpack_require__("./node_modules/babel-runtime/node_modules/core-js/library/modules/_is-object.js");
var document = __webpack_require__("./node_modules/babel-runtime/node_modules/core-js/library/modules/_global.js").document;
// typeof document.createElement is 'object' in old IE
var is = isObject(document) && isObject(document.createElement);
module.exports = function (it) {
  return is ? document.createElement(it) : {};
};


/***/ }),

/***/ "./node_modules/babel-runtime/node_modules/core-js/library/modules/_enum-bug-keys.js":
/***/ (function(module, exports) {

// IE 8- don't enum bug keys
module.exports = (
  'constructor,hasOwnProperty,isPrototypeOf,propertyIsEnumerable,toLocaleString,toString,valueOf'
).split(',');


/***/ }),

/***/ "./node_modules/babel-runtime/node_modules/core-js/library/modules/_enum-keys.js":
/***/ (function(module, exports, __webpack_require__) {

// all enumerable object keys, includes symbols
var getKeys = __webpack_require__("./node_modules/babel-runtime/node_modules/core-js/library/modules/_object-keys.js");
var gOPS = __webpack_require__("./node_modules/babel-runtime/node_modules/core-js/library/modules/_object-gops.js");
var pIE = __webpack_require__("./node_modules/babel-runtime/node_modules/core-js/library/modules/_object-pie.js");
module.exports = function (it) {
  var result = getKeys(it);
  var getSymbols = gOPS.f;
  if (getSymbols) {
    var symbols = getSymbols(it);
    var isEnum = pIE.f;
    var i = 0;
    var key;
    while (symbols.length > i) if (isEnum.call(it, key = symbols[i++])) result.push(key);
  } return result;
};


/***/ }),

/***/ "./node_modules/babel-runtime/node_modules/core-js/library/modules/_export.js":
/***/ (function(module, exports, __webpack_require__) {

var global = __webpack_require__("./node_modules/babel-runtime/node_modules/core-js/library/modules/_global.js");
var core = __webpack_require__("./node_modules/babel-runtime/node_modules/core-js/library/modules/_core.js");
var ctx = __webpack_require__("./node_modules/babel-runtime/node_modules/core-js/library/modules/_ctx.js");
var hide = __webpack_require__("./node_modules/babel-runtime/node_modules/core-js/library/modules/_hide.js");
var PROTOTYPE = 'prototype';

var $export = function (type, name, source) {
  var IS_FORCED = type & $export.F;
  var IS_GLOBAL = type & $export.G;
  var IS_STATIC = type & $export.S;
  var IS_PROTO = type & $export.P;
  var IS_BIND = type & $export.B;
  var IS_WRAP = type & $export.W;
  var exports = IS_GLOBAL ? core : core[name] || (core[name] = {});
  var expProto = exports[PROTOTYPE];
  var target = IS_GLOBAL ? global : IS_STATIC ? global[name] : (global[name] || {})[PROTOTYPE];
  var key, own, out;
  if (IS_GLOBAL) source = name;
  for (key in source) {
    // contains in native
    own = !IS_FORCED && target && target[key] !== undefined;
    if (own && key in exports) continue;
    // export native or passed
    out = own ? target[key] : source[key];
    // prevent global pollution for namespaces
    exports[key] = IS_GLOBAL && typeof target[key] != 'function' ? source[key]
    // bind timers to global for call from export context
    : IS_BIND && own ? ctx(out, global)
    // wrap global constructors for prevent change them in library
    : IS_WRAP && target[key] == out ? (function (C) {
      var F = function (a, b, c) {
        if (this instanceof C) {
          switch (arguments.length) {
            case 0: return new C();
            case 1: return new C(a);
            case 2: return new C(a, b);
          } return new C(a, b, c);
        } return C.apply(this, arguments);
      };
      F[PROTOTYPE] = C[PROTOTYPE];
      return F;
    // make static versions for prototype methods
    })(out) : IS_PROTO && typeof out == 'function' ? ctx(Function.call, out) : out;
    // export proto methods to core.%CONSTRUCTOR%.methods.%NAME%
    if (IS_PROTO) {
      (exports.virtual || (exports.virtual = {}))[key] = out;
      // export proto methods to core.%CONSTRUCTOR%.prototype.%NAME%
      if (type & $export.R && expProto && !expProto[key]) hide(expProto, key, out);
    }
  }
};
// type bitmap
$export.F = 1;   // forced
$export.G = 2;   // global
$export.S = 4;   // static
$export.P = 8;   // proto
$export.B = 16;  // bind
$export.W = 32;  // wrap
$export.U = 64;  // safe
$export.R = 128; // real proto method for `library`
module.exports = $export;


/***/ }),

/***/ "./node_modules/babel-runtime/node_modules/core-js/library/modules/_fails.js":
/***/ (function(module, exports) {

module.exports = function (exec) {
  try {
    return !!exec();
  } catch (e) {
    return true;
  }
};


/***/ }),

/***/ "./node_modules/babel-runtime/node_modules/core-js/library/modules/_global.js":
/***/ (function(module, exports) {

// https://github.com/zloirock/core-js/issues/86#issuecomment-115759028
var global = module.exports = typeof window != 'undefined' && window.Math == Math
  ? window : typeof self != 'undefined' && self.Math == Math ? self
  // eslint-disable-next-line no-new-func
  : Function('return this')();
if (typeof __g == 'number') __g = global; // eslint-disable-line no-undef


/***/ }),

/***/ "./node_modules/babel-runtime/node_modules/core-js/library/modules/_has.js":
/***/ (function(module, exports) {

var hasOwnProperty = {}.hasOwnProperty;
module.exports = function (it, key) {
  return hasOwnProperty.call(it, key);
};


/***/ }),

/***/ "./node_modules/babel-runtime/node_modules/core-js/library/modules/_hide.js":
/***/ (function(module, exports, __webpack_require__) {

var dP = __webpack_require__("./node_modules/babel-runtime/node_modules/core-js/library/modules/_object-dp.js");
var createDesc = __webpack_require__("./node_modules/babel-runtime/node_modules/core-js/library/modules/_property-desc.js");
module.exports = __webpack_require__("./node_modules/babel-runtime/node_modules/core-js/library/modules/_descriptors.js") ? function (object, key, value) {
  return dP.f(object, key, createDesc(1, value));
} : function (object, key, value) {
  object[key] = value;
  return object;
};


/***/ }),

/***/ "./node_modules/babel-runtime/node_modules/core-js/library/modules/_html.js":
/***/ (function(module, exports, __webpack_require__) {

var document = __webpack_require__("./node_modules/babel-runtime/node_modules/core-js/library/modules/_global.js").document;
module.exports = document && document.documentElement;


/***/ }),

/***/ "./node_modules/babel-runtime/node_modules/core-js/library/modules/_ie8-dom-define.js":
/***/ (function(module, exports, __webpack_require__) {

module.exports = !__webpack_require__("./node_modules/babel-runtime/node_modules/core-js/library/modules/_descriptors.js") && !__webpack_require__("./node_modules/babel-runtime/node_modules/core-js/library/modules/_fails.js")(function () {
  return Object.defineProperty(__webpack_require__("./node_modules/babel-runtime/node_modules/core-js/library/modules/_dom-create.js")('div'), 'a', { get: function () { return 7; } }).a != 7;
});


/***/ }),

/***/ "./node_modules/babel-runtime/node_modules/core-js/library/modules/_iobject.js":
/***/ (function(module, exports, __webpack_require__) {

// fallback for non-array-like ES3 and non-enumerable old V8 strings
var cof = __webpack_require__("./node_modules/babel-runtime/node_modules/core-js/library/modules/_cof.js");
// eslint-disable-next-line no-prototype-builtins
module.exports = Object('z').propertyIsEnumerable(0) ? Object : function (it) {
  return cof(it) == 'String' ? it.split('') : Object(it);
};


/***/ }),

/***/ "./node_modules/babel-runtime/node_modules/core-js/library/modules/_is-array.js":
/***/ (function(module, exports, __webpack_require__) {

// 7.2.2 IsArray(argument)
var cof = __webpack_require__("./node_modules/babel-runtime/node_modules/core-js/library/modules/_cof.js");
module.exports = Array.isArray || function isArray(arg) {
  return cof(arg) == 'Array';
};


/***/ }),

/***/ "./node_modules/babel-runtime/node_modules/core-js/library/modules/_is-object.js":
/***/ (function(module, exports) {

module.exports = function (it) {
  return typeof it === 'object' ? it !== null : typeof it === 'function';
};


/***/ }),

/***/ "./node_modules/babel-runtime/node_modules/core-js/library/modules/_iter-create.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var create = __webpack_require__("./node_modules/babel-runtime/node_modules/core-js/library/modules/_object-create.js");
var descriptor = __webpack_require__("./node_modules/babel-runtime/node_modules/core-js/library/modules/_property-desc.js");
var setToStringTag = __webpack_require__("./node_modules/babel-runtime/node_modules/core-js/library/modules/_set-to-string-tag.js");
var IteratorPrototype = {};

// 25.1.2.1.1 %IteratorPrototype%[@@iterator]()
__webpack_require__("./node_modules/babel-runtime/node_modules/core-js/library/modules/_hide.js")(IteratorPrototype, __webpack_require__("./node_modules/babel-runtime/node_modules/core-js/library/modules/_wks.js")('iterator'), function () { return this; });

module.exports = function (Constructor, NAME, next) {
  Constructor.prototype = create(IteratorPrototype, { next: descriptor(1, next) });
  setToStringTag(Constructor, NAME + ' Iterator');
};


/***/ }),

/***/ "./node_modules/babel-runtime/node_modules/core-js/library/modules/_iter-define.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var LIBRARY = __webpack_require__("./node_modules/babel-runtime/node_modules/core-js/library/modules/_library.js");
var $export = __webpack_require__("./node_modules/babel-runtime/node_modules/core-js/library/modules/_export.js");
var redefine = __webpack_require__("./node_modules/babel-runtime/node_modules/core-js/library/modules/_redefine.js");
var hide = __webpack_require__("./node_modules/babel-runtime/node_modules/core-js/library/modules/_hide.js");
var has = __webpack_require__("./node_modules/babel-runtime/node_modules/core-js/library/modules/_has.js");
var Iterators = __webpack_require__("./node_modules/babel-runtime/node_modules/core-js/library/modules/_iterators.js");
var $iterCreate = __webpack_require__("./node_modules/babel-runtime/node_modules/core-js/library/modules/_iter-create.js");
var setToStringTag = __webpack_require__("./node_modules/babel-runtime/node_modules/core-js/library/modules/_set-to-string-tag.js");
var getPrototypeOf = __webpack_require__("./node_modules/babel-runtime/node_modules/core-js/library/modules/_object-gpo.js");
var ITERATOR = __webpack_require__("./node_modules/babel-runtime/node_modules/core-js/library/modules/_wks.js")('iterator');
var BUGGY = !([].keys && 'next' in [].keys()); // Safari has buggy iterators w/o `next`
var FF_ITERATOR = '@@iterator';
var KEYS = 'keys';
var VALUES = 'values';

var returnThis = function () { return this; };

module.exports = function (Base, NAME, Constructor, next, DEFAULT, IS_SET, FORCED) {
  $iterCreate(Constructor, NAME, next);
  var getMethod = function (kind) {
    if (!BUGGY && kind in proto) return proto[kind];
    switch (kind) {
      case KEYS: return function keys() { return new Constructor(this, kind); };
      case VALUES: return function values() { return new Constructor(this, kind); };
    } return function entries() { return new Constructor(this, kind); };
  };
  var TAG = NAME + ' Iterator';
  var DEF_VALUES = DEFAULT == VALUES;
  var VALUES_BUG = false;
  var proto = Base.prototype;
  var $native = proto[ITERATOR] || proto[FF_ITERATOR] || DEFAULT && proto[DEFAULT];
  var $default = $native || getMethod(DEFAULT);
  var $entries = DEFAULT ? !DEF_VALUES ? $default : getMethod('entries') : undefined;
  var $anyNative = NAME == 'Array' ? proto.entries || $native : $native;
  var methods, key, IteratorPrototype;
  // Fix native
  if ($anyNative) {
    IteratorPrototype = getPrototypeOf($anyNative.call(new Base()));
    if (IteratorPrototype !== Object.prototype && IteratorPrototype.next) {
      // Set @@toStringTag to native iterators
      setToStringTag(IteratorPrototype, TAG, true);
      // fix for some old engines
      if (!LIBRARY && !has(IteratorPrototype, ITERATOR)) hide(IteratorPrototype, ITERATOR, returnThis);
    }
  }
  // fix Array#{values, @@iterator}.name in V8 / FF
  if (DEF_VALUES && $native && $native.name !== VALUES) {
    VALUES_BUG = true;
    $default = function values() { return $native.call(this); };
  }
  // Define iterator
  if ((!LIBRARY || FORCED) && (BUGGY || VALUES_BUG || !proto[ITERATOR])) {
    hide(proto, ITERATOR, $default);
  }
  // Plug for library
  Iterators[NAME] = $default;
  Iterators[TAG] = returnThis;
  if (DEFAULT) {
    methods = {
      values: DEF_VALUES ? $default : getMethod(VALUES),
      keys: IS_SET ? $default : getMethod(KEYS),
      entries: $entries
    };
    if (FORCED) for (key in methods) {
      if (!(key in proto)) redefine(proto, key, methods[key]);
    } else $export($export.P + $export.F * (BUGGY || VALUES_BUG), NAME, methods);
  }
  return methods;
};


/***/ }),

/***/ "./node_modules/babel-runtime/node_modules/core-js/library/modules/_iter-step.js":
/***/ (function(module, exports) {

module.exports = function (done, value) {
  return { value: value, done: !!done };
};


/***/ }),

/***/ "./node_modules/babel-runtime/node_modules/core-js/library/modules/_iterators.js":
/***/ (function(module, exports) {

module.exports = {};


/***/ }),

/***/ "./node_modules/babel-runtime/node_modules/core-js/library/modules/_library.js":
/***/ (function(module, exports) {

module.exports = true;


/***/ }),

/***/ "./node_modules/babel-runtime/node_modules/core-js/library/modules/_meta.js":
/***/ (function(module, exports, __webpack_require__) {

var META = __webpack_require__("./node_modules/babel-runtime/node_modules/core-js/library/modules/_uid.js")('meta');
var isObject = __webpack_require__("./node_modules/babel-runtime/node_modules/core-js/library/modules/_is-object.js");
var has = __webpack_require__("./node_modules/babel-runtime/node_modules/core-js/library/modules/_has.js");
var setDesc = __webpack_require__("./node_modules/babel-runtime/node_modules/core-js/library/modules/_object-dp.js").f;
var id = 0;
var isExtensible = Object.isExtensible || function () {
  return true;
};
var FREEZE = !__webpack_require__("./node_modules/babel-runtime/node_modules/core-js/library/modules/_fails.js")(function () {
  return isExtensible(Object.preventExtensions({}));
});
var setMeta = function (it) {
  setDesc(it, META, { value: {
    i: 'O' + ++id, // object ID
    w: {}          // weak collections IDs
  } });
};
var fastKey = function (it, create) {
  // return primitive with prefix
  if (!isObject(it)) return typeof it == 'symbol' ? it : (typeof it == 'string' ? 'S' : 'P') + it;
  if (!has(it, META)) {
    // can't set metadata to uncaught frozen object
    if (!isExtensible(it)) return 'F';
    // not necessary to add metadata
    if (!create) return 'E';
    // add missing metadata
    setMeta(it);
  // return object ID
  } return it[META].i;
};
var getWeak = function (it, create) {
  if (!has(it, META)) {
    // can't set metadata to uncaught frozen object
    if (!isExtensible(it)) return true;
    // not necessary to add metadata
    if (!create) return false;
    // add missing metadata
    setMeta(it);
  // return hash weak collections IDs
  } return it[META].w;
};
// add metadata on freeze-family methods calling
var onFreeze = function (it) {
  if (FREEZE && meta.NEED && isExtensible(it) && !has(it, META)) setMeta(it);
  return it;
};
var meta = module.exports = {
  KEY: META,
  NEED: false,
  fastKey: fastKey,
  getWeak: getWeak,
  onFreeze: onFreeze
};


/***/ }),

/***/ "./node_modules/babel-runtime/node_modules/core-js/library/modules/_object-assign.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

// 19.1.2.1 Object.assign(target, source, ...)
var getKeys = __webpack_require__("./node_modules/babel-runtime/node_modules/core-js/library/modules/_object-keys.js");
var gOPS = __webpack_require__("./node_modules/babel-runtime/node_modules/core-js/library/modules/_object-gops.js");
var pIE = __webpack_require__("./node_modules/babel-runtime/node_modules/core-js/library/modules/_object-pie.js");
var toObject = __webpack_require__("./node_modules/babel-runtime/node_modules/core-js/library/modules/_to-object.js");
var IObject = __webpack_require__("./node_modules/babel-runtime/node_modules/core-js/library/modules/_iobject.js");
var $assign = Object.assign;

// should work with symbols and should have deterministic property order (V8 bug)
module.exports = !$assign || __webpack_require__("./node_modules/babel-runtime/node_modules/core-js/library/modules/_fails.js")(function () {
  var A = {};
  var B = {};
  // eslint-disable-next-line no-undef
  var S = Symbol();
  var K = 'abcdefghijklmnopqrst';
  A[S] = 7;
  K.split('').forEach(function (k) { B[k] = k; });
  return $assign({}, A)[S] != 7 || Object.keys($assign({}, B)).join('') != K;
}) ? function assign(target, source) { // eslint-disable-line no-unused-vars
  var T = toObject(target);
  var aLen = arguments.length;
  var index = 1;
  var getSymbols = gOPS.f;
  var isEnum = pIE.f;
  while (aLen > index) {
    var S = IObject(arguments[index++]);
    var keys = getSymbols ? getKeys(S).concat(getSymbols(S)) : getKeys(S);
    var length = keys.length;
    var j = 0;
    var key;
    while (length > j) if (isEnum.call(S, key = keys[j++])) T[key] = S[key];
  } return T;
} : $assign;


/***/ }),

/***/ "./node_modules/babel-runtime/node_modules/core-js/library/modules/_object-create.js":
/***/ (function(module, exports, __webpack_require__) {

// 19.1.2.2 / 15.2.3.5 Object.create(O [, Properties])
var anObject = __webpack_require__("./node_modules/babel-runtime/node_modules/core-js/library/modules/_an-object.js");
var dPs = __webpack_require__("./node_modules/babel-runtime/node_modules/core-js/library/modules/_object-dps.js");
var enumBugKeys = __webpack_require__("./node_modules/babel-runtime/node_modules/core-js/library/modules/_enum-bug-keys.js");
var IE_PROTO = __webpack_require__("./node_modules/babel-runtime/node_modules/core-js/library/modules/_shared-key.js")('IE_PROTO');
var Empty = function () { /* empty */ };
var PROTOTYPE = 'prototype';

// Create object with fake `null` prototype: use iframe Object with cleared prototype
var createDict = function () {
  // Thrash, waste and sodomy: IE GC bug
  var iframe = __webpack_require__("./node_modules/babel-runtime/node_modules/core-js/library/modules/_dom-create.js")('iframe');
  var i = enumBugKeys.length;
  var lt = '<';
  var gt = '>';
  var iframeDocument;
  iframe.style.display = 'none';
  __webpack_require__("./node_modules/babel-runtime/node_modules/core-js/library/modules/_html.js").appendChild(iframe);
  iframe.src = 'javascript:'; // eslint-disable-line no-script-url
  // createDict = iframe.contentWindow.Object;
  // html.removeChild(iframe);
  iframeDocument = iframe.contentWindow.document;
  iframeDocument.open();
  iframeDocument.write(lt + 'script' + gt + 'document.F=Object' + lt + '/script' + gt);
  iframeDocument.close();
  createDict = iframeDocument.F;
  while (i--) delete createDict[PROTOTYPE][enumBugKeys[i]];
  return createDict();
};

module.exports = Object.create || function create(O, Properties) {
  var result;
  if (O !== null) {
    Empty[PROTOTYPE] = anObject(O);
    result = new Empty();
    Empty[PROTOTYPE] = null;
    // add "__proto__" for Object.getPrototypeOf polyfill
    result[IE_PROTO] = O;
  } else result = createDict();
  return Properties === undefined ? result : dPs(result, Properties);
};


/***/ }),

/***/ "./node_modules/babel-runtime/node_modules/core-js/library/modules/_object-dp.js":
/***/ (function(module, exports, __webpack_require__) {

var anObject = __webpack_require__("./node_modules/babel-runtime/node_modules/core-js/library/modules/_an-object.js");
var IE8_DOM_DEFINE = __webpack_require__("./node_modules/babel-runtime/node_modules/core-js/library/modules/_ie8-dom-define.js");
var toPrimitive = __webpack_require__("./node_modules/babel-runtime/node_modules/core-js/library/modules/_to-primitive.js");
var dP = Object.defineProperty;

exports.f = __webpack_require__("./node_modules/babel-runtime/node_modules/core-js/library/modules/_descriptors.js") ? Object.defineProperty : function defineProperty(O, P, Attributes) {
  anObject(O);
  P = toPrimitive(P, true);
  anObject(Attributes);
  if (IE8_DOM_DEFINE) try {
    return dP(O, P, Attributes);
  } catch (e) { /* empty */ }
  if ('get' in Attributes || 'set' in Attributes) throw TypeError('Accessors not supported!');
  if ('value' in Attributes) O[P] = Attributes.value;
  return O;
};


/***/ }),

/***/ "./node_modules/babel-runtime/node_modules/core-js/library/modules/_object-dps.js":
/***/ (function(module, exports, __webpack_require__) {

var dP = __webpack_require__("./node_modules/babel-runtime/node_modules/core-js/library/modules/_object-dp.js");
var anObject = __webpack_require__("./node_modules/babel-runtime/node_modules/core-js/library/modules/_an-object.js");
var getKeys = __webpack_require__("./node_modules/babel-runtime/node_modules/core-js/library/modules/_object-keys.js");

module.exports = __webpack_require__("./node_modules/babel-runtime/node_modules/core-js/library/modules/_descriptors.js") ? Object.defineProperties : function defineProperties(O, Properties) {
  anObject(O);
  var keys = getKeys(Properties);
  var length = keys.length;
  var i = 0;
  var P;
  while (length > i) dP.f(O, P = keys[i++], Properties[P]);
  return O;
};


/***/ }),

/***/ "./node_modules/babel-runtime/node_modules/core-js/library/modules/_object-gopd.js":
/***/ (function(module, exports, __webpack_require__) {

var pIE = __webpack_require__("./node_modules/babel-runtime/node_modules/core-js/library/modules/_object-pie.js");
var createDesc = __webpack_require__("./node_modules/babel-runtime/node_modules/core-js/library/modules/_property-desc.js");
var toIObject = __webpack_require__("./node_modules/babel-runtime/node_modules/core-js/library/modules/_to-iobject.js");
var toPrimitive = __webpack_require__("./node_modules/babel-runtime/node_modules/core-js/library/modules/_to-primitive.js");
var has = __webpack_require__("./node_modules/babel-runtime/node_modules/core-js/library/modules/_has.js");
var IE8_DOM_DEFINE = __webpack_require__("./node_modules/babel-runtime/node_modules/core-js/library/modules/_ie8-dom-define.js");
var gOPD = Object.getOwnPropertyDescriptor;

exports.f = __webpack_require__("./node_modules/babel-runtime/node_modules/core-js/library/modules/_descriptors.js") ? gOPD : function getOwnPropertyDescriptor(O, P) {
  O = toIObject(O);
  P = toPrimitive(P, true);
  if (IE8_DOM_DEFINE) try {
    return gOPD(O, P);
  } catch (e) { /* empty */ }
  if (has(O, P)) return createDesc(!pIE.f.call(O, P), O[P]);
};


/***/ }),

/***/ "./node_modules/babel-runtime/node_modules/core-js/library/modules/_object-gopn-ext.js":
/***/ (function(module, exports, __webpack_require__) {

// fallback for IE11 buggy Object.getOwnPropertyNames with iframe and window
var toIObject = __webpack_require__("./node_modules/babel-runtime/node_modules/core-js/library/modules/_to-iobject.js");
var gOPN = __webpack_require__("./node_modules/babel-runtime/node_modules/core-js/library/modules/_object-gopn.js").f;
var toString = {}.toString;

var windowNames = typeof window == 'object' && window && Object.getOwnPropertyNames
  ? Object.getOwnPropertyNames(window) : [];

var getWindowNames = function (it) {
  try {
    return gOPN(it);
  } catch (e) {
    return windowNames.slice();
  }
};

module.exports.f = function getOwnPropertyNames(it) {
  return windowNames && toString.call(it) == '[object Window]' ? getWindowNames(it) : gOPN(toIObject(it));
};


/***/ }),

/***/ "./node_modules/babel-runtime/node_modules/core-js/library/modules/_object-gopn.js":
/***/ (function(module, exports, __webpack_require__) {

// 19.1.2.7 / 15.2.3.4 Object.getOwnPropertyNames(O)
var $keys = __webpack_require__("./node_modules/babel-runtime/node_modules/core-js/library/modules/_object-keys-internal.js");
var hiddenKeys = __webpack_require__("./node_modules/babel-runtime/node_modules/core-js/library/modules/_enum-bug-keys.js").concat('length', 'prototype');

exports.f = Object.getOwnPropertyNames || function getOwnPropertyNames(O) {
  return $keys(O, hiddenKeys);
};


/***/ }),

/***/ "./node_modules/babel-runtime/node_modules/core-js/library/modules/_object-gops.js":
/***/ (function(module, exports) {

exports.f = Object.getOwnPropertySymbols;


/***/ }),

/***/ "./node_modules/babel-runtime/node_modules/core-js/library/modules/_object-gpo.js":
/***/ (function(module, exports, __webpack_require__) {

// 19.1.2.9 / 15.2.3.2 Object.getPrototypeOf(O)
var has = __webpack_require__("./node_modules/babel-runtime/node_modules/core-js/library/modules/_has.js");
var toObject = __webpack_require__("./node_modules/babel-runtime/node_modules/core-js/library/modules/_to-object.js");
var IE_PROTO = __webpack_require__("./node_modules/babel-runtime/node_modules/core-js/library/modules/_shared-key.js")('IE_PROTO');
var ObjectProto = Object.prototype;

module.exports = Object.getPrototypeOf || function (O) {
  O = toObject(O);
  if (has(O, IE_PROTO)) return O[IE_PROTO];
  if (typeof O.constructor == 'function' && O instanceof O.constructor) {
    return O.constructor.prototype;
  } return O instanceof Object ? ObjectProto : null;
};


/***/ }),

/***/ "./node_modules/babel-runtime/node_modules/core-js/library/modules/_object-keys-internal.js":
/***/ (function(module, exports, __webpack_require__) {

var has = __webpack_require__("./node_modules/babel-runtime/node_modules/core-js/library/modules/_has.js");
var toIObject = __webpack_require__("./node_modules/babel-runtime/node_modules/core-js/library/modules/_to-iobject.js");
var arrayIndexOf = __webpack_require__("./node_modules/babel-runtime/node_modules/core-js/library/modules/_array-includes.js")(false);
var IE_PROTO = __webpack_require__("./node_modules/babel-runtime/node_modules/core-js/library/modules/_shared-key.js")('IE_PROTO');

module.exports = function (object, names) {
  var O = toIObject(object);
  var i = 0;
  var result = [];
  var key;
  for (key in O) if (key != IE_PROTO) has(O, key) && result.push(key);
  // Don't enum bug & hidden keys
  while (names.length > i) if (has(O, key = names[i++])) {
    ~arrayIndexOf(result, key) || result.push(key);
  }
  return result;
};


/***/ }),

/***/ "./node_modules/babel-runtime/node_modules/core-js/library/modules/_object-keys.js":
/***/ (function(module, exports, __webpack_require__) {

// 19.1.2.14 / 15.2.3.14 Object.keys(O)
var $keys = __webpack_require__("./node_modules/babel-runtime/node_modules/core-js/library/modules/_object-keys-internal.js");
var enumBugKeys = __webpack_require__("./node_modules/babel-runtime/node_modules/core-js/library/modules/_enum-bug-keys.js");

module.exports = Object.keys || function keys(O) {
  return $keys(O, enumBugKeys);
};


/***/ }),

/***/ "./node_modules/babel-runtime/node_modules/core-js/library/modules/_object-pie.js":
/***/ (function(module, exports) {

exports.f = {}.propertyIsEnumerable;


/***/ }),

/***/ "./node_modules/babel-runtime/node_modules/core-js/library/modules/_object-sap.js":
/***/ (function(module, exports, __webpack_require__) {

// most Object methods by ES6 should accept primitives
var $export = __webpack_require__("./node_modules/babel-runtime/node_modules/core-js/library/modules/_export.js");
var core = __webpack_require__("./node_modules/babel-runtime/node_modules/core-js/library/modules/_core.js");
var fails = __webpack_require__("./node_modules/babel-runtime/node_modules/core-js/library/modules/_fails.js");
module.exports = function (KEY, exec) {
  var fn = (core.Object || {})[KEY] || Object[KEY];
  var exp = {};
  exp[KEY] = exec(fn);
  $export($export.S + $export.F * fails(function () { fn(1); }), 'Object', exp);
};


/***/ }),

/***/ "./node_modules/babel-runtime/node_modules/core-js/library/modules/_property-desc.js":
/***/ (function(module, exports) {

module.exports = function (bitmap, value) {
  return {
    enumerable: !(bitmap & 1),
    configurable: !(bitmap & 2),
    writable: !(bitmap & 4),
    value: value
  };
};


/***/ }),

/***/ "./node_modules/babel-runtime/node_modules/core-js/library/modules/_redefine.js":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("./node_modules/babel-runtime/node_modules/core-js/library/modules/_hide.js");


/***/ }),

/***/ "./node_modules/babel-runtime/node_modules/core-js/library/modules/_set-proto.js":
/***/ (function(module, exports, __webpack_require__) {

// Works with __proto__ only. Old v8 can't work with null proto objects.
/* eslint-disable no-proto */
var isObject = __webpack_require__("./node_modules/babel-runtime/node_modules/core-js/library/modules/_is-object.js");
var anObject = __webpack_require__("./node_modules/babel-runtime/node_modules/core-js/library/modules/_an-object.js");
var check = function (O, proto) {
  anObject(O);
  if (!isObject(proto) && proto !== null) throw TypeError(proto + ": can't set as prototype!");
};
module.exports = {
  set: Object.setPrototypeOf || ('__proto__' in {} ? // eslint-disable-line
    function (test, buggy, set) {
      try {
        set = __webpack_require__("./node_modules/babel-runtime/node_modules/core-js/library/modules/_ctx.js")(Function.call, __webpack_require__("./node_modules/babel-runtime/node_modules/core-js/library/modules/_object-gopd.js").f(Object.prototype, '__proto__').set, 2);
        set(test, []);
        buggy = !(test instanceof Array);
      } catch (e) { buggy = true; }
      return function setPrototypeOf(O, proto) {
        check(O, proto);
        if (buggy) O.__proto__ = proto;
        else set(O, proto);
        return O;
      };
    }({}, false) : undefined),
  check: check
};


/***/ }),

/***/ "./node_modules/babel-runtime/node_modules/core-js/library/modules/_set-to-string-tag.js":
/***/ (function(module, exports, __webpack_require__) {

var def = __webpack_require__("./node_modules/babel-runtime/node_modules/core-js/library/modules/_object-dp.js").f;
var has = __webpack_require__("./node_modules/babel-runtime/node_modules/core-js/library/modules/_has.js");
var TAG = __webpack_require__("./node_modules/babel-runtime/node_modules/core-js/library/modules/_wks.js")('toStringTag');

module.exports = function (it, tag, stat) {
  if (it && !has(it = stat ? it : it.prototype, TAG)) def(it, TAG, { configurable: true, value: tag });
};


/***/ }),

/***/ "./node_modules/babel-runtime/node_modules/core-js/library/modules/_shared-key.js":
/***/ (function(module, exports, __webpack_require__) {

var shared = __webpack_require__("./node_modules/babel-runtime/node_modules/core-js/library/modules/_shared.js")('keys');
var uid = __webpack_require__("./node_modules/babel-runtime/node_modules/core-js/library/modules/_uid.js");
module.exports = function (key) {
  return shared[key] || (shared[key] = uid(key));
};


/***/ }),

/***/ "./node_modules/babel-runtime/node_modules/core-js/library/modules/_shared.js":
/***/ (function(module, exports, __webpack_require__) {

var global = __webpack_require__("./node_modules/babel-runtime/node_modules/core-js/library/modules/_global.js");
var SHARED = '__core-js_shared__';
var store = global[SHARED] || (global[SHARED] = {});
module.exports = function (key) {
  return store[key] || (store[key] = {});
};


/***/ }),

/***/ "./node_modules/babel-runtime/node_modules/core-js/library/modules/_string-at.js":
/***/ (function(module, exports, __webpack_require__) {

var toInteger = __webpack_require__("./node_modules/babel-runtime/node_modules/core-js/library/modules/_to-integer.js");
var defined = __webpack_require__("./node_modules/babel-runtime/node_modules/core-js/library/modules/_defined.js");
// true  -> String#at
// false -> String#codePointAt
module.exports = function (TO_STRING) {
  return function (that, pos) {
    var s = String(defined(that));
    var i = toInteger(pos);
    var l = s.length;
    var a, b;
    if (i < 0 || i >= l) return TO_STRING ? '' : undefined;
    a = s.charCodeAt(i);
    return a < 0xd800 || a > 0xdbff || i + 1 === l || (b = s.charCodeAt(i + 1)) < 0xdc00 || b > 0xdfff
      ? TO_STRING ? s.charAt(i) : a
      : TO_STRING ? s.slice(i, i + 2) : (a - 0xd800 << 10) + (b - 0xdc00) + 0x10000;
  };
};


/***/ }),

/***/ "./node_modules/babel-runtime/node_modules/core-js/library/modules/_to-absolute-index.js":
/***/ (function(module, exports, __webpack_require__) {

var toInteger = __webpack_require__("./node_modules/babel-runtime/node_modules/core-js/library/modules/_to-integer.js");
var max = Math.max;
var min = Math.min;
module.exports = function (index, length) {
  index = toInteger(index);
  return index < 0 ? max(index + length, 0) : min(index, length);
};


/***/ }),

/***/ "./node_modules/babel-runtime/node_modules/core-js/library/modules/_to-integer.js":
/***/ (function(module, exports) {

// 7.1.4 ToInteger
var ceil = Math.ceil;
var floor = Math.floor;
module.exports = function (it) {
  return isNaN(it = +it) ? 0 : (it > 0 ? floor : ceil)(it);
};


/***/ }),

/***/ "./node_modules/babel-runtime/node_modules/core-js/library/modules/_to-iobject.js":
/***/ (function(module, exports, __webpack_require__) {

// to indexed object, toObject with fallback for non-array-like ES3 strings
var IObject = __webpack_require__("./node_modules/babel-runtime/node_modules/core-js/library/modules/_iobject.js");
var defined = __webpack_require__("./node_modules/babel-runtime/node_modules/core-js/library/modules/_defined.js");
module.exports = function (it) {
  return IObject(defined(it));
};


/***/ }),

/***/ "./node_modules/babel-runtime/node_modules/core-js/library/modules/_to-length.js":
/***/ (function(module, exports, __webpack_require__) {

// 7.1.15 ToLength
var toInteger = __webpack_require__("./node_modules/babel-runtime/node_modules/core-js/library/modules/_to-integer.js");
var min = Math.min;
module.exports = function (it) {
  return it > 0 ? min(toInteger(it), 0x1fffffffffffff) : 0; // pow(2, 53) - 1 == 9007199254740991
};


/***/ }),

/***/ "./node_modules/babel-runtime/node_modules/core-js/library/modules/_to-object.js":
/***/ (function(module, exports, __webpack_require__) {

// 7.1.13 ToObject(argument)
var defined = __webpack_require__("./node_modules/babel-runtime/node_modules/core-js/library/modules/_defined.js");
module.exports = function (it) {
  return Object(defined(it));
};


/***/ }),

/***/ "./node_modules/babel-runtime/node_modules/core-js/library/modules/_to-primitive.js":
/***/ (function(module, exports, __webpack_require__) {

// 7.1.1 ToPrimitive(input [, PreferredType])
var isObject = __webpack_require__("./node_modules/babel-runtime/node_modules/core-js/library/modules/_is-object.js");
// instead of the ES6 spec version, we didn't implement @@toPrimitive case
// and the second argument - flag - preferred type is a string
module.exports = function (it, S) {
  if (!isObject(it)) return it;
  var fn, val;
  if (S && typeof (fn = it.toString) == 'function' && !isObject(val = fn.call(it))) return val;
  if (typeof (fn = it.valueOf) == 'function' && !isObject(val = fn.call(it))) return val;
  if (!S && typeof (fn = it.toString) == 'function' && !isObject(val = fn.call(it))) return val;
  throw TypeError("Can't convert object to primitive value");
};


/***/ }),

/***/ "./node_modules/babel-runtime/node_modules/core-js/library/modules/_uid.js":
/***/ (function(module, exports) {

var id = 0;
var px = Math.random();
module.exports = function (key) {
  return 'Symbol('.concat(key === undefined ? '' : key, ')_', (++id + px).toString(36));
};


/***/ }),

/***/ "./node_modules/babel-runtime/node_modules/core-js/library/modules/_wks-define.js":
/***/ (function(module, exports, __webpack_require__) {

var global = __webpack_require__("./node_modules/babel-runtime/node_modules/core-js/library/modules/_global.js");
var core = __webpack_require__("./node_modules/babel-runtime/node_modules/core-js/library/modules/_core.js");
var LIBRARY = __webpack_require__("./node_modules/babel-runtime/node_modules/core-js/library/modules/_library.js");
var wksExt = __webpack_require__("./node_modules/babel-runtime/node_modules/core-js/library/modules/_wks-ext.js");
var defineProperty = __webpack_require__("./node_modules/babel-runtime/node_modules/core-js/library/modules/_object-dp.js").f;
module.exports = function (name) {
  var $Symbol = core.Symbol || (core.Symbol = LIBRARY ? {} : global.Symbol || {});
  if (name.charAt(0) != '_' && !(name in $Symbol)) defineProperty($Symbol, name, { value: wksExt.f(name) });
};


/***/ }),

/***/ "./node_modules/babel-runtime/node_modules/core-js/library/modules/_wks-ext.js":
/***/ (function(module, exports, __webpack_require__) {

exports.f = __webpack_require__("./node_modules/babel-runtime/node_modules/core-js/library/modules/_wks.js");


/***/ }),

/***/ "./node_modules/babel-runtime/node_modules/core-js/library/modules/_wks.js":
/***/ (function(module, exports, __webpack_require__) {

var store = __webpack_require__("./node_modules/babel-runtime/node_modules/core-js/library/modules/_shared.js")('wks');
var uid = __webpack_require__("./node_modules/babel-runtime/node_modules/core-js/library/modules/_uid.js");
var Symbol = __webpack_require__("./node_modules/babel-runtime/node_modules/core-js/library/modules/_global.js").Symbol;
var USE_SYMBOL = typeof Symbol == 'function';

var $exports = module.exports = function (name) {
  return store[name] || (store[name] =
    USE_SYMBOL && Symbol[name] || (USE_SYMBOL ? Symbol : uid)('Symbol.' + name));
};

$exports.store = store;


/***/ }),

/***/ "./node_modules/babel-runtime/node_modules/core-js/library/modules/es6.array.iterator.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var addToUnscopables = __webpack_require__("./node_modules/babel-runtime/node_modules/core-js/library/modules/_add-to-unscopables.js");
var step = __webpack_require__("./node_modules/babel-runtime/node_modules/core-js/library/modules/_iter-step.js");
var Iterators = __webpack_require__("./node_modules/babel-runtime/node_modules/core-js/library/modules/_iterators.js");
var toIObject = __webpack_require__("./node_modules/babel-runtime/node_modules/core-js/library/modules/_to-iobject.js");

// 22.1.3.4 Array.prototype.entries()
// 22.1.3.13 Array.prototype.keys()
// 22.1.3.29 Array.prototype.values()
// 22.1.3.30 Array.prototype[@@iterator]()
module.exports = __webpack_require__("./node_modules/babel-runtime/node_modules/core-js/library/modules/_iter-define.js")(Array, 'Array', function (iterated, kind) {
  this._t = toIObject(iterated); // target
  this._i = 0;                   // next index
  this._k = kind;                // kind
// 22.1.5.2.1 %ArrayIteratorPrototype%.next()
}, function () {
  var O = this._t;
  var kind = this._k;
  var index = this._i++;
  if (!O || index >= O.length) {
    this._t = undefined;
    return step(1);
  }
  if (kind == 'keys') return step(0, index);
  if (kind == 'values') return step(0, O[index]);
  return step(0, [index, O[index]]);
}, 'values');

// argumentsList[@@iterator] is %ArrayProto_values% (9.4.4.6, 9.4.4.7)
Iterators.Arguments = Iterators.Array;

addToUnscopables('keys');
addToUnscopables('values');
addToUnscopables('entries');


/***/ }),

/***/ "./node_modules/babel-runtime/node_modules/core-js/library/modules/es6.object.assign.js":
/***/ (function(module, exports, __webpack_require__) {

// 19.1.3.1 Object.assign(target, source)
var $export = __webpack_require__("./node_modules/babel-runtime/node_modules/core-js/library/modules/_export.js");

$export($export.S + $export.F, 'Object', { assign: __webpack_require__("./node_modules/babel-runtime/node_modules/core-js/library/modules/_object-assign.js") });


/***/ }),

/***/ "./node_modules/babel-runtime/node_modules/core-js/library/modules/es6.object.create.js":
/***/ (function(module, exports, __webpack_require__) {

var $export = __webpack_require__("./node_modules/babel-runtime/node_modules/core-js/library/modules/_export.js");
// 19.1.2.2 / 15.2.3.5 Object.create(O [, Properties])
$export($export.S, 'Object', { create: __webpack_require__("./node_modules/babel-runtime/node_modules/core-js/library/modules/_object-create.js") });


/***/ }),

/***/ "./node_modules/babel-runtime/node_modules/core-js/library/modules/es6.object.define-property.js":
/***/ (function(module, exports, __webpack_require__) {

var $export = __webpack_require__("./node_modules/babel-runtime/node_modules/core-js/library/modules/_export.js");
// 19.1.2.4 / 15.2.3.6 Object.defineProperty(O, P, Attributes)
$export($export.S + $export.F * !__webpack_require__("./node_modules/babel-runtime/node_modules/core-js/library/modules/_descriptors.js"), 'Object', { defineProperty: __webpack_require__("./node_modules/babel-runtime/node_modules/core-js/library/modules/_object-dp.js").f });


/***/ }),

/***/ "./node_modules/babel-runtime/node_modules/core-js/library/modules/es6.object.get-prototype-of.js":
/***/ (function(module, exports, __webpack_require__) {

// 19.1.2.9 Object.getPrototypeOf(O)
var toObject = __webpack_require__("./node_modules/babel-runtime/node_modules/core-js/library/modules/_to-object.js");
var $getPrototypeOf = __webpack_require__("./node_modules/babel-runtime/node_modules/core-js/library/modules/_object-gpo.js");

__webpack_require__("./node_modules/babel-runtime/node_modules/core-js/library/modules/_object-sap.js")('getPrototypeOf', function () {
  return function getPrototypeOf(it) {
    return $getPrototypeOf(toObject(it));
  };
});


/***/ }),

/***/ "./node_modules/babel-runtime/node_modules/core-js/library/modules/es6.object.keys.js":
/***/ (function(module, exports, __webpack_require__) {

// 19.1.2.14 Object.keys(O)
var toObject = __webpack_require__("./node_modules/babel-runtime/node_modules/core-js/library/modules/_to-object.js");
var $keys = __webpack_require__("./node_modules/babel-runtime/node_modules/core-js/library/modules/_object-keys.js");

__webpack_require__("./node_modules/babel-runtime/node_modules/core-js/library/modules/_object-sap.js")('keys', function () {
  return function keys(it) {
    return $keys(toObject(it));
  };
});


/***/ }),

/***/ "./node_modules/babel-runtime/node_modules/core-js/library/modules/es6.object.set-prototype-of.js":
/***/ (function(module, exports, __webpack_require__) {

// 19.1.3.19 Object.setPrototypeOf(O, proto)
var $export = __webpack_require__("./node_modules/babel-runtime/node_modules/core-js/library/modules/_export.js");
$export($export.S, 'Object', { setPrototypeOf: __webpack_require__("./node_modules/babel-runtime/node_modules/core-js/library/modules/_set-proto.js").set });


/***/ }),

/***/ "./node_modules/babel-runtime/node_modules/core-js/library/modules/es6.object.to-string.js":
/***/ (function(module, exports) {



/***/ }),

/***/ "./node_modules/babel-runtime/node_modules/core-js/library/modules/es6.string.iterator.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var $at = __webpack_require__("./node_modules/babel-runtime/node_modules/core-js/library/modules/_string-at.js")(true);

// 21.1.3.27 String.prototype[@@iterator]()
__webpack_require__("./node_modules/babel-runtime/node_modules/core-js/library/modules/_iter-define.js")(String, 'String', function (iterated) {
  this._t = String(iterated); // target
  this._i = 0;                // next index
// 21.1.5.2.1 %StringIteratorPrototype%.next()
}, function () {
  var O = this._t;
  var index = this._i;
  var point;
  if (index >= O.length) return { value: undefined, done: true };
  point = $at(O, index);
  this._i += point.length;
  return { value: point, done: false };
});


/***/ }),

/***/ "./node_modules/babel-runtime/node_modules/core-js/library/modules/es6.symbol.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

// ECMAScript 6 symbols shim
var global = __webpack_require__("./node_modules/babel-runtime/node_modules/core-js/library/modules/_global.js");
var has = __webpack_require__("./node_modules/babel-runtime/node_modules/core-js/library/modules/_has.js");
var DESCRIPTORS = __webpack_require__("./node_modules/babel-runtime/node_modules/core-js/library/modules/_descriptors.js");
var $export = __webpack_require__("./node_modules/babel-runtime/node_modules/core-js/library/modules/_export.js");
var redefine = __webpack_require__("./node_modules/babel-runtime/node_modules/core-js/library/modules/_redefine.js");
var META = __webpack_require__("./node_modules/babel-runtime/node_modules/core-js/library/modules/_meta.js").KEY;
var $fails = __webpack_require__("./node_modules/babel-runtime/node_modules/core-js/library/modules/_fails.js");
var shared = __webpack_require__("./node_modules/babel-runtime/node_modules/core-js/library/modules/_shared.js");
var setToStringTag = __webpack_require__("./node_modules/babel-runtime/node_modules/core-js/library/modules/_set-to-string-tag.js");
var uid = __webpack_require__("./node_modules/babel-runtime/node_modules/core-js/library/modules/_uid.js");
var wks = __webpack_require__("./node_modules/babel-runtime/node_modules/core-js/library/modules/_wks.js");
var wksExt = __webpack_require__("./node_modules/babel-runtime/node_modules/core-js/library/modules/_wks-ext.js");
var wksDefine = __webpack_require__("./node_modules/babel-runtime/node_modules/core-js/library/modules/_wks-define.js");
var enumKeys = __webpack_require__("./node_modules/babel-runtime/node_modules/core-js/library/modules/_enum-keys.js");
var isArray = __webpack_require__("./node_modules/babel-runtime/node_modules/core-js/library/modules/_is-array.js");
var anObject = __webpack_require__("./node_modules/babel-runtime/node_modules/core-js/library/modules/_an-object.js");
var toIObject = __webpack_require__("./node_modules/babel-runtime/node_modules/core-js/library/modules/_to-iobject.js");
var toPrimitive = __webpack_require__("./node_modules/babel-runtime/node_modules/core-js/library/modules/_to-primitive.js");
var createDesc = __webpack_require__("./node_modules/babel-runtime/node_modules/core-js/library/modules/_property-desc.js");
var _create = __webpack_require__("./node_modules/babel-runtime/node_modules/core-js/library/modules/_object-create.js");
var gOPNExt = __webpack_require__("./node_modules/babel-runtime/node_modules/core-js/library/modules/_object-gopn-ext.js");
var $GOPD = __webpack_require__("./node_modules/babel-runtime/node_modules/core-js/library/modules/_object-gopd.js");
var $DP = __webpack_require__("./node_modules/babel-runtime/node_modules/core-js/library/modules/_object-dp.js");
var $keys = __webpack_require__("./node_modules/babel-runtime/node_modules/core-js/library/modules/_object-keys.js");
var gOPD = $GOPD.f;
var dP = $DP.f;
var gOPN = gOPNExt.f;
var $Symbol = global.Symbol;
var $JSON = global.JSON;
var _stringify = $JSON && $JSON.stringify;
var PROTOTYPE = 'prototype';
var HIDDEN = wks('_hidden');
var TO_PRIMITIVE = wks('toPrimitive');
var isEnum = {}.propertyIsEnumerable;
var SymbolRegistry = shared('symbol-registry');
var AllSymbols = shared('symbols');
var OPSymbols = shared('op-symbols');
var ObjectProto = Object[PROTOTYPE];
var USE_NATIVE = typeof $Symbol == 'function';
var QObject = global.QObject;
// Don't use setters in Qt Script, https://github.com/zloirock/core-js/issues/173
var setter = !QObject || !QObject[PROTOTYPE] || !QObject[PROTOTYPE].findChild;

// fallback for old Android, https://code.google.com/p/v8/issues/detail?id=687
var setSymbolDesc = DESCRIPTORS && $fails(function () {
  return _create(dP({}, 'a', {
    get: function () { return dP(this, 'a', { value: 7 }).a; }
  })).a != 7;
}) ? function (it, key, D) {
  var protoDesc = gOPD(ObjectProto, key);
  if (protoDesc) delete ObjectProto[key];
  dP(it, key, D);
  if (protoDesc && it !== ObjectProto) dP(ObjectProto, key, protoDesc);
} : dP;

var wrap = function (tag) {
  var sym = AllSymbols[tag] = _create($Symbol[PROTOTYPE]);
  sym._k = tag;
  return sym;
};

var isSymbol = USE_NATIVE && typeof $Symbol.iterator == 'symbol' ? function (it) {
  return typeof it == 'symbol';
} : function (it) {
  return it instanceof $Symbol;
};

var $defineProperty = function defineProperty(it, key, D) {
  if (it === ObjectProto) $defineProperty(OPSymbols, key, D);
  anObject(it);
  key = toPrimitive(key, true);
  anObject(D);
  if (has(AllSymbols, key)) {
    if (!D.enumerable) {
      if (!has(it, HIDDEN)) dP(it, HIDDEN, createDesc(1, {}));
      it[HIDDEN][key] = true;
    } else {
      if (has(it, HIDDEN) && it[HIDDEN][key]) it[HIDDEN][key] = false;
      D = _create(D, { enumerable: createDesc(0, false) });
    } return setSymbolDesc(it, key, D);
  } return dP(it, key, D);
};
var $defineProperties = function defineProperties(it, P) {
  anObject(it);
  var keys = enumKeys(P = toIObject(P));
  var i = 0;
  var l = keys.length;
  var key;
  while (l > i) $defineProperty(it, key = keys[i++], P[key]);
  return it;
};
var $create = function create(it, P) {
  return P === undefined ? _create(it) : $defineProperties(_create(it), P);
};
var $propertyIsEnumerable = function propertyIsEnumerable(key) {
  var E = isEnum.call(this, key = toPrimitive(key, true));
  if (this === ObjectProto && has(AllSymbols, key) && !has(OPSymbols, key)) return false;
  return E || !has(this, key) || !has(AllSymbols, key) || has(this, HIDDEN) && this[HIDDEN][key] ? E : true;
};
var $getOwnPropertyDescriptor = function getOwnPropertyDescriptor(it, key) {
  it = toIObject(it);
  key = toPrimitive(key, true);
  if (it === ObjectProto && has(AllSymbols, key) && !has(OPSymbols, key)) return;
  var D = gOPD(it, key);
  if (D && has(AllSymbols, key) && !(has(it, HIDDEN) && it[HIDDEN][key])) D.enumerable = true;
  return D;
};
var $getOwnPropertyNames = function getOwnPropertyNames(it) {
  var names = gOPN(toIObject(it));
  var result = [];
  var i = 0;
  var key;
  while (names.length > i) {
    if (!has(AllSymbols, key = names[i++]) && key != HIDDEN && key != META) result.push(key);
  } return result;
};
var $getOwnPropertySymbols = function getOwnPropertySymbols(it) {
  var IS_OP = it === ObjectProto;
  var names = gOPN(IS_OP ? OPSymbols : toIObject(it));
  var result = [];
  var i = 0;
  var key;
  while (names.length > i) {
    if (has(AllSymbols, key = names[i++]) && (IS_OP ? has(ObjectProto, key) : true)) result.push(AllSymbols[key]);
  } return result;
};

// 19.4.1.1 Symbol([description])
if (!USE_NATIVE) {
  $Symbol = function Symbol() {
    if (this instanceof $Symbol) throw TypeError('Symbol is not a constructor!');
    var tag = uid(arguments.length > 0 ? arguments[0] : undefined);
    var $set = function (value) {
      if (this === ObjectProto) $set.call(OPSymbols, value);
      if (has(this, HIDDEN) && has(this[HIDDEN], tag)) this[HIDDEN][tag] = false;
      setSymbolDesc(this, tag, createDesc(1, value));
    };
    if (DESCRIPTORS && setter) setSymbolDesc(ObjectProto, tag, { configurable: true, set: $set });
    return wrap(tag);
  };
  redefine($Symbol[PROTOTYPE], 'toString', function toString() {
    return this._k;
  });

  $GOPD.f = $getOwnPropertyDescriptor;
  $DP.f = $defineProperty;
  __webpack_require__("./node_modules/babel-runtime/node_modules/core-js/library/modules/_object-gopn.js").f = gOPNExt.f = $getOwnPropertyNames;
  __webpack_require__("./node_modules/babel-runtime/node_modules/core-js/library/modules/_object-pie.js").f = $propertyIsEnumerable;
  __webpack_require__("./node_modules/babel-runtime/node_modules/core-js/library/modules/_object-gops.js").f = $getOwnPropertySymbols;

  if (DESCRIPTORS && !__webpack_require__("./node_modules/babel-runtime/node_modules/core-js/library/modules/_library.js")) {
    redefine(ObjectProto, 'propertyIsEnumerable', $propertyIsEnumerable, true);
  }

  wksExt.f = function (name) {
    return wrap(wks(name));
  };
}

$export($export.G + $export.W + $export.F * !USE_NATIVE, { Symbol: $Symbol });

for (var es6Symbols = (
  // 19.4.2.2, 19.4.2.3, 19.4.2.4, 19.4.2.6, 19.4.2.8, 19.4.2.9, 19.4.2.10, 19.4.2.11, 19.4.2.12, 19.4.2.13, 19.4.2.14
  'hasInstance,isConcatSpreadable,iterator,match,replace,search,species,split,toPrimitive,toStringTag,unscopables'
).split(','), j = 0; es6Symbols.length > j;)wks(es6Symbols[j++]);

for (var wellKnownSymbols = $keys(wks.store), k = 0; wellKnownSymbols.length > k;) wksDefine(wellKnownSymbols[k++]);

$export($export.S + $export.F * !USE_NATIVE, 'Symbol', {
  // 19.4.2.1 Symbol.for(key)
  'for': function (key) {
    return has(SymbolRegistry, key += '')
      ? SymbolRegistry[key]
      : SymbolRegistry[key] = $Symbol(key);
  },
  // 19.4.2.5 Symbol.keyFor(sym)
  keyFor: function keyFor(sym) {
    if (!isSymbol(sym)) throw TypeError(sym + ' is not a symbol!');
    for (var key in SymbolRegistry) if (SymbolRegistry[key] === sym) return key;
  },
  useSetter: function () { setter = true; },
  useSimple: function () { setter = false; }
});

$export($export.S + $export.F * !USE_NATIVE, 'Object', {
  // 19.1.2.2 Object.create(O [, Properties])
  create: $create,
  // 19.1.2.4 Object.defineProperty(O, P, Attributes)
  defineProperty: $defineProperty,
  // 19.1.2.3 Object.defineProperties(O, Properties)
  defineProperties: $defineProperties,
  // 19.1.2.6 Object.getOwnPropertyDescriptor(O, P)
  getOwnPropertyDescriptor: $getOwnPropertyDescriptor,
  // 19.1.2.7 Object.getOwnPropertyNames(O)
  getOwnPropertyNames: $getOwnPropertyNames,
  // 19.1.2.8 Object.getOwnPropertySymbols(O)
  getOwnPropertySymbols: $getOwnPropertySymbols
});

// 24.3.2 JSON.stringify(value [, replacer [, space]])
$JSON && $export($export.S + $export.F * (!USE_NATIVE || $fails(function () {
  var S = $Symbol();
  // MS Edge converts symbol values to JSON as {}
  // WebKit converts symbol values to JSON as null
  // V8 throws on boxed symbols
  return _stringify([S]) != '[null]' || _stringify({ a: S }) != '{}' || _stringify(Object(S)) != '{}';
})), 'JSON', {
  stringify: function stringify(it) {
    if (it === undefined || isSymbol(it)) return; // IE8 returns string on undefined
    var args = [it];
    var i = 1;
    var replacer, $replacer;
    while (arguments.length > i) args.push(arguments[i++]);
    replacer = args[1];
    if (typeof replacer == 'function') $replacer = replacer;
    if ($replacer || !isArray(replacer)) replacer = function (key, value) {
      if ($replacer) value = $replacer.call(this, key, value);
      if (!isSymbol(value)) return value;
    };
    args[1] = replacer;
    return _stringify.apply($JSON, args);
  }
});

// 19.4.3.4 Symbol.prototype[@@toPrimitive](hint)
$Symbol[PROTOTYPE][TO_PRIMITIVE] || __webpack_require__("./node_modules/babel-runtime/node_modules/core-js/library/modules/_hide.js")($Symbol[PROTOTYPE], TO_PRIMITIVE, $Symbol[PROTOTYPE].valueOf);
// 19.4.3.5 Symbol.prototype[@@toStringTag]
setToStringTag($Symbol, 'Symbol');
// 20.2.1.9 Math[@@toStringTag]
setToStringTag(Math, 'Math', true);
// 24.3.3 JSON[@@toStringTag]
setToStringTag(global.JSON, 'JSON', true);


/***/ }),

/***/ "./node_modules/babel-runtime/node_modules/core-js/library/modules/es7.symbol.async-iterator.js":
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__("./node_modules/babel-runtime/node_modules/core-js/library/modules/_wks-define.js")('asyncIterator');


/***/ }),

/***/ "./node_modules/babel-runtime/node_modules/core-js/library/modules/es7.symbol.observable.js":
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__("./node_modules/babel-runtime/node_modules/core-js/library/modules/_wks-define.js")('observable');


/***/ }),

/***/ "./node_modules/babel-runtime/node_modules/core-js/library/modules/web.dom.iterable.js":
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__("./node_modules/babel-runtime/node_modules/core-js/library/modules/es6.array.iterator.js");
var global = __webpack_require__("./node_modules/babel-runtime/node_modules/core-js/library/modules/_global.js");
var hide = __webpack_require__("./node_modules/babel-runtime/node_modules/core-js/library/modules/_hide.js");
var Iterators = __webpack_require__("./node_modules/babel-runtime/node_modules/core-js/library/modules/_iterators.js");
var TO_STRING_TAG = __webpack_require__("./node_modules/babel-runtime/node_modules/core-js/library/modules/_wks.js")('toStringTag');

var DOMIterables = ('CSSRuleList,CSSStyleDeclaration,CSSValueList,ClientRectList,DOMRectList,DOMStringList,' +
  'DOMTokenList,DataTransferItemList,FileList,HTMLAllCollection,HTMLCollection,HTMLFormElement,HTMLSelectElement,' +
  'MediaList,MimeTypeArray,NamedNodeMap,NodeList,PaintRequestList,Plugin,PluginArray,SVGLengthList,SVGNumberList,' +
  'SVGPathSegList,SVGPointList,SVGStringList,SVGTransformList,SourceBufferList,StyleSheetList,TextTrackCueList,' +
  'TextTrackList,TouchList').split(',');

for (var i = 0; i < DOMIterables.length; i++) {
  var NAME = DOMIterables[i];
  var Collection = global[NAME];
  var proto = Collection && Collection.prototype;
  if (proto && !proto[TO_STRING_TAG]) hide(proto, TO_STRING_TAG, NAME);
  Iterators[NAME] = Iterators.Array;
}


/***/ }),

/***/ "./node_modules/react-weui/build/packages/components/actionsheet/actionsheet.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _extends2 = __webpack_require__("./node_modules/babel-runtime/helpers/extends.js");

var _extends3 = _interopRequireDefault(_extends2);

var _defineProperty2 = __webpack_require__("./node_modules/babel-runtime/helpers/defineProperty.js");

var _defineProperty3 = _interopRequireDefault(_defineProperty2);

var _objectWithoutProperties2 = __webpack_require__("./node_modules/babel-runtime/helpers/objectWithoutProperties.js");

var _objectWithoutProperties3 = _interopRequireDefault(_objectWithoutProperties2);

var _getPrototypeOf = __webpack_require__("./node_modules/babel-runtime/core-js/object/get-prototype-of.js");

var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

var _classCallCheck2 = __webpack_require__("./node_modules/babel-runtime/helpers/classCallCheck.js");

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = __webpack_require__("./node_modules/babel-runtime/helpers/createClass.js");

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = __webpack_require__("./node_modules/babel-runtime/helpers/possibleConstructorReturn.js");

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = __webpack_require__("./node_modules/babel-runtime/helpers/inherits.js");

var _inherits3 = _interopRequireDefault(_inherits2);

var _react = __webpack_require__("./node_modules/react/react.js");

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__("./node_modules/prop-types/index.js");

var _propTypes2 = _interopRequireDefault(_propTypes);

var _classnames = __webpack_require__("./node_modules/react-weui/build/packages/utils/classnames.js");

var _classnames2 = _interopRequireDefault(_classnames);

var _index = __webpack_require__("./node_modules/react-weui/build/packages/components/mask/index.js");

var _index2 = _interopRequireDefault(_index);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * Used to display a collection of actions that contain a set of interactivity, including descriptions, links, and so on. Popup from the bottom, generally used to respond to user clicks on the page.
 */
var ActionSheet = function (_Component) {
    (0, _inherits3.default)(ActionSheet, _Component);

    function ActionSheet(props) {
        (0, _classCallCheck3.default)(this, ActionSheet);

        var _this = (0, _possibleConstructorReturn3.default)(this, (ActionSheet.__proto__ || (0, _getPrototypeOf2.default)(ActionSheet)).call(this, props));

        _this.handleMaskClick = _this.handleMaskClick.bind(_this);
        return _this;
    }

    (0, _createClass3.default)(ActionSheet, [{
        key: 'renderMenuItem',
        value: function renderMenuItem() {
            return this.props.menus.map(function (menu, idx) {
                var label = menu.label,
                    className = menu.className,
                    others = (0, _objectWithoutProperties3.default)(menu, ['label', 'className']);

                var cls = (0, _classnames2.default)((0, _defineProperty3.default)({
                    'weui-actionsheet__cell': true
                }, className, className));

                return _react2.default.createElement(
                    'div',
                    (0, _extends3.default)({ key: idx }, others, { className: cls }),
                    label
                );
            });
        }
    }, {
        key: 'renderActions',
        value: function renderActions() {
            return this.props.actions.map(function (action, idx) {
                var label = action.label,
                    className = action.className,
                    others = (0, _objectWithoutProperties3.default)(action, ['label', 'className']);

                var cls = (0, _classnames2.default)((0, _defineProperty3.default)({
                    'weui-actionsheet__cell': true
                }, className, className));

                return _react2.default.createElement(
                    'div',
                    (0, _extends3.default)({ key: idx }, others, { className: cls }),
                    label
                );
            });
        }
    }, {
        key: 'handleMaskClick',
        value: function handleMaskClick(e) {
            if (this.props.onRequestClose) this.props.onRequestClose(e);
        }
    }, {
        key: 'render',
        value: function render() {
            var _props = this.props,
                show = _props.show,
                type = _props.type,
                onRequestClose = _props.onRequestClose,
                menus = _props.menus,
                actions = _props.actions,
                others = (0, _objectWithoutProperties3.default)(_props, ['show', 'type', 'onRequestClose', 'menus', 'actions']);

            var cls = (0, _classnames2.default)({
                'weui-actionsheet': true,
                'weui-actionsheet_toggle': show
            });

            var styleType = type ? type : 'ios';

            return _react2.default.createElement(
                'div',
                {
                    className: styleType === 'android' ? 'weui-skin_android' : ''
                },
                _react2.default.createElement(_index2.default, { style: { display: show ? 'block' : 'none' }, onClick: this.handleMaskClick }),
                _react2.default.createElement(
                    'div',
                    (0, _extends3.default)({ className: cls }, others),
                    _react2.default.createElement(
                        'div',
                        { className: 'weui-actionsheet__menu' },
                        this.renderMenuItem()
                    ),
                    _react2.default.createElement(
                        'div',
                        { className: 'weui-actionsheet__action' },
                        this.renderActions()
                    )
                )
            );
        }
    }]);
    return ActionSheet;
}(_react.Component);

ActionSheet.propTypes = {
    /**
     * Array of Objects for menus, `label` property is Required
     *
     */
    menus: _propTypes2.default.array,
    /**
     * Array of Objects for actions, `label` property is Required
     *
     */
    actions: _propTypes2.default.array,
    /**
     * To display ActionSheet
     *
     */
    show: _propTypes2.default.bool,
    /**
     * Function triggers when user click on the mask
     *
     */
    onRequestClose: _propTypes2.default.func,
    /**
     * style: ios/android
     */
    type: _propTypes2.default.string
};
ActionSheet.defaultProps = {
    type: '',
    menus: [],
    actions: [],
    show: false
};
;

exports.default = ActionSheet;
module.exports = exports['default'];

/***/ }),

/***/ "./node_modules/react-weui/build/packages/components/actionsheet/index.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _actionsheet = __webpack_require__("./node_modules/react-weui/build/packages/components/actionsheet/actionsheet.js");

var _actionsheet2 = _interopRequireDefault(_actionsheet);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = _actionsheet2.default; /**
                                          * Created by jf on 15/11/26.
                                          */

module.exports = exports['default'];

/***/ }),

/***/ "./node_modules/react-weui/build/packages/components/article/article.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _extends2 = __webpack_require__("./node_modules/babel-runtime/helpers/extends.js");

var _extends3 = _interopRequireDefault(_extends2);

var _defineProperty2 = __webpack_require__("./node_modules/babel-runtime/helpers/defineProperty.js");

var _defineProperty3 = _interopRequireDefault(_defineProperty2);

var _objectWithoutProperties2 = __webpack_require__("./node_modules/babel-runtime/helpers/objectWithoutProperties.js");

var _objectWithoutProperties3 = _interopRequireDefault(_objectWithoutProperties2);

var _getPrototypeOf = __webpack_require__("./node_modules/babel-runtime/core-js/object/get-prototype-of.js");

var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

var _classCallCheck2 = __webpack_require__("./node_modules/babel-runtime/helpers/classCallCheck.js");

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = __webpack_require__("./node_modules/babel-runtime/helpers/createClass.js");

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = __webpack_require__("./node_modules/babel-runtime/helpers/possibleConstructorReturn.js");

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = __webpack_require__("./node_modules/babel-runtime/helpers/inherits.js");

var _inherits3 = _interopRequireDefault(_inherits2);

var _react = __webpack_require__("./node_modules/react/react.js");

var _react2 = _interopRequireDefault(_react);

var _classnames = __webpack_require__("./node_modules/react-weui/build/packages/utils/classnames.js");

var _classnames2 = _interopRequireDefault(_classnames);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * Use to format WeUI style contents
 *
 */
var Article = function (_React$Component) {
    (0, _inherits3.default)(Article, _React$Component);

    function Article() {
        (0, _classCallCheck3.default)(this, Article);
        return (0, _possibleConstructorReturn3.default)(this, (Article.__proto__ || (0, _getPrototypeOf2.default)(Article)).apply(this, arguments));
    }

    (0, _createClass3.default)(Article, [{
        key: 'render',
        value: function render() {
            var _props = this.props,
                className = _props.className,
                children = _props.children,
                others = (0, _objectWithoutProperties3.default)(_props, ['className', 'children']);

            var cls = (0, _classnames2.default)((0, _defineProperty3.default)({
                'weui-article': true
            }, className, className));
            return _react2.default.createElement(
                'article',
                (0, _extends3.default)({ className: cls }, others),
                children
            );
        }
    }]);
    return Article;
}(_react2.default.Component);

Article.propTypes = {};
Article.defaultProps = {};
exports.default = Article;
;
module.exports = exports['default'];

/***/ }),

/***/ "./node_modules/react-weui/build/packages/components/article/index.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _article = __webpack_require__("./node_modules/react-weui/build/packages/components/article/article.js");

var _article2 = _interopRequireDefault(_article);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = _article2.default; /**
                                      * Created by jf on 15/12/11.
                                      */

module.exports = exports['default'];

/***/ }),

/***/ "./node_modules/react-weui/build/packages/components/badge/badge.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _extends2 = __webpack_require__("./node_modules/babel-runtime/helpers/extends.js");

var _extends3 = _interopRequireDefault(_extends2);

var _assign = __webpack_require__("./node_modules/babel-runtime/core-js/object/assign.js");

var _assign2 = _interopRequireDefault(_assign);

var _objectWithoutProperties2 = __webpack_require__("./node_modules/babel-runtime/helpers/objectWithoutProperties.js");

var _objectWithoutProperties3 = _interopRequireDefault(_objectWithoutProperties2);

var _getPrototypeOf = __webpack_require__("./node_modules/babel-runtime/core-js/object/get-prototype-of.js");

var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

var _classCallCheck2 = __webpack_require__("./node_modules/babel-runtime/helpers/classCallCheck.js");

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = __webpack_require__("./node_modules/babel-runtime/helpers/createClass.js");

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = __webpack_require__("./node_modules/babel-runtime/helpers/possibleConstructorReturn.js");

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = __webpack_require__("./node_modules/babel-runtime/helpers/inherits.js");

var _inherits3 = _interopRequireDefault(_inherits2);

var _react = __webpack_require__("./node_modules/react/react.js");

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__("./node_modules/prop-types/index.js");

var _propTypes2 = _interopRequireDefault(_propTypes);

var _classnames = __webpack_require__("./node_modules/react-weui/build/packages/utils/classnames.js");

var _classnames2 = _interopRequireDefault(_classnames);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var presetStyles = {
    'default': {},
    'header': {
        position: 'absolute',
        top: '-.4em',
        right: '-.4em'
    },
    'body': {
        marginLeft: '5px'
    },
    'footer': {
        marginLeft: '5px',
        marginRight: '5px'
    }
};
/**
 * Small status descriptors for UI elements.
 *
 */

var Badge = function (_Component) {
    (0, _inherits3.default)(Badge, _Component);

    function Badge() {
        (0, _classCallCheck3.default)(this, Badge);
        return (0, _possibleConstructorReturn3.default)(this, (Badge.__proto__ || (0, _getPrototypeOf2.default)(Badge)).apply(this, arguments));
    }

    (0, _createClass3.default)(Badge, [{
        key: 'render',
        value: function render() {
            var _props = this.props,
                children = _props.children,
                className = _props.className,
                dot = _props.dot,
                style = _props.style,
                preset = _props.preset,
                domProps = (0, _objectWithoutProperties3.default)(_props, ['children', 'className', 'dot', 'style', 'preset']);

            var clz = (0, _classnames2.default)('weui-badge', {
                'weui-badge_dot': dot
            }, className);

            var stylez = (0, _assign2.default)({}, presetStyles[preset], style);
            return _react2.default.createElement(
                'span',
                (0, _extends3.default)({ className: clz, style: stylez }, domProps),
                children
            );
        }
    }]);
    return Badge;
}(_react.Component);

Badge.propTypes = {
    /**
     * display dot style without content
     *
     */
    dot: _propTypes2.default.bool,
    /**
     * some preset layout for other UI elements, include 'header', 'body', 'footer'
     *
     */
    preset: _propTypes2.default.string
};
Badge.defaultProps = {
    dot: false,
    preset: 'default'
};
exports.default = Badge;
module.exports = exports['default'];

/***/ }),

/***/ "./node_modules/react-weui/build/packages/components/badge/index.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _badge = __webpack_require__("./node_modules/react-weui/build/packages/components/badge/badge.js");

var _badge2 = _interopRequireDefault(_badge);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = _badge2.default;
module.exports = exports['default'];

/***/ }),

/***/ "./node_modules/react-weui/build/packages/components/button/button.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _extends2 = __webpack_require__("./node_modules/babel-runtime/helpers/extends.js");

var _extends3 = _interopRequireDefault(_extends2);

var _defineProperty2 = __webpack_require__("./node_modules/babel-runtime/helpers/defineProperty.js");

var _defineProperty3 = _interopRequireDefault(_defineProperty2);

var _objectWithoutProperties2 = __webpack_require__("./node_modules/babel-runtime/helpers/objectWithoutProperties.js");

var _objectWithoutProperties3 = _interopRequireDefault(_objectWithoutProperties2);

var _getPrototypeOf = __webpack_require__("./node_modules/babel-runtime/core-js/object/get-prototype-of.js");

var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

var _classCallCheck2 = __webpack_require__("./node_modules/babel-runtime/helpers/classCallCheck.js");

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = __webpack_require__("./node_modules/babel-runtime/helpers/createClass.js");

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = __webpack_require__("./node_modules/babel-runtime/helpers/possibleConstructorReturn.js");

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = __webpack_require__("./node_modules/babel-runtime/helpers/inherits.js");

var _inherits3 = _interopRequireDefault(_inherits2);

var _react = __webpack_require__("./node_modules/react/react.js");

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__("./node_modules/prop-types/index.js");

var _propTypes2 = _interopRequireDefault(_propTypes);

var _classnames = __webpack_require__("./node_modules/react-weui/build/packages/utils/classnames.js");

var _classnames2 = _interopRequireDefault(_classnames);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 *  Button usage：OK(primary)、Cancel(default)、Warn(warn).
 *
 */
var Button = function (_React$Component) {
    (0, _inherits3.default)(Button, _React$Component);

    function Button() {
        (0, _classCallCheck3.default)(this, Button);
        return (0, _possibleConstructorReturn3.default)(this, (Button.__proto__ || (0, _getPrototypeOf2.default)(Button)).apply(this, arguments));
    }

    (0, _createClass3.default)(Button, [{
        key: 'render',
        value: function render() {
            var _props = this.props,
                component = _props.component,
                type = _props.type,
                size = _props.size,
                plain = _props.plain,
                className = _props.className,
                children = _props.children,
                others = (0, _objectWithoutProperties3.default)(_props, ['component', 'type', 'size', 'plain', 'className', 'children']);

            var Component = component ? component : this.props.href || type === 'vcode' ? 'a' : 'button';
            var cls = type === 'vcode' ? (0, _classnames2.default)('weui-vcode-btn', (0, _defineProperty3.default)({}, className, className)) : (0, _classnames2.default)((0, _defineProperty3.default)({
                'weui-btn': true,
                'weui-btn_mini': size === 'small',
                'weui-btn_primary': type === 'primary' && !plain,
                'weui-btn_default': type === 'default' && !plain,
                'weui-btn_warn': type === 'warn',
                'weui-btn_plain-primary': type === 'primary' && plain,
                'weui-btn_plain-default': type === 'default' && plain,
                'weui-btn_disabled': this.props.disabled && !plain,
                'weui-btn_plain-disabled': this.props.disabled && plain
            }, className, className));

            return _react2.default.createElement(
                Component,
                (0, _extends3.default)({}, others, { className: cls }),
                children
            );
        }
    }]);
    return Button;
}(_react2.default.Component);

Button.propTypes = {
    disabled: _propTypes2.default.bool,
    /**
     * Options: primary, default, warn, vcode
     *
     */
    type: _propTypes2.default.string,
    /**
     * Options: normal, small
     *
     */
    size: _propTypes2.default.string
};
Button.defaultProps = {
    disabled: false,
    type: 'primary',
    size: 'normal'
};
exports.default = Button;
;
module.exports = exports['default'];

/***/ }),

/***/ "./node_modules/react-weui/build/packages/components/button/button_area.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _defineProperty2 = __webpack_require__("./node_modules/babel-runtime/helpers/defineProperty.js");

var _defineProperty3 = _interopRequireDefault(_defineProperty2);

var _getPrototypeOf = __webpack_require__("./node_modules/babel-runtime/core-js/object/get-prototype-of.js");

var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

var _classCallCheck2 = __webpack_require__("./node_modules/babel-runtime/helpers/classCallCheck.js");

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = __webpack_require__("./node_modules/babel-runtime/helpers/createClass.js");

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = __webpack_require__("./node_modules/babel-runtime/helpers/possibleConstructorReturn.js");

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = __webpack_require__("./node_modules/babel-runtime/helpers/inherits.js");

var _inherits3 = _interopRequireDefault(_inherits2);

var _react = __webpack_require__("./node_modules/react/react.js");

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__("./node_modules/prop-types/index.js");

var _propTypes2 = _interopRequireDefault(_propTypes);

var _classnames = __webpack_require__("./node_modules/react-weui/build/packages/utils/classnames.js");

var _classnames2 = _interopRequireDefault(_classnames);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var ButtonArea = function (_Component) {
    (0, _inherits3.default)(ButtonArea, _Component);

    function ButtonArea() {
        (0, _classCallCheck3.default)(this, ButtonArea);
        return (0, _possibleConstructorReturn3.default)(this, (ButtonArea.__proto__ || (0, _getPrototypeOf2.default)(ButtonArea)).apply(this, arguments));
    }

    (0, _createClass3.default)(ButtonArea, [{
        key: 'render',
        value: function render() {
            var _props = this.props,
                direction = _props.direction,
                children = _props.children,
                className = _props.className;

            var cls = (0, _classnames2.default)((0, _defineProperty3.default)({
                'weui-btn-area': true,
                'weui-btn-area_inline': direction === 'horizontal'
            }, className, className));

            return _react2.default.createElement(
                'div',
                { className: cls },
                children
            );
        }
    }]);
    return ButtonArea;
}(_react.Component);

ButtonArea.propTypes = {
    /**
     * Direction of Button Layout inside, Options: veritical, horizontal
     *
     */
    direction: _propTypes2.default.string
};
ButtonArea.defaultProps = {
    direction: 'vertical'
};
;

exports.default = ButtonArea;
module.exports = exports['default'];

/***/ }),

/***/ "./node_modules/react-weui/build/packages/components/button/button_preview.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _extends2 = __webpack_require__("./node_modules/babel-runtime/helpers/extends.js");

var _extends3 = _interopRequireDefault(_extends2);

var _defineProperty2 = __webpack_require__("./node_modules/babel-runtime/helpers/defineProperty.js");

var _defineProperty3 = _interopRequireDefault(_defineProperty2);

var _objectWithoutProperties2 = __webpack_require__("./node_modules/babel-runtime/helpers/objectWithoutProperties.js");

var _objectWithoutProperties3 = _interopRequireDefault(_objectWithoutProperties2);

var _react = __webpack_require__("./node_modules/react/react.js");

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__("./node_modules/prop-types/index.js");

var _propTypes2 = _interopRequireDefault(_propTypes);

var _classnames = __webpack_require__("./node_modules/react-weui/build/packages/utils/classnames.js");

var _classnames2 = _interopRequireDefault(_classnames);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var PreviewButton = function PreviewButton(props) {
    var className = props.className,
        primary = props.primary,
        children = props.children,
        others = (0, _objectWithoutProperties3.default)(props, ['className', 'primary', 'children']);

    var cls = (0, _classnames2.default)((0, _defineProperty3.default)({
        'weui-form-preview__btn': true,
        'weui-form-preview__btn_default': !primary,
        'weui-form-preview__btn_primary': primary
    }, className, className));

    return _react2.default.createElement(
        'a',
        (0, _extends3.default)({ className: cls }, others),
        children
    );
};

PreviewButton.propTypes = {
    /**
     * Primary style of button
     *
     */
    primary: _propTypes2.default.bool
};

PreviewButton.defaultProps = {
    primary: false
};

exports.default = PreviewButton;
module.exports = exports['default'];

/***/ }),

/***/ "./node_modules/react-weui/build/packages/components/button/index.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.PreviewButton = exports.ButtonArea = exports.Button = undefined;

var _button = __webpack_require__("./node_modules/react-weui/build/packages/components/button/button.js");

var _button2 = _interopRequireDefault(_button);

var _button_area = __webpack_require__("./node_modules/react-weui/build/packages/components/button/button_area.js");

var _button_area2 = _interopRequireDefault(_button_area);

var _button_preview = __webpack_require__("./node_modules/react-weui/build/packages/components/button/button_preview.js");

var _button_preview2 = _interopRequireDefault(_button_preview);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.Button = _button2.default;
exports.ButtonArea = _button_area2.default;
exports.PreviewButton = _button_preview2.default; /**
                                                   * Created by jf on 15/10/27.
                                                   */

/***/ }),

/***/ "./node_modules/react-weui/build/packages/components/cell/cell.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _extends2 = __webpack_require__("./node_modules/babel-runtime/helpers/extends.js");

var _extends3 = _interopRequireDefault(_extends2);

var _defineProperty2 = __webpack_require__("./node_modules/babel-runtime/helpers/defineProperty.js");

var _defineProperty3 = _interopRequireDefault(_defineProperty2);

var _objectWithoutProperties2 = __webpack_require__("./node_modules/babel-runtime/helpers/objectWithoutProperties.js");

var _objectWithoutProperties3 = _interopRequireDefault(_objectWithoutProperties2);

var _react = __webpack_require__("./node_modules/react/react.js");

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__("./node_modules/prop-types/index.js");

var _propTypes2 = _interopRequireDefault(_propTypes);

var _classnames = __webpack_require__("./node_modules/react-weui/build/packages/utils/classnames.js");

var _classnames2 = _interopRequireDefault(_classnames);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * Cell consist of `CellBody`, `CellHeader` and `CellFooter` for flexible reason
 *
 */
var Cell = function Cell(props) {
    var className = props.className,
        children = props.children,
        access = props.access,
        href = props.href,
        link = props.link,
        component = props.component,
        htmlFor = props.htmlFor,
        others = (0, _objectWithoutProperties3.default)(props, ['className', 'children', 'access', 'href', 'link', 'component', 'htmlFor']);

    var DefaultComponent = href ? 'a' : htmlFor ? 'label' : 'div';
    var CellComponent = component ? component : DefaultComponent;

    var cls = (0, _classnames2.default)((0, _defineProperty3.default)({
        'weui-cell': true,
        'weui-cell_access': access,
        'weui-cell_link': link
    }, className, className));

    return _react2.default.createElement(
        CellComponent,
        (0, _extends3.default)({
            className: cls,
            href: href,
            htmlFor: htmlFor
        }, others),
        children
    );
};

Cell.propTypes = {
    /**
     * if cell should have arrow or link
     *
     */
    access: _propTypes2.default.bool,
    /**
     * if this cell body is link
     *
     */
    link: _propTypes2.default.bool,
    /**
     * pass in an component to replace Cell but apply same style
     *
     */
    component: _propTypes2.default.func
};

Cell.defaultProps = {
    access: false,
    link: false
};

exports.default = Cell;
module.exports = exports['default'];

/***/ }),

/***/ "./node_modules/react-weui/build/packages/components/cell/cell_body.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _extends2 = __webpack_require__("./node_modules/babel-runtime/helpers/extends.js");

var _extends3 = _interopRequireDefault(_extends2);

var _defineProperty2 = __webpack_require__("./node_modules/babel-runtime/helpers/defineProperty.js");

var _defineProperty3 = _interopRequireDefault(_defineProperty2);

var _objectWithoutProperties2 = __webpack_require__("./node_modules/babel-runtime/helpers/objectWithoutProperties.js");

var _objectWithoutProperties3 = _interopRequireDefault(_objectWithoutProperties2);

var _react = __webpack_require__("./node_modules/react/react.js");

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__("./node_modules/prop-types/index.js");

var _propTypes2 = _interopRequireDefault(_propTypes);

var _classnames = __webpack_require__("./node_modules/react-weui/build/packages/utils/classnames.js");

var _classnames2 = _interopRequireDefault(_classnames);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * Content of `Cell`
 *
 */
var CellBody = function CellBody(props) {
    var className = props.className,
        children = props.children,
        primary = props.primary,
        others = (0, _objectWithoutProperties3.default)(props, ['className', 'children', 'primary']);

    var cls = (0, _classnames2.default)((0, _defineProperty3.default)({
        'weui-cell__bd': true,
        'weui-cell_primary': primary
    }, className, className));

    return _react2.default.createElement(
        'div',
        (0, _extends3.default)({ className: cls }, others),
        children
    );
};

CellBody.propTypes = {
    /**
     * if cell body is the primary block
     *
     */
    primary: _propTypes2.default.bool
};

CellBody.defaultProps = {
    primary: false
};

exports.default = CellBody;
module.exports = exports['default'];

/***/ }),

/***/ "./node_modules/react-weui/build/packages/components/cell/cell_footer.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _extends2 = __webpack_require__("./node_modules/babel-runtime/helpers/extends.js");

var _extends3 = _interopRequireDefault(_extends2);

var _defineProperty2 = __webpack_require__("./node_modules/babel-runtime/helpers/defineProperty.js");

var _defineProperty3 = _interopRequireDefault(_defineProperty2);

var _objectWithoutProperties2 = __webpack_require__("./node_modules/babel-runtime/helpers/objectWithoutProperties.js");

var _objectWithoutProperties3 = _interopRequireDefault(_objectWithoutProperties2);

var _react = __webpack_require__("./node_modules/react/react.js");

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__("./node_modules/prop-types/index.js");

var _propTypes2 = _interopRequireDefault(_propTypes);

var _classnames = __webpack_require__("./node_modules/react-weui/build/packages/utils/classnames.js");

var _classnames2 = _interopRequireDefault(_classnames);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * Footer of `Cell`
 *
 */
var CellFooter = function CellFooter(props) {
    var className = props.className,
        children = props.children,
        primary = props.primary,
        others = (0, _objectWithoutProperties3.default)(props, ['className', 'children', 'primary']);

    var cls = (0, _classnames2.default)((0, _defineProperty3.default)({
        'weui-cell__ft': true,
        'weui-cell_primary': primary
    }, className, className));

    return _react2.default.createElement(
        'div',
        (0, _extends3.default)({ className: cls }, others),
        children
    );
};

CellFooter.propTypes = {
    /**
     * if cell body is the primary block
     *
     */
    primary: _propTypes2.default.bool
};

CellFooter.defaultProps = {
    primary: false
};

exports.default = CellFooter;
module.exports = exports['default'];

/***/ }),

/***/ "./node_modules/react-weui/build/packages/components/cell/cell_header.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _extends2 = __webpack_require__("./node_modules/babel-runtime/helpers/extends.js");

var _extends3 = _interopRequireDefault(_extends2);

var _defineProperty2 = __webpack_require__("./node_modules/babel-runtime/helpers/defineProperty.js");

var _defineProperty3 = _interopRequireDefault(_defineProperty2);

var _objectWithoutProperties2 = __webpack_require__("./node_modules/babel-runtime/helpers/objectWithoutProperties.js");

var _objectWithoutProperties3 = _interopRequireDefault(_objectWithoutProperties2);

var _react = __webpack_require__("./node_modules/react/react.js");

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__("./node_modules/prop-types/index.js");

var _propTypes2 = _interopRequireDefault(_propTypes);

var _classnames = __webpack_require__("./node_modules/react-weui/build/packages/utils/classnames.js");

var _classnames2 = _interopRequireDefault(_classnames);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * Header of `Cell`
 *
 */
var CellHeader = function CellHeader(props) {
    var className = props.className,
        children = props.children,
        primary = props.primary,
        others = (0, _objectWithoutProperties3.default)(props, ['className', 'children', 'primary']);

    var cls = (0, _classnames2.default)((0, _defineProperty3.default)({
        'weui-cell__hd': true,
        'weui-cell_primary': primary
    }, className, className));

    return _react2.default.createElement(
        'div',
        (0, _extends3.default)({ className: cls }, others),
        children
    );
};

CellHeader.propTypes = {
    /**
     * if cell body is the primary block
     *
     */
    primary: _propTypes2.default.bool
};

CellHeader.defaultProps = {
    primary: false
};

exports.default = CellHeader;
module.exports = exports['default'];

/***/ }),

/***/ "./node_modules/react-weui/build/packages/components/cell/cells.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _extends2 = __webpack_require__("./node_modules/babel-runtime/helpers/extends.js");

var _extends3 = _interopRequireDefault(_extends2);

var _defineProperty2 = __webpack_require__("./node_modules/babel-runtime/helpers/defineProperty.js");

var _defineProperty3 = _interopRequireDefault(_defineProperty2);

var _objectWithoutProperties2 = __webpack_require__("./node_modules/babel-runtime/helpers/objectWithoutProperties.js");

var _objectWithoutProperties3 = _interopRequireDefault(_objectWithoutProperties2);

var _react = __webpack_require__("./node_modules/react/react.js");

var _react2 = _interopRequireDefault(_react);

var _classnames = __webpack_require__("./node_modules/react-weui/build/packages/utils/classnames.js");

var _classnames2 = _interopRequireDefault(_classnames);

var _deprecationWarning = __webpack_require__("./node_modules/react-weui/build/packages/utils/deprecationWarning.js");

var _deprecationWarning2 = _interopRequireDefault(_deprecationWarning);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * Wrapper for `Cell`
 *
 */
var Cells = function Cells(props) {
    var children = props.children,
        className = props.className,
        access = props.access,
        others = (0, _objectWithoutProperties3.default)(props, ['children', 'className', 'access']);


    if (access) {
        (0, _deprecationWarning2.default)('Cells Access', 'Cell Access', 'https://github.com/weui/weui/wiki/%E5%9C%A81.0.0%E5%9C%A8%E4%BB%A3%E7%A0%81%E5%B1%82%E9%9D%A2%E4%B8%8A%E5%81%9A%E4%BA%86%E5%93%AA%E4%BA%9B%E6%94%B9%E5%8F%98#%E5%B8%A6%E7%AE%AD%E5%A4%B4%E7%9A%84%E5%88%97%E8%A1%A8%E7%94%B1%E4%B9%8B%E5%89%8D%E7%9A%84weui_cells_access%E6%94%B9%E4%B8%BA%E5%8D%95%E7%8B%AC%E6%8E%A7%E5%88%B6%E7%9A%84weui-cell_access');
    }

    var cls = (0, _classnames2.default)((0, _defineProperty3.default)({
        'weui-cells': true
    }, className, className));

    return _react2.default.createElement(
        'div',
        (0, _extends3.default)({ className: cls }, others),
        children
    );
};

Cells.propTypes = {};

Cells.defaultProps = {};

exports.default = Cells;
module.exports = exports['default'];

/***/ }),

/***/ "./node_modules/react-weui/build/packages/components/cell/cells_tips.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _extends2 = __webpack_require__("./node_modules/babel-runtime/helpers/extends.js");

var _extends3 = _interopRequireDefault(_extends2);

var _defineProperty2 = __webpack_require__("./node_modules/babel-runtime/helpers/defineProperty.js");

var _defineProperty3 = _interopRequireDefault(_defineProperty2);

var _objectWithoutProperties2 = __webpack_require__("./node_modules/babel-runtime/helpers/objectWithoutProperties.js");

var _objectWithoutProperties3 = _interopRequireDefault(_objectWithoutProperties2);

var _react = __webpack_require__("./node_modules/react/react.js");

var _react2 = _interopRequireDefault(_react);

var _classnames = __webpack_require__("./node_modules/react-weui/build/packages/utils/classnames.js");

var _classnames2 = _interopRequireDefault(_classnames);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * Footer Information for `Cells`
 *
 */
var CellsTips = function CellsTips(props) {
    var className = props.className,
        children = props.children,
        others = (0, _objectWithoutProperties3.default)(props, ['className', 'children']);

    var cls = (0, _classnames2.default)((0, _defineProperty3.default)({
        'weui-cells__tips': true
    }, className, className));

    return _react2.default.createElement(
        'div',
        (0, _extends3.default)({ className: cls }, others),
        children
    );
};

exports.default = CellsTips;
module.exports = exports['default'];

/***/ }),

/***/ "./node_modules/react-weui/build/packages/components/cell/cells_title.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _extends2 = __webpack_require__("./node_modules/babel-runtime/helpers/extends.js");

var _extends3 = _interopRequireDefault(_extends2);

var _defineProperty2 = __webpack_require__("./node_modules/babel-runtime/helpers/defineProperty.js");

var _defineProperty3 = _interopRequireDefault(_defineProperty2);

var _objectWithoutProperties2 = __webpack_require__("./node_modules/babel-runtime/helpers/objectWithoutProperties.js");

var _objectWithoutProperties3 = _interopRequireDefault(_objectWithoutProperties2);

var _react = __webpack_require__("./node_modules/react/react.js");

var _react2 = _interopRequireDefault(_react);

var _classnames = __webpack_require__("./node_modules/react-weui/build/packages/utils/classnames.js");

var _classnames2 = _interopRequireDefault(_classnames);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * Heading for `Cells`
 *
 */
var CellsTitle = function CellsTitle(props) {
    var className = props.className,
        children = props.children,
        others = (0, _objectWithoutProperties3.default)(props, ['className', 'children']);

    var cls = (0, _classnames2.default)((0, _defineProperty3.default)({
        'weui-cells__title': true
    }, className, className));

    return _react2.default.createElement(
        'div',
        (0, _extends3.default)({ className: cls }, others),
        children
    );
};

exports.default = CellsTitle;
module.exports = exports['default'];

/***/ }),

/***/ "./node_modules/react-weui/build/packages/components/cell/index.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.CellFooter = exports.CellBody = exports.CellHeader = exports.CellsTips = exports.CellsTitle = exports.Cell = exports.Cells = undefined;

var _cells = __webpack_require__("./node_modules/react-weui/build/packages/components/cell/cells.js");

var _cells2 = _interopRequireDefault(_cells);

var _cell = __webpack_require__("./node_modules/react-weui/build/packages/components/cell/cell.js");

var _cell2 = _interopRequireDefault(_cell);

var _cells_title = __webpack_require__("./node_modules/react-weui/build/packages/components/cell/cells_title.js");

var _cells_title2 = _interopRequireDefault(_cells_title);

var _cells_tips = __webpack_require__("./node_modules/react-weui/build/packages/components/cell/cells_tips.js");

var _cells_tips2 = _interopRequireDefault(_cells_tips);

var _cell_header = __webpack_require__("./node_modules/react-weui/build/packages/components/cell/cell_header.js");

var _cell_header2 = _interopRequireDefault(_cell_header);

var _cell_body = __webpack_require__("./node_modules/react-weui/build/packages/components/cell/cell_body.js");

var _cell_body2 = _interopRequireDefault(_cell_body);

var _cell_footer = __webpack_require__("./node_modules/react-weui/build/packages/components/cell/cell_footer.js");

var _cell_footer2 = _interopRequireDefault(_cell_footer);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.Cells = _cells2.default;
exports.Cell = _cell2.default;
exports.CellsTitle = _cells_title2.default;
exports.CellsTips = _cells_tips2.default;
exports.CellHeader = _cell_header2.default;
exports.CellBody = _cell_body2.default;
exports.CellFooter = _cell_footer2.default;

/***/ }),

/***/ "./node_modules/react-weui/build/packages/components/dialog/dialog.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _defineProperty2 = __webpack_require__("./node_modules/babel-runtime/helpers/defineProperty.js");

var _defineProperty3 = _interopRequireDefault(_defineProperty2);

var _extends2 = __webpack_require__("./node_modules/babel-runtime/helpers/extends.js");

var _extends3 = _interopRequireDefault(_extends2);

var _objectWithoutProperties2 = __webpack_require__("./node_modules/babel-runtime/helpers/objectWithoutProperties.js");

var _objectWithoutProperties3 = _interopRequireDefault(_objectWithoutProperties2);

var _getPrototypeOf = __webpack_require__("./node_modules/babel-runtime/core-js/object/get-prototype-of.js");

var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

var _classCallCheck2 = __webpack_require__("./node_modules/babel-runtime/helpers/classCallCheck.js");

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = __webpack_require__("./node_modules/babel-runtime/helpers/createClass.js");

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = __webpack_require__("./node_modules/babel-runtime/helpers/possibleConstructorReturn.js");

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = __webpack_require__("./node_modules/babel-runtime/helpers/inherits.js");

var _inherits3 = _interopRequireDefault(_inherits2);

var _react = __webpack_require__("./node_modules/react/react.js");

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__("./node_modules/prop-types/index.js");

var _propTypes2 = _interopRequireDefault(_propTypes);

var _classnames = __webpack_require__("./node_modules/react-weui/build/packages/utils/classnames.js");

var _classnames2 = _interopRequireDefault(_classnames);

var _index = __webpack_require__("./node_modules/react-weui/build/packages/components/mask/index.js");

var _index2 = _interopRequireDefault(_index);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * Modals provide feedback to user
 *
 */
var Dialog = function (_Component) {
    (0, _inherits3.default)(Dialog, _Component);

    function Dialog(props) {
        (0, _classCallCheck3.default)(this, Dialog);

        var _this = (0, _possibleConstructorReturn3.default)(this, (Dialog.__proto__ || (0, _getPrototypeOf2.default)(Dialog)).call(this, props));

        _this.state = {
            isAndroid: ''
        };
        return _this;
    }

    (0, _createClass3.default)(Dialog, [{
        key: 'renderButtons',
        value: function renderButtons() {
            return this.props.buttons.map(function (action, idx) {
                var type = action.type,
                    label = action.label,
                    others = (0, _objectWithoutProperties3.default)(action, ['type', 'label']);

                var className = (0, _classnames2.default)({
                    'weui-dialog__btn': true,
                    'weui-dialog__btn_default': type === 'default',
                    'weui-dialog__btn_primary': type === 'primary'
                });

                return _react2.default.createElement(
                    'a',
                    (0, _extends3.default)({ key: idx, href: 'javascript:;' }, others, { className: className }),
                    label
                );
            });
        }
    }, {
        key: 'render',
        value: function render() {
            var _props = this.props,
                title = _props.title,
                show = _props.show,
                className = _props.className,
                children = _props.children,
                buttons = _props.buttons,
                type = _props.type,
                autoDectect = _props.autoDectect,
                others = (0, _objectWithoutProperties3.default)(_props, ['title', 'show', 'className', 'children', 'buttons', 'type', 'autoDectect']);

            var styleType = type ? type : 'ios';
            var cls = (0, _classnames2.default)('weui-dialog', (0, _defineProperty3.default)({
                'weui-skin_android': styleType === 'android'
            }, className, className));

            return _react2.default.createElement(
                'div',
                { style: { display: show ? 'block' : 'none' } },
                _react2.default.createElement(_index2.default, null),
                _react2.default.createElement(
                    'div',
                    (0, _extends3.default)({ className: cls }, others),
                    title ? _react2.default.createElement(
                        'div',
                        { className: 'weui-dialog__hd' },
                        _react2.default.createElement(
                            'strong',
                            { className: 'weui-dialog__title' },
                            title
                        )
                    ) : false,
                    _react2.default.createElement(
                        'div',
                        { className: 'weui-dialog__bd' },
                        children
                    ),
                    _react2.default.createElement(
                        'div',
                        { className: 'weui-dialog__ft' },
                        this.renderButtons()
                    )
                )
            );
        }
    }]);
    return Dialog;
}(_react.Component);

Dialog.propTypes = {
    /**
     * Object Arrays of buttons, `label` property is require
     *
     */
    buttons: _propTypes2.default.array,
    /**
     * to display the dialog
     *
     */
    show: _propTypes2.default.bool,
    /**
     * Title of dialog
     *
     */
    title: _propTypes2.default.string,
    /**
     * Specify display style: ios/android, default is ios when autoDetect not on
     *
     */
    type: _propTypes2.default.string
};
Dialog.defaultProps = {
    buttons: [],
    show: false,
    title: '',
    type: ''
};
exports.default = Dialog;
module.exports = exports['default'];

/***/ }),

/***/ "./node_modules/react-weui/build/packages/components/dialog/index.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _dialog = __webpack_require__("./node_modules/react-weui/build/packages/components/dialog/dialog.js");

var _dialog2 = _interopRequireDefault(_dialog);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = _dialog2.default;
module.exports = exports['default'];

/***/ }),

/***/ "./node_modules/react-weui/build/packages/components/flex/flex.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _extends2 = __webpack_require__("./node_modules/babel-runtime/helpers/extends.js");

var _extends3 = _interopRequireDefault(_extends2);

var _react = __webpack_require__("./node_modules/react/react.js");

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * FlexItem Container
 *
 */
var Flex = function Flex(props) {
    return _react2.default.createElement(
        "div",
        (0, _extends3.default)({ className: "weui-flex" }, props),
        props.children
    );
}; //1.0.0 components

exports.default = Flex;
module.exports = exports["default"];

/***/ }),

/***/ "./node_modules/react-weui/build/packages/components/flex/flex_item.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _extends2 = __webpack_require__("./node_modules/babel-runtime/helpers/extends.js");

var _extends3 = _interopRequireDefault(_extends2);

var _objectWithoutProperties2 = __webpack_require__("./node_modules/babel-runtime/helpers/objectWithoutProperties.js");

var _objectWithoutProperties3 = _interopRequireDefault(_objectWithoutProperties2);

var _react = __webpack_require__("./node_modules/react/react.js");

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__("./node_modules/prop-types/index.js");

var _propTypes2 = _interopRequireDefault(_propTypes);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * Evenly distribute flex items
 *
 */
//1.0.0 components

var FlexItem = function FlexItem(props) {
    var component = props.component,
        children = props.children,
        others = (0, _objectWithoutProperties3.default)(props, ['component', 'children']);

    return _react2.default.createElement(
        'component',
        (0, _extends3.default)({ className: 'weui-flex__item' }, others),
        children
    );
};

FlexItem.propTypes = {
    /**
     * pass component to replace the component but maintaing style
     *
     */
    component: _propTypes2.default.node
};

FlexItem.defaultProps = {
    component: 'div'
};

exports.default = FlexItem;
module.exports = exports['default'];

/***/ }),

/***/ "./node_modules/react-weui/build/packages/components/flex/index.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.FlexItem = exports.Flex = undefined;

var _flex = __webpack_require__("./node_modules/react-weui/build/packages/components/flex/flex.js");

var _flex2 = _interopRequireDefault(_flex);

var _flex_item = __webpack_require__("./node_modules/react-weui/build/packages/components/flex/flex_item.js");

var _flex_item2 = _interopRequireDefault(_flex_item);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

//1.0.0 components

exports.Flex = _flex2.default;
exports.FlexItem = _flex_item2.default;

/***/ }),

/***/ "./node_modules/react-weui/build/packages/components/footer/footer.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _extends2 = __webpack_require__("./node_modules/babel-runtime/helpers/extends.js");

var _extends3 = _interopRequireDefault(_extends2);

var _defineProperty2 = __webpack_require__("./node_modules/babel-runtime/helpers/defineProperty.js");

var _defineProperty3 = _interopRequireDefault(_defineProperty2);

var _objectWithoutProperties2 = __webpack_require__("./node_modules/babel-runtime/helpers/objectWithoutProperties.js");

var _objectWithoutProperties3 = _interopRequireDefault(_objectWithoutProperties2);

var _react = __webpack_require__("./node_modules/react/react.js");

var _react2 = _interopRequireDefault(_react);

var _classnames = __webpack_require__("./node_modules/react-weui/build/packages/utils/classnames.js");

var _classnames2 = _interopRequireDefault(_classnames);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * consists of `footer_links`, `footer_link` and `footer_text`
 *
 */
var Footer = function Footer(props) {
    var className = props.className,
        children = props.children,
        others = (0, _objectWithoutProperties3.default)(props, ['className', 'children']);

    var cls = (0, _classnames2.default)((0, _defineProperty3.default)({
        'weui-footer': true
    }, className, className));

    return _react2.default.createElement(
        'div',
        (0, _extends3.default)({ className: cls }, others),
        children
    );
};

exports.default = Footer;
module.exports = exports['default'];

/***/ }),

/***/ "./node_modules/react-weui/build/packages/components/footer/footer_link.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _extends2 = __webpack_require__("./node_modules/babel-runtime/helpers/extends.js");

var _extends3 = _interopRequireDefault(_extends2);

var _defineProperty2 = __webpack_require__("./node_modules/babel-runtime/helpers/defineProperty.js");

var _defineProperty3 = _interopRequireDefault(_defineProperty2);

var _objectWithoutProperties2 = __webpack_require__("./node_modules/babel-runtime/helpers/objectWithoutProperties.js");

var _objectWithoutProperties3 = _interopRequireDefault(_objectWithoutProperties2);

var _react = __webpack_require__("./node_modules/react/react.js");

var _react2 = _interopRequireDefault(_react);

var _classnames = __webpack_require__("./node_modules/react-weui/build/packages/utils/classnames.js");

var _classnames2 = _interopRequireDefault(_classnames);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * foot link wrapper for link
 *
 */
var FooterLink = function FooterLink(props) {
    var className = props.className,
        children = props.children,
        others = (0, _objectWithoutProperties3.default)(props, ['className', 'children']);

    var cls = (0, _classnames2.default)((0, _defineProperty3.default)({
        'weui-footer__link': true
    }, className, className));

    return _react2.default.createElement(
        'a',
        (0, _extends3.default)({ className: cls }, others),
        children
    );
};

exports.default = FooterLink;
module.exports = exports['default'];

/***/ }),

/***/ "./node_modules/react-weui/build/packages/components/footer/footer_links.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _extends2 = __webpack_require__("./node_modules/babel-runtime/helpers/extends.js");

var _extends3 = _interopRequireDefault(_extends2);

var _defineProperty2 = __webpack_require__("./node_modules/babel-runtime/helpers/defineProperty.js");

var _defineProperty3 = _interopRequireDefault(_defineProperty2);

var _objectWithoutProperties2 = __webpack_require__("./node_modules/babel-runtime/helpers/objectWithoutProperties.js");

var _objectWithoutProperties3 = _interopRequireDefault(_objectWithoutProperties2);

var _react = __webpack_require__("./node_modules/react/react.js");

var _react2 = _interopRequireDefault(_react);

var _classnames = __webpack_require__("./node_modules/react-weui/build/packages/utils/classnames.js");

var _classnames2 = _interopRequireDefault(_classnames);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * consists of `footer_link`
 *
 */
var FooterLinks = function FooterLinks(props) {
    var className = props.className,
        children = props.children,
        others = (0, _objectWithoutProperties3.default)(props, ['className', 'children']);

    var cls = (0, _classnames2.default)((0, _defineProperty3.default)({
        'weui-footer__links': true
    }, className, className));

    return _react2.default.createElement(
        'p',
        (0, _extends3.default)({ className: cls }, others),
        children
    );
};

exports.default = FooterLinks;
module.exports = exports['default'];

/***/ }),

/***/ "./node_modules/react-weui/build/packages/components/footer/footer_text.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _extends2 = __webpack_require__("./node_modules/babel-runtime/helpers/extends.js");

var _extends3 = _interopRequireDefault(_extends2);

var _defineProperty2 = __webpack_require__("./node_modules/babel-runtime/helpers/defineProperty.js");

var _defineProperty3 = _interopRequireDefault(_defineProperty2);

var _objectWithoutProperties2 = __webpack_require__("./node_modules/babel-runtime/helpers/objectWithoutProperties.js");

var _objectWithoutProperties3 = _interopRequireDefault(_objectWithoutProperties2);

var _react = __webpack_require__("./node_modules/react/react.js");

var _react2 = _interopRequireDefault(_react);

var _classnames = __webpack_require__("./node_modules/react-weui/build/packages/utils/classnames.js");

var _classnames2 = _interopRequireDefault(_classnames);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * paragraph wrapper for footer
 *
 */
var FooterText = function FooterText(props) {
    var className = props.className,
        children = props.children,
        others = (0, _objectWithoutProperties3.default)(props, ['className', 'children']);

    var cls = (0, _classnames2.default)((0, _defineProperty3.default)({
        'weui-footer__text': true
    }, className, className));

    return _react2.default.createElement(
        'p',
        (0, _extends3.default)({ className: cls }, others),
        children
    );
};

exports.default = FooterText;
module.exports = exports['default'];

/***/ }),

/***/ "./node_modules/react-weui/build/packages/components/footer/index.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.FooterLink = exports.FooterLinks = exports.FooterText = exports.Footer = undefined;

var _footer = __webpack_require__("./node_modules/react-weui/build/packages/components/footer/footer.js");

var _footer2 = _interopRequireDefault(_footer);

var _footer_text = __webpack_require__("./node_modules/react-weui/build/packages/components/footer/footer_text.js");

var _footer_text2 = _interopRequireDefault(_footer_text);

var _footer_links = __webpack_require__("./node_modules/react-weui/build/packages/components/footer/footer_links.js");

var _footer_links2 = _interopRequireDefault(_footer_links);

var _footer_link = __webpack_require__("./node_modules/react-weui/build/packages/components/footer/footer_link.js");

var _footer_link2 = _interopRequireDefault(_footer_link);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.Footer = _footer2.default;
exports.FooterText = _footer_text2.default;
exports.FooterLinks = _footer_links2.default;
exports.FooterLink = _footer_link2.default;

/***/ }),

/***/ "./node_modules/react-weui/build/packages/components/form/agreement.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _extends2 = __webpack_require__("./node_modules/babel-runtime/helpers/extends.js");

var _extends3 = _interopRequireDefault(_extends2);

var _defineProperty2 = __webpack_require__("./node_modules/babel-runtime/helpers/defineProperty.js");

var _defineProperty3 = _interopRequireDefault(_defineProperty2);

var _objectWithoutProperties2 = __webpack_require__("./node_modules/babel-runtime/helpers/objectWithoutProperties.js");

var _objectWithoutProperties3 = _interopRequireDefault(_objectWithoutProperties2);

var _react = __webpack_require__("./node_modules/react/react.js");

var _react2 = _interopRequireDefault(_react);

var _classnames = __webpack_require__("./node_modules/react-weui/build/packages/utils/classnames.js");

var _classnames2 = _interopRequireDefault(_classnames);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * Agreement style checkbox
 *
 */
var Agreement = function Agreement(props) {
    var className = props.className,
        children = props.children,
        id = props.id,
        others = (0, _objectWithoutProperties3.default)(props, ['className', 'children', 'id']);

    var cls = (0, _classnames2.default)((0, _defineProperty3.default)({
        'weui-agree': true
    }, className, className));

    return _react2.default.createElement(
        'label',
        { className: cls, htmlFor: id },
        _react2.default.createElement('input', (0, _extends3.default)({ id: id, type: 'checkbox', className: 'weui-agree__checkbox' }, others)),
        _react2.default.createElement(
            'span',
            { className: 'weui-agree__text' },
            children
        )
    );
};

exports.default = Agreement;
module.exports = exports['default'];

/***/ }),

/***/ "./node_modules/react-weui/build/packages/components/form/checkbox.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _extends2 = __webpack_require__("./node_modules/babel-runtime/helpers/extends.js");

var _extends3 = _interopRequireDefault(_extends2);

var _defineProperty2 = __webpack_require__("./node_modules/babel-runtime/helpers/defineProperty.js");

var _defineProperty3 = _interopRequireDefault(_defineProperty2);

var _objectWithoutProperties2 = __webpack_require__("./node_modules/babel-runtime/helpers/objectWithoutProperties.js");

var _objectWithoutProperties3 = _interopRequireDefault(_objectWithoutProperties2);

var _react = __webpack_require__("./node_modules/react/react.js");

var _react2 = _interopRequireDefault(_react);

var _classnames = __webpack_require__("./node_modules/react-weui/build/packages/utils/classnames.js");

var _classnames2 = _interopRequireDefault(_classnames);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * weui wrapper for checkbox
 *
 */
var Checkbox = function Checkbox(props) {
    var className = props.className,
        others = (0, _objectWithoutProperties3.default)(props, ['className']);

    var cls = (0, _classnames2.default)((0, _defineProperty3.default)({
        'weui-check': true
    }, className, className));

    return _react2.default.createElement(
        'div',
        null,
        _react2.default.createElement('input', (0, _extends3.default)({ className: cls, type: 'checkbox' }, others)),
        _react2.default.createElement('span', { className: 'weui-icon-checked' })
    );
};

exports.default = Checkbox;
module.exports = exports['default'];

/***/ }),

/***/ "./node_modules/react-weui/build/packages/components/form/form.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _extends2 = __webpack_require__("./node_modules/babel-runtime/helpers/extends.js");

var _extends3 = _interopRequireDefault(_extends2);

var _defineProperty2 = __webpack_require__("./node_modules/babel-runtime/helpers/defineProperty.js");

var _defineProperty3 = _interopRequireDefault(_defineProperty2);

var _objectWithoutProperties2 = __webpack_require__("./node_modules/babel-runtime/helpers/objectWithoutProperties.js");

var _objectWithoutProperties3 = _interopRequireDefault(_objectWithoutProperties2);

var _getPrototypeOf = __webpack_require__("./node_modules/babel-runtime/core-js/object/get-prototype-of.js");

var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

var _classCallCheck2 = __webpack_require__("./node_modules/babel-runtime/helpers/classCallCheck.js");

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = __webpack_require__("./node_modules/babel-runtime/helpers/createClass.js");

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = __webpack_require__("./node_modules/babel-runtime/helpers/possibleConstructorReturn.js");

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = __webpack_require__("./node_modules/babel-runtime/helpers/inherits.js");

var _inherits3 = _interopRequireDefault(_inherits2);

var _react = __webpack_require__("./node_modules/react/react.js");

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__("./node_modules/prop-types/index.js");

var _propTypes2 = _interopRequireDefault(_propTypes);

var _classnames = __webpack_require__("./node_modules/react-weui/build/packages/utils/classnames.js");

var _classnames2 = _interopRequireDefault(_classnames);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * weui wrapper for form
 *
 */
var Form = function (_Component) {
    (0, _inherits3.default)(Form, _Component);

    function Form() {
        (0, _classCallCheck3.default)(this, Form);
        return (0, _possibleConstructorReturn3.default)(this, (Form.__proto__ || (0, _getPrototypeOf2.default)(Form)).apply(this, arguments));
    }

    (0, _createClass3.default)(Form, [{
        key: 'render',
        value: function render() {
            var _props = this.props,
                children = _props.children,
                className = _props.className,
                radio = _props.radio,
                checkbox = _props.checkbox,
                others = (0, _objectWithoutProperties3.default)(_props, ['children', 'className', 'radio', 'checkbox']);

            var cls = (0, _classnames2.default)((0, _defineProperty3.default)({
                'weui-cells': true,
                'weui-cells_form': !radio && !checkbox,
                'weui-cells_radio': radio,
                'weui-cells_checkbox': checkbox
            }, className, className));

            return _react2.default.createElement(
                'div',
                (0, _extends3.default)({ className: cls }, others),
                children
            );
        }
    }]);
    return Form;
}(_react.Component);

Form.propTypes = {
    /**
     * if this form is use for radios
     *
     */
    radio: _propTypes2.default.bool,
    /**
     * if this form is use for checkbox
     *
     */
    checkbox: _propTypes2.default.bool
};
Form.defaultProps = {
    radio: false,
    checkbox: false
};
;

exports.default = Form;
module.exports = exports['default'];

/***/ }),

/***/ "./node_modules/react-weui/build/packages/components/form/form_cell.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _extends2 = __webpack_require__("./node_modules/babel-runtime/helpers/extends.js");

var _extends3 = _interopRequireDefault(_extends2);

var _defineProperty2 = __webpack_require__("./node_modules/babel-runtime/helpers/defineProperty.js");

var _defineProperty3 = _interopRequireDefault(_defineProperty2);

var _assign = __webpack_require__("./node_modules/babel-runtime/core-js/object/assign.js");

var _assign2 = _interopRequireDefault(_assign);

var _objectWithoutProperties2 = __webpack_require__("./node_modules/babel-runtime/helpers/objectWithoutProperties.js");

var _objectWithoutProperties3 = _interopRequireDefault(_objectWithoutProperties2);

var _getPrototypeOf = __webpack_require__("./node_modules/babel-runtime/core-js/object/get-prototype-of.js");

var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

var _classCallCheck2 = __webpack_require__("./node_modules/babel-runtime/helpers/classCallCheck.js");

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = __webpack_require__("./node_modules/babel-runtime/helpers/createClass.js");

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = __webpack_require__("./node_modules/babel-runtime/helpers/possibleConstructorReturn.js");

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = __webpack_require__("./node_modules/babel-runtime/helpers/inherits.js");

var _inherits3 = _interopRequireDefault(_inherits2);

var _react = __webpack_require__("./node_modules/react/react.js");

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__("./node_modules/prop-types/index.js");

var _propTypes2 = _interopRequireDefault(_propTypes);

var _classnames = __webpack_require__("./node_modules/react-weui/build/packages/utils/classnames.js");

var _classnames2 = _interopRequireDefault(_classnames);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * form wrapper for `Cell`
 *
 */
var FormCell = function (_Component) {
    (0, _inherits3.default)(FormCell, _Component);

    function FormCell() {
        (0, _classCallCheck3.default)(this, FormCell);
        return (0, _possibleConstructorReturn3.default)(this, (FormCell.__proto__ || (0, _getPrototypeOf2.default)(FormCell)).apply(this, arguments));
    }

    (0, _createClass3.default)(FormCell, [{
        key: 'render',
        value: function render() {
            var _props = this.props,
                className = _props.className,
                children = _props.children,
                radio = _props.radio,
                checkbox = _props.checkbox,
                vcode = _props.vcode,
                warn = _props.warn,
                select = _props.select,
                selectPos = _props.selectPos,
                others = (0, _objectWithoutProperties3.default)(_props, ['className', 'children', 'radio', 'checkbox', 'vcode', 'warn', 'select', 'selectPos']);

            var cellDomProps = (0, _assign2.default)({}, others);
            delete cellDomProps.switch;
            var cls = (0, _classnames2.default)((0, _defineProperty3.default)({
                'weui-cell': true,
                'weui-cell_vcode': vcode,
                'weui-cell_warn': warn,
                'weui-cell_switch': this.props.switch,
                'weui-cell_select': select,
                'weui-cell_select-before': selectPos === 'before',
                'weui-cell_select-after': selectPos === 'after',
                'weui-check__label': radio || checkbox
            }, className, className));

            if (radio || checkbox) {
                return _react2.default.createElement(
                    'label',
                    (0, _extends3.default)({ className: cls }, cellDomProps),
                    children
                );
            } else {
                return _react2.default.createElement(
                    'div',
                    (0, _extends3.default)({ className: cls }, cellDomProps),
                    children
                );
            }
        }
    }]);
    return FormCell;
}(_react.Component);

FormCell.propTypes = {
    /**
     * if cell use for vcode
     *
     */
    vcode: _propTypes2.default.bool,
    /**
     * display warn style of cell
     *
     */
    warn: _propTypes2.default.bool,
    /**
     * if cell use for radio
     *
     */
    radio: _propTypes2.default.bool,
    /**
     * if cell use for checkbox
     *
     */
    checkbox: _propTypes2.default.bool,
    /**
     * if cell use for switch checkbox
     *
     */
    'switch': _propTypes2.default.bool,
    /**
     * if cell use for select
     *
     */
    select: _propTypes2.default.bool,
    /**
     * select position, options: before, after
     *
     */
    selectPos: _propTypes2.default.string
};
FormCell.defaultProps = {
    vcode: false,
    warn: false,
    radio: false,
    checkbox: false,
    select: false,
    'switch': false,
    selectPos: undefined
};
exports.default = FormCell;
;
module.exports = exports['default'];

/***/ }),

/***/ "./node_modules/react-weui/build/packages/components/form/index.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.Slider = exports.PreviewItem = exports.PreviewFooter = exports.PreviewBody = exports.PreviewHeader = exports.Preview = exports.Agreement = exports.VCode = exports.Uploader = exports.Select = exports.Checkbox = exports.Radio = exports.Switch = exports.Input = exports.TextArea = exports.FormCell = exports.Form = undefined;

var _form = __webpack_require__("./node_modules/react-weui/build/packages/components/form/form.js");

var _form2 = _interopRequireDefault(_form);

var _form_cell = __webpack_require__("./node_modules/react-weui/build/packages/components/form/form_cell.js");

var _form_cell2 = _interopRequireDefault(_form_cell);

var _textarea = __webpack_require__("./node_modules/react-weui/build/packages/components/form/textarea.js");

var _textarea2 = _interopRequireDefault(_textarea);

var _input = __webpack_require__("./node_modules/react-weui/build/packages/components/form/input.js");

var _input2 = _interopRequireDefault(_input);

var _switch = __webpack_require__("./node_modules/react-weui/build/packages/components/form/switch.js");

var _switch2 = _interopRequireDefault(_switch);

var _radio = __webpack_require__("./node_modules/react-weui/build/packages/components/form/radio.js");

var _radio2 = _interopRequireDefault(_radio);

var _checkbox = __webpack_require__("./node_modules/react-weui/build/packages/components/form/checkbox.js");

var _checkbox2 = _interopRequireDefault(_checkbox);

var _select = __webpack_require__("./node_modules/react-weui/build/packages/components/form/select.js");

var _select2 = _interopRequireDefault(_select);

var _uploader = __webpack_require__("./node_modules/react-weui/build/packages/components/form/uploader.js");

var _uploader2 = _interopRequireDefault(_uploader);

var _vcode = __webpack_require__("./node_modules/react-weui/build/packages/components/form/vcode.js");

var _vcode2 = _interopRequireDefault(_vcode);

var _agreement = __webpack_require__("./node_modules/react-weui/build/packages/components/form/agreement.js");

var _agreement2 = _interopRequireDefault(_agreement);

var _preview = __webpack_require__("./node_modules/react-weui/build/packages/components/form/preview.js");

var _preview2 = _interopRequireDefault(_preview);

var _preview_header = __webpack_require__("./node_modules/react-weui/build/packages/components/form/preview_header.js");

var _preview_header2 = _interopRequireDefault(_preview_header);

var _preview_body = __webpack_require__("./node_modules/react-weui/build/packages/components/form/preview_body.js");

var _preview_body2 = _interopRequireDefault(_preview_body);

var _preview_footer = __webpack_require__("./node_modules/react-weui/build/packages/components/form/preview_footer.js");

var _preview_footer2 = _interopRequireDefault(_preview_footer);

var _preview_item = __webpack_require__("./node_modules/react-weui/build/packages/components/form/preview_item.js");

var _preview_item2 = _interopRequireDefault(_preview_item);

var _slider = __webpack_require__("./node_modules/react-weui/build/packages/components/form/slider.js");

var _slider2 = _interopRequireDefault(_slider);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.Form = _form2.default;
exports.FormCell = _form_cell2.default;
exports.TextArea = _textarea2.default;
exports.Input = _input2.default;
exports.Switch = _switch2.default;
exports.Radio = _radio2.default;
exports.Checkbox = _checkbox2.default;
exports.Select = _select2.default;
exports.Uploader = _uploader2.default;
exports.VCode = _vcode2.default;
exports.Agreement = _agreement2.default;
exports.Preview = _preview2.default;
exports.PreviewHeader = _preview_header2.default;
exports.PreviewBody = _preview_body2.default;
exports.PreviewFooter = _preview_footer2.default;
exports.PreviewItem = _preview_item2.default;
exports.Slider = _slider2.default;

/***/ }),

/***/ "./node_modules/react-weui/build/packages/components/form/input.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _extends2 = __webpack_require__("./node_modules/babel-runtime/helpers/extends.js");

var _extends3 = _interopRequireDefault(_extends2);

var _defineProperty2 = __webpack_require__("./node_modules/babel-runtime/helpers/defineProperty.js");

var _defineProperty3 = _interopRequireDefault(_defineProperty2);

var _objectWithoutProperties2 = __webpack_require__("./node_modules/babel-runtime/helpers/objectWithoutProperties.js");

var _objectWithoutProperties3 = _interopRequireDefault(_objectWithoutProperties2);

var _react = __webpack_require__("./node_modules/react/react.js");

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__("./node_modules/prop-types/index.js");

var _propTypes2 = _interopRequireDefault(_propTypes);

var _classnames = __webpack_require__("./node_modules/react-weui/build/packages/utils/classnames.js");

var _classnames2 = _interopRequireDefault(_classnames);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * WeUI Input wrapper for `input`
 *
 */
var Input = function Input(props) {
    var className = props.className,
        others = (0, _objectWithoutProperties3.default)(props, ['className']);

    var cls = (0, _classnames2.default)((0, _defineProperty3.default)({
        'weui-input': true
    }, className, className));

    return _react2.default.createElement(
        'div',
        null,
        _react2.default.createElement('input', (0, _extends3.default)({ className: cls }, others)),
        _react2.default.createElement('span', { className: 'weui-icon-checked' })
    );
};

Input.propTypes = {
    defaultValue: _propTypes2.default.string
};

Input.defaultProps = {
    defaultValue: undefined
};

exports.default = Input;
module.exports = exports['default'];

/***/ }),

/***/ "./node_modules/react-weui/build/packages/components/form/preview.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _extends2 = __webpack_require__("./node_modules/babel-runtime/helpers/extends.js");

var _extends3 = _interopRequireDefault(_extends2);

var _defineProperty2 = __webpack_require__("./node_modules/babel-runtime/helpers/defineProperty.js");

var _defineProperty3 = _interopRequireDefault(_defineProperty2);

var _objectWithoutProperties2 = __webpack_require__("./node_modules/babel-runtime/helpers/objectWithoutProperties.js");

var _objectWithoutProperties3 = _interopRequireDefault(_objectWithoutProperties2);

var _react = __webpack_require__("./node_modules/react/react.js");

var _react2 = _interopRequireDefault(_react);

var _classnames = __webpack_require__("./node_modules/react-weui/build/packages/utils/classnames.js");

var _classnames2 = _interopRequireDefault(_classnames);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * Preview Wrapper consists of `PreviewHeader`, `PreviewBody`, `PreviewFooter`, `PreviewItem`
 *
 */
//1.0.0 components

var Preview = function Preview(props) {
    var className = props.className,
        children = props.children,
        others = (0, _objectWithoutProperties3.default)(props, ['className', 'children']);

    var cls = (0, _classnames2.default)((0, _defineProperty3.default)({
        'weui-form-preview': true
    }, className, className));

    return _react2.default.createElement(
        'div',
        (0, _extends3.default)({ className: cls }, others),
        children
    );
};

exports.default = Preview;
module.exports = exports['default'];

/***/ }),

/***/ "./node_modules/react-weui/build/packages/components/form/preview_body.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _extends2 = __webpack_require__("./node_modules/babel-runtime/helpers/extends.js");

var _extends3 = _interopRequireDefault(_extends2);

var _defineProperty2 = __webpack_require__("./node_modules/babel-runtime/helpers/defineProperty.js");

var _defineProperty3 = _interopRequireDefault(_defineProperty2);

var _objectWithoutProperties2 = __webpack_require__("./node_modules/babel-runtime/helpers/objectWithoutProperties.js");

var _objectWithoutProperties3 = _interopRequireDefault(_objectWithoutProperties2);

var _react = __webpack_require__("./node_modules/react/react.js");

var _react2 = _interopRequireDefault(_react);

var _classnames = __webpack_require__("./node_modules/react-weui/build/packages/utils/classnames.js");

var _classnames2 = _interopRequireDefault(_classnames);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * Content of Preview
 *
 */
//1.0.0 components

var PreviewBody = function PreviewBody(props) {
    var className = props.className,
        children = props.children,
        others = (0, _objectWithoutProperties3.default)(props, ['className', 'children']);

    var cls = (0, _classnames2.default)((0, _defineProperty3.default)({
        'weui-form-preview__bd': true
    }, className, className));

    return _react2.default.createElement(
        'div',
        (0, _extends3.default)({ className: cls }, others),
        children
    );
};

exports.default = PreviewBody;
module.exports = exports['default'];

/***/ }),

/***/ "./node_modules/react-weui/build/packages/components/form/preview_footer.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _extends2 = __webpack_require__("./node_modules/babel-runtime/helpers/extends.js");

var _extends3 = _interopRequireDefault(_extends2);

var _defineProperty2 = __webpack_require__("./node_modules/babel-runtime/helpers/defineProperty.js");

var _defineProperty3 = _interopRequireDefault(_defineProperty2);

var _objectWithoutProperties2 = __webpack_require__("./node_modules/babel-runtime/helpers/objectWithoutProperties.js");

var _objectWithoutProperties3 = _interopRequireDefault(_objectWithoutProperties2);

var _react = __webpack_require__("./node_modules/react/react.js");

var _react2 = _interopRequireDefault(_react);

var _classnames = __webpack_require__("./node_modules/react-weui/build/packages/utils/classnames.js");

var _classnames2 = _interopRequireDefault(_classnames);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * Footer of Preview, consists of actions
 *
 */
//1.0.0 components

var PreviewFooter = function PreviewFooter(props) {
    var className = props.className,
        children = props.children,
        others = (0, _objectWithoutProperties3.default)(props, ['className', 'children']);

    var cls = (0, _classnames2.default)((0, _defineProperty3.default)({
        'weui-form-preview__ft': true
    }, className, className));

    return _react2.default.createElement(
        'div',
        (0, _extends3.default)({ className: cls }, others),
        children
    );
};

exports.default = PreviewFooter;
module.exports = exports['default'];

/***/ }),

/***/ "./node_modules/react-weui/build/packages/components/form/preview_header.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _extends2 = __webpack_require__("./node_modules/babel-runtime/helpers/extends.js");

var _extends3 = _interopRequireDefault(_extends2);

var _defineProperty2 = __webpack_require__("./node_modules/babel-runtime/helpers/defineProperty.js");

var _defineProperty3 = _interopRequireDefault(_defineProperty2);

var _objectWithoutProperties2 = __webpack_require__("./node_modules/babel-runtime/helpers/objectWithoutProperties.js");

var _objectWithoutProperties3 = _interopRequireDefault(_objectWithoutProperties2);

var _react = __webpack_require__("./node_modules/react/react.js");

var _react2 = _interopRequireDefault(_react);

var _classnames = __webpack_require__("./node_modules/react-weui/build/packages/utils/classnames.js");

var _classnames2 = _interopRequireDefault(_classnames);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

//1.0.0 components

var PreviewHeader = function PreviewHeader(props) {
    var className = props.className,
        children = props.children,
        others = (0, _objectWithoutProperties3.default)(props, ['className', 'children']);

    var cls = (0, _classnames2.default)((0, _defineProperty3.default)({
        'weui-form-preview__hd': true
    }, className, className));

    return _react2.default.createElement(
        'div',
        (0, _extends3.default)({ className: cls }, others),
        children
    );
};

exports.default = PreviewHeader;
module.exports = exports['default'];

/***/ }),

/***/ "./node_modules/react-weui/build/packages/components/form/preview_item.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _extends2 = __webpack_require__("./node_modules/babel-runtime/helpers/extends.js");

var _extends3 = _interopRequireDefault(_extends2);

var _defineProperty2 = __webpack_require__("./node_modules/babel-runtime/helpers/defineProperty.js");

var _defineProperty3 = _interopRequireDefault(_defineProperty2);

var _objectWithoutProperties2 = __webpack_require__("./node_modules/babel-runtime/helpers/objectWithoutProperties.js");

var _objectWithoutProperties3 = _interopRequireDefault(_objectWithoutProperties2);

var _react = __webpack_require__("./node_modules/react/react.js");

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__("./node_modules/prop-types/index.js");

var _propTypes2 = _interopRequireDefault(_propTypes);

var _classnames = __webpack_require__("./node_modules/react-weui/build/packages/utils/classnames.js");

var _classnames2 = _interopRequireDefault(_classnames);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * Preview Item for all purpose usage
 *
 */
var PreviewItem = function PreviewItem(props) {
    var className = props.className,
        label = props.label,
        value = props.value,
        others = (0, _objectWithoutProperties3.default)(props, ['className', 'label', 'value']);

    var cls = (0, _classnames2.default)((0, _defineProperty3.default)({
        'weui-form-preview__item': true
    }, className, className));

    return _react2.default.createElement(
        'div',
        (0, _extends3.default)({ className: cls }, others),
        _react2.default.createElement(
            'label',
            { className: 'weui-form-preview__label' },
            label
        ),
        _react2.default.createElement(
            'em',
            { className: 'weui-form-preview__value' },
            value
        )
    );
}; //1.0.0 components

PreviewItem.propTypes = {
    /**
     * The label of item
     *
     */
    label: _propTypes2.default.string,
    /**
     * Value of the label
     *
     */
    value: _propTypes2.default.string

};

PreviewItem.defaultProps = {
    label: false,
    value: false
};

exports.default = PreviewItem;
module.exports = exports['default'];

/***/ }),

/***/ "./node_modules/react-weui/build/packages/components/form/radio.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _extends2 = __webpack_require__("./node_modules/babel-runtime/helpers/extends.js");

var _extends3 = _interopRequireDefault(_extends2);

var _defineProperty2 = __webpack_require__("./node_modules/babel-runtime/helpers/defineProperty.js");

var _defineProperty3 = _interopRequireDefault(_defineProperty2);

var _objectWithoutProperties2 = __webpack_require__("./node_modules/babel-runtime/helpers/objectWithoutProperties.js");

var _objectWithoutProperties3 = _interopRequireDefault(_objectWithoutProperties2);

var _react = __webpack_require__("./node_modules/react/react.js");

var _react2 = _interopRequireDefault(_react);

var _classnames = __webpack_require__("./node_modules/react-weui/build/packages/utils/classnames.js");

var _classnames2 = _interopRequireDefault(_classnames);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * weui wrapper for radio
 *
 */
var Radio = function Radio(props) {
    var className = props.className,
        others = (0, _objectWithoutProperties3.default)(props, ['className']);

    var cls = (0, _classnames2.default)((0, _defineProperty3.default)({
        'weui-check': true
    }, className, className));

    return _react2.default.createElement(
        'div',
        null,
        _react2.default.createElement('input', (0, _extends3.default)({ className: cls, type: 'radio' }, others)),
        _react2.default.createElement('span', { className: 'weui-icon-checked' })
    );
};

exports.default = Radio;
module.exports = exports['default'];

/***/ }),

/***/ "./node_modules/react-weui/build/packages/components/form/select.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _defineProperty2 = __webpack_require__("./node_modules/babel-runtime/helpers/defineProperty.js");

var _defineProperty3 = _interopRequireDefault(_defineProperty2);

var _objectWithoutProperties2 = __webpack_require__("./node_modules/babel-runtime/helpers/objectWithoutProperties.js");

var _objectWithoutProperties3 = _interopRequireDefault(_objectWithoutProperties2);

var _extends2 = __webpack_require__("./node_modules/babel-runtime/helpers/extends.js");

var _extends3 = _interopRequireDefault(_extends2);

var _getPrototypeOf = __webpack_require__("./node_modules/babel-runtime/core-js/object/get-prototype-of.js");

var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

var _classCallCheck2 = __webpack_require__("./node_modules/babel-runtime/helpers/classCallCheck.js");

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = __webpack_require__("./node_modules/babel-runtime/helpers/createClass.js");

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = __webpack_require__("./node_modules/babel-runtime/helpers/possibleConstructorReturn.js");

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = __webpack_require__("./node_modules/babel-runtime/helpers/inherits.js");

var _inherits3 = _interopRequireDefault(_inherits2);

var _react = __webpack_require__("./node_modules/react/react.js");

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__("./node_modules/prop-types/index.js");

var _propTypes2 = _interopRequireDefault(_propTypes);

var _classnames = __webpack_require__("./node_modules/react-weui/build/packages/utils/classnames.js");

var _classnames2 = _interopRequireDefault(_classnames);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * weui wrapper for select
 *
 */
var Select = function (_Component) {
    (0, _inherits3.default)(Select, _Component);

    function Select() {
        (0, _classCallCheck3.default)(this, Select);
        return (0, _possibleConstructorReturn3.default)(this, (Select.__proto__ || (0, _getPrototypeOf2.default)(Select)).apply(this, arguments));
    }

    (0, _createClass3.default)(Select, [{
        key: 'renderData',
        value: function renderData(data) {
            return data.map(function (item, i) {
                return _react2.default.createElement(
                    'option',
                    (0, _extends3.default)({
                        key: i,
                        value: item.value
                    }, item),
                    item.label
                );
            });
        }
    }, {
        key: 'render',
        value: function render() {
            var _props = this.props,
                className = _props.className,
                data = _props.data,
                children = _props.children,
                others = (0, _objectWithoutProperties3.default)(_props, ['className', 'data', 'children']);

            var cls = (0, _classnames2.default)((0, _defineProperty3.default)({
                'weui-select': true
            }, className, className));

            return _react2.default.createElement(
                'select',
                (0, _extends3.default)({ className: cls }, others),
                data.length > 0 ? this.renderData(data) : children
            );
        }
    }]);
    return Select;
}(_react.Component);

Select.propTypes = {
    /**
     * object arrays of options, `value` and `label` properties is required
     *
     */
    data: _propTypes2.default.array
};
Select.defaultProps = {
    data: []
};
exports.default = Select;
;
module.exports = exports['default'];

/***/ }),

/***/ "./node_modules/react-weui/build/packages/components/form/slider.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _extends2 = __webpack_require__("./node_modules/babel-runtime/helpers/extends.js");

var _extends3 = _interopRequireDefault(_extends2);

var _objectWithoutProperties2 = __webpack_require__("./node_modules/babel-runtime/helpers/objectWithoutProperties.js");

var _objectWithoutProperties3 = _interopRequireDefault(_objectWithoutProperties2);

var _getPrototypeOf = __webpack_require__("./node_modules/babel-runtime/core-js/object/get-prototype-of.js");

var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

var _classCallCheck2 = __webpack_require__("./node_modules/babel-runtime/helpers/classCallCheck.js");

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = __webpack_require__("./node_modules/babel-runtime/helpers/createClass.js");

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = __webpack_require__("./node_modules/babel-runtime/helpers/possibleConstructorReturn.js");

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = __webpack_require__("./node_modules/babel-runtime/helpers/inherits.js");

var _inherits3 = _interopRequireDefault(_inherits2);

var _react = __webpack_require__("./node_modules/react/react.js");

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__("./node_modules/prop-types/index.js");

var _propTypes2 = _interopRequireDefault(_propTypes);

var _reactDom = __webpack_require__("./node_modules/react-dom/index.js");

var _reactDom2 = _interopRequireDefault(_reactDom);

var _classnames = __webpack_require__("./node_modules/react-weui/build/packages/utils/classnames.js");

var _classnames2 = _interopRequireDefault(_classnames);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 *  A Slider is an element used to set a value, good choice when users think it as relative quantity rather than value
 *
 */
var Slider = function (_Component) {
    (0, _inherits3.default)(Slider, _Component);

    function Slider(props) {
        (0, _classCallCheck3.default)(this, Slider);

        var _this = (0, _possibleConstructorReturn3.default)(this, (Slider.__proto__ || (0, _getPrototypeOf2.default)(Slider)).call(this, props));

        _this.state = {
            value: _this.props.value ? _this.props.value : _this.props.defaultValue ? _this.props.defaultValue : 0,
            controlled: typeof _this.props.value !== 'undefined',
            totalWidth: 0,

            touching: false,
            ogX: 0,
            touchID: undefined,
            percent: _this.props.value ? parseInt(_this.props.value / (_this.props.max - _this.props.min) * 100) : _this.props.defaultValue ? parseInt(_this.props.defaultValue / (_this.props.max - _this.props.min) * 100) : 0,
            animating: false
        };

        _this.handleTouchStart = _this.handleTouchStart.bind(_this);
        _this.handleTouchMove = _this.handleTouchMove.bind(_this);
        _this.handleTouchEnd = _this.handleTouchEnd.bind(_this);
        _this.updateValue = _this.updateValue.bind(_this);
        return _this;
    }

    (0, _createClass3.default)(Slider, [{
        key: 'componentDidMount',
        value: function componentDidMount() {
            if (this.state.value === 0) this.updateValue();
        }
    }, {
        key: 'componentWillReceiveProps',
        value: function componentWillReceiveProps(nextProps) {
            if (this.state.controlled) {
                if (nextProps.value <= this.props.max && nextProps.value >= this.props.min) {
                    var percent = parseInt(nextProps.value / (this.props.max - this.props.min) * 100);
                    this.setState({ value: nextProps.value, percent: percent });
                }
            }
        }
    }, {
        key: 'updateValue',
        value: function updateValue() {
            var _this2 = this;

            var snap = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : false;

            var value = 0;
            var percent = this.state.percent,
                _props = this.props,
                min = _props.min,
                max = _props.max,
                step = _props.step,
                onChange = _props.onChange,
                steps = parseInt((max - min) / step),
                perPercent = parseInt(100 / steps);


            if (percent === 100) {
                value = max;
            } else if (percent === 0) {
                value = min;
            } else {
                for (var i = 0; i < steps; i++) {
                    //over 50 margin than next
                    if (percent > i * perPercent && percent <= (i + 1) * perPercent) {
                        value = percent - i * perPercent > perPercent / 2 ? (i + 1) * step + min : i * step + min;
                    }
                }
            }

            if (value !== this.state.value) {
                this.setState({ value: value });
                if (onChange) onChange(value);
            }

            if (snap) {
                this.setState({
                    percent: value === min ? 0 : value === max ? 100 : (value - min) / step * perPercent,
                    animating: true
                }, function () {
                    return _this2.setState({ animating: false });
                });
            }
        }
    }, {
        key: 'handleTouchStart',
        value: function handleTouchStart(e) {
            if (this.state.touching || this.props.disabled) return;
            var barDOM = _reactDom2.default.findDOMNode(this.refs.bar);
            this.setState({
                touching: true,
                touchId: e.targetTouches[0].identifier,
                totalWidth: barDOM.clientWidth,
                ogX: e.targetTouches[0].pageX,
                ogPercent: this.state.percent
            });
        }
    }, {
        key: 'handleTouchMove',
        value: function handleTouchMove(e) {
            var _this3 = this;

            if (!this.state.touching || this.props.disabled) return;
            if (e.targetTouches[0].identifier !== this.state.touchId) return;

            //prevent move background
            e.preventDefault();

            var pageX = e.targetTouches[0].pageX;
            var diffX = pageX - this.state.ogX;

            var percent = parseInt(diffX / this.state.totalWidth * 100) + this.state.ogPercent;
            percent = percent < 0 ? 0 : percent > 100 ? 100 : percent;

            this.setState({
                percent: percent
            }, function () {
                return _this3.updateValue();
            });
        }
    }, {
        key: 'handleTouchEnd',
        value: function handleTouchEnd(e) {
            if (!this.state.touching || this.props.disabled) return;

            if (this.props.snapToValue) {
                this.updateValue(true);
            }

            this.setState({
                touching: false,
                ogX: 0,
                touchId: undefined,
                ogPercent: 0
            });
        }
    }, {
        key: 'render',
        value: function render() {
            var _props2 = this.props,
                className = _props2.className,
                max = _props2.max,
                min = _props2.min,
                step = _props2.step,
                showValue = _props2.showValue,
                value = _props2.value,
                disabled = _props2.disabled,
                defaultValue = _props2.defaultValue,
                onChange = _props2.onChange,
                snapToValue = _props2.snapToValue,
                domProps = (0, _objectWithoutProperties3.default)(_props2, ['className', 'max', 'min', 'step', 'showValue', 'value', 'disabled', 'defaultValue', 'onChange', 'snapToValue']);


            var cls = (0, _classnames2.default)('weui-slider-box', className);

            var trackStyles = {
                width: this.state.percent + '%'
            };

            var handlerStyles = {
                left: this.state.percent + '%',
                transition: this.state.animating ? 'transform .3s' : 'none'
            };

            return _react2.default.createElement(
                'div',
                { className: cls },
                _react2.default.createElement(
                    'div',
                    (0, _extends3.default)({ className: 'weui-slider' }, domProps),
                    _react2.default.createElement(
                        'div',
                        { className: 'weui-slider__inner', ref: 'bar' },
                        _react2.default.createElement('div', {
                            style: trackStyles,
                            className: 'weui-slider__track' }),
                        _react2.default.createElement('div', {
                            style: handlerStyles,
                            onTouchStart: this.handleTouchStart,
                            onTouchMove: this.handleTouchMove,
                            onTouchEnd: this.handleTouchEnd,
                            className: 'weui-slider__handler' })
                    )
                ),
                showValue ? _react2.default.createElement(
                    'div',
                    { className: 'weui-slider-box__value' },
                    this.state.value
                ) : false
            );
        }
    }]);
    return Slider;
}(_react.Component);

Slider.propTypes = {
    /**
     * max value of the slider
     *
     */
    max: _propTypes2.default.number,
    /**
     * min value of the slider
     *
     */
    min: _propTypes2.default.number,
    /**
     * the offset between two number in the slider
     *
     */
    step: _propTypes2.default.number,
    /**
     * display the value indicator
     *
     */
    showValue: _propTypes2.default.bool,
    /**
     * whether input is disabled
     *
     */
    disabled: _propTypes2.default.bool,
    /**
     * slider value when use as controll element
     *
     */
    value: _propTypes2.default.number,
    /**
     * slider value when use as non-controll element, use with onChange
     *
     */
    defaultValue: _propTypes2.default.number,
    /**
     * callback when slider value change, pass value and event instance
     *
     */
    onChange: _propTypes2.default.func,
    /**
     * callback when slider value change, pass value and event instance
     *
     */
    snapToValue: _propTypes2.default.bool
};
Slider.defaultProps = {
    max: 100,
    min: 0,
    step: 1,
    showValue: true,
    disabled: false,
    defaultValue: 0,
    snapToValue: true
};
exports.default = Slider;
module.exports = exports['default'];

/***/ }),

/***/ "./node_modules/react-weui/build/packages/components/form/switch.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _extends2 = __webpack_require__("./node_modules/babel-runtime/helpers/extends.js");

var _extends3 = _interopRequireDefault(_extends2);

var _defineProperty2 = __webpack_require__("./node_modules/babel-runtime/helpers/defineProperty.js");

var _defineProperty3 = _interopRequireDefault(_defineProperty2);

var _objectWithoutProperties2 = __webpack_require__("./node_modules/babel-runtime/helpers/objectWithoutProperties.js");

var _objectWithoutProperties3 = _interopRequireDefault(_objectWithoutProperties2);

var _react = __webpack_require__("./node_modules/react/react.js");

var _react2 = _interopRequireDefault(_react);

var _classnames = __webpack_require__("./node_modules/react-weui/build/packages/utils/classnames.js");

var _classnames2 = _interopRequireDefault(_classnames);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * weui switch style for checkbox
 *
 */
var Switch = function Switch(props) {
    var className = props.className,
        others = (0, _objectWithoutProperties3.default)(props, ['className']);

    var cls = (0, _classnames2.default)((0, _defineProperty3.default)({
        'weui-switch': true
    }, className, className));

    return _react2.default.createElement(
        'div',
        null,
        _react2.default.createElement('input', (0, _extends3.default)({ className: cls, type: 'checkbox' }, others)),
        _react2.default.createElement('span', { className: 'weui-icon-checked' })
    );
};

exports.default = Switch;
module.exports = exports['default'];

/***/ }),

/***/ "./node_modules/react-weui/build/packages/components/form/textarea.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _extends2 = __webpack_require__("./node_modules/babel-runtime/helpers/extends.js");

var _extends3 = _interopRequireDefault(_extends2);

var _defineProperty2 = __webpack_require__("./node_modules/babel-runtime/helpers/defineProperty.js");

var _defineProperty3 = _interopRequireDefault(_defineProperty2);

var _objectWithoutProperties2 = __webpack_require__("./node_modules/babel-runtime/helpers/objectWithoutProperties.js");

var _objectWithoutProperties3 = _interopRequireDefault(_objectWithoutProperties2);

var _getPrototypeOf = __webpack_require__("./node_modules/babel-runtime/core-js/object/get-prototype-of.js");

var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

var _classCallCheck2 = __webpack_require__("./node_modules/babel-runtime/helpers/classCallCheck.js");

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = __webpack_require__("./node_modules/babel-runtime/helpers/createClass.js");

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = __webpack_require__("./node_modules/babel-runtime/helpers/possibleConstructorReturn.js");

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = __webpack_require__("./node_modules/babel-runtime/helpers/inherits.js");

var _inherits3 = _interopRequireDefault(_inherits2);

var _react = __webpack_require__("./node_modules/react/react.js");

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__("./node_modules/prop-types/index.js");

var _propTypes2 = _interopRequireDefault(_propTypes);

var _classnames = __webpack_require__("./node_modules/react-weui/build/packages/utils/classnames.js");

var _classnames2 = _interopRequireDefault(_classnames);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * weui wrapper for textarea
 *
 */
var TextArea = function (_Component) {
    (0, _inherits3.default)(TextArea, _Component);

    function TextArea() {
        var _ref;

        var _temp, _this, _ret;

        (0, _classCallCheck3.default)(this, TextArea);

        for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
        }

        return _ret = (_temp = (_this = (0, _possibleConstructorReturn3.default)(this, (_ref = TextArea.__proto__ || (0, _getPrototypeOf2.default)(TextArea)).call.apply(_ref, [this].concat(args))), _this), _this.state = {
            textCounter: _this.props.defaultValue ? _this.props.defaultValue.length : 0
        }, _temp), (0, _possibleConstructorReturn3.default)(_this, _ret);
    }

    (0, _createClass3.default)(TextArea, [{
        key: 'handleChange',
        value: function handleChange(e) {
            this.setState({ textCounter: e.target.value.length });

            //forward event to props if any
            if (this.props.onChange) this.props.onChange(e);
        }
    }, {
        key: 'render',
        value: function render() {
            var _props = this.props,
                className = _props.className,
                children = _props.children,
                showCounter = _props.showCounter,
                maxLength = _props.maxLength,
                onChange = _props.onChange,
                others = (0, _objectWithoutProperties3.default)(_props, ['className', 'children', 'showCounter', 'maxLength', 'onChange']);

            var cls = (0, _classnames2.default)((0, _defineProperty3.default)({
                'weui-textarea': true
            }, className, className));

            return _react2.default.createElement(
                'div',
                null,
                _react2.default.createElement(
                    'textarea',
                    (0, _extends3.default)({
                        className: cls,
                        maxLength: maxLength,
                        onChange: this.handleChange.bind(this)
                    }, others),
                    children
                ),
                showCounter ? _react2.default.createElement(
                    'div',
                    { className: 'weui-textarea-counter' },
                    _react2.default.createElement(
                        'span',
                        null,
                        this.state.textCounter
                    ),
                    maxLength ? '/' + maxLength : false
                ) : false
            );
        }
    }]);
    return TextArea;
}(_react.Component);

TextArea.propTypes = {
    /**
     * display word counter
     *
     */
    showCounter: _propTypes2.default.bool,
    /**
     * max character allow for textarea
     *
     */
    maxLength: _propTypes2.default.number,
    defaultValue: _propTypes2.default.string
};
TextArea.defaultProps = {
    showCounter: true,
    defaultValue: undefined
};
exports.default = TextArea;
;
module.exports = exports['default'];

/***/ }),

/***/ "./node_modules/react-weui/build/packages/components/form/uploader.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _defineProperty2 = __webpack_require__("./node_modules/babel-runtime/helpers/defineProperty.js");

var _defineProperty3 = _interopRequireDefault(_defineProperty2);

var _assign = __webpack_require__("./node_modules/babel-runtime/core-js/object/assign.js");

var _assign2 = _interopRequireDefault(_assign);

var _extends2 = __webpack_require__("./node_modules/babel-runtime/helpers/extends.js");

var _extends3 = _interopRequireDefault(_extends2);

var _objectWithoutProperties2 = __webpack_require__("./node_modules/babel-runtime/helpers/objectWithoutProperties.js");

var _objectWithoutProperties3 = _interopRequireDefault(_objectWithoutProperties2);

var _getPrototypeOf = __webpack_require__("./node_modules/babel-runtime/core-js/object/get-prototype-of.js");

var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

var _classCallCheck2 = __webpack_require__("./node_modules/babel-runtime/helpers/classCallCheck.js");

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = __webpack_require__("./node_modules/babel-runtime/helpers/createClass.js");

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = __webpack_require__("./node_modules/babel-runtime/helpers/possibleConstructorReturn.js");

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = __webpack_require__("./node_modules/babel-runtime/helpers/inherits.js");

var _inherits3 = _interopRequireDefault(_inherits2);

var _react = __webpack_require__("./node_modules/react/react.js");

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__("./node_modules/prop-types/index.js");

var _propTypes2 = _interopRequireDefault(_propTypes);

var _reactDom = __webpack_require__("./node_modules/react-dom/index.js");

var _reactDom2 = _interopRequireDefault(_reactDom);

var _icon = __webpack_require__("./node_modules/react-weui/build/packages/components/icon/index.js");

var _icon2 = _interopRequireDefault(_icon);

var _classnames = __webpack_require__("./node_modules/react-weui/build/packages/utils/classnames.js");

var _classnames2 = _interopRequireDefault(_classnames);

var _deprecationWarning = __webpack_require__("./node_modules/react-weui/build/packages/utils/deprecationWarning.js");

var _deprecationWarning2 = _interopRequireDefault(_deprecationWarning);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * weui style uploader
 *
 */
var Uploader = function (_Component) {
    (0, _inherits3.default)(Uploader, _Component);

    function Uploader() {
        (0, _classCallCheck3.default)(this, Uploader);
        return (0, _possibleConstructorReturn3.default)(this, (Uploader.__proto__ || (0, _getPrototypeOf2.default)(Uploader)).apply(this, arguments));
    }

    (0, _createClass3.default)(Uploader, [{
        key: 'detectVerticalSquash',


        /**
         * Detecting vertical squash in loaded image.
         * Fixes a bug which squash image vertically while drawing into canvas for some images.
         * This is a bug in iOS6 devices. This function from https://github.com/stomita/ios-imagefile-megapixel
         * With react fix by n7best
         */
        value: function detectVerticalSquash(img) {
            var data = void 0;
            var ih = img.naturalHeight;
            var canvas = document.createElement('canvas');
            canvas.width = 1;
            canvas.height = ih;
            var ctx = canvas.getContext('2d');
            ctx.drawImage(img, 0, 0);
            try {
                // Prevent cross origin error
                data = ctx.getImageData(0, 0, 1, ih).data;
            } catch (err) {
                // hopeless, assume the image is well and good.
                console.log('Cannot check verticalSquash: CORS?');
                return 1;
            }
            // search image edge pixel position in case it is squashed vertically.
            var sy = 0;
            var ey = ih;
            var py = ih;
            while (py > sy) {
                var alpha = data[(py - 1) * 4 + 3];
                if (alpha === 0) {
                    ey = py;
                } else {
                    sy = py;
                }
                py = ey + sy >> 1;
            }
            var ratio = py / ih;
            return ratio === 0 ? 1 : ratio;
        }
    }, {
        key: 'handleFile',
        value: function handleFile(file, cb) {
            var _this2 = this,
                _arguments = arguments;

            var reader = void 0;
            if (typeof FileReader !== 'undefined') {
                reader = new FileReader();
            } else {
                if (window.FileReader) reader = new window.FileReader();
            }

            reader.onload = function (e) {
                var img = void 0;
                if (typeof Image !== 'undefined') {
                    img = new Image();
                } else {
                    if (window.Image) img = new window.Image();
                }
                img.onload = function () {
                    var w = Math.min(_this2.props.maxWidth, img.width);
                    var h = img.height * (w / img.width);
                    var canvas = document.createElement('canvas');
                    var ctx = canvas.getContext('2d');

                    //check canvas support, for test
                    if (ctx) {
                        //patch subsampling bug
                        //http://jsfiddle.net/gWY2a/24/
                        var drawImage = ctx.drawImage;
                        ctx.drawImage = function (_img, sx, sy, sw, sh, dx, dy, dw, dh) {
                            var vertSquashRatio = 1;
                            // Detect if img param is indeed image
                            if (!!_img && _img.nodeName === 'IMG') {
                                vertSquashRatio = _this2.detectVerticalSquash(_img);
                                if (typeof sw === 'undefined') sw = _img.naturalWidth;
                                if (typeof sh === 'undefined') sh = _img.naturalHeight;
                            }

                            // Execute several cases (Firefox does not handle undefined as no param)
                            // by call (apply is bad performance)
                            if (_arguments.length === 9) drawImage.call(ctx, _img, sx, sy, sw, sh, dx, dy, dw, dh / vertSquashRatio);else if (typeof sw !== 'undefined') drawImage.call(ctx, _img, sx, sy, sw, sh / vertSquashRatio);else drawImage.call(ctx, _img, sx, sy);
                        };

                        canvas.width = w;
                        canvas.height = h;
                        ctx.drawImage(img, 0, 0, w, h);

                        var base64 = canvas.toDataURL('image/png');

                        cb({
                            nativeFile: file,
                            lastModified: file.lastModified,
                            lastModifiedDate: file.lastModifiedDate,
                            name: file.name,
                            size: file.size,
                            type: file.type,
                            data: base64
                        }, e);
                    } else {
                        cb(file, e);
                    }
                };
                img.src = e.target.result;
            };
            reader.readAsDataURL(file);
        }
    }, {
        key: 'handleChange',
        value: function handleChange(e) {
            var _this3 = this;

            var langs = this.props.lang;
            var _files = e.target.files;

            if (_files.length === 0) return;

            if (this.props.files.length >= this.props.maxCount) {
                this.props.onError(langs.maxError(this.props.maxCount));
                return;
            }

            for (var key in _files) {
                if (!_files.hasOwnProperty(key)) continue;
                var file = _files[key];

                this.handleFile(file, function (_file, _e) {
                    if (_this3.props.onChange) _this3.props.onChange(_file, _e);
                    _reactDom2.default.findDOMNode(_this3.refs.uploader).value = '';
                }, e);
            }
        }
    }, {
        key: 'renderFiles',
        value: function renderFiles() {
            var _this4 = this;

            return this.props.files.map(function (file, idx) {
                var url = file.url,
                    error = file.error,
                    status = file.status,
                    onClick = file.onClick,
                    others = (0, _objectWithoutProperties3.default)(file, ['url', 'error', 'status', 'onClick']);

                var fileStyle = {
                    backgroundImage: 'url(' + url + ')'
                };
                var cls = (0, _classnames2.default)({
                    'weui-uploader__file': true,
                    'weui-uploader__file_status': error || status
                });

                if (onClick) {
                    (0, _deprecationWarning2.default)('File onClick', 'Uploader onFileClick');
                }

                var handleFileClick = onClick ? onClick : function (e) {
                    if (_this4.props.onFileClick) _this4.props.onFileClick(e, file, idx);
                };

                return _react2.default.createElement(
                    'li',
                    (0, _extends3.default)({ className: cls, key: idx, style: fileStyle, onClick: handleFileClick }, others),
                    error || status ? _react2.default.createElement(
                        'div',
                        { className: 'weui-uploader__file-content' },
                        error ? _react2.default.createElement(_icon2.default, { value: 'warn' }) : status
                    ) : false
                );
            });
        }
    }, {
        key: 'render',
        value: function render() {
            var _props = this.props,
                className = _props.className,
                title = _props.title,
                maxCount = _props.maxCount,
                files = _props.files,
                onChange = _props.onChange,
                onFileClick = _props.onFileClick,
                others = (0, _objectWithoutProperties3.default)(_props, ['className', 'title', 'maxCount', 'files', 'onChange', 'onFileClick']);

            var inputProps = (0, _assign2.default)({}, others);
            delete inputProps.lang;
            delete inputProps.onError;
            delete inputProps.maxWidth;

            var cls = (0, _classnames2.default)((0, _defineProperty3.default)({
                'weui-uploader': true
            }, className, className));

            return _react2.default.createElement(
                'div',
                { className: cls },
                _react2.default.createElement(
                    'div',
                    { className: 'weui-uploader__hd' },
                    _react2.default.createElement(
                        'p',
                        { className: 'weui-uploader__title' },
                        title
                    ),
                    _react2.default.createElement(
                        'div',
                        { className: 'weui-uploader__info' },
                        files.length,
                        '/',
                        maxCount
                    )
                ),
                _react2.default.createElement(
                    'div',
                    { className: 'weui-uploader__bd' },
                    _react2.default.createElement(
                        'ul',
                        { className: 'weui-uploader__files' },
                        this.renderFiles()
                    ),
                    _react2.default.createElement(
                        'div',
                        { className: 'weui-uploader__input-box' },
                        _react2.default.createElement('input', (0, _extends3.default)({
                            ref: 'uploader' //let react to reset after onchange
                            , className: 'weui-uploader__input',
                            type: 'file',
                            accept: 'image/*',
                            capture: 'camera',
                            onChange: this.handleChange.bind(this)
                        }, inputProps))
                    )
                )
            );
        }
    }]);
    return Uploader;
}(_react.Component);

Uploader.propTypes = {
    /**
     * title of uploader
     *
     */
    title: _propTypes2.default.string,
    /**
     * max amount of allow file
     *
     */
    maxCount: _propTypes2.default.number,
    /**
     * maxWidth of image for uploader to compress
     *
     */
    maxWidth: _propTypes2.default.number,
    /**
     * when file change, pass property `(event, file)`
     *
     */
    onChange: _propTypes2.default.func,
    /**
     * when there is error, pass property `msg`
     *
     */
    onError: _propTypes2.default.func,
    /**
     * array of photos thumbnails to indicator status, include property `url`, `status`, `error`
     *
     */
    files: _propTypes2.default.array,
    /**
     * languages object, with property `maxError`
     *
     */
    lang: _propTypes2.default.object
};
Uploader.defaultProps = {
    title: '图片上传',
    maxCount: 4,
    maxWidth: 500,
    files: [],
    onChange: undefined,
    onError: undefined,
    lang: { maxError: function maxError(maxCount) {
            return '\u6700\u591A\u53EA\u80FD\u4E0A\u4F20' + maxCount + '\u5F20\u56FE\u7247';
        } }
};
exports.default = Uploader;
;
module.exports = exports['default'];

/***/ }),

/***/ "./node_modules/react-weui/build/packages/components/form/vcode.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _extends2 = __webpack_require__("./node_modules/babel-runtime/helpers/extends.js");

var _extends3 = _interopRequireDefault(_extends2);

var _defineProperty2 = __webpack_require__("./node_modules/babel-runtime/helpers/defineProperty.js");

var _defineProperty3 = _interopRequireDefault(_defineProperty2);

var _objectWithoutProperties2 = __webpack_require__("./node_modules/babel-runtime/helpers/objectWithoutProperties.js");

var _objectWithoutProperties3 = _interopRequireDefault(_objectWithoutProperties2);

var _react = __webpack_require__("./node_modules/react/react.js");

var _react2 = _interopRequireDefault(_react);

var _classnames = __webpack_require__("./node_modules/react-weui/build/packages/utils/classnames.js");

var _classnames2 = _interopRequireDefault(_classnames);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * image wrapper for vcode
 *
 */
var VCode = function VCode(props) {
    var className = props.className,
        others = (0, _objectWithoutProperties3.default)(props, ['className']);

    var cls = (0, _classnames2.default)((0, _defineProperty3.default)({
        'weui-vcode-img': true
    }, className, className));

    return _react2.default.createElement(
        'div',
        null,
        _react2.default.createElement('img', (0, _extends3.default)({ className: cls }, others))
    );
};

exports.default = VCode;
module.exports = exports['default'];

/***/ }),

/***/ "./node_modules/react-weui/build/packages/components/gallery/gallery.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _extends2 = __webpack_require__("./node_modules/babel-runtime/helpers/extends.js");

var _extends3 = _interopRequireDefault(_extends2);

var _defineProperty2 = __webpack_require__("./node_modules/babel-runtime/helpers/defineProperty.js");

var _defineProperty3 = _interopRequireDefault(_defineProperty2);

var _objectWithoutProperties2 = __webpack_require__("./node_modules/babel-runtime/helpers/objectWithoutProperties.js");

var _objectWithoutProperties3 = _interopRequireDefault(_objectWithoutProperties2);

var _getPrototypeOf = __webpack_require__("./node_modules/babel-runtime/core-js/object/get-prototype-of.js");

var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

var _classCallCheck2 = __webpack_require__("./node_modules/babel-runtime/helpers/classCallCheck.js");

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = __webpack_require__("./node_modules/babel-runtime/helpers/createClass.js");

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = __webpack_require__("./node_modules/babel-runtime/helpers/possibleConstructorReturn.js");

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = __webpack_require__("./node_modules/babel-runtime/helpers/inherits.js");

var _inherits3 = _interopRequireDefault(_inherits2);

var _react = __webpack_require__("./node_modules/react/react.js");

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__("./node_modules/prop-types/index.js");

var _propTypes2 = _interopRequireDefault(_propTypes);

var _classnames = __webpack_require__("./node_modules/react-weui/build/packages/utils/classnames.js");

var _classnames2 = _interopRequireDefault(_classnames);

var _swiper = __webpack_require__("./node_modules/react-weui/build/packages/components/swiper/index.js");

var _swiper2 = _interopRequireDefault(_swiper);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * Full screen photo display
 *
 */
var Gallery = function (_Component) {
    (0, _inherits3.default)(Gallery, _Component);

    function Gallery(props) {
        (0, _classCallCheck3.default)(this, Gallery);

        var _this = (0, _possibleConstructorReturn3.default)(this, (Gallery.__proto__ || (0, _getPrototypeOf2.default)(Gallery)).call(this, props));

        _this.state = {
            currentIndex: _this.props.defaultIndex
        };
        return _this;
    }

    (0, _createClass3.default)(Gallery, [{
        key: 'handleClick',
        value: function handleClick(func) {
            var _this2 = this;

            return function (e) {
                if (func) func(e, _this2.state.currentIndex);
            };
        }
    }, {
        key: 'renderImages',
        value: function renderImages(imgs) {
            var _this3 = this;

            return _react2.default.createElement(
                'div',
                { className: 'weui-gallery__img' },
                _react2.default.createElement(
                    _swiper2.default,
                    {
                        indicators: false,
                        defaultIndex: this.props.defaultIndex,
                        onChange: function onChange(prev, next) {
                            return _this3.setState({ currentIndex: next });
                        }
                    },
                    imgs.map(function (img, i) {
                        var imgStyle = {
                            backgroundImage: 'url(' + img + ')',
                            backgroundSize: 'contain',
                            backgroundRepeat: 'no-repeat',
                            backgroundPosition: 'center center'
                        };
                        return _react2.default.createElement('span', { key: i, style: imgStyle });
                    })
                )
            );
        }
    }, {
        key: 'renderOprs',
        value: function renderOprs() {
            var _this4 = this;

            if (Array.isArray(this.props.children)) {
                return this.props.children.map(function (child, i) {
                    return _react2.default.cloneElement(child, {
                        key: i,
                        onClick: _this4.handleClick(child.props.onClick)
                    });
                });
            } else {
                if (this.props.children) {
                    return _react2.default.cloneElement(this.props.children, {
                        onClick: this.handleClick(this.props.children.props.onClick)
                    });
                } else {
                    return false;
                }
            }
        }
    }, {
        key: 'render',
        value: function render() {
            var _props = this.props,
                children = _props.children,
                className = _props.className,
                show = _props.show,
                src = _props.src,
                defaultIndex = _props.defaultIndex,
                others = (0, _objectWithoutProperties3.default)(_props, ['children', 'className', 'show', 'src', 'defaultIndex']);

            var cls = (0, _classnames2.default)((0, _defineProperty3.default)({
                'weui-gallery': true
            }, className, className));

            if (!show) return false;

            return _react2.default.createElement(
                'div',
                (0, _extends3.default)({ className: cls, style: { display: show ? 'block' : 'none' } }, others),
                Array.isArray(src) ? this.renderImages(src) : _react2.default.createElement('span', { className: 'weui-gallery__img', style: { backgroundImage: 'url(' + src + ')' } }),
                _react2.default.createElement(
                    'div',
                    { className: 'weui-gallery__opr' },
                    this.renderOprs()
                )
            );
        }
    }]);
    return Gallery;
}(_react.Component);

Gallery.propTypes = {
    /**
     * indicate whather the component is display
     *
     */
    show: _propTypes2.default.bool,
    /**
     * image source, string for single element, array for multiple element
     *
     */
    src: _propTypes2.default.oneOfType([_propTypes2.default.string, _propTypes2.default.array]),
    /**
     * indicate whather the component is display
     *
     */
    defaultIndex: _propTypes2.default.number
};
Gallery.defaultProps = {
    show: undefined,
    src: '',
    defaultIndex: 0
};
exports.default = Gallery;
module.exports = exports['default'];

/***/ }),

/***/ "./node_modules/react-weui/build/packages/components/gallery/gallery_delete.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _extends2 = __webpack_require__("./node_modules/babel-runtime/helpers/extends.js");

var _extends3 = _interopRequireDefault(_extends2);

var _defineProperty2 = __webpack_require__("./node_modules/babel-runtime/helpers/defineProperty.js");

var _defineProperty3 = _interopRequireDefault(_defineProperty2);

var _objectWithoutProperties2 = __webpack_require__("./node_modules/babel-runtime/helpers/objectWithoutProperties.js");

var _objectWithoutProperties3 = _interopRequireDefault(_objectWithoutProperties2);

var _react = __webpack_require__("./node_modules/react/react.js");

var _react2 = _interopRequireDefault(_react);

var _classnames = __webpack_require__("./node_modules/react-weui/build/packages/utils/classnames.js");

var _classnames2 = _interopRequireDefault(_classnames);

var _icon = __webpack_require__("./node_modules/react-weui/build/packages/components/icon/index.js");

var _icon2 = _interopRequireDefault(_icon);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * Wrapper for Gallery Delete Button
 *
 */
var GalleryDelete = function GalleryDelete(props) {
    var className = props.className,
        others = (0, _objectWithoutProperties3.default)(props, ['className']);

    var cls = (0, _classnames2.default)((0, _defineProperty3.default)({
        'weui-gallery__del': true
    }, className, className));

    return _react2.default.createElement(
        'a',
        (0, _extends3.default)({ className: cls }, others),
        _react2.default.createElement(_icon2.default, { value: 'delete', className: 'weui-icon_gallery-delete' })
    );
};

exports.default = GalleryDelete;
module.exports = exports['default'];

/***/ }),

/***/ "./node_modules/react-weui/build/packages/components/gallery/index.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.Gallery = exports.GalleryDelete = undefined;

var _gallery = __webpack_require__("./node_modules/react-weui/build/packages/components/gallery/gallery.js");

var _gallery2 = _interopRequireDefault(_gallery);

var _gallery_delete = __webpack_require__("./node_modules/react-weui/build/packages/components/gallery/gallery_delete.js");

var _gallery_delete2 = _interopRequireDefault(_gallery_delete);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.GalleryDelete = _gallery_delete2.default;
exports.Gallery = _gallery2.default;

/***/ }),

/***/ "./node_modules/react-weui/build/packages/components/grid/grid.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends2 = __webpack_require__("./node_modules/babel-runtime/helpers/extends.js");

var _extends3 = _interopRequireDefault(_extends2);

var _objectWithoutProperties2 = __webpack_require__("./node_modules/babel-runtime/helpers/objectWithoutProperties.js");

var _objectWithoutProperties3 = _interopRequireDefault(_objectWithoutProperties2);

var _getPrototypeOf = __webpack_require__("./node_modules/babel-runtime/core-js/object/get-prototype-of.js");

var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

var _classCallCheck2 = __webpack_require__("./node_modules/babel-runtime/helpers/classCallCheck.js");

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = __webpack_require__("./node_modules/babel-runtime/helpers/createClass.js");

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = __webpack_require__("./node_modules/babel-runtime/helpers/possibleConstructorReturn.js");

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = __webpack_require__("./node_modules/babel-runtime/helpers/inherits.js");

var _inherits3 = _interopRequireDefault(_inherits2);

var _react = __webpack_require__("./node_modules/react/react.js");

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__("./node_modules/prop-types/index.js");

var _propTypes2 = _interopRequireDefault(_propTypes);

var _classnames = __webpack_require__("./node_modules/react-weui/build/packages/utils/classnames.js");

var _classnames2 = _interopRequireDefault(_classnames);

var _grid_icon = __webpack_require__("./node_modules/react-weui/build/packages/components/grid/grid_icon.js");

var _grid_icon2 = _interopRequireDefault(_grid_icon);

var _grid_label = __webpack_require__("./node_modules/react-weui/build/packages/components/grid/grid_label.js");

var _grid_label2 = _interopRequireDefault(_grid_label);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * WeUI Grid wrapper, contain elements of `GridIcon` and `GridLabel`
 *
 */
var Grid = function (_React$Component) {
  (0, _inherits3.default)(Grid, _React$Component);

  function Grid() {
    (0, _classCallCheck3.default)(this, Grid);
    return (0, _possibleConstructorReturn3.default)(this, (Grid.__proto__ || (0, _getPrototypeOf2.default)(Grid)).apply(this, arguments));
  }

  (0, _createClass3.default)(Grid, [{
    key: 'render',
    value: function render() {
      var _props = this.props,
          children = _props.children,
          icon = _props.icon,
          label = _props.label,
          className = _props.className,
          component = _props.component,
          others = (0, _objectWithoutProperties3.default)(_props, ['children', 'icon', 'label', 'className', 'component']);

      var cls = (0, _classnames2.default)({
        'weui-grid': true
      }, className);
      var DefaultComponent = 'a';
      var GridComponent = component ? component : DefaultComponent;

      return _react2.default.createElement(
        GridComponent,
        (0, _extends3.default)({ className: cls }, others),
        icon ? _react2.default.createElement(
          _grid_icon2.default,
          null,
          icon
        ) : false,
        children,
        label ? _react2.default.createElement(
          _grid_label2.default,
          null,
          label
        ) : false
      );
    }
  }]);
  return Grid;
}(_react2.default.Component);

Grid.propTypes = {
  /**
   * Label string for grid
   *
   */
  label: _propTypes2.default.string,
  /**
   * Icon placeholder
   *
   */
  icon: _propTypes2.default.any,
  /**
   * pass in an component to replace Grid but apply same style
   */
  component: _propTypes2.default.func
};
Grid.defaultProps = {
  label: '',
  icon: false
};
exports.default = Grid;
;
module.exports = exports['default'];

/***/ }),

/***/ "./node_modules/react-weui/build/packages/components/grid/grid_icon.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _extends2 = __webpack_require__("./node_modules/babel-runtime/helpers/extends.js");

var _extends3 = _interopRequireDefault(_extends2);

var _objectWithoutProperties2 = __webpack_require__("./node_modules/babel-runtime/helpers/objectWithoutProperties.js");

var _objectWithoutProperties3 = _interopRequireDefault(_objectWithoutProperties2);

var _getPrototypeOf = __webpack_require__("./node_modules/babel-runtime/core-js/object/get-prototype-of.js");

var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

var _classCallCheck2 = __webpack_require__("./node_modules/babel-runtime/helpers/classCallCheck.js");

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = __webpack_require__("./node_modules/babel-runtime/helpers/createClass.js");

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = __webpack_require__("./node_modules/babel-runtime/helpers/possibleConstructorReturn.js");

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = __webpack_require__("./node_modules/babel-runtime/helpers/inherits.js");

var _inherits3 = _interopRequireDefault(_inherits2);

var _react = __webpack_require__("./node_modules/react/react.js");

var _react2 = _interopRequireDefault(_react);

var _classnames = __webpack_require__("./node_modules/react-weui/build/packages/utils/classnames.js");

var _classnames2 = _interopRequireDefault(_classnames);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * WeUI Grid Icon Wrapper
 *
 */
var GridIcon = function (_React$Component) {
    (0, _inherits3.default)(GridIcon, _React$Component);

    function GridIcon() {
        (0, _classCallCheck3.default)(this, GridIcon);
        return (0, _possibleConstructorReturn3.default)(this, (GridIcon.__proto__ || (0, _getPrototypeOf2.default)(GridIcon)).apply(this, arguments));
    }

    (0, _createClass3.default)(GridIcon, [{
        key: 'render',
        value: function render() {
            var _props = this.props,
                children = _props.children,
                className = _props.className,
                others = (0, _objectWithoutProperties3.default)(_props, ['children', 'className']);

            var cls = (0, _classnames2.default)({
                'weui-grid__icon': true
            }, className);

            return _react2.default.createElement(
                'div',
                (0, _extends3.default)({ className: cls }, others),
                children
            );
        }
    }]);
    return GridIcon;
}(_react2.default.Component);

exports.default = GridIcon;
;
module.exports = exports['default'];

/***/ }),

/***/ "./node_modules/react-weui/build/packages/components/grid/grid_label.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _extends2 = __webpack_require__("./node_modules/babel-runtime/helpers/extends.js");

var _extends3 = _interopRequireDefault(_extends2);

var _objectWithoutProperties2 = __webpack_require__("./node_modules/babel-runtime/helpers/objectWithoutProperties.js");

var _objectWithoutProperties3 = _interopRequireDefault(_objectWithoutProperties2);

var _getPrototypeOf = __webpack_require__("./node_modules/babel-runtime/core-js/object/get-prototype-of.js");

var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

var _classCallCheck2 = __webpack_require__("./node_modules/babel-runtime/helpers/classCallCheck.js");

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = __webpack_require__("./node_modules/babel-runtime/helpers/createClass.js");

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = __webpack_require__("./node_modules/babel-runtime/helpers/possibleConstructorReturn.js");

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = __webpack_require__("./node_modules/babel-runtime/helpers/inherits.js");

var _inherits3 = _interopRequireDefault(_inherits2);

var _react = __webpack_require__("./node_modules/react/react.js");

var _react2 = _interopRequireDefault(_react);

var _classnames = __webpack_require__("./node_modules/react-weui/build/packages/utils/classnames.js");

var _classnames2 = _interopRequireDefault(_classnames);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * WeUI Grid Label Wrapper
 *
 */
var GridLabel = function (_React$Component) {
    (0, _inherits3.default)(GridLabel, _React$Component);

    function GridLabel() {
        (0, _classCallCheck3.default)(this, GridLabel);
        return (0, _possibleConstructorReturn3.default)(this, (GridLabel.__proto__ || (0, _getPrototypeOf2.default)(GridLabel)).apply(this, arguments));
    }

    (0, _createClass3.default)(GridLabel, [{
        key: 'render',
        value: function render() {
            var _props = this.props,
                children = _props.children,
                className = _props.className,
                others = (0, _objectWithoutProperties3.default)(_props, ['children', 'className']);

            var cls = (0, _classnames2.default)({
                'weui-grid__label': true
            }, className);

            return _react2.default.createElement(
                'p',
                (0, _extends3.default)({ className: cls }, others),
                children
            );
        }
    }]);
    return GridLabel;
}(_react2.default.Component);

exports.default = GridLabel;
;
module.exports = exports['default'];

/***/ }),

/***/ "./node_modules/react-weui/build/packages/components/grid/grids.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _objectWithoutProperties2 = __webpack_require__("./node_modules/babel-runtime/helpers/objectWithoutProperties.js");

var _objectWithoutProperties3 = _interopRequireDefault(_objectWithoutProperties2);

var _extends2 = __webpack_require__("./node_modules/babel-runtime/helpers/extends.js");

var _extends3 = _interopRequireDefault(_extends2);

var _getPrototypeOf = __webpack_require__("./node_modules/babel-runtime/core-js/object/get-prototype-of.js");

var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

var _classCallCheck2 = __webpack_require__("./node_modules/babel-runtime/helpers/classCallCheck.js");

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = __webpack_require__("./node_modules/babel-runtime/helpers/createClass.js");

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = __webpack_require__("./node_modules/babel-runtime/helpers/possibleConstructorReturn.js");

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = __webpack_require__("./node_modules/babel-runtime/helpers/inherits.js");

var _inherits3 = _interopRequireDefault(_inherits2);

var _react = __webpack_require__("./node_modules/react/react.js");

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__("./node_modules/prop-types/index.js");

var _propTypes2 = _interopRequireDefault(_propTypes);

var _classnames = __webpack_require__("./node_modules/react-weui/build/packages/utils/classnames.js");

var _classnames2 = _interopRequireDefault(_classnames);

var _grid = __webpack_require__("./node_modules/react-weui/build/packages/components/grid/grid.js");

var _grid2 = _interopRequireDefault(_grid);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * Mobile grid system, typical use for 9 grid system. contain elements of `Grid`
 *
 */
var Grids = function (_Component) {
    (0, _inherits3.default)(Grids, _Component);

    function Grids() {
        (0, _classCallCheck3.default)(this, Grids);
        return (0, _possibleConstructorReturn3.default)(this, (Grids.__proto__ || (0, _getPrototypeOf2.default)(Grids)).apply(this, arguments));
    }

    (0, _createClass3.default)(Grids, [{
        key: 'renderData',
        value: function renderData(data) {
            return data.map(function (item, i) {
                return _react2.default.createElement(_grid2.default, (0, _extends3.default)({
                    key: i,
                    icon: item.icon,
                    label: item.label
                }, item));
            });
        }
    }, {
        key: 'render',
        value: function render() {
            var _props = this.props,
                children = _props.children,
                data = _props.data,
                className = _props.className,
                others = (0, _objectWithoutProperties3.default)(_props, ['children', 'data', 'className']);

            var cls = (0, _classnames2.default)({
                'weui-grids': true
            }, className);

            return _react2.default.createElement(
                'div',
                (0, _extends3.default)({ className: cls }, others),
                data.length > 0 ? this.renderData(data) : children
            );
        }
    }]);
    return Grids;
}(_react.Component);

Grids.propTypes = {
    /**
     * Automatic grids, contain Array of Objects for grid, Optional `icon` and `label` property for each object
     *
     */
    data: _propTypes2.default.array
};
Grids.defaultProps = {
    data: []
};
exports.default = Grids;
;
module.exports = exports['default'];

/***/ }),

/***/ "./node_modules/react-weui/build/packages/components/grid/index.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
   value: true
});
exports.GridLabel = exports.GridIcon = exports.Grid = exports.Grids = undefined;

var _grids = __webpack_require__("./node_modules/react-weui/build/packages/components/grid/grids.js");

var _grids2 = _interopRequireDefault(_grids);

var _grid = __webpack_require__("./node_modules/react-weui/build/packages/components/grid/grid.js");

var _grid2 = _interopRequireDefault(_grid);

var _grid_icon = __webpack_require__("./node_modules/react-weui/build/packages/components/grid/grid_icon.js");

var _grid_icon2 = _interopRequireDefault(_grid_icon);

var _grid_label = __webpack_require__("./node_modules/react-weui/build/packages/components/grid/grid_label.js");

var _grid_label2 = _interopRequireDefault(_grid_label);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.Grids = _grids2.default;
exports.Grid = _grid2.default;
exports.GridIcon = _grid_icon2.default;
exports.GridLabel = _grid_label2.default;

/***/ }),

/***/ "./node_modules/react-weui/build/packages/components/icon/icon.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _extends2 = __webpack_require__("./node_modules/babel-runtime/helpers/extends.js");

var _extends3 = _interopRequireDefault(_extends2);

var _defineProperty2 = __webpack_require__("./node_modules/babel-runtime/helpers/defineProperty.js");

var _defineProperty3 = _interopRequireDefault(_defineProperty2);

var _keys = __webpack_require__("./node_modules/babel-runtime/core-js/object/keys.js");

var _keys2 = _interopRequireDefault(_keys);

var _objectWithoutProperties2 = __webpack_require__("./node_modules/babel-runtime/helpers/objectWithoutProperties.js");

var _objectWithoutProperties3 = _interopRequireDefault(_objectWithoutProperties2);

var _getPrototypeOf = __webpack_require__("./node_modules/babel-runtime/core-js/object/get-prototype-of.js");

var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

var _classCallCheck2 = __webpack_require__("./node_modules/babel-runtime/helpers/classCallCheck.js");

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = __webpack_require__("./node_modules/babel-runtime/helpers/createClass.js");

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = __webpack_require__("./node_modules/babel-runtime/helpers/possibleConstructorReturn.js");

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = __webpack_require__("./node_modules/babel-runtime/helpers/inherits.js");

var _inherits3 = _interopRequireDefault(_inherits2);

var _react = __webpack_require__("./node_modules/react/react.js");

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__("./node_modules/prop-types/index.js");

var _propTypes2 = _interopRequireDefault(_propTypes);

var _classnames = __webpack_require__("./node_modules/react-weui/build/packages/utils/classnames.js");

var _classnames2 = _interopRequireDefault(_classnames);

var _deprecationWarning = __webpack_require__("./node_modules/react-weui/build/packages/utils/deprecationWarning.js");

var _deprecationWarning2 = _interopRequireDefault(_deprecationWarning);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var deprecateValue = {
    'safe_success': 'safe-success',
    'safe_warn': 'safe-warn',
    'success_circle': 'success-circle',
    'success_no_circle': 'success-no-circle',
    'waiting_circle': 'waiting-circle',
    'info_circle': 'info-circle'
};

/**
 * WeUI Icons
 *
 */

var Icon = function (_React$Component) {
    (0, _inherits3.default)(Icon, _React$Component);

    function Icon() {
        (0, _classCallCheck3.default)(this, Icon);
        return (0, _possibleConstructorReturn3.default)(this, (Icon.__proto__ || (0, _getPrototypeOf2.default)(Icon)).apply(this, arguments));
    }

    (0, _createClass3.default)(Icon, [{
        key: 'render',
        value: function render() {
            var _classNames;

            var _props = this.props,
                value = _props.value,
                size = _props.size,
                className = _props.className,
                primary = _props.primary,
                others = (0, _objectWithoutProperties3.default)(_props, ['value', 'size', 'className', 'primary']);


            if ((0, _keys2.default)(deprecateValue).indexOf(value) !== -1) {
                (0, _deprecationWarning2.default)('Icon ' + value, 'Icon ' + deprecateValue[value]);
            }

            var cls = (0, _classnames2.default)((_classNames = {}, (0, _defineProperty3.default)(_classNames, 'weui-icon-' + value, value !== 'loading'), (0, _defineProperty3.default)(_classNames, 'weui-icon_msg', size === 'large' && !primary), (0, _defineProperty3.default)(_classNames, 'weui-icon_msg-primary', size === 'large' && primary), (0, _defineProperty3.default)(_classNames, 'weui-loading', value === 'loading'), (0, _defineProperty3.default)(_classNames, className, className), _classNames));

            return _react2.default.createElement('i', (0, _extends3.default)({}, others, { className: cls }));
        }
    }]);
    return Icon;
}(_react2.default.Component);

Icon.propTypes = {
    /**
     * types of [weui icons](https://github.com/weui/weui/wiki/Icon)
     *
     */
    value: _propTypes2.default.string,
    /**
     * size of icon, options: small/large
     *
     */
    size: _propTypes2.default.string
};
Icon.defaultProps = {
    value: 'success',
    size: 'small'
};
exports.default = Icon;
module.exports = exports['default'];

/***/ }),

/***/ "./node_modules/react-weui/build/packages/components/icon/index.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _icon = __webpack_require__("./node_modules/react-weui/build/packages/components/icon/icon.js");

var _icon2 = _interopRequireDefault(_icon);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = _icon2.default; /**
                                   * Created by jf on 15/11/3.
                                   */

module.exports = exports['default'];

/***/ }),

/***/ "./node_modules/react-weui/build/packages/components/infiniteloader/index.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _infiniteloader = __webpack_require__("./node_modules/react-weui/build/packages/components/infiniteloader/infiniteloader.js");

var _infiniteloader2 = _interopRequireDefault(_infiniteloader);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = _infiniteloader2.default;
module.exports = exports['default'];

/***/ }),

/***/ "./node_modules/react-weui/build/packages/components/infiniteloader/infiniteloader.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _extends2 = __webpack_require__("./node_modules/babel-runtime/helpers/extends.js");

var _extends3 = _interopRequireDefault(_extends2);

var _objectWithoutProperties2 = __webpack_require__("./node_modules/babel-runtime/helpers/objectWithoutProperties.js");

var _objectWithoutProperties3 = _interopRequireDefault(_objectWithoutProperties2);

var _getPrototypeOf = __webpack_require__("./node_modules/babel-runtime/core-js/object/get-prototype-of.js");

var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

var _classCallCheck2 = __webpack_require__("./node_modules/babel-runtime/helpers/classCallCheck.js");

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = __webpack_require__("./node_modules/babel-runtime/helpers/createClass.js");

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = __webpack_require__("./node_modules/babel-runtime/helpers/possibleConstructorReturn.js");

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = __webpack_require__("./node_modules/babel-runtime/helpers/inherits.js");

var _inherits3 = _interopRequireDefault(_inherits2);

var _react = __webpack_require__("./node_modules/react/react.js");

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__("./node_modules/prop-types/index.js");

var _propTypes2 = _interopRequireDefault(_propTypes);

var _reactDom = __webpack_require__("./node_modules/react-dom/index.js");

var _reactDom2 = _interopRequireDefault(_reactDom);

var _classnames = __webpack_require__("./node_modules/react-weui/build/packages/utils/classnames.js");

var _classnames2 = _interopRequireDefault(_classnames);

var _loadmore = __webpack_require__("./node_modules/react-weui/build/packages/components/loadmore/index.js");

var _loadmore2 = _interopRequireDefault(_loadmore);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 *  A Container trigger loading once it reach certain scrolltop
 *
 */
var InfiniteLoader = function (_Component) {
    (0, _inherits3.default)(InfiniteLoader, _Component);

    function InfiniteLoader(props) {
        (0, _classCallCheck3.default)(this, InfiniteLoader);

        var _this = (0, _possibleConstructorReturn3.default)(this, (InfiniteLoader.__proto__ || (0, _getPrototypeOf2.default)(InfiniteLoader)).call(this, props));

        _this.state = {
            loading: false,
            finish: false,
            scrollTimer: null
        };

        _this.scrollHandle = _this.scrollHandle.bind(_this);
        _this.resolveLoading = _this.resolveLoading.bind(_this);
        _this.finish = _this.finish.bind(_this);
        return _this;
    }

    (0, _createClass3.default)(InfiniteLoader, [{
        key: 'finish',
        value: function finish() {
            this.setState({
                loading: false,
                finish: true
            });
        }
    }, {
        key: 'resolveLoading',
        value: function resolveLoading() {
            this.setState({
                loading: false,
                finish: false
            });
        }
    }, {
        key: 'scrollHandle',
        value: function scrollHandle(e) {
            var _this2 = this;

            if (this.props.onScroll) this.props.onScroll(e);
            if (this.state.loading || this.state.finish || this.props.disable || e.target.scrollTop === 0) return;

            //setup for scrollend event
            clearTimeout(this.state.scrollTimer);
            this.setState({ scrollTimer: setTimeout(function () {
                    if (_this2.props.onScrollEnd) _this2.props.onScrollEnd();
                }, 150) });

            var target = e.target;
            var scrollPercent = Math.floor((target.scrollTop + target.clientHeight) / target.scrollHeight * 100);

            if (scrollPercent > this.props.triggerPercent) {
                this.setState({
                    loading: true
                });

                this.props.onLoadMore(this.resolveLoading, this.finish);
            }
        }
    }, {
        key: 'render',
        value: function render() {
            var _props = this.props,
                children = _props.children,
                className = _props.className,
                height = _props.height,
                triggerPercent = _props.triggerPercent,
                disable = _props.disable,
                loaderLoadingIcon = _props.loaderLoadingIcon,
                loaderDefaultIcon = _props.loaderDefaultIcon,
                onScrollEnd = _props.onScrollEnd,
                onScroll = _props.onScroll,
                onLoadMore = _props.onLoadMore,
                domProps = (0, _objectWithoutProperties3.default)(_props, ['children', 'className', 'height', 'triggerPercent', 'disable', 'loaderLoadingIcon', 'loaderDefaultIcon', 'onScrollEnd', 'onScroll', 'onLoadMore']);

            var clx = (0, _classnames2.default)('react-weui-infiniteloader', className);

            var containerStyle = {
                height: height
            };

            var contentStyle = {
                overflow: disable ? 'hidden' : 'scroll'
            };

            var loaderStyle = {
                display: this.state.loading || this.state.finish ? 'block' : 'none'
            };

            return _react2.default.createElement(
                'div',
                (0, _extends3.default)({
                    className: clx,
                    style: containerStyle,
                    onScroll: this.scrollHandle
                }, domProps),
                _react2.default.createElement(
                    'div',
                    {
                        className: 'react-weui-infiniteloader__content',
                        style: contentStyle,
                        ref: 'container'
                    },
                    children,
                    _react2.default.createElement(
                        'div',
                        { style: loaderStyle },
                        this.state.finish ? loaderDefaultIcon : this.state.loading ? loaderLoadingIcon : false
                    )
                )
            );
        }
    }]);
    return InfiniteLoader;
}(_react.Component);

InfiniteLoader.propTypes = {
    /**
     * height for the container, use string like '10px', default for '100vh'
     *
     */
    height: _propTypes2.default.string,
    /**
     * element(icon) for default loader when there is no more content
     *
     */
    loaderDefaultIcon: _propTypes2.default.object,
    /**
     * element(icon) for loading loader
     *
     */
    loaderLoadingIcon: _propTypes2.default.object,
    /**
     * percentage of scrollTop to trigger loading
     *
     */
    triggerPercent: _propTypes2.default.number,
    /**
     * callback when user scroll the content, pass event
     *
     */
    onScroll: _propTypes2.default.func,
    /**
     * callback when user did not scroll for 150ms
     *
     */
    onScrollEnd: _propTypes2.default.func,
    /**
     * callback when it's requesting for more content, pass resolve function and finish function
     *
     */
    onLoadMore: _propTypes2.default.func,
    /**
     * disable the loader
     *
     */
    disable: _propTypes2.default.bool
};
InfiniteLoader.defaultProps = {
    height: '100vh',
    triggerPercent: 75,
    loaderLoadingIcon: _react2.default.createElement(
        _loadmore2.default,
        { loading: true },
        ' Loading... '
    ),
    loaderDefaultIcon: _react2.default.createElement(
        _loadmore2.default,
        { showLine: true },
        ' No Data'
    ),
    disable: false
};
exports.default = InfiniteLoader;
module.exports = exports['default'];

/***/ }),

/***/ "./node_modules/react-weui/build/packages/components/label/index.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _label = __webpack_require__("./node_modules/react-weui/build/packages/components/label/label.js");

var _label2 = _interopRequireDefault(_label);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = _label2.default; /**
                                    * Created by yjcxy12 on 16/1/22.
                                    */

module.exports = exports['default'];

/***/ }),

/***/ "./node_modules/react-weui/build/packages/components/label/label.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _extends2 = __webpack_require__("./node_modules/babel-runtime/helpers/extends.js");

var _extends3 = _interopRequireDefault(_extends2);

var _defineProperty2 = __webpack_require__("./node_modules/babel-runtime/helpers/defineProperty.js");

var _defineProperty3 = _interopRequireDefault(_defineProperty2);

var _objectWithoutProperties2 = __webpack_require__("./node_modules/babel-runtime/helpers/objectWithoutProperties.js");

var _objectWithoutProperties3 = _interopRequireDefault(_objectWithoutProperties2);

var _react = __webpack_require__("./node_modules/react/react.js");

var _react2 = _interopRequireDefault(_react);

var _classnames = __webpack_require__("./node_modules/react-weui/build/packages/utils/classnames.js");

var _classnames2 = _interopRequireDefault(_classnames);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * WeUI Label Wrapper
 *
 */
var Label = function Label(props) {
    var className = props.className,
        others = (0, _objectWithoutProperties3.default)(props, ['className']);

    var cls = (0, _classnames2.default)((0, _defineProperty3.default)({
        'weui-label': true
    }, className, className));

    return _react2.default.createElement(
        'div',
        null,
        _react2.default.createElement('label', (0, _extends3.default)({ className: cls }, others))
    );
};

exports.default = Label;
module.exports = exports['default'];

/***/ }),

/***/ "./node_modules/react-weui/build/packages/components/loadmore/index.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _loadmore = __webpack_require__("./node_modules/react-weui/build/packages/components/loadmore/loadmore.js");

var _loadmore2 = _interopRequireDefault(_loadmore);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = _loadmore2.default;
module.exports = exports['default'];

/***/ }),

/***/ "./node_modules/react-weui/build/packages/components/loadmore/loadmore.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _extends2 = __webpack_require__("./node_modules/babel-runtime/helpers/extends.js");

var _extends3 = _interopRequireDefault(_extends2);

var _defineProperty2 = __webpack_require__("./node_modules/babel-runtime/helpers/defineProperty.js");

var _defineProperty3 = _interopRequireDefault(_defineProperty2);

var _objectWithoutProperties2 = __webpack_require__("./node_modules/babel-runtime/helpers/objectWithoutProperties.js");

var _objectWithoutProperties3 = _interopRequireDefault(_objectWithoutProperties2);

var _react = __webpack_require__("./node_modules/react/react.js");

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__("./node_modules/prop-types/index.js");

var _propTypes2 = _interopRequireDefault(_propTypes);

var _classnames = __webpack_require__("./node_modules/react-weui/build/packages/utils/classnames.js");

var _classnames2 = _interopRequireDefault(_classnames);

var _icon = __webpack_require__("./node_modules/react-weui/build/packages/components/icon/index.js");

var _icon2 = _interopRequireDefault(_icon);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * Loadmore Indicators.
 *
 */
var LoadMore = function LoadMore(props) {
    var className = props.className,
        children = props.children,
        loading = props.loading,
        showLine = props.showLine,
        showDot = props.showDot,
        others = (0, _objectWithoutProperties3.default)(props, ['className', 'children', 'loading', 'showLine', 'showDot']);

    var cls = (0, _classnames2.default)((0, _defineProperty3.default)({
        'weui-loadmore': true,
        'weui-loadmore_line': showLine,
        'weui-loadmore_dot': showDot
    }, className, className));

    return _react2.default.createElement(
        'div',
        (0, _extends3.default)({ className: cls }, others),
        loading ? _react2.default.createElement(_icon2.default, { value: 'loading' }) : false,
        _react2.default.createElement(
            'span',
            { className: 'weui-loadmore__tips' },
            children
        )
    );
};

LoadMore.propTypes = {
    /**
     * display laoding spinner
     *
     */
    loading: _propTypes2.default.bool,
    /**
     * display side lines
     *
     */
    showLine: _propTypes2.default.bool,
    /**
     * display dot in the center
     *
     */
    showDot: _propTypes2.default.bool
};

LoadMore.defaultProps = {
    loading: false,
    showLine: false,
    showDot: false
};

exports.default = LoadMore;
module.exports = exports['default'];

/***/ }),

/***/ "./node_modules/react-weui/build/packages/components/mask/index.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _mask = __webpack_require__("./node_modules/react-weui/build/packages/components/mask/mask.js");

var _mask2 = _interopRequireDefault(_mask);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = _mask2.default; /**
                                   * Created by jf on 15/10/27.
                                   */

module.exports = exports['default'];

/***/ }),

/***/ "./node_modules/react-weui/build/packages/components/mask/mask.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _extends2 = __webpack_require__("./node_modules/babel-runtime/helpers/extends.js");

var _extends3 = _interopRequireDefault(_extends2);

var _objectWithoutProperties2 = __webpack_require__("./node_modules/babel-runtime/helpers/objectWithoutProperties.js");

var _objectWithoutProperties3 = _interopRequireDefault(_objectWithoutProperties2);

var _getPrototypeOf = __webpack_require__("./node_modules/babel-runtime/core-js/object/get-prototype-of.js");

var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

var _classCallCheck2 = __webpack_require__("./node_modules/babel-runtime/helpers/classCallCheck.js");

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = __webpack_require__("./node_modules/babel-runtime/helpers/createClass.js");

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = __webpack_require__("./node_modules/babel-runtime/helpers/possibleConstructorReturn.js");

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = __webpack_require__("./node_modules/babel-runtime/helpers/inherits.js");

var _inherits3 = _interopRequireDefault(_inherits2);

var _react = __webpack_require__("./node_modules/react/react.js");

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__("./node_modules/prop-types/index.js");

var _propTypes2 = _interopRequireDefault(_propTypes);

var _classnames = __webpack_require__("./node_modules/react-weui/build/packages/utils/classnames.js");

var _classnames2 = _interopRequireDefault(_classnames);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * screen mask, use in `Dialog`, `ActionSheet`, `Popup`.
 *
 */
var Mask = function (_React$Component) {
    (0, _inherits3.default)(Mask, _React$Component);

    function Mask() {
        (0, _classCallCheck3.default)(this, Mask);
        return (0, _possibleConstructorReturn3.default)(this, (Mask.__proto__ || (0, _getPrototypeOf2.default)(Mask)).apply(this, arguments));
    }

    (0, _createClass3.default)(Mask, [{
        key: 'render',
        value: function render() {
            var _props = this.props,
                transparent = _props.transparent,
                className = _props.className,
                others = (0, _objectWithoutProperties3.default)(_props, ['transparent', 'className']);

            var clz = (0, _classnames2.default)({
                'weui-mask': !transparent,
                'weui-mask_transparent': transparent
            }, className);

            return _react2.default.createElement('div', (0, _extends3.default)({ className: clz }, others));
        }
    }]);
    return Mask;
}(_react2.default.Component);

Mask.propTypes = {
    /**
     * Whather mask should be transparent (no color)
     *
     */
    transparent: _propTypes2.default.bool
};
Mask.defaultProps = {
    transparent: false
};
exports.default = Mask;
module.exports = exports['default'];

/***/ }),

/***/ "./node_modules/react-weui/build/packages/components/mediabox/index.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.MediaBoxInfoMeta = exports.MediaBoxInfo = exports.MediaBoxDescription = exports.MediaBoxTitle = exports.MediaBoxBody = exports.MediaBoxHeader = exports.MediaBox = undefined;

var _mediabox = __webpack_require__("./node_modules/react-weui/build/packages/components/mediabox/mediabox.js");

var _mediabox2 = _interopRequireDefault(_mediabox);

var _mediabox_header = __webpack_require__("./node_modules/react-weui/build/packages/components/mediabox/mediabox_header.js");

var _mediabox_header2 = _interopRequireDefault(_mediabox_header);

var _mediabox_body = __webpack_require__("./node_modules/react-weui/build/packages/components/mediabox/mediabox_body.js");

var _mediabox_body2 = _interopRequireDefault(_mediabox_body);

var _mediabox_title = __webpack_require__("./node_modules/react-weui/build/packages/components/mediabox/mediabox_title.js");

var _mediabox_title2 = _interopRequireDefault(_mediabox_title);

var _mediabox_desc = __webpack_require__("./node_modules/react-weui/build/packages/components/mediabox/mediabox_desc.js");

var _mediabox_desc2 = _interopRequireDefault(_mediabox_desc);

var _mediabox_info = __webpack_require__("./node_modules/react-weui/build/packages/components/mediabox/mediabox_info.js");

var _mediabox_info2 = _interopRequireDefault(_mediabox_info);

var _mediabox_info_meta = __webpack_require__("./node_modules/react-weui/build/packages/components/mediabox/mediabox_info_meta.js");

var _mediabox_info_meta2 = _interopRequireDefault(_mediabox_info_meta);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.MediaBox = _mediabox2.default;
exports.MediaBoxHeader = _mediabox_header2.default;
exports.MediaBoxBody = _mediabox_body2.default;
exports.MediaBoxTitle = _mediabox_title2.default;
exports.MediaBoxDescription = _mediabox_desc2.default;
exports.MediaBoxInfo = _mediabox_info2.default;
exports.MediaBoxInfoMeta = _mediabox_info_meta2.default;

/***/ }),

/***/ "./node_modules/react-weui/build/packages/components/mediabox/mediabox.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _extends2 = __webpack_require__("./node_modules/babel-runtime/helpers/extends.js");

var _extends3 = _interopRequireDefault(_extends2);

var _objectWithoutProperties2 = __webpack_require__("./node_modules/babel-runtime/helpers/objectWithoutProperties.js");

var _objectWithoutProperties3 = _interopRequireDefault(_objectWithoutProperties2);

var _getPrototypeOf = __webpack_require__("./node_modules/babel-runtime/core-js/object/get-prototype-of.js");

var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

var _classCallCheck2 = __webpack_require__("./node_modules/babel-runtime/helpers/classCallCheck.js");

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = __webpack_require__("./node_modules/babel-runtime/helpers/createClass.js");

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = __webpack_require__("./node_modules/babel-runtime/helpers/possibleConstructorReturn.js");

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = __webpack_require__("./node_modules/babel-runtime/helpers/inherits.js");

var _inherits3 = _interopRequireDefault(_inherits2);

var _react = __webpack_require__("./node_modules/react/react.js");

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__("./node_modules/prop-types/index.js");

var _propTypes2 = _interopRequireDefault(_propTypes);

var _classnames = __webpack_require__("./node_modules/react-weui/build/packages/utils/classnames.js");

var _classnames2 = _interopRequireDefault(_classnames);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * Media Object, Typically use with `Panel` to display pictures and text, consists of `MediaBoxBody`, `MediaBoxDescription`, `MediaBoxHeader`
 *
 */
var MediaBox = function (_React$Component) {
    (0, _inherits3.default)(MediaBox, _React$Component);

    function MediaBox() {
        (0, _classCallCheck3.default)(this, MediaBox);
        return (0, _possibleConstructorReturn3.default)(this, (MediaBox.__proto__ || (0, _getPrototypeOf2.default)(MediaBox)).apply(this, arguments));
    }

    (0, _createClass3.default)(MediaBox, [{
        key: 'render',
        value: function render() {
            var _props = this.props,
                children = _props.children,
                type = _props.type,
                className = _props.className,
                others = (0, _objectWithoutProperties3.default)(_props, ['children', 'type', 'className']);

            var Component = this.props.href ? 'a' : 'div';
            var cls = (0, _classnames2.default)({
                'weui-media-box': true,
                'weui-media-box_appmsg': type === 'appmsg',
                'weui-media-box_text': type === 'text',
                'weui-media-box_small-appmsg': type === 'small_appmsg'
            }, className);

            return _react2.default.createElement(
                Component,
                (0, _extends3.default)({ className: cls }, others),
                children
            );
        }
    }]);
    return MediaBox;
}(_react2.default.Component);

MediaBox.propTypes = {
    /**
     * The layout of media box, Options: appmsg/text/small_appmsg
     *
     */
    type: _propTypes2.default.string
};
MediaBox.defaultProps = {
    type: 'text'
};
exports.default = MediaBox;
;
module.exports = exports['default'];

/***/ }),

/***/ "./node_modules/react-weui/build/packages/components/mediabox/mediabox_body.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _extends2 = __webpack_require__("./node_modules/babel-runtime/helpers/extends.js");

var _extends3 = _interopRequireDefault(_extends2);

var _objectWithoutProperties2 = __webpack_require__("./node_modules/babel-runtime/helpers/objectWithoutProperties.js");

var _objectWithoutProperties3 = _interopRequireDefault(_objectWithoutProperties2);

var _getPrototypeOf = __webpack_require__("./node_modules/babel-runtime/core-js/object/get-prototype-of.js");

var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

var _classCallCheck2 = __webpack_require__("./node_modules/babel-runtime/helpers/classCallCheck.js");

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = __webpack_require__("./node_modules/babel-runtime/helpers/createClass.js");

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = __webpack_require__("./node_modules/babel-runtime/helpers/possibleConstructorReturn.js");

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = __webpack_require__("./node_modules/babel-runtime/helpers/inherits.js");

var _inherits3 = _interopRequireDefault(_inherits2);

var _react = __webpack_require__("./node_modules/react/react.js");

var _react2 = _interopRequireDefault(_react);

var _classnames = __webpack_require__("./node_modules/react-weui/build/packages/utils/classnames.js");

var _classnames2 = _interopRequireDefault(_classnames);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * Content of Mediabox
 *
 */
var PanelBody = function (_React$Component) {
    (0, _inherits3.default)(PanelBody, _React$Component);

    function PanelBody() {
        (0, _classCallCheck3.default)(this, PanelBody);
        return (0, _possibleConstructorReturn3.default)(this, (PanelBody.__proto__ || (0, _getPrototypeOf2.default)(PanelBody)).apply(this, arguments));
    }

    (0, _createClass3.default)(PanelBody, [{
        key: 'render',
        value: function render() {
            var _props = this.props,
                children = _props.children,
                className = _props.className,
                others = (0, _objectWithoutProperties3.default)(_props, ['children', 'className']);

            var cls = (0, _classnames2.default)({
                'weui-media-box__bd': true
            }, className);

            return _react2.default.createElement(
                'div',
                (0, _extends3.default)({ className: cls }, others),
                children
            );
        }
    }]);
    return PanelBody;
}(_react2.default.Component);

exports.default = PanelBody;
;
module.exports = exports['default'];

/***/ }),

/***/ "./node_modules/react-weui/build/packages/components/mediabox/mediabox_desc.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _extends2 = __webpack_require__("./node_modules/babel-runtime/helpers/extends.js");

var _extends3 = _interopRequireDefault(_extends2);

var _objectWithoutProperties2 = __webpack_require__("./node_modules/babel-runtime/helpers/objectWithoutProperties.js");

var _objectWithoutProperties3 = _interopRequireDefault(_objectWithoutProperties2);

var _getPrototypeOf = __webpack_require__("./node_modules/babel-runtime/core-js/object/get-prototype-of.js");

var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

var _classCallCheck2 = __webpack_require__("./node_modules/babel-runtime/helpers/classCallCheck.js");

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = __webpack_require__("./node_modules/babel-runtime/helpers/createClass.js");

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = __webpack_require__("./node_modules/babel-runtime/helpers/possibleConstructorReturn.js");

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = __webpack_require__("./node_modules/babel-runtime/helpers/inherits.js");

var _inherits3 = _interopRequireDefault(_inherits2);

var _react = __webpack_require__("./node_modules/react/react.js");

var _react2 = _interopRequireDefault(_react);

var _classnames = __webpack_require__("./node_modules/react-weui/build/packages/utils/classnames.js");

var _classnames2 = _interopRequireDefault(_classnames);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * Description of MediaBox
 *
 */
var MediaBoxDescription = function (_React$Component) {
    (0, _inherits3.default)(MediaBoxDescription, _React$Component);

    function MediaBoxDescription() {
        (0, _classCallCheck3.default)(this, MediaBoxDescription);
        return (0, _possibleConstructorReturn3.default)(this, (MediaBoxDescription.__proto__ || (0, _getPrototypeOf2.default)(MediaBoxDescription)).apply(this, arguments));
    }

    (0, _createClass3.default)(MediaBoxDescription, [{
        key: 'render',
        value: function render() {
            var _props = this.props,
                children = _props.children,
                className = _props.className,
                others = (0, _objectWithoutProperties3.default)(_props, ['children', 'className']);

            var cls = (0, _classnames2.default)({
                'weui-media-box__desc': true
            }, className);

            return _react2.default.createElement(
                'p',
                (0, _extends3.default)({ className: cls }, others),
                children
            );
        }
    }]);
    return MediaBoxDescription;
}(_react2.default.Component);

exports.default = MediaBoxDescription;
;
module.exports = exports['default'];

/***/ }),

/***/ "./node_modules/react-weui/build/packages/components/mediabox/mediabox_header.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _extends2 = __webpack_require__("./node_modules/babel-runtime/helpers/extends.js");

var _extends3 = _interopRequireDefault(_extends2);

var _objectWithoutProperties2 = __webpack_require__("./node_modules/babel-runtime/helpers/objectWithoutProperties.js");

var _objectWithoutProperties3 = _interopRequireDefault(_objectWithoutProperties2);

var _getPrototypeOf = __webpack_require__("./node_modules/babel-runtime/core-js/object/get-prototype-of.js");

var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

var _classCallCheck2 = __webpack_require__("./node_modules/babel-runtime/helpers/classCallCheck.js");

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = __webpack_require__("./node_modules/babel-runtime/helpers/createClass.js");

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = __webpack_require__("./node_modules/babel-runtime/helpers/possibleConstructorReturn.js");

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = __webpack_require__("./node_modules/babel-runtime/helpers/inherits.js");

var _inherits3 = _interopRequireDefault(_inherits2);

var _react = __webpack_require__("./node_modules/react/react.js");

var _react2 = _interopRequireDefault(_react);

var _classnames = __webpack_require__("./node_modules/react-weui/build/packages/utils/classnames.js");

var _classnames2 = _interopRequireDefault(_classnames);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * Header of MediaBox, if detects Img tag inside content will automatically adds corresponding class
 *
 */
var MediaBoxHeader = function (_React$Component) {
    (0, _inherits3.default)(MediaBoxHeader, _React$Component);

    function MediaBoxHeader() {
        (0, _classCallCheck3.default)(this, MediaBoxHeader);
        return (0, _possibleConstructorReturn3.default)(this, (MediaBoxHeader.__proto__ || (0, _getPrototypeOf2.default)(MediaBoxHeader)).apply(this, arguments));
    }

    (0, _createClass3.default)(MediaBoxHeader, [{
        key: 'render',
        value: function render() {
            var _props = this.props,
                children = _props.children,
                className = _props.className,
                others = (0, _objectWithoutProperties3.default)(_props, ['children', 'className']);

            var clz = (0, _classnames2.default)({
                'weui-media-box__hd': true
            }, className);

            var childrenWithProps = _react2.default.Children.map(children, function (child) {
                if (child.type === 'img' && !child.props.className) {
                    return _react2.default.cloneElement(child, { className: 'weui-media-box__thumb' });
                } else {
                    return child;
                }
            });

            return _react2.default.createElement(
                'div',
                (0, _extends3.default)({ className: clz }, others),
                childrenWithProps
            );
        }
    }]);
    return MediaBoxHeader;
}(_react2.default.Component);

exports.default = MediaBoxHeader;
;
module.exports = exports['default'];

/***/ }),

/***/ "./node_modules/react-weui/build/packages/components/mediabox/mediabox_info.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _extends2 = __webpack_require__("./node_modules/babel-runtime/helpers/extends.js");

var _extends3 = _interopRequireDefault(_extends2);

var _objectWithoutProperties2 = __webpack_require__("./node_modules/babel-runtime/helpers/objectWithoutProperties.js");

var _objectWithoutProperties3 = _interopRequireDefault(_objectWithoutProperties2);

var _getPrototypeOf = __webpack_require__("./node_modules/babel-runtime/core-js/object/get-prototype-of.js");

var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

var _classCallCheck2 = __webpack_require__("./node_modules/babel-runtime/helpers/classCallCheck.js");

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = __webpack_require__("./node_modules/babel-runtime/helpers/createClass.js");

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = __webpack_require__("./node_modules/babel-runtime/helpers/possibleConstructorReturn.js");

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = __webpack_require__("./node_modules/babel-runtime/helpers/inherits.js");

var _inherits3 = _interopRequireDefault(_inherits2);

var _react = __webpack_require__("./node_modules/react/react.js");

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__("./node_modules/prop-types/index.js");

var _propTypes2 = _interopRequireDefault(_propTypes);

var _classnames = __webpack_require__("./node_modules/react-weui/build/packages/utils/classnames.js");

var _classnames2 = _interopRequireDefault(_classnames);

var _mediabox_info_meta = __webpack_require__("./node_modules/react-weui/build/packages/components/mediabox/mediabox_info_meta.js");

var _mediabox_info_meta2 = _interopRequireDefault(_mediabox_info_meta);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * Info Items for MediaBox
 *
 */
var MediaBoxInfo = function (_React$Component) {
    (0, _inherits3.default)(MediaBoxInfo, _React$Component);

    function MediaBoxInfo() {
        (0, _classCallCheck3.default)(this, MediaBoxInfo);
        return (0, _possibleConstructorReturn3.default)(this, (MediaBoxInfo.__proto__ || (0, _getPrototypeOf2.default)(MediaBoxInfo)).apply(this, arguments));
    }

    (0, _createClass3.default)(MediaBoxInfo, [{
        key: 'renderData',
        value: function renderData(metas) {
            return metas.map(function (meta, i) {
                return _react2.default.createElement(
                    _mediabox_info_meta2.default,
                    { key: i, extra: meta.extra },
                    meta.label
                );
            });
        }
    }, {
        key: 'render',
        value: function render() {
            var _props = this.props,
                children = _props.children,
                data = _props.data,
                className = _props.className,
                others = (0, _objectWithoutProperties3.default)(_props, ['children', 'data', 'className']);

            var cls = (0, _classnames2.default)({
                'weui-media-box__info': true
            }, className);

            return _react2.default.createElement(
                'ul',
                (0, _extends3.default)({ className: cls }, others),
                data.length > 0 ? this.renderData(data) : children
            );
        }
    }]);
    return MediaBoxInfo;
}(_react2.default.Component);

MediaBoxInfo.propTypes = {
    /**
     * automatically include Metas, object array of metas, property required: `extra`, `label`
     *
     */
    data: _propTypes2.default.array
};
MediaBoxInfo.defaultProps = {
    data: []
};
exports.default = MediaBoxInfo;
;
module.exports = exports['default'];

/***/ }),

/***/ "./node_modules/react-weui/build/packages/components/mediabox/mediabox_info_meta.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _extends2 = __webpack_require__("./node_modules/babel-runtime/helpers/extends.js");

var _extends3 = _interopRequireDefault(_extends2);

var _objectWithoutProperties2 = __webpack_require__("./node_modules/babel-runtime/helpers/objectWithoutProperties.js");

var _objectWithoutProperties3 = _interopRequireDefault(_objectWithoutProperties2);

var _getPrototypeOf = __webpack_require__("./node_modules/babel-runtime/core-js/object/get-prototype-of.js");

var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

var _classCallCheck2 = __webpack_require__("./node_modules/babel-runtime/helpers/classCallCheck.js");

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = __webpack_require__("./node_modules/babel-runtime/helpers/createClass.js");

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = __webpack_require__("./node_modules/babel-runtime/helpers/possibleConstructorReturn.js");

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = __webpack_require__("./node_modules/babel-runtime/helpers/inherits.js");

var _inherits3 = _interopRequireDefault(_inherits2);

var _react = __webpack_require__("./node_modules/react/react.js");

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__("./node_modules/prop-types/index.js");

var _propTypes2 = _interopRequireDefault(_propTypes);

var _classnames = __webpack_require__("./node_modules/react-weui/build/packages/utils/classnames.js");

var _classnames2 = _interopRequireDefault(_classnames);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * Meta Item for `MeidaBoxInfo`
 *
 */
var MediaBoxInfoMeta = function (_React$Component) {
    (0, _inherits3.default)(MediaBoxInfoMeta, _React$Component);

    function MediaBoxInfoMeta() {
        (0, _classCallCheck3.default)(this, MediaBoxInfoMeta);
        return (0, _possibleConstructorReturn3.default)(this, (MediaBoxInfoMeta.__proto__ || (0, _getPrototypeOf2.default)(MediaBoxInfoMeta)).apply(this, arguments));
    }

    (0, _createClass3.default)(MediaBoxInfoMeta, [{
        key: 'render',
        value: function render() {
            var _props = this.props,
                children = _props.children,
                extra = _props.extra,
                className = _props.className,
                others = (0, _objectWithoutProperties3.default)(_props, ['children', 'extra', 'className']);

            var cls = (0, _classnames2.default)({
                'weui-media-box__info__meta': true,
                'weui-media-box__info__meta_extra': extra
            }, className);

            return _react2.default.createElement(
                'li',
                (0, _extends3.default)({ className: cls }, others),
                children
            );
        }
    }]);
    return MediaBoxInfoMeta;
}(_react2.default.Component);

MediaBoxInfoMeta.propTypes = {
    /**
     * add left margin to indicate extra
     *
     */
    extra: _propTypes2.default.bool
};
MediaBoxInfoMeta.defaultProps = {
    extra: false
};
exports.default = MediaBoxInfoMeta;
;
module.exports = exports['default'];

/***/ }),

/***/ "./node_modules/react-weui/build/packages/components/mediabox/mediabox_title.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _extends2 = __webpack_require__("./node_modules/babel-runtime/helpers/extends.js");

var _extends3 = _interopRequireDefault(_extends2);

var _objectWithoutProperties2 = __webpack_require__("./node_modules/babel-runtime/helpers/objectWithoutProperties.js");

var _objectWithoutProperties3 = _interopRequireDefault(_objectWithoutProperties2);

var _getPrototypeOf = __webpack_require__("./node_modules/babel-runtime/core-js/object/get-prototype-of.js");

var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

var _classCallCheck2 = __webpack_require__("./node_modules/babel-runtime/helpers/classCallCheck.js");

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = __webpack_require__("./node_modules/babel-runtime/helpers/createClass.js");

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = __webpack_require__("./node_modules/babel-runtime/helpers/possibleConstructorReturn.js");

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = __webpack_require__("./node_modules/babel-runtime/helpers/inherits.js");

var _inherits3 = _interopRequireDefault(_inherits2);

var _react = __webpack_require__("./node_modules/react/react.js");

var _react2 = _interopRequireDefault(_react);

var _classnames = __webpack_require__("./node_modules/react-weui/build/packages/utils/classnames.js");

var _classnames2 = _interopRequireDefault(_classnames);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * Title for MediaBox
 *
 */
var MediaBoxTitle = function (_React$Component) {
    (0, _inherits3.default)(MediaBoxTitle, _React$Component);

    function MediaBoxTitle() {
        (0, _classCallCheck3.default)(this, MediaBoxTitle);
        return (0, _possibleConstructorReturn3.default)(this, (MediaBoxTitle.__proto__ || (0, _getPrototypeOf2.default)(MediaBoxTitle)).apply(this, arguments));
    }

    (0, _createClass3.default)(MediaBoxTitle, [{
        key: 'render',
        value: function render() {
            var _props = this.props,
                children = _props.children,
                className = _props.className,
                others = (0, _objectWithoutProperties3.default)(_props, ['children', 'className']);

            var cls = (0, _classnames2.default)({
                'weui-media-box__title': true
            }, className);

            return _react2.default.createElement(
                'h4',
                (0, _extends3.default)({ className: cls }, others),
                children
            );
        }
    }]);
    return MediaBoxTitle;
}(_react2.default.Component);

exports.default = MediaBoxTitle;
;
module.exports = exports['default'];

/***/ }),

/***/ "./node_modules/react-weui/build/packages/components/msg/index.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _msg = __webpack_require__("./node_modules/react-weui/build/packages/components/msg/msg.js");

var _msg2 = _interopRequireDefault(_msg);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = _msg2.default;
module.exports = exports['default'];

/***/ }),

/***/ "./node_modules/react-weui/build/packages/components/msg/msg.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _defineProperty2 = __webpack_require__("./node_modules/babel-runtime/helpers/defineProperty.js");

var _defineProperty3 = _interopRequireDefault(_defineProperty2);

var _extends2 = __webpack_require__("./node_modules/babel-runtime/helpers/extends.js");

var _extends3 = _interopRequireDefault(_extends2);

var _objectWithoutProperties2 = __webpack_require__("./node_modules/babel-runtime/helpers/objectWithoutProperties.js");

var _objectWithoutProperties3 = _interopRequireDefault(_objectWithoutProperties2);

var _getPrototypeOf = __webpack_require__("./node_modules/babel-runtime/core-js/object/get-prototype-of.js");

var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

var _classCallCheck2 = __webpack_require__("./node_modules/babel-runtime/helpers/classCallCheck.js");

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = __webpack_require__("./node_modules/babel-runtime/helpers/createClass.js");

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = __webpack_require__("./node_modules/babel-runtime/helpers/possibleConstructorReturn.js");

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = __webpack_require__("./node_modules/babel-runtime/helpers/inherits.js");

var _inherits3 = _interopRequireDefault(_inherits2);

var _react = __webpack_require__("./node_modules/react/react.js");

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__("./node_modules/prop-types/index.js");

var _propTypes2 = _interopRequireDefault(_propTypes);

var _classnames = __webpack_require__("./node_modules/react-weui/build/packages/utils/classnames.js");

var _classnames2 = _interopRequireDefault(_classnames);

var _index = __webpack_require__("./node_modules/react-weui/build/packages/components/button/index.js");

var _footer = __webpack_require__("./node_modules/react-weui/build/packages/components/footer/index.js");

var _index2 = __webpack_require__("./node_modules/react-weui/build/packages/components/icon/index.js");

var _index3 = _interopRequireDefault(_index2);

var _deprecationWarning = __webpack_require__("./node_modules/react-weui/build/packages/utils/deprecationWarning.js");

var _deprecationWarning2 = _interopRequireDefault(_deprecationWarning);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * A full notification page to indicate results
 *
 */
var Msg = function (_Component) {
    (0, _inherits3.default)(Msg, _Component);

    function Msg() {
        (0, _classCallCheck3.default)(this, Msg);
        return (0, _possibleConstructorReturn3.default)(this, (Msg.__proto__ || (0, _getPrototypeOf2.default)(Msg)).apply(this, arguments));
    }

    (0, _createClass3.default)(Msg, [{
        key: '_renderButtons',
        value: function _renderButtons() {

            return this.props.buttons.map(function (button, idx) {
                var type = button.type,
                    label = button.label,
                    others = (0, _objectWithoutProperties3.default)(button, ['type', 'label']);

                return _react2.default.createElement(
                    _index.Button,
                    (0, _extends3.default)({ key: idx }, others, { type: type }),
                    label
                );
            });
        }
    }, {
        key: 'render',
        value: function render() {
            var _props = this.props,
                children = _props.children,
                className = _props.className,
                type = _props.type,
                title = _props.title,
                description = _props.description,
                extraHref = _props.extraHref,
                extraText = _props.extraText,
                footer = _props.footer,
                buttons = _props.buttons,
                others = (0, _objectWithoutProperties3.default)(_props, ['children', 'className', 'type', 'title', 'description', 'extraHref', 'extraText', 'footer', 'buttons']);

            var cls = (0, _classnames2.default)('weui-msg', (0, _defineProperty3.default)({}, className, className));

            var elFooter = footer ? footer : function () {
                return false;
            };

            if (!elFooter() && (extraHref || extraText)) {
                (0, _deprecationWarning2.default)('Msg extraHref/extraText', 'Msg footer');

                elFooter = function elFooter() {
                    return _react2.default.createElement(
                        _footer.Footer,
                        null,
                        _react2.default.createElement(
                            _footer.FooterLinks,
                            null,
                            _react2.default.createElement(
                                _footer.FooterLink,
                                { href: extraHref },
                                extraText
                            )
                        )
                    );
                };
            }

            return _react2.default.createElement(
                'div',
                (0, _extends3.default)({ className: cls }, others),
                _react2.default.createElement(
                    'div',
                    { className: 'weui-msg__icon-area' },
                    _react2.default.createElement(_index3.default, { value: type, size: 'large' })
                ),
                _react2.default.createElement(
                    'div',
                    { className: 'weui-msg__text-area' },
                    title ? _react2.default.createElement(
                        'h2',
                        { className: 'weui-msg__title' },
                        title
                    ) : false,
                    description ? _react2.default.createElement(
                        'p',
                        { className: 'weui-msg__desc' },
                        description
                    ) : false,
                    children
                ),
                _react2.default.createElement(
                    'div',
                    { className: 'weui-msg__opr-area' },
                    _react2.default.createElement(
                        _index.ButtonArea,
                        null,
                        this._renderButtons()
                    )
                ),
                _react2.default.createElement(
                    'div',
                    { className: 'weui-msg__extra-area' },
                    elFooter()
                )
            );
        }
    }]);
    return Msg;
}(_react.Component);

Msg.propTypes = {
    /**
     * Icon type
     *
     */
    type: _propTypes2.default.string,
    /**
     * Object array of Buttons, require at least `label` property
     *
     */
    buttons: _propTypes2.default.array,
    /**
     * Page Title
     *
     */
    title: _propTypes2.default.string,
    /**
     * Page Description
     *
     */
    description: _propTypes2.default.string,
    /**
     * deprecated property from 0.4.x
     *
     */
    extraHref: _propTypes2.default.string,
    /**
     * deprecated property from 0.4.x
     *
     */
    extraText: _propTypes2.default.string,
    /**
     * Footer Element of Page
     *
     */
    footer: _propTypes2.default.any
};
Msg.defaultProps = {
    type: 'success',
    buttons: []
};
exports.default = Msg;
module.exports = exports['default'];

/***/ }),

/***/ "./node_modules/react-weui/build/packages/components/page/index.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _page = __webpack_require__("./node_modules/react-weui/build/packages/components/page/page.js");

var _page2 = _interopRequireDefault(_page);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = _page2.default;
module.exports = exports['default'];

/***/ }),

/***/ "./node_modules/react-weui/build/packages/components/page/page.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _assign = __webpack_require__("./node_modules/babel-runtime/core-js/object/assign.js");

var _assign2 = _interopRequireDefault(_assign);

var _getPrototypeOf = __webpack_require__("./node_modules/babel-runtime/core-js/object/get-prototype-of.js");

var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

var _classCallCheck2 = __webpack_require__("./node_modules/babel-runtime/helpers/classCallCheck.js");

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = __webpack_require__("./node_modules/babel-runtime/helpers/createClass.js");

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = __webpack_require__("./node_modules/babel-runtime/helpers/possibleConstructorReturn.js");

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = __webpack_require__("./node_modules/babel-runtime/helpers/inherits.js");

var _inherits3 = _interopRequireDefault(_inherits2);

var _react = __webpack_require__("./node_modules/react/react.js");

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__("./node_modules/prop-types/index.js");

var _propTypes2 = _interopRequireDefault(_propTypes);

var _classnames = __webpack_require__("./node_modules/react-weui/build/packages/utils/classnames.js");

var _classnames2 = _interopRequireDefault(_classnames);

var _index = __webpack_require__("./node_modules/react-weui/build/packages/components/ptr/index.js");

var _index2 = _interopRequireDefault(_index);

var _index3 = __webpack_require__("./node_modules/react-weui/build/packages/components/infiniteloader/index.js");

var _index4 = _interopRequireDefault(_index3);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * A Component for a standard page
 *
 */
var Page = function (_Component) {
    (0, _inherits3.default)(Page, _Component);

    function Page(props) {
        (0, _classCallCheck3.default)(this, Page);

        var _this = (0, _possibleConstructorReturn3.default)(this, (Page.__proto__ || (0, _getPrototypeOf2.default)(Page)).call(this, props));

        _this.state = {
            ptrRefreshing: false,
            contentScrollOnTop: true
        };

        _this.handleRefresh = _this.handleRefresh.bind(_this);
        return _this;
    }

    (0, _createClass3.default)(Page, [{
        key: 'componentWillReceiveProps',
        value: function componentWillReceiveProps(newProps) {
            if (newProps.infiniteLoader) {
                this.setState({ contentScrollOnTop: true });
            } else {
                this.setState({ contentScrollOnTop: false });
            }
        }
    }, {
        key: 'componentWillUnmount',
        value: function componentWillUnmount() {
            //console.log('unmounting page');
        }
    }, {
        key: 'handleRefresh',
        value: function handleRefresh(resolve) {
            var _this2 = this;

            this.setState({
                ptrRefreshing: true
            }, function () {
                _this2.props.ptrOnRefresh(function () {
                    _this2.setState({
                        ptrRefreshing: false
                    });
                    resolve();
                });
            });
        }
    }, {
        key: 'handleContentScroll',
        value: function handleContentScroll(e) {
            if (e.target.scrollTop <= 0) {
                this.setState({ contentScrollOnTop: true });
            } else {
                this.setState({ contentScrollOnTop: false });
            }
        }
    }, {
        key: 'renderContent',
        value: function renderContent(children, ptr, infiniteLoader) {
            var _this3 = this;

            if (!infiniteLoader && !ptr) return children;

            var ContentWithInfiniteLoader = _react2.default.createElement(
                _index4.default,
                {
                    height: '100%',
                    disable: this.state.ptrRefreshing,
                    onScroll: function onScroll(e) {
                        return _this3.handleContentScroll(e);
                    },
                    onLoadMore: this.props.onLoadMore
                },
                children
            );
            if (!ptr && infiniteLoader) return ContentWithInfiniteLoader;
            if (ptr && !infiniteLoader) return _react2.default.createElement(
                _index2.default,
                {
                    onRefresh: this.handleRefresh,
                    disable: !this.state.contentScrollOnTop
                },
                children
            );

            return _react2.default.createElement(
                _index2.default,
                {
                    onRefresh: this.handleRefresh,
                    disable: !this.state.contentScrollOnTop
                },
                ContentWithInfiniteLoader
            );
        }
    }, {
        key: 'render',
        value: function render() {
            var _props = this.props,
                children = _props.children,
                style = _props.style,
                className = _props.className,
                infiniteLoader = _props.infiniteLoader,
                transition = _props.transition,
                ptr = _props.ptr;

            var cls = (0, _classnames2.default)('weui-page', className);

            return _react2.default.createElement(
                'div',
                {
                    className: cls,
                    style: (0, _assign2.default)({}, { animationName: transition ? 'pageInRight' : '' }, style) },
                this.renderContent(children, ptr, infiniteLoader)
            );
        }
    }]);
    return Page;
}(_react.Component);

Page.propTypes = {
    /**
     * indicate to use ptr
     *
     */
    ptr: _propTypes2.default.bool,
    /**
     * function to call when ptr refresh, pass function resolve to finish loading
     *
     */
    ptrOnRefresh: _propTypes2.default.func,
    /**
     * indicate to use infiniteloader
     *
     */
    infiniteLoader: _propTypes2.default.bool,
    /**
     * callback when it's requesting for more content, pass resolve function and finish function
     *
     */
    onLoadMore: _propTypes2.default.func,
    /**
     * enable page transition
     *
     */
    transition: _propTypes2.default.bool
};
Page.defaultProps = {
    ptr: true,
    ptrOnRefresh: function ptrOnRefresh(resolve) {
        setTimeout(function () {
            resolve();
        }, 1000);
    },
    infiniteLoader: true,
    onLoadMore: function onLoadMore(resolve, finish) {
        //mock request
        setTimeout(function () {
            finish();
        }, 1000);
    },
    transition: true
};
exports.default = Page;
module.exports = exports['default'];

/***/ }),

/***/ "./node_modules/react-weui/build/packages/components/panel/index.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.PanelFooter = exports.PanelBody = exports.PanelHeader = exports.Panel = undefined;

var _panel = __webpack_require__("./node_modules/react-weui/build/packages/components/panel/panel.js");

var _panel2 = _interopRequireDefault(_panel);

var _panel_header = __webpack_require__("./node_modules/react-weui/build/packages/components/panel/panel_header.js");

var _panel_header2 = _interopRequireDefault(_panel_header);

var _panel_body = __webpack_require__("./node_modules/react-weui/build/packages/components/panel/panel_body.js");

var _panel_body2 = _interopRequireDefault(_panel_body);

var _panel_footer = __webpack_require__("./node_modules/react-weui/build/packages/components/panel/panel_footer.js");

var _panel_footer2 = _interopRequireDefault(_panel_footer);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.Panel = _panel2.default;
exports.PanelHeader = _panel_header2.default;
exports.PanelBody = _panel_body2.default;
exports.PanelFooter = _panel_footer2.default;

/***/ }),

/***/ "./node_modules/react-weui/build/packages/components/panel/panel.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _extends2 = __webpack_require__("./node_modules/babel-runtime/helpers/extends.js");

var _extends3 = _interopRequireDefault(_extends2);

var _defineProperty2 = __webpack_require__("./node_modules/babel-runtime/helpers/defineProperty.js");

var _defineProperty3 = _interopRequireDefault(_defineProperty2);

var _objectWithoutProperties2 = __webpack_require__("./node_modules/babel-runtime/helpers/objectWithoutProperties.js");

var _objectWithoutProperties3 = _interopRequireDefault(_objectWithoutProperties2);

var _getPrototypeOf = __webpack_require__("./node_modules/babel-runtime/core-js/object/get-prototype-of.js");

var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

var _classCallCheck2 = __webpack_require__("./node_modules/babel-runtime/helpers/classCallCheck.js");

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = __webpack_require__("./node_modules/babel-runtime/helpers/createClass.js");

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = __webpack_require__("./node_modules/babel-runtime/helpers/possibleConstructorReturn.js");

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = __webpack_require__("./node_modules/babel-runtime/helpers/inherits.js");

var _inherits3 = _interopRequireDefault(_inherits2);

var _react = __webpack_require__("./node_modules/react/react.js");

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__("./node_modules/prop-types/index.js");

var _propTypes2 = _interopRequireDefault(_propTypes);

var _classnames = __webpack_require__("./node_modules/react-weui/build/packages/utils/classnames.js");

var _classnames2 = _interopRequireDefault(_classnames);

var _deprecationWarning = __webpack_require__("./node_modules/react-weui/build/packages/utils/deprecationWarning.js");

var _deprecationWarning2 = _interopRequireDefault(_deprecationWarning);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * Panel Object, consists of `PanelHeader`, `PanelBody` and `PanelFooter`
 *
 */
var Panel = function (_React$Component) {
    (0, _inherits3.default)(Panel, _React$Component);

    function Panel() {
        (0, _classCallCheck3.default)(this, Panel);
        return (0, _possibleConstructorReturn3.default)(this, (Panel.__proto__ || (0, _getPrototypeOf2.default)(Panel)).apply(this, arguments));
    }

    (0, _createClass3.default)(Panel, [{
        key: 'render',
        value: function render() {
            var _props = this.props,
                children = _props.children,
                className = _props.className,
                access = _props.access,
                others = (0, _objectWithoutProperties3.default)(_props, ['children', 'className', 'access']);


            if (access) {
                (0, _deprecationWarning2.default)('panel access', 'cell access', 'https://github.com/weui/weui/wiki/%E5%9C%A81.0.0%E5%9C%A8%E4%BB%A3%E7%A0%81%E5%B1%82%E9%9D%A2%E4%B8%8A%E5%81%9A%E4%BA%86%E5%93%AA%E4%BA%9B%E6%94%B9%E5%8F%98#panel');
            }

            var cls = (0, _classnames2.default)((0, _defineProperty3.default)({
                'weui-panel': true
            }, className, className));

            return _react2.default.createElement(
                'div',
                (0, _extends3.default)({ className: cls }, others),
                children
            );
        }
    }]);
    return Panel;
}(_react2.default.Component);

Panel.propTypes = {
    /**
     * deprecated property from 0.4.x
     *
     */
    access: _propTypes2.default.bool
};
Panel.defaultProps = {
    access: false
};
exports.default = Panel;
;
module.exports = exports['default'];

/***/ }),

/***/ "./node_modules/react-weui/build/packages/components/panel/panel_body.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _extends2 = __webpack_require__("./node_modules/babel-runtime/helpers/extends.js");

var _extends3 = _interopRequireDefault(_extends2);

var _defineProperty2 = __webpack_require__("./node_modules/babel-runtime/helpers/defineProperty.js");

var _defineProperty3 = _interopRequireDefault(_defineProperty2);

var _objectWithoutProperties2 = __webpack_require__("./node_modules/babel-runtime/helpers/objectWithoutProperties.js");

var _objectWithoutProperties3 = _interopRequireDefault(_objectWithoutProperties2);

var _getPrototypeOf = __webpack_require__("./node_modules/babel-runtime/core-js/object/get-prototype-of.js");

var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

var _classCallCheck2 = __webpack_require__("./node_modules/babel-runtime/helpers/classCallCheck.js");

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = __webpack_require__("./node_modules/babel-runtime/helpers/createClass.js");

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = __webpack_require__("./node_modules/babel-runtime/helpers/possibleConstructorReturn.js");

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = __webpack_require__("./node_modules/babel-runtime/helpers/inherits.js");

var _inherits3 = _interopRequireDefault(_inherits2);

var _react = __webpack_require__("./node_modules/react/react.js");

var _react2 = _interopRequireDefault(_react);

var _classnames = __webpack_require__("./node_modules/react-weui/build/packages/utils/classnames.js");

var _classnames2 = _interopRequireDefault(_classnames);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * Content of Panel
 *
 */
var PanelBody = function (_React$Component) {
    (0, _inherits3.default)(PanelBody, _React$Component);

    function PanelBody() {
        (0, _classCallCheck3.default)(this, PanelBody);
        return (0, _possibleConstructorReturn3.default)(this, (PanelBody.__proto__ || (0, _getPrototypeOf2.default)(PanelBody)).apply(this, arguments));
    }

    (0, _createClass3.default)(PanelBody, [{
        key: 'render',
        value: function render() {
            var _props = this.props,
                className = _props.className,
                children = _props.children,
                others = (0, _objectWithoutProperties3.default)(_props, ['className', 'children']);

            var cls = (0, _classnames2.default)((0, _defineProperty3.default)({
                'weui-panel__bd': true
            }, className, className));

            return _react2.default.createElement(
                'div',
                (0, _extends3.default)({ className: cls }, others),
                children
            );
        }
    }]);
    return PanelBody;
}(_react2.default.Component);

exports.default = PanelBody;
;
module.exports = exports['default'];

/***/ }),

/***/ "./node_modules/react-weui/build/packages/components/panel/panel_footer.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _extends2 = __webpack_require__("./node_modules/babel-runtime/helpers/extends.js");

var _extends3 = _interopRequireDefault(_extends2);

var _defineProperty2 = __webpack_require__("./node_modules/babel-runtime/helpers/defineProperty.js");

var _defineProperty3 = _interopRequireDefault(_defineProperty2);

var _objectWithoutProperties2 = __webpack_require__("./node_modules/babel-runtime/helpers/objectWithoutProperties.js");

var _objectWithoutProperties3 = _interopRequireDefault(_objectWithoutProperties2);

var _getPrototypeOf = __webpack_require__("./node_modules/babel-runtime/core-js/object/get-prototype-of.js");

var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

var _classCallCheck2 = __webpack_require__("./node_modules/babel-runtime/helpers/classCallCheck.js");

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = __webpack_require__("./node_modules/babel-runtime/helpers/createClass.js");

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = __webpack_require__("./node_modules/babel-runtime/helpers/possibleConstructorReturn.js");

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = __webpack_require__("./node_modules/babel-runtime/helpers/inherits.js");

var _inherits3 = _interopRequireDefault(_inherits2);

var _react = __webpack_require__("./node_modules/react/react.js");

var _react2 = _interopRequireDefault(_react);

var _classnames = __webpack_require__("./node_modules/react-weui/build/packages/utils/classnames.js");

var _classnames2 = _interopRequireDefault(_classnames);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * Footer of Panel
 *
 */
var PanelFooter = function (_React$Component) {
    (0, _inherits3.default)(PanelFooter, _React$Component);

    function PanelFooter() {
        (0, _classCallCheck3.default)(this, PanelFooter);
        return (0, _possibleConstructorReturn3.default)(this, (PanelFooter.__proto__ || (0, _getPrototypeOf2.default)(PanelFooter)).apply(this, arguments));
    }

    (0, _createClass3.default)(PanelFooter, [{
        key: 'render',
        value: function render() {
            var _props = this.props,
                className = _props.className,
                children = _props.children,
                others = (0, _objectWithoutProperties3.default)(_props, ['className', 'children']);

            var Component = this.props.href ? 'a' : 'div';
            var cls = (0, _classnames2.default)((0, _defineProperty3.default)({
                'weui-panel__ft': true
            }, className, className));

            return _react2.default.createElement(
                Component,
                (0, _extends3.default)({ className: cls }, others),
                children
            );
        }
    }]);
    return PanelFooter;
}(_react2.default.Component);

exports.default = PanelFooter;
;
module.exports = exports['default'];

/***/ }),

/***/ "./node_modules/react-weui/build/packages/components/panel/panel_header.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _extends2 = __webpack_require__("./node_modules/babel-runtime/helpers/extends.js");

var _extends3 = _interopRequireDefault(_extends2);

var _defineProperty2 = __webpack_require__("./node_modules/babel-runtime/helpers/defineProperty.js");

var _defineProperty3 = _interopRequireDefault(_defineProperty2);

var _objectWithoutProperties2 = __webpack_require__("./node_modules/babel-runtime/helpers/objectWithoutProperties.js");

var _objectWithoutProperties3 = _interopRequireDefault(_objectWithoutProperties2);

var _getPrototypeOf = __webpack_require__("./node_modules/babel-runtime/core-js/object/get-prototype-of.js");

var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

var _classCallCheck2 = __webpack_require__("./node_modules/babel-runtime/helpers/classCallCheck.js");

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = __webpack_require__("./node_modules/babel-runtime/helpers/createClass.js");

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = __webpack_require__("./node_modules/babel-runtime/helpers/possibleConstructorReturn.js");

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = __webpack_require__("./node_modules/babel-runtime/helpers/inherits.js");

var _inherits3 = _interopRequireDefault(_inherits2);

var _react = __webpack_require__("./node_modules/react/react.js");

var _react2 = _interopRequireDefault(_react);

var _classnames = __webpack_require__("./node_modules/react-weui/build/packages/utils/classnames.js");

var _classnames2 = _interopRequireDefault(_classnames);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * Header of Panel
 *
 */
var PanelHeader = function (_React$Component) {
    (0, _inherits3.default)(PanelHeader, _React$Component);

    function PanelHeader() {
        (0, _classCallCheck3.default)(this, PanelHeader);
        return (0, _possibleConstructorReturn3.default)(this, (PanelHeader.__proto__ || (0, _getPrototypeOf2.default)(PanelHeader)).apply(this, arguments));
    }

    (0, _createClass3.default)(PanelHeader, [{
        key: 'render',
        value: function render() {
            var _props = this.props,
                className = _props.className,
                children = _props.children,
                others = (0, _objectWithoutProperties3.default)(_props, ['className', 'children']);

            var cls = (0, _classnames2.default)((0, _defineProperty3.default)({
                'weui-panel__hd': true
            }, className, className));

            return _react2.default.createElement(
                'div',
                (0, _extends3.default)({ className: cls }, others),
                children
            );
        }
    }]);
    return PanelHeader;
}(_react2.default.Component);

exports.default = PanelHeader;
;
module.exports = exports['default'];

/***/ }),

/***/ "./node_modules/react-weui/build/packages/components/picker/city_picker.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _stringify = __webpack_require__("./node_modules/babel-runtime/core-js/json/stringify.js");

var _stringify2 = _interopRequireDefault(_stringify);

var _getPrototypeOf = __webpack_require__("./node_modules/babel-runtime/core-js/object/get-prototype-of.js");

var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

var _classCallCheck2 = __webpack_require__("./node_modules/babel-runtime/helpers/classCallCheck.js");

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = __webpack_require__("./node_modules/babel-runtime/helpers/createClass.js");

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = __webpack_require__("./node_modules/babel-runtime/helpers/possibleConstructorReturn.js");

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = __webpack_require__("./node_modules/babel-runtime/helpers/inherits.js");

var _inherits3 = _interopRequireDefault(_inherits2);

var _react = __webpack_require__("./node_modules/react/react.js");

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__("./node_modules/prop-types/index.js");

var _propTypes2 = _interopRequireDefault(_propTypes);

var _picker = __webpack_require__("./node_modules/react-weui/build/packages/components/picker/picker.js");

var _picker2 = _interopRequireDefault(_picker);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 *  An city pick component build on top of picker
 *
 */
var CityPicker = function (_React$Component) {
    (0, _inherits3.default)(CityPicker, _React$Component);

    function CityPicker(props) {
        (0, _classCallCheck3.default)(this, CityPicker);

        var _this = (0, _possibleConstructorReturn3.default)(this, (CityPicker.__proto__ || (0, _getPrototypeOf2.default)(CityPicker)).call(this, props));

        var _this$props = _this.props,
            data = _this$props.data,
            selected = _this$props.selected,
            dataMap = _this$props.dataMap;

        var _this$parseData = _this.parseData(data, dataMap.items, selected),
            groups = _this$parseData.groups,
            newselected = _this$parseData.newselected;

        _this.state = {
            groups: groups,
            selected: newselected,
            picker_show: false,
            text: ''
        };
        //console.log(this.state.groups)
        _this.updateGroup = _this.updateGroup.bind(_this);
        _this.parseData = _this.parseData.bind(_this);
        _this.handleChange = _this.handleChange.bind(_this);
        return _this;
    }

    //@return array of group with options


    (0, _createClass3.default)(CityPicker, [{
        key: 'parseData',
        value: function parseData(data, subKey) {
            var selected = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : [];
            var group = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : [];
            var newselected = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : [];

            var _selected = 0;

            if (Array.isArray(selected) && selected.length > 0) {
                var _selectedClone = selected.slice(0);
                _selected = _selectedClone.shift();
                selected = _selectedClone;
            }

            if (typeof data[_selected] === 'undefined') {
                _selected = 0;
            }

            newselected.push(_selected);

            var item = data[_selected];

            var _group = JSON.parse((0, _stringify2.default)(data));
            _group.forEach(function (g) {
                return delete g[subKey];
            });
            group.push({ items: _group, mapKeys: { 'label': this.props.dataMap.id } });

            if (typeof item[subKey] !== 'undefined' && Array.isArray(item[subKey])) {
                return this.parseData(item[subKey], subKey, selected, group, newselected);
            } else {
                return { groups: group, newselected: newselected };
            }
        }
    }, {
        key: 'updateDataBySelected',
        value: function updateDataBySelected(selected, cb) {
            var _this2 = this;

            var _props = this.props,
                data = _props.data,
                dataMap = _props.dataMap;
            //validate if item exists

            var _parseData = this.parseData(data, dataMap.items, selected),
                groups = _parseData.groups,
                newselected = _parseData.newselected;

            var text = '';
            try {
                groups.forEach(function (group, _i) {
                    text += group['items'][selected[_i]][_this2.props.dataMap.id] + ' ';
                });
            } catch (err) {
                //wait
                text = this.state.text;
            }

            this.setState({
                groups: groups,
                text: text,
                selected: newselected
            }, function () {
                return cb();
            });
        }
    }, {
        key: 'updateGroup',
        value: function updateGroup(item, i, groupIndex, selected, picker) {
            var _this3 = this;

            this.updateDataBySelected(selected, function () {
                //update picker
                picker.setState({
                    selected: _this3.state.selected
                });
            });
        }
    }, {
        key: 'handleChange',
        value: function handleChange(selected) {
            var _this4 = this;

            //handle unchange
            if (selected === this.state.selected) {
                this.updateDataBySelected(selected, function () {
                    if (_this4.props.onChange) _this4.props.onChange(_this4.state.text);
                });
            }

            if (this.props.onChange) this.props.onChange(this.state.text);
        }
    }, {
        key: 'render',
        value: function render() {
            return _react2.default.createElement(_picker2.default, {
                show: this.props.show,
                onGroupChange: this.updateGroup,
                onChange: this.handleChange,
                defaultSelect: this.state.selected,
                groups: this.state.groups,
                onCancel: this.props.onCancel,
                lang: this.props.lang
            });
        }
    }]);
    return CityPicker;
}(_react2.default.Component);

CityPicker.propTypes = {
    /**
     * Array of item trees, consists property for label and subitems
     *
     */
    data: _propTypes2.default.array.isRequired,
    /**
     * keys for data provide, `id` to indicate property name for label, `items` to indicate property name for subitems
     *
     */
    dataMap: _propTypes2.default.object,
    /**
     * currently selected item
     *
     */
    selected: _propTypes2.default.array,
    /**
     * display the component
     *
     */
    show: _propTypes2.default.bool,
    /**
     * language object consists of `leftBtn` and `rightBtn`
     *
     */
    lang: _propTypes2.default.object
};
CityPicker.defaultProps = {
    data: [],
    dataMap: { id: 'name', items: 'sub' },
    selected: [],
    show: false,
    lang: { leftBtn: '取消', rightBtn: '确定' }
};
exports.default = CityPicker;
module.exports = exports['default'];

/***/ }),

/***/ "./node_modules/react-weui/build/packages/components/picker/index.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.CityPicker = exports.PickerGroup = exports.Picker = undefined;

var _picker = __webpack_require__("./node_modules/react-weui/build/packages/components/picker/picker.js");

var _picker2 = _interopRequireDefault(_picker);

var _picker_group = __webpack_require__("./node_modules/react-weui/build/packages/components/picker/picker_group.js");

var _picker_group2 = _interopRequireDefault(_picker_group);

var _city_picker = __webpack_require__("./node_modules/react-weui/build/packages/components/picker/city_picker.js");

var _city_picker2 = _interopRequireDefault(_city_picker);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.Picker = _picker2.default;
exports.PickerGroup = _picker_group2.default;
exports.CityPicker = _city_picker2.default;

/***/ }),

/***/ "./node_modules/react-weui/build/packages/components/picker/picker.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _extends2 = __webpack_require__("./node_modules/babel-runtime/helpers/extends.js");

var _extends3 = _interopRequireDefault(_extends2);

var _objectWithoutProperties2 = __webpack_require__("./node_modules/babel-runtime/helpers/objectWithoutProperties.js");

var _objectWithoutProperties3 = _interopRequireDefault(_objectWithoutProperties2);

var _getPrototypeOf = __webpack_require__("./node_modules/babel-runtime/core-js/object/get-prototype-of.js");

var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

var _classCallCheck2 = __webpack_require__("./node_modules/babel-runtime/helpers/classCallCheck.js");

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = __webpack_require__("./node_modules/babel-runtime/helpers/createClass.js");

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = __webpack_require__("./node_modules/babel-runtime/helpers/possibleConstructorReturn.js");

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = __webpack_require__("./node_modules/babel-runtime/helpers/inherits.js");

var _inherits3 = _interopRequireDefault(_inherits2);

var _react = __webpack_require__("./node_modules/react/react.js");

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__("./node_modules/prop-types/index.js");

var _propTypes2 = _interopRequireDefault(_propTypes);

var _picker_group = __webpack_require__("./node_modules/react-weui/build/packages/components/picker/picker_group.js");

var _picker_group2 = _interopRequireDefault(_picker_group);

var _classnames = __webpack_require__("./node_modules/react-weui/build/packages/utils/classnames.js");

var _classnames2 = _interopRequireDefault(_classnames);

var _mask = __webpack_require__("./node_modules/react-weui/build/packages/components/mask/index.js");

var _mask2 = _interopRequireDefault(_mask);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 *  Mobile select ui, currently only support Touch Events
 *
 */
var Picker = function (_Component) {
    (0, _inherits3.default)(Picker, _Component);

    function Picker(props) {
        (0, _classCallCheck3.default)(this, Picker);

        var _this = (0, _possibleConstructorReturn3.default)(this, (Picker.__proto__ || (0, _getPrototypeOf2.default)(Picker)).call(this, props));

        _this.state = {
            selected: _this.props.defaultSelect ? _this.props.defaultSelect : Array(_this.props.groups.length).fill(-1),
            actions: _this.props.actions.length > 0 ? _this.props.actions : [{
                label: _this.props.lang.leftBtn,
                onClick: function onClick(e) {
                    return _this.handleClose(function () {
                        if (_this.props.onCancel) _this.props.onCancel(e);
                    });
                }
            }, {
                label: _this.props.lang.rightBtn,
                onClick: function onClick(e) {
                    return _this.handleChanges();
                }
            }],
            closing: false
        };

        _this.handleChanges = _this.handleChanges.bind(_this);
        _this.handleChange = _this.handleChange.bind(_this);
        _this.handleClose = _this.handleClose.bind(_this);
        return _this;
    }

    (0, _createClass3.default)(Picker, [{
        key: 'handleChanges',
        value: function handleChanges() {
            var _this2 = this;

            this.handleClose(function () {
                if (_this2.props.onChange) _this2.props.onChange(_this2.state.selected, _this2);
            });
        }
    }, {
        key: 'handleChange',
        value: function handleChange(item, i, groupIndex) {
            var _this3 = this;

            var selected = this.state.selected;

            selected[groupIndex] = i;
            this.setState({ selected: selected }, function () {
                if (_this3.props.onGroupChange) _this3.props.onGroupChange(item, i, groupIndex, _this3.state.selected, _this3);
            });
        }
    }, {
        key: 'handleClose',
        value: function handleClose(cb) {
            var _this4 = this;

            this.setState({
                closing: true
            }, function () {
                return setTimeout(function () {
                    _this4.setState({ closing: false });
                    cb();
                }, 300);
            });
        }
    }, {
        key: 'renderActions',
        value: function renderActions() {
            var elActions = this.state.actions.map(function (action, i) {
                var label = action.label,
                    others = (0, _objectWithoutProperties3.default)(action, ['label']);

                return _react2.default.createElement(
                    'a',
                    (0, _extends3.default)({}, others, { key: i, className: 'weui-picker__action' }),
                    ' ',
                    label
                );
            });

            return _react2.default.createElement(
                'div',
                { className: 'weui-picker__hd' },
                elActions
            );
        }
    }, {
        key: 'renderGroups',
        value: function renderGroups() {
            var _this5 = this;

            return this.props.groups.map(function (group, i) {
                return _react2.default.createElement(_picker_group2.default, (0, _extends3.default)({ key: i }, group, { onChange: _this5.handleChange, groupIndex: i, defaultIndex: _this5.state.selected[i] }));
            });
        }
    }, {
        key: 'render',
        value: function render() {
            var _this6 = this;

            var _props = this.props,
                className = _props.className,
                show = _props.show,
                actions = _props.actions,
                groups = _props.groups,
                defaultSelect = _props.defaultSelect,
                onGroupChange = _props.onGroupChange,
                onChange = _props.onChange,
                onCancel = _props.onCancel,
                others = (0, _objectWithoutProperties3.default)(_props, ['className', 'show', 'actions', 'groups', 'defaultSelect', 'onGroupChange', 'onChange', 'onCancel']);

            var cls = (0, _classnames2.default)('weui-picker', {
                'weui-animate-slide-up': show && !this.state.closing,
                'weui-animate-slide-down': this.state.closing
            }, className);

            var maskCls = (0, _classnames2.default)({
                'weui-animate-fade-in': show && !this.state.closing,
                'weui-animate-fade-out': this.state.closing
            });

            return this.props.show ? _react2.default.createElement(
                'div',
                null,
                _react2.default.createElement(_mask2.default, { className: maskCls, onClick: function onClick(e) {
                        return _this6.handleClose(function () {
                            if (_this6.props.onCancel) _this6.props.onCancel(e);
                        });
                    } }),
                _react2.default.createElement(
                    'div',
                    (0, _extends3.default)({ className: cls }, others),
                    this.renderActions(),
                    _react2.default.createElement(
                        'div',
                        { className: 'weui-picker__bd' },
                        this.renderGroups()
                    )
                )
            ) : false;
        }
    }]);
    return Picker;
}(_react.Component);

Picker.propTypes = {
    /**
     * consists of array of object(max 2) with property `label` and others pass into element
     *
     */
    actions: _propTypes2.default.array,
    /**
     * array objects consists of groups for each scroll group
     *
     */
    groups: _propTypes2.default.array,
    /**
     * default group index thats selected, if not provide, automatic chose the best fiting item when mounted
     *
     */
    defaultSelect: _propTypes2.default.array,
    /**
     * trigger when individual group change, pass property(`item`, `item index in group`, `group index in groups`, `selected`, `picker instance`)
     *
     */
    onGroupChange: _propTypes2.default.func,
    /**
     * on selected change, pass property `selected` for array of slected index to `groups`
     *
     */
    onChange: _propTypes2.default.func,
    /**
     * excute when the popup about to close
     *
     */
    onCancel: _propTypes2.default.func,
    /**
     * display the component
     *
     */
    show: _propTypes2.default.bool,
    /**
     * language object consists of `leftBtn` and `rightBtn`
     *
     */
    lang: _propTypes2.default.object
};
Picker.defaultProps = {
    actions: [],
    groups: [],
    show: false,
    lang: { leftBtn: 'Cancel', rightBtn: 'Ok' }
};
exports.default = Picker;
module.exports = exports['default'];

/***/ }),

/***/ "./node_modules/react-weui/build/packages/components/picker/picker_group.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _extends2 = __webpack_require__("./node_modules/babel-runtime/helpers/extends.js");

var _extends3 = _interopRequireDefault(_extends2);

var _objectWithoutProperties2 = __webpack_require__("./node_modules/babel-runtime/helpers/objectWithoutProperties.js");

var _objectWithoutProperties3 = _interopRequireDefault(_objectWithoutProperties2);

var _getPrototypeOf = __webpack_require__("./node_modules/babel-runtime/core-js/object/get-prototype-of.js");

var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

var _classCallCheck2 = __webpack_require__("./node_modules/babel-runtime/helpers/classCallCheck.js");

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = __webpack_require__("./node_modules/babel-runtime/helpers/createClass.js");

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = __webpack_require__("./node_modules/babel-runtime/helpers/possibleConstructorReturn.js");

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = __webpack_require__("./node_modules/babel-runtime/helpers/inherits.js");

var _inherits3 = _interopRequireDefault(_inherits2);

var _react = __webpack_require__("./node_modules/react/react.js");

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__("./node_modules/prop-types/index.js");

var _propTypes2 = _interopRequireDefault(_propTypes);

var _classnames = __webpack_require__("./node_modules/react-weui/build/packages/utils/classnames.js");

var _classnames2 = _interopRequireDefault(_classnames);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var PickerGroup = function (_Component) {
    (0, _inherits3.default)(PickerGroup, _Component);

    function PickerGroup(props) {
        (0, _classCallCheck3.default)(this, PickerGroup);

        var _this = (0, _possibleConstructorReturn3.default)(this, (PickerGroup.__proto__ || (0, _getPrototypeOf2.default)(PickerGroup)).call(this, props));

        _this.state = {
            touching: false,
            ogY: 0,
            ogTranslate: 0,
            touchId: undefined,
            translate: 0,
            totalHeight: 0,
            selected: 0,
            animating: _this.props.animation
        };

        _this.handleTouchStart = _this.handleTouchStart.bind(_this);
        _this.handleTouchMove = _this.handleTouchMove.bind(_this);
        _this.handleTouchEnd = _this.handleTouchEnd.bind(_this);
        _this.updateSelected = _this.updateSelected.bind(_this);
        return _this;
    }

    (0, _createClass3.default)(PickerGroup, [{
        key: 'componentDidMount',
        value: function componentDidMount() {
            this.adjustPosition(this.props);
        }
    }, {
        key: 'componentWillReceiveProps',
        value: function componentWillReceiveProps(nextProps) {
            this.adjustPosition(nextProps);
        }
    }, {
        key: 'adjustPosition',
        value: function adjustPosition(props) {
            var _this2 = this;

            var items = props.items,
                itemHeight = props.itemHeight,
                indicatorTop = props.indicatorTop,
                defaultIndex = props.defaultIndex;

            var totalHeight = items.length * itemHeight;
            var translate = totalHeight <= indicatorTop ? indicatorTop : 0;

            if (defaultIndex > -1) {
                if (translate === 0) {
                    var upperCount = Math.floor(indicatorTop / itemHeight);
                    if (defaultIndex > upperCount) {
                        //over
                        var overCount = defaultIndex - upperCount;
                        translate -= overCount * itemHeight;
                    } else if (defaultIndex === upperCount) {
                        translate = 0;
                    } else {
                        //less
                        translate += Math.abs(upperCount - defaultIndex) * itemHeight;
                    }
                    //if(props.groupIndex == 2) console.log(defaultIndex,translate, upperCount)
                } else {
                    //total item less than indicator height
                    translate -= itemHeight * defaultIndex;
                }
            }

            this.setState({ selected: defaultIndex, ogTranslate: translate, totalHeight: totalHeight, translate: translate
            }, function () {
                return defaultIndex > -1 ? _this2.updateSelected(false) : _this2.updateSelected();
            });
        }
    }, {
        key: 'updateSelected',
        value: function updateSelected() {
            var _this3 = this;

            var propagate = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : true;
            var _props = this.props,
                items = _props.items,
                itemHeight = _props.itemHeight,
                indicatorTop = _props.indicatorTop,
                indicatorHeight = _props.indicatorHeight,
                onChange = _props.onChange,
                groupIndex = _props.groupIndex;

            var selected = 0;
            items.forEach(function (item, i) {
                //console.log(i, this.state.translate, (this.state.translate + (itemHeight * i)), indicatorTop, this.state.translate + (itemHeight * i) + itemHeight , indicatorTop + indicatorHeight)
                if (!item.disabled && _this3.state.translate + itemHeight * i >= indicatorTop && _this3.state.translate + itemHeight * i + itemHeight <= indicatorTop + indicatorHeight) {
                    selected = i;
                }
            });

            if (onChange && propagate) onChange(items[selected], selected, groupIndex);
        }
    }, {
        key: 'handleTouchStart',
        value: function handleTouchStart(e) {
            if (this.state.touching || this.props.items.length <= 1) return;

            this.setState({
                touching: true,
                ogTranslate: this.state.translate,
                touchId: e.targetTouches[0].identifier,
                ogY: this.state.translate === 0 ? e.targetTouches[0].pageY : e.targetTouches[0].pageY - this.state.translate,
                animating: false
            });
        }
    }, {
        key: 'handleTouchMove',
        value: function handleTouchMove(e) {
            if (!this.state.touching || this.props.items.length <= 1) return;
            if (e.targetTouches[0].identifier !== this.state.touchId) return;

            //prevent move background
            e.preventDefault();

            var pageY = e.targetTouches[0].pageY;
            var diffY = pageY - this.state.ogY;

            this.setState({
                translate: diffY
            });
        }
    }, {
        key: 'handleTouchEnd',
        value: function handleTouchEnd(e) {
            var _this4 = this;

            if (!this.state.touching || this.props.items.length <= 1) return;

            var _props2 = this.props,
                indicatorTop = _props2.indicatorTop,
                indicatorHeight = _props2.indicatorHeight,
                itemHeight = _props2.itemHeight;

            var translate = this.state.translate;

            if (Math.abs(translate - this.state.ogTranslate) < itemHeight * .51) {
                translate = this.state.ogTranslate;
            } else if (translate > indicatorTop) {
                //top boundry
                translate = indicatorTop;
            } else if (translate + this.state.totalHeight < indicatorTop + indicatorHeight) {
                //bottom
                translate = indicatorTop + indicatorHeight - this.state.totalHeight;
            } else {
                //pass single item range but not exceed boundry
                var step = 0,
                    adjust = 0;
                var diff = (translate - this.state.ogTranslate) / itemHeight;

                if (Math.abs(diff) < 1) {
                    step = diff > 0 ? 1 : -1;
                } else {
                    adjust = Math.abs(diff % 1 * 100) > 50 ? 1 : 0;
                    step = diff > 0 ? Math.floor(diff) + adjust : Math.ceil(diff) - adjust;
                }

                translate = this.state.ogTranslate + step * itemHeight;
            }

            this.setState({
                touching: false,
                ogY: 0,
                touchId: undefined,
                ogTranslate: 0,
                animating: true,
                translate: translate
            }, function () {
                return _this4.updateSelected();
            });
        }
    }, {
        key: 'render',
        value: function render() {
            var _this5 = this;

            var _props3 = this.props,
                items = _props3.items,
                className = _props3.className,
                height = _props3.height,
                itemHeight = _props3.itemHeight,
                indicatorTop = _props3.indicatorTop,
                indicatorHeight = _props3.indicatorHeight,
                onChange = _props3.onChange,
                aniamtion = _props3.aniamtion,
                groupIndex = _props3.groupIndex,
                defaultIndex = _props3.defaultIndex,
                mapKeys = _props3.mapKeys,
                others = (0, _objectWithoutProperties3.default)(_props3, ['items', 'className', 'height', 'itemHeight', 'indicatorTop', 'indicatorHeight', 'onChange', 'aniamtion', 'groupIndex', 'defaultIndex', 'mapKeys']);

            var cls = (0, _classnames2.default)('weui-picker__group', className);
            var styles = {
                'transform': 'translate(0, ' + this.state.translate + 'px)',
                'transition': this.state.animating ? 'transform .3s' : 'none'
            };

            return _react2.default.createElement(
                'div',
                (0, _extends3.default)({ className: cls }, others, {
                    onTouchStart: this.handleTouchStart,
                    onTouchMove: this.handleTouchMove,
                    onTouchEnd: this.handleTouchEnd
                }),
                _react2.default.createElement('div', { className: 'weui-picker__mask' }),
                _react2.default.createElement('div', { className: 'weui-picker__indicator' }),
                _react2.default.createElement(
                    'div',
                    { className: 'weui-picker__content',
                        style: styles,
                        ref: 'content' },
                    items.map(function (item, j) {
                        var label = item[_this5.props.mapKeys.label];
                        var itemCls = (0, _classnames2.default)('weui-picker__item', {
                            'weui-picker__item_disabled': item.disabled
                        });

                        return _react2.default.createElement(
                            'div',
                            { key: j, className: itemCls },
                            label
                        );
                    })
                )
            );
        }
    }]);
    return PickerGroup;
}(_react.Component);

PickerGroup.propTypes = {
    height: _propTypes2.default.number,
    itemHeight: _propTypes2.default.number,
    indicatorTop: _propTypes2.default.number,
    indicatorHeight: _propTypes2.default.number,
    onChange: _propTypes2.default.func,
    aniamtion: _propTypes2.default.bool,
    groupIndex: _propTypes2.default.number,
    defaultIndex: _propTypes2.default.number
};
PickerGroup.defaultProps = {
    height: 238,
    itemHeight: 25 + 9, //content + padding
    indicatorTop: 102,
    indicatorHeight: 34,
    aniamtion: true,
    groupIndex: -1,
    defaultIndex: -1,
    mapKeys: {
        label: 'label'
    }
};
exports.default = PickerGroup;
module.exports = exports['default'];

/***/ }),

/***/ "./node_modules/react-weui/build/packages/components/popup/index.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.PopupHeader = exports.Popup = undefined;

var _popup = __webpack_require__("./node_modules/react-weui/build/packages/components/popup/popup.js");

var _popup2 = _interopRequireDefault(_popup);

var _popup_header = __webpack_require__("./node_modules/react-weui/build/packages/components/popup/popup_header.js");

var _popup_header2 = _interopRequireDefault(_popup_header);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.Popup = _popup2.default;
exports.PopupHeader = _popup_header2.default;

/***/ }),

/***/ "./node_modules/react-weui/build/packages/components/popup/popup.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _extends2 = __webpack_require__("./node_modules/babel-runtime/helpers/extends.js");

var _extends3 = _interopRequireDefault(_extends2);

var _objectWithoutProperties2 = __webpack_require__("./node_modules/babel-runtime/helpers/objectWithoutProperties.js");

var _objectWithoutProperties3 = _interopRequireDefault(_objectWithoutProperties2);

var _getPrototypeOf = __webpack_require__("./node_modules/babel-runtime/core-js/object/get-prototype-of.js");

var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

var _classCallCheck2 = __webpack_require__("./node_modules/babel-runtime/helpers/classCallCheck.js");

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = __webpack_require__("./node_modules/babel-runtime/helpers/createClass.js");

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = __webpack_require__("./node_modules/babel-runtime/helpers/possibleConstructorReturn.js");

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = __webpack_require__("./node_modules/babel-runtime/helpers/inherits.js");

var _inherits3 = _interopRequireDefault(_inherits2);

var _react = __webpack_require__("./node_modules/react/react.js");

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__("./node_modules/prop-types/index.js");

var _propTypes2 = _interopRequireDefault(_propTypes);

var _classnames = __webpack_require__("./node_modules/react-weui/build/packages/utils/classnames.js");

var _classnames2 = _interopRequireDefault(_classnames);

var _index = __webpack_require__("./node_modules/react-weui/build/packages/components/mask/index.js");

var _index2 = _interopRequireDefault(_index);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 *  An Popup modal from bottom
 *
 */
var Popup = function (_Component) {
    (0, _inherits3.default)(Popup, _Component);

    function Popup() {
        (0, _classCallCheck3.default)(this, Popup);
        return (0, _possibleConstructorReturn3.default)(this, (Popup.__proto__ || (0, _getPrototypeOf2.default)(Popup)).apply(this, arguments));
    }

    (0, _createClass3.default)(Popup, [{
        key: 'render',
        value: function render() {
            var _props = this.props,
                className = _props.className,
                children = _props.children,
                show = _props.show,
                onRequestClose = _props.onRequestClose,
                enableMask = _props.enableMask,
                others = (0, _objectWithoutProperties3.default)(_props, ['className', 'children', 'show', 'onRequestClose', 'enableMask']);

            var cls = (0, _classnames2.default)('weui-popup', {
                'weui-popup_toggle': show
            }, className);

            return _react2.default.createElement(
                'div',
                null,
                _react2.default.createElement(_index2.default, { transparent: enableMask, style: { display: show ? 'block' : 'none' }, onClick: onRequestClose }),
                _react2.default.createElement(
                    'div',
                    (0, _extends3.default)({ className: cls }, others),
                    children
                )
            );
        }
    }]);
    return Popup;
}(_react.Component);

Popup.propTypes = {
    /**
     * display the component
     *
     */
    show: _propTypes2.default.bool,
    /**
     * show mask
     *
     */
    enableMask: _propTypes2.default.bool
};
Popup.defaultProps = {
    show: false,
    enableMask: false
};
exports.default = Popup;
module.exports = exports['default'];

/***/ }),

/***/ "./node_modules/react-weui/build/packages/components/popup/popup_header.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = __webpack_require__("./node_modules/react/react.js");

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__("./node_modules/prop-types/index.js");

var _propTypes2 = _interopRequireDefault(_propTypes);

var _classnames = __webpack_require__("./node_modules/react-weui/build/packages/utils/classnames.js");

var _classnames2 = _interopRequireDefault(_classnames);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 *  Sample Popup header for Popup
 *
 */
var PopupHeader = function PopupHeader(props) {
  var left = props.left,
      right = props.right,
      leftOnClick = props.leftOnClick,
      rightOnClick = props.rightOnClick,
      className = props.className;

  var cls = (0, _classnames2.default)('weui-popup__hd', className);
  return _react2.default.createElement(
    'div',
    { className: cls },
    _react2.default.createElement(
      'a',
      { className: 'weui-popup__action', onClick: leftOnClick },
      left
    ),
    _react2.default.createElement(
      'a',
      { className: 'weui-popup__action', onClick: rightOnClick },
      right
    )
  );
};

PopupHeader.propTypes = {
  /**
   * left button label
   *
   */
  left: _propTypes2.default.string,
  /**
   * right button label
   *
   */
  right: _propTypes2.default.string,
  /**
   * left button onclick
   *
   */
  leftOnClick: _propTypes2.default.func,
  /**
   * right button onclick
   *
   */
  rightOnClick: _propTypes2.default.func
};

PopupHeader.defaultProps = {
  left: '',
  right: ''
};

exports.default = PopupHeader;
module.exports = exports['default'];

/***/ }),

/***/ "./node_modules/react-weui/build/packages/components/progress/index.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _progress = __webpack_require__("./node_modules/react-weui/build/packages/components/progress/progress.js");

var _progress2 = _interopRequireDefault(_progress);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = _progress2.default;
module.exports = exports['default'];

/***/ }),

/***/ "./node_modules/react-weui/build/packages/components/progress/progress.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _extends2 = __webpack_require__("./node_modules/babel-runtime/helpers/extends.js");

var _extends3 = _interopRequireDefault(_extends2);

var _defineProperty2 = __webpack_require__("./node_modules/babel-runtime/helpers/defineProperty.js");

var _defineProperty3 = _interopRequireDefault(_defineProperty2);

var _objectWithoutProperties2 = __webpack_require__("./node_modules/babel-runtime/helpers/objectWithoutProperties.js");

var _objectWithoutProperties3 = _interopRequireDefault(_objectWithoutProperties2);

var _react = __webpack_require__("./node_modules/react/react.js");

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__("./node_modules/prop-types/index.js");

var _propTypes2 = _interopRequireDefault(_propTypes);

var _classnames = __webpack_require__("./node_modules/react-weui/build/packages/utils/classnames.js");

var _classnames2 = _interopRequireDefault(_classnames);

var _icon = __webpack_require__("./node_modules/react-weui/build/packages/components/icon/index.js");

var _icon2 = _interopRequireDefault(_icon);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 *  progress bar
 *
 */
var Progress = function Progress(props) {
    var className = props.className,
        showCancel = props.showCancel,
        value = props.value,
        _onClick = props.onClick,
        others = (0, _objectWithoutProperties3.default)(props, ['className', 'showCancel', 'value', 'onClick']);

    var cls = (0, _classnames2.default)((0, _defineProperty3.default)({
        'weui-progress': true
    }, className, className));

    var pgWdith = value > 100 ? 100 : value < 0 ? 0 : value;

    return _react2.default.createElement(
        'div',
        (0, _extends3.default)({ className: cls }, others),
        _react2.default.createElement(
            'div',
            { className: 'weui-progress__bar' },
            _react2.default.createElement('div', { className: 'weui-progress__inner-bar', style: { width: pgWdith + '%' } })
        ),
        showCancel ? _react2.default.createElement(
            'a',
            { href: 'javascript:;', className: 'weui-progress__opr', onClick: function onClick(e) {
                    if (_onClick) _onClick(e);
                } },
            _react2.default.createElement(_icon2.default, { value: 'cancel' })
        ) : false
    );
};

Progress.propTypes = {
    /**
     * value of the bar
     *
     */
    value: _propTypes2.default.number,
    /**
     * enable cancel button
     *
     */
    showCancel: _propTypes2.default.bool
};

Progress.defaultProps = {
    value: 0,
    showCancel: true
};

exports.default = Progress;
module.exports = exports['default'];

/***/ }),

/***/ "./node_modules/react-weui/build/packages/components/ptr/index.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _ptr = __webpack_require__("./node_modules/react-weui/build/packages/components/ptr/ptr.js");

var _ptr2 = _interopRequireDefault(_ptr);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = _ptr2.default;
module.exports = exports['default'];

/***/ }),

/***/ "./node_modules/react-weui/build/packages/components/ptr/ptr.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _extends2 = __webpack_require__("./node_modules/babel-runtime/helpers/extends.js");

var _extends3 = _interopRequireDefault(_extends2);

var _objectWithoutProperties2 = __webpack_require__("./node_modules/babel-runtime/helpers/objectWithoutProperties.js");

var _objectWithoutProperties3 = _interopRequireDefault(_objectWithoutProperties2);

var _getPrototypeOf = __webpack_require__("./node_modules/babel-runtime/core-js/object/get-prototype-of.js");

var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

var _classCallCheck2 = __webpack_require__("./node_modules/babel-runtime/helpers/classCallCheck.js");

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = __webpack_require__("./node_modules/babel-runtime/helpers/createClass.js");

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = __webpack_require__("./node_modules/babel-runtime/helpers/possibleConstructorReturn.js");

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = __webpack_require__("./node_modules/babel-runtime/helpers/inherits.js");

var _inherits3 = _interopRequireDefault(_inherits2);

var _react = __webpack_require__("./node_modules/react/react.js");

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__("./node_modules/prop-types/index.js");

var _propTypes2 = _interopRequireDefault(_propTypes);

var _reactDom = __webpack_require__("./node_modules/react-dom/index.js");

var _reactDom2 = _interopRequireDefault(_reactDom);

var _classnames = __webpack_require__("./node_modules/react-weui/build/packages/utils/classnames.js");

var _classnames2 = _interopRequireDefault(_classnames);

var _icon = __webpack_require__("./node_modules/react-weui/build/packages/components/icon/index.js");

var _icon2 = _interopRequireDefault(_icon);

var _loadmore = __webpack_require__("./node_modules/react-weui/build/packages/components/loadmore/index.js");

var _loadmore2 = _interopRequireDefault(_loadmore);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 *  A Pull to refresh container enable user to pull the container and refresh it's content
 *
 */
var PullToRefresh = function (_Component) {
    (0, _inherits3.default)(PullToRefresh, _Component);

    function PullToRefresh(props) {
        (0, _classCallCheck3.default)(this, PullToRefresh);

        var _this = (0, _possibleConstructorReturn3.default)(this, (PullToRefresh.__proto__ || (0, _getPrototypeOf2.default)(PullToRefresh)).call(this, props));

        _this.state = {
            pullPercent: 0,
            touching: false,
            ogY: 0,
            touchId: undefined,
            animating: false,
            loading: false,
            initScrollTop: 0
        };

        _this.handleTouchStart = _this.handleTouchStart.bind(_this);
        _this.handleTouchMove = _this.handleTouchMove.bind(_this);
        _this.handleTouchEnd = _this.handleTouchEnd.bind(_this);
        _this.resolveRefresh = _this.resolveRefresh.bind(_this);
        return _this;
    }

    (0, _createClass3.default)(PullToRefresh, [{
        key: 'resolveRefresh',
        value: function resolveRefresh() {
            var _this2 = this;

            this.setState({
                loading: false,
                animating: true,
                pullPercent: 0
            }, function () {
                setTimeout(function () {
                    return _this2.setState({ animating: false });
                }, 500);
            });
        }
    }, {
        key: 'handleTouchStart',
        value: function handleTouchStart(e) {
            if (this.state.touching || this.state.loading || this.props.disable) return;

            var $content = _reactDom2.default.findDOMNode(this.refs.content);

            this.setState({
                touching: true,
                touchId: e.targetTouches[0].identifier,
                ogY: this.state.pullPercent === 0 ? e.targetTouches[0].pageY : e.targetTouches[0].pageY - this.state.pullPercent,
                animating: false,
                initScrollTop: $content.scrollTop
            });
        }
    }, {
        key: 'handleTouchMove',
        value: function handleTouchMove(e) {
            if (!this.state.touching || this.state.loading || this.props.disable) return;
            if (e.targetTouches[0].identifier !== this.state.touchId) return;

            var pageY = e.targetTouches[0].pageY;
            var diffY = pageY - this.state.ogY;

            //if it's scroll
            if (diffY < 0) return;

            //if it's not at top
            var $content = _reactDom2.default.findDOMNode(this.refs.content);
            if ($content.scrollTop > 0) return;

            //prevent move background
            e.preventDefault();

            diffY = diffY - this.state.initScrollTop > 100 ? 100 : diffY - this.state.initScrollTop;

            this.setState({
                pullPercent: diffY
            });
        }
    }, {
        key: 'handleTouchEnd',
        value: function handleTouchEnd(e) {
            var _this3 = this;

            if (!this.state.touching || this.state.loading || this.props.disable) return;

            var pullPercent = this.state.pullPercent;
            var loading = false;

            if (pullPercent === 100) {
                loading = true;
            } else {
                pullPercent = 0;
            }

            this.setState({
                touching: false,
                ogY: 0,
                touchId: undefined,
                initScrollTop: 0,
                animating: loading,
                pullPercent: pullPercent,
                loading: loading
            }, function () {
                //triger after ui change
                if (loading) _this3.props.onRefresh(_this3.resolveRefresh);
            });
        }
    }, {
        key: 'render',
        value: function render() {
            var _props = this.props,
                className = _props.className,
                children = _props.children,
                height = _props.height,
                loaderHeight = _props.loaderHeight,
                loaderDefaultIcon = _props.loaderDefaultIcon,
                loaderLoadingIcon = _props.loaderLoadingIcon,
                onRefresh = _props.onRefresh,
                disable = _props.disable,
                domProps = (0, _objectWithoutProperties3.default)(_props, ['className', 'children', 'height', 'loaderHeight', 'loaderDefaultIcon', 'loaderLoadingIcon', 'onRefresh', 'disable']);

            var cls = (0, _classnames2.default)('react-weui-ptr', className);

            var containerStyle = {
                height: height
            };

            var loaderStyle = {
                //transform: `translate(0, ${this.state.pullPercent / 2}px)`,
                height: loaderHeight,
                marginTop: -loaderHeight + this.state.pullPercent / (100 / loaderHeight) + 'px',
                transition: this.state.animating ? 'all .5s' : 'none'
            };

            return _react2.default.createElement(
                'div',
                (0, _extends3.default)({ className: cls, style: containerStyle }, domProps),
                _react2.default.createElement(
                    'div',
                    {
                        className: 'react-weui-ptr__loader',
                        style: loaderStyle
                    },
                    this.state.loading ? loaderLoadingIcon : loaderDefaultIcon(this.state.pullPercent)
                ),
                _react2.default.createElement(
                    'div',
                    {
                        className: 'react-weui-ptr__content',
                        ref: 'content',
                        onTouchStart: this.handleTouchStart,
                        onTouchMove: this.handleTouchMove,
                        onTouchEnd: this.handleTouchEnd
                    },
                    children
                )
            );
        }
    }]);
    return PullToRefresh;
}(_react.Component);

PullToRefresh.propTypes = {
    /**
     * height for the container, use string like '10px', default for '100%'
     *
     */
    height: _propTypes2.default.string,
    /**
     * height for the loader
     *
     */
    loaderHeight: _propTypes2.default.number,
    /**
     * element(icon) for default loader, function require, pass in pulldown progress
     *
     */
    loaderDefaultIcon: _propTypes2.default.func,
    /**
     * element(icon) for loading loader
     *
     */
    loaderLoadingIcon: _propTypes2.default.any,
    /**
     * callback when refresh is request, pass resolve function
     *
     */
    onRefresh: _propTypes2.default.func,
    /**
     * disable the loader
     *
     */
    disable: _propTypes2.default.bool
};
PullToRefresh.defaultProps = {
    height: '100%',
    loaderHeight: 100,
    loaderDefaultIcon: function loaderDefaultIcon(progress) {
        var style = {
            transform: 'rotate(-' + (progress !== 100 ? progress * 1.8 : 0) + 'deg)',
            color: progress !== 100 ? '#5f5f5f' : '#1AAD19'
        };
        return _react2.default.createElement(
            'div',
            { style: { flex: 1, padding: '5px' } },
            _react2.default.createElement(_icon2.default, { value: progress !== 100 ? 'download' : 'success', style: style })
        );
    },
    loaderLoadingIcon: _react2.default.createElement(_loadmore2.default, { loading: true }),
    onRefresh: function onRefresh(resolve, reject) {
        return setTimeout(function () {
            return resolve();
        }, 1000);
    },
    disable: false
};
exports.default = PullToRefresh;
module.exports = exports['default'];

/***/ }),

/***/ "./node_modules/react-weui/build/packages/components/searchbar/index.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _searchbar = __webpack_require__("./node_modules/react-weui/build/packages/components/searchbar/searchbar.js");

var _searchbar2 = _interopRequireDefault(_searchbar);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = _searchbar2.default;
module.exports = exports['default'];

/***/ }),

/***/ "./node_modules/react-weui/build/packages/components/searchbar/searchbar.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _getPrototypeOf = __webpack_require__("./node_modules/babel-runtime/core-js/object/get-prototype-of.js");

var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

var _classCallCheck2 = __webpack_require__("./node_modules/babel-runtime/helpers/classCallCheck.js");

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = __webpack_require__("./node_modules/babel-runtime/helpers/createClass.js");

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = __webpack_require__("./node_modules/babel-runtime/helpers/possibleConstructorReturn.js");

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = __webpack_require__("./node_modules/babel-runtime/helpers/inherits.js");

var _inherits3 = _interopRequireDefault(_inherits2);

var _react = __webpack_require__("./node_modules/react/react.js");

var _react2 = _interopRequireDefault(_react);

var _reactDom = __webpack_require__("./node_modules/react-dom/index.js");

var _reactDom2 = _interopRequireDefault(_reactDom);

var _propTypes = __webpack_require__("./node_modules/prop-types/index.js");

var _propTypes2 = _interopRequireDefault(_propTypes);

var _classnames = __webpack_require__("./node_modules/react-weui/build/packages/utils/classnames.js");

var _classnames2 = _interopRequireDefault(_classnames);

var _icon = __webpack_require__("./node_modules/react-weui/build/packages/components/icon/index.js");

var _icon2 = _interopRequireDefault(_icon);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 *  weui search component
 *
 */
var SearchBar = function (_React$Component) {
    (0, _inherits3.default)(SearchBar, _React$Component);

    function SearchBar(props) {
        (0, _classCallCheck3.default)(this, SearchBar);

        var _this = (0, _possibleConstructorReturn3.default)(this, (SearchBar.__proto__ || (0, _getPrototypeOf2.default)(SearchBar)).call(this, props));

        _this.state = {
            focus: _this.props.defaultValue ? true : false,
            clearing: false,
            text: _this.props.defaultValue ? _this.props.defaultValue : ''
        };

        if (_this.props.defaultValue !== '') {
            if (_this.props.onChange) _this.props.onChange(_this.state.text);
        }
        return _this;
    }

    (0, _createClass3.default)(SearchBar, [{
        key: 'changeHandle',
        value: function changeHandle(e) {
            var text = e.target.value;
            if (this.props.onChange) this.props.onChange(text, e);
            this.setState({ text: text });
        }
    }, {
        key: 'cancelHandle',
        value: function cancelHandle(e) {
            this.setState({
                focus: false,
                text: ''
            });
            if (this.props.onCancel) this.props.onCancel(e);
            if (this.props.onChange) this.props.onChange('', e);
        }
    }, {
        key: 'clearHandle',
        value: function clearHandle(e) {
            e.preventDefault();
            e.stopPropagation();

            this.setState({ text: '', clearing: true });
            if (this.props.onClear) this.props.onClear(e);
            // In most cases, you can attach a ref to the DOM node and avoid using findDOMNode at all.
            // When render returns null or false, findDOMNode returns null.
            // 这里是截取官网的说明，在ref回调函数内确实会返回null，尤其是配合redux使用的时候，这个时候需要对其进行null判断
            this.refs.searchInput.focus();
            // ReactDOM.findDOMNode(this.refs.searchInput).focus()
            if (this.props.onChange) this.props.onChange('', e);
        }
    }, {
        key: 'blurHandle',
        value: function blurHandle(e) {
            if (this.state.text === '') {
                this.setState({ focus: false });
            }
        }
    }, {
        key: 'submitHandle',
        value: function submitHandle(e) {
            if (this.props.onSubmit) {
                e.preventDefault();
                e.stopPropagation();
                this.props.onSubmit(this.state.text, e);
            }
        }
    }, {
        key: 'render',
        value: function render() {
            var _this2 = this;

            var _props = this.props,
                children = _props.children,
                defaultValue = _props.defaultValue,
                autocomplete = _props.autocomplete,
                placeholder = _props.placeholder,
                className = _props.className,
                searchName = _props.searchName;

            var clz = (0, _classnames2.default)({
                'weui-search-bar': true,
                'weui-search-bar_focusing': this.state.focus
            }, className);

            return _react2.default.createElement(
                'div',
                { className: clz },
                _react2.default.createElement(
                    'form',
                    { className: 'weui-search-bar__form', onSubmit: this.submitHandle.bind(this) },
                    _react2.default.createElement(
                        'div',
                        { className: 'weui-search-bar__box' },
                        _react2.default.createElement(_icon2.default, { value: 'search' }),
                        _react2.default.createElement('input', {
                            ref: 'searchInput',
                            type: 'search',
                            name: searchName,
                            className: 'weui-search-bar__input',
                            placeholder: placeholder,
                            onFocus: function onFocus(e) {
                                return _this2.setState({ focus: true });
                            },
                            onBlur: this.blurHandle.bind(this),
                            onChange: this.changeHandle.bind(this),
                            value: this.state.text,
                            autoComplete: autocomplete
                        }),
                        _react2.default.createElement('a', {
                            className: 'weui-icon-clear',
                            onClick: this.clearHandle.bind(this)
                        })
                    ),
                    _react2.default.createElement(
                        'label',
                        {
                            className: 'weui-search-bar__label',
                            onClick: function onClick() {
                                var searchInput = _this2.refs.searchInput;
                                if (searchInput) {
                                    searchInput.focus();
                                }
                            },
                            style: { display: this.state.text ? 'none' : null }
                        },
                        _react2.default.createElement(_icon2.default, { value: 'search' }),
                        _react2.default.createElement(
                            'span',
                            null,
                            placeholder
                        )
                    )
                ),
                _react2.default.createElement(
                    'a',
                    { className: 'weui-search-bar__cancel-btn', onClick: this.cancelHandle.bind(this) },
                    this.props.lang.cancel
                )
            );
        }
    }]);
    return SearchBar;
}(_react2.default.Component);

SearchBar.propTypes = {
    /**
     * default value for the searchbar if any
     *
     */
    defaultValue: _propTypes2.default.string,
    /**
     * default place holder text
     *
     */
    placeholder: _propTypes2.default.string,
    /**
     * name of the input component
     *
     */
    searchName: _propTypes2.default.string,
    /**
     * trigger when text change on input pass `text` property
     *
     */
    onChange: _propTypes2.default.func,
    /**
     * trigger when user click clear icon
     *
     */
    onClear: _propTypes2.default.func,
    /**
     * trigger when user click cancel button
     *
     */
    onCancel: _propTypes2.default.func,
    /**
     * trigger when user submit (enter action)
     *
     */
    onSubmit: _propTypes2.default.func,
    /**
     * language object consists of `cancel` property
     *
     */
    lang: _propTypes2.default.object
};
SearchBar.defaultProps = {
    placeholder: '搜索',
    searchName: 'q',
    onChange: undefined,
    onClear: undefined,
    onCancel: undefined,
    onSubmit: undefined,
    lang: { cancel: '取消' },
    autocomplete: 'off'
};
exports.default = SearchBar;
module.exports = exports['default'];

/***/ }),

/***/ "./node_modules/react-weui/build/packages/components/swiper/index.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _swiper = __webpack_require__("./node_modules/react-weui/build/packages/components/swiper/swiper.js");

var _swiper2 = _interopRequireDefault(_swiper);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = _swiper2.default;
module.exports = exports['default'];

/***/ }),

/***/ "./node_modules/react-weui/build/packages/components/swiper/swiper.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _assign = __webpack_require__("./node_modules/babel-runtime/core-js/object/assign.js");

var _assign2 = _interopRequireDefault(_assign);

var _objectWithoutProperties2 = __webpack_require__("./node_modules/babel-runtime/helpers/objectWithoutProperties.js");

var _objectWithoutProperties3 = _interopRequireDefault(_objectWithoutProperties2);

var _getPrototypeOf = __webpack_require__("./node_modules/babel-runtime/core-js/object/get-prototype-of.js");

var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

var _classCallCheck2 = __webpack_require__("./node_modules/babel-runtime/helpers/classCallCheck.js");

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = __webpack_require__("./node_modules/babel-runtime/helpers/createClass.js");

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = __webpack_require__("./node_modules/babel-runtime/helpers/possibleConstructorReturn.js");

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = __webpack_require__("./node_modules/babel-runtime/helpers/inherits.js");

var _inherits3 = _interopRequireDefault(_inherits2);

var _react = __webpack_require__("./node_modules/react/react.js");

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__("./node_modules/prop-types/index.js");

var _propTypes2 = _interopRequireDefault(_propTypes);

var _reactDom = __webpack_require__("./node_modules/react-dom/index.js");

var _reactDom2 = _interopRequireDefault(_reactDom);

var _classnames = __webpack_require__("./node_modules/react-weui/build/packages/utils/classnames.js");

var _classnames2 = _interopRequireDefault(_classnames);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 *   The ultimate mobile swipe component
 *
 */
var Swiper = function (_Component) {
    (0, _inherits3.default)(Swiper, _Component);

    function Swiper(props) {
        (0, _classCallCheck3.default)(this, Swiper);

        var _this = (0, _possibleConstructorReturn3.default)(this, (Swiper.__proto__ || (0, _getPrototypeOf2.default)(Swiper)).call(this, props));

        _this.state = {
            containerWidth: 0,
            containerHeight: 0,
            currentIndex: _this.props.defaultIndex,

            //touch
            touching: false,
            og: 0,
            ogTranslate: 0,
            touchId: undefined,
            translate: 0,
            animating: false
        };

        _this.handleTouchStart = _this.handleTouchStart.bind(_this);
        _this.handleTouchMove = _this.handleTouchMove.bind(_this);
        _this.handleTouchEnd = _this.handleTouchEnd.bind(_this);
        return _this;
    }

    (0, _createClass3.default)(Swiper, [{
        key: 'componentDidMount',
        value: function componentDidMount() {
            var $container = _reactDom2.default.findDOMNode(this.refs.container);

            this.setState({
                wrapperWidth: this.props.direction === 'horizontal' ? $container.offsetWidth * this.props.children.length : $container.offsetWidth,
                wrapperHeight: this.props.direction === 'vertical' ? $container.offsetHeight * this.props.children.length : $container.offsetHeight,
                containerWidth: $container.offsetWidth,
                containerHeight: $container.offsetHeight,
                translate: this.props.defaultIndex <= this.props.children.length ? this.props.direction === 'horizontal' ? $container.offsetWidth * -this.props.defaultIndex : $container.offsetHeight * -this.props.defaultIndex : 0
            });
            //console.log($container.offsetWidth, $container.offsetHeight)
        }
    }, {
        key: 'handleTouchStart',
        value: function handleTouchStart(e) {
            if (this.state.touching || this.props.children.length <= 1) return;

            var og = 0;

            if (this.props.direction === 'horizontal') {
                og = e.targetTouches[0].pageX - this.state.translate;
            } else {
                og = e.targetTouches[0].pageY - this.state.translate;
            }

            this.setState({
                touching: true,
                ogTranslate: this.state.translate,
                touchId: e.targetTouches[0].identifier,
                og: og,
                animating: false
            });
        }
    }, {
        key: 'handleTouchMove',
        value: function handleTouchMove(e) {
            if (!this.state.touching || this.props.children.length <= 1) return;
            if (e.targetTouches[0].identifier !== this.state.touchId) return;

            //prevent move background
            e.preventDefault();

            var diff = this.state.translate;

            if (this.props.direction === 'horizontal') {
                var pageX = e.targetTouches[0].pageX;
                diff = pageX - this.state.og;
            } else {
                //vertical
                var pageY = e.targetTouches[0].pageY;
                diff = pageY - this.state.og;
            }

            this.setState({
                translate: diff
            });
        }
    }, {
        key: 'handleTouchEnd',
        value: function handleTouchEnd(e) {
            var _this2 = this;

            if (!this.state.touching || this.props.children.length <= 1) return;

            var translate = this.state.translate;
            var max = this.props.direction === 'horizontal' ? this.state.wrapperWidth - this.state.containerWidth : this.state.wrapperHeight - this.state.containerHeight;
            var currentIndex = this.state.currentIndex;
            var ogIndex = currentIndex;

            if (translate > 0) {
                //start
                translate = 0;
            } else if (translate < -max) {
                //end
                translate = -max;
            } else {
                //default case
                var diff = Math.abs(translate - this.state.ogTranslate);
                var isNext = translate - this.state.ogTranslate < 0 ? true : false;
                //console.log(translate - this.state.ogTranslate, diff, isNext)

                if (diff >= this.props.threshold) {

                    if (isNext) {
                        //next slide
                        translate = this.state.ogTranslate - (this.props.direction === 'horizontal' ? this.state.containerWidth : this.state.containerHeight);
                        currentIndex += 1;
                    } else {
                        //prev slide
                        translate = this.state.ogTranslate + (this.props.direction === 'horizontal' ? this.state.containerWidth : this.state.containerHeight);
                        currentIndex -= 1;
                    }
                } else {
                    //revert back
                    translate = this.state.ogTranslate;
                }
            }

            this.setState({
                touching: false,
                og: 0,
                touchId: undefined,
                ogTranslate: 0,
                animating: true,
                translate: translate,
                currentIndex: currentIndex
            }, function () {
                return setTimeout(function () {
                    return _this2.setState({ animating: false });
                }, _this2.props.speed);
            });

            if (this.props.onChange) this.props.onChange(ogIndex, currentIndex);
        }
    }, {
        key: 'renderPagination',
        value: function renderPagination() {
            var _this3 = this;

            return this.props.children.map(function (child, i) {
                var clx = (0, _classnames2.default)('react-weui-swiper__pagination-bullet', {
                    active: i === _this3.state.currentIndex
                });
                return _react2.default.createElement('span', { className: clx, key: i });
            });
        }
    }, {
        key: 'render',
        value: function render() {
            var _this4 = this;

            var _props = this.props,
                className = _props.className,
                children = _props.children,
                height = _props.height,
                width = _props.width,
                defaultIndex = _props.defaultIndex,
                direction = _props.direction,
                speed = _props.speed,
                indicators = _props.indicators,
                domProps = (0, _objectWithoutProperties3.default)(_props, ['className', 'children', 'height', 'width', 'defaultIndex', 'direction', 'speed', 'indicators']);

            var clx = (0, _classnames2.default)('react-weui-swiper__container', className, {
                'react-weui-swiper__container-horizontal': direction === 'horizontal',
                'react-weui-swiper__container-vertical': direction === 'vertical'
            });

            var containerStyle = {
                height: height ? height + 'px' : '100%',
                width: width ? width + 'px' : '100%'
            };

            var wrapperStyle = {
                width: this.state.wrapperWidth,
                height: this.state.wrapperHeight,
                transition: this.state.animating ? 'transform .' + speed / 100 + 's' : 'none',
                transform: 'translate(' + (direction === 'horizontal' ? this.state.translate : 0) + 'px, ' + (direction === 'vertical' ? this.state.translate : 0) + 'px)'
            };

            return _react2.default.createElement(
                'div',
                {
                    className: clx,
                    onTouchStart: this.handleTouchStart,
                    onTouchMove: this.handleTouchMove,
                    onTouchEnd: this.handleTouchEnd,
                    style: containerStyle,
                    ref: 'container'
                },
                _react2.default.createElement(
                    'div',
                    {
                        className: 'react-weui-swiper__wrapper',
                        style: wrapperStyle
                    },
                    children.map(function (child, i) {
                        return _react2.default.cloneElement(child, {
                            className: (0, _classnames2.default)('react-weui-swiper__item', child.className),
                            key: i,
                            style: (0, _assign2.default)({}, child.props.style, {
                                display: direction === 'horizontal' ? 'inline-block' : 'block',
                                verticalAlign: direction === 'horizontal' ? 'top' : 'bottom',
                                width: _this4.state.containerWidth,
                                height: _this4.state.containerHeight
                            })
                        });
                    })
                ),
                indicators ? _react2.default.createElement(
                    'div',
                    {
                        className: 'react-weui-swiper__pagination'
                    },
                    this.renderPagination()
                ) : false
            );
        }
    }]);
    return Swiper;
}(_react.Component);

Swiper.propTypes = {
    /**
     * height for the container, number in px
     *
     */
    height: _propTypes2.default.number,
    /**
     * width for the container, number in px
     *
     */
    width: _propTypes2.default.number,
    /**
     * threshold for the swiper, number in px
     *
     */
    threshold: _propTypes2.default.number,
    /**
     * speed for the slide transition, number in ms
     *
     */
    speed: _propTypes2.default.number,
    /**
     * default slider index
     *
     */
    defaultIndex: _propTypes2.default.number,
    /**
     * direction of swiper
     *
     */
    direction: _propTypes2.default.oneOf(['vertical', 'horizontal']),
    /**
     * show indicators
     *
     */
    indicators: _propTypes2.default.bool,
    /**
     * callback when slide change is trigger, pass indexs of (prev, next)
     *
     */
    onChange: _propTypes2.default.func
};
Swiper.defaultProps = {
    height: null,
    width: null,
    defaultIndex: 0,
    direction: 'horizontal',
    threshold: 50,
    speed: 300,
    indicators: true
};
exports.default = Swiper;
module.exports = exports['default'];

/***/ }),

/***/ "./node_modules/react-weui/build/packages/components/tab/index.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
   value: true
});
exports.TabBarLabel = exports.TabBarIcon = exports.TabBarItem = exports.TabBar = exports.TabBodyItem = exports.TabBody = exports.Tab = exports.NavBarItem = exports.NavBar = undefined;

var _tab = __webpack_require__("./node_modules/react-weui/build/packages/components/tab/tab.js");

var _tab2 = _interopRequireDefault(_tab);

var _tab_body = __webpack_require__("./node_modules/react-weui/build/packages/components/tab/tab_body.js");

var _tab_body2 = _interopRequireDefault(_tab_body);

var _navbar = __webpack_require__("./node_modules/react-weui/build/packages/components/tab/navbar.js");

var _navbar2 = _interopRequireDefault(_navbar);

var _navbar_item = __webpack_require__("./node_modules/react-weui/build/packages/components/tab/navbar_item.js");

var _navbar_item2 = _interopRequireDefault(_navbar_item);

var _tabbar = __webpack_require__("./node_modules/react-weui/build/packages/components/tab/tabbar.js");

var _tabbar2 = _interopRequireDefault(_tabbar);

var _tabbar_item = __webpack_require__("./node_modules/react-weui/build/packages/components/tab/tabbar_item.js");

var _tabbar_item2 = _interopRequireDefault(_tabbar_item);

var _tabbar_icon = __webpack_require__("./node_modules/react-weui/build/packages/components/tab/tabbar_icon.js");

var _tabbar_icon2 = _interopRequireDefault(_tabbar_icon);

var _tabbar_label = __webpack_require__("./node_modules/react-weui/build/packages/components/tab/tabbar_label.js");

var _tabbar_label2 = _interopRequireDefault(_tabbar_label);

var _tab_body_item = __webpack_require__("./node_modules/react-weui/build/packages/components/tab/tab_body_item.js");

var _tab_body_item2 = _interopRequireDefault(_tab_body_item);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.NavBar = _navbar2.default;
exports.NavBarItem = _navbar_item2.default;
exports.Tab = _tab2.default;
exports.TabBody = _tab_body2.default;
exports.TabBodyItem = _tab_body_item2.default;
exports.TabBar = _tabbar2.default;
exports.TabBarItem = _tabbar_item2.default;
exports.TabBarIcon = _tabbar_icon2.default;
exports.TabBarLabel = _tabbar_label2.default;

/***/ }),

/***/ "./node_modules/react-weui/build/packages/components/tab/navbar.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _extends2 = __webpack_require__("./node_modules/babel-runtime/helpers/extends.js");

var _extends3 = _interopRequireDefault(_extends2);

var _objectWithoutProperties2 = __webpack_require__("./node_modules/babel-runtime/helpers/objectWithoutProperties.js");

var _objectWithoutProperties3 = _interopRequireDefault(_objectWithoutProperties2);

var _getPrototypeOf = __webpack_require__("./node_modules/babel-runtime/core-js/object/get-prototype-of.js");

var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

var _classCallCheck2 = __webpack_require__("./node_modules/babel-runtime/helpers/classCallCheck.js");

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = __webpack_require__("./node_modules/babel-runtime/helpers/createClass.js");

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = __webpack_require__("./node_modules/babel-runtime/helpers/possibleConstructorReturn.js");

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = __webpack_require__("./node_modules/babel-runtime/helpers/inherits.js");

var _inherits3 = _interopRequireDefault(_inherits2);

var _react = __webpack_require__("./node_modules/react/react.js");

var _react2 = _interopRequireDefault(_react);

var _classnames = __webpack_require__("./node_modules/react-weui/build/packages/utils/classnames.js");

var _classnames2 = _interopRequireDefault(_classnames);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 *  wrapper for navbar
 *
 */
var NavBar = function (_React$Component) {
    (0, _inherits3.default)(NavBar, _React$Component);

    function NavBar() {
        (0, _classCallCheck3.default)(this, NavBar);
        return (0, _possibleConstructorReturn3.default)(this, (NavBar.__proto__ || (0, _getPrototypeOf2.default)(NavBar)).apply(this, arguments));
    }

    (0, _createClass3.default)(NavBar, [{
        key: 'render',
        value: function render() {
            var _props = this.props,
                children = _props.children,
                className = _props.className,
                others = (0, _objectWithoutProperties3.default)(_props, ['children', 'className']);

            var cls = (0, _classnames2.default)({
                'weui-navbar': true
            }, className);

            return _react2.default.createElement(
                'div',
                (0, _extends3.default)({ className: cls }, others),
                children
            );
        }
    }]);
    return NavBar;
}(_react2.default.Component);

exports.default = NavBar;
module.exports = exports['default'];

/***/ }),

/***/ "./node_modules/react-weui/build/packages/components/tab/navbar_item.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _extends2 = __webpack_require__("./node_modules/babel-runtime/helpers/extends.js");

var _extends3 = _interopRequireDefault(_extends2);

var _objectWithoutProperties2 = __webpack_require__("./node_modules/babel-runtime/helpers/objectWithoutProperties.js");

var _objectWithoutProperties3 = _interopRequireDefault(_objectWithoutProperties2);

var _getPrototypeOf = __webpack_require__("./node_modules/babel-runtime/core-js/object/get-prototype-of.js");

var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

var _classCallCheck2 = __webpack_require__("./node_modules/babel-runtime/helpers/classCallCheck.js");

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = __webpack_require__("./node_modules/babel-runtime/helpers/createClass.js");

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = __webpack_require__("./node_modules/babel-runtime/helpers/possibleConstructorReturn.js");

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = __webpack_require__("./node_modules/babel-runtime/helpers/inherits.js");

var _inherits3 = _interopRequireDefault(_inherits2);

var _react = __webpack_require__("./node_modules/react/react.js");

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__("./node_modules/prop-types/index.js");

var _propTypes2 = _interopRequireDefault(_propTypes);

var _classnames = __webpack_require__("./node_modules/react-weui/build/packages/utils/classnames.js");

var _classnames2 = _interopRequireDefault(_classnames);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 *  Navbar item to display info
 *
 */
var NavBarItem = function (_React$Component) {
    (0, _inherits3.default)(NavBarItem, _React$Component);

    function NavBarItem() {
        (0, _classCallCheck3.default)(this, NavBarItem);
        return (0, _possibleConstructorReturn3.default)(this, (NavBarItem.__proto__ || (0, _getPrototypeOf2.default)(NavBarItem)).apply(this, arguments));
    }

    (0, _createClass3.default)(NavBarItem, [{
        key: 'render',
        value: function render() {
            var _props = this.props,
                children = _props.children,
                className = _props.className,
                active = _props.active,
                label = _props.label,
                others = (0, _objectWithoutProperties3.default)(_props, ['children', 'className', 'active', 'label']);

            var cls = (0, _classnames2.default)({
                'weui-navbar__item': true,
                'weui-bar__item_on': active
            }, className);

            return _react2.default.createElement(
                'div',
                (0, _extends3.default)({ className: cls }, others),
                label ? label : children
            );
        }
    }]);
    return NavBarItem;
}(_react2.default.Component);

NavBarItem.propTypes = {
    /**
     * indicate tab is active
     *
     */
    active: _propTypes2.default.bool,
    /**
     * label of the item
     *
     */
    label: _propTypes2.default.string
};
NavBarItem.defaultProps = {
    active: false
};
exports.default = NavBarItem;
module.exports = exports['default'];

/***/ }),

/***/ "./node_modules/react-weui/build/packages/components/tab/tab.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _extends2 = __webpack_require__("./node_modules/babel-runtime/helpers/extends.js");

var _extends3 = _interopRequireDefault(_extends2);

var _assign = __webpack_require__("./node_modules/babel-runtime/core-js/object/assign.js");

var _assign2 = _interopRequireDefault(_assign);

var _objectWithoutProperties2 = __webpack_require__("./node_modules/babel-runtime/helpers/objectWithoutProperties.js");

var _objectWithoutProperties3 = _interopRequireDefault(_objectWithoutProperties2);

var _getPrototypeOf = __webpack_require__("./node_modules/babel-runtime/core-js/object/get-prototype-of.js");

var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

var _classCallCheck2 = __webpack_require__("./node_modules/babel-runtime/helpers/classCallCheck.js");

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = __webpack_require__("./node_modules/babel-runtime/helpers/createClass.js");

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = __webpack_require__("./node_modules/babel-runtime/helpers/possibleConstructorReturn.js");

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = __webpack_require__("./node_modules/babel-runtime/helpers/inherits.js");

var _inherits3 = _interopRequireDefault(_inherits2);

var _react = __webpack_require__("./node_modules/react/react.js");

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__("./node_modules/prop-types/index.js");

var _propTypes2 = _interopRequireDefault(_propTypes);

var _classnames = __webpack_require__("./node_modules/react-weui/build/packages/utils/classnames.js");

var _classnames2 = _interopRequireDefault(_classnames);

var _tab_body = __webpack_require__("./node_modules/react-weui/build/packages/components/tab/tab_body.js");

var _tab_body2 = _interopRequireDefault(_tab_body);

var _tab_body_item = __webpack_require__("./node_modules/react-weui/build/packages/components/tab/tab_body_item.js");

var _tab_body_item2 = _interopRequireDefault(_tab_body_item);

var _navbar = __webpack_require__("./node_modules/react-weui/build/packages/components/tab/navbar.js");

var _navbar2 = _interopRequireDefault(_navbar);

var _navbar_item = __webpack_require__("./node_modules/react-weui/build/packages/components/tab/navbar_item.js");

var _navbar_item2 = _interopRequireDefault(_navbar_item);

var _tabbar = __webpack_require__("./node_modules/react-weui/build/packages/components/tab/tabbar.js");

var _tabbar2 = _interopRequireDefault(_tabbar);

var _tabbar_item = __webpack_require__("./node_modules/react-weui/build/packages/components/tab/tabbar_item.js");

var _tabbar_item2 = _interopRequireDefault(_tabbar_item);

var _tabbar_icon = __webpack_require__("./node_modules/react-weui/build/packages/components/tab/tabbar_icon.js");

var _tabbar_icon2 = _interopRequireDefault(_tabbar_icon);

var _tabbar_label = __webpack_require__("./node_modules/react-weui/build/packages/components/tab/tabbar_label.js");

var _tabbar_label2 = _interopRequireDefault(_tabbar_label);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 *  Weui Tab component, can be auto mount items or mannually display items
 *
 */
var Tab = function (_React$Component) {
    (0, _inherits3.default)(Tab, _React$Component);

    function Tab() {
        var _ref;

        var _temp, _this, _ret;

        (0, _classCallCheck3.default)(this, Tab);

        for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
        }

        return _ret = (_temp = (_this = (0, _possibleConstructorReturn3.default)(this, (_ref = Tab.__proto__ || (0, _getPrototypeOf2.default)(Tab)).call.apply(_ref, [this].concat(args))), _this), _this.state = {
            index: _this.props.defaultIndex
        }, _temp), (0, _possibleConstructorReturn3.default)(_this, _ret);
    }

    (0, _createClass3.default)(Tab, [{
        key: 'handleHeaderClick',
        value: function handleHeaderClick(idx) {
            this.setState({ index: idx });
            if (this.props.onChange) this.props.onChange(idx);
        }
    }, {
        key: 'parseChild',
        value: function parseChild(childrenInput) {
            var ChildHeaders = [];
            var ChildContents = [];

            _react2.default.Children.map(childrenInput, function (child) {
                if (!child) return;
                var _child$props = child.props,
                    children = _child$props.children,
                    type = _child$props.type,
                    others = (0, _objectWithoutProperties3.default)(_child$props, ['children', 'type']);

                if (child.type === _tabbar_item2.default || child.type === _navbar_item2.default) {
                    ChildHeaders.push(child);
                    if (children) ChildContents.push(_react2.default.createElement(_tab_body_item2.default, { children: children }));
                } else if (child.type === _tab_body_item2.default) {
                    ChildContents.push(child);
                }
            });

            return { ChildHeaders: ChildHeaders, ChildContents: ChildContents };
        }
    }, {
        key: 'renderBar',
        value: function renderBar(type, children, cls) {
            var _this2 = this;

            var _parseChild = this.parseChild(children),
                ChildHeaders = _parseChild.ChildHeaders,
                ChildContents = _parseChild.ChildContents;

            var _headers = ChildHeaders.map(function (item, idx) {
                return _react2.default.cloneElement(item, {
                    key: idx,
                    active: _this2.state.index === idx,
                    onClick: _this2.handleHeaderClick.bind(_this2, idx, item)
                });
            });

            var _contents = ChildContents.map(function (item, idx) {
                return _react2.default.cloneElement(item, {
                    key: idx,
                    active: _this2.state.index === idx,
                    tabIndex: idx
                });
            });

            if (type === 'tabbar') {
                return _react2.default.createElement(
                    'div',
                    { className: cls },
                    _react2.default.createElement(
                        _tab_body2.default,
                        null,
                        _contents
                    ),
                    _react2.default.createElement(
                        _tabbar2.default,
                        null,
                        _headers
                    )
                );
            } else if (type === 'navbar') {
                return _react2.default.createElement(
                    'div',
                    { className: cls },
                    _react2.default.createElement(
                        _navbar2.default,
                        null,
                        _headers
                    ),
                    _react2.default.createElement(
                        _tab_body2.default,
                        null,
                        _contents
                    )
                );
            } else {
                return false;
            }
        }
    }, {
        key: 'render',
        value: function render() {
            var _props = this.props,
                children = _props.children,
                className = _props.className,
                type = _props.type,
                others = (0, _objectWithoutProperties3.default)(_props, ['children', 'className', 'type']);

            var divProps = (0, _assign2.default)({}, others);
            delete divProps.defaultIndex;

            var cls = (0, _classnames2.default)({
                'weui-tab': true
            }, className);

            if (type === 'normal') {
                return _react2.default.createElement(
                    'div',
                    (0, _extends3.default)({ className: cls }, divProps),
                    children
                );
            } else {
                return this.renderBar(type, children, cls);
            }
        }
    }]);
    return Tab;
}(_react2.default.Component);

Tab.propTypes = {
    /**
     * layout of the tab, auto mount components when set to `navbar` or `tabbar`
     *
     */
    type: _propTypes2.default.string,
    /**
     * default select index
     *
     */
    defaultIndex: _propTypes2.default.number,
    onChange: _propTypes2.default.func
};
Tab.defaultProps = {
    type: 'normal',
    defaultIndex: 0
};
exports.default = Tab;
module.exports = exports['default'];

/***/ }),

/***/ "./node_modules/react-weui/build/packages/components/tab/tab_body.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _extends2 = __webpack_require__("./node_modules/babel-runtime/helpers/extends.js");

var _extends3 = _interopRequireDefault(_extends2);

var _objectWithoutProperties2 = __webpack_require__("./node_modules/babel-runtime/helpers/objectWithoutProperties.js");

var _objectWithoutProperties3 = _interopRequireDefault(_objectWithoutProperties2);

var _getPrototypeOf = __webpack_require__("./node_modules/babel-runtime/core-js/object/get-prototype-of.js");

var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

var _classCallCheck2 = __webpack_require__("./node_modules/babel-runtime/helpers/classCallCheck.js");

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = __webpack_require__("./node_modules/babel-runtime/helpers/createClass.js");

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = __webpack_require__("./node_modules/babel-runtime/helpers/possibleConstructorReturn.js");

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = __webpack_require__("./node_modules/babel-runtime/helpers/inherits.js");

var _inherits3 = _interopRequireDefault(_inherits2);

var _react = __webpack_require__("./node_modules/react/react.js");

var _react2 = _interopRequireDefault(_react);

var _classnames = __webpack_require__("./node_modules/react-weui/build/packages/utils/classnames.js");

var _classnames2 = _interopRequireDefault(_classnames);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * Content Wrapper for Tab
 */
var TabBody = function (_React$Component) {
    (0, _inherits3.default)(TabBody, _React$Component);

    function TabBody() {
        (0, _classCallCheck3.default)(this, TabBody);
        return (0, _possibleConstructorReturn3.default)(this, (TabBody.__proto__ || (0, _getPrototypeOf2.default)(TabBody)).apply(this, arguments));
    }

    (0, _createClass3.default)(TabBody, [{
        key: 'render',
        value: function render() {
            var _props = this.props,
                children = _props.children,
                className = _props.className,
                others = (0, _objectWithoutProperties3.default)(_props, ['children', 'className']);

            var cls = (0, _classnames2.default)({
                'weui-tab__panel': true
            }, className);

            return _react2.default.createElement(
                'div',
                (0, _extends3.default)({ className: cls }, others),
                children
            );
        }
    }]);
    return TabBody;
}(_react2.default.Component);

exports.default = TabBody;
module.exports = exports['default'];

/***/ }),

/***/ "./node_modules/react-weui/build/packages/components/tab/tab_body_item.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _extends2 = __webpack_require__("./node_modules/babel-runtime/helpers/extends.js");

var _extends3 = _interopRequireDefault(_extends2);

var _objectWithoutProperties2 = __webpack_require__("./node_modules/babel-runtime/helpers/objectWithoutProperties.js");

var _objectWithoutProperties3 = _interopRequireDefault(_objectWithoutProperties2);

var _getPrototypeOf = __webpack_require__("./node_modules/babel-runtime/core-js/object/get-prototype-of.js");

var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

var _classCallCheck2 = __webpack_require__("./node_modules/babel-runtime/helpers/classCallCheck.js");

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = __webpack_require__("./node_modules/babel-runtime/helpers/createClass.js");

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = __webpack_require__("./node_modules/babel-runtime/helpers/possibleConstructorReturn.js");

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = __webpack_require__("./node_modules/babel-runtime/helpers/inherits.js");

var _inherits3 = _interopRequireDefault(_inherits2);

var _react = __webpack_require__("./node_modules/react/react.js");

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__("./node_modules/prop-types/index.js");

var _propTypes2 = _interopRequireDefault(_propTypes);

var _classnames = __webpack_require__("./node_modules/react-weui/build/packages/utils/classnames.js");

var _classnames2 = _interopRequireDefault(_classnames);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * Content wrapper for each Tab Item
 */
var TabBodyItem = function (_React$Component) {
    (0, _inherits3.default)(TabBodyItem, _React$Component);

    function TabBodyItem() {
        (0, _classCallCheck3.default)(this, TabBodyItem);
        return (0, _possibleConstructorReturn3.default)(this, (TabBodyItem.__proto__ || (0, _getPrototypeOf2.default)(TabBodyItem)).apply(this, arguments));
    }

    (0, _createClass3.default)(TabBodyItem, [{
        key: 'render',
        value: function render() {
            var _props = this.props,
                children = _props.children,
                className = _props.className,
                active = _props.active,
                others = (0, _objectWithoutProperties3.default)(_props, ['children', 'className', 'active']);

            var cls = (0, _classnames2.default)({
                'weui-tab__bd-item': true
            }, className);

            return _react2.default.createElement(
                'div',
                (0, _extends3.default)({ className: cls, style: { display: active ? 'block' : 'none' } }, others),
                children
            );
        }
    }]);
    return TabBodyItem;
}(_react2.default.Component);

TabBodyItem.propTypes = {
    /**
     * display this component
     *
     */
    active: _propTypes2.default.bool
};
TabBodyItem.defaultProps = {
    active: false
};
exports.default = TabBodyItem;
module.exports = exports['default'];

/***/ }),

/***/ "./node_modules/react-weui/build/packages/components/tab/tabbar.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _extends2 = __webpack_require__("./node_modules/babel-runtime/helpers/extends.js");

var _extends3 = _interopRequireDefault(_extends2);

var _objectWithoutProperties2 = __webpack_require__("./node_modules/babel-runtime/helpers/objectWithoutProperties.js");

var _objectWithoutProperties3 = _interopRequireDefault(_objectWithoutProperties2);

var _getPrototypeOf = __webpack_require__("./node_modules/babel-runtime/core-js/object/get-prototype-of.js");

var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

var _classCallCheck2 = __webpack_require__("./node_modules/babel-runtime/helpers/classCallCheck.js");

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = __webpack_require__("./node_modules/babel-runtime/helpers/createClass.js");

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = __webpack_require__("./node_modules/babel-runtime/helpers/possibleConstructorReturn.js");

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = __webpack_require__("./node_modules/babel-runtime/helpers/inherits.js");

var _inherits3 = _interopRequireDefault(_inherits2);

var _react = __webpack_require__("./node_modules/react/react.js");

var _react2 = _interopRequireDefault(_react);

var _classnames = __webpack_require__("./node_modules/react-weui/build/packages/utils/classnames.js");

var _classnames2 = _interopRequireDefault(_classnames);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 *  Bottom bar for tabs
 *
 */
var TabBar = function (_React$Component) {
    (0, _inherits3.default)(TabBar, _React$Component);

    function TabBar() {
        (0, _classCallCheck3.default)(this, TabBar);
        return (0, _possibleConstructorReturn3.default)(this, (TabBar.__proto__ || (0, _getPrototypeOf2.default)(TabBar)).apply(this, arguments));
    }

    (0, _createClass3.default)(TabBar, [{
        key: 'render',
        value: function render() {
            var _props = this.props,
                children = _props.children,
                className = _props.className,
                others = (0, _objectWithoutProperties3.default)(_props, ['children', 'className']);

            var cls = (0, _classnames2.default)({
                'weui-tabbar': true
            }, className);

            return _react2.default.createElement(
                'div',
                (0, _extends3.default)({ className: cls }, others),
                children
            );
        }
    }]);
    return TabBar;
}(_react2.default.Component);

exports.default = TabBar;
module.exports = exports['default'];

/***/ }),

/***/ "./node_modules/react-weui/build/packages/components/tab/tabbar_icon.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _extends2 = __webpack_require__("./node_modules/babel-runtime/helpers/extends.js");

var _extends3 = _interopRequireDefault(_extends2);

var _objectWithoutProperties2 = __webpack_require__("./node_modules/babel-runtime/helpers/objectWithoutProperties.js");

var _objectWithoutProperties3 = _interopRequireDefault(_objectWithoutProperties2);

var _getPrototypeOf = __webpack_require__("./node_modules/babel-runtime/core-js/object/get-prototype-of.js");

var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

var _classCallCheck2 = __webpack_require__("./node_modules/babel-runtime/helpers/classCallCheck.js");

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = __webpack_require__("./node_modules/babel-runtime/helpers/createClass.js");

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = __webpack_require__("./node_modules/babel-runtime/helpers/possibleConstructorReturn.js");

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = __webpack_require__("./node_modules/babel-runtime/helpers/inherits.js");

var _inherits3 = _interopRequireDefault(_inherits2);

var _react = __webpack_require__("./node_modules/react/react.js");

var _react2 = _interopRequireDefault(_react);

var _classnames = __webpack_require__("./node_modules/react-weui/build/packages/utils/classnames.js");

var _classnames2 = _interopRequireDefault(_classnames);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 *  Icon wrapper for icon use in TabBar
 *
 */
var TabBarIcon = function (_React$Component) {
    (0, _inherits3.default)(TabBarIcon, _React$Component);

    function TabBarIcon() {
        (0, _classCallCheck3.default)(this, TabBarIcon);
        return (0, _possibleConstructorReturn3.default)(this, (TabBarIcon.__proto__ || (0, _getPrototypeOf2.default)(TabBarIcon)).apply(this, arguments));
    }

    (0, _createClass3.default)(TabBarIcon, [{
        key: 'render',
        value: function render() {
            var _props = this.props,
                children = _props.children,
                className = _props.className,
                others = (0, _objectWithoutProperties3.default)(_props, ['children', 'className']);

            var cls = (0, _classnames2.default)({
                'weui-tabbar__icon': true
            }, className);

            return _react2.default.createElement(
                'div',
                (0, _extends3.default)({ className: cls }, others),
                children
            );
        }
    }]);
    return TabBarIcon;
}(_react2.default.Component);

exports.default = TabBarIcon;
module.exports = exports['default'];

/***/ }),

/***/ "./node_modules/react-weui/build/packages/components/tab/tabbar_item.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _extends2 = __webpack_require__("./node_modules/babel-runtime/helpers/extends.js");

var _extends3 = _interopRequireDefault(_extends2);

var _objectWithoutProperties2 = __webpack_require__("./node_modules/babel-runtime/helpers/objectWithoutProperties.js");

var _objectWithoutProperties3 = _interopRequireDefault(_objectWithoutProperties2);

var _getPrototypeOf = __webpack_require__("./node_modules/babel-runtime/core-js/object/get-prototype-of.js");

var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

var _classCallCheck2 = __webpack_require__("./node_modules/babel-runtime/helpers/classCallCheck.js");

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = __webpack_require__("./node_modules/babel-runtime/helpers/createClass.js");

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = __webpack_require__("./node_modules/babel-runtime/helpers/possibleConstructorReturn.js");

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = __webpack_require__("./node_modules/babel-runtime/helpers/inherits.js");

var _inherits3 = _interopRequireDefault(_inherits2);

var _react = __webpack_require__("./node_modules/react/react.js");

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__("./node_modules/prop-types/index.js");

var _propTypes2 = _interopRequireDefault(_propTypes);

var _classnames = __webpack_require__("./node_modules/react-weui/build/packages/utils/classnames.js");

var _classnames2 = _interopRequireDefault(_classnames);

var _tabbar_icon = __webpack_require__("./node_modules/react-weui/build/packages/components/tab/tabbar_icon.js");

var _tabbar_icon2 = _interopRequireDefault(_tabbar_icon);

var _tabbar_label = __webpack_require__("./node_modules/react-weui/build/packages/components/tab/tabbar_label.js");

var _tabbar_label2 = _interopRequireDefault(_tabbar_label);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 *  Tabbar item
 *
 */
var TabBarItem = function (_React$Component) {
    (0, _inherits3.default)(TabBarItem, _React$Component);

    function TabBarItem() {
        (0, _classCallCheck3.default)(this, TabBarItem);
        return (0, _possibleConstructorReturn3.default)(this, (TabBarItem.__proto__ || (0, _getPrototypeOf2.default)(TabBarItem)).apply(this, arguments));
    }

    (0, _createClass3.default)(TabBarItem, [{
        key: 'render',
        value: function render() {
            var _props = this.props,
                children = _props.children,
                className = _props.className,
                active = _props.active,
                icon = _props.icon,
                label = _props.label,
                others = (0, _objectWithoutProperties3.default)(_props, ['children', 'className', 'active', 'icon', 'label']);

            var cls = (0, _classnames2.default)({
                'weui-tabbar__item': true,
                'weui-bar__item_on': active
            }, className);

            if (icon || label) {
                return _react2.default.createElement(
                    'div',
                    (0, _extends3.default)({ className: cls }, others),
                    icon ? _react2.default.createElement(
                        _tabbar_icon2.default,
                        null,
                        icon
                    ) : false,
                    label ? _react2.default.createElement(
                        _tabbar_label2.default,
                        null,
                        label
                    ) : false
                );
            } else {
                return _react2.default.createElement(
                    'div',
                    (0, _extends3.default)({ className: cls }, others),
                    children
                );
            }
        }
    }]);
    return TabBarItem;
}(_react2.default.Component);

TabBarItem.propTypes = {
    /**
     * indicate currently active
     *
     */
    active: _propTypes2.default.bool,
    /**
     * icon of item
     *
     */
    icon: _propTypes2.default.any,
    /**
     * label of item
     *
     */
    label: _propTypes2.default.string
};
TabBarItem.defaultProps = {
    active: false,
    icon: false,
    label: ''
};
exports.default = TabBarItem;
module.exports = exports['default'];

/***/ }),

/***/ "./node_modules/react-weui/build/packages/components/tab/tabbar_label.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _extends2 = __webpack_require__("./node_modules/babel-runtime/helpers/extends.js");

var _extends3 = _interopRequireDefault(_extends2);

var _objectWithoutProperties2 = __webpack_require__("./node_modules/babel-runtime/helpers/objectWithoutProperties.js");

var _objectWithoutProperties3 = _interopRequireDefault(_objectWithoutProperties2);

var _getPrototypeOf = __webpack_require__("./node_modules/babel-runtime/core-js/object/get-prototype-of.js");

var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

var _classCallCheck2 = __webpack_require__("./node_modules/babel-runtime/helpers/classCallCheck.js");

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = __webpack_require__("./node_modules/babel-runtime/helpers/createClass.js");

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = __webpack_require__("./node_modules/babel-runtime/helpers/possibleConstructorReturn.js");

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = __webpack_require__("./node_modules/babel-runtime/helpers/inherits.js");

var _inherits3 = _interopRequireDefault(_inherits2);

var _react = __webpack_require__("./node_modules/react/react.js");

var _react2 = _interopRequireDefault(_react);

var _classnames = __webpack_require__("./node_modules/react-weui/build/packages/utils/classnames.js");

var _classnames2 = _interopRequireDefault(_classnames);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 *  label wrapper for text inside TabBarItem
 *
 */
var TabBarLabel = function (_React$Component) {
    (0, _inherits3.default)(TabBarLabel, _React$Component);

    function TabBarLabel() {
        (0, _classCallCheck3.default)(this, TabBarLabel);
        return (0, _possibleConstructorReturn3.default)(this, (TabBarLabel.__proto__ || (0, _getPrototypeOf2.default)(TabBarLabel)).apply(this, arguments));
    }

    (0, _createClass3.default)(TabBarLabel, [{
        key: 'render',
        value: function render() {
            var _props = this.props,
                children = _props.children,
                className = _props.className,
                others = (0, _objectWithoutProperties3.default)(_props, ['children', 'className']);

            var cls = (0, _classnames2.default)({
                'weui-tabbar__label': true
            }, className);

            return _react2.default.createElement(
                'p',
                (0, _extends3.default)({ className: cls }, others),
                children
            );
        }
    }]);
    return TabBarLabel;
}(_react2.default.Component);

exports.default = TabBarLabel;
module.exports = exports['default'];

/***/ }),

/***/ "./node_modules/react-weui/build/packages/components/toast/index.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _toast = __webpack_require__("./node_modules/react-weui/build/packages/components/toast/toast.js");

var _toast2 = _interopRequireDefault(_toast);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = _toast2.default;
module.exports = exports['default'];

/***/ }),

/***/ "./node_modules/react-weui/build/packages/components/toast/toast.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _extends2 = __webpack_require__("./node_modules/babel-runtime/helpers/extends.js");

var _extends3 = _interopRequireDefault(_extends2);

var _defineProperty2 = __webpack_require__("./node_modules/babel-runtime/helpers/defineProperty.js");

var _defineProperty3 = _interopRequireDefault(_defineProperty2);

var _objectWithoutProperties2 = __webpack_require__("./node_modules/babel-runtime/helpers/objectWithoutProperties.js");

var _objectWithoutProperties3 = _interopRequireDefault(_objectWithoutProperties2);

var _getPrototypeOf = __webpack_require__("./node_modules/babel-runtime/core-js/object/get-prototype-of.js");

var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

var _classCallCheck2 = __webpack_require__("./node_modules/babel-runtime/helpers/classCallCheck.js");

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = __webpack_require__("./node_modules/babel-runtime/helpers/createClass.js");

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = __webpack_require__("./node_modules/babel-runtime/helpers/possibleConstructorReturn.js");

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = __webpack_require__("./node_modules/babel-runtime/helpers/inherits.js");

var _inherits3 = _interopRequireDefault(_inherits2);

var _react = __webpack_require__("./node_modules/react/react.js");

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__("./node_modules/prop-types/index.js");

var _propTypes2 = _interopRequireDefault(_propTypes);

var _classnames = __webpack_require__("./node_modules/react-weui/build/packages/utils/classnames.js");

var _classnames2 = _interopRequireDefault(_classnames);

var _index = __webpack_require__("./node_modules/react-weui/build/packages/components/mask/index.js");

var _index2 = _interopRequireDefault(_index);

var _index3 = __webpack_require__("./node_modules/react-weui/build/packages/components/icon/index.js");

var _index4 = _interopRequireDefault(_index3);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 *  pop out indicator to inform users
 *
 */
var Toast = function (_Component) {
    (0, _inherits3.default)(Toast, _Component);

    function Toast() {
        (0, _classCallCheck3.default)(this, Toast);
        return (0, _possibleConstructorReturn3.default)(this, (Toast.__proto__ || (0, _getPrototypeOf2.default)(Toast)).apply(this, arguments));
    }

    (0, _createClass3.default)(Toast, [{
        key: 'render',
        value: function render() {
            var _props = this.props,
                className = _props.className,
                icon = _props.icon,
                show = _props.show,
                children = _props.children,
                iconSize = _props.iconSize,
                others = (0, _objectWithoutProperties3.default)(_props, ['className', 'icon', 'show', 'children', 'iconSize']);

            var cls = (0, _classnames2.default)('weui-toast', (0, _defineProperty3.default)({}, className, className));
            return _react2.default.createElement(
                'div',
                { style: { display: show ? 'block' : 'none' } },
                _react2.default.createElement(_index2.default, { transparent: true }),
                _react2.default.createElement(
                    'div',
                    (0, _extends3.default)({ className: cls }, others),
                    _react2.default.createElement(_index4.default, { value: icon, size: iconSize, className: 'weui-icon_toast' }),
                    _react2.default.createElement(
                        'p',
                        { className: 'weui-toast_content' },
                        children
                    )
                )
            );
        }
    }]);
    return Toast;
}(_react.Component);

Toast.propTypes = {
    /**
     * Icon Value
     *
     */
    icon: _propTypes2.default.string,
    /**
     * Icon Size
     *
     */
    iconSize: _propTypes2.default.string,
    /**
     * display toast
     *
     */
    show: _propTypes2.default.bool
};
Toast.defaultProps = {
    icon: 'toast',
    show: false
};
exports.default = Toast;
module.exports = exports['default'];

/***/ }),

/***/ "./node_modules/react-weui/build/packages/components/toptips/index.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _toptips = __webpack_require__("./node_modules/react-weui/build/packages/components/toptips/toptips.js");

var _toptips2 = _interopRequireDefault(_toptips);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = _toptips2.default;
module.exports = exports['default'];

/***/ }),

/***/ "./node_modules/react-weui/build/packages/components/toptips/toptips.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _extends2 = __webpack_require__("./node_modules/babel-runtime/helpers/extends.js");

var _extends3 = _interopRequireDefault(_extends2);

var _defineProperty2 = __webpack_require__("./node_modules/babel-runtime/helpers/defineProperty.js");

var _defineProperty3 = _interopRequireDefault(_defineProperty2);

var _objectWithoutProperties2 = __webpack_require__("./node_modules/babel-runtime/helpers/objectWithoutProperties.js");

var _objectWithoutProperties3 = _interopRequireDefault(_objectWithoutProperties2);

var _react = __webpack_require__("./node_modules/react/react.js");

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__("./node_modules/prop-types/index.js");

var _propTypes2 = _interopRequireDefault(_propTypes);

var _classnames = __webpack_require__("./node_modules/react-weui/build/packages/utils/classnames.js");

var _classnames2 = _interopRequireDefault(_classnames);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 *  Drop down message from top
 *
 */
var Toptips = function Toptips(props) {
    var _classNames;

    var className = props.className,
        type = props.type,
        children = props.children,
        show = props.show,
        others = (0, _objectWithoutProperties3.default)(props, ['className', 'type', 'children', 'show']);

    var cls = (0, _classnames2.default)((_classNames = {
        'weui-toptips': true
    }, (0, _defineProperty3.default)(_classNames, 'weui-toptips_' + type, true), (0, _defineProperty3.default)(_classNames, className, className), _classNames));

    return _react2.default.createElement(
        'div',
        (0, _extends3.default)({ className: cls }, others, { style: { display: show ? 'block' : 'none' } }),
        children
    );
};

Toptips.propTypes = {
    /**
     * display tips
     *
     */
    show: _propTypes2.default.bool,
    /**
     * type: `default`, `warn`, `info`, `primary`
     */
    type: _propTypes2.default.string
};

Toptips.defaultProps = {
    show: false,
    type: 'default'
};

exports.default = Toptips;
module.exports = exports['default'];

/***/ }),

/***/ "./node_modules/react-weui/build/packages/index.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _version = __webpack_require__("./node_modules/react-weui/build/packages/version.js");

var _version2 = _interopRequireDefault(_version);

var _index = __webpack_require__("./node_modules/react-weui/build/packages/components/button/index.js");

var _index2 = __webpack_require__("./node_modules/react-weui/build/packages/components/cell/index.js");

var _index3 = __webpack_require__("./node_modules/react-weui/build/packages/components/mask/index.js");

var _index4 = _interopRequireDefault(_index3);

var _index5 = __webpack_require__("./node_modules/react-weui/build/packages/components/form/index.js");

var _index6 = __webpack_require__("./node_modules/react-weui/build/packages/components/label/index.js");

var _index7 = _interopRequireDefault(_index6);

var _index8 = __webpack_require__("./node_modules/react-weui/build/packages/components/toast/index.js");

var _index9 = _interopRequireDefault(_index8);

var _index10 = __webpack_require__("./node_modules/react-weui/build/packages/components/progress/index.js");

var _index11 = _interopRequireDefault(_index10);

var _index12 = __webpack_require__("./node_modules/react-weui/build/packages/components/actionsheet/index.js");

var _index13 = _interopRequireDefault(_index12);

var _index14 = __webpack_require__("./node_modules/react-weui/build/packages/components/dialog/index.js");

var _index15 = _interopRequireDefault(_index14);

var _index16 = __webpack_require__("./node_modules/react-weui/build/packages/components/msg/index.js");

var _index17 = _interopRequireDefault(_index16);

var _index18 = __webpack_require__("./node_modules/react-weui/build/packages/components/article/index.js");

var _index19 = _interopRequireDefault(_index18);

var _index20 = __webpack_require__("./node_modules/react-weui/build/packages/components/icon/index.js");

var _index21 = _interopRequireDefault(_index20);

var _index22 = __webpack_require__("./node_modules/react-weui/build/packages/components/grid/index.js");

var _index23 = __webpack_require__("./node_modules/react-weui/build/packages/components/panel/index.js");

var _index24 = __webpack_require__("./node_modules/react-weui/build/packages/components/mediabox/index.js");

var _index25 = __webpack_require__("./node_modules/react-weui/build/packages/components/tab/index.js");

var _index26 = __webpack_require__("./node_modules/react-weui/build/packages/components/searchbar/index.js");

var _index27 = _interopRequireDefault(_index26);

var _index28 = __webpack_require__("./node_modules/react-weui/build/packages/components/flex/index.js");

var _toptips = __webpack_require__("./node_modules/react-weui/build/packages/components/toptips/index.js");

var _toptips2 = _interopRequireDefault(_toptips);

var _gallery = __webpack_require__("./node_modules/react-weui/build/packages/components/gallery/index.js");

var _footer = __webpack_require__("./node_modules/react-weui/build/packages/components/footer/index.js");

var _loadmore = __webpack_require__("./node_modules/react-weui/build/packages/components/loadmore/index.js");

var _loadmore2 = _interopRequireDefault(_loadmore);

var _picker = __webpack_require__("./node_modules/react-weui/build/packages/components/picker/index.js");

var _badge = __webpack_require__("./node_modules/react-weui/build/packages/components/badge/index.js");

var _badge2 = _interopRequireDefault(_badge);

var _popup = __webpack_require__("./node_modules/react-weui/build/packages/components/popup/index.js");

var _ptr = __webpack_require__("./node_modules/react-weui/build/packages/components/ptr/index.js");

var _ptr2 = _interopRequireDefault(_ptr);

var _infiniteloader = __webpack_require__("./node_modules/react-weui/build/packages/components/infiniteloader/index.js");

var _infiniteloader2 = _interopRequireDefault(_infiniteloader);

var _swiper = __webpack_require__("./node_modules/react-weui/build/packages/components/swiper/index.js");

var _swiper2 = _interopRequireDefault(_swiper);

var _page = __webpack_require__("./node_modules/react-weui/build/packages/components/page/index.js");

var _page2 = _interopRequireDefault(_page);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

//1.0.0 components
/**
 * Created by jf on 15/10/27.
 */
exports.default = {
    version: _version2.default,

    //0.4.x
    Button: _index.Button,
    ButtonArea: _index.ButtonArea,
    Cells: _index2.Cells,
    CellsTitle: _index2.CellsTitle,
    CellsTips: _index2.CellsTips,
    Cell: _index2.Cell,
    CellHeader: _index2.CellHeader,
    CellBody: _index2.CellBody,
    CellFooter: _index2.CellFooter,
    Mask: _index4.default,
    Form: _index5.Form,
    FormCell: _index5.FormCell,
    Radio: _index5.Radio,
    Checkbox: _index5.Checkbox,
    Input: _index5.Input,
    TextArea: _index5.TextArea,
    Switch: _index5.Switch,
    Select: _index5.Select,
    Uploader: _index5.Uploader,
    Label: _index7.default,
    Toast: _index9.default,
    Progress: _index11.default,
    ActionSheet: _index13.default,
    Dialog: _index15.default,
    Msg: _index17.default,
    Article: _index19.default,
    Icon: _index21.default,
    Grids: _index22.Grids,
    Grid: _index22.Grid,
    GridIcon: _index22.GridIcon,
    GridLabel: _index22.GridLabel,
    Panel: _index23.Panel,
    PanelHeader: _index23.PanelHeader,
    PanelBody: _index23.PanelBody,
    PanelFooter: _index23.PanelFooter,
    MediaBox: _index24.MediaBox,
    MediaBoxHeader: _index24.MediaBoxHeader,
    MediaBoxBody: _index24.MediaBoxBody,
    MediaBoxTitle: _index24.MediaBoxTitle,
    MediaBoxDescription: _index24.MediaBoxDescription,
    MediaBoxInfo: _index24.MediaBoxInfo,
    MediaBoxInfoMeta: _index24.MediaBoxInfoMeta,
    NavBar: _index25.NavBar,
    NavBarItem: _index25.NavBarItem,
    Tab: _index25.Tab,
    TabBody: _index25.TabBody,
    TabBodyItem: _index25.TabBodyItem,
    TabBar: _index25.TabBar,
    TabBarIcon: _index25.TabBarIcon,
    TabBarItem: _index25.TabBarItem,
    TabBarLabel: _index25.TabBarLabel,
    SearchBar: _index27.default,

    //1.0.0
    Flex: _index28.Flex,
    FlexItem: _index28.FlexItem,
    VCode: _index5.VCode,
    Agreement: _index5.Agreement,
    Toptips: _toptips2.default,
    Gallery: _gallery.Gallery,
    GalleryDelete: _gallery.GalleryDelete,
    Footer: _footer.Footer,
    FooterText: _footer.FooterText,
    FooterLinks: _footer.FooterLinks,
    FooterLink: _footer.FooterLink,
    LoadMore: _loadmore2.default,
    Preview: _index5.Preview,
    PreviewHeader: _index5.PreviewHeader,
    PreviewBody: _index5.PreviewBody,
    PreviewFooter: _index5.PreviewFooter,
    PreviewItem: _index5.PreviewItem,
    PreviewButton: _index.PreviewButton,
    Picker: _picker.Picker,
    PickerGroup: _picker.PickerGroup,
    CityPicker: _picker.CityPicker,
    Slider: _index5.Slider,
    Badge: _badge2.default,

    //non-standard
    Popup: _popup.Popup,
    PopupHeader: _popup.PopupHeader,
    PullToRefresh: _ptr2.default,
    InfiniteLoader: _infiniteloader2.default,
    Swiper: _swiper2.default,
    Page: _page2.default
};
//non standard


//0.4.x components

module.exports = exports['default'];

/***/ }),

/***/ "./node_modules/react-weui/build/packages/utils/classnames.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});

var _typeof2 = __webpack_require__("./node_modules/babel-runtime/helpers/typeof.js");

var _typeof3 = _interopRequireDefault(_typeof2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/*!
  Copyright (c) 2017 Jed Watson.
  Licensed under the MIT License (MIT), see
  http://jedwatson.github.io/classnames

  with fix with es6 export default
*/

var hasOwn = {}.hasOwnProperty;

function classNames() {
	var classes = [];

	for (var i = 0; i < arguments.length; i++) {
		var arg = arguments[i];
		if (!arg) continue;

		var argType = typeof arg === 'undefined' ? 'undefined' : (0, _typeof3.default)(arg);

		if (argType === 'string' || argType === 'number') {
			classes.push(arg);
		} else if (Array.isArray(arg)) {
			classes.push(classNames.apply(null, arg));
		} else if (argType === 'object') {
			for (var key in arg) {
				if (hasOwn.call(arg, key) && arg[key]) {
					classes.push(key);
				}
			}
		}
	}

	return classes.join(' ');
}

exports.default = classNames;
module.exports = exports['default'];

/***/ }),

/***/ "./node_modules/react-weui/build/packages/utils/deprecationWarning.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(global) {

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = deprecationWarning;
/**
 * Copyright 2014-2015, Facebook, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 */
var __DEV__ = "production" !== 'production';

var warning = function warning() {};

if (__DEV__) {
  warning = function warning(condition, format, args) {
    var len = arguments.length;
    args = new Array(len > 2 ? len - 2 : 0);
    for (var key = 2; key < len; key++) {
      args[key - 2] = arguments[key];
    }
    if (format === undefined) {
      throw new Error('`warning(condition, format, ...args)` requires a warning ' + 'message argument');
    }

    if (format.length < 10 || /^[s\W]*$/.test(format)) {
      throw new Error('The warning format should be able to uniquely identify this ' + 'warning. Please, use a more descriptive format than: ' + format);
    }

    if (!condition) {
      var argIndex = 0;
      var message = 'Warning: ' + format.replace(/%s/g, function () {
        return args[argIndex++];
      });
      if (typeof console !== 'undefined') {
        console.error(message);
      }
      try {
        // This error was thrown as a convenience so that you can use this stack
        // to find the callsite that caused this warning to fire.
        throw new Error(message);
      } catch (x) {}
    }
  };
}

var warned = {};

function deprecationWarning(oldname, newname, link) {
  //avoid test warnings
  if (typeof global.it === 'function') {
    return;
  }

  var warnKey = oldname + '\n' + newname;
  if (warned[warnKey]) {
    return;
  }

  var message = '[React-WeUI] ' + oldname + ' is deprecated. Use ' + newname + ' instead. ' + oldname + ' will be remove in the next major version.';

  if (link) {
    message += '\nYou can read more about it at \n' + link;
  }

  warning(false, message);
  warned[warnKey] = true;
}
module.exports = exports['default'];
/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__("./node_modules/webpack/buildin/global.js")))

/***/ }),

/***/ "./node_modules/react-weui/build/packages/version.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = '1.1.0';
module.exports = exports['default'];

/***/ }),

/***/ "./node_modules/weui.js/dist/weui.min.js":
/***/ (function(module, exports, __webpack_require__) {

/*!
 * weui.js v1.1.2 (https://weui.io)
 * Copyright 2017, wechat ui team
 * MIT license
 */
!function(e,t){ true?module.exports=t():"function"==typeof define&&define.amd?define([],t):"object"==typeof exports?exports.weui=t():e.weui=t()}(this,function(){return function(e){function t(i){if(n[i])return n[i].exports;var o=n[i]={exports:{},id:i,loaded:!1};return e[i].call(o.exports,o,o.exports,t),o.loaded=!0,o.exports}var n={};return t.m=e,t.c=n,t.p="",t(0)}([function(e,t,n){"use strict";function i(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0});var o=n(1),a=i(o),r=n(7),u=i(r),l=n(8),s=i(l),d=n(9),f=i(d),c=n(11),p=i(c),h=n(13),v=i(h),m=n(15),y=i(m),w=n(17),g=i(w),_=n(18),b=i(_),k=n(19),x=i(k),C=n(20),M=i(C),j=n(24),E=n(30),S=i(E),O=n(32),P=i(O);t.default={dialog:a.default,alert:u.default,confirm:s.default,toast:f.default,loading:p.default,actionSheet:v.default,topTips:y.default,searchBar:g.default,tab:b.default,form:x.default,uploader:M.default,picker:j.picker,datePicker:j.datePicker,gallery:S.default,slider:P.default},e.exports=t.default},function(e,t,n){"use strict";function i(e){return e&&e.__esModule?e:{default:e}}function o(){function e(t){e=r.default.noop,u.addClass("weui-animate-fade-out"),a.addClass("weui-animate-fade-out").on("animationend webkitAnimationEnd",function(){o.remove(),s=!1,t&&t()})}function t(t){e(t)}var n=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};if(s)return s;var i=r.default.os.android;n=r.default.extend({title:null,content:"",className:"",buttons:[{label:"确定",type:"primary",onClick:r.default.noop}],isAndroid:i},n);var o=(0,r.default)(r.default.render(l.default,n)),a=o.find(".weui-dialog"),u=o.find(".weui-mask");return(0,r.default)("body").append(o),u.addClass("weui-animate-fade-in"),a.addClass("weui-animate-fade-in"),o.on("click",".weui-dialog__btn",function(e){var i=(0,r.default)(this).index();n.buttons[i].onClick?n.buttons[i].onClick.call(this,e)!==!1&&t():t()}),s=o[0],s.hide=t,s}Object.defineProperty(t,"__esModule",{value:!0});var a=n(2),r=i(a),u=n(6),l=i(u),s=void 0;t.default=o,e.exports=t.default},function(e,t,n){"use strict";function i(e){return e&&e.__esModule?e:{default:e}}function o(e){var t=this.os={},n=e.match(/(Android);?[\s\/]+([\d.]+)?/);n&&(t.android=!0,t.version=n[2])}Object.defineProperty(t,"__esModule",{value:!0});var a="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e};n(3);var r=n(4),u=i(r),l=n(5),s=i(l);o.call(s.default,navigator.userAgent),(0,u.default)(s.default.fn,{append:function(e){return e instanceof HTMLElement||(e=e[0]),this.forEach(function(t){t.appendChild(e)}),this},remove:function(){return this.forEach(function(e){e.parentNode.removeChild(e)}),this},find:function(e){return(0,s.default)(e,this)},addClass:function(e){return this.forEach(function(t){t.classList.add(e)}),this},removeClass:function(e){return this.forEach(function(t){t.classList.remove(e)}),this},eq:function(e){return(0,s.default)(this[e])},show:function(){return this.forEach(function(e){e.style.display="block"}),this},hide:function(){return this.forEach(function(e){e.style.display="none"}),this},html:function(e){return this.forEach(function(t){t.innerHTML=e}),this},css:function(e){var t=this;return Object.keys(e).forEach(function(n){t.forEach(function(t){t.style[n]=e[n]})}),this},on:function(e,t,n){var i="string"==typeof t&&"function"==typeof n;return i||(n=t),this.forEach(function(o){e.split(" ").forEach(function(e){o.addEventListener(e,function(e){i?this.contains(e.target.closest(t))&&n.call(e.target,e):n.call(this,e)})})}),this},off:function(e,t,n){return"function"==typeof t&&(n=t,t=null),this.forEach(function(i){e.split(" ").forEach(function(e){"string"==typeof t?i.querySelectorAll(t).forEach(function(t){t.removeEventListener(e,n)}):i.removeEventListener(e,n)})}),this},index:function(){var e=this[0],t=e.parentNode;return Array.prototype.indexOf.call(t.children,e)},offAll:function(){var e=this;return this.forEach(function(t,n){var i=t.cloneNode(!0);t.parentNode.replaceChild(i,t),e[n]=i}),this},val:function(){var e=arguments;return arguments.length?(this.forEach(function(t){t.value=e[0]}),this):this[0].value},attr:function(){var e=arguments,t=this;if("object"==a(arguments[0])){var n=function(){var n=e[0],i=t;return Object.keys(n).forEach(function(e){i.forEach(function(t){t.setAttribute(e,n[e])})}),{v:t}}();if("object"===("undefined"==typeof n?"undefined":a(n)))return n.v}return"string"==typeof arguments[0]&&arguments.length<2?this[0].getAttribute(arguments[0]):(this.forEach(function(t){t.setAttribute(e[0],e[1])}),this)}}),(0,u.default)(s.default,{extend:u.default,noop:function(){},render:function(e,t){var n="var p=[];with(this){p.push('"+e.replace(/[\r\t\n]/g," ").split("<%").join("\t").replace(/((^|%>)[^\t]*)'/g,"$1\r").replace(/\t=(.*?)%>/g,"',$1,'").split("\t").join("');").split("%>").join("p.push('").split("\r").join("\\'")+"');}return p.join('');";return new Function(n).apply(t)},getStyle:function(e,t){var n,i=(e.ownerDocument||document).defaultView;return i&&i.getComputedStyle?(t=t.replace(/([A-Z])/g,"-$1").toLowerCase(),i.getComputedStyle(e,null).getPropertyValue(t)):e.currentStyle?(t=t.replace(/\-(\w)/g,function(e,t){return t.toUpperCase()}),n=e.currentStyle[t],/^\d+(em|pt|%|ex)?$/i.test(n)?function(t){var n=e.style.left,i=e.runtimeStyle.left;return e.runtimeStyle.left=e.currentStyle.left,e.style.left=t||0,t=e.style.pixelLeft+"px",e.style.left=n,e.runtimeStyle.left=i,t}(n):n):void 0}}),t.default=s.default,e.exports=t.default},function(e,t){!function(e){"function"!=typeof e.matches&&(e.matches=e.msMatchesSelector||e.mozMatchesSelector||e.webkitMatchesSelector||function(e){for(var t=this,n=(t.document||t.ownerDocument).querySelectorAll(e),i=0;n[i]&&n[i]!==t;)++i;return Boolean(n[i])}),"function"!=typeof e.closest&&(e.closest=function(e){for(var t=this;t&&1===t.nodeType;){if(t.matches(e))return t;t=t.parentNode}return null})}(window.Element.prototype)},function(e,t){"use strict";function n(e){if(null===e||void 0===e)throw new TypeError("Object.assign cannot be called with null or undefined");return Object(e)}function i(){try{if(!Object.assign)return!1;var e=new String("abc");if(e[5]="de","5"===Object.getOwnPropertyNames(e)[0])return!1;for(var t={},n=0;n<10;n++)t["_"+String.fromCharCode(n)]=n;var i=Object.getOwnPropertyNames(t).map(function(e){return t[e]});if("0123456789"!==i.join(""))return!1;var o={};return"abcdefghijklmnopqrst".split("").forEach(function(e){o[e]=e}),"abcdefghijklmnopqrst"===Object.keys(Object.assign({},o)).join("")}catch(e){return!1}}var o=Object.prototype.hasOwnProperty,a=Object.prototype.propertyIsEnumerable;e.exports=i()?Object.assign:function(e,t){for(var i,r,u=n(e),l=1;l<arguments.length;l++){i=Object(arguments[l]);for(var s in i)o.call(i,s)&&(u[s]=i[s]);if(Object.getOwnPropertySymbols){r=Object.getOwnPropertySymbols(i);for(var d=0;d<r.length;d++)a.call(i,r[d])&&(u[r[d]]=i[r[d]])}}return u}},function(e,t,n){var i,o;!function(n,a){a=function(e,t,n){function i(o,a,r){return r=Object.create(i.fn),o&&r.push.apply(r,o[t]?[o]:""+o===o?/</.test(o)?((a=e.createElement(a||t)).innerHTML=o,a.children):a?(a=i(a)[0])?a[n](o):r:e[n](o):"function"==typeof o?e.readyState[7]?o():e[t]("DOMContentLoaded",o):o),r}return i.fn=[],i.one=function(e,t){return i(e,t)[0]||null},i}(document,"addEventListener","querySelectorAll"),i=[],o=function(){return a}.apply(t,i),!(void 0!==o&&(e.exports=o))}(this)},function(e,t){e.exports='<div class="<%=className%>"> <div class=weui-mask></div> <div class="weui-dialog <% if(isAndroid){ %> weui-skin_android <% } %>"> <% if(title){ %> <div class=weui-dialog__hd><strong class=weui-dialog__title><%=title%></strong></div> <% } %> <div class=weui-dialog__bd><%=content%></div> <div class=weui-dialog__ft> <% for(var i = 0; i < buttons.length; i++){ %> <a href=javascript:; class="weui-dialog__btn weui-dialog__btn_<%=buttons[i][\'type\']%>"><%=buttons[i][\'label\']%></a> <% } %> </div> </div> </div> '},function(e,t,n){"use strict";function i(e){return e&&e.__esModule?e:{default:e}}function o(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"",t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:u.default.noop,n=arguments[2];return"object"===("undefined"==typeof t?"undefined":a(t))&&(n=t,t=u.default.noop),n=u.default.extend({content:e,buttons:[{label:"确定",type:"primary",onClick:t}]},n),(0,s.default)(n)}Object.defineProperty(t,"__esModule",{value:!0});var a="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},r=n(2),u=i(r),l=n(1),s=i(l);t.default=o,e.exports=t.default},function(e,t,n){"use strict";function i(e){return e&&e.__esModule?e:{default:e}}function o(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"",t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:u.default.noop,n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:u.default.noop,i=arguments[3];return"object"===("undefined"==typeof t?"undefined":a(t))?(i=t,t=u.default.noop):"object"===("undefined"==typeof n?"undefined":a(n))&&(i=n,n=u.default.noop),i=u.default.extend({content:e,buttons:[{label:"取消",type:"default",onClick:n},{label:"确定",type:"primary",onClick:t}]},i),(0,s.default)(i)}Object.defineProperty(t,"__esModule",{value:!0});var a="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},r=n(2),u=i(r),l=n(1),s=i(l);t.default=o,e.exports=t.default},function(e,t,n){"use strict";function i(e){return e&&e.__esModule?e:{default:e}}function o(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"",t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};if(s)return s;"number"==typeof t&&(t={duration:t}),"function"==typeof t&&(t={callback:t}),t=r.default.extend({content:e,duration:3e3,callback:r.default.noop,className:""},t);var n=(0,r.default)(r.default.render(l.default,t)),i=n.find(".weui-toast"),o=n.find(".weui-mask");return(0,r.default)("body").append(n),i.addClass("weui-animate-fade-in"),o.addClass("weui-animate-fade-in"),setTimeout(function(){o.addClass("weui-animate-fade-out"),i.addClass("weui-animate-fade-out").on("animationend webkitAnimationEnd",function(){n.remove(),s=!1,t.callback()})},t.duration),s=n[0],n[0]}Object.defineProperty(t,"__esModule",{value:!0});var a=n(2),r=i(a),u=n(10),l=i(u),s=void 0;t.default=o,e.exports=t.default},function(e,t){e.exports='<div class="<%= className %>"> <div class=weui-mask_transparent></div> <div class=weui-toast> <i class="weui-icon_toast weui-icon-success-no-circle"></i> <p class=weui-toast__content><%=content%></p> </div> </div> '},function(e,t,n){"use strict";function i(e){return e&&e.__esModule?e:{default:e}}function o(){function e(t){e=r.default.noop,u.addClass("weui-animate-fade-out"),a.addClass("weui-animate-fade-out").on("animationend webkitAnimationEnd",function(){o.remove(),s=!1,t&&t()})}function t(t){e(t)}var n=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"",i=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};if(s)return s;i=r.default.extend({content:n,className:""},i);var o=(0,r.default)(r.default.render(l.default,i)),a=o.find(".weui-toast"),u=o.find(".weui-mask");return(0,r.default)("body").append(o),a.addClass("weui-animate-fade-in"),u.addClass("weui-animate-fade-in"),s=o[0],s.hide=t,s}Object.defineProperty(t,"__esModule",{value:!0});var a=n(2),r=i(a),u=n(12),l=i(u),s=void 0;t.default=o,e.exports=t.default},function(e,t){e.exports='<div class="weui-loading_toast <%= className %>"> <div class=weui-mask_transparent></div> <div class=weui-toast> <i class="weui-loading weui-icon_toast"></i> <p class=weui-toast__content><%=content%></p> </div> </div> '},function(e,t,n){"use strict";function i(e){return e&&e.__esModule?e:{default:e}}function o(){function e(t){e=r.default.noop,d.addClass(o.isAndroid?"weui-animate-fade-out":"weui-animate-slide-down"),f.addClass("weui-animate-fade-out").on("animationend webkitAnimationEnd",function(){u.remove(),s=!1,o.onClose(),t&&t()})}function t(t){e(t)}var n=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[],i=arguments.length>1&&void 0!==arguments[1]?arguments[1]:[],o=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{};if(s)return s;var a=r.default.os.android;o=r.default.extend({menus:n,actions:i,className:"",isAndroid:a,onClose:r.default.noop},o);var u=(0,r.default)(r.default.render(l.default,o)),d=u.find(".weui-actionsheet"),f=u.find(".weui-mask");return(0,r.default)("body").append(u),r.default.getStyle(d[0],"transform"),d.addClass(o.isAndroid?"weui-animate-fade-in":"weui-animate-slide-up"),f.addClass("weui-animate-fade-in").on("click",function(){t()}),u.find(".weui-actionsheet__menu").on("click",".weui-actionsheet__cell",function(e){var i=(0,r.default)(this).index();n[i].onClick.call(this,e),t()}),u.find(".weui-actionsheet__action").on("click",".weui-actionsheet__cell",function(e){var n=(0,r.default)(this).index();i[n].onClick.call(this,e),t()}),s=u[0],s.hide=t,s}Object.defineProperty(t,"__esModule",{value:!0});var a=n(2),r=i(a),u=n(14),l=i(u),s=void 0;t.default=o,e.exports=t.default},function(e,t){e.exports='<div class="<% if(isAndroid){ %>weui-skin_android <% } %><%= className %>"> <div class=weui-mask></div> <div class=weui-actionsheet> <div class=weui-actionsheet__menu> <% for(var i = 0; i < menus.length; i++){ %> <div class=weui-actionsheet__cell><%= menus[i].label %></div> <% } %> </div> <div class=weui-actionsheet__action> <% for(var j = 0; j < actions.length; j++){ %> <div class=weui-actionsheet__cell><%= actions[j].label %></div> <% } %> </div> </div> </div> '},function(e,t,n){"use strict";function i(e){return e&&e.__esModule?e:{default:e}}function o(e){function t(e){t=r.default.noop,o.remove(),e&&e(),i.callback(),s=null}function n(e){t(e)}var i=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};"number"==typeof i&&(i={duration:i}),"function"==typeof i&&(i={callback:i}),i=r.default.extend({content:e,duration:3e3,callback:r.default.noop,className:""},i);var o=(0,r.default)(r.default.render(l.default,i));return(0,r.default)("body").append(o),s&&(clearTimeout(s.timeout),s.hide()),s={hide:n},s.timeout=setTimeout(n,i.duration),o[0].hide=n,o[0]}Object.defineProperty(t,"__esModule",{value:!0});var a=n(2),r=i(a),u=n(16),l=i(u),s=null;t.default=o,e.exports=t.default},function(e,t){e.exports='<div class="weui-toptips weui-toptips_warn <%= className %>" style=display:block><%= content %></div> '},function(e,t,n){"use strict";function i(e){return e&&e.__esModule?e:{default:e}}function o(e){var t=(0,r.default)(e);return t.forEach(function(e){function t(){o.val(""),n.removeClass("weui-search-bar_focusing")}var n=(0,r.default)(e),i=n.find(".weui-search-bar__label"),o=n.find(".weui-search-bar__input"),a=n.find(".weui-icon-clear"),u=n.find(".weui-search-bar__cancel-btn");i.on("click",function(){n.addClass("weui-search-bar_focusing"),o[0].focus()}),o.on("blur",function(){this.value.length||t()}),a.on("click",function(){o.val(""),o[0].focus()}),u.on("click",function(){t(),o[0].blur()})}),t}Object.defineProperty(t,"__esModule",{value:!0});var a=n(2),r=i(a);t.default=o,e.exports=t.default},function(e,t,n){"use strict";function i(e){return e&&e.__esModule?e:{default:e}}function o(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},n=(0,r.default)(e);return t=r.default.extend({defaultIndex:0,onChange:r.default.noop},t),n.forEach(function(e){var n=(0,r.default)(e),i=n.find(".weui-navbar__item, .weui-tabbar__item"),o=n.find(".weui-tab__content");i.eq(t.defaultIndex).addClass("weui-bar__item_on"),o.eq(t.defaultIndex).show(),i.on("click",function(){var e=(0,r.default)(this),n=e.index();i.removeClass("weui-bar__item_on"),e.addClass("weui-bar__item_on"),o.hide(),o.eq(n).show(),t.onChange.call(this,n)})}),this}Object.defineProperty(t,"__esModule",{value:!0});var a=n(2),r=i(a);t.default=o,e.exports=t.default},function(e,t,n){"use strict";function i(e){return e&&e.__esModule?e:{default:e}}function o(e){return e&&e.classList?e.classList.contains("weui-cell")?e:o(e.parentNode):null}function a(e,t,n){var i=e[0],o=e.val();if("INPUT"==i.tagName||"TEXTAREA"==i.tagName){var a=i.getAttribute("pattern")||"";if("radio"==i.type){for(var r=t.find('input[type="radio"][name="'+i.name+'"]'),u=0,l=r.length;u<l;++u)if(r[u].checked)return null;return"empty"}if("checkbox"!=i.type){if(a){if(/^REG_/.test(a)){if(!n)throw"RegExp "+a+" is empty.";if(a=a.replace(/^REG_/,""),!n[a])throw"RegExp "+a+" has not found.";a=n[a]}return new RegExp(a).test(o)?null:e.val().length?"notMatch":"empty"}return e.val().length?null:"empty"}if(!a)return i.checked?null:"empty";var s=function(){var e=t.find('input[type="checkbox"][name="'+i.name+'"]'),n=a.replace(/[{\s}]/g,"").split(","),o=0;if(2!=n.length)throw i.outerHTML+" regexp is wrong.";return e.forEach(function(e){e.checked&&++o}),""===n[1]?o>=parseInt(n[0])?{v:null}:{v:0==o?"empty":"notMatch"}:parseInt(n[0])<=o&&o<=parseInt(n[1])?{v:null}:{v:0==o?"empty":"notMatch"}}();if("object"===("undefined"==typeof s?"undefined":d(s)))return s.v}else if(o.length)return null;return"empty"}function r(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:c.default.noop,n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{},i=(0,c.default)(e);return i.forEach(function(e){var i=(0,c.default)(e),o=i.find("[required]");"function"!=typeof t&&(t=l);for(var r=0,u=o.length;r<u;++r){var s=o.eq(r),d=a(s,i,n.regexp),f={ele:s[0],msg:d};if(d)return void(t(f)||l(f))}t(null)}),this}function u(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},n=(0,c.default)(e);return n.forEach(function(e){var n=(0,c.default)(e);n.find("[required]").on("blur",function(){if("checkbox"!=this.type&&"radio"!=this.type){var e=(0,c.default)(this);if(!(e.val().length<1)){var i=a(e,n,t.regexp);i&&l({ele:e[0],msg:i})}}}).on("focus",function(){s(this)})}),this}function l(e){if(e){var t=(0,c.default)(e.ele),n=e.msg,i=t.attr(n+"Tips")||t.attr("tips")||t.attr("placeholder");if(i&&(0,h.default)(i),"checkbox"==e.ele.type||"radio"==e.ele.type)return;var a=o(e.ele);a&&a.classList.add("weui-cell_warn")}}function s(e){var t=o(e);t&&t.classList.remove("weui-cell_warn")}Object.defineProperty(t,"__esModule",{value:!0});var d="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},f=n(2),c=i(f),p=n(15),h=i(p);t.default={showErrorTips:l,hideErrorTips:s,validate:r,checkIfBlur:u},e.exports=t.default},function(e,t,n){"use strict";function i(e){return e&&e.__esModule?e:{default:e}}function o(e,t){function n(e,t){var n=e.find('[data-id="'+t+'"]'),i=n.find(".weui-uploader__file-content");return i.length||(i=(0,r.default)('<div class="weui-uploader__file-content"></div>'),n.append(i)),n.addClass("weui-uploader__file_status"),i}function i(e,t){var n=e.find('[data-id="'+t+'"]').removeClass("weui-uploader__file_status");n.find(".weui-uploader__file-content").remove()}function o(e){e.url=u.createObjectURL(e),e.status="ready",e.upload=function(){(0,f.default)(r.default.extend({$uploader:a,file:e},t))},e.stop=function(){this.xhr.abort()},t.onQueued(e),t.auto&&e.upload()}var a=(0,r.default)(e),u=window.URL||window.webkitURL||window.mozURL;t=r.default.extend({url:"",auto:!0,type:"file",fileVal:"file",xhrFields:{},onBeforeQueued:r.default.noop,onQueued:r.default.noop,onBeforeSend:r.default.noop,onSuccess:r.default.noop,onProgress:r.default.noop,onError:r.default.noop},t),t.compress!==!1&&(t.compress=r.default.extend({width:1600,height:1600,quality:.8},t.compress)),t.onBeforeQueued&&!function(){var e=t.onBeforeQueued;t.onBeforeQueued=function(t,n){var i=e.call(t,n);if(i===!1)return!1;if(i!==!0){var o=(0,r.default)(r.default.render(l.default,{id:t.id}));a.find(".weui-uploader__files").append(o)}}}(),t.onQueued&&!function(){var e=t.onQueued;t.onQueued=function(n){if(!e.call(n)){var o=a.find('[data-id="'+n.id+'"]');o.css({backgroundImage:'url("'+(n.base64||n.url)+'")'}),t.auto||i(a,n.id)}}}(),t.onBeforeSend&&!function(){var e=t.onBeforeSend;t.onBeforeSend=function(t,n,i){var o=e.call(t,n,i);if(o===!1)return!1}}(),t.onSuccess&&!function(){var e=t.onSuccess;t.onSuccess=function(t,n){t.status="success",e.call(t,n)||i(a,t.id)}}(),t.onProgress&&!function(){var e=t.onProgress;t.onProgress=function(t,i){e.call(t,i)||n(a,t.id).html(i+"%")}}(),t.onError&&!function(){var e=t.onError;t.onError=function(t,i){t.status="fail",e.call(t,i)||n(a,t.id).html('<i class="weui-icon-warn"></i>')}}(),a.find('input[type="file"]').on("change",function(e){var n=e.target.files;0!==n.length&&(t.compress===!1&&"file"==t.type?Array.prototype.forEach.call(n,function(e){e.id=++c,t.onBeforeQueued(e,n)!==!1&&o(e)}):Array.prototype.forEach.call(n,function(e){e.id=++c,t.onBeforeQueued(e,n)!==!1&&(0,s.compress)(e,t,function(e){e&&o(e)})}),this.value="")})}Object.defineProperty(t,"__esModule",{value:!0});var a=n(2),r=i(a),u=n(21),l=i(u),s=n(22),d=n(23),f=i(d),c=0;t.default=o,e.exports=t.default},function(e,t){e.exports='<li class="weui-uploader__file weui-uploader__file_status" data-id="<%= id %>"> <div class=weui-uploader__file-content> <i class=weui-loading style=width:30px;height:30px></i> </div> </li> '},function(e,t){"use strict";function n(e){var t,n=e.naturalHeight,i=document.createElement("canvas");i.width=1,i.height=n;var o=i.getContext("2d");o.drawImage(e,0,0);try{t=o.getImageData(0,0,1,n).data}catch(e){return 1}for(var a=0,r=n,u=n;u>a;){var l=t[4*(u-1)+3];0===l?r=u:a=u,u=r+a>>1}var s=u/n;return 0===s?1:s}function i(e){for(var t=atob(e.split(",")[1]),n=new ArrayBuffer(t.length),i=new Uint8Array(n),o=0;o<t.length;o++)i[o]=t.charCodeAt(o);return n}function o(e){var t=e.split(",")[0].split(":")[1].split(";")[0],n=i(e);return new Blob([n],{type:t})}function a(e){var t=new DataView(e);if(65496!=t.getUint16(0,!1))return-2;for(var n=t.byteLength,i=2;i<n;){var o=t.getUint16(i,!1);if(i+=2,65505==o){if(1165519206!=t.getUint32(i+=2,!1))return-1;var a=18761==t.getUint16(i+=6,!1);i+=t.getUint32(i+4,a);var r=t.getUint16(i,a);i+=2;for(var u=0;u<r;u++)if(274==t.getUint16(i+12*u,a))return t.getUint16(i+12*u+8,a)}else{if(65280!=(65280&o))break;i+=t.getUint16(i,!1)}}return-1}function r(e,t,n){var i=e.width,o=e.height;switch(n>4&&(e.width=o,e.height=i),n){case 2:t.translate(i,0),t.scale(-1,1);break;case 3:t.translate(i,o),t.rotate(Math.PI);break;case 4:t.translate(0,o),t.scale(1,-1);break;case 5:t.rotate(.5*Math.PI),t.scale(1,-1);break;case 6:t.rotate(.5*Math.PI),t.translate(0,-o);break;case 7:t.rotate(.5*Math.PI),t.translate(i,-o),t.scale(-1,1);break;case 8:t.rotate(-.5*Math.PI),t.translate(-i,0)}}function u(e,t,u){var l=new FileReader;l.onload=function(l){if(t.compress===!1)return e.base64=l.target.result,void u(e);var s=new Image;s.onload=function(){var l=n(s),d=a(i(s.src)),f=document.createElement("canvas"),c=f.getContext("2d"),p=t.compress.width,h=t.compress.height,v=s.width,m=s.height,y=void 0;if(v<m&&m>h?(v=parseInt(h*s.width/s.height),m=h):v>=m&&v>p&&(m=parseInt(p*s.height/s.width),v=p),f.width=v,f.height=m,d>0&&r(f,c,d),c.drawImage(s,0,0,v,m/l),y=/image\/jpeg/.test(e.type)||/image\/jpg/.test(e.type)?f.toDataURL("image/jpeg",t.compress.quality):f.toDataURL(e.type),"file"==t.type)if(/;base64,null/.test(y)||/;base64,$/.test(y))u(e);else{var w=o(y);w.id=e.id,w.name=e.name,w.lastModified=e.lastModified,w.lastModifiedDate=e.lastModifiedDate,u(w)}else/;base64,null/.test(y)||/;base64,$/.test(y)?(t.onError(e,new Error("Compress fail, dataURL is "+y+".")),u()):(e.base64=y,u(e))},s.src=l.target.result},l.readAsDataURL(e)}Object.defineProperty(t,"__esModule",{value:!0}),t.default={compress:u},e.exports=t.default},function(e,t){"use strict";function n(e){var t=e.url,n=e.file,i=e.fileVal,o=e.onBeforeSend,a=e.onProgress,r=e.onError,u=e.onSuccess,l=e.xhrFields,s=n.name,d=n.type,f=n.lastModifiedDate,c={name:s,type:d,size:"file"==e.type?n.size:n.base64.length,lastModifiedDate:f},p={};if(o(n,c,p)!==!1){n.status="progress",a(n,0);var h=new FormData,v=new XMLHttpRequest;n.xhr=v,Object.keys(c).forEach(function(e){h.append(e,c[e])}),"file"==e.type?h.append(i,n,s):h.append(i,n.base64),v.onreadystatechange=function(){if(4==v.readyState)if(200==v.status)try{var e=JSON.parse(v.responseText);u(n,e)}catch(e){r(n,e)}else r(n,new Error("XMLHttpRequest response status is "+v.status))},v.upload.addEventListener("progress",function(e){if(0!=e.total){var t=100*Math.ceil(e.loaded/e.total);a(n,t)}},!1),v.open("POST",t),Object.keys(l).forEach(function(e){v[e]=l[e]}),Object.keys(p).forEach(function(e){v.setRequestHeader(e,p[e])}),v.send(h)}}Object.defineProperty(t,"__esModule",{value:!0}),t.default=n,e.exports=t.default},function(e,t,n){"use strict";function i(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&(t[n]=e[n]);return t.default=e,t}function o(e){return e&&e.__esModule?e:{default:e}}function a(e){"object"!=("undefined"==typeof e?"undefined":l(e))&&(e={label:e,value:e}),d.default.extend(this,e)}function r(){function e(){(0,d.default)(r.container).append(v),d.default.getStyle(v[0],"transform"),v.find(".weui-mask").addClass("weui-animate-fade-in"),v.find(".weui-picker").addClass("weui-animate-slide-up")}function t(e){t=d.default.noop,v.find(".weui-mask").addClass("weui-animate-fade-out"),v.find(".weui-picker").addClass("weui-animate-slide-down").on("animationend webkitAnimationEnd",function(){v.remove(),g=!1,r.onClose(),e&&e()})}function n(e){t(e)}function i(e,t){if(void 0===p[t]&&r.defaultValue&&void 0!==r.defaultValue[t]){var n=r.defaultValue[t],o=0,u=e.length;if("object"==l(e[o]))for(;o<u&&n!=e[o].value;++o);else for(;o<u&&n!=e[o];++o);o<u&&(p[t]=o)}v.find(".weui-picker__group").eq(t).scroll({items:e,temp:p[t],onChange:function(e,n){if(e?c[t]=new a(e):c[t]=null,p[t]=n,s)c.length==y&&r.onChange(c);else if(e.children&&e.children.length>0)v.find(".weui-picker__group").eq(t+1).show(),!s&&i(e.children,t+1);else{var o=v.find(".weui-picker__group");o.forEach(function(e,n){n>t&&(0,d.default)(e).hide()}),c.splice(t+1),r.onChange(c)}},onConfirm:r.onConfirm})}if(g)return g;var o=arguments[arguments.length-1],r=d.default.extend({id:"default",className:"",container:"body",onChange:d.default.noop,onConfirm:d.default.noop,onClose:d.default.noop},o),u=void 0,s=!1;if(arguments.length>2){var f=0;for(u=[];f<arguments.length-1;)u.push(arguments[f++]);s=!0}else u=arguments[0];_[r.id]=_[r.id]||[];for(var c=[],p=_[r.id],v=(0,d.default)(d.default.render(m.default,r)),y=o.depth||(s?u.length:h.depthOf(u[0])),b="",k=y;k--;)b+=w.default;return v.find(".weui-picker__bd").html(b),e(),s?u.forEach(function(e,t){i(e,t)}):i(u,0),v.on("click",".weui-mask",function(){n()}).on("click",".weui-picker__action",function(){n()}).on("click","#weui-picker-confirm",function(){r.onConfirm(c)}),g=v[0],g.hide=n,g}function u(e){var t=d.default.extend({id:"datePicker",onChange:d.default.noop,onConfirm:d.default.noop,start:2e3,end:2030,cron:"* * *"},e);"number"==typeof t.start?t.start=new Date(t.start+"/01/01"):"string"==typeof t.start&&(t.start=new Date(t.start.replace(/-/g,"/"))),"number"==typeof t.end?t.end=new Date(t.end+"/12/31"):"string"==typeof t.end&&(t.end=new Date(t.end.replace(/-/g,"/")));var n=function(e,t,n){for(var i=0,o=e.length;i<o;i++){var a=e[i];if(a[t]==n)return a}},i=[],o=c.default.parse(t.cron,t.start,t.end),a=void 0;do{a=o.next();var u=a.value.getFullYear(),l=a.value.getMonth()+1,s=a.value.getDate(),f=n(i,"value",u);f||(f={label:u+"年",value:u,children:[]},i.push(f));var p=n(f.children,"value",l);p||(p={label:l+"月",value:l,children:[]},f.children.push(p)),p.children.push({label:s+"日",value:s})}while(!a.done);return r(i,t)}Object.defineProperty(t,"__esModule",{value:!0});var l="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},s=n(2),d=o(s),f=n(25),c=o(f);n(26);var p=n(27),h=i(p),v=n(28),m=o(v),y=n(29),w=o(y);a.prototype.toString=function(){return this.value},a.prototype.valueOf=function(){return this.value};var g=void 0,_={};t.default={picker:r,datePicker:u},e.exports=t.default},function(e,t){"use strict";function n(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function i(e,t){var n=t[0],i=t[1],o=[],a=void 0;e=e.replace(/\*/g,n+"-"+i);for(var u=e.split(","),l=0,s=u.length;l<s;l++){var d=u[l];d.match(r)&&d.replace(r,function(e,t,r,u){u=parseInt(u)||1,t=Math.min(Math.max(n,~~Math.abs(t)),i),r=r?Math.min(i,~~Math.abs(r)):t,a=t;do o.push(a),a+=u;while(a<=r)})}return o}function o(e,t,n){var o=e.replace(/^\s\s*|\s\s*$/g,"").split(/\s+/),a=[];return o.forEach(function(e,t){var n=u[t];a.push(i(e,n))}),new l(a,t,n)}Object.defineProperty(t,"__esModule",{value:!0});var a=function(){function e(e,t){for(var n=0;n<t.length;n++){var i=t[n];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(e,i.key,i)}}return function(t,n,i){return n&&e(t.prototype,n),i&&e(t,i),t}}(),r=/^(\d+)(?:-(\d+))?(?:\/(\d+))?$/g,u=[[1,31],[1,12],[0,6]],l=function(){function e(t,i,o){n(this,e),this._dates=t[0],this._months=t[1],this._days=t[2],this._start=i,this._end=o,this._pointer=i}return a(e,[{key:"_findNext",value:function(){for(var e=void 0;;){if(this._end.getTime()-this._pointer.getTime()<0)throw new Error("out of range, end is "+this._end+", current is "+this._pointer);var t=this._pointer.getMonth(),n=this._pointer.getDate(),i=this._pointer.getDay();if(this._months.indexOf(t+1)!==-1)if(this._dates.indexOf(n)!==-1){if(this._days.indexOf(i)!==-1){e=new Date(this._pointer);break}this._pointer.setDate(n+1)}else this._pointer.setDate(n+1);else this._pointer.setMonth(t+1),this._pointer.setDate(1)}return e}},{key:"next",value:function(){var e=this._findNext();return this._pointer.setDate(this._pointer.getDate()+1),{value:e,done:!this.hasNext()}}},{key:"hasNext",value:function(){try{return this._findNext(),!0}catch(e){return!1}}}]),e}();t.default={parse:o},e.exports=t.default},function(e,t,n){"use strict";function i(e){return e&&e.__esModule?e:{default:e}}var o="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},a=n(2),r=i(a),u=function(e,t){return e.css({"-webkit-transition":"all "+t+"s",transition:"all "+t+"s"})},l=function(e,t){return e.css({"-webkit-transform":"translate3d(0, "+t+"px, 0)",transform:"translate3d(0, "+t+"px, 0)"})},s=function(e){for(var t=Math.floor(e.length/2),n=0;e[t]&&e[t].disabled;)if(t=++t%e.length,n++,n>e.length)throw new Error("No selectable item.");return t},d=function(e,t,n){var i=s(n);return(e-i)*t},f=function(e,t){return e*t},c=function(e,t,n){return-(t*(n-e-1))};r.default.fn.scroll=function(e){function t(e){y=e,g=+new Date}function n(e){w=e;var t=w-y;u(m,0),l(m,_+t),g=+new Date,b.push({time:g,y:w}),b.length>40&&b.shift()}function i(e){if(y){var t=(new Date).getTime(),n=k-p.bodyHeight/2;if(w=e,t-g>100)M(Math.abs(w-y)>10?w-y:n-w);else if(Math.abs(w-y)>10){for(var i=b.length-1,o=i,a=i;a>0&&g-b[a].time<100;a--)o=a;if(o!==i){var r=b[i],u=b[o],l=r.time-u.time,s=r.y-u.y,d=s/l,f=150*d+(w-y);M(f)}else M(0)}else M(n-w);y=null}}var a=this,p=r.default.extend({items:[],scrollable:".weui-picker__content",offset:3,rowHeight:34,onChange:r.default.noop,temp:null,bodyHeight:238},e),h=p.items.map(function(e){return'<div class="weui-picker__item'+(e.disabled?" weui-picker__item_disabled":"")+'">'+("object"==("undefined"==typeof e?"undefined":o(e))?e.label:e)+"</div>"}).join(""),v=(0,r.default)(this);v.find(".weui-picker__content").html(h);var m=v.find(p.scrollable),y=void 0,w=void 0,g=void 0,_=void 0,b=[],k=window.innerHeight;
if(null!==p.temp&&p.temp<p.items.length){var x=p.temp;p.onChange.call(this,p.items[x],x),_=(p.offset-x)*p.rowHeight}else{var C=s(p.items);p.onChange.call(this,p.items[C],C),_=d(p.offset,p.rowHeight,p.items)}l(m,_);var M=function(e){_+=e,_=Math.round(_/p.rowHeight)*p.rowHeight;var t=f(p.offset,p.rowHeight),n=c(p.offset,p.rowHeight,p.items.length);_>t&&(_=t),_<n&&(_=n);for(var i=p.offset-_/p.rowHeight;p.items[i]&&p.items[i].disabled;)e>0?++i:--i;_=(p.offset-i)*p.rowHeight,u(m,.3),l(m,_),p.onChange.call(a,p.items[i],i)};m=v.offAll().on("touchstart",function(e){t(e.changedTouches[0].pageY)}).on("touchmove",function(e){n(e.changedTouches[0].pageY),e.preventDefault()}).on("touchend",function(e){i(e.changedTouches[0].pageY)}).find(p.scrollable);var j="ontouchstart"in window||window.DocumentTouch&&document instanceof window.DocumentTouch;j||v.on("mousedown",function(e){t(e.pageY),e.stopPropagation(),e.preventDefault()}).on("mousemove",function(e){y&&(n(e.pageY),e.stopPropagation(),e.preventDefault())}).on("mouseup mouseleave",function(e){i(e.pageY),e.stopPropagation(),e.preventDefault()})}},function(e,t){"use strict";Object.defineProperty(t,"__esModule",{value:!0});t.depthOf=function e(t){var n=1;return t.children&&t.children[0]&&(n=e(t.children[0])+1),n}},function(e,t){e.exports='<div class="<%= className %>"> <div class=weui-mask></div> <div class=weui-picker> <div class=weui-picker__hd> <a href=javascript:; data-action=cancel class=weui-picker__action>取消</a> <a href=javascript:; data-action=select class=weui-picker__action id=weui-picker-confirm>确定</a> </div> <div class=weui-picker__bd></div> </div> </div> '},function(e,t){e.exports="<div class=weui-picker__group> <div class=weui-picker__mask></div> <div class=weui-picker__indicator></div> <div class=weui-picker__content></div> </div>"},function(e,t,n){"use strict";function i(e){return e&&e.__esModule?e:{default:e}}function o(e){function t(e){t=r.default.noop,o.addClass("weui-animate-fade-out").on("animationend webkitAnimationEnd",function(){o.remove(),s=!1,e&&e()})}function n(e){t(e)}var i=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};if(s)return s;i=r.default.extend({className:"",onDelete:r.default.noop},i);var o=(0,r.default)(r.default.render(l.default,r.default.extend({url:e},i)));return(0,r.default)("body").append(o),o.find(".weui-gallery__img").on("click",function(){n()}),o.find(".weui-gallery__del").on("click",function(){i.onDelete.call(this,e)}),o.show().addClass("weui-animate-fade-in"),s=o[0],s.hide=n,s}Object.defineProperty(t,"__esModule",{value:!0});var a=n(2),r=i(a),u=n(31),l=i(u),s=void 0;t.default=o,e.exports=t.default},function(e,t){e.exports='<div class="weui-gallery <%= className %>"> <span class=weui-gallery__img style="background-image:url(<%= url %>)"></span> <div class=weui-gallery__opr> <a href=javascript: class=weui-gallery__del> <i class="weui-icon-delete weui-icon_gallery-delete"></i> </a> </div> </div> '},function(e,t,n){"use strict";function i(e){return e&&e.__esModule?e:{default:e}}function o(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},n=(0,r.default)(e);if(t=r.default.extend({step:void 0,defaultValue:0,onChange:r.default.noop},t),void 0!==t.step&&(t.step=parseFloat(t.step),!t.step||t.step<0))throw new Error("Slider step must be a positive number.");if(void 0!==t.defaultValue&&t.defaultValue<0||t.defaultValue>100)throw new Error("Slider defaultValue must be >= 0 and <= 100.");return n.forEach(function(e){function n(){var e=r.default.getStyle(l[0],"left");return e=/%/.test(e)?s*parseFloat(e)/100:parseFloat(e)}function i(n){var i=void 0,o=void 0;t.step&&(n=Math.round(n/p)*p),i=f+n,i=i<0?0:i>s?s:i,o=100*i/s,u.css({width:o+"%"}),l.css({left:o+"%"}),t.onChange.call(e,o)}var o=(0,r.default)(e),a=o.find(".weui-slider__inner"),u=o.find(".weui-slider__track"),l=o.find(".weui-slider__handler"),s=parseInt(r.default.getStyle(a[0],"width")),d=a[0].offsetLeft,f=0,c=0,p=void 0;t.step&&(p=s*t.step/100),t.defaultValue&&i(s*t.defaultValue/100),o.on("click",function(e){e.preventDefault(),f=n(),i(e.pageX-d-f)}),l.on("touchstart",function(e){f=n(),c=e.changedTouches[0].clientX}).on("touchmove",function(e){e.preventDefault(),i(e.changedTouches[0].clientX-c)})}),this}Object.defineProperty(t,"__esModule",{value:!0});var a=n(2),r=i(a);t.default=o,e.exports=t.default}])});

/***/ }),

/***/ "./src/login/component.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__("./node_modules/react/react.js");

var _react2 = _interopRequireDefault(_react);

var _reactRouter = __webpack_require__("./node_modules/react-router/es/index.js");

var _packages = __webpack_require__("./node_modules/react-weui/build/packages/index.js");

__webpack_require__("./node_modules/weui/dist/style/weui.css");

var _weui = __webpack_require__("./node_modules/weui.js/dist/weui.min.js");

var _weui2 = _interopRequireDefault(_weui);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; } /**
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * Created by chenzhongying on 2017/10/23.
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                */

//import styles


var url = 'http://localhost';

var loading;

var Login = function (_React$Component) {
    _inherits(Login, _React$Component);

    function Login(props) {
        _classCallCheck(this, Login);

        var _this = _possibleConstructorReturn(this, (Login.__proto__ || Object.getPrototypeOf(Login)).call(this, props));

        _this.state = {
            name: '',
            password: '',
            code: '',
            time: Math.random()
        };
        return _this;
    }

    _createClass(Login, [{
        key: 'codeChange',
        value: function codeChange() {
            this.setState({
                time: Math.random()
            });
        }
    }, {
        key: 'handleChange',
        value: function handleChange(mark, event) {
            if (mark === 'name') {
                this.setState({
                    name: event.target.value
                });
            } else if (mark === 'password') {
                this.setState({
                    password: event.target.value
                });
            } else if (mark == 'code') {
                this.setState({
                    code: event.target.value
                });
            }
        }
    }, {
        key: 'handleSubmit',
        value: function handleSubmit() {
            if (!this.state.name) {
                _weui2.default.alert('请填写用户名');
            } else if (!this.state.password) {
                _weui2.default.alert('请填写密码');
            } else if (!this.state.code) {
                _weui2.default.alert('请填写验证码');
            } else {
                loading = _weui2.default.loading('loading', {
                    className: 'custom-classname'
                });
                $.ajax({
                    url: url + '/Login/CheckLogin',
                    data: 'username=' + this.state.name + '&password=' + $.md5($.trim(this.state.password)) + '&code=' + this.state.code,
                    type: 'POST',
                    complete: function complete(response) {
                        loading.hide();
                        response = JSON.parse(response.responseText);
                        setTimeout(function () {
                            if (response.state == 'success') {
                                _reactRouter.hashHistory.push('/home/operate');
                            } else {
                                _weui2.default.alert(response.message);
                            }
                        }, 500);
                    }
                });
            }
        }
    }, {
        key: 'render',
        value: function render() {
            return _react2.default.createElement(
                'div',
                null,
                _react2.default.createElement(
                    _packages.Form,
                    null,
                    _react2.default.createElement(
                        _packages.FormCell,
                        null,
                        _react2.default.createElement(
                            _packages.CellHeader,
                            null,
                            _react2.default.createElement(
                                _packages.Label,
                                null,
                                '\u7528\u6237\u540D'
                            )
                        ),
                        _react2.default.createElement(
                            _packages.CellBody,
                            null,
                            _react2.default.createElement(_packages.Input, { type: 'text', onChange: this.handleChange.bind(this, 'name') })
                        )
                    ),
                    _react2.default.createElement(
                        _packages.FormCell,
                        null,
                        _react2.default.createElement(
                            _packages.CellHeader,
                            null,
                            _react2.default.createElement(
                                _packages.Label,
                                null,
                                '\u5BC6\u7801'
                            )
                        ),
                        _react2.default.createElement(
                            _packages.CellBody,
                            null,
                            _react2.default.createElement(_packages.Input, { type: 'password', onChange: this.handleChange.bind(this, 'password') })
                        )
                    ),
                    _react2.default.createElement(
                        _packages.FormCell,
                        null,
                        _react2.default.createElement(
                            _packages.CellHeader,
                            null,
                            _react2.default.createElement(
                                _packages.Label,
                                null,
                                '\u9A8C\u8BC1\u7801'
                            )
                        ),
                        _react2.default.createElement(
                            _packages.CellBody,
                            null,
                            _react2.default.createElement(_packages.Input, { type: 'text', onChange: this.handleChange.bind(this, 'code') })
                        ),
                        _react2.default.createElement(
                            _packages.CellFooter,
                            null,
                            _react2.default.createElement('img', { src: url + "/Login/GetAuthCode?time=" + this.state.time, alt: '', onClick: this.codeChange.bind(this) })
                        )
                    ),
                    _react2.default.createElement(
                        _packages.ButtonArea,
                        null,
                        _react2.default.createElement(
                            _packages.Button,
                            { onClick: this.handleSubmit.bind(this) },
                            'OK'
                        )
                    )
                )
            );
        }
    }]);

    return Login;
}(_react2.default.Component);

exports.default = Login;

/***/ })

});
//# sourceMappingURL=0.351d4.chunk.js.map