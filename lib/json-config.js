(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define("JsonConfig", [], factory);
	else if(typeof exports === 'object')
		exports["JsonConfig"] = factory();
	else
		root["JsonConfig"] = factory();
})((typeof self !== 'undefined' ? self : this), function() {
return /******/ (function(modules) { // webpackBootstrap
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
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/json-config.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/json-config.js":
/*!****************************!*\
  !*** ./src/json-config.js ***!
  \****************************/
/*! exports provided: JsonConfig */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"JsonConfig\", function() { return JsonConfig; });\nclass JsonConfig {\r\n\r\n    constructor(json)   {\r\n        this.json = json;\r\n        this.usedefault = {usedefault:true};\r\n    }\r\n    \r\n    getIndex(parent, path)    {\r\n        \r\n        var nodes = this.getValue(path);\r\n        var result = [];\r\n        \r\n        parent.map((item, index) => {\r\n            nodes.map(node => {\r\n                if (item == node) {\r\n                    result.push({index:index, node:node});\r\n                }\r\n            });\r\n        });\r\n\r\n        return result;\r\n\r\n    }\r\n\r\n    getValue(path, defaultValue)    {\r\n\r\n        if (( ! path) || (! this.json))    {\r\n            return defaultValue;\r\n        }\r\n\r\n        var pathElements = path.split('/');\r\n        var value = this.getItem(this.json, pathElements, defaultValue);\r\n        if ((value == null) || (value == this.usedefault))   {\r\n            value = defaultValue;\r\n        }\r\n        return value;\r\n\r\n    }\r\n\r\n    getItem(currentNode, pathElements)    {\r\n\r\n        if (pathElements && (pathElements.length > 0) && currentNode)    {\r\n            if (pathElements[0].indexOf('[') > -1)  {\r\n                var elements = this.searchItem(currentNode, pathElements[0]);\r\n                if (pathElements.length == 1)   {\r\n                    return elements;\r\n                } else {\r\n                    var tmp = [];\r\n                    elements.map(element => {\r\n                        var ret = this.getItem(element, pathElements.splice(1, pathElements.length));\r\n                        if (ret != null )    {\r\n                            tmp.push(ret);\r\n                        }\r\n                    })\r\n                    return tmp;\r\n                }\r\n            }\r\n            if (pathElements.length == 1)   {\r\n                return currentNode[pathElements[0]];\r\n            } else {\r\n                return this.getItem(currentNode[pathElements[0]], pathElements.splice(1, pathElements.length));\r\n            }\r\n        } else {\r\n            return null;\r\n        }\r\n \r\n    }\r\n\r\n    searchItem(currentNode, searchText) {\r\n\r\n        var path = searchText.split('[');\r\n        var search = path[1].substring(0, path[1].length - 1);\r\n        var keyValue = search.split('=');\r\n        var results = [];\r\n\r\n        currentNode.map(node => {\r\n            if (node[keyValue[0]] == keyValue[1])   {\r\n                results.push(node);\r\n            }\r\n        });\r\n\r\n        return results;\r\n\r\n    }\r\n\r\n    setValue(path, value)   {\r\n\r\n        var pathElements = path.split('/');\r\n        var searchPath = pathElements[0];\r\n        this.json = this.json ? this.json : {};\r\n        var tempValue = this.json;\r\n        \r\n        for (let i = 0; i < pathElements.length; i++)   {\r\n            var parent = tempValue;\r\n            tempValue = this.getItem(tempValue, [pathElements[i]]);\r\n            if (tempValue == null)  {\r\n                tempValue = parent[pathElements[i]] = {};\r\n            }\r\n            if ((i + 1) == pathElements.length)   {\r\n                parent[pathElements[i]] = value;\r\n            }\r\n        }\r\n\r\n    }\r\n\r\n}\n\n//# sourceURL=webpack://JsonConfig/./src/json-config.js?");

/***/ })

/******/ });
});