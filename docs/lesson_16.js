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
/******/ 	return __webpack_require__(__webpack_require__.s = 10);
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

/***/ "./src/common/button/index.js":
/*!************************************!*\
  !*** ./src/common/button/index.js ***!
  \************************************/
/*! exports provided: createButton, Button, RoundButton, LinkButton, FakeRoundButton */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _button__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./button */ "./src/common/button/button.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "createButton", function() { return _button__WEBPACK_IMPORTED_MODULE_0__["createButton"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Button", function() { return _button__WEBPACK_IMPORTED_MODULE_0__["Button"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "RoundButton", function() { return _button__WEBPACK_IMPORTED_MODULE_0__["RoundButton"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "LinkButton", function() { return _button__WEBPACK_IMPORTED_MODULE_0__["LinkButton"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "FakeRoundButton", function() { return _button__WEBPACK_IMPORTED_MODULE_0__["FakeRoundButton"]; });



/***/ }),

/***/ "./src/lesson_16/lesson_16.js":
/*!************************************!*\
  !*** ./src/lesson_16/lesson_16.js ***!
  \************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _lesson_16_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./lesson_16.scss */ "./src/lesson_16/lesson_16.scss");
/* harmony import */ var _lesson_16_scss__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_lesson_16_scss__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _common_button__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../common/button */ "./src/common/button/index.js");
function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }



var cancelButton = new _common_button__WEBPACK_IMPORTED_MODULE_1__["Button"](document.querySelector("body"), "Log in", function () {
  prompt("Enter username");
}, "rgb(255, 0, 0)");
cancelButton.render();
var roundedButton = new _common_button__WEBPACK_IMPORTED_MODULE_1__["RoundButton"](document.querySelector("body"), "Log in", function () {
  prompt("Enter username");
}, "#ff00ff");
roundedButton.render();
var roundedButtonFake = new _common_button__WEBPACK_IMPORTED_MODULE_1__["FakeRoundButton"](document.querySelector("body"), "Log in", function () {
  prompt("Enter username");
}, "#ff00ff");
roundedButtonFake.render();
var linked = new _common_button__WEBPACK_IMPORTED_MODULE_1__["LinkButton"](document.querySelector("body"), "Log in", function () {
  prompt("Enter username");
}, "rgb(0, 0, 255)");
linked.render();
console.log(linked, roundedButton, roundedButtonFake, cancelButton);

var Person =
/*#__PURE__*/
function () {
  function Person(name, gender) {
    _classCallCheck(this, Person);

    this.name = name;
    this.gender = gender;
  }

  _createClass(Person, [{
    key: "greet",
    value: function greet() {
      console.log("Hello my name is " + this.name);
    }
  }]);

  return Person;
}();

var Pm =
/*#__PURE__*/
function (_Person) {
  _inherits(Pm, _Person);

  function Pm() {
    _classCallCheck(this, Pm);

    return _possibleConstructorReturn(this, _getPrototypeOf(Pm).apply(this, arguments));
  }

  _createClass(Pm, [{
    key: "toManage",
    value: function toManage() {
      console.log("Manage the project!! Jira is up to day!");
    }
  }]);

  return Pm;
}(Person);

var Developer =
/*#__PURE__*/
function (_Person2) {
  _inherits(Developer, _Person2);

  function Developer(name, gender, lang) {
    var _this;

    _classCallCheck(this, Developer);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(Developer).call(this, name, gender));
    _this.lang = lang;
    return _this;
  }

  _createClass(Developer, [{
    key: "toCode",
    value: function toCode() {
      console.log("Code in " + this.lang);
    }
  }]);

  return Developer;
}(Person); // Composition|Delegation


var DevManager =
/*#__PURE__*/
function (_Person3) {
  _inherits(DevManager, _Person3);

  function DevManager(name, gender, lang) {
    var _this2;

    _classCallCheck(this, DevManager);

    _this2 = _possibleConstructorReturn(this, _getPrototypeOf(DevManager).call(this, name, gender));
    _this2.dev = new Developer(name, gender, lang);
    _this2.pm = new Pm(name, gender, lang);
    return _this2;
  }

  _createClass(DevManager, [{
    key: "toCode",
    value: function toCode() {
      this.dev.toCode();
    }
  }, {
    key: "toManage",
    value: function toManage() {
      this.pm.toManage();
    }
  }]);

  return DevManager;
}(Person);

var ilya = new Developer("Ilya", "male", "JS");
ilya.greet();
ilya.toCode();
var alice = new DevManager("Alice", "female", ".NET");
alice.greet();
alice.toManage();
var currentDate = new Date();
console.log(currentDate);
console.log(currentDate.getHours());
console.log(currentDate.getMinutes());
console.log(currentDate.getSeconds());

/***/ }),

/***/ "./src/lesson_16/lesson_16.scss":
/*!**************************************!*\
  !*** ./src/lesson_16/lesson_16.scss ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ 10:
/*!******************************************!*\
  !*** multi ./src/lesson_16/lesson_16.js ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! ./src/lesson_16/lesson_16.js */"./src/lesson_16/lesson_16.js");


/***/ })

/******/ });
//# sourceMappingURL=lesson_16.js.map