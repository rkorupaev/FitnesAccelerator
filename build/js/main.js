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

eval("var monthToggler = document.querySelectorAll(\".months-list__item\");\nmonthToggler = Array.prototype.slice.call(monthToggler, 0);\nmonthToggler.forEach(function (toggler) {\n  toggler.addEventListener(\"click\", function (evt) {\n    evt.preventDefault();\n    var tabIndex = document.querySelector(toggler.getAttribute(\"href\"));\n    document.querySelector(\".months-list .months-list__item--active\").classList.remove(\"months-list__item--active\");\n    document.querySelector(\".passtype-list--active\").classList.remove(\"passtype-list--active\");\n    toggler.classList.add(\"months-list__item--active\");\n    tabIndex.classList.add(\"passtype-list--active\");\n  });\n});\nvar coachesBlock = document.querySelector(\".coaches-block__slider\");\n\nvar mySwiper = function mySwiper(el) {\n  // eslint-disable-next-line no-undef\n  return new Swiper(el, {\n    // Optional parameters\n    direction: \"horizontal\",\n    loop: true,\n    grabCursor: true,\n    speed: 1500,\n    // Navigation arrows\n    navigation: {\n      nextEl: \".swiper-button-next\",\n      prevEl: \".swiper-button-prev\"\n    },\n    breakpoints: {\n      320: {\n        slidesPerView: 1,\n        spaceBetween: 47,\n        slidesPerGroup: 1\n      },\n      768: {\n        slidesPerView: 2,\n        spaceBetween: 30,\n        slidesPerGroup: 2\n      },\n      1200: {\n        slidesPerView: 4,\n        spaceBetween: 40,\n        slidesPerGroup: 4\n      }\n    }\n  });\n};\n\nif (coachesBlock) {\n  mySwiper(coachesBlock);\n}\n\nvar reviewsBlock = document.querySelector(\".reviews-block__slider\");\n\nvar mySwiper2 = function mySwiper2(el) {\n  // eslint-disable-next-line no-undef\n  return new Swiper(el, {\n    // Optional parameters\n    direction: \"horizontal\",\n    loop: true,\n    grabCursor: true,\n    speed: 1500,\n    spaceBetween: 100,\n    // Navigation arrows\n    navigation: {\n      nextEl: \".reviews-block__next\",\n      prevEl: \".reviews-block__prev\"\n    }\n  });\n};\n\nif (reviewsBlock) {\n  mySwiper2(reviewsBlock);\n}\n\nvar scroll = function scroll() {\n  // eslint-disable-next-line no-undef\n  return new SmoothScroll(\"a[href*=\\\"#\\\"]\", {\n    speed: 500\n  });\n};\n\nscroll();\nvar phoneInput = document.getElementById(\"phone\");\n\nvar phoneMask = function phoneMask(el) {\n  // eslint-disable-next-line no-undef\n  return new IMask(el, {\n    mask: \"+{7}(000)000-00-00\",\n    lazy: false\n  });\n};\n\nif (phoneInput) {\n  phoneMask(phoneInput);\n}\n\nvar form = document.querySelector(\".contacts-block__form-wrapper form\");\nvar formValidity = false;\n\nif (phoneInput) {\n  phoneInput.setCustomValidity(\"\\u0417\\u0430\\u043F\\u043E\\u043B\\u043D\\u0438\\u0442\\u0435 \\u044D\\u0442\\u043E \\u043F\\u043E\\u043B\\u0435.\");\n  phoneInput.addEventListener(\"input\", function () {\n    if (phoneInput.value.indexOf(\"_\") === -1) {\n      phoneInput.setCustomValidity(\"\");\n      formValidity = true;\n    }\n  });\n}\n\nif (form) {\n  form.addEventListener(\"submit\", function (evt) {\n    evt.preventDefault();\n\n    if (formValidity) {\n      setTimeout(function () {\n        form.reset();\n      }, 750);\n    }\n  });\n}\n\nvar timeCellsArray = document.querySelectorAll(\".time-list__item\");\nvar dayCellsArray = document.querySelectorAll(\".day-list__item\");\nvar exerciseListsArray = document.querySelectorAll(\".exercise-list\");\nvar dropDownArrow = document.querySelector(\".schedule-block__arrow\");\nvar dropDownArrowSpan = dropDownArrow.querySelector(\"span\");\nvar dropDownItemList = document.querySelectorAll(\".drop-down__item\");\n\nif (exerciseListsArray) {\n  exerciseListsArray.forEach(function (list, listIndex) {\n    var itemsArray = list.querySelectorAll(\".exercise-list__item\");\n    itemsArray.forEach(function (item, itemIndex) {\n      item.addEventListener(\"mouseover\", function (evt) {\n        item.classList.add(\"exercise-list__item--active\");\n        timeCellsArray[itemIndex].classList.add(\"time-list__item--active\");\n        dayCellsArray[listIndex].classList.add(\"day-list__item--active\");\n        dropDownItemList[listIndex].classList.add(\"drop-down__item--active-cell\");\n      });\n      item.addEventListener(\"mouseout\", function (evt) {\n        item.classList.remove(\"exercise-list__item--active\");\n        timeCellsArray[itemIndex].classList.remove(\"time-list__item--active\");\n        dayCellsArray[listIndex].classList.remove(\"day-list__item--active\");\n        dropDownItemList[listIndex].classList.remove(\"drop-down__item--active-cell\");\n      });\n    });\n  });\n}\n\nvar addAnimation = function addAnimation(element, animationClass) {\n  element.classList.add(animationClass);\n  setTimeout(function () {\n    element.classList.remove(animationClass);\n  }, 500);\n};\n\nvar startIndex = [0, 1, 2];\nvar endIndex = [4, 5, 6];\nvar sliderPin = document.querySelector(\".schedule-block__slider-pin\"); // if (sliderPin) {\n//   sliderPin.addEventListener(`click`, (evt) => {\n//     evt.preventDefault();\n//     // sliderPin.style.left = `100px`;\n//     // sliderPin.classList.toggle(`schedule-block__slider-pin--position-right`);\n//     // let count = 0;\n//     // exerciseListsArray.forEach((item, itemIndex) => {\n//     //   if (item.classList.contains(`exercise-list--tablet`) && itemIndex >= 4 && count < 3) {\n//     //     count++;\n//     //     exerciseListsArray[itemIndex].classList.remove(`exercise-list--tablet`);\n//     //     addAnimation(exerciseListsArray[3], `unfade`);\n//     //     addAnimation(exerciseListsArray[itemIndex], `unfade`);\n//     //     startIndex.forEach((item) => {\n//     //       exerciseListsArray[item].classList.add(`exercise-list--tablet`);\n//     //     });\n//     //   } else if (item.classList.contains(`exercise-list--tablet`) && itemIndex <= 2 && count < 3) {\n//     //     count++;\n//     //     exerciseListsArray[itemIndex].classList.remove(`exercise-list--tablet`);\n//     //     addAnimation(exerciseListsArray[3], `unfade`);\n//     //     addAnimation(exerciseListsArray[itemIndex], `unfade`);\n//     //     endIndex.forEach((item) => {\n//     //       exerciseListsArray[item].classList.add(`exercise-list--tablet`);\n//     //     });\n//     //   }\n//     // });\n//   });\n// }\n\nsliderPin.addEventListener(\"mousedown\", function (evt) {\n  var initLocationX = evt.clientX;\n\n  var onMouseMove = function onMouseMove(moveEvt) {\n    moveEvt.preventDefault();\n  };\n});\n\nvar removeArrayClass = function removeArrayClass(block, className) {\n  block.forEach(function (item) {\n    item.classList.remove(className);\n  });\n};\n\nvar initDropDown = function initDropDown() {\n  dropDownArrowSpan.classList.add(\"rotate\");\n  timeCellsArray.forEach(function (item) {\n    item.classList.add(\"time-list__item--drop-down-opened\");\n  });\n  exerciseListsArray.forEach(function (item) {\n    item.classList.add(\"exercise-list--drop-down-opened\");\n  });\n  dropDownItemList.forEach(function (item, index) {\n    item.classList.add(\"drop-down__item--active\");\n    item.classList.add(\"drop-down__item--border\");\n    dropDownItemList.forEach(function (item, index) {\n      item.addEventListener(\"click\", function (evt) {\n        removeArrayClass(dropDownItemList, \"drop-down__item--active\");\n        removeArrayClass(dropDownItemList, \"drop-down__item--border\");\n        dropDownItemList[index].classList.add(\"drop-down__item--active\");\n        exerciseListsArray[index].classList.remove(\"exercise-list--drop-down-opened\");\n        exerciseListsArray[index].classList.add(\"exercise-list--mobile\");\n        removeArrayClass(timeCellsArray, \"time-list__item--drop-down-opened\");\n        dropDownArrowSpan.classList.remove(\"rotate\");\n        item.style.borderBottomWidth = \"2px\";\n      });\n    });\n  });\n};\n\nif (dropDownArrow) {\n  dropDownArrow.addEventListener(\"click\", initDropDown);\n}\n\n//# sourceURL=webpack:///./js/modules/index.js?");

/***/ })

/******/ });