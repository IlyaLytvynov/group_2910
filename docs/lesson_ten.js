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
/******/ 	return __webpack_require__(__webpack_require__.s = 4);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/lesson_ten/lesson_ten.js":
/*!**************************************!*\
  !*** ./src/lesson_ten/lesson_ten.js ***!
  \**************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _lesson_ten_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./lesson_ten.scss */ "./src/lesson_ten/lesson_ten.scss");
/* harmony import */ var _lesson_ten_scss__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_lesson_ten_scss__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _numbers__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./numbers */ "./src/lesson_ten/numbers.js");
/* harmony import */ var _numbers__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_numbers__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _objects__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./objects */ "./src/lesson_ten/objects.js");
/* harmony import */ var _objects__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_objects__WEBPACK_IMPORTED_MODULE_2__);




function helloWorld() {
  var name = prompt("Enter name");
  alert("Hello ", name);
}

myButton.onclick = helloWorld;

/***/ }),

/***/ "./src/lesson_ten/lesson_ten.scss":
/*!****************************************!*\
  !*** ./src/lesson_ten/lesson_ten.scss ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "./src/lesson_ten/numbers.js":
/*!***********************************!*\
  !*** ./src/lesson_ten/numbers.js ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

function getNumbers() {
  // 1.Запросить значение
  // 2.преобразовать значение в число
  // 3.число добавить в массив
  // 4.Вернуться в 1 если пользователь вводит число, если пользлватель
  // 5. запсутить цикл для расчета среднего арифметического
  // 6. Открыть модальное окно с результатом
  var numbers = [];
  var enteredValue = prompt("Enter number");
  var value = parseInt(enteredValue);

  while (!isNaN(value)) {
    numbers.push(value);
    enteredValue = prompt("Enter number");
    value = parseInt(enteredValue);
  }

  var total = 0;

  for (var i = 0; i < numbers.length; i++) {
    total = total + numbers[i];
  }

  var result = total / numbers.length;
  alert(result.toFixed(3));
}

numbersButton.onclick = getNumbers;

/***/ }),

/***/ "./src/lesson_ten/objects.js":
/*!***********************************!*\
  !*** ./src/lesson_ten/objects.js ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

function getObjects() {
  var products = [];
  var i = 0;
  var productCount = parseInt(prompt("enter product count"));

  while (isNaN(productCount)) {
    productCount = prompt("enter product count");
  }

  do {
    var product = {};
    product.title = prompt("Enter title");
    if (product.title === null) break;

    while (!product.title) {
      product.title = prompt("Enter title");
    }

    product.price = prompt("Enter price");
    if (product.price === null) break;

    while (!product.price || isNaN(parseInt(product.price))) {
      product.price = prompt("Enter price");
    }

    products.push(product);
    i++;
  } while (i < productCount);

  var total = 0;

  for (var _i = 0; _i < products.length; _i++) {
    console.log(products[_i]);
    total = total + parseInt(products[_i].price);
  }

  console.log(total);
}

objectsButton.onclick = getObjects;

/***/ }),

/***/ 4:
/*!********************************************!*\
  !*** multi ./src/lesson_ten/lesson_ten.js ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! ./src/lesson_ten/lesson_ten.js */"./src/lesson_ten/lesson_ten.js");


/***/ })

/******/ });
//# sourceMappingURL=lesson_ten.js.map