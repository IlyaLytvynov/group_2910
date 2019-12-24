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
/******/ 	return __webpack_require__(__webpack_require__.s = 9);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/common/button/button.js":
/*!*************************************!*\
  !*** ./src/common/button/button.js ***!
  \*************************************/
/*! exports provided: createButton, Button */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createButton", function() { return createButton; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Button", function() { return Button; });
/* harmony import */ var _button_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./button.scss */ "./src/common/button/button.scss");
/* harmony import */ var _button_scss__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_button_scss__WEBPACK_IMPORTED_MODULE_0__);
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }



var createButton = function createButton() {
  var mountPoint = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : document.querySelector("body");
  var title = arguments.length > 1 ? arguments[1] : undefined;
  var onClick = arguments.length > 2 ? arguments[2] : undefined;
  var type = arguments.length > 3 ? arguments[3] : undefined;
  var button = document.createElement("button");
  button.onclick = onClick;
  button.textContent = title;
  button.classList.add("btn");

  if (type === "success") {
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
    var type = arguments.length > 3 ? arguments[3] : undefined;

    _classCallCheck(this, Button);

    this.mountPoint = mountPoint;
    this.title = title;
    this.onClick = onClick;
    this.type = type;
  }

  _createClass(Button, [{
    key: "render",
    value: function render() {
      this.el = document.createElement("button");
      this.el.onclick = this.onClick;
      this.el.textContent = this.title;
      this.el.classList.add("btn");

      if (this.type === "success") {
        this.el.classList.add("btn_success");
      }

      this.mountPoint.appendChild(this.el);
    }
  }]);

  return Button;
}();



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
/*! exports provided: createButton, Button */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _button__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./button */ "./src/common/button/button.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "createButton", function() { return _button__WEBPACK_IMPORTED_MODULE_0__["createButton"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Button", function() { return _button__WEBPACK_IMPORTED_MODULE_0__["Button"]; });



/***/ }),

/***/ "./src/common/lamp/index.js":
/*!**********************************!*\
  !*** ./src/common/lamp/index.js ***!
  \**********************************/
/*! exports provided: Lamp */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _lamp__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./lamp */ "./src/common/lamp/lamp.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Lamp", function() { return _lamp__WEBPACK_IMPORTED_MODULE_0__["Lamp"]; });



/***/ }),

/***/ "./src/common/lamp/lamp.js":
/*!*********************************!*\
  !*** ./src/common/lamp/lamp.js ***!
  \*********************************/
/*! exports provided: Lamp */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Lamp", function() { return Lamp; });
/* harmony import */ var _lamp_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./lamp.scss */ "./src/common/lamp/lamp.scss");
/* harmony import */ var _lamp_scss__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_lamp_scss__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../utils */ "./src/common/utils/index.js");
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }



var Lamp =
/*#__PURE__*/
function () {
  function Lamp(mountPoint) {
    var color = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : Object(_utils__WEBPACK_IMPORTED_MODULE_1__["getRandomColor"])();
    var isClickable = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : true;

    _classCallCheck(this, Lamp);

    this.mountPoint = mountPoint;
    this.color = color;
    this.isActive = false;
    this.isClickable = isClickable;
    console.log(this);
  }

  _createClass(Lamp, [{
    key: "render",
    value: function render() {
      var _this = this;

      this.el = document.createElement("button");
      this.el.classList.add("lamp");
      this.el.addEventListener("click", function () {
        if (_this.isClickable) {
          _this.toggle();
        }
      });
      this.mountPoint.appendChild(this.el);
    }
  }, {
    key: "toggleOn",
    value: function toggleOn() {
      this.el.style.background = this.color;
      this.isActive = true;
    }
  }, {
    key: "toggleOff",
    value: function toggleOff() {
      this.el.style.background = "";
      this.isActive = false;
    }
  }, {
    key: "toggle",
    value: function toggle() {
      if (this.isActive) {
        this.toggleOff();
      } else {
        this.toggleOn();
      }
    }
  }]);

  return Lamp;
}();

/***/ }),

/***/ "./src/common/lamp/lamp.scss":
/*!***********************************!*\
  !*** ./src/common/lamp/lamp.scss ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "./src/common/lighter/index.js":
/*!*************************************!*\
  !*** ./src/common/lighter/index.js ***!
  \*************************************/
/*! exports provided: Lighter */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _lighter__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./lighter */ "./src/common/lighter/lighter.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Lighter", function() { return _lighter__WEBPACK_IMPORTED_MODULE_0__["Lighter"]; });



/***/ }),

/***/ "./src/common/lighter/lighter.js":
/*!***************************************!*\
  !*** ./src/common/lighter/lighter.js ***!
  \***************************************/
/*! exports provided: Lighter */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Lighter", function() { return Lighter; });
/* harmony import */ var _lighterDynamic_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./lighterDynamic.scss */ "./src/common/lighter/lighterDynamic.scss");
/* harmony import */ var _lighterDynamic_scss__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_lighterDynamic_scss__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _lamp__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../lamp */ "./src/common/lamp/index.js");
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }



var LIGHTS = ["red", "yellow", "green"];
var Lighter =
/*#__PURE__*/
function () {
  function Lighter() {
    var mp = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : document.querySelector("body");

    _classCallCheck(this, Lighter);

    this.mountPoint = mp;
    this.lamps = [];
    this.activeIndex = 0;
  }

  _createClass(Lighter, [{
    key: "render",
    value: function render() {
      this.el = document.createElement("div");
      this.el.classList.add("traffic-lighter");
      this.renderLights();
      this.mountPoint.appendChild(this.el);
    }
  }, {
    key: "renderLights",
    value: function renderLights() {
      var _this = this;

      LIGHTS.forEach(function (color) {
        var lamp = new _lamp__WEBPACK_IMPORTED_MODULE_1__["Lamp"](_this.el, color, false);
        lamp.render();

        _this.lamps.push(lamp);
      });
    }
  }, {
    key: "start",
    value: function start() {
      var _this2 = this;

      setInterval(function () {
        _this2.nextLight();
      }, 500);
    }
  }, {
    key: "toggleOff",
    value: function toggleOff() {
      this.lamps[this.activeIndex].toggleOff();
    }
  }, {
    key: "toggleOn",
    value: function toggleOn() {
      this.lamps[this.activeIndex].toggleOn();
    }
  }, {
    key: "nextLight",
    value: function nextLight() {
      this.toggleOff();

      if (this.activeIndex + 1 < this.lamps.length) {
        this.activeIndex += 1;
      } else {
        this.activeIndex = 0;
      }

      this.toggleOn();
    }
  }]);

  return Lighter;
}();

/***/ }),

/***/ "./src/common/lighter/lighterDynamic.scss":
/*!************************************************!*\
  !*** ./src/common/lighter/lighterDynamic.scss ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "./src/common/utils/index.js":
/*!***********************************!*\
  !*** ./src/common/utils/index.js ***!
  \***********************************/
/*! exports provided: getRandomNumber, getRandomColor */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getRandomNumber", function() { return getRandomNumber; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getRandomColor", function() { return getRandomColor; });
var getRandomNumber = function getRandomNumber(max) {
  return Math.floor(Math.random() * max);
};
var getRandomColor = function getRandomColor() {
  return "rgb(".concat(getRandomNumber(255), ", ").concat(getRandomNumber(255), ", ").concat(getRandomNumber(255), ")");
};

/***/ }),

/***/ "./src/lesson_15/lesson_15.js":
/*!************************************!*\
  !*** ./src/lesson_15/lesson_15.js ***!
  \************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _lesson_15_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./lesson_15.scss */ "./src/lesson_15/lesson_15.scss");
/* harmony import */ var _lesson_15_scss__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_lesson_15_scss__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _common_lamp__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../common/lamp */ "./src/common/lamp/index.js");
/* harmony import */ var _common_button__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../common/button */ "./src/common/button/index.js");
/* harmony import */ var _common_lighter__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../common/lighter */ "./src/common/lighter/index.js");




var mp = document.querySelector("body");
var lamps = [];

for (var i = 0; i < 50; i++) {
  var lamp = new _common_lamp__WEBPACK_IMPORTED_MODULE_1__["Lamp"](mp);
  lamp.render();
  lamps.push(lamp);
}

window.lamps = lamps;
var btn = new _common_button__WEBPACK_IMPORTED_MODULE_2__["Button"](mp, "TOGGLE ALL", function () {
  lamps.forEach(function (lamp, i) {
    setTimeout(function () {
      lamp.toggle();
    }, 200 * i);
  });
});
btn.render();
var lighter = new _common_lighter__WEBPACK_IMPORTED_MODULE_3__["Lighter"](mp);
lighter.render();
lighter.start();

/***/ }),

/***/ "./src/lesson_15/lesson_15.scss":
/*!**************************************!*\
  !*** ./src/lesson_15/lesson_15.scss ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ 9:
/*!******************************************!*\
  !*** multi ./src/lesson_15/lesson_15.js ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! ./src/lesson_15/lesson_15.js */"./src/lesson_15/lesson_15.js");


/***/ })

/******/ });
//# sourceMappingURL=lesson_15.js.map