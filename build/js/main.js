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
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./js/modules/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./js/modules/index.js":
/*!*****************************!*\
  !*** ./js/modules/index.js ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("var monthToggler = document.querySelectorAll(\".months-list__item\");\nmonthToggler = Array.prototype.slice.call(monthToggler, 0);\nmonthToggler.forEach(function (toggler) {\n  toggler.addEventListener(\"click\", function (evt) {\n    evt.preventDefault();\n    var tabIndex = document.querySelector(toggler.getAttribute(\"href\"));\n    document.querySelector(\".months-list .months-list__item--active\").classList.remove(\"months-list__item--active\");\n    document.querySelector(\".passtype-list--active\").classList.remove(\"passtype-list--active\");\n    toggler.classList.add(\"months-list__item--active\");\n    tabIndex.classList.add(\"passtype-list--active\");\n  });\n});\nvar mySwiper = new Swiper(\".coaches-block__slider\", {\n  // Optional parameters\n  direction: \"horizontal\",\n  loop: true,\n  grabCursor: true,\n  speed: 1500,\n  // Navigation arrows\n  navigation: {\n    nextEl: \".swiper-button-next\",\n    prevEl: \".swiper-button-prev\"\n  },\n  breakpoints: {\n    320: {\n      slidesPerView: 1,\n      spaceBetween: 47,\n      slidesPerGroup: 1\n    },\n    768: {\n      slidesPerView: 2,\n      spaceBetween: 30,\n      slidesPerGroup: 2\n    },\n    1200: {\n      slidesPerView: 4,\n      spaceBetween: 40,\n      slidesPerGroup: 4\n    }\n  }\n});\nvar mySwiper2 = new Swiper(\".reviews-block__slider\", {\n  // Optional parameters\n  direction: \"horizontal\",\n  loop: true,\n  grabCursor: true,\n  speed: 1500,\n  // Navigation arrows\n  navigation: {\n    nextEl: \".reviews-block__next\",\n    prevEl: \".reviews-block__prev\"\n  }\n});\nvar scroll = new SmoothScroll(\"a[href*=\\\"#\\\"]\", {\n  speed: 500\n});\nvar phoneInput = document.getElementById(\"phone\");\nvar phoneMask = IMask(phoneInput, {\n  mask: \"+{7}(000)000-00-00\",\n  lazy: false,\n  placeholderChar: \"#\"\n}); // let formTest = document.querySelector(`.form-block`);\n// formTest.addEventListener(`submit`, (evt) => {\n//   evt.preventDefault();\n//   if (!phoneInput.checkValidity()) {\n//     evt.preventDefault();\n//     phoneInput.setCustomValidity(`Заполните это поле.`);\n//     console.log(`worked`);\n//     console.dir(phoneInput);\n//     console.dir(phoneMask);\n//   }\n// });\n\n//# sourceURL=webpack:///./js/modules/index.js?");

/***/ })

/******/ });