/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./index.js":
/*!******************!*\
  !*** ./index.js ***!
  \******************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _modules_modal__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./modules/modal */ \"./modules/modal.js\");\n\r\n\r\n(0,_modules_modal__WEBPACK_IMPORTED_MODULE_0__[\"default\"])('#header', '.btn-block', '.header-modal', '.overlay', 'header-modal__close');\r\n(0,_modules_modal__WEBPACK_IMPORTED_MODULE_0__[\"default\"])('#services', '.btn', '.services-modal', '.overlay', 'services-modal__close');\r\n\r\n\n\n//# sourceURL=webpack:///./index.js?");

/***/ }),

/***/ "./modules/helpers.js":
/*!****************************!*\
  !*** ./modules/helpers.js ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"animate\": () => (/* binding */ animate),\n/* harmony export */   \"bounceEaseInOut\": () => (/* binding */ bounceEaseInOut)\n/* harmony export */ });\n\r\nconst animate = ({timing, draw, duration}) => {\r\n\r\n  let start = performance.now();\r\n  \r\n  requestAnimationFrame(function animate(time) {\r\n\r\n    // timeFraction изменяется от 0 до 1\r\n    let timeFraction = (time - start) / duration;\r\n\r\n    if (timeFraction > 1) timeFraction = 1;\r\n\r\n  \r\n    // вычисление текущего состояния анимации\r\n    let progress = timing(timeFraction);\r\n\r\n\r\n    draw(progress); // отрисовать её\r\n  \r\n    if (timeFraction < 1) {\r\n      requestAnimationFrame(animate);\r\n    }\r\n\r\n    \r\n  \r\n  });\r\n}\r\n\r\nfunction makeEaseOut(timing) {\r\n  return function(timeFraction) {\r\n    return 1 - timing(1 - timeFraction);\r\n  }\r\n}\r\n\r\n\r\nfunction linear(timeFraction) {\r\n  return timeFraction;\r\n}\r\n\r\nlet bounceEaseInOut = makeEaseOut(linear);\r\n\r\n\n\n//# sourceURL=webpack:///./modules/helpers.js?");

/***/ }),

/***/ "./modules/modal.js":
/*!**************************!*\
  !*** ./modules/modal.js ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _modalAnimate__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./modalAnimate */ \"./modules/modalAnimate.js\");\n\r\n\r\n\r\nconst modal = (idsection, btn, modalHeader, overlay = '.overlay', close) => {\r\n\r\n  const section = document.querySelector(idsection),\r\n    buttons = section.querySelectorAll(btn),\r\n    modal = document.querySelector(modalHeader);\r\n\r\n\r\n// Открытие модального окна\r\n  buttons.forEach(btn => {\r\n    btn.addEventListener('click', (e) => {\r\n      e.preventDefault();\r\n      if (screen.availWidth >= 768) (0,_modalAnimate__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(300, 0, overlay, modalHeader);\r\n\r\n    })\r\n  })\r\n  \r\n// Закрытие модального окна\r\n  modal.addEventListener('click', (e) => {\r\n    if(e.target.classList.contains(close)) {    \r\n      e.preventDefault();  \r\n      (0,_modalAnimate__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(300, 1, overlay, modalHeader);\r\n    }\r\n  })\r\n\r\n}\r\n\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (modal);\n\n//# sourceURL=webpack:///./modules/modal.js?");

/***/ }),

/***/ "./modules/modalAnimate.js":
/*!*********************************!*\
  !*** ./modules/modalAnimate.js ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _helpers__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./helpers */ \"./modules/helpers.js\");\n\r\n\r\nconst modalAnimate = (duration, time, modalHeader, overlay,   displayStyle = 'flex') => {\r\n\r\n  const modal = document.querySelector(modalHeader),\r\n    modalOverlay = document.querySelector(overlay);\r\n\r\n  (0,_helpers__WEBPACK_IMPORTED_MODULE_0__.animate)({\r\n   duration: duration,\r\n   timing: _helpers__WEBPACK_IMPORTED_MODULE_0__.bounceEaseInOut,\r\n   draw: function(progress) {\r\n\r\n     let linear = Math.abs(time - progress);\r\n\r\n       modal.style.opacity =  linear;\r\n       modalOverlay.style.opacity = linear;\r\n\r\n       modal.style.display = displayStyle;\r\n       modalOverlay.style.display = displayStyle;\r\n      //  modal.style.display = displayStyle;\r\n\r\n       if(+modal.style.opacity === 0 ) {\r\n        modal.style.display = 'none';\r\n        modalOverlay.style.display = 'none';\r\n       } \r\n   \r\n     }\r\n     });\r\n  \r\n }\r\n\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (modalAnimate);\n\n//# sourceURL=webpack:///./modules/modalAnimate.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./index.js");
/******/ 	
/******/ })()
;