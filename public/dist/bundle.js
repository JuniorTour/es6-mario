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

var _defineProperty = __webpack_require__(115);

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

var _BoundingBox = __webpack_require__(125);

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

module.exports = { "default": __webpack_require__(127), __esModule: true };

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

var _setPrototypeOf = __webpack_require__(132);

var _setPrototypeOf2 = _interopRequireDefault(_setPrototypeOf);

var _create = __webpack_require__(136);

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

var $at = __webpack_require__(96)(true);

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

__webpack_require__(101);
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

module.exports = { "default": __webpack_require__(95), __esModule: true };

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

var _anim = __webpack_require__(163);

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
var dPs = __webpack_require__(98);
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

var _isIterable2 = __webpack_require__(108);

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
var $iterCreate = __webpack_require__(97);
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

module.exports = { "default": __webpack_require__(111), __esModule: true };

/***/ }),
/* 52 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = { "default": __webpack_require__(119), __esModule: true };

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

module.exports = __webpack_require__(93);


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
var arrayIndexOf = __webpack_require__(99)(false);
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
var invoke = __webpack_require__(104);
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

var _iterator = __webpack_require__(130);

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
var each = __webpack_require__(144)(0);
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
var from = __webpack_require__(148);
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

var _from = __webpack_require__(154);

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

module.exports = { "default": __webpack_require__(158), __esModule: true };

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

"use strict";


var _regenerator = __webpack_require__(61);

var _regenerator2 = _interopRequireDefault(_regenerator);

var _promise = __webpack_require__(22);

var _promise2 = _interopRequireDefault(_promise);

var _slicedToArray2 = __webpack_require__(36);

var _slicedToArray3 = _interopRequireDefault(_slicedToArray2);

var _asyncToGenerator2 = __webpack_require__(113);

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

var _Timer = __webpack_require__(114);

var _Timer2 = _interopRequireDefault(_Timer);

var _Camera = __webpack_require__(118);

var _Camera2 = _interopRequireDefault(_Camera);

var _Entity = __webpack_require__(6);

var _Entity2 = _interopRequireDefault(_Entity);

var _PlayerController = __webpack_require__(126);

var _PlayerController2 = _interopRequireDefault(_PlayerController);

var _level = __webpack_require__(139);

var _font = __webpack_require__(166);

var _entities = __webpack_require__(167);

var _dashboard = __webpack_require__(178);

var _input = __webpack_require__(180);

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

var canvas = document.getElementById('screen');
main(canvas);

/***/ }),
/* 93 */
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

module.exports = __webpack_require__(94);

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
/* 94 */
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
/* 95 */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(29);
__webpack_require__(16);
__webpack_require__(21);
__webpack_require__(103);
__webpack_require__(106);
__webpack_require__(107);
module.exports = __webpack_require__(2).Promise;


/***/ }),
/* 96 */
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
/* 97 */
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
/* 98 */
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
/* 99 */
/***/ (function(module, exports, __webpack_require__) {

// false -> Array#indexOf
// true  -> Array#includes
var toIObject = __webpack_require__(20);
var toLength = __webpack_require__(32);
var toAbsoluteIndex = __webpack_require__(100);
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
/* 100 */
/***/ (function(module, exports, __webpack_require__) {

var toInteger = __webpack_require__(38);
var max = Math.max;
var min = Math.min;
module.exports = function (index, length) {
  index = toInteger(index);
  return index < 0 ? max(index + length, 0) : min(index, length);
};


/***/ }),
/* 101 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var addToUnscopables = __webpack_require__(102);
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
/* 102 */
/***/ (function(module, exports) {

module.exports = function () { /* empty */ };


/***/ }),
/* 103 */
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
var microtask = __webpack_require__(105)();
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
/* 104 */
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
/* 105 */
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
/* 106 */
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
/* 107 */
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
/* 108 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = { "default": __webpack_require__(109), __esModule: true };

/***/ }),
/* 109 */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(21);
__webpack_require__(16);
module.exports = __webpack_require__(110);


/***/ }),
/* 110 */
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
/* 111 */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(21);
__webpack_require__(16);
module.exports = __webpack_require__(112);


/***/ }),
/* 112 */
/***/ (function(module, exports, __webpack_require__) {

var anObject = __webpack_require__(9);
var get = __webpack_require__(48);
module.exports = __webpack_require__(2).getIterator = function (it) {
  var iterFn = get(it);
  if (typeof iterFn != 'function') throw TypeError(it + ' is not iterable!');
  return anObject(iterFn.call(it));
};


/***/ }),
/* 113 */
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
/* 114 */
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
/* 115 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = { "default": __webpack_require__(116), __esModule: true };

/***/ }),
/* 116 */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(117);
var $Object = __webpack_require__(2).Object;
module.exports = function defineProperty(it, key, desc) {
  return $Object.defineProperty(it, key, desc);
};


/***/ }),
/* 117 */
/***/ (function(module, exports, __webpack_require__) {

var $export = __webpack_require__(3);
// 19.1.2.4 / 15.2.3.6 Object.defineProperty(O, P, Attributes)
$export($export.S + $export.F * !__webpack_require__(10), 'Object', { defineProperty: __webpack_require__(7).f });


/***/ }),
/* 118 */
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
/* 119 */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(120);
__webpack_require__(29);
__webpack_require__(123);
__webpack_require__(124);
module.exports = __webpack_require__(2).Symbol;


/***/ }),
/* 120 */
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
var enumKeys = __webpack_require__(121);
var isArray = __webpack_require__(78);
var anObject = __webpack_require__(9);
var isObject = __webpack_require__(8);
var toIObject = __webpack_require__(20);
var toPrimitive = __webpack_require__(42);
var createDesc = __webpack_require__(24);
var _create = __webpack_require__(31);
var gOPNExt = __webpack_require__(122);
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
/* 121 */
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
/* 122 */
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
/* 123 */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(55)('asyncIterator');


/***/ }),
/* 124 */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(55)('observable');


/***/ }),
/* 125 */
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
/* 126 */
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
/* 127 */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(128);
module.exports = __webpack_require__(2).Object.getPrototypeOf;


/***/ }),
/* 128 */
/***/ (function(module, exports, __webpack_require__) {

// 19.1.2.9 Object.getPrototypeOf(O)
var toObject = __webpack_require__(34);
var $getPrototypeOf = __webpack_require__(67);

__webpack_require__(129)('getPrototypeOf', function () {
  return function getPrototypeOf(it) {
    return $getPrototypeOf(toObject(it));
  };
});


/***/ }),
/* 129 */
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
/* 130 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = { "default": __webpack_require__(131), __esModule: true };

/***/ }),
/* 131 */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(16);
__webpack_require__(21);
module.exports = __webpack_require__(54).f('iterator');


/***/ }),
/* 132 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = { "default": __webpack_require__(133), __esModule: true };

/***/ }),
/* 133 */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(134);
module.exports = __webpack_require__(2).Object.setPrototypeOf;


/***/ }),
/* 134 */
/***/ (function(module, exports, __webpack_require__) {

// 19.1.3.19 Object.setPrototypeOf(O, proto)
var $export = __webpack_require__(3);
$export($export.S, 'Object', { setPrototypeOf: __webpack_require__(135).set });


/***/ }),
/* 135 */
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
/* 136 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = { "default": __webpack_require__(137), __esModule: true };

/***/ }),
/* 137 */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(138);
var $Object = __webpack_require__(2).Object;
module.exports = function create(P, D) {
  return $Object.create(P, D);
};


/***/ }),
/* 138 */
/***/ (function(module, exports, __webpack_require__) {

var $export = __webpack_require__(3);
// 19.1.2.2 / 15.2.3.5 Object.create(O [, Properties])
$export($export.S, 'Object', { create: __webpack_require__(31) });


/***/ }),
/* 139 */
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

var _Level = __webpack_require__(140);

var _Level2 = _interopRequireDefault(_Level);

var _loader = __webpack_require__(28);

var _sprites = __webpack_require__(164);

var _background = __webpack_require__(165);

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
/* 140 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _set = __webpack_require__(141);

var _set2 = _interopRequireDefault(_set);

var _classCallCheck2 = __webpack_require__(0);

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = __webpack_require__(1);

var _createClass3 = _interopRequireDefault(_createClass2);

var _compositor = __webpack_require__(151);

var _compositor2 = _interopRequireDefault(_compositor);

var _EntityCollider = __webpack_require__(152);

var _EntityCollider2 = _interopRequireDefault(_EntityCollider);

var _TileCollider = __webpack_require__(153);

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
/* 141 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = { "default": __webpack_require__(142), __esModule: true };

/***/ }),
/* 142 */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(29);
__webpack_require__(16);
__webpack_require__(21);
__webpack_require__(143);
__webpack_require__(147);
__webpack_require__(149);
__webpack_require__(150);
module.exports = __webpack_require__(2).Set;


/***/ }),
/* 143 */
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
/* 144 */
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
var asc = __webpack_require__(145);
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
/* 145 */
/***/ (function(module, exports, __webpack_require__) {

// 9.4.2.3 ArraySpeciesCreate(originalArray, length)
var speciesConstructor = __webpack_require__(146);

module.exports = function (original, length) {
  return new (speciesConstructor(original))(length);
};


/***/ }),
/* 146 */
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
/* 147 */
/***/ (function(module, exports, __webpack_require__) {

// https://github.com/DavidBruant/Map-Set.prototype.toJSON
var $export = __webpack_require__(3);

$export($export.P + $export.R, 'Set', { toJSON: __webpack_require__(84)('Set') });


/***/ }),
/* 148 */
/***/ (function(module, exports, __webpack_require__) {

var forOf = __webpack_require__(27);

module.exports = function (iter, ITERATOR) {
  var result = [];
  forOf(iter, false, result.push, result, ITERATOR);
  return result;
};


/***/ }),
/* 149 */
/***/ (function(module, exports, __webpack_require__) {

// https://tc39.github.io/proposal-setmap-offrom/#sec-set.of
__webpack_require__(85)('Set');


/***/ }),
/* 150 */
/***/ (function(module, exports, __webpack_require__) {

// https://tc39.github.io/proposal-setmap-offrom/#sec-set.from
__webpack_require__(86)('Set');


/***/ }),
/* 151 */
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
/* 152 */
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
/* 153 */
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
/* 154 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = { "default": __webpack_require__(155), __esModule: true };

/***/ }),
/* 155 */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(16);
__webpack_require__(156);
module.exports = __webpack_require__(2).Array.from;


/***/ }),
/* 156 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var ctx = __webpack_require__(14);
var $export = __webpack_require__(3);
var toObject = __webpack_require__(34);
var call = __webpack_require__(69);
var isArrayIter = __webpack_require__(70);
var toLength = __webpack_require__(32);
var createProperty = __webpack_require__(157);
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
/* 157 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var $defineProperty = __webpack_require__(7);
var createDesc = __webpack_require__(24);

module.exports = function (object, index, value) {
  if (index in object) $defineProperty.f(object, index, createDesc(0, value));
  else object[index] = value;
};


/***/ }),
/* 158 */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(29);
__webpack_require__(16);
__webpack_require__(21);
__webpack_require__(159);
__webpack_require__(160);
__webpack_require__(161);
__webpack_require__(162);
module.exports = __webpack_require__(2).Map;


/***/ }),
/* 159 */
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
/* 160 */
/***/ (function(module, exports, __webpack_require__) {

// https://github.com/DavidBruant/Map-Set.prototype.toJSON
var $export = __webpack_require__(3);

$export($export.P + $export.R, 'Map', { toJSON: __webpack_require__(84)('Map') });


/***/ }),
/* 161 */
/***/ (function(module, exports, __webpack_require__) {

// https://tc39.github.io/proposal-setmap-offrom/#sec-map.of
__webpack_require__(85)('Map');


/***/ }),
/* 162 */
/***/ (function(module, exports, __webpack_require__) {

// https://tc39.github.io/proposal-setmap-offrom/#sec-map.from
__webpack_require__(86)('Map');


/***/ }),
/* 163 */
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
/* 164 */
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
/* 165 */
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
/* 166 */
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
/* 167 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _promise = __webpack_require__(22);

var _promise2 = _interopRequireDefault(_promise);

exports.loadEntities = loadEntities;

var _Mario = __webpack_require__(168);

var _Goomba = __webpack_require__(172);

var _Koopa = __webpack_require__(173);

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
/* 168 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.loadMario = loadMario;

var _Entity = __webpack_require__(6);

var _Entity2 = _interopRequireDefault(_Entity);

var _Go = __webpack_require__(169);

var _Go2 = _interopRequireDefault(_Go);

var _Jump = __webpack_require__(170);

var _Jump2 = _interopRequireDefault(_Jump);

var _Stomer = __webpack_require__(171);

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
/* 169 */
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
/* 170 */
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
/* 171 */
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
/* 172 */
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
/* 173 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _sign = __webpack_require__(174);

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
/* 174 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = { "default": __webpack_require__(175), __esModule: true };

/***/ }),
/* 175 */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(176);
module.exports = __webpack_require__(2).Math.sign;


/***/ }),
/* 176 */
/***/ (function(module, exports, __webpack_require__) {

// 20.2.2.28 Math.sign(x)
var $export = __webpack_require__(3);

$export($export.S, 'Math', { sign: __webpack_require__(177) });


/***/ }),
/* 177 */
/***/ (function(module, exports) {

// 20.2.2.28 Math.sign(x)
module.exports = Math.sign || function sign(x) {
  // eslint-disable-next-line no-self-compare
  return (x = +x) == 0 || x != x ? x : x < 0 ? -1 : 1;
};


/***/ }),
/* 178 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.createDashboardLayer = createDashboardLayer;

var _addPadStart = __webpack_require__(179);

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
/* 179 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.addPadStartPolyfill = addPadStartPolyfill;
// https://github.com/uxitten/polyfill/blob/master/string.polyfill.js
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/padStart

function addPadStartPolyfill() {
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
/* 180 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.setupKeyboard = setupKeyboard;

var _KeyboardState = __webpack_require__(181);

var _KeyboardState2 = _interopRequireDefault(_KeyboardState);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

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

    input.addMapping('KeyO', function (keyState) {
        // Ep8 - Turbo Mode, I think it is unnecessary.
    });

    input.addMapping('ArrowRight', function (keyState) {
        // entity.go.dir = keyState;
        entity.go.dir += keyState ? 1 : -1;
    });

    input.addMapping('ArrowLeft', function (keyState) {
        // entity.go.dir = -keyState;
        entity.go.dir += keyState ? -1 : 1;
    });

    return input;
}

/***/ }),
/* 181 */
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAgZWVkODE3MzdjMTJlZDQ1Zjk1NjQiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL19iYWJlbC1ydW50aW1lQDYuMjYuMEBiYWJlbC1ydW50aW1lL2hlbHBlcnMvY2xhc3NDYWxsQ2hlY2suanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL19iYWJlbC1ydW50aW1lQDYuMjYuMEBiYWJlbC1ydW50aW1lL2hlbHBlcnMvY3JlYXRlQ2xhc3MuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL19jb3JlLWpzQDIuNS4zQGNvcmUtanMvbGlicmFyeS9tb2R1bGVzL19jb3JlLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9fY29yZS1qc0AyLjUuM0Bjb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9fZXhwb3J0LmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9fY29yZS1qc0AyLjUuM0Bjb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9fd2tzLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9fY29yZS1qc0AyLjUuM0Bjb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9fZ2xvYmFsLmpzIiwid2VicGFjazovLy8uL3B1YmxpYy9qcy9FbnRpdHkuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL19jb3JlLWpzQDIuNS4zQGNvcmUtanMvbGlicmFyeS9tb2R1bGVzL19vYmplY3QtZHAuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL19jb3JlLWpzQDIuNS4zQGNvcmUtanMvbGlicmFyeS9tb2R1bGVzL19pcy1vYmplY3QuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL19jb3JlLWpzQDIuNS4zQGNvcmUtanMvbGlicmFyeS9tb2R1bGVzL19hbi1vYmplY3QuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL19jb3JlLWpzQDIuNS4zQGNvcmUtanMvbGlicmFyeS9tb2R1bGVzL19kZXNjcmlwdG9ycy5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvX2JhYmVsLXJ1bnRpbWVANi4yNi4wQGJhYmVsLXJ1bnRpbWUvY29yZS1qcy9vYmplY3QvZ2V0LXByb3RvdHlwZS1vZi5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvX2JhYmVsLXJ1bnRpbWVANi4yNi4wQGJhYmVsLXJ1bnRpbWUvaGVscGVycy9wb3NzaWJsZUNvbnN0cnVjdG9yUmV0dXJuLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9fYmFiZWwtcnVudGltZUA2LjI2LjBAYmFiZWwtcnVudGltZS9oZWxwZXJzL2luaGVyaXRzLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9fY29yZS1qc0AyLjUuM0Bjb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9fY3R4LmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9fY29yZS1qc0AyLjUuM0Bjb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9faGlkZS5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvX2NvcmUtanNAMi41LjNAY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvZXM2LnN0cmluZy5pdGVyYXRvci5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvX2NvcmUtanNAMi41LjNAY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX2hhcy5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvX2NvcmUtanNAMi41LjNAY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX2ZhaWxzLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9fY29yZS1qc0AyLjUuM0Bjb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9faXRlcmF0b3JzLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9fY29yZS1qc0AyLjUuM0Bjb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9fdG8taW9iamVjdC5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvX2NvcmUtanNAMi41LjNAY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvd2ViLmRvbS5pdGVyYWJsZS5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvX2JhYmVsLXJ1bnRpbWVANi4yNi4wQGJhYmVsLXJ1bnRpbWUvY29yZS1qcy9wcm9taXNlLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9fY29yZS1qc0AyLjUuM0Bjb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9fYS1mdW5jdGlvbi5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvX2NvcmUtanNAMi41LjNAY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX3Byb3BlcnR5LWRlc2MuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL19jb3JlLWpzQDIuNS4zQGNvcmUtanMvbGlicmFyeS9tb2R1bGVzL19jb2YuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL19jb3JlLWpzQDIuNS4zQGNvcmUtanMvbGlicmFyeS9tb2R1bGVzL19zZXQtdG8tc3RyaW5nLXRhZy5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvX2NvcmUtanNAMi41LjNAY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX2Zvci1vZi5qcyIsIndlYnBhY2s6Ly8vLi9wdWJsaWMvanMvbG9hZGVyLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9fY29yZS1qc0AyLjUuM0Bjb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9fbGlicmFyeS5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvX2NvcmUtanNAMi41LjNAY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX29iamVjdC1jcmVhdGUuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL19jb3JlLWpzQDIuNS4zQGNvcmUtanMvbGlicmFyeS9tb2R1bGVzL190by1sZW5ndGguanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL19jb3JlLWpzQDIuNS4zQGNvcmUtanMvbGlicmFyeS9tb2R1bGVzL191aWQuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL19jb3JlLWpzQDIuNS4zQGNvcmUtanMvbGlicmFyeS9tb2R1bGVzL190by1vYmplY3QuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL19jb3JlLWpzQDIuNS4zQGNvcmUtanMvbGlicmFyeS9tb2R1bGVzL19jbGFzc29mLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9fYmFiZWwtcnVudGltZUA2LjI2LjBAYmFiZWwtcnVudGltZS9oZWxwZXJzL3NsaWNlZFRvQXJyYXkuanMiLCJ3ZWJwYWNrOi8vLy4vcHVibGljL2pzL21hdGguanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL19jb3JlLWpzQDIuNS4zQGNvcmUtanMvbGlicmFyeS9tb2R1bGVzL190by1pbnRlZ2VyLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9fY29yZS1qc0AyLjUuM0Bjb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9fZGVmaW5lZC5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvX2NvcmUtanNAMi41LjNAY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX2l0ZXItZGVmaW5lLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9fY29yZS1qc0AyLjUuM0Bjb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9fZG9tLWNyZWF0ZS5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvX2NvcmUtanNAMi41LjNAY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX3RvLXByaW1pdGl2ZS5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvX2NvcmUtanNAMi41LjNAY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX29iamVjdC1rZXlzLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9fY29yZS1qc0AyLjUuM0Bjb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9fc2hhcmVkLWtleS5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvX2NvcmUtanNAMi41LjNAY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX3NoYXJlZC5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvX2NvcmUtanNAMi41LjNAY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX2VudW0tYnVnLWtleXMuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL19jb3JlLWpzQDIuNS4zQGNvcmUtanMvbGlicmFyeS9tb2R1bGVzL19hbi1pbnN0YW5jZS5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvX2NvcmUtanNAMi41LjNAY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvY29yZS5nZXQtaXRlcmF0b3ItbWV0aG9kLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9fY29yZS1qc0AyLjUuM0Bjb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9fbmV3LXByb21pc2UtY2FwYWJpbGl0eS5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvX2NvcmUtanNAMi41LjNAY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX3JlZGVmaW5lLWFsbC5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvX2JhYmVsLXJ1bnRpbWVANi4yNi4wQGJhYmVsLXJ1bnRpbWUvY29yZS1qcy9nZXQtaXRlcmF0b3IuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL19iYWJlbC1ydW50aW1lQDYuMjYuMEBiYWJlbC1ydW50aW1lL2NvcmUtanMvc3ltYm9sLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9fY29yZS1qc0AyLjUuM0Bjb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9fbWV0YS5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvX2NvcmUtanNAMi41LjNAY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX3drcy1leHQuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL19jb3JlLWpzQDIuNS4zQGNvcmUtanMvbGlicmFyeS9tb2R1bGVzL193a3MtZGVmaW5lLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9fY29yZS1qc0AyLjUuM0Bjb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9fb2JqZWN0LXBpZS5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvX2NvcmUtanNAMi41LjNAY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX3ZhbGlkYXRlLWNvbGxlY3Rpb24uanMiLCJ3ZWJwYWNrOi8vLy4vcHVibGljL2pzL3RyYWl0cy9LaWxsYWJsZS5qcyIsIndlYnBhY2s6Ly8vLi9wdWJsaWMvanMvdHJhaXRzL1NvbGlkLmpzIiwid2VicGFjazovLy8uL3B1YmxpYy9qcy90cmFpdHMvUGh5c2ljcy5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvX2JhYmVsLXJ1bnRpbWVANi4yNi4wQGJhYmVsLXJ1bnRpbWUvcmVnZW5lcmF0b3IvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL19jb3JlLWpzQDIuNS4zQGNvcmUtanMvbGlicmFyeS9tb2R1bGVzL19pZTgtZG9tLWRlZmluZS5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvX2NvcmUtanNAMi41LjNAY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX3JlZGVmaW5lLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9fY29yZS1qc0AyLjUuM0Bjb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9fb2JqZWN0LWtleXMtaW50ZXJuYWwuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL19jb3JlLWpzQDIuNS4zQGNvcmUtanMvbGlicmFyeS9tb2R1bGVzL19pb2JqZWN0LmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9fY29yZS1qc0AyLjUuM0Bjb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9faHRtbC5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvX2NvcmUtanNAMi41LjNAY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX29iamVjdC1ncG8uanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL19jb3JlLWpzQDIuNS4zQGNvcmUtanMvbGlicmFyeS9tb2R1bGVzL19pdGVyLXN0ZXAuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL19jb3JlLWpzQDIuNS4zQGNvcmUtanMvbGlicmFyeS9tb2R1bGVzL19pdGVyLWNhbGwuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL19jb3JlLWpzQDIuNS4zQGNvcmUtanMvbGlicmFyeS9tb2R1bGVzL19pcy1hcnJheS1pdGVyLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9fY29yZS1qc0AyLjUuM0Bjb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9fc3BlY2llcy1jb25zdHJ1Y3Rvci5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvX2NvcmUtanNAMi41LjNAY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX3Rhc2suanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL19jb3JlLWpzQDIuNS4zQGNvcmUtanMvbGlicmFyeS9tb2R1bGVzL19wZXJmb3JtLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9fY29yZS1qc0AyLjUuM0Bjb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9fcHJvbWlzZS1yZXNvbHZlLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9fY29yZS1qc0AyLjUuM0Bjb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9fc2V0LXNwZWNpZXMuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL19jb3JlLWpzQDIuNS4zQGNvcmUtanMvbGlicmFyeS9tb2R1bGVzL19pdGVyLWRldGVjdC5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvX2NvcmUtanNAMi41LjNAY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX29iamVjdC1nb3BzLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9fY29yZS1qc0AyLjUuM0Bjb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9faXMtYXJyYXkuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL19jb3JlLWpzQDIuNS4zQGNvcmUtanMvbGlicmFyeS9tb2R1bGVzL19vYmplY3QtZ29wbi5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvX2NvcmUtanNAMi41LjNAY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX29iamVjdC1nb3BkLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9fYmFiZWwtcnVudGltZUA2LjI2LjBAYmFiZWwtcnVudGltZS9oZWxwZXJzL3R5cGVvZi5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvX2NvcmUtanNAMi41LjNAY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX2NvbGxlY3Rpb24tc3Ryb25nLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9fY29yZS1qc0AyLjUuM0Bjb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9fY29sbGVjdGlvbi5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvX2NvcmUtanNAMi41LjNAY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX2NvbGxlY3Rpb24tdG8tanNvbi5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvX2NvcmUtanNAMi41LjNAY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX3NldC1jb2xsZWN0aW9uLW9mLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9fY29yZS1qc0AyLjUuM0Bjb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9fc2V0LWNvbGxlY3Rpb24tZnJvbS5qcyIsIndlYnBhY2s6Ly8vLi9wdWJsaWMvanMvVGlsZVJlc29sdmVyLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9fYmFiZWwtcnVudGltZUA2LjI2LjBAYmFiZWwtcnVudGltZS9oZWxwZXJzL3RvQ29uc3VtYWJsZUFycmF5LmpzIiwid2VicGFjazovLy8uL3B1YmxpYy9qcy9TcHJpdGVTaGVldC5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvX2JhYmVsLXJ1bnRpbWVANi4yNi4wQGJhYmVsLXJ1bnRpbWUvY29yZS1qcy9tYXAuanMiLCJ3ZWJwYWNrOi8vLy4vcHVibGljL2pzL3RyYWl0cy9QZW5kdWx1bU1vdmUuanMiLCJ3ZWJwYWNrOi8vLy4vcHVibGljL2pzL21haW4uanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL19yZWdlbmVyYXRvci1ydW50aW1lQDAuMTEuMUByZWdlbmVyYXRvci1ydW50aW1lL3J1bnRpbWUtbW9kdWxlLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9fcmVnZW5lcmF0b3ItcnVudGltZUAwLjExLjFAcmVnZW5lcmF0b3ItcnVudGltZS9ydW50aW1lLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9fY29yZS1qc0AyLjUuM0Bjb3JlLWpzL2xpYnJhcnkvZm4vcHJvbWlzZS5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvX2NvcmUtanNAMi41LjNAY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX3N0cmluZy1hdC5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvX2NvcmUtanNAMi41LjNAY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX2l0ZXItY3JlYXRlLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9fY29yZS1qc0AyLjUuM0Bjb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9fb2JqZWN0LWRwcy5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvX2NvcmUtanNAMi41LjNAY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX2FycmF5LWluY2x1ZGVzLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9fY29yZS1qc0AyLjUuM0Bjb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9fdG8tYWJzb2x1dGUtaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL19jb3JlLWpzQDIuNS4zQGNvcmUtanMvbGlicmFyeS9tb2R1bGVzL2VzNi5hcnJheS5pdGVyYXRvci5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvX2NvcmUtanNAMi41LjNAY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX2FkZC10by11bnNjb3BhYmxlcy5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvX2NvcmUtanNAMi41LjNAY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvZXM2LnByb21pc2UuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL19jb3JlLWpzQDIuNS4zQGNvcmUtanMvbGlicmFyeS9tb2R1bGVzL19pbnZva2UuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL19jb3JlLWpzQDIuNS4zQGNvcmUtanMvbGlicmFyeS9tb2R1bGVzL19taWNyb3Rhc2suanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL19jb3JlLWpzQDIuNS4zQGNvcmUtanMvbGlicmFyeS9tb2R1bGVzL2VzNy5wcm9taXNlLmZpbmFsbHkuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL19jb3JlLWpzQDIuNS4zQGNvcmUtanMvbGlicmFyeS9tb2R1bGVzL2VzNy5wcm9taXNlLnRyeS5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvX2JhYmVsLXJ1bnRpbWVANi4yNi4wQGJhYmVsLXJ1bnRpbWUvY29yZS1qcy9pcy1pdGVyYWJsZS5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvX2NvcmUtanNAMi41LjNAY29yZS1qcy9saWJyYXJ5L2ZuL2lzLWl0ZXJhYmxlLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9fY29yZS1qc0AyLjUuM0Bjb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9jb3JlLmlzLWl0ZXJhYmxlLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9fY29yZS1qc0AyLjUuM0Bjb3JlLWpzL2xpYnJhcnkvZm4vZ2V0LWl0ZXJhdG9yLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9fY29yZS1qc0AyLjUuM0Bjb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9jb3JlLmdldC1pdGVyYXRvci5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvX2JhYmVsLXJ1bnRpbWVANi4yNi4wQGJhYmVsLXJ1bnRpbWUvaGVscGVycy9hc3luY1RvR2VuZXJhdG9yLmpzIiwid2VicGFjazovLy8uL3B1YmxpYy9qcy9UaW1lci5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvX2JhYmVsLXJ1bnRpbWVANi4yNi4wQGJhYmVsLXJ1bnRpbWUvY29yZS1qcy9vYmplY3QvZGVmaW5lLXByb3BlcnR5LmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9fY29yZS1qc0AyLjUuM0Bjb3JlLWpzL2xpYnJhcnkvZm4vb2JqZWN0L2RlZmluZS1wcm9wZXJ0eS5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvX2NvcmUtanNAMi41LjNAY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvZXM2Lm9iamVjdC5kZWZpbmUtcHJvcGVydHkuanMiLCJ3ZWJwYWNrOi8vLy4vcHVibGljL2pzL0NhbWVyYS5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvX2NvcmUtanNAMi41LjNAY29yZS1qcy9saWJyYXJ5L2ZuL3N5bWJvbC9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvX2NvcmUtanNAMi41LjNAY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvZXM2LnN5bWJvbC5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvX2NvcmUtanNAMi41LjNAY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX2VudW0ta2V5cy5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvX2NvcmUtanNAMi41LjNAY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX29iamVjdC1nb3BuLWV4dC5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvX2NvcmUtanNAMi41LjNAY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvZXM3LnN5bWJvbC5hc3luYy1pdGVyYXRvci5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvX2NvcmUtanNAMi41LjNAY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvZXM3LnN5bWJvbC5vYnNlcnZhYmxlLmpzIiwid2VicGFjazovLy8uL3B1YmxpYy9qcy9Cb3VuZGluZ0JveC5qcyIsIndlYnBhY2s6Ly8vLi9wdWJsaWMvanMvdHJhaXRzL1BsYXllckNvbnRyb2xsZXIuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL19jb3JlLWpzQDIuNS4zQGNvcmUtanMvbGlicmFyeS9mbi9vYmplY3QvZ2V0LXByb3RvdHlwZS1vZi5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvX2NvcmUtanNAMi41LjNAY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvZXM2Lm9iamVjdC5nZXQtcHJvdG90eXBlLW9mLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9fY29yZS1qc0AyLjUuM0Bjb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9fb2JqZWN0LXNhcC5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvX2JhYmVsLXJ1bnRpbWVANi4yNi4wQGJhYmVsLXJ1bnRpbWUvY29yZS1qcy9zeW1ib2wvaXRlcmF0b3IuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL19jb3JlLWpzQDIuNS4zQGNvcmUtanMvbGlicmFyeS9mbi9zeW1ib2wvaXRlcmF0b3IuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL19iYWJlbC1ydW50aW1lQDYuMjYuMEBiYWJlbC1ydW50aW1lL2NvcmUtanMvb2JqZWN0L3NldC1wcm90b3R5cGUtb2YuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL19jb3JlLWpzQDIuNS4zQGNvcmUtanMvbGlicmFyeS9mbi9vYmplY3Qvc2V0LXByb3RvdHlwZS1vZi5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvX2NvcmUtanNAMi41LjNAY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvZXM2Lm9iamVjdC5zZXQtcHJvdG90eXBlLW9mLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9fY29yZS1qc0AyLjUuM0Bjb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9fc2V0LXByb3RvLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9fYmFiZWwtcnVudGltZUA2LjI2LjBAYmFiZWwtcnVudGltZS9jb3JlLWpzL29iamVjdC9jcmVhdGUuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL19jb3JlLWpzQDIuNS4zQGNvcmUtanMvbGlicmFyeS9mbi9vYmplY3QvY3JlYXRlLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9fY29yZS1qc0AyLjUuM0Bjb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9lczYub2JqZWN0LmNyZWF0ZS5qcyIsIndlYnBhY2s6Ly8vLi9wdWJsaWMvanMvbG9hZGVycy9sZXZlbC5qcyIsIndlYnBhY2s6Ly8vLi9wdWJsaWMvanMvTGV2ZWwuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL19iYWJlbC1ydW50aW1lQDYuMjYuMEBiYWJlbC1ydW50aW1lL2NvcmUtanMvc2V0LmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9fY29yZS1qc0AyLjUuM0Bjb3JlLWpzL2xpYnJhcnkvZm4vc2V0LmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9fY29yZS1qc0AyLjUuM0Bjb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9lczYuc2V0LmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9fY29yZS1qc0AyLjUuM0Bjb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9fYXJyYXktbWV0aG9kcy5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvX2NvcmUtanNAMi41LjNAY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX2FycmF5LXNwZWNpZXMtY3JlYXRlLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9fY29yZS1qc0AyLjUuM0Bjb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9fYXJyYXktc3BlY2llcy1jb25zdHJ1Y3Rvci5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvX2NvcmUtanNAMi41LjNAY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvZXM3LnNldC50by1qc29uLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9fY29yZS1qc0AyLjUuM0Bjb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9fYXJyYXktZnJvbS1pdGVyYWJsZS5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvX2NvcmUtanNAMi41LjNAY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvZXM3LnNldC5vZi5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvX2NvcmUtanNAMi41LjNAY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvZXM3LnNldC5mcm9tLmpzIiwid2VicGFjazovLy8uL3B1YmxpYy9qcy9jb21wb3NpdG9yLmpzIiwid2VicGFjazovLy8uL3B1YmxpYy9qcy9FbnRpdHlDb2xsaWRlci5qcyIsIndlYnBhY2s6Ly8vLi9wdWJsaWMvanMvVGlsZUNvbGxpZGVyLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9fYmFiZWwtcnVudGltZUA2LjI2LjBAYmFiZWwtcnVudGltZS9jb3JlLWpzL2FycmF5L2Zyb20uanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL19jb3JlLWpzQDIuNS4zQGNvcmUtanMvbGlicmFyeS9mbi9hcnJheS9mcm9tLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9fY29yZS1qc0AyLjUuM0Bjb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9lczYuYXJyYXkuZnJvbS5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvX2NvcmUtanNAMi41LjNAY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX2NyZWF0ZS1wcm9wZXJ0eS5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvX2NvcmUtanNAMi41LjNAY29yZS1qcy9saWJyYXJ5L2ZuL21hcC5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvX2NvcmUtanNAMi41LjNAY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvZXM2Lm1hcC5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvX2NvcmUtanNAMi41LjNAY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvZXM3Lm1hcC50by1qc29uLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9fY29yZS1qc0AyLjUuM0Bjb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9lczcubWFwLm9mLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9fY29yZS1qc0AyLjUuM0Bjb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9lczcubWFwLmZyb20uanMiLCJ3ZWJwYWNrOi8vLy4vcHVibGljL2pzL2FuaW0uanMiLCJ3ZWJwYWNrOi8vLy4vcHVibGljL2pzL2xheWVycy9zcHJpdGVzLmpzIiwid2VicGFjazovLy8uL3B1YmxpYy9qcy9sYXllcnMvYmFja2dyb3VuZC5qcyIsIndlYnBhY2s6Ly8vLi9wdWJsaWMvanMvbG9hZGVycy9mb250LmpzIiwid2VicGFjazovLy8uL3B1YmxpYy9qcy9lbnRpdGllcy5qcyIsIndlYnBhY2s6Ly8vLi9wdWJsaWMvanMvZW50aXRpZXMvTWFyaW8uanMiLCJ3ZWJwYWNrOi8vLy4vcHVibGljL2pzL3RyYWl0cy9Hby5qcyIsIndlYnBhY2s6Ly8vLi9wdWJsaWMvanMvdHJhaXRzL0p1bXAuanMiLCJ3ZWJwYWNrOi8vLy4vcHVibGljL2pzL3RyYWl0cy9TdG9tZXIuanMiLCJ3ZWJwYWNrOi8vLy4vcHVibGljL2pzL2VudGl0aWVzL0dvb21iYS5qcyIsIndlYnBhY2s6Ly8vLi9wdWJsaWMvanMvZW50aXRpZXMvS29vcGEuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL19iYWJlbC1ydW50aW1lQDYuMjYuMEBiYWJlbC1ydW50aW1lL2NvcmUtanMvbWF0aC9zaWduLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9fY29yZS1qc0AyLjUuM0Bjb3JlLWpzL2xpYnJhcnkvZm4vbWF0aC9zaWduLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9fY29yZS1qc0AyLjUuM0Bjb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9lczYubWF0aC5zaWduLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9fY29yZS1qc0AyLjUuM0Bjb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9fbWF0aC1zaWduLmpzIiwid2VicGFjazovLy8uL3B1YmxpYy9qcy9sYXllcnMvZGFzaGJvYXJkLmpzIiwid2VicGFjazovLy8uL3B1YmxpYy9qcy9wb2x5ZmlsbHMvYWRkUGFkU3RhcnQuanMiLCJ3ZWJwYWNrOi8vLy4vcHVibGljL2pzL2lucHV0LmpzIiwid2VicGFjazovLy8uL3B1YmxpYy9qcy9LZXlib2FyZFN0YXRlLmpzIl0sIm5hbWVzIjpbIlNpZGVzIiwiTEVGVCIsIlJJR0hUIiwiQk9UVE9NIiwiVE9QIiwiVHJhaXQiLCJuYW1lIiwiTkFNRSIsInRhc2tzIiwiZm9yRWFjaCIsInRhc2siLCJsZW5ndGgiLCJwdXNoIiwidXMiLCJ0aGVtIiwiRW50aXR5IiwiY2FuQ29sbGlkZXMiLCJwb3MiLCJ2ZWwiLCJzaXplIiwib2Zmc2V0IiwiYm91bmRzIiwibGlmZVRpbWUiLCJ0cmFpdHMiLCJ0cmFpdCIsImZpbmFsaXplIiwiY2FuZGlkYXRlIiwiY29sbGlkZXMiLCJzaWRlIiwibWF0Y2giLCJvYnN0cnVjdCIsImRlbHRhVGltZSIsImxldmVsIiwidXBkYXRlIiwibG9hZEltYWdlIiwibG9hZEpTT04iLCJsb2FkU3ByaXRlU2hlZXQiLCJ1cmwiLCJpbWFnZSIsIkltYWdlIiwiYWRkRXZlbnRMaXN0ZW5lciIsInJlc29sdmUiLCJzcmMiLCJmZXRjaCIsInRoZW4iLCJyIiwianNvbiIsImFsbCIsInNoZWV0U3BlYyIsImltYWdlVVJMIiwic3ByaXRlcyIsInRpbGVXIiwidGlsZUgiLCJ0aWxlcyIsImRlZmluZVRpbGUiLCJ0aWxlU3BlYyIsImluZGV4IiwiZnJhbWVzIiwiZGVmaW5lIiwiZnJhbWVTcGVjIiwicmVjdCIsImFuaW1hdGlvbnMiLCJhbmltYXRpb24iLCJhbmltU3BlYyIsImZyYW1lTGVuIiwiZGVmaW5lQW5pbSIsIk1hdHJpeCIsImdyaWQiLCJjYWxsYmFjayIsImNvbHVtbiIsIngiLCJ2YWwiLCJ5IiwiY29sIiwidW5kZWZpbmVkIiwidmFsdWUiLCJWZWMyIiwic2V0IiwiS2lsbGFibGUiLCJkZWFkIiwiZGVhZFRpbWUiLCJyZW1vdmVBZnRlciIsInF1ZXVlIiwiZW50aXR5IiwiZW50aXRpZXMiLCJkZWxldGUiLCJTb2xpZCIsIm9ic3RydWN0cyIsInNpZGVzIiwidG9wIiwieTEiLCJ5MiIsImxlZnQiLCJ4MSIsIngyIiwiUGh5c2ljcyIsInRpbGVDb2xsaWRlciIsImNoZWNrWCIsImNoZWNrWSIsImdyYXZpdHkiLCJUaWxlUmVzb2x2ZXIiLCJtYXRyaXgiLCJ0aWxlU2l6ZSIsIk1hdGgiLCJmbG9vciIsInBvczEiLCJwb3MyIiwicE1heCIsImNlaWwiLCJyYW5nZSIsInRvSW5kZXgiLCJpbmRleFgiLCJpbmRleFkiLCJ0aWxlIiwiZ2V0IiwicG9zWCIsInBvc1kiLCJnZXRCeUluZGV4IiwibWF0Y2hlcyIsInRvSW5kZXhSYW5nZSIsIlNwcml0ZVNoZWV0Iiwid2lkdGgiLCJoZWlnaHQiLCJidWZmZXJzIiwibWFwIiwiYnVmZmVyIiwiZG9jdW1lbnQiLCJjcmVhdGVFbGVtZW50IiwiY29udGV4dCIsImdldENvbnRleHQiLCJmbGlwIiwic2NhbGUiLCJ0cmFuc2xhdGUiLCJkcmF3SW1hZ2UiLCJkcmF3IiwiZGlzdGFuY2UiLCJhbmltIiwiZHJhd1RpbGUiLCJQZW5kdWx1bU1vdmUiLCJlbmFibGUiLCJzcGVlZCIsImtvb3BhIiwiY2FudmFzIiwiZW50aXR5RmFjdG9yeSIsImZvbnQiLCJsb2FkTGV2ZWwiLCJjYW1lcmEiLCJtYXJpbyIsImFkZCIsInBsYXllckVudiIsImNyZWF0ZVBsYXllckVudiIsImlucHV0IiwibGlzdGVuVG8iLCJ3aW5kb3ciLCJjb21wIiwibGF5ZXJzIiwidGltZXIiLCJtYXgiLCJzdGFydCIsIm1haW4iLCJwbGF5ZXJFbnRpdHkiLCJwbGF5ZXJDb250cm9sIiwic2V0UGxheWVyIiwiYWRkVHJhaXQiLCJnZXRFbGVtZW50QnlJZCIsIlRpbWVyIiwiYWNjdW11bGF0ZWRUaW1lIiwibGFzdFRpbWUiLCJwZXJmb3JtYW5jZSIsIm5vdyIsInVwZGF0ZVByb3h5IiwidGltZSIsImVucXVldWUiLCJyZXF1ZXN0QW5pbWF0aW9uRnJhbWUiLCJDYW1lcmEiLCJCb3VuZGluZ0JveCIsImJveCIsImJvdHRvbSIsInJpZ2h0IiwiUGxheWVyQ29udHJvbGxlciIsInBsYXllciIsImNoZWNrUG9pbnQiLCJzY29yZSIsInN0b21lciIsIm9uU3RvbXAiLCJoYXMiLCJraWxsYWJsZSIsInJldml2ZSIsImNyZWF0ZUxldmVsTG9hZGVyIiwiZXhwYW5kU3BhbiIsImV4cGFuZFJhbmdlcyIsImV4cGFuZFRpbGVzIiwic2V0dXBMZXZlbCIsImxldmVsU3BlYyIsIm1lcmdlZENvbGxpc2lvbkdyaWQiLCJyZWR1Y2UiLCJtZXJnZWRUaWxlcyIsImxheWVyU3BlYyIsImNvbmNhdCIsImNvbGxpc2lvbkdyaWQiLCJjcmVhdGVDb2xsaXNpb25HcmlkIiwicGF0dGVybnMiLCJzZXRDb2xsaXNpb25HcmlkIiwic2V0dXBCYWNrZ3JvdW5kIiwiYmFja2dyb3VuZFNwcml0ZXMiLCJiYWNrZ3JvdW5kR3JpZCIsImNyZWF0ZUJhY2tncm91bmRHcmlkIiwibGF5ZXIiLCJiYWNrZ3JvdW5kTGF5ZXIiLCJzZXR1cEVudGl0aWVzIiwiY3JlYXRlRW50aXR5Iiwic3ByaXRlTGF5ZXIiLCJzcHJpdGVTaGVldCIsInR5cGUiLCJ4U3RhcnQiLCJ4TGVuIiwieVN0YXJ0IiwieUxlbiIsInhFbmQiLCJ5RW5kIiwiZXhwYW5kUmFuZ2UiLCJyYW5nZXMiLCJ3YWxrVGlsZXMiLCJvZmZzZXRYIiwib2Zmc2V0WSIsImRlcml2ZWRYIiwiZGVyaXZlZFkiLCJwYXR0ZXJuIiwiTGV2ZWwiLCJlbnRpdHlDb2xsaWRlciIsInRvdGFsVGltZSIsImNoZWNrIiwiQ29tcG9zaXRvciIsIkVudGl0eUNvbGxpZGVyIiwic3ViamVjdCIsIm92ZXJsYXBzIiwiVGlsZUNvbGxpZGVyIiwidGlsZU1hdHJpeCIsInNlYXJjaEJ5UmFuZ2UiLCJjcmVhdGVBbmltIiwicmVzb2x2ZUZyYW1lIiwiZnJhbWVJbmRleCIsImNyZWF0ZVNwcml0ZUxheWVyIiwic3ByaXRlQnVmZmVyIiwic3ByaXRlQ29udGV4dCIsImRyYXdTcHJpdGVMYXllciIsImNsZWFyUmVjdCIsImNyZWF0ZUJhY2tncm91bmRMYXllciIsInJlc29sdmVyIiwicmVkcmF3Iiwic3RhcnRJbmRleCIsImVuZEluZGV4IiwiZHJhd0FuaW0iLCJkcmF3QmFja2dyb3VuZExheWVyIiwiZHJhd1dpZHRoIiwiZHJhd0Zyb20iLCJkcmF3RW5kIiwibG9hZEZvbnQiLCJDSEFSUyIsIkZvbnQiLCJ0ZXh0IiwiY2hhciIsImZvbnRTcHJpdGUiLCJpbWciLCJyb3dMZW4iLCJjb2xOdW0iLCJlbnRyaWVzIiwibG9hZEVudGl0aWVzIiwiZW50aXRpZXNGYWN0b3J5IiwiYWRkQXMiLCJmYWN0b3J5IiwibG9hZE1hcmlvIiwiY3JlYXRlTWFyaW9GYWN0b3J5Iiwic3ByaXRlIiwicnVuQW5pbSIsImZyYW1lUm91dGUiLCJqdW1wIiwiZmFsbGluZyIsImdvIiwiZGlyIiwiZHJhd01hcmlvIiwiaGVhZGluZyIsImNyZWF0ZU1hcmlvIiwiR28iLCJhY2NlbGVyYXRpb24iLCJkZWNlbGVyYXRpb24iLCJkcmFnRmFjdG9yIiwiYWJzWCIsImFicyIsImRlY2VsIiwibWluIiwiZHJhZyIsIkp1bXAiLCJkdXJhdGlvbiIsInZlbG9jaXR5IiwiZW5nYWdlVGltZSIsInJlYWR5IiwiZ3JhY2VQZXJpb2QiLCJyZXF1ZXN0VGltZSIsInNwZWVkQm9vc3QiLCJjYW5jZWwiLCJTdG9tZXIiLCJib3VuY2VTcGVlZCIsImJvdW5jZSIsImxvYWRHb29tYmEiLCJjcmVhdGVHb29tYmFGYWN0b3J5IiwiQmVoYXZpb3IiLCJraWxsIiwicGVuZHVsdW1Nb3ZlIiwid2Fsa0FuaW0iLCJyb3V0ZUFuaW0iLCJnb29tYmEiLCJkcmF3R29vbWJhIiwiY3JlYXRlR29vbWJhIiwibG9hZEtvb3BhIiwiY3JlYXRlS29vcGFGYWN0b3J5IiwiU1RBVEVfV0FMS0lORyIsIlNUQVRFX0hJRElORyIsIlNUQVRFX1BBTklDIiwic3RhdGUiLCJoaWRlVGltZSIsImhpZGVEdXJhdGlvbiIsInBhbmljU3BlZWQiLCJ3YWxrU3BlZWQiLCJoYW5kbGVTdGF0ZSIsImhhbmRsZUtpY2siLCJwYW5pYyIsInRyYXZlbERpciIsImltcGFjdERpciIsImhpZGluZyIsInNvbGlkIiwidW5IaWRlIiwid2FrZUFuaW0iLCJiZWhhdmlvciIsImRyYXdLb29wYSIsImNyZWF0ZUtvb3BhIiwiY3JlYXRlRGFzaGJvYXJkTGF5ZXIiLCJMSU5FMSIsIkxJTkUyIiwiY29pbnMiLCJkcmF3RGFzaGJvYXJkIiwicGxheWVyQ29udHJvbGxlciIsInByaW50IiwidG9TdHJpbmciLCJwYWRTdGFydCIsInRvRml4ZWQiLCJhZGRQYWRTdGFydFBvbHlmaWxsIiwiU3RyaW5nIiwicHJvdG90eXBlIiwidGFyZ2V0TGVuZ3RoIiwicGFkU3RyaW5nIiwicmVwZWF0Iiwic2xpY2UiLCJzZXR1cEtleWJvYXJkIiwiYWRkTWFwcGluZyIsImtleVN0YXRlIiwiUFJFU1NFRCIsIlJFTEVBU0VEIiwiS2V5Ym9hcmRTdGF0ZSIsImtleVN0YXRlcyIsImtleU1hcCIsImNvZGUiLCJjYWxsQmFjayIsImV2ZW50IiwicHJldmVudERlZmF1bHQiLCJldmVudE5hbWUiLCJoYW5kbGVFdmVudCJdLCJtYXBwaW5ncyI6IjtBQUFBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOzs7QUFHQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxhQUFLO0FBQ0w7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFD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QUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSx5REFBeUQ7QUFDekQ7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFlBQVk7QUFDWjs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsV0FBVztBQUNYO0FBQ0EsV0FBVztBQUNYOztBQUVBO0FBQ0E7QUFDQSx3Q0FBd0MsV0FBVztBQUNuRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSwyQkFBMkI7QUFDM0I7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQSxTQUFTO0FBQ1Q7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLG9DQUFvQyxjQUFjO0FBQ2xEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxpQ0FBaUMsa0JBQWtCO0FBQ25EO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxpQkFBaUI7O0FBRWpCO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHdCQUF3QixpQkFBaUI7QUFDekM7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxZQUFZO0FBQ1o7QUFDQTs7QUFFQTtBQUNBLFlBQVk7QUFDWjs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7O0FBRUw7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0EsS0FBSzs7QUFFTDtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBLDhDQUE4QyxRQUFRO0FBQ3REO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxhQUFhO0FBQ2I7QUFDQTs7QUFFQSxXQUFXO0FBQ1g7QUFDQTtBQUNBOztBQUVBLFdBQVc7QUFDWDtBQUNBO0FBQ0E7O0FBRUEsV0FBVztBQUNYO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSzs7QUFFTDtBQUNBLDhDQUE4QyxRQUFRO0FBQ3REO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0EsS0FBSzs7QUFFTDtB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ZixHQUEyQitJLE9BQTNCLEdBQXFDQyxRQUF0RDs7QUFFQSxnQkFBSSxLQUFLRSxTQUFMLENBQWVyUCxHQUFmLENBQW1CdVAsSUFBbkIsTUFBNkJOLFFBQWpDLEVBQTJDO0FBQ3ZDO0FBQ0E7QUFDSDs7QUFFRCxpQkFBS0ksU0FBTCxDQUFlMVIsR0FBZixDQUFtQjRSLElBQW5CLEVBQXlCTixRQUF6Qjs7QUFFQSxpQkFBS0ssTUFBTCxDQUFZdFAsR0FBWixDQUFnQnVQLElBQWhCLEVBQXNCTixRQUF0QjtBQUNIOzs7aUNBRVExTSxNLEVBQVE7QUFBQTs7QUFDYixhQUFDLFNBQUQsRUFBWSxPQUFaLEVBQXFCaEosT0FBckIsQ0FBNkIscUJBQWE7QUFDdENnSix1QkFBT2pILGdCQUFQLENBQXdCcVUsU0FBeEIsRUFBbUMsaUJBQVM7QUFDeEMsMEJBQUtDLFdBQUwsQ0FBaUJILEtBQWpCO0FBQ0gsaUJBRkQ7QUFHSCxhQUpEO0FBS0g7Ozs7O2tCQXhDZ0JMLGEiLCJmaWxlIjoiYnVuZGxlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSB7fTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pIHtcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcbiBcdFx0fVxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0aTogbW9kdWxlSWQsXG4gXHRcdFx0bDogZmFsc2UsXG4gXHRcdFx0ZXhwb3J0czoge31cbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gZGVmaW5lIGdldHRlciBmdW5jdGlvbiBmb3IgaGFybW9ueSBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSBmdW5jdGlvbihleHBvcnRzLCBuYW1lLCBnZXR0ZXIpIHtcbiBcdFx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBuYW1lKSkge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBuYW1lLCB7XG4gXHRcdFx0XHRjb25maWd1cmFibGU6IGZhbHNlLFxuIFx0XHRcdFx0ZW51bWVyYWJsZTogdHJ1ZSxcbiBcdFx0XHRcdGdldDogZ2V0dGVyXG4gXHRcdFx0fSk7XG4gXHRcdH1cbiBcdH07XG5cbiBcdC8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSBmdW5jdGlvbihtb2R1bGUpIHtcbiBcdFx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0RGVmYXVsdCgpIHsgcmV0dXJuIG1vZHVsZVsnZGVmYXVsdCddOyB9IDpcbiBcdFx0XHRmdW5jdGlvbiBnZXRNb2R1bGVFeHBvcnRzKCkgeyByZXR1cm4gbW9kdWxlOyB9O1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCAnYScsIGdldHRlcik7XG4gXHRcdHJldHVybiBnZXR0ZXI7XG4gXHR9O1xuXG4gXHQvLyBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGxcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubyA9IGZ1bmN0aW9uKG9iamVjdCwgcHJvcGVydHkpIHsgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIHByb3BlcnR5KTsgfTtcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiL1wiO1xuXG4gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbiBcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKF9fd2VicGFja19yZXF1aXJlX18ucyA9IDkyKTtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyB3ZWJwYWNrL2Jvb3RzdHJhcCBlZWQ4MTczN2MxMmVkNDVmOTU2NCIsIlwidXNlIHN0cmljdFwiO1xuXG5leHBvcnRzLl9fZXNNb2R1bGUgPSB0cnVlO1xuXG5leHBvcnRzLmRlZmF1bHQgPSBmdW5jdGlvbiAoaW5zdGFuY2UsIENvbnN0cnVjdG9yKSB7XG4gIGlmICghKGluc3RhbmNlIGluc3RhbmNlb2YgQ29uc3RydWN0b3IpKSB7XG4gICAgdGhyb3cgbmV3IFR5cGVFcnJvcihcIkNhbm5vdCBjYWxsIGEgY2xhc3MgYXMgYSBmdW5jdGlvblwiKTtcbiAgfVxufTtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL25vZGVfbW9kdWxlcy9fYmFiZWwtcnVudGltZUA2LjI2LjBAYmFiZWwtcnVudGltZS9oZWxwZXJzL2NsYXNzQ2FsbENoZWNrLmpzXG4vLyBtb2R1bGUgaWQgPSAwXG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIlwidXNlIHN0cmljdFwiO1xuXG5leHBvcnRzLl9fZXNNb2R1bGUgPSB0cnVlO1xuXG52YXIgX2RlZmluZVByb3BlcnR5ID0gcmVxdWlyZShcIi4uL2NvcmUtanMvb2JqZWN0L2RlZmluZS1wcm9wZXJ0eVwiKTtcblxudmFyIF9kZWZpbmVQcm9wZXJ0eTIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9kZWZpbmVQcm9wZXJ0eSk7XG5cbmZ1bmN0aW9uIF9pbnRlcm9wUmVxdWlyZURlZmF1bHQob2JqKSB7IHJldHVybiBvYmogJiYgb2JqLl9fZXNNb2R1bGUgPyBvYmogOiB7IGRlZmF1bHQ6IG9iaiB9OyB9XG5cbmV4cG9ydHMuZGVmYXVsdCA9IGZ1bmN0aW9uICgpIHtcbiAgZnVuY3Rpb24gZGVmaW5lUHJvcGVydGllcyh0YXJnZXQsIHByb3BzKSB7XG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBwcm9wcy5sZW5ndGg7IGkrKykge1xuICAgICAgdmFyIGRlc2NyaXB0b3IgPSBwcm9wc1tpXTtcbiAgICAgIGRlc2NyaXB0b3IuZW51bWVyYWJsZSA9IGRlc2NyaXB0b3IuZW51bWVyYWJsZSB8fCBmYWxzZTtcbiAgICAgIGRlc2NyaXB0b3IuY29uZmlndXJhYmxlID0gdHJ1ZTtcbiAgICAgIGlmIChcInZhbHVlXCIgaW4gZGVzY3JpcHRvcikgZGVzY3JpcHRvci53cml0YWJsZSA9IHRydWU7XG4gICAgICAoMCwgX2RlZmluZVByb3BlcnR5Mi5kZWZhdWx0KSh0YXJnZXQsIGRlc2NyaXB0b3Iua2V5LCBkZXNjcmlwdG9yKTtcbiAgICB9XG4gIH1cblxuICByZXR1cm4gZnVuY3Rpb24gKENvbnN0cnVjdG9yLCBwcm90b1Byb3BzLCBzdGF0aWNQcm9wcykge1xuICAgIGlmIChwcm90b1Byb3BzKSBkZWZpbmVQcm9wZXJ0aWVzKENvbnN0cnVjdG9yLnByb3RvdHlwZSwgcHJvdG9Qcm9wcyk7XG4gICAgaWYgKHN0YXRpY1Byb3BzKSBkZWZpbmVQcm9wZXJ0aWVzKENvbnN0cnVjdG9yLCBzdGF0aWNQcm9wcyk7XG4gICAgcmV0dXJuIENvbnN0cnVjdG9yO1xuICB9O1xufSgpO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vbm9kZV9tb2R1bGVzL19iYWJlbC1ydW50aW1lQDYuMjYuMEBiYWJlbC1ydW50aW1lL2hlbHBlcnMvY3JlYXRlQ2xhc3MuanNcbi8vIG1vZHVsZSBpZCA9IDFcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwidmFyIGNvcmUgPSBtb2R1bGUuZXhwb3J0cyA9IHsgdmVyc2lvbjogJzIuNS4zJyB9O1xuaWYgKHR5cGVvZiBfX2UgPT0gJ251bWJlcicpIF9fZSA9IGNvcmU7IC8vIGVzbGludC1kaXNhYmxlLWxpbmUgbm8tdW5kZWZcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vbm9kZV9tb2R1bGVzL19jb3JlLWpzQDIuNS4zQGNvcmUtanMvbGlicmFyeS9tb2R1bGVzL19jb3JlLmpzXG4vLyBtb2R1bGUgaWQgPSAyXG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsInZhciBnbG9iYWwgPSByZXF1aXJlKCcuL19nbG9iYWwnKTtcbnZhciBjb3JlID0gcmVxdWlyZSgnLi9fY29yZScpO1xudmFyIGN0eCA9IHJlcXVpcmUoJy4vX2N0eCcpO1xudmFyIGhpZGUgPSByZXF1aXJlKCcuL19oaWRlJyk7XG52YXIgUFJPVE9UWVBFID0gJ3Byb3RvdHlwZSc7XG5cbnZhciAkZXhwb3J0ID0gZnVuY3Rpb24gKHR5cGUsIG5hbWUsIHNvdXJjZSkge1xuICB2YXIgSVNfRk9SQ0VEID0gdHlwZSAmICRleHBvcnQuRjtcbiAgdmFyIElTX0dMT0JBTCA9IHR5cGUgJiAkZXhwb3J0Lkc7XG4gIHZhciBJU19TVEFUSUMgPSB0eXBlICYgJGV4cG9ydC5TO1xuICB2YXIgSVNfUFJPVE8gPSB0eXBlICYgJGV4cG9ydC5QO1xuICB2YXIgSVNfQklORCA9IHR5cGUgJiAkZXhwb3J0LkI7XG4gIHZhciBJU19XUkFQID0gdHlwZSAmICRleHBvcnQuVztcbiAgdmFyIGV4cG9ydHMgPSBJU19HTE9CQUwgPyBjb3JlIDogY29yZVtuYW1lXSB8fCAoY29yZVtuYW1lXSA9IHt9KTtcbiAgdmFyIGV4cFByb3RvID0gZXhwb3J0c1tQUk9UT1RZUEVdO1xuICB2YXIgdGFyZ2V0ID0gSVNfR0xPQkFMID8gZ2xvYmFsIDogSVNfU1RBVElDID8gZ2xvYmFsW25hbWVdIDogKGdsb2JhbFtuYW1lXSB8fCB7fSlbUFJPVE9UWVBFXTtcbiAgdmFyIGtleSwgb3duLCBvdXQ7XG4gIGlmIChJU19HTE9CQUwpIHNvdXJjZSA9IG5hbWU7XG4gIGZvciAoa2V5IGluIHNvdXJjZSkge1xuICAgIC8vIGNvbnRhaW5zIGluIG5hdGl2ZVxuICAgIG93biA9ICFJU19GT1JDRUQgJiYgdGFyZ2V0ICYmIHRhcmdldFtrZXldICE9PSB1bmRlZmluZWQ7XG4gICAgaWYgKG93biAmJiBrZXkgaW4gZXhwb3J0cykgY29udGludWU7XG4gICAgLy8gZXhwb3J0IG5hdGl2ZSBvciBwYXNzZWRcbiAgICBvdXQgPSBvd24gPyB0YXJnZXRba2V5XSA6IHNvdXJjZVtrZXldO1xuICAgIC8vIHByZXZlbnQgZ2xvYmFsIHBvbGx1dGlvbiBmb3IgbmFtZXNwYWNlc1xuICAgIGV4cG9ydHNba2V5XSA9IElTX0dMT0JBTCAmJiB0eXBlb2YgdGFyZ2V0W2tleV0gIT0gJ2Z1bmN0aW9uJyA/IHNvdXJjZVtrZXldXG4gICAgLy8gYmluZCB0aW1lcnMgdG8gZ2xvYmFsIGZvciBjYWxsIGZyb20gZXhwb3J0IGNvbnRleHRcbiAgICA6IElTX0JJTkQgJiYgb3duID8gY3R4KG91dCwgZ2xvYmFsKVxuICAgIC8vIHdyYXAgZ2xvYmFsIGNvbnN0cnVjdG9ycyBmb3IgcHJldmVudCBjaGFuZ2UgdGhlbSBpbiBsaWJyYXJ5XG4gICAgOiBJU19XUkFQICYmIHRhcmdldFtrZXldID09IG91dCA/IChmdW5jdGlvbiAoQykge1xuICAgICAgdmFyIEYgPSBmdW5jdGlvbiAoYSwgYiwgYykge1xuICAgICAgICBpZiAodGhpcyBpbnN0YW5jZW9mIEMpIHtcbiAgICAgICAgICBzd2l0Y2ggKGFyZ3VtZW50cy5sZW5ndGgpIHtcbiAgICAgICAgICAgIGNhc2UgMDogcmV0dXJuIG5ldyBDKCk7XG4gICAgICAgICAgICBjYXNlIDE6IHJldHVybiBuZXcgQyhhKTtcbiAgICAgICAgICAgIGNhc2UgMjogcmV0dXJuIG5ldyBDKGEsIGIpO1xuICAgICAgICAgIH0gcmV0dXJuIG5ldyBDKGEsIGIsIGMpO1xuICAgICAgICB9IHJldHVybiBDLmFwcGx5KHRoaXMsIGFyZ3VtZW50cyk7XG4gICAgICB9O1xuICAgICAgRltQUk9UT1RZUEVdID0gQ1tQUk9UT1RZUEVdO1xuICAgICAgcmV0dXJuIEY7XG4gICAgLy8gbWFrZSBzdGF0aWMgdmVyc2lvbnMgZm9yIHByb3RvdHlwZSBtZXRob2RzXG4gICAgfSkob3V0KSA6IElTX1BST1RPICYmIHR5cGVvZiBvdXQgPT0gJ2Z1bmN0aW9uJyA/IGN0eChGdW5jdGlvbi5jYWxsLCBvdXQpIDogb3V0O1xuICAgIC8vIGV4cG9ydCBwcm90byBtZXRob2RzIHRvIGNvcmUuJUNPTlNUUlVDVE9SJS5tZXRob2RzLiVOQU1FJVxuICAgIGlmIChJU19QUk9UTykge1xuICAgICAgKGV4cG9ydHMudmlydHVhbCB8fCAoZXhwb3J0cy52aXJ0dWFsID0ge30pKVtrZXldID0gb3V0O1xuICAgICAgLy8gZXhwb3J0IHByb3RvIG1ldGhvZHMgdG8gY29yZS4lQ09OU1RSVUNUT1IlLnByb3RvdHlwZS4lTkFNRSVcbiAgICAgIGlmICh0eXBlICYgJGV4cG9ydC5SICYmIGV4cFByb3RvICYmICFleHBQcm90b1trZXldKSBoaWRlKGV4cFByb3RvLCBrZXksIG91dCk7XG4gICAgfVxuICB9XG59O1xuLy8gdHlwZSBiaXRtYXBcbiRleHBvcnQuRiA9IDE7ICAgLy8gZm9yY2VkXG4kZXhwb3J0LkcgPSAyOyAgIC8vIGdsb2JhbFxuJGV4cG9ydC5TID0gNDsgICAvLyBzdGF0aWNcbiRleHBvcnQuUCA9IDg7ICAgLy8gcHJvdG9cbiRleHBvcnQuQiA9IDE2OyAgLy8gYmluZFxuJGV4cG9ydC5XID0gMzI7ICAvLyB3cmFwXG4kZXhwb3J0LlUgPSA2NDsgIC8vIHNhZmVcbiRleHBvcnQuUiA9IDEyODsgLy8gcmVhbCBwcm90byBtZXRob2QgZm9yIGBsaWJyYXJ5YFxubW9kdWxlLmV4cG9ydHMgPSAkZXhwb3J0O1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9ub2RlX21vZHVsZXMvX2NvcmUtanNAMi41LjNAY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX2V4cG9ydC5qc1xuLy8gbW9kdWxlIGlkID0gM1xuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJ2YXIgc3RvcmUgPSByZXF1aXJlKCcuL19zaGFyZWQnKSgnd2tzJyk7XG52YXIgdWlkID0gcmVxdWlyZSgnLi9fdWlkJyk7XG52YXIgU3ltYm9sID0gcmVxdWlyZSgnLi9fZ2xvYmFsJykuU3ltYm9sO1xudmFyIFVTRV9TWU1CT0wgPSB0eXBlb2YgU3ltYm9sID09ICdmdW5jdGlvbic7XG5cbnZhciAkZXhwb3J0cyA9IG1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKG5hbWUpIHtcbiAgcmV0dXJuIHN0b3JlW25hbWVdIHx8IChzdG9yZVtuYW1lXSA9XG4gICAgVVNFX1NZTUJPTCAmJiBTeW1ib2xbbmFtZV0gfHwgKFVTRV9TWU1CT0wgPyBTeW1ib2wgOiB1aWQpKCdTeW1ib2wuJyArIG5hbWUpKTtcbn07XG5cbiRleHBvcnRzLnN0b3JlID0gc3RvcmU7XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL25vZGVfbW9kdWxlcy9fY29yZS1qc0AyLjUuM0Bjb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9fd2tzLmpzXG4vLyBtb2R1bGUgaWQgPSA0XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIi8vIGh0dHBzOi8vZ2l0aHViLmNvbS96bG9pcm9jay9jb3JlLWpzL2lzc3Vlcy84NiNpc3N1ZWNvbW1lbnQtMTE1NzU5MDI4XG52YXIgZ2xvYmFsID0gbW9kdWxlLmV4cG9ydHMgPSB0eXBlb2Ygd2luZG93ICE9ICd1bmRlZmluZWQnICYmIHdpbmRvdy5NYXRoID09IE1hdGhcbiAgPyB3aW5kb3cgOiB0eXBlb2Ygc2VsZiAhPSAndW5kZWZpbmVkJyAmJiBzZWxmLk1hdGggPT0gTWF0aCA/IHNlbGZcbiAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLW5ldy1mdW5jXG4gIDogRnVuY3Rpb24oJ3JldHVybiB0aGlzJykoKTtcbmlmICh0eXBlb2YgX19nID09ICdudW1iZXInKSBfX2cgPSBnbG9iYWw7IC8vIGVzbGludC1kaXNhYmxlLWxpbmUgbm8tdW5kZWZcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vbm9kZV9tb2R1bGVzL19jb3JlLWpzQDIuNS4zQGNvcmUtanMvbGlicmFyeS9tb2R1bGVzL19nbG9iYWwuanNcbi8vIG1vZHVsZSBpZCA9IDVcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiaW1wb3J0IHtWZWMyfSBmcm9tICcuL21hdGguanMnXHJcbmltcG9ydCBCb3VuZGluZ0JveCBmcm9tICcuL0JvdW5kaW5nQm94LmpzJ1xyXG5cclxuZXhwb3J0IGNvbnN0IFNpZGVzID0ge1xyXG4gICAgTEVGVDogU3ltYm9sKCdsZWZ0JyksXHJcbiAgICBSSUdIVDogU3ltYm9sKCdyaWdodCcpLFxyXG4gICAgQk9UVE9NOiBTeW1ib2woJ2JvdHRvbScpLFxyXG4gICAgVE9QOiBTeW1ib2woJ3RvcCcpXHJcbn07XHJcblxyXG5leHBvcnQgY2xhc3MgVHJhaXQge1xyXG4gICAgY29uc3RydWN0b3IobmFtZSkge1xyXG4gICAgICAgIHRoaXMuTkFNRSA9IG5hbWU7XHJcblxyXG4gICAgICAgIHRoaXMudGFza3MgPSBbXTtcclxuICAgIH1cclxuXHJcbiAgICBmaW5hbGl6ZSgpIHtcclxuICAgICAgICB0aGlzLnRhc2tzLmZvckVhY2godGFzayA9PiB0YXNrKCkpO1xyXG4gICAgICAgIHRoaXMudGFza3MubGVuZ3RoID0gMDtcclxuICAgIH1cclxuXHJcbiAgICBxdWV1ZSh0YXNrKSB7XHJcbiAgICAgICAgdGhpcy50YXNrcy5wdXNoKHRhc2spO1xyXG4gICAgfVxyXG5cclxuICAgIGNvbGxpZGVzKHVzLCB0aGVtKSB7XHJcbiAgICAgICAgLy8gY29uc29sZS5sb2coJ0NvbGxpZGVzIHdpdGggJywgdGhlbSk7XHJcbiAgICB9XHJcblxyXG4gICAgb2JzdHJ1Y3QoKSB7XHJcblxyXG4gICAgfVxyXG5cclxuICAgIHVwZGF0ZSgpIHtcclxuICAgICAgICAvLyBjb25zb2xlLndhcm4oJ1VuaGFuZGxlZCB1cGRhdGUgY2FsbCBpbiBUcmFpdCcpXHJcbiAgICB9XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEVudGl0eSB7XHJcbiAgICBjb25zdHJ1Y3RvcigpIHtcclxuICAgICAgICB0aGlzLmNhbkNvbGxpZGVzID0gdHJ1ZTtcclxuXHJcbiAgICAgICAgdGhpcy5wb3MgPSBuZXcgVmVjMigwLDApO1xyXG4gICAgICAgIHRoaXMudmVsID0gbmV3IFZlYzIoMCwwKTtcclxuICAgICAgICB0aGlzLnNpemUgPSBuZXcgVmVjMigwLDApO1xyXG4gICAgICAgIHRoaXMub2Zmc2V0ID0gbmV3IFZlYzIoMCwwKTtcclxuICAgICAgICB0aGlzLmJvdW5kcyA9IG5ldyBCb3VuZGluZ0JveCh0aGlzLnBvcywgdGhpcy5zaXplLCB0aGlzLm9mZnNldCk7XHJcbiAgICAgICAgdGhpcy5saWZlVGltZSA9IDA7XHJcblxyXG4gICAgICAgIHRoaXMudHJhaXRzID0gW107XHJcbiAgICB9XHJcblxyXG4gICAgYWRkVHJhaXQodHJhaXQpIHtcclxuICAgICAgICB0aGlzLnRyYWl0cy5wdXNoKHRyYWl0KTtcclxuICAgICAgICB0aGlzW3RyYWl0Lk5BTUVdID0gdHJhaXQ7XHJcbiAgICB9XHJcblxyXG4gICAgZmluYWxpemUoKSB7XHJcbiAgICAgICAgdGhpcy50cmFpdHMuZm9yRWFjaCh0cmFpdCA9PiB7XHJcbiAgICAgICAgICAgIHRyYWl0LmZpbmFsaXplKCk7XHJcbiAgICAgICAgfSlcclxuICAgIH1cclxuXHJcbiAgICBjb2xsaWRlcyhjYW5kaWRhdGUpIHtcclxuICAgICAgICAvLyBjb25zb2xlLmxvZygnVG91Y2hlZCcsIGNhbmRpZGF0ZSk7XHJcbiAgICAgICAgdGhpcy50cmFpdHMuZm9yRWFjaCh0cmFpdCA9PiB7XHJcbiAgICAgICAgICAgIHRyYWl0LmNvbGxpZGVzKHRoaXMsIGNhbmRpZGF0ZSk7XHJcbiAgICAgICAgfSlcclxuICAgIH1cclxuXHJcbiAgICBvYnN0cnVjdChzaWRlLCBtYXRjaCkge1xyXG4gICAgICAgIHRoaXMudHJhaXRzLmZvckVhY2godHJhaXQgPT4ge1xyXG4gICAgICAgICAgICB0cmFpdC5vYnN0cnVjdCh0aGlzLCBzaWRlLCBtYXRjaCk7XHJcbiAgICAgICAgfSlcclxuICAgIH1cclxuXHJcbiAgICBkcmF3KCkge1xyXG5cclxuICAgIH1cclxuXHJcbiAgICB1cGRhdGUoZGVsdGFUaW1lLCBsZXZlbCkge1xyXG4gICAgICAgIHRoaXMudHJhaXRzLmZvckVhY2godHJhaXQgPT4ge1xyXG4gICAgICAgICAgICB0cmFpdC51cGRhdGUodGhpcywgZGVsdGFUaW1lLCBsZXZlbCk7XHJcbiAgICAgICAgfSk7XHJcblxyXG4gICAgICAgIHRoaXMubGlmZVRpbWUgKz1kZWx0YVRpbWU7XHJcbiAgICB9XHJcbn1cclxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vcHVibGljL2pzL0VudGl0eS5qcyIsInZhciBhbk9iamVjdCA9IHJlcXVpcmUoJy4vX2FuLW9iamVjdCcpO1xudmFyIElFOF9ET01fREVGSU5FID0gcmVxdWlyZSgnLi9faWU4LWRvbS1kZWZpbmUnKTtcbnZhciB0b1ByaW1pdGl2ZSA9IHJlcXVpcmUoJy4vX3RvLXByaW1pdGl2ZScpO1xudmFyIGRQID0gT2JqZWN0LmRlZmluZVByb3BlcnR5O1xuXG5leHBvcnRzLmYgPSByZXF1aXJlKCcuL19kZXNjcmlwdG9ycycpID8gT2JqZWN0LmRlZmluZVByb3BlcnR5IDogZnVuY3Rpb24gZGVmaW5lUHJvcGVydHkoTywgUCwgQXR0cmlidXRlcykge1xuICBhbk9iamVjdChPKTtcbiAgUCA9IHRvUHJpbWl0aXZlKFAsIHRydWUpO1xuICBhbk9iamVjdChBdHRyaWJ1dGVzKTtcbiAgaWYgKElFOF9ET01fREVGSU5FKSB0cnkge1xuICAgIHJldHVybiBkUChPLCBQLCBBdHRyaWJ1dGVzKTtcbiAgfSBjYXRjaCAoZSkgeyAvKiBlbXB0eSAqLyB9XG4gIGlmICgnZ2V0JyBpbiBBdHRyaWJ1dGVzIHx8ICdzZXQnIGluIEF0dHJpYnV0ZXMpIHRocm93IFR5cGVFcnJvcignQWNjZXNzb3JzIG5vdCBzdXBwb3J0ZWQhJyk7XG4gIGlmICgndmFsdWUnIGluIEF0dHJpYnV0ZXMpIE9bUF0gPSBBdHRyaWJ1dGVzLnZhbHVlO1xuICByZXR1cm4gTztcbn07XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL25vZGVfbW9kdWxlcy9fY29yZS1qc0AyLjUuM0Bjb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9fb2JqZWN0LWRwLmpzXG4vLyBtb2R1bGUgaWQgPSA3XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGl0KSB7XG4gIHJldHVybiB0eXBlb2YgaXQgPT09ICdvYmplY3QnID8gaXQgIT09IG51bGwgOiB0eXBlb2YgaXQgPT09ICdmdW5jdGlvbic7XG59O1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9ub2RlX21vZHVsZXMvX2NvcmUtanNAMi41LjNAY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX2lzLW9iamVjdC5qc1xuLy8gbW9kdWxlIGlkID0gOFxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJ2YXIgaXNPYmplY3QgPSByZXF1aXJlKCcuL19pcy1vYmplY3QnKTtcbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGl0KSB7XG4gIGlmICghaXNPYmplY3QoaXQpKSB0aHJvdyBUeXBlRXJyb3IoaXQgKyAnIGlzIG5vdCBhbiBvYmplY3QhJyk7XG4gIHJldHVybiBpdDtcbn07XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL25vZGVfbW9kdWxlcy9fY29yZS1qc0AyLjUuM0Bjb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9fYW4tb2JqZWN0LmpzXG4vLyBtb2R1bGUgaWQgPSA5XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIi8vIFRoYW5rJ3MgSUU4IGZvciBoaXMgZnVubnkgZGVmaW5lUHJvcGVydHlcbm1vZHVsZS5leHBvcnRzID0gIXJlcXVpcmUoJy4vX2ZhaWxzJykoZnVuY3Rpb24gKCkge1xuICByZXR1cm4gT2JqZWN0LmRlZmluZVByb3BlcnR5KHt9LCAnYScsIHsgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiA3OyB9IH0pLmEgIT0gNztcbn0pO1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9ub2RlX21vZHVsZXMvX2NvcmUtanNAMi41LjNAY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX2Rlc2NyaXB0b3JzLmpzXG4vLyBtb2R1bGUgaWQgPSAxMFxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJtb2R1bGUuZXhwb3J0cyA9IHsgXCJkZWZhdWx0XCI6IHJlcXVpcmUoXCJjb3JlLWpzL2xpYnJhcnkvZm4vb2JqZWN0L2dldC1wcm90b3R5cGUtb2ZcIiksIF9fZXNNb2R1bGU6IHRydWUgfTtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL25vZGVfbW9kdWxlcy9fYmFiZWwtcnVudGltZUA2LjI2LjBAYmFiZWwtcnVudGltZS9jb3JlLWpzL29iamVjdC9nZXQtcHJvdG90eXBlLW9mLmpzXG4vLyBtb2R1bGUgaWQgPSAxMVxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJcInVzZSBzdHJpY3RcIjtcblxuZXhwb3J0cy5fX2VzTW9kdWxlID0gdHJ1ZTtcblxudmFyIF90eXBlb2YyID0gcmVxdWlyZShcIi4uL2hlbHBlcnMvdHlwZW9mXCIpO1xuXG52YXIgX3R5cGVvZjMgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF90eXBlb2YyKTtcblxuZnVuY3Rpb24gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChvYmopIHsgcmV0dXJuIG9iaiAmJiBvYmouX19lc01vZHVsZSA/IG9iaiA6IHsgZGVmYXVsdDogb2JqIH07IH1cblxuZXhwb3J0cy5kZWZhdWx0ID0gZnVuY3Rpb24gKHNlbGYsIGNhbGwpIHtcbiAgaWYgKCFzZWxmKSB7XG4gICAgdGhyb3cgbmV3IFJlZmVyZW5jZUVycm9yKFwidGhpcyBoYXNuJ3QgYmVlbiBpbml0aWFsaXNlZCAtIHN1cGVyKCkgaGFzbid0IGJlZW4gY2FsbGVkXCIpO1xuICB9XG5cbiAgcmV0dXJuIGNhbGwgJiYgKCh0eXBlb2YgY2FsbCA9PT0gXCJ1bmRlZmluZWRcIiA/IFwidW5kZWZpbmVkXCIgOiAoMCwgX3R5cGVvZjMuZGVmYXVsdCkoY2FsbCkpID09PSBcIm9iamVjdFwiIHx8IHR5cGVvZiBjYWxsID09PSBcImZ1bmN0aW9uXCIpID8gY2FsbCA6IHNlbGY7XG59O1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vbm9kZV9tb2R1bGVzL19iYWJlbC1ydW50aW1lQDYuMjYuMEBiYWJlbC1ydW50aW1lL2hlbHBlcnMvcG9zc2libGVDb25zdHJ1Y3RvclJldHVybi5qc1xuLy8gbW9kdWxlIGlkID0gMTJcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbmV4cG9ydHMuX19lc01vZHVsZSA9IHRydWU7XG5cbnZhciBfc2V0UHJvdG90eXBlT2YgPSByZXF1aXJlKFwiLi4vY29yZS1qcy9vYmplY3Qvc2V0LXByb3RvdHlwZS1vZlwiKTtcblxudmFyIF9zZXRQcm90b3R5cGVPZjIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9zZXRQcm90b3R5cGVPZik7XG5cbnZhciBfY3JlYXRlID0gcmVxdWlyZShcIi4uL2NvcmUtanMvb2JqZWN0L2NyZWF0ZVwiKTtcblxudmFyIF9jcmVhdGUyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfY3JlYXRlKTtcblxudmFyIF90eXBlb2YyID0gcmVxdWlyZShcIi4uL2hlbHBlcnMvdHlwZW9mXCIpO1xuXG52YXIgX3R5cGVvZjMgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF90eXBlb2YyKTtcblxuZnVuY3Rpb24gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChvYmopIHsgcmV0dXJuIG9iaiAmJiBvYmouX19lc01vZHVsZSA/IG9iaiA6IHsgZGVmYXVsdDogb2JqIH07IH1cblxuZXhwb3J0cy5kZWZhdWx0ID0gZnVuY3Rpb24gKHN1YkNsYXNzLCBzdXBlckNsYXNzKSB7XG4gIGlmICh0eXBlb2Ygc3VwZXJDbGFzcyAhPT0gXCJmdW5jdGlvblwiICYmIHN1cGVyQ2xhc3MgIT09IG51bGwpIHtcbiAgICB0aHJvdyBuZXcgVHlwZUVycm9yKFwiU3VwZXIgZXhwcmVzc2lvbiBtdXN0IGVpdGhlciBiZSBudWxsIG9yIGEgZnVuY3Rpb24sIG5vdCBcIiArICh0eXBlb2Ygc3VwZXJDbGFzcyA9PT0gXCJ1bmRlZmluZWRcIiA/IFwidW5kZWZpbmVkXCIgOiAoMCwgX3R5cGVvZjMuZGVmYXVsdCkoc3VwZXJDbGFzcykpKTtcbiAgfVxuXG4gIHN1YkNsYXNzLnByb3RvdHlwZSA9ICgwLCBfY3JlYXRlMi5kZWZhdWx0KShzdXBlckNsYXNzICYmIHN1cGVyQ2xhc3MucHJvdG90eXBlLCB7XG4gICAgY29uc3RydWN0b3I6IHtcbiAgICAgIHZhbHVlOiBzdWJDbGFzcyxcbiAgICAgIGVudW1lcmFibGU6IGZhbHNlLFxuICAgICAgd3JpdGFibGU6IHRydWUsXG4gICAgICBjb25maWd1cmFibGU6IHRydWVcbiAgICB9XG4gIH0pO1xuICBpZiAoc3VwZXJDbGFzcykgX3NldFByb3RvdHlwZU9mMi5kZWZhdWx0ID8gKDAsIF9zZXRQcm90b3R5cGVPZjIuZGVmYXVsdCkoc3ViQ2xhc3MsIHN1cGVyQ2xhc3MpIDogc3ViQ2xhc3MuX19wcm90b19fID0gc3VwZXJDbGFzcztcbn07XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9ub2RlX21vZHVsZXMvX2JhYmVsLXJ1bnRpbWVANi4yNi4wQGJhYmVsLXJ1bnRpbWUvaGVscGVycy9pbmhlcml0cy5qc1xuLy8gbW9kdWxlIGlkID0gMTNcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiLy8gb3B0aW9uYWwgLyBzaW1wbGUgY29udGV4dCBiaW5kaW5nXG52YXIgYUZ1bmN0aW9uID0gcmVxdWlyZSgnLi9fYS1mdW5jdGlvbicpO1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoZm4sIHRoYXQsIGxlbmd0aCkge1xuICBhRnVuY3Rpb24oZm4pO1xuICBpZiAodGhhdCA9PT0gdW5kZWZpbmVkKSByZXR1cm4gZm47XG4gIHN3aXRjaCAobGVuZ3RoKSB7XG4gICAgY2FzZSAxOiByZXR1cm4gZnVuY3Rpb24gKGEpIHtcbiAgICAgIHJldHVybiBmbi5jYWxsKHRoYXQsIGEpO1xuICAgIH07XG4gICAgY2FzZSAyOiByZXR1cm4gZnVuY3Rpb24gKGEsIGIpIHtcbiAgICAgIHJldHVybiBmbi5jYWxsKHRoYXQsIGEsIGIpO1xuICAgIH07XG4gICAgY2FzZSAzOiByZXR1cm4gZnVuY3Rpb24gKGEsIGIsIGMpIHtcbiAgICAgIHJldHVybiBmbi5jYWxsKHRoYXQsIGEsIGIsIGMpO1xuICAgIH07XG4gIH1cbiAgcmV0dXJuIGZ1bmN0aW9uICgvKiAuLi5hcmdzICovKSB7XG4gICAgcmV0dXJuIGZuLmFwcGx5KHRoYXQsIGFyZ3VtZW50cyk7XG4gIH07XG59O1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9ub2RlX21vZHVsZXMvX2NvcmUtanNAMi41LjNAY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX2N0eC5qc1xuLy8gbW9kdWxlIGlkID0gMTRcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwidmFyIGRQID0gcmVxdWlyZSgnLi9fb2JqZWN0LWRwJyk7XG52YXIgY3JlYXRlRGVzYyA9IHJlcXVpcmUoJy4vX3Byb3BlcnR5LWRlc2MnKTtcbm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZSgnLi9fZGVzY3JpcHRvcnMnKSA/IGZ1bmN0aW9uIChvYmplY3QsIGtleSwgdmFsdWUpIHtcbiAgcmV0dXJuIGRQLmYob2JqZWN0LCBrZXksIGNyZWF0ZURlc2MoMSwgdmFsdWUpKTtcbn0gOiBmdW5jdGlvbiAob2JqZWN0LCBrZXksIHZhbHVlKSB7XG4gIG9iamVjdFtrZXldID0gdmFsdWU7XG4gIHJldHVybiBvYmplY3Q7XG59O1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9ub2RlX21vZHVsZXMvX2NvcmUtanNAMi41LjNAY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX2hpZGUuanNcbi8vIG1vZHVsZSBpZCA9IDE1XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIid1c2Ugc3RyaWN0JztcbnZhciAkYXQgPSByZXF1aXJlKCcuL19zdHJpbmctYXQnKSh0cnVlKTtcblxuLy8gMjEuMS4zLjI3IFN0cmluZy5wcm90b3R5cGVbQEBpdGVyYXRvcl0oKVxucmVxdWlyZSgnLi9faXRlci1kZWZpbmUnKShTdHJpbmcsICdTdHJpbmcnLCBmdW5jdGlvbiAoaXRlcmF0ZWQpIHtcbiAgdGhpcy5fdCA9IFN0cmluZyhpdGVyYXRlZCk7IC8vIHRhcmdldFxuICB0aGlzLl9pID0gMDsgICAgICAgICAgICAgICAgLy8gbmV4dCBpbmRleFxuLy8gMjEuMS41LjIuMSAlU3RyaW5nSXRlcmF0b3JQcm90b3R5cGUlLm5leHQoKVxufSwgZnVuY3Rpb24gKCkge1xuICB2YXIgTyA9IHRoaXMuX3Q7XG4gIHZhciBpbmRleCA9IHRoaXMuX2k7XG4gIHZhciBwb2ludDtcbiAgaWYgKGluZGV4ID49IE8ubGVuZ3RoKSByZXR1cm4geyB2YWx1ZTogdW5kZWZpbmVkLCBkb25lOiB0cnVlIH07XG4gIHBvaW50ID0gJGF0KE8sIGluZGV4KTtcbiAgdGhpcy5faSArPSBwb2ludC5sZW5ndGg7XG4gIHJldHVybiB7IHZhbHVlOiBwb2ludCwgZG9uZTogZmFsc2UgfTtcbn0pO1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9ub2RlX21vZHVsZXMvX2NvcmUtanNAMi41LjNAY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvZXM2LnN0cmluZy5pdGVyYXRvci5qc1xuLy8gbW9kdWxlIGlkID0gMTZcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwidmFyIGhhc093blByb3BlcnR5ID0ge30uaGFzT3duUHJvcGVydHk7XG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChpdCwga2V5KSB7XG4gIHJldHVybiBoYXNPd25Qcm9wZXJ0eS5jYWxsKGl0LCBrZXkpO1xufTtcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vbm9kZV9tb2R1bGVzL19jb3JlLWpzQDIuNS4zQGNvcmUtanMvbGlicmFyeS9tb2R1bGVzL19oYXMuanNcbi8vIG1vZHVsZSBpZCA9IDE3XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGV4ZWMpIHtcbiAgdHJ5IHtcbiAgICByZXR1cm4gISFleGVjKCk7XG4gIH0gY2F0Y2ggKGUpIHtcbiAgICByZXR1cm4gdHJ1ZTtcbiAgfVxufTtcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vbm9kZV9tb2R1bGVzL19jb3JlLWpzQDIuNS4zQGNvcmUtanMvbGlicmFyeS9tb2R1bGVzL19mYWlscy5qc1xuLy8gbW9kdWxlIGlkID0gMThcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwibW9kdWxlLmV4cG9ydHMgPSB7fTtcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vbm9kZV9tb2R1bGVzL19jb3JlLWpzQDIuNS4zQGNvcmUtanMvbGlicmFyeS9tb2R1bGVzL19pdGVyYXRvcnMuanNcbi8vIG1vZHVsZSBpZCA9IDE5XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIi8vIHRvIGluZGV4ZWQgb2JqZWN0LCB0b09iamVjdCB3aXRoIGZhbGxiYWNrIGZvciBub24tYXJyYXktbGlrZSBFUzMgc3RyaW5nc1xudmFyIElPYmplY3QgPSByZXF1aXJlKCcuL19pb2JqZWN0Jyk7XG52YXIgZGVmaW5lZCA9IHJlcXVpcmUoJy4vX2RlZmluZWQnKTtcbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGl0KSB7XG4gIHJldHVybiBJT2JqZWN0KGRlZmluZWQoaXQpKTtcbn07XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL25vZGVfbW9kdWxlcy9fY29yZS1qc0AyLjUuM0Bjb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9fdG8taW9iamVjdC5qc1xuLy8gbW9kdWxlIGlkID0gMjBcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwicmVxdWlyZSgnLi9lczYuYXJyYXkuaXRlcmF0b3InKTtcbnZhciBnbG9iYWwgPSByZXF1aXJlKCcuL19nbG9iYWwnKTtcbnZhciBoaWRlID0gcmVxdWlyZSgnLi9faGlkZScpO1xudmFyIEl0ZXJhdG9ycyA9IHJlcXVpcmUoJy4vX2l0ZXJhdG9ycycpO1xudmFyIFRPX1NUUklOR19UQUcgPSByZXF1aXJlKCcuL193a3MnKSgndG9TdHJpbmdUYWcnKTtcblxudmFyIERPTUl0ZXJhYmxlcyA9ICgnQ1NTUnVsZUxpc3QsQ1NTU3R5bGVEZWNsYXJhdGlvbixDU1NWYWx1ZUxpc3QsQ2xpZW50UmVjdExpc3QsRE9NUmVjdExpc3QsRE9NU3RyaW5nTGlzdCwnICtcbiAgJ0RPTVRva2VuTGlzdCxEYXRhVHJhbnNmZXJJdGVtTGlzdCxGaWxlTGlzdCxIVE1MQWxsQ29sbGVjdGlvbixIVE1MQ29sbGVjdGlvbixIVE1MRm9ybUVsZW1lbnQsSFRNTFNlbGVjdEVsZW1lbnQsJyArXG4gICdNZWRpYUxpc3QsTWltZVR5cGVBcnJheSxOYW1lZE5vZGVNYXAsTm9kZUxpc3QsUGFpbnRSZXF1ZXN0TGlzdCxQbHVnaW4sUGx1Z2luQXJyYXksU1ZHTGVuZ3RoTGlzdCxTVkdOdW1iZXJMaXN0LCcgK1xuICAnU1ZHUGF0aFNlZ0xpc3QsU1ZHUG9pbnRMaXN0LFNWR1N0cmluZ0xpc3QsU1ZHVHJhbnNmb3JtTGlzdCxTb3VyY2VCdWZmZXJMaXN0LFN0eWxlU2hlZXRMaXN0LFRleHRUcmFja0N1ZUxpc3QsJyArXG4gICdUZXh0VHJhY2tMaXN0LFRvdWNoTGlzdCcpLnNwbGl0KCcsJyk7XG5cbmZvciAodmFyIGkgPSAwOyBpIDwgRE9NSXRlcmFibGVzLmxlbmd0aDsgaSsrKSB7XG4gIHZhciBOQU1FID0gRE9NSXRlcmFibGVzW2ldO1xuICB2YXIgQ29sbGVjdGlvbiA9IGdsb2JhbFtOQU1FXTtcbiAgdmFyIHByb3RvID0gQ29sbGVjdGlvbiAmJiBDb2xsZWN0aW9uLnByb3RvdHlwZTtcbiAgaWYgKHByb3RvICYmICFwcm90b1tUT19TVFJJTkdfVEFHXSkgaGlkZShwcm90bywgVE9fU1RSSU5HX1RBRywgTkFNRSk7XG4gIEl0ZXJhdG9yc1tOQU1FXSA9IEl0ZXJhdG9ycy5BcnJheTtcbn1cblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vbm9kZV9tb2R1bGVzL19jb3JlLWpzQDIuNS4zQGNvcmUtanMvbGlicmFyeS9tb2R1bGVzL3dlYi5kb20uaXRlcmFibGUuanNcbi8vIG1vZHVsZSBpZCA9IDIxXG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIm1vZHVsZS5leHBvcnRzID0geyBcImRlZmF1bHRcIjogcmVxdWlyZShcImNvcmUtanMvbGlicmFyeS9mbi9wcm9taXNlXCIpLCBfX2VzTW9kdWxlOiB0cnVlIH07XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9ub2RlX21vZHVsZXMvX2JhYmVsLXJ1bnRpbWVANi4yNi4wQGJhYmVsLXJ1bnRpbWUvY29yZS1qcy9wcm9taXNlLmpzXG4vLyBtb2R1bGUgaWQgPSAyMlxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJtb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChpdCkge1xuICBpZiAodHlwZW9mIGl0ICE9ICdmdW5jdGlvbicpIHRocm93IFR5cGVFcnJvcihpdCArICcgaXMgbm90IGEgZnVuY3Rpb24hJyk7XG4gIHJldHVybiBpdDtcbn07XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL25vZGVfbW9kdWxlcy9fY29yZS1qc0AyLjUuM0Bjb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9fYS1mdW5jdGlvbi5qc1xuLy8gbW9kdWxlIGlkID0gMjNcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwibW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoYml0bWFwLCB2YWx1ZSkge1xuICByZXR1cm4ge1xuICAgIGVudW1lcmFibGU6ICEoYml0bWFwICYgMSksXG4gICAgY29uZmlndXJhYmxlOiAhKGJpdG1hcCAmIDIpLFxuICAgIHdyaXRhYmxlOiAhKGJpdG1hcCAmIDQpLFxuICAgIHZhbHVlOiB2YWx1ZVxuICB9O1xufTtcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vbm9kZV9tb2R1bGVzL19jb3JlLWpzQDIuNS4zQGNvcmUtanMvbGlicmFyeS9tb2R1bGVzL19wcm9wZXJ0eS1kZXNjLmpzXG4vLyBtb2R1bGUgaWQgPSAyNFxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJ2YXIgdG9TdHJpbmcgPSB7fS50b1N0cmluZztcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoaXQpIHtcbiAgcmV0dXJuIHRvU3RyaW5nLmNhbGwoaXQpLnNsaWNlKDgsIC0xKTtcbn07XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL25vZGVfbW9kdWxlcy9fY29yZS1qc0AyLjUuM0Bjb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9fY29mLmpzXG4vLyBtb2R1bGUgaWQgPSAyNVxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJ2YXIgZGVmID0gcmVxdWlyZSgnLi9fb2JqZWN0LWRwJykuZjtcbnZhciBoYXMgPSByZXF1aXJlKCcuL19oYXMnKTtcbnZhciBUQUcgPSByZXF1aXJlKCcuL193a3MnKSgndG9TdHJpbmdUYWcnKTtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoaXQsIHRhZywgc3RhdCkge1xuICBpZiAoaXQgJiYgIWhhcyhpdCA9IHN0YXQgPyBpdCA6IGl0LnByb3RvdHlwZSwgVEFHKSkgZGVmKGl0LCBUQUcsIHsgY29uZmlndXJhYmxlOiB0cnVlLCB2YWx1ZTogdGFnIH0pO1xufTtcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vbm9kZV9tb2R1bGVzL19jb3JlLWpzQDIuNS4zQGNvcmUtanMvbGlicmFyeS9tb2R1bGVzL19zZXQtdG8tc3RyaW5nLXRhZy5qc1xuLy8gbW9kdWxlIGlkID0gMjZcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwidmFyIGN0eCA9IHJlcXVpcmUoJy4vX2N0eCcpO1xudmFyIGNhbGwgPSByZXF1aXJlKCcuL19pdGVyLWNhbGwnKTtcbnZhciBpc0FycmF5SXRlciA9IHJlcXVpcmUoJy4vX2lzLWFycmF5LWl0ZXInKTtcbnZhciBhbk9iamVjdCA9IHJlcXVpcmUoJy4vX2FuLW9iamVjdCcpO1xudmFyIHRvTGVuZ3RoID0gcmVxdWlyZSgnLi9fdG8tbGVuZ3RoJyk7XG52YXIgZ2V0SXRlckZuID0gcmVxdWlyZSgnLi9jb3JlLmdldC1pdGVyYXRvci1tZXRob2QnKTtcbnZhciBCUkVBSyA9IHt9O1xudmFyIFJFVFVSTiA9IHt9O1xudmFyIGV4cG9ydHMgPSBtb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChpdGVyYWJsZSwgZW50cmllcywgZm4sIHRoYXQsIElURVJBVE9SKSB7XG4gIHZhciBpdGVyRm4gPSBJVEVSQVRPUiA/IGZ1bmN0aW9uICgpIHsgcmV0dXJuIGl0ZXJhYmxlOyB9IDogZ2V0SXRlckZuKGl0ZXJhYmxlKTtcbiAgdmFyIGYgPSBjdHgoZm4sIHRoYXQsIGVudHJpZXMgPyAyIDogMSk7XG4gIHZhciBpbmRleCA9IDA7XG4gIHZhciBsZW5ndGgsIHN0ZXAsIGl0ZXJhdG9yLCByZXN1bHQ7XG4gIGlmICh0eXBlb2YgaXRlckZuICE9ICdmdW5jdGlvbicpIHRocm93IFR5cGVFcnJvcihpdGVyYWJsZSArICcgaXMgbm90IGl0ZXJhYmxlIScpO1xuICAvLyBmYXN0IGNhc2UgZm9yIGFycmF5cyB3aXRoIGRlZmF1bHQgaXRlcmF0b3JcbiAgaWYgKGlzQXJyYXlJdGVyKGl0ZXJGbikpIGZvciAobGVuZ3RoID0gdG9MZW5ndGgoaXRlcmFibGUubGVuZ3RoKTsgbGVuZ3RoID4gaW5kZXg7IGluZGV4KyspIHtcbiAgICByZXN1bHQgPSBlbnRyaWVzID8gZihhbk9iamVjdChzdGVwID0gaXRlcmFibGVbaW5kZXhdKVswXSwgc3RlcFsxXSkgOiBmKGl0ZXJhYmxlW2luZGV4XSk7XG4gICAgaWYgKHJlc3VsdCA9PT0gQlJFQUsgfHwgcmVzdWx0ID09PSBSRVRVUk4pIHJldHVybiByZXN1bHQ7XG4gIH0gZWxzZSBmb3IgKGl0ZXJhdG9yID0gaXRlckZuLmNhbGwoaXRlcmFibGUpOyAhKHN0ZXAgPSBpdGVyYXRvci5uZXh0KCkpLmRvbmU7KSB7XG4gICAgcmVzdWx0ID0gY2FsbChpdGVyYXRvciwgZiwgc3RlcC52YWx1ZSwgZW50cmllcyk7XG4gICAgaWYgKHJlc3VsdCA9PT0gQlJFQUsgfHwgcmVzdWx0ID09PSBSRVRVUk4pIHJldHVybiByZXN1bHQ7XG4gIH1cbn07XG5leHBvcnRzLkJSRUFLID0gQlJFQUs7XG5leHBvcnRzLlJFVFVSTiA9IFJFVFVSTjtcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vbm9kZV9tb2R1bGVzL19jb3JlLWpzQDIuNS4zQGNvcmUtanMvbGlicmFyeS9tb2R1bGVzL19mb3Itb2YuanNcbi8vIG1vZHVsZSBpZCA9IDI3XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsImltcG9ydCBTcHJpdGVTaGVldCBmcm9tICcuL1Nwcml0ZVNoZWV0LmpzJ1xyXG5pbXBvcnQge2NyZWF0ZUFuaW19IGZyb20gJy4vYW5pbS5qcydcclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBsb2FkSW1hZ2UodXJsKSB7XHJcbiAgICByZXR1cm4gbmV3IFByb21pc2UocmVzb2x2ZSA9PiB7XHJcbiAgICAgICAgY29uc3QgaW1hZ2UgPSBuZXcgSW1hZ2UoKTtcclxuICAgICAgICBpbWFnZS5hZGRFdmVudExpc3RlbmVyKCdsb2FkJywgKCkgPT4ge1xyXG4gICAgICAgICAgICByZXNvbHZlKGltYWdlKVxyXG4gICAgICAgIH0pO1xyXG5cclxuICAgICAgICBpbWFnZS5zcmMgPSB1cmxcclxuICAgIH0pXHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBsb2FkSlNPTih1cmwpIHtcclxuICAgIHJldHVybiBmZXRjaCh1cmwpXHJcbiAgICAgICAgLnRoZW4ociA9PiByLmpzb24oKSk7XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBsb2FkU3ByaXRlU2hlZXQobmFtZSkge1xyXG4gICAgcmV0dXJuIGxvYWRKU09OKGAvc3ByaXRlcy8ke25hbWV9Lmpzb25gKVxyXG4gICAgICAgIC50aGVuKHNoZWV0U3BlYyA9PiBQcm9taXNlLmFsbChbXHJcbiAgICAgICAgICAgICAgICBzaGVldFNwZWMsXHJcbiAgICAgICAgICAgICAgICBsb2FkSW1hZ2Uoc2hlZXRTcGVjLmltYWdlVVJMKVxyXG4gICAgICAgICAgICBdKSlcclxuICAgICAgICAgICAgLnRoZW4oKFtzaGVldFNwZWMsIGltYWdlXSkgPT4ge1xyXG4gICAgICAgICAgICAgICAgY29uc3Qgc3ByaXRlcyA9IG5ldyBTcHJpdGVTaGVldChcclxuICAgICAgICAgICAgICAgICAgICBpbWFnZSxcclxuICAgICAgICAgICAgICAgICAgICBzaGVldFNwZWMudGlsZVcsXHJcbiAgICAgICAgICAgICAgICAgICAgc2hlZXRTcGVjLnRpbGVIKTtcclxuXHJcbiAgICAgICAgICAgICAgICBpZiAoc2hlZXRTcGVjLnRpbGVzKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgc2hlZXRTcGVjLnRpbGVzLmZvckVhY2godGlsZVNwZWMgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBzcHJpdGVzLmRlZmluZVRpbGUoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aWxlU3BlYy5uYW1lLCAuLi50aWxlU3BlYy5pbmRleCk7XHJcbiAgICAgICAgICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICBpZiAoc2hlZXRTcGVjLmZyYW1lcykge1xyXG4gICAgICAgICAgICAgICAgICAgIHNoZWV0U3BlYy5mcmFtZXMuZm9yRWFjaChmcmFtZVNwZWMgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBzcHJpdGVzLmRlZmluZShmcmFtZVNwZWMubmFtZSwgLi4uZnJhbWVTcGVjLnJlY3QpO1xyXG4gICAgICAgICAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgaWYgKHNoZWV0U3BlYy5hbmltYXRpb25zKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgc2hlZXRTcGVjLmFuaW1hdGlvbnMuZm9yRWFjaChhbmltU3BlYyA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IGFuaW1hdGlvbiA9IGNyZWF0ZUFuaW0oYW5pbVNwZWMuZnJhbWVzLCBhbmltU3BlYy5mcmFtZUxlbik7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICBzcHJpdGVzLmRlZmluZUFuaW0oYW5pbVNwZWMubmFtZSwgYW5pbWF0aW9uKTtcclxuICAgICAgICAgICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgIHJldHVybiBzcHJpdGVzO1xyXG4gICAgICAgIH0pO1xyXG59XHJcblxyXG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9wdWJsaWMvanMvbG9hZGVyLmpzIiwibW9kdWxlLmV4cG9ydHMgPSB0cnVlO1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9ub2RlX21vZHVsZXMvX2NvcmUtanNAMi41LjNAY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX2xpYnJhcnkuanNcbi8vIG1vZHVsZSBpZCA9IDMwXG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIi8vIDE5LjEuMi4yIC8gMTUuMi4zLjUgT2JqZWN0LmNyZWF0ZShPIFssIFByb3BlcnRpZXNdKVxudmFyIGFuT2JqZWN0ID0gcmVxdWlyZSgnLi9fYW4tb2JqZWN0Jyk7XG52YXIgZFBzID0gcmVxdWlyZSgnLi9fb2JqZWN0LWRwcycpO1xudmFyIGVudW1CdWdLZXlzID0gcmVxdWlyZSgnLi9fZW51bS1idWcta2V5cycpO1xudmFyIElFX1BST1RPID0gcmVxdWlyZSgnLi9fc2hhcmVkLWtleScpKCdJRV9QUk9UTycpO1xudmFyIEVtcHR5ID0gZnVuY3Rpb24gKCkgeyAvKiBlbXB0eSAqLyB9O1xudmFyIFBST1RPVFlQRSA9ICdwcm90b3R5cGUnO1xuXG4vLyBDcmVhdGUgb2JqZWN0IHdpdGggZmFrZSBgbnVsbGAgcHJvdG90eXBlOiB1c2UgaWZyYW1lIE9iamVjdCB3aXRoIGNsZWFyZWQgcHJvdG90eXBlXG52YXIgY3JlYXRlRGljdCA9IGZ1bmN0aW9uICgpIHtcbiAgLy8gVGhyYXNoLCB3YXN0ZSBhbmQgc29kb215OiBJRSBHQyBidWdcbiAgdmFyIGlmcmFtZSA9IHJlcXVpcmUoJy4vX2RvbS1jcmVhdGUnKSgnaWZyYW1lJyk7XG4gIHZhciBpID0gZW51bUJ1Z0tleXMubGVuZ3RoO1xuICB2YXIgbHQgPSAnPCc7XG4gIHZhciBndCA9ICc+JztcbiAgdmFyIGlmcmFtZURvY3VtZW50O1xuICBpZnJhbWUuc3R5bGUuZGlzcGxheSA9ICdub25lJztcbiAgcmVxdWlyZSgnLi9faHRtbCcpLmFwcGVuZENoaWxkKGlmcmFtZSk7XG4gIGlmcmFtZS5zcmMgPSAnamF2YXNjcmlwdDonOyAvLyBlc2xpbnQtZGlzYWJsZS1saW5lIG5vLXNjcmlwdC11cmxcbiAgLy8gY3JlYXRlRGljdCA9IGlmcmFtZS5jb250ZW50V2luZG93Lk9iamVjdDtcbiAgLy8gaHRtbC5yZW1vdmVDaGlsZChpZnJhbWUpO1xuICBpZnJhbWVEb2N1bWVudCA9IGlmcmFtZS5jb250ZW50V2luZG93LmRvY3VtZW50O1xuICBpZnJhbWVEb2N1bWVudC5vcGVuKCk7XG4gIGlmcmFtZURvY3VtZW50LndyaXRlKGx0ICsgJ3NjcmlwdCcgKyBndCArICdkb2N1bWVudC5GPU9iamVjdCcgKyBsdCArICcvc2NyaXB0JyArIGd0KTtcbiAgaWZyYW1lRG9jdW1lbnQuY2xvc2UoKTtcbiAgY3JlYXRlRGljdCA9IGlmcmFtZURvY3VtZW50LkY7XG4gIHdoaWxlIChpLS0pIGRlbGV0ZSBjcmVhdGVEaWN0W1BST1RPVFlQRV1bZW51bUJ1Z0tleXNbaV1dO1xuICByZXR1cm4gY3JlYXRlRGljdCgpO1xufTtcblxubW9kdWxlLmV4cG9ydHMgPSBPYmplY3QuY3JlYXRlIHx8IGZ1bmN0aW9uIGNyZWF0ZShPLCBQcm9wZXJ0aWVzKSB7XG4gIHZhciByZXN1bHQ7XG4gIGlmIChPICE9PSBudWxsKSB7XG4gICAgRW1wdHlbUFJPVE9UWVBFXSA9IGFuT2JqZWN0KE8pO1xuICAgIHJlc3VsdCA9IG5ldyBFbXB0eSgpO1xuICAgIEVtcHR5W1BST1RPVFlQRV0gPSBudWxsO1xuICAgIC8vIGFkZCBcIl9fcHJvdG9fX1wiIGZvciBPYmplY3QuZ2V0UHJvdG90eXBlT2YgcG9seWZpbGxcbiAgICByZXN1bHRbSUVfUFJPVE9dID0gTztcbiAgfSBlbHNlIHJlc3VsdCA9IGNyZWF0ZURpY3QoKTtcbiAgcmV0dXJuIFByb3BlcnRpZXMgPT09IHVuZGVmaW5lZCA/IHJlc3VsdCA6IGRQcyhyZXN1bHQsIFByb3BlcnRpZXMpO1xufTtcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vbm9kZV9tb2R1bGVzL19jb3JlLWpzQDIuNS4zQGNvcmUtanMvbGlicmFyeS9tb2R1bGVzL19vYmplY3QtY3JlYXRlLmpzXG4vLyBtb2R1bGUgaWQgPSAzMVxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCIvLyA3LjEuMTUgVG9MZW5ndGhcbnZhciB0b0ludGVnZXIgPSByZXF1aXJlKCcuL190by1pbnRlZ2VyJyk7XG52YXIgbWluID0gTWF0aC5taW47XG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChpdCkge1xuICByZXR1cm4gaXQgPiAwID8gbWluKHRvSW50ZWdlcihpdCksIDB4MWZmZmZmZmZmZmZmZmYpIDogMDsgLy8gcG93KDIsIDUzKSAtIDEgPT0gOTAwNzE5OTI1NDc0MDk5MVxufTtcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vbm9kZV9tb2R1bGVzL19jb3JlLWpzQDIuNS4zQGNvcmUtanMvbGlicmFyeS9tb2R1bGVzL190by1sZW5ndGguanNcbi8vIG1vZHVsZSBpZCA9IDMyXG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsInZhciBpZCA9IDA7XG52YXIgcHggPSBNYXRoLnJhbmRvbSgpO1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoa2V5KSB7XG4gIHJldHVybiAnU3ltYm9sKCcuY29uY2F0KGtleSA9PT0gdW5kZWZpbmVkID8gJycgOiBrZXksICcpXycsICgrK2lkICsgcHgpLnRvU3RyaW5nKDM2KSk7XG59O1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9ub2RlX21vZHVsZXMvX2NvcmUtanNAMi41LjNAY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX3VpZC5qc1xuLy8gbW9kdWxlIGlkID0gMzNcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiLy8gNy4xLjEzIFRvT2JqZWN0KGFyZ3VtZW50KVxudmFyIGRlZmluZWQgPSByZXF1aXJlKCcuL19kZWZpbmVkJyk7XG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChpdCkge1xuICByZXR1cm4gT2JqZWN0KGRlZmluZWQoaXQpKTtcbn07XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL25vZGVfbW9kdWxlcy9fY29yZS1qc0AyLjUuM0Bjb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9fdG8tb2JqZWN0LmpzXG4vLyBtb2R1bGUgaWQgPSAzNFxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCIvLyBnZXR0aW5nIHRhZyBmcm9tIDE5LjEuMy42IE9iamVjdC5wcm90b3R5cGUudG9TdHJpbmcoKVxudmFyIGNvZiA9IHJlcXVpcmUoJy4vX2NvZicpO1xudmFyIFRBRyA9IHJlcXVpcmUoJy4vX3drcycpKCd0b1N0cmluZ1RhZycpO1xuLy8gRVMzIHdyb25nIGhlcmVcbnZhciBBUkcgPSBjb2YoZnVuY3Rpb24gKCkgeyByZXR1cm4gYXJndW1lbnRzOyB9KCkpID09ICdBcmd1bWVudHMnO1xuXG4vLyBmYWxsYmFjayBmb3IgSUUxMSBTY3JpcHQgQWNjZXNzIERlbmllZCBlcnJvclxudmFyIHRyeUdldCA9IGZ1bmN0aW9uIChpdCwga2V5KSB7XG4gIHRyeSB7XG4gICAgcmV0dXJuIGl0W2tleV07XG4gIH0gY2F0Y2ggKGUpIHsgLyogZW1wdHkgKi8gfVxufTtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoaXQpIHtcbiAgdmFyIE8sIFQsIEI7XG4gIHJldHVybiBpdCA9PT0gdW5kZWZpbmVkID8gJ1VuZGVmaW5lZCcgOiBpdCA9PT0gbnVsbCA/ICdOdWxsJ1xuICAgIC8vIEBAdG9TdHJpbmdUYWcgY2FzZVxuICAgIDogdHlwZW9mIChUID0gdHJ5R2V0KE8gPSBPYmplY3QoaXQpLCBUQUcpKSA9PSAnc3RyaW5nJyA/IFRcbiAgICAvLyBidWlsdGluVGFnIGNhc2VcbiAgICA6IEFSRyA/IGNvZihPKVxuICAgIC8vIEVTMyBhcmd1bWVudHMgZmFsbGJhY2tcbiAgICA6IChCID0gY29mKE8pKSA9PSAnT2JqZWN0JyAmJiB0eXBlb2YgTy5jYWxsZWUgPT0gJ2Z1bmN0aW9uJyA/ICdBcmd1bWVudHMnIDogQjtcbn07XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL25vZGVfbW9kdWxlcy9fY29yZS1qc0AyLjUuM0Bjb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9fY2xhc3NvZi5qc1xuLy8gbW9kdWxlIGlkID0gMzVcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbmV4cG9ydHMuX19lc01vZHVsZSA9IHRydWU7XG5cbnZhciBfaXNJdGVyYWJsZTIgPSByZXF1aXJlKFwiLi4vY29yZS1qcy9pcy1pdGVyYWJsZVwiKTtcblxudmFyIF9pc0l0ZXJhYmxlMyA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX2lzSXRlcmFibGUyKTtcblxudmFyIF9nZXRJdGVyYXRvcjIgPSByZXF1aXJlKFwiLi4vY29yZS1qcy9nZXQtaXRlcmF0b3JcIik7XG5cbnZhciBfZ2V0SXRlcmF0b3IzID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfZ2V0SXRlcmF0b3IyKTtcblxuZnVuY3Rpb24gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChvYmopIHsgcmV0dXJuIG9iaiAmJiBvYmouX19lc01vZHVsZSA/IG9iaiA6IHsgZGVmYXVsdDogb2JqIH07IH1cblxuZXhwb3J0cy5kZWZhdWx0ID0gZnVuY3Rpb24gKCkge1xuICBmdW5jdGlvbiBzbGljZUl0ZXJhdG9yKGFyciwgaSkge1xuICAgIHZhciBfYXJyID0gW107XG4gICAgdmFyIF9uID0gdHJ1ZTtcbiAgICB2YXIgX2QgPSBmYWxzZTtcbiAgICB2YXIgX2UgPSB1bmRlZmluZWQ7XG5cbiAgICB0cnkge1xuICAgICAgZm9yICh2YXIgX2kgPSAoMCwgX2dldEl0ZXJhdG9yMy5kZWZhdWx0KShhcnIpLCBfczsgIShfbiA9IChfcyA9IF9pLm5leHQoKSkuZG9uZSk7IF9uID0gdHJ1ZSkge1xuICAgICAgICBfYXJyLnB1c2goX3MudmFsdWUpO1xuXG4gICAgICAgIGlmIChpICYmIF9hcnIubGVuZ3RoID09PSBpKSBicmVhaztcbiAgICAgIH1cbiAgICB9IGNhdGNoIChlcnIpIHtcbiAgICAgIF9kID0gdHJ1ZTtcbiAgICAgIF9lID0gZXJyO1xuICAgIH0gZmluYWxseSB7XG4gICAgICB0cnkge1xuICAgICAgICBpZiAoIV9uICYmIF9pW1wicmV0dXJuXCJdKSBfaVtcInJldHVyblwiXSgpO1xuICAgICAgfSBmaW5hbGx5IHtcbiAgICAgICAgaWYgKF9kKSB0aHJvdyBfZTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICByZXR1cm4gX2FycjtcbiAgfVxuXG4gIHJldHVybiBmdW5jdGlvbiAoYXJyLCBpKSB7XG4gICAgaWYgKEFycmF5LmlzQXJyYXkoYXJyKSkge1xuICAgICAgcmV0dXJuIGFycjtcbiAgICB9IGVsc2UgaWYgKCgwLCBfaXNJdGVyYWJsZTMuZGVmYXVsdCkoT2JqZWN0KGFycikpKSB7XG4gICAgICByZXR1cm4gc2xpY2VJdGVyYXRvcihhcnIsIGkpO1xuICAgIH0gZWxzZSB7XG4gICAgICB0aHJvdyBuZXcgVHlwZUVycm9yKFwiSW52YWxpZCBhdHRlbXB0IHRvIGRlc3RydWN0dXJlIG5vbi1pdGVyYWJsZSBpbnN0YW5jZVwiKTtcbiAgICB9XG4gIH07XG59KCk7XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9ub2RlX21vZHVsZXMvX2JhYmVsLXJ1bnRpbWVANi4yNi4wQGJhYmVsLXJ1bnRpbWUvaGVscGVycy9zbGljZWRUb0FycmF5LmpzXG4vLyBtb2R1bGUgaWQgPSAzNlxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJcclxuZXhwb3J0ICBjbGFzcyBNYXRyaXgge1xyXG4gICAgY29uc3RydWN0b3IoKSB7XHJcbiAgICAgICAgdGhpcy5ncmlkID0gW11cclxuICAgIH1cclxuXHJcbiAgICBmb3JFYWNoKGNhbGxiYWNrKSB7XHJcbiAgICAgICAgdGhpcy5ncmlkLmZvckVhY2goKGNvbHVtbix4KSA9PiB7XHJcbiAgICAgICAgICAgIGNvbHVtbi5mb3JFYWNoKCh2YWwseSkgPT4ge1xyXG4gICAgICAgICAgICAgICAgY2FsbGJhY2sodmFsLHgseSlcclxuICAgICAgICAgICAgfSlcclxuICAgICAgICB9KVxyXG4gICAgfVxyXG5cclxuICAgIGdldCh4LHkpIHtcclxuICAgICAgICBjb25zdCBjb2wgPSB0aGlzLmdyaWRbeF1cclxuXHJcbiAgICAgICAgaWYgKGNvbCkge1xyXG4gICAgICAgICAgICByZXR1cm4gY29sW3ldXHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiB1bmRlZmluZWRcclxuICAgIH1cclxuXHJcbiAgICBzZXQgKHgseSx2YWx1ZSkge1xyXG4gICAgICAgIGlmICghdGhpcy5ncmlkW3hdKSB7XHJcbiAgICAgICAgICAgIHRoaXMuZ3JpZFt4XSA9IFtdXHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICB0aGlzLmdyaWRbeF1beV0gPSB2YWx1ZVxyXG4gICAgfVxyXG59XHJcblxyXG5leHBvcnQgY2xhc3MgVmVjMiB7XHJcbiAgICBjb25zdHJ1Y3Rvcih4LCB5KSB7XHJcbiAgICAgICAgdGhpcy5zZXQoeCwgeSlcclxuICAgIH1cclxuXHJcbiAgICBzZXQoeCwgeSkge1xyXG4gICAgICAgIHRoaXMueCA9IHhcclxuICAgICAgICB0aGlzLnkgPSB5XHJcbiAgICB9XHJcbn1cclxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vcHVibGljL2pzL21hdGguanMiLCIvLyA3LjEuNCBUb0ludGVnZXJcbnZhciBjZWlsID0gTWF0aC5jZWlsO1xudmFyIGZsb29yID0gTWF0aC5mbG9vcjtcbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGl0KSB7XG4gIHJldHVybiBpc05hTihpdCA9ICtpdCkgPyAwIDogKGl0ID4gMCA/IGZsb29yIDogY2VpbCkoaXQpO1xufTtcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vbm9kZV9tb2R1bGVzL19jb3JlLWpzQDIuNS4zQGNvcmUtanMvbGlicmFyeS9tb2R1bGVzL190by1pbnRlZ2VyLmpzXG4vLyBtb2R1bGUgaWQgPSAzOFxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCIvLyA3LjIuMSBSZXF1aXJlT2JqZWN0Q29lcmNpYmxlKGFyZ3VtZW50KVxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoaXQpIHtcbiAgaWYgKGl0ID09IHVuZGVmaW5lZCkgdGhyb3cgVHlwZUVycm9yKFwiQ2FuJ3QgY2FsbCBtZXRob2Qgb24gIFwiICsgaXQpO1xuICByZXR1cm4gaXQ7XG59O1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9ub2RlX21vZHVsZXMvX2NvcmUtanNAMi41LjNAY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX2RlZmluZWQuanNcbi8vIG1vZHVsZSBpZCA9IDM5XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIid1c2Ugc3RyaWN0JztcbnZhciBMSUJSQVJZID0gcmVxdWlyZSgnLi9fbGlicmFyeScpO1xudmFyICRleHBvcnQgPSByZXF1aXJlKCcuL19leHBvcnQnKTtcbnZhciByZWRlZmluZSA9IHJlcXVpcmUoJy4vX3JlZGVmaW5lJyk7XG52YXIgaGlkZSA9IHJlcXVpcmUoJy4vX2hpZGUnKTtcbnZhciBoYXMgPSByZXF1aXJlKCcuL19oYXMnKTtcbnZhciBJdGVyYXRvcnMgPSByZXF1aXJlKCcuL19pdGVyYXRvcnMnKTtcbnZhciAkaXRlckNyZWF0ZSA9IHJlcXVpcmUoJy4vX2l0ZXItY3JlYXRlJyk7XG52YXIgc2V0VG9TdHJpbmdUYWcgPSByZXF1aXJlKCcuL19zZXQtdG8tc3RyaW5nLXRhZycpO1xudmFyIGdldFByb3RvdHlwZU9mID0gcmVxdWlyZSgnLi9fb2JqZWN0LWdwbycpO1xudmFyIElURVJBVE9SID0gcmVxdWlyZSgnLi9fd2tzJykoJ2l0ZXJhdG9yJyk7XG52YXIgQlVHR1kgPSAhKFtdLmtleXMgJiYgJ25leHQnIGluIFtdLmtleXMoKSk7IC8vIFNhZmFyaSBoYXMgYnVnZ3kgaXRlcmF0b3JzIHcvbyBgbmV4dGBcbnZhciBGRl9JVEVSQVRPUiA9ICdAQGl0ZXJhdG9yJztcbnZhciBLRVlTID0gJ2tleXMnO1xudmFyIFZBTFVFUyA9ICd2YWx1ZXMnO1xuXG52YXIgcmV0dXJuVGhpcyA9IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHRoaXM7IH07XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKEJhc2UsIE5BTUUsIENvbnN0cnVjdG9yLCBuZXh0LCBERUZBVUxULCBJU19TRVQsIEZPUkNFRCkge1xuICAkaXRlckNyZWF0ZShDb25zdHJ1Y3RvciwgTkFNRSwgbmV4dCk7XG4gIHZhciBnZXRNZXRob2QgPSBmdW5jdGlvbiAoa2luZCkge1xuICAgIGlmICghQlVHR1kgJiYga2luZCBpbiBwcm90bykgcmV0dXJuIHByb3RvW2tpbmRdO1xuICAgIHN3aXRjaCAoa2luZCkge1xuICAgICAgY2FzZSBLRVlTOiByZXR1cm4gZnVuY3Rpb24ga2V5cygpIHsgcmV0dXJuIG5ldyBDb25zdHJ1Y3Rvcih0aGlzLCBraW5kKTsgfTtcbiAgICAgIGNhc2UgVkFMVUVTOiByZXR1cm4gZnVuY3Rpb24gdmFsdWVzKCkgeyByZXR1cm4gbmV3IENvbnN0cnVjdG9yKHRoaXMsIGtpbmQpOyB9O1xuICAgIH0gcmV0dXJuIGZ1bmN0aW9uIGVudHJpZXMoKSB7IHJldHVybiBuZXcgQ29uc3RydWN0b3IodGhpcywga2luZCk7IH07XG4gIH07XG4gIHZhciBUQUcgPSBOQU1FICsgJyBJdGVyYXRvcic7XG4gIHZhciBERUZfVkFMVUVTID0gREVGQVVMVCA9PSBWQUxVRVM7XG4gIHZhciBWQUxVRVNfQlVHID0gZmFsc2U7XG4gIHZhciBwcm90byA9IEJhc2UucHJvdG90eXBlO1xuICB2YXIgJG5hdGl2ZSA9IHByb3RvW0lURVJBVE9SXSB8fCBwcm90b1tGRl9JVEVSQVRPUl0gfHwgREVGQVVMVCAmJiBwcm90b1tERUZBVUxUXTtcbiAgdmFyICRkZWZhdWx0ID0gKCFCVUdHWSAmJiAkbmF0aXZlKSB8fCBnZXRNZXRob2QoREVGQVVMVCk7XG4gIHZhciAkZW50cmllcyA9IERFRkFVTFQgPyAhREVGX1ZBTFVFUyA/ICRkZWZhdWx0IDogZ2V0TWV0aG9kKCdlbnRyaWVzJykgOiB1bmRlZmluZWQ7XG4gIHZhciAkYW55TmF0aXZlID0gTkFNRSA9PSAnQXJyYXknID8gcHJvdG8uZW50cmllcyB8fCAkbmF0aXZlIDogJG5hdGl2ZTtcbiAgdmFyIG1ldGhvZHMsIGtleSwgSXRlcmF0b3JQcm90b3R5cGU7XG4gIC8vIEZpeCBuYXRpdmVcbiAgaWYgKCRhbnlOYXRpdmUpIHtcbiAgICBJdGVyYXRvclByb3RvdHlwZSA9IGdldFByb3RvdHlwZU9mKCRhbnlOYXRpdmUuY2FsbChuZXcgQmFzZSgpKSk7XG4gICAgaWYgKEl0ZXJhdG9yUHJvdG90eXBlICE9PSBPYmplY3QucHJvdG90eXBlICYmIEl0ZXJhdG9yUHJvdG90eXBlLm5leHQpIHtcbiAgICAgIC8vIFNldCBAQHRvU3RyaW5nVGFnIHRvIG5hdGl2ZSBpdGVyYXRvcnNcbiAgICAgIHNldFRvU3RyaW5nVGFnKEl0ZXJhdG9yUHJvdG90eXBlLCBUQUcsIHRydWUpO1xuICAgICAgLy8gZml4IGZvciBzb21lIG9sZCBlbmdpbmVzXG4gICAgICBpZiAoIUxJQlJBUlkgJiYgIWhhcyhJdGVyYXRvclByb3RvdHlwZSwgSVRFUkFUT1IpKSBoaWRlKEl0ZXJhdG9yUHJvdG90eXBlLCBJVEVSQVRPUiwgcmV0dXJuVGhpcyk7XG4gICAgfVxuICB9XG4gIC8vIGZpeCBBcnJheSN7dmFsdWVzLCBAQGl0ZXJhdG9yfS5uYW1lIGluIFY4IC8gRkZcbiAgaWYgKERFRl9WQUxVRVMgJiYgJG5hdGl2ZSAmJiAkbmF0aXZlLm5hbWUgIT09IFZBTFVFUykge1xuICAgIFZBTFVFU19CVUcgPSB0cnVlO1xuICAgICRkZWZhdWx0ID0gZnVuY3Rpb24gdmFsdWVzKCkgeyByZXR1cm4gJG5hdGl2ZS5jYWxsKHRoaXMpOyB9O1xuICB9XG4gIC8vIERlZmluZSBpdGVyYXRvclxuICBpZiAoKCFMSUJSQVJZIHx8IEZPUkNFRCkgJiYgKEJVR0dZIHx8IFZBTFVFU19CVUcgfHwgIXByb3RvW0lURVJBVE9SXSkpIHtcbiAgICBoaWRlKHByb3RvLCBJVEVSQVRPUiwgJGRlZmF1bHQpO1xuICB9XG4gIC8vIFBsdWcgZm9yIGxpYnJhcnlcbiAgSXRlcmF0b3JzW05BTUVdID0gJGRlZmF1bHQ7XG4gIEl0ZXJhdG9yc1tUQUddID0gcmV0dXJuVGhpcztcbiAgaWYgKERFRkFVTFQpIHtcbiAgICBtZXRob2RzID0ge1xuICAgICAgdmFsdWVzOiBERUZfVkFMVUVTID8gJGRlZmF1bHQgOiBnZXRNZXRob2QoVkFMVUVTKSxcbiAgICAgIGtleXM6IElTX1NFVCA/ICRkZWZhdWx0IDogZ2V0TWV0aG9kKEtFWVMpLFxuICAgICAgZW50cmllczogJGVudHJpZXNcbiAgICB9O1xuICAgIGlmIChGT1JDRUQpIGZvciAoa2V5IGluIG1ldGhvZHMpIHtcbiAgICAgIGlmICghKGtleSBpbiBwcm90bykpIHJlZGVmaW5lKHByb3RvLCBrZXksIG1ldGhvZHNba2V5XSk7XG4gICAgfSBlbHNlICRleHBvcnQoJGV4cG9ydC5QICsgJGV4cG9ydC5GICogKEJVR0dZIHx8IFZBTFVFU19CVUcpLCBOQU1FLCBtZXRob2RzKTtcbiAgfVxuICByZXR1cm4gbWV0aG9kcztcbn07XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL25vZGVfbW9kdWxlcy9fY29yZS1qc0AyLjUuM0Bjb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9faXRlci1kZWZpbmUuanNcbi8vIG1vZHVsZSBpZCA9IDQwXG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsInZhciBpc09iamVjdCA9IHJlcXVpcmUoJy4vX2lzLW9iamVjdCcpO1xudmFyIGRvY3VtZW50ID0gcmVxdWlyZSgnLi9fZ2xvYmFsJykuZG9jdW1lbnQ7XG4vLyB0eXBlb2YgZG9jdW1lbnQuY3JlYXRlRWxlbWVudCBpcyAnb2JqZWN0JyBpbiBvbGQgSUVcbnZhciBpcyA9IGlzT2JqZWN0KGRvY3VtZW50KSAmJiBpc09iamVjdChkb2N1bWVudC5jcmVhdGVFbGVtZW50KTtcbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGl0KSB7XG4gIHJldHVybiBpcyA/IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoaXQpIDoge307XG59O1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9ub2RlX21vZHVsZXMvX2NvcmUtanNAMi41LjNAY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX2RvbS1jcmVhdGUuanNcbi8vIG1vZHVsZSBpZCA9IDQxXG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIi8vIDcuMS4xIFRvUHJpbWl0aXZlKGlucHV0IFssIFByZWZlcnJlZFR5cGVdKVxudmFyIGlzT2JqZWN0ID0gcmVxdWlyZSgnLi9faXMtb2JqZWN0Jyk7XG4vLyBpbnN0ZWFkIG9mIHRoZSBFUzYgc3BlYyB2ZXJzaW9uLCB3ZSBkaWRuJ3QgaW1wbGVtZW50IEBAdG9QcmltaXRpdmUgY2FzZVxuLy8gYW5kIHRoZSBzZWNvbmQgYXJndW1lbnQgLSBmbGFnIC0gcHJlZmVycmVkIHR5cGUgaXMgYSBzdHJpbmdcbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGl0LCBTKSB7XG4gIGlmICghaXNPYmplY3QoaXQpKSByZXR1cm4gaXQ7XG4gIHZhciBmbiwgdmFsO1xuICBpZiAoUyAmJiB0eXBlb2YgKGZuID0gaXQudG9TdHJpbmcpID09ICdmdW5jdGlvbicgJiYgIWlzT2JqZWN0KHZhbCA9IGZuLmNhbGwoaXQpKSkgcmV0dXJuIHZhbDtcbiAgaWYgKHR5cGVvZiAoZm4gPSBpdC52YWx1ZU9mKSA9PSAnZnVuY3Rpb24nICYmICFpc09iamVjdCh2YWwgPSBmbi5jYWxsKGl0KSkpIHJldHVybiB2YWw7XG4gIGlmICghUyAmJiB0eXBlb2YgKGZuID0gaXQudG9TdHJpbmcpID09ICdmdW5jdGlvbicgJiYgIWlzT2JqZWN0KHZhbCA9IGZuLmNhbGwoaXQpKSkgcmV0dXJuIHZhbDtcbiAgdGhyb3cgVHlwZUVycm9yKFwiQ2FuJ3QgY29udmVydCBvYmplY3QgdG8gcHJpbWl0aXZlIHZhbHVlXCIpO1xufTtcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vbm9kZV9tb2R1bGVzL19jb3JlLWpzQDIuNS4zQGNvcmUtanMvbGlicmFyeS9tb2R1bGVzL190by1wcmltaXRpdmUuanNcbi8vIG1vZHVsZSBpZCA9IDQyXG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIi8vIDE5LjEuMi4xNCAvIDE1LjIuMy4xNCBPYmplY3Qua2V5cyhPKVxudmFyICRrZXlzID0gcmVxdWlyZSgnLi9fb2JqZWN0LWtleXMtaW50ZXJuYWwnKTtcbnZhciBlbnVtQnVnS2V5cyA9IHJlcXVpcmUoJy4vX2VudW0tYnVnLWtleXMnKTtcblxubW9kdWxlLmV4cG9ydHMgPSBPYmplY3Qua2V5cyB8fCBmdW5jdGlvbiBrZXlzKE8pIHtcbiAgcmV0dXJuICRrZXlzKE8sIGVudW1CdWdLZXlzKTtcbn07XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL25vZGVfbW9kdWxlcy9fY29yZS1qc0AyLjUuM0Bjb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9fb2JqZWN0LWtleXMuanNcbi8vIG1vZHVsZSBpZCA9IDQzXG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsInZhciBzaGFyZWQgPSByZXF1aXJlKCcuL19zaGFyZWQnKSgna2V5cycpO1xudmFyIHVpZCA9IHJlcXVpcmUoJy4vX3VpZCcpO1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoa2V5KSB7XG4gIHJldHVybiBzaGFyZWRba2V5XSB8fCAoc2hhcmVkW2tleV0gPSB1aWQoa2V5KSk7XG59O1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9ub2RlX21vZHVsZXMvX2NvcmUtanNAMi41LjNAY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX3NoYXJlZC1rZXkuanNcbi8vIG1vZHVsZSBpZCA9IDQ0XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsInZhciBnbG9iYWwgPSByZXF1aXJlKCcuL19nbG9iYWwnKTtcbnZhciBTSEFSRUQgPSAnX19jb3JlLWpzX3NoYXJlZF9fJztcbnZhciBzdG9yZSA9IGdsb2JhbFtTSEFSRURdIHx8IChnbG9iYWxbU0hBUkVEXSA9IHt9KTtcbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGtleSkge1xuICByZXR1cm4gc3RvcmVba2V5XSB8fCAoc3RvcmVba2V5XSA9IHt9KTtcbn07XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL25vZGVfbW9kdWxlcy9fY29yZS1qc0AyLjUuM0Bjb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9fc2hhcmVkLmpzXG4vLyBtb2R1bGUgaWQgPSA0NVxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCIvLyBJRSA4LSBkb24ndCBlbnVtIGJ1ZyBrZXlzXG5tb2R1bGUuZXhwb3J0cyA9IChcbiAgJ2NvbnN0cnVjdG9yLGhhc093blByb3BlcnR5LGlzUHJvdG90eXBlT2YscHJvcGVydHlJc0VudW1lcmFibGUsdG9Mb2NhbGVTdHJpbmcsdG9TdHJpbmcsdmFsdWVPZidcbikuc3BsaXQoJywnKTtcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vbm9kZV9tb2R1bGVzL19jb3JlLWpzQDIuNS4zQGNvcmUtanMvbGlicmFyeS9tb2R1bGVzL19lbnVtLWJ1Zy1rZXlzLmpzXG4vLyBtb2R1bGUgaWQgPSA0NlxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJtb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChpdCwgQ29uc3RydWN0b3IsIG5hbWUsIGZvcmJpZGRlbkZpZWxkKSB7XG4gIGlmICghKGl0IGluc3RhbmNlb2YgQ29uc3RydWN0b3IpIHx8IChmb3JiaWRkZW5GaWVsZCAhPT0gdW5kZWZpbmVkICYmIGZvcmJpZGRlbkZpZWxkIGluIGl0KSkge1xuICAgIHRocm93IFR5cGVFcnJvcihuYW1lICsgJzogaW5jb3JyZWN0IGludm9jYXRpb24hJyk7XG4gIH0gcmV0dXJuIGl0O1xufTtcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vbm9kZV9tb2R1bGVzL19jb3JlLWpzQDIuNS4zQGNvcmUtanMvbGlicmFyeS9tb2R1bGVzL19hbi1pbnN0YW5jZS5qc1xuLy8gbW9kdWxlIGlkID0gNDdcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwidmFyIGNsYXNzb2YgPSByZXF1aXJlKCcuL19jbGFzc29mJyk7XG52YXIgSVRFUkFUT1IgPSByZXF1aXJlKCcuL193a3MnKSgnaXRlcmF0b3InKTtcbnZhciBJdGVyYXRvcnMgPSByZXF1aXJlKCcuL19pdGVyYXRvcnMnKTtcbm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZSgnLi9fY29yZScpLmdldEl0ZXJhdG9yTWV0aG9kID0gZnVuY3Rpb24gKGl0KSB7XG4gIGlmIChpdCAhPSB1bmRlZmluZWQpIHJldHVybiBpdFtJVEVSQVRPUl1cbiAgICB8fCBpdFsnQEBpdGVyYXRvciddXG4gICAgfHwgSXRlcmF0b3JzW2NsYXNzb2YoaXQpXTtcbn07XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL25vZGVfbW9kdWxlcy9fY29yZS1qc0AyLjUuM0Bjb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9jb3JlLmdldC1pdGVyYXRvci1tZXRob2QuanNcbi8vIG1vZHVsZSBpZCA9IDQ4XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIid1c2Ugc3RyaWN0Jztcbi8vIDI1LjQuMS41IE5ld1Byb21pc2VDYXBhYmlsaXR5KEMpXG52YXIgYUZ1bmN0aW9uID0gcmVxdWlyZSgnLi9fYS1mdW5jdGlvbicpO1xuXG5mdW5jdGlvbiBQcm9taXNlQ2FwYWJpbGl0eShDKSB7XG4gIHZhciByZXNvbHZlLCByZWplY3Q7XG4gIHRoaXMucHJvbWlzZSA9IG5ldyBDKGZ1bmN0aW9uICgkJHJlc29sdmUsICQkcmVqZWN0KSB7XG4gICAgaWYgKHJlc29sdmUgIT09IHVuZGVmaW5lZCB8fCByZWplY3QgIT09IHVuZGVmaW5lZCkgdGhyb3cgVHlwZUVycm9yKCdCYWQgUHJvbWlzZSBjb25zdHJ1Y3RvcicpO1xuICAgIHJlc29sdmUgPSAkJHJlc29sdmU7XG4gICAgcmVqZWN0ID0gJCRyZWplY3Q7XG4gIH0pO1xuICB0aGlzLnJlc29sdmUgPSBhRnVuY3Rpb24ocmVzb2x2ZSk7XG4gIHRoaXMucmVqZWN0ID0gYUZ1bmN0aW9uKHJlamVjdCk7XG59XG5cbm1vZHVsZS5leHBvcnRzLmYgPSBmdW5jdGlvbiAoQykge1xuICByZXR1cm4gbmV3IFByb21pc2VDYXBhYmlsaXR5KEMpO1xufTtcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vbm9kZV9tb2R1bGVzL19jb3JlLWpzQDIuNS4zQGNvcmUtanMvbGlicmFyeS9tb2R1bGVzL19uZXctcHJvbWlzZS1jYXBhYmlsaXR5LmpzXG4vLyBtb2R1bGUgaWQgPSA0OVxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJ2YXIgaGlkZSA9IHJlcXVpcmUoJy4vX2hpZGUnKTtcbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKHRhcmdldCwgc3JjLCBzYWZlKSB7XG4gIGZvciAodmFyIGtleSBpbiBzcmMpIHtcbiAgICBpZiAoc2FmZSAmJiB0YXJnZXRba2V5XSkgdGFyZ2V0W2tleV0gPSBzcmNba2V5XTtcbiAgICBlbHNlIGhpZGUodGFyZ2V0LCBrZXksIHNyY1trZXldKTtcbiAgfSByZXR1cm4gdGFyZ2V0O1xufTtcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vbm9kZV9tb2R1bGVzL19jb3JlLWpzQDIuNS4zQGNvcmUtanMvbGlicmFyeS9tb2R1bGVzL19yZWRlZmluZS1hbGwuanNcbi8vIG1vZHVsZSBpZCA9IDUwXG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIm1vZHVsZS5leHBvcnRzID0geyBcImRlZmF1bHRcIjogcmVxdWlyZShcImNvcmUtanMvbGlicmFyeS9mbi9nZXQtaXRlcmF0b3JcIiksIF9fZXNNb2R1bGU6IHRydWUgfTtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL25vZGVfbW9kdWxlcy9fYmFiZWwtcnVudGltZUA2LjI2LjBAYmFiZWwtcnVudGltZS9jb3JlLWpzL2dldC1pdGVyYXRvci5qc1xuLy8gbW9kdWxlIGlkID0gNTFcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwibW9kdWxlLmV4cG9ydHMgPSB7IFwiZGVmYXVsdFwiOiByZXF1aXJlKFwiY29yZS1qcy9saWJyYXJ5L2ZuL3N5bWJvbFwiKSwgX19lc01vZHVsZTogdHJ1ZSB9O1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vbm9kZV9tb2R1bGVzL19iYWJlbC1ydW50aW1lQDYuMjYuMEBiYWJlbC1ydW50aW1lL2NvcmUtanMvc3ltYm9sLmpzXG4vLyBtb2R1bGUgaWQgPSA1MlxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJ2YXIgTUVUQSA9IHJlcXVpcmUoJy4vX3VpZCcpKCdtZXRhJyk7XG52YXIgaXNPYmplY3QgPSByZXF1aXJlKCcuL19pcy1vYmplY3QnKTtcbnZhciBoYXMgPSByZXF1aXJlKCcuL19oYXMnKTtcbnZhciBzZXREZXNjID0gcmVxdWlyZSgnLi9fb2JqZWN0LWRwJykuZjtcbnZhciBpZCA9IDA7XG52YXIgaXNFeHRlbnNpYmxlID0gT2JqZWN0LmlzRXh0ZW5zaWJsZSB8fCBmdW5jdGlvbiAoKSB7XG4gIHJldHVybiB0cnVlO1xufTtcbnZhciBGUkVFWkUgPSAhcmVxdWlyZSgnLi9fZmFpbHMnKShmdW5jdGlvbiAoKSB7XG4gIHJldHVybiBpc0V4dGVuc2libGUoT2JqZWN0LnByZXZlbnRFeHRlbnNpb25zKHt9KSk7XG59KTtcbnZhciBzZXRNZXRhID0gZnVuY3Rpb24gKGl0KSB7XG4gIHNldERlc2MoaXQsIE1FVEEsIHsgdmFsdWU6IHtcbiAgICBpOiAnTycgKyArK2lkLCAvLyBvYmplY3QgSURcbiAgICB3OiB7fSAgICAgICAgICAvLyB3ZWFrIGNvbGxlY3Rpb25zIElEc1xuICB9IH0pO1xufTtcbnZhciBmYXN0S2V5ID0gZnVuY3Rpb24gKGl0LCBjcmVhdGUpIHtcbiAgLy8gcmV0dXJuIHByaW1pdGl2ZSB3aXRoIHByZWZpeFxuICBpZiAoIWlzT2JqZWN0KGl0KSkgcmV0dXJuIHR5cGVvZiBpdCA9PSAnc3ltYm9sJyA/IGl0IDogKHR5cGVvZiBpdCA9PSAnc3RyaW5nJyA/ICdTJyA6ICdQJykgKyBpdDtcbiAgaWYgKCFoYXMoaXQsIE1FVEEpKSB7XG4gICAgLy8gY2FuJ3Qgc2V0IG1ldGFkYXRhIHRvIHVuY2F1Z2h0IGZyb3plbiBvYmplY3RcbiAgICBpZiAoIWlzRXh0ZW5zaWJsZShpdCkpIHJldHVybiAnRic7XG4gICAgLy8gbm90IG5lY2Vzc2FyeSB0byBhZGQgbWV0YWRhdGFcbiAgICBpZiAoIWNyZWF0ZSkgcmV0dXJuICdFJztcbiAgICAvLyBhZGQgbWlzc2luZyBtZXRhZGF0YVxuICAgIHNldE1ldGEoaXQpO1xuICAvLyByZXR1cm4gb2JqZWN0IElEXG4gIH0gcmV0dXJuIGl0W01FVEFdLmk7XG59O1xudmFyIGdldFdlYWsgPSBmdW5jdGlvbiAoaXQsIGNyZWF0ZSkge1xuICBpZiAoIWhhcyhpdCwgTUVUQSkpIHtcbiAgICAvLyBjYW4ndCBzZXQgbWV0YWRhdGEgdG8gdW5jYXVnaHQgZnJvemVuIG9iamVjdFxuICAgIGlmICghaXNFeHRlbnNpYmxlKGl0KSkgcmV0dXJuIHRydWU7XG4gICAgLy8gbm90IG5lY2Vzc2FyeSB0byBhZGQgbWV0YWRhdGFcbiAgICBpZiAoIWNyZWF0ZSkgcmV0dXJuIGZhbHNlO1xuICAgIC8vIGFkZCBtaXNzaW5nIG1ldGFkYXRhXG4gICAgc2V0TWV0YShpdCk7XG4gIC8vIHJldHVybiBoYXNoIHdlYWsgY29sbGVjdGlvbnMgSURzXG4gIH0gcmV0dXJuIGl0W01FVEFdLnc7XG59O1xuLy8gYWRkIG1ldGFkYXRhIG9uIGZyZWV6ZS1mYW1pbHkgbWV0aG9kcyBjYWxsaW5nXG52YXIgb25GcmVlemUgPSBmdW5jdGlvbiAoaXQpIHtcbiAgaWYgKEZSRUVaRSAmJiBtZXRhLk5FRUQgJiYgaXNFeHRlbnNpYmxlKGl0KSAmJiAhaGFzKGl0LCBNRVRBKSkgc2V0TWV0YShpdCk7XG4gIHJldHVybiBpdDtcbn07XG52YXIgbWV0YSA9IG1vZHVsZS5leHBvcnRzID0ge1xuICBLRVk6IE1FVEEsXG4gIE5FRUQ6IGZhbHNlLFxuICBmYXN0S2V5OiBmYXN0S2V5LFxuICBnZXRXZWFrOiBnZXRXZWFrLFxuICBvbkZyZWV6ZTogb25GcmVlemVcbn07XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL25vZGVfbW9kdWxlcy9fY29yZS1qc0AyLjUuM0Bjb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9fbWV0YS5qc1xuLy8gbW9kdWxlIGlkID0gNTNcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiZXhwb3J0cy5mID0gcmVxdWlyZSgnLi9fd2tzJyk7XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL25vZGVfbW9kdWxlcy9fY29yZS1qc0AyLjUuM0Bjb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9fd2tzLWV4dC5qc1xuLy8gbW9kdWxlIGlkID0gNTRcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwidmFyIGdsb2JhbCA9IHJlcXVpcmUoJy4vX2dsb2JhbCcpO1xudmFyIGNvcmUgPSByZXF1aXJlKCcuL19jb3JlJyk7XG52YXIgTElCUkFSWSA9IHJlcXVpcmUoJy4vX2xpYnJhcnknKTtcbnZhciB3a3NFeHQgPSByZXF1aXJlKCcuL193a3MtZXh0Jyk7XG52YXIgZGVmaW5lUHJvcGVydHkgPSByZXF1aXJlKCcuL19vYmplY3QtZHAnKS5mO1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAobmFtZSkge1xuICB2YXIgJFN5bWJvbCA9IGNvcmUuU3ltYm9sIHx8IChjb3JlLlN5bWJvbCA9IExJQlJBUlkgPyB7fSA6IGdsb2JhbC5TeW1ib2wgfHwge30pO1xuICBpZiAobmFtZS5jaGFyQXQoMCkgIT0gJ18nICYmICEobmFtZSBpbiAkU3ltYm9sKSkgZGVmaW5lUHJvcGVydHkoJFN5bWJvbCwgbmFtZSwgeyB2YWx1ZTogd2tzRXh0LmYobmFtZSkgfSk7XG59O1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9ub2RlX21vZHVsZXMvX2NvcmUtanNAMi41LjNAY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX3drcy1kZWZpbmUuanNcbi8vIG1vZHVsZSBpZCA9IDU1XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsImV4cG9ydHMuZiA9IHt9LnByb3BlcnR5SXNFbnVtZXJhYmxlO1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9ub2RlX21vZHVsZXMvX2NvcmUtanNAMi41LjNAY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX29iamVjdC1waWUuanNcbi8vIG1vZHVsZSBpZCA9IDU2XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsInZhciBpc09iamVjdCA9IHJlcXVpcmUoJy4vX2lzLW9iamVjdCcpO1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoaXQsIFRZUEUpIHtcbiAgaWYgKCFpc09iamVjdChpdCkgfHwgaXQuX3QgIT09IFRZUEUpIHRocm93IFR5cGVFcnJvcignSW5jb21wYXRpYmxlIHJlY2VpdmVyLCAnICsgVFlQRSArICcgcmVxdWlyZWQhJyk7XG4gIHJldHVybiBpdDtcbn07XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL25vZGVfbW9kdWxlcy9fY29yZS1qc0AyLjUuM0Bjb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9fdmFsaWRhdGUtY29sbGVjdGlvbi5qc1xuLy8gbW9kdWxlIGlkID0gNTdcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiaW1wb3J0IHtUcmFpdH0gZnJvbSAnLi4vRW50aXR5LmpzJ1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgS2lsbGFibGUgZXh0ZW5kcyBUcmFpdCB7XHJcbiAgICBjb25zdHJ1Y3RvcigpIHtcclxuICAgICAgICBzdXBlcigna2lsbGFibGUnKTtcclxuICAgICAgICB0aGlzLmRlYWQgPSBmYWxzZTtcclxuICAgICAgICB0aGlzLmRlYWRUaW1lID0gMDtcclxuICAgICAgICB0aGlzLnJlbW92ZUFmdGVyID0gMTtcclxuICAgIH1cclxuXHJcbiAgICBraWxsKCkge1xyXG4gICAgICAgIHRoaXMucXVldWUoKCkgPT4gdGhpcy5kZWFkID0gdHJ1ZSk7XHJcbiAgICB9XHJcblxyXG4gICAgcmV2aXZlKCkge1xyXG4gICAgICAgIHRoaXMuZGVhZCA9IGZhbHNlO1xyXG4gICAgICAgIHRoaXMuZGVhZFRpbWUgPSAwO1xyXG4gICAgfVxyXG5cclxuICAgIHVwZGF0ZShlbnRpdHksIGRlbHRhVGltZSwgbGV2ZWwpIHtcclxuICAgICAgICBpZiAodGhpcy5kZWFkKSB7XHJcbiAgICAgICAgICAgIHRoaXMuZGVhZFRpbWUgKz0gZGVsdGFUaW1lO1xyXG4gICAgICAgICAgICBpZiAodGhpcy5kZWFkVGltZSA+IHRoaXMucmVtb3ZlQWZ0ZXIpIHtcclxuICAgICAgICAgICAgICAgIHRoaXMucXVldWUoKCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgIGxldmVsLmVudGl0aWVzLmRlbGV0ZShlbnRpdHkpO1xyXG4gICAgICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH1cclxufVxyXG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9wdWJsaWMvanMvdHJhaXRzL0tpbGxhYmxlLmpzIiwiaW1wb3J0IHtTaWRlcywgVHJhaXR9IGZyb20gJy4uL0VudGl0eS5qcydcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFNvbGlkIGV4dGVuZHMgVHJhaXQge1xyXG4gICAgY29uc3RydWN0b3IoKSB7XHJcbiAgICAgICAgc3VwZXIoJ3NvbGlkJyk7XHJcbiAgICAgICAgdGhpcy5vYnN0cnVjdHMgPXRydWU7XHJcbiAgICB9XHJcblxyXG4gICAgb2JzdHJ1Y3QoZW50aXR5LCBzaWRlcywgbWF0Y2gpIHtcclxuICAgICAgICBpZiAoIXRoaXMub2JzdHJ1Y3RzKSB7XHJcbiAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGlmIChzaWRlcyA9PT0gU2lkZXMuQk9UVE9NKSB7XHJcbiAgICAgICAgICAgIGVudGl0eS5ib3VuZHMudG9wID0gbWF0Y2gueTEgLSBlbnRpdHkuc2l6ZS55O1xyXG4gICAgICAgICAgICBlbnRpdHkudmVsLnkgPSAwO1xyXG4gICAgICAgIH0gZWxzZSBpZiAoc2lkZXMgPT09IFNpZGVzLlRPUCkge1xyXG4gICAgICAgICAgICBlbnRpdHkuYm91bmRzLnRvcCA9IG1hdGNoLnkyO1xyXG4gICAgICAgICAgICBlbnRpdHkudmVsLnkgPSAwO1xyXG4gICAgICAgIH0gZWxzZSBpZiAoc2lkZXMgPT09IFNpZGVzLkxFRlQpIHtcclxuICAgICAgICAgICAgZW50aXR5LmJvdW5kcy5sZWZ0ID0gbWF0Y2gueDEgLSBlbnRpdHkuc2l6ZS54O1xyXG4gICAgICAgICAgICBlbnRpdHkudmVsLnggPSAwO1xyXG4gICAgICAgIH0gZWxzZSBpZiAoc2lkZXMgPT09IFNpZGVzLlJJR0hUKSB7XHJcbiAgICAgICAgICAgIGVudGl0eS5ib3VuZHMubGVmdCA9IG1hdGNoLngyO1xyXG4gICAgICAgICAgICBlbnRpdHkudmVsLnggPSAwO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxufVxyXG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9wdWJsaWMvanMvdHJhaXRzL1NvbGlkLmpzIiwiaW1wb3J0IHtTaWRlcywgVHJhaXR9IGZyb20gJy4uL0VudGl0eS5qcydcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFBoeXNpY3MgZXh0ZW5kcyBUcmFpdCB7XHJcbiAgICBjb25zdHJ1Y3RvcigpIHtcclxuICAgICAgICBzdXBlcigncGh5c2ljcycpO1xyXG4gICAgfVxyXG5cclxuICAgIHVwZGF0ZShlbnRpdHksIGRlbHRhVGltZSwgbGV2ZWwpIHtcclxuICAgICAgICBlbnRpdHkucG9zLnggKz0gZW50aXR5LnZlbC54ICogZGVsdGFUaW1lO1xyXG4gICAgICAgIGxldmVsLnRpbGVDb2xsaWRlci5jaGVja1goZW50aXR5KTtcclxuXHJcbiAgICAgICAgZW50aXR5LnBvcy55ICs9IGVudGl0eS52ZWwueSAqIGRlbHRhVGltZTtcclxuICAgICAgICBsZXZlbC50aWxlQ29sbGlkZXIuY2hlY2tZKGVudGl0eSk7XHJcblxyXG4gICAgICAgIGVudGl0eS52ZWwueSArPSBsZXZlbC5ncmF2aXR5ICogZGVsdGFUaW1lO1xyXG4gICAgfVxyXG59XHJcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3B1YmxpYy9qcy90cmFpdHMvUGh5c2ljcy5qcyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlZ2VuZXJhdG9yLXJ1bnRpbWVcIik7XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL25vZGVfbW9kdWxlcy9fYmFiZWwtcnVudGltZUA2LjI2LjBAYmFiZWwtcnVudGltZS9yZWdlbmVyYXRvci9pbmRleC5qc1xuLy8gbW9kdWxlIGlkID0gNjFcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwibW9kdWxlLmV4cG9ydHMgPSAhcmVxdWlyZSgnLi9fZGVzY3JpcHRvcnMnKSAmJiAhcmVxdWlyZSgnLi9fZmFpbHMnKShmdW5jdGlvbiAoKSB7XG4gIHJldHVybiBPYmplY3QuZGVmaW5lUHJvcGVydHkocmVxdWlyZSgnLi9fZG9tLWNyZWF0ZScpKCdkaXYnKSwgJ2EnLCB7IGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gNzsgfSB9KS5hICE9IDc7XG59KTtcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vbm9kZV9tb2R1bGVzL19jb3JlLWpzQDIuNS4zQGNvcmUtanMvbGlicmFyeS9tb2R1bGVzL19pZTgtZG9tLWRlZmluZS5qc1xuLy8gbW9kdWxlIGlkID0gNjJcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKCcuL19oaWRlJyk7XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL25vZGVfbW9kdWxlcy9fY29yZS1qc0AyLjUuM0Bjb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9fcmVkZWZpbmUuanNcbi8vIG1vZHVsZSBpZCA9IDYzXG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsInZhciBoYXMgPSByZXF1aXJlKCcuL19oYXMnKTtcbnZhciB0b0lPYmplY3QgPSByZXF1aXJlKCcuL190by1pb2JqZWN0Jyk7XG52YXIgYXJyYXlJbmRleE9mID0gcmVxdWlyZSgnLi9fYXJyYXktaW5jbHVkZXMnKShmYWxzZSk7XG52YXIgSUVfUFJPVE8gPSByZXF1aXJlKCcuL19zaGFyZWQta2V5JykoJ0lFX1BST1RPJyk7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKG9iamVjdCwgbmFtZXMpIHtcbiAgdmFyIE8gPSB0b0lPYmplY3Qob2JqZWN0KTtcbiAgdmFyIGkgPSAwO1xuICB2YXIgcmVzdWx0ID0gW107XG4gIHZhciBrZXk7XG4gIGZvciAoa2V5IGluIE8pIGlmIChrZXkgIT0gSUVfUFJPVE8pIGhhcyhPLCBrZXkpICYmIHJlc3VsdC5wdXNoKGtleSk7XG4gIC8vIERvbid0IGVudW0gYnVnICYgaGlkZGVuIGtleXNcbiAgd2hpbGUgKG5hbWVzLmxlbmd0aCA+IGkpIGlmIChoYXMoTywga2V5ID0gbmFtZXNbaSsrXSkpIHtcbiAgICB+YXJyYXlJbmRleE9mKHJlc3VsdCwga2V5KSB8fCByZXN1bHQucHVzaChrZXkpO1xuICB9XG4gIHJldHVybiByZXN1bHQ7XG59O1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9ub2RlX21vZHVsZXMvX2NvcmUtanNAMi41LjNAY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX29iamVjdC1rZXlzLWludGVybmFsLmpzXG4vLyBtb2R1bGUgaWQgPSA2NFxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCIvLyBmYWxsYmFjayBmb3Igbm9uLWFycmF5LWxpa2UgRVMzIGFuZCBub24tZW51bWVyYWJsZSBvbGQgVjggc3RyaW5nc1xudmFyIGNvZiA9IHJlcXVpcmUoJy4vX2NvZicpO1xuLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLXByb3RvdHlwZS1idWlsdGluc1xubW9kdWxlLmV4cG9ydHMgPSBPYmplY3QoJ3onKS5wcm9wZXJ0eUlzRW51bWVyYWJsZSgwKSA/IE9iamVjdCA6IGZ1bmN0aW9uIChpdCkge1xuICByZXR1cm4gY29mKGl0KSA9PSAnU3RyaW5nJyA/IGl0LnNwbGl0KCcnKSA6IE9iamVjdChpdCk7XG59O1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9ub2RlX21vZHVsZXMvX2NvcmUtanNAMi41LjNAY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX2lvYmplY3QuanNcbi8vIG1vZHVsZSBpZCA9IDY1XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsInZhciBkb2N1bWVudCA9IHJlcXVpcmUoJy4vX2dsb2JhbCcpLmRvY3VtZW50O1xubW9kdWxlLmV4cG9ydHMgPSBkb2N1bWVudCAmJiBkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQ7XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL25vZGVfbW9kdWxlcy9fY29yZS1qc0AyLjUuM0Bjb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9faHRtbC5qc1xuLy8gbW9kdWxlIGlkID0gNjZcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiLy8gMTkuMS4yLjkgLyAxNS4yLjMuMiBPYmplY3QuZ2V0UHJvdG90eXBlT2YoTylcbnZhciBoYXMgPSByZXF1aXJlKCcuL19oYXMnKTtcbnZhciB0b09iamVjdCA9IHJlcXVpcmUoJy4vX3RvLW9iamVjdCcpO1xudmFyIElFX1BST1RPID0gcmVxdWlyZSgnLi9fc2hhcmVkLWtleScpKCdJRV9QUk9UTycpO1xudmFyIE9iamVjdFByb3RvID0gT2JqZWN0LnByb3RvdHlwZTtcblxubW9kdWxlLmV4cG9ydHMgPSBPYmplY3QuZ2V0UHJvdG90eXBlT2YgfHwgZnVuY3Rpb24gKE8pIHtcbiAgTyA9IHRvT2JqZWN0KE8pO1xuICBpZiAoaGFzKE8sIElFX1BST1RPKSkgcmV0dXJuIE9bSUVfUFJPVE9dO1xuICBpZiAodHlwZW9mIE8uY29uc3RydWN0b3IgPT0gJ2Z1bmN0aW9uJyAmJiBPIGluc3RhbmNlb2YgTy5jb25zdHJ1Y3Rvcikge1xuICAgIHJldHVybiBPLmNvbnN0cnVjdG9yLnByb3RvdHlwZTtcbiAgfSByZXR1cm4gTyBpbnN0YW5jZW9mIE9iamVjdCA/IE9iamVjdFByb3RvIDogbnVsbDtcbn07XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL25vZGVfbW9kdWxlcy9fY29yZS1qc0AyLjUuM0Bjb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9fb2JqZWN0LWdwby5qc1xuLy8gbW9kdWxlIGlkID0gNjdcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwibW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoZG9uZSwgdmFsdWUpIHtcbiAgcmV0dXJuIHsgdmFsdWU6IHZhbHVlLCBkb25lOiAhIWRvbmUgfTtcbn07XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL25vZGVfbW9kdWxlcy9fY29yZS1qc0AyLjUuM0Bjb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9faXRlci1zdGVwLmpzXG4vLyBtb2R1bGUgaWQgPSA2OFxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCIvLyBjYWxsIHNvbWV0aGluZyBvbiBpdGVyYXRvciBzdGVwIHdpdGggc2FmZSBjbG9zaW5nIG9uIGVycm9yXG52YXIgYW5PYmplY3QgPSByZXF1aXJlKCcuL19hbi1vYmplY3QnKTtcbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGl0ZXJhdG9yLCBmbiwgdmFsdWUsIGVudHJpZXMpIHtcbiAgdHJ5IHtcbiAgICByZXR1cm4gZW50cmllcyA/IGZuKGFuT2JqZWN0KHZhbHVlKVswXSwgdmFsdWVbMV0pIDogZm4odmFsdWUpO1xuICAvLyA3LjQuNiBJdGVyYXRvckNsb3NlKGl0ZXJhdG9yLCBjb21wbGV0aW9uKVxuICB9IGNhdGNoIChlKSB7XG4gICAgdmFyIHJldCA9IGl0ZXJhdG9yWydyZXR1cm4nXTtcbiAgICBpZiAocmV0ICE9PSB1bmRlZmluZWQpIGFuT2JqZWN0KHJldC5jYWxsKGl0ZXJhdG9yKSk7XG4gICAgdGhyb3cgZTtcbiAgfVxufTtcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vbm9kZV9tb2R1bGVzL19jb3JlLWpzQDIuNS4zQGNvcmUtanMvbGlicmFyeS9tb2R1bGVzL19pdGVyLWNhbGwuanNcbi8vIG1vZHVsZSBpZCA9IDY5XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIi8vIGNoZWNrIG9uIGRlZmF1bHQgQXJyYXkgaXRlcmF0b3JcbnZhciBJdGVyYXRvcnMgPSByZXF1aXJlKCcuL19pdGVyYXRvcnMnKTtcbnZhciBJVEVSQVRPUiA9IHJlcXVpcmUoJy4vX3drcycpKCdpdGVyYXRvcicpO1xudmFyIEFycmF5UHJvdG8gPSBBcnJheS5wcm90b3R5cGU7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGl0KSB7XG4gIHJldHVybiBpdCAhPT0gdW5kZWZpbmVkICYmIChJdGVyYXRvcnMuQXJyYXkgPT09IGl0IHx8IEFycmF5UHJvdG9bSVRFUkFUT1JdID09PSBpdCk7XG59O1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9ub2RlX21vZHVsZXMvX2NvcmUtanNAMi41LjNAY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX2lzLWFycmF5LWl0ZXIuanNcbi8vIG1vZHVsZSBpZCA9IDcwXG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIi8vIDcuMy4yMCBTcGVjaWVzQ29uc3RydWN0b3IoTywgZGVmYXVsdENvbnN0cnVjdG9yKVxudmFyIGFuT2JqZWN0ID0gcmVxdWlyZSgnLi9fYW4tb2JqZWN0Jyk7XG52YXIgYUZ1bmN0aW9uID0gcmVxdWlyZSgnLi9fYS1mdW5jdGlvbicpO1xudmFyIFNQRUNJRVMgPSByZXF1aXJlKCcuL193a3MnKSgnc3BlY2llcycpO1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoTywgRCkge1xuICB2YXIgQyA9IGFuT2JqZWN0KE8pLmNvbnN0cnVjdG9yO1xuICB2YXIgUztcbiAgcmV0dXJuIEMgPT09IHVuZGVmaW5lZCB8fCAoUyA9IGFuT2JqZWN0KEMpW1NQRUNJRVNdKSA9PSB1bmRlZmluZWQgPyBEIDogYUZ1bmN0aW9uKFMpO1xufTtcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vbm9kZV9tb2R1bGVzL19jb3JlLWpzQDIuNS4zQGNvcmUtanMvbGlicmFyeS9tb2R1bGVzL19zcGVjaWVzLWNvbnN0cnVjdG9yLmpzXG4vLyBtb2R1bGUgaWQgPSA3MVxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJ2YXIgY3R4ID0gcmVxdWlyZSgnLi9fY3R4Jyk7XG52YXIgaW52b2tlID0gcmVxdWlyZSgnLi9faW52b2tlJyk7XG52YXIgaHRtbCA9IHJlcXVpcmUoJy4vX2h0bWwnKTtcbnZhciBjZWwgPSByZXF1aXJlKCcuL19kb20tY3JlYXRlJyk7XG52YXIgZ2xvYmFsID0gcmVxdWlyZSgnLi9fZ2xvYmFsJyk7XG52YXIgcHJvY2VzcyA9IGdsb2JhbC5wcm9jZXNzO1xudmFyIHNldFRhc2sgPSBnbG9iYWwuc2V0SW1tZWRpYXRlO1xudmFyIGNsZWFyVGFzayA9IGdsb2JhbC5jbGVhckltbWVkaWF0ZTtcbnZhciBNZXNzYWdlQ2hhbm5lbCA9IGdsb2JhbC5NZXNzYWdlQ2hhbm5lbDtcbnZhciBEaXNwYXRjaCA9IGdsb2JhbC5EaXNwYXRjaDtcbnZhciBjb3VudGVyID0gMDtcbnZhciBxdWV1ZSA9IHt9O1xudmFyIE9OUkVBRFlTVEFURUNIQU5HRSA9ICdvbnJlYWR5c3RhdGVjaGFuZ2UnO1xudmFyIGRlZmVyLCBjaGFubmVsLCBwb3J0O1xudmFyIHJ1biA9IGZ1bmN0aW9uICgpIHtcbiAgdmFyIGlkID0gK3RoaXM7XG4gIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby1wcm90b3R5cGUtYnVpbHRpbnNcbiAgaWYgKHF1ZXVlLmhhc093blByb3BlcnR5KGlkKSkge1xuICAgIHZhciBmbiA9IHF1ZXVlW2lkXTtcbiAgICBkZWxldGUgcXVldWVbaWRdO1xuICAgIGZuKCk7XG4gIH1cbn07XG52YXIgbGlzdGVuZXIgPSBmdW5jdGlvbiAoZXZlbnQpIHtcbiAgcnVuLmNhbGwoZXZlbnQuZGF0YSk7XG59O1xuLy8gTm9kZS5qcyAwLjkrICYgSUUxMCsgaGFzIHNldEltbWVkaWF0ZSwgb3RoZXJ3aXNlOlxuaWYgKCFzZXRUYXNrIHx8ICFjbGVhclRhc2spIHtcbiAgc2V0VGFzayA9IGZ1bmN0aW9uIHNldEltbWVkaWF0ZShmbikge1xuICAgIHZhciBhcmdzID0gW107XG4gICAgdmFyIGkgPSAxO1xuICAgIHdoaWxlIChhcmd1bWVudHMubGVuZ3RoID4gaSkgYXJncy5wdXNoKGFyZ3VtZW50c1tpKytdKTtcbiAgICBxdWV1ZVsrK2NvdW50ZXJdID0gZnVuY3Rpb24gKCkge1xuICAgICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLW5ldy1mdW5jXG4gICAgICBpbnZva2UodHlwZW9mIGZuID09ICdmdW5jdGlvbicgPyBmbiA6IEZ1bmN0aW9uKGZuKSwgYXJncyk7XG4gICAgfTtcbiAgICBkZWZlcihjb3VudGVyKTtcbiAgICByZXR1cm4gY291bnRlcjtcbiAgfTtcbiAgY2xlYXJUYXNrID0gZnVuY3Rpb24gY2xlYXJJbW1lZGlhdGUoaWQpIHtcbiAgICBkZWxldGUgcXVldWVbaWRdO1xuICB9O1xuICAvLyBOb2RlLmpzIDAuOC1cbiAgaWYgKHJlcXVpcmUoJy4vX2NvZicpKHByb2Nlc3MpID09ICdwcm9jZXNzJykge1xuICAgIGRlZmVyID0gZnVuY3Rpb24gKGlkKSB7XG4gICAgICBwcm9jZXNzLm5leHRUaWNrKGN0eChydW4sIGlkLCAxKSk7XG4gICAgfTtcbiAgLy8gU3BoZXJlIChKUyBnYW1lIGVuZ2luZSkgRGlzcGF0Y2ggQVBJXG4gIH0gZWxzZSBpZiAoRGlzcGF0Y2ggJiYgRGlzcGF0Y2gubm93KSB7XG4gICAgZGVmZXIgPSBmdW5jdGlvbiAoaWQpIHtcbiAgICAgIERpc3BhdGNoLm5vdyhjdHgocnVuLCBpZCwgMSkpO1xuICAgIH07XG4gIC8vIEJyb3dzZXJzIHdpdGggTWVzc2FnZUNoYW5uZWwsIGluY2x1ZGVzIFdlYldvcmtlcnNcbiAgfSBlbHNlIGlmIChNZXNzYWdlQ2hhbm5lbCkge1xuICAgIGNoYW5uZWwgPSBuZXcgTWVzc2FnZUNoYW5uZWwoKTtcbiAgICBwb3J0ID0gY2hhbm5lbC5wb3J0MjtcbiAgICBjaGFubmVsLnBvcnQxLm9ubWVzc2FnZSA9IGxpc3RlbmVyO1xuICAgIGRlZmVyID0gY3R4KHBvcnQucG9zdE1lc3NhZ2UsIHBvcnQsIDEpO1xuICAvLyBCcm93c2VycyB3aXRoIHBvc3RNZXNzYWdlLCBza2lwIFdlYldvcmtlcnNcbiAgLy8gSUU4IGhhcyBwb3N0TWVzc2FnZSwgYnV0IGl0J3Mgc3luYyAmIHR5cGVvZiBpdHMgcG9zdE1lc3NhZ2UgaXMgJ29iamVjdCdcbiAgfSBlbHNlIGlmIChnbG9iYWwuYWRkRXZlbnRMaXN0ZW5lciAmJiB0eXBlb2YgcG9zdE1lc3NhZ2UgPT0gJ2Z1bmN0aW9uJyAmJiAhZ2xvYmFsLmltcG9ydFNjcmlwdHMpIHtcbiAgICBkZWZlciA9IGZ1bmN0aW9uIChpZCkge1xuICAgICAgZ2xvYmFsLnBvc3RNZXNzYWdlKGlkICsgJycsICcqJyk7XG4gICAgfTtcbiAgICBnbG9iYWwuYWRkRXZlbnRMaXN0ZW5lcignbWVzc2FnZScsIGxpc3RlbmVyLCBmYWxzZSk7XG4gIC8vIElFOC1cbiAgfSBlbHNlIGlmIChPTlJFQURZU1RBVEVDSEFOR0UgaW4gY2VsKCdzY3JpcHQnKSkge1xuICAgIGRlZmVyID0gZnVuY3Rpb24gKGlkKSB7XG4gICAgICBodG1sLmFwcGVuZENoaWxkKGNlbCgnc2NyaXB0JykpW09OUkVBRFlTVEFURUNIQU5HRV0gPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIGh0bWwucmVtb3ZlQ2hpbGQodGhpcyk7XG4gICAgICAgIHJ1bi5jYWxsKGlkKTtcbiAgICAgIH07XG4gICAgfTtcbiAgLy8gUmVzdCBvbGQgYnJvd3NlcnNcbiAgfSBlbHNlIHtcbiAgICBkZWZlciA9IGZ1bmN0aW9uIChpZCkge1xuICAgICAgc2V0VGltZW91dChjdHgocnVuLCBpZCwgMSksIDApO1xuICAgIH07XG4gIH1cbn1cbm1vZHVsZS5leHBvcnRzID0ge1xuICBzZXQ6IHNldFRhc2ssXG4gIGNsZWFyOiBjbGVhclRhc2tcbn07XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL25vZGVfbW9kdWxlcy9fY29yZS1qc0AyLjUuM0Bjb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9fdGFzay5qc1xuLy8gbW9kdWxlIGlkID0gNzJcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwibW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoZXhlYykge1xuICB0cnkge1xuICAgIHJldHVybiB7IGU6IGZhbHNlLCB2OiBleGVjKCkgfTtcbiAgfSBjYXRjaCAoZSkge1xuICAgIHJldHVybiB7IGU6IHRydWUsIHY6IGUgfTtcbiAgfVxufTtcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vbm9kZV9tb2R1bGVzL19jb3JlLWpzQDIuNS4zQGNvcmUtanMvbGlicmFyeS9tb2R1bGVzL19wZXJmb3JtLmpzXG4vLyBtb2R1bGUgaWQgPSA3M1xuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJ2YXIgYW5PYmplY3QgPSByZXF1aXJlKCcuL19hbi1vYmplY3QnKTtcbnZhciBpc09iamVjdCA9IHJlcXVpcmUoJy4vX2lzLW9iamVjdCcpO1xudmFyIG5ld1Byb21pc2VDYXBhYmlsaXR5ID0gcmVxdWlyZSgnLi9fbmV3LXByb21pc2UtY2FwYWJpbGl0eScpO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChDLCB4KSB7XG4gIGFuT2JqZWN0KEMpO1xuICBpZiAoaXNPYmplY3QoeCkgJiYgeC5jb25zdHJ1Y3RvciA9PT0gQykgcmV0dXJuIHg7XG4gIHZhciBwcm9taXNlQ2FwYWJpbGl0eSA9IG5ld1Byb21pc2VDYXBhYmlsaXR5LmYoQyk7XG4gIHZhciByZXNvbHZlID0gcHJvbWlzZUNhcGFiaWxpdHkucmVzb2x2ZTtcbiAgcmVzb2x2ZSh4KTtcbiAgcmV0dXJuIHByb21pc2VDYXBhYmlsaXR5LnByb21pc2U7XG59O1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9ub2RlX21vZHVsZXMvX2NvcmUtanNAMi41LjNAY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX3Byb21pc2UtcmVzb2x2ZS5qc1xuLy8gbW9kdWxlIGlkID0gNzRcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiJ3VzZSBzdHJpY3QnO1xudmFyIGdsb2JhbCA9IHJlcXVpcmUoJy4vX2dsb2JhbCcpO1xudmFyIGNvcmUgPSByZXF1aXJlKCcuL19jb3JlJyk7XG52YXIgZFAgPSByZXF1aXJlKCcuL19vYmplY3QtZHAnKTtcbnZhciBERVNDUklQVE9SUyA9IHJlcXVpcmUoJy4vX2Rlc2NyaXB0b3JzJyk7XG52YXIgU1BFQ0lFUyA9IHJlcXVpcmUoJy4vX3drcycpKCdzcGVjaWVzJyk7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKEtFWSkge1xuICB2YXIgQyA9IHR5cGVvZiBjb3JlW0tFWV0gPT0gJ2Z1bmN0aW9uJyA/IGNvcmVbS0VZXSA6IGdsb2JhbFtLRVldO1xuICBpZiAoREVTQ1JJUFRPUlMgJiYgQyAmJiAhQ1tTUEVDSUVTXSkgZFAuZihDLCBTUEVDSUVTLCB7XG4gICAgY29uZmlndXJhYmxlOiB0cnVlLFxuICAgIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gdGhpczsgfVxuICB9KTtcbn07XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL25vZGVfbW9kdWxlcy9fY29yZS1qc0AyLjUuM0Bjb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9fc2V0LXNwZWNpZXMuanNcbi8vIG1vZHVsZSBpZCA9IDc1XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsInZhciBJVEVSQVRPUiA9IHJlcXVpcmUoJy4vX3drcycpKCdpdGVyYXRvcicpO1xudmFyIFNBRkVfQ0xPU0lORyA9IGZhbHNlO1xuXG50cnkge1xuICB2YXIgcml0ZXIgPSBbN11bSVRFUkFUT1JdKCk7XG4gIHJpdGVyWydyZXR1cm4nXSA9IGZ1bmN0aW9uICgpIHsgU0FGRV9DTE9TSU5HID0gdHJ1ZTsgfTtcbiAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLXRocm93LWxpdGVyYWxcbiAgQXJyYXkuZnJvbShyaXRlciwgZnVuY3Rpb24gKCkgeyB0aHJvdyAyOyB9KTtcbn0gY2F0Y2ggKGUpIHsgLyogZW1wdHkgKi8gfVxuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChleGVjLCBza2lwQ2xvc2luZykge1xuICBpZiAoIXNraXBDbG9zaW5nICYmICFTQUZFX0NMT1NJTkcpIHJldHVybiBmYWxzZTtcbiAgdmFyIHNhZmUgPSBmYWxzZTtcbiAgdHJ5IHtcbiAgICB2YXIgYXJyID0gWzddO1xuICAgIHZhciBpdGVyID0gYXJyW0lURVJBVE9SXSgpO1xuICAgIGl0ZXIubmV4dCA9IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHsgZG9uZTogc2FmZSA9IHRydWUgfTsgfTtcbiAgICBhcnJbSVRFUkFUT1JdID0gZnVuY3Rpb24gKCkgeyByZXR1cm4gaXRlcjsgfTtcbiAgICBleGVjKGFycik7XG4gIH0gY2F0Y2ggKGUpIHsgLyogZW1wdHkgKi8gfVxuICByZXR1cm4gc2FmZTtcbn07XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL25vZGVfbW9kdWxlcy9fY29yZS1qc0AyLjUuM0Bjb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9faXRlci1kZXRlY3QuanNcbi8vIG1vZHVsZSBpZCA9IDc2XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsImV4cG9ydHMuZiA9IE9iamVjdC5nZXRPd25Qcm9wZXJ0eVN5bWJvbHM7XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL25vZGVfbW9kdWxlcy9fY29yZS1qc0AyLjUuM0Bjb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9fb2JqZWN0LWdvcHMuanNcbi8vIG1vZHVsZSBpZCA9IDc3XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIi8vIDcuMi4yIElzQXJyYXkoYXJndW1lbnQpXG52YXIgY29mID0gcmVxdWlyZSgnLi9fY29mJyk7XG5tb2R1bGUuZXhwb3J0cyA9IEFycmF5LmlzQXJyYXkgfHwgZnVuY3Rpb24gaXNBcnJheShhcmcpIHtcbiAgcmV0dXJuIGNvZihhcmcpID09ICdBcnJheSc7XG59O1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9ub2RlX21vZHVsZXMvX2NvcmUtanNAMi41LjNAY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX2lzLWFycmF5LmpzXG4vLyBtb2R1bGUgaWQgPSA3OFxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCIvLyAxOS4xLjIuNyAvIDE1LjIuMy40IE9iamVjdC5nZXRPd25Qcm9wZXJ0eU5hbWVzKE8pXG52YXIgJGtleXMgPSByZXF1aXJlKCcuL19vYmplY3Qta2V5cy1pbnRlcm5hbCcpO1xudmFyIGhpZGRlbktleXMgPSByZXF1aXJlKCcuL19lbnVtLWJ1Zy1rZXlzJykuY29uY2F0KCdsZW5ndGgnLCAncHJvdG90eXBlJyk7XG5cbmV4cG9ydHMuZiA9IE9iamVjdC5nZXRPd25Qcm9wZXJ0eU5hbWVzIHx8IGZ1bmN0aW9uIGdldE93blByb3BlcnR5TmFtZXMoTykge1xuICByZXR1cm4gJGtleXMoTywgaGlkZGVuS2V5cyk7XG59O1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9ub2RlX21vZHVsZXMvX2NvcmUtanNAMi41LjNAY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX29iamVjdC1nb3BuLmpzXG4vLyBtb2R1bGUgaWQgPSA3OVxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJ2YXIgcElFID0gcmVxdWlyZSgnLi9fb2JqZWN0LXBpZScpO1xudmFyIGNyZWF0ZURlc2MgPSByZXF1aXJlKCcuL19wcm9wZXJ0eS1kZXNjJyk7XG52YXIgdG9JT2JqZWN0ID0gcmVxdWlyZSgnLi9fdG8taW9iamVjdCcpO1xudmFyIHRvUHJpbWl0aXZlID0gcmVxdWlyZSgnLi9fdG8tcHJpbWl0aXZlJyk7XG52YXIgaGFzID0gcmVxdWlyZSgnLi9faGFzJyk7XG52YXIgSUU4X0RPTV9ERUZJTkUgPSByZXF1aXJlKCcuL19pZTgtZG9tLWRlZmluZScpO1xudmFyIGdPUEQgPSBPYmplY3QuZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yO1xuXG5leHBvcnRzLmYgPSByZXF1aXJlKCcuL19kZXNjcmlwdG9ycycpID8gZ09QRCA6IGZ1bmN0aW9uIGdldE93blByb3BlcnR5RGVzY3JpcHRvcihPLCBQKSB7XG4gIE8gPSB0b0lPYmplY3QoTyk7XG4gIFAgPSB0b1ByaW1pdGl2ZShQLCB0cnVlKTtcbiAgaWYgKElFOF9ET01fREVGSU5FKSB0cnkge1xuICAgIHJldHVybiBnT1BEKE8sIFApO1xuICB9IGNhdGNoIChlKSB7IC8qIGVtcHR5ICovIH1cbiAgaWYgKGhhcyhPLCBQKSkgcmV0dXJuIGNyZWF0ZURlc2MoIXBJRS5mLmNhbGwoTywgUCksIE9bUF0pO1xufTtcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vbm9kZV9tb2R1bGVzL19jb3JlLWpzQDIuNS4zQGNvcmUtanMvbGlicmFyeS9tb2R1bGVzL19vYmplY3QtZ29wZC5qc1xuLy8gbW9kdWxlIGlkID0gODBcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbmV4cG9ydHMuX19lc01vZHVsZSA9IHRydWU7XG5cbnZhciBfaXRlcmF0b3IgPSByZXF1aXJlKFwiLi4vY29yZS1qcy9zeW1ib2wvaXRlcmF0b3JcIik7XG5cbnZhciBfaXRlcmF0b3IyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfaXRlcmF0b3IpO1xuXG52YXIgX3N5bWJvbCA9IHJlcXVpcmUoXCIuLi9jb3JlLWpzL3N5bWJvbFwiKTtcblxudmFyIF9zeW1ib2wyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfc3ltYm9sKTtcblxudmFyIF90eXBlb2YgPSB0eXBlb2YgX3N5bWJvbDIuZGVmYXVsdCA9PT0gXCJmdW5jdGlvblwiICYmIHR5cGVvZiBfaXRlcmF0b3IyLmRlZmF1bHQgPT09IFwic3ltYm9sXCIgPyBmdW5jdGlvbiAob2JqKSB7IHJldHVybiB0eXBlb2Ygb2JqOyB9IDogZnVuY3Rpb24gKG9iaikgeyByZXR1cm4gb2JqICYmIHR5cGVvZiBfc3ltYm9sMi5kZWZhdWx0ID09PSBcImZ1bmN0aW9uXCIgJiYgb2JqLmNvbnN0cnVjdG9yID09PSBfc3ltYm9sMi5kZWZhdWx0ICYmIG9iaiAhPT0gX3N5bWJvbDIuZGVmYXVsdC5wcm90b3R5cGUgPyBcInN5bWJvbFwiIDogdHlwZW9mIG9iajsgfTtcblxuZnVuY3Rpb24gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChvYmopIHsgcmV0dXJuIG9iaiAmJiBvYmouX19lc01vZHVsZSA/IG9iaiA6IHsgZGVmYXVsdDogb2JqIH07IH1cblxuZXhwb3J0cy5kZWZhdWx0ID0gdHlwZW9mIF9zeW1ib2wyLmRlZmF1bHQgPT09IFwiZnVuY3Rpb25cIiAmJiBfdHlwZW9mKF9pdGVyYXRvcjIuZGVmYXVsdCkgPT09IFwic3ltYm9sXCIgPyBmdW5jdGlvbiAob2JqKSB7XG4gIHJldHVybiB0eXBlb2Ygb2JqID09PSBcInVuZGVmaW5lZFwiID8gXCJ1bmRlZmluZWRcIiA6IF90eXBlb2Yob2JqKTtcbn0gOiBmdW5jdGlvbiAob2JqKSB7XG4gIHJldHVybiBvYmogJiYgdHlwZW9mIF9zeW1ib2wyLmRlZmF1bHQgPT09IFwiZnVuY3Rpb25cIiAmJiBvYmouY29uc3RydWN0b3IgPT09IF9zeW1ib2wyLmRlZmF1bHQgJiYgb2JqICE9PSBfc3ltYm9sMi5kZWZhdWx0LnByb3RvdHlwZSA/IFwic3ltYm9sXCIgOiB0eXBlb2Ygb2JqID09PSBcInVuZGVmaW5lZFwiID8gXCJ1bmRlZmluZWRcIiA6IF90eXBlb2Yob2JqKTtcbn07XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9ub2RlX21vZHVsZXMvX2JhYmVsLXJ1bnRpbWVANi4yNi4wQGJhYmVsLXJ1bnRpbWUvaGVscGVycy90eXBlb2YuanNcbi8vIG1vZHVsZSBpZCA9IDgxXG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIid1c2Ugc3RyaWN0JztcbnZhciBkUCA9IHJlcXVpcmUoJy4vX29iamVjdC1kcCcpLmY7XG52YXIgY3JlYXRlID0gcmVxdWlyZSgnLi9fb2JqZWN0LWNyZWF0ZScpO1xudmFyIHJlZGVmaW5lQWxsID0gcmVxdWlyZSgnLi9fcmVkZWZpbmUtYWxsJyk7XG52YXIgY3R4ID0gcmVxdWlyZSgnLi9fY3R4Jyk7XG52YXIgYW5JbnN0YW5jZSA9IHJlcXVpcmUoJy4vX2FuLWluc3RhbmNlJyk7XG52YXIgZm9yT2YgPSByZXF1aXJlKCcuL19mb3Itb2YnKTtcbnZhciAkaXRlckRlZmluZSA9IHJlcXVpcmUoJy4vX2l0ZXItZGVmaW5lJyk7XG52YXIgc3RlcCA9IHJlcXVpcmUoJy4vX2l0ZXItc3RlcCcpO1xudmFyIHNldFNwZWNpZXMgPSByZXF1aXJlKCcuL19zZXQtc3BlY2llcycpO1xudmFyIERFU0NSSVBUT1JTID0gcmVxdWlyZSgnLi9fZGVzY3JpcHRvcnMnKTtcbnZhciBmYXN0S2V5ID0gcmVxdWlyZSgnLi9fbWV0YScpLmZhc3RLZXk7XG52YXIgdmFsaWRhdGUgPSByZXF1aXJlKCcuL192YWxpZGF0ZS1jb2xsZWN0aW9uJyk7XG52YXIgU0laRSA9IERFU0NSSVBUT1JTID8gJ19zJyA6ICdzaXplJztcblxudmFyIGdldEVudHJ5ID0gZnVuY3Rpb24gKHRoYXQsIGtleSkge1xuICAvLyBmYXN0IGNhc2VcbiAgdmFyIGluZGV4ID0gZmFzdEtleShrZXkpO1xuICB2YXIgZW50cnk7XG4gIGlmIChpbmRleCAhPT0gJ0YnKSByZXR1cm4gdGhhdC5faVtpbmRleF07XG4gIC8vIGZyb3plbiBvYmplY3QgY2FzZVxuICBmb3IgKGVudHJ5ID0gdGhhdC5fZjsgZW50cnk7IGVudHJ5ID0gZW50cnkubikge1xuICAgIGlmIChlbnRyeS5rID09IGtleSkgcmV0dXJuIGVudHJ5O1xuICB9XG59O1xuXG5tb2R1bGUuZXhwb3J0cyA9IHtcbiAgZ2V0Q29uc3RydWN0b3I6IGZ1bmN0aW9uICh3cmFwcGVyLCBOQU1FLCBJU19NQVAsIEFEREVSKSB7XG4gICAgdmFyIEMgPSB3cmFwcGVyKGZ1bmN0aW9uICh0aGF0LCBpdGVyYWJsZSkge1xuICAgICAgYW5JbnN0YW5jZSh0aGF0LCBDLCBOQU1FLCAnX2knKTtcbiAgICAgIHRoYXQuX3QgPSBOQU1FOyAgICAgICAgIC8vIGNvbGxlY3Rpb24gdHlwZVxuICAgICAgdGhhdC5faSA9IGNyZWF0ZShudWxsKTsgLy8gaW5kZXhcbiAgICAgIHRoYXQuX2YgPSB1bmRlZmluZWQ7ICAgIC8vIGZpcnN0IGVudHJ5XG4gICAgICB0aGF0Ll9sID0gdW5kZWZpbmVkOyAgICAvLyBsYXN0IGVudHJ5XG4gICAgICB0aGF0W1NJWkVdID0gMDsgICAgICAgICAvLyBzaXplXG4gICAgICBpZiAoaXRlcmFibGUgIT0gdW5kZWZpbmVkKSBmb3JPZihpdGVyYWJsZSwgSVNfTUFQLCB0aGF0W0FEREVSXSwgdGhhdCk7XG4gICAgfSk7XG4gICAgcmVkZWZpbmVBbGwoQy5wcm90b3R5cGUsIHtcbiAgICAgIC8vIDIzLjEuMy4xIE1hcC5wcm90b3R5cGUuY2xlYXIoKVxuICAgICAgLy8gMjMuMi4zLjIgU2V0LnByb3RvdHlwZS5jbGVhcigpXG4gICAgICBjbGVhcjogZnVuY3Rpb24gY2xlYXIoKSB7XG4gICAgICAgIGZvciAodmFyIHRoYXQgPSB2YWxpZGF0ZSh0aGlzLCBOQU1FKSwgZGF0YSA9IHRoYXQuX2ksIGVudHJ5ID0gdGhhdC5fZjsgZW50cnk7IGVudHJ5ID0gZW50cnkubikge1xuICAgICAgICAgIGVudHJ5LnIgPSB0cnVlO1xuICAgICAgICAgIGlmIChlbnRyeS5wKSBlbnRyeS5wID0gZW50cnkucC5uID0gdW5kZWZpbmVkO1xuICAgICAgICAgIGRlbGV0ZSBkYXRhW2VudHJ5LmldO1xuICAgICAgICB9XG4gICAgICAgIHRoYXQuX2YgPSB0aGF0Ll9sID0gdW5kZWZpbmVkO1xuICAgICAgICB0aGF0W1NJWkVdID0gMDtcbiAgICAgIH0sXG4gICAgICAvLyAyMy4xLjMuMyBNYXAucHJvdG90eXBlLmRlbGV0ZShrZXkpXG4gICAgICAvLyAyMy4yLjMuNCBTZXQucHJvdG90eXBlLmRlbGV0ZSh2YWx1ZSlcbiAgICAgICdkZWxldGUnOiBmdW5jdGlvbiAoa2V5KSB7XG4gICAgICAgIHZhciB0aGF0ID0gdmFsaWRhdGUodGhpcywgTkFNRSk7XG4gICAgICAgIHZhciBlbnRyeSA9IGdldEVudHJ5KHRoYXQsIGtleSk7XG4gICAgICAgIGlmIChlbnRyeSkge1xuICAgICAgICAgIHZhciBuZXh0ID0gZW50cnkubjtcbiAgICAgICAgICB2YXIgcHJldiA9IGVudHJ5LnA7XG4gICAgICAgICAgZGVsZXRlIHRoYXQuX2lbZW50cnkuaV07XG4gICAgICAgICAgZW50cnkuciA9IHRydWU7XG4gICAgICAgICAgaWYgKHByZXYpIHByZXYubiA9IG5leHQ7XG4gICAgICAgICAgaWYgKG5leHQpIG5leHQucCA9IHByZXY7XG4gICAgICAgICAgaWYgKHRoYXQuX2YgPT0gZW50cnkpIHRoYXQuX2YgPSBuZXh0O1xuICAgICAgICAgIGlmICh0aGF0Ll9sID09IGVudHJ5KSB0aGF0Ll9sID0gcHJldjtcbiAgICAgICAgICB0aGF0W1NJWkVdLS07XG4gICAgICAgIH0gcmV0dXJuICEhZW50cnk7XG4gICAgICB9LFxuICAgICAgLy8gMjMuMi4zLjYgU2V0LnByb3RvdHlwZS5mb3JFYWNoKGNhbGxiYWNrZm4sIHRoaXNBcmcgPSB1bmRlZmluZWQpXG4gICAgICAvLyAyMy4xLjMuNSBNYXAucHJvdG90eXBlLmZvckVhY2goY2FsbGJhY2tmbiwgdGhpc0FyZyA9IHVuZGVmaW5lZClcbiAgICAgIGZvckVhY2g6IGZ1bmN0aW9uIGZvckVhY2goY2FsbGJhY2tmbiAvKiAsIHRoYXQgPSB1bmRlZmluZWQgKi8pIHtcbiAgICAgICAgdmFsaWRhdGUodGhpcywgTkFNRSk7XG4gICAgICAgIHZhciBmID0gY3R4KGNhbGxiYWNrZm4sIGFyZ3VtZW50cy5sZW5ndGggPiAxID8gYXJndW1lbnRzWzFdIDogdW5kZWZpbmVkLCAzKTtcbiAgICAgICAgdmFyIGVudHJ5O1xuICAgICAgICB3aGlsZSAoZW50cnkgPSBlbnRyeSA/IGVudHJ5Lm4gOiB0aGlzLl9mKSB7XG4gICAgICAgICAgZihlbnRyeS52LCBlbnRyeS5rLCB0aGlzKTtcbiAgICAgICAgICAvLyByZXZlcnQgdG8gdGhlIGxhc3QgZXhpc3RpbmcgZW50cnlcbiAgICAgICAgICB3aGlsZSAoZW50cnkgJiYgZW50cnkucikgZW50cnkgPSBlbnRyeS5wO1xuICAgICAgICB9XG4gICAgICB9LFxuICAgICAgLy8gMjMuMS4zLjcgTWFwLnByb3RvdHlwZS5oYXMoa2V5KVxuICAgICAgLy8gMjMuMi4zLjcgU2V0LnByb3RvdHlwZS5oYXModmFsdWUpXG4gICAgICBoYXM6IGZ1bmN0aW9uIGhhcyhrZXkpIHtcbiAgICAgICAgcmV0dXJuICEhZ2V0RW50cnkodmFsaWRhdGUodGhpcywgTkFNRSksIGtleSk7XG4gICAgICB9XG4gICAgfSk7XG4gICAgaWYgKERFU0NSSVBUT1JTKSBkUChDLnByb3RvdHlwZSwgJ3NpemUnLCB7XG4gICAgICBnZXQ6IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgcmV0dXJuIHZhbGlkYXRlKHRoaXMsIE5BTUUpW1NJWkVdO1xuICAgICAgfVxuICAgIH0pO1xuICAgIHJldHVybiBDO1xuICB9LFxuICBkZWY6IGZ1bmN0aW9uICh0aGF0LCBrZXksIHZhbHVlKSB7XG4gICAgdmFyIGVudHJ5ID0gZ2V0RW50cnkodGhhdCwga2V5KTtcbiAgICB2YXIgcHJldiwgaW5kZXg7XG4gICAgLy8gY2hhbmdlIGV4aXN0aW5nIGVudHJ5XG4gICAgaWYgKGVudHJ5KSB7XG4gICAgICBlbnRyeS52ID0gdmFsdWU7XG4gICAgLy8gY3JlYXRlIG5ldyBlbnRyeVxuICAgIH0gZWxzZSB7XG4gICAgICB0aGF0Ll9sID0gZW50cnkgPSB7XG4gICAgICAgIGk6IGluZGV4ID0gZmFzdEtleShrZXksIHRydWUpLCAvLyA8LSBpbmRleFxuICAgICAgICBrOiBrZXksICAgICAgICAgICAgICAgICAgICAgICAgLy8gPC0ga2V5XG4gICAgICAgIHY6IHZhbHVlLCAgICAgICAgICAgICAgICAgICAgICAvLyA8LSB2YWx1ZVxuICAgICAgICBwOiBwcmV2ID0gdGhhdC5fbCwgICAgICAgICAgICAgLy8gPC0gcHJldmlvdXMgZW50cnlcbiAgICAgICAgbjogdW5kZWZpbmVkLCAgICAgICAgICAgICAgICAgIC8vIDwtIG5leHQgZW50cnlcbiAgICAgICAgcjogZmFsc2UgICAgICAgICAgICAgICAgICAgICAgIC8vIDwtIHJlbW92ZWRcbiAgICAgIH07XG4gICAgICBpZiAoIXRoYXQuX2YpIHRoYXQuX2YgPSBlbnRyeTtcbiAgICAgIGlmIChwcmV2KSBwcmV2Lm4gPSBlbnRyeTtcbiAgICAgIHRoYXRbU0laRV0rKztcbiAgICAgIC8vIGFkZCB0byBpbmRleFxuICAgICAgaWYgKGluZGV4ICE9PSAnRicpIHRoYXQuX2lbaW5kZXhdID0gZW50cnk7XG4gICAgfSByZXR1cm4gdGhhdDtcbiAgfSxcbiAgZ2V0RW50cnk6IGdldEVudHJ5LFxuICBzZXRTdHJvbmc6IGZ1bmN0aW9uIChDLCBOQU1FLCBJU19NQVApIHtcbiAgICAvLyBhZGQgLmtleXMsIC52YWx1ZXMsIC5lbnRyaWVzLCBbQEBpdGVyYXRvcl1cbiAgICAvLyAyMy4xLjMuNCwgMjMuMS4zLjgsIDIzLjEuMy4xMSwgMjMuMS4zLjEyLCAyMy4yLjMuNSwgMjMuMi4zLjgsIDIzLjIuMy4xMCwgMjMuMi4zLjExXG4gICAgJGl0ZXJEZWZpbmUoQywgTkFNRSwgZnVuY3Rpb24gKGl0ZXJhdGVkLCBraW5kKSB7XG4gICAgICB0aGlzLl90ID0gdmFsaWRhdGUoaXRlcmF0ZWQsIE5BTUUpOyAvLyB0YXJnZXRcbiAgICAgIHRoaXMuX2sgPSBraW5kOyAgICAgICAgICAgICAgICAgICAgIC8vIGtpbmRcbiAgICAgIHRoaXMuX2wgPSB1bmRlZmluZWQ7ICAgICAgICAgICAgICAgIC8vIHByZXZpb3VzXG4gICAgfSwgZnVuY3Rpb24gKCkge1xuICAgICAgdmFyIHRoYXQgPSB0aGlzO1xuICAgICAgdmFyIGtpbmQgPSB0aGF0Ll9rO1xuICAgICAgdmFyIGVudHJ5ID0gdGhhdC5fbDtcbiAgICAgIC8vIHJldmVydCB0byB0aGUgbGFzdCBleGlzdGluZyBlbnRyeVxuICAgICAgd2hpbGUgKGVudHJ5ICYmIGVudHJ5LnIpIGVudHJ5ID0gZW50cnkucDtcbiAgICAgIC8vIGdldCBuZXh0IGVudHJ5XG4gICAgICBpZiAoIXRoYXQuX3QgfHwgISh0aGF0Ll9sID0gZW50cnkgPSBlbnRyeSA/IGVudHJ5Lm4gOiB0aGF0Ll90Ll9mKSkge1xuICAgICAgICAvLyBvciBmaW5pc2ggdGhlIGl0ZXJhdGlvblxuICAgICAgICB0aGF0Ll90ID0gdW5kZWZpbmVkO1xuICAgICAgICByZXR1cm4gc3RlcCgxKTtcbiAgICAgIH1cbiAgICAgIC8vIHJldHVybiBzdGVwIGJ5IGtpbmRcbiAgICAgIGlmIChraW5kID09ICdrZXlzJykgcmV0dXJuIHN0ZXAoMCwgZW50cnkuayk7XG4gICAgICBpZiAoa2luZCA9PSAndmFsdWVzJykgcmV0dXJuIHN0ZXAoMCwgZW50cnkudik7XG4gICAgICByZXR1cm4gc3RlcCgwLCBbZW50cnkuaywgZW50cnkudl0pO1xuICAgIH0sIElTX01BUCA/ICdlbnRyaWVzJyA6ICd2YWx1ZXMnLCAhSVNfTUFQLCB0cnVlKTtcblxuICAgIC8vIGFkZCBbQEBzcGVjaWVzXSwgMjMuMS4yLjIsIDIzLjIuMi4yXG4gICAgc2V0U3BlY2llcyhOQU1FKTtcbiAgfVxufTtcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vbm9kZV9tb2R1bGVzL19jb3JlLWpzQDIuNS4zQGNvcmUtanMvbGlicmFyeS9tb2R1bGVzL19jb2xsZWN0aW9uLXN0cm9uZy5qc1xuLy8gbW9kdWxlIGlkID0gODJcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiJ3VzZSBzdHJpY3QnO1xudmFyIGdsb2JhbCA9IHJlcXVpcmUoJy4vX2dsb2JhbCcpO1xudmFyICRleHBvcnQgPSByZXF1aXJlKCcuL19leHBvcnQnKTtcbnZhciBtZXRhID0gcmVxdWlyZSgnLi9fbWV0YScpO1xudmFyIGZhaWxzID0gcmVxdWlyZSgnLi9fZmFpbHMnKTtcbnZhciBoaWRlID0gcmVxdWlyZSgnLi9faGlkZScpO1xudmFyIHJlZGVmaW5lQWxsID0gcmVxdWlyZSgnLi9fcmVkZWZpbmUtYWxsJyk7XG52YXIgZm9yT2YgPSByZXF1aXJlKCcuL19mb3Itb2YnKTtcbnZhciBhbkluc3RhbmNlID0gcmVxdWlyZSgnLi9fYW4taW5zdGFuY2UnKTtcbnZhciBpc09iamVjdCA9IHJlcXVpcmUoJy4vX2lzLW9iamVjdCcpO1xudmFyIHNldFRvU3RyaW5nVGFnID0gcmVxdWlyZSgnLi9fc2V0LXRvLXN0cmluZy10YWcnKTtcbnZhciBkUCA9IHJlcXVpcmUoJy4vX29iamVjdC1kcCcpLmY7XG52YXIgZWFjaCA9IHJlcXVpcmUoJy4vX2FycmF5LW1ldGhvZHMnKSgwKTtcbnZhciBERVNDUklQVE9SUyA9IHJlcXVpcmUoJy4vX2Rlc2NyaXB0b3JzJyk7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKE5BTUUsIHdyYXBwZXIsIG1ldGhvZHMsIGNvbW1vbiwgSVNfTUFQLCBJU19XRUFLKSB7XG4gIHZhciBCYXNlID0gZ2xvYmFsW05BTUVdO1xuICB2YXIgQyA9IEJhc2U7XG4gIHZhciBBRERFUiA9IElTX01BUCA/ICdzZXQnIDogJ2FkZCc7XG4gIHZhciBwcm90byA9IEMgJiYgQy5wcm90b3R5cGU7XG4gIHZhciBPID0ge307XG4gIGlmICghREVTQ1JJUFRPUlMgfHwgdHlwZW9mIEMgIT0gJ2Z1bmN0aW9uJyB8fCAhKElTX1dFQUsgfHwgcHJvdG8uZm9yRWFjaCAmJiAhZmFpbHMoZnVuY3Rpb24gKCkge1xuICAgIG5ldyBDKCkuZW50cmllcygpLm5leHQoKTtcbiAgfSkpKSB7XG4gICAgLy8gY3JlYXRlIGNvbGxlY3Rpb24gY29uc3RydWN0b3JcbiAgICBDID0gY29tbW9uLmdldENvbnN0cnVjdG9yKHdyYXBwZXIsIE5BTUUsIElTX01BUCwgQURERVIpO1xuICAgIHJlZGVmaW5lQWxsKEMucHJvdG90eXBlLCBtZXRob2RzKTtcbiAgICBtZXRhLk5FRUQgPSB0cnVlO1xuICB9IGVsc2Uge1xuICAgIEMgPSB3cmFwcGVyKGZ1bmN0aW9uICh0YXJnZXQsIGl0ZXJhYmxlKSB7XG4gICAgICBhbkluc3RhbmNlKHRhcmdldCwgQywgTkFNRSwgJ19jJyk7XG4gICAgICB0YXJnZXQuX2MgPSBuZXcgQmFzZSgpO1xuICAgICAgaWYgKGl0ZXJhYmxlICE9IHVuZGVmaW5lZCkgZm9yT2YoaXRlcmFibGUsIElTX01BUCwgdGFyZ2V0W0FEREVSXSwgdGFyZ2V0KTtcbiAgICB9KTtcbiAgICBlYWNoKCdhZGQsY2xlYXIsZGVsZXRlLGZvckVhY2gsZ2V0LGhhcyxzZXQsa2V5cyx2YWx1ZXMsZW50cmllcyx0b0pTT04nLnNwbGl0KCcsJyksIGZ1bmN0aW9uIChLRVkpIHtcbiAgICAgIHZhciBJU19BRERFUiA9IEtFWSA9PSAnYWRkJyB8fCBLRVkgPT0gJ3NldCc7XG4gICAgICBpZiAoS0VZIGluIHByb3RvICYmICEoSVNfV0VBSyAmJiBLRVkgPT0gJ2NsZWFyJykpIGhpZGUoQy5wcm90b3R5cGUsIEtFWSwgZnVuY3Rpb24gKGEsIGIpIHtcbiAgICAgICAgYW5JbnN0YW5jZSh0aGlzLCBDLCBLRVkpO1xuICAgICAgICBpZiAoIUlTX0FEREVSICYmIElTX1dFQUsgJiYgIWlzT2JqZWN0KGEpKSByZXR1cm4gS0VZID09ICdnZXQnID8gdW5kZWZpbmVkIDogZmFsc2U7XG4gICAgICAgIHZhciByZXN1bHQgPSB0aGlzLl9jW0tFWV0oYSA9PT0gMCA/IDAgOiBhLCBiKTtcbiAgICAgICAgcmV0dXJuIElTX0FEREVSID8gdGhpcyA6IHJlc3VsdDtcbiAgICAgIH0pO1xuICAgIH0pO1xuICAgIElTX1dFQUsgfHwgZFAoQy5wcm90b3R5cGUsICdzaXplJywge1xuICAgICAgZ2V0OiBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLl9jLnNpemU7XG4gICAgICB9XG4gICAgfSk7XG4gIH1cblxuICBzZXRUb1N0cmluZ1RhZyhDLCBOQU1FKTtcblxuICBPW05BTUVdID0gQztcbiAgJGV4cG9ydCgkZXhwb3J0LkcgKyAkZXhwb3J0LlcgKyAkZXhwb3J0LkYsIE8pO1xuXG4gIGlmICghSVNfV0VBSykgY29tbW9uLnNldFN0cm9uZyhDLCBOQU1FLCBJU19NQVApO1xuXG4gIHJldHVybiBDO1xufTtcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vbm9kZV9tb2R1bGVzL19jb3JlLWpzQDIuNS4zQGNvcmUtanMvbGlicmFyeS9tb2R1bGVzL19jb2xsZWN0aW9uLmpzXG4vLyBtb2R1bGUgaWQgPSA4M1xuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCIvLyBodHRwczovL2dpdGh1Yi5jb20vRGF2aWRCcnVhbnQvTWFwLVNldC5wcm90b3R5cGUudG9KU09OXG52YXIgY2xhc3NvZiA9IHJlcXVpcmUoJy4vX2NsYXNzb2YnKTtcbnZhciBmcm9tID0gcmVxdWlyZSgnLi9fYXJyYXktZnJvbS1pdGVyYWJsZScpO1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoTkFNRSkge1xuICByZXR1cm4gZnVuY3Rpb24gdG9KU09OKCkge1xuICAgIGlmIChjbGFzc29mKHRoaXMpICE9IE5BTUUpIHRocm93IFR5cGVFcnJvcihOQU1FICsgXCIjdG9KU09OIGlzbid0IGdlbmVyaWNcIik7XG4gICAgcmV0dXJuIGZyb20odGhpcyk7XG4gIH07XG59O1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9ub2RlX21vZHVsZXMvX2NvcmUtanNAMi41LjNAY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX2NvbGxlY3Rpb24tdG8tanNvbi5qc1xuLy8gbW9kdWxlIGlkID0gODRcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiJ3VzZSBzdHJpY3QnO1xuLy8gaHR0cHM6Ly90YzM5LmdpdGh1Yi5pby9wcm9wb3NhbC1zZXRtYXAtb2Zmcm9tL1xudmFyICRleHBvcnQgPSByZXF1aXJlKCcuL19leHBvcnQnKTtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoQ09MTEVDVElPTikge1xuICAkZXhwb3J0KCRleHBvcnQuUywgQ09MTEVDVElPTiwgeyBvZjogZnVuY3Rpb24gb2YoKSB7XG4gICAgdmFyIGxlbmd0aCA9IGFyZ3VtZW50cy5sZW5ndGg7XG4gICAgdmFyIEEgPSBuZXcgQXJyYXkobGVuZ3RoKTtcbiAgICB3aGlsZSAobGVuZ3RoLS0pIEFbbGVuZ3RoXSA9IGFyZ3VtZW50c1tsZW5ndGhdO1xuICAgIHJldHVybiBuZXcgdGhpcyhBKTtcbiAgfSB9KTtcbn07XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL25vZGVfbW9kdWxlcy9fY29yZS1qc0AyLjUuM0Bjb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9fc2V0LWNvbGxlY3Rpb24tb2YuanNcbi8vIG1vZHVsZSBpZCA9IDg1XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIid1c2Ugc3RyaWN0Jztcbi8vIGh0dHBzOi8vdGMzOS5naXRodWIuaW8vcHJvcG9zYWwtc2V0bWFwLW9mZnJvbS9cbnZhciAkZXhwb3J0ID0gcmVxdWlyZSgnLi9fZXhwb3J0Jyk7XG52YXIgYUZ1bmN0aW9uID0gcmVxdWlyZSgnLi9fYS1mdW5jdGlvbicpO1xudmFyIGN0eCA9IHJlcXVpcmUoJy4vX2N0eCcpO1xudmFyIGZvck9mID0gcmVxdWlyZSgnLi9fZm9yLW9mJyk7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKENPTExFQ1RJT04pIHtcbiAgJGV4cG9ydCgkZXhwb3J0LlMsIENPTExFQ1RJT04sIHsgZnJvbTogZnVuY3Rpb24gZnJvbShzb3VyY2UgLyogLCBtYXBGbiwgdGhpc0FyZyAqLykge1xuICAgIHZhciBtYXBGbiA9IGFyZ3VtZW50c1sxXTtcbiAgICB2YXIgbWFwcGluZywgQSwgbiwgY2I7XG4gICAgYUZ1bmN0aW9uKHRoaXMpO1xuICAgIG1hcHBpbmcgPSBtYXBGbiAhPT0gdW5kZWZpbmVkO1xuICAgIGlmIChtYXBwaW5nKSBhRnVuY3Rpb24obWFwRm4pO1xuICAgIGlmIChzb3VyY2UgPT0gdW5kZWZpbmVkKSByZXR1cm4gbmV3IHRoaXMoKTtcbiAgICBBID0gW107XG4gICAgaWYgKG1hcHBpbmcpIHtcbiAgICAgIG4gPSAwO1xuICAgICAgY2IgPSBjdHgobWFwRm4sIGFyZ3VtZW50c1syXSwgMik7XG4gICAgICBmb3JPZihzb3VyY2UsIGZhbHNlLCBmdW5jdGlvbiAobmV4dEl0ZW0pIHtcbiAgICAgICAgQS5wdXNoKGNiKG5leHRJdGVtLCBuKyspKTtcbiAgICAgIH0pO1xuICAgIH0gZWxzZSB7XG4gICAgICBmb3JPZihzb3VyY2UsIGZhbHNlLCBBLnB1c2gsIEEpO1xuICAgIH1cbiAgICByZXR1cm4gbmV3IHRoaXMoQSk7XG4gIH0gfSk7XG59O1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9ub2RlX21vZHVsZXMvX2NvcmUtanNAMi41LjNAY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX3NldC1jb2xsZWN0aW9uLWZyb20uanNcbi8vIG1vZHVsZSBpZCA9IDg2XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsImV4cG9ydCBkZWZhdWx0IGNsYXNzIFRpbGVSZXNvbHZlciB7XHJcbiAgICBjb25zdHJ1Y3RvcihtYXRyaXgsIHRpbGVTaXplID0gMTYpIHtcclxuICAgICAgICB0aGlzLm1hdHJpeCA9IG1hdHJpeDtcclxuICAgICAgICB0aGlzLnRpbGVTaXplID0gdGlsZVNpemU7XHJcbiAgICB9XHJcblxyXG4gICAgdG9JbmRleChwb3MpIHtcclxuICAgICAgICByZXR1cm4gTWF0aC5mbG9vcihwb3MgLyB0aGlzLnRpbGVTaXplKTtcclxuICAgIH1cclxuXHJcbiAgICB0b0luZGV4UmFuZ2UocG9zMSwgcG9zMikge1xyXG4gICAgICAgIGNvbnN0IHBNYXggPSBNYXRoLmNlaWwocG9zMiAvIHRoaXMudGlsZVNpemUpICogdGhpcy50aWxlU2l6ZTtcclxuICAgICAgICBsZXQgcmFuZ2UgPSBbXTtcclxuICAgICAgICBsZXQgcG9zID0gcG9zMTtcclxuICAgICAgICBkbyB7XHJcbiAgICAgICAgICAgIHJhbmdlLnB1c2godGhpcy50b0luZGV4KHBvcykpO1xyXG4gICAgICAgICAgICBwb3MgKz0gdGhpcy50aWxlU2l6ZTtcclxuICAgICAgICB9IHdoaWxlIChwb3MgPCBwTWF4KTtcclxuXHJcbiAgICAgICAgcmV0dXJuIHJhbmdlO1xyXG4gICAgfVxyXG5cclxuICAgIGdldEJ5SW5kZXgoaW5kZXhYLCBpbmRleFkpIHtcclxuICAgICAgICBjb25zdCB0aWxlID0gdGhpcy5tYXRyaXguZ2V0KGluZGV4WCwgaW5kZXhZKTtcclxuICAgICAgICBjb25zdCB4MSA9IGluZGV4WCAqIHRoaXMudGlsZVNpemU7XHJcbiAgICAgICAgY29uc3QgeDIgPSB4MSArIHRoaXMudGlsZVNpemU7XHJcbiAgICAgICAgY29uc3QgeTEgPSBpbmRleFkgKiB0aGlzLnRpbGVTaXplO1xyXG4gICAgICAgIGNvbnN0IHkyID0geTEgKyB0aGlzLnRpbGVTaXplO1xyXG4gICAgICAgIGlmICh0aWxlKSB7XHJcbiAgICAgICAgICAgIHJldHVybiB7XHJcbiAgICAgICAgICAgICAgICB0aWxlLFxyXG4gICAgICAgICAgICAgICAgeDEsXHJcbiAgICAgICAgICAgICAgICB4MixcclxuICAgICAgICAgICAgICAgIHkxLFxyXG4gICAgICAgICAgICAgICAgeTJcclxuICAgICAgICAgICAgfTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgc2VhcmNoQnlQb3NpdGlvbihwb3NYLCBwb3NZKSB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuZ2V0QnlJbmRleChcclxuICAgICAgICAgICAgdGhpcy50b0luZGV4KHBvc1gpLFxyXG4gICAgICAgICAgICB0aGlzLnRvSW5kZXgocG9zWSksXHJcbiAgICAgICAgKTtcclxuICAgIH1cclxuXHJcbiAgICBzZWFyY2hCeVJhbmdlKHgxLHgyLHkxLHkyKSB7XHJcbiAgICAgICAgbGV0IG1hdGNoZXMgPSBbXTtcclxuICAgICAgICB0aGlzLnRvSW5kZXhSYW5nZSh4MSx4MikuZm9yRWFjaChpbmRleFggPT4ge1xyXG4gICAgICAgICAgICB0aGlzLnRvSW5kZXhSYW5nZSh5MSx5MikuZm9yRWFjaChpbmRleFkgPT4ge1xyXG4gICAgICAgICAgICAgICAgbGV0IG1hdGNoID0gdGhpcy5nZXRCeUluZGV4KGluZGV4WCwgaW5kZXhZKTtcclxuICAgICAgICAgICAgICAgIGlmIChtYXRjaCkge1xyXG4gICAgICAgICAgICAgICAgICAgIG1hdGNoZXMucHVzaChtYXRjaCk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH0pXHJcbiAgICAgICAgfSk7XHJcblxyXG4gICAgICAgIHJldHVybiBtYXRjaGVzO1xyXG4gICAgfVxyXG59XHJcblxyXG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9wdWJsaWMvanMvVGlsZVJlc29sdmVyLmpzIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbmV4cG9ydHMuX19lc01vZHVsZSA9IHRydWU7XG5cbnZhciBfZnJvbSA9IHJlcXVpcmUoXCIuLi9jb3JlLWpzL2FycmF5L2Zyb21cIik7XG5cbnZhciBfZnJvbTIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9mcm9tKTtcblxuZnVuY3Rpb24gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChvYmopIHsgcmV0dXJuIG9iaiAmJiBvYmouX19lc01vZHVsZSA/IG9iaiA6IHsgZGVmYXVsdDogb2JqIH07IH1cblxuZXhwb3J0cy5kZWZhdWx0ID0gZnVuY3Rpb24gKGFycikge1xuICBpZiAoQXJyYXkuaXNBcnJheShhcnIpKSB7XG4gICAgZm9yICh2YXIgaSA9IDAsIGFycjIgPSBBcnJheShhcnIubGVuZ3RoKTsgaSA8IGFyci5sZW5ndGg7IGkrKykge1xuICAgICAgYXJyMltpXSA9IGFycltpXTtcbiAgICB9XG5cbiAgICByZXR1cm4gYXJyMjtcbiAgfSBlbHNlIHtcbiAgICByZXR1cm4gKDAsIF9mcm9tMi5kZWZhdWx0KShhcnIpO1xuICB9XG59O1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vbm9kZV9tb2R1bGVzL19iYWJlbC1ydW50aW1lQDYuMjYuMEBiYWJlbC1ydW50aW1lL2hlbHBlcnMvdG9Db25zdW1hYmxlQXJyYXkuanNcbi8vIG1vZHVsZSBpZCA9IDg4XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsImV4cG9ydCBkZWZhdWx0IGNsYXNzIFNwcml0ZVNoZWV0IHtcclxuICAgIGNvbnN0cnVjdG9yKGltYWdlLCB3aWR0aCwgaGVpZ2h0KSB7XHJcbiAgICAgICAgdGhpcy5pbWFnZSA9IGltYWdlO1xyXG4gICAgICAgIHRoaXMud2lkdGggPSB3aWR0aDtcclxuICAgICAgICB0aGlzLmhlaWdodCA9IGhlaWdodDtcclxuICAgICAgICB0aGlzLnRpbGVzID0gbmV3IE1hcCgpO1xyXG4gICAgICAgIHRoaXMuYW5pbWF0aW9ucyA9IG5ldyBNYXAoKTtcclxuICAgIH1cclxuXHJcbiAgICBkZWZpbmVBbmltKG5hbWUsIGFuaW1hdGlvbikge1xyXG4gICAgICAgIHRoaXMuYW5pbWF0aW9ucy5zZXQobmFtZSwgYW5pbWF0aW9uKTtcclxuICAgIH1cclxuXHJcbiAgICBkZWZpbmUobmFtZSwgeCwgeSwgd2lkdGgsIGhlaWdodCkge1xyXG4gICAgICAgIC8vIGRlZmluZSBhIHNwcml0ZSBpbiB0aGUgaW1hZ2Ugd2l0aCBuYW1lXHJcbiAgICAgICAgLy8g5piO56Gu5a6a5LmJ5LiA5Z2X5L2N5LqOc3ByaXRlIHNoZWV05LiteCx55L2N572ud2lkdGgsIGhlaWdodOeahHNwcml0ZVxyXG4gICAgICAgIGNvbnN0IGJ1ZmZlcnMgPSBbZmFsc2UsIHRydWVdLm1hcChmbGlwID0+IHtcclxuICAgICAgICAgICAgY29uc3QgYnVmZmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnY2FudmFzJyk7XHJcbiAgICAgICAgICAgIGJ1ZmZlci53aWR0aCA9IHdpZHRoO1xyXG4gICAgICAgICAgICBidWZmZXIuaGVpZ2h0ID0gaGVpZ2h0O1xyXG5cclxuICAgICAgICAgICAgY29uc3QgY29udGV4dCA9IGJ1ZmZlci5nZXRDb250ZXh0KCcyZCcpO1xyXG5cclxuICAgICAgICAgICAgaWYgKGZsaXApIHtcclxuICAgICAgICAgICAgICAgIC8vIE1pcnJvciB0aGUgY2FudmFzXHJcbiAgICAgICAgICAgICAgICBjb250ZXh0LnNjYWxlKC0xLCAxKTtcclxuICAgICAgICAgICAgICAgIGNvbnRleHQudHJhbnNsYXRlKC13aWR0aCwgMCk7XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIGNvbnRleHQuZHJhd0ltYWdlKFxyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuaW1hZ2UsXHJcbiAgICAgICAgICAgICAgICAgICAgeCxcclxuICAgICAgICAgICAgICAgICAgICB5LFxyXG4gICAgICAgICAgICAgICAgICAgIHdpZHRoLFxyXG4gICAgICAgICAgICAgICAgICAgIGhlaWdodCxcclxuICAgICAgICAgICAgICAgICAgICAwLFxyXG4gICAgICAgICAgICAgICAgICAgIDAsXHJcbiAgICAgICAgICAgICAgICAgICAgd2lkdGgsXHJcbiAgICAgICAgICAgICAgICAgICAgaGVpZ2h0KTtcclxuXHJcbiAgICAgICAgICAgIHJldHVybiBidWZmZXI7XHJcbiAgICAgICAgfSk7XHJcblxyXG4gICAgICAgIHRoaXMudGlsZXMuc2V0KG5hbWUsIGJ1ZmZlcnMpO1xyXG4gICAgfVxyXG5cclxuICAgIGRlZmluZVRpbGUobmFtZSwgeCwgeSkge1xyXG4gICAgICAgIHRoaXMuZGVmaW5lKG5hbWUsIHggKiB0aGlzLndpZHRoLCB5ICogdGhpcy5oZWlnaHQsIHRoaXMud2lkdGgsIHRoaXMuaGVpZ2h0KTtcclxuICAgIH1cclxuXHJcbiAgICBkcmF3KG5hbWUsIGNvbnRleHQsIHgsIHksIGZsaXAgPSBmYWxzZSkge1xyXG4gICAgICAgIGNvbnN0IGJ1ZmZlciA9IHRoaXMudGlsZXMuZ2V0KG5hbWUpW2ZsaXAgPyAxIDogMF07XHJcbiAgICAgICAgY29udGV4dC5kcmF3SW1hZ2UoYnVmZmVyLCB4LCB5KTtcclxuICAgIH1cclxuXHJcbiAgICBkcmF3VGlsZShuYW1lLCBjb250ZXh0LCB4LCB5KSB7XHJcbiAgICAgICAgdGhpcy5kcmF3KG5hbWUsIGNvbnRleHQsIHgqdGhpcy53aWR0aCwgeSp0aGlzLmhlaWdodCk7XHJcbiAgICB9XHJcblxyXG4gICAgZHJhd0FuaW0obmFtZSwgY29udGV4dCwgeCwgeSwgZGlzdGFuY2UpIHtcclxuICAgICAgICBjb25zdCBhbmltID0gdGhpcy5hbmltYXRpb25zLmdldChuYW1lKTtcclxuICAgICAgICB0aGlzLmRyYXdUaWxlKGFuaW0oZGlzdGFuY2UpLCBjb250ZXh0LCB4LCB5KTtcclxuICAgIH1cclxufVxyXG5cclxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vcHVibGljL2pzL1Nwcml0ZVNoZWV0LmpzIiwibW9kdWxlLmV4cG9ydHMgPSB7IFwiZGVmYXVsdFwiOiByZXF1aXJlKFwiY29yZS1qcy9saWJyYXJ5L2ZuL21hcFwiKSwgX19lc01vZHVsZTogdHJ1ZSB9O1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vbm9kZV9tb2R1bGVzL19iYWJlbC1ydW50aW1lQDYuMjYuMEBiYWJlbC1ydW50aW1lL2NvcmUtanMvbWFwLmpzXG4vLyBtb2R1bGUgaWQgPSA5MFxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJpbXBvcnQge1NpZGVzLCBUcmFpdH0gZnJvbSAnLi4vRW50aXR5LmpzJ1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgUGVuZHVsdW1Nb3ZlIGV4dGVuZHMgVHJhaXQge1xyXG4gICAgY29uc3RydWN0b3IoKSB7XHJcbiAgICAgICAgc3VwZXIoJ3BlbmR1bHVtTW92ZScpO1xyXG4gICAgICAgIHRoaXMuZW5hYmxlID0gdHJ1ZTtcclxuICAgICAgICB0aGlzLnNwZWVkID0gIC0zMDtcclxuICAgIH1cclxuXHJcbiAgICBvYnN0cnVjdChrb29wYSwgc2lkZXMpIHtcclxuICAgICAgICBpZiAoc2lkZXMgPT09IFNpZGVzLkxFRlQgfHwgc2lkZXMgPT09IFNpZGVzLlJJR0hUKSB7XHJcbiAgICAgICAgICAgIHRoaXMuc3BlZWQgPSAtdGhpcy5zcGVlZDtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgdXBkYXRlKGVudGl0eSwgZGVsdGFUaW1lKSB7XHJcbiAgICAgICAgZW50aXR5LmxpZmVUaW1lICs9IGRlbHRhVGltZTtcclxuICAgICAgICBpZiAodGhpcy5lbmFibGUpIHtcclxuICAgICAgICAgICAgZW50aXR5LnZlbC54ID0gdGhpcy5zcGVlZDtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbn1cclxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vcHVibGljL2pzL3RyYWl0cy9QZW5kdWx1bU1vdmUuanMiLCJpbXBvcnQgVGltZXIgZnJvbSAnLi9UaW1lci5qcyc7XHJcbmltcG9ydCBDYW1lcmEgZnJvbSAnLi9DYW1lcmEuanMnO1xyXG5pbXBvcnQgRW50aXR5IGZyb20gJy4vRW50aXR5LmpzJztcclxuaW1wb3J0IFBsYXllckNvbnRyb2xsZXIgZnJvbSAnLi90cmFpdHMvUGxheWVyQ29udHJvbGxlci5qcyc7XHJcbmltcG9ydCB7Y3JlYXRlTGV2ZWxMb2FkZXJ9IGZyb20gJy4vbG9hZGVycy9sZXZlbC5qcyc7XHJcbmltcG9ydCB7bG9hZEZvbnR9IGZyb20gJy4vbG9hZGVycy9mb250LmpzJztcclxuaW1wb3J0IHtsb2FkRW50aXRpZXN9IGZyb20gJy4vZW50aXRpZXMuanMnO1xyXG5pbXBvcnQge2NyZWF0ZURhc2hib2FyZExheWVyfSBmcm9tICcuL2xheWVycy9kYXNoYm9hcmQuanMnO1xyXG5pbXBvcnQge3NldHVwS2V5Ym9hcmR9IGZyb20gJy4vaW5wdXQuanMnO1xyXG4vLyBpbXBvcnQge2NyZWF0ZUNvbGxpc2lvbkxheWVyfSBmcm9tICcuL2xheWVycy9jb2xsaXNpb24uanMnXHJcbi8vIGltcG9ydCB7Y3JlYXRlQ2FtZXJhTGF5ZXJ9IGZyb20gJy4vbGF5ZXJzL2NhbWVyYS5qcyc7XHJcbi8vIGltcG9ydCB7c2V0dXBNb3VzZUNvbnRyb2x9IGZyb20gJy4vZGVidWcuanMnO1xyXG5cclxuXHJcbmZ1bmN0aW9uIGNyZWF0ZVBsYXllckVudihwbGF5ZXJFbnRpdHkpIHtcclxuICAgIGNvbnN0IHBsYXllckVudiA9IG5ldyBFbnRpdHkoKTtcclxuICAgIGNvbnN0IHBsYXllckNvbnRyb2wgPSBuZXcgUGxheWVyQ29udHJvbGxlcigpO1xyXG4gICAgcGxheWVyQ29udHJvbC5zZXRQbGF5ZXIocGxheWVyRW50aXR5KTtcclxuICAgIHBsYXllckVudi5hZGRUcmFpdChwbGF5ZXJDb250cm9sKTtcclxuXHJcbiAgICByZXR1cm4gcGxheWVyRW52O1xyXG59XHJcblxyXG5hc3luYyBmdW5jdGlvbiBtYWluKGNhbnZhcykge1xyXG4gICAgY29uc3QgY29udGV4dCA9IGNhbnZhcy5nZXRDb250ZXh0KCcyZCcpO1xyXG5cclxuICAgIGNvbnN0IFtlbnRpdHlGYWN0b3J5LCBmb250XSA9IGF3YWl0IFByb21pc2UuYWxsKFtcclxuICAgICAgICBsb2FkRW50aXRpZXMoKSxcclxuICAgICAgICBsb2FkRm9udCgpXHJcbiAgICBdKTtcclxuICAgIGNvbnN0IGxvYWRMZXZlbCA9IGF3YWl0IGNyZWF0ZUxldmVsTG9hZGVyKGVudGl0eUZhY3RvcnkpO1xyXG4gICAgY29uc3QgbGV2ZWwgPSBhd2FpdCBsb2FkTGV2ZWwoJzEtMScpO1xyXG5cclxuICAgIGNvbnN0IGNhbWVyYSA9IG5ldyBDYW1lcmEoKTtcclxuXHJcbiAgICBjb25zdCBtYXJpbyA9IGVudGl0eUZhY3RvcnkubWFyaW8oKTtcclxuICAgIG1hcmlvLnBvcy5zZXQoNjQsIDEwMCk7XHJcbiAgICBsZXZlbC5lbnRpdGllcy5hZGQobWFyaW8pO1xyXG5cclxuICAgIGNvbnN0IHBsYXllckVudiA9IGNyZWF0ZVBsYXllckVudihtYXJpbyk7XHJcbiAgICBsZXZlbC5lbnRpdGllcy5hZGQocGxheWVyRW52KTtcclxuXHJcbiAgICBjb25zdCBpbnB1dCA9IHNldHVwS2V5Ym9hcmQobWFyaW8pO1xyXG4gICAgaW5wdXQubGlzdGVuVG8od2luZG93KTtcclxuXHJcblxyXG4gICAgbGV2ZWwuY29tcC5sYXllcnMucHVzaChjcmVhdGVEYXNoYm9hcmRMYXllcihmb250LCBwbGF5ZXJFbnYpKTtcclxuXHJcbiAgICAvKkRlYnVnIFRvb2xzIDogKi9cclxuICAgIC8vIGxldmVsLmNvbXAubGF5ZXJzLnB1c2goXHJcbiAgICAvLyAgICAgY3JlYXRlQ29sbGlzaW9uTGF5ZXIobGV2ZWwpLFxyXG4gICAgLy8gICAgIGNyZWF0ZUNhbWVyYUxheWVyKGNhbWVyYSkpO1xyXG4gICAgLy8gc2V0dXBNb3VzZUNvbnRyb2woY2FudmFzLCBtYXJpbywgY2FtZXJhKTtcclxuXHJcblxyXG4gICAgY29uc3QgdGltZXIgPSBuZXcgVGltZXIoMS82MCk7XHJcblxyXG4gICAgdGltZXIudXBkYXRlID0gZnVuY3Rpb24gdXBkYXRlKGRlbHRhVGltZSkge1xyXG4gICAgICAgIGxldmVsLnVwZGF0ZShkZWx0YVRpbWUpO1xyXG5cclxuICAgICAgICBjYW1lcmEucG9zLnggPSBNYXRoLm1heCgwLCBtYXJpby5wb3MueCAtIDEwMCk7XHJcblxyXG4gICAgICAgIGxldmVsLmNvbXAuZHJhdyhjb250ZXh0LCBjYW1lcmEpO1xyXG5cclxuICAgIH07XHJcblxyXG4gICAgdGltZXIuc3RhcnQoKTtcclxufVxyXG5cclxuXHJcbmNvbnN0IGNhbnZhcyA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdzY3JlZW4nKTtcclxubWFpbihjYW52YXMpO1xuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3B1YmxpYy9qcy9tYWluLmpzIiwiLyoqXG4gKiBDb3B5cmlnaHQgKGMpIDIwMTQtcHJlc2VudCwgRmFjZWJvb2ssIEluYy5cbiAqXG4gKiBUaGlzIHNvdXJjZSBjb2RlIGlzIGxpY2Vuc2VkIHVuZGVyIHRoZSBNSVQgbGljZW5zZSBmb3VuZCBpbiB0aGVcbiAqIExJQ0VOU0UgZmlsZSBpbiB0aGUgcm9vdCBkaXJlY3Rvcnkgb2YgdGhpcyBzb3VyY2UgdHJlZS5cbiAqL1xuXG4vLyBUaGlzIG1ldGhvZCBvZiBvYnRhaW5pbmcgYSByZWZlcmVuY2UgdG8gdGhlIGdsb2JhbCBvYmplY3QgbmVlZHMgdG8gYmVcbi8vIGtlcHQgaWRlbnRpY2FsIHRvIHRoZSB3YXkgaXQgaXMgb2J0YWluZWQgaW4gcnVudGltZS5qc1xudmFyIGcgPSAoZnVuY3Rpb24oKSB7IHJldHVybiB0aGlzIH0pKCkgfHwgRnVuY3Rpb24oXCJyZXR1cm4gdGhpc1wiKSgpO1xuXG4vLyBVc2UgYGdldE93blByb3BlcnR5TmFtZXNgIGJlY2F1c2Ugbm90IGFsbCBicm93c2VycyBzdXBwb3J0IGNhbGxpbmdcbi8vIGBoYXNPd25Qcm9wZXJ0eWAgb24gdGhlIGdsb2JhbCBgc2VsZmAgb2JqZWN0IGluIGEgd29ya2VyLiBTZWUgIzE4My5cbnZhciBoYWRSdW50aW1lID0gZy5yZWdlbmVyYXRvclJ1bnRpbWUgJiZcbiAgT2JqZWN0LmdldE93blByb3BlcnR5TmFtZXMoZykuaW5kZXhPZihcInJlZ2VuZXJhdG9yUnVudGltZVwiKSA+PSAwO1xuXG4vLyBTYXZlIHRoZSBvbGQgcmVnZW5lcmF0b3JSdW50aW1lIGluIGNhc2UgaXQgbmVlZHMgdG8gYmUgcmVzdG9yZWQgbGF0ZXIuXG52YXIgb2xkUnVudGltZSA9IGhhZFJ1bnRpbWUgJiYgZy5yZWdlbmVyYXRvclJ1bnRpbWU7XG5cbi8vIEZvcmNlIHJlZXZhbHV0YXRpb24gb2YgcnVudGltZS5qcy5cbmcucmVnZW5lcmF0b3JSdW50aW1lID0gdW5kZWZpbmVkO1xuXG5tb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCIuL3J1bnRpbWVcIik7XG5cbmlmIChoYWRSdW50aW1lKSB7XG4gIC8vIFJlc3RvcmUgdGhlIG9yaWdpbmFsIHJ1bnRpbWUuXG4gIGcucmVnZW5lcmF0b3JSdW50aW1lID0gb2xkUnVudGltZTtcbn0gZWxzZSB7XG4gIC8vIFJlbW92ZSB0aGUgZ2xvYmFsIHByb3BlcnR5IGFkZGVkIGJ5IHJ1bnRpbWUuanMuXG4gIHRyeSB7XG4gICAgZGVsZXRlIGcucmVnZW5lcmF0b3JSdW50aW1lO1xuICB9IGNhdGNoKGUpIHtcbiAgICBnLnJlZ2VuZXJhdG9yUnVudGltZSA9IHVuZGVmaW5lZDtcbiAgfVxufVxuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9ub2RlX21vZHVsZXMvX3JlZ2VuZXJhdG9yLXJ1bnRpbWVAMC4xMS4xQHJlZ2VuZXJhdG9yLXJ1bnRpbWUvcnVudGltZS1tb2R1bGUuanNcbi8vIG1vZHVsZSBpZCA9IDkzXG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIi8qKlxuICogQ29weXJpZ2h0IChjKSAyMDE0LXByZXNlbnQsIEZhY2Vib29rLCBJbmMuXG4gKlxuICogVGhpcyBzb3VyY2UgY29kZSBpcyBsaWNlbnNlZCB1bmRlciB0aGUgTUlUIGxpY2Vuc2UgZm91bmQgaW4gdGhlXG4gKiBMSUNFTlNFIGZpbGUgaW4gdGhlIHJvb3QgZGlyZWN0b3J5IG9mIHRoaXMgc291cmNlIHRyZWUuXG4gKi9cblxuIShmdW5jdGlvbihnbG9iYWwpIHtcbiAgXCJ1c2Ugc3RyaWN0XCI7XG5cbiAgdmFyIE9wID0gT2JqZWN0LnByb3RvdHlwZTtcbiAgdmFyIGhhc093biA9IE9wLmhhc093blByb3BlcnR5O1xuICB2YXIgdW5kZWZpbmVkOyAvLyBNb3JlIGNvbXByZXNzaWJsZSB0aGFuIHZvaWQgMC5cbiAgdmFyICRTeW1ib2wgPSB0eXBlb2YgU3ltYm9sID09PSBcImZ1bmN0aW9uXCIgPyBTeW1ib2wgOiB7fTtcbiAgdmFyIGl0ZXJhdG9yU3ltYm9sID0gJFN5bWJvbC5pdGVyYXRvciB8fCBcIkBAaXRlcmF0b3JcIjtcbiAgdmFyIGFzeW5jSXRlcmF0b3JTeW1ib2wgPSAkU3ltYm9sLmFzeW5jSXRlcmF0b3IgfHwgXCJAQGFzeW5jSXRlcmF0b3JcIjtcbiAgdmFyIHRvU3RyaW5nVGFnU3ltYm9sID0gJFN5bWJvbC50b1N0cmluZ1RhZyB8fCBcIkBAdG9TdHJpbmdUYWdcIjtcblxuICB2YXIgaW5Nb2R1bGUgPSB0eXBlb2YgbW9kdWxlID09PSBcIm9iamVjdFwiO1xuICB2YXIgcnVudGltZSA9IGdsb2JhbC5yZWdlbmVyYXRvclJ1bnRpbWU7XG4gIGlmIChydW50aW1lKSB7XG4gICAgaWYgKGluTW9kdWxlKSB7XG4gICAgICAvLyBJZiByZWdlbmVyYXRvclJ1bnRpbWUgaXMgZGVmaW5lZCBnbG9iYWxseSBhbmQgd2UncmUgaW4gYSBtb2R1bGUsXG4gICAgICAvLyBtYWtlIHRoZSBleHBvcnRzIG9iamVjdCBpZGVudGljYWwgdG8gcmVnZW5lcmF0b3JSdW50aW1lLlxuICAgICAgbW9kdWxlLmV4cG9ydHMgPSBydW50aW1lO1xuICAgIH1cbiAgICAvLyBEb24ndCBib3RoZXIgZXZhbHVhdGluZyB0aGUgcmVzdCBvZiB0aGlzIGZpbGUgaWYgdGhlIHJ1bnRpbWUgd2FzXG4gICAgLy8gYWxyZWFkeSBkZWZpbmVkIGdsb2JhbGx5LlxuICAgIHJldHVybjtcbiAgfVxuXG4gIC8vIERlZmluZSB0aGUgcnVudGltZSBnbG9iYWxseSAoYXMgZXhwZWN0ZWQgYnkgZ2VuZXJhdGVkIGNvZGUpIGFzIGVpdGhlclxuICAvLyBtb2R1bGUuZXhwb3J0cyAoaWYgd2UncmUgaW4gYSBtb2R1bGUpIG9yIGEgbmV3LCBlbXB0eSBvYmplY3QuXG4gIHJ1bnRpbWUgPSBnbG9iYWwucmVnZW5lcmF0b3JSdW50aW1lID0gaW5Nb2R1bGUgPyBtb2R1bGUuZXhwb3J0cyA6IHt9O1xuXG4gIGZ1bmN0aW9uIHdyYXAoaW5uZXJGbiwgb3V0ZXJGbiwgc2VsZiwgdHJ5TG9jc0xpc3QpIHtcbiAgICAvLyBJZiBvdXRlckZuIHByb3ZpZGVkIGFuZCBvdXRlckZuLnByb3RvdHlwZSBpcyBhIEdlbmVyYXRvciwgdGhlbiBvdXRlckZuLnByb3RvdHlwZSBpbnN0YW5jZW9mIEdlbmVyYXRvci5cbiAgICB2YXIgcHJvdG9HZW5lcmF0b3IgPSBvdXRlckZuICYmIG91dGVyRm4ucHJvdG90eXBlIGluc3RhbmNlb2YgR2VuZXJhdG9yID8gb3V0ZXJGbiA6IEdlbmVyYXRvcjtcbiAgICB2YXIgZ2VuZXJhdG9yID0gT2JqZWN0LmNyZWF0ZShwcm90b0dlbmVyYXRvci5wcm90b3R5cGUpO1xuICAgIHZhciBjb250ZXh0ID0gbmV3IENvbnRleHQodHJ5TG9jc0xpc3QgfHwgW10pO1xuXG4gICAgLy8gVGhlIC5faW52b2tlIG1ldGhvZCB1bmlmaWVzIHRoZSBpbXBsZW1lbnRhdGlvbnMgb2YgdGhlIC5uZXh0LFxuICAgIC8vIC50aHJvdywgYW5kIC5yZXR1cm4gbWV0aG9kcy5cbiAgICBnZW5lcmF0b3IuX2ludm9rZSA9IG1ha2VJbnZva2VNZXRob2QoaW5uZXJGbiwgc2VsZiwgY29udGV4dCk7XG5cbiAgICByZXR1cm4gZ2VuZXJhdG9yO1xuICB9XG4gIHJ1bnRpbWUud3JhcCA9IHdyYXA7XG5cbiAgLy8gVHJ5L2NhdGNoIGhlbHBlciB0byBtaW5pbWl6ZSBkZW9wdGltaXphdGlvbnMuIFJldHVybnMgYSBjb21wbGV0aW9uXG4gIC8vIHJlY29yZCBsaWtlIGNvbnRleHQudHJ5RW50cmllc1tpXS5jb21wbGV0aW9uLiBUaGlzIGludGVyZmFjZSBjb3VsZFxuICAvLyBoYXZlIGJlZW4gKGFuZCB3YXMgcHJldmlvdXNseSkgZGVzaWduZWQgdG8gdGFrZSBhIGNsb3N1cmUgdG8gYmVcbiAgLy8gaW52b2tlZCB3aXRob3V0IGFyZ3VtZW50cywgYnV0IGluIGFsbCB0aGUgY2FzZXMgd2UgY2FyZSBhYm91dCB3ZVxuICAvLyBhbHJlYWR5IGhhdmUgYW4gZXhpc3RpbmcgbWV0aG9kIHdlIHdhbnQgdG8gY2FsbCwgc28gdGhlcmUncyBubyBuZWVkXG4gIC8vIHRvIGNyZWF0ZSBhIG5ldyBmdW5jdGlvbiBvYmplY3QuIFdlIGNhbiBldmVuIGdldCBhd2F5IHdpdGggYXNzdW1pbmdcbiAgLy8gdGhlIG1ldGhvZCB0YWtlcyBleGFjdGx5IG9uZSBhcmd1bWVudCwgc2luY2UgdGhhdCBoYXBwZW5zIHRvIGJlIHRydWVcbiAgLy8gaW4gZXZlcnkgY2FzZSwgc28gd2UgZG9uJ3QgaGF2ZSB0byB0b3VjaCB0aGUgYXJndW1lbnRzIG9iamVjdC4gVGhlXG4gIC8vIG9ubHkgYWRkaXRpb25hbCBhbGxvY2F0aW9uIHJlcXVpcmVkIGlzIHRoZSBjb21wbGV0aW9uIHJlY29yZCwgd2hpY2hcbiAgLy8gaGFzIGEgc3RhYmxlIHNoYXBlIGFuZCBzbyBob3BlZnVsbHkgc2hvdWxkIGJlIGNoZWFwIHRvIGFsbG9jYXRlLlxuICBmdW5jdGlvbiB0cnlDYXRjaChmbiwgb2JqLCBhcmcpIHtcbiAgICB0cnkge1xuICAgICAgcmV0dXJuIHsgdHlwZTogXCJub3JtYWxcIiwgYXJnOiBmbi5jYWxsKG9iaiwgYXJnKSB9O1xuICAgIH0gY2F0Y2ggKGVycikge1xuICAgICAgcmV0dXJuIHsgdHlwZTogXCJ0aHJvd1wiLCBhcmc6IGVyciB9O1xuICAgIH1cbiAgfVxuXG4gIHZhciBHZW5TdGF0ZVN1c3BlbmRlZFN0YXJ0ID0gXCJzdXNwZW5kZWRTdGFydFwiO1xuICB2YXIgR2VuU3RhdGVTdXNwZW5kZWRZaWVsZCA9IFwic3VzcGVuZGVkWWllbGRcIjtcbiAgdmFyIEdlblN0YXRlRXhlY3V0aW5nID0gXCJleGVjdXRpbmdcIjtcbiAgdmFyIEdlblN0YXRlQ29tcGxldGVkID0gXCJjb21wbGV0ZWRcIjtcblxuICAvLyBSZXR1cm5pbmcgdGhpcyBvYmplY3QgZnJvbSB0aGUgaW5uZXJGbiBoYXMgdGhlIHNhbWUgZWZmZWN0IGFzXG4gIC8vIGJyZWFraW5nIG91dCBvZiB0aGUgZGlzcGF0Y2ggc3dpdGNoIHN0YXRlbWVudC5cbiAgdmFyIENvbnRpbnVlU2VudGluZWwgPSB7fTtcblxuICAvLyBEdW1teSBjb25zdHJ1Y3RvciBmdW5jdGlvbnMgdGhhdCB3ZSB1c2UgYXMgdGhlIC5jb25zdHJ1Y3RvciBhbmRcbiAgLy8gLmNvbnN0cnVjdG9yLnByb3RvdHlwZSBwcm9wZXJ0aWVzIGZvciBmdW5jdGlvbnMgdGhhdCByZXR1cm4gR2VuZXJhdG9yXG4gIC8vIG9iamVjdHMuIEZvciBmdWxsIHNwZWMgY29tcGxpYW5jZSwgeW91IG1heSB3aXNoIHRvIGNvbmZpZ3VyZSB5b3VyXG4gIC8vIG1pbmlmaWVyIG5vdCB0byBtYW5nbGUgdGhlIG5hbWVzIG9mIHRoZXNlIHR3byBmdW5jdGlvbnMuXG4gIGZ1bmN0aW9uIEdlbmVyYXRvcigpIHt9XG4gIGZ1bmN0aW9uIEdlbmVyYXRvckZ1bmN0aW9uKCkge31cbiAgZnVuY3Rpb24gR2VuZXJhdG9yRnVuY3Rpb25Qcm90b3R5cGUoKSB7fVxuXG4gIC8vIFRoaXMgaXMgYSBwb2x5ZmlsbCBmb3IgJUl0ZXJhdG9yUHJvdG90eXBlJSBmb3IgZW52aXJvbm1lbnRzIHRoYXRcbiAgLy8gZG9uJ3QgbmF0aXZlbHkgc3VwcG9ydCBpdC5cbiAgdmFyIEl0ZXJhdG9yUHJvdG90eXBlID0ge307XG4gIEl0ZXJhdG9yUHJvdG90eXBlW2l0ZXJhdG9yU3ltYm9sXSA9IGZ1bmN0aW9uICgpIHtcbiAgICByZXR1cm4gdGhpcztcbiAgfTtcblxuICB2YXIgZ2V0UHJvdG8gPSBPYmplY3QuZ2V0UHJvdG90eXBlT2Y7XG4gIHZhciBOYXRpdmVJdGVyYXRvclByb3RvdHlwZSA9IGdldFByb3RvICYmIGdldFByb3RvKGdldFByb3RvKHZhbHVlcyhbXSkpKTtcbiAgaWYgKE5hdGl2ZUl0ZXJhdG9yUHJvdG90eXBlICYmXG4gICAgICBOYXRpdmVJdGVyYXRvclByb3RvdHlwZSAhPT0gT3AgJiZcbiAgICAgIGhhc093bi5jYWxsKE5hdGl2ZUl0ZXJhdG9yUHJvdG90eXBlLCBpdGVyYXRvclN5bWJvbCkpIHtcbiAgICAvLyBUaGlzIGVudmlyb25tZW50IGhhcyBhIG5hdGl2ZSAlSXRlcmF0b3JQcm90b3R5cGUlOyB1c2UgaXQgaW5zdGVhZFxuICAgIC8vIG9mIHRoZSBwb2x5ZmlsbC5cbiAgICBJdGVyYXRvclByb3RvdHlwZSA9IE5hdGl2ZUl0ZXJhdG9yUHJvdG90eXBlO1xuICB9XG5cbiAgdmFyIEdwID0gR2VuZXJhdG9yRnVuY3Rpb25Qcm90b3R5cGUucHJvdG90eXBlID1cbiAgICBHZW5lcmF0b3IucHJvdG90eXBlID0gT2JqZWN0LmNyZWF0ZShJdGVyYXRvclByb3RvdHlwZSk7XG4gIEdlbmVyYXRvckZ1bmN0aW9uLnByb3RvdHlwZSA9IEdwLmNvbnN0cnVjdG9yID0gR2VuZXJhdG9yRnVuY3Rpb25Qcm90b3R5cGU7XG4gIEdlbmVyYXRvckZ1bmN0aW9uUHJvdG90eXBlLmNvbnN0cnVjdG9yID0gR2VuZXJhdG9yRnVuY3Rpb247XG4gIEdlbmVyYXRvckZ1bmN0aW9uUHJvdG90eXBlW3RvU3RyaW5nVGFnU3ltYm9sXSA9XG4gICAgR2VuZXJhdG9yRnVuY3Rpb24uZGlzcGxheU5hbWUgPSBcIkdlbmVyYXRvckZ1bmN0aW9uXCI7XG5cbiAgLy8gSGVscGVyIGZvciBkZWZpbmluZyB0aGUgLm5leHQsIC50aHJvdywgYW5kIC5yZXR1cm4gbWV0aG9kcyBvZiB0aGVcbiAgLy8gSXRlcmF0b3IgaW50ZXJmYWNlIGluIHRlcm1zIG9mIGEgc2luZ2xlIC5faW52b2tlIG1ldGhvZC5cbiAgZnVuY3Rpb24gZGVmaW5lSXRlcmF0b3JNZXRob2RzKHByb3RvdHlwZSkge1xuICAgIFtcIm5leHRcIiwgXCJ0aHJvd1wiLCBcInJldHVyblwiXS5mb3JFYWNoKGZ1bmN0aW9uKG1ldGhvZCkge1xuICAgICAgcHJvdG90eXBlW21ldGhvZF0gPSBmdW5jdGlvbihhcmcpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuX2ludm9rZShtZXRob2QsIGFyZyk7XG4gICAgICB9O1xuICAgIH0pO1xuICB9XG5cbiAgcnVudGltZS5pc0dlbmVyYXRvckZ1bmN0aW9uID0gZnVuY3Rpb24oZ2VuRnVuKSB7XG4gICAgdmFyIGN0b3IgPSB0eXBlb2YgZ2VuRnVuID09PSBcImZ1bmN0aW9uXCIgJiYgZ2VuRnVuLmNvbnN0cnVjdG9yO1xuICAgIHJldHVybiBjdG9yXG4gICAgICA/IGN0b3IgPT09IEdlbmVyYXRvckZ1bmN0aW9uIHx8XG4gICAgICAgIC8vIEZvciB0aGUgbmF0aXZlIEdlbmVyYXRvckZ1bmN0aW9uIGNvbnN0cnVjdG9yLCB0aGUgYmVzdCB3ZSBjYW5cbiAgICAgICAgLy8gZG8gaXMgdG8gY2hlY2sgaXRzIC5uYW1lIHByb3BlcnR5LlxuICAgICAgICAoY3Rvci5kaXNwbGF5TmFtZSB8fCBjdG9yLm5hbWUpID09PSBcIkdlbmVyYXRvckZ1bmN0aW9uXCJcbiAgICAgIDogZmFsc2U7XG4gIH07XG5cbiAgcnVudGltZS5tYXJrID0gZnVuY3Rpb24oZ2VuRnVuKSB7XG4gICAgaWYgKE9iamVjdC5zZXRQcm90b3R5cGVPZikge1xuICAgICAgT2JqZWN0LnNldFByb3RvdHlwZU9mKGdlbkZ1biwgR2VuZXJhdG9yRnVuY3Rpb25Qcm90b3R5cGUpO1xuICAgIH0gZWxzZSB7XG4gICAgICBnZW5GdW4uX19wcm90b19fID0gR2VuZXJhdG9yRnVuY3Rpb25Qcm90b3R5cGU7XG4gICAgICBpZiAoISh0b1N0cmluZ1RhZ1N5bWJvbCBpbiBnZW5GdW4pKSB7XG4gICAgICAgIGdlbkZ1blt0b1N0cmluZ1RhZ1N5bWJvbF0gPSBcIkdlbmVyYXRvckZ1bmN0aW9uXCI7XG4gICAgICB9XG4gICAgfVxuICAgIGdlbkZ1bi5wcm90b3R5cGUgPSBPYmplY3QuY3JlYXRlKEdwKTtcbiAgICByZXR1cm4gZ2VuRnVuO1xuICB9O1xuXG4gIC8vIFdpdGhpbiB0aGUgYm9keSBvZiBhbnkgYXN5bmMgZnVuY3Rpb24sIGBhd2FpdCB4YCBpcyB0cmFuc2Zvcm1lZCB0b1xuICAvLyBgeWllbGQgcmVnZW5lcmF0b3JSdW50aW1lLmF3cmFwKHgpYCwgc28gdGhhdCB0aGUgcnVudGltZSBjYW4gdGVzdFxuICAvLyBgaGFzT3duLmNhbGwodmFsdWUsIFwiX19hd2FpdFwiKWAgdG8gZGV0ZXJtaW5lIGlmIHRoZSB5aWVsZGVkIHZhbHVlIGlzXG4gIC8vIG1lYW50IHRvIGJlIGF3YWl0ZWQuXG4gIHJ1bnRpbWUuYXdyYXAgPSBmdW5jdGlvbihhcmcpIHtcbiAgICByZXR1cm4geyBfX2F3YWl0OiBhcmcgfTtcbiAgfTtcblxuICBmdW5jdGlvbiBBc3luY0l0ZXJhdG9yKGdlbmVyYXRvcikge1xuICAgIGZ1bmN0aW9uIGludm9rZShtZXRob2QsIGFyZywgcmVzb2x2ZSwgcmVqZWN0KSB7XG4gICAgICB2YXIgcmVjb3JkID0gdHJ5Q2F0Y2goZ2VuZXJhdG9yW21ldGhvZF0sIGdlbmVyYXRvciwgYXJnKTtcbiAgICAgIGlmIChyZWNvcmQudHlwZSA9PT0gXCJ0aHJvd1wiKSB7XG4gICAgICAgIHJlamVjdChyZWNvcmQuYXJnKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHZhciByZXN1bHQgPSByZWNvcmQuYXJnO1xuICAgICAgICB2YXIgdmFsdWUgPSByZXN1bHQudmFsdWU7XG4gICAgICAgIGlmICh2YWx1ZSAmJlxuICAgICAgICAgICAgdHlwZW9mIHZhbHVlID09PSBcIm9iamVjdFwiICYmXG4gICAgICAgICAgICBoYXNPd24uY2FsbCh2YWx1ZSwgXCJfX2F3YWl0XCIpKSB7XG4gICAgICAgICAgcmV0dXJuIFByb21pc2UucmVzb2x2ZSh2YWx1ZS5fX2F3YWl0KS50aGVuKGZ1bmN0aW9uKHZhbHVlKSB7XG4gICAgICAgICAgICBpbnZva2UoXCJuZXh0XCIsIHZhbHVlLCByZXNvbHZlLCByZWplY3QpO1xuICAgICAgICAgIH0sIGZ1bmN0aW9uKGVycikge1xuICAgICAgICAgICAgaW52b2tlKFwidGhyb3dcIiwgZXJyLCByZXNvbHZlLCByZWplY3QpO1xuICAgICAgICAgIH0pO1xuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIFByb21pc2UucmVzb2x2ZSh2YWx1ZSkudGhlbihmdW5jdGlvbih1bndyYXBwZWQpIHtcbiAgICAgICAgICAvLyBXaGVuIGEgeWllbGRlZCBQcm9taXNlIGlzIHJlc29sdmVkLCBpdHMgZmluYWwgdmFsdWUgYmVjb21lc1xuICAgICAgICAgIC8vIHRoZSAudmFsdWUgb2YgdGhlIFByb21pc2U8e3ZhbHVlLGRvbmV9PiByZXN1bHQgZm9yIHRoZVxuICAgICAgICAgIC8vIGN1cnJlbnQgaXRlcmF0aW9uLiBJZiB0aGUgUHJvbWlzZSBpcyByZWplY3RlZCwgaG93ZXZlciwgdGhlXG4gICAgICAgICAgLy8gcmVzdWx0IGZvciB0aGlzIGl0ZXJhdGlvbiB3aWxsIGJlIHJlamVjdGVkIHdpdGggdGhlIHNhbWVcbiAgICAgICAgICAvLyByZWFzb24uIE5vdGUgdGhhdCByZWplY3Rpb25zIG9mIHlpZWxkZWQgUHJvbWlzZXMgYXJlIG5vdFxuICAgICAgICAgIC8vIHRocm93biBiYWNrIGludG8gdGhlIGdlbmVyYXRvciBmdW5jdGlvbiwgYXMgaXMgdGhlIGNhc2VcbiAgICAgICAgICAvLyB3aGVuIGFuIGF3YWl0ZWQgUHJvbWlzZSBpcyByZWplY3RlZC4gVGhpcyBkaWZmZXJlbmNlIGluXG4gICAgICAgICAgLy8gYmVoYXZpb3IgYmV0d2VlbiB5aWVsZCBhbmQgYXdhaXQgaXMgaW1wb3J0YW50LCBiZWNhdXNlIGl0XG4gICAgICAgICAgLy8gYWxsb3dzIHRoZSBjb25zdW1lciB0byBkZWNpZGUgd2hhdCB0byBkbyB3aXRoIHRoZSB5aWVsZGVkXG4gICAgICAgICAgLy8gcmVqZWN0aW9uIChzd2FsbG93IGl0IGFuZCBjb250aW51ZSwgbWFudWFsbHkgLnRocm93IGl0IGJhY2tcbiAgICAgICAgICAvLyBpbnRvIHRoZSBnZW5lcmF0b3IsIGFiYW5kb24gaXRlcmF0aW9uLCB3aGF0ZXZlcikuIFdpdGhcbiAgICAgICAgICAvLyBhd2FpdCwgYnkgY29udHJhc3QsIHRoZXJlIGlzIG5vIG9wcG9ydHVuaXR5IHRvIGV4YW1pbmUgdGhlXG4gICAgICAgICAgLy8gcmVqZWN0aW9uIHJlYXNvbiBvdXRzaWRlIHRoZSBnZW5lcmF0b3IgZnVuY3Rpb24sIHNvIHRoZVxuICAgICAgICAgIC8vIG9ubHkgb3B0aW9uIGlzIHRvIHRocm93IGl0IGZyb20gdGhlIGF3YWl0IGV4cHJlc3Npb24sIGFuZFxuICAgICAgICAgIC8vIGxldCB0aGUgZ2VuZXJhdG9yIGZ1bmN0aW9uIGhhbmRsZSB0aGUgZXhjZXB0aW9uLlxuICAgICAgICAgIHJlc3VsdC52YWx1ZSA9IHVud3JhcHBlZDtcbiAgICAgICAgICByZXNvbHZlKHJlc3VsdCk7XG4gICAgICAgIH0sIHJlamVjdCk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgdmFyIHByZXZpb3VzUHJvbWlzZTtcblxuICAgIGZ1bmN0aW9uIGVucXVldWUobWV0aG9kLCBhcmcpIHtcbiAgICAgIGZ1bmN0aW9uIGNhbGxJbnZva2VXaXRoTWV0aG9kQW5kQXJnKCkge1xuICAgICAgICByZXR1cm4gbmV3IFByb21pc2UoZnVuY3Rpb24ocmVzb2x2ZSwgcmVqZWN0KSB7XG4gICAgICAgICAgaW52b2tlKG1ldGhvZCwgYXJnLCByZXNvbHZlLCByZWplY3QpO1xuICAgICAgICB9KTtcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIHByZXZpb3VzUHJvbWlzZSA9XG4gICAgICAgIC8vIElmIGVucXVldWUgaGFzIGJlZW4gY2FsbGVkIGJlZm9yZSwgdGhlbiB3ZSB3YW50IHRvIHdhaXQgdW50aWxcbiAgICAgICAgLy8gYWxsIHByZXZpb3VzIFByb21pc2VzIGhhdmUgYmVlbiByZXNvbHZlZCBiZWZvcmUgY2FsbGluZyBpbnZva2UsXG4gICAgICAgIC8vIHNvIHRoYXQgcmVzdWx0cyBhcmUgYWx3YXlzIGRlbGl2ZXJlZCBpbiB0aGUgY29ycmVjdCBvcmRlci4gSWZcbiAgICAgICAgLy8gZW5xdWV1ZSBoYXMgbm90IGJlZW4gY2FsbGVkIGJlZm9yZSwgdGhlbiBpdCBpcyBpbXBvcnRhbnQgdG9cbiAgICAgICAgLy8gY2FsbCBpbnZva2UgaW1tZWRpYXRlbHksIHdpdGhvdXQgd2FpdGluZyBvbiBhIGNhbGxiYWNrIHRvIGZpcmUsXG4gICAgICAgIC8vIHNvIHRoYXQgdGhlIGFzeW5jIGdlbmVyYXRvciBmdW5jdGlvbiBoYXMgdGhlIG9wcG9ydHVuaXR5IHRvIGRvXG4gICAgICAgIC8vIGFueSBuZWNlc3Nhcnkgc2V0dXAgaW4gYSBwcmVkaWN0YWJsZSB3YXkuIFRoaXMgcHJlZGljdGFiaWxpdHlcbiAgICAgICAgLy8gaXMgd2h5IHRoZSBQcm9taXNlIGNvbnN0cnVjdG9yIHN5bmNocm9ub3VzbHkgaW52b2tlcyBpdHNcbiAgICAgICAgLy8gZXhlY3V0b3IgY2FsbGJhY2ssIGFuZCB3aHkgYXN5bmMgZnVuY3Rpb25zIHN5bmNocm9ub3VzbHlcbiAgICAgICAgLy8gZXhlY3V0ZSBjb2RlIGJlZm9yZSB0aGUgZmlyc3QgYXdhaXQuIFNpbmNlIHdlIGltcGxlbWVudCBzaW1wbGVcbiAgICAgICAgLy8gYXN5bmMgZnVuY3Rpb25zIGluIHRlcm1zIG9mIGFzeW5jIGdlbmVyYXRvcnMsIGl0IGlzIGVzcGVjaWFsbHlcbiAgICAgICAgLy8gaW1wb3J0YW50IHRvIGdldCB0aGlzIHJpZ2h0LCBldmVuIHRob3VnaCBpdCByZXF1aXJlcyBjYXJlLlxuICAgICAgICBwcmV2aW91c1Byb21pc2UgPyBwcmV2aW91c1Byb21pc2UudGhlbihcbiAgICAgICAgICBjYWxsSW52b2tlV2l0aE1ldGhvZEFuZEFyZyxcbiAgICAgICAgICAvLyBBdm9pZCBwcm9wYWdhdGluZyBmYWlsdXJlcyB0byBQcm9taXNlcyByZXR1cm5lZCBieSBsYXRlclxuICAgICAgICAgIC8vIGludm9jYXRpb25zIG9mIHRoZSBpdGVyYXRvci5cbiAgICAgICAgICBjYWxsSW52b2tlV2l0aE1ldGhvZEFuZEFyZ1xuICAgICAgICApIDogY2FsbEludm9rZVdpdGhNZXRob2RBbmRBcmcoKTtcbiAgICB9XG5cbiAgICAvLyBEZWZpbmUgdGhlIHVuaWZpZWQgaGVscGVyIG1ldGhvZCB0aGF0IGlzIHVzZWQgdG8gaW1wbGVtZW50IC5uZXh0LFxuICAgIC8vIC50aHJvdywgYW5kIC5yZXR1cm4gKHNlZSBkZWZpbmVJdGVyYXRvck1ldGhvZHMpLlxuICAgIHRoaXMuX2ludm9rZSA9IGVucXVldWU7XG4gIH1cblxuICBkZWZpbmVJdGVyYXRvck1ldGhvZHMoQXN5bmNJdGVyYXRvci5wcm90b3R5cGUpO1xuICBBc3luY0l0ZXJhdG9yLnByb3RvdHlwZVthc3luY0l0ZXJhdG9yU3ltYm9sXSA9IGZ1bmN0aW9uICgpIHtcbiAgICByZXR1cm4gdGhpcztcbiAgfTtcbiAgcnVudGltZS5Bc3luY0l0ZXJhdG9yID0gQXN5bmNJdGVyYXRvcjtcblxuICAvLyBOb3RlIHRoYXQgc2ltcGxlIGFzeW5jIGZ1bmN0aW9ucyBhcmUgaW1wbGVtZW50ZWQgb24gdG9wIG9mXG4gIC8vIEFzeW5jSXRlcmF0b3Igb2JqZWN0czsgdGhleSBqdXN0IHJldHVybiBhIFByb21pc2UgZm9yIHRoZSB2YWx1ZSBvZlxuICAvLyB0aGUgZmluYWwgcmVzdWx0IHByb2R1Y2VkIGJ5IHRoZSBpdGVyYXRvci5cbiAgcnVudGltZS5hc3luYyA9IGZ1bmN0aW9uKGlubmVyRm4sIG91dGVyRm4sIHNlbGYsIHRyeUxvY3NMaXN0KSB7XG4gICAgdmFyIGl0ZXIgPSBuZXcgQXN5bmNJdGVyYXRvcihcbiAgICAgIHdyYXAoaW5uZXJGbiwgb3V0ZXJGbiwgc2VsZiwgdHJ5TG9jc0xpc3QpXG4gICAgKTtcblxuICAgIHJldHVybiBydW50aW1lLmlzR2VuZXJhdG9yRnVuY3Rpb24ob3V0ZXJGbilcbiAgICAgID8gaXRlciAvLyBJZiBvdXRlckZuIGlzIGEgZ2VuZXJhdG9yLCByZXR1cm4gdGhlIGZ1bGwgaXRlcmF0b3IuXG4gICAgICA6IGl0ZXIubmV4dCgpLnRoZW4oZnVuY3Rpb24ocmVzdWx0KSB7XG4gICAgICAgICAgcmV0dXJuIHJlc3VsdC5kb25lID8gcmVzdWx0LnZhbHVlIDogaXRlci5uZXh0KCk7XG4gICAgICAgIH0pO1xuICB9O1xuXG4gIGZ1bmN0aW9uIG1ha2VJbnZva2VNZXRob2QoaW5uZXJGbiwgc2VsZiwgY29udGV4dCkge1xuICAgIHZhciBzdGF0ZSA9IEdlblN0YXRlU3VzcGVuZGVkU3RhcnQ7XG5cbiAgICByZXR1cm4gZnVuY3Rpb24gaW52b2tlKG1ldGhvZCwgYXJnKSB7XG4gICAgICBpZiAoc3RhdGUgPT09IEdlblN0YXRlRXhlY3V0aW5nKSB7XG4gICAgICAgIHRocm93IG5ldyBFcnJvcihcIkdlbmVyYXRvciBpcyBhbHJlYWR5IHJ1bm5pbmdcIik7XG4gICAgICB9XG5cbiAgICAgIGlmIChzdGF0ZSA9PT0gR2VuU3RhdGVDb21wbGV0ZWQpIHtcbiAgICAgICAgaWYgKG1ldGhvZCA9PT0gXCJ0aHJvd1wiKSB7XG4gICAgICAgICAgdGhyb3cgYXJnO1xuICAgICAgICB9XG5cbiAgICAgICAgLy8gQmUgZm9yZ2l2aW5nLCBwZXIgMjUuMy4zLjMuMyBvZiB0aGUgc3BlYzpcbiAgICAgICAgLy8gaHR0cHM6Ly9wZW9wbGUubW96aWxsYS5vcmcvfmpvcmVuZG9yZmYvZXM2LWRyYWZ0Lmh0bWwjc2VjLWdlbmVyYXRvcnJlc3VtZVxuICAgICAgICByZXR1cm4gZG9uZVJlc3VsdCgpO1xuICAgICAgfVxuXG4gICAgICBjb250ZXh0Lm1ldGhvZCA9IG1ldGhvZDtcbiAgICAgIGNvbnRleHQuYXJnID0gYXJnO1xuXG4gICAgICB3aGlsZSAodHJ1ZSkge1xuICAgICAgICB2YXIgZGVsZWdhdGUgPSBjb250ZXh0LmRlbGVnYXRlO1xuICAgICAgICBpZiAoZGVsZWdhdGUpIHtcbiAgICAgICAgICB2YXIgZGVsZWdhdGVSZXN1bHQgPSBtYXliZUludm9rZURlbGVnYXRlKGRlbGVnYXRlLCBjb250ZXh0KTtcbiAgICAgICAgICBpZiAoZGVsZWdhdGVSZXN1bHQpIHtcbiAgICAgICAgICAgIGlmIChkZWxlZ2F0ZVJlc3VsdCA9PT0gQ29udGludWVTZW50aW5lbCkgY29udGludWU7XG4gICAgICAgICAgICByZXR1cm4gZGVsZWdhdGVSZXN1bHQ7XG4gICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgaWYgKGNvbnRleHQubWV0aG9kID09PSBcIm5leHRcIikge1xuICAgICAgICAgIC8vIFNldHRpbmcgY29udGV4dC5fc2VudCBmb3IgbGVnYWN5IHN1cHBvcnQgb2YgQmFiZWwnc1xuICAgICAgICAgIC8vIGZ1bmN0aW9uLnNlbnQgaW1wbGVtZW50YXRpb24uXG4gICAgICAgICAgY29udGV4dC5zZW50ID0gY29udGV4dC5fc2VudCA9IGNvbnRleHQuYXJnO1xuXG4gICAgICAgIH0gZWxzZSBpZiAoY29udGV4dC5tZXRob2QgPT09IFwidGhyb3dcIikge1xuICAgICAgICAgIGlmIChzdGF0ZSA9PT0gR2VuU3RhdGVTdXNwZW5kZWRTdGFydCkge1xuICAgICAgICAgICAgc3RhdGUgPSBHZW5TdGF0ZUNvbXBsZXRlZDtcbiAgICAgICAgICAgIHRocm93IGNvbnRleHQuYXJnO1xuICAgICAgICAgIH1cblxuICAgICAgICAgIGNvbnRleHQuZGlzcGF0Y2hFeGNlcHRpb24oY29udGV4dC5hcmcpO1xuXG4gICAgICAgIH0gZWxzZSBpZiAoY29udGV4dC5tZXRob2QgPT09IFwicmV0dXJuXCIpIHtcbiAgICAgICAgICBjb250ZXh0LmFicnVwdChcInJldHVyblwiLCBjb250ZXh0LmFyZyk7XG4gICAgICAgIH1cblxuICAgICAgICBzdGF0ZSA9IEdlblN0YXRlRXhlY3V0aW5nO1xuXG4gICAgICAgIHZhciByZWNvcmQgPSB0cnlDYXRjaChpbm5lckZuLCBzZWxmLCBjb250ZXh0KTtcbiAgICAgICAgaWYgKHJlY29yZC50eXBlID09PSBcIm5vcm1hbFwiKSB7XG4gICAgICAgICAgLy8gSWYgYW4gZXhjZXB0aW9uIGlzIHRocm93biBmcm9tIGlubmVyRm4sIHdlIGxlYXZlIHN0YXRlID09PVxuICAgICAgICAgIC8vIEdlblN0YXRlRXhlY3V0aW5nIGFuZCBsb29wIGJhY2sgZm9yIGFub3RoZXIgaW52b2NhdGlvbi5cbiAgICAgICAgICBzdGF0ZSA9IGNvbnRleHQuZG9uZVxuICAgICAgICAgICAgPyBHZW5TdGF0ZUNvbXBsZXRlZFxuICAgICAgICAgICAgOiBHZW5TdGF0ZVN1c3BlbmRlZFlpZWxkO1xuXG4gICAgICAgICAgaWYgKHJlY29yZC5hcmcgPT09IENvbnRpbnVlU2VudGluZWwpIHtcbiAgICAgICAgICAgIGNvbnRpbnVlO1xuICAgICAgICAgIH1cblxuICAgICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICB2YWx1ZTogcmVjb3JkLmFyZyxcbiAgICAgICAgICAgIGRvbmU6IGNvbnRleHQuZG9uZVxuICAgICAgICAgIH07XG5cbiAgICAgICAgfSBlbHNlIGlmIChyZWNvcmQudHlwZSA9PT0gXCJ0aHJvd1wiKSB7XG4gICAgICAgICAgc3RhdGUgPSBHZW5TdGF0ZUNvbXBsZXRlZDtcbiAgICAgICAgICAvLyBEaXNwYXRjaCB0aGUgZXhjZXB0aW9uIGJ5IGxvb3BpbmcgYmFjayBhcm91bmQgdG8gdGhlXG4gICAgICAgICAgLy8gY29udGV4dC5kaXNwYXRjaEV4Y2VwdGlvbihjb250ZXh0LmFyZykgY2FsbCBhYm92ZS5cbiAgICAgICAgICBjb250ZXh0Lm1ldGhvZCA9IFwidGhyb3dcIjtcbiAgICAgICAgICBjb250ZXh0LmFyZyA9IHJlY29yZC5hcmc7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9O1xuICB9XG5cbiAgLy8gQ2FsbCBkZWxlZ2F0ZS5pdGVyYXRvcltjb250ZXh0Lm1ldGhvZF0oY29udGV4dC5hcmcpIGFuZCBoYW5kbGUgdGhlXG4gIC8vIHJlc3VsdCwgZWl0aGVyIGJ5IHJldHVybmluZyBhIHsgdmFsdWUsIGRvbmUgfSByZXN1bHQgZnJvbSB0aGVcbiAgLy8gZGVsZWdhdGUgaXRlcmF0b3IsIG9yIGJ5IG1vZGlmeWluZyBjb250ZXh0Lm1ldGhvZCBhbmQgY29udGV4dC5hcmcsXG4gIC8vIHNldHRpbmcgY29udGV4dC5kZWxlZ2F0ZSB0byBudWxsLCBhbmQgcmV0dXJuaW5nIHRoZSBDb250aW51ZVNlbnRpbmVsLlxuICBmdW5jdGlvbiBtYXliZUludm9rZURlbGVnYXRlKGRlbGVnYXRlLCBjb250ZXh0KSB7XG4gICAgdmFyIG1ldGhvZCA9IGRlbGVnYXRlLml0ZXJhdG9yW2NvbnRleHQubWV0aG9kXTtcbiAgICBpZiAobWV0aG9kID09PSB1bmRlZmluZWQpIHtcbiAgICAgIC8vIEEgLnRocm93IG9yIC5yZXR1cm4gd2hlbiB0aGUgZGVsZWdhdGUgaXRlcmF0b3IgaGFzIG5vIC50aHJvd1xuICAgICAgLy8gbWV0aG9kIGFsd2F5cyB0ZXJtaW5hdGVzIHRoZSB5aWVsZCogbG9vcC5cbiAgICAgIGNvbnRleHQuZGVsZWdhdGUgPSBudWxsO1xuXG4gICAgICBpZiAoY29udGV4dC5tZXRob2QgPT09IFwidGhyb3dcIikge1xuICAgICAgICBpZiAoZGVsZWdhdGUuaXRlcmF0b3IucmV0dXJuKSB7XG4gICAgICAgICAgLy8gSWYgdGhlIGRlbGVnYXRlIGl0ZXJhdG9yIGhhcyBhIHJldHVybiBtZXRob2QsIGdpdmUgaXQgYVxuICAgICAgICAgIC8vIGNoYW5jZSB0byBjbGVhbiB1cC5cbiAgICAgICAgICBjb250ZXh0Lm1ldGhvZCA9IFwicmV0dXJuXCI7XG4gICAgICAgICAgY29udGV4dC5hcmcgPSB1bmRlZmluZWQ7XG4gICAgICAgICAgbWF5YmVJbnZva2VEZWxlZ2F0ZShkZWxlZ2F0ZSwgY29udGV4dCk7XG5cbiAgICAgICAgICBpZiAoY29udGV4dC5tZXRob2QgPT09IFwidGhyb3dcIikge1xuICAgICAgICAgICAgLy8gSWYgbWF5YmVJbnZva2VEZWxlZ2F0ZShjb250ZXh0KSBjaGFuZ2VkIGNvbnRleHQubWV0aG9kIGZyb21cbiAgICAgICAgICAgIC8vIFwicmV0dXJuXCIgdG8gXCJ0aHJvd1wiLCBsZXQgdGhhdCBvdmVycmlkZSB0aGUgVHlwZUVycm9yIGJlbG93LlxuICAgICAgICAgICAgcmV0dXJuIENvbnRpbnVlU2VudGluZWw7XG4gICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgY29udGV4dC5tZXRob2QgPSBcInRocm93XCI7XG4gICAgICAgIGNvbnRleHQuYXJnID0gbmV3IFR5cGVFcnJvcihcbiAgICAgICAgICBcIlRoZSBpdGVyYXRvciBkb2VzIG5vdCBwcm92aWRlIGEgJ3Rocm93JyBtZXRob2RcIik7XG4gICAgICB9XG5cbiAgICAgIHJldHVybiBDb250aW51ZVNlbnRpbmVsO1xuICAgIH1cblxuICAgIHZhciByZWNvcmQgPSB0cnlDYXRjaChtZXRob2QsIGRlbGVnYXRlLml0ZXJhdG9yLCBjb250ZXh0LmFyZyk7XG5cbiAgICBpZiAocmVjb3JkLnR5cGUgPT09IFwidGhyb3dcIikge1xuICAgICAgY29udGV4dC5tZXRob2QgPSBcInRocm93XCI7XG4gICAgICBjb250ZXh0LmFyZyA9IHJlY29yZC5hcmc7XG4gICAgICBjb250ZXh0LmRlbGVnYXRlID0gbnVsbDtcbiAgICAgIHJldHVybiBDb250aW51ZVNlbnRpbmVsO1xuICAgIH1cblxuICAgIHZhciBpbmZvID0gcmVjb3JkLmFyZztcblxuICAgIGlmICghIGluZm8pIHtcbiAgICAgIGNvbnRleHQubWV0aG9kID0gXCJ0aHJvd1wiO1xuICAgICAgY29udGV4dC5hcmcgPSBuZXcgVHlwZUVycm9yKFwiaXRlcmF0b3IgcmVzdWx0IGlzIG5vdCBhbiBvYmplY3RcIik7XG4gICAgICBjb250ZXh0LmRlbGVnYXRlID0gbnVsbDtcbiAgICAgIHJldHVybiBDb250aW51ZVNlbnRpbmVsO1xuICAgIH1cblxuICAgIGlmIChpbmZvLmRvbmUpIHtcbiAgICAgIC8vIEFzc2lnbiB0aGUgcmVzdWx0IG9mIHRoZSBmaW5pc2hlZCBkZWxlZ2F0ZSB0byB0aGUgdGVtcG9yYXJ5XG4gICAgICAvLyB2YXJpYWJsZSBzcGVjaWZpZWQgYnkgZGVsZWdhdGUucmVzdWx0TmFtZSAoc2VlIGRlbGVnYXRlWWllbGQpLlxuICAgICAgY29udGV4dFtkZWxlZ2F0ZS5yZXN1bHROYW1lXSA9IGluZm8udmFsdWU7XG5cbiAgICAgIC8vIFJlc3VtZSBleGVjdXRpb24gYXQgdGhlIGRlc2lyZWQgbG9jYXRpb24gKHNlZSBkZWxlZ2F0ZVlpZWxkKS5cbiAgICAgIGNvbnRleHQubmV4dCA9IGRlbGVnYXRlLm5leHRMb2M7XG5cbiAgICAgIC8vIElmIGNvbnRleHQubWV0aG9kIHdhcyBcInRocm93XCIgYnV0IHRoZSBkZWxlZ2F0ZSBoYW5kbGVkIHRoZVxuICAgICAgLy8gZXhjZXB0aW9uLCBsZXQgdGhlIG91dGVyIGdlbmVyYXRvciBwcm9jZWVkIG5vcm1hbGx5LiBJZlxuICAgICAgLy8gY29udGV4dC5tZXRob2Qgd2FzIFwibmV4dFwiLCBmb3JnZXQgY29udGV4dC5hcmcgc2luY2UgaXQgaGFzIGJlZW5cbiAgICAgIC8vIFwiY29uc3VtZWRcIiBieSB0aGUgZGVsZWdhdGUgaXRlcmF0b3IuIElmIGNvbnRleHQubWV0aG9kIHdhc1xuICAgICAgLy8gXCJyZXR1cm5cIiwgYWxsb3cgdGhlIG9yaWdpbmFsIC5yZXR1cm4gY2FsbCB0byBjb250aW51ZSBpbiB0aGVcbiAgICAgIC8vIG91dGVyIGdlbmVyYXRvci5cbiAgICAgIGlmIChjb250ZXh0Lm1ldGhvZCAhPT0gXCJyZXR1cm5cIikge1xuICAgICAgICBjb250ZXh0Lm1ldGhvZCA9IFwibmV4dFwiO1xuICAgICAgICBjb250ZXh0LmFyZyA9IHVuZGVmaW5lZDtcbiAgICAgIH1cblxuICAgIH0gZWxzZSB7XG4gICAgICAvLyBSZS15aWVsZCB0aGUgcmVzdWx0IHJldHVybmVkIGJ5IHRoZSBkZWxlZ2F0ZSBtZXRob2QuXG4gICAgICByZXR1cm4gaW5mbztcbiAgICB9XG5cbiAgICAvLyBUaGUgZGVsZWdhdGUgaXRlcmF0b3IgaXMgZmluaXNoZWQsIHNvIGZvcmdldCBpdCBhbmQgY29udGludWUgd2l0aFxuICAgIC8vIHRoZSBvdXRlciBnZW5lcmF0b3IuXG4gICAgY29udGV4dC5kZWxlZ2F0ZSA9IG51bGw7XG4gICAgcmV0dXJuIENvbnRpbnVlU2VudGluZWw7XG4gIH1cblxuICAvLyBEZWZpbmUgR2VuZXJhdG9yLnByb3RvdHlwZS57bmV4dCx0aHJvdyxyZXR1cm59IGluIHRlcm1zIG9mIHRoZVxuICAvLyB1bmlmaWVkIC5faW52b2tlIGhlbHBlciBtZXRob2QuXG4gIGRlZmluZUl0ZXJhdG9yTWV0aG9kcyhHcCk7XG5cbiAgR3BbdG9TdHJpbmdUYWdTeW1ib2xdID0gXCJHZW5lcmF0b3JcIjtcblxuICAvLyBBIEdlbmVyYXRvciBzaG91bGQgYWx3YXlzIHJldHVybiBpdHNlbGYgYXMgdGhlIGl0ZXJhdG9yIG9iamVjdCB3aGVuIHRoZVxuICAvLyBAQGl0ZXJhdG9yIGZ1bmN0aW9uIGlzIGNhbGxlZCBvbiBpdC4gU29tZSBicm93c2VycycgaW1wbGVtZW50YXRpb25zIG9mIHRoZVxuICAvLyBpdGVyYXRvciBwcm90b3R5cGUgY2hhaW4gaW5jb3JyZWN0bHkgaW1wbGVtZW50IHRoaXMsIGNhdXNpbmcgdGhlIEdlbmVyYXRvclxuICAvLyBvYmplY3QgdG8gbm90IGJlIHJldHVybmVkIGZyb20gdGhpcyBjYWxsLiBUaGlzIGVuc3VyZXMgdGhhdCBkb2Vzbid0IGhhcHBlbi5cbiAgLy8gU2VlIGh0dHBzOi8vZ2l0aHViLmNvbS9mYWNlYm9vay9yZWdlbmVyYXRvci9pc3N1ZXMvMjc0IGZvciBtb3JlIGRldGFpbHMuXG4gIEdwW2l0ZXJhdG9yU3ltYm9sXSA9IGZ1bmN0aW9uKCkge1xuICAgIHJldHVybiB0aGlzO1xuICB9O1xuXG4gIEdwLnRvU3RyaW5nID0gZnVuY3Rpb24oKSB7XG4gICAgcmV0dXJuIFwiW29iamVjdCBHZW5lcmF0b3JdXCI7XG4gIH07XG5cbiAgZnVuY3Rpb24gcHVzaFRyeUVudHJ5KGxvY3MpIHtcbiAgICB2YXIgZW50cnkgPSB7IHRyeUxvYzogbG9jc1swXSB9O1xuXG4gICAgaWYgKDEgaW4gbG9jcykge1xuICAgICAgZW50cnkuY2F0Y2hMb2MgPSBsb2NzWzFdO1xuICAgIH1cblxuICAgIGlmICgyIGluIGxvY3MpIHtcbiAgICAgIGVudHJ5LmZpbmFsbHlMb2MgPSBsb2NzWzJdO1xuICAgICAgZW50cnkuYWZ0ZXJMb2MgPSBsb2NzWzNdO1xuICAgIH1cblxuICAgIHRoaXMudHJ5RW50cmllcy5wdXNoKGVudHJ5KTtcbiAgfVxuXG4gIGZ1bmN0aW9uIHJlc2V0VHJ5RW50cnkoZW50cnkpIHtcbiAgICB2YXIgcmVjb3JkID0gZW50cnkuY29tcGxldGlvbiB8fCB7fTtcbiAgICByZWNvcmQudHlwZSA9IFwibm9ybWFsXCI7XG4gICAgZGVsZXRlIHJlY29yZC5hcmc7XG4gICAgZW50cnkuY29tcGxldGlvbiA9IHJlY29yZDtcbiAgfVxuXG4gIGZ1bmN0aW9uIENvbnRleHQodHJ5TG9jc0xpc3QpIHtcbiAgICAvLyBUaGUgcm9vdCBlbnRyeSBvYmplY3QgKGVmZmVjdGl2ZWx5IGEgdHJ5IHN0YXRlbWVudCB3aXRob3V0IGEgY2F0Y2hcbiAgICAvLyBvciBhIGZpbmFsbHkgYmxvY2spIGdpdmVzIHVzIGEgcGxhY2UgdG8gc3RvcmUgdmFsdWVzIHRocm93biBmcm9tXG4gICAgLy8gbG9jYXRpb25zIHdoZXJlIHRoZXJlIGlzIG5vIGVuY2xvc2luZyB0cnkgc3RhdGVtZW50LlxuICAgIHRoaXMudHJ5RW50cmllcyA9IFt7IHRyeUxvYzogXCJyb290XCIgfV07XG4gICAgdHJ5TG9jc0xpc3QuZm9yRWFjaChwdXNoVHJ5RW50cnksIHRoaXMpO1xuICAgIHRoaXMucmVzZXQodHJ1ZSk7XG4gIH1cblxuICBydW50aW1lLmtleXMgPSBmdW5jdGlvbihvYmplY3QpIHtcbiAgICB2YXIga2V5cyA9IFtdO1xuICAgIGZvciAodmFyIGtleSBpbiBvYmplY3QpIHtcbiAgICAgIGtleXMucHVzaChrZXkpO1xuICAgIH1cbiAgICBrZXlzLnJldmVyc2UoKTtcblxuICAgIC8vIFJhdGhlciB0aGFuIHJldHVybmluZyBhbiBvYmplY3Qgd2l0aCBhIG5leHQgbWV0aG9kLCB3ZSBrZWVwXG4gICAgLy8gdGhpbmdzIHNpbXBsZSBhbmQgcmV0dXJuIHRoZSBuZXh0IGZ1bmN0aW9uIGl0c2VsZi5cbiAgICByZXR1cm4gZnVuY3Rpb24gbmV4dCgpIHtcbiAgICAgIHdoaWxlIChrZXlzLmxlbmd0aCkge1xuICAgICAgICB2YXIga2V5ID0ga2V5cy5wb3AoKTtcbiAgICAgICAgaWYgKGtleSBpbiBvYmplY3QpIHtcbiAgICAgICAgICBuZXh0LnZhbHVlID0ga2V5O1xuICAgICAgICAgIG5leHQuZG9uZSA9IGZhbHNlO1xuICAgICAgICAgIHJldHVybiBuZXh0O1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIC8vIFRvIGF2b2lkIGNyZWF0aW5nIGFuIGFkZGl0aW9uYWwgb2JqZWN0LCB3ZSBqdXN0IGhhbmcgdGhlIC52YWx1ZVxuICAgICAgLy8gYW5kIC5kb25lIHByb3BlcnRpZXMgb2ZmIHRoZSBuZXh0IGZ1bmN0aW9uIG9iamVjdCBpdHNlbGYuIFRoaXNcbiAgICAgIC8vIGFsc28gZW5zdXJlcyB0aGF0IHRoZSBtaW5pZmllciB3aWxsIG5vdCBhbm9ueW1pemUgdGhlIGZ1bmN0aW9uLlxuICAgICAgbmV4dC5kb25lID0gdHJ1ZTtcbiAgICAgIHJldHVybiBuZXh0O1xuICAgIH07XG4gIH07XG5cbiAgZnVuY3Rpb24gdmFsdWVzKGl0ZXJhYmxlKSB7XG4gICAgaWYgKGl0ZXJhYmxlKSB7XG4gICAgICB2YXIgaXRlcmF0b3JNZXRob2QgPSBpdGVyYWJsZVtpdGVyYXRvclN5bWJvbF07XG4gICAgICBpZiAoaXRlcmF0b3JNZXRob2QpIHtcbiAgICAgICAgcmV0dXJuIGl0ZXJhdG9yTWV0aG9kLmNhbGwoaXRlcmFibGUpO1xuICAgICAgfVxuXG4gICAgICBpZiAodHlwZW9mIGl0ZXJhYmxlLm5leHQgPT09IFwiZnVuY3Rpb25cIikge1xuICAgICAgICByZXR1cm4gaXRlcmFibGU7XG4gICAgICB9XG5cbiAgICAgIGlmICghaXNOYU4oaXRlcmFibGUubGVuZ3RoKSkge1xuICAgICAgICB2YXIgaSA9IC0xLCBuZXh0ID0gZnVuY3Rpb24gbmV4dCgpIHtcbiAgICAgICAgICB3aGlsZSAoKytpIDwgaXRlcmFibGUubGVuZ3RoKSB7XG4gICAgICAgICAgICBpZiAoaGFzT3duLmNhbGwoaXRlcmFibGUsIGkpKSB7XG4gICAgICAgICAgICAgIG5leHQudmFsdWUgPSBpdGVyYWJsZVtpXTtcbiAgICAgICAgICAgICAgbmV4dC5kb25lID0gZmFsc2U7XG4gICAgICAgICAgICAgIHJldHVybiBuZXh0O1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH1cblxuICAgICAgICAgIG5leHQudmFsdWUgPSB1bmRlZmluZWQ7XG4gICAgICAgICAgbmV4dC5kb25lID0gdHJ1ZTtcblxuICAgICAgICAgIHJldHVybiBuZXh0O1xuICAgICAgICB9O1xuXG4gICAgICAgIHJldHVybiBuZXh0Lm5leHQgPSBuZXh0O1xuICAgICAgfVxuICAgIH1cblxuICAgIC8vIFJldHVybiBhbiBpdGVyYXRvciB3aXRoIG5vIHZhbHVlcy5cbiAgICByZXR1cm4geyBuZXh0OiBkb25lUmVzdWx0IH07XG4gIH1cbiAgcnVudGltZS52YWx1ZXMgPSB2YWx1ZXM7XG5cbiAgZnVuY3Rpb24gZG9uZVJlc3VsdCgpIHtcbiAgICByZXR1cm4geyB2YWx1ZTogdW5kZWZpbmVkLCBkb25lOiB0cnVlIH07XG4gIH1cblxuICBDb250ZXh0LnByb3RvdHlwZSA9IHtcbiAgICBjb25zdHJ1Y3RvcjogQ29udGV4dCxcblxuICAgIHJlc2V0OiBmdW5jdGlvbihza2lwVGVtcFJlc2V0KSB7XG4gICAgICB0aGlzLnByZXYgPSAwO1xuICAgICAgdGhpcy5uZXh0ID0gMDtcbiAgICAgIC8vIFJlc2V0dGluZyBjb250ZXh0Ll9zZW50IGZvciBsZWdhY3kgc3VwcG9ydCBvZiBCYWJlbCdzXG4gICAgICAvLyBmdW5jdGlvbi5zZW50IGltcGxlbWVudGF0aW9uLlxuICAgICAgdGhpcy5zZW50ID0gdGhpcy5fc2VudCA9IHVuZGVmaW5lZDtcbiAgICAgIHRoaXMuZG9uZSA9IGZhbHNlO1xuICAgICAgdGhpcy5kZWxlZ2F0ZSA9IG51bGw7XG5cbiAgICAgIHRoaXMubWV0aG9kID0gXCJuZXh0XCI7XG4gICAgICB0aGlzLmFyZyA9IHVuZGVmaW5lZDtcblxuICAgICAgdGhpcy50cnlFbnRyaWVzLmZvckVhY2gocmVzZXRUcnlFbnRyeSk7XG5cbiAgICAgIGlmICghc2tpcFRlbXBSZXNldCkge1xuICAgICAgICBmb3IgKHZhciBuYW1lIGluIHRoaXMpIHtcbiAgICAgICAgICAvLyBOb3Qgc3VyZSBhYm91dCB0aGUgb3B0aW1hbCBvcmRlciBvZiB0aGVzZSBjb25kaXRpb25zOlxuICAgICAgICAgIGlmIChuYW1lLmNoYXJBdCgwKSA9PT0gXCJ0XCIgJiZcbiAgICAgICAgICAgICAgaGFzT3duLmNhbGwodGhpcywgbmFtZSkgJiZcbiAgICAgICAgICAgICAgIWlzTmFOKCtuYW1lLnNsaWNlKDEpKSkge1xuICAgICAgICAgICAgdGhpc1tuYW1lXSA9IHVuZGVmaW5lZDtcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9LFxuXG4gICAgc3RvcDogZnVuY3Rpb24oKSB7XG4gICAgICB0aGlzLmRvbmUgPSB0cnVlO1xuXG4gICAgICB2YXIgcm9vdEVudHJ5ID0gdGhpcy50cnlFbnRyaWVzWzBdO1xuICAgICAgdmFyIHJvb3RSZWNvcmQgPSByb290RW50cnkuY29tcGxldGlvbjtcbiAgICAgIGlmIChyb290UmVjb3JkLnR5cGUgPT09IFwidGhyb3dcIikge1xuICAgICAgICB0aHJvdyByb290UmVjb3JkLmFyZztcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIHRoaXMucnZhbDtcbiAgICB9LFxuXG4gICAgZGlzcGF0Y2hFeGNlcHRpb246IGZ1bmN0aW9uKGV4Y2VwdGlvbikge1xuICAgICAgaWYgKHRoaXMuZG9uZSkge1xuICAgICAgICB0aHJvdyBleGNlcHRpb247XG4gICAgICB9XG5cbiAgICAgIHZhciBjb250ZXh0ID0gdGhpcztcbiAgICAgIGZ1bmN0aW9uIGhhbmRsZShsb2MsIGNhdWdodCkge1xuICAgICAgICByZWNvcmQudHlwZSA9IFwidGhyb3dcIjtcbiAgICAgICAgcmVjb3JkLmFyZyA9IGV4Y2VwdGlvbjtcbiAgICAgICAgY29udGV4dC5uZXh0ID0gbG9jO1xuXG4gICAgICAgIGlmIChjYXVnaHQpIHtcbiAgICAgICAgICAvLyBJZiB0aGUgZGlzcGF0Y2hlZCBleGNlcHRpb24gd2FzIGNhdWdodCBieSBhIGNhdGNoIGJsb2NrLFxuICAgICAgICAgIC8vIHRoZW4gbGV0IHRoYXQgY2F0Y2ggYmxvY2sgaGFuZGxlIHRoZSBleGNlcHRpb24gbm9ybWFsbHkuXG4gICAgICAgICAgY29udGV4dC5tZXRob2QgPSBcIm5leHRcIjtcbiAgICAgICAgICBjb250ZXh0LmFyZyA9IHVuZGVmaW5lZDtcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiAhISBjYXVnaHQ7XG4gICAgICB9XG5cbiAgICAgIGZvciAodmFyIGkgPSB0aGlzLnRyeUVudHJpZXMubGVuZ3RoIC0gMTsgaSA+PSAwOyAtLWkpIHtcbiAgICAgICAgdmFyIGVudHJ5ID0gdGhpcy50cnlFbnRyaWVzW2ldO1xuICAgICAgICB2YXIgcmVjb3JkID0gZW50cnkuY29tcGxldGlvbjtcblxuICAgICAgICBpZiAoZW50cnkudHJ5TG9jID09PSBcInJvb3RcIikge1xuICAgICAgICAgIC8vIEV4Y2VwdGlvbiB0aHJvd24gb3V0c2lkZSBvZiBhbnkgdHJ5IGJsb2NrIHRoYXQgY291bGQgaGFuZGxlXG4gICAgICAgICAgLy8gaXQsIHNvIHNldCB0aGUgY29tcGxldGlvbiB2YWx1ZSBvZiB0aGUgZW50aXJlIGZ1bmN0aW9uIHRvXG4gICAgICAgICAgLy8gdGhyb3cgdGhlIGV4Y2VwdGlvbi5cbiAgICAgICAgICByZXR1cm4gaGFuZGxlKFwiZW5kXCIpO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKGVudHJ5LnRyeUxvYyA8PSB0aGlzLnByZXYpIHtcbiAgICAgICAgICB2YXIgaGFzQ2F0Y2ggPSBoYXNPd24uY2FsbChlbnRyeSwgXCJjYXRjaExvY1wiKTtcbiAgICAgICAgICB2YXIgaGFzRmluYWxseSA9IGhhc093bi5jYWxsKGVudHJ5LCBcImZpbmFsbHlMb2NcIik7XG5cbiAgICAgICAgICBpZiAoaGFzQ2F0Y2ggJiYgaGFzRmluYWxseSkge1xuICAgICAgICAgICAgaWYgKHRoaXMucHJldiA8IGVudHJ5LmNhdGNoTG9jKSB7XG4gICAgICAgICAgICAgIHJldHVybiBoYW5kbGUoZW50cnkuY2F0Y2hMb2MsIHRydWUpO1xuICAgICAgICAgICAgfSBlbHNlIGlmICh0aGlzLnByZXYgPCBlbnRyeS5maW5hbGx5TG9jKSB7XG4gICAgICAgICAgICAgIHJldHVybiBoYW5kbGUoZW50cnkuZmluYWxseUxvYyk7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICB9IGVsc2UgaWYgKGhhc0NhdGNoKSB7XG4gICAgICAgICAgICBpZiAodGhpcy5wcmV2IDwgZW50cnkuY2F0Y2hMb2MpIHtcbiAgICAgICAgICAgICAgcmV0dXJuIGhhbmRsZShlbnRyeS5jYXRjaExvYywgdHJ1ZSk7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICB9IGVsc2UgaWYgKGhhc0ZpbmFsbHkpIHtcbiAgICAgICAgICAgIGlmICh0aGlzLnByZXYgPCBlbnRyeS5maW5hbGx5TG9jKSB7XG4gICAgICAgICAgICAgIHJldHVybiBoYW5kbGUoZW50cnkuZmluYWxseUxvYyk7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKFwidHJ5IHN0YXRlbWVudCB3aXRob3V0IGNhdGNoIG9yIGZpbmFsbHlcIik7XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9XG4gICAgfSxcblxuICAgIGFicnVwdDogZnVuY3Rpb24odHlwZSwgYXJnKSB7XG4gICAgICBmb3IgKHZhciBpID0gdGhpcy50cnlFbnRyaWVzLmxlbmd0aCAtIDE7IGkgPj0gMDsgLS1pKSB7XG4gICAgICAgIHZhciBlbnRyeSA9IHRoaXMudHJ5RW50cmllc1tpXTtcbiAgICAgICAgaWYgKGVudHJ5LnRyeUxvYyA8PSB0aGlzLnByZXYgJiZcbiAgICAgICAgICAgIGhhc093bi5jYWxsKGVudHJ5LCBcImZpbmFsbHlMb2NcIikgJiZcbiAgICAgICAgICAgIHRoaXMucHJldiA8IGVudHJ5LmZpbmFsbHlMb2MpIHtcbiAgICAgICAgICB2YXIgZmluYWxseUVudHJ5ID0gZW50cnk7XG4gICAgICAgICAgYnJlYWs7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgaWYgKGZpbmFsbHlFbnRyeSAmJlxuICAgICAgICAgICh0eXBlID09PSBcImJyZWFrXCIgfHxcbiAgICAgICAgICAgdHlwZSA9PT0gXCJjb250aW51ZVwiKSAmJlxuICAgICAgICAgIGZpbmFsbHlFbnRyeS50cnlMb2MgPD0gYXJnICYmXG4gICAgICAgICAgYXJnIDw9IGZpbmFsbHlFbnRyeS5maW5hbGx5TG9jKSB7XG4gICAgICAgIC8vIElnbm9yZSB0aGUgZmluYWxseSBlbnRyeSBpZiBjb250cm9sIGlzIG5vdCBqdW1waW5nIHRvIGFcbiAgICAgICAgLy8gbG9jYXRpb24gb3V0c2lkZSB0aGUgdHJ5L2NhdGNoIGJsb2NrLlxuICAgICAgICBmaW5hbGx5RW50cnkgPSBudWxsO1xuICAgICAgfVxuXG4gICAgICB2YXIgcmVjb3JkID0gZmluYWxseUVudHJ5ID8gZmluYWxseUVudHJ5LmNvbXBsZXRpb24gOiB7fTtcbiAgICAgIHJlY29yZC50eXBlID0gdHlwZTtcbiAgICAgIHJlY29yZC5hcmcgPSBhcmc7XG5cbiAgICAgIGlmIChmaW5hbGx5RW50cnkpIHtcbiAgICAgICAgdGhpcy5tZXRob2QgPSBcIm5leHRcIjtcbiAgICAgICAgdGhpcy5uZXh0ID0gZmluYWxseUVudHJ5LmZpbmFsbHlMb2M7XG4gICAgICAgIHJldHVybiBDb250aW51ZVNlbnRpbmVsO1xuICAgICAgfVxuXG4gICAgICByZXR1cm4gdGhpcy5jb21wbGV0ZShyZWNvcmQpO1xuICAgIH0sXG5cbiAgICBjb21wbGV0ZTogZnVuY3Rpb24ocmVjb3JkLCBhZnRlckxvYykge1xuICAgICAgaWYgKHJlY29yZC50eXBlID09PSBcInRocm93XCIpIHtcbiAgICAgICAgdGhyb3cgcmVjb3JkLmFyZztcbiAgICAgIH1cblxuICAgICAgaWYgKHJlY29yZC50eXBlID09PSBcImJyZWFrXCIgfHxcbiAgICAgICAgICByZWNvcmQudHlwZSA9PT0gXCJjb250aW51ZVwiKSB7XG4gICAgICAgIHRoaXMubmV4dCA9IHJlY29yZC5hcmc7XG4gICAgICB9IGVsc2UgaWYgKHJlY29yZC50eXBlID09PSBcInJldHVyblwiKSB7XG4gICAgICAgIHRoaXMucnZhbCA9IHRoaXMuYXJnID0gcmVjb3JkLmFyZztcbiAgICAgICAgdGhpcy5tZXRob2QgPSBcInJldHVyblwiO1xuICAgICAgICB0aGlzLm5leHQgPSBcImVuZFwiO1xuICAgICAgfSBlbHNlIGlmIChyZWNvcmQudHlwZSA9PT0gXCJub3JtYWxcIiAmJiBhZnRlckxvYykge1xuICAgICAgICB0aGlzLm5leHQgPSBhZnRlckxvYztcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIENvbnRpbnVlU2VudGluZWw7XG4gICAgfSxcblxuICAgIGZpbmlzaDogZnVuY3Rpb24oZmluYWxseUxvYykge1xuICAgICAgZm9yICh2YXIgaSA9IHRoaXMudHJ5RW50cmllcy5sZW5ndGggLSAxOyBpID49IDA7IC0taSkge1xuICAgICAgICB2YXIgZW50cnkgPSB0aGlzLnRyeUVudHJpZXNbaV07XG4gICAgICAgIGlmIChlbnRyeS5maW5hbGx5TG9jID09PSBmaW5hbGx5TG9jKSB7XG4gICAgICAgICAgdGhpcy5jb21wbGV0ZShlbnRyeS5jb21wbGV0aW9uLCBlbnRyeS5hZnRlckxvYyk7XG4gICAgICAgICAgcmVzZXRUcnlFbnRyeShlbnRyeSk7XG4gICAgICAgICAgcmV0dXJuIENvbnRpbnVlU2VudGluZWw7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9LFxuXG4gICAgXCJjYXRjaFwiOiBmdW5jdGlvbih0cnlMb2MpIHtcbiAgICAgIGZvciAodmFyIGkgPSB0aGlzLnRyeUVudHJpZXMubGVuZ3RoIC0gMTsgaSA+PSAwOyAtLWkpIHtcbiAgICAgICAgdmFyIGVudHJ5ID0gdGhpcy50cnlFbnRyaWVzW2ldO1xuICAgICAgICBpZiAoZW50cnkudHJ5TG9jID09PSB0cnlMb2MpIHtcbiAgICAgICAgICB2YXIgcmVjb3JkID0gZW50cnkuY29tcGxldGlvbjtcbiAgICAgICAgICBpZiAocmVjb3JkLnR5cGUgPT09IFwidGhyb3dcIikge1xuICAgICAgICAgICAgdmFyIHRocm93biA9IHJlY29yZC5hcmc7XG4gICAgICAgICAgICByZXNldFRyeUVudHJ5KGVudHJ5KTtcbiAgICAgICAgICB9XG4gICAgICAgICAgcmV0dXJuIHRocm93bjtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICAvLyBUaGUgY29udGV4dC5jYXRjaCBtZXRob2QgbXVzdCBvbmx5IGJlIGNhbGxlZCB3aXRoIGEgbG9jYXRpb25cbiAgICAgIC8vIGFyZ3VtZW50IHRoYXQgY29ycmVzcG9uZHMgdG8gYSBrbm93biBjYXRjaCBibG9jay5cbiAgICAgIHRocm93IG5ldyBFcnJvcihcImlsbGVnYWwgY2F0Y2ggYXR0ZW1wdFwiKTtcbiAgICB9LFxuXG4gICAgZGVsZWdhdGVZaWVsZDogZnVuY3Rpb24oaXRlcmFibGUsIHJlc3VsdE5hbWUsIG5leHRMb2MpIHtcbiAgICAgIHRoaXMuZGVsZWdhdGUgPSB7XG4gICAgICAgIGl0ZXJhdG9yOiB2YWx1ZXMoaXRlcmFibGUpLFxuICAgICAgICByZXN1bHROYW1lOiByZXN1bHROYW1lLFxuICAgICAgICBuZXh0TG9jOiBuZXh0TG9jXG4gICAgICB9O1xuXG4gICAgICBpZiAodGhpcy5tZXRob2QgPT09IFwibmV4dFwiKSB7XG4gICAgICAgIC8vIERlbGliZXJhdGVseSBmb3JnZXQgdGhlIGxhc3Qgc2VudCB2YWx1ZSBzbyB0aGF0IHdlIGRvbid0XG4gICAgICAgIC8vIGFjY2lkZW50YWxseSBwYXNzIGl0IG9uIHRvIHRoZSBkZWxlZ2F0ZS5cbiAgICAgICAgdGhpcy5hcmcgPSB1bmRlZmluZWQ7XG4gICAgICB9XG5cbiAgICAgIHJldHVybiBDb250aW51ZVNlbnRpbmVsO1xuICAgIH1cbiAgfTtcbn0pKFxuICAvLyBJbiBzbG9wcHkgbW9kZSwgdW5ib3VuZCBgdGhpc2AgcmVmZXJzIHRvIHRoZSBnbG9iYWwgb2JqZWN0LCBmYWxsYmFjayB0b1xuICAvLyBGdW5jdGlvbiBjb25zdHJ1Y3RvciBpZiB3ZSdyZSBpbiBnbG9iYWwgc3RyaWN0IG1vZGUuIFRoYXQgaXMgc2FkbHkgYSBmb3JtXG4gIC8vIG9mIGluZGlyZWN0IGV2YWwgd2hpY2ggdmlvbGF0ZXMgQ29udGVudCBTZWN1cml0eSBQb2xpY3kuXG4gIChmdW5jdGlvbigpIHsgcmV0dXJuIHRoaXMgfSkoKSB8fCBGdW5jdGlvbihcInJldHVybiB0aGlzXCIpKClcbik7XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL25vZGVfbW9kdWxlcy9fcmVnZW5lcmF0b3ItcnVudGltZUAwLjExLjFAcmVnZW5lcmF0b3ItcnVudGltZS9ydW50aW1lLmpzXG4vLyBtb2R1bGUgaWQgPSA5NFxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJyZXF1aXJlKCcuLi9tb2R1bGVzL2VzNi5vYmplY3QudG8tc3RyaW5nJyk7XG5yZXF1aXJlKCcuLi9tb2R1bGVzL2VzNi5zdHJpbmcuaXRlcmF0b3InKTtcbnJlcXVpcmUoJy4uL21vZHVsZXMvd2ViLmRvbS5pdGVyYWJsZScpO1xucmVxdWlyZSgnLi4vbW9kdWxlcy9lczYucHJvbWlzZScpO1xucmVxdWlyZSgnLi4vbW9kdWxlcy9lczcucHJvbWlzZS5maW5hbGx5Jyk7XG5yZXF1aXJlKCcuLi9tb2R1bGVzL2VzNy5wcm9taXNlLnRyeScpO1xubW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKCcuLi9tb2R1bGVzL19jb3JlJykuUHJvbWlzZTtcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vbm9kZV9tb2R1bGVzL19jb3JlLWpzQDIuNS4zQGNvcmUtanMvbGlicmFyeS9mbi9wcm9taXNlLmpzXG4vLyBtb2R1bGUgaWQgPSA5NVxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJ2YXIgdG9JbnRlZ2VyID0gcmVxdWlyZSgnLi9fdG8taW50ZWdlcicpO1xudmFyIGRlZmluZWQgPSByZXF1aXJlKCcuL19kZWZpbmVkJyk7XG4vLyB0cnVlICAtPiBTdHJpbmcjYXRcbi8vIGZhbHNlIC0+IFN0cmluZyNjb2RlUG9pbnRBdFxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoVE9fU1RSSU5HKSB7XG4gIHJldHVybiBmdW5jdGlvbiAodGhhdCwgcG9zKSB7XG4gICAgdmFyIHMgPSBTdHJpbmcoZGVmaW5lZCh0aGF0KSk7XG4gICAgdmFyIGkgPSB0b0ludGVnZXIocG9zKTtcbiAgICB2YXIgbCA9IHMubGVuZ3RoO1xuICAgIHZhciBhLCBiO1xuICAgIGlmIChpIDwgMCB8fCBpID49IGwpIHJldHVybiBUT19TVFJJTkcgPyAnJyA6IHVuZGVmaW5lZDtcbiAgICBhID0gcy5jaGFyQ29kZUF0KGkpO1xuICAgIHJldHVybiBhIDwgMHhkODAwIHx8IGEgPiAweGRiZmYgfHwgaSArIDEgPT09IGwgfHwgKGIgPSBzLmNoYXJDb2RlQXQoaSArIDEpKSA8IDB4ZGMwMCB8fCBiID4gMHhkZmZmXG4gICAgICA/IFRPX1NUUklORyA/IHMuY2hhckF0KGkpIDogYVxuICAgICAgOiBUT19TVFJJTkcgPyBzLnNsaWNlKGksIGkgKyAyKSA6IChhIC0gMHhkODAwIDw8IDEwKSArIChiIC0gMHhkYzAwKSArIDB4MTAwMDA7XG4gIH07XG59O1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9ub2RlX21vZHVsZXMvX2NvcmUtanNAMi41LjNAY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX3N0cmluZy1hdC5qc1xuLy8gbW9kdWxlIGlkID0gOTZcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiJ3VzZSBzdHJpY3QnO1xudmFyIGNyZWF0ZSA9IHJlcXVpcmUoJy4vX29iamVjdC1jcmVhdGUnKTtcbnZhciBkZXNjcmlwdG9yID0gcmVxdWlyZSgnLi9fcHJvcGVydHktZGVzYycpO1xudmFyIHNldFRvU3RyaW5nVGFnID0gcmVxdWlyZSgnLi9fc2V0LXRvLXN0cmluZy10YWcnKTtcbnZhciBJdGVyYXRvclByb3RvdHlwZSA9IHt9O1xuXG4vLyAyNS4xLjIuMS4xICVJdGVyYXRvclByb3RvdHlwZSVbQEBpdGVyYXRvcl0oKVxucmVxdWlyZSgnLi9faGlkZScpKEl0ZXJhdG9yUHJvdG90eXBlLCByZXF1aXJlKCcuL193a3MnKSgnaXRlcmF0b3InKSwgZnVuY3Rpb24gKCkgeyByZXR1cm4gdGhpczsgfSk7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKENvbnN0cnVjdG9yLCBOQU1FLCBuZXh0KSB7XG4gIENvbnN0cnVjdG9yLnByb3RvdHlwZSA9IGNyZWF0ZShJdGVyYXRvclByb3RvdHlwZSwgeyBuZXh0OiBkZXNjcmlwdG9yKDEsIG5leHQpIH0pO1xuICBzZXRUb1N0cmluZ1RhZyhDb25zdHJ1Y3RvciwgTkFNRSArICcgSXRlcmF0b3InKTtcbn07XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL25vZGVfbW9kdWxlcy9fY29yZS1qc0AyLjUuM0Bjb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9faXRlci1jcmVhdGUuanNcbi8vIG1vZHVsZSBpZCA9IDk3XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsInZhciBkUCA9IHJlcXVpcmUoJy4vX29iamVjdC1kcCcpO1xudmFyIGFuT2JqZWN0ID0gcmVxdWlyZSgnLi9fYW4tb2JqZWN0Jyk7XG52YXIgZ2V0S2V5cyA9IHJlcXVpcmUoJy4vX29iamVjdC1rZXlzJyk7XG5cbm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZSgnLi9fZGVzY3JpcHRvcnMnKSA/IE9iamVjdC5kZWZpbmVQcm9wZXJ0aWVzIDogZnVuY3Rpb24gZGVmaW5lUHJvcGVydGllcyhPLCBQcm9wZXJ0aWVzKSB7XG4gIGFuT2JqZWN0KE8pO1xuICB2YXIga2V5cyA9IGdldEtleXMoUHJvcGVydGllcyk7XG4gIHZhciBsZW5ndGggPSBrZXlzLmxlbmd0aDtcbiAgdmFyIGkgPSAwO1xuICB2YXIgUDtcbiAgd2hpbGUgKGxlbmd0aCA+IGkpIGRQLmYoTywgUCA9IGtleXNbaSsrXSwgUHJvcGVydGllc1tQXSk7XG4gIHJldHVybiBPO1xufTtcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vbm9kZV9tb2R1bGVzL19jb3JlLWpzQDIuNS4zQGNvcmUtanMvbGlicmFyeS9tb2R1bGVzL19vYmplY3QtZHBzLmpzXG4vLyBtb2R1bGUgaWQgPSA5OFxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCIvLyBmYWxzZSAtPiBBcnJheSNpbmRleE9mXG4vLyB0cnVlICAtPiBBcnJheSNpbmNsdWRlc1xudmFyIHRvSU9iamVjdCA9IHJlcXVpcmUoJy4vX3RvLWlvYmplY3QnKTtcbnZhciB0b0xlbmd0aCA9IHJlcXVpcmUoJy4vX3RvLWxlbmd0aCcpO1xudmFyIHRvQWJzb2x1dGVJbmRleCA9IHJlcXVpcmUoJy4vX3RvLWFic29sdXRlLWluZGV4Jyk7XG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChJU19JTkNMVURFUykge1xuICByZXR1cm4gZnVuY3Rpb24gKCR0aGlzLCBlbCwgZnJvbUluZGV4KSB7XG4gICAgdmFyIE8gPSB0b0lPYmplY3QoJHRoaXMpO1xuICAgIHZhciBsZW5ndGggPSB0b0xlbmd0aChPLmxlbmd0aCk7XG4gICAgdmFyIGluZGV4ID0gdG9BYnNvbHV0ZUluZGV4KGZyb21JbmRleCwgbGVuZ3RoKTtcbiAgICB2YXIgdmFsdWU7XG4gICAgLy8gQXJyYXkjaW5jbHVkZXMgdXNlcyBTYW1lVmFsdWVaZXJvIGVxdWFsaXR5IGFsZ29yaXRobVxuICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby1zZWxmLWNvbXBhcmVcbiAgICBpZiAoSVNfSU5DTFVERVMgJiYgZWwgIT0gZWwpIHdoaWxlIChsZW5ndGggPiBpbmRleCkge1xuICAgICAgdmFsdWUgPSBPW2luZGV4KytdO1xuICAgICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLXNlbGYtY29tcGFyZVxuICAgICAgaWYgKHZhbHVlICE9IHZhbHVlKSByZXR1cm4gdHJ1ZTtcbiAgICAvLyBBcnJheSNpbmRleE9mIGlnbm9yZXMgaG9sZXMsIEFycmF5I2luY2x1ZGVzIC0gbm90XG4gICAgfSBlbHNlIGZvciAoO2xlbmd0aCA+IGluZGV4OyBpbmRleCsrKSBpZiAoSVNfSU5DTFVERVMgfHwgaW5kZXggaW4gTykge1xuICAgICAgaWYgKE9baW5kZXhdID09PSBlbCkgcmV0dXJuIElTX0lOQ0xVREVTIHx8IGluZGV4IHx8IDA7XG4gICAgfSByZXR1cm4gIUlTX0lOQ0xVREVTICYmIC0xO1xuICB9O1xufTtcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vbm9kZV9tb2R1bGVzL19jb3JlLWpzQDIuNS4zQGNvcmUtanMvbGlicmFyeS9tb2R1bGVzL19hcnJheS1pbmNsdWRlcy5qc1xuLy8gbW9kdWxlIGlkID0gOTlcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwidmFyIHRvSW50ZWdlciA9IHJlcXVpcmUoJy4vX3RvLWludGVnZXInKTtcbnZhciBtYXggPSBNYXRoLm1heDtcbnZhciBtaW4gPSBNYXRoLm1pbjtcbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGluZGV4LCBsZW5ndGgpIHtcbiAgaW5kZXggPSB0b0ludGVnZXIoaW5kZXgpO1xuICByZXR1cm4gaW5kZXggPCAwID8gbWF4KGluZGV4ICsgbGVuZ3RoLCAwKSA6IG1pbihpbmRleCwgbGVuZ3RoKTtcbn07XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL25vZGVfbW9kdWxlcy9fY29yZS1qc0AyLjUuM0Bjb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9fdG8tYWJzb2x1dGUtaW5kZXguanNcbi8vIG1vZHVsZSBpZCA9IDEwMFxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCIndXNlIHN0cmljdCc7XG52YXIgYWRkVG9VbnNjb3BhYmxlcyA9IHJlcXVpcmUoJy4vX2FkZC10by11bnNjb3BhYmxlcycpO1xudmFyIHN0ZXAgPSByZXF1aXJlKCcuL19pdGVyLXN0ZXAnKTtcbnZhciBJdGVyYXRvcnMgPSByZXF1aXJlKCcuL19pdGVyYXRvcnMnKTtcbnZhciB0b0lPYmplY3QgPSByZXF1aXJlKCcuL190by1pb2JqZWN0Jyk7XG5cbi8vIDIyLjEuMy40IEFycmF5LnByb3RvdHlwZS5lbnRyaWVzKClcbi8vIDIyLjEuMy4xMyBBcnJheS5wcm90b3R5cGUua2V5cygpXG4vLyAyMi4xLjMuMjkgQXJyYXkucHJvdG90eXBlLnZhbHVlcygpXG4vLyAyMi4xLjMuMzAgQXJyYXkucHJvdG90eXBlW0BAaXRlcmF0b3JdKClcbm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZSgnLi9faXRlci1kZWZpbmUnKShBcnJheSwgJ0FycmF5JywgZnVuY3Rpb24gKGl0ZXJhdGVkLCBraW5kKSB7XG4gIHRoaXMuX3QgPSB0b0lPYmplY3QoaXRlcmF0ZWQpOyAvLyB0YXJnZXRcbiAgdGhpcy5faSA9IDA7ICAgICAgICAgICAgICAgICAgIC8vIG5leHQgaW5kZXhcbiAgdGhpcy5fayA9IGtpbmQ7ICAgICAgICAgICAgICAgIC8vIGtpbmRcbi8vIDIyLjEuNS4yLjEgJUFycmF5SXRlcmF0b3JQcm90b3R5cGUlLm5leHQoKVxufSwgZnVuY3Rpb24gKCkge1xuICB2YXIgTyA9IHRoaXMuX3Q7XG4gIHZhciBraW5kID0gdGhpcy5faztcbiAgdmFyIGluZGV4ID0gdGhpcy5faSsrO1xuICBpZiAoIU8gfHwgaW5kZXggPj0gTy5sZW5ndGgpIHtcbiAgICB0aGlzLl90ID0gdW5kZWZpbmVkO1xuICAgIHJldHVybiBzdGVwKDEpO1xuICB9XG4gIGlmIChraW5kID09ICdrZXlzJykgcmV0dXJuIHN0ZXAoMCwgaW5kZXgpO1xuICBpZiAoa2luZCA9PSAndmFsdWVzJykgcmV0dXJuIHN0ZXAoMCwgT1tpbmRleF0pO1xuICByZXR1cm4gc3RlcCgwLCBbaW5kZXgsIE9baW5kZXhdXSk7XG59LCAndmFsdWVzJyk7XG5cbi8vIGFyZ3VtZW50c0xpc3RbQEBpdGVyYXRvcl0gaXMgJUFycmF5UHJvdG9fdmFsdWVzJSAoOS40LjQuNiwgOS40LjQuNylcbkl0ZXJhdG9ycy5Bcmd1bWVudHMgPSBJdGVyYXRvcnMuQXJyYXk7XG5cbmFkZFRvVW5zY29wYWJsZXMoJ2tleXMnKTtcbmFkZFRvVW5zY29wYWJsZXMoJ3ZhbHVlcycpO1xuYWRkVG9VbnNjb3BhYmxlcygnZW50cmllcycpO1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9ub2RlX21vZHVsZXMvX2NvcmUtanNAMi41LjNAY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvZXM2LmFycmF5Lml0ZXJhdG9yLmpzXG4vLyBtb2R1bGUgaWQgPSAxMDFcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwibW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoKSB7IC8qIGVtcHR5ICovIH07XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL25vZGVfbW9kdWxlcy9fY29yZS1qc0AyLjUuM0Bjb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9fYWRkLXRvLXVuc2NvcGFibGVzLmpzXG4vLyBtb2R1bGUgaWQgPSAxMDJcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiJ3VzZSBzdHJpY3QnO1xudmFyIExJQlJBUlkgPSByZXF1aXJlKCcuL19saWJyYXJ5Jyk7XG52YXIgZ2xvYmFsID0gcmVxdWlyZSgnLi9fZ2xvYmFsJyk7XG52YXIgY3R4ID0gcmVxdWlyZSgnLi9fY3R4Jyk7XG52YXIgY2xhc3NvZiA9IHJlcXVpcmUoJy4vX2NsYXNzb2YnKTtcbnZhciAkZXhwb3J0ID0gcmVxdWlyZSgnLi9fZXhwb3J0Jyk7XG52YXIgaXNPYmplY3QgPSByZXF1aXJlKCcuL19pcy1vYmplY3QnKTtcbnZhciBhRnVuY3Rpb24gPSByZXF1aXJlKCcuL19hLWZ1bmN0aW9uJyk7XG52YXIgYW5JbnN0YW5jZSA9IHJlcXVpcmUoJy4vX2FuLWluc3RhbmNlJyk7XG52YXIgZm9yT2YgPSByZXF1aXJlKCcuL19mb3Itb2YnKTtcbnZhciBzcGVjaWVzQ29uc3RydWN0b3IgPSByZXF1aXJlKCcuL19zcGVjaWVzLWNvbnN0cnVjdG9yJyk7XG52YXIgdGFzayA9IHJlcXVpcmUoJy4vX3Rhc2snKS5zZXQ7XG52YXIgbWljcm90YXNrID0gcmVxdWlyZSgnLi9fbWljcm90YXNrJykoKTtcbnZhciBuZXdQcm9taXNlQ2FwYWJpbGl0eU1vZHVsZSA9IHJlcXVpcmUoJy4vX25ldy1wcm9taXNlLWNhcGFiaWxpdHknKTtcbnZhciBwZXJmb3JtID0gcmVxdWlyZSgnLi9fcGVyZm9ybScpO1xudmFyIHByb21pc2VSZXNvbHZlID0gcmVxdWlyZSgnLi9fcHJvbWlzZS1yZXNvbHZlJyk7XG52YXIgUFJPTUlTRSA9ICdQcm9taXNlJztcbnZhciBUeXBlRXJyb3IgPSBnbG9iYWwuVHlwZUVycm9yO1xudmFyIHByb2Nlc3MgPSBnbG9iYWwucHJvY2VzcztcbnZhciAkUHJvbWlzZSA9IGdsb2JhbFtQUk9NSVNFXTtcbnZhciBpc05vZGUgPSBjbGFzc29mKHByb2Nlc3MpID09ICdwcm9jZXNzJztcbnZhciBlbXB0eSA9IGZ1bmN0aW9uICgpIHsgLyogZW1wdHkgKi8gfTtcbnZhciBJbnRlcm5hbCwgbmV3R2VuZXJpY1Byb21pc2VDYXBhYmlsaXR5LCBPd25Qcm9taXNlQ2FwYWJpbGl0eSwgV3JhcHBlcjtcbnZhciBuZXdQcm9taXNlQ2FwYWJpbGl0eSA9IG5ld0dlbmVyaWNQcm9taXNlQ2FwYWJpbGl0eSA9IG5ld1Byb21pc2VDYXBhYmlsaXR5TW9kdWxlLmY7XG5cbnZhciBVU0VfTkFUSVZFID0gISFmdW5jdGlvbiAoKSB7XG4gIHRyeSB7XG4gICAgLy8gY29ycmVjdCBzdWJjbGFzc2luZyB3aXRoIEBAc3BlY2llcyBzdXBwb3J0XG4gICAgdmFyIHByb21pc2UgPSAkUHJvbWlzZS5yZXNvbHZlKDEpO1xuICAgIHZhciBGYWtlUHJvbWlzZSA9IChwcm9taXNlLmNvbnN0cnVjdG9yID0ge30pW3JlcXVpcmUoJy4vX3drcycpKCdzcGVjaWVzJyldID0gZnVuY3Rpb24gKGV4ZWMpIHtcbiAgICAgIGV4ZWMoZW1wdHksIGVtcHR5KTtcbiAgICB9O1xuICAgIC8vIHVuaGFuZGxlZCByZWplY3Rpb25zIHRyYWNraW5nIHN1cHBvcnQsIE5vZGVKUyBQcm9taXNlIHdpdGhvdXQgaXQgZmFpbHMgQEBzcGVjaWVzIHRlc3RcbiAgICByZXR1cm4gKGlzTm9kZSB8fCB0eXBlb2YgUHJvbWlzZVJlamVjdGlvbkV2ZW50ID09ICdmdW5jdGlvbicpICYmIHByb21pc2UudGhlbihlbXB0eSkgaW5zdGFuY2VvZiBGYWtlUHJvbWlzZTtcbiAgfSBjYXRjaCAoZSkgeyAvKiBlbXB0eSAqLyB9XG59KCk7XG5cbi8vIGhlbHBlcnNcbnZhciBpc1RoZW5hYmxlID0gZnVuY3Rpb24gKGl0KSB7XG4gIHZhciB0aGVuO1xuICByZXR1cm4gaXNPYmplY3QoaXQpICYmIHR5cGVvZiAodGhlbiA9IGl0LnRoZW4pID09ICdmdW5jdGlvbicgPyB0aGVuIDogZmFsc2U7XG59O1xudmFyIG5vdGlmeSA9IGZ1bmN0aW9uIChwcm9taXNlLCBpc1JlamVjdCkge1xuICBpZiAocHJvbWlzZS5fbikgcmV0dXJuO1xuICBwcm9taXNlLl9uID0gdHJ1ZTtcbiAgdmFyIGNoYWluID0gcHJvbWlzZS5fYztcbiAgbWljcm90YXNrKGZ1bmN0aW9uICgpIHtcbiAgICB2YXIgdmFsdWUgPSBwcm9taXNlLl92O1xuICAgIHZhciBvayA9IHByb21pc2UuX3MgPT0gMTtcbiAgICB2YXIgaSA9IDA7XG4gICAgdmFyIHJ1biA9IGZ1bmN0aW9uIChyZWFjdGlvbikge1xuICAgICAgdmFyIGhhbmRsZXIgPSBvayA/IHJlYWN0aW9uLm9rIDogcmVhY3Rpb24uZmFpbDtcbiAgICAgIHZhciByZXNvbHZlID0gcmVhY3Rpb24ucmVzb2x2ZTtcbiAgICAgIHZhciByZWplY3QgPSByZWFjdGlvbi5yZWplY3Q7XG4gICAgICB2YXIgZG9tYWluID0gcmVhY3Rpb24uZG9tYWluO1xuICAgICAgdmFyIHJlc3VsdCwgdGhlbjtcbiAgICAgIHRyeSB7XG4gICAgICAgIGlmIChoYW5kbGVyKSB7XG4gICAgICAgICAgaWYgKCFvaykge1xuICAgICAgICAgICAgaWYgKHByb21pc2UuX2ggPT0gMikgb25IYW5kbGVVbmhhbmRsZWQocHJvbWlzZSk7XG4gICAgICAgICAgICBwcm9taXNlLl9oID0gMTtcbiAgICAgICAgICB9XG4gICAgICAgICAgaWYgKGhhbmRsZXIgPT09IHRydWUpIHJlc3VsdCA9IHZhbHVlO1xuICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgaWYgKGRvbWFpbikgZG9tYWluLmVudGVyKCk7XG4gICAgICAgICAgICByZXN1bHQgPSBoYW5kbGVyKHZhbHVlKTtcbiAgICAgICAgICAgIGlmIChkb21haW4pIGRvbWFpbi5leGl0KCk7XG4gICAgICAgICAgfVxuICAgICAgICAgIGlmIChyZXN1bHQgPT09IHJlYWN0aW9uLnByb21pc2UpIHtcbiAgICAgICAgICAgIHJlamVjdChUeXBlRXJyb3IoJ1Byb21pc2UtY2hhaW4gY3ljbGUnKSk7XG4gICAgICAgICAgfSBlbHNlIGlmICh0aGVuID0gaXNUaGVuYWJsZShyZXN1bHQpKSB7XG4gICAgICAgICAgICB0aGVuLmNhbGwocmVzdWx0LCByZXNvbHZlLCByZWplY3QpO1xuICAgICAgICAgIH0gZWxzZSByZXNvbHZlKHJlc3VsdCk7XG4gICAgICAgIH0gZWxzZSByZWplY3QodmFsdWUpO1xuICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgICByZWplY3QoZSk7XG4gICAgICB9XG4gICAgfTtcbiAgICB3aGlsZSAoY2hhaW4ubGVuZ3RoID4gaSkgcnVuKGNoYWluW2krK10pOyAvLyB2YXJpYWJsZSBsZW5ndGggLSBjYW4ndCB1c2UgZm9yRWFjaFxuICAgIHByb21pc2UuX2MgPSBbXTtcbiAgICBwcm9taXNlLl9uID0gZmFsc2U7XG4gICAgaWYgKGlzUmVqZWN0ICYmICFwcm9taXNlLl9oKSBvblVuaGFuZGxlZChwcm9taXNlKTtcbiAgfSk7XG59O1xudmFyIG9uVW5oYW5kbGVkID0gZnVuY3Rpb24gKHByb21pc2UpIHtcbiAgdGFzay5jYWxsKGdsb2JhbCwgZnVuY3Rpb24gKCkge1xuICAgIHZhciB2YWx1ZSA9IHByb21pc2UuX3Y7XG4gICAgdmFyIHVuaGFuZGxlZCA9IGlzVW5oYW5kbGVkKHByb21pc2UpO1xuICAgIHZhciByZXN1bHQsIGhhbmRsZXIsIGNvbnNvbGU7XG4gICAgaWYgKHVuaGFuZGxlZCkge1xuICAgICAgcmVzdWx0ID0gcGVyZm9ybShmdW5jdGlvbiAoKSB7XG4gICAgICAgIGlmIChpc05vZGUpIHtcbiAgICAgICAgICBwcm9jZXNzLmVtaXQoJ3VuaGFuZGxlZFJlamVjdGlvbicsIHZhbHVlLCBwcm9taXNlKTtcbiAgICAgICAgfSBlbHNlIGlmIChoYW5kbGVyID0gZ2xvYmFsLm9udW5oYW5kbGVkcmVqZWN0aW9uKSB7XG4gICAgICAgICAgaGFuZGxlcih7IHByb21pc2U6IHByb21pc2UsIHJlYXNvbjogdmFsdWUgfSk7XG4gICAgICAgIH0gZWxzZSBpZiAoKGNvbnNvbGUgPSBnbG9iYWwuY29uc29sZSkgJiYgY29uc29sZS5lcnJvcikge1xuICAgICAgICAgIGNvbnNvbGUuZXJyb3IoJ1VuaGFuZGxlZCBwcm9taXNlIHJlamVjdGlvbicsIHZhbHVlKTtcbiAgICAgICAgfVxuICAgICAgfSk7XG4gICAgICAvLyBCcm93c2VycyBzaG91bGQgbm90IHRyaWdnZXIgYHJlamVjdGlvbkhhbmRsZWRgIGV2ZW50IGlmIGl0IHdhcyBoYW5kbGVkIGhlcmUsIE5vZGVKUyAtIHNob3VsZFxuICAgICAgcHJvbWlzZS5faCA9IGlzTm9kZSB8fCBpc1VuaGFuZGxlZChwcm9taXNlKSA/IDIgOiAxO1xuICAgIH0gcHJvbWlzZS5fYSA9IHVuZGVmaW5lZDtcbiAgICBpZiAodW5oYW5kbGVkICYmIHJlc3VsdC5lKSB0aHJvdyByZXN1bHQudjtcbiAgfSk7XG59O1xudmFyIGlzVW5oYW5kbGVkID0gZnVuY3Rpb24gKHByb21pc2UpIHtcbiAgcmV0dXJuIHByb21pc2UuX2ggIT09IDEgJiYgKHByb21pc2UuX2EgfHwgcHJvbWlzZS5fYykubGVuZ3RoID09PSAwO1xufTtcbnZhciBvbkhhbmRsZVVuaGFuZGxlZCA9IGZ1bmN0aW9uIChwcm9taXNlKSB7XG4gIHRhc2suY2FsbChnbG9iYWwsIGZ1bmN0aW9uICgpIHtcbiAgICB2YXIgaGFuZGxlcjtcbiAgICBpZiAoaXNOb2RlKSB7XG4gICAgICBwcm9jZXNzLmVtaXQoJ3JlamVjdGlvbkhhbmRsZWQnLCBwcm9taXNlKTtcbiAgICB9IGVsc2UgaWYgKGhhbmRsZXIgPSBnbG9iYWwub25yZWplY3Rpb25oYW5kbGVkKSB7XG4gICAgICBoYW5kbGVyKHsgcHJvbWlzZTogcHJvbWlzZSwgcmVhc29uOiBwcm9taXNlLl92IH0pO1xuICAgIH1cbiAgfSk7XG59O1xudmFyICRyZWplY3QgPSBmdW5jdGlvbiAodmFsdWUpIHtcbiAgdmFyIHByb21pc2UgPSB0aGlzO1xuICBpZiAocHJvbWlzZS5fZCkgcmV0dXJuO1xuICBwcm9taXNlLl9kID0gdHJ1ZTtcbiAgcHJvbWlzZSA9IHByb21pc2UuX3cgfHwgcHJvbWlzZTsgLy8gdW53cmFwXG4gIHByb21pc2UuX3YgPSB2YWx1ZTtcbiAgcHJvbWlzZS5fcyA9IDI7XG4gIGlmICghcHJvbWlzZS5fYSkgcHJvbWlzZS5fYSA9IHByb21pc2UuX2Muc2xpY2UoKTtcbiAgbm90aWZ5KHByb21pc2UsIHRydWUpO1xufTtcbnZhciAkcmVzb2x2ZSA9IGZ1bmN0aW9uICh2YWx1ZSkge1xuICB2YXIgcHJvbWlzZSA9IHRoaXM7XG4gIHZhciB0aGVuO1xuICBpZiAocHJvbWlzZS5fZCkgcmV0dXJuO1xuICBwcm9taXNlLl9kID0gdHJ1ZTtcbiAgcHJvbWlzZSA9IHByb21pc2UuX3cgfHwgcHJvbWlzZTsgLy8gdW53cmFwXG4gIHRyeSB7XG4gICAgaWYgKHByb21pc2UgPT09IHZhbHVlKSB0aHJvdyBUeXBlRXJyb3IoXCJQcm9taXNlIGNhbid0IGJlIHJlc29sdmVkIGl0c2VsZlwiKTtcbiAgICBpZiAodGhlbiA9IGlzVGhlbmFibGUodmFsdWUpKSB7XG4gICAgICBtaWNyb3Rhc2soZnVuY3Rpb24gKCkge1xuICAgICAgICB2YXIgd3JhcHBlciA9IHsgX3c6IHByb21pc2UsIF9kOiBmYWxzZSB9OyAvLyB3cmFwXG4gICAgICAgIHRyeSB7XG4gICAgICAgICAgdGhlbi5jYWxsKHZhbHVlLCBjdHgoJHJlc29sdmUsIHdyYXBwZXIsIDEpLCBjdHgoJHJlamVjdCwgd3JhcHBlciwgMSkpO1xuICAgICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgICAgJHJlamVjdC5jYWxsKHdyYXBwZXIsIGUpO1xuICAgICAgICB9XG4gICAgICB9KTtcbiAgICB9IGVsc2Uge1xuICAgICAgcHJvbWlzZS5fdiA9IHZhbHVlO1xuICAgICAgcHJvbWlzZS5fcyA9IDE7XG4gICAgICBub3RpZnkocHJvbWlzZSwgZmFsc2UpO1xuICAgIH1cbiAgfSBjYXRjaCAoZSkge1xuICAgICRyZWplY3QuY2FsbCh7IF93OiBwcm9taXNlLCBfZDogZmFsc2UgfSwgZSk7IC8vIHdyYXBcbiAgfVxufTtcblxuLy8gY29uc3RydWN0b3IgcG9seWZpbGxcbmlmICghVVNFX05BVElWRSkge1xuICAvLyAyNS40LjMuMSBQcm9taXNlKGV4ZWN1dG9yKVxuICAkUHJvbWlzZSA9IGZ1bmN0aW9uIFByb21pc2UoZXhlY3V0b3IpIHtcbiAgICBhbkluc3RhbmNlKHRoaXMsICRQcm9taXNlLCBQUk9NSVNFLCAnX2gnKTtcbiAgICBhRnVuY3Rpb24oZXhlY3V0b3IpO1xuICAgIEludGVybmFsLmNhbGwodGhpcyk7XG4gICAgdHJ5IHtcbiAgICAgIGV4ZWN1dG9yKGN0eCgkcmVzb2x2ZSwgdGhpcywgMSksIGN0eCgkcmVqZWN0LCB0aGlzLCAxKSk7XG4gICAgfSBjYXRjaCAoZXJyKSB7XG4gICAgICAkcmVqZWN0LmNhbGwodGhpcywgZXJyKTtcbiAgICB9XG4gIH07XG4gIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby11bnVzZWQtdmFyc1xuICBJbnRlcm5hbCA9IGZ1bmN0aW9uIFByb21pc2UoZXhlY3V0b3IpIHtcbiAgICB0aGlzLl9jID0gW107ICAgICAgICAgICAgIC8vIDwtIGF3YWl0aW5nIHJlYWN0aW9uc1xuICAgIHRoaXMuX2EgPSB1bmRlZmluZWQ7ICAgICAgLy8gPC0gY2hlY2tlZCBpbiBpc1VuaGFuZGxlZCByZWFjdGlvbnNcbiAgICB0aGlzLl9zID0gMDsgICAgICAgICAgICAgIC8vIDwtIHN0YXRlXG4gICAgdGhpcy5fZCA9IGZhbHNlOyAgICAgICAgICAvLyA8LSBkb25lXG4gICAgdGhpcy5fdiA9IHVuZGVmaW5lZDsgICAgICAvLyA8LSB2YWx1ZVxuICAgIHRoaXMuX2ggPSAwOyAgICAgICAgICAgICAgLy8gPC0gcmVqZWN0aW9uIHN0YXRlLCAwIC0gZGVmYXVsdCwgMSAtIGhhbmRsZWQsIDIgLSB1bmhhbmRsZWRcbiAgICB0aGlzLl9uID0gZmFsc2U7ICAgICAgICAgIC8vIDwtIG5vdGlmeVxuICB9O1xuICBJbnRlcm5hbC5wcm90b3R5cGUgPSByZXF1aXJlKCcuL19yZWRlZmluZS1hbGwnKSgkUHJvbWlzZS5wcm90b3R5cGUsIHtcbiAgICAvLyAyNS40LjUuMyBQcm9taXNlLnByb3RvdHlwZS50aGVuKG9uRnVsZmlsbGVkLCBvblJlamVjdGVkKVxuICAgIHRoZW46IGZ1bmN0aW9uIHRoZW4ob25GdWxmaWxsZWQsIG9uUmVqZWN0ZWQpIHtcbiAgICAgIHZhciByZWFjdGlvbiA9IG5ld1Byb21pc2VDYXBhYmlsaXR5KHNwZWNpZXNDb25zdHJ1Y3Rvcih0aGlzLCAkUHJvbWlzZSkpO1xuICAgICAgcmVhY3Rpb24ub2sgPSB0eXBlb2Ygb25GdWxmaWxsZWQgPT0gJ2Z1bmN0aW9uJyA/IG9uRnVsZmlsbGVkIDogdHJ1ZTtcbiAgICAgIHJlYWN0aW9uLmZhaWwgPSB0eXBlb2Ygb25SZWplY3RlZCA9PSAnZnVuY3Rpb24nICYmIG9uUmVqZWN0ZWQ7XG4gICAgICByZWFjdGlvbi5kb21haW4gPSBpc05vZGUgPyBwcm9jZXNzLmRvbWFpbiA6IHVuZGVmaW5lZDtcbiAgICAgIHRoaXMuX2MucHVzaChyZWFjdGlvbik7XG4gICAgICBpZiAodGhpcy5fYSkgdGhpcy5fYS5wdXNoKHJlYWN0aW9uKTtcbiAgICAgIGlmICh0aGlzLl9zKSBub3RpZnkodGhpcywgZmFsc2UpO1xuICAgICAgcmV0dXJuIHJlYWN0aW9uLnByb21pc2U7XG4gICAgfSxcbiAgICAvLyAyNS40LjUuMSBQcm9taXNlLnByb3RvdHlwZS5jYXRjaChvblJlamVjdGVkKVxuICAgICdjYXRjaCc6IGZ1bmN0aW9uIChvblJlamVjdGVkKSB7XG4gICAgICByZXR1cm4gdGhpcy50aGVuKHVuZGVmaW5lZCwgb25SZWplY3RlZCk7XG4gICAgfVxuICB9KTtcbiAgT3duUHJvbWlzZUNhcGFiaWxpdHkgPSBmdW5jdGlvbiAoKSB7XG4gICAgdmFyIHByb21pc2UgPSBuZXcgSW50ZXJuYWwoKTtcbiAgICB0aGlzLnByb21pc2UgPSBwcm9taXNlO1xuICAgIHRoaXMucmVzb2x2ZSA9IGN0eCgkcmVzb2x2ZSwgcHJvbWlzZSwgMSk7XG4gICAgdGhpcy5yZWplY3QgPSBjdHgoJHJlamVjdCwgcHJvbWlzZSwgMSk7XG4gIH07XG4gIG5ld1Byb21pc2VDYXBhYmlsaXR5TW9kdWxlLmYgPSBuZXdQcm9taXNlQ2FwYWJpbGl0eSA9IGZ1bmN0aW9uIChDKSB7XG4gICAgcmV0dXJuIEMgPT09ICRQcm9taXNlIHx8IEMgPT09IFdyYXBwZXJcbiAgICAgID8gbmV3IE93blByb21pc2VDYXBhYmlsaXR5KEMpXG4gICAgICA6IG5ld0dlbmVyaWNQcm9taXNlQ2FwYWJpbGl0eShDKTtcbiAgfTtcbn1cblxuJGV4cG9ydCgkZXhwb3J0LkcgKyAkZXhwb3J0LlcgKyAkZXhwb3J0LkYgKiAhVVNFX05BVElWRSwgeyBQcm9taXNlOiAkUHJvbWlzZSB9KTtcbnJlcXVpcmUoJy4vX3NldC10by1zdHJpbmctdGFnJykoJFByb21pc2UsIFBST01JU0UpO1xucmVxdWlyZSgnLi9fc2V0LXNwZWNpZXMnKShQUk9NSVNFKTtcbldyYXBwZXIgPSByZXF1aXJlKCcuL19jb3JlJylbUFJPTUlTRV07XG5cbi8vIHN0YXRpY3NcbiRleHBvcnQoJGV4cG9ydC5TICsgJGV4cG9ydC5GICogIVVTRV9OQVRJVkUsIFBST01JU0UsIHtcbiAgLy8gMjUuNC40LjUgUHJvbWlzZS5yZWplY3QocilcbiAgcmVqZWN0OiBmdW5jdGlvbiByZWplY3Qocikge1xuICAgIHZhciBjYXBhYmlsaXR5ID0gbmV3UHJvbWlzZUNhcGFiaWxpdHkodGhpcyk7XG4gICAgdmFyICQkcmVqZWN0ID0gY2FwYWJpbGl0eS5yZWplY3Q7XG4gICAgJCRyZWplY3Qocik7XG4gICAgcmV0dXJuIGNhcGFiaWxpdHkucHJvbWlzZTtcbiAgfVxufSk7XG4kZXhwb3J0KCRleHBvcnQuUyArICRleHBvcnQuRiAqIChMSUJSQVJZIHx8ICFVU0VfTkFUSVZFKSwgUFJPTUlTRSwge1xuICAvLyAyNS40LjQuNiBQcm9taXNlLnJlc29sdmUoeClcbiAgcmVzb2x2ZTogZnVuY3Rpb24gcmVzb2x2ZSh4KSB7XG4gICAgcmV0dXJuIHByb21pc2VSZXNvbHZlKExJQlJBUlkgJiYgdGhpcyA9PT0gV3JhcHBlciA/ICRQcm9taXNlIDogdGhpcywgeCk7XG4gIH1cbn0pO1xuJGV4cG9ydCgkZXhwb3J0LlMgKyAkZXhwb3J0LkYgKiAhKFVTRV9OQVRJVkUgJiYgcmVxdWlyZSgnLi9faXRlci1kZXRlY3QnKShmdW5jdGlvbiAoaXRlcikge1xuICAkUHJvbWlzZS5hbGwoaXRlcilbJ2NhdGNoJ10oZW1wdHkpO1xufSkpLCBQUk9NSVNFLCB7XG4gIC8vIDI1LjQuNC4xIFByb21pc2UuYWxsKGl0ZXJhYmxlKVxuICBhbGw6IGZ1bmN0aW9uIGFsbChpdGVyYWJsZSkge1xuICAgIHZhciBDID0gdGhpcztcbiAgICB2YXIgY2FwYWJpbGl0eSA9IG5ld1Byb21pc2VDYXBhYmlsaXR5KEMpO1xuICAgIHZhciByZXNvbHZlID0gY2FwYWJpbGl0eS5yZXNvbHZlO1xuICAgIHZhciByZWplY3QgPSBjYXBhYmlsaXR5LnJlamVjdDtcbiAgICB2YXIgcmVzdWx0ID0gcGVyZm9ybShmdW5jdGlvbiAoKSB7XG4gICAgICB2YXIgdmFsdWVzID0gW107XG4gICAgICB2YXIgaW5kZXggPSAwO1xuICAgICAgdmFyIHJlbWFpbmluZyA9IDE7XG4gICAgICBmb3JPZihpdGVyYWJsZSwgZmFsc2UsIGZ1bmN0aW9uIChwcm9taXNlKSB7XG4gICAgICAgIHZhciAkaW5kZXggPSBpbmRleCsrO1xuICAgICAgICB2YXIgYWxyZWFkeUNhbGxlZCA9IGZhbHNlO1xuICAgICAgICB2YWx1ZXMucHVzaCh1bmRlZmluZWQpO1xuICAgICAgICByZW1haW5pbmcrKztcbiAgICAgICAgQy5yZXNvbHZlKHByb21pc2UpLnRoZW4oZnVuY3Rpb24gKHZhbHVlKSB7XG4gICAgICAgICAgaWYgKGFscmVhZHlDYWxsZWQpIHJldHVybjtcbiAgICAgICAgICBhbHJlYWR5Q2FsbGVkID0gdHJ1ZTtcbiAgICAgICAgICB2YWx1ZXNbJGluZGV4XSA9IHZhbHVlO1xuICAgICAgICAgIC0tcmVtYWluaW5nIHx8IHJlc29sdmUodmFsdWVzKTtcbiAgICAgICAgfSwgcmVqZWN0KTtcbiAgICAgIH0pO1xuICAgICAgLS1yZW1haW5pbmcgfHwgcmVzb2x2ZSh2YWx1ZXMpO1xuICAgIH0pO1xuICAgIGlmIChyZXN1bHQuZSkgcmVqZWN0KHJlc3VsdC52KTtcbiAgICByZXR1cm4gY2FwYWJpbGl0eS5wcm9taXNlO1xuICB9LFxuICAvLyAyNS40LjQuNCBQcm9taXNlLnJhY2UoaXRlcmFibGUpXG4gIHJhY2U6IGZ1bmN0aW9uIHJhY2UoaXRlcmFibGUpIHtcbiAgICB2YXIgQyA9IHRoaXM7XG4gICAgdmFyIGNhcGFiaWxpdHkgPSBuZXdQcm9taXNlQ2FwYWJpbGl0eShDKTtcbiAgICB2YXIgcmVqZWN0ID0gY2FwYWJpbGl0eS5yZWplY3Q7XG4gICAgdmFyIHJlc3VsdCA9IHBlcmZvcm0oZnVuY3Rpb24gKCkge1xuICAgICAgZm9yT2YoaXRlcmFibGUsIGZhbHNlLCBmdW5jdGlvbiAocHJvbWlzZSkge1xuICAgICAgICBDLnJlc29sdmUocHJvbWlzZSkudGhlbihjYXBhYmlsaXR5LnJlc29sdmUsIHJlamVjdCk7XG4gICAgICB9KTtcbiAgICB9KTtcbiAgICBpZiAocmVzdWx0LmUpIHJlamVjdChyZXN1bHQudik7XG4gICAgcmV0dXJuIGNhcGFiaWxpdHkucHJvbWlzZTtcbiAgfVxufSk7XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL25vZGVfbW9kdWxlcy9fY29yZS1qc0AyLjUuM0Bjb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9lczYucHJvbWlzZS5qc1xuLy8gbW9kdWxlIGlkID0gMTAzXG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIi8vIGZhc3QgYXBwbHksIGh0dHA6Ly9qc3BlcmYubG5raXQuY29tL2Zhc3QtYXBwbHkvNVxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoZm4sIGFyZ3MsIHRoYXQpIHtcbiAgdmFyIHVuID0gdGhhdCA9PT0gdW5kZWZpbmVkO1xuICBzd2l0Y2ggKGFyZ3MubGVuZ3RoKSB7XG4gICAgY2FzZSAwOiByZXR1cm4gdW4gPyBmbigpXG4gICAgICAgICAgICAgICAgICAgICAgOiBmbi5jYWxsKHRoYXQpO1xuICAgIGNhc2UgMTogcmV0dXJuIHVuID8gZm4oYXJnc1swXSlcbiAgICAgICAgICAgICAgICAgICAgICA6IGZuLmNhbGwodGhhdCwgYXJnc1swXSk7XG4gICAgY2FzZSAyOiByZXR1cm4gdW4gPyBmbihhcmdzWzBdLCBhcmdzWzFdKVxuICAgICAgICAgICAgICAgICAgICAgIDogZm4uY2FsbCh0aGF0LCBhcmdzWzBdLCBhcmdzWzFdKTtcbiAgICBjYXNlIDM6IHJldHVybiB1biA/IGZuKGFyZ3NbMF0sIGFyZ3NbMV0sIGFyZ3NbMl0pXG4gICAgICAgICAgICAgICAgICAgICAgOiBmbi5jYWxsKHRoYXQsIGFyZ3NbMF0sIGFyZ3NbMV0sIGFyZ3NbMl0pO1xuICAgIGNhc2UgNDogcmV0dXJuIHVuID8gZm4oYXJnc1swXSwgYXJnc1sxXSwgYXJnc1syXSwgYXJnc1szXSlcbiAgICAgICAgICAgICAgICAgICAgICA6IGZuLmNhbGwodGhhdCwgYXJnc1swXSwgYXJnc1sxXSwgYXJnc1syXSwgYXJnc1szXSk7XG4gIH0gcmV0dXJuIGZuLmFwcGx5KHRoYXQsIGFyZ3MpO1xufTtcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vbm9kZV9tb2R1bGVzL19jb3JlLWpzQDIuNS4zQGNvcmUtanMvbGlicmFyeS9tb2R1bGVzL19pbnZva2UuanNcbi8vIG1vZHVsZSBpZCA9IDEwNFxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJ2YXIgZ2xvYmFsID0gcmVxdWlyZSgnLi9fZ2xvYmFsJyk7XG52YXIgbWFjcm90YXNrID0gcmVxdWlyZSgnLi9fdGFzaycpLnNldDtcbnZhciBPYnNlcnZlciA9IGdsb2JhbC5NdXRhdGlvbk9ic2VydmVyIHx8IGdsb2JhbC5XZWJLaXRNdXRhdGlvbk9ic2VydmVyO1xudmFyIHByb2Nlc3MgPSBnbG9iYWwucHJvY2VzcztcbnZhciBQcm9taXNlID0gZ2xvYmFsLlByb21pc2U7XG52YXIgaXNOb2RlID0gcmVxdWlyZSgnLi9fY29mJykocHJvY2VzcykgPT0gJ3Byb2Nlc3MnO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uICgpIHtcbiAgdmFyIGhlYWQsIGxhc3QsIG5vdGlmeTtcblxuICB2YXIgZmx1c2ggPSBmdW5jdGlvbiAoKSB7XG4gICAgdmFyIHBhcmVudCwgZm47XG4gICAgaWYgKGlzTm9kZSAmJiAocGFyZW50ID0gcHJvY2Vzcy5kb21haW4pKSBwYXJlbnQuZXhpdCgpO1xuICAgIHdoaWxlIChoZWFkKSB7XG4gICAgICBmbiA9IGhlYWQuZm47XG4gICAgICBoZWFkID0gaGVhZC5uZXh0O1xuICAgICAgdHJ5IHtcbiAgICAgICAgZm4oKTtcbiAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgaWYgKGhlYWQpIG5vdGlmeSgpO1xuICAgICAgICBlbHNlIGxhc3QgPSB1bmRlZmluZWQ7XG4gICAgICAgIHRocm93IGU7XG4gICAgICB9XG4gICAgfSBsYXN0ID0gdW5kZWZpbmVkO1xuICAgIGlmIChwYXJlbnQpIHBhcmVudC5lbnRlcigpO1xuICB9O1xuXG4gIC8vIE5vZGUuanNcbiAgaWYgKGlzTm9kZSkge1xuICAgIG5vdGlmeSA9IGZ1bmN0aW9uICgpIHtcbiAgICAgIHByb2Nlc3MubmV4dFRpY2soZmx1c2gpO1xuICAgIH07XG4gIC8vIGJyb3dzZXJzIHdpdGggTXV0YXRpb25PYnNlcnZlciwgZXhjZXB0IGlPUyBTYWZhcmkgLSBodHRwczovL2dpdGh1Yi5jb20vemxvaXJvY2svY29yZS1qcy9pc3N1ZXMvMzM5XG4gIH0gZWxzZSBpZiAoT2JzZXJ2ZXIgJiYgIShnbG9iYWwubmF2aWdhdG9yICYmIGdsb2JhbC5uYXZpZ2F0b3Iuc3RhbmRhbG9uZSkpIHtcbiAgICB2YXIgdG9nZ2xlID0gdHJ1ZTtcbiAgICB2YXIgbm9kZSA9IGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKCcnKTtcbiAgICBuZXcgT2JzZXJ2ZXIoZmx1c2gpLm9ic2VydmUobm9kZSwgeyBjaGFyYWN0ZXJEYXRhOiB0cnVlIH0pOyAvLyBlc2xpbnQtZGlzYWJsZS1saW5lIG5vLW5ld1xuICAgIG5vdGlmeSA9IGZ1bmN0aW9uICgpIHtcbiAgICAgIG5vZGUuZGF0YSA9IHRvZ2dsZSA9ICF0b2dnbGU7XG4gICAgfTtcbiAgLy8gZW52aXJvbm1lbnRzIHdpdGggbWF5YmUgbm9uLWNvbXBsZXRlbHkgY29ycmVjdCwgYnV0IGV4aXN0ZW50IFByb21pc2VcbiAgfSBlbHNlIGlmIChQcm9taXNlICYmIFByb21pc2UucmVzb2x2ZSkge1xuICAgIHZhciBwcm9taXNlID0gUHJvbWlzZS5yZXNvbHZlKCk7XG4gICAgbm90aWZ5ID0gZnVuY3Rpb24gKCkge1xuICAgICAgcHJvbWlzZS50aGVuKGZsdXNoKTtcbiAgICB9O1xuICAvLyBmb3Igb3RoZXIgZW52aXJvbm1lbnRzIC0gbWFjcm90YXNrIGJhc2VkIG9uOlxuICAvLyAtIHNldEltbWVkaWF0ZVxuICAvLyAtIE1lc3NhZ2VDaGFubmVsXG4gIC8vIC0gd2luZG93LnBvc3RNZXNzYWdcbiAgLy8gLSBvbnJlYWR5c3RhdGVjaGFuZ2VcbiAgLy8gLSBzZXRUaW1lb3V0XG4gIH0gZWxzZSB7XG4gICAgbm90aWZ5ID0gZnVuY3Rpb24gKCkge1xuICAgICAgLy8gc3RyYW5nZSBJRSArIHdlYnBhY2sgZGV2IHNlcnZlciBidWcgLSB1c2UgLmNhbGwoZ2xvYmFsKVxuICAgICAgbWFjcm90YXNrLmNhbGwoZ2xvYmFsLCBmbHVzaCk7XG4gICAgfTtcbiAgfVxuXG4gIHJldHVybiBmdW5jdGlvbiAoZm4pIHtcbiAgICB2YXIgdGFzayA9IHsgZm46IGZuLCBuZXh0OiB1bmRlZmluZWQgfTtcbiAgICBpZiAobGFzdCkgbGFzdC5uZXh0ID0gdGFzaztcbiAgICBpZiAoIWhlYWQpIHtcbiAgICAgIGhlYWQgPSB0YXNrO1xuICAgICAgbm90aWZ5KCk7XG4gICAgfSBsYXN0ID0gdGFzaztcbiAgfTtcbn07XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL25vZGVfbW9kdWxlcy9fY29yZS1qc0AyLjUuM0Bjb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9fbWljcm90YXNrLmpzXG4vLyBtb2R1bGUgaWQgPSAxMDVcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiLy8gaHR0cHM6Ly9naXRodWIuY29tL3RjMzkvcHJvcG9zYWwtcHJvbWlzZS1maW5hbGx5XG4ndXNlIHN0cmljdCc7XG52YXIgJGV4cG9ydCA9IHJlcXVpcmUoJy4vX2V4cG9ydCcpO1xudmFyIGNvcmUgPSByZXF1aXJlKCcuL19jb3JlJyk7XG52YXIgZ2xvYmFsID0gcmVxdWlyZSgnLi9fZ2xvYmFsJyk7XG52YXIgc3BlY2llc0NvbnN0cnVjdG9yID0gcmVxdWlyZSgnLi9fc3BlY2llcy1jb25zdHJ1Y3RvcicpO1xudmFyIHByb21pc2VSZXNvbHZlID0gcmVxdWlyZSgnLi9fcHJvbWlzZS1yZXNvbHZlJyk7XG5cbiRleHBvcnQoJGV4cG9ydC5QICsgJGV4cG9ydC5SLCAnUHJvbWlzZScsIHsgJ2ZpbmFsbHknOiBmdW5jdGlvbiAob25GaW5hbGx5KSB7XG4gIHZhciBDID0gc3BlY2llc0NvbnN0cnVjdG9yKHRoaXMsIGNvcmUuUHJvbWlzZSB8fCBnbG9iYWwuUHJvbWlzZSk7XG4gIHZhciBpc0Z1bmN0aW9uID0gdHlwZW9mIG9uRmluYWxseSA9PSAnZnVuY3Rpb24nO1xuICByZXR1cm4gdGhpcy50aGVuKFxuICAgIGlzRnVuY3Rpb24gPyBmdW5jdGlvbiAoeCkge1xuICAgICAgcmV0dXJuIHByb21pc2VSZXNvbHZlKEMsIG9uRmluYWxseSgpKS50aGVuKGZ1bmN0aW9uICgpIHsgcmV0dXJuIHg7IH0pO1xuICAgIH0gOiBvbkZpbmFsbHksXG4gICAgaXNGdW5jdGlvbiA/IGZ1bmN0aW9uIChlKSB7XG4gICAgICByZXR1cm4gcHJvbWlzZVJlc29sdmUoQywgb25GaW5hbGx5KCkpLnRoZW4oZnVuY3Rpb24gKCkgeyB0aHJvdyBlOyB9KTtcbiAgICB9IDogb25GaW5hbGx5XG4gICk7XG59IH0pO1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9ub2RlX21vZHVsZXMvX2NvcmUtanNAMi41LjNAY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvZXM3LnByb21pc2UuZmluYWxseS5qc1xuLy8gbW9kdWxlIGlkID0gMTA2XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIid1c2Ugc3RyaWN0Jztcbi8vIGh0dHBzOi8vZ2l0aHViLmNvbS90YzM5L3Byb3Bvc2FsLXByb21pc2UtdHJ5XG52YXIgJGV4cG9ydCA9IHJlcXVpcmUoJy4vX2V4cG9ydCcpO1xudmFyIG5ld1Byb21pc2VDYXBhYmlsaXR5ID0gcmVxdWlyZSgnLi9fbmV3LXByb21pc2UtY2FwYWJpbGl0eScpO1xudmFyIHBlcmZvcm0gPSByZXF1aXJlKCcuL19wZXJmb3JtJyk7XG5cbiRleHBvcnQoJGV4cG9ydC5TLCAnUHJvbWlzZScsIHsgJ3RyeSc6IGZ1bmN0aW9uIChjYWxsYmFja2ZuKSB7XG4gIHZhciBwcm9taXNlQ2FwYWJpbGl0eSA9IG5ld1Byb21pc2VDYXBhYmlsaXR5LmYodGhpcyk7XG4gIHZhciByZXN1bHQgPSBwZXJmb3JtKGNhbGxiYWNrZm4pO1xuICAocmVzdWx0LmUgPyBwcm9taXNlQ2FwYWJpbGl0eS5yZWplY3QgOiBwcm9taXNlQ2FwYWJpbGl0eS5yZXNvbHZlKShyZXN1bHQudik7XG4gIHJldHVybiBwcm9taXNlQ2FwYWJpbGl0eS5wcm9taXNlO1xufSB9KTtcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vbm9kZV9tb2R1bGVzL19jb3JlLWpzQDIuNS4zQGNvcmUtanMvbGlicmFyeS9tb2R1bGVzL2VzNy5wcm9taXNlLnRyeS5qc1xuLy8gbW9kdWxlIGlkID0gMTA3XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIm1vZHVsZS5leHBvcnRzID0geyBcImRlZmF1bHRcIjogcmVxdWlyZShcImNvcmUtanMvbGlicmFyeS9mbi9pcy1pdGVyYWJsZVwiKSwgX19lc01vZHVsZTogdHJ1ZSB9O1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vbm9kZV9tb2R1bGVzL19iYWJlbC1ydW50aW1lQDYuMjYuMEBiYWJlbC1ydW50aW1lL2NvcmUtanMvaXMtaXRlcmFibGUuanNcbi8vIG1vZHVsZSBpZCA9IDEwOFxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJyZXF1aXJlKCcuLi9tb2R1bGVzL3dlYi5kb20uaXRlcmFibGUnKTtcbnJlcXVpcmUoJy4uL21vZHVsZXMvZXM2LnN0cmluZy5pdGVyYXRvcicpO1xubW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKCcuLi9tb2R1bGVzL2NvcmUuaXMtaXRlcmFibGUnKTtcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vbm9kZV9tb2R1bGVzL19jb3JlLWpzQDIuNS4zQGNvcmUtanMvbGlicmFyeS9mbi9pcy1pdGVyYWJsZS5qc1xuLy8gbW9kdWxlIGlkID0gMTA5XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsInZhciBjbGFzc29mID0gcmVxdWlyZSgnLi9fY2xhc3NvZicpO1xudmFyIElURVJBVE9SID0gcmVxdWlyZSgnLi9fd2tzJykoJ2l0ZXJhdG9yJyk7XG52YXIgSXRlcmF0b3JzID0gcmVxdWlyZSgnLi9faXRlcmF0b3JzJyk7XG5tb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoJy4vX2NvcmUnKS5pc0l0ZXJhYmxlID0gZnVuY3Rpb24gKGl0KSB7XG4gIHZhciBPID0gT2JqZWN0KGl0KTtcbiAgcmV0dXJuIE9bSVRFUkFUT1JdICE9PSB1bmRlZmluZWRcbiAgICB8fCAnQEBpdGVyYXRvcicgaW4gT1xuICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby1wcm90b3R5cGUtYnVpbHRpbnNcbiAgICB8fCBJdGVyYXRvcnMuaGFzT3duUHJvcGVydHkoY2xhc3NvZihPKSk7XG59O1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9ub2RlX21vZHVsZXMvX2NvcmUtanNAMi41LjNAY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvY29yZS5pcy1pdGVyYWJsZS5qc1xuLy8gbW9kdWxlIGlkID0gMTEwXG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsInJlcXVpcmUoJy4uL21vZHVsZXMvd2ViLmRvbS5pdGVyYWJsZScpO1xucmVxdWlyZSgnLi4vbW9kdWxlcy9lczYuc3RyaW5nLml0ZXJhdG9yJyk7XG5tb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoJy4uL21vZHVsZXMvY29yZS5nZXQtaXRlcmF0b3InKTtcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vbm9kZV9tb2R1bGVzL19jb3JlLWpzQDIuNS4zQGNvcmUtanMvbGlicmFyeS9mbi9nZXQtaXRlcmF0b3IuanNcbi8vIG1vZHVsZSBpZCA9IDExMVxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJ2YXIgYW5PYmplY3QgPSByZXF1aXJlKCcuL19hbi1vYmplY3QnKTtcbnZhciBnZXQgPSByZXF1aXJlKCcuL2NvcmUuZ2V0LWl0ZXJhdG9yLW1ldGhvZCcpO1xubW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKCcuL19jb3JlJykuZ2V0SXRlcmF0b3IgPSBmdW5jdGlvbiAoaXQpIHtcbiAgdmFyIGl0ZXJGbiA9IGdldChpdCk7XG4gIGlmICh0eXBlb2YgaXRlckZuICE9ICdmdW5jdGlvbicpIHRocm93IFR5cGVFcnJvcihpdCArICcgaXMgbm90IGl0ZXJhYmxlIScpO1xuICByZXR1cm4gYW5PYmplY3QoaXRlckZuLmNhbGwoaXQpKTtcbn07XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL25vZGVfbW9kdWxlcy9fY29yZS1qc0AyLjUuM0Bjb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9jb3JlLmdldC1pdGVyYXRvci5qc1xuLy8gbW9kdWxlIGlkID0gMTEyXG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIlwidXNlIHN0cmljdFwiO1xuXG5leHBvcnRzLl9fZXNNb2R1bGUgPSB0cnVlO1xuXG52YXIgX3Byb21pc2UgPSByZXF1aXJlKFwiLi4vY29yZS1qcy9wcm9taXNlXCIpO1xuXG52YXIgX3Byb21pc2UyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfcHJvbWlzZSk7XG5cbmZ1bmN0aW9uIF9pbnRlcm9wUmVxdWlyZURlZmF1bHQob2JqKSB7IHJldHVybiBvYmogJiYgb2JqLl9fZXNNb2R1bGUgPyBvYmogOiB7IGRlZmF1bHQ6IG9iaiB9OyB9XG5cbmV4cG9ydHMuZGVmYXVsdCA9IGZ1bmN0aW9uIChmbikge1xuICByZXR1cm4gZnVuY3Rpb24gKCkge1xuICAgIHZhciBnZW4gPSBmbi5hcHBseSh0aGlzLCBhcmd1bWVudHMpO1xuICAgIHJldHVybiBuZXcgX3Byb21pc2UyLmRlZmF1bHQoZnVuY3Rpb24gKHJlc29sdmUsIHJlamVjdCkge1xuICAgICAgZnVuY3Rpb24gc3RlcChrZXksIGFyZykge1xuICAgICAgICB0cnkge1xuICAgICAgICAgIHZhciBpbmZvID0gZ2VuW2tleV0oYXJnKTtcbiAgICAgICAgICB2YXIgdmFsdWUgPSBpbmZvLnZhbHVlO1xuICAgICAgICB9IGNhdGNoIChlcnJvcikge1xuICAgICAgICAgIHJlamVjdChlcnJvcik7XG4gICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKGluZm8uZG9uZSkge1xuICAgICAgICAgIHJlc29sdmUodmFsdWUpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIHJldHVybiBfcHJvbWlzZTIuZGVmYXVsdC5yZXNvbHZlKHZhbHVlKS50aGVuKGZ1bmN0aW9uICh2YWx1ZSkge1xuICAgICAgICAgICAgc3RlcChcIm5leHRcIiwgdmFsdWUpO1xuICAgICAgICAgIH0sIGZ1bmN0aW9uIChlcnIpIHtcbiAgICAgICAgICAgIHN0ZXAoXCJ0aHJvd1wiLCBlcnIpO1xuICAgICAgICAgIH0pO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIHJldHVybiBzdGVwKFwibmV4dFwiKTtcbiAgICB9KTtcbiAgfTtcbn07XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9ub2RlX21vZHVsZXMvX2JhYmVsLXJ1bnRpbWVANi4yNi4wQGJhYmVsLXJ1bnRpbWUvaGVscGVycy9hc3luY1RvR2VuZXJhdG9yLmpzXG4vLyBtb2R1bGUgaWQgPSAxMTNcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiZXhwb3J0IGRlZmF1bHQgY2xhc3MgVGltZXIge1xyXG4gICAgY29uc3RydWN0b3IoZGVsdGFUaW1lID0gMS82MCkge1xyXG4gICAgICAgIGxldCBhY2N1bXVsYXRlZFRpbWUgPSAwO1xyXG4gICAgICAgIC8vIGxldCBsYXN0VGltZSA9IDA7XHJcbiAgICAgICAgbGV0IGxhc3RUaW1lID0gcGVyZm9ybWFuY2Uubm93KCk7XHJcblxyXG4gICAgICAgIHRoaXMudXBkYXRlUHJveHkgPSAgKHRpbWUpID0+IHtcclxuICAgICAgICAgICAgYWNjdW11bGF0ZWRUaW1lICs9ICh0aW1lIC0gbGFzdFRpbWUpIC8gMTAwMDtcclxuXHJcbiAgICAgICAgICAgIGlmIChhY2N1bXVsYXRlZFRpbWUgPiAxKSB7XHJcbiAgICAgICAgICAgICAgICAvKiBBIGhhY2sgdG8gU29sdmUgdGhlIHRpbWUgYWNjdW11bGF0ZVxyXG4gICAgICAgICAgICAgICAgKiB3aGVuIGl0IGlzIHJ1bm5pbmcgYmFja2dyb3VuZC5cclxuICAgICAgICAgICAgICAgICogU28gdGhhdCBvdXIgY29tcHV0ZXIgd29udCBiZSBzbG93IGRvd24gYnkgdGhpcyxcclxuICAgICAgICAgICAgICAgICogYWZ0ZXIgbG9uZyB0aW1lIG9mIHJ1bm5pbmcgdGhpcyBpbiBiYWNrZ3JvdW5kLiovXHJcbiAgICAgICAgICAgICAgICBhY2N1bXVsYXRlZFRpbWUgPSAxO1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAvLyBjb25zb2xlLmxvZyhhY2N1bXVsYXRlZFRpbWUsZGVsdGFUaW1lKVxyXG4gICAgICAgICAgICAvLyBUT0RPOkJVRyBUaGUgZmlyc3QgdGltZSB1cGRhdGUgdG9vIG1hbnkgdGltZXMgaWYgdGhlIGxhc3RUaW1lID0gMCAuXHJcbiAgICAgICAgICAgIHdoaWxlIChhY2N1bXVsYXRlZFRpbWUgPiBkZWx0YVRpbWUpIHtcclxuICAgICAgICAgICAgICAgIHRoaXMudXBkYXRlKGRlbHRhVGltZSk7XHJcblxyXG4gICAgICAgICAgICAgICAgYWNjdW11bGF0ZWRUaW1lIC09IGRlbHRhVGltZTtcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgbGFzdFRpbWUgPSB0aW1lO1xyXG5cclxuICAgICAgICAgICAgdGhpcy5lbnF1ZXVlKCk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIGVucXVldWUoKSB7XHJcbiAgICAgICAgcmVxdWVzdEFuaW1hdGlvbkZyYW1lKHRoaXMudXBkYXRlUHJveHkpO1xyXG4gICAgfVxyXG5cclxuICAgIHN0YXJ0KCkge1xyXG4gICAgICAgIHRoaXMuZW5xdWV1ZSgpO1xyXG4gICAgfVxyXG59XHJcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3B1YmxpYy9qcy9UaW1lci5qcyIsIm1vZHVsZS5leHBvcnRzID0geyBcImRlZmF1bHRcIjogcmVxdWlyZShcImNvcmUtanMvbGlicmFyeS9mbi9vYmplY3QvZGVmaW5lLXByb3BlcnR5XCIpLCBfX2VzTW9kdWxlOiB0cnVlIH07XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9ub2RlX21vZHVsZXMvX2JhYmVsLXJ1bnRpbWVANi4yNi4wQGJhYmVsLXJ1bnRpbWUvY29yZS1qcy9vYmplY3QvZGVmaW5lLXByb3BlcnR5LmpzXG4vLyBtb2R1bGUgaWQgPSAxMTVcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwicmVxdWlyZSgnLi4vLi4vbW9kdWxlcy9lczYub2JqZWN0LmRlZmluZS1wcm9wZXJ0eScpO1xudmFyICRPYmplY3QgPSByZXF1aXJlKCcuLi8uLi9tb2R1bGVzL19jb3JlJykuT2JqZWN0O1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiBkZWZpbmVQcm9wZXJ0eShpdCwga2V5LCBkZXNjKSB7XG4gIHJldHVybiAkT2JqZWN0LmRlZmluZVByb3BlcnR5KGl0LCBrZXksIGRlc2MpO1xufTtcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vbm9kZV9tb2R1bGVzL19jb3JlLWpzQDIuNS4zQGNvcmUtanMvbGlicmFyeS9mbi9vYmplY3QvZGVmaW5lLXByb3BlcnR5LmpzXG4vLyBtb2R1bGUgaWQgPSAxMTZcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwidmFyICRleHBvcnQgPSByZXF1aXJlKCcuL19leHBvcnQnKTtcbi8vIDE5LjEuMi40IC8gMTUuMi4zLjYgT2JqZWN0LmRlZmluZVByb3BlcnR5KE8sIFAsIEF0dHJpYnV0ZXMpXG4kZXhwb3J0KCRleHBvcnQuUyArICRleHBvcnQuRiAqICFyZXF1aXJlKCcuL19kZXNjcmlwdG9ycycpLCAnT2JqZWN0JywgeyBkZWZpbmVQcm9wZXJ0eTogcmVxdWlyZSgnLi9fb2JqZWN0LWRwJykuZiB9KTtcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vbm9kZV9tb2R1bGVzL19jb3JlLWpzQDIuNS4zQGNvcmUtanMvbGlicmFyeS9tb2R1bGVzL2VzNi5vYmplY3QuZGVmaW5lLXByb3BlcnR5LmpzXG4vLyBtb2R1bGUgaWQgPSAxMTdcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiaW1wb3J0IHtWZWMyfSBmcm9tICcuL21hdGguanMnO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgQ2FtZXJhIHtcclxuICAgIGNvbnN0cnVjdG9yKCkge1xyXG4gICAgICAgIHRoaXMucG9zID0gbmV3IFZlYzIoMCwwKTtcclxuICAgICAgICB0aGlzLnNpemUgPSBuZXcgVmVjMigyNTYsMjQwKTtcclxuICAgIH1cclxufVxyXG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9wdWJsaWMvanMvQ2FtZXJhLmpzIiwicmVxdWlyZSgnLi4vLi4vbW9kdWxlcy9lczYuc3ltYm9sJyk7XG5yZXF1aXJlKCcuLi8uLi9tb2R1bGVzL2VzNi5vYmplY3QudG8tc3RyaW5nJyk7XG5yZXF1aXJlKCcuLi8uLi9tb2R1bGVzL2VzNy5zeW1ib2wuYXN5bmMtaXRlcmF0b3InKTtcbnJlcXVpcmUoJy4uLy4uL21vZHVsZXMvZXM3LnN5bWJvbC5vYnNlcnZhYmxlJyk7XG5tb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoJy4uLy4uL21vZHVsZXMvX2NvcmUnKS5TeW1ib2w7XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL25vZGVfbW9kdWxlcy9fY29yZS1qc0AyLjUuM0Bjb3JlLWpzL2xpYnJhcnkvZm4vc3ltYm9sL2luZGV4LmpzXG4vLyBtb2R1bGUgaWQgPSAxMTlcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiJ3VzZSBzdHJpY3QnO1xuLy8gRUNNQVNjcmlwdCA2IHN5bWJvbHMgc2hpbVxudmFyIGdsb2JhbCA9IHJlcXVpcmUoJy4vX2dsb2JhbCcpO1xudmFyIGhhcyA9IHJlcXVpcmUoJy4vX2hhcycpO1xudmFyIERFU0NSSVBUT1JTID0gcmVxdWlyZSgnLi9fZGVzY3JpcHRvcnMnKTtcbnZhciAkZXhwb3J0ID0gcmVxdWlyZSgnLi9fZXhwb3J0Jyk7XG52YXIgcmVkZWZpbmUgPSByZXF1aXJlKCcuL19yZWRlZmluZScpO1xudmFyIE1FVEEgPSByZXF1aXJlKCcuL19tZXRhJykuS0VZO1xudmFyICRmYWlscyA9IHJlcXVpcmUoJy4vX2ZhaWxzJyk7XG52YXIgc2hhcmVkID0gcmVxdWlyZSgnLi9fc2hhcmVkJyk7XG52YXIgc2V0VG9TdHJpbmdUYWcgPSByZXF1aXJlKCcuL19zZXQtdG8tc3RyaW5nLXRhZycpO1xudmFyIHVpZCA9IHJlcXVpcmUoJy4vX3VpZCcpO1xudmFyIHdrcyA9IHJlcXVpcmUoJy4vX3drcycpO1xudmFyIHdrc0V4dCA9IHJlcXVpcmUoJy4vX3drcy1leHQnKTtcbnZhciB3a3NEZWZpbmUgPSByZXF1aXJlKCcuL193a3MtZGVmaW5lJyk7XG52YXIgZW51bUtleXMgPSByZXF1aXJlKCcuL19lbnVtLWtleXMnKTtcbnZhciBpc0FycmF5ID0gcmVxdWlyZSgnLi9faXMtYXJyYXknKTtcbnZhciBhbk9iamVjdCA9IHJlcXVpcmUoJy4vX2FuLW9iamVjdCcpO1xudmFyIGlzT2JqZWN0ID0gcmVxdWlyZSgnLi9faXMtb2JqZWN0Jyk7XG52YXIgdG9JT2JqZWN0ID0gcmVxdWlyZSgnLi9fdG8taW9iamVjdCcpO1xudmFyIHRvUHJpbWl0aXZlID0gcmVxdWlyZSgnLi9fdG8tcHJpbWl0aXZlJyk7XG52YXIgY3JlYXRlRGVzYyA9IHJlcXVpcmUoJy4vX3Byb3BlcnR5LWRlc2MnKTtcbnZhciBfY3JlYXRlID0gcmVxdWlyZSgnLi9fb2JqZWN0LWNyZWF0ZScpO1xudmFyIGdPUE5FeHQgPSByZXF1aXJlKCcuL19vYmplY3QtZ29wbi1leHQnKTtcbnZhciAkR09QRCA9IHJlcXVpcmUoJy4vX29iamVjdC1nb3BkJyk7XG52YXIgJERQID0gcmVxdWlyZSgnLi9fb2JqZWN0LWRwJyk7XG52YXIgJGtleXMgPSByZXF1aXJlKCcuL19vYmplY3Qta2V5cycpO1xudmFyIGdPUEQgPSAkR09QRC5mO1xudmFyIGRQID0gJERQLmY7XG52YXIgZ09QTiA9IGdPUE5FeHQuZjtcbnZhciAkU3ltYm9sID0gZ2xvYmFsLlN5bWJvbDtcbnZhciAkSlNPTiA9IGdsb2JhbC5KU09OO1xudmFyIF9zdHJpbmdpZnkgPSAkSlNPTiAmJiAkSlNPTi5zdHJpbmdpZnk7XG52YXIgUFJPVE9UWVBFID0gJ3Byb3RvdHlwZSc7XG52YXIgSElEREVOID0gd2tzKCdfaGlkZGVuJyk7XG52YXIgVE9fUFJJTUlUSVZFID0gd2tzKCd0b1ByaW1pdGl2ZScpO1xudmFyIGlzRW51bSA9IHt9LnByb3BlcnR5SXNFbnVtZXJhYmxlO1xudmFyIFN5bWJvbFJlZ2lzdHJ5ID0gc2hhcmVkKCdzeW1ib2wtcmVnaXN0cnknKTtcbnZhciBBbGxTeW1ib2xzID0gc2hhcmVkKCdzeW1ib2xzJyk7XG52YXIgT1BTeW1ib2xzID0gc2hhcmVkKCdvcC1zeW1ib2xzJyk7XG52YXIgT2JqZWN0UHJvdG8gPSBPYmplY3RbUFJPVE9UWVBFXTtcbnZhciBVU0VfTkFUSVZFID0gdHlwZW9mICRTeW1ib2wgPT0gJ2Z1bmN0aW9uJztcbnZhciBRT2JqZWN0ID0gZ2xvYmFsLlFPYmplY3Q7XG4vLyBEb24ndCB1c2Ugc2V0dGVycyBpbiBRdCBTY3JpcHQsIGh0dHBzOi8vZ2l0aHViLmNvbS96bG9pcm9jay9jb3JlLWpzL2lzc3Vlcy8xNzNcbnZhciBzZXR0ZXIgPSAhUU9iamVjdCB8fCAhUU9iamVjdFtQUk9UT1RZUEVdIHx8ICFRT2JqZWN0W1BST1RPVFlQRV0uZmluZENoaWxkO1xuXG4vLyBmYWxsYmFjayBmb3Igb2xkIEFuZHJvaWQsIGh0dHBzOi8vY29kZS5nb29nbGUuY29tL3AvdjgvaXNzdWVzL2RldGFpbD9pZD02ODdcbnZhciBzZXRTeW1ib2xEZXNjID0gREVTQ1JJUFRPUlMgJiYgJGZhaWxzKGZ1bmN0aW9uICgpIHtcbiAgcmV0dXJuIF9jcmVhdGUoZFAoe30sICdhJywge1xuICAgIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gZFAodGhpcywgJ2EnLCB7IHZhbHVlOiA3IH0pLmE7IH1cbiAgfSkpLmEgIT0gNztcbn0pID8gZnVuY3Rpb24gKGl0LCBrZXksIEQpIHtcbiAgdmFyIHByb3RvRGVzYyA9IGdPUEQoT2JqZWN0UHJvdG8sIGtleSk7XG4gIGlmIChwcm90b0Rlc2MpIGRlbGV0ZSBPYmplY3RQcm90b1trZXldO1xuICBkUChpdCwga2V5LCBEKTtcbiAgaWYgKHByb3RvRGVzYyAmJiBpdCAhPT0gT2JqZWN0UHJvdG8pIGRQKE9iamVjdFByb3RvLCBrZXksIHByb3RvRGVzYyk7XG59IDogZFA7XG5cbnZhciB3cmFwID0gZnVuY3Rpb24gKHRhZykge1xuICB2YXIgc3ltID0gQWxsU3ltYm9sc1t0YWddID0gX2NyZWF0ZSgkU3ltYm9sW1BST1RPVFlQRV0pO1xuICBzeW0uX2sgPSB0YWc7XG4gIHJldHVybiBzeW07XG59O1xuXG52YXIgaXNTeW1ib2wgPSBVU0VfTkFUSVZFICYmIHR5cGVvZiAkU3ltYm9sLml0ZXJhdG9yID09ICdzeW1ib2wnID8gZnVuY3Rpb24gKGl0KSB7XG4gIHJldHVybiB0eXBlb2YgaXQgPT0gJ3N5bWJvbCc7XG59IDogZnVuY3Rpb24gKGl0KSB7XG4gIHJldHVybiBpdCBpbnN0YW5jZW9mICRTeW1ib2w7XG59O1xuXG52YXIgJGRlZmluZVByb3BlcnR5ID0gZnVuY3Rpb24gZGVmaW5lUHJvcGVydHkoaXQsIGtleSwgRCkge1xuICBpZiAoaXQgPT09IE9iamVjdFByb3RvKSAkZGVmaW5lUHJvcGVydHkoT1BTeW1ib2xzLCBrZXksIEQpO1xuICBhbk9iamVjdChpdCk7XG4gIGtleSA9IHRvUHJpbWl0aXZlKGtleSwgdHJ1ZSk7XG4gIGFuT2JqZWN0KEQpO1xuICBpZiAoaGFzKEFsbFN5bWJvbHMsIGtleSkpIHtcbiAgICBpZiAoIUQuZW51bWVyYWJsZSkge1xuICAgICAgaWYgKCFoYXMoaXQsIEhJRERFTikpIGRQKGl0LCBISURERU4sIGNyZWF0ZURlc2MoMSwge30pKTtcbiAgICAgIGl0W0hJRERFTl1ba2V5XSA9IHRydWU7XG4gICAgfSBlbHNlIHtcbiAgICAgIGlmIChoYXMoaXQsIEhJRERFTikgJiYgaXRbSElEREVOXVtrZXldKSBpdFtISURERU5dW2tleV0gPSBmYWxzZTtcbiAgICAgIEQgPSBfY3JlYXRlKEQsIHsgZW51bWVyYWJsZTogY3JlYXRlRGVzYygwLCBmYWxzZSkgfSk7XG4gICAgfSByZXR1cm4gc2V0U3ltYm9sRGVzYyhpdCwga2V5LCBEKTtcbiAgfSByZXR1cm4gZFAoaXQsIGtleSwgRCk7XG59O1xudmFyICRkZWZpbmVQcm9wZXJ0aWVzID0gZnVuY3Rpb24gZGVmaW5lUHJvcGVydGllcyhpdCwgUCkge1xuICBhbk9iamVjdChpdCk7XG4gIHZhciBrZXlzID0gZW51bUtleXMoUCA9IHRvSU9iamVjdChQKSk7XG4gIHZhciBpID0gMDtcbiAgdmFyIGwgPSBrZXlzLmxlbmd0aDtcbiAgdmFyIGtleTtcbiAgd2hpbGUgKGwgPiBpKSAkZGVmaW5lUHJvcGVydHkoaXQsIGtleSA9IGtleXNbaSsrXSwgUFtrZXldKTtcbiAgcmV0dXJuIGl0O1xufTtcbnZhciAkY3JlYXRlID0gZnVuY3Rpb24gY3JlYXRlKGl0LCBQKSB7XG4gIHJldHVybiBQID09PSB1bmRlZmluZWQgPyBfY3JlYXRlKGl0KSA6ICRkZWZpbmVQcm9wZXJ0aWVzKF9jcmVhdGUoaXQpLCBQKTtcbn07XG52YXIgJHByb3BlcnR5SXNFbnVtZXJhYmxlID0gZnVuY3Rpb24gcHJvcGVydHlJc0VudW1lcmFibGUoa2V5KSB7XG4gIHZhciBFID0gaXNFbnVtLmNhbGwodGhpcywga2V5ID0gdG9QcmltaXRpdmUoa2V5LCB0cnVlKSk7XG4gIGlmICh0aGlzID09PSBPYmplY3RQcm90byAmJiBoYXMoQWxsU3ltYm9scywga2V5KSAmJiAhaGFzKE9QU3ltYm9scywga2V5KSkgcmV0dXJuIGZhbHNlO1xuICByZXR1cm4gRSB8fCAhaGFzKHRoaXMsIGtleSkgfHwgIWhhcyhBbGxTeW1ib2xzLCBrZXkpIHx8IGhhcyh0aGlzLCBISURERU4pICYmIHRoaXNbSElEREVOXVtrZXldID8gRSA6IHRydWU7XG59O1xudmFyICRnZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3IgPSBmdW5jdGlvbiBnZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3IoaXQsIGtleSkge1xuICBpdCA9IHRvSU9iamVjdChpdCk7XG4gIGtleSA9IHRvUHJpbWl0aXZlKGtleSwgdHJ1ZSk7XG4gIGlmIChpdCA9PT0gT2JqZWN0UHJvdG8gJiYgaGFzKEFsbFN5bWJvbHMsIGtleSkgJiYgIWhhcyhPUFN5bWJvbHMsIGtleSkpIHJldHVybjtcbiAgdmFyIEQgPSBnT1BEKGl0LCBrZXkpO1xuICBpZiAoRCAmJiBoYXMoQWxsU3ltYm9scywga2V5KSAmJiAhKGhhcyhpdCwgSElEREVOKSAmJiBpdFtISURERU5dW2tleV0pKSBELmVudW1lcmFibGUgPSB0cnVlO1xuICByZXR1cm4gRDtcbn07XG52YXIgJGdldE93blByb3BlcnR5TmFtZXMgPSBmdW5jdGlvbiBnZXRPd25Qcm9wZXJ0eU5hbWVzKGl0KSB7XG4gIHZhciBuYW1lcyA9IGdPUE4odG9JT2JqZWN0KGl0KSk7XG4gIHZhciByZXN1bHQgPSBbXTtcbiAgdmFyIGkgPSAwO1xuICB2YXIga2V5O1xuICB3aGlsZSAobmFtZXMubGVuZ3RoID4gaSkge1xuICAgIGlmICghaGFzKEFsbFN5bWJvbHMsIGtleSA9IG5hbWVzW2krK10pICYmIGtleSAhPSBISURERU4gJiYga2V5ICE9IE1FVEEpIHJlc3VsdC5wdXNoKGtleSk7XG4gIH0gcmV0dXJuIHJlc3VsdDtcbn07XG52YXIgJGdldE93blByb3BlcnR5U3ltYm9scyA9IGZ1bmN0aW9uIGdldE93blByb3BlcnR5U3ltYm9scyhpdCkge1xuICB2YXIgSVNfT1AgPSBpdCA9PT0gT2JqZWN0UHJvdG87XG4gIHZhciBuYW1lcyA9IGdPUE4oSVNfT1AgPyBPUFN5bWJvbHMgOiB0b0lPYmplY3QoaXQpKTtcbiAgdmFyIHJlc3VsdCA9IFtdO1xuICB2YXIgaSA9IDA7XG4gIHZhciBrZXk7XG4gIHdoaWxlIChuYW1lcy5sZW5ndGggPiBpKSB7XG4gICAgaWYgKGhhcyhBbGxTeW1ib2xzLCBrZXkgPSBuYW1lc1tpKytdKSAmJiAoSVNfT1AgPyBoYXMoT2JqZWN0UHJvdG8sIGtleSkgOiB0cnVlKSkgcmVzdWx0LnB1c2goQWxsU3ltYm9sc1trZXldKTtcbiAgfSByZXR1cm4gcmVzdWx0O1xufTtcblxuLy8gMTkuNC4xLjEgU3ltYm9sKFtkZXNjcmlwdGlvbl0pXG5pZiAoIVVTRV9OQVRJVkUpIHtcbiAgJFN5bWJvbCA9IGZ1bmN0aW9uIFN5bWJvbCgpIHtcbiAgICBpZiAodGhpcyBpbnN0YW5jZW9mICRTeW1ib2wpIHRocm93IFR5cGVFcnJvcignU3ltYm9sIGlzIG5vdCBhIGNvbnN0cnVjdG9yIScpO1xuICAgIHZhciB0YWcgPSB1aWQoYXJndW1lbnRzLmxlbmd0aCA+IDAgPyBhcmd1bWVudHNbMF0gOiB1bmRlZmluZWQpO1xuICAgIHZhciAkc2V0ID0gZnVuY3Rpb24gKHZhbHVlKSB7XG4gICAgICBpZiAodGhpcyA9PT0gT2JqZWN0UHJvdG8pICRzZXQuY2FsbChPUFN5bWJvbHMsIHZhbHVlKTtcbiAgICAgIGlmIChoYXModGhpcywgSElEREVOKSAmJiBoYXModGhpc1tISURERU5dLCB0YWcpKSB0aGlzW0hJRERFTl1bdGFnXSA9IGZhbHNlO1xuICAgICAgc2V0U3ltYm9sRGVzYyh0aGlzLCB0YWcsIGNyZWF0ZURlc2MoMSwgdmFsdWUpKTtcbiAgICB9O1xuICAgIGlmIChERVNDUklQVE9SUyAmJiBzZXR0ZXIpIHNldFN5bWJvbERlc2MoT2JqZWN0UHJvdG8sIHRhZywgeyBjb25maWd1cmFibGU6IHRydWUsIHNldDogJHNldCB9KTtcbiAgICByZXR1cm4gd3JhcCh0YWcpO1xuICB9O1xuICByZWRlZmluZSgkU3ltYm9sW1BST1RPVFlQRV0sICd0b1N0cmluZycsIGZ1bmN0aW9uIHRvU3RyaW5nKCkge1xuICAgIHJldHVybiB0aGlzLl9rO1xuICB9KTtcblxuICAkR09QRC5mID0gJGdldE93blByb3BlcnR5RGVzY3JpcHRvcjtcbiAgJERQLmYgPSAkZGVmaW5lUHJvcGVydHk7XG4gIHJlcXVpcmUoJy4vX29iamVjdC1nb3BuJykuZiA9IGdPUE5FeHQuZiA9ICRnZXRPd25Qcm9wZXJ0eU5hbWVzO1xuICByZXF1aXJlKCcuL19vYmplY3QtcGllJykuZiA9ICRwcm9wZXJ0eUlzRW51bWVyYWJsZTtcbiAgcmVxdWlyZSgnLi9fb2JqZWN0LWdvcHMnKS5mID0gJGdldE93blByb3BlcnR5U3ltYm9scztcblxuICBpZiAoREVTQ1JJUFRPUlMgJiYgIXJlcXVpcmUoJy4vX2xpYnJhcnknKSkge1xuICAgIHJlZGVmaW5lKE9iamVjdFByb3RvLCAncHJvcGVydHlJc0VudW1lcmFibGUnLCAkcHJvcGVydHlJc0VudW1lcmFibGUsIHRydWUpO1xuICB9XG5cbiAgd2tzRXh0LmYgPSBmdW5jdGlvbiAobmFtZSkge1xuICAgIHJldHVybiB3cmFwKHdrcyhuYW1lKSk7XG4gIH07XG59XG5cbiRleHBvcnQoJGV4cG9ydC5HICsgJGV4cG9ydC5XICsgJGV4cG9ydC5GICogIVVTRV9OQVRJVkUsIHsgU3ltYm9sOiAkU3ltYm9sIH0pO1xuXG5mb3IgKHZhciBlczZTeW1ib2xzID0gKFxuICAvLyAxOS40LjIuMiwgMTkuNC4yLjMsIDE5LjQuMi40LCAxOS40LjIuNiwgMTkuNC4yLjgsIDE5LjQuMi45LCAxOS40LjIuMTAsIDE5LjQuMi4xMSwgMTkuNC4yLjEyLCAxOS40LjIuMTMsIDE5LjQuMi4xNFxuICAnaGFzSW5zdGFuY2UsaXNDb25jYXRTcHJlYWRhYmxlLGl0ZXJhdG9yLG1hdGNoLHJlcGxhY2Usc2VhcmNoLHNwZWNpZXMsc3BsaXQsdG9QcmltaXRpdmUsdG9TdHJpbmdUYWcsdW5zY29wYWJsZXMnXG4pLnNwbGl0KCcsJyksIGogPSAwOyBlczZTeW1ib2xzLmxlbmd0aCA+IGo7KXdrcyhlczZTeW1ib2xzW2orK10pO1xuXG5mb3IgKHZhciB3ZWxsS25vd25TeW1ib2xzID0gJGtleXMod2tzLnN0b3JlKSwgayA9IDA7IHdlbGxLbm93blN5bWJvbHMubGVuZ3RoID4gazspIHdrc0RlZmluZSh3ZWxsS25vd25TeW1ib2xzW2srK10pO1xuXG4kZXhwb3J0KCRleHBvcnQuUyArICRleHBvcnQuRiAqICFVU0VfTkFUSVZFLCAnU3ltYm9sJywge1xuICAvLyAxOS40LjIuMSBTeW1ib2wuZm9yKGtleSlcbiAgJ2Zvcic6IGZ1bmN0aW9uIChrZXkpIHtcbiAgICByZXR1cm4gaGFzKFN5bWJvbFJlZ2lzdHJ5LCBrZXkgKz0gJycpXG4gICAgICA/IFN5bWJvbFJlZ2lzdHJ5W2tleV1cbiAgICAgIDogU3ltYm9sUmVnaXN0cnlba2V5XSA9ICRTeW1ib2woa2V5KTtcbiAgfSxcbiAgLy8gMTkuNC4yLjUgU3ltYm9sLmtleUZvcihzeW0pXG4gIGtleUZvcjogZnVuY3Rpb24ga2V5Rm9yKHN5bSkge1xuICAgIGlmICghaXNTeW1ib2woc3ltKSkgdGhyb3cgVHlwZUVycm9yKHN5bSArICcgaXMgbm90IGEgc3ltYm9sIScpO1xuICAgIGZvciAodmFyIGtleSBpbiBTeW1ib2xSZWdpc3RyeSkgaWYgKFN5bWJvbFJlZ2lzdHJ5W2tleV0gPT09IHN5bSkgcmV0dXJuIGtleTtcbiAgfSxcbiAgdXNlU2V0dGVyOiBmdW5jdGlvbiAoKSB7IHNldHRlciA9IHRydWU7IH0sXG4gIHVzZVNpbXBsZTogZnVuY3Rpb24gKCkgeyBzZXR0ZXIgPSBmYWxzZTsgfVxufSk7XG5cbiRleHBvcnQoJGV4cG9ydC5TICsgJGV4cG9ydC5GICogIVVTRV9OQVRJVkUsICdPYmplY3QnLCB7XG4gIC8vIDE5LjEuMi4yIE9iamVjdC5jcmVhdGUoTyBbLCBQcm9wZXJ0aWVzXSlcbiAgY3JlYXRlOiAkY3JlYXRlLFxuICAvLyAxOS4xLjIuNCBPYmplY3QuZGVmaW5lUHJvcGVydHkoTywgUCwgQXR0cmlidXRlcylcbiAgZGVmaW5lUHJvcGVydHk6ICRkZWZpbmVQcm9wZXJ0eSxcbiAgLy8gMTkuMS4yLjMgT2JqZWN0LmRlZmluZVByb3BlcnRpZXMoTywgUHJvcGVydGllcylcbiAgZGVmaW5lUHJvcGVydGllczogJGRlZmluZVByb3BlcnRpZXMsXG4gIC8vIDE5LjEuMi42IE9iamVjdC5nZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3IoTywgUClcbiAgZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yOiAkZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yLFxuICAvLyAxOS4xLjIuNyBPYmplY3QuZ2V0T3duUHJvcGVydHlOYW1lcyhPKVxuICBnZXRPd25Qcm9wZXJ0eU5hbWVzOiAkZ2V0T3duUHJvcGVydHlOYW1lcyxcbiAgLy8gMTkuMS4yLjggT2JqZWN0LmdldE93blByb3BlcnR5U3ltYm9scyhPKVxuICBnZXRPd25Qcm9wZXJ0eVN5bWJvbHM6ICRnZXRPd25Qcm9wZXJ0eVN5bWJvbHNcbn0pO1xuXG4vLyAyNC4zLjIgSlNPTi5zdHJpbmdpZnkodmFsdWUgWywgcmVwbGFjZXIgWywgc3BhY2VdXSlcbiRKU09OICYmICRleHBvcnQoJGV4cG9ydC5TICsgJGV4cG9ydC5GICogKCFVU0VfTkFUSVZFIHx8ICRmYWlscyhmdW5jdGlvbiAoKSB7XG4gIHZhciBTID0gJFN5bWJvbCgpO1xuICAvLyBNUyBFZGdlIGNvbnZlcnRzIHN5bWJvbCB2YWx1ZXMgdG8gSlNPTiBhcyB7fVxuICAvLyBXZWJLaXQgY29udmVydHMgc3ltYm9sIHZhbHVlcyB0byBKU09OIGFzIG51bGxcbiAgLy8gVjggdGhyb3dzIG9uIGJveGVkIHN5bWJvbHNcbiAgcmV0dXJuIF9zdHJpbmdpZnkoW1NdKSAhPSAnW251bGxdJyB8fCBfc3RyaW5naWZ5KHsgYTogUyB9KSAhPSAne30nIHx8IF9zdHJpbmdpZnkoT2JqZWN0KFMpKSAhPSAne30nO1xufSkpLCAnSlNPTicsIHtcbiAgc3RyaW5naWZ5OiBmdW5jdGlvbiBzdHJpbmdpZnkoaXQpIHtcbiAgICB2YXIgYXJncyA9IFtpdF07XG4gICAgdmFyIGkgPSAxO1xuICAgIHZhciByZXBsYWNlciwgJHJlcGxhY2VyO1xuICAgIHdoaWxlIChhcmd1bWVudHMubGVuZ3RoID4gaSkgYXJncy5wdXNoKGFyZ3VtZW50c1tpKytdKTtcbiAgICAkcmVwbGFjZXIgPSByZXBsYWNlciA9IGFyZ3NbMV07XG4gICAgaWYgKCFpc09iamVjdChyZXBsYWNlcikgJiYgaXQgPT09IHVuZGVmaW5lZCB8fCBpc1N5bWJvbChpdCkpIHJldHVybjsgLy8gSUU4IHJldHVybnMgc3RyaW5nIG9uIHVuZGVmaW5lZFxuICAgIGlmICghaXNBcnJheShyZXBsYWNlcikpIHJlcGxhY2VyID0gZnVuY3Rpb24gKGtleSwgdmFsdWUpIHtcbiAgICAgIGlmICh0eXBlb2YgJHJlcGxhY2VyID09ICdmdW5jdGlvbicpIHZhbHVlID0gJHJlcGxhY2VyLmNhbGwodGhpcywga2V5LCB2YWx1ZSk7XG4gICAgICBpZiAoIWlzU3ltYm9sKHZhbHVlKSkgcmV0dXJuIHZhbHVlO1xuICAgIH07XG4gICAgYXJnc1sxXSA9IHJlcGxhY2VyO1xuICAgIHJldHVybiBfc3RyaW5naWZ5LmFwcGx5KCRKU09OLCBhcmdzKTtcbiAgfVxufSk7XG5cbi8vIDE5LjQuMy40IFN5bWJvbC5wcm90b3R5cGVbQEB0b1ByaW1pdGl2ZV0oaGludClcbiRTeW1ib2xbUFJPVE9UWVBFXVtUT19QUklNSVRJVkVdIHx8IHJlcXVpcmUoJy4vX2hpZGUnKSgkU3ltYm9sW1BST1RPVFlQRV0sIFRPX1BSSU1JVElWRSwgJFN5bWJvbFtQUk9UT1RZUEVdLnZhbHVlT2YpO1xuLy8gMTkuNC4zLjUgU3ltYm9sLnByb3RvdHlwZVtAQHRvU3RyaW5nVGFnXVxuc2V0VG9TdHJpbmdUYWcoJFN5bWJvbCwgJ1N5bWJvbCcpO1xuLy8gMjAuMi4xLjkgTWF0aFtAQHRvU3RyaW5nVGFnXVxuc2V0VG9TdHJpbmdUYWcoTWF0aCwgJ01hdGgnLCB0cnVlKTtcbi8vIDI0LjMuMyBKU09OW0BAdG9TdHJpbmdUYWddXG5zZXRUb1N0cmluZ1RhZyhnbG9iYWwuSlNPTiwgJ0pTT04nLCB0cnVlKTtcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vbm9kZV9tb2R1bGVzL19jb3JlLWpzQDIuNS4zQGNvcmUtanMvbGlicmFyeS9tb2R1bGVzL2VzNi5zeW1ib2wuanNcbi8vIG1vZHVsZSBpZCA9IDEyMFxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCIvLyBhbGwgZW51bWVyYWJsZSBvYmplY3Qga2V5cywgaW5jbHVkZXMgc3ltYm9sc1xudmFyIGdldEtleXMgPSByZXF1aXJlKCcuL19vYmplY3Qta2V5cycpO1xudmFyIGdPUFMgPSByZXF1aXJlKCcuL19vYmplY3QtZ29wcycpO1xudmFyIHBJRSA9IHJlcXVpcmUoJy4vX29iamVjdC1waWUnKTtcbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGl0KSB7XG4gIHZhciByZXN1bHQgPSBnZXRLZXlzKGl0KTtcbiAgdmFyIGdldFN5bWJvbHMgPSBnT1BTLmY7XG4gIGlmIChnZXRTeW1ib2xzKSB7XG4gICAgdmFyIHN5bWJvbHMgPSBnZXRTeW1ib2xzKGl0KTtcbiAgICB2YXIgaXNFbnVtID0gcElFLmY7XG4gICAgdmFyIGkgPSAwO1xuICAgIHZhciBrZXk7XG4gICAgd2hpbGUgKHN5bWJvbHMubGVuZ3RoID4gaSkgaWYgKGlzRW51bS5jYWxsKGl0LCBrZXkgPSBzeW1ib2xzW2krK10pKSByZXN1bHQucHVzaChrZXkpO1xuICB9IHJldHVybiByZXN1bHQ7XG59O1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9ub2RlX21vZHVsZXMvX2NvcmUtanNAMi41LjNAY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX2VudW0ta2V5cy5qc1xuLy8gbW9kdWxlIGlkID0gMTIxXG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIi8vIGZhbGxiYWNrIGZvciBJRTExIGJ1Z2d5IE9iamVjdC5nZXRPd25Qcm9wZXJ0eU5hbWVzIHdpdGggaWZyYW1lIGFuZCB3aW5kb3dcbnZhciB0b0lPYmplY3QgPSByZXF1aXJlKCcuL190by1pb2JqZWN0Jyk7XG52YXIgZ09QTiA9IHJlcXVpcmUoJy4vX29iamVjdC1nb3BuJykuZjtcbnZhciB0b1N0cmluZyA9IHt9LnRvU3RyaW5nO1xuXG52YXIgd2luZG93TmFtZXMgPSB0eXBlb2Ygd2luZG93ID09ICdvYmplY3QnICYmIHdpbmRvdyAmJiBPYmplY3QuZ2V0T3duUHJvcGVydHlOYW1lc1xuICA/IE9iamVjdC5nZXRPd25Qcm9wZXJ0eU5hbWVzKHdpbmRvdykgOiBbXTtcblxudmFyIGdldFdpbmRvd05hbWVzID0gZnVuY3Rpb24gKGl0KSB7XG4gIHRyeSB7XG4gICAgcmV0dXJuIGdPUE4oaXQpO1xuICB9IGNhdGNoIChlKSB7XG4gICAgcmV0dXJuIHdpbmRvd05hbWVzLnNsaWNlKCk7XG4gIH1cbn07XG5cbm1vZHVsZS5leHBvcnRzLmYgPSBmdW5jdGlvbiBnZXRPd25Qcm9wZXJ0eU5hbWVzKGl0KSB7XG4gIHJldHVybiB3aW5kb3dOYW1lcyAmJiB0b1N0cmluZy5jYWxsKGl0KSA9PSAnW29iamVjdCBXaW5kb3ddJyA/IGdldFdpbmRvd05hbWVzKGl0KSA6IGdPUE4odG9JT2JqZWN0KGl0KSk7XG59O1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9ub2RlX21vZHVsZXMvX2NvcmUtanNAMi41LjNAY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX29iamVjdC1nb3BuLWV4dC5qc1xuLy8gbW9kdWxlIGlkID0gMTIyXG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsInJlcXVpcmUoJy4vX3drcy1kZWZpbmUnKSgnYXN5bmNJdGVyYXRvcicpO1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9ub2RlX21vZHVsZXMvX2NvcmUtanNAMi41LjNAY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvZXM3LnN5bWJvbC5hc3luYy1pdGVyYXRvci5qc1xuLy8gbW9kdWxlIGlkID0gMTIzXG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsInJlcXVpcmUoJy4vX3drcy1kZWZpbmUnKSgnb2JzZXJ2YWJsZScpO1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9ub2RlX21vZHVsZXMvX2NvcmUtanNAMi41LjNAY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvZXM3LnN5bWJvbC5vYnNlcnZhYmxlLmpzXG4vLyBtb2R1bGUgaWQgPSAxMjRcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiZXhwb3J0IGRlZmF1bHQgY2xhc3MgQm91bmRpbmdCb3gge1xyXG4gICAgY29uc3RydWN0b3IocG9zLCBzaXplLCBvZmZzZXQpIHtcclxuICAgICAgICB0aGlzLnBvcyA9IHBvcztcclxuICAgICAgICB0aGlzLnNpemUgPSBzaXplO1xyXG4gICAgICAgIHRoaXMub2Zmc2V0ID0gb2Zmc2V0O1xyXG4gICAgfVxyXG5cclxuICAgIG92ZXJsYXBzKGJveCkge1xyXG4gICAgICAgIHJldHVybiB0aGlzLmJvdHRvbSA+IGJveC50b3BcclxuICAgICAgICAgICAgICAgICAgICAgJiYgdGhpcy50b3AgPCBib3guYm90dG9tXHJcbiAgICAgICAgICAgICAgICAgICAgICYmIHRoaXMubGVmdCA8IGJveC5yaWdodFxyXG4gICAgICAgICAgICAgICAgICAgICAmJiB0aGlzLnJpZ2h0ID4gYm94LmxlZnRcclxuICAgIH1cclxuXHJcbiAgICBnZXQgYm90dG9tKCkge1xyXG4gICAgICAgIHJldHVybiB0aGlzLnBvcy55ICsgdGhpcy5zaXplLnkgKyB0aGlzLm9mZnNldC55O1xyXG4gICAgfVxyXG5cclxuICAgIHNldCBib3R0b20oeSkge1xyXG4gICAgICAgIHRoaXMucG9zLnkgPSB5IC0gKHRoaXMuc2l6ZS55ICsgdGhpcy5vZmZzZXQueSk7XHJcbiAgICB9XHJcblxyXG4gICAgZ2V0IHRvcCgpIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5wb3MueSArIHRoaXMub2Zmc2V0Lnk7XHJcbiAgICB9XHJcblxyXG4gICAgc2V0IHRvcCh5KSB7XHJcbiAgICAgICAgdGhpcy5wb3MueSA9IHkgLSB0aGlzLm9mZnNldC55O1xyXG4gICAgfVxyXG5cclxuICAgIGdldCBsZWZ0KCkge1xyXG4gICAgICAgIHJldHVybiB0aGlzLnBvcy54ICsgdGhpcy5vZmZzZXQueDtcclxuICAgIH1cclxuXHJcbiAgICBzZXQgbGVmdCh4KSB7XHJcbiAgICAgICAgdGhpcy5wb3MueCA9IHggLSB0aGlzLm9mZnNldC54O1xyXG4gICAgfVxyXG5cclxuICAgIGdldCByaWdodCgpIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5wb3MueCArIHRoaXMuc2l6ZS54ICsgdGhpcy5vZmZzZXQueDtcclxuICAgIH1cclxuXHJcbiAgICBzZXQgcmlnaHQoeCkge1xyXG4gICAgICAgIHRoaXMucG9zLnggPSB4IC0gKHRoaXMuc2l6ZS54ICsgdGhpcy5vZmZzZXQueCk7XHJcbiAgICB9XHJcbn1cclxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vcHVibGljL2pzL0JvdW5kaW5nQm94LmpzIiwiaW1wb3J0IHtUcmFpdH0gZnJvbSAnLi4vRW50aXR5LmpzJztcclxuaW1wb3J0IHtWZWMyfSBmcm9tICcuLi9tYXRoLmpzJztcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFBsYXllckNvbnRyb2xsZXIgZXh0ZW5kcyBUcmFpdCB7XHJcbiAgICBjb25zdHJ1Y3RvcigpIHtcclxuICAgICAgICBzdXBlcigncGxheWVyQ29udHJvbGxlcicpO1xyXG4gICAgICAgIHRoaXMucGxheWVyID0gbnVsbDtcclxuICAgICAgICB0aGlzLmNoZWNrUG9pbnQgPSBuZXcgVmVjMig2NCw2NCk7XHJcbiAgICAgICAgdGhpcy50aW1lID0gMzAwO1xyXG4gICAgICAgIHRoaXMuc2NvcmUgPSAwO1xyXG4gICAgfVxyXG5cclxuICAgIHNldFBsYXllcihlbnRpdHkpIHtcclxuICAgICAgICB0aGlzLnBsYXllciA9IGVudGl0eTtcclxuICAgICAgICB0aGlzLnBsYXllci5zdG9tZXIub25TdG9tcCA9ICgpID0+IHtcclxuICAgICAgICAgICAgdGhpcy5zY29yZSArPSAxMDA7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIHVwZGF0ZShlbnRpdHksIGRlbHRhVGltZSwgbGV2ZWwpIHtcclxuICAgICAgICBpZiAoIWxldmVsLmVudGl0aWVzLmhhcyh0aGlzLnBsYXllcikpIHtcclxuICAgICAgICAgICAgdGhpcy5wbGF5ZXIua2lsbGFibGUucmV2aXZlKCk7XHJcbiAgICAgICAgICAgIHRoaXMucGxheWVyLnBvcy5zZXQodGhpcy5jaGVja1BvaW50LnggLHRoaXMuY2hlY2tQb2ludC55KTtcclxuICAgICAgICAgICAgbGV2ZWwuZW50aXRpZXMuYWRkKHRoaXMucGxheWVyKTtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICB0aGlzLnRpbWUgLT0gZGVsdGFUaW1lICogMjtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbn1cclxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vcHVibGljL2pzL3RyYWl0cy9QbGF5ZXJDb250cm9sbGVyLmpzIiwicmVxdWlyZSgnLi4vLi4vbW9kdWxlcy9lczYub2JqZWN0LmdldC1wcm90b3R5cGUtb2YnKTtcbm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZSgnLi4vLi4vbW9kdWxlcy9fY29yZScpLk9iamVjdC5nZXRQcm90b3R5cGVPZjtcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vbm9kZV9tb2R1bGVzL19jb3JlLWpzQDIuNS4zQGNvcmUtanMvbGlicmFyeS9mbi9vYmplY3QvZ2V0LXByb3RvdHlwZS1vZi5qc1xuLy8gbW9kdWxlIGlkID0gMTI3XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIi8vIDE5LjEuMi45IE9iamVjdC5nZXRQcm90b3R5cGVPZihPKVxudmFyIHRvT2JqZWN0ID0gcmVxdWlyZSgnLi9fdG8tb2JqZWN0Jyk7XG52YXIgJGdldFByb3RvdHlwZU9mID0gcmVxdWlyZSgnLi9fb2JqZWN0LWdwbycpO1xuXG5yZXF1aXJlKCcuL19vYmplY3Qtc2FwJykoJ2dldFByb3RvdHlwZU9mJywgZnVuY3Rpb24gKCkge1xuICByZXR1cm4gZnVuY3Rpb24gZ2V0UHJvdG90eXBlT2YoaXQpIHtcbiAgICByZXR1cm4gJGdldFByb3RvdHlwZU9mKHRvT2JqZWN0KGl0KSk7XG4gIH07XG59KTtcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vbm9kZV9tb2R1bGVzL19jb3JlLWpzQDIuNS4zQGNvcmUtanMvbGlicmFyeS9tb2R1bGVzL2VzNi5vYmplY3QuZ2V0LXByb3RvdHlwZS1vZi5qc1xuLy8gbW9kdWxlIGlkID0gMTI4XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIi8vIG1vc3QgT2JqZWN0IG1ldGhvZHMgYnkgRVM2IHNob3VsZCBhY2NlcHQgcHJpbWl0aXZlc1xudmFyICRleHBvcnQgPSByZXF1aXJlKCcuL19leHBvcnQnKTtcbnZhciBjb3JlID0gcmVxdWlyZSgnLi9fY29yZScpO1xudmFyIGZhaWxzID0gcmVxdWlyZSgnLi9fZmFpbHMnKTtcbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKEtFWSwgZXhlYykge1xuICB2YXIgZm4gPSAoY29yZS5PYmplY3QgfHwge30pW0tFWV0gfHwgT2JqZWN0W0tFWV07XG4gIHZhciBleHAgPSB7fTtcbiAgZXhwW0tFWV0gPSBleGVjKGZuKTtcbiAgJGV4cG9ydCgkZXhwb3J0LlMgKyAkZXhwb3J0LkYgKiBmYWlscyhmdW5jdGlvbiAoKSB7IGZuKDEpOyB9KSwgJ09iamVjdCcsIGV4cCk7XG59O1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9ub2RlX21vZHVsZXMvX2NvcmUtanNAMi41LjNAY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX29iamVjdC1zYXAuanNcbi8vIG1vZHVsZSBpZCA9IDEyOVxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJtb2R1bGUuZXhwb3J0cyA9IHsgXCJkZWZhdWx0XCI6IHJlcXVpcmUoXCJjb3JlLWpzL2xpYnJhcnkvZm4vc3ltYm9sL2l0ZXJhdG9yXCIpLCBfX2VzTW9kdWxlOiB0cnVlIH07XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9ub2RlX21vZHVsZXMvX2JhYmVsLXJ1bnRpbWVANi4yNi4wQGJhYmVsLXJ1bnRpbWUvY29yZS1qcy9zeW1ib2wvaXRlcmF0b3IuanNcbi8vIG1vZHVsZSBpZCA9IDEzMFxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJyZXF1aXJlKCcuLi8uLi9tb2R1bGVzL2VzNi5zdHJpbmcuaXRlcmF0b3InKTtcbnJlcXVpcmUoJy4uLy4uL21vZHVsZXMvd2ViLmRvbS5pdGVyYWJsZScpO1xubW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKCcuLi8uLi9tb2R1bGVzL193a3MtZXh0JykuZignaXRlcmF0b3InKTtcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vbm9kZV9tb2R1bGVzL19jb3JlLWpzQDIuNS4zQGNvcmUtanMvbGlicmFyeS9mbi9zeW1ib2wvaXRlcmF0b3IuanNcbi8vIG1vZHVsZSBpZCA9IDEzMVxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJtb2R1bGUuZXhwb3J0cyA9IHsgXCJkZWZhdWx0XCI6IHJlcXVpcmUoXCJjb3JlLWpzL2xpYnJhcnkvZm4vb2JqZWN0L3NldC1wcm90b3R5cGUtb2ZcIiksIF9fZXNNb2R1bGU6IHRydWUgfTtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL25vZGVfbW9kdWxlcy9fYmFiZWwtcnVudGltZUA2LjI2LjBAYmFiZWwtcnVudGltZS9jb3JlLWpzL29iamVjdC9zZXQtcHJvdG90eXBlLW9mLmpzXG4vLyBtb2R1bGUgaWQgPSAxMzJcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwicmVxdWlyZSgnLi4vLi4vbW9kdWxlcy9lczYub2JqZWN0LnNldC1wcm90b3R5cGUtb2YnKTtcbm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZSgnLi4vLi4vbW9kdWxlcy9fY29yZScpLk9iamVjdC5zZXRQcm90b3R5cGVPZjtcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vbm9kZV9tb2R1bGVzL19jb3JlLWpzQDIuNS4zQGNvcmUtanMvbGlicmFyeS9mbi9vYmplY3Qvc2V0LXByb3RvdHlwZS1vZi5qc1xuLy8gbW9kdWxlIGlkID0gMTMzXG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIi8vIDE5LjEuMy4xOSBPYmplY3Quc2V0UHJvdG90eXBlT2YoTywgcHJvdG8pXG52YXIgJGV4cG9ydCA9IHJlcXVpcmUoJy4vX2V4cG9ydCcpO1xuJGV4cG9ydCgkZXhwb3J0LlMsICdPYmplY3QnLCB7IHNldFByb3RvdHlwZU9mOiByZXF1aXJlKCcuL19zZXQtcHJvdG8nKS5zZXQgfSk7XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL25vZGVfbW9kdWxlcy9fY29yZS1qc0AyLjUuM0Bjb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9lczYub2JqZWN0LnNldC1wcm90b3R5cGUtb2YuanNcbi8vIG1vZHVsZSBpZCA9IDEzNFxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCIvLyBXb3JrcyB3aXRoIF9fcHJvdG9fXyBvbmx5LiBPbGQgdjggY2FuJ3Qgd29yayB3aXRoIG51bGwgcHJvdG8gb2JqZWN0cy5cbi8qIGVzbGludC1kaXNhYmxlIG5vLXByb3RvICovXG52YXIgaXNPYmplY3QgPSByZXF1aXJlKCcuL19pcy1vYmplY3QnKTtcbnZhciBhbk9iamVjdCA9IHJlcXVpcmUoJy4vX2FuLW9iamVjdCcpO1xudmFyIGNoZWNrID0gZnVuY3Rpb24gKE8sIHByb3RvKSB7XG4gIGFuT2JqZWN0KE8pO1xuICBpZiAoIWlzT2JqZWN0KHByb3RvKSAmJiBwcm90byAhPT0gbnVsbCkgdGhyb3cgVHlwZUVycm9yKHByb3RvICsgXCI6IGNhbid0IHNldCBhcyBwcm90b3R5cGUhXCIpO1xufTtcbm1vZHVsZS5leHBvcnRzID0ge1xuICBzZXQ6IE9iamVjdC5zZXRQcm90b3R5cGVPZiB8fCAoJ19fcHJvdG9fXycgaW4ge30gPyAvLyBlc2xpbnQtZGlzYWJsZS1saW5lXG4gICAgZnVuY3Rpb24gKHRlc3QsIGJ1Z2d5LCBzZXQpIHtcbiAgICAgIHRyeSB7XG4gICAgICAgIHNldCA9IHJlcXVpcmUoJy4vX2N0eCcpKEZ1bmN0aW9uLmNhbGwsIHJlcXVpcmUoJy4vX29iamVjdC1nb3BkJykuZihPYmplY3QucHJvdG90eXBlLCAnX19wcm90b19fJykuc2V0LCAyKTtcbiAgICAgICAgc2V0KHRlc3QsIFtdKTtcbiAgICAgICAgYnVnZ3kgPSAhKHRlc3QgaW5zdGFuY2VvZiBBcnJheSk7XG4gICAgICB9IGNhdGNoIChlKSB7IGJ1Z2d5ID0gdHJ1ZTsgfVxuICAgICAgcmV0dXJuIGZ1bmN0aW9uIHNldFByb3RvdHlwZU9mKE8sIHByb3RvKSB7XG4gICAgICAgIGNoZWNrKE8sIHByb3RvKTtcbiAgICAgICAgaWYgKGJ1Z2d5KSBPLl9fcHJvdG9fXyA9IHByb3RvO1xuICAgICAgICBlbHNlIHNldChPLCBwcm90byk7XG4gICAgICAgIHJldHVybiBPO1xuICAgICAgfTtcbiAgICB9KHt9LCBmYWxzZSkgOiB1bmRlZmluZWQpLFxuICBjaGVjazogY2hlY2tcbn07XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL25vZGVfbW9kdWxlcy9fY29yZS1qc0AyLjUuM0Bjb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9fc2V0LXByb3RvLmpzXG4vLyBtb2R1bGUgaWQgPSAxMzVcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwibW9kdWxlLmV4cG9ydHMgPSB7IFwiZGVmYXVsdFwiOiByZXF1aXJlKFwiY29yZS1qcy9saWJyYXJ5L2ZuL29iamVjdC9jcmVhdGVcIiksIF9fZXNNb2R1bGU6IHRydWUgfTtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL25vZGVfbW9kdWxlcy9fYmFiZWwtcnVudGltZUA2LjI2LjBAYmFiZWwtcnVudGltZS9jb3JlLWpzL29iamVjdC9jcmVhdGUuanNcbi8vIG1vZHVsZSBpZCA9IDEzNlxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJyZXF1aXJlKCcuLi8uLi9tb2R1bGVzL2VzNi5vYmplY3QuY3JlYXRlJyk7XG52YXIgJE9iamVjdCA9IHJlcXVpcmUoJy4uLy4uL21vZHVsZXMvX2NvcmUnKS5PYmplY3Q7XG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIGNyZWF0ZShQLCBEKSB7XG4gIHJldHVybiAkT2JqZWN0LmNyZWF0ZShQLCBEKTtcbn07XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL25vZGVfbW9kdWxlcy9fY29yZS1qc0AyLjUuM0Bjb3JlLWpzL2xpYnJhcnkvZm4vb2JqZWN0L2NyZWF0ZS5qc1xuLy8gbW9kdWxlIGlkID0gMTM3XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsInZhciAkZXhwb3J0ID0gcmVxdWlyZSgnLi9fZXhwb3J0Jyk7XG4vLyAxOS4xLjIuMiAvIDE1LjIuMy41IE9iamVjdC5jcmVhdGUoTyBbLCBQcm9wZXJ0aWVzXSlcbiRleHBvcnQoJGV4cG9ydC5TLCAnT2JqZWN0JywgeyBjcmVhdGU6IHJlcXVpcmUoJy4vX29iamVjdC1jcmVhdGUnKSB9KTtcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vbm9kZV9tb2R1bGVzL19jb3JlLWpzQDIuNS4zQGNvcmUtanMvbGlicmFyeS9tb2R1bGVzL2VzNi5vYmplY3QuY3JlYXRlLmpzXG4vLyBtb2R1bGUgaWQgPSAxMzhcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiaW1wb3J0IHtNYXRyaXh9IGZyb20gJy4uL21hdGguanMnXHJcbmltcG9ydCBMZXZlbCBmcm9tICcuLi9MZXZlbC5qcydcclxuaW1wb3J0IHtsb2FkSlNPTiwgbG9hZFNwcml0ZVNoZWV0fSBmcm9tICcuLi9sb2FkZXIuanMnXHJcbmltcG9ydCB7Y3JlYXRlU3ByaXRlTGF5ZXJ9IGZyb20gJy4uL2xheWVycy9zcHJpdGVzLmpzJ1xyXG5pbXBvcnQge2NyZWF0ZUJhY2tncm91bmRMYXllcn0gZnJvbSAnLi4vbGF5ZXJzL2JhY2tncm91bmQuanMnXHJcblxyXG5mdW5jdGlvbiBzZXR1cExldmVsKGxldmVsU3BlYywgbGV2ZWwpIHtcclxuICAgIGNvbnN0IG1lcmdlZENvbGxpc2lvbkdyaWQgPSBsZXZlbFNwZWMubGF5ZXJzLnJlZHVjZSgobWVyZ2VkVGlsZXMsIGxheWVyU3BlYykgPT4ge1xyXG4gICAgICAgIHJldHVybiBtZXJnZWRUaWxlcy5jb25jYXQobGF5ZXJTcGVjLnRpbGVzKTtcclxuICAgIH0sIFtdKTtcclxuXHJcbiAgICBjb25zdCBjb2xsaXNpb25HcmlkID0gY3JlYXRlQ29sbGlzaW9uR3JpZChtZXJnZWRDb2xsaXNpb25HcmlkLCBsZXZlbFNwZWMucGF0dGVybnMpO1xyXG4gICAgbGV2ZWwuc2V0Q29sbGlzaW9uR3JpZChjb2xsaXNpb25HcmlkKTtcclxufVxyXG5cclxuZnVuY3Rpb24gc2V0dXBCYWNrZ3JvdW5kKGxldmVsU3BlYywgbGV2ZWwsIGJhY2tncm91bmRTcHJpdGVzKSB7XHJcbiAgICBsZXZlbFNwZWMubGF5ZXJzLmZvckVhY2gobGF5ZXIgPT4ge1xyXG4gICAgICAgIGNvbnN0IGJhY2tncm91bmRHcmlkID0gY3JlYXRlQmFja2dyb3VuZEdyaWQobGF5ZXIudGlsZXMsIGxldmVsU3BlYy5wYXR0ZXJucyk7XHJcbiAgICAgICAgY29uc3QgYmFja2dyb3VuZExheWVyID0gY3JlYXRlQmFja2dyb3VuZExheWVyKGxldmVsLCBiYWNrZ3JvdW5kR3JpZCwgYmFja2dyb3VuZFNwcml0ZXMpO1xyXG4gICAgICAgIGxldmVsLmNvbXAubGF5ZXJzLnB1c2goYmFja2dyb3VuZExheWVyKTtcclxuICAgIH0pO1xyXG59XHJcblxyXG5mdW5jdGlvbiBzZXR1cEVudGl0aWVzKGxldmVsU3BlYywgbGV2ZWwsIGVudGl0eUZhY3RvcnkpIHtcclxuICAgIGxldmVsU3BlYy5lbnRpdGllcy5mb3JFYWNoKCh7bmFtZSwgcG9zOiBbeCx5XX0pID0+IHtcclxuICAgICAgICAvLyBjb25zb2xlLmxvZyhuYW1lLCB4LHkpO1xyXG4gICAgICAgIGNvbnN0IGNyZWF0ZUVudGl0eSA9IGVudGl0eUZhY3RvcnlbbmFtZV07XHJcbiAgICAgICAgY29uc3QgZW50aXR5ID0gY3JlYXRlRW50aXR5KCk7XHJcbiAgICAgICAgZW50aXR5LnBvcy5zZXQoeCwgeSk7XHJcbiAgICAgICAgbGV2ZWwuZW50aXRpZXMuYWRkKGVudGl0eSk7XHJcbiAgICB9KTtcclxuXHJcbiAgICBjb25zdCBzcHJpdGVMYXllciA9IGNyZWF0ZVNwcml0ZUxheWVyKGxldmVsLmVudGl0aWVzKTtcclxuICAgIGxldmVsLmNvbXAubGF5ZXJzLnB1c2goc3ByaXRlTGF5ZXIpO1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gY3JlYXRlTGV2ZWxMb2FkZXIoZW50aXR5RmFjdG9yeSkge1xyXG4gICAgcmV0dXJuIGZ1bmN0aW9uIGxvYWRMZXZlbChuYW1lKSB7XHJcbiAgICAgICAgcmV0dXJuIGxvYWRKU09OKGAuLi9sZXZlbHMvJHtuYW1lfS5qc29uYClcclxuICAgICAgICAgICAgLnRoZW4obGV2ZWxTcGVjID0+IFByb21pc2UuYWxsKFtcclxuICAgICAgICAgICAgICAgIGxldmVsU3BlYyxcclxuICAgICAgICAgICAgICAgIGxvYWRTcHJpdGVTaGVldChsZXZlbFNwZWMuc3ByaXRlU2hlZXQpXHJcbiAgICAgICAgICAgIF0pKVxyXG4gICAgICAgICAgICAudGhlbigoW2xldmVsU3BlYywgYmFja2dyb3VuZFNwcml0ZXNdKSA9PiB7XHJcbiAgICAgICAgICAgICAgICBjb25zdCBsZXZlbCA9IG5ldyBMZXZlbCgpO1xyXG5cclxuICAgICAgICAgICAgICAgIHNldHVwTGV2ZWwobGV2ZWxTcGVjLCBsZXZlbCk7XHJcbiAgICAgICAgICAgICAgICBzZXR1cEJhY2tncm91bmQobGV2ZWxTcGVjLCBsZXZlbCwgYmFja2dyb3VuZFNwcml0ZXMpO1xyXG4gICAgICAgICAgICAgICAgc2V0dXBFbnRpdGllcyhsZXZlbFNwZWMsIGxldmVsLCBlbnRpdHlGYWN0b3J5KTtcclxuXHJcbiAgICAgICAgICAgICAgICByZXR1cm4gbGV2ZWw7XHJcbiAgICAgICAgICAgIH0pXHJcbiAgICB9XHJcbn1cclxuXHJcbmZ1bmN0aW9uIGNyZWF0ZUNvbGxpc2lvbkdyaWQodGlsZXMsIHBhdHRlcm5zKSB7XHJcbiAgICBjb25zdCBncmlkID0gbmV3IE1hdHJpeCgpO1xyXG5cclxuICAgIGZvciAoY29uc3Qge3RpbGUsIHgsIHl9IG9mIGV4cGFuZFRpbGVzKHRpbGVzLCBwYXR0ZXJucykpIHtcclxuICAgICAgICBncmlkLnNldCh4LCB5LCB7dHlwZTogdGlsZS50eXBlfSlcclxuICAgIH1cclxuXHJcbiAgICByZXR1cm4gZ3JpZDtcclxufVxyXG5cclxuZnVuY3Rpb24gY3JlYXRlQmFja2dyb3VuZEdyaWQodGlsZXMsIHBhdHRlcm5zKSB7XHJcbiAgICBjb25zdCBncmlkID0gbmV3IE1hdHJpeCgpO1xyXG5cclxuICAgIGZvciAoY29uc3Qge3RpbGUsIHgsIHl9IG9mIGV4cGFuZFRpbGVzKHRpbGVzLCBwYXR0ZXJucykpIHtcclxuICAgICAgICBncmlkLnNldCh4LCB5LCB7bmFtZTogdGlsZS5uYW1lfSlcclxuICAgIH1cclxuXHJcbiAgICByZXR1cm4gZ3JpZDtcclxufVxyXG5cclxuLy8gRVM2IEdlbmVyYXRvciBGdW5jdGlvblxyXG5mdW5jdGlvbiogZXhwYW5kU3Bhbih4U3RhcnQsIHhMZW4sIHlTdGFydCwgeUxlbikge1xyXG4gICAgLy8gZGVidWdnZXJcclxuICAgIC8vIGNvbnN0IGNvb3JkcyA9IFtdO1xyXG4gICAgY29uc3QgeEVuZCA9IHhTdGFydCArIHhMZW47XHJcbiAgICBjb25zdCB5RW5kID0geVN0YXJ0ICsgeUxlbjtcclxuICAgIGZvciAobGV0IHggPSB4U3RhcnQ7IHggPCB4RW5kOyB4KyspIHtcclxuICAgICAgICBmb3IgKGxldCB5ID0geVN0YXJ0OyB5IDwgeUVuZDsgeSsrKSB7XHJcbiAgICAgICAgICAgIC8vIGNvb3Jkcy5wdXNoKHt4LCB5fSk7XHJcbiAgICAgICAgICAgIHlpZWxkIHt4LCB5fTtcclxuICAgICAgICAgICAgLy8gY3JlYXRlIGEgSXRlcmF0b3IgT2JqZWN0IGZvciB0aGUgZm9sbG93aW5nIGZvci4uLm9mXHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIC8vIHJldHVybiBjb29yZHM7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIGV4cGFuZFJhbmdlKHJhbmdlKSB7XHJcbiAgICBpZiAocmFuZ2UubGVuZ3RoID09PSA0KSB7XHJcbiAgICAgICAgY29uc3QgW3hTdGFydCwgeExlbiwgeVN0YXJ0LCB5TGVuXSA9IHJhbmdlO1xyXG4gICAgICAgIHJldHVybiBleHBhbmRTcGFuKHhTdGFydCwgeExlbiwgeVN0YXJ0LCB5TGVuKVxyXG4gICAgfSBlbHNlIGlmIChyYW5nZS5sZW5ndGggPT09IDMpIHtcclxuICAgICAgICBjb25zdCBbeFN0YXJ0LCB4TGVuLCB5U3RhcnRdID0gcmFuZ2U7XHJcbiAgICAgICAgcmV0dXJuIGV4cGFuZFNwYW4oeFN0YXJ0LCB4TGVuLCB5U3RhcnQsIDEpXHJcbiAgICB9IGVsc2UgaWYgKHJhbmdlLmxlbmd0aCA9PT0gMikge1xyXG4gICAgICAgIGNvbnN0IFt4U3RhcnQsIHlTdGFydF0gPSByYW5nZTtcclxuICAgICAgICByZXR1cm4gZXhwYW5kU3Bhbih4U3RhcnQsIDEsIHlTdGFydCwgMSlcclxuICAgIH1cclxufVxyXG5cclxuZnVuY3Rpb24qIGV4cGFuZFJhbmdlcyhyYW5nZXMpIHtcclxuICAgIGZvciAoY29uc3QgcmFuZ2Ugb2YgcmFuZ2VzKSB7XHJcbiAgICAgICAgeWllbGQqIGV4cGFuZFJhbmdlKHJhbmdlKTtcclxuICAgIH1cclxufVxyXG5cclxuZnVuY3Rpb24qIGV4cGFuZFRpbGVzKHRpbGVzLCBwYXR0ZXJucykge1xyXG4gICAgLy8gbGV0IGV4cGFuZGVkVGlsZXMgPSBbXTtcclxuXHJcbiAgICBmdW5jdGlvbiogd2Fsa1RpbGVzKHRpbGVzLCBvZmZzZXRYLCBvZmZzZXRZKSB7XHJcbiAgICAgICAgZm9yIChjb25zdCB0aWxlIG9mIHRpbGVzKSB7XHJcbiAgICAgICAgICAgIGZvciAoY29uc3Qge3gsIHl9IG9mIGV4cGFuZFJhbmdlcyh0aWxlLnJhbmdlcykpIHtcclxuICAgICAgICAgICAgICAgIC8qIGh0dHA6Ly9lczYucnVhbnlpZmVuZy5jb20vP3NlYXJjaD15aWVsZCZ4PTAmeT0wI2RvY3MvZ2VuZXJhdG9yI2Zvci0tLW9mLSVFNSVCRSVBQSVFNyU4RSVBRlxyXG4gICAgICAgICAgICAgICAgIFVzZSBmb3IuLi5vZiB0byBpdGVyYXRlIHRoZSBJdGVyYXRvciBPYmplY3QgZ2VuZXJhdGVkIGJ5IHRoZSB5aWVsZCBvZiBHZW5lcmF0b3IgRnVuY3Rpb24uKi9cclxuICAgICAgICAgICAgICAgIGNvbnN0IGRlcml2ZWRYID0geCArIG9mZnNldFg7XHJcbiAgICAgICAgICAgICAgICBjb25zdCBkZXJpdmVkWSA9IHkgKyBvZmZzZXRZO1xyXG5cclxuICAgICAgICAgICAgICAgIC8vIGRlYnVnZ2VyXHJcbiAgICAgICAgICAgICAgICBpZiAodGlsZS5wYXR0ZXJuKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgLy8gY29uc29sZS5sb2cocGF0dGVybnNbdGlsZS5wYXR0ZXJuXSk7XHJcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgdGlsZXMgPSBwYXR0ZXJuc1t0aWxlLnBhdHRlcm5dLnRpbGVzO1xyXG4gICAgICAgICAgICAgICAgICAgIC8vIGNyZWF0ZVRpbGVzKGxldmVsLCB0aWxlcywgcGF0dGVybnMsIGRlcml2ZWRYLCBkZXJpdmVkWSk7XHJcbiAgICAgICAgICAgICAgICAgICAgLypUT0RPOkZpZ3VyZSBvdXQgdGggdXNlYWdlIG9mIHlpZWxkKiovXHJcbiAgICAgICAgICAgICAgICAgICAgeWllbGQqIHdhbGtUaWxlcyh0aWxlcywgZGVyaXZlZFgsIGRlcml2ZWRZKTtcclxuICAgICAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgeWllbGQge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB0aWxlLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICB4OiBkZXJpdmVkWCxcclxuICAgICAgICAgICAgICAgICAgICAgICAgeTogZGVyaXZlZFlcclxuICAgICAgICAgICAgICAgICAgICB9O1xyXG4gICAgICAgICAgICAgICAgICAgIC8vIGV4cGFuZGVkVGlsZXMucHVzaCh7XHJcbiAgICAgICAgICAgICAgICAgICAgLy8gICAgIHRpbGUsXHJcbiAgICAgICAgICAgICAgICAgICAgLy8gICAgIHg6IGRlcml2ZWRYLFxyXG4gICAgICAgICAgICAgICAgICAgIC8vICAgICB5OiBkZXJpdmVkWVxyXG4gICAgICAgICAgICAgICAgICAgIC8vIH0pO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIHlpZWxkKiB3YWxrVGlsZXModGlsZXMsIDAsIDApO1xyXG5cclxuICAgIC8vIHJldHVybiBleHBhbmRlZFRpbGVzO1xyXG59XHJcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3B1YmxpYy9qcy9sb2FkZXJzL2xldmVsLmpzIiwiaW1wb3J0IENvbXBvc2l0b3IgZnJvbSAnLi9jb21wb3NpdG9yLmpzJ1xyXG5pbXBvcnQgRW50aXR5Q29sbGlkZXIgZnJvbSAnLi9FbnRpdHlDb2xsaWRlci5qcydcclxuaW1wb3J0IFRpbGVDb2xsaWRlciBmcm9tICcuL1RpbGVDb2xsaWRlci5qcydcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIExldmVsIHtcclxuICAgIGNvbnN0cnVjdG9yKCkge1xyXG4gICAgICAgIHRoaXMuZ3Jhdml0eSA9IDE1MDA7XHJcbiAgICAgICAgdGhpcy5jb21wID0gbmV3IENvbXBvc2l0b3IoKTtcclxuICAgICAgICB0aGlzLmVudGl0aWVzID0gbmV3IFNldCgpO1xyXG4gICAgICAgIHRoaXMuZW50aXR5Q29sbGlkZXIgPSBuZXcgRW50aXR5Q29sbGlkZXIodGhpcy5lbnRpdGllcyk7XHJcbiAgICAgICAgdGhpcy50b3RhbFRpbWUgPSAwO1xyXG5cclxuICAgICAgICB0aGlzLnRpbGVDb2xsaWRlciA9IG51bGw7XHJcbiAgICB9XHJcblxyXG4gICAgc2V0Q29sbGlzaW9uR3JpZChtYXRyaXgpIHtcclxuICAgICAgICB0aGlzLnRpbGVDb2xsaWRlciA9IG5ldyBUaWxlQ29sbGlkZXIobWF0cml4KTtcclxuICAgIH1cclxuXHJcbiAgICB1cGRhdGUoZGVsdGFUaW1lKSB7XHJcbiAgICAgICAgdGhpcy5lbnRpdGllcy5mb3JFYWNoKGVudGl0eSA9PiB7XHJcbiAgICAgICAgICAgIGVudGl0eS51cGRhdGUoZGVsdGFUaW1lLCB0aGlzKTtcclxuICAgICAgICB9KTtcclxuXHJcblxyXG4gICAgICAgIHRoaXMuZW50aXRpZXMuZm9yRWFjaChlbnRpdHkgPT4ge1xyXG4gICAgICAgICAgICBlbnRpdHkuZmluYWxpemUoKTtcclxuXHJcbiAgICAgICAgICAgIHRoaXMuZW50aXR5Q29sbGlkZXIuY2hlY2soZW50aXR5KTtcclxuICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgdGhpcy50b3RhbFRpbWUgKz0gZGVsdGFUaW1lO1xyXG4gICAgfVxyXG59XHJcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3B1YmxpYy9qcy9MZXZlbC5qcyIsIm1vZHVsZS5leHBvcnRzID0geyBcImRlZmF1bHRcIjogcmVxdWlyZShcImNvcmUtanMvbGlicmFyeS9mbi9zZXRcIiksIF9fZXNNb2R1bGU6IHRydWUgfTtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL25vZGVfbW9kdWxlcy9fYmFiZWwtcnVudGltZUA2LjI2LjBAYmFiZWwtcnVudGltZS9jb3JlLWpzL3NldC5qc1xuLy8gbW9kdWxlIGlkID0gMTQxXG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsInJlcXVpcmUoJy4uL21vZHVsZXMvZXM2Lm9iamVjdC50by1zdHJpbmcnKTtcbnJlcXVpcmUoJy4uL21vZHVsZXMvZXM2LnN0cmluZy5pdGVyYXRvcicpO1xucmVxdWlyZSgnLi4vbW9kdWxlcy93ZWIuZG9tLml0ZXJhYmxlJyk7XG5yZXF1aXJlKCcuLi9tb2R1bGVzL2VzNi5zZXQnKTtcbnJlcXVpcmUoJy4uL21vZHVsZXMvZXM3LnNldC50by1qc29uJyk7XG5yZXF1aXJlKCcuLi9tb2R1bGVzL2VzNy5zZXQub2YnKTtcbnJlcXVpcmUoJy4uL21vZHVsZXMvZXM3LnNldC5mcm9tJyk7XG5tb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoJy4uL21vZHVsZXMvX2NvcmUnKS5TZXQ7XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL25vZGVfbW9kdWxlcy9fY29yZS1qc0AyLjUuM0Bjb3JlLWpzL2xpYnJhcnkvZm4vc2V0LmpzXG4vLyBtb2R1bGUgaWQgPSAxNDJcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiJ3VzZSBzdHJpY3QnO1xudmFyIHN0cm9uZyA9IHJlcXVpcmUoJy4vX2NvbGxlY3Rpb24tc3Ryb25nJyk7XG52YXIgdmFsaWRhdGUgPSByZXF1aXJlKCcuL192YWxpZGF0ZS1jb2xsZWN0aW9uJyk7XG52YXIgU0VUID0gJ1NldCc7XG5cbi8vIDIzLjIgU2V0IE9iamVjdHNcbm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZSgnLi9fY29sbGVjdGlvbicpKFNFVCwgZnVuY3Rpb24gKGdldCkge1xuICByZXR1cm4gZnVuY3Rpb24gU2V0KCkgeyByZXR1cm4gZ2V0KHRoaXMsIGFyZ3VtZW50cy5sZW5ndGggPiAwID8gYXJndW1lbnRzWzBdIDogdW5kZWZpbmVkKTsgfTtcbn0sIHtcbiAgLy8gMjMuMi4zLjEgU2V0LnByb3RvdHlwZS5hZGQodmFsdWUpXG4gIGFkZDogZnVuY3Rpb24gYWRkKHZhbHVlKSB7XG4gICAgcmV0dXJuIHN0cm9uZy5kZWYodmFsaWRhdGUodGhpcywgU0VUKSwgdmFsdWUgPSB2YWx1ZSA9PT0gMCA/IDAgOiB2YWx1ZSwgdmFsdWUpO1xuICB9XG59LCBzdHJvbmcpO1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9ub2RlX21vZHVsZXMvX2NvcmUtanNAMi41LjNAY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvZXM2LnNldC5qc1xuLy8gbW9kdWxlIGlkID0gMTQzXG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIi8vIDAgLT4gQXJyYXkjZm9yRWFjaFxuLy8gMSAtPiBBcnJheSNtYXBcbi8vIDIgLT4gQXJyYXkjZmlsdGVyXG4vLyAzIC0+IEFycmF5I3NvbWVcbi8vIDQgLT4gQXJyYXkjZXZlcnlcbi8vIDUgLT4gQXJyYXkjZmluZFxuLy8gNiAtPiBBcnJheSNmaW5kSW5kZXhcbnZhciBjdHggPSByZXF1aXJlKCcuL19jdHgnKTtcbnZhciBJT2JqZWN0ID0gcmVxdWlyZSgnLi9faW9iamVjdCcpO1xudmFyIHRvT2JqZWN0ID0gcmVxdWlyZSgnLi9fdG8tb2JqZWN0Jyk7XG52YXIgdG9MZW5ndGggPSByZXF1aXJlKCcuL190by1sZW5ndGgnKTtcbnZhciBhc2MgPSByZXF1aXJlKCcuL19hcnJheS1zcGVjaWVzLWNyZWF0ZScpO1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoVFlQRSwgJGNyZWF0ZSkge1xuICB2YXIgSVNfTUFQID0gVFlQRSA9PSAxO1xuICB2YXIgSVNfRklMVEVSID0gVFlQRSA9PSAyO1xuICB2YXIgSVNfU09NRSA9IFRZUEUgPT0gMztcbiAgdmFyIElTX0VWRVJZID0gVFlQRSA9PSA0O1xuICB2YXIgSVNfRklORF9JTkRFWCA9IFRZUEUgPT0gNjtcbiAgdmFyIE5PX0hPTEVTID0gVFlQRSA9PSA1IHx8IElTX0ZJTkRfSU5ERVg7XG4gIHZhciBjcmVhdGUgPSAkY3JlYXRlIHx8IGFzYztcbiAgcmV0dXJuIGZ1bmN0aW9uICgkdGhpcywgY2FsbGJhY2tmbiwgdGhhdCkge1xuICAgIHZhciBPID0gdG9PYmplY3QoJHRoaXMpO1xuICAgIHZhciBzZWxmID0gSU9iamVjdChPKTtcbiAgICB2YXIgZiA9IGN0eChjYWxsYmFja2ZuLCB0aGF0LCAzKTtcbiAgICB2YXIgbGVuZ3RoID0gdG9MZW5ndGgoc2VsZi5sZW5ndGgpO1xuICAgIHZhciBpbmRleCA9IDA7XG4gICAgdmFyIHJlc3VsdCA9IElTX01BUCA/IGNyZWF0ZSgkdGhpcywgbGVuZ3RoKSA6IElTX0ZJTFRFUiA/IGNyZWF0ZSgkdGhpcywgMCkgOiB1bmRlZmluZWQ7XG4gICAgdmFyIHZhbCwgcmVzO1xuICAgIGZvciAoO2xlbmd0aCA+IGluZGV4OyBpbmRleCsrKSBpZiAoTk9fSE9MRVMgfHwgaW5kZXggaW4gc2VsZikge1xuICAgICAgdmFsID0gc2VsZltpbmRleF07XG4gICAgICByZXMgPSBmKHZhbCwgaW5kZXgsIE8pO1xuICAgICAgaWYgKFRZUEUpIHtcbiAgICAgICAgaWYgKElTX01BUCkgcmVzdWx0W2luZGV4XSA9IHJlczsgICAvLyBtYXBcbiAgICAgICAgZWxzZSBpZiAocmVzKSBzd2l0Y2ggKFRZUEUpIHtcbiAgICAgICAgICBjYXNlIDM6IHJldHVybiB0cnVlOyAgICAgICAgICAgICAvLyBzb21lXG4gICAgICAgICAgY2FzZSA1OiByZXR1cm4gdmFsOyAgICAgICAgICAgICAgLy8gZmluZFxuICAgICAgICAgIGNhc2UgNjogcmV0dXJuIGluZGV4OyAgICAgICAgICAgIC8vIGZpbmRJbmRleFxuICAgICAgICAgIGNhc2UgMjogcmVzdWx0LnB1c2godmFsKTsgICAgICAgIC8vIGZpbHRlclxuICAgICAgICB9IGVsc2UgaWYgKElTX0VWRVJZKSByZXR1cm4gZmFsc2U7IC8vIGV2ZXJ5XG4gICAgICB9XG4gICAgfVxuICAgIHJldHVybiBJU19GSU5EX0lOREVYID8gLTEgOiBJU19TT01FIHx8IElTX0VWRVJZID8gSVNfRVZFUlkgOiByZXN1bHQ7XG4gIH07XG59O1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9ub2RlX21vZHVsZXMvX2NvcmUtanNAMi41LjNAY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX2FycmF5LW1ldGhvZHMuanNcbi8vIG1vZHVsZSBpZCA9IDE0NFxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCIvLyA5LjQuMi4zIEFycmF5U3BlY2llc0NyZWF0ZShvcmlnaW5hbEFycmF5LCBsZW5ndGgpXG52YXIgc3BlY2llc0NvbnN0cnVjdG9yID0gcmVxdWlyZSgnLi9fYXJyYXktc3BlY2llcy1jb25zdHJ1Y3RvcicpO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChvcmlnaW5hbCwgbGVuZ3RoKSB7XG4gIHJldHVybiBuZXcgKHNwZWNpZXNDb25zdHJ1Y3RvcihvcmlnaW5hbCkpKGxlbmd0aCk7XG59O1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9ub2RlX21vZHVsZXMvX2NvcmUtanNAMi41LjNAY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX2FycmF5LXNwZWNpZXMtY3JlYXRlLmpzXG4vLyBtb2R1bGUgaWQgPSAxNDVcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwidmFyIGlzT2JqZWN0ID0gcmVxdWlyZSgnLi9faXMtb2JqZWN0Jyk7XG52YXIgaXNBcnJheSA9IHJlcXVpcmUoJy4vX2lzLWFycmF5Jyk7XG52YXIgU1BFQ0lFUyA9IHJlcXVpcmUoJy4vX3drcycpKCdzcGVjaWVzJyk7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKG9yaWdpbmFsKSB7XG4gIHZhciBDO1xuICBpZiAoaXNBcnJheShvcmlnaW5hbCkpIHtcbiAgICBDID0gb3JpZ2luYWwuY29uc3RydWN0b3I7XG4gICAgLy8gY3Jvc3MtcmVhbG0gZmFsbGJhY2tcbiAgICBpZiAodHlwZW9mIEMgPT0gJ2Z1bmN0aW9uJyAmJiAoQyA9PT0gQXJyYXkgfHwgaXNBcnJheShDLnByb3RvdHlwZSkpKSBDID0gdW5kZWZpbmVkO1xuICAgIGlmIChpc09iamVjdChDKSkge1xuICAgICAgQyA9IENbU1BFQ0lFU107XG4gICAgICBpZiAoQyA9PT0gbnVsbCkgQyA9IHVuZGVmaW5lZDtcbiAgICB9XG4gIH0gcmV0dXJuIEMgPT09IHVuZGVmaW5lZCA/IEFycmF5IDogQztcbn07XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL25vZGVfbW9kdWxlcy9fY29yZS1qc0AyLjUuM0Bjb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9fYXJyYXktc3BlY2llcy1jb25zdHJ1Y3Rvci5qc1xuLy8gbW9kdWxlIGlkID0gMTQ2XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIi8vIGh0dHBzOi8vZ2l0aHViLmNvbS9EYXZpZEJydWFudC9NYXAtU2V0LnByb3RvdHlwZS50b0pTT05cbnZhciAkZXhwb3J0ID0gcmVxdWlyZSgnLi9fZXhwb3J0Jyk7XG5cbiRleHBvcnQoJGV4cG9ydC5QICsgJGV4cG9ydC5SLCAnU2V0JywgeyB0b0pTT046IHJlcXVpcmUoJy4vX2NvbGxlY3Rpb24tdG8tanNvbicpKCdTZXQnKSB9KTtcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vbm9kZV9tb2R1bGVzL19jb3JlLWpzQDIuNS4zQGNvcmUtanMvbGlicmFyeS9tb2R1bGVzL2VzNy5zZXQudG8tanNvbi5qc1xuLy8gbW9kdWxlIGlkID0gMTQ3XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsInZhciBmb3JPZiA9IHJlcXVpcmUoJy4vX2Zvci1vZicpO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChpdGVyLCBJVEVSQVRPUikge1xuICB2YXIgcmVzdWx0ID0gW107XG4gIGZvck9mKGl0ZXIsIGZhbHNlLCByZXN1bHQucHVzaCwgcmVzdWx0LCBJVEVSQVRPUik7XG4gIHJldHVybiByZXN1bHQ7XG59O1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9ub2RlX21vZHVsZXMvX2NvcmUtanNAMi41LjNAY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX2FycmF5LWZyb20taXRlcmFibGUuanNcbi8vIG1vZHVsZSBpZCA9IDE0OFxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCIvLyBodHRwczovL3RjMzkuZ2l0aHViLmlvL3Byb3Bvc2FsLXNldG1hcC1vZmZyb20vI3NlYy1zZXQub2ZcbnJlcXVpcmUoJy4vX3NldC1jb2xsZWN0aW9uLW9mJykoJ1NldCcpO1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9ub2RlX21vZHVsZXMvX2NvcmUtanNAMi41LjNAY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvZXM3LnNldC5vZi5qc1xuLy8gbW9kdWxlIGlkID0gMTQ5XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIi8vIGh0dHBzOi8vdGMzOS5naXRodWIuaW8vcHJvcG9zYWwtc2V0bWFwLW9mZnJvbS8jc2VjLXNldC5mcm9tXG5yZXF1aXJlKCcuL19zZXQtY29sbGVjdGlvbi1mcm9tJykoJ1NldCcpO1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9ub2RlX21vZHVsZXMvX2NvcmUtanNAMi41LjNAY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvZXM3LnNldC5mcm9tLmpzXG4vLyBtb2R1bGUgaWQgPSAxNTBcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiZXhwb3J0IGRlZmF1bHQgY2xhc3MgQ29tcG9zaXRvciB7XHJcbiAgICBjb25zdHJ1Y3RvcigpIHtcclxuICAgICAgICB0aGlzLmxheWVycyA9IFtdO1xyXG4gICAgfVxyXG5cclxuICAgIGRyYXcoY29udGV4dCwgY2FtZXJhKSB7XHJcbiAgICAgICAgdGhpcy5sYXllcnMuZm9yRWFjaChsYXllciA9PiB7XHJcbiAgICAgICAgICAgIGxheWVyKGNvbnRleHQsIGNhbWVyYSk7XHJcbiAgICAgICAgfSlcclxuICAgIH1cclxufVxyXG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9wdWJsaWMvanMvY29tcG9zaXRvci5qcyIsIlxyXG5cclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgRW50aXR5Q29sbGlkZXIge1xyXG4gICAgY29uc3RydWN0b3IoZW50aXRpZXMpIHtcclxuICAgICAgICB0aGlzLmVudGl0aWVzID0gZW50aXRpZXM7XHJcbiAgICB9XHJcblxyXG4gICAgY2hlY2soc3ViamVjdCkge1xyXG4gICAgICAgIHRoaXMuZW50aXRpZXMuZm9yRWFjaChjYW5kaWRhdGUgPT4ge1xyXG4gICAgICAgICAgICBpZiAoc3ViamVjdCA9PT0gY2FuZGlkYXRlKSB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIGlmIChzdWJqZWN0LmJvdW5kcy5vdmVybGFwcyhjYW5kaWRhdGUuYm91bmRzKSkge1xyXG4gICAgICAgICAgICAgIHN1YmplY3QuY29sbGlkZXMoY2FuZGlkYXRlKTtcclxuICAgICAgICAgICAgICBjYW5kaWRhdGUuY29sbGlkZXMoc3ViamVjdCk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9KVxyXG4gICAgfVxyXG59XHJcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3B1YmxpYy9qcy9FbnRpdHlDb2xsaWRlci5qcyIsImltcG9ydCBUaWxlUmVzb2x2ZXIgZnJvbSAnLi9UaWxlUmVzb2x2ZXIuanMnXHJcbmltcG9ydCB7U2lkZXN9IGZyb20gJy4vRW50aXR5LmpzJ1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgVGlsZUNvbGxpZGVyIHtcclxuICAgIGNvbnN0cnVjdG9yKHRpbGVNYXRyaXgpIHtcclxuICAgICAgICB0aGlzLnRpbGUgPSBuZXcgVGlsZVJlc29sdmVyKHRpbGVNYXRyaXgpO1xyXG4gICAgfVxyXG5cclxuICAgIGNoZWNrWChlbnRpdHkpIHtcclxuICAgICAgICBsZXQgeDtcclxuICAgICAgICBpZiAoZW50aXR5LnZlbC54ID4gMCkge1xyXG4gICAgICAgICAgICAvLyBtYXJpbyBpcyBnb2luZyB0b3dhcmQgUklHSFRcclxuICAgICAgICAgICAgLy8gc28gd2UganVzdCBuZWVkIHRvIGNoZWNrIHRoZSBSSUdIVCBzaWRlIG9mIGVudGl0eVxyXG4gICAgICAgICAgICB4ID0gZW50aXR5LmJvdW5kcy5yaWdodDtcclxuICAgICAgICB9IGVsc2UgaWYgKGVudGl0eS52ZWwueCA8IDApIHtcclxuICAgICAgICAgICAgLy8gbWFyaW8gaXMgZ29pbmcgdG93YXJkIExFRlRcclxuICAgICAgICAgICAgLy8gZWxzZSB3ZSBvbmx5IG5lZWQgdG8gY2hlY2sgdGhlIExFRlQgc2lkZSBvZiBlbnRpdHlcclxuICAgICAgICAgICAgeCA9IGVudGl0eS5ib3VuZHMubGVmdDtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBjb25zdCBtYXRjaGVzID0gdGhpcy50aWxlLnNlYXJjaEJ5UmFuZ2UoXHJcbiAgICAgICAgICAgIHgsIHgsXHJcbiAgICAgICAgICAgZW50aXR5LmJvdW5kcy50b3AsIGVudGl0eS5ib3VuZHMuYm90dG9tXHJcbiAgICAgICAgKTtcclxuXHJcbiAgICAgICAgbWF0Y2hlcy5mb3JFYWNoKG1hdGNoID0+IHtcclxuICAgICAgICAgICAgaWYgKG1hdGNoLnRpbGUudHlwZSAhPT0gJ2dyb3VuZCcpIHtcclxuICAgICAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgaWYgKGVudGl0eS52ZWwueCA+IDApIHtcclxuICAgICAgICAgICAgICAgIGlmIChlbnRpdHkuYm91bmRzLnJpZ2h0ID4gbWF0Y2gueDEpIHtcclxuICAgICAgICAgICAgICAgICAgICBlbnRpdHkub2JzdHJ1Y3QoU2lkZXMuTEVGVCwgbWF0Y2gpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9IGVsc2UgaWYgKGVudGl0eS52ZWwueCA8IDApIHtcclxuICAgICAgICAgICAgICAgIGlmIChlbnRpdHkuYm91bmRzLmxlZnQgPCBtYXRjaC54Mikge1xyXG4gICAgICAgICAgICAgICAgICAgIGVudGl0eS5vYnN0cnVjdChTaWRlcy5SSUdIVCwgbWF0Y2gpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSlcclxuXHJcbiAgICB9XHJcblxyXG4gICAgY2hlY2tZKGVudGl0eSkge1xyXG4gICAgICAgIGxldCB5O1xyXG4gICAgICAgIGlmIChlbnRpdHkudmVsLnkgPiAwKSB7XHJcbiAgICAgICAgICAgIC8vIG1hcmlvIGlzIGdvaW5nIHRvd2FyZCBCXHJcbiAgICAgICAgICAgIHkgPSBlbnRpdHkuYm91bmRzLmJvdHRvbTtcclxuICAgICAgICB9IGVsc2UgaWYgKGVudGl0eS52ZWwueSA8IDApIHtcclxuICAgICAgICAgICAgLy8gbWFyaW8gaXMgZ29pbmcgdG93YXJkIFRPUFxyXG4gICAgICAgICAgICB5ID1lbnRpdHkuYm91bmRzLnRvcDtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBjb25zdCBtYXRjaGVzID0gdGhpcy50aWxlLnNlYXJjaEJ5UmFuZ2UoXHJcbiAgICAgICAgICAgIGVudGl0eS5ib3VuZHMubGVmdCwgZW50aXR5LmJvdW5kcy5yaWdodCxcclxuICAgICAgICAgICAgeSwgeVxyXG4gICAgICAgICk7XHJcblxyXG4gICAgICAgIG1hdGNoZXMuZm9yRWFjaChtYXRjaCA9PiB7XHJcbiAgICAgICAgICAgIGlmIChtYXRjaC50aWxlLnR5cGUgIT09ICdncm91bmQnKSB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIGlmIChlbnRpdHkudmVsLnkgPiAwKSB7XHJcbiAgICAgICAgICAgICAgICBpZiAoZW50aXR5LmJvdW5kcy5ib3R0b20gPiBtYXRjaC55MSkge1xyXG4gICAgICAgICAgICAgICAgICAgIGVudGl0eS5vYnN0cnVjdChTaWRlcy5CT1RUT00sIG1hdGNoKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfSBlbHNlIGlmIChlbnRpdHkudmVsLnkgPCAwKSB7XHJcbiAgICAgICAgICAgICAgICBpZiAoZW50aXR5LnBvcy55IDwgbWF0Y2gueTIpIHtcclxuICAgICAgICAgICAgICAgICAgICBlbnRpdHkub2JzdHJ1Y3QoU2lkZXMuVE9QLCBtYXRjaCk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9KVxyXG5cclxuICAgIH1cclxuXHJcbn1cclxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vcHVibGljL2pzL1RpbGVDb2xsaWRlci5qcyIsIm1vZHVsZS5leHBvcnRzID0geyBcImRlZmF1bHRcIjogcmVxdWlyZShcImNvcmUtanMvbGlicmFyeS9mbi9hcnJheS9mcm9tXCIpLCBfX2VzTW9kdWxlOiB0cnVlIH07XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9ub2RlX21vZHVsZXMvX2JhYmVsLXJ1bnRpbWVANi4yNi4wQGJhYmVsLXJ1bnRpbWUvY29yZS1qcy9hcnJheS9mcm9tLmpzXG4vLyBtb2R1bGUgaWQgPSAxNTRcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwicmVxdWlyZSgnLi4vLi4vbW9kdWxlcy9lczYuc3RyaW5nLml0ZXJhdG9yJyk7XG5yZXF1aXJlKCcuLi8uLi9tb2R1bGVzL2VzNi5hcnJheS5mcm9tJyk7XG5tb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoJy4uLy4uL21vZHVsZXMvX2NvcmUnKS5BcnJheS5mcm9tO1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9ub2RlX21vZHVsZXMvX2NvcmUtanNAMi41LjNAY29yZS1qcy9saWJyYXJ5L2ZuL2FycmF5L2Zyb20uanNcbi8vIG1vZHVsZSBpZCA9IDE1NVxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCIndXNlIHN0cmljdCc7XG52YXIgY3R4ID0gcmVxdWlyZSgnLi9fY3R4Jyk7XG52YXIgJGV4cG9ydCA9IHJlcXVpcmUoJy4vX2V4cG9ydCcpO1xudmFyIHRvT2JqZWN0ID0gcmVxdWlyZSgnLi9fdG8tb2JqZWN0Jyk7XG52YXIgY2FsbCA9IHJlcXVpcmUoJy4vX2l0ZXItY2FsbCcpO1xudmFyIGlzQXJyYXlJdGVyID0gcmVxdWlyZSgnLi9faXMtYXJyYXktaXRlcicpO1xudmFyIHRvTGVuZ3RoID0gcmVxdWlyZSgnLi9fdG8tbGVuZ3RoJyk7XG52YXIgY3JlYXRlUHJvcGVydHkgPSByZXF1aXJlKCcuL19jcmVhdGUtcHJvcGVydHknKTtcbnZhciBnZXRJdGVyRm4gPSByZXF1aXJlKCcuL2NvcmUuZ2V0LWl0ZXJhdG9yLW1ldGhvZCcpO1xuXG4kZXhwb3J0KCRleHBvcnQuUyArICRleHBvcnQuRiAqICFyZXF1aXJlKCcuL19pdGVyLWRldGVjdCcpKGZ1bmN0aW9uIChpdGVyKSB7IEFycmF5LmZyb20oaXRlcik7IH0pLCAnQXJyYXknLCB7XG4gIC8vIDIyLjEuMi4xIEFycmF5LmZyb20oYXJyYXlMaWtlLCBtYXBmbiA9IHVuZGVmaW5lZCwgdGhpc0FyZyA9IHVuZGVmaW5lZClcbiAgZnJvbTogZnVuY3Rpb24gZnJvbShhcnJheUxpa2UgLyogLCBtYXBmbiA9IHVuZGVmaW5lZCwgdGhpc0FyZyA9IHVuZGVmaW5lZCAqLykge1xuICAgIHZhciBPID0gdG9PYmplY3QoYXJyYXlMaWtlKTtcbiAgICB2YXIgQyA9IHR5cGVvZiB0aGlzID09ICdmdW5jdGlvbicgPyB0aGlzIDogQXJyYXk7XG4gICAgdmFyIGFMZW4gPSBhcmd1bWVudHMubGVuZ3RoO1xuICAgIHZhciBtYXBmbiA9IGFMZW4gPiAxID8gYXJndW1lbnRzWzFdIDogdW5kZWZpbmVkO1xuICAgIHZhciBtYXBwaW5nID0gbWFwZm4gIT09IHVuZGVmaW5lZDtcbiAgICB2YXIgaW5kZXggPSAwO1xuICAgIHZhciBpdGVyRm4gPSBnZXRJdGVyRm4oTyk7XG4gICAgdmFyIGxlbmd0aCwgcmVzdWx0LCBzdGVwLCBpdGVyYXRvcjtcbiAgICBpZiAobWFwcGluZykgbWFwZm4gPSBjdHgobWFwZm4sIGFMZW4gPiAyID8gYXJndW1lbnRzWzJdIDogdW5kZWZpbmVkLCAyKTtcbiAgICAvLyBpZiBvYmplY3QgaXNuJ3QgaXRlcmFibGUgb3IgaXQncyBhcnJheSB3aXRoIGRlZmF1bHQgaXRlcmF0b3IgLSB1c2Ugc2ltcGxlIGNhc2VcbiAgICBpZiAoaXRlckZuICE9IHVuZGVmaW5lZCAmJiAhKEMgPT0gQXJyYXkgJiYgaXNBcnJheUl0ZXIoaXRlckZuKSkpIHtcbiAgICAgIGZvciAoaXRlcmF0b3IgPSBpdGVyRm4uY2FsbChPKSwgcmVzdWx0ID0gbmV3IEMoKTsgIShzdGVwID0gaXRlcmF0b3IubmV4dCgpKS5kb25lOyBpbmRleCsrKSB7XG4gICAgICAgIGNyZWF0ZVByb3BlcnR5KHJlc3VsdCwgaW5kZXgsIG1hcHBpbmcgPyBjYWxsKGl0ZXJhdG9yLCBtYXBmbiwgW3N0ZXAudmFsdWUsIGluZGV4XSwgdHJ1ZSkgOiBzdGVwLnZhbHVlKTtcbiAgICAgIH1cbiAgICB9IGVsc2Uge1xuICAgICAgbGVuZ3RoID0gdG9MZW5ndGgoTy5sZW5ndGgpO1xuICAgICAgZm9yIChyZXN1bHQgPSBuZXcgQyhsZW5ndGgpOyBsZW5ndGggPiBpbmRleDsgaW5kZXgrKykge1xuICAgICAgICBjcmVhdGVQcm9wZXJ0eShyZXN1bHQsIGluZGV4LCBtYXBwaW5nID8gbWFwZm4oT1tpbmRleF0sIGluZGV4KSA6IE9baW5kZXhdKTtcbiAgICAgIH1cbiAgICB9XG4gICAgcmVzdWx0Lmxlbmd0aCA9IGluZGV4O1xuICAgIHJldHVybiByZXN1bHQ7XG4gIH1cbn0pO1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9ub2RlX21vZHVsZXMvX2NvcmUtanNAMi41LjNAY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvZXM2LmFycmF5LmZyb20uanNcbi8vIG1vZHVsZSBpZCA9IDE1NlxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCIndXNlIHN0cmljdCc7XG52YXIgJGRlZmluZVByb3BlcnR5ID0gcmVxdWlyZSgnLi9fb2JqZWN0LWRwJyk7XG52YXIgY3JlYXRlRGVzYyA9IHJlcXVpcmUoJy4vX3Byb3BlcnR5LWRlc2MnKTtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAob2JqZWN0LCBpbmRleCwgdmFsdWUpIHtcbiAgaWYgKGluZGV4IGluIG9iamVjdCkgJGRlZmluZVByb3BlcnR5LmYob2JqZWN0LCBpbmRleCwgY3JlYXRlRGVzYygwLCB2YWx1ZSkpO1xuICBlbHNlIG9iamVjdFtpbmRleF0gPSB2YWx1ZTtcbn07XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL25vZGVfbW9kdWxlcy9fY29yZS1qc0AyLjUuM0Bjb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9fY3JlYXRlLXByb3BlcnR5LmpzXG4vLyBtb2R1bGUgaWQgPSAxNTdcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwicmVxdWlyZSgnLi4vbW9kdWxlcy9lczYub2JqZWN0LnRvLXN0cmluZycpO1xucmVxdWlyZSgnLi4vbW9kdWxlcy9lczYuc3RyaW5nLml0ZXJhdG9yJyk7XG5yZXF1aXJlKCcuLi9tb2R1bGVzL3dlYi5kb20uaXRlcmFibGUnKTtcbnJlcXVpcmUoJy4uL21vZHVsZXMvZXM2Lm1hcCcpO1xucmVxdWlyZSgnLi4vbW9kdWxlcy9lczcubWFwLnRvLWpzb24nKTtcbnJlcXVpcmUoJy4uL21vZHVsZXMvZXM3Lm1hcC5vZicpO1xucmVxdWlyZSgnLi4vbW9kdWxlcy9lczcubWFwLmZyb20nKTtcbm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZSgnLi4vbW9kdWxlcy9fY29yZScpLk1hcDtcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vbm9kZV9tb2R1bGVzL19jb3JlLWpzQDIuNS4zQGNvcmUtanMvbGlicmFyeS9mbi9tYXAuanNcbi8vIG1vZHVsZSBpZCA9IDE1OFxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCIndXNlIHN0cmljdCc7XG52YXIgc3Ryb25nID0gcmVxdWlyZSgnLi9fY29sbGVjdGlvbi1zdHJvbmcnKTtcbnZhciB2YWxpZGF0ZSA9IHJlcXVpcmUoJy4vX3ZhbGlkYXRlLWNvbGxlY3Rpb24nKTtcbnZhciBNQVAgPSAnTWFwJztcblxuLy8gMjMuMSBNYXAgT2JqZWN0c1xubW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKCcuL19jb2xsZWN0aW9uJykoTUFQLCBmdW5jdGlvbiAoZ2V0KSB7XG4gIHJldHVybiBmdW5jdGlvbiBNYXAoKSB7IHJldHVybiBnZXQodGhpcywgYXJndW1lbnRzLmxlbmd0aCA+IDAgPyBhcmd1bWVudHNbMF0gOiB1bmRlZmluZWQpOyB9O1xufSwge1xuICAvLyAyMy4xLjMuNiBNYXAucHJvdG90eXBlLmdldChrZXkpXG4gIGdldDogZnVuY3Rpb24gZ2V0KGtleSkge1xuICAgIHZhciBlbnRyeSA9IHN0cm9uZy5nZXRFbnRyeSh2YWxpZGF0ZSh0aGlzLCBNQVApLCBrZXkpO1xuICAgIHJldHVybiBlbnRyeSAmJiBlbnRyeS52O1xuICB9LFxuICAvLyAyMy4xLjMuOSBNYXAucHJvdG90eXBlLnNldChrZXksIHZhbHVlKVxuICBzZXQ6IGZ1bmN0aW9uIHNldChrZXksIHZhbHVlKSB7XG4gICAgcmV0dXJuIHN0cm9uZy5kZWYodmFsaWRhdGUodGhpcywgTUFQKSwga2V5ID09PSAwID8gMCA6IGtleSwgdmFsdWUpO1xuICB9XG59LCBzdHJvbmcsIHRydWUpO1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9ub2RlX21vZHVsZXMvX2NvcmUtanNAMi41LjNAY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvZXM2Lm1hcC5qc1xuLy8gbW9kdWxlIGlkID0gMTU5XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIi8vIGh0dHBzOi8vZ2l0aHViLmNvbS9EYXZpZEJydWFudC9NYXAtU2V0LnByb3RvdHlwZS50b0pTT05cbnZhciAkZXhwb3J0ID0gcmVxdWlyZSgnLi9fZXhwb3J0Jyk7XG5cbiRleHBvcnQoJGV4cG9ydC5QICsgJGV4cG9ydC5SLCAnTWFwJywgeyB0b0pTT046IHJlcXVpcmUoJy4vX2NvbGxlY3Rpb24tdG8tanNvbicpKCdNYXAnKSB9KTtcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vbm9kZV9tb2R1bGVzL19jb3JlLWpzQDIuNS4zQGNvcmUtanMvbGlicmFyeS9tb2R1bGVzL2VzNy5tYXAudG8tanNvbi5qc1xuLy8gbW9kdWxlIGlkID0gMTYwXG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIi8vIGh0dHBzOi8vdGMzOS5naXRodWIuaW8vcHJvcG9zYWwtc2V0bWFwLW9mZnJvbS8jc2VjLW1hcC5vZlxucmVxdWlyZSgnLi9fc2V0LWNvbGxlY3Rpb24tb2YnKSgnTWFwJyk7XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL25vZGVfbW9kdWxlcy9fY29yZS1qc0AyLjUuM0Bjb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9lczcubWFwLm9mLmpzXG4vLyBtb2R1bGUgaWQgPSAxNjFcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiLy8gaHR0cHM6Ly90YzM5LmdpdGh1Yi5pby9wcm9wb3NhbC1zZXRtYXAtb2Zmcm9tLyNzZWMtbWFwLmZyb21cbnJlcXVpcmUoJy4vX3NldC1jb2xsZWN0aW9uLWZyb20nKSgnTWFwJyk7XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL25vZGVfbW9kdWxlcy9fY29yZS1qc0AyLjUuM0Bjb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9lczcubWFwLmZyb20uanNcbi8vIG1vZHVsZSBpZCA9IDE2MlxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJleHBvcnQgZnVuY3Rpb24gY3JlYXRlQW5pbShmcmFtZXMsIGZyYW1lTGVuKSB7XHJcbiAgICByZXR1cm4gZnVuY3Rpb24gcmVzb2x2ZUZyYW1lKGRpc3RhbmNlKSB7XHJcbiAgICAgICAgY29uc3QgZnJhbWVJbmRleCA9IE1hdGguZmxvb3IoZGlzdGFuY2UgLyBmcmFtZUxlbikgJSBmcmFtZXMubGVuZ3RoO1xyXG5cclxuICAgICAgICByZXR1cm4gZnJhbWVzW2ZyYW1lSW5kZXhdO1xyXG4gICAgfVxyXG59XHJcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3B1YmxpYy9qcy9hbmltLmpzIiwiZXhwb3J0IGZ1bmN0aW9uIGNyZWF0ZVNwcml0ZUxheWVyKGVudGl0aWVzLCB3aWR0aCA9IDY0LCBoZWlnaHQgPSA2NCkge1xyXG4gICAgY29uc3Qgc3ByaXRlQnVmZmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnY2FudmFzJylcclxuICAgIHNwcml0ZUJ1ZmZlci53aWR0aCA9IHdpZHRoO1xyXG4gICAgc3ByaXRlQnVmZmVyLmhlaWdodCA9IGhlaWdodDtcclxuXHJcbiAgICBjb25zdCBzcHJpdGVDb250ZXh0ID0gc3ByaXRlQnVmZmVyLmdldENvbnRleHQoJzJkJyk7XHJcbiAgICByZXR1cm4gZnVuY3Rpb24gZHJhd1Nwcml0ZUxheWVyKGNvbnRleHQsIGNhbWVyYSkge1xyXG4gICAgICAgIGVudGl0aWVzLmZvckVhY2goZW50aXR5ID0+IHtcclxuICAgICAgICAgICAgc3ByaXRlQ29udGV4dC5jbGVhclJlY3QoMCwgMCwgd2lkdGgsIGhlaWdodCk7ICAgLy8gc2V0IGJhY2tncm91bmQgdG8gdHJhbnNwYXJlbnQuXHJcbiAgICAgICAgICAgIGVudGl0eS5kcmF3KHNwcml0ZUNvbnRleHQpO1xyXG5cclxuICAgICAgICAgICAgY29udGV4dC5kcmF3SW1hZ2UoXHJcbiAgICAgICAgICAgICAgICBzcHJpdGVCdWZmZXIsXHJcbiAgICAgICAgICAgICAgICBlbnRpdHkucG9zLnggLSBjYW1lcmEucG9zLngsXHJcbiAgICAgICAgICAgICAgICBlbnRpdHkucG9zLnkgLSBjYW1lcmEucG9zLnlcclxuICAgICAgICAgICAgKVxyXG4gICAgICAgIH0pXHJcbiAgICB9XHJcbn1cclxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vcHVibGljL2pzL2xheWVycy9zcHJpdGVzLmpzIiwiaW1wb3J0IFRpbGVSZXNvbHZlciBmcm9tICcuLi9UaWxlUmVzb2x2ZXIuanMnXHJcblxyXG5leHBvcnQgZnVuY3Rpb24gY3JlYXRlQmFja2dyb3VuZExheWVyKGxldmVsLCB0aWxlcywgc3ByaXRlcykge1xyXG4gICAgY29uc3QgcmVzb2x2ZXIgPSBuZXcgVGlsZVJlc29sdmVyKHRpbGVzKTtcclxuXHJcbiAgICBjb25zdCBidWZmZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdjYW52YXMnKTtcclxuICAgIGJ1ZmZlci53aWR0aCA9IDI1NiArIDE2OyAgICAvLyAxNiArIDEgY29sdW1uXHJcbiAgICBidWZmZXIuaGVpZ2h0ID0gMjQwO1xyXG5cclxuICAgIGNvbnN0IGNvbnRleHQgPSBidWZmZXIuZ2V0Q29udGV4dCgnMmQnKTtcclxuXHJcbiAgICBmdW5jdGlvbiByZWRyYXcoc3RhcnRJbmRleCwgZW5kSW5kZXgpIHtcclxuXHJcbiAgICAgICAgY29udGV4dC5jbGVhclJlY3QoMCwwLGJ1ZmZlci53aWR0aCxidWZmZXIuaGVpZ2h0KTtcclxuXHJcbiAgICAgICAgZm9yIChsZXQgeCA9IHN0YXJ0SW5kZXg7IHggPD0gZW5kSW5kZXg7IHgrKykge1xyXG4gICAgICAgICAgICBjb25zdCBjb2wgPSB0aWxlcy5ncmlkW3hdO1xyXG4gICAgICAgICAgICBpZiAoY29sKSB7XHJcbiAgICAgICAgICAgICAgICAvLyBjb25zb2xlLmxvZyh4IC0gc3RhcnRJbmRleCk7XHJcbiAgICAgICAgICAgICAgICAvKlRPRE8gQ2Fubm90IGZpZ3VyZSBvdXQgdGhlIG1lYW4gb2YgeCAtIHN0YXJ0SW5kZXggYW5kIC1jYW1lcmEucG9zLnggJSAxNiBPUFRJTUlaQVRJT04gaW4gRVAgNiovXHJcbiAgICAgICAgICAgICAgICBjb2wuZm9yRWFjaCgodGlsZSwgeSkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgIGlmIChzcHJpdGVzLmFuaW1hdGlvbnMuaGFzKHRpbGUubmFtZSkpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgc3ByaXRlcy5kcmF3QW5pbShcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRpbGUubmFtZSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnRleHQsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB4IC0gc3RhcnRJbmRleCxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHksXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBsZXZlbC50b3RhbFRpbWUpO1xyXG4gICAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHNwcml0ZXMuZHJhd1RpbGUoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aWxlLm5hbWUsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb250ZXh0LFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgeCAtIHN0YXJ0SW5kZXgsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB5KTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIHJldHVybiBmdW5jdGlvbiBkcmF3QmFja2dyb3VuZExheWVyKGNvbnRleHQsIGNhbWVyYSkge1xyXG4gICAgICAgIGNvbnN0IGRyYXdXaWR0aCA9IHJlc29sdmVyLnRvSW5kZXgoY2FtZXJhLnNpemUueCksXHJcbiAgICAgICAgICAgIGRyYXdGcm9tID0gcmVzb2x2ZXIudG9JbmRleChjYW1lcmEucG9zLngpO1xyXG4gICAgICAgIGNvbnN0IGRyYXdFbmQgPSBkcmF3RnJvbSArIGRyYXdXaWR0aDtcclxuXHJcbiAgICAgICAgcmVkcmF3KGRyYXdGcm9tLCBkcmF3RW5kKTtcclxuXHJcbiAgICAgICAgY29udGV4dC5kcmF3SW1hZ2UoXHJcbiAgICAgICAgICAgIGJ1ZmZlcixcclxuICAgICAgICAgICAgLWNhbWVyYS5wb3MueCAlIDE2LFxyXG4gICAgICAgICAgICAtY2FtZXJhLnBvcy55KTtcclxuICAgIH1cclxuXHJcbiAgICAvLyAvLyBIaWdoLU9yZGVyIEZ1bmN0aW9uXHJcbiAgICAvLyByZXR1cm4gZnVuY3Rpb24gZHJhd0JhY2tncm91bmRMYXllcihjb250ZXh0LCBjYW1lcmEpIHtcclxuICAgIC8vICAgICBjb250ZXh0LmRyYXdJbWFnZShidWZmZXIsIC1jYW1lcmEucG9zLngsIC1jYW1lcmEucG9zLnkpO1xyXG4gICAgLy8gfVxyXG59XHJcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3B1YmxpYy9qcy9sYXllcnMvYmFja2dyb3VuZC5qcyIsImltcG9ydCB7bG9hZEltYWdlfSBmcm9tICcuLi9sb2FkZXIuanMnO1xyXG5pbXBvcnQgU3ByaXRlU2hlZXQgZnJvbSAnLi4vU3ByaXRlU2hlZXQuanMnO1xyXG5cclxuY29uc3QgQ0hBUlMgPSAnICFcIiMkJSZcXCcoKSorLC0uLzAxMjM0NTY3ODk6Ozw9Pj9AQUJDREVGR0hJSktMTU5PUFFSU1RVVldYWVpbXFxcXF1eX2BhYmNkZWZnaGlqa2xtbm9wcXJzdHV2d3h5ent8fX4nO1xyXG5cclxuXHJcbmNsYXNzIEZvbnQge1xyXG4gICAgY29uc3RydWN0b3Ioc3ByaXRlU2hlZXQsIHNpemUpIHtcclxuICAgICAgICB0aGlzLnNwcml0ZXMgPSBzcHJpdGVTaGVldDtcclxuICAgICAgICB0aGlzLnNpemUgPSBzaXplO1xyXG4gICAgfVxyXG5cclxuICAgIHByaW50KHRleHQsIGNvbnRleHQsIHgsIHkpIHtcclxuICAgICAgICBbLi4udGV4dF0uZm9yRWFjaCgoY2hhciwgcG9zKSA9PiB7XHJcbiAgICAgICAgICAgIHRoaXMuc3ByaXRlcy5kcmF3KGNoYXIsIGNvbnRleHQsIHggKyBwb3MgKiB0aGlzLnNpemUsIHkpO1xyXG4gICAgICAgIH0pXHJcbiAgICB9XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBsb2FkRm9udCgpIHtcclxuICAgIHJldHVybiBsb2FkSW1hZ2UoJy4vaW1nL2ZvbnQucG5nJylcclxuICAgICAgICAudGhlbihpbWcgPT4ge1xyXG4gICAgICAgICAgICBjb25zdCBmb250U3ByaXRlID0gbmV3IFNwcml0ZVNoZWV0KGltZyk7XHJcblxyXG4gICAgICAgICAgICBjb25zdCBzaXplID0gOCwgcm93TGVuID0gaW1nLndpZHRoO1xyXG4gICAgICAgICAgICBjb25zdCBjb2xOdW0gPSBpbWcud2lkdGggLyBzaXplO1xyXG4gICAgICAgICAgICBmb3IgKGxldCBbaW5kZXgsIGNoYXJdIG9mIFsuLi5DSEFSU10uZW50cmllcygpKSB7XHJcblxyXG4gICAgICAgICAgICAgICAgY29uc3QgeCAgPSAoaW5kZXggKiBzaXplKSAlIHJvd0xlbjtcclxuICAgICAgICAgICAgICAgIGNvbnN0IHkgPSBNYXRoLmZsb29yKGluZGV4IC8gY29sTnVtKSpzaXplO1xyXG5cclxuICAgICAgICAgICAgICAgIGZvbnRTcHJpdGUuZGVmaW5lKGNoYXIsIHgsIHksIHNpemUsIHNpemUpO1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICByZXR1cm4gbmV3IEZvbnQoZm9udFNwcml0ZSwgc2l6ZSk7XHJcbiAgICAgICAgfSlcclxufVxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3B1YmxpYy9qcy9sb2FkZXJzL2ZvbnQuanMiLCJpbXBvcnQge2xvYWRNYXJpb30gZnJvbSAnLi9lbnRpdGllcy9NYXJpby5qcydcclxuaW1wb3J0IHtsb2FkR29vbWJhfSBmcm9tICcuL2VudGl0aWVzL0dvb21iYS5qcydcclxuaW1wb3J0IHtsb2FkS29vcGF9IGZyb20gJy4vZW50aXRpZXMvS29vcGEuanMnXHJcblxyXG5leHBvcnQgZnVuY3Rpb24gbG9hZEVudGl0aWVzKCkge1xyXG4gICAgY29uc3QgZW50aXRpZXNGYWN0b3J5ID0ge307XHJcblxyXG4gICAgZnVuY3Rpb24gYWRkQXMobmFtZSkge1xyXG4gICAgICAgIHJldHVybiBmYWN0b3J5ID0+IHtlbnRpdGllc0ZhY3RvcnlbbmFtZV0gPSBmYWN0b3J5fVxyXG4gICAgfVxyXG5cclxuICAgIHJldHVybiBQcm9taXNlLmFsbChbXHJcbiAgICAgICAgbG9hZE1hcmlvKCkudGhlbihhZGRBcygnbWFyaW8nKSksXHJcbiAgICAgICAgbG9hZEdvb21iYSgpLnRoZW4oYWRkQXMoJ2dvb21iYScpKSxcclxuICAgICAgICBsb2FkS29vcGEoKS50aGVuKGFkZEFzKCdrb29wYScpKSxcclxuICAgIF0pXHJcbiAgICAgICAgLnRoZW4oKCkgPT4gZW50aXRpZXNGYWN0b3J5KVxyXG59XHJcblxyXG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9wdWJsaWMvanMvZW50aXRpZXMuanMiLCJpbXBvcnQgRW50aXR5IGZyb20gJy4uL0VudGl0eS5qcydcclxuLy8gaW1wb3J0IFZlbG9jaXR5IGZyb20gJy4uL3RyYWl0cy9WZWxvY2l0eS5qcydcclxuaW1wb3J0IEdvIGZyb20gJy4uL3RyYWl0cy9Hby5qcydcclxuaW1wb3J0IEp1bXAgZnJvbSAnLi4vdHJhaXRzL0p1bXAuanMnXHJcbmltcG9ydCBTdG9tZXIgZnJvbSAnLi4vdHJhaXRzL1N0b21lci5qcydcclxuaW1wb3J0IEtpbGxhYmxlIGZyb20gJy4uL3RyYWl0cy9LaWxsYWJsZS5qcydcclxuaW1wb3J0IFNvbGlkIGZyb20gJy4uL3RyYWl0cy9Tb2xpZC5qcydcclxuaW1wb3J0IFBoeXNpY3MgZnJvbSAnLi4vdHJhaXRzL1BoeXNpY3MuanMnXHJcbi8vIGltcG9ydCBQbGF5ZXJDb250cm9sbGVyIGZyb20gJy4uL3RyYWl0cy9QbGF5ZXJDb250cm9sbGVyLmpzJ1xyXG5pbXBvcnQge2xvYWRTcHJpdGVTaGVldH0gZnJvbSAnLi4vbG9hZGVyLmpzJztcclxuXHJcbi8qTmFtZSBDb252ZW50aW9uOlxyXG4qIDEuIGxvYWRTb21ldGhpbmcgaXMgc3luY2hyb25vdXMsIGNyZWF0ZVNvbWV0aGluZyBpcyBhc3luY2hyb25vdXMuKi9cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBsb2FkTWFyaW8oKSB7XHJcbiAgICByZXR1cm4gbG9hZFNwcml0ZVNoZWV0KCdtYXJpbycpXHJcbiAgICAgICAgLnRoZW4oY3JlYXRlTWFyaW9GYWN0b3J5KVxyXG59XHJcblxyXG5mdW5jdGlvbiBjcmVhdGVNYXJpb0ZhY3Rvcnkoc3ByaXRlKSB7XHJcbiAgICBjb25zdCBydW5BbmltID0gc3ByaXRlLmFuaW1hdGlvbnMuZ2V0KFwicnVuXCIpO1xyXG5cclxuICAgICAgICBmdW5jdGlvbiBmcmFtZVJvdXRlKG1hcmlvKSB7XHJcbiAgICAgICAgaWYgKG1hcmlvLmp1bXAuZmFsbGluZykge1xyXG4gICAgICAgICAgICByZXR1cm4gJ2p1bXAnO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgaWYgKG1hcmlvLmdvLmRpc3RhbmNlID4gMCkge1xyXG4gICAgICAgICAgICBpZiAoKG1hcmlvLnZlbC54ID4gMCAmJiBtYXJpby5nby5kaXIgPCAwKSB8fFxyXG4gICAgICAgICAgICAgICAgKG1hcmlvLnZlbC54IDwgMCAmJiBtYXJpby5nby5kaXIgPiAwKSkge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuICdicmVhayc7XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIHJldHVybiBydW5BbmltKG1hcmlvLmdvLmRpc3RhbmNlKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHJldHVybiAnaWRsZSc7XHJcbiAgICB9XHJcblxyXG4gICAgZnVuY3Rpb24gZHJhd01hcmlvKGNvbnRleHQpIHtcclxuICAgICAgICBzcHJpdGUuZHJhdyhmcmFtZVJvdXRlKHRoaXMpLCBjb250ZXh0LCAwLCAwLCB0aGlzLmdvLmhlYWRpbmcgPCAwKTtcclxuICAgIH1cclxuXHJcbiAgICByZXR1cm4gZnVuY3Rpb24gY3JlYXRlTWFyaW8oKSB7XHJcbiAgICAgICAgY29uc3QgbWFyaW8gPSBuZXcgRW50aXR5KCk7XHJcbiAgICAgICAgbWFyaW8uc2l6ZS5zZXQoMTQsIDE2KTtcclxuXHJcbiAgICAgICAgbWFyaW8uYWRkVHJhaXQobmV3IFBoeXNpY3MoKSk7XHJcbiAgICAgICAgbWFyaW8uYWRkVHJhaXQobmV3IFNvbGlkKCkpO1xyXG4gICAgICAgIG1hcmlvLmFkZFRyYWl0KG5ldyBHbygpKTtcclxuICAgICAgICBtYXJpby5hZGRUcmFpdChuZXcgSnVtcCgpKTtcclxuICAgICAgICBtYXJpby5hZGRUcmFpdChuZXcgU3RvbWVyKCkpO1xyXG4gICAgICAgIG1hcmlvLmFkZFRyYWl0KG5ldyBLaWxsYWJsZSgpKTtcclxuICAgICAgICAvLyBtYXJpby5hZGRUcmFpdChuZXcgUGxheWVyQ29udHJvbGxlcigpKTtcclxuXHJcbiAgICAgICAgbWFyaW8ua2lsbGFibGUucmVtb3ZlQWZ0ZXIgPSAwO1xyXG4gICAgICAgIC8vIG1hcmlvLnBsYXllckNvbnRyb2xsZXIuc2V0UGxheWVyKG1hcmlvKTtcclxuXHJcbiAgICAgICAgbWFyaW8uZHJhdyA9IGRyYXdNYXJpbztcclxuXHJcbiAgICAgICAgcmV0dXJuIG1hcmlvO1xyXG4gICAgfVxyXG59XHJcblxyXG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9wdWJsaWMvanMvZW50aXRpZXMvTWFyaW8uanMiLCJpbXBvcnQge1RyYWl0fSBmcm9tICcuLi9FbnRpdHkuanMnXHJcblxyXG4vKmV4dGVuZHMga2V5d29yZCBjYW4gYmUgdXNlZCB0byBpbmhlcml0IGFsbCB0aGUgcHJvcGVydGllcyBhbmQgbWV0aG9kcy4gKi9cclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgR28gZXh0ZW5kcyBUcmFpdCB7XHJcbiAgICBjb25zdHJ1Y3RvcigpIHtcclxuICAgICAgICAvKnN1cGVyIGtleXdvcmQgaW4gaGVyZSBtZWFucyB0aGUgZmF0aGVyIGNsYXNzJ3MgY29uc3RydWN0b3Igb2YgdGhpcyBjbGFzcy4gKi9cclxuICAgICAgICBzdXBlcignZ28nKTtcclxuXHJcbiAgICAgICAgdGhpcy5kaXIgPSAwO1xyXG4gICAgICAgIHRoaXMuYWNjZWxlcmF0aW9uID0gNDAwO1xyXG4gICAgICAgIHRoaXMuZGVjZWxlcmF0aW9uID0gMzAwO1xyXG4gICAgICAgIHRoaXMuZHJhZ0ZhY3RvciA9IDEvNTAwMDtcclxuXHJcbiAgICAgICAgdGhpcy5kaXN0YW5jZSA9IDA7XHJcbiAgICAgICAgdGhpcy5oZWFkaW5nID0gMTtcclxuICAgIH1cclxuXHJcbiAgICB1cGRhdGUoZW50aXR5LCBkZWx0YVRpbWUpIHtcclxuICAgICAgICBjb25zdCBhYnNYID0gTWF0aC5hYnMoZW50aXR5LnZlbC54KTtcclxuXHJcbiAgICAgICAgaWYgKHRoaXMuZGlyICE9PSAwKSB7XHJcbiAgICAgICAgICAgIGVudGl0eS52ZWwueCArPSB0aGlzLmFjY2VsZXJhdGlvbiAqIGRlbHRhVGltZSAqIHRoaXMuZGlyO1xyXG4gICAgICAgICAgICBpZiAoZW50aXR5Lmp1bXApIHtcclxuICAgICAgICAgICAgICAgIGlmICghZW50aXR5Lmp1bXAuZmFsbGluZykge1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuaGVhZGluZyA9IHRoaXMuZGlyO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5oZWFkaW5nID0gdGhpcy5kaXI7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9IGVsc2UgaWYgKGVudGl0eS52ZWwueCAhPT0gMCkge1xyXG4gICAgICAgICAgICBjb25zdCBkZWNlbCA9IE1hdGgubWluKGFic1gsIHRoaXMuZGVjZWxlcmF0aW9uICogZGVsdGFUaW1lKTtcclxuICAgICAgICAgICAgZW50aXR5LnZlbC54ICs9IGVudGl0eS52ZWwueCA+IDAgPyAtZGVjZWwgOiBkZWNlbDtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICB0aGlzLmRpc3RhbmNlID0gMDtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGNvbnN0IGRyYWcgPSB0aGlzLmRyYWdGYWN0b3IgKiBlbnRpdHkudmVsLnggKiBhYnNYO1xyXG4gICAgICAgIGVudGl0eS52ZWwueCAtPSBkcmFnO1xyXG5cclxuICAgICAgICB0aGlzLmRpc3RhbmNlICs9IGFic1ggKiBkZWx0YVRpbWU7XHJcbiAgICB9XHJcbn1cclxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vcHVibGljL2pzL3RyYWl0cy9Hby5qcyIsImltcG9ydCB7U2lkZXMsIFRyYWl0fSBmcm9tICcuLi9FbnRpdHkuanMnXHJcblxyXG4vKmV4dGVuZHMga2V5d29yZCBjYW4gYmUgdXNlZCB0byBpbmhlcml0IGFsbCB0aGUgcHJvcGVydGllcyBhbmQgbWV0aG9kcy4gKi9cclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgSnVtcCBleHRlbmRzIFRyYWl0IHtcclxuICAgIGNvbnN0cnVjdG9yKCkge1xyXG4gICAgICAgIC8qc3VwZXIga2V5d29yZCBpbiBoZXJlIG1lYW5zIHRoZSBmYXRoZXIgY2xhc3MncyBjb25zdHJ1Y3RvciBvZiB0aGlzIGNsYXNzLiAqL1xyXG4gICAgICAgIHN1cGVyKCdqdW1wJyk7XHJcblxyXG4gICAgICAgIHRoaXMuZHVyYXRpb24gPSAwLjM7XHJcbiAgICAgICAgdGhpcy52ZWxvY2l0eSA9IDIwMDtcclxuICAgICAgICB0aGlzLmVuZ2FnZVRpbWUgPSAwOyAvLyB0b3RhbCB0aW1lIGFsbG93IHRvICBwcmVzc2luZyBrZXlcclxuICAgICAgICB0aGlzLnJlYWR5ID0gMDtcclxuICAgICAgICB0aGlzLmdyYWNlUGVyaW9kID0gMC4xO1xyXG4gICAgICAgIHRoaXMucmVxdWVzdFRpbWUgPSAwO1xyXG4gICAgICAgIHRoaXMuc3BlZWRCb29zdCA9IDAuMztcclxuICAgIH1cclxuXHJcbiAgICBnZXQgZmFsbGluZygpIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5yZWFkeSA8IDA7XHJcbiAgICB9XHJcblxyXG4gICAgc3RhcnQoKSB7XHJcbiAgICAgICAgLy8gaWYgKHRoaXMucmVhZHkgPiAwKSB7XHJcbiAgICAgICAgLy8gICAgIHRoaXMuZW5nYWdlVGltZSA9IHRoaXMuZHVyYXRpb247XHJcbiAgICAgICAgLy8gfVxyXG4gICAgICAgIHRoaXMucmVxdWVzdFRpbWUgPSB0aGlzLmdyYWNlUGVyaW9kO1xyXG4gICAgfVxyXG5cclxuICAgIGNhbmNlbCgpIHtcclxuICAgICAgICB0aGlzLmVuZ2FnZVRpbWUgPSAwO1xyXG4gICAgICAgIHRoaXMucmVxdWVzdFRpbWUgPSAwO1xyXG4gICAgfVxyXG5cclxuICAgIG9ic3RydWN0KGVudGl0eSwgc2lkZSkge1xyXG4gICAgICAgIGlmIChzaWRlID09PSBTaWRlcy5CT1RUT00pIHtcclxuICAgICAgICAgICAgdGhpcy5yZWFkeSA9IDE7XHJcbiAgICAgICAgfSBlbHNlIGlmIChzaWRlID09PSBTaWRlcy5UT1ApIHtcclxuICAgICAgICAgICAgdGhpcy5jYW5jZWwoKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgdXBkYXRlKGVudGl0eSwgZGVsdGFUaW1lKSB7XHJcbiAgICAgICAgaWYgKHRoaXMucmVxdWVzdFRpbWUgPiAwKSB7XHJcbiAgICAgICAgICAgIGlmICh0aGlzLnJlYWR5ID4gMCkge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5lbmdhZ2VUaW1lID0gdGhpcy5kdXJhdGlvbjtcclxuICAgICAgICAgICAgICAgIHRoaXMucmVxdWVzdFRpbWUgPSAwO1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICB0aGlzLnJlcXVlc3RUaW1lIC09IGRlbHRhVGltZTtcclxuICAgICAgICB9XHJcblxyXG5cclxuICAgICAgICBpZiAodGhpcy5lbmdhZ2VUaW1lID4gMCkge1xyXG4gICAgICAgICAgICBlbnRpdHkudmVsLnkgPSAtKHRoaXMudmVsb2NpdHkgKyBNYXRoLmFicyhlbnRpdHkudmVsLngpICogdGhpcy5zcGVlZEJvb3N0KTtcclxuICAgICAgICAgICAgLypJZiBrZWVwIHByZXNzaW5nIHRoZSBrZXksIHRoZSBlbmdhZ2VUaW1lICh0b3RhbCB0aW1lIGFsbG93IHRvICBwcmVzc2luZyBrZXkgKSB3aWxsIGRlY3JlYXNlIGluIGEgcm93IHVudGlsIGxlc3MgdGhhbiAwLCB3aGljaCBtZWFucyB0aGUgdG90YWwgdGltZSBvZiBwcmVzc2luZyBhIGtleSBpcyBiaWdnZXIgdGhhbiB0aGUgYWxsb3cgZHVyYXRpb24oIHRoaXMuIGR1cmF0aW9uID0gMC41IChzZWNvbmQpKSwgc28gdGhlIGVudGl0eS52ZWwueSBzaG91bGQgbm90IGRlY3JlYXNlIGFueW1vcmUsIGluIG90aGVyIHdvcmRzLCB0aGUgbWFyaW8gc2hvdWxkIG5vdCB0cmF2ZWwgdXAgYW55bW9yZS4qL1xyXG4gICAgICAgICAgICB0aGlzLmVuZ2FnZVRpbWUgLT0gZGVsdGFUaW1lO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgLy8gY29uc29sZS5sb2coJ0lmIHdlIGFyZSByZWFkeSB0byBqdW1wPycsIHRoaXMucmVhZHkpXHJcbiAgICAgICAgdGhpcy5yZWFkeSAtLTtcclxuICAgIH1cclxufVxyXG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9wdWJsaWMvanMvdHJhaXRzL0p1bXAuanMiLCJpbXBvcnQge1RyYWl0fSBmcm9tICcuLi9FbnRpdHkuanMnXHJcblxyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBTdG9tZXIgZXh0ZW5kcyBUcmFpdCB7XHJcbiAgICBjb25zdHJ1Y3RvcigpIHtcclxuICAgICAgICBzdXBlcignc3RvbWVyJyk7XHJcbiAgICAgICAgdGhpcy5ib3VuY2VTcGVlZCA9IDQwMDtcclxuXHJcbiAgICAgICAgdGhpcy5vblN0b21wID0gZnVuY3Rpb24gKCkge1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBib3VuY2UodXMsIHRoZW0pIHtcclxuICAgICAgICB1cy5ib3VuZHMuYm90dG9tID0gdGhlbS5ib3VuZHMudG9wO1xyXG4gICAgICAgIHVzLnZlbC55ID0gLXRoaXMuYm91bmNlU3BlZWQ7XHJcbiAgICB9XHJcblxyXG4gICAgY29sbGlkZXModXMsIHRoZW0pIHtcclxuICAgICAgICAvKuatpOWkhOaYr+WQpuWPjeW8uei3s+i3g++8iGJvdW5jZe+8ieeahOWIpOaWreS4pemHjeS+nei1luS6i+S7tu+8iGtpbGzvvIxjb2xsaWRl562J77yJ55qE6Kem5Y+R6aG65bqP44CCXHJcbiAgICAgICAgKiDmiJHku6zlj6/ku6XpgInmi6npgJrov4fkuIDkupvnu4blvq7nmoTmlLnliqgtLS3mnaXosIPmlbTpobrluo/vvIzkvYbmmK/vvIHov4fkuo7kvp3otZbov5nnp43nu4blvq7nmoTmlLnliqjkuI3liKnku6XlkI7nu63pobnnm67nmoTmianlsZXjgIJcclxuICAgICAgICAqIOaJgOS7peaIkeS7rOmcgOimgeabtOWBpeWjrueahOino+WGs+aWueahiOOAgiovXHJcbiAgICAgICAgaWYgKCF0aGVtLmtpbGxhYmxlIHx8IHRoZW0ua2lsbGFibGUuZGVhZCkge1xyXG4gICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBpZiAoIHVzLnZlbC55ID4gdGhlbS52ZWwueSkge1xyXG4gICAgICAgICAgICB0aGlzLmJvdW5jZSh1cywgdGhlbSk7XHJcbiAgICAgICAgICAgIHRoaXMub25TdG9tcCh1cywgdGhlbSk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59XHJcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3B1YmxpYy9qcy90cmFpdHMvU3RvbWVyLmpzIiwiaW1wb3J0IEVudGl0eSwge1NpZGVzLCBUcmFpdH0gZnJvbSAnLi4vRW50aXR5LmpzJ1xyXG5pbXBvcnQge2xvYWRTcHJpdGVTaGVldH0gZnJvbSAnLi4vbG9hZGVyLmpzJztcclxuaW1wb3J0IFBlbmR1bHVtV2FsayBmcm9tICcuLi90cmFpdHMvUGVuZHVsdW1Nb3ZlLmpzJztcclxuaW1wb3J0IEtpbGxhYmxlIGZyb20gJy4uL3RyYWl0cy9LaWxsYWJsZS5qcyc7XHJcbmltcG9ydCBTb2xpZCBmcm9tICcuLi90cmFpdHMvU29saWQuanMnXHJcbmltcG9ydCBQaHlzaWNzIGZyb20gJy4uL3RyYWl0cy9QaHlzaWNzLmpzJ1xyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIGxvYWRHb29tYmEoKSB7XHJcbiAgICByZXR1cm4gbG9hZFNwcml0ZVNoZWV0KCdnb29tYmEnKVxyXG4gICAgICAgIC50aGVuKGNyZWF0ZUdvb21iYUZhY3RvcnkpXHJcbn1cclxuXHJcbmNsYXNzIEJlaGF2aW9yIGV4dGVuZHMgVHJhaXQge1xyXG4gICAgY29uc3RydWN0b3IoKSB7XHJcbiAgICAgICAgc3VwZXIoJ2JlaGF2aW9yJyk7XHJcbiAgICB9XHJcblxyXG4gICAgY29sbGlkZXModXMsIHRoZW0pIHtcclxuICAgICAgICAvLyB1cyBpcyBvdXIgZ29vbWJhLCB0aGVtIG9mdGVuIGFyZSBtYXJpby5cclxuICAgICAgICBpZiAodXMua2lsbGFibGUuZGVhZCkge1xyXG4gICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBpZiAodGhlbS5zdG9tZXIpIHtcclxuICAgICAgICAgICAgaWYgKHRoZW0udmVsLnkgPiB1cy52ZWwueSkge1xyXG4gICAgICAgICAgICAgICAgdXMua2lsbGFibGUua2lsbCgpO1xyXG4gICAgICAgICAgICAgICAgdXMucGVuZHVsdW1Nb3ZlLnNwZWVkID0gMDtcclxuICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgIHRoZW0ua2lsbGFibGUua2lsbCgpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59XHJcblxyXG5mdW5jdGlvbiBjcmVhdGVHb29tYmFGYWN0b3J5KHNwcml0ZSkge1xyXG4gICAgY29uc3Qgd2Fsa0FuaW0gPSBzcHJpdGUuYW5pbWF0aW9ucy5nZXQoJ3dhbGsnKTtcclxuXHJcbiAgICBmdW5jdGlvbiByb3V0ZUFuaW0oZ29vbWJhKSB7XHJcbiAgICAgICAgaWYgKGdvb21iYS5raWxsYWJsZS5kZWFkKSB7XHJcbiAgICAgICAgICAgIHJldHVybiAnZmxhdCc7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICByZXR1cm4gd2Fsa0FuaW0oZ29vbWJhLmxpZmVUaW1lKTtcclxuICAgIH1cclxuXHJcbiAgICBmdW5jdGlvbiBkcmF3R29vbWJhKGNvbnRleHQpIHtcclxuICAgICAgICBzcHJpdGUuZHJhdyhyb3V0ZUFuaW0odGhpcyksIGNvbnRleHQsIDAsIDApO1xyXG4gICAgfVxyXG5cclxuICAgIHJldHVybiBmdW5jdGlvbiBjcmVhdGVHb29tYmEoKSB7XHJcbiAgICAgICAgY29uc3QgZ29vbWJhID0gbmV3IEVudGl0eSgpO1xyXG4gICAgICAgIGdvb21iYS5zaXplLnNldCgxNiwgMTYpO1xyXG5cclxuICAgICAgICBnb29tYmEuYWRkVHJhaXQobmV3IFBoeXNpY3MoKSk7XHJcbiAgICAgICAgZ29vbWJhLmFkZFRyYWl0KG5ldyBTb2xpZCgpKTtcclxuICAgICAgICBnb29tYmEuYWRkVHJhaXQobmV3IFBlbmR1bHVtV2FsaygpKTtcclxuICAgICAgICBnb29tYmEuYWRkVHJhaXQobmV3IEJlaGF2aW9yKCkpO1xyXG4gICAgICAgIGdvb21iYS5hZGRUcmFpdChuZXcgS2lsbGFibGUoKSk7XHJcblxyXG4gICAgICAgIGdvb21iYS5kcmF3ID0gZHJhd0dvb21iYTtcclxuXHJcbiAgICAgICAgcmV0dXJuIGdvb21iYTtcclxuICAgIH1cclxufVxyXG5cclxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vcHVibGljL2pzL2VudGl0aWVzL0dvb21iYS5qcyIsImltcG9ydCBFbnRpdHksIHtTaWRlcywgVHJhaXR9IGZyb20gJy4uL0VudGl0eS5qcyc7XHJcbmltcG9ydCB7bG9hZFNwcml0ZVNoZWV0fSBmcm9tICcuLi9sb2FkZXIuanMnO1xyXG5pbXBvcnQgUGVuZHVsdW1XYWxrIGZyb20gJy4uL3RyYWl0cy9QZW5kdWx1bU1vdmUuanMnO1xyXG5pbXBvcnQgU29saWQgZnJvbSAnLi4vdHJhaXRzL1NvbGlkLmpzJ1xyXG5pbXBvcnQgUGh5c2ljcyBmcm9tICcuLi90cmFpdHMvUGh5c2ljcy5qcydcclxuaW1wb3J0IEtpbGxhYmxlIGZyb20gJy4uL3RyYWl0cy9LaWxsYWJsZS5qcyc7XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gbG9hZEtvb3BhKCkge1xyXG4gICAgcmV0dXJuIGxvYWRTcHJpdGVTaGVldCgna29vcGEnKVxyXG4gICAgICAgIC50aGVuKGNyZWF0ZUtvb3BhRmFjdG9yeSlcclxufVxyXG5cclxuY29uc3QgU1RBVEVfV0FMS0lORyA9IFN5bWJvbCgnd2Fsa2luZycpO1xyXG5jb25zdCBTVEFURV9ISURJTkcgPSBTeW1ib2woJ2hpZGluZycpO1xyXG5jb25zdCBTVEFURV9QQU5JQyA9IFN5bWJvbCgncGFuaWMnKTtcclxuXHJcbmNsYXNzIEJlaGF2aW9yIGV4dGVuZHMgVHJhaXQge1xyXG4gICAgY29uc3RydWN0b3IoKSB7XHJcbiAgICAgICAgc3VwZXIoJ2JlaGF2aW9yJyk7XHJcbiAgICAgICAgdGhpcy5zdGF0ZSA9IFNUQVRFX1dBTEtJTkc7XHJcbiAgICAgICAgdGhpcy5oaWRlVGltZSA9IDA7XHJcbiAgICAgICAgdGhpcy5oaWRlRHVyYXRpb24gPSAzO1xyXG4gICAgICAgIHRoaXMucGFuaWNTcGVlZCA9IDIwMDtcclxuICAgICAgICB0aGlzLndhbGtTcGVlZCA9IG51bGw7XHJcbiAgICB9XHJcblxyXG4gICAgY29sbGlkZXModXMsIHRoZW0pIHtcclxuICAgICAgICAvLyB1cyBpcyBvdXIgZ29vbWJhLCB0aGVtIG9mdGVuIGFyZSBtYXJpby5cclxuICAgICAgICBpZiAodXMua2lsbGFibGUuZGVhZCkge1xyXG4gICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBpZiAodGhlbS5zdG9tZXIpIHtcclxuICAgICAgICAgICAgaWYgKHRoZW0udmVsLnkgPiB1cy52ZWwueSkge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5oYW5kbGVTdGF0ZSh1cywgdGhlbSk7XHJcbiAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmhhbmRsZUtpY2sodXMsIHRoZW0pO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIGhhbmRsZUtpY2sodXMsIHRoZW0pIHtcclxuICAgICAgICBpZiAodGhpcy5zdGF0ZSA9PT0gU1RBVEVfV0FMS0lORykge1xyXG4gICAgICAgICAgICB0aGVtLmtpbGxhYmxlLmtpbGwoKTtcclxuICAgICAgICB9IGVsc2UgaWYgKHRoaXMuc3RhdGUgPT09IFNUQVRFX0hJRElORykge1xyXG4gICAgICAgICAgICB0aGlzLnBhbmljKHVzLCB0aGVtKTtcclxuICAgICAgICB9IGVsc2UgaWYgKHRoaXMuc3RhdGUgPT09IFNUQVRFX1BBTklDKSB7XHJcbiAgICAgICAgICAgIGNvbnN0IHRyYXZlbERpciA9IE1hdGguc2lnbih1cy52ZWwueCk7XHJcbiAgICAgICAgICAgIGNvbnN0IGltcGFjdERpciA9IE1hdGguc2lnbih1cy5wb3MueCAtIHRoZW0ucG9zLngpO1xyXG4gICAgICAgICAgICBpZiAodHJhdmVsRGlyICE9PSAwICYmIGltcGFjdERpciAhPT0gdHJhdmVsRGlyKSB7XHJcbiAgICAgICAgICAgICAgICB0aGVtLmtpbGxhYmxlLmtpbGwoKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBoYW5kbGVTdGF0ZSh1cywgdGhlbSkge1xyXG4gICAgICAgIGlmICh0aGlzLnN0YXRlID09PSBTVEFURV9XQUxLSU5HKSB7XHJcbiAgICAgICAgICAgIGlmICh1cy5wZW5kdWx1bU1vdmUuc3BlZWQgIT09IDApIHtcclxuICAgICAgICAgICAgICAgIHRoaXMud2Fsa1NwZWVkID0gdXMucGVuZHVsdW1Nb3ZlLnNwZWVkO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIHRoaXMuaGlkaW5nKHVzKTtcclxuICAgICAgICB9IGVsc2UgaWYgKHRoaXMuc3RhdGUgPT09IFNUQVRFX0hJRElORykge1xyXG4gICAgICAgICAgICB1cy5raWxsYWJsZS5raWxsKCk7XHJcbiAgICAgICAgICAgIHVzLnZlbC5zZXQoMTAwLCAtMjAwKTtcclxuICAgICAgICAgICAgdXMuc29saWQub2JzdHJ1Y3RzID0gZmFsc2U7XHJcbiAgICAgICAgfSBlbHNlIGlmICh0aGlzLnN0YXRlID09PSBTVEFURV9QQU5JQykge1xyXG4gICAgICAgICAgICB0aGlzLmhpZGluZyh1cyk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIGhpZGluZyh1cykge1xyXG4gICAgICAgIHVzLnZlbC54ID0gMDtcclxuICAgICAgICB1cy5wZW5kdWx1bU1vdmUuZW5hYmxlID0gZmFsc2U7XHJcbiAgICAgICAgdGhpcy5zdGF0ZSA9IFNUQVRFX0hJRElORztcclxuICAgIH1cclxuXHJcbiAgICB1bkhpZGUodXMpIHtcclxuICAgICAgICB1cy52ZWwueCA9IDEwMDtcclxuICAgICAgICB1cy5wZW5kdWx1bU1vdmUuZW5hYmxlID0gdHJ1ZTtcclxuICAgICAgICB1cy5wZW5kdWx1bU1vdmUuc3BlZWQgPSB0aGlzLndhbGtTcGVlZDtcclxuICAgICAgICB0aGlzLnN0YXRlID0gU1RBVEVfV0FMS0lORztcclxuICAgICAgICB0aGlzLmhpZGVUaW1lID0gMDtcclxuICAgIH1cclxuXHJcbiAgICBwYW5pYyh1cywgdGhlbSkge1xyXG4gICAgICAgIHVzLnBlbmR1bHVtTW92ZS5lbmFibGUgPSB0cnVlO1xyXG4gICAgICAgIHVzLnBlbmR1bHVtTW92ZS5zcGVlZCA9IHRoaXMucGFuaWNTcGVlZCAqIE1hdGguc2lnbih0aGVtLnZlbC54KTtcclxuICAgICAgICB0aGlzLnN0YXRlID0gU1RBVEVfUEFOSUM7XHJcbiAgICB9XHJcblxyXG4gICAgdXBkYXRlKHVzLCBkZWx0YVRpbWUpIHtcclxuICAgICAgICBpZiAodGhpcy5zdGF0ZSA9PT0gU1RBVEVfSElESU5HKSB7XHJcbiAgICAgICAgICAgIHRoaXMuaGlkZVRpbWUgKz0gZGVsdGFUaW1lO1xyXG5cclxuICAgICAgICAgICAgaWYgKHRoaXMuaGlkZVRpbWUgPiB0aGlzLmhpZGVEdXJhdGlvbikge1xyXG4gICAgICAgICAgICAgICAgdGhpcy51bkhpZGUodXMpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59XHJcblxyXG5mdW5jdGlvbiBjcmVhdGVLb29wYUZhY3Rvcnkoc3ByaXRlKSB7XHJcbiAgICBjb25zdCB3YWxrQW5pbSA9IHNwcml0ZS5hbmltYXRpb25zLmdldCgnd2FsaycpO1xyXG4gICAgY29uc3Qgd2FrZUFuaW0gPSBzcHJpdGUuYW5pbWF0aW9ucy5nZXQoJ3dha2UnKTtcclxuXHJcblxyXG4gICAgZnVuY3Rpb24gcm91dGVBbmltKGtvb3BhKSB7XHJcbiAgICAgICAgaWYgKGtvb3BhLmJlaGF2aW9yLnN0YXRlID09PSBTVEFURV9ISURJTkcpIHtcclxuICAgICAgICAgICAgaWYgKGtvb3BhLmJlaGF2aW9yLmhpZGVUaW1lID4gMikge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIHdha2VBbmltKGtvb3BhLmJlaGF2aW9yLmhpZGVUaW1lKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICByZXR1cm4gJ2hpZGluZyc7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmIChrb29wYS5iZWhhdmlvci5zdGF0ZSA9PT0gU1RBVEVfUEFOSUMpIHtcclxuICAgICAgICAgICAgcmV0dXJuICdoaWRpbmcnXHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICByZXR1cm4gd2Fsa0FuaW0oa29vcGEubGlmZVRpbWUpO1xyXG4gICAgfVxyXG5cclxuICAgIGZ1bmN0aW9uIGRyYXdLb29wYShjb250ZXh0KSB7XHJcbiAgICAgICAgc3ByaXRlLmRyYXcocm91dGVBbmltKHRoaXMpLCBjb250ZXh0LCAwLCAwLCB0aGlzLnZlbC54IDwgMCk7XHJcbiAgICB9XHJcblxyXG4gICAgcmV0dXJuIGZ1bmN0aW9uIGNyZWF0ZUtvb3BhKCkge1xyXG4gICAgICAgIGNvbnN0IGtvb3BhID0gbmV3IEVudGl0eSgpO1xyXG4gICAgICAgIGtvb3BhLnNpemUuc2V0KDE2LCAxNik7XHJcbiAgICAgICAga29vcGEub2Zmc2V0LnkgPSA4O1xyXG5cclxuICAgICAgICBrb29wYS5hZGRUcmFpdChuZXcgUGh5c2ljcygpKTtcclxuICAgICAgICBrb29wYS5hZGRUcmFpdChuZXcgU29saWQoKSk7XHJcbiAgICAgICAga29vcGEuYWRkVHJhaXQobmV3IFBlbmR1bHVtV2FsaygpKTtcclxuICAgICAgICBrb29wYS5hZGRUcmFpdChuZXcgQmVoYXZpb3IoKSk7XHJcbiAgICAgICAga29vcGEuYWRkVHJhaXQobmV3IEtpbGxhYmxlKCkpO1xyXG5cclxuICAgICAgICBrb29wYS5kcmF3ID0gZHJhd0tvb3BhO1xyXG5cclxuICAgICAgICByZXR1cm4ga29vcGE7XHJcbiAgICB9XHJcbn1cclxuXHJcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3B1YmxpYy9qcy9lbnRpdGllcy9Lb29wYS5qcyIsIm1vZHVsZS5leHBvcnRzID0geyBcImRlZmF1bHRcIjogcmVxdWlyZShcImNvcmUtanMvbGlicmFyeS9mbi9tYXRoL3NpZ25cIiksIF9fZXNNb2R1bGU6IHRydWUgfTtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL25vZGVfbW9kdWxlcy9fYmFiZWwtcnVudGltZUA2LjI2LjBAYmFiZWwtcnVudGltZS9jb3JlLWpzL21hdGgvc2lnbi5qc1xuLy8gbW9kdWxlIGlkID0gMTc0XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsInJlcXVpcmUoJy4uLy4uL21vZHVsZXMvZXM2Lm1hdGguc2lnbicpO1xubW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKCcuLi8uLi9tb2R1bGVzL19jb3JlJykuTWF0aC5zaWduO1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9ub2RlX21vZHVsZXMvX2NvcmUtanNAMi41LjNAY29yZS1qcy9saWJyYXJ5L2ZuL21hdGgvc2lnbi5qc1xuLy8gbW9kdWxlIGlkID0gMTc1XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIi8vIDIwLjIuMi4yOCBNYXRoLnNpZ24oeClcbnZhciAkZXhwb3J0ID0gcmVxdWlyZSgnLi9fZXhwb3J0Jyk7XG5cbiRleHBvcnQoJGV4cG9ydC5TLCAnTWF0aCcsIHsgc2lnbjogcmVxdWlyZSgnLi9fbWF0aC1zaWduJykgfSk7XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL25vZGVfbW9kdWxlcy9fY29yZS1qc0AyLjUuM0Bjb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9lczYubWF0aC5zaWduLmpzXG4vLyBtb2R1bGUgaWQgPSAxNzZcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiLy8gMjAuMi4yLjI4IE1hdGguc2lnbih4KVxubW9kdWxlLmV4cG9ydHMgPSBNYXRoLnNpZ24gfHwgZnVuY3Rpb24gc2lnbih4KSB7XG4gIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby1zZWxmLWNvbXBhcmVcbiAgcmV0dXJuICh4ID0gK3gpID09IDAgfHwgeCAhPSB4ID8geCA6IHggPCAwID8gLTEgOiAxO1xufTtcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vbm9kZV9tb2R1bGVzL19jb3JlLWpzQDIuNS4zQGNvcmUtanMvbGlicmFyeS9tb2R1bGVzL19tYXRoLXNpZ24uanNcbi8vIG1vZHVsZSBpZCA9IDE3N1xuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJpbXBvcnQge2FkZFBhZFN0YXJ0UG9seWZpbGx9IGZyb20gJy4uL3BvbHlmaWxscy9hZGRQYWRTdGFydC5qcyc7XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gY3JlYXRlRGFzaGJvYXJkTGF5ZXIoZm9udCwgcGxheWVyRW52KSB7XHJcbiAgICBjb25zdCBMSU5FMSA9IGZvbnQuc2l6ZTtcclxuICAgIGNvbnN0IExJTkUyID0gZm9udC5zaXplKjI7XHJcblxyXG4gICAgY29uc3QgY29pbnMgPSA5OTtcclxuXHJcbiAgICBhZGRQYWRTdGFydFBvbHlmaWxsKCk7XHJcblxyXG4gICAgcmV0dXJuIGZ1bmN0aW9uIGRyYXdEYXNoYm9hcmQoY29udGV4dCkge1xyXG4gICAgICAgIGNvbnN0IHt0aW1lLHNjb3JlfSA9IHBsYXllckVudi5wbGF5ZXJDb250cm9sbGVyO1xyXG4gICAgICAgIGZvbnQucHJpbnQoJ01BUklPJywgY29udGV4dCwxNiwgTElORTEpO1xyXG4gICAgICAgIGZvbnQucHJpbnQoc2NvcmUudG9TdHJpbmcoKS5wYWRTdGFydCg2LCAnMCcpLCBjb250ZXh0LDE2LCBMSU5FMik7XHJcblxyXG4gICAgICAgIGZvbnQucHJpbnQoJ0B4JyArIGNvaW5zLnRvU3RyaW5nKCkucGFkU3RhcnQoMiwgJzAnKSwgY29udGV4dCw5NiwgTElORTIpO1xyXG5cclxuICAgICAgICBmb250LnByaW50KCdXT1JMRCcsIGNvbnRleHQsMTUyLCBMSU5FMSk7XHJcbiAgICAgICAgZm9udC5wcmludCgnMS0xJywgY29udGV4dCwxNjAsIExJTkUyKTtcclxuXHJcbiAgICAgICAgZm9udC5wcmludCgnVElNRScsIGNvbnRleHQsMjA4LCBMSU5FMSk7XHJcbiAgICAgICAgZm9udC5wcmludCh0aW1lLnRvRml4ZWQoKS50b1N0cmluZygpLnBhZFN0YXJ0KDMsICcwJyksIGNvbnRleHQsMjE2LCBMSU5FMik7XHJcbiAgICAgICAgLy8gZm9udC5kcmF3KCdBJywgY29udGV4dCwgMCwgMCk7XHJcbiAgICB9XHJcbn1cclxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vcHVibGljL2pzL2xheWVycy9kYXNoYm9hcmQuanMiLCIvLyBodHRwczovL2dpdGh1Yi5jb20vdXhpdHRlbi9wb2x5ZmlsbC9ibG9iL21hc3Rlci9zdHJpbmcucG9seWZpbGwuanNcclxuLy8gaHR0cHM6Ly9kZXZlbG9wZXIubW96aWxsYS5vcmcvZW4tVVMvZG9jcy9XZWIvSmF2YVNjcmlwdC9SZWZlcmVuY2UvR2xvYmFsX09iamVjdHMvU3RyaW5nL3BhZFN0YXJ0XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gYWRkUGFkU3RhcnRQb2x5ZmlsbCgpIHtcclxuICAgIGlmICghU3RyaW5nLnByb3RvdHlwZS5wYWRTdGFydCkge1xyXG4gICAgICAgIFN0cmluZy5wcm90b3R5cGUucGFkU3RhcnQgPSBmdW5jdGlvbiBwYWRTdGFydCh0YXJnZXRMZW5ndGgscGFkU3RyaW5nKSB7XHJcbiAgICAgICAgICAgIHRhcmdldExlbmd0aCA9IHRhcmdldExlbmd0aD4+MDsgLy9mbG9vciBpZiBudW1iZXIgb3IgY29udmVydCBub24tbnVtYmVyIHRvIDA7XHJcbiAgICAgICAgICAgIHBhZFN0cmluZyA9IFN0cmluZyhwYWRTdHJpbmcgfHwgJyAnKTtcclxuICAgICAgICAgICAgaWYgKHRoaXMubGVuZ3RoID4gdGFyZ2V0TGVuZ3RoKSB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gU3RyaW5nKHRoaXMpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgdGFyZ2V0TGVuZ3RoID0gdGFyZ2V0TGVuZ3RoLXRoaXMubGVuZ3RoO1xyXG4gICAgICAgICAgICAgICAgaWYgKHRhcmdldExlbmd0aCA+IHBhZFN0cmluZy5sZW5ndGgpIHtcclxuICAgICAgICAgICAgICAgICAgICBwYWRTdHJpbmcgKz0gcGFkU3RyaW5nLnJlcGVhdCh0YXJnZXRMZW5ndGgvcGFkU3RyaW5nLmxlbmd0aCk7IC8vYXBwZW5kIHRvIG9yaWdpbmFsIHRvIGVuc3VyZSB3ZSBhcmUgbG9uZ2VyIHRoYW4gbmVlZGVkXHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gcGFkU3RyaW5nLnNsaWNlKDAsdGFyZ2V0TGVuZ3RoKSArIFN0cmluZyh0aGlzKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH07XHJcbiAgICB9XHJcbn1cclxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vcHVibGljL2pzL3BvbHlmaWxscy9hZGRQYWRTdGFydC5qcyIsImltcG9ydCAga2V5Qm9hcmQgZnJvbSAnLi9LZXlib2FyZFN0YXRlLmpzJ1xyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIHNldHVwS2V5Ym9hcmQoZW50aXR5KSB7XHJcbiAgICBjb25zdCBpbnB1dCA9IG5ldyBrZXlCb2FyZCgpO1xyXG5cclxuICAgIGlucHV0LmFkZE1hcHBpbmcoJ1NwYWNlJywga2V5U3RhdGUgPT4ge1xyXG4gICAgICAgIC8vIEZhbnRhc3RpYyEgLSDlppnvvIFcclxuICAgICAgICAvKkJ5IHN1Y2ggYSBmYW50YXN0aWMgQ2xhc3MsIG5vdyB3ZSB0YWtlIG92ZXIgdGhlIGV2ZW50IG9mIGtleSBib2FyZCBpbnB1dCxcclxuICAgICAgICAgc28gdGhhdCB3ZSBjYW4gZ2V0IGhvdyBsb25nIGEga2V5IGlzIHByZXNzZWQgYW5kIGRyYXcgdGhlIGNhbnZhcyBzZW1hbnRpY2FsbHkuKi9cclxuICAgICAgICBpZiAoa2V5U3RhdGUpIHtcclxuICAgICAgICAgICAgZW50aXR5Lmp1bXAuc3RhcnQoKTtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICBlbnRpdHkuanVtcC5jYW5jZWwoKTtcclxuICAgICAgICB9XHJcbiAgICB9KVxyXG4gICAgaW5wdXQuYWRkTWFwcGluZygnQXJyb3dVcCcsIGtleVN0YXRlID0+IHtcclxuICAgICAgICBpZiAoa2V5U3RhdGUpIHtcclxuICAgICAgICAgICAgZW50aXR5Lmp1bXAuc3RhcnQoKTtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICBlbnRpdHkuanVtcC5jYW5jZWwoKTtcclxuICAgICAgICB9XHJcbiAgICB9KTtcclxuXHJcbiAgICBpbnB1dC5hZGRNYXBwaW5nKCdLZXlPJywga2V5U3RhdGUgPT4ge1xyXG4gICAgICAgIC8vIEVwOCAtIFR1cmJvIE1vZGUsIEkgdGhpbmsgaXQgaXMgdW5uZWNlc3NhcnkuXHJcbiAgICB9KTtcclxuXHJcbiAgICBpbnB1dC5hZGRNYXBwaW5nKCdBcnJvd1JpZ2h0Jywga2V5U3RhdGUgPT4ge1xyXG4gICAgICAgIC8vIGVudGl0eS5nby5kaXIgPSBrZXlTdGF0ZTtcclxuICAgICAgICBlbnRpdHkuZ28uZGlyICs9IGtleVN0YXRlID8gMSA6IC0xO1xyXG4gICAgfSk7XHJcblxyXG4gICAgaW5wdXQuYWRkTWFwcGluZygnQXJyb3dMZWZ0Jywga2V5U3RhdGUgPT4ge1xyXG4gICAgICAgIC8vIGVudGl0eS5nby5kaXIgPSAta2V5U3RhdGU7XHJcbiAgICAgICAgZW50aXR5LmdvLmRpciArPSBrZXlTdGF0ZSA/IC0xIDogMTtcclxuICAgIH0pO1xyXG5cclxuICAgIHJldHVybiBpbnB1dDtcclxufVxyXG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9wdWJsaWMvanMvaW5wdXQuanMiLCJjb25zdCBQUkVTU0VEID0gMSwgUkVMRUFTRUQgPSAwO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgS2V5Ym9hcmRTdGF0ZSB7XHJcbiAgICBjb25zdHJ1Y3RvcigpIHtcclxuICAgICAgICAvLyBob2xkIHRoZSBjdXJyZW50IHN0YXRlIG9mIGEgZ2l2ZW4ga2V5XHJcbiAgICAgICAgdGhpcy5rZXlTdGF0ZXMgPSBuZXcgTWFwKCk7XHJcblxyXG4gICAgICAgIC8vIGhvbGRzIHRoZSBjYWxsYmFjayBmdW5jdGlvbnMgZm9yIGEga2V5IGNvZGVcclxuICAgICAgICB0aGlzLmtleU1hcCA9IG5ldyBNYXAoKVxyXG4gICAgfVxyXG5cclxuICAgIGFkZE1hcHBpbmcoY29kZSwgY2FsbEJhY2spIHtcclxuICAgICAgICB0aGlzLmtleU1hcC5zZXQoY29kZSwgY2FsbEJhY2spXHJcbiAgICB9XHJcblxyXG4gICAgaGFuZGxlRXZlbnQoZXZlbnQpIHtcclxuICAgICAgICBjb25zdCB7Y29kZX0gPSBldmVudDtcclxuXHJcbiAgICAgICAgaWYgKCF0aGlzLmtleU1hcC5oYXMoY29kZSkpIHtcclxuICAgICAgICAgICAgcmV0dXJuXHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xyXG5cclxuICAgICAgICBjb25zdCBrZXlTdGF0ZSA9IGV2ZW50LnR5cGUgPT09ICdrZXlkb3duJyA/IFBSRVNTRUQgOiBSRUxFQVNFRDtcclxuXHJcbiAgICAgICAgaWYgKHRoaXMua2V5U3RhdGVzLmdldChjb2RlKSA9PT0ga2V5U3RhdGUpIHtcclxuICAgICAgICAgICAgLy8gYXZvaWQgdHJpZ2dlcmluZyBtdWx0aXBsZSB0aW1lc1xyXG4gICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICB0aGlzLmtleVN0YXRlcy5zZXQoY29kZSwga2V5U3RhdGUpO1xyXG5cclxuICAgICAgICB0aGlzLmtleU1hcC5nZXQoY29kZSkoa2V5U3RhdGUpO1xyXG4gICAgfVxyXG5cclxuICAgIGxpc3RlblRvKHdpbmRvdykge1xyXG4gICAgICAgIFsna2V5ZG93bicsICdrZXl1cCddLmZvckVhY2goZXZlbnROYW1lID0+IHtcclxuICAgICAgICAgICAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoZXZlbnROYW1lLCBldmVudCA9PiB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmhhbmRsZUV2ZW50KGV2ZW50KVxyXG4gICAgICAgICAgICB9KVxyXG4gICAgICAgIH0pXHJcbiAgICB9XHJcbn1cclxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vcHVibGljL2pzL0tleWJvYXJkU3RhdGUuanMiXSwic291cmNlUm9vdCI6IiJ9