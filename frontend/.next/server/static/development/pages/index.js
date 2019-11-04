module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = require('../../../ssr-module-cache.js');
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
/******/ 		var threw = true;
/******/ 		try {
/******/ 			modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 			threw = false;
/******/ 		} finally {
/******/ 			if(threw) delete installedModules[moduleId];
/******/ 		}
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
/******/ 	return __webpack_require__(__webpack_require__.s = 3);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./lib/utils.js":
/*!**********************!*\
  !*** ./lib/utils.js ***!
  \**********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__(/*! @babel/runtime-corejs2/helpers/interopRequireDefault */ "./node_modules/@babel/runtime-corejs2/helpers/interopRequireDefault.js");

var _bluebird = _interopRequireDefault(__webpack_require__(/*! bluebird */ "bluebird"));

__webpack_require__(/*! isomorphic-fetch */ "isomorphic-fetch");

function getNutrition(foodDesc) {
  return fetch(`http://localhost:8080/api?q=${foodDesc}`).then(function (resp) {
    return resp.json();
  });
}

function handleError(error) {
  console.warn(error);
  return null;
}

;
module.exports = {
  getInfo: function (food) {
    return getNutrition(food).catch(handleError);
  }
};

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/helpers/interopRequireDefault.js":
/*!******************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/helpers/interopRequireDefault.js ***!
  \******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : {
    "default": obj
  };
}

module.exports = _interopRequireDefault;

/***/ }),

/***/ "./pages/index.js":
/*!************************!*\
  !*** ./pages/index.js ***!
  \************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-jsx/style */ "styled-jsx/style");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _lib_utils_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../lib/utils.js */ "./lib/utils.js");
/* harmony import */ var _lib_utils_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_lib_utils_js__WEBPACK_IMPORTED_MODULE_2__);
var _jsxFileName = "/Users/ianfrye/cpsc350/completeWebApp/frontend/pages/index.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;



class Home extends react__WEBPACK_IMPORTED_MODULE_1___default.a.Component {
  constructor(props) {
    super(props);
    this.state = {
      search: ""
    };
  }

  async handleSearch(evt) {
    this.setState({
      search: evt.target.value
    });
    const food = await Object(_lib_utils_js__WEBPACK_IMPORTED_MODULE_2__["getInfo"])(this.state.search);
    this.setState({
      food
    });
  }

  render() {
    return __jsx("div", {
      style: {
        margin: "auto auto",
        width: "100%",
        textAlign: "center",
        padding: "0 px"
      },
      className: "jsx-999024449",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 18
      },
      __self: this
    }, __jsx("div", {
      style: {
        backgroundImage: `url("https://image.freepik.com/free-photo/different-raw-vegetable-blue-wooden-table_23-2147953583.jpg")`,
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center",
        backgroundSize: "cover",
        width: "100%",
        textAlign: "center",
        padding: "0 px",
        height: "250px"
      },
      className: "jsx-999024449",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 20
      },
      __self: this
    }, __jsx("br", {
      className: "jsx-999024449",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 22
      },
      __self: this
    }), __jsx("br", {
      className: "jsx-999024449",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 23
      },
      __self: this
    }), __jsx("br", {
      className: "jsx-999024449",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 24
      },
      __self: this
    }), __jsx("br", {
      className: "jsx-999024449",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 25
      },
      __self: this
    }), __jsx("br", {
      className: "jsx-999024449",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 26
      },
      __self: this
    }), __jsx("h1", {
      className: "jsx-999024449",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 27
      },
      __self: this
    }, "Nutrition Information Search")), __jsx("h2", {
      className: "jsx-999024449",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 31
      },
      __self: this
    }, "Food Search"), __jsx("p", {
      className: "jsx-999024449",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 33
      },
      __self: this
    }, __jsx("input", {
      type: "text",
      value: this.state.search,
      onChange: this.handleSearch.bind(this),
      className: "jsx-999024449",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 33
      },
      __self: this
    })), this.state.food && this.state.search != "" ? __jsx("div", {
      className: "jsx-999024449",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 35
      },
      __self: this
    }, __jsx("br", {
      className: "jsx-999024449",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 36
      },
      __self: this
    }), __jsx("table", {
      className: "jsx-999024449",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 38
      },
      __self: this
    }, __jsx("thead", {
      className: "jsx-999024449",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 39
      },
      __self: this
    }, __jsx("tr", {
      className: "jsx-999024449",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 40
      },
      __self: this
    }, __jsx("th", {
      className: "jsx-999024449",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 41
      },
      __self: this
    }, "Description"), __jsx("th", {
      className: "jsx-999024449",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 42
      },
      __self: this
    }, "Kcal"), __jsx("th", {
      className: "jsx-999024449",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 43
      },
      __self: this
    }, "Protein (g)"), __jsx("th", {
      className: "jsx-999024449",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 44
      },
      __self: this
    }, "Fat (g)"), __jsx("th", {
      className: "jsx-999024449",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 45
      },
      __self: this
    }, "Carbohydrates (g)"))), __jsx("tbody", {
      className: "jsx-999024449",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 48
      },
      __self: this
    }, this.state.food.rows.map((item, key) => __jsx("tr", {
      key: item.description,
      className: "jsx-999024449",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 50
      },
      __self: this
    }, __jsx("td", {
      className: "jsx-999024449",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 51
      },
      __self: this
    }, item.description), __jsx("td", {
      className: "jsx-999024449",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 52
      },
      __self: this
    }, item.kcal), __jsx("td", {
      className: "jsx-999024449",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 53
      },
      __self: this
    }, item.protein_g), __jsx("td", {
      className: "jsx-999024449",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 54
      },
      __self: this
    }, item.fa_sat_g + item.fa_mono_g + item.fa_poly_g), __jsx("td", {
      className: "jsx-999024449",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 55
      },
      __self: this
    }, item.carbohydrate_g)))))) : null, __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
      id: "999024449",
      __self: this
    }, "h1.jsx-999024449{color:black;font-family:\"Arial\";margin:\"auto auto\";width:100%;display:inline;textAlign:\"center\";padding:\"0 px\";}h2.jsx-999024449,a.jsx-999024449{font-family:\"Arial\";textAlign:\"center\";color:black;margin:\"auto auto\";padding:\"9px\";}.h3.jsx-999024449{font-family:\"Arial\";textAlign:center;color:black;}.p.jsx-999024449{font-family:\"Arial\";textAlign:center;color:black;}.button-style.jsx-999024449{margin:auto auto;cursor:pointer;background-color:green;color:#ffffff;width:100px;font-family:\"Arial\";}.description.jsx-999024449{font-family:\"Arial\";font-size:\"10px\";}a.jsx-999024449{-webkit-text-decoration:underline;text-decoration:underline;color:green;}a.jsx-999024449:hover{opacity:0.6;}table.jsx-999024449{font-family:arial,sans-serif;border-collapse:collapse;width:100%;}td.jsx-999024449,th.jsx-999024449{border:1px solid #ffffff;text-align:left;padding:8px;}tr.jsx-999024449:nth-child(even){background-color:#dddddd;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9pYW5mcnllL2Nwc2MzNTAvY29tcGxldGVXZWJBcHAvZnJvbnRlbmQvcGFnZXMvaW5kZXguanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBbUUwQixBQUdnQyxBQVdTLEFBUUEsQUFNQSxBQU1ILEFBU0csQUFLTSxBQUtkLEFBR2tCLEFBTUwsQUFNQSxZQWhFTCxBQWtEdEIsS0FuQmlCLEdBcEJJLEFBUUYsQUFNQSxBQWVBLEtBbUJELEFBTWxCLElBWjJCLEdBcEROLEFBK0JJLEtBWlgsQUFNQSxBQWVkLEVBN0JjLEVBZ0RBLFFBdkNkLEFBTUEsRUF6QmEsQUFXTyxFQWdEcEIsQ0FQYSxDQXJCRyxLQVlGLEVBMUNHLEdBb0RqQixJQXJCYyxDQXBCQyxFQWdDZixLQTFDcUIsSUErQkMsR0FwQnRCLFlBVmlCLEtBK0JqQixVQTlCQSIsImZpbGUiOiIvVXNlcnMvaWFuZnJ5ZS9jcHNjMzUwL2NvbXBsZXRlV2ViQXBwL2Zyb250ZW5kL3BhZ2VzL2luZGV4LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IHtnZXRJbmZvfSBmcm9tICcuLi9saWIvdXRpbHMuanMnXG5cbmNsYXNzIEhvbWUgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xuICBjb25zdHJ1Y3Rvcihwcm9wcykge1xuICAgIHN1cGVyKHByb3BzKTtcbiAgICB0aGlzLnN0YXRlPXtzZWFyY2g6IFwiXCJ9O1xuICB9XG5cbiAgYXN5bmMgaGFuZGxlU2VhcmNoKGV2dCl7XG4gICAgdGhpcy5zZXRTdGF0ZSh7c2VhcmNoOiBldnQudGFyZ2V0LnZhbHVlfSk7XG4gICAgY29uc3QgZm9vZCA9IGF3YWl0IGdldEluZm8odGhpcy5zdGF0ZS5zZWFyY2gpO1xuICAgIHRoaXMuc2V0U3RhdGUoe2Zvb2R9KTtcbiAgfVxuXG4gIHJlbmRlcigpIHtcbiAgICByZXR1cm4gKFxuICAgICAgICAgICAgPGRpdiBzdHlsZT17eyBtYXJnaW46IFwiYXV0byBhdXRvXCIsIHdpZHRoOiBcIjEwMCVcIiwgdGV4dEFsaWduOiBcImNlbnRlclwiLCBwYWRkaW5nOiBcIjAgcHhcIiB9fT5cbiAgICAgICAgICAgIFxuICAgICAgICAgICAgICA8ZGl2IHN0eWxlPXt7YmFja2dyb3VuZEltYWdlOiBgdXJsKFwiaHR0cHM6Ly9pbWFnZS5mcmVlcGlrLmNvbS9mcmVlLXBob3RvL2RpZmZlcmVudC1yYXctdmVnZXRhYmxlLWJsdWUtd29vZGVuLXRhYmxlXzIzLTIxNDc5NTM1ODMuanBnXCIpYCwgYmFja2dyb3VuZFJlcGVhdDogXCJuby1yZXBlYXRcIiwgYmFja2dyb3VuZFBvc2l0aW9uOiBcImNlbnRlclwiLCBiYWNrZ3JvdW5kU2l6ZTpcImNvdmVyXCIsXG4gICAgICAgICAgICAgICAgICB3aWR0aDogXCIxMDAlXCIsIHRleHRBbGlnbjogXCJjZW50ZXJcIiwgcGFkZGluZzogXCIwIHB4XCIsIGhlaWdodDogXCIyNTBweFwifX0+XG4gICAgICAgICAgICAgICAgPGJyIC8+XG4gICAgICAgICAgICAgICAgPGJyIC8+XG4gICAgICAgICAgICAgICAgPGJyIC8+XG4gICAgICAgICAgICAgICAgPGJyIC8+XG4gICAgICAgICAgICAgICAgPGJyIC8+XG4gICAgICAgICAgICAgICAgPGgxPk51dHJpdGlvbiBJbmZvcm1hdGlvbiBTZWFyY2g8L2gxPlxuXG4gICAgICAgICAgICAgIDwvZGl2PlxuXG4gICAgICAgICAgICAgIDxoMj5Gb29kIFNlYXJjaDwvaDI+XG5cbiAgICAgICAgICAgICAgPHA+PGlucHV0IHR5cGU9J3RleHQnIHZhbHVlPXt0aGlzLnN0YXRlLnNlYXJjaH0gb25DaGFuZ2U9e3RoaXMuaGFuZGxlU2VhcmNoLmJpbmQodGhpcyl9Lz48L3A+XG5cbiAgICAgICAgICAgICAge3RoaXMuc3RhdGUuZm9vZCAmJiB0aGlzLnN0YXRlLnNlYXJjaCAhPSBcIlwiID8gPGRpdj5cbiAgICAgICAgICAgICAgICAgIDxiciAvPlxuXG4gICAgICAgICAgICAgICAgICA8dGFibGU+XG4gICAgICAgICAgICAgICAgICAgIDx0aGVhZD5cbiAgICAgICAgICAgICAgICAgICAgICA8dHI+XG4gICAgICAgICAgICAgICAgICAgICAgICA8dGg+RGVzY3JpcHRpb248L3RoPlxuICAgICAgICAgICAgICAgICAgICAgICAgPHRoPktjYWw8L3RoPiBcbiAgICAgICAgICAgICAgICAgICAgICAgIDx0aD5Qcm90ZWluIChnKTwvdGg+XG4gICAgICAgICAgICAgICAgICAgICAgICA8dGg+RmF0IChnKTwvdGg+XG4gICAgICAgICAgICAgICAgICAgICAgICA8dGg+Q2FyYm9oeWRyYXRlcyAoZyk8L3RoPlxuICAgICAgICAgICAgICAgICAgICAgIDwvdHI+XG4gICAgICAgICAgICAgICAgICAgICAgPC90aGVhZD5cbiAgICAgICAgICAgICAgICAgICAgPHRib2R5PlxuICAgICAgICAgICAgICAgICAgICAgIHt0aGlzLnN0YXRlLmZvb2Qucm93cy5tYXAoKGl0ZW0sIGtleSkgPT5cbiAgICAgICAgICAgICAgICAgICAgICAgIDx0ciBrZXk9e2l0ZW0uZGVzY3JpcHRpb259PlxuICAgICAgICAgICAgICAgICAgICAgICAgICA8dGQ+e2l0ZW0uZGVzY3JpcHRpb259PC90ZD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgPHRkPntpdGVtLmtjYWx9PC90ZD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgPHRkPntpdGVtLnByb3RlaW5fZ308L3RkPlxuICAgICAgICAgICAgICAgICAgICAgICAgICA8dGQ+e2l0ZW0uZmFfc2F0X2cgKyBpdGVtLmZhX21vbm9fZyArIGl0ZW0uZmFfcG9seV9nfTwvdGQ+XG4gICAgICAgICAgICAgICAgICAgICAgICAgIDx0ZD57aXRlbS5jYXJib2h5ZHJhdGVfZ308L3RkPlxuICAgICAgICAgICAgICAgICAgICAgICAgPC90cj5cbiAgICAgICAgICAgICAgICAgICAgICAgICl9XG4gICAgICAgICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgICAgIDwvdGJvZHk+XG4gICAgICAgICAgICAgICAgICA8L3RhYmxlPlxuXG5cbiAgICAgICAgICAgICAgPC9kaXY+IDogbnVsbH1cblxuICAgICAgICAgICAgICBcblxuXG4gICAgICAgICAgICAgIDxzdHlsZSBqc3g+e2BcbiAgICAgICAgICAgICAgICAgIGgxe1xuICAgICAgICAgICAgICAgICAgICBjb2xvcjpibGFjazsgXG4gICAgICAgICAgICAgICAgICAgIGZvbnQtZmFtaWx5OiBcIkFyaWFsXCI7XG4gICAgICAgICAgICAgICAgICAgIG1hcmdpbjogXCJhdXRvIGF1dG9cIjsgXG4gICAgICAgICAgICAgICAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgICAgICAgICAgICAgICBkaXNwbGF5OiBpbmxpbmU7IFxuICAgICAgICAgICAgICAgICAgICB0ZXh0QWxpZ246IFwiY2VudGVyXCI7XG4gICAgICAgICAgICAgICAgICAgIHBhZGRpbmc6IFwiMCBweFwiO1xuICAgICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgICBoMixcbiAgICAgICAgICAgICAgICAgIGF7XG4gICAgICAgICAgICAgICAgICAgIGZvbnQtZmFtaWx5OiBcIkFyaWFsXCI7XG4gICAgICAgICAgICAgICAgICAgIHRleHRBbGlnbjogXCJjZW50ZXJcIjtcbiAgICAgICAgICAgICAgICAgICAgY29sb3I6IGJsYWNrO1xuICAgICAgICAgICAgICAgICAgICBtYXJnaW46XCJhdXRvIGF1dG9cIjtcbiAgICAgICAgICAgICAgICAgICAgcGFkZGluZzpcIjlweFwiO1xuICAgICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgICAuaDN7XG4gICAgICAgICAgICAgICAgICAgIGZvbnQtZmFtaWx5OiBcIkFyaWFsXCI7XG4gICAgICAgICAgICAgICAgICAgIHRleHRBbGlnbjogY2VudGVyO1xuICAgICAgICAgICAgICAgICAgICBjb2xvcjogYmxhY2s7XG4gICAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICAgIC5we1xuICAgICAgICAgICAgICAgICAgICBmb250LWZhbWlseTogXCJBcmlhbFwiO1xuICAgICAgICAgICAgICAgICAgICB0ZXh0QWxpZ246IGNlbnRlcjtcbiAgICAgICAgICAgICAgICAgICAgY29sb3I6IGJsYWNrO1xuICAgICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgICAuYnV0dG9uLXN0eWxle1xuICAgICAgICAgICAgICAgICAgICBtYXJnaW46IGF1dG8gYXV0bztcbiAgICAgICAgICAgICAgICAgICAgY3Vyc29yOiBwb2ludGVyO1xuICAgICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiBncmVlbjtcbiAgICAgICAgICAgICAgICAgICAgY29sb3I6ICNmZmZmZmY7XG4gICAgICAgICAgICAgICAgICAgIHdpZHRoOiAxMDBweDtcbiAgICAgICAgICAgICAgICAgICAgZm9udC1mYW1pbHk6IFwiQXJpYWxcIjtcbiAgICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgICAgLmRlc2NyaXB0aW9uIHtcbiAgICAgICAgICAgICAgICAgICAgZm9udC1mYW1pbHk6IFwiQXJpYWxcIjtcbiAgICAgICAgICAgICAgICAgICAgZm9udC1zaXplOiBcIjEwcHhcIjtcbiAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgICAgYSB7XG4gICAgICAgICAgICAgICAgICAgIHRleHQtZGVjb3JhdGlvbjogdW5kZXJsaW5lO1xuICAgICAgICAgICAgICAgICAgICBjb2xvcjogZ3JlZW47XG4gICAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICAgIGE6aG92ZXIge1xuICAgICAgICAgICAgICAgICAgICBvcGFjaXR5OiAwLjY7XG4gICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICB0YWJsZSB7XG4gICAgICAgICAgICAgICAgICAgIGZvbnQtZmFtaWx5OiBhcmlhbCwgc2Fucy1zZXJpZjtcbiAgICAgICAgICAgICAgICAgICAgYm9yZGVyLWNvbGxhcHNlOiBjb2xsYXBzZTtcbiAgICAgICAgICAgICAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICAgIHRkLCB0aCB7XG4gICAgICAgICAgICAgICAgICAgIGJvcmRlcjogMXB4IHNvbGlkICNmZmZmZmY7XG4gICAgICAgICAgICAgICAgICAgIHRleHQtYWxpZ246IGxlZnQ7XG4gICAgICAgICAgICAgICAgICAgIHBhZGRpbmc6IDhweDtcbiAgICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgICAgdHI6bnRoLWNoaWxkKGV2ZW4pIHtcbiAgICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogI2RkZGRkZDtcbiAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgYH08L3N0eWxlPlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgKTtcbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBIb21lO1xuIl19 */\n/*@ sourceURL=/Users/ianfrye/cpsc350/completeWebApp/frontend/pages/index.js */"));
  }

}

/* harmony default export */ __webpack_exports__["default"] = (Home);

/***/ }),

/***/ 3:
/*!******************************!*\
  !*** multi ./pages/index.js ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /Users/ianfrye/cpsc350/completeWebApp/frontend/pages/index.js */"./pages/index.js");


/***/ }),

/***/ "bluebird":
/*!***************************!*\
  !*** external "bluebird" ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("bluebird");

/***/ }),

/***/ "isomorphic-fetch":
/*!***********************************!*\
  !*** external "isomorphic-fetch" ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("isomorphic-fetch");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),

/***/ "styled-jsx/style":
/*!***********************************!*\
  !*** external "styled-jsx/style" ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("styled-jsx/style");

/***/ })

/******/ });
//# sourceMappingURL=index.js.map