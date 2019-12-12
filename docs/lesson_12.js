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
/******/ 	__webpack_require__.p = "/";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 6);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/lesson_12/buttons.js":
/*!**********************************!*\
  !*** ./src/lesson_12/buttons.js ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports) {

var buttons = document.querySelectorAll(".my-btn");
var masterButton = document.querySelector(".master-btn");
var colors = ["red", "green", "magenta", "rgba(255, 0, 249, 0.5)", "aqua", "yellowgreen"];

var getRandomNumber = function getRandomNumber(max) {
  return Math.floor(Math.random() * max);
};

var getRandomColor = function getRandomColor() {
  return "rgb(".concat(getRandomNumber(255), ", ").concat(getRandomNumber(255), ", ").concat(getRandomNumber(255), ")");
};

var toggleOn = function toggleOn(button, i) {
  console.log(button, i);
  button.style.backgroundColor = getRandomColor();
  button.style.transform = "translateX(".concat(100 * (i + 1), "%)");
  button.style.transition = "all 0.5s";
  button.setAttribute("data-is-active", true);
};

var toggleOff = function toggleOff(button) {
  button.style.backgroundColor = "transparent";
  button.style.transform = "translateX(0)";
  button.style.transition = "all 0.2s";
  button.removeAttribute("data-is-active");
};

masterButton.onclick = function () {
  var isActive = masterButton.getAttribute("data-is-active");

  for (var i = 0; i < buttons.length; i++) {
    console.log(i);

    if (isActive) {
      toggleOff(buttons[i]);
    } else {
      console.log(i);
      toggleOn(buttons[i], i);
    }
  }

  if (isActive) {
    masterButton.removeAttribute("data-is-active");
  } else {
    masterButton.setAttribute("data-is-active", true);
  }
};

var _loop = function _loop(i) {
  buttons[i].onclick = function () {
    var button = buttons[i];

    if (button.getAttribute("data-is-active")) {
      toggleOff(button);
    } else {
      toggleOn(button, i);
    }
  };
};

for (var i = 0; i < buttons.length; i++) {
  _loop(i);
}

/***/ }),

/***/ "./src/lesson_12/lesson_12.js":
/*!************************************!*\
  !*** ./src/lesson_12/lesson_12.js ***!
  \************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _lesson_12_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./lesson_12.scss */ "./src/lesson_12/lesson_12.scss");
/* harmony import */ var _lesson_12_scss__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_lesson_12_scss__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _buttons__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./buttons */ "./src/lesson_12/buttons.js");
/* harmony import */ var _buttons__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_buttons__WEBPACK_IMPORTED_MODULE_1__);



/***/ }),

/***/ "./src/lesson_12/lesson_12.scss":
/*!**************************************!*\
  !*** ./src/lesson_12/lesson_12.scss ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ 6:
/*!******************************************!*\
  !*** multi ./src/lesson_12/lesson_12.js ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! ./src/lesson_12/lesson_12.js */"./src/lesson_12/lesson_12.js");


/***/ })

/******/ });
//# sourceMappingURL=lesson_12.js.map