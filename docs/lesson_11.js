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
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
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
/******/ 	__webpack_require__.p = "./";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 5);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/common/button/button.js":
/*!*************************************!*\
  !*** ./src/common/button/button.js ***!
  \*************************************/
/*! exports provided: createButton, Button, RoundButton, LinkButton, FakeRoundButton */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createButton", function() { return createButton; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Button", function() { return Button; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RoundButton", function() { return RoundButton; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LinkButton", function() { return LinkButton; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FakeRoundButton", function() { return FakeRoundButton; });
/* harmony import */ var _button_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./button.scss */ "./src/common/button/button.scss");
/* harmony import */ var _button_scss__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_button_scss__WEBPACK_IMPORTED_MODULE_0__);
function _get(target, property, receiver) { if (typeof Reflect !== "undefined" && Reflect.get) { _get = Reflect.get; } else { _get = function _get(target, property, receiver) { var base = _superPropBase(target, property); if (!base) return; var desc = Object.getOwnPropertyDescriptor(base, property); if (desc.get) { return desc.get.call(receiver); } return desc.value; }; } return _get(target, property, receiver || target); }

function _superPropBase(object, property) { while (!Object.prototype.hasOwnProperty.call(object, property)) { object = _getPrototypeOf(object); if (object === null) break; } return object; }

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }



var createButton = function createButton() {
  var mountPoint = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : document.querySelector("body");
  var title = arguments.length > 1 ? arguments[1] : undefined;
  var onClick = arguments.length > 2 ? arguments[2] : undefined;
  var color = arguments.length > 3 ? arguments[3] : undefined;
  var button = document.createElement("button");
  button.onclick = onClick;
  button.textContent = title;
  button.classList.add("btn");

  if (color === "success") {
    button.classList.add("btn_success");
  }

  mountPoint.appendChild(button);
};

var Button =
/*#__PURE__*/
function () {
  function Button() {
    var mountPoint = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : document.querySelector("body");
    var title = arguments.length > 1 ? arguments[1] : undefined;
    var onClick = arguments.length > 2 ? arguments[2] : undefined;
    var color = arguments.length > 3 ? arguments[3] : undefined;

    _classCallCheck(this, Button);

    this.mountPoint = mountPoint;
    this.title = title;
    this.onClick = onClick;
    this.color = color;
    this.el = document.createElement("button");
  }

  _createClass(Button, [{
    key: "render",
    value: function render() {
      this.el.onclick = this.onClick;
      this.el.textContent = this.title;
      this.el.classList.add("btn");
      this.el.style.backgroundColor = this.color;
      this.mountPoint.appendChild(this.el);
    }
  }]);

  return Button;
}();

var LinkButton =
/*#__PURE__*/
function (_Button) {
  _inherits(LinkButton, _Button);

  function LinkButton() {
    var _this;

    var mountPoint = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : document.querySelector("body");
    var title = arguments.length > 1 ? arguments[1] : undefined;
    var onClick = arguments.length > 2 ? arguments[2] : undefined;
    var color = arguments.length > 3 ? arguments[3] : undefined;
    var href = arguments.length > 4 ? arguments[4] : undefined;

    _classCallCheck(this, LinkButton);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(LinkButton).call(this, mountPoint, title, onClick, color));
    _this.href = href;
    _this.el = document.createElement("a");
    return _this;
  }

  return LinkButton;
}(Button);

var RoundButton =
/*#__PURE__*/
function (_Button2) {
  _inherits(RoundButton, _Button2);

  function RoundButton() {
    _classCallCheck(this, RoundButton);

    return _possibleConstructorReturn(this, _getPrototypeOf(RoundButton).apply(this, arguments));
  }

  _createClass(RoundButton, [{
    key: "render",
    value: function render() {
      _get(_getPrototypeOf(RoundButton.prototype), "render", this).call(this);

      this.el.classList.add("btn_rounded");
      console.log(this.el);
    }
  }]);

  return RoundButton;
}(Button);

var FakeRoundButton =
/*#__PURE__*/
function (_RoundButton) {
  _inherits(FakeRoundButton, _RoundButton);

  function FakeRoundButton() {
    _classCallCheck(this, FakeRoundButton);

    return _possibleConstructorReturn(this, _getPrototypeOf(FakeRoundButton).apply(this, arguments));
  }

  _createClass(FakeRoundButton, [{
    key: "hello",
    value: function hello() {
      console.log("Hello!");
    }
  }]);

  return FakeRoundButton;
}(RoundButton);



/***/ }),

/***/ "./src/common/button/button.scss":
/*!***************************************!*\
  !*** ./src/common/button/button.scss ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "./src/common/lighterDynamic/index.js":
/*!********************************************!*\
  !*** ./src/common/lighterDynamic/index.js ***!
  \********************************************/
/*! exports provided: trafficLighterDynamic */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _lighterDinamic__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./lighterDinamic */ "./src/common/lighterDynamic/lighterDinamic.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "trafficLighterDynamic", function() { return _lighterDinamic__WEBPACK_IMPORTED_MODULE_0__["trafficLighterDynamic"]; });



/***/ }),

/***/ "./src/common/lighterDynamic/lighterDinamic.js":
/*!*****************************************************!*\
  !*** ./src/common/lighterDynamic/lighterDinamic.js ***!
  \*****************************************************/
/*! exports provided: trafficLighterDynamic */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "trafficLighterDynamic", function() { return trafficLighterDynamic; });
/* harmony import */ var _lighterDynamic_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./lighterDynamic.scss */ "./src/common/lighterDynamic/lighterDynamic.scss");
/* harmony import */ var _lighterDynamic_scss__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_lighterDynamic_scss__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _button_button__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../button/button */ "./src/common/button/button.js");
/* harmony import */ var _root__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./root */ "./src/common/lighterDynamic/root.js");
/* harmony import */ var _lights__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./lights */ "./src/common/lighterDynamic/lights.js");




var ROOT_CLASS_NAME = "traffic-lighter";
var ACTIVE_CLASS_NAME = "active";
var trafficLighterDynamic = function trafficLighterDynamic() {
  var trafficLighterMountPoint = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : document.querySelector("body");
  var isActive = false;

  var toggleOff = function toggleOff() {
    var _iteratorNormalCompletion = true;
    var _didIteratorError = false;
    var _iteratorError = undefined;

    try {
      for (var _iterator = lights[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
        var light = _step.value;
        light.classList.remove(ACTIVE_CLASS_NAME);
      }
    } catch (err) {
      _didIteratorError = true;
      _iteratorError = err;
    } finally {
      try {
        if (!_iteratorNormalCompletion && _iterator["return"] != null) {
          _iterator["return"]();
        }
      } finally {
        if (_didIteratorError) {
          throw _iteratorError;
        }
      }
    }
  };

  var onLightClick = function onLightClick(light) {
    if (isActive === false) {
      return;
    }

    toggleOff();
    light.classList.add(ACTIVE_CLASS_NAME);
  };

  var clickHandler = function clickHandler() {
    isActive = !isActive;
    toggleOff();
  };

  var lighterRoot = Object(_root__WEBPACK_IMPORTED_MODULE_2__["createRoot"])(trafficLighterMountPoint, ROOT_CLASS_NAME);
  var lights = Object(_lights__WEBPACK_IMPORTED_MODULE_3__["createLights"])(lighterRoot, 3, onLightClick, ROOT_CLASS_NAME);
  Object(_button_button__WEBPACK_IMPORTED_MODULE_1__["createButton"])(lighterRoot, "Toggle", clickHandler);
};

/***/ }),

/***/ "./src/common/lighterDynamic/lighterDynamic.scss":
/*!*******************************************************!*\
  !*** ./src/common/lighterDynamic/lighterDynamic.scss ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "./src/common/lighterDynamic/lights.js":
/*!*********************************************!*\
  !*** ./src/common/lighterDynamic/lights.js ***!
  \*********************************************/
/*! exports provided: createLights */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createLights", function() { return createLights; });
var createLights = function createLights() {
  var mountPoint = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : document.querySelector("body");
  var lightsCount = arguments.length > 1 ? arguments[1] : undefined;
  var onClick = arguments.length > 2 ? arguments[2] : undefined;
  var rootClassName = arguments.length > 3 ? arguments[3] : undefined;
  var lights = [];

  var _loop = function _loop(i) {
    var light = document.createElement("div");
    light.classList.add("".concat(rootClassName, "__light"));

    light.onclick = function () {
      onClick(light);
    };

    lights.push(light);
    mountPoint.appendChild(light);
  };

  for (var i = 0; i < lightsCount; i++) {
    _loop(i);
  }

  return lights;
};

/***/ }),

/***/ "./src/common/lighterDynamic/root.js":
/*!*******************************************!*\
  !*** ./src/common/lighterDynamic/root.js ***!
  \*******************************************/
/*! exports provided: createRoot */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createRoot", function() { return createRoot; });
var createRoot = function createRoot() {
  var mountPoint = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : document.querySelector("body");
  var className = arguments.length > 1 ? arguments[1] : undefined;
  var lighterRoot = document.createElement("div");
  lighterRoot.classList.add(className);
  mountPoint.appendChild(lighterRoot);
  return lighterRoot;
};

/***/ }),

/***/ "./src/lesson_11/calc.js":
/*!*******************************!*\
  !*** ./src/lesson_11/calc.js ***!
  \*******************************/
/*! exports provided: calc */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "calc", function() { return calc; });
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance"); }

function _iterableToArrayLimit(arr, i) { if (!(Symbol.iterator in Object(arr) || Object.prototype.toString.call(arr) === "[object Arguments]")) { return; } var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

// Functions
// Funtion params
// Function return
// Scopes, global|local
// Modules|WEBPACK
// FUNCTION DECLARATION vs FUNCTION EXPRESSION vs ARROW FUNCTIONS
// CLOJURES
// CONTEXT
function requestOperands() {
  var valueA = requestOperand("Enter A");
  var valueB = requestOperand("Enter B");
  return [valueA, valueB];
}

function requestValue(message) {
  var str = prompt(message);
  var number = parseInt(str);
  return number;
}

function requestOperand(message) {
  var number = requestValue(message);

  while (isNaN(number)) {
    number = requestValue(message);
  }

  return number;
}

function add(a, b) {
  return a + b;
}

function print(data) {
  display.textContent = "RESULT: " + data;
}

function calc() {
  var _requestOperands = requestOperands(),
      _requestOperands2 = _slicedToArray(_requestOperands, 2),
      operandA = _requestOperands2[0],
      operandB = _requestOperands2[1]; // 20, 15


  var result = add(operandA, operandB);
  print(result);
}

/***/ }),

/***/ "./src/lesson_11/lesson_11.js":
/*!************************************!*\
  !*** ./src/lesson_11/lesson_11.js ***!
  \************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _lesson_11_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./lesson_11.scss */ "./src/lesson_11/lesson_11.scss");
/* harmony import */ var _lesson_11_scss__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_lesson_11_scss__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _calc__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./calc */ "./src/lesson_11/calc.js");
/* harmony import */ var _common_lighterDynamic__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../common/lighterDynamic */ "./src/common/lighterDynamic/index.js");



Object(_common_lighterDynamic__WEBPACK_IMPORTED_MODULE_2__["trafficLighterDynamic"])();
Object(_calc__WEBPACK_IMPORTED_MODULE_1__["calc"])();

/***/ }),

/***/ "./src/lesson_11/lesson_11.scss":
/*!**************************************!*\
  !*** ./src/lesson_11/lesson_11.scss ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ 5:
/*!******************************************!*\
  !*** multi ./src/lesson_11/lesson_11.js ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! ./src/lesson_11/lesson_11.js */"./src/lesson_11/lesson_11.js");


/***/ })

/******/ });
//# sourceMappingURL=lesson_11.js.map