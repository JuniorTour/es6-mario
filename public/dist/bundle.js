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

var _defineProperty = __webpack_require__(118);

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

var store = __webpack_require__(46)('wks');
var uid = __webpack_require__(34);
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

var _math = __webpack_require__(38);

var _BoundingBox = __webpack_require__(128);

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
var IE8_DOM_DEFINE = __webpack_require__(63);
var toPrimitive = __webpack_require__(43);
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

module.exports = { "default": __webpack_require__(130), __esModule: true };

/***/ }),
/* 12 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;

var _typeof2 = __webpack_require__(82);

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

var _setPrototypeOf = __webpack_require__(135);

var _setPrototypeOf2 = _interopRequireDefault(_setPrototypeOf);

var _create = __webpack_require__(139);

var _create2 = _interopRequireDefault(_create);

var _typeof2 = __webpack_require__(82);

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
__webpack_require__(41)(String, 'String', function (iterated) {
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
var IObject = __webpack_require__(66);
var defined = __webpack_require__(40);
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
var call = __webpack_require__(70);
var isArrayIter = __webpack_require__(71);
var anObject = __webpack_require__(9);
var toLength = __webpack_require__(33);
var getIterFn = __webpack_require__(49);
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


exports.__esModule = true;

var _isIterable2 = __webpack_require__(110);

var _isIterable3 = _interopRequireDefault(_isIterable2);

var _getIterator2 = __webpack_require__(37);

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
/* 29 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _toConsumableArray2 = __webpack_require__(89);

var _toConsumableArray3 = _interopRequireDefault(_toConsumableArray2);

var _slicedToArray2 = __webpack_require__(28);

var _slicedToArray3 = _interopRequireDefault(_slicedToArray2);

var _promise = __webpack_require__(22);

var _promise2 = _interopRequireDefault(_promise);

exports.loadImage = loadImage;
exports.loadJSON = loadJSON;
exports.loadSpriteSheet = loadSpriteSheet;

var _SpriteSheet = __webpack_require__(90);

var _SpriteSheet2 = _interopRequireDefault(_SpriteSheet);

var _anim = __webpack_require__(168);

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
    return loadJSON('/assets/sprites/' + name + '.json').then(function (sheetSpec) {
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
/* 30 */
/***/ (function(module, exports) {



/***/ }),
/* 31 */
/***/ (function(module, exports) {

module.exports = true;


/***/ }),
/* 32 */
/***/ (function(module, exports, __webpack_require__) {

// 19.1.2.2 / 15.2.3.5 Object.create(O [, Properties])
var anObject = __webpack_require__(9);
var dPs = __webpack_require__(100);
var enumBugKeys = __webpack_require__(47);
var IE_PROTO = __webpack_require__(45)('IE_PROTO');
var Empty = function () { /* empty */ };
var PROTOTYPE = 'prototype';

// Create object with fake `null` prototype: use iframe Object with cleared prototype
var createDict = function () {
  // Thrash, waste and sodomy: IE GC bug
  var iframe = __webpack_require__(42)('iframe');
  var i = enumBugKeys.length;
  var lt = '<';
  var gt = '>';
  var iframeDocument;
  iframe.style.display = 'none';
  __webpack_require__(67).appendChild(iframe);
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
/* 33 */
/***/ (function(module, exports, __webpack_require__) {

// 7.1.15 ToLength
var toInteger = __webpack_require__(39);
var min = Math.min;
module.exports = function (it) {
  return it > 0 ? min(toInteger(it), 0x1fffffffffffff) : 0; // pow(2, 53) - 1 == 9007199254740991
};


/***/ }),
/* 34 */
/***/ (function(module, exports) {

var id = 0;
var px = Math.random();
module.exports = function (key) {
  return 'Symbol('.concat(key === undefined ? '' : key, ')_', (++id + px).toString(36));
};


/***/ }),
/* 35 */
/***/ (function(module, exports, __webpack_require__) {

// 7.1.13 ToObject(argument)
var defined = __webpack_require__(40);
module.exports = function (it) {
  return Object(defined(it));
};


/***/ }),
/* 36 */
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
/* 37 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = { "default": __webpack_require__(113), __esModule: true };

/***/ }),
/* 38 */
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
/* 39 */
/***/ (function(module, exports) {

// 7.1.4 ToInteger
var ceil = Math.ceil;
var floor = Math.floor;
module.exports = function (it) {
  return isNaN(it = +it) ? 0 : (it > 0 ? floor : ceil)(it);
};


/***/ }),
/* 40 */
/***/ (function(module, exports) {

// 7.2.1 RequireObjectCoercible(argument)
module.exports = function (it) {
  if (it == undefined) throw TypeError("Can't call method on  " + it);
  return it;
};


/***/ }),
/* 41 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var LIBRARY = __webpack_require__(31);
var $export = __webpack_require__(3);
var redefine = __webpack_require__(64);
var hide = __webpack_require__(15);
var has = __webpack_require__(17);
var Iterators = __webpack_require__(19);
var $iterCreate = __webpack_require__(99);
var setToStringTag = __webpack_require__(26);
var getPrototypeOf = __webpack_require__(68);
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
/* 42 */
/***/ (function(module, exports, __webpack_require__) {

var isObject = __webpack_require__(8);
var document = __webpack_require__(5).document;
// typeof document.createElement is 'object' in old IE
var is = isObject(document) && isObject(document.createElement);
module.exports = function (it) {
  return is ? document.createElement(it) : {};
};


/***/ }),
/* 43 */
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
/* 44 */
/***/ (function(module, exports, __webpack_require__) {

// 19.1.2.14 / 15.2.3.14 Object.keys(O)
var $keys = __webpack_require__(65);
var enumBugKeys = __webpack_require__(47);

module.exports = Object.keys || function keys(O) {
  return $keys(O, enumBugKeys);
};


/***/ }),
/* 45 */
/***/ (function(module, exports, __webpack_require__) {

var shared = __webpack_require__(46)('keys');
var uid = __webpack_require__(34);
module.exports = function (key) {
  return shared[key] || (shared[key] = uid(key));
};


/***/ }),
/* 46 */
/***/ (function(module, exports, __webpack_require__) {

var global = __webpack_require__(5);
var SHARED = '__core-js_shared__';
var store = global[SHARED] || (global[SHARED] = {});
module.exports = function (key) {
  return store[key] || (store[key] = {});
};


/***/ }),
/* 47 */
/***/ (function(module, exports) {

// IE 8- don't enum bug keys
module.exports = (
  'constructor,hasOwnProperty,isPrototypeOf,propertyIsEnumerable,toLocaleString,toString,valueOf'
).split(',');


/***/ }),
/* 48 */
/***/ (function(module, exports) {

module.exports = function (it, Constructor, name, forbiddenField) {
  if (!(it instanceof Constructor) || (forbiddenField !== undefined && forbiddenField in it)) {
    throw TypeError(name + ': incorrect invocation!');
  } return it;
};


/***/ }),
/* 49 */
/***/ (function(module, exports, __webpack_require__) {

var classof = __webpack_require__(36);
var ITERATOR = __webpack_require__(4)('iterator');
var Iterators = __webpack_require__(19);
module.exports = __webpack_require__(2).getIteratorMethod = function (it) {
  if (it != undefined) return it[ITERATOR]
    || it['@@iterator']
    || Iterators[classof(it)];
};


/***/ }),
/* 50 */
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
/* 51 */
/***/ (function(module, exports, __webpack_require__) {

var hide = __webpack_require__(15);
module.exports = function (target, src, safe) {
  for (var key in src) {
    if (safe && target[key]) target[key] = src[key];
    else hide(target, key, src[key]);
  } return target;
};


/***/ }),
/* 52 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = { "default": __webpack_require__(122), __esModule: true };

/***/ }),
/* 53 */
/***/ (function(module, exports, __webpack_require__) {

var META = __webpack_require__(34)('meta');
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
var LIBRARY = __webpack_require__(31);
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

module.exports = { "default": __webpack_require__(163), __esModule: true };

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
/* 61 */
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
/* 62 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(95);


/***/ }),
/* 63 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = !__webpack_require__(10) && !__webpack_require__(18)(function () {
  return Object.defineProperty(__webpack_require__(42)('div'), 'a', { get: function () { return 7; } }).a != 7;
});


/***/ }),
/* 64 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(15);


/***/ }),
/* 65 */
/***/ (function(module, exports, __webpack_require__) {

var has = __webpack_require__(17);
var toIObject = __webpack_require__(20);
var arrayIndexOf = __webpack_require__(101)(false);
var IE_PROTO = __webpack_require__(45)('IE_PROTO');

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
/* 66 */
/***/ (function(module, exports, __webpack_require__) {

// fallback for non-array-like ES3 and non-enumerable old V8 strings
var cof = __webpack_require__(25);
// eslint-disable-next-line no-prototype-builtins
module.exports = Object('z').propertyIsEnumerable(0) ? Object : function (it) {
  return cof(it) == 'String' ? it.split('') : Object(it);
};


/***/ }),
/* 67 */
/***/ (function(module, exports, __webpack_require__) {

var document = __webpack_require__(5).document;
module.exports = document && document.documentElement;


/***/ }),
/* 68 */
/***/ (function(module, exports, __webpack_require__) {

// 19.1.2.9 / 15.2.3.2 Object.getPrototypeOf(O)
var has = __webpack_require__(17);
var toObject = __webpack_require__(35);
var IE_PROTO = __webpack_require__(45)('IE_PROTO');
var ObjectProto = Object.prototype;

module.exports = Object.getPrototypeOf || function (O) {
  O = toObject(O);
  if (has(O, IE_PROTO)) return O[IE_PROTO];
  if (typeof O.constructor == 'function' && O instanceof O.constructor) {
    return O.constructor.prototype;
  } return O instanceof Object ? ObjectProto : null;
};


/***/ }),
/* 69 */
/***/ (function(module, exports) {

module.exports = function (done, value) {
  return { value: value, done: !!done };
};


/***/ }),
/* 70 */
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
/* 71 */
/***/ (function(module, exports, __webpack_require__) {

// check on default Array iterator
var Iterators = __webpack_require__(19);
var ITERATOR = __webpack_require__(4)('iterator');
var ArrayProto = Array.prototype;

module.exports = function (it) {
  return it !== undefined && (Iterators.Array === it || ArrayProto[ITERATOR] === it);
};


/***/ }),
/* 72 */
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
/* 73 */
/***/ (function(module, exports, __webpack_require__) {

var ctx = __webpack_require__(14);
var invoke = __webpack_require__(106);
var html = __webpack_require__(67);
var cel = __webpack_require__(42);
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
/* 74 */
/***/ (function(module, exports) {

module.exports = function (exec) {
  try {
    return { e: false, v: exec() };
  } catch (e) {
    return { e: true, v: e };
  }
};


/***/ }),
/* 75 */
/***/ (function(module, exports, __webpack_require__) {

var anObject = __webpack_require__(9);
var isObject = __webpack_require__(8);
var newPromiseCapability = __webpack_require__(50);

module.exports = function (C, x) {
  anObject(C);
  if (isObject(x) && x.constructor === C) return x;
  var promiseCapability = newPromiseCapability.f(C);
  var resolve = promiseCapability.resolve;
  resolve(x);
  return promiseCapability.promise;
};


/***/ }),
/* 76 */
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
/* 77 */
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
/* 78 */
/***/ (function(module, exports) {

exports.f = Object.getOwnPropertySymbols;


/***/ }),
/* 79 */
/***/ (function(module, exports, __webpack_require__) {

// 7.2.2 IsArray(argument)
var cof = __webpack_require__(25);
module.exports = Array.isArray || function isArray(arg) {
  return cof(arg) == 'Array';
};


/***/ }),
/* 80 */
/***/ (function(module, exports, __webpack_require__) {

// 19.1.2.7 / 15.2.3.4 Object.getOwnPropertyNames(O)
var $keys = __webpack_require__(65);
var hiddenKeys = __webpack_require__(47).concat('length', 'prototype');

exports.f = Object.getOwnPropertyNames || function getOwnPropertyNames(O) {
  return $keys(O, hiddenKeys);
};


/***/ }),
/* 81 */
/***/ (function(module, exports, __webpack_require__) {

var pIE = __webpack_require__(56);
var createDesc = __webpack_require__(24);
var toIObject = __webpack_require__(20);
var toPrimitive = __webpack_require__(43);
var has = __webpack_require__(17);
var IE8_DOM_DEFINE = __webpack_require__(63);
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
/* 82 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;

var _iterator = __webpack_require__(133);

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
/* 83 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var dP = __webpack_require__(7).f;
var create = __webpack_require__(32);
var redefineAll = __webpack_require__(51);
var ctx = __webpack_require__(14);
var anInstance = __webpack_require__(48);
var forOf = __webpack_require__(27);
var $iterDefine = __webpack_require__(41);
var step = __webpack_require__(69);
var setSpecies = __webpack_require__(76);
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
/* 84 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var global = __webpack_require__(5);
var $export = __webpack_require__(3);
var meta = __webpack_require__(53);
var fails = __webpack_require__(18);
var hide = __webpack_require__(15);
var redefineAll = __webpack_require__(51);
var forOf = __webpack_require__(27);
var anInstance = __webpack_require__(48);
var isObject = __webpack_require__(8);
var setToStringTag = __webpack_require__(26);
var dP = __webpack_require__(7).f;
var each = __webpack_require__(149)(0);
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
/* 85 */
/***/ (function(module, exports, __webpack_require__) {

// https://github.com/DavidBruant/Map-Set.prototype.toJSON
var classof = __webpack_require__(36);
var from = __webpack_require__(153);
module.exports = function (NAME) {
  return function toJSON() {
    if (classof(this) != NAME) throw TypeError(NAME + "#toJSON isn't generic");
    return from(this);
  };
};


/***/ }),
/* 86 */
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
/* 87 */
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
/* 88 */
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
/* 89 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;

var _from = __webpack_require__(159);

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
/* 90 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _map = __webpack_require__(58);

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
        value: function obstruct(entity, side) {
            if (side === _Entity.Sides.LEFT || side === _Entity.Sides.RIGHT) {
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


var _regenerator = __webpack_require__(62);

var _regenerator2 = _interopRequireDefault(_regenerator);

var _promise = __webpack_require__(22);

var _promise2 = _interopRequireDefault(_promise);

var _slicedToArray2 = __webpack_require__(28);

var _slicedToArray3 = _interopRequireDefault(_slicedToArray2);

var _asyncToGenerator2 = __webpack_require__(115);

var _asyncToGenerator3 = _interopRequireDefault(_asyncToGenerator2);

var main = function () {
    var _ref = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee(canvas) {
        var context, _ref2, _ref3, entityFactory, font, loadLevel, level, camera, mario, playerEnv, fps, uaInfo, input, timer;

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
                        return (0, _level.createLevelLoader)();

                    case 9:
                        loadLevel = _context.sent;
                        _context.next = 12;
                        return loadLevel('1-1');

                    case 12:
                        level = _context.sent;
                        camera = new _Camera2.default();
                        mario = entityFactory.mario();

                        mario.pos.set(2.5 * 16, 12 * 16);
                        level.entities.add(mario);

                        playerEnv = createPlayerEnv(mario);

                        level.entities.add(playerEnv);

                        level.comp.layers.push((0, _dashboard.createDashboardLayer)(font, playerEnv));

                        /*Debug Tools : */
                        // level.comp.layers.push(createCollisionLayer(level));
                        // level.comp.layers.push(createCameraLayer(camera));
                        // setupMouseControl(canvas, mario, camera);

                        // TODO Optimize Hack for Compatibility
                        fps = 1 / 60;
                        uaInfo = (0, _getUserAgent.getUserAgent)();

                        if (uaInfo.platform === 'Android' || uaInfo.platform === 'iOS') {
                            (0, _input.setupTouchPad)(mario);

                            // For low-end device, decrease fps for better experience.
                            if (uaInfo.platform === 'iOS' && uaInfo.ver < 11 || uaInfo.platform === 'Android' && uaInfo.ver < 7) {
                                fps = 1 / 30;
                            }

                            // if (uaInfo.platform === 'iOS') {
                            //     autoPlayOniOS();
                            // }
                        } else {
                            input = (0, _input.setupKeyboard)(mario);

                            input.listenTo(window);
                        }

                        timer = new _Timer2.default(fps);


                        timer.update = function update(deltaTime) {
                            level.update(deltaTime);

                            camera.pos.x = Math.max(0, mario.pos.x - 100);

                            level.comp.draw(context, camera);

                            (0, _entitiesControlSystem.controlEntities)(camera, level, entityFactory);
                        };

                        timer.start();

                    case 26:
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

var _Timer = __webpack_require__(117);

var _Timer2 = _interopRequireDefault(_Timer);

var _Camera = __webpack_require__(121);

var _Camera2 = _interopRequireDefault(_Camera);

var _Entity = __webpack_require__(6);

var _Entity2 = _interopRequireDefault(_Entity);

var _PlayerController = __webpack_require__(129);

var _PlayerController2 = _interopRequireDefault(_PlayerController);

var _level = __webpack_require__(142);

var _font = __webpack_require__(171);

var _entities = __webpack_require__(172);

var _dashboard = __webpack_require__(183);

var _input = __webpack_require__(185);

var _getUserAgent = __webpack_require__(188);

var _autoPlayOniOS = __webpack_require__(189);

var _entitiesControlSystem = __webpack_require__(190);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// import {createCollisionLayer} from './layers/collision.js'
// import {createCameraLayer} from './layers/camera.js';
// import {setupMouseControl} from './debug.js';

/*TODO: CSS import in JS, I don't like it.*/

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

__webpack_require__(30);
__webpack_require__(16);
__webpack_require__(21);
__webpack_require__(105);
__webpack_require__(108);
__webpack_require__(109);
module.exports = __webpack_require__(2).Promise;


/***/ }),
/* 98 */
/***/ (function(module, exports, __webpack_require__) {

var toInteger = __webpack_require__(39);
var defined = __webpack_require__(40);
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

var create = __webpack_require__(32);
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
var getKeys = __webpack_require__(44);

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
var toLength = __webpack_require__(33);
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

var toInteger = __webpack_require__(39);
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
var step = __webpack_require__(69);
var Iterators = __webpack_require__(19);
var toIObject = __webpack_require__(20);

// 22.1.3.4 Array.prototype.entries()
// 22.1.3.13 Array.prototype.keys()
// 22.1.3.29 Array.prototype.values()
// 22.1.3.30 Array.prototype[@@iterator]()
module.exports = __webpack_require__(41)(Array, 'Array', function (iterated, kind) {
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

var LIBRARY = __webpack_require__(31);
var global = __webpack_require__(5);
var ctx = __webpack_require__(14);
var classof = __webpack_require__(36);
var $export = __webpack_require__(3);
var isObject = __webpack_require__(8);
var aFunction = __webpack_require__(23);
var anInstance = __webpack_require__(48);
var forOf = __webpack_require__(27);
var speciesConstructor = __webpack_require__(72);
var task = __webpack_require__(73).set;
var microtask = __webpack_require__(107)();
var newPromiseCapabilityModule = __webpack_require__(50);
var perform = __webpack_require__(74);
var promiseResolve = __webpack_require__(75);
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
  Internal.prototype = __webpack_require__(51)($Promise.prototype, {
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
__webpack_require__(76)(PROMISE);
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
$export($export.S + $export.F * !(USE_NATIVE && __webpack_require__(77)(function (iter) {
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
var macrotask = __webpack_require__(73).set;
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
var speciesConstructor = __webpack_require__(72);
var promiseResolve = __webpack_require__(75);

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
var newPromiseCapability = __webpack_require__(50);
var perform = __webpack_require__(74);

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

var classof = __webpack_require__(36);
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
var get = __webpack_require__(49);
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
        var lastTime = 0;

        this.updateProxy = function (time) {
            accumulatedTime += (time - lastTime) / 1000;

            if (accumulatedTime > 1) {
                /* A hack to Solve the time accumulate
                * when it is running background.
                * So that our computer wont be slow down by this,
                * after long time of running this in background.*/
                accumulatedTime = 1;
            }

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
/* 118 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = { "default": __webpack_require__(119), __esModule: true };

/***/ }),
/* 119 */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(120);
var $Object = __webpack_require__(2).Object;
module.exports = function defineProperty(it, key, desc) {
  return $Object.defineProperty(it, key, desc);
};


/***/ }),
/* 120 */
/***/ (function(module, exports, __webpack_require__) {

var $export = __webpack_require__(3);
// 19.1.2.4 / 15.2.3.6 Object.defineProperty(O, P, Attributes)
$export($export.S + $export.F * !__webpack_require__(10), 'Object', { defineProperty: __webpack_require__(7).f });


/***/ }),
/* 121 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _classCallCheck2 = __webpack_require__(0);

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _math = __webpack_require__(38);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Camera = function Camera() {
    (0, _classCallCheck3.default)(this, Camera);

    this.pos = new _math.Vec2(0, 0);
    this.size = new _math.Vec2(256, 240);
};

exports.default = Camera;

/***/ }),
/* 122 */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(123);
__webpack_require__(30);
__webpack_require__(126);
__webpack_require__(127);
module.exports = __webpack_require__(2).Symbol;


/***/ }),
/* 123 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

// ECMAScript 6 symbols shim
var global = __webpack_require__(5);
var has = __webpack_require__(17);
var DESCRIPTORS = __webpack_require__(10);
var $export = __webpack_require__(3);
var redefine = __webpack_require__(64);
var META = __webpack_require__(53).KEY;
var $fails = __webpack_require__(18);
var shared = __webpack_require__(46);
var setToStringTag = __webpack_require__(26);
var uid = __webpack_require__(34);
var wks = __webpack_require__(4);
var wksExt = __webpack_require__(54);
var wksDefine = __webpack_require__(55);
var enumKeys = __webpack_require__(124);
var isArray = __webpack_require__(79);
var anObject = __webpack_require__(9);
var isObject = __webpack_require__(8);
var toIObject = __webpack_require__(20);
var toPrimitive = __webpack_require__(43);
var createDesc = __webpack_require__(24);
var _create = __webpack_require__(32);
var gOPNExt = __webpack_require__(125);
var $GOPD = __webpack_require__(81);
var $DP = __webpack_require__(7);
var $keys = __webpack_require__(44);
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
  __webpack_require__(80).f = gOPNExt.f = $getOwnPropertyNames;
  __webpack_require__(56).f = $propertyIsEnumerable;
  __webpack_require__(78).f = $getOwnPropertySymbols;

  if (DESCRIPTORS && !__webpack_require__(31)) {
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
/* 124 */
/***/ (function(module, exports, __webpack_require__) {

// all enumerable object keys, includes symbols
var getKeys = __webpack_require__(44);
var gOPS = __webpack_require__(78);
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
/* 125 */
/***/ (function(module, exports, __webpack_require__) {

// fallback for IE11 buggy Object.getOwnPropertyNames with iframe and window
var toIObject = __webpack_require__(20);
var gOPN = __webpack_require__(80).f;
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
/* 126 */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(55)('asyncIterator');


/***/ }),
/* 127 */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(55)('observable');


/***/ }),
/* 128 */
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
/* 129 */
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

var _math = __webpack_require__(38);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var PlayerController = function (_Trait) {
    (0, _inherits3.default)(PlayerController, _Trait);

    function PlayerController() {
        (0, _classCallCheck3.default)(this, PlayerController);

        var _this = (0, _possibleConstructorReturn3.default)(this, (PlayerController.__proto__ || (0, _getPrototypeOf2.default)(PlayerController)).call(this, 'playerController'));

        _this.player = null;
        _this.checkPoint = new _math.Vec2(2.5 * 16, 12 * 16);
        _this.time = 400;
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
/* 130 */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(131);
module.exports = __webpack_require__(2).Object.getPrototypeOf;


/***/ }),
/* 131 */
/***/ (function(module, exports, __webpack_require__) {

// 19.1.2.9 Object.getPrototypeOf(O)
var toObject = __webpack_require__(35);
var $getPrototypeOf = __webpack_require__(68);

__webpack_require__(132)('getPrototypeOf', function () {
  return function getPrototypeOf(it) {
    return $getPrototypeOf(toObject(it));
  };
});


/***/ }),
/* 132 */
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
/* 133 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = { "default": __webpack_require__(134), __esModule: true };

/***/ }),
/* 134 */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(16);
__webpack_require__(21);
module.exports = __webpack_require__(54).f('iterator');


/***/ }),
/* 135 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = { "default": __webpack_require__(136), __esModule: true };

/***/ }),
/* 136 */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(137);
module.exports = __webpack_require__(2).Object.setPrototypeOf;


/***/ }),
/* 137 */
/***/ (function(module, exports, __webpack_require__) {

// 19.1.3.19 Object.setPrototypeOf(O, proto)
var $export = __webpack_require__(3);
$export($export.S, 'Object', { setPrototypeOf: __webpack_require__(138).set });


/***/ }),
/* 138 */
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
        set = __webpack_require__(14)(Function.call, __webpack_require__(81).f(Object.prototype, '__proto__').set, 2);
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
/* 139 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = { "default": __webpack_require__(140), __esModule: true };

/***/ }),
/* 140 */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(141);
var $Object = __webpack_require__(2).Object;
module.exports = function create(P, D) {
  return $Object.create(P, D);
};


/***/ }),
/* 141 */
/***/ (function(module, exports, __webpack_require__) {

var $export = __webpack_require__(3);
// 19.1.2.2 / 15.2.3.5 Object.create(O [, Properties])
$export($export.S, 'Object', { create: __webpack_require__(32) });


/***/ }),
/* 142 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _regenerator = __webpack_require__(62);

var _regenerator2 = _interopRequireDefault(_regenerator);

var _getIterator2 = __webpack_require__(37);

var _getIterator3 = _interopRequireDefault(_getIterator2);

var _slicedToArray2 = __webpack_require__(28);

var _slicedToArray3 = _interopRequireDefault(_slicedToArray2);

var _promise = __webpack_require__(22);

var _promise2 = _interopRequireDefault(_promise);

var _stringify = __webpack_require__(143);

var _stringify2 = _interopRequireDefault(_stringify);

exports.createLevelLoader = createLevelLoader;

var _math = __webpack_require__(38);

var _Level = __webpack_require__(145);

var _Level2 = _interopRequireDefault(_Level);

var _loader = __webpack_require__(29);

var _sprites = __webpack_require__(169);

var _background = __webpack_require__(170);

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

function recordEntities(level, levelSpec) {
    var tileSize = 16;

    level.toBeAddedEntities = [];
    level.checkEntitiesPoints = [];

    levelSpec.entities.forEach(function (_ref) {
        var name = _ref.name,
            positions = _ref.positions;

        positions.forEach(function (gridPos) {
            var hashId = '' + level.toBeAddedEntities.length;
            level.toBeAddedEntities.push({
                hashId: hashId,
                name: name,
                pos: {
                    x: gridPos[0] * tileSize,
                    y: gridPos[1] * tileSize
                },
                added: false
            });

            // TODO: Optimize logic
            level.checkEntitiesPoints.push(gridPos[0] * 16 - 301);
            level.checkEntitiesPoints.push(gridPos[0] * 16 - 300);
            level.checkEntitiesPoints.push(gridPos[0] * 16 - 299);
        });
    });

    level.entitiesRecord = JSON.parse((0, _stringify2.default)(level.toBeAddedEntities));
}

function setupEntities(level, levelSpec) {
    /*TODO: Major Performance Bottle Neck
    *
    * In order to solve this bottle-neck, I have to change the logic of adding entity.
    * Only when an entity near the Camera or Player, then it will be added.
    *  So this process should be checked synchronously with Timer.*/

    // const tileSize = 16;
    // levelSpec.entities.forEach(({name, positions}) => {
    //     positions.forEach(([x, y]) => {
    //         // debugger
    //         if (x > (camera.pos - (8 * tileSize)) || x < (camera.pos + (8 * tileSize))) {
    //             const createEntity = entityFactory[name];
    //             const entity = createEntity();
    //             entity.pos.set(x*tileSize, y*tileSize);
    //             level.entities.add(entity);
    //         }
    //     })
    // });

    recordEntities(level, levelSpec);

    var spriteLayer = (0, _sprites.createSpriteLayer)(level.entities);
    level.comp.layers.push(spriteLayer);
}

function createLevelLoader() {
    return function loadLevel(name) {
        return (0, _loader.loadJSON)('../assets/levels/' + name + '.json').then(function (levelSpec) {
            return _promise2.default.all([levelSpec, (0, _loader.loadSpriteSheet)(levelSpec.spriteSheet)]);
        }).then(function (_ref2) {
            var _ref3 = (0, _slicedToArray3.default)(_ref2, 2),
                levelSpec = _ref3[0],
                backgroundSprites = _ref3[1];

            var level = new _Level2.default();

            setupLevel(levelSpec, level);
            setupBackground(levelSpec, level, backgroundSprites);
            setupEntities(level, levelSpec);

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
/* 143 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = { "default": __webpack_require__(144), __esModule: true };

/***/ }),
/* 144 */
/***/ (function(module, exports, __webpack_require__) {

var core = __webpack_require__(2);
var $JSON = core.JSON || (core.JSON = { stringify: JSON.stringify });
module.exports = function stringify(it) { // eslint-disable-line no-unused-vars
  return $JSON.stringify.apply($JSON, arguments);
};


/***/ }),
/* 145 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _set = __webpack_require__(146);

var _set2 = _interopRequireDefault(_set);

var _classCallCheck2 = __webpack_require__(0);

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = __webpack_require__(1);

var _createClass3 = _interopRequireDefault(_createClass2);

var _compositor = __webpack_require__(156);

var _compositor2 = _interopRequireDefault(_compositor);

var _EntityCollider = __webpack_require__(157);

var _EntityCollider2 = _interopRequireDefault(_EntityCollider);

var _TileCollider = __webpack_require__(158);

var _TileCollider2 = _interopRequireDefault(_TileCollider);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Level = function () {
    function Level() {
        (0, _classCallCheck3.default)(this, Level);

        this.gravity = 1000;
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
                _this.entityCollider.check(entity);
            });

            // The order of collide and finalize is determined, can not be combined.
            this.entities.forEach(function (entity) {
                entity.finalize();
            });

            this.totalTime += deltaTime;
        }
    }]);
    return Level;
}();

exports.default = Level;

/***/ }),
/* 146 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = { "default": __webpack_require__(147), __esModule: true };

/***/ }),
/* 147 */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(30);
__webpack_require__(16);
__webpack_require__(21);
__webpack_require__(148);
__webpack_require__(152);
__webpack_require__(154);
__webpack_require__(155);
module.exports = __webpack_require__(2).Set;


/***/ }),
/* 148 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var strong = __webpack_require__(83);
var validate = __webpack_require__(57);
var SET = 'Set';

// 23.2 Set Objects
module.exports = __webpack_require__(84)(SET, function (get) {
  return function Set() { return get(this, arguments.length > 0 ? arguments[0] : undefined); };
}, {
  // 23.2.3.1 Set.prototype.add(value)
  add: function add(value) {
    return strong.def(validate(this, SET), value = value === 0 ? 0 : value, value);
  }
}, strong);


/***/ }),
/* 149 */
/***/ (function(module, exports, __webpack_require__) {

// 0 -> Array#forEach
// 1 -> Array#map
// 2 -> Array#filter
// 3 -> Array#some
// 4 -> Array#every
// 5 -> Array#find
// 6 -> Array#findIndex
var ctx = __webpack_require__(14);
var IObject = __webpack_require__(66);
var toObject = __webpack_require__(35);
var toLength = __webpack_require__(33);
var asc = __webpack_require__(150);
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
/* 150 */
/***/ (function(module, exports, __webpack_require__) {

// 9.4.2.3 ArraySpeciesCreate(originalArray, length)
var speciesConstructor = __webpack_require__(151);

module.exports = function (original, length) {
  return new (speciesConstructor(original))(length);
};


/***/ }),
/* 151 */
/***/ (function(module, exports, __webpack_require__) {

var isObject = __webpack_require__(8);
var isArray = __webpack_require__(79);
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
/* 152 */
/***/ (function(module, exports, __webpack_require__) {

// https://github.com/DavidBruant/Map-Set.prototype.toJSON
var $export = __webpack_require__(3);

$export($export.P + $export.R, 'Set', { toJSON: __webpack_require__(85)('Set') });


/***/ }),
/* 153 */
/***/ (function(module, exports, __webpack_require__) {

var forOf = __webpack_require__(27);

module.exports = function (iter, ITERATOR) {
  var result = [];
  forOf(iter, false, result.push, result, ITERATOR);
  return result;
};


/***/ }),
/* 154 */
/***/ (function(module, exports, __webpack_require__) {

// https://tc39.github.io/proposal-setmap-offrom/#sec-set.of
__webpack_require__(86)('Set');


/***/ }),
/* 155 */
/***/ (function(module, exports, __webpack_require__) {

// https://tc39.github.io/proposal-setmap-offrom/#sec-set.from
__webpack_require__(87)('Set');


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
/* 158 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _classCallCheck2 = __webpack_require__(0);

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = __webpack_require__(1);

var _createClass3 = _interopRequireDefault(_createClass2);

var _TileResolver = __webpack_require__(88);

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
                // TODO: Improve a better logic, maybe not here
                if (match.tile.type === 'death-border') {
                    if (entity.killable !== undefined) {
                        entity.killable.kill();
                    }
                }

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

            var matches = this.tile.searchByRange(entity.bounds.left, entity.bounds.right,
            // y,y
            /*When range is y,y, the check range will be lesser, it is a tiny optimization.
            But mario will sink into the ground sometimes at lower fps(30).*/
            entity.bounds.top, entity.bounds.bottom);

            matches.forEach(function (match) {
                if (match.tile.type === 'death-border') {
                    if (entity.killable !== undefined) {
                        entity.killable.kill();
                    }
                }

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
/* 159 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = { "default": __webpack_require__(160), __esModule: true };

/***/ }),
/* 160 */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(16);
__webpack_require__(161);
module.exports = __webpack_require__(2).Array.from;


/***/ }),
/* 161 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var ctx = __webpack_require__(14);
var $export = __webpack_require__(3);
var toObject = __webpack_require__(35);
var call = __webpack_require__(70);
var isArrayIter = __webpack_require__(71);
var toLength = __webpack_require__(33);
var createProperty = __webpack_require__(162);
var getIterFn = __webpack_require__(49);

$export($export.S + $export.F * !__webpack_require__(77)(function (iter) { Array.from(iter); }), 'Array', {
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
/* 162 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var $defineProperty = __webpack_require__(7);
var createDesc = __webpack_require__(24);

module.exports = function (object, index, value) {
  if (index in object) $defineProperty.f(object, index, createDesc(0, value));
  else object[index] = value;
};


/***/ }),
/* 163 */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(30);
__webpack_require__(16);
__webpack_require__(21);
__webpack_require__(164);
__webpack_require__(165);
__webpack_require__(166);
__webpack_require__(167);
module.exports = __webpack_require__(2).Map;


/***/ }),
/* 164 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var strong = __webpack_require__(83);
var validate = __webpack_require__(57);
var MAP = 'Map';

// 23.1 Map Objects
module.exports = __webpack_require__(84)(MAP, function (get) {
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
/* 165 */
/***/ (function(module, exports, __webpack_require__) {

// https://github.com/DavidBruant/Map-Set.prototype.toJSON
var $export = __webpack_require__(3);

$export($export.P + $export.R, 'Map', { toJSON: __webpack_require__(85)('Map') });


/***/ }),
/* 166 */
/***/ (function(module, exports, __webpack_require__) {

// https://tc39.github.io/proposal-setmap-offrom/#sec-map.of
__webpack_require__(86)('Map');


/***/ }),
/* 167 */
/***/ (function(module, exports, __webpack_require__) {

// https://tc39.github.io/proposal-setmap-offrom/#sec-map.from
__webpack_require__(87)('Map');


/***/ }),
/* 168 */
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
/* 169 */
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
/* 170 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.createBackgroundLayer = createBackgroundLayer;

var _TileResolver = __webpack_require__(88);

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
/* 171 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _getIterator2 = __webpack_require__(37);

var _getIterator3 = _interopRequireDefault(_getIterator2);

var _slicedToArray2 = __webpack_require__(28);

var _slicedToArray3 = _interopRequireDefault(_slicedToArray2);

var _toConsumableArray2 = __webpack_require__(89);

var _toConsumableArray3 = _interopRequireDefault(_toConsumableArray2);

var _classCallCheck2 = __webpack_require__(0);

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = __webpack_require__(1);

var _createClass3 = _interopRequireDefault(_createClass2);

exports.loadFont = loadFont;

var _loader = __webpack_require__(29);

var _SpriteSheet = __webpack_require__(90);

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
    return (0, _loader.loadImage)('./assets/img/font.png').then(function (img) {
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
/* 172 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _promise = __webpack_require__(22);

var _promise2 = _interopRequireDefault(_promise);

exports.loadEntities = loadEntities;

var _Mario = __webpack_require__(173);

var _Goomba = __webpack_require__(177);

var _Koopa = __webpack_require__(178);

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
/* 173 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.loadMario = loadMario;

var _Entity = __webpack_require__(6);

var _Entity2 = _interopRequireDefault(_Entity);

var _Go = __webpack_require__(174);

var _Go2 = _interopRequireDefault(_Go);

var _Jump = __webpack_require__(175);

var _Jump2 = _interopRequireDefault(_Jump);

var _Stomer = __webpack_require__(176);

var _Stomer2 = _interopRequireDefault(_Stomer);

var _Killable = __webpack_require__(59);

var _Killable2 = _interopRequireDefault(_Killable);

var _Solid = __webpack_require__(60);

var _Solid2 = _interopRequireDefault(_Solid);

var _Physics = __webpack_require__(61);

var _Physics2 = _interopRequireDefault(_Physics);

var _loader = __webpack_require__(29);

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
var Go = function (_Trait) {
    (0, _inherits3.default)(Go, _Trait);

    function Go() {
        (0, _classCallCheck3.default)(this, Go);

        var _this = (0, _possibleConstructorReturn3.default)(this, (Go.__proto__ || (0, _getPrototypeOf2.default)(Go)).call(this, 'go'));
        /*super keyword in here means the father class's constructor of this class. */


        _this.dir = 0;
        _this.acceleration = 300;
        _this.deceleration = 200;
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

/*extends keyword can be used to inherit all the properties and methods. */
var Jump = function (_Trait) {
    (0, _inherits3.default)(Jump, _Trait);

    function Jump() {
        (0, _classCallCheck3.default)(this, Jump);

        var _this = (0, _possibleConstructorReturn3.default)(this, (Jump.__proto__ || (0, _getPrototypeOf2.default)(Jump)).call(this, 'jump'));
        /*super keyword in here means the father class's constructor of this class. */


        _this.duration = 0.3;
        _this.velocity = 180;
        _this.engageTime = 0; // total time allow to  pressing key
        _this.ready = 0;
        _this.gracePeriod = 0.1;
        _this.requestTime = 0;
        _this.speedBoost = 0.2;
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

var _Entity = __webpack_require__(6);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Stomer = function (_Trait) {
    (0, _inherits3.default)(Stomer, _Trait);

    function Stomer() {
        (0, _classCallCheck3.default)(this, Stomer);

        var _this = (0, _possibleConstructorReturn3.default)(this, (Stomer.__proto__ || (0, _getPrototypeOf2.default)(Stomer)).call(this, 'stomer'));

        _this.bounceSpeed = 200;

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
/* 177 */
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

var _loader = __webpack_require__(29);

var _PendulumMove = __webpack_require__(91);

var _PendulumMove2 = _interopRequireDefault(_PendulumMove);

var _Killable = __webpack_require__(59);

var _Killable2 = _interopRequireDefault(_Killable);

var _Solid = __webpack_require__(60);

var _Solid2 = _interopRequireDefault(_Solid);

var _Physics = __webpack_require__(61);

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
            if (us.killable.dead) {
                return;
            }

            if (them.stomer) {
                if (them.pos.y < us.pos.y) {
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
/* 178 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _sign = __webpack_require__(179);

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

var _loader = __webpack_require__(29);

var _PendulumMove = __webpack_require__(91);

var _PendulumMove2 = _interopRequireDefault(_PendulumMove);

var _Solid = __webpack_require__(60);

var _Solid2 = _interopRequireDefault(_Solid);

var _Physics = __webpack_require__(61);

var _Physics2 = _interopRequireDefault(_Physics);

var _Killable = __webpack_require__(59);

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
            if (us.killable.dead) {
                return;
            }

            if (them.stomer) {
                if (them.pos.y < us.pos.y) {
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
/* 179 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = { "default": __webpack_require__(180), __esModule: true };

/***/ }),
/* 180 */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(181);
module.exports = __webpack_require__(2).Math.sign;


/***/ }),
/* 181 */
/***/ (function(module, exports, __webpack_require__) {

// 20.2.2.28 Math.sign(x)
var $export = __webpack_require__(3);

$export($export.S, 'Math', { sign: __webpack_require__(182) });


/***/ }),
/* 182 */
/***/ (function(module, exports) {

// 20.2.2.28 Math.sign(x)
module.exports = Math.sign || function sign(x) {
  // eslint-disable-next-line no-self-compare
  return (x = +x) == 0 || x != x ? x : x < 0 ? -1 : 1;
};


/***/ }),
/* 183 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.createDashboardLayer = createDashboardLayer;

var _addPadStart = __webpack_require__(184);

function createDashboardLayer(font, playerEnv) {
    var LINE1 = font.size;
    var LINE2 = font.size * 2;

    var coins = 99;

    (0, _addPadStart.addPadStartPolyfill)();

    return function drawDashboard(context) {
        var time = playerEnv.playerController.time;
        var score = playerEnv.playerController.score;

        //TODO:IMPROVE time counter

        if (time <= 0) {
            playerEnv.playerController.time = time = 400;
        }

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
/* 184 */
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
/* 185 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.setupTouchPad = setupTouchPad;
exports.setupKeyboard = setupKeyboard;

var _KeyboardState = __webpack_require__(186);

var _KeyboardState2 = _interopRequireDefault(_KeyboardState);

var _TouchPadState = __webpack_require__(187);

var _TouchPadState2 = _interopRequireDefault(_TouchPadState);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function setupTouchPad(entity) {
    var jumpBtn = document.getElementById('jump-btn');
    var leftBtn = document.getElementById('left-btn');
    var rightBtn = document.getElementById('right-btn');

    var buttons = [jumpBtn, leftBtn, rightBtn];

    var input = new _TouchPadState2.default(buttons);

    input.startListenTo();

    input.addMapping('jump-btn', function (keyState) {
        if (keyState) {
            entity.jump.start();
        } else {
            entity.jump.cancel();
        }
    });

    input.addMapping('right-btn', function (keyState) {
        entity.go.dir += keyState ? 1 : -1;
    });

    input.addMapping('left-btn', function (keyState) {
        entity.go.dir += keyState ? -1 : 1;
    });
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
/* 186 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _map = __webpack_require__(58);

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

/***/ }),
/* 187 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _map = __webpack_require__(58);

var _map2 = _interopRequireDefault(_map);

var _classCallCheck2 = __webpack_require__(0);

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = __webpack_require__(1);

var _createClass3 = _interopRequireDefault(_createClass2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var PRESSED = 1,
    RELEASED = 0;

var TouchPadState = function () {
    function TouchPadState(buttons) {
        (0, _classCallCheck3.default)(this, TouchPadState);

        this.buttons = buttons;

        this.keyStates = new _map2.default();

        this.keyMap = new _map2.default();
    }

    (0, _createClass3.default)(TouchPadState, [{
        key: 'addMapping',
        value: function addMapping(code, callBack) {
            this.keyMap.set(code, callBack);
        }
    }, {
        key: 'handleEvent',
        value: function handleEvent(event) {
            var codeId = event.currentTarget.id;

            if (!this.keyMap.has(codeId)) {
                return;
            }

            // event.preventDefault();

            var keyState = event.type === 'touchstart' || event.type === 'mousedown' ? PRESSED : RELEASED;

            if (this.keyStates.get(codeId) === keyState) {
                // avoid triggering multiple times
                return;
            }

            this.keyStates.set(codeId, keyState);

            this.keyMap.get(codeId)(keyState);
        }
    }, {
        key: 'startListenTo',
        value: function startListenTo() {
            var _this = this;

            ['touchstart', 'touchend', 'mousedown', 'mouseup'].forEach(function (evtName) {
                _this.buttons.forEach(function (btn) {
                    btn.addEventListener(evtName, function (evt) {
                        _this.handleEvent(evt);
                    });
                });
            });
        }
    }]);
    return TouchPadState;
}();

exports.default = TouchPadState;

/***/ }),
/* 188 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _slicedToArray2 = __webpack_require__(28);

var _slicedToArray3 = _interopRequireDefault(_slicedToArray2);

exports.getUserAgent = getUserAgent;

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function getPlatform(ua) {
    if (/windows/i.test(ua)) {
        return ['Windows', 0];
    }

    if (/android/i.test(ua)) {
        var match = ua.match(/android\s([0-9\.]*)/i);
        var ver = match ? parseFloat(match[1]) : 0;
        return ['Android', ver];
    }

    // iOS detection from: http://stackoverflow.com/a/9039885/177710
    if (/iP(hone|od|ad)/.test(ua) && !window.MSStream) {
        var _match = navigator.appVersion.match(/OS (\d+)_(\d+)_?(\d+)?/);
        var _ver = _match ? parseInt(_match[1], 10) : 0;
        return ['iOS', _ver];
    }

    if (ua.indexOf('Mac') > -1) {
        return ['Mac', 0];
    }

    return ['unknown', 0];
}

function getUserAgent() {
    var uaInfo = {};

    var ua = navigator.userAgent;

    // TODO Better Compatibility Detect
    try {
        var _getPlatform = getPlatform(ua);

        var _getPlatform2 = (0, _slicedToArray3.default)(_getPlatform, 2);

        uaInfo.platform = _getPlatform2[0];
        uaInfo.ver = _getPlatform2[1];
    } catch (err) {
        var _ref = ['Windows', 0];
        uaInfo.platform = _ref[0];
        uaInfo.ver = _ref[1];
    }

    // alert(uaInfo.platform, uaInfo.ver);

    return uaInfo;
}

/***/ }),
/* 189 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.autoPlayOniOS = autoPlayOniOS;
function autoPlayOniOS() {
    var bgmAudioEl = document.getElementById('bgm');

    function forceSafariAutoPlay() {
        // bgmAudioEl.load();
        bgmAudioEl.play();
    }

    window.addEventListener('touchstart', forceSafariAutoPlay);

    bgmAudioEl.addEventListener('play', function () {
        // console.log('BGM Played!');

        window.removeEventListener('touchstart', forceSafariAutoPlay);
    });
}

/***/ }),
/* 190 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _getIterator2 = __webpack_require__(37);

var _getIterator3 = _interopRequireDefault(_getIterator2);

exports.controlEntities = controlEntities;

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function lookForEntity(levelEntities, targetEntity) {
    var ret = false;

    var _iteratorNormalCompletion = true;
    var _didIteratorError = false;
    var _iteratorError = undefined;

    try {
        for (var _iterator = (0, _getIterator3.default)(levelEntities), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
            var addedEntity = _step.value;

            if (addedEntity.hashId && addedEntity.hashId === targetEntity.hashId) {
                ret = true;
            }
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

    return ret;
}

function calculatePosFromCamera(entityPos, cameraPos) {
    var twentyBlock = 320;
    var disFromCamera = entityPos.x - cameraPos.x;

    return disFromCamera < twentyBlock && disFromCamera > -twentyBlock;
}

function addEntities(level, targetEntity, entityFactory) {
    var createEntity = entityFactory[targetEntity.name];
    var entity = createEntity();
    entity.pos.set(targetEntity.pos.x, targetEntity.pos.y);
    entity.hashId = targetEntity.hashId;
    level.entities.add(entity);

    for (var i = 0; i < level.toBeAddedEntities.length; i++) {
        if (level.toBeAddedEntities[i].hashId === targetEntity.hashId) {
            level.toBeAddedEntities.splice(i, 1);
            break;
        }
    }
}

function checkEntities(level, entityFactory, camera) {
    /*The logic can be:
     * 0. Record: When game initiating, record the entity pos and a Unique id for identifying.
     * 1. Checking: During playing, check the pos recorded continuously(Trigger frequency should be optimized).
     * 2. Add: If the pos of an entity is near the camera, And it was not added yet (judge by id), then add it to game.
     * 3. Deleting: When an entity was killed, delete it from level.entities.
     * 4. Respawn: When the camera get close to the entity Once Again(How to detect???), add it again.
     *
     * Data Struc: Two Set.
     *
     */
    level.entitiesRecord.forEach(function (entity) {
        var entityNearCamera = calculatePosFromCamera(entity.pos, camera.pos);

        if (entityNearCamera) {
            var entityNotAddedYet = lookForEntity(level.toBeAddedEntities, entity);

            if (entityNotAddedYet) {
                addEntities(level, entity, entityFactory);
            }
        }
    });
}

function deleteUselessEntities(level, camera) {
    level.entities.forEach(function (entity) {
        var entityNearCamera = calculatePosFromCamera(entity.pos, camera.pos);

        if (!entityNearCamera && entity.killable !== undefined) {
            level.entities.delete(entity);

            // TODO: Optimize check point logic, can not got checked sometimes.
            level.checkEntitiesPoints.push(entity.pos.x - 301);
            level.checkEntitiesPoints.push(entity.pos.x - 300);
            level.checkEntitiesPoints.push(entity.pos.x - 299);

            level.toBeAddedEntities.push({
                hashId: entity.hashId
            });
            console.log('deleteUselessEntities; levelEntities.size = ', level.entities.size);
        }
    });
}

function controlEntities(camera, level, entityFactory) {
    var intCameraPosX = Math.floor(camera.pos.x);

    var checkEntitiesPointIndex = level.checkEntitiesPoints.indexOf(intCameraPosX);
    var nearCheckEntitiesPoint = checkEntitiesPointIndex !== -1;
    if (nearCheckEntitiesPoint) {
        level.checkEntitiesPoints.splice(checkEntitiesPointIndex, 1);
        // 最理想的状态是，只有当“需要”添加实体时，才检测一次，
        // 一个关卡有几个实体，就只有几次 checkEntities
        console.log('checkEntities');
        checkEntities(level, entityFactory, camera);
        deleteUselessEntities(level, camera);
    }
}

/***/ })
/******/ ]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAgNzIwMzNmNmVkZjEzOWUwOTVlOTAiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL19iYWJlbC1ydW50aW1lQDYuMjYuMEBiYWJlbC1ydW50aW1lL2hlbHBlcnMvY2xhc3NDYWxsQ2hlY2suanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL19iYWJlbC1ydW50aW1lQDYuMjYuMEBiYWJlbC1ydW50aW1lL2hlbHBlcnMvY3JlYXRlQ2xhc3MuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL19jb3JlLWpzQDIuNS4zQGNvcmUtanMvbGlicmFyeS9tb2R1bGVzL19jb3JlLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9fY29yZS1qc0AyLjUuM0Bjb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9fZXhwb3J0LmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9fY29yZS1qc0AyLjUuM0Bjb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9fd2tzLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9fY29yZS1qc0AyLjUuM0Bjb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9fZ2xvYmFsLmpzIiwid2VicGFjazovLy8uL3B1YmxpYy9qcy9FbnRpdHkuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL19jb3JlLWpzQDIuNS4zQGNvcmUtanMvbGlicmFyeS9tb2R1bGVzL19vYmplY3QtZHAuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL19jb3JlLWpzQDIuNS4zQGNvcmUtanMvbGlicmFyeS9tb2R1bGVzL19pcy1vYmplY3QuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL19jb3JlLWpzQDIuNS4zQGNvcmUtanMvbGlicmFyeS9tb2R1bGVzL19hbi1vYmplY3QuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL19jb3JlLWpzQDIuNS4zQGNvcmUtanMvbGlicmFyeS9tb2R1bGVzL19kZXNjcmlwdG9ycy5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvX2JhYmVsLXJ1bnRpbWVANi4yNi4wQGJhYmVsLXJ1bnRpbWUvY29yZS1qcy9vYmplY3QvZ2V0LXByb3RvdHlwZS1vZi5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvX2JhYmVsLXJ1bnRpbWVANi4yNi4wQGJhYmVsLXJ1bnRpbWUvaGVscGVycy9wb3NzaWJsZUNvbnN0cnVjdG9yUmV0dXJuLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9fYmFiZWwtcnVudGltZUA2LjI2LjBAYmFiZWwtcnVudGltZS9oZWxwZXJzL2luaGVyaXRzLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9fY29yZS1qc0AyLjUuM0Bjb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9fY3R4LmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9fY29yZS1qc0AyLjUuM0Bjb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9faGlkZS5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvX2NvcmUtanNAMi41LjNAY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvZXM2LnN0cmluZy5pdGVyYXRvci5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvX2NvcmUtanNAMi41LjNAY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX2hhcy5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvX2NvcmUtanNAMi41LjNAY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX2ZhaWxzLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9fY29yZS1qc0AyLjUuM0Bjb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9faXRlcmF0b3JzLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9fY29yZS1qc0AyLjUuM0Bjb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9fdG8taW9iamVjdC5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvX2NvcmUtanNAMi41LjNAY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvd2ViLmRvbS5pdGVyYWJsZS5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvX2JhYmVsLXJ1bnRpbWVANi4yNi4wQGJhYmVsLXJ1bnRpbWUvY29yZS1qcy9wcm9taXNlLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9fY29yZS1qc0AyLjUuM0Bjb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9fYS1mdW5jdGlvbi5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvX2NvcmUtanNAMi41LjNAY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX3Byb3BlcnR5LWRlc2MuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL19jb3JlLWpzQDIuNS4zQGNvcmUtanMvbGlicmFyeS9tb2R1bGVzL19jb2YuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL19jb3JlLWpzQDIuNS4zQGNvcmUtanMvbGlicmFyeS9tb2R1bGVzL19zZXQtdG8tc3RyaW5nLXRhZy5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvX2NvcmUtanNAMi41LjNAY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX2Zvci1vZi5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvX2JhYmVsLXJ1bnRpbWVANi4yNi4wQGJhYmVsLXJ1bnRpbWUvaGVscGVycy9zbGljZWRUb0FycmF5LmpzIiwid2VicGFjazovLy8uL3B1YmxpYy9qcy9sb2FkZXIuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL19jb3JlLWpzQDIuNS4zQGNvcmUtanMvbGlicmFyeS9tb2R1bGVzL19saWJyYXJ5LmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9fY29yZS1qc0AyLjUuM0Bjb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9fb2JqZWN0LWNyZWF0ZS5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvX2NvcmUtanNAMi41LjNAY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX3RvLWxlbmd0aC5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvX2NvcmUtanNAMi41LjNAY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX3VpZC5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvX2NvcmUtanNAMi41LjNAY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX3RvLW9iamVjdC5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvX2NvcmUtanNAMi41LjNAY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX2NsYXNzb2YuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL19iYWJlbC1ydW50aW1lQDYuMjYuMEBiYWJlbC1ydW50aW1lL2NvcmUtanMvZ2V0LWl0ZXJhdG9yLmpzIiwid2VicGFjazovLy8uL3B1YmxpYy9qcy9tYXRoLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9fY29yZS1qc0AyLjUuM0Bjb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9fdG8taW50ZWdlci5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvX2NvcmUtanNAMi41LjNAY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX2RlZmluZWQuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL19jb3JlLWpzQDIuNS4zQGNvcmUtanMvbGlicmFyeS9tb2R1bGVzL19pdGVyLWRlZmluZS5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvX2NvcmUtanNAMi41LjNAY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX2RvbS1jcmVhdGUuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL19jb3JlLWpzQDIuNS4zQGNvcmUtanMvbGlicmFyeS9tb2R1bGVzL190by1wcmltaXRpdmUuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL19jb3JlLWpzQDIuNS4zQGNvcmUtanMvbGlicmFyeS9tb2R1bGVzL19vYmplY3Qta2V5cy5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvX2NvcmUtanNAMi41LjNAY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX3NoYXJlZC1rZXkuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL19jb3JlLWpzQDIuNS4zQGNvcmUtanMvbGlicmFyeS9tb2R1bGVzL19zaGFyZWQuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL19jb3JlLWpzQDIuNS4zQGNvcmUtanMvbGlicmFyeS9tb2R1bGVzL19lbnVtLWJ1Zy1rZXlzLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9fY29yZS1qc0AyLjUuM0Bjb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9fYW4taW5zdGFuY2UuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL19jb3JlLWpzQDIuNS4zQGNvcmUtanMvbGlicmFyeS9tb2R1bGVzL2NvcmUuZ2V0LWl0ZXJhdG9yLW1ldGhvZC5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvX2NvcmUtanNAMi41LjNAY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX25ldy1wcm9taXNlLWNhcGFiaWxpdHkuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL19jb3JlLWpzQDIuNS4zQGNvcmUtanMvbGlicmFyeS9tb2R1bGVzL19yZWRlZmluZS1hbGwuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL19iYWJlbC1ydW50aW1lQDYuMjYuMEBiYWJlbC1ydW50aW1lL2NvcmUtanMvc3ltYm9sLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9fY29yZS1qc0AyLjUuM0Bjb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9fbWV0YS5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvX2NvcmUtanNAMi41LjNAY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX3drcy1leHQuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL19jb3JlLWpzQDIuNS4zQGNvcmUtanMvbGlicmFyeS9tb2R1bGVzL193a3MtZGVmaW5lLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9fY29yZS1qc0AyLjUuM0Bjb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9fb2JqZWN0LXBpZS5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvX2NvcmUtanNAMi41LjNAY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX3ZhbGlkYXRlLWNvbGxlY3Rpb24uanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL19iYWJlbC1ydW50aW1lQDYuMjYuMEBiYWJlbC1ydW50aW1lL2NvcmUtanMvbWFwLmpzIiwid2VicGFjazovLy8uL3B1YmxpYy9qcy90cmFpdHMvS2lsbGFibGUuanMiLCJ3ZWJwYWNrOi8vLy4vcHVibGljL2pzL3RyYWl0cy9Tb2xpZC5qcyIsIndlYnBhY2s6Ly8vLi9wdWJsaWMvanMvdHJhaXRzL1BoeXNpY3MuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL19iYWJlbC1ydW50aW1lQDYuMjYuMEBiYWJlbC1ydW50aW1lL3JlZ2VuZXJhdG9yL2luZGV4LmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9fY29yZS1qc0AyLjUuM0Bjb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9faWU4LWRvbS1kZWZpbmUuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL19jb3JlLWpzQDIuNS4zQGNvcmUtanMvbGlicmFyeS9tb2R1bGVzL19yZWRlZmluZS5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvX2NvcmUtanNAMi41LjNAY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX29iamVjdC1rZXlzLWludGVybmFsLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9fY29yZS1qc0AyLjUuM0Bjb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9faW9iamVjdC5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvX2NvcmUtanNAMi41LjNAY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX2h0bWwuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL19jb3JlLWpzQDIuNS4zQGNvcmUtanMvbGlicmFyeS9tb2R1bGVzL19vYmplY3QtZ3BvLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9fY29yZS1qc0AyLjUuM0Bjb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9faXRlci1zdGVwLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9fY29yZS1qc0AyLjUuM0Bjb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9faXRlci1jYWxsLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9fY29yZS1qc0AyLjUuM0Bjb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9faXMtYXJyYXktaXRlci5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvX2NvcmUtanNAMi41LjNAY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX3NwZWNpZXMtY29uc3RydWN0b3IuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL19jb3JlLWpzQDIuNS4zQGNvcmUtanMvbGlicmFyeS9tb2R1bGVzL190YXNrLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9fY29yZS1qc0AyLjUuM0Bjb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9fcGVyZm9ybS5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvX2NvcmUtanNAMi41LjNAY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX3Byb21pc2UtcmVzb2x2ZS5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvX2NvcmUtanNAMi41LjNAY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX3NldC1zcGVjaWVzLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9fY29yZS1qc0AyLjUuM0Bjb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9faXRlci1kZXRlY3QuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL19jb3JlLWpzQDIuNS4zQGNvcmUtanMvbGlicmFyeS9tb2R1bGVzL19vYmplY3QtZ29wcy5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvX2NvcmUtanNAMi41LjNAY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX2lzLWFycmF5LmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9fY29yZS1qc0AyLjUuM0Bjb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9fb2JqZWN0LWdvcG4uanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL19jb3JlLWpzQDIuNS4zQGNvcmUtanMvbGlicmFyeS9tb2R1bGVzL19vYmplY3QtZ29wZC5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvX2JhYmVsLXJ1bnRpbWVANi4yNi4wQGJhYmVsLXJ1bnRpbWUvaGVscGVycy90eXBlb2YuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL19jb3JlLWpzQDIuNS4zQGNvcmUtanMvbGlicmFyeS9tb2R1bGVzL19jb2xsZWN0aW9uLXN0cm9uZy5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvX2NvcmUtanNAMi41LjNAY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX2NvbGxlY3Rpb24uanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL19jb3JlLWpzQDIuNS4zQGNvcmUtanMvbGlicmFyeS9tb2R1bGVzL19jb2xsZWN0aW9uLXRvLWpzb24uanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL19jb3JlLWpzQDIuNS4zQGNvcmUtanMvbGlicmFyeS9tb2R1bGVzL19zZXQtY29sbGVjdGlvbi1vZi5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvX2NvcmUtanNAMi41LjNAY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX3NldC1jb2xsZWN0aW9uLWZyb20uanMiLCJ3ZWJwYWNrOi8vLy4vcHVibGljL2pzL1RpbGVSZXNvbHZlci5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvX2JhYmVsLXJ1bnRpbWVANi4yNi4wQGJhYmVsLXJ1bnRpbWUvaGVscGVycy90b0NvbnN1bWFibGVBcnJheS5qcyIsIndlYnBhY2s6Ly8vLi9wdWJsaWMvanMvU3ByaXRlU2hlZXQuanMiLCJ3ZWJwYWNrOi8vLy4vcHVibGljL2pzL3RyYWl0cy9QZW5kdWx1bU1vdmUuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL193aGF0d2ctZmV0Y2hAMi4wLjNAd2hhdHdnLWZldGNoL2ZldGNoLmpzIiwid2VicGFjazovLy8uL3B1YmxpYy9qcy9tYWluLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9fcmVnZW5lcmF0b3ItcnVudGltZUAwLjExLjFAcmVnZW5lcmF0b3ItcnVudGltZS9ydW50aW1lLW1vZHVsZS5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvX3JlZ2VuZXJhdG9yLXJ1bnRpbWVAMC4xMS4xQHJlZ2VuZXJhdG9yLXJ1bnRpbWUvcnVudGltZS5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvX2NvcmUtanNAMi41LjNAY29yZS1qcy9saWJyYXJ5L2ZuL3Byb21pc2UuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL19jb3JlLWpzQDIuNS4zQGNvcmUtanMvbGlicmFyeS9tb2R1bGVzL19zdHJpbmctYXQuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL19jb3JlLWpzQDIuNS4zQGNvcmUtanMvbGlicmFyeS9tb2R1bGVzL19pdGVyLWNyZWF0ZS5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvX2NvcmUtanNAMi41LjNAY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX29iamVjdC1kcHMuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL19jb3JlLWpzQDIuNS4zQGNvcmUtanMvbGlicmFyeS9tb2R1bGVzL19hcnJheS1pbmNsdWRlcy5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvX2NvcmUtanNAMi41LjNAY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX3RvLWFic29sdXRlLWluZGV4LmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9fY29yZS1qc0AyLjUuM0Bjb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9lczYuYXJyYXkuaXRlcmF0b3IuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL19jb3JlLWpzQDIuNS4zQGNvcmUtanMvbGlicmFyeS9tb2R1bGVzL19hZGQtdG8tdW5zY29wYWJsZXMuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL19jb3JlLWpzQDIuNS4zQGNvcmUtanMvbGlicmFyeS9tb2R1bGVzL2VzNi5wcm9taXNlLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9fY29yZS1qc0AyLjUuM0Bjb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9faW52b2tlLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9fY29yZS1qc0AyLjUuM0Bjb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9fbWljcm90YXNrLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9fY29yZS1qc0AyLjUuM0Bjb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9lczcucHJvbWlzZS5maW5hbGx5LmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9fY29yZS1qc0AyLjUuM0Bjb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9lczcucHJvbWlzZS50cnkuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL19iYWJlbC1ydW50aW1lQDYuMjYuMEBiYWJlbC1ydW50aW1lL2NvcmUtanMvaXMtaXRlcmFibGUuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL19jb3JlLWpzQDIuNS4zQGNvcmUtanMvbGlicmFyeS9mbi9pcy1pdGVyYWJsZS5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvX2NvcmUtanNAMi41LjNAY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvY29yZS5pcy1pdGVyYWJsZS5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvX2NvcmUtanNAMi41LjNAY29yZS1qcy9saWJyYXJ5L2ZuL2dldC1pdGVyYXRvci5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvX2NvcmUtanNAMi41LjNAY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvY29yZS5nZXQtaXRlcmF0b3IuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL19iYWJlbC1ydW50aW1lQDYuMjYuMEBiYWJlbC1ydW50aW1lL2hlbHBlcnMvYXN5bmNUb0dlbmVyYXRvci5qcyIsIndlYnBhY2s6Ly8vLi9wdWJsaWMvY3NzL21haW4uY3NzPzcwNjQiLCJ3ZWJwYWNrOi8vLy4vcHVibGljL2pzL1RpbWVyLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9fYmFiZWwtcnVudGltZUA2LjI2LjBAYmFiZWwtcnVudGltZS9jb3JlLWpzL29iamVjdC9kZWZpbmUtcHJvcGVydHkuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL19jb3JlLWpzQDIuNS4zQGNvcmUtanMvbGlicmFyeS9mbi9vYmplY3QvZGVmaW5lLXByb3BlcnR5LmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9fY29yZS1qc0AyLjUuM0Bjb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9lczYub2JqZWN0LmRlZmluZS1wcm9wZXJ0eS5qcyIsIndlYnBhY2s6Ly8vLi9wdWJsaWMvanMvQ2FtZXJhLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9fY29yZS1qc0AyLjUuM0Bjb3JlLWpzL2xpYnJhcnkvZm4vc3ltYm9sL2luZGV4LmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9fY29yZS1qc0AyLjUuM0Bjb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9lczYuc3ltYm9sLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9fY29yZS1qc0AyLjUuM0Bjb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9fZW51bS1rZXlzLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9fY29yZS1qc0AyLjUuM0Bjb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9fb2JqZWN0LWdvcG4tZXh0LmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9fY29yZS1qc0AyLjUuM0Bjb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9lczcuc3ltYm9sLmFzeW5jLWl0ZXJhdG9yLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9fY29yZS1qc0AyLjUuM0Bjb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9lczcuc3ltYm9sLm9ic2VydmFibGUuanMiLCJ3ZWJwYWNrOi8vLy4vcHVibGljL2pzL0JvdW5kaW5nQm94LmpzIiwid2VicGFjazovLy8uL3B1YmxpYy9qcy90cmFpdHMvUGxheWVyQ29udHJvbGxlci5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvX2NvcmUtanNAMi41LjNAY29yZS1qcy9saWJyYXJ5L2ZuL29iamVjdC9nZXQtcHJvdG90eXBlLW9mLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9fY29yZS1qc0AyLjUuM0Bjb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9lczYub2JqZWN0LmdldC1wcm90b3R5cGUtb2YuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL19jb3JlLWpzQDIuNS4zQGNvcmUtanMvbGlicmFyeS9tb2R1bGVzL19vYmplY3Qtc2FwLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9fYmFiZWwtcnVudGltZUA2LjI2LjBAYmFiZWwtcnVudGltZS9jb3JlLWpzL3N5bWJvbC9pdGVyYXRvci5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvX2NvcmUtanNAMi41LjNAY29yZS1qcy9saWJyYXJ5L2ZuL3N5bWJvbC9pdGVyYXRvci5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvX2JhYmVsLXJ1bnRpbWVANi4yNi4wQGJhYmVsLXJ1bnRpbWUvY29yZS1qcy9vYmplY3Qvc2V0LXByb3RvdHlwZS1vZi5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvX2NvcmUtanNAMi41LjNAY29yZS1qcy9saWJyYXJ5L2ZuL29iamVjdC9zZXQtcHJvdG90eXBlLW9mLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9fY29yZS1qc0AyLjUuM0Bjb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9lczYub2JqZWN0LnNldC1wcm90b3R5cGUtb2YuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL19jb3JlLWpzQDIuNS4zQGNvcmUtanMvbGlicmFyeS9tb2R1bGVzL19zZXQtcHJvdG8uanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL19iYWJlbC1ydW50aW1lQDYuMjYuMEBiYWJlbC1ydW50aW1lL2NvcmUtanMvb2JqZWN0L2NyZWF0ZS5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvX2NvcmUtanNAMi41LjNAY29yZS1qcy9saWJyYXJ5L2ZuL29iamVjdC9jcmVhdGUuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL19jb3JlLWpzQDIuNS4zQGNvcmUtanMvbGlicmFyeS9tb2R1bGVzL2VzNi5vYmplY3QuY3JlYXRlLmpzIiwid2VicGFjazovLy8uL3B1YmxpYy9qcy9sb2FkZXJzL2xldmVsLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9fYmFiZWwtcnVudGltZUA2LjI2LjBAYmFiZWwtcnVudGltZS9jb3JlLWpzL2pzb24vc3RyaW5naWZ5LmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9fY29yZS1qc0AyLjUuM0Bjb3JlLWpzL2xpYnJhcnkvZm4vanNvbi9zdHJpbmdpZnkuanMiLCJ3ZWJwYWNrOi8vLy4vcHVibGljL2pzL0xldmVsLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9fYmFiZWwtcnVudGltZUA2LjI2LjBAYmFiZWwtcnVudGltZS9jb3JlLWpzL3NldC5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvX2NvcmUtanNAMi41LjNAY29yZS1qcy9saWJyYXJ5L2ZuL3NldC5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvX2NvcmUtanNAMi41LjNAY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvZXM2LnNldC5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvX2NvcmUtanNAMi41LjNAY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX2FycmF5LW1ldGhvZHMuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL19jb3JlLWpzQDIuNS4zQGNvcmUtanMvbGlicmFyeS9tb2R1bGVzL19hcnJheS1zcGVjaWVzLWNyZWF0ZS5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvX2NvcmUtanNAMi41LjNAY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX2FycmF5LXNwZWNpZXMtY29uc3RydWN0b3IuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL19jb3JlLWpzQDIuNS4zQGNvcmUtanMvbGlicmFyeS9tb2R1bGVzL2VzNy5zZXQudG8tanNvbi5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvX2NvcmUtanNAMi41LjNAY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX2FycmF5LWZyb20taXRlcmFibGUuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL19jb3JlLWpzQDIuNS4zQGNvcmUtanMvbGlicmFyeS9tb2R1bGVzL2VzNy5zZXQub2YuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL19jb3JlLWpzQDIuNS4zQGNvcmUtanMvbGlicmFyeS9tb2R1bGVzL2VzNy5zZXQuZnJvbS5qcyIsIndlYnBhY2s6Ly8vLi9wdWJsaWMvanMvY29tcG9zaXRvci5qcyIsIndlYnBhY2s6Ly8vLi9wdWJsaWMvanMvRW50aXR5Q29sbGlkZXIuanMiLCJ3ZWJwYWNrOi8vLy4vcHVibGljL2pzL1RpbGVDb2xsaWRlci5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvX2JhYmVsLXJ1bnRpbWVANi4yNi4wQGJhYmVsLXJ1bnRpbWUvY29yZS1qcy9hcnJheS9mcm9tLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9fY29yZS1qc0AyLjUuM0Bjb3JlLWpzL2xpYnJhcnkvZm4vYXJyYXkvZnJvbS5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvX2NvcmUtanNAMi41LjNAY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvZXM2LmFycmF5LmZyb20uanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL19jb3JlLWpzQDIuNS4zQGNvcmUtanMvbGlicmFyeS9tb2R1bGVzL19jcmVhdGUtcHJvcGVydHkuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL19jb3JlLWpzQDIuNS4zQGNvcmUtanMvbGlicmFyeS9mbi9tYXAuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL19jb3JlLWpzQDIuNS4zQGNvcmUtanMvbGlicmFyeS9tb2R1bGVzL2VzNi5tYXAuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL19jb3JlLWpzQDIuNS4zQGNvcmUtanMvbGlicmFyeS9tb2R1bGVzL2VzNy5tYXAudG8tanNvbi5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvX2NvcmUtanNAMi41LjNAY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvZXM3Lm1hcC5vZi5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvX2NvcmUtanNAMi41LjNAY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvZXM3Lm1hcC5mcm9tLmpzIiwid2VicGFjazovLy8uL3B1YmxpYy9qcy9hbmltLmpzIiwid2VicGFjazovLy8uL3B1YmxpYy9qcy9sYXllcnMvc3ByaXRlcy5qcyIsIndlYnBhY2s6Ly8vLi9wdWJsaWMvanMvbGF5ZXJzL2JhY2tncm91bmQuanMiLCJ3ZWJwYWNrOi8vLy4vcHVibGljL2pzL2xvYWRlcnMvZm9udC5qcyIsIndlYnBhY2s6Ly8vLi9wdWJsaWMvanMvZW50aXRpZXMuanMiLCJ3ZWJwYWNrOi8vLy4vcHVibGljL2pzL2VudGl0aWVzL01hcmlvLmpzIiwid2VicGFjazovLy8uL3B1YmxpYy9qcy90cmFpdHMvR28uanMiLCJ3ZWJwYWNrOi8vLy4vcHVibGljL2pzL3RyYWl0cy9KdW1wLmpzIiwid2VicGFjazovLy8uL3B1YmxpYy9qcy90cmFpdHMvU3RvbWVyLmpzIiwid2VicGFjazovLy8uL3B1YmxpYy9qcy9lbnRpdGllcy9Hb29tYmEuanMiLCJ3ZWJwYWNrOi8vLy4vcHVibGljL2pzL2VudGl0aWVzL0tvb3BhLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9fYmFiZWwtcnVudGltZUA2LjI2LjBAYmFiZWwtcnVudGltZS9jb3JlLWpzL21hdGgvc2lnbi5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvX2NvcmUtanNAMi41LjNAY29yZS1qcy9saWJyYXJ5L2ZuL21hdGgvc2lnbi5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvX2NvcmUtanNAMi41LjNAY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvZXM2Lm1hdGguc2lnbi5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvX2NvcmUtanNAMi41LjNAY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX21hdGgtc2lnbi5qcyIsIndlYnBhY2s6Ly8vLi9wdWJsaWMvanMvbGF5ZXJzL2Rhc2hib2FyZC5qcyIsIndlYnBhY2s6Ly8vLi9wdWJsaWMvanMvcG9seWZpbGxzL2FkZFBhZFN0YXJ0LmpzIiwid2VicGFjazovLy8uL3B1YmxpYy9qcy9pbnB1dC9pbnB1dC5qcyIsIndlYnBhY2s6Ly8vLi9wdWJsaWMvanMvaW5wdXQvS2V5Ym9hcmRTdGF0ZS5qcyIsIndlYnBhY2s6Ly8vLi9wdWJsaWMvanMvaW5wdXQvVG91Y2hQYWRTdGF0ZS5qcyIsIndlYnBhY2s6Ly8vLi9wdWJsaWMvanMvcG9seWZpbGxzL2dldFVzZXJBZ2VudC5qcyIsIndlYnBhY2s6Ly8vLi9wdWJsaWMvanMvcG9seWZpbGxzL2F1dG9QbGF5T25pT1MuanMiLCJ3ZWJwYWNrOi8vLy4vcHVibGljL2pzL2VudGl0aWVzQ29udHJvbFN5c3RlbS5qcyJdLCJuYW1lcyI6WyJTaWRlcyIsIkxFRlQiLCJSSUdIVCIsIkJPVFRPTSIsIlRPUCIsIlRyYWl0IiwibmFtZSIsIk5BTUUiLCJ0YXNrcyIsImZvckVhY2giLCJ0YXNrIiwibGVuZ3RoIiwicHVzaCIsInVzIiwidGhlbSIsIkVudGl0eSIsImNhbkNvbGxpZGVzIiwicG9zIiwidmVsIiwic2l6ZSIsIm9mZnNldCIsImJvdW5kcyIsImxpZmVUaW1lIiwidHJhaXRzIiwidHJhaXQiLCJmaW5hbGl6ZSIsImNhbmRpZGF0ZSIsImNvbGxpZGVzIiwic2lkZSIsIm1hdGNoIiwib2JzdHJ1Y3QiLCJkZWx0YVRpbWUiLCJsZXZlbCIsInVwZGF0ZSIsImxvYWRJbWFnZSIsImxvYWRKU09OIiwibG9hZFNwcml0ZVNoZWV0IiwidXJsIiwiaW1hZ2UiLCJJbWFnZSIsImFkZEV2ZW50TGlzdGVuZXIiLCJyZXNvbHZlIiwic3JjIiwiZmV0Y2giLCJ0aGVuIiwiciIsImpzb24iLCJhbGwiLCJzaGVldFNwZWMiLCJpbWFnZVVSTCIsInNwcml0ZXMiLCJ0aWxlVyIsInRpbGVIIiwidGlsZXMiLCJkZWZpbmVUaWxlIiwidGlsZVNwZWMiLCJpbmRleCIsImZyYW1lcyIsImRlZmluZSIsImZyYW1lU3BlYyIsInJlY3QiLCJhbmltYXRpb25zIiwiYW5pbWF0aW9uIiwiYW5pbVNwZWMiLCJmcmFtZUxlbiIsImRlZmluZUFuaW0iLCJNYXRyaXgiLCJncmlkIiwiY2FsbGJhY2siLCJjb2x1bW4iLCJ4IiwidmFsIiwieSIsImNvbCIsInVuZGVmaW5lZCIsInZhbHVlIiwiVmVjMiIsInNldCIsIktpbGxhYmxlIiwiZGVhZCIsImRlYWRUaW1lIiwicmVtb3ZlQWZ0ZXIiLCJxdWV1ZSIsImVudGl0eSIsImVudGl0aWVzIiwiZGVsZXRlIiwiU29saWQiLCJvYnN0cnVjdHMiLCJzaWRlcyIsInRvcCIsInkxIiwieTIiLCJsZWZ0IiwieDEiLCJ4MiIsIlBoeXNpY3MiLCJ0aWxlQ29sbGlkZXIiLCJjaGVja1giLCJjaGVja1kiLCJncmF2aXR5IiwiVGlsZVJlc29sdmVyIiwibWF0cml4IiwidGlsZVNpemUiLCJNYXRoIiwiZmxvb3IiLCJwb3MxIiwicG9zMiIsInBNYXgiLCJjZWlsIiwicmFuZ2UiLCJ0b0luZGV4IiwiaW5kZXhYIiwiaW5kZXhZIiwidGlsZSIsImdldCIsInBvc1giLCJwb3NZIiwiZ2V0QnlJbmRleCIsIm1hdGNoZXMiLCJ0b0luZGV4UmFuZ2UiLCJTcHJpdGVTaGVldCIsIndpZHRoIiwiaGVpZ2h0IiwiYnVmZmVycyIsIm1hcCIsImJ1ZmZlciIsImRvY3VtZW50IiwiY3JlYXRlRWxlbWVudCIsImNvbnRleHQiLCJnZXRDb250ZXh0IiwiZmxpcCIsInNjYWxlIiwidHJhbnNsYXRlIiwiZHJhd0ltYWdlIiwiZHJhdyIsImRpc3RhbmNlIiwiYW5pbSIsImRyYXdUaWxlIiwiUGVuZHVsdW1Nb3ZlIiwiZW5hYmxlIiwic3BlZWQiLCJjYW52YXMiLCJlbnRpdHlGYWN0b3J5IiwiZm9udCIsImxvYWRMZXZlbCIsImNhbWVyYSIsIm1hcmlvIiwiYWRkIiwicGxheWVyRW52IiwiY3JlYXRlUGxheWVyRW52IiwiY29tcCIsImxheWVycyIsImZwcyIsInVhSW5mbyIsInBsYXRmb3JtIiwidmVyIiwiaW5wdXQiLCJsaXN0ZW5UbyIsIndpbmRvdyIsInRpbWVyIiwibWF4Iiwic3RhcnQiLCJtYWluIiwicGxheWVyRW50aXR5IiwicGxheWVyQ29udHJvbCIsInNldFBsYXllciIsImFkZFRyYWl0IiwiZ2V0RWxlbWVudEJ5SWQiLCJUaW1lciIsImFjY3VtdWxhdGVkVGltZSIsImxhc3RUaW1lIiwidXBkYXRlUHJveHkiLCJ0aW1lIiwiZW5xdWV1ZSIsInJlcXVlc3RBbmltYXRpb25GcmFtZSIsIkNhbWVyYSIsIkJvdW5kaW5nQm94IiwiYm94IiwiYm90dG9tIiwicmlnaHQiLCJQbGF5ZXJDb250cm9sbGVyIiwicGxheWVyIiwiY2hlY2tQb2ludCIsInNjb3JlIiwic3RvbWVyIiwib25TdG9tcCIsImhhcyIsImtpbGxhYmxlIiwicmV2aXZlIiwiY3JlYXRlTGV2ZWxMb2FkZXIiLCJleHBhbmRTcGFuIiwiZXhwYW5kUmFuZ2VzIiwiZXhwYW5kVGlsZXMiLCJzZXR1cExldmVsIiwibGV2ZWxTcGVjIiwibWVyZ2VkQ29sbGlzaW9uR3JpZCIsInJlZHVjZSIsIm1lcmdlZFRpbGVzIiwibGF5ZXJTcGVjIiwiY29uY2F0IiwiY29sbGlzaW9uR3JpZCIsImNyZWF0ZUNvbGxpc2lvbkdyaWQiLCJwYXR0ZXJucyIsInNldENvbGxpc2lvbkdyaWQiLCJzZXR1cEJhY2tncm91bmQiLCJiYWNrZ3JvdW5kU3ByaXRlcyIsImJhY2tncm91bmRHcmlkIiwiY3JlYXRlQmFja2dyb3VuZEdyaWQiLCJsYXllciIsImJhY2tncm91bmRMYXllciIsInJlY29yZEVudGl0aWVzIiwidG9CZUFkZGVkRW50aXRpZXMiLCJjaGVja0VudGl0aWVzUG9pbnRzIiwicG9zaXRpb25zIiwiaGFzaElkIiwiZ3JpZFBvcyIsImFkZGVkIiwiZW50aXRpZXNSZWNvcmQiLCJKU09OIiwicGFyc2UiLCJzZXR1cEVudGl0aWVzIiwic3ByaXRlTGF5ZXIiLCJzcHJpdGVTaGVldCIsInR5cGUiLCJ4U3RhcnQiLCJ4TGVuIiwieVN0YXJ0IiwieUxlbiIsInhFbmQiLCJ5RW5kIiwiZXhwYW5kUmFuZ2UiLCJyYW5nZXMiLCJ3YWxrVGlsZXMiLCJvZmZzZXRYIiwib2Zmc2V0WSIsImRlcml2ZWRYIiwiZGVyaXZlZFkiLCJwYXR0ZXJuIiwiTGV2ZWwiLCJlbnRpdHlDb2xsaWRlciIsInRvdGFsVGltZSIsImNoZWNrIiwiQ29tcG9zaXRvciIsIkVudGl0eUNvbGxpZGVyIiwic3ViamVjdCIsIm92ZXJsYXBzIiwiVGlsZUNvbGxpZGVyIiwidGlsZU1hdHJpeCIsInNlYXJjaEJ5UmFuZ2UiLCJraWxsIiwiY3JlYXRlQW5pbSIsInJlc29sdmVGcmFtZSIsImZyYW1lSW5kZXgiLCJjcmVhdGVTcHJpdGVMYXllciIsInNwcml0ZUJ1ZmZlciIsInNwcml0ZUNvbnRleHQiLCJkcmF3U3ByaXRlTGF5ZXIiLCJjbGVhclJlY3QiLCJjcmVhdGVCYWNrZ3JvdW5kTGF5ZXIiLCJyZXNvbHZlciIsInJlZHJhdyIsInN0YXJ0SW5kZXgiLCJlbmRJbmRleCIsImRyYXdBbmltIiwiZHJhd0JhY2tncm91bmRMYXllciIsImRyYXdXaWR0aCIsImRyYXdGcm9tIiwiZHJhd0VuZCIsImxvYWRGb250IiwiQ0hBUlMiLCJGb250IiwidGV4dCIsImNoYXIiLCJmb250U3ByaXRlIiwiaW1nIiwicm93TGVuIiwiY29sTnVtIiwiZW50cmllcyIsImxvYWRFbnRpdGllcyIsImVudGl0aWVzRmFjdG9yeSIsImFkZEFzIiwiZmFjdG9yeSIsImxvYWRNYXJpbyIsImNyZWF0ZU1hcmlvRmFjdG9yeSIsInNwcml0ZSIsInJ1bkFuaW0iLCJmcmFtZVJvdXRlIiwianVtcCIsImZhbGxpbmciLCJnbyIsImRpciIsImRyYXdNYXJpbyIsImhlYWRpbmciLCJjcmVhdGVNYXJpbyIsIkdvIiwiYWNjZWxlcmF0aW9uIiwiZGVjZWxlcmF0aW9uIiwiZHJhZ0ZhY3RvciIsImFic1giLCJhYnMiLCJkZWNlbCIsIm1pbiIsImRyYWciLCJKdW1wIiwiZHVyYXRpb24iLCJ2ZWxvY2l0eSIsImVuZ2FnZVRpbWUiLCJyZWFkeSIsImdyYWNlUGVyaW9kIiwicmVxdWVzdFRpbWUiLCJzcGVlZEJvb3N0IiwiY2FuY2VsIiwiU3RvbWVyIiwiYm91bmNlU3BlZWQiLCJib3VuY2UiLCJsb2FkR29vbWJhIiwiY3JlYXRlR29vbWJhRmFjdG9yeSIsIkJlaGF2aW9yIiwicGVuZHVsdW1Nb3ZlIiwid2Fsa0FuaW0iLCJyb3V0ZUFuaW0iLCJnb29tYmEiLCJkcmF3R29vbWJhIiwiY3JlYXRlR29vbWJhIiwibG9hZEtvb3BhIiwiY3JlYXRlS29vcGFGYWN0b3J5IiwiU1RBVEVfV0FMS0lORyIsIlNUQVRFX0hJRElORyIsIlNUQVRFX1BBTklDIiwic3RhdGUiLCJoaWRlVGltZSIsImhpZGVEdXJhdGlvbiIsInBhbmljU3BlZWQiLCJ3YWxrU3BlZWQiLCJoYW5kbGVTdGF0ZSIsImhhbmRsZUtpY2siLCJwYW5pYyIsInRyYXZlbERpciIsImltcGFjdERpciIsImhpZGluZyIsInNvbGlkIiwidW5IaWRlIiwid2FrZUFuaW0iLCJrb29wYSIsImJlaGF2aW9yIiwiZHJhd0tvb3BhIiwiY3JlYXRlS29vcGEiLCJjcmVhdGVEYXNoYm9hcmRMYXllciIsIkxJTkUxIiwiTElORTIiLCJjb2lucyIsImRyYXdEYXNoYm9hcmQiLCJwbGF5ZXJDb250cm9sbGVyIiwicHJpbnQiLCJ0b1N0cmluZyIsInBhZFN0YXJ0IiwidG9GaXhlZCIsImFkZFBhZFN0YXJ0UG9seWZpbGwiLCJTdHJpbmciLCJwcm90b3R5cGUiLCJ0YXJnZXRMZW5ndGgiLCJwYWRTdHJpbmciLCJyZXBlYXQiLCJzbGljZSIsInNldHVwVG91Y2hQYWQiLCJzZXR1cEtleWJvYXJkIiwianVtcEJ0biIsImxlZnRCdG4iLCJyaWdodEJ0biIsImJ1dHRvbnMiLCJzdGFydExpc3RlblRvIiwiYWRkTWFwcGluZyIsImtleVN0YXRlIiwiUFJFU1NFRCIsIlJFTEVBU0VEIiwiS2V5Ym9hcmRTdGF0ZSIsImtleVN0YXRlcyIsImtleU1hcCIsImNvZGUiLCJjYWxsQmFjayIsImV2ZW50IiwicHJldmVudERlZmF1bHQiLCJldmVudE5hbWUiLCJoYW5kbGVFdmVudCIsIlRvdWNoUGFkU3RhdGUiLCJjb2RlSWQiLCJjdXJyZW50VGFyZ2V0IiwiaWQiLCJidG4iLCJldnROYW1lIiwiZXZ0IiwiZ2V0VXNlckFnZW50IiwiZ2V0UGxhdGZvcm0iLCJ1YSIsInRlc3QiLCJwYXJzZUZsb2F0IiwiTVNTdHJlYW0iLCJuYXZpZ2F0b3IiLCJhcHBWZXJzaW9uIiwicGFyc2VJbnQiLCJpbmRleE9mIiwidXNlckFnZW50IiwiZXJyIiwiYXV0b1BsYXlPbmlPUyIsImJnbUF1ZGlvRWwiLCJmb3JjZVNhZmFyaUF1dG9QbGF5IiwicGxheSIsInJlbW92ZUV2ZW50TGlzdGVuZXIiLCJjb250cm9sRW50aXRpZXMiLCJsb29rRm9yRW50aXR5IiwibGV2ZWxFbnRpdGllcyIsInRhcmdldEVudGl0eSIsInJldCIsImFkZGVkRW50aXR5IiwiY2FsY3VsYXRlUG9zRnJvbUNhbWVyYSIsImVudGl0eVBvcyIsImNhbWVyYVBvcyIsInR3ZW50eUJsb2NrIiwiZGlzRnJvbUNhbWVyYSIsImFkZEVudGl0aWVzIiwiY3JlYXRlRW50aXR5IiwiaSIsInNwbGljZSIsImNoZWNrRW50aXRpZXMiLCJlbnRpdHlOZWFyQ2FtZXJhIiwiZW50aXR5Tm90QWRkZWRZZXQiLCJkZWxldGVVc2VsZXNzRW50aXRpZXMiLCJjb25zb2xlIiwibG9nIiwiaW50Q2FtZXJhUG9zWCIsImNoZWNrRW50aXRpZXNQb2ludEluZGV4IiwibmVhckNoZWNrRW50aXRpZXNQb2ludCJdLCJtYXBwaW5ncyI6IjtBQUFBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOzs7QUFHQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxhQUFLO0FBQ0w7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxtQ0FBMkIsMEJBQTBCLEVBQUU7QUFDdkQseUNBQWlDLGVBQWU7QUFDaEQ7QUFDQTtBQUNBOztBQUVBO0FBQ0EsOERBQXNELCtEQUErRDs7QUFFckg7QUFDQTs7QUFFQTtBQUNBOzs7Ozs7OztBQzdEQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEU7Ozs7Ozs7QUNSQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQSxzQ0FBc0MsdUNBQXVDLGdCQUFnQjs7QUFFN0Y7QUFDQTtBQUNBLG1CQUFtQixrQkFBa0I7QUFDckM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBQUMsRzs7Ozs7O0FDMUJELDZCQUE2QjtBQUM3Qix1Q0FBdUM7Ozs7Ozs7QUNEdkM7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGlFQUFpRTtBQUNqRTtBQUNBLGtGQUFrRjtBQUNsRjtBQUNBO0FBQ0E7QUFDQTtB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QTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBLG1CQUFtQixpQkFBaUI7QUFDcEM7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBLE9BQU87QUFDUDtBQUNBLE9BQU87QUFDUDtBQUNBLE9BQU87QUFDUDtBQUNBLE9BQU87QUFDUDtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQSxPQUFPO0FBQ1A7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsdURBQXVEO0FBQ3ZELFNBQVM7QUFDVDtBQUNBLFNBQVM7QUFDVCw4RUFBOEU7QUFDOUU7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0EsU0FBUztBQUNUO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0EsT0FBTztBQUNQO0FBQ0EsT0FBTztBQUNQO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7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O0FBQ0E7QUFDQTtBQUNBLENBQUM7QUFDRDtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBOzs7Ozs7O0FDbENBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxnQkFBZ0I7QUFDaEI7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsY0FBYztBQUNkLEtBQUs7QUFDTCxjQUFjO0FBQ2Q7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSx5REFBeUQ7QUFDekQ7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFlBQVk7QUFDWjs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsV0FBVztBQUNYO0FBQ0EsV0FBVztBQUNYOztBQUVBO0FBQ0E7QUFDQSx3Q0FBd0MsV0FBVztBQUNuRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSwyQkFBMkI7QUFDM0I7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQSxTQUFTO0FBQ1Q7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLG9DQUFvQyxjQUFjO0FBQ2xEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxpQ0FBaUMsa0JBQWtCO0FBQ25EO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxpQkFBaUI7O0FBRWpCO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHdCQUF3QixpQkFBaUI7QUFDekM7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxZQUFZO0FBQ1o7QUFDQTs7QUFFQTtBQUNBLFlBQVk7QUFDWjs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7O0FBRUw7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0EsS0FBSzs7QUFFTDtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBLDhDQUE4QyxRQUFRO0FBQ3REO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxhQUFhO0FBQ2I7QUFDQTs7QUFFQSxXQUFXO0FBQ1g7QUFDQTtBQUNBOztBQUVBLFdBQVc7QUFDWDtBQUNBO0FBQ0E7O0FBRUEsV0FBVztBQUNYO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSzs7QUFFTDtBQUNBLDhDQUE4QyxRQUFRO0FBQ3REO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0EsS0FBSzs7QUFFTDtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7O0FBRUE7QUFDQSxLQUFLOztBQUVMO0FBQ0EsOENBQThDLFFBQVE7QUFDdEQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLOztBQUVMO0FBQ0EsOENBQThDLFFBQVE7QUFDdEQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsS0FBSzs7QUFFTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxDQUFDO0FBQ0Q7QUFDQTtBQUNBO0FBQ0EsZUFBZSxjQUFjO0FBQzdCOzs7Ozs7O0FDdHRCQTtBQUNBO0FBQ0E7QUFD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TixDQUF3QnZNLElBQXhCLENBQTZCO0FBQ3pCME0sd0JBQVFuSSxPQUFPbUk7QUFEVSxhQUE3QjtBQUdBcU4sb0JBQVFDLEdBQVIsQ0FBWSw4Q0FBWixFQUE0RDVZLE1BQU1vRCxRQUFOLENBQWVqRSxJQUEzRTtBQUNIO0FBQ0osS0FoQkQ7QUFpQkg7O0FBRU0sU0FBU3FZLGVBQVQsQ0FBeUJ2USxNQUF6QixFQUFpQ2pILEtBQWpDLEVBQXdDOEcsYUFBeEMsRUFBdUQ7QUFDMUQsUUFBSStSLGdCQUFnQnRVLEtBQUtDLEtBQUwsQ0FBV3lDLE9BQU9oSSxHQUFQLENBQVdxRCxDQUF0QixDQUFwQjs7QUFFQSxRQUFNd1csMEJBQTBCOVksTUFBTW9MLG1CQUFOLENBQTBCNEwsT0FBMUIsQ0FBa0M2QixhQUFsQyxDQUFoQztBQUNBLFFBQU1FLHlCQUF5QkQsNEJBQTRCLENBQUMsQ0FBNUQ7QUFDQSxRQUFJQyxzQkFBSixFQUE0QjtBQUN4Qi9ZLGNBQU1vTCxtQkFBTixDQUEwQmtOLE1BQTFCLENBQWlDUSx1QkFBakMsRUFBMEQsQ0FBMUQ7QUFDQTtBQUNBO0FBQ0FILGdCQUFRQyxHQUFSLENBQVksZUFBWjtBQUNBTCxzQkFBY3ZZLEtBQWQsRUFBcUI4RyxhQUFyQixFQUFvQ0csTUFBcEM7QUFDQXlSLDhCQUFzQjFZLEtBQXRCLEVBQTZCaUgsTUFBN0I7QUFDSDtBQUNKLEMiLCJmaWxlIjoiYnVuZGxlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSB7fTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pIHtcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcbiBcdFx0fVxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0aTogbW9kdWxlSWQsXG4gXHRcdFx0bDogZmFsc2UsXG4gXHRcdFx0ZXhwb3J0czoge31cbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gZGVmaW5lIGdldHRlciBmdW5jdGlvbiBmb3IgaGFybW9ueSBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSBmdW5jdGlvbihleHBvcnRzLCBuYW1lLCBnZXR0ZXIpIHtcbiBcdFx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBuYW1lKSkge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBuYW1lLCB7XG4gXHRcdFx0XHRjb25maWd1cmFibGU6IGZhbHNlLFxuIFx0XHRcdFx0ZW51bWVyYWJsZTogdHJ1ZSxcbiBcdFx0XHRcdGdldDogZ2V0dGVyXG4gXHRcdFx0fSk7XG4gXHRcdH1cbiBcdH07XG5cbiBcdC8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSBmdW5jdGlvbihtb2R1bGUpIHtcbiBcdFx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0RGVmYXVsdCgpIHsgcmV0dXJuIG1vZHVsZVsnZGVmYXVsdCddOyB9IDpcbiBcdFx0XHRmdW5jdGlvbiBnZXRNb2R1bGVFeHBvcnRzKCkgeyByZXR1cm4gbW9kdWxlOyB9O1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCAnYScsIGdldHRlcik7XG4gXHRcdHJldHVybiBnZXR0ZXI7XG4gXHR9O1xuXG4gXHQvLyBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGxcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubyA9IGZ1bmN0aW9uKG9iamVjdCwgcHJvcGVydHkpIHsgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIHByb3BlcnR5KTsgfTtcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiL1wiO1xuXG4gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbiBcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKF9fd2VicGFja19yZXF1aXJlX18ucyA9IDkyKTtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyB3ZWJwYWNrL2Jvb3RzdHJhcCA3MjAzM2Y2ZWRmMTM5ZTA5NWU5MCIsIlwidXNlIHN0cmljdFwiO1xuXG5leHBvcnRzLl9fZXNNb2R1bGUgPSB0cnVlO1xuXG5leHBvcnRzLmRlZmF1bHQgPSBmdW5jdGlvbiAoaW5zdGFuY2UsIENvbnN0cnVjdG9yKSB7XG4gIGlmICghKGluc3RhbmNlIGluc3RhbmNlb2YgQ29uc3RydWN0b3IpKSB7XG4gICAgdGhyb3cgbmV3IFR5cGVFcnJvcihcIkNhbm5vdCBjYWxsIGEgY2xhc3MgYXMgYSBmdW5jdGlvblwiKTtcbiAgfVxufTtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL25vZGVfbW9kdWxlcy9fYmFiZWwtcnVudGltZUA2LjI2LjBAYmFiZWwtcnVudGltZS9oZWxwZXJzL2NsYXNzQ2FsbENoZWNrLmpzXG4vLyBtb2R1bGUgaWQgPSAwXG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIlwidXNlIHN0cmljdFwiO1xuXG5leHBvcnRzLl9fZXNNb2R1bGUgPSB0cnVlO1xuXG52YXIgX2RlZmluZVByb3BlcnR5ID0gcmVxdWlyZShcIi4uL2NvcmUtanMvb2JqZWN0L2RlZmluZS1wcm9wZXJ0eVwiKTtcblxudmFyIF9kZWZpbmVQcm9wZXJ0eTIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9kZWZpbmVQcm9wZXJ0eSk7XG5cbmZ1bmN0aW9uIF9pbnRlcm9wUmVxdWlyZURlZmF1bHQob2JqKSB7IHJldHVybiBvYmogJiYgb2JqLl9fZXNNb2R1bGUgPyBvYmogOiB7IGRlZmF1bHQ6IG9iaiB9OyB9XG5cbmV4cG9ydHMuZGVmYXVsdCA9IGZ1bmN0aW9uICgpIHtcbiAgZnVuY3Rpb24gZGVmaW5lUHJvcGVydGllcyh0YXJnZXQsIHByb3BzKSB7XG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBwcm9wcy5sZW5ndGg7IGkrKykge1xuICAgICAgdmFyIGRlc2NyaXB0b3IgPSBwcm9wc1tpXTtcbiAgICAgIGRlc2NyaXB0b3IuZW51bWVyYWJsZSA9IGRlc2NyaXB0b3IuZW51bWVyYWJsZSB8fCBmYWxzZTtcbiAgICAgIGRlc2NyaXB0b3IuY29uZmlndXJhYmxlID0gdHJ1ZTtcbiAgICAgIGlmIChcInZhbHVlXCIgaW4gZGVzY3JpcHRvcikgZGVzY3JpcHRvci53cml0YWJsZSA9IHRydWU7XG4gICAgICAoMCwgX2RlZmluZVByb3BlcnR5Mi5kZWZhdWx0KSh0YXJnZXQsIGRlc2NyaXB0b3Iua2V5LCBkZXNjcmlwdG9yKTtcbiAgICB9XG4gIH1cblxuICByZXR1cm4gZnVuY3Rpb24gKENvbnN0cnVjdG9yLCBwcm90b1Byb3BzLCBzdGF0aWNQcm9wcykge1xuICAgIGlmIChwcm90b1Byb3BzKSBkZWZpbmVQcm9wZXJ0aWVzKENvbnN0cnVjdG9yLnByb3RvdHlwZSwgcHJvdG9Qcm9wcyk7XG4gICAgaWYgKHN0YXRpY1Byb3BzKSBkZWZpbmVQcm9wZXJ0aWVzKENvbnN0cnVjdG9yLCBzdGF0aWNQcm9wcyk7XG4gICAgcmV0dXJuIENvbnN0cnVjdG9yO1xuICB9O1xufSgpO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vbm9kZV9tb2R1bGVzL19iYWJlbC1ydW50aW1lQDYuMjYuMEBiYWJlbC1ydW50aW1lL2hlbHBlcnMvY3JlYXRlQ2xhc3MuanNcbi8vIG1vZHVsZSBpZCA9IDFcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwidmFyIGNvcmUgPSBtb2R1bGUuZXhwb3J0cyA9IHsgdmVyc2lvbjogJzIuNS4zJyB9O1xuaWYgKHR5cGVvZiBfX2UgPT0gJ251bWJlcicpIF9fZSA9IGNvcmU7IC8vIGVzbGludC1kaXNhYmxlLWxpbmUgbm8tdW5kZWZcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vbm9kZV9tb2R1bGVzL19jb3JlLWpzQDIuNS4zQGNvcmUtanMvbGlicmFyeS9tb2R1bGVzL19jb3JlLmpzXG4vLyBtb2R1bGUgaWQgPSAyXG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsInZhciBnbG9iYWwgPSByZXF1aXJlKCcuL19nbG9iYWwnKTtcbnZhciBjb3JlID0gcmVxdWlyZSgnLi9fY29yZScpO1xudmFyIGN0eCA9IHJlcXVpcmUoJy4vX2N0eCcpO1xudmFyIGhpZGUgPSByZXF1aXJlKCcuL19oaWRlJyk7XG52YXIgUFJPVE9UWVBFID0gJ3Byb3RvdHlwZSc7XG5cbnZhciAkZXhwb3J0ID0gZnVuY3Rpb24gKHR5cGUsIG5hbWUsIHNvdXJjZSkge1xuICB2YXIgSVNfRk9SQ0VEID0gdHlwZSAmICRleHBvcnQuRjtcbiAgdmFyIElTX0dMT0JBTCA9IHR5cGUgJiAkZXhwb3J0Lkc7XG4gIHZhciBJU19TVEFUSUMgPSB0eXBlICYgJGV4cG9ydC5TO1xuICB2YXIgSVNfUFJPVE8gPSB0eXBlICYgJGV4cG9ydC5QO1xuICB2YXIgSVNfQklORCA9IHR5cGUgJiAkZXhwb3J0LkI7XG4gIHZhciBJU19XUkFQID0gdHlwZSAmICRleHBvcnQuVztcbiAgdmFyIGV4cG9ydHMgPSBJU19HTE9CQUwgPyBjb3JlIDogY29yZVtuYW1lXSB8fCAoY29yZVtuYW1lXSA9IHt9KTtcbiAgdmFyIGV4cFByb3RvID0gZXhwb3J0c1tQUk9UT1RZUEVdO1xuICB2YXIgdGFyZ2V0ID0gSVNfR0xPQkFMID8gZ2xvYmFsIDogSVNfU1RBVElDID8gZ2xvYmFsW25hbWVdIDogKGdsb2JhbFtuYW1lXSB8fCB7fSlbUFJPVE9UWVBFXTtcbiAgdmFyIGtleSwgb3duLCBvdXQ7XG4gIGlmIChJU19HTE9CQUwpIHNvdXJjZSA9IG5hbWU7XG4gIGZvciAoa2V5IGluIHNvdXJjZSkge1xuICAgIC8vIGNvbnRhaW5zIGluIG5hdGl2ZVxuICAgIG93biA9ICFJU19GT1JDRUQgJiYgdGFyZ2V0ICYmIHRhcmdldFtrZXldICE9PSB1bmRlZmluZWQ7XG4gICAgaWYgKG93biAmJiBrZXkgaW4gZXhwb3J0cykgY29udGludWU7XG4gICAgLy8gZXhwb3J0IG5hdGl2ZSBvciBwYXNzZWRcbiAgICBvdXQgPSBvd24gPyB0YXJnZXRba2V5XSA6IHNvdXJjZVtrZXldO1xuICAgIC8vIHByZXZlbnQgZ2xvYmFsIHBvbGx1dGlvbiBmb3IgbmFtZXNwYWNlc1xuICAgIGV4cG9ydHNba2V5XSA9IElTX0dMT0JBTCAmJiB0eXBlb2YgdGFyZ2V0W2tleV0gIT0gJ2Z1bmN0aW9uJyA/IHNvdXJjZVtrZXldXG4gICAgLy8gYmluZCB0aW1lcnMgdG8gZ2xvYmFsIGZvciBjYWxsIGZyb20gZXhwb3J0IGNvbnRleHRcbiAgICA6IElTX0JJTkQgJiYgb3duID8gY3R4KG91dCwgZ2xvYmFsKVxuICAgIC8vIHdyYXAgZ2xvYmFsIGNvbnN0cnVjdG9ycyBmb3IgcHJldmVudCBjaGFuZ2UgdGhlbSBpbiBsaWJyYXJ5XG4gICAgOiBJU19XUkFQICYmIHRhcmdldFtrZXldID09IG91dCA/IChmdW5jdGlvbiAoQykge1xuICAgICAgdmFyIEYgPSBmdW5jdGlvbiAoYSwgYiwgYykge1xuICAgICAgICBpZiAodGhpcyBpbnN0YW5jZW9mIEMpIHtcbiAgICAgICAgICBzd2l0Y2ggKGFyZ3VtZW50cy5sZW5ndGgpIHtcbiAgICAgICAgICAgIGNhc2UgMDogcmV0dXJuIG5ldyBDKCk7XG4gICAgICAgICAgICBjYXNlIDE6IHJldHVybiBuZXcgQyhhKTtcbiAgICAgICAgICAgIGNhc2UgMjogcmV0dXJuIG5ldyBDKGEsIGIpO1xuICAgICAgICAgIH0gcmV0dXJuIG5ldyBDKGEsIGIsIGMpO1xuICAgICAgICB9IHJldHVybiBDLmFwcGx5KHRoaXMsIGFyZ3VtZW50cyk7XG4gICAgICB9O1xuICAgICAgRltQUk9UT1RZUEVdID0gQ1tQUk9UT1RZUEVdO1xuICAgICAgcmV0dXJuIEY7XG4gICAgLy8gbWFrZSBzdGF0aWMgdmVyc2lvbnMgZm9yIHByb3RvdHlwZSBtZXRob2RzXG4gICAgfSkob3V0KSA6IElTX1BST1RPICYmIHR5cGVvZiBvdXQgPT0gJ2Z1bmN0aW9uJyA/IGN0eChGdW5jdGlvbi5jYWxsLCBvdXQpIDogb3V0O1xuICAgIC8vIGV4cG9ydCBwcm90byBtZXRob2RzIHRvIGNvcmUuJUNPTlNUUlVDVE9SJS5tZXRob2RzLiVOQU1FJVxuICAgIGlmIChJU19QUk9UTykge1xuICAgICAgKGV4cG9ydHMudmlydHVhbCB8fCAoZXhwb3J0cy52aXJ0dWFsID0ge30pKVtrZXldID0gb3V0O1xuICAgICAgLy8gZXhwb3J0IHByb3RvIG1ldGhvZHMgdG8gY29yZS4lQ09OU1RSVUNUT1IlLnByb3RvdHlwZS4lTkFNRSVcbiAgICAgIGlmICh0eXBlICYgJGV4cG9ydC5SICYmIGV4cFByb3RvICYmICFleHBQcm90b1trZXldKSBoaWRlKGV4cFByb3RvLCBrZXksIG91dCk7XG4gICAgfVxuICB9XG59O1xuLy8gdHlwZSBiaXRtYXBcbiRleHBvcnQuRiA9IDE7ICAgLy8gZm9yY2VkXG4kZXhwb3J0LkcgPSAyOyAgIC8vIGdsb2JhbFxuJGV4cG9ydC5TID0gNDsgICAvLyBzdGF0aWNcbiRleHBvcnQuUCA9IDg7ICAgLy8gcHJvdG9cbiRleHBvcnQuQiA9IDE2OyAgLy8gYmluZFxuJGV4cG9ydC5XID0gMzI7ICAvLyB3cmFwXG4kZXhwb3J0LlUgPSA2NDsgIC8vIHNhZmVcbiRleHBvcnQuUiA9IDEyODsgLy8gcmVhbCBwcm90byBtZXRob2QgZm9yIGBsaWJyYXJ5YFxubW9kdWxlLmV4cG9ydHMgPSAkZXhwb3J0O1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9ub2RlX21vZHVsZXMvX2NvcmUtanNAMi41LjNAY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX2V4cG9ydC5qc1xuLy8gbW9kdWxlIGlkID0gM1xuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJ2YXIgc3RvcmUgPSByZXF1aXJlKCcuL19zaGFyZWQnKSgnd2tzJyk7XG52YXIgdWlkID0gcmVxdWlyZSgnLi9fdWlkJyk7XG52YXIgU3ltYm9sID0gcmVxdWlyZSgnLi9fZ2xvYmFsJykuU3ltYm9sO1xudmFyIFVTRV9TWU1CT0wgPSB0eXBlb2YgU3ltYm9sID09ICdmdW5jdGlvbic7XG5cbnZhciAkZXhwb3J0cyA9IG1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKG5hbWUpIHtcbiAgcmV0dXJuIHN0b3JlW25hbWVdIHx8IChzdG9yZVtuYW1lXSA9XG4gICAgVVNFX1NZTUJPTCAmJiBTeW1ib2xbbmFtZV0gfHwgKFVTRV9TWU1CT0wgPyBTeW1ib2wgOiB1aWQpKCdTeW1ib2wuJyArIG5hbWUpKTtcbn07XG5cbiRleHBvcnRzLnN0b3JlID0gc3RvcmU7XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL25vZGVfbW9kdWxlcy9fY29yZS1qc0AyLjUuM0Bjb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9fd2tzLmpzXG4vLyBtb2R1bGUgaWQgPSA0XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIi8vIGh0dHBzOi8vZ2l0aHViLmNvbS96bG9pcm9jay9jb3JlLWpzL2lzc3Vlcy84NiNpc3N1ZWNvbW1lbnQtMTE1NzU5MDI4XG52YXIgZ2xvYmFsID0gbW9kdWxlLmV4cG9ydHMgPSB0eXBlb2Ygd2luZG93ICE9ICd1bmRlZmluZWQnICYmIHdpbmRvdy5NYXRoID09IE1hdGhcbiAgPyB3aW5kb3cgOiB0eXBlb2Ygc2VsZiAhPSAndW5kZWZpbmVkJyAmJiBzZWxmLk1hdGggPT0gTWF0aCA/IHNlbGZcbiAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLW5ldy1mdW5jXG4gIDogRnVuY3Rpb24oJ3JldHVybiB0aGlzJykoKTtcbmlmICh0eXBlb2YgX19nID09ICdudW1iZXInKSBfX2cgPSBnbG9iYWw7IC8vIGVzbGludC1kaXNhYmxlLWxpbmUgbm8tdW5kZWZcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vbm9kZV9tb2R1bGVzL19jb3JlLWpzQDIuNS4zQGNvcmUtanMvbGlicmFyeS9tb2R1bGVzL19nbG9iYWwuanNcbi8vIG1vZHVsZSBpZCA9IDVcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiaW1wb3J0IHtWZWMyfSBmcm9tICcuL21hdGguanMnXHJcbmltcG9ydCBCb3VuZGluZ0JveCBmcm9tICcuL0JvdW5kaW5nQm94LmpzJ1xyXG5cclxuZXhwb3J0IGNvbnN0IFNpZGVzID0ge1xyXG4gICAgTEVGVDogU3ltYm9sKCdsZWZ0JyksXHJcbiAgICBSSUdIVDogU3ltYm9sKCdyaWdodCcpLFxyXG4gICAgQk9UVE9NOiBTeW1ib2woJ2JvdHRvbScpLFxyXG4gICAgVE9QOiBTeW1ib2woJ3RvcCcpXHJcbn07XHJcblxyXG5leHBvcnQgY2xhc3MgVHJhaXQge1xyXG4gICAgY29uc3RydWN0b3IobmFtZSkge1xyXG4gICAgICAgIHRoaXMuTkFNRSA9IG5hbWU7XHJcblxyXG4gICAgICAgIHRoaXMudGFza3MgPSBbXTtcclxuICAgIH1cclxuXHJcbiAgICBmaW5hbGl6ZSgpIHtcclxuICAgICAgICB0aGlzLnRhc2tzLmZvckVhY2godGFzayA9PiB0YXNrKCkpO1xyXG4gICAgICAgIHRoaXMudGFza3MubGVuZ3RoID0gMDtcclxuICAgIH1cclxuXHJcbiAgICBxdWV1ZSh0YXNrKSB7XHJcbiAgICAgICAgdGhpcy50YXNrcy5wdXNoKHRhc2spO1xyXG4gICAgfVxyXG5cclxuICAgIGNvbGxpZGVzKHVzLCB0aGVtKSB7XHJcbiAgICAgICAgLy8gY29uc29sZS5sb2coJ0NvbGxpZGVzIHdpdGggJywgdGhlbSk7XHJcbiAgICB9XHJcblxyXG4gICAgb2JzdHJ1Y3QoKSB7XHJcblxyXG4gICAgfVxyXG5cclxuICAgIHVwZGF0ZSgpIHtcclxuICAgICAgICAvLyBjb25zb2xlLndhcm4oJ1VuaGFuZGxlZCB1cGRhdGUgY2FsbCBpbiBUcmFpdCcpXHJcbiAgICB9XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEVudGl0eSB7XHJcbiAgICBjb25zdHJ1Y3RvcigpIHtcclxuICAgICAgICB0aGlzLmNhbkNvbGxpZGVzID0gdHJ1ZTtcclxuXHJcbiAgICAgICAgdGhpcy5wb3MgPSBuZXcgVmVjMigwLDApO1xyXG4gICAgICAgIHRoaXMudmVsID0gbmV3IFZlYzIoMCwwKTtcclxuICAgICAgICB0aGlzLnNpemUgPSBuZXcgVmVjMigwLDApO1xyXG4gICAgICAgIHRoaXMub2Zmc2V0ID0gbmV3IFZlYzIoMCwwKTtcclxuICAgICAgICB0aGlzLmJvdW5kcyA9IG5ldyBCb3VuZGluZ0JveCh0aGlzLnBvcywgdGhpcy5zaXplLCB0aGlzLm9mZnNldCk7XHJcbiAgICAgICAgdGhpcy5saWZlVGltZSA9IDA7XHJcblxyXG4gICAgICAgIHRoaXMudHJhaXRzID0gW107XHJcbiAgICB9XHJcblxyXG4gICAgYWRkVHJhaXQodHJhaXQpIHtcclxuICAgICAgICB0aGlzLnRyYWl0cy5wdXNoKHRyYWl0KTtcclxuICAgICAgICB0aGlzW3RyYWl0Lk5BTUVdID0gdHJhaXQ7XHJcbiAgICB9XHJcblxyXG4gICAgZmluYWxpemUoKSB7XHJcbiAgICAgICAgdGhpcy50cmFpdHMuZm9yRWFjaCh0cmFpdCA9PiB7XHJcbiAgICAgICAgICAgIHRyYWl0LmZpbmFsaXplKCk7XHJcbiAgICAgICAgfSlcclxuICAgIH1cclxuXHJcbiAgICBjb2xsaWRlcyhjYW5kaWRhdGUpIHtcclxuICAgICAgICAvLyBjb25zb2xlLmxvZygnVG91Y2hlZCcsIGNhbmRpZGF0ZSk7XHJcbiAgICAgICAgdGhpcy50cmFpdHMuZm9yRWFjaCh0cmFpdCA9PiB7XHJcbiAgICAgICAgICAgIHRyYWl0LmNvbGxpZGVzKHRoaXMsIGNhbmRpZGF0ZSk7XHJcbiAgICAgICAgfSlcclxuICAgIH1cclxuXHJcbiAgICBvYnN0cnVjdChzaWRlLCBtYXRjaCkge1xyXG4gICAgICAgIHRoaXMudHJhaXRzLmZvckVhY2godHJhaXQgPT4ge1xyXG4gICAgICAgICAgICB0cmFpdC5vYnN0cnVjdCh0aGlzLCBzaWRlLCBtYXRjaCk7XHJcbiAgICAgICAgfSlcclxuICAgIH1cclxuXHJcbiAgICBkcmF3KCkge1xyXG5cclxuICAgIH1cclxuXHJcbiAgICB1cGRhdGUoZGVsdGFUaW1lLCBsZXZlbCkge1xyXG4gICAgICAgIHRoaXMudHJhaXRzLmZvckVhY2godHJhaXQgPT4ge1xyXG4gICAgICAgICAgICB0cmFpdC51cGRhdGUodGhpcywgZGVsdGFUaW1lLCBsZXZlbCk7XHJcbiAgICAgICAgfSk7XHJcblxyXG4gICAgICAgIHRoaXMubGlmZVRpbWUgKz1kZWx0YVRpbWU7XHJcbiAgICB9XHJcbn1cclxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vcHVibGljL2pzL0VudGl0eS5qcyIsInZhciBhbk9iamVjdCA9IHJlcXVpcmUoJy4vX2FuLW9iamVjdCcpO1xudmFyIElFOF9ET01fREVGSU5FID0gcmVxdWlyZSgnLi9faWU4LWRvbS1kZWZpbmUnKTtcbnZhciB0b1ByaW1pdGl2ZSA9IHJlcXVpcmUoJy4vX3RvLXByaW1pdGl2ZScpO1xudmFyIGRQID0gT2JqZWN0LmRlZmluZVByb3BlcnR5O1xuXG5leHBvcnRzLmYgPSByZXF1aXJlKCcuL19kZXNjcmlwdG9ycycpID8gT2JqZWN0LmRlZmluZVByb3BlcnR5IDogZnVuY3Rpb24gZGVmaW5lUHJvcGVydHkoTywgUCwgQXR0cmlidXRlcykge1xuICBhbk9iamVjdChPKTtcbiAgUCA9IHRvUHJpbWl0aXZlKFAsIHRydWUpO1xuICBhbk9iamVjdChBdHRyaWJ1dGVzKTtcbiAgaWYgKElFOF9ET01fREVGSU5FKSB0cnkge1xuICAgIHJldHVybiBkUChPLCBQLCBBdHRyaWJ1dGVzKTtcbiAgfSBjYXRjaCAoZSkgeyAvKiBlbXB0eSAqLyB9XG4gIGlmICgnZ2V0JyBpbiBBdHRyaWJ1dGVzIHx8ICdzZXQnIGluIEF0dHJpYnV0ZXMpIHRocm93IFR5cGVFcnJvcignQWNjZXNzb3JzIG5vdCBzdXBwb3J0ZWQhJyk7XG4gIGlmICgndmFsdWUnIGluIEF0dHJpYnV0ZXMpIE9bUF0gPSBBdHRyaWJ1dGVzLnZhbHVlO1xuICByZXR1cm4gTztcbn07XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL25vZGVfbW9kdWxlcy9fY29yZS1qc0AyLjUuM0Bjb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9fb2JqZWN0LWRwLmpzXG4vLyBtb2R1bGUgaWQgPSA3XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGl0KSB7XG4gIHJldHVybiB0eXBlb2YgaXQgPT09ICdvYmplY3QnID8gaXQgIT09IG51bGwgOiB0eXBlb2YgaXQgPT09ICdmdW5jdGlvbic7XG59O1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9ub2RlX21vZHVsZXMvX2NvcmUtanNAMi41LjNAY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX2lzLW9iamVjdC5qc1xuLy8gbW9kdWxlIGlkID0gOFxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJ2YXIgaXNPYmplY3QgPSByZXF1aXJlKCcuL19pcy1vYmplY3QnKTtcbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGl0KSB7XG4gIGlmICghaXNPYmplY3QoaXQpKSB0aHJvdyBUeXBlRXJyb3IoaXQgKyAnIGlzIG5vdCBhbiBvYmplY3QhJyk7XG4gIHJldHVybiBpdDtcbn07XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL25vZGVfbW9kdWxlcy9fY29yZS1qc0AyLjUuM0Bjb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9fYW4tb2JqZWN0LmpzXG4vLyBtb2R1bGUgaWQgPSA5XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIi8vIFRoYW5rJ3MgSUU4IGZvciBoaXMgZnVubnkgZGVmaW5lUHJvcGVydHlcbm1vZHVsZS5leHBvcnRzID0gIXJlcXVpcmUoJy4vX2ZhaWxzJykoZnVuY3Rpb24gKCkge1xuICByZXR1cm4gT2JqZWN0LmRlZmluZVByb3BlcnR5KHt9LCAnYScsIHsgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiA3OyB9IH0pLmEgIT0gNztcbn0pO1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9ub2RlX21vZHVsZXMvX2NvcmUtanNAMi41LjNAY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX2Rlc2NyaXB0b3JzLmpzXG4vLyBtb2R1bGUgaWQgPSAxMFxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJtb2R1bGUuZXhwb3J0cyA9IHsgXCJkZWZhdWx0XCI6IHJlcXVpcmUoXCJjb3JlLWpzL2xpYnJhcnkvZm4vb2JqZWN0L2dldC1wcm90b3R5cGUtb2ZcIiksIF9fZXNNb2R1bGU6IHRydWUgfTtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL25vZGVfbW9kdWxlcy9fYmFiZWwtcnVudGltZUA2LjI2LjBAYmFiZWwtcnVudGltZS9jb3JlLWpzL29iamVjdC9nZXQtcHJvdG90eXBlLW9mLmpzXG4vLyBtb2R1bGUgaWQgPSAxMVxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJcInVzZSBzdHJpY3RcIjtcblxuZXhwb3J0cy5fX2VzTW9kdWxlID0gdHJ1ZTtcblxudmFyIF90eXBlb2YyID0gcmVxdWlyZShcIi4uL2hlbHBlcnMvdHlwZW9mXCIpO1xuXG52YXIgX3R5cGVvZjMgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF90eXBlb2YyKTtcblxuZnVuY3Rpb24gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChvYmopIHsgcmV0dXJuIG9iaiAmJiBvYmouX19lc01vZHVsZSA/IG9iaiA6IHsgZGVmYXVsdDogb2JqIH07IH1cblxuZXhwb3J0cy5kZWZhdWx0ID0gZnVuY3Rpb24gKHNlbGYsIGNhbGwpIHtcbiAgaWYgKCFzZWxmKSB7XG4gICAgdGhyb3cgbmV3IFJlZmVyZW5jZUVycm9yKFwidGhpcyBoYXNuJ3QgYmVlbiBpbml0aWFsaXNlZCAtIHN1cGVyKCkgaGFzbid0IGJlZW4gY2FsbGVkXCIpO1xuICB9XG5cbiAgcmV0dXJuIGNhbGwgJiYgKCh0eXBlb2YgY2FsbCA9PT0gXCJ1bmRlZmluZWRcIiA/IFwidW5kZWZpbmVkXCIgOiAoMCwgX3R5cGVvZjMuZGVmYXVsdCkoY2FsbCkpID09PSBcIm9iamVjdFwiIHx8IHR5cGVvZiBjYWxsID09PSBcImZ1bmN0aW9uXCIpID8gY2FsbCA6IHNlbGY7XG59O1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vbm9kZV9tb2R1bGVzL19iYWJlbC1ydW50aW1lQDYuMjYuMEBiYWJlbC1ydW50aW1lL2hlbHBlcnMvcG9zc2libGVDb25zdHJ1Y3RvclJldHVybi5qc1xuLy8gbW9kdWxlIGlkID0gMTJcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbmV4cG9ydHMuX19lc01vZHVsZSA9IHRydWU7XG5cbnZhciBfc2V0UHJvdG90eXBlT2YgPSByZXF1aXJlKFwiLi4vY29yZS1qcy9vYmplY3Qvc2V0LXByb3RvdHlwZS1vZlwiKTtcblxudmFyIF9zZXRQcm90b3R5cGVPZjIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9zZXRQcm90b3R5cGVPZik7XG5cbnZhciBfY3JlYXRlID0gcmVxdWlyZShcIi4uL2NvcmUtanMvb2JqZWN0L2NyZWF0ZVwiKTtcblxudmFyIF9jcmVhdGUyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfY3JlYXRlKTtcblxudmFyIF90eXBlb2YyID0gcmVxdWlyZShcIi4uL2hlbHBlcnMvdHlwZW9mXCIpO1xuXG52YXIgX3R5cGVvZjMgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF90eXBlb2YyKTtcblxuZnVuY3Rpb24gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChvYmopIHsgcmV0dXJuIG9iaiAmJiBvYmouX19lc01vZHVsZSA/IG9iaiA6IHsgZGVmYXVsdDogb2JqIH07IH1cblxuZXhwb3J0cy5kZWZhdWx0ID0gZnVuY3Rpb24gKHN1YkNsYXNzLCBzdXBlckNsYXNzKSB7XG4gIGlmICh0eXBlb2Ygc3VwZXJDbGFzcyAhPT0gXCJmdW5jdGlvblwiICYmIHN1cGVyQ2xhc3MgIT09IG51bGwpIHtcbiAgICB0aHJvdyBuZXcgVHlwZUVycm9yKFwiU3VwZXIgZXhwcmVzc2lvbiBtdXN0IGVpdGhlciBiZSBudWxsIG9yIGEgZnVuY3Rpb24sIG5vdCBcIiArICh0eXBlb2Ygc3VwZXJDbGFzcyA9PT0gXCJ1bmRlZmluZWRcIiA/IFwidW5kZWZpbmVkXCIgOiAoMCwgX3R5cGVvZjMuZGVmYXVsdCkoc3VwZXJDbGFzcykpKTtcbiAgfVxuXG4gIHN1YkNsYXNzLnByb3RvdHlwZSA9ICgwLCBfY3JlYXRlMi5kZWZhdWx0KShzdXBlckNsYXNzICYmIHN1cGVyQ2xhc3MucHJvdG90eXBlLCB7XG4gICAgY29uc3RydWN0b3I6IHtcbiAgICAgIHZhbHVlOiBzdWJDbGFzcyxcbiAgICAgIGVudW1lcmFibGU6IGZhbHNlLFxuICAgICAgd3JpdGFibGU6IHRydWUsXG4gICAgICBjb25maWd1cmFibGU6IHRydWVcbiAgICB9XG4gIH0pO1xuICBpZiAoc3VwZXJDbGFzcykgX3NldFByb3RvdHlwZU9mMi5kZWZhdWx0ID8gKDAsIF9zZXRQcm90b3R5cGVPZjIuZGVmYXVsdCkoc3ViQ2xhc3MsIHN1cGVyQ2xhc3MpIDogc3ViQ2xhc3MuX19wcm90b19fID0gc3VwZXJDbGFzcztcbn07XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9ub2RlX21vZHVsZXMvX2JhYmVsLXJ1bnRpbWVANi4yNi4wQGJhYmVsLXJ1bnRpbWUvaGVscGVycy9pbmhlcml0cy5qc1xuLy8gbW9kdWxlIGlkID0gMTNcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiLy8gb3B0aW9uYWwgLyBzaW1wbGUgY29udGV4dCBiaW5kaW5nXG52YXIgYUZ1bmN0aW9uID0gcmVxdWlyZSgnLi9fYS1mdW5jdGlvbicpO1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoZm4sIHRoYXQsIGxlbmd0aCkge1xuICBhRnVuY3Rpb24oZm4pO1xuICBpZiAodGhhdCA9PT0gdW5kZWZpbmVkKSByZXR1cm4gZm47XG4gIHN3aXRjaCAobGVuZ3RoKSB7XG4gICAgY2FzZSAxOiByZXR1cm4gZnVuY3Rpb24gKGEpIHtcbiAgICAgIHJldHVybiBmbi5jYWxsKHRoYXQsIGEpO1xuICAgIH07XG4gICAgY2FzZSAyOiByZXR1cm4gZnVuY3Rpb24gKGEsIGIpIHtcbiAgICAgIHJldHVybiBmbi5jYWxsKHRoYXQsIGEsIGIpO1xuICAgIH07XG4gICAgY2FzZSAzOiByZXR1cm4gZnVuY3Rpb24gKGEsIGIsIGMpIHtcbiAgICAgIHJldHVybiBmbi5jYWxsKHRoYXQsIGEsIGIsIGMpO1xuICAgIH07XG4gIH1cbiAgcmV0dXJuIGZ1bmN0aW9uICgvKiAuLi5hcmdzICovKSB7XG4gICAgcmV0dXJuIGZuLmFwcGx5KHRoYXQsIGFyZ3VtZW50cyk7XG4gIH07XG59O1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9ub2RlX21vZHVsZXMvX2NvcmUtanNAMi41LjNAY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX2N0eC5qc1xuLy8gbW9kdWxlIGlkID0gMTRcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwidmFyIGRQID0gcmVxdWlyZSgnLi9fb2JqZWN0LWRwJyk7XG52YXIgY3JlYXRlRGVzYyA9IHJlcXVpcmUoJy4vX3Byb3BlcnR5LWRlc2MnKTtcbm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZSgnLi9fZGVzY3JpcHRvcnMnKSA/IGZ1bmN0aW9uIChvYmplY3QsIGtleSwgdmFsdWUpIHtcbiAgcmV0dXJuIGRQLmYob2JqZWN0LCBrZXksIGNyZWF0ZURlc2MoMSwgdmFsdWUpKTtcbn0gOiBmdW5jdGlvbiAob2JqZWN0LCBrZXksIHZhbHVlKSB7XG4gIG9iamVjdFtrZXldID0gdmFsdWU7XG4gIHJldHVybiBvYmplY3Q7XG59O1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9ub2RlX21vZHVsZXMvX2NvcmUtanNAMi41LjNAY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX2hpZGUuanNcbi8vIG1vZHVsZSBpZCA9IDE1XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIid1c2Ugc3RyaWN0JztcbnZhciAkYXQgPSByZXF1aXJlKCcuL19zdHJpbmctYXQnKSh0cnVlKTtcblxuLy8gMjEuMS4zLjI3IFN0cmluZy5wcm90b3R5cGVbQEBpdGVyYXRvcl0oKVxucmVxdWlyZSgnLi9faXRlci1kZWZpbmUnKShTdHJpbmcsICdTdHJpbmcnLCBmdW5jdGlvbiAoaXRlcmF0ZWQpIHtcbiAgdGhpcy5fdCA9IFN0cmluZyhpdGVyYXRlZCk7IC8vIHRhcmdldFxuICB0aGlzLl9pID0gMDsgICAgICAgICAgICAgICAgLy8gbmV4dCBpbmRleFxuLy8gMjEuMS41LjIuMSAlU3RyaW5nSXRlcmF0b3JQcm90b3R5cGUlLm5leHQoKVxufSwgZnVuY3Rpb24gKCkge1xuICB2YXIgTyA9IHRoaXMuX3Q7XG4gIHZhciBpbmRleCA9IHRoaXMuX2k7XG4gIHZhciBwb2ludDtcbiAgaWYgKGluZGV4ID49IE8ubGVuZ3RoKSByZXR1cm4geyB2YWx1ZTogdW5kZWZpbmVkLCBkb25lOiB0cnVlIH07XG4gIHBvaW50ID0gJGF0KE8sIGluZGV4KTtcbiAgdGhpcy5faSArPSBwb2ludC5sZW5ndGg7XG4gIHJldHVybiB7IHZhbHVlOiBwb2ludCwgZG9uZTogZmFsc2UgfTtcbn0pO1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9ub2RlX21vZHVsZXMvX2NvcmUtanNAMi41LjNAY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvZXM2LnN0cmluZy5pdGVyYXRvci5qc1xuLy8gbW9kdWxlIGlkID0gMTZcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwidmFyIGhhc093blByb3BlcnR5ID0ge30uaGFzT3duUHJvcGVydHk7XG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChpdCwga2V5KSB7XG4gIHJldHVybiBoYXNPd25Qcm9wZXJ0eS5jYWxsKGl0LCBrZXkpO1xufTtcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vbm9kZV9tb2R1bGVzL19jb3JlLWpzQDIuNS4zQGNvcmUtanMvbGlicmFyeS9tb2R1bGVzL19oYXMuanNcbi8vIG1vZHVsZSBpZCA9IDE3XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGV4ZWMpIHtcbiAgdHJ5IHtcbiAgICByZXR1cm4gISFleGVjKCk7XG4gIH0gY2F0Y2ggKGUpIHtcbiAgICByZXR1cm4gdHJ1ZTtcbiAgfVxufTtcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vbm9kZV9tb2R1bGVzL19jb3JlLWpzQDIuNS4zQGNvcmUtanMvbGlicmFyeS9tb2R1bGVzL19mYWlscy5qc1xuLy8gbW9kdWxlIGlkID0gMThcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwibW9kdWxlLmV4cG9ydHMgPSB7fTtcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vbm9kZV9tb2R1bGVzL19jb3JlLWpzQDIuNS4zQGNvcmUtanMvbGlicmFyeS9tb2R1bGVzL19pdGVyYXRvcnMuanNcbi8vIG1vZHVsZSBpZCA9IDE5XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIi8vIHRvIGluZGV4ZWQgb2JqZWN0LCB0b09iamVjdCB3aXRoIGZhbGxiYWNrIGZvciBub24tYXJyYXktbGlrZSBFUzMgc3RyaW5nc1xudmFyIElPYmplY3QgPSByZXF1aXJlKCcuL19pb2JqZWN0Jyk7XG52YXIgZGVmaW5lZCA9IHJlcXVpcmUoJy4vX2RlZmluZWQnKTtcbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGl0KSB7XG4gIHJldHVybiBJT2JqZWN0KGRlZmluZWQoaXQpKTtcbn07XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL25vZGVfbW9kdWxlcy9fY29yZS1qc0AyLjUuM0Bjb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9fdG8taW9iamVjdC5qc1xuLy8gbW9kdWxlIGlkID0gMjBcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwicmVxdWlyZSgnLi9lczYuYXJyYXkuaXRlcmF0b3InKTtcbnZhciBnbG9iYWwgPSByZXF1aXJlKCcuL19nbG9iYWwnKTtcbnZhciBoaWRlID0gcmVxdWlyZSgnLi9faGlkZScpO1xudmFyIEl0ZXJhdG9ycyA9IHJlcXVpcmUoJy4vX2l0ZXJhdG9ycycpO1xudmFyIFRPX1NUUklOR19UQUcgPSByZXF1aXJlKCcuL193a3MnKSgndG9TdHJpbmdUYWcnKTtcblxudmFyIERPTUl0ZXJhYmxlcyA9ICgnQ1NTUnVsZUxpc3QsQ1NTU3R5bGVEZWNsYXJhdGlvbixDU1NWYWx1ZUxpc3QsQ2xpZW50UmVjdExpc3QsRE9NUmVjdExpc3QsRE9NU3RyaW5nTGlzdCwnICtcbiAgJ0RPTVRva2VuTGlzdCxEYXRhVHJhbnNmZXJJdGVtTGlzdCxGaWxlTGlzdCxIVE1MQWxsQ29sbGVjdGlvbixIVE1MQ29sbGVjdGlvbixIVE1MRm9ybUVsZW1lbnQsSFRNTFNlbGVjdEVsZW1lbnQsJyArXG4gICdNZWRpYUxpc3QsTWltZVR5cGVBcnJheSxOYW1lZE5vZGVNYXAsTm9kZUxpc3QsUGFpbnRSZXF1ZXN0TGlzdCxQbHVnaW4sUGx1Z2luQXJyYXksU1ZHTGVuZ3RoTGlzdCxTVkdOdW1iZXJMaXN0LCcgK1xuICAnU1ZHUGF0aFNlZ0xpc3QsU1ZHUG9pbnRMaXN0LFNWR1N0cmluZ0xpc3QsU1ZHVHJhbnNmb3JtTGlzdCxTb3VyY2VCdWZmZXJMaXN0LFN0eWxlU2hlZXRMaXN0LFRleHRUcmFja0N1ZUxpc3QsJyArXG4gICdUZXh0VHJhY2tMaXN0LFRvdWNoTGlzdCcpLnNwbGl0KCcsJyk7XG5cbmZvciAodmFyIGkgPSAwOyBpIDwgRE9NSXRlcmFibGVzLmxlbmd0aDsgaSsrKSB7XG4gIHZhciBOQU1FID0gRE9NSXRlcmFibGVzW2ldO1xuICB2YXIgQ29sbGVjdGlvbiA9IGdsb2JhbFtOQU1FXTtcbiAgdmFyIHByb3RvID0gQ29sbGVjdGlvbiAmJiBDb2xsZWN0aW9uLnByb3RvdHlwZTtcbiAgaWYgKHByb3RvICYmICFwcm90b1tUT19TVFJJTkdfVEFHXSkgaGlkZShwcm90bywgVE9fU1RSSU5HX1RBRywgTkFNRSk7XG4gIEl0ZXJhdG9yc1tOQU1FXSA9IEl0ZXJhdG9ycy5BcnJheTtcbn1cblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vbm9kZV9tb2R1bGVzL19jb3JlLWpzQDIuNS4zQGNvcmUtanMvbGlicmFyeS9tb2R1bGVzL3dlYi5kb20uaXRlcmFibGUuanNcbi8vIG1vZHVsZSBpZCA9IDIxXG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIm1vZHVsZS5leHBvcnRzID0geyBcImRlZmF1bHRcIjogcmVxdWlyZShcImNvcmUtanMvbGlicmFyeS9mbi9wcm9taXNlXCIpLCBfX2VzTW9kdWxlOiB0cnVlIH07XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9ub2RlX21vZHVsZXMvX2JhYmVsLXJ1bnRpbWVANi4yNi4wQGJhYmVsLXJ1bnRpbWUvY29yZS1qcy9wcm9taXNlLmpzXG4vLyBtb2R1bGUgaWQgPSAyMlxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJtb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChpdCkge1xuICBpZiAodHlwZW9mIGl0ICE9ICdmdW5jdGlvbicpIHRocm93IFR5cGVFcnJvcihpdCArICcgaXMgbm90IGEgZnVuY3Rpb24hJyk7XG4gIHJldHVybiBpdDtcbn07XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL25vZGVfbW9kdWxlcy9fY29yZS1qc0AyLjUuM0Bjb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9fYS1mdW5jdGlvbi5qc1xuLy8gbW9kdWxlIGlkID0gMjNcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwibW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoYml0bWFwLCB2YWx1ZSkge1xuICByZXR1cm4ge1xuICAgIGVudW1lcmFibGU6ICEoYml0bWFwICYgMSksXG4gICAgY29uZmlndXJhYmxlOiAhKGJpdG1hcCAmIDIpLFxuICAgIHdyaXRhYmxlOiAhKGJpdG1hcCAmIDQpLFxuICAgIHZhbHVlOiB2YWx1ZVxuICB9O1xufTtcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vbm9kZV9tb2R1bGVzL19jb3JlLWpzQDIuNS4zQGNvcmUtanMvbGlicmFyeS9tb2R1bGVzL19wcm9wZXJ0eS1kZXNjLmpzXG4vLyBtb2R1bGUgaWQgPSAyNFxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJ2YXIgdG9TdHJpbmcgPSB7fS50b1N0cmluZztcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoaXQpIHtcbiAgcmV0dXJuIHRvU3RyaW5nLmNhbGwoaXQpLnNsaWNlKDgsIC0xKTtcbn07XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL25vZGVfbW9kdWxlcy9fY29yZS1qc0AyLjUuM0Bjb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9fY29mLmpzXG4vLyBtb2R1bGUgaWQgPSAyNVxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJ2YXIgZGVmID0gcmVxdWlyZSgnLi9fb2JqZWN0LWRwJykuZjtcbnZhciBoYXMgPSByZXF1aXJlKCcuL19oYXMnKTtcbnZhciBUQUcgPSByZXF1aXJlKCcuL193a3MnKSgndG9TdHJpbmdUYWcnKTtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoaXQsIHRhZywgc3RhdCkge1xuICBpZiAoaXQgJiYgIWhhcyhpdCA9IHN0YXQgPyBpdCA6IGl0LnByb3RvdHlwZSwgVEFHKSkgZGVmKGl0LCBUQUcsIHsgY29uZmlndXJhYmxlOiB0cnVlLCB2YWx1ZTogdGFnIH0pO1xufTtcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vbm9kZV9tb2R1bGVzL19jb3JlLWpzQDIuNS4zQGNvcmUtanMvbGlicmFyeS9tb2R1bGVzL19zZXQtdG8tc3RyaW5nLXRhZy5qc1xuLy8gbW9kdWxlIGlkID0gMjZcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwidmFyIGN0eCA9IHJlcXVpcmUoJy4vX2N0eCcpO1xudmFyIGNhbGwgPSByZXF1aXJlKCcuL19pdGVyLWNhbGwnKTtcbnZhciBpc0FycmF5SXRlciA9IHJlcXVpcmUoJy4vX2lzLWFycmF5LWl0ZXInKTtcbnZhciBhbk9iamVjdCA9IHJlcXVpcmUoJy4vX2FuLW9iamVjdCcpO1xudmFyIHRvTGVuZ3RoID0gcmVxdWlyZSgnLi9fdG8tbGVuZ3RoJyk7XG52YXIgZ2V0SXRlckZuID0gcmVxdWlyZSgnLi9jb3JlLmdldC1pdGVyYXRvci1tZXRob2QnKTtcbnZhciBCUkVBSyA9IHt9O1xudmFyIFJFVFVSTiA9IHt9O1xudmFyIGV4cG9ydHMgPSBtb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChpdGVyYWJsZSwgZW50cmllcywgZm4sIHRoYXQsIElURVJBVE9SKSB7XG4gIHZhciBpdGVyRm4gPSBJVEVSQVRPUiA/IGZ1bmN0aW9uICgpIHsgcmV0dXJuIGl0ZXJhYmxlOyB9IDogZ2V0SXRlckZuKGl0ZXJhYmxlKTtcbiAgdmFyIGYgPSBjdHgoZm4sIHRoYXQsIGVudHJpZXMgPyAyIDogMSk7XG4gIHZhciBpbmRleCA9IDA7XG4gIHZhciBsZW5ndGgsIHN0ZXAsIGl0ZXJhdG9yLCByZXN1bHQ7XG4gIGlmICh0eXBlb2YgaXRlckZuICE9ICdmdW5jdGlvbicpIHRocm93IFR5cGVFcnJvcihpdGVyYWJsZSArICcgaXMgbm90IGl0ZXJhYmxlIScpO1xuICAvLyBmYXN0IGNhc2UgZm9yIGFycmF5cyB3aXRoIGRlZmF1bHQgaXRlcmF0b3JcbiAgaWYgKGlzQXJyYXlJdGVyKGl0ZXJGbikpIGZvciAobGVuZ3RoID0gdG9MZW5ndGgoaXRlcmFibGUubGVuZ3RoKTsgbGVuZ3RoID4gaW5kZXg7IGluZGV4KyspIHtcbiAgICByZXN1bHQgPSBlbnRyaWVzID8gZihhbk9iamVjdChzdGVwID0gaXRlcmFibGVbaW5kZXhdKVswXSwgc3RlcFsxXSkgOiBmKGl0ZXJhYmxlW2luZGV4XSk7XG4gICAgaWYgKHJlc3VsdCA9PT0gQlJFQUsgfHwgcmVzdWx0ID09PSBSRVRVUk4pIHJldHVybiByZXN1bHQ7XG4gIH0gZWxzZSBmb3IgKGl0ZXJhdG9yID0gaXRlckZuLmNhbGwoaXRlcmFibGUpOyAhKHN0ZXAgPSBpdGVyYXRvci5uZXh0KCkpLmRvbmU7KSB7XG4gICAgcmVzdWx0ID0gY2FsbChpdGVyYXRvciwgZiwgc3RlcC52YWx1ZSwgZW50cmllcyk7XG4gICAgaWYgKHJlc3VsdCA9PT0gQlJFQUsgfHwgcmVzdWx0ID09PSBSRVRVUk4pIHJldHVybiByZXN1bHQ7XG4gIH1cbn07XG5leHBvcnRzLkJSRUFLID0gQlJFQUs7XG5leHBvcnRzLlJFVFVSTiA9IFJFVFVSTjtcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vbm9kZV9tb2R1bGVzL19jb3JlLWpzQDIuNS4zQGNvcmUtanMvbGlicmFyeS9tb2R1bGVzL19mb3Itb2YuanNcbi8vIG1vZHVsZSBpZCA9IDI3XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIlwidXNlIHN0cmljdFwiO1xuXG5leHBvcnRzLl9fZXNNb2R1bGUgPSB0cnVlO1xuXG52YXIgX2lzSXRlcmFibGUyID0gcmVxdWlyZShcIi4uL2NvcmUtanMvaXMtaXRlcmFibGVcIik7XG5cbnZhciBfaXNJdGVyYWJsZTMgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9pc0l0ZXJhYmxlMik7XG5cbnZhciBfZ2V0SXRlcmF0b3IyID0gcmVxdWlyZShcIi4uL2NvcmUtanMvZ2V0LWl0ZXJhdG9yXCIpO1xuXG52YXIgX2dldEl0ZXJhdG9yMyA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX2dldEl0ZXJhdG9yMik7XG5cbmZ1bmN0aW9uIF9pbnRlcm9wUmVxdWlyZURlZmF1bHQob2JqKSB7IHJldHVybiBvYmogJiYgb2JqLl9fZXNNb2R1bGUgPyBvYmogOiB7IGRlZmF1bHQ6IG9iaiB9OyB9XG5cbmV4cG9ydHMuZGVmYXVsdCA9IGZ1bmN0aW9uICgpIHtcbiAgZnVuY3Rpb24gc2xpY2VJdGVyYXRvcihhcnIsIGkpIHtcbiAgICB2YXIgX2FyciA9IFtdO1xuICAgIHZhciBfbiA9IHRydWU7XG4gICAgdmFyIF9kID0gZmFsc2U7XG4gICAgdmFyIF9lID0gdW5kZWZpbmVkO1xuXG4gICAgdHJ5IHtcbiAgICAgIGZvciAodmFyIF9pID0gKDAsIF9nZXRJdGVyYXRvcjMuZGVmYXVsdCkoYXJyKSwgX3M7ICEoX24gPSAoX3MgPSBfaS5uZXh0KCkpLmRvbmUpOyBfbiA9IHRydWUpIHtcbiAgICAgICAgX2Fyci5wdXNoKF9zLnZhbHVlKTtcblxuICAgICAgICBpZiAoaSAmJiBfYXJyLmxlbmd0aCA9PT0gaSkgYnJlYWs7XG4gICAgICB9XG4gICAgfSBjYXRjaCAoZXJyKSB7XG4gICAgICBfZCA9IHRydWU7XG4gICAgICBfZSA9IGVycjtcbiAgICB9IGZpbmFsbHkge1xuICAgICAgdHJ5IHtcbiAgICAgICAgaWYgKCFfbiAmJiBfaVtcInJldHVyblwiXSkgX2lbXCJyZXR1cm5cIl0oKTtcbiAgICAgIH0gZmluYWxseSB7XG4gICAgICAgIGlmIChfZCkgdGhyb3cgX2U7XG4gICAgICB9XG4gICAgfVxuXG4gICAgcmV0dXJuIF9hcnI7XG4gIH1cblxuICByZXR1cm4gZnVuY3Rpb24gKGFyciwgaSkge1xuICAgIGlmIChBcnJheS5pc0FycmF5KGFycikpIHtcbiAgICAgIHJldHVybiBhcnI7XG4gICAgfSBlbHNlIGlmICgoMCwgX2lzSXRlcmFibGUzLmRlZmF1bHQpKE9iamVjdChhcnIpKSkge1xuICAgICAgcmV0dXJuIHNsaWNlSXRlcmF0b3IoYXJyLCBpKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdGhyb3cgbmV3IFR5cGVFcnJvcihcIkludmFsaWQgYXR0ZW1wdCB0byBkZXN0cnVjdHVyZSBub24taXRlcmFibGUgaW5zdGFuY2VcIik7XG4gICAgfVxuICB9O1xufSgpO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vbm9kZV9tb2R1bGVzL19iYWJlbC1ydW50aW1lQDYuMjYuMEBiYWJlbC1ydW50aW1lL2hlbHBlcnMvc2xpY2VkVG9BcnJheS5qc1xuLy8gbW9kdWxlIGlkID0gMjhcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiaW1wb3J0IFNwcml0ZVNoZWV0IGZyb20gJy4vU3ByaXRlU2hlZXQuanMnXHJcbmltcG9ydCB7Y3JlYXRlQW5pbX0gZnJvbSAnLi9hbmltLmpzJ1xyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIGxvYWRJbWFnZSh1cmwpIHtcclxuICAgIHJldHVybiBuZXcgUHJvbWlzZShyZXNvbHZlID0+IHtcclxuICAgICAgICBjb25zdCBpbWFnZSA9IG5ldyBJbWFnZSgpO1xyXG4gICAgICAgIGltYWdlLmFkZEV2ZW50TGlzdGVuZXIoJ2xvYWQnLCAoKSA9PiB7XHJcbiAgICAgICAgICAgIHJlc29sdmUoaW1hZ2UpXHJcbiAgICAgICAgfSk7XHJcblxyXG4gICAgICAgIGltYWdlLnNyYyA9IHVybFxyXG4gICAgfSlcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIGxvYWRKU09OKHVybCkge1xyXG4gICAgcmV0dXJuIGZldGNoKHVybClcclxuICAgICAgICAudGhlbihyID0+IHIuanNvbigpKTtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIGxvYWRTcHJpdGVTaGVldChuYW1lKSB7XHJcbiAgICByZXR1cm4gbG9hZEpTT04oYC9hc3NldHMvc3ByaXRlcy8ke25hbWV9Lmpzb25gKVxyXG4gICAgICAgIC50aGVuKHNoZWV0U3BlYyA9PiBQcm9taXNlLmFsbChbXHJcbiAgICAgICAgICAgICAgICBzaGVldFNwZWMsXHJcbiAgICAgICAgICAgICAgICBsb2FkSW1hZ2Uoc2hlZXRTcGVjLmltYWdlVVJMKVxyXG4gICAgICAgICAgICBdKSlcclxuICAgICAgICAgICAgLnRoZW4oKFtzaGVldFNwZWMsIGltYWdlXSkgPT4ge1xyXG4gICAgICAgICAgICAgICAgY29uc3Qgc3ByaXRlcyA9IG5ldyBTcHJpdGVTaGVldChcclxuICAgICAgICAgICAgICAgICAgICBpbWFnZSxcclxuICAgICAgICAgICAgICAgICAgICBzaGVldFNwZWMudGlsZVcsXHJcbiAgICAgICAgICAgICAgICAgICAgc2hlZXRTcGVjLnRpbGVIKTtcclxuXHJcbiAgICAgICAgICAgICAgICBpZiAoc2hlZXRTcGVjLnRpbGVzKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgc2hlZXRTcGVjLnRpbGVzLmZvckVhY2godGlsZVNwZWMgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBzcHJpdGVzLmRlZmluZVRpbGUoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aWxlU3BlYy5uYW1lLCAuLi50aWxlU3BlYy5pbmRleCk7XHJcbiAgICAgICAgICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICBpZiAoc2hlZXRTcGVjLmZyYW1lcykge1xyXG4gICAgICAgICAgICAgICAgICAgIHNoZWV0U3BlYy5mcmFtZXMuZm9yRWFjaChmcmFtZVNwZWMgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBzcHJpdGVzLmRlZmluZShmcmFtZVNwZWMubmFtZSwgLi4uZnJhbWVTcGVjLnJlY3QpO1xyXG4gICAgICAgICAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgaWYgKHNoZWV0U3BlYy5hbmltYXRpb25zKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgc2hlZXRTcGVjLmFuaW1hdGlvbnMuZm9yRWFjaChhbmltU3BlYyA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IGFuaW1hdGlvbiA9IGNyZWF0ZUFuaW0oYW5pbVNwZWMuZnJhbWVzLCBhbmltU3BlYy5mcmFtZUxlbik7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICBzcHJpdGVzLmRlZmluZUFuaW0oYW5pbVNwZWMubmFtZSwgYW5pbWF0aW9uKTtcclxuICAgICAgICAgICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgIHJldHVybiBzcHJpdGVzO1xyXG4gICAgICAgIH0pO1xyXG59XHJcblxyXG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9wdWJsaWMvanMvbG9hZGVyLmpzIiwibW9kdWxlLmV4cG9ydHMgPSB0cnVlO1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9ub2RlX21vZHVsZXMvX2NvcmUtanNAMi41LjNAY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX2xpYnJhcnkuanNcbi8vIG1vZHVsZSBpZCA9IDMxXG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIi8vIDE5LjEuMi4yIC8gMTUuMi4zLjUgT2JqZWN0LmNyZWF0ZShPIFssIFByb3BlcnRpZXNdKVxudmFyIGFuT2JqZWN0ID0gcmVxdWlyZSgnLi9fYW4tb2JqZWN0Jyk7XG52YXIgZFBzID0gcmVxdWlyZSgnLi9fb2JqZWN0LWRwcycpO1xudmFyIGVudW1CdWdLZXlzID0gcmVxdWlyZSgnLi9fZW51bS1idWcta2V5cycpO1xudmFyIElFX1BST1RPID0gcmVxdWlyZSgnLi9fc2hhcmVkLWtleScpKCdJRV9QUk9UTycpO1xudmFyIEVtcHR5ID0gZnVuY3Rpb24gKCkgeyAvKiBlbXB0eSAqLyB9O1xudmFyIFBST1RPVFlQRSA9ICdwcm90b3R5cGUnO1xuXG4vLyBDcmVhdGUgb2JqZWN0IHdpdGggZmFrZSBgbnVsbGAgcHJvdG90eXBlOiB1c2UgaWZyYW1lIE9iamVjdCB3aXRoIGNsZWFyZWQgcHJvdG90eXBlXG52YXIgY3JlYXRlRGljdCA9IGZ1bmN0aW9uICgpIHtcbiAgLy8gVGhyYXNoLCB3YXN0ZSBhbmQgc29kb215OiBJRSBHQyBidWdcbiAgdmFyIGlmcmFtZSA9IHJlcXVpcmUoJy4vX2RvbS1jcmVhdGUnKSgnaWZyYW1lJyk7XG4gIHZhciBpID0gZW51bUJ1Z0tleXMubGVuZ3RoO1xuICB2YXIgbHQgPSAnPCc7XG4gIHZhciBndCA9ICc+JztcbiAgdmFyIGlmcmFtZURvY3VtZW50O1xuICBpZnJhbWUuc3R5bGUuZGlzcGxheSA9ICdub25lJztcbiAgcmVxdWlyZSgnLi9faHRtbCcpLmFwcGVuZENoaWxkKGlmcmFtZSk7XG4gIGlmcmFtZS5zcmMgPSAnamF2YXNjcmlwdDonOyAvLyBlc2xpbnQtZGlzYWJsZS1saW5lIG5vLXNjcmlwdC11cmxcbiAgLy8gY3JlYXRlRGljdCA9IGlmcmFtZS5jb250ZW50V2luZG93Lk9iamVjdDtcbiAgLy8gaHRtbC5yZW1vdmVDaGlsZChpZnJhbWUpO1xuICBpZnJhbWVEb2N1bWVudCA9IGlmcmFtZS5jb250ZW50V2luZG93LmRvY3VtZW50O1xuICBpZnJhbWVEb2N1bWVudC5vcGVuKCk7XG4gIGlmcmFtZURvY3VtZW50LndyaXRlKGx0ICsgJ3NjcmlwdCcgKyBndCArICdkb2N1bWVudC5GPU9iamVjdCcgKyBsdCArICcvc2NyaXB0JyArIGd0KTtcbiAgaWZyYW1lRG9jdW1lbnQuY2xvc2UoKTtcbiAgY3JlYXRlRGljdCA9IGlmcmFtZURvY3VtZW50LkY7XG4gIHdoaWxlIChpLS0pIGRlbGV0ZSBjcmVhdGVEaWN0W1BST1RPVFlQRV1bZW51bUJ1Z0tleXNbaV1dO1xuICByZXR1cm4gY3JlYXRlRGljdCgpO1xufTtcblxubW9kdWxlLmV4cG9ydHMgPSBPYmplY3QuY3JlYXRlIHx8IGZ1bmN0aW9uIGNyZWF0ZShPLCBQcm9wZXJ0aWVzKSB7XG4gIHZhciByZXN1bHQ7XG4gIGlmIChPICE9PSBudWxsKSB7XG4gICAgRW1wdHlbUFJPVE9UWVBFXSA9IGFuT2JqZWN0KE8pO1xuICAgIHJlc3VsdCA9IG5ldyBFbXB0eSgpO1xuICAgIEVtcHR5W1BST1RPVFlQRV0gPSBudWxsO1xuICAgIC8vIGFkZCBcIl9fcHJvdG9fX1wiIGZvciBPYmplY3QuZ2V0UHJvdG90eXBlT2YgcG9seWZpbGxcbiAgICByZXN1bHRbSUVfUFJPVE9dID0gTztcbiAgfSBlbHNlIHJlc3VsdCA9IGNyZWF0ZURpY3QoKTtcbiAgcmV0dXJuIFByb3BlcnRpZXMgPT09IHVuZGVmaW5lZCA/IHJlc3VsdCA6IGRQcyhyZXN1bHQsIFByb3BlcnRpZXMpO1xufTtcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vbm9kZV9tb2R1bGVzL19jb3JlLWpzQDIuNS4zQGNvcmUtanMvbGlicmFyeS9tb2R1bGVzL19vYmplY3QtY3JlYXRlLmpzXG4vLyBtb2R1bGUgaWQgPSAzMlxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCIvLyA3LjEuMTUgVG9MZW5ndGhcbnZhciB0b0ludGVnZXIgPSByZXF1aXJlKCcuL190by1pbnRlZ2VyJyk7XG52YXIgbWluID0gTWF0aC5taW47XG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChpdCkge1xuICByZXR1cm4gaXQgPiAwID8gbWluKHRvSW50ZWdlcihpdCksIDB4MWZmZmZmZmZmZmZmZmYpIDogMDsgLy8gcG93KDIsIDUzKSAtIDEgPT0gOTAwNzE5OTI1NDc0MDk5MVxufTtcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vbm9kZV9tb2R1bGVzL19jb3JlLWpzQDIuNS4zQGNvcmUtanMvbGlicmFyeS9tb2R1bGVzL190by1sZW5ndGguanNcbi8vIG1vZHVsZSBpZCA9IDMzXG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsInZhciBpZCA9IDA7XG52YXIgcHggPSBNYXRoLnJhbmRvbSgpO1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoa2V5KSB7XG4gIHJldHVybiAnU3ltYm9sKCcuY29uY2F0KGtleSA9PT0gdW5kZWZpbmVkID8gJycgOiBrZXksICcpXycsICgrK2lkICsgcHgpLnRvU3RyaW5nKDM2KSk7XG59O1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9ub2RlX21vZHVsZXMvX2NvcmUtanNAMi41LjNAY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX3VpZC5qc1xuLy8gbW9kdWxlIGlkID0gMzRcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiLy8gNy4xLjEzIFRvT2JqZWN0KGFyZ3VtZW50KVxudmFyIGRlZmluZWQgPSByZXF1aXJlKCcuL19kZWZpbmVkJyk7XG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChpdCkge1xuICByZXR1cm4gT2JqZWN0KGRlZmluZWQoaXQpKTtcbn07XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL25vZGVfbW9kdWxlcy9fY29yZS1qc0AyLjUuM0Bjb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9fdG8tb2JqZWN0LmpzXG4vLyBtb2R1bGUgaWQgPSAzNVxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCIvLyBnZXR0aW5nIHRhZyBmcm9tIDE5LjEuMy42IE9iamVjdC5wcm90b3R5cGUudG9TdHJpbmcoKVxudmFyIGNvZiA9IHJlcXVpcmUoJy4vX2NvZicpO1xudmFyIFRBRyA9IHJlcXVpcmUoJy4vX3drcycpKCd0b1N0cmluZ1RhZycpO1xuLy8gRVMzIHdyb25nIGhlcmVcbnZhciBBUkcgPSBjb2YoZnVuY3Rpb24gKCkgeyByZXR1cm4gYXJndW1lbnRzOyB9KCkpID09ICdBcmd1bWVudHMnO1xuXG4vLyBmYWxsYmFjayBmb3IgSUUxMSBTY3JpcHQgQWNjZXNzIERlbmllZCBlcnJvclxudmFyIHRyeUdldCA9IGZ1bmN0aW9uIChpdCwga2V5KSB7XG4gIHRyeSB7XG4gICAgcmV0dXJuIGl0W2tleV07XG4gIH0gY2F0Y2ggKGUpIHsgLyogZW1wdHkgKi8gfVxufTtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoaXQpIHtcbiAgdmFyIE8sIFQsIEI7XG4gIHJldHVybiBpdCA9PT0gdW5kZWZpbmVkID8gJ1VuZGVmaW5lZCcgOiBpdCA9PT0gbnVsbCA/ICdOdWxsJ1xuICAgIC8vIEBAdG9TdHJpbmdUYWcgY2FzZVxuICAgIDogdHlwZW9mIChUID0gdHJ5R2V0KE8gPSBPYmplY3QoaXQpLCBUQUcpKSA9PSAnc3RyaW5nJyA/IFRcbiAgICAvLyBidWlsdGluVGFnIGNhc2VcbiAgICA6IEFSRyA/IGNvZihPKVxuICAgIC8vIEVTMyBhcmd1bWVudHMgZmFsbGJhY2tcbiAgICA6IChCID0gY29mKE8pKSA9PSAnT2JqZWN0JyAmJiB0eXBlb2YgTy5jYWxsZWUgPT0gJ2Z1bmN0aW9uJyA/ICdBcmd1bWVudHMnIDogQjtcbn07XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL25vZGVfbW9kdWxlcy9fY29yZS1qc0AyLjUuM0Bjb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9fY2xhc3NvZi5qc1xuLy8gbW9kdWxlIGlkID0gMzZcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwibW9kdWxlLmV4cG9ydHMgPSB7IFwiZGVmYXVsdFwiOiByZXF1aXJlKFwiY29yZS1qcy9saWJyYXJ5L2ZuL2dldC1pdGVyYXRvclwiKSwgX19lc01vZHVsZTogdHJ1ZSB9O1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vbm9kZV9tb2R1bGVzL19iYWJlbC1ydW50aW1lQDYuMjYuMEBiYWJlbC1ydW50aW1lL2NvcmUtanMvZ2V0LWl0ZXJhdG9yLmpzXG4vLyBtb2R1bGUgaWQgPSAzN1xuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJcclxuZXhwb3J0ICBjbGFzcyBNYXRyaXgge1xyXG4gICAgY29uc3RydWN0b3IoKSB7XHJcbiAgICAgICAgdGhpcy5ncmlkID0gW11cclxuICAgIH1cclxuXHJcbiAgICBmb3JFYWNoKGNhbGxiYWNrKSB7XHJcbiAgICAgICAgdGhpcy5ncmlkLmZvckVhY2goKGNvbHVtbix4KSA9PiB7XHJcbiAgICAgICAgICAgIGNvbHVtbi5mb3JFYWNoKCh2YWwseSkgPT4ge1xyXG4gICAgICAgICAgICAgICAgY2FsbGJhY2sodmFsLHgseSlcclxuICAgICAgICAgICAgfSlcclxuICAgICAgICB9KVxyXG4gICAgfVxyXG5cclxuICAgIGdldCh4LHkpIHtcclxuICAgICAgICBjb25zdCBjb2wgPSB0aGlzLmdyaWRbeF1cclxuXHJcbiAgICAgICAgaWYgKGNvbCkge1xyXG4gICAgICAgICAgICByZXR1cm4gY29sW3ldXHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiB1bmRlZmluZWRcclxuICAgIH1cclxuXHJcbiAgICBzZXQgKHgseSx2YWx1ZSkge1xyXG4gICAgICAgIGlmICghdGhpcy5ncmlkW3hdKSB7XHJcbiAgICAgICAgICAgIHRoaXMuZ3JpZFt4XSA9IFtdXHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICB0aGlzLmdyaWRbeF1beV0gPSB2YWx1ZVxyXG4gICAgfVxyXG59XHJcblxyXG5leHBvcnQgY2xhc3MgVmVjMiB7XHJcbiAgICBjb25zdHJ1Y3Rvcih4LCB5KSB7XHJcbiAgICAgICAgdGhpcy5zZXQoeCwgeSlcclxuICAgIH1cclxuXHJcbiAgICBzZXQoeCwgeSkge1xyXG4gICAgICAgIHRoaXMueCA9IHhcclxuICAgICAgICB0aGlzLnkgPSB5XHJcbiAgICB9XHJcbn1cclxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vcHVibGljL2pzL21hdGguanMiLCIvLyA3LjEuNCBUb0ludGVnZXJcbnZhciBjZWlsID0gTWF0aC5jZWlsO1xudmFyIGZsb29yID0gTWF0aC5mbG9vcjtcbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGl0KSB7XG4gIHJldHVybiBpc05hTihpdCA9ICtpdCkgPyAwIDogKGl0ID4gMCA/IGZsb29yIDogY2VpbCkoaXQpO1xufTtcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vbm9kZV9tb2R1bGVzL19jb3JlLWpzQDIuNS4zQGNvcmUtanMvbGlicmFyeS9tb2R1bGVzL190by1pbnRlZ2VyLmpzXG4vLyBtb2R1bGUgaWQgPSAzOVxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCIvLyA3LjIuMSBSZXF1aXJlT2JqZWN0Q29lcmNpYmxlKGFyZ3VtZW50KVxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoaXQpIHtcbiAgaWYgKGl0ID09IHVuZGVmaW5lZCkgdGhyb3cgVHlwZUVycm9yKFwiQ2FuJ3QgY2FsbCBtZXRob2Qgb24gIFwiICsgaXQpO1xuICByZXR1cm4gaXQ7XG59O1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9ub2RlX21vZHVsZXMvX2NvcmUtanNAMi41LjNAY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX2RlZmluZWQuanNcbi8vIG1vZHVsZSBpZCA9IDQwXG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIid1c2Ugc3RyaWN0JztcbnZhciBMSUJSQVJZID0gcmVxdWlyZSgnLi9fbGlicmFyeScpO1xudmFyICRleHBvcnQgPSByZXF1aXJlKCcuL19leHBvcnQnKTtcbnZhciByZWRlZmluZSA9IHJlcXVpcmUoJy4vX3JlZGVmaW5lJyk7XG52YXIgaGlkZSA9IHJlcXVpcmUoJy4vX2hpZGUnKTtcbnZhciBoYXMgPSByZXF1aXJlKCcuL19oYXMnKTtcbnZhciBJdGVyYXRvcnMgPSByZXF1aXJlKCcuL19pdGVyYXRvcnMnKTtcbnZhciAkaXRlckNyZWF0ZSA9IHJlcXVpcmUoJy4vX2l0ZXItY3JlYXRlJyk7XG52YXIgc2V0VG9TdHJpbmdUYWcgPSByZXF1aXJlKCcuL19zZXQtdG8tc3RyaW5nLXRhZycpO1xudmFyIGdldFByb3RvdHlwZU9mID0gcmVxdWlyZSgnLi9fb2JqZWN0LWdwbycpO1xudmFyIElURVJBVE9SID0gcmVxdWlyZSgnLi9fd2tzJykoJ2l0ZXJhdG9yJyk7XG52YXIgQlVHR1kgPSAhKFtdLmtleXMgJiYgJ25leHQnIGluIFtdLmtleXMoKSk7IC8vIFNhZmFyaSBoYXMgYnVnZ3kgaXRlcmF0b3JzIHcvbyBgbmV4dGBcbnZhciBGRl9JVEVSQVRPUiA9ICdAQGl0ZXJhdG9yJztcbnZhciBLRVlTID0gJ2tleXMnO1xudmFyIFZBTFVFUyA9ICd2YWx1ZXMnO1xuXG52YXIgcmV0dXJuVGhpcyA9IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHRoaXM7IH07XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKEJhc2UsIE5BTUUsIENvbnN0cnVjdG9yLCBuZXh0LCBERUZBVUxULCBJU19TRVQsIEZPUkNFRCkge1xuICAkaXRlckNyZWF0ZShDb25zdHJ1Y3RvciwgTkFNRSwgbmV4dCk7XG4gIHZhciBnZXRNZXRob2QgPSBmdW5jdGlvbiAoa2luZCkge1xuICAgIGlmICghQlVHR1kgJiYga2luZCBpbiBwcm90bykgcmV0dXJuIHByb3RvW2tpbmRdO1xuICAgIHN3aXRjaCAoa2luZCkge1xuICAgICAgY2FzZSBLRVlTOiByZXR1cm4gZnVuY3Rpb24ga2V5cygpIHsgcmV0dXJuIG5ldyBDb25zdHJ1Y3Rvcih0aGlzLCBraW5kKTsgfTtcbiAgICAgIGNhc2UgVkFMVUVTOiByZXR1cm4gZnVuY3Rpb24gdmFsdWVzKCkgeyByZXR1cm4gbmV3IENvbnN0cnVjdG9yKHRoaXMsIGtpbmQpOyB9O1xuICAgIH0gcmV0dXJuIGZ1bmN0aW9uIGVudHJpZXMoKSB7IHJldHVybiBuZXcgQ29uc3RydWN0b3IodGhpcywga2luZCk7IH07XG4gIH07XG4gIHZhciBUQUcgPSBOQU1FICsgJyBJdGVyYXRvcic7XG4gIHZhciBERUZfVkFMVUVTID0gREVGQVVMVCA9PSBWQUxVRVM7XG4gIHZhciBWQUxVRVNfQlVHID0gZmFsc2U7XG4gIHZhciBwcm90byA9IEJhc2UucHJvdG90eXBlO1xuICB2YXIgJG5hdGl2ZSA9IHByb3RvW0lURVJBVE9SXSB8fCBwcm90b1tGRl9JVEVSQVRPUl0gfHwgREVGQVVMVCAmJiBwcm90b1tERUZBVUxUXTtcbiAgdmFyICRkZWZhdWx0ID0gKCFCVUdHWSAmJiAkbmF0aXZlKSB8fCBnZXRNZXRob2QoREVGQVVMVCk7XG4gIHZhciAkZW50cmllcyA9IERFRkFVTFQgPyAhREVGX1ZBTFVFUyA/ICRkZWZhdWx0IDogZ2V0TWV0aG9kKCdlbnRyaWVzJykgOiB1bmRlZmluZWQ7XG4gIHZhciAkYW55TmF0aXZlID0gTkFNRSA9PSAnQXJyYXknID8gcHJvdG8uZW50cmllcyB8fCAkbmF0aXZlIDogJG5hdGl2ZTtcbiAgdmFyIG1ldGhvZHMsIGtleSwgSXRlcmF0b3JQcm90b3R5cGU7XG4gIC8vIEZpeCBuYXRpdmVcbiAgaWYgKCRhbnlOYXRpdmUpIHtcbiAgICBJdGVyYXRvclByb3RvdHlwZSA9IGdldFByb3RvdHlwZU9mKCRhbnlOYXRpdmUuY2FsbChuZXcgQmFzZSgpKSk7XG4gICAgaWYgKEl0ZXJhdG9yUHJvdG90eXBlICE9PSBPYmplY3QucHJvdG90eXBlICYmIEl0ZXJhdG9yUHJvdG90eXBlLm5leHQpIHtcbiAgICAgIC8vIFNldCBAQHRvU3RyaW5nVGFnIHRvIG5hdGl2ZSBpdGVyYXRvcnNcbiAgICAgIHNldFRvU3RyaW5nVGFnKEl0ZXJhdG9yUHJvdG90eXBlLCBUQUcsIHRydWUpO1xuICAgICAgLy8gZml4IGZvciBzb21lIG9sZCBlbmdpbmVzXG4gICAgICBpZiAoIUxJQlJBUlkgJiYgIWhhcyhJdGVyYXRvclByb3RvdHlwZSwgSVRFUkFUT1IpKSBoaWRlKEl0ZXJhdG9yUHJvdG90eXBlLCBJVEVSQVRPUiwgcmV0dXJuVGhpcyk7XG4gICAgfVxuICB9XG4gIC8vIGZpeCBBcnJheSN7dmFsdWVzLCBAQGl0ZXJhdG9yfS5uYW1lIGluIFY4IC8gRkZcbiAgaWYgKERFRl9WQUxVRVMgJiYgJG5hdGl2ZSAmJiAkbmF0aXZlLm5hbWUgIT09IFZBTFVFUykge1xuICAgIFZBTFVFU19CVUcgPSB0cnVlO1xuICAgICRkZWZhdWx0ID0gZnVuY3Rpb24gdmFsdWVzKCkgeyByZXR1cm4gJG5hdGl2ZS5jYWxsKHRoaXMpOyB9O1xuICB9XG4gIC8vIERlZmluZSBpdGVyYXRvclxuICBpZiAoKCFMSUJSQVJZIHx8IEZPUkNFRCkgJiYgKEJVR0dZIHx8IFZBTFVFU19CVUcgfHwgIXByb3RvW0lURVJBVE9SXSkpIHtcbiAgICBoaWRlKHByb3RvLCBJVEVSQVRPUiwgJGRlZmF1bHQpO1xuICB9XG4gIC8vIFBsdWcgZm9yIGxpYnJhcnlcbiAgSXRlcmF0b3JzW05BTUVdID0gJGRlZmF1bHQ7XG4gIEl0ZXJhdG9yc1tUQUddID0gcmV0dXJuVGhpcztcbiAgaWYgKERFRkFVTFQpIHtcbiAgICBtZXRob2RzID0ge1xuICAgICAgdmFsdWVzOiBERUZfVkFMVUVTID8gJGRlZmF1bHQgOiBnZXRNZXRob2QoVkFMVUVTKSxcbiAgICAgIGtleXM6IElTX1NFVCA/ICRkZWZhdWx0IDogZ2V0TWV0aG9kKEtFWVMpLFxuICAgICAgZW50cmllczogJGVudHJpZXNcbiAgICB9O1xuICAgIGlmIChGT1JDRUQpIGZvciAoa2V5IGluIG1ldGhvZHMpIHtcbiAgICAgIGlmICghKGtleSBpbiBwcm90bykpIHJlZGVmaW5lKHByb3RvLCBrZXksIG1ldGhvZHNba2V5XSk7XG4gICAgfSBlbHNlICRleHBvcnQoJGV4cG9ydC5QICsgJGV4cG9ydC5GICogKEJVR0dZIHx8IFZBTFVFU19CVUcpLCBOQU1FLCBtZXRob2RzKTtcbiAgfVxuICByZXR1cm4gbWV0aG9kcztcbn07XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL25vZGVfbW9kdWxlcy9fY29yZS1qc0AyLjUuM0Bjb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9faXRlci1kZWZpbmUuanNcbi8vIG1vZHVsZSBpZCA9IDQxXG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsInZhciBpc09iamVjdCA9IHJlcXVpcmUoJy4vX2lzLW9iamVjdCcpO1xudmFyIGRvY3VtZW50ID0gcmVxdWlyZSgnLi9fZ2xvYmFsJykuZG9jdW1lbnQ7XG4vLyB0eXBlb2YgZG9jdW1lbnQuY3JlYXRlRWxlbWVudCBpcyAnb2JqZWN0JyBpbiBvbGQgSUVcbnZhciBpcyA9IGlzT2JqZWN0KGRvY3VtZW50KSAmJiBpc09iamVjdChkb2N1bWVudC5jcmVhdGVFbGVtZW50KTtcbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGl0KSB7XG4gIHJldHVybiBpcyA/IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoaXQpIDoge307XG59O1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9ub2RlX21vZHVsZXMvX2NvcmUtanNAMi41LjNAY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX2RvbS1jcmVhdGUuanNcbi8vIG1vZHVsZSBpZCA9IDQyXG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIi8vIDcuMS4xIFRvUHJpbWl0aXZlKGlucHV0IFssIFByZWZlcnJlZFR5cGVdKVxudmFyIGlzT2JqZWN0ID0gcmVxdWlyZSgnLi9faXMtb2JqZWN0Jyk7XG4vLyBpbnN0ZWFkIG9mIHRoZSBFUzYgc3BlYyB2ZXJzaW9uLCB3ZSBkaWRuJ3QgaW1wbGVtZW50IEBAdG9QcmltaXRpdmUgY2FzZVxuLy8gYW5kIHRoZSBzZWNvbmQgYXJndW1lbnQgLSBmbGFnIC0gcHJlZmVycmVkIHR5cGUgaXMgYSBzdHJpbmdcbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGl0LCBTKSB7XG4gIGlmICghaXNPYmplY3QoaXQpKSByZXR1cm4gaXQ7XG4gIHZhciBmbiwgdmFsO1xuICBpZiAoUyAmJiB0eXBlb2YgKGZuID0gaXQudG9TdHJpbmcpID09ICdmdW5jdGlvbicgJiYgIWlzT2JqZWN0KHZhbCA9IGZuLmNhbGwoaXQpKSkgcmV0dXJuIHZhbDtcbiAgaWYgKHR5cGVvZiAoZm4gPSBpdC52YWx1ZU9mKSA9PSAnZnVuY3Rpb24nICYmICFpc09iamVjdCh2YWwgPSBmbi5jYWxsKGl0KSkpIHJldHVybiB2YWw7XG4gIGlmICghUyAmJiB0eXBlb2YgKGZuID0gaXQudG9TdHJpbmcpID09ICdmdW5jdGlvbicgJiYgIWlzT2JqZWN0KHZhbCA9IGZuLmNhbGwoaXQpKSkgcmV0dXJuIHZhbDtcbiAgdGhyb3cgVHlwZUVycm9yKFwiQ2FuJ3QgY29udmVydCBvYmplY3QgdG8gcHJpbWl0aXZlIHZhbHVlXCIpO1xufTtcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vbm9kZV9tb2R1bGVzL19jb3JlLWpzQDIuNS4zQGNvcmUtanMvbGlicmFyeS9tb2R1bGVzL190by1wcmltaXRpdmUuanNcbi8vIG1vZHVsZSBpZCA9IDQzXG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIi8vIDE5LjEuMi4xNCAvIDE1LjIuMy4xNCBPYmplY3Qua2V5cyhPKVxudmFyICRrZXlzID0gcmVxdWlyZSgnLi9fb2JqZWN0LWtleXMtaW50ZXJuYWwnKTtcbnZhciBlbnVtQnVnS2V5cyA9IHJlcXVpcmUoJy4vX2VudW0tYnVnLWtleXMnKTtcblxubW9kdWxlLmV4cG9ydHMgPSBPYmplY3Qua2V5cyB8fCBmdW5jdGlvbiBrZXlzKE8pIHtcbiAgcmV0dXJuICRrZXlzKE8sIGVudW1CdWdLZXlzKTtcbn07XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL25vZGVfbW9kdWxlcy9fY29yZS1qc0AyLjUuM0Bjb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9fb2JqZWN0LWtleXMuanNcbi8vIG1vZHVsZSBpZCA9IDQ0XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsInZhciBzaGFyZWQgPSByZXF1aXJlKCcuL19zaGFyZWQnKSgna2V5cycpO1xudmFyIHVpZCA9IHJlcXVpcmUoJy4vX3VpZCcpO1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoa2V5KSB7XG4gIHJldHVybiBzaGFyZWRba2V5XSB8fCAoc2hhcmVkW2tleV0gPSB1aWQoa2V5KSk7XG59O1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9ub2RlX21vZHVsZXMvX2NvcmUtanNAMi41LjNAY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX3NoYXJlZC1rZXkuanNcbi8vIG1vZHVsZSBpZCA9IDQ1XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsInZhciBnbG9iYWwgPSByZXF1aXJlKCcuL19nbG9iYWwnKTtcbnZhciBTSEFSRUQgPSAnX19jb3JlLWpzX3NoYXJlZF9fJztcbnZhciBzdG9yZSA9IGdsb2JhbFtTSEFSRURdIHx8IChnbG9iYWxbU0hBUkVEXSA9IHt9KTtcbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGtleSkge1xuICByZXR1cm4gc3RvcmVba2V5XSB8fCAoc3RvcmVba2V5XSA9IHt9KTtcbn07XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL25vZGVfbW9kdWxlcy9fY29yZS1qc0AyLjUuM0Bjb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9fc2hhcmVkLmpzXG4vLyBtb2R1bGUgaWQgPSA0NlxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCIvLyBJRSA4LSBkb24ndCBlbnVtIGJ1ZyBrZXlzXG5tb2R1bGUuZXhwb3J0cyA9IChcbiAgJ2NvbnN0cnVjdG9yLGhhc093blByb3BlcnR5LGlzUHJvdG90eXBlT2YscHJvcGVydHlJc0VudW1lcmFibGUsdG9Mb2NhbGVTdHJpbmcsdG9TdHJpbmcsdmFsdWVPZidcbikuc3BsaXQoJywnKTtcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vbm9kZV9tb2R1bGVzL19jb3JlLWpzQDIuNS4zQGNvcmUtanMvbGlicmFyeS9tb2R1bGVzL19lbnVtLWJ1Zy1rZXlzLmpzXG4vLyBtb2R1bGUgaWQgPSA0N1xuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJtb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChpdCwgQ29uc3RydWN0b3IsIG5hbWUsIGZvcmJpZGRlbkZpZWxkKSB7XG4gIGlmICghKGl0IGluc3RhbmNlb2YgQ29uc3RydWN0b3IpIHx8IChmb3JiaWRkZW5GaWVsZCAhPT0gdW5kZWZpbmVkICYmIGZvcmJpZGRlbkZpZWxkIGluIGl0KSkge1xuICAgIHRocm93IFR5cGVFcnJvcihuYW1lICsgJzogaW5jb3JyZWN0IGludm9jYXRpb24hJyk7XG4gIH0gcmV0dXJuIGl0O1xufTtcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vbm9kZV9tb2R1bGVzL19jb3JlLWpzQDIuNS4zQGNvcmUtanMvbGlicmFyeS9tb2R1bGVzL19hbi1pbnN0YW5jZS5qc1xuLy8gbW9kdWxlIGlkID0gNDhcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwidmFyIGNsYXNzb2YgPSByZXF1aXJlKCcuL19jbGFzc29mJyk7XG52YXIgSVRFUkFUT1IgPSByZXF1aXJlKCcuL193a3MnKSgnaXRlcmF0b3InKTtcbnZhciBJdGVyYXRvcnMgPSByZXF1aXJlKCcuL19pdGVyYXRvcnMnKTtcbm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZSgnLi9fY29yZScpLmdldEl0ZXJhdG9yTWV0aG9kID0gZnVuY3Rpb24gKGl0KSB7XG4gIGlmIChpdCAhPSB1bmRlZmluZWQpIHJldHVybiBpdFtJVEVSQVRPUl1cbiAgICB8fCBpdFsnQEBpdGVyYXRvciddXG4gICAgfHwgSXRlcmF0b3JzW2NsYXNzb2YoaXQpXTtcbn07XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL25vZGVfbW9kdWxlcy9fY29yZS1qc0AyLjUuM0Bjb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9jb3JlLmdldC1pdGVyYXRvci1tZXRob2QuanNcbi8vIG1vZHVsZSBpZCA9IDQ5XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIid1c2Ugc3RyaWN0Jztcbi8vIDI1LjQuMS41IE5ld1Byb21pc2VDYXBhYmlsaXR5KEMpXG52YXIgYUZ1bmN0aW9uID0gcmVxdWlyZSgnLi9fYS1mdW5jdGlvbicpO1xuXG5mdW5jdGlvbiBQcm9taXNlQ2FwYWJpbGl0eShDKSB7XG4gIHZhciByZXNvbHZlLCByZWplY3Q7XG4gIHRoaXMucHJvbWlzZSA9IG5ldyBDKGZ1bmN0aW9uICgkJHJlc29sdmUsICQkcmVqZWN0KSB7XG4gICAgaWYgKHJlc29sdmUgIT09IHVuZGVmaW5lZCB8fCByZWplY3QgIT09IHVuZGVmaW5lZCkgdGhyb3cgVHlwZUVycm9yKCdCYWQgUHJvbWlzZSBjb25zdHJ1Y3RvcicpO1xuICAgIHJlc29sdmUgPSAkJHJlc29sdmU7XG4gICAgcmVqZWN0ID0gJCRyZWplY3Q7XG4gIH0pO1xuICB0aGlzLnJlc29sdmUgPSBhRnVuY3Rpb24ocmVzb2x2ZSk7XG4gIHRoaXMucmVqZWN0ID0gYUZ1bmN0aW9uKHJlamVjdCk7XG59XG5cbm1vZHVsZS5leHBvcnRzLmYgPSBmdW5jdGlvbiAoQykge1xuICByZXR1cm4gbmV3IFByb21pc2VDYXBhYmlsaXR5KEMpO1xufTtcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vbm9kZV9tb2R1bGVzL19jb3JlLWpzQDIuNS4zQGNvcmUtanMvbGlicmFyeS9tb2R1bGVzL19uZXctcHJvbWlzZS1jYXBhYmlsaXR5LmpzXG4vLyBtb2R1bGUgaWQgPSA1MFxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJ2YXIgaGlkZSA9IHJlcXVpcmUoJy4vX2hpZGUnKTtcbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKHRhcmdldCwgc3JjLCBzYWZlKSB7XG4gIGZvciAodmFyIGtleSBpbiBzcmMpIHtcbiAgICBpZiAoc2FmZSAmJiB0YXJnZXRba2V5XSkgdGFyZ2V0W2tleV0gPSBzcmNba2V5XTtcbiAgICBlbHNlIGhpZGUodGFyZ2V0LCBrZXksIHNyY1trZXldKTtcbiAgfSByZXR1cm4gdGFyZ2V0O1xufTtcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vbm9kZV9tb2R1bGVzL19jb3JlLWpzQDIuNS4zQGNvcmUtanMvbGlicmFyeS9tb2R1bGVzL19yZWRlZmluZS1hbGwuanNcbi8vIG1vZHVsZSBpZCA9IDUxXG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIm1vZHVsZS5leHBvcnRzID0geyBcImRlZmF1bHRcIjogcmVxdWlyZShcImNvcmUtanMvbGlicmFyeS9mbi9zeW1ib2xcIiksIF9fZXNNb2R1bGU6IHRydWUgfTtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL25vZGVfbW9kdWxlcy9fYmFiZWwtcnVudGltZUA2LjI2LjBAYmFiZWwtcnVudGltZS9jb3JlLWpzL3N5bWJvbC5qc1xuLy8gbW9kdWxlIGlkID0gNTJcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwidmFyIE1FVEEgPSByZXF1aXJlKCcuL191aWQnKSgnbWV0YScpO1xudmFyIGlzT2JqZWN0ID0gcmVxdWlyZSgnLi9faXMtb2JqZWN0Jyk7XG52YXIgaGFzID0gcmVxdWlyZSgnLi9faGFzJyk7XG52YXIgc2V0RGVzYyA9IHJlcXVpcmUoJy4vX29iamVjdC1kcCcpLmY7XG52YXIgaWQgPSAwO1xudmFyIGlzRXh0ZW5zaWJsZSA9IE9iamVjdC5pc0V4dGVuc2libGUgfHwgZnVuY3Rpb24gKCkge1xuICByZXR1cm4gdHJ1ZTtcbn07XG52YXIgRlJFRVpFID0gIXJlcXVpcmUoJy4vX2ZhaWxzJykoZnVuY3Rpb24gKCkge1xuICByZXR1cm4gaXNFeHRlbnNpYmxlKE9iamVjdC5wcmV2ZW50RXh0ZW5zaW9ucyh7fSkpO1xufSk7XG52YXIgc2V0TWV0YSA9IGZ1bmN0aW9uIChpdCkge1xuICBzZXREZXNjKGl0LCBNRVRBLCB7IHZhbHVlOiB7XG4gICAgaTogJ08nICsgKytpZCwgLy8gb2JqZWN0IElEXG4gICAgdzoge30gICAgICAgICAgLy8gd2VhayBjb2xsZWN0aW9ucyBJRHNcbiAgfSB9KTtcbn07XG52YXIgZmFzdEtleSA9IGZ1bmN0aW9uIChpdCwgY3JlYXRlKSB7XG4gIC8vIHJldHVybiBwcmltaXRpdmUgd2l0aCBwcmVmaXhcbiAgaWYgKCFpc09iamVjdChpdCkpIHJldHVybiB0eXBlb2YgaXQgPT0gJ3N5bWJvbCcgPyBpdCA6ICh0eXBlb2YgaXQgPT0gJ3N0cmluZycgPyAnUycgOiAnUCcpICsgaXQ7XG4gIGlmICghaGFzKGl0LCBNRVRBKSkge1xuICAgIC8vIGNhbid0IHNldCBtZXRhZGF0YSB0byB1bmNhdWdodCBmcm96ZW4gb2JqZWN0XG4gICAgaWYgKCFpc0V4dGVuc2libGUoaXQpKSByZXR1cm4gJ0YnO1xuICAgIC8vIG5vdCBuZWNlc3NhcnkgdG8gYWRkIG1ldGFkYXRhXG4gICAgaWYgKCFjcmVhdGUpIHJldHVybiAnRSc7XG4gICAgLy8gYWRkIG1pc3NpbmcgbWV0YWRhdGFcbiAgICBzZXRNZXRhKGl0KTtcbiAgLy8gcmV0dXJuIG9iamVjdCBJRFxuICB9IHJldHVybiBpdFtNRVRBXS5pO1xufTtcbnZhciBnZXRXZWFrID0gZnVuY3Rpb24gKGl0LCBjcmVhdGUpIHtcbiAgaWYgKCFoYXMoaXQsIE1FVEEpKSB7XG4gICAgLy8gY2FuJ3Qgc2V0IG1ldGFkYXRhIHRvIHVuY2F1Z2h0IGZyb3plbiBvYmplY3RcbiAgICBpZiAoIWlzRXh0ZW5zaWJsZShpdCkpIHJldHVybiB0cnVlO1xuICAgIC8vIG5vdCBuZWNlc3NhcnkgdG8gYWRkIG1ldGFkYXRhXG4gICAgaWYgKCFjcmVhdGUpIHJldHVybiBmYWxzZTtcbiAgICAvLyBhZGQgbWlzc2luZyBtZXRhZGF0YVxuICAgIHNldE1ldGEoaXQpO1xuICAvLyByZXR1cm4gaGFzaCB3ZWFrIGNvbGxlY3Rpb25zIElEc1xuICB9IHJldHVybiBpdFtNRVRBXS53O1xufTtcbi8vIGFkZCBtZXRhZGF0YSBvbiBmcmVlemUtZmFtaWx5IG1ldGhvZHMgY2FsbGluZ1xudmFyIG9uRnJlZXplID0gZnVuY3Rpb24gKGl0KSB7XG4gIGlmIChGUkVFWkUgJiYgbWV0YS5ORUVEICYmIGlzRXh0ZW5zaWJsZShpdCkgJiYgIWhhcyhpdCwgTUVUQSkpIHNldE1ldGEoaXQpO1xuICByZXR1cm4gaXQ7XG59O1xudmFyIG1ldGEgPSBtb2R1bGUuZXhwb3J0cyA9IHtcbiAgS0VZOiBNRVRBLFxuICBORUVEOiBmYWxzZSxcbiAgZmFzdEtleTogZmFzdEtleSxcbiAgZ2V0V2VhazogZ2V0V2VhayxcbiAgb25GcmVlemU6IG9uRnJlZXplXG59O1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9ub2RlX21vZHVsZXMvX2NvcmUtanNAMi41LjNAY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX21ldGEuanNcbi8vIG1vZHVsZSBpZCA9IDUzXG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsImV4cG9ydHMuZiA9IHJlcXVpcmUoJy4vX3drcycpO1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9ub2RlX21vZHVsZXMvX2NvcmUtanNAMi41LjNAY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX3drcy1leHQuanNcbi8vIG1vZHVsZSBpZCA9IDU0XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsInZhciBnbG9iYWwgPSByZXF1aXJlKCcuL19nbG9iYWwnKTtcbnZhciBjb3JlID0gcmVxdWlyZSgnLi9fY29yZScpO1xudmFyIExJQlJBUlkgPSByZXF1aXJlKCcuL19saWJyYXJ5Jyk7XG52YXIgd2tzRXh0ID0gcmVxdWlyZSgnLi9fd2tzLWV4dCcpO1xudmFyIGRlZmluZVByb3BlcnR5ID0gcmVxdWlyZSgnLi9fb2JqZWN0LWRwJykuZjtcbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKG5hbWUpIHtcbiAgdmFyICRTeW1ib2wgPSBjb3JlLlN5bWJvbCB8fCAoY29yZS5TeW1ib2wgPSBMSUJSQVJZID8ge30gOiBnbG9iYWwuU3ltYm9sIHx8IHt9KTtcbiAgaWYgKG5hbWUuY2hhckF0KDApICE9ICdfJyAmJiAhKG5hbWUgaW4gJFN5bWJvbCkpIGRlZmluZVByb3BlcnR5KCRTeW1ib2wsIG5hbWUsIHsgdmFsdWU6IHdrc0V4dC5mKG5hbWUpIH0pO1xufTtcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vbm9kZV9tb2R1bGVzL19jb3JlLWpzQDIuNS4zQGNvcmUtanMvbGlicmFyeS9tb2R1bGVzL193a3MtZGVmaW5lLmpzXG4vLyBtb2R1bGUgaWQgPSA1NVxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJleHBvcnRzLmYgPSB7fS5wcm9wZXJ0eUlzRW51bWVyYWJsZTtcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vbm9kZV9tb2R1bGVzL19jb3JlLWpzQDIuNS4zQGNvcmUtanMvbGlicmFyeS9tb2R1bGVzL19vYmplY3QtcGllLmpzXG4vLyBtb2R1bGUgaWQgPSA1NlxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJ2YXIgaXNPYmplY3QgPSByZXF1aXJlKCcuL19pcy1vYmplY3QnKTtcbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGl0LCBUWVBFKSB7XG4gIGlmICghaXNPYmplY3QoaXQpIHx8IGl0Ll90ICE9PSBUWVBFKSB0aHJvdyBUeXBlRXJyb3IoJ0luY29tcGF0aWJsZSByZWNlaXZlciwgJyArIFRZUEUgKyAnIHJlcXVpcmVkIScpO1xuICByZXR1cm4gaXQ7XG59O1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9ub2RlX21vZHVsZXMvX2NvcmUtanNAMi41LjNAY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX3ZhbGlkYXRlLWNvbGxlY3Rpb24uanNcbi8vIG1vZHVsZSBpZCA9IDU3XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIm1vZHVsZS5leHBvcnRzID0geyBcImRlZmF1bHRcIjogcmVxdWlyZShcImNvcmUtanMvbGlicmFyeS9mbi9tYXBcIiksIF9fZXNNb2R1bGU6IHRydWUgfTtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL25vZGVfbW9kdWxlcy9fYmFiZWwtcnVudGltZUA2LjI2LjBAYmFiZWwtcnVudGltZS9jb3JlLWpzL21hcC5qc1xuLy8gbW9kdWxlIGlkID0gNThcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiaW1wb3J0IHtUcmFpdH0gZnJvbSAnLi4vRW50aXR5LmpzJ1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgS2lsbGFibGUgZXh0ZW5kcyBUcmFpdCB7XHJcbiAgICBjb25zdHJ1Y3RvcigpIHtcclxuICAgICAgICBzdXBlcigna2lsbGFibGUnKTtcclxuICAgICAgICB0aGlzLmRlYWQgPSBmYWxzZTtcclxuICAgICAgICB0aGlzLmRlYWRUaW1lID0gMDtcclxuICAgICAgICB0aGlzLnJlbW92ZUFmdGVyID0gMTtcclxuICAgIH1cclxuXHJcbiAgICBraWxsKCkge1xyXG4gICAgICAgIHRoaXMucXVldWUoKCkgPT4gdGhpcy5kZWFkID0gdHJ1ZSk7XHJcbiAgICB9XHJcblxyXG4gICAgcmV2aXZlKCkge1xyXG4gICAgICAgIHRoaXMuZGVhZCA9IGZhbHNlO1xyXG4gICAgICAgIHRoaXMuZGVhZFRpbWUgPSAwO1xyXG4gICAgfVxyXG5cclxuICAgIHVwZGF0ZShlbnRpdHksIGRlbHRhVGltZSwgbGV2ZWwpIHtcclxuICAgICAgICBpZiAodGhpcy5kZWFkKSB7XHJcbiAgICAgICAgICAgIHRoaXMuZGVhZFRpbWUgKz0gZGVsdGFUaW1lO1xyXG4gICAgICAgICAgICBpZiAodGhpcy5kZWFkVGltZSA+IHRoaXMucmVtb3ZlQWZ0ZXIpIHtcclxuICAgICAgICAgICAgICAgIHRoaXMucXVldWUoKCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgIGxldmVsLmVudGl0aWVzLmRlbGV0ZShlbnRpdHkpO1xyXG4gICAgICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH1cclxufVxyXG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9wdWJsaWMvanMvdHJhaXRzL0tpbGxhYmxlLmpzIiwiaW1wb3J0IHtTaWRlcywgVHJhaXR9IGZyb20gJy4uL0VudGl0eS5qcydcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFNvbGlkIGV4dGVuZHMgVHJhaXQge1xyXG4gICAgY29uc3RydWN0b3IoKSB7XHJcbiAgICAgICAgc3VwZXIoJ3NvbGlkJyk7XHJcbiAgICAgICAgdGhpcy5vYnN0cnVjdHMgPXRydWU7XHJcbiAgICB9XHJcblxyXG4gICAgb2JzdHJ1Y3QoZW50aXR5LCBzaWRlcywgbWF0Y2gpIHtcclxuICAgICAgICBpZiAoIXRoaXMub2JzdHJ1Y3RzKSB7XHJcbiAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGlmIChzaWRlcyA9PT0gU2lkZXMuQk9UVE9NKSB7XHJcbiAgICAgICAgICAgIGVudGl0eS5ib3VuZHMudG9wID0gbWF0Y2gueTEgLSBlbnRpdHkuc2l6ZS55O1xyXG4gICAgICAgICAgICBlbnRpdHkudmVsLnkgPSAwO1xyXG4gICAgICAgIH0gZWxzZSBpZiAoc2lkZXMgPT09IFNpZGVzLlRPUCkge1xyXG4gICAgICAgICAgICBlbnRpdHkuYm91bmRzLnRvcCA9IG1hdGNoLnkyO1xyXG4gICAgICAgICAgICBlbnRpdHkudmVsLnkgPSAwO1xyXG4gICAgICAgIH0gZWxzZSBpZiAoc2lkZXMgPT09IFNpZGVzLkxFRlQpIHtcclxuICAgICAgICAgICAgZW50aXR5LmJvdW5kcy5sZWZ0ID0gbWF0Y2gueDEgLSBlbnRpdHkuc2l6ZS54O1xyXG4gICAgICAgICAgICBlbnRpdHkudmVsLnggPSAwO1xyXG4gICAgICAgIH0gZWxzZSBpZiAoc2lkZXMgPT09IFNpZGVzLlJJR0hUKSB7XHJcbiAgICAgICAgICAgIGVudGl0eS5ib3VuZHMubGVmdCA9IG1hdGNoLngyO1xyXG4gICAgICAgICAgICBlbnRpdHkudmVsLnggPSAwO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxufVxyXG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9wdWJsaWMvanMvdHJhaXRzL1NvbGlkLmpzIiwiaW1wb3J0IHtUcmFpdH0gZnJvbSAnLi4vRW50aXR5LmpzJ1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgUGh5c2ljcyBleHRlbmRzIFRyYWl0IHtcclxuICAgIGNvbnN0cnVjdG9yKCkge1xyXG4gICAgICAgIHN1cGVyKCdwaHlzaWNzJyk7XHJcbiAgICB9XHJcblxyXG4gICAgdXBkYXRlKGVudGl0eSwgZGVsdGFUaW1lLCBsZXZlbCkge1xyXG4gICAgICAgIGVudGl0eS5wb3MueCArPSBlbnRpdHkudmVsLnggKiBkZWx0YVRpbWU7XHJcbiAgICAgICAgbGV2ZWwudGlsZUNvbGxpZGVyLmNoZWNrWChlbnRpdHkpO1xyXG5cclxuICAgICAgICBlbnRpdHkucG9zLnkgKz0gZW50aXR5LnZlbC55ICogZGVsdGFUaW1lO1xyXG4gICAgICAgIGxldmVsLnRpbGVDb2xsaWRlci5jaGVja1koZW50aXR5KTtcclxuXHJcbiAgICAgICAgZW50aXR5LnZlbC55ICs9IGxldmVsLmdyYXZpdHkgKiBkZWx0YVRpbWU7XHJcbiAgICB9XHJcbn1cclxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vcHVibGljL2pzL3RyYWl0cy9QaHlzaWNzLmpzIiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicmVnZW5lcmF0b3ItcnVudGltZVwiKTtcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vbm9kZV9tb2R1bGVzL19iYWJlbC1ydW50aW1lQDYuMjYuMEBiYWJlbC1ydW50aW1lL3JlZ2VuZXJhdG9yL2luZGV4LmpzXG4vLyBtb2R1bGUgaWQgPSA2MlxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJtb2R1bGUuZXhwb3J0cyA9ICFyZXF1aXJlKCcuL19kZXNjcmlwdG9ycycpICYmICFyZXF1aXJlKCcuL19mYWlscycpKGZ1bmN0aW9uICgpIHtcbiAgcmV0dXJuIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShyZXF1aXJlKCcuL19kb20tY3JlYXRlJykoJ2RpdicpLCAnYScsIHsgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiA3OyB9IH0pLmEgIT0gNztcbn0pO1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9ub2RlX21vZHVsZXMvX2NvcmUtanNAMi41LjNAY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX2llOC1kb20tZGVmaW5lLmpzXG4vLyBtb2R1bGUgaWQgPSA2M1xuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoJy4vX2hpZGUnKTtcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vbm9kZV9tb2R1bGVzL19jb3JlLWpzQDIuNS4zQGNvcmUtanMvbGlicmFyeS9tb2R1bGVzL19yZWRlZmluZS5qc1xuLy8gbW9kdWxlIGlkID0gNjRcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwidmFyIGhhcyA9IHJlcXVpcmUoJy4vX2hhcycpO1xudmFyIHRvSU9iamVjdCA9IHJlcXVpcmUoJy4vX3RvLWlvYmplY3QnKTtcbnZhciBhcnJheUluZGV4T2YgPSByZXF1aXJlKCcuL19hcnJheS1pbmNsdWRlcycpKGZhbHNlKTtcbnZhciBJRV9QUk9UTyA9IHJlcXVpcmUoJy4vX3NoYXJlZC1rZXknKSgnSUVfUFJPVE8nKTtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAob2JqZWN0LCBuYW1lcykge1xuICB2YXIgTyA9IHRvSU9iamVjdChvYmplY3QpO1xuICB2YXIgaSA9IDA7XG4gIHZhciByZXN1bHQgPSBbXTtcbiAgdmFyIGtleTtcbiAgZm9yIChrZXkgaW4gTykgaWYgKGtleSAhPSBJRV9QUk9UTykgaGFzKE8sIGtleSkgJiYgcmVzdWx0LnB1c2goa2V5KTtcbiAgLy8gRG9uJ3QgZW51bSBidWcgJiBoaWRkZW4ga2V5c1xuICB3aGlsZSAobmFtZXMubGVuZ3RoID4gaSkgaWYgKGhhcyhPLCBrZXkgPSBuYW1lc1tpKytdKSkge1xuICAgIH5hcnJheUluZGV4T2YocmVzdWx0LCBrZXkpIHx8IHJlc3VsdC5wdXNoKGtleSk7XG4gIH1cbiAgcmV0dXJuIHJlc3VsdDtcbn07XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL25vZGVfbW9kdWxlcy9fY29yZS1qc0AyLjUuM0Bjb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9fb2JqZWN0LWtleXMtaW50ZXJuYWwuanNcbi8vIG1vZHVsZSBpZCA9IDY1XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIi8vIGZhbGxiYWNrIGZvciBub24tYXJyYXktbGlrZSBFUzMgYW5kIG5vbi1lbnVtZXJhYmxlIG9sZCBWOCBzdHJpbmdzXG52YXIgY29mID0gcmVxdWlyZSgnLi9fY29mJyk7XG4vLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tcHJvdG90eXBlLWJ1aWx0aW5zXG5tb2R1bGUuZXhwb3J0cyA9IE9iamVjdCgneicpLnByb3BlcnR5SXNFbnVtZXJhYmxlKDApID8gT2JqZWN0IDogZnVuY3Rpb24gKGl0KSB7XG4gIHJldHVybiBjb2YoaXQpID09ICdTdHJpbmcnID8gaXQuc3BsaXQoJycpIDogT2JqZWN0KGl0KTtcbn07XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL25vZGVfbW9kdWxlcy9fY29yZS1qc0AyLjUuM0Bjb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9faW9iamVjdC5qc1xuLy8gbW9kdWxlIGlkID0gNjZcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwidmFyIGRvY3VtZW50ID0gcmVxdWlyZSgnLi9fZ2xvYmFsJykuZG9jdW1lbnQ7XG5tb2R1bGUuZXhwb3J0cyA9IGRvY3VtZW50ICYmIGRvY3VtZW50LmRvY3VtZW50RWxlbWVudDtcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vbm9kZV9tb2R1bGVzL19jb3JlLWpzQDIuNS4zQGNvcmUtanMvbGlicmFyeS9tb2R1bGVzL19odG1sLmpzXG4vLyBtb2R1bGUgaWQgPSA2N1xuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCIvLyAxOS4xLjIuOSAvIDE1LjIuMy4yIE9iamVjdC5nZXRQcm90b3R5cGVPZihPKVxudmFyIGhhcyA9IHJlcXVpcmUoJy4vX2hhcycpO1xudmFyIHRvT2JqZWN0ID0gcmVxdWlyZSgnLi9fdG8tb2JqZWN0Jyk7XG52YXIgSUVfUFJPVE8gPSByZXF1aXJlKCcuL19zaGFyZWQta2V5JykoJ0lFX1BST1RPJyk7XG52YXIgT2JqZWN0UHJvdG8gPSBPYmplY3QucHJvdG90eXBlO1xuXG5tb2R1bGUuZXhwb3J0cyA9IE9iamVjdC5nZXRQcm90b3R5cGVPZiB8fCBmdW5jdGlvbiAoTykge1xuICBPID0gdG9PYmplY3QoTyk7XG4gIGlmIChoYXMoTywgSUVfUFJPVE8pKSByZXR1cm4gT1tJRV9QUk9UT107XG4gIGlmICh0eXBlb2YgTy5jb25zdHJ1Y3RvciA9PSAnZnVuY3Rpb24nICYmIE8gaW5zdGFuY2VvZiBPLmNvbnN0cnVjdG9yKSB7XG4gICAgcmV0dXJuIE8uY29uc3RydWN0b3IucHJvdG90eXBlO1xuICB9IHJldHVybiBPIGluc3RhbmNlb2YgT2JqZWN0ID8gT2JqZWN0UHJvdG8gOiBudWxsO1xufTtcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vbm9kZV9tb2R1bGVzL19jb3JlLWpzQDIuNS4zQGNvcmUtanMvbGlicmFyeS9tb2R1bGVzL19vYmplY3QtZ3BvLmpzXG4vLyBtb2R1bGUgaWQgPSA2OFxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJtb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChkb25lLCB2YWx1ZSkge1xuICByZXR1cm4geyB2YWx1ZTogdmFsdWUsIGRvbmU6ICEhZG9uZSB9O1xufTtcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vbm9kZV9tb2R1bGVzL19jb3JlLWpzQDIuNS4zQGNvcmUtanMvbGlicmFyeS9tb2R1bGVzL19pdGVyLXN0ZXAuanNcbi8vIG1vZHVsZSBpZCA9IDY5XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIi8vIGNhbGwgc29tZXRoaW5nIG9uIGl0ZXJhdG9yIHN0ZXAgd2l0aCBzYWZlIGNsb3Npbmcgb24gZXJyb3JcbnZhciBhbk9iamVjdCA9IHJlcXVpcmUoJy4vX2FuLW9iamVjdCcpO1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoaXRlcmF0b3IsIGZuLCB2YWx1ZSwgZW50cmllcykge1xuICB0cnkge1xuICAgIHJldHVybiBlbnRyaWVzID8gZm4oYW5PYmplY3QodmFsdWUpWzBdLCB2YWx1ZVsxXSkgOiBmbih2YWx1ZSk7XG4gIC8vIDcuNC42IEl0ZXJhdG9yQ2xvc2UoaXRlcmF0b3IsIGNvbXBsZXRpb24pXG4gIH0gY2F0Y2ggKGUpIHtcbiAgICB2YXIgcmV0ID0gaXRlcmF0b3JbJ3JldHVybiddO1xuICAgIGlmIChyZXQgIT09IHVuZGVmaW5lZCkgYW5PYmplY3QocmV0LmNhbGwoaXRlcmF0b3IpKTtcbiAgICB0aHJvdyBlO1xuICB9XG59O1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9ub2RlX21vZHVsZXMvX2NvcmUtanNAMi41LjNAY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX2l0ZXItY2FsbC5qc1xuLy8gbW9kdWxlIGlkID0gNzBcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiLy8gY2hlY2sgb24gZGVmYXVsdCBBcnJheSBpdGVyYXRvclxudmFyIEl0ZXJhdG9ycyA9IHJlcXVpcmUoJy4vX2l0ZXJhdG9ycycpO1xudmFyIElURVJBVE9SID0gcmVxdWlyZSgnLi9fd2tzJykoJ2l0ZXJhdG9yJyk7XG52YXIgQXJyYXlQcm90byA9IEFycmF5LnByb3RvdHlwZTtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoaXQpIHtcbiAgcmV0dXJuIGl0ICE9PSB1bmRlZmluZWQgJiYgKEl0ZXJhdG9ycy5BcnJheSA9PT0gaXQgfHwgQXJyYXlQcm90b1tJVEVSQVRPUl0gPT09IGl0KTtcbn07XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL25vZGVfbW9kdWxlcy9fY29yZS1qc0AyLjUuM0Bjb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9faXMtYXJyYXktaXRlci5qc1xuLy8gbW9kdWxlIGlkID0gNzFcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiLy8gNy4zLjIwIFNwZWNpZXNDb25zdHJ1Y3RvcihPLCBkZWZhdWx0Q29uc3RydWN0b3IpXG52YXIgYW5PYmplY3QgPSByZXF1aXJlKCcuL19hbi1vYmplY3QnKTtcbnZhciBhRnVuY3Rpb24gPSByZXF1aXJlKCcuL19hLWZ1bmN0aW9uJyk7XG52YXIgU1BFQ0lFUyA9IHJlcXVpcmUoJy4vX3drcycpKCdzcGVjaWVzJyk7XG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChPLCBEKSB7XG4gIHZhciBDID0gYW5PYmplY3QoTykuY29uc3RydWN0b3I7XG4gIHZhciBTO1xuICByZXR1cm4gQyA9PT0gdW5kZWZpbmVkIHx8IChTID0gYW5PYmplY3QoQylbU1BFQ0lFU10pID09IHVuZGVmaW5lZCA/IEQgOiBhRnVuY3Rpb24oUyk7XG59O1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9ub2RlX21vZHVsZXMvX2NvcmUtanNAMi41LjNAY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX3NwZWNpZXMtY29uc3RydWN0b3IuanNcbi8vIG1vZHVsZSBpZCA9IDcyXG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsInZhciBjdHggPSByZXF1aXJlKCcuL19jdHgnKTtcbnZhciBpbnZva2UgPSByZXF1aXJlKCcuL19pbnZva2UnKTtcbnZhciBodG1sID0gcmVxdWlyZSgnLi9faHRtbCcpO1xudmFyIGNlbCA9IHJlcXVpcmUoJy4vX2RvbS1jcmVhdGUnKTtcbnZhciBnbG9iYWwgPSByZXF1aXJlKCcuL19nbG9iYWwnKTtcbnZhciBwcm9jZXNzID0gZ2xvYmFsLnByb2Nlc3M7XG52YXIgc2V0VGFzayA9IGdsb2JhbC5zZXRJbW1lZGlhdGU7XG52YXIgY2xlYXJUYXNrID0gZ2xvYmFsLmNsZWFySW1tZWRpYXRlO1xudmFyIE1lc3NhZ2VDaGFubmVsID0gZ2xvYmFsLk1lc3NhZ2VDaGFubmVsO1xudmFyIERpc3BhdGNoID0gZ2xvYmFsLkRpc3BhdGNoO1xudmFyIGNvdW50ZXIgPSAwO1xudmFyIHF1ZXVlID0ge307XG52YXIgT05SRUFEWVNUQVRFQ0hBTkdFID0gJ29ucmVhZHlzdGF0ZWNoYW5nZSc7XG52YXIgZGVmZXIsIGNoYW5uZWwsIHBvcnQ7XG52YXIgcnVuID0gZnVuY3Rpb24gKCkge1xuICB2YXIgaWQgPSArdGhpcztcbiAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLXByb3RvdHlwZS1idWlsdGluc1xuICBpZiAocXVldWUuaGFzT3duUHJvcGVydHkoaWQpKSB7XG4gICAgdmFyIGZuID0gcXVldWVbaWRdO1xuICAgIGRlbGV0ZSBxdWV1ZVtpZF07XG4gICAgZm4oKTtcbiAgfVxufTtcbnZhciBsaXN0ZW5lciA9IGZ1bmN0aW9uIChldmVudCkge1xuICBydW4uY2FsbChldmVudC5kYXRhKTtcbn07XG4vLyBOb2RlLmpzIDAuOSsgJiBJRTEwKyBoYXMgc2V0SW1tZWRpYXRlLCBvdGhlcndpc2U6XG5pZiAoIXNldFRhc2sgfHwgIWNsZWFyVGFzaykge1xuICBzZXRUYXNrID0gZnVuY3Rpb24gc2V0SW1tZWRpYXRlKGZuKSB7XG4gICAgdmFyIGFyZ3MgPSBbXTtcbiAgICB2YXIgaSA9IDE7XG4gICAgd2hpbGUgKGFyZ3VtZW50cy5sZW5ndGggPiBpKSBhcmdzLnB1c2goYXJndW1lbnRzW2krK10pO1xuICAgIHF1ZXVlWysrY291bnRlcl0gPSBmdW5jdGlvbiAoKSB7XG4gICAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tbmV3LWZ1bmNcbiAgICAgIGludm9rZSh0eXBlb2YgZm4gPT0gJ2Z1bmN0aW9uJyA/IGZuIDogRnVuY3Rpb24oZm4pLCBhcmdzKTtcbiAgICB9O1xuICAgIGRlZmVyKGNvdW50ZXIpO1xuICAgIHJldHVybiBjb3VudGVyO1xuICB9O1xuICBjbGVhclRhc2sgPSBmdW5jdGlvbiBjbGVhckltbWVkaWF0ZShpZCkge1xuICAgIGRlbGV0ZSBxdWV1ZVtpZF07XG4gIH07XG4gIC8vIE5vZGUuanMgMC44LVxuICBpZiAocmVxdWlyZSgnLi9fY29mJykocHJvY2VzcykgPT0gJ3Byb2Nlc3MnKSB7XG4gICAgZGVmZXIgPSBmdW5jdGlvbiAoaWQpIHtcbiAgICAgIHByb2Nlc3MubmV4dFRpY2soY3R4KHJ1biwgaWQsIDEpKTtcbiAgICB9O1xuICAvLyBTcGhlcmUgKEpTIGdhbWUgZW5naW5lKSBEaXNwYXRjaCBBUElcbiAgfSBlbHNlIGlmIChEaXNwYXRjaCAmJiBEaXNwYXRjaC5ub3cpIHtcbiAgICBkZWZlciA9IGZ1bmN0aW9uIChpZCkge1xuICAgICAgRGlzcGF0Y2gubm93KGN0eChydW4sIGlkLCAxKSk7XG4gICAgfTtcbiAgLy8gQnJvd3NlcnMgd2l0aCBNZXNzYWdlQ2hhbm5lbCwgaW5jbHVkZXMgV2ViV29ya2Vyc1xuICB9IGVsc2UgaWYgKE1lc3NhZ2VDaGFubmVsKSB7XG4gICAgY2hhbm5lbCA9IG5ldyBNZXNzYWdlQ2hhbm5lbCgpO1xuICAgIHBvcnQgPSBjaGFubmVsLnBvcnQyO1xuICAgIGNoYW5uZWwucG9ydDEub25tZXNzYWdlID0gbGlzdGVuZXI7XG4gICAgZGVmZXIgPSBjdHgocG9ydC5wb3N0TWVzc2FnZSwgcG9ydCwgMSk7XG4gIC8vIEJyb3dzZXJzIHdpdGggcG9zdE1lc3NhZ2UsIHNraXAgV2ViV29ya2Vyc1xuICAvLyBJRTggaGFzIHBvc3RNZXNzYWdlLCBidXQgaXQncyBzeW5jICYgdHlwZW9mIGl0cyBwb3N0TWVzc2FnZSBpcyAnb2JqZWN0J1xuICB9IGVsc2UgaWYgKGdsb2JhbC5hZGRFdmVudExpc3RlbmVyICYmIHR5cGVvZiBwb3N0TWVzc2FnZSA9PSAnZnVuY3Rpb24nICYmICFnbG9iYWwuaW1wb3J0U2NyaXB0cykge1xuICAgIGRlZmVyID0gZnVuY3Rpb24gKGlkKSB7XG4gICAgICBnbG9iYWwucG9zdE1lc3NhZ2UoaWQgKyAnJywgJyonKTtcbiAgICB9O1xuICAgIGdsb2JhbC5hZGRFdmVudExpc3RlbmVyKCdtZXNzYWdlJywgbGlzdGVuZXIsIGZhbHNlKTtcbiAgLy8gSUU4LVxuICB9IGVsc2UgaWYgKE9OUkVBRFlTVEFURUNIQU5HRSBpbiBjZWwoJ3NjcmlwdCcpKSB7XG4gICAgZGVmZXIgPSBmdW5jdGlvbiAoaWQpIHtcbiAgICAgIGh0bWwuYXBwZW5kQ2hpbGQoY2VsKCdzY3JpcHQnKSlbT05SRUFEWVNUQVRFQ0hBTkdFXSA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgaHRtbC5yZW1vdmVDaGlsZCh0aGlzKTtcbiAgICAgICAgcnVuLmNhbGwoaWQpO1xuICAgICAgfTtcbiAgICB9O1xuICAvLyBSZXN0IG9sZCBicm93c2Vyc1xuICB9IGVsc2Uge1xuICAgIGRlZmVyID0gZnVuY3Rpb24gKGlkKSB7XG4gICAgICBzZXRUaW1lb3V0KGN0eChydW4sIGlkLCAxKSwgMCk7XG4gICAgfTtcbiAgfVxufVxubW9kdWxlLmV4cG9ydHMgPSB7XG4gIHNldDogc2V0VGFzayxcbiAgY2xlYXI6IGNsZWFyVGFza1xufTtcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vbm9kZV9tb2R1bGVzL19jb3JlLWpzQDIuNS4zQGNvcmUtanMvbGlicmFyeS9tb2R1bGVzL190YXNrLmpzXG4vLyBtb2R1bGUgaWQgPSA3M1xuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJtb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChleGVjKSB7XG4gIHRyeSB7XG4gICAgcmV0dXJuIHsgZTogZmFsc2UsIHY6IGV4ZWMoKSB9O1xuICB9IGNhdGNoIChlKSB7XG4gICAgcmV0dXJuIHsgZTogdHJ1ZSwgdjogZSB9O1xuICB9XG59O1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9ub2RlX21vZHVsZXMvX2NvcmUtanNAMi41LjNAY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX3BlcmZvcm0uanNcbi8vIG1vZHVsZSBpZCA9IDc0XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsInZhciBhbk9iamVjdCA9IHJlcXVpcmUoJy4vX2FuLW9iamVjdCcpO1xudmFyIGlzT2JqZWN0ID0gcmVxdWlyZSgnLi9faXMtb2JqZWN0Jyk7XG52YXIgbmV3UHJvbWlzZUNhcGFiaWxpdHkgPSByZXF1aXJlKCcuL19uZXctcHJvbWlzZS1jYXBhYmlsaXR5Jyk7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKEMsIHgpIHtcbiAgYW5PYmplY3QoQyk7XG4gIGlmIChpc09iamVjdCh4KSAmJiB4LmNvbnN0cnVjdG9yID09PSBDKSByZXR1cm4geDtcbiAgdmFyIHByb21pc2VDYXBhYmlsaXR5ID0gbmV3UHJvbWlzZUNhcGFiaWxpdHkuZihDKTtcbiAgdmFyIHJlc29sdmUgPSBwcm9taXNlQ2FwYWJpbGl0eS5yZXNvbHZlO1xuICByZXNvbHZlKHgpO1xuICByZXR1cm4gcHJvbWlzZUNhcGFiaWxpdHkucHJvbWlzZTtcbn07XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL25vZGVfbW9kdWxlcy9fY29yZS1qc0AyLjUuM0Bjb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9fcHJvbWlzZS1yZXNvbHZlLmpzXG4vLyBtb2R1bGUgaWQgPSA3NVxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCIndXNlIHN0cmljdCc7XG52YXIgZ2xvYmFsID0gcmVxdWlyZSgnLi9fZ2xvYmFsJyk7XG52YXIgY29yZSA9IHJlcXVpcmUoJy4vX2NvcmUnKTtcbnZhciBkUCA9IHJlcXVpcmUoJy4vX29iamVjdC1kcCcpO1xudmFyIERFU0NSSVBUT1JTID0gcmVxdWlyZSgnLi9fZGVzY3JpcHRvcnMnKTtcbnZhciBTUEVDSUVTID0gcmVxdWlyZSgnLi9fd2tzJykoJ3NwZWNpZXMnKTtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoS0VZKSB7XG4gIHZhciBDID0gdHlwZW9mIGNvcmVbS0VZXSA9PSAnZnVuY3Rpb24nID8gY29yZVtLRVldIDogZ2xvYmFsW0tFWV07XG4gIGlmIChERVNDUklQVE9SUyAmJiBDICYmICFDW1NQRUNJRVNdKSBkUC5mKEMsIFNQRUNJRVMsIHtcbiAgICBjb25maWd1cmFibGU6IHRydWUsXG4gICAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiB0aGlzOyB9XG4gIH0pO1xufTtcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vbm9kZV9tb2R1bGVzL19jb3JlLWpzQDIuNS4zQGNvcmUtanMvbGlicmFyeS9tb2R1bGVzL19zZXQtc3BlY2llcy5qc1xuLy8gbW9kdWxlIGlkID0gNzZcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwidmFyIElURVJBVE9SID0gcmVxdWlyZSgnLi9fd2tzJykoJ2l0ZXJhdG9yJyk7XG52YXIgU0FGRV9DTE9TSU5HID0gZmFsc2U7XG5cbnRyeSB7XG4gIHZhciByaXRlciA9IFs3XVtJVEVSQVRPUl0oKTtcbiAgcml0ZXJbJ3JldHVybiddID0gZnVuY3Rpb24gKCkgeyBTQUZFX0NMT1NJTkcgPSB0cnVlOyB9O1xuICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tdGhyb3ctbGl0ZXJhbFxuICBBcnJheS5mcm9tKHJpdGVyLCBmdW5jdGlvbiAoKSB7IHRocm93IDI7IH0pO1xufSBjYXRjaCAoZSkgeyAvKiBlbXB0eSAqLyB9XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGV4ZWMsIHNraXBDbG9zaW5nKSB7XG4gIGlmICghc2tpcENsb3NpbmcgJiYgIVNBRkVfQ0xPU0lORykgcmV0dXJuIGZhbHNlO1xuICB2YXIgc2FmZSA9IGZhbHNlO1xuICB0cnkge1xuICAgIHZhciBhcnIgPSBbN107XG4gICAgdmFyIGl0ZXIgPSBhcnJbSVRFUkFUT1JdKCk7XG4gICAgaXRlci5uZXh0ID0gZnVuY3Rpb24gKCkgeyByZXR1cm4geyBkb25lOiBzYWZlID0gdHJ1ZSB9OyB9O1xuICAgIGFycltJVEVSQVRPUl0gPSBmdW5jdGlvbiAoKSB7IHJldHVybiBpdGVyOyB9O1xuICAgIGV4ZWMoYXJyKTtcbiAgfSBjYXRjaCAoZSkgeyAvKiBlbXB0eSAqLyB9XG4gIHJldHVybiBzYWZlO1xufTtcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vbm9kZV9tb2R1bGVzL19jb3JlLWpzQDIuNS4zQGNvcmUtanMvbGlicmFyeS9tb2R1bGVzL19pdGVyLWRldGVjdC5qc1xuLy8gbW9kdWxlIGlkID0gNzdcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiZXhwb3J0cy5mID0gT2JqZWN0LmdldE93blByb3BlcnR5U3ltYm9scztcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vbm9kZV9tb2R1bGVzL19jb3JlLWpzQDIuNS4zQGNvcmUtanMvbGlicmFyeS9tb2R1bGVzL19vYmplY3QtZ29wcy5qc1xuLy8gbW9kdWxlIGlkID0gNzhcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiLy8gNy4yLjIgSXNBcnJheShhcmd1bWVudClcbnZhciBjb2YgPSByZXF1aXJlKCcuL19jb2YnKTtcbm1vZHVsZS5leHBvcnRzID0gQXJyYXkuaXNBcnJheSB8fCBmdW5jdGlvbiBpc0FycmF5KGFyZykge1xuICByZXR1cm4gY29mKGFyZykgPT0gJ0FycmF5Jztcbn07XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL25vZGVfbW9kdWxlcy9fY29yZS1qc0AyLjUuM0Bjb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9faXMtYXJyYXkuanNcbi8vIG1vZHVsZSBpZCA9IDc5XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIi8vIDE5LjEuMi43IC8gMTUuMi4zLjQgT2JqZWN0LmdldE93blByb3BlcnR5TmFtZXMoTylcbnZhciAka2V5cyA9IHJlcXVpcmUoJy4vX29iamVjdC1rZXlzLWludGVybmFsJyk7XG52YXIgaGlkZGVuS2V5cyA9IHJlcXVpcmUoJy4vX2VudW0tYnVnLWtleXMnKS5jb25jYXQoJ2xlbmd0aCcsICdwcm90b3R5cGUnKTtcblxuZXhwb3J0cy5mID0gT2JqZWN0LmdldE93blByb3BlcnR5TmFtZXMgfHwgZnVuY3Rpb24gZ2V0T3duUHJvcGVydHlOYW1lcyhPKSB7XG4gIHJldHVybiAka2V5cyhPLCBoaWRkZW5LZXlzKTtcbn07XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL25vZGVfbW9kdWxlcy9fY29yZS1qc0AyLjUuM0Bjb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9fb2JqZWN0LWdvcG4uanNcbi8vIG1vZHVsZSBpZCA9IDgwXG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsInZhciBwSUUgPSByZXF1aXJlKCcuL19vYmplY3QtcGllJyk7XG52YXIgY3JlYXRlRGVzYyA9IHJlcXVpcmUoJy4vX3Byb3BlcnR5LWRlc2MnKTtcbnZhciB0b0lPYmplY3QgPSByZXF1aXJlKCcuL190by1pb2JqZWN0Jyk7XG52YXIgdG9QcmltaXRpdmUgPSByZXF1aXJlKCcuL190by1wcmltaXRpdmUnKTtcbnZhciBoYXMgPSByZXF1aXJlKCcuL19oYXMnKTtcbnZhciBJRThfRE9NX0RFRklORSA9IHJlcXVpcmUoJy4vX2llOC1kb20tZGVmaW5lJyk7XG52YXIgZ09QRCA9IE9iamVjdC5nZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3I7XG5cbmV4cG9ydHMuZiA9IHJlcXVpcmUoJy4vX2Rlc2NyaXB0b3JzJykgPyBnT1BEIDogZnVuY3Rpb24gZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yKE8sIFApIHtcbiAgTyA9IHRvSU9iamVjdChPKTtcbiAgUCA9IHRvUHJpbWl0aXZlKFAsIHRydWUpO1xuICBpZiAoSUU4X0RPTV9ERUZJTkUpIHRyeSB7XG4gICAgcmV0dXJuIGdPUEQoTywgUCk7XG4gIH0gY2F0Y2ggKGUpIHsgLyogZW1wdHkgKi8gfVxuICBpZiAoaGFzKE8sIFApKSByZXR1cm4gY3JlYXRlRGVzYyghcElFLmYuY2FsbChPLCBQKSwgT1tQXSk7XG59O1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9ub2RlX21vZHVsZXMvX2NvcmUtanNAMi41LjNAY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX29iamVjdC1nb3BkLmpzXG4vLyBtb2R1bGUgaWQgPSA4MVxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJcInVzZSBzdHJpY3RcIjtcblxuZXhwb3J0cy5fX2VzTW9kdWxlID0gdHJ1ZTtcblxudmFyIF9pdGVyYXRvciA9IHJlcXVpcmUoXCIuLi9jb3JlLWpzL3N5bWJvbC9pdGVyYXRvclwiKTtcblxudmFyIF9pdGVyYXRvcjIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9pdGVyYXRvcik7XG5cbnZhciBfc3ltYm9sID0gcmVxdWlyZShcIi4uL2NvcmUtanMvc3ltYm9sXCIpO1xuXG52YXIgX3N5bWJvbDIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9zeW1ib2wpO1xuXG52YXIgX3R5cGVvZiA9IHR5cGVvZiBfc3ltYm9sMi5kZWZhdWx0ID09PSBcImZ1bmN0aW9uXCIgJiYgdHlwZW9mIF9pdGVyYXRvcjIuZGVmYXVsdCA9PT0gXCJzeW1ib2xcIiA/IGZ1bmN0aW9uIChvYmopIHsgcmV0dXJuIHR5cGVvZiBvYmo7IH0gOiBmdW5jdGlvbiAob2JqKSB7IHJldHVybiBvYmogJiYgdHlwZW9mIF9zeW1ib2wyLmRlZmF1bHQgPT09IFwiZnVuY3Rpb25cIiAmJiBvYmouY29uc3RydWN0b3IgPT09IF9zeW1ib2wyLmRlZmF1bHQgJiYgb2JqICE9PSBfc3ltYm9sMi5kZWZhdWx0LnByb3RvdHlwZSA/IFwic3ltYm9sXCIgOiB0eXBlb2Ygb2JqOyB9O1xuXG5mdW5jdGlvbiBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KG9iaikgeyByZXR1cm4gb2JqICYmIG9iai5fX2VzTW9kdWxlID8gb2JqIDogeyBkZWZhdWx0OiBvYmogfTsgfVxuXG5leHBvcnRzLmRlZmF1bHQgPSB0eXBlb2YgX3N5bWJvbDIuZGVmYXVsdCA9PT0gXCJmdW5jdGlvblwiICYmIF90eXBlb2YoX2l0ZXJhdG9yMi5kZWZhdWx0KSA9PT0gXCJzeW1ib2xcIiA/IGZ1bmN0aW9uIChvYmopIHtcbiAgcmV0dXJuIHR5cGVvZiBvYmogPT09IFwidW5kZWZpbmVkXCIgPyBcInVuZGVmaW5lZFwiIDogX3R5cGVvZihvYmopO1xufSA6IGZ1bmN0aW9uIChvYmopIHtcbiAgcmV0dXJuIG9iaiAmJiB0eXBlb2YgX3N5bWJvbDIuZGVmYXVsdCA9PT0gXCJmdW5jdGlvblwiICYmIG9iai5jb25zdHJ1Y3RvciA9PT0gX3N5bWJvbDIuZGVmYXVsdCAmJiBvYmogIT09IF9zeW1ib2wyLmRlZmF1bHQucHJvdG90eXBlID8gXCJzeW1ib2xcIiA6IHR5cGVvZiBvYmogPT09IFwidW5kZWZpbmVkXCIgPyBcInVuZGVmaW5lZFwiIDogX3R5cGVvZihvYmopO1xufTtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL25vZGVfbW9kdWxlcy9fYmFiZWwtcnVudGltZUA2LjI2LjBAYmFiZWwtcnVudGltZS9oZWxwZXJzL3R5cGVvZi5qc1xuLy8gbW9kdWxlIGlkID0gODJcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiJ3VzZSBzdHJpY3QnO1xudmFyIGRQID0gcmVxdWlyZSgnLi9fb2JqZWN0LWRwJykuZjtcbnZhciBjcmVhdGUgPSByZXF1aXJlKCcuL19vYmplY3QtY3JlYXRlJyk7XG52YXIgcmVkZWZpbmVBbGwgPSByZXF1aXJlKCcuL19yZWRlZmluZS1hbGwnKTtcbnZhciBjdHggPSByZXF1aXJlKCcuL19jdHgnKTtcbnZhciBhbkluc3RhbmNlID0gcmVxdWlyZSgnLi9fYW4taW5zdGFuY2UnKTtcbnZhciBmb3JPZiA9IHJlcXVpcmUoJy4vX2Zvci1vZicpO1xudmFyICRpdGVyRGVmaW5lID0gcmVxdWlyZSgnLi9faXRlci1kZWZpbmUnKTtcbnZhciBzdGVwID0gcmVxdWlyZSgnLi9faXRlci1zdGVwJyk7XG52YXIgc2V0U3BlY2llcyA9IHJlcXVpcmUoJy4vX3NldC1zcGVjaWVzJyk7XG52YXIgREVTQ1JJUFRPUlMgPSByZXF1aXJlKCcuL19kZXNjcmlwdG9ycycpO1xudmFyIGZhc3RLZXkgPSByZXF1aXJlKCcuL19tZXRhJykuZmFzdEtleTtcbnZhciB2YWxpZGF0ZSA9IHJlcXVpcmUoJy4vX3ZhbGlkYXRlLWNvbGxlY3Rpb24nKTtcbnZhciBTSVpFID0gREVTQ1JJUFRPUlMgPyAnX3MnIDogJ3NpemUnO1xuXG52YXIgZ2V0RW50cnkgPSBmdW5jdGlvbiAodGhhdCwga2V5KSB7XG4gIC8vIGZhc3QgY2FzZVxuICB2YXIgaW5kZXggPSBmYXN0S2V5KGtleSk7XG4gIHZhciBlbnRyeTtcbiAgaWYgKGluZGV4ICE9PSAnRicpIHJldHVybiB0aGF0Ll9pW2luZGV4XTtcbiAgLy8gZnJvemVuIG9iamVjdCBjYXNlXG4gIGZvciAoZW50cnkgPSB0aGF0Ll9mOyBlbnRyeTsgZW50cnkgPSBlbnRyeS5uKSB7XG4gICAgaWYgKGVudHJ5LmsgPT0ga2V5KSByZXR1cm4gZW50cnk7XG4gIH1cbn07XG5cbm1vZHVsZS5leHBvcnRzID0ge1xuICBnZXRDb25zdHJ1Y3RvcjogZnVuY3Rpb24gKHdyYXBwZXIsIE5BTUUsIElTX01BUCwgQURERVIpIHtcbiAgICB2YXIgQyA9IHdyYXBwZXIoZnVuY3Rpb24gKHRoYXQsIGl0ZXJhYmxlKSB7XG4gICAgICBhbkluc3RhbmNlKHRoYXQsIEMsIE5BTUUsICdfaScpO1xuICAgICAgdGhhdC5fdCA9IE5BTUU7ICAgICAgICAgLy8gY29sbGVjdGlvbiB0eXBlXG4gICAgICB0aGF0Ll9pID0gY3JlYXRlKG51bGwpOyAvLyBpbmRleFxuICAgICAgdGhhdC5fZiA9IHVuZGVmaW5lZDsgICAgLy8gZmlyc3QgZW50cnlcbiAgICAgIHRoYXQuX2wgPSB1bmRlZmluZWQ7ICAgIC8vIGxhc3QgZW50cnlcbiAgICAgIHRoYXRbU0laRV0gPSAwOyAgICAgICAgIC8vIHNpemVcbiAgICAgIGlmIChpdGVyYWJsZSAhPSB1bmRlZmluZWQpIGZvck9mKGl0ZXJhYmxlLCBJU19NQVAsIHRoYXRbQURERVJdLCB0aGF0KTtcbiAgICB9KTtcbiAgICByZWRlZmluZUFsbChDLnByb3RvdHlwZSwge1xuICAgICAgLy8gMjMuMS4zLjEgTWFwLnByb3RvdHlwZS5jbGVhcigpXG4gICAgICAvLyAyMy4yLjMuMiBTZXQucHJvdG90eXBlLmNsZWFyKClcbiAgICAgIGNsZWFyOiBmdW5jdGlvbiBjbGVhcigpIHtcbiAgICAgICAgZm9yICh2YXIgdGhhdCA9IHZhbGlkYXRlKHRoaXMsIE5BTUUpLCBkYXRhID0gdGhhdC5faSwgZW50cnkgPSB0aGF0Ll9mOyBlbnRyeTsgZW50cnkgPSBlbnRyeS5uKSB7XG4gICAgICAgICAgZW50cnkuciA9IHRydWU7XG4gICAgICAgICAgaWYgKGVudHJ5LnApIGVudHJ5LnAgPSBlbnRyeS5wLm4gPSB1bmRlZmluZWQ7XG4gICAgICAgICAgZGVsZXRlIGRhdGFbZW50cnkuaV07XG4gICAgICAgIH1cbiAgICAgICAgdGhhdC5fZiA9IHRoYXQuX2wgPSB1bmRlZmluZWQ7XG4gICAgICAgIHRoYXRbU0laRV0gPSAwO1xuICAgICAgfSxcbiAgICAgIC8vIDIzLjEuMy4zIE1hcC5wcm90b3R5cGUuZGVsZXRlKGtleSlcbiAgICAgIC8vIDIzLjIuMy40IFNldC5wcm90b3R5cGUuZGVsZXRlKHZhbHVlKVxuICAgICAgJ2RlbGV0ZSc6IGZ1bmN0aW9uIChrZXkpIHtcbiAgICAgICAgdmFyIHRoYXQgPSB2YWxpZGF0ZSh0aGlzLCBOQU1FKTtcbiAgICAgICAgdmFyIGVudHJ5ID0gZ2V0RW50cnkodGhhdCwga2V5KTtcbiAgICAgICAgaWYgKGVudHJ5KSB7XG4gICAgICAgICAgdmFyIG5leHQgPSBlbnRyeS5uO1xuICAgICAgICAgIHZhciBwcmV2ID0gZW50cnkucDtcbiAgICAgICAgICBkZWxldGUgdGhhdC5faVtlbnRyeS5pXTtcbiAgICAgICAgICBlbnRyeS5yID0gdHJ1ZTtcbiAgICAgICAgICBpZiAocHJldikgcHJldi5uID0gbmV4dDtcbiAgICAgICAgICBpZiAobmV4dCkgbmV4dC5wID0gcHJldjtcbiAgICAgICAgICBpZiAodGhhdC5fZiA9PSBlbnRyeSkgdGhhdC5fZiA9IG5leHQ7XG4gICAgICAgICAgaWYgKHRoYXQuX2wgPT0gZW50cnkpIHRoYXQuX2wgPSBwcmV2O1xuICAgICAgICAgIHRoYXRbU0laRV0tLTtcbiAgICAgICAgfSByZXR1cm4gISFlbnRyeTtcbiAgICAgIH0sXG4gICAgICAvLyAyMy4yLjMuNiBTZXQucHJvdG90eXBlLmZvckVhY2goY2FsbGJhY2tmbiwgdGhpc0FyZyA9IHVuZGVmaW5lZClcbiAgICAgIC8vIDIzLjEuMy41IE1hcC5wcm90b3R5cGUuZm9yRWFjaChjYWxsYmFja2ZuLCB0aGlzQXJnID0gdW5kZWZpbmVkKVxuICAgICAgZm9yRWFjaDogZnVuY3Rpb24gZm9yRWFjaChjYWxsYmFja2ZuIC8qICwgdGhhdCA9IHVuZGVmaW5lZCAqLykge1xuICAgICAgICB2YWxpZGF0ZSh0aGlzLCBOQU1FKTtcbiAgICAgICAgdmFyIGYgPSBjdHgoY2FsbGJhY2tmbiwgYXJndW1lbnRzLmxlbmd0aCA+IDEgPyBhcmd1bWVudHNbMV0gOiB1bmRlZmluZWQsIDMpO1xuICAgICAgICB2YXIgZW50cnk7XG4gICAgICAgIHdoaWxlIChlbnRyeSA9IGVudHJ5ID8gZW50cnkubiA6IHRoaXMuX2YpIHtcbiAgICAgICAgICBmKGVudHJ5LnYsIGVudHJ5LmssIHRoaXMpO1xuICAgICAgICAgIC8vIHJldmVydCB0byB0aGUgbGFzdCBleGlzdGluZyBlbnRyeVxuICAgICAgICAgIHdoaWxlIChlbnRyeSAmJiBlbnRyeS5yKSBlbnRyeSA9IGVudHJ5LnA7XG4gICAgICAgIH1cbiAgICAgIH0sXG4gICAgICAvLyAyMy4xLjMuNyBNYXAucHJvdG90eXBlLmhhcyhrZXkpXG4gICAgICAvLyAyMy4yLjMuNyBTZXQucHJvdG90eXBlLmhhcyh2YWx1ZSlcbiAgICAgIGhhczogZnVuY3Rpb24gaGFzKGtleSkge1xuICAgICAgICByZXR1cm4gISFnZXRFbnRyeSh2YWxpZGF0ZSh0aGlzLCBOQU1FKSwga2V5KTtcbiAgICAgIH1cbiAgICB9KTtcbiAgICBpZiAoREVTQ1JJUFRPUlMpIGRQKEMucHJvdG90eXBlLCAnc2l6ZScsIHtcbiAgICAgIGdldDogZnVuY3Rpb24gKCkge1xuICAgICAgICByZXR1cm4gdmFsaWRhdGUodGhpcywgTkFNRSlbU0laRV07XG4gICAgICB9XG4gICAgfSk7XG4gICAgcmV0dXJuIEM7XG4gIH0sXG4gIGRlZjogZnVuY3Rpb24gKHRoYXQsIGtleSwgdmFsdWUpIHtcbiAgICB2YXIgZW50cnkgPSBnZXRFbnRyeSh0aGF0LCBrZXkpO1xuICAgIHZhciBwcmV2LCBpbmRleDtcbiAgICAvLyBjaGFuZ2UgZXhpc3RpbmcgZW50cnlcbiAgICBpZiAoZW50cnkpIHtcbiAgICAgIGVudHJ5LnYgPSB2YWx1ZTtcbiAgICAvLyBjcmVhdGUgbmV3IGVudHJ5XG4gICAgfSBlbHNlIHtcbiAgICAgIHRoYXQuX2wgPSBlbnRyeSA9IHtcbiAgICAgICAgaTogaW5kZXggPSBmYXN0S2V5KGtleSwgdHJ1ZSksIC8vIDwtIGluZGV4XG4gICAgICAgIGs6IGtleSwgICAgICAgICAgICAgICAgICAgICAgICAvLyA8LSBrZXlcbiAgICAgICAgdjogdmFsdWUsICAgICAgICAgICAgICAgICAgICAgIC8vIDwtIHZhbHVlXG4gICAgICAgIHA6IHByZXYgPSB0aGF0Ll9sLCAgICAgICAgICAgICAvLyA8LSBwcmV2aW91cyBlbnRyeVxuICAgICAgICBuOiB1bmRlZmluZWQsICAgICAgICAgICAgICAgICAgLy8gPC0gbmV4dCBlbnRyeVxuICAgICAgICByOiBmYWxzZSAgICAgICAgICAgICAgICAgICAgICAgLy8gPC0gcmVtb3ZlZFxuICAgICAgfTtcbiAgICAgIGlmICghdGhhdC5fZikgdGhhdC5fZiA9IGVudHJ5O1xuICAgICAgaWYgKHByZXYpIHByZXYubiA9IGVudHJ5O1xuICAgICAgdGhhdFtTSVpFXSsrO1xuICAgICAgLy8gYWRkIHRvIGluZGV4XG4gICAgICBpZiAoaW5kZXggIT09ICdGJykgdGhhdC5faVtpbmRleF0gPSBlbnRyeTtcbiAgICB9IHJldHVybiB0aGF0O1xuICB9LFxuICBnZXRFbnRyeTogZ2V0RW50cnksXG4gIHNldFN0cm9uZzogZnVuY3Rpb24gKEMsIE5BTUUsIElTX01BUCkge1xuICAgIC8vIGFkZCAua2V5cywgLnZhbHVlcywgLmVudHJpZXMsIFtAQGl0ZXJhdG9yXVxuICAgIC8vIDIzLjEuMy40LCAyMy4xLjMuOCwgMjMuMS4zLjExLCAyMy4xLjMuMTIsIDIzLjIuMy41LCAyMy4yLjMuOCwgMjMuMi4zLjEwLCAyMy4yLjMuMTFcbiAgICAkaXRlckRlZmluZShDLCBOQU1FLCBmdW5jdGlvbiAoaXRlcmF0ZWQsIGtpbmQpIHtcbiAgICAgIHRoaXMuX3QgPSB2YWxpZGF0ZShpdGVyYXRlZCwgTkFNRSk7IC8vIHRhcmdldFxuICAgICAgdGhpcy5fayA9IGtpbmQ7ICAgICAgICAgICAgICAgICAgICAgLy8ga2luZFxuICAgICAgdGhpcy5fbCA9IHVuZGVmaW5lZDsgICAgICAgICAgICAgICAgLy8gcHJldmlvdXNcbiAgICB9LCBmdW5jdGlvbiAoKSB7XG4gICAgICB2YXIgdGhhdCA9IHRoaXM7XG4gICAgICB2YXIga2luZCA9IHRoYXQuX2s7XG4gICAgICB2YXIgZW50cnkgPSB0aGF0Ll9sO1xuICAgICAgLy8gcmV2ZXJ0IHRvIHRoZSBsYXN0IGV4aXN0aW5nIGVudHJ5XG4gICAgICB3aGlsZSAoZW50cnkgJiYgZW50cnkucikgZW50cnkgPSBlbnRyeS5wO1xuICAgICAgLy8gZ2V0IG5leHQgZW50cnlcbiAgICAgIGlmICghdGhhdC5fdCB8fCAhKHRoYXQuX2wgPSBlbnRyeSA9IGVudHJ5ID8gZW50cnkubiA6IHRoYXQuX3QuX2YpKSB7XG4gICAgICAgIC8vIG9yIGZpbmlzaCB0aGUgaXRlcmF0aW9uXG4gICAgICAgIHRoYXQuX3QgPSB1bmRlZmluZWQ7XG4gICAgICAgIHJldHVybiBzdGVwKDEpO1xuICAgICAgfVxuICAgICAgLy8gcmV0dXJuIHN0ZXAgYnkga2luZFxuICAgICAgaWYgKGtpbmQgPT0gJ2tleXMnKSByZXR1cm4gc3RlcCgwLCBlbnRyeS5rKTtcbiAgICAgIGlmIChraW5kID09ICd2YWx1ZXMnKSByZXR1cm4gc3RlcCgwLCBlbnRyeS52KTtcbiAgICAgIHJldHVybiBzdGVwKDAsIFtlbnRyeS5rLCBlbnRyeS52XSk7XG4gICAgfSwgSVNfTUFQID8gJ2VudHJpZXMnIDogJ3ZhbHVlcycsICFJU19NQVAsIHRydWUpO1xuXG4gICAgLy8gYWRkIFtAQHNwZWNpZXNdLCAyMy4xLjIuMiwgMjMuMi4yLjJcbiAgICBzZXRTcGVjaWVzKE5BTUUpO1xuICB9XG59O1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9ub2RlX21vZHVsZXMvX2NvcmUtanNAMi41LjNAY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX2NvbGxlY3Rpb24tc3Ryb25nLmpzXG4vLyBtb2R1bGUgaWQgPSA4M1xuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCIndXNlIHN0cmljdCc7XG52YXIgZ2xvYmFsID0gcmVxdWlyZSgnLi9fZ2xvYmFsJyk7XG52YXIgJGV4cG9ydCA9IHJlcXVpcmUoJy4vX2V4cG9ydCcpO1xudmFyIG1ldGEgPSByZXF1aXJlKCcuL19tZXRhJyk7XG52YXIgZmFpbHMgPSByZXF1aXJlKCcuL19mYWlscycpO1xudmFyIGhpZGUgPSByZXF1aXJlKCcuL19oaWRlJyk7XG52YXIgcmVkZWZpbmVBbGwgPSByZXF1aXJlKCcuL19yZWRlZmluZS1hbGwnKTtcbnZhciBmb3JPZiA9IHJlcXVpcmUoJy4vX2Zvci1vZicpO1xudmFyIGFuSW5zdGFuY2UgPSByZXF1aXJlKCcuL19hbi1pbnN0YW5jZScpO1xudmFyIGlzT2JqZWN0ID0gcmVxdWlyZSgnLi9faXMtb2JqZWN0Jyk7XG52YXIgc2V0VG9TdHJpbmdUYWcgPSByZXF1aXJlKCcuL19zZXQtdG8tc3RyaW5nLXRhZycpO1xudmFyIGRQID0gcmVxdWlyZSgnLi9fb2JqZWN0LWRwJykuZjtcbnZhciBlYWNoID0gcmVxdWlyZSgnLi9fYXJyYXktbWV0aG9kcycpKDApO1xudmFyIERFU0NSSVBUT1JTID0gcmVxdWlyZSgnLi9fZGVzY3JpcHRvcnMnKTtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoTkFNRSwgd3JhcHBlciwgbWV0aG9kcywgY29tbW9uLCBJU19NQVAsIElTX1dFQUspIHtcbiAgdmFyIEJhc2UgPSBnbG9iYWxbTkFNRV07XG4gIHZhciBDID0gQmFzZTtcbiAgdmFyIEFEREVSID0gSVNfTUFQID8gJ3NldCcgOiAnYWRkJztcbiAgdmFyIHByb3RvID0gQyAmJiBDLnByb3RvdHlwZTtcbiAgdmFyIE8gPSB7fTtcbiAgaWYgKCFERVNDUklQVE9SUyB8fCB0eXBlb2YgQyAhPSAnZnVuY3Rpb24nIHx8ICEoSVNfV0VBSyB8fCBwcm90by5mb3JFYWNoICYmICFmYWlscyhmdW5jdGlvbiAoKSB7XG4gICAgbmV3IEMoKS5lbnRyaWVzKCkubmV4dCgpO1xuICB9KSkpIHtcbiAgICAvLyBjcmVhdGUgY29sbGVjdGlvbiBjb25zdHJ1Y3RvclxuICAgIEMgPSBjb21tb24uZ2V0Q29uc3RydWN0b3Iod3JhcHBlciwgTkFNRSwgSVNfTUFQLCBBRERFUik7XG4gICAgcmVkZWZpbmVBbGwoQy5wcm90b3R5cGUsIG1ldGhvZHMpO1xuICAgIG1ldGEuTkVFRCA9IHRydWU7XG4gIH0gZWxzZSB7XG4gICAgQyA9IHdyYXBwZXIoZnVuY3Rpb24gKHRhcmdldCwgaXRlcmFibGUpIHtcbiAgICAgIGFuSW5zdGFuY2UodGFyZ2V0LCBDLCBOQU1FLCAnX2MnKTtcbiAgICAgIHRhcmdldC5fYyA9IG5ldyBCYXNlKCk7XG4gICAgICBpZiAoaXRlcmFibGUgIT0gdW5kZWZpbmVkKSBmb3JPZihpdGVyYWJsZSwgSVNfTUFQLCB0YXJnZXRbQURERVJdLCB0YXJnZXQpO1xuICAgIH0pO1xuICAgIGVhY2goJ2FkZCxjbGVhcixkZWxldGUsZm9yRWFjaCxnZXQsaGFzLHNldCxrZXlzLHZhbHVlcyxlbnRyaWVzLHRvSlNPTicuc3BsaXQoJywnKSwgZnVuY3Rpb24gKEtFWSkge1xuICAgICAgdmFyIElTX0FEREVSID0gS0VZID09ICdhZGQnIHx8IEtFWSA9PSAnc2V0JztcbiAgICAgIGlmIChLRVkgaW4gcHJvdG8gJiYgIShJU19XRUFLICYmIEtFWSA9PSAnY2xlYXInKSkgaGlkZShDLnByb3RvdHlwZSwgS0VZLCBmdW5jdGlvbiAoYSwgYikge1xuICAgICAgICBhbkluc3RhbmNlKHRoaXMsIEMsIEtFWSk7XG4gICAgICAgIGlmICghSVNfQURERVIgJiYgSVNfV0VBSyAmJiAhaXNPYmplY3QoYSkpIHJldHVybiBLRVkgPT0gJ2dldCcgPyB1bmRlZmluZWQgOiBmYWxzZTtcbiAgICAgICAgdmFyIHJlc3VsdCA9IHRoaXMuX2NbS0VZXShhID09PSAwID8gMCA6IGEsIGIpO1xuICAgICAgICByZXR1cm4gSVNfQURERVIgPyB0aGlzIDogcmVzdWx0O1xuICAgICAgfSk7XG4gICAgfSk7XG4gICAgSVNfV0VBSyB8fCBkUChDLnByb3RvdHlwZSwgJ3NpemUnLCB7XG4gICAgICBnZXQ6IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuX2Muc2l6ZTtcbiAgICAgIH1cbiAgICB9KTtcbiAgfVxuXG4gIHNldFRvU3RyaW5nVGFnKEMsIE5BTUUpO1xuXG4gIE9bTkFNRV0gPSBDO1xuICAkZXhwb3J0KCRleHBvcnQuRyArICRleHBvcnQuVyArICRleHBvcnQuRiwgTyk7XG5cbiAgaWYgKCFJU19XRUFLKSBjb21tb24uc2V0U3Ryb25nKEMsIE5BTUUsIElTX01BUCk7XG5cbiAgcmV0dXJuIEM7XG59O1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9ub2RlX21vZHVsZXMvX2NvcmUtanNAMi41LjNAY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX2NvbGxlY3Rpb24uanNcbi8vIG1vZHVsZSBpZCA9IDg0XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIi8vIGh0dHBzOi8vZ2l0aHViLmNvbS9EYXZpZEJydWFudC9NYXAtU2V0LnByb3RvdHlwZS50b0pTT05cbnZhciBjbGFzc29mID0gcmVxdWlyZSgnLi9fY2xhc3NvZicpO1xudmFyIGZyb20gPSByZXF1aXJlKCcuL19hcnJheS1mcm9tLWl0ZXJhYmxlJyk7XG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChOQU1FKSB7XG4gIHJldHVybiBmdW5jdGlvbiB0b0pTT04oKSB7XG4gICAgaWYgKGNsYXNzb2YodGhpcykgIT0gTkFNRSkgdGhyb3cgVHlwZUVycm9yKE5BTUUgKyBcIiN0b0pTT04gaXNuJ3QgZ2VuZXJpY1wiKTtcbiAgICByZXR1cm4gZnJvbSh0aGlzKTtcbiAgfTtcbn07XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL25vZGVfbW9kdWxlcy9fY29yZS1qc0AyLjUuM0Bjb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9fY29sbGVjdGlvbi10by1qc29uLmpzXG4vLyBtb2R1bGUgaWQgPSA4NVxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCIndXNlIHN0cmljdCc7XG4vLyBodHRwczovL3RjMzkuZ2l0aHViLmlvL3Byb3Bvc2FsLXNldG1hcC1vZmZyb20vXG52YXIgJGV4cG9ydCA9IHJlcXVpcmUoJy4vX2V4cG9ydCcpO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChDT0xMRUNUSU9OKSB7XG4gICRleHBvcnQoJGV4cG9ydC5TLCBDT0xMRUNUSU9OLCB7IG9mOiBmdW5jdGlvbiBvZigpIHtcbiAgICB2YXIgbGVuZ3RoID0gYXJndW1lbnRzLmxlbmd0aDtcbiAgICB2YXIgQSA9IG5ldyBBcnJheShsZW5ndGgpO1xuICAgIHdoaWxlIChsZW5ndGgtLSkgQVtsZW5ndGhdID0gYXJndW1lbnRzW2xlbmd0aF07XG4gICAgcmV0dXJuIG5ldyB0aGlzKEEpO1xuICB9IH0pO1xufTtcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vbm9kZV9tb2R1bGVzL19jb3JlLWpzQDIuNS4zQGNvcmUtanMvbGlicmFyeS9tb2R1bGVzL19zZXQtY29sbGVjdGlvbi1vZi5qc1xuLy8gbW9kdWxlIGlkID0gODZcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiJ3VzZSBzdHJpY3QnO1xuLy8gaHR0cHM6Ly90YzM5LmdpdGh1Yi5pby9wcm9wb3NhbC1zZXRtYXAtb2Zmcm9tL1xudmFyICRleHBvcnQgPSByZXF1aXJlKCcuL19leHBvcnQnKTtcbnZhciBhRnVuY3Rpb24gPSByZXF1aXJlKCcuL19hLWZ1bmN0aW9uJyk7XG52YXIgY3R4ID0gcmVxdWlyZSgnLi9fY3R4Jyk7XG52YXIgZm9yT2YgPSByZXF1aXJlKCcuL19mb3Itb2YnKTtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoQ09MTEVDVElPTikge1xuICAkZXhwb3J0KCRleHBvcnQuUywgQ09MTEVDVElPTiwgeyBmcm9tOiBmdW5jdGlvbiBmcm9tKHNvdXJjZSAvKiAsIG1hcEZuLCB0aGlzQXJnICovKSB7XG4gICAgdmFyIG1hcEZuID0gYXJndW1lbnRzWzFdO1xuICAgIHZhciBtYXBwaW5nLCBBLCBuLCBjYjtcbiAgICBhRnVuY3Rpb24odGhpcyk7XG4gICAgbWFwcGluZyA9IG1hcEZuICE9PSB1bmRlZmluZWQ7XG4gICAgaWYgKG1hcHBpbmcpIGFGdW5jdGlvbihtYXBGbik7XG4gICAgaWYgKHNvdXJjZSA9PSB1bmRlZmluZWQpIHJldHVybiBuZXcgdGhpcygpO1xuICAgIEEgPSBbXTtcbiAgICBpZiAobWFwcGluZykge1xuICAgICAgbiA9IDA7XG4gICAgICBjYiA9IGN0eChtYXBGbiwgYXJndW1lbnRzWzJdLCAyKTtcbiAgICAgIGZvck9mKHNvdXJjZSwgZmFsc2UsIGZ1bmN0aW9uIChuZXh0SXRlbSkge1xuICAgICAgICBBLnB1c2goY2IobmV4dEl0ZW0sIG4rKykpO1xuICAgICAgfSk7XG4gICAgfSBlbHNlIHtcbiAgICAgIGZvck9mKHNvdXJjZSwgZmFsc2UsIEEucHVzaCwgQSk7XG4gICAgfVxuICAgIHJldHVybiBuZXcgdGhpcyhBKTtcbiAgfSB9KTtcbn07XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL25vZGVfbW9kdWxlcy9fY29yZS1qc0AyLjUuM0Bjb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9fc2V0LWNvbGxlY3Rpb24tZnJvbS5qc1xuLy8gbW9kdWxlIGlkID0gODdcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiZXhwb3J0IGRlZmF1bHQgY2xhc3MgVGlsZVJlc29sdmVyIHtcclxuICAgIGNvbnN0cnVjdG9yKG1hdHJpeCwgdGlsZVNpemUgPSAxNikge1xyXG4gICAgICAgIHRoaXMubWF0cml4ID0gbWF0cml4O1xyXG4gICAgICAgIHRoaXMudGlsZVNpemUgPSB0aWxlU2l6ZTtcclxuICAgIH1cclxuXHJcbiAgICB0b0luZGV4KHBvcykge1xyXG4gICAgICAgIHJldHVybiBNYXRoLmZsb29yKHBvcyAvIHRoaXMudGlsZVNpemUpO1xyXG4gICAgfVxyXG5cclxuICAgIHRvSW5kZXhSYW5nZShwb3MxLCBwb3MyKSB7XHJcbiAgICAgICAgY29uc3QgcE1heCA9IE1hdGguY2VpbChwb3MyIC8gdGhpcy50aWxlU2l6ZSkgKiB0aGlzLnRpbGVTaXplO1xyXG4gICAgICAgIGxldCByYW5nZSA9IFtdO1xyXG4gICAgICAgIGxldCBwb3MgPSBwb3MxO1xyXG4gICAgICAgIGRvIHtcclxuICAgICAgICAgICAgcmFuZ2UucHVzaCh0aGlzLnRvSW5kZXgocG9zKSk7XHJcbiAgICAgICAgICAgIHBvcyArPSB0aGlzLnRpbGVTaXplO1xyXG4gICAgICAgIH0gd2hpbGUgKHBvcyA8IHBNYXgpO1xyXG5cclxuICAgICAgICByZXR1cm4gcmFuZ2U7XHJcbiAgICB9XHJcblxyXG4gICAgZ2V0QnlJbmRleChpbmRleFgsIGluZGV4WSkge1xyXG4gICAgICAgIGNvbnN0IHRpbGUgPSB0aGlzLm1hdHJpeC5nZXQoaW5kZXhYLCBpbmRleFkpO1xyXG4gICAgICAgIGNvbnN0IHgxID0gaW5kZXhYICogdGhpcy50aWxlU2l6ZTtcclxuICAgICAgICBjb25zdCB4MiA9IHgxICsgdGhpcy50aWxlU2l6ZTtcclxuICAgICAgICBjb25zdCB5MSA9IGluZGV4WSAqIHRoaXMudGlsZVNpemU7XHJcbiAgICAgICAgY29uc3QgeTIgPSB5MSArIHRoaXMudGlsZVNpemU7XHJcbiAgICAgICAgaWYgKHRpbGUpIHtcclxuICAgICAgICAgICAgcmV0dXJuIHtcclxuICAgICAgICAgICAgICAgIHRpbGUsXHJcbiAgICAgICAgICAgICAgICB4MSxcclxuICAgICAgICAgICAgICAgIHgyLFxyXG4gICAgICAgICAgICAgICAgeTEsXHJcbiAgICAgICAgICAgICAgICB5MlxyXG4gICAgICAgICAgICB9O1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBzZWFyY2hCeVBvc2l0aW9uKHBvc1gsIHBvc1kpIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5nZXRCeUluZGV4KFxyXG4gICAgICAgICAgICB0aGlzLnRvSW5kZXgocG9zWCksXHJcbiAgICAgICAgICAgIHRoaXMudG9JbmRleChwb3NZKSxcclxuICAgICAgICApO1xyXG4gICAgfVxyXG5cclxuICAgIHNlYXJjaEJ5UmFuZ2UoeDEseDIseTEseTIpIHtcclxuICAgICAgICBsZXQgbWF0Y2hlcyA9IFtdO1xyXG4gICAgICAgIHRoaXMudG9JbmRleFJhbmdlKHgxLHgyKS5mb3JFYWNoKGluZGV4WCA9PiB7XHJcbiAgICAgICAgICAgIHRoaXMudG9JbmRleFJhbmdlKHkxLHkyKS5mb3JFYWNoKGluZGV4WSA9PiB7XHJcbiAgICAgICAgICAgICAgICBsZXQgbWF0Y2ggPSB0aGlzLmdldEJ5SW5kZXgoaW5kZXhYLCBpbmRleFkpO1xyXG4gICAgICAgICAgICAgICAgaWYgKG1hdGNoKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgbWF0Y2hlcy5wdXNoKG1hdGNoKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfSlcclxuICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgcmV0dXJuIG1hdGNoZXM7XHJcbiAgICB9XHJcbn1cclxuXHJcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3B1YmxpYy9qcy9UaWxlUmVzb2x2ZXIuanMiLCJcInVzZSBzdHJpY3RcIjtcblxuZXhwb3J0cy5fX2VzTW9kdWxlID0gdHJ1ZTtcblxudmFyIF9mcm9tID0gcmVxdWlyZShcIi4uL2NvcmUtanMvYXJyYXkvZnJvbVwiKTtcblxudmFyIF9mcm9tMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX2Zyb20pO1xuXG5mdW5jdGlvbiBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KG9iaikgeyByZXR1cm4gb2JqICYmIG9iai5fX2VzTW9kdWxlID8gb2JqIDogeyBkZWZhdWx0OiBvYmogfTsgfVxuXG5leHBvcnRzLmRlZmF1bHQgPSBmdW5jdGlvbiAoYXJyKSB7XG4gIGlmIChBcnJheS5pc0FycmF5KGFycikpIHtcbiAgICBmb3IgKHZhciBpID0gMCwgYXJyMiA9IEFycmF5KGFyci5sZW5ndGgpOyBpIDwgYXJyLmxlbmd0aDsgaSsrKSB7XG4gICAgICBhcnIyW2ldID0gYXJyW2ldO1xuICAgIH1cblxuICAgIHJldHVybiBhcnIyO1xuICB9IGVsc2Uge1xuICAgIHJldHVybiAoMCwgX2Zyb20yLmRlZmF1bHQpKGFycik7XG4gIH1cbn07XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9ub2RlX21vZHVsZXMvX2JhYmVsLXJ1bnRpbWVANi4yNi4wQGJhYmVsLXJ1bnRpbWUvaGVscGVycy90b0NvbnN1bWFibGVBcnJheS5qc1xuLy8gbW9kdWxlIGlkID0gODlcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiZXhwb3J0IGRlZmF1bHQgY2xhc3MgU3ByaXRlU2hlZXQge1xyXG4gICAgY29uc3RydWN0b3IoaW1hZ2UsIHdpZHRoLCBoZWlnaHQpIHtcclxuICAgICAgICB0aGlzLmltYWdlID0gaW1hZ2U7XHJcbiAgICAgICAgdGhpcy53aWR0aCA9IHdpZHRoO1xyXG4gICAgICAgIHRoaXMuaGVpZ2h0ID0gaGVpZ2h0O1xyXG4gICAgICAgIHRoaXMudGlsZXMgPSBuZXcgTWFwKCk7XHJcbiAgICAgICAgdGhpcy5hbmltYXRpb25zID0gbmV3IE1hcCgpO1xyXG4gICAgfVxyXG5cclxuICAgIGRlZmluZUFuaW0obmFtZSwgYW5pbWF0aW9uKSB7XHJcbiAgICAgICAgdGhpcy5hbmltYXRpb25zLnNldChuYW1lLCBhbmltYXRpb24pO1xyXG4gICAgfVxyXG5cclxuICAgIGRlZmluZShuYW1lLCB4LCB5LCB3aWR0aCwgaGVpZ2h0KSB7XHJcbiAgICAgICAgLy8gZGVmaW5lIGEgc3ByaXRlIGluIHRoZSBpbWFnZSB3aXRoIG5hbWVcclxuICAgICAgICAvLyDmmI7noa7lrprkuYnkuIDlnZfkvY3kuo5zcHJpdGUgc2hlZXTkuK14LHnkvY3nva53aWR0aCwgaGVpZ2h055qEc3ByaXRlXHJcbiAgICAgICAgY29uc3QgYnVmZmVycyA9IFtmYWxzZSwgdHJ1ZV0ubWFwKGZsaXAgPT4ge1xyXG4gICAgICAgICAgICBjb25zdCBidWZmZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdjYW52YXMnKTtcclxuICAgICAgICAgICAgYnVmZmVyLndpZHRoID0gd2lkdGg7XHJcbiAgICAgICAgICAgIGJ1ZmZlci5oZWlnaHQgPSBoZWlnaHQ7XHJcblxyXG4gICAgICAgICAgICBjb25zdCBjb250ZXh0ID0gYnVmZmVyLmdldENvbnRleHQoJzJkJyk7XHJcblxyXG4gICAgICAgICAgICBpZiAoZmxpcCkge1xyXG4gICAgICAgICAgICAgICAgLy8gTWlycm9yIHRoZSBjYW52YXNcclxuICAgICAgICAgICAgICAgIGNvbnRleHQuc2NhbGUoLTEsIDEpO1xyXG4gICAgICAgICAgICAgICAgY29udGV4dC50cmFuc2xhdGUoLXdpZHRoLCAwKTtcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgY29udGV4dC5kcmF3SW1hZ2UoXHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5pbWFnZSxcclxuICAgICAgICAgICAgICAgICAgICB4LFxyXG4gICAgICAgICAgICAgICAgICAgIHksXHJcbiAgICAgICAgICAgICAgICAgICAgd2lkdGgsXHJcbiAgICAgICAgICAgICAgICAgICAgaGVpZ2h0LFxyXG4gICAgICAgICAgICAgICAgICAgIDAsXHJcbiAgICAgICAgICAgICAgICAgICAgMCxcclxuICAgICAgICAgICAgICAgICAgICB3aWR0aCxcclxuICAgICAgICAgICAgICAgICAgICBoZWlnaHQpO1xyXG5cclxuICAgICAgICAgICAgcmV0dXJuIGJ1ZmZlcjtcclxuICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgdGhpcy50aWxlcy5zZXQobmFtZSwgYnVmZmVycyk7XHJcbiAgICB9XHJcblxyXG4gICAgZGVmaW5lVGlsZShuYW1lLCB4LCB5KSB7XHJcbiAgICAgICAgdGhpcy5kZWZpbmUobmFtZSwgeCAqIHRoaXMud2lkdGgsIHkgKiB0aGlzLmhlaWdodCwgdGhpcy53aWR0aCwgdGhpcy5oZWlnaHQpO1xyXG4gICAgfVxyXG5cclxuICAgIGRyYXcobmFtZSwgY29udGV4dCwgeCwgeSwgZmxpcCA9IGZhbHNlKSB7XHJcbiAgICAgICAgY29uc3QgYnVmZmVyID0gdGhpcy50aWxlcy5nZXQobmFtZSlbZmxpcCA/IDEgOiAwXTtcclxuICAgICAgICBjb250ZXh0LmRyYXdJbWFnZShidWZmZXIsIHgsIHkpO1xyXG4gICAgfVxyXG5cclxuICAgIGRyYXdUaWxlKG5hbWUsIGNvbnRleHQsIHgsIHkpIHtcclxuICAgICAgICB0aGlzLmRyYXcobmFtZSwgY29udGV4dCwgeCp0aGlzLndpZHRoLCB5KnRoaXMuaGVpZ2h0KTtcclxuICAgIH1cclxuXHJcbiAgICBkcmF3QW5pbShuYW1lLCBjb250ZXh0LCB4LCB5LCBkaXN0YW5jZSkge1xyXG4gICAgICAgIGNvbnN0IGFuaW0gPSB0aGlzLmFuaW1hdGlvbnMuZ2V0KG5hbWUpO1xyXG4gICAgICAgIHRoaXMuZHJhd1RpbGUoYW5pbShkaXN0YW5jZSksIGNvbnRleHQsIHgsIHkpO1xyXG4gICAgfVxyXG59XHJcblxyXG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9wdWJsaWMvanMvU3ByaXRlU2hlZXQuanMiLCJpbXBvcnQge1NpZGVzLCBUcmFpdH0gZnJvbSAnLi4vRW50aXR5LmpzJ1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgUGVuZHVsdW1Nb3ZlIGV4dGVuZHMgVHJhaXQge1xyXG4gICAgY29uc3RydWN0b3IoKSB7XHJcbiAgICAgICAgc3VwZXIoJ3BlbmR1bHVtTW92ZScpO1xyXG4gICAgICAgIHRoaXMuZW5hYmxlID0gdHJ1ZTtcclxuICAgICAgICB0aGlzLnNwZWVkID0gIC0zMDtcclxuICAgIH1cclxuXHJcbiAgICBvYnN0cnVjdChlbnRpdHksIHNpZGUpIHtcclxuICAgICAgICBpZiAoc2lkZSA9PT0gU2lkZXMuTEVGVCB8fCBzaWRlID09PSBTaWRlcy5SSUdIVCkge1xyXG4gICAgICAgICAgICB0aGlzLnNwZWVkID0gLXRoaXMuc3BlZWQ7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIHVwZGF0ZShlbnRpdHksIGRlbHRhVGltZSkge1xyXG4gICAgICAgIGVudGl0eS5saWZlVGltZSArPSBkZWx0YVRpbWU7XHJcbiAgICAgICAgaWYgKHRoaXMuZW5hYmxlKSB7XHJcbiAgICAgICAgICAgIGVudGl0eS52ZWwueCA9IHRoaXMuc3BlZWQ7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59XHJcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3B1YmxpYy9qcy90cmFpdHMvUGVuZHVsdW1Nb3ZlLmpzIiwiKGZ1bmN0aW9uKHNlbGYpIHtcbiAgJ3VzZSBzdHJpY3QnO1xuXG4gIGlmIChzZWxmLmZldGNoKSB7XG4gICAgcmV0dXJuXG4gIH1cblxuICB2YXIgc3VwcG9ydCA9IHtcbiAgICBzZWFyY2hQYXJhbXM6ICdVUkxTZWFyY2hQYXJhbXMnIGluIHNlbGYsXG4gICAgaXRlcmFibGU6ICdTeW1ib2wnIGluIHNlbGYgJiYgJ2l0ZXJhdG9yJyBpbiBTeW1ib2wsXG4gICAgYmxvYjogJ0ZpbGVSZWFkZXInIGluIHNlbGYgJiYgJ0Jsb2InIGluIHNlbGYgJiYgKGZ1bmN0aW9uKCkge1xuICAgICAgdHJ5IHtcbiAgICAgICAgbmV3IEJsb2IoKVxuICAgICAgICByZXR1cm4gdHJ1ZVxuICAgICAgfSBjYXRjaChlKSB7XG4gICAgICAgIHJldHVybiBmYWxzZVxuICAgICAgfVxuICAgIH0pKCksXG4gICAgZm9ybURhdGE6ICdGb3JtRGF0YScgaW4gc2VsZixcbiAgICBhcnJheUJ1ZmZlcjogJ0FycmF5QnVmZmVyJyBpbiBzZWxmXG4gIH1cblxuICBpZiAoc3VwcG9ydC5hcnJheUJ1ZmZlcikge1xuICAgIHZhciB2aWV3Q2xhc3NlcyA9IFtcbiAgICAgICdbb2JqZWN0IEludDhBcnJheV0nLFxuICAgICAgJ1tvYmplY3QgVWludDhBcnJheV0nLFxuICAgICAgJ1tvYmplY3QgVWludDhDbGFtcGVkQXJyYXldJyxcbiAgICAgICdbb2JqZWN0IEludDE2QXJyYXldJyxcbiAgICAgICdbb2JqZWN0IFVpbnQxNkFycmF5XScsXG4gICAgICAnW29iamVjdCBJbnQzMkFycmF5XScsXG4gICAgICAnW29iamVjdCBVaW50MzJBcnJheV0nLFxuICAgICAgJ1tvYmplY3QgRmxvYXQzMkFycmF5XScsXG4gICAgICAnW29iamVjdCBGbG9hdDY0QXJyYXldJ1xuICAgIF1cblxuICAgIHZhciBpc0RhdGFWaWV3ID0gZnVuY3Rpb24ob2JqKSB7XG4gICAgICByZXR1cm4gb2JqICYmIERhdGFWaWV3LnByb3RvdHlwZS5pc1Byb3RvdHlwZU9mKG9iailcbiAgICB9XG5cbiAgICB2YXIgaXNBcnJheUJ1ZmZlclZpZXcgPSBBcnJheUJ1ZmZlci5pc1ZpZXcgfHwgZnVuY3Rpb24ob2JqKSB7XG4gICAgICByZXR1cm4gb2JqICYmIHZpZXdDbGFzc2VzLmluZGV4T2YoT2JqZWN0LnByb3RvdHlwZS50b1N0cmluZy5jYWxsKG9iaikpID4gLTFcbiAgICB9XG4gIH1cblxuICBmdW5jdGlvbiBub3JtYWxpemVOYW1lKG5hbWUpIHtcbiAgICBpZiAodHlwZW9mIG5hbWUgIT09ICdzdHJpbmcnKSB7XG4gICAgICBuYW1lID0gU3RyaW5nKG5hbWUpXG4gICAgfVxuICAgIGlmICgvW15hLXowLTlcXC0jJCUmJyorLlxcXl9gfH5dL2kudGVzdChuYW1lKSkge1xuICAgICAgdGhyb3cgbmV3IFR5cGVFcnJvcignSW52YWxpZCBjaGFyYWN0ZXIgaW4gaGVhZGVyIGZpZWxkIG5hbWUnKVxuICAgIH1cbiAgICByZXR1cm4gbmFtZS50b0xvd2VyQ2FzZSgpXG4gIH1cblxuICBmdW5jdGlvbiBub3JtYWxpemVWYWx1ZSh2YWx1ZSkge1xuICAgIGlmICh0eXBlb2YgdmFsdWUgIT09ICdzdHJpbmcnKSB7XG4gICAgICB2YWx1ZSA9IFN0cmluZyh2YWx1ZSlcbiAgICB9XG4gICAgcmV0dXJuIHZhbHVlXG4gIH1cblxuICAvLyBCdWlsZCBhIGRlc3RydWN0aXZlIGl0ZXJhdG9yIGZvciB0aGUgdmFsdWUgbGlzdFxuICBmdW5jdGlvbiBpdGVyYXRvckZvcihpdGVtcykge1xuICAgIHZhciBpdGVyYXRvciA9IHtcbiAgICAgIG5leHQ6IGZ1bmN0aW9uKCkge1xuICAgICAgICB2YXIgdmFsdWUgPSBpdGVtcy5zaGlmdCgpXG4gICAgICAgIHJldHVybiB7ZG9uZTogdmFsdWUgPT09IHVuZGVmaW5lZCwgdmFsdWU6IHZhbHVlfVxuICAgICAgfVxuICAgIH1cblxuICAgIGlmIChzdXBwb3J0Lml0ZXJhYmxlKSB7XG4gICAgICBpdGVyYXRvcltTeW1ib2wuaXRlcmF0b3JdID0gZnVuY3Rpb24oKSB7XG4gICAgICAgIHJldHVybiBpdGVyYXRvclxuICAgICAgfVxuICAgIH1cblxuICAgIHJldHVybiBpdGVyYXRvclxuICB9XG5cbiAgZnVuY3Rpb24gSGVhZGVycyhoZWFkZXJzKSB7XG4gICAgdGhpcy5tYXAgPSB7fVxuXG4gICAgaWYgKGhlYWRlcnMgaW5zdGFuY2VvZiBIZWFkZXJzKSB7XG4gICAgICBoZWFkZXJzLmZvckVhY2goZnVuY3Rpb24odmFsdWUsIG5hbWUpIHtcbiAgICAgICAgdGhpcy5hcHBlbmQobmFtZSwgdmFsdWUpXG4gICAgICB9LCB0aGlzKVxuICAgIH0gZWxzZSBpZiAoQXJyYXkuaXNBcnJheShoZWFkZXJzKSkge1xuICAgICAgaGVhZGVycy5mb3JFYWNoKGZ1bmN0aW9uKGhlYWRlcikge1xuICAgICAgICB0aGlzLmFwcGVuZChoZWFkZXJbMF0sIGhlYWRlclsxXSlcbiAgICAgIH0sIHRoaXMpXG4gICAgfSBlbHNlIGlmIChoZWFkZXJzKSB7XG4gICAgICBPYmplY3QuZ2V0T3duUHJvcGVydHlOYW1lcyhoZWFkZXJzKS5mb3JFYWNoKGZ1bmN0aW9uKG5hbWUpIHtcbiAgICAgICAgdGhpcy5hcHBlbmQobmFtZSwgaGVhZGVyc1tuYW1lXSlcbiAgICAgIH0sIHRoaXMpXG4gICAgfVxuICB9XG5cbiAgSGVhZGVycy5wcm90b3R5cGUuYXBwZW5kID0gZnVuY3Rpb24obmFtZSwgdmFsdWUpIHtcbiAgICBuYW1lID0gbm9ybWFsaXplTmFtZShuYW1lKVxuICAgIHZhbHVlID0gbm9ybWFsaXplVmFsdWUodmFsdWUpXG4gICAgdmFyIG9sZFZhbHVlID0gdGhpcy5tYXBbbmFtZV1cbiAgICB0aGlzLm1hcFtuYW1lXSA9IG9sZFZhbHVlID8gb2xkVmFsdWUrJywnK3ZhbHVlIDogdmFsdWVcbiAgfVxuXG4gIEhlYWRlcnMucHJvdG90eXBlWydkZWxldGUnXSA9IGZ1bmN0aW9uKG5hbWUpIHtcbiAgICBkZWxldGUgdGhpcy5tYXBbbm9ybWFsaXplTmFtZShuYW1lKV1cbiAgfVxuXG4gIEhlYWRlcnMucHJvdG90eXBlLmdldCA9IGZ1bmN0aW9uKG5hbWUpIHtcbiAgICBuYW1lID0gbm9ybWFsaXplTmFtZShuYW1lKVxuICAgIHJldHVybiB0aGlzLmhhcyhuYW1lKSA/IHRoaXMubWFwW25hbWVdIDogbnVsbFxuICB9XG5cbiAgSGVhZGVycy5wcm90b3R5cGUuaGFzID0gZnVuY3Rpb24obmFtZSkge1xuICAgIHJldHVybiB0aGlzLm1hcC5oYXNPd25Qcm9wZXJ0eShub3JtYWxpemVOYW1lKG5hbWUpKVxuICB9XG5cbiAgSGVhZGVycy5wcm90b3R5cGUuc2V0ID0gZnVuY3Rpb24obmFtZSwgdmFsdWUpIHtcbiAgICB0aGlzLm1hcFtub3JtYWxpemVOYW1lKG5hbWUpXSA9IG5vcm1hbGl6ZVZhbHVlKHZhbHVlKVxuICB9XG5cbiAgSGVhZGVycy5wcm90b3R5cGUuZm9yRWFjaCA9IGZ1bmN0aW9uKGNhbGxiYWNrLCB0aGlzQXJnKSB7XG4gICAgZm9yICh2YXIgbmFtZSBpbiB0aGlzLm1hcCkge1xuICAgICAgaWYgKHRoaXMubWFwLmhhc093blByb3BlcnR5KG5hbWUpKSB7XG4gICAgICAgIGNhbGxiYWNrLmNhbGwodGhpc0FyZywgdGhpcy5tYXBbbmFtZV0sIG5hbWUsIHRoaXMpXG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgSGVhZGVycy5wcm90b3R5cGUua2V5cyA9IGZ1bmN0aW9uKCkge1xuICAgIHZhciBpdGVtcyA9IFtdXG4gICAgdGhpcy5mb3JFYWNoKGZ1bmN0aW9uKHZhbHVlLCBuYW1lKSB7IGl0ZW1zLnB1c2gobmFtZSkgfSlcbiAgICByZXR1cm4gaXRlcmF0b3JGb3IoaXRlbXMpXG4gIH1cblxuICBIZWFkZXJzLnByb3RvdHlwZS52YWx1ZXMgPSBmdW5jdGlvbigpIHtcbiAgICB2YXIgaXRlbXMgPSBbXVxuICAgIHRoaXMuZm9yRWFjaChmdW5jdGlvbih2YWx1ZSkgeyBpdGVtcy5wdXNoKHZhbHVlKSB9KVxuICAgIHJldHVybiBpdGVyYXRvckZvcihpdGVtcylcbiAgfVxuXG4gIEhlYWRlcnMucHJvdG90eXBlLmVudHJpZXMgPSBmdW5jdGlvbigpIHtcbiAgICB2YXIgaXRlbXMgPSBbXVxuICAgIHRoaXMuZm9yRWFjaChmdW5jdGlvbih2YWx1ZSwgbmFtZSkgeyBpdGVtcy5wdXNoKFtuYW1lLCB2YWx1ZV0pIH0pXG4gICAgcmV0dXJuIGl0ZXJhdG9yRm9yKGl0ZW1zKVxuICB9XG5cbiAgaWYgKHN1cHBvcnQuaXRlcmFibGUpIHtcbiAgICBIZWFkZXJzLnByb3RvdHlwZVtTeW1ib2wuaXRlcmF0b3JdID0gSGVhZGVycy5wcm90b3R5cGUuZW50cmllc1xuICB9XG5cbiAgZnVuY3Rpb24gY29uc3VtZWQoYm9keSkge1xuICAgIGlmIChib2R5LmJvZHlVc2VkKSB7XG4gICAgICByZXR1cm4gUHJvbWlzZS5yZWplY3QobmV3IFR5cGVFcnJvcignQWxyZWFkeSByZWFkJykpXG4gICAgfVxuICAgIGJvZHkuYm9keVVzZWQgPSB0cnVlXG4gIH1cblxuICBmdW5jdGlvbiBmaWxlUmVhZGVyUmVhZHkocmVhZGVyKSB7XG4gICAgcmV0dXJuIG5ldyBQcm9taXNlKGZ1bmN0aW9uKHJlc29sdmUsIHJlamVjdCkge1xuICAgICAgcmVhZGVyLm9ubG9hZCA9IGZ1bmN0aW9uKCkge1xuICAgICAgICByZXNvbHZlKHJlYWRlci5yZXN1bHQpXG4gICAgICB9XG4gICAgICByZWFkZXIub25lcnJvciA9IGZ1bmN0aW9uKCkge1xuICAgICAgICByZWplY3QocmVhZGVyLmVycm9yKVxuICAgICAgfVxuICAgIH0pXG4gIH1cblxuICBmdW5jdGlvbiByZWFkQmxvYkFzQXJyYXlCdWZmZXIoYmxvYikge1xuICAgIHZhciByZWFkZXIgPSBuZXcgRmlsZVJlYWRlcigpXG4gICAgdmFyIHByb21pc2UgPSBmaWxlUmVhZGVyUmVhZHkocmVhZGVyKVxuICAgIHJlYWRlci5yZWFkQXNBcnJheUJ1ZmZlcihibG9iKVxuICAgIHJldHVybiBwcm9taXNlXG4gIH1cblxuICBmdW5jdGlvbiByZWFkQmxvYkFzVGV4dChibG9iKSB7XG4gICAgdmFyIHJlYWRlciA9IG5ldyBGaWxlUmVhZGVyKClcbiAgICB2YXIgcHJvbWlzZSA9IGZpbGVSZWFkZXJSZWFkeShyZWFkZXIpXG4gICAgcmVhZGVyLnJlYWRBc1RleHQoYmxvYilcbiAgICByZXR1cm4gcHJvbWlzZVxuICB9XG5cbiAgZnVuY3Rpb24gcmVhZEFycmF5QnVmZmVyQXNUZXh0KGJ1Zikge1xuICAgIHZhciB2aWV3ID0gbmV3IFVpbnQ4QXJyYXkoYnVmKVxuICAgIHZhciBjaGFycyA9IG5ldyBBcnJheSh2aWV3Lmxlbmd0aClcblxuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgdmlldy5sZW5ndGg7IGkrKykge1xuICAgICAgY2hhcnNbaV0gPSBTdHJpbmcuZnJvbUNoYXJDb2RlKHZpZXdbaV0pXG4gICAgfVxuICAgIHJldHVybiBjaGFycy5qb2luKCcnKVxuICB9XG5cbiAgZnVuY3Rpb24gYnVmZmVyQ2xvbmUoYnVmKSB7XG4gICAgaWYgKGJ1Zi5zbGljZSkge1xuICAgICAgcmV0dXJuIGJ1Zi5zbGljZSgwKVxuICAgIH0gZWxzZSB7XG4gICAgICB2YXIgdmlldyA9IG5ldyBVaW50OEFycmF5KGJ1Zi5ieXRlTGVuZ3RoKVxuICAgICAgdmlldy5zZXQobmV3IFVpbnQ4QXJyYXkoYnVmKSlcbiAgICAgIHJldHVybiB2aWV3LmJ1ZmZlclxuICAgIH1cbiAgfVxuXG4gIGZ1bmN0aW9uIEJvZHkoKSB7XG4gICAgdGhpcy5ib2R5VXNlZCA9IGZhbHNlXG5cbiAgICB0aGlzLl9pbml0Qm9keSA9IGZ1bmN0aW9uKGJvZHkpIHtcbiAgICAgIHRoaXMuX2JvZHlJbml0ID0gYm9keVxuICAgICAgaWYgKCFib2R5KSB7XG4gICAgICAgIHRoaXMuX2JvZHlUZXh0ID0gJydcbiAgICAgIH0gZWxzZSBpZiAodHlwZW9mIGJvZHkgPT09ICdzdHJpbmcnKSB7XG4gICAgICAgIHRoaXMuX2JvZHlUZXh0ID0gYm9keVxuICAgICAgfSBlbHNlIGlmIChzdXBwb3J0LmJsb2IgJiYgQmxvYi5wcm90b3R5cGUuaXNQcm90b3R5cGVPZihib2R5KSkge1xuICAgICAgICB0aGlzLl9ib2R5QmxvYiA9IGJvZHlcbiAgICAgIH0gZWxzZSBpZiAoc3VwcG9ydC5mb3JtRGF0YSAmJiBGb3JtRGF0YS5wcm90b3R5cGUuaXNQcm90b3R5cGVPZihib2R5KSkge1xuICAgICAgICB0aGlzLl9ib2R5Rm9ybURhdGEgPSBib2R5XG4gICAgICB9IGVsc2UgaWYgKHN1cHBvcnQuc2VhcmNoUGFyYW1zICYmIFVSTFNlYXJjaFBhcmFtcy5wcm90b3R5cGUuaXNQcm90b3R5cGVPZihib2R5KSkge1xuICAgICAgICB0aGlzLl9ib2R5VGV4dCA9IGJvZHkudG9TdHJpbmcoKVxuICAgICAgfSBlbHNlIGlmIChzdXBwb3J0LmFycmF5QnVmZmVyICYmIHN1cHBvcnQuYmxvYiAmJiBpc0RhdGFWaWV3KGJvZHkpKSB7XG4gICAgICAgIHRoaXMuX2JvZHlBcnJheUJ1ZmZlciA9IGJ1ZmZlckNsb25lKGJvZHkuYnVmZmVyKVxuICAgICAgICAvLyBJRSAxMC0xMSBjYW4ndCBoYW5kbGUgYSBEYXRhVmlldyBib2R5LlxuICAgICAgICB0aGlzLl9ib2R5SW5pdCA9IG5ldyBCbG9iKFt0aGlzLl9ib2R5QXJyYXlCdWZmZXJdKVxuICAgICAgfSBlbHNlIGlmIChzdXBwb3J0LmFycmF5QnVmZmVyICYmIChBcnJheUJ1ZmZlci5wcm90b3R5cGUuaXNQcm90b3R5cGVPZihib2R5KSB8fCBpc0FycmF5QnVmZmVyVmlldyhib2R5KSkpIHtcbiAgICAgICAgdGhpcy5fYm9keUFycmF5QnVmZmVyID0gYnVmZmVyQ2xvbmUoYm9keSlcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHRocm93IG5ldyBFcnJvcigndW5zdXBwb3J0ZWQgQm9keUluaXQgdHlwZScpXG4gICAgICB9XG5cbiAgICAgIGlmICghdGhpcy5oZWFkZXJzLmdldCgnY29udGVudC10eXBlJykpIHtcbiAgICAgICAgaWYgKHR5cGVvZiBib2R5ID09PSAnc3RyaW5nJykge1xuICAgICAgICAgIHRoaXMuaGVhZGVycy5zZXQoJ2NvbnRlbnQtdHlwZScsICd0ZXh0L3BsYWluO2NoYXJzZXQ9VVRGLTgnKVxuICAgICAgICB9IGVsc2UgaWYgKHRoaXMuX2JvZHlCbG9iICYmIHRoaXMuX2JvZHlCbG9iLnR5cGUpIHtcbiAgICAgICAgICB0aGlzLmhlYWRlcnMuc2V0KCdjb250ZW50LXR5cGUnLCB0aGlzLl9ib2R5QmxvYi50eXBlKVxuICAgICAgICB9IGVsc2UgaWYgKHN1cHBvcnQuc2VhcmNoUGFyYW1zICYmIFVSTFNlYXJjaFBhcmFtcy5wcm90b3R5cGUuaXNQcm90b3R5cGVPZihib2R5KSkge1xuICAgICAgICAgIHRoaXMuaGVhZGVycy5zZXQoJ2NvbnRlbnQtdHlwZScsICdhcHBsaWNhdGlvbi94LXd3dy1mb3JtLXVybGVuY29kZWQ7Y2hhcnNldD1VVEYtOCcpXG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG5cbiAgICBpZiAoc3VwcG9ydC5ibG9iKSB7XG4gICAgICB0aGlzLmJsb2IgPSBmdW5jdGlvbigpIHtcbiAgICAgICAgdmFyIHJlamVjdGVkID0gY29uc3VtZWQodGhpcylcbiAgICAgICAgaWYgKHJlamVjdGVkKSB7XG4gICAgICAgICAgcmV0dXJuIHJlamVjdGVkXG4gICAgICAgIH1cblxuICAgICAgICBpZiAodGhpcy5fYm9keUJsb2IpIHtcbiAgICAgICAgICByZXR1cm4gUHJvbWlzZS5yZXNvbHZlKHRoaXMuX2JvZHlCbG9iKVxuICAgICAgICB9IGVsc2UgaWYgKHRoaXMuX2JvZHlBcnJheUJ1ZmZlcikge1xuICAgICAgICAgIHJldHVybiBQcm9taXNlLnJlc29sdmUobmV3IEJsb2IoW3RoaXMuX2JvZHlBcnJheUJ1ZmZlcl0pKVxuICAgICAgICB9IGVsc2UgaWYgKHRoaXMuX2JvZHlGb3JtRGF0YSkge1xuICAgICAgICAgIHRocm93IG5ldyBFcnJvcignY291bGQgbm90IHJlYWQgRm9ybURhdGEgYm9keSBhcyBibG9iJylcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICByZXR1cm4gUHJvbWlzZS5yZXNvbHZlKG5ldyBCbG9iKFt0aGlzLl9ib2R5VGV4dF0pKVxuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIHRoaXMuYXJyYXlCdWZmZXIgPSBmdW5jdGlvbigpIHtcbiAgICAgICAgaWYgKHRoaXMuX2JvZHlBcnJheUJ1ZmZlcikge1xuICAgICAgICAgIHJldHVybiBjb25zdW1lZCh0aGlzKSB8fCBQcm9taXNlLnJlc29sdmUodGhpcy5fYm9keUFycmF5QnVmZmVyKVxuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIHJldHVybiB0aGlzLmJsb2IoKS50aGVuKHJlYWRCbG9iQXNBcnJheUJ1ZmZlcilcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cblxuICAgIHRoaXMudGV4dCA9IGZ1bmN0aW9uKCkge1xuICAgICAgdmFyIHJlamVjdGVkID0gY29uc3VtZWQodGhpcylcbiAgICAgIGlmIChyZWplY3RlZCkge1xuICAgICAgICByZXR1cm4gcmVqZWN0ZWRcbiAgICAgIH1cblxuICAgICAgaWYgKHRoaXMuX2JvZHlCbG9iKSB7XG4gICAgICAgIHJldHVybiByZWFkQmxvYkFzVGV4dCh0aGlzLl9ib2R5QmxvYilcbiAgICAgIH0gZWxzZSBpZiAodGhpcy5fYm9keUFycmF5QnVmZmVyKSB7XG4gICAgICAgIHJldHVybiBQcm9taXNlLnJlc29sdmUocmVhZEFycmF5QnVmZmVyQXNUZXh0KHRoaXMuX2JvZHlBcnJheUJ1ZmZlcikpXG4gICAgICB9IGVsc2UgaWYgKHRoaXMuX2JvZHlGb3JtRGF0YSkge1xuICAgICAgICB0aHJvdyBuZXcgRXJyb3IoJ2NvdWxkIG5vdCByZWFkIEZvcm1EYXRhIGJvZHkgYXMgdGV4dCcpXG4gICAgICB9IGVsc2Uge1xuICAgICAgICByZXR1cm4gUHJvbWlzZS5yZXNvbHZlKHRoaXMuX2JvZHlUZXh0KVxuICAgICAgfVxuICAgIH1cblxuICAgIGlmIChzdXBwb3J0LmZvcm1EYXRhKSB7XG4gICAgICB0aGlzLmZvcm1EYXRhID0gZnVuY3Rpb24oKSB7XG4gICAgICAgIHJldHVybiB0aGlzLnRleHQoKS50aGVuKGRlY29kZSlcbiAgICAgIH1cbiAgICB9XG5cbiAgICB0aGlzLmpzb24gPSBmdW5jdGlvbigpIHtcbiAgICAgIHJldHVybiB0aGlzLnRleHQoKS50aGVuKEpTT04ucGFyc2UpXG4gICAgfVxuXG4gICAgcmV0dXJuIHRoaXNcbiAgfVxuXG4gIC8vIEhUVFAgbWV0aG9kcyB3aG9zZSBjYXBpdGFsaXphdGlvbiBzaG91bGQgYmUgbm9ybWFsaXplZFxuICB2YXIgbWV0aG9kcyA9IFsnREVMRVRFJywgJ0dFVCcsICdIRUFEJywgJ09QVElPTlMnLCAnUE9TVCcsICdQVVQnXVxuXG4gIGZ1bmN0aW9uIG5vcm1hbGl6ZU1ldGhvZChtZXRob2QpIHtcbiAgICB2YXIgdXBjYXNlZCA9IG1ldGhvZC50b1VwcGVyQ2FzZSgpXG4gICAgcmV0dXJuIChtZXRob2RzLmluZGV4T2YodXBjYXNlZCkgPiAtMSkgPyB1cGNhc2VkIDogbWV0aG9kXG4gIH1cblxuICBmdW5jdGlvbiBSZXF1ZXN0KGlucHV0LCBvcHRpb25zKSB7XG4gICAgb3B0aW9ucyA9IG9wdGlvbnMgfHwge31cbiAgICB2YXIgYm9keSA9IG9wdGlvbnMuYm9keVxuXG4gICAgaWYgKGlucHV0IGluc3RhbmNlb2YgUmVxdWVzdCkge1xuICAgICAgaWYgKGlucHV0LmJvZHlVc2VkKSB7XG4gICAgICAgIHRocm93IG5ldyBUeXBlRXJyb3IoJ0FscmVhZHkgcmVhZCcpXG4gICAgICB9XG4gICAgICB0aGlzLnVybCA9IGlucHV0LnVybFxuICAgICAgdGhpcy5jcmVkZW50aWFscyA9IGlucHV0LmNyZWRlbnRpYWxzXG4gICAgICBpZiAoIW9wdGlvbnMuaGVhZGVycykge1xuICAgICAgICB0aGlzLmhlYWRlcnMgPSBuZXcgSGVhZGVycyhpbnB1dC5oZWFkZXJzKVxuICAgICAgfVxuICAgICAgdGhpcy5tZXRob2QgPSBpbnB1dC5tZXRob2RcbiAgICAgIHRoaXMubW9kZSA9IGlucHV0Lm1vZGVcbiAgICAgIGlmICghYm9keSAmJiBpbnB1dC5fYm9keUluaXQgIT0gbnVsbCkge1xuICAgICAgICBib2R5ID0gaW5wdXQuX2JvZHlJbml0XG4gICAgICAgIGlucHV0LmJvZHlVc2VkID0gdHJ1ZVxuICAgICAgfVxuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLnVybCA9IFN0cmluZyhpbnB1dClcbiAgICB9XG5cbiAgICB0aGlzLmNyZWRlbnRpYWxzID0gb3B0aW9ucy5jcmVkZW50aWFscyB8fCB0aGlzLmNyZWRlbnRpYWxzIHx8ICdvbWl0J1xuICAgIGlmIChvcHRpb25zLmhlYWRlcnMgfHwgIXRoaXMuaGVhZGVycykge1xuICAgICAgdGhpcy5oZWFkZXJzID0gbmV3IEhlYWRlcnMob3B0aW9ucy5oZWFkZXJzKVxuICAgIH1cbiAgICB0aGlzLm1ldGhvZCA9IG5vcm1hbGl6ZU1ldGhvZChvcHRpb25zLm1ldGhvZCB8fCB0aGlzLm1ldGhvZCB8fCAnR0VUJylcbiAgICB0aGlzLm1vZGUgPSBvcHRpb25zLm1vZGUgfHwgdGhpcy5tb2RlIHx8IG51bGxcbiAgICB0aGlzLnJlZmVycmVyID0gbnVsbFxuXG4gICAgaWYgKCh0aGlzLm1ldGhvZCA9PT0gJ0dFVCcgfHwgdGhpcy5tZXRob2QgPT09ICdIRUFEJykgJiYgYm9keSkge1xuICAgICAgdGhyb3cgbmV3IFR5cGVFcnJvcignQm9keSBub3QgYWxsb3dlZCBmb3IgR0VUIG9yIEhFQUQgcmVxdWVzdHMnKVxuICAgIH1cbiAgICB0aGlzLl9pbml0Qm9keShib2R5KVxuICB9XG5cbiAgUmVxdWVzdC5wcm90b3R5cGUuY2xvbmUgPSBmdW5jdGlvbigpIHtcbiAgICByZXR1cm4gbmV3IFJlcXVlc3QodGhpcywgeyBib2R5OiB0aGlzLl9ib2R5SW5pdCB9KVxuICB9XG5cbiAgZnVuY3Rpb24gZGVjb2RlKGJvZHkpIHtcbiAgICB2YXIgZm9ybSA9IG5ldyBGb3JtRGF0YSgpXG4gICAgYm9keS50cmltKCkuc3BsaXQoJyYnKS5mb3JFYWNoKGZ1bmN0aW9uKGJ5dGVzKSB7XG4gICAgICBpZiAoYnl0ZXMpIHtcbiAgICAgICAgdmFyIHNwbGl0ID0gYnl0ZXMuc3BsaXQoJz0nKVxuICAgICAgICB2YXIgbmFtZSA9IHNwbGl0LnNoaWZ0KCkucmVwbGFjZSgvXFwrL2csICcgJylcbiAgICAgICAgdmFyIHZhbHVlID0gc3BsaXQuam9pbignPScpLnJlcGxhY2UoL1xcKy9nLCAnICcpXG4gICAgICAgIGZvcm0uYXBwZW5kKGRlY29kZVVSSUNvbXBvbmVudChuYW1lKSwgZGVjb2RlVVJJQ29tcG9uZW50KHZhbHVlKSlcbiAgICAgIH1cbiAgICB9KVxuICAgIHJldHVybiBmb3JtXG4gIH1cblxuICBmdW5jdGlvbiBwYXJzZUhlYWRlcnMocmF3SGVhZGVycykge1xuICAgIHZhciBoZWFkZXJzID0gbmV3IEhlYWRlcnMoKVxuICAgIHJhd0hlYWRlcnMuc3BsaXQoL1xccj9cXG4vKS5mb3JFYWNoKGZ1bmN0aW9uKGxpbmUpIHtcbiAgICAgIHZhciBwYXJ0cyA9IGxpbmUuc3BsaXQoJzonKVxuICAgICAgdmFyIGtleSA9IHBhcnRzLnNoaWZ0KCkudHJpbSgpXG4gICAgICBpZiAoa2V5KSB7XG4gICAgICAgIHZhciB2YWx1ZSA9IHBhcnRzLmpvaW4oJzonKS50cmltKClcbiAgICAgICAgaGVhZGVycy5hcHBlbmQoa2V5LCB2YWx1ZSlcbiAgICAgIH1cbiAgICB9KVxuICAgIHJldHVybiBoZWFkZXJzXG4gIH1cblxuICBCb2R5LmNhbGwoUmVxdWVzdC5wcm90b3R5cGUpXG5cbiAgZnVuY3Rpb24gUmVzcG9uc2UoYm9keUluaXQsIG9wdGlvbnMpIHtcbiAgICBpZiAoIW9wdGlvbnMpIHtcbiAgICAgIG9wdGlvbnMgPSB7fVxuICAgIH1cblxuICAgIHRoaXMudHlwZSA9ICdkZWZhdWx0J1xuICAgIHRoaXMuc3RhdHVzID0gJ3N0YXR1cycgaW4gb3B0aW9ucyA/IG9wdGlvbnMuc3RhdHVzIDogMjAwXG4gICAgdGhpcy5vayA9IHRoaXMuc3RhdHVzID49IDIwMCAmJiB0aGlzLnN0YXR1cyA8IDMwMFxuICAgIHRoaXMuc3RhdHVzVGV4dCA9ICdzdGF0dXNUZXh0JyBpbiBvcHRpb25zID8gb3B0aW9ucy5zdGF0dXNUZXh0IDogJ09LJ1xuICAgIHRoaXMuaGVhZGVycyA9IG5ldyBIZWFkZXJzKG9wdGlvbnMuaGVhZGVycylcbiAgICB0aGlzLnVybCA9IG9wdGlvbnMudXJsIHx8ICcnXG4gICAgdGhpcy5faW5pdEJvZHkoYm9keUluaXQpXG4gIH1cblxuICBCb2R5LmNhbGwoUmVzcG9uc2UucHJvdG90eXBlKVxuXG4gIFJlc3BvbnNlLnByb3RvdHlwZS5jbG9uZSA9IGZ1bmN0aW9uKCkge1xuICAgIHJldHVybiBuZXcgUmVzcG9uc2UodGhpcy5fYm9keUluaXQsIHtcbiAgICAgIHN0YXR1czogdGhpcy5zdGF0dXMsXG4gICAgICBzdGF0dXNUZXh0OiB0aGlzLnN0YXR1c1RleHQsXG4gICAgICBoZWFkZXJzOiBuZXcgSGVhZGVycyh0aGlzLmhlYWRlcnMpLFxuICAgICAgdXJsOiB0aGlzLnVybFxuICAgIH0pXG4gIH1cblxuICBSZXNwb25zZS5lcnJvciA9IGZ1bmN0aW9uKCkge1xuICAgIHZhciByZXNwb25zZSA9IG5ldyBSZXNwb25zZShudWxsLCB7c3RhdHVzOiAwLCBzdGF0dXNUZXh0OiAnJ30pXG4gICAgcmVzcG9uc2UudHlwZSA9ICdlcnJvcidcbiAgICByZXR1cm4gcmVzcG9uc2VcbiAgfVxuXG4gIHZhciByZWRpcmVjdFN0YXR1c2VzID0gWzMwMSwgMzAyLCAzMDMsIDMwNywgMzA4XVxuXG4gIFJlc3BvbnNlLnJlZGlyZWN0ID0gZnVuY3Rpb24odXJsLCBzdGF0dXMpIHtcbiAgICBpZiAocmVkaXJlY3RTdGF0dXNlcy5pbmRleE9mKHN0YXR1cykgPT09IC0xKSB7XG4gICAgICB0aHJvdyBuZXcgUmFuZ2VFcnJvcignSW52YWxpZCBzdGF0dXMgY29kZScpXG4gICAgfVxuXG4gICAgcmV0dXJuIG5ldyBSZXNwb25zZShudWxsLCB7c3RhdHVzOiBzdGF0dXMsIGhlYWRlcnM6IHtsb2NhdGlvbjogdXJsfX0pXG4gIH1cblxuICBzZWxmLkhlYWRlcnMgPSBIZWFkZXJzXG4gIHNlbGYuUmVxdWVzdCA9IFJlcXVlc3RcbiAgc2VsZi5SZXNwb25zZSA9IFJlc3BvbnNlXG5cbiAgc2VsZi5mZXRjaCA9IGZ1bmN0aW9uKGlucHV0LCBpbml0KSB7XG4gICAgcmV0dXJuIG5ldyBQcm9taXNlKGZ1bmN0aW9uKHJlc29sdmUsIHJlamVjdCkge1xuICAgICAgdmFyIHJlcXVlc3QgPSBuZXcgUmVxdWVzdChpbnB1dCwgaW5pdClcbiAgICAgIHZhciB4aHIgPSBuZXcgWE1MSHR0cFJlcXVlc3QoKVxuXG4gICAgICB4aHIub25sb2FkID0gZnVuY3Rpb24oKSB7XG4gICAgICAgIHZhciBvcHRpb25zID0ge1xuICAgICAgICAgIHN0YXR1czogeGhyLnN0YXR1cyxcbiAgICAgICAgICBzdGF0dXNUZXh0OiB4aHIuc3RhdHVzVGV4dCxcbiAgICAgICAgICBoZWFkZXJzOiBwYXJzZUhlYWRlcnMoeGhyLmdldEFsbFJlc3BvbnNlSGVhZGVycygpIHx8ICcnKVxuICAgICAgICB9XG4gICAgICAgIG9wdGlvbnMudXJsID0gJ3Jlc3BvbnNlVVJMJyBpbiB4aHIgPyB4aHIucmVzcG9uc2VVUkwgOiBvcHRpb25zLmhlYWRlcnMuZ2V0KCdYLVJlcXVlc3QtVVJMJylcbiAgICAgICAgdmFyIGJvZHkgPSAncmVzcG9uc2UnIGluIHhociA/IHhoci5yZXNwb25zZSA6IHhoci5yZXNwb25zZVRleHRcbiAgICAgICAgcmVzb2x2ZShuZXcgUmVzcG9uc2UoYm9keSwgb3B0aW9ucykpXG4gICAgICB9XG5cbiAgICAgIHhoci5vbmVycm9yID0gZnVuY3Rpb24oKSB7XG4gICAgICAgIHJlamVjdChuZXcgVHlwZUVycm9yKCdOZXR3b3JrIHJlcXVlc3QgZmFpbGVkJykpXG4gICAgICB9XG5cbiAgICAgIHhoci5vbnRpbWVvdXQgPSBmdW5jdGlvbigpIHtcbiAgICAgICAgcmVqZWN0KG5ldyBUeXBlRXJyb3IoJ05ldHdvcmsgcmVxdWVzdCBmYWlsZWQnKSlcbiAgICAgIH1cblxuICAgICAgeGhyLm9wZW4ocmVxdWVzdC5tZXRob2QsIHJlcXVlc3QudXJsLCB0cnVlKVxuXG4gICAgICBpZiAocmVxdWVzdC5jcmVkZW50aWFscyA9PT0gJ2luY2x1ZGUnKSB7XG4gICAgICAgIHhoci53aXRoQ3JlZGVudGlhbHMgPSB0cnVlXG4gICAgICB9XG5cbiAgICAgIGlmICgncmVzcG9uc2VUeXBlJyBpbiB4aHIgJiYgc3VwcG9ydC5ibG9iKSB7XG4gICAgICAgIHhoci5yZXNwb25zZVR5cGUgPSAnYmxvYidcbiAgICAgIH1cblxuICAgICAgcmVxdWVzdC5oZWFkZXJzLmZvckVhY2goZnVuY3Rpb24odmFsdWUsIG5hbWUpIHtcbiAgICAgICAgeGhyLnNldFJlcXVlc3RIZWFkZXIobmFtZSwgdmFsdWUpXG4gICAgICB9KVxuXG4gICAgICB4aHIuc2VuZCh0eXBlb2YgcmVxdWVzdC5fYm9keUluaXQgPT09ICd1bmRlZmluZWQnID8gbnVsbCA6IHJlcXVlc3QuX2JvZHlJbml0KVxuICAgIH0pXG4gIH1cbiAgc2VsZi5mZXRjaC5wb2x5ZmlsbCA9IHRydWVcbn0pKHR5cGVvZiBzZWxmICE9PSAndW5kZWZpbmVkJyA/IHNlbGYgOiB0aGlzKTtcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vbm9kZV9tb2R1bGVzL193aGF0d2ctZmV0Y2hAMi4wLjNAd2hhdHdnLWZldGNoL2ZldGNoLmpzXG4vLyBtb2R1bGUgaWQgPSA5M1xuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJpbXBvcnQgJy4uL2Nzcy9tYWluLmNzcyc7XHJcbi8qVE9ETzogQ1NTIGltcG9ydCBpbiBKUywgSSBkb24ndCBsaWtlIGl0LiovXHJcblxyXG5pbXBvcnQgVGltZXIgZnJvbSAnLi9UaW1lci5qcyc7XHJcbmltcG9ydCBDYW1lcmEgZnJvbSAnLi9DYW1lcmEuanMnO1xyXG5pbXBvcnQgRW50aXR5IGZyb20gJy4vRW50aXR5LmpzJztcclxuaW1wb3J0IFBsYXllckNvbnRyb2xsZXIgZnJvbSAnLi90cmFpdHMvUGxheWVyQ29udHJvbGxlci5qcyc7XHJcbmltcG9ydCB7Y3JlYXRlTGV2ZWxMb2FkZXJ9IGZyb20gJy4vbG9hZGVycy9sZXZlbC5qcyc7XHJcbmltcG9ydCB7bG9hZEZvbnR9IGZyb20gJy4vbG9hZGVycy9mb250LmpzJztcclxuaW1wb3J0IHtsb2FkRW50aXRpZXN9IGZyb20gJy4vZW50aXRpZXMuanMnO1xyXG5pbXBvcnQge2NyZWF0ZURhc2hib2FyZExheWVyfSBmcm9tICcuL2xheWVycy9kYXNoYm9hcmQuanMnO1xyXG5pbXBvcnQge3NldHVwVG91Y2hQYWQsIHNldHVwS2V5Ym9hcmR9IGZyb20gJy4vaW5wdXQvaW5wdXQuanMnO1xyXG5pbXBvcnQge2dldFVzZXJBZ2VudH0gZnJvbSAnLi9wb2x5ZmlsbHMvZ2V0VXNlckFnZW50LmpzJztcclxuaW1wb3J0IHthdXRvUGxheU9uaU9TfSBmcm9tICcuL3BvbHlmaWxscy9hdXRvUGxheU9uaU9TLmpzJztcclxuaW1wb3J0IHtjb250cm9sRW50aXRpZXN9IGZyb20gJy4vZW50aXRpZXNDb250cm9sU3lzdGVtLmpzJztcclxuLy8gaW1wb3J0IHtjcmVhdGVDb2xsaXNpb25MYXllcn0gZnJvbSAnLi9sYXllcnMvY29sbGlzaW9uLmpzJ1xyXG4vLyBpbXBvcnQge2NyZWF0ZUNhbWVyYUxheWVyfSBmcm9tICcuL2xheWVycy9jYW1lcmEuanMnO1xyXG4vLyBpbXBvcnQge3NldHVwTW91c2VDb250cm9sfSBmcm9tICcuL2RlYnVnLmpzJztcclxuXHJcbmZ1bmN0aW9uIGNyZWF0ZVBsYXllckVudihwbGF5ZXJFbnRpdHkpIHtcclxuICAgIGNvbnN0IHBsYXllckVudiA9IG5ldyBFbnRpdHkoKTtcclxuICAgIGNvbnN0IHBsYXllckNvbnRyb2wgPSBuZXcgUGxheWVyQ29udHJvbGxlcigpO1xyXG4gICAgcGxheWVyQ29udHJvbC5zZXRQbGF5ZXIocGxheWVyRW50aXR5KTtcclxuICAgIHBsYXllckVudi5hZGRUcmFpdChwbGF5ZXJDb250cm9sKTtcclxuXHJcbiAgICByZXR1cm4gcGxheWVyRW52O1xyXG59XHJcblxyXG5hc3luYyBmdW5jdGlvbiBtYWluKGNhbnZhcykge1xyXG4gICAgY29uc3QgY29udGV4dCA9IGNhbnZhcy5nZXRDb250ZXh0KCcyZCcpO1xyXG5cclxuICAgIGNvbnN0IFtlbnRpdHlGYWN0b3J5LCBmb250XSA9IGF3YWl0IFByb21pc2UuYWxsKFtcclxuICAgICAgICBsb2FkRW50aXRpZXMoKSxcclxuICAgICAgICBsb2FkRm9udCgpXHJcbiAgICBdKTtcclxuICAgIGNvbnN0IGxvYWRMZXZlbCA9IGF3YWl0IGNyZWF0ZUxldmVsTG9hZGVyKCk7XHJcbiAgICBjb25zdCBsZXZlbCA9IGF3YWl0IGxvYWRMZXZlbCgnMS0xJyk7XHJcblxyXG4gICAgY29uc3QgY2FtZXJhID0gbmV3IENhbWVyYSgpO1xyXG5cclxuICAgIGNvbnN0IG1hcmlvID0gZW50aXR5RmFjdG9yeS5tYXJpbygpO1xyXG4gICAgbWFyaW8ucG9zLnNldCgyLjUqMTYsIDEyKjE2KTtcclxuICAgIGxldmVsLmVudGl0aWVzLmFkZChtYXJpbyk7XHJcblxyXG4gICAgY29uc3QgcGxheWVyRW52ID0gY3JlYXRlUGxheWVyRW52KG1hcmlvKTtcclxuICAgIGxldmVsLmVudGl0aWVzLmFkZChwbGF5ZXJFbnYpO1xyXG5cclxuICAgIGxldmVsLmNvbXAubGF5ZXJzLnB1c2goY3JlYXRlRGFzaGJvYXJkTGF5ZXIoZm9udCwgcGxheWVyRW52KSk7XHJcblxyXG4gICAgLypEZWJ1ZyBUb29scyA6ICovXHJcbiAgICAvLyBsZXZlbC5jb21wLmxheWVycy5wdXNoKGNyZWF0ZUNvbGxpc2lvbkxheWVyKGxldmVsKSk7XHJcbiAgICAvLyBsZXZlbC5jb21wLmxheWVycy5wdXNoKGNyZWF0ZUNhbWVyYUxheWVyKGNhbWVyYSkpO1xyXG4gICAgLy8gc2V0dXBNb3VzZUNvbnRyb2woY2FudmFzLCBtYXJpbywgY2FtZXJhKTtcclxuXHJcbiAgICAvLyBUT0RPIE9wdGltaXplIEhhY2sgZm9yIENvbXBhdGliaWxpdHlcclxuICAgIGxldCBmcHMgPSAxLzYwO1xyXG5cclxuICAgIGNvbnN0IHVhSW5mbyA9IGdldFVzZXJBZ2VudCgpO1xyXG4gICAgaWYgKHVhSW5mby5wbGF0Zm9ybSA9PT0gJ0FuZHJvaWQnXHJcbiAgICAgICAgfHwgdWFJbmZvLnBsYXRmb3JtID09PSAnaU9TJykge1xyXG4gICAgICAgIHNldHVwVG91Y2hQYWQobWFyaW8pO1xyXG5cclxuICAgICAgICAvLyBGb3IgbG93LWVuZCBkZXZpY2UsIGRlY3JlYXNlIGZwcyBmb3IgYmV0dGVyIGV4cGVyaWVuY2UuXHJcbiAgICAgICAgaWYgKCh1YUluZm8ucGxhdGZvcm0gPT09ICdpT1MnICYmIHVhSW5mby52ZXIgPCAxMSlcclxuICAgICAgICAgICAgICB8fCAodWFJbmZvLnBsYXRmb3JtID09PSAnQW5kcm9pZCcgJiYgdWFJbmZvLnZlciA8IDcpKSB7XHJcbiAgICAgICAgICAgIGZwcyA9IDEvMzA7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAvLyBpZiAodWFJbmZvLnBsYXRmb3JtID09PSAnaU9TJykge1xyXG4gICAgICAgIC8vICAgICBhdXRvUGxheU9uaU9TKCk7XHJcbiAgICAgICAgLy8gfVxyXG4gICAgfSBlbHNlIHtcclxuICAgICAgICBjb25zdCBpbnB1dCA9IHNldHVwS2V5Ym9hcmQobWFyaW8pO1xyXG4gICAgICAgIGlucHV0Lmxpc3RlblRvKHdpbmRvdyk7XHJcbiAgICB9XHJcblxyXG4gICAgY29uc3QgdGltZXIgPSBuZXcgVGltZXIoZnBzKTtcclxuXHJcbiAgICB0aW1lci51cGRhdGUgPSBmdW5jdGlvbiB1cGRhdGUoZGVsdGFUaW1lKSB7XHJcbiAgICAgICAgbGV2ZWwudXBkYXRlKGRlbHRhVGltZSk7XHJcblxyXG4gICAgICAgIGNhbWVyYS5wb3MueCA9IE1hdGgubWF4KDAsIG1hcmlvLnBvcy54IC0gMTAwKTtcclxuXHJcbiAgICAgICAgbGV2ZWwuY29tcC5kcmF3KGNvbnRleHQsIGNhbWVyYSk7XHJcblxyXG4gICAgICAgIGNvbnRyb2xFbnRpdGllcyhjYW1lcmEsIGxldmVsLCBlbnRpdHlGYWN0b3J5KVxyXG4gICAgfTtcclxuXHJcbiAgICB0aW1lci5zdGFydCgpO1xyXG59XHJcblxyXG5cclxuY29uc3QgY2FudmFzID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3NjcmVlbicpO1xyXG5tYWluKGNhbnZhcyk7XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vcHVibGljL2pzL21haW4uanMiLCIvKipcbiAqIENvcHlyaWdodCAoYykgMjAxNC1wcmVzZW50LCBGYWNlYm9vaywgSW5jLlxuICpcbiAqIFRoaXMgc291cmNlIGNvZGUgaXMgbGljZW5zZWQgdW5kZXIgdGhlIE1JVCBsaWNlbnNlIGZvdW5kIGluIHRoZVxuICogTElDRU5TRSBmaWxlIGluIHRoZSByb290IGRpcmVjdG9yeSBvZiB0aGlzIHNvdXJjZSB0cmVlLlxuICovXG5cbi8vIFRoaXMgbWV0aG9kIG9mIG9idGFpbmluZyBhIHJlZmVyZW5jZSB0byB0aGUgZ2xvYmFsIG9iamVjdCBuZWVkcyB0byBiZVxuLy8ga2VwdCBpZGVudGljYWwgdG8gdGhlIHdheSBpdCBpcyBvYnRhaW5lZCBpbiBydW50aW1lLmpzXG52YXIgZyA9IChmdW5jdGlvbigpIHsgcmV0dXJuIHRoaXMgfSkoKSB8fCBGdW5jdGlvbihcInJldHVybiB0aGlzXCIpKCk7XG5cbi8vIFVzZSBgZ2V0T3duUHJvcGVydHlOYW1lc2AgYmVjYXVzZSBub3QgYWxsIGJyb3dzZXJzIHN1cHBvcnQgY2FsbGluZ1xuLy8gYGhhc093blByb3BlcnR5YCBvbiB0aGUgZ2xvYmFsIGBzZWxmYCBvYmplY3QgaW4gYSB3b3JrZXIuIFNlZSAjMTgzLlxudmFyIGhhZFJ1bnRpbWUgPSBnLnJlZ2VuZXJhdG9yUnVudGltZSAmJlxuICBPYmplY3QuZ2V0T3duUHJvcGVydHlOYW1lcyhnKS5pbmRleE9mKFwicmVnZW5lcmF0b3JSdW50aW1lXCIpID49IDA7XG5cbi8vIFNhdmUgdGhlIG9sZCByZWdlbmVyYXRvclJ1bnRpbWUgaW4gY2FzZSBpdCBuZWVkcyB0byBiZSByZXN0b3JlZCBsYXRlci5cbnZhciBvbGRSdW50aW1lID0gaGFkUnVudGltZSAmJiBnLnJlZ2VuZXJhdG9yUnVudGltZTtcblxuLy8gRm9yY2UgcmVldmFsdXRhdGlvbiBvZiBydW50aW1lLmpzLlxuZy5yZWdlbmVyYXRvclJ1bnRpbWUgPSB1bmRlZmluZWQ7XG5cbm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIi4vcnVudGltZVwiKTtcblxuaWYgKGhhZFJ1bnRpbWUpIHtcbiAgLy8gUmVzdG9yZSB0aGUgb3JpZ2luYWwgcnVudGltZS5cbiAgZy5yZWdlbmVyYXRvclJ1bnRpbWUgPSBvbGRSdW50aW1lO1xufSBlbHNlIHtcbiAgLy8gUmVtb3ZlIHRoZSBnbG9iYWwgcHJvcGVydHkgYWRkZWQgYnkgcnVudGltZS5qcy5cbiAgdHJ5IHtcbiAgICBkZWxldGUgZy5yZWdlbmVyYXRvclJ1bnRpbWU7XG4gIH0gY2F0Y2goZSkge1xuICAgIGcucmVnZW5lcmF0b3JSdW50aW1lID0gdW5kZWZpbmVkO1xuICB9XG59XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL25vZGVfbW9kdWxlcy9fcmVnZW5lcmF0b3ItcnVudGltZUAwLjExLjFAcmVnZW5lcmF0b3ItcnVudGltZS9ydW50aW1lLW1vZHVsZS5qc1xuLy8gbW9kdWxlIGlkID0gOTVcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiLyoqXG4gKiBDb3B5cmlnaHQgKGMpIDIwMTQtcHJlc2VudCwgRmFjZWJvb2ssIEluYy5cbiAqXG4gKiBUaGlzIHNvdXJjZSBjb2RlIGlzIGxpY2Vuc2VkIHVuZGVyIHRoZSBNSVQgbGljZW5zZSBmb3VuZCBpbiB0aGVcbiAqIExJQ0VOU0UgZmlsZSBpbiB0aGUgcm9vdCBkaXJlY3Rvcnkgb2YgdGhpcyBzb3VyY2UgdHJlZS5cbiAqL1xuXG4hKGZ1bmN0aW9uKGdsb2JhbCkge1xuICBcInVzZSBzdHJpY3RcIjtcblxuICB2YXIgT3AgPSBPYmplY3QucHJvdG90eXBlO1xuICB2YXIgaGFzT3duID0gT3AuaGFzT3duUHJvcGVydHk7XG4gIHZhciB1bmRlZmluZWQ7IC8vIE1vcmUgY29tcHJlc3NpYmxlIHRoYW4gdm9pZCAwLlxuICB2YXIgJFN5bWJvbCA9IHR5cGVvZiBTeW1ib2wgPT09IFwiZnVuY3Rpb25cIiA/IFN5bWJvbCA6IHt9O1xuICB2YXIgaXRlcmF0b3JTeW1ib2wgPSAkU3ltYm9sLml0ZXJhdG9yIHx8IFwiQEBpdGVyYXRvclwiO1xuICB2YXIgYXN5bmNJdGVyYXRvclN5bWJvbCA9ICRTeW1ib2wuYXN5bmNJdGVyYXRvciB8fCBcIkBAYXN5bmNJdGVyYXRvclwiO1xuICB2YXIgdG9TdHJpbmdUYWdTeW1ib2wgPSAkU3ltYm9sLnRvU3RyaW5nVGFnIHx8IFwiQEB0b1N0cmluZ1RhZ1wiO1xuXG4gIHZhciBpbk1vZHVsZSA9IHR5cGVvZiBtb2R1bGUgPT09IFwib2JqZWN0XCI7XG4gIHZhciBydW50aW1lID0gZ2xvYmFsLnJlZ2VuZXJhdG9yUnVudGltZTtcbiAgaWYgKHJ1bnRpbWUpIHtcbiAgICBpZiAoaW5Nb2R1bGUpIHtcbiAgICAgIC8vIElmIHJlZ2VuZXJhdG9yUnVudGltZSBpcyBkZWZpbmVkIGdsb2JhbGx5IGFuZCB3ZSdyZSBpbiBhIG1vZHVsZSxcbiAgICAgIC8vIG1ha2UgdGhlIGV4cG9ydHMgb2JqZWN0IGlkZW50aWNhbCB0byByZWdlbmVyYXRvclJ1bnRpbWUuXG4gICAgICBtb2R1bGUuZXhwb3J0cyA9IHJ1bnRpbWU7XG4gICAgfVxuICAgIC8vIERvbid0IGJvdGhlciBldmFsdWF0aW5nIHRoZSByZXN0IG9mIHRoaXMgZmlsZSBpZiB0aGUgcnVudGltZSB3YXNcbiAgICAvLyBhbHJlYWR5IGRlZmluZWQgZ2xvYmFsbHkuXG4gICAgcmV0dXJuO1xuICB9XG5cbiAgLy8gRGVmaW5lIHRoZSBydW50aW1lIGdsb2JhbGx5IChhcyBleHBlY3RlZCBieSBnZW5lcmF0ZWQgY29kZSkgYXMgZWl0aGVyXG4gIC8vIG1vZHVsZS5leHBvcnRzIChpZiB3ZSdyZSBpbiBhIG1vZHVsZSkgb3IgYSBuZXcsIGVtcHR5IG9iamVjdC5cbiAgcnVudGltZSA9IGdsb2JhbC5yZWdlbmVyYXRvclJ1bnRpbWUgPSBpbk1vZHVsZSA/IG1vZHVsZS5leHBvcnRzIDoge307XG5cbiAgZnVuY3Rpb24gd3JhcChpbm5lckZuLCBvdXRlckZuLCBzZWxmLCB0cnlMb2NzTGlzdCkge1xuICAgIC8vIElmIG91dGVyRm4gcHJvdmlkZWQgYW5kIG91dGVyRm4ucHJvdG90eXBlIGlzIGEgR2VuZXJhdG9yLCB0aGVuIG91dGVyRm4ucHJvdG90eXBlIGluc3RhbmNlb2YgR2VuZXJhdG9yLlxuICAgIHZhciBwcm90b0dlbmVyYXRvciA9IG91dGVyRm4gJiYgb3V0ZXJGbi5wcm90b3R5cGUgaW5zdGFuY2VvZiBHZW5lcmF0b3IgPyBvdXRlckZuIDogR2VuZXJhdG9yO1xuICAgIHZhciBnZW5lcmF0b3IgPSBPYmplY3QuY3JlYXRlKHByb3RvR2VuZXJhdG9yLnByb3RvdHlwZSk7XG4gICAgdmFyIGNvbnRleHQgPSBuZXcgQ29udGV4dCh0cnlMb2NzTGlzdCB8fCBbXSk7XG5cbiAgICAvLyBUaGUgLl9pbnZva2UgbWV0aG9kIHVuaWZpZXMgdGhlIGltcGxlbWVudGF0aW9ucyBvZiB0aGUgLm5leHQsXG4gICAgLy8gLnRocm93LCBhbmQgLnJldHVybiBtZXRob2RzLlxuICAgIGdlbmVyYXRvci5faW52b2tlID0gbWFrZUludm9rZU1ldGhvZChpbm5lckZuLCBzZWxmLCBjb250ZXh0KTtcblxuICAgIHJldHVybiBnZW5lcmF0b3I7XG4gIH1cbiAgcnVudGltZS53cmFwID0gd3JhcDtcblxuICAvLyBUcnkvY2F0Y2ggaGVscGVyIHRvIG1pbmltaXplIGRlb3B0aW1pemF0aW9ucy4gUmV0dXJucyBhIGNvbXBsZXRpb25cbiAgLy8gcmVjb3JkIGxpa2UgY29udGV4dC50cnlFbnRyaWVzW2ldLmNvbXBsZXRpb24uIFRoaXMgaW50ZXJmYWNlIGNvdWxkXG4gIC8vIGhhdmUgYmVlbiAoYW5kIHdhcyBwcmV2aW91c2x5KSBkZXNpZ25lZCB0byB0YWtlIGEgY2xvc3VyZSB0byBiZVxuICAvLyBpbnZva2VkIHdpdGhvdXQgYXJndW1lbnRzLCBidXQgaW4gYWxsIHRoZSBjYXNlcyB3ZSBjYXJlIGFib3V0IHdlXG4gIC8vIGFscmVhZHkgaGF2ZSBhbiBleGlzdGluZyBtZXRob2Qgd2Ugd2FudCB0byBjYWxsLCBzbyB0aGVyZSdzIG5vIG5lZWRcbiAgLy8gdG8gY3JlYXRlIGEgbmV3IGZ1bmN0aW9uIG9iamVjdC4gV2UgY2FuIGV2ZW4gZ2V0IGF3YXkgd2l0aCBhc3N1bWluZ1xuICAvLyB0aGUgbWV0aG9kIHRha2VzIGV4YWN0bHkgb25lIGFyZ3VtZW50LCBzaW5jZSB0aGF0IGhhcHBlbnMgdG8gYmUgdHJ1ZVxuICAvLyBpbiBldmVyeSBjYXNlLCBzbyB3ZSBkb24ndCBoYXZlIHRvIHRvdWNoIHRoZSBhcmd1bWVudHMgb2JqZWN0LiBUaGVcbiAgLy8gb25seSBhZGRpdGlvbmFsIGFsbG9jYXRpb24gcmVxdWlyZWQgaXMgdGhlIGNvbXBsZXRpb24gcmVjb3JkLCB3aGljaFxuICAvLyBoYXMgYSBzdGFibGUgc2hhcGUgYW5kIHNvIGhvcGVmdWxseSBzaG91bGQgYmUgY2hlYXAgdG8gYWxsb2NhdGUuXG4gIGZ1bmN0aW9uIHRyeUNhdGNoKGZuLCBvYmosIGFyZykge1xuICAgIHRyeSB7XG4gICAgICByZXR1cm4geyB0eXBlOiBcIm5vcm1hbFwiLCBhcmc6IGZuLmNhbGwob2JqLCBhcmcpIH07XG4gICAgfSBjYXRjaCAoZXJyKSB7XG4gICAgICByZXR1cm4geyB0eXBlOiBcInRocm93XCIsIGFyZzogZXJyIH07XG4gICAgfVxuICB9XG5cbiAgdmFyIEdlblN0YXRlU3VzcGVuZGVkU3RhcnQgPSBcInN1c3BlbmRlZFN0YXJ0XCI7XG4gIHZhciBHZW5TdGF0ZVN1c3BlbmRlZFlpZWxkID0gXCJzdXNwZW5kZWRZaWVsZFwiO1xuICB2YXIgR2VuU3RhdGVFeGVjdXRpbmcgPSBcImV4ZWN1dGluZ1wiO1xuICB2YXIgR2VuU3RhdGVDb21wbGV0ZWQgPSBcImNvbXBsZXRlZFwiO1xuXG4gIC8vIFJldHVybmluZyB0aGlzIG9iamVjdCBmcm9tIHRoZSBpbm5lckZuIGhhcyB0aGUgc2FtZSBlZmZlY3QgYXNcbiAgLy8gYnJlYWtpbmcgb3V0IG9mIHRoZSBkaXNwYXRjaCBzd2l0Y2ggc3RhdGVtZW50LlxuICB2YXIgQ29udGludWVTZW50aW5lbCA9IHt9O1xuXG4gIC8vIER1bW15IGNvbnN0cnVjdG9yIGZ1bmN0aW9ucyB0aGF0IHdlIHVzZSBhcyB0aGUgLmNvbnN0cnVjdG9yIGFuZFxuICAvLyAuY29uc3RydWN0b3IucHJvdG90eXBlIHByb3BlcnRpZXMgZm9yIGZ1bmN0aW9ucyB0aGF0IHJldHVybiBHZW5lcmF0b3JcbiAgLy8gb2JqZWN0cy4gRm9yIGZ1bGwgc3BlYyBjb21wbGlhbmNlLCB5b3UgbWF5IHdpc2ggdG8gY29uZmlndXJlIHlvdXJcbiAgLy8gbWluaWZpZXIgbm90IHRvIG1hbmdsZSB0aGUgbmFtZXMgb2YgdGhlc2UgdHdvIGZ1bmN0aW9ucy5cbiAgZnVuY3Rpb24gR2VuZXJhdG9yKCkge31cbiAgZnVuY3Rpb24gR2VuZXJhdG9yRnVuY3Rpb24oKSB7fVxuICBmdW5jdGlvbiBHZW5lcmF0b3JGdW5jdGlvblByb3RvdHlwZSgpIHt9XG5cbiAgLy8gVGhpcyBpcyBhIHBvbHlmaWxsIGZvciAlSXRlcmF0b3JQcm90b3R5cGUlIGZvciBlbnZpcm9ubWVudHMgdGhhdFxuICAvLyBkb24ndCBuYXRpdmVseSBzdXBwb3J0IGl0LlxuICB2YXIgSXRlcmF0b3JQcm90b3R5cGUgPSB7fTtcbiAgSXRlcmF0b3JQcm90b3R5cGVbaXRlcmF0b3JTeW1ib2xdID0gZnVuY3Rpb24gKCkge1xuICAgIHJldHVybiB0aGlzO1xuICB9O1xuXG4gIHZhciBnZXRQcm90byA9IE9iamVjdC5nZXRQcm90b3R5cGVPZjtcbiAgdmFyIE5hdGl2ZUl0ZXJhdG9yUHJvdG90eXBlID0gZ2V0UHJvdG8gJiYgZ2V0UHJvdG8oZ2V0UHJvdG8odmFsdWVzKFtdKSkpO1xuICBpZiAoTmF0aXZlSXRlcmF0b3JQcm90b3R5cGUgJiZcbiAgICAgIE5hdGl2ZUl0ZXJhdG9yUHJvdG90eXBlICE9PSBPcCAmJlxuICAgICAgaGFzT3duLmNhbGwoTmF0aXZlSXRlcmF0b3JQcm90b3R5cGUsIGl0ZXJhdG9yU3ltYm9sKSkge1xuICAgIC8vIFRoaXMgZW52aXJvbm1lbnQgaGFzIGEgbmF0aXZlICVJdGVyYXRvclByb3RvdHlwZSU7IHVzZSBpdCBpbnN0ZWFkXG4gICAgLy8gb2YgdGhlIHBvbHlmaWxsLlxuICAgIEl0ZXJhdG9yUHJvdG90eXBlID0gTmF0aXZlSXRlcmF0b3JQcm90b3R5cGU7XG4gIH1cblxuICB2YXIgR3AgPSBHZW5lcmF0b3JGdW5jdGlvblByb3RvdHlwZS5wcm90b3R5cGUgPVxuICAgIEdlbmVyYXRvci5wcm90b3R5cGUgPSBPYmplY3QuY3JlYXRlKEl0ZXJhdG9yUHJvdG90eXBlKTtcbiAgR2VuZXJhdG9yRnVuY3Rpb24ucHJvdG90eXBlID0gR3AuY29uc3RydWN0b3IgPSBHZW5lcmF0b3JGdW5jdGlvblByb3RvdHlwZTtcbiAgR2VuZXJhdG9yRnVuY3Rpb25Qcm90b3R5cGUuY29uc3RydWN0b3IgPSBHZW5lcmF0b3JGdW5jdGlvbjtcbiAgR2VuZXJhdG9yRnVuY3Rpb25Qcm90b3R5cGVbdG9TdHJpbmdUYWdTeW1ib2xdID1cbiAgICBHZW5lcmF0b3JGdW5jdGlvbi5kaXNwbGF5TmFtZSA9IFwiR2VuZXJhdG9yRnVuY3Rpb25cIjtcblxuICAvLyBIZWxwZXIgZm9yIGRlZmluaW5nIHRoZSAubmV4dCwgLnRocm93LCBhbmQgLnJldHVybiBtZXRob2RzIG9mIHRoZVxuICAvLyBJdGVyYXRvciBpbnRlcmZhY2UgaW4gdGVybXMgb2YgYSBzaW5nbGUgLl9pbnZva2UgbWV0aG9kLlxuICBmdW5jdGlvbiBkZWZpbmVJdGVyYXRvck1ldGhvZHMocHJvdG90eXBlKSB7XG4gICAgW1wibmV4dFwiLCBcInRocm93XCIsIFwicmV0dXJuXCJdLmZvckVhY2goZnVuY3Rpb24obWV0aG9kKSB7XG4gICAgICBwcm90b3R5cGVbbWV0aG9kXSA9IGZ1bmN0aW9uKGFyZykge1xuICAgICAgICByZXR1cm4gdGhpcy5faW52b2tlKG1ldGhvZCwgYXJnKTtcbiAgICAgIH07XG4gICAgfSk7XG4gIH1cblxuICBydW50aW1lLmlzR2VuZXJhdG9yRnVuY3Rpb24gPSBmdW5jdGlvbihnZW5GdW4pIHtcbiAgICB2YXIgY3RvciA9IHR5cGVvZiBnZW5GdW4gPT09IFwiZnVuY3Rpb25cIiAmJiBnZW5GdW4uY29uc3RydWN0b3I7XG4gICAgcmV0dXJuIGN0b3JcbiAgICAgID8gY3RvciA9PT0gR2VuZXJhdG9yRnVuY3Rpb24gfHxcbiAgICAgICAgLy8gRm9yIHRoZSBuYXRpdmUgR2VuZXJhdG9yRnVuY3Rpb24gY29uc3RydWN0b3IsIHRoZSBiZXN0IHdlIGNhblxuICAgICAgICAvLyBkbyBpcyB0byBjaGVjayBpdHMgLm5hbWUgcHJvcGVydHkuXG4gICAgICAgIChjdG9yLmRpc3BsYXlOYW1lIHx8IGN0b3IubmFtZSkgPT09IFwiR2VuZXJhdG9yRnVuY3Rpb25cIlxuICAgICAgOiBmYWxzZTtcbiAgfTtcblxuICBydW50aW1lLm1hcmsgPSBmdW5jdGlvbihnZW5GdW4pIHtcbiAgICBpZiAoT2JqZWN0LnNldFByb3RvdHlwZU9mKSB7XG4gICAgICBPYmplY3Quc2V0UHJvdG90eXBlT2YoZ2VuRnVuLCBHZW5lcmF0b3JGdW5jdGlvblByb3RvdHlwZSk7XG4gICAgfSBlbHNlIHtcbiAgICAgIGdlbkZ1bi5fX3Byb3RvX18gPSBHZW5lcmF0b3JGdW5jdGlvblByb3RvdHlwZTtcbiAgICAgIGlmICghKHRvU3RyaW5nVGFnU3ltYm9sIGluIGdlbkZ1bikpIHtcbiAgICAgICAgZ2VuRnVuW3RvU3RyaW5nVGFnU3ltYm9sXSA9IFwiR2VuZXJhdG9yRnVuY3Rpb25cIjtcbiAgICAgIH1cbiAgICB9XG4gICAgZ2VuRnVuLnByb3RvdHlwZSA9IE9iamVjdC5jcmVhdGUoR3ApO1xuICAgIHJldHVybiBnZW5GdW47XG4gIH07XG5cbiAgLy8gV2l0aGluIHRoZSBib2R5IG9mIGFueSBhc3luYyBmdW5jdGlvbiwgYGF3YWl0IHhgIGlzIHRyYW5zZm9ybWVkIHRvXG4gIC8vIGB5aWVsZCByZWdlbmVyYXRvclJ1bnRpbWUuYXdyYXAoeClgLCBzbyB0aGF0IHRoZSBydW50aW1lIGNhbiB0ZXN0XG4gIC8vIGBoYXNPd24uY2FsbCh2YWx1ZSwgXCJfX2F3YWl0XCIpYCB0byBkZXRlcm1pbmUgaWYgdGhlIHlpZWxkZWQgdmFsdWUgaXNcbiAgLy8gbWVhbnQgdG8gYmUgYXdhaXRlZC5cbiAgcnVudGltZS5hd3JhcCA9IGZ1bmN0aW9uKGFyZykge1xuICAgIHJldHVybiB7IF9fYXdhaXQ6IGFyZyB9O1xuICB9O1xuXG4gIGZ1bmN0aW9uIEFzeW5jSXRlcmF0b3IoZ2VuZXJhdG9yKSB7XG4gICAgZnVuY3Rpb24gaW52b2tlKG1ldGhvZCwgYXJnLCByZXNvbHZlLCByZWplY3QpIHtcbiAgICAgIHZhciByZWNvcmQgPSB0cnlDYXRjaChnZW5lcmF0b3JbbWV0aG9kXSwgZ2VuZXJhdG9yLCBhcmcpO1xuICAgICAgaWYgKHJlY29yZC50eXBlID09PSBcInRocm93XCIpIHtcbiAgICAgICAgcmVqZWN0KHJlY29yZC5hcmcpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgdmFyIHJlc3VsdCA9IHJlY29yZC5hcmc7XG4gICAgICAgIHZhciB2YWx1ZSA9IHJlc3VsdC52YWx1ZTtcbiAgICAgICAgaWYgKHZhbHVlICYmXG4gICAgICAgICAgICB0eXBlb2YgdmFsdWUgPT09IFwib2JqZWN0XCIgJiZcbiAgICAgICAgICAgIGhhc093bi5jYWxsKHZhbHVlLCBcIl9fYXdhaXRcIikpIHtcbiAgICAgICAgICByZXR1cm4gUHJvbWlzZS5yZXNvbHZlKHZhbHVlLl9fYXdhaXQpLnRoZW4oZnVuY3Rpb24odmFsdWUpIHtcbiAgICAgICAgICAgIGludm9rZShcIm5leHRcIiwgdmFsdWUsIHJlc29sdmUsIHJlamVjdCk7XG4gICAgICAgICAgfSwgZnVuY3Rpb24oZXJyKSB7XG4gICAgICAgICAgICBpbnZva2UoXCJ0aHJvd1wiLCBlcnIsIHJlc29sdmUsIHJlamVjdCk7XG4gICAgICAgICAgfSk7XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gUHJvbWlzZS5yZXNvbHZlKHZhbHVlKS50aGVuKGZ1bmN0aW9uKHVud3JhcHBlZCkge1xuICAgICAgICAgIC8vIFdoZW4gYSB5aWVsZGVkIFByb21pc2UgaXMgcmVzb2x2ZWQsIGl0cyBmaW5hbCB2YWx1ZSBiZWNvbWVzXG4gICAgICAgICAgLy8gdGhlIC52YWx1ZSBvZiB0aGUgUHJvbWlzZTx7dmFsdWUsZG9uZX0+IHJlc3VsdCBmb3IgdGhlXG4gICAgICAgICAgLy8gY3VycmVudCBpdGVyYXRpb24uIElmIHRoZSBQcm9taXNlIGlzIHJlamVjdGVkLCBob3dldmVyLCB0aGVcbiAgICAgICAgICAvLyByZXN1bHQgZm9yIHRoaXMgaXRlcmF0aW9uIHdpbGwgYmUgcmVqZWN0ZWQgd2l0aCB0aGUgc2FtZVxuICAgICAgICAgIC8vIHJlYXNvbi4gTm90ZSB0aGF0IHJlamVjdGlvbnMgb2YgeWllbGRlZCBQcm9taXNlcyBhcmUgbm90XG4gICAgICAgICAgLy8gdGhyb3duIGJhY2sgaW50byB0aGUgZ2VuZXJhdG9yIGZ1bmN0aW9uLCBhcyBpcyB0aGUgY2FzZVxuICAgICAgICAgIC8vIHdoZW4gYW4gYXdhaXRlZCBQcm9taXNlIGlzIHJlamVjdGVkLiBUaGlzIGRpZmZlcmVuY2UgaW5cbiAgICAgICAgICAvLyBiZWhhdmlvciBiZXR3ZWVuIHlpZWxkIGFuZCBhd2FpdCBpcyBpbXBvcnRhbnQsIGJlY2F1c2UgaXRcbiAgICAgICAgICAvLyBhbGxvd3MgdGhlIGNvbnN1bWVyIHRvIGRlY2lkZSB3aGF0IHRvIGRvIHdpdGggdGhlIHlpZWxkZWRcbiAgICAgICAgICAvLyByZWplY3Rpb24gKHN3YWxsb3cgaXQgYW5kIGNvbnRpbnVlLCBtYW51YWxseSAudGhyb3cgaXQgYmFja1xuICAgICAgICAgIC8vIGludG8gdGhlIGdlbmVyYXRvciwgYWJhbmRvbiBpdGVyYXRpb24sIHdoYXRldmVyKS4gV2l0aFxuICAgICAgICAgIC8vIGF3YWl0LCBieSBjb250cmFzdCwgdGhlcmUgaXMgbm8gb3Bwb3J0dW5pdHkgdG8gZXhhbWluZSB0aGVcbiAgICAgICAgICAvLyByZWplY3Rpb24gcmVhc29uIG91dHNpZGUgdGhlIGdlbmVyYXRvciBmdW5jdGlvbiwgc28gdGhlXG4gICAgICAgICAgLy8gb25seSBvcHRpb24gaXMgdG8gdGhyb3cgaXQgZnJvbSB0aGUgYXdhaXQgZXhwcmVzc2lvbiwgYW5kXG4gICAgICAgICAgLy8gbGV0IHRoZSBnZW5lcmF0b3IgZnVuY3Rpb24gaGFuZGxlIHRoZSBleGNlcHRpb24uXG4gICAgICAgICAgcmVzdWx0LnZhbHVlID0gdW53cmFwcGVkO1xuICAgICAgICAgIHJlc29sdmUocmVzdWx0KTtcbiAgICAgICAgfSwgcmVqZWN0KTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICB2YXIgcHJldmlvdXNQcm9taXNlO1xuXG4gICAgZnVuY3Rpb24gZW5xdWV1ZShtZXRob2QsIGFyZykge1xuICAgICAgZnVuY3Rpb24gY2FsbEludm9rZVdpdGhNZXRob2RBbmRBcmcoKSB7XG4gICAgICAgIHJldHVybiBuZXcgUHJvbWlzZShmdW5jdGlvbihyZXNvbHZlLCByZWplY3QpIHtcbiAgICAgICAgICBpbnZva2UobWV0aG9kLCBhcmcsIHJlc29sdmUsIHJlamVjdCk7XG4gICAgICAgIH0pO1xuICAgICAgfVxuXG4gICAgICByZXR1cm4gcHJldmlvdXNQcm9taXNlID1cbiAgICAgICAgLy8gSWYgZW5xdWV1ZSBoYXMgYmVlbiBjYWxsZWQgYmVmb3JlLCB0aGVuIHdlIHdhbnQgdG8gd2FpdCB1bnRpbFxuICAgICAgICAvLyBhbGwgcHJldmlvdXMgUHJvbWlzZXMgaGF2ZSBiZWVuIHJlc29sdmVkIGJlZm9yZSBjYWxsaW5nIGludm9rZSxcbiAgICAgICAgLy8gc28gdGhhdCByZXN1bHRzIGFyZSBhbHdheXMgZGVsaXZlcmVkIGluIHRoZSBjb3JyZWN0IG9yZGVyLiBJZlxuICAgICAgICAvLyBlbnF1ZXVlIGhhcyBub3QgYmVlbiBjYWxsZWQgYmVmb3JlLCB0aGVuIGl0IGlzIGltcG9ydGFudCB0b1xuICAgICAgICAvLyBjYWxsIGludm9rZSBpbW1lZGlhdGVseSwgd2l0aG91dCB3YWl0aW5nIG9uIGEgY2FsbGJhY2sgdG8gZmlyZSxcbiAgICAgICAgLy8gc28gdGhhdCB0aGUgYXN5bmMgZ2VuZXJhdG9yIGZ1bmN0aW9uIGhhcyB0aGUgb3Bwb3J0dW5pdHkgdG8gZG9cbiAgICAgICAgLy8gYW55IG5lY2Vzc2FyeSBzZXR1cCBpbiBhIHByZWRpY3RhYmxlIHdheS4gVGhpcyBwcmVkaWN0YWJpbGl0eVxuICAgICAgICAvLyBpcyB3aHkgdGhlIFByb21pc2UgY29uc3RydWN0b3Igc3luY2hyb25vdXNseSBpbnZva2VzIGl0c1xuICAgICAgICAvLyBleGVjdXRvciBjYWxsYmFjaywgYW5kIHdoeSBhc3luYyBmdW5jdGlvbnMgc3luY2hyb25vdXNseVxuICAgICAgICAvLyBleGVjdXRlIGNvZGUgYmVmb3JlIHRoZSBmaXJzdCBhd2FpdC4gU2luY2Ugd2UgaW1wbGVtZW50IHNpbXBsZVxuICAgICAgICAvLyBhc3luYyBmdW5jdGlvbnMgaW4gdGVybXMgb2YgYXN5bmMgZ2VuZXJhdG9ycywgaXQgaXMgZXNwZWNpYWxseVxuICAgICAgICAvLyBpbXBvcnRhbnQgdG8gZ2V0IHRoaXMgcmlnaHQsIGV2ZW4gdGhvdWdoIGl0IHJlcXVpcmVzIGNhcmUuXG4gICAgICAgIHByZXZpb3VzUHJvbWlzZSA/IHByZXZpb3VzUHJvbWlzZS50aGVuKFxuICAgICAgICAgIGNhbGxJbnZva2VXaXRoTWV0aG9kQW5kQXJnLFxuICAgICAgICAgIC8vIEF2b2lkIHByb3BhZ2F0aW5nIGZhaWx1cmVzIHRvIFByb21pc2VzIHJldHVybmVkIGJ5IGxhdGVyXG4gICAgICAgICAgLy8gaW52b2NhdGlvbnMgb2YgdGhlIGl0ZXJhdG9yLlxuICAgICAgICAgIGNhbGxJbnZva2VXaXRoTWV0aG9kQW5kQXJnXG4gICAgICAgICkgOiBjYWxsSW52b2tlV2l0aE1ldGhvZEFuZEFyZygpO1xuICAgIH1cblxuICAgIC8vIERlZmluZSB0aGUgdW5pZmllZCBoZWxwZXIgbWV0aG9kIHRoYXQgaXMgdXNlZCB0byBpbXBsZW1lbnQgLm5leHQsXG4gICAgLy8gLnRocm93LCBhbmQgLnJldHVybiAoc2VlIGRlZmluZUl0ZXJhdG9yTWV0aG9kcykuXG4gICAgdGhpcy5faW52b2tlID0gZW5xdWV1ZTtcbiAgfVxuXG4gIGRlZmluZUl0ZXJhdG9yTWV0aG9kcyhBc3luY0l0ZXJhdG9yLnByb3RvdHlwZSk7XG4gIEFzeW5jSXRlcmF0b3IucHJvdG90eXBlW2FzeW5jSXRlcmF0b3JTeW1ib2xdID0gZnVuY3Rpb24gKCkge1xuICAgIHJldHVybiB0aGlzO1xuICB9O1xuICBydW50aW1lLkFzeW5jSXRlcmF0b3IgPSBBc3luY0l0ZXJhdG9yO1xuXG4gIC8vIE5vdGUgdGhhdCBzaW1wbGUgYXN5bmMgZnVuY3Rpb25zIGFyZSBpbXBsZW1lbnRlZCBvbiB0b3Agb2ZcbiAgLy8gQXN5bmNJdGVyYXRvciBvYmplY3RzOyB0aGV5IGp1c3QgcmV0dXJuIGEgUHJvbWlzZSBmb3IgdGhlIHZhbHVlIG9mXG4gIC8vIHRoZSBmaW5hbCByZXN1bHQgcHJvZHVjZWQgYnkgdGhlIGl0ZXJhdG9yLlxuICBydW50aW1lLmFzeW5jID0gZnVuY3Rpb24oaW5uZXJGbiwgb3V0ZXJGbiwgc2VsZiwgdHJ5TG9jc0xpc3QpIHtcbiAgICB2YXIgaXRlciA9IG5ldyBBc3luY0l0ZXJhdG9yKFxuICAgICAgd3JhcChpbm5lckZuLCBvdXRlckZuLCBzZWxmLCB0cnlMb2NzTGlzdClcbiAgICApO1xuXG4gICAgcmV0dXJuIHJ1bnRpbWUuaXNHZW5lcmF0b3JGdW5jdGlvbihvdXRlckZuKVxuICAgICAgPyBpdGVyIC8vIElmIG91dGVyRm4gaXMgYSBnZW5lcmF0b3IsIHJldHVybiB0aGUgZnVsbCBpdGVyYXRvci5cbiAgICAgIDogaXRlci5uZXh0KCkudGhlbihmdW5jdGlvbihyZXN1bHQpIHtcbiAgICAgICAgICByZXR1cm4gcmVzdWx0LmRvbmUgPyByZXN1bHQudmFsdWUgOiBpdGVyLm5leHQoKTtcbiAgICAgICAgfSk7XG4gIH07XG5cbiAgZnVuY3Rpb24gbWFrZUludm9rZU1ldGhvZChpbm5lckZuLCBzZWxmLCBjb250ZXh0KSB7XG4gICAgdmFyIHN0YXRlID0gR2VuU3RhdGVTdXNwZW5kZWRTdGFydDtcblxuICAgIHJldHVybiBmdW5jdGlvbiBpbnZva2UobWV0aG9kLCBhcmcpIHtcbiAgICAgIGlmIChzdGF0ZSA9PT0gR2VuU3RhdGVFeGVjdXRpbmcpIHtcbiAgICAgICAgdGhyb3cgbmV3IEVycm9yKFwiR2VuZXJhdG9yIGlzIGFscmVhZHkgcnVubmluZ1wiKTtcbiAgICAgIH1cblxuICAgICAgaWYgKHN0YXRlID09PSBHZW5TdGF0ZUNvbXBsZXRlZCkge1xuICAgICAgICBpZiAobWV0aG9kID09PSBcInRocm93XCIpIHtcbiAgICAgICAgICB0aHJvdyBhcmc7XG4gICAgICAgIH1cblxuICAgICAgICAvLyBCZSBmb3JnaXZpbmcsIHBlciAyNS4zLjMuMy4zIG9mIHRoZSBzcGVjOlxuICAgICAgICAvLyBodHRwczovL3Blb3BsZS5tb3ppbGxhLm9yZy9+am9yZW5kb3JmZi9lczYtZHJhZnQuaHRtbCNzZWMtZ2VuZXJhdG9ycmVzdW1lXG4gICAgICAgIHJldHVybiBkb25lUmVzdWx0KCk7XG4gICAgICB9XG5cbiAgICAgIGNvbnRleHQubWV0aG9kID0gbWV0aG9kO1xuICAgICAgY29udGV4dC5hcmcgPSBhcmc7XG5cbiAgICAgIHdoaWxlICh0cnVlKSB7XG4gICAgICAgIHZhciBkZWxlZ2F0ZSA9IGNvbnRleHQuZGVsZWdhdGU7XG4gICAgICAgIGlmIChkZWxlZ2F0ZSkge1xuICAgICAgICAgIHZhciBkZWxlZ2F0ZVJlc3VsdCA9IG1heWJlSW52b2tlRGVsZWdhdGUoZGVsZWdhdGUsIGNvbnRleHQpO1xuICAgICAgICAgIGlmIChkZWxlZ2F0ZVJlc3VsdCkge1xuICAgICAgICAgICAgaWYgKGRlbGVnYXRlUmVzdWx0ID09PSBDb250aW51ZVNlbnRpbmVsKSBjb250aW51ZTtcbiAgICAgICAgICAgIHJldHVybiBkZWxlZ2F0ZVJlc3VsdDtcbiAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICBpZiAoY29udGV4dC5tZXRob2QgPT09IFwibmV4dFwiKSB7XG4gICAgICAgICAgLy8gU2V0dGluZyBjb250ZXh0Ll9zZW50IGZvciBsZWdhY3kgc3VwcG9ydCBvZiBCYWJlbCdzXG4gICAgICAgICAgLy8gZnVuY3Rpb24uc2VudCBpbXBsZW1lbnRhdGlvbi5cbiAgICAgICAgICBjb250ZXh0LnNlbnQgPSBjb250ZXh0Ll9zZW50ID0gY29udGV4dC5hcmc7XG5cbiAgICAgICAgfSBlbHNlIGlmIChjb250ZXh0Lm1ldGhvZCA9PT0gXCJ0aHJvd1wiKSB7XG4gICAgICAgICAgaWYgKHN0YXRlID09PSBHZW5TdGF0ZVN1c3BlbmRlZFN0YXJ0KSB7XG4gICAgICAgICAgICBzdGF0ZSA9IEdlblN0YXRlQ29tcGxldGVkO1xuICAgICAgICAgICAgdGhyb3cgY29udGV4dC5hcmc7XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgY29udGV4dC5kaXNwYXRjaEV4Y2VwdGlvbihjb250ZXh0LmFyZyk7XG5cbiAgICAgICAgfSBlbHNlIGlmIChjb250ZXh0Lm1ldGhvZCA9PT0gXCJyZXR1cm5cIikge1xuICAgICAgICAgIGNvbnRleHQuYWJydXB0KFwicmV0dXJuXCIsIGNvbnRleHQuYXJnKTtcbiAgICAgICAgfVxuXG4gICAgICAgIHN0YXRlID0gR2VuU3RhdGVFeGVjdXRpbmc7XG5cbiAgICAgICAgdmFyIHJlY29yZCA9IHRyeUNhdGNoKGlubmVyRm4sIHNlbGYsIGNvbnRleHQpO1xuICAgICAgICBpZiAocmVjb3JkLnR5cGUgPT09IFwibm9ybWFsXCIpIHtcbiAgICAgICAgICAvLyBJZiBhbiBleGNlcHRpb24gaXMgdGhyb3duIGZyb20gaW5uZXJGbiwgd2UgbGVhdmUgc3RhdGUgPT09XG4gICAgICAgICAgLy8gR2VuU3RhdGVFeGVjdXRpbmcgYW5kIGxvb3AgYmFjayBmb3IgYW5vdGhlciBpbnZvY2F0aW9uLlxuICAgICAgICAgIHN0YXRlID0gY29udGV4dC5kb25lXG4gICAgICAgICAgICA/IEdlblN0YXRlQ29tcGxldGVkXG4gICAgICAgICAgICA6IEdlblN0YXRlU3VzcGVuZGVkWWllbGQ7XG5cbiAgICAgICAgICBpZiAocmVjb3JkLmFyZyA9PT0gQ29udGludWVTZW50aW5lbCkge1xuICAgICAgICAgICAgY29udGludWU7XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgIHZhbHVlOiByZWNvcmQuYXJnLFxuICAgICAgICAgICAgZG9uZTogY29udGV4dC5kb25lXG4gICAgICAgICAgfTtcblxuICAgICAgICB9IGVsc2UgaWYgKHJlY29yZC50eXBlID09PSBcInRocm93XCIpIHtcbiAgICAgICAgICBzdGF0ZSA9IEdlblN0YXRlQ29tcGxldGVkO1xuICAgICAgICAgIC8vIERpc3BhdGNoIHRoZSBleGNlcHRpb24gYnkgbG9vcGluZyBiYWNrIGFyb3VuZCB0byB0aGVcbiAgICAgICAgICAvLyBjb250ZXh0LmRpc3BhdGNoRXhjZXB0aW9uKGNvbnRleHQuYXJnKSBjYWxsIGFib3ZlLlxuICAgICAgICAgIGNvbnRleHQubWV0aG9kID0gXCJ0aHJvd1wiO1xuICAgICAgICAgIGNvbnRleHQuYXJnID0gcmVjb3JkLmFyZztcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH07XG4gIH1cblxuICAvLyBDYWxsIGRlbGVnYXRlLml0ZXJhdG9yW2NvbnRleHQubWV0aG9kXShjb250ZXh0LmFyZykgYW5kIGhhbmRsZSB0aGVcbiAgLy8gcmVzdWx0LCBlaXRoZXIgYnkgcmV0dXJuaW5nIGEgeyB2YWx1ZSwgZG9uZSB9IHJlc3VsdCBmcm9tIHRoZVxuICAvLyBkZWxlZ2F0ZSBpdGVyYXRvciwgb3IgYnkgbW9kaWZ5aW5nIGNvbnRleHQubWV0aG9kIGFuZCBjb250ZXh0LmFyZyxcbiAgLy8gc2V0dGluZyBjb250ZXh0LmRlbGVnYXRlIHRvIG51bGwsIGFuZCByZXR1cm5pbmcgdGhlIENvbnRpbnVlU2VudGluZWwuXG4gIGZ1bmN0aW9uIG1heWJlSW52b2tlRGVsZWdhdGUoZGVsZWdhdGUsIGNvbnRleHQpIHtcbiAgICB2YXIgbWV0aG9kID0gZGVsZWdhdGUuaXRlcmF0b3JbY29udGV4dC5tZXRob2RdO1xuICAgIGlmIChtZXRob2QgPT09IHVuZGVmaW5lZCkge1xuICAgICAgLy8gQSAudGhyb3cgb3IgLnJldHVybiB3aGVuIHRoZSBkZWxlZ2F0ZSBpdGVyYXRvciBoYXMgbm8gLnRocm93XG4gICAgICAvLyBtZXRob2QgYWx3YXlzIHRlcm1pbmF0ZXMgdGhlIHlpZWxkKiBsb29wLlxuICAgICAgY29udGV4dC5kZWxlZ2F0ZSA9IG51bGw7XG5cbiAgICAgIGlmIChjb250ZXh0Lm1ldGhvZCA9PT0gXCJ0aHJvd1wiKSB7XG4gICAgICAgIGlmIChkZWxlZ2F0ZS5pdGVyYXRvci5yZXR1cm4pIHtcbiAgICAgICAgICAvLyBJZiB0aGUgZGVsZWdhdGUgaXRlcmF0b3IgaGFzIGEgcmV0dXJuIG1ldGhvZCwgZ2l2ZSBpdCBhXG4gICAgICAgICAgLy8gY2hhbmNlIHRvIGNsZWFuIHVwLlxuICAgICAgICAgIGNvbnRleHQubWV0aG9kID0gXCJyZXR1cm5cIjtcbiAgICAgICAgICBjb250ZXh0LmFyZyA9IHVuZGVmaW5lZDtcbiAgICAgICAgICBtYXliZUludm9rZURlbGVnYXRlKGRlbGVnYXRlLCBjb250ZXh0KTtcblxuICAgICAgICAgIGlmIChjb250ZXh0Lm1ldGhvZCA9PT0gXCJ0aHJvd1wiKSB7XG4gICAgICAgICAgICAvLyBJZiBtYXliZUludm9rZURlbGVnYXRlKGNvbnRleHQpIGNoYW5nZWQgY29udGV4dC5tZXRob2QgZnJvbVxuICAgICAgICAgICAgLy8gXCJyZXR1cm5cIiB0byBcInRocm93XCIsIGxldCB0aGF0IG92ZXJyaWRlIHRoZSBUeXBlRXJyb3IgYmVsb3cuXG4gICAgICAgICAgICByZXR1cm4gQ29udGludWVTZW50aW5lbDtcbiAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICBjb250ZXh0Lm1ldGhvZCA9IFwidGhyb3dcIjtcbiAgICAgICAgY29udGV4dC5hcmcgPSBuZXcgVHlwZUVycm9yKFxuICAgICAgICAgIFwiVGhlIGl0ZXJhdG9yIGRvZXMgbm90IHByb3ZpZGUgYSAndGhyb3cnIG1ldGhvZFwiKTtcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIENvbnRpbnVlU2VudGluZWw7XG4gICAgfVxuXG4gICAgdmFyIHJlY29yZCA9IHRyeUNhdGNoKG1ldGhvZCwgZGVsZWdhdGUuaXRlcmF0b3IsIGNvbnRleHQuYXJnKTtcblxuICAgIGlmIChyZWNvcmQudHlwZSA9PT0gXCJ0aHJvd1wiKSB7XG4gICAgICBjb250ZXh0Lm1ldGhvZCA9IFwidGhyb3dcIjtcbiAgICAgIGNvbnRleHQuYXJnID0gcmVjb3JkLmFyZztcbiAgICAgIGNvbnRleHQuZGVsZWdhdGUgPSBudWxsO1xuICAgICAgcmV0dXJuIENvbnRpbnVlU2VudGluZWw7XG4gICAgfVxuXG4gICAgdmFyIGluZm8gPSByZWNvcmQuYXJnO1xuXG4gICAgaWYgKCEgaW5mbykge1xuICAgICAgY29udGV4dC5tZXRob2QgPSBcInRocm93XCI7XG4gICAgICBjb250ZXh0LmFyZyA9IG5ldyBUeXBlRXJyb3IoXCJpdGVyYXRvciByZXN1bHQgaXMgbm90IGFuIG9iamVjdFwiKTtcbiAgICAgIGNvbnRleHQuZGVsZWdhdGUgPSBudWxsO1xuICAgICAgcmV0dXJuIENvbnRpbnVlU2VudGluZWw7XG4gICAgfVxuXG4gICAgaWYgKGluZm8uZG9uZSkge1xuICAgICAgLy8gQXNzaWduIHRoZSByZXN1bHQgb2YgdGhlIGZpbmlzaGVkIGRlbGVnYXRlIHRvIHRoZSB0ZW1wb3JhcnlcbiAgICAgIC8vIHZhcmlhYmxlIHNwZWNpZmllZCBieSBkZWxlZ2F0ZS5yZXN1bHROYW1lIChzZWUgZGVsZWdhdGVZaWVsZCkuXG4gICAgICBjb250ZXh0W2RlbGVnYXRlLnJlc3VsdE5hbWVdID0gaW5mby52YWx1ZTtcblxuICAgICAgLy8gUmVzdW1lIGV4ZWN1dGlvbiBhdCB0aGUgZGVzaXJlZCBsb2NhdGlvbiAoc2VlIGRlbGVnYXRlWWllbGQpLlxuICAgICAgY29udGV4dC5uZXh0ID0gZGVsZWdhdGUubmV4dExvYztcblxuICAgICAgLy8gSWYgY29udGV4dC5tZXRob2Qgd2FzIFwidGhyb3dcIiBidXQgdGhlIGRlbGVnYXRlIGhhbmRsZWQgdGhlXG4gICAgICAvLyBleGNlcHRpb24sIGxldCB0aGUgb3V0ZXIgZ2VuZXJhdG9yIHByb2NlZWQgbm9ybWFsbHkuIElmXG4gICAgICAvLyBjb250ZXh0Lm1ldGhvZCB3YXMgXCJuZXh0XCIsIGZvcmdldCBjb250ZXh0LmFyZyBzaW5jZSBpdCBoYXMgYmVlblxuICAgICAgLy8gXCJjb25zdW1lZFwiIGJ5IHRoZSBkZWxlZ2F0ZSBpdGVyYXRvci4gSWYgY29udGV4dC5tZXRob2Qgd2FzXG4gICAgICAvLyBcInJldHVyblwiLCBhbGxvdyB0aGUgb3JpZ2luYWwgLnJldHVybiBjYWxsIHRvIGNvbnRpbnVlIGluIHRoZVxuICAgICAgLy8gb3V0ZXIgZ2VuZXJhdG9yLlxuICAgICAgaWYgKGNvbnRleHQubWV0aG9kICE9PSBcInJldHVyblwiKSB7XG4gICAgICAgIGNvbnRleHQubWV0aG9kID0gXCJuZXh0XCI7XG4gICAgICAgIGNvbnRleHQuYXJnID0gdW5kZWZpbmVkO1xuICAgICAgfVxuXG4gICAgfSBlbHNlIHtcbiAgICAgIC8vIFJlLXlpZWxkIHRoZSByZXN1bHQgcmV0dXJuZWQgYnkgdGhlIGRlbGVnYXRlIG1ldGhvZC5cbiAgICAgIHJldHVybiBpbmZvO1xuICAgIH1cblxuICAgIC8vIFRoZSBkZWxlZ2F0ZSBpdGVyYXRvciBpcyBmaW5pc2hlZCwgc28gZm9yZ2V0IGl0IGFuZCBjb250aW51ZSB3aXRoXG4gICAgLy8gdGhlIG91dGVyIGdlbmVyYXRvci5cbiAgICBjb250ZXh0LmRlbGVnYXRlID0gbnVsbDtcbiAgICByZXR1cm4gQ29udGludWVTZW50aW5lbDtcbiAgfVxuXG4gIC8vIERlZmluZSBHZW5lcmF0b3IucHJvdG90eXBlLntuZXh0LHRocm93LHJldHVybn0gaW4gdGVybXMgb2YgdGhlXG4gIC8vIHVuaWZpZWQgLl9pbnZva2UgaGVscGVyIG1ldGhvZC5cbiAgZGVmaW5lSXRlcmF0b3JNZXRob2RzKEdwKTtcblxuICBHcFt0b1N0cmluZ1RhZ1N5bWJvbF0gPSBcIkdlbmVyYXRvclwiO1xuXG4gIC8vIEEgR2VuZXJhdG9yIHNob3VsZCBhbHdheXMgcmV0dXJuIGl0c2VsZiBhcyB0aGUgaXRlcmF0b3Igb2JqZWN0IHdoZW4gdGhlXG4gIC8vIEBAaXRlcmF0b3IgZnVuY3Rpb24gaXMgY2FsbGVkIG9uIGl0LiBTb21lIGJyb3dzZXJzJyBpbXBsZW1lbnRhdGlvbnMgb2YgdGhlXG4gIC8vIGl0ZXJhdG9yIHByb3RvdHlwZSBjaGFpbiBpbmNvcnJlY3RseSBpbXBsZW1lbnQgdGhpcywgY2F1c2luZyB0aGUgR2VuZXJhdG9yXG4gIC8vIG9iamVjdCB0byBub3QgYmUgcmV0dXJuZWQgZnJvbSB0aGlzIGNhbGwuIFRoaXMgZW5zdXJlcyB0aGF0IGRvZXNuJ3QgaGFwcGVuLlxuICAvLyBTZWUgaHR0cHM6Ly9naXRodWIuY29tL2ZhY2Vib29rL3JlZ2VuZXJhdG9yL2lzc3Vlcy8yNzQgZm9yIG1vcmUgZGV0YWlscy5cbiAgR3BbaXRlcmF0b3JTeW1ib2xdID0gZnVuY3Rpb24oKSB7XG4gICAgcmV0dXJuIHRoaXM7XG4gIH07XG5cbiAgR3AudG9TdHJpbmcgPSBmdW5jdGlvbigpIHtcbiAgICByZXR1cm4gXCJbb2JqZWN0IEdlbmVyYXRvcl1cIjtcbiAgfTtcblxuICBmdW5jdGlvbiBwdXNoVHJ5RW50cnkobG9jcykge1xuICAgIHZhciBlbnRyeSA9IHsgdHJ5TG9jOiBsb2NzWzBdIH07XG5cbiAgICBpZiAoMSBpbiBsb2NzKSB7XG4gICAgICBlbnRyeS5jYXRjaExvYyA9IGxvY3NbMV07XG4gICAgfVxuXG4gICAgaWYgKDIgaW4gbG9jcykge1xuICAgICAgZW50cnkuZmluYWxseUxvYyA9IGxvY3NbMl07XG4gICAgICBlbnRyeS5hZnRlckxvYyA9IGxvY3NbM107XG4gICAgfVxuXG4gICAgdGhpcy50cnlFbnRyaWVzLnB1c2goZW50cnkpO1xuICB9XG5cbiAgZnVuY3Rpb24gcmVzZXRUcnlFbnRyeShlbnRyeSkge1xuICAgIHZhciByZWNvcmQgPSBlbnRyeS5jb21wbGV0aW9uIHx8IHt9O1xuICAgIHJlY29yZC50eXBlID0gXCJub3JtYWxcIjtcbiAgICBkZWxldGUgcmVjb3JkLmFyZztcbiAgICBlbnRyeS5jb21wbGV0aW9uID0gcmVjb3JkO1xuICB9XG5cbiAgZnVuY3Rpb24gQ29udGV4dCh0cnlMb2NzTGlzdCkge1xuICAgIC8vIFRoZSByb290IGVudHJ5IG9iamVjdCAoZWZmZWN0aXZlbHkgYSB0cnkgc3RhdGVtZW50IHdpdGhvdXQgYSBjYXRjaFxuICAgIC8vIG9yIGEgZmluYWxseSBibG9jaykgZ2l2ZXMgdXMgYSBwbGFjZSB0byBzdG9yZSB2YWx1ZXMgdGhyb3duIGZyb21cbiAgICAvLyBsb2NhdGlvbnMgd2hlcmUgdGhlcmUgaXMgbm8gZW5jbG9zaW5nIHRyeSBzdGF0ZW1lbnQuXG4gICAgdGhpcy50cnlFbnRyaWVzID0gW3sgdHJ5TG9jOiBcInJvb3RcIiB9XTtcbiAgICB0cnlMb2NzTGlzdC5mb3JFYWNoKHB1c2hUcnlFbnRyeSwgdGhpcyk7XG4gICAgdGhpcy5yZXNldCh0cnVlKTtcbiAgfVxuXG4gIHJ1bnRpbWUua2V5cyA9IGZ1bmN0aW9uKG9iamVjdCkge1xuICAgIHZhciBrZXlzID0gW107XG4gICAgZm9yICh2YXIga2V5IGluIG9iamVjdCkge1xuICAgICAga2V5cy5wdXNoKGtleSk7XG4gICAgfVxuICAgIGtleXMucmV2ZXJzZSgpO1xuXG4gICAgLy8gUmF0aGVyIHRoYW4gcmV0dXJuaW5nIGFuIG9iamVjdCB3aXRoIGEgbmV4dCBtZXRob2QsIHdlIGtlZXBcbiAgICAvLyB0aGluZ3Mgc2ltcGxlIGFuZCByZXR1cm4gdGhlIG5leHQgZnVuY3Rpb24gaXRzZWxmLlxuICAgIHJldHVybiBmdW5jdGlvbiBuZXh0KCkge1xuICAgICAgd2hpbGUgKGtleXMubGVuZ3RoKSB7XG4gICAgICAgIHZhciBrZXkgPSBrZXlzLnBvcCgpO1xuICAgICAgICBpZiAoa2V5IGluIG9iamVjdCkge1xuICAgICAgICAgIG5leHQudmFsdWUgPSBrZXk7XG4gICAgICAgICAgbmV4dC5kb25lID0gZmFsc2U7XG4gICAgICAgICAgcmV0dXJuIG5leHQ7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgLy8gVG8gYXZvaWQgY3JlYXRpbmcgYW4gYWRkaXRpb25hbCBvYmplY3QsIHdlIGp1c3QgaGFuZyB0aGUgLnZhbHVlXG4gICAgICAvLyBhbmQgLmRvbmUgcHJvcGVydGllcyBvZmYgdGhlIG5leHQgZnVuY3Rpb24gb2JqZWN0IGl0c2VsZi4gVGhpc1xuICAgICAgLy8gYWxzbyBlbnN1cmVzIHRoYXQgdGhlIG1pbmlmaWVyIHdpbGwgbm90IGFub255bWl6ZSB0aGUgZnVuY3Rpb24uXG4gICAgICBuZXh0LmRvbmUgPSB0cnVlO1xuICAgICAgcmV0dXJuIG5leHQ7XG4gICAgfTtcbiAgfTtcblxuICBmdW5jdGlvbiB2YWx1ZXMoaXRlcmFibGUpIHtcbiAgICBpZiAoaXRlcmFibGUpIHtcbiAgICAgIHZhciBpdGVyYXRvck1ldGhvZCA9IGl0ZXJhYmxlW2l0ZXJhdG9yU3ltYm9sXTtcbiAgICAgIGlmIChpdGVyYXRvck1ldGhvZCkge1xuICAgICAgICByZXR1cm4gaXRlcmF0b3JNZXRob2QuY2FsbChpdGVyYWJsZSk7XG4gICAgICB9XG5cbiAgICAgIGlmICh0eXBlb2YgaXRlcmFibGUubmV4dCA9PT0gXCJmdW5jdGlvblwiKSB7XG4gICAgICAgIHJldHVybiBpdGVyYWJsZTtcbiAgICAgIH1cblxuICAgICAgaWYgKCFpc05hTihpdGVyYWJsZS5sZW5ndGgpKSB7XG4gICAgICAgIHZhciBpID0gLTEsIG5leHQgPSBmdW5jdGlvbiBuZXh0KCkge1xuICAgICAgICAgIHdoaWxlICgrK2kgPCBpdGVyYWJsZS5sZW5ndGgpIHtcbiAgICAgICAgICAgIGlmIChoYXNPd24uY2FsbChpdGVyYWJsZSwgaSkpIHtcbiAgICAgICAgICAgICAgbmV4dC52YWx1ZSA9IGl0ZXJhYmxlW2ldO1xuICAgICAgICAgICAgICBuZXh0LmRvbmUgPSBmYWxzZTtcbiAgICAgICAgICAgICAgcmV0dXJuIG5leHQ7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgbmV4dC52YWx1ZSA9IHVuZGVmaW5lZDtcbiAgICAgICAgICBuZXh0LmRvbmUgPSB0cnVlO1xuXG4gICAgICAgICAgcmV0dXJuIG5leHQ7XG4gICAgICAgIH07XG5cbiAgICAgICAgcmV0dXJuIG5leHQubmV4dCA9IG5leHQ7XG4gICAgICB9XG4gICAgfVxuXG4gICAgLy8gUmV0dXJuIGFuIGl0ZXJhdG9yIHdpdGggbm8gdmFsdWVzLlxuICAgIHJldHVybiB7IG5leHQ6IGRvbmVSZXN1bHQgfTtcbiAgfVxuICBydW50aW1lLnZhbHVlcyA9IHZhbHVlcztcblxuICBmdW5jdGlvbiBkb25lUmVzdWx0KCkge1xuICAgIHJldHVybiB7IHZhbHVlOiB1bmRlZmluZWQsIGRvbmU6IHRydWUgfTtcbiAgfVxuXG4gIENvbnRleHQucHJvdG90eXBlID0ge1xuICAgIGNvbnN0cnVjdG9yOiBDb250ZXh0LFxuXG4gICAgcmVzZXQ6IGZ1bmN0aW9uKHNraXBUZW1wUmVzZXQpIHtcbiAgICAgIHRoaXMucHJldiA9IDA7XG4gICAgICB0aGlzLm5leHQgPSAwO1xuICAgICAgLy8gUmVzZXR0aW5nIGNvbnRleHQuX3NlbnQgZm9yIGxlZ2FjeSBzdXBwb3J0IG9mIEJhYmVsJ3NcbiAgICAgIC8vIGZ1bmN0aW9uLnNlbnQgaW1wbGVtZW50YXRpb24uXG4gICAgICB0aGlzLnNlbnQgPSB0aGlzLl9zZW50ID0gdW5kZWZpbmVkO1xuICAgICAgdGhpcy5kb25lID0gZmFsc2U7XG4gICAgICB0aGlzLmRlbGVnYXRlID0gbnVsbDtcblxuICAgICAgdGhpcy5tZXRob2QgPSBcIm5leHRcIjtcbiAgICAgIHRoaXMuYXJnID0gdW5kZWZpbmVkO1xuXG4gICAgICB0aGlzLnRyeUVudHJpZXMuZm9yRWFjaChyZXNldFRyeUVudHJ5KTtcblxuICAgICAgaWYgKCFza2lwVGVtcFJlc2V0KSB7XG4gICAgICAgIGZvciAodmFyIG5hbWUgaW4gdGhpcykge1xuICAgICAgICAgIC8vIE5vdCBzdXJlIGFib3V0IHRoZSBvcHRpbWFsIG9yZGVyIG9mIHRoZXNlIGNvbmRpdGlvbnM6XG4gICAgICAgICAgaWYgKG5hbWUuY2hhckF0KDApID09PSBcInRcIiAmJlxuICAgICAgICAgICAgICBoYXNPd24uY2FsbCh0aGlzLCBuYW1lKSAmJlxuICAgICAgICAgICAgICAhaXNOYU4oK25hbWUuc2xpY2UoMSkpKSB7XG4gICAgICAgICAgICB0aGlzW25hbWVdID0gdW5kZWZpbmVkO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfVxuICAgIH0sXG5cbiAgICBzdG9wOiBmdW5jdGlvbigpIHtcbiAgICAgIHRoaXMuZG9uZSA9IHRydWU7XG5cbiAgICAgIHZhciByb290RW50cnkgPSB0aGlzLnRyeUVudHJpZXNbMF07XG4gICAgICB2YXIgcm9vdFJlY29yZCA9IHJvb3RFbnRyeS5jb21wbGV0aW9uO1xuICAgICAgaWYgKHJvb3RSZWNvcmQudHlwZSA9PT0gXCJ0aHJvd1wiKSB7XG4gICAgICAgIHRocm93IHJvb3RSZWNvcmQuYXJnO1xuICAgICAgfVxuXG4gICAgICByZXR1cm4gdGhpcy5ydmFsO1xuICAgIH0sXG5cbiAgICBkaXNwYXRjaEV4Y2VwdGlvbjogZnVuY3Rpb24oZXhjZXB0aW9uKSB7XG4gICAgICBpZiAodGhpcy5kb25lKSB7XG4gICAgICAgIHRocm93IGV4Y2VwdGlvbjtcbiAgICAgIH1cblxuICAgICAgdmFyIGNvbnRleHQgPSB0aGlzO1xuICAgICAgZnVuY3Rpb24gaGFuZGxlKGxvYywgY2F1Z2h0KSB7XG4gICAgICAgIHJlY29yZC50eXBlID0gXCJ0aHJvd1wiO1xuICAgICAgICByZWNvcmQuYXJnID0gZXhjZXB0aW9uO1xuICAgICAgICBjb250ZXh0Lm5leHQgPSBsb2M7XG5cbiAgICAgICAgaWYgKGNhdWdodCkge1xuICAgICAgICAgIC8vIElmIHRoZSBkaXNwYXRjaGVkIGV4Y2VwdGlvbiB3YXMgY2F1Z2h0IGJ5IGEgY2F0Y2ggYmxvY2ssXG4gICAgICAgICAgLy8gdGhlbiBsZXQgdGhhdCBjYXRjaCBibG9jayBoYW5kbGUgdGhlIGV4Y2VwdGlvbiBub3JtYWxseS5cbiAgICAgICAgICBjb250ZXh0Lm1ldGhvZCA9IFwibmV4dFwiO1xuICAgICAgICAgIGNvbnRleHQuYXJnID0gdW5kZWZpbmVkO1xuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuICEhIGNhdWdodDtcbiAgICAgIH1cblxuICAgICAgZm9yICh2YXIgaSA9IHRoaXMudHJ5RW50cmllcy5sZW5ndGggLSAxOyBpID49IDA7IC0taSkge1xuICAgICAgICB2YXIgZW50cnkgPSB0aGlzLnRyeUVudHJpZXNbaV07XG4gICAgICAgIHZhciByZWNvcmQgPSBlbnRyeS5jb21wbGV0aW9uO1xuXG4gICAgICAgIGlmIChlbnRyeS50cnlMb2MgPT09IFwicm9vdFwiKSB7XG4gICAgICAgICAgLy8gRXhjZXB0aW9uIHRocm93biBvdXRzaWRlIG9mIGFueSB0cnkgYmxvY2sgdGhhdCBjb3VsZCBoYW5kbGVcbiAgICAgICAgICAvLyBpdCwgc28gc2V0IHRoZSBjb21wbGV0aW9uIHZhbHVlIG9mIHRoZSBlbnRpcmUgZnVuY3Rpb24gdG9cbiAgICAgICAgICAvLyB0aHJvdyB0aGUgZXhjZXB0aW9uLlxuICAgICAgICAgIHJldHVybiBoYW5kbGUoXCJlbmRcIik7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAoZW50cnkudHJ5TG9jIDw9IHRoaXMucHJldikge1xuICAgICAgICAgIHZhciBoYXNDYXRjaCA9IGhhc093bi5jYWxsKGVudHJ5LCBcImNhdGNoTG9jXCIpO1xuICAgICAgICAgIHZhciBoYXNGaW5hbGx5ID0gaGFzT3duLmNhbGwoZW50cnksIFwiZmluYWxseUxvY1wiKTtcblxuICAgICAgICAgIGlmIChoYXNDYXRjaCAmJiBoYXNGaW5hbGx5KSB7XG4gICAgICAgICAgICBpZiAodGhpcy5wcmV2IDwgZW50cnkuY2F0Y2hMb2MpIHtcbiAgICAgICAgICAgICAgcmV0dXJuIGhhbmRsZShlbnRyeS5jYXRjaExvYywgdHJ1ZSk7XG4gICAgICAgICAgICB9IGVsc2UgaWYgKHRoaXMucHJldiA8IGVudHJ5LmZpbmFsbHlMb2MpIHtcbiAgICAgICAgICAgICAgcmV0dXJuIGhhbmRsZShlbnRyeS5maW5hbGx5TG9jKTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgIH0gZWxzZSBpZiAoaGFzQ2F0Y2gpIHtcbiAgICAgICAgICAgIGlmICh0aGlzLnByZXYgPCBlbnRyeS5jYXRjaExvYykge1xuICAgICAgICAgICAgICByZXR1cm4gaGFuZGxlKGVudHJ5LmNhdGNoTG9jLCB0cnVlKTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgIH0gZWxzZSBpZiAoaGFzRmluYWxseSkge1xuICAgICAgICAgICAgaWYgKHRoaXMucHJldiA8IGVudHJ5LmZpbmFsbHlMb2MpIHtcbiAgICAgICAgICAgICAgcmV0dXJuIGhhbmRsZShlbnRyeS5maW5hbGx5TG9jKTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoXCJ0cnkgc3RhdGVtZW50IHdpdGhvdXQgY2F0Y2ggb3IgZmluYWxseVwiKTtcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9LFxuXG4gICAgYWJydXB0OiBmdW5jdGlvbih0eXBlLCBhcmcpIHtcbiAgICAgIGZvciAodmFyIGkgPSB0aGlzLnRyeUVudHJpZXMubGVuZ3RoIC0gMTsgaSA+PSAwOyAtLWkpIHtcbiAgICAgICAgdmFyIGVudHJ5ID0gdGhpcy50cnlFbnRyaWVzW2ldO1xuICAgICAgICBpZiAoZW50cnkudHJ5TG9jIDw9IHRoaXMucHJldiAmJlxuICAgICAgICAgICAgaGFzT3duLmNhbGwoZW50cnksIFwiZmluYWxseUxvY1wiKSAmJlxuICAgICAgICAgICAgdGhpcy5wcmV2IDwgZW50cnkuZmluYWxseUxvYykge1xuICAgICAgICAgIHZhciBmaW5hbGx5RW50cnkgPSBlbnRyeTtcbiAgICAgICAgICBicmVhaztcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBpZiAoZmluYWxseUVudHJ5ICYmXG4gICAgICAgICAgKHR5cGUgPT09IFwiYnJlYWtcIiB8fFxuICAgICAgICAgICB0eXBlID09PSBcImNvbnRpbnVlXCIpICYmXG4gICAgICAgICAgZmluYWxseUVudHJ5LnRyeUxvYyA8PSBhcmcgJiZcbiAgICAgICAgICBhcmcgPD0gZmluYWxseUVudHJ5LmZpbmFsbHlMb2MpIHtcbiAgICAgICAgLy8gSWdub3JlIHRoZSBmaW5hbGx5IGVudHJ5IGlmIGNvbnRyb2wgaXMgbm90IGp1bXBpbmcgdG8gYVxuICAgICAgICAvLyBsb2NhdGlvbiBvdXRzaWRlIHRoZSB0cnkvY2F0Y2ggYmxvY2suXG4gICAgICAgIGZpbmFsbHlFbnRyeSA9IG51bGw7XG4gICAgICB9XG5cbiAgICAgIHZhciByZWNvcmQgPSBmaW5hbGx5RW50cnkgPyBmaW5hbGx5RW50cnkuY29tcGxldGlvbiA6IHt9O1xuICAgICAgcmVjb3JkLnR5cGUgPSB0eXBlO1xuICAgICAgcmVjb3JkLmFyZyA9IGFyZztcblxuICAgICAgaWYgKGZpbmFsbHlFbnRyeSkge1xuICAgICAgICB0aGlzLm1ldGhvZCA9IFwibmV4dFwiO1xuICAgICAgICB0aGlzLm5leHQgPSBmaW5hbGx5RW50cnkuZmluYWxseUxvYztcbiAgICAgICAgcmV0dXJuIENvbnRpbnVlU2VudGluZWw7XG4gICAgICB9XG5cbiAgICAgIHJldHVybiB0aGlzLmNvbXBsZXRlKHJlY29yZCk7XG4gICAgfSxcblxuICAgIGNvbXBsZXRlOiBmdW5jdGlvbihyZWNvcmQsIGFmdGVyTG9jKSB7XG4gICAgICBpZiAocmVjb3JkLnR5cGUgPT09IFwidGhyb3dcIikge1xuICAgICAgICB0aHJvdyByZWNvcmQuYXJnO1xuICAgICAgfVxuXG4gICAgICBpZiAocmVjb3JkLnR5cGUgPT09IFwiYnJlYWtcIiB8fFxuICAgICAgICAgIHJlY29yZC50eXBlID09PSBcImNvbnRpbnVlXCIpIHtcbiAgICAgICAgdGhpcy5uZXh0ID0gcmVjb3JkLmFyZztcbiAgICAgIH0gZWxzZSBpZiAocmVjb3JkLnR5cGUgPT09IFwicmV0dXJuXCIpIHtcbiAgICAgICAgdGhpcy5ydmFsID0gdGhpcy5hcmcgPSByZWNvcmQuYXJnO1xuICAgICAgICB0aGlzLm1ldGhvZCA9IFwicmV0dXJuXCI7XG4gICAgICAgIHRoaXMubmV4dCA9IFwiZW5kXCI7XG4gICAgICB9IGVsc2UgaWYgKHJlY29yZC50eXBlID09PSBcIm5vcm1hbFwiICYmIGFmdGVyTG9jKSB7XG4gICAgICAgIHRoaXMubmV4dCA9IGFmdGVyTG9jO1xuICAgICAgfVxuXG4gICAgICByZXR1cm4gQ29udGludWVTZW50aW5lbDtcbiAgICB9LFxuXG4gICAgZmluaXNoOiBmdW5jdGlvbihmaW5hbGx5TG9jKSB7XG4gICAgICBmb3IgKHZhciBpID0gdGhpcy50cnlFbnRyaWVzLmxlbmd0aCAtIDE7IGkgPj0gMDsgLS1pKSB7XG4gICAgICAgIHZhciBlbnRyeSA9IHRoaXMudHJ5RW50cmllc1tpXTtcbiAgICAgICAgaWYgKGVudHJ5LmZpbmFsbHlMb2MgPT09IGZpbmFsbHlMb2MpIHtcbiAgICAgICAgICB0aGlzLmNvbXBsZXRlKGVudHJ5LmNvbXBsZXRpb24sIGVudHJ5LmFmdGVyTG9jKTtcbiAgICAgICAgICByZXNldFRyeUVudHJ5KGVudHJ5KTtcbiAgICAgICAgICByZXR1cm4gQ29udGludWVTZW50aW5lbDtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH0sXG5cbiAgICBcImNhdGNoXCI6IGZ1bmN0aW9uKHRyeUxvYykge1xuICAgICAgZm9yICh2YXIgaSA9IHRoaXMudHJ5RW50cmllcy5sZW5ndGggLSAxOyBpID49IDA7IC0taSkge1xuICAgICAgICB2YXIgZW50cnkgPSB0aGlzLnRyeUVudHJpZXNbaV07XG4gICAgICAgIGlmIChlbnRyeS50cnlMb2MgPT09IHRyeUxvYykge1xuICAgICAgICAgIHZhciByZWNvcmQgPSBlbnRyeS5jb21wbGV0aW9uO1xuICAgICAgICAgIGlmIChyZWNvcmQudHlwZSA9PT0gXCJ0aHJvd1wiKSB7XG4gICAgICAgICAgICB2YXIgdGhyb3duID0gcmVjb3JkLmFyZztcbiAgICAgICAgICAgIHJlc2V0VHJ5RW50cnkoZW50cnkpO1xuICAgICAgICAgIH1cbiAgICAgICAgICByZXR1cm4gdGhyb3duO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIC8vIFRoZSBjb250ZXh0LmNhdGNoIG1ldGhvZCBtdXN0IG9ubHkgYmUgY2FsbGVkIHdpdGggYSBsb2NhdGlvblxuICAgICAgLy8gYXJndW1lbnQgdGhhdCBjb3JyZXNwb25kcyB0byBhIGtub3duIGNhdGNoIGJsb2NrLlxuICAgICAgdGhyb3cgbmV3IEVycm9yKFwiaWxsZWdhbCBjYXRjaCBhdHRlbXB0XCIpO1xuICAgIH0sXG5cbiAgICBkZWxlZ2F0ZVlpZWxkOiBmdW5jdGlvbihpdGVyYWJsZSwgcmVzdWx0TmFtZSwgbmV4dExvYykge1xuICAgICAgdGhpcy5kZWxlZ2F0ZSA9IHtcbiAgICAgICAgaXRlcmF0b3I6IHZhbHVlcyhpdGVyYWJsZSksXG4gICAgICAgIHJlc3VsdE5hbWU6IHJlc3VsdE5hbWUsXG4gICAgICAgIG5leHRMb2M6IG5leHRMb2NcbiAgICAgIH07XG5cbiAgICAgIGlmICh0aGlzLm1ldGhvZCA9PT0gXCJuZXh0XCIpIHtcbiAgICAgICAgLy8gRGVsaWJlcmF0ZWx5IGZvcmdldCB0aGUgbGFzdCBzZW50IHZhbHVlIHNvIHRoYXQgd2UgZG9uJ3RcbiAgICAgICAgLy8gYWNjaWRlbnRhbGx5IHBhc3MgaXQgb24gdG8gdGhlIGRlbGVnYXRlLlxuICAgICAgICB0aGlzLmFyZyA9IHVuZGVmaW5lZDtcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIENvbnRpbnVlU2VudGluZWw7XG4gICAgfVxuICB9O1xufSkoXG4gIC8vIEluIHNsb3BweSBtb2RlLCB1bmJvdW5kIGB0aGlzYCByZWZlcnMgdG8gdGhlIGdsb2JhbCBvYmplY3QsIGZhbGxiYWNrIHRvXG4gIC8vIEZ1bmN0aW9uIGNvbnN0cnVjdG9yIGlmIHdlJ3JlIGluIGdsb2JhbCBzdHJpY3QgbW9kZS4gVGhhdCBpcyBzYWRseSBhIGZvcm1cbiAgLy8gb2YgaW5kaXJlY3QgZXZhbCB3aGljaCB2aW9sYXRlcyBDb250ZW50IFNlY3VyaXR5IFBvbGljeS5cbiAgKGZ1bmN0aW9uKCkgeyByZXR1cm4gdGhpcyB9KSgpIHx8IEZ1bmN0aW9uKFwicmV0dXJuIHRoaXNcIikoKVxuKTtcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vbm9kZV9tb2R1bGVzL19yZWdlbmVyYXRvci1ydW50aW1lQDAuMTEuMUByZWdlbmVyYXRvci1ydW50aW1lL3J1bnRpbWUuanNcbi8vIG1vZHVsZSBpZCA9IDk2XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsInJlcXVpcmUoJy4uL21vZHVsZXMvZXM2Lm9iamVjdC50by1zdHJpbmcnKTtcbnJlcXVpcmUoJy4uL21vZHVsZXMvZXM2LnN0cmluZy5pdGVyYXRvcicpO1xucmVxdWlyZSgnLi4vbW9kdWxlcy93ZWIuZG9tLml0ZXJhYmxlJyk7XG5yZXF1aXJlKCcuLi9tb2R1bGVzL2VzNi5wcm9taXNlJyk7XG5yZXF1aXJlKCcuLi9tb2R1bGVzL2VzNy5wcm9taXNlLmZpbmFsbHknKTtcbnJlcXVpcmUoJy4uL21vZHVsZXMvZXM3LnByb21pc2UudHJ5Jyk7XG5tb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoJy4uL21vZHVsZXMvX2NvcmUnKS5Qcm9taXNlO1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9ub2RlX21vZHVsZXMvX2NvcmUtanNAMi41LjNAY29yZS1qcy9saWJyYXJ5L2ZuL3Byb21pc2UuanNcbi8vIG1vZHVsZSBpZCA9IDk3XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsInZhciB0b0ludGVnZXIgPSByZXF1aXJlKCcuL190by1pbnRlZ2VyJyk7XG52YXIgZGVmaW5lZCA9IHJlcXVpcmUoJy4vX2RlZmluZWQnKTtcbi8vIHRydWUgIC0+IFN0cmluZyNhdFxuLy8gZmFsc2UgLT4gU3RyaW5nI2NvZGVQb2ludEF0XG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChUT19TVFJJTkcpIHtcbiAgcmV0dXJuIGZ1bmN0aW9uICh0aGF0LCBwb3MpIHtcbiAgICB2YXIgcyA9IFN0cmluZyhkZWZpbmVkKHRoYXQpKTtcbiAgICB2YXIgaSA9IHRvSW50ZWdlcihwb3MpO1xuICAgIHZhciBsID0gcy5sZW5ndGg7XG4gICAgdmFyIGEsIGI7XG4gICAgaWYgKGkgPCAwIHx8IGkgPj0gbCkgcmV0dXJuIFRPX1NUUklORyA/ICcnIDogdW5kZWZpbmVkO1xuICAgIGEgPSBzLmNoYXJDb2RlQXQoaSk7XG4gICAgcmV0dXJuIGEgPCAweGQ4MDAgfHwgYSA+IDB4ZGJmZiB8fCBpICsgMSA9PT0gbCB8fCAoYiA9IHMuY2hhckNvZGVBdChpICsgMSkpIDwgMHhkYzAwIHx8IGIgPiAweGRmZmZcbiAgICAgID8gVE9fU1RSSU5HID8gcy5jaGFyQXQoaSkgOiBhXG4gICAgICA6IFRPX1NUUklORyA/IHMuc2xpY2UoaSwgaSArIDIpIDogKGEgLSAweGQ4MDAgPDwgMTApICsgKGIgLSAweGRjMDApICsgMHgxMDAwMDtcbiAgfTtcbn07XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL25vZGVfbW9kdWxlcy9fY29yZS1qc0AyLjUuM0Bjb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9fc3RyaW5nLWF0LmpzXG4vLyBtb2R1bGUgaWQgPSA5OFxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCIndXNlIHN0cmljdCc7XG52YXIgY3JlYXRlID0gcmVxdWlyZSgnLi9fb2JqZWN0LWNyZWF0ZScpO1xudmFyIGRlc2NyaXB0b3IgPSByZXF1aXJlKCcuL19wcm9wZXJ0eS1kZXNjJyk7XG52YXIgc2V0VG9TdHJpbmdUYWcgPSByZXF1aXJlKCcuL19zZXQtdG8tc3RyaW5nLXRhZycpO1xudmFyIEl0ZXJhdG9yUHJvdG90eXBlID0ge307XG5cbi8vIDI1LjEuMi4xLjEgJUl0ZXJhdG9yUHJvdG90eXBlJVtAQGl0ZXJhdG9yXSgpXG5yZXF1aXJlKCcuL19oaWRlJykoSXRlcmF0b3JQcm90b3R5cGUsIHJlcXVpcmUoJy4vX3drcycpKCdpdGVyYXRvcicpLCBmdW5jdGlvbiAoKSB7IHJldHVybiB0aGlzOyB9KTtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoQ29uc3RydWN0b3IsIE5BTUUsIG5leHQpIHtcbiAgQ29uc3RydWN0b3IucHJvdG90eXBlID0gY3JlYXRlKEl0ZXJhdG9yUHJvdG90eXBlLCB7IG5leHQ6IGRlc2NyaXB0b3IoMSwgbmV4dCkgfSk7XG4gIHNldFRvU3RyaW5nVGFnKENvbnN0cnVjdG9yLCBOQU1FICsgJyBJdGVyYXRvcicpO1xufTtcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vbm9kZV9tb2R1bGVzL19jb3JlLWpzQDIuNS4zQGNvcmUtanMvbGlicmFyeS9tb2R1bGVzL19pdGVyLWNyZWF0ZS5qc1xuLy8gbW9kdWxlIGlkID0gOTlcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwidmFyIGRQID0gcmVxdWlyZSgnLi9fb2JqZWN0LWRwJyk7XG52YXIgYW5PYmplY3QgPSByZXF1aXJlKCcuL19hbi1vYmplY3QnKTtcbnZhciBnZXRLZXlzID0gcmVxdWlyZSgnLi9fb2JqZWN0LWtleXMnKTtcblxubW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKCcuL19kZXNjcmlwdG9ycycpID8gT2JqZWN0LmRlZmluZVByb3BlcnRpZXMgOiBmdW5jdGlvbiBkZWZpbmVQcm9wZXJ0aWVzKE8sIFByb3BlcnRpZXMpIHtcbiAgYW5PYmplY3QoTyk7XG4gIHZhciBrZXlzID0gZ2V0S2V5cyhQcm9wZXJ0aWVzKTtcbiAgdmFyIGxlbmd0aCA9IGtleXMubGVuZ3RoO1xuICB2YXIgaSA9IDA7XG4gIHZhciBQO1xuICB3aGlsZSAobGVuZ3RoID4gaSkgZFAuZihPLCBQID0ga2V5c1tpKytdLCBQcm9wZXJ0aWVzW1BdKTtcbiAgcmV0dXJuIE87XG59O1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9ub2RlX21vZHVsZXMvX2NvcmUtanNAMi41LjNAY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX29iamVjdC1kcHMuanNcbi8vIG1vZHVsZSBpZCA9IDEwMFxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCIvLyBmYWxzZSAtPiBBcnJheSNpbmRleE9mXG4vLyB0cnVlICAtPiBBcnJheSNpbmNsdWRlc1xudmFyIHRvSU9iamVjdCA9IHJlcXVpcmUoJy4vX3RvLWlvYmplY3QnKTtcbnZhciB0b0xlbmd0aCA9IHJlcXVpcmUoJy4vX3RvLWxlbmd0aCcpO1xudmFyIHRvQWJzb2x1dGVJbmRleCA9IHJlcXVpcmUoJy4vX3RvLWFic29sdXRlLWluZGV4Jyk7XG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChJU19JTkNMVURFUykge1xuICByZXR1cm4gZnVuY3Rpb24gKCR0aGlzLCBlbCwgZnJvbUluZGV4KSB7XG4gICAgdmFyIE8gPSB0b0lPYmplY3QoJHRoaXMpO1xuICAgIHZhciBsZW5ndGggPSB0b0xlbmd0aChPLmxlbmd0aCk7XG4gICAgdmFyIGluZGV4ID0gdG9BYnNvbHV0ZUluZGV4KGZyb21JbmRleCwgbGVuZ3RoKTtcbiAgICB2YXIgdmFsdWU7XG4gICAgLy8gQXJyYXkjaW5jbHVkZXMgdXNlcyBTYW1lVmFsdWVaZXJvIGVxdWFsaXR5IGFsZ29yaXRobVxuICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby1zZWxmLWNvbXBhcmVcbiAgICBpZiAoSVNfSU5DTFVERVMgJiYgZWwgIT0gZWwpIHdoaWxlIChsZW5ndGggPiBpbmRleCkge1xuICAgICAgdmFsdWUgPSBPW2luZGV4KytdO1xuICAgICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLXNlbGYtY29tcGFyZVxuICAgICAgaWYgKHZhbHVlICE9IHZhbHVlKSByZXR1cm4gdHJ1ZTtcbiAgICAvLyBBcnJheSNpbmRleE9mIGlnbm9yZXMgaG9sZXMsIEFycmF5I2luY2x1ZGVzIC0gbm90XG4gICAgfSBlbHNlIGZvciAoO2xlbmd0aCA+IGluZGV4OyBpbmRleCsrKSBpZiAoSVNfSU5DTFVERVMgfHwgaW5kZXggaW4gTykge1xuICAgICAgaWYgKE9baW5kZXhdID09PSBlbCkgcmV0dXJuIElTX0lOQ0xVREVTIHx8IGluZGV4IHx8IDA7XG4gICAgfSByZXR1cm4gIUlTX0lOQ0xVREVTICYmIC0xO1xuICB9O1xufTtcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vbm9kZV9tb2R1bGVzL19jb3JlLWpzQDIuNS4zQGNvcmUtanMvbGlicmFyeS9tb2R1bGVzL19hcnJheS1pbmNsdWRlcy5qc1xuLy8gbW9kdWxlIGlkID0gMTAxXG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsInZhciB0b0ludGVnZXIgPSByZXF1aXJlKCcuL190by1pbnRlZ2VyJyk7XG52YXIgbWF4ID0gTWF0aC5tYXg7XG52YXIgbWluID0gTWF0aC5taW47XG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChpbmRleCwgbGVuZ3RoKSB7XG4gIGluZGV4ID0gdG9JbnRlZ2VyKGluZGV4KTtcbiAgcmV0dXJuIGluZGV4IDwgMCA/IG1heChpbmRleCArIGxlbmd0aCwgMCkgOiBtaW4oaW5kZXgsIGxlbmd0aCk7XG59O1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9ub2RlX21vZHVsZXMvX2NvcmUtanNAMi41LjNAY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX3RvLWFic29sdXRlLWluZGV4LmpzXG4vLyBtb2R1bGUgaWQgPSAxMDJcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiJ3VzZSBzdHJpY3QnO1xudmFyIGFkZFRvVW5zY29wYWJsZXMgPSByZXF1aXJlKCcuL19hZGQtdG8tdW5zY29wYWJsZXMnKTtcbnZhciBzdGVwID0gcmVxdWlyZSgnLi9faXRlci1zdGVwJyk7XG52YXIgSXRlcmF0b3JzID0gcmVxdWlyZSgnLi9faXRlcmF0b3JzJyk7XG52YXIgdG9JT2JqZWN0ID0gcmVxdWlyZSgnLi9fdG8taW9iamVjdCcpO1xuXG4vLyAyMi4xLjMuNCBBcnJheS5wcm90b3R5cGUuZW50cmllcygpXG4vLyAyMi4xLjMuMTMgQXJyYXkucHJvdG90eXBlLmtleXMoKVxuLy8gMjIuMS4zLjI5IEFycmF5LnByb3RvdHlwZS52YWx1ZXMoKVxuLy8gMjIuMS4zLjMwIEFycmF5LnByb3RvdHlwZVtAQGl0ZXJhdG9yXSgpXG5tb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoJy4vX2l0ZXItZGVmaW5lJykoQXJyYXksICdBcnJheScsIGZ1bmN0aW9uIChpdGVyYXRlZCwga2luZCkge1xuICB0aGlzLl90ID0gdG9JT2JqZWN0KGl0ZXJhdGVkKTsgLy8gdGFyZ2V0XG4gIHRoaXMuX2kgPSAwOyAgICAgICAgICAgICAgICAgICAvLyBuZXh0IGluZGV4XG4gIHRoaXMuX2sgPSBraW5kOyAgICAgICAgICAgICAgICAvLyBraW5kXG4vLyAyMi4xLjUuMi4xICVBcnJheUl0ZXJhdG9yUHJvdG90eXBlJS5uZXh0KClcbn0sIGZ1bmN0aW9uICgpIHtcbiAgdmFyIE8gPSB0aGlzLl90O1xuICB2YXIga2luZCA9IHRoaXMuX2s7XG4gIHZhciBpbmRleCA9IHRoaXMuX2krKztcbiAgaWYgKCFPIHx8IGluZGV4ID49IE8ubGVuZ3RoKSB7XG4gICAgdGhpcy5fdCA9IHVuZGVmaW5lZDtcbiAgICByZXR1cm4gc3RlcCgxKTtcbiAgfVxuICBpZiAoa2luZCA9PSAna2V5cycpIHJldHVybiBzdGVwKDAsIGluZGV4KTtcbiAgaWYgKGtpbmQgPT0gJ3ZhbHVlcycpIHJldHVybiBzdGVwKDAsIE9baW5kZXhdKTtcbiAgcmV0dXJuIHN0ZXAoMCwgW2luZGV4LCBPW2luZGV4XV0pO1xufSwgJ3ZhbHVlcycpO1xuXG4vLyBhcmd1bWVudHNMaXN0W0BAaXRlcmF0b3JdIGlzICVBcnJheVByb3RvX3ZhbHVlcyUgKDkuNC40LjYsIDkuNC40LjcpXG5JdGVyYXRvcnMuQXJndW1lbnRzID0gSXRlcmF0b3JzLkFycmF5O1xuXG5hZGRUb1Vuc2NvcGFibGVzKCdrZXlzJyk7XG5hZGRUb1Vuc2NvcGFibGVzKCd2YWx1ZXMnKTtcbmFkZFRvVW5zY29wYWJsZXMoJ2VudHJpZXMnKTtcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vbm9kZV9tb2R1bGVzL19jb3JlLWpzQDIuNS4zQGNvcmUtanMvbGlicmFyeS9tb2R1bGVzL2VzNi5hcnJheS5pdGVyYXRvci5qc1xuLy8gbW9kdWxlIGlkID0gMTAzXG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKCkgeyAvKiBlbXB0eSAqLyB9O1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9ub2RlX21vZHVsZXMvX2NvcmUtanNAMi41LjNAY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX2FkZC10by11bnNjb3BhYmxlcy5qc1xuLy8gbW9kdWxlIGlkID0gMTA0XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIid1c2Ugc3RyaWN0JztcbnZhciBMSUJSQVJZID0gcmVxdWlyZSgnLi9fbGlicmFyeScpO1xudmFyIGdsb2JhbCA9IHJlcXVpcmUoJy4vX2dsb2JhbCcpO1xudmFyIGN0eCA9IHJlcXVpcmUoJy4vX2N0eCcpO1xudmFyIGNsYXNzb2YgPSByZXF1aXJlKCcuL19jbGFzc29mJyk7XG52YXIgJGV4cG9ydCA9IHJlcXVpcmUoJy4vX2V4cG9ydCcpO1xudmFyIGlzT2JqZWN0ID0gcmVxdWlyZSgnLi9faXMtb2JqZWN0Jyk7XG52YXIgYUZ1bmN0aW9uID0gcmVxdWlyZSgnLi9fYS1mdW5jdGlvbicpO1xudmFyIGFuSW5zdGFuY2UgPSByZXF1aXJlKCcuL19hbi1pbnN0YW5jZScpO1xudmFyIGZvck9mID0gcmVxdWlyZSgnLi9fZm9yLW9mJyk7XG52YXIgc3BlY2llc0NvbnN0cnVjdG9yID0gcmVxdWlyZSgnLi9fc3BlY2llcy1jb25zdHJ1Y3RvcicpO1xudmFyIHRhc2sgPSByZXF1aXJlKCcuL190YXNrJykuc2V0O1xudmFyIG1pY3JvdGFzayA9IHJlcXVpcmUoJy4vX21pY3JvdGFzaycpKCk7XG52YXIgbmV3UHJvbWlzZUNhcGFiaWxpdHlNb2R1bGUgPSByZXF1aXJlKCcuL19uZXctcHJvbWlzZS1jYXBhYmlsaXR5Jyk7XG52YXIgcGVyZm9ybSA9IHJlcXVpcmUoJy4vX3BlcmZvcm0nKTtcbnZhciBwcm9taXNlUmVzb2x2ZSA9IHJlcXVpcmUoJy4vX3Byb21pc2UtcmVzb2x2ZScpO1xudmFyIFBST01JU0UgPSAnUHJvbWlzZSc7XG52YXIgVHlwZUVycm9yID0gZ2xvYmFsLlR5cGVFcnJvcjtcbnZhciBwcm9jZXNzID0gZ2xvYmFsLnByb2Nlc3M7XG52YXIgJFByb21pc2UgPSBnbG9iYWxbUFJPTUlTRV07XG52YXIgaXNOb2RlID0gY2xhc3NvZihwcm9jZXNzKSA9PSAncHJvY2Vzcyc7XG52YXIgZW1wdHkgPSBmdW5jdGlvbiAoKSB7IC8qIGVtcHR5ICovIH07XG52YXIgSW50ZXJuYWwsIG5ld0dlbmVyaWNQcm9taXNlQ2FwYWJpbGl0eSwgT3duUHJvbWlzZUNhcGFiaWxpdHksIFdyYXBwZXI7XG52YXIgbmV3UHJvbWlzZUNhcGFiaWxpdHkgPSBuZXdHZW5lcmljUHJvbWlzZUNhcGFiaWxpdHkgPSBuZXdQcm9taXNlQ2FwYWJpbGl0eU1vZHVsZS5mO1xuXG52YXIgVVNFX05BVElWRSA9ICEhZnVuY3Rpb24gKCkge1xuICB0cnkge1xuICAgIC8vIGNvcnJlY3Qgc3ViY2xhc3Npbmcgd2l0aCBAQHNwZWNpZXMgc3VwcG9ydFxuICAgIHZhciBwcm9taXNlID0gJFByb21pc2UucmVzb2x2ZSgxKTtcbiAgICB2YXIgRmFrZVByb21pc2UgPSAocHJvbWlzZS5jb25zdHJ1Y3RvciA9IHt9KVtyZXF1aXJlKCcuL193a3MnKSgnc3BlY2llcycpXSA9IGZ1bmN0aW9uIChleGVjKSB7XG4gICAgICBleGVjKGVtcHR5LCBlbXB0eSk7XG4gICAgfTtcbiAgICAvLyB1bmhhbmRsZWQgcmVqZWN0aW9ucyB0cmFja2luZyBzdXBwb3J0LCBOb2RlSlMgUHJvbWlzZSB3aXRob3V0IGl0IGZhaWxzIEBAc3BlY2llcyB0ZXN0XG4gICAgcmV0dXJuIChpc05vZGUgfHwgdHlwZW9mIFByb21pc2VSZWplY3Rpb25FdmVudCA9PSAnZnVuY3Rpb24nKSAmJiBwcm9taXNlLnRoZW4oZW1wdHkpIGluc3RhbmNlb2YgRmFrZVByb21pc2U7XG4gIH0gY2F0Y2ggKGUpIHsgLyogZW1wdHkgKi8gfVxufSgpO1xuXG4vLyBoZWxwZXJzXG52YXIgaXNUaGVuYWJsZSA9IGZ1bmN0aW9uIChpdCkge1xuICB2YXIgdGhlbjtcbiAgcmV0dXJuIGlzT2JqZWN0KGl0KSAmJiB0eXBlb2YgKHRoZW4gPSBpdC50aGVuKSA9PSAnZnVuY3Rpb24nID8gdGhlbiA6IGZhbHNlO1xufTtcbnZhciBub3RpZnkgPSBmdW5jdGlvbiAocHJvbWlzZSwgaXNSZWplY3QpIHtcbiAgaWYgKHByb21pc2UuX24pIHJldHVybjtcbiAgcHJvbWlzZS5fbiA9IHRydWU7XG4gIHZhciBjaGFpbiA9IHByb21pc2UuX2M7XG4gIG1pY3JvdGFzayhmdW5jdGlvbiAoKSB7XG4gICAgdmFyIHZhbHVlID0gcHJvbWlzZS5fdjtcbiAgICB2YXIgb2sgPSBwcm9taXNlLl9zID09IDE7XG4gICAgdmFyIGkgPSAwO1xuICAgIHZhciBydW4gPSBmdW5jdGlvbiAocmVhY3Rpb24pIHtcbiAgICAgIHZhciBoYW5kbGVyID0gb2sgPyByZWFjdGlvbi5vayA6IHJlYWN0aW9uLmZhaWw7XG4gICAgICB2YXIgcmVzb2x2ZSA9IHJlYWN0aW9uLnJlc29sdmU7XG4gICAgICB2YXIgcmVqZWN0ID0gcmVhY3Rpb24ucmVqZWN0O1xuICAgICAgdmFyIGRvbWFpbiA9IHJlYWN0aW9uLmRvbWFpbjtcbiAgICAgIHZhciByZXN1bHQsIHRoZW47XG4gICAgICB0cnkge1xuICAgICAgICBpZiAoaGFuZGxlcikge1xuICAgICAgICAgIGlmICghb2spIHtcbiAgICAgICAgICAgIGlmIChwcm9taXNlLl9oID09IDIpIG9uSGFuZGxlVW5oYW5kbGVkKHByb21pc2UpO1xuICAgICAgICAgICAgcHJvbWlzZS5faCA9IDE7XG4gICAgICAgICAgfVxuICAgICAgICAgIGlmIChoYW5kbGVyID09PSB0cnVlKSByZXN1bHQgPSB2YWx1ZTtcbiAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIGlmIChkb21haW4pIGRvbWFpbi5lbnRlcigpO1xuICAgICAgICAgICAgcmVzdWx0ID0gaGFuZGxlcih2YWx1ZSk7XG4gICAgICAgICAgICBpZiAoZG9tYWluKSBkb21haW4uZXhpdCgpO1xuICAgICAgICAgIH1cbiAgICAgICAgICBpZiAocmVzdWx0ID09PSByZWFjdGlvbi5wcm9taXNlKSB7XG4gICAgICAgICAgICByZWplY3QoVHlwZUVycm9yKCdQcm9taXNlLWNoYWluIGN5Y2xlJykpO1xuICAgICAgICAgIH0gZWxzZSBpZiAodGhlbiA9IGlzVGhlbmFibGUocmVzdWx0KSkge1xuICAgICAgICAgICAgdGhlbi5jYWxsKHJlc3VsdCwgcmVzb2x2ZSwgcmVqZWN0KTtcbiAgICAgICAgICB9IGVsc2UgcmVzb2x2ZShyZXN1bHQpO1xuICAgICAgICB9IGVsc2UgcmVqZWN0KHZhbHVlKTtcbiAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgcmVqZWN0KGUpO1xuICAgICAgfVxuICAgIH07XG4gICAgd2hpbGUgKGNoYWluLmxlbmd0aCA+IGkpIHJ1bihjaGFpbltpKytdKTsgLy8gdmFyaWFibGUgbGVuZ3RoIC0gY2FuJ3QgdXNlIGZvckVhY2hcbiAgICBwcm9taXNlLl9jID0gW107XG4gICAgcHJvbWlzZS5fbiA9IGZhbHNlO1xuICAgIGlmIChpc1JlamVjdCAmJiAhcHJvbWlzZS5faCkgb25VbmhhbmRsZWQocHJvbWlzZSk7XG4gIH0pO1xufTtcbnZhciBvblVuaGFuZGxlZCA9IGZ1bmN0aW9uIChwcm9taXNlKSB7XG4gIHRhc2suY2FsbChnbG9iYWwsIGZ1bmN0aW9uICgpIHtcbiAgICB2YXIgdmFsdWUgPSBwcm9taXNlLl92O1xuICAgIHZhciB1bmhhbmRsZWQgPSBpc1VuaGFuZGxlZChwcm9taXNlKTtcbiAgICB2YXIgcmVzdWx0LCBoYW5kbGVyLCBjb25zb2xlO1xuICAgIGlmICh1bmhhbmRsZWQpIHtcbiAgICAgIHJlc3VsdCA9IHBlcmZvcm0oZnVuY3Rpb24gKCkge1xuICAgICAgICBpZiAoaXNOb2RlKSB7XG4gICAgICAgICAgcHJvY2Vzcy5lbWl0KCd1bmhhbmRsZWRSZWplY3Rpb24nLCB2YWx1ZSwgcHJvbWlzZSk7XG4gICAgICAgIH0gZWxzZSBpZiAoaGFuZGxlciA9IGdsb2JhbC5vbnVuaGFuZGxlZHJlamVjdGlvbikge1xuICAgICAgICAgIGhhbmRsZXIoeyBwcm9taXNlOiBwcm9taXNlLCByZWFzb246IHZhbHVlIH0pO1xuICAgICAgICB9IGVsc2UgaWYgKChjb25zb2xlID0gZ2xvYmFsLmNvbnNvbGUpICYmIGNvbnNvbGUuZXJyb3IpIHtcbiAgICAgICAgICBjb25zb2xlLmVycm9yKCdVbmhhbmRsZWQgcHJvbWlzZSByZWplY3Rpb24nLCB2YWx1ZSk7XG4gICAgICAgIH1cbiAgICAgIH0pO1xuICAgICAgLy8gQnJvd3NlcnMgc2hvdWxkIG5vdCB0cmlnZ2VyIGByZWplY3Rpb25IYW5kbGVkYCBldmVudCBpZiBpdCB3YXMgaGFuZGxlZCBoZXJlLCBOb2RlSlMgLSBzaG91bGRcbiAgICAgIHByb21pc2UuX2ggPSBpc05vZGUgfHwgaXNVbmhhbmRsZWQocHJvbWlzZSkgPyAyIDogMTtcbiAgICB9IHByb21pc2UuX2EgPSB1bmRlZmluZWQ7XG4gICAgaWYgKHVuaGFuZGxlZCAmJiByZXN1bHQuZSkgdGhyb3cgcmVzdWx0LnY7XG4gIH0pO1xufTtcbnZhciBpc1VuaGFuZGxlZCA9IGZ1bmN0aW9uIChwcm9taXNlKSB7XG4gIHJldHVybiBwcm9taXNlLl9oICE9PSAxICYmIChwcm9taXNlLl9hIHx8IHByb21pc2UuX2MpLmxlbmd0aCA9PT0gMDtcbn07XG52YXIgb25IYW5kbGVVbmhhbmRsZWQgPSBmdW5jdGlvbiAocHJvbWlzZSkge1xuICB0YXNrLmNhbGwoZ2xvYmFsLCBmdW5jdGlvbiAoKSB7XG4gICAgdmFyIGhhbmRsZXI7XG4gICAgaWYgKGlzTm9kZSkge1xuICAgICAgcHJvY2Vzcy5lbWl0KCdyZWplY3Rpb25IYW5kbGVkJywgcHJvbWlzZSk7XG4gICAgfSBlbHNlIGlmIChoYW5kbGVyID0gZ2xvYmFsLm9ucmVqZWN0aW9uaGFuZGxlZCkge1xuICAgICAgaGFuZGxlcih7IHByb21pc2U6IHByb21pc2UsIHJlYXNvbjogcHJvbWlzZS5fdiB9KTtcbiAgICB9XG4gIH0pO1xufTtcbnZhciAkcmVqZWN0ID0gZnVuY3Rpb24gKHZhbHVlKSB7XG4gIHZhciBwcm9taXNlID0gdGhpcztcbiAgaWYgKHByb21pc2UuX2QpIHJldHVybjtcbiAgcHJvbWlzZS5fZCA9IHRydWU7XG4gIHByb21pc2UgPSBwcm9taXNlLl93IHx8IHByb21pc2U7IC8vIHVud3JhcFxuICBwcm9taXNlLl92ID0gdmFsdWU7XG4gIHByb21pc2UuX3MgPSAyO1xuICBpZiAoIXByb21pc2UuX2EpIHByb21pc2UuX2EgPSBwcm9taXNlLl9jLnNsaWNlKCk7XG4gIG5vdGlmeShwcm9taXNlLCB0cnVlKTtcbn07XG52YXIgJHJlc29sdmUgPSBmdW5jdGlvbiAodmFsdWUpIHtcbiAgdmFyIHByb21pc2UgPSB0aGlzO1xuICB2YXIgdGhlbjtcbiAgaWYgKHByb21pc2UuX2QpIHJldHVybjtcbiAgcHJvbWlzZS5fZCA9IHRydWU7XG4gIHByb21pc2UgPSBwcm9taXNlLl93IHx8IHByb21pc2U7IC8vIHVud3JhcFxuICB0cnkge1xuICAgIGlmIChwcm9taXNlID09PSB2YWx1ZSkgdGhyb3cgVHlwZUVycm9yKFwiUHJvbWlzZSBjYW4ndCBiZSByZXNvbHZlZCBpdHNlbGZcIik7XG4gICAgaWYgKHRoZW4gPSBpc1RoZW5hYmxlKHZhbHVlKSkge1xuICAgICAgbWljcm90YXNrKGZ1bmN0aW9uICgpIHtcbiAgICAgICAgdmFyIHdyYXBwZXIgPSB7IF93OiBwcm9taXNlLCBfZDogZmFsc2UgfTsgLy8gd3JhcFxuICAgICAgICB0cnkge1xuICAgICAgICAgIHRoZW4uY2FsbCh2YWx1ZSwgY3R4KCRyZXNvbHZlLCB3cmFwcGVyLCAxKSwgY3R4KCRyZWplY3QsIHdyYXBwZXIsIDEpKTtcbiAgICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgICAgICRyZWplY3QuY2FsbCh3cmFwcGVyLCBlKTtcbiAgICAgICAgfVxuICAgICAgfSk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHByb21pc2UuX3YgPSB2YWx1ZTtcbiAgICAgIHByb21pc2UuX3MgPSAxO1xuICAgICAgbm90aWZ5KHByb21pc2UsIGZhbHNlKTtcbiAgICB9XG4gIH0gY2F0Y2ggKGUpIHtcbiAgICAkcmVqZWN0LmNhbGwoeyBfdzogcHJvbWlzZSwgX2Q6IGZhbHNlIH0sIGUpOyAvLyB3cmFwXG4gIH1cbn07XG5cbi8vIGNvbnN0cnVjdG9yIHBvbHlmaWxsXG5pZiAoIVVTRV9OQVRJVkUpIHtcbiAgLy8gMjUuNC4zLjEgUHJvbWlzZShleGVjdXRvcilcbiAgJFByb21pc2UgPSBmdW5jdGlvbiBQcm9taXNlKGV4ZWN1dG9yKSB7XG4gICAgYW5JbnN0YW5jZSh0aGlzLCAkUHJvbWlzZSwgUFJPTUlTRSwgJ19oJyk7XG4gICAgYUZ1bmN0aW9uKGV4ZWN1dG9yKTtcbiAgICBJbnRlcm5hbC5jYWxsKHRoaXMpO1xuICAgIHRyeSB7XG4gICAgICBleGVjdXRvcihjdHgoJHJlc29sdmUsIHRoaXMsIDEpLCBjdHgoJHJlamVjdCwgdGhpcywgMSkpO1xuICAgIH0gY2F0Y2ggKGVycikge1xuICAgICAgJHJlamVjdC5jYWxsKHRoaXMsIGVycik7XG4gICAgfVxuICB9O1xuICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tdW51c2VkLXZhcnNcbiAgSW50ZXJuYWwgPSBmdW5jdGlvbiBQcm9taXNlKGV4ZWN1dG9yKSB7XG4gICAgdGhpcy5fYyA9IFtdOyAgICAgICAgICAgICAvLyA8LSBhd2FpdGluZyByZWFjdGlvbnNcbiAgICB0aGlzLl9hID0gdW5kZWZpbmVkOyAgICAgIC8vIDwtIGNoZWNrZWQgaW4gaXNVbmhhbmRsZWQgcmVhY3Rpb25zXG4gICAgdGhpcy5fcyA9IDA7ICAgICAgICAgICAgICAvLyA8LSBzdGF0ZVxuICAgIHRoaXMuX2QgPSBmYWxzZTsgICAgICAgICAgLy8gPC0gZG9uZVxuICAgIHRoaXMuX3YgPSB1bmRlZmluZWQ7ICAgICAgLy8gPC0gdmFsdWVcbiAgICB0aGlzLl9oID0gMDsgICAgICAgICAgICAgIC8vIDwtIHJlamVjdGlvbiBzdGF0ZSwgMCAtIGRlZmF1bHQsIDEgLSBoYW5kbGVkLCAyIC0gdW5oYW5kbGVkXG4gICAgdGhpcy5fbiA9IGZhbHNlOyAgICAgICAgICAvLyA8LSBub3RpZnlcbiAgfTtcbiAgSW50ZXJuYWwucHJvdG90eXBlID0gcmVxdWlyZSgnLi9fcmVkZWZpbmUtYWxsJykoJFByb21pc2UucHJvdG90eXBlLCB7XG4gICAgLy8gMjUuNC41LjMgUHJvbWlzZS5wcm90b3R5cGUudGhlbihvbkZ1bGZpbGxlZCwgb25SZWplY3RlZClcbiAgICB0aGVuOiBmdW5jdGlvbiB0aGVuKG9uRnVsZmlsbGVkLCBvblJlamVjdGVkKSB7XG4gICAgICB2YXIgcmVhY3Rpb24gPSBuZXdQcm9taXNlQ2FwYWJpbGl0eShzcGVjaWVzQ29uc3RydWN0b3IodGhpcywgJFByb21pc2UpKTtcbiAgICAgIHJlYWN0aW9uLm9rID0gdHlwZW9mIG9uRnVsZmlsbGVkID09ICdmdW5jdGlvbicgPyBvbkZ1bGZpbGxlZCA6IHRydWU7XG4gICAgICByZWFjdGlvbi5mYWlsID0gdHlwZW9mIG9uUmVqZWN0ZWQgPT0gJ2Z1bmN0aW9uJyAmJiBvblJlamVjdGVkO1xuICAgICAgcmVhY3Rpb24uZG9tYWluID0gaXNOb2RlID8gcHJvY2Vzcy5kb21haW4gOiB1bmRlZmluZWQ7XG4gICAgICB0aGlzLl9jLnB1c2gocmVhY3Rpb24pO1xuICAgICAgaWYgKHRoaXMuX2EpIHRoaXMuX2EucHVzaChyZWFjdGlvbik7XG4gICAgICBpZiAodGhpcy5fcykgbm90aWZ5KHRoaXMsIGZhbHNlKTtcbiAgICAgIHJldHVybiByZWFjdGlvbi5wcm9taXNlO1xuICAgIH0sXG4gICAgLy8gMjUuNC41LjEgUHJvbWlzZS5wcm90b3R5cGUuY2F0Y2gob25SZWplY3RlZClcbiAgICAnY2F0Y2gnOiBmdW5jdGlvbiAob25SZWplY3RlZCkge1xuICAgICAgcmV0dXJuIHRoaXMudGhlbih1bmRlZmluZWQsIG9uUmVqZWN0ZWQpO1xuICAgIH1cbiAgfSk7XG4gIE93blByb21pc2VDYXBhYmlsaXR5ID0gZnVuY3Rpb24gKCkge1xuICAgIHZhciBwcm9taXNlID0gbmV3IEludGVybmFsKCk7XG4gICAgdGhpcy5wcm9taXNlID0gcHJvbWlzZTtcbiAgICB0aGlzLnJlc29sdmUgPSBjdHgoJHJlc29sdmUsIHByb21pc2UsIDEpO1xuICAgIHRoaXMucmVqZWN0ID0gY3R4KCRyZWplY3QsIHByb21pc2UsIDEpO1xuICB9O1xuICBuZXdQcm9taXNlQ2FwYWJpbGl0eU1vZHVsZS5mID0gbmV3UHJvbWlzZUNhcGFiaWxpdHkgPSBmdW5jdGlvbiAoQykge1xuICAgIHJldHVybiBDID09PSAkUHJvbWlzZSB8fCBDID09PSBXcmFwcGVyXG4gICAgICA/IG5ldyBPd25Qcm9taXNlQ2FwYWJpbGl0eShDKVxuICAgICAgOiBuZXdHZW5lcmljUHJvbWlzZUNhcGFiaWxpdHkoQyk7XG4gIH07XG59XG5cbiRleHBvcnQoJGV4cG9ydC5HICsgJGV4cG9ydC5XICsgJGV4cG9ydC5GICogIVVTRV9OQVRJVkUsIHsgUHJvbWlzZTogJFByb21pc2UgfSk7XG5yZXF1aXJlKCcuL19zZXQtdG8tc3RyaW5nLXRhZycpKCRQcm9taXNlLCBQUk9NSVNFKTtcbnJlcXVpcmUoJy4vX3NldC1zcGVjaWVzJykoUFJPTUlTRSk7XG5XcmFwcGVyID0gcmVxdWlyZSgnLi9fY29yZScpW1BST01JU0VdO1xuXG4vLyBzdGF0aWNzXG4kZXhwb3J0KCRleHBvcnQuUyArICRleHBvcnQuRiAqICFVU0VfTkFUSVZFLCBQUk9NSVNFLCB7XG4gIC8vIDI1LjQuNC41IFByb21pc2UucmVqZWN0KHIpXG4gIHJlamVjdDogZnVuY3Rpb24gcmVqZWN0KHIpIHtcbiAgICB2YXIgY2FwYWJpbGl0eSA9IG5ld1Byb21pc2VDYXBhYmlsaXR5KHRoaXMpO1xuICAgIHZhciAkJHJlamVjdCA9IGNhcGFiaWxpdHkucmVqZWN0O1xuICAgICQkcmVqZWN0KHIpO1xuICAgIHJldHVybiBjYXBhYmlsaXR5LnByb21pc2U7XG4gIH1cbn0pO1xuJGV4cG9ydCgkZXhwb3J0LlMgKyAkZXhwb3J0LkYgKiAoTElCUkFSWSB8fCAhVVNFX05BVElWRSksIFBST01JU0UsIHtcbiAgLy8gMjUuNC40LjYgUHJvbWlzZS5yZXNvbHZlKHgpXG4gIHJlc29sdmU6IGZ1bmN0aW9uIHJlc29sdmUoeCkge1xuICAgIHJldHVybiBwcm9taXNlUmVzb2x2ZShMSUJSQVJZICYmIHRoaXMgPT09IFdyYXBwZXIgPyAkUHJvbWlzZSA6IHRoaXMsIHgpO1xuICB9XG59KTtcbiRleHBvcnQoJGV4cG9ydC5TICsgJGV4cG9ydC5GICogIShVU0VfTkFUSVZFICYmIHJlcXVpcmUoJy4vX2l0ZXItZGV0ZWN0JykoZnVuY3Rpb24gKGl0ZXIpIHtcbiAgJFByb21pc2UuYWxsKGl0ZXIpWydjYXRjaCddKGVtcHR5KTtcbn0pKSwgUFJPTUlTRSwge1xuICAvLyAyNS40LjQuMSBQcm9taXNlLmFsbChpdGVyYWJsZSlcbiAgYWxsOiBmdW5jdGlvbiBhbGwoaXRlcmFibGUpIHtcbiAgICB2YXIgQyA9IHRoaXM7XG4gICAgdmFyIGNhcGFiaWxpdHkgPSBuZXdQcm9taXNlQ2FwYWJpbGl0eShDKTtcbiAgICB2YXIgcmVzb2x2ZSA9IGNhcGFiaWxpdHkucmVzb2x2ZTtcbiAgICB2YXIgcmVqZWN0ID0gY2FwYWJpbGl0eS5yZWplY3Q7XG4gICAgdmFyIHJlc3VsdCA9IHBlcmZvcm0oZnVuY3Rpb24gKCkge1xuICAgICAgdmFyIHZhbHVlcyA9IFtdO1xuICAgICAgdmFyIGluZGV4ID0gMDtcbiAgICAgIHZhciByZW1haW5pbmcgPSAxO1xuICAgICAgZm9yT2YoaXRlcmFibGUsIGZhbHNlLCBmdW5jdGlvbiAocHJvbWlzZSkge1xuICAgICAgICB2YXIgJGluZGV4ID0gaW5kZXgrKztcbiAgICAgICAgdmFyIGFscmVhZHlDYWxsZWQgPSBmYWxzZTtcbiAgICAgICAgdmFsdWVzLnB1c2godW5kZWZpbmVkKTtcbiAgICAgICAgcmVtYWluaW5nKys7XG4gICAgICAgIEMucmVzb2x2ZShwcm9taXNlKS50aGVuKGZ1bmN0aW9uICh2YWx1ZSkge1xuICAgICAgICAgIGlmIChhbHJlYWR5Q2FsbGVkKSByZXR1cm47XG4gICAgICAgICAgYWxyZWFkeUNhbGxlZCA9IHRydWU7XG4gICAgICAgICAgdmFsdWVzWyRpbmRleF0gPSB2YWx1ZTtcbiAgICAgICAgICAtLXJlbWFpbmluZyB8fCByZXNvbHZlKHZhbHVlcyk7XG4gICAgICAgIH0sIHJlamVjdCk7XG4gICAgICB9KTtcbiAgICAgIC0tcmVtYWluaW5nIHx8IHJlc29sdmUodmFsdWVzKTtcbiAgICB9KTtcbiAgICBpZiAocmVzdWx0LmUpIHJlamVjdChyZXN1bHQudik7XG4gICAgcmV0dXJuIGNhcGFiaWxpdHkucHJvbWlzZTtcbiAgfSxcbiAgLy8gMjUuNC40LjQgUHJvbWlzZS5yYWNlKGl0ZXJhYmxlKVxuICByYWNlOiBmdW5jdGlvbiByYWNlKGl0ZXJhYmxlKSB7XG4gICAgdmFyIEMgPSB0aGlzO1xuICAgIHZhciBjYXBhYmlsaXR5ID0gbmV3UHJvbWlzZUNhcGFiaWxpdHkoQyk7XG4gICAgdmFyIHJlamVjdCA9IGNhcGFiaWxpdHkucmVqZWN0O1xuICAgIHZhciByZXN1bHQgPSBwZXJmb3JtKGZ1bmN0aW9uICgpIHtcbiAgICAgIGZvck9mKGl0ZXJhYmxlLCBmYWxzZSwgZnVuY3Rpb24gKHByb21pc2UpIHtcbiAgICAgICAgQy5yZXNvbHZlKHByb21pc2UpLnRoZW4oY2FwYWJpbGl0eS5yZXNvbHZlLCByZWplY3QpO1xuICAgICAgfSk7XG4gICAgfSk7XG4gICAgaWYgKHJlc3VsdC5lKSByZWplY3QocmVzdWx0LnYpO1xuICAgIHJldHVybiBjYXBhYmlsaXR5LnByb21pc2U7XG4gIH1cbn0pO1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9ub2RlX21vZHVsZXMvX2NvcmUtanNAMi41LjNAY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvZXM2LnByb21pc2UuanNcbi8vIG1vZHVsZSBpZCA9IDEwNVxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCIvLyBmYXN0IGFwcGx5LCBodHRwOi8vanNwZXJmLmxua2l0LmNvbS9mYXN0LWFwcGx5LzVcbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGZuLCBhcmdzLCB0aGF0KSB7XG4gIHZhciB1biA9IHRoYXQgPT09IHVuZGVmaW5lZDtcbiAgc3dpdGNoIChhcmdzLmxlbmd0aCkge1xuICAgIGNhc2UgMDogcmV0dXJuIHVuID8gZm4oKVxuICAgICAgICAgICAgICAgICAgICAgIDogZm4uY2FsbCh0aGF0KTtcbiAgICBjYXNlIDE6IHJldHVybiB1biA/IGZuKGFyZ3NbMF0pXG4gICAgICAgICAgICAgICAgICAgICAgOiBmbi5jYWxsKHRoYXQsIGFyZ3NbMF0pO1xuICAgIGNhc2UgMjogcmV0dXJuIHVuID8gZm4oYXJnc1swXSwgYXJnc1sxXSlcbiAgICAgICAgICAgICAgICAgICAgICA6IGZuLmNhbGwodGhhdCwgYXJnc1swXSwgYXJnc1sxXSk7XG4gICAgY2FzZSAzOiByZXR1cm4gdW4gPyBmbihhcmdzWzBdLCBhcmdzWzFdLCBhcmdzWzJdKVxuICAgICAgICAgICAgICAgICAgICAgIDogZm4uY2FsbCh0aGF0LCBhcmdzWzBdLCBhcmdzWzFdLCBhcmdzWzJdKTtcbiAgICBjYXNlIDQ6IHJldHVybiB1biA/IGZuKGFyZ3NbMF0sIGFyZ3NbMV0sIGFyZ3NbMl0sIGFyZ3NbM10pXG4gICAgICAgICAgICAgICAgICAgICAgOiBmbi5jYWxsKHRoYXQsIGFyZ3NbMF0sIGFyZ3NbMV0sIGFyZ3NbMl0sIGFyZ3NbM10pO1xuICB9IHJldHVybiBmbi5hcHBseSh0aGF0LCBhcmdzKTtcbn07XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL25vZGVfbW9kdWxlcy9fY29yZS1qc0AyLjUuM0Bjb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9faW52b2tlLmpzXG4vLyBtb2R1bGUgaWQgPSAxMDZcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwidmFyIGdsb2JhbCA9IHJlcXVpcmUoJy4vX2dsb2JhbCcpO1xudmFyIG1hY3JvdGFzayA9IHJlcXVpcmUoJy4vX3Rhc2snKS5zZXQ7XG52YXIgT2JzZXJ2ZXIgPSBnbG9iYWwuTXV0YXRpb25PYnNlcnZlciB8fCBnbG9iYWwuV2ViS2l0TXV0YXRpb25PYnNlcnZlcjtcbnZhciBwcm9jZXNzID0gZ2xvYmFsLnByb2Nlc3M7XG52YXIgUHJvbWlzZSA9IGdsb2JhbC5Qcm9taXNlO1xudmFyIGlzTm9kZSA9IHJlcXVpcmUoJy4vX2NvZicpKHByb2Nlc3MpID09ICdwcm9jZXNzJztcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoKSB7XG4gIHZhciBoZWFkLCBsYXN0LCBub3RpZnk7XG5cbiAgdmFyIGZsdXNoID0gZnVuY3Rpb24gKCkge1xuICAgIHZhciBwYXJlbnQsIGZuO1xuICAgIGlmIChpc05vZGUgJiYgKHBhcmVudCA9IHByb2Nlc3MuZG9tYWluKSkgcGFyZW50LmV4aXQoKTtcbiAgICB3aGlsZSAoaGVhZCkge1xuICAgICAgZm4gPSBoZWFkLmZuO1xuICAgICAgaGVhZCA9IGhlYWQubmV4dDtcbiAgICAgIHRyeSB7XG4gICAgICAgIGZuKCk7XG4gICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgIGlmIChoZWFkKSBub3RpZnkoKTtcbiAgICAgICAgZWxzZSBsYXN0ID0gdW5kZWZpbmVkO1xuICAgICAgICB0aHJvdyBlO1xuICAgICAgfVxuICAgIH0gbGFzdCA9IHVuZGVmaW5lZDtcbiAgICBpZiAocGFyZW50KSBwYXJlbnQuZW50ZXIoKTtcbiAgfTtcblxuICAvLyBOb2RlLmpzXG4gIGlmIChpc05vZGUpIHtcbiAgICBub3RpZnkgPSBmdW5jdGlvbiAoKSB7XG4gICAgICBwcm9jZXNzLm5leHRUaWNrKGZsdXNoKTtcbiAgICB9O1xuICAvLyBicm93c2VycyB3aXRoIE11dGF0aW9uT2JzZXJ2ZXIsIGV4Y2VwdCBpT1MgU2FmYXJpIC0gaHR0cHM6Ly9naXRodWIuY29tL3psb2lyb2NrL2NvcmUtanMvaXNzdWVzLzMzOVxuICB9IGVsc2UgaWYgKE9ic2VydmVyICYmICEoZ2xvYmFsLm5hdmlnYXRvciAmJiBnbG9iYWwubmF2aWdhdG9yLnN0YW5kYWxvbmUpKSB7XG4gICAgdmFyIHRvZ2dsZSA9IHRydWU7XG4gICAgdmFyIG5vZGUgPSBkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZSgnJyk7XG4gICAgbmV3IE9ic2VydmVyKGZsdXNoKS5vYnNlcnZlKG5vZGUsIHsgY2hhcmFjdGVyRGF0YTogdHJ1ZSB9KTsgLy8gZXNsaW50LWRpc2FibGUtbGluZSBuby1uZXdcbiAgICBub3RpZnkgPSBmdW5jdGlvbiAoKSB7XG4gICAgICBub2RlLmRhdGEgPSB0b2dnbGUgPSAhdG9nZ2xlO1xuICAgIH07XG4gIC8vIGVudmlyb25tZW50cyB3aXRoIG1heWJlIG5vbi1jb21wbGV0ZWx5IGNvcnJlY3QsIGJ1dCBleGlzdGVudCBQcm9taXNlXG4gIH0gZWxzZSBpZiAoUHJvbWlzZSAmJiBQcm9taXNlLnJlc29sdmUpIHtcbiAgICB2YXIgcHJvbWlzZSA9IFByb21pc2UucmVzb2x2ZSgpO1xuICAgIG5vdGlmeSA9IGZ1bmN0aW9uICgpIHtcbiAgICAgIHByb21pc2UudGhlbihmbHVzaCk7XG4gICAgfTtcbiAgLy8gZm9yIG90aGVyIGVudmlyb25tZW50cyAtIG1hY3JvdGFzayBiYXNlZCBvbjpcbiAgLy8gLSBzZXRJbW1lZGlhdGVcbiAgLy8gLSBNZXNzYWdlQ2hhbm5lbFxuICAvLyAtIHdpbmRvdy5wb3N0TWVzc2FnXG4gIC8vIC0gb25yZWFkeXN0YXRlY2hhbmdlXG4gIC8vIC0gc2V0VGltZW91dFxuICB9IGVsc2Uge1xuICAgIG5vdGlmeSA9IGZ1bmN0aW9uICgpIHtcbiAgICAgIC8vIHN0cmFuZ2UgSUUgKyB3ZWJwYWNrIGRldiBzZXJ2ZXIgYnVnIC0gdXNlIC5jYWxsKGdsb2JhbClcbiAgICAgIG1hY3JvdGFzay5jYWxsKGdsb2JhbCwgZmx1c2gpO1xuICAgIH07XG4gIH1cblxuICByZXR1cm4gZnVuY3Rpb24gKGZuKSB7XG4gICAgdmFyIHRhc2sgPSB7IGZuOiBmbiwgbmV4dDogdW5kZWZpbmVkIH07XG4gICAgaWYgKGxhc3QpIGxhc3QubmV4dCA9IHRhc2s7XG4gICAgaWYgKCFoZWFkKSB7XG4gICAgICBoZWFkID0gdGFzaztcbiAgICAgIG5vdGlmeSgpO1xuICAgIH0gbGFzdCA9IHRhc2s7XG4gIH07XG59O1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9ub2RlX21vZHVsZXMvX2NvcmUtanNAMi41LjNAY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX21pY3JvdGFzay5qc1xuLy8gbW9kdWxlIGlkID0gMTA3XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIi8vIGh0dHBzOi8vZ2l0aHViLmNvbS90YzM5L3Byb3Bvc2FsLXByb21pc2UtZmluYWxseVxuJ3VzZSBzdHJpY3QnO1xudmFyICRleHBvcnQgPSByZXF1aXJlKCcuL19leHBvcnQnKTtcbnZhciBjb3JlID0gcmVxdWlyZSgnLi9fY29yZScpO1xudmFyIGdsb2JhbCA9IHJlcXVpcmUoJy4vX2dsb2JhbCcpO1xudmFyIHNwZWNpZXNDb25zdHJ1Y3RvciA9IHJlcXVpcmUoJy4vX3NwZWNpZXMtY29uc3RydWN0b3InKTtcbnZhciBwcm9taXNlUmVzb2x2ZSA9IHJlcXVpcmUoJy4vX3Byb21pc2UtcmVzb2x2ZScpO1xuXG4kZXhwb3J0KCRleHBvcnQuUCArICRleHBvcnQuUiwgJ1Byb21pc2UnLCB7ICdmaW5hbGx5JzogZnVuY3Rpb24gKG9uRmluYWxseSkge1xuICB2YXIgQyA9IHNwZWNpZXNDb25zdHJ1Y3Rvcih0aGlzLCBjb3JlLlByb21pc2UgfHwgZ2xvYmFsLlByb21pc2UpO1xuICB2YXIgaXNGdW5jdGlvbiA9IHR5cGVvZiBvbkZpbmFsbHkgPT0gJ2Z1bmN0aW9uJztcbiAgcmV0dXJuIHRoaXMudGhlbihcbiAgICBpc0Z1bmN0aW9uID8gZnVuY3Rpb24gKHgpIHtcbiAgICAgIHJldHVybiBwcm9taXNlUmVzb2x2ZShDLCBvbkZpbmFsbHkoKSkudGhlbihmdW5jdGlvbiAoKSB7IHJldHVybiB4OyB9KTtcbiAgICB9IDogb25GaW5hbGx5LFxuICAgIGlzRnVuY3Rpb24gPyBmdW5jdGlvbiAoZSkge1xuICAgICAgcmV0dXJuIHByb21pc2VSZXNvbHZlKEMsIG9uRmluYWxseSgpKS50aGVuKGZ1bmN0aW9uICgpIHsgdGhyb3cgZTsgfSk7XG4gICAgfSA6IG9uRmluYWxseVxuICApO1xufSB9KTtcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vbm9kZV9tb2R1bGVzL19jb3JlLWpzQDIuNS4zQGNvcmUtanMvbGlicmFyeS9tb2R1bGVzL2VzNy5wcm9taXNlLmZpbmFsbHkuanNcbi8vIG1vZHVsZSBpZCA9IDEwOFxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCIndXNlIHN0cmljdCc7XG4vLyBodHRwczovL2dpdGh1Yi5jb20vdGMzOS9wcm9wb3NhbC1wcm9taXNlLXRyeVxudmFyICRleHBvcnQgPSByZXF1aXJlKCcuL19leHBvcnQnKTtcbnZhciBuZXdQcm9taXNlQ2FwYWJpbGl0eSA9IHJlcXVpcmUoJy4vX25ldy1wcm9taXNlLWNhcGFiaWxpdHknKTtcbnZhciBwZXJmb3JtID0gcmVxdWlyZSgnLi9fcGVyZm9ybScpO1xuXG4kZXhwb3J0KCRleHBvcnQuUywgJ1Byb21pc2UnLCB7ICd0cnknOiBmdW5jdGlvbiAoY2FsbGJhY2tmbikge1xuICB2YXIgcHJvbWlzZUNhcGFiaWxpdHkgPSBuZXdQcm9taXNlQ2FwYWJpbGl0eS5mKHRoaXMpO1xuICB2YXIgcmVzdWx0ID0gcGVyZm9ybShjYWxsYmFja2ZuKTtcbiAgKHJlc3VsdC5lID8gcHJvbWlzZUNhcGFiaWxpdHkucmVqZWN0IDogcHJvbWlzZUNhcGFiaWxpdHkucmVzb2x2ZSkocmVzdWx0LnYpO1xuICByZXR1cm4gcHJvbWlzZUNhcGFiaWxpdHkucHJvbWlzZTtcbn0gfSk7XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL25vZGVfbW9kdWxlcy9fY29yZS1qc0AyLjUuM0Bjb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9lczcucHJvbWlzZS50cnkuanNcbi8vIG1vZHVsZSBpZCA9IDEwOVxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJtb2R1bGUuZXhwb3J0cyA9IHsgXCJkZWZhdWx0XCI6IHJlcXVpcmUoXCJjb3JlLWpzL2xpYnJhcnkvZm4vaXMtaXRlcmFibGVcIiksIF9fZXNNb2R1bGU6IHRydWUgfTtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL25vZGVfbW9kdWxlcy9fYmFiZWwtcnVudGltZUA2LjI2LjBAYmFiZWwtcnVudGltZS9jb3JlLWpzL2lzLWl0ZXJhYmxlLmpzXG4vLyBtb2R1bGUgaWQgPSAxMTBcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwicmVxdWlyZSgnLi4vbW9kdWxlcy93ZWIuZG9tLml0ZXJhYmxlJyk7XG5yZXF1aXJlKCcuLi9tb2R1bGVzL2VzNi5zdHJpbmcuaXRlcmF0b3InKTtcbm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZSgnLi4vbW9kdWxlcy9jb3JlLmlzLWl0ZXJhYmxlJyk7XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL25vZGVfbW9kdWxlcy9fY29yZS1qc0AyLjUuM0Bjb3JlLWpzL2xpYnJhcnkvZm4vaXMtaXRlcmFibGUuanNcbi8vIG1vZHVsZSBpZCA9IDExMVxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJ2YXIgY2xhc3NvZiA9IHJlcXVpcmUoJy4vX2NsYXNzb2YnKTtcbnZhciBJVEVSQVRPUiA9IHJlcXVpcmUoJy4vX3drcycpKCdpdGVyYXRvcicpO1xudmFyIEl0ZXJhdG9ycyA9IHJlcXVpcmUoJy4vX2l0ZXJhdG9ycycpO1xubW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKCcuL19jb3JlJykuaXNJdGVyYWJsZSA9IGZ1bmN0aW9uIChpdCkge1xuICB2YXIgTyA9IE9iamVjdChpdCk7XG4gIHJldHVybiBPW0lURVJBVE9SXSAhPT0gdW5kZWZpbmVkXG4gICAgfHwgJ0BAaXRlcmF0b3InIGluIE9cbiAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tcHJvdG90eXBlLWJ1aWx0aW5zXG4gICAgfHwgSXRlcmF0b3JzLmhhc093blByb3BlcnR5KGNsYXNzb2YoTykpO1xufTtcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vbm9kZV9tb2R1bGVzL19jb3JlLWpzQDIuNS4zQGNvcmUtanMvbGlicmFyeS9tb2R1bGVzL2NvcmUuaXMtaXRlcmFibGUuanNcbi8vIG1vZHVsZSBpZCA9IDExMlxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJyZXF1aXJlKCcuLi9tb2R1bGVzL3dlYi5kb20uaXRlcmFibGUnKTtcbnJlcXVpcmUoJy4uL21vZHVsZXMvZXM2LnN0cmluZy5pdGVyYXRvcicpO1xubW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKCcuLi9tb2R1bGVzL2NvcmUuZ2V0LWl0ZXJhdG9yJyk7XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL25vZGVfbW9kdWxlcy9fY29yZS1qc0AyLjUuM0Bjb3JlLWpzL2xpYnJhcnkvZm4vZ2V0LWl0ZXJhdG9yLmpzXG4vLyBtb2R1bGUgaWQgPSAxMTNcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwidmFyIGFuT2JqZWN0ID0gcmVxdWlyZSgnLi9fYW4tb2JqZWN0Jyk7XG52YXIgZ2V0ID0gcmVxdWlyZSgnLi9jb3JlLmdldC1pdGVyYXRvci1tZXRob2QnKTtcbm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZSgnLi9fY29yZScpLmdldEl0ZXJhdG9yID0gZnVuY3Rpb24gKGl0KSB7XG4gIHZhciBpdGVyRm4gPSBnZXQoaXQpO1xuICBpZiAodHlwZW9mIGl0ZXJGbiAhPSAnZnVuY3Rpb24nKSB0aHJvdyBUeXBlRXJyb3IoaXQgKyAnIGlzIG5vdCBpdGVyYWJsZSEnKTtcbiAgcmV0dXJuIGFuT2JqZWN0KGl0ZXJGbi5jYWxsKGl0KSk7XG59O1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9ub2RlX21vZHVsZXMvX2NvcmUtanNAMi41LjNAY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvY29yZS5nZXQtaXRlcmF0b3IuanNcbi8vIG1vZHVsZSBpZCA9IDExNFxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJcInVzZSBzdHJpY3RcIjtcblxuZXhwb3J0cy5fX2VzTW9kdWxlID0gdHJ1ZTtcblxudmFyIF9wcm9taXNlID0gcmVxdWlyZShcIi4uL2NvcmUtanMvcHJvbWlzZVwiKTtcblxudmFyIF9wcm9taXNlMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX3Byb21pc2UpO1xuXG5mdW5jdGlvbiBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KG9iaikgeyByZXR1cm4gb2JqICYmIG9iai5fX2VzTW9kdWxlID8gb2JqIDogeyBkZWZhdWx0OiBvYmogfTsgfVxuXG5leHBvcnRzLmRlZmF1bHQgPSBmdW5jdGlvbiAoZm4pIHtcbiAgcmV0dXJuIGZ1bmN0aW9uICgpIHtcbiAgICB2YXIgZ2VuID0gZm4uYXBwbHkodGhpcywgYXJndW1lbnRzKTtcbiAgICByZXR1cm4gbmV3IF9wcm9taXNlMi5kZWZhdWx0KGZ1bmN0aW9uIChyZXNvbHZlLCByZWplY3QpIHtcbiAgICAgIGZ1bmN0aW9uIHN0ZXAoa2V5LCBhcmcpIHtcbiAgICAgICAgdHJ5IHtcbiAgICAgICAgICB2YXIgaW5mbyA9IGdlbltrZXldKGFyZyk7XG4gICAgICAgICAgdmFyIHZhbHVlID0gaW5mby52YWx1ZTtcbiAgICAgICAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICAgICAgICByZWplY3QoZXJyb3IpO1xuICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmIChpbmZvLmRvbmUpIHtcbiAgICAgICAgICByZXNvbHZlKHZhbHVlKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICByZXR1cm4gX3Byb21pc2UyLmRlZmF1bHQucmVzb2x2ZSh2YWx1ZSkudGhlbihmdW5jdGlvbiAodmFsdWUpIHtcbiAgICAgICAgICAgIHN0ZXAoXCJuZXh0XCIsIHZhbHVlKTtcbiAgICAgICAgICB9LCBmdW5jdGlvbiAoZXJyKSB7XG4gICAgICAgICAgICBzdGVwKFwidGhyb3dcIiwgZXJyKTtcbiAgICAgICAgICB9KTtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICByZXR1cm4gc3RlcChcIm5leHRcIik7XG4gICAgfSk7XG4gIH07XG59O1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vbm9kZV9tb2R1bGVzL19iYWJlbC1ydW50aW1lQDYuMjYuMEBiYWJlbC1ydW50aW1lL2hlbHBlcnMvYXN5bmNUb0dlbmVyYXRvci5qc1xuLy8gbW9kdWxlIGlkID0gMTE1XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIi8vIHJlbW92ZWQgYnkgZXh0cmFjdC10ZXh0LXdlYnBhY2stcGx1Z2luXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9wdWJsaWMvY3NzL21haW4uY3NzXG4vLyBtb2R1bGUgaWQgPSAxMTZcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiZXhwb3J0IGRlZmF1bHQgY2xhc3MgVGltZXIge1xyXG4gICAgY29uc3RydWN0b3IoZGVsdGFUaW1lID0gMS82MCkge1xyXG4gICAgICAgIGxldCBhY2N1bXVsYXRlZFRpbWUgPSAwO1xyXG4gICAgICAgIGxldCBsYXN0VGltZSA9IDA7XHJcblxyXG4gICAgICAgIHRoaXMudXBkYXRlUHJveHkgPSAgKHRpbWUpID0+IHtcclxuICAgICAgICAgICAgYWNjdW11bGF0ZWRUaW1lICs9ICh0aW1lIC0gbGFzdFRpbWUpIC8gMTAwMDtcclxuXHJcbiAgICAgICAgICAgIGlmIChhY2N1bXVsYXRlZFRpbWUgPiAxKSB7XHJcbiAgICAgICAgICAgICAgICAvKiBBIGhhY2sgdG8gU29sdmUgdGhlIHRpbWUgYWNjdW11bGF0ZVxyXG4gICAgICAgICAgICAgICAgKiB3aGVuIGl0IGlzIHJ1bm5pbmcgYmFja2dyb3VuZC5cclxuICAgICAgICAgICAgICAgICogU28gdGhhdCBvdXIgY29tcHV0ZXIgd29udCBiZSBzbG93IGRvd24gYnkgdGhpcyxcclxuICAgICAgICAgICAgICAgICogYWZ0ZXIgbG9uZyB0aW1lIG9mIHJ1bm5pbmcgdGhpcyBpbiBiYWNrZ3JvdW5kLiovXHJcbiAgICAgICAgICAgICAgICBhY2N1bXVsYXRlZFRpbWUgPSAxO1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICB3aGlsZSAoYWNjdW11bGF0ZWRUaW1lID4gZGVsdGFUaW1lKSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLnVwZGF0ZShkZWx0YVRpbWUpO1xyXG5cclxuICAgICAgICAgICAgICAgIGFjY3VtdWxhdGVkVGltZSAtPSBkZWx0YVRpbWU7XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIGxhc3RUaW1lID0gdGltZTtcclxuXHJcbiAgICAgICAgICAgIHRoaXMuZW5xdWV1ZSgpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBlbnF1ZXVlKCkge1xyXG4gICAgICAgIHJlcXVlc3RBbmltYXRpb25GcmFtZSh0aGlzLnVwZGF0ZVByb3h5KTtcclxuICAgIH1cclxuXHJcbiAgICBzdGFydCgpIHtcclxuICAgICAgICB0aGlzLmVucXVldWUoKTtcclxuICAgIH1cclxufVxyXG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9wdWJsaWMvanMvVGltZXIuanMiLCJtb2R1bGUuZXhwb3J0cyA9IHsgXCJkZWZhdWx0XCI6IHJlcXVpcmUoXCJjb3JlLWpzL2xpYnJhcnkvZm4vb2JqZWN0L2RlZmluZS1wcm9wZXJ0eVwiKSwgX19lc01vZHVsZTogdHJ1ZSB9O1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vbm9kZV9tb2R1bGVzL19iYWJlbC1ydW50aW1lQDYuMjYuMEBiYWJlbC1ydW50aW1lL2NvcmUtanMvb2JqZWN0L2RlZmluZS1wcm9wZXJ0eS5qc1xuLy8gbW9kdWxlIGlkID0gMTE4XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsInJlcXVpcmUoJy4uLy4uL21vZHVsZXMvZXM2Lm9iamVjdC5kZWZpbmUtcHJvcGVydHknKTtcbnZhciAkT2JqZWN0ID0gcmVxdWlyZSgnLi4vLi4vbW9kdWxlcy9fY29yZScpLk9iamVjdDtcbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gZGVmaW5lUHJvcGVydHkoaXQsIGtleSwgZGVzYykge1xuICByZXR1cm4gJE9iamVjdC5kZWZpbmVQcm9wZXJ0eShpdCwga2V5LCBkZXNjKTtcbn07XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL25vZGVfbW9kdWxlcy9fY29yZS1qc0AyLjUuM0Bjb3JlLWpzL2xpYnJhcnkvZm4vb2JqZWN0L2RlZmluZS1wcm9wZXJ0eS5qc1xuLy8gbW9kdWxlIGlkID0gMTE5XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsInZhciAkZXhwb3J0ID0gcmVxdWlyZSgnLi9fZXhwb3J0Jyk7XG4vLyAxOS4xLjIuNCAvIDE1LjIuMy42IE9iamVjdC5kZWZpbmVQcm9wZXJ0eShPLCBQLCBBdHRyaWJ1dGVzKVxuJGV4cG9ydCgkZXhwb3J0LlMgKyAkZXhwb3J0LkYgKiAhcmVxdWlyZSgnLi9fZGVzY3JpcHRvcnMnKSwgJ09iamVjdCcsIHsgZGVmaW5lUHJvcGVydHk6IHJlcXVpcmUoJy4vX29iamVjdC1kcCcpLmYgfSk7XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL25vZGVfbW9kdWxlcy9fY29yZS1qc0AyLjUuM0Bjb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9lczYub2JqZWN0LmRlZmluZS1wcm9wZXJ0eS5qc1xuLy8gbW9kdWxlIGlkID0gMTIwXG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsImltcG9ydCB7VmVjMn0gZnJvbSAnLi9tYXRoLmpzJztcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIENhbWVyYSB7XHJcbiAgICBjb25zdHJ1Y3RvcigpIHtcclxuICAgICAgICB0aGlzLnBvcyA9IG5ldyBWZWMyKDAsMCk7XHJcbiAgICAgICAgdGhpcy5zaXplID0gbmV3IFZlYzIoMjU2LDI0MCk7XHJcbiAgICB9XHJcbn1cclxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vcHVibGljL2pzL0NhbWVyYS5qcyIsInJlcXVpcmUoJy4uLy4uL21vZHVsZXMvZXM2LnN5bWJvbCcpO1xucmVxdWlyZSgnLi4vLi4vbW9kdWxlcy9lczYub2JqZWN0LnRvLXN0cmluZycpO1xucmVxdWlyZSgnLi4vLi4vbW9kdWxlcy9lczcuc3ltYm9sLmFzeW5jLWl0ZXJhdG9yJyk7XG5yZXF1aXJlKCcuLi8uLi9tb2R1bGVzL2VzNy5zeW1ib2wub2JzZXJ2YWJsZScpO1xubW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKCcuLi8uLi9tb2R1bGVzL19jb3JlJykuU3ltYm9sO1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9ub2RlX21vZHVsZXMvX2NvcmUtanNAMi41LjNAY29yZS1qcy9saWJyYXJ5L2ZuL3N5bWJvbC9pbmRleC5qc1xuLy8gbW9kdWxlIGlkID0gMTIyXG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIid1c2Ugc3RyaWN0Jztcbi8vIEVDTUFTY3JpcHQgNiBzeW1ib2xzIHNoaW1cbnZhciBnbG9iYWwgPSByZXF1aXJlKCcuL19nbG9iYWwnKTtcbnZhciBoYXMgPSByZXF1aXJlKCcuL19oYXMnKTtcbnZhciBERVNDUklQVE9SUyA9IHJlcXVpcmUoJy4vX2Rlc2NyaXB0b3JzJyk7XG52YXIgJGV4cG9ydCA9IHJlcXVpcmUoJy4vX2V4cG9ydCcpO1xudmFyIHJlZGVmaW5lID0gcmVxdWlyZSgnLi9fcmVkZWZpbmUnKTtcbnZhciBNRVRBID0gcmVxdWlyZSgnLi9fbWV0YScpLktFWTtcbnZhciAkZmFpbHMgPSByZXF1aXJlKCcuL19mYWlscycpO1xudmFyIHNoYXJlZCA9IHJlcXVpcmUoJy4vX3NoYXJlZCcpO1xudmFyIHNldFRvU3RyaW5nVGFnID0gcmVxdWlyZSgnLi9fc2V0LXRvLXN0cmluZy10YWcnKTtcbnZhciB1aWQgPSByZXF1aXJlKCcuL191aWQnKTtcbnZhciB3a3MgPSByZXF1aXJlKCcuL193a3MnKTtcbnZhciB3a3NFeHQgPSByZXF1aXJlKCcuL193a3MtZXh0Jyk7XG52YXIgd2tzRGVmaW5lID0gcmVxdWlyZSgnLi9fd2tzLWRlZmluZScpO1xudmFyIGVudW1LZXlzID0gcmVxdWlyZSgnLi9fZW51bS1rZXlzJyk7XG52YXIgaXNBcnJheSA9IHJlcXVpcmUoJy4vX2lzLWFycmF5Jyk7XG52YXIgYW5PYmplY3QgPSByZXF1aXJlKCcuL19hbi1vYmplY3QnKTtcbnZhciBpc09iamVjdCA9IHJlcXVpcmUoJy4vX2lzLW9iamVjdCcpO1xudmFyIHRvSU9iamVjdCA9IHJlcXVpcmUoJy4vX3RvLWlvYmplY3QnKTtcbnZhciB0b1ByaW1pdGl2ZSA9IHJlcXVpcmUoJy4vX3RvLXByaW1pdGl2ZScpO1xudmFyIGNyZWF0ZURlc2MgPSByZXF1aXJlKCcuL19wcm9wZXJ0eS1kZXNjJyk7XG52YXIgX2NyZWF0ZSA9IHJlcXVpcmUoJy4vX29iamVjdC1jcmVhdGUnKTtcbnZhciBnT1BORXh0ID0gcmVxdWlyZSgnLi9fb2JqZWN0LWdvcG4tZXh0Jyk7XG52YXIgJEdPUEQgPSByZXF1aXJlKCcuL19vYmplY3QtZ29wZCcpO1xudmFyICREUCA9IHJlcXVpcmUoJy4vX29iamVjdC1kcCcpO1xudmFyICRrZXlzID0gcmVxdWlyZSgnLi9fb2JqZWN0LWtleXMnKTtcbnZhciBnT1BEID0gJEdPUEQuZjtcbnZhciBkUCA9ICREUC5mO1xudmFyIGdPUE4gPSBnT1BORXh0LmY7XG52YXIgJFN5bWJvbCA9IGdsb2JhbC5TeW1ib2w7XG52YXIgJEpTT04gPSBnbG9iYWwuSlNPTjtcbnZhciBfc3RyaW5naWZ5ID0gJEpTT04gJiYgJEpTT04uc3RyaW5naWZ5O1xudmFyIFBST1RPVFlQRSA9ICdwcm90b3R5cGUnO1xudmFyIEhJRERFTiA9IHdrcygnX2hpZGRlbicpO1xudmFyIFRPX1BSSU1JVElWRSA9IHdrcygndG9QcmltaXRpdmUnKTtcbnZhciBpc0VudW0gPSB7fS5wcm9wZXJ0eUlzRW51bWVyYWJsZTtcbnZhciBTeW1ib2xSZWdpc3RyeSA9IHNoYXJlZCgnc3ltYm9sLXJlZ2lzdHJ5Jyk7XG52YXIgQWxsU3ltYm9scyA9IHNoYXJlZCgnc3ltYm9scycpO1xudmFyIE9QU3ltYm9scyA9IHNoYXJlZCgnb3Atc3ltYm9scycpO1xudmFyIE9iamVjdFByb3RvID0gT2JqZWN0W1BST1RPVFlQRV07XG52YXIgVVNFX05BVElWRSA9IHR5cGVvZiAkU3ltYm9sID09ICdmdW5jdGlvbic7XG52YXIgUU9iamVjdCA9IGdsb2JhbC5RT2JqZWN0O1xuLy8gRG9uJ3QgdXNlIHNldHRlcnMgaW4gUXQgU2NyaXB0LCBodHRwczovL2dpdGh1Yi5jb20vemxvaXJvY2svY29yZS1qcy9pc3N1ZXMvMTczXG52YXIgc2V0dGVyID0gIVFPYmplY3QgfHwgIVFPYmplY3RbUFJPVE9UWVBFXSB8fCAhUU9iamVjdFtQUk9UT1RZUEVdLmZpbmRDaGlsZDtcblxuLy8gZmFsbGJhY2sgZm9yIG9sZCBBbmRyb2lkLCBodHRwczovL2NvZGUuZ29vZ2xlLmNvbS9wL3Y4L2lzc3Vlcy9kZXRhaWw/aWQ9Njg3XG52YXIgc2V0U3ltYm9sRGVzYyA9IERFU0NSSVBUT1JTICYmICRmYWlscyhmdW5jdGlvbiAoKSB7XG4gIHJldHVybiBfY3JlYXRlKGRQKHt9LCAnYScsIHtcbiAgICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIGRQKHRoaXMsICdhJywgeyB2YWx1ZTogNyB9KS5hOyB9XG4gIH0pKS5hICE9IDc7XG59KSA/IGZ1bmN0aW9uIChpdCwga2V5LCBEKSB7XG4gIHZhciBwcm90b0Rlc2MgPSBnT1BEKE9iamVjdFByb3RvLCBrZXkpO1xuICBpZiAocHJvdG9EZXNjKSBkZWxldGUgT2JqZWN0UHJvdG9ba2V5XTtcbiAgZFAoaXQsIGtleSwgRCk7XG4gIGlmIChwcm90b0Rlc2MgJiYgaXQgIT09IE9iamVjdFByb3RvKSBkUChPYmplY3RQcm90bywga2V5LCBwcm90b0Rlc2MpO1xufSA6IGRQO1xuXG52YXIgd3JhcCA9IGZ1bmN0aW9uICh0YWcpIHtcbiAgdmFyIHN5bSA9IEFsbFN5bWJvbHNbdGFnXSA9IF9jcmVhdGUoJFN5bWJvbFtQUk9UT1RZUEVdKTtcbiAgc3ltLl9rID0gdGFnO1xuICByZXR1cm4gc3ltO1xufTtcblxudmFyIGlzU3ltYm9sID0gVVNFX05BVElWRSAmJiB0eXBlb2YgJFN5bWJvbC5pdGVyYXRvciA9PSAnc3ltYm9sJyA/IGZ1bmN0aW9uIChpdCkge1xuICByZXR1cm4gdHlwZW9mIGl0ID09ICdzeW1ib2wnO1xufSA6IGZ1bmN0aW9uIChpdCkge1xuICByZXR1cm4gaXQgaW5zdGFuY2VvZiAkU3ltYm9sO1xufTtcblxudmFyICRkZWZpbmVQcm9wZXJ0eSA9IGZ1bmN0aW9uIGRlZmluZVByb3BlcnR5KGl0LCBrZXksIEQpIHtcbiAgaWYgKGl0ID09PSBPYmplY3RQcm90bykgJGRlZmluZVByb3BlcnR5KE9QU3ltYm9scywga2V5LCBEKTtcbiAgYW5PYmplY3QoaXQpO1xuICBrZXkgPSB0b1ByaW1pdGl2ZShrZXksIHRydWUpO1xuICBhbk9iamVjdChEKTtcbiAgaWYgKGhhcyhBbGxTeW1ib2xzLCBrZXkpKSB7XG4gICAgaWYgKCFELmVudW1lcmFibGUpIHtcbiAgICAgIGlmICghaGFzKGl0LCBISURERU4pKSBkUChpdCwgSElEREVOLCBjcmVhdGVEZXNjKDEsIHt9KSk7XG4gICAgICBpdFtISURERU5dW2tleV0gPSB0cnVlO1xuICAgIH0gZWxzZSB7XG4gICAgICBpZiAoaGFzKGl0LCBISURERU4pICYmIGl0W0hJRERFTl1ba2V5XSkgaXRbSElEREVOXVtrZXldID0gZmFsc2U7XG4gICAgICBEID0gX2NyZWF0ZShELCB7IGVudW1lcmFibGU6IGNyZWF0ZURlc2MoMCwgZmFsc2UpIH0pO1xuICAgIH0gcmV0dXJuIHNldFN5bWJvbERlc2MoaXQsIGtleSwgRCk7XG4gIH0gcmV0dXJuIGRQKGl0LCBrZXksIEQpO1xufTtcbnZhciAkZGVmaW5lUHJvcGVydGllcyA9IGZ1bmN0aW9uIGRlZmluZVByb3BlcnRpZXMoaXQsIFApIHtcbiAgYW5PYmplY3QoaXQpO1xuICB2YXIga2V5cyA9IGVudW1LZXlzKFAgPSB0b0lPYmplY3QoUCkpO1xuICB2YXIgaSA9IDA7XG4gIHZhciBsID0ga2V5cy5sZW5ndGg7XG4gIHZhciBrZXk7XG4gIHdoaWxlIChsID4gaSkgJGRlZmluZVByb3BlcnR5KGl0LCBrZXkgPSBrZXlzW2krK10sIFBba2V5XSk7XG4gIHJldHVybiBpdDtcbn07XG52YXIgJGNyZWF0ZSA9IGZ1bmN0aW9uIGNyZWF0ZShpdCwgUCkge1xuICByZXR1cm4gUCA9PT0gdW5kZWZpbmVkID8gX2NyZWF0ZShpdCkgOiAkZGVmaW5lUHJvcGVydGllcyhfY3JlYXRlKGl0KSwgUCk7XG59O1xudmFyICRwcm9wZXJ0eUlzRW51bWVyYWJsZSA9IGZ1bmN0aW9uIHByb3BlcnR5SXNFbnVtZXJhYmxlKGtleSkge1xuICB2YXIgRSA9IGlzRW51bS5jYWxsKHRoaXMsIGtleSA9IHRvUHJpbWl0aXZlKGtleSwgdHJ1ZSkpO1xuICBpZiAodGhpcyA9PT0gT2JqZWN0UHJvdG8gJiYgaGFzKEFsbFN5bWJvbHMsIGtleSkgJiYgIWhhcyhPUFN5bWJvbHMsIGtleSkpIHJldHVybiBmYWxzZTtcbiAgcmV0dXJuIEUgfHwgIWhhcyh0aGlzLCBrZXkpIHx8ICFoYXMoQWxsU3ltYm9scywga2V5KSB8fCBoYXModGhpcywgSElEREVOKSAmJiB0aGlzW0hJRERFTl1ba2V5XSA/IEUgOiB0cnVlO1xufTtcbnZhciAkZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yID0gZnVuY3Rpb24gZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yKGl0LCBrZXkpIHtcbiAgaXQgPSB0b0lPYmplY3QoaXQpO1xuICBrZXkgPSB0b1ByaW1pdGl2ZShrZXksIHRydWUpO1xuICBpZiAoaXQgPT09IE9iamVjdFByb3RvICYmIGhhcyhBbGxTeW1ib2xzLCBrZXkpICYmICFoYXMoT1BTeW1ib2xzLCBrZXkpKSByZXR1cm47XG4gIHZhciBEID0gZ09QRChpdCwga2V5KTtcbiAgaWYgKEQgJiYgaGFzKEFsbFN5bWJvbHMsIGtleSkgJiYgIShoYXMoaXQsIEhJRERFTikgJiYgaXRbSElEREVOXVtrZXldKSkgRC5lbnVtZXJhYmxlID0gdHJ1ZTtcbiAgcmV0dXJuIEQ7XG59O1xudmFyICRnZXRPd25Qcm9wZXJ0eU5hbWVzID0gZnVuY3Rpb24gZ2V0T3duUHJvcGVydHlOYW1lcyhpdCkge1xuICB2YXIgbmFtZXMgPSBnT1BOKHRvSU9iamVjdChpdCkpO1xuICB2YXIgcmVzdWx0ID0gW107XG4gIHZhciBpID0gMDtcbiAgdmFyIGtleTtcbiAgd2hpbGUgKG5hbWVzLmxlbmd0aCA+IGkpIHtcbiAgICBpZiAoIWhhcyhBbGxTeW1ib2xzLCBrZXkgPSBuYW1lc1tpKytdKSAmJiBrZXkgIT0gSElEREVOICYmIGtleSAhPSBNRVRBKSByZXN1bHQucHVzaChrZXkpO1xuICB9IHJldHVybiByZXN1bHQ7XG59O1xudmFyICRnZXRPd25Qcm9wZXJ0eVN5bWJvbHMgPSBmdW5jdGlvbiBnZXRPd25Qcm9wZXJ0eVN5bWJvbHMoaXQpIHtcbiAgdmFyIElTX09QID0gaXQgPT09IE9iamVjdFByb3RvO1xuICB2YXIgbmFtZXMgPSBnT1BOKElTX09QID8gT1BTeW1ib2xzIDogdG9JT2JqZWN0KGl0KSk7XG4gIHZhciByZXN1bHQgPSBbXTtcbiAgdmFyIGkgPSAwO1xuICB2YXIga2V5O1xuICB3aGlsZSAobmFtZXMubGVuZ3RoID4gaSkge1xuICAgIGlmIChoYXMoQWxsU3ltYm9scywga2V5ID0gbmFtZXNbaSsrXSkgJiYgKElTX09QID8gaGFzKE9iamVjdFByb3RvLCBrZXkpIDogdHJ1ZSkpIHJlc3VsdC5wdXNoKEFsbFN5bWJvbHNba2V5XSk7XG4gIH0gcmV0dXJuIHJlc3VsdDtcbn07XG5cbi8vIDE5LjQuMS4xIFN5bWJvbChbZGVzY3JpcHRpb25dKVxuaWYgKCFVU0VfTkFUSVZFKSB7XG4gICRTeW1ib2wgPSBmdW5jdGlvbiBTeW1ib2woKSB7XG4gICAgaWYgKHRoaXMgaW5zdGFuY2VvZiAkU3ltYm9sKSB0aHJvdyBUeXBlRXJyb3IoJ1N5bWJvbCBpcyBub3QgYSBjb25zdHJ1Y3RvciEnKTtcbiAgICB2YXIgdGFnID0gdWlkKGFyZ3VtZW50cy5sZW5ndGggPiAwID8gYXJndW1lbnRzWzBdIDogdW5kZWZpbmVkKTtcbiAgICB2YXIgJHNldCA9IGZ1bmN0aW9uICh2YWx1ZSkge1xuICAgICAgaWYgKHRoaXMgPT09IE9iamVjdFByb3RvKSAkc2V0LmNhbGwoT1BTeW1ib2xzLCB2YWx1ZSk7XG4gICAgICBpZiAoaGFzKHRoaXMsIEhJRERFTikgJiYgaGFzKHRoaXNbSElEREVOXSwgdGFnKSkgdGhpc1tISURERU5dW3RhZ10gPSBmYWxzZTtcbiAgICAgIHNldFN5bWJvbERlc2ModGhpcywgdGFnLCBjcmVhdGVEZXNjKDEsIHZhbHVlKSk7XG4gICAgfTtcbiAgICBpZiAoREVTQ1JJUFRPUlMgJiYgc2V0dGVyKSBzZXRTeW1ib2xEZXNjKE9iamVjdFByb3RvLCB0YWcsIHsgY29uZmlndXJhYmxlOiB0cnVlLCBzZXQ6ICRzZXQgfSk7XG4gICAgcmV0dXJuIHdyYXAodGFnKTtcbiAgfTtcbiAgcmVkZWZpbmUoJFN5bWJvbFtQUk9UT1RZUEVdLCAndG9TdHJpbmcnLCBmdW5jdGlvbiB0b1N0cmluZygpIHtcbiAgICByZXR1cm4gdGhpcy5faztcbiAgfSk7XG5cbiAgJEdPUEQuZiA9ICRnZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3I7XG4gICREUC5mID0gJGRlZmluZVByb3BlcnR5O1xuICByZXF1aXJlKCcuL19vYmplY3QtZ29wbicpLmYgPSBnT1BORXh0LmYgPSAkZ2V0T3duUHJvcGVydHlOYW1lcztcbiAgcmVxdWlyZSgnLi9fb2JqZWN0LXBpZScpLmYgPSAkcHJvcGVydHlJc0VudW1lcmFibGU7XG4gIHJlcXVpcmUoJy4vX29iamVjdC1nb3BzJykuZiA9ICRnZXRPd25Qcm9wZXJ0eVN5bWJvbHM7XG5cbiAgaWYgKERFU0NSSVBUT1JTICYmICFyZXF1aXJlKCcuL19saWJyYXJ5JykpIHtcbiAgICByZWRlZmluZShPYmplY3RQcm90bywgJ3Byb3BlcnR5SXNFbnVtZXJhYmxlJywgJHByb3BlcnR5SXNFbnVtZXJhYmxlLCB0cnVlKTtcbiAgfVxuXG4gIHdrc0V4dC5mID0gZnVuY3Rpb24gKG5hbWUpIHtcbiAgICByZXR1cm4gd3JhcCh3a3MobmFtZSkpO1xuICB9O1xufVxuXG4kZXhwb3J0KCRleHBvcnQuRyArICRleHBvcnQuVyArICRleHBvcnQuRiAqICFVU0VfTkFUSVZFLCB7IFN5bWJvbDogJFN5bWJvbCB9KTtcblxuZm9yICh2YXIgZXM2U3ltYm9scyA9IChcbiAgLy8gMTkuNC4yLjIsIDE5LjQuMi4zLCAxOS40LjIuNCwgMTkuNC4yLjYsIDE5LjQuMi44LCAxOS40LjIuOSwgMTkuNC4yLjEwLCAxOS40LjIuMTEsIDE5LjQuMi4xMiwgMTkuNC4yLjEzLCAxOS40LjIuMTRcbiAgJ2hhc0luc3RhbmNlLGlzQ29uY2F0U3ByZWFkYWJsZSxpdGVyYXRvcixtYXRjaCxyZXBsYWNlLHNlYXJjaCxzcGVjaWVzLHNwbGl0LHRvUHJpbWl0aXZlLHRvU3RyaW5nVGFnLHVuc2NvcGFibGVzJ1xuKS5zcGxpdCgnLCcpLCBqID0gMDsgZXM2U3ltYm9scy5sZW5ndGggPiBqOyl3a3MoZXM2U3ltYm9sc1tqKytdKTtcblxuZm9yICh2YXIgd2VsbEtub3duU3ltYm9scyA9ICRrZXlzKHdrcy5zdG9yZSksIGsgPSAwOyB3ZWxsS25vd25TeW1ib2xzLmxlbmd0aCA+IGs7KSB3a3NEZWZpbmUod2VsbEtub3duU3ltYm9sc1trKytdKTtcblxuJGV4cG9ydCgkZXhwb3J0LlMgKyAkZXhwb3J0LkYgKiAhVVNFX05BVElWRSwgJ1N5bWJvbCcsIHtcbiAgLy8gMTkuNC4yLjEgU3ltYm9sLmZvcihrZXkpXG4gICdmb3InOiBmdW5jdGlvbiAoa2V5KSB7XG4gICAgcmV0dXJuIGhhcyhTeW1ib2xSZWdpc3RyeSwga2V5ICs9ICcnKVxuICAgICAgPyBTeW1ib2xSZWdpc3RyeVtrZXldXG4gICAgICA6IFN5bWJvbFJlZ2lzdHJ5W2tleV0gPSAkU3ltYm9sKGtleSk7XG4gIH0sXG4gIC8vIDE5LjQuMi41IFN5bWJvbC5rZXlGb3Ioc3ltKVxuICBrZXlGb3I6IGZ1bmN0aW9uIGtleUZvcihzeW0pIHtcbiAgICBpZiAoIWlzU3ltYm9sKHN5bSkpIHRocm93IFR5cGVFcnJvcihzeW0gKyAnIGlzIG5vdCBhIHN5bWJvbCEnKTtcbiAgICBmb3IgKHZhciBrZXkgaW4gU3ltYm9sUmVnaXN0cnkpIGlmIChTeW1ib2xSZWdpc3RyeVtrZXldID09PSBzeW0pIHJldHVybiBrZXk7XG4gIH0sXG4gIHVzZVNldHRlcjogZnVuY3Rpb24gKCkgeyBzZXR0ZXIgPSB0cnVlOyB9LFxuICB1c2VTaW1wbGU6IGZ1bmN0aW9uICgpIHsgc2V0dGVyID0gZmFsc2U7IH1cbn0pO1xuXG4kZXhwb3J0KCRleHBvcnQuUyArICRleHBvcnQuRiAqICFVU0VfTkFUSVZFLCAnT2JqZWN0Jywge1xuICAvLyAxOS4xLjIuMiBPYmplY3QuY3JlYXRlKE8gWywgUHJvcGVydGllc10pXG4gIGNyZWF0ZTogJGNyZWF0ZSxcbiAgLy8gMTkuMS4yLjQgT2JqZWN0LmRlZmluZVByb3BlcnR5KE8sIFAsIEF0dHJpYnV0ZXMpXG4gIGRlZmluZVByb3BlcnR5OiAkZGVmaW5lUHJvcGVydHksXG4gIC8vIDE5LjEuMi4zIE9iamVjdC5kZWZpbmVQcm9wZXJ0aWVzKE8sIFByb3BlcnRpZXMpXG4gIGRlZmluZVByb3BlcnRpZXM6ICRkZWZpbmVQcm9wZXJ0aWVzLFxuICAvLyAxOS4xLjIuNiBPYmplY3QuZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yKE8sIFApXG4gIGdldE93blByb3BlcnR5RGVzY3JpcHRvcjogJGdldE93blByb3BlcnR5RGVzY3JpcHRvcixcbiAgLy8gMTkuMS4yLjcgT2JqZWN0LmdldE93blByb3BlcnR5TmFtZXMoTylcbiAgZ2V0T3duUHJvcGVydHlOYW1lczogJGdldE93blByb3BlcnR5TmFtZXMsXG4gIC8vIDE5LjEuMi44IE9iamVjdC5nZXRPd25Qcm9wZXJ0eVN5bWJvbHMoTylcbiAgZ2V0T3duUHJvcGVydHlTeW1ib2xzOiAkZ2V0T3duUHJvcGVydHlTeW1ib2xzXG59KTtcblxuLy8gMjQuMy4yIEpTT04uc3RyaW5naWZ5KHZhbHVlIFssIHJlcGxhY2VyIFssIHNwYWNlXV0pXG4kSlNPTiAmJiAkZXhwb3J0KCRleHBvcnQuUyArICRleHBvcnQuRiAqICghVVNFX05BVElWRSB8fCAkZmFpbHMoZnVuY3Rpb24gKCkge1xuICB2YXIgUyA9ICRTeW1ib2woKTtcbiAgLy8gTVMgRWRnZSBjb252ZXJ0cyBzeW1ib2wgdmFsdWVzIHRvIEpTT04gYXMge31cbiAgLy8gV2ViS2l0IGNvbnZlcnRzIHN5bWJvbCB2YWx1ZXMgdG8gSlNPTiBhcyBudWxsXG4gIC8vIFY4IHRocm93cyBvbiBib3hlZCBzeW1ib2xzXG4gIHJldHVybiBfc3RyaW5naWZ5KFtTXSkgIT0gJ1tudWxsXScgfHwgX3N0cmluZ2lmeSh7IGE6IFMgfSkgIT0gJ3t9JyB8fCBfc3RyaW5naWZ5KE9iamVjdChTKSkgIT0gJ3t9Jztcbn0pKSwgJ0pTT04nLCB7XG4gIHN0cmluZ2lmeTogZnVuY3Rpb24gc3RyaW5naWZ5KGl0KSB7XG4gICAgdmFyIGFyZ3MgPSBbaXRdO1xuICAgIHZhciBpID0gMTtcbiAgICB2YXIgcmVwbGFjZXIsICRyZXBsYWNlcjtcbiAgICB3aGlsZSAoYXJndW1lbnRzLmxlbmd0aCA+IGkpIGFyZ3MucHVzaChhcmd1bWVudHNbaSsrXSk7XG4gICAgJHJlcGxhY2VyID0gcmVwbGFjZXIgPSBhcmdzWzFdO1xuICAgIGlmICghaXNPYmplY3QocmVwbGFjZXIpICYmIGl0ID09PSB1bmRlZmluZWQgfHwgaXNTeW1ib2woaXQpKSByZXR1cm47IC8vIElFOCByZXR1cm5zIHN0cmluZyBvbiB1bmRlZmluZWRcbiAgICBpZiAoIWlzQXJyYXkocmVwbGFjZXIpKSByZXBsYWNlciA9IGZ1bmN0aW9uIChrZXksIHZhbHVlKSB7XG4gICAgICBpZiAodHlwZW9mICRyZXBsYWNlciA9PSAnZnVuY3Rpb24nKSB2YWx1ZSA9ICRyZXBsYWNlci5jYWxsKHRoaXMsIGtleSwgdmFsdWUpO1xuICAgICAgaWYgKCFpc1N5bWJvbCh2YWx1ZSkpIHJldHVybiB2YWx1ZTtcbiAgICB9O1xuICAgIGFyZ3NbMV0gPSByZXBsYWNlcjtcbiAgICByZXR1cm4gX3N0cmluZ2lmeS5hcHBseSgkSlNPTiwgYXJncyk7XG4gIH1cbn0pO1xuXG4vLyAxOS40LjMuNCBTeW1ib2wucHJvdG90eXBlW0BAdG9QcmltaXRpdmVdKGhpbnQpXG4kU3ltYm9sW1BST1RPVFlQRV1bVE9fUFJJTUlUSVZFXSB8fCByZXF1aXJlKCcuL19oaWRlJykoJFN5bWJvbFtQUk9UT1RZUEVdLCBUT19QUklNSVRJVkUsICRTeW1ib2xbUFJPVE9UWVBFXS52YWx1ZU9mKTtcbi8vIDE5LjQuMy41IFN5bWJvbC5wcm90b3R5cGVbQEB0b1N0cmluZ1RhZ11cbnNldFRvU3RyaW5nVGFnKCRTeW1ib2wsICdTeW1ib2wnKTtcbi8vIDIwLjIuMS45IE1hdGhbQEB0b1N0cmluZ1RhZ11cbnNldFRvU3RyaW5nVGFnKE1hdGgsICdNYXRoJywgdHJ1ZSk7XG4vLyAyNC4zLjMgSlNPTltAQHRvU3RyaW5nVGFnXVxuc2V0VG9TdHJpbmdUYWcoZ2xvYmFsLkpTT04sICdKU09OJywgdHJ1ZSk7XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL25vZGVfbW9kdWxlcy9fY29yZS1qc0AyLjUuM0Bjb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9lczYuc3ltYm9sLmpzXG4vLyBtb2R1bGUgaWQgPSAxMjNcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiLy8gYWxsIGVudW1lcmFibGUgb2JqZWN0IGtleXMsIGluY2x1ZGVzIHN5bWJvbHNcbnZhciBnZXRLZXlzID0gcmVxdWlyZSgnLi9fb2JqZWN0LWtleXMnKTtcbnZhciBnT1BTID0gcmVxdWlyZSgnLi9fb2JqZWN0LWdvcHMnKTtcbnZhciBwSUUgPSByZXF1aXJlKCcuL19vYmplY3QtcGllJyk7XG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChpdCkge1xuICB2YXIgcmVzdWx0ID0gZ2V0S2V5cyhpdCk7XG4gIHZhciBnZXRTeW1ib2xzID0gZ09QUy5mO1xuICBpZiAoZ2V0U3ltYm9scykge1xuICAgIHZhciBzeW1ib2xzID0gZ2V0U3ltYm9scyhpdCk7XG4gICAgdmFyIGlzRW51bSA9IHBJRS5mO1xuICAgIHZhciBpID0gMDtcbiAgICB2YXIga2V5O1xuICAgIHdoaWxlIChzeW1ib2xzLmxlbmd0aCA+IGkpIGlmIChpc0VudW0uY2FsbChpdCwga2V5ID0gc3ltYm9sc1tpKytdKSkgcmVzdWx0LnB1c2goa2V5KTtcbiAgfSByZXR1cm4gcmVzdWx0O1xufTtcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vbm9kZV9tb2R1bGVzL19jb3JlLWpzQDIuNS4zQGNvcmUtanMvbGlicmFyeS9tb2R1bGVzL19lbnVtLWtleXMuanNcbi8vIG1vZHVsZSBpZCA9IDEyNFxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCIvLyBmYWxsYmFjayBmb3IgSUUxMSBidWdneSBPYmplY3QuZ2V0T3duUHJvcGVydHlOYW1lcyB3aXRoIGlmcmFtZSBhbmQgd2luZG93XG52YXIgdG9JT2JqZWN0ID0gcmVxdWlyZSgnLi9fdG8taW9iamVjdCcpO1xudmFyIGdPUE4gPSByZXF1aXJlKCcuL19vYmplY3QtZ29wbicpLmY7XG52YXIgdG9TdHJpbmcgPSB7fS50b1N0cmluZztcblxudmFyIHdpbmRvd05hbWVzID0gdHlwZW9mIHdpbmRvdyA9PSAnb2JqZWN0JyAmJiB3aW5kb3cgJiYgT2JqZWN0LmdldE93blByb3BlcnR5TmFtZXNcbiAgPyBPYmplY3QuZ2V0T3duUHJvcGVydHlOYW1lcyh3aW5kb3cpIDogW107XG5cbnZhciBnZXRXaW5kb3dOYW1lcyA9IGZ1bmN0aW9uIChpdCkge1xuICB0cnkge1xuICAgIHJldHVybiBnT1BOKGl0KTtcbiAgfSBjYXRjaCAoZSkge1xuICAgIHJldHVybiB3aW5kb3dOYW1lcy5zbGljZSgpO1xuICB9XG59O1xuXG5tb2R1bGUuZXhwb3J0cy5mID0gZnVuY3Rpb24gZ2V0T3duUHJvcGVydHlOYW1lcyhpdCkge1xuICByZXR1cm4gd2luZG93TmFtZXMgJiYgdG9TdHJpbmcuY2FsbChpdCkgPT0gJ1tvYmplY3QgV2luZG93XScgPyBnZXRXaW5kb3dOYW1lcyhpdCkgOiBnT1BOKHRvSU9iamVjdChpdCkpO1xufTtcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vbm9kZV9tb2R1bGVzL19jb3JlLWpzQDIuNS4zQGNvcmUtanMvbGlicmFyeS9tb2R1bGVzL19vYmplY3QtZ29wbi1leHQuanNcbi8vIG1vZHVsZSBpZCA9IDEyNVxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJyZXF1aXJlKCcuL193a3MtZGVmaW5lJykoJ2FzeW5jSXRlcmF0b3InKTtcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vbm9kZV9tb2R1bGVzL19jb3JlLWpzQDIuNS4zQGNvcmUtanMvbGlicmFyeS9tb2R1bGVzL2VzNy5zeW1ib2wuYXN5bmMtaXRlcmF0b3IuanNcbi8vIG1vZHVsZSBpZCA9IDEyNlxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJyZXF1aXJlKCcuL193a3MtZGVmaW5lJykoJ29ic2VydmFibGUnKTtcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vbm9kZV9tb2R1bGVzL19jb3JlLWpzQDIuNS4zQGNvcmUtanMvbGlicmFyeS9tb2R1bGVzL2VzNy5zeW1ib2wub2JzZXJ2YWJsZS5qc1xuLy8gbW9kdWxlIGlkID0gMTI3XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsImV4cG9ydCBkZWZhdWx0IGNsYXNzIEJvdW5kaW5nQm94IHtcclxuICAgIGNvbnN0cnVjdG9yKHBvcywgc2l6ZSwgb2Zmc2V0KSB7XHJcbiAgICAgICAgdGhpcy5wb3MgPSBwb3M7XHJcbiAgICAgICAgdGhpcy5zaXplID0gc2l6ZTtcclxuICAgICAgICB0aGlzLm9mZnNldCA9IG9mZnNldDtcclxuICAgIH1cclxuXHJcbiAgICBvdmVybGFwcyhib3gpIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5ib3R0b20gPiBib3gudG9wXHJcbiAgICAgICAgICAgICAgICAgICAgICYmIHRoaXMudG9wIDwgYm94LmJvdHRvbVxyXG4gICAgICAgICAgICAgICAgICAgICAmJiB0aGlzLmxlZnQgPCBib3gucmlnaHRcclxuICAgICAgICAgICAgICAgICAgICAgJiYgdGhpcy5yaWdodCA+IGJveC5sZWZ0XHJcbiAgICB9XHJcblxyXG4gICAgZ2V0IGJvdHRvbSgpIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5wb3MueSArIHRoaXMuc2l6ZS55ICsgdGhpcy5vZmZzZXQueTtcclxuICAgIH1cclxuXHJcbiAgICBzZXQgYm90dG9tKHkpIHtcclxuICAgICAgICB0aGlzLnBvcy55ID0geSAtICh0aGlzLnNpemUueSArIHRoaXMub2Zmc2V0LnkpO1xyXG4gICAgfVxyXG5cclxuICAgIGdldCB0b3AoKSB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMucG9zLnkgKyB0aGlzLm9mZnNldC55O1xyXG4gICAgfVxyXG5cclxuICAgIHNldCB0b3AoeSkge1xyXG4gICAgICAgIHRoaXMucG9zLnkgPSB5IC0gdGhpcy5vZmZzZXQueTtcclxuICAgIH1cclxuXHJcbiAgICBnZXQgbGVmdCgpIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5wb3MueCArIHRoaXMub2Zmc2V0Lng7XHJcbiAgICB9XHJcblxyXG4gICAgc2V0IGxlZnQoeCkge1xyXG4gICAgICAgIHRoaXMucG9zLnggPSB4IC0gdGhpcy5vZmZzZXQueDtcclxuICAgIH1cclxuXHJcbiAgICBnZXQgcmlnaHQoKSB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMucG9zLnggKyB0aGlzLnNpemUueCArIHRoaXMub2Zmc2V0Lng7XHJcbiAgICB9XHJcblxyXG4gICAgc2V0IHJpZ2h0KHgpIHtcclxuICAgICAgICB0aGlzLnBvcy54ID0geCAtICh0aGlzLnNpemUueCArIHRoaXMub2Zmc2V0LngpO1xyXG4gICAgfVxyXG59XHJcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3B1YmxpYy9qcy9Cb3VuZGluZ0JveC5qcyIsImltcG9ydCB7VHJhaXR9IGZyb20gJy4uL0VudGl0eS5qcyc7XHJcbmltcG9ydCB7VmVjMn0gZnJvbSAnLi4vbWF0aC5qcyc7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBQbGF5ZXJDb250cm9sbGVyIGV4dGVuZHMgVHJhaXQge1xyXG4gICAgY29uc3RydWN0b3IoKSB7XHJcbiAgICAgICAgc3VwZXIoJ3BsYXllckNvbnRyb2xsZXInKTtcclxuICAgICAgICB0aGlzLnBsYXllciA9IG51bGw7XHJcbiAgICAgICAgdGhpcy5jaGVja1BvaW50ID0gbmV3IFZlYzIoMi41KjE2LDEyKjE2KTtcclxuICAgICAgICB0aGlzLnRpbWUgPSA0MDA7XHJcbiAgICAgICAgdGhpcy5zY29yZSA9IDA7XHJcbiAgICB9XHJcblxyXG4gICAgc2V0UGxheWVyKGVudGl0eSkge1xyXG4gICAgICAgIHRoaXMucGxheWVyID0gZW50aXR5O1xyXG4gICAgICAgIHRoaXMucGxheWVyLnN0b21lci5vblN0b21wID0gKCkgPT4ge1xyXG4gICAgICAgICAgICB0aGlzLnNjb3JlICs9IDEwMDtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgdXBkYXRlKGVudGl0eSwgZGVsdGFUaW1lLCBsZXZlbCkge1xyXG4gICAgICAgIGlmICghbGV2ZWwuZW50aXRpZXMuaGFzKHRoaXMucGxheWVyKSkge1xyXG4gICAgICAgICAgICB0aGlzLnBsYXllci5raWxsYWJsZS5yZXZpdmUoKTtcclxuICAgICAgICAgICAgdGhpcy5wbGF5ZXIucG9zLnNldCh0aGlzLmNoZWNrUG9pbnQueCAsdGhpcy5jaGVja1BvaW50LnkpO1xyXG4gICAgICAgICAgICBsZXZlbC5lbnRpdGllcy5hZGQodGhpcy5wbGF5ZXIpO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIHRoaXMudGltZSAtPSBkZWx0YVRpbWUgKiAyO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxufVxyXG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9wdWJsaWMvanMvdHJhaXRzL1BsYXllckNvbnRyb2xsZXIuanMiLCJyZXF1aXJlKCcuLi8uLi9tb2R1bGVzL2VzNi5vYmplY3QuZ2V0LXByb3RvdHlwZS1vZicpO1xubW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKCcuLi8uLi9tb2R1bGVzL19jb3JlJykuT2JqZWN0LmdldFByb3RvdHlwZU9mO1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9ub2RlX21vZHVsZXMvX2NvcmUtanNAMi41LjNAY29yZS1qcy9saWJyYXJ5L2ZuL29iamVjdC9nZXQtcHJvdG90eXBlLW9mLmpzXG4vLyBtb2R1bGUgaWQgPSAxMzBcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiLy8gMTkuMS4yLjkgT2JqZWN0LmdldFByb3RvdHlwZU9mKE8pXG52YXIgdG9PYmplY3QgPSByZXF1aXJlKCcuL190by1vYmplY3QnKTtcbnZhciAkZ2V0UHJvdG90eXBlT2YgPSByZXF1aXJlKCcuL19vYmplY3QtZ3BvJyk7XG5cbnJlcXVpcmUoJy4vX29iamVjdC1zYXAnKSgnZ2V0UHJvdG90eXBlT2YnLCBmdW5jdGlvbiAoKSB7XG4gIHJldHVybiBmdW5jdGlvbiBnZXRQcm90b3R5cGVPZihpdCkge1xuICAgIHJldHVybiAkZ2V0UHJvdG90eXBlT2YodG9PYmplY3QoaXQpKTtcbiAgfTtcbn0pO1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9ub2RlX21vZHVsZXMvX2NvcmUtanNAMi41LjNAY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvZXM2Lm9iamVjdC5nZXQtcHJvdG90eXBlLW9mLmpzXG4vLyBtb2R1bGUgaWQgPSAxMzFcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiLy8gbW9zdCBPYmplY3QgbWV0aG9kcyBieSBFUzYgc2hvdWxkIGFjY2VwdCBwcmltaXRpdmVzXG52YXIgJGV4cG9ydCA9IHJlcXVpcmUoJy4vX2V4cG9ydCcpO1xudmFyIGNvcmUgPSByZXF1aXJlKCcuL19jb3JlJyk7XG52YXIgZmFpbHMgPSByZXF1aXJlKCcuL19mYWlscycpO1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoS0VZLCBleGVjKSB7XG4gIHZhciBmbiA9IChjb3JlLk9iamVjdCB8fCB7fSlbS0VZXSB8fCBPYmplY3RbS0VZXTtcbiAgdmFyIGV4cCA9IHt9O1xuICBleHBbS0VZXSA9IGV4ZWMoZm4pO1xuICAkZXhwb3J0KCRleHBvcnQuUyArICRleHBvcnQuRiAqIGZhaWxzKGZ1bmN0aW9uICgpIHsgZm4oMSk7IH0pLCAnT2JqZWN0JywgZXhwKTtcbn07XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL25vZGVfbW9kdWxlcy9fY29yZS1qc0AyLjUuM0Bjb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9fb2JqZWN0LXNhcC5qc1xuLy8gbW9kdWxlIGlkID0gMTMyXG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIm1vZHVsZS5leHBvcnRzID0geyBcImRlZmF1bHRcIjogcmVxdWlyZShcImNvcmUtanMvbGlicmFyeS9mbi9zeW1ib2wvaXRlcmF0b3JcIiksIF9fZXNNb2R1bGU6IHRydWUgfTtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL25vZGVfbW9kdWxlcy9fYmFiZWwtcnVudGltZUA2LjI2LjBAYmFiZWwtcnVudGltZS9jb3JlLWpzL3N5bWJvbC9pdGVyYXRvci5qc1xuLy8gbW9kdWxlIGlkID0gMTMzXG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsInJlcXVpcmUoJy4uLy4uL21vZHVsZXMvZXM2LnN0cmluZy5pdGVyYXRvcicpO1xucmVxdWlyZSgnLi4vLi4vbW9kdWxlcy93ZWIuZG9tLml0ZXJhYmxlJyk7XG5tb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoJy4uLy4uL21vZHVsZXMvX3drcy1leHQnKS5mKCdpdGVyYXRvcicpO1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9ub2RlX21vZHVsZXMvX2NvcmUtanNAMi41LjNAY29yZS1qcy9saWJyYXJ5L2ZuL3N5bWJvbC9pdGVyYXRvci5qc1xuLy8gbW9kdWxlIGlkID0gMTM0XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIm1vZHVsZS5leHBvcnRzID0geyBcImRlZmF1bHRcIjogcmVxdWlyZShcImNvcmUtanMvbGlicmFyeS9mbi9vYmplY3Qvc2V0LXByb3RvdHlwZS1vZlwiKSwgX19lc01vZHVsZTogdHJ1ZSB9O1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vbm9kZV9tb2R1bGVzL19iYWJlbC1ydW50aW1lQDYuMjYuMEBiYWJlbC1ydW50aW1lL2NvcmUtanMvb2JqZWN0L3NldC1wcm90b3R5cGUtb2YuanNcbi8vIG1vZHVsZSBpZCA9IDEzNVxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJyZXF1aXJlKCcuLi8uLi9tb2R1bGVzL2VzNi5vYmplY3Quc2V0LXByb3RvdHlwZS1vZicpO1xubW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKCcuLi8uLi9tb2R1bGVzL19jb3JlJykuT2JqZWN0LnNldFByb3RvdHlwZU9mO1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9ub2RlX21vZHVsZXMvX2NvcmUtanNAMi41LjNAY29yZS1qcy9saWJyYXJ5L2ZuL29iamVjdC9zZXQtcHJvdG90eXBlLW9mLmpzXG4vLyBtb2R1bGUgaWQgPSAxMzZcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiLy8gMTkuMS4zLjE5IE9iamVjdC5zZXRQcm90b3R5cGVPZihPLCBwcm90bylcbnZhciAkZXhwb3J0ID0gcmVxdWlyZSgnLi9fZXhwb3J0Jyk7XG4kZXhwb3J0KCRleHBvcnQuUywgJ09iamVjdCcsIHsgc2V0UHJvdG90eXBlT2Y6IHJlcXVpcmUoJy4vX3NldC1wcm90bycpLnNldCB9KTtcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vbm9kZV9tb2R1bGVzL19jb3JlLWpzQDIuNS4zQGNvcmUtanMvbGlicmFyeS9tb2R1bGVzL2VzNi5vYmplY3Quc2V0LXByb3RvdHlwZS1vZi5qc1xuLy8gbW9kdWxlIGlkID0gMTM3XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIi8vIFdvcmtzIHdpdGggX19wcm90b19fIG9ubHkuIE9sZCB2OCBjYW4ndCB3b3JrIHdpdGggbnVsbCBwcm90byBvYmplY3RzLlxuLyogZXNsaW50LWRpc2FibGUgbm8tcHJvdG8gKi9cbnZhciBpc09iamVjdCA9IHJlcXVpcmUoJy4vX2lzLW9iamVjdCcpO1xudmFyIGFuT2JqZWN0ID0gcmVxdWlyZSgnLi9fYW4tb2JqZWN0Jyk7XG52YXIgY2hlY2sgPSBmdW5jdGlvbiAoTywgcHJvdG8pIHtcbiAgYW5PYmplY3QoTyk7XG4gIGlmICghaXNPYmplY3QocHJvdG8pICYmIHByb3RvICE9PSBudWxsKSB0aHJvdyBUeXBlRXJyb3IocHJvdG8gKyBcIjogY2FuJ3Qgc2V0IGFzIHByb3RvdHlwZSFcIik7XG59O1xubW9kdWxlLmV4cG9ydHMgPSB7XG4gIHNldDogT2JqZWN0LnNldFByb3RvdHlwZU9mIHx8ICgnX19wcm90b19fJyBpbiB7fSA/IC8vIGVzbGludC1kaXNhYmxlLWxpbmVcbiAgICBmdW5jdGlvbiAodGVzdCwgYnVnZ3ksIHNldCkge1xuICAgICAgdHJ5IHtcbiAgICAgICAgc2V0ID0gcmVxdWlyZSgnLi9fY3R4JykoRnVuY3Rpb24uY2FsbCwgcmVxdWlyZSgnLi9fb2JqZWN0LWdvcGQnKS5mKE9iamVjdC5wcm90b3R5cGUsICdfX3Byb3RvX18nKS5zZXQsIDIpO1xuICAgICAgICBzZXQodGVzdCwgW10pO1xuICAgICAgICBidWdneSA9ICEodGVzdCBpbnN0YW5jZW9mIEFycmF5KTtcbiAgICAgIH0gY2F0Y2ggKGUpIHsgYnVnZ3kgPSB0cnVlOyB9XG4gICAgICByZXR1cm4gZnVuY3Rpb24gc2V0UHJvdG90eXBlT2YoTywgcHJvdG8pIHtcbiAgICAgICAgY2hlY2soTywgcHJvdG8pO1xuICAgICAgICBpZiAoYnVnZ3kpIE8uX19wcm90b19fID0gcHJvdG87XG4gICAgICAgIGVsc2Ugc2V0KE8sIHByb3RvKTtcbiAgICAgICAgcmV0dXJuIE87XG4gICAgICB9O1xuICAgIH0oe30sIGZhbHNlKSA6IHVuZGVmaW5lZCksXG4gIGNoZWNrOiBjaGVja1xufTtcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vbm9kZV9tb2R1bGVzL19jb3JlLWpzQDIuNS4zQGNvcmUtanMvbGlicmFyeS9tb2R1bGVzL19zZXQtcHJvdG8uanNcbi8vIG1vZHVsZSBpZCA9IDEzOFxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJtb2R1bGUuZXhwb3J0cyA9IHsgXCJkZWZhdWx0XCI6IHJlcXVpcmUoXCJjb3JlLWpzL2xpYnJhcnkvZm4vb2JqZWN0L2NyZWF0ZVwiKSwgX19lc01vZHVsZTogdHJ1ZSB9O1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vbm9kZV9tb2R1bGVzL19iYWJlbC1ydW50aW1lQDYuMjYuMEBiYWJlbC1ydW50aW1lL2NvcmUtanMvb2JqZWN0L2NyZWF0ZS5qc1xuLy8gbW9kdWxlIGlkID0gMTM5XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsInJlcXVpcmUoJy4uLy4uL21vZHVsZXMvZXM2Lm9iamVjdC5jcmVhdGUnKTtcbnZhciAkT2JqZWN0ID0gcmVxdWlyZSgnLi4vLi4vbW9kdWxlcy9fY29yZScpLk9iamVjdDtcbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gY3JlYXRlKFAsIEQpIHtcbiAgcmV0dXJuICRPYmplY3QuY3JlYXRlKFAsIEQpO1xufTtcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vbm9kZV9tb2R1bGVzL19jb3JlLWpzQDIuNS4zQGNvcmUtanMvbGlicmFyeS9mbi9vYmplY3QvY3JlYXRlLmpzXG4vLyBtb2R1bGUgaWQgPSAxNDBcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwidmFyICRleHBvcnQgPSByZXF1aXJlKCcuL19leHBvcnQnKTtcbi8vIDE5LjEuMi4yIC8gMTUuMi4zLjUgT2JqZWN0LmNyZWF0ZShPIFssIFByb3BlcnRpZXNdKVxuJGV4cG9ydCgkZXhwb3J0LlMsICdPYmplY3QnLCB7IGNyZWF0ZTogcmVxdWlyZSgnLi9fb2JqZWN0LWNyZWF0ZScpIH0pO1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9ub2RlX21vZHVsZXMvX2NvcmUtanNAMi41LjNAY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvZXM2Lm9iamVjdC5jcmVhdGUuanNcbi8vIG1vZHVsZSBpZCA9IDE0MVxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJpbXBvcnQge01hdHJpeH0gZnJvbSAnLi4vbWF0aC5qcydcclxuaW1wb3J0IExldmVsIGZyb20gJy4uL0xldmVsLmpzJ1xyXG5pbXBvcnQge2xvYWRKU09OLCBsb2FkU3ByaXRlU2hlZXR9IGZyb20gJy4uL2xvYWRlci5qcydcclxuaW1wb3J0IHtjcmVhdGVTcHJpdGVMYXllcn0gZnJvbSAnLi4vbGF5ZXJzL3Nwcml0ZXMuanMnXHJcbmltcG9ydCB7Y3JlYXRlQmFja2dyb3VuZExheWVyfSBmcm9tICcuLi9sYXllcnMvYmFja2dyb3VuZC5qcydcclxuXHJcbmZ1bmN0aW9uIHNldHVwTGV2ZWwobGV2ZWxTcGVjLCBsZXZlbCkge1xyXG4gICAgY29uc3QgbWVyZ2VkQ29sbGlzaW9uR3JpZCA9IGxldmVsU3BlYy5sYXllcnMucmVkdWNlKChtZXJnZWRUaWxlcywgbGF5ZXJTcGVjKSA9PiB7XHJcbiAgICAgICAgcmV0dXJuIG1lcmdlZFRpbGVzLmNvbmNhdChsYXllclNwZWMudGlsZXMpO1xyXG4gICAgfSwgW10pO1xyXG5cclxuICAgIGNvbnN0IGNvbGxpc2lvbkdyaWQgPSBjcmVhdGVDb2xsaXNpb25HcmlkKG1lcmdlZENvbGxpc2lvbkdyaWQsIGxldmVsU3BlYy5wYXR0ZXJucyk7XHJcbiAgICBsZXZlbC5zZXRDb2xsaXNpb25HcmlkKGNvbGxpc2lvbkdyaWQpO1xyXG59XHJcblxyXG5mdW5jdGlvbiBzZXR1cEJhY2tncm91bmQobGV2ZWxTcGVjLCBsZXZlbCwgYmFja2dyb3VuZFNwcml0ZXMpIHtcclxuICAgIGxldmVsU3BlYy5sYXllcnMuZm9yRWFjaChsYXllciA9PiB7XHJcbiAgICAgICAgY29uc3QgYmFja2dyb3VuZEdyaWQgPSBjcmVhdGVCYWNrZ3JvdW5kR3JpZChsYXllci50aWxlcywgbGV2ZWxTcGVjLnBhdHRlcm5zKTtcclxuICAgICAgICBjb25zdCBiYWNrZ3JvdW5kTGF5ZXIgPSBjcmVhdGVCYWNrZ3JvdW5kTGF5ZXIobGV2ZWwsIGJhY2tncm91bmRHcmlkLCBiYWNrZ3JvdW5kU3ByaXRlcyk7XHJcbiAgICAgICAgbGV2ZWwuY29tcC5sYXllcnMucHVzaChiYWNrZ3JvdW5kTGF5ZXIpO1xyXG4gICAgfSk7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIHJlY29yZEVudGl0aWVzKGxldmVsLCBsZXZlbFNwZWMpIHtcclxuICAgIGNvbnN0IHRpbGVTaXplID0gMTY7XHJcblxyXG4gICAgbGV2ZWwudG9CZUFkZGVkRW50aXRpZXMgPSBbXTtcclxuICAgIGxldmVsLmNoZWNrRW50aXRpZXNQb2ludHMgPSBbXTtcclxuXHJcbiAgICBsZXZlbFNwZWMuZW50aXRpZXMuZm9yRWFjaCgoe25hbWUsIHBvc2l0aW9uc30pID0+IHtcclxuICAgICAgICBwb3NpdGlvbnMuZm9yRWFjaChncmlkUG9zID0+IHtcclxuICAgICAgICAgICAgY29uc3QgaGFzaElkID0gYCR7bGV2ZWwudG9CZUFkZGVkRW50aXRpZXMubGVuZ3RofWA7XHJcbiAgICAgICAgICAgIGxldmVsLnRvQmVBZGRlZEVudGl0aWVzLnB1c2goe1xyXG4gICAgICAgICAgICAgICAgaGFzaElkLFxyXG4gICAgICAgICAgICAgICAgbmFtZSxcclxuICAgICAgICAgICAgICAgIHBvczoge1xyXG4gICAgICAgICAgICAgICAgICAgIHg6IGdyaWRQb3NbMF0gKiB0aWxlU2l6ZSxcclxuICAgICAgICAgICAgICAgICAgICB5OiBncmlkUG9zWzFdICogdGlsZVNpemVcclxuICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICBhZGRlZDogZmFsc2VcclxuICAgICAgICAgICAgfSk7XHJcblxyXG4gICAgICAgICAgICAvLyBUT0RPOiBPcHRpbWl6ZSBsb2dpY1xyXG4gICAgICAgICAgICBsZXZlbC5jaGVja0VudGl0aWVzUG9pbnRzLnB1c2goZ3JpZFBvc1swXSAqIDE2IC0gMzAxKTtcclxuICAgICAgICAgICAgbGV2ZWwuY2hlY2tFbnRpdGllc1BvaW50cy5wdXNoKGdyaWRQb3NbMF0gKiAxNiAtIDMwMCk7XHJcbiAgICAgICAgICAgIGxldmVsLmNoZWNrRW50aXRpZXNQb2ludHMucHVzaChncmlkUG9zWzBdICogMTYgLSAyOTkpO1xyXG4gICAgICAgIH0pXHJcbiAgICB9KVxyXG5cclxuICAgIGxldmVsLmVudGl0aWVzUmVjb3JkID0gSlNPTi5wYXJzZShKU09OLnN0cmluZ2lmeShsZXZlbC50b0JlQWRkZWRFbnRpdGllcykpO1xyXG59XHJcblxyXG5mdW5jdGlvbiBzZXR1cEVudGl0aWVzKGxldmVsLCBsZXZlbFNwZWMpIHtcclxuICAgIC8qVE9ETzogTWFqb3IgUGVyZm9ybWFuY2UgQm90dGxlIE5lY2tcclxuICAgICpcclxuICAgICogSW4gb3JkZXIgdG8gc29sdmUgdGhpcyBib3R0bGUtbmVjaywgSSBoYXZlIHRvIGNoYW5nZSB0aGUgbG9naWMgb2YgYWRkaW5nIGVudGl0eS5cclxuICAgICogT25seSB3aGVuIGFuIGVudGl0eSBuZWFyIHRoZSBDYW1lcmEgb3IgUGxheWVyLCB0aGVuIGl0IHdpbGwgYmUgYWRkZWQuXHJcbiAgICAqICBTbyB0aGlzIHByb2Nlc3Mgc2hvdWxkIGJlIGNoZWNrZWQgc3luY2hyb25vdXNseSB3aXRoIFRpbWVyLiovXHJcblxyXG4gICAgLy8gY29uc3QgdGlsZVNpemUgPSAxNjtcclxuICAgIC8vIGxldmVsU3BlYy5lbnRpdGllcy5mb3JFYWNoKCh7bmFtZSwgcG9zaXRpb25zfSkgPT4ge1xyXG4gICAgLy8gICAgIHBvc2l0aW9ucy5mb3JFYWNoKChbeCwgeV0pID0+IHtcclxuICAgIC8vICAgICAgICAgLy8gZGVidWdnZXJcclxuICAgIC8vICAgICAgICAgaWYgKHggPiAoY2FtZXJhLnBvcyAtICg4ICogdGlsZVNpemUpKSB8fCB4IDwgKGNhbWVyYS5wb3MgKyAoOCAqIHRpbGVTaXplKSkpIHtcclxuICAgIC8vICAgICAgICAgICAgIGNvbnN0IGNyZWF0ZUVudGl0eSA9IGVudGl0eUZhY3RvcnlbbmFtZV07XHJcbiAgICAvLyAgICAgICAgICAgICBjb25zdCBlbnRpdHkgPSBjcmVhdGVFbnRpdHkoKTtcclxuICAgIC8vICAgICAgICAgICAgIGVudGl0eS5wb3Muc2V0KHgqdGlsZVNpemUsIHkqdGlsZVNpemUpO1xyXG4gICAgLy8gICAgICAgICAgICAgbGV2ZWwuZW50aXRpZXMuYWRkKGVudGl0eSk7XHJcbiAgICAvLyAgICAgICAgIH1cclxuICAgIC8vICAgICB9KVxyXG4gICAgLy8gfSk7XHJcblxyXG4gICAgcmVjb3JkRW50aXRpZXMobGV2ZWwsIGxldmVsU3BlYyk7XHJcblxyXG4gICAgY29uc3Qgc3ByaXRlTGF5ZXIgPSBjcmVhdGVTcHJpdGVMYXllcihsZXZlbC5lbnRpdGllcyk7XHJcbiAgICBsZXZlbC5jb21wLmxheWVycy5wdXNoKHNwcml0ZUxheWVyKTtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIGNyZWF0ZUxldmVsTG9hZGVyKCkge1xyXG4gICAgcmV0dXJuIGZ1bmN0aW9uIGxvYWRMZXZlbChuYW1lKSB7XHJcbiAgICAgICAgcmV0dXJuIGxvYWRKU09OKGAuLi9hc3NldHMvbGV2ZWxzLyR7bmFtZX0uanNvbmApXHJcbiAgICAgICAgICAgIC50aGVuKGxldmVsU3BlYyA9PiBQcm9taXNlLmFsbChbXHJcbiAgICAgICAgICAgICAgICBsZXZlbFNwZWMsXHJcbiAgICAgICAgICAgICAgICBsb2FkU3ByaXRlU2hlZXQobGV2ZWxTcGVjLnNwcml0ZVNoZWV0KVxyXG4gICAgICAgICAgICBdKSlcclxuICAgICAgICAgICAgLnRoZW4oKFtsZXZlbFNwZWMsIGJhY2tncm91bmRTcHJpdGVzXSkgPT4ge1xyXG4gICAgICAgICAgICAgICAgY29uc3QgbGV2ZWwgPSBuZXcgTGV2ZWwoKTtcclxuXHJcbiAgICAgICAgICAgICAgICBzZXR1cExldmVsKGxldmVsU3BlYywgbGV2ZWwpO1xyXG4gICAgICAgICAgICAgICAgc2V0dXBCYWNrZ3JvdW5kKGxldmVsU3BlYywgbGV2ZWwsIGJhY2tncm91bmRTcHJpdGVzKTtcclxuICAgICAgICAgICAgICAgIHNldHVwRW50aXRpZXMobGV2ZWwsIGxldmVsU3BlYyk7XHJcblxyXG4gICAgICAgICAgICAgICAgcmV0dXJuIGxldmVsO1xyXG4gICAgICAgICAgICB9KVxyXG4gICAgfVxyXG59XHJcblxyXG5mdW5jdGlvbiBjcmVhdGVDb2xsaXNpb25HcmlkKHRpbGVzLCBwYXR0ZXJucykge1xyXG4gICAgY29uc3QgZ3JpZCA9IG5ldyBNYXRyaXgoKTtcclxuXHJcbiAgICBmb3IgKGNvbnN0IHt0aWxlLCB4LCB5fSBvZiBleHBhbmRUaWxlcyh0aWxlcywgcGF0dGVybnMpKSB7XHJcbiAgICAgICAgZ3JpZC5zZXQoeCwgeSwge3R5cGU6IHRpbGUudHlwZX0pXHJcbiAgICB9XHJcblxyXG4gICAgcmV0dXJuIGdyaWQ7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIGNyZWF0ZUJhY2tncm91bmRHcmlkKHRpbGVzLCBwYXR0ZXJucykge1xyXG4gICAgY29uc3QgZ3JpZCA9IG5ldyBNYXRyaXgoKTtcclxuXHJcbiAgICBmb3IgKGNvbnN0IHt0aWxlLCB4LCB5fSBvZiBleHBhbmRUaWxlcyh0aWxlcywgcGF0dGVybnMpKSB7XHJcbiAgICAgICAgZ3JpZC5zZXQoeCwgeSwge25hbWU6IHRpbGUubmFtZX0pXHJcbiAgICB9XHJcblxyXG4gICAgcmV0dXJuIGdyaWQ7XHJcbn1cclxuXHJcbi8vIEVTNiBHZW5lcmF0b3IgRnVuY3Rpb25cclxuZnVuY3Rpb24qIGV4cGFuZFNwYW4oeFN0YXJ0LCB4TGVuLCB5U3RhcnQsIHlMZW4pIHtcclxuICAgIC8vIGRlYnVnZ2VyXHJcbiAgICAvLyBjb25zdCBjb29yZHMgPSBbXTtcclxuICAgIGNvbnN0IHhFbmQgPSB4U3RhcnQgKyB4TGVuO1xyXG4gICAgY29uc3QgeUVuZCA9IHlTdGFydCArIHlMZW47XHJcbiAgICBmb3IgKGxldCB4ID0geFN0YXJ0OyB4IDwgeEVuZDsgeCsrKSB7XHJcbiAgICAgICAgZm9yIChsZXQgeSA9IHlTdGFydDsgeSA8IHlFbmQ7IHkrKykge1xyXG4gICAgICAgICAgICAvLyBjb29yZHMucHVzaCh7eCwgeX0pO1xyXG4gICAgICAgICAgICB5aWVsZCB7eCwgeX07XHJcbiAgICAgICAgICAgIC8vIGNyZWF0ZSBhIEl0ZXJhdG9yIE9iamVjdCBmb3IgdGhlIGZvbGxvd2luZyBmb3IuLi5vZlxyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICAvLyByZXR1cm4gY29vcmRzO1xyXG59XHJcblxyXG5mdW5jdGlvbiBleHBhbmRSYW5nZShyYW5nZSkge1xyXG4gICAgaWYgKHJhbmdlLmxlbmd0aCA9PT0gNCkge1xyXG4gICAgICAgIGNvbnN0IFt4U3RhcnQsIHhMZW4sIHlTdGFydCwgeUxlbl0gPSByYW5nZTtcclxuICAgICAgICByZXR1cm4gZXhwYW5kU3Bhbih4U3RhcnQsIHhMZW4sIHlTdGFydCwgeUxlbilcclxuICAgIH0gZWxzZSBpZiAocmFuZ2UubGVuZ3RoID09PSAzKSB7XHJcbiAgICAgICAgY29uc3QgW3hTdGFydCwgeExlbiwgeVN0YXJ0XSA9IHJhbmdlO1xyXG4gICAgICAgIHJldHVybiBleHBhbmRTcGFuKHhTdGFydCwgeExlbiwgeVN0YXJ0LCAxKVxyXG4gICAgfSBlbHNlIGlmIChyYW5nZS5sZW5ndGggPT09IDIpIHtcclxuICAgICAgICBjb25zdCBbeFN0YXJ0LCB5U3RhcnRdID0gcmFuZ2U7XHJcbiAgICAgICAgcmV0dXJuIGV4cGFuZFNwYW4oeFN0YXJ0LCAxLCB5U3RhcnQsIDEpXHJcbiAgICB9XHJcbn1cclxuXHJcbmZ1bmN0aW9uKiBleHBhbmRSYW5nZXMocmFuZ2VzKSB7XHJcbiAgICBmb3IgKGNvbnN0IHJhbmdlIG9mIHJhbmdlcykge1xyXG4gICAgICAgIHlpZWxkKiBleHBhbmRSYW5nZShyYW5nZSk7XHJcbiAgICB9XHJcbn1cclxuXHJcbmZ1bmN0aW9uKiBleHBhbmRUaWxlcyh0aWxlcywgcGF0dGVybnMpIHtcclxuICAgIC8vIGxldCBleHBhbmRlZFRpbGVzID0gW107XHJcblxyXG4gICAgZnVuY3Rpb24qIHdhbGtUaWxlcyh0aWxlcywgb2Zmc2V0WCwgb2Zmc2V0WSkge1xyXG4gICAgICAgIGZvciAoY29uc3QgdGlsZSBvZiB0aWxlcykge1xyXG4gICAgICAgICAgICBmb3IgKGNvbnN0IHt4LCB5fSBvZiBleHBhbmRSYW5nZXModGlsZS5yYW5nZXMpKSB7XHJcbiAgICAgICAgICAgICAgICAvKiBodHRwOi8vZXM2LnJ1YW55aWZlbmcuY29tLz9zZWFyY2g9eWllbGQmeD0wJnk9MCNkb2NzL2dlbmVyYXRvciNmb3ItLS1vZi0lRTUlQkUlQUElRTclOEUlQUZcclxuICAgICAgICAgICAgICAgICBVc2UgZm9yLi4ub2YgdG8gaXRlcmF0ZSB0aGUgSXRlcmF0b3IgT2JqZWN0IGdlbmVyYXRlZCBieSB0aGUgeWllbGQgb2YgR2VuZXJhdG9yIEZ1bmN0aW9uLiovXHJcbiAgICAgICAgICAgICAgICBjb25zdCBkZXJpdmVkWCA9IHggKyBvZmZzZXRYO1xyXG4gICAgICAgICAgICAgICAgY29uc3QgZGVyaXZlZFkgPSB5ICsgb2Zmc2V0WTtcclxuXHJcbiAgICAgICAgICAgICAgICAvLyBkZWJ1Z2dlclxyXG4gICAgICAgICAgICAgICAgaWYgKHRpbGUucGF0dGVybikge1xyXG4gICAgICAgICAgICAgICAgICAgIC8vIGNvbnNvbGUubG9nKHBhdHRlcm5zW3RpbGUucGF0dGVybl0pO1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IHRpbGVzID0gcGF0dGVybnNbdGlsZS5wYXR0ZXJuXS50aWxlcztcclxuICAgICAgICAgICAgICAgICAgICAvLyBjcmVhdGVUaWxlcyhsZXZlbCwgdGlsZXMsIHBhdHRlcm5zLCBkZXJpdmVkWCwgZGVyaXZlZFkpO1xyXG4gICAgICAgICAgICAgICAgICAgIC8qVE9ETzpGaWd1cmUgb3V0IHRoIHVzZWFnZSBvZiB5aWVsZCoqL1xyXG4gICAgICAgICAgICAgICAgICAgIHlpZWxkKiB3YWxrVGlsZXModGlsZXMsIGRlcml2ZWRYLCBkZXJpdmVkWSk7XHJcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgIHlpZWxkIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdGlsZSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgeDogZGVyaXZlZFgsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHk6IGRlcml2ZWRZXHJcbiAgICAgICAgICAgICAgICAgICAgfTtcclxuICAgICAgICAgICAgICAgICAgICAvLyBleHBhbmRlZFRpbGVzLnB1c2goe1xyXG4gICAgICAgICAgICAgICAgICAgIC8vICAgICB0aWxlLFxyXG4gICAgICAgICAgICAgICAgICAgIC8vICAgICB4OiBkZXJpdmVkWCxcclxuICAgICAgICAgICAgICAgICAgICAvLyAgICAgeTogZGVyaXZlZFlcclxuICAgICAgICAgICAgICAgICAgICAvLyB9KTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICB5aWVsZCogd2Fsa1RpbGVzKHRpbGVzLCAwLCAwKTtcclxuXHJcbiAgICAvLyByZXR1cm4gZXhwYW5kZWRUaWxlcztcclxufVxyXG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9wdWJsaWMvanMvbG9hZGVycy9sZXZlbC5qcyIsIm1vZHVsZS5leHBvcnRzID0geyBcImRlZmF1bHRcIjogcmVxdWlyZShcImNvcmUtanMvbGlicmFyeS9mbi9qc29uL3N0cmluZ2lmeVwiKSwgX19lc01vZHVsZTogdHJ1ZSB9O1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vbm9kZV9tb2R1bGVzL19iYWJlbC1ydW50aW1lQDYuMjYuMEBiYWJlbC1ydW50aW1lL2NvcmUtanMvanNvbi9zdHJpbmdpZnkuanNcbi8vIG1vZHVsZSBpZCA9IDE0M1xuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJ2YXIgY29yZSA9IHJlcXVpcmUoJy4uLy4uL21vZHVsZXMvX2NvcmUnKTtcbnZhciAkSlNPTiA9IGNvcmUuSlNPTiB8fCAoY29yZS5KU09OID0geyBzdHJpbmdpZnk6IEpTT04uc3RyaW5naWZ5IH0pO1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiBzdHJpbmdpZnkoaXQpIHsgLy8gZXNsaW50LWRpc2FibGUtbGluZSBuby11bnVzZWQtdmFyc1xuICByZXR1cm4gJEpTT04uc3RyaW5naWZ5LmFwcGx5KCRKU09OLCBhcmd1bWVudHMpO1xufTtcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vbm9kZV9tb2R1bGVzL19jb3JlLWpzQDIuNS4zQGNvcmUtanMvbGlicmFyeS9mbi9qc29uL3N0cmluZ2lmeS5qc1xuLy8gbW9kdWxlIGlkID0gMTQ0XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsImltcG9ydCBDb21wb3NpdG9yIGZyb20gJy4vY29tcG9zaXRvci5qcydcclxuaW1wb3J0IEVudGl0eUNvbGxpZGVyIGZyb20gJy4vRW50aXR5Q29sbGlkZXIuanMnXHJcbmltcG9ydCBUaWxlQ29sbGlkZXIgZnJvbSAnLi9UaWxlQ29sbGlkZXIuanMnXHJcblxyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBMZXZlbCB7XHJcbiAgICBjb25zdHJ1Y3RvcigpIHtcclxuICAgICAgICB0aGlzLmdyYXZpdHkgPSAxMDAwO1xyXG4gICAgICAgIHRoaXMuY29tcCA9IG5ldyBDb21wb3NpdG9yKCk7XHJcbiAgICAgICAgdGhpcy5lbnRpdGllcyA9IG5ldyBTZXQoKTtcclxuICAgICAgICB0aGlzLmVudGl0eUNvbGxpZGVyID0gbmV3IEVudGl0eUNvbGxpZGVyKHRoaXMuZW50aXRpZXMpO1xyXG4gICAgICAgIHRoaXMudG90YWxUaW1lID0gMDtcclxuXHJcbiAgICAgICAgdGhpcy50aWxlQ29sbGlkZXIgPSBudWxsO1xyXG4gICAgfVxyXG5cclxuICAgIHNldENvbGxpc2lvbkdyaWQobWF0cml4KSB7XHJcbiAgICAgICAgdGhpcy50aWxlQ29sbGlkZXIgPSBuZXcgVGlsZUNvbGxpZGVyKG1hdHJpeCk7XHJcbiAgICB9XHJcblxyXG4gICAgdXBkYXRlKGRlbHRhVGltZSkge1xyXG4gICAgICAgIHRoaXMuZW50aXRpZXMuZm9yRWFjaChlbnRpdHkgPT4ge1xyXG4gICAgICAgICAgICBlbnRpdHkudXBkYXRlKGRlbHRhVGltZSwgdGhpcyk7XHJcbiAgICAgICAgfSk7XHJcblxyXG4gICAgICAgIHRoaXMuZW50aXRpZXMuZm9yRWFjaChlbnRpdHkgPT4ge1xyXG4gICAgICAgICAgICB0aGlzLmVudGl0eUNvbGxpZGVyLmNoZWNrKGVudGl0eSk7XHJcbiAgICAgICAgfSk7XHJcblxyXG4gICAgICAgIC8vIFRoZSBvcmRlciBvZiBjb2xsaWRlIGFuZCBmaW5hbGl6ZSBpcyBkZXRlcm1pbmVkLCBjYW4gbm90IGJlIGNvbWJpbmVkLlxyXG4gICAgICAgIHRoaXMuZW50aXRpZXMuZm9yRWFjaChlbnRpdHkgPT4ge1xyXG4gICAgICAgICAgICBlbnRpdHkuZmluYWxpemUoKTtcclxuICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgdGhpcy50b3RhbFRpbWUgKz0gZGVsdGFUaW1lO1xyXG4gICAgfVxyXG59XHJcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3B1YmxpYy9qcy9MZXZlbC5qcyIsIm1vZHVsZS5leHBvcnRzID0geyBcImRlZmF1bHRcIjogcmVxdWlyZShcImNvcmUtanMvbGlicmFyeS9mbi9zZXRcIiksIF9fZXNNb2R1bGU6IHRydWUgfTtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL25vZGVfbW9kdWxlcy9fYmFiZWwtcnVudGltZUA2LjI2LjBAYmFiZWwtcnVudGltZS9jb3JlLWpzL3NldC5qc1xuLy8gbW9kdWxlIGlkID0gMTQ2XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsInJlcXVpcmUoJy4uL21vZHVsZXMvZXM2Lm9iamVjdC50by1zdHJpbmcnKTtcbnJlcXVpcmUoJy4uL21vZHVsZXMvZXM2LnN0cmluZy5pdGVyYXRvcicpO1xucmVxdWlyZSgnLi4vbW9kdWxlcy93ZWIuZG9tLml0ZXJhYmxlJyk7XG5yZXF1aXJlKCcuLi9tb2R1bGVzL2VzNi5zZXQnKTtcbnJlcXVpcmUoJy4uL21vZHVsZXMvZXM3LnNldC50by1qc29uJyk7XG5yZXF1aXJlKCcuLi9tb2R1bGVzL2VzNy5zZXQub2YnKTtcbnJlcXVpcmUoJy4uL21vZHVsZXMvZXM3LnNldC5mcm9tJyk7XG5tb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoJy4uL21vZHVsZXMvX2NvcmUnKS5TZXQ7XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL25vZGVfbW9kdWxlcy9fY29yZS1qc0AyLjUuM0Bjb3JlLWpzL2xpYnJhcnkvZm4vc2V0LmpzXG4vLyBtb2R1bGUgaWQgPSAxNDdcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiJ3VzZSBzdHJpY3QnO1xudmFyIHN0cm9uZyA9IHJlcXVpcmUoJy4vX2NvbGxlY3Rpb24tc3Ryb25nJyk7XG52YXIgdmFsaWRhdGUgPSByZXF1aXJlKCcuL192YWxpZGF0ZS1jb2xsZWN0aW9uJyk7XG52YXIgU0VUID0gJ1NldCc7XG5cbi8vIDIzLjIgU2V0IE9iamVjdHNcbm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZSgnLi9fY29sbGVjdGlvbicpKFNFVCwgZnVuY3Rpb24gKGdldCkge1xuICByZXR1cm4gZnVuY3Rpb24gU2V0KCkgeyByZXR1cm4gZ2V0KHRoaXMsIGFyZ3VtZW50cy5sZW5ndGggPiAwID8gYXJndW1lbnRzWzBdIDogdW5kZWZpbmVkKTsgfTtcbn0sIHtcbiAgLy8gMjMuMi4zLjEgU2V0LnByb3RvdHlwZS5hZGQodmFsdWUpXG4gIGFkZDogZnVuY3Rpb24gYWRkKHZhbHVlKSB7XG4gICAgcmV0dXJuIHN0cm9uZy5kZWYodmFsaWRhdGUodGhpcywgU0VUKSwgdmFsdWUgPSB2YWx1ZSA9PT0gMCA/IDAgOiB2YWx1ZSwgdmFsdWUpO1xuICB9XG59LCBzdHJvbmcpO1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9ub2RlX21vZHVsZXMvX2NvcmUtanNAMi41LjNAY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvZXM2LnNldC5qc1xuLy8gbW9kdWxlIGlkID0gMTQ4XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIi8vIDAgLT4gQXJyYXkjZm9yRWFjaFxuLy8gMSAtPiBBcnJheSNtYXBcbi8vIDIgLT4gQXJyYXkjZmlsdGVyXG4vLyAzIC0+IEFycmF5I3NvbWVcbi8vIDQgLT4gQXJyYXkjZXZlcnlcbi8vIDUgLT4gQXJyYXkjZmluZFxuLy8gNiAtPiBBcnJheSNmaW5kSW5kZXhcbnZhciBjdHggPSByZXF1aXJlKCcuL19jdHgnKTtcbnZhciBJT2JqZWN0ID0gcmVxdWlyZSgnLi9faW9iamVjdCcpO1xudmFyIHRvT2JqZWN0ID0gcmVxdWlyZSgnLi9fdG8tb2JqZWN0Jyk7XG52YXIgdG9MZW5ndGggPSByZXF1aXJlKCcuL190by1sZW5ndGgnKTtcbnZhciBhc2MgPSByZXF1aXJlKCcuL19hcnJheS1zcGVjaWVzLWNyZWF0ZScpO1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoVFlQRSwgJGNyZWF0ZSkge1xuICB2YXIgSVNfTUFQID0gVFlQRSA9PSAxO1xuICB2YXIgSVNfRklMVEVSID0gVFlQRSA9PSAyO1xuICB2YXIgSVNfU09NRSA9IFRZUEUgPT0gMztcbiAgdmFyIElTX0VWRVJZID0gVFlQRSA9PSA0O1xuICB2YXIgSVNfRklORF9JTkRFWCA9IFRZUEUgPT0gNjtcbiAgdmFyIE5PX0hPTEVTID0gVFlQRSA9PSA1IHx8IElTX0ZJTkRfSU5ERVg7XG4gIHZhciBjcmVhdGUgPSAkY3JlYXRlIHx8IGFzYztcbiAgcmV0dXJuIGZ1bmN0aW9uICgkdGhpcywgY2FsbGJhY2tmbiwgdGhhdCkge1xuICAgIHZhciBPID0gdG9PYmplY3QoJHRoaXMpO1xuICAgIHZhciBzZWxmID0gSU9iamVjdChPKTtcbiAgICB2YXIgZiA9IGN0eChjYWxsYmFja2ZuLCB0aGF0LCAzKTtcbiAgICB2YXIgbGVuZ3RoID0gdG9MZW5ndGgoc2VsZi5sZW5ndGgpO1xuICAgIHZhciBpbmRleCA9IDA7XG4gICAgdmFyIHJlc3VsdCA9IElTX01BUCA/IGNyZWF0ZSgkdGhpcywgbGVuZ3RoKSA6IElTX0ZJTFRFUiA/IGNyZWF0ZSgkdGhpcywgMCkgOiB1bmRlZmluZWQ7XG4gICAgdmFyIHZhbCwgcmVzO1xuICAgIGZvciAoO2xlbmd0aCA+IGluZGV4OyBpbmRleCsrKSBpZiAoTk9fSE9MRVMgfHwgaW5kZXggaW4gc2VsZikge1xuICAgICAgdmFsID0gc2VsZltpbmRleF07XG4gICAgICByZXMgPSBmKHZhbCwgaW5kZXgsIE8pO1xuICAgICAgaWYgKFRZUEUpIHtcbiAgICAgICAgaWYgKElTX01BUCkgcmVzdWx0W2luZGV4XSA9IHJlczsgICAvLyBtYXBcbiAgICAgICAgZWxzZSBpZiAocmVzKSBzd2l0Y2ggKFRZUEUpIHtcbiAgICAgICAgICBjYXNlIDM6IHJldHVybiB0cnVlOyAgICAgICAgICAgICAvLyBzb21lXG4gICAgICAgICAgY2FzZSA1OiByZXR1cm4gdmFsOyAgICAgICAgICAgICAgLy8gZmluZFxuICAgICAgICAgIGNhc2UgNjogcmV0dXJuIGluZGV4OyAgICAgICAgICAgIC8vIGZpbmRJbmRleFxuICAgICAgICAgIGNhc2UgMjogcmVzdWx0LnB1c2godmFsKTsgICAgICAgIC8vIGZpbHRlclxuICAgICAgICB9IGVsc2UgaWYgKElTX0VWRVJZKSByZXR1cm4gZmFsc2U7IC8vIGV2ZXJ5XG4gICAgICB9XG4gICAgfVxuICAgIHJldHVybiBJU19GSU5EX0lOREVYID8gLTEgOiBJU19TT01FIHx8IElTX0VWRVJZID8gSVNfRVZFUlkgOiByZXN1bHQ7XG4gIH07XG59O1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9ub2RlX21vZHVsZXMvX2NvcmUtanNAMi41LjNAY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX2FycmF5LW1ldGhvZHMuanNcbi8vIG1vZHVsZSBpZCA9IDE0OVxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCIvLyA5LjQuMi4zIEFycmF5U3BlY2llc0NyZWF0ZShvcmlnaW5hbEFycmF5LCBsZW5ndGgpXG52YXIgc3BlY2llc0NvbnN0cnVjdG9yID0gcmVxdWlyZSgnLi9fYXJyYXktc3BlY2llcy1jb25zdHJ1Y3RvcicpO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChvcmlnaW5hbCwgbGVuZ3RoKSB7XG4gIHJldHVybiBuZXcgKHNwZWNpZXNDb25zdHJ1Y3RvcihvcmlnaW5hbCkpKGxlbmd0aCk7XG59O1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9ub2RlX21vZHVsZXMvX2NvcmUtanNAMi41LjNAY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX2FycmF5LXNwZWNpZXMtY3JlYXRlLmpzXG4vLyBtb2R1bGUgaWQgPSAxNTBcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwidmFyIGlzT2JqZWN0ID0gcmVxdWlyZSgnLi9faXMtb2JqZWN0Jyk7XG52YXIgaXNBcnJheSA9IHJlcXVpcmUoJy4vX2lzLWFycmF5Jyk7XG52YXIgU1BFQ0lFUyA9IHJlcXVpcmUoJy4vX3drcycpKCdzcGVjaWVzJyk7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKG9yaWdpbmFsKSB7XG4gIHZhciBDO1xuICBpZiAoaXNBcnJheShvcmlnaW5hbCkpIHtcbiAgICBDID0gb3JpZ2luYWwuY29uc3RydWN0b3I7XG4gICAgLy8gY3Jvc3MtcmVhbG0gZmFsbGJhY2tcbiAgICBpZiAodHlwZW9mIEMgPT0gJ2Z1bmN0aW9uJyAmJiAoQyA9PT0gQXJyYXkgfHwgaXNBcnJheShDLnByb3RvdHlwZSkpKSBDID0gdW5kZWZpbmVkO1xuICAgIGlmIChpc09iamVjdChDKSkge1xuICAgICAgQyA9IENbU1BFQ0lFU107XG4gICAgICBpZiAoQyA9PT0gbnVsbCkgQyA9IHVuZGVmaW5lZDtcbiAgICB9XG4gIH0gcmV0dXJuIEMgPT09IHVuZGVmaW5lZCA/IEFycmF5IDogQztcbn07XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL25vZGVfbW9kdWxlcy9fY29yZS1qc0AyLjUuM0Bjb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9fYXJyYXktc3BlY2llcy1jb25zdHJ1Y3Rvci5qc1xuLy8gbW9kdWxlIGlkID0gMTUxXG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIi8vIGh0dHBzOi8vZ2l0aHViLmNvbS9EYXZpZEJydWFudC9NYXAtU2V0LnByb3RvdHlwZS50b0pTT05cbnZhciAkZXhwb3J0ID0gcmVxdWlyZSgnLi9fZXhwb3J0Jyk7XG5cbiRleHBvcnQoJGV4cG9ydC5QICsgJGV4cG9ydC5SLCAnU2V0JywgeyB0b0pTT046IHJlcXVpcmUoJy4vX2NvbGxlY3Rpb24tdG8tanNvbicpKCdTZXQnKSB9KTtcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vbm9kZV9tb2R1bGVzL19jb3JlLWpzQDIuNS4zQGNvcmUtanMvbGlicmFyeS9tb2R1bGVzL2VzNy5zZXQudG8tanNvbi5qc1xuLy8gbW9kdWxlIGlkID0gMTUyXG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsInZhciBmb3JPZiA9IHJlcXVpcmUoJy4vX2Zvci1vZicpO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChpdGVyLCBJVEVSQVRPUikge1xuICB2YXIgcmVzdWx0ID0gW107XG4gIGZvck9mKGl0ZXIsIGZhbHNlLCByZXN1bHQucHVzaCwgcmVzdWx0LCBJVEVSQVRPUik7XG4gIHJldHVybiByZXN1bHQ7XG59O1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9ub2RlX21vZHVsZXMvX2NvcmUtanNAMi41LjNAY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX2FycmF5LWZyb20taXRlcmFibGUuanNcbi8vIG1vZHVsZSBpZCA9IDE1M1xuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCIvLyBodHRwczovL3RjMzkuZ2l0aHViLmlvL3Byb3Bvc2FsLXNldG1hcC1vZmZyb20vI3NlYy1zZXQub2ZcbnJlcXVpcmUoJy4vX3NldC1jb2xsZWN0aW9uLW9mJykoJ1NldCcpO1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9ub2RlX21vZHVsZXMvX2NvcmUtanNAMi41LjNAY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvZXM3LnNldC5vZi5qc1xuLy8gbW9kdWxlIGlkID0gMTU0XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIi8vIGh0dHBzOi8vdGMzOS5naXRodWIuaW8vcHJvcG9zYWwtc2V0bWFwLW9mZnJvbS8jc2VjLXNldC5mcm9tXG5yZXF1aXJlKCcuL19zZXQtY29sbGVjdGlvbi1mcm9tJykoJ1NldCcpO1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9ub2RlX21vZHVsZXMvX2NvcmUtanNAMi41LjNAY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvZXM3LnNldC5mcm9tLmpzXG4vLyBtb2R1bGUgaWQgPSAxNTVcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiZXhwb3J0IGRlZmF1bHQgY2xhc3MgQ29tcG9zaXRvciB7XHJcbiAgICBjb25zdHJ1Y3RvcigpIHtcclxuICAgICAgICB0aGlzLmxheWVycyA9IFtdO1xyXG4gICAgfVxyXG5cclxuICAgIGRyYXcoY29udGV4dCwgY2FtZXJhKSB7XHJcbiAgICAgICAgdGhpcy5sYXllcnMuZm9yRWFjaChsYXllciA9PiB7XHJcbiAgICAgICAgICAgIGxheWVyKGNvbnRleHQsIGNhbWVyYSk7XHJcbiAgICAgICAgfSlcclxuICAgIH1cclxufVxyXG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9wdWJsaWMvanMvY29tcG9zaXRvci5qcyIsIlxyXG5cclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgRW50aXR5Q29sbGlkZXIge1xyXG4gICAgY29uc3RydWN0b3IoZW50aXRpZXMpIHtcclxuICAgICAgICB0aGlzLmVudGl0aWVzID0gZW50aXRpZXM7XHJcbiAgICB9XHJcblxyXG4gICAgY2hlY2soc3ViamVjdCkge1xyXG4gICAgICAgIHRoaXMuZW50aXRpZXMuZm9yRWFjaChjYW5kaWRhdGUgPT4ge1xyXG4gICAgICAgICAgICBpZiAoc3ViamVjdCA9PT0gY2FuZGlkYXRlKSB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIGlmIChzdWJqZWN0LmJvdW5kcy5vdmVybGFwcyhjYW5kaWRhdGUuYm91bmRzKSkge1xyXG4gICAgICAgICAgICAgIHN1YmplY3QuY29sbGlkZXMoY2FuZGlkYXRlKTtcclxuICAgICAgICAgICAgICBjYW5kaWRhdGUuY29sbGlkZXMoc3ViamVjdCk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9KVxyXG4gICAgfVxyXG59XHJcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3B1YmxpYy9qcy9FbnRpdHlDb2xsaWRlci5qcyIsImltcG9ydCBUaWxlUmVzb2x2ZXIgZnJvbSAnLi9UaWxlUmVzb2x2ZXIuanMnXHJcbmltcG9ydCB7U2lkZXN9IGZyb20gJy4vRW50aXR5LmpzJ1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgVGlsZUNvbGxpZGVyIHtcclxuICAgIGNvbnN0cnVjdG9yKHRpbGVNYXRyaXgpIHtcclxuICAgICAgICB0aGlzLnRpbGUgPSBuZXcgVGlsZVJlc29sdmVyKHRpbGVNYXRyaXgpO1xyXG4gICAgfVxyXG5cclxuICAgIGNoZWNrWChlbnRpdHkpIHtcclxuICAgICAgICBsZXQgeDtcclxuICAgICAgICBpZiAoZW50aXR5LnZlbC54ID4gMCkge1xyXG4gICAgICAgICAgICAvLyBtYXJpbyBpcyBnb2luZyB0b3dhcmQgUklHSFRcclxuICAgICAgICAgICAgLy8gc28gd2UganVzdCBuZWVkIHRvIGNoZWNrIHRoZSBSSUdIVCBzaWRlIG9mIGVudGl0eVxyXG4gICAgICAgICAgICB4ID0gZW50aXR5LmJvdW5kcy5yaWdodDtcclxuICAgICAgICB9IGVsc2UgaWYgKGVudGl0eS52ZWwueCA8IDApIHtcclxuICAgICAgICAgICAgLy8gbWFyaW8gaXMgZ29pbmcgdG93YXJkIExFRlRcclxuICAgICAgICAgICAgLy8gZWxzZSB3ZSBvbmx5IG5lZWQgdG8gY2hlY2sgdGhlIExFRlQgc2lkZSBvZiBlbnRpdHlcclxuICAgICAgICAgICAgeCA9IGVudGl0eS5ib3VuZHMubGVmdDtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBjb25zdCBtYXRjaGVzID0gdGhpcy50aWxlLnNlYXJjaEJ5UmFuZ2UoXHJcbiAgICAgICAgICAgIHgsIHgsXHJcbiAgICAgICAgICAgZW50aXR5LmJvdW5kcy50b3AsIGVudGl0eS5ib3VuZHMuYm90dG9tXHJcbiAgICAgICAgKTtcclxuXHJcbiAgICAgICAgbWF0Y2hlcy5mb3JFYWNoKG1hdGNoID0+IHtcclxuICAgICAgICAgICAgLy8gVE9ETzogSW1wcm92ZSBhIGJldHRlciBsb2dpYywgbWF5YmUgbm90IGhlcmVcclxuICAgICAgICAgICAgaWYgKG1hdGNoLnRpbGUudHlwZSA9PT0gJ2RlYXRoLWJvcmRlcicpIHtcclxuICAgICAgICAgICAgICAgIGlmIChlbnRpdHkua2lsbGFibGUgIT09IHVuZGVmaW5lZCkge1xyXG4gICAgICAgICAgICAgICAgICAgIGVudGl0eS5raWxsYWJsZS5raWxsKCk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIGlmIChtYXRjaC50aWxlLnR5cGUgIT09ICdncm91bmQnKSB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIGlmIChlbnRpdHkudmVsLnggPiAwKSB7XHJcbiAgICAgICAgICAgICAgICBpZiAoZW50aXR5LmJvdW5kcy5yaWdodCA+IG1hdGNoLngxKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgZW50aXR5Lm9ic3RydWN0KFNpZGVzLkxFRlQsIG1hdGNoKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfSBlbHNlIGlmIChlbnRpdHkudmVsLnggPCAwKSB7XHJcbiAgICAgICAgICAgICAgICBpZiAoZW50aXR5LmJvdW5kcy5sZWZ0IDwgbWF0Y2gueDIpIHtcclxuICAgICAgICAgICAgICAgICAgICBlbnRpdHkub2JzdHJ1Y3QoU2lkZXMuUklHSFQsIG1hdGNoKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0pXHJcblxyXG4gICAgfVxyXG5cclxuICAgIGNoZWNrWShlbnRpdHkpIHtcclxuICAgICAgICBsZXQgeTtcclxuICAgICAgICBpZiAoZW50aXR5LnZlbC55ID4gMCkge1xyXG4gICAgICAgICAgICAvLyBtYXJpbyBpcyBnb2luZyB0b3dhcmQgQlxyXG4gICAgICAgICAgICB5ID0gZW50aXR5LmJvdW5kcy5ib3R0b207XHJcbiAgICAgICAgfSBlbHNlIGlmIChlbnRpdHkudmVsLnkgPCAwKSB7XHJcbiAgICAgICAgICAgIC8vIG1hcmlvIGlzIGdvaW5nIHRvd2FyZCBUT1BcclxuICAgICAgICAgICAgeSA9ZW50aXR5LmJvdW5kcy50b3A7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgY29uc3QgbWF0Y2hlcyA9IHRoaXMudGlsZS5zZWFyY2hCeVJhbmdlKFxyXG4gICAgICAgICAgICBlbnRpdHkuYm91bmRzLmxlZnQsIGVudGl0eS5ib3VuZHMucmlnaHQsXHJcbiAgICAgICAgICAgIC8vIHkseVxyXG4gICAgICAgICAgICAvKldoZW4gcmFuZ2UgaXMgeSx5LCB0aGUgY2hlY2sgcmFuZ2Ugd2lsbCBiZSBsZXNzZXIsIGl0IGlzIGEgdGlueSBvcHRpbWl6YXRpb24uXHJcbiAgICAgICAgICAgIEJ1dCBtYXJpbyB3aWxsIHNpbmsgaW50byB0aGUgZ3JvdW5kIHNvbWV0aW1lcyBhdCBsb3dlciBmcHMoMzApLiovXHJcbiAgICAgICAgICAgIGVudGl0eS5ib3VuZHMudG9wLCBlbnRpdHkuYm91bmRzLmJvdHRvbVxyXG4gICAgICAgICk7XHJcblxyXG4gICAgICAgIG1hdGNoZXMuZm9yRWFjaChtYXRjaCA9PiB7XHJcbiAgICAgICAgICAgIGlmIChtYXRjaC50aWxlLnR5cGUgPT09ICdkZWF0aC1ib3JkZXInKSB7XHJcbiAgICAgICAgICAgICAgICBpZiAoZW50aXR5LmtpbGxhYmxlICE9PSB1bmRlZmluZWQpIHtcclxuICAgICAgICAgICAgICAgICAgICBlbnRpdHkua2lsbGFibGUua2lsbCgpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICBpZiAobWF0Y2gudGlsZS50eXBlICE9PSAnZ3JvdW5kJykge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICBpZiAoZW50aXR5LnZlbC55ID4gMCkge1xyXG4gICAgICAgICAgICAgICAgaWYgKGVudGl0eS5ib3VuZHMuYm90dG9tID4gbWF0Y2gueTEpIHtcclxuICAgICAgICAgICAgICAgICAgICBlbnRpdHkub2JzdHJ1Y3QoU2lkZXMuQk9UVE9NLCBtYXRjaCk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH0gZWxzZSBpZiAoZW50aXR5LnZlbC55IDwgMCkge1xyXG4gICAgICAgICAgICAgICAgaWYgKGVudGl0eS5wb3MueSA8IG1hdGNoLnkyKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgZW50aXR5Lm9ic3RydWN0KFNpZGVzLlRPUCwgbWF0Y2gpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSlcclxuXHJcbiAgICB9XHJcblxyXG59XHJcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3B1YmxpYy9qcy9UaWxlQ29sbGlkZXIuanMiLCJtb2R1bGUuZXhwb3J0cyA9IHsgXCJkZWZhdWx0XCI6IHJlcXVpcmUoXCJjb3JlLWpzL2xpYnJhcnkvZm4vYXJyYXkvZnJvbVwiKSwgX19lc01vZHVsZTogdHJ1ZSB9O1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vbm9kZV9tb2R1bGVzL19iYWJlbC1ydW50aW1lQDYuMjYuMEBiYWJlbC1ydW50aW1lL2NvcmUtanMvYXJyYXkvZnJvbS5qc1xuLy8gbW9kdWxlIGlkID0gMTU5XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsInJlcXVpcmUoJy4uLy4uL21vZHVsZXMvZXM2LnN0cmluZy5pdGVyYXRvcicpO1xucmVxdWlyZSgnLi4vLi4vbW9kdWxlcy9lczYuYXJyYXkuZnJvbScpO1xubW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKCcuLi8uLi9tb2R1bGVzL19jb3JlJykuQXJyYXkuZnJvbTtcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vbm9kZV9tb2R1bGVzL19jb3JlLWpzQDIuNS4zQGNvcmUtanMvbGlicmFyeS9mbi9hcnJheS9mcm9tLmpzXG4vLyBtb2R1bGUgaWQgPSAxNjBcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiJ3VzZSBzdHJpY3QnO1xudmFyIGN0eCA9IHJlcXVpcmUoJy4vX2N0eCcpO1xudmFyICRleHBvcnQgPSByZXF1aXJlKCcuL19leHBvcnQnKTtcbnZhciB0b09iamVjdCA9IHJlcXVpcmUoJy4vX3RvLW9iamVjdCcpO1xudmFyIGNhbGwgPSByZXF1aXJlKCcuL19pdGVyLWNhbGwnKTtcbnZhciBpc0FycmF5SXRlciA9IHJlcXVpcmUoJy4vX2lzLWFycmF5LWl0ZXInKTtcbnZhciB0b0xlbmd0aCA9IHJlcXVpcmUoJy4vX3RvLWxlbmd0aCcpO1xudmFyIGNyZWF0ZVByb3BlcnR5ID0gcmVxdWlyZSgnLi9fY3JlYXRlLXByb3BlcnR5Jyk7XG52YXIgZ2V0SXRlckZuID0gcmVxdWlyZSgnLi9jb3JlLmdldC1pdGVyYXRvci1tZXRob2QnKTtcblxuJGV4cG9ydCgkZXhwb3J0LlMgKyAkZXhwb3J0LkYgKiAhcmVxdWlyZSgnLi9faXRlci1kZXRlY3QnKShmdW5jdGlvbiAoaXRlcikgeyBBcnJheS5mcm9tKGl0ZXIpOyB9KSwgJ0FycmF5Jywge1xuICAvLyAyMi4xLjIuMSBBcnJheS5mcm9tKGFycmF5TGlrZSwgbWFwZm4gPSB1bmRlZmluZWQsIHRoaXNBcmcgPSB1bmRlZmluZWQpXG4gIGZyb206IGZ1bmN0aW9uIGZyb20oYXJyYXlMaWtlIC8qICwgbWFwZm4gPSB1bmRlZmluZWQsIHRoaXNBcmcgPSB1bmRlZmluZWQgKi8pIHtcbiAgICB2YXIgTyA9IHRvT2JqZWN0KGFycmF5TGlrZSk7XG4gICAgdmFyIEMgPSB0eXBlb2YgdGhpcyA9PSAnZnVuY3Rpb24nID8gdGhpcyA6IEFycmF5O1xuICAgIHZhciBhTGVuID0gYXJndW1lbnRzLmxlbmd0aDtcbiAgICB2YXIgbWFwZm4gPSBhTGVuID4gMSA/IGFyZ3VtZW50c1sxXSA6IHVuZGVmaW5lZDtcbiAgICB2YXIgbWFwcGluZyA9IG1hcGZuICE9PSB1bmRlZmluZWQ7XG4gICAgdmFyIGluZGV4ID0gMDtcbiAgICB2YXIgaXRlckZuID0gZ2V0SXRlckZuKE8pO1xuICAgIHZhciBsZW5ndGgsIHJlc3VsdCwgc3RlcCwgaXRlcmF0b3I7XG4gICAgaWYgKG1hcHBpbmcpIG1hcGZuID0gY3R4KG1hcGZuLCBhTGVuID4gMiA/IGFyZ3VtZW50c1syXSA6IHVuZGVmaW5lZCwgMik7XG4gICAgLy8gaWYgb2JqZWN0IGlzbid0IGl0ZXJhYmxlIG9yIGl0J3MgYXJyYXkgd2l0aCBkZWZhdWx0IGl0ZXJhdG9yIC0gdXNlIHNpbXBsZSBjYXNlXG4gICAgaWYgKGl0ZXJGbiAhPSB1bmRlZmluZWQgJiYgIShDID09IEFycmF5ICYmIGlzQXJyYXlJdGVyKGl0ZXJGbikpKSB7XG4gICAgICBmb3IgKGl0ZXJhdG9yID0gaXRlckZuLmNhbGwoTyksIHJlc3VsdCA9IG5ldyBDKCk7ICEoc3RlcCA9IGl0ZXJhdG9yLm5leHQoKSkuZG9uZTsgaW5kZXgrKykge1xuICAgICAgICBjcmVhdGVQcm9wZXJ0eShyZXN1bHQsIGluZGV4LCBtYXBwaW5nID8gY2FsbChpdGVyYXRvciwgbWFwZm4sIFtzdGVwLnZhbHVlLCBpbmRleF0sIHRydWUpIDogc3RlcC52YWx1ZSk7XG4gICAgICB9XG4gICAgfSBlbHNlIHtcbiAgICAgIGxlbmd0aCA9IHRvTGVuZ3RoKE8ubGVuZ3RoKTtcbiAgICAgIGZvciAocmVzdWx0ID0gbmV3IEMobGVuZ3RoKTsgbGVuZ3RoID4gaW5kZXg7IGluZGV4KyspIHtcbiAgICAgICAgY3JlYXRlUHJvcGVydHkocmVzdWx0LCBpbmRleCwgbWFwcGluZyA/IG1hcGZuKE9baW5kZXhdLCBpbmRleCkgOiBPW2luZGV4XSk7XG4gICAgICB9XG4gICAgfVxuICAgIHJlc3VsdC5sZW5ndGggPSBpbmRleDtcbiAgICByZXR1cm4gcmVzdWx0O1xuICB9XG59KTtcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vbm9kZV9tb2R1bGVzL19jb3JlLWpzQDIuNS4zQGNvcmUtanMvbGlicmFyeS9tb2R1bGVzL2VzNi5hcnJheS5mcm9tLmpzXG4vLyBtb2R1bGUgaWQgPSAxNjFcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiJ3VzZSBzdHJpY3QnO1xudmFyICRkZWZpbmVQcm9wZXJ0eSA9IHJlcXVpcmUoJy4vX29iamVjdC1kcCcpO1xudmFyIGNyZWF0ZURlc2MgPSByZXF1aXJlKCcuL19wcm9wZXJ0eS1kZXNjJyk7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKG9iamVjdCwgaW5kZXgsIHZhbHVlKSB7XG4gIGlmIChpbmRleCBpbiBvYmplY3QpICRkZWZpbmVQcm9wZXJ0eS5mKG9iamVjdCwgaW5kZXgsIGNyZWF0ZURlc2MoMCwgdmFsdWUpKTtcbiAgZWxzZSBvYmplY3RbaW5kZXhdID0gdmFsdWU7XG59O1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9ub2RlX21vZHVsZXMvX2NvcmUtanNAMi41LjNAY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX2NyZWF0ZS1wcm9wZXJ0eS5qc1xuLy8gbW9kdWxlIGlkID0gMTYyXG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsInJlcXVpcmUoJy4uL21vZHVsZXMvZXM2Lm9iamVjdC50by1zdHJpbmcnKTtcbnJlcXVpcmUoJy4uL21vZHVsZXMvZXM2LnN0cmluZy5pdGVyYXRvcicpO1xucmVxdWlyZSgnLi4vbW9kdWxlcy93ZWIuZG9tLml0ZXJhYmxlJyk7XG5yZXF1aXJlKCcuLi9tb2R1bGVzL2VzNi5tYXAnKTtcbnJlcXVpcmUoJy4uL21vZHVsZXMvZXM3Lm1hcC50by1qc29uJyk7XG5yZXF1aXJlKCcuLi9tb2R1bGVzL2VzNy5tYXAub2YnKTtcbnJlcXVpcmUoJy4uL21vZHVsZXMvZXM3Lm1hcC5mcm9tJyk7XG5tb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoJy4uL21vZHVsZXMvX2NvcmUnKS5NYXA7XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL25vZGVfbW9kdWxlcy9fY29yZS1qc0AyLjUuM0Bjb3JlLWpzL2xpYnJhcnkvZm4vbWFwLmpzXG4vLyBtb2R1bGUgaWQgPSAxNjNcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiJ3VzZSBzdHJpY3QnO1xudmFyIHN0cm9uZyA9IHJlcXVpcmUoJy4vX2NvbGxlY3Rpb24tc3Ryb25nJyk7XG52YXIgdmFsaWRhdGUgPSByZXF1aXJlKCcuL192YWxpZGF0ZS1jb2xsZWN0aW9uJyk7XG52YXIgTUFQID0gJ01hcCc7XG5cbi8vIDIzLjEgTWFwIE9iamVjdHNcbm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZSgnLi9fY29sbGVjdGlvbicpKE1BUCwgZnVuY3Rpb24gKGdldCkge1xuICByZXR1cm4gZnVuY3Rpb24gTWFwKCkgeyByZXR1cm4gZ2V0KHRoaXMsIGFyZ3VtZW50cy5sZW5ndGggPiAwID8gYXJndW1lbnRzWzBdIDogdW5kZWZpbmVkKTsgfTtcbn0sIHtcbiAgLy8gMjMuMS4zLjYgTWFwLnByb3RvdHlwZS5nZXQoa2V5KVxuICBnZXQ6IGZ1bmN0aW9uIGdldChrZXkpIHtcbiAgICB2YXIgZW50cnkgPSBzdHJvbmcuZ2V0RW50cnkodmFsaWRhdGUodGhpcywgTUFQKSwga2V5KTtcbiAgICByZXR1cm4gZW50cnkgJiYgZW50cnkudjtcbiAgfSxcbiAgLy8gMjMuMS4zLjkgTWFwLnByb3RvdHlwZS5zZXQoa2V5LCB2YWx1ZSlcbiAgc2V0OiBmdW5jdGlvbiBzZXQoa2V5LCB2YWx1ZSkge1xuICAgIHJldHVybiBzdHJvbmcuZGVmKHZhbGlkYXRlKHRoaXMsIE1BUCksIGtleSA9PT0gMCA/IDAgOiBrZXksIHZhbHVlKTtcbiAgfVxufSwgc3Ryb25nLCB0cnVlKTtcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vbm9kZV9tb2R1bGVzL19jb3JlLWpzQDIuNS4zQGNvcmUtanMvbGlicmFyeS9tb2R1bGVzL2VzNi5tYXAuanNcbi8vIG1vZHVsZSBpZCA9IDE2NFxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCIvLyBodHRwczovL2dpdGh1Yi5jb20vRGF2aWRCcnVhbnQvTWFwLVNldC5wcm90b3R5cGUudG9KU09OXG52YXIgJGV4cG9ydCA9IHJlcXVpcmUoJy4vX2V4cG9ydCcpO1xuXG4kZXhwb3J0KCRleHBvcnQuUCArICRleHBvcnQuUiwgJ01hcCcsIHsgdG9KU09OOiByZXF1aXJlKCcuL19jb2xsZWN0aW9uLXRvLWpzb24nKSgnTWFwJykgfSk7XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL25vZGVfbW9kdWxlcy9fY29yZS1qc0AyLjUuM0Bjb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9lczcubWFwLnRvLWpzb24uanNcbi8vIG1vZHVsZSBpZCA9IDE2NVxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCIvLyBodHRwczovL3RjMzkuZ2l0aHViLmlvL3Byb3Bvc2FsLXNldG1hcC1vZmZyb20vI3NlYy1tYXAub2ZcbnJlcXVpcmUoJy4vX3NldC1jb2xsZWN0aW9uLW9mJykoJ01hcCcpO1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9ub2RlX21vZHVsZXMvX2NvcmUtanNAMi41LjNAY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvZXM3Lm1hcC5vZi5qc1xuLy8gbW9kdWxlIGlkID0gMTY2XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIi8vIGh0dHBzOi8vdGMzOS5naXRodWIuaW8vcHJvcG9zYWwtc2V0bWFwLW9mZnJvbS8jc2VjLW1hcC5mcm9tXG5yZXF1aXJlKCcuL19zZXQtY29sbGVjdGlvbi1mcm9tJykoJ01hcCcpO1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9ub2RlX21vZHVsZXMvX2NvcmUtanNAMi41LjNAY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvZXM3Lm1hcC5mcm9tLmpzXG4vLyBtb2R1bGUgaWQgPSAxNjdcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiZXhwb3J0IGZ1bmN0aW9uIGNyZWF0ZUFuaW0oZnJhbWVzLCBmcmFtZUxlbikge1xyXG4gICAgcmV0dXJuIGZ1bmN0aW9uIHJlc29sdmVGcmFtZShkaXN0YW5jZSkge1xyXG4gICAgICAgIGNvbnN0IGZyYW1lSW5kZXggPSBNYXRoLmZsb29yKGRpc3RhbmNlIC8gZnJhbWVMZW4pICUgZnJhbWVzLmxlbmd0aDtcclxuXHJcbiAgICAgICAgcmV0dXJuIGZyYW1lc1tmcmFtZUluZGV4XTtcclxuICAgIH1cclxufVxyXG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9wdWJsaWMvanMvYW5pbS5qcyIsImV4cG9ydCBmdW5jdGlvbiBjcmVhdGVTcHJpdGVMYXllcihlbnRpdGllcywgd2lkdGggPSA2NCwgaGVpZ2h0ID0gNjQpIHtcclxuICAgIGNvbnN0IHNwcml0ZUJ1ZmZlciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2NhbnZhcycpXHJcbiAgICBzcHJpdGVCdWZmZXIud2lkdGggPSB3aWR0aDtcclxuICAgIHNwcml0ZUJ1ZmZlci5oZWlnaHQgPSBoZWlnaHQ7XHJcblxyXG4gICAgY29uc3Qgc3ByaXRlQ29udGV4dCA9IHNwcml0ZUJ1ZmZlci5nZXRDb250ZXh0KCcyZCcpO1xyXG4gICAgcmV0dXJuIGZ1bmN0aW9uIGRyYXdTcHJpdGVMYXllcihjb250ZXh0LCBjYW1lcmEpIHtcclxuICAgICAgICBlbnRpdGllcy5mb3JFYWNoKGVudGl0eSA9PiB7XHJcbiAgICAgICAgICAgIHNwcml0ZUNvbnRleHQuY2xlYXJSZWN0KDAsIDAsIHdpZHRoLCBoZWlnaHQpOyAgIC8vIHNldCBiYWNrZ3JvdW5kIHRvIHRyYW5zcGFyZW50LlxyXG4gICAgICAgICAgICBlbnRpdHkuZHJhdyhzcHJpdGVDb250ZXh0KTtcclxuXHJcbiAgICAgICAgICAgIGNvbnRleHQuZHJhd0ltYWdlKFxyXG4gICAgICAgICAgICAgICAgc3ByaXRlQnVmZmVyLFxyXG4gICAgICAgICAgICAgICAgZW50aXR5LnBvcy54IC0gY2FtZXJhLnBvcy54LFxyXG4gICAgICAgICAgICAgICAgZW50aXR5LnBvcy55IC0gY2FtZXJhLnBvcy55XHJcbiAgICAgICAgICAgIClcclxuICAgICAgICB9KVxyXG4gICAgfVxyXG59XHJcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3B1YmxpYy9qcy9sYXllcnMvc3ByaXRlcy5qcyIsImltcG9ydCBUaWxlUmVzb2x2ZXIgZnJvbSAnLi4vVGlsZVJlc29sdmVyLmpzJ1xyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIGNyZWF0ZUJhY2tncm91bmRMYXllcihsZXZlbCwgdGlsZXMsIHNwcml0ZXMpIHtcclxuICAgIGNvbnN0IHJlc29sdmVyID0gbmV3IFRpbGVSZXNvbHZlcih0aWxlcyk7XHJcblxyXG4gICAgY29uc3QgYnVmZmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnY2FudmFzJyk7XHJcbiAgICBidWZmZXIud2lkdGggPSAyNTYgKyAxNjsgICAgLy8gMTYgKyAxIGNvbHVtblxyXG4gICAgYnVmZmVyLmhlaWdodCA9IDI0MDtcclxuXHJcbiAgICBjb25zdCBjb250ZXh0ID0gYnVmZmVyLmdldENvbnRleHQoJzJkJyk7XHJcblxyXG4gICAgZnVuY3Rpb24gcmVkcmF3KHN0YXJ0SW5kZXgsIGVuZEluZGV4KSB7XHJcblxyXG4gICAgICAgIGNvbnRleHQuY2xlYXJSZWN0KDAsMCxidWZmZXIud2lkdGgsYnVmZmVyLmhlaWdodCk7XHJcblxyXG4gICAgICAgIGZvciAobGV0IHggPSBzdGFydEluZGV4OyB4IDw9IGVuZEluZGV4OyB4KyspIHtcclxuICAgICAgICAgICAgY29uc3QgY29sID0gdGlsZXMuZ3JpZFt4XTtcclxuICAgICAgICAgICAgaWYgKGNvbCkge1xyXG4gICAgICAgICAgICAgICAgLy8gY29uc29sZS5sb2coeCAtIHN0YXJ0SW5kZXgpO1xyXG4gICAgICAgICAgICAgICAgLypUT0RPIENhbm5vdCBmaWd1cmUgb3V0IHRoZSBtZWFuIG9mIHggLSBzdGFydEluZGV4IGFuZCAtY2FtZXJhLnBvcy54ICUgMTYgT1BUSU1JWkFUSU9OIGluIEVQIDYqL1xyXG4gICAgICAgICAgICAgICAgY29sLmZvckVhY2goKHRpbGUsIHkpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICBpZiAoc3ByaXRlcy5hbmltYXRpb25zLmhhcyh0aWxlLm5hbWUpKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHNwcml0ZXMuZHJhd0FuaW0oXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aWxlLm5hbWUsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb250ZXh0LFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgeCAtIHN0YXJ0SW5kZXgsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB5LFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbGV2ZWwudG90YWxUaW1lKTtcclxuICAgICAgICAgICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBzcHJpdGVzLmRyYXdUaWxlKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGlsZS5uYW1lLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY29udGV4dCxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHggLSBzdGFydEluZGV4LFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgeSk7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICByZXR1cm4gZnVuY3Rpb24gZHJhd0JhY2tncm91bmRMYXllcihjb250ZXh0LCBjYW1lcmEpIHtcclxuICAgICAgICBjb25zdCBkcmF3V2lkdGggPSByZXNvbHZlci50b0luZGV4KGNhbWVyYS5zaXplLngpLFxyXG4gICAgICAgICAgICBkcmF3RnJvbSA9IHJlc29sdmVyLnRvSW5kZXgoY2FtZXJhLnBvcy54KTtcclxuICAgICAgICBjb25zdCBkcmF3RW5kID0gZHJhd0Zyb20gKyBkcmF3V2lkdGg7XHJcblxyXG4gICAgICAgIHJlZHJhdyhkcmF3RnJvbSwgZHJhd0VuZCk7XHJcblxyXG4gICAgICAgIGNvbnRleHQuZHJhd0ltYWdlKFxyXG4gICAgICAgICAgICBidWZmZXIsXHJcbiAgICAgICAgICAgIC1jYW1lcmEucG9zLnggJSAxNixcclxuICAgICAgICAgICAgLWNhbWVyYS5wb3MueSk7XHJcbiAgICB9XHJcblxyXG4gICAgLy8gLy8gSGlnaC1PcmRlciBGdW5jdGlvblxyXG4gICAgLy8gcmV0dXJuIGZ1bmN0aW9uIGRyYXdCYWNrZ3JvdW5kTGF5ZXIoY29udGV4dCwgY2FtZXJhKSB7XHJcbiAgICAvLyAgICAgY29udGV4dC5kcmF3SW1hZ2UoYnVmZmVyLCAtY2FtZXJhLnBvcy54LCAtY2FtZXJhLnBvcy55KTtcclxuICAgIC8vIH1cclxufVxyXG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9wdWJsaWMvanMvbGF5ZXJzL2JhY2tncm91bmQuanMiLCJpbXBvcnQge2xvYWRJbWFnZX0gZnJvbSAnLi4vbG9hZGVyLmpzJztcclxuaW1wb3J0IFNwcml0ZVNoZWV0IGZyb20gJy4uL1Nwcml0ZVNoZWV0LmpzJztcclxuXHJcbmNvbnN0IENIQVJTID0gJyAhXCIjJCUmXFwnKCkqKywtLi8wMTIzNDU2Nzg5Ojs8PT4/QEFCQ0RFRkdISUpLTE1OT1BRUlNUVVZXWFlaW1xcXFxdXl9gYWJjZGVmZ2hpamtsbW5vcHFyc3R1dnd4eXp7fH1+JztcclxuXHJcblxyXG5jbGFzcyBGb250IHtcclxuICAgIGNvbnN0cnVjdG9yKHNwcml0ZVNoZWV0LCBzaXplKSB7XHJcbiAgICAgICAgdGhpcy5zcHJpdGVzID0gc3ByaXRlU2hlZXQ7XHJcbiAgICAgICAgdGhpcy5zaXplID0gc2l6ZTtcclxuICAgIH1cclxuXHJcbiAgICBwcmludCh0ZXh0LCBjb250ZXh0LCB4LCB5KSB7XHJcbiAgICAgICAgWy4uLnRleHRdLmZvckVhY2goKGNoYXIsIHBvcykgPT4ge1xyXG4gICAgICAgICAgICB0aGlzLnNwcml0ZXMuZHJhdyhjaGFyLCBjb250ZXh0LCB4ICsgcG9zICogdGhpcy5zaXplLCB5KTtcclxuICAgICAgICB9KVxyXG4gICAgfVxyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gbG9hZEZvbnQoKSB7XHJcbiAgICByZXR1cm4gbG9hZEltYWdlKCcuL2Fzc2V0cy9pbWcvZm9udC5wbmcnKVxyXG4gICAgICAgIC50aGVuKGltZyA9PiB7XHJcbiAgICAgICAgICAgIGNvbnN0IGZvbnRTcHJpdGUgPSBuZXcgU3ByaXRlU2hlZXQoaW1nKTtcclxuXHJcbiAgICAgICAgICAgIGNvbnN0IHNpemUgPSA4LCByb3dMZW4gPSBpbWcud2lkdGg7XHJcbiAgICAgICAgICAgIGNvbnN0IGNvbE51bSA9IGltZy53aWR0aCAvIHNpemU7XHJcbiAgICAgICAgICAgIGZvciAobGV0IFtpbmRleCwgY2hhcl0gb2YgWy4uLkNIQVJTXS5lbnRyaWVzKCkpIHtcclxuXHJcbiAgICAgICAgICAgICAgICBjb25zdCB4ICA9IChpbmRleCAqIHNpemUpICUgcm93TGVuO1xyXG4gICAgICAgICAgICAgICAgY29uc3QgeSA9IE1hdGguZmxvb3IoaW5kZXggLyBjb2xOdW0pKnNpemU7XHJcblxyXG4gICAgICAgICAgICAgICAgZm9udFNwcml0ZS5kZWZpbmUoY2hhciwgeCwgeSwgc2l6ZSwgc2l6ZSk7XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIHJldHVybiBuZXcgRm9udChmb250U3ByaXRlLCBzaXplKTtcclxuICAgICAgICB9KVxyXG59XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vcHVibGljL2pzL2xvYWRlcnMvZm9udC5qcyIsImltcG9ydCB7bG9hZE1hcmlvfSBmcm9tICcuL2VudGl0aWVzL01hcmlvLmpzJ1xyXG5pbXBvcnQge2xvYWRHb29tYmF9IGZyb20gJy4vZW50aXRpZXMvR29vbWJhLmpzJ1xyXG5pbXBvcnQge2xvYWRLb29wYX0gZnJvbSAnLi9lbnRpdGllcy9Lb29wYS5qcydcclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBsb2FkRW50aXRpZXMoKSB7XHJcbiAgICBjb25zdCBlbnRpdGllc0ZhY3RvcnkgPSB7fTtcclxuXHJcbiAgICBmdW5jdGlvbiBhZGRBcyhuYW1lKSB7XHJcbiAgICAgICAgcmV0dXJuIGZhY3RvcnkgPT4ge2VudGl0aWVzRmFjdG9yeVtuYW1lXSA9IGZhY3Rvcnl9XHJcbiAgICB9XHJcblxyXG4gICAgcmV0dXJuIFByb21pc2UuYWxsKFtcclxuICAgICAgICBsb2FkTWFyaW8oKS50aGVuKGFkZEFzKCdtYXJpbycpKSxcclxuICAgICAgICBsb2FkR29vbWJhKCkudGhlbihhZGRBcygnZ29vbWJhJykpLFxyXG4gICAgICAgIGxvYWRLb29wYSgpLnRoZW4oYWRkQXMoJ2tvb3BhJykpLFxyXG4gICAgXSlcclxuICAgICAgICAudGhlbigoKSA9PiBlbnRpdGllc0ZhY3RvcnkpXHJcbn1cclxuXHJcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3B1YmxpYy9qcy9lbnRpdGllcy5qcyIsImltcG9ydCBFbnRpdHkgZnJvbSAnLi4vRW50aXR5LmpzJ1xyXG4vLyBpbXBvcnQgVmVsb2NpdHkgZnJvbSAnLi4vdHJhaXRzL1ZlbG9jaXR5LmpzJ1xyXG5pbXBvcnQgR28gZnJvbSAnLi4vdHJhaXRzL0dvLmpzJ1xyXG5pbXBvcnQgSnVtcCBmcm9tICcuLi90cmFpdHMvSnVtcC5qcydcclxuaW1wb3J0IFN0b21lciBmcm9tICcuLi90cmFpdHMvU3RvbWVyLmpzJ1xyXG5pbXBvcnQgS2lsbGFibGUgZnJvbSAnLi4vdHJhaXRzL0tpbGxhYmxlLmpzJ1xyXG5pbXBvcnQgU29saWQgZnJvbSAnLi4vdHJhaXRzL1NvbGlkLmpzJ1xyXG5pbXBvcnQgUGh5c2ljcyBmcm9tICcuLi90cmFpdHMvUGh5c2ljcy5qcydcclxuLy8gaW1wb3J0IFBsYXllckNvbnRyb2xsZXIgZnJvbSAnLi4vdHJhaXRzL1BsYXllckNvbnRyb2xsZXIuanMnXHJcbmltcG9ydCB7bG9hZFNwcml0ZVNoZWV0fSBmcm9tICcuLi9sb2FkZXIuanMnO1xyXG5cclxuLypOYW1lIENvbnZlbnRpb246XHJcbiogMS4gbG9hZFNvbWV0aGluZyBpcyBzeW5jaHJvbm91cywgY3JlYXRlU29tZXRoaW5nIGlzIGFzeW5jaHJvbm91cy4qL1xyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIGxvYWRNYXJpbygpIHtcclxuICAgIHJldHVybiBsb2FkU3ByaXRlU2hlZXQoJ21hcmlvJylcclxuICAgICAgICAudGhlbihjcmVhdGVNYXJpb0ZhY3RvcnkpXHJcbn1cclxuXHJcbmZ1bmN0aW9uIGNyZWF0ZU1hcmlvRmFjdG9yeShzcHJpdGUpIHtcclxuICAgIGNvbnN0IHJ1bkFuaW0gPSBzcHJpdGUuYW5pbWF0aW9ucy5nZXQoXCJydW5cIik7XHJcblxyXG4gICAgICAgIGZ1bmN0aW9uIGZyYW1lUm91dGUobWFyaW8pIHtcclxuICAgICAgICBpZiAobWFyaW8uanVtcC5mYWxsaW5nKSB7XHJcbiAgICAgICAgICAgIHJldHVybiAnanVtcCc7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBpZiAobWFyaW8uZ28uZGlzdGFuY2UgPiAwKSB7XHJcbiAgICAgICAgICAgIGlmICgobWFyaW8udmVsLnggPiAwICYmIG1hcmlvLmdvLmRpciA8IDApIHx8XHJcbiAgICAgICAgICAgICAgICAobWFyaW8udmVsLnggPCAwICYmIG1hcmlvLmdvLmRpciA+IDApKSB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gJ2JyZWFrJztcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgcmV0dXJuIHJ1bkFuaW0obWFyaW8uZ28uZGlzdGFuY2UpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgcmV0dXJuICdpZGxlJztcclxuICAgIH1cclxuXHJcbiAgICBmdW5jdGlvbiBkcmF3TWFyaW8oY29udGV4dCkge1xyXG4gICAgICAgIHNwcml0ZS5kcmF3KGZyYW1lUm91dGUodGhpcyksIGNvbnRleHQsIDAsIDAsIHRoaXMuZ28uaGVhZGluZyA8IDApO1xyXG4gICAgfVxyXG5cclxuICAgIHJldHVybiBmdW5jdGlvbiBjcmVhdGVNYXJpbygpIHtcclxuICAgICAgICBjb25zdCBtYXJpbyA9IG5ldyBFbnRpdHkoKTtcclxuICAgICAgICBtYXJpby5zaXplLnNldCgxNCwgMTYpO1xyXG5cclxuICAgICAgICBtYXJpby5hZGRUcmFpdChuZXcgUGh5c2ljcygpKTtcclxuICAgICAgICBtYXJpby5hZGRUcmFpdChuZXcgU29saWQoKSk7XHJcbiAgICAgICAgbWFyaW8uYWRkVHJhaXQobmV3IEdvKCkpO1xyXG4gICAgICAgIG1hcmlvLmFkZFRyYWl0KG5ldyBKdW1wKCkpO1xyXG4gICAgICAgIG1hcmlvLmFkZFRyYWl0KG5ldyBTdG9tZXIoKSk7XHJcbiAgICAgICAgbWFyaW8uYWRkVHJhaXQobmV3IEtpbGxhYmxlKCkpO1xyXG4gICAgICAgIC8vIG1hcmlvLmFkZFRyYWl0KG5ldyBQbGF5ZXJDb250cm9sbGVyKCkpO1xyXG5cclxuICAgICAgICBtYXJpby5raWxsYWJsZS5yZW1vdmVBZnRlciA9IDA7XHJcbiAgICAgICAgLy8gbWFyaW8ucGxheWVyQ29udHJvbGxlci5zZXRQbGF5ZXIobWFyaW8pO1xyXG5cclxuICAgICAgICBtYXJpby5kcmF3ID0gZHJhd01hcmlvO1xyXG5cclxuICAgICAgICByZXR1cm4gbWFyaW87XHJcbiAgICB9XHJcbn1cclxuXHJcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3B1YmxpYy9qcy9lbnRpdGllcy9NYXJpby5qcyIsImltcG9ydCB7VHJhaXR9IGZyb20gJy4uL0VudGl0eS5qcydcclxuXHJcbi8qZXh0ZW5kcyBrZXl3b3JkIGNhbiBiZSB1c2VkIHRvIGluaGVyaXQgYWxsIHRoZSBwcm9wZXJ0aWVzIGFuZCBtZXRob2RzLiAqL1xyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBHbyBleHRlbmRzIFRyYWl0IHtcclxuICAgIGNvbnN0cnVjdG9yKCkge1xyXG4gICAgICAgIC8qc3VwZXIga2V5d29yZCBpbiBoZXJlIG1lYW5zIHRoZSBmYXRoZXIgY2xhc3MncyBjb25zdHJ1Y3RvciBvZiB0aGlzIGNsYXNzLiAqL1xyXG4gICAgICAgIHN1cGVyKCdnbycpO1xyXG5cclxuICAgICAgICB0aGlzLmRpciA9IDA7XHJcbiAgICAgICAgdGhpcy5hY2NlbGVyYXRpb24gPSAzMDA7XHJcbiAgICAgICAgdGhpcy5kZWNlbGVyYXRpb24gPSAyMDA7XHJcbiAgICAgICAgdGhpcy5kcmFnRmFjdG9yID0gMS81MDAwO1xyXG5cclxuICAgICAgICB0aGlzLmRpc3RhbmNlID0gMDtcclxuICAgICAgICB0aGlzLmhlYWRpbmcgPSAxO1xyXG4gICAgfVxyXG5cclxuICAgIHVwZGF0ZShlbnRpdHksIGRlbHRhVGltZSkge1xyXG4gICAgICAgIGNvbnN0IGFic1ggPSBNYXRoLmFicyhlbnRpdHkudmVsLngpO1xyXG5cclxuICAgICAgICBpZiAodGhpcy5kaXIgIT09IDApIHtcclxuICAgICAgICAgICAgZW50aXR5LnZlbC54ICs9IHRoaXMuYWNjZWxlcmF0aW9uICogZGVsdGFUaW1lICogdGhpcy5kaXI7XHJcbiAgICAgICAgICAgIGlmIChlbnRpdHkuanVtcCkge1xyXG4gICAgICAgICAgICAgICAgaWYgKCFlbnRpdHkuanVtcC5mYWxsaW5nKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5oZWFkaW5nID0gdGhpcy5kaXI7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmhlYWRpbmcgPSB0aGlzLmRpcjtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0gZWxzZSBpZiAoZW50aXR5LnZlbC54ICE9PSAwKSB7XHJcbiAgICAgICAgICAgIGNvbnN0IGRlY2VsID0gTWF0aC5taW4oYWJzWCwgdGhpcy5kZWNlbGVyYXRpb24gKiBkZWx0YVRpbWUpO1xyXG4gICAgICAgICAgICBlbnRpdHkudmVsLnggKz0gZW50aXR5LnZlbC54ID4gMCA/IC1kZWNlbCA6IGRlY2VsO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIHRoaXMuZGlzdGFuY2UgPSAwO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgY29uc3QgZHJhZyA9IHRoaXMuZHJhZ0ZhY3RvciAqIGVudGl0eS52ZWwueCAqIGFic1g7XHJcbiAgICAgICAgZW50aXR5LnZlbC54IC09IGRyYWc7XHJcblxyXG4gICAgICAgIHRoaXMuZGlzdGFuY2UgKz0gYWJzWCAqIGRlbHRhVGltZTtcclxuICAgIH1cclxufVxyXG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9wdWJsaWMvanMvdHJhaXRzL0dvLmpzIiwiaW1wb3J0IHtTaWRlcywgVHJhaXR9IGZyb20gJy4uL0VudGl0eS5qcydcclxuXHJcbi8qZXh0ZW5kcyBrZXl3b3JkIGNhbiBiZSB1c2VkIHRvIGluaGVyaXQgYWxsIHRoZSBwcm9wZXJ0aWVzIGFuZCBtZXRob2RzLiAqL1xyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBKdW1wIGV4dGVuZHMgVHJhaXQge1xyXG4gICAgY29uc3RydWN0b3IoKSB7XHJcbiAgICAgICAgLypzdXBlciBrZXl3b3JkIGluIGhlcmUgbWVhbnMgdGhlIGZhdGhlciBjbGFzcydzIGNvbnN0cnVjdG9yIG9mIHRoaXMgY2xhc3MuICovXHJcbiAgICAgICAgc3VwZXIoJ2p1bXAnKTtcclxuXHJcbiAgICAgICAgdGhpcy5kdXJhdGlvbiA9IDAuMztcclxuICAgICAgICB0aGlzLnZlbG9jaXR5ID0gMTgwO1xyXG4gICAgICAgIHRoaXMuZW5nYWdlVGltZSA9IDA7IC8vIHRvdGFsIHRpbWUgYWxsb3cgdG8gIHByZXNzaW5nIGtleVxyXG4gICAgICAgIHRoaXMucmVhZHkgPSAwO1xyXG4gICAgICAgIHRoaXMuZ3JhY2VQZXJpb2QgPSAwLjE7XHJcbiAgICAgICAgdGhpcy5yZXF1ZXN0VGltZSA9IDA7XHJcbiAgICAgICAgdGhpcy5zcGVlZEJvb3N0ID0gMC4yO1xyXG4gICAgfVxyXG5cclxuICAgIGdldCBmYWxsaW5nKCkge1xyXG4gICAgICAgIHJldHVybiB0aGlzLnJlYWR5IDwgMDtcclxuICAgIH1cclxuXHJcbiAgICBzdGFydCgpIHtcclxuICAgICAgICAvLyBpZiAodGhpcy5yZWFkeSA+IDApIHtcclxuICAgICAgICAvLyAgICAgdGhpcy5lbmdhZ2VUaW1lID0gdGhpcy5kdXJhdGlvbjtcclxuICAgICAgICAvLyB9XHJcbiAgICAgICAgdGhpcy5yZXF1ZXN0VGltZSA9IHRoaXMuZ3JhY2VQZXJpb2Q7XHJcbiAgICB9XHJcblxyXG4gICAgY2FuY2VsKCkge1xyXG4gICAgICAgIHRoaXMuZW5nYWdlVGltZSA9IDA7XHJcbiAgICAgICAgdGhpcy5yZXF1ZXN0VGltZSA9IDA7XHJcbiAgICB9XHJcblxyXG4gICAgb2JzdHJ1Y3QoZW50aXR5LCBzaWRlKSB7XHJcbiAgICAgICAgaWYgKHNpZGUgPT09IFNpZGVzLkJPVFRPTSkge1xyXG4gICAgICAgICAgICB0aGlzLnJlYWR5ID0gMTtcclxuICAgICAgICB9IGVsc2UgaWYgKHNpZGUgPT09IFNpZGVzLlRPUCkge1xyXG4gICAgICAgICAgICB0aGlzLmNhbmNlbCgpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICB1cGRhdGUoZW50aXR5LCBkZWx0YVRpbWUpIHtcclxuICAgICAgICBpZiAodGhpcy5yZXF1ZXN0VGltZSA+IDApIHtcclxuICAgICAgICAgICAgaWYgKHRoaXMucmVhZHkgPiAwKSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmVuZ2FnZVRpbWUgPSB0aGlzLmR1cmF0aW9uO1xyXG4gICAgICAgICAgICAgICAgdGhpcy5yZXF1ZXN0VGltZSA9IDA7XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIHRoaXMucmVxdWVzdFRpbWUgLT0gZGVsdGFUaW1lO1xyXG4gICAgICAgIH1cclxuXHJcblxyXG4gICAgICAgIGlmICh0aGlzLmVuZ2FnZVRpbWUgPiAwKSB7XHJcbiAgICAgICAgICAgIGVudGl0eS52ZWwueSA9IC0odGhpcy52ZWxvY2l0eSArIE1hdGguYWJzKGVudGl0eS52ZWwueCkgKiB0aGlzLnNwZWVkQm9vc3QpO1xyXG4gICAgICAgICAgICAvKklmIGtlZXAgcHJlc3NpbmcgdGhlIGtleSwgdGhlIGVuZ2FnZVRpbWUgKHRvdGFsIHRpbWUgYWxsb3cgdG8gIHByZXNzaW5nIGtleSApIHdpbGwgZGVjcmVhc2UgaW4gYSByb3cgdW50aWwgbGVzcyB0aGFuIDAsIHdoaWNoIG1lYW5zIHRoZSB0b3RhbCB0aW1lIG9mIHByZXNzaW5nIGEga2V5IGlzIGJpZ2dlciB0aGFuIHRoZSBhbGxvdyBkdXJhdGlvbiggdGhpcy4gZHVyYXRpb24gPSAwLjUgKHNlY29uZCkpLCBzbyB0aGUgZW50aXR5LnZlbC55IHNob3VsZCBub3QgZGVjcmVhc2UgYW55bW9yZSwgaW4gb3RoZXIgd29yZHMsIHRoZSBtYXJpbyBzaG91bGQgbm90IHRyYXZlbCB1cCBhbnltb3JlLiovXHJcbiAgICAgICAgICAgIHRoaXMuZW5nYWdlVGltZSAtPSBkZWx0YVRpbWU7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAvLyBjb25zb2xlLmxvZygnSWYgd2UgYXJlIHJlYWR5IHRvIGp1bXA/JywgdGhpcy5yZWFkeSlcclxuICAgICAgICB0aGlzLnJlYWR5IC0tO1xyXG4gICAgfVxyXG59XHJcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3B1YmxpYy9qcy90cmFpdHMvSnVtcC5qcyIsImltcG9ydCB7VHJhaXR9IGZyb20gJy4uL0VudGl0eS5qcydcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFN0b21lciBleHRlbmRzIFRyYWl0IHtcclxuICAgIGNvbnN0cnVjdG9yKCkge1xyXG4gICAgICAgIHN1cGVyKCdzdG9tZXInKTtcclxuICAgICAgICB0aGlzLmJvdW5jZVNwZWVkID0gMjAwO1xyXG5cclxuICAgICAgICB0aGlzLm9uU3RvbXAgPSBmdW5jdGlvbiAoKSB7fVxyXG4gICAgfVxyXG5cclxuICAgIGJvdW5jZSh1cywgdGhlbSkge1xyXG4gICAgICAgIHVzLmJvdW5kcy5ib3R0b20gPSB0aGVtLmJvdW5kcy50b3A7XHJcbiAgICAgICAgdXMudmVsLnkgPSAtdGhpcy5ib3VuY2VTcGVlZDtcclxuICAgIH1cclxuXHJcbiAgICBjb2xsaWRlcyh1cywgdGhlbSkge1xyXG4gICAgICAgIGlmICghdGhlbS5raWxsYWJsZSB8fCB0aGVtLmtpbGxhYmxlLmRlYWQpIHtcclxuICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgaWYgKCB1cy52ZWwueSA+IHRoZW0udmVsLnkpIHtcclxuICAgICAgICAgICAgdGhpcy5ib3VuY2UodXMsIHRoZW0pO1xyXG4gICAgICAgICAgICB0aGlzLm9uU3RvbXAodXMsIHRoZW0pO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxufVxyXG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9wdWJsaWMvanMvdHJhaXRzL1N0b21lci5qcyIsImltcG9ydCBFbnRpdHksIHtTaWRlcywgVHJhaXR9IGZyb20gJy4uL0VudGl0eS5qcydcclxuaW1wb3J0IHtsb2FkU3ByaXRlU2hlZXR9IGZyb20gJy4uL2xvYWRlci5qcyc7XHJcbmltcG9ydCBQZW5kdWx1bVdhbGsgZnJvbSAnLi4vdHJhaXRzL1BlbmR1bHVtTW92ZS5qcyc7XHJcbmltcG9ydCBLaWxsYWJsZSBmcm9tICcuLi90cmFpdHMvS2lsbGFibGUuanMnO1xyXG5pbXBvcnQgU29saWQgZnJvbSAnLi4vdHJhaXRzL1NvbGlkLmpzJ1xyXG5pbXBvcnQgUGh5c2ljcyBmcm9tICcuLi90cmFpdHMvUGh5c2ljcy5qcydcclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBsb2FkR29vbWJhKCkge1xyXG4gICAgcmV0dXJuIGxvYWRTcHJpdGVTaGVldCgnZ29vbWJhJylcclxuICAgICAgICAudGhlbihjcmVhdGVHb29tYmFGYWN0b3J5KVxyXG59XHJcblxyXG5jbGFzcyBCZWhhdmlvciBleHRlbmRzIFRyYWl0IHtcclxuICAgIGNvbnN0cnVjdG9yKCkge1xyXG4gICAgICAgIHN1cGVyKCdiZWhhdmlvcicpO1xyXG4gICAgfVxyXG5cclxuICAgIGNvbGxpZGVzKHVzLCB0aGVtKSB7XHJcbiAgICAgICAgaWYgKHVzLmtpbGxhYmxlLmRlYWQpIHtcclxuICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgaWYgKHRoZW0uc3RvbWVyKSB7XHJcbiAgICAgICAgICAgIGlmICh0aGVtLnBvcy55IDwgdXMucG9zLnkpIHtcclxuICAgICAgICAgICAgICAgIHVzLmtpbGxhYmxlLmtpbGwoKTtcclxuICAgICAgICAgICAgICAgIHVzLnBlbmR1bHVtTW92ZS5zcGVlZCA9IDA7XHJcbiAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICB0aGVtLmtpbGxhYmxlLmtpbGwoKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH1cclxufVxyXG5cclxuZnVuY3Rpb24gY3JlYXRlR29vbWJhRmFjdG9yeShzcHJpdGUpIHtcclxuICAgIGNvbnN0IHdhbGtBbmltID0gc3ByaXRlLmFuaW1hdGlvbnMuZ2V0KCd3YWxrJyk7XHJcblxyXG4gICAgZnVuY3Rpb24gcm91dGVBbmltKGdvb21iYSkge1xyXG4gICAgICAgIGlmIChnb29tYmEua2lsbGFibGUuZGVhZCkge1xyXG4gICAgICAgICAgICByZXR1cm4gJ2ZsYXQnO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgcmV0dXJuIHdhbGtBbmltKGdvb21iYS5saWZlVGltZSk7XHJcbiAgICB9XHJcblxyXG4gICAgZnVuY3Rpb24gZHJhd0dvb21iYShjb250ZXh0KSB7XHJcbiAgICAgICAgc3ByaXRlLmRyYXcocm91dGVBbmltKHRoaXMpLCBjb250ZXh0LCAwLCAwKTtcclxuICAgIH1cclxuXHJcbiAgICByZXR1cm4gZnVuY3Rpb24gY3JlYXRlR29vbWJhKCkge1xyXG4gICAgICAgIGNvbnN0IGdvb21iYSA9IG5ldyBFbnRpdHkoKTtcclxuICAgICAgICBnb29tYmEuc2l6ZS5zZXQoMTYsIDE2KTtcclxuXHJcbiAgICAgICAgZ29vbWJhLmFkZFRyYWl0KG5ldyBQaHlzaWNzKCkpO1xyXG4gICAgICAgIGdvb21iYS5hZGRUcmFpdChuZXcgU29saWQoKSk7XHJcbiAgICAgICAgZ29vbWJhLmFkZFRyYWl0KG5ldyBQZW5kdWx1bVdhbGsoKSk7XHJcbiAgICAgICAgZ29vbWJhLmFkZFRyYWl0KG5ldyBCZWhhdmlvcigpKTtcclxuICAgICAgICBnb29tYmEuYWRkVHJhaXQobmV3IEtpbGxhYmxlKCkpO1xyXG5cclxuICAgICAgICBnb29tYmEuZHJhdyA9IGRyYXdHb29tYmE7XHJcblxyXG4gICAgICAgIHJldHVybiBnb29tYmE7XHJcbiAgICB9XHJcbn1cclxuXHJcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3B1YmxpYy9qcy9lbnRpdGllcy9Hb29tYmEuanMiLCJpbXBvcnQgRW50aXR5LCB7U2lkZXMsIFRyYWl0fSBmcm9tICcuLi9FbnRpdHkuanMnO1xyXG5pbXBvcnQge2xvYWRTcHJpdGVTaGVldH0gZnJvbSAnLi4vbG9hZGVyLmpzJztcclxuaW1wb3J0IFBlbmR1bHVtV2FsayBmcm9tICcuLi90cmFpdHMvUGVuZHVsdW1Nb3ZlLmpzJztcclxuaW1wb3J0IFNvbGlkIGZyb20gJy4uL3RyYWl0cy9Tb2xpZC5qcydcclxuaW1wb3J0IFBoeXNpY3MgZnJvbSAnLi4vdHJhaXRzL1BoeXNpY3MuanMnXHJcbmltcG9ydCBLaWxsYWJsZSBmcm9tICcuLi90cmFpdHMvS2lsbGFibGUuanMnO1xyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIGxvYWRLb29wYSgpIHtcclxuICAgIHJldHVybiBsb2FkU3ByaXRlU2hlZXQoJ2tvb3BhJylcclxuICAgICAgICAudGhlbihjcmVhdGVLb29wYUZhY3RvcnkpXHJcbn1cclxuXHJcbmNvbnN0IFNUQVRFX1dBTEtJTkcgPSBTeW1ib2woJ3dhbGtpbmcnKTtcclxuY29uc3QgU1RBVEVfSElESU5HID0gU3ltYm9sKCdoaWRpbmcnKTtcclxuY29uc3QgU1RBVEVfUEFOSUMgPSBTeW1ib2woJ3BhbmljJyk7XHJcblxyXG5jbGFzcyBCZWhhdmlvciBleHRlbmRzIFRyYWl0IHtcclxuICAgIGNvbnN0cnVjdG9yKCkge1xyXG4gICAgICAgIHN1cGVyKCdiZWhhdmlvcicpO1xyXG4gICAgICAgIHRoaXMuc3RhdGUgPSBTVEFURV9XQUxLSU5HO1xyXG4gICAgICAgIHRoaXMuaGlkZVRpbWUgPSAwO1xyXG4gICAgICAgIHRoaXMuaGlkZUR1cmF0aW9uID0gMztcclxuICAgICAgICB0aGlzLnBhbmljU3BlZWQgPSAyMDA7XHJcbiAgICAgICAgdGhpcy53YWxrU3BlZWQgPSBudWxsO1xyXG4gICAgfVxyXG5cclxuICAgIGNvbGxpZGVzKHVzLCB0aGVtKSB7XHJcbiAgICAgICAgaWYgKHVzLmtpbGxhYmxlLmRlYWQpIHtcclxuICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgaWYgKHRoZW0uc3RvbWVyKSB7XHJcbiAgICAgICAgICAgIGlmICh0aGVtLnBvcy55IDwgdXMucG9zLnkpIHtcclxuICAgICAgICAgICAgICAgIHRoaXMuaGFuZGxlU3RhdGUodXMsIHRoZW0pO1xyXG4gICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5oYW5kbGVLaWNrKHVzLCB0aGVtKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBoYW5kbGVLaWNrKHVzLCB0aGVtKSB7XHJcbiAgICAgICAgaWYgKHRoaXMuc3RhdGUgPT09IFNUQVRFX1dBTEtJTkcpIHtcclxuICAgICAgICAgICAgdGhlbS5raWxsYWJsZS5raWxsKCk7XHJcbiAgICAgICAgfSBlbHNlIGlmICh0aGlzLnN0YXRlID09PSBTVEFURV9ISURJTkcpIHtcclxuICAgICAgICAgICAgdGhpcy5wYW5pYyh1cywgdGhlbSk7XHJcbiAgICAgICAgfSBlbHNlIGlmICh0aGlzLnN0YXRlID09PSBTVEFURV9QQU5JQykge1xyXG4gICAgICAgICAgICBjb25zdCB0cmF2ZWxEaXIgPSBNYXRoLnNpZ24odXMudmVsLngpO1xyXG4gICAgICAgICAgICBjb25zdCBpbXBhY3REaXIgPSBNYXRoLnNpZ24odXMucG9zLnggLSB0aGVtLnBvcy54KTtcclxuICAgICAgICAgICAgaWYgKHRyYXZlbERpciAhPT0gMCAmJiBpbXBhY3REaXIgIT09IHRyYXZlbERpcikge1xyXG4gICAgICAgICAgICAgICAgdGhlbS5raWxsYWJsZS5raWxsKCk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgaGFuZGxlU3RhdGUodXMsIHRoZW0pIHtcclxuICAgICAgICBpZiAodGhpcy5zdGF0ZSA9PT0gU1RBVEVfV0FMS0lORykge1xyXG4gICAgICAgICAgICBpZiAodXMucGVuZHVsdW1Nb3ZlLnNwZWVkICE9PSAwKSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLndhbGtTcGVlZCA9IHVzLnBlbmR1bHVtTW92ZS5zcGVlZDtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB0aGlzLmhpZGluZyh1cyk7XHJcbiAgICAgICAgfSBlbHNlIGlmICh0aGlzLnN0YXRlID09PSBTVEFURV9ISURJTkcpIHtcclxuICAgICAgICAgICAgdXMua2lsbGFibGUua2lsbCgpO1xyXG4gICAgICAgICAgICB1cy52ZWwuc2V0KDEwMCwgLTIwMCk7XHJcbiAgICAgICAgICAgIHVzLnNvbGlkLm9ic3RydWN0cyA9IGZhbHNlO1xyXG4gICAgICAgIH0gZWxzZSBpZiAodGhpcy5zdGF0ZSA9PT0gU1RBVEVfUEFOSUMpIHtcclxuICAgICAgICAgICAgdGhpcy5oaWRpbmcodXMpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBoaWRpbmcodXMpIHtcclxuICAgICAgICB1cy52ZWwueCA9IDA7XHJcbiAgICAgICAgdXMucGVuZHVsdW1Nb3ZlLmVuYWJsZSA9IGZhbHNlO1xyXG4gICAgICAgIHRoaXMuc3RhdGUgPSBTVEFURV9ISURJTkc7XHJcbiAgICB9XHJcblxyXG4gICAgdW5IaWRlKHVzKSB7XHJcbiAgICAgICAgdXMudmVsLnggPSAxMDA7XHJcbiAgICAgICAgdXMucGVuZHVsdW1Nb3ZlLmVuYWJsZSA9IHRydWU7XHJcbiAgICAgICAgdXMucGVuZHVsdW1Nb3ZlLnNwZWVkID0gdGhpcy53YWxrU3BlZWQ7XHJcbiAgICAgICAgdGhpcy5zdGF0ZSA9IFNUQVRFX1dBTEtJTkc7XHJcbiAgICAgICAgdGhpcy5oaWRlVGltZSA9IDA7XHJcbiAgICB9XHJcblxyXG4gICAgcGFuaWModXMsIHRoZW0pIHtcclxuICAgICAgICB1cy5wZW5kdWx1bU1vdmUuZW5hYmxlID0gdHJ1ZTtcclxuICAgICAgICB1cy5wZW5kdWx1bU1vdmUuc3BlZWQgPSB0aGlzLnBhbmljU3BlZWQgKiBNYXRoLnNpZ24odGhlbS52ZWwueCk7XHJcbiAgICAgICAgdGhpcy5zdGF0ZSA9IFNUQVRFX1BBTklDO1xyXG4gICAgfVxyXG5cclxuICAgIHVwZGF0ZSh1cywgZGVsdGFUaW1lKSB7XHJcbiAgICAgICAgaWYgKHRoaXMuc3RhdGUgPT09IFNUQVRFX0hJRElORykge1xyXG4gICAgICAgICAgICB0aGlzLmhpZGVUaW1lICs9IGRlbHRhVGltZTtcclxuXHJcbiAgICAgICAgICAgIGlmICh0aGlzLmhpZGVUaW1lID4gdGhpcy5oaWRlRHVyYXRpb24pIHtcclxuICAgICAgICAgICAgICAgIHRoaXMudW5IaWRlKHVzKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH1cclxufVxyXG5cclxuZnVuY3Rpb24gY3JlYXRlS29vcGFGYWN0b3J5KHNwcml0ZSkge1xyXG4gICAgY29uc3Qgd2Fsa0FuaW0gPSBzcHJpdGUuYW5pbWF0aW9ucy5nZXQoJ3dhbGsnKTtcclxuICAgIGNvbnN0IHdha2VBbmltID0gc3ByaXRlLmFuaW1hdGlvbnMuZ2V0KCd3YWtlJyk7XHJcblxyXG5cclxuICAgIGZ1bmN0aW9uIHJvdXRlQW5pbShrb29wYSkge1xyXG4gICAgICAgIGlmIChrb29wYS5iZWhhdmlvci5zdGF0ZSA9PT0gU1RBVEVfSElESU5HKSB7XHJcbiAgICAgICAgICAgIGlmIChrb29wYS5iZWhhdmlvci5oaWRlVGltZSA+IDIpIHtcclxuICAgICAgICAgICAgICAgIHJldHVybiB3YWtlQW5pbShrb29wYS5iZWhhdmlvci5oaWRlVGltZSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgcmV0dXJuICdoaWRpbmcnO1xyXG4gICAgICAgIH1cclxuICAgICAgICBpZiAoa29vcGEuYmVoYXZpb3Iuc3RhdGUgPT09IFNUQVRFX1BBTklDKSB7XHJcbiAgICAgICAgICAgIHJldHVybiAnaGlkaW5nJ1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgcmV0dXJuIHdhbGtBbmltKGtvb3BhLmxpZmVUaW1lKTtcclxuICAgIH1cclxuXHJcbiAgICBmdW5jdGlvbiBkcmF3S29vcGEoY29udGV4dCkge1xyXG4gICAgICAgIHNwcml0ZS5kcmF3KHJvdXRlQW5pbSh0aGlzKSwgY29udGV4dCwgMCwgMCwgdGhpcy52ZWwueCA8IDApO1xyXG4gICAgfVxyXG5cclxuICAgIHJldHVybiBmdW5jdGlvbiBjcmVhdGVLb29wYSgpIHtcclxuICAgICAgICBjb25zdCBrb29wYSA9IG5ldyBFbnRpdHkoKTtcclxuICAgICAgICBrb29wYS5zaXplLnNldCgxNiwgMTYpO1xyXG4gICAgICAgIGtvb3BhLm9mZnNldC55ID0gODtcclxuXHJcbiAgICAgICAga29vcGEuYWRkVHJhaXQobmV3IFBoeXNpY3MoKSk7XHJcbiAgICAgICAga29vcGEuYWRkVHJhaXQobmV3IFNvbGlkKCkpO1xyXG4gICAgICAgIGtvb3BhLmFkZFRyYWl0KG5ldyBQZW5kdWx1bVdhbGsoKSk7XHJcbiAgICAgICAga29vcGEuYWRkVHJhaXQobmV3IEJlaGF2aW9yKCkpO1xyXG4gICAgICAgIGtvb3BhLmFkZFRyYWl0KG5ldyBLaWxsYWJsZSgpKTtcclxuXHJcbiAgICAgICAga29vcGEuZHJhdyA9IGRyYXdLb29wYTtcclxuXHJcbiAgICAgICAgcmV0dXJuIGtvb3BhO1xyXG4gICAgfVxyXG59XHJcblxyXG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9wdWJsaWMvanMvZW50aXRpZXMvS29vcGEuanMiLCJtb2R1bGUuZXhwb3J0cyA9IHsgXCJkZWZhdWx0XCI6IHJlcXVpcmUoXCJjb3JlLWpzL2xpYnJhcnkvZm4vbWF0aC9zaWduXCIpLCBfX2VzTW9kdWxlOiB0cnVlIH07XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9ub2RlX21vZHVsZXMvX2JhYmVsLXJ1bnRpbWVANi4yNi4wQGJhYmVsLXJ1bnRpbWUvY29yZS1qcy9tYXRoL3NpZ24uanNcbi8vIG1vZHVsZSBpZCA9IDE3OVxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJyZXF1aXJlKCcuLi8uLi9tb2R1bGVzL2VzNi5tYXRoLnNpZ24nKTtcbm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZSgnLi4vLi4vbW9kdWxlcy9fY29yZScpLk1hdGguc2lnbjtcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vbm9kZV9tb2R1bGVzL19jb3JlLWpzQDIuNS4zQGNvcmUtanMvbGlicmFyeS9mbi9tYXRoL3NpZ24uanNcbi8vIG1vZHVsZSBpZCA9IDE4MFxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCIvLyAyMC4yLjIuMjggTWF0aC5zaWduKHgpXG52YXIgJGV4cG9ydCA9IHJlcXVpcmUoJy4vX2V4cG9ydCcpO1xuXG4kZXhwb3J0KCRleHBvcnQuUywgJ01hdGgnLCB7IHNpZ246IHJlcXVpcmUoJy4vX21hdGgtc2lnbicpIH0pO1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9ub2RlX21vZHVsZXMvX2NvcmUtanNAMi41LjNAY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvZXM2Lm1hdGguc2lnbi5qc1xuLy8gbW9kdWxlIGlkID0gMTgxXG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIi8vIDIwLjIuMi4yOCBNYXRoLnNpZ24oeClcbm1vZHVsZS5leHBvcnRzID0gTWF0aC5zaWduIHx8IGZ1bmN0aW9uIHNpZ24oeCkge1xuICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tc2VsZi1jb21wYXJlXG4gIHJldHVybiAoeCA9ICt4KSA9PSAwIHx8IHggIT0geCA/IHggOiB4IDwgMCA/IC0xIDogMTtcbn07XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL25vZGVfbW9kdWxlcy9fY29yZS1qc0AyLjUuM0Bjb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9fbWF0aC1zaWduLmpzXG4vLyBtb2R1bGUgaWQgPSAxODJcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiaW1wb3J0IHthZGRQYWRTdGFydFBvbHlmaWxsfSBmcm9tICcuLi9wb2x5ZmlsbHMvYWRkUGFkU3RhcnQuanMnO1xyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIGNyZWF0ZURhc2hib2FyZExheWVyKGZvbnQsIHBsYXllckVudikge1xyXG4gICAgY29uc3QgTElORTEgPSBmb250LnNpemU7XHJcbiAgICBjb25zdCBMSU5FMiA9IGZvbnQuc2l6ZSoyO1xyXG5cclxuICAgIGNvbnN0IGNvaW5zID0gOTk7XHJcblxyXG4gICAgYWRkUGFkU3RhcnRQb2x5ZmlsbCgpO1xyXG5cclxuICAgIHJldHVybiBmdW5jdGlvbiBkcmF3RGFzaGJvYXJkKGNvbnRleHQpIHtcclxuICAgICAgICBsZXQgdGltZSA9IHBsYXllckVudi5wbGF5ZXJDb250cm9sbGVyLnRpbWU7XHJcbiAgICAgICAgY29uc3Qge3Njb3JlfSA9IHBsYXllckVudi5wbGF5ZXJDb250cm9sbGVyO1xyXG5cclxuICAgICAgICAvL1RPRE86SU1QUk9WRSB0aW1lIGNvdW50ZXJcclxuICAgICAgICBpZiAodGltZSA8PSAwKSB7XHJcbiAgICAgICAgICAgIHBsYXllckVudi5wbGF5ZXJDb250cm9sbGVyLnRpbWUgPSB0aW1lID0gNDAwO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgZm9udC5wcmludCgnTUFSSU8nLCBjb250ZXh0LDE2LCBMSU5FMSk7XHJcbiAgICAgICAgZm9udC5wcmludChzY29yZS50b1N0cmluZygpLnBhZFN0YXJ0KDYsICcwJyksIGNvbnRleHQsMTYsIExJTkUyKTtcclxuXHJcbiAgICAgICAgZm9udC5wcmludCgnQHgnICsgY29pbnMudG9TdHJpbmcoKS5wYWRTdGFydCgyLCAnMCcpLCBjb250ZXh0LDk2LCBMSU5FMik7XHJcblxyXG4gICAgICAgIGZvbnQucHJpbnQoJ1dPUkxEJywgY29udGV4dCwxNTIsIExJTkUxKTtcclxuICAgICAgICBmb250LnByaW50KCcxLTEnLCBjb250ZXh0LDE2MCwgTElORTIpO1xyXG5cclxuICAgICAgICBmb250LnByaW50KCdUSU1FJywgY29udGV4dCwyMDgsIExJTkUxKTtcclxuICAgICAgICBmb250LnByaW50KHRpbWUudG9GaXhlZCgpLnRvU3RyaW5nKCkucGFkU3RhcnQoMywgJzAnKSwgY29udGV4dCwyMTYsIExJTkUyKTtcclxuICAgICAgICAvLyBmb250LmRyYXcoJ0EnLCBjb250ZXh0LCAwLCAwKTtcclxuICAgIH1cclxufVxyXG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9wdWJsaWMvanMvbGF5ZXJzL2Rhc2hib2FyZC5qcyIsIi8vIGh0dHBzOi8vZ2l0aHViLmNvbS91eGl0dGVuL3BvbHlmaWxsL2Jsb2IvbWFzdGVyL3N0cmluZy5wb2x5ZmlsbC5qc1xyXG4vLyBodHRwczovL2RldmVsb3Blci5tb3ppbGxhLm9yZy9lbi1VUy9kb2NzL1dlYi9KYXZhU2NyaXB0L1JlZmVyZW5jZS9HbG9iYWxfT2JqZWN0cy9TdHJpbmcvcGFkU3RhcnRcclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBhZGRQYWRTdGFydFBvbHlmaWxsKCkge1xyXG4gICAgLy8gYWRkIFN0cmluZy5wcm90b3R5cGUucGFkU3RhcnQgZm9yIGZpcmVmb3gtdjQ3XHJcbiAgICBpZiAoIVN0cmluZy5wcm90b3R5cGUucGFkU3RhcnQpIHtcclxuICAgICAgICBTdHJpbmcucHJvdG90eXBlLnBhZFN0YXJ0ID0gZnVuY3Rpb24gcGFkU3RhcnQodGFyZ2V0TGVuZ3RoLHBhZFN0cmluZykge1xyXG4gICAgICAgICAgICB0YXJnZXRMZW5ndGggPSB0YXJnZXRMZW5ndGg+PjA7IC8vZmxvb3IgaWYgbnVtYmVyIG9yIGNvbnZlcnQgbm9uLW51bWJlciB0byAwO1xyXG4gICAgICAgICAgICBwYWRTdHJpbmcgPSBTdHJpbmcocGFkU3RyaW5nIHx8ICcgJyk7XHJcbiAgICAgICAgICAgIGlmICh0aGlzLmxlbmd0aCA+IHRhcmdldExlbmd0aCkge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIFN0cmluZyh0aGlzKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICAgICAgIHRhcmdldExlbmd0aCA9IHRhcmdldExlbmd0aC10aGlzLmxlbmd0aDtcclxuICAgICAgICAgICAgICAgIGlmICh0YXJnZXRMZW5ndGggPiBwYWRTdHJpbmcubGVuZ3RoKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgcGFkU3RyaW5nICs9IHBhZFN0cmluZy5yZXBlYXQodGFyZ2V0TGVuZ3RoL3BhZFN0cmluZy5sZW5ndGgpOyAvL2FwcGVuZCB0byBvcmlnaW5hbCB0byBlbnN1cmUgd2UgYXJlIGxvbmdlciB0aGFuIG5lZWRlZFxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgcmV0dXJuIHBhZFN0cmluZy5zbGljZSgwLHRhcmdldExlbmd0aCkgKyBTdHJpbmcodGhpcyk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9O1xyXG4gICAgfVxyXG59XHJcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3B1YmxpYy9qcy9wb2x5ZmlsbHMvYWRkUGFkU3RhcnQuanMiLCJpbXBvcnQgIGtleUJvYXJkIGZyb20gJy4vS2V5Ym9hcmRTdGF0ZS5qcydcclxuaW1wb3J0ICBUb3VjaFBhZCBmcm9tICcuL1RvdWNoUGFkU3RhdGUuanMnXHJcblxyXG5leHBvcnQgZnVuY3Rpb24gc2V0dXBUb3VjaFBhZChlbnRpdHkpIHtcclxuICAgIGNvbnN0IGp1bXBCdG4gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnanVtcC1idG4nKTtcclxuICAgIGNvbnN0IGxlZnRCdG4gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnbGVmdC1idG4nKTtcclxuICAgIGNvbnN0IHJpZ2h0QnRuID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3JpZ2h0LWJ0bicpO1xyXG5cclxuICAgIGNvbnN0IGJ1dHRvbnMgPSBbanVtcEJ0biwgbGVmdEJ0biwgcmlnaHRCdG5dO1xyXG5cclxuICAgIGNvbnN0IGlucHV0ID0gbmV3IFRvdWNoUGFkKGJ1dHRvbnMpO1xyXG5cclxuICAgIGlucHV0LnN0YXJ0TGlzdGVuVG8oKTtcclxuXHJcbiAgICBpbnB1dC5hZGRNYXBwaW5nKCdqdW1wLWJ0bicsIGtleVN0YXRlID0+IHtcclxuICAgICAgICBpZiAoa2V5U3RhdGUpIHtcclxuICAgICAgICAgICAgZW50aXR5Lmp1bXAuc3RhcnQoKTtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICBlbnRpdHkuanVtcC5jYW5jZWwoKTtcclxuICAgICAgICB9XHJcbiAgICB9KTtcclxuXHJcbiAgICBpbnB1dC5hZGRNYXBwaW5nKCdyaWdodC1idG4nLCBrZXlTdGF0ZSA9PiB7XHJcbiAgICAgICAgZW50aXR5LmdvLmRpciArPSBrZXlTdGF0ZSA/IDEgOiAtMTtcclxuICAgIH0pO1xyXG5cclxuICAgIGlucHV0LmFkZE1hcHBpbmcoJ2xlZnQtYnRuJywga2V5U3RhdGUgPT4ge1xyXG4gICAgICAgIGVudGl0eS5nby5kaXIgKz0ga2V5U3RhdGUgPyAtMSA6IDE7XHJcbiAgICB9KTtcclxuXHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBzZXR1cEtleWJvYXJkKGVudGl0eSkge1xyXG4gICAgY29uc3QgaW5wdXQgPSBuZXcga2V5Qm9hcmQoKTtcclxuXHJcbiAgICBpbnB1dC5hZGRNYXBwaW5nKCdTcGFjZScsIGtleVN0YXRlID0+IHtcclxuICAgICAgICAvLyBGYW50YXN0aWMhIC0g5aaZ77yBXHJcbiAgICAgICAgLypCeSBzdWNoIGEgZmFudGFzdGljIENsYXNzLCBub3cgd2UgdGFrZSBvdmVyIHRoZSBldmVudCBvZiBrZXkgYm9hcmQgaW5wdXQsXHJcbiAgICAgICAgIHNvIHRoYXQgd2UgY2FuIGdldCBob3cgbG9uZyBhIGtleSBpcyBwcmVzc2VkIGFuZCBkcmF3IHRoZSBjYW52YXMgc2VtYW50aWNhbGx5LiovXHJcbiAgICAgICAgaWYgKGtleVN0YXRlKSB7XHJcbiAgICAgICAgICAgIGVudGl0eS5qdW1wLnN0YXJ0KCk7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgZW50aXR5Lmp1bXAuY2FuY2VsKCk7XHJcbiAgICAgICAgfVxyXG4gICAgfSk7XHJcblxyXG4gICAgaW5wdXQuYWRkTWFwcGluZygnQXJyb3dVcCcsIGtleVN0YXRlID0+IHtcclxuICAgICAgICBpZiAoa2V5U3RhdGUpIHtcclxuICAgICAgICAgICAgZW50aXR5Lmp1bXAuc3RhcnQoKTtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICBlbnRpdHkuanVtcC5jYW5jZWwoKTtcclxuICAgICAgICB9XHJcbiAgICB9KTtcclxuXHJcbiAgICAvLyBpbnB1dC5hZGRNYXBwaW5nKCdLZXlPJywga2V5U3RhdGUgPT4ge1xyXG4gICAgLy8gICAgIC8vIEVwOCAtIFR1cmJvIE1vZGUsIEkgdGhpbmsgaXQgaXMgdW5uZWNlc3NhcnkuXHJcbiAgICAvLyB9KTtcclxuXHJcbiAgICBpbnB1dC5hZGRNYXBwaW5nKCdBcnJvd1JpZ2h0Jywga2V5U3RhdGUgPT4ge1xyXG4gICAgICAgIGVudGl0eS5nby5kaXIgKz0ga2V5U3RhdGUgPyAxIDogLTE7XHJcbiAgICB9KTtcclxuXHJcbiAgICBpbnB1dC5hZGRNYXBwaW5nKCdBcnJvd0xlZnQnLCBrZXlTdGF0ZSA9PiB7XHJcbiAgICAgICAgZW50aXR5LmdvLmRpciArPSBrZXlTdGF0ZSA/IC0xIDogMTtcclxuICAgIH0pO1xyXG5cclxuICAgIHJldHVybiBpbnB1dDtcclxufVxyXG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9wdWJsaWMvanMvaW5wdXQvaW5wdXQuanMiLCJjb25zdCBQUkVTU0VEID0gMSwgUkVMRUFTRUQgPSAwO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgS2V5Ym9hcmRTdGF0ZSB7XHJcbiAgICBjb25zdHJ1Y3RvcigpIHtcclxuICAgICAgICAvLyBob2xkIHRoZSBjdXJyZW50IHN0YXRlIG9mIGEgZ2l2ZW4ga2V5XHJcbiAgICAgICAgdGhpcy5rZXlTdGF0ZXMgPSBuZXcgTWFwKCk7XHJcblxyXG4gICAgICAgIC8vIGhvbGRzIHRoZSBjYWxsYmFjayBmdW5jdGlvbnMgZm9yIGEga2V5IGNvZGVcclxuICAgICAgICB0aGlzLmtleU1hcCA9IG5ldyBNYXAoKVxyXG4gICAgfVxyXG5cclxuICAgIGFkZE1hcHBpbmcoY29kZSwgY2FsbEJhY2spIHtcclxuICAgICAgICB0aGlzLmtleU1hcC5zZXQoY29kZSwgY2FsbEJhY2spXHJcbiAgICB9XHJcblxyXG4gICAgaGFuZGxlRXZlbnQoZXZlbnQpIHtcclxuICAgICAgICBjb25zdCB7Y29kZX0gPSBldmVudDtcclxuXHJcbiAgICAgICAgaWYgKCF0aGlzLmtleU1hcC5oYXMoY29kZSkpIHtcclxuICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcclxuXHJcbiAgICAgICAgY29uc3Qga2V5U3RhdGUgPSBldmVudC50eXBlID09PSAna2V5ZG93bicgPyBQUkVTU0VEIDogUkVMRUFTRUQ7XHJcblxyXG4gICAgICAgIGlmICh0aGlzLmtleVN0YXRlcy5nZXQoY29kZSkgPT09IGtleVN0YXRlKSB7XHJcbiAgICAgICAgICAgIC8vIGF2b2lkIHRyaWdnZXJpbmcgbXVsdGlwbGUgdGltZXNcclxuICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgdGhpcy5rZXlTdGF0ZXMuc2V0KGNvZGUsIGtleVN0YXRlKTtcclxuXHJcbiAgICAgICAgdGhpcy5rZXlNYXAuZ2V0KGNvZGUpKGtleVN0YXRlKTtcclxuICAgIH1cclxuXHJcbiAgICBsaXN0ZW5Ubyh3aW5kb3cpIHtcclxuICAgICAgICBbJ2tleWRvd24nLCAna2V5dXAnXS5mb3JFYWNoKGV2ZW50TmFtZSA9PiB7XHJcbiAgICAgICAgICAgIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKGV2ZW50TmFtZSwgZXZlbnQgPT4ge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5oYW5kbGVFdmVudChldmVudClcclxuICAgICAgICAgICAgfSlcclxuICAgICAgICB9KVxyXG4gICAgfVxyXG59XHJcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3B1YmxpYy9qcy9pbnB1dC9LZXlib2FyZFN0YXRlLmpzIiwiY29uc3QgUFJFU1NFRCA9IDEsIFJFTEVBU0VEID0gMDtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFRvdWNoUGFkU3RhdGUge1xyXG4gICAgY29uc3RydWN0b3IoYnV0dG9ucykge1xyXG4gICAgICAgIHRoaXMuYnV0dG9ucyA9IGJ1dHRvbnM7XHJcblxyXG4gICAgICAgIHRoaXMua2V5U3RhdGVzID0gbmV3IE1hcCgpO1xyXG5cclxuICAgICAgICB0aGlzLmtleU1hcCA9IG5ldyBNYXAoKVxyXG4gICAgfVxyXG5cclxuICAgIGFkZE1hcHBpbmcoY29kZSwgY2FsbEJhY2spIHtcclxuICAgICAgICB0aGlzLmtleU1hcC5zZXQoY29kZSwgY2FsbEJhY2spXHJcbiAgICB9XHJcblxyXG4gICAgaGFuZGxlRXZlbnQoZXZlbnQpIHtcclxuICAgICAgICBjb25zdCBjb2RlSWQgPSBldmVudC5jdXJyZW50VGFyZ2V0LmlkO1xyXG5cclxuICAgICAgICBpZiAoIXRoaXMua2V5TWFwLmhhcyhjb2RlSWQpKSB7XHJcbiAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIC8vIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XHJcblxyXG4gICAgICAgIGNvbnN0IGtleVN0YXRlID0gKGV2ZW50LnR5cGUgPT09ICd0b3VjaHN0YXJ0JyB8fCBldmVudC50eXBlID09PSAnbW91c2Vkb3duJykgPyBQUkVTU0VEIDogUkVMRUFTRUQ7XHJcblxyXG4gICAgICAgIGlmICh0aGlzLmtleVN0YXRlcy5nZXQoY29kZUlkKSA9PT0ga2V5U3RhdGUpIHtcclxuICAgICAgICAgICAgLy8gYXZvaWQgdHJpZ2dlcmluZyBtdWx0aXBsZSB0aW1lc1xyXG4gICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICB0aGlzLmtleVN0YXRlcy5zZXQoY29kZUlkLCBrZXlTdGF0ZSk7XHJcblxyXG4gICAgICAgIHRoaXMua2V5TWFwLmdldChjb2RlSWQpKGtleVN0YXRlKTtcclxuICAgIH1cclxuXHJcbiAgICBzdGFydExpc3RlblRvKCkge1xyXG4gICAgICAgIFsndG91Y2hzdGFydCcsICd0b3VjaGVuZCcsICdtb3VzZWRvd24nLCAnbW91c2V1cCddLmZvckVhY2goZXZ0TmFtZSA9PiB7XHJcbiAgICAgICAgICAgIHRoaXMuYnV0dG9ucy5mb3JFYWNoKGJ0biA9PiB7XHJcbiAgICAgICAgICAgICAgICBidG4uYWRkRXZlbnRMaXN0ZW5lcihldnROYW1lLCBldnQ9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5oYW5kbGVFdmVudChldnQpO1xyXG4gICAgICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgfSlcclxuICAgICAgICB9KVxyXG4gICAgfVxyXG5cclxufVxyXG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9wdWJsaWMvanMvaW5wdXQvVG91Y2hQYWRTdGF0ZS5qcyIsImZ1bmN0aW9uIGdldFBsYXRmb3JtKHVhKSB7XHJcbiAgICBpZiAoL3dpbmRvd3MvaS50ZXN0KHVhKSkge1xyXG4gICAgICAgIHJldHVybiBbJ1dpbmRvd3MnLCAwXTtcclxuICAgIH1cclxuXHJcbiAgICBpZiAoL2FuZHJvaWQvaS50ZXN0KHVhKSkge1xyXG4gICAgICAgIGNvbnN0IG1hdGNoID0gdWEubWF0Y2goL2FuZHJvaWRcXHMoWzAtOVxcLl0qKS9pKTtcclxuICAgICAgICBsZXQgdmVyID0gbWF0Y2ggPyBwYXJzZUZsb2F0KG1hdGNoWzFdKSA6IDA7XHJcbiAgICAgICAgcmV0dXJuIFsnQW5kcm9pZCcsIHZlcl07XHJcbiAgICB9XHJcblxyXG4gICAgLy8gaU9TIGRldGVjdGlvbiBmcm9tOiBodHRwOi8vc3RhY2tvdmVyZmxvdy5jb20vYS85MDM5ODg1LzE3NzcxMFxyXG4gICAgaWYgKC9pUChob25lfG9kfGFkKS8udGVzdCh1YSkgJiYgIXdpbmRvdy5NU1N0cmVhbSkge1xyXG4gICAgICAgIGNvbnN0IG1hdGNoID0gKG5hdmlnYXRvci5hcHBWZXJzaW9uKS5tYXRjaCgvT1MgKFxcZCspXyhcXGQrKV8/KFxcZCspPy8pO1xyXG4gICAgICAgIGxldCB2ZXIgPSBtYXRjaCA/IHBhcnNlSW50KG1hdGNoWzFdLCAxMCkgOiAwO1xyXG4gICAgICAgIHJldHVybiBbJ2lPUycsIHZlcl07XHJcbiAgICB9XHJcblxyXG4gICAgaWYgKHVhLmluZGV4T2YoJ01hYycpID4gLTEpIHtcclxuICAgICAgICByZXR1cm4gWydNYWMnLCAwXTtcclxuICAgIH1cclxuXHJcbiAgICByZXR1cm4gWyd1bmtub3duJywgMF07XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBnZXRVc2VyQWdlbnQoKSB7XHJcbiAgICBsZXQgdWFJbmZvID0ge307XHJcblxyXG4gICAgY29uc3QgdWEgPSBuYXZpZ2F0b3IudXNlckFnZW50O1xyXG5cclxuICAgIC8vIFRPRE8gQmV0dGVyIENvbXBhdGliaWxpdHkgRGV0ZWN0XHJcbiAgICB0cnkge1xyXG4gICAgICAgIFt1YUluZm8ucGxhdGZvcm0sIHVhSW5mby52ZXJdID0gZ2V0UGxhdGZvcm0odWEpO1xyXG4gICAgfSBjYXRjaCAoZXJyKSB7XHJcbiAgICAgICAgW3VhSW5mby5wbGF0Zm9ybSwgdWFJbmZvLnZlcl0gPSBbJ1dpbmRvd3MnLCAwXTtcclxuICAgIH1cclxuXHJcbiAgICAvLyBhbGVydCh1YUluZm8ucGxhdGZvcm0sIHVhSW5mby52ZXIpO1xyXG5cclxuICAgIHJldHVybiB1YUluZm87XHJcbn1cclxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vcHVibGljL2pzL3BvbHlmaWxscy9nZXRVc2VyQWdlbnQuanMiLCJleHBvcnQgZnVuY3Rpb24gYXV0b1BsYXlPbmlPUygpIHtcclxuICAgIGNvbnN0IGJnbUF1ZGlvRWwgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnYmdtJyk7XHJcblxyXG4gICAgZnVuY3Rpb24gZm9yY2VTYWZhcmlBdXRvUGxheSgpIHtcclxuICAgICAgICAvLyBiZ21BdWRpb0VsLmxvYWQoKTtcclxuICAgICAgICBiZ21BdWRpb0VsLnBsYXkoKTtcclxuICAgIH1cclxuXHJcbiAgICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcigndG91Y2hzdGFydCcsIGZvcmNlU2FmYXJpQXV0b1BsYXkpO1xyXG5cclxuICAgIGJnbUF1ZGlvRWwuYWRkRXZlbnRMaXN0ZW5lcigncGxheScsICgpID0+IHtcclxuICAgICAgICAvLyBjb25zb2xlLmxvZygnQkdNIFBsYXllZCEnKTtcclxuXHJcbiAgICAgICAgd2luZG93LnJlbW92ZUV2ZW50TGlzdGVuZXIoJ3RvdWNoc3RhcnQnLCBmb3JjZVNhZmFyaUF1dG9QbGF5KTtcclxuICAgIH0pO1xyXG59XHJcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3B1YmxpYy9qcy9wb2x5ZmlsbHMvYXV0b1BsYXlPbmlPUy5qcyIsIlxyXG5mdW5jdGlvbiBsb29rRm9yRW50aXR5KGxldmVsRW50aXRpZXMsIHRhcmdldEVudGl0eSkge1xyXG4gICAgbGV0IHJldCA9IGZhbHNlO1xyXG5cclxuICAgIGZvciAobGV0IGFkZGVkRW50aXR5IG9mIGxldmVsRW50aXRpZXMpIHtcclxuICAgICAgICBpZiAoYWRkZWRFbnRpdHkuaGFzaElkICYmXHJcbiAgICAgICAgICAgIGFkZGVkRW50aXR5Lmhhc2hJZCA9PT0gdGFyZ2V0RW50aXR5Lmhhc2hJZCkge1xyXG4gICAgICAgICAgICByZXQgPSB0cnVlO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICByZXR1cm4gcmV0O1xyXG59XHJcblxyXG5mdW5jdGlvbiBjYWxjdWxhdGVQb3NGcm9tQ2FtZXJhKGVudGl0eVBvcywgY2FtZXJhUG9zKSB7XHJcbiAgICBjb25zdCB0d2VudHlCbG9jayA9IDMyMDtcclxuICAgIGNvbnN0IGRpc0Zyb21DYW1lcmEgPSBlbnRpdHlQb3MueCAtIGNhbWVyYVBvcy54O1xyXG5cclxuICAgIHJldHVybiAoZGlzRnJvbUNhbWVyYSA8IHR3ZW50eUJsb2NrICYmIGRpc0Zyb21DYW1lcmEgPiAtdHdlbnR5QmxvY2spO1xyXG59XHJcblxyXG5mdW5jdGlvbiBhZGRFbnRpdGllcyhsZXZlbCwgdGFyZ2V0RW50aXR5LCBlbnRpdHlGYWN0b3J5KSB7XHJcbiAgICBjb25zdCBjcmVhdGVFbnRpdHkgPSBlbnRpdHlGYWN0b3J5W3RhcmdldEVudGl0eS5uYW1lXTtcclxuICAgIGNvbnN0IGVudGl0eSA9IGNyZWF0ZUVudGl0eSgpO1xyXG4gICAgZW50aXR5LnBvcy5zZXQodGFyZ2V0RW50aXR5LnBvcy54LCB0YXJnZXRFbnRpdHkucG9zLnkpO1xyXG4gICAgZW50aXR5Lmhhc2hJZCA9IHRhcmdldEVudGl0eS5oYXNoSWQ7XHJcbiAgICBsZXZlbC5lbnRpdGllcy5hZGQoZW50aXR5KTtcclxuXHJcbiAgICBmb3IgKGxldCBpID0gMDtpPGxldmVsLnRvQmVBZGRlZEVudGl0aWVzLmxlbmd0aDtpKyspIHtcclxuICAgICAgICBpZiAobGV2ZWwudG9CZUFkZGVkRW50aXRpZXNbaV0uaGFzaElkID09PSB0YXJnZXRFbnRpdHkuaGFzaElkKSB7XHJcbiAgICAgICAgICAgIGxldmVsLnRvQmVBZGRlZEVudGl0aWVzLnNwbGljZShpLCAxKTtcclxuICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxufVxyXG5cclxuZnVuY3Rpb24gY2hlY2tFbnRpdGllcyhsZXZlbCwgZW50aXR5RmFjdG9yeSwgY2FtZXJhKSB7XHJcbiAgICAvKlRoZSBsb2dpYyBjYW4gYmU6XHJcbiAgICAgKiAwLiBSZWNvcmQ6IFdoZW4gZ2FtZSBpbml0aWF0aW5nLCByZWNvcmQgdGhlIGVudGl0eSBwb3MgYW5kIGEgVW5pcXVlIGlkIGZvciBpZGVudGlmeWluZy5cclxuICAgICAqIDEuIENoZWNraW5nOiBEdXJpbmcgcGxheWluZywgY2hlY2sgdGhlIHBvcyByZWNvcmRlZCBjb250aW51b3VzbHkoVHJpZ2dlciBmcmVxdWVuY3kgc2hvdWxkIGJlIG9wdGltaXplZCkuXHJcbiAgICAgKiAyLiBBZGQ6IElmIHRoZSBwb3Mgb2YgYW4gZW50aXR5IGlzIG5lYXIgdGhlIGNhbWVyYSwgQW5kIGl0IHdhcyBub3QgYWRkZWQgeWV0IChqdWRnZSBieSBpZCksIHRoZW4gYWRkIGl0IHRvIGdhbWUuXHJcbiAgICAgKiAzLiBEZWxldGluZzogV2hlbiBhbiBlbnRpdHkgd2FzIGtpbGxlZCwgZGVsZXRlIGl0IGZyb20gbGV2ZWwuZW50aXRpZXMuXHJcbiAgICAgKiA0LiBSZXNwYXduOiBXaGVuIHRoZSBjYW1lcmEgZ2V0IGNsb3NlIHRvIHRoZSBlbnRpdHkgT25jZSBBZ2FpbihIb3cgdG8gZGV0ZWN0Pz8/KSwgYWRkIGl0IGFnYWluLlxyXG4gICAgICpcclxuICAgICAqIERhdGEgU3RydWM6IFR3byBTZXQuXHJcbiAgICAgKlxyXG4gICAgICovXHJcbiAgICBsZXZlbC5lbnRpdGllc1JlY29yZC5mb3JFYWNoKChlbnRpdHkpID0+IHtcclxuICAgICAgICBjb25zdCBlbnRpdHlOZWFyQ2FtZXJhID0gY2FsY3VsYXRlUG9zRnJvbUNhbWVyYShlbnRpdHkucG9zLCBjYW1lcmEucG9zKTtcclxuXHJcbiAgICAgICAgaWYgKGVudGl0eU5lYXJDYW1lcmEpIHtcclxuICAgICAgICAgICAgY29uc3QgZW50aXR5Tm90QWRkZWRZZXQgPSBsb29rRm9yRW50aXR5KGxldmVsLnRvQmVBZGRlZEVudGl0aWVzLCBlbnRpdHkpO1xyXG5cclxuICAgICAgICAgICAgaWYgKGVudGl0eU5vdEFkZGVkWWV0KSB7XHJcbiAgICAgICAgICAgICAgICBhZGRFbnRpdGllcyhsZXZlbCwgZW50aXR5LCBlbnRpdHlGYWN0b3J5KTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuXHJcbiAgICB9KVxyXG59XHJcblxyXG5mdW5jdGlvbiBkZWxldGVVc2VsZXNzRW50aXRpZXMobGV2ZWwsIGNhbWVyYSkge1xyXG4gICAgbGV2ZWwuZW50aXRpZXMuZm9yRWFjaChlbnRpdHkgPT4ge1xyXG4gICAgICAgIGNvbnN0IGVudGl0eU5lYXJDYW1lcmEgPSBjYWxjdWxhdGVQb3NGcm9tQ2FtZXJhKGVudGl0eS5wb3MsIGNhbWVyYS5wb3MpO1xyXG5cclxuICAgICAgICBpZiAoIWVudGl0eU5lYXJDYW1lcmEgJiYgZW50aXR5LmtpbGxhYmxlICE9PSB1bmRlZmluZWQpIHtcclxuICAgICAgICAgICAgbGV2ZWwuZW50aXRpZXMuZGVsZXRlKGVudGl0eSk7XHJcblxyXG4gICAgICAgICAgICAvLyBUT0RPOiBPcHRpbWl6ZSBjaGVjayBwb2ludCBsb2dpYywgY2FuIG5vdCBnb3QgY2hlY2tlZCBzb21ldGltZXMuXHJcbiAgICAgICAgICAgIGxldmVsLmNoZWNrRW50aXRpZXNQb2ludHMucHVzaChlbnRpdHkucG9zLnggLSAzMDEpO1xyXG4gICAgICAgICAgICBsZXZlbC5jaGVja0VudGl0aWVzUG9pbnRzLnB1c2goZW50aXR5LnBvcy54IC0gMzAwKTtcclxuICAgICAgICAgICAgbGV2ZWwuY2hlY2tFbnRpdGllc1BvaW50cy5wdXNoKGVudGl0eS5wb3MueCAtIDI5OSk7XHJcblxyXG4gICAgICAgICAgICBsZXZlbC50b0JlQWRkZWRFbnRpdGllcy5wdXNoKHtcclxuICAgICAgICAgICAgICAgIGhhc2hJZDogZW50aXR5Lmhhc2hJZFxyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgY29uc29sZS5sb2coJ2RlbGV0ZVVzZWxlc3NFbnRpdGllczsgbGV2ZWxFbnRpdGllcy5zaXplID0gJywgbGV2ZWwuZW50aXRpZXMuc2l6ZSk7XHJcbiAgICAgICAgfVxyXG4gICAgfSlcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIGNvbnRyb2xFbnRpdGllcyhjYW1lcmEsIGxldmVsLCBlbnRpdHlGYWN0b3J5KSB7XHJcbiAgICBsZXQgaW50Q2FtZXJhUG9zWCA9IE1hdGguZmxvb3IoY2FtZXJhLnBvcy54KTtcclxuXHJcbiAgICBjb25zdCBjaGVja0VudGl0aWVzUG9pbnRJbmRleCA9IGxldmVsLmNoZWNrRW50aXRpZXNQb2ludHMuaW5kZXhPZihpbnRDYW1lcmFQb3NYKTtcclxuICAgIGNvbnN0IG5lYXJDaGVja0VudGl0aWVzUG9pbnQgPSBjaGVja0VudGl0aWVzUG9pbnRJbmRleCAhPT0gLTE7XHJcbiAgICBpZiAobmVhckNoZWNrRW50aXRpZXNQb2ludCkge1xyXG4gICAgICAgIGxldmVsLmNoZWNrRW50aXRpZXNQb2ludHMuc3BsaWNlKGNoZWNrRW50aXRpZXNQb2ludEluZGV4LCAxKTtcclxuICAgICAgICAvLyDmnIDnkIbmg7PnmoTnirbmgIHmmK/vvIzlj6rmnInlvZPigJzpnIDopoHigJ3mt7vliqDlrp7kvZPml7bvvIzmiY3mo4DmtYvkuIDmrKHvvIxcclxuICAgICAgICAvLyDkuIDkuKrlhbPljaHmnInlh6DkuKrlrp7kvZPvvIzlsLHlj6rmnInlh6DmrKEgY2hlY2tFbnRpdGllc1xyXG4gICAgICAgIGNvbnNvbGUubG9nKCdjaGVja0VudGl0aWVzJyk7XHJcbiAgICAgICAgY2hlY2tFbnRpdGllcyhsZXZlbCwgZW50aXR5RmFjdG9yeSwgY2FtZXJhKTtcclxuICAgICAgICBkZWxldGVVc2VsZXNzRW50aXRpZXMobGV2ZWwsIGNhbWVyYSk7XHJcbiAgICB9XHJcbn1cclxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vcHVibGljL2pzL2VudGl0aWVzQ29udHJvbFN5c3RlbS5qcyJdLCJzb3VyY2VSb290IjoiIn0=