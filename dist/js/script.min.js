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
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/js/script.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/js/script.js":
/*!**************************!*\
  !*** ./src/js/script.js ***!
  \**************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval(";\n/********** HEADER **********/\n\n$('.top-menu-button').on('click', function () {\n  $('.top-menu').toggleClass('top-menu--hidden');\n}); // При клике на пункт меню - плавно прокручивать страницу вниз до выбранного места.\n\n$.fn.slowScrollTo = function (speed) {\n  $('html, body').animate({\n    scrollTop: $($(this[0].hash)).offset().top\n  }, 1000);\n};\n\n$('.top-menu__item').on('click', function (event) {\n  $(this).slowScrollTo(1000);\n});\n;\n/********** OVERVIEW SECTION **********/\n\n;\n/********** TESTIMONIALS SECTION **********/\n\n;\n/********** PRICING SECTION **********///# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvanMvc2NyaXB0LmpzPzQ0YWQiXSwibmFtZXMiOlsiJCIsIm9uIiwidG9nZ2xlQ2xhc3MiLCJmbiIsInNsb3dTY3JvbGxUbyIsInNwZWVkIiwiYW5pbWF0ZSIsInNjcm9sbFRvcCIsImhhc2giLCJvZmZzZXQiLCJ0b3AiLCJldmVudCJdLCJtYXBwaW5ncyI6IkFBQUE7QUFDQTs7QUFHQUEsQ0FBQyxDQUFDLGtCQUFELENBQUQsQ0FBc0JDLEVBQXRCLENBQXlCLE9BQXpCLEVBQWtDLFlBQVc7QUFDekNELEdBQUMsQ0FBQyxXQUFELENBQUQsQ0FBZUUsV0FBZixDQUEyQixrQkFBM0I7QUFDSCxDQUZELEUsQ0FJQTs7QUFFQUYsQ0FBQyxDQUFDRyxFQUFGLENBQUtDLFlBQUwsR0FBb0IsVUFBU0MsS0FBVCxFQUFnQjtBQUNoQ0wsR0FBQyxDQUFDLFlBQUQsQ0FBRCxDQUFnQk0sT0FBaEIsQ0FBd0I7QUFDcEJDLGFBQVMsRUFBRVAsQ0FBQyxDQUFDQSxDQUFDLENBQUMsS0FBSyxDQUFMLEVBQVFRLElBQVQsQ0FBRixDQUFELENBQW1CQyxNQUFuQixHQUE0QkM7QUFEbkIsR0FBeEIsRUFFRyxJQUZIO0FBR0gsQ0FKRDs7QUFNQVYsQ0FBQyxDQUFDLGlCQUFELENBQUQsQ0FBcUJDLEVBQXJCLENBQXdCLE9BQXhCLEVBQWlDLFVBQVNVLEtBQVQsRUFBZ0I7QUFBQ1gsR0FBQyxDQUFDLElBQUQsQ0FBRCxDQUFRSSxZQUFSLENBQXFCLElBQXJCO0FBQTJCLENBQTdFO0FBRUE7QUFDQTs7QUFHQTtBQUNBOztBQUdBO0FBQ0EiLCJmaWxlIjoiLi9zcmMvanMvc2NyaXB0LmpzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiO1xuLyoqKioqKioqKiogSEVBREVSICoqKioqKioqKiovXG5cblxuJCgnLnRvcC1tZW51LWJ1dHRvbicpLm9uKCdjbGljaycsIGZ1bmN0aW9uKCkge1xuICAgICQoJy50b3AtbWVudScpLnRvZ2dsZUNsYXNzKCd0b3AtbWVudS0taGlkZGVuJyk7XG59KTsgXG5cbi8vINCf0YDQuCDQutC70LjQutC1INC90LAg0L/Rg9C90LrRgiDQvNC10L3RjiAtINC/0LvQsNCy0L3QviDQv9GA0L7QutGA0YPRh9C40LLQsNGC0Ywg0YHRgtGA0LDQvdC40YbRgyDQstC90LjQtyDQtNC+INCy0YvQsdGA0LDQvdC90L7Qs9C+INC80LXRgdGC0LAuXG5cbiQuZm4uc2xvd1Njcm9sbFRvID0gZnVuY3Rpb24oc3BlZWQpIHtcbiAgICAkKCdodG1sLCBib2R5JykuYW5pbWF0ZSh7XG4gICAgICAgIHNjcm9sbFRvcDogJCgkKHRoaXNbMF0uaGFzaCkpLm9mZnNldCgpLnRvcFxuICAgIH0sIDEwMDApO1xufTtcblxuJCgnLnRvcC1tZW51X19pdGVtJykub24oJ2NsaWNrJywgZnVuY3Rpb24oZXZlbnQpIHskKHRoaXMpLnNsb3dTY3JvbGxUbygxMDAwKX0pO1xuXG47XG4vKioqKioqKioqKiBPVkVSVklFVyBTRUNUSU9OICoqKioqKioqKiovXG5cblxuO1xuLyoqKioqKioqKiogVEVTVElNT05JQUxTIFNFQ1RJT04gKioqKioqKioqKi9cblxuXG47XG4vKioqKioqKioqKiBQUklDSU5HIFNFQ1RJT04gKioqKioqKioqKi9cblxuIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/js/script.js\n");

/***/ })

/******/ });