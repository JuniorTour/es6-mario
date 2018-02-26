/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "/";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 92);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;

exports.default = function (instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
};

/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;

var _defineProperty = __webpack_require__(119);

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
/* 2 */
/***/ (function(module, exports) {

var core = module.exports = { version: '2.5.3' };
if (typeof __e == 'number') __e = core; // eslint-disable-line no-undef


/***/ }),
/* 3 */
/***/ (function(module, exports, __webpack_require__) {

var global = __webpack_require__(5);
var core = __webpack_require__(2);
var ctx = __webpack_require__(14);
var hide = __webpack_require__(15);
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
/* 4 */
/***/ (function(module, exports, __webpack_require__) {

var store = __webpack_require__(45)('wks');
var uid = __webpack_require__(33);
var Symbol = __webpack_require__(5).Symbol;
var USE_SYMBOL = typeof Symbol == 'function';

var $exports = module.exports = function (name) {
  return store[name] || (store[name] =
    USE_SYMBOL && Symbol[name] || (USE_SYMBOL ? Symbol : uid)('Symbol.' + name));
};

$exports.store = store;


/***/ }),
/* 5 */
/***/ (function(module, exports) {

// https://github.com/zloirock/core-js/issues/86#issuecomment-115759028
var global = module.exports = typeof window != 'undefined' && window.Math == Math
  ? window : typeof self != 'undefined' && self.Math == Math ? self
  // eslint-disable-next-line no-new-func
  : Function('return this')();
if (typeof __g == 'number') __g = global; // eslint-disable-line no-undef


/***/ }),
/* 6 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.Trait = exports.Sides = undefined;

var _classCallCheck2 = __webpack_require__(0);

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = __webpack_require__(1);

var _createClass3 = _interopRequireDefault(_createClass2);

var _symbol = __webpack_require__(52);

var _symbol2 = _interopRequireDefault(_symbol);

var _math = __webpack_require__(37);

var _BoundingBox = __webpack_require__(129);

var _BoundingBox2 = _interopRequireDefault(_BoundingBox);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Sides = exports.Sides = {
    LEFT: (0, _symbol2.default)('left'),
    RIGHT: (0, _symbol2.default)('right'),
    BOTTOM: (0, _symbol2.default)('bottom'),
    TOP: (0, _symbol2.default)('top')
};

var Trait = exports.Trait = function () {
    function Trait(name) {
        (0, _classCallCheck3.default)(this, Trait);

        this.NAME = name;

        this.tasks = [];
    }

    (0, _createClass3.default)(Trait, [{
        key: 'finalize',
        value: function finalize() {
            this.tasks.forEach(function (task) {
                return task();
            });
            this.tasks.length = 0;
        }
    }, {
        key: 'queue',
        value: function queue(task) {
            this.tasks.push(task);
        }
    }, {
        key: 'collides',
        value: function collides(us, them) {
            // console.log('Collides with ', them);
        }
    }, {
        key: 'obstruct',
        value: function obstruct() {}
    }, {
        key: 'update',
        value: function update() {
            // console.warn('Unhandled update call in Trait')
        }
    }]);
    return Trait;
}();

var Entity = function () {
    function Entity() {
        (0, _classCallCheck3.default)(this, Entity);

        this.canCollides = true;

        this.pos = new _math.Vec2(0, 0);
        this.vel = new _math.Vec2(0, 0);
        this.size = new _math.Vec2(0, 0);
        this.offset = new _math.Vec2(0, 0);
        this.bounds = new _BoundingBox2.default(this.pos, this.size, this.offset);
        this.lifeTime = 0;

        this.traits = [];
    }

    (0, _createClass3.default)(Entity, [{
        key: 'addTrait',
        value: function addTrait(trait) {
            this.traits.push(trait);
            this[trait.NAME] = trait;
        }
    }, {
        key: 'finalize',
        value: function finalize() {
            this.traits.forEach(function (trait) {
                trait.finalize();
            });
        }
    }, {
        key: 'collides',
        value: function collides(candidate) {
            var _this = this;

            // console.log('Touched', candidate);
            this.traits.forEach(function (trait) {
                trait.collides(_this, candidate);
            });
        }
    }, {
        key: 'obstruct',
        value: function obstruct(side, match) {
            var _this2 = this;

            this.traits.forEach(function (trait) {
                trait.obstruct(_this2, side, match);
            });
        }
    }, {
        key: 'draw',
        value: function draw() {}
    }, {
        key: 'update',
        value: function update(deltaTime, level) {
            var _this3 = this;

            this.traits.forEach(function (trait) {
                trait.update(_this3, deltaTime, level);
            });

            this.lifeTime += deltaTime;
        }
    }]);
    return Entity;
}();

exports.default = Entity;

/***/ }),
/* 7 */
/***/ (function(module, exports, __webpack_require__) {

var anObject = __webpack_require__(9);
var IE8_DOM_DEFINE = __webpack_require__(62);
var toPrimitive = __webpack_require__(42);
var dP = Object.defineProperty;

exports.f = __webpack_require__(10) ? Object.defineProperty : function defineProperty(O, P, Attributes) {
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
/* 8 */
/***/ (function(module, exports) {

module.exports = function (it) {
  return typeof it === 'object' ? it !== null : typeof it === 'function';
};


/***/ }),
/* 9 */
/***/ (function(module, exports, __webpack_require__) {

var isObject = __webpack_require__(8);
module.exports = function (it) {
  if (!isObject(it)) throw TypeError(it + ' is not an object!');
  return it;
};


/***/ }),
/* 10 */
/***/ (function(module, exports, __webpack_require__) {

// Thank's IE8 for his funny defineProperty
module.exports = !__webpack_require__(18)(function () {
  return Object.defineProperty({}, 'a', { get: function () { return 7; } }).a != 7;
});


/***/ }),
/* 11 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = { "default": __webpack_require__(131), __esModule: true };

/***/ }),
/* 12 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;

var _typeof2 = __webpack_require__(81);

var _typeof3 = _interopRequireDefault(_typeof2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = function (self, call) {
  if (!self) {
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  }

  return call && ((typeof call === "undefined" ? "undefined" : (0, _typeof3.default)(call)) === "object" || typeof call === "function") ? call : self;
};

/***/ }),
/* 13 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;

var _setPrototypeOf = __webpack_require__(136);

var _setPrototypeOf2 = _interopRequireDefault(_setPrototypeOf);

var _create = __webpack_require__(140);

var _create2 = _interopRequireDefault(_create);

var _typeof2 = __webpack_require__(81);

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
/* 14 */
/***/ (function(module, exports, __webpack_require__) {

// optional / simple context binding
var aFunction = __webpack_require__(23);
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
/* 15 */
/***/ (function(module, exports, __webpack_require__) {

var dP = __webpack_require__(7);
var createDesc = __webpack_require__(24);
module.exports = __webpack_require__(10) ? function (object, key, value) {
  return dP.f(object, key, createDesc(1, value));
} : function (object, key, value) {
  object[key] = value;
  return object;
};


/***/ }),
/* 16 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var $at = __webpack_require__(98)(true);

// 21.1.3.27 String.prototype[@@iterator]()
__webpack_require__(40)(String, 'String', function (iterated) {
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
/* 17 */
/***/ (function(module, exports) {

var hasOwnProperty = {}.hasOwnProperty;
module.exports = function (it, key) {
  return hasOwnProperty.call(it, key);
};


/***/ }),
/* 18 */
/***/ (function(module, exports) {

module.exports = function (exec) {
  try {
    return !!exec();
  } catch (e) {
    return true;
  }
};


/***/ }),
/* 19 */
/***/ (function(module, exports) {

module.exports = {};


/***/ }),
/* 20 */
/***/ (function(module, exports, __webpack_require__) {

// to indexed object, toObject with fallback for non-array-like ES3 strings
var IObject = __webpack_require__(65);
var defined = __webpack_require__(39);
module.exports = function (it) {
  return IObject(defined(it));
};


/***/ }),
/* 21 */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(103);
var global = __webpack_require__(5);
var hide = __webpack_require__(15);
var Iterators = __webpack_require__(19);
var TO_STRING_TAG = __webpack_require__(4)('toStringTag');

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
/* 22 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = { "default": __webpack_require__(97), __esModule: true };

/***/ }),
/* 23 */
/***/ (function(module, exports) {

module.exports = function (it) {
  if (typeof it != 'function') throw TypeError(it + ' is not a function!');
  return it;
};


/***/ }),
/* 24 */
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
/* 25 */
/***/ (function(module, exports) {

var toString = {}.toString;

module.exports = function (it) {
  return toString.call(it).slice(8, -1);
};


/***/ }),
/* 26 */
/***/ (function(module, exports, __webpack_require__) {

var def = __webpack_require__(7).f;
var has = __webpack_require__(17);
var TAG = __webpack_require__(4)('toStringTag');

module.exports = function (it, tag, stat) {
  if (it && !has(it = stat ? it : it.prototype, TAG)) def(it, TAG, { configurable: true, value: tag });
};


/***/ }),
/* 27 */
/***/ (function(module, exports, __webpack_require__) {

var ctx = __webpack_require__(14);
var call = __webpack_require__(69);
var isArrayIter = __webpack_require__(70);
var anObject = __webpack_require__(9);
var toLength = __webpack_require__(32);
var getIterFn = __webpack_require__(48);
var BREAK = {};
var RETURN = {};
var exports = module.exports = function (iterable, entries, fn, that, ITERATOR) {
  var iterFn = ITERATOR ? function () { return iterable; } : getIterFn(iterable);
  var f = ctx(fn, that, entries ? 2 : 1);
  var index = 0;
  var length, step, iterator, result;
  if (typeof iterFn != 'function') throw TypeError(iterable + ' is not iterable!');
  // fast case for arrays with default iterator
  if (isArrayIter(iterFn)) for (length = toLength(iterable.length); length > index; index++) {
    result = entries ? f(anObject(step = iterable[index])[0], step[1]) : f(iterable[index]);
    if (result === BREAK || result === RETURN) return result;
  } else for (iterator = iterFn.call(iterable); !(step = iterator.next()).done;) {
    result = call(iterator, f, step.value, entries);
    if (result === BREAK || result === RETURN) return result;
  }
};
exports.BREAK = BREAK;
exports.RETURN = RETURN;


/***/ }),
/* 28 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _toConsumableArray2 = __webpack_require__(88);

var _toConsumableArray3 = _interopRequireDefault(_toConsumableArray2);

var _slicedToArray2 = __webpack_require__(36);

var _slicedToArray3 = _interopRequireDefault(_slicedToArray2);

var _promise = __webpack_require__(22);

var _promise2 = _interopRequireDefault(_promise);

exports.loadImage = loadImage;
exports.loadJSON = loadJSON;
exports.loadSpriteSheet = loadSpriteSheet;

var _SpriteSheet = __webpack_require__(89);

var _SpriteSheet2 = _interopRequireDefault(_SpriteSheet);

var _anim = __webpack_require__(167);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function loadImage(url) {
    return new _promise2.default(function (resolve) {
        var image = new Image();
        image.addEventListener('load', function () {
            resolve(image);
        });

        image.src = url;
    });
}

function loadJSON(url) {
    return fetch(url).then(function (r) {
        return r.json();
    });
}

function loadSpriteSheet(name) {
    return loadJSON('/sprites/' + name + '.json').then(function (sheetSpec) {
        return _promise2.default.all([sheetSpec, loadImage(sheetSpec.imageURL)]);
    }).then(function (_ref) {
        var _ref2 = (0, _slicedToArray3.default)(_ref, 2),
            sheetSpec = _ref2[0],
            image = _ref2[1];

        var sprites = new _SpriteSheet2.default(image, sheetSpec.tileW, sheetSpec.tileH);

        if (sheetSpec.tiles) {
            sheetSpec.tiles.forEach(function (tileSpec) {
                sprites.defineTile.apply(sprites, [tileSpec.name].concat((0, _toConsumableArray3.default)(tileSpec.index)));
            });
        }

        if (sheetSpec.frames) {
            sheetSpec.frames.forEach(function (frameSpec) {
                sprites.define.apply(sprites, [frameSpec.name].concat((0, _toConsumableArray3.default)(frameSpec.rect)));
            });
        }

        if (sheetSpec.animations) {
            sheetSpec.animations.forEach(function (animSpec) {
                var animation = (0, _anim.createAnim)(animSpec.frames, animSpec.frameLen);

                sprites.defineAnim(animSpec.name, animation);
            });
        }

        return sprites;
    });
}

/***/ }),
/* 29 */
/***/ (function(module, exports) {



/***/ }),
/* 30 */
/***/ (function(module, exports) {

module.exports = true;


/***/ }),
/* 31 */
/***/ (function(module, exports, __webpack_require__) {

// 19.1.2.2 / 15.2.3.5 Object.create(O [, Properties])
var anObject = __webpack_require__(9);
var dPs = __webpack_require__(100);
var enumBugKeys = __webpack_require__(46);
var IE_PROTO = __webpack_require__(44)('IE_PROTO');
var Empty = function () { /* empty */ };
var PROTOTYPE = 'prototype';

// Create object with fake `null` prototype: use iframe Object with cleared prototype
var createDict = function () {
  // Thrash, waste and sodomy: IE GC bug
  var iframe = __webpack_require__(41)('iframe');
  var i = enumBugKeys.length;
  var lt = '<';
  var gt = '>';
  var iframeDocument;
  iframe.style.display = 'none';
  __webpack_require__(66).appendChild(iframe);
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
/* 32 */
/***/ (function(module, exports, __webpack_require__) {

// 7.1.15 ToLength
var toInteger = __webpack_require__(38);
var min = Math.min;
module.exports = function (it) {
  return it > 0 ? min(toInteger(it), 0x1fffffffffffff) : 0; // pow(2, 53) - 1 == 9007199254740991
};


/***/ }),
/* 33 */
/***/ (function(module, exports) {

var id = 0;
var px = Math.random();
module.exports = function (key) {
  return 'Symbol('.concat(key === undefined ? '' : key, ')_', (++id + px).toString(36));
};


/***/ }),
/* 34 */
/***/ (function(module, exports, __webpack_require__) {

// 7.1.13 ToObject(argument)
var defined = __webpack_require__(39);
module.exports = function (it) {
  return Object(defined(it));
};


/***/ }),
/* 35 */
/***/ (function(module, exports, __webpack_require__) {

// getting tag from 19.1.3.6 Object.prototype.toString()
var cof = __webpack_require__(25);
var TAG = __webpack_require__(4)('toStringTag');
// ES3 wrong here
var ARG = cof(function () { return arguments; }()) == 'Arguments';

// fallback for IE11 Script Access Denied error
var tryGet = function (it, key) {
  try {
    return it[key];
  } catch (e) { /* empty */ }
};

module.exports = function (it) {
  var O, T, B;
  return it === undefined ? 'Undefined' : it === null ? 'Null'
    // @@toStringTag case
    : typeof (T = tryGet(O = Object(it), TAG)) == 'string' ? T
    // builtinTag case
    : ARG ? cof(O)
    // ES3 arguments fallback
    : (B = cof(O)) == 'Object' && typeof O.callee == 'function' ? 'Arguments' : B;
};


/***/ }),
/* 36 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;

var _isIterable2 = __webpack_require__(110);

var _isIterable3 = _interopRequireDefault(_isIterable2);

var _getIterator2 = __webpack_require__(51);

var _getIterator3 = _interopRequireDefault(_getIterator2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = function () {
  function sliceIterator(arr, i) {
    var _arr = [];
    var _n = true;
    var _d = false;
    var _e = undefined;

    try {
      for (var _i = (0, _getIterator3.default)(arr), _s; !(_n = (_s = _i.next()).done); _n = true) {
        _arr.push(_s.value);

        if (i && _arr.length === i) break;
      }
    } catch (err) {
      _d = true;
      _e = err;
    } finally {
      try {
        if (!_n && _i["return"]) _i["return"]();
      } finally {
        if (_d) throw _e;
      }
    }

    return _arr;
  }

  return function (arr, i) {
    if (Array.isArray(arr)) {
      return arr;
    } else if ((0, _isIterable3.default)(Object(arr))) {
      return sliceIterator(arr, i);
    } else {
      throw new TypeError("Invalid attempt to destructure non-iterable instance");
    }
  };
}();

/***/ }),
/* 37 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.Vec2 = exports.Matrix = undefined;

var _classCallCheck2 = __webpack_require__(0);

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = __webpack_require__(1);

var _createClass3 = _interopRequireDefault(_createClass2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Matrix = exports.Matrix = function () {
    function Matrix() {
        (0, _classCallCheck3.default)(this, Matrix);

        this.grid = [];
    }

    (0, _createClass3.default)(Matrix, [{
        key: "forEach",
        value: function forEach(callback) {
            this.grid.forEach(function (column, x) {
                column.forEach(function (val, y) {
                    callback(val, x, y);
                });
            });
        }
    }, {
        key: "get",
        value: function get(x, y) {
            var col = this.grid[x];

            if (col) {
                return col[y];
            }
            return undefined;
        }
    }, {
        key: "set",
        value: function set(x, y, value) {
            if (!this.grid[x]) {
                this.grid[x] = [];
            }

            this.grid[x][y] = value;
        }
    }]);
    return Matrix;
}();

var Vec2 = exports.Vec2 = function () {
    function Vec2(x, y) {
        (0, _classCallCheck3.default)(this, Vec2);

        this.set(x, y);
    }

    (0, _createClass3.default)(Vec2, [{
        key: "set",
        value: function set(x, y) {
            this.x = x;
            this.y = y;
        }
    }]);
    return Vec2;
}();

/***/ }),
/* 38 */
/***/ (function(module, exports) {

// 7.1.4 ToInteger
var ceil = Math.ceil;
var floor = Math.floor;
module.exports = function (it) {
  return isNaN(it = +it) ? 0 : (it > 0 ? floor : ceil)(it);
};


/***/ }),
/* 39 */
/***/ (function(module, exports) {

// 7.2.1 RequireObjectCoercible(argument)
module.exports = function (it) {
  if (it == undefined) throw TypeError("Can't call method on  " + it);
  return it;
};


/***/ }),
/* 40 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var LIBRARY = __webpack_require__(30);
var $export = __webpack_require__(3);
var redefine = __webpack_require__(63);
var hide = __webpack_require__(15);
var has = __webpack_require__(17);
var Iterators = __webpack_require__(19);
var $iterCreate = __webpack_require__(99);
var setToStringTag = __webpack_require__(26);
var getPrototypeOf = __webpack_require__(67);
var ITERATOR = __webpack_require__(4)('iterator');
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
  var $default = (!BUGGY && $native) || getMethod(DEFAULT);
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
/* 41 */
/***/ (function(module, exports, __webpack_require__) {

var isObject = __webpack_require__(8);
var document = __webpack_require__(5).document;
// typeof document.createElement is 'object' in old IE
var is = isObject(document) && isObject(document.createElement);
module.exports = function (it) {
  return is ? document.createElement(it) : {};
};


/***/ }),
/* 42 */
/***/ (function(module, exports, __webpack_require__) {

// 7.1.1 ToPrimitive(input [, PreferredType])
var isObject = __webpack_require__(8);
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
/* 43 */
/***/ (function(module, exports, __webpack_require__) {

// 19.1.2.14 / 15.2.3.14 Object.keys(O)
var $keys = __webpack_require__(64);
var enumBugKeys = __webpack_require__(46);

module.exports = Object.keys || function keys(O) {
  return $keys(O, enumBugKeys);
};


/***/ }),
/* 44 */
/***/ (function(module, exports, __webpack_require__) {

var shared = __webpack_require__(45)('keys');
var uid = __webpack_require__(33);
module.exports = function (key) {
  return shared[key] || (shared[key] = uid(key));
};


/***/ }),
/* 45 */
/***/ (function(module, exports, __webpack_require__) {

var global = __webpack_require__(5);
var SHARED = '__core-js_shared__';
var store = global[SHARED] || (global[SHARED] = {});
module.exports = function (key) {
  return store[key] || (store[key] = {});
};


/***/ }),
/* 46 */
/***/ (function(module, exports) {

// IE 8- don't enum bug keys
module.exports = (
  'constructor,hasOwnProperty,isPrototypeOf,propertyIsEnumerable,toLocaleString,toString,valueOf'
).split(',');


/***/ }),
/* 47 */
/***/ (function(module, exports) {

module.exports = function (it, Constructor, name, forbiddenField) {
  if (!(it instanceof Constructor) || (forbiddenField !== undefined && forbiddenField in it)) {
    throw TypeError(name + ': incorrect invocation!');
  } return it;
};


/***/ }),
/* 48 */
/***/ (function(module, exports, __webpack_require__) {

var classof = __webpack_require__(35);
var ITERATOR = __webpack_require__(4)('iterator');
var Iterators = __webpack_require__(19);
module.exports = __webpack_require__(2).getIteratorMethod = function (it) {
  if (it != undefined) return it[ITERATOR]
    || it['@@iterator']
    || Iterators[classof(it)];
};


/***/ }),
/* 49 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

// 25.4.1.5 NewPromiseCapability(C)
var aFunction = __webpack_require__(23);

function PromiseCapability(C) {
  var resolve, reject;
  this.promise = new C(function ($$resolve, $$reject) {
    if (resolve !== undefined || reject !== undefined) throw TypeError('Bad Promise constructor');
    resolve = $$resolve;
    reject = $$reject;
  });
  this.resolve = aFunction(resolve);
  this.reject = aFunction(reject);
}

module.exports.f = function (C) {
  return new PromiseCapability(C);
};


/***/ }),
/* 50 */
/***/ (function(module, exports, __webpack_require__) {

var hide = __webpack_require__(15);
module.exports = function (target, src, safe) {
  for (var key in src) {
    if (safe && target[key]) target[key] = src[key];
    else hide(target, key, src[key]);
  } return target;
};


/***/ }),
/* 51 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = { "default": __webpack_require__(113), __esModule: true };

/***/ }),
/* 52 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = { "default": __webpack_require__(123), __esModule: true };

/***/ }),
/* 53 */
/***/ (function(module, exports, __webpack_require__) {

var META = __webpack_require__(33)('meta');
var isObject = __webpack_require__(8);
var has = __webpack_require__(17);
var setDesc = __webpack_require__(7).f;
var id = 0;
var isExtensible = Object.isExtensible || function () {
  return true;
};
var FREEZE = !__webpack_require__(18)(function () {
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
/* 54 */
/***/ (function(module, exports, __webpack_require__) {

exports.f = __webpack_require__(4);


/***/ }),
/* 55 */
/***/ (function(module, exports, __webpack_require__) {

var global = __webpack_require__(5);
var core = __webpack_require__(2);
var LIBRARY = __webpack_require__(30);
var wksExt = __webpack_require__(54);
var defineProperty = __webpack_require__(7).f;
module.exports = function (name) {
  var $Symbol = core.Symbol || (core.Symbol = LIBRARY ? {} : global.Symbol || {});
  if (name.charAt(0) != '_' && !(name in $Symbol)) defineProperty($Symbol, name, { value: wksExt.f(name) });
};


/***/ }),
/* 56 */
/***/ (function(module, exports) {

exports.f = {}.propertyIsEnumerable;


/***/ }),
/* 57 */
/***/ (function(module, exports, __webpack_require__) {

var isObject = __webpack_require__(8);
module.exports = function (it, TYPE) {
  if (!isObject(it) || it._t !== TYPE) throw TypeError('Incompatible receiver, ' + TYPE + ' required!');
  return it;
};


/***/ }),
/* 58 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _getPrototypeOf = __webpack_require__(11);

var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

var _classCallCheck2 = __webpack_require__(0);

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = __webpack_require__(1);

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = __webpack_require__(12);

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = __webpack_require__(13);

var _inherits3 = _interopRequireDefault(_inherits2);

var _Entity = __webpack_require__(6);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Killable = function (_Trait) {
    (0, _inherits3.default)(Killable, _Trait);

    function Killable() {
        (0, _classCallCheck3.default)(this, Killable);

        var _this = (0, _possibleConstructorReturn3.default)(this, (Killable.__proto__ || (0, _getPrototypeOf2.default)(Killable)).call(this, 'killable'));

        _this.dead = false;
        _this.deadTime = 0;
        _this.removeAfter = 1;
        return _this;
    }

    (0, _createClass3.default)(Killable, [{
        key: 'kill',
        value: function kill() {
            var _this2 = this;

            this.queue(function () {
                return _this2.dead = true;
            });
        }
    }, {
        key: 'revive',
        value: function revive() {
            this.dead = false;
            this.deadTime = 0;
        }
    }, {
        key: 'update',
        value: function update(entity, deltaTime, level) {
            if (this.dead) {
                this.deadTime += deltaTime;
                if (this.deadTime > this.removeAfter) {
                    this.queue(function () {
                        level.entities.delete(entity);
                    });
                }
            }
        }
    }]);
    return Killable;
}(_Entity.Trait);

exports.default = Killable;

/***/ }),
/* 59 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _getPrototypeOf = __webpack_require__(11);

var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

var _classCallCheck2 = __webpack_require__(0);

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = __webpack_require__(1);

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = __webpack_require__(12);

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = __webpack_require__(13);

var _inherits3 = _interopRequireDefault(_inherits2);

var _Entity = __webpack_require__(6);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Solid = function (_Trait) {
    (0, _inherits3.default)(Solid, _Trait);

    function Solid() {
        (0, _classCallCheck3.default)(this, Solid);

        var _this = (0, _possibleConstructorReturn3.default)(this, (Solid.__proto__ || (0, _getPrototypeOf2.default)(Solid)).call(this, 'solid'));

        _this.obstructs = true;
        return _this;
    }

    (0, _createClass3.default)(Solid, [{
        key: 'obstruct',
        value: function obstruct(entity, sides, match) {
            if (!this.obstructs) {
                return;
            }

            if (sides === _Entity.Sides.BOTTOM) {
                entity.bounds.top = match.y1 - entity.size.y;
                entity.vel.y = 0;
            } else if (sides === _Entity.Sides.TOP) {
                entity.bounds.top = match.y2;
                entity.vel.y = 0;
            } else if (sides === _Entity.Sides.LEFT) {
                entity.bounds.left = match.x1 - entity.size.x;
                entity.vel.x = 0;
            } else if (sides === _Entity.Sides.RIGHT) {
                entity.bounds.left = match.x2;
                entity.vel.x = 0;
            }
        }
    }]);
    return Solid;
}(_Entity.Trait);

exports.default = Solid;

/***/ }),
/* 60 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _getPrototypeOf = __webpack_require__(11);

var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

var _classCallCheck2 = __webpack_require__(0);

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = __webpack_require__(1);

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = __webpack_require__(12);

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = __webpack_require__(13);

var _inherits3 = _interopRequireDefault(_inherits2);

var _Entity = __webpack_require__(6);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Physics = function (_Trait) {
    (0, _inherits3.default)(Physics, _Trait);

    function Physics() {
        (0, _classCallCheck3.default)(this, Physics);
        return (0, _possibleConstructorReturn3.default)(this, (Physics.__proto__ || (0, _getPrototypeOf2.default)(Physics)).call(this, 'physics'));
    }

    (0, _createClass3.default)(Physics, [{
        key: 'update',
        value: function update(entity, deltaTime, level) {
            entity.pos.x += entity.vel.x * deltaTime;
            level.tileCollider.checkX(entity);

            entity.pos.y += entity.vel.y * deltaTime;
            level.tileCollider.checkY(entity);

            entity.vel.y += level.gravity * deltaTime;
        }
    }]);
    return Physics;
}(_Entity.Trait);

exports.default = Physics;

/***/ }),
/* 61 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(95);


/***/ }),
/* 62 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = !__webpack_require__(10) && !__webpack_require__(18)(function () {
  return Object.defineProperty(__webpack_require__(41)('div'), 'a', { get: function () { return 7; } }).a != 7;
});


/***/ }),
/* 63 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(15);


/***/ }),
/* 64 */
/***/ (function(module, exports, __webpack_require__) {

var has = __webpack_require__(17);
var toIObject = __webpack_require__(20);
var arrayIndexOf = __webpack_require__(101)(false);
var IE_PROTO = __webpack_require__(44)('IE_PROTO');

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
/* 65 */
/***/ (function(module, exports, __webpack_require__) {

// fallback for non-array-like ES3 and non-enumerable old V8 strings
var cof = __webpack_require__(25);
// eslint-disable-next-line no-prototype-builtins
module.exports = Object('z').propertyIsEnumerable(0) ? Object : function (it) {
  return cof(it) == 'String' ? it.split('') : Object(it);
};


/***/ }),
/* 66 */
/***/ (function(module, exports, __webpack_require__) {

var document = __webpack_require__(5).document;
module.exports = document && document.documentElement;


/***/ }),
/* 67 */
/***/ (function(module, exports, __webpack_require__) {

// 19.1.2.9 / 15.2.3.2 Object.getPrototypeOf(O)
var has = __webpack_require__(17);
var toObject = __webpack_require__(34);
var IE_PROTO = __webpack_require__(44)('IE_PROTO');
var ObjectProto = Object.prototype;

module.exports = Object.getPrototypeOf || function (O) {
  O = toObject(O);
  if (has(O, IE_PROTO)) return O[IE_PROTO];
  if (typeof O.constructor == 'function' && O instanceof O.constructor) {
    return O.constructor.prototype;
  } return O instanceof Object ? ObjectProto : null;
};


/***/ }),
/* 68 */
/***/ (function(module, exports) {

module.exports = function (done, value) {
  return { value: value, done: !!done };
};


/***/ }),
/* 69 */
/***/ (function(module, exports, __webpack_require__) {

// call something on iterator step with safe closing on error
var anObject = __webpack_require__(9);
module.exports = function (iterator, fn, value, entries) {
  try {
    return entries ? fn(anObject(value)[0], value[1]) : fn(value);
  // 7.4.6 IteratorClose(iterator, completion)
  } catch (e) {
    var ret = iterator['return'];
    if (ret !== undefined) anObject(ret.call(iterator));
    throw e;
  }
};


/***/ }),
/* 70 */
/***/ (function(module, exports, __webpack_require__) {

// check on default Array iterator
var Iterators = __webpack_require__(19);
var ITERATOR = __webpack_require__(4)('iterator');
var ArrayProto = Array.prototype;

module.exports = function (it) {
  return it !== undefined && (Iterators.Array === it || ArrayProto[ITERATOR] === it);
};


/***/ }),
/* 71 */
/***/ (function(module, exports, __webpack_require__) {

// 7.3.20 SpeciesConstructor(O, defaultConstructor)
var anObject = __webpack_require__(9);
var aFunction = __webpack_require__(23);
var SPECIES = __webpack_require__(4)('species');
module.exports = function (O, D) {
  var C = anObject(O).constructor;
  var S;
  return C === undefined || (S = anObject(C)[SPECIES]) == undefined ? D : aFunction(S);
};


/***/ }),
/* 72 */
/***/ (function(module, exports, __webpack_require__) {

var ctx = __webpack_require__(14);
var invoke = __webpack_require__(106);
var html = __webpack_require__(66);
var cel = __webpack_require__(41);
var global = __webpack_require__(5);
var process = global.process;
var setTask = global.setImmediate;
var clearTask = global.clearImmediate;
var MessageChannel = global.MessageChannel;
var Dispatch = global.Dispatch;
var counter = 0;
var queue = {};
var ONREADYSTATECHANGE = 'onreadystatechange';
var defer, channel, port;
var run = function () {
  var id = +this;
  // eslint-disable-next-line no-prototype-builtins
  if (queue.hasOwnProperty(id)) {
    var fn = queue[id];
    delete queue[id];
    fn();
  }
};
var listener = function (event) {
  run.call(event.data);
};
// Node.js 0.9+ & IE10+ has setImmediate, otherwise:
if (!setTask || !clearTask) {
  setTask = function setImmediate(fn) {
    var args = [];
    var i = 1;
    while (arguments.length > i) args.push(arguments[i++]);
    queue[++counter] = function () {
      // eslint-disable-next-line no-new-func
      invoke(typeof fn == 'function' ? fn : Function(fn), args);
    };
    defer(counter);
    return counter;
  };
  clearTask = function clearImmediate(id) {
    delete queue[id];
  };
  // Node.js 0.8-
  if (__webpack_require__(25)(process) == 'process') {
    defer = function (id) {
      process.nextTick(ctx(run, id, 1));
    };
  // Sphere (JS game engine) Dispatch API
  } else if (Dispatch && Dispatch.now) {
    defer = function (id) {
      Dispatch.now(ctx(run, id, 1));
    };
  // Browsers with MessageChannel, includes WebWorkers
  } else if (MessageChannel) {
    channel = new MessageChannel();
    port = channel.port2;
    channel.port1.onmessage = listener;
    defer = ctx(port.postMessage, port, 1);
  // Browsers with postMessage, skip WebWorkers
  // IE8 has postMessage, but it's sync & typeof its postMessage is 'object'
  } else if (global.addEventListener && typeof postMessage == 'function' && !global.importScripts) {
    defer = function (id) {
      global.postMessage(id + '', '*');
    };
    global.addEventListener('message', listener, false);
  // IE8-
  } else if (ONREADYSTATECHANGE in cel('script')) {
    defer = function (id) {
      html.appendChild(cel('script'))[ONREADYSTATECHANGE] = function () {
        html.removeChild(this);
        run.call(id);
      };
    };
  // Rest old browsers
  } else {
    defer = function (id) {
      setTimeout(ctx(run, id, 1), 0);
    };
  }
}
module.exports = {
  set: setTask,
  clear: clearTask
};


/***/ }),
/* 73 */
/***/ (function(module, exports) {

module.exports = function (exec) {
  try {
    return { e: false, v: exec() };
  } catch (e) {
    return { e: true, v: e };
  }
};


/***/ }),
/* 74 */
/***/ (function(module, exports, __webpack_require__) {

var anObject = __webpack_require__(9);
var isObject = __webpack_require__(8);
var newPromiseCapability = __webpack_require__(49);

module.exports = function (C, x) {
  anObject(C);
  if (isObject(x) && x.constructor === C) return x;
  var promiseCapability = newPromiseCapability.f(C);
  var resolve = promiseCapability.resolve;
  resolve(x);
  return promiseCapability.promise;
};


/***/ }),
/* 75 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var global = __webpack_require__(5);
var core = __webpack_require__(2);
var dP = __webpack_require__(7);
var DESCRIPTORS = __webpack_require__(10);
var SPECIES = __webpack_require__(4)('species');

module.exports = function (KEY) {
  var C = typeof core[KEY] == 'function' ? core[KEY] : global[KEY];
  if (DESCRIPTORS && C && !C[SPECIES]) dP.f(C, SPECIES, {
    configurable: true,
    get: function () { return this; }
  });
};


/***/ }),
/* 76 */
/***/ (function(module, exports, __webpack_require__) {

var ITERATOR = __webpack_require__(4)('iterator');
var SAFE_CLOSING = false;

try {
  var riter = [7][ITERATOR]();
  riter['return'] = function () { SAFE_CLOSING = true; };
  // eslint-disable-next-line no-throw-literal
  Array.from(riter, function () { throw 2; });
} catch (e) { /* empty */ }

module.exports = function (exec, skipClosing) {
  if (!skipClosing && !SAFE_CLOSING) return false;
  var safe = false;
  try {
    var arr = [7];
    var iter = arr[ITERATOR]();
    iter.next = function () { return { done: safe = true }; };
    arr[ITERATOR] = function () { return iter; };
    exec(arr);
  } catch (e) { /* empty */ }
  return safe;
};


/***/ }),
/* 77 */
/***/ (function(module, exports) {

exports.f = Object.getOwnPropertySymbols;


/***/ }),
/* 78 */
/***/ (function(module, exports, __webpack_require__) {

// 7.2.2 IsArray(argument)
var cof = __webpack_require__(25);
module.exports = Array.isArray || function isArray(arg) {
  return cof(arg) == 'Array';
};


/***/ }),
/* 79 */
/***/ (function(module, exports, __webpack_require__) {

// 19.1.2.7 / 15.2.3.4 Object.getOwnPropertyNames(O)
var $keys = __webpack_require__(64);
var hiddenKeys = __webpack_require__(46).concat('length', 'prototype');

exports.f = Object.getOwnPropertyNames || function getOwnPropertyNames(O) {
  return $keys(O, hiddenKeys);
};


/***/ }),
/* 80 */
/***/ (function(module, exports, __webpack_require__) {

var pIE = __webpack_require__(56);
var createDesc = __webpack_require__(24);
var toIObject = __webpack_require__(20);
var toPrimitive = __webpack_require__(42);
var has = __webpack_require__(17);
var IE8_DOM_DEFINE = __webpack_require__(62);
var gOPD = Object.getOwnPropertyDescriptor;

exports.f = __webpack_require__(10) ? gOPD : function getOwnPropertyDescriptor(O, P) {
  O = toIObject(O);
  P = toPrimitive(P, true);
  if (IE8_DOM_DEFINE) try {
    return gOPD(O, P);
  } catch (e) { /* empty */ }
  if (has(O, P)) return createDesc(!pIE.f.call(O, P), O[P]);
};


/***/ }),
/* 81 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;

var _iterator = __webpack_require__(134);

var _iterator2 = _interopRequireDefault(_iterator);

var _symbol = __webpack_require__(52);

var _symbol2 = _interopRequireDefault(_symbol);

var _typeof = typeof _symbol2.default === "function" && typeof _iterator2.default === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof _symbol2.default === "function" && obj.constructor === _symbol2.default && obj !== _symbol2.default.prototype ? "symbol" : typeof obj; };

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = typeof _symbol2.default === "function" && _typeof(_iterator2.default) === "symbol" ? function (obj) {
  return typeof obj === "undefined" ? "undefined" : _typeof(obj);
} : function (obj) {
  return obj && typeof _symbol2.default === "function" && obj.constructor === _symbol2.default && obj !== _symbol2.default.prototype ? "symbol" : typeof obj === "undefined" ? "undefined" : _typeof(obj);
};

/***/ }),
/* 82 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var dP = __webpack_require__(7).f;
var create = __webpack_require__(31);
var redefineAll = __webpack_require__(50);
var ctx = __webpack_require__(14);
var anInstance = __webpack_require__(47);
var forOf = __webpack_require__(27);
var $iterDefine = __webpack_require__(40);
var step = __webpack_require__(68);
var setSpecies = __webpack_require__(75);
var DESCRIPTORS = __webpack_require__(10);
var fastKey = __webpack_require__(53).fastKey;
var validate = __webpack_require__(57);
var SIZE = DESCRIPTORS ? '_s' : 'size';

var getEntry = function (that, key) {
  // fast case
  var index = fastKey(key);
  var entry;
  if (index !== 'F') return that._i[index];
  // frozen object case
  for (entry = that._f; entry; entry = entry.n) {
    if (entry.k == key) return entry;
  }
};

module.exports = {
  getConstructor: function (wrapper, NAME, IS_MAP, ADDER) {
    var C = wrapper(function (that, iterable) {
      anInstance(that, C, NAME, '_i');
      that._t = NAME;         // collection type
      that._i = create(null); // index
      that._f = undefined;    // first entry
      that._l = undefined;    // last entry
      that[SIZE] = 0;         // size
      if (iterable != undefined) forOf(iterable, IS_MAP, that[ADDER], that);
    });
    redefineAll(C.prototype, {
      // 23.1.3.1 Map.prototype.clear()
      // 23.2.3.2 Set.prototype.clear()
      clear: function clear() {
        for (var that = validate(this, NAME), data = that._i, entry = that._f; entry; entry = entry.n) {
          entry.r = true;
          if (entry.p) entry.p = entry.p.n = undefined;
          delete data[entry.i];
        }
        that._f = that._l = undefined;
        that[SIZE] = 0;
      },
      // 23.1.3.3 Map.prototype.delete(key)
      // 23.2.3.4 Set.prototype.delete(value)
      'delete': function (key) {
        var that = validate(this, NAME);
        var entry = getEntry(that, key);
        if (entry) {
          var next = entry.n;
          var prev = entry.p;
          delete that._i[entry.i];
          entry.r = true;
          if (prev) prev.n = next;
          if (next) next.p = prev;
          if (that._f == entry) that._f = next;
          if (that._l == entry) that._l = prev;
          that[SIZE]--;
        } return !!entry;
      },
      // 23.2.3.6 Set.prototype.forEach(callbackfn, thisArg = undefined)
      // 23.1.3.5 Map.prototype.forEach(callbackfn, thisArg = undefined)
      forEach: function forEach(callbackfn /* , that = undefined */) {
        validate(this, NAME);
        var f = ctx(callbackfn, arguments.length > 1 ? arguments[1] : undefined, 3);
        var entry;
        while (entry = entry ? entry.n : this._f) {
          f(entry.v, entry.k, this);
          // revert to the last existing entry
          while (entry && entry.r) entry = entry.p;
        }
      },
      // 23.1.3.7 Map.prototype.has(key)
      // 23.2.3.7 Set.prototype.has(value)
      has: function has(key) {
        return !!getEntry(validate(this, NAME), key);
      }
    });
    if (DESCRIPTORS) dP(C.prototype, 'size', {
      get: function () {
        return validate(this, NAME)[SIZE];
      }
    });
    return C;
  },
  def: function (that, key, value) {
    var entry = getEntry(that, key);
    var prev, index;
    // change existing entry
    if (entry) {
      entry.v = value;
    // create new entry
    } else {
      that._l = entry = {
        i: index = fastKey(key, true), // <- index
        k: key,                        // <- key
        v: value,                      // <- value
        p: prev = that._l,             // <- previous entry
        n: undefined,                  // <- next entry
        r: false                       // <- removed
      };
      if (!that._f) that._f = entry;
      if (prev) prev.n = entry;
      that[SIZE]++;
      // add to index
      if (index !== 'F') that._i[index] = entry;
    } return that;
  },
  getEntry: getEntry,
  setStrong: function (C, NAME, IS_MAP) {
    // add .keys, .values, .entries, [@@iterator]
    // 23.1.3.4, 23.1.3.8, 23.1.3.11, 23.1.3.12, 23.2.3.5, 23.2.3.8, 23.2.3.10, 23.2.3.11
    $iterDefine(C, NAME, function (iterated, kind) {
      this._t = validate(iterated, NAME); // target
      this._k = kind;                     // kind
      this._l = undefined;                // previous
    }, function () {
      var that = this;
      var kind = that._k;
      var entry = that._l;
      // revert to the last existing entry
      while (entry && entry.r) entry = entry.p;
      // get next entry
      if (!that._t || !(that._l = entry = entry ? entry.n : that._t._f)) {
        // or finish the iteration
        that._t = undefined;
        return step(1);
      }
      // return step by kind
      if (kind == 'keys') return step(0, entry.k);
      if (kind == 'values') return step(0, entry.v);
      return step(0, [entry.k, entry.v]);
    }, IS_MAP ? 'entries' : 'values', !IS_MAP, true);

    // add [@@species], 23.1.2.2, 23.2.2.2
    setSpecies(NAME);
  }
};


/***/ }),
/* 83 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var global = __webpack_require__(5);
var $export = __webpack_require__(3);
var meta = __webpack_require__(53);
var fails = __webpack_require__(18);
var hide = __webpack_require__(15);
var redefineAll = __webpack_require__(50);
var forOf = __webpack_require__(27);
var anInstance = __webpack_require__(47);
var isObject = __webpack_require__(8);
var setToStringTag = __webpack_require__(26);
var dP = __webpack_require__(7).f;
var each = __webpack_require__(148)(0);
var DESCRIPTORS = __webpack_require__(10);

module.exports = function (NAME, wrapper, methods, common, IS_MAP, IS_WEAK) {
  var Base = global[NAME];
  var C = Base;
  var ADDER = IS_MAP ? 'set' : 'add';
  var proto = C && C.prototype;
  var O = {};
  if (!DESCRIPTORS || typeof C != 'function' || !(IS_WEAK || proto.forEach && !fails(function () {
    new C().entries().next();
  }))) {
    // create collection constructor
    C = common.getConstructor(wrapper, NAME, IS_MAP, ADDER);
    redefineAll(C.prototype, methods);
    meta.NEED = true;
  } else {
    C = wrapper(function (target, iterable) {
      anInstance(target, C, NAME, '_c');
      target._c = new Base();
      if (iterable != undefined) forOf(iterable, IS_MAP, target[ADDER], target);
    });
    each('add,clear,delete,forEach,get,has,set,keys,values,entries,toJSON'.split(','), function (KEY) {
      var IS_ADDER = KEY == 'add' || KEY == 'set';
      if (KEY in proto && !(IS_WEAK && KEY == 'clear')) hide(C.prototype, KEY, function (a, b) {
        anInstance(this, C, KEY);
        if (!IS_ADDER && IS_WEAK && !isObject(a)) return KEY == 'get' ? undefined : false;
        var result = this._c[KEY](a === 0 ? 0 : a, b);
        return IS_ADDER ? this : result;
      });
    });
    IS_WEAK || dP(C.prototype, 'size', {
      get: function () {
        return this._c.size;
      }
    });
  }

  setToStringTag(C, NAME);

  O[NAME] = C;
  $export($export.G + $export.W + $export.F, O);

  if (!IS_WEAK) common.setStrong(C, NAME, IS_MAP);

  return C;
};


/***/ }),
/* 84 */
/***/ (function(module, exports, __webpack_require__) {

// https://github.com/DavidBruant/Map-Set.prototype.toJSON
var classof = __webpack_require__(35);
var from = __webpack_require__(152);
module.exports = function (NAME) {
  return function toJSON() {
    if (classof(this) != NAME) throw TypeError(NAME + "#toJSON isn't generic");
    return from(this);
  };
};


/***/ }),
/* 85 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

// https://tc39.github.io/proposal-setmap-offrom/
var $export = __webpack_require__(3);

module.exports = function (COLLECTION) {
  $export($export.S, COLLECTION, { of: function of() {
    var length = arguments.length;
    var A = new Array(length);
    while (length--) A[length] = arguments[length];
    return new this(A);
  } });
};


/***/ }),
/* 86 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

// https://tc39.github.io/proposal-setmap-offrom/
var $export = __webpack_require__(3);
var aFunction = __webpack_require__(23);
var ctx = __webpack_require__(14);
var forOf = __webpack_require__(27);

module.exports = function (COLLECTION) {
  $export($export.S, COLLECTION, { from: function from(source /* , mapFn, thisArg */) {
    var mapFn = arguments[1];
    var mapping, A, n, cb;
    aFunction(this);
    mapping = mapFn !== undefined;
    if (mapping) aFunction(mapFn);
    if (source == undefined) return new this();
    A = [];
    if (mapping) {
      n = 0;
      cb = ctx(mapFn, arguments[2], 2);
      forOf(source, false, function (nextItem) {
        A.push(cb(nextItem, n++));
      });
    } else {
      forOf(source, false, A.push, A);
    }
    return new this(A);
  } });
};


/***/ }),
/* 87 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _classCallCheck2 = __webpack_require__(0);

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = __webpack_require__(1);

var _createClass3 = _interopRequireDefault(_createClass2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var TileResolver = function () {
    function TileResolver(matrix) {
        var tileSize = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 16;
        (0, _classCallCheck3.default)(this, TileResolver);

        this.matrix = matrix;
        this.tileSize = tileSize;
    }

    (0, _createClass3.default)(TileResolver, [{
        key: "toIndex",
        value: function toIndex(pos) {
            return Math.floor(pos / this.tileSize);
        }
    }, {
        key: "toIndexRange",
        value: function toIndexRange(pos1, pos2) {
            var pMax = Math.ceil(pos2 / this.tileSize) * this.tileSize;
            var range = [];
            var pos = pos1;
            do {
                range.push(this.toIndex(pos));
                pos += this.tileSize;
            } while (pos < pMax);

            return range;
        }
    }, {
        key: "getByIndex",
        value: function getByIndex(indexX, indexY) {
            var tile = this.matrix.get(indexX, indexY);
            var x1 = indexX * this.tileSize;
            var x2 = x1 + this.tileSize;
            var y1 = indexY * this.tileSize;
            var y2 = y1 + this.tileSize;
            if (tile) {
                return {
                    tile: tile,
                    x1: x1,
                    x2: x2,
                    y1: y1,
                    y2: y2
                };
            }
        }
    }, {
        key: "searchByPosition",
        value: function searchByPosition(posX, posY) {
            return this.getByIndex(this.toIndex(posX), this.toIndex(posY));
        }
    }, {
        key: "searchByRange",
        value: function searchByRange(x1, x2, y1, y2) {
            var _this = this;

            var matches = [];
            this.toIndexRange(x1, x2).forEach(function (indexX) {
                _this.toIndexRange(y1, y2).forEach(function (indexY) {
                    var match = _this.getByIndex(indexX, indexY);
                    if (match) {
                        matches.push(match);
                    }
                });
            });

            return matches;
        }
    }]);
    return TileResolver;
}();

exports.default = TileResolver;

/***/ }),
/* 88 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;

var _from = __webpack_require__(158);

var _from2 = _interopRequireDefault(_from);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = function (arr) {
  if (Array.isArray(arr)) {
    for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) {
      arr2[i] = arr[i];
    }

    return arr2;
  } else {
    return (0, _from2.default)(arr);
  }
};

/***/ }),
/* 89 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _map = __webpack_require__(90);

var _map2 = _interopRequireDefault(_map);

var _classCallCheck2 = __webpack_require__(0);

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = __webpack_require__(1);

var _createClass3 = _interopRequireDefault(_createClass2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var SpriteSheet = function () {
    function SpriteSheet(image, width, height) {
        (0, _classCallCheck3.default)(this, SpriteSheet);

        this.image = image;
        this.width = width;
        this.height = height;
        this.tiles = new _map2.default();
        this.animations = new _map2.default();
    }

    (0, _createClass3.default)(SpriteSheet, [{
        key: 'defineAnim',
        value: function defineAnim(name, animation) {
            this.animations.set(name, animation);
        }
    }, {
        key: 'define',
        value: function define(name, x, y, width, height) {
            var _this = this;

            // define a sprite in the image with name
            // 明确定义一块位于sprite sheet中x,y位置width, height的sprite
            var buffers = [false, true].map(function (flip) {
                var buffer = document.createElement('canvas');
                buffer.width = width;
                buffer.height = height;

                var context = buffer.getContext('2d');

                if (flip) {
                    // Mirror the canvas
                    context.scale(-1, 1);
                    context.translate(-width, 0);
                }

                context.drawImage(_this.image, x, y, width, height, 0, 0, width, height);

                return buffer;
            });

            this.tiles.set(name, buffers);
        }
    }, {
        key: 'defineTile',
        value: function defineTile(name, x, y) {
            this.define(name, x * this.width, y * this.height, this.width, this.height);
        }
    }, {
        key: 'draw',
        value: function draw(name, context, x, y) {
            var flip = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : false;

            var buffer = this.tiles.get(name)[flip ? 1 : 0];
            context.drawImage(buffer, x, y);
        }
    }, {
        key: 'drawTile',
        value: function drawTile(name, context, x, y) {
            this.draw(name, context, x * this.width, y * this.height);
        }
    }, {
        key: 'drawAnim',
        value: function drawAnim(name, context, x, y, distance) {
            var anim = this.animations.get(name);
            this.drawTile(anim(distance), context, x, y);
        }
    }]);
    return SpriteSheet;
}();

exports.default = SpriteSheet;

/***/ }),
/* 90 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = { "default": __webpack_require__(162), __esModule: true };

/***/ }),
/* 91 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _getPrototypeOf = __webpack_require__(11);

var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

var _classCallCheck2 = __webpack_require__(0);

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = __webpack_require__(1);

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = __webpack_require__(12);

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = __webpack_require__(13);

var _inherits3 = _interopRequireDefault(_inherits2);

var _Entity = __webpack_require__(6);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var PendulumMove = function (_Trait) {
    (0, _inherits3.default)(PendulumMove, _Trait);

    function PendulumMove() {
        (0, _classCallCheck3.default)(this, PendulumMove);

        var _this = (0, _possibleConstructorReturn3.default)(this, (PendulumMove.__proto__ || (0, _getPrototypeOf2.default)(PendulumMove)).call(this, 'pendulumMove'));

        _this.enable = true;
        _this.speed = -30;
        return _this;
    }

    (0, _createClass3.default)(PendulumMove, [{
        key: 'obstruct',
        value: function obstruct(koopa, sides) {
            if (sides === _Entity.Sides.LEFT || sides === _Entity.Sides.RIGHT) {
                this.speed = -this.speed;
            }
        }
    }, {
        key: 'update',
        value: function update(entity, deltaTime) {
            entity.lifeTime += deltaTime;
            if (this.enable) {
                entity.vel.x = this.speed;
            }
        }
    }]);
    return PendulumMove;
}(_Entity.Trait);

exports.default = PendulumMove;

/***/ }),
/* 92 */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(93);
module.exports = __webpack_require__(94);


/***/ }),
/* 93 */
/***/ (function(module, exports) {

(function(self) {
  'use strict';

  if (self.fetch) {
    return
  }

  var support = {
    searchParams: 'URLSearchParams' in self,
    iterable: 'Symbol' in self && 'iterator' in Symbol,
    blob: 'FileReader' in self && 'Blob' in self && (function() {
      try {
        new Blob()
        return true
      } catch(e) {
        return false
      }
    })(),
    formData: 'FormData' in self,
    arrayBuffer: 'ArrayBuffer' in self
  }

  if (support.arrayBuffer) {
    var viewClasses = [
      '[object Int8Array]',
      '[object Uint8Array]',
      '[object Uint8ClampedArray]',
      '[object Int16Array]',
      '[object Uint16Array]',
      '[object Int32Array]',
      '[object Uint32Array]',
      '[object Float32Array]',
      '[object Float64Array]'
    ]

    var isDataView = function(obj) {
      return obj && DataView.prototype.isPrototypeOf(obj)
    }

    var isArrayBufferView = ArrayBuffer.isView || function(obj) {
      return obj && viewClasses.indexOf(Object.prototype.toString.call(obj)) > -1
    }
  }

  function normalizeName(name) {
    if (typeof name !== 'string') {
      name = String(name)
    }
    if (/[^a-z0-9\-#$%&'*+.\^_`|~]/i.test(name)) {
      throw new TypeError('Invalid character in header field name')
    }
    return name.toLowerCase()
  }

  function normalizeValue(value) {
    if (typeof value !== 'string') {
      value = String(value)
    }
    return value
  }

  // Build a destructive iterator for the value list
  function iteratorFor(items) {
    var iterator = {
      next: function() {
        var value = items.shift()
        return {done: value === undefined, value: value}
      }
    }

    if (support.iterable) {
      iterator[Symbol.iterator] = function() {
        return iterator
      }
    }

    return iterator
  }

  function Headers(headers) {
    this.map = {}

    if (headers instanceof Headers) {
      headers.forEach(function(value, name) {
        this.append(name, value)
      }, this)
    } else if (Array.isArray(headers)) {
      headers.forEach(function(header) {
        this.append(header[0], header[1])
      }, this)
    } else if (headers) {
      Object.getOwnPropertyNames(headers).forEach(function(name) {
        this.append(name, headers[name])
      }, this)
    }
  }

  Headers.prototype.append = function(name, value) {
    name = normalizeName(name)
    value = normalizeValue(value)
    var oldValue = this.map[name]
    this.map[name] = oldValue ? oldValue+','+value : value
  }

  Headers.prototype['delete'] = function(name) {
    delete this.map[normalizeName(name)]
  }

  Headers.prototype.get = function(name) {
    name = normalizeName(name)
    return this.has(name) ? this.map[name] : null
  }

  Headers.prototype.has = function(name) {
    return this.map.hasOwnProperty(normalizeName(name))
  }

  Headers.prototype.set = function(name, value) {
    this.map[normalizeName(name)] = normalizeValue(value)
  }

  Headers.prototype.forEach = function(callback, thisArg) {
    for (var name in this.map) {
      if (this.map.hasOwnProperty(name)) {
        callback.call(thisArg, this.map[name], name, this)
      }
    }
  }

  Headers.prototype.keys = function() {
    var items = []
    this.forEach(function(value, name) { items.push(name) })
    return iteratorFor(items)
  }

  Headers.prototype.values = function() {
    var items = []
    this.forEach(function(value) { items.push(value) })
    return iteratorFor(items)
  }

  Headers.prototype.entries = function() {
    var items = []
    this.forEach(function(value, name) { items.push([name, value]) })
    return iteratorFor(items)
  }

  if (support.iterable) {
    Headers.prototype[Symbol.iterator] = Headers.prototype.entries
  }

  function consumed(body) {
    if (body.bodyUsed) {
      return Promise.reject(new TypeError('Already read'))
    }
    body.bodyUsed = true
  }

  function fileReaderReady(reader) {
    return new Promise(function(resolve, reject) {
      reader.onload = function() {
        resolve(reader.result)
      }
      reader.onerror = function() {
        reject(reader.error)
      }
    })
  }

  function readBlobAsArrayBuffer(blob) {
    var reader = new FileReader()
    var promise = fileReaderReady(reader)
    reader.readAsArrayBuffer(blob)
    return promise
  }

  function readBlobAsText(blob) {
    var reader = new FileReader()
    var promise = fileReaderReady(reader)
    reader.readAsText(blob)
    return promise
  }

  function readArrayBufferAsText(buf) {
    var view = new Uint8Array(buf)
    var chars = new Array(view.length)

    for (var i = 0; i < view.length; i++) {
      chars[i] = String.fromCharCode(view[i])
    }
    return chars.join('')
  }

  function bufferClone(buf) {
    if (buf.slice) {
      return buf.slice(0)
    } else {
      var view = new Uint8Array(buf.byteLength)
      view.set(new Uint8Array(buf))
      return view.buffer
    }
  }

  function Body() {
    this.bodyUsed = false

    this._initBody = function(body) {
      this._bodyInit = body
      if (!body) {
        this._bodyText = ''
      } else if (typeof body === 'string') {
        this._bodyText = body
      } else if (support.blob && Blob.prototype.isPrototypeOf(body)) {
        this._bodyBlob = body
      } else if (support.formData && FormData.prototype.isPrototypeOf(body)) {
        this._bodyFormData = body
      } else if (support.searchParams && URLSearchParams.prototype.isPrototypeOf(body)) {
        this._bodyText = body.toString()
      } else if (support.arrayBuffer && support.blob && isDataView(body)) {
        this._bodyArrayBuffer = bufferClone(body.buffer)
        // IE 10-11 can't handle a DataView body.
        this._bodyInit = new Blob([this._bodyArrayBuffer])
      } else if (support.arrayBuffer && (ArrayBuffer.prototype.isPrototypeOf(body) || isArrayBufferView(body))) {
        this._bodyArrayBuffer = bufferClone(body)
      } else {
        throw new Error('unsupported BodyInit type')
      }

      if (!this.headers.get('content-type')) {
        if (typeof body === 'string') {
          this.headers.set('content-type', 'text/plain;charset=UTF-8')
        } else if (this._bodyBlob && this._bodyBlob.type) {
          this.headers.set('content-type', this._bodyBlob.type)
        } else if (support.searchParams && URLSearchParams.prototype.isPrototypeOf(body)) {
          this.headers.set('content-type', 'application/x-www-form-urlencoded;charset=UTF-8')
        }
      }
    }

    if (support.blob) {
      this.blob = function() {
        var rejected = consumed(this)
        if (rejected) {
          return rejected
        }

        if (this._bodyBlob) {
          return Promise.resolve(this._bodyBlob)
        } else if (this._bodyArrayBuffer) {
          return Promise.resolve(new Blob([this._bodyArrayBuffer]))
        } else if (this._bodyFormData) {
          throw new Error('could not read FormData body as blob')
        } else {
          return Promise.resolve(new Blob([this._bodyText]))
        }
      }

      this.arrayBuffer = function() {
        if (this._bodyArrayBuffer) {
          return consumed(this) || Promise.resolve(this._bodyArrayBuffer)
        } else {
          return this.blob().then(readBlobAsArrayBuffer)
        }
      }
    }

    this.text = function() {
      var rejected = consumed(this)
      if (rejected) {
        return rejected
      }

      if (this._bodyBlob) {
        return readBlobAsText(this._bodyBlob)
      } else if (this._bodyArrayBuffer) {
        return Promise.resolve(readArrayBufferAsText(this._bodyArrayBuffer))
      } else if (this._bodyFormData) {
        throw new Error('could not read FormData body as text')
      } else {
        return Promise.resolve(this._bodyText)
      }
    }

    if (support.formData) {
      this.formData = function() {
        return this.text().then(decode)
      }
    }

    this.json = function() {
      return this.text().then(JSON.parse)
    }

    return this
  }

  // HTTP methods whose capitalization should be normalized
  var methods = ['DELETE', 'GET', 'HEAD', 'OPTIONS', 'POST', 'PUT']

  function normalizeMethod(method) {
    var upcased = method.toUpperCase()
    return (methods.indexOf(upcased) > -1) ? upcased : method
  }

  function Request(input, options) {
    options = options || {}
    var body = options.body

    if (input instanceof Request) {
      if (input.bodyUsed) {
        throw new TypeError('Already read')
      }
      this.url = input.url
      this.credentials = input.credentials
      if (!options.headers) {
        this.headers = new Headers(input.headers)
      }
      this.method = input.method
      this.mode = input.mode
      if (!body && input._bodyInit != null) {
        body = input._bodyInit
        input.bodyUsed = true
      }
    } else {
      this.url = String(input)
    }

    this.credentials = options.credentials || this.credentials || 'omit'
    if (options.headers || !this.headers) {
      this.headers = new Headers(options.headers)
    }
    this.method = normalizeMethod(options.method || this.method || 'GET')
    this.mode = options.mode || this.mode || null
    this.referrer = null

    if ((this.method === 'GET' || this.method === 'HEAD') && body) {
      throw new TypeError('Body not allowed for GET or HEAD requests')
    }
    this._initBody(body)
  }

  Request.prototype.clone = function() {
    return new Request(this, { body: this._bodyInit })
  }

  function decode(body) {
    var form = new FormData()
    body.trim().split('&').forEach(function(bytes) {
      if (bytes) {
        var split = bytes.split('=')
        var name = split.shift().replace(/\+/g, ' ')
        var value = split.join('=').replace(/\+/g, ' ')
        form.append(decodeURIComponent(name), decodeURIComponent(value))
      }
    })
    return form
  }

  function parseHeaders(rawHeaders) {
    var headers = new Headers()
    rawHeaders.split(/\r?\n/).forEach(function(line) {
      var parts = line.split(':')
      var key = parts.shift().trim()
      if (key) {
        var value = parts.join(':').trim()
        headers.append(key, value)
      }
    })
    return headers
  }

  Body.call(Request.prototype)

  function Response(bodyInit, options) {
    if (!options) {
      options = {}
    }

    this.type = 'default'
    this.status = 'status' in options ? options.status : 200
    this.ok = this.status >= 200 && this.status < 300
    this.statusText = 'statusText' in options ? options.statusText : 'OK'
    this.headers = new Headers(options.headers)
    this.url = options.url || ''
    this._initBody(bodyInit)
  }

  Body.call(Response.prototype)

  Response.prototype.clone = function() {
    return new Response(this._bodyInit, {
      status: this.status,
      statusText: this.statusText,
      headers: new Headers(this.headers),
      url: this.url
    })
  }

  Response.error = function() {
    var response = new Response(null, {status: 0, statusText: ''})
    response.type = 'error'
    return response
  }

  var redirectStatuses = [301, 302, 303, 307, 308]

  Response.redirect = function(url, status) {
    if (redirectStatuses.indexOf(status) === -1) {
      throw new RangeError('Invalid status code')
    }

    return new Response(null, {status: status, headers: {location: url}})
  }

  self.Headers = Headers
  self.Request = Request
  self.Response = Response

  self.fetch = function(input, init) {
    return new Promise(function(resolve, reject) {
      var request = new Request(input, init)
      var xhr = new XMLHttpRequest()

      xhr.onload = function() {
        var options = {
          status: xhr.status,
          statusText: xhr.statusText,
          headers: parseHeaders(xhr.getAllResponseHeaders() || '')
        }
        options.url = 'responseURL' in xhr ? xhr.responseURL : options.headers.get('X-Request-URL')
        var body = 'response' in xhr ? xhr.response : xhr.responseText
        resolve(new Response(body, options))
      }

      xhr.onerror = function() {
        reject(new TypeError('Network request failed'))
      }

      xhr.ontimeout = function() {
        reject(new TypeError('Network request failed'))
      }

      xhr.open(request.method, request.url, true)

      if (request.credentials === 'include') {
        xhr.withCredentials = true
      }

      if ('responseType' in xhr && support.blob) {
        xhr.responseType = 'blob'
      }

      request.headers.forEach(function(value, name) {
        xhr.setRequestHeader(name, value)
      })

      xhr.send(typeof request._bodyInit === 'undefined' ? null : request._bodyInit)
    })
  }
  self.fetch.polyfill = true
})(typeof self !== 'undefined' ? self : this);


/***/ }),
/* 94 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _regenerator = __webpack_require__(61);

var _regenerator2 = _interopRequireDefault(_regenerator);

var _promise = __webpack_require__(22);

var _promise2 = _interopRequireDefault(_promise);

var _slicedToArray2 = __webpack_require__(36);

var _slicedToArray3 = _interopRequireDefault(_slicedToArray2);

var _asyncToGenerator2 = __webpack_require__(115);

var _asyncToGenerator3 = _interopRequireDefault(_asyncToGenerator2);

var main = function () {
    var _ref = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee(canvas) {
        var context, _ref2, _ref3, entityFactory, font, loadLevel, level, camera, mario, playerEnv, input, timer;

        return _regenerator2.default.wrap(function _callee$(_context) {
            while (1) {
                switch (_context.prev = _context.next) {
                    case 0:
                        context = canvas.getContext('2d');
                        _context.next = 3;
                        return _promise2.default.all([(0, _entities.loadEntities)(), (0, _font.loadFont)()]);

                    case 3:
                        _ref2 = _context.sent;
                        _ref3 = (0, _slicedToArray3.default)(_ref2, 2);
                        entityFactory = _ref3[0];
                        font = _ref3[1];
                        _context.next = 9;
                        return (0, _level.createLevelLoader)(entityFactory);

                    case 9:
                        loadLevel = _context.sent;
                        _context.next = 12;
                        return loadLevel('1-1');

                    case 12:
                        level = _context.sent;
                        camera = new _Camera2.default();
                        mario = entityFactory.mario();

                        mario.pos.set(64, 100);
                        level.entities.add(mario);

                        playerEnv = createPlayerEnv(mario);

                        level.entities.add(playerEnv);

                        input = (0, _input.setupKeyboard)(mario);

                        input.listenTo(window);

                        level.comp.layers.push((0, _dashboard.createDashboardLayer)(font, playerEnv));

                        /*Debug Tools : */
                        // level.comp.layers.push(
                        //     createCollisionLayer(level),
                        //     createCameraLayer(camera));
                        // setupMouseControl(canvas, mario, camera);


                        timer = new _Timer2.default(1 / 60);


                        timer.update = function update(deltaTime) {
                            level.update(deltaTime);

                            camera.pos.x = Math.max(0, mario.pos.x - 100);

                            level.comp.draw(context, camera);
                        };

                        timer.start();

                    case 25:
                    case 'end':
                        return _context.stop();
                }
            }
        }, _callee, this);
    }));

    return function main(_x) {
        return _ref.apply(this, arguments);
    };
}();

__webpack_require__(116);

__webpack_require__(117);

var _Timer = __webpack_require__(118);

var _Timer2 = _interopRequireDefault(_Timer);

var _Camera = __webpack_require__(122);

var _Camera2 = _interopRequireDefault(_Camera);

var _Entity = __webpack_require__(6);

var _Entity2 = _interopRequireDefault(_Entity);

var _PlayerController = __webpack_require__(130);

var _PlayerController2 = _interopRequireDefault(_PlayerController);

var _level = __webpack_require__(143);

var _font = __webpack_require__(170);

var _entities = __webpack_require__(171);

var _dashboard = __webpack_require__(182);

var _input = __webpack_require__(184);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// import {createCollisionLayer} from './layers/collision.js'
// import {createCameraLayer} from './layers/camera.js';
// import {setupMouseControl} from './debug.js';


function createPlayerEnv(playerEntity) {
    var playerEnv = new _Entity2.default();
    var playerControl = new _PlayerController2.default();
    playerControl.setPlayer(playerEntity);
    playerEnv.addTrait(playerControl);

    return playerEnv;
}
/*TODO: CSS import in Js, I don't like it.*/

var canvas = document.getElementById('screen');
main(canvas);

/***/ }),
/* 95 */
/***/ (function(module, exports, __webpack_require__) {

/**
 * Copyright (c) 2014-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

// This method of obtaining a reference to the global object needs to be
// kept identical to the way it is obtained in runtime.js
var g = (function() { return this })() || Function("return this")();

// Use `getOwnPropertyNames` because not all browsers support calling
// `hasOwnProperty` on the global `self` object in a worker. See #183.
var hadRuntime = g.regeneratorRuntime &&
  Object.getOwnPropertyNames(g).indexOf("regeneratorRuntime") >= 0;

// Save the old regeneratorRuntime in case it needs to be restored later.
var oldRuntime = hadRuntime && g.regeneratorRuntime;

// Force reevalutation of runtime.js.
g.regeneratorRuntime = undefined;

module.exports = __webpack_require__(96);

if (hadRuntime) {
  // Restore the original runtime.
  g.regeneratorRuntime = oldRuntime;
} else {
  // Remove the global property added by runtime.js.
  try {
    delete g.regeneratorRuntime;
  } catch(e) {
    g.regeneratorRuntime = undefined;
  }
}


/***/ }),
/* 96 */
/***/ (function(module, exports) {

/**
 * Copyright (c) 2014-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

!(function(global) {
  "use strict";

  var Op = Object.prototype;
  var hasOwn = Op.hasOwnProperty;
  var undefined; // More compressible than void 0.
  var $Symbol = typeof Symbol === "function" ? Symbol : {};
  var iteratorSymbol = $Symbol.iterator || "@@iterator";
  var asyncIteratorSymbol = $Symbol.asyncIterator || "@@asyncIterator";
  var toStringTagSymbol = $Symbol.toStringTag || "@@toStringTag";

  var inModule = typeof module === "object";
  var runtime = global.regeneratorRuntime;
  if (runtime) {
    if (inModule) {
      // If regeneratorRuntime is defined globally and we're in a module,
      // make the exports object identical to regeneratorRuntime.
      module.exports = runtime;
    }
    // Don't bother evaluating the rest of this file if the runtime was
    // already defined globally.
    return;
  }

  // Define the runtime globally (as expected by generated code) as either
  // module.exports (if we're in a module) or a new, empty object.
  runtime = global.regeneratorRuntime = inModule ? module.exports : {};

  function wrap(innerFn, outerFn, self, tryLocsList) {
    // If outerFn provided and outerFn.prototype is a Generator, then outerFn.prototype instanceof Generator.
    var protoGenerator = outerFn && outerFn.prototype instanceof Generator ? outerFn : Generator;
    var generator = Object.create(protoGenerator.prototype);
    var context = new Context(tryLocsList || []);

    // The ._invoke method unifies the implementations of the .next,
    // .throw, and .return methods.
    generator._invoke = makeInvokeMethod(innerFn, self, context);

    return generator;
  }
  runtime.wrap = wrap;

  // Try/catch helper to minimize deoptimizations. Returns a completion
  // record like context.tryEntries[i].completion. This interface could
  // have been (and was previously) designed to take a closure to be
  // invoked without arguments, but in all the cases we care about we
  // already have an existing method we want to call, so there's no need
  // to create a new function object. We can even get away with assuming
  // the method takes exactly one argument, since that happens to be true
  // in every case, so we don't have to touch the arguments object. The
  // only additional allocation required is the completion record, which
  // has a stable shape and so hopefully should be cheap to allocate.
  function tryCatch(fn, obj, arg) {
    try {
      return { type: "normal", arg: fn.call(obj, arg) };
    } catch (err) {
      return { type: "throw", arg: err };
    }
  }

  var GenStateSuspendedStart = "suspendedStart";
  var GenStateSuspendedYield = "suspendedYield";
  var GenStateExecuting = "executing";
  var GenStateCompleted = "completed";

  // Returning this object from the innerFn has the same effect as
  // breaking out of the dispatch switch statement.
  var ContinueSentinel = {};

  // Dummy constructor functions that we use as the .constructor and
  // .constructor.prototype properties for functions that return Generator
  // objects. For full spec compliance, you may wish to configure your
  // minifier not to mangle the names of these two functions.
  function Generator() {}
  function GeneratorFunction() {}
  function GeneratorFunctionPrototype() {}

  // This is a polyfill for %IteratorPrototype% for environments that
  // don't natively support it.
  var IteratorPrototype = {};
  IteratorPrototype[iteratorSymbol] = function () {
    return this;
  };

  var getProto = Object.getPrototypeOf;
  var NativeIteratorPrototype = getProto && getProto(getProto(values([])));
  if (NativeIteratorPrototype &&
      NativeIteratorPrototype !== Op &&
      hasOwn.call(NativeIteratorPrototype, iteratorSymbol)) {
    // This environment has a native %IteratorPrototype%; use it instead
    // of the polyfill.
    IteratorPrototype = NativeIteratorPrototype;
  }

  var Gp = GeneratorFunctionPrototype.prototype =
    Generator.prototype = Object.create(IteratorPrototype);
  GeneratorFunction.prototype = Gp.constructor = GeneratorFunctionPrototype;
  GeneratorFunctionPrototype.constructor = GeneratorFunction;
  GeneratorFunctionPrototype[toStringTagSymbol] =
    GeneratorFunction.displayName = "GeneratorFunction";

  // Helper for defining the .next, .throw, and .return methods of the
  // Iterator interface in terms of a single ._invoke method.
  function defineIteratorMethods(prototype) {
    ["next", "throw", "return"].forEach(function(method) {
      prototype[method] = function(arg) {
        return this._invoke(method, arg);
      };
    });
  }

  runtime.isGeneratorFunction = function(genFun) {
    var ctor = typeof genFun === "function" && genFun.constructor;
    return ctor
      ? ctor === GeneratorFunction ||
        // For the native GeneratorFunction constructor, the best we can
        // do is to check its .name property.
        (ctor.displayName || ctor.name) === "GeneratorFunction"
      : false;
  };

  runtime.mark = function(genFun) {
    if (Object.setPrototypeOf) {
      Object.setPrototypeOf(genFun, GeneratorFunctionPrototype);
    } else {
      genFun.__proto__ = GeneratorFunctionPrototype;
      if (!(toStringTagSymbol in genFun)) {
        genFun[toStringTagSymbol] = "GeneratorFunction";
      }
    }
    genFun.prototype = Object.create(Gp);
    return genFun;
  };

  // Within the body of any async function, `await x` is transformed to
  // `yield regeneratorRuntime.awrap(x)`, so that the runtime can test
  // `hasOwn.call(value, "__await")` to determine if the yielded value is
  // meant to be awaited.
  runtime.awrap = function(arg) {
    return { __await: arg };
  };

  function AsyncIterator(generator) {
    function invoke(method, arg, resolve, reject) {
      var record = tryCatch(generator[method], generator, arg);
      if (record.type === "throw") {
        reject(record.arg);
      } else {
        var result = record.arg;
        var value = result.value;
        if (value &&
            typeof value === "object" &&
            hasOwn.call(value, "__await")) {
          return Promise.resolve(value.__await).then(function(value) {
            invoke("next", value, resolve, reject);
          }, function(err) {
            invoke("throw", err, resolve, reject);
          });
        }

        return Promise.resolve(value).then(function(unwrapped) {
          // When a yielded Promise is resolved, its final value becomes
          // the .value of the Promise<{value,done}> result for the
          // current iteration. If the Promise is rejected, however, the
          // result for this iteration will be rejected with the same
          // reason. Note that rejections of yielded Promises are not
          // thrown back into the generator function, as is the case
          // when an awaited Promise is rejected. This difference in
          // behavior between yield and await is important, because it
          // allows the consumer to decide what to do with the yielded
          // rejection (swallow it and continue, manually .throw it back
          // into the generator, abandon iteration, whatever). With
          // await, by contrast, there is no opportunity to examine the
          // rejection reason outside the generator function, so the
          // only option is to throw it from the await expression, and
          // let the generator function handle the exception.
          result.value = unwrapped;
          resolve(result);
        }, reject);
      }
    }

    var previousPromise;

    function enqueue(method, arg) {
      function callInvokeWithMethodAndArg() {
        return new Promise(function(resolve, reject) {
          invoke(method, arg, resolve, reject);
        });
      }

      return previousPromise =
        // If enqueue has been called before, then we want to wait until
        // all previous Promises have been resolved before calling invoke,
        // so that results are always delivered in the correct order. If
        // enqueue has not been called before, then it is important to
        // call invoke immediately, without waiting on a callback to fire,
        // so that the async generator function has the opportunity to do
        // any necessary setup in a predictable way. This predictability
        // is why the Promise constructor synchronously invokes its
        // executor callback, and why async functions synchronously
        // execute code before the first await. Since we implement simple
        // async functions in terms of async generators, it is especially
        // important to get this right, even though it requires care.
        previousPromise ? previousPromise.then(
          callInvokeWithMethodAndArg,
          // Avoid propagating failures to Promises returned by later
          // invocations of the iterator.
          callInvokeWithMethodAndArg
        ) : callInvokeWithMethodAndArg();
    }

    // Define the unified helper method that is used to implement .next,
    // .throw, and .return (see defineIteratorMethods).
    this._invoke = enqueue;
  }

  defineIteratorMethods(AsyncIterator.prototype);
  AsyncIterator.prototype[asyncIteratorSymbol] = function () {
    return this;
  };
  runtime.AsyncIterator = AsyncIterator;

  // Note that simple async functions are implemented on top of
  // AsyncIterator objects; they just return a Promise for the value of
  // the final result produced by the iterator.
  runtime.async = function(innerFn, outerFn, self, tryLocsList) {
    var iter = new AsyncIterator(
      wrap(innerFn, outerFn, self, tryLocsList)
    );

    return runtime.isGeneratorFunction(outerFn)
      ? iter // If outerFn is a generator, return the full iterator.
      : iter.next().then(function(result) {
          return result.done ? result.value : iter.next();
        });
  };

  function makeInvokeMethod(innerFn, self, context) {
    var state = GenStateSuspendedStart;

    return function invoke(method, arg) {
      if (state === GenStateExecuting) {
        throw new Error("Generator is already running");
      }

      if (state === GenStateCompleted) {
        if (method === "throw") {
          throw arg;
        }

        // Be forgiving, per 25.3.3.3.3 of the spec:
        // https://people.mozilla.org/~jorendorff/es6-draft.html#sec-generatorresume
        return doneResult();
      }

      context.method = method;
      context.arg = arg;

      while (true) {
        var delegate = context.delegate;
        if (delegate) {
          var delegateResult = maybeInvokeDelegate(delegate, context);
          if (delegateResult) {
            if (delegateResult === ContinueSentinel) continue;
            return delegateResult;
          }
        }

        if (context.method === "next") {
          // Setting context._sent for legacy support of Babel's
          // function.sent implementation.
          context.sent = context._sent = context.arg;

        } else if (context.method === "throw") {
          if (state === GenStateSuspendedStart) {
            state = GenStateCompleted;
            throw context.arg;
          }

          context.dispatchException(context.arg);

        } else if (context.method === "return") {
          context.abrupt("return", context.arg);
        }

        state = GenStateExecuting;

        var record = tryCatch(innerFn, self, context);
        if (record.type === "normal") {
          // If an exception is thrown from innerFn, we leave state ===
          // GenStateExecuting and loop back for another invocation.
          state = context.done
            ? GenStateCompleted
            : GenStateSuspendedYield;

          if (record.arg === ContinueSentinel) {
            continue;
          }

          return {
            value: record.arg,
            done: context.done
          };

        } else if (record.type === "throw") {
          state = GenStateCompleted;
          // Dispatch the exception by looping back around to the
          // context.dispatchException(context.arg) call above.
          context.method = "throw";
          context.arg = record.arg;
        }
      }
    };
  }

  // Call delegate.iterator[context.method](context.arg) and handle the
  // result, either by returning a { value, done } result from the
  // delegate iterator, or by modifying context.method and context.arg,
  // setting context.delegate to null, and returning the ContinueSentinel.
  function maybeInvokeDelegate(delegate, context) {
    var method = delegate.iterator[context.method];
    if (method === undefined) {
      // A .throw or .return when the delegate iterator has no .throw
      // method always terminates the yield* loop.
      context.delegate = null;

      if (context.method === "throw") {
        if (delegate.iterator.return) {
          // If the delegate iterator has a return method, give it a
          // chance to clean up.
          context.method = "return";
          context.arg = undefined;
          maybeInvokeDelegate(delegate, context);

          if (context.method === "throw") {
            // If maybeInvokeDelegate(context) changed context.method from
            // "return" to "throw", let that override the TypeError below.
            return ContinueSentinel;
          }
        }

        context.method = "throw";
        context.arg = new TypeError(
          "The iterator does not provide a 'throw' method");
      }

      return ContinueSentinel;
    }

    var record = tryCatch(method, delegate.iterator, context.arg);

    if (record.type === "throw") {
      context.method = "throw";
      context.arg = record.arg;
      context.delegate = null;
      return ContinueSentinel;
    }

    var info = record.arg;

    if (! info) {
      context.method = "throw";
      context.arg = new TypeError("iterator result is not an object");
      context.delegate = null;
      return ContinueSentinel;
    }

    if (info.done) {
      // Assign the result of the finished delegate to the temporary
      // variable specified by delegate.resultName (see delegateYield).
      context[delegate.resultName] = info.value;

      // Resume execution at the desired location (see delegateYield).
      context.next = delegate.nextLoc;

      // If context.method was "throw" but the delegate handled the
      // exception, let the outer generator proceed normally. If
      // context.method was "next", forget context.arg since it has been
      // "consumed" by the delegate iterator. If context.method was
      // "return", allow the original .return call to continue in the
      // outer generator.
      if (context.method !== "return") {
        context.method = "next";
        context.arg = undefined;
      }

    } else {
      // Re-yield the result returned by the delegate method.
      return info;
    }

    // The delegate iterator is finished, so forget it and continue with
    // the outer generator.
    context.delegate = null;
    return ContinueSentinel;
  }

  // Define Generator.prototype.{next,throw,return} in terms of the
  // unified ._invoke helper method.
  defineIteratorMethods(Gp);

  Gp[toStringTagSymbol] = "Generator";

  // A Generator should always return itself as the iterator object when the
  // @@iterator function is called on it. Some browsers' implementations of the
  // iterator prototype chain incorrectly implement this, causing the Generator
  // object to not be returned from this call. This ensures that doesn't happen.
  // See https://github.com/facebook/regenerator/issues/274 for more details.
  Gp[iteratorSymbol] = function() {
    return this;
  };

  Gp.toString = function() {
    return "[object Generator]";
  };

  function pushTryEntry(locs) {
    var entry = { tryLoc: locs[0] };

    if (1 in locs) {
      entry.catchLoc = locs[1];
    }

    if (2 in locs) {
      entry.finallyLoc = locs[2];
      entry.afterLoc = locs[3];
    }

    this.tryEntries.push(entry);
  }

  function resetTryEntry(entry) {
    var record = entry.completion || {};
    record.type = "normal";
    delete record.arg;
    entry.completion = record;
  }

  function Context(tryLocsList) {
    // The root entry object (effectively a try statement without a catch
    // or a finally block) gives us a place to store values thrown from
    // locations where there is no enclosing try statement.
    this.tryEntries = [{ tryLoc: "root" }];
    tryLocsList.forEach(pushTryEntry, this);
    this.reset(true);
  }

  runtime.keys = function(object) {
    var keys = [];
    for (var key in object) {
      keys.push(key);
    }
    keys.reverse();

    // Rather than returning an object with a next method, we keep
    // things simple and return the next function itself.
    return function next() {
      while (keys.length) {
        var key = keys.pop();
        if (key in object) {
          next.value = key;
          next.done = false;
          return next;
        }
      }

      // To avoid creating an additional object, we just hang the .value
      // and .done properties off the next function object itself. This
      // also ensures that the minifier will not anonymize the function.
      next.done = true;
      return next;
    };
  };

  function values(iterable) {
    if (iterable) {
      var iteratorMethod = iterable[iteratorSymbol];
      if (iteratorMethod) {
        return iteratorMethod.call(iterable);
      }

      if (typeof iterable.next === "function") {
        return iterable;
      }

      if (!isNaN(iterable.length)) {
        var i = -1, next = function next() {
          while (++i < iterable.length) {
            if (hasOwn.call(iterable, i)) {
              next.value = iterable[i];
              next.done = false;
              return next;
            }
          }

          next.value = undefined;
          next.done = true;

          return next;
        };

        return next.next = next;
      }
    }

    // Return an iterator with no values.
    return { next: doneResult };
  }
  runtime.values = values;

  function doneResult() {
    return { value: undefined, done: true };
  }

  Context.prototype = {
    constructor: Context,

    reset: function(skipTempReset) {
      this.prev = 0;
      this.next = 0;
      // Resetting context._sent for legacy support of Babel's
      // function.sent implementation.
      this.sent = this._sent = undefined;
      this.done = false;
      this.delegate = null;

      this.method = "next";
      this.arg = undefined;

      this.tryEntries.forEach(resetTryEntry);

      if (!skipTempReset) {
        for (var name in this) {
          // Not sure about the optimal order of these conditions:
          if (name.charAt(0) === "t" &&
              hasOwn.call(this, name) &&
              !isNaN(+name.slice(1))) {
            this[name] = undefined;
          }
        }
      }
    },

    stop: function() {
      this.done = true;

      var rootEntry = this.tryEntries[0];
      var rootRecord = rootEntry.completion;
      if (rootRecord.type === "throw") {
        throw rootRecord.arg;
      }

      return this.rval;
    },

    dispatchException: function(exception) {
      if (this.done) {
        throw exception;
      }

      var context = this;
      function handle(loc, caught) {
        record.type = "throw";
        record.arg = exception;
        context.next = loc;

        if (caught) {
          // If the dispatched exception was caught by a catch block,
          // then let that catch block handle the exception normally.
          context.method = "next";
          context.arg = undefined;
        }

        return !! caught;
      }

      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
        var entry = this.tryEntries[i];
        var record = entry.completion;

        if (entry.tryLoc === "root") {
          // Exception thrown outside of any try block that could handle
          // it, so set the completion value of the entire function to
          // throw the exception.
          return handle("end");
        }

        if (entry.tryLoc <= this.prev) {
          var hasCatch = hasOwn.call(entry, "catchLoc");
          var hasFinally = hasOwn.call(entry, "finallyLoc");

          if (hasCatch && hasFinally) {
            if (this.prev < entry.catchLoc) {
              return handle(entry.catchLoc, true);
            } else if (this.prev < entry.finallyLoc) {
              return handle(entry.finallyLoc);
            }

          } else if (hasCatch) {
            if (this.prev < entry.catchLoc) {
              return handle(entry.catchLoc, true);
            }

          } else if (hasFinally) {
            if (this.prev < entry.finallyLoc) {
              return handle(entry.finallyLoc);
            }

          } else {
            throw new Error("try statement without catch or finally");
          }
        }
      }
    },

    abrupt: function(type, arg) {
      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
        var entry = this.tryEntries[i];
        if (entry.tryLoc <= this.prev &&
            hasOwn.call(entry, "finallyLoc") &&
            this.prev < entry.finallyLoc) {
          var finallyEntry = entry;
          break;
        }
      }

      if (finallyEntry &&
          (type === "break" ||
           type === "continue") &&
          finallyEntry.tryLoc <= arg &&
          arg <= finallyEntry.finallyLoc) {
        // Ignore the finally entry if control is not jumping to a
        // location outside the try/catch block.
        finallyEntry = null;
      }

      var record = finallyEntry ? finallyEntry.completion : {};
      record.type = type;
      record.arg = arg;

      if (finallyEntry) {
        this.method = "next";
        this.next = finallyEntry.finallyLoc;
        return ContinueSentinel;
      }

      return this.complete(record);
    },

    complete: function(record, afterLoc) {
      if (record.type === "throw") {
        throw record.arg;
      }

      if (record.type === "break" ||
          record.type === "continue") {
        this.next = record.arg;
      } else if (record.type === "return") {
        this.rval = this.arg = record.arg;
        this.method = "return";
        this.next = "end";
      } else if (record.type === "normal" && afterLoc) {
        this.next = afterLoc;
      }

      return ContinueSentinel;
    },

    finish: function(finallyLoc) {
      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
        var entry = this.tryEntries[i];
        if (entry.finallyLoc === finallyLoc) {
          this.complete(entry.completion, entry.afterLoc);
          resetTryEntry(entry);
          return ContinueSentinel;
        }
      }
    },

    "catch": function(tryLoc) {
      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
        var entry = this.tryEntries[i];
        if (entry.tryLoc === tryLoc) {
          var record = entry.completion;
          if (record.type === "throw") {
            var thrown = record.arg;
            resetTryEntry(entry);
          }
          return thrown;
        }
      }

      // The context.catch method must only be called with a location
      // argument that corresponds to a known catch block.
      throw new Error("illegal catch attempt");
    },

    delegateYield: function(iterable, resultName, nextLoc) {
      this.delegate = {
        iterator: values(iterable),
        resultName: resultName,
        nextLoc: nextLoc
      };

      if (this.method === "next") {
        // Deliberately forget the last sent value so that we don't
        // accidentally pass it on to the delegate.
        this.arg = undefined;
      }

      return ContinueSentinel;
    }
  };
})(
  // In sloppy mode, unbound `this` refers to the global object, fallback to
  // Function constructor if we're in global strict mode. That is sadly a form
  // of indirect eval which violates Content Security Policy.
  (function() { return this })() || Function("return this")()
);


/***/ }),
/* 97 */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(29);
__webpack_require__(16);
__webpack_require__(21);
__webpack_require__(105);
__webpack_require__(108);
__webpack_require__(109);
module.exports = __webpack_require__(2).Promise;


/***/ }),
/* 98 */
/***/ (function(module, exports, __webpack_require__) {

var toInteger = __webpack_require__(38);
var defined = __webpack_require__(39);
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
/* 99 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var create = __webpack_require__(31);
var descriptor = __webpack_require__(24);
var setToStringTag = __webpack_require__(26);
var IteratorPrototype = {};

// 25.1.2.1.1 %IteratorPrototype%[@@iterator]()
__webpack_require__(15)(IteratorPrototype, __webpack_require__(4)('iterator'), function () { return this; });

module.exports = function (Constructor, NAME, next) {
  Constructor.prototype = create(IteratorPrototype, { next: descriptor(1, next) });
  setToStringTag(Constructor, NAME + ' Iterator');
};


/***/ }),
/* 100 */
/***/ (function(module, exports, __webpack_require__) {

var dP = __webpack_require__(7);
var anObject = __webpack_require__(9);
var getKeys = __webpack_require__(43);

module.exports = __webpack_require__(10) ? Object.defineProperties : function defineProperties(O, Properties) {
  anObject(O);
  var keys = getKeys(Properties);
  var length = keys.length;
  var i = 0;
  var P;
  while (length > i) dP.f(O, P = keys[i++], Properties[P]);
  return O;
};


/***/ }),
/* 101 */
/***/ (function(module, exports, __webpack_require__) {

// false -> Array#indexOf
// true  -> Array#includes
var toIObject = __webpack_require__(20);
var toLength = __webpack_require__(32);
var toAbsoluteIndex = __webpack_require__(102);
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
/* 102 */
/***/ (function(module, exports, __webpack_require__) {

var toInteger = __webpack_require__(38);
var max = Math.max;
var min = Math.min;
module.exports = function (index, length) {
  index = toInteger(index);
  return index < 0 ? max(index + length, 0) : min(index, length);
};


/***/ }),
/* 103 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var addToUnscopables = __webpack_require__(104);
var step = __webpack_require__(68);
var Iterators = __webpack_require__(19);
var toIObject = __webpack_require__(20);

// 22.1.3.4 Array.prototype.entries()
// 22.1.3.13 Array.prototype.keys()
// 22.1.3.29 Array.prototype.values()
// 22.1.3.30 Array.prototype[@@iterator]()
module.exports = __webpack_require__(40)(Array, 'Array', function (iterated, kind) {
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
/* 104 */
/***/ (function(module, exports) {

module.exports = function () { /* empty */ };


/***/ }),
/* 105 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var LIBRARY = __webpack_require__(30);
var global = __webpack_require__(5);
var ctx = __webpack_require__(14);
var classof = __webpack_require__(35);
var $export = __webpack_require__(3);
var isObject = __webpack_require__(8);
var aFunction = __webpack_require__(23);
var anInstance = __webpack_require__(47);
var forOf = __webpack_require__(27);
var speciesConstructor = __webpack_require__(71);
var task = __webpack_require__(72).set;
var microtask = __webpack_require__(107)();
var newPromiseCapabilityModule = __webpack_require__(49);
var perform = __webpack_require__(73);
var promiseResolve = __webpack_require__(74);
var PROMISE = 'Promise';
var TypeError = global.TypeError;
var process = global.process;
var $Promise = global[PROMISE];
var isNode = classof(process) == 'process';
var empty = function () { /* empty */ };
var Internal, newGenericPromiseCapability, OwnPromiseCapability, Wrapper;
var newPromiseCapability = newGenericPromiseCapability = newPromiseCapabilityModule.f;

var USE_NATIVE = !!function () {
  try {
    // correct subclassing with @@species support
    var promise = $Promise.resolve(1);
    var FakePromise = (promise.constructor = {})[__webpack_require__(4)('species')] = function (exec) {
      exec(empty, empty);
    };
    // unhandled rejections tracking support, NodeJS Promise without it fails @@species test
    return (isNode || typeof PromiseRejectionEvent == 'function') && promise.then(empty) instanceof FakePromise;
  } catch (e) { /* empty */ }
}();

// helpers
var isThenable = function (it) {
  var then;
  return isObject(it) && typeof (then = it.then) == 'function' ? then : false;
};
var notify = function (promise, isReject) {
  if (promise._n) return;
  promise._n = true;
  var chain = promise._c;
  microtask(function () {
    var value = promise._v;
    var ok = promise._s == 1;
    var i = 0;
    var run = function (reaction) {
      var handler = ok ? reaction.ok : reaction.fail;
      var resolve = reaction.resolve;
      var reject = reaction.reject;
      var domain = reaction.domain;
      var result, then;
      try {
        if (handler) {
          if (!ok) {
            if (promise._h == 2) onHandleUnhandled(promise);
            promise._h = 1;
          }
          if (handler === true) result = value;
          else {
            if (domain) domain.enter();
            result = handler(value);
            if (domain) domain.exit();
          }
          if (result === reaction.promise) {
            reject(TypeError('Promise-chain cycle'));
          } else if (then = isThenable(result)) {
            then.call(result, resolve, reject);
          } else resolve(result);
        } else reject(value);
      } catch (e) {
        reject(e);
      }
    };
    while (chain.length > i) run(chain[i++]); // variable length - can't use forEach
    promise._c = [];
    promise._n = false;
    if (isReject && !promise._h) onUnhandled(promise);
  });
};
var onUnhandled = function (promise) {
  task.call(global, function () {
    var value = promise._v;
    var unhandled = isUnhandled(promise);
    var result, handler, console;
    if (unhandled) {
      result = perform(function () {
        if (isNode) {
          process.emit('unhandledRejection', value, promise);
        } else if (handler = global.onunhandledrejection) {
          handler({ promise: promise, reason: value });
        } else if ((console = global.console) && console.error) {
          console.error('Unhandled promise rejection', value);
        }
      });
      // Browsers should not trigger `rejectionHandled` event if it was handled here, NodeJS - should
      promise._h = isNode || isUnhandled(promise) ? 2 : 1;
    } promise._a = undefined;
    if (unhandled && result.e) throw result.v;
  });
};
var isUnhandled = function (promise) {
  return promise._h !== 1 && (promise._a || promise._c).length === 0;
};
var onHandleUnhandled = function (promise) {
  task.call(global, function () {
    var handler;
    if (isNode) {
      process.emit('rejectionHandled', promise);
    } else if (handler = global.onrejectionhandled) {
      handler({ promise: promise, reason: promise._v });
    }
  });
};
var $reject = function (value) {
  var promise = this;
  if (promise._d) return;
  promise._d = true;
  promise = promise._w || promise; // unwrap
  promise._v = value;
  promise._s = 2;
  if (!promise._a) promise._a = promise._c.slice();
  notify(promise, true);
};
var $resolve = function (value) {
  var promise = this;
  var then;
  if (promise._d) return;
  promise._d = true;
  promise = promise._w || promise; // unwrap
  try {
    if (promise === value) throw TypeError("Promise can't be resolved itself");
    if (then = isThenable(value)) {
      microtask(function () {
        var wrapper = { _w: promise, _d: false }; // wrap
        try {
          then.call(value, ctx($resolve, wrapper, 1), ctx($reject, wrapper, 1));
        } catch (e) {
          $reject.call(wrapper, e);
        }
      });
    } else {
      promise._v = value;
      promise._s = 1;
      notify(promise, false);
    }
  } catch (e) {
    $reject.call({ _w: promise, _d: false }, e); // wrap
  }
};

// constructor polyfill
if (!USE_NATIVE) {
  // 25.4.3.1 Promise(executor)
  $Promise = function Promise(executor) {
    anInstance(this, $Promise, PROMISE, '_h');
    aFunction(executor);
    Internal.call(this);
    try {
      executor(ctx($resolve, this, 1), ctx($reject, this, 1));
    } catch (err) {
      $reject.call(this, err);
    }
  };
  // eslint-disable-next-line no-unused-vars
  Internal = function Promise(executor) {
    this._c = [];             // <- awaiting reactions
    this._a = undefined;      // <- checked in isUnhandled reactions
    this._s = 0;              // <- state
    this._d = false;          // <- done
    this._v = undefined;      // <- value
    this._h = 0;              // <- rejection state, 0 - default, 1 - handled, 2 - unhandled
    this._n = false;          // <- notify
  };
  Internal.prototype = __webpack_require__(50)($Promise.prototype, {
    // 25.4.5.3 Promise.prototype.then(onFulfilled, onRejected)
    then: function then(onFulfilled, onRejected) {
      var reaction = newPromiseCapability(speciesConstructor(this, $Promise));
      reaction.ok = typeof onFulfilled == 'function' ? onFulfilled : true;
      reaction.fail = typeof onRejected == 'function' && onRejected;
      reaction.domain = isNode ? process.domain : undefined;
      this._c.push(reaction);
      if (this._a) this._a.push(reaction);
      if (this._s) notify(this, false);
      return reaction.promise;
    },
    // 25.4.5.1 Promise.prototype.catch(onRejected)
    'catch': function (onRejected) {
      return this.then(undefined, onRejected);
    }
  });
  OwnPromiseCapability = function () {
    var promise = new Internal();
    this.promise = promise;
    this.resolve = ctx($resolve, promise, 1);
    this.reject = ctx($reject, promise, 1);
  };
  newPromiseCapabilityModule.f = newPromiseCapability = function (C) {
    return C === $Promise || C === Wrapper
      ? new OwnPromiseCapability(C)
      : newGenericPromiseCapability(C);
  };
}

$export($export.G + $export.W + $export.F * !USE_NATIVE, { Promise: $Promise });
__webpack_require__(26)($Promise, PROMISE);
__webpack_require__(75)(PROMISE);
Wrapper = __webpack_require__(2)[PROMISE];

// statics
$export($export.S + $export.F * !USE_NATIVE, PROMISE, {
  // 25.4.4.5 Promise.reject(r)
  reject: function reject(r) {
    var capability = newPromiseCapability(this);
    var $$reject = capability.reject;
    $$reject(r);
    return capability.promise;
  }
});
$export($export.S + $export.F * (LIBRARY || !USE_NATIVE), PROMISE, {
  // 25.4.4.6 Promise.resolve(x)
  resolve: function resolve(x) {
    return promiseResolve(LIBRARY && this === Wrapper ? $Promise : this, x);
  }
});
$export($export.S + $export.F * !(USE_NATIVE && __webpack_require__(76)(function (iter) {
  $Promise.all(iter)['catch'](empty);
})), PROMISE, {
  // 25.4.4.1 Promise.all(iterable)
  all: function all(iterable) {
    var C = this;
    var capability = newPromiseCapability(C);
    var resolve = capability.resolve;
    var reject = capability.reject;
    var result = perform(function () {
      var values = [];
      var index = 0;
      var remaining = 1;
      forOf(iterable, false, function (promise) {
        var $index = index++;
        var alreadyCalled = false;
        values.push(undefined);
        remaining++;
        C.resolve(promise).then(function (value) {
          if (alreadyCalled) return;
          alreadyCalled = true;
          values[$index] = value;
          --remaining || resolve(values);
        }, reject);
      });
      --remaining || resolve(values);
    });
    if (result.e) reject(result.v);
    return capability.promise;
  },
  // 25.4.4.4 Promise.race(iterable)
  race: function race(iterable) {
    var C = this;
    var capability = newPromiseCapability(C);
    var reject = capability.reject;
    var result = perform(function () {
      forOf(iterable, false, function (promise) {
        C.resolve(promise).then(capability.resolve, reject);
      });
    });
    if (result.e) reject(result.v);
    return capability.promise;
  }
});


/***/ }),
/* 106 */
/***/ (function(module, exports) {

// fast apply, http://jsperf.lnkit.com/fast-apply/5
module.exports = function (fn, args, that) {
  var un = that === undefined;
  switch (args.length) {
    case 0: return un ? fn()
                      : fn.call(that);
    case 1: return un ? fn(args[0])
                      : fn.call(that, args[0]);
    case 2: return un ? fn(args[0], args[1])
                      : fn.call(that, args[0], args[1]);
    case 3: return un ? fn(args[0], args[1], args[2])
                      : fn.call(that, args[0], args[1], args[2]);
    case 4: return un ? fn(args[0], args[1], args[2], args[3])
                      : fn.call(that, args[0], args[1], args[2], args[3]);
  } return fn.apply(that, args);
};


/***/ }),
/* 107 */
/***/ (function(module, exports, __webpack_require__) {

var global = __webpack_require__(5);
var macrotask = __webpack_require__(72).set;
var Observer = global.MutationObserver || global.WebKitMutationObserver;
var process = global.process;
var Promise = global.Promise;
var isNode = __webpack_require__(25)(process) == 'process';

module.exports = function () {
  var head, last, notify;

  var flush = function () {
    var parent, fn;
    if (isNode && (parent = process.domain)) parent.exit();
    while (head) {
      fn = head.fn;
      head = head.next;
      try {
        fn();
      } catch (e) {
        if (head) notify();
        else last = undefined;
        throw e;
      }
    } last = undefined;
    if (parent) parent.enter();
  };

  // Node.js
  if (isNode) {
    notify = function () {
      process.nextTick(flush);
    };
  // browsers with MutationObserver, except iOS Safari - https://github.com/zloirock/core-js/issues/339
  } else if (Observer && !(global.navigator && global.navigator.standalone)) {
    var toggle = true;
    var node = document.createTextNode('');
    new Observer(flush).observe(node, { characterData: true }); // eslint-disable-line no-new
    notify = function () {
      node.data = toggle = !toggle;
    };
  // environments with maybe non-completely correct, but existent Promise
  } else if (Promise && Promise.resolve) {
    var promise = Promise.resolve();
    notify = function () {
      promise.then(flush);
    };
  // for other environments - macrotask based on:
  // - setImmediate
  // - MessageChannel
  // - window.postMessag
  // - onreadystatechange
  // - setTimeout
  } else {
    notify = function () {
      // strange IE + webpack dev server bug - use .call(global)
      macrotask.call(global, flush);
    };
  }

  return function (fn) {
    var task = { fn: fn, next: undefined };
    if (last) last.next = task;
    if (!head) {
      head = task;
      notify();
    } last = task;
  };
};


/***/ }),
/* 108 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
// https://github.com/tc39/proposal-promise-finally

var $export = __webpack_require__(3);
var core = __webpack_require__(2);
var global = __webpack_require__(5);
var speciesConstructor = __webpack_require__(71);
var promiseResolve = __webpack_require__(74);

$export($export.P + $export.R, 'Promise', { 'finally': function (onFinally) {
  var C = speciesConstructor(this, core.Promise || global.Promise);
  var isFunction = typeof onFinally == 'function';
  return this.then(
    isFunction ? function (x) {
      return promiseResolve(C, onFinally()).then(function () { return x; });
    } : onFinally,
    isFunction ? function (e) {
      return promiseResolve(C, onFinally()).then(function () { throw e; });
    } : onFinally
  );
} });


/***/ }),
/* 109 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

// https://github.com/tc39/proposal-promise-try
var $export = __webpack_require__(3);
var newPromiseCapability = __webpack_require__(49);
var perform = __webpack_require__(73);

$export($export.S, 'Promise', { 'try': function (callbackfn) {
  var promiseCapability = newPromiseCapability.f(this);
  var result = perform(callbackfn);
  (result.e ? promiseCapability.reject : promiseCapability.resolve)(result.v);
  return promiseCapability.promise;
} });


/***/ }),
/* 110 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = { "default": __webpack_require__(111), __esModule: true };

/***/ }),
/* 111 */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(21);
__webpack_require__(16);
module.exports = __webpack_require__(112);


/***/ }),
/* 112 */
/***/ (function(module, exports, __webpack_require__) {

var classof = __webpack_require__(35);
var ITERATOR = __webpack_require__(4)('iterator');
var Iterators = __webpack_require__(19);
module.exports = __webpack_require__(2).isIterable = function (it) {
  var O = Object(it);
  return O[ITERATOR] !== undefined
    || '@@iterator' in O
    // eslint-disable-next-line no-prototype-builtins
    || Iterators.hasOwnProperty(classof(O));
};


/***/ }),
/* 113 */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(21);
__webpack_require__(16);
module.exports = __webpack_require__(114);


/***/ }),
/* 114 */
/***/ (function(module, exports, __webpack_require__) {

var anObject = __webpack_require__(9);
var get = __webpack_require__(48);
module.exports = __webpack_require__(2).getIterator = function (it) {
  var iterFn = get(it);
  if (typeof iterFn != 'function') throw TypeError(it + ' is not iterable!');
  return anObject(iterFn.call(it));
};


/***/ }),
/* 115 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;

var _promise = __webpack_require__(22);

var _promise2 = _interopRequireDefault(_promise);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = function (fn) {
  return function () {
    var gen = fn.apply(this, arguments);
    return new _promise2.default(function (resolve, reject) {
      function step(key, arg) {
        try {
          var info = gen[key](arg);
          var value = info.value;
        } catch (error) {
          reject(error);
          return;
        }

        if (info.done) {
          resolve(value);
        } else {
          return _promise2.default.resolve(value).then(function (value) {
            step("next", value);
          }, function (err) {
            step("throw", err);
          });
        }
      }

      return step("next");
    });
  };
};

/***/ }),
/* 116 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 117 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 118 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _classCallCheck2 = __webpack_require__(0);

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = __webpack_require__(1);

var _createClass3 = _interopRequireDefault(_createClass2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Timer = function () {
    function Timer() {
        var _this = this;

        var deltaTime = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 1 / 60;
        (0, _classCallCheck3.default)(this, Timer);

        var accumulatedTime = 0;
        // let lastTime = 0;
        var lastTime = performance.now();

        this.updateProxy = function (time) {
            accumulatedTime += (time - lastTime) / 1000;

            if (accumulatedTime > 1) {
                /* A hack to Solve the time accumulate
                * when it is running background.
                * So that our computer wont be slow down by this,
                * after long time of running this in background.*/
                accumulatedTime = 1;
            }

            // console.log(accumulatedTime,deltaTime)
            // TODO:BUG The first time update too many times if the lastTime = 0 .
            while (accumulatedTime > deltaTime) {
                _this.update(deltaTime);

                accumulatedTime -= deltaTime;
            }

            lastTime = time;

            _this.enqueue();
        };
    }

    (0, _createClass3.default)(Timer, [{
        key: "enqueue",
        value: function enqueue() {
            requestAnimationFrame(this.updateProxy);
        }
    }, {
        key: "start",
        value: function start() {
            this.enqueue();
        }
    }]);
    return Timer;
}();

exports.default = Timer;

/***/ }),
/* 119 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = { "default": __webpack_require__(120), __esModule: true };

/***/ }),
/* 120 */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(121);
var $Object = __webpack_require__(2).Object;
module.exports = function defineProperty(it, key, desc) {
  return $Object.defineProperty(it, key, desc);
};


/***/ }),
/* 121 */
/***/ (function(module, exports, __webpack_require__) {

var $export = __webpack_require__(3);
// 19.1.2.4 / 15.2.3.6 Object.defineProperty(O, P, Attributes)
$export($export.S + $export.F * !__webpack_require__(10), 'Object', { defineProperty: __webpack_require__(7).f });


/***/ }),
/* 122 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _classCallCheck2 = __webpack_require__(0);

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _math = __webpack_require__(37);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Camera = function Camera() {
    (0, _classCallCheck3.default)(this, Camera);

    this.pos = new _math.Vec2(0, 0);
    this.size = new _math.Vec2(256, 240);
};

exports.default = Camera;

/***/ }),
/* 123 */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(124);
__webpack_require__(29);
__webpack_require__(127);
__webpack_require__(128);
module.exports = __webpack_require__(2).Symbol;


/***/ }),
/* 124 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

// ECMAScript 6 symbols shim
var global = __webpack_require__(5);
var has = __webpack_require__(17);
var DESCRIPTORS = __webpack_require__(10);
var $export = __webpack_require__(3);
var redefine = __webpack_require__(63);
var META = __webpack_require__(53).KEY;
var $fails = __webpack_require__(18);
var shared = __webpack_require__(45);
var setToStringTag = __webpack_require__(26);
var uid = __webpack_require__(33);
var wks = __webpack_require__(4);
var wksExt = __webpack_require__(54);
var wksDefine = __webpack_require__(55);
var enumKeys = __webpack_require__(125);
var isArray = __webpack_require__(78);
var anObject = __webpack_require__(9);
var isObject = __webpack_require__(8);
var toIObject = __webpack_require__(20);
var toPrimitive = __webpack_require__(42);
var createDesc = __webpack_require__(24);
var _create = __webpack_require__(31);
var gOPNExt = __webpack_require__(126);
var $GOPD = __webpack_require__(80);
var $DP = __webpack_require__(7);
var $keys = __webpack_require__(43);
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
  __webpack_require__(79).f = gOPNExt.f = $getOwnPropertyNames;
  __webpack_require__(56).f = $propertyIsEnumerable;
  __webpack_require__(77).f = $getOwnPropertySymbols;

  if (DESCRIPTORS && !__webpack_require__(30)) {
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
    var args = [it];
    var i = 1;
    var replacer, $replacer;
    while (arguments.length > i) args.push(arguments[i++]);
    $replacer = replacer = args[1];
    if (!isObject(replacer) && it === undefined || isSymbol(it)) return; // IE8 returns string on undefined
    if (!isArray(replacer)) replacer = function (key, value) {
      if (typeof $replacer == 'function') value = $replacer.call(this, key, value);
      if (!isSymbol(value)) return value;
    };
    args[1] = replacer;
    return _stringify.apply($JSON, args);
  }
});

// 19.4.3.4 Symbol.prototype[@@toPrimitive](hint)
$Symbol[PROTOTYPE][TO_PRIMITIVE] || __webpack_require__(15)($Symbol[PROTOTYPE], TO_PRIMITIVE, $Symbol[PROTOTYPE].valueOf);
// 19.4.3.5 Symbol.prototype[@@toStringTag]
setToStringTag($Symbol, 'Symbol');
// 20.2.1.9 Math[@@toStringTag]
setToStringTag(Math, 'Math', true);
// 24.3.3 JSON[@@toStringTag]
setToStringTag(global.JSON, 'JSON', true);


/***/ }),
/* 125 */
/***/ (function(module, exports, __webpack_require__) {

// all enumerable object keys, includes symbols
var getKeys = __webpack_require__(43);
var gOPS = __webpack_require__(77);
var pIE = __webpack_require__(56);
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
/* 126 */
/***/ (function(module, exports, __webpack_require__) {

// fallback for IE11 buggy Object.getOwnPropertyNames with iframe and window
var toIObject = __webpack_require__(20);
var gOPN = __webpack_require__(79).f;
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
/* 127 */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(55)('asyncIterator');


/***/ }),
/* 128 */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(55)('observable');


/***/ }),
/* 129 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _classCallCheck2 = __webpack_require__(0);

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = __webpack_require__(1);

var _createClass3 = _interopRequireDefault(_createClass2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var BoundingBox = function () {
    function BoundingBox(pos, size, offset) {
        (0, _classCallCheck3.default)(this, BoundingBox);

        this.pos = pos;
        this.size = size;
        this.offset = offset;
    }

    (0, _createClass3.default)(BoundingBox, [{
        key: "overlaps",
        value: function overlaps(box) {
            return this.bottom > box.top && this.top < box.bottom && this.left < box.right && this.right > box.left;
        }
    }, {
        key: "bottom",
        get: function get() {
            return this.pos.y + this.size.y + this.offset.y;
        },
        set: function set(y) {
            this.pos.y = y - (this.size.y + this.offset.y);
        }
    }, {
        key: "top",
        get: function get() {
            return this.pos.y + this.offset.y;
        },
        set: function set(y) {
            this.pos.y = y - this.offset.y;
        }
    }, {
        key: "left",
        get: function get() {
            return this.pos.x + this.offset.x;
        },
        set: function set(x) {
            this.pos.x = x - this.offset.x;
        }
    }, {
        key: "right",
        get: function get() {
            return this.pos.x + this.size.x + this.offset.x;
        },
        set: function set(x) {
            this.pos.x = x - (this.size.x + this.offset.x);
        }
    }]);
    return BoundingBox;
}();

exports.default = BoundingBox;

/***/ }),
/* 130 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _getPrototypeOf = __webpack_require__(11);

var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

var _classCallCheck2 = __webpack_require__(0);

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = __webpack_require__(1);

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = __webpack_require__(12);

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = __webpack_require__(13);

var _inherits3 = _interopRequireDefault(_inherits2);

var _Entity = __webpack_require__(6);

var _math = __webpack_require__(37);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var PlayerController = function (_Trait) {
    (0, _inherits3.default)(PlayerController, _Trait);

    function PlayerController() {
        (0, _classCallCheck3.default)(this, PlayerController);

        var _this = (0, _possibleConstructorReturn3.default)(this, (PlayerController.__proto__ || (0, _getPrototypeOf2.default)(PlayerController)).call(this, 'playerController'));

        _this.player = null;
        _this.checkPoint = new _math.Vec2(64, 64);
        _this.time = 300;
        _this.score = 0;
        return _this;
    }

    (0, _createClass3.default)(PlayerController, [{
        key: 'setPlayer',
        value: function setPlayer(entity) {
            var _this2 = this;

            this.player = entity;
            this.player.stomer.onStomp = function () {
                _this2.score += 100;
            };
        }
    }, {
        key: 'update',
        value: function update(entity, deltaTime, level) {
            if (!level.entities.has(this.player)) {
                this.player.killable.revive();
                this.player.pos.set(this.checkPoint.x, this.checkPoint.y);
                level.entities.add(this.player);
            } else {
                this.time -= deltaTime * 2;
            }
        }
    }]);
    return PlayerController;
}(_Entity.Trait);

exports.default = PlayerController;

/***/ }),
/* 131 */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(132);
module.exports = __webpack_require__(2).Object.getPrototypeOf;


/***/ }),
/* 132 */
/***/ (function(module, exports, __webpack_require__) {

// 19.1.2.9 Object.getPrototypeOf(O)
var toObject = __webpack_require__(34);
var $getPrototypeOf = __webpack_require__(67);

__webpack_require__(133)('getPrototypeOf', function () {
  return function getPrototypeOf(it) {
    return $getPrototypeOf(toObject(it));
  };
});


/***/ }),
/* 133 */
/***/ (function(module, exports, __webpack_require__) {

// most Object methods by ES6 should accept primitives
var $export = __webpack_require__(3);
var core = __webpack_require__(2);
var fails = __webpack_require__(18);
module.exports = function (KEY, exec) {
  var fn = (core.Object || {})[KEY] || Object[KEY];
  var exp = {};
  exp[KEY] = exec(fn);
  $export($export.S + $export.F * fails(function () { fn(1); }), 'Object', exp);
};


/***/ }),
/* 134 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = { "default": __webpack_require__(135), __esModule: true };

/***/ }),
/* 135 */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(16);
__webpack_require__(21);
module.exports = __webpack_require__(54).f('iterator');


/***/ }),
/* 136 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = { "default": __webpack_require__(137), __esModule: true };

/***/ }),
/* 137 */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(138);
module.exports = __webpack_require__(2).Object.setPrototypeOf;


/***/ }),
/* 138 */
/***/ (function(module, exports, __webpack_require__) {

// 19.1.3.19 Object.setPrototypeOf(O, proto)
var $export = __webpack_require__(3);
$export($export.S, 'Object', { setPrototypeOf: __webpack_require__(139).set });


/***/ }),
/* 139 */
/***/ (function(module, exports, __webpack_require__) {

// Works with __proto__ only. Old v8 can't work with null proto objects.
/* eslint-disable no-proto */
var isObject = __webpack_require__(8);
var anObject = __webpack_require__(9);
var check = function (O, proto) {
  anObject(O);
  if (!isObject(proto) && proto !== null) throw TypeError(proto + ": can't set as prototype!");
};
module.exports = {
  set: Object.setPrototypeOf || ('__proto__' in {} ? // eslint-disable-line
    function (test, buggy, set) {
      try {
        set = __webpack_require__(14)(Function.call, __webpack_require__(80).f(Object.prototype, '__proto__').set, 2);
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
/* 140 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = { "default": __webpack_require__(141), __esModule: true };

/***/ }),
/* 141 */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(142);
var $Object = __webpack_require__(2).Object;
module.exports = function create(P, D) {
  return $Object.create(P, D);
};


/***/ }),
/* 142 */
/***/ (function(module, exports, __webpack_require__) {

var $export = __webpack_require__(3);
// 19.1.2.2 / 15.2.3.5 Object.create(O [, Properties])
$export($export.S, 'Object', { create: __webpack_require__(31) });


/***/ }),
/* 143 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _regenerator = __webpack_require__(61);

var _regenerator2 = _interopRequireDefault(_regenerator);

var _getIterator2 = __webpack_require__(51);

var _getIterator3 = _interopRequireDefault(_getIterator2);

var _promise = __webpack_require__(22);

var _promise2 = _interopRequireDefault(_promise);

var _slicedToArray2 = __webpack_require__(36);

var _slicedToArray3 = _interopRequireDefault(_slicedToArray2);

exports.createLevelLoader = createLevelLoader;

var _math = __webpack_require__(37);

var _Level = __webpack_require__(144);

var _Level2 = _interopRequireDefault(_Level);

var _loader = __webpack_require__(28);

var _sprites = __webpack_require__(168);

var _background = __webpack_require__(169);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _marked = /*#__PURE__*/_regenerator2.default.mark(expandSpan),
    _marked2 = /*#__PURE__*/_regenerator2.default.mark(expandRanges),
    _marked4 = /*#__PURE__*/_regenerator2.default.mark(expandTiles);

function setupLevel(levelSpec, level) {
    var mergedCollisionGrid = levelSpec.layers.reduce(function (mergedTiles, layerSpec) {
        return mergedTiles.concat(layerSpec.tiles);
    }, []);

    var collisionGrid = createCollisionGrid(mergedCollisionGrid, levelSpec.patterns);
    level.setCollisionGrid(collisionGrid);
}

function setupBackground(levelSpec, level, backgroundSprites) {
    levelSpec.layers.forEach(function (layer) {
        var backgroundGrid = createBackgroundGrid(layer.tiles, levelSpec.patterns);
        var backgroundLayer = (0, _background.createBackgroundLayer)(level, backgroundGrid, backgroundSprites);
        level.comp.layers.push(backgroundLayer);
    });
}

function setupEntities(levelSpec, level, entityFactory) {
    levelSpec.entities.forEach(function (_ref) {
        var name = _ref.name,
            _ref$pos = (0, _slicedToArray3.default)(_ref.pos, 2),
            x = _ref$pos[0],
            y = _ref$pos[1];

        // console.log(name, x,y);
        var createEntity = entityFactory[name];
        var entity = createEntity();
        entity.pos.set(x, y);
        level.entities.add(entity);
    });

    var spriteLayer = (0, _sprites.createSpriteLayer)(level.entities);
    level.comp.layers.push(spriteLayer);
}

function createLevelLoader(entityFactory) {
    return function loadLevel(name) {
        return (0, _loader.loadJSON)('../levels/' + name + '.json').then(function (levelSpec) {
            return _promise2.default.all([levelSpec, (0, _loader.loadSpriteSheet)(levelSpec.spriteSheet)]);
        }).then(function (_ref2) {
            var _ref3 = (0, _slicedToArray3.default)(_ref2, 2),
                levelSpec = _ref3[0],
                backgroundSprites = _ref3[1];

            var level = new _Level2.default();

            setupLevel(levelSpec, level);
            setupBackground(levelSpec, level, backgroundSprites);
            setupEntities(levelSpec, level, entityFactory);

            return level;
        });
    };
}

function createCollisionGrid(tiles, patterns) {
    var grid = new _math.Matrix();

    var _iteratorNormalCompletion = true;
    var _didIteratorError = false;
    var _iteratorError = undefined;

    try {
        for (var _iterator = (0, _getIterator3.default)(expandTiles(tiles, patterns)), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
            var _ref4 = _step.value;
            var tile = _ref4.tile;
            var x = _ref4.x;
            var y = _ref4.y;

            grid.set(x, y, { type: tile.type });
        }
    } catch (err) {
        _didIteratorError = true;
        _iteratorError = err;
    } finally {
        try {
            if (!_iteratorNormalCompletion && _iterator.return) {
                _iterator.return();
            }
        } finally {
            if (_didIteratorError) {
                throw _iteratorError;
            }
        }
    }

    return grid;
}

function createBackgroundGrid(tiles, patterns) {
    var grid = new _math.Matrix();

    var _iteratorNormalCompletion2 = true;
    var _didIteratorError2 = false;
    var _iteratorError2 = undefined;

    try {
        for (var _iterator2 = (0, _getIterator3.default)(expandTiles(tiles, patterns)), _step2; !(_iteratorNormalCompletion2 = (_step2 = _iterator2.next()).done); _iteratorNormalCompletion2 = true) {
            var _ref5 = _step2.value;
            var tile = _ref5.tile;
            var x = _ref5.x;
            var y = _ref5.y;

            grid.set(x, y, { name: tile.name });
        }
    } catch (err) {
        _didIteratorError2 = true;
        _iteratorError2 = err;
    } finally {
        try {
            if (!_iteratorNormalCompletion2 && _iterator2.return) {
                _iterator2.return();
            }
        } finally {
            if (_didIteratorError2) {
                throw _iteratorError2;
            }
        }
    }

    return grid;
}

// ES6 Generator Function
function expandSpan(xStart, xLen, yStart, yLen) {
    var xEnd, yEnd, x, y;
    return _regenerator2.default.wrap(function expandSpan$(_context) {
        while (1) {
            switch (_context.prev = _context.next) {
                case 0:
                    // debugger
                    // const coords = [];
                    xEnd = xStart + xLen;
                    yEnd = yStart + yLen;
                    x = xStart;

                case 3:
                    if (!(x < xEnd)) {
                        _context.next = 14;
                        break;
                    }

                    y = yStart;

                case 5:
                    if (!(y < yEnd)) {
                        _context.next = 11;
                        break;
                    }

                    _context.next = 8;
                    return { x: x, y: y };

                case 8:
                    y++;
                    _context.next = 5;
                    break;

                case 11:
                    x++;
                    _context.next = 3;
                    break;

                case 14:
                case 'end':
                    return _context.stop();
            }
        }
    }, _marked, this);
}

function expandRange(range) {
    if (range.length === 4) {
        var _range = (0, _slicedToArray3.default)(range, 4),
            xStart = _range[0],
            xLen = _range[1],
            yStart = _range[2],
            yLen = _range[3];

        return expandSpan(xStart, xLen, yStart, yLen);
    } else if (range.length === 3) {
        var _range2 = (0, _slicedToArray3.default)(range, 3),
            _xStart = _range2[0],
            _xLen = _range2[1],
            _yStart = _range2[2];

        return expandSpan(_xStart, _xLen, _yStart, 1);
    } else if (range.length === 2) {
        var _range3 = (0, _slicedToArray3.default)(range, 2),
            _xStart2 = _range3[0],
            _yStart2 = _range3[1];

        return expandSpan(_xStart2, 1, _yStart2, 1);
    }
}

function expandRanges(ranges) {
    var _iteratorNormalCompletion3, _didIteratorError3, _iteratorError3, _iterator3, _step3, range;

    return _regenerator2.default.wrap(function expandRanges$(_context2) {
        while (1) {
            switch (_context2.prev = _context2.next) {
                case 0:
                    _iteratorNormalCompletion3 = true;
                    _didIteratorError3 = false;
                    _iteratorError3 = undefined;
                    _context2.prev = 3;
                    _iterator3 = (0, _getIterator3.default)(ranges);

                case 5:
                    if (_iteratorNormalCompletion3 = (_step3 = _iterator3.next()).done) {
                        _context2.next = 11;
                        break;
                    }

                    range = _step3.value;
                    return _context2.delegateYield(expandRange(range), 't0', 8);

                case 8:
                    _iteratorNormalCompletion3 = true;
                    _context2.next = 5;
                    break;

                case 11:
                    _context2.next = 17;
                    break;

                case 13:
                    _context2.prev = 13;
                    _context2.t1 = _context2['catch'](3);
                    _didIteratorError3 = true;
                    _iteratorError3 = _context2.t1;

                case 17:
                    _context2.prev = 17;
                    _context2.prev = 18;

                    if (!_iteratorNormalCompletion3 && _iterator3.return) {
                        _iterator3.return();
                    }

                case 20:
                    _context2.prev = 20;

                    if (!_didIteratorError3) {
                        _context2.next = 23;
                        break;
                    }

                    throw _iteratorError3;

                case 23:
                    return _context2.finish(20);

                case 24:
                    return _context2.finish(17);

                case 25:
                case 'end':
                    return _context2.stop();
            }
        }
    }, _marked2, this, [[3, 13, 17, 25], [18,, 20, 24]]);
}

function expandTiles(tiles, patterns) {
    var _marked3, walkTiles;

    return _regenerator2.default.wrap(function expandTiles$(_context4) {
        while (1) {
            switch (_context4.prev = _context4.next) {
                case 0:
                    walkTiles = function walkTiles(tiles, offsetX, offsetY) {
                        var _iteratorNormalCompletion4, _didIteratorError4, _iteratorError4, _iterator4, _step4, tile, _iteratorNormalCompletion5, _didIteratorError5, _iteratorError5, _iterator5, _step5, _ref6, x, y, derivedX, derivedY, _tiles;

                        return _regenerator2.default.wrap(function walkTiles$(_context3) {
                            while (1) {
                                switch (_context3.prev = _context3.next) {
                                    case 0:
                                        _iteratorNormalCompletion4 = true;
                                        _didIteratorError4 = false;
                                        _iteratorError4 = undefined;
                                        _context3.prev = 3;
                                        _iterator4 = (0, _getIterator3.default)(tiles);

                                    case 5:
                                        if (_iteratorNormalCompletion4 = (_step4 = _iterator4.next()).done) {
                                            _context3.next = 45;
                                            break;
                                        }

                                        tile = _step4.value;
                                        _iteratorNormalCompletion5 = true;
                                        _didIteratorError5 = false;
                                        _iteratorError5 = undefined;
                                        _context3.prev = 10;
                                        _iterator5 = (0, _getIterator3.default)(expandRanges(tile.ranges));

                                    case 12:
                                        if (_iteratorNormalCompletion5 = (_step5 = _iterator5.next()).done) {
                                            _context3.next = 28;
                                            break;
                                        }

                                        _ref6 = _step5.value;
                                        x = _ref6.x;
                                        y = _ref6.y;

                                        /* http://es6.ruanyifeng.com/?search=yield&x=0&y=0#docs/generator#for---of-%E5%BE%AA%E7%8E%AF
                                         Use for...of to iterate the Iterator Object generated by the yield of Generator Function.*/
                                        derivedX = x + offsetX;
                                        derivedY = y + offsetY;

                                        // debugger

                                        if (!tile.pattern) {
                                            _context3.next = 23;
                                            break;
                                        }

                                        // console.log(patterns[tile.pattern]);
                                        _tiles = patterns[tile.pattern].tiles;
                                        // createTiles(level, tiles, patterns, derivedX, derivedY);
                                        /*TODO:Figure out th useage of yield**/

                                        return _context3.delegateYield(walkTiles(_tiles, derivedX, derivedY), 't0', 21);

                                    case 21:
                                        _context3.next = 25;
                                        break;

                                    case 23:
                                        _context3.next = 25;
                                        return {
                                            tile: tile,
                                            x: derivedX,
                                            y: derivedY
                                        };

                                    case 25:
                                        _iteratorNormalCompletion5 = true;
                                        _context3.next = 12;
                                        break;

                                    case 28:
                                        _context3.next = 34;
                                        break;

                                    case 30:
                                        _context3.prev = 30;
                                        _context3.t1 = _context3['catch'](10);
                                        _didIteratorError5 = true;
                                        _iteratorError5 = _context3.t1;

                                    case 34:
                                        _context3.prev = 34;
                                        _context3.prev = 35;

                                        if (!_iteratorNormalCompletion5 && _iterator5.return) {
                                            _iterator5.return();
                                        }

                                    case 37:
                                        _context3.prev = 37;

                                        if (!_didIteratorError5) {
                                            _context3.next = 40;
                                            break;
                                        }

                                        throw _iteratorError5;

                                    case 40:
                                        return _context3.finish(37);

                                    case 41:
                                        return _context3.finish(34);

                                    case 42:
                                        _iteratorNormalCompletion4 = true;
                                        _context3.next = 5;
                                        break;

                                    case 45:
                                        _context3.next = 51;
                                        break;

                                    case 47:
                                        _context3.prev = 47;
                                        _context3.t2 = _context3['catch'](3);
                                        _didIteratorError4 = true;
                                        _iteratorError4 = _context3.t2;

                                    case 51:
                                        _context3.prev = 51;
                                        _context3.prev = 52;

                                        if (!_iteratorNormalCompletion4 && _iterator4.return) {
                                            _iterator4.return();
                                        }

                                    case 54:
                                        _context3.prev = 54;

                                        if (!_didIteratorError4) {
                                            _context3.next = 57;
                                            break;
                                        }

                                        throw _iteratorError4;

                                    case 57:
                                        return _context3.finish(54);

                                    case 58:
                                        return _context3.finish(51);

                                    case 59:
                                    case 'end':
                                        return _context3.stop();
                                }
                            }
                        }, _marked3, this, [[3, 47, 51, 59], [10, 30, 34, 42], [35,, 37, 41], [52,, 54, 58]]);
                    };

                    _marked3 = /*#__PURE__*/_regenerator2.default.mark(walkTiles);
                    // let expandedTiles = [];

                    return _context4.delegateYield(walkTiles(tiles, 0, 0), 't0', 3);

                case 3:
                case 'end':
                    return _context4.stop();
            }
        }
    }, _marked4, this);
}

/***/ }),
/* 144 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _set = __webpack_require__(145);

var _set2 = _interopRequireDefault(_set);

var _classCallCheck2 = __webpack_require__(0);

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = __webpack_require__(1);

var _createClass3 = _interopRequireDefault(_createClass2);

var _compositor = __webpack_require__(155);

var _compositor2 = _interopRequireDefault(_compositor);

var _EntityCollider = __webpack_require__(156);

var _EntityCollider2 = _interopRequireDefault(_EntityCollider);

var _TileCollider = __webpack_require__(157);

var _TileCollider2 = _interopRequireDefault(_TileCollider);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Level = function () {
    function Level() {
        (0, _classCallCheck3.default)(this, Level);

        this.gravity = 1500;
        this.comp = new _compositor2.default();
        this.entities = new _set2.default();
        this.entityCollider = new _EntityCollider2.default(this.entities);
        this.totalTime = 0;

        this.tileCollider = null;
    }

    (0, _createClass3.default)(Level, [{
        key: 'setCollisionGrid',
        value: function setCollisionGrid(matrix) {
            this.tileCollider = new _TileCollider2.default(matrix);
        }
    }, {
        key: 'update',
        value: function update(deltaTime) {
            var _this = this;

            this.entities.forEach(function (entity) {
                entity.update(deltaTime, _this);
            });

            this.entities.forEach(function (entity) {
                entity.finalize();

                _this.entityCollider.check(entity);
            });

            this.totalTime += deltaTime;
        }
    }]);
    return Level;
}();

exports.default = Level;

/***/ }),
/* 145 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = { "default": __webpack_require__(146), __esModule: true };

/***/ }),
/* 146 */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(29);
__webpack_require__(16);
__webpack_require__(21);
__webpack_require__(147);
__webpack_require__(151);
__webpack_require__(153);
__webpack_require__(154);
module.exports = __webpack_require__(2).Set;


/***/ }),
/* 147 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var strong = __webpack_require__(82);
var validate = __webpack_require__(57);
var SET = 'Set';

// 23.2 Set Objects
module.exports = __webpack_require__(83)(SET, function (get) {
  return function Set() { return get(this, arguments.length > 0 ? arguments[0] : undefined); };
}, {
  // 23.2.3.1 Set.prototype.add(value)
  add: function add(value) {
    return strong.def(validate(this, SET), value = value === 0 ? 0 : value, value);
  }
}, strong);


/***/ }),
/* 148 */
/***/ (function(module, exports, __webpack_require__) {

// 0 -> Array#forEach
// 1 -> Array#map
// 2 -> Array#filter
// 3 -> Array#some
// 4 -> Array#every
// 5 -> Array#find
// 6 -> Array#findIndex
var ctx = __webpack_require__(14);
var IObject = __webpack_require__(65);
var toObject = __webpack_require__(34);
var toLength = __webpack_require__(32);
var asc = __webpack_require__(149);
module.exports = function (TYPE, $create) {
  var IS_MAP = TYPE == 1;
  var IS_FILTER = TYPE == 2;
  var IS_SOME = TYPE == 3;
  var IS_EVERY = TYPE == 4;
  var IS_FIND_INDEX = TYPE == 6;
  var NO_HOLES = TYPE == 5 || IS_FIND_INDEX;
  var create = $create || asc;
  return function ($this, callbackfn, that) {
    var O = toObject($this);
    var self = IObject(O);
    var f = ctx(callbackfn, that, 3);
    var length = toLength(self.length);
    var index = 0;
    var result = IS_MAP ? create($this, length) : IS_FILTER ? create($this, 0) : undefined;
    var val, res;
    for (;length > index; index++) if (NO_HOLES || index in self) {
      val = self[index];
      res = f(val, index, O);
      if (TYPE) {
        if (IS_MAP) result[index] = res;   // map
        else if (res) switch (TYPE) {
          case 3: return true;             // some
          case 5: return val;              // find
          case 6: return index;            // findIndex
          case 2: result.push(val);        // filter
        } else if (IS_EVERY) return false; // every
      }
    }
    return IS_FIND_INDEX ? -1 : IS_SOME || IS_EVERY ? IS_EVERY : result;
  };
};


/***/ }),
/* 149 */
/***/ (function(module, exports, __webpack_require__) {

// 9.4.2.3 ArraySpeciesCreate(originalArray, length)
var speciesConstructor = __webpack_require__(150);

module.exports = function (original, length) {
  return new (speciesConstructor(original))(length);
};


/***/ }),
/* 150 */
/***/ (function(module, exports, __webpack_require__) {

var isObject = __webpack_require__(8);
var isArray = __webpack_require__(78);
var SPECIES = __webpack_require__(4)('species');

module.exports = function (original) {
  var C;
  if (isArray(original)) {
    C = original.constructor;
    // cross-realm fallback
    if (typeof C == 'function' && (C === Array || isArray(C.prototype))) C = undefined;
    if (isObject(C)) {
      C = C[SPECIES];
      if (C === null) C = undefined;
    }
  } return C === undefined ? Array : C;
};


/***/ }),
/* 151 */
/***/ (function(module, exports, __webpack_require__) {

// https://github.com/DavidBruant/Map-Set.prototype.toJSON
var $export = __webpack_require__(3);

$export($export.P + $export.R, 'Set', { toJSON: __webpack_require__(84)('Set') });


/***/ }),
/* 152 */
/***/ (function(module, exports, __webpack_require__) {

var forOf = __webpack_require__(27);

module.exports = function (iter, ITERATOR) {
  var result = [];
  forOf(iter, false, result.push, result, ITERATOR);
  return result;
};


/***/ }),
/* 153 */
/***/ (function(module, exports, __webpack_require__) {

// https://tc39.github.io/proposal-setmap-offrom/#sec-set.of
__webpack_require__(85)('Set');


/***/ }),
/* 154 */
/***/ (function(module, exports, __webpack_require__) {

// https://tc39.github.io/proposal-setmap-offrom/#sec-set.from
__webpack_require__(86)('Set');


/***/ }),
/* 155 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _classCallCheck2 = __webpack_require__(0);

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = __webpack_require__(1);

var _createClass3 = _interopRequireDefault(_createClass2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Compositor = function () {
    function Compositor() {
        (0, _classCallCheck3.default)(this, Compositor);

        this.layers = [];
    }

    (0, _createClass3.default)(Compositor, [{
        key: "draw",
        value: function draw(context, camera) {
            this.layers.forEach(function (layer) {
                layer(context, camera);
            });
        }
    }]);
    return Compositor;
}();

exports.default = Compositor;

/***/ }),
/* 156 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _classCallCheck2 = __webpack_require__(0);

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = __webpack_require__(1);

var _createClass3 = _interopRequireDefault(_createClass2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var EntityCollider = function () {
    function EntityCollider(entities) {
        (0, _classCallCheck3.default)(this, EntityCollider);

        this.entities = entities;
    }

    (0, _createClass3.default)(EntityCollider, [{
        key: "check",
        value: function check(subject) {
            this.entities.forEach(function (candidate) {
                if (subject === candidate) {
                    return;
                }

                if (subject.bounds.overlaps(candidate.bounds)) {
                    subject.collides(candidate);
                    candidate.collides(subject);
                }
            });
        }
    }]);
    return EntityCollider;
}();

exports.default = EntityCollider;

/***/ }),
/* 157 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _classCallCheck2 = __webpack_require__(0);

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = __webpack_require__(1);

var _createClass3 = _interopRequireDefault(_createClass2);

var _TileResolver = __webpack_require__(87);

var _TileResolver2 = _interopRequireDefault(_TileResolver);

var _Entity = __webpack_require__(6);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var TileCollider = function () {
    function TileCollider(tileMatrix) {
        (0, _classCallCheck3.default)(this, TileCollider);

        this.tile = new _TileResolver2.default(tileMatrix);
    }

    (0, _createClass3.default)(TileCollider, [{
        key: 'checkX',
        value: function checkX(entity) {
            var x = void 0;
            if (entity.vel.x > 0) {
                // mario is going toward RIGHT
                // so we just need to check the RIGHT side of entity
                x = entity.bounds.right;
            } else if (entity.vel.x < 0) {
                // mario is going toward LEFT
                // else we only need to check the LEFT side of entity
                x = entity.bounds.left;
            } else {
                return;
            }

            var matches = this.tile.searchByRange(x, x, entity.bounds.top, entity.bounds.bottom);

            matches.forEach(function (match) {
                if (match.tile.type !== 'ground') {
                    return;
                }

                if (entity.vel.x > 0) {
                    if (entity.bounds.right > match.x1) {
                        entity.obstruct(_Entity.Sides.LEFT, match);
                    }
                } else if (entity.vel.x < 0) {
                    if (entity.bounds.left < match.x2) {
                        entity.obstruct(_Entity.Sides.RIGHT, match);
                    }
                }
            });
        }
    }, {
        key: 'checkY',
        value: function checkY(entity) {
            var y = void 0;
            if (entity.vel.y > 0) {
                // mario is going toward B
                y = entity.bounds.bottom;
            } else if (entity.vel.y < 0) {
                // mario is going toward TOP
                y = entity.bounds.top;
            } else {
                return;
            }

            var matches = this.tile.searchByRange(entity.bounds.left, entity.bounds.right, y, y);

            matches.forEach(function (match) {
                if (match.tile.type !== 'ground') {
                    return;
                }

                if (entity.vel.y > 0) {
                    if (entity.bounds.bottom > match.y1) {
                        entity.obstruct(_Entity.Sides.BOTTOM, match);
                    }
                } else if (entity.vel.y < 0) {
                    if (entity.pos.y < match.y2) {
                        entity.obstruct(_Entity.Sides.TOP, match);
                    }
                }
            });
        }
    }]);
    return TileCollider;
}();

exports.default = TileCollider;

/***/ }),
/* 158 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = { "default": __webpack_require__(159), __esModule: true };

/***/ }),
/* 159 */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(16);
__webpack_require__(160);
module.exports = __webpack_require__(2).Array.from;


/***/ }),
/* 160 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var ctx = __webpack_require__(14);
var $export = __webpack_require__(3);
var toObject = __webpack_require__(34);
var call = __webpack_require__(69);
var isArrayIter = __webpack_require__(70);
var toLength = __webpack_require__(32);
var createProperty = __webpack_require__(161);
var getIterFn = __webpack_require__(48);

$export($export.S + $export.F * !__webpack_require__(76)(function (iter) { Array.from(iter); }), 'Array', {
  // 22.1.2.1 Array.from(arrayLike, mapfn = undefined, thisArg = undefined)
  from: function from(arrayLike /* , mapfn = undefined, thisArg = undefined */) {
    var O = toObject(arrayLike);
    var C = typeof this == 'function' ? this : Array;
    var aLen = arguments.length;
    var mapfn = aLen > 1 ? arguments[1] : undefined;
    var mapping = mapfn !== undefined;
    var index = 0;
    var iterFn = getIterFn(O);
    var length, result, step, iterator;
    if (mapping) mapfn = ctx(mapfn, aLen > 2 ? arguments[2] : undefined, 2);
    // if object isn't iterable or it's array with default iterator - use simple case
    if (iterFn != undefined && !(C == Array && isArrayIter(iterFn))) {
      for (iterator = iterFn.call(O), result = new C(); !(step = iterator.next()).done; index++) {
        createProperty(result, index, mapping ? call(iterator, mapfn, [step.value, index], true) : step.value);
      }
    } else {
      length = toLength(O.length);
      for (result = new C(length); length > index; index++) {
        createProperty(result, index, mapping ? mapfn(O[index], index) : O[index]);
      }
    }
    result.length = index;
    return result;
  }
});


/***/ }),
/* 161 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var $defineProperty = __webpack_require__(7);
var createDesc = __webpack_require__(24);

module.exports = function (object, index, value) {
  if (index in object) $defineProperty.f(object, index, createDesc(0, value));
  else object[index] = value;
};


/***/ }),
/* 162 */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(29);
__webpack_require__(16);
__webpack_require__(21);
__webpack_require__(163);
__webpack_require__(164);
__webpack_require__(165);
__webpack_require__(166);
module.exports = __webpack_require__(2).Map;


/***/ }),
/* 163 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var strong = __webpack_require__(82);
var validate = __webpack_require__(57);
var MAP = 'Map';

// 23.1 Map Objects
module.exports = __webpack_require__(83)(MAP, function (get) {
  return function Map() { return get(this, arguments.length > 0 ? arguments[0] : undefined); };
}, {
  // 23.1.3.6 Map.prototype.get(key)
  get: function get(key) {
    var entry = strong.getEntry(validate(this, MAP), key);
    return entry && entry.v;
  },
  // 23.1.3.9 Map.prototype.set(key, value)
  set: function set(key, value) {
    return strong.def(validate(this, MAP), key === 0 ? 0 : key, value);
  }
}, strong, true);


/***/ }),
/* 164 */
/***/ (function(module, exports, __webpack_require__) {

// https://github.com/DavidBruant/Map-Set.prototype.toJSON
var $export = __webpack_require__(3);

$export($export.P + $export.R, 'Map', { toJSON: __webpack_require__(84)('Map') });


/***/ }),
/* 165 */
/***/ (function(module, exports, __webpack_require__) {

// https://tc39.github.io/proposal-setmap-offrom/#sec-map.of
__webpack_require__(85)('Map');


/***/ }),
/* 166 */
/***/ (function(module, exports, __webpack_require__) {

// https://tc39.github.io/proposal-setmap-offrom/#sec-map.from
__webpack_require__(86)('Map');


/***/ }),
/* 167 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.createAnim = createAnim;
function createAnim(frames, frameLen) {
    return function resolveFrame(distance) {
        var frameIndex = Math.floor(distance / frameLen) % frames.length;

        return frames[frameIndex];
    };
}

/***/ }),
/* 168 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.createSpriteLayer = createSpriteLayer;
function createSpriteLayer(entities) {
    var width = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 64;
    var height = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 64;

    var spriteBuffer = document.createElement('canvas');
    spriteBuffer.width = width;
    spriteBuffer.height = height;

    var spriteContext = spriteBuffer.getContext('2d');
    return function drawSpriteLayer(context, camera) {
        entities.forEach(function (entity) {
            spriteContext.clearRect(0, 0, width, height); // set background to transparent.
            entity.draw(spriteContext);

            context.drawImage(spriteBuffer, entity.pos.x - camera.pos.x, entity.pos.y - camera.pos.y);
        });
    };
}

/***/ }),
/* 169 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.createBackgroundLayer = createBackgroundLayer;

var _TileResolver = __webpack_require__(87);

var _TileResolver2 = _interopRequireDefault(_TileResolver);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function createBackgroundLayer(level, tiles, sprites) {
    var resolver = new _TileResolver2.default(tiles);

    var buffer = document.createElement('canvas');
    buffer.width = 256 + 16; // 16 + 1 column
    buffer.height = 240;

    var context = buffer.getContext('2d');

    function redraw(startIndex, endIndex) {

        context.clearRect(0, 0, buffer.width, buffer.height);

        var _loop = function _loop(x) {
            var col = tiles.grid[x];
            if (col) {
                // console.log(x - startIndex);
                /*TODO Cannot figure out the mean of x - startIndex and -camera.pos.x % 16 OPTIMIZATION in EP 6*/
                col.forEach(function (tile, y) {
                    if (sprites.animations.has(tile.name)) {
                        sprites.drawAnim(tile.name, context, x - startIndex, y, level.totalTime);
                    } else {
                        sprites.drawTile(tile.name, context, x - startIndex, y);
                    }
                });
            }
        };

        for (var x = startIndex; x <= endIndex; x++) {
            _loop(x);
        }
    }

    return function drawBackgroundLayer(context, camera) {
        var drawWidth = resolver.toIndex(camera.size.x),
            drawFrom = resolver.toIndex(camera.pos.x);
        var drawEnd = drawFrom + drawWidth;

        redraw(drawFrom, drawEnd);

        context.drawImage(buffer, -camera.pos.x % 16, -camera.pos.y);
    };

    // // High-Order Function
    // return function drawBackgroundLayer(context, camera) {
    //     context.drawImage(buffer, -camera.pos.x, -camera.pos.y);
    // }
}

/***/ }),
/* 170 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _getIterator2 = __webpack_require__(51);

var _getIterator3 = _interopRequireDefault(_getIterator2);

var _slicedToArray2 = __webpack_require__(36);

var _slicedToArray3 = _interopRequireDefault(_slicedToArray2);

var _toConsumableArray2 = __webpack_require__(88);

var _toConsumableArray3 = _interopRequireDefault(_toConsumableArray2);

var _classCallCheck2 = __webpack_require__(0);

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = __webpack_require__(1);

var _createClass3 = _interopRequireDefault(_createClass2);

exports.loadFont = loadFont;

var _loader = __webpack_require__(28);

var _SpriteSheet = __webpack_require__(89);

var _SpriteSheet2 = _interopRequireDefault(_SpriteSheet);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var CHARS = ' !"#$%&\'()*+,-./0123456789:;<=>?@ABCDEFGHIJKLMNOPQRSTUVWXYZ[\\]^_`abcdefghijklmnopqrstuvwxyz{|}~';

var Font = function () {
    function Font(spriteSheet, size) {
        (0, _classCallCheck3.default)(this, Font);

        this.sprites = spriteSheet;
        this.size = size;
    }

    (0, _createClass3.default)(Font, [{
        key: 'print',
        value: function print(text, context, x, y) {
            var _this = this;

            [].concat((0, _toConsumableArray3.default)(text)).forEach(function (char, pos) {
                _this.sprites.draw(char, context, x + pos * _this.size, y);
            });
        }
    }]);
    return Font;
}();

function loadFont() {
    return (0, _loader.loadImage)('./img/font.png').then(function (img) {
        var fontSprite = new _SpriteSheet2.default(img);

        var size = 8,
            rowLen = img.width;
        var colNum = img.width / size;
        var _iteratorNormalCompletion = true;
        var _didIteratorError = false;
        var _iteratorError = undefined;

        try {
            for (var _iterator = (0, _getIterator3.default)([].concat((0, _toConsumableArray3.default)(CHARS)).entries()), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
                var _ref = _step.value;

                var _ref2 = (0, _slicedToArray3.default)(_ref, 2);

                var index = _ref2[0];
                var char = _ref2[1];


                var x = index * size % rowLen;
                var y = Math.floor(index / colNum) * size;

                fontSprite.define(char, x, y, size, size);
            }
        } catch (err) {
            _didIteratorError = true;
            _iteratorError = err;
        } finally {
            try {
                if (!_iteratorNormalCompletion && _iterator.return) {
                    _iterator.return();
                }
            } finally {
                if (_didIteratorError) {
                    throw _iteratorError;
                }
            }
        }

        return new Font(fontSprite, size);
    });
}

/***/ }),
/* 171 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _promise = __webpack_require__(22);

var _promise2 = _interopRequireDefault(_promise);

exports.loadEntities = loadEntities;

var _Mario = __webpack_require__(172);

var _Goomba = __webpack_require__(176);

var _Koopa = __webpack_require__(177);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function loadEntities() {
    var entitiesFactory = {};

    function addAs(name) {
        return function (factory) {
            entitiesFactory[name] = factory;
        };
    }

    return _promise2.default.all([(0, _Mario.loadMario)().then(addAs('mario')), (0, _Goomba.loadGoomba)().then(addAs('goomba')), (0, _Koopa.loadKoopa)().then(addAs('koopa'))]).then(function () {
        return entitiesFactory;
    });
}

/***/ }),
/* 172 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.loadMario = loadMario;

var _Entity = __webpack_require__(6);

var _Entity2 = _interopRequireDefault(_Entity);

var _Go = __webpack_require__(173);

var _Go2 = _interopRequireDefault(_Go);

var _Jump = __webpack_require__(174);

var _Jump2 = _interopRequireDefault(_Jump);

var _Stomer = __webpack_require__(175);

var _Stomer2 = _interopRequireDefault(_Stomer);

var _Killable = __webpack_require__(58);

var _Killable2 = _interopRequireDefault(_Killable);

var _Solid = __webpack_require__(59);

var _Solid2 = _interopRequireDefault(_Solid);

var _Physics = __webpack_require__(60);

var _Physics2 = _interopRequireDefault(_Physics);

var _loader = __webpack_require__(28);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/*Name Convention:
* 1. loadSomething is synchronous, createSomething is asynchronous.*/

function loadMario() {
    return (0, _loader.loadSpriteSheet)('mario').then(createMarioFactory);
}
// import PlayerController from '../traits/PlayerController.js'

// import Velocity from '../traits/Velocity.js'


function createMarioFactory(sprite) {
    var runAnim = sprite.animations.get("run");

    function frameRoute(mario) {
        if (mario.jump.falling) {
            return 'jump';
        }

        if (mario.go.distance > 0) {
            if (mario.vel.x > 0 && mario.go.dir < 0 || mario.vel.x < 0 && mario.go.dir > 0) {
                return 'break';
            }

            return runAnim(mario.go.distance);
        }

        return 'idle';
    }

    function drawMario(context) {
        sprite.draw(frameRoute(this), context, 0, 0, this.go.heading < 0);
    }

    return function createMario() {
        var mario = new _Entity2.default();
        mario.size.set(14, 16);

        mario.addTrait(new _Physics2.default());
        mario.addTrait(new _Solid2.default());
        mario.addTrait(new _Go2.default());
        mario.addTrait(new _Jump2.default());
        mario.addTrait(new _Stomer2.default());
        mario.addTrait(new _Killable2.default());
        // mario.addTrait(new PlayerController());

        mario.killable.removeAfter = 0;
        // mario.playerController.setPlayer(mario);

        mario.draw = drawMario;

        return mario;
    };
}

/***/ }),
/* 173 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _getPrototypeOf = __webpack_require__(11);

var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

var _classCallCheck2 = __webpack_require__(0);

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = __webpack_require__(1);

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = __webpack_require__(12);

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = __webpack_require__(13);

var _inherits3 = _interopRequireDefault(_inherits2);

var _Entity = __webpack_require__(6);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/*extends keyword can be used to inherit all the properties and methods. */
var Go = function (_Trait) {
    (0, _inherits3.default)(Go, _Trait);

    function Go() {
        (0, _classCallCheck3.default)(this, Go);

        var _this = (0, _possibleConstructorReturn3.default)(this, (Go.__proto__ || (0, _getPrototypeOf2.default)(Go)).call(this, 'go'));
        /*super keyword in here means the father class's constructor of this class. */


        _this.dir = 0;
        _this.acceleration = 400;
        _this.deceleration = 300;
        _this.dragFactor = 1 / 5000;

        _this.distance = 0;
        _this.heading = 1;
        return _this;
    }

    (0, _createClass3.default)(Go, [{
        key: 'update',
        value: function update(entity, deltaTime) {
            var absX = Math.abs(entity.vel.x);

            if (this.dir !== 0) {
                entity.vel.x += this.acceleration * deltaTime * this.dir;
                if (entity.jump) {
                    if (!entity.jump.falling) {
                        this.heading = this.dir;
                    }
                } else {
                    this.heading = this.dir;
                }
            } else if (entity.vel.x !== 0) {
                var decel = Math.min(absX, this.deceleration * deltaTime);
                entity.vel.x += entity.vel.x > 0 ? -decel : decel;
            } else {
                this.distance = 0;
            }

            var drag = this.dragFactor * entity.vel.x * absX;
            entity.vel.x -= drag;

            this.distance += absX * deltaTime;
        }
    }]);
    return Go;
}(_Entity.Trait);

exports.default = Go;

/***/ }),
/* 174 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _getPrototypeOf = __webpack_require__(11);

var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

var _classCallCheck2 = __webpack_require__(0);

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = __webpack_require__(1);

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = __webpack_require__(12);

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = __webpack_require__(13);

var _inherits3 = _interopRequireDefault(_inherits2);

var _Entity = __webpack_require__(6);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/*extends keyword can be used to inherit all the properties and methods. */
var Jump = function (_Trait) {
    (0, _inherits3.default)(Jump, _Trait);

    function Jump() {
        (0, _classCallCheck3.default)(this, Jump);

        var _this = (0, _possibleConstructorReturn3.default)(this, (Jump.__proto__ || (0, _getPrototypeOf2.default)(Jump)).call(this, 'jump'));
        /*super keyword in here means the father class's constructor of this class. */


        _this.duration = 0.3;
        _this.velocity = 200;
        _this.engageTime = 0; // total time allow to  pressing key
        _this.ready = 0;
        _this.gracePeriod = 0.1;
        _this.requestTime = 0;
        _this.speedBoost = 0.3;
        return _this;
    }

    (0, _createClass3.default)(Jump, [{
        key: 'start',
        value: function start() {
            // if (this.ready > 0) {
            //     this.engageTime = this.duration;
            // }
            this.requestTime = this.gracePeriod;
        }
    }, {
        key: 'cancel',
        value: function cancel() {
            this.engageTime = 0;
            this.requestTime = 0;
        }
    }, {
        key: 'obstruct',
        value: function obstruct(entity, side) {
            if (side === _Entity.Sides.BOTTOM) {
                this.ready = 1;
            } else if (side === _Entity.Sides.TOP) {
                this.cancel();
            }
        }
    }, {
        key: 'update',
        value: function update(entity, deltaTime) {
            if (this.requestTime > 0) {
                if (this.ready > 0) {
                    this.engageTime = this.duration;
                    this.requestTime = 0;
                }

                this.requestTime -= deltaTime;
            }

            if (this.engageTime > 0) {
                entity.vel.y = -(this.velocity + Math.abs(entity.vel.x) * this.speedBoost);
                /*If keep pressing the key, the engageTime (total time allow to  pressing key ) will decrease in a row until less than 0, which means the total time of pressing a key is bigger than the allow duration( this. duration = 0.5 (second)), so the entity.vel.y should not decrease anymore, in other words, the mario should not travel up anymore.*/
                this.engageTime -= deltaTime;
            }

            // console.log('If we are ready to jump?', this.ready)
            this.ready--;
        }
    }, {
        key: 'falling',
        get: function get() {
            return this.ready < 0;
        }
    }]);
    return Jump;
}(_Entity.Trait);

exports.default = Jump;

/***/ }),
/* 175 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _getPrototypeOf = __webpack_require__(11);

var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

var _classCallCheck2 = __webpack_require__(0);

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = __webpack_require__(1);

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = __webpack_require__(12);

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = __webpack_require__(13);

var _inherits3 = _interopRequireDefault(_inherits2);

var _Entity = __webpack_require__(6);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Stomer = function (_Trait) {
    (0, _inherits3.default)(Stomer, _Trait);

    function Stomer() {
        (0, _classCallCheck3.default)(this, Stomer);

        var _this = (0, _possibleConstructorReturn3.default)(this, (Stomer.__proto__ || (0, _getPrototypeOf2.default)(Stomer)).call(this, 'stomer'));

        _this.bounceSpeed = 400;

        _this.onStomp = function () {};
        return _this;
    }

    (0, _createClass3.default)(Stomer, [{
        key: 'bounce',
        value: function bounce(us, them) {
            us.bounds.bottom = them.bounds.top;
            us.vel.y = -this.bounceSpeed;
        }
    }, {
        key: 'collides',
        value: function collides(us, them) {
            /*此处是否反弹跳跃（bounce）的判断严重依赖事件（kill，collide等）的触发顺序。
            * 我们可以选择通过一些细微的改动---来调整顺序，但是！过于依赖这种细微的改动不利以后续项目的扩展。
            * 所以我们需要更健壮的解决方案。*/
            if (!them.killable || them.killable.dead) {
                return;
            }

            if (us.vel.y > them.vel.y) {
                this.bounce(us, them);
                this.onStomp(us, them);
            }
        }
    }]);
    return Stomer;
}(_Entity.Trait);

exports.default = Stomer;

/***/ }),
/* 176 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _getPrototypeOf = __webpack_require__(11);

var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

var _classCallCheck2 = __webpack_require__(0);

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = __webpack_require__(1);

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = __webpack_require__(12);

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = __webpack_require__(13);

var _inherits3 = _interopRequireDefault(_inherits2);

exports.loadGoomba = loadGoomba;

var _Entity = __webpack_require__(6);

var _Entity2 = _interopRequireDefault(_Entity);

var _loader = __webpack_require__(28);

var _PendulumMove = __webpack_require__(91);

var _PendulumMove2 = _interopRequireDefault(_PendulumMove);

var _Killable = __webpack_require__(58);

var _Killable2 = _interopRequireDefault(_Killable);

var _Solid = __webpack_require__(59);

var _Solid2 = _interopRequireDefault(_Solid);

var _Physics = __webpack_require__(60);

var _Physics2 = _interopRequireDefault(_Physics);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function loadGoomba() {
    return (0, _loader.loadSpriteSheet)('goomba').then(createGoombaFactory);
}

var Behavior = function (_Trait) {
    (0, _inherits3.default)(Behavior, _Trait);

    function Behavior() {
        (0, _classCallCheck3.default)(this, Behavior);
        return (0, _possibleConstructorReturn3.default)(this, (Behavior.__proto__ || (0, _getPrototypeOf2.default)(Behavior)).call(this, 'behavior'));
    }

    (0, _createClass3.default)(Behavior, [{
        key: 'collides',
        value: function collides(us, them) {
            // us is our goomba, them often are mario.
            if (us.killable.dead) {
                return;
            }

            if (them.stomer) {
                if (them.vel.y > us.vel.y) {
                    us.killable.kill();
                    us.pendulumMove.speed = 0;
                } else {
                    them.killable.kill();
                }
            }
        }
    }]);
    return Behavior;
}(_Entity.Trait);

function createGoombaFactory(sprite) {
    var walkAnim = sprite.animations.get('walk');

    function routeAnim(goomba) {
        if (goomba.killable.dead) {
            return 'flat';
        }

        return walkAnim(goomba.lifeTime);
    }

    function drawGoomba(context) {
        sprite.draw(routeAnim(this), context, 0, 0);
    }

    return function createGoomba() {
        var goomba = new _Entity2.default();
        goomba.size.set(16, 16);

        goomba.addTrait(new _Physics2.default());
        goomba.addTrait(new _Solid2.default());
        goomba.addTrait(new _PendulumMove2.default());
        goomba.addTrait(new Behavior());
        goomba.addTrait(new _Killable2.default());

        goomba.draw = drawGoomba;

        return goomba;
    };
}

/***/ }),
/* 177 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _sign = __webpack_require__(178);

var _sign2 = _interopRequireDefault(_sign);

var _getPrototypeOf = __webpack_require__(11);

var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

var _classCallCheck2 = __webpack_require__(0);

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = __webpack_require__(1);

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = __webpack_require__(12);

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = __webpack_require__(13);

var _inherits3 = _interopRequireDefault(_inherits2);

var _symbol = __webpack_require__(52);

var _symbol2 = _interopRequireDefault(_symbol);

exports.loadKoopa = loadKoopa;

var _Entity = __webpack_require__(6);

var _Entity2 = _interopRequireDefault(_Entity);

var _loader = __webpack_require__(28);

var _PendulumMove = __webpack_require__(91);

var _PendulumMove2 = _interopRequireDefault(_PendulumMove);

var _Solid = __webpack_require__(59);

var _Solid2 = _interopRequireDefault(_Solid);

var _Physics = __webpack_require__(60);

var _Physics2 = _interopRequireDefault(_Physics);

var _Killable = __webpack_require__(58);

var _Killable2 = _interopRequireDefault(_Killable);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function loadKoopa() {
    return (0, _loader.loadSpriteSheet)('koopa').then(createKoopaFactory);
}

var STATE_WALKING = (0, _symbol2.default)('walking');
var STATE_HIDING = (0, _symbol2.default)('hiding');
var STATE_PANIC = (0, _symbol2.default)('panic');

var Behavior = function (_Trait) {
    (0, _inherits3.default)(Behavior, _Trait);

    function Behavior() {
        (0, _classCallCheck3.default)(this, Behavior);

        var _this = (0, _possibleConstructorReturn3.default)(this, (Behavior.__proto__ || (0, _getPrototypeOf2.default)(Behavior)).call(this, 'behavior'));

        _this.state = STATE_WALKING;
        _this.hideTime = 0;
        _this.hideDuration = 3;
        _this.panicSpeed = 200;
        _this.walkSpeed = null;
        return _this;
    }

    (0, _createClass3.default)(Behavior, [{
        key: 'collides',
        value: function collides(us, them) {
            // us is our goomba, them often are mario.
            if (us.killable.dead) {
                return;
            }

            if (them.stomer) {
                if (them.vel.y > us.vel.y) {
                    this.handleState(us, them);
                } else {
                    this.handleKick(us, them);
                }
            }
        }
    }, {
        key: 'handleKick',
        value: function handleKick(us, them) {
            if (this.state === STATE_WALKING) {
                them.killable.kill();
            } else if (this.state === STATE_HIDING) {
                this.panic(us, them);
            } else if (this.state === STATE_PANIC) {
                var travelDir = (0, _sign2.default)(us.vel.x);
                var impactDir = (0, _sign2.default)(us.pos.x - them.pos.x);
                if (travelDir !== 0 && impactDir !== travelDir) {
                    them.killable.kill();
                }
            }
        }
    }, {
        key: 'handleState',
        value: function handleState(us, them) {
            if (this.state === STATE_WALKING) {
                if (us.pendulumMove.speed !== 0) {
                    this.walkSpeed = us.pendulumMove.speed;
                }
                this.hiding(us);
            } else if (this.state === STATE_HIDING) {
                us.killable.kill();
                us.vel.set(100, -200);
                us.solid.obstructs = false;
            } else if (this.state === STATE_PANIC) {
                this.hiding(us);
            }
        }
    }, {
        key: 'hiding',
        value: function hiding(us) {
            us.vel.x = 0;
            us.pendulumMove.enable = false;
            this.state = STATE_HIDING;
        }
    }, {
        key: 'unHide',
        value: function unHide(us) {
            us.vel.x = 100;
            us.pendulumMove.enable = true;
            us.pendulumMove.speed = this.walkSpeed;
            this.state = STATE_WALKING;
            this.hideTime = 0;
        }
    }, {
        key: 'panic',
        value: function panic(us, them) {
            us.pendulumMove.enable = true;
            us.pendulumMove.speed = this.panicSpeed * (0, _sign2.default)(them.vel.x);
            this.state = STATE_PANIC;
        }
    }, {
        key: 'update',
        value: function update(us, deltaTime) {
            if (this.state === STATE_HIDING) {
                this.hideTime += deltaTime;

                if (this.hideTime > this.hideDuration) {
                    this.unHide(us);
                }
            }
        }
    }]);
    return Behavior;
}(_Entity.Trait);

function createKoopaFactory(sprite) {
    var walkAnim = sprite.animations.get('walk');
    var wakeAnim = sprite.animations.get('wake');

    function routeAnim(koopa) {
        if (koopa.behavior.state === STATE_HIDING) {
            if (koopa.behavior.hideTime > 2) {
                return wakeAnim(koopa.behavior.hideTime);
            }
            return 'hiding';
        }
        if (koopa.behavior.state === STATE_PANIC) {
            return 'hiding';
        }

        return walkAnim(koopa.lifeTime);
    }

    function drawKoopa(context) {
        sprite.draw(routeAnim(this), context, 0, 0, this.vel.x < 0);
    }

    return function createKoopa() {
        var koopa = new _Entity2.default();
        koopa.size.set(16, 16);
        koopa.offset.y = 8;

        koopa.addTrait(new _Physics2.default());
        koopa.addTrait(new _Solid2.default());
        koopa.addTrait(new _PendulumMove2.default());
        koopa.addTrait(new Behavior());
        koopa.addTrait(new _Killable2.default());

        koopa.draw = drawKoopa;

        return koopa;
    };
}

/***/ }),
/* 178 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = { "default": __webpack_require__(179), __esModule: true };

/***/ }),
/* 179 */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(180);
module.exports = __webpack_require__(2).Math.sign;


/***/ }),
/* 180 */
/***/ (function(module, exports, __webpack_require__) {

// 20.2.2.28 Math.sign(x)
var $export = __webpack_require__(3);

$export($export.S, 'Math', { sign: __webpack_require__(181) });


/***/ }),
/* 181 */
/***/ (function(module, exports) {

// 20.2.2.28 Math.sign(x)
module.exports = Math.sign || function sign(x) {
  // eslint-disable-next-line no-self-compare
  return (x = +x) == 0 || x != x ? x : x < 0 ? -1 : 1;
};


/***/ }),
/* 182 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.createDashboardLayer = createDashboardLayer;

var _addPadStart = __webpack_require__(183);

function createDashboardLayer(font, playerEnv) {
    var LINE1 = font.size;
    var LINE2 = font.size * 2;

    var coins = 99;

    (0, _addPadStart.addPadStartPolyfill)();

    return function drawDashboard(context) {
        var _playerEnv$playerCont = playerEnv.playerController,
            time = _playerEnv$playerCont.time,
            score = _playerEnv$playerCont.score;

        font.print('MARIO', context, 16, LINE1);
        font.print(score.toString().padStart(6, '0'), context, 16, LINE2);

        font.print('@x' + coins.toString().padStart(2, '0'), context, 96, LINE2);

        font.print('WORLD', context, 152, LINE1);
        font.print('1-1', context, 160, LINE2);

        font.print('TIME', context, 208, LINE1);
        font.print(time.toFixed().toString().padStart(3, '0'), context, 216, LINE2);
        // font.draw('A', context, 0, 0);
    };
}

/***/ }),
/* 183 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.addPadStartPolyfill = addPadStartPolyfill;
// https://github.com/uxitten/polyfill/blob/master/string.polyfill.js
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/padStart

function addPadStartPolyfill() {
    // add String.prototype.padStart for firefox-v47
    if (!String.prototype.padStart) {
        String.prototype.padStart = function padStart(targetLength, padString) {
            targetLength = targetLength >> 0; //floor if number or convert non-number to 0;
            padString = String(padString || ' ');
            if (this.length > targetLength) {
                return String(this);
            } else {
                targetLength = targetLength - this.length;
                if (targetLength > padString.length) {
                    padString += padString.repeat(targetLength / padString.length); //append to original to ensure we are longer than needed
                }
                return padString.slice(0, targetLength) + String(this);
            }
        };
    }
}

/***/ }),
/* 184 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.setupTouchController = setupTouchController;
exports.setupKeyboard = setupKeyboard;

var _KeyboardState = __webpack_require__(185);

var _KeyboardState2 = _interopRequireDefault(_KeyboardState);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function setupTouchController(entity) {
    var input = new _KeyboardState2.default();

    input.addMapping('ArrowRight', function (keyState) {
        entity.go.dir += keyState ? 1 : -1;
    });

    input.addMapping('ArrowLeft', function (keyState) {
        entity.go.dir += keyState ? -1 : 1;
    });

    var controllerJump = document.getElementById('controller-jump');
    var controllerLeft = document.getElementById('controller-left');

    controllerJump.onclick = function (keyState) {
        if (keyState) {
            entity.jump.start();
        } else {
            entity.jump.cancel();
        }
    };

    controllerLeft.ontouchstart = function (keyState) {
        entity.go.dir += 1;
    };

    controllerLeft.ontouchend = function (keyState) {
        entity.go.dir += -1;
    };
}

function setupKeyboard(entity) {
    var input = new _KeyboardState2.default();

    input.addMapping('Space', function (keyState) {
        // Fantastic! - 妙！
        /*By such a fantastic Class, now we take over the event of key board input,
         so that we can get how long a key is pressed and draw the canvas semantically.*/
        if (keyState) {
            entity.jump.start();
        } else {
            entity.jump.cancel();
        }
    });

    input.addMapping('ArrowUp', function (keyState) {
        if (keyState) {
            entity.jump.start();
        } else {
            entity.jump.cancel();
        }
    });

    // input.addMapping('KeyO', keyState => {
    //     // Ep8 - Turbo Mode, I think it is unnecessary.
    // });

    input.addMapping('ArrowRight', function (keyState) {
        entity.go.dir += keyState ? 1 : -1;
    });

    input.addMapping('ArrowLeft', function (keyState) {
        entity.go.dir += keyState ? -1 : 1;
    });

    return input;
}

/***/ }),
/* 185 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _map = __webpack_require__(90);

var _map2 = _interopRequireDefault(_map);

var _classCallCheck2 = __webpack_require__(0);

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = __webpack_require__(1);

var _createClass3 = _interopRequireDefault(_createClass2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var PRESSED = 1,
    RELEASED = 0;

var KeyboardState = function () {
    function KeyboardState() {
        (0, _classCallCheck3.default)(this, KeyboardState);

        // hold the current state of a given key
        this.keyStates = new _map2.default();

        // holds the callback functions for a key code
        this.keyMap = new _map2.default();
    }

    (0, _createClass3.default)(KeyboardState, [{
        key: 'addMapping',
        value: function addMapping(code, callBack) {
            this.keyMap.set(code, callBack);
        }
    }, {
        key: 'handleEvent',
        value: function handleEvent(event) {
            var code = event.code;


            if (!this.keyMap.has(code)) {
                return;
            }

            event.preventDefault();

            var keyState = event.type === 'keydown' ? PRESSED : RELEASED;

            if (this.keyStates.get(code) === keyState) {
                // avoid triggering multiple times
                return;
            }

            this.keyStates.set(code, keyState);

            this.keyMap.get(code)(keyState);
        }
    }, {
        key: 'listenTo',
        value: function listenTo(window) {
            var _this = this;

            ['keydown', 'keyup'].forEach(function (eventName) {
                window.addEventListener(eventName, function (event) {
                    _this.handleEvent(event);
                });
            });
        }
    }]);
    return KeyboardState;
}();

exports.default = KeyboardState;

/***/ })
/******/ ]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAgZDNkZDFhZjIyZjQ4NTg4MTBkMWIiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL19iYWJlbC1ydW50aW1lQDYuMjYuMEBiYWJlbC1ydW50aW1lL2hlbHBlcnMvY2xhc3NDYWxsQ2hlY2suanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL19iYWJlbC1ydW50aW1lQDYuMjYuMEBiYWJlbC1ydW50aW1lL2hlbHBlcnMvY3JlYXRlQ2xhc3MuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL19jb3JlLWpzQDIuNS4zQGNvcmUtanMvbGlicmFyeS9tb2R1bGVzL19jb3JlLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9fY29yZS1qc0AyLjUuM0Bjb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9fZXhwb3J0LmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9fY29yZS1qc0AyLjUuM0Bjb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9fd2tzLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9fY29yZS1qc0AyLjUuM0Bjb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9fZ2xvYmFsLmpzIiwid2VicGFjazovLy8uL3B1YmxpYy9qcy9FbnRpdHkuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL19jb3JlLWpzQDIuNS4zQGNvcmUtanMvbGlicmFyeS9tb2R1bGVzL19vYmplY3QtZHAuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL19jb3JlLWpzQDIuNS4zQGNvcmUtanMvbGlicmFyeS9tb2R1bGVzL19pcy1vYmplY3QuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL19jb3JlLWpzQDIuNS4zQGNvcmUtanMvbGlicmFyeS9tb2R1bGVzL19hbi1vYmplY3QuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL19jb3JlLWpzQDIuNS4zQGNvcmUtanMvbGlicmFyeS9tb2R1bGVzL19kZXNjcmlwdG9ycy5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvX2JhYmVsLXJ1bnRpbWVANi4yNi4wQGJhYmVsLXJ1bnRpbWUvY29yZS1qcy9vYmplY3QvZ2V0LXByb3RvdHlwZS1vZi5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvX2JhYmVsLXJ1bnRpbWVANi4yNi4wQGJhYmVsLXJ1bnRpbWUvaGVscGVycy9wb3NzaWJsZUNvbnN0cnVjdG9yUmV0dXJuLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9fYmFiZWwtcnVudGltZUA2LjI2LjBAYmFiZWwtcnVudGltZS9oZWxwZXJzL2luaGVyaXRzLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9fY29yZS1qc0AyLjUuM0Bjb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9fY3R4LmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9fY29yZS1qc0AyLjUuM0Bjb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9faGlkZS5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvX2NvcmUtanNAMi41LjNAY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvZXM2LnN0cmluZy5pdGVyYXRvci5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvX2NvcmUtanNAMi41LjNAY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX2hhcy5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvX2NvcmUtanNAMi41LjNAY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX2ZhaWxzLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9fY29yZS1qc0AyLjUuM0Bjb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9faXRlcmF0b3JzLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9fY29yZS1qc0AyLjUuM0Bjb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9fdG8taW9iamVjdC5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvX2NvcmUtanNAMi41LjNAY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvd2ViLmRvbS5pdGVyYWJsZS5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvX2JhYmVsLXJ1bnRpbWVANi4yNi4wQGJhYmVsLXJ1bnRpbWUvY29yZS1qcy9wcm9taXNlLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9fY29yZS1qc0AyLjUuM0Bjb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9fYS1mdW5jdGlvbi5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvX2NvcmUtanNAMi41LjNAY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX3Byb3BlcnR5LWRlc2MuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL19jb3JlLWpzQDIuNS4zQGNvcmUtanMvbGlicmFyeS9tb2R1bGVzL19jb2YuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL19jb3JlLWpzQDIuNS4zQGNvcmUtanMvbGlicmFyeS9tb2R1bGVzL19zZXQtdG8tc3RyaW5nLXRhZy5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvX2NvcmUtanNAMi41LjNAY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX2Zvci1vZi5qcyIsIndlYnBhY2s6Ly8vLi9wdWJsaWMvanMvbG9hZGVyLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9fY29yZS1qc0AyLjUuM0Bjb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9fbGlicmFyeS5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvX2NvcmUtanNAMi41LjNAY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX29iamVjdC1jcmVhdGUuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL19jb3JlLWpzQDIuNS4zQGNvcmUtanMvbGlicmFyeS9tb2R1bGVzL190by1sZW5ndGguanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL19jb3JlLWpzQDIuNS4zQGNvcmUtanMvbGlicmFyeS9tb2R1bGVzL191aWQuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL19jb3JlLWpzQDIuNS4zQGNvcmUtanMvbGlicmFyeS9tb2R1bGVzL190by1vYmplY3QuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL19jb3JlLWpzQDIuNS4zQGNvcmUtanMvbGlicmFyeS9tb2R1bGVzL19jbGFzc29mLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9fYmFiZWwtcnVudGltZUA2LjI2LjBAYmFiZWwtcnVudGltZS9oZWxwZXJzL3NsaWNlZFRvQXJyYXkuanMiLCJ3ZWJwYWNrOi8vLy4vcHVibGljL2pzL21hdGguanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL19jb3JlLWpzQDIuNS4zQGNvcmUtanMvbGlicmFyeS9tb2R1bGVzL190by1pbnRlZ2VyLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9fY29yZS1qc0AyLjUuM0Bjb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9fZGVmaW5lZC5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvX2NvcmUtanNAMi41LjNAY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX2l0ZXItZGVmaW5lLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9fY29yZS1qc0AyLjUuM0Bjb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9fZG9tLWNyZWF0ZS5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvX2NvcmUtanNAMi41LjNAY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX3RvLXByaW1pdGl2ZS5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvX2NvcmUtanNAMi41LjNAY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX29iamVjdC1rZXlzLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9fY29yZS1qc0AyLjUuM0Bjb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9fc2hhcmVkLWtleS5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvX2NvcmUtanNAMi41LjNAY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX3NoYXJlZC5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvX2NvcmUtanNAMi41LjNAY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX2VudW0tYnVnLWtleXMuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL19jb3JlLWpzQDIuNS4zQGNvcmUtanMvbGlicmFyeS9tb2R1bGVzL19hbi1pbnN0YW5jZS5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvX2NvcmUtanNAMi41LjNAY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvY29yZS5nZXQtaXRlcmF0b3ItbWV0aG9kLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9fY29yZS1qc0AyLjUuM0Bjb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9fbmV3LXByb21pc2UtY2FwYWJpbGl0eS5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvX2NvcmUtanNAMi41LjNAY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX3JlZGVmaW5lLWFsbC5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvX2JhYmVsLXJ1bnRpbWVANi4yNi4wQGJhYmVsLXJ1bnRpbWUvY29yZS1qcy9nZXQtaXRlcmF0b3IuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL19iYWJlbC1ydW50aW1lQDYuMjYuMEBiYWJlbC1ydW50aW1lL2NvcmUtanMvc3ltYm9sLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9fY29yZS1qc0AyLjUuM0Bjb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9fbWV0YS5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvX2NvcmUtanNAMi41LjNAY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX3drcy1leHQuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL19jb3JlLWpzQDIuNS4zQGNvcmUtanMvbGlicmFyeS9tb2R1bGVzL193a3MtZGVmaW5lLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9fY29yZS1qc0AyLjUuM0Bjb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9fb2JqZWN0LXBpZS5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvX2NvcmUtanNAMi41LjNAY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX3ZhbGlkYXRlLWNvbGxlY3Rpb24uanMiLCJ3ZWJwYWNrOi8vLy4vcHVibGljL2pzL3RyYWl0cy9LaWxsYWJsZS5qcyIsIndlYnBhY2s6Ly8vLi9wdWJsaWMvanMvdHJhaXRzL1NvbGlkLmpzIiwid2VicGFjazovLy8uL3B1YmxpYy9qcy90cmFpdHMvUGh5c2ljcy5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvX2JhYmVsLXJ1bnRpbWVANi4yNi4wQGJhYmVsLXJ1bnRpbWUvcmVnZW5lcmF0b3IvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL19jb3JlLWpzQDIuNS4zQGNvcmUtanMvbGlicmFyeS9tb2R1bGVzL19pZTgtZG9tLWRlZmluZS5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvX2NvcmUtanNAMi41LjNAY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX3JlZGVmaW5lLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9fY29yZS1qc0AyLjUuM0Bjb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9fb2JqZWN0LWtleXMtaW50ZXJuYWwuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL19jb3JlLWpzQDIuNS4zQGNvcmUtanMvbGlicmFyeS9tb2R1bGVzL19pb2JqZWN0LmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9fY29yZS1qc0AyLjUuM0Bjb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9faHRtbC5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvX2NvcmUtanNAMi41LjNAY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX29iamVjdC1ncG8uanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL19jb3JlLWpzQDIuNS4zQGNvcmUtanMvbGlicmFyeS9tb2R1bGVzL19pdGVyLXN0ZXAuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL19jb3JlLWpzQDIuNS4zQGNvcmUtanMvbGlicmFyeS9tb2R1bGVzL19pdGVyLWNhbGwuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL19jb3JlLWpzQDIuNS4zQGNvcmUtanMvbGlicmFyeS9tb2R1bGVzL19pcy1hcnJheS1pdGVyLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9fY29yZS1qc0AyLjUuM0Bjb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9fc3BlY2llcy1jb25zdHJ1Y3Rvci5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvX2NvcmUtanNAMi41LjNAY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX3Rhc2suanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL19jb3JlLWpzQDIuNS4zQGNvcmUtanMvbGlicmFyeS9tb2R1bGVzL19wZXJmb3JtLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9fY29yZS1qc0AyLjUuM0Bjb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9fcHJvbWlzZS1yZXNvbHZlLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9fY29yZS1qc0AyLjUuM0Bjb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9fc2V0LXNwZWNpZXMuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL19jb3JlLWpzQDIuNS4zQGNvcmUtanMvbGlicmFyeS9tb2R1bGVzL19pdGVyLWRldGVjdC5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvX2NvcmUtanNAMi41LjNAY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX29iamVjdC1nb3BzLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9fY29yZS1qc0AyLjUuM0Bjb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9faXMtYXJyYXkuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL19jb3JlLWpzQDIuNS4zQGNvcmUtanMvbGlicmFyeS9tb2R1bGVzL19vYmplY3QtZ29wbi5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvX2NvcmUtanNAMi41LjNAY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX29iamVjdC1nb3BkLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9fYmFiZWwtcnVudGltZUA2LjI2LjBAYmFiZWwtcnVudGltZS9oZWxwZXJzL3R5cGVvZi5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvX2NvcmUtanNAMi41LjNAY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX2NvbGxlY3Rpb24tc3Ryb25nLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9fY29yZS1qc0AyLjUuM0Bjb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9fY29sbGVjdGlvbi5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvX2NvcmUtanNAMi41LjNAY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX2NvbGxlY3Rpb24tdG8tanNvbi5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvX2NvcmUtanNAMi41LjNAY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX3NldC1jb2xsZWN0aW9uLW9mLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9fY29yZS1qc0AyLjUuM0Bjb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9fc2V0LWNvbGxlY3Rpb24tZnJvbS5qcyIsIndlYnBhY2s6Ly8vLi9wdWJsaWMvanMvVGlsZVJlc29sdmVyLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9fYmFiZWwtcnVudGltZUA2LjI2LjBAYmFiZWwtcnVudGltZS9oZWxwZXJzL3RvQ29uc3VtYWJsZUFycmF5LmpzIiwid2VicGFjazovLy8uL3B1YmxpYy9qcy9TcHJpdGVTaGVldC5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvX2JhYmVsLXJ1bnRpbWVANi4yNi4wQGJhYmVsLXJ1bnRpbWUvY29yZS1qcy9tYXAuanMiLCJ3ZWJwYWNrOi8vLy4vcHVibGljL2pzL3RyYWl0cy9QZW5kdWx1bU1vdmUuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL193aGF0d2ctZmV0Y2hAMi4wLjNAd2hhdHdnLWZldGNoL2ZldGNoLmpzIiwid2VicGFjazovLy8uL3B1YmxpYy9qcy9tYWluLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9fcmVnZW5lcmF0b3ItcnVudGltZUAwLjExLjFAcmVnZW5lcmF0b3ItcnVudGltZS9ydW50aW1lLW1vZHVsZS5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvX3JlZ2VuZXJhdG9yLXJ1bnRpbWVAMC4xMS4xQHJlZ2VuZXJhdG9yLXJ1bnRpbWUvcnVudGltZS5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvX2NvcmUtanNAMi41LjNAY29yZS1qcy9saWJyYXJ5L2ZuL3Byb21pc2UuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL19jb3JlLWpzQDIuNS4zQGNvcmUtanMvbGlicmFyeS9tb2R1bGVzL19zdHJpbmctYXQuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL19jb3JlLWpzQDIuNS4zQGNvcmUtanMvbGlicmFyeS9tb2R1bGVzL19pdGVyLWNyZWF0ZS5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvX2NvcmUtanNAMi41LjNAY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX29iamVjdC1kcHMuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL19jb3JlLWpzQDIuNS4zQGNvcmUtanMvbGlicmFyeS9tb2R1bGVzL19hcnJheS1pbmNsdWRlcy5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvX2NvcmUtanNAMi41LjNAY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX3RvLWFic29sdXRlLWluZGV4LmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9fY29yZS1qc0AyLjUuM0Bjb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9lczYuYXJyYXkuaXRlcmF0b3IuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL19jb3JlLWpzQDIuNS4zQGNvcmUtanMvbGlicmFyeS9tb2R1bGVzL19hZGQtdG8tdW5zY29wYWJsZXMuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL19jb3JlLWpzQDIuNS4zQGNvcmUtanMvbGlicmFyeS9tb2R1bGVzL2VzNi5wcm9taXNlLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9fY29yZS1qc0AyLjUuM0Bjb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9faW52b2tlLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9fY29yZS1qc0AyLjUuM0Bjb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9fbWljcm90YXNrLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9fY29yZS1qc0AyLjUuM0Bjb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9lczcucHJvbWlzZS5maW5hbGx5LmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9fY29yZS1qc0AyLjUuM0Bjb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9lczcucHJvbWlzZS50cnkuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL19iYWJlbC1ydW50aW1lQDYuMjYuMEBiYWJlbC1ydW50aW1lL2NvcmUtanMvaXMtaXRlcmFibGUuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL19jb3JlLWpzQDIuNS4zQGNvcmUtanMvbGlicmFyeS9mbi9pcy1pdGVyYWJsZS5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvX2NvcmUtanNAMi41LjNAY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvY29yZS5pcy1pdGVyYWJsZS5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvX2NvcmUtanNAMi41LjNAY29yZS1qcy9saWJyYXJ5L2ZuL2dldC1pdGVyYXRvci5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvX2NvcmUtanNAMi41LjNAY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvY29yZS5nZXQtaXRlcmF0b3IuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL19iYWJlbC1ydW50aW1lQDYuMjYuMEBiYWJlbC1ydW50aW1lL2hlbHBlcnMvYXN5bmNUb0dlbmVyYXRvci5qcyIsIndlYnBhY2s6Ly8vLi9wdWJsaWMvY3NzL21haW4uY3NzPzcwNjQiLCJ3ZWJwYWNrOi8vLy4vcHVibGljL2Nzcy9jb250cm9sbGVyLmNzcz9hMWQ3Iiwid2VicGFjazovLy8uL3B1YmxpYy9qcy9UaW1lci5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvX2JhYmVsLXJ1bnRpbWVANi4yNi4wQGJhYmVsLXJ1bnRpbWUvY29yZS1qcy9vYmplY3QvZGVmaW5lLXByb3BlcnR5LmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9fY29yZS1qc0AyLjUuM0Bjb3JlLWpzL2xpYnJhcnkvZm4vb2JqZWN0L2RlZmluZS1wcm9wZXJ0eS5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvX2NvcmUtanNAMi41LjNAY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvZXM2Lm9iamVjdC5kZWZpbmUtcHJvcGVydHkuanMiLCJ3ZWJwYWNrOi8vLy4vcHVibGljL2pzL0NhbWVyYS5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvX2NvcmUtanNAMi41LjNAY29yZS1qcy9saWJyYXJ5L2ZuL3N5bWJvbC9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvX2NvcmUtanNAMi41LjNAY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvZXM2LnN5bWJvbC5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvX2NvcmUtanNAMi41LjNAY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX2VudW0ta2V5cy5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvX2NvcmUtanNAMi41LjNAY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX29iamVjdC1nb3BuLWV4dC5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvX2NvcmUtanNAMi41LjNAY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvZXM3LnN5bWJvbC5hc3luYy1pdGVyYXRvci5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvX2NvcmUtanNAMi41LjNAY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvZXM3LnN5bWJvbC5vYnNlcnZhYmxlLmpzIiwid2VicGFjazovLy8uL3B1YmxpYy9qcy9Cb3VuZGluZ0JveC5qcyIsIndlYnBhY2s6Ly8vLi9wdWJsaWMvanMvdHJhaXRzL1BsYXllckNvbnRyb2xsZXIuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL19jb3JlLWpzQDIuNS4zQGNvcmUtanMvbGlicmFyeS9mbi9vYmplY3QvZ2V0LXByb3RvdHlwZS1vZi5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvX2NvcmUtanNAMi41LjNAY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvZXM2Lm9iamVjdC5nZXQtcHJvdG90eXBlLW9mLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9fY29yZS1qc0AyLjUuM0Bjb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9fb2JqZWN0LXNhcC5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvX2JhYmVsLXJ1bnRpbWVANi4yNi4wQGJhYmVsLXJ1bnRpbWUvY29yZS1qcy9zeW1ib2wvaXRlcmF0b3IuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL19jb3JlLWpzQDIuNS4zQGNvcmUtanMvbGlicmFyeS9mbi9zeW1ib2wvaXRlcmF0b3IuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL19iYWJlbC1ydW50aW1lQDYuMjYuMEBiYWJlbC1ydW50aW1lL2NvcmUtanMvb2JqZWN0L3NldC1wcm90b3R5cGUtb2YuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL19jb3JlLWpzQDIuNS4zQGNvcmUtanMvbGlicmFyeS9mbi9vYmplY3Qvc2V0LXByb3RvdHlwZS1vZi5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvX2NvcmUtanNAMi41LjNAY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvZXM2Lm9iamVjdC5zZXQtcHJvdG90eXBlLW9mLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9fY29yZS1qc0AyLjUuM0Bjb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9fc2V0LXByb3RvLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9fYmFiZWwtcnVudGltZUA2LjI2LjBAYmFiZWwtcnVudGltZS9jb3JlLWpzL29iamVjdC9jcmVhdGUuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL19jb3JlLWpzQDIuNS4zQGNvcmUtanMvbGlicmFyeS9mbi9vYmplY3QvY3JlYXRlLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9fY29yZS1qc0AyLjUuM0Bjb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9lczYub2JqZWN0LmNyZWF0ZS5qcyIsIndlYnBhY2s6Ly8vLi9wdWJsaWMvanMvbG9hZGVycy9sZXZlbC5qcyIsIndlYnBhY2s6Ly8vLi9wdWJsaWMvanMvTGV2ZWwuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL19iYWJlbC1ydW50aW1lQDYuMjYuMEBiYWJlbC1ydW50aW1lL2NvcmUtanMvc2V0LmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9fY29yZS1qc0AyLjUuM0Bjb3JlLWpzL2xpYnJhcnkvZm4vc2V0LmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9fY29yZS1qc0AyLjUuM0Bjb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9lczYuc2V0LmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9fY29yZS1qc0AyLjUuM0Bjb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9fYXJyYXktbWV0aG9kcy5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvX2NvcmUtanNAMi41LjNAY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX2FycmF5LXNwZWNpZXMtY3JlYXRlLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9fY29yZS1qc0AyLjUuM0Bjb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9fYXJyYXktc3BlY2llcy1jb25zdHJ1Y3Rvci5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvX2NvcmUtanNAMi41LjNAY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvZXM3LnNldC50by1qc29uLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9fY29yZS1qc0AyLjUuM0Bjb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9fYXJyYXktZnJvbS1pdGVyYWJsZS5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvX2NvcmUtanNAMi41LjNAY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvZXM3LnNldC5vZi5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvX2NvcmUtanNAMi41LjNAY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvZXM3LnNldC5mcm9tLmpzIiwid2VicGFjazovLy8uL3B1YmxpYy9qcy9jb21wb3NpdG9yLmpzIiwid2VicGFjazovLy8uL3B1YmxpYy9qcy9FbnRpdHlDb2xsaWRlci5qcyIsIndlYnBhY2s6Ly8vLi9wdWJsaWMvanMvVGlsZUNvbGxpZGVyLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9fYmFiZWwtcnVudGltZUA2LjI2LjBAYmFiZWwtcnVudGltZS9jb3JlLWpzL2FycmF5L2Zyb20uanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL19jb3JlLWpzQDIuNS4zQGNvcmUtanMvbGlicmFyeS9mbi9hcnJheS9mcm9tLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9fY29yZS1qc0AyLjUuM0Bjb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9lczYuYXJyYXkuZnJvbS5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvX2NvcmUtanNAMi41LjNAY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX2NyZWF0ZS1wcm9wZXJ0eS5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvX2NvcmUtanNAMi41LjNAY29yZS1qcy9saWJyYXJ5L2ZuL21hcC5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvX2NvcmUtanNAMi41LjNAY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvZXM2Lm1hcC5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvX2NvcmUtanNAMi41LjNAY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvZXM3Lm1hcC50by1qc29uLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9fY29yZS1qc0AyLjUuM0Bjb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9lczcubWFwLm9mLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9fY29yZS1qc0AyLjUuM0Bjb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9lczcubWFwLmZyb20uanMiLCJ3ZWJwYWNrOi8vLy4vcHVibGljL2pzL2FuaW0uanMiLCJ3ZWJwYWNrOi8vLy4vcHVibGljL2pzL2xheWVycy9zcHJpdGVzLmpzIiwid2VicGFjazovLy8uL3B1YmxpYy9qcy9sYXllcnMvYmFja2dyb3VuZC5qcyIsIndlYnBhY2s6Ly8vLi9wdWJsaWMvanMvbG9hZGVycy9mb250LmpzIiwid2VicGFjazovLy8uL3B1YmxpYy9qcy9lbnRpdGllcy5qcyIsIndlYnBhY2s6Ly8vLi9wdWJsaWMvanMvZW50aXRpZXMvTWFyaW8uanMiLCJ3ZWJwYWNrOi8vLy4vcHVibGljL2pzL3RyYWl0cy9Hby5qcyIsIndlYnBhY2s6Ly8vLi9wdWJsaWMvanMvdHJhaXRzL0p1bXAuanMiLCJ3ZWJwYWNrOi8vLy4vcHVibGljL2pzL3RyYWl0cy9TdG9tZXIuanMiLCJ3ZWJwYWNrOi8vLy4vcHVibGljL2pzL2VudGl0aWVzL0dvb21iYS5qcyIsIndlYnBhY2s6Ly8vLi9wdWJsaWMvanMvZW50aXRpZXMvS29vcGEuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL19iYWJlbC1ydW50aW1lQDYuMjYuMEBiYWJlbC1ydW50aW1lL2NvcmUtanMvbWF0aC9zaWduLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9fY29yZS1qc0AyLjUuM0Bjb3JlLWpzL2xpYnJhcnkvZm4vbWF0aC9zaWduLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9fY29yZS1qc0AyLjUuM0Bjb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9lczYubWF0aC5zaWduLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9fY29yZS1qc0AyLjUuM0Bjb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9fbWF0aC1zaWduLmpzIiwid2VicGFjazovLy8uL3B1YmxpYy9qcy9sYXllcnMvZGFzaGJvYXJkLmpzIiwid2VicGFjazovLy8uL3B1YmxpYy9qcy9wb2x5ZmlsbHMvYWRkUGFkU3RhcnQuanMiLCJ3ZWJwYWNrOi8vLy4vcHVibGljL2pzL2lucHV0L2lucHV0LmpzIiwid2VicGFjazovLy8uL3B1YmxpYy9qcy9pbnB1dC9LZXlib2FyZFN0YXRlLmpzIl0sIm5hbWVzIjpbIlNpZGVzIiwiTEVGVCIsIlJJR0hUIiwiQk9UVE9NIiwiVE9QIiwiVHJhaXQiLCJuYW1lIiwiTkFNRSIsInRhc2tzIiwiZm9yRWFjaCIsInRhc2siLCJsZW5ndGgiLCJwdXNoIiwidXMiLCJ0aGVtIiwiRW50aXR5IiwiY2FuQ29sbGlkZXMiLCJwb3MiLCJ2ZWwiLCJzaXplIiwib2Zmc2V0IiwiYm91bmRzIiwibGlmZVRpbWUiLCJ0cmFpdHMiLCJ0cmFpdCIsImZpbmFsaXplIiwiY2FuZGlkYXRlIiwiY29sbGlkZXMiLCJzaWRlIiwibWF0Y2giLCJvYnN0cnVjdCIsImRlbHRhVGltZSIsImxldmVsIiwidXBkYXRlIiwibG9hZEltYWdlIiwibG9hZEpTT04iLCJsb2FkU3ByaXRlU2hlZXQiLCJ1cmwiLCJpbWFnZSIsIkltYWdlIiwiYWRkRXZlbnRMaXN0ZW5lciIsInJlc29sdmUiLCJzcmMiLCJmZXRjaCIsInRoZW4iLCJyIiwianNvbiIsImFsbCIsInNoZWV0U3BlYyIsImltYWdlVVJMIiwic3ByaXRlcyIsInRpbGVXIiwidGlsZUgiLCJ0aWxlcyIsImRlZmluZVRpbGUiLCJ0aWxlU3BlYyIsImluZGV4IiwiZnJhbWVzIiwiZGVmaW5lIiwiZnJhbWVTcGVjIiwicmVjdCIsImFuaW1hdGlvbnMiLCJhbmltYXRpb24iLCJhbmltU3BlYyIsImZyYW1lTGVuIiwiZGVmaW5lQW5pbSIsIk1hdHJpeCIsImdyaWQiLCJjYWxsYmFjayIsImNvbHVtbiIsIngiLCJ2YWwiLCJ5IiwiY29sIiwidW5kZWZpbmVkIiwidmFsdWUiLCJWZWMyIiwic2V0IiwiS2lsbGFibGUiLCJkZWFkIiwiZGVhZFRpbWUiLCJyZW1vdmVBZnRlciIsInF1ZXVlIiwiZW50aXR5IiwiZW50aXRpZXMiLCJkZWxldGUiLCJTb2xpZCIsIm9ic3RydWN0cyIsInNpZGVzIiwidG9wIiwieTEiLCJ5MiIsImxlZnQiLCJ4MSIsIngyIiwiUGh5c2ljcyIsInRpbGVDb2xsaWRlciIsImNoZWNrWCIsImNoZWNrWSIsImdyYXZpdHkiLCJUaWxlUmVzb2x2ZXIiLCJtYXRyaXgiLCJ0aWxlU2l6ZSIsIk1hdGgiLCJmbG9vciIsInBvczEiLCJwb3MyIiwicE1heCIsImNlaWwiLCJyYW5nZSIsInRvSW5kZXgiLCJpbmRleFgiLCJpbmRleFkiLCJ0aWxlIiwiZ2V0IiwicG9zWCIsInBvc1kiLCJnZXRCeUluZGV4IiwibWF0Y2hlcyIsInRvSW5kZXhSYW5nZSIsIlNwcml0ZVNoZWV0Iiwid2lkdGgiLCJoZWlnaHQiLCJidWZmZXJzIiwibWFwIiwiYnVmZmVyIiwiZG9jdW1lbnQiLCJjcmVhdGVFbGVtZW50IiwiY29udGV4dCIsImdldENvbnRleHQiLCJmbGlwIiwic2NhbGUiLCJ0cmFuc2xhdGUiLCJkcmF3SW1hZ2UiLCJkcmF3IiwiZGlzdGFuY2UiLCJhbmltIiwiZHJhd1RpbGUiLCJQZW5kdWx1bU1vdmUiLCJlbmFibGUiLCJzcGVlZCIsImtvb3BhIiwiY2FudmFzIiwiZW50aXR5RmFjdG9yeSIsImZvbnQiLCJsb2FkTGV2ZWwiLCJjYW1lcmEiLCJtYXJpbyIsImFkZCIsInBsYXllckVudiIsImNyZWF0ZVBsYXllckVudiIsImlucHV0IiwibGlzdGVuVG8iLCJ3aW5kb3ciLCJjb21wIiwibGF5ZXJzIiwidGltZXIiLCJtYXgiLCJzdGFydCIsIm1haW4iLCJwbGF5ZXJFbnRpdHkiLCJwbGF5ZXJDb250cm9sIiwic2V0UGxheWVyIiwiYWRkVHJhaXQiLCJnZXRFbGVtZW50QnlJZCIsIlRpbWVyIiwiYWNjdW11bGF0ZWRUaW1lIiwibGFzdFRpbWUiLCJwZXJmb3JtYW5jZSIsIm5vdyIsInVwZGF0ZVByb3h5IiwidGltZSIsImVucXVldWUiLCJyZXF1ZXN0QW5pbWF0aW9uRnJhbWUiLCJDYW1lcmEiLCJCb3VuZGluZ0JveCIsImJveCIsImJvdHRvbSIsInJpZ2h0IiwiUGxheWVyQ29udHJvbGxlciIsInBsYXllciIsImNoZWNrUG9pbnQiLCJzY29yZSIsInN0b21lciIsIm9uU3RvbXAiLCJoYXMiLCJraWxsYWJsZSIsInJldml2ZSIsImNyZWF0ZUxldmVsTG9hZGVyIiwiZXhwYW5kU3BhbiIsImV4cGFuZFJhbmdlcyIsImV4cGFuZFRpbGVzIiwic2V0dXBMZXZlbCIsImxldmVsU3BlYyIsIm1lcmdlZENvbGxpc2lvbkdyaWQiLCJyZWR1Y2UiLCJtZXJnZWRUaWxlcyIsImxheWVyU3BlYyIsImNvbmNhdCIsImNvbGxpc2lvbkdyaWQiLCJjcmVhdGVDb2xsaXNpb25HcmlkIiwicGF0dGVybnMiLCJzZXRDb2xsaXNpb25HcmlkIiwic2V0dXBCYWNrZ3JvdW5kIiwiYmFja2dyb3VuZFNwcml0ZXMiLCJiYWNrZ3JvdW5kR3JpZCIsImNyZWF0ZUJhY2tncm91bmRHcmlkIiwibGF5ZXIiLCJiYWNrZ3JvdW5kTGF5ZXIiLCJzZXR1cEVudGl0aWVzIiwiY3JlYXRlRW50aXR5Iiwic3ByaXRlTGF5ZXIiLCJzcHJpdGVTaGVldCIsInR5cGUiLCJ4U3RhcnQiLCJ4TGVuIiwieVN0YXJ0IiwieUxlbiIsInhFbmQiLCJ5RW5kIiwiZXhwYW5kUmFuZ2UiLCJyYW5nZXMiLCJ3YWxrVGlsZXMiLCJvZmZzZXRYIiwib2Zmc2V0WSIsImRlcml2ZWRYIiwiZGVyaXZlZFkiLCJwYXR0ZXJuIiwiTGV2ZWwiLCJlbnRpdHlDb2xsaWRlciIsInRvdGFsVGltZSIsImNoZWNrIiwiQ29tcG9zaXRvciIsIkVudGl0eUNvbGxpZGVyIiwic3ViamVjdCIsIm92ZXJsYXBzIiwiVGlsZUNvbGxpZGVyIiwidGlsZU1hdHJpeCIsInNlYXJjaEJ5UmFuZ2UiLCJjcmVhdGVBbmltIiwicmVzb2x2ZUZyYW1lIiwiZnJhbWVJbmRleCIsImNyZWF0ZVNwcml0ZUxheWVyIiwic3ByaXRlQnVmZmVyIiwic3ByaXRlQ29udGV4dCIsImRyYXdTcHJpdGVMYXllciIsImNsZWFyUmVjdCIsImNyZWF0ZUJhY2tncm91bmRMYXllciIsInJlc29sdmVyIiwicmVkcmF3Iiwic3RhcnRJbmRleCIsImVuZEluZGV4IiwiZHJhd0FuaW0iLCJkcmF3QmFja2dyb3VuZExheWVyIiwiZHJhd1dpZHRoIiwiZHJhd0Zyb20iLCJkcmF3RW5kIiwibG9hZEZvbnQiLCJDSEFSUyIsIkZvbnQiLCJ0ZXh0IiwiY2hhciIsImZvbnRTcHJpdGUiLCJpbWciLCJyb3dMZW4iLCJjb2xOdW0iLCJlbnRyaWVzIiwibG9hZEVudGl0aWVzIiwiZW50aXRpZXNGYWN0b3J5IiwiYWRkQXMiLCJmYWN0b3J5IiwibG9hZE1hcmlvIiwiY3JlYXRlTWFyaW9GYWN0b3J5Iiwic3ByaXRlIiwicnVuQW5pbSIsImZyYW1lUm91dGUiLCJqdW1wIiwiZmFsbGluZyIsImdvIiwiZGlyIiwiZHJhd01hcmlvIiwiaGVhZGluZyIsImNyZWF0ZU1hcmlvIiwiR28iLCJhY2NlbGVyYXRpb24iLCJkZWNlbGVyYXRpb24iLCJkcmFnRmFjdG9yIiwiYWJzWCIsImFicyIsImRlY2VsIiwibWluIiwiZHJhZyIsIkp1bXAiLCJkdXJhdGlvbiIsInZlbG9jaXR5IiwiZW5nYWdlVGltZSIsInJlYWR5IiwiZ3JhY2VQZXJpb2QiLCJyZXF1ZXN0VGltZSIsInNwZWVkQm9vc3QiLCJjYW5jZWwiLCJTdG9tZXIiLCJib3VuY2VTcGVlZCIsImJvdW5jZSIsImxvYWRHb29tYmEiLCJjcmVhdGVHb29tYmFGYWN0b3J5IiwiQmVoYXZpb3IiLCJraWxsIiwicGVuZHVsdW1Nb3ZlIiwid2Fsa0FuaW0iLCJyb3V0ZUFuaW0iLCJnb29tYmEiLCJkcmF3R29vbWJhIiwiY3JlYXRlR29vbWJhIiwibG9hZEtvb3BhIiwiY3JlYXRlS29vcGFGYWN0b3J5IiwiU1RBVEVfV0FMS0lORyIsIlNUQVRFX0hJRElORyIsIlNUQVRFX1BBTklDIiwic3RhdGUiLCJoaWRlVGltZSIsImhpZGVEdXJhdGlvbiIsInBhbmljU3BlZWQiLCJ3YWxrU3BlZWQiLCJoYW5kbGVTdGF0ZSIsImhhbmRsZUtpY2siLCJwYW5pYyIsInRyYXZlbERpciIsImltcGFjdERpciIsImhpZGluZyIsInNvbGlkIiwidW5IaWRlIiwid2FrZUFuaW0iLCJiZWhhdmlvciIsImRyYXdLb29wYSIsImNyZWF0ZUtvb3BhIiwiY3JlYXRlRGFzaGJvYXJkTGF5ZXIiLCJMSU5FMSIsIkxJTkUyIiwiY29pbnMiLCJkcmF3RGFzaGJvYXJkIiwicGxheWVyQ29udHJvbGxlciIsInByaW50IiwidG9TdHJpbmciLCJwYWRTdGFydCIsInRvRml4ZWQiLCJhZGRQYWRTdGFydFBvbHlmaWxsIiwiU3RyaW5nIiwicHJvdG90eXBlIiwidGFyZ2V0TGVuZ3RoIiwicGFkU3RyaW5nIiwicmVwZWF0Iiwic2xpY2UiLCJzZXR1cFRvdWNoQ29udHJvbGxlciIsInNldHVwS2V5Ym9hcmQiLCJhZGRNYXBwaW5nIiwia2V5U3RhdGUiLCJjb250cm9sbGVySnVtcCIsImNvbnRyb2xsZXJMZWZ0Iiwib25jbGljayIsIm9udG91Y2hzdGFydCIsIm9udG91Y2hlbmQiLCJQUkVTU0VEIiwiUkVMRUFTRUQiLCJLZXlib2FyZFN0YXRlIiwia2V5U3RhdGVzIiwia2V5TWFwIiwiY29kZSIsImNhbGxCYWNrIiwiZXZlbnQiLCJwcmV2ZW50RGVmYXVsdCIsImV2ZW50TmFtZSIsImhhbmRsZUV2ZW50Il0sIm1hcHBpbmdzIjoiO0FBQUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGFBQUs7QUFDTDtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLG1DQUEyQiwwQkFBMEIsRUFBRTtBQUN2RCx5Q0FBaUMsZUFBZTtBQUNoRDtBQUNBO0FBQ0E7O0FBRUE7QUFDQSw4REFBc0QsK0RBQStEOztBQUVySDtBQUNBOztBQUVBO0FBQ0E7Ozs7Ozs7O0FDN0RBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsRTs7Ozs7OztBQ1JBOztBQUVBOztBQUVBOztBQUVBOztBQUVBLHNDQUFzQyx1Q0FBdUMsZ0JBQWdCOztBQUU3RjtBQUNBO0FBQ0EsbUJBQW1CLGtCQUFrQjtBQUNyQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQyxHOzs7Ozs7QUMxQkQsNkJBQTZCO0FBQzdCLHVDQUF1Qzs7Ozs7OztBQ0R2QztBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsaUVBQWlFO0FBQ2pFO0FBQ0Esa0ZBQWtGO0FBQ2xGO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxXQUFXO0FBQ1gsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQSwrQ0FBK0M7QUFDL0M7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsY0FBYztBQUNkLGNBQWM7QUFDZCxjQUFjO0FBQ2QsY0FBYztBQUNkLGVBQWU7QUFDZixlQUFlO0FBQ2YsZUFBZTtBQUNmLGdCQUFnQjtBQUNoQjs7Ozs7OztBQzVEQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7Ozs7OztBQ1ZBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSx5Q0FBeUM7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ0x6Qzs7QUFDQTs7Ozs7O0FBRU8sSUFBTUEsd0JBQVE7QUFDakJDLFVBQU0sc0JBQU8sTUFBUCxDQURXO0FBRWpCQyxXQUFPLHNCQUFPLE9BQVAsQ0FGVTtBQUdqQkMsWUFBUSxzQkFBTyxRQUFQLENBSFM7QUFJakJDLFNBQUssc0JBQU8sS0FBUDtBQUpZLENBQWQ7O0lBT01DLEssV0FBQUEsSztBQUNULG1CQUFZQyxJQUFaLEVBQWtCO0FBQUE7O0FBQ2QsYUFBS0MsSUFBTCxHQUFZRCxJQUFaOztBQUVBLGFBQUtFLEtBQUwsR0FBYSxFQUFiO0FBQ0g7Ozs7bUNBRVU7QUFDUCxpQkFBS0EsS0FBTCxDQUFXQyxPQUFYLENBQW1CO0FBQUEsdUJBQVFDLE1BQVI7QUFBQSxhQUFuQjtBQUNBLGlCQUFLRixLQUFMLENBQVdHLE1BQVgsR0FBb0IsQ0FBcEI7QUFDSDs7OzhCQUVLRCxJLEVBQU07QUFDUixpQkFBS0YsS0FBTCxDQUFXSSxJQUFYLENBQWdCRixJQUFoQjtBQUNIOzs7aUNBRVFHLEUsRUFBSUMsSSxFQUFNO0FBQ2Y7QUFDSDs7O21DQUVVLENBRVY7OztpQ0FFUTtBQUNMO0FBQ0g7Ozs7O0lBR2dCQyxNO0FBQ2pCLHNCQUFjO0FBQUE7O0FBQ1YsYUFBS0MsV0FBTCxHQUFtQixJQUFuQjs7QUFFQSxhQUFLQyxHQUFMLEdBQVcsZUFBUyxDQUFULEVBQVcsQ0FBWCxDQUFYO0FBQ0EsYUFBS0MsR0FBTCxHQUFXLGVBQVMsQ0FBVCxFQUFXLENBQVgsQ0FBWDtBQUNBLGFBQUtDLElBQUwsR0FBWSxlQUFTLENBQVQsRUFBVyxDQUFYLENBQVo7QUFDQSxhQUFLQyxNQUFMLEdBQWMsZUFBUyxDQUFULEVBQVcsQ0FBWCxDQUFkO0FBQ0EsYUFBS0MsTUFBTCxHQUFjLDBCQUFnQixLQUFLSixHQUFyQixFQUEwQixLQUFLRSxJQUEvQixFQUFxQyxLQUFLQyxNQUExQyxDQUFkO0FBQ0EsYUFBS0UsUUFBTCxHQUFnQixDQUFoQjs7QUFFQSxhQUFLQyxNQUFMLEdBQWMsRUFBZDtBQUNIOzs7O2lDQUVRQyxLLEVBQU87QUFDWixpQkFBS0QsTUFBTCxDQUFZWCxJQUFaLENBQWlCWSxLQUFqQjtBQUNBLGlCQUFLQSxNQUFNakIsSUFBWCxJQUFtQmlCLEtBQW5CO0FBQ0g7OzttQ0FFVTtBQUNQLGlCQUFLRCxNQUFMLENBQVlkLE9BQVosQ0FBb0IsaUJBQVM7QUFDekJlLHNCQUFNQyxRQUFOO0FBQ0gsYUFGRDtBQUdIOzs7aUNBRVFDLFMsRUFBVztBQUFBOztBQUNoQjtBQUNBLGlCQUFLSCxNQUFMLENBQVlkLE9BQVosQ0FBb0IsaUJBQVM7QUFDekJlLHNCQUFNRyxRQUFOLFFBQXFCRCxTQUFyQjtBQUNILGFBRkQ7QUFHSDs7O2lDQUVRRSxJLEVBQU1DLEssRUFBTztBQUFBOztBQUNsQixpQkFBS04sTUFBTCxDQUFZZCxPQUFaLENBQW9CLGlCQUFTO0FBQ3pCZSxzQkFBTU0sUUFBTixTQUFxQkYsSUFBckIsRUFBMkJDLEtBQTNCO0FBQ0gsYUFGRDtBQUdIOzs7K0JBRU0sQ0FFTjs7OytCQUVNRSxTLEVBQVdDLEssRUFBTztBQUFBOztBQUNyQixpQkFBS1QsTUFBTCxDQUFZZCxPQUFaLENBQW9CLGlCQUFTO0FBQ3pCZSxzQkFBTVMsTUFBTixTQUFtQkYsU0FBbkIsRUFBOEJDLEtBQTlCO0FBQ0gsYUFGRDs7QUFJQSxpQkFBS1YsUUFBTCxJQUFnQlMsU0FBaEI7QUFDSDs7Ozs7a0JBaERnQmhCLE07Ozs7OztBQ3ZDckI7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRyxZQUFZO0FBQ2Y7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7QUNmQTtBQUNBO0FBQ0E7Ozs7Ozs7QUNGQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7O0FDSkE7QUFDQTtBQUNBLGlDQUFpQyxRQUFRLG1CQUFtQixVQUFVLEVBQUUsRUFBRTtBQUMxRSxDQUFDOzs7Ozs7O0FDSEQsa0JBQWtCLHlEOzs7Ozs7O0FDQWxCOztBQUVBOztBQUVBOztBQUVBOztBQUVBLHNDQUFzQyx1Q0FBdUMsZ0JBQWdCOztBQUU3RjtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLEU7Ozs7Ozs7QUNoQkE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUEsc0NBQXNDLHVDQUF1QyxnQkFBZ0I7O0FBRTdGO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0EsRTs7Ozs7O0FDaENBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7QUNuQkE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDO0FBQ0Q7QUFDQTtBQUNBOzs7Ozs7OztBQ1BBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLDZCQUE2QjtBQUM3QixjQUFjO0FBQ2Q7QUFDQSxDQUFDO0FBQ0Q7QUFDQTtBQUNBO0FBQ0EsaUNBQWlDO0FBQ2pDO0FBQ0E7QUFDQSxVQUFVO0FBQ1YsQ0FBQzs7Ozs7OztBQ2hCRCx1QkFBdUI7QUFDdkI7QUFDQTtBQUNBOzs7Ozs7O0FDSEE7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTs7Ozs7OztBQ05BOzs7Ozs7O0FDQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7O0FDTEE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLGVBQWUseUJBQXlCO0FBQ3hDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7OztBQ2xCQSxrQkFBa0Isd0Q7Ozs7OztBQ0FsQjtBQUNBO0FBQ0E7QUFDQTs7Ozs7OztBQ0hBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7QUNQQSxpQkFBaUI7O0FBRWpCO0FBQ0E7QUFDQTs7Ozs7OztBQ0pBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLG9FQUFvRSxpQ0FBaUM7QUFDckc7Ozs7Ozs7QUNOQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSx1Q0FBdUMsaUJBQWlCLEVBQUU7QUFDMUQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLG1FQUFtRSxnQkFBZ0I7QUFDbkY7QUFDQTtBQUNBLEdBQUcsNENBQTRDLGdDQUFnQztBQUMvRTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O1FDckJnQm1CLFMsR0FBQUEsUztRQVdBQyxRLEdBQUFBLFE7UUFLQUMsZSxHQUFBQSxlOztBQW5CaEI7Ozs7QUFDQTs7OztBQUVPLFNBQVNGLFNBQVQsQ0FBbUJHLEdBQW5CLEVBQXdCO0FBQzNCLFdBQU8sc0JBQVksbUJBQVc7QUFDMUIsWUFBTUMsUUFBUSxJQUFJQyxLQUFKLEVBQWQ7QUFDQUQsY0FBTUUsZ0JBQU4sQ0FBdUIsTUFBdkIsRUFBK0IsWUFBTTtBQUNqQ0Msb0JBQVFILEtBQVI7QUFDSCxTQUZEOztBQUlBQSxjQUFNSSxHQUFOLEdBQVlMLEdBQVo7QUFDSCxLQVBNLENBQVA7QUFRSDs7QUFFTSxTQUFTRixRQUFULENBQWtCRSxHQUFsQixFQUF1QjtBQUMxQixXQUFPTSxNQUFNTixHQUFOLEVBQ0ZPLElBREUsQ0FDRztBQUFBLGVBQUtDLEVBQUVDLElBQUYsRUFBTDtBQUFBLEtBREgsQ0FBUDtBQUVIOztBQUVNLFNBQVNWLGVBQVQsQ0FBeUI5QixJQUF6QixFQUErQjtBQUNsQyxXQUFPNkIsdUJBQXFCN0IsSUFBckIsWUFDRnNDLElBREUsQ0FDRztBQUFBLGVBQWEsa0JBQVFHLEdBQVIsQ0FBWSxDQUN2QkMsU0FEdUIsRUFFdkJkLFVBQVVjLFVBQVVDLFFBQXBCLENBRnVCLENBQVosQ0FBYjtBQUFBLEtBREgsRUFLRUwsSUFMRixDQUtPLGdCQUF3QjtBQUFBO0FBQUEsWUFBdEJJLFNBQXNCO0FBQUEsWUFBWFYsS0FBVzs7QUFDMUIsWUFBTVksVUFBVSwwQkFDWlosS0FEWSxFQUVaVSxVQUFVRyxLQUZFLEVBR1pILFVBQVVJLEtBSEUsQ0FBaEI7O0FBS0EsWUFBSUosVUFBVUssS0FBZCxFQUFxQjtBQUNqQkwsc0JBQVVLLEtBQVYsQ0FBZ0I1QyxPQUFoQixDQUF3QixvQkFBWTtBQUNoQ3lDLHdCQUFRSSxVQUFSLGlCQUNJQyxTQUFTakQsSUFEYiwwQ0FDc0JpRCxTQUFTQyxLQUQvQjtBQUVILGFBSEQ7QUFJSDs7QUFFRCxZQUFJUixVQUFVUyxNQUFkLEVBQXNCO0FBQ2xCVCxzQkFBVVMsTUFBVixDQUFpQmhELE9BQWpCLENBQXlCLHFCQUFhO0FBQ2xDeUMsd0JBQVFRLE1BQVIsaUJBQWVDLFVBQVVyRCxJQUF6QiwwQ0FBa0NxRCxVQUFVQyxJQUE1QztBQUNILGFBRkQ7QUFHSDs7QUFFRCxZQUFJWixVQUFVYSxVQUFkLEVBQTBCO0FBQ3RCYixzQkFBVWEsVUFBVixDQUFxQnBELE9BQXJCLENBQTZCLG9CQUFZO0FBQ3JDLG9CQUFNcUQsWUFBWSxzQkFBV0MsU0FBU04sTUFBcEIsRUFBNEJNLFNBQVNDLFFBQXJDLENBQWxCOztBQUVBZCx3QkFBUWUsVUFBUixDQUFtQkYsU0FBU3pELElBQTVCLEVBQWtDd0QsU0FBbEM7QUFDSCxhQUpEO0FBS0g7O0FBRUQsZUFBT1osT0FBUDtBQUNQLEtBakNFLENBQVA7QUFrQ0gsQzs7Ozs7Ozs7Ozs7O0FDdEREOzs7Ozs7O0FDQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHlCQUF5QjtBQUN6Qjs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDZCQUE2QjtBQUM3QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7Ozs7Ozs7QUN4Q0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSwyREFBMkQ7QUFDM0Q7Ozs7Ozs7QUNMQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7O0FDSkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7OztBQ0pBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsMkJBQTJCLGtCQUFrQixFQUFFOztBQUUvQztBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUcsWUFBWTtBQUNmOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7OztBQ3RCQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQSxzQ0FBc0MsdUNBQXVDLGdCQUFnQjs7QUFFN0Y7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0Esd0RBQXdELCtCQUErQjtBQUN2Rjs7QUFFQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0EsQ0FBQyxHOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7SUNqRGFnQixNLFdBQUFBLE07QUFDVixzQkFBYztBQUFBOztBQUNWLGFBQUtDLElBQUwsR0FBWSxFQUFaO0FBQ0g7Ozs7Z0NBRU9DLFEsRUFBVTtBQUNkLGlCQUFLRCxJQUFMLENBQVUxRCxPQUFWLENBQWtCLFVBQUM0RCxNQUFELEVBQVFDLENBQVIsRUFBYztBQUM1QkQsdUJBQU81RCxPQUFQLENBQWUsVUFBQzhELEdBQUQsRUFBS0MsQ0FBTCxFQUFXO0FBQ3RCSiw2QkFBU0csR0FBVCxFQUFhRCxDQUFiLEVBQWVFLENBQWY7QUFDSCxpQkFGRDtBQUdILGFBSkQ7QUFLSDs7OzRCQUVHRixDLEVBQUVFLEMsRUFBRztBQUNMLGdCQUFNQyxNQUFNLEtBQUtOLElBQUwsQ0FBVUcsQ0FBVixDQUFaOztBQUVBLGdCQUFJRyxHQUFKLEVBQVM7QUFDTCx1QkFBT0EsSUFBSUQsQ0FBSixDQUFQO0FBQ0g7QUFDRCxtQkFBT0UsU0FBUDtBQUNIOzs7NEJBRUlKLEMsRUFBRUUsQyxFQUFFRyxLLEVBQU87QUFDWixnQkFBSSxDQUFDLEtBQUtSLElBQUwsQ0FBVUcsQ0FBVixDQUFMLEVBQW1CO0FBQ2YscUJBQUtILElBQUwsQ0FBVUcsQ0FBVixJQUFlLEVBQWY7QUFDSDs7QUFFRCxpQkFBS0gsSUFBTCxDQUFVRyxDQUFWLEVBQWFFLENBQWIsSUFBa0JHLEtBQWxCO0FBQ0g7Ozs7O0lBR1FDLEksV0FBQUEsSTtBQUNULGtCQUFZTixDQUFaLEVBQWVFLENBQWYsRUFBa0I7QUFBQTs7QUFDZCxhQUFLSyxHQUFMLENBQVNQLENBQVQsRUFBWUUsQ0FBWjtBQUNIOzs7OzRCQUVHRixDLEVBQUdFLEMsRUFBRztBQUNOLGlCQUFLRixDQUFMLEdBQVNBLENBQVQ7QUFDQSxpQkFBS0UsQ0FBTCxHQUFTQSxDQUFUO0FBQ0g7Ozs7Ozs7OztBQ3hDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7QUNMQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7OztBQ0pBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSw4Q0FBOEM7QUFDOUM7QUFDQTtBQUNBOztBQUVBLDhCQUE4QixhQUFhOztBQUUzQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EseUNBQXlDLG9DQUFvQztBQUM3RSw2Q0FBNkMsb0NBQW9DO0FBQ2pGLEtBQUssNEJBQTRCLG9DQUFvQztBQUNyRTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsZ0JBQWdCLG1CQUFtQjtBQUNuQztBQUNBO0FBQ0Esa0NBQWtDLDJCQUEyQjtBQUM3RDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7Ozs7Ozs7QUNyRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7QUNOQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7QUNYQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOzs7Ozs7O0FDTkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7OztBQ0pBO0FBQ0E7QUFDQSxrREFBa0Q7QUFDbEQ7QUFDQSx1Q0FBdUM7QUFDdkM7Ozs7Ozs7QUNMQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7OztBQ0hBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDs7Ozs7OztBQ0pBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7O0FDUEE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOzs7Ozs7O0FDakJBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7Ozs7Ozs7QUNOQSxrQkFBa0IseUQ7Ozs7OztBQ0FsQixrQkFBa0IseUQ7Ozs7OztBQ0FsQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxpREFBaUQ7QUFDakQsQ0FBQztBQUNEO0FBQ0EscUJBQXFCO0FBQ3JCO0FBQ0EsU0FBUztBQUNULEdBQUcsRUFBRTtBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7OztBQ3BEQTs7Ozs7OztBQ0FBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDBEQUEwRCxzQkFBc0I7QUFDaEYsa0ZBQWtGLHdCQUF3QjtBQUMxRzs7Ozs7OztBQ1JBLGNBQWM7Ozs7Ozs7QUNBZDtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDSkE7Ozs7SUFFcUJNLFE7OztBQUNqQix3QkFBYztBQUFBOztBQUFBLDhJQUNKLFVBREk7O0FBRVYsY0FBS0MsSUFBTCxHQUFZLEtBQVo7QUFDQSxjQUFLQyxRQUFMLEdBQWdCLENBQWhCO0FBQ0EsY0FBS0MsV0FBTCxHQUFtQixDQUFuQjtBQUpVO0FBS2I7Ozs7K0JBRU07QUFBQTs7QUFDSCxpQkFBS0MsS0FBTCxDQUFXO0FBQUEsdUJBQU0sT0FBS0gsSUFBTCxHQUFZLElBQWxCO0FBQUEsYUFBWDtBQUNIOzs7aUNBRVE7QUFDTCxpQkFBS0EsSUFBTCxHQUFZLEtBQVo7QUFDQSxpQkFBS0MsUUFBTCxHQUFnQixDQUFoQjtBQUNIOzs7K0JBRU1HLE0sRUFBUXBELFMsRUFBV0MsSyxFQUFPO0FBQzdCLGdCQUFJLEtBQUsrQyxJQUFULEVBQWU7QUFDWCxxQkFBS0MsUUFBTCxJQUFpQmpELFNBQWpCO0FBQ0Esb0JBQUksS0FBS2lELFFBQUwsR0FBZ0IsS0FBS0MsV0FBekIsRUFBc0M7QUFDbEMseUJBQUtDLEtBQUwsQ0FBVyxZQUFNO0FBQ2JsRCw4QkFBTW9ELFFBQU4sQ0FBZUMsTUFBZixDQUFzQkYsTUFBdEI7QUFDSCxxQkFGRDtBQUdIO0FBQ0o7QUFDSjs7Ozs7a0JBMUJnQkwsUTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDRnJCOzs7O0lBRXFCUSxLOzs7QUFDakIscUJBQWM7QUFBQTs7QUFBQSx3SUFDSixPQURJOztBQUVWLGNBQUtDLFNBQUwsR0FBZ0IsSUFBaEI7QUFGVTtBQUdiOzs7O2lDQUVRSixNLEVBQVFLLEssRUFBTzNELEssRUFBTztBQUMzQixnQkFBSSxDQUFDLEtBQUswRCxTQUFWLEVBQXFCO0FBQ2pCO0FBQ0g7O0FBRUQsZ0JBQUlDLFVBQVUsY0FBTXJGLE1BQXBCLEVBQTRCO0FBQ3hCZ0YsdUJBQU85RCxNQUFQLENBQWNvRSxHQUFkLEdBQW9CNUQsTUFBTTZELEVBQU4sR0FBV1AsT0FBT2hFLElBQVAsQ0FBWXFELENBQTNDO0FBQ0FXLHVCQUFPakUsR0FBUCxDQUFXc0QsQ0FBWCxHQUFlLENBQWY7QUFDSCxhQUhELE1BR08sSUFBSWdCLFVBQVUsY0FBTXBGLEdBQXBCLEVBQXlCO0FBQzVCK0UsdUJBQU85RCxNQUFQLENBQWNvRSxHQUFkLEdBQW9CNUQsTUFBTThELEVBQTFCO0FBQ0FSLHVCQUFPakUsR0FBUCxDQUFXc0QsQ0FBWCxHQUFlLENBQWY7QUFDSCxhQUhNLE1BR0EsSUFBSWdCLFVBQVUsY0FBTXZGLElBQXBCLEVBQTBCO0FBQzdCa0YsdUJBQU85RCxNQUFQLENBQWN1RSxJQUFkLEdBQXFCL0QsTUFBTWdFLEVBQU4sR0FBV1YsT0FBT2hFLElBQVAsQ0FBWW1ELENBQTVDO0FBQ0FhLHVCQUFPakUsR0FBUCxDQUFXb0QsQ0FBWCxHQUFlLENBQWY7QUFDSCxhQUhNLE1BR0EsSUFBSWtCLFVBQVUsY0FBTXRGLEtBQXBCLEVBQTJCO0FBQzlCaUYsdUJBQU85RCxNQUFQLENBQWN1RSxJQUFkLEdBQXFCL0QsTUFBTWlFLEVBQTNCO0FBQ0FYLHVCQUFPakUsR0FBUCxDQUFXb0QsQ0FBWCxHQUFlLENBQWY7QUFDSDtBQUNKOzs7OztrQkF4QmdCZ0IsSzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDRnJCOzs7O0lBRXFCUyxPOzs7QUFDakIsdUJBQWM7QUFBQTtBQUFBLHVJQUNKLFNBREk7QUFFYjs7OzsrQkFFTVosTSxFQUFRcEQsUyxFQUFXQyxLLEVBQU87QUFDN0JtRCxtQkFBT2xFLEdBQVAsQ0FBV3FELENBQVgsSUFBZ0JhLE9BQU9qRSxHQUFQLENBQVdvRCxDQUFYLEdBQWV2QyxTQUEvQjtBQUNBQyxrQkFBTWdFLFlBQU4sQ0FBbUJDLE1BQW5CLENBQTBCZCxNQUExQjs7QUFFQUEsbUJBQU9sRSxHQUFQLENBQVd1RCxDQUFYLElBQWdCVyxPQUFPakUsR0FBUCxDQUFXc0QsQ0FBWCxHQUFlekMsU0FBL0I7QUFDQUMsa0JBQU1nRSxZQUFOLENBQW1CRSxNQUFuQixDQUEwQmYsTUFBMUI7O0FBRUFBLG1CQUFPakUsR0FBUCxDQUFXc0QsQ0FBWCxJQUFnQnhDLE1BQU1tRSxPQUFOLEdBQWdCcEUsU0FBaEM7QUFDSDs7Ozs7a0JBYmdCZ0UsTzs7Ozs7O0FDRnJCOzs7Ozs7O0FDQUE7QUFDQSxxRUFBc0UsbUJBQW1CLFVBQVUsRUFBRSxFQUFFO0FBQ3ZHLENBQUM7Ozs7Ozs7QUNGRDs7Ozs7OztBQ0FBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7OztBQ2hCQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7QUNMQTtBQUNBOzs7Ozs7O0FDREE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIOzs7Ozs7O0FDWkE7QUFDQSxVQUFVO0FBQ1Y7Ozs7Ozs7QUNGQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7OztBQ1hBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7Ozs7OztBQ1BBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7OztBQ1JBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7QUNuRkE7QUFDQTtBQUNBLFlBQVk7QUFDWixHQUFHO0FBQ0gsWUFBWTtBQUNaO0FBQ0E7Ozs7Ozs7QUNOQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7QUNYQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxzQkFBc0IsYUFBYTtBQUNuQyxHQUFHO0FBQ0g7Ozs7Ozs7QUNiQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxpQ0FBaUMscUJBQXFCO0FBQ3REO0FBQ0EsaUNBQWlDLFNBQVMsRUFBRTtBQUM1QyxDQUFDLFlBQVk7O0FBRWI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsNkJBQTZCLFNBQVMscUJBQXFCO0FBQzNELGlDQUFpQyxhQUFhO0FBQzlDO0FBQ0EsR0FBRyxZQUFZO0FBQ2Y7QUFDQTs7Ozs7OztBQ3JCQTs7Ozs7OztBQ0FBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7QUNKQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOzs7Ozs7O0FDTkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUcsWUFBWTtBQUNmO0FBQ0E7Ozs7Ozs7O0FDZkE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUEsaUhBQWlILG1CQUFtQixFQUFFLG1CQUFtQiw0SkFBNEo7O0FBRXJULHNDQUFzQyx1Q0FBdUMsZ0JBQWdCOztBQUU3RjtBQUNBO0FBQ0EsQ0FBQztBQUNEO0FBQ0EsRTs7Ozs7OztBQ3BCQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHVCQUF1QixPQUFPO0FBQzlCO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHFCQUFxQjtBQUNyQiw2QkFBNkI7QUFDN0IsMEJBQTBCO0FBQzFCLDBCQUEwQjtBQUMxQixxQkFBcUI7QUFDckI7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQSw4RUFBOEUsT0FBTztBQUNyRjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNULE9BQU87QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0wsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSx5Q0FBeUM7QUFDekMscUJBQXFCO0FBQ3JCLDBCQUEwQjtBQUMxQixLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSzs7QUFFTDtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7QUMvSUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDs7QUFFQTs7QUFFQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7Ozs7Ozs7QUMxREE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7OztBQ1JBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLGtDQUFrQztBQUNsQztBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUcsRUFBRTtBQUNMOzs7Ozs7OztBQ1hBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLGtDQUFrQztBQUNsQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1AsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBLEdBQUcsRUFBRTtBQUNMOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7SUMzQnFCSyxZO0FBQ2pCLDBCQUFZQyxNQUFaLEVBQW1DO0FBQUEsWUFBZkMsUUFBZSx1RUFBSixFQUFJO0FBQUE7O0FBQy9CLGFBQUtELE1BQUwsR0FBY0EsTUFBZDtBQUNBLGFBQUtDLFFBQUwsR0FBZ0JBLFFBQWhCO0FBQ0g7Ozs7Z0NBRU9yRixHLEVBQUs7QUFDVCxtQkFBT3NGLEtBQUtDLEtBQUwsQ0FBV3ZGLE1BQU0sS0FBS3FGLFFBQXRCLENBQVA7QUFDSDs7O3FDQUVZRyxJLEVBQU1DLEksRUFBTTtBQUNyQixnQkFBTUMsT0FBT0osS0FBS0ssSUFBTCxDQUFVRixPQUFPLEtBQUtKLFFBQXRCLElBQWtDLEtBQUtBLFFBQXBEO0FBQ0EsZ0JBQUlPLFFBQVEsRUFBWjtBQUNBLGdCQUFJNUYsTUFBTXdGLElBQVY7QUFDQSxlQUFHO0FBQ0NJLHNCQUFNakcsSUFBTixDQUFXLEtBQUtrRyxPQUFMLENBQWE3RixHQUFiLENBQVg7QUFDQUEsdUJBQU8sS0FBS3FGLFFBQVo7QUFDSCxhQUhELFFBR1NyRixNQUFNMEYsSUFIZjs7QUFLQSxtQkFBT0UsS0FBUDtBQUNIOzs7bUNBRVVFLE0sRUFBUUMsTSxFQUFRO0FBQ3ZCLGdCQUFNQyxPQUFPLEtBQUtaLE1BQUwsQ0FBWWEsR0FBWixDQUFnQkgsTUFBaEIsRUFBd0JDLE1BQXhCLENBQWI7QUFDQSxnQkFBTW5CLEtBQUtrQixTQUFTLEtBQUtULFFBQXpCO0FBQ0EsZ0JBQU1SLEtBQUtELEtBQUssS0FBS1MsUUFBckI7QUFDQSxnQkFBTVosS0FBS3NCLFNBQVMsS0FBS1YsUUFBekI7QUFDQSxnQkFBTVgsS0FBS0QsS0FBSyxLQUFLWSxRQUFyQjtBQUNBLGdCQUFJVyxJQUFKLEVBQVU7QUFDTix1QkFBTztBQUNIQSw4QkFERztBQUVIcEIsMEJBRkc7QUFHSEMsMEJBSEc7QUFJSEosMEJBSkc7QUFLSEM7QUFMRyxpQkFBUDtBQU9IO0FBQ0o7Ozt5Q0FFZ0J3QixJLEVBQU1DLEksRUFBTTtBQUN6QixtQkFBTyxLQUFLQyxVQUFMLENBQ0gsS0FBS1AsT0FBTCxDQUFhSyxJQUFiLENBREcsRUFFSCxLQUFLTCxPQUFMLENBQWFNLElBQWIsQ0FGRyxDQUFQO0FBSUg7OztzQ0FFYXZCLEUsRUFBR0MsRSxFQUFHSixFLEVBQUdDLEUsRUFBSTtBQUFBOztBQUN2QixnQkFBSTJCLFVBQVUsRUFBZDtBQUNBLGlCQUFLQyxZQUFMLENBQWtCMUIsRUFBbEIsRUFBcUJDLEVBQXJCLEVBQXlCckYsT0FBekIsQ0FBaUMsa0JBQVU7QUFDdkMsc0JBQUs4RyxZQUFMLENBQWtCN0IsRUFBbEIsRUFBcUJDLEVBQXJCLEVBQXlCbEYsT0FBekIsQ0FBaUMsa0JBQVU7QUFDdkMsd0JBQUlvQixRQUFRLE1BQUt3RixVQUFMLENBQWdCTixNQUFoQixFQUF3QkMsTUFBeEIsQ0FBWjtBQUNBLHdCQUFJbkYsS0FBSixFQUFXO0FBQ1B5RixnQ0FBUTFHLElBQVIsQ0FBYWlCLEtBQWI7QUFDSDtBQUNKLGlCQUxEO0FBTUgsYUFQRDs7QUFTQSxtQkFBT3lGLE9BQVA7QUFDSDs7Ozs7a0JBMURnQmxCLFk7Ozs7Ozs7QUNBckI7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUEsc0NBQXNDLHVDQUF1QyxnQkFBZ0I7O0FBRTdGO0FBQ0E7QUFDQSw2Q0FBNkMsZ0JBQWdCO0FBQzdEO0FBQ0E7O0FBRUE7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBLEU7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztJQ3BCcUJvQixXO0FBQ2pCLHlCQUFZbEYsS0FBWixFQUFtQm1GLEtBQW5CLEVBQTBCQyxNQUExQixFQUFrQztBQUFBOztBQUM5QixhQUFLcEYsS0FBTCxHQUFhQSxLQUFiO0FBQ0EsYUFBS21GLEtBQUwsR0FBYUEsS0FBYjtBQUNBLGFBQUtDLE1BQUwsR0FBY0EsTUFBZDtBQUNBLGFBQUtyRSxLQUFMLEdBQWEsbUJBQWI7QUFDQSxhQUFLUSxVQUFMLEdBQWtCLG1CQUFsQjtBQUNIOzs7O21DQUVVdkQsSSxFQUFNd0QsUyxFQUFXO0FBQ3hCLGlCQUFLRCxVQUFMLENBQWdCZ0IsR0FBaEIsQ0FBb0J2RSxJQUFwQixFQUEwQndELFNBQTFCO0FBQ0g7OzsrQkFFTXhELEksRUFBTWdFLEMsRUFBR0UsQyxFQUFHaUQsSyxFQUFPQyxNLEVBQVE7QUFBQTs7QUFDOUI7QUFDQTtBQUNBLGdCQUFNQyxVQUFVLENBQUMsS0FBRCxFQUFRLElBQVIsRUFBY0MsR0FBZCxDQUFrQixnQkFBUTtBQUN0QyxvQkFBTUMsU0FBU0MsU0FBU0MsYUFBVCxDQUF1QixRQUF2QixDQUFmO0FBQ0FGLHVCQUFPSixLQUFQLEdBQWVBLEtBQWY7QUFDQUksdUJBQU9ILE1BQVAsR0FBZ0JBLE1BQWhCOztBQUVBLG9CQUFNTSxVQUFVSCxPQUFPSSxVQUFQLENBQWtCLElBQWxCLENBQWhCOztBQUVBLG9CQUFJQyxJQUFKLEVBQVU7QUFDTjtBQUNBRiw0QkFBUUcsS0FBUixDQUFjLENBQUMsQ0FBZixFQUFrQixDQUFsQjtBQUNBSCw0QkFBUUksU0FBUixDQUFrQixDQUFDWCxLQUFuQixFQUEwQixDQUExQjtBQUNIOztBQUVETyx3QkFBUUssU0FBUixDQUNRLE1BQUsvRixLQURiLEVBRVFnQyxDQUZSLEVBR1FFLENBSFIsRUFJUWlELEtBSlIsRUFLUUMsTUFMUixFQU1RLENBTlIsRUFPUSxDQVBSLEVBUVFELEtBUlIsRUFTUUMsTUFUUjs7QUFXQSx1QkFBT0csTUFBUDtBQUNILGFBekJlLENBQWhCOztBQTJCQSxpQkFBS3hFLEtBQUwsQ0FBV3dCLEdBQVgsQ0FBZXZFLElBQWYsRUFBcUJxSCxPQUFyQjtBQUNIOzs7bUNBRVVySCxJLEVBQU1nRSxDLEVBQUdFLEMsRUFBRztBQUNuQixpQkFBS2QsTUFBTCxDQUFZcEQsSUFBWixFQUFrQmdFLElBQUksS0FBS21ELEtBQTNCLEVBQWtDakQsSUFBSSxLQUFLa0QsTUFBM0MsRUFBbUQsS0FBS0QsS0FBeEQsRUFBK0QsS0FBS0MsTUFBcEU7QUFDSDs7OzZCQUVJcEgsSSxFQUFNMEgsTyxFQUFTMUQsQyxFQUFHRSxDLEVBQWlCO0FBQUEsZ0JBQWQwRCxJQUFjLHVFQUFQLEtBQU87O0FBQ3BDLGdCQUFNTCxTQUFTLEtBQUt4RSxLQUFMLENBQVc2RCxHQUFYLENBQWU1RyxJQUFmLEVBQXFCNEgsT0FBTyxDQUFQLEdBQVcsQ0FBaEMsQ0FBZjtBQUNBRixvQkFBUUssU0FBUixDQUFrQlIsTUFBbEIsRUFBMEJ2RCxDQUExQixFQUE2QkUsQ0FBN0I7QUFDSDs7O2lDQUVRbEUsSSxFQUFNMEgsTyxFQUFTMUQsQyxFQUFHRSxDLEVBQUc7QUFDMUIsaUJBQUs4RCxJQUFMLENBQVVoSSxJQUFWLEVBQWdCMEgsT0FBaEIsRUFBeUIxRCxJQUFFLEtBQUttRCxLQUFoQyxFQUF1Q2pELElBQUUsS0FBS2tELE1BQTlDO0FBQ0g7OztpQ0FFUXBILEksRUFBTTBILE8sRUFBUzFELEMsRUFBR0UsQyxFQUFHK0QsUSxFQUFVO0FBQ3BDLGdCQUFNQyxPQUFPLEtBQUszRSxVQUFMLENBQWdCcUQsR0FBaEIsQ0FBb0I1RyxJQUFwQixDQUFiO0FBQ0EsaUJBQUttSSxRQUFMLENBQWNELEtBQUtELFFBQUwsQ0FBZCxFQUE4QlAsT0FBOUIsRUFBdUMxRCxDQUF2QyxFQUEwQ0UsQ0FBMUM7QUFDSDs7Ozs7a0JBOURnQmdELFc7Ozs7OztBQ0FyQixrQkFBa0IseUQ7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ0FsQjs7OztJQUVxQmtCLFk7OztBQUNqQiw0QkFBYztBQUFBOztBQUFBLHNKQUNKLGNBREk7O0FBRVYsY0FBS0MsTUFBTCxHQUFjLElBQWQ7QUFDQSxjQUFLQyxLQUFMLEdBQWMsQ0FBQyxFQUFmO0FBSFU7QUFJYjs7OztpQ0FFUUMsSyxFQUFPckQsSyxFQUFPO0FBQ25CLGdCQUFJQSxVQUFVLGNBQU12RixJQUFoQixJQUF3QnVGLFVBQVUsY0FBTXRGLEtBQTVDLEVBQW1EO0FBQy9DLHFCQUFLMEksS0FBTCxHQUFhLENBQUMsS0FBS0EsS0FBbkI7QUFDSDtBQUNKOzs7K0JBRU16RCxNLEVBQVFwRCxTLEVBQVc7QUFDdEJvRCxtQkFBTzdELFFBQVAsSUFBbUJTLFNBQW5CO0FBQ0EsZ0JBQUksS0FBSzRHLE1BQVQsRUFBaUI7QUFDYnhELHVCQUFPakUsR0FBUCxDQUFXb0QsQ0FBWCxHQUFlLEtBQUtzRSxLQUFwQjtBQUNIO0FBQ0o7Ozs7O2tCQWxCZ0JGLFk7Ozs7Ozs7Ozs7Ozs7O0FDRnJCO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsZ0JBQWdCO0FBQ2hCO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQLEtBQUs7QUFDTDtBQUNBO0FBQ0EsT0FBTztBQUNQLEtBQUs7QUFDTDtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSx3Q0FBd0MsbUJBQW1CO0FBQzNEO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLGtDQUFrQyxvQkFBb0I7QUFDdEQ7QUFDQTs7QUFFQTtBQUNBO0FBQ0Esd0NBQXdDLDRCQUE0QjtBQUNwRTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7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QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFlBQVk7QUFDWjs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsV0FBVztBQUNYO0FBQ0EsV0FBVztBQUNYOztBQUVBO0FBQ0E7QUFDQSx3Q0FBd0MsV0FBVztBQUNuRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSwyQkFBMkI7QUFDM0I7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQSxT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c0JYLFFBQXRCO0FBQ0g7OztpQ0FFUTNNLE0sRUFBUTtBQUFBOztBQUNiLGFBQUMsU0FBRCxFQUFZLE9BQVosRUFBcUJoSixPQUFyQixDQUE2QixxQkFBYTtBQUN0Q2dKLHVCQUFPakgsZ0JBQVAsQ0FBd0IyVSxTQUF4QixFQUFtQyxpQkFBUztBQUN4QywwQkFBS0MsV0FBTCxDQUFpQkgsS0FBakI7QUFDSCxpQkFGRDtBQUdILGFBSkQ7QUFLSDs7Ozs7a0JBeENnQkwsYSIsImZpbGUiOiJidW5kbGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyIgXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHt9O1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSkge1xuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuIFx0XHR9XG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRpOiBtb2R1bGVJZCxcbiBcdFx0XHRsOiBmYWxzZSxcbiBcdFx0XHRleHBvcnRzOiB7fVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9uIGZvciBoYXJtb255IGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uZCA9IGZ1bmN0aW9uKGV4cG9ydHMsIG5hbWUsIGdldHRlcikge1xuIFx0XHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIG5hbWUpKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIG5hbWUsIHtcbiBcdFx0XHRcdGNvbmZpZ3VyYWJsZTogZmFsc2UsXG4gXHRcdFx0XHRlbnVtZXJhYmxlOiB0cnVlLFxuIFx0XHRcdFx0Z2V0OiBnZXR0ZXJcbiBcdFx0XHR9KTtcbiBcdFx0fVxuIFx0fTtcblxuIFx0Ly8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubiA9IGZ1bmN0aW9uKG1vZHVsZSkge1xuIFx0XHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cbiBcdFx0XHRmdW5jdGlvbiBnZXREZWZhdWx0KCkgeyByZXR1cm4gbW9kdWxlWydkZWZhdWx0J107IH0gOlxuIFx0XHRcdGZ1bmN0aW9uIGdldE1vZHVsZUV4cG9ydHMoKSB7IHJldHVybiBtb2R1bGU7IH07XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsICdhJywgZ2V0dGVyKTtcbiBcdFx0cmV0dXJuIGdldHRlcjtcbiBcdH07XG5cbiBcdC8vIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbFxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5vID0gZnVuY3Rpb24ob2JqZWN0LCBwcm9wZXJ0eSkgeyByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iamVjdCwgcHJvcGVydHkpOyB9O1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCIvXCI7XG5cbiBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oX193ZWJwYWNrX3JlcXVpcmVfXy5zID0gOTIpO1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIHdlYnBhY2svYm9vdHN0cmFwIGQzZGQxYWYyMmY0ODU4ODEwZDFiIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbmV4cG9ydHMuX19lc01vZHVsZSA9IHRydWU7XG5cbmV4cG9ydHMuZGVmYXVsdCA9IGZ1bmN0aW9uIChpbnN0YW5jZSwgQ29uc3RydWN0b3IpIHtcbiAgaWYgKCEoaW5zdGFuY2UgaW5zdGFuY2VvZiBDb25zdHJ1Y3RvcikpIHtcbiAgICB0aHJvdyBuZXcgVHlwZUVycm9yKFwiQ2Fubm90IGNhbGwgYSBjbGFzcyBhcyBhIGZ1bmN0aW9uXCIpO1xuICB9XG59O1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vbm9kZV9tb2R1bGVzL19iYWJlbC1ydW50aW1lQDYuMjYuMEBiYWJlbC1ydW50aW1lL2hlbHBlcnMvY2xhc3NDYWxsQ2hlY2suanNcbi8vIG1vZHVsZSBpZCA9IDBcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbmV4cG9ydHMuX19lc01vZHVsZSA9IHRydWU7XG5cbnZhciBfZGVmaW5lUHJvcGVydHkgPSByZXF1aXJlKFwiLi4vY29yZS1qcy9vYmplY3QvZGVmaW5lLXByb3BlcnR5XCIpO1xuXG52YXIgX2RlZmluZVByb3BlcnR5MiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX2RlZmluZVByb3BlcnR5KTtcblxuZnVuY3Rpb24gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChvYmopIHsgcmV0dXJuIG9iaiAmJiBvYmouX19lc01vZHVsZSA/IG9iaiA6IHsgZGVmYXVsdDogb2JqIH07IH1cblxuZXhwb3J0cy5kZWZhdWx0ID0gZnVuY3Rpb24gKCkge1xuICBmdW5jdGlvbiBkZWZpbmVQcm9wZXJ0aWVzKHRhcmdldCwgcHJvcHMpIHtcbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IHByb3BzLmxlbmd0aDsgaSsrKSB7XG4gICAgICB2YXIgZGVzY3JpcHRvciA9IHByb3BzW2ldO1xuICAgICAgZGVzY3JpcHRvci5lbnVtZXJhYmxlID0gZGVzY3JpcHRvci5lbnVtZXJhYmxlIHx8IGZhbHNlO1xuICAgICAgZGVzY3JpcHRvci5jb25maWd1cmFibGUgPSB0cnVlO1xuICAgICAgaWYgKFwidmFsdWVcIiBpbiBkZXNjcmlwdG9yKSBkZXNjcmlwdG9yLndyaXRhYmxlID0gdHJ1ZTtcbiAgICAgICgwLCBfZGVmaW5lUHJvcGVydHkyLmRlZmF1bHQpKHRhcmdldCwgZGVzY3JpcHRvci5rZXksIGRlc2NyaXB0b3IpO1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiBmdW5jdGlvbiAoQ29uc3RydWN0b3IsIHByb3RvUHJvcHMsIHN0YXRpY1Byb3BzKSB7XG4gICAgaWYgKHByb3RvUHJvcHMpIGRlZmluZVByb3BlcnRpZXMoQ29uc3RydWN0b3IucHJvdG90eXBlLCBwcm90b1Byb3BzKTtcbiAgICBpZiAoc3RhdGljUHJvcHMpIGRlZmluZVByb3BlcnRpZXMoQ29uc3RydWN0b3IsIHN0YXRpY1Byb3BzKTtcbiAgICByZXR1cm4gQ29uc3RydWN0b3I7XG4gIH07XG59KCk7XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9ub2RlX21vZHVsZXMvX2JhYmVsLXJ1bnRpbWVANi4yNi4wQGJhYmVsLXJ1bnRpbWUvaGVscGVycy9jcmVhdGVDbGFzcy5qc1xuLy8gbW9kdWxlIGlkID0gMVxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJ2YXIgY29yZSA9IG1vZHVsZS5leHBvcnRzID0geyB2ZXJzaW9uOiAnMi41LjMnIH07XG5pZiAodHlwZW9mIF9fZSA9PSAnbnVtYmVyJykgX19lID0gY29yZTsgLy8gZXNsaW50LWRpc2FibGUtbGluZSBuby11bmRlZlxuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9ub2RlX21vZHVsZXMvX2NvcmUtanNAMi41LjNAY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX2NvcmUuanNcbi8vIG1vZHVsZSBpZCA9IDJcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwidmFyIGdsb2JhbCA9IHJlcXVpcmUoJy4vX2dsb2JhbCcpO1xudmFyIGNvcmUgPSByZXF1aXJlKCcuL19jb3JlJyk7XG52YXIgY3R4ID0gcmVxdWlyZSgnLi9fY3R4Jyk7XG52YXIgaGlkZSA9IHJlcXVpcmUoJy4vX2hpZGUnKTtcbnZhciBQUk9UT1RZUEUgPSAncHJvdG90eXBlJztcblxudmFyICRleHBvcnQgPSBmdW5jdGlvbiAodHlwZSwgbmFtZSwgc291cmNlKSB7XG4gIHZhciBJU19GT1JDRUQgPSB0eXBlICYgJGV4cG9ydC5GO1xuICB2YXIgSVNfR0xPQkFMID0gdHlwZSAmICRleHBvcnQuRztcbiAgdmFyIElTX1NUQVRJQyA9IHR5cGUgJiAkZXhwb3J0LlM7XG4gIHZhciBJU19QUk9UTyA9IHR5cGUgJiAkZXhwb3J0LlA7XG4gIHZhciBJU19CSU5EID0gdHlwZSAmICRleHBvcnQuQjtcbiAgdmFyIElTX1dSQVAgPSB0eXBlICYgJGV4cG9ydC5XO1xuICB2YXIgZXhwb3J0cyA9IElTX0dMT0JBTCA/IGNvcmUgOiBjb3JlW25hbWVdIHx8IChjb3JlW25hbWVdID0ge30pO1xuICB2YXIgZXhwUHJvdG8gPSBleHBvcnRzW1BST1RPVFlQRV07XG4gIHZhciB0YXJnZXQgPSBJU19HTE9CQUwgPyBnbG9iYWwgOiBJU19TVEFUSUMgPyBnbG9iYWxbbmFtZV0gOiAoZ2xvYmFsW25hbWVdIHx8IHt9KVtQUk9UT1RZUEVdO1xuICB2YXIga2V5LCBvd24sIG91dDtcbiAgaWYgKElTX0dMT0JBTCkgc291cmNlID0gbmFtZTtcbiAgZm9yIChrZXkgaW4gc291cmNlKSB7XG4gICAgLy8gY29udGFpbnMgaW4gbmF0aXZlXG4gICAgb3duID0gIUlTX0ZPUkNFRCAmJiB0YXJnZXQgJiYgdGFyZ2V0W2tleV0gIT09IHVuZGVmaW5lZDtcbiAgICBpZiAob3duICYmIGtleSBpbiBleHBvcnRzKSBjb250aW51ZTtcbiAgICAvLyBleHBvcnQgbmF0aXZlIG9yIHBhc3NlZFxuICAgIG91dCA9IG93biA/IHRhcmdldFtrZXldIDogc291cmNlW2tleV07XG4gICAgLy8gcHJldmVudCBnbG9iYWwgcG9sbHV0aW9uIGZvciBuYW1lc3BhY2VzXG4gICAgZXhwb3J0c1trZXldID0gSVNfR0xPQkFMICYmIHR5cGVvZiB0YXJnZXRba2V5XSAhPSAnZnVuY3Rpb24nID8gc291cmNlW2tleV1cbiAgICAvLyBiaW5kIHRpbWVycyB0byBnbG9iYWwgZm9yIGNhbGwgZnJvbSBleHBvcnQgY29udGV4dFxuICAgIDogSVNfQklORCAmJiBvd24gPyBjdHgob3V0LCBnbG9iYWwpXG4gICAgLy8gd3JhcCBnbG9iYWwgY29uc3RydWN0b3JzIGZvciBwcmV2ZW50IGNoYW5nZSB0aGVtIGluIGxpYnJhcnlcbiAgICA6IElTX1dSQVAgJiYgdGFyZ2V0W2tleV0gPT0gb3V0ID8gKGZ1bmN0aW9uIChDKSB7XG4gICAgICB2YXIgRiA9IGZ1bmN0aW9uIChhLCBiLCBjKSB7XG4gICAgICAgIGlmICh0aGlzIGluc3RhbmNlb2YgQykge1xuICAgICAgICAgIHN3aXRjaCAoYXJndW1lbnRzLmxlbmd0aCkge1xuICAgICAgICAgICAgY2FzZSAwOiByZXR1cm4gbmV3IEMoKTtcbiAgICAgICAgICAgIGNhc2UgMTogcmV0dXJuIG5ldyBDKGEpO1xuICAgICAgICAgICAgY2FzZSAyOiByZXR1cm4gbmV3IEMoYSwgYik7XG4gICAgICAgICAgfSByZXR1cm4gbmV3IEMoYSwgYiwgYyk7XG4gICAgICAgIH0gcmV0dXJuIEMuYXBwbHkodGhpcywgYXJndW1lbnRzKTtcbiAgICAgIH07XG4gICAgICBGW1BST1RPVFlQRV0gPSBDW1BST1RPVFlQRV07XG4gICAgICByZXR1cm4gRjtcbiAgICAvLyBtYWtlIHN0YXRpYyB2ZXJzaW9ucyBmb3IgcHJvdG90eXBlIG1ldGhvZHNcbiAgICB9KShvdXQpIDogSVNfUFJPVE8gJiYgdHlwZW9mIG91dCA9PSAnZnVuY3Rpb24nID8gY3R4KEZ1bmN0aW9uLmNhbGwsIG91dCkgOiBvdXQ7XG4gICAgLy8gZXhwb3J0IHByb3RvIG1ldGhvZHMgdG8gY29yZS4lQ09OU1RSVUNUT1IlLm1ldGhvZHMuJU5BTUUlXG4gICAgaWYgKElTX1BST1RPKSB7XG4gICAgICAoZXhwb3J0cy52aXJ0dWFsIHx8IChleHBvcnRzLnZpcnR1YWwgPSB7fSkpW2tleV0gPSBvdXQ7XG4gICAgICAvLyBleHBvcnQgcHJvdG8gbWV0aG9kcyB0byBjb3JlLiVDT05TVFJVQ1RPUiUucHJvdG90eXBlLiVOQU1FJVxuICAgICAgaWYgKHR5cGUgJiAkZXhwb3J0LlIgJiYgZXhwUHJvdG8gJiYgIWV4cFByb3RvW2tleV0pIGhpZGUoZXhwUHJvdG8sIGtleSwgb3V0KTtcbiAgICB9XG4gIH1cbn07XG4vLyB0eXBlIGJpdG1hcFxuJGV4cG9ydC5GID0gMTsgICAvLyBmb3JjZWRcbiRleHBvcnQuRyA9IDI7ICAgLy8gZ2xvYmFsXG4kZXhwb3J0LlMgPSA0OyAgIC8vIHN0YXRpY1xuJGV4cG9ydC5QID0gODsgICAvLyBwcm90b1xuJGV4cG9ydC5CID0gMTY7ICAvLyBiaW5kXG4kZXhwb3J0LlcgPSAzMjsgIC8vIHdyYXBcbiRleHBvcnQuVSA9IDY0OyAgLy8gc2FmZVxuJGV4cG9ydC5SID0gMTI4OyAvLyByZWFsIHByb3RvIG1ldGhvZCBmb3IgYGxpYnJhcnlgXG5tb2R1bGUuZXhwb3J0cyA9ICRleHBvcnQ7XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL25vZGVfbW9kdWxlcy9fY29yZS1qc0AyLjUuM0Bjb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9fZXhwb3J0LmpzXG4vLyBtb2R1bGUgaWQgPSAzXG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsInZhciBzdG9yZSA9IHJlcXVpcmUoJy4vX3NoYXJlZCcpKCd3a3MnKTtcbnZhciB1aWQgPSByZXF1aXJlKCcuL191aWQnKTtcbnZhciBTeW1ib2wgPSByZXF1aXJlKCcuL19nbG9iYWwnKS5TeW1ib2w7XG52YXIgVVNFX1NZTUJPTCA9IHR5cGVvZiBTeW1ib2wgPT0gJ2Z1bmN0aW9uJztcblxudmFyICRleHBvcnRzID0gbW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAobmFtZSkge1xuICByZXR1cm4gc3RvcmVbbmFtZV0gfHwgKHN0b3JlW25hbWVdID1cbiAgICBVU0VfU1lNQk9MICYmIFN5bWJvbFtuYW1lXSB8fCAoVVNFX1NZTUJPTCA/IFN5bWJvbCA6IHVpZCkoJ1N5bWJvbC4nICsgbmFtZSkpO1xufTtcblxuJGV4cG9ydHMuc3RvcmUgPSBzdG9yZTtcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vbm9kZV9tb2R1bGVzL19jb3JlLWpzQDIuNS4zQGNvcmUtanMvbGlicmFyeS9tb2R1bGVzL193a3MuanNcbi8vIG1vZHVsZSBpZCA9IDRcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiLy8gaHR0cHM6Ly9naXRodWIuY29tL3psb2lyb2NrL2NvcmUtanMvaXNzdWVzLzg2I2lzc3VlY29tbWVudC0xMTU3NTkwMjhcbnZhciBnbG9iYWwgPSBtb2R1bGUuZXhwb3J0cyA9IHR5cGVvZiB3aW5kb3cgIT0gJ3VuZGVmaW5lZCcgJiYgd2luZG93Lk1hdGggPT0gTWF0aFxuICA/IHdpbmRvdyA6IHR5cGVvZiBzZWxmICE9ICd1bmRlZmluZWQnICYmIHNlbGYuTWF0aCA9PSBNYXRoID8gc2VsZlxuICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tbmV3LWZ1bmNcbiAgOiBGdW5jdGlvbigncmV0dXJuIHRoaXMnKSgpO1xuaWYgKHR5cGVvZiBfX2cgPT0gJ251bWJlcicpIF9fZyA9IGdsb2JhbDsgLy8gZXNsaW50LWRpc2FibGUtbGluZSBuby11bmRlZlxuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9ub2RlX21vZHVsZXMvX2NvcmUtanNAMi41LjNAY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX2dsb2JhbC5qc1xuLy8gbW9kdWxlIGlkID0gNVxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJpbXBvcnQge1ZlYzJ9IGZyb20gJy4vbWF0aC5qcydcclxuaW1wb3J0IEJvdW5kaW5nQm94IGZyb20gJy4vQm91bmRpbmdCb3guanMnXHJcblxyXG5leHBvcnQgY29uc3QgU2lkZXMgPSB7XHJcbiAgICBMRUZUOiBTeW1ib2woJ2xlZnQnKSxcclxuICAgIFJJR0hUOiBTeW1ib2woJ3JpZ2h0JyksXHJcbiAgICBCT1RUT006IFN5bWJvbCgnYm90dG9tJyksXHJcbiAgICBUT1A6IFN5bWJvbCgndG9wJylcclxufTtcclxuXHJcbmV4cG9ydCBjbGFzcyBUcmFpdCB7XHJcbiAgICBjb25zdHJ1Y3RvcihuYW1lKSB7XHJcbiAgICAgICAgdGhpcy5OQU1FID0gbmFtZTtcclxuXHJcbiAgICAgICAgdGhpcy50YXNrcyA9IFtdO1xyXG4gICAgfVxyXG5cclxuICAgIGZpbmFsaXplKCkge1xyXG4gICAgICAgIHRoaXMudGFza3MuZm9yRWFjaCh0YXNrID0+IHRhc2soKSk7XHJcbiAgICAgICAgdGhpcy50YXNrcy5sZW5ndGggPSAwO1xyXG4gICAgfVxyXG5cclxuICAgIHF1ZXVlKHRhc2spIHtcclxuICAgICAgICB0aGlzLnRhc2tzLnB1c2godGFzayk7XHJcbiAgICB9XHJcblxyXG4gICAgY29sbGlkZXModXMsIHRoZW0pIHtcclxuICAgICAgICAvLyBjb25zb2xlLmxvZygnQ29sbGlkZXMgd2l0aCAnLCB0aGVtKTtcclxuICAgIH1cclxuXHJcbiAgICBvYnN0cnVjdCgpIHtcclxuXHJcbiAgICB9XHJcblxyXG4gICAgdXBkYXRlKCkge1xyXG4gICAgICAgIC8vIGNvbnNvbGUud2FybignVW5oYW5kbGVkIHVwZGF0ZSBjYWxsIGluIFRyYWl0JylcclxuICAgIH1cclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgRW50aXR5IHtcclxuICAgIGNvbnN0cnVjdG9yKCkge1xyXG4gICAgICAgIHRoaXMuY2FuQ29sbGlkZXMgPSB0cnVlO1xyXG5cclxuICAgICAgICB0aGlzLnBvcyA9IG5ldyBWZWMyKDAsMCk7XHJcbiAgICAgICAgdGhpcy52ZWwgPSBuZXcgVmVjMigwLDApO1xyXG4gICAgICAgIHRoaXMuc2l6ZSA9IG5ldyBWZWMyKDAsMCk7XHJcbiAgICAgICAgdGhpcy5vZmZzZXQgPSBuZXcgVmVjMigwLDApO1xyXG4gICAgICAgIHRoaXMuYm91bmRzID0gbmV3IEJvdW5kaW5nQm94KHRoaXMucG9zLCB0aGlzLnNpemUsIHRoaXMub2Zmc2V0KTtcclxuICAgICAgICB0aGlzLmxpZmVUaW1lID0gMDtcclxuXHJcbiAgICAgICAgdGhpcy50cmFpdHMgPSBbXTtcclxuICAgIH1cclxuXHJcbiAgICBhZGRUcmFpdCh0cmFpdCkge1xyXG4gICAgICAgIHRoaXMudHJhaXRzLnB1c2godHJhaXQpO1xyXG4gICAgICAgIHRoaXNbdHJhaXQuTkFNRV0gPSB0cmFpdDtcclxuICAgIH1cclxuXHJcbiAgICBmaW5hbGl6ZSgpIHtcclxuICAgICAgICB0aGlzLnRyYWl0cy5mb3JFYWNoKHRyYWl0ID0+IHtcclxuICAgICAgICAgICAgdHJhaXQuZmluYWxpemUoKTtcclxuICAgICAgICB9KVxyXG4gICAgfVxyXG5cclxuICAgIGNvbGxpZGVzKGNhbmRpZGF0ZSkge1xyXG4gICAgICAgIC8vIGNvbnNvbGUubG9nKCdUb3VjaGVkJywgY2FuZGlkYXRlKTtcclxuICAgICAgICB0aGlzLnRyYWl0cy5mb3JFYWNoKHRyYWl0ID0+IHtcclxuICAgICAgICAgICAgdHJhaXQuY29sbGlkZXModGhpcywgY2FuZGlkYXRlKTtcclxuICAgICAgICB9KVxyXG4gICAgfVxyXG5cclxuICAgIG9ic3RydWN0KHNpZGUsIG1hdGNoKSB7XHJcbiAgICAgICAgdGhpcy50cmFpdHMuZm9yRWFjaCh0cmFpdCA9PiB7XHJcbiAgICAgICAgICAgIHRyYWl0Lm9ic3RydWN0KHRoaXMsIHNpZGUsIG1hdGNoKTtcclxuICAgICAgICB9KVxyXG4gICAgfVxyXG5cclxuICAgIGRyYXcoKSB7XHJcblxyXG4gICAgfVxyXG5cclxuICAgIHVwZGF0ZShkZWx0YVRpbWUsIGxldmVsKSB7XHJcbiAgICAgICAgdGhpcy50cmFpdHMuZm9yRWFjaCh0cmFpdCA9PiB7XHJcbiAgICAgICAgICAgIHRyYWl0LnVwZGF0ZSh0aGlzLCBkZWx0YVRpbWUsIGxldmVsKTtcclxuICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgdGhpcy5saWZlVGltZSArPWRlbHRhVGltZTtcclxuICAgIH1cclxufVxyXG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9wdWJsaWMvanMvRW50aXR5LmpzIiwidmFyIGFuT2JqZWN0ID0gcmVxdWlyZSgnLi9fYW4tb2JqZWN0Jyk7XG52YXIgSUU4X0RPTV9ERUZJTkUgPSByZXF1aXJlKCcuL19pZTgtZG9tLWRlZmluZScpO1xudmFyIHRvUHJpbWl0aXZlID0gcmVxdWlyZSgnLi9fdG8tcHJpbWl0aXZlJyk7XG52YXIgZFAgPSBPYmplY3QuZGVmaW5lUHJvcGVydHk7XG5cbmV4cG9ydHMuZiA9IHJlcXVpcmUoJy4vX2Rlc2NyaXB0b3JzJykgPyBPYmplY3QuZGVmaW5lUHJvcGVydHkgOiBmdW5jdGlvbiBkZWZpbmVQcm9wZXJ0eShPLCBQLCBBdHRyaWJ1dGVzKSB7XG4gIGFuT2JqZWN0KE8pO1xuICBQID0gdG9QcmltaXRpdmUoUCwgdHJ1ZSk7XG4gIGFuT2JqZWN0KEF0dHJpYnV0ZXMpO1xuICBpZiAoSUU4X0RPTV9ERUZJTkUpIHRyeSB7XG4gICAgcmV0dXJuIGRQKE8sIFAsIEF0dHJpYnV0ZXMpO1xuICB9IGNhdGNoIChlKSB7IC8qIGVtcHR5ICovIH1cbiAgaWYgKCdnZXQnIGluIEF0dHJpYnV0ZXMgfHwgJ3NldCcgaW4gQXR0cmlidXRlcykgdGhyb3cgVHlwZUVycm9yKCdBY2Nlc3NvcnMgbm90IHN1cHBvcnRlZCEnKTtcbiAgaWYgKCd2YWx1ZScgaW4gQXR0cmlidXRlcykgT1tQXSA9IEF0dHJpYnV0ZXMudmFsdWU7XG4gIHJldHVybiBPO1xufTtcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vbm9kZV9tb2R1bGVzL19jb3JlLWpzQDIuNS4zQGNvcmUtanMvbGlicmFyeS9tb2R1bGVzL19vYmplY3QtZHAuanNcbi8vIG1vZHVsZSBpZCA9IDdcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwibW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoaXQpIHtcbiAgcmV0dXJuIHR5cGVvZiBpdCA9PT0gJ29iamVjdCcgPyBpdCAhPT0gbnVsbCA6IHR5cGVvZiBpdCA9PT0gJ2Z1bmN0aW9uJztcbn07XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL25vZGVfbW9kdWxlcy9fY29yZS1qc0AyLjUuM0Bjb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9faXMtb2JqZWN0LmpzXG4vLyBtb2R1bGUgaWQgPSA4XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsInZhciBpc09iamVjdCA9IHJlcXVpcmUoJy4vX2lzLW9iamVjdCcpO1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoaXQpIHtcbiAgaWYgKCFpc09iamVjdChpdCkpIHRocm93IFR5cGVFcnJvcihpdCArICcgaXMgbm90IGFuIG9iamVjdCEnKTtcbiAgcmV0dXJuIGl0O1xufTtcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vbm9kZV9tb2R1bGVzL19jb3JlLWpzQDIuNS4zQGNvcmUtanMvbGlicmFyeS9tb2R1bGVzL19hbi1vYmplY3QuanNcbi8vIG1vZHVsZSBpZCA9IDlcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiLy8gVGhhbmsncyBJRTggZm9yIGhpcyBmdW5ueSBkZWZpbmVQcm9wZXJ0eVxubW9kdWxlLmV4cG9ydHMgPSAhcmVxdWlyZSgnLi9fZmFpbHMnKShmdW5jdGlvbiAoKSB7XG4gIHJldHVybiBPYmplY3QuZGVmaW5lUHJvcGVydHkoe30sICdhJywgeyBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIDc7IH0gfSkuYSAhPSA3O1xufSk7XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL25vZGVfbW9kdWxlcy9fY29yZS1qc0AyLjUuM0Bjb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9fZGVzY3JpcHRvcnMuanNcbi8vIG1vZHVsZSBpZCA9IDEwXG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIm1vZHVsZS5leHBvcnRzID0geyBcImRlZmF1bHRcIjogcmVxdWlyZShcImNvcmUtanMvbGlicmFyeS9mbi9vYmplY3QvZ2V0LXByb3RvdHlwZS1vZlwiKSwgX19lc01vZHVsZTogdHJ1ZSB9O1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vbm9kZV9tb2R1bGVzL19iYWJlbC1ydW50aW1lQDYuMjYuMEBiYWJlbC1ydW50aW1lL2NvcmUtanMvb2JqZWN0L2dldC1wcm90b3R5cGUtb2YuanNcbi8vIG1vZHVsZSBpZCA9IDExXG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIlwidXNlIHN0cmljdFwiO1xuXG5leHBvcnRzLl9fZXNNb2R1bGUgPSB0cnVlO1xuXG52YXIgX3R5cGVvZjIgPSByZXF1aXJlKFwiLi4vaGVscGVycy90eXBlb2ZcIik7XG5cbnZhciBfdHlwZW9mMyA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX3R5cGVvZjIpO1xuXG5mdW5jdGlvbiBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KG9iaikgeyByZXR1cm4gb2JqICYmIG9iai5fX2VzTW9kdWxlID8gb2JqIDogeyBkZWZhdWx0OiBvYmogfTsgfVxuXG5leHBvcnRzLmRlZmF1bHQgPSBmdW5jdGlvbiAoc2VsZiwgY2FsbCkge1xuICBpZiAoIXNlbGYpIHtcbiAgICB0aHJvdyBuZXcgUmVmZXJlbmNlRXJyb3IoXCJ0aGlzIGhhc24ndCBiZWVuIGluaXRpYWxpc2VkIC0gc3VwZXIoKSBoYXNuJ3QgYmVlbiBjYWxsZWRcIik7XG4gIH1cblxuICByZXR1cm4gY2FsbCAmJiAoKHR5cGVvZiBjYWxsID09PSBcInVuZGVmaW5lZFwiID8gXCJ1bmRlZmluZWRcIiA6ICgwLCBfdHlwZW9mMy5kZWZhdWx0KShjYWxsKSkgPT09IFwib2JqZWN0XCIgfHwgdHlwZW9mIGNhbGwgPT09IFwiZnVuY3Rpb25cIikgPyBjYWxsIDogc2VsZjtcbn07XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9ub2RlX21vZHVsZXMvX2JhYmVsLXJ1bnRpbWVANi4yNi4wQGJhYmVsLXJ1bnRpbWUvaGVscGVycy9wb3NzaWJsZUNvbnN0cnVjdG9yUmV0dXJuLmpzXG4vLyBtb2R1bGUgaWQgPSAxMlxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJcInVzZSBzdHJpY3RcIjtcblxuZXhwb3J0cy5fX2VzTW9kdWxlID0gdHJ1ZTtcblxudmFyIF9zZXRQcm90b3R5cGVPZiA9IHJlcXVpcmUoXCIuLi9jb3JlLWpzL29iamVjdC9zZXQtcHJvdG90eXBlLW9mXCIpO1xuXG52YXIgX3NldFByb3RvdHlwZU9mMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX3NldFByb3RvdHlwZU9mKTtcblxudmFyIF9jcmVhdGUgPSByZXF1aXJlKFwiLi4vY29yZS1qcy9vYmplY3QvY3JlYXRlXCIpO1xuXG52YXIgX2NyZWF0ZTIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9jcmVhdGUpO1xuXG52YXIgX3R5cGVvZjIgPSByZXF1aXJlKFwiLi4vaGVscGVycy90eXBlb2ZcIik7XG5cbnZhciBfdHlwZW9mMyA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX3R5cGVvZjIpO1xuXG5mdW5jdGlvbiBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KG9iaikgeyByZXR1cm4gb2JqICYmIG9iai5fX2VzTW9kdWxlID8gb2JqIDogeyBkZWZhdWx0OiBvYmogfTsgfVxuXG5leHBvcnRzLmRlZmF1bHQgPSBmdW5jdGlvbiAoc3ViQ2xhc3MsIHN1cGVyQ2xhc3MpIHtcbiAgaWYgKHR5cGVvZiBzdXBlckNsYXNzICE9PSBcImZ1bmN0aW9uXCIgJiYgc3VwZXJDbGFzcyAhPT0gbnVsbCkge1xuICAgIHRocm93IG5ldyBUeXBlRXJyb3IoXCJTdXBlciBleHByZXNzaW9uIG11c3QgZWl0aGVyIGJlIG51bGwgb3IgYSBmdW5jdGlvbiwgbm90IFwiICsgKHR5cGVvZiBzdXBlckNsYXNzID09PSBcInVuZGVmaW5lZFwiID8gXCJ1bmRlZmluZWRcIiA6ICgwLCBfdHlwZW9mMy5kZWZhdWx0KShzdXBlckNsYXNzKSkpO1xuICB9XG5cbiAgc3ViQ2xhc3MucHJvdG90eXBlID0gKDAsIF9jcmVhdGUyLmRlZmF1bHQpKHN1cGVyQ2xhc3MgJiYgc3VwZXJDbGFzcy5wcm90b3R5cGUsIHtcbiAgICBjb25zdHJ1Y3Rvcjoge1xuICAgICAgdmFsdWU6IHN1YkNsYXNzLFxuICAgICAgZW51bWVyYWJsZTogZmFsc2UsXG4gICAgICB3cml0YWJsZTogdHJ1ZSxcbiAgICAgIGNvbmZpZ3VyYWJsZTogdHJ1ZVxuICAgIH1cbiAgfSk7XG4gIGlmIChzdXBlckNsYXNzKSBfc2V0UHJvdG90eXBlT2YyLmRlZmF1bHQgPyAoMCwgX3NldFByb3RvdHlwZU9mMi5kZWZhdWx0KShzdWJDbGFzcywgc3VwZXJDbGFzcykgOiBzdWJDbGFzcy5fX3Byb3RvX18gPSBzdXBlckNsYXNzO1xufTtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL25vZGVfbW9kdWxlcy9fYmFiZWwtcnVudGltZUA2LjI2LjBAYmFiZWwtcnVudGltZS9oZWxwZXJzL2luaGVyaXRzLmpzXG4vLyBtb2R1bGUgaWQgPSAxM1xuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCIvLyBvcHRpb25hbCAvIHNpbXBsZSBjb250ZXh0IGJpbmRpbmdcbnZhciBhRnVuY3Rpb24gPSByZXF1aXJlKCcuL19hLWZ1bmN0aW9uJyk7XG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChmbiwgdGhhdCwgbGVuZ3RoKSB7XG4gIGFGdW5jdGlvbihmbik7XG4gIGlmICh0aGF0ID09PSB1bmRlZmluZWQpIHJldHVybiBmbjtcbiAgc3dpdGNoIChsZW5ndGgpIHtcbiAgICBjYXNlIDE6IHJldHVybiBmdW5jdGlvbiAoYSkge1xuICAgICAgcmV0dXJuIGZuLmNhbGwodGhhdCwgYSk7XG4gICAgfTtcbiAgICBjYXNlIDI6IHJldHVybiBmdW5jdGlvbiAoYSwgYikge1xuICAgICAgcmV0dXJuIGZuLmNhbGwodGhhdCwgYSwgYik7XG4gICAgfTtcbiAgICBjYXNlIDM6IHJldHVybiBmdW5jdGlvbiAoYSwgYiwgYykge1xuICAgICAgcmV0dXJuIGZuLmNhbGwodGhhdCwgYSwgYiwgYyk7XG4gICAgfTtcbiAgfVxuICByZXR1cm4gZnVuY3Rpb24gKC8qIC4uLmFyZ3MgKi8pIHtcbiAgICByZXR1cm4gZm4uYXBwbHkodGhhdCwgYXJndW1lbnRzKTtcbiAgfTtcbn07XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL25vZGVfbW9kdWxlcy9fY29yZS1qc0AyLjUuM0Bjb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9fY3R4LmpzXG4vLyBtb2R1bGUgaWQgPSAxNFxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJ2YXIgZFAgPSByZXF1aXJlKCcuL19vYmplY3QtZHAnKTtcbnZhciBjcmVhdGVEZXNjID0gcmVxdWlyZSgnLi9fcHJvcGVydHktZGVzYycpO1xubW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKCcuL19kZXNjcmlwdG9ycycpID8gZnVuY3Rpb24gKG9iamVjdCwga2V5LCB2YWx1ZSkge1xuICByZXR1cm4gZFAuZihvYmplY3QsIGtleSwgY3JlYXRlRGVzYygxLCB2YWx1ZSkpO1xufSA6IGZ1bmN0aW9uIChvYmplY3QsIGtleSwgdmFsdWUpIHtcbiAgb2JqZWN0W2tleV0gPSB2YWx1ZTtcbiAgcmV0dXJuIG9iamVjdDtcbn07XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL25vZGVfbW9kdWxlcy9fY29yZS1qc0AyLjUuM0Bjb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9faGlkZS5qc1xuLy8gbW9kdWxlIGlkID0gMTVcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiJ3VzZSBzdHJpY3QnO1xudmFyICRhdCA9IHJlcXVpcmUoJy4vX3N0cmluZy1hdCcpKHRydWUpO1xuXG4vLyAyMS4xLjMuMjcgU3RyaW5nLnByb3RvdHlwZVtAQGl0ZXJhdG9yXSgpXG5yZXF1aXJlKCcuL19pdGVyLWRlZmluZScpKFN0cmluZywgJ1N0cmluZycsIGZ1bmN0aW9uIChpdGVyYXRlZCkge1xuICB0aGlzLl90ID0gU3RyaW5nKGl0ZXJhdGVkKTsgLy8gdGFyZ2V0XG4gIHRoaXMuX2kgPSAwOyAgICAgICAgICAgICAgICAvLyBuZXh0IGluZGV4XG4vLyAyMS4xLjUuMi4xICVTdHJpbmdJdGVyYXRvclByb3RvdHlwZSUubmV4dCgpXG59LCBmdW5jdGlvbiAoKSB7XG4gIHZhciBPID0gdGhpcy5fdDtcbiAgdmFyIGluZGV4ID0gdGhpcy5faTtcbiAgdmFyIHBvaW50O1xuICBpZiAoaW5kZXggPj0gTy5sZW5ndGgpIHJldHVybiB7IHZhbHVlOiB1bmRlZmluZWQsIGRvbmU6IHRydWUgfTtcbiAgcG9pbnQgPSAkYXQoTywgaW5kZXgpO1xuICB0aGlzLl9pICs9IHBvaW50Lmxlbmd0aDtcbiAgcmV0dXJuIHsgdmFsdWU6IHBvaW50LCBkb25lOiBmYWxzZSB9O1xufSk7XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL25vZGVfbW9kdWxlcy9fY29yZS1qc0AyLjUuM0Bjb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9lczYuc3RyaW5nLml0ZXJhdG9yLmpzXG4vLyBtb2R1bGUgaWQgPSAxNlxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJ2YXIgaGFzT3duUHJvcGVydHkgPSB7fS5oYXNPd25Qcm9wZXJ0eTtcbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGl0LCBrZXkpIHtcbiAgcmV0dXJuIGhhc093blByb3BlcnR5LmNhbGwoaXQsIGtleSk7XG59O1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9ub2RlX21vZHVsZXMvX2NvcmUtanNAMi41LjNAY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX2hhcy5qc1xuLy8gbW9kdWxlIGlkID0gMTdcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwibW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoZXhlYykge1xuICB0cnkge1xuICAgIHJldHVybiAhIWV4ZWMoKTtcbiAgfSBjYXRjaCAoZSkge1xuICAgIHJldHVybiB0cnVlO1xuICB9XG59O1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9ub2RlX21vZHVsZXMvX2NvcmUtanNAMi41LjNAY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX2ZhaWxzLmpzXG4vLyBtb2R1bGUgaWQgPSAxOFxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJtb2R1bGUuZXhwb3J0cyA9IHt9O1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9ub2RlX21vZHVsZXMvX2NvcmUtanNAMi41LjNAY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX2l0ZXJhdG9ycy5qc1xuLy8gbW9kdWxlIGlkID0gMTlcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiLy8gdG8gaW5kZXhlZCBvYmplY3QsIHRvT2JqZWN0IHdpdGggZmFsbGJhY2sgZm9yIG5vbi1hcnJheS1saWtlIEVTMyBzdHJpbmdzXG52YXIgSU9iamVjdCA9IHJlcXVpcmUoJy4vX2lvYmplY3QnKTtcbnZhciBkZWZpbmVkID0gcmVxdWlyZSgnLi9fZGVmaW5lZCcpO1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoaXQpIHtcbiAgcmV0dXJuIElPYmplY3QoZGVmaW5lZChpdCkpO1xufTtcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vbm9kZV9tb2R1bGVzL19jb3JlLWpzQDIuNS4zQGNvcmUtanMvbGlicmFyeS9tb2R1bGVzL190by1pb2JqZWN0LmpzXG4vLyBtb2R1bGUgaWQgPSAyMFxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJyZXF1aXJlKCcuL2VzNi5hcnJheS5pdGVyYXRvcicpO1xudmFyIGdsb2JhbCA9IHJlcXVpcmUoJy4vX2dsb2JhbCcpO1xudmFyIGhpZGUgPSByZXF1aXJlKCcuL19oaWRlJyk7XG52YXIgSXRlcmF0b3JzID0gcmVxdWlyZSgnLi9faXRlcmF0b3JzJyk7XG52YXIgVE9fU1RSSU5HX1RBRyA9IHJlcXVpcmUoJy4vX3drcycpKCd0b1N0cmluZ1RhZycpO1xuXG52YXIgRE9NSXRlcmFibGVzID0gKCdDU1NSdWxlTGlzdCxDU1NTdHlsZURlY2xhcmF0aW9uLENTU1ZhbHVlTGlzdCxDbGllbnRSZWN0TGlzdCxET01SZWN0TGlzdCxET01TdHJpbmdMaXN0LCcgK1xuICAnRE9NVG9rZW5MaXN0LERhdGFUcmFuc2Zlckl0ZW1MaXN0LEZpbGVMaXN0LEhUTUxBbGxDb2xsZWN0aW9uLEhUTUxDb2xsZWN0aW9uLEhUTUxGb3JtRWxlbWVudCxIVE1MU2VsZWN0RWxlbWVudCwnICtcbiAgJ01lZGlhTGlzdCxNaW1lVHlwZUFycmF5LE5hbWVkTm9kZU1hcCxOb2RlTGlzdCxQYWludFJlcXVlc3RMaXN0LFBsdWdpbixQbHVnaW5BcnJheSxTVkdMZW5ndGhMaXN0LFNWR051bWJlckxpc3QsJyArXG4gICdTVkdQYXRoU2VnTGlzdCxTVkdQb2ludExpc3QsU1ZHU3RyaW5nTGlzdCxTVkdUcmFuc2Zvcm1MaXN0LFNvdXJjZUJ1ZmZlckxpc3QsU3R5bGVTaGVldExpc3QsVGV4dFRyYWNrQ3VlTGlzdCwnICtcbiAgJ1RleHRUcmFja0xpc3QsVG91Y2hMaXN0Jykuc3BsaXQoJywnKTtcblxuZm9yICh2YXIgaSA9IDA7IGkgPCBET01JdGVyYWJsZXMubGVuZ3RoOyBpKyspIHtcbiAgdmFyIE5BTUUgPSBET01JdGVyYWJsZXNbaV07XG4gIHZhciBDb2xsZWN0aW9uID0gZ2xvYmFsW05BTUVdO1xuICB2YXIgcHJvdG8gPSBDb2xsZWN0aW9uICYmIENvbGxlY3Rpb24ucHJvdG90eXBlO1xuICBpZiAocHJvdG8gJiYgIXByb3RvW1RPX1NUUklOR19UQUddKSBoaWRlKHByb3RvLCBUT19TVFJJTkdfVEFHLCBOQU1FKTtcbiAgSXRlcmF0b3JzW05BTUVdID0gSXRlcmF0b3JzLkFycmF5O1xufVxuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9ub2RlX21vZHVsZXMvX2NvcmUtanNAMi41LjNAY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvd2ViLmRvbS5pdGVyYWJsZS5qc1xuLy8gbW9kdWxlIGlkID0gMjFcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwibW9kdWxlLmV4cG9ydHMgPSB7IFwiZGVmYXVsdFwiOiByZXF1aXJlKFwiY29yZS1qcy9saWJyYXJ5L2ZuL3Byb21pc2VcIiksIF9fZXNNb2R1bGU6IHRydWUgfTtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL25vZGVfbW9kdWxlcy9fYmFiZWwtcnVudGltZUA2LjI2LjBAYmFiZWwtcnVudGltZS9jb3JlLWpzL3Byb21pc2UuanNcbi8vIG1vZHVsZSBpZCA9IDIyXG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGl0KSB7XG4gIGlmICh0eXBlb2YgaXQgIT0gJ2Z1bmN0aW9uJykgdGhyb3cgVHlwZUVycm9yKGl0ICsgJyBpcyBub3QgYSBmdW5jdGlvbiEnKTtcbiAgcmV0dXJuIGl0O1xufTtcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vbm9kZV9tb2R1bGVzL19jb3JlLWpzQDIuNS4zQGNvcmUtanMvbGlicmFyeS9tb2R1bGVzL19hLWZ1bmN0aW9uLmpzXG4vLyBtb2R1bGUgaWQgPSAyM1xuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJtb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChiaXRtYXAsIHZhbHVlKSB7XG4gIHJldHVybiB7XG4gICAgZW51bWVyYWJsZTogIShiaXRtYXAgJiAxKSxcbiAgICBjb25maWd1cmFibGU6ICEoYml0bWFwICYgMiksXG4gICAgd3JpdGFibGU6ICEoYml0bWFwICYgNCksXG4gICAgdmFsdWU6IHZhbHVlXG4gIH07XG59O1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9ub2RlX21vZHVsZXMvX2NvcmUtanNAMi41LjNAY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX3Byb3BlcnR5LWRlc2MuanNcbi8vIG1vZHVsZSBpZCA9IDI0XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsInZhciB0b1N0cmluZyA9IHt9LnRvU3RyaW5nO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChpdCkge1xuICByZXR1cm4gdG9TdHJpbmcuY2FsbChpdCkuc2xpY2UoOCwgLTEpO1xufTtcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vbm9kZV9tb2R1bGVzL19jb3JlLWpzQDIuNS4zQGNvcmUtanMvbGlicmFyeS9tb2R1bGVzL19jb2YuanNcbi8vIG1vZHVsZSBpZCA9IDI1XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsInZhciBkZWYgPSByZXF1aXJlKCcuL19vYmplY3QtZHAnKS5mO1xudmFyIGhhcyA9IHJlcXVpcmUoJy4vX2hhcycpO1xudmFyIFRBRyA9IHJlcXVpcmUoJy4vX3drcycpKCd0b1N0cmluZ1RhZycpO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChpdCwgdGFnLCBzdGF0KSB7XG4gIGlmIChpdCAmJiAhaGFzKGl0ID0gc3RhdCA/IGl0IDogaXQucHJvdG90eXBlLCBUQUcpKSBkZWYoaXQsIFRBRywgeyBjb25maWd1cmFibGU6IHRydWUsIHZhbHVlOiB0YWcgfSk7XG59O1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9ub2RlX21vZHVsZXMvX2NvcmUtanNAMi41LjNAY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX3NldC10by1zdHJpbmctdGFnLmpzXG4vLyBtb2R1bGUgaWQgPSAyNlxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJ2YXIgY3R4ID0gcmVxdWlyZSgnLi9fY3R4Jyk7XG52YXIgY2FsbCA9IHJlcXVpcmUoJy4vX2l0ZXItY2FsbCcpO1xudmFyIGlzQXJyYXlJdGVyID0gcmVxdWlyZSgnLi9faXMtYXJyYXktaXRlcicpO1xudmFyIGFuT2JqZWN0ID0gcmVxdWlyZSgnLi9fYW4tb2JqZWN0Jyk7XG52YXIgdG9MZW5ndGggPSByZXF1aXJlKCcuL190by1sZW5ndGgnKTtcbnZhciBnZXRJdGVyRm4gPSByZXF1aXJlKCcuL2NvcmUuZ2V0LWl0ZXJhdG9yLW1ldGhvZCcpO1xudmFyIEJSRUFLID0ge307XG52YXIgUkVUVVJOID0ge307XG52YXIgZXhwb3J0cyA9IG1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGl0ZXJhYmxlLCBlbnRyaWVzLCBmbiwgdGhhdCwgSVRFUkFUT1IpIHtcbiAgdmFyIGl0ZXJGbiA9IElURVJBVE9SID8gZnVuY3Rpb24gKCkgeyByZXR1cm4gaXRlcmFibGU7IH0gOiBnZXRJdGVyRm4oaXRlcmFibGUpO1xuICB2YXIgZiA9IGN0eChmbiwgdGhhdCwgZW50cmllcyA/IDIgOiAxKTtcbiAgdmFyIGluZGV4ID0gMDtcbiAgdmFyIGxlbmd0aCwgc3RlcCwgaXRlcmF0b3IsIHJlc3VsdDtcbiAgaWYgKHR5cGVvZiBpdGVyRm4gIT0gJ2Z1bmN0aW9uJykgdGhyb3cgVHlwZUVycm9yKGl0ZXJhYmxlICsgJyBpcyBub3QgaXRlcmFibGUhJyk7XG4gIC8vIGZhc3QgY2FzZSBmb3IgYXJyYXlzIHdpdGggZGVmYXVsdCBpdGVyYXRvclxuICBpZiAoaXNBcnJheUl0ZXIoaXRlckZuKSkgZm9yIChsZW5ndGggPSB0b0xlbmd0aChpdGVyYWJsZS5sZW5ndGgpOyBsZW5ndGggPiBpbmRleDsgaW5kZXgrKykge1xuICAgIHJlc3VsdCA9IGVudHJpZXMgPyBmKGFuT2JqZWN0KHN0ZXAgPSBpdGVyYWJsZVtpbmRleF0pWzBdLCBzdGVwWzFdKSA6IGYoaXRlcmFibGVbaW5kZXhdKTtcbiAgICBpZiAocmVzdWx0ID09PSBCUkVBSyB8fCByZXN1bHQgPT09IFJFVFVSTikgcmV0dXJuIHJlc3VsdDtcbiAgfSBlbHNlIGZvciAoaXRlcmF0b3IgPSBpdGVyRm4uY2FsbChpdGVyYWJsZSk7ICEoc3RlcCA9IGl0ZXJhdG9yLm5leHQoKSkuZG9uZTspIHtcbiAgICByZXN1bHQgPSBjYWxsKGl0ZXJhdG9yLCBmLCBzdGVwLnZhbHVlLCBlbnRyaWVzKTtcbiAgICBpZiAocmVzdWx0ID09PSBCUkVBSyB8fCByZXN1bHQgPT09IFJFVFVSTikgcmV0dXJuIHJlc3VsdDtcbiAgfVxufTtcbmV4cG9ydHMuQlJFQUsgPSBCUkVBSztcbmV4cG9ydHMuUkVUVVJOID0gUkVUVVJOO1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9ub2RlX21vZHVsZXMvX2NvcmUtanNAMi41LjNAY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX2Zvci1vZi5qc1xuLy8gbW9kdWxlIGlkID0gMjdcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiaW1wb3J0IFNwcml0ZVNoZWV0IGZyb20gJy4vU3ByaXRlU2hlZXQuanMnXHJcbmltcG9ydCB7Y3JlYXRlQW5pbX0gZnJvbSAnLi9hbmltLmpzJ1xyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIGxvYWRJbWFnZSh1cmwpIHtcclxuICAgIHJldHVybiBuZXcgUHJvbWlzZShyZXNvbHZlID0+IHtcclxuICAgICAgICBjb25zdCBpbWFnZSA9IG5ldyBJbWFnZSgpO1xyXG4gICAgICAgIGltYWdlLmFkZEV2ZW50TGlzdGVuZXIoJ2xvYWQnLCAoKSA9PiB7XHJcbiAgICAgICAgICAgIHJlc29sdmUoaW1hZ2UpXHJcbiAgICAgICAgfSk7XHJcblxyXG4gICAgICAgIGltYWdlLnNyYyA9IHVybFxyXG4gICAgfSlcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIGxvYWRKU09OKHVybCkge1xyXG4gICAgcmV0dXJuIGZldGNoKHVybClcclxuICAgICAgICAudGhlbihyID0+IHIuanNvbigpKTtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIGxvYWRTcHJpdGVTaGVldChuYW1lKSB7XHJcbiAgICByZXR1cm4gbG9hZEpTT04oYC9zcHJpdGVzLyR7bmFtZX0uanNvbmApXHJcbiAgICAgICAgLnRoZW4oc2hlZXRTcGVjID0+IFByb21pc2UuYWxsKFtcclxuICAgICAgICAgICAgICAgIHNoZWV0U3BlYyxcclxuICAgICAgICAgICAgICAgIGxvYWRJbWFnZShzaGVldFNwZWMuaW1hZ2VVUkwpXHJcbiAgICAgICAgICAgIF0pKVxyXG4gICAgICAgICAgICAudGhlbigoW3NoZWV0U3BlYywgaW1hZ2VdKSA9PiB7XHJcbiAgICAgICAgICAgICAgICBjb25zdCBzcHJpdGVzID0gbmV3IFNwcml0ZVNoZWV0KFxyXG4gICAgICAgICAgICAgICAgICAgIGltYWdlLFxyXG4gICAgICAgICAgICAgICAgICAgIHNoZWV0U3BlYy50aWxlVyxcclxuICAgICAgICAgICAgICAgICAgICBzaGVldFNwZWMudGlsZUgpO1xyXG5cclxuICAgICAgICAgICAgICAgIGlmIChzaGVldFNwZWMudGlsZXMpIHtcclxuICAgICAgICAgICAgICAgICAgICBzaGVldFNwZWMudGlsZXMuZm9yRWFjaCh0aWxlU3BlYyA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHNwcml0ZXMuZGVmaW5lVGlsZShcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRpbGVTcGVjLm5hbWUsIC4uLnRpbGVTcGVjLmluZGV4KTtcclxuICAgICAgICAgICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgIGlmIChzaGVldFNwZWMuZnJhbWVzKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgc2hlZXRTcGVjLmZyYW1lcy5mb3JFYWNoKGZyYW1lU3BlYyA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHNwcml0ZXMuZGVmaW5lKGZyYW1lU3BlYy5uYW1lLCAuLi5mcmFtZVNwZWMucmVjdCk7XHJcbiAgICAgICAgICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICBpZiAoc2hlZXRTcGVjLmFuaW1hdGlvbnMpIHtcclxuICAgICAgICAgICAgICAgICAgICBzaGVldFNwZWMuYW5pbWF0aW9ucy5mb3JFYWNoKGFuaW1TcGVjID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgY29uc3QgYW5pbWF0aW9uID0gY3JlYXRlQW5pbShhbmltU3BlYy5mcmFtZXMsIGFuaW1TcGVjLmZyYW1lTGVuKTtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHNwcml0ZXMuZGVmaW5lQW5pbShhbmltU3BlYy5uYW1lLCBhbmltYXRpb24pO1xyXG4gICAgICAgICAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgcmV0dXJuIHNwcml0ZXM7XHJcbiAgICAgICAgfSk7XHJcbn1cclxuXHJcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3B1YmxpYy9qcy9sb2FkZXIuanMiLCJtb2R1bGUuZXhwb3J0cyA9IHRydWU7XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL25vZGVfbW9kdWxlcy9fY29yZS1qc0AyLjUuM0Bjb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9fbGlicmFyeS5qc1xuLy8gbW9kdWxlIGlkID0gMzBcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiLy8gMTkuMS4yLjIgLyAxNS4yLjMuNSBPYmplY3QuY3JlYXRlKE8gWywgUHJvcGVydGllc10pXG52YXIgYW5PYmplY3QgPSByZXF1aXJlKCcuL19hbi1vYmplY3QnKTtcbnZhciBkUHMgPSByZXF1aXJlKCcuL19vYmplY3QtZHBzJyk7XG52YXIgZW51bUJ1Z0tleXMgPSByZXF1aXJlKCcuL19lbnVtLWJ1Zy1rZXlzJyk7XG52YXIgSUVfUFJPVE8gPSByZXF1aXJlKCcuL19zaGFyZWQta2V5JykoJ0lFX1BST1RPJyk7XG52YXIgRW1wdHkgPSBmdW5jdGlvbiAoKSB7IC8qIGVtcHR5ICovIH07XG52YXIgUFJPVE9UWVBFID0gJ3Byb3RvdHlwZSc7XG5cbi8vIENyZWF0ZSBvYmplY3Qgd2l0aCBmYWtlIGBudWxsYCBwcm90b3R5cGU6IHVzZSBpZnJhbWUgT2JqZWN0IHdpdGggY2xlYXJlZCBwcm90b3R5cGVcbnZhciBjcmVhdGVEaWN0ID0gZnVuY3Rpb24gKCkge1xuICAvLyBUaHJhc2gsIHdhc3RlIGFuZCBzb2RvbXk6IElFIEdDIGJ1Z1xuICB2YXIgaWZyYW1lID0gcmVxdWlyZSgnLi9fZG9tLWNyZWF0ZScpKCdpZnJhbWUnKTtcbiAgdmFyIGkgPSBlbnVtQnVnS2V5cy5sZW5ndGg7XG4gIHZhciBsdCA9ICc8JztcbiAgdmFyIGd0ID0gJz4nO1xuICB2YXIgaWZyYW1lRG9jdW1lbnQ7XG4gIGlmcmFtZS5zdHlsZS5kaXNwbGF5ID0gJ25vbmUnO1xuICByZXF1aXJlKCcuL19odG1sJykuYXBwZW5kQ2hpbGQoaWZyYW1lKTtcbiAgaWZyYW1lLnNyYyA9ICdqYXZhc2NyaXB0Oic7IC8vIGVzbGludC1kaXNhYmxlLWxpbmUgbm8tc2NyaXB0LXVybFxuICAvLyBjcmVhdGVEaWN0ID0gaWZyYW1lLmNvbnRlbnRXaW5kb3cuT2JqZWN0O1xuICAvLyBodG1sLnJlbW92ZUNoaWxkKGlmcmFtZSk7XG4gIGlmcmFtZURvY3VtZW50ID0gaWZyYW1lLmNvbnRlbnRXaW5kb3cuZG9jdW1lbnQ7XG4gIGlmcmFtZURvY3VtZW50Lm9wZW4oKTtcbiAgaWZyYW1lRG9jdW1lbnQud3JpdGUobHQgKyAnc2NyaXB0JyArIGd0ICsgJ2RvY3VtZW50LkY9T2JqZWN0JyArIGx0ICsgJy9zY3JpcHQnICsgZ3QpO1xuICBpZnJhbWVEb2N1bWVudC5jbG9zZSgpO1xuICBjcmVhdGVEaWN0ID0gaWZyYW1lRG9jdW1lbnQuRjtcbiAgd2hpbGUgKGktLSkgZGVsZXRlIGNyZWF0ZURpY3RbUFJPVE9UWVBFXVtlbnVtQnVnS2V5c1tpXV07XG4gIHJldHVybiBjcmVhdGVEaWN0KCk7XG59O1xuXG5tb2R1bGUuZXhwb3J0cyA9IE9iamVjdC5jcmVhdGUgfHwgZnVuY3Rpb24gY3JlYXRlKE8sIFByb3BlcnRpZXMpIHtcbiAgdmFyIHJlc3VsdDtcbiAgaWYgKE8gIT09IG51bGwpIHtcbiAgICBFbXB0eVtQUk9UT1RZUEVdID0gYW5PYmplY3QoTyk7XG4gICAgcmVzdWx0ID0gbmV3IEVtcHR5KCk7XG4gICAgRW1wdHlbUFJPVE9UWVBFXSA9IG51bGw7XG4gICAgLy8gYWRkIFwiX19wcm90b19fXCIgZm9yIE9iamVjdC5nZXRQcm90b3R5cGVPZiBwb2x5ZmlsbFxuICAgIHJlc3VsdFtJRV9QUk9UT10gPSBPO1xuICB9IGVsc2UgcmVzdWx0ID0gY3JlYXRlRGljdCgpO1xuICByZXR1cm4gUHJvcGVydGllcyA9PT0gdW5kZWZpbmVkID8gcmVzdWx0IDogZFBzKHJlc3VsdCwgUHJvcGVydGllcyk7XG59O1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9ub2RlX21vZHVsZXMvX2NvcmUtanNAMi41LjNAY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX29iamVjdC1jcmVhdGUuanNcbi8vIG1vZHVsZSBpZCA9IDMxXG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIi8vIDcuMS4xNSBUb0xlbmd0aFxudmFyIHRvSW50ZWdlciA9IHJlcXVpcmUoJy4vX3RvLWludGVnZXInKTtcbnZhciBtaW4gPSBNYXRoLm1pbjtcbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGl0KSB7XG4gIHJldHVybiBpdCA+IDAgPyBtaW4odG9JbnRlZ2VyKGl0KSwgMHgxZmZmZmZmZmZmZmZmZikgOiAwOyAvLyBwb3coMiwgNTMpIC0gMSA9PSA5MDA3MTk5MjU0NzQwOTkxXG59O1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9ub2RlX21vZHVsZXMvX2NvcmUtanNAMi41LjNAY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX3RvLWxlbmd0aC5qc1xuLy8gbW9kdWxlIGlkID0gMzJcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwidmFyIGlkID0gMDtcbnZhciBweCA9IE1hdGgucmFuZG9tKCk7XG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChrZXkpIHtcbiAgcmV0dXJuICdTeW1ib2woJy5jb25jYXQoa2V5ID09PSB1bmRlZmluZWQgPyAnJyA6IGtleSwgJylfJywgKCsraWQgKyBweCkudG9TdHJpbmcoMzYpKTtcbn07XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL25vZGVfbW9kdWxlcy9fY29yZS1qc0AyLjUuM0Bjb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9fdWlkLmpzXG4vLyBtb2R1bGUgaWQgPSAzM1xuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCIvLyA3LjEuMTMgVG9PYmplY3QoYXJndW1lbnQpXG52YXIgZGVmaW5lZCA9IHJlcXVpcmUoJy4vX2RlZmluZWQnKTtcbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGl0KSB7XG4gIHJldHVybiBPYmplY3QoZGVmaW5lZChpdCkpO1xufTtcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vbm9kZV9tb2R1bGVzL19jb3JlLWpzQDIuNS4zQGNvcmUtanMvbGlicmFyeS9tb2R1bGVzL190by1vYmplY3QuanNcbi8vIG1vZHVsZSBpZCA9IDM0XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIi8vIGdldHRpbmcgdGFnIGZyb20gMTkuMS4zLjYgT2JqZWN0LnByb3RvdHlwZS50b1N0cmluZygpXG52YXIgY29mID0gcmVxdWlyZSgnLi9fY29mJyk7XG52YXIgVEFHID0gcmVxdWlyZSgnLi9fd2tzJykoJ3RvU3RyaW5nVGFnJyk7XG4vLyBFUzMgd3JvbmcgaGVyZVxudmFyIEFSRyA9IGNvZihmdW5jdGlvbiAoKSB7IHJldHVybiBhcmd1bWVudHM7IH0oKSkgPT0gJ0FyZ3VtZW50cyc7XG5cbi8vIGZhbGxiYWNrIGZvciBJRTExIFNjcmlwdCBBY2Nlc3MgRGVuaWVkIGVycm9yXG52YXIgdHJ5R2V0ID0gZnVuY3Rpb24gKGl0LCBrZXkpIHtcbiAgdHJ5IHtcbiAgICByZXR1cm4gaXRba2V5XTtcbiAgfSBjYXRjaCAoZSkgeyAvKiBlbXB0eSAqLyB9XG59O1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChpdCkge1xuICB2YXIgTywgVCwgQjtcbiAgcmV0dXJuIGl0ID09PSB1bmRlZmluZWQgPyAnVW5kZWZpbmVkJyA6IGl0ID09PSBudWxsID8gJ051bGwnXG4gICAgLy8gQEB0b1N0cmluZ1RhZyBjYXNlXG4gICAgOiB0eXBlb2YgKFQgPSB0cnlHZXQoTyA9IE9iamVjdChpdCksIFRBRykpID09ICdzdHJpbmcnID8gVFxuICAgIC8vIGJ1aWx0aW5UYWcgY2FzZVxuICAgIDogQVJHID8gY29mKE8pXG4gICAgLy8gRVMzIGFyZ3VtZW50cyBmYWxsYmFja1xuICAgIDogKEIgPSBjb2YoTykpID09ICdPYmplY3QnICYmIHR5cGVvZiBPLmNhbGxlZSA9PSAnZnVuY3Rpb24nID8gJ0FyZ3VtZW50cycgOiBCO1xufTtcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vbm9kZV9tb2R1bGVzL19jb3JlLWpzQDIuNS4zQGNvcmUtanMvbGlicmFyeS9tb2R1bGVzL19jbGFzc29mLmpzXG4vLyBtb2R1bGUgaWQgPSAzNVxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJcInVzZSBzdHJpY3RcIjtcblxuZXhwb3J0cy5fX2VzTW9kdWxlID0gdHJ1ZTtcblxudmFyIF9pc0l0ZXJhYmxlMiA9IHJlcXVpcmUoXCIuLi9jb3JlLWpzL2lzLWl0ZXJhYmxlXCIpO1xuXG52YXIgX2lzSXRlcmFibGUzID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfaXNJdGVyYWJsZTIpO1xuXG52YXIgX2dldEl0ZXJhdG9yMiA9IHJlcXVpcmUoXCIuLi9jb3JlLWpzL2dldC1pdGVyYXRvclwiKTtcblxudmFyIF9nZXRJdGVyYXRvcjMgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9nZXRJdGVyYXRvcjIpO1xuXG5mdW5jdGlvbiBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KG9iaikgeyByZXR1cm4gb2JqICYmIG9iai5fX2VzTW9kdWxlID8gb2JqIDogeyBkZWZhdWx0OiBvYmogfTsgfVxuXG5leHBvcnRzLmRlZmF1bHQgPSBmdW5jdGlvbiAoKSB7XG4gIGZ1bmN0aW9uIHNsaWNlSXRlcmF0b3IoYXJyLCBpKSB7XG4gICAgdmFyIF9hcnIgPSBbXTtcbiAgICB2YXIgX24gPSB0cnVlO1xuICAgIHZhciBfZCA9IGZhbHNlO1xuICAgIHZhciBfZSA9IHVuZGVmaW5lZDtcblxuICAgIHRyeSB7XG4gICAgICBmb3IgKHZhciBfaSA9ICgwLCBfZ2V0SXRlcmF0b3IzLmRlZmF1bHQpKGFyciksIF9zOyAhKF9uID0gKF9zID0gX2kubmV4dCgpKS5kb25lKTsgX24gPSB0cnVlKSB7XG4gICAgICAgIF9hcnIucHVzaChfcy52YWx1ZSk7XG5cbiAgICAgICAgaWYgKGkgJiYgX2Fyci5sZW5ndGggPT09IGkpIGJyZWFrO1xuICAgICAgfVxuICAgIH0gY2F0Y2ggKGVycikge1xuICAgICAgX2QgPSB0cnVlO1xuICAgICAgX2UgPSBlcnI7XG4gICAgfSBmaW5hbGx5IHtcbiAgICAgIHRyeSB7XG4gICAgICAgIGlmICghX24gJiYgX2lbXCJyZXR1cm5cIl0pIF9pW1wicmV0dXJuXCJdKCk7XG4gICAgICB9IGZpbmFsbHkge1xuICAgICAgICBpZiAoX2QpIHRocm93IF9lO1xuICAgICAgfVxuICAgIH1cblxuICAgIHJldHVybiBfYXJyO1xuICB9XG5cbiAgcmV0dXJuIGZ1bmN0aW9uIChhcnIsIGkpIHtcbiAgICBpZiAoQXJyYXkuaXNBcnJheShhcnIpKSB7XG4gICAgICByZXR1cm4gYXJyO1xuICAgIH0gZWxzZSBpZiAoKDAsIF9pc0l0ZXJhYmxlMy5kZWZhdWx0KShPYmplY3QoYXJyKSkpIHtcbiAgICAgIHJldHVybiBzbGljZUl0ZXJhdG9yKGFyciwgaSk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHRocm93IG5ldyBUeXBlRXJyb3IoXCJJbnZhbGlkIGF0dGVtcHQgdG8gZGVzdHJ1Y3R1cmUgbm9uLWl0ZXJhYmxlIGluc3RhbmNlXCIpO1xuICAgIH1cbiAgfTtcbn0oKTtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL25vZGVfbW9kdWxlcy9fYmFiZWwtcnVudGltZUA2LjI2LjBAYmFiZWwtcnVudGltZS9oZWxwZXJzL3NsaWNlZFRvQXJyYXkuanNcbi8vIG1vZHVsZSBpZCA9IDM2XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIlxyXG5leHBvcnQgIGNsYXNzIE1hdHJpeCB7XHJcbiAgICBjb25zdHJ1Y3RvcigpIHtcclxuICAgICAgICB0aGlzLmdyaWQgPSBbXVxyXG4gICAgfVxyXG5cclxuICAgIGZvckVhY2goY2FsbGJhY2spIHtcclxuICAgICAgICB0aGlzLmdyaWQuZm9yRWFjaCgoY29sdW1uLHgpID0+IHtcclxuICAgICAgICAgICAgY29sdW1uLmZvckVhY2goKHZhbCx5KSA9PiB7XHJcbiAgICAgICAgICAgICAgICBjYWxsYmFjayh2YWwseCx5KVxyXG4gICAgICAgICAgICB9KVxyXG4gICAgICAgIH0pXHJcbiAgICB9XHJcblxyXG4gICAgZ2V0KHgseSkge1xyXG4gICAgICAgIGNvbnN0IGNvbCA9IHRoaXMuZ3JpZFt4XVxyXG5cclxuICAgICAgICBpZiAoY29sKSB7XHJcbiAgICAgICAgICAgIHJldHVybiBjb2xbeV1cclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIHVuZGVmaW5lZFxyXG4gICAgfVxyXG5cclxuICAgIHNldCAoeCx5LHZhbHVlKSB7XHJcbiAgICAgICAgaWYgKCF0aGlzLmdyaWRbeF0pIHtcclxuICAgICAgICAgICAgdGhpcy5ncmlkW3hdID0gW11cclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHRoaXMuZ3JpZFt4XVt5XSA9IHZhbHVlXHJcbiAgICB9XHJcbn1cclxuXHJcbmV4cG9ydCBjbGFzcyBWZWMyIHtcclxuICAgIGNvbnN0cnVjdG9yKHgsIHkpIHtcclxuICAgICAgICB0aGlzLnNldCh4LCB5KVxyXG4gICAgfVxyXG5cclxuICAgIHNldCh4LCB5KSB7XHJcbiAgICAgICAgdGhpcy54ID0geFxyXG4gICAgICAgIHRoaXMueSA9IHlcclxuICAgIH1cclxufVxyXG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9wdWJsaWMvanMvbWF0aC5qcyIsIi8vIDcuMS40IFRvSW50ZWdlclxudmFyIGNlaWwgPSBNYXRoLmNlaWw7XG52YXIgZmxvb3IgPSBNYXRoLmZsb29yO1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoaXQpIHtcbiAgcmV0dXJuIGlzTmFOKGl0ID0gK2l0KSA/IDAgOiAoaXQgPiAwID8gZmxvb3IgOiBjZWlsKShpdCk7XG59O1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9ub2RlX21vZHVsZXMvX2NvcmUtanNAMi41LjNAY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX3RvLWludGVnZXIuanNcbi8vIG1vZHVsZSBpZCA9IDM4XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIi8vIDcuMi4xIFJlcXVpcmVPYmplY3RDb2VyY2libGUoYXJndW1lbnQpXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChpdCkge1xuICBpZiAoaXQgPT0gdW5kZWZpbmVkKSB0aHJvdyBUeXBlRXJyb3IoXCJDYW4ndCBjYWxsIG1ldGhvZCBvbiAgXCIgKyBpdCk7XG4gIHJldHVybiBpdDtcbn07XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL25vZGVfbW9kdWxlcy9fY29yZS1qc0AyLjUuM0Bjb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9fZGVmaW5lZC5qc1xuLy8gbW9kdWxlIGlkID0gMzlcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiJ3VzZSBzdHJpY3QnO1xudmFyIExJQlJBUlkgPSByZXF1aXJlKCcuL19saWJyYXJ5Jyk7XG52YXIgJGV4cG9ydCA9IHJlcXVpcmUoJy4vX2V4cG9ydCcpO1xudmFyIHJlZGVmaW5lID0gcmVxdWlyZSgnLi9fcmVkZWZpbmUnKTtcbnZhciBoaWRlID0gcmVxdWlyZSgnLi9faGlkZScpO1xudmFyIGhhcyA9IHJlcXVpcmUoJy4vX2hhcycpO1xudmFyIEl0ZXJhdG9ycyA9IHJlcXVpcmUoJy4vX2l0ZXJhdG9ycycpO1xudmFyICRpdGVyQ3JlYXRlID0gcmVxdWlyZSgnLi9faXRlci1jcmVhdGUnKTtcbnZhciBzZXRUb1N0cmluZ1RhZyA9IHJlcXVpcmUoJy4vX3NldC10by1zdHJpbmctdGFnJyk7XG52YXIgZ2V0UHJvdG90eXBlT2YgPSByZXF1aXJlKCcuL19vYmplY3QtZ3BvJyk7XG52YXIgSVRFUkFUT1IgPSByZXF1aXJlKCcuL193a3MnKSgnaXRlcmF0b3InKTtcbnZhciBCVUdHWSA9ICEoW10ua2V5cyAmJiAnbmV4dCcgaW4gW10ua2V5cygpKTsgLy8gU2FmYXJpIGhhcyBidWdneSBpdGVyYXRvcnMgdy9vIGBuZXh0YFxudmFyIEZGX0lURVJBVE9SID0gJ0BAaXRlcmF0b3InO1xudmFyIEtFWVMgPSAna2V5cyc7XG52YXIgVkFMVUVTID0gJ3ZhbHVlcyc7XG5cbnZhciByZXR1cm5UaGlzID0gZnVuY3Rpb24gKCkgeyByZXR1cm4gdGhpczsgfTtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoQmFzZSwgTkFNRSwgQ29uc3RydWN0b3IsIG5leHQsIERFRkFVTFQsIElTX1NFVCwgRk9SQ0VEKSB7XG4gICRpdGVyQ3JlYXRlKENvbnN0cnVjdG9yLCBOQU1FLCBuZXh0KTtcbiAgdmFyIGdldE1ldGhvZCA9IGZ1bmN0aW9uIChraW5kKSB7XG4gICAgaWYgKCFCVUdHWSAmJiBraW5kIGluIHByb3RvKSByZXR1cm4gcHJvdG9ba2luZF07XG4gICAgc3dpdGNoIChraW5kKSB7XG4gICAgICBjYXNlIEtFWVM6IHJldHVybiBmdW5jdGlvbiBrZXlzKCkgeyByZXR1cm4gbmV3IENvbnN0cnVjdG9yKHRoaXMsIGtpbmQpOyB9O1xuICAgICAgY2FzZSBWQUxVRVM6IHJldHVybiBmdW5jdGlvbiB2YWx1ZXMoKSB7IHJldHVybiBuZXcgQ29uc3RydWN0b3IodGhpcywga2luZCk7IH07XG4gICAgfSByZXR1cm4gZnVuY3Rpb24gZW50cmllcygpIHsgcmV0dXJuIG5ldyBDb25zdHJ1Y3Rvcih0aGlzLCBraW5kKTsgfTtcbiAgfTtcbiAgdmFyIFRBRyA9IE5BTUUgKyAnIEl0ZXJhdG9yJztcbiAgdmFyIERFRl9WQUxVRVMgPSBERUZBVUxUID09IFZBTFVFUztcbiAgdmFyIFZBTFVFU19CVUcgPSBmYWxzZTtcbiAgdmFyIHByb3RvID0gQmFzZS5wcm90b3R5cGU7XG4gIHZhciAkbmF0aXZlID0gcHJvdG9bSVRFUkFUT1JdIHx8IHByb3RvW0ZGX0lURVJBVE9SXSB8fCBERUZBVUxUICYmIHByb3RvW0RFRkFVTFRdO1xuICB2YXIgJGRlZmF1bHQgPSAoIUJVR0dZICYmICRuYXRpdmUpIHx8IGdldE1ldGhvZChERUZBVUxUKTtcbiAgdmFyICRlbnRyaWVzID0gREVGQVVMVCA/ICFERUZfVkFMVUVTID8gJGRlZmF1bHQgOiBnZXRNZXRob2QoJ2VudHJpZXMnKSA6IHVuZGVmaW5lZDtcbiAgdmFyICRhbnlOYXRpdmUgPSBOQU1FID09ICdBcnJheScgPyBwcm90by5lbnRyaWVzIHx8ICRuYXRpdmUgOiAkbmF0aXZlO1xuICB2YXIgbWV0aG9kcywga2V5LCBJdGVyYXRvclByb3RvdHlwZTtcbiAgLy8gRml4IG5hdGl2ZVxuICBpZiAoJGFueU5hdGl2ZSkge1xuICAgIEl0ZXJhdG9yUHJvdG90eXBlID0gZ2V0UHJvdG90eXBlT2YoJGFueU5hdGl2ZS5jYWxsKG5ldyBCYXNlKCkpKTtcbiAgICBpZiAoSXRlcmF0b3JQcm90b3R5cGUgIT09IE9iamVjdC5wcm90b3R5cGUgJiYgSXRlcmF0b3JQcm90b3R5cGUubmV4dCkge1xuICAgICAgLy8gU2V0IEBAdG9TdHJpbmdUYWcgdG8gbmF0aXZlIGl0ZXJhdG9yc1xuICAgICAgc2V0VG9TdHJpbmdUYWcoSXRlcmF0b3JQcm90b3R5cGUsIFRBRywgdHJ1ZSk7XG4gICAgICAvLyBmaXggZm9yIHNvbWUgb2xkIGVuZ2luZXNcbiAgICAgIGlmICghTElCUkFSWSAmJiAhaGFzKEl0ZXJhdG9yUHJvdG90eXBlLCBJVEVSQVRPUikpIGhpZGUoSXRlcmF0b3JQcm90b3R5cGUsIElURVJBVE9SLCByZXR1cm5UaGlzKTtcbiAgICB9XG4gIH1cbiAgLy8gZml4IEFycmF5I3t2YWx1ZXMsIEBAaXRlcmF0b3J9Lm5hbWUgaW4gVjggLyBGRlxuICBpZiAoREVGX1ZBTFVFUyAmJiAkbmF0aXZlICYmICRuYXRpdmUubmFtZSAhPT0gVkFMVUVTKSB7XG4gICAgVkFMVUVTX0JVRyA9IHRydWU7XG4gICAgJGRlZmF1bHQgPSBmdW5jdGlvbiB2YWx1ZXMoKSB7IHJldHVybiAkbmF0aXZlLmNhbGwodGhpcyk7IH07XG4gIH1cbiAgLy8gRGVmaW5lIGl0ZXJhdG9yXG4gIGlmICgoIUxJQlJBUlkgfHwgRk9SQ0VEKSAmJiAoQlVHR1kgfHwgVkFMVUVTX0JVRyB8fCAhcHJvdG9bSVRFUkFUT1JdKSkge1xuICAgIGhpZGUocHJvdG8sIElURVJBVE9SLCAkZGVmYXVsdCk7XG4gIH1cbiAgLy8gUGx1ZyBmb3IgbGlicmFyeVxuICBJdGVyYXRvcnNbTkFNRV0gPSAkZGVmYXVsdDtcbiAgSXRlcmF0b3JzW1RBR10gPSByZXR1cm5UaGlzO1xuICBpZiAoREVGQVVMVCkge1xuICAgIG1ldGhvZHMgPSB7XG4gICAgICB2YWx1ZXM6IERFRl9WQUxVRVMgPyAkZGVmYXVsdCA6IGdldE1ldGhvZChWQUxVRVMpLFxuICAgICAga2V5czogSVNfU0VUID8gJGRlZmF1bHQgOiBnZXRNZXRob2QoS0VZUyksXG4gICAgICBlbnRyaWVzOiAkZW50cmllc1xuICAgIH07XG4gICAgaWYgKEZPUkNFRCkgZm9yIChrZXkgaW4gbWV0aG9kcykge1xuICAgICAgaWYgKCEoa2V5IGluIHByb3RvKSkgcmVkZWZpbmUocHJvdG8sIGtleSwgbWV0aG9kc1trZXldKTtcbiAgICB9IGVsc2UgJGV4cG9ydCgkZXhwb3J0LlAgKyAkZXhwb3J0LkYgKiAoQlVHR1kgfHwgVkFMVUVTX0JVRyksIE5BTUUsIG1ldGhvZHMpO1xuICB9XG4gIHJldHVybiBtZXRob2RzO1xufTtcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vbm9kZV9tb2R1bGVzL19jb3JlLWpzQDIuNS4zQGNvcmUtanMvbGlicmFyeS9tb2R1bGVzL19pdGVyLWRlZmluZS5qc1xuLy8gbW9kdWxlIGlkID0gNDBcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwidmFyIGlzT2JqZWN0ID0gcmVxdWlyZSgnLi9faXMtb2JqZWN0Jyk7XG52YXIgZG9jdW1lbnQgPSByZXF1aXJlKCcuL19nbG9iYWwnKS5kb2N1bWVudDtcbi8vIHR5cGVvZiBkb2N1bWVudC5jcmVhdGVFbGVtZW50IGlzICdvYmplY3QnIGluIG9sZCBJRVxudmFyIGlzID0gaXNPYmplY3QoZG9jdW1lbnQpICYmIGlzT2JqZWN0KGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQpO1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoaXQpIHtcbiAgcmV0dXJuIGlzID8gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChpdCkgOiB7fTtcbn07XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL25vZGVfbW9kdWxlcy9fY29yZS1qc0AyLjUuM0Bjb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9fZG9tLWNyZWF0ZS5qc1xuLy8gbW9kdWxlIGlkID0gNDFcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiLy8gNy4xLjEgVG9QcmltaXRpdmUoaW5wdXQgWywgUHJlZmVycmVkVHlwZV0pXG52YXIgaXNPYmplY3QgPSByZXF1aXJlKCcuL19pcy1vYmplY3QnKTtcbi8vIGluc3RlYWQgb2YgdGhlIEVTNiBzcGVjIHZlcnNpb24sIHdlIGRpZG4ndCBpbXBsZW1lbnQgQEB0b1ByaW1pdGl2ZSBjYXNlXG4vLyBhbmQgdGhlIHNlY29uZCBhcmd1bWVudCAtIGZsYWcgLSBwcmVmZXJyZWQgdHlwZSBpcyBhIHN0cmluZ1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoaXQsIFMpIHtcbiAgaWYgKCFpc09iamVjdChpdCkpIHJldHVybiBpdDtcbiAgdmFyIGZuLCB2YWw7XG4gIGlmIChTICYmIHR5cGVvZiAoZm4gPSBpdC50b1N0cmluZykgPT0gJ2Z1bmN0aW9uJyAmJiAhaXNPYmplY3QodmFsID0gZm4uY2FsbChpdCkpKSByZXR1cm4gdmFsO1xuICBpZiAodHlwZW9mIChmbiA9IGl0LnZhbHVlT2YpID09ICdmdW5jdGlvbicgJiYgIWlzT2JqZWN0KHZhbCA9IGZuLmNhbGwoaXQpKSkgcmV0dXJuIHZhbDtcbiAgaWYgKCFTICYmIHR5cGVvZiAoZm4gPSBpdC50b1N0cmluZykgPT0gJ2Z1bmN0aW9uJyAmJiAhaXNPYmplY3QodmFsID0gZm4uY2FsbChpdCkpKSByZXR1cm4gdmFsO1xuICB0aHJvdyBUeXBlRXJyb3IoXCJDYW4ndCBjb252ZXJ0IG9iamVjdCB0byBwcmltaXRpdmUgdmFsdWVcIik7XG59O1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9ub2RlX21vZHVsZXMvX2NvcmUtanNAMi41LjNAY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX3RvLXByaW1pdGl2ZS5qc1xuLy8gbW9kdWxlIGlkID0gNDJcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiLy8gMTkuMS4yLjE0IC8gMTUuMi4zLjE0IE9iamVjdC5rZXlzKE8pXG52YXIgJGtleXMgPSByZXF1aXJlKCcuL19vYmplY3Qta2V5cy1pbnRlcm5hbCcpO1xudmFyIGVudW1CdWdLZXlzID0gcmVxdWlyZSgnLi9fZW51bS1idWcta2V5cycpO1xuXG5tb2R1bGUuZXhwb3J0cyA9IE9iamVjdC5rZXlzIHx8IGZ1bmN0aW9uIGtleXMoTykge1xuICByZXR1cm4gJGtleXMoTywgZW51bUJ1Z0tleXMpO1xufTtcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vbm9kZV9tb2R1bGVzL19jb3JlLWpzQDIuNS4zQGNvcmUtanMvbGlicmFyeS9tb2R1bGVzL19vYmplY3Qta2V5cy5qc1xuLy8gbW9kdWxlIGlkID0gNDNcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwidmFyIHNoYXJlZCA9IHJlcXVpcmUoJy4vX3NoYXJlZCcpKCdrZXlzJyk7XG52YXIgdWlkID0gcmVxdWlyZSgnLi9fdWlkJyk7XG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChrZXkpIHtcbiAgcmV0dXJuIHNoYXJlZFtrZXldIHx8IChzaGFyZWRba2V5XSA9IHVpZChrZXkpKTtcbn07XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL25vZGVfbW9kdWxlcy9fY29yZS1qc0AyLjUuM0Bjb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9fc2hhcmVkLWtleS5qc1xuLy8gbW9kdWxlIGlkID0gNDRcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwidmFyIGdsb2JhbCA9IHJlcXVpcmUoJy4vX2dsb2JhbCcpO1xudmFyIFNIQVJFRCA9ICdfX2NvcmUtanNfc2hhcmVkX18nO1xudmFyIHN0b3JlID0gZ2xvYmFsW1NIQVJFRF0gfHwgKGdsb2JhbFtTSEFSRURdID0ge30pO1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoa2V5KSB7XG4gIHJldHVybiBzdG9yZVtrZXldIHx8IChzdG9yZVtrZXldID0ge30pO1xufTtcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vbm9kZV9tb2R1bGVzL19jb3JlLWpzQDIuNS4zQGNvcmUtanMvbGlicmFyeS9tb2R1bGVzL19zaGFyZWQuanNcbi8vIG1vZHVsZSBpZCA9IDQ1XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIi8vIElFIDgtIGRvbid0IGVudW0gYnVnIGtleXNcbm1vZHVsZS5leHBvcnRzID0gKFxuICAnY29uc3RydWN0b3IsaGFzT3duUHJvcGVydHksaXNQcm90b3R5cGVPZixwcm9wZXJ0eUlzRW51bWVyYWJsZSx0b0xvY2FsZVN0cmluZyx0b1N0cmluZyx2YWx1ZU9mJ1xuKS5zcGxpdCgnLCcpO1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9ub2RlX21vZHVsZXMvX2NvcmUtanNAMi41LjNAY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX2VudW0tYnVnLWtleXMuanNcbi8vIG1vZHVsZSBpZCA9IDQ2XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGl0LCBDb25zdHJ1Y3RvciwgbmFtZSwgZm9yYmlkZGVuRmllbGQpIHtcbiAgaWYgKCEoaXQgaW5zdGFuY2VvZiBDb25zdHJ1Y3RvcikgfHwgKGZvcmJpZGRlbkZpZWxkICE9PSB1bmRlZmluZWQgJiYgZm9yYmlkZGVuRmllbGQgaW4gaXQpKSB7XG4gICAgdGhyb3cgVHlwZUVycm9yKG5hbWUgKyAnOiBpbmNvcnJlY3QgaW52b2NhdGlvbiEnKTtcbiAgfSByZXR1cm4gaXQ7XG59O1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9ub2RlX21vZHVsZXMvX2NvcmUtanNAMi41LjNAY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX2FuLWluc3RhbmNlLmpzXG4vLyBtb2R1bGUgaWQgPSA0N1xuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJ2YXIgY2xhc3NvZiA9IHJlcXVpcmUoJy4vX2NsYXNzb2YnKTtcbnZhciBJVEVSQVRPUiA9IHJlcXVpcmUoJy4vX3drcycpKCdpdGVyYXRvcicpO1xudmFyIEl0ZXJhdG9ycyA9IHJlcXVpcmUoJy4vX2l0ZXJhdG9ycycpO1xubW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKCcuL19jb3JlJykuZ2V0SXRlcmF0b3JNZXRob2QgPSBmdW5jdGlvbiAoaXQpIHtcbiAgaWYgKGl0ICE9IHVuZGVmaW5lZCkgcmV0dXJuIGl0W0lURVJBVE9SXVxuICAgIHx8IGl0WydAQGl0ZXJhdG9yJ11cbiAgICB8fCBJdGVyYXRvcnNbY2xhc3NvZihpdCldO1xufTtcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vbm9kZV9tb2R1bGVzL19jb3JlLWpzQDIuNS4zQGNvcmUtanMvbGlicmFyeS9tb2R1bGVzL2NvcmUuZ2V0LWl0ZXJhdG9yLW1ldGhvZC5qc1xuLy8gbW9kdWxlIGlkID0gNDhcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiJ3VzZSBzdHJpY3QnO1xuLy8gMjUuNC4xLjUgTmV3UHJvbWlzZUNhcGFiaWxpdHkoQylcbnZhciBhRnVuY3Rpb24gPSByZXF1aXJlKCcuL19hLWZ1bmN0aW9uJyk7XG5cbmZ1bmN0aW9uIFByb21pc2VDYXBhYmlsaXR5KEMpIHtcbiAgdmFyIHJlc29sdmUsIHJlamVjdDtcbiAgdGhpcy5wcm9taXNlID0gbmV3IEMoZnVuY3Rpb24gKCQkcmVzb2x2ZSwgJCRyZWplY3QpIHtcbiAgICBpZiAocmVzb2x2ZSAhPT0gdW5kZWZpbmVkIHx8IHJlamVjdCAhPT0gdW5kZWZpbmVkKSB0aHJvdyBUeXBlRXJyb3IoJ0JhZCBQcm9taXNlIGNvbnN0cnVjdG9yJyk7XG4gICAgcmVzb2x2ZSA9ICQkcmVzb2x2ZTtcbiAgICByZWplY3QgPSAkJHJlamVjdDtcbiAgfSk7XG4gIHRoaXMucmVzb2x2ZSA9IGFGdW5jdGlvbihyZXNvbHZlKTtcbiAgdGhpcy5yZWplY3QgPSBhRnVuY3Rpb24ocmVqZWN0KTtcbn1cblxubW9kdWxlLmV4cG9ydHMuZiA9IGZ1bmN0aW9uIChDKSB7XG4gIHJldHVybiBuZXcgUHJvbWlzZUNhcGFiaWxpdHkoQyk7XG59O1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9ub2RlX21vZHVsZXMvX2NvcmUtanNAMi41LjNAY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX25ldy1wcm9taXNlLWNhcGFiaWxpdHkuanNcbi8vIG1vZHVsZSBpZCA9IDQ5XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsInZhciBoaWRlID0gcmVxdWlyZSgnLi9faGlkZScpO1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAodGFyZ2V0LCBzcmMsIHNhZmUpIHtcbiAgZm9yICh2YXIga2V5IGluIHNyYykge1xuICAgIGlmIChzYWZlICYmIHRhcmdldFtrZXldKSB0YXJnZXRba2V5XSA9IHNyY1trZXldO1xuICAgIGVsc2UgaGlkZSh0YXJnZXQsIGtleSwgc3JjW2tleV0pO1xuICB9IHJldHVybiB0YXJnZXQ7XG59O1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9ub2RlX21vZHVsZXMvX2NvcmUtanNAMi41LjNAY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX3JlZGVmaW5lLWFsbC5qc1xuLy8gbW9kdWxlIGlkID0gNTBcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwibW9kdWxlLmV4cG9ydHMgPSB7IFwiZGVmYXVsdFwiOiByZXF1aXJlKFwiY29yZS1qcy9saWJyYXJ5L2ZuL2dldC1pdGVyYXRvclwiKSwgX19lc01vZHVsZTogdHJ1ZSB9O1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vbm9kZV9tb2R1bGVzL19iYWJlbC1ydW50aW1lQDYuMjYuMEBiYWJlbC1ydW50aW1lL2NvcmUtanMvZ2V0LWl0ZXJhdG9yLmpzXG4vLyBtb2R1bGUgaWQgPSA1MVxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJtb2R1bGUuZXhwb3J0cyA9IHsgXCJkZWZhdWx0XCI6IHJlcXVpcmUoXCJjb3JlLWpzL2xpYnJhcnkvZm4vc3ltYm9sXCIpLCBfX2VzTW9kdWxlOiB0cnVlIH07XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9ub2RlX21vZHVsZXMvX2JhYmVsLXJ1bnRpbWVANi4yNi4wQGJhYmVsLXJ1bnRpbWUvY29yZS1qcy9zeW1ib2wuanNcbi8vIG1vZHVsZSBpZCA9IDUyXG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsInZhciBNRVRBID0gcmVxdWlyZSgnLi9fdWlkJykoJ21ldGEnKTtcbnZhciBpc09iamVjdCA9IHJlcXVpcmUoJy4vX2lzLW9iamVjdCcpO1xudmFyIGhhcyA9IHJlcXVpcmUoJy4vX2hhcycpO1xudmFyIHNldERlc2MgPSByZXF1aXJlKCcuL19vYmplY3QtZHAnKS5mO1xudmFyIGlkID0gMDtcbnZhciBpc0V4dGVuc2libGUgPSBPYmplY3QuaXNFeHRlbnNpYmxlIHx8IGZ1bmN0aW9uICgpIHtcbiAgcmV0dXJuIHRydWU7XG59O1xudmFyIEZSRUVaRSA9ICFyZXF1aXJlKCcuL19mYWlscycpKGZ1bmN0aW9uICgpIHtcbiAgcmV0dXJuIGlzRXh0ZW5zaWJsZShPYmplY3QucHJldmVudEV4dGVuc2lvbnMoe30pKTtcbn0pO1xudmFyIHNldE1ldGEgPSBmdW5jdGlvbiAoaXQpIHtcbiAgc2V0RGVzYyhpdCwgTUVUQSwgeyB2YWx1ZToge1xuICAgIGk6ICdPJyArICsraWQsIC8vIG9iamVjdCBJRFxuICAgIHc6IHt9ICAgICAgICAgIC8vIHdlYWsgY29sbGVjdGlvbnMgSURzXG4gIH0gfSk7XG59O1xudmFyIGZhc3RLZXkgPSBmdW5jdGlvbiAoaXQsIGNyZWF0ZSkge1xuICAvLyByZXR1cm4gcHJpbWl0aXZlIHdpdGggcHJlZml4XG4gIGlmICghaXNPYmplY3QoaXQpKSByZXR1cm4gdHlwZW9mIGl0ID09ICdzeW1ib2wnID8gaXQgOiAodHlwZW9mIGl0ID09ICdzdHJpbmcnID8gJ1MnIDogJ1AnKSArIGl0O1xuICBpZiAoIWhhcyhpdCwgTUVUQSkpIHtcbiAgICAvLyBjYW4ndCBzZXQgbWV0YWRhdGEgdG8gdW5jYXVnaHQgZnJvemVuIG9iamVjdFxuICAgIGlmICghaXNFeHRlbnNpYmxlKGl0KSkgcmV0dXJuICdGJztcbiAgICAvLyBub3QgbmVjZXNzYXJ5IHRvIGFkZCBtZXRhZGF0YVxuICAgIGlmICghY3JlYXRlKSByZXR1cm4gJ0UnO1xuICAgIC8vIGFkZCBtaXNzaW5nIG1ldGFkYXRhXG4gICAgc2V0TWV0YShpdCk7XG4gIC8vIHJldHVybiBvYmplY3QgSURcbiAgfSByZXR1cm4gaXRbTUVUQV0uaTtcbn07XG52YXIgZ2V0V2VhayA9IGZ1bmN0aW9uIChpdCwgY3JlYXRlKSB7XG4gIGlmICghaGFzKGl0LCBNRVRBKSkge1xuICAgIC8vIGNhbid0IHNldCBtZXRhZGF0YSB0byB1bmNhdWdodCBmcm96ZW4gb2JqZWN0XG4gICAgaWYgKCFpc0V4dGVuc2libGUoaXQpKSByZXR1cm4gdHJ1ZTtcbiAgICAvLyBub3QgbmVjZXNzYXJ5IHRvIGFkZCBtZXRhZGF0YVxuICAgIGlmICghY3JlYXRlKSByZXR1cm4gZmFsc2U7XG4gICAgLy8gYWRkIG1pc3NpbmcgbWV0YWRhdGFcbiAgICBzZXRNZXRhKGl0KTtcbiAgLy8gcmV0dXJuIGhhc2ggd2VhayBjb2xsZWN0aW9ucyBJRHNcbiAgfSByZXR1cm4gaXRbTUVUQV0udztcbn07XG4vLyBhZGQgbWV0YWRhdGEgb24gZnJlZXplLWZhbWlseSBtZXRob2RzIGNhbGxpbmdcbnZhciBvbkZyZWV6ZSA9IGZ1bmN0aW9uIChpdCkge1xuICBpZiAoRlJFRVpFICYmIG1ldGEuTkVFRCAmJiBpc0V4dGVuc2libGUoaXQpICYmICFoYXMoaXQsIE1FVEEpKSBzZXRNZXRhKGl0KTtcbiAgcmV0dXJuIGl0O1xufTtcbnZhciBtZXRhID0gbW9kdWxlLmV4cG9ydHMgPSB7XG4gIEtFWTogTUVUQSxcbiAgTkVFRDogZmFsc2UsXG4gIGZhc3RLZXk6IGZhc3RLZXksXG4gIGdldFdlYWs6IGdldFdlYWssXG4gIG9uRnJlZXplOiBvbkZyZWV6ZVxufTtcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vbm9kZV9tb2R1bGVzL19jb3JlLWpzQDIuNS4zQGNvcmUtanMvbGlicmFyeS9tb2R1bGVzL19tZXRhLmpzXG4vLyBtb2R1bGUgaWQgPSA1M1xuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJleHBvcnRzLmYgPSByZXF1aXJlKCcuL193a3MnKTtcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vbm9kZV9tb2R1bGVzL19jb3JlLWpzQDIuNS4zQGNvcmUtanMvbGlicmFyeS9tb2R1bGVzL193a3MtZXh0LmpzXG4vLyBtb2R1bGUgaWQgPSA1NFxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJ2YXIgZ2xvYmFsID0gcmVxdWlyZSgnLi9fZ2xvYmFsJyk7XG52YXIgY29yZSA9IHJlcXVpcmUoJy4vX2NvcmUnKTtcbnZhciBMSUJSQVJZID0gcmVxdWlyZSgnLi9fbGlicmFyeScpO1xudmFyIHdrc0V4dCA9IHJlcXVpcmUoJy4vX3drcy1leHQnKTtcbnZhciBkZWZpbmVQcm9wZXJ0eSA9IHJlcXVpcmUoJy4vX29iamVjdC1kcCcpLmY7XG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChuYW1lKSB7XG4gIHZhciAkU3ltYm9sID0gY29yZS5TeW1ib2wgfHwgKGNvcmUuU3ltYm9sID0gTElCUkFSWSA/IHt9IDogZ2xvYmFsLlN5bWJvbCB8fCB7fSk7XG4gIGlmIChuYW1lLmNoYXJBdCgwKSAhPSAnXycgJiYgIShuYW1lIGluICRTeW1ib2wpKSBkZWZpbmVQcm9wZXJ0eSgkU3ltYm9sLCBuYW1lLCB7IHZhbHVlOiB3a3NFeHQuZihuYW1lKSB9KTtcbn07XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL25vZGVfbW9kdWxlcy9fY29yZS1qc0AyLjUuM0Bjb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9fd2tzLWRlZmluZS5qc1xuLy8gbW9kdWxlIGlkID0gNTVcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiZXhwb3J0cy5mID0ge30ucHJvcGVydHlJc0VudW1lcmFibGU7XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL25vZGVfbW9kdWxlcy9fY29yZS1qc0AyLjUuM0Bjb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9fb2JqZWN0LXBpZS5qc1xuLy8gbW9kdWxlIGlkID0gNTZcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwidmFyIGlzT2JqZWN0ID0gcmVxdWlyZSgnLi9faXMtb2JqZWN0Jyk7XG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChpdCwgVFlQRSkge1xuICBpZiAoIWlzT2JqZWN0KGl0KSB8fCBpdC5fdCAhPT0gVFlQRSkgdGhyb3cgVHlwZUVycm9yKCdJbmNvbXBhdGlibGUgcmVjZWl2ZXIsICcgKyBUWVBFICsgJyByZXF1aXJlZCEnKTtcbiAgcmV0dXJuIGl0O1xufTtcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vbm9kZV9tb2R1bGVzL19jb3JlLWpzQDIuNS4zQGNvcmUtanMvbGlicmFyeS9tb2R1bGVzL192YWxpZGF0ZS1jb2xsZWN0aW9uLmpzXG4vLyBtb2R1bGUgaWQgPSA1N1xuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJpbXBvcnQge1RyYWl0fSBmcm9tICcuLi9FbnRpdHkuanMnXHJcblxyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBLaWxsYWJsZSBleHRlbmRzIFRyYWl0IHtcclxuICAgIGNvbnN0cnVjdG9yKCkge1xyXG4gICAgICAgIHN1cGVyKCdraWxsYWJsZScpO1xyXG4gICAgICAgIHRoaXMuZGVhZCA9IGZhbHNlO1xyXG4gICAgICAgIHRoaXMuZGVhZFRpbWUgPSAwO1xyXG4gICAgICAgIHRoaXMucmVtb3ZlQWZ0ZXIgPSAxO1xyXG4gICAgfVxyXG5cclxuICAgIGtpbGwoKSB7XHJcbiAgICAgICAgdGhpcy5xdWV1ZSgoKSA9PiB0aGlzLmRlYWQgPSB0cnVlKTtcclxuICAgIH1cclxuXHJcbiAgICByZXZpdmUoKSB7XHJcbiAgICAgICAgdGhpcy5kZWFkID0gZmFsc2U7XHJcbiAgICAgICAgdGhpcy5kZWFkVGltZSA9IDA7XHJcbiAgICB9XHJcblxyXG4gICAgdXBkYXRlKGVudGl0eSwgZGVsdGFUaW1lLCBsZXZlbCkge1xyXG4gICAgICAgIGlmICh0aGlzLmRlYWQpIHtcclxuICAgICAgICAgICAgdGhpcy5kZWFkVGltZSArPSBkZWx0YVRpbWU7XHJcbiAgICAgICAgICAgIGlmICh0aGlzLmRlYWRUaW1lID4gdGhpcy5yZW1vdmVBZnRlcikge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5xdWV1ZSgoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgbGV2ZWwuZW50aXRpZXMuZGVsZXRlKGVudGl0eSk7XHJcbiAgICAgICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59XHJcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3B1YmxpYy9qcy90cmFpdHMvS2lsbGFibGUuanMiLCJpbXBvcnQge1NpZGVzLCBUcmFpdH0gZnJvbSAnLi4vRW50aXR5LmpzJ1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgU29saWQgZXh0ZW5kcyBUcmFpdCB7XHJcbiAgICBjb25zdHJ1Y3RvcigpIHtcclxuICAgICAgICBzdXBlcignc29saWQnKTtcclxuICAgICAgICB0aGlzLm9ic3RydWN0cyA9dHJ1ZTtcclxuICAgIH1cclxuXHJcbiAgICBvYnN0cnVjdChlbnRpdHksIHNpZGVzLCBtYXRjaCkge1xyXG4gICAgICAgIGlmICghdGhpcy5vYnN0cnVjdHMpIHtcclxuICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgaWYgKHNpZGVzID09PSBTaWRlcy5CT1RUT00pIHtcclxuICAgICAgICAgICAgZW50aXR5LmJvdW5kcy50b3AgPSBtYXRjaC55MSAtIGVudGl0eS5zaXplLnk7XHJcbiAgICAgICAgICAgIGVudGl0eS52ZWwueSA9IDA7XHJcbiAgICAgICAgfSBlbHNlIGlmIChzaWRlcyA9PT0gU2lkZXMuVE9QKSB7XHJcbiAgICAgICAgICAgIGVudGl0eS5ib3VuZHMudG9wID0gbWF0Y2gueTI7XHJcbiAgICAgICAgICAgIGVudGl0eS52ZWwueSA9IDA7XHJcbiAgICAgICAgfSBlbHNlIGlmIChzaWRlcyA9PT0gU2lkZXMuTEVGVCkge1xyXG4gICAgICAgICAgICBlbnRpdHkuYm91bmRzLmxlZnQgPSBtYXRjaC54MSAtIGVudGl0eS5zaXplLng7XHJcbiAgICAgICAgICAgIGVudGl0eS52ZWwueCA9IDA7XHJcbiAgICAgICAgfSBlbHNlIGlmIChzaWRlcyA9PT0gU2lkZXMuUklHSFQpIHtcclxuICAgICAgICAgICAgZW50aXR5LmJvdW5kcy5sZWZ0ID0gbWF0Y2gueDI7XHJcbiAgICAgICAgICAgIGVudGl0eS52ZWwueCA9IDA7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59XHJcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3B1YmxpYy9qcy90cmFpdHMvU29saWQuanMiLCJpbXBvcnQge1NpZGVzLCBUcmFpdH0gZnJvbSAnLi4vRW50aXR5LmpzJ1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgUGh5c2ljcyBleHRlbmRzIFRyYWl0IHtcclxuICAgIGNvbnN0cnVjdG9yKCkge1xyXG4gICAgICAgIHN1cGVyKCdwaHlzaWNzJyk7XHJcbiAgICB9XHJcblxyXG4gICAgdXBkYXRlKGVudGl0eSwgZGVsdGFUaW1lLCBsZXZlbCkge1xyXG4gICAgICAgIGVudGl0eS5wb3MueCArPSBlbnRpdHkudmVsLnggKiBkZWx0YVRpbWU7XHJcbiAgICAgICAgbGV2ZWwudGlsZUNvbGxpZGVyLmNoZWNrWChlbnRpdHkpO1xyXG5cclxuICAgICAgICBlbnRpdHkucG9zLnkgKz0gZW50aXR5LnZlbC55ICogZGVsdGFUaW1lO1xyXG4gICAgICAgIGxldmVsLnRpbGVDb2xsaWRlci5jaGVja1koZW50aXR5KTtcclxuXHJcbiAgICAgICAgZW50aXR5LnZlbC55ICs9IGxldmVsLmdyYXZpdHkgKiBkZWx0YVRpbWU7XHJcbiAgICB9XHJcbn1cclxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vcHVibGljL2pzL3RyYWl0cy9QaHlzaWNzLmpzIiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicmVnZW5lcmF0b3ItcnVudGltZVwiKTtcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vbm9kZV9tb2R1bGVzL19iYWJlbC1ydW50aW1lQDYuMjYuMEBiYWJlbC1ydW50aW1lL3JlZ2VuZXJhdG9yL2luZGV4LmpzXG4vLyBtb2R1bGUgaWQgPSA2MVxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJtb2R1bGUuZXhwb3J0cyA9ICFyZXF1aXJlKCcuL19kZXNjcmlwdG9ycycpICYmICFyZXF1aXJlKCcuL19mYWlscycpKGZ1bmN0aW9uICgpIHtcbiAgcmV0dXJuIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShyZXF1aXJlKCcuL19kb20tY3JlYXRlJykoJ2RpdicpLCAnYScsIHsgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiA3OyB9IH0pLmEgIT0gNztcbn0pO1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9ub2RlX21vZHVsZXMvX2NvcmUtanNAMi41LjNAY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX2llOC1kb20tZGVmaW5lLmpzXG4vLyBtb2R1bGUgaWQgPSA2MlxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoJy4vX2hpZGUnKTtcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vbm9kZV9tb2R1bGVzL19jb3JlLWpzQDIuNS4zQGNvcmUtanMvbGlicmFyeS9tb2R1bGVzL19yZWRlZmluZS5qc1xuLy8gbW9kdWxlIGlkID0gNjNcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwidmFyIGhhcyA9IHJlcXVpcmUoJy4vX2hhcycpO1xudmFyIHRvSU9iamVjdCA9IHJlcXVpcmUoJy4vX3RvLWlvYmplY3QnKTtcbnZhciBhcnJheUluZGV4T2YgPSByZXF1aXJlKCcuL19hcnJheS1pbmNsdWRlcycpKGZhbHNlKTtcbnZhciBJRV9QUk9UTyA9IHJlcXVpcmUoJy4vX3NoYXJlZC1rZXknKSgnSUVfUFJPVE8nKTtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAob2JqZWN0LCBuYW1lcykge1xuICB2YXIgTyA9IHRvSU9iamVjdChvYmplY3QpO1xuICB2YXIgaSA9IDA7XG4gIHZhciByZXN1bHQgPSBbXTtcbiAgdmFyIGtleTtcbiAgZm9yIChrZXkgaW4gTykgaWYgKGtleSAhPSBJRV9QUk9UTykgaGFzKE8sIGtleSkgJiYgcmVzdWx0LnB1c2goa2V5KTtcbiAgLy8gRG9uJ3QgZW51bSBidWcgJiBoaWRkZW4ga2V5c1xuICB3aGlsZSAobmFtZXMubGVuZ3RoID4gaSkgaWYgKGhhcyhPLCBrZXkgPSBuYW1lc1tpKytdKSkge1xuICAgIH5hcnJheUluZGV4T2YocmVzdWx0LCBrZXkpIHx8IHJlc3VsdC5wdXNoKGtleSk7XG4gIH1cbiAgcmV0dXJuIHJlc3VsdDtcbn07XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL25vZGVfbW9kdWxlcy9fY29yZS1qc0AyLjUuM0Bjb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9fb2JqZWN0LWtleXMtaW50ZXJuYWwuanNcbi8vIG1vZHVsZSBpZCA9IDY0XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIi8vIGZhbGxiYWNrIGZvciBub24tYXJyYXktbGlrZSBFUzMgYW5kIG5vbi1lbnVtZXJhYmxlIG9sZCBWOCBzdHJpbmdzXG52YXIgY29mID0gcmVxdWlyZSgnLi9fY29mJyk7XG4vLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tcHJvdG90eXBlLWJ1aWx0aW5zXG5tb2R1bGUuZXhwb3J0cyA9IE9iamVjdCgneicpLnByb3BlcnR5SXNFbnVtZXJhYmxlKDApID8gT2JqZWN0IDogZnVuY3Rpb24gKGl0KSB7XG4gIHJldHVybiBjb2YoaXQpID09ICdTdHJpbmcnID8gaXQuc3BsaXQoJycpIDogT2JqZWN0KGl0KTtcbn07XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL25vZGVfbW9kdWxlcy9fY29yZS1qc0AyLjUuM0Bjb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9faW9iamVjdC5qc1xuLy8gbW9kdWxlIGlkID0gNjVcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwidmFyIGRvY3VtZW50ID0gcmVxdWlyZSgnLi9fZ2xvYmFsJykuZG9jdW1lbnQ7XG5tb2R1bGUuZXhwb3J0cyA9IGRvY3VtZW50ICYmIGRvY3VtZW50LmRvY3VtZW50RWxlbWVudDtcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vbm9kZV9tb2R1bGVzL19jb3JlLWpzQDIuNS4zQGNvcmUtanMvbGlicmFyeS9tb2R1bGVzL19odG1sLmpzXG4vLyBtb2R1bGUgaWQgPSA2NlxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCIvLyAxOS4xLjIuOSAvIDE1LjIuMy4yIE9iamVjdC5nZXRQcm90b3R5cGVPZihPKVxudmFyIGhhcyA9IHJlcXVpcmUoJy4vX2hhcycpO1xudmFyIHRvT2JqZWN0ID0gcmVxdWlyZSgnLi9fdG8tb2JqZWN0Jyk7XG52YXIgSUVfUFJPVE8gPSByZXF1aXJlKCcuL19zaGFyZWQta2V5JykoJ0lFX1BST1RPJyk7XG52YXIgT2JqZWN0UHJvdG8gPSBPYmplY3QucHJvdG90eXBlO1xuXG5tb2R1bGUuZXhwb3J0cyA9IE9iamVjdC5nZXRQcm90b3R5cGVPZiB8fCBmdW5jdGlvbiAoTykge1xuICBPID0gdG9PYmplY3QoTyk7XG4gIGlmIChoYXMoTywgSUVfUFJPVE8pKSByZXR1cm4gT1tJRV9QUk9UT107XG4gIGlmICh0eXBlb2YgTy5jb25zdHJ1Y3RvciA9PSAnZnVuY3Rpb24nICYmIE8gaW5zdGFuY2VvZiBPLmNvbnN0cnVjdG9yKSB7XG4gICAgcmV0dXJuIE8uY29uc3RydWN0b3IucHJvdG90eXBlO1xuICB9IHJldHVybiBPIGluc3RhbmNlb2YgT2JqZWN0ID8gT2JqZWN0UHJvdG8gOiBudWxsO1xufTtcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vbm9kZV9tb2R1bGVzL19jb3JlLWpzQDIuNS4zQGNvcmUtanMvbGlicmFyeS9tb2R1bGVzL19vYmplY3QtZ3BvLmpzXG4vLyBtb2R1bGUgaWQgPSA2N1xuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJtb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChkb25lLCB2YWx1ZSkge1xuICByZXR1cm4geyB2YWx1ZTogdmFsdWUsIGRvbmU6ICEhZG9uZSB9O1xufTtcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vbm9kZV9tb2R1bGVzL19jb3JlLWpzQDIuNS4zQGNvcmUtanMvbGlicmFyeS9tb2R1bGVzL19pdGVyLXN0ZXAuanNcbi8vIG1vZHVsZSBpZCA9IDY4XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIi8vIGNhbGwgc29tZXRoaW5nIG9uIGl0ZXJhdG9yIHN0ZXAgd2l0aCBzYWZlIGNsb3Npbmcgb24gZXJyb3JcbnZhciBhbk9iamVjdCA9IHJlcXVpcmUoJy4vX2FuLW9iamVjdCcpO1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoaXRlcmF0b3IsIGZuLCB2YWx1ZSwgZW50cmllcykge1xuICB0cnkge1xuICAgIHJldHVybiBlbnRyaWVzID8gZm4oYW5PYmplY3QodmFsdWUpWzBdLCB2YWx1ZVsxXSkgOiBmbih2YWx1ZSk7XG4gIC8vIDcuNC42IEl0ZXJhdG9yQ2xvc2UoaXRlcmF0b3IsIGNvbXBsZXRpb24pXG4gIH0gY2F0Y2ggKGUpIHtcbiAgICB2YXIgcmV0ID0gaXRlcmF0b3JbJ3JldHVybiddO1xuICAgIGlmIChyZXQgIT09IHVuZGVmaW5lZCkgYW5PYmplY3QocmV0LmNhbGwoaXRlcmF0b3IpKTtcbiAgICB0aHJvdyBlO1xuICB9XG59O1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9ub2RlX21vZHVsZXMvX2NvcmUtanNAMi41LjNAY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX2l0ZXItY2FsbC5qc1xuLy8gbW9kdWxlIGlkID0gNjlcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiLy8gY2hlY2sgb24gZGVmYXVsdCBBcnJheSBpdGVyYXRvclxudmFyIEl0ZXJhdG9ycyA9IHJlcXVpcmUoJy4vX2l0ZXJhdG9ycycpO1xudmFyIElURVJBVE9SID0gcmVxdWlyZSgnLi9fd2tzJykoJ2l0ZXJhdG9yJyk7XG52YXIgQXJyYXlQcm90byA9IEFycmF5LnByb3RvdHlwZTtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoaXQpIHtcbiAgcmV0dXJuIGl0ICE9PSB1bmRlZmluZWQgJiYgKEl0ZXJhdG9ycy5BcnJheSA9PT0gaXQgfHwgQXJyYXlQcm90b1tJVEVSQVRPUl0gPT09IGl0KTtcbn07XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL25vZGVfbW9kdWxlcy9fY29yZS1qc0AyLjUuM0Bjb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9faXMtYXJyYXktaXRlci5qc1xuLy8gbW9kdWxlIGlkID0gNzBcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiLy8gNy4zLjIwIFNwZWNpZXNDb25zdHJ1Y3RvcihPLCBkZWZhdWx0Q29uc3RydWN0b3IpXG52YXIgYW5PYmplY3QgPSByZXF1aXJlKCcuL19hbi1vYmplY3QnKTtcbnZhciBhRnVuY3Rpb24gPSByZXF1aXJlKCcuL19hLWZ1bmN0aW9uJyk7XG52YXIgU1BFQ0lFUyA9IHJlcXVpcmUoJy4vX3drcycpKCdzcGVjaWVzJyk7XG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChPLCBEKSB7XG4gIHZhciBDID0gYW5PYmplY3QoTykuY29uc3RydWN0b3I7XG4gIHZhciBTO1xuICByZXR1cm4gQyA9PT0gdW5kZWZpbmVkIHx8IChTID0gYW5PYmplY3QoQylbU1BFQ0lFU10pID09IHVuZGVmaW5lZCA/IEQgOiBhRnVuY3Rpb24oUyk7XG59O1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9ub2RlX21vZHVsZXMvX2NvcmUtanNAMi41LjNAY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX3NwZWNpZXMtY29uc3RydWN0b3IuanNcbi8vIG1vZHVsZSBpZCA9IDcxXG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsInZhciBjdHggPSByZXF1aXJlKCcuL19jdHgnKTtcbnZhciBpbnZva2UgPSByZXF1aXJlKCcuL19pbnZva2UnKTtcbnZhciBodG1sID0gcmVxdWlyZSgnLi9faHRtbCcpO1xudmFyIGNlbCA9IHJlcXVpcmUoJy4vX2RvbS1jcmVhdGUnKTtcbnZhciBnbG9iYWwgPSByZXF1aXJlKCcuL19nbG9iYWwnKTtcbnZhciBwcm9jZXNzID0gZ2xvYmFsLnByb2Nlc3M7XG52YXIgc2V0VGFzayA9IGdsb2JhbC5zZXRJbW1lZGlhdGU7XG52YXIgY2xlYXJUYXNrID0gZ2xvYmFsLmNsZWFySW1tZWRpYXRlO1xudmFyIE1lc3NhZ2VDaGFubmVsID0gZ2xvYmFsLk1lc3NhZ2VDaGFubmVsO1xudmFyIERpc3BhdGNoID0gZ2xvYmFsLkRpc3BhdGNoO1xudmFyIGNvdW50ZXIgPSAwO1xudmFyIHF1ZXVlID0ge307XG52YXIgT05SRUFEWVNUQVRFQ0hBTkdFID0gJ29ucmVhZHlzdGF0ZWNoYW5nZSc7XG52YXIgZGVmZXIsIGNoYW5uZWwsIHBvcnQ7XG52YXIgcnVuID0gZnVuY3Rpb24gKCkge1xuICB2YXIgaWQgPSArdGhpcztcbiAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLXByb3RvdHlwZS1idWlsdGluc1xuICBpZiAocXVldWUuaGFzT3duUHJvcGVydHkoaWQpKSB7XG4gICAgdmFyIGZuID0gcXVldWVbaWRdO1xuICAgIGRlbGV0ZSBxdWV1ZVtpZF07XG4gICAgZm4oKTtcbiAgfVxufTtcbnZhciBsaXN0ZW5lciA9IGZ1bmN0aW9uIChldmVudCkge1xuICBydW4uY2FsbChldmVudC5kYXRhKTtcbn07XG4vLyBOb2RlLmpzIDAuOSsgJiBJRTEwKyBoYXMgc2V0SW1tZWRpYXRlLCBvdGhlcndpc2U6XG5pZiAoIXNldFRhc2sgfHwgIWNsZWFyVGFzaykge1xuICBzZXRUYXNrID0gZnVuY3Rpb24gc2V0SW1tZWRpYXRlKGZuKSB7XG4gICAgdmFyIGFyZ3MgPSBbXTtcbiAgICB2YXIgaSA9IDE7XG4gICAgd2hpbGUgKGFyZ3VtZW50cy5sZW5ndGggPiBpKSBhcmdzLnB1c2goYXJndW1lbnRzW2krK10pO1xuICAgIHF1ZXVlWysrY291bnRlcl0gPSBmdW5jdGlvbiAoKSB7XG4gICAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tbmV3LWZ1bmNcbiAgICAgIGludm9rZSh0eXBlb2YgZm4gPT0gJ2Z1bmN0aW9uJyA/IGZuIDogRnVuY3Rpb24oZm4pLCBhcmdzKTtcbiAgICB9O1xuICAgIGRlZmVyKGNvdW50ZXIpO1xuICAgIHJldHVybiBjb3VudGVyO1xuICB9O1xuICBjbGVhclRhc2sgPSBmdW5jdGlvbiBjbGVhckltbWVkaWF0ZShpZCkge1xuICAgIGRlbGV0ZSBxdWV1ZVtpZF07XG4gIH07XG4gIC8vIE5vZGUuanMgMC44LVxuICBpZiAocmVxdWlyZSgnLi9fY29mJykocHJvY2VzcykgPT0gJ3Byb2Nlc3MnKSB7XG4gICAgZGVmZXIgPSBmdW5jdGlvbiAoaWQpIHtcbiAgICAgIHByb2Nlc3MubmV4dFRpY2soY3R4KHJ1biwgaWQsIDEpKTtcbiAgICB9O1xuICAvLyBTcGhlcmUgKEpTIGdhbWUgZW5naW5lKSBEaXNwYXRjaCBBUElcbiAgfSBlbHNlIGlmIChEaXNwYXRjaCAmJiBEaXNwYXRjaC5ub3cpIHtcbiAgICBkZWZlciA9IGZ1bmN0aW9uIChpZCkge1xuICAgICAgRGlzcGF0Y2gubm93KGN0eChydW4sIGlkLCAxKSk7XG4gICAgfTtcbiAgLy8gQnJvd3NlcnMgd2l0aCBNZXNzYWdlQ2hhbm5lbCwgaW5jbHVkZXMgV2ViV29ya2Vyc1xuICB9IGVsc2UgaWYgKE1lc3NhZ2VDaGFubmVsKSB7XG4gICAgY2hhbm5lbCA9IG5ldyBNZXNzYWdlQ2hhbm5lbCgpO1xuICAgIHBvcnQgPSBjaGFubmVsLnBvcnQyO1xuICAgIGNoYW5uZWwucG9ydDEub25tZXNzYWdlID0gbGlzdGVuZXI7XG4gICAgZGVmZXIgPSBjdHgocG9ydC5wb3N0TWVzc2FnZSwgcG9ydCwgMSk7XG4gIC8vIEJyb3dzZXJzIHdpdGggcG9zdE1lc3NhZ2UsIHNraXAgV2ViV29ya2Vyc1xuICAvLyBJRTggaGFzIHBvc3RNZXNzYWdlLCBidXQgaXQncyBzeW5jICYgdHlwZW9mIGl0cyBwb3N0TWVzc2FnZSBpcyAnb2JqZWN0J1xuICB9IGVsc2UgaWYgKGdsb2JhbC5hZGRFdmVudExpc3RlbmVyICYmIHR5cGVvZiBwb3N0TWVzc2FnZSA9PSAnZnVuY3Rpb24nICYmICFnbG9iYWwuaW1wb3J0U2NyaXB0cykge1xuICAgIGRlZmVyID0gZnVuY3Rpb24gKGlkKSB7XG4gICAgICBnbG9iYWwucG9zdE1lc3NhZ2UoaWQgKyAnJywgJyonKTtcbiAgICB9O1xuICAgIGdsb2JhbC5hZGRFdmVudExpc3RlbmVyKCdtZXNzYWdlJywgbGlzdGVuZXIsIGZhbHNlKTtcbiAgLy8gSUU4LVxuICB9IGVsc2UgaWYgKE9OUkVBRFlTVEFURUNIQU5HRSBpbiBjZWwoJ3NjcmlwdCcpKSB7XG4gICAgZGVmZXIgPSBmdW5jdGlvbiAoaWQpIHtcbiAgICAgIGh0bWwuYXBwZW5kQ2hpbGQoY2VsKCdzY3JpcHQnKSlbT05SRUFEWVNUQVRFQ0hBTkdFXSA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgaHRtbC5yZW1vdmVDaGlsZCh0aGlzKTtcbiAgICAgICAgcnVuLmNhbGwoaWQpO1xuICAgICAgfTtcbiAgICB9O1xuICAvLyBSZXN0IG9sZCBicm93c2Vyc1xuICB9IGVsc2Uge1xuICAgIGRlZmVyID0gZnVuY3Rpb24gKGlkKSB7XG4gICAgICBzZXRUaW1lb3V0KGN0eChydW4sIGlkLCAxKSwgMCk7XG4gICAgfTtcbiAgfVxufVxubW9kdWxlLmV4cG9ydHMgPSB7XG4gIHNldDogc2V0VGFzayxcbiAgY2xlYXI6IGNsZWFyVGFza1xufTtcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vbm9kZV9tb2R1bGVzL19jb3JlLWpzQDIuNS4zQGNvcmUtanMvbGlicmFyeS9tb2R1bGVzL190YXNrLmpzXG4vLyBtb2R1bGUgaWQgPSA3MlxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJtb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChleGVjKSB7XG4gIHRyeSB7XG4gICAgcmV0dXJuIHsgZTogZmFsc2UsIHY6IGV4ZWMoKSB9O1xuICB9IGNhdGNoIChlKSB7XG4gICAgcmV0dXJuIHsgZTogdHJ1ZSwgdjogZSB9O1xuICB9XG59O1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9ub2RlX21vZHVsZXMvX2NvcmUtanNAMi41LjNAY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX3BlcmZvcm0uanNcbi8vIG1vZHVsZSBpZCA9IDczXG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsInZhciBhbk9iamVjdCA9IHJlcXVpcmUoJy4vX2FuLW9iamVjdCcpO1xudmFyIGlzT2JqZWN0ID0gcmVxdWlyZSgnLi9faXMtb2JqZWN0Jyk7XG52YXIgbmV3UHJvbWlzZUNhcGFiaWxpdHkgPSByZXF1aXJlKCcuL19uZXctcHJvbWlzZS1jYXBhYmlsaXR5Jyk7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKEMsIHgpIHtcbiAgYW5PYmplY3QoQyk7XG4gIGlmIChpc09iamVjdCh4KSAmJiB4LmNvbnN0cnVjdG9yID09PSBDKSByZXR1cm4geDtcbiAgdmFyIHByb21pc2VDYXBhYmlsaXR5ID0gbmV3UHJvbWlzZUNhcGFiaWxpdHkuZihDKTtcbiAgdmFyIHJlc29sdmUgPSBwcm9taXNlQ2FwYWJpbGl0eS5yZXNvbHZlO1xuICByZXNvbHZlKHgpO1xuICByZXR1cm4gcHJvbWlzZUNhcGFiaWxpdHkucHJvbWlzZTtcbn07XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL25vZGVfbW9kdWxlcy9fY29yZS1qc0AyLjUuM0Bjb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9fcHJvbWlzZS1yZXNvbHZlLmpzXG4vLyBtb2R1bGUgaWQgPSA3NFxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCIndXNlIHN0cmljdCc7XG52YXIgZ2xvYmFsID0gcmVxdWlyZSgnLi9fZ2xvYmFsJyk7XG52YXIgY29yZSA9IHJlcXVpcmUoJy4vX2NvcmUnKTtcbnZhciBkUCA9IHJlcXVpcmUoJy4vX29iamVjdC1kcCcpO1xudmFyIERFU0NSSVBUT1JTID0gcmVxdWlyZSgnLi9fZGVzY3JpcHRvcnMnKTtcbnZhciBTUEVDSUVTID0gcmVxdWlyZSgnLi9fd2tzJykoJ3NwZWNpZXMnKTtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoS0VZKSB7XG4gIHZhciBDID0gdHlwZW9mIGNvcmVbS0VZXSA9PSAnZnVuY3Rpb24nID8gY29yZVtLRVldIDogZ2xvYmFsW0tFWV07XG4gIGlmIChERVNDUklQVE9SUyAmJiBDICYmICFDW1NQRUNJRVNdKSBkUC5mKEMsIFNQRUNJRVMsIHtcbiAgICBjb25maWd1cmFibGU6IHRydWUsXG4gICAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiB0aGlzOyB9XG4gIH0pO1xufTtcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vbm9kZV9tb2R1bGVzL19jb3JlLWpzQDIuNS4zQGNvcmUtanMvbGlicmFyeS9tb2R1bGVzL19zZXQtc3BlY2llcy5qc1xuLy8gbW9kdWxlIGlkID0gNzVcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwidmFyIElURVJBVE9SID0gcmVxdWlyZSgnLi9fd2tzJykoJ2l0ZXJhdG9yJyk7XG52YXIgU0FGRV9DTE9TSU5HID0gZmFsc2U7XG5cbnRyeSB7XG4gIHZhciByaXRlciA9IFs3XVtJVEVSQVRPUl0oKTtcbiAgcml0ZXJbJ3JldHVybiddID0gZnVuY3Rpb24gKCkgeyBTQUZFX0NMT1NJTkcgPSB0cnVlOyB9O1xuICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tdGhyb3ctbGl0ZXJhbFxuICBBcnJheS5mcm9tKHJpdGVyLCBmdW5jdGlvbiAoKSB7IHRocm93IDI7IH0pO1xufSBjYXRjaCAoZSkgeyAvKiBlbXB0eSAqLyB9XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGV4ZWMsIHNraXBDbG9zaW5nKSB7XG4gIGlmICghc2tpcENsb3NpbmcgJiYgIVNBRkVfQ0xPU0lORykgcmV0dXJuIGZhbHNlO1xuICB2YXIgc2FmZSA9IGZhbHNlO1xuICB0cnkge1xuICAgIHZhciBhcnIgPSBbN107XG4gICAgdmFyIGl0ZXIgPSBhcnJbSVRFUkFUT1JdKCk7XG4gICAgaXRlci5uZXh0ID0gZnVuY3Rpb24gKCkgeyByZXR1cm4geyBkb25lOiBzYWZlID0gdHJ1ZSB9OyB9O1xuICAgIGFycltJVEVSQVRPUl0gPSBmdW5jdGlvbiAoKSB7IHJldHVybiBpdGVyOyB9O1xuICAgIGV4ZWMoYXJyKTtcbiAgfSBjYXRjaCAoZSkgeyAvKiBlbXB0eSAqLyB9XG4gIHJldHVybiBzYWZlO1xufTtcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vbm9kZV9tb2R1bGVzL19jb3JlLWpzQDIuNS4zQGNvcmUtanMvbGlicmFyeS9tb2R1bGVzL19pdGVyLWRldGVjdC5qc1xuLy8gbW9kdWxlIGlkID0gNzZcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiZXhwb3J0cy5mID0gT2JqZWN0LmdldE93blByb3BlcnR5U3ltYm9scztcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vbm9kZV9tb2R1bGVzL19jb3JlLWpzQDIuNS4zQGNvcmUtanMvbGlicmFyeS9tb2R1bGVzL19vYmplY3QtZ29wcy5qc1xuLy8gbW9kdWxlIGlkID0gNzdcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiLy8gNy4yLjIgSXNBcnJheShhcmd1bWVudClcbnZhciBjb2YgPSByZXF1aXJlKCcuL19jb2YnKTtcbm1vZHVsZS5leHBvcnRzID0gQXJyYXkuaXNBcnJheSB8fCBmdW5jdGlvbiBpc0FycmF5KGFyZykge1xuICByZXR1cm4gY29mKGFyZykgPT0gJ0FycmF5Jztcbn07XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL25vZGVfbW9kdWxlcy9fY29yZS1qc0AyLjUuM0Bjb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9faXMtYXJyYXkuanNcbi8vIG1vZHVsZSBpZCA9IDc4XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIi8vIDE5LjEuMi43IC8gMTUuMi4zLjQgT2JqZWN0LmdldE93blByb3BlcnR5TmFtZXMoTylcbnZhciAka2V5cyA9IHJlcXVpcmUoJy4vX29iamVjdC1rZXlzLWludGVybmFsJyk7XG52YXIgaGlkZGVuS2V5cyA9IHJlcXVpcmUoJy4vX2VudW0tYnVnLWtleXMnKS5jb25jYXQoJ2xlbmd0aCcsICdwcm90b3R5cGUnKTtcblxuZXhwb3J0cy5mID0gT2JqZWN0LmdldE93blByb3BlcnR5TmFtZXMgfHwgZnVuY3Rpb24gZ2V0T3duUHJvcGVydHlOYW1lcyhPKSB7XG4gIHJldHVybiAka2V5cyhPLCBoaWRkZW5LZXlzKTtcbn07XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL25vZGVfbW9kdWxlcy9fY29yZS1qc0AyLjUuM0Bjb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9fb2JqZWN0LWdvcG4uanNcbi8vIG1vZHVsZSBpZCA9IDc5XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsInZhciBwSUUgPSByZXF1aXJlKCcuL19vYmplY3QtcGllJyk7XG52YXIgY3JlYXRlRGVzYyA9IHJlcXVpcmUoJy4vX3Byb3BlcnR5LWRlc2MnKTtcbnZhciB0b0lPYmplY3QgPSByZXF1aXJlKCcuL190by1pb2JqZWN0Jyk7XG52YXIgdG9QcmltaXRpdmUgPSByZXF1aXJlKCcuL190by1wcmltaXRpdmUnKTtcbnZhciBoYXMgPSByZXF1aXJlKCcuL19oYXMnKTtcbnZhciBJRThfRE9NX0RFRklORSA9IHJlcXVpcmUoJy4vX2llOC1kb20tZGVmaW5lJyk7XG52YXIgZ09QRCA9IE9iamVjdC5nZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3I7XG5cbmV4cG9ydHMuZiA9IHJlcXVpcmUoJy4vX2Rlc2NyaXB0b3JzJykgPyBnT1BEIDogZnVuY3Rpb24gZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yKE8sIFApIHtcbiAgTyA9IHRvSU9iamVjdChPKTtcbiAgUCA9IHRvUHJpbWl0aXZlKFAsIHRydWUpO1xuICBpZiAoSUU4X0RPTV9ERUZJTkUpIHRyeSB7XG4gICAgcmV0dXJuIGdPUEQoTywgUCk7XG4gIH0gY2F0Y2ggKGUpIHsgLyogZW1wdHkgKi8gfVxuICBpZiAoaGFzKE8sIFApKSByZXR1cm4gY3JlYXRlRGVzYyghcElFLmYuY2FsbChPLCBQKSwgT1tQXSk7XG59O1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9ub2RlX21vZHVsZXMvX2NvcmUtanNAMi41LjNAY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX29iamVjdC1nb3BkLmpzXG4vLyBtb2R1bGUgaWQgPSA4MFxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJcInVzZSBzdHJpY3RcIjtcblxuZXhwb3J0cy5fX2VzTW9kdWxlID0gdHJ1ZTtcblxudmFyIF9pdGVyYXRvciA9IHJlcXVpcmUoXCIuLi9jb3JlLWpzL3N5bWJvbC9pdGVyYXRvclwiKTtcblxudmFyIF9pdGVyYXRvcjIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9pdGVyYXRvcik7XG5cbnZhciBfc3ltYm9sID0gcmVxdWlyZShcIi4uL2NvcmUtanMvc3ltYm9sXCIpO1xuXG52YXIgX3N5bWJvbDIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9zeW1ib2wpO1xuXG52YXIgX3R5cGVvZiA9IHR5cGVvZiBfc3ltYm9sMi5kZWZhdWx0ID09PSBcImZ1bmN0aW9uXCIgJiYgdHlwZW9mIF9pdGVyYXRvcjIuZGVmYXVsdCA9PT0gXCJzeW1ib2xcIiA/IGZ1bmN0aW9uIChvYmopIHsgcmV0dXJuIHR5cGVvZiBvYmo7IH0gOiBmdW5jdGlvbiAob2JqKSB7IHJldHVybiBvYmogJiYgdHlwZW9mIF9zeW1ib2wyLmRlZmF1bHQgPT09IFwiZnVuY3Rpb25cIiAmJiBvYmouY29uc3RydWN0b3IgPT09IF9zeW1ib2wyLmRlZmF1bHQgJiYgb2JqICE9PSBfc3ltYm9sMi5kZWZhdWx0LnByb3RvdHlwZSA/IFwic3ltYm9sXCIgOiB0eXBlb2Ygb2JqOyB9O1xuXG5mdW5jdGlvbiBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KG9iaikgeyByZXR1cm4gb2JqICYmIG9iai5fX2VzTW9kdWxlID8gb2JqIDogeyBkZWZhdWx0OiBvYmogfTsgfVxuXG5leHBvcnRzLmRlZmF1bHQgPSB0eXBlb2YgX3N5bWJvbDIuZGVmYXVsdCA9PT0gXCJmdW5jdGlvblwiICYmIF90eXBlb2YoX2l0ZXJhdG9yMi5kZWZhdWx0KSA9PT0gXCJzeW1ib2xcIiA/IGZ1bmN0aW9uIChvYmopIHtcbiAgcmV0dXJuIHR5cGVvZiBvYmogPT09IFwidW5kZWZpbmVkXCIgPyBcInVuZGVmaW5lZFwiIDogX3R5cGVvZihvYmopO1xufSA6IGZ1bmN0aW9uIChvYmopIHtcbiAgcmV0dXJuIG9iaiAmJiB0eXBlb2YgX3N5bWJvbDIuZGVmYXVsdCA9PT0gXCJmdW5jdGlvblwiICYmIG9iai5jb25zdHJ1Y3RvciA9PT0gX3N5bWJvbDIuZGVmYXVsdCAmJiBvYmogIT09IF9zeW1ib2wyLmRlZmF1bHQucHJvdG90eXBlID8gXCJzeW1ib2xcIiA6IHR5cGVvZiBvYmogPT09IFwidW5kZWZpbmVkXCIgPyBcInVuZGVmaW5lZFwiIDogX3R5cGVvZihvYmopO1xufTtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL25vZGVfbW9kdWxlcy9fYmFiZWwtcnVudGltZUA2LjI2LjBAYmFiZWwtcnVudGltZS9oZWxwZXJzL3R5cGVvZi5qc1xuLy8gbW9kdWxlIGlkID0gODFcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiJ3VzZSBzdHJpY3QnO1xudmFyIGRQID0gcmVxdWlyZSgnLi9fb2JqZWN0LWRwJykuZjtcbnZhciBjcmVhdGUgPSByZXF1aXJlKCcuL19vYmplY3QtY3JlYXRlJyk7XG52YXIgcmVkZWZpbmVBbGwgPSByZXF1aXJlKCcuL19yZWRlZmluZS1hbGwnKTtcbnZhciBjdHggPSByZXF1aXJlKCcuL19jdHgnKTtcbnZhciBhbkluc3RhbmNlID0gcmVxdWlyZSgnLi9fYW4taW5zdGFuY2UnKTtcbnZhciBmb3JPZiA9IHJlcXVpcmUoJy4vX2Zvci1vZicpO1xudmFyICRpdGVyRGVmaW5lID0gcmVxdWlyZSgnLi9faXRlci1kZWZpbmUnKTtcbnZhciBzdGVwID0gcmVxdWlyZSgnLi9faXRlci1zdGVwJyk7XG52YXIgc2V0U3BlY2llcyA9IHJlcXVpcmUoJy4vX3NldC1zcGVjaWVzJyk7XG52YXIgREVTQ1JJUFRPUlMgPSByZXF1aXJlKCcuL19kZXNjcmlwdG9ycycpO1xudmFyIGZhc3RLZXkgPSByZXF1aXJlKCcuL19tZXRhJykuZmFzdEtleTtcbnZhciB2YWxpZGF0ZSA9IHJlcXVpcmUoJy4vX3ZhbGlkYXRlLWNvbGxlY3Rpb24nKTtcbnZhciBTSVpFID0gREVTQ1JJUFRPUlMgPyAnX3MnIDogJ3NpemUnO1xuXG52YXIgZ2V0RW50cnkgPSBmdW5jdGlvbiAodGhhdCwga2V5KSB7XG4gIC8vIGZhc3QgY2FzZVxuICB2YXIgaW5kZXggPSBmYXN0S2V5KGtleSk7XG4gIHZhciBlbnRyeTtcbiAgaWYgKGluZGV4ICE9PSAnRicpIHJldHVybiB0aGF0Ll9pW2luZGV4XTtcbiAgLy8gZnJvemVuIG9iamVjdCBjYXNlXG4gIGZvciAoZW50cnkgPSB0aGF0Ll9mOyBlbnRyeTsgZW50cnkgPSBlbnRyeS5uKSB7XG4gICAgaWYgKGVudHJ5LmsgPT0ga2V5KSByZXR1cm4gZW50cnk7XG4gIH1cbn07XG5cbm1vZHVsZS5leHBvcnRzID0ge1xuICBnZXRDb25zdHJ1Y3RvcjogZnVuY3Rpb24gKHdyYXBwZXIsIE5BTUUsIElTX01BUCwgQURERVIpIHtcbiAgICB2YXIgQyA9IHdyYXBwZXIoZnVuY3Rpb24gKHRoYXQsIGl0ZXJhYmxlKSB7XG4gICAgICBhbkluc3RhbmNlKHRoYXQsIEMsIE5BTUUsICdfaScpO1xuICAgICAgdGhhdC5fdCA9IE5BTUU7ICAgICAgICAgLy8gY29sbGVjdGlvbiB0eXBlXG4gICAgICB0aGF0Ll9pID0gY3JlYXRlKG51bGwpOyAvLyBpbmRleFxuICAgICAgdGhhdC5fZiA9IHVuZGVmaW5lZDsgICAgLy8gZmlyc3QgZW50cnlcbiAgICAgIHRoYXQuX2wgPSB1bmRlZmluZWQ7ICAgIC8vIGxhc3QgZW50cnlcbiAgICAgIHRoYXRbU0laRV0gPSAwOyAgICAgICAgIC8vIHNpemVcbiAgICAgIGlmIChpdGVyYWJsZSAhPSB1bmRlZmluZWQpIGZvck9mKGl0ZXJhYmxlLCBJU19NQVAsIHRoYXRbQURERVJdLCB0aGF0KTtcbiAgICB9KTtcbiAgICByZWRlZmluZUFsbChDLnByb3RvdHlwZSwge1xuICAgICAgLy8gMjMuMS4zLjEgTWFwLnByb3RvdHlwZS5jbGVhcigpXG4gICAgICAvLyAyMy4yLjMuMiBTZXQucHJvdG90eXBlLmNsZWFyKClcbiAgICAgIGNsZWFyOiBmdW5jdGlvbiBjbGVhcigpIHtcbiAgICAgICAgZm9yICh2YXIgdGhhdCA9IHZhbGlkYXRlKHRoaXMsIE5BTUUpLCBkYXRhID0gdGhhdC5faSwgZW50cnkgPSB0aGF0Ll9mOyBlbnRyeTsgZW50cnkgPSBlbnRyeS5uKSB7XG4gICAgICAgICAgZW50cnkuciA9IHRydWU7XG4gICAgICAgICAgaWYgKGVudHJ5LnApIGVudHJ5LnAgPSBlbnRyeS5wLm4gPSB1bmRlZmluZWQ7XG4gICAgICAgICAgZGVsZXRlIGRhdGFbZW50cnkuaV07XG4gICAgICAgIH1cbiAgICAgICAgdGhhdC5fZiA9IHRoYXQuX2wgPSB1bmRlZmluZWQ7XG4gICAgICAgIHRoYXRbU0laRV0gPSAwO1xuICAgICAgfSxcbiAgICAgIC8vIDIzLjEuMy4zIE1hcC5wcm90b3R5cGUuZGVsZXRlKGtleSlcbiAgICAgIC8vIDIzLjIuMy40IFNldC5wcm90b3R5cGUuZGVsZXRlKHZhbHVlKVxuICAgICAgJ2RlbGV0ZSc6IGZ1bmN0aW9uIChrZXkpIHtcbiAgICAgICAgdmFyIHRoYXQgPSB2YWxpZGF0ZSh0aGlzLCBOQU1FKTtcbiAgICAgICAgdmFyIGVudHJ5ID0gZ2V0RW50cnkodGhhdCwga2V5KTtcbiAgICAgICAgaWYgKGVudHJ5KSB7XG4gICAgICAgICAgdmFyIG5leHQgPSBlbnRyeS5uO1xuICAgICAgICAgIHZhciBwcmV2ID0gZW50cnkucDtcbiAgICAgICAgICBkZWxldGUgdGhhdC5faVtlbnRyeS5pXTtcbiAgICAgICAgICBlbnRyeS5yID0gdHJ1ZTtcbiAgICAgICAgICBpZiAocHJldikgcHJldi5uID0gbmV4dDtcbiAgICAgICAgICBpZiAobmV4dCkgbmV4dC5wID0gcHJldjtcbiAgICAgICAgICBpZiAodGhhdC5fZiA9PSBlbnRyeSkgdGhhdC5fZiA9IG5leHQ7XG4gICAgICAgICAgaWYgKHRoYXQuX2wgPT0gZW50cnkpIHRoYXQuX2wgPSBwcmV2O1xuICAgICAgICAgIHRoYXRbU0laRV0tLTtcbiAgICAgICAgfSByZXR1cm4gISFlbnRyeTtcbiAgICAgIH0sXG4gICAgICAvLyAyMy4yLjMuNiBTZXQucHJvdG90eXBlLmZvckVhY2goY2FsbGJhY2tmbiwgdGhpc0FyZyA9IHVuZGVmaW5lZClcbiAgICAgIC8vIDIzLjEuMy41IE1hcC5wcm90b3R5cGUuZm9yRWFjaChjYWxsYmFja2ZuLCB0aGlzQXJnID0gdW5kZWZpbmVkKVxuICAgICAgZm9yRWFjaDogZnVuY3Rpb24gZm9yRWFjaChjYWxsYmFja2ZuIC8qICwgdGhhdCA9IHVuZGVmaW5lZCAqLykge1xuICAgICAgICB2YWxpZGF0ZSh0aGlzLCBOQU1FKTtcbiAgICAgICAgdmFyIGYgPSBjdHgoY2FsbGJhY2tmbiwgYXJndW1lbnRzLmxlbmd0aCA+IDEgPyBhcmd1bWVudHNbMV0gOiB1bmRlZmluZWQsIDMpO1xuICAgICAgICB2YXIgZW50cnk7XG4gICAgICAgIHdoaWxlIChlbnRyeSA9IGVudHJ5ID8gZW50cnkubiA6IHRoaXMuX2YpIHtcbiAgICAgICAgICBmKGVudHJ5LnYsIGVudHJ5LmssIHRoaXMpO1xuICAgICAgICAgIC8vIHJldmVydCB0byB0aGUgbGFzdCBleGlzdGluZyBlbnRyeVxuICAgICAgICAgIHdoaWxlIChlbnRyeSAmJiBlbnRyeS5yKSBlbnRyeSA9IGVudHJ5LnA7XG4gICAgICAgIH1cbiAgICAgIH0sXG4gICAgICAvLyAyMy4xLjMuNyBNYXAucHJvdG90eXBlLmhhcyhrZXkpXG4gICAgICAvLyAyMy4yLjMuNyBTZXQucHJvdG90eXBlLmhhcyh2YWx1ZSlcbiAgICAgIGhhczogZnVuY3Rpb24gaGFzKGtleSkge1xuICAgICAgICByZXR1cm4gISFnZXRFbnRyeSh2YWxpZGF0ZSh0aGlzLCBOQU1FKSwga2V5KTtcbiAgICAgIH1cbiAgICB9KTtcbiAgICBpZiAoREVTQ1JJUFRPUlMpIGRQKEMucHJvdG90eXBlLCAnc2l6ZScsIHtcbiAgICAgIGdldDogZnVuY3Rpb24gKCkge1xuICAgICAgICByZXR1cm4gdmFsaWRhdGUodGhpcywgTkFNRSlbU0laRV07XG4gICAgICB9XG4gICAgfSk7XG4gICAgcmV0dXJuIEM7XG4gIH0sXG4gIGRlZjogZnVuY3Rpb24gKHRoYXQsIGtleSwgdmFsdWUpIHtcbiAgICB2YXIgZW50cnkgPSBnZXRFbnRyeSh0aGF0LCBrZXkpO1xuICAgIHZhciBwcmV2LCBpbmRleDtcbiAgICAvLyBjaGFuZ2UgZXhpc3RpbmcgZW50cnlcbiAgICBpZiAoZW50cnkpIHtcbiAgICAgIGVudHJ5LnYgPSB2YWx1ZTtcbiAgICAvLyBjcmVhdGUgbmV3IGVudHJ5XG4gICAgfSBlbHNlIHtcbiAgICAgIHRoYXQuX2wgPSBlbnRyeSA9IHtcbiAgICAgICAgaTogaW5kZXggPSBmYXN0S2V5KGtleSwgdHJ1ZSksIC8vIDwtIGluZGV4XG4gICAgICAgIGs6IGtleSwgICAgICAgICAgICAgICAgICAgICAgICAvLyA8LSBrZXlcbiAgICAgICAgdjogdmFsdWUsICAgICAgICAgICAgICAgICAgICAgIC8vIDwtIHZhbHVlXG4gICAgICAgIHA6IHByZXYgPSB0aGF0Ll9sLCAgICAgICAgICAgICAvLyA8LSBwcmV2aW91cyBlbnRyeVxuICAgICAgICBuOiB1bmRlZmluZWQsICAgICAgICAgICAgICAgICAgLy8gPC0gbmV4dCBlbnRyeVxuICAgICAgICByOiBmYWxzZSAgICAgICAgICAgICAgICAgICAgICAgLy8gPC0gcmVtb3ZlZFxuICAgICAgfTtcbiAgICAgIGlmICghdGhhdC5fZikgdGhhdC5fZiA9IGVudHJ5O1xuICAgICAgaWYgKHByZXYpIHByZXYubiA9IGVudHJ5O1xuICAgICAgdGhhdFtTSVpFXSsrO1xuICAgICAgLy8gYWRkIHRvIGluZGV4XG4gICAgICBpZiAoaW5kZXggIT09ICdGJykgdGhhdC5faVtpbmRleF0gPSBlbnRyeTtcbiAgICB9IHJldHVybiB0aGF0O1xuICB9LFxuICBnZXRFbnRyeTogZ2V0RW50cnksXG4gIHNldFN0cm9uZzogZnVuY3Rpb24gKEMsIE5BTUUsIElTX01BUCkge1xuICAgIC8vIGFkZCAua2V5cywgLnZhbHVlcywgLmVudHJpZXMsIFtAQGl0ZXJhdG9yXVxuICAgIC8vIDIzLjEuMy40LCAyMy4xLjMuOCwgMjMuMS4zLjExLCAyMy4xLjMuMTIsIDIzLjIuMy41LCAyMy4yLjMuOCwgMjMuMi4zLjEwLCAyMy4yLjMuMTFcbiAgICAkaXRlckRlZmluZShDLCBOQU1FLCBmdW5jdGlvbiAoaXRlcmF0ZWQsIGtpbmQpIHtcbiAgICAgIHRoaXMuX3QgPSB2YWxpZGF0ZShpdGVyYXRlZCwgTkFNRSk7IC8vIHRhcmdldFxuICAgICAgdGhpcy5fayA9IGtpbmQ7ICAgICAgICAgICAgICAgICAgICAgLy8ga2luZFxuICAgICAgdGhpcy5fbCA9IHVuZGVmaW5lZDsgICAgICAgICAgICAgICAgLy8gcHJldmlvdXNcbiAgICB9LCBmdW5jdGlvbiAoKSB7XG4gICAgICB2YXIgdGhhdCA9IHRoaXM7XG4gICAgICB2YXIga2luZCA9IHRoYXQuX2s7XG4gICAgICB2YXIgZW50cnkgPSB0aGF0Ll9sO1xuICAgICAgLy8gcmV2ZXJ0IHRvIHRoZSBsYXN0IGV4aXN0aW5nIGVudHJ5XG4gICAgICB3aGlsZSAoZW50cnkgJiYgZW50cnkucikgZW50cnkgPSBlbnRyeS5wO1xuICAgICAgLy8gZ2V0IG5leHQgZW50cnlcbiAgICAgIGlmICghdGhhdC5fdCB8fCAhKHRoYXQuX2wgPSBlbnRyeSA9IGVudHJ5ID8gZW50cnkubiA6IHRoYXQuX3QuX2YpKSB7XG4gICAgICAgIC8vIG9yIGZpbmlzaCB0aGUgaXRlcmF0aW9uXG4gICAgICAgIHRoYXQuX3QgPSB1bmRlZmluZWQ7XG4gICAgICAgIHJldHVybiBzdGVwKDEpO1xuICAgICAgfVxuICAgICAgLy8gcmV0dXJuIHN0ZXAgYnkga2luZFxuICAgICAgaWYgKGtpbmQgPT0gJ2tleXMnKSByZXR1cm4gc3RlcCgwLCBlbnRyeS5rKTtcbiAgICAgIGlmIChraW5kID09ICd2YWx1ZXMnKSByZXR1cm4gc3RlcCgwLCBlbnRyeS52KTtcbiAgICAgIHJldHVybiBzdGVwKDAsIFtlbnRyeS5rLCBlbnRyeS52XSk7XG4gICAgfSwgSVNfTUFQID8gJ2VudHJpZXMnIDogJ3ZhbHVlcycsICFJU19NQVAsIHRydWUpO1xuXG4gICAgLy8gYWRkIFtAQHNwZWNpZXNdLCAyMy4xLjIuMiwgMjMuMi4yLjJcbiAgICBzZXRTcGVjaWVzKE5BTUUpO1xuICB9XG59O1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9ub2RlX21vZHVsZXMvX2NvcmUtanNAMi41LjNAY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX2NvbGxlY3Rpb24tc3Ryb25nLmpzXG4vLyBtb2R1bGUgaWQgPSA4MlxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCIndXNlIHN0cmljdCc7XG52YXIgZ2xvYmFsID0gcmVxdWlyZSgnLi9fZ2xvYmFsJyk7XG52YXIgJGV4cG9ydCA9IHJlcXVpcmUoJy4vX2V4cG9ydCcpO1xudmFyIG1ldGEgPSByZXF1aXJlKCcuL19tZXRhJyk7XG52YXIgZmFpbHMgPSByZXF1aXJlKCcuL19mYWlscycpO1xudmFyIGhpZGUgPSByZXF1aXJlKCcuL19oaWRlJyk7XG52YXIgcmVkZWZpbmVBbGwgPSByZXF1aXJlKCcuL19yZWRlZmluZS1hbGwnKTtcbnZhciBmb3JPZiA9IHJlcXVpcmUoJy4vX2Zvci1vZicpO1xudmFyIGFuSW5zdGFuY2UgPSByZXF1aXJlKCcuL19hbi1pbnN0YW5jZScpO1xudmFyIGlzT2JqZWN0ID0gcmVxdWlyZSgnLi9faXMtb2JqZWN0Jyk7XG52YXIgc2V0VG9TdHJpbmdUYWcgPSByZXF1aXJlKCcuL19zZXQtdG8tc3RyaW5nLXRhZycpO1xudmFyIGRQID0gcmVxdWlyZSgnLi9fb2JqZWN0LWRwJykuZjtcbnZhciBlYWNoID0gcmVxdWlyZSgnLi9fYXJyYXktbWV0aG9kcycpKDApO1xudmFyIERFU0NSSVBUT1JTID0gcmVxdWlyZSgnLi9fZGVzY3JpcHRvcnMnKTtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoTkFNRSwgd3JhcHBlciwgbWV0aG9kcywgY29tbW9uLCBJU19NQVAsIElTX1dFQUspIHtcbiAgdmFyIEJhc2UgPSBnbG9iYWxbTkFNRV07XG4gIHZhciBDID0gQmFzZTtcbiAgdmFyIEFEREVSID0gSVNfTUFQID8gJ3NldCcgOiAnYWRkJztcbiAgdmFyIHByb3RvID0gQyAmJiBDLnByb3RvdHlwZTtcbiAgdmFyIE8gPSB7fTtcbiAgaWYgKCFERVNDUklQVE9SUyB8fCB0eXBlb2YgQyAhPSAnZnVuY3Rpb24nIHx8ICEoSVNfV0VBSyB8fCBwcm90by5mb3JFYWNoICYmICFmYWlscyhmdW5jdGlvbiAoKSB7XG4gICAgbmV3IEMoKS5lbnRyaWVzKCkubmV4dCgpO1xuICB9KSkpIHtcbiAgICAvLyBjcmVhdGUgY29sbGVjdGlvbiBjb25zdHJ1Y3RvclxuICAgIEMgPSBjb21tb24uZ2V0Q29uc3RydWN0b3Iod3JhcHBlciwgTkFNRSwgSVNfTUFQLCBBRERFUik7XG4gICAgcmVkZWZpbmVBbGwoQy5wcm90b3R5cGUsIG1ldGhvZHMpO1xuICAgIG1ldGEuTkVFRCA9IHRydWU7XG4gIH0gZWxzZSB7XG4gICAgQyA9IHdyYXBwZXIoZnVuY3Rpb24gKHRhcmdldCwgaXRlcmFibGUpIHtcbiAgICAgIGFuSW5zdGFuY2UodGFyZ2V0LCBDLCBOQU1FLCAnX2MnKTtcbiAgICAgIHRhcmdldC5fYyA9IG5ldyBCYXNlKCk7XG4gICAgICBpZiAoaXRlcmFibGUgIT0gdW5kZWZpbmVkKSBmb3JPZihpdGVyYWJsZSwgSVNfTUFQLCB0YXJnZXRbQURERVJdLCB0YXJnZXQpO1xuICAgIH0pO1xuICAgIGVhY2goJ2FkZCxjbGVhcixkZWxldGUsZm9yRWFjaCxnZXQsaGFzLHNldCxrZXlzLHZhbHVlcyxlbnRyaWVzLHRvSlNPTicuc3BsaXQoJywnKSwgZnVuY3Rpb24gKEtFWSkge1xuICAgICAgdmFyIElTX0FEREVSID0gS0VZID09ICdhZGQnIHx8IEtFWSA9PSAnc2V0JztcbiAgICAgIGlmIChLRVkgaW4gcHJvdG8gJiYgIShJU19XRUFLICYmIEtFWSA9PSAnY2xlYXInKSkgaGlkZShDLnByb3RvdHlwZSwgS0VZLCBmdW5jdGlvbiAoYSwgYikge1xuICAgICAgICBhbkluc3RhbmNlKHRoaXMsIEMsIEtFWSk7XG4gICAgICAgIGlmICghSVNfQURERVIgJiYgSVNfV0VBSyAmJiAhaXNPYmplY3QoYSkpIHJldHVybiBLRVkgPT0gJ2dldCcgPyB1bmRlZmluZWQgOiBmYWxzZTtcbiAgICAgICAgdmFyIHJlc3VsdCA9IHRoaXMuX2NbS0VZXShhID09PSAwID8gMCA6IGEsIGIpO1xuICAgICAgICByZXR1cm4gSVNfQURERVIgPyB0aGlzIDogcmVzdWx0O1xuICAgICAgfSk7XG4gICAgfSk7XG4gICAgSVNfV0VBSyB8fCBkUChDLnByb3RvdHlwZSwgJ3NpemUnLCB7XG4gICAgICBnZXQ6IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuX2Muc2l6ZTtcbiAgICAgIH1cbiAgICB9KTtcbiAgfVxuXG4gIHNldFRvU3RyaW5nVGFnKEMsIE5BTUUpO1xuXG4gIE9bTkFNRV0gPSBDO1xuICAkZXhwb3J0KCRleHBvcnQuRyArICRleHBvcnQuVyArICRleHBvcnQuRiwgTyk7XG5cbiAgaWYgKCFJU19XRUFLKSBjb21tb24uc2V0U3Ryb25nKEMsIE5BTUUsIElTX01BUCk7XG5cbiAgcmV0dXJuIEM7XG59O1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9ub2RlX21vZHVsZXMvX2NvcmUtanNAMi41LjNAY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX2NvbGxlY3Rpb24uanNcbi8vIG1vZHVsZSBpZCA9IDgzXG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIi8vIGh0dHBzOi8vZ2l0aHViLmNvbS9EYXZpZEJydWFudC9NYXAtU2V0LnByb3RvdHlwZS50b0pTT05cbnZhciBjbGFzc29mID0gcmVxdWlyZSgnLi9fY2xhc3NvZicpO1xudmFyIGZyb20gPSByZXF1aXJlKCcuL19hcnJheS1mcm9tLWl0ZXJhYmxlJyk7XG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChOQU1FKSB7XG4gIHJldHVybiBmdW5jdGlvbiB0b0pTT04oKSB7XG4gICAgaWYgKGNsYXNzb2YodGhpcykgIT0gTkFNRSkgdGhyb3cgVHlwZUVycm9yKE5BTUUgKyBcIiN0b0pTT04gaXNuJ3QgZ2VuZXJpY1wiKTtcbiAgICByZXR1cm4gZnJvbSh0aGlzKTtcbiAgfTtcbn07XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL25vZGVfbW9kdWxlcy9fY29yZS1qc0AyLjUuM0Bjb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9fY29sbGVjdGlvbi10by1qc29uLmpzXG4vLyBtb2R1bGUgaWQgPSA4NFxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCIndXNlIHN0cmljdCc7XG4vLyBodHRwczovL3RjMzkuZ2l0aHViLmlvL3Byb3Bvc2FsLXNldG1hcC1vZmZyb20vXG52YXIgJGV4cG9ydCA9IHJlcXVpcmUoJy4vX2V4cG9ydCcpO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChDT0xMRUNUSU9OKSB7XG4gICRleHBvcnQoJGV4cG9ydC5TLCBDT0xMRUNUSU9OLCB7IG9mOiBmdW5jdGlvbiBvZigpIHtcbiAgICB2YXIgbGVuZ3RoID0gYXJndW1lbnRzLmxlbmd0aDtcbiAgICB2YXIgQSA9IG5ldyBBcnJheShsZW5ndGgpO1xuICAgIHdoaWxlIChsZW5ndGgtLSkgQVtsZW5ndGhdID0gYXJndW1lbnRzW2xlbmd0aF07XG4gICAgcmV0dXJuIG5ldyB0aGlzKEEpO1xuICB9IH0pO1xufTtcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vbm9kZV9tb2R1bGVzL19jb3JlLWpzQDIuNS4zQGNvcmUtanMvbGlicmFyeS9tb2R1bGVzL19zZXQtY29sbGVjdGlvbi1vZi5qc1xuLy8gbW9kdWxlIGlkID0gODVcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiJ3VzZSBzdHJpY3QnO1xuLy8gaHR0cHM6Ly90YzM5LmdpdGh1Yi5pby9wcm9wb3NhbC1zZXRtYXAtb2Zmcm9tL1xudmFyICRleHBvcnQgPSByZXF1aXJlKCcuL19leHBvcnQnKTtcbnZhciBhRnVuY3Rpb24gPSByZXF1aXJlKCcuL19hLWZ1bmN0aW9uJyk7XG52YXIgY3R4ID0gcmVxdWlyZSgnLi9fY3R4Jyk7XG52YXIgZm9yT2YgPSByZXF1aXJlKCcuL19mb3Itb2YnKTtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoQ09MTEVDVElPTikge1xuICAkZXhwb3J0KCRleHBvcnQuUywgQ09MTEVDVElPTiwgeyBmcm9tOiBmdW5jdGlvbiBmcm9tKHNvdXJjZSAvKiAsIG1hcEZuLCB0aGlzQXJnICovKSB7XG4gICAgdmFyIG1hcEZuID0gYXJndW1lbnRzWzFdO1xuICAgIHZhciBtYXBwaW5nLCBBLCBuLCBjYjtcbiAgICBhRnVuY3Rpb24odGhpcyk7XG4gICAgbWFwcGluZyA9IG1hcEZuICE9PSB1bmRlZmluZWQ7XG4gICAgaWYgKG1hcHBpbmcpIGFGdW5jdGlvbihtYXBGbik7XG4gICAgaWYgKHNvdXJjZSA9PSB1bmRlZmluZWQpIHJldHVybiBuZXcgdGhpcygpO1xuICAgIEEgPSBbXTtcbiAgICBpZiAobWFwcGluZykge1xuICAgICAgbiA9IDA7XG4gICAgICBjYiA9IGN0eChtYXBGbiwgYXJndW1lbnRzWzJdLCAyKTtcbiAgICAgIGZvck9mKHNvdXJjZSwgZmFsc2UsIGZ1bmN0aW9uIChuZXh0SXRlbSkge1xuICAgICAgICBBLnB1c2goY2IobmV4dEl0ZW0sIG4rKykpO1xuICAgICAgfSk7XG4gICAgfSBlbHNlIHtcbiAgICAgIGZvck9mKHNvdXJjZSwgZmFsc2UsIEEucHVzaCwgQSk7XG4gICAgfVxuICAgIHJldHVybiBuZXcgdGhpcyhBKTtcbiAgfSB9KTtcbn07XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL25vZGVfbW9kdWxlcy9fY29yZS1qc0AyLjUuM0Bjb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9fc2V0LWNvbGxlY3Rpb24tZnJvbS5qc1xuLy8gbW9kdWxlIGlkID0gODZcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiZXhwb3J0IGRlZmF1bHQgY2xhc3MgVGlsZVJlc29sdmVyIHtcclxuICAgIGNvbnN0cnVjdG9yKG1hdHJpeCwgdGlsZVNpemUgPSAxNikge1xyXG4gICAgICAgIHRoaXMubWF0cml4ID0gbWF0cml4O1xyXG4gICAgICAgIHRoaXMudGlsZVNpemUgPSB0aWxlU2l6ZTtcclxuICAgIH1cclxuXHJcbiAgICB0b0luZGV4KHBvcykge1xyXG4gICAgICAgIHJldHVybiBNYXRoLmZsb29yKHBvcyAvIHRoaXMudGlsZVNpemUpO1xyXG4gICAgfVxyXG5cclxuICAgIHRvSW5kZXhSYW5nZShwb3MxLCBwb3MyKSB7XHJcbiAgICAgICAgY29uc3QgcE1heCA9IE1hdGguY2VpbChwb3MyIC8gdGhpcy50aWxlU2l6ZSkgKiB0aGlzLnRpbGVTaXplO1xyXG4gICAgICAgIGxldCByYW5nZSA9IFtdO1xyXG4gICAgICAgIGxldCBwb3MgPSBwb3MxO1xyXG4gICAgICAgIGRvIHtcclxuICAgICAgICAgICAgcmFuZ2UucHVzaCh0aGlzLnRvSW5kZXgocG9zKSk7XHJcbiAgICAgICAgICAgIHBvcyArPSB0aGlzLnRpbGVTaXplO1xyXG4gICAgICAgIH0gd2hpbGUgKHBvcyA8IHBNYXgpO1xyXG5cclxuICAgICAgICByZXR1cm4gcmFuZ2U7XHJcbiAgICB9XHJcblxyXG4gICAgZ2V0QnlJbmRleChpbmRleFgsIGluZGV4WSkge1xyXG4gICAgICAgIGNvbnN0IHRpbGUgPSB0aGlzLm1hdHJpeC5nZXQoaW5kZXhYLCBpbmRleFkpO1xyXG4gICAgICAgIGNvbnN0IHgxID0gaW5kZXhYICogdGhpcy50aWxlU2l6ZTtcclxuICAgICAgICBjb25zdCB4MiA9IHgxICsgdGhpcy50aWxlU2l6ZTtcclxuICAgICAgICBjb25zdCB5MSA9IGluZGV4WSAqIHRoaXMudGlsZVNpemU7XHJcbiAgICAgICAgY29uc3QgeTIgPSB5MSArIHRoaXMudGlsZVNpemU7XHJcbiAgICAgICAgaWYgKHRpbGUpIHtcclxuICAgICAgICAgICAgcmV0dXJuIHtcclxuICAgICAgICAgICAgICAgIHRpbGUsXHJcbiAgICAgICAgICAgICAgICB4MSxcclxuICAgICAgICAgICAgICAgIHgyLFxyXG4gICAgICAgICAgICAgICAgeTEsXHJcbiAgICAgICAgICAgICAgICB5MlxyXG4gICAgICAgICAgICB9O1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBzZWFyY2hCeVBvc2l0aW9uKHBvc1gsIHBvc1kpIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5nZXRCeUluZGV4KFxyXG4gICAgICAgICAgICB0aGlzLnRvSW5kZXgocG9zWCksXHJcbiAgICAgICAgICAgIHRoaXMudG9JbmRleChwb3NZKSxcclxuICAgICAgICApO1xyXG4gICAgfVxyXG5cclxuICAgIHNlYXJjaEJ5UmFuZ2UoeDEseDIseTEseTIpIHtcclxuICAgICAgICBsZXQgbWF0Y2hlcyA9IFtdO1xyXG4gICAgICAgIHRoaXMudG9JbmRleFJhbmdlKHgxLHgyKS5mb3JFYWNoKGluZGV4WCA9PiB7XHJcbiAgICAgICAgICAgIHRoaXMudG9JbmRleFJhbmdlKHkxLHkyKS5mb3JFYWNoKGluZGV4WSA9PiB7XHJcbiAgICAgICAgICAgICAgICBsZXQgbWF0Y2ggPSB0aGlzLmdldEJ5SW5kZXgoaW5kZXhYLCBpbmRleFkpO1xyXG4gICAgICAgICAgICAgICAgaWYgKG1hdGNoKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgbWF0Y2hlcy5wdXNoKG1hdGNoKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfSlcclxuICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgcmV0dXJuIG1hdGNoZXM7XHJcbiAgICB9XHJcbn1cclxuXHJcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3B1YmxpYy9qcy9UaWxlUmVzb2x2ZXIuanMiLCJcInVzZSBzdHJpY3RcIjtcblxuZXhwb3J0cy5fX2VzTW9kdWxlID0gdHJ1ZTtcblxudmFyIF9mcm9tID0gcmVxdWlyZShcIi4uL2NvcmUtanMvYXJyYXkvZnJvbVwiKTtcblxudmFyIF9mcm9tMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX2Zyb20pO1xuXG5mdW5jdGlvbiBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KG9iaikgeyByZXR1cm4gb2JqICYmIG9iai5fX2VzTW9kdWxlID8gb2JqIDogeyBkZWZhdWx0OiBvYmogfTsgfVxuXG5leHBvcnRzLmRlZmF1bHQgPSBmdW5jdGlvbiAoYXJyKSB7XG4gIGlmIChBcnJheS5pc0FycmF5KGFycikpIHtcbiAgICBmb3IgKHZhciBpID0gMCwgYXJyMiA9IEFycmF5KGFyci5sZW5ndGgpOyBpIDwgYXJyLmxlbmd0aDsgaSsrKSB7XG4gICAgICBhcnIyW2ldID0gYXJyW2ldO1xuICAgIH1cblxuICAgIHJldHVybiBhcnIyO1xuICB9IGVsc2Uge1xuICAgIHJldHVybiAoMCwgX2Zyb20yLmRlZmF1bHQpKGFycik7XG4gIH1cbn07XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9ub2RlX21vZHVsZXMvX2JhYmVsLXJ1bnRpbWVANi4yNi4wQGJhYmVsLXJ1bnRpbWUvaGVscGVycy90b0NvbnN1bWFibGVBcnJheS5qc1xuLy8gbW9kdWxlIGlkID0gODhcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiZXhwb3J0IGRlZmF1bHQgY2xhc3MgU3ByaXRlU2hlZXQge1xyXG4gICAgY29uc3RydWN0b3IoaW1hZ2UsIHdpZHRoLCBoZWlnaHQpIHtcclxuICAgICAgICB0aGlzLmltYWdlID0gaW1hZ2U7XHJcbiAgICAgICAgdGhpcy53aWR0aCA9IHdpZHRoO1xyXG4gICAgICAgIHRoaXMuaGVpZ2h0ID0gaGVpZ2h0O1xyXG4gICAgICAgIHRoaXMudGlsZXMgPSBuZXcgTWFwKCk7XHJcbiAgICAgICAgdGhpcy5hbmltYXRpb25zID0gbmV3IE1hcCgpO1xyXG4gICAgfVxyXG5cclxuICAgIGRlZmluZUFuaW0obmFtZSwgYW5pbWF0aW9uKSB7XHJcbiAgICAgICAgdGhpcy5hbmltYXRpb25zLnNldChuYW1lLCBhbmltYXRpb24pO1xyXG4gICAgfVxyXG5cclxuICAgIGRlZmluZShuYW1lLCB4LCB5LCB3aWR0aCwgaGVpZ2h0KSB7XHJcbiAgICAgICAgLy8gZGVmaW5lIGEgc3ByaXRlIGluIHRoZSBpbWFnZSB3aXRoIG5hbWVcclxuICAgICAgICAvLyDmmI7noa7lrprkuYnkuIDlnZfkvY3kuo5zcHJpdGUgc2hlZXTkuK14LHnkvY3nva53aWR0aCwgaGVpZ2h055qEc3ByaXRlXHJcbiAgICAgICAgY29uc3QgYnVmZmVycyA9IFtmYWxzZSwgdHJ1ZV0ubWFwKGZsaXAgPT4ge1xyXG4gICAgICAgICAgICBjb25zdCBidWZmZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdjYW52YXMnKTtcclxuICAgICAgICAgICAgYnVmZmVyLndpZHRoID0gd2lkdGg7XHJcbiAgICAgICAgICAgIGJ1ZmZlci5oZWlnaHQgPSBoZWlnaHQ7XHJcblxyXG4gICAgICAgICAgICBjb25zdCBjb250ZXh0ID0gYnVmZmVyLmdldENvbnRleHQoJzJkJyk7XHJcblxyXG4gICAgICAgICAgICBpZiAoZmxpcCkge1xyXG4gICAgICAgICAgICAgICAgLy8gTWlycm9yIHRoZSBjYW52YXNcclxuICAgICAgICAgICAgICAgIGNvbnRleHQuc2NhbGUoLTEsIDEpO1xyXG4gICAgICAgICAgICAgICAgY29udGV4dC50cmFuc2xhdGUoLXdpZHRoLCAwKTtcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgY29udGV4dC5kcmF3SW1hZ2UoXHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5pbWFnZSxcclxuICAgICAgICAgICAgICAgICAgICB4LFxyXG4gICAgICAgICAgICAgICAgICAgIHksXHJcbiAgICAgICAgICAgICAgICAgICAgd2lkdGgsXHJcbiAgICAgICAgICAgICAgICAgICAgaGVpZ2h0LFxyXG4gICAgICAgICAgICAgICAgICAgIDAsXHJcbiAgICAgICAgICAgICAgICAgICAgMCxcclxuICAgICAgICAgICAgICAgICAgICB3aWR0aCxcclxuICAgICAgICAgICAgICAgICAgICBoZWlnaHQpO1xyXG5cclxuICAgICAgICAgICAgcmV0dXJuIGJ1ZmZlcjtcclxuICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgdGhpcy50aWxlcy5zZXQobmFtZSwgYnVmZmVycyk7XHJcbiAgICB9XHJcblxyXG4gICAgZGVmaW5lVGlsZShuYW1lLCB4LCB5KSB7XHJcbiAgICAgICAgdGhpcy5kZWZpbmUobmFtZSwgeCAqIHRoaXMud2lkdGgsIHkgKiB0aGlzLmhlaWdodCwgdGhpcy53aWR0aCwgdGhpcy5oZWlnaHQpO1xyXG4gICAgfVxyXG5cclxuICAgIGRyYXcobmFtZSwgY29udGV4dCwgeCwgeSwgZmxpcCA9IGZhbHNlKSB7XHJcbiAgICAgICAgY29uc3QgYnVmZmVyID0gdGhpcy50aWxlcy5nZXQobmFtZSlbZmxpcCA/IDEgOiAwXTtcclxuICAgICAgICBjb250ZXh0LmRyYXdJbWFnZShidWZmZXIsIHgsIHkpO1xyXG4gICAgfVxyXG5cclxuICAgIGRyYXdUaWxlKG5hbWUsIGNvbnRleHQsIHgsIHkpIHtcclxuICAgICAgICB0aGlzLmRyYXcobmFtZSwgY29udGV4dCwgeCp0aGlzLndpZHRoLCB5KnRoaXMuaGVpZ2h0KTtcclxuICAgIH1cclxuXHJcbiAgICBkcmF3QW5pbShuYW1lLCBjb250ZXh0LCB4LCB5LCBkaXN0YW5jZSkge1xyXG4gICAgICAgIGNvbnN0IGFuaW0gPSB0aGlzLmFuaW1hdGlvbnMuZ2V0KG5hbWUpO1xyXG4gICAgICAgIHRoaXMuZHJhd1RpbGUoYW5pbShkaXN0YW5jZSksIGNvbnRleHQsIHgsIHkpO1xyXG4gICAgfVxyXG59XHJcblxyXG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9wdWJsaWMvanMvU3ByaXRlU2hlZXQuanMiLCJtb2R1bGUuZXhwb3J0cyA9IHsgXCJkZWZhdWx0XCI6IHJlcXVpcmUoXCJjb3JlLWpzL2xpYnJhcnkvZm4vbWFwXCIpLCBfX2VzTW9kdWxlOiB0cnVlIH07XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9ub2RlX21vZHVsZXMvX2JhYmVsLXJ1bnRpbWVANi4yNi4wQGJhYmVsLXJ1bnRpbWUvY29yZS1qcy9tYXAuanNcbi8vIG1vZHVsZSBpZCA9IDkwXG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsImltcG9ydCB7U2lkZXMsIFRyYWl0fSBmcm9tICcuLi9FbnRpdHkuanMnXHJcblxyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBQZW5kdWx1bU1vdmUgZXh0ZW5kcyBUcmFpdCB7XHJcbiAgICBjb25zdHJ1Y3RvcigpIHtcclxuICAgICAgICBzdXBlcigncGVuZHVsdW1Nb3ZlJyk7XHJcbiAgICAgICAgdGhpcy5lbmFibGUgPSB0cnVlO1xyXG4gICAgICAgIHRoaXMuc3BlZWQgPSAgLTMwO1xyXG4gICAgfVxyXG5cclxuICAgIG9ic3RydWN0KGtvb3BhLCBzaWRlcykge1xyXG4gICAgICAgIGlmIChzaWRlcyA9PT0gU2lkZXMuTEVGVCB8fCBzaWRlcyA9PT0gU2lkZXMuUklHSFQpIHtcclxuICAgICAgICAgICAgdGhpcy5zcGVlZCA9IC10aGlzLnNwZWVkO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICB1cGRhdGUoZW50aXR5LCBkZWx0YVRpbWUpIHtcclxuICAgICAgICBlbnRpdHkubGlmZVRpbWUgKz0gZGVsdGFUaW1lO1xyXG4gICAgICAgIGlmICh0aGlzLmVuYWJsZSkge1xyXG4gICAgICAgICAgICBlbnRpdHkudmVsLnggPSB0aGlzLnNwZWVkO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxufVxyXG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9wdWJsaWMvanMvdHJhaXRzL1BlbmR1bHVtTW92ZS5qcyIsIihmdW5jdGlvbihzZWxmKSB7XG4gICd1c2Ugc3RyaWN0JztcblxuICBpZiAoc2VsZi5mZXRjaCkge1xuICAgIHJldHVyblxuICB9XG5cbiAgdmFyIHN1cHBvcnQgPSB7XG4gICAgc2VhcmNoUGFyYW1zOiAnVVJMU2VhcmNoUGFyYW1zJyBpbiBzZWxmLFxuICAgIGl0ZXJhYmxlOiAnU3ltYm9sJyBpbiBzZWxmICYmICdpdGVyYXRvcicgaW4gU3ltYm9sLFxuICAgIGJsb2I6ICdGaWxlUmVhZGVyJyBpbiBzZWxmICYmICdCbG9iJyBpbiBzZWxmICYmIChmdW5jdGlvbigpIHtcbiAgICAgIHRyeSB7XG4gICAgICAgIG5ldyBCbG9iKClcbiAgICAgICAgcmV0dXJuIHRydWVcbiAgICAgIH0gY2F0Y2goZSkge1xuICAgICAgICByZXR1cm4gZmFsc2VcbiAgICAgIH1cbiAgICB9KSgpLFxuICAgIGZvcm1EYXRhOiAnRm9ybURhdGEnIGluIHNlbGYsXG4gICAgYXJyYXlCdWZmZXI6ICdBcnJheUJ1ZmZlcicgaW4gc2VsZlxuICB9XG5cbiAgaWYgKHN1cHBvcnQuYXJyYXlCdWZmZXIpIHtcbiAgICB2YXIgdmlld0NsYXNzZXMgPSBbXG4gICAgICAnW29iamVjdCBJbnQ4QXJyYXldJyxcbiAgICAgICdbb2JqZWN0IFVpbnQ4QXJyYXldJyxcbiAgICAgICdbb2JqZWN0IFVpbnQ4Q2xhbXBlZEFycmF5XScsXG4gICAgICAnW29iamVjdCBJbnQxNkFycmF5XScsXG4gICAgICAnW29iamVjdCBVaW50MTZBcnJheV0nLFxuICAgICAgJ1tvYmplY3QgSW50MzJBcnJheV0nLFxuICAgICAgJ1tvYmplY3QgVWludDMyQXJyYXldJyxcbiAgICAgICdbb2JqZWN0IEZsb2F0MzJBcnJheV0nLFxuICAgICAgJ1tvYmplY3QgRmxvYXQ2NEFycmF5XSdcbiAgICBdXG5cbiAgICB2YXIgaXNEYXRhVmlldyA9IGZ1bmN0aW9uKG9iaikge1xuICAgICAgcmV0dXJuIG9iaiAmJiBEYXRhVmlldy5wcm90b3R5cGUuaXNQcm90b3R5cGVPZihvYmopXG4gICAgfVxuXG4gICAgdmFyIGlzQXJyYXlCdWZmZXJWaWV3ID0gQXJyYXlCdWZmZXIuaXNWaWV3IHx8IGZ1bmN0aW9uKG9iaikge1xuICAgICAgcmV0dXJuIG9iaiAmJiB2aWV3Q2xhc3Nlcy5pbmRleE9mKE9iamVjdC5wcm90b3R5cGUudG9TdHJpbmcuY2FsbChvYmopKSA+IC0xXG4gICAgfVxuICB9XG5cbiAgZnVuY3Rpb24gbm9ybWFsaXplTmFtZShuYW1lKSB7XG4gICAgaWYgKHR5cGVvZiBuYW1lICE9PSAnc3RyaW5nJykge1xuICAgICAgbmFtZSA9IFN0cmluZyhuYW1lKVxuICAgIH1cbiAgICBpZiAoL1teYS16MC05XFwtIyQlJicqKy5cXF5fYHx+XS9pLnRlc3QobmFtZSkpIHtcbiAgICAgIHRocm93IG5ldyBUeXBlRXJyb3IoJ0ludmFsaWQgY2hhcmFjdGVyIGluIGhlYWRlciBmaWVsZCBuYW1lJylcbiAgICB9XG4gICAgcmV0dXJuIG5hbWUudG9Mb3dlckNhc2UoKVxuICB9XG5cbiAgZnVuY3Rpb24gbm9ybWFsaXplVmFsdWUodmFsdWUpIHtcbiAgICBpZiAodHlwZW9mIHZhbHVlICE9PSAnc3RyaW5nJykge1xuICAgICAgdmFsdWUgPSBTdHJpbmcodmFsdWUpXG4gICAgfVxuICAgIHJldHVybiB2YWx1ZVxuICB9XG5cbiAgLy8gQnVpbGQgYSBkZXN0cnVjdGl2ZSBpdGVyYXRvciBmb3IgdGhlIHZhbHVlIGxpc3RcbiAgZnVuY3Rpb24gaXRlcmF0b3JGb3IoaXRlbXMpIHtcbiAgICB2YXIgaXRlcmF0b3IgPSB7XG4gICAgICBuZXh0OiBmdW5jdGlvbigpIHtcbiAgICAgICAgdmFyIHZhbHVlID0gaXRlbXMuc2hpZnQoKVxuICAgICAgICByZXR1cm4ge2RvbmU6IHZhbHVlID09PSB1bmRlZmluZWQsIHZhbHVlOiB2YWx1ZX1cbiAgICAgIH1cbiAgICB9XG5cbiAgICBpZiAoc3VwcG9ydC5pdGVyYWJsZSkge1xuICAgICAgaXRlcmF0b3JbU3ltYm9sLml0ZXJhdG9yXSA9IGZ1bmN0aW9uKCkge1xuICAgICAgICByZXR1cm4gaXRlcmF0b3JcbiAgICAgIH1cbiAgICB9XG5cbiAgICByZXR1cm4gaXRlcmF0b3JcbiAgfVxuXG4gIGZ1bmN0aW9uIEhlYWRlcnMoaGVhZGVycykge1xuICAgIHRoaXMubWFwID0ge31cblxuICAgIGlmIChoZWFkZXJzIGluc3RhbmNlb2YgSGVhZGVycykge1xuICAgICAgaGVhZGVycy5mb3JFYWNoKGZ1bmN0aW9uKHZhbHVlLCBuYW1lKSB7XG4gICAgICAgIHRoaXMuYXBwZW5kKG5hbWUsIHZhbHVlKVxuICAgICAgfSwgdGhpcylcbiAgICB9IGVsc2UgaWYgKEFycmF5LmlzQXJyYXkoaGVhZGVycykpIHtcbiAgICAgIGhlYWRlcnMuZm9yRWFjaChmdW5jdGlvbihoZWFkZXIpIHtcbiAgICAgICAgdGhpcy5hcHBlbmQoaGVhZGVyWzBdLCBoZWFkZXJbMV0pXG4gICAgICB9LCB0aGlzKVxuICAgIH0gZWxzZSBpZiAoaGVhZGVycykge1xuICAgICAgT2JqZWN0LmdldE93blByb3BlcnR5TmFtZXMoaGVhZGVycykuZm9yRWFjaChmdW5jdGlvbihuYW1lKSB7XG4gICAgICAgIHRoaXMuYXBwZW5kKG5hbWUsIGhlYWRlcnNbbmFtZV0pXG4gICAgICB9LCB0aGlzKVxuICAgIH1cbiAgfVxuXG4gIEhlYWRlcnMucHJvdG90eXBlLmFwcGVuZCA9IGZ1bmN0aW9uKG5hbWUsIHZhbHVlKSB7XG4gICAgbmFtZSA9IG5vcm1hbGl6ZU5hbWUobmFtZSlcbiAgICB2YWx1ZSA9IG5vcm1hbGl6ZVZhbHVlKHZhbHVlKVxuICAgIHZhciBvbGRWYWx1ZSA9IHRoaXMubWFwW25hbWVdXG4gICAgdGhpcy5tYXBbbmFtZV0gPSBvbGRWYWx1ZSA/IG9sZFZhbHVlKycsJyt2YWx1ZSA6IHZhbHVlXG4gIH1cblxuICBIZWFkZXJzLnByb3RvdHlwZVsnZGVsZXRlJ10gPSBmdW5jdGlvbihuYW1lKSB7XG4gICAgZGVsZXRlIHRoaXMubWFwW25vcm1hbGl6ZU5hbWUobmFtZSldXG4gIH1cblxuICBIZWFkZXJzLnByb3RvdHlwZS5nZXQgPSBmdW5jdGlvbihuYW1lKSB7XG4gICAgbmFtZSA9IG5vcm1hbGl6ZU5hbWUobmFtZSlcbiAgICByZXR1cm4gdGhpcy5oYXMobmFtZSkgPyB0aGlzLm1hcFtuYW1lXSA6IG51bGxcbiAgfVxuXG4gIEhlYWRlcnMucHJvdG90eXBlLmhhcyA9IGZ1bmN0aW9uKG5hbWUpIHtcbiAgICByZXR1cm4gdGhpcy5tYXAuaGFzT3duUHJvcGVydHkobm9ybWFsaXplTmFtZShuYW1lKSlcbiAgfVxuXG4gIEhlYWRlcnMucHJvdG90eXBlLnNldCA9IGZ1bmN0aW9uKG5hbWUsIHZhbHVlKSB7XG4gICAgdGhpcy5tYXBbbm9ybWFsaXplTmFtZShuYW1lKV0gPSBub3JtYWxpemVWYWx1ZSh2YWx1ZSlcbiAgfVxuXG4gIEhlYWRlcnMucHJvdG90eXBlLmZvckVhY2ggPSBmdW5jdGlvbihjYWxsYmFjaywgdGhpc0FyZykge1xuICAgIGZvciAodmFyIG5hbWUgaW4gdGhpcy5tYXApIHtcbiAgICAgIGlmICh0aGlzLm1hcC5oYXNPd25Qcm9wZXJ0eShuYW1lKSkge1xuICAgICAgICBjYWxsYmFjay5jYWxsKHRoaXNBcmcsIHRoaXMubWFwW25hbWVdLCBuYW1lLCB0aGlzKVxuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIEhlYWRlcnMucHJvdG90eXBlLmtleXMgPSBmdW5jdGlvbigpIHtcbiAgICB2YXIgaXRlbXMgPSBbXVxuICAgIHRoaXMuZm9yRWFjaChmdW5jdGlvbih2YWx1ZSwgbmFtZSkgeyBpdGVtcy5wdXNoKG5hbWUpIH0pXG4gICAgcmV0dXJuIGl0ZXJhdG9yRm9yKGl0ZW1zKVxuICB9XG5cbiAgSGVhZGVycy5wcm90b3R5cGUudmFsdWVzID0gZnVuY3Rpb24oKSB7XG4gICAgdmFyIGl0ZW1zID0gW11cbiAgICB0aGlzLmZvckVhY2goZnVuY3Rpb24odmFsdWUpIHsgaXRlbXMucHVzaCh2YWx1ZSkgfSlcbiAgICByZXR1cm4gaXRlcmF0b3JGb3IoaXRlbXMpXG4gIH1cblxuICBIZWFkZXJzLnByb3RvdHlwZS5lbnRyaWVzID0gZnVuY3Rpb24oKSB7XG4gICAgdmFyIGl0ZW1zID0gW11cbiAgICB0aGlzLmZvckVhY2goZnVuY3Rpb24odmFsdWUsIG5hbWUpIHsgaXRlbXMucHVzaChbbmFtZSwgdmFsdWVdKSB9KVxuICAgIHJldHVybiBpdGVyYXRvckZvcihpdGVtcylcbiAgfVxuXG4gIGlmIChzdXBwb3J0Lml0ZXJhYmxlKSB7XG4gICAgSGVhZGVycy5wcm90b3R5cGVbU3ltYm9sLml0ZXJhdG9yXSA9IEhlYWRlcnMucHJvdG90eXBlLmVudHJpZXNcbiAgfVxuXG4gIGZ1bmN0aW9uIGNvbnN1bWVkKGJvZHkpIHtcbiAgICBpZiAoYm9keS5ib2R5VXNlZCkge1xuICAgICAgcmV0dXJuIFByb21pc2UucmVqZWN0KG5ldyBUeXBlRXJyb3IoJ0FscmVhZHkgcmVhZCcpKVxuICAgIH1cbiAgICBib2R5LmJvZHlVc2VkID0gdHJ1ZVxuICB9XG5cbiAgZnVuY3Rpb24gZmlsZVJlYWRlclJlYWR5KHJlYWRlcikge1xuICAgIHJldHVybiBuZXcgUHJvbWlzZShmdW5jdGlvbihyZXNvbHZlLCByZWplY3QpIHtcbiAgICAgIHJlYWRlci5vbmxvYWQgPSBmdW5jdGlvbigpIHtcbiAgICAgICAgcmVzb2x2ZShyZWFkZXIucmVzdWx0KVxuICAgICAgfVxuICAgICAgcmVhZGVyLm9uZXJyb3IgPSBmdW5jdGlvbigpIHtcbiAgICAgICAgcmVqZWN0KHJlYWRlci5lcnJvcilcbiAgICAgIH1cbiAgICB9KVxuICB9XG5cbiAgZnVuY3Rpb24gcmVhZEJsb2JBc0FycmF5QnVmZmVyKGJsb2IpIHtcbiAgICB2YXIgcmVhZGVyID0gbmV3IEZpbGVSZWFkZXIoKVxuICAgIHZhciBwcm9taXNlID0gZmlsZVJlYWRlclJlYWR5KHJlYWRlcilcbiAgICByZWFkZXIucmVhZEFzQXJyYXlCdWZmZXIoYmxvYilcbiAgICByZXR1cm4gcHJvbWlzZVxuICB9XG5cbiAgZnVuY3Rpb24gcmVhZEJsb2JBc1RleHQoYmxvYikge1xuICAgIHZhciByZWFkZXIgPSBuZXcgRmlsZVJlYWRlcigpXG4gICAgdmFyIHByb21pc2UgPSBmaWxlUmVhZGVyUmVhZHkocmVhZGVyKVxuICAgIHJlYWRlci5yZWFkQXNUZXh0KGJsb2IpXG4gICAgcmV0dXJuIHByb21pc2VcbiAgfVxuXG4gIGZ1bmN0aW9uIHJlYWRBcnJheUJ1ZmZlckFzVGV4dChidWYpIHtcbiAgICB2YXIgdmlldyA9IG5ldyBVaW50OEFycmF5KGJ1ZilcbiAgICB2YXIgY2hhcnMgPSBuZXcgQXJyYXkodmlldy5sZW5ndGgpXG5cbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IHZpZXcubGVuZ3RoOyBpKyspIHtcbiAgICAgIGNoYXJzW2ldID0gU3RyaW5nLmZyb21DaGFyQ29kZSh2aWV3W2ldKVxuICAgIH1cbiAgICByZXR1cm4gY2hhcnMuam9pbignJylcbiAgfVxuXG4gIGZ1bmN0aW9uIGJ1ZmZlckNsb25lKGJ1Zikge1xuICAgIGlmIChidWYuc2xpY2UpIHtcbiAgICAgIHJldHVybiBidWYuc2xpY2UoMClcbiAgICB9IGVsc2Uge1xuICAgICAgdmFyIHZpZXcgPSBuZXcgVWludDhBcnJheShidWYuYnl0ZUxlbmd0aClcbiAgICAgIHZpZXcuc2V0KG5ldyBVaW50OEFycmF5KGJ1ZikpXG4gICAgICByZXR1cm4gdmlldy5idWZmZXJcbiAgICB9XG4gIH1cblxuICBmdW5jdGlvbiBCb2R5KCkge1xuICAgIHRoaXMuYm9keVVzZWQgPSBmYWxzZVxuXG4gICAgdGhpcy5faW5pdEJvZHkgPSBmdW5jdGlvbihib2R5KSB7XG4gICAgICB0aGlzLl9ib2R5SW5pdCA9IGJvZHlcbiAgICAgIGlmICghYm9keSkge1xuICAgICAgICB0aGlzLl9ib2R5VGV4dCA9ICcnXG4gICAgICB9IGVsc2UgaWYgKHR5cGVvZiBib2R5ID09PSAnc3RyaW5nJykge1xuICAgICAgICB0aGlzLl9ib2R5VGV4dCA9IGJvZHlcbiAgICAgIH0gZWxzZSBpZiAoc3VwcG9ydC5ibG9iICYmIEJsb2IucHJvdG90eXBlLmlzUHJvdG90eXBlT2YoYm9keSkpIHtcbiAgICAgICAgdGhpcy5fYm9keUJsb2IgPSBib2R5XG4gICAgICB9IGVsc2UgaWYgKHN1cHBvcnQuZm9ybURhdGEgJiYgRm9ybURhdGEucHJvdG90eXBlLmlzUHJvdG90eXBlT2YoYm9keSkpIHtcbiAgICAgICAgdGhpcy5fYm9keUZvcm1EYXRhID0gYm9keVxuICAgICAgfSBlbHNlIGlmIChzdXBwb3J0LnNlYXJjaFBhcmFtcyAmJiBVUkxTZWFyY2hQYXJhbXMucHJvdG90eXBlLmlzUHJvdG90eXBlT2YoYm9keSkpIHtcbiAgICAgICAgdGhpcy5fYm9keVRleHQgPSBib2R5LnRvU3RyaW5nKClcbiAgICAgIH0gZWxzZSBpZiAoc3VwcG9ydC5hcnJheUJ1ZmZlciAmJiBzdXBwb3J0LmJsb2IgJiYgaXNEYXRhVmlldyhib2R5KSkge1xuICAgICAgICB0aGlzLl9ib2R5QXJyYXlCdWZmZXIgPSBidWZmZXJDbG9uZShib2R5LmJ1ZmZlcilcbiAgICAgICAgLy8gSUUgMTAtMTEgY2FuJ3QgaGFuZGxlIGEgRGF0YVZpZXcgYm9keS5cbiAgICAgICAgdGhpcy5fYm9keUluaXQgPSBuZXcgQmxvYihbdGhpcy5fYm9keUFycmF5QnVmZmVyXSlcbiAgICAgIH0gZWxzZSBpZiAoc3VwcG9ydC5hcnJheUJ1ZmZlciAmJiAoQXJyYXlCdWZmZXIucHJvdG90eXBlLmlzUHJvdG90eXBlT2YoYm9keSkgfHwgaXNBcnJheUJ1ZmZlclZpZXcoYm9keSkpKSB7XG4gICAgICAgIHRoaXMuX2JvZHlBcnJheUJ1ZmZlciA9IGJ1ZmZlckNsb25lKGJvZHkpXG4gICAgICB9IGVsc2Uge1xuICAgICAgICB0aHJvdyBuZXcgRXJyb3IoJ3Vuc3VwcG9ydGVkIEJvZHlJbml0IHR5cGUnKVxuICAgICAgfVxuXG4gICAgICBpZiAoIXRoaXMuaGVhZGVycy5nZXQoJ2NvbnRlbnQtdHlwZScpKSB7XG4gICAgICAgIGlmICh0eXBlb2YgYm9keSA9PT0gJ3N0cmluZycpIHtcbiAgICAgICAgICB0aGlzLmhlYWRlcnMuc2V0KCdjb250ZW50LXR5cGUnLCAndGV4dC9wbGFpbjtjaGFyc2V0PVVURi04JylcbiAgICAgICAgfSBlbHNlIGlmICh0aGlzLl9ib2R5QmxvYiAmJiB0aGlzLl9ib2R5QmxvYi50eXBlKSB7XG4gICAgICAgICAgdGhpcy5oZWFkZXJzLnNldCgnY29udGVudC10eXBlJywgdGhpcy5fYm9keUJsb2IudHlwZSlcbiAgICAgICAgfSBlbHNlIGlmIChzdXBwb3J0LnNlYXJjaFBhcmFtcyAmJiBVUkxTZWFyY2hQYXJhbXMucHJvdG90eXBlLmlzUHJvdG90eXBlT2YoYm9keSkpIHtcbiAgICAgICAgICB0aGlzLmhlYWRlcnMuc2V0KCdjb250ZW50LXR5cGUnLCAnYXBwbGljYXRpb24veC13d3ctZm9ybS11cmxlbmNvZGVkO2NoYXJzZXQ9VVRGLTgnKVxuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuXG4gICAgaWYgKHN1cHBvcnQuYmxvYikge1xuICAgICAgdGhpcy5ibG9iID0gZnVuY3Rpb24oKSB7XG4gICAgICAgIHZhciByZWplY3RlZCA9IGNvbnN1bWVkKHRoaXMpXG4gICAgICAgIGlmIChyZWplY3RlZCkge1xuICAgICAgICAgIHJldHVybiByZWplY3RlZFxuICAgICAgICB9XG5cbiAgICAgICAgaWYgKHRoaXMuX2JvZHlCbG9iKSB7XG4gICAgICAgICAgcmV0dXJuIFByb21pc2UucmVzb2x2ZSh0aGlzLl9ib2R5QmxvYilcbiAgICAgICAgfSBlbHNlIGlmICh0aGlzLl9ib2R5QXJyYXlCdWZmZXIpIHtcbiAgICAgICAgICByZXR1cm4gUHJvbWlzZS5yZXNvbHZlKG5ldyBCbG9iKFt0aGlzLl9ib2R5QXJyYXlCdWZmZXJdKSlcbiAgICAgICAgfSBlbHNlIGlmICh0aGlzLl9ib2R5Rm9ybURhdGEpIHtcbiAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoJ2NvdWxkIG5vdCByZWFkIEZvcm1EYXRhIGJvZHkgYXMgYmxvYicpXG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgcmV0dXJuIFByb21pc2UucmVzb2x2ZShuZXcgQmxvYihbdGhpcy5fYm9keVRleHRdKSlcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICB0aGlzLmFycmF5QnVmZmVyID0gZnVuY3Rpb24oKSB7XG4gICAgICAgIGlmICh0aGlzLl9ib2R5QXJyYXlCdWZmZXIpIHtcbiAgICAgICAgICByZXR1cm4gY29uc3VtZWQodGhpcykgfHwgUHJvbWlzZS5yZXNvbHZlKHRoaXMuX2JvZHlBcnJheUJ1ZmZlcilcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICByZXR1cm4gdGhpcy5ibG9iKCkudGhlbihyZWFkQmxvYkFzQXJyYXlCdWZmZXIpXG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG5cbiAgICB0aGlzLnRleHQgPSBmdW5jdGlvbigpIHtcbiAgICAgIHZhciByZWplY3RlZCA9IGNvbnN1bWVkKHRoaXMpXG4gICAgICBpZiAocmVqZWN0ZWQpIHtcbiAgICAgICAgcmV0dXJuIHJlamVjdGVkXG4gICAgICB9XG5cbiAgICAgIGlmICh0aGlzLl9ib2R5QmxvYikge1xuICAgICAgICByZXR1cm4gcmVhZEJsb2JBc1RleHQodGhpcy5fYm9keUJsb2IpXG4gICAgICB9IGVsc2UgaWYgKHRoaXMuX2JvZHlBcnJheUJ1ZmZlcikge1xuICAgICAgICByZXR1cm4gUHJvbWlzZS5yZXNvbHZlKHJlYWRBcnJheUJ1ZmZlckFzVGV4dCh0aGlzLl9ib2R5QXJyYXlCdWZmZXIpKVxuICAgICAgfSBlbHNlIGlmICh0aGlzLl9ib2R5Rm9ybURhdGEpIHtcbiAgICAgICAgdGhyb3cgbmV3IEVycm9yKCdjb3VsZCBub3QgcmVhZCBGb3JtRGF0YSBib2R5IGFzIHRleHQnKVxuICAgICAgfSBlbHNlIHtcbiAgICAgICAgcmV0dXJuIFByb21pc2UucmVzb2x2ZSh0aGlzLl9ib2R5VGV4dClcbiAgICAgIH1cbiAgICB9XG5cbiAgICBpZiAoc3VwcG9ydC5mb3JtRGF0YSkge1xuICAgICAgdGhpcy5mb3JtRGF0YSA9IGZ1bmN0aW9uKCkge1xuICAgICAgICByZXR1cm4gdGhpcy50ZXh0KCkudGhlbihkZWNvZGUpXG4gICAgICB9XG4gICAgfVxuXG4gICAgdGhpcy5qc29uID0gZnVuY3Rpb24oKSB7XG4gICAgICByZXR1cm4gdGhpcy50ZXh0KCkudGhlbihKU09OLnBhcnNlKVxuICAgIH1cblxuICAgIHJldHVybiB0aGlzXG4gIH1cblxuICAvLyBIVFRQIG1ldGhvZHMgd2hvc2UgY2FwaXRhbGl6YXRpb24gc2hvdWxkIGJlIG5vcm1hbGl6ZWRcbiAgdmFyIG1ldGhvZHMgPSBbJ0RFTEVURScsICdHRVQnLCAnSEVBRCcsICdPUFRJT05TJywgJ1BPU1QnLCAnUFVUJ11cblxuICBmdW5jdGlvbiBub3JtYWxpemVNZXRob2QobWV0aG9kKSB7XG4gICAgdmFyIHVwY2FzZWQgPSBtZXRob2QudG9VcHBlckNhc2UoKVxuICAgIHJldHVybiAobWV0aG9kcy5pbmRleE9mKHVwY2FzZWQpID4gLTEpID8gdXBjYXNlZCA6IG1ldGhvZFxuICB9XG5cbiAgZnVuY3Rpb24gUmVxdWVzdChpbnB1dCwgb3B0aW9ucykge1xuICAgIG9wdGlvbnMgPSBvcHRpb25zIHx8IHt9XG4gICAgdmFyIGJvZHkgPSBvcHRpb25zLmJvZHlcblxuICAgIGlmIChpbnB1dCBpbnN0YW5jZW9mIFJlcXVlc3QpIHtcbiAgICAgIGlmIChpbnB1dC5ib2R5VXNlZCkge1xuICAgICAgICB0aHJvdyBuZXcgVHlwZUVycm9yKCdBbHJlYWR5IHJlYWQnKVxuICAgICAgfVxuICAgICAgdGhpcy51cmwgPSBpbnB1dC51cmxcbiAgICAgIHRoaXMuY3JlZGVudGlhbHMgPSBpbnB1dC5jcmVkZW50aWFsc1xuICAgICAgaWYgKCFvcHRpb25zLmhlYWRlcnMpIHtcbiAgICAgICAgdGhpcy5oZWFkZXJzID0gbmV3IEhlYWRlcnMoaW5wdXQuaGVhZGVycylcbiAgICAgIH1cbiAgICAgIHRoaXMubWV0aG9kID0gaW5wdXQubWV0aG9kXG4gICAgICB0aGlzLm1vZGUgPSBpbnB1dC5tb2RlXG4gICAgICBpZiAoIWJvZHkgJiYgaW5wdXQuX2JvZHlJbml0ICE9IG51bGwpIHtcbiAgICAgICAgYm9keSA9IGlucHV0Ll9ib2R5SW5pdFxuICAgICAgICBpbnB1dC5ib2R5VXNlZCA9IHRydWVcbiAgICAgIH1cbiAgICB9IGVsc2Uge1xuICAgICAgdGhpcy51cmwgPSBTdHJpbmcoaW5wdXQpXG4gICAgfVxuXG4gICAgdGhpcy5jcmVkZW50aWFscyA9IG9wdGlvbnMuY3JlZGVudGlhbHMgfHwgdGhpcy5jcmVkZW50aWFscyB8fCAnb21pdCdcbiAgICBpZiAob3B0aW9ucy5oZWFkZXJzIHx8ICF0aGlzLmhlYWRlcnMpIHtcbiAgICAgIHRoaXMuaGVhZGVycyA9IG5ldyBIZWFkZXJzKG9wdGlvbnMuaGVhZGVycylcbiAgICB9XG4gICAgdGhpcy5tZXRob2QgPSBub3JtYWxpemVNZXRob2Qob3B0aW9ucy5tZXRob2QgfHwgdGhpcy5tZXRob2QgfHwgJ0dFVCcpXG4gICAgdGhpcy5tb2RlID0gb3B0aW9ucy5tb2RlIHx8IHRoaXMubW9kZSB8fCBudWxsXG4gICAgdGhpcy5yZWZlcnJlciA9IG51bGxcblxuICAgIGlmICgodGhpcy5tZXRob2QgPT09ICdHRVQnIHx8IHRoaXMubWV0aG9kID09PSAnSEVBRCcpICYmIGJvZHkpIHtcbiAgICAgIHRocm93IG5ldyBUeXBlRXJyb3IoJ0JvZHkgbm90IGFsbG93ZWQgZm9yIEdFVCBvciBIRUFEIHJlcXVlc3RzJylcbiAgICB9XG4gICAgdGhpcy5faW5pdEJvZHkoYm9keSlcbiAgfVxuXG4gIFJlcXVlc3QucHJvdG90eXBlLmNsb25lID0gZnVuY3Rpb24oKSB7XG4gICAgcmV0dXJuIG5ldyBSZXF1ZXN0KHRoaXMsIHsgYm9keTogdGhpcy5fYm9keUluaXQgfSlcbiAgfVxuXG4gIGZ1bmN0aW9uIGRlY29kZShib2R5KSB7XG4gICAgdmFyIGZvcm0gPSBuZXcgRm9ybURhdGEoKVxuICAgIGJvZHkudHJpbSgpLnNwbGl0KCcmJykuZm9yRWFjaChmdW5jdGlvbihieXRlcykge1xuICAgICAgaWYgKGJ5dGVzKSB7XG4gICAgICAgIHZhciBzcGxpdCA9IGJ5dGVzLnNwbGl0KCc9JylcbiAgICAgICAgdmFyIG5hbWUgPSBzcGxpdC5zaGlmdCgpLnJlcGxhY2UoL1xcKy9nLCAnICcpXG4gICAgICAgIHZhciB2YWx1ZSA9IHNwbGl0LmpvaW4oJz0nKS5yZXBsYWNlKC9cXCsvZywgJyAnKVxuICAgICAgICBmb3JtLmFwcGVuZChkZWNvZGVVUklDb21wb25lbnQobmFtZSksIGRlY29kZVVSSUNvbXBvbmVudCh2YWx1ZSkpXG4gICAgICB9XG4gICAgfSlcbiAgICByZXR1cm4gZm9ybVxuICB9XG5cbiAgZnVuY3Rpb24gcGFyc2VIZWFkZXJzKHJhd0hlYWRlcnMpIHtcbiAgICB2YXIgaGVhZGVycyA9IG5ldyBIZWFkZXJzKClcbiAgICByYXdIZWFkZXJzLnNwbGl0KC9cXHI/XFxuLykuZm9yRWFjaChmdW5jdGlvbihsaW5lKSB7XG4gICAgICB2YXIgcGFydHMgPSBsaW5lLnNwbGl0KCc6JylcbiAgICAgIHZhciBrZXkgPSBwYXJ0cy5zaGlmdCgpLnRyaW0oKVxuICAgICAgaWYgKGtleSkge1xuICAgICAgICB2YXIgdmFsdWUgPSBwYXJ0cy5qb2luKCc6JykudHJpbSgpXG4gICAgICAgIGhlYWRlcnMuYXBwZW5kKGtleSwgdmFsdWUpXG4gICAgICB9XG4gICAgfSlcbiAgICByZXR1cm4gaGVhZGVyc1xuICB9XG5cbiAgQm9keS5jYWxsKFJlcXVlc3QucHJvdG90eXBlKVxuXG4gIGZ1bmN0aW9uIFJlc3BvbnNlKGJvZHlJbml0LCBvcHRpb25zKSB7XG4gICAgaWYgKCFvcHRpb25zKSB7XG4gICAgICBvcHRpb25zID0ge31cbiAgICB9XG5cbiAgICB0aGlzLnR5cGUgPSAnZGVmYXVsdCdcbiAgICB0aGlzLnN0YXR1cyA9ICdzdGF0dXMnIGluIG9wdGlvbnMgPyBvcHRpb25zLnN0YXR1cyA6IDIwMFxuICAgIHRoaXMub2sgPSB0aGlzLnN0YXR1cyA+PSAyMDAgJiYgdGhpcy5zdGF0dXMgPCAzMDBcbiAgICB0aGlzLnN0YXR1c1RleHQgPSAnc3RhdHVzVGV4dCcgaW4gb3B0aW9ucyA/IG9wdGlvbnMuc3RhdHVzVGV4dCA6ICdPSydcbiAgICB0aGlzLmhlYWRlcnMgPSBuZXcgSGVhZGVycyhvcHRpb25zLmhlYWRlcnMpXG4gICAgdGhpcy51cmwgPSBvcHRpb25zLnVybCB8fCAnJ1xuICAgIHRoaXMuX2luaXRCb2R5KGJvZHlJbml0KVxuICB9XG5cbiAgQm9keS5jYWxsKFJlc3BvbnNlLnByb3RvdHlwZSlcblxuICBSZXNwb25zZS5wcm90b3R5cGUuY2xvbmUgPSBmdW5jdGlvbigpIHtcbiAgICByZXR1cm4gbmV3IFJlc3BvbnNlKHRoaXMuX2JvZHlJbml0LCB7XG4gICAgICBzdGF0dXM6IHRoaXMuc3RhdHVzLFxuICAgICAgc3RhdHVzVGV4dDogdGhpcy5zdGF0dXNUZXh0LFxuICAgICAgaGVhZGVyczogbmV3IEhlYWRlcnModGhpcy5oZWFkZXJzKSxcbiAgICAgIHVybDogdGhpcy51cmxcbiAgICB9KVxuICB9XG5cbiAgUmVzcG9uc2UuZXJyb3IgPSBmdW5jdGlvbigpIHtcbiAgICB2YXIgcmVzcG9uc2UgPSBuZXcgUmVzcG9uc2UobnVsbCwge3N0YXR1czogMCwgc3RhdHVzVGV4dDogJyd9KVxuICAgIHJlc3BvbnNlLnR5cGUgPSAnZXJyb3InXG4gICAgcmV0dXJuIHJlc3BvbnNlXG4gIH1cblxuICB2YXIgcmVkaXJlY3RTdGF0dXNlcyA9IFszMDEsIDMwMiwgMzAzLCAzMDcsIDMwOF1cblxuICBSZXNwb25zZS5yZWRpcmVjdCA9IGZ1bmN0aW9uKHVybCwgc3RhdHVzKSB7XG4gICAgaWYgKHJlZGlyZWN0U3RhdHVzZXMuaW5kZXhPZihzdGF0dXMpID09PSAtMSkge1xuICAgICAgdGhyb3cgbmV3IFJhbmdlRXJyb3IoJ0ludmFsaWQgc3RhdHVzIGNvZGUnKVxuICAgIH1cblxuICAgIHJldHVybiBuZXcgUmVzcG9uc2UobnVsbCwge3N0YXR1czogc3RhdHVzLCBoZWFkZXJzOiB7bG9jYXRpb246IHVybH19KVxuICB9XG5cbiAgc2VsZi5IZWFkZXJzID0gSGVhZGVyc1xuICBzZWxmLlJlcXVlc3QgPSBSZXF1ZXN0XG4gIHNlbGYuUmVzcG9uc2UgPSBSZXNwb25zZVxuXG4gIHNlbGYuZmV0Y2ggPSBmdW5jdGlvbihpbnB1dCwgaW5pdCkge1xuICAgIHJldHVybiBuZXcgUHJvbWlzZShmdW5jdGlvbihyZXNvbHZlLCByZWplY3QpIHtcbiAgICAgIHZhciByZXF1ZXN0ID0gbmV3IFJlcXVlc3QoaW5wdXQsIGluaXQpXG4gICAgICB2YXIgeGhyID0gbmV3IFhNTEh0dHBSZXF1ZXN0KClcblxuICAgICAgeGhyLm9ubG9hZCA9IGZ1bmN0aW9uKCkge1xuICAgICAgICB2YXIgb3B0aW9ucyA9IHtcbiAgICAgICAgICBzdGF0dXM6IHhoci5zdGF0dXMsXG4gICAgICAgICAgc3RhdHVzVGV4dDogeGhyLnN0YXR1c1RleHQsXG4gICAgICAgICAgaGVhZGVyczogcGFyc2VIZWFkZXJzKHhoci5nZXRBbGxSZXNwb25zZUhlYWRlcnMoKSB8fCAnJylcbiAgICAgICAgfVxuICAgICAgICBvcHRpb25zLnVybCA9ICdyZXNwb25zZVVSTCcgaW4geGhyID8geGhyLnJlc3BvbnNlVVJMIDogb3B0aW9ucy5oZWFkZXJzLmdldCgnWC1SZXF1ZXN0LVVSTCcpXG4gICAgICAgIHZhciBib2R5ID0gJ3Jlc3BvbnNlJyBpbiB4aHIgPyB4aHIucmVzcG9uc2UgOiB4aHIucmVzcG9uc2VUZXh0XG4gICAgICAgIHJlc29sdmUobmV3IFJlc3BvbnNlKGJvZHksIG9wdGlvbnMpKVxuICAgICAgfVxuXG4gICAgICB4aHIub25lcnJvciA9IGZ1bmN0aW9uKCkge1xuICAgICAgICByZWplY3QobmV3IFR5cGVFcnJvcignTmV0d29yayByZXF1ZXN0IGZhaWxlZCcpKVxuICAgICAgfVxuXG4gICAgICB4aHIub250aW1lb3V0ID0gZnVuY3Rpb24oKSB7XG4gICAgICAgIHJlamVjdChuZXcgVHlwZUVycm9yKCdOZXR3b3JrIHJlcXVlc3QgZmFpbGVkJykpXG4gICAgICB9XG5cbiAgICAgIHhoci5vcGVuKHJlcXVlc3QubWV0aG9kLCByZXF1ZXN0LnVybCwgdHJ1ZSlcblxuICAgICAgaWYgKHJlcXVlc3QuY3JlZGVudGlhbHMgPT09ICdpbmNsdWRlJykge1xuICAgICAgICB4aHIud2l0aENyZWRlbnRpYWxzID0gdHJ1ZVxuICAgICAgfVxuXG4gICAgICBpZiAoJ3Jlc3BvbnNlVHlwZScgaW4geGhyICYmIHN1cHBvcnQuYmxvYikge1xuICAgICAgICB4aHIucmVzcG9uc2VUeXBlID0gJ2Jsb2InXG4gICAgICB9XG5cbiAgICAgIHJlcXVlc3QuaGVhZGVycy5mb3JFYWNoKGZ1bmN0aW9uKHZhbHVlLCBuYW1lKSB7XG4gICAgICAgIHhoci5zZXRSZXF1ZXN0SGVhZGVyKG5hbWUsIHZhbHVlKVxuICAgICAgfSlcblxuICAgICAgeGhyLnNlbmQodHlwZW9mIHJlcXVlc3QuX2JvZHlJbml0ID09PSAndW5kZWZpbmVkJyA/IG51bGwgOiByZXF1ZXN0Ll9ib2R5SW5pdClcbiAgICB9KVxuICB9XG4gIHNlbGYuZmV0Y2gucG9seWZpbGwgPSB0cnVlXG59KSh0eXBlb2Ygc2VsZiAhPT0gJ3VuZGVmaW5lZCcgPyBzZWxmIDogdGhpcyk7XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL25vZGVfbW9kdWxlcy9fd2hhdHdnLWZldGNoQDIuMC4zQHdoYXR3Zy1mZXRjaC9mZXRjaC5qc1xuLy8gbW9kdWxlIGlkID0gOTNcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiaW1wb3J0ICcuLi9jc3MvbWFpbi5jc3MnO1xyXG5pbXBvcnQgJy4uL2Nzcy9jb250cm9sbGVyLmNzcyc7XHJcbi8qVE9ETzogQ1NTIGltcG9ydCBpbiBKcywgSSBkb24ndCBsaWtlIGl0LiovXHJcblxyXG5pbXBvcnQgVGltZXIgZnJvbSAnLi9UaW1lci5qcyc7XHJcbmltcG9ydCBDYW1lcmEgZnJvbSAnLi9DYW1lcmEuanMnO1xyXG5pbXBvcnQgRW50aXR5IGZyb20gJy4vRW50aXR5LmpzJztcclxuaW1wb3J0IFBsYXllckNvbnRyb2xsZXIgZnJvbSAnLi90cmFpdHMvUGxheWVyQ29udHJvbGxlci5qcyc7XHJcbmltcG9ydCB7Y3JlYXRlTGV2ZWxMb2FkZXJ9IGZyb20gJy4vbG9hZGVycy9sZXZlbC5qcyc7XHJcbmltcG9ydCB7bG9hZEZvbnR9IGZyb20gJy4vbG9hZGVycy9mb250LmpzJztcclxuaW1wb3J0IHtsb2FkRW50aXRpZXN9IGZyb20gJy4vZW50aXRpZXMuanMnO1xyXG5pbXBvcnQge2NyZWF0ZURhc2hib2FyZExheWVyfSBmcm9tICcuL2xheWVycy9kYXNoYm9hcmQuanMnO1xyXG5pbXBvcnQge3NldHVwS2V5Ym9hcmR9IGZyb20gJy4vaW5wdXQvaW5wdXQuanMnO1xyXG4vLyBpbXBvcnQge2NyZWF0ZUNvbGxpc2lvbkxheWVyfSBmcm9tICcuL2xheWVycy9jb2xsaXNpb24uanMnXHJcbi8vIGltcG9ydCB7Y3JlYXRlQ2FtZXJhTGF5ZXJ9IGZyb20gJy4vbGF5ZXJzL2NhbWVyYS5qcyc7XHJcbi8vIGltcG9ydCB7c2V0dXBNb3VzZUNvbnRyb2x9IGZyb20gJy4vZGVidWcuanMnO1xyXG5cclxuXHJcbmZ1bmN0aW9uIGNyZWF0ZVBsYXllckVudihwbGF5ZXJFbnRpdHkpIHtcclxuICAgIGNvbnN0IHBsYXllckVudiA9IG5ldyBFbnRpdHkoKTtcclxuICAgIGNvbnN0IHBsYXllckNvbnRyb2wgPSBuZXcgUGxheWVyQ29udHJvbGxlcigpO1xyXG4gICAgcGxheWVyQ29udHJvbC5zZXRQbGF5ZXIocGxheWVyRW50aXR5KTtcclxuICAgIHBsYXllckVudi5hZGRUcmFpdChwbGF5ZXJDb250cm9sKTtcclxuXHJcbiAgICByZXR1cm4gcGxheWVyRW52O1xyXG59XHJcblxyXG5hc3luYyBmdW5jdGlvbiBtYWluKGNhbnZhcykge1xyXG4gICAgY29uc3QgY29udGV4dCA9IGNhbnZhcy5nZXRDb250ZXh0KCcyZCcpO1xyXG5cclxuICAgIGNvbnN0IFtlbnRpdHlGYWN0b3J5LCBmb250XSA9IGF3YWl0IFByb21pc2UuYWxsKFtcclxuICAgICAgICBsb2FkRW50aXRpZXMoKSxcclxuICAgICAgICBsb2FkRm9udCgpXHJcbiAgICBdKTtcclxuICAgIGNvbnN0IGxvYWRMZXZlbCA9IGF3YWl0IGNyZWF0ZUxldmVsTG9hZGVyKGVudGl0eUZhY3RvcnkpO1xyXG4gICAgY29uc3QgbGV2ZWwgPSBhd2FpdCBsb2FkTGV2ZWwoJzEtMScpO1xyXG5cclxuICAgIGNvbnN0IGNhbWVyYSA9IG5ldyBDYW1lcmEoKTtcclxuXHJcbiAgICBjb25zdCBtYXJpbyA9IGVudGl0eUZhY3RvcnkubWFyaW8oKTtcclxuICAgIG1hcmlvLnBvcy5zZXQoNjQsIDEwMCk7XHJcbiAgICBsZXZlbC5lbnRpdGllcy5hZGQobWFyaW8pO1xyXG5cclxuICAgIGNvbnN0IHBsYXllckVudiA9IGNyZWF0ZVBsYXllckVudihtYXJpbyk7XHJcbiAgICBsZXZlbC5lbnRpdGllcy5hZGQocGxheWVyRW52KTtcclxuXHJcbiAgICBjb25zdCBpbnB1dCA9IHNldHVwS2V5Ym9hcmQobWFyaW8pO1xyXG4gICAgaW5wdXQubGlzdGVuVG8od2luZG93KTtcclxuXHJcblxyXG4gICAgbGV2ZWwuY29tcC5sYXllcnMucHVzaChjcmVhdGVEYXNoYm9hcmRMYXllcihmb250LCBwbGF5ZXJFbnYpKTtcclxuXHJcbiAgICAvKkRlYnVnIFRvb2xzIDogKi9cclxuICAgIC8vIGxldmVsLmNvbXAubGF5ZXJzLnB1c2goXHJcbiAgICAvLyAgICAgY3JlYXRlQ29sbGlzaW9uTGF5ZXIobGV2ZWwpLFxyXG4gICAgLy8gICAgIGNyZWF0ZUNhbWVyYUxheWVyKGNhbWVyYSkpO1xyXG4gICAgLy8gc2V0dXBNb3VzZUNvbnRyb2woY2FudmFzLCBtYXJpbywgY2FtZXJhKTtcclxuXHJcblxyXG4gICAgY29uc3QgdGltZXIgPSBuZXcgVGltZXIoMS82MCk7XHJcblxyXG4gICAgdGltZXIudXBkYXRlID0gZnVuY3Rpb24gdXBkYXRlKGRlbHRhVGltZSkge1xyXG4gICAgICAgIGxldmVsLnVwZGF0ZShkZWx0YVRpbWUpO1xyXG5cclxuICAgICAgICBjYW1lcmEucG9zLnggPSBNYXRoLm1heCgwLCBtYXJpby5wb3MueCAtIDEwMCk7XHJcblxyXG4gICAgICAgIGxldmVsLmNvbXAuZHJhdyhjb250ZXh0LCBjYW1lcmEpO1xyXG5cclxuICAgIH07XHJcblxyXG4gICAgdGltZXIuc3RhcnQoKTtcclxufVxyXG5cclxuXHJcbmNvbnN0IGNhbnZhcyA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdzY3JlZW4nKTtcclxubWFpbihjYW52YXMpO1xuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3B1YmxpYy9qcy9tYWluLmpzIiwiLyoqXG4gKiBDb3B5cmlnaHQgKGMpIDIwMTQtcHJlc2VudCwgRmFjZWJvb2ssIEluYy5cbiAqXG4gKiBUaGlzIHNvdXJjZSBjb2RlIGlzIGxpY2Vuc2VkIHVuZGVyIHRoZSBNSVQgbGljZW5zZSBmb3VuZCBpbiB0aGVcbiAqIExJQ0VOU0UgZmlsZSBpbiB0aGUgcm9vdCBkaXJlY3Rvcnkgb2YgdGhpcyBzb3VyY2UgdHJlZS5cbiAqL1xuXG4vLyBUaGlzIG1ldGhvZCBvZiBvYnRhaW5pbmcgYSByZWZlcmVuY2UgdG8gdGhlIGdsb2JhbCBvYmplY3QgbmVlZHMgdG8gYmVcbi8vIGtlcHQgaWRlbnRpY2FsIHRvIHRoZSB3YXkgaXQgaXMgb2J0YWluZWQgaW4gcnVudGltZS5qc1xudmFyIGcgPSAoZnVuY3Rpb24oKSB7IHJldHVybiB0aGlzIH0pKCkgfHwgRnVuY3Rpb24oXCJyZXR1cm4gdGhpc1wiKSgpO1xuXG4vLyBVc2UgYGdldE93blByb3BlcnR5TmFtZXNgIGJlY2F1c2Ugbm90IGFsbCBicm93c2VycyBzdXBwb3J0IGNhbGxpbmdcbi8vIGBoYXNPd25Qcm9wZXJ0eWAgb24gdGhlIGdsb2JhbCBgc2VsZmAgb2JqZWN0IGluIGEgd29ya2VyLiBTZWUgIzE4My5cbnZhciBoYWRSdW50aW1lID0gZy5yZWdlbmVyYXRvclJ1bnRpbWUgJiZcbiAgT2JqZWN0LmdldE93blByb3BlcnR5TmFtZXMoZykuaW5kZXhPZihcInJlZ2VuZXJhdG9yUnVudGltZVwiKSA+PSAwO1xuXG4vLyBTYXZlIHRoZSBvbGQgcmVnZW5lcmF0b3JSdW50aW1lIGluIGNhc2UgaXQgbmVlZHMgdG8gYmUgcmVzdG9yZWQgbGF0ZXIuXG52YXIgb2xkUnVudGltZSA9IGhhZFJ1bnRpbWUgJiYgZy5yZWdlbmVyYXRvclJ1bnRpbWU7XG5cbi8vIEZvcmNlIHJlZXZhbHV0YXRpb24gb2YgcnVudGltZS5qcy5cbmcucmVnZW5lcmF0b3JSdW50aW1lID0gdW5kZWZpbmVkO1xuXG5tb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCIuL3J1bnRpbWVcIik7XG5cbmlmIChoYWRSdW50aW1lKSB7XG4gIC8vIFJlc3RvcmUgdGhlIG9yaWdpbmFsIHJ1bnRpbWUuXG4gIGcucmVnZW5lcmF0b3JSdW50aW1lID0gb2xkUnVudGltZTtcbn0gZWxzZSB7XG4gIC8vIFJlbW92ZSB0aGUgZ2xvYmFsIHByb3BlcnR5IGFkZGVkIGJ5IHJ1bnRpbWUuanMuXG4gIHRyeSB7XG4gICAgZGVsZXRlIGcucmVnZW5lcmF0b3JSdW50aW1lO1xuICB9IGNhdGNoKGUpIHtcbiAgICBnLnJlZ2VuZXJhdG9yUnVudGltZSA9IHVuZGVmaW5lZDtcbiAgfVxufVxuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9ub2RlX21vZHVsZXMvX3JlZ2VuZXJhdG9yLXJ1bnRpbWVAMC4xMS4xQHJlZ2VuZXJhdG9yLXJ1bnRpbWUvcnVudGltZS1tb2R1bGUuanNcbi8vIG1vZHVsZSBpZCA9IDk1XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIi8qKlxuICogQ29weXJpZ2h0IChjKSAyMDE0LXByZXNlbnQsIEZhY2Vib29rLCBJbmMuXG4gKlxuICogVGhpcyBzb3VyY2UgY29kZSBpcyBsaWNlbnNlZCB1bmRlciB0aGUgTUlUIGxpY2Vuc2UgZm91bmQgaW4gdGhlXG4gKiBMSUNFTlNFIGZpbGUgaW4gdGhlIHJvb3QgZGlyZWN0b3J5IG9mIHRoaXMgc291cmNlIHRyZWUuXG4gKi9cblxuIShmdW5jdGlvbihnbG9iYWwpIHtcbiAgXCJ1c2Ugc3RyaWN0XCI7XG5cbiAgdmFyIE9wID0gT2JqZWN0LnByb3RvdHlwZTtcbiAgdmFyIGhhc093biA9IE9wLmhhc093blByb3BlcnR5O1xuICB2YXIgdW5kZWZpbmVkOyAvLyBNb3JlIGNvbXByZXNzaWJsZSB0aGFuIHZvaWQgMC5cbiAgdmFyICRTeW1ib2wgPSB0eXBlb2YgU3ltYm9sID09PSBcImZ1bmN0aW9uXCIgPyBTeW1ib2wgOiB7fTtcbiAgdmFyIGl0ZXJhdG9yU3ltYm9sID0gJFN5bWJvbC5pdGVyYXRvciB8fCBcIkBAaXRlcmF0b3JcIjtcbiAgdmFyIGFzeW5jSXRlcmF0b3JTeW1ib2wgPSAkU3ltYm9sLmFzeW5jSXRlcmF0b3IgfHwgXCJAQGFzeW5jSXRlcmF0b3JcIjtcbiAgdmFyIHRvU3RyaW5nVGFnU3ltYm9sID0gJFN5bWJvbC50b1N0cmluZ1RhZyB8fCBcIkBAdG9TdHJpbmdUYWdcIjtcblxuICB2YXIgaW5Nb2R1bGUgPSB0eXBlb2YgbW9kdWxlID09PSBcIm9iamVjdFwiO1xuICB2YXIgcnVudGltZSA9IGdsb2JhbC5yZWdlbmVyYXRvclJ1bnRpbWU7XG4gIGlmIChydW50aW1lKSB7XG4gICAgaWYgKGluTW9kdWxlKSB7XG4gICAgICAvLyBJZiByZWdlbmVyYXRvclJ1bnRpbWUgaXMgZGVmaW5lZCBnbG9iYWxseSBhbmQgd2UncmUgaW4gYSBtb2R1bGUsXG4gICAgICAvLyBtYWtlIHRoZSBleHBvcnRzIG9iamVjdCBpZGVudGljYWwgdG8gcmVnZW5lcmF0b3JSdW50aW1lLlxuICAgICAgbW9kdWxlLmV4cG9ydHMgPSBydW50aW1lO1xuICAgIH1cbiAgICAvLyBEb24ndCBib3RoZXIgZXZhbHVhdGluZyB0aGUgcmVzdCBvZiB0aGlzIGZpbGUgaWYgdGhlIHJ1bnRpbWUgd2FzXG4gICAgLy8gYWxyZWFkeSBkZWZpbmVkIGdsb2JhbGx5LlxuICAgIHJldHVybjtcbiAgfVxuXG4gIC8vIERlZmluZSB0aGUgcnVudGltZSBnbG9iYWxseSAoYXMgZXhwZWN0ZWQgYnkgZ2VuZXJhdGVkIGNvZGUpIGFzIGVpdGhlclxuICAvLyBtb2R1bGUuZXhwb3J0cyAoaWYgd2UncmUgaW4gYSBtb2R1bGUpIG9yIGEgbmV3LCBlbXB0eSBvYmplY3QuXG4gIHJ1bnRpbWUgPSBnbG9iYWwucmVnZW5lcmF0b3JSdW50aW1lID0gaW5Nb2R1bGUgPyBtb2R1bGUuZXhwb3J0cyA6IHt9O1xuXG4gIGZ1bmN0aW9uIHdyYXAoaW5uZXJGbiwgb3V0ZXJGbiwgc2VsZiwgdHJ5TG9jc0xpc3QpIHtcbiAgICAvLyBJZiBvdXRlckZuIHByb3ZpZGVkIGFuZCBvdXRlckZuLnByb3RvdHlwZSBpcyBhIEdlbmVyYXRvciwgdGhlbiBvdXRlckZuLnByb3RvdHlwZSBpbnN0YW5jZW9mIEdlbmVyYXRvci5cbiAgICB2YXIgcHJvdG9HZW5lcmF0b3IgPSBvdXRlckZuICYmIG91dGVyRm4ucHJvdG90eXBlIGluc3RhbmNlb2YgR2VuZXJhdG9yID8gb3V0ZXJGbiA6IEdlbmVyYXRvcjtcbiAgICB2YXIgZ2VuZXJhdG9yID0gT2JqZWN0LmNyZWF0ZShwcm90b0dlbmVyYXRvci5wcm90b3R5cGUpO1xuICAgIHZhciBjb250ZXh0ID0gbmV3IENvbnRleHQodHJ5TG9jc0xpc3QgfHwgW10pO1xuXG4gICAgLy8gVGhlIC5faW52b2tlIG1ldGhvZCB1bmlmaWVzIHRoZSBpbXBsZW1lbnRhdGlvbnMgb2YgdGhlIC5uZXh0LFxuICAgIC8vIC50aHJvdywgYW5kIC5yZXR1cm4gbWV0aG9kcy5cbiAgICBnZW5lcmF0b3IuX2ludm9rZSA9IG1ha2VJbnZva2VNZXRob2QoaW5uZXJGbiwgc2VsZiwgY29udGV4dCk7XG5cbiAgICByZXR1cm4gZ2VuZXJhdG9yO1xuICB9XG4gIHJ1bnRpbWUud3JhcCA9IHdyYXA7XG5cbiAgLy8gVHJ5L2NhdGNoIGhlbHBlciB0byBtaW5pbWl6ZSBkZW9wdGltaXphdGlvbnMuIFJldHVybnMgYSBjb21wbGV0aW9uXG4gIC8vIHJlY29yZCBsaWtlIGNvbnRleHQudHJ5RW50cmllc1tpXS5jb21wbGV0aW9uLiBUaGlzIGludGVyZmFjZSBjb3VsZFxuICAvLyBoYXZlIGJlZW4gKGFuZCB3YXMgcHJldmlvdXNseSkgZGVzaWduZWQgdG8gdGFrZSBhIGNsb3N1cmUgdG8gYmVcbiAgLy8gaW52b2tlZCB3aXRob3V0IGFyZ3VtZW50cywgYnV0IGluIGFsbCB0aGUgY2FzZXMgd2UgY2FyZSBhYm91dCB3ZVxuICAvLyBhbHJlYWR5IGhhdmUgYW4gZXhpc3RpbmcgbWV0aG9kIHdlIHdhbnQgdG8gY2FsbCwgc28gdGhlcmUncyBubyBuZWVkXG4gIC8vIHRvIGNyZWF0ZSBhIG5ldyBmdW5jdGlvbiBvYmplY3QuIFdlIGNhbiBldmVuIGdldCBhd2F5IHdpdGggYXNzdW1pbmdcbiAgLy8gdGhlIG1ldGhvZCB0YWtlcyBleGFjdGx5IG9uZSBhcmd1bWVudCwgc2luY2UgdGhhdCBoYXBwZW5zIHRvIGJlIHRydWVcbiAgLy8gaW4gZXZlcnkgY2FzZSwgc28gd2UgZG9uJ3QgaGF2ZSB0byB0b3VjaCB0aGUgYXJndW1lbnRzIG9iamVjdC4gVGhlXG4gIC8vIG9ubHkgYWRkaXRpb25hbCBhbGxvY2F0aW9uIHJlcXVpcmVkIGlzIHRoZSBjb21wbGV0aW9uIHJlY29yZCwgd2hpY2hcbiAgLy8gaGFzIGEgc3RhYmxlIHNoYXBlIGFuZCBzbyBob3BlZnVsbHkgc2hvdWxkIGJlIGNoZWFwIHRvIGFsbG9jYXRlLlxuICBmdW5jdGlvbiB0cnlDYXRjaChmbiwgb2JqLCBhcmcpIHtcbiAgICB0cnkge1xuICAgICAgcmV0dXJuIHsgdHlwZTogXCJub3JtYWxcIiwgYXJnOiBmbi5jYWxsKG9iaiwgYXJnKSB9O1xuICAgIH0gY2F0Y2ggKGVycikge1xuICAgICAgcmV0dXJuIHsgdHlwZTogXCJ0aHJvd1wiLCBhcmc6IGVyciB9O1xuICAgIH1cbiAgfVxuXG4gIHZhciBHZW5TdGF0ZVN1c3BlbmRlZFN0YXJ0ID0gXCJzdXNwZW5kZWRTdGFydFwiO1xuICB2YXIgR2VuU3RhdGVTdXNwZW5kZWRZaWVsZCA9IFwic3VzcGVuZGVkWWllbGRcIjtcbiAgdmFyIEdlblN0YXRlRXhlY3V0aW5nID0gXCJleGVjdXRpbmdcIjtcbiAgdmFyIEdlblN0YXRlQ29tcGxldGVkID0gXCJjb21wbGV0ZWRcIjtcblxuICAvLyBSZXR1cm5pbmcgdGhpcyBvYmplY3QgZnJvbSB0aGUgaW5uZXJGbiBoYXMgdGhlIHNhbWUgZWZmZWN0IGFzXG4gIC8vIGJyZWFraW5nIG91dCBvZiB0aGUgZGlzcGF0Y2ggc3dpdGNoIHN0YXRlbWVudC5cbiAgdmFyIENvbnRpbnVlU2VudGluZWwgPSB7fTtcblxuICAvLyBEdW1teSBjb25zdHJ1Y3RvciBmdW5jdGlvbnMgdGhhdCB3ZSB1c2UgYXMgdGhlIC5jb25zdHJ1Y3RvciBhbmRcbiAgLy8gLmNvbnN0cnVjdG9yLnByb3RvdHlwZSBwcm9wZXJ0aWVzIGZvciBmdW5jdGlvbnMgdGhhdCByZXR1cm4gR2VuZXJhdG9yXG4gIC8vIG9iamVjdHMuIEZvciBmdWxsIHNwZWMgY29tcGxpYW5jZSwgeW91IG1heSB3aXNoIHRvIGNvbmZpZ3VyZSB5b3VyXG4gIC8vIG1pbmlmaWVyIG5vdCB0byBtYW5nbGUgdGhlIG5hbWVzIG9mIHRoZXNlIHR3byBmdW5jdGlvbnMuXG4gIGZ1bmN0aW9uIEdlbmVyYXRvcigpIHt9XG4gIGZ1bmN0aW9uIEdlbmVyYXRvckZ1bmN0aW9uKCkge31cbiAgZnVuY3Rpb24gR2VuZXJhdG9yRnVuY3Rpb25Qcm90b3R5cGUoKSB7fVxuXG4gIC8vIFRoaXMgaXMgYSBwb2x5ZmlsbCBmb3IgJUl0ZXJhdG9yUHJvdG90eXBlJSBmb3IgZW52aXJvbm1lbnRzIHRoYXRcbiAgLy8gZG9uJ3QgbmF0aXZlbHkgc3VwcG9ydCBpdC5cbiAgdmFyIEl0ZXJhdG9yUHJvdG90eXBlID0ge307XG4gIEl0ZXJhdG9yUHJvdG90eXBlW2l0ZXJhdG9yU3ltYm9sXSA9IGZ1bmN0aW9uICgpIHtcbiAgICByZXR1cm4gdGhpcztcbiAgfTtcblxuICB2YXIgZ2V0UHJvdG8gPSBPYmplY3QuZ2V0UHJvdG90eXBlT2Y7XG4gIHZhciBOYXRpdmVJdGVyYXRvclByb3RvdHlwZSA9IGdldFByb3RvICYmIGdldFByb3RvKGdldFByb3RvKHZhbHVlcyhbXSkpKTtcbiAgaWYgKE5hdGl2ZUl0ZXJhdG9yUHJvdG90eXBlICYmXG4gICAgICBOYXRpdmVJdGVyYXRvclByb3RvdHlwZSAhPT0gT3AgJiZcbiAgICAgIGhhc093bi5jYWxsKE5hdGl2ZUl0ZXJhdG9yUHJvdG90eXBlLCBpdGVyYXRvclN5bWJvbCkpIHtcbiAgICAvLyBUaGlzIGVudmlyb25tZW50IGhhcyBhIG5hdGl2ZSAlSXRlcmF0b3JQcm90b3R5cGUlOyB1c2UgaXQgaW5zdGVhZFxuICAgIC8vIG9mIHRoZSBwb2x5ZmlsbC5cbiAgICBJdGVyYXRvclByb3RvdHlwZSA9IE5hdGl2ZUl0ZXJhdG9yUHJvdG90eXBlO1xuICB9XG5cbiAgdmFyIEdwID0gR2VuZXJhdG9yRnVuY3Rpb25Qcm90b3R5cGUucHJvdG90eXBlID1cbiAgICBHZW5lcmF0b3IucHJvdG90eXBlID0gT2JqZWN0LmNyZWF0ZShJdGVyYXRvclByb3RvdHlwZSk7XG4gIEdlbmVyYXRvckZ1bmN0aW9uLnByb3RvdHlwZSA9IEdwLmNvbnN0cnVjdG9yID0gR2VuZXJhdG9yRnVuY3Rpb25Qcm90b3R5cGU7XG4gIEdlbmVyYXRvckZ1bmN0aW9uUHJvdG90eXBlLmNvbnN0cnVjdG9yID0gR2VuZXJhdG9yRnVuY3Rpb247XG4gIEdlbmVyYXRvckZ1bmN0aW9uUHJvdG90eXBlW3RvU3RyaW5nVGFnU3ltYm9sXSA9XG4gICAgR2VuZXJhdG9yRnVuY3Rpb24uZGlzcGxheU5hbWUgPSBcIkdlbmVyYXRvckZ1bmN0aW9uXCI7XG5cbiAgLy8gSGVscGVyIGZvciBkZWZpbmluZyB0aGUgLm5leHQsIC50aHJvdywgYW5kIC5yZXR1cm4gbWV0aG9kcyBvZiB0aGVcbiAgLy8gSXRlcmF0b3IgaW50ZXJmYWNlIGluIHRlcm1zIG9mIGEgc2luZ2xlIC5faW52b2tlIG1ldGhvZC5cbiAgZnVuY3Rpb24gZGVmaW5lSXRlcmF0b3JNZXRob2RzKHByb3RvdHlwZSkge1xuICAgIFtcIm5leHRcIiwgXCJ0aHJvd1wiLCBcInJldHVyblwiXS5mb3JFYWNoKGZ1bmN0aW9uKG1ldGhvZCkge1xuICAgICAgcHJvdG90eXBlW21ldGhvZF0gPSBmdW5jdGlvbihhcmcpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuX2ludm9rZShtZXRob2QsIGFyZyk7XG4gICAgICB9O1xuICAgIH0pO1xuICB9XG5cbiAgcnVudGltZS5pc0dlbmVyYXRvckZ1bmN0aW9uID0gZnVuY3Rpb24oZ2VuRnVuKSB7XG4gICAgdmFyIGN0b3IgPSB0eXBlb2YgZ2VuRnVuID09PSBcImZ1bmN0aW9uXCIgJiYgZ2VuRnVuLmNvbnN0cnVjdG9yO1xuICAgIHJldHVybiBjdG9yXG4gICAgICA/IGN0b3IgPT09IEdlbmVyYXRvckZ1bmN0aW9uIHx8XG4gICAgICAgIC8vIEZvciB0aGUgbmF0aXZlIEdlbmVyYXRvckZ1bmN0aW9uIGNvbnN0cnVjdG9yLCB0aGUgYmVzdCB3ZSBjYW5cbiAgICAgICAgLy8gZG8gaXMgdG8gY2hlY2sgaXRzIC5uYW1lIHByb3BlcnR5LlxuICAgICAgICAoY3Rvci5kaXNwbGF5TmFtZSB8fCBjdG9yLm5hbWUpID09PSBcIkdlbmVyYXRvckZ1bmN0aW9uXCJcbiAgICAgIDogZmFsc2U7XG4gIH07XG5cbiAgcnVudGltZS5tYXJrID0gZnVuY3Rpb24oZ2VuRnVuKSB7XG4gICAgaWYgKE9iamVjdC5zZXRQcm90b3R5cGVPZikge1xuICAgICAgT2JqZWN0LnNldFByb3RvdHlwZU9mKGdlbkZ1biwgR2VuZXJhdG9yRnVuY3Rpb25Qcm90b3R5cGUpO1xuICAgIH0gZWxzZSB7XG4gICAgICBnZW5GdW4uX19wcm90b19fID0gR2VuZXJhdG9yRnVuY3Rpb25Qcm90b3R5cGU7XG4gICAgICBpZiAoISh0b1N0cmluZ1RhZ1N5bWJvbCBpbiBnZW5GdW4pKSB7XG4gICAgICAgIGdlbkZ1blt0b1N0cmluZ1RhZ1N5bWJvbF0gPSBcIkdlbmVyYXRvckZ1bmN0aW9uXCI7XG4gICAgICB9XG4gICAgfVxuICAgIGdlbkZ1bi5wcm90b3R5cGUgPSBPYmplY3QuY3JlYXRlKEdwKTtcbiAgICByZXR1cm4gZ2VuRnVuO1xuICB9O1xuXG4gIC8vIFdpdGhpbiB0aGUgYm9keSBvZiBhbnkgYXN5bmMgZnVuY3Rpb24sIGBhd2FpdCB4YCBpcyB0cmFuc2Zvcm1lZCB0b1xuICAvLyBgeWllbGQgcmVnZW5lcmF0b3JSdW50aW1lLmF3cmFwKHgpYCwgc28gdGhhdCB0aGUgcnVudGltZSBjYW4gdGVzdFxuICAvLyBgaGFzT3duLmNhbGwodmFsdWUsIFwiX19hd2FpdFwiKWAgdG8gZGV0ZXJtaW5lIGlmIHRoZSB5aWVsZGVkIHZhbHVlIGlzXG4gIC8vIG1lYW50IHRvIGJlIGF3YWl0ZWQuXG4gIHJ1bnRpbWUuYXdyYXAgPSBmdW5jdGlvbihhcmcpIHtcbiAgICByZXR1cm4geyBfX2F3YWl0OiBhcmcgfTtcbiAgfTtcblxuICBmdW5jdGlvbiBBc3luY0l0ZXJhdG9yKGdlbmVyYXRvcikge1xuICAgIGZ1bmN0aW9uIGludm9rZShtZXRob2QsIGFyZywgcmVzb2x2ZSwgcmVqZWN0KSB7XG4gICAgICB2YXIgcmVjb3JkID0gdHJ5Q2F0Y2goZ2VuZXJhdG9yW21ldGhvZF0sIGdlbmVyYXRvciwgYXJnKTtcbiAgICAgIGlmIChyZWNvcmQudHlwZSA9PT0gXCJ0aHJvd1wiKSB7XG4gICAgICAgIHJlamVjdChyZWNvcmQuYXJnKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHZhciByZXN1bHQgPSByZWNvcmQuYXJnO1xuICAgICAgICB2YXIgdmFsdWUgPSByZXN1bHQudmFsdWU7XG4gICAgICAgIGlmICh2YWx1ZSAmJlxuICAgICAgICAgICAgdHlwZW9mIHZhbHVlID09PSBcIm9iamVjdFwiICYmXG4gICAgICAgICAgICBoYXNPd24uY2FsbCh2YWx1ZSwgXCJfX2F3YWl0XCIpKSB7XG4gICAgICAgICAgcmV0dXJuIFByb21pc2UucmVzb2x2ZSh2YWx1ZS5fX2F3YWl0KS50aGVuKGZ1bmN0aW9uKHZhbHVlKSB7XG4gICAgICAgICAgICBpbnZva2UoXCJuZXh0XCIsIHZhbHVlLCByZXNvbHZlLCByZWplY3QpO1xuICAgICAgICAgIH0sIGZ1bmN0aW9uKGVycikge1xuICAgICAgICAgICAgaW52b2tlKFwidGhyb3dcIiwgZXJyLCByZXNvbHZlLCByZWplY3QpO1xuICAgICAgICAgIH0pO1xuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIFByb21pc2UucmVzb2x2ZSh2YWx1ZSkudGhlbihmdW5jdGlvbih1bndyYXBwZWQpIHtcbiAgICAgICAgICAvLyBXaGVuIGEgeWllbGRlZCBQcm9taXNlIGlzIHJlc29sdmVkLCBpdHMgZmluYWwgdmFsdWUgYmVjb21lc1xuICAgICAgICAgIC8vIHRoZSAudmFsdWUgb2YgdGhlIFByb21pc2U8e3ZhbHVlLGRvbmV9PiByZXN1bHQgZm9yIHRoZVxuICAgICAgICAgIC8vIGN1cnJlbnQgaXRlcmF0aW9uLiBJZiB0aGUgUHJvbWlzZSBpcyByZWplY3RlZCwgaG93ZXZlciwgdGhlXG4gICAgICAgICAgLy8gcmVzdWx0IGZvciB0aGlzIGl0ZXJhdGlvbiB3aWxsIGJlIHJlamVjdGVkIHdpdGggdGhlIHNhbWVcbiAgICAgICAgICAvLyByZWFzb24uIE5vdGUgdGhhdCByZWplY3Rpb25zIG9mIHlpZWxkZWQgUHJvbWlzZXMgYXJlIG5vdFxuICAgICAgICAgIC8vIHRocm93biBiYWNrIGludG8gdGhlIGdlbmVyYXRvciBmdW5jdGlvbiwgYXMgaXMgdGhlIGNhc2VcbiAgICAgICAgICAvLyB3aGVuIGFuIGF3YWl0ZWQgUHJvbWlzZSBpcyByZWplY3RlZC4gVGhpcyBkaWZmZXJlbmNlIGluXG4gICAgICAgICAgLy8gYmVoYXZpb3IgYmV0d2VlbiB5aWVsZCBhbmQgYXdhaXQgaXMgaW1wb3J0YW50LCBiZWNhdXNlIGl0XG4gICAgICAgICAgLy8gYWxsb3dzIHRoZSBjb25zdW1lciB0byBkZWNpZGUgd2hhdCB0byBkbyB3aXRoIHRoZSB5aWVsZGVkXG4gICAgICAgICAgLy8gcmVqZWN0aW9uIChzd2FsbG93IGl0IGFuZCBjb250aW51ZSwgbWFudWFsbHkgLnRocm93IGl0IGJhY2tcbiAgICAgICAgICAvLyBpbnRvIHRoZSBnZW5lcmF0b3IsIGFiYW5kb24gaXRlcmF0aW9uLCB3aGF0ZXZlcikuIFdpdGhcbiAgICAgICAgICAvLyBhd2FpdCwgYnkgY29udHJhc3QsIHRoZXJlIGlzIG5vIG9wcG9ydHVuaXR5IHRvIGV4YW1pbmUgdGhlXG4gICAgICAgICAgLy8gcmVqZWN0aW9uIHJlYXNvbiBvdXRzaWRlIHRoZSBnZW5lcmF0b3IgZnVuY3Rpb24sIHNvIHRoZVxuICAgICAgICAgIC8vIG9ubHkgb3B0aW9uIGlzIHRvIHRocm93IGl0IGZyb20gdGhlIGF3YWl0IGV4cHJlc3Npb24sIGFuZFxuICAgICAgICAgIC8vIGxldCB0aGUgZ2VuZXJhdG9yIGZ1bmN0aW9uIGhhbmRsZSB0aGUgZXhjZXB0aW9uLlxuICAgICAgICAgIHJlc3VsdC52YWx1ZSA9IHVud3JhcHBlZDtcbiAgICAgICAgICByZXNvbHZlKHJlc3VsdCk7XG4gICAgICAgIH0sIHJlamVjdCk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgdmFyIHByZXZpb3VzUHJvbWlzZTtcblxuICAgIGZ1bmN0aW9uIGVucXVldWUobWV0aG9kLCBhcmcpIHtcbiAgICAgIGZ1bmN0aW9uIGNhbGxJbnZva2VXaXRoTWV0aG9kQW5kQXJnKCkge1xuICAgICAgICByZXR1cm4gbmV3IFByb21pc2UoZnVuY3Rpb24ocmVzb2x2ZSwgcmVqZWN0KSB7XG4gICAgICAgICAgaW52b2tlKG1ldGhvZCwgYXJnLCByZXNvbHZlLCByZWplY3QpO1xuICAgICAgICB9KTtcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIHByZXZpb3VzUHJvbWlzZSA9XG4gICAgICAgIC8vIElmIGVucXVldWUgaGFzIGJlZW4gY2FsbGVkIGJlZm9yZSwgdGhlbiB3ZSB3YW50IHRvIHdhaXQgdW50aWxcbiAgICAgICAgLy8gYWxsIHByZXZpb3VzIFByb21pc2VzIGhhdmUgYmVlbiByZXNvbHZlZCBiZWZvcmUgY2FsbGluZyBpbnZva2UsXG4gICAgICAgIC8vIHNvIHRoYXQgcmVzdWx0cyBhcmUgYWx3YXlzIGRlbGl2ZXJlZCBpbiB0aGUgY29ycmVjdCBvcmRlci4gSWZcbiAgICAgICAgLy8gZW5xdWV1ZSBoYXMgbm90IGJlZW4gY2FsbGVkIGJlZm9yZSwgdGhlbiBpdCBpcyBpbXBvcnRhbnQgdG9cbiAgICAgICAgLy8gY2FsbCBpbnZva2UgaW1tZWRpYXRlbHksIHdpdGhvdXQgd2FpdGluZyBvbiBhIGNhbGxiYWNrIHRvIGZpcmUsXG4gICAgICAgIC8vIHNvIHRoYXQgdGhlIGFzeW5jIGdlbmVyYXRvciBmdW5jdGlvbiBoYXMgdGhlIG9wcG9ydHVuaXR5IHRvIGRvXG4gICAgICAgIC8vIGFueSBuZWNlc3Nhcnkgc2V0dXAgaW4gYSBwcmVkaWN0YWJsZSB3YXkuIFRoaXMgcHJlZGljdGFiaWxpdHlcbiAgICAgICAgLy8gaXMgd2h5IHRoZSBQcm9taXNlIGNvbnN0cnVjdG9yIHN5bmNocm9ub3VzbHkgaW52b2tlcyBpdHNcbiAgICAgICAgLy8gZXhlY3V0b3IgY2FsbGJhY2ssIGFuZCB3aHkgYXN5bmMgZnVuY3Rpb25zIHN5bmNocm9ub3VzbHlcbiAgICAgICAgLy8gZXhlY3V0ZSBjb2RlIGJlZm9yZSB0aGUgZmlyc3QgYXdhaXQuIFNpbmNlIHdlIGltcGxlbWVudCBzaW1wbGVcbiAgICAgICAgLy8gYXN5bmMgZnVuY3Rpb25zIGluIHRlcm1zIG9mIGFzeW5jIGdlbmVyYXRvcnMsIGl0IGlzIGVzcGVjaWFsbHlcbiAgICAgICAgLy8gaW1wb3J0YW50IHRvIGdldCB0aGlzIHJpZ2h0LCBldmVuIHRob3VnaCBpdCByZXF1aXJlcyBjYXJlLlxuICAgICAgICBwcmV2aW91c1Byb21pc2UgPyBwcmV2aW91c1Byb21pc2UudGhlbihcbiAgICAgICAgICBjYWxsSW52b2tlV2l0aE1ldGhvZEFuZEFyZyxcbiAgICAgICAgICAvLyBBdm9pZCBwcm9wYWdhdGluZyBmYWlsdXJlcyB0byBQcm9taXNlcyByZXR1cm5lZCBieSBsYXRlclxuICAgICAgICAgIC8vIGludm9jYXRpb25zIG9mIHRoZSBpdGVyYXRvci5cbiAgICAgICAgICBjYWxsSW52b2tlV2l0aE1ldGhvZEFuZEFyZ1xuICAgICAgICApIDogY2FsbEludm9rZVdpdGhNZXRob2RBbmRBcmcoKTtcbiAgICB9XG5cbiAgICAvLyBEZWZpbmUgdGhlIHVuaWZpZWQgaGVscGVyIG1ldGhvZCB0aGF0IGlzIHVzZWQgdG8gaW1wbGVtZW50IC5uZXh0LFxuICAgIC8vIC50aHJvdywgYW5kIC5yZXR1cm4gKHNlZSBkZWZpbmVJdGVyYXRvck1ldGhvZHMpLlxuICAgIHRoaXMuX2ludm9rZSA9IGVucXVldWU7XG4gIH1cblxuICBkZWZpbmVJdGVyYXRvck1ldGhvZHMoQXN5bmNJdGVyYXRvci5wcm90b3R5cGUpO1xuICBBc3luY0l0ZXJhdG9yLnByb3RvdHlwZVthc3luY0l0ZXJhdG9yU3ltYm9sXSA9IGZ1bmN0aW9uICgpIHtcbiAgICByZXR1cm4gdGhpcztcbiAgfTtcbiAgcnVudGltZS5Bc3luY0l0ZXJhdG9yID0gQXN5bmNJdGVyYXRvcjtcblxuICAvLyBOb3RlIHRoYXQgc2ltcGxlIGFzeW5jIGZ1bmN0aW9ucyBhcmUgaW1wbGVtZW50ZWQgb24gdG9wIG9mXG4gIC8vIEFzeW5jSXRlcmF0b3Igb2JqZWN0czsgdGhleSBqdXN0IHJldHVybiBhIFByb21pc2UgZm9yIHRoZSB2YWx1ZSBvZlxuICAvLyB0aGUgZmluYWwgcmVzdWx0IHByb2R1Y2VkIGJ5IHRoZSBpdGVyYXRvci5cbiAgcnVudGltZS5hc3luYyA9IGZ1bmN0aW9uKGlubmVyRm4sIG91dGVyRm4sIHNlbGYsIHRyeUxvY3NMaXN0KSB7XG4gICAgdmFyIGl0ZXIgPSBuZXcgQXN5bmNJdGVyYXRvcihcbiAgICAgIHdyYXAoaW5uZXJGbiwgb3V0ZXJGbiwgc2VsZiwgdHJ5TG9jc0xpc3QpXG4gICAgKTtcblxuICAgIHJldHVybiBydW50aW1lLmlzR2VuZXJhdG9yRnVuY3Rpb24ob3V0ZXJGbilcbiAgICAgID8gaXRlciAvLyBJZiBvdXRlckZuIGlzIGEgZ2VuZXJhdG9yLCByZXR1cm4gdGhlIGZ1bGwgaXRlcmF0b3IuXG4gICAgICA6IGl0ZXIubmV4dCgpLnRoZW4oZnVuY3Rpb24ocmVzdWx0KSB7XG4gICAgICAgICAgcmV0dXJuIHJlc3VsdC5kb25lID8gcmVzdWx0LnZhbHVlIDogaXRlci5uZXh0KCk7XG4gICAgICAgIH0pO1xuICB9O1xuXG4gIGZ1bmN0aW9uIG1ha2VJbnZva2VNZXRob2QoaW5uZXJGbiwgc2VsZiwgY29udGV4dCkge1xuICAgIHZhciBzdGF0ZSA9IEdlblN0YXRlU3VzcGVuZGVkU3RhcnQ7XG5cbiAgICByZXR1cm4gZnVuY3Rpb24gaW52b2tlKG1ldGhvZCwgYXJnKSB7XG4gICAgICBpZiAoc3RhdGUgPT09IEdlblN0YXRlRXhlY3V0aW5nKSB7XG4gICAgICAgIHRocm93IG5ldyBFcnJvcihcIkdlbmVyYXRvciBpcyBhbHJlYWR5IHJ1bm5pbmdcIik7XG4gICAgICB9XG5cbiAgICAgIGlmIChzdGF0ZSA9PT0gR2VuU3RhdGVDb21wbGV0ZWQpIHtcbiAgICAgICAgaWYgKG1ldGhvZCA9PT0gXCJ0aHJvd1wiKSB7XG4gICAgICAgICAgdGhyb3cgYXJnO1xuICAgICAgICB9XG5cbiAgICAgICAgLy8gQmUgZm9yZ2l2aW5nLCBwZXIgMjUuMy4zLjMuMyBvZiB0aGUgc3BlYzpcbiAgICAgICAgLy8gaHR0cHM6Ly9wZW9wbGUubW96aWxsYS5vcmcvfmpvcmVuZG9yZmYvZXM2LWRyYWZ0Lmh0bWwjc2VjLWdlbmVyYXRvcnJlc3VtZVxuICAgICAgICByZXR1cm4gZG9uZVJlc3VsdCgpO1xuICAgICAgfVxuXG4gICAgICBjb250ZXh0Lm1ldGhvZCA9IG1ldGhvZDtcbiAgICAgIGNvbnRleHQuYXJnID0gYXJnO1xuXG4gICAgICB3aGlsZSAodHJ1ZSkge1xuICAgICAgICB2YXIgZGVsZWdhdGUgPSBjb250ZXh0LmRlbGVnYXRlO1xuICAgICAgICBpZiAoZGVsZWdhdGUpIHtcbiAgICAgICAgICB2YXIgZGVsZWdhdGVSZXN1bHQgPSBtYXliZUludm9rZURlbGVnYXRlKGRlbGVnYXRlLCBjb250ZXh0KTtcbiAgICAgICAgICBpZiAoZGVsZWdhdGVSZXN1bHQpIHtcbiAgICAgICAgICAgIGlmIChkZWxlZ2F0ZVJlc3VsdCA9PT0gQ29udGludWVTZW50aW5lbCkgY29udGludWU7XG4gICAgICAgICAgICByZXR1cm4gZGVsZWdhdGVSZXN1bHQ7XG4gICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgaWYgKGNvbnRleHQubWV0aG9kID09PSBcIm5leHRcIikge1xuICAgICAgICAgIC8vIFNldHRpbmcgY29udGV4dC5fc2VudCBmb3IgbGVnYWN5IHN1cHBvcnQgb2YgQmFiZWwnc1xuICAgICAgICAgIC8vIGZ1bmN0aW9uLnNlbnQgaW1wbGVtZW50YXRpb24uXG4gICAgICAgICAgY29udGV4dC5zZW50ID0gY29udGV4dC5fc2VudCA9IGNvbnRleHQuYXJnO1xuXG4gICAgICAgIH0gZWxzZSBpZiAoY29udGV4dC5tZXRob2QgPT09IFwidGhyb3dcIikge1xuICAgICAgICAgIGlmIChzdGF0ZSA9PT0gR2VuU3RhdGVTdXNwZW5kZWRTdGFydCkge1xuICAgICAgICAgICAgc3RhdGUgPSBHZW5TdGF0ZUNvbXBsZXRlZDtcbiAgICAgICAgICAgIHRocm93IGNvbnRleHQuYXJnO1xuICAgICAgICAgIH1cblxuICAgICAgICAgIGNvbnRleHQuZGlzcGF0Y2hFeGNlcHRpb24oY29udGV4dC5hcmcpO1xuXG4gICAgICAgIH0gZWxzZSBpZiAoY29udGV4dC5tZXRob2QgPT09IFwicmV0dXJuXCIpIHtcbiAgICAgICAgICBjb250ZXh0LmFicnVwdChcInJldHVyblwiLCBjb250ZXh0LmFyZyk7XG4gICAgICAgIH1cblxuICAgICAgICBzdGF0ZSA9IEdlblN0YXRlRXhlY3V0aW5nO1xuXG4gICAgICAgIHZhciByZWNvcmQgPSB0cnlDYXRjaChpbm5lckZuLCBzZWxmLCBjb250ZXh0KTtcbiAgICAgICAgaWYgKHJlY29yZC50eXBlID09PSBcIm5vcm1hbFwiKSB7XG4gICAgICAgICAgLy8gSWYgYW4gZXhjZXB0aW9uIGlzIHRocm93biBmcm9tIGlubmVyRm4sIHdlIGxlYXZlIHN0YXRlID09PVxuICAgICAgICAgIC8vIEdlblN0YXRlRXhlY3V0aW5nIGFuZCBsb29wIGJhY2sgZm9yIGFub3RoZXIgaW52b2NhdGlvbi5cbiAgICAgICAgICBzdGF0ZSA9IGNvbnRleHQuZG9uZVxuICAgICAgICAgICAgPyBHZW5TdGF0ZUNvbXBsZXRlZFxuICAgICAgICAgICAgOiBHZW5TdGF0ZVN1c3BlbmRlZFlpZWxkO1xuXG4gICAgICAgICAgaWYgKHJlY29yZC5hcmcgPT09IENvbnRpbnVlU2VudGluZWwpIHtcbiAgICAgICAgICAgIGNvbnRpbnVlO1xuICAgICAgICAgIH1cblxuICAgICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICB2YWx1ZTogcmVjb3JkLmFyZyxcbiAgICAgICAgICAgIGRvbmU6IGNvbnRleHQuZG9uZVxuICAgICAgICAgIH07XG5cbiAgICAgICAgfSBlbHNlIGlmIChyZWNvcmQudHlwZSA9PT0gXCJ0aHJvd1wiKSB7XG4gICAgICAgICAgc3RhdGUgPSBHZW5TdGF0ZUNvbXBsZXRlZDtcbiAgICAgICAgICAvLyBEaXNwYXRjaCB0aGUgZXhjZXB0aW9uIGJ5IGxvb3BpbmcgYmFjayBhcm91bmQgdG8gdGhlXG4gICAgICAgICAgLy8gY29udGV4dC5kaXNwYXRjaEV4Y2VwdGlvbihjb250ZXh0LmFyZykgY2FsbCBhYm92ZS5cbiAgICAgICAgICBjb250ZXh0Lm1ldGhvZCA9IFwidGhyb3dcIjtcbiAgICAgICAgICBjb250ZXh0LmFyZyA9IHJlY29yZC5hcmc7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9O1xuICB9XG5cbiAgLy8gQ2FsbCBkZWxlZ2F0ZS5pdGVyYXRvcltjb250ZXh0Lm1ldGhvZF0oY29udGV4dC5hcmcpIGFuZCBoYW5kbGUgdGhlXG4gIC8vIHJlc3VsdCwgZWl0aGVyIGJ5IHJldHVybmluZyBhIHsgdmFsdWUsIGRvbmUgfSByZXN1bHQgZnJvbSB0aGVcbiAgLy8gZGVsZWdhdGUgaXRlcmF0b3IsIG9yIGJ5IG1vZGlmeWluZyBjb250ZXh0Lm1ldGhvZCBhbmQgY29udGV4dC5hcmcsXG4gIC8vIHNldHRpbmcgY29udGV4dC5kZWxlZ2F0ZSB0byBudWxsLCBhbmQgcmV0dXJuaW5nIHRoZSBDb250aW51ZVNlbnRpbmVsLlxuICBmdW5jdGlvbiBtYXliZUludm9rZURlbGVnYXRlKGRlbGVnYXRlLCBjb250ZXh0KSB7XG4gICAgdmFyIG1ldGhvZCA9IGRlbGVnYXRlLml0ZXJhdG9yW2NvbnRleHQubWV0aG9kXTtcbiAgICBpZiAobWV0aG9kID09PSB1bmRlZmluZWQpIHtcbiAgICAgIC8vIEEgLnRocm93IG9yIC5yZXR1cm4gd2hlbiB0aGUgZGVsZWdhdGUgaXRlcmF0b3IgaGFzIG5vIC50aHJvd1xuICAgICAgLy8gbWV0aG9kIGFsd2F5cyB0ZXJtaW5hdGVzIHRoZSB5aWVsZCogbG9vcC5cbiAgICAgIGNvbnRleHQuZGVsZWdhdGUgPSBudWxsO1xuXG4gICAgICBpZiAoY29udGV4dC5tZXRob2QgPT09IFwidGhyb3dcIikge1xuICAgICAgICBpZiAoZGVsZWdhdGUuaXRlcmF0b3IucmV0dXJuKSB7XG4gICAgICAgICAgLy8gSWYgdGhlIGRlbGVnYXRlIGl0ZXJhdG9yIGhhcyBhIHJldHVybiBtZXRob2QsIGdpdmUgaXQgYVxuICAgICAgICAgIC8vIGNoYW5jZSB0byBjbGVhbiB1cC5cbiAgICAgICAgICBjb250ZXh0Lm1ldGhvZCA9IFwicmV0dXJuXCI7XG4gICAgICAgICAgY29udGV4dC5hcmcgPSB1bmRlZmluZWQ7XG4gICAgICAgICAgbWF5YmVJbnZva2VEZWxlZ2F0ZShkZWxlZ2F0ZSwgY29udGV4dCk7XG5cbiAgICAgICAgICBpZiAoY29udGV4dC5tZXRob2QgPT09IFwidGhyb3dcIikge1xuICAgICAgICAgICAgLy8gSWYgbWF5YmVJbnZva2VEZWxlZ2F0ZShjb250ZXh0KSBjaGFuZ2VkIGNvbnRleHQubWV0aG9kIGZyb21cbiAgICAgICAgICAgIC8vIFwicmV0dXJuXCIgdG8gXCJ0aHJvd1wiLCBsZXQgdGhhdCBvdmVycmlkZSB0aGUgVHlwZUVycm9yIGJlbG93LlxuICAgICAgICAgICAgcmV0dXJuIENvbnRpbnVlU2VudGluZWw7XG4gICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgY29udGV4dC5tZXRob2QgPSBcInRocm93XCI7XG4gICAgICAgIGNvbnRleHQuYXJnID0gbmV3IFR5cGVFcnJvcihcbiAgICAgICAgICBcIlRoZSBpdGVyYXRvciBkb2VzIG5vdCBwcm92aWRlIGEgJ3Rocm93JyBtZXRob2RcIik7XG4gICAgICB9XG5cbiAgICAgIHJldHVybiBDb250aW51ZVNlbnRpbmVsO1xuICAgIH1cblxuICAgIHZhciByZWNvcmQgPSB0cnlDYXRjaChtZXRob2QsIGRlbGVnYXRlLml0ZXJhdG9yLCBjb250ZXh0LmFyZyk7XG5cbiAgICBpZiAocmVjb3JkLnR5cGUgPT09IFwidGhyb3dcIikge1xuICAgICAgY29udGV4dC5tZXRob2QgPSBcInRocm93XCI7XG4gICAgICBjb250ZXh0LmFyZyA9IHJlY29yZC5hcmc7XG4gICAgICBjb250ZXh0LmRlbGVnYXRlID0gbnVsbDtcbiAgICAgIHJldHVybiBDb250aW51ZVNlbnRpbmVsO1xuICAgIH1cblxuICAgIHZhciBpbmZvID0gcmVjb3JkLmFyZztcblxuICAgIGlmICghIGluZm8pIHtcbiAgICAgIGNvbnRleHQubWV0aG9kID0gXCJ0aHJvd1wiO1xuICAgICAgY29udGV4dC5hcmcgPSBuZXcgVHlwZUVycm9yKFwiaXRlcmF0b3IgcmVzdWx0IGlzIG5vdCBhbiBvYmplY3RcIik7XG4gICAgICBjb250ZXh0LmRlbGVnYXRlID0gbnVsbDtcbiAgICAgIHJldHVybiBDb250aW51ZVNlbnRpbmVsO1xuICAgIH1cblxuICAgIGlmIChpbmZvLmRvbmUpIHtcbiAgICAgIC8vIEFzc2lnbiB0aGUgcmVzdWx0IG9mIHRoZSBmaW5pc2hlZCBkZWxlZ2F0ZSB0byB0aGUgdGVtcG9yYXJ5XG4gICAgICAvLyB2YXJpYWJsZSBzcGVjaWZpZWQgYnkgZGVsZWdhdGUucmVzdWx0TmFtZSAoc2VlIGRlbGVnYXRlWWllbGQpLlxuICAgICAgY29udGV4dFtkZWxlZ2F0ZS5yZXN1bHROYW1lXSA9IGluZm8udmFsdWU7XG5cbiAgICAgIC8vIFJlc3VtZSBleGVjdXRpb24gYXQgdGhlIGRlc2lyZWQgbG9jYXRpb24gKHNlZSBkZWxlZ2F0ZVlpZWxkKS5cbiAgICAgIGNvbnRleHQubmV4dCA9IGRlbGVnYXRlLm5leHRMb2M7XG5cbiAgICAgIC8vIElmIGNvbnRleHQubWV0aG9kIHdhcyBcInRocm93XCIgYnV0IHRoZSBkZWxlZ2F0ZSBoYW5kbGVkIHRoZVxuICAgICAgLy8gZXhjZXB0aW9uLCBsZXQgdGhlIG91dGVyIGdlbmVyYXRvciBwcm9jZWVkIG5vcm1hbGx5LiBJZlxuICAgICAgLy8gY29udGV4dC5tZXRob2Qgd2FzIFwibmV4dFwiLCBmb3JnZXQgY29udGV4dC5hcmcgc2luY2UgaXQgaGFzIGJlZW5cbiAgICAgIC8vIFwiY29uc3VtZWRcIiBieSB0aGUgZGVsZWdhdGUgaXRlcmF0b3IuIElmIGNvbnRleHQubWV0aG9kIHdhc1xuICAgICAgLy8gXCJyZXR1cm5cIiwgYWxsb3cgdGhlIG9yaWdpbmFsIC5yZXR1cm4gY2FsbCB0byBjb250aW51ZSBpbiB0aGVcbiAgICAgIC8vIG91dGVyIGdlbmVyYXRvci5cbiAgICAgIGlmIChjb250ZXh0Lm1ldGhvZCAhPT0gXCJyZXR1cm5cIikge1xuICAgICAgICBjb250ZXh0Lm1ldGhvZCA9IFwibmV4dFwiO1xuICAgICAgICBjb250ZXh0LmFyZyA9IHVuZGVmaW5lZDtcbiAgICAgIH1cblxuICAgIH0gZWxzZSB7XG4gICAgICAvLyBSZS15aWVsZCB0aGUgcmVzdWx0IHJldHVybmVkIGJ5IHRoZSBkZWxlZ2F0ZSBtZXRob2QuXG4gICAgICByZXR1cm4gaW5mbztcbiAgICB9XG5cbiAgICAvLyBUaGUgZGVsZWdhdGUgaXRlcmF0b3IgaXMgZmluaXNoZWQsIHNvIGZvcmdldCBpdCBhbmQgY29udGludWUgd2l0aFxuICAgIC8vIHRoZSBvdXRlciBnZW5lcmF0b3IuXG4gICAgY29udGV4dC5kZWxlZ2F0ZSA9IG51bGw7XG4gICAgcmV0dXJuIENvbnRpbnVlU2VudGluZWw7XG4gIH1cblxuICAvLyBEZWZpbmUgR2VuZXJhdG9yLnByb3RvdHlwZS57bmV4dCx0aHJvdyxyZXR1cm59IGluIHRlcm1zIG9mIHRoZVxuICAvLyB1bmlmaWVkIC5faW52b2tlIGhlbHBlciBtZXRob2QuXG4gIGRlZmluZUl0ZXJhdG9yTWV0aG9kcyhHcCk7XG5cbiAgR3BbdG9TdHJpbmdUYWdTeW1ib2xdID0gXCJHZW5lcmF0b3JcIjtcblxuICAvLyBBIEdlbmVyYXRvciBzaG91bGQgYWx3YXlzIHJldHVybiBpdHNlbGYgYXMgdGhlIGl0ZXJhdG9yIG9iamVjdCB3aGVuIHRoZVxuICAvLyBAQGl0ZXJhdG9yIGZ1bmN0aW9uIGlzIGNhbGxlZCBvbiBpdC4gU29tZSBicm93c2VycycgaW1wbGVtZW50YXRpb25zIG9mIHRoZVxuICAvLyBpdGVyYXRvciBwcm90b3R5cGUgY2hhaW4gaW5jb3JyZWN0bHkgaW1wbGVtZW50IHRoaXMsIGNhdXNpbmcgdGhlIEdlbmVyYXRvclxuICAvLyBvYmplY3QgdG8gbm90IGJlIHJldHVybmVkIGZyb20gdGhpcyBjYWxsLiBUaGlzIGVuc3VyZXMgdGhhdCBkb2Vzbid0IGhhcHBlbi5cbiAgLy8gU2VlIGh0dHBzOi8vZ2l0aHViLmNvbS9mYWNlYm9vay9yZWdlbmVyYXRvci9pc3N1ZXMvMjc0IGZvciBtb3JlIGRldGFpbHMuXG4gIEdwW2l0ZXJhdG9yU3ltYm9sXSA9IGZ1bmN0aW9uKCkge1xuICAgIHJldHVybiB0aGlzO1xuICB9O1xuXG4gIEdwLnRvU3RyaW5nID0gZnVuY3Rpb24oKSB7XG4gICAgcmV0dXJuIFwiW29iamVjdCBHZW5lcmF0b3JdXCI7XG4gIH07XG5cbiAgZnVuY3Rpb24gcHVzaFRyeUVudHJ5KGxvY3MpIHtcbiAgICB2YXIgZW50cnkgPSB7IHRyeUxvYzogbG9jc1swXSB9O1xuXG4gICAgaWYgKDEgaW4gbG9jcykge1xuICAgICAgZW50cnkuY2F0Y2hMb2MgPSBsb2NzWzFdO1xuICAgIH1cblxuICAgIGlmICgyIGluIGxvY3MpIHtcbiAgICAgIGVudHJ5LmZpbmFsbHlMb2MgPSBsb2NzWzJdO1xuICAgICAgZW50cnkuYWZ0ZXJMb2MgPSBsb2NzWzNdO1xuICAgIH1cblxuICAgIHRoaXMudHJ5RW50cmllcy5wdXNoKGVudHJ5KTtcbiAgfVxuXG4gIGZ1bmN0aW9uIHJlc2V0VHJ5RW50cnkoZW50cnkpIHtcbiAgICB2YXIgcmVjb3JkID0gZW50cnkuY29tcGxldGlvbiB8fCB7fTtcbiAgICByZWNvcmQudHlwZSA9IFwibm9ybWFsXCI7XG4gICAgZGVsZXRlIHJlY29yZC5hcmc7XG4gICAgZW50cnkuY29tcGxldGlvbiA9IHJlY29yZDtcbiAgfVxuXG4gIGZ1bmN0aW9uIENvbnRleHQodHJ5TG9jc0xpc3QpIHtcbiAgICAvLyBUaGUgcm9vdCBlbnRyeSBvYmplY3QgKGVmZmVjdGl2ZWx5IGEgdHJ5IHN0YXRlbWVudCB3aXRob3V0IGEgY2F0Y2hcbiAgICAvLyBvciBhIGZpbmFsbHkgYmxvY2spIGdpdmVzIHVzIGEgcGxhY2UgdG8gc3RvcmUgdmFsdWVzIHRocm93biBmcm9tXG4gICAgLy8gbG9jYXRpb25zIHdoZXJlIHRoZXJlIGlzIG5vIGVuY2xvc2luZyB0cnkgc3RhdGVtZW50LlxuICAgIHRoaXMudHJ5RW50cmllcyA9IFt7IHRyeUxvYzogXCJyb290XCIgfV07XG4gICAgdHJ5TG9jc0xpc3QuZm9yRWFjaChwdXNoVHJ5RW50cnksIHRoaXMpO1xuICAgIHRoaXMucmVzZXQodHJ1ZSk7XG4gIH1cblxuICBydW50aW1lLmtleXMgPSBmdW5jdGlvbihvYmplY3QpIHtcbiAgICB2YXIga2V5cyA9IFtdO1xuICAgIGZvciAodmFyIGtleSBpbiBvYmplY3QpIHtcbiAgICAgIGtleXMucHVzaChrZXkpO1xuICAgIH1cbiAgICBrZXlzLnJldmVyc2UoKTtcblxuICAgIC8vIFJhdGhlciB0aGFuIHJldHVybmluZyBhbiBvYmplY3Qgd2l0aCBhIG5leHQgbWV0aG9kLCB3ZSBrZWVwXG4gICAgLy8gdGhpbmdzIHNpbXBsZSBhbmQgcmV0dXJuIHRoZSBuZXh0IGZ1bmN0aW9uIGl0c2VsZi5cbiAgICByZXR1cm4gZnVuY3Rpb24gbmV4dCgpIHtcbiAgICAgIHdoaWxlIChrZXlzLmxlbmd0aCkge1xuICAgICAgICB2YXIga2V5ID0ga2V5cy5wb3AoKTtcbiAgICAgICAgaWYgKGtleSBpbiBvYmplY3QpIHtcbiAgICAgICAgICBuZXh0LnZhbHVlID0ga2V5O1xuICAgICAgICAgIG5leHQuZG9uZSA9IGZhbHNlO1xuICAgICAgICAgIHJldHVybiBuZXh0O1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIC8vIFRvIGF2b2lkIGNyZWF0aW5nIGFuIGFkZGl0aW9uYWwgb2JqZWN0LCB3ZSBqdXN0IGhhbmcgdGhlIC52YWx1ZVxuICAgICAgLy8gYW5kIC5kb25lIHByb3BlcnRpZXMgb2ZmIHRoZSBuZXh0IGZ1bmN0aW9uIG9iamVjdCBpdHNlbGYuIFRoaXNcbiAgICAgIC8vIGFsc28gZW5zdXJlcyB0aGF0IHRoZSBtaW5pZmllciB3aWxsIG5vdCBhbm9ueW1pemUgdGhlIGZ1bmN0aW9uLlxuICAgICAgbmV4dC5kb25lID0gdHJ1ZTtcbiAgICAgIHJldHVybiBuZXh0O1xuICAgIH07XG4gIH07XG5cbiAgZnVuY3Rpb24gdmFsdWVzKGl0ZXJhYmxlKSB7XG4gICAgaWYgKGl0ZXJhYmxlKSB7XG4gICAgICB2YXIgaXRlcmF0b3JNZXRob2QgPSBpdGVyYWJsZVtpdGVyYXRvclN5bWJvbF07XG4gICAgICBpZiAoaXRlcmF0b3JNZXRob2QpIHtcbiAgICAgICAgcmV0dXJuIGl0ZXJhdG9yTWV0aG9kLmNhbGwoaXRlcmFibGUpO1xuICAgICAgfVxuXG4gICAgICBpZiAodHlwZW9mIGl0ZXJhYmxlLm5leHQgPT09IFwiZnVuY3Rpb25cIikge1xuICAgICAgICByZXR1cm4gaXRlcmFibGU7XG4gICAgICB9XG5cbiAgICAgIGlmICghaXNOYU4oaXRlcmFibGUubGVuZ3RoKSkge1xuICAgICAgICB2YXIgaSA9IC0xLCBuZXh0ID0gZnVuY3Rpb24gbmV4dCgpIHtcbiAgICAgICAgICB3aGlsZSAoKytpIDwgaXRlcmFibGUubGVuZ3RoKSB7XG4gICAgICAgICAgICBpZiAoaGFzT3duLmNhbGwoaXRlcmFibGUsIGkpKSB7XG4gICAgICAgICAgICAgIG5leHQudmFsdWUgPSBpdGVyYWJsZVtpXTtcbiAgICAgICAgICAgICAgbmV4dC5kb25lID0gZmFsc2U7XG4gICAgICAgICAgICAgIHJldHVybiBuZXh0O1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH1cblxuICAgICAgICAgIG5leHQudmFsdWUgPSB1bmRlZmluZWQ7XG4gICAgICAgICAgbmV4dC5kb25lID0gdHJ1ZTtcblxuICAgICAgICAgIHJldHVybiBuZXh0O1xuICAgICAgICB9O1xuXG4gICAgICAgIHJldHVybiBuZXh0Lm5leHQgPSBuZXh0O1xuICAgICAgfVxuICAgIH1cblxuICAgIC8vIFJldHVybiBhbiBpdGVyYXRvciB3aXRoIG5vIHZhbHVlcy5cbiAgICByZXR1cm4geyBuZXh0OiBkb25lUmVzdWx0IH07XG4gIH1cbiAgcnVudGltZS52YWx1ZXMgPSB2YWx1ZXM7XG5cbiAgZnVuY3Rpb24gZG9uZVJlc3VsdCgpIHtcbiAgICByZXR1cm4geyB2YWx1ZTogdW5kZWZpbmVkLCBkb25lOiB0cnVlIH07XG4gIH1cblxuICBDb250ZXh0LnByb3RvdHlwZSA9IHtcbiAgICBjb25zdHJ1Y3RvcjogQ29udGV4dCxcblxuICAgIHJlc2V0OiBmdW5jdGlvbihza2lwVGVtcFJlc2V0KSB7XG4gICAgICB0aGlzLnByZXYgPSAwO1xuICAgICAgdGhpcy5uZXh0ID0gMDtcbiAgICAgIC8vIFJlc2V0dGluZyBjb250ZXh0Ll9zZW50IGZvciBsZWdhY3kgc3VwcG9ydCBvZiBCYWJlbCdzXG4gICAgICAvLyBmdW5jdGlvbi5zZW50IGltcGxlbWVudGF0aW9uLlxuICAgICAgdGhpcy5zZW50ID0gdGhpcy5fc2VudCA9IHVuZGVmaW5lZDtcbiAgICAgIHRoaXMuZG9uZSA9IGZhbHNlO1xuICAgICAgdGhpcy5kZWxlZ2F0ZSA9IG51bGw7XG5cbiAgICAgIHRoaXMubWV0aG9kID0gXCJuZXh0XCI7XG4gICAgICB0aGlzLmFyZyA9IHVuZGVmaW5lZDtcblxuICAgICAgdGhpcy50cnlFbnRyaWVzLmZvckVhY2gocmVzZXRUcnlFbnRyeSk7XG5cbiAgICAgIGlmICghc2tpcFRlbXBSZXNldCkge1xuICAgICAgICBmb3IgKHZhciBuYW1lIGluIHRoaXMpIHtcbiAgICAgICAgICAvLyBOb3Qgc3VyZSBhYm91dCB0aGUgb3B0aW1hbCBvcmRlciBvZiB0aGVzZSBjb25kaXRpb25zOlxuICAgICAgICAgIGlmIChuYW1lLmNoYXJBdCgwKSA9PT0gXCJ0XCIgJiZcbiAgICAgICAgICAgICAgaGFzT3duLmNhbGwodGhpcywgbmFtZSkgJiZcbiAgICAgICAgICAgICAgIWlzTmFOKCtuYW1lLnNsaWNlKDEpKSkge1xuICAgICAgICAgICAgdGhpc1tuYW1lXSA9IHVuZGVmaW5lZDtcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9LFxuXG4gICAgc3RvcDogZnVuY3Rpb24oKSB7XG4gICAgICB0aGlzLmRvbmUgPSB0cnVlO1xuXG4gICAgICB2YXIgcm9vdEVudHJ5ID0gdGhpcy50cnlFbnRyaWVzWzBdO1xuICAgICAgdmFyIHJvb3RSZWNvcmQgPSByb290RW50cnkuY29tcGxldGlvbjtcbiAgICAgIGlmIChyb290UmVjb3JkLnR5cGUgPT09IFwidGhyb3dcIikge1xuICAgICAgICB0aHJvdyByb290UmVjb3JkLmFyZztcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIHRoaXMucnZhbDtcbiAgICB9LFxuXG4gICAgZGlzcGF0Y2hFeGNlcHRpb246IGZ1bmN0aW9uKGV4Y2VwdGlvbikge1xuICAgICAgaWYgKHRoaXMuZG9uZSkge1xuICAgICAgICB0aHJvdyBleGNlcHRpb247XG4gICAgICB9XG5cbiAgICAgIHZhciBjb250ZXh0ID0gdGhpcztcbiAgICAgIGZ1bmN0aW9uIGhhbmRsZShsb2MsIGNhdWdodCkge1xuICAgICAgICByZWNvcmQudHlwZSA9IFwidGhyb3dcIjtcbiAgICAgICAgcmVjb3JkLmFyZyA9IGV4Y2VwdGlvbjtcbiAgICAgICAgY29udGV4dC5uZXh0ID0gbG9jO1xuXG4gICAgICAgIGlmIChjYXVnaHQpIHtcbiAgICAgICAgICAvLyBJZiB0aGUgZGlzcGF0Y2hlZCBleGNlcHRpb24gd2FzIGNhdWdodCBieSBhIGNhdGNoIGJsb2NrLFxuICAgICAgICAgIC8vIHRoZW4gbGV0IHRoYXQgY2F0Y2ggYmxvY2sgaGFuZGxlIHRoZSBleGNlcHRpb24gbm9ybWFsbHkuXG4gICAgICAgICAgY29udGV4dC5tZXRob2QgPSBcIm5leHRcIjtcbiAgICAgICAgICBjb250ZXh0LmFyZyA9IHVuZGVmaW5lZDtcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiAhISBjYXVnaHQ7XG4gICAgICB9XG5cbiAgICAgIGZvciAodmFyIGkgPSB0aGlzLnRyeUVudHJpZXMubGVuZ3RoIC0gMTsgaSA+PSAwOyAtLWkpIHtcbiAgICAgICAgdmFyIGVudHJ5ID0gdGhpcy50cnlFbnRyaWVzW2ldO1xuICAgICAgICB2YXIgcmVjb3JkID0gZW50cnkuY29tcGxldGlvbjtcblxuICAgICAgICBpZiAoZW50cnkudHJ5TG9jID09PSBcInJvb3RcIikge1xuICAgICAgICAgIC8vIEV4Y2VwdGlvbiB0aHJvd24gb3V0c2lkZSBvZiBhbnkgdHJ5IGJsb2NrIHRoYXQgY291bGQgaGFuZGxlXG4gICAgICAgICAgLy8gaXQsIHNvIHNldCB0aGUgY29tcGxldGlvbiB2YWx1ZSBvZiB0aGUgZW50aXJlIGZ1bmN0aW9uIHRvXG4gICAgICAgICAgLy8gdGhyb3cgdGhlIGV4Y2VwdGlvbi5cbiAgICAgICAgICByZXR1cm4gaGFuZGxlKFwiZW5kXCIpO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKGVudHJ5LnRyeUxvYyA8PSB0aGlzLnByZXYpIHtcbiAgICAgICAgICB2YXIgaGFzQ2F0Y2ggPSBoYXNPd24uY2FsbChlbnRyeSwgXCJjYXRjaExvY1wiKTtcbiAgICAgICAgICB2YXIgaGFzRmluYWxseSA9IGhhc093bi5jYWxsKGVudHJ5LCBcImZpbmFsbHlMb2NcIik7XG5cbiAgICAgICAgICBpZiAoaGFzQ2F0Y2ggJiYgaGFzRmluYWxseSkge1xuICAgICAgICAgICAgaWYgKHRoaXMucHJldiA8IGVudHJ5LmNhdGNoTG9jKSB7XG4gICAgICAgICAgICAgIHJldHVybiBoYW5kbGUoZW50cnkuY2F0Y2hMb2MsIHRydWUpO1xuICAgICAgICAgICAgfSBlbHNlIGlmICh0aGlzLnByZXYgPCBlbnRyeS5maW5hbGx5TG9jKSB7XG4gICAgICAgICAgICAgIHJldHVybiBoYW5kbGUoZW50cnkuZmluYWxseUxvYyk7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICB9IGVsc2UgaWYgKGhhc0NhdGNoKSB7XG4gICAgICAgICAgICBpZiAodGhpcy5wcmV2IDwgZW50cnkuY2F0Y2hMb2MpIHtcbiAgICAgICAgICAgICAgcmV0dXJuIGhhbmRsZShlbnRyeS5jYXRjaExvYywgdHJ1ZSk7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICB9IGVsc2UgaWYgKGhhc0ZpbmFsbHkpIHtcbiAgICAgICAgICAgIGlmICh0aGlzLnByZXYgPCBlbnRyeS5maW5hbGx5TG9jKSB7XG4gICAgICAgICAgICAgIHJldHVybiBoYW5kbGUoZW50cnkuZmluYWxseUxvYyk7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKFwidHJ5IHN0YXRlbWVudCB3aXRob3V0IGNhdGNoIG9yIGZpbmFsbHlcIik7XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9XG4gICAgfSxcblxuICAgIGFicnVwdDogZnVuY3Rpb24odHlwZSwgYXJnKSB7XG4gICAgICBmb3IgKHZhciBpID0gdGhpcy50cnlFbnRyaWVzLmxlbmd0aCAtIDE7IGkgPj0gMDsgLS1pKSB7XG4gICAgICAgIHZhciBlbnRyeSA9IHRoaXMudHJ5RW50cmllc1tpXTtcbiAgICAgICAgaWYgKGVudHJ5LnRyeUxvYyA8PSB0aGlzLnByZXYgJiZcbiAgICAgICAgICAgIGhhc093bi5jYWxsKGVudHJ5LCBcImZpbmFsbHlMb2NcIikgJiZcbiAgICAgICAgICAgIHRoaXMucHJldiA8IGVudHJ5LmZpbmFsbHlMb2MpIHtcbiAgICAgICAgICB2YXIgZmluYWxseUVudHJ5ID0gZW50cnk7XG4gICAgICAgICAgYnJlYWs7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgaWYgKGZpbmFsbHlFbnRyeSAmJlxuICAgICAgICAgICh0eXBlID09PSBcImJyZWFrXCIgfHxcbiAgICAgICAgICAgdHlwZSA9PT0gXCJjb250aW51ZVwiKSAmJlxuICAgICAgICAgIGZpbmFsbHlFbnRyeS50cnlMb2MgPD0gYXJnICYmXG4gICAgICAgICAgYXJnIDw9IGZpbmFsbHlFbnRyeS5maW5hbGx5TG9jKSB7XG4gICAgICAgIC8vIElnbm9yZSB0aGUgZmluYWxseSBlbnRyeSBpZiBjb250cm9sIGlzIG5vdCBqdW1waW5nIHRvIGFcbiAgICAgICAgLy8gbG9jYXRpb24gb3V0c2lkZSB0aGUgdHJ5L2NhdGNoIGJsb2NrLlxuICAgICAgICBmaW5hbGx5RW50cnkgPSBudWxsO1xuICAgICAgfVxuXG4gICAgICB2YXIgcmVjb3JkID0gZmluYWxseUVudHJ5ID8gZmluYWxseUVudHJ5LmNvbXBsZXRpb24gOiB7fTtcbiAgICAgIHJlY29yZC50eXBlID0gdHlwZTtcbiAgICAgIHJlY29yZC5hcmcgPSBhcmc7XG5cbiAgICAgIGlmIChmaW5hbGx5RW50cnkpIHtcbiAgICAgICAgdGhpcy5tZXRob2QgPSBcIm5leHRcIjtcbiAgICAgICAgdGhpcy5uZXh0ID0gZmluYWxseUVudHJ5LmZpbmFsbHlMb2M7XG4gICAgICAgIHJldHVybiBDb250aW51ZVNlbnRpbmVsO1xuICAgICAgfVxuXG4gICAgICByZXR1cm4gdGhpcy5jb21wbGV0ZShyZWNvcmQpO1xuICAgIH0sXG5cbiAgICBjb21wbGV0ZTogZnVuY3Rpb24ocmVjb3JkLCBhZnRlckxvYykge1xuICAgICAgaWYgKHJlY29yZC50eXBlID09PSBcInRocm93XCIpIHtcbiAgICAgICAgdGhyb3cgcmVjb3JkLmFyZztcbiAgICAgIH1cblxuICAgICAgaWYgKHJlY29yZC50eXBlID09PSBcImJyZWFrXCIgfHxcbiAgICAgICAgICByZWNvcmQudHlwZSA9PT0gXCJjb250aW51ZVwiKSB7XG4gICAgICAgIHRoaXMubmV4dCA9IHJlY29yZC5hcmc7XG4gICAgICB9IGVsc2UgaWYgKHJlY29yZC50eXBlID09PSBcInJldHVyblwiKSB7XG4gICAgICAgIHRoaXMucnZhbCA9IHRoaXMuYXJnID0gcmVjb3JkLmFyZztcbiAgICAgICAgdGhpcy5tZXRob2QgPSBcInJldHVyblwiO1xuICAgICAgICB0aGlzLm5leHQgPSBcImVuZFwiO1xuICAgICAgfSBlbHNlIGlmIChyZWNvcmQudHlwZSA9PT0gXCJub3JtYWxcIiAmJiBhZnRlckxvYykge1xuICAgICAgICB0aGlzLm5leHQgPSBhZnRlckxvYztcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIENvbnRpbnVlU2VudGluZWw7XG4gICAgfSxcblxuICAgIGZpbmlzaDogZnVuY3Rpb24oZmluYWxseUxvYykge1xuICAgICAgZm9yICh2YXIgaSA9IHRoaXMudHJ5RW50cmllcy5sZW5ndGggLSAxOyBpID49IDA7IC0taSkge1xuICAgICAgICB2YXIgZW50cnkgPSB0aGlzLnRyeUVudHJpZXNbaV07XG4gICAgICAgIGlmIChlbnRyeS5maW5hbGx5TG9jID09PSBmaW5hbGx5TG9jKSB7XG4gICAgICAgICAgdGhpcy5jb21wbGV0ZShlbnRyeS5jb21wbGV0aW9uLCBlbnRyeS5hZnRlckxvYyk7XG4gICAgICAgICAgcmVzZXRUcnlFbnRyeShlbnRyeSk7XG4gICAgICAgICAgcmV0dXJuIENvbnRpbnVlU2VudGluZWw7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9LFxuXG4gICAgXCJjYXRjaFwiOiBmdW5jdGlvbih0cnlMb2MpIHtcbiAgICAgIGZvciAodmFyIGkgPSB0aGlzLnRyeUVudHJpZXMubGVuZ3RoIC0gMTsgaSA+PSAwOyAtLWkpIHtcbiAgICAgICAgdmFyIGVudHJ5ID0gdGhpcy50cnlFbnRyaWVzW2ldO1xuICAgICAgICBpZiAoZW50cnkudHJ5TG9jID09PSB0cnlMb2MpIHtcbiAgICAgICAgICB2YXIgcmVjb3JkID0gZW50cnkuY29tcGxldGlvbjtcbiAgICAgICAgICBpZiAocmVjb3JkLnR5cGUgPT09IFwidGhyb3dcIikge1xuICAgICAgICAgICAgdmFyIHRocm93biA9IHJlY29yZC5hcmc7XG4gICAgICAgICAgICByZXNldFRyeUVudHJ5KGVudHJ5KTtcbiAgICAgICAgICB9XG4gICAgICAgICAgcmV0dXJuIHRocm93bjtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICAvLyBUaGUgY29udGV4dC5jYXRjaCBtZXRob2QgbXVzdCBvbmx5IGJlIGNhbGxlZCB3aXRoIGEgbG9jYXRpb25cbiAgICAgIC8vIGFyZ3VtZW50IHRoYXQgY29ycmVzcG9uZHMgdG8gYSBrbm93biBjYXRjaCBibG9jay5cbiAgICAgIHRocm93IG5ldyBFcnJvcihcImlsbGVnYWwgY2F0Y2ggYXR0ZW1wdFwiKTtcbiAgICB9LFxuXG4gICAgZGVsZWdhdGVZaWVsZDogZnVuY3Rpb24oaXRlcmFibGUsIHJlc3VsdE5hbWUsIG5leHRMb2MpIHtcbiAgICAgIHRoaXMuZGVsZWdhdGUgPSB7XG4gICAgICAgIGl0ZXJhdG9yOiB2YWx1ZXMoaXRlcmFibGUpLFxuICAgICAgICByZXN1bHROYW1lOiByZXN1bHROYW1lLFxuICAgICAgICBuZXh0TG9jOiBuZXh0TG9jXG4gICAgICB9O1xuXG4gICAgICBpZiAodGhpcy5tZXRob2QgPT09IFwibmV4dFwiKSB7XG4gICAgICAgIC8vIERlbGliZXJhdGVseSBmb3JnZXQgdGhlIGxhc3Qgc2VudCB2YWx1ZSBzbyB0aGF0IHdlIGRvbid0XG4gICAgICAgIC8vIGFjY2lkZW50YWxseSBwYXNzIGl0IG9uIHRvIHRoZSBkZWxlZ2F0ZS5cbiAgICAgICAgdGhpcy5hcmcgPSB1bmRlZmluZWQ7XG4gICAgICB9XG5cbiAgICAgIHJldHVybiBDb250aW51ZVNlbnRpbmVsO1xuICAgIH1cbiAgfTtcbn0pKFxuICAvLyBJbiBzbG9wcHkgbW9kZSwgdW5ib3VuZCBgdGhpc2AgcmVmZXJzIHRvIHRoZSBnbG9iYWwgb2JqZWN0LCBmYWxsYmFjayB0b1xuICAvLyBGdW5jdGlvbiBjb25zdHJ1Y3RvciBpZiB3ZSdyZSBpbiBnbG9iYWwgc3RyaWN0IG1vZGUuIFRoYXQgaXMgc2FkbHkgYSBmb3JtXG4gIC8vIG9mIGluZGlyZWN0IGV2YWwgd2hpY2ggdmlvbGF0ZXMgQ29udGVudCBTZWN1cml0eSBQb2xpY3kuXG4gIChmdW5jdGlvbigpIHsgcmV0dXJuIHRoaXMgfSkoKSB8fCBGdW5jdGlvbihcInJldHVybiB0aGlzXCIpKClcbik7XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL25vZGVfbW9kdWxlcy9fcmVnZW5lcmF0b3ItcnVudGltZUAwLjExLjFAcmVnZW5lcmF0b3ItcnVudGltZS9ydW50aW1lLmpzXG4vLyBtb2R1bGUgaWQgPSA5NlxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJyZXF1aXJlKCcuLi9tb2R1bGVzL2VzNi5vYmplY3QudG8tc3RyaW5nJyk7XG5yZXF1aXJlKCcuLi9tb2R1bGVzL2VzNi5zdHJpbmcuaXRlcmF0b3InKTtcbnJlcXVpcmUoJy4uL21vZHVsZXMvd2ViLmRvbS5pdGVyYWJsZScpO1xucmVxdWlyZSgnLi4vbW9kdWxlcy9lczYucHJvbWlzZScpO1xucmVxdWlyZSgnLi4vbW9kdWxlcy9lczcucHJvbWlzZS5maW5hbGx5Jyk7XG5yZXF1aXJlKCcuLi9tb2R1bGVzL2VzNy5wcm9taXNlLnRyeScpO1xubW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKCcuLi9tb2R1bGVzL19jb3JlJykuUHJvbWlzZTtcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vbm9kZV9tb2R1bGVzL19jb3JlLWpzQDIuNS4zQGNvcmUtanMvbGlicmFyeS9mbi9wcm9taXNlLmpzXG4vLyBtb2R1bGUgaWQgPSA5N1xuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJ2YXIgdG9JbnRlZ2VyID0gcmVxdWlyZSgnLi9fdG8taW50ZWdlcicpO1xudmFyIGRlZmluZWQgPSByZXF1aXJlKCcuL19kZWZpbmVkJyk7XG4vLyB0cnVlICAtPiBTdHJpbmcjYXRcbi8vIGZhbHNlIC0+IFN0cmluZyNjb2RlUG9pbnRBdFxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoVE9fU1RSSU5HKSB7XG4gIHJldHVybiBmdW5jdGlvbiAodGhhdCwgcG9zKSB7XG4gICAgdmFyIHMgPSBTdHJpbmcoZGVmaW5lZCh0aGF0KSk7XG4gICAgdmFyIGkgPSB0b0ludGVnZXIocG9zKTtcbiAgICB2YXIgbCA9IHMubGVuZ3RoO1xuICAgIHZhciBhLCBiO1xuICAgIGlmIChpIDwgMCB8fCBpID49IGwpIHJldHVybiBUT19TVFJJTkcgPyAnJyA6IHVuZGVmaW5lZDtcbiAgICBhID0gcy5jaGFyQ29kZUF0KGkpO1xuICAgIHJldHVybiBhIDwgMHhkODAwIHx8IGEgPiAweGRiZmYgfHwgaSArIDEgPT09IGwgfHwgKGIgPSBzLmNoYXJDb2RlQXQoaSArIDEpKSA8IDB4ZGMwMCB8fCBiID4gMHhkZmZmXG4gICAgICA/IFRPX1NUUklORyA/IHMuY2hhckF0KGkpIDogYVxuICAgICAgOiBUT19TVFJJTkcgPyBzLnNsaWNlKGksIGkgKyAyKSA6IChhIC0gMHhkODAwIDw8IDEwKSArIChiIC0gMHhkYzAwKSArIDB4MTAwMDA7XG4gIH07XG59O1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9ub2RlX21vZHVsZXMvX2NvcmUtanNAMi41LjNAY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX3N0cmluZy1hdC5qc1xuLy8gbW9kdWxlIGlkID0gOThcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiJ3VzZSBzdHJpY3QnO1xudmFyIGNyZWF0ZSA9IHJlcXVpcmUoJy4vX29iamVjdC1jcmVhdGUnKTtcbnZhciBkZXNjcmlwdG9yID0gcmVxdWlyZSgnLi9fcHJvcGVydHktZGVzYycpO1xudmFyIHNldFRvU3RyaW5nVGFnID0gcmVxdWlyZSgnLi9fc2V0LXRvLXN0cmluZy10YWcnKTtcbnZhciBJdGVyYXRvclByb3RvdHlwZSA9IHt9O1xuXG4vLyAyNS4xLjIuMS4xICVJdGVyYXRvclByb3RvdHlwZSVbQEBpdGVyYXRvcl0oKVxucmVxdWlyZSgnLi9faGlkZScpKEl0ZXJhdG9yUHJvdG90eXBlLCByZXF1aXJlKCcuL193a3MnKSgnaXRlcmF0b3InKSwgZnVuY3Rpb24gKCkgeyByZXR1cm4gdGhpczsgfSk7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKENvbnN0cnVjdG9yLCBOQU1FLCBuZXh0KSB7XG4gIENvbnN0cnVjdG9yLnByb3RvdHlwZSA9IGNyZWF0ZShJdGVyYXRvclByb3RvdHlwZSwgeyBuZXh0OiBkZXNjcmlwdG9yKDEsIG5leHQpIH0pO1xuICBzZXRUb1N0cmluZ1RhZyhDb25zdHJ1Y3RvciwgTkFNRSArICcgSXRlcmF0b3InKTtcbn07XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL25vZGVfbW9kdWxlcy9fY29yZS1qc0AyLjUuM0Bjb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9faXRlci1jcmVhdGUuanNcbi8vIG1vZHVsZSBpZCA9IDk5XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsInZhciBkUCA9IHJlcXVpcmUoJy4vX29iamVjdC1kcCcpO1xudmFyIGFuT2JqZWN0ID0gcmVxdWlyZSgnLi9fYW4tb2JqZWN0Jyk7XG52YXIgZ2V0S2V5cyA9IHJlcXVpcmUoJy4vX29iamVjdC1rZXlzJyk7XG5cbm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZSgnLi9fZGVzY3JpcHRvcnMnKSA/IE9iamVjdC5kZWZpbmVQcm9wZXJ0aWVzIDogZnVuY3Rpb24gZGVmaW5lUHJvcGVydGllcyhPLCBQcm9wZXJ0aWVzKSB7XG4gIGFuT2JqZWN0KE8pO1xuICB2YXIga2V5cyA9IGdldEtleXMoUHJvcGVydGllcyk7XG4gIHZhciBsZW5ndGggPSBrZXlzLmxlbmd0aDtcbiAgdmFyIGkgPSAwO1xuICB2YXIgUDtcbiAgd2hpbGUgKGxlbmd0aCA+IGkpIGRQLmYoTywgUCA9IGtleXNbaSsrXSwgUHJvcGVydGllc1tQXSk7XG4gIHJldHVybiBPO1xufTtcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vbm9kZV9tb2R1bGVzL19jb3JlLWpzQDIuNS4zQGNvcmUtanMvbGlicmFyeS9tb2R1bGVzL19vYmplY3QtZHBzLmpzXG4vLyBtb2R1bGUgaWQgPSAxMDBcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiLy8gZmFsc2UgLT4gQXJyYXkjaW5kZXhPZlxuLy8gdHJ1ZSAgLT4gQXJyYXkjaW5jbHVkZXNcbnZhciB0b0lPYmplY3QgPSByZXF1aXJlKCcuL190by1pb2JqZWN0Jyk7XG52YXIgdG9MZW5ndGggPSByZXF1aXJlKCcuL190by1sZW5ndGgnKTtcbnZhciB0b0Fic29sdXRlSW5kZXggPSByZXF1aXJlKCcuL190by1hYnNvbHV0ZS1pbmRleCcpO1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoSVNfSU5DTFVERVMpIHtcbiAgcmV0dXJuIGZ1bmN0aW9uICgkdGhpcywgZWwsIGZyb21JbmRleCkge1xuICAgIHZhciBPID0gdG9JT2JqZWN0KCR0aGlzKTtcbiAgICB2YXIgbGVuZ3RoID0gdG9MZW5ndGgoTy5sZW5ndGgpO1xuICAgIHZhciBpbmRleCA9IHRvQWJzb2x1dGVJbmRleChmcm9tSW5kZXgsIGxlbmd0aCk7XG4gICAgdmFyIHZhbHVlO1xuICAgIC8vIEFycmF5I2luY2x1ZGVzIHVzZXMgU2FtZVZhbHVlWmVybyBlcXVhbGl0eSBhbGdvcml0aG1cbiAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tc2VsZi1jb21wYXJlXG4gICAgaWYgKElTX0lOQ0xVREVTICYmIGVsICE9IGVsKSB3aGlsZSAobGVuZ3RoID4gaW5kZXgpIHtcbiAgICAgIHZhbHVlID0gT1tpbmRleCsrXTtcbiAgICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby1zZWxmLWNvbXBhcmVcbiAgICAgIGlmICh2YWx1ZSAhPSB2YWx1ZSkgcmV0dXJuIHRydWU7XG4gICAgLy8gQXJyYXkjaW5kZXhPZiBpZ25vcmVzIGhvbGVzLCBBcnJheSNpbmNsdWRlcyAtIG5vdFxuICAgIH0gZWxzZSBmb3IgKDtsZW5ndGggPiBpbmRleDsgaW5kZXgrKykgaWYgKElTX0lOQ0xVREVTIHx8IGluZGV4IGluIE8pIHtcbiAgICAgIGlmIChPW2luZGV4XSA9PT0gZWwpIHJldHVybiBJU19JTkNMVURFUyB8fCBpbmRleCB8fCAwO1xuICAgIH0gcmV0dXJuICFJU19JTkNMVURFUyAmJiAtMTtcbiAgfTtcbn07XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL25vZGVfbW9kdWxlcy9fY29yZS1qc0AyLjUuM0Bjb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9fYXJyYXktaW5jbHVkZXMuanNcbi8vIG1vZHVsZSBpZCA9IDEwMVxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJ2YXIgdG9JbnRlZ2VyID0gcmVxdWlyZSgnLi9fdG8taW50ZWdlcicpO1xudmFyIG1heCA9IE1hdGgubWF4O1xudmFyIG1pbiA9IE1hdGgubWluO1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoaW5kZXgsIGxlbmd0aCkge1xuICBpbmRleCA9IHRvSW50ZWdlcihpbmRleCk7XG4gIHJldHVybiBpbmRleCA8IDAgPyBtYXgoaW5kZXggKyBsZW5ndGgsIDApIDogbWluKGluZGV4LCBsZW5ndGgpO1xufTtcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vbm9kZV9tb2R1bGVzL19jb3JlLWpzQDIuNS4zQGNvcmUtanMvbGlicmFyeS9tb2R1bGVzL190by1hYnNvbHV0ZS1pbmRleC5qc1xuLy8gbW9kdWxlIGlkID0gMTAyXG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIid1c2Ugc3RyaWN0JztcbnZhciBhZGRUb1Vuc2NvcGFibGVzID0gcmVxdWlyZSgnLi9fYWRkLXRvLXVuc2NvcGFibGVzJyk7XG52YXIgc3RlcCA9IHJlcXVpcmUoJy4vX2l0ZXItc3RlcCcpO1xudmFyIEl0ZXJhdG9ycyA9IHJlcXVpcmUoJy4vX2l0ZXJhdG9ycycpO1xudmFyIHRvSU9iamVjdCA9IHJlcXVpcmUoJy4vX3RvLWlvYmplY3QnKTtcblxuLy8gMjIuMS4zLjQgQXJyYXkucHJvdG90eXBlLmVudHJpZXMoKVxuLy8gMjIuMS4zLjEzIEFycmF5LnByb3RvdHlwZS5rZXlzKClcbi8vIDIyLjEuMy4yOSBBcnJheS5wcm90b3R5cGUudmFsdWVzKClcbi8vIDIyLjEuMy4zMCBBcnJheS5wcm90b3R5cGVbQEBpdGVyYXRvcl0oKVxubW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKCcuL19pdGVyLWRlZmluZScpKEFycmF5LCAnQXJyYXknLCBmdW5jdGlvbiAoaXRlcmF0ZWQsIGtpbmQpIHtcbiAgdGhpcy5fdCA9IHRvSU9iamVjdChpdGVyYXRlZCk7IC8vIHRhcmdldFxuICB0aGlzLl9pID0gMDsgICAgICAgICAgICAgICAgICAgLy8gbmV4dCBpbmRleFxuICB0aGlzLl9rID0ga2luZDsgICAgICAgICAgICAgICAgLy8ga2luZFxuLy8gMjIuMS41LjIuMSAlQXJyYXlJdGVyYXRvclByb3RvdHlwZSUubmV4dCgpXG59LCBmdW5jdGlvbiAoKSB7XG4gIHZhciBPID0gdGhpcy5fdDtcbiAgdmFyIGtpbmQgPSB0aGlzLl9rO1xuICB2YXIgaW5kZXggPSB0aGlzLl9pKys7XG4gIGlmICghTyB8fCBpbmRleCA+PSBPLmxlbmd0aCkge1xuICAgIHRoaXMuX3QgPSB1bmRlZmluZWQ7XG4gICAgcmV0dXJuIHN0ZXAoMSk7XG4gIH1cbiAgaWYgKGtpbmQgPT0gJ2tleXMnKSByZXR1cm4gc3RlcCgwLCBpbmRleCk7XG4gIGlmIChraW5kID09ICd2YWx1ZXMnKSByZXR1cm4gc3RlcCgwLCBPW2luZGV4XSk7XG4gIHJldHVybiBzdGVwKDAsIFtpbmRleCwgT1tpbmRleF1dKTtcbn0sICd2YWx1ZXMnKTtcblxuLy8gYXJndW1lbnRzTGlzdFtAQGl0ZXJhdG9yXSBpcyAlQXJyYXlQcm90b192YWx1ZXMlICg5LjQuNC42LCA5LjQuNC43KVxuSXRlcmF0b3JzLkFyZ3VtZW50cyA9IEl0ZXJhdG9ycy5BcnJheTtcblxuYWRkVG9VbnNjb3BhYmxlcygna2V5cycpO1xuYWRkVG9VbnNjb3BhYmxlcygndmFsdWVzJyk7XG5hZGRUb1Vuc2NvcGFibGVzKCdlbnRyaWVzJyk7XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL25vZGVfbW9kdWxlcy9fY29yZS1qc0AyLjUuM0Bjb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9lczYuYXJyYXkuaXRlcmF0b3IuanNcbi8vIG1vZHVsZSBpZCA9IDEwM1xuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJtb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uICgpIHsgLyogZW1wdHkgKi8gfTtcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vbm9kZV9tb2R1bGVzL19jb3JlLWpzQDIuNS4zQGNvcmUtanMvbGlicmFyeS9tb2R1bGVzL19hZGQtdG8tdW5zY29wYWJsZXMuanNcbi8vIG1vZHVsZSBpZCA9IDEwNFxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCIndXNlIHN0cmljdCc7XG52YXIgTElCUkFSWSA9IHJlcXVpcmUoJy4vX2xpYnJhcnknKTtcbnZhciBnbG9iYWwgPSByZXF1aXJlKCcuL19nbG9iYWwnKTtcbnZhciBjdHggPSByZXF1aXJlKCcuL19jdHgnKTtcbnZhciBjbGFzc29mID0gcmVxdWlyZSgnLi9fY2xhc3NvZicpO1xudmFyICRleHBvcnQgPSByZXF1aXJlKCcuL19leHBvcnQnKTtcbnZhciBpc09iamVjdCA9IHJlcXVpcmUoJy4vX2lzLW9iamVjdCcpO1xudmFyIGFGdW5jdGlvbiA9IHJlcXVpcmUoJy4vX2EtZnVuY3Rpb24nKTtcbnZhciBhbkluc3RhbmNlID0gcmVxdWlyZSgnLi9fYW4taW5zdGFuY2UnKTtcbnZhciBmb3JPZiA9IHJlcXVpcmUoJy4vX2Zvci1vZicpO1xudmFyIHNwZWNpZXNDb25zdHJ1Y3RvciA9IHJlcXVpcmUoJy4vX3NwZWNpZXMtY29uc3RydWN0b3InKTtcbnZhciB0YXNrID0gcmVxdWlyZSgnLi9fdGFzaycpLnNldDtcbnZhciBtaWNyb3Rhc2sgPSByZXF1aXJlKCcuL19taWNyb3Rhc2snKSgpO1xudmFyIG5ld1Byb21pc2VDYXBhYmlsaXR5TW9kdWxlID0gcmVxdWlyZSgnLi9fbmV3LXByb21pc2UtY2FwYWJpbGl0eScpO1xudmFyIHBlcmZvcm0gPSByZXF1aXJlKCcuL19wZXJmb3JtJyk7XG52YXIgcHJvbWlzZVJlc29sdmUgPSByZXF1aXJlKCcuL19wcm9taXNlLXJlc29sdmUnKTtcbnZhciBQUk9NSVNFID0gJ1Byb21pc2UnO1xudmFyIFR5cGVFcnJvciA9IGdsb2JhbC5UeXBlRXJyb3I7XG52YXIgcHJvY2VzcyA9IGdsb2JhbC5wcm9jZXNzO1xudmFyICRQcm9taXNlID0gZ2xvYmFsW1BST01JU0VdO1xudmFyIGlzTm9kZSA9IGNsYXNzb2YocHJvY2VzcykgPT0gJ3Byb2Nlc3MnO1xudmFyIGVtcHR5ID0gZnVuY3Rpb24gKCkgeyAvKiBlbXB0eSAqLyB9O1xudmFyIEludGVybmFsLCBuZXdHZW5lcmljUHJvbWlzZUNhcGFiaWxpdHksIE93blByb21pc2VDYXBhYmlsaXR5LCBXcmFwcGVyO1xudmFyIG5ld1Byb21pc2VDYXBhYmlsaXR5ID0gbmV3R2VuZXJpY1Byb21pc2VDYXBhYmlsaXR5ID0gbmV3UHJvbWlzZUNhcGFiaWxpdHlNb2R1bGUuZjtcblxudmFyIFVTRV9OQVRJVkUgPSAhIWZ1bmN0aW9uICgpIHtcbiAgdHJ5IHtcbiAgICAvLyBjb3JyZWN0IHN1YmNsYXNzaW5nIHdpdGggQEBzcGVjaWVzIHN1cHBvcnRcbiAgICB2YXIgcHJvbWlzZSA9ICRQcm9taXNlLnJlc29sdmUoMSk7XG4gICAgdmFyIEZha2VQcm9taXNlID0gKHByb21pc2UuY29uc3RydWN0b3IgPSB7fSlbcmVxdWlyZSgnLi9fd2tzJykoJ3NwZWNpZXMnKV0gPSBmdW5jdGlvbiAoZXhlYykge1xuICAgICAgZXhlYyhlbXB0eSwgZW1wdHkpO1xuICAgIH07XG4gICAgLy8gdW5oYW5kbGVkIHJlamVjdGlvbnMgdHJhY2tpbmcgc3VwcG9ydCwgTm9kZUpTIFByb21pc2Ugd2l0aG91dCBpdCBmYWlscyBAQHNwZWNpZXMgdGVzdFxuICAgIHJldHVybiAoaXNOb2RlIHx8IHR5cGVvZiBQcm9taXNlUmVqZWN0aW9uRXZlbnQgPT0gJ2Z1bmN0aW9uJykgJiYgcHJvbWlzZS50aGVuKGVtcHR5KSBpbnN0YW5jZW9mIEZha2VQcm9taXNlO1xuICB9IGNhdGNoIChlKSB7IC8qIGVtcHR5ICovIH1cbn0oKTtcblxuLy8gaGVscGVyc1xudmFyIGlzVGhlbmFibGUgPSBmdW5jdGlvbiAoaXQpIHtcbiAgdmFyIHRoZW47XG4gIHJldHVybiBpc09iamVjdChpdCkgJiYgdHlwZW9mICh0aGVuID0gaXQudGhlbikgPT0gJ2Z1bmN0aW9uJyA/IHRoZW4gOiBmYWxzZTtcbn07XG52YXIgbm90aWZ5ID0gZnVuY3Rpb24gKHByb21pc2UsIGlzUmVqZWN0KSB7XG4gIGlmIChwcm9taXNlLl9uKSByZXR1cm47XG4gIHByb21pc2UuX24gPSB0cnVlO1xuICB2YXIgY2hhaW4gPSBwcm9taXNlLl9jO1xuICBtaWNyb3Rhc2soZnVuY3Rpb24gKCkge1xuICAgIHZhciB2YWx1ZSA9IHByb21pc2UuX3Y7XG4gICAgdmFyIG9rID0gcHJvbWlzZS5fcyA9PSAxO1xuICAgIHZhciBpID0gMDtcbiAgICB2YXIgcnVuID0gZnVuY3Rpb24gKHJlYWN0aW9uKSB7XG4gICAgICB2YXIgaGFuZGxlciA9IG9rID8gcmVhY3Rpb24ub2sgOiByZWFjdGlvbi5mYWlsO1xuICAgICAgdmFyIHJlc29sdmUgPSByZWFjdGlvbi5yZXNvbHZlO1xuICAgICAgdmFyIHJlamVjdCA9IHJlYWN0aW9uLnJlamVjdDtcbiAgICAgIHZhciBkb21haW4gPSByZWFjdGlvbi5kb21haW47XG4gICAgICB2YXIgcmVzdWx0LCB0aGVuO1xuICAgICAgdHJ5IHtcbiAgICAgICAgaWYgKGhhbmRsZXIpIHtcbiAgICAgICAgICBpZiAoIW9rKSB7XG4gICAgICAgICAgICBpZiAocHJvbWlzZS5faCA9PSAyKSBvbkhhbmRsZVVuaGFuZGxlZChwcm9taXNlKTtcbiAgICAgICAgICAgIHByb21pc2UuX2ggPSAxO1xuICAgICAgICAgIH1cbiAgICAgICAgICBpZiAoaGFuZGxlciA9PT0gdHJ1ZSkgcmVzdWx0ID0gdmFsdWU7XG4gICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICBpZiAoZG9tYWluKSBkb21haW4uZW50ZXIoKTtcbiAgICAgICAgICAgIHJlc3VsdCA9IGhhbmRsZXIodmFsdWUpO1xuICAgICAgICAgICAgaWYgKGRvbWFpbikgZG9tYWluLmV4aXQoKTtcbiAgICAgICAgICB9XG4gICAgICAgICAgaWYgKHJlc3VsdCA9PT0gcmVhY3Rpb24ucHJvbWlzZSkge1xuICAgICAgICAgICAgcmVqZWN0KFR5cGVFcnJvcignUHJvbWlzZS1jaGFpbiBjeWNsZScpKTtcbiAgICAgICAgICB9IGVsc2UgaWYgKHRoZW4gPSBpc1RoZW5hYmxlKHJlc3VsdCkpIHtcbiAgICAgICAgICAgIHRoZW4uY2FsbChyZXN1bHQsIHJlc29sdmUsIHJlamVjdCk7XG4gICAgICAgICAgfSBlbHNlIHJlc29sdmUocmVzdWx0KTtcbiAgICAgICAgfSBlbHNlIHJlamVjdCh2YWx1ZSk7XG4gICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgIHJlamVjdChlKTtcbiAgICAgIH1cbiAgICB9O1xuICAgIHdoaWxlIChjaGFpbi5sZW5ndGggPiBpKSBydW4oY2hhaW5baSsrXSk7IC8vIHZhcmlhYmxlIGxlbmd0aCAtIGNhbid0IHVzZSBmb3JFYWNoXG4gICAgcHJvbWlzZS5fYyA9IFtdO1xuICAgIHByb21pc2UuX24gPSBmYWxzZTtcbiAgICBpZiAoaXNSZWplY3QgJiYgIXByb21pc2UuX2gpIG9uVW5oYW5kbGVkKHByb21pc2UpO1xuICB9KTtcbn07XG52YXIgb25VbmhhbmRsZWQgPSBmdW5jdGlvbiAocHJvbWlzZSkge1xuICB0YXNrLmNhbGwoZ2xvYmFsLCBmdW5jdGlvbiAoKSB7XG4gICAgdmFyIHZhbHVlID0gcHJvbWlzZS5fdjtcbiAgICB2YXIgdW5oYW5kbGVkID0gaXNVbmhhbmRsZWQocHJvbWlzZSk7XG4gICAgdmFyIHJlc3VsdCwgaGFuZGxlciwgY29uc29sZTtcbiAgICBpZiAodW5oYW5kbGVkKSB7XG4gICAgICByZXN1bHQgPSBwZXJmb3JtKGZ1bmN0aW9uICgpIHtcbiAgICAgICAgaWYgKGlzTm9kZSkge1xuICAgICAgICAgIHByb2Nlc3MuZW1pdCgndW5oYW5kbGVkUmVqZWN0aW9uJywgdmFsdWUsIHByb21pc2UpO1xuICAgICAgICB9IGVsc2UgaWYgKGhhbmRsZXIgPSBnbG9iYWwub251bmhhbmRsZWRyZWplY3Rpb24pIHtcbiAgICAgICAgICBoYW5kbGVyKHsgcHJvbWlzZTogcHJvbWlzZSwgcmVhc29uOiB2YWx1ZSB9KTtcbiAgICAgICAgfSBlbHNlIGlmICgoY29uc29sZSA9IGdsb2JhbC5jb25zb2xlKSAmJiBjb25zb2xlLmVycm9yKSB7XG4gICAgICAgICAgY29uc29sZS5lcnJvcignVW5oYW5kbGVkIHByb21pc2UgcmVqZWN0aW9uJywgdmFsdWUpO1xuICAgICAgICB9XG4gICAgICB9KTtcbiAgICAgIC8vIEJyb3dzZXJzIHNob3VsZCBub3QgdHJpZ2dlciBgcmVqZWN0aW9uSGFuZGxlZGAgZXZlbnQgaWYgaXQgd2FzIGhhbmRsZWQgaGVyZSwgTm9kZUpTIC0gc2hvdWxkXG4gICAgICBwcm9taXNlLl9oID0gaXNOb2RlIHx8IGlzVW5oYW5kbGVkKHByb21pc2UpID8gMiA6IDE7XG4gICAgfSBwcm9taXNlLl9hID0gdW5kZWZpbmVkO1xuICAgIGlmICh1bmhhbmRsZWQgJiYgcmVzdWx0LmUpIHRocm93IHJlc3VsdC52O1xuICB9KTtcbn07XG52YXIgaXNVbmhhbmRsZWQgPSBmdW5jdGlvbiAocHJvbWlzZSkge1xuICByZXR1cm4gcHJvbWlzZS5faCAhPT0gMSAmJiAocHJvbWlzZS5fYSB8fCBwcm9taXNlLl9jKS5sZW5ndGggPT09IDA7XG59O1xudmFyIG9uSGFuZGxlVW5oYW5kbGVkID0gZnVuY3Rpb24gKHByb21pc2UpIHtcbiAgdGFzay5jYWxsKGdsb2JhbCwgZnVuY3Rpb24gKCkge1xuICAgIHZhciBoYW5kbGVyO1xuICAgIGlmIChpc05vZGUpIHtcbiAgICAgIHByb2Nlc3MuZW1pdCgncmVqZWN0aW9uSGFuZGxlZCcsIHByb21pc2UpO1xuICAgIH0gZWxzZSBpZiAoaGFuZGxlciA9IGdsb2JhbC5vbnJlamVjdGlvbmhhbmRsZWQpIHtcbiAgICAgIGhhbmRsZXIoeyBwcm9taXNlOiBwcm9taXNlLCByZWFzb246IHByb21pc2UuX3YgfSk7XG4gICAgfVxuICB9KTtcbn07XG52YXIgJHJlamVjdCA9IGZ1bmN0aW9uICh2YWx1ZSkge1xuICB2YXIgcHJvbWlzZSA9IHRoaXM7XG4gIGlmIChwcm9taXNlLl9kKSByZXR1cm47XG4gIHByb21pc2UuX2QgPSB0cnVlO1xuICBwcm9taXNlID0gcHJvbWlzZS5fdyB8fCBwcm9taXNlOyAvLyB1bndyYXBcbiAgcHJvbWlzZS5fdiA9IHZhbHVlO1xuICBwcm9taXNlLl9zID0gMjtcbiAgaWYgKCFwcm9taXNlLl9hKSBwcm9taXNlLl9hID0gcHJvbWlzZS5fYy5zbGljZSgpO1xuICBub3RpZnkocHJvbWlzZSwgdHJ1ZSk7XG59O1xudmFyICRyZXNvbHZlID0gZnVuY3Rpb24gKHZhbHVlKSB7XG4gIHZhciBwcm9taXNlID0gdGhpcztcbiAgdmFyIHRoZW47XG4gIGlmIChwcm9taXNlLl9kKSByZXR1cm47XG4gIHByb21pc2UuX2QgPSB0cnVlO1xuICBwcm9taXNlID0gcHJvbWlzZS5fdyB8fCBwcm9taXNlOyAvLyB1bndyYXBcbiAgdHJ5IHtcbiAgICBpZiAocHJvbWlzZSA9PT0gdmFsdWUpIHRocm93IFR5cGVFcnJvcihcIlByb21pc2UgY2FuJ3QgYmUgcmVzb2x2ZWQgaXRzZWxmXCIpO1xuICAgIGlmICh0aGVuID0gaXNUaGVuYWJsZSh2YWx1ZSkpIHtcbiAgICAgIG1pY3JvdGFzayhmdW5jdGlvbiAoKSB7XG4gICAgICAgIHZhciB3cmFwcGVyID0geyBfdzogcHJvbWlzZSwgX2Q6IGZhbHNlIH07IC8vIHdyYXBcbiAgICAgICAgdHJ5IHtcbiAgICAgICAgICB0aGVuLmNhbGwodmFsdWUsIGN0eCgkcmVzb2x2ZSwgd3JhcHBlciwgMSksIGN0eCgkcmVqZWN0LCB3cmFwcGVyLCAxKSk7XG4gICAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgICAkcmVqZWN0LmNhbGwod3JhcHBlciwgZSk7XG4gICAgICAgIH1cbiAgICAgIH0pO1xuICAgIH0gZWxzZSB7XG4gICAgICBwcm9taXNlLl92ID0gdmFsdWU7XG4gICAgICBwcm9taXNlLl9zID0gMTtcbiAgICAgIG5vdGlmeShwcm9taXNlLCBmYWxzZSk7XG4gICAgfVxuICB9IGNhdGNoIChlKSB7XG4gICAgJHJlamVjdC5jYWxsKHsgX3c6IHByb21pc2UsIF9kOiBmYWxzZSB9LCBlKTsgLy8gd3JhcFxuICB9XG59O1xuXG4vLyBjb25zdHJ1Y3RvciBwb2x5ZmlsbFxuaWYgKCFVU0VfTkFUSVZFKSB7XG4gIC8vIDI1LjQuMy4xIFByb21pc2UoZXhlY3V0b3IpXG4gICRQcm9taXNlID0gZnVuY3Rpb24gUHJvbWlzZShleGVjdXRvcikge1xuICAgIGFuSW5zdGFuY2UodGhpcywgJFByb21pc2UsIFBST01JU0UsICdfaCcpO1xuICAgIGFGdW5jdGlvbihleGVjdXRvcik7XG4gICAgSW50ZXJuYWwuY2FsbCh0aGlzKTtcbiAgICB0cnkge1xuICAgICAgZXhlY3V0b3IoY3R4KCRyZXNvbHZlLCB0aGlzLCAxKSwgY3R4KCRyZWplY3QsIHRoaXMsIDEpKTtcbiAgICB9IGNhdGNoIChlcnIpIHtcbiAgICAgICRyZWplY3QuY2FsbCh0aGlzLCBlcnIpO1xuICAgIH1cbiAgfTtcbiAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLXVudXNlZC12YXJzXG4gIEludGVybmFsID0gZnVuY3Rpb24gUHJvbWlzZShleGVjdXRvcikge1xuICAgIHRoaXMuX2MgPSBbXTsgICAgICAgICAgICAgLy8gPC0gYXdhaXRpbmcgcmVhY3Rpb25zXG4gICAgdGhpcy5fYSA9IHVuZGVmaW5lZDsgICAgICAvLyA8LSBjaGVja2VkIGluIGlzVW5oYW5kbGVkIHJlYWN0aW9uc1xuICAgIHRoaXMuX3MgPSAwOyAgICAgICAgICAgICAgLy8gPC0gc3RhdGVcbiAgICB0aGlzLl9kID0gZmFsc2U7ICAgICAgICAgIC8vIDwtIGRvbmVcbiAgICB0aGlzLl92ID0gdW5kZWZpbmVkOyAgICAgIC8vIDwtIHZhbHVlXG4gICAgdGhpcy5faCA9IDA7ICAgICAgICAgICAgICAvLyA8LSByZWplY3Rpb24gc3RhdGUsIDAgLSBkZWZhdWx0LCAxIC0gaGFuZGxlZCwgMiAtIHVuaGFuZGxlZFxuICAgIHRoaXMuX24gPSBmYWxzZTsgICAgICAgICAgLy8gPC0gbm90aWZ5XG4gIH07XG4gIEludGVybmFsLnByb3RvdHlwZSA9IHJlcXVpcmUoJy4vX3JlZGVmaW5lLWFsbCcpKCRQcm9taXNlLnByb3RvdHlwZSwge1xuICAgIC8vIDI1LjQuNS4zIFByb21pc2UucHJvdG90eXBlLnRoZW4ob25GdWxmaWxsZWQsIG9uUmVqZWN0ZWQpXG4gICAgdGhlbjogZnVuY3Rpb24gdGhlbihvbkZ1bGZpbGxlZCwgb25SZWplY3RlZCkge1xuICAgICAgdmFyIHJlYWN0aW9uID0gbmV3UHJvbWlzZUNhcGFiaWxpdHkoc3BlY2llc0NvbnN0cnVjdG9yKHRoaXMsICRQcm9taXNlKSk7XG4gICAgICByZWFjdGlvbi5vayA9IHR5cGVvZiBvbkZ1bGZpbGxlZCA9PSAnZnVuY3Rpb24nID8gb25GdWxmaWxsZWQgOiB0cnVlO1xuICAgICAgcmVhY3Rpb24uZmFpbCA9IHR5cGVvZiBvblJlamVjdGVkID09ICdmdW5jdGlvbicgJiYgb25SZWplY3RlZDtcbiAgICAgIHJlYWN0aW9uLmRvbWFpbiA9IGlzTm9kZSA/IHByb2Nlc3MuZG9tYWluIDogdW5kZWZpbmVkO1xuICAgICAgdGhpcy5fYy5wdXNoKHJlYWN0aW9uKTtcbiAgICAgIGlmICh0aGlzLl9hKSB0aGlzLl9hLnB1c2gocmVhY3Rpb24pO1xuICAgICAgaWYgKHRoaXMuX3MpIG5vdGlmeSh0aGlzLCBmYWxzZSk7XG4gICAgICByZXR1cm4gcmVhY3Rpb24ucHJvbWlzZTtcbiAgICB9LFxuICAgIC8vIDI1LjQuNS4xIFByb21pc2UucHJvdG90eXBlLmNhdGNoKG9uUmVqZWN0ZWQpXG4gICAgJ2NhdGNoJzogZnVuY3Rpb24gKG9uUmVqZWN0ZWQpIHtcbiAgICAgIHJldHVybiB0aGlzLnRoZW4odW5kZWZpbmVkLCBvblJlamVjdGVkKTtcbiAgICB9XG4gIH0pO1xuICBPd25Qcm9taXNlQ2FwYWJpbGl0eSA9IGZ1bmN0aW9uICgpIHtcbiAgICB2YXIgcHJvbWlzZSA9IG5ldyBJbnRlcm5hbCgpO1xuICAgIHRoaXMucHJvbWlzZSA9IHByb21pc2U7XG4gICAgdGhpcy5yZXNvbHZlID0gY3R4KCRyZXNvbHZlLCBwcm9taXNlLCAxKTtcbiAgICB0aGlzLnJlamVjdCA9IGN0eCgkcmVqZWN0LCBwcm9taXNlLCAxKTtcbiAgfTtcbiAgbmV3UHJvbWlzZUNhcGFiaWxpdHlNb2R1bGUuZiA9IG5ld1Byb21pc2VDYXBhYmlsaXR5ID0gZnVuY3Rpb24gKEMpIHtcbiAgICByZXR1cm4gQyA9PT0gJFByb21pc2UgfHwgQyA9PT0gV3JhcHBlclxuICAgICAgPyBuZXcgT3duUHJvbWlzZUNhcGFiaWxpdHkoQylcbiAgICAgIDogbmV3R2VuZXJpY1Byb21pc2VDYXBhYmlsaXR5KEMpO1xuICB9O1xufVxuXG4kZXhwb3J0KCRleHBvcnQuRyArICRleHBvcnQuVyArICRleHBvcnQuRiAqICFVU0VfTkFUSVZFLCB7IFByb21pc2U6ICRQcm9taXNlIH0pO1xucmVxdWlyZSgnLi9fc2V0LXRvLXN0cmluZy10YWcnKSgkUHJvbWlzZSwgUFJPTUlTRSk7XG5yZXF1aXJlKCcuL19zZXQtc3BlY2llcycpKFBST01JU0UpO1xuV3JhcHBlciA9IHJlcXVpcmUoJy4vX2NvcmUnKVtQUk9NSVNFXTtcblxuLy8gc3RhdGljc1xuJGV4cG9ydCgkZXhwb3J0LlMgKyAkZXhwb3J0LkYgKiAhVVNFX05BVElWRSwgUFJPTUlTRSwge1xuICAvLyAyNS40LjQuNSBQcm9taXNlLnJlamVjdChyKVxuICByZWplY3Q6IGZ1bmN0aW9uIHJlamVjdChyKSB7XG4gICAgdmFyIGNhcGFiaWxpdHkgPSBuZXdQcm9taXNlQ2FwYWJpbGl0eSh0aGlzKTtcbiAgICB2YXIgJCRyZWplY3QgPSBjYXBhYmlsaXR5LnJlamVjdDtcbiAgICAkJHJlamVjdChyKTtcbiAgICByZXR1cm4gY2FwYWJpbGl0eS5wcm9taXNlO1xuICB9XG59KTtcbiRleHBvcnQoJGV4cG9ydC5TICsgJGV4cG9ydC5GICogKExJQlJBUlkgfHwgIVVTRV9OQVRJVkUpLCBQUk9NSVNFLCB7XG4gIC8vIDI1LjQuNC42IFByb21pc2UucmVzb2x2ZSh4KVxuICByZXNvbHZlOiBmdW5jdGlvbiByZXNvbHZlKHgpIHtcbiAgICByZXR1cm4gcHJvbWlzZVJlc29sdmUoTElCUkFSWSAmJiB0aGlzID09PSBXcmFwcGVyID8gJFByb21pc2UgOiB0aGlzLCB4KTtcbiAgfVxufSk7XG4kZXhwb3J0KCRleHBvcnQuUyArICRleHBvcnQuRiAqICEoVVNFX05BVElWRSAmJiByZXF1aXJlKCcuL19pdGVyLWRldGVjdCcpKGZ1bmN0aW9uIChpdGVyKSB7XG4gICRQcm9taXNlLmFsbChpdGVyKVsnY2F0Y2gnXShlbXB0eSk7XG59KSksIFBST01JU0UsIHtcbiAgLy8gMjUuNC40LjEgUHJvbWlzZS5hbGwoaXRlcmFibGUpXG4gIGFsbDogZnVuY3Rpb24gYWxsKGl0ZXJhYmxlKSB7XG4gICAgdmFyIEMgPSB0aGlzO1xuICAgIHZhciBjYXBhYmlsaXR5ID0gbmV3UHJvbWlzZUNhcGFiaWxpdHkoQyk7XG4gICAgdmFyIHJlc29sdmUgPSBjYXBhYmlsaXR5LnJlc29sdmU7XG4gICAgdmFyIHJlamVjdCA9IGNhcGFiaWxpdHkucmVqZWN0O1xuICAgIHZhciByZXN1bHQgPSBwZXJmb3JtKGZ1bmN0aW9uICgpIHtcbiAgICAgIHZhciB2YWx1ZXMgPSBbXTtcbiAgICAgIHZhciBpbmRleCA9IDA7XG4gICAgICB2YXIgcmVtYWluaW5nID0gMTtcbiAgICAgIGZvck9mKGl0ZXJhYmxlLCBmYWxzZSwgZnVuY3Rpb24gKHByb21pc2UpIHtcbiAgICAgICAgdmFyICRpbmRleCA9IGluZGV4Kys7XG4gICAgICAgIHZhciBhbHJlYWR5Q2FsbGVkID0gZmFsc2U7XG4gICAgICAgIHZhbHVlcy5wdXNoKHVuZGVmaW5lZCk7XG4gICAgICAgIHJlbWFpbmluZysrO1xuICAgICAgICBDLnJlc29sdmUocHJvbWlzZSkudGhlbihmdW5jdGlvbiAodmFsdWUpIHtcbiAgICAgICAgICBpZiAoYWxyZWFkeUNhbGxlZCkgcmV0dXJuO1xuICAgICAgICAgIGFscmVhZHlDYWxsZWQgPSB0cnVlO1xuICAgICAgICAgIHZhbHVlc1skaW5kZXhdID0gdmFsdWU7XG4gICAgICAgICAgLS1yZW1haW5pbmcgfHwgcmVzb2x2ZSh2YWx1ZXMpO1xuICAgICAgICB9LCByZWplY3QpO1xuICAgICAgfSk7XG4gICAgICAtLXJlbWFpbmluZyB8fCByZXNvbHZlKHZhbHVlcyk7XG4gICAgfSk7XG4gICAgaWYgKHJlc3VsdC5lKSByZWplY3QocmVzdWx0LnYpO1xuICAgIHJldHVybiBjYXBhYmlsaXR5LnByb21pc2U7XG4gIH0sXG4gIC8vIDI1LjQuNC40IFByb21pc2UucmFjZShpdGVyYWJsZSlcbiAgcmFjZTogZnVuY3Rpb24gcmFjZShpdGVyYWJsZSkge1xuICAgIHZhciBDID0gdGhpcztcbiAgICB2YXIgY2FwYWJpbGl0eSA9IG5ld1Byb21pc2VDYXBhYmlsaXR5KEMpO1xuICAgIHZhciByZWplY3QgPSBjYXBhYmlsaXR5LnJlamVjdDtcbiAgICB2YXIgcmVzdWx0ID0gcGVyZm9ybShmdW5jdGlvbiAoKSB7XG4gICAgICBmb3JPZihpdGVyYWJsZSwgZmFsc2UsIGZ1bmN0aW9uIChwcm9taXNlKSB7XG4gICAgICAgIEMucmVzb2x2ZShwcm9taXNlKS50aGVuKGNhcGFiaWxpdHkucmVzb2x2ZSwgcmVqZWN0KTtcbiAgICAgIH0pO1xuICAgIH0pO1xuICAgIGlmIChyZXN1bHQuZSkgcmVqZWN0KHJlc3VsdC52KTtcbiAgICByZXR1cm4gY2FwYWJpbGl0eS5wcm9taXNlO1xuICB9XG59KTtcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vbm9kZV9tb2R1bGVzL19jb3JlLWpzQDIuNS4zQGNvcmUtanMvbGlicmFyeS9tb2R1bGVzL2VzNi5wcm9taXNlLmpzXG4vLyBtb2R1bGUgaWQgPSAxMDVcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiLy8gZmFzdCBhcHBseSwgaHR0cDovL2pzcGVyZi5sbmtpdC5jb20vZmFzdC1hcHBseS81XG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChmbiwgYXJncywgdGhhdCkge1xuICB2YXIgdW4gPSB0aGF0ID09PSB1bmRlZmluZWQ7XG4gIHN3aXRjaCAoYXJncy5sZW5ndGgpIHtcbiAgICBjYXNlIDA6IHJldHVybiB1biA/IGZuKClcbiAgICAgICAgICAgICAgICAgICAgICA6IGZuLmNhbGwodGhhdCk7XG4gICAgY2FzZSAxOiByZXR1cm4gdW4gPyBmbihhcmdzWzBdKVxuICAgICAgICAgICAgICAgICAgICAgIDogZm4uY2FsbCh0aGF0LCBhcmdzWzBdKTtcbiAgICBjYXNlIDI6IHJldHVybiB1biA/IGZuKGFyZ3NbMF0sIGFyZ3NbMV0pXG4gICAgICAgICAgICAgICAgICAgICAgOiBmbi5jYWxsKHRoYXQsIGFyZ3NbMF0sIGFyZ3NbMV0pO1xuICAgIGNhc2UgMzogcmV0dXJuIHVuID8gZm4oYXJnc1swXSwgYXJnc1sxXSwgYXJnc1syXSlcbiAgICAgICAgICAgICAgICAgICAgICA6IGZuLmNhbGwodGhhdCwgYXJnc1swXSwgYXJnc1sxXSwgYXJnc1syXSk7XG4gICAgY2FzZSA0OiByZXR1cm4gdW4gPyBmbihhcmdzWzBdLCBhcmdzWzFdLCBhcmdzWzJdLCBhcmdzWzNdKVxuICAgICAgICAgICAgICAgICAgICAgIDogZm4uY2FsbCh0aGF0LCBhcmdzWzBdLCBhcmdzWzFdLCBhcmdzWzJdLCBhcmdzWzNdKTtcbiAgfSByZXR1cm4gZm4uYXBwbHkodGhhdCwgYXJncyk7XG59O1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9ub2RlX21vZHVsZXMvX2NvcmUtanNAMi41LjNAY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX2ludm9rZS5qc1xuLy8gbW9kdWxlIGlkID0gMTA2XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsInZhciBnbG9iYWwgPSByZXF1aXJlKCcuL19nbG9iYWwnKTtcbnZhciBtYWNyb3Rhc2sgPSByZXF1aXJlKCcuL190YXNrJykuc2V0O1xudmFyIE9ic2VydmVyID0gZ2xvYmFsLk11dGF0aW9uT2JzZXJ2ZXIgfHwgZ2xvYmFsLldlYktpdE11dGF0aW9uT2JzZXJ2ZXI7XG52YXIgcHJvY2VzcyA9IGdsb2JhbC5wcm9jZXNzO1xudmFyIFByb21pc2UgPSBnbG9iYWwuUHJvbWlzZTtcbnZhciBpc05vZGUgPSByZXF1aXJlKCcuL19jb2YnKShwcm9jZXNzKSA9PSAncHJvY2Vzcyc7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKCkge1xuICB2YXIgaGVhZCwgbGFzdCwgbm90aWZ5O1xuXG4gIHZhciBmbHVzaCA9IGZ1bmN0aW9uICgpIHtcbiAgICB2YXIgcGFyZW50LCBmbjtcbiAgICBpZiAoaXNOb2RlICYmIChwYXJlbnQgPSBwcm9jZXNzLmRvbWFpbikpIHBhcmVudC5leGl0KCk7XG4gICAgd2hpbGUgKGhlYWQpIHtcbiAgICAgIGZuID0gaGVhZC5mbjtcbiAgICAgIGhlYWQgPSBoZWFkLm5leHQ7XG4gICAgICB0cnkge1xuICAgICAgICBmbigpO1xuICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgICBpZiAoaGVhZCkgbm90aWZ5KCk7XG4gICAgICAgIGVsc2UgbGFzdCA9IHVuZGVmaW5lZDtcbiAgICAgICAgdGhyb3cgZTtcbiAgICAgIH1cbiAgICB9IGxhc3QgPSB1bmRlZmluZWQ7XG4gICAgaWYgKHBhcmVudCkgcGFyZW50LmVudGVyKCk7XG4gIH07XG5cbiAgLy8gTm9kZS5qc1xuICBpZiAoaXNOb2RlKSB7XG4gICAgbm90aWZ5ID0gZnVuY3Rpb24gKCkge1xuICAgICAgcHJvY2Vzcy5uZXh0VGljayhmbHVzaCk7XG4gICAgfTtcbiAgLy8gYnJvd3NlcnMgd2l0aCBNdXRhdGlvbk9ic2VydmVyLCBleGNlcHQgaU9TIFNhZmFyaSAtIGh0dHBzOi8vZ2l0aHViLmNvbS96bG9pcm9jay9jb3JlLWpzL2lzc3Vlcy8zMzlcbiAgfSBlbHNlIGlmIChPYnNlcnZlciAmJiAhKGdsb2JhbC5uYXZpZ2F0b3IgJiYgZ2xvYmFsLm5hdmlnYXRvci5zdGFuZGFsb25lKSkge1xuICAgIHZhciB0b2dnbGUgPSB0cnVlO1xuICAgIHZhciBub2RlID0gZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoJycpO1xuICAgIG5ldyBPYnNlcnZlcihmbHVzaCkub2JzZXJ2ZShub2RlLCB7IGNoYXJhY3RlckRhdGE6IHRydWUgfSk7IC8vIGVzbGludC1kaXNhYmxlLWxpbmUgbm8tbmV3XG4gICAgbm90aWZ5ID0gZnVuY3Rpb24gKCkge1xuICAgICAgbm9kZS5kYXRhID0gdG9nZ2xlID0gIXRvZ2dsZTtcbiAgICB9O1xuICAvLyBlbnZpcm9ubWVudHMgd2l0aCBtYXliZSBub24tY29tcGxldGVseSBjb3JyZWN0LCBidXQgZXhpc3RlbnQgUHJvbWlzZVxuICB9IGVsc2UgaWYgKFByb21pc2UgJiYgUHJvbWlzZS5yZXNvbHZlKSB7XG4gICAgdmFyIHByb21pc2UgPSBQcm9taXNlLnJlc29sdmUoKTtcbiAgICBub3RpZnkgPSBmdW5jdGlvbiAoKSB7XG4gICAgICBwcm9taXNlLnRoZW4oZmx1c2gpO1xuICAgIH07XG4gIC8vIGZvciBvdGhlciBlbnZpcm9ubWVudHMgLSBtYWNyb3Rhc2sgYmFzZWQgb246XG4gIC8vIC0gc2V0SW1tZWRpYXRlXG4gIC8vIC0gTWVzc2FnZUNoYW5uZWxcbiAgLy8gLSB3aW5kb3cucG9zdE1lc3NhZ1xuICAvLyAtIG9ucmVhZHlzdGF0ZWNoYW5nZVxuICAvLyAtIHNldFRpbWVvdXRcbiAgfSBlbHNlIHtcbiAgICBub3RpZnkgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAvLyBzdHJhbmdlIElFICsgd2VicGFjayBkZXYgc2VydmVyIGJ1ZyAtIHVzZSAuY2FsbChnbG9iYWwpXG4gICAgICBtYWNyb3Rhc2suY2FsbChnbG9iYWwsIGZsdXNoKTtcbiAgICB9O1xuICB9XG5cbiAgcmV0dXJuIGZ1bmN0aW9uIChmbikge1xuICAgIHZhciB0YXNrID0geyBmbjogZm4sIG5leHQ6IHVuZGVmaW5lZCB9O1xuICAgIGlmIChsYXN0KSBsYXN0Lm5leHQgPSB0YXNrO1xuICAgIGlmICghaGVhZCkge1xuICAgICAgaGVhZCA9IHRhc2s7XG4gICAgICBub3RpZnkoKTtcbiAgICB9IGxhc3QgPSB0YXNrO1xuICB9O1xufTtcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vbm9kZV9tb2R1bGVzL19jb3JlLWpzQDIuNS4zQGNvcmUtanMvbGlicmFyeS9tb2R1bGVzL19taWNyb3Rhc2suanNcbi8vIG1vZHVsZSBpZCA9IDEwN1xuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCIvLyBodHRwczovL2dpdGh1Yi5jb20vdGMzOS9wcm9wb3NhbC1wcm9taXNlLWZpbmFsbHlcbid1c2Ugc3RyaWN0JztcbnZhciAkZXhwb3J0ID0gcmVxdWlyZSgnLi9fZXhwb3J0Jyk7XG52YXIgY29yZSA9IHJlcXVpcmUoJy4vX2NvcmUnKTtcbnZhciBnbG9iYWwgPSByZXF1aXJlKCcuL19nbG9iYWwnKTtcbnZhciBzcGVjaWVzQ29uc3RydWN0b3IgPSByZXF1aXJlKCcuL19zcGVjaWVzLWNvbnN0cnVjdG9yJyk7XG52YXIgcHJvbWlzZVJlc29sdmUgPSByZXF1aXJlKCcuL19wcm9taXNlLXJlc29sdmUnKTtcblxuJGV4cG9ydCgkZXhwb3J0LlAgKyAkZXhwb3J0LlIsICdQcm9taXNlJywgeyAnZmluYWxseSc6IGZ1bmN0aW9uIChvbkZpbmFsbHkpIHtcbiAgdmFyIEMgPSBzcGVjaWVzQ29uc3RydWN0b3IodGhpcywgY29yZS5Qcm9taXNlIHx8IGdsb2JhbC5Qcm9taXNlKTtcbiAgdmFyIGlzRnVuY3Rpb24gPSB0eXBlb2Ygb25GaW5hbGx5ID09ICdmdW5jdGlvbic7XG4gIHJldHVybiB0aGlzLnRoZW4oXG4gICAgaXNGdW5jdGlvbiA/IGZ1bmN0aW9uICh4KSB7XG4gICAgICByZXR1cm4gcHJvbWlzZVJlc29sdmUoQywgb25GaW5hbGx5KCkpLnRoZW4oZnVuY3Rpb24gKCkgeyByZXR1cm4geDsgfSk7XG4gICAgfSA6IG9uRmluYWxseSxcbiAgICBpc0Z1bmN0aW9uID8gZnVuY3Rpb24gKGUpIHtcbiAgICAgIHJldHVybiBwcm9taXNlUmVzb2x2ZShDLCBvbkZpbmFsbHkoKSkudGhlbihmdW5jdGlvbiAoKSB7IHRocm93IGU7IH0pO1xuICAgIH0gOiBvbkZpbmFsbHlcbiAgKTtcbn0gfSk7XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL25vZGVfbW9kdWxlcy9fY29yZS1qc0AyLjUuM0Bjb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9lczcucHJvbWlzZS5maW5hbGx5LmpzXG4vLyBtb2R1bGUgaWQgPSAxMDhcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiJ3VzZSBzdHJpY3QnO1xuLy8gaHR0cHM6Ly9naXRodWIuY29tL3RjMzkvcHJvcG9zYWwtcHJvbWlzZS10cnlcbnZhciAkZXhwb3J0ID0gcmVxdWlyZSgnLi9fZXhwb3J0Jyk7XG52YXIgbmV3UHJvbWlzZUNhcGFiaWxpdHkgPSByZXF1aXJlKCcuL19uZXctcHJvbWlzZS1jYXBhYmlsaXR5Jyk7XG52YXIgcGVyZm9ybSA9IHJlcXVpcmUoJy4vX3BlcmZvcm0nKTtcblxuJGV4cG9ydCgkZXhwb3J0LlMsICdQcm9taXNlJywgeyAndHJ5JzogZnVuY3Rpb24gKGNhbGxiYWNrZm4pIHtcbiAgdmFyIHByb21pc2VDYXBhYmlsaXR5ID0gbmV3UHJvbWlzZUNhcGFiaWxpdHkuZih0aGlzKTtcbiAgdmFyIHJlc3VsdCA9IHBlcmZvcm0oY2FsbGJhY2tmbik7XG4gIChyZXN1bHQuZSA/IHByb21pc2VDYXBhYmlsaXR5LnJlamVjdCA6IHByb21pc2VDYXBhYmlsaXR5LnJlc29sdmUpKHJlc3VsdC52KTtcbiAgcmV0dXJuIHByb21pc2VDYXBhYmlsaXR5LnByb21pc2U7XG59IH0pO1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9ub2RlX21vZHVsZXMvX2NvcmUtanNAMi41LjNAY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvZXM3LnByb21pc2UudHJ5LmpzXG4vLyBtb2R1bGUgaWQgPSAxMDlcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwibW9kdWxlLmV4cG9ydHMgPSB7IFwiZGVmYXVsdFwiOiByZXF1aXJlKFwiY29yZS1qcy9saWJyYXJ5L2ZuL2lzLWl0ZXJhYmxlXCIpLCBfX2VzTW9kdWxlOiB0cnVlIH07XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9ub2RlX21vZHVsZXMvX2JhYmVsLXJ1bnRpbWVANi4yNi4wQGJhYmVsLXJ1bnRpbWUvY29yZS1qcy9pcy1pdGVyYWJsZS5qc1xuLy8gbW9kdWxlIGlkID0gMTEwXG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsInJlcXVpcmUoJy4uL21vZHVsZXMvd2ViLmRvbS5pdGVyYWJsZScpO1xucmVxdWlyZSgnLi4vbW9kdWxlcy9lczYuc3RyaW5nLml0ZXJhdG9yJyk7XG5tb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoJy4uL21vZHVsZXMvY29yZS5pcy1pdGVyYWJsZScpO1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9ub2RlX21vZHVsZXMvX2NvcmUtanNAMi41LjNAY29yZS1qcy9saWJyYXJ5L2ZuL2lzLWl0ZXJhYmxlLmpzXG4vLyBtb2R1bGUgaWQgPSAxMTFcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwidmFyIGNsYXNzb2YgPSByZXF1aXJlKCcuL19jbGFzc29mJyk7XG52YXIgSVRFUkFUT1IgPSByZXF1aXJlKCcuL193a3MnKSgnaXRlcmF0b3InKTtcbnZhciBJdGVyYXRvcnMgPSByZXF1aXJlKCcuL19pdGVyYXRvcnMnKTtcbm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZSgnLi9fY29yZScpLmlzSXRlcmFibGUgPSBmdW5jdGlvbiAoaXQpIHtcbiAgdmFyIE8gPSBPYmplY3QoaXQpO1xuICByZXR1cm4gT1tJVEVSQVRPUl0gIT09IHVuZGVmaW5lZFxuICAgIHx8ICdAQGl0ZXJhdG9yJyBpbiBPXG4gICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLXByb3RvdHlwZS1idWlsdGluc1xuICAgIHx8IEl0ZXJhdG9ycy5oYXNPd25Qcm9wZXJ0eShjbGFzc29mKE8pKTtcbn07XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL25vZGVfbW9kdWxlcy9fY29yZS1qc0AyLjUuM0Bjb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9jb3JlLmlzLWl0ZXJhYmxlLmpzXG4vLyBtb2R1bGUgaWQgPSAxMTJcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwicmVxdWlyZSgnLi4vbW9kdWxlcy93ZWIuZG9tLml0ZXJhYmxlJyk7XG5yZXF1aXJlKCcuLi9tb2R1bGVzL2VzNi5zdHJpbmcuaXRlcmF0b3InKTtcbm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZSgnLi4vbW9kdWxlcy9jb3JlLmdldC1pdGVyYXRvcicpO1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9ub2RlX21vZHVsZXMvX2NvcmUtanNAMi41LjNAY29yZS1qcy9saWJyYXJ5L2ZuL2dldC1pdGVyYXRvci5qc1xuLy8gbW9kdWxlIGlkID0gMTEzXG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsInZhciBhbk9iamVjdCA9IHJlcXVpcmUoJy4vX2FuLW9iamVjdCcpO1xudmFyIGdldCA9IHJlcXVpcmUoJy4vY29yZS5nZXQtaXRlcmF0b3ItbWV0aG9kJyk7XG5tb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoJy4vX2NvcmUnKS5nZXRJdGVyYXRvciA9IGZ1bmN0aW9uIChpdCkge1xuICB2YXIgaXRlckZuID0gZ2V0KGl0KTtcbiAgaWYgKHR5cGVvZiBpdGVyRm4gIT0gJ2Z1bmN0aW9uJykgdGhyb3cgVHlwZUVycm9yKGl0ICsgJyBpcyBub3QgaXRlcmFibGUhJyk7XG4gIHJldHVybiBhbk9iamVjdChpdGVyRm4uY2FsbChpdCkpO1xufTtcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vbm9kZV9tb2R1bGVzL19jb3JlLWpzQDIuNS4zQGNvcmUtanMvbGlicmFyeS9tb2R1bGVzL2NvcmUuZ2V0LWl0ZXJhdG9yLmpzXG4vLyBtb2R1bGUgaWQgPSAxMTRcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbmV4cG9ydHMuX19lc01vZHVsZSA9IHRydWU7XG5cbnZhciBfcHJvbWlzZSA9IHJlcXVpcmUoXCIuLi9jb3JlLWpzL3Byb21pc2VcIik7XG5cbnZhciBfcHJvbWlzZTIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9wcm9taXNlKTtcblxuZnVuY3Rpb24gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChvYmopIHsgcmV0dXJuIG9iaiAmJiBvYmouX19lc01vZHVsZSA/IG9iaiA6IHsgZGVmYXVsdDogb2JqIH07IH1cblxuZXhwb3J0cy5kZWZhdWx0ID0gZnVuY3Rpb24gKGZuKSB7XG4gIHJldHVybiBmdW5jdGlvbiAoKSB7XG4gICAgdmFyIGdlbiA9IGZuLmFwcGx5KHRoaXMsIGFyZ3VtZW50cyk7XG4gICAgcmV0dXJuIG5ldyBfcHJvbWlzZTIuZGVmYXVsdChmdW5jdGlvbiAocmVzb2x2ZSwgcmVqZWN0KSB7XG4gICAgICBmdW5jdGlvbiBzdGVwKGtleSwgYXJnKSB7XG4gICAgICAgIHRyeSB7XG4gICAgICAgICAgdmFyIGluZm8gPSBnZW5ba2V5XShhcmcpO1xuICAgICAgICAgIHZhciB2YWx1ZSA9IGluZm8udmFsdWU7XG4gICAgICAgIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgICAgICAgcmVqZWN0KGVycm9yKTtcbiAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cblxuICAgICAgICBpZiAoaW5mby5kb25lKSB7XG4gICAgICAgICAgcmVzb2x2ZSh2YWx1ZSk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgcmV0dXJuIF9wcm9taXNlMi5kZWZhdWx0LnJlc29sdmUodmFsdWUpLnRoZW4oZnVuY3Rpb24gKHZhbHVlKSB7XG4gICAgICAgICAgICBzdGVwKFwibmV4dFwiLCB2YWx1ZSk7XG4gICAgICAgICAgfSwgZnVuY3Rpb24gKGVycikge1xuICAgICAgICAgICAgc3RlcChcInRocm93XCIsIGVycik7XG4gICAgICAgICAgfSk7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgcmV0dXJuIHN0ZXAoXCJuZXh0XCIpO1xuICAgIH0pO1xuICB9O1xufTtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL25vZGVfbW9kdWxlcy9fYmFiZWwtcnVudGltZUA2LjI2LjBAYmFiZWwtcnVudGltZS9oZWxwZXJzL2FzeW5jVG9HZW5lcmF0b3IuanNcbi8vIG1vZHVsZSBpZCA9IDExNVxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCIvLyByZW1vdmVkIGJ5IGV4dHJhY3QtdGV4dC13ZWJwYWNrLXBsdWdpblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vcHVibGljL2Nzcy9tYWluLmNzc1xuLy8gbW9kdWxlIGlkID0gMTE2XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIi8vIHJlbW92ZWQgYnkgZXh0cmFjdC10ZXh0LXdlYnBhY2stcGx1Z2luXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9wdWJsaWMvY3NzL2NvbnRyb2xsZXIuY3NzXG4vLyBtb2R1bGUgaWQgPSAxMTdcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiZXhwb3J0IGRlZmF1bHQgY2xhc3MgVGltZXIge1xyXG4gICAgY29uc3RydWN0b3IoZGVsdGFUaW1lID0gMS82MCkge1xyXG4gICAgICAgIGxldCBhY2N1bXVsYXRlZFRpbWUgPSAwO1xyXG4gICAgICAgIC8vIGxldCBsYXN0VGltZSA9IDA7XHJcbiAgICAgICAgbGV0IGxhc3RUaW1lID0gcGVyZm9ybWFuY2Uubm93KCk7XHJcblxyXG4gICAgICAgIHRoaXMudXBkYXRlUHJveHkgPSAgKHRpbWUpID0+IHtcclxuICAgICAgICAgICAgYWNjdW11bGF0ZWRUaW1lICs9ICh0aW1lIC0gbGFzdFRpbWUpIC8gMTAwMDtcclxuXHJcbiAgICAgICAgICAgIGlmIChhY2N1bXVsYXRlZFRpbWUgPiAxKSB7XHJcbiAgICAgICAgICAgICAgICAvKiBBIGhhY2sgdG8gU29sdmUgdGhlIHRpbWUgYWNjdW11bGF0ZVxyXG4gICAgICAgICAgICAgICAgKiB3aGVuIGl0IGlzIHJ1bm5pbmcgYmFja2dyb3VuZC5cclxuICAgICAgICAgICAgICAgICogU28gdGhhdCBvdXIgY29tcHV0ZXIgd29udCBiZSBzbG93IGRvd24gYnkgdGhpcyxcclxuICAgICAgICAgICAgICAgICogYWZ0ZXIgbG9uZyB0aW1lIG9mIHJ1bm5pbmcgdGhpcyBpbiBiYWNrZ3JvdW5kLiovXHJcbiAgICAgICAgICAgICAgICBhY2N1bXVsYXRlZFRpbWUgPSAxO1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAvLyBjb25zb2xlLmxvZyhhY2N1bXVsYXRlZFRpbWUsZGVsdGFUaW1lKVxyXG4gICAgICAgICAgICAvLyBUT0RPOkJVRyBUaGUgZmlyc3QgdGltZSB1cGRhdGUgdG9vIG1hbnkgdGltZXMgaWYgdGhlIGxhc3RUaW1lID0gMCAuXHJcbiAgICAgICAgICAgIHdoaWxlIChhY2N1bXVsYXRlZFRpbWUgPiBkZWx0YVRpbWUpIHtcclxuICAgICAgICAgICAgICAgIHRoaXMudXBkYXRlKGRlbHRhVGltZSk7XHJcblxyXG4gICAgICAgICAgICAgICAgYWNjdW11bGF0ZWRUaW1lIC09IGRlbHRhVGltZTtcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgbGFzdFRpbWUgPSB0aW1lO1xyXG5cclxuICAgICAgICAgICAgdGhpcy5lbnF1ZXVlKCk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIGVucXVldWUoKSB7XHJcbiAgICAgICAgcmVxdWVzdEFuaW1hdGlvbkZyYW1lKHRoaXMudXBkYXRlUHJveHkpO1xyXG4gICAgfVxyXG5cclxuICAgIHN0YXJ0KCkge1xyXG4gICAgICAgIHRoaXMuZW5xdWV1ZSgpO1xyXG4gICAgfVxyXG59XHJcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3B1YmxpYy9qcy9UaW1lci5qcyIsIm1vZHVsZS5leHBvcnRzID0geyBcImRlZmF1bHRcIjogcmVxdWlyZShcImNvcmUtanMvbGlicmFyeS9mbi9vYmplY3QvZGVmaW5lLXByb3BlcnR5XCIpLCBfX2VzTW9kdWxlOiB0cnVlIH07XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9ub2RlX21vZHVsZXMvX2JhYmVsLXJ1bnRpbWVANi4yNi4wQGJhYmVsLXJ1bnRpbWUvY29yZS1qcy9vYmplY3QvZGVmaW5lLXByb3BlcnR5LmpzXG4vLyBtb2R1bGUgaWQgPSAxMTlcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwicmVxdWlyZSgnLi4vLi4vbW9kdWxlcy9lczYub2JqZWN0LmRlZmluZS1wcm9wZXJ0eScpO1xudmFyICRPYmplY3QgPSByZXF1aXJlKCcuLi8uLi9tb2R1bGVzL19jb3JlJykuT2JqZWN0O1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiBkZWZpbmVQcm9wZXJ0eShpdCwga2V5LCBkZXNjKSB7XG4gIHJldHVybiAkT2JqZWN0LmRlZmluZVByb3BlcnR5KGl0LCBrZXksIGRlc2MpO1xufTtcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vbm9kZV9tb2R1bGVzL19jb3JlLWpzQDIuNS4zQGNvcmUtanMvbGlicmFyeS9mbi9vYmplY3QvZGVmaW5lLXByb3BlcnR5LmpzXG4vLyBtb2R1bGUgaWQgPSAxMjBcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwidmFyICRleHBvcnQgPSByZXF1aXJlKCcuL19leHBvcnQnKTtcbi8vIDE5LjEuMi40IC8gMTUuMi4zLjYgT2JqZWN0LmRlZmluZVByb3BlcnR5KE8sIFAsIEF0dHJpYnV0ZXMpXG4kZXhwb3J0KCRleHBvcnQuUyArICRleHBvcnQuRiAqICFyZXF1aXJlKCcuL19kZXNjcmlwdG9ycycpLCAnT2JqZWN0JywgeyBkZWZpbmVQcm9wZXJ0eTogcmVxdWlyZSgnLi9fb2JqZWN0LWRwJykuZiB9KTtcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vbm9kZV9tb2R1bGVzL19jb3JlLWpzQDIuNS4zQGNvcmUtanMvbGlicmFyeS9tb2R1bGVzL2VzNi5vYmplY3QuZGVmaW5lLXByb3BlcnR5LmpzXG4vLyBtb2R1bGUgaWQgPSAxMjFcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiaW1wb3J0IHtWZWMyfSBmcm9tICcuL21hdGguanMnO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgQ2FtZXJhIHtcclxuICAgIGNvbnN0cnVjdG9yKCkge1xyXG4gICAgICAgIHRoaXMucG9zID0gbmV3IFZlYzIoMCwwKTtcclxuICAgICAgICB0aGlzLnNpemUgPSBuZXcgVmVjMigyNTYsMjQwKTtcclxuICAgIH1cclxufVxyXG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9wdWJsaWMvanMvQ2FtZXJhLmpzIiwicmVxdWlyZSgnLi4vLi4vbW9kdWxlcy9lczYuc3ltYm9sJyk7XG5yZXF1aXJlKCcuLi8uLi9tb2R1bGVzL2VzNi5vYmplY3QudG8tc3RyaW5nJyk7XG5yZXF1aXJlKCcuLi8uLi9tb2R1bGVzL2VzNy5zeW1ib2wuYXN5bmMtaXRlcmF0b3InKTtcbnJlcXVpcmUoJy4uLy4uL21vZHVsZXMvZXM3LnN5bWJvbC5vYnNlcnZhYmxlJyk7XG5tb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoJy4uLy4uL21vZHVsZXMvX2NvcmUnKS5TeW1ib2w7XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL25vZGVfbW9kdWxlcy9fY29yZS1qc0AyLjUuM0Bjb3JlLWpzL2xpYnJhcnkvZm4vc3ltYm9sL2luZGV4LmpzXG4vLyBtb2R1bGUgaWQgPSAxMjNcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiJ3VzZSBzdHJpY3QnO1xuLy8gRUNNQVNjcmlwdCA2IHN5bWJvbHMgc2hpbVxudmFyIGdsb2JhbCA9IHJlcXVpcmUoJy4vX2dsb2JhbCcpO1xudmFyIGhhcyA9IHJlcXVpcmUoJy4vX2hhcycpO1xudmFyIERFU0NSSVBUT1JTID0gcmVxdWlyZSgnLi9fZGVzY3JpcHRvcnMnKTtcbnZhciAkZXhwb3J0ID0gcmVxdWlyZSgnLi9fZXhwb3J0Jyk7XG52YXIgcmVkZWZpbmUgPSByZXF1aXJlKCcuL19yZWRlZmluZScpO1xudmFyIE1FVEEgPSByZXF1aXJlKCcuL19tZXRhJykuS0VZO1xudmFyICRmYWlscyA9IHJlcXVpcmUoJy4vX2ZhaWxzJyk7XG52YXIgc2hhcmVkID0gcmVxdWlyZSgnLi9fc2hhcmVkJyk7XG52YXIgc2V0VG9TdHJpbmdUYWcgPSByZXF1aXJlKCcuL19zZXQtdG8tc3RyaW5nLXRhZycpO1xudmFyIHVpZCA9IHJlcXVpcmUoJy4vX3VpZCcpO1xudmFyIHdrcyA9IHJlcXVpcmUoJy4vX3drcycpO1xudmFyIHdrc0V4dCA9IHJlcXVpcmUoJy4vX3drcy1leHQnKTtcbnZhciB3a3NEZWZpbmUgPSByZXF1aXJlKCcuL193a3MtZGVmaW5lJyk7XG52YXIgZW51bUtleXMgPSByZXF1aXJlKCcuL19lbnVtLWtleXMnKTtcbnZhciBpc0FycmF5ID0gcmVxdWlyZSgnLi9faXMtYXJyYXknKTtcbnZhciBhbk9iamVjdCA9IHJlcXVpcmUoJy4vX2FuLW9iamVjdCcpO1xudmFyIGlzT2JqZWN0ID0gcmVxdWlyZSgnLi9faXMtb2JqZWN0Jyk7XG52YXIgdG9JT2JqZWN0ID0gcmVxdWlyZSgnLi9fdG8taW9iamVjdCcpO1xudmFyIHRvUHJpbWl0aXZlID0gcmVxdWlyZSgnLi9fdG8tcHJpbWl0aXZlJyk7XG52YXIgY3JlYXRlRGVzYyA9IHJlcXVpcmUoJy4vX3Byb3BlcnR5LWRlc2MnKTtcbnZhciBfY3JlYXRlID0gcmVxdWlyZSgnLi9fb2JqZWN0LWNyZWF0ZScpO1xudmFyIGdPUE5FeHQgPSByZXF1aXJlKCcuL19vYmplY3QtZ29wbi1leHQnKTtcbnZhciAkR09QRCA9IHJlcXVpcmUoJy4vX29iamVjdC1nb3BkJyk7XG52YXIgJERQID0gcmVxdWlyZSgnLi9fb2JqZWN0LWRwJyk7XG52YXIgJGtleXMgPSByZXF1aXJlKCcuL19vYmplY3Qta2V5cycpO1xudmFyIGdPUEQgPSAkR09QRC5mO1xudmFyIGRQID0gJERQLmY7XG52YXIgZ09QTiA9IGdPUE5FeHQuZjtcbnZhciAkU3ltYm9sID0gZ2xvYmFsLlN5bWJvbDtcbnZhciAkSlNPTiA9IGdsb2JhbC5KU09OO1xudmFyIF9zdHJpbmdpZnkgPSAkSlNPTiAmJiAkSlNPTi5zdHJpbmdpZnk7XG52YXIgUFJPVE9UWVBFID0gJ3Byb3RvdHlwZSc7XG52YXIgSElEREVOID0gd2tzKCdfaGlkZGVuJyk7XG52YXIgVE9fUFJJTUlUSVZFID0gd2tzKCd0b1ByaW1pdGl2ZScpO1xudmFyIGlzRW51bSA9IHt9LnByb3BlcnR5SXNFbnVtZXJhYmxlO1xudmFyIFN5bWJvbFJlZ2lzdHJ5ID0gc2hhcmVkKCdzeW1ib2wtcmVnaXN0cnknKTtcbnZhciBBbGxTeW1ib2xzID0gc2hhcmVkKCdzeW1ib2xzJyk7XG52YXIgT1BTeW1ib2xzID0gc2hhcmVkKCdvcC1zeW1ib2xzJyk7XG52YXIgT2JqZWN0UHJvdG8gPSBPYmplY3RbUFJPVE9UWVBFXTtcbnZhciBVU0VfTkFUSVZFID0gdHlwZW9mICRTeW1ib2wgPT0gJ2Z1bmN0aW9uJztcbnZhciBRT2JqZWN0ID0gZ2xvYmFsLlFPYmplY3Q7XG4vLyBEb24ndCB1c2Ugc2V0dGVycyBpbiBRdCBTY3JpcHQsIGh0dHBzOi8vZ2l0aHViLmNvbS96bG9pcm9jay9jb3JlLWpzL2lzc3Vlcy8xNzNcbnZhciBzZXR0ZXIgPSAhUU9iamVjdCB8fCAhUU9iamVjdFtQUk9UT1RZUEVdIHx8ICFRT2JqZWN0W1BST1RPVFlQRV0uZmluZENoaWxkO1xuXG4vLyBmYWxsYmFjayBmb3Igb2xkIEFuZHJvaWQsIGh0dHBzOi8vY29kZS5nb29nbGUuY29tL3AvdjgvaXNzdWVzL2RldGFpbD9pZD02ODdcbnZhciBzZXRTeW1ib2xEZXNjID0gREVTQ1JJUFRPUlMgJiYgJGZhaWxzKGZ1bmN0aW9uICgpIHtcbiAgcmV0dXJuIF9jcmVhdGUoZFAoe30sICdhJywge1xuICAgIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gZFAodGhpcywgJ2EnLCB7IHZhbHVlOiA3IH0pLmE7IH1cbiAgfSkpLmEgIT0gNztcbn0pID8gZnVuY3Rpb24gKGl0LCBrZXksIEQpIHtcbiAgdmFyIHByb3RvRGVzYyA9IGdPUEQoT2JqZWN0UHJvdG8sIGtleSk7XG4gIGlmIChwcm90b0Rlc2MpIGRlbGV0ZSBPYmplY3RQcm90b1trZXldO1xuICBkUChpdCwga2V5LCBEKTtcbiAgaWYgKHByb3RvRGVzYyAmJiBpdCAhPT0gT2JqZWN0UHJvdG8pIGRQKE9iamVjdFByb3RvLCBrZXksIHByb3RvRGVzYyk7XG59IDogZFA7XG5cbnZhciB3cmFwID0gZnVuY3Rpb24gKHRhZykge1xuICB2YXIgc3ltID0gQWxsU3ltYm9sc1t0YWddID0gX2NyZWF0ZSgkU3ltYm9sW1BST1RPVFlQRV0pO1xuICBzeW0uX2sgPSB0YWc7XG4gIHJldHVybiBzeW07XG59O1xuXG52YXIgaXNTeW1ib2wgPSBVU0VfTkFUSVZFICYmIHR5cGVvZiAkU3ltYm9sLml0ZXJhdG9yID09ICdzeW1ib2wnID8gZnVuY3Rpb24gKGl0KSB7XG4gIHJldHVybiB0eXBlb2YgaXQgPT0gJ3N5bWJvbCc7XG59IDogZnVuY3Rpb24gKGl0KSB7XG4gIHJldHVybiBpdCBpbnN0YW5jZW9mICRTeW1ib2w7XG59O1xuXG52YXIgJGRlZmluZVByb3BlcnR5ID0gZnVuY3Rpb24gZGVmaW5lUHJvcGVydHkoaXQsIGtleSwgRCkge1xuICBpZiAoaXQgPT09IE9iamVjdFByb3RvKSAkZGVmaW5lUHJvcGVydHkoT1BTeW1ib2xzLCBrZXksIEQpO1xuICBhbk9iamVjdChpdCk7XG4gIGtleSA9IHRvUHJpbWl0aXZlKGtleSwgdHJ1ZSk7XG4gIGFuT2JqZWN0KEQpO1xuICBpZiAoaGFzKEFsbFN5bWJvbHMsIGtleSkpIHtcbiAgICBpZiAoIUQuZW51bWVyYWJsZSkge1xuICAgICAgaWYgKCFoYXMoaXQsIEhJRERFTikpIGRQKGl0LCBISURERU4sIGNyZWF0ZURlc2MoMSwge30pKTtcbiAgICAgIGl0W0hJRERFTl1ba2V5XSA9IHRydWU7XG4gICAgfSBlbHNlIHtcbiAgICAgIGlmIChoYXMoaXQsIEhJRERFTikgJiYgaXRbSElEREVOXVtrZXldKSBpdFtISURERU5dW2tleV0gPSBmYWxzZTtcbiAgICAgIEQgPSBfY3JlYXRlKEQsIHsgZW51bWVyYWJsZTogY3JlYXRlRGVzYygwLCBmYWxzZSkgfSk7XG4gICAgfSByZXR1cm4gc2V0U3ltYm9sRGVzYyhpdCwga2V5LCBEKTtcbiAgfSByZXR1cm4gZFAoaXQsIGtleSwgRCk7XG59O1xudmFyICRkZWZpbmVQcm9wZXJ0aWVzID0gZnVuY3Rpb24gZGVmaW5lUHJvcGVydGllcyhpdCwgUCkge1xuICBhbk9iamVjdChpdCk7XG4gIHZhciBrZXlzID0gZW51bUtleXMoUCA9IHRvSU9iamVjdChQKSk7XG4gIHZhciBpID0gMDtcbiAgdmFyIGwgPSBrZXlzLmxlbmd0aDtcbiAgdmFyIGtleTtcbiAgd2hpbGUgKGwgPiBpKSAkZGVmaW5lUHJvcGVydHkoaXQsIGtleSA9IGtleXNbaSsrXSwgUFtrZXldKTtcbiAgcmV0dXJuIGl0O1xufTtcbnZhciAkY3JlYXRlID0gZnVuY3Rpb24gY3JlYXRlKGl0LCBQKSB7XG4gIHJldHVybiBQID09PSB1bmRlZmluZWQgPyBfY3JlYXRlKGl0KSA6ICRkZWZpbmVQcm9wZXJ0aWVzKF9jcmVhdGUoaXQpLCBQKTtcbn07XG52YXIgJHByb3BlcnR5SXNFbnVtZXJhYmxlID0gZnVuY3Rpb24gcHJvcGVydHlJc0VudW1lcmFibGUoa2V5KSB7XG4gIHZhciBFID0gaXNFbnVtLmNhbGwodGhpcywga2V5ID0gdG9QcmltaXRpdmUoa2V5LCB0cnVlKSk7XG4gIGlmICh0aGlzID09PSBPYmplY3RQcm90byAmJiBoYXMoQWxsU3ltYm9scywga2V5KSAmJiAhaGFzKE9QU3ltYm9scywga2V5KSkgcmV0dXJuIGZhbHNlO1xuICByZXR1cm4gRSB8fCAhaGFzKHRoaXMsIGtleSkgfHwgIWhhcyhBbGxTeW1ib2xzLCBrZXkpIHx8IGhhcyh0aGlzLCBISURERU4pICYmIHRoaXNbSElEREVOXVtrZXldID8gRSA6IHRydWU7XG59O1xudmFyICRnZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3IgPSBmdW5jdGlvbiBnZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3IoaXQsIGtleSkge1xuICBpdCA9IHRvSU9iamVjdChpdCk7XG4gIGtleSA9IHRvUHJpbWl0aXZlKGtleSwgdHJ1ZSk7XG4gIGlmIChpdCA9PT0gT2JqZWN0UHJvdG8gJiYgaGFzKEFsbFN5bWJvbHMsIGtleSkgJiYgIWhhcyhPUFN5bWJvbHMsIGtleSkpIHJldHVybjtcbiAgdmFyIEQgPSBnT1BEKGl0LCBrZXkpO1xuICBpZiAoRCAmJiBoYXMoQWxsU3ltYm9scywga2V5KSAmJiAhKGhhcyhpdCwgSElEREVOKSAmJiBpdFtISURERU5dW2tleV0pKSBELmVudW1lcmFibGUgPSB0cnVlO1xuICByZXR1cm4gRDtcbn07XG52YXIgJGdldE93blByb3BlcnR5TmFtZXMgPSBmdW5jdGlvbiBnZXRPd25Qcm9wZXJ0eU5hbWVzKGl0KSB7XG4gIHZhciBuYW1lcyA9IGdPUE4odG9JT2JqZWN0KGl0KSk7XG4gIHZhciByZXN1bHQgPSBbXTtcbiAgdmFyIGkgPSAwO1xuICB2YXIga2V5O1xuICB3aGlsZSAobmFtZXMubGVuZ3RoID4gaSkge1xuICAgIGlmICghaGFzKEFsbFN5bWJvbHMsIGtleSA9IG5hbWVzW2krK10pICYmIGtleSAhPSBISURERU4gJiYga2V5ICE9IE1FVEEpIHJlc3VsdC5wdXNoKGtleSk7XG4gIH0gcmV0dXJuIHJlc3VsdDtcbn07XG52YXIgJGdldE93blByb3BlcnR5U3ltYm9scyA9IGZ1bmN0aW9uIGdldE93blByb3BlcnR5U3ltYm9scyhpdCkge1xuICB2YXIgSVNfT1AgPSBpdCA9PT0gT2JqZWN0UHJvdG87XG4gIHZhciBuYW1lcyA9IGdPUE4oSVNfT1AgPyBPUFN5bWJvbHMgOiB0b0lPYmplY3QoaXQpKTtcbiAgdmFyIHJlc3VsdCA9IFtdO1xuICB2YXIgaSA9IDA7XG4gIHZhciBrZXk7XG4gIHdoaWxlIChuYW1lcy5sZW5ndGggPiBpKSB7XG4gICAgaWYgKGhhcyhBbGxTeW1ib2xzLCBrZXkgPSBuYW1lc1tpKytdKSAmJiAoSVNfT1AgPyBoYXMoT2JqZWN0UHJvdG8sIGtleSkgOiB0cnVlKSkgcmVzdWx0LnB1c2goQWxsU3ltYm9sc1trZXldKTtcbiAgfSByZXR1cm4gcmVzdWx0O1xufTtcblxuLy8gMTkuNC4xLjEgU3ltYm9sKFtkZXNjcmlwdGlvbl0pXG5pZiAoIVVTRV9OQVRJVkUpIHtcbiAgJFN5bWJvbCA9IGZ1bmN0aW9uIFN5bWJvbCgpIHtcbiAgICBpZiAodGhpcyBpbnN0YW5jZW9mICRTeW1ib2wpIHRocm93IFR5cGVFcnJvcignU3ltYm9sIGlzIG5vdCBhIGNvbnN0cnVjdG9yIScpO1xuICAgIHZhciB0YWcgPSB1aWQoYXJndW1lbnRzLmxlbmd0aCA+IDAgPyBhcmd1bWVudHNbMF0gOiB1bmRlZmluZWQpO1xuICAgIHZhciAkc2V0ID0gZnVuY3Rpb24gKHZhbHVlKSB7XG4gICAgICBpZiAodGhpcyA9PT0gT2JqZWN0UHJvdG8pICRzZXQuY2FsbChPUFN5bWJvbHMsIHZhbHVlKTtcbiAgICAgIGlmIChoYXModGhpcywgSElEREVOKSAmJiBoYXModGhpc1tISURERU5dLCB0YWcpKSB0aGlzW0hJRERFTl1bdGFnXSA9IGZhbHNlO1xuICAgICAgc2V0U3ltYm9sRGVzYyh0aGlzLCB0YWcsIGNyZWF0ZURlc2MoMSwgdmFsdWUpKTtcbiAgICB9O1xuICAgIGlmIChERVNDUklQVE9SUyAmJiBzZXR0ZXIpIHNldFN5bWJvbERlc2MoT2JqZWN0UHJvdG8sIHRhZywgeyBjb25maWd1cmFibGU6IHRydWUsIHNldDogJHNldCB9KTtcbiAgICByZXR1cm4gd3JhcCh0YWcpO1xuICB9O1xuICByZWRlZmluZSgkU3ltYm9sW1BST1RPVFlQRV0sICd0b1N0cmluZycsIGZ1bmN0aW9uIHRvU3RyaW5nKCkge1xuICAgIHJldHVybiB0aGlzLl9rO1xuICB9KTtcblxuICAkR09QRC5mID0gJGdldE93blByb3BlcnR5RGVzY3JpcHRvcjtcbiAgJERQLmYgPSAkZGVmaW5lUHJvcGVydHk7XG4gIHJlcXVpcmUoJy4vX29iamVjdC1nb3BuJykuZiA9IGdPUE5FeHQuZiA9ICRnZXRPd25Qcm9wZXJ0eU5hbWVzO1xuICByZXF1aXJlKCcuL19vYmplY3QtcGllJykuZiA9ICRwcm9wZXJ0eUlzRW51bWVyYWJsZTtcbiAgcmVxdWlyZSgnLi9fb2JqZWN0LWdvcHMnKS5mID0gJGdldE93blByb3BlcnR5U3ltYm9scztcblxuICBpZiAoREVTQ1JJUFRPUlMgJiYgIXJlcXVpcmUoJy4vX2xpYnJhcnknKSkge1xuICAgIHJlZGVmaW5lKE9iamVjdFByb3RvLCAncHJvcGVydHlJc0VudW1lcmFibGUnLCAkcHJvcGVydHlJc0VudW1lcmFibGUsIHRydWUpO1xuICB9XG5cbiAgd2tzRXh0LmYgPSBmdW5jdGlvbiAobmFtZSkge1xuICAgIHJldHVybiB3cmFwKHdrcyhuYW1lKSk7XG4gIH07XG59XG5cbiRleHBvcnQoJGV4cG9ydC5HICsgJGV4cG9ydC5XICsgJGV4cG9ydC5GICogIVVTRV9OQVRJVkUsIHsgU3ltYm9sOiAkU3ltYm9sIH0pO1xuXG5mb3IgKHZhciBlczZTeW1ib2xzID0gKFxuICAvLyAxOS40LjIuMiwgMTkuNC4yLjMsIDE5LjQuMi40LCAxOS40LjIuNiwgMTkuNC4yLjgsIDE5LjQuMi45LCAxOS40LjIuMTAsIDE5LjQuMi4xMSwgMTkuNC4yLjEyLCAxOS40LjIuMTMsIDE5LjQuMi4xNFxuICAnaGFzSW5zdGFuY2UsaXNDb25jYXRTcHJlYWRhYmxlLGl0ZXJhdG9yLG1hdGNoLHJlcGxhY2Usc2VhcmNoLHNwZWNpZXMsc3BsaXQsdG9QcmltaXRpdmUsdG9TdHJpbmdUYWcsdW5zY29wYWJsZXMnXG4pLnNwbGl0KCcsJyksIGogPSAwOyBlczZTeW1ib2xzLmxlbmd0aCA+IGo7KXdrcyhlczZTeW1ib2xzW2orK10pO1xuXG5mb3IgKHZhciB3ZWxsS25vd25TeW1ib2xzID0gJGtleXMod2tzLnN0b3JlKSwgayA9IDA7IHdlbGxLbm93blN5bWJvbHMubGVuZ3RoID4gazspIHdrc0RlZmluZSh3ZWxsS25vd25TeW1ib2xzW2srK10pO1xuXG4kZXhwb3J0KCRleHBvcnQuUyArICRleHBvcnQuRiAqICFVU0VfTkFUSVZFLCAnU3ltYm9sJywge1xuICAvLyAxOS40LjIuMSBTeW1ib2wuZm9yKGtleSlcbiAgJ2Zvcic6IGZ1bmN0aW9uIChrZXkpIHtcbiAgICByZXR1cm4gaGFzKFN5bWJvbFJlZ2lzdHJ5LCBrZXkgKz0gJycpXG4gICAgICA/IFN5bWJvbFJlZ2lzdHJ5W2tleV1cbiAgICAgIDogU3ltYm9sUmVnaXN0cnlba2V5XSA9ICRTeW1ib2woa2V5KTtcbiAgfSxcbiAgLy8gMTkuNC4yLjUgU3ltYm9sLmtleUZvcihzeW0pXG4gIGtleUZvcjogZnVuY3Rpb24ga2V5Rm9yKHN5bSkge1xuICAgIGlmICghaXNTeW1ib2woc3ltKSkgdGhyb3cgVHlwZUVycm9yKHN5bSArICcgaXMgbm90IGEgc3ltYm9sIScpO1xuICAgIGZvciAodmFyIGtleSBpbiBTeW1ib2xSZWdpc3RyeSkgaWYgKFN5bWJvbFJlZ2lzdHJ5W2tleV0gPT09IHN5bSkgcmV0dXJuIGtleTtcbiAgfSxcbiAgdXNlU2V0dGVyOiBmdW5jdGlvbiAoKSB7IHNldHRlciA9IHRydWU7IH0sXG4gIHVzZVNpbXBsZTogZnVuY3Rpb24gKCkgeyBzZXR0ZXIgPSBmYWxzZTsgfVxufSk7XG5cbiRleHBvcnQoJGV4cG9ydC5TICsgJGV4cG9ydC5GICogIVVTRV9OQVRJVkUsICdPYmplY3QnLCB7XG4gIC8vIDE5LjEuMi4yIE9iamVjdC5jcmVhdGUoTyBbLCBQcm9wZXJ0aWVzXSlcbiAgY3JlYXRlOiAkY3JlYXRlLFxuICAvLyAxOS4xLjIuNCBPYmplY3QuZGVmaW5lUHJvcGVydHkoTywgUCwgQXR0cmlidXRlcylcbiAgZGVmaW5lUHJvcGVydHk6ICRkZWZpbmVQcm9wZXJ0eSxcbiAgLy8gMTkuMS4yLjMgT2JqZWN0LmRlZmluZVByb3BlcnRpZXMoTywgUHJvcGVydGllcylcbiAgZGVmaW5lUHJvcGVydGllczogJGRlZmluZVByb3BlcnRpZXMsXG4gIC8vIDE5LjEuMi42IE9iamVjdC5nZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3IoTywgUClcbiAgZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yOiAkZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yLFxuICAvLyAxOS4xLjIuNyBPYmplY3QuZ2V0T3duUHJvcGVydHlOYW1lcyhPKVxuICBnZXRPd25Qcm9wZXJ0eU5hbWVzOiAkZ2V0T3duUHJvcGVydHlOYW1lcyxcbiAgLy8gMTkuMS4yLjggT2JqZWN0LmdldE93blByb3BlcnR5U3ltYm9scyhPKVxuICBnZXRPd25Qcm9wZXJ0eVN5bWJvbHM6ICRnZXRPd25Qcm9wZXJ0eVN5bWJvbHNcbn0pO1xuXG4vLyAyNC4zLjIgSlNPTi5zdHJpbmdpZnkodmFsdWUgWywgcmVwbGFjZXIgWywgc3BhY2VdXSlcbiRKU09OICYmICRleHBvcnQoJGV4cG9ydC5TICsgJGV4cG9ydC5GICogKCFVU0VfTkFUSVZFIHx8ICRmYWlscyhmdW5jdGlvbiAoKSB7XG4gIHZhciBTID0gJFN5bWJvbCgpO1xuICAvLyBNUyBFZGdlIGNvbnZlcnRzIHN5bWJvbCB2YWx1ZXMgdG8gSlNPTiBhcyB7fVxuICAvLyBXZWJLaXQgY29udmVydHMgc3ltYm9sIHZhbHVlcyB0byBKU09OIGFzIG51bGxcbiAgLy8gVjggdGhyb3dzIG9uIGJveGVkIHN5bWJvbHNcbiAgcmV0dXJuIF9zdHJpbmdpZnkoW1NdKSAhPSAnW251bGxdJyB8fCBfc3RyaW5naWZ5KHsgYTogUyB9KSAhPSAne30nIHx8IF9zdHJpbmdpZnkoT2JqZWN0KFMpKSAhPSAne30nO1xufSkpLCAnSlNPTicsIHtcbiAgc3RyaW5naWZ5OiBmdW5jdGlvbiBzdHJpbmdpZnkoaXQpIHtcbiAgICB2YXIgYXJncyA9IFtpdF07XG4gICAgdmFyIGkgPSAxO1xuICAgIHZhciByZXBsYWNlciwgJHJlcGxhY2VyO1xuICAgIHdoaWxlIChhcmd1bWVudHMubGVuZ3RoID4gaSkgYXJncy5wdXNoKGFyZ3VtZW50c1tpKytdKTtcbiAgICAkcmVwbGFjZXIgPSByZXBsYWNlciA9IGFyZ3NbMV07XG4gICAgaWYgKCFpc09iamVjdChyZXBsYWNlcikgJiYgaXQgPT09IHVuZGVmaW5lZCB8fCBpc1N5bWJvbChpdCkpIHJldHVybjsgLy8gSUU4IHJldHVybnMgc3RyaW5nIG9uIHVuZGVmaW5lZFxuICAgIGlmICghaXNBcnJheShyZXBsYWNlcikpIHJlcGxhY2VyID0gZnVuY3Rpb24gKGtleSwgdmFsdWUpIHtcbiAgICAgIGlmICh0eXBlb2YgJHJlcGxhY2VyID09ICdmdW5jdGlvbicpIHZhbHVlID0gJHJlcGxhY2VyLmNhbGwodGhpcywga2V5LCB2YWx1ZSk7XG4gICAgICBpZiAoIWlzU3ltYm9sKHZhbHVlKSkgcmV0dXJuIHZhbHVlO1xuICAgIH07XG4gICAgYXJnc1sxXSA9IHJlcGxhY2VyO1xuICAgIHJldHVybiBfc3RyaW5naWZ5LmFwcGx5KCRKU09OLCBhcmdzKTtcbiAgfVxufSk7XG5cbi8vIDE5LjQuMy40IFN5bWJvbC5wcm90b3R5cGVbQEB0b1ByaW1pdGl2ZV0oaGludClcbiRTeW1ib2xbUFJPVE9UWVBFXVtUT19QUklNSVRJVkVdIHx8IHJlcXVpcmUoJy4vX2hpZGUnKSgkU3ltYm9sW1BST1RPVFlQRV0sIFRPX1BSSU1JVElWRSwgJFN5bWJvbFtQUk9UT1RZUEVdLnZhbHVlT2YpO1xuLy8gMTkuNC4zLjUgU3ltYm9sLnByb3RvdHlwZVtAQHRvU3RyaW5nVGFnXVxuc2V0VG9TdHJpbmdUYWcoJFN5bWJvbCwgJ1N5bWJvbCcpO1xuLy8gMjAuMi4xLjkgTWF0aFtAQHRvU3RyaW5nVGFnXVxuc2V0VG9TdHJpbmdUYWcoTWF0aCwgJ01hdGgnLCB0cnVlKTtcbi8vIDI0LjMuMyBKU09OW0BAdG9TdHJpbmdUYWddXG5zZXRUb1N0cmluZ1RhZyhnbG9iYWwuSlNPTiwgJ0pTT04nLCB0cnVlKTtcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vbm9kZV9tb2R1bGVzL19jb3JlLWpzQDIuNS4zQGNvcmUtanMvbGlicmFyeS9tb2R1bGVzL2VzNi5zeW1ib2wuanNcbi8vIG1vZHVsZSBpZCA9IDEyNFxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCIvLyBhbGwgZW51bWVyYWJsZSBvYmplY3Qga2V5cywgaW5jbHVkZXMgc3ltYm9sc1xudmFyIGdldEtleXMgPSByZXF1aXJlKCcuL19vYmplY3Qta2V5cycpO1xudmFyIGdPUFMgPSByZXF1aXJlKCcuL19vYmplY3QtZ29wcycpO1xudmFyIHBJRSA9IHJlcXVpcmUoJy4vX29iamVjdC1waWUnKTtcbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGl0KSB7XG4gIHZhciByZXN1bHQgPSBnZXRLZXlzKGl0KTtcbiAgdmFyIGdldFN5bWJvbHMgPSBnT1BTLmY7XG4gIGlmIChnZXRTeW1ib2xzKSB7XG4gICAgdmFyIHN5bWJvbHMgPSBnZXRTeW1ib2xzKGl0KTtcbiAgICB2YXIgaXNFbnVtID0gcElFLmY7XG4gICAgdmFyIGkgPSAwO1xuICAgIHZhciBrZXk7XG4gICAgd2hpbGUgKHN5bWJvbHMubGVuZ3RoID4gaSkgaWYgKGlzRW51bS5jYWxsKGl0LCBrZXkgPSBzeW1ib2xzW2krK10pKSByZXN1bHQucHVzaChrZXkpO1xuICB9IHJldHVybiByZXN1bHQ7XG59O1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9ub2RlX21vZHVsZXMvX2NvcmUtanNAMi41LjNAY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX2VudW0ta2V5cy5qc1xuLy8gbW9kdWxlIGlkID0gMTI1XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIi8vIGZhbGxiYWNrIGZvciBJRTExIGJ1Z2d5IE9iamVjdC5nZXRPd25Qcm9wZXJ0eU5hbWVzIHdpdGggaWZyYW1lIGFuZCB3aW5kb3dcbnZhciB0b0lPYmplY3QgPSByZXF1aXJlKCcuL190by1pb2JqZWN0Jyk7XG52YXIgZ09QTiA9IHJlcXVpcmUoJy4vX29iamVjdC1nb3BuJykuZjtcbnZhciB0b1N0cmluZyA9IHt9LnRvU3RyaW5nO1xuXG52YXIgd2luZG93TmFtZXMgPSB0eXBlb2Ygd2luZG93ID09ICdvYmplY3QnICYmIHdpbmRvdyAmJiBPYmplY3QuZ2V0T3duUHJvcGVydHlOYW1lc1xuICA/IE9iamVjdC5nZXRPd25Qcm9wZXJ0eU5hbWVzKHdpbmRvdykgOiBbXTtcblxudmFyIGdldFdpbmRvd05hbWVzID0gZnVuY3Rpb24gKGl0KSB7XG4gIHRyeSB7XG4gICAgcmV0dXJuIGdPUE4oaXQpO1xuICB9IGNhdGNoIChlKSB7XG4gICAgcmV0dXJuIHdpbmRvd05hbWVzLnNsaWNlKCk7XG4gIH1cbn07XG5cbm1vZHVsZS5leHBvcnRzLmYgPSBmdW5jdGlvbiBnZXRPd25Qcm9wZXJ0eU5hbWVzKGl0KSB7XG4gIHJldHVybiB3aW5kb3dOYW1lcyAmJiB0b1N0cmluZy5jYWxsKGl0KSA9PSAnW29iamVjdCBXaW5kb3ddJyA/IGdldFdpbmRvd05hbWVzKGl0KSA6IGdPUE4odG9JT2JqZWN0KGl0KSk7XG59O1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9ub2RlX21vZHVsZXMvX2NvcmUtanNAMi41LjNAY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX29iamVjdC1nb3BuLWV4dC5qc1xuLy8gbW9kdWxlIGlkID0gMTI2XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsInJlcXVpcmUoJy4vX3drcy1kZWZpbmUnKSgnYXN5bmNJdGVyYXRvcicpO1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9ub2RlX21vZHVsZXMvX2NvcmUtanNAMi41LjNAY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvZXM3LnN5bWJvbC5hc3luYy1pdGVyYXRvci5qc1xuLy8gbW9kdWxlIGlkID0gMTI3XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsInJlcXVpcmUoJy4vX3drcy1kZWZpbmUnKSgnb2JzZXJ2YWJsZScpO1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9ub2RlX21vZHVsZXMvX2NvcmUtanNAMi41LjNAY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvZXM3LnN5bWJvbC5vYnNlcnZhYmxlLmpzXG4vLyBtb2R1bGUgaWQgPSAxMjhcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiZXhwb3J0IGRlZmF1bHQgY2xhc3MgQm91bmRpbmdCb3gge1xyXG4gICAgY29uc3RydWN0b3IocG9zLCBzaXplLCBvZmZzZXQpIHtcclxuICAgICAgICB0aGlzLnBvcyA9IHBvcztcclxuICAgICAgICB0aGlzLnNpemUgPSBzaXplO1xyXG4gICAgICAgIHRoaXMub2Zmc2V0ID0gb2Zmc2V0O1xyXG4gICAgfVxyXG5cclxuICAgIG92ZXJsYXBzKGJveCkge1xyXG4gICAgICAgIHJldHVybiB0aGlzLmJvdHRvbSA+IGJveC50b3BcclxuICAgICAgICAgICAgICAgICAgICAgJiYgdGhpcy50b3AgPCBib3guYm90dG9tXHJcbiAgICAgICAgICAgICAgICAgICAgICYmIHRoaXMubGVmdCA8IGJveC5yaWdodFxyXG4gICAgICAgICAgICAgICAgICAgICAmJiB0aGlzLnJpZ2h0ID4gYm94LmxlZnRcclxuICAgIH1cclxuXHJcbiAgICBnZXQgYm90dG9tKCkge1xyXG4gICAgICAgIHJldHVybiB0aGlzLnBvcy55ICsgdGhpcy5zaXplLnkgKyB0aGlzLm9mZnNldC55O1xyXG4gICAgfVxyXG5cclxuICAgIHNldCBib3R0b20oeSkge1xyXG4gICAgICAgIHRoaXMucG9zLnkgPSB5IC0gKHRoaXMuc2l6ZS55ICsgdGhpcy5vZmZzZXQueSk7XHJcbiAgICB9XHJcblxyXG4gICAgZ2V0IHRvcCgpIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5wb3MueSArIHRoaXMub2Zmc2V0Lnk7XHJcbiAgICB9XHJcblxyXG4gICAgc2V0IHRvcCh5KSB7XHJcbiAgICAgICAgdGhpcy5wb3MueSA9IHkgLSB0aGlzLm9mZnNldC55O1xyXG4gICAgfVxyXG5cclxuICAgIGdldCBsZWZ0KCkge1xyXG4gICAgICAgIHJldHVybiB0aGlzLnBvcy54ICsgdGhpcy5vZmZzZXQueDtcclxuICAgIH1cclxuXHJcbiAgICBzZXQgbGVmdCh4KSB7XHJcbiAgICAgICAgdGhpcy5wb3MueCA9IHggLSB0aGlzLm9mZnNldC54O1xyXG4gICAgfVxyXG5cclxuICAgIGdldCByaWdodCgpIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5wb3MueCArIHRoaXMuc2l6ZS54ICsgdGhpcy5vZmZzZXQueDtcclxuICAgIH1cclxuXHJcbiAgICBzZXQgcmlnaHQoeCkge1xyXG4gICAgICAgIHRoaXMucG9zLnggPSB4IC0gKHRoaXMuc2l6ZS54ICsgdGhpcy5vZmZzZXQueCk7XHJcbiAgICB9XHJcbn1cclxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vcHVibGljL2pzL0JvdW5kaW5nQm94LmpzIiwiaW1wb3J0IHtUcmFpdH0gZnJvbSAnLi4vRW50aXR5LmpzJztcclxuaW1wb3J0IHtWZWMyfSBmcm9tICcuLi9tYXRoLmpzJztcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFBsYXllckNvbnRyb2xsZXIgZXh0ZW5kcyBUcmFpdCB7XHJcbiAgICBjb25zdHJ1Y3RvcigpIHtcclxuICAgICAgICBzdXBlcigncGxheWVyQ29udHJvbGxlcicpO1xyXG4gICAgICAgIHRoaXMucGxheWVyID0gbnVsbDtcclxuICAgICAgICB0aGlzLmNoZWNrUG9pbnQgPSBuZXcgVmVjMig2NCw2NCk7XHJcbiAgICAgICAgdGhpcy50aW1lID0gMzAwO1xyXG4gICAgICAgIHRoaXMuc2NvcmUgPSAwO1xyXG4gICAgfVxyXG5cclxuICAgIHNldFBsYXllcihlbnRpdHkpIHtcclxuICAgICAgICB0aGlzLnBsYXllciA9IGVudGl0eTtcclxuICAgICAgICB0aGlzLnBsYXllci5zdG9tZXIub25TdG9tcCA9ICgpID0+IHtcclxuICAgICAgICAgICAgdGhpcy5zY29yZSArPSAxMDA7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIHVwZGF0ZShlbnRpdHksIGRlbHRhVGltZSwgbGV2ZWwpIHtcclxuICAgICAgICBpZiAoIWxldmVsLmVudGl0aWVzLmhhcyh0aGlzLnBsYXllcikpIHtcclxuICAgICAgICAgICAgdGhpcy5wbGF5ZXIua2lsbGFibGUucmV2aXZlKCk7XHJcbiAgICAgICAgICAgIHRoaXMucGxheWVyLnBvcy5zZXQodGhpcy5jaGVja1BvaW50LnggLHRoaXMuY2hlY2tQb2ludC55KTtcclxuICAgICAgICAgICAgbGV2ZWwuZW50aXRpZXMuYWRkKHRoaXMucGxheWVyKTtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICB0aGlzLnRpbWUgLT0gZGVsdGFUaW1lICogMjtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbn1cclxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vcHVibGljL2pzL3RyYWl0cy9QbGF5ZXJDb250cm9sbGVyLmpzIiwicmVxdWlyZSgnLi4vLi4vbW9kdWxlcy9lczYub2JqZWN0LmdldC1wcm90b3R5cGUtb2YnKTtcbm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZSgnLi4vLi4vbW9kdWxlcy9fY29yZScpLk9iamVjdC5nZXRQcm90b3R5cGVPZjtcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vbm9kZV9tb2R1bGVzL19jb3JlLWpzQDIuNS4zQGNvcmUtanMvbGlicmFyeS9mbi9vYmplY3QvZ2V0LXByb3RvdHlwZS1vZi5qc1xuLy8gbW9kdWxlIGlkID0gMTMxXG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIi8vIDE5LjEuMi45IE9iamVjdC5nZXRQcm90b3R5cGVPZihPKVxudmFyIHRvT2JqZWN0ID0gcmVxdWlyZSgnLi9fdG8tb2JqZWN0Jyk7XG52YXIgJGdldFByb3RvdHlwZU9mID0gcmVxdWlyZSgnLi9fb2JqZWN0LWdwbycpO1xuXG5yZXF1aXJlKCcuL19vYmplY3Qtc2FwJykoJ2dldFByb3RvdHlwZU9mJywgZnVuY3Rpb24gKCkge1xuICByZXR1cm4gZnVuY3Rpb24gZ2V0UHJvdG90eXBlT2YoaXQpIHtcbiAgICByZXR1cm4gJGdldFByb3RvdHlwZU9mKHRvT2JqZWN0KGl0KSk7XG4gIH07XG59KTtcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vbm9kZV9tb2R1bGVzL19jb3JlLWpzQDIuNS4zQGNvcmUtanMvbGlicmFyeS9tb2R1bGVzL2VzNi5vYmplY3QuZ2V0LXByb3RvdHlwZS1vZi5qc1xuLy8gbW9kdWxlIGlkID0gMTMyXG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIi8vIG1vc3QgT2JqZWN0IG1ldGhvZHMgYnkgRVM2IHNob3VsZCBhY2NlcHQgcHJpbWl0aXZlc1xudmFyICRleHBvcnQgPSByZXF1aXJlKCcuL19leHBvcnQnKTtcbnZhciBjb3JlID0gcmVxdWlyZSgnLi9fY29yZScpO1xudmFyIGZhaWxzID0gcmVxdWlyZSgnLi9fZmFpbHMnKTtcbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKEtFWSwgZXhlYykge1xuICB2YXIgZm4gPSAoY29yZS5PYmplY3QgfHwge30pW0tFWV0gfHwgT2JqZWN0W0tFWV07XG4gIHZhciBleHAgPSB7fTtcbiAgZXhwW0tFWV0gPSBleGVjKGZuKTtcbiAgJGV4cG9ydCgkZXhwb3J0LlMgKyAkZXhwb3J0LkYgKiBmYWlscyhmdW5jdGlvbiAoKSB7IGZuKDEpOyB9KSwgJ09iamVjdCcsIGV4cCk7XG59O1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9ub2RlX21vZHVsZXMvX2NvcmUtanNAMi41LjNAY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX29iamVjdC1zYXAuanNcbi8vIG1vZHVsZSBpZCA9IDEzM1xuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJtb2R1bGUuZXhwb3J0cyA9IHsgXCJkZWZhdWx0XCI6IHJlcXVpcmUoXCJjb3JlLWpzL2xpYnJhcnkvZm4vc3ltYm9sL2l0ZXJhdG9yXCIpLCBfX2VzTW9kdWxlOiB0cnVlIH07XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9ub2RlX21vZHVsZXMvX2JhYmVsLXJ1bnRpbWVANi4yNi4wQGJhYmVsLXJ1bnRpbWUvY29yZS1qcy9zeW1ib2wvaXRlcmF0b3IuanNcbi8vIG1vZHVsZSBpZCA9IDEzNFxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJyZXF1aXJlKCcuLi8uLi9tb2R1bGVzL2VzNi5zdHJpbmcuaXRlcmF0b3InKTtcbnJlcXVpcmUoJy4uLy4uL21vZHVsZXMvd2ViLmRvbS5pdGVyYWJsZScpO1xubW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKCcuLi8uLi9tb2R1bGVzL193a3MtZXh0JykuZignaXRlcmF0b3InKTtcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vbm9kZV9tb2R1bGVzL19jb3JlLWpzQDIuNS4zQGNvcmUtanMvbGlicmFyeS9mbi9zeW1ib2wvaXRlcmF0b3IuanNcbi8vIG1vZHVsZSBpZCA9IDEzNVxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJtb2R1bGUuZXhwb3J0cyA9IHsgXCJkZWZhdWx0XCI6IHJlcXVpcmUoXCJjb3JlLWpzL2xpYnJhcnkvZm4vb2JqZWN0L3NldC1wcm90b3R5cGUtb2ZcIiksIF9fZXNNb2R1bGU6IHRydWUgfTtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL25vZGVfbW9kdWxlcy9fYmFiZWwtcnVudGltZUA2LjI2LjBAYmFiZWwtcnVudGltZS9jb3JlLWpzL29iamVjdC9zZXQtcHJvdG90eXBlLW9mLmpzXG4vLyBtb2R1bGUgaWQgPSAxMzZcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwicmVxdWlyZSgnLi4vLi4vbW9kdWxlcy9lczYub2JqZWN0LnNldC1wcm90b3R5cGUtb2YnKTtcbm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZSgnLi4vLi4vbW9kdWxlcy9fY29yZScpLk9iamVjdC5zZXRQcm90b3R5cGVPZjtcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vbm9kZV9tb2R1bGVzL19jb3JlLWpzQDIuNS4zQGNvcmUtanMvbGlicmFyeS9mbi9vYmplY3Qvc2V0LXByb3RvdHlwZS1vZi5qc1xuLy8gbW9kdWxlIGlkID0gMTM3XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIi8vIDE5LjEuMy4xOSBPYmplY3Quc2V0UHJvdG90eXBlT2YoTywgcHJvdG8pXG52YXIgJGV4cG9ydCA9IHJlcXVpcmUoJy4vX2V4cG9ydCcpO1xuJGV4cG9ydCgkZXhwb3J0LlMsICdPYmplY3QnLCB7IHNldFByb3RvdHlwZU9mOiByZXF1aXJlKCcuL19zZXQtcHJvdG8nKS5zZXQgfSk7XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL25vZGVfbW9kdWxlcy9fY29yZS1qc0AyLjUuM0Bjb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9lczYub2JqZWN0LnNldC1wcm90b3R5cGUtb2YuanNcbi8vIG1vZHVsZSBpZCA9IDEzOFxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCIvLyBXb3JrcyB3aXRoIF9fcHJvdG9fXyBvbmx5LiBPbGQgdjggY2FuJ3Qgd29yayB3aXRoIG51bGwgcHJvdG8gb2JqZWN0cy5cbi8qIGVzbGludC1kaXNhYmxlIG5vLXByb3RvICovXG52YXIgaXNPYmplY3QgPSByZXF1aXJlKCcuL19pcy1vYmplY3QnKTtcbnZhciBhbk9iamVjdCA9IHJlcXVpcmUoJy4vX2FuLW9iamVjdCcpO1xudmFyIGNoZWNrID0gZnVuY3Rpb24gKE8sIHByb3RvKSB7XG4gIGFuT2JqZWN0KE8pO1xuICBpZiAoIWlzT2JqZWN0KHByb3RvKSAmJiBwcm90byAhPT0gbnVsbCkgdGhyb3cgVHlwZUVycm9yKHByb3RvICsgXCI6IGNhbid0IHNldCBhcyBwcm90b3R5cGUhXCIpO1xufTtcbm1vZHVsZS5leHBvcnRzID0ge1xuICBzZXQ6IE9iamVjdC5zZXRQcm90b3R5cGVPZiB8fCAoJ19fcHJvdG9fXycgaW4ge30gPyAvLyBlc2xpbnQtZGlzYWJsZS1saW5lXG4gICAgZnVuY3Rpb24gKHRlc3QsIGJ1Z2d5LCBzZXQpIHtcbiAgICAgIHRyeSB7XG4gICAgICAgIHNldCA9IHJlcXVpcmUoJy4vX2N0eCcpKEZ1bmN0aW9uLmNhbGwsIHJlcXVpcmUoJy4vX29iamVjdC1nb3BkJykuZihPYmplY3QucHJvdG90eXBlLCAnX19wcm90b19fJykuc2V0LCAyKTtcbiAgICAgICAgc2V0KHRlc3QsIFtdKTtcbiAgICAgICAgYnVnZ3kgPSAhKHRlc3QgaW5zdGFuY2VvZiBBcnJheSk7XG4gICAgICB9IGNhdGNoIChlKSB7IGJ1Z2d5ID0gdHJ1ZTsgfVxuICAgICAgcmV0dXJuIGZ1bmN0aW9uIHNldFByb3RvdHlwZU9mKE8sIHByb3RvKSB7XG4gICAgICAgIGNoZWNrKE8sIHByb3RvKTtcbiAgICAgICAgaWYgKGJ1Z2d5KSBPLl9fcHJvdG9fXyA9IHByb3RvO1xuICAgICAgICBlbHNlIHNldChPLCBwcm90byk7XG4gICAgICAgIHJldHVybiBPO1xuICAgICAgfTtcbiAgICB9KHt9LCBmYWxzZSkgOiB1bmRlZmluZWQpLFxuICBjaGVjazogY2hlY2tcbn07XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL25vZGVfbW9kdWxlcy9fY29yZS1qc0AyLjUuM0Bjb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9fc2V0LXByb3RvLmpzXG4vLyBtb2R1bGUgaWQgPSAxMzlcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwibW9kdWxlLmV4cG9ydHMgPSB7IFwiZGVmYXVsdFwiOiByZXF1aXJlKFwiY29yZS1qcy9saWJyYXJ5L2ZuL29iamVjdC9jcmVhdGVcIiksIF9fZXNNb2R1bGU6IHRydWUgfTtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL25vZGVfbW9kdWxlcy9fYmFiZWwtcnVudGltZUA2LjI2LjBAYmFiZWwtcnVudGltZS9jb3JlLWpzL29iamVjdC9jcmVhdGUuanNcbi8vIG1vZHVsZSBpZCA9IDE0MFxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJyZXF1aXJlKCcuLi8uLi9tb2R1bGVzL2VzNi5vYmplY3QuY3JlYXRlJyk7XG52YXIgJE9iamVjdCA9IHJlcXVpcmUoJy4uLy4uL21vZHVsZXMvX2NvcmUnKS5PYmplY3Q7XG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIGNyZWF0ZShQLCBEKSB7XG4gIHJldHVybiAkT2JqZWN0LmNyZWF0ZShQLCBEKTtcbn07XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL25vZGVfbW9kdWxlcy9fY29yZS1qc0AyLjUuM0Bjb3JlLWpzL2xpYnJhcnkvZm4vb2JqZWN0L2NyZWF0ZS5qc1xuLy8gbW9kdWxlIGlkID0gMTQxXG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsInZhciAkZXhwb3J0ID0gcmVxdWlyZSgnLi9fZXhwb3J0Jyk7XG4vLyAxOS4xLjIuMiAvIDE1LjIuMy41IE9iamVjdC5jcmVhdGUoTyBbLCBQcm9wZXJ0aWVzXSlcbiRleHBvcnQoJGV4cG9ydC5TLCAnT2JqZWN0JywgeyBjcmVhdGU6IHJlcXVpcmUoJy4vX29iamVjdC1jcmVhdGUnKSB9KTtcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vbm9kZV9tb2R1bGVzL19jb3JlLWpzQDIuNS4zQGNvcmUtanMvbGlicmFyeS9tb2R1bGVzL2VzNi5vYmplY3QuY3JlYXRlLmpzXG4vLyBtb2R1bGUgaWQgPSAxNDJcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiaW1wb3J0IHtNYXRyaXh9IGZyb20gJy4uL21hdGguanMnXHJcbmltcG9ydCBMZXZlbCBmcm9tICcuLi9MZXZlbC5qcydcclxuaW1wb3J0IHtsb2FkSlNPTiwgbG9hZFNwcml0ZVNoZWV0fSBmcm9tICcuLi9sb2FkZXIuanMnXHJcbmltcG9ydCB7Y3JlYXRlU3ByaXRlTGF5ZXJ9IGZyb20gJy4uL2xheWVycy9zcHJpdGVzLmpzJ1xyXG5pbXBvcnQge2NyZWF0ZUJhY2tncm91bmRMYXllcn0gZnJvbSAnLi4vbGF5ZXJzL2JhY2tncm91bmQuanMnXHJcblxyXG5mdW5jdGlvbiBzZXR1cExldmVsKGxldmVsU3BlYywgbGV2ZWwpIHtcclxuICAgIGNvbnN0IG1lcmdlZENvbGxpc2lvbkdyaWQgPSBsZXZlbFNwZWMubGF5ZXJzLnJlZHVjZSgobWVyZ2VkVGlsZXMsIGxheWVyU3BlYykgPT4ge1xyXG4gICAgICAgIHJldHVybiBtZXJnZWRUaWxlcy5jb25jYXQobGF5ZXJTcGVjLnRpbGVzKTtcclxuICAgIH0sIFtdKTtcclxuXHJcbiAgICBjb25zdCBjb2xsaXNpb25HcmlkID0gY3JlYXRlQ29sbGlzaW9uR3JpZChtZXJnZWRDb2xsaXNpb25HcmlkLCBsZXZlbFNwZWMucGF0dGVybnMpO1xyXG4gICAgbGV2ZWwuc2V0Q29sbGlzaW9uR3JpZChjb2xsaXNpb25HcmlkKTtcclxufVxyXG5cclxuZnVuY3Rpb24gc2V0dXBCYWNrZ3JvdW5kKGxldmVsU3BlYywgbGV2ZWwsIGJhY2tncm91bmRTcHJpdGVzKSB7XHJcbiAgICBsZXZlbFNwZWMubGF5ZXJzLmZvckVhY2gobGF5ZXIgPT4ge1xyXG4gICAgICAgIGNvbnN0IGJhY2tncm91bmRHcmlkID0gY3JlYXRlQmFja2dyb3VuZEdyaWQobGF5ZXIudGlsZXMsIGxldmVsU3BlYy5wYXR0ZXJucyk7XHJcbiAgICAgICAgY29uc3QgYmFja2dyb3VuZExheWVyID0gY3JlYXRlQmFja2dyb3VuZExheWVyKGxldmVsLCBiYWNrZ3JvdW5kR3JpZCwgYmFja2dyb3VuZFNwcml0ZXMpO1xyXG4gICAgICAgIGxldmVsLmNvbXAubGF5ZXJzLnB1c2goYmFja2dyb3VuZExheWVyKTtcclxuICAgIH0pO1xyXG59XHJcblxyXG5mdW5jdGlvbiBzZXR1cEVudGl0aWVzKGxldmVsU3BlYywgbGV2ZWwsIGVudGl0eUZhY3RvcnkpIHtcclxuICAgIGxldmVsU3BlYy5lbnRpdGllcy5mb3JFYWNoKCh7bmFtZSwgcG9zOiBbeCx5XX0pID0+IHtcclxuICAgICAgICAvLyBjb25zb2xlLmxvZyhuYW1lLCB4LHkpO1xyXG4gICAgICAgIGNvbnN0IGNyZWF0ZUVudGl0eSA9IGVudGl0eUZhY3RvcnlbbmFtZV07XHJcbiAgICAgICAgY29uc3QgZW50aXR5ID0gY3JlYXRlRW50aXR5KCk7XHJcbiAgICAgICAgZW50aXR5LnBvcy5zZXQoeCwgeSk7XHJcbiAgICAgICAgbGV2ZWwuZW50aXRpZXMuYWRkKGVudGl0eSk7XHJcbiAgICB9KTtcclxuXHJcbiAgICBjb25zdCBzcHJpdGVMYXllciA9IGNyZWF0ZVNwcml0ZUxheWVyKGxldmVsLmVudGl0aWVzKTtcclxuICAgIGxldmVsLmNvbXAubGF5ZXJzLnB1c2goc3ByaXRlTGF5ZXIpO1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gY3JlYXRlTGV2ZWxMb2FkZXIoZW50aXR5RmFjdG9yeSkge1xyXG4gICAgcmV0dXJuIGZ1bmN0aW9uIGxvYWRMZXZlbChuYW1lKSB7XHJcbiAgICAgICAgcmV0dXJuIGxvYWRKU09OKGAuLi9sZXZlbHMvJHtuYW1lfS5qc29uYClcclxuICAgICAgICAgICAgLnRoZW4obGV2ZWxTcGVjID0+IFByb21pc2UuYWxsKFtcclxuICAgICAgICAgICAgICAgIGxldmVsU3BlYyxcclxuICAgICAgICAgICAgICAgIGxvYWRTcHJpdGVTaGVldChsZXZlbFNwZWMuc3ByaXRlU2hlZXQpXHJcbiAgICAgICAgICAgIF0pKVxyXG4gICAgICAgICAgICAudGhlbigoW2xldmVsU3BlYywgYmFja2dyb3VuZFNwcml0ZXNdKSA9PiB7XHJcbiAgICAgICAgICAgICAgICBjb25zdCBsZXZlbCA9IG5ldyBMZXZlbCgpO1xyXG5cclxuICAgICAgICAgICAgICAgIHNldHVwTGV2ZWwobGV2ZWxTcGVjLCBsZXZlbCk7XHJcbiAgICAgICAgICAgICAgICBzZXR1cEJhY2tncm91bmQobGV2ZWxTcGVjLCBsZXZlbCwgYmFja2dyb3VuZFNwcml0ZXMpO1xyXG4gICAgICAgICAgICAgICAgc2V0dXBFbnRpdGllcyhsZXZlbFNwZWMsIGxldmVsLCBlbnRpdHlGYWN0b3J5KTtcclxuXHJcbiAgICAgICAgICAgICAgICByZXR1cm4gbGV2ZWw7XHJcbiAgICAgICAgICAgIH0pXHJcbiAgICB9XHJcbn1cclxuXHJcbmZ1bmN0aW9uIGNyZWF0ZUNvbGxpc2lvbkdyaWQodGlsZXMsIHBhdHRlcm5zKSB7XHJcbiAgICBjb25zdCBncmlkID0gbmV3IE1hdHJpeCgpO1xyXG5cclxuICAgIGZvciAoY29uc3Qge3RpbGUsIHgsIHl9IG9mIGV4cGFuZFRpbGVzKHRpbGVzLCBwYXR0ZXJucykpIHtcclxuICAgICAgICBncmlkLnNldCh4LCB5LCB7dHlwZTogdGlsZS50eXBlfSlcclxuICAgIH1cclxuXHJcbiAgICByZXR1cm4gZ3JpZDtcclxufVxyXG5cclxuZnVuY3Rpb24gY3JlYXRlQmFja2dyb3VuZEdyaWQodGlsZXMsIHBhdHRlcm5zKSB7XHJcbiAgICBjb25zdCBncmlkID0gbmV3IE1hdHJpeCgpO1xyXG5cclxuICAgIGZvciAoY29uc3Qge3RpbGUsIHgsIHl9IG9mIGV4cGFuZFRpbGVzKHRpbGVzLCBwYXR0ZXJucykpIHtcclxuICAgICAgICBncmlkLnNldCh4LCB5LCB7bmFtZTogdGlsZS5uYW1lfSlcclxuICAgIH1cclxuXHJcbiAgICByZXR1cm4gZ3JpZDtcclxufVxyXG5cclxuLy8gRVM2IEdlbmVyYXRvciBGdW5jdGlvblxyXG5mdW5jdGlvbiogZXhwYW5kU3Bhbih4U3RhcnQsIHhMZW4sIHlTdGFydCwgeUxlbikge1xyXG4gICAgLy8gZGVidWdnZXJcclxuICAgIC8vIGNvbnN0IGNvb3JkcyA9IFtdO1xyXG4gICAgY29uc3QgeEVuZCA9IHhTdGFydCArIHhMZW47XHJcbiAgICBjb25zdCB5RW5kID0geVN0YXJ0ICsgeUxlbjtcclxuICAgIGZvciAobGV0IHggPSB4U3RhcnQ7IHggPCB4RW5kOyB4KyspIHtcclxuICAgICAgICBmb3IgKGxldCB5ID0geVN0YXJ0OyB5IDwgeUVuZDsgeSsrKSB7XHJcbiAgICAgICAgICAgIC8vIGNvb3Jkcy5wdXNoKHt4LCB5fSk7XHJcbiAgICAgICAgICAgIHlpZWxkIHt4LCB5fTtcclxuICAgICAgICAgICAgLy8gY3JlYXRlIGEgSXRlcmF0b3IgT2JqZWN0IGZvciB0aGUgZm9sbG93aW5nIGZvci4uLm9mXHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIC8vIHJldHVybiBjb29yZHM7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIGV4cGFuZFJhbmdlKHJhbmdlKSB7XHJcbiAgICBpZiAocmFuZ2UubGVuZ3RoID09PSA0KSB7XHJcbiAgICAgICAgY29uc3QgW3hTdGFydCwgeExlbiwgeVN0YXJ0LCB5TGVuXSA9IHJhbmdlO1xyXG4gICAgICAgIHJldHVybiBleHBhbmRTcGFuKHhTdGFydCwgeExlbiwgeVN0YXJ0LCB5TGVuKVxyXG4gICAgfSBlbHNlIGlmIChyYW5nZS5sZW5ndGggPT09IDMpIHtcclxuICAgICAgICBjb25zdCBbeFN0YXJ0LCB4TGVuLCB5U3RhcnRdID0gcmFuZ2U7XHJcbiAgICAgICAgcmV0dXJuIGV4cGFuZFNwYW4oeFN0YXJ0LCB4TGVuLCB5U3RhcnQsIDEpXHJcbiAgICB9IGVsc2UgaWYgKHJhbmdlLmxlbmd0aCA9PT0gMikge1xyXG4gICAgICAgIGNvbnN0IFt4U3RhcnQsIHlTdGFydF0gPSByYW5nZTtcclxuICAgICAgICByZXR1cm4gZXhwYW5kU3Bhbih4U3RhcnQsIDEsIHlTdGFydCwgMSlcclxuICAgIH1cclxufVxyXG5cclxuZnVuY3Rpb24qIGV4cGFuZFJhbmdlcyhyYW5nZXMpIHtcclxuICAgIGZvciAoY29uc3QgcmFuZ2Ugb2YgcmFuZ2VzKSB7XHJcbiAgICAgICAgeWllbGQqIGV4cGFuZFJhbmdlKHJhbmdlKTtcclxuICAgIH1cclxufVxyXG5cclxuZnVuY3Rpb24qIGV4cGFuZFRpbGVzKHRpbGVzLCBwYXR0ZXJucykge1xyXG4gICAgLy8gbGV0IGV4cGFuZGVkVGlsZXMgPSBbXTtcclxuXHJcbiAgICBmdW5jdGlvbiogd2Fsa1RpbGVzKHRpbGVzLCBvZmZzZXRYLCBvZmZzZXRZKSB7XHJcbiAgICAgICAgZm9yIChjb25zdCB0aWxlIG9mIHRpbGVzKSB7XHJcbiAgICAgICAgICAgIGZvciAoY29uc3Qge3gsIHl9IG9mIGV4cGFuZFJhbmdlcyh0aWxlLnJhbmdlcykpIHtcclxuICAgICAgICAgICAgICAgIC8qIGh0dHA6Ly9lczYucnVhbnlpZmVuZy5jb20vP3NlYXJjaD15aWVsZCZ4PTAmeT0wI2RvY3MvZ2VuZXJhdG9yI2Zvci0tLW9mLSVFNSVCRSVBQSVFNyU4RSVBRlxyXG4gICAgICAgICAgICAgICAgIFVzZSBmb3IuLi5vZiB0byBpdGVyYXRlIHRoZSBJdGVyYXRvciBPYmplY3QgZ2VuZXJhdGVkIGJ5IHRoZSB5aWVsZCBvZiBHZW5lcmF0b3IgRnVuY3Rpb24uKi9cclxuICAgICAgICAgICAgICAgIGNvbnN0IGRlcml2ZWRYID0geCArIG9mZnNldFg7XHJcbiAgICAgICAgICAgICAgICBjb25zdCBkZXJpdmVkWSA9IHkgKyBvZmZzZXRZO1xyXG5cclxuICAgICAgICAgICAgICAgIC8vIGRlYnVnZ2VyXHJcbiAgICAgICAgICAgICAgICBpZiAodGlsZS5wYXR0ZXJuKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgLy8gY29uc29sZS5sb2cocGF0dGVybnNbdGlsZS5wYXR0ZXJuXSk7XHJcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgdGlsZXMgPSBwYXR0ZXJuc1t0aWxlLnBhdHRlcm5dLnRpbGVzO1xyXG4gICAgICAgICAgICAgICAgICAgIC8vIGNyZWF0ZVRpbGVzKGxldmVsLCB0aWxlcywgcGF0dGVybnMsIGRlcml2ZWRYLCBkZXJpdmVkWSk7XHJcbiAgICAgICAgICAgICAgICAgICAgLypUT0RPOkZpZ3VyZSBvdXQgdGggdXNlYWdlIG9mIHlpZWxkKiovXHJcbiAgICAgICAgICAgICAgICAgICAgeWllbGQqIHdhbGtUaWxlcyh0aWxlcywgZGVyaXZlZFgsIGRlcml2ZWRZKTtcclxuICAgICAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgeWllbGQge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB0aWxlLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICB4OiBkZXJpdmVkWCxcclxuICAgICAgICAgICAgICAgICAgICAgICAgeTogZGVyaXZlZFlcclxuICAgICAgICAgICAgICAgICAgICB9O1xyXG4gICAgICAgICAgICAgICAgICAgIC8vIGV4cGFuZGVkVGlsZXMucHVzaCh7XHJcbiAgICAgICAgICAgICAgICAgICAgLy8gICAgIHRpbGUsXHJcbiAgICAgICAgICAgICAgICAgICAgLy8gICAgIHg6IGRlcml2ZWRYLFxyXG4gICAgICAgICAgICAgICAgICAgIC8vICAgICB5OiBkZXJpdmVkWVxyXG4gICAgICAgICAgICAgICAgICAgIC8vIH0pO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIHlpZWxkKiB3YWxrVGlsZXModGlsZXMsIDAsIDApO1xyXG5cclxuICAgIC8vIHJldHVybiBleHBhbmRlZFRpbGVzO1xyXG59XHJcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3B1YmxpYy9qcy9sb2FkZXJzL2xldmVsLmpzIiwiaW1wb3J0IENvbXBvc2l0b3IgZnJvbSAnLi9jb21wb3NpdG9yLmpzJ1xyXG5pbXBvcnQgRW50aXR5Q29sbGlkZXIgZnJvbSAnLi9FbnRpdHlDb2xsaWRlci5qcydcclxuaW1wb3J0IFRpbGVDb2xsaWRlciBmcm9tICcuL1RpbGVDb2xsaWRlci5qcydcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIExldmVsIHtcclxuICAgIGNvbnN0cnVjdG9yKCkge1xyXG4gICAgICAgIHRoaXMuZ3Jhdml0eSA9IDE1MDA7XHJcbiAgICAgICAgdGhpcy5jb21wID0gbmV3IENvbXBvc2l0b3IoKTtcclxuICAgICAgICB0aGlzLmVudGl0aWVzID0gbmV3IFNldCgpO1xyXG4gICAgICAgIHRoaXMuZW50aXR5Q29sbGlkZXIgPSBuZXcgRW50aXR5Q29sbGlkZXIodGhpcy5lbnRpdGllcyk7XHJcbiAgICAgICAgdGhpcy50b3RhbFRpbWUgPSAwO1xyXG5cclxuICAgICAgICB0aGlzLnRpbGVDb2xsaWRlciA9IG51bGw7XHJcbiAgICB9XHJcblxyXG4gICAgc2V0Q29sbGlzaW9uR3JpZChtYXRyaXgpIHtcclxuICAgICAgICB0aGlzLnRpbGVDb2xsaWRlciA9IG5ldyBUaWxlQ29sbGlkZXIobWF0cml4KTtcclxuICAgIH1cclxuXHJcbiAgICB1cGRhdGUoZGVsdGFUaW1lKSB7XHJcbiAgICAgICAgdGhpcy5lbnRpdGllcy5mb3JFYWNoKGVudGl0eSA9PiB7XHJcbiAgICAgICAgICAgIGVudGl0eS51cGRhdGUoZGVsdGFUaW1lLCB0aGlzKTtcclxuICAgICAgICB9KTtcclxuXHJcblxyXG4gICAgICAgIHRoaXMuZW50aXRpZXMuZm9yRWFjaChlbnRpdHkgPT4ge1xyXG4gICAgICAgICAgICBlbnRpdHkuZmluYWxpemUoKTtcclxuXHJcbiAgICAgICAgICAgIHRoaXMuZW50aXR5Q29sbGlkZXIuY2hlY2soZW50aXR5KTtcclxuICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgdGhpcy50b3RhbFRpbWUgKz0gZGVsdGFUaW1lO1xyXG4gICAgfVxyXG59XHJcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3B1YmxpYy9qcy9MZXZlbC5qcyIsIm1vZHVsZS5leHBvcnRzID0geyBcImRlZmF1bHRcIjogcmVxdWlyZShcImNvcmUtanMvbGlicmFyeS9mbi9zZXRcIiksIF9fZXNNb2R1bGU6IHRydWUgfTtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL25vZGVfbW9kdWxlcy9fYmFiZWwtcnVudGltZUA2LjI2LjBAYmFiZWwtcnVudGltZS9jb3JlLWpzL3NldC5qc1xuLy8gbW9kdWxlIGlkID0gMTQ1XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsInJlcXVpcmUoJy4uL21vZHVsZXMvZXM2Lm9iamVjdC50by1zdHJpbmcnKTtcbnJlcXVpcmUoJy4uL21vZHVsZXMvZXM2LnN0cmluZy5pdGVyYXRvcicpO1xucmVxdWlyZSgnLi4vbW9kdWxlcy93ZWIuZG9tLml0ZXJhYmxlJyk7XG5yZXF1aXJlKCcuLi9tb2R1bGVzL2VzNi5zZXQnKTtcbnJlcXVpcmUoJy4uL21vZHVsZXMvZXM3LnNldC50by1qc29uJyk7XG5yZXF1aXJlKCcuLi9tb2R1bGVzL2VzNy5zZXQub2YnKTtcbnJlcXVpcmUoJy4uL21vZHVsZXMvZXM3LnNldC5mcm9tJyk7XG5tb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoJy4uL21vZHVsZXMvX2NvcmUnKS5TZXQ7XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL25vZGVfbW9kdWxlcy9fY29yZS1qc0AyLjUuM0Bjb3JlLWpzL2xpYnJhcnkvZm4vc2V0LmpzXG4vLyBtb2R1bGUgaWQgPSAxNDZcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiJ3VzZSBzdHJpY3QnO1xudmFyIHN0cm9uZyA9IHJlcXVpcmUoJy4vX2NvbGxlY3Rpb24tc3Ryb25nJyk7XG52YXIgdmFsaWRhdGUgPSByZXF1aXJlKCcuL192YWxpZGF0ZS1jb2xsZWN0aW9uJyk7XG52YXIgU0VUID0gJ1NldCc7XG5cbi8vIDIzLjIgU2V0IE9iamVjdHNcbm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZSgnLi9fY29sbGVjdGlvbicpKFNFVCwgZnVuY3Rpb24gKGdldCkge1xuICByZXR1cm4gZnVuY3Rpb24gU2V0KCkgeyByZXR1cm4gZ2V0KHRoaXMsIGFyZ3VtZW50cy5sZW5ndGggPiAwID8gYXJndW1lbnRzWzBdIDogdW5kZWZpbmVkKTsgfTtcbn0sIHtcbiAgLy8gMjMuMi4zLjEgU2V0LnByb3RvdHlwZS5hZGQodmFsdWUpXG4gIGFkZDogZnVuY3Rpb24gYWRkKHZhbHVlKSB7XG4gICAgcmV0dXJuIHN0cm9uZy5kZWYodmFsaWRhdGUodGhpcywgU0VUKSwgdmFsdWUgPSB2YWx1ZSA9PT0gMCA/IDAgOiB2YWx1ZSwgdmFsdWUpO1xuICB9XG59LCBzdHJvbmcpO1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9ub2RlX21vZHVsZXMvX2NvcmUtanNAMi41LjNAY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvZXM2LnNldC5qc1xuLy8gbW9kdWxlIGlkID0gMTQ3XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIi8vIDAgLT4gQXJyYXkjZm9yRWFjaFxuLy8gMSAtPiBBcnJheSNtYXBcbi8vIDIgLT4gQXJyYXkjZmlsdGVyXG4vLyAzIC0+IEFycmF5I3NvbWVcbi8vIDQgLT4gQXJyYXkjZXZlcnlcbi8vIDUgLT4gQXJyYXkjZmluZFxuLy8gNiAtPiBBcnJheSNmaW5kSW5kZXhcbnZhciBjdHggPSByZXF1aXJlKCcuL19jdHgnKTtcbnZhciBJT2JqZWN0ID0gcmVxdWlyZSgnLi9faW9iamVjdCcpO1xudmFyIHRvT2JqZWN0ID0gcmVxdWlyZSgnLi9fdG8tb2JqZWN0Jyk7XG52YXIgdG9MZW5ndGggPSByZXF1aXJlKCcuL190by1sZW5ndGgnKTtcbnZhciBhc2MgPSByZXF1aXJlKCcuL19hcnJheS1zcGVjaWVzLWNyZWF0ZScpO1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoVFlQRSwgJGNyZWF0ZSkge1xuICB2YXIgSVNfTUFQID0gVFlQRSA9PSAxO1xuICB2YXIgSVNfRklMVEVSID0gVFlQRSA9PSAyO1xuICB2YXIgSVNfU09NRSA9IFRZUEUgPT0gMztcbiAgdmFyIElTX0VWRVJZID0gVFlQRSA9PSA0O1xuICB2YXIgSVNfRklORF9JTkRFWCA9IFRZUEUgPT0gNjtcbiAgdmFyIE5PX0hPTEVTID0gVFlQRSA9PSA1IHx8IElTX0ZJTkRfSU5ERVg7XG4gIHZhciBjcmVhdGUgPSAkY3JlYXRlIHx8IGFzYztcbiAgcmV0dXJuIGZ1bmN0aW9uICgkdGhpcywgY2FsbGJhY2tmbiwgdGhhdCkge1xuICAgIHZhciBPID0gdG9PYmplY3QoJHRoaXMpO1xuICAgIHZhciBzZWxmID0gSU9iamVjdChPKTtcbiAgICB2YXIgZiA9IGN0eChjYWxsYmFja2ZuLCB0aGF0LCAzKTtcbiAgICB2YXIgbGVuZ3RoID0gdG9MZW5ndGgoc2VsZi5sZW5ndGgpO1xuICAgIHZhciBpbmRleCA9IDA7XG4gICAgdmFyIHJlc3VsdCA9IElTX01BUCA/IGNyZWF0ZSgkdGhpcywgbGVuZ3RoKSA6IElTX0ZJTFRFUiA/IGNyZWF0ZSgkdGhpcywgMCkgOiB1bmRlZmluZWQ7XG4gICAgdmFyIHZhbCwgcmVzO1xuICAgIGZvciAoO2xlbmd0aCA+IGluZGV4OyBpbmRleCsrKSBpZiAoTk9fSE9MRVMgfHwgaW5kZXggaW4gc2VsZikge1xuICAgICAgdmFsID0gc2VsZltpbmRleF07XG4gICAgICByZXMgPSBmKHZhbCwgaW5kZXgsIE8pO1xuICAgICAgaWYgKFRZUEUpIHtcbiAgICAgICAgaWYgKElTX01BUCkgcmVzdWx0W2luZGV4XSA9IHJlczsgICAvLyBtYXBcbiAgICAgICAgZWxzZSBpZiAocmVzKSBzd2l0Y2ggKFRZUEUpIHtcbiAgICAgICAgICBjYXNlIDM6IHJldHVybiB0cnVlOyAgICAgICAgICAgICAvLyBzb21lXG4gICAgICAgICAgY2FzZSA1OiByZXR1cm4gdmFsOyAgICAgICAgICAgICAgLy8gZmluZFxuICAgICAgICAgIGNhc2UgNjogcmV0dXJuIGluZGV4OyAgICAgICAgICAgIC8vIGZpbmRJbmRleFxuICAgICAgICAgIGNhc2UgMjogcmVzdWx0LnB1c2godmFsKTsgICAgICAgIC8vIGZpbHRlclxuICAgICAgICB9IGVsc2UgaWYgKElTX0VWRVJZKSByZXR1cm4gZmFsc2U7IC8vIGV2ZXJ5XG4gICAgICB9XG4gICAgfVxuICAgIHJldHVybiBJU19GSU5EX0lOREVYID8gLTEgOiBJU19TT01FIHx8IElTX0VWRVJZID8gSVNfRVZFUlkgOiByZXN1bHQ7XG4gIH07XG59O1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9ub2RlX21vZHVsZXMvX2NvcmUtanNAMi41LjNAY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX2FycmF5LW1ldGhvZHMuanNcbi8vIG1vZHVsZSBpZCA9IDE0OFxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCIvLyA5LjQuMi4zIEFycmF5U3BlY2llc0NyZWF0ZShvcmlnaW5hbEFycmF5LCBsZW5ndGgpXG52YXIgc3BlY2llc0NvbnN0cnVjdG9yID0gcmVxdWlyZSgnLi9fYXJyYXktc3BlY2llcy1jb25zdHJ1Y3RvcicpO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChvcmlnaW5hbCwgbGVuZ3RoKSB7XG4gIHJldHVybiBuZXcgKHNwZWNpZXNDb25zdHJ1Y3RvcihvcmlnaW5hbCkpKGxlbmd0aCk7XG59O1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9ub2RlX21vZHVsZXMvX2NvcmUtanNAMi41LjNAY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX2FycmF5LXNwZWNpZXMtY3JlYXRlLmpzXG4vLyBtb2R1bGUgaWQgPSAxNDlcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwidmFyIGlzT2JqZWN0ID0gcmVxdWlyZSgnLi9faXMtb2JqZWN0Jyk7XG52YXIgaXNBcnJheSA9IHJlcXVpcmUoJy4vX2lzLWFycmF5Jyk7XG52YXIgU1BFQ0lFUyA9IHJlcXVpcmUoJy4vX3drcycpKCdzcGVjaWVzJyk7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKG9yaWdpbmFsKSB7XG4gIHZhciBDO1xuICBpZiAoaXNBcnJheShvcmlnaW5hbCkpIHtcbiAgICBDID0gb3JpZ2luYWwuY29uc3RydWN0b3I7XG4gICAgLy8gY3Jvc3MtcmVhbG0gZmFsbGJhY2tcbiAgICBpZiAodHlwZW9mIEMgPT0gJ2Z1bmN0aW9uJyAmJiAoQyA9PT0gQXJyYXkgfHwgaXNBcnJheShDLnByb3RvdHlwZSkpKSBDID0gdW5kZWZpbmVkO1xuICAgIGlmIChpc09iamVjdChDKSkge1xuICAgICAgQyA9IENbU1BFQ0lFU107XG4gICAgICBpZiAoQyA9PT0gbnVsbCkgQyA9IHVuZGVmaW5lZDtcbiAgICB9XG4gIH0gcmV0dXJuIEMgPT09IHVuZGVmaW5lZCA/IEFycmF5IDogQztcbn07XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL25vZGVfbW9kdWxlcy9fY29yZS1qc0AyLjUuM0Bjb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9fYXJyYXktc3BlY2llcy1jb25zdHJ1Y3Rvci5qc1xuLy8gbW9kdWxlIGlkID0gMTUwXG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIi8vIGh0dHBzOi8vZ2l0aHViLmNvbS9EYXZpZEJydWFudC9NYXAtU2V0LnByb3RvdHlwZS50b0pTT05cbnZhciAkZXhwb3J0ID0gcmVxdWlyZSgnLi9fZXhwb3J0Jyk7XG5cbiRleHBvcnQoJGV4cG9ydC5QICsgJGV4cG9ydC5SLCAnU2V0JywgeyB0b0pTT046IHJlcXVpcmUoJy4vX2NvbGxlY3Rpb24tdG8tanNvbicpKCdTZXQnKSB9KTtcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vbm9kZV9tb2R1bGVzL19jb3JlLWpzQDIuNS4zQGNvcmUtanMvbGlicmFyeS9tb2R1bGVzL2VzNy5zZXQudG8tanNvbi5qc1xuLy8gbW9kdWxlIGlkID0gMTUxXG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsInZhciBmb3JPZiA9IHJlcXVpcmUoJy4vX2Zvci1vZicpO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChpdGVyLCBJVEVSQVRPUikge1xuICB2YXIgcmVzdWx0ID0gW107XG4gIGZvck9mKGl0ZXIsIGZhbHNlLCByZXN1bHQucHVzaCwgcmVzdWx0LCBJVEVSQVRPUik7XG4gIHJldHVybiByZXN1bHQ7XG59O1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9ub2RlX21vZHVsZXMvX2NvcmUtanNAMi41LjNAY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX2FycmF5LWZyb20taXRlcmFibGUuanNcbi8vIG1vZHVsZSBpZCA9IDE1MlxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCIvLyBodHRwczovL3RjMzkuZ2l0aHViLmlvL3Byb3Bvc2FsLXNldG1hcC1vZmZyb20vI3NlYy1zZXQub2ZcbnJlcXVpcmUoJy4vX3NldC1jb2xsZWN0aW9uLW9mJykoJ1NldCcpO1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9ub2RlX21vZHVsZXMvX2NvcmUtanNAMi41LjNAY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvZXM3LnNldC5vZi5qc1xuLy8gbW9kdWxlIGlkID0gMTUzXG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIi8vIGh0dHBzOi8vdGMzOS5naXRodWIuaW8vcHJvcG9zYWwtc2V0bWFwLW9mZnJvbS8jc2VjLXNldC5mcm9tXG5yZXF1aXJlKCcuL19zZXQtY29sbGVjdGlvbi1mcm9tJykoJ1NldCcpO1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9ub2RlX21vZHVsZXMvX2NvcmUtanNAMi41LjNAY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvZXM3LnNldC5mcm9tLmpzXG4vLyBtb2R1bGUgaWQgPSAxNTRcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiZXhwb3J0IGRlZmF1bHQgY2xhc3MgQ29tcG9zaXRvciB7XHJcbiAgICBjb25zdHJ1Y3RvcigpIHtcclxuICAgICAgICB0aGlzLmxheWVycyA9IFtdO1xyXG4gICAgfVxyXG5cclxuICAgIGRyYXcoY29udGV4dCwgY2FtZXJhKSB7XHJcbiAgICAgICAgdGhpcy5sYXllcnMuZm9yRWFjaChsYXllciA9PiB7XHJcbiAgICAgICAgICAgIGxheWVyKGNvbnRleHQsIGNhbWVyYSk7XHJcbiAgICAgICAgfSlcclxuICAgIH1cclxufVxyXG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9wdWJsaWMvanMvY29tcG9zaXRvci5qcyIsIlxyXG5cclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgRW50aXR5Q29sbGlkZXIge1xyXG4gICAgY29uc3RydWN0b3IoZW50aXRpZXMpIHtcclxuICAgICAgICB0aGlzLmVudGl0aWVzID0gZW50aXRpZXM7XHJcbiAgICB9XHJcblxyXG4gICAgY2hlY2soc3ViamVjdCkge1xyXG4gICAgICAgIHRoaXMuZW50aXRpZXMuZm9yRWFjaChjYW5kaWRhdGUgPT4ge1xyXG4gICAgICAgICAgICBpZiAoc3ViamVjdCA9PT0gY2FuZGlkYXRlKSB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIGlmIChzdWJqZWN0LmJvdW5kcy5vdmVybGFwcyhjYW5kaWRhdGUuYm91bmRzKSkge1xyXG4gICAgICAgICAgICAgIHN1YmplY3QuY29sbGlkZXMoY2FuZGlkYXRlKTtcclxuICAgICAgICAgICAgICBjYW5kaWRhdGUuY29sbGlkZXMoc3ViamVjdCk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9KVxyXG4gICAgfVxyXG59XHJcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3B1YmxpYy9qcy9FbnRpdHlDb2xsaWRlci5qcyIsImltcG9ydCBUaWxlUmVzb2x2ZXIgZnJvbSAnLi9UaWxlUmVzb2x2ZXIuanMnXHJcbmltcG9ydCB7U2lkZXN9IGZyb20gJy4vRW50aXR5LmpzJ1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgVGlsZUNvbGxpZGVyIHtcclxuICAgIGNvbnN0cnVjdG9yKHRpbGVNYXRyaXgpIHtcclxuICAgICAgICB0aGlzLnRpbGUgPSBuZXcgVGlsZVJlc29sdmVyKHRpbGVNYXRyaXgpO1xyXG4gICAgfVxyXG5cclxuICAgIGNoZWNrWChlbnRpdHkpIHtcclxuICAgICAgICBsZXQgeDtcclxuICAgICAgICBpZiAoZW50aXR5LnZlbC54ID4gMCkge1xyXG4gICAgICAgICAgICAvLyBtYXJpbyBpcyBnb2luZyB0b3dhcmQgUklHSFRcclxuICAgICAgICAgICAgLy8gc28gd2UganVzdCBuZWVkIHRvIGNoZWNrIHRoZSBSSUdIVCBzaWRlIG9mIGVudGl0eVxyXG4gICAgICAgICAgICB4ID0gZW50aXR5LmJvdW5kcy5yaWdodDtcclxuICAgICAgICB9IGVsc2UgaWYgKGVudGl0eS52ZWwueCA8IDApIHtcclxuICAgICAgICAgICAgLy8gbWFyaW8gaXMgZ29pbmcgdG93YXJkIExFRlRcclxuICAgICAgICAgICAgLy8gZWxzZSB3ZSBvbmx5IG5lZWQgdG8gY2hlY2sgdGhlIExFRlQgc2lkZSBvZiBlbnRpdHlcclxuICAgICAgICAgICAgeCA9IGVudGl0eS5ib3VuZHMubGVmdDtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBjb25zdCBtYXRjaGVzID0gdGhpcy50aWxlLnNlYXJjaEJ5UmFuZ2UoXHJcbiAgICAgICAgICAgIHgsIHgsXHJcbiAgICAgICAgICAgZW50aXR5LmJvdW5kcy50b3AsIGVudGl0eS5ib3VuZHMuYm90dG9tXHJcbiAgICAgICAgKTtcclxuXHJcbiAgICAgICAgbWF0Y2hlcy5mb3JFYWNoKG1hdGNoID0+IHtcclxuICAgICAgICAgICAgaWYgKG1hdGNoLnRpbGUudHlwZSAhPT0gJ2dyb3VuZCcpIHtcclxuICAgICAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgaWYgKGVudGl0eS52ZWwueCA+IDApIHtcclxuICAgICAgICAgICAgICAgIGlmIChlbnRpdHkuYm91bmRzLnJpZ2h0ID4gbWF0Y2gueDEpIHtcclxuICAgICAgICAgICAgICAgICAgICBlbnRpdHkub2JzdHJ1Y3QoU2lkZXMuTEVGVCwgbWF0Y2gpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9IGVsc2UgaWYgKGVudGl0eS52ZWwueCA8IDApIHtcclxuICAgICAgICAgICAgICAgIGlmIChlbnRpdHkuYm91bmRzLmxlZnQgPCBtYXRjaC54Mikge1xyXG4gICAgICAgICAgICAgICAgICAgIGVudGl0eS5vYnN0cnVjdChTaWRlcy5SSUdIVCwgbWF0Y2gpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSlcclxuXHJcbiAgICB9XHJcblxyXG4gICAgY2hlY2tZKGVudGl0eSkge1xyXG4gICAgICAgIGxldCB5O1xyXG4gICAgICAgIGlmIChlbnRpdHkudmVsLnkgPiAwKSB7XHJcbiAgICAgICAgICAgIC8vIG1hcmlvIGlzIGdvaW5nIHRvd2FyZCBCXHJcbiAgICAgICAgICAgIHkgPSBlbnRpdHkuYm91bmRzLmJvdHRvbTtcclxuICAgICAgICB9IGVsc2UgaWYgKGVudGl0eS52ZWwueSA8IDApIHtcclxuICAgICAgICAgICAgLy8gbWFyaW8gaXMgZ29pbmcgdG93YXJkIFRPUFxyXG4gICAgICAgICAgICB5ID1lbnRpdHkuYm91bmRzLnRvcDtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBjb25zdCBtYXRjaGVzID0gdGhpcy50aWxlLnNlYXJjaEJ5UmFuZ2UoXHJcbiAgICAgICAgICAgIGVudGl0eS5ib3VuZHMubGVmdCwgZW50aXR5LmJvdW5kcy5yaWdodCxcclxuICAgICAgICAgICAgeSwgeVxyXG4gICAgICAgICk7XHJcblxyXG4gICAgICAgIG1hdGNoZXMuZm9yRWFjaChtYXRjaCA9PiB7XHJcbiAgICAgICAgICAgIGlmIChtYXRjaC50aWxlLnR5cGUgIT09ICdncm91bmQnKSB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIGlmIChlbnRpdHkudmVsLnkgPiAwKSB7XHJcbiAgICAgICAgICAgICAgICBpZiAoZW50aXR5LmJvdW5kcy5ib3R0b20gPiBtYXRjaC55MSkge1xyXG4gICAgICAgICAgICAgICAgICAgIGVudGl0eS5vYnN0cnVjdChTaWRlcy5CT1RUT00sIG1hdGNoKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfSBlbHNlIGlmIChlbnRpdHkudmVsLnkgPCAwKSB7XHJcbiAgICAgICAgICAgICAgICBpZiAoZW50aXR5LnBvcy55IDwgbWF0Y2gueTIpIHtcclxuICAgICAgICAgICAgICAgICAgICBlbnRpdHkub2JzdHJ1Y3QoU2lkZXMuVE9QLCBtYXRjaCk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9KVxyXG5cclxuICAgIH1cclxuXHJcbn1cclxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vcHVibGljL2pzL1RpbGVDb2xsaWRlci5qcyIsIm1vZHVsZS5leHBvcnRzID0geyBcImRlZmF1bHRcIjogcmVxdWlyZShcImNvcmUtanMvbGlicmFyeS9mbi9hcnJheS9mcm9tXCIpLCBfX2VzTW9kdWxlOiB0cnVlIH07XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9ub2RlX21vZHVsZXMvX2JhYmVsLXJ1bnRpbWVANi4yNi4wQGJhYmVsLXJ1bnRpbWUvY29yZS1qcy9hcnJheS9mcm9tLmpzXG4vLyBtb2R1bGUgaWQgPSAxNThcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwicmVxdWlyZSgnLi4vLi4vbW9kdWxlcy9lczYuc3RyaW5nLml0ZXJhdG9yJyk7XG5yZXF1aXJlKCcuLi8uLi9tb2R1bGVzL2VzNi5hcnJheS5mcm9tJyk7XG5tb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoJy4uLy4uL21vZHVsZXMvX2NvcmUnKS5BcnJheS5mcm9tO1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9ub2RlX21vZHVsZXMvX2NvcmUtanNAMi41LjNAY29yZS1qcy9saWJyYXJ5L2ZuL2FycmF5L2Zyb20uanNcbi8vIG1vZHVsZSBpZCA9IDE1OVxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCIndXNlIHN0cmljdCc7XG52YXIgY3R4ID0gcmVxdWlyZSgnLi9fY3R4Jyk7XG52YXIgJGV4cG9ydCA9IHJlcXVpcmUoJy4vX2V4cG9ydCcpO1xudmFyIHRvT2JqZWN0ID0gcmVxdWlyZSgnLi9fdG8tb2JqZWN0Jyk7XG52YXIgY2FsbCA9IHJlcXVpcmUoJy4vX2l0ZXItY2FsbCcpO1xudmFyIGlzQXJyYXlJdGVyID0gcmVxdWlyZSgnLi9faXMtYXJyYXktaXRlcicpO1xudmFyIHRvTGVuZ3RoID0gcmVxdWlyZSgnLi9fdG8tbGVuZ3RoJyk7XG52YXIgY3JlYXRlUHJvcGVydHkgPSByZXF1aXJlKCcuL19jcmVhdGUtcHJvcGVydHknKTtcbnZhciBnZXRJdGVyRm4gPSByZXF1aXJlKCcuL2NvcmUuZ2V0LWl0ZXJhdG9yLW1ldGhvZCcpO1xuXG4kZXhwb3J0KCRleHBvcnQuUyArICRleHBvcnQuRiAqICFyZXF1aXJlKCcuL19pdGVyLWRldGVjdCcpKGZ1bmN0aW9uIChpdGVyKSB7IEFycmF5LmZyb20oaXRlcik7IH0pLCAnQXJyYXknLCB7XG4gIC8vIDIyLjEuMi4xIEFycmF5LmZyb20oYXJyYXlMaWtlLCBtYXBmbiA9IHVuZGVmaW5lZCwgdGhpc0FyZyA9IHVuZGVmaW5lZClcbiAgZnJvbTogZnVuY3Rpb24gZnJvbShhcnJheUxpa2UgLyogLCBtYXBmbiA9IHVuZGVmaW5lZCwgdGhpc0FyZyA9IHVuZGVmaW5lZCAqLykge1xuICAgIHZhciBPID0gdG9PYmplY3QoYXJyYXlMaWtlKTtcbiAgICB2YXIgQyA9IHR5cGVvZiB0aGlzID09ICdmdW5jdGlvbicgPyB0aGlzIDogQXJyYXk7XG4gICAgdmFyIGFMZW4gPSBhcmd1bWVudHMubGVuZ3RoO1xuICAgIHZhciBtYXBmbiA9IGFMZW4gPiAxID8gYXJndW1lbnRzWzFdIDogdW5kZWZpbmVkO1xuICAgIHZhciBtYXBwaW5nID0gbWFwZm4gIT09IHVuZGVmaW5lZDtcbiAgICB2YXIgaW5kZXggPSAwO1xuICAgIHZhciBpdGVyRm4gPSBnZXRJdGVyRm4oTyk7XG4gICAgdmFyIGxlbmd0aCwgcmVzdWx0LCBzdGVwLCBpdGVyYXRvcjtcbiAgICBpZiAobWFwcGluZykgbWFwZm4gPSBjdHgobWFwZm4sIGFMZW4gPiAyID8gYXJndW1lbnRzWzJdIDogdW5kZWZpbmVkLCAyKTtcbiAgICAvLyBpZiBvYmplY3QgaXNuJ3QgaXRlcmFibGUgb3IgaXQncyBhcnJheSB3aXRoIGRlZmF1bHQgaXRlcmF0b3IgLSB1c2Ugc2ltcGxlIGNhc2VcbiAgICBpZiAoaXRlckZuICE9IHVuZGVmaW5lZCAmJiAhKEMgPT0gQXJyYXkgJiYgaXNBcnJheUl0ZXIoaXRlckZuKSkpIHtcbiAgICAgIGZvciAoaXRlcmF0b3IgPSBpdGVyRm4uY2FsbChPKSwgcmVzdWx0ID0gbmV3IEMoKTsgIShzdGVwID0gaXRlcmF0b3IubmV4dCgpKS5kb25lOyBpbmRleCsrKSB7XG4gICAgICAgIGNyZWF0ZVByb3BlcnR5KHJlc3VsdCwgaW5kZXgsIG1hcHBpbmcgPyBjYWxsKGl0ZXJhdG9yLCBtYXBmbiwgW3N0ZXAudmFsdWUsIGluZGV4XSwgdHJ1ZSkgOiBzdGVwLnZhbHVlKTtcbiAgICAgIH1cbiAgICB9IGVsc2Uge1xuICAgICAgbGVuZ3RoID0gdG9MZW5ndGgoTy5sZW5ndGgpO1xuICAgICAgZm9yIChyZXN1bHQgPSBuZXcgQyhsZW5ndGgpOyBsZW5ndGggPiBpbmRleDsgaW5kZXgrKykge1xuICAgICAgICBjcmVhdGVQcm9wZXJ0eShyZXN1bHQsIGluZGV4LCBtYXBwaW5nID8gbWFwZm4oT1tpbmRleF0sIGluZGV4KSA6IE9baW5kZXhdKTtcbiAgICAgIH1cbiAgICB9XG4gICAgcmVzdWx0Lmxlbmd0aCA9IGluZGV4O1xuICAgIHJldHVybiByZXN1bHQ7XG4gIH1cbn0pO1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9ub2RlX21vZHVsZXMvX2NvcmUtanNAMi41LjNAY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvZXM2LmFycmF5LmZyb20uanNcbi8vIG1vZHVsZSBpZCA9IDE2MFxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCIndXNlIHN0cmljdCc7XG52YXIgJGRlZmluZVByb3BlcnR5ID0gcmVxdWlyZSgnLi9fb2JqZWN0LWRwJyk7XG52YXIgY3JlYXRlRGVzYyA9IHJlcXVpcmUoJy4vX3Byb3BlcnR5LWRlc2MnKTtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAob2JqZWN0LCBpbmRleCwgdmFsdWUpIHtcbiAgaWYgKGluZGV4IGluIG9iamVjdCkgJGRlZmluZVByb3BlcnR5LmYob2JqZWN0LCBpbmRleCwgY3JlYXRlRGVzYygwLCB2YWx1ZSkpO1xuICBlbHNlIG9iamVjdFtpbmRleF0gPSB2YWx1ZTtcbn07XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL25vZGVfbW9kdWxlcy9fY29yZS1qc0AyLjUuM0Bjb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9fY3JlYXRlLXByb3BlcnR5LmpzXG4vLyBtb2R1bGUgaWQgPSAxNjFcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwicmVxdWlyZSgnLi4vbW9kdWxlcy9lczYub2JqZWN0LnRvLXN0cmluZycpO1xucmVxdWlyZSgnLi4vbW9kdWxlcy9lczYuc3RyaW5nLml0ZXJhdG9yJyk7XG5yZXF1aXJlKCcuLi9tb2R1bGVzL3dlYi5kb20uaXRlcmFibGUnKTtcbnJlcXVpcmUoJy4uL21vZHVsZXMvZXM2Lm1hcCcpO1xucmVxdWlyZSgnLi4vbW9kdWxlcy9lczcubWFwLnRvLWpzb24nKTtcbnJlcXVpcmUoJy4uL21vZHVsZXMvZXM3Lm1hcC5vZicpO1xucmVxdWlyZSgnLi4vbW9kdWxlcy9lczcubWFwLmZyb20nKTtcbm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZSgnLi4vbW9kdWxlcy9fY29yZScpLk1hcDtcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vbm9kZV9tb2R1bGVzL19jb3JlLWpzQDIuNS4zQGNvcmUtanMvbGlicmFyeS9mbi9tYXAuanNcbi8vIG1vZHVsZSBpZCA9IDE2MlxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCIndXNlIHN0cmljdCc7XG52YXIgc3Ryb25nID0gcmVxdWlyZSgnLi9fY29sbGVjdGlvbi1zdHJvbmcnKTtcbnZhciB2YWxpZGF0ZSA9IHJlcXVpcmUoJy4vX3ZhbGlkYXRlLWNvbGxlY3Rpb24nKTtcbnZhciBNQVAgPSAnTWFwJztcblxuLy8gMjMuMSBNYXAgT2JqZWN0c1xubW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKCcuL19jb2xsZWN0aW9uJykoTUFQLCBmdW5jdGlvbiAoZ2V0KSB7XG4gIHJldHVybiBmdW5jdGlvbiBNYXAoKSB7IHJldHVybiBnZXQodGhpcywgYXJndW1lbnRzLmxlbmd0aCA+IDAgPyBhcmd1bWVudHNbMF0gOiB1bmRlZmluZWQpOyB9O1xufSwge1xuICAvLyAyMy4xLjMuNiBNYXAucHJvdG90eXBlLmdldChrZXkpXG4gIGdldDogZnVuY3Rpb24gZ2V0KGtleSkge1xuICAgIHZhciBlbnRyeSA9IHN0cm9uZy5nZXRFbnRyeSh2YWxpZGF0ZSh0aGlzLCBNQVApLCBrZXkpO1xuICAgIHJldHVybiBlbnRyeSAmJiBlbnRyeS52O1xuICB9LFxuICAvLyAyMy4xLjMuOSBNYXAucHJvdG90eXBlLnNldChrZXksIHZhbHVlKVxuICBzZXQ6IGZ1bmN0aW9uIHNldChrZXksIHZhbHVlKSB7XG4gICAgcmV0dXJuIHN0cm9uZy5kZWYodmFsaWRhdGUodGhpcywgTUFQKSwga2V5ID09PSAwID8gMCA6IGtleSwgdmFsdWUpO1xuICB9XG59LCBzdHJvbmcsIHRydWUpO1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9ub2RlX21vZHVsZXMvX2NvcmUtanNAMi41LjNAY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvZXM2Lm1hcC5qc1xuLy8gbW9kdWxlIGlkID0gMTYzXG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIi8vIGh0dHBzOi8vZ2l0aHViLmNvbS9EYXZpZEJydWFudC9NYXAtU2V0LnByb3RvdHlwZS50b0pTT05cbnZhciAkZXhwb3J0ID0gcmVxdWlyZSgnLi9fZXhwb3J0Jyk7XG5cbiRleHBvcnQoJGV4cG9ydC5QICsgJGV4cG9ydC5SLCAnTWFwJywgeyB0b0pTT046IHJlcXVpcmUoJy4vX2NvbGxlY3Rpb24tdG8tanNvbicpKCdNYXAnKSB9KTtcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vbm9kZV9tb2R1bGVzL19jb3JlLWpzQDIuNS4zQGNvcmUtanMvbGlicmFyeS9tb2R1bGVzL2VzNy5tYXAudG8tanNvbi5qc1xuLy8gbW9kdWxlIGlkID0gMTY0XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIi8vIGh0dHBzOi8vdGMzOS5naXRodWIuaW8vcHJvcG9zYWwtc2V0bWFwLW9mZnJvbS8jc2VjLW1hcC5vZlxucmVxdWlyZSgnLi9fc2V0LWNvbGxlY3Rpb24tb2YnKSgnTWFwJyk7XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL25vZGVfbW9kdWxlcy9fY29yZS1qc0AyLjUuM0Bjb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9lczcubWFwLm9mLmpzXG4vLyBtb2R1bGUgaWQgPSAxNjVcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiLy8gaHR0cHM6Ly90YzM5LmdpdGh1Yi5pby9wcm9wb3NhbC1zZXRtYXAtb2Zmcm9tLyNzZWMtbWFwLmZyb21cbnJlcXVpcmUoJy4vX3NldC1jb2xsZWN0aW9uLWZyb20nKSgnTWFwJyk7XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL25vZGVfbW9kdWxlcy9fY29yZS1qc0AyLjUuM0Bjb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9lczcubWFwLmZyb20uanNcbi8vIG1vZHVsZSBpZCA9IDE2NlxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJleHBvcnQgZnVuY3Rpb24gY3JlYXRlQW5pbShmcmFtZXMsIGZyYW1lTGVuKSB7XHJcbiAgICByZXR1cm4gZnVuY3Rpb24gcmVzb2x2ZUZyYW1lKGRpc3RhbmNlKSB7XHJcbiAgICAgICAgY29uc3QgZnJhbWVJbmRleCA9IE1hdGguZmxvb3IoZGlzdGFuY2UgLyBmcmFtZUxlbikgJSBmcmFtZXMubGVuZ3RoO1xyXG5cclxuICAgICAgICByZXR1cm4gZnJhbWVzW2ZyYW1lSW5kZXhdO1xyXG4gICAgfVxyXG59XHJcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3B1YmxpYy9qcy9hbmltLmpzIiwiZXhwb3J0IGZ1bmN0aW9uIGNyZWF0ZVNwcml0ZUxheWVyKGVudGl0aWVzLCB3aWR0aCA9IDY0LCBoZWlnaHQgPSA2NCkge1xyXG4gICAgY29uc3Qgc3ByaXRlQnVmZmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnY2FudmFzJylcclxuICAgIHNwcml0ZUJ1ZmZlci53aWR0aCA9IHdpZHRoO1xyXG4gICAgc3ByaXRlQnVmZmVyLmhlaWdodCA9IGhlaWdodDtcclxuXHJcbiAgICBjb25zdCBzcHJpdGVDb250ZXh0ID0gc3ByaXRlQnVmZmVyLmdldENvbnRleHQoJzJkJyk7XHJcbiAgICByZXR1cm4gZnVuY3Rpb24gZHJhd1Nwcml0ZUxheWVyKGNvbnRleHQsIGNhbWVyYSkge1xyXG4gICAgICAgIGVudGl0aWVzLmZvckVhY2goZW50aXR5ID0+IHtcclxuICAgICAgICAgICAgc3ByaXRlQ29udGV4dC5jbGVhclJlY3QoMCwgMCwgd2lkdGgsIGhlaWdodCk7ICAgLy8gc2V0IGJhY2tncm91bmQgdG8gdHJhbnNwYXJlbnQuXHJcbiAgICAgICAgICAgIGVudGl0eS5kcmF3KHNwcml0ZUNvbnRleHQpO1xyXG5cclxuICAgICAgICAgICAgY29udGV4dC5kcmF3SW1hZ2UoXHJcbiAgICAgICAgICAgICAgICBzcHJpdGVCdWZmZXIsXHJcbiAgICAgICAgICAgICAgICBlbnRpdHkucG9zLnggLSBjYW1lcmEucG9zLngsXHJcbiAgICAgICAgICAgICAgICBlbnRpdHkucG9zLnkgLSBjYW1lcmEucG9zLnlcclxuICAgICAgICAgICAgKVxyXG4gICAgICAgIH0pXHJcbiAgICB9XHJcbn1cclxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vcHVibGljL2pzL2xheWVycy9zcHJpdGVzLmpzIiwiaW1wb3J0IFRpbGVSZXNvbHZlciBmcm9tICcuLi9UaWxlUmVzb2x2ZXIuanMnXHJcblxyXG5leHBvcnQgZnVuY3Rpb24gY3JlYXRlQmFja2dyb3VuZExheWVyKGxldmVsLCB0aWxlcywgc3ByaXRlcykge1xyXG4gICAgY29uc3QgcmVzb2x2ZXIgPSBuZXcgVGlsZVJlc29sdmVyKHRpbGVzKTtcclxuXHJcbiAgICBjb25zdCBidWZmZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdjYW52YXMnKTtcclxuICAgIGJ1ZmZlci53aWR0aCA9IDI1NiArIDE2OyAgICAvLyAxNiArIDEgY29sdW1uXHJcbiAgICBidWZmZXIuaGVpZ2h0ID0gMjQwO1xyXG5cclxuICAgIGNvbnN0IGNvbnRleHQgPSBidWZmZXIuZ2V0Q29udGV4dCgnMmQnKTtcclxuXHJcbiAgICBmdW5jdGlvbiByZWRyYXcoc3RhcnRJbmRleCwgZW5kSW5kZXgpIHtcclxuXHJcbiAgICAgICAgY29udGV4dC5jbGVhclJlY3QoMCwwLGJ1ZmZlci53aWR0aCxidWZmZXIuaGVpZ2h0KTtcclxuXHJcbiAgICAgICAgZm9yIChsZXQgeCA9IHN0YXJ0SW5kZXg7IHggPD0gZW5kSW5kZXg7IHgrKykge1xyXG4gICAgICAgICAgICBjb25zdCBjb2wgPSB0aWxlcy5ncmlkW3hdO1xyXG4gICAgICAgICAgICBpZiAoY29sKSB7XHJcbiAgICAgICAgICAgICAgICAvLyBjb25zb2xlLmxvZyh4IC0gc3RhcnRJbmRleCk7XHJcbiAgICAgICAgICAgICAgICAvKlRPRE8gQ2Fubm90IGZpZ3VyZSBvdXQgdGhlIG1lYW4gb2YgeCAtIHN0YXJ0SW5kZXggYW5kIC1jYW1lcmEucG9zLnggJSAxNiBPUFRJTUlaQVRJT04gaW4gRVAgNiovXHJcbiAgICAgICAgICAgICAgICBjb2wuZm9yRWFjaCgodGlsZSwgeSkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgIGlmIChzcHJpdGVzLmFuaW1hdGlvbnMuaGFzKHRpbGUubmFtZSkpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgc3ByaXRlcy5kcmF3QW5pbShcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRpbGUubmFtZSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnRleHQsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB4IC0gc3RhcnRJbmRleCxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHksXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBsZXZlbC50b3RhbFRpbWUpO1xyXG4gICAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHNwcml0ZXMuZHJhd1RpbGUoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aWxlLm5hbWUsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb250ZXh0LFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgeCAtIHN0YXJ0SW5kZXgsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB5KTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIHJldHVybiBmdW5jdGlvbiBkcmF3QmFja2dyb3VuZExheWVyKGNvbnRleHQsIGNhbWVyYSkge1xyXG4gICAgICAgIGNvbnN0IGRyYXdXaWR0aCA9IHJlc29sdmVyLnRvSW5kZXgoY2FtZXJhLnNpemUueCksXHJcbiAgICAgICAgICAgIGRyYXdGcm9tID0gcmVzb2x2ZXIudG9JbmRleChjYW1lcmEucG9zLngpO1xyXG4gICAgICAgIGNvbnN0IGRyYXdFbmQgPSBkcmF3RnJvbSArIGRyYXdXaWR0aDtcclxuXHJcbiAgICAgICAgcmVkcmF3KGRyYXdGcm9tLCBkcmF3RW5kKTtcclxuXHJcbiAgICAgICAgY29udGV4dC5kcmF3SW1hZ2UoXHJcbiAgICAgICAgICAgIGJ1ZmZlcixcclxuICAgICAgICAgICAgLWNhbWVyYS5wb3MueCAlIDE2LFxyXG4gICAgICAgICAgICAtY2FtZXJhLnBvcy55KTtcclxuICAgIH1cclxuXHJcbiAgICAvLyAvLyBIaWdoLU9yZGVyIEZ1bmN0aW9uXHJcbiAgICAvLyByZXR1cm4gZnVuY3Rpb24gZHJhd0JhY2tncm91bmRMYXllcihjb250ZXh0LCBjYW1lcmEpIHtcclxuICAgIC8vICAgICBjb250ZXh0LmRyYXdJbWFnZShidWZmZXIsIC1jYW1lcmEucG9zLngsIC1jYW1lcmEucG9zLnkpO1xyXG4gICAgLy8gfVxyXG59XHJcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3B1YmxpYy9qcy9sYXllcnMvYmFja2dyb3VuZC5qcyIsImltcG9ydCB7bG9hZEltYWdlfSBmcm9tICcuLi9sb2FkZXIuanMnO1xyXG5pbXBvcnQgU3ByaXRlU2hlZXQgZnJvbSAnLi4vU3ByaXRlU2hlZXQuanMnO1xyXG5cclxuY29uc3QgQ0hBUlMgPSAnICFcIiMkJSZcXCcoKSorLC0uLzAxMjM0NTY3ODk6Ozw9Pj9AQUJDREVGR0hJSktMTU5PUFFSU1RVVldYWVpbXFxcXF1eX2BhYmNkZWZnaGlqa2xtbm9wcXJzdHV2d3h5ent8fX4nO1xyXG5cclxuXHJcbmNsYXNzIEZvbnQge1xyXG4gICAgY29uc3RydWN0b3Ioc3ByaXRlU2hlZXQsIHNpemUpIHtcclxuICAgICAgICB0aGlzLnNwcml0ZXMgPSBzcHJpdGVTaGVldDtcclxuICAgICAgICB0aGlzLnNpemUgPSBzaXplO1xyXG4gICAgfVxyXG5cclxuICAgIHByaW50KHRleHQsIGNvbnRleHQsIHgsIHkpIHtcclxuICAgICAgICBbLi4udGV4dF0uZm9yRWFjaCgoY2hhciwgcG9zKSA9PiB7XHJcbiAgICAgICAgICAgIHRoaXMuc3ByaXRlcy5kcmF3KGNoYXIsIGNvbnRleHQsIHggKyBwb3MgKiB0aGlzLnNpemUsIHkpO1xyXG4gICAgICAgIH0pXHJcbiAgICB9XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBsb2FkRm9udCgpIHtcclxuICAgIHJldHVybiBsb2FkSW1hZ2UoJy4vaW1nL2ZvbnQucG5nJylcclxuICAgICAgICAudGhlbihpbWcgPT4ge1xyXG4gICAgICAgICAgICBjb25zdCBmb250U3ByaXRlID0gbmV3IFNwcml0ZVNoZWV0KGltZyk7XHJcblxyXG4gICAgICAgICAgICBjb25zdCBzaXplID0gOCwgcm93TGVuID0gaW1nLndpZHRoO1xyXG4gICAgICAgICAgICBjb25zdCBjb2xOdW0gPSBpbWcud2lkdGggLyBzaXplO1xyXG4gICAgICAgICAgICBmb3IgKGxldCBbaW5kZXgsIGNoYXJdIG9mIFsuLi5DSEFSU10uZW50cmllcygpKSB7XHJcblxyXG4gICAgICAgICAgICAgICAgY29uc3QgeCAgPSAoaW5kZXggKiBzaXplKSAlIHJvd0xlbjtcclxuICAgICAgICAgICAgICAgIGNvbnN0IHkgPSBNYXRoLmZsb29yKGluZGV4IC8gY29sTnVtKSpzaXplO1xyXG5cclxuICAgICAgICAgICAgICAgIGZvbnRTcHJpdGUuZGVmaW5lKGNoYXIsIHgsIHksIHNpemUsIHNpemUpO1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICByZXR1cm4gbmV3IEZvbnQoZm9udFNwcml0ZSwgc2l6ZSk7XHJcbiAgICAgICAgfSlcclxufVxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3B1YmxpYy9qcy9sb2FkZXJzL2ZvbnQuanMiLCJpbXBvcnQge2xvYWRNYXJpb30gZnJvbSAnLi9lbnRpdGllcy9NYXJpby5qcydcclxuaW1wb3J0IHtsb2FkR29vbWJhfSBmcm9tICcuL2VudGl0aWVzL0dvb21iYS5qcydcclxuaW1wb3J0IHtsb2FkS29vcGF9IGZyb20gJy4vZW50aXRpZXMvS29vcGEuanMnXHJcblxyXG5leHBvcnQgZnVuY3Rpb24gbG9hZEVudGl0aWVzKCkge1xyXG4gICAgY29uc3QgZW50aXRpZXNGYWN0b3J5ID0ge307XHJcblxyXG4gICAgZnVuY3Rpb24gYWRkQXMobmFtZSkge1xyXG4gICAgICAgIHJldHVybiBmYWN0b3J5ID0+IHtlbnRpdGllc0ZhY3RvcnlbbmFtZV0gPSBmYWN0b3J5fVxyXG4gICAgfVxyXG5cclxuICAgIHJldHVybiBQcm9taXNlLmFsbChbXHJcbiAgICAgICAgbG9hZE1hcmlvKCkudGhlbihhZGRBcygnbWFyaW8nKSksXHJcbiAgICAgICAgbG9hZEdvb21iYSgpLnRoZW4oYWRkQXMoJ2dvb21iYScpKSxcclxuICAgICAgICBsb2FkS29vcGEoKS50aGVuKGFkZEFzKCdrb29wYScpKSxcclxuICAgIF0pXHJcbiAgICAgICAgLnRoZW4oKCkgPT4gZW50aXRpZXNGYWN0b3J5KVxyXG59XHJcblxyXG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9wdWJsaWMvanMvZW50aXRpZXMuanMiLCJpbXBvcnQgRW50aXR5IGZyb20gJy4uL0VudGl0eS5qcydcclxuLy8gaW1wb3J0IFZlbG9jaXR5IGZyb20gJy4uL3RyYWl0cy9WZWxvY2l0eS5qcydcclxuaW1wb3J0IEdvIGZyb20gJy4uL3RyYWl0cy9Hby5qcydcclxuaW1wb3J0IEp1bXAgZnJvbSAnLi4vdHJhaXRzL0p1bXAuanMnXHJcbmltcG9ydCBTdG9tZXIgZnJvbSAnLi4vdHJhaXRzL1N0b21lci5qcydcclxuaW1wb3J0IEtpbGxhYmxlIGZyb20gJy4uL3RyYWl0cy9LaWxsYWJsZS5qcydcclxuaW1wb3J0IFNvbGlkIGZyb20gJy4uL3RyYWl0cy9Tb2xpZC5qcydcclxuaW1wb3J0IFBoeXNpY3MgZnJvbSAnLi4vdHJhaXRzL1BoeXNpY3MuanMnXHJcbi8vIGltcG9ydCBQbGF5ZXJDb250cm9sbGVyIGZyb20gJy4uL3RyYWl0cy9QbGF5ZXJDb250cm9sbGVyLmpzJ1xyXG5pbXBvcnQge2xvYWRTcHJpdGVTaGVldH0gZnJvbSAnLi4vbG9hZGVyLmpzJztcclxuXHJcbi8qTmFtZSBDb252ZW50aW9uOlxyXG4qIDEuIGxvYWRTb21ldGhpbmcgaXMgc3luY2hyb25vdXMsIGNyZWF0ZVNvbWV0aGluZyBpcyBhc3luY2hyb25vdXMuKi9cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBsb2FkTWFyaW8oKSB7XHJcbiAgICByZXR1cm4gbG9hZFNwcml0ZVNoZWV0KCdtYXJpbycpXHJcbiAgICAgICAgLnRoZW4oY3JlYXRlTWFyaW9GYWN0b3J5KVxyXG59XHJcblxyXG5mdW5jdGlvbiBjcmVhdGVNYXJpb0ZhY3Rvcnkoc3ByaXRlKSB7XHJcbiAgICBjb25zdCBydW5BbmltID0gc3ByaXRlLmFuaW1hdGlvbnMuZ2V0KFwicnVuXCIpO1xyXG5cclxuICAgICAgICBmdW5jdGlvbiBmcmFtZVJvdXRlKG1hcmlvKSB7XHJcbiAgICAgICAgaWYgKG1hcmlvLmp1bXAuZmFsbGluZykge1xyXG4gICAgICAgICAgICByZXR1cm4gJ2p1bXAnO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgaWYgKG1hcmlvLmdvLmRpc3RhbmNlID4gMCkge1xyXG4gICAgICAgICAgICBpZiAoKG1hcmlvLnZlbC54ID4gMCAmJiBtYXJpby5nby5kaXIgPCAwKSB8fFxyXG4gICAgICAgICAgICAgICAgKG1hcmlvLnZlbC54IDwgMCAmJiBtYXJpby5nby5kaXIgPiAwKSkge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuICdicmVhayc7XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIHJldHVybiBydW5BbmltKG1hcmlvLmdvLmRpc3RhbmNlKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHJldHVybiAnaWRsZSc7XHJcbiAgICB9XHJcblxyXG4gICAgZnVuY3Rpb24gZHJhd01hcmlvKGNvbnRleHQpIHtcclxuICAgICAgICBzcHJpdGUuZHJhdyhmcmFtZVJvdXRlKHRoaXMpLCBjb250ZXh0LCAwLCAwLCB0aGlzLmdvLmhlYWRpbmcgPCAwKTtcclxuICAgIH1cclxuXHJcbiAgICByZXR1cm4gZnVuY3Rpb24gY3JlYXRlTWFyaW8oKSB7XHJcbiAgICAgICAgY29uc3QgbWFyaW8gPSBuZXcgRW50aXR5KCk7XHJcbiAgICAgICAgbWFyaW8uc2l6ZS5zZXQoMTQsIDE2KTtcclxuXHJcbiAgICAgICAgbWFyaW8uYWRkVHJhaXQobmV3IFBoeXNpY3MoKSk7XHJcbiAgICAgICAgbWFyaW8uYWRkVHJhaXQobmV3IFNvbGlkKCkpO1xyXG4gICAgICAgIG1hcmlvLmFkZFRyYWl0KG5ldyBHbygpKTtcclxuICAgICAgICBtYXJpby5hZGRUcmFpdChuZXcgSnVtcCgpKTtcclxuICAgICAgICBtYXJpby5hZGRUcmFpdChuZXcgU3RvbWVyKCkpO1xyXG4gICAgICAgIG1hcmlvLmFkZFRyYWl0KG5ldyBLaWxsYWJsZSgpKTtcclxuICAgICAgICAvLyBtYXJpby5hZGRUcmFpdChuZXcgUGxheWVyQ29udHJvbGxlcigpKTtcclxuXHJcbiAgICAgICAgbWFyaW8ua2lsbGFibGUucmVtb3ZlQWZ0ZXIgPSAwO1xyXG4gICAgICAgIC8vIG1hcmlvLnBsYXllckNvbnRyb2xsZXIuc2V0UGxheWVyKG1hcmlvKTtcclxuXHJcbiAgICAgICAgbWFyaW8uZHJhdyA9IGRyYXdNYXJpbztcclxuXHJcbiAgICAgICAgcmV0dXJuIG1hcmlvO1xyXG4gICAgfVxyXG59XHJcblxyXG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9wdWJsaWMvanMvZW50aXRpZXMvTWFyaW8uanMiLCJpbXBvcnQge1RyYWl0fSBmcm9tICcuLi9FbnRpdHkuanMnXHJcblxyXG4vKmV4dGVuZHMga2V5d29yZCBjYW4gYmUgdXNlZCB0byBpbmhlcml0IGFsbCB0aGUgcHJvcGVydGllcyBhbmQgbWV0aG9kcy4gKi9cclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgR28gZXh0ZW5kcyBUcmFpdCB7XHJcbiAgICBjb25zdHJ1Y3RvcigpIHtcclxuICAgICAgICAvKnN1cGVyIGtleXdvcmQgaW4gaGVyZSBtZWFucyB0aGUgZmF0aGVyIGNsYXNzJ3MgY29uc3RydWN0b3Igb2YgdGhpcyBjbGFzcy4gKi9cclxuICAgICAgICBzdXBlcignZ28nKTtcclxuXHJcbiAgICAgICAgdGhpcy5kaXIgPSAwO1xyXG4gICAgICAgIHRoaXMuYWNjZWxlcmF0aW9uID0gNDAwO1xyXG4gICAgICAgIHRoaXMuZGVjZWxlcmF0aW9uID0gMzAwO1xyXG4gICAgICAgIHRoaXMuZHJhZ0ZhY3RvciA9IDEvNTAwMDtcclxuXHJcbiAgICAgICAgdGhpcy5kaXN0YW5jZSA9IDA7XHJcbiAgICAgICAgdGhpcy5oZWFkaW5nID0gMTtcclxuICAgIH1cclxuXHJcbiAgICB1cGRhdGUoZW50aXR5LCBkZWx0YVRpbWUpIHtcclxuICAgICAgICBjb25zdCBhYnNYID0gTWF0aC5hYnMoZW50aXR5LnZlbC54KTtcclxuXHJcbiAgICAgICAgaWYgKHRoaXMuZGlyICE9PSAwKSB7XHJcbiAgICAgICAgICAgIGVudGl0eS52ZWwueCArPSB0aGlzLmFjY2VsZXJhdGlvbiAqIGRlbHRhVGltZSAqIHRoaXMuZGlyO1xyXG4gICAgICAgICAgICBpZiAoZW50aXR5Lmp1bXApIHtcclxuICAgICAgICAgICAgICAgIGlmICghZW50aXR5Lmp1bXAuZmFsbGluZykge1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuaGVhZGluZyA9IHRoaXMuZGlyO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5oZWFkaW5nID0gdGhpcy5kaXI7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9IGVsc2UgaWYgKGVudGl0eS52ZWwueCAhPT0gMCkge1xyXG4gICAgICAgICAgICBjb25zdCBkZWNlbCA9IE1hdGgubWluKGFic1gsIHRoaXMuZGVjZWxlcmF0aW9uICogZGVsdGFUaW1lKTtcclxuICAgICAgICAgICAgZW50aXR5LnZlbC54ICs9IGVudGl0eS52ZWwueCA+IDAgPyAtZGVjZWwgOiBkZWNlbDtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICB0aGlzLmRpc3RhbmNlID0gMDtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGNvbnN0IGRyYWcgPSB0aGlzLmRyYWdGYWN0b3IgKiBlbnRpdHkudmVsLnggKiBhYnNYO1xyXG4gICAgICAgIGVudGl0eS52ZWwueCAtPSBkcmFnO1xyXG5cclxuICAgICAgICB0aGlzLmRpc3RhbmNlICs9IGFic1ggKiBkZWx0YVRpbWU7XHJcbiAgICB9XHJcbn1cclxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vcHVibGljL2pzL3RyYWl0cy9Hby5qcyIsImltcG9ydCB7U2lkZXMsIFRyYWl0fSBmcm9tICcuLi9FbnRpdHkuanMnXHJcblxyXG4vKmV4dGVuZHMga2V5d29yZCBjYW4gYmUgdXNlZCB0byBpbmhlcml0IGFsbCB0aGUgcHJvcGVydGllcyBhbmQgbWV0aG9kcy4gKi9cclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgSnVtcCBleHRlbmRzIFRyYWl0IHtcclxuICAgIGNvbnN0cnVjdG9yKCkge1xyXG4gICAgICAgIC8qc3VwZXIga2V5d29yZCBpbiBoZXJlIG1lYW5zIHRoZSBmYXRoZXIgY2xhc3MncyBjb25zdHJ1Y3RvciBvZiB0aGlzIGNsYXNzLiAqL1xyXG4gICAgICAgIHN1cGVyKCdqdW1wJyk7XHJcblxyXG4gICAgICAgIHRoaXMuZHVyYXRpb24gPSAwLjM7XHJcbiAgICAgICAgdGhpcy52ZWxvY2l0eSA9IDIwMDtcclxuICAgICAgICB0aGlzLmVuZ2FnZVRpbWUgPSAwOyAvLyB0b3RhbCB0aW1lIGFsbG93IHRvICBwcmVzc2luZyBrZXlcclxuICAgICAgICB0aGlzLnJlYWR5ID0gMDtcclxuICAgICAgICB0aGlzLmdyYWNlUGVyaW9kID0gMC4xO1xyXG4gICAgICAgIHRoaXMucmVxdWVzdFRpbWUgPSAwO1xyXG4gICAgICAgIHRoaXMuc3BlZWRCb29zdCA9IDAuMztcclxuICAgIH1cclxuXHJcbiAgICBnZXQgZmFsbGluZygpIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5yZWFkeSA8IDA7XHJcbiAgICB9XHJcblxyXG4gICAgc3RhcnQoKSB7XHJcbiAgICAgICAgLy8gaWYgKHRoaXMucmVhZHkgPiAwKSB7XHJcbiAgICAgICAgLy8gICAgIHRoaXMuZW5nYWdlVGltZSA9IHRoaXMuZHVyYXRpb247XHJcbiAgICAgICAgLy8gfVxyXG4gICAgICAgIHRoaXMucmVxdWVzdFRpbWUgPSB0aGlzLmdyYWNlUGVyaW9kO1xyXG4gICAgfVxyXG5cclxuICAgIGNhbmNlbCgpIHtcclxuICAgICAgICB0aGlzLmVuZ2FnZVRpbWUgPSAwO1xyXG4gICAgICAgIHRoaXMucmVxdWVzdFRpbWUgPSAwO1xyXG4gICAgfVxyXG5cclxuICAgIG9ic3RydWN0KGVudGl0eSwgc2lkZSkge1xyXG4gICAgICAgIGlmIChzaWRlID09PSBTaWRlcy5CT1RUT00pIHtcclxuICAgICAgICAgICAgdGhpcy5yZWFkeSA9IDE7XHJcbiAgICAgICAgfSBlbHNlIGlmIChzaWRlID09PSBTaWRlcy5UT1ApIHtcclxuICAgICAgICAgICAgdGhpcy5jYW5jZWwoKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgdXBkYXRlKGVudGl0eSwgZGVsdGFUaW1lKSB7XHJcbiAgICAgICAgaWYgKHRoaXMucmVxdWVzdFRpbWUgPiAwKSB7XHJcbiAgICAgICAgICAgIGlmICh0aGlzLnJlYWR5ID4gMCkge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5lbmdhZ2VUaW1lID0gdGhpcy5kdXJhdGlvbjtcclxuICAgICAgICAgICAgICAgIHRoaXMucmVxdWVzdFRpbWUgPSAwO1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICB0aGlzLnJlcXVlc3RUaW1lIC09IGRlbHRhVGltZTtcclxuICAgICAgICB9XHJcblxyXG5cclxuICAgICAgICBpZiAodGhpcy5lbmdhZ2VUaW1lID4gMCkge1xyXG4gICAgICAgICAgICBlbnRpdHkudmVsLnkgPSAtKHRoaXMudmVsb2NpdHkgKyBNYXRoLmFicyhlbnRpdHkudmVsLngpICogdGhpcy5zcGVlZEJvb3N0KTtcclxuICAgICAgICAgICAgLypJZiBrZWVwIHByZXNzaW5nIHRoZSBrZXksIHRoZSBlbmdhZ2VUaW1lICh0b3RhbCB0aW1lIGFsbG93IHRvICBwcmVzc2luZyBrZXkgKSB3aWxsIGRlY3JlYXNlIGluIGEgcm93IHVudGlsIGxlc3MgdGhhbiAwLCB3aGljaCBtZWFucyB0aGUgdG90YWwgdGltZSBvZiBwcmVzc2luZyBhIGtleSBpcyBiaWdnZXIgdGhhbiB0aGUgYWxsb3cgZHVyYXRpb24oIHRoaXMuIGR1cmF0aW9uID0gMC41IChzZWNvbmQpKSwgc28gdGhlIGVudGl0eS52ZWwueSBzaG91bGQgbm90IGRlY3JlYXNlIGFueW1vcmUsIGluIG90aGVyIHdvcmRzLCB0aGUgbWFyaW8gc2hvdWxkIG5vdCB0cmF2ZWwgdXAgYW55bW9yZS4qL1xyXG4gICAgICAgICAgICB0aGlzLmVuZ2FnZVRpbWUgLT0gZGVsdGFUaW1lO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgLy8gY29uc29sZS5sb2coJ0lmIHdlIGFyZSByZWFkeSB0byBqdW1wPycsIHRoaXMucmVhZHkpXHJcbiAgICAgICAgdGhpcy5yZWFkeSAtLTtcclxuICAgIH1cclxufVxyXG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9wdWJsaWMvanMvdHJhaXRzL0p1bXAuanMiLCJpbXBvcnQge1RyYWl0fSBmcm9tICcuLi9FbnRpdHkuanMnXHJcblxyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBTdG9tZXIgZXh0ZW5kcyBUcmFpdCB7XHJcbiAgICBjb25zdHJ1Y3RvcigpIHtcclxuICAgICAgICBzdXBlcignc3RvbWVyJyk7XHJcbiAgICAgICAgdGhpcy5ib3VuY2VTcGVlZCA9IDQwMDtcclxuXHJcbiAgICAgICAgdGhpcy5vblN0b21wID0gZnVuY3Rpb24gKCkge1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBib3VuY2UodXMsIHRoZW0pIHtcclxuICAgICAgICB1cy5ib3VuZHMuYm90dG9tID0gdGhlbS5ib3VuZHMudG9wO1xyXG4gICAgICAgIHVzLnZlbC55ID0gLXRoaXMuYm91bmNlU3BlZWQ7XHJcbiAgICB9XHJcblxyXG4gICAgY29sbGlkZXModXMsIHRoZW0pIHtcclxuICAgICAgICAvKuatpOWkhOaYr+WQpuWPjeW8uei3s+i3g++8iGJvdW5jZe+8ieeahOWIpOaWreS4pemHjeS+nei1luS6i+S7tu+8iGtpbGzvvIxjb2xsaWRl562J77yJ55qE6Kem5Y+R6aG65bqP44CCXHJcbiAgICAgICAgKiDmiJHku6zlj6/ku6XpgInmi6npgJrov4fkuIDkupvnu4blvq7nmoTmlLnliqgtLS3mnaXosIPmlbTpobrluo/vvIzkvYbmmK/vvIHov4fkuo7kvp3otZbov5nnp43nu4blvq7nmoTmlLnliqjkuI3liKnku6XlkI7nu63pobnnm67nmoTmianlsZXjgIJcclxuICAgICAgICAqIOaJgOS7peaIkeS7rOmcgOimgeabtOWBpeWjrueahOino+WGs+aWueahiOOAgiovXHJcbiAgICAgICAgaWYgKCF0aGVtLmtpbGxhYmxlIHx8IHRoZW0ua2lsbGFibGUuZGVhZCkge1xyXG4gICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBpZiAoIHVzLnZlbC55ID4gdGhlbS52ZWwueSkge1xyXG4gICAgICAgICAgICB0aGlzLmJvdW5jZSh1cywgdGhlbSk7XHJcbiAgICAgICAgICAgIHRoaXMub25TdG9tcCh1cywgdGhlbSk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59XHJcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3B1YmxpYy9qcy90cmFpdHMvU3RvbWVyLmpzIiwiaW1wb3J0IEVudGl0eSwge1NpZGVzLCBUcmFpdH0gZnJvbSAnLi4vRW50aXR5LmpzJ1xyXG5pbXBvcnQge2xvYWRTcHJpdGVTaGVldH0gZnJvbSAnLi4vbG9hZGVyLmpzJztcclxuaW1wb3J0IFBlbmR1bHVtV2FsayBmcm9tICcuLi90cmFpdHMvUGVuZHVsdW1Nb3ZlLmpzJztcclxuaW1wb3J0IEtpbGxhYmxlIGZyb20gJy4uL3RyYWl0cy9LaWxsYWJsZS5qcyc7XHJcbmltcG9ydCBTb2xpZCBmcm9tICcuLi90cmFpdHMvU29saWQuanMnXHJcbmltcG9ydCBQaHlzaWNzIGZyb20gJy4uL3RyYWl0cy9QaHlzaWNzLmpzJ1xyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIGxvYWRHb29tYmEoKSB7XHJcbiAgICByZXR1cm4gbG9hZFNwcml0ZVNoZWV0KCdnb29tYmEnKVxyXG4gICAgICAgIC50aGVuKGNyZWF0ZUdvb21iYUZhY3RvcnkpXHJcbn1cclxuXHJcbmNsYXNzIEJlaGF2aW9yIGV4dGVuZHMgVHJhaXQge1xyXG4gICAgY29uc3RydWN0b3IoKSB7XHJcbiAgICAgICAgc3VwZXIoJ2JlaGF2aW9yJyk7XHJcbiAgICB9XHJcblxyXG4gICAgY29sbGlkZXModXMsIHRoZW0pIHtcclxuICAgICAgICAvLyB1cyBpcyBvdXIgZ29vbWJhLCB0aGVtIG9mdGVuIGFyZSBtYXJpby5cclxuICAgICAgICBpZiAodXMua2lsbGFibGUuZGVhZCkge1xyXG4gICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBpZiAodGhlbS5zdG9tZXIpIHtcclxuICAgICAgICAgICAgaWYgKHRoZW0udmVsLnkgPiB1cy52ZWwueSkge1xyXG4gICAgICAgICAgICAgICAgdXMua2lsbGFibGUua2lsbCgpO1xyXG4gICAgICAgICAgICAgICAgdXMucGVuZHVsdW1Nb3ZlLnNwZWVkID0gMDtcclxuICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgIHRoZW0ua2lsbGFibGUua2lsbCgpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59XHJcblxyXG5mdW5jdGlvbiBjcmVhdGVHb29tYmFGYWN0b3J5KHNwcml0ZSkge1xyXG4gICAgY29uc3Qgd2Fsa0FuaW0gPSBzcHJpdGUuYW5pbWF0aW9ucy5nZXQoJ3dhbGsnKTtcclxuXHJcbiAgICBmdW5jdGlvbiByb3V0ZUFuaW0oZ29vbWJhKSB7XHJcbiAgICAgICAgaWYgKGdvb21iYS5raWxsYWJsZS5kZWFkKSB7XHJcbiAgICAgICAgICAgIHJldHVybiAnZmxhdCc7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICByZXR1cm4gd2Fsa0FuaW0oZ29vbWJhLmxpZmVUaW1lKTtcclxuICAgIH1cclxuXHJcbiAgICBmdW5jdGlvbiBkcmF3R29vbWJhKGNvbnRleHQpIHtcclxuICAgICAgICBzcHJpdGUuZHJhdyhyb3V0ZUFuaW0odGhpcyksIGNvbnRleHQsIDAsIDApO1xyXG4gICAgfVxyXG5cclxuICAgIHJldHVybiBmdW5jdGlvbiBjcmVhdGVHb29tYmEoKSB7XHJcbiAgICAgICAgY29uc3QgZ29vbWJhID0gbmV3IEVudGl0eSgpO1xyXG4gICAgICAgIGdvb21iYS5zaXplLnNldCgxNiwgMTYpO1xyXG5cclxuICAgICAgICBnb29tYmEuYWRkVHJhaXQobmV3IFBoeXNpY3MoKSk7XHJcbiAgICAgICAgZ29vbWJhLmFkZFRyYWl0KG5ldyBTb2xpZCgpKTtcclxuICAgICAgICBnb29tYmEuYWRkVHJhaXQobmV3IFBlbmR1bHVtV2FsaygpKTtcclxuICAgICAgICBnb29tYmEuYWRkVHJhaXQobmV3IEJlaGF2aW9yKCkpO1xyXG4gICAgICAgIGdvb21iYS5hZGRUcmFpdChuZXcgS2lsbGFibGUoKSk7XHJcblxyXG4gICAgICAgIGdvb21iYS5kcmF3ID0gZHJhd0dvb21iYTtcclxuXHJcbiAgICAgICAgcmV0dXJuIGdvb21iYTtcclxuICAgIH1cclxufVxyXG5cclxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vcHVibGljL2pzL2VudGl0aWVzL0dvb21iYS5qcyIsImltcG9ydCBFbnRpdHksIHtTaWRlcywgVHJhaXR9IGZyb20gJy4uL0VudGl0eS5qcyc7XHJcbmltcG9ydCB7bG9hZFNwcml0ZVNoZWV0fSBmcm9tICcuLi9sb2FkZXIuanMnO1xyXG5pbXBvcnQgUGVuZHVsdW1XYWxrIGZyb20gJy4uL3RyYWl0cy9QZW5kdWx1bU1vdmUuanMnO1xyXG5pbXBvcnQgU29saWQgZnJvbSAnLi4vdHJhaXRzL1NvbGlkLmpzJ1xyXG5pbXBvcnQgUGh5c2ljcyBmcm9tICcuLi90cmFpdHMvUGh5c2ljcy5qcydcclxuaW1wb3J0IEtpbGxhYmxlIGZyb20gJy4uL3RyYWl0cy9LaWxsYWJsZS5qcyc7XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gbG9hZEtvb3BhKCkge1xyXG4gICAgcmV0dXJuIGxvYWRTcHJpdGVTaGVldCgna29vcGEnKVxyXG4gICAgICAgIC50aGVuKGNyZWF0ZUtvb3BhRmFjdG9yeSlcclxufVxyXG5cclxuY29uc3QgU1RBVEVfV0FMS0lORyA9IFN5bWJvbCgnd2Fsa2luZycpO1xyXG5jb25zdCBTVEFURV9ISURJTkcgPSBTeW1ib2woJ2hpZGluZycpO1xyXG5jb25zdCBTVEFURV9QQU5JQyA9IFN5bWJvbCgncGFuaWMnKTtcclxuXHJcbmNsYXNzIEJlaGF2aW9yIGV4dGVuZHMgVHJhaXQge1xyXG4gICAgY29uc3RydWN0b3IoKSB7XHJcbiAgICAgICAgc3VwZXIoJ2JlaGF2aW9yJyk7XHJcbiAgICAgICAgdGhpcy5zdGF0ZSA9IFNUQVRFX1dBTEtJTkc7XHJcbiAgICAgICAgdGhpcy5oaWRlVGltZSA9IDA7XHJcbiAgICAgICAgdGhpcy5oaWRlRHVyYXRpb24gPSAzO1xyXG4gICAgICAgIHRoaXMucGFuaWNTcGVlZCA9IDIwMDtcclxuICAgICAgICB0aGlzLndhbGtTcGVlZCA9IG51bGw7XHJcbiAgICB9XHJcblxyXG4gICAgY29sbGlkZXModXMsIHRoZW0pIHtcclxuICAgICAgICAvLyB1cyBpcyBvdXIgZ29vbWJhLCB0aGVtIG9mdGVuIGFyZSBtYXJpby5cclxuICAgICAgICBpZiAodXMua2lsbGFibGUuZGVhZCkge1xyXG4gICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBpZiAodGhlbS5zdG9tZXIpIHtcclxuICAgICAgICAgICAgaWYgKHRoZW0udmVsLnkgPiB1cy52ZWwueSkge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5oYW5kbGVTdGF0ZSh1cywgdGhlbSk7XHJcbiAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmhhbmRsZUtpY2sodXMsIHRoZW0pO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIGhhbmRsZUtpY2sodXMsIHRoZW0pIHtcclxuICAgICAgICBpZiAodGhpcy5zdGF0ZSA9PT0gU1RBVEVfV0FMS0lORykge1xyXG4gICAgICAgICAgICB0aGVtLmtpbGxhYmxlLmtpbGwoKTtcclxuICAgICAgICB9IGVsc2UgaWYgKHRoaXMuc3RhdGUgPT09IFNUQVRFX0hJRElORykge1xyXG4gICAgICAgICAgICB0aGlzLnBhbmljKHVzLCB0aGVtKTtcclxuICAgICAgICB9IGVsc2UgaWYgKHRoaXMuc3RhdGUgPT09IFNUQVRFX1BBTklDKSB7XHJcbiAgICAgICAgICAgIGNvbnN0IHRyYXZlbERpciA9IE1hdGguc2lnbih1cy52ZWwueCk7XHJcbiAgICAgICAgICAgIGNvbnN0IGltcGFjdERpciA9IE1hdGguc2lnbih1cy5wb3MueCAtIHRoZW0ucG9zLngpO1xyXG4gICAgICAgICAgICBpZiAodHJhdmVsRGlyICE9PSAwICYmIGltcGFjdERpciAhPT0gdHJhdmVsRGlyKSB7XHJcbiAgICAgICAgICAgICAgICB0aGVtLmtpbGxhYmxlLmtpbGwoKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBoYW5kbGVTdGF0ZSh1cywgdGhlbSkge1xyXG4gICAgICAgIGlmICh0aGlzLnN0YXRlID09PSBTVEFURV9XQUxLSU5HKSB7XHJcbiAgICAgICAgICAgIGlmICh1cy5wZW5kdWx1bU1vdmUuc3BlZWQgIT09IDApIHtcclxuICAgICAgICAgICAgICAgIHRoaXMud2Fsa1NwZWVkID0gdXMucGVuZHVsdW1Nb3ZlLnNwZWVkO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIHRoaXMuaGlkaW5nKHVzKTtcclxuICAgICAgICB9IGVsc2UgaWYgKHRoaXMuc3RhdGUgPT09IFNUQVRFX0hJRElORykge1xyXG4gICAgICAgICAgICB1cy5raWxsYWJsZS5raWxsKCk7XHJcbiAgICAgICAgICAgIHVzLnZlbC5zZXQoMTAwLCAtMjAwKTtcclxuICAgICAgICAgICAgdXMuc29saWQub2JzdHJ1Y3RzID0gZmFsc2U7XHJcbiAgICAgICAgfSBlbHNlIGlmICh0aGlzLnN0YXRlID09PSBTVEFURV9QQU5JQykge1xyXG4gICAgICAgICAgICB0aGlzLmhpZGluZyh1cyk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIGhpZGluZyh1cykge1xyXG4gICAgICAgIHVzLnZlbC54ID0gMDtcclxuICAgICAgICB1cy5wZW5kdWx1bU1vdmUuZW5hYmxlID0gZmFsc2U7XHJcbiAgICAgICAgdGhpcy5zdGF0ZSA9IFNUQVRFX0hJRElORztcclxuICAgIH1cclxuXHJcbiAgICB1bkhpZGUodXMpIHtcclxuICAgICAgICB1cy52ZWwueCA9IDEwMDtcclxuICAgICAgICB1cy5wZW5kdWx1bU1vdmUuZW5hYmxlID0gdHJ1ZTtcclxuICAgICAgICB1cy5wZW5kdWx1bU1vdmUuc3BlZWQgPSB0aGlzLndhbGtTcGVlZDtcclxuICAgICAgICB0aGlzLnN0YXRlID0gU1RBVEVfV0FMS0lORztcclxuICAgICAgICB0aGlzLmhpZGVUaW1lID0gMDtcclxuICAgIH1cclxuXHJcbiAgICBwYW5pYyh1cywgdGhlbSkge1xyXG4gICAgICAgIHVzLnBlbmR1bHVtTW92ZS5lbmFibGUgPSB0cnVlO1xyXG4gICAgICAgIHVzLnBlbmR1bHVtTW92ZS5zcGVlZCA9IHRoaXMucGFuaWNTcGVlZCAqIE1hdGguc2lnbih0aGVtLnZlbC54KTtcclxuICAgICAgICB0aGlzLnN0YXRlID0gU1RBVEVfUEFOSUM7XHJcbiAgICB9XHJcblxyXG4gICAgdXBkYXRlKHVzLCBkZWx0YVRpbWUpIHtcclxuICAgICAgICBpZiAodGhpcy5zdGF0ZSA9PT0gU1RBVEVfSElESU5HKSB7XHJcbiAgICAgICAgICAgIHRoaXMuaGlkZVRpbWUgKz0gZGVsdGFUaW1lO1xyXG5cclxuICAgICAgICAgICAgaWYgKHRoaXMuaGlkZVRpbWUgPiB0aGlzLmhpZGVEdXJhdGlvbikge1xyXG4gICAgICAgICAgICAgICAgdGhpcy51bkhpZGUodXMpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59XHJcblxyXG5mdW5jdGlvbiBjcmVhdGVLb29wYUZhY3Rvcnkoc3ByaXRlKSB7XHJcbiAgICBjb25zdCB3YWxrQW5pbSA9IHNwcml0ZS5hbmltYXRpb25zLmdldCgnd2FsaycpO1xyXG4gICAgY29uc3Qgd2FrZUFuaW0gPSBzcHJpdGUuYW5pbWF0aW9ucy5nZXQoJ3dha2UnKTtcclxuXHJcblxyXG4gICAgZnVuY3Rpb24gcm91dGVBbmltKGtvb3BhKSB7XHJcbiAgICAgICAgaWYgKGtvb3BhLmJlaGF2aW9yLnN0YXRlID09PSBTVEFURV9ISURJTkcpIHtcclxuICAgICAgICAgICAgaWYgKGtvb3BhLmJlaGF2aW9yLmhpZGVUaW1lID4gMikge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIHdha2VBbmltKGtvb3BhLmJlaGF2aW9yLmhpZGVUaW1lKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICByZXR1cm4gJ2hpZGluZyc7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmIChrb29wYS5iZWhhdmlvci5zdGF0ZSA9PT0gU1RBVEVfUEFOSUMpIHtcclxuICAgICAgICAgICAgcmV0dXJuICdoaWRpbmcnXHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICByZXR1cm4gd2Fsa0FuaW0oa29vcGEubGlmZVRpbWUpO1xyXG4gICAgfVxyXG5cclxuICAgIGZ1bmN0aW9uIGRyYXdLb29wYShjb250ZXh0KSB7XHJcbiAgICAgICAgc3ByaXRlLmRyYXcocm91dGVBbmltKHRoaXMpLCBjb250ZXh0LCAwLCAwLCB0aGlzLnZlbC54IDwgMCk7XHJcbiAgICB9XHJcblxyXG4gICAgcmV0dXJuIGZ1bmN0aW9uIGNyZWF0ZUtvb3BhKCkge1xyXG4gICAgICAgIGNvbnN0IGtvb3BhID0gbmV3IEVudGl0eSgpO1xyXG4gICAgICAgIGtvb3BhLnNpemUuc2V0KDE2LCAxNik7XHJcbiAgICAgICAga29vcGEub2Zmc2V0LnkgPSA4O1xyXG5cclxuICAgICAgICBrb29wYS5hZGRUcmFpdChuZXcgUGh5c2ljcygpKTtcclxuICAgICAgICBrb29wYS5hZGRUcmFpdChuZXcgU29saWQoKSk7XHJcbiAgICAgICAga29vcGEuYWRkVHJhaXQobmV3IFBlbmR1bHVtV2FsaygpKTtcclxuICAgICAgICBrb29wYS5hZGRUcmFpdChuZXcgQmVoYXZpb3IoKSk7XHJcbiAgICAgICAga29vcGEuYWRkVHJhaXQobmV3IEtpbGxhYmxlKCkpO1xyXG5cclxuICAgICAgICBrb29wYS5kcmF3ID0gZHJhd0tvb3BhO1xyXG5cclxuICAgICAgICByZXR1cm4ga29vcGE7XHJcbiAgICB9XHJcbn1cclxuXHJcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3B1YmxpYy9qcy9lbnRpdGllcy9Lb29wYS5qcyIsIm1vZHVsZS5leHBvcnRzID0geyBcImRlZmF1bHRcIjogcmVxdWlyZShcImNvcmUtanMvbGlicmFyeS9mbi9tYXRoL3NpZ25cIiksIF9fZXNNb2R1bGU6IHRydWUgfTtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL25vZGVfbW9kdWxlcy9fYmFiZWwtcnVudGltZUA2LjI2LjBAYmFiZWwtcnVudGltZS9jb3JlLWpzL21hdGgvc2lnbi5qc1xuLy8gbW9kdWxlIGlkID0gMTc4XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsInJlcXVpcmUoJy4uLy4uL21vZHVsZXMvZXM2Lm1hdGguc2lnbicpO1xubW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKCcuLi8uLi9tb2R1bGVzL19jb3JlJykuTWF0aC5zaWduO1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9ub2RlX21vZHVsZXMvX2NvcmUtanNAMi41LjNAY29yZS1qcy9saWJyYXJ5L2ZuL21hdGgvc2lnbi5qc1xuLy8gbW9kdWxlIGlkID0gMTc5XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIi8vIDIwLjIuMi4yOCBNYXRoLnNpZ24oeClcbnZhciAkZXhwb3J0ID0gcmVxdWlyZSgnLi9fZXhwb3J0Jyk7XG5cbiRleHBvcnQoJGV4cG9ydC5TLCAnTWF0aCcsIHsgc2lnbjogcmVxdWlyZSgnLi9fbWF0aC1zaWduJykgfSk7XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL25vZGVfbW9kdWxlcy9fY29yZS1qc0AyLjUuM0Bjb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9lczYubWF0aC5zaWduLmpzXG4vLyBtb2R1bGUgaWQgPSAxODBcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiLy8gMjAuMi4yLjI4IE1hdGguc2lnbih4KVxubW9kdWxlLmV4cG9ydHMgPSBNYXRoLnNpZ24gfHwgZnVuY3Rpb24gc2lnbih4KSB7XG4gIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby1zZWxmLWNvbXBhcmVcbiAgcmV0dXJuICh4ID0gK3gpID09IDAgfHwgeCAhPSB4ID8geCA6IHggPCAwID8gLTEgOiAxO1xufTtcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vbm9kZV9tb2R1bGVzL19jb3JlLWpzQDIuNS4zQGNvcmUtanMvbGlicmFyeS9tb2R1bGVzL19tYXRoLXNpZ24uanNcbi8vIG1vZHVsZSBpZCA9IDE4MVxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJpbXBvcnQge2FkZFBhZFN0YXJ0UG9seWZpbGx9IGZyb20gJy4uL3BvbHlmaWxscy9hZGRQYWRTdGFydC5qcyc7XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gY3JlYXRlRGFzaGJvYXJkTGF5ZXIoZm9udCwgcGxheWVyRW52KSB7XHJcbiAgICBjb25zdCBMSU5FMSA9IGZvbnQuc2l6ZTtcclxuICAgIGNvbnN0IExJTkUyID0gZm9udC5zaXplKjI7XHJcblxyXG4gICAgY29uc3QgY29pbnMgPSA5OTtcclxuXHJcbiAgICBhZGRQYWRTdGFydFBvbHlmaWxsKCk7XHJcblxyXG4gICAgcmV0dXJuIGZ1bmN0aW9uIGRyYXdEYXNoYm9hcmQoY29udGV4dCkge1xyXG4gICAgICAgIGNvbnN0IHt0aW1lLHNjb3JlfSA9IHBsYXllckVudi5wbGF5ZXJDb250cm9sbGVyO1xyXG4gICAgICAgIGZvbnQucHJpbnQoJ01BUklPJywgY29udGV4dCwxNiwgTElORTEpO1xyXG4gICAgICAgIGZvbnQucHJpbnQoc2NvcmUudG9TdHJpbmcoKS5wYWRTdGFydCg2LCAnMCcpLCBjb250ZXh0LDE2LCBMSU5FMik7XHJcblxyXG4gICAgICAgIGZvbnQucHJpbnQoJ0B4JyArIGNvaW5zLnRvU3RyaW5nKCkucGFkU3RhcnQoMiwgJzAnKSwgY29udGV4dCw5NiwgTElORTIpO1xyXG5cclxuICAgICAgICBmb250LnByaW50KCdXT1JMRCcsIGNvbnRleHQsMTUyLCBMSU5FMSk7XHJcbiAgICAgICAgZm9udC5wcmludCgnMS0xJywgY29udGV4dCwxNjAsIExJTkUyKTtcclxuXHJcbiAgICAgICAgZm9udC5wcmludCgnVElNRScsIGNvbnRleHQsMjA4LCBMSU5FMSk7XHJcbiAgICAgICAgZm9udC5wcmludCh0aW1lLnRvRml4ZWQoKS50b1N0cmluZygpLnBhZFN0YXJ0KDMsICcwJyksIGNvbnRleHQsMjE2LCBMSU5FMik7XHJcbiAgICAgICAgLy8gZm9udC5kcmF3KCdBJywgY29udGV4dCwgMCwgMCk7XHJcbiAgICB9XHJcbn1cclxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vcHVibGljL2pzL2xheWVycy9kYXNoYm9hcmQuanMiLCIvLyBodHRwczovL2dpdGh1Yi5jb20vdXhpdHRlbi9wb2x5ZmlsbC9ibG9iL21hc3Rlci9zdHJpbmcucG9seWZpbGwuanNcclxuLy8gaHR0cHM6Ly9kZXZlbG9wZXIubW96aWxsYS5vcmcvZW4tVVMvZG9jcy9XZWIvSmF2YVNjcmlwdC9SZWZlcmVuY2UvR2xvYmFsX09iamVjdHMvU3RyaW5nL3BhZFN0YXJ0XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gYWRkUGFkU3RhcnRQb2x5ZmlsbCgpIHtcclxuICAgIC8vIGFkZCBTdHJpbmcucHJvdG90eXBlLnBhZFN0YXJ0IGZvciBmaXJlZm94LXY0N1xyXG4gICAgaWYgKCFTdHJpbmcucHJvdG90eXBlLnBhZFN0YXJ0KSB7XHJcbiAgICAgICAgU3RyaW5nLnByb3RvdHlwZS5wYWRTdGFydCA9IGZ1bmN0aW9uIHBhZFN0YXJ0KHRhcmdldExlbmd0aCxwYWRTdHJpbmcpIHtcclxuICAgICAgICAgICAgdGFyZ2V0TGVuZ3RoID0gdGFyZ2V0TGVuZ3RoPj4wOyAvL2Zsb29yIGlmIG51bWJlciBvciBjb252ZXJ0IG5vbi1udW1iZXIgdG8gMDtcclxuICAgICAgICAgICAgcGFkU3RyaW5nID0gU3RyaW5nKHBhZFN0cmluZyB8fCAnICcpO1xyXG4gICAgICAgICAgICBpZiAodGhpcy5sZW5ndGggPiB0YXJnZXRMZW5ndGgpIHtcclxuICAgICAgICAgICAgICAgIHJldHVybiBTdHJpbmcodGhpcyk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgICAgICB0YXJnZXRMZW5ndGggPSB0YXJnZXRMZW5ndGgtdGhpcy5sZW5ndGg7XHJcbiAgICAgICAgICAgICAgICBpZiAodGFyZ2V0TGVuZ3RoID4gcGFkU3RyaW5nLmxlbmd0aCkge1xyXG4gICAgICAgICAgICAgICAgICAgIHBhZFN0cmluZyArPSBwYWRTdHJpbmcucmVwZWF0KHRhcmdldExlbmd0aC9wYWRTdHJpbmcubGVuZ3RoKTsgLy9hcHBlbmQgdG8gb3JpZ2luYWwgdG8gZW5zdXJlIHdlIGFyZSBsb25nZXIgdGhhbiBuZWVkZWRcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIHJldHVybiBwYWRTdHJpbmcuc2xpY2UoMCx0YXJnZXRMZW5ndGgpICsgU3RyaW5nKHRoaXMpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfTtcclxuICAgIH1cclxufVxyXG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9wdWJsaWMvanMvcG9seWZpbGxzL2FkZFBhZFN0YXJ0LmpzIiwiaW1wb3J0ICBrZXlCb2FyZCBmcm9tICcuL0tleWJvYXJkU3RhdGUuanMnXHJcblxyXG5leHBvcnQgZnVuY3Rpb24gc2V0dXBUb3VjaENvbnRyb2xsZXIoZW50aXR5KSB7XHJcbiAgICBjb25zdCBpbnB1dCA9IG5ldyBrZXlCb2FyZCgpO1xyXG5cclxuICAgIGlucHV0LmFkZE1hcHBpbmcoJ0Fycm93UmlnaHQnLCBrZXlTdGF0ZSA9PiB7XHJcbiAgICAgICAgZW50aXR5LmdvLmRpciArPSBrZXlTdGF0ZSA/IDEgOiAtMTtcclxuICAgIH0pO1xyXG5cclxuICAgIGlucHV0LmFkZE1hcHBpbmcoJ0Fycm93TGVmdCcsIGtleVN0YXRlID0+IHtcclxuICAgICAgICBlbnRpdHkuZ28uZGlyICs9IGtleVN0YXRlID8gLTEgOiAxO1xyXG4gICAgfSk7XHJcblxyXG4gICAgY29uc3QgY29udHJvbGxlckp1bXAgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnY29udHJvbGxlci1qdW1wJyk7XHJcbiAgICBjb25zdCBjb250cm9sbGVyTGVmdCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdjb250cm9sbGVyLWxlZnQnKTtcclxuXHJcbiAgICBjb250cm9sbGVySnVtcC5vbmNsaWNrID0gKGtleVN0YXRlKSA9PiB7XHJcbiAgICAgICAgaWYgKGtleVN0YXRlKSB7XHJcbiAgICAgICAgICAgIGVudGl0eS5qdW1wLnN0YXJ0KCk7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgZW50aXR5Lmp1bXAuY2FuY2VsKCk7XHJcbiAgICAgICAgfVxyXG4gICAgfTtcclxuXHJcbiAgICBjb250cm9sbGVyTGVmdC5vbnRvdWNoc3RhcnQgPSAoa2V5U3RhdGUpID0+IHtcclxuICAgICAgICBlbnRpdHkuZ28uZGlyICs9IDE7XHJcbiAgICB9O1xyXG5cclxuICAgIGNvbnRyb2xsZXJMZWZ0Lm9udG91Y2hlbmQgPSAoa2V5U3RhdGUpID0+IHtcclxuICAgICAgICBlbnRpdHkuZ28uZGlyICs9IC0xO1xyXG4gICAgfTtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIHNldHVwS2V5Ym9hcmQoZW50aXR5KSB7XHJcbiAgICBjb25zdCBpbnB1dCA9IG5ldyBrZXlCb2FyZCgpO1xyXG5cclxuICAgIGlucHV0LmFkZE1hcHBpbmcoJ1NwYWNlJywga2V5U3RhdGUgPT4ge1xyXG4gICAgICAgIC8vIEZhbnRhc3RpYyEgLSDlppnvvIFcclxuICAgICAgICAvKkJ5IHN1Y2ggYSBmYW50YXN0aWMgQ2xhc3MsIG5vdyB3ZSB0YWtlIG92ZXIgdGhlIGV2ZW50IG9mIGtleSBib2FyZCBpbnB1dCxcclxuICAgICAgICAgc28gdGhhdCB3ZSBjYW4gZ2V0IGhvdyBsb25nIGEga2V5IGlzIHByZXNzZWQgYW5kIGRyYXcgdGhlIGNhbnZhcyBzZW1hbnRpY2FsbHkuKi9cclxuICAgICAgICBpZiAoa2V5U3RhdGUpIHtcclxuICAgICAgICAgICAgZW50aXR5Lmp1bXAuc3RhcnQoKTtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICBlbnRpdHkuanVtcC5jYW5jZWwoKTtcclxuICAgICAgICB9XHJcbiAgICB9KTtcclxuXHJcbiAgICBpbnB1dC5hZGRNYXBwaW5nKCdBcnJvd1VwJywga2V5U3RhdGUgPT4ge1xyXG4gICAgICAgIGlmIChrZXlTdGF0ZSkge1xyXG4gICAgICAgICAgICBlbnRpdHkuanVtcC5zdGFydCgpO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIGVudGl0eS5qdW1wLmNhbmNlbCgpO1xyXG4gICAgICAgIH1cclxuICAgIH0pO1xyXG5cclxuICAgIC8vIGlucHV0LmFkZE1hcHBpbmcoJ0tleU8nLCBrZXlTdGF0ZSA9PiB7XHJcbiAgICAvLyAgICAgLy8gRXA4IC0gVHVyYm8gTW9kZSwgSSB0aGluayBpdCBpcyB1bm5lY2Vzc2FyeS5cclxuICAgIC8vIH0pO1xyXG5cclxuICAgIGlucHV0LmFkZE1hcHBpbmcoJ0Fycm93UmlnaHQnLCBrZXlTdGF0ZSA9PiB7XHJcbiAgICAgICAgZW50aXR5LmdvLmRpciArPSBrZXlTdGF0ZSA/IDEgOiAtMTtcclxuICAgIH0pO1xyXG5cclxuICAgIGlucHV0LmFkZE1hcHBpbmcoJ0Fycm93TGVmdCcsIGtleVN0YXRlID0+IHtcclxuICAgICAgICBlbnRpdHkuZ28uZGlyICs9IGtleVN0YXRlID8gLTEgOiAxO1xyXG4gICAgfSk7XHJcblxyXG4gICAgcmV0dXJuIGlucHV0O1xyXG59XHJcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3B1YmxpYy9qcy9pbnB1dC9pbnB1dC5qcyIsImNvbnN0IFBSRVNTRUQgPSAxLCBSRUxFQVNFRCA9IDA7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBLZXlib2FyZFN0YXRlIHtcclxuICAgIGNvbnN0cnVjdG9yKCkge1xyXG4gICAgICAgIC8vIGhvbGQgdGhlIGN1cnJlbnQgc3RhdGUgb2YgYSBnaXZlbiBrZXlcclxuICAgICAgICB0aGlzLmtleVN0YXRlcyA9IG5ldyBNYXAoKTtcclxuXHJcbiAgICAgICAgLy8gaG9sZHMgdGhlIGNhbGxiYWNrIGZ1bmN0aW9ucyBmb3IgYSBrZXkgY29kZVxyXG4gICAgICAgIHRoaXMua2V5TWFwID0gbmV3IE1hcCgpXHJcbiAgICB9XHJcblxyXG4gICAgYWRkTWFwcGluZyhjb2RlLCBjYWxsQmFjaykge1xyXG4gICAgICAgIHRoaXMua2V5TWFwLnNldChjb2RlLCBjYWxsQmFjaylcclxuICAgIH1cclxuXHJcbiAgICBoYW5kbGVFdmVudChldmVudCkge1xyXG4gICAgICAgIGNvbnN0IHtjb2RlfSA9IGV2ZW50O1xyXG5cclxuICAgICAgICBpZiAoIXRoaXMua2V5TWFwLmhhcyhjb2RlKSkge1xyXG4gICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xyXG5cclxuICAgICAgICBjb25zdCBrZXlTdGF0ZSA9IGV2ZW50LnR5cGUgPT09ICdrZXlkb3duJyA/IFBSRVNTRUQgOiBSRUxFQVNFRDtcclxuXHJcbiAgICAgICAgaWYgKHRoaXMua2V5U3RhdGVzLmdldChjb2RlKSA9PT0ga2V5U3RhdGUpIHtcclxuICAgICAgICAgICAgLy8gYXZvaWQgdHJpZ2dlcmluZyBtdWx0aXBsZSB0aW1lc1xyXG4gICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICB0aGlzLmtleVN0YXRlcy5zZXQoY29kZSwga2V5U3RhdGUpO1xyXG5cclxuICAgICAgICB0aGlzLmtleU1hcC5nZXQoY29kZSkoa2V5U3RhdGUpO1xyXG4gICAgfVxyXG5cclxuICAgIGxpc3RlblRvKHdpbmRvdykge1xyXG4gICAgICAgIFsna2V5ZG93bicsICdrZXl1cCddLmZvckVhY2goZXZlbnROYW1lID0+IHtcclxuICAgICAgICAgICAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoZXZlbnROYW1lLCBldmVudCA9PiB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmhhbmRsZUV2ZW50KGV2ZW50KVxyXG4gICAgICAgICAgICB9KVxyXG4gICAgICAgIH0pXHJcbiAgICB9XHJcbn1cclxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vcHVibGljL2pzL2lucHV0L0tleWJvYXJkU3RhdGUuanMiXSwic291cmNlUm9vdCI6IiJ9