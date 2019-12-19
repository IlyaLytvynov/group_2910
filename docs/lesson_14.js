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
/******/ 	return __webpack_require__(__webpack_require__.s = 8);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/common/myCoolMetric/index.js":
/*!******************************************!*\
  !*** ./src/common/myCoolMetric/index.js ***!
  \******************************************/
/*! exports provided: analize */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _myCoolMetric__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./myCoolMetric */ "./src/common/myCoolMetric/myCoolMetric.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "analize", function() { return _myCoolMetric__WEBPACK_IMPORTED_MODULE_0__["analize"]; });



/***/ }),

/***/ "./src/common/myCoolMetric/myCoolMetric.js":
/*!*************************************************!*\
  !*** ./src/common/myCoolMetric/myCoolMetric.js ***!
  \*************************************************/
/*! exports provided: analize */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "analize", function() { return analize; });
var analize = function analize() {
  var totalClicks = 0;

  window.getTotalClicks = function () {
    return totalClicks;
  };

  var buttons = document.querySelectorAll("button");
  buttons.forEach(function (button) {
    button.addEventListener("click", function () {
      totalClicks += 1;
    });
  });
};

/***/ }),

/***/ "./src/common/slideshow/index.js":
/*!***************************************!*\
  !*** ./src/common/slideshow/index.js ***!
  \***************************************/
/*! exports provided: slideShow */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _slideshow__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./slideshow */ "./src/common/slideshow/slideshow.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "slideShow", function() { return _slideshow__WEBPACK_IMPORTED_MODULE_0__["slideShow"]; });



/***/ }),

/***/ "./src/common/slideshow/slideshow.js":
/*!*******************************************!*\
  !*** ./src/common/slideshow/slideshow.js ***!
  \*******************************************/
/*! exports provided: slideShow */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "slideShow", function() { return slideShow; });
/* harmony import */ var _slideshow_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./slideshow.scss */ "./src/common/slideshow/slideshow.scss");
/* harmony import */ var _slideshow_scss__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_slideshow_scss__WEBPACK_IMPORTED_MODULE_0__);

var images = [{
  title: "Fantastic beasts and where to find them",
  description: "Fantastic Beasts and Where to Find Them is a 2016 fantasy film directed by David Yates. A joint British and American production, it is a spin-off and prequel to the Harry Potter film series, and is produced and written by J. K. Rowling in her screenwriting debut, inspired by her 2001 guide book of the same name. The film features an ensemble cast that includes Eddie Redmayne, Katherine Waterston, Dan Fogler, Alison Sudol, Ezra Miller, Samantha Morton, Jon Voight, Carmen Ejogo, and Colin Farrell. It is the first installment in the Fantastic Beasts film series, and ninth overall in the Wizarding World franchise, that began with the Harry Potter films.",
  rating: "4.7",
  preview: {
    high: "https://res.cloudinary.com/dx4wkpab8/image/upload/v1574199507/movies/bitmap_2x_qt5gqd.jpg",
    low: "https://res.cloudinary.com/dx4wkpab8/image/upload/v1574199506/movies/bitmap_wixqtd.jpg"
  },
  genre: "fantasy"
}, {
  title: "Justice League",
  description: "ustice League is a 2017 American superhero film based on the DC Comics superhero team of the same name, distributed by Warner Bros. Pictures. It is the follow-up to 2016's Batman v Superman: Dawn of Justice and the fifth installment in the DC Extended Universe (DCEU).[5][6][7] The film is directed by Zack Snyder, written by Chris Terrio and Joss Whedon, and features an ensemble cast that includes Ben Affleck, Henry Cavill, Gal Gadot, Ezra Miller, Jason Momoa, Ray Fisher, Amy Adams, Jeremy Irons, Diane Lane, Connie Nielsen, and J. K. Simmons. In the film, Batman and Wonder Woman recruit The Flash, Aquaman, and Cyborg after Superman's death to save the world from the catastrophic threat of Steppenwolf and his army of Parademons.",
  rating: "2.4",
  preview: {
    low: "https://res.cloudinary.com/dx4wkpab8/image/upload/v1574199102/movies/bitmap_qm5atv.jpg",
    high: "https://res.cloudinary.com/dx4wkpab8/image/upload/v1574199121/movies/bitmap_2x_rczowy.jpg"
  },
  genre: "comics"
}, {
  title: "Beauty and the beast",
  description: "",
  rating: "3.1",
  preview: {
    low: "https://res.cloudinary.com/dx4wkpab8/image/upload/v1574198944/movies/bitmap_ocrjt9.jpg",
    high: "https://res.cloudinary.com/dx4wkpab8/image/upload/v1574198977/movies/bitmap_2x_n5bkmr.jpg"
  },
  genre: "fairytail"
}, {
  title: "Beauty and the beast",
  description: "",
  rating: "3.9",
  preview: {
    low: "https://res.cloudinary.com/dx4wkpab8/image/upload/v1574198944/movies/bitmap_ocrjt9.jpg",
    high: "https://res.cloudinary.com/dx4wkpab8/image/upload/v1574198977/movies/bitmap_2x_n5bkmr.jpg"
  },
  genre: "fairytail"
}, {
  title: "Justice League",
  description: "ustice League is a 2017 American superhero film based on the DC Comics superhero team of the same name, distributed by Warner Bros. Pictures. It is the follow-up to 2016's Batman v Superman: Dawn of Justice and the fifth installment in the DC Extended Universe (DCEU).[5][6][7] The film is directed by Zack Snyder, written by Chris Terrio and Joss Whedon, and features an ensemble cast that includes Ben Affleck, Henry Cavill, Gal Gadot, Ezra Miller, Jason Momoa, Ray Fisher, Amy Adams, Jeremy Irons, Diane Lane, Connie Nielsen, and J. K. Simmons. In the film, Batman and Wonder Woman recruit The Flash, Aquaman, and Cyborg after Superman's death to save the world from the catastrophic threat of Steppenwolf and his army of Parademons.",
  rating: "3.3",
  preview: {
    low: "https://res.cloudinary.com/dx4wkpab8/image/upload/v1574199102/movies/bitmap_qm5atv.jpg",
    high: "https://res.cloudinary.com/dx4wkpab8/image/upload/v1574199121/movies/bitmap_2x_rczowy.jpg"
  },
  genre: "comics"
}];

var renderSlide = function renderSlide(item, i) {
  var expand = false;
  var slide = document.createElement("div");
  var label = document.createElement("div");
  var description = document.createElement("p");
  label.textContent = item.rating;
  label.classList.add("slide__rating");
  description.innerHTML = showText();
  description.classList.add("slide__description");
  slide.classList.add("slide");
  slide.style.transform = "translateX(-".concat(i * 100, "%)");
  var img = document.createElement("img");
  img.src = item.preview.high;
  img.classList.add("slide__image");
  slide.appendChild(img);
  slide.appendChild(label);
  slide.appendChild(description);

  function showText() {
    return "<b>".concat(item.description.slice(0, 20), "</b>").concat(expand ? item.description.slice(20) : "...");
  }

  function toggleExpand() {
    expand = !expand;
    description.innerHTML = showText();
  }

  description.addEventListener("click", toggleExpand);
  return slide;
};

var renderSlides = function renderSlides(mountPoint) {
  var slides = [];
  images.forEach(function (item, i) {
    var slide = renderSlide(item, i);
    slides.push(slide);
    mountPoint.appendChild(slide);
  });
  return slides;
};

var renderControl = function renderControl() {
  var control = document.createElement("button");
  control.classList.add("control");
  return control;
};

var renderContainer = function renderContainer() {
  var container = document.createElement("div");
  container.classList.add("slideshow");
  return container;
};

var slideShow = function slideShow(mountPoint) {
  var activeSlideIndex = 0;
  var container = renderContainer();
  var slides = renderSlides(container);
  var next = renderControl();
  var prev = renderControl();
  var intervalId;
  window.next = next;
  window.prev = prev;
  setActive();

  function startInterval() {
    intervalId = setInterval(function () {
      nextSlide();
    }, 2000);
  }

  function setActive() {
    slides[activeSlideIndex].classList.add("active");
  }

  function toggleOff() {
    slides[activeSlideIndex].classList.remove("active");
  }

  function nextSlide() {
    toggleOff();

    if (activeSlideIndex + 1 < slides.length) {
      activeSlideIndex += 1;
    } else {
      activeSlideIndex = 0;
    }

    setActive();
  }

  function prevSlide() {
    toggleOff();

    if (activeSlideIndex - 1 >= 0) {
      activeSlideIndex -= 1;
    } else {
      activeSlideIndex = slides.length - 1;
    }

    setActive();
  }

  function handleEvents() {
    next.addEventListener("click", nextSlide);
    prev.addEventListener("click", prevSlide);
    container.addEventListener("mouseenter", function () {
      clearInterval(intervalId);
    });
    container.addEventListener("mouseleave", function () {
      startInterval();
    });
  }

  function render() {
    container.appendChild(prev);
    container.appendChild(next);
    mountPoint.appendChild(container);
  }

  function init() {
    handleEvents();
    render();
    startInterval();
  }

  init();
};

/***/ }),

/***/ "./src/common/slideshow/slideshow.scss":
/*!*********************************************!*\
  !*** ./src/common/slideshow/slideshow.scss ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "./src/lesson_14/lesson_14.js":
/*!************************************!*\
  !*** ./src/lesson_14/lesson_14.js ***!
  \************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _lesson_14_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./lesson_14.scss */ "./src/lesson_14/lesson_14.scss");
/* harmony import */ var _lesson_14_scss__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_lesson_14_scss__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _common_slideshow__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../common/slideshow */ "./src/common/slideshow/index.js");
/* harmony import */ var _common_myCoolMetric__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../common/myCoolMetric */ "./src/common/myCoolMetric/index.js");



var point = document.querySelector("#rootSlide");
Object(_common_slideshow__WEBPACK_IMPORTED_MODULE_1__["slideShow"])(point);
Object(_common_myCoolMetric__WEBPACK_IMPORTED_MODULE_2__["analize"])();

/***/ }),

/***/ "./src/lesson_14/lesson_14.scss":
/*!**************************************!*\
  !*** ./src/lesson_14/lesson_14.scss ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ 8:
/*!******************************************!*\
  !*** multi ./src/lesson_14/lesson_14.js ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! ./src/lesson_14/lesson_14.js */"./src/lesson_14/lesson_14.js");


/***/ })

/******/ });
//# sourceMappingURL=lesson_14.js.map