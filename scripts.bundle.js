webpackJsonp([3],{

/***/ "./node_modules/raw-loader/index.js!./node_modules/source-map-loader/index.js!./src/scripts/BOOTSTRA.386.js":
/***/ (function(module, exports) {

module.exports = "/******/ (function(modules) { // webpackBootstrap\n/******/ \t// The module cache\n/******/ \tvar installedModules = {};\n/******/\n/******/ \t// The require function\n/******/ \tfunction __webpack_require__(moduleId) {\n/******/\n/******/ \t\t// Check if module is in cache\n/******/ \t\tif(installedModules[moduleId])\n/******/ \t\t\treturn installedModules[moduleId].exports;\n/******/\n/******/ \t\t// Create a new module (and put it into the cache)\n/******/ \t\tvar module = installedModules[moduleId] = {\n/******/ \t\t\ti: moduleId,\n/******/ \t\t\tl: false,\n/******/ \t\t\texports: {}\n/******/ \t\t};\n/******/\n/******/ \t\t// Execute the module function\n/******/ \t\tmodules[moduleId].call(module.exports, module, module.exports, __webpack_require__);\n/******/\n/******/ \t\t// Flag the module as loaded\n/******/ \t\tmodule.l = true;\n/******/\n/******/ \t\t// Return the exports of the module\n/******/ \t\treturn module.exports;\n/******/ \t}\n/******/\n/******/\n/******/ \t// expose the modules object (__webpack_modules__)\n/******/ \t__webpack_require__.m = modules;\n/******/\n/******/ \t// expose the module cache\n/******/ \t__webpack_require__.c = installedModules;\n/******/\n/******/ \t// identity function for calling harmony imports with the correct context\n/******/ \t__webpack_require__.i = function(value) { return value; };\n/******/\n/******/ \t// define getter function for harmony exports\n/******/ \t__webpack_require__.d = function(exports, name, getter) {\n/******/ \t\tif(!__webpack_require__.o(exports, name)) {\n/******/ \t\t\tObject.defineProperty(exports, name, {\n/******/ \t\t\t\tconfigurable: false,\n/******/ \t\t\t\tenumerable: true,\n/******/ \t\t\t\tget: getter\n/******/ \t\t\t});\n/******/ \t\t}\n/******/ \t};\n/******/\n/******/ \t// getDefaultExport function for compatibility with non-harmony modules\n/******/ \t__webpack_require__.n = function(module) {\n/******/ \t\tvar getter = module && module.__esModule ?\n/******/ \t\t\tfunction getDefault() { return module['default']; } :\n/******/ \t\t\tfunction getModuleExports() { return module; };\n/******/ \t\t__webpack_require__.d(getter, 'a', getter);\n/******/ \t\treturn getter;\n/******/ \t};\n/******/\n/******/ \t// Object.prototype.hasOwnProperty.call\n/******/ \t__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };\n/******/\n/******/ \t// __webpack_public_path__\n/******/ \t__webpack_require__.p = \"\";\n/******/\n/******/ \t// Load entry module and return exports\n/******/ \treturn __webpack_require__(__webpack_require__.s = 2);\n/******/ })\n/************************************************************************/\n/******/ ([\n/* 0 */\n/***/ (function(module, exports) {\n\nwindow._386 = window._386 || {};\ndocument.addEventListener(\"DOMContentLoaded\", function () {\n  'use strict';\n  var character = {\n    height: 20,\n    width: 10\n  };\n\n  function loading() {\n    if (window._386.fastLoad) {\n      document.body.style.visibility = 'visible';\n      return;\n    }\n    \n    var\n      onePass = window._386.onePass,\n      speedFactor = 1 / (window._386.speedFactor || 1) * 165000,\n      wrap = document.createElement('div'),\n      bar = wrap.appendChild(document.createElement('div')),\n\n      cursor = document.createElement('div'),\n      // If the user specified that the visibility is hidden, then we\n      // start at the first pass ... otherwise we just do the\n      // cursor fly-by\n      pass = (document.body.visibility === 'visible') ? 1 : 0,\n      height = window.innerHeight || document.documentElement.clientHeight || document.body.clientHeight,\n      width = window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth,\n\n      // this makes the loading of the screen proportional to the real-estate of the window.\n      // it helps keep the cool sequence there while not making it waste too much time.\n      rounds = (height * width / speedFactor),\n      column = width,\n      row = height - character.height;\n\n    wrap.id = 'wrap386';\n    bar.id = 'bar386';\n    cursor.id = 'cursor386';\n\n    cursor.innerHTML = bar.innerHTML = '&#9604;';\n\n    // only inject the wrap if the pass is 0\n    if (pass === 0) {\n      document.body.appendChild(wrap);\n      document.body.style.visibility = 'visible';\n    } else {\n      document.body.appendChild(cursor);\n      rounds /= 2;\n      character.height *= 4;\n    }\n\n    var ival = setInterval(function () {\n      for (var m = 0; m < rounds; m++) {\n        column -= character.width;\n\n        if (column <= 0) {\n          column = width;\n          row -= character.height;\n        }\n        if (row <= 0) {\n          pass++;\n          row = height - character.height;\n\n          if (pass == 2) {\n            document.body.removeChild(cursor);\n            clearInterval(ival);\n          } else {\n            wrap.parentNode.removeChild(wrap);\n            if (onePass) {\n              clearInterval(ival);\n            } else {\n              document.body.appendChild(cursor);\n              rounds /= 2;\n              character.height *= 4;\n            }\n          }\n        }\n\n        if (pass === 0) {\n          bar.style.width = column + 'px';\n          wrap.style.height = row + 'px';\n        } else {\n          cursor.style.right = column + 'px';\n          cursor.style.bottom = row + 'px';\n        }\n      }\n    }, 1);\n  }\n  loading();\n});\n\n/***/ }),\n/* 1 */\n/***/ (function(module, exports) {\n\n// removed by extract-text-webpack-plugin\n\n/***/ }),\n/* 2 */\n/***/ (function(module, exports, __webpack_require__) {\n\n__webpack_require__(1);\nmodule.exports = __webpack_require__(0);\n\n\n/***/ })\n/******/ ]);\n"

/***/ }),

/***/ "./node_modules/script-loader/addScript.js":
/***/ (function(module, exports) {

/*
	MIT License http://www.opensource.org/licenses/mit-license.php
	Author Tobias Koppers @sokra
*/
module.exports = function(src) {
	if (typeof execScript !== "undefined")
		execScript(src);
	else
		eval.call(null, src);
}


/***/ }),

/***/ "./node_modules/script-loader/index.js!./src/scripts/BOOTSTRA.386.js":
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__("./node_modules/script-loader/addScript.js")(__webpack_require__("./node_modules/raw-loader/index.js!./node_modules/source-map-loader/index.js!./src/scripts/BOOTSTRA.386.js"))

/***/ }),

/***/ 3:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("./node_modules/script-loader/index.js!./src/scripts/BOOTSTRA.386.js");


/***/ })

},[3]);
//# sourceMappingURL=scripts.bundle.js.map