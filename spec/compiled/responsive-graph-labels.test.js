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
	
	var _responsiveGraphLabels = __webpack_require__(3);
	
	var _responsiveGraphLabels2 = _interopRequireDefault(_responsiveGraphLabels);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	describe('Responsive labels', function () {
	    it('Returns the first and last values given an odd number of labels', function () {
	        var labelContainerWidth = 70;
	        var labelWidth = 10;
	        var labelPadding = 5;
	        var emptyLabelValue = '';
	        var labels = ['jan', 'feb', 'mar', 'apr', 'may', 'jun', 'jul', 'aug', 'sep', 'oct', 'nov', 'dec', 'jan'];
	
	        var result = _responsiveGraphLabels2.default.scale({
	            labels: labels,
	            labelWidth: labelWidth,
	            labelPadding: labelPadding,
	            emptyLabelValue: emptyLabelValue,
	            labelContainerWidth: labelContainerWidth
	        });
	
	        expect(result[0]).toEqual('jan');
	        expect(result[result.length - 1]).toEqual('jan');
	    });
	
	    it('Returns the first and last values given an even number of labels', function () {
	        var labelContainerWidth = 70;
	        var labelWidth = 10;
	        var labelPadding = 5;
	        var emptyLabelValue = '';
	        var labels = ['jan', 'feb', 'mar', 'apr', 'may', 'jun', 'jul', 'aug', 'sep', 'oct'];
	
	        var result = _responsiveGraphLabels2.default.scale({
	            labels: labels,
	            labelWidth: labelWidth,
	            labelPadding: labelPadding,
	            emptyLabelValue: emptyLabelValue,
	            labelContainerWidth: labelContainerWidth
	        });
	
	        expect(result[0]).toEqual('jan');
	        expect(result[result.length - 1]).toEqual('oct');
	    });
	
	    it('Returns the first and last values given a number one greater than a prime', function () {
	        var labelContainerWidth = 70;
	        var labelWidth = 10;
	        var labelPadding = 5;
	        var emptyLabelValue = '';
	        var labels = ['jan', 'feb', 'mar', 'apr', 'may', 'jun', 'jul', 'aug', 'sep', 'oct', 'nov', 'dec', 'jan', 'feb'];
	
	        var result = _responsiveGraphLabels2.default.scale({
	            labels: labels,
	            labelWidth: labelWidth,
	            labelPadding: labelPadding,
	            emptyLabelValue: emptyLabelValue,
	            labelContainerWidth: labelContainerWidth
	        });
	
	        expect(result[0]).toEqual('jan');
	        expect(result[result.length - 1]).toEqual('feb');
	    });
	
	    it('Returns the same number of elements as was provided', function () {
	        var labelContainerWidth = 70;
	        var labelWidth = 10;
	        var labelPadding = 5;
	        var emptyLabelValue = '';
	        var labels = ['jan', 'feb', 'mar', 'apr', 'may', 'jun', 'jul', 'aug', 'sep', 'oct', 'nov', 'dec', 'jan', 'feb'];
	
	        var result = _responsiveGraphLabels2.default.scale({
	            labels: labels,
	            labelWidth: labelWidth,
	            labelPadding: labelPadding,
	            emptyLabelValue: emptyLabelValue,
	            labelContainerWidth: labelContainerWidth
	        });
	
	        expect(result.length).toEqual(labels.length);
	    });
	
	    it('Returns all of the elements when the container is large enough to hold them', function () {
	        var labelContainerWidth = 300;
	        var labelWidth = 10;
	        var labelPadding = 5;
	        var emptyLabelValue = '';
	        var labels = ['jan', 'feb', 'mar', 'apr', 'may', 'jun', 'jul', 'aug', 'sep', 'oct', 'nov', 'dec', 'jan', 'feb'];
	
	        var result = _responsiveGraphLabels2.default.scale({
	            labels: labels,
	            labelWidth: labelWidth,
	            labelPadding: labelPadding,
	            emptyLabelValue: emptyLabelValue,
	            labelContainerWidth: labelContainerWidth
	        });
	
	        expect(result).toEqual(labels);
	    });
	
	    it('Removes elements and replaces them with the specified emptyLabelValue', function () {
	        var labelContainerWidth = 100;
	        var labelWidth = 10;
	        var labelPadding = 5;
	        var emptyLabelValue = 'x';
	        var labels = ['jan', 'feb', 'mar', 'apr', 'may', 'jun', 'jul', 'aug', 'sep', 'oct', 'nov', 'dec', 'jan', 'feb'];
	
	        var result = _responsiveGraphLabels2.default.scale({
	            labels: labels,
	            labelWidth: labelWidth,
	            labelPadding: labelPadding,
	            emptyLabelValue: emptyLabelValue,
	            labelContainerWidth: labelContainerWidth
	        });
	
	        expect(result).toContain('x');
	    });
	
	    it('Always leaves at least two labels when given an odd number of labels', function () {
	        var labelContainerWidth = 1;
	        var labelWidth = 10;
	        var labelPadding = 5;
	        var emptyLabelValue = 'x';
	        var labels = ['jan', 'feb', 'mar', 'apr', 'may', 'jun', 'jul', 'aug', 'sep', 'oct', 'nov', 'dec', 'jan'];
	
	        var result = _responsiveGraphLabels2.default.scale({
	            labels: labels,
	            labelWidth: labelWidth,
	            labelPadding: labelPadding,
	            emptyLabelValue: emptyLabelValue,
	            labelContainerWidth: labelContainerWidth
	        });
	
	        expect(result).toContain('jan');
	        expect(result).toContain('jan');
	    });
	});

/***/ },
/* 1 */,
/* 2 */,
/* 3 */
/***/ function(module, exports, __webpack_require__) {

	var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;/* WEBPACK VAR INJECTION */(function(module) {'use strict';
	
	var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };
	
	(function webpackUniversalModuleDefinition(root, factory) {
		if (( false ? 'undefined' : _typeof(exports)) === 'object' && ( false ? 'undefined' : _typeof(module)) === 'object') module.exports = factory();else if (true) !(__WEBPACK_AMD_DEFINE_ARRAY__ = [], __WEBPACK_AMD_DEFINE_FACTORY__ = (factory), __WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ? (__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));else if ((typeof exports === 'undefined' ? 'undefined' : _typeof(exports)) === 'object') exports["responsive-graph-labels"] = factory();else root["responsive-graph-labels"] = factory();
	})(undefined, function () {
		return (/******/function (modules) {
				// webpackBootstrap
				/******/ // The module cache
				/******/var installedModules = {};
				/******/
				/******/ // The require function
				/******/function __webpack_require__(moduleId) {
					/******/
					/******/ // Check if module is in cache
					/******/if (installedModules[moduleId])
						/******/return installedModules[moduleId].exports;
					/******/
					/******/ // Create a new module (and put it into the cache)
					/******/var module = installedModules[moduleId] = {
						/******/exports: {},
						/******/id: moduleId,
						/******/loaded: false
						/******/ };
					/******/
					/******/ // Execute the module function
					/******/modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
					/******/
					/******/ // Flag the module as loaded
					/******/module.loaded = true;
					/******/
					/******/ // Return the exports of the module
					/******/return module.exports;
					/******/
				}
				/******/
				/******/
				/******/ // expose the modules object (__webpack_modules__)
				/******/__webpack_require__.m = modules;
				/******/
				/******/ // expose the module cache
				/******/__webpack_require__.c = installedModules;
				/******/
				/******/ // __webpack_public_path__
				/******/__webpack_require__.p = "";
				/******/
				/******/ // Load entry module and return exports
				/******/return __webpack_require__(0);
				/******/
			}(
			/************************************************************************/
			/******/[
			/* 0 */
			/***/function (module, exports, __webpack_require__) {
	
				'use strict';
	
				Object.defineProperty(exports, "__esModule", {
					value: true
				});
	
				var _primesAndFactors = __webpack_require__(1);
	
				var _primesAndFactors2 = _interopRequireDefault(_primesAndFactors);
	
				var _range = __webpack_require__(2);
	
				function _interopRequireDefault(obj) {
					return obj && obj.__esModule ? obj : { default: obj };
				}
	
				var responsiveGraphLabels = {
					scale: function scale(options) {
						this.labels = options.labels;
						this.labelWidth = options.labelWidth;
						this.labelPadding = options.labelPadding;
						this.labelContainerWidth = options.labelContainerWidth;
						this.emptyLabelValue = options.emptyLabelValue;
	
						if (this.canShowAllLabels()) {
							return this.labels;
						}
	
						return this.distributeLabels();
					},
					distributeLabels: function distributeLabels() {
						if (this.labels.length % 2 === 0 && _primesAndFactors2.default.isPrime(this.labels.length - 1)) {
							return this.bestPossibleDistribution();
						}
	
						return this.evenDistribution();
					},
					canShowAllLabels: function canShowAllLabels() {
						return this.labels.length < this.labelContainerCapacity();
					},
					labelContainerCapacity: function labelContainerCapacity() {
						return Math.floor(this.labelContainerWidth / (this.labelWidth + this.labelPadding));
					},
					bestPossibleDistribution: function bestPossibleDistribution() {
						var _this = this;
	
						var weightedLimit = this.labelContainerCapacity() - 1;
						var result = [];
	
						for (var i = 0; i < weightedLimit; i += 1) {
							result.push(this.labels[this.arrayStride(this.labels, i, weightedLimit)]);
						}
	
						result.push(this.labels[this.labels.length - 1]);
	
						return this.labels.map(function (element) {
							if (element === result.slice(0, 1).pop()) {
								return result.shift();
							}
							return _this.emptyLabelValue;
						});
					},
					evenDistribution: function evenDistribution() {
						var _this2 = this;
	
						var bestProgression = this.findBestProgression();
						var markedIndexes = (0, _range.range)(0, this.labels.length, bestProgression.factor);
	
						return this.labels.map(function (element, index) {
							if (markedIndexes.indexOf(index) !== -1) {
								return element;
							}
	
							return _this2.emptyLabelValue;
						});
					},
					generateProgressionOptions: function generateProgressionOptions() {
						var _this3 = this;
	
						var factors = _primesAndFactors2.default.getUniqueFactors(this.labels.length - 1);
						return factors.map(function (value) {
							var count = (_this3.labels.length - 1) / value + 1;
							return {
								factor: value,
								count: count
							};
						});
					},
					findBestProgression: function findBestProgression() {
						var limit = this.labelContainerCapacity();
						var options = this.generateProgressionOptions();
						return options.reduce(function (prev, curr) {
							return Math.abs(curr.count - limit) < Math.abs(prev.count - limit) ? curr : prev;
						});
					},
					arrayStride: function arrayStride(labels, index, limit) {
						return Math.floor(index * (labels.length / limit));
					}
				};
	
				exports.default = responsiveGraphLabels;
	
				/***/
			},
			/* 1 */
			/***/function (module, exports) {
	
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
	
				/***/
			},
			/* 2 */
			/***/function (module, exports) {
	
				"use strict";
	
				// Returns an array of integers starting at a, incrementing by step, ending before b.
				//
				// Example:
				//
				// > var range = require("range").range;
				// > range(0, 10);
				// [0, 1, 2, 3, 4, 5, 6, 7, 8, 9]
	
				function range(a, b, step) {
					if (arguments.length === 1) {
						b = a;
						a = 0;
					}
	
					step = step || 1;
	
					var x,
					    r = [];
	
					for (x = a; (b - x) * step > 0; x += step) {
						r.push(x);
					}
	
					return r;
				}
	
				exports.range = range;
	
				/***/
			}
			/******/])
		);
	});
	;
	//# sourceMappingURL=responsive-graph-labels.js.map
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(4)(module)))

/***/ },
/* 4 */
/***/ function(module, exports) {

	module.exports = function(module) {
		if(!module.webpackPolyfill) {
			module.deprecate = function() {};
			module.paths = [];
			// module.parent = undefined by default
			module.children = [];
			module.webpackPolyfill = 1;
		}
		return module;
	}


/***/ }
/******/ ])
});
;
//# sourceMappingURL=responsive-graph-labels.test.js.map