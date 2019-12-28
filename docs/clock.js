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
/******/ 	return __webpack_require__(__webpack_require__.s = 11);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/clock/clock.js":
/*!****************************!*\
  !*** ./src/clock/clock.js ***!
  \****************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _clock_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./clock.scss */ "./src/clock/clock.scss");
/* harmony import */ var _clock_scss__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_clock_scss__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _common_clock__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../common/clock */ "./src/common/clock/index.js");


var clock = _common_clock__WEBPACK_IMPORTED_MODULE_1__["Clock"].create(document.querySelector(".clock-container"));

/***/ }),

/***/ "./src/clock/clock.scss":
/*!******************************!*\
  !*** ./src/clock/clock.scss ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "./src/common/clock/clock.js":
/*!***********************************!*\
  !*** ./src/common/clock/clock.js ***!
  \***********************************/
/*! exports provided: Clock */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Clock", function() { return Clock; });
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../utils */ "./src/common/utils/index.js");
/* harmony import */ var _clock_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./clock.scss */ "./src/common/clock/clock.scss");
/* harmony import */ var _clock_scss__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_clock_scss__WEBPACK_IMPORTED_MODULE_1__);
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }



var MODES = {
  SHORT: 0,
  FULL: 1,
  DATE_SHORT: 2
};
var Clock =
/*#__PURE__*/
function () {
  _createClass(Clock, null, [{
    key: "create",
    value: function create(mp) {
      var clock = new Clock(mp);
      clock.init();
      return clock;
    }
  }]);

  function Clock() {
    var mp = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : document.querySelector("body");

    _classCallCheck(this, Clock);

    this.mp = mp;
    this.mode = MODES.FULL;
  }

  _createClass(Clock, [{
    key: "init",
    value: function init() {
      this.render();
      this.updateContent();
      this.initInterval();
    }
  }, {
    key: "render",
    value: function render() {
      var _this = this;

      this.container = document.createElement("div");
      this.content = document.createElement("div");
      this.container.classList.add("container");
      this.content.classList.add("content");
      this.container.appendChild(this.content);
      this.container.addEventListener("click", function () {
        _this.nextMode();
      });
      this.mp.appendChild(this.container);
      this.changeBg();
    }
  }, {
    key: "changeBg",
    value: function changeBg() {
      this.container.style.backgroundColor = Object(_utils__WEBPACK_IMPORTED_MODULE_0__["getRandomColor"])();
    }
  }, {
    key: "nextMode",
    value: function nextMode() {
      if (this.mode + 1 < Object.keys(MODES).length) {
        this.mode += 1;
      } else {
        this.mode = 0;
      }

      this.changeBg();
      this.updateContent();
    }
  }, {
    key: "getDate",
    value: function getDate() {
      var cd = new Date();
      var hour = this.normalizeTime(cd.getHours());
      var minute = this.normalizeTime(cd.getMinutes());
      var second = this.normalizeTime(cd.getSeconds());
      var day = this.normalizeTime(cd.getDay());
      var month = cd.getMonth();
      var year = cd.getFullYear();
      return {
        hour: hour,
        minute: minute,
        second: second,
        day: day,
        month: month,
        year: year
      };
    }
  }, {
    key: "renderFull",
    value: function renderFull() {
      var _this$getDate = this.getDate(),
          hour = _this$getDate.hour,
          minute = _this$getDate.minute,
          second = _this$getDate.second;

      this.content.textContent = "".concat(hour, ":").concat(minute, ":").concat(second);
    }
  }, {
    key: "renderShort",
    value: function renderShort() {
      var _this$getDate2 = this.getDate(),
          hour = _this$getDate2.hour,
          minute = _this$getDate2.minute;

      this.content.textContent = "".concat(hour, ":").concat(minute);
    }
  }, {
    key: "renderDateShort",
    value: function renderDateShort() {
      var _this$getDate3 = this.getDate(),
          day = _this$getDate3.day,
          month = _this$getDate3.month,
          year = _this$getDate3.year;

      this.content.textContent = "".concat(day, "/").concat(month, "/").concat(year);
    }
  }, {
    key: "initInterval",
    value: function initInterval() {
      var _this2 = this;

      setInterval(function () {
        _this2.updateContent();
      }, 1000);
    }
  }, {
    key: "updateContent",
    value: function updateContent() {
      switch (this.mode) {
        case MODES.FULL:
          this.renderFull();
          break;

        case MODES.DATE_SHORT:
          this.renderDateShort();
          break;

        default:
          this.renderShort();
      }
    }
  }, {
    key: "normalizeTime",
    value: function normalizeTime(time) {
      return time < 10 ? "0" + time : time;
    }
  }]);

  return Clock;
}();

/***/ }),

/***/ "./src/common/clock/clock.scss":
/*!*************************************!*\
  !*** ./src/common/clock/clock.scss ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "./src/common/clock/index.js":
/*!***********************************!*\
  !*** ./src/common/clock/index.js ***!
  \***********************************/
/*! exports provided: Clock */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _clock__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./clock */ "./src/common/clock/clock.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Clock", function() { return _clock__WEBPACK_IMPORTED_MODULE_0__["Clock"]; });



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

/***/ 11:
/*!**********************************!*\
  !*** multi ./src/clock/clock.js ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! ./src/clock/clock.js */"./src/clock/clock.js");


/***/ })

/******/ });
//# sourceMappingURL=clock.js.map