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
/******/ 	return __webpack_require__(__webpack_require__.s = 6);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/common/button/button.js":
/*!*************************************!*\
  !*** ./src/common/button/button.js ***!
  \*************************************/
/*! exports provided: createButton */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createButton", function() { return createButton; });
/* harmony import */ var _button_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./button.scss */ "./src/common/button/button.scss");
/* harmony import */ var _button_scss__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_button_scss__WEBPACK_IMPORTED_MODULE_0__);


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



/***/ }),

/***/ "./src/common/button/button.scss":
/*!***************************************!*\
  !*** ./src/common/button/button.scss ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

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

/***/ "./src/lesson_12/button-dynamic.js":
/*!*****************************************!*\
  !*** ./src/lesson_12/button-dynamic.js ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

var btn = document.createElement("button");
console.log(btn);
btn.style.background = "red";
btn.textContent = "Coll button!";
var body = document.querySelector("body");
body.appendChild(btn);

/***/ }),

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
  var time = 100;
  button.style.backgroundColor = getRandomColor();
  button.style.transform = "translateX(".concat(100 * (i + 1), "%)");
  button.style.transition = "all ".concat(time, "ms");
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
/* harmony import */ var _button_dynamic__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./button-dynamic */ "./src/lesson_12/button-dynamic.js");
/* harmony import */ var _button_dynamic__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_button_dynamic__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _common_lighterDynamic_lighterDinamic__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../common/lighterDynamic/lighterDinamic */ "./src/common/lighterDynamic/lighterDinamic.js");




Object(_common_lighterDynamic_lighterDinamic__WEBPACK_IMPORTED_MODULE_3__["trafficLighterDynamic"])();
Object(_common_lighterDynamic_lighterDinamic__WEBPACK_IMPORTED_MODULE_3__["trafficLighterDynamic"])();
Object(_common_lighterDynamic_lighterDinamic__WEBPACK_IMPORTED_MODULE_3__["trafficLighterDynamic"])();
Object(_common_lighterDynamic_lighterDinamic__WEBPACK_IMPORTED_MODULE_3__["trafficLighterDynamic"])();
Object(_common_lighterDynamic_lighterDinamic__WEBPACK_IMPORTED_MODULE_3__["trafficLighterDynamic"])();
Object(_common_lighterDynamic_lighterDinamic__WEBPACK_IMPORTED_MODULE_3__["trafficLighterDynamic"])();
Object(_common_lighterDynamic_lighterDinamic__WEBPACK_IMPORTED_MODULE_3__["trafficLighterDynamic"])();

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