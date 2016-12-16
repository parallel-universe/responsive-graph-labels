(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define("responsive-graph-labels", [], factory);
	else if(typeof exports === 'object')
		exports["responsive-graph-labels"] = factory();
	else
		root["responsive-graph-labels"] = factory();
})(this, function() {
return /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;
/******/
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;
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
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var _primesAndFactors = __webpack_require__(1);
	
	var _primesAndFactors2 = _interopRequireDefault(_primesAndFactors);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	var factors = _primesAndFactors2.default.getUniqueFactors(18);
	
	var something = 'wefwefew' + factors[0];
	
	console.log(something.length);
	var test = 'ewef' + something.length + 'wefwefw';
	console.log(test);

/***/ },
/* 1 */
/***/ function(module, exports) {

	"use strict";
	
	var primeFactor = {
	  calculate: function calculate(num) {
	    var result = arguments.length <= 1 || arguments[1] === undefined ? [] : arguments[1];
	    var repeat = arguments.length <= 2 || arguments[2] === undefined ? true : arguments[2];
	
	    var root = Math.sqrt(num);
	    var x = 2;
	
	    if (num % x) {
	      x = 3;
	      while (num % x && x < root) {
	        x += 2;
	      }
	    }
	
	    x = x <= root ? x : num;
	
	    if (!repeat) {
	      var index = result.indexOf(x);
	      if (index < 0) result.push(x);
	    } else result.push(x);
	
	    return x === num ? result : this.calculate(num / x, result, repeat);
	  },
	
	  getFrequency: function getFrequency(num) {
	    var factors = this.calculate(num);
	    var count = {};
	    var result = [];
	
	    for (var i in factors) {
	      if (count.hasOwnProperty(factors[i])) {
	        count[factors[i]] += 1;
	      } else count[factors[i]] = 1;
	    }
	
	    for (var key in count) {
	      if ({}.hasOwnProperty.call(count, key)) {
	        var obj = {
	          factor: Number(key),
	          times: count[key]
	        };
	        result.push(obj);
	      }
	    }
	
	    return result;
	  },
	
	  getUniqueFactors: function getUniqueFactors(num) {
	    return this.calculate(num, [], false);
	  },
	
	  isPrime: function isPrime(num) {
	    var ok = true;
	    for (var i = 2; i <= Math.floor(Math.sqrt(num)); i++) {
	      if (num % i === 0) {
	        ok = false;
	        break;
	      }
	    }
	
	    return ok;
	  }
	};
	
	module.exports = primeFactor;


/***/ }
/******/ ])
});
;
//# sourceMappingURL=responsive-graph-labels.js.map