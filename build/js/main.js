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

eval("throw new Error(\"Module build failed (from ../node_modules/babel-loader/lib/index.js):\\nSyntaxError: E:\\\\HTML\\\\HTMLAcademy\\\\fitnes-accelator\\\\source\\\\js\\\\modules\\\\index.js: Identifier 'mySwiper2' has already been declared (91:6)\\n\\n\\u001b[0m \\u001b[90m 89 | \\u001b[39m\\u001b[36mconst\\u001b[39m reviewsBlock \\u001b[33m=\\u001b[39m document\\u001b[33m.\\u001b[39mquerySelector(\\u001b[32m`.reviews-block__slider`\\u001b[39m)\\u001b[33m;\\u001b[39m\\u001b[0m\\n\\u001b[0m \\u001b[90m 90 | \\u001b[39m\\u001b[0m\\n\\u001b[0m\\u001b[31m\\u001b[1m>\\u001b[22m\\u001b[39m\\u001b[90m 91 | \\u001b[39m\\u001b[36mconst\\u001b[39m mySwiper2 \\u001b[33m=\\u001b[39m (el) \\u001b[33m=>\\u001b[39m {\\u001b[0m\\n\\u001b[0m \\u001b[90m    | \\u001b[39m      \\u001b[31m\\u001b[1m^\\u001b[22m\\u001b[39m\\u001b[0m\\n\\u001b[0m \\u001b[90m 92 | \\u001b[39m  \\u001b[90m// eslint-disable-next-line no-undef\\u001b[39m\\u001b[0m\\n\\u001b[0m \\u001b[90m 93 | \\u001b[39m  \\u001b[36mreturn\\u001b[39m \\u001b[36mnew\\u001b[39m \\u001b[33mSwiper\\u001b[39m(el\\u001b[33m,\\u001b[39m {\\u001b[0m\\n\\u001b[0m \\u001b[90m 94 | \\u001b[39m    \\u001b[90m// Optional parameters\\u001b[39m\\u001b[0m\\n    at Parser._raise (E:\\\\HTML\\\\HTMLAcademy\\\\fitnes-accelator\\\\node_modules\\\\@babel\\\\parser\\\\lib\\\\index.js:742:17)\\n    at Parser.raiseWithData (E:\\\\HTML\\\\HTMLAcademy\\\\fitnes-accelator\\\\node_modules\\\\@babel\\\\parser\\\\lib\\\\index.js:735:17)\\n    at Parser.raise (E:\\\\HTML\\\\HTMLAcademy\\\\fitnes-accelator\\\\node_modules\\\\@babel\\\\parser\\\\lib\\\\index.js:729:17)\\n    at ScopeHandler.checkRedeclarationInScope (E:\\\\HTML\\\\HTMLAcademy\\\\fitnes-accelator\\\\node_modules\\\\@babel\\\\parser\\\\lib\\\\index.js:4769:12)\\n    at ScopeHandler.declareName (E:\\\\HTML\\\\HTMLAcademy\\\\fitnes-accelator\\\\node_modules\\\\@babel\\\\parser\\\\lib\\\\index.js:4735:12)\\n    at Parser.checkLVal (E:\\\\HTML\\\\HTMLAcademy\\\\fitnes-accelator\\\\node_modules\\\\@babel\\\\parser\\\\lib\\\\index.js:9207:22)\\n    at Parser.parseVarId (E:\\\\HTML\\\\HTMLAcademy\\\\fitnes-accelator\\\\node_modules\\\\@babel\\\\parser\\\\lib\\\\index.js:11762:10)\\n    at Parser.parseVar (E:\\\\HTML\\\\HTMLAcademy\\\\fitnes-accelator\\\\node_modules\\\\@babel\\\\parser\\\\lib\\\\index.js:11737:12)\\n    at Parser.parseVarStatement (E:\\\\HTML\\\\HTMLAcademy\\\\fitnes-accelator\\\\node_modules\\\\@babel\\\\parser\\\\lib\\\\index.js:11549:10)\\n    at Parser.parseStatementContent (E:\\\\HTML\\\\HTMLAcademy\\\\fitnes-accelator\\\\node_modules\\\\@babel\\\\parser\\\\lib\\\\index.js:11148:21)\");\n\n//# sourceURL=webpack:///./js/modules/index.js?");

/***/ })

/******/ });