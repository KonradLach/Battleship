/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/css-loader/dist/cjs.js!./src/style.css":
/*!*************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/style.css ***!
  \*************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, "body{\n    background-color: rgb(192, 217, 228);\n    width: 100%;\n    height: 100%;\n}\n#mainContainer{\n    display: block;\n}\n#gameboards{\n    display: grid;\n    grid-template-columns: repeat(2,1fr);\n    margin: 10px;\n}\n#playerHeader, #computerHeader{\n    width: 40vw;\n    grid-row-start: 0;\n    grid-row-end: 1;\n}\n\n#playerGameboard, #computerGameboard{\n    display: grid;\n\n    grid-template-columns: repeat(10,1fr);\n    height: 40vw;\n    width: 40vw;\n}\n.cell{\n    border: 1px solid black;\n    height: 100%;\n    width: 100%;\n    text-align: center;\n    font-size: x-small;\n}\n\n.battleship{\n    background-color:#2b2424;\n    border-top: 1px solid black;\n}\n\n.submarine{\n    background-color: #1c093f;\n}\n\n.cruiser{\n    background-color: #3b647c;\n}\n\n.carrier{\n    background-color: #412d44;\n}\n\n.destroyer{\n    background-color: #cc2cc4;\n}\n.empty{\n    background-color: #ffffff;\n}\n.hit{\n    background-color: #c28a23;\n}\n", "",{"version":3,"sources":["webpack://./src/style.css"],"names":[],"mappings":"AAAA;IACI,oCAAoC;IACpC,WAAW;IACX,YAAY;AAChB;AACA;IACI,cAAc;AAClB;AACA;IACI,aAAa;IACb,oCAAoC;IACpC,YAAY;AAChB;AACA;IACI,WAAW;IACX,iBAAiB;IACjB,eAAe;AACnB;;AAEA;IACI,aAAa;;IAEb,qCAAqC;IACrC,YAAY;IACZ,WAAW;AACf;AACA;IACI,uBAAuB;IACvB,YAAY;IACZ,WAAW;IACX,kBAAkB;IAClB,kBAAkB;AACtB;;AAEA;IACI,wBAAwB;IACxB,2BAA2B;AAC/B;;AAEA;IACI,yBAAyB;AAC7B;;AAEA;IACI,yBAAyB;AAC7B;;AAEA;IACI,yBAAyB;AAC7B;;AAEA;IACI,yBAAyB;AAC7B;AACA;IACI,yBAAyB;AAC7B;AACA;IACI,yBAAyB;AAC7B","sourcesContent":["body{\n    background-color: rgb(192, 217, 228);\n    width: 100%;\n    height: 100%;\n}\n#mainContainer{\n    display: block;\n}\n#gameboards{\n    display: grid;\n    grid-template-columns: repeat(2,1fr);\n    margin: 10px;\n}\n#playerHeader, #computerHeader{\n    width: 40vw;\n    grid-row-start: 0;\n    grid-row-end: 1;\n}\n\n#playerGameboard, #computerGameboard{\n    display: grid;\n\n    grid-template-columns: repeat(10,1fr);\n    height: 40vw;\n    width: 40vw;\n}\n.cell{\n    border: 1px solid black;\n    height: 100%;\n    width: 100%;\n    text-align: center;\n    font-size: x-small;\n}\n\n.battleship{\n    background-color:#2b2424;\n    border-top: 1px solid black;\n}\n\n.submarine{\n    background-color: #1c093f;\n}\n\n.cruiser{\n    background-color: #3b647c;\n}\n\n.carrier{\n    background-color: #412d44;\n}\n\n.destroyer{\n    background-color: #cc2cc4;\n}\n.empty{\n    background-color: #ffffff;\n}\n.hit{\n    background-color: #c28a23;\n}\n"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {



/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
module.exports = function (cssWithMappingToString) {
  var list = []; // return the list of modules as css string

  list.toString = function toString() {
    return this.map(function (item) {
      var content = "";
      var needLayer = typeof item[5] !== "undefined";

      if (item[4]) {
        content += "@supports (".concat(item[4], ") {");
      }

      if (item[2]) {
        content += "@media ".concat(item[2], " {");
      }

      if (needLayer) {
        content += "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {");
      }

      content += cssWithMappingToString(item);

      if (needLayer) {
        content += "}";
      }

      if (item[2]) {
        content += "}";
      }

      if (item[4]) {
        content += "}";
      }

      return content;
    }).join("");
  }; // import a list of modules into the list


  list.i = function i(modules, media, dedupe, supports, layer) {
    if (typeof modules === "string") {
      modules = [[null, modules, undefined]];
    }

    var alreadyImportedModules = {};

    if (dedupe) {
      for (var k = 0; k < this.length; k++) {
        var id = this[k][0];

        if (id != null) {
          alreadyImportedModules[id] = true;
        }
      }
    }

    for (var _k = 0; _k < modules.length; _k++) {
      var item = [].concat(modules[_k]);

      if (dedupe && alreadyImportedModules[item[0]]) {
        continue;
      }

      if (typeof layer !== "undefined") {
        if (typeof item[5] === "undefined") {
          item[5] = layer;
        } else {
          item[1] = "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {").concat(item[1], "}");
          item[5] = layer;
        }
      }

      if (media) {
        if (!item[2]) {
          item[2] = media;
        } else {
          item[1] = "@media ".concat(item[2], " {").concat(item[1], "}");
          item[2] = media;
        }
      }

      if (supports) {
        if (!item[4]) {
          item[4] = "".concat(supports);
        } else {
          item[1] = "@supports (".concat(item[4], ") {").concat(item[1], "}");
          item[4] = supports;
        }
      }

      list.push(item);
    }
  };

  return list;
};

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/sourceMaps.js":
/*!************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/sourceMaps.js ***!
  \************************************************************/
/***/ ((module) => {



module.exports = function (item) {
  var content = item[1];
  var cssMapping = item[3];

  if (!cssMapping) {
    return content;
  }

  if (typeof btoa === "function") {
    var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(cssMapping))));
    var data = "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(base64);
    var sourceMapping = "/*# ".concat(data, " */");
    var sourceURLs = cssMapping.sources.map(function (source) {
      return "/*# sourceURL=".concat(cssMapping.sourceRoot || "").concat(source, " */");
    });
    return [content].concat(sourceURLs).concat([sourceMapping]).join("\n");
  }

  return [content].join("\n");
};

/***/ }),

/***/ "./src/style.css":
/*!***********************!*\
  !*** ./src/style.css ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!./style.css */ "./node_modules/css-loader/dist/cjs.js!./src/style.css");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {



var stylesInDOM = [];

function getIndexByIdentifier(identifier) {
  var result = -1;

  for (var i = 0; i < stylesInDOM.length; i++) {
    if (stylesInDOM[i].identifier === identifier) {
      result = i;
      break;
    }
  }

  return result;
}

function modulesToDom(list, options) {
  var idCountMap = {};
  var identifiers = [];

  for (var i = 0; i < list.length; i++) {
    var item = list[i];
    var id = options.base ? item[0] + options.base : item[0];
    var count = idCountMap[id] || 0;
    var identifier = "".concat(id, " ").concat(count);
    idCountMap[id] = count + 1;
    var indexByIdentifier = getIndexByIdentifier(identifier);
    var obj = {
      css: item[1],
      media: item[2],
      sourceMap: item[3],
      supports: item[4],
      layer: item[5]
    };

    if (indexByIdentifier !== -1) {
      stylesInDOM[indexByIdentifier].references++;
      stylesInDOM[indexByIdentifier].updater(obj);
    } else {
      var updater = addElementStyle(obj, options);
      options.byIndex = i;
      stylesInDOM.splice(i, 0, {
        identifier: identifier,
        updater: updater,
        references: 1
      });
    }

    identifiers.push(identifier);
  }

  return identifiers;
}

function addElementStyle(obj, options) {
  var api = options.domAPI(options);
  api.update(obj);

  var updater = function updater(newObj) {
    if (newObj) {
      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {
        return;
      }

      api.update(obj = newObj);
    } else {
      api.remove();
    }
  };

  return updater;
}

module.exports = function (list, options) {
  options = options || {};
  list = list || [];
  var lastIdentifiers = modulesToDom(list, options);
  return function update(newList) {
    newList = newList || [];

    for (var i = 0; i < lastIdentifiers.length; i++) {
      var identifier = lastIdentifiers[i];
      var index = getIndexByIdentifier(identifier);
      stylesInDOM[index].references--;
    }

    var newLastIdentifiers = modulesToDom(newList, options);

    for (var _i = 0; _i < lastIdentifiers.length; _i++) {
      var _identifier = lastIdentifiers[_i];

      var _index = getIndexByIdentifier(_identifier);

      if (stylesInDOM[_index].references === 0) {
        stylesInDOM[_index].updater();

        stylesInDOM.splice(_index, 1);
      }
    }

    lastIdentifiers = newLastIdentifiers;
  };
};

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {



var memo = {};
/* istanbul ignore next  */

function getTarget(target) {
  if (typeof memo[target] === "undefined") {
    var styleTarget = document.querySelector(target); // Special case to return head of iframe instead of iframe itself

    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
      try {
        // This will throw an exception if access to iframe is blocked
        // due to cross-origin restrictions
        styleTarget = styleTarget.contentDocument.head;
      } catch (e) {
        // istanbul ignore next
        styleTarget = null;
      }
    }

    memo[target] = styleTarget;
  }

  return memo[target];
}
/* istanbul ignore next  */


function insertBySelector(insert, style) {
  var target = getTarget(insert);

  if (!target) {
    throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
  }

  target.appendChild(style);
}

module.exports = insertBySelector;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function insertStyleElement(options) {
  var element = document.createElement("style");
  options.setAttributes(element, options.attributes);
  options.insert(element, options.options);
  return element;
}

module.exports = insertStyleElement;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {



/* istanbul ignore next  */
function setAttributesWithoutAttributes(styleElement) {
  var nonce =  true ? __webpack_require__.nc : 0;

  if (nonce) {
    styleElement.setAttribute("nonce", nonce);
  }
}

module.exports = setAttributesWithoutAttributes;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function apply(styleElement, options, obj) {
  var css = "";

  if (obj.supports) {
    css += "@supports (".concat(obj.supports, ") {");
  }

  if (obj.media) {
    css += "@media ".concat(obj.media, " {");
  }

  var needLayer = typeof obj.layer !== "undefined";

  if (needLayer) {
    css += "@layer".concat(obj.layer.length > 0 ? " ".concat(obj.layer) : "", " {");
  }

  css += obj.css;

  if (needLayer) {
    css += "}";
  }

  if (obj.media) {
    css += "}";
  }

  if (obj.supports) {
    css += "}";
  }

  var sourceMap = obj.sourceMap;

  if (sourceMap && typeof btoa !== "undefined") {
    css += "\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), " */");
  } // For old IE

  /* istanbul ignore if  */


  options.styleTagTransform(css, styleElement, options.options);
}

function removeStyleElement(styleElement) {
  // istanbul ignore if
  if (styleElement.parentNode === null) {
    return false;
  }

  styleElement.parentNode.removeChild(styleElement);
}
/* istanbul ignore next  */


function domAPI(options) {
  var styleElement = options.insertStyleElement(options);
  return {
    update: function update(obj) {
      apply(styleElement, options, obj);
    },
    remove: function remove() {
      removeStyleElement(styleElement);
    }
  };
}

module.exports = domAPI;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function styleTagTransform(css, styleElement) {
  if (styleElement.styleSheet) {
    styleElement.styleSheet.cssText = css;
  } else {
    while (styleElement.firstChild) {
      styleElement.removeChild(styleElement.firstChild);
    }

    styleElement.appendChild(document.createTextNode(css));
  }
}

module.exports = styleTagTransform;

/***/ }),

/***/ "./src/domManip.js":
/*!*************************!*\
  !*** ./src/domManip.js ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "createElement": () => (/* binding */ createElement)
/* harmony export */ });
const createElement = {
    createSection: function(idName) {
        let section = document.createElement("section");
        section.setAttribute('id',idName);
        return section;
    },
    createDiv: function(idName){
        let div = document.createElement("div");
        div.setAttribute('id',idName);
        return div;
    },
    createPara: function(text){
        let para = document.createElement("p");
        para.textContent = text;
        return para;
    },
    createLi: function(ul,arr){
        for(let i=0;i< arr.length;i++){
            let li = document.createElement("li");
            li.innerHTML = arr[i];
            ul.appendChild(li)
        }
        return ul;
    },
    createH: function(num,text){
        const heading = document.createElement(`h${num}`);
        heading.innerText = text;
        return heading
    }
}
// const createContainer = () =>{
//     const main = createElement.createDiv('mainContainer');
//     document.body.appendChild(main);
//     const header = createElement.createH(1,"Battleship");
//     main.appendChild(header);
//     main.appendChild(createGameBoard());
// }

// const createGameBoard = () =>{
//     let gameBoardSize = 10;
//     const gameBoard = createElement.createDiv('gameBoard');
//     for(let i=0; i<(gameBoardSize * gameBoardSize);i++){
//         let gameCell = createElement.createDiv(`${i}`)
//         gameCell.classList.add("cell");
//         gameBoard.appendChild(gameCell);
//     }
//     return gameBoard
// }




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
/******/ 			id: moduleId,
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
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
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
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "computer": () => (/* binding */ computer),
/* harmony export */   "gameBoardFactory": () => (/* binding */ gameBoardFactory),
/* harmony export */   "player": () => (/* binding */ player),
/* harmony export */   "shipFactory": () => (/* binding */ shipFactory)
/* harmony export */ });
/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./style.css */ "./src/style.css");
/* harmony import */ var _domManip_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./domManip.js */ "./src/domManip.js");




//Factory function to create the ships
const shipFactory = (name,length) => {
    //creates an array the size of the ships length to keep track of hits.
    const shipHealth = [];

    //updates the shipHealth array with the position the ship got hit in
    const hit = () => {
        shipHealth.push('x')
            return shipHealth;
    }
    //if every value in the shipHealth array is hit this function returns that the ship is sunk
    const isSunk = () => {
        if(shipHealth.length === length){
            return true
        }
        return false
    }
    return {name,length,hit, isSunk}
}

//Factory function to create game board
const gameBoardFactory = () =>{
    let gameArray = [];
    //create empty array to initialize the game
    const startGame = () =>{
            gameArray = [
            ['','','','','','','','','',''],
            ['','','','','','','','','',''],
            ['','','','','','','','','',''],
            ['','','','','','','','','',''],
            ['','','','','','','','','',''],
            ['','','','','','','','','',''],
            ['','','','','','','','','',''],
            ['','','','','','','','','',''],
            ['','','','','','','','','',''],
            ['','','','','','','','','','']
        ]

    }
    let shipsAlive = [];

    //places ship in row and column and orients how the player wants 
    const place = (ship,row, column, orient) => {
        //checks if where the ship is to be placed is empty
        const canPlace = () => {
            let empty = true
            //checking if ship is already in the spot new ship is to be placed
            if(orient === 'horizontal'){
                for(let i = column; i< (column+ship.length); i++){
                    if(gameArray[row][i] !== ''){
                        empty = false
                    }
                }
            }  
            else if(orient === 'vertical'){
                for(let i = row; i< (row+ship.length); i++){
                    if(gameArray[i][column] !== ''){
                        empty = false
                    }
                }
            }  
            return empty
        };
        //horizontal orrientation placement
        if(orient === 'horizontal'  && canPlace()) {
            for(let i = column; i< (column+ship.length); i++){
                gameArray[row][i] = ship;
            }
            shipsAlive.push(ship.name)
        }

        //vertical orrientations placement
        else if(orient === 'vertical' && canPlace()) {
            for(let i = row; i<((ship.length + row));i++){
                gameArray[i][column] = ship;
            }
        }
        return gameArray;
    }


    const recieveAttack = (row,column) =>{
        if(gameArray[row][column] === ''){
            gameArray[row][column] = 'x'
        }
        else{
            gameArray[row][column].hit();
            if(gameArray[row][column].isSunk()){
                shipsAlive.pop(gameArray[row][column].name)
            }
            gameArray[row][column] = 'X';
            
        }
        return gameArray
    }
    const arrayGetter = () => gameArray;
    return{startGame, place, recieveAttack,arrayGetter}
}

const player = () =>{
    let playerBoard = gameBoardFactory();
    playerBoard.startGame();
    const playerPlace = (ship,row,column,orient) =>{
        playerBoard.place(ship,row,column,orient);
        return playerBoard
    }
    const playerAttack = (computerBoard,e) => {
        const row = parseInt(e.target.id[0])
        // let row = prompt('Choose row 0-10');
        const col = parseInt(e.target.id[1])
        // let col = prompt('Choose column 0-10');
        console.log(computerBoard.arrayGetter())
        computerBoard.recieveAttack(row,col);
        return true
    }   
    return {playerBoard,playerPlace,playerAttack}
}

const computer = () => {
    let computerBoard = gameBoardFactory();
    computerBoard.startGame();
    const computerRandomAttack = (playerBoard) =>{
        let randomChoice = () => {
            let randomRow = Math.floor(Math.random() *10)
            let randomColumn = Math.floor(Math.random() * 10)
            return [randomRow, randomColumn]
        }
        let random= randomChoice();
        let row = random[0];
        let column = random[1];
        playerBoard.recieveAttack(row,column);
        return playerBoard.arrayGetter();
    }
    return {computerBoard,computerRandomAttack}
}

const initGame = () =>{
    const player1 = player();
    const computer1 = computer();
    const playerSub = shipFactory("submarine",3);
    const playerCarrier = shipFactory("carrier",5);
    const playerBattleship = shipFactory('battleship',4);
    const playerCruiser = shipFactory('cruiser',3);
    const playerDestroyer = shipFactory('destroyer', 2);
    const computerSub = shipFactory("submarine",3);
    const computerCarrier = shipFactory("carrier",5);
    const computerBattleship = shipFactory('battleship',4);
    const computerCruiser = shipFactory('cruiser',3);
    const computerDestroyer = shipFactory('destroyer', 2);
    createContainer();
    createGameBoardUI(player1.playerBoard.arrayGetter(),computer1.computerBoard.arrayGetter());
    
    player1.playerPlace(playerSub,0,0,'horizontal');
    player1.playerPlace(playerCarrier,1,0,'horizontal');
    player1.playerPlace(playerBattleship,2,0,'horizontal');
    player1.playerPlace(playerCruiser,4,0,'horizontal');
    player1.playerPlace(playerDestroyer,5,0,'horizontal');
    computer1.computerBoard.place(computerSub,0,0,'horizontal');
    computer1.computerBoard.place(computerCarrier,1,0,'horizontal');
    computer1.computerBoard.place(computerBattleship,2,0,'horizontal');
    computer1.computerBoard.place(computerCruiser,3,0,'horizontal');
    computer1.computerBoard.place(computerDestroyer,4,0,'horizontal');
    updateGameboard(player1,computer1);
    const playerGameboardDiv = document.getElementById('playerGameboard');
    playerGameboardDiv.addEventListener('click',e => {
        playGame(player1,computer1,e)
    })
    }

const playGame = (player1,computer1,e) => {
    player1.playerAttack(computer1.computerBoard,e)
    computer1.computerRandomAttack(player1.playerBoard)
    updateGameboard(player1,computer1);

}

const updateGameboard = (player1,computer1) =>{
    for(let i=0; i<(player1.playerBoard.arrayGetter().length);i++){
        for(let j=0; j<(player1.playerBoard.arrayGetter()[i].length);j++){
            
            let gameCell = document.getElementById(`${i}${j}`)
            if(typeof player1.playerBoard.arrayGetter()[i][j] === 'object'){
                let name = player1.playerBoard.arrayGetter()[i][j].name
                gameCell.classList.add(name)
            }
            else if(player1.playerBoard.arrayGetter()[i][j] === 'x'){
                gameCell.classList.add('empty')
            }
            else if(player1.playerBoard.arrayGetter()[i][j] === 'X'){
                gameCell.classList.add('hit')
            }
        }
    }
    for(let i=0; i<(computer1.computerBoard.arrayGetter().length);i++){
        for(let j=0; j<(computer1.computerBoard.arrayGetter()[i].length);j++){
            let gameCell = document.getElementById(`${i}${j}computer`)
            if(typeof computer1.computerBoard.arrayGetter()[i][j] === 'object'){
                gameCell.innerHTML = computer1.computerBoard.arrayGetter()[i][j].name
            }
            else{
                gameCell.innerHTML = computer1.computerBoard.arrayGetter()[i][j];
            }
        }
    }
}

const createContainer = () =>{
    const main = _domManip_js__WEBPACK_IMPORTED_MODULE_1__.createElement.createDiv('mainContainer');
    document.body.appendChild(main);
    const header = _domManip_js__WEBPACK_IMPORTED_MODULE_1__.createElement.createH(1,"Battleship");
    main.appendChild(header);
}

const createGameBoardUI = (player1,computer1) => {
    const main = document.getElementById('mainContainer');
    const gameboards = _domManip_js__WEBPACK_IMPORTED_MODULE_1__.createElement.createDiv('gameboards');
    const playerGameboard = _domManip_js__WEBPACK_IMPORTED_MODULE_1__.createElement.createDiv('playerGameboard');
    const computerGameboard = _domManip_js__WEBPACK_IMPORTED_MODULE_1__.createElement.createDiv('computerGameboard');
    const playerHeader = _domManip_js__WEBPACK_IMPORTED_MODULE_1__.createElement.createH(2,'Player\'s Board');
    const computerHeader = _domManip_js__WEBPACK_IMPORTED_MODULE_1__.createElement.createH(2,'Computer\'s Header')
    playerHeader.setAttribute('id','playerHeader');
    computerHeader.setAttribute('id','computerHeader');
    for(let i=0; i<(player1.length);i++){
        for(let j=0; j<(player1[i].length);j++){
            let gameCell = _domManip_js__WEBPACK_IMPORTED_MODULE_1__.createElement.createDiv(`${i}${j}`)
            gameCell.classList.add("cell");
            playerGameboard.appendChild(gameCell);
        }
    }
    for(let i=0; i<(computer1.length);i++){
        for(let j=0; j<(computer1[i].length);j++){
            let gameCell = _domManip_js__WEBPACK_IMPORTED_MODULE_1__.createElement.createDiv(`${i}${j}computer`)
            gameCell.classList.add("cell");
            computerGameboard.appendChild(gameCell);
        }
    }
    main.appendChild(gameboards)
    gameboards.append(playerHeader,playerGameboard,computerHeader,computerGameboard)

}

initGame()


})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUNBO0FBQ0EsaUJBQWlCLG1CQUFtQjtBQUNwQyxxQkFBcUIsc0JBQXNCO0FBQzNDLDJCQUEyQixpRUFBdUIsSUFBSSxFQUFFLEVBQUUsRUFBRTtBQUM1RDtBQUNBO0FBQ0E7QUFDQTtBQUNBLGlCQUFpQixxQkFBcUI7QUFDdEMscUJBQXFCLHdCQUF3QjtBQUM3QywyQkFBMkIsaUVBQXVCLElBQUksRUFBRSxFQUFFLEVBQUU7QUFDNUQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL3NyYy9zdHlsZS5jc3MiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9zcmMvc3R5bGUuY3NzPzcxNjMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vc3JjL2RvbU1hbmlwLmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC93ZWJwYWNrL3J1bnRpbWUvY29tcGF0IGdldCBkZWZhdWx0IGV4cG9ydCIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwL3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwL3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9zcmMvaW5kZXguanMiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gSW1wb3J0c1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCI7XG52YXIgX19fQ1NTX0xPQURFUl9FWFBPUlRfX18gPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyk7XG4vLyBNb2R1bGVcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgXCJib2R5e1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMTkyLCAyMTcsIDIyOCk7XFxuICAgIHdpZHRoOiAxMDAlO1xcbiAgICBoZWlnaHQ6IDEwMCU7XFxufVxcbiNtYWluQ29udGFpbmVye1xcbiAgICBkaXNwbGF5OiBibG9jaztcXG59XFxuI2dhbWVib2FyZHN7XFxuICAgIGRpc3BsYXk6IGdyaWQ7XFxuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogcmVwZWF0KDIsMWZyKTtcXG4gICAgbWFyZ2luOiAxMHB4O1xcbn1cXG4jcGxheWVySGVhZGVyLCAjY29tcHV0ZXJIZWFkZXJ7XFxuICAgIHdpZHRoOiA0MHZ3O1xcbiAgICBncmlkLXJvdy1zdGFydDogMDtcXG4gICAgZ3JpZC1yb3ctZW5kOiAxO1xcbn1cXG5cXG4jcGxheWVyR2FtZWJvYXJkLCAjY29tcHV0ZXJHYW1lYm9hcmR7XFxuICAgIGRpc3BsYXk6IGdyaWQ7XFxuXFxuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogcmVwZWF0KDEwLDFmcik7XFxuICAgIGhlaWdodDogNDB2dztcXG4gICAgd2lkdGg6IDQwdnc7XFxufVxcbi5jZWxse1xcbiAgICBib3JkZXI6IDFweCBzb2xpZCBibGFjaztcXG4gICAgaGVpZ2h0OiAxMDAlO1xcbiAgICB3aWR0aDogMTAwJTtcXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xcbiAgICBmb250LXNpemU6IHgtc21hbGw7XFxufVxcblxcbi5iYXR0bGVzaGlwe1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiMyYjI0MjQ7XFxuICAgIGJvcmRlci10b3A6IDFweCBzb2xpZCBibGFjaztcXG59XFxuXFxuLnN1Ym1hcmluZXtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzFjMDkzZjtcXG59XFxuXFxuLmNydWlzZXJ7XFxuICAgIGJhY2tncm91bmQtY29sb3I6ICMzYjY0N2M7XFxufVxcblxcbi5jYXJyaWVye1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjNDEyZDQ0O1xcbn1cXG5cXG4uZGVzdHJveWVye1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjY2MyY2M0O1xcbn1cXG4uZW1wdHl7XFxuICAgIGJhY2tncm91bmQtY29sb3I6ICNmZmZmZmY7XFxufVxcbi5oaXR7XFxuICAgIGJhY2tncm91bmQtY29sb3I6ICNjMjhhMjM7XFxufVxcblwiLCBcIlwiLHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcIndlYnBhY2s6Ly8uL3NyYy9zdHlsZS5jc3NcIl0sXCJuYW1lc1wiOltdLFwibWFwcGluZ3NcIjpcIkFBQUE7SUFDSSxvQ0FBb0M7SUFDcEMsV0FBVztJQUNYLFlBQVk7QUFDaEI7QUFDQTtJQUNJLGNBQWM7QUFDbEI7QUFDQTtJQUNJLGFBQWE7SUFDYixvQ0FBb0M7SUFDcEMsWUFBWTtBQUNoQjtBQUNBO0lBQ0ksV0FBVztJQUNYLGlCQUFpQjtJQUNqQixlQUFlO0FBQ25COztBQUVBO0lBQ0ksYUFBYTs7SUFFYixxQ0FBcUM7SUFDckMsWUFBWTtJQUNaLFdBQVc7QUFDZjtBQUNBO0lBQ0ksdUJBQXVCO0lBQ3ZCLFlBQVk7SUFDWixXQUFXO0lBQ1gsa0JBQWtCO0lBQ2xCLGtCQUFrQjtBQUN0Qjs7QUFFQTtJQUNJLHdCQUF3QjtJQUN4QiwyQkFBMkI7QUFDL0I7O0FBRUE7SUFDSSx5QkFBeUI7QUFDN0I7O0FBRUE7SUFDSSx5QkFBeUI7QUFDN0I7O0FBRUE7SUFDSSx5QkFBeUI7QUFDN0I7O0FBRUE7SUFDSSx5QkFBeUI7QUFDN0I7QUFDQTtJQUNJLHlCQUF5QjtBQUM3QjtBQUNBO0lBQ0kseUJBQXlCO0FBQzdCXCIsXCJzb3VyY2VzQ29udGVudFwiOltcImJvZHl7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYigxOTIsIDIxNywgMjI4KTtcXG4gICAgd2lkdGg6IDEwMCU7XFxuICAgIGhlaWdodDogMTAwJTtcXG59XFxuI21haW5Db250YWluZXJ7XFxuICAgIGRpc3BsYXk6IGJsb2NrO1xcbn1cXG4jZ2FtZWJvYXJkc3tcXG4gICAgZGlzcGxheTogZ3JpZDtcXG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiByZXBlYXQoMiwxZnIpO1xcbiAgICBtYXJnaW46IDEwcHg7XFxufVxcbiNwbGF5ZXJIZWFkZXIsICNjb21wdXRlckhlYWRlcntcXG4gICAgd2lkdGg6IDQwdnc7XFxuICAgIGdyaWQtcm93LXN0YXJ0OiAwO1xcbiAgICBncmlkLXJvdy1lbmQ6IDE7XFxufVxcblxcbiNwbGF5ZXJHYW1lYm9hcmQsICNjb21wdXRlckdhbWVib2FyZHtcXG4gICAgZGlzcGxheTogZ3JpZDtcXG5cXG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiByZXBlYXQoMTAsMWZyKTtcXG4gICAgaGVpZ2h0OiA0MHZ3O1xcbiAgICB3aWR0aDogNDB2dztcXG59XFxuLmNlbGx7XFxuICAgIGJvcmRlcjogMXB4IHNvbGlkIGJsYWNrO1xcbiAgICBoZWlnaHQ6IDEwMCU7XFxuICAgIHdpZHRoOiAxMDAlO1xcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICAgIGZvbnQtc2l6ZTogeC1zbWFsbDtcXG59XFxuXFxuLmJhdHRsZXNoaXB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IzJiMjQyNDtcXG4gICAgYm9yZGVyLXRvcDogMXB4IHNvbGlkIGJsYWNrO1xcbn1cXG5cXG4uc3VibWFyaW5le1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMWMwOTNmO1xcbn1cXG5cXG4uY3J1aXNlcntcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzNiNjQ3YztcXG59XFxuXFxuLmNhcnJpZXJ7XFxuICAgIGJhY2tncm91bmQtY29sb3I6ICM0MTJkNDQ7XFxufVxcblxcbi5kZXN0cm95ZXJ7XFxuICAgIGJhY2tncm91bmQtY29sb3I6ICNjYzJjYzQ7XFxufVxcbi5lbXB0eXtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZmZmZjtcXG59XFxuLmhpdHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2MyOGEyMztcXG59XFxuXCJdLFwic291cmNlUm9vdFwiOlwiXCJ9XSk7XG4vLyBFeHBvcnRzXG5leHBvcnQgZGVmYXVsdCBfX19DU1NfTE9BREVSX0VYUE9SVF9fXztcbiIsIlwidXNlIHN0cmljdFwiO1xuXG4vKlxuICBNSVQgTGljZW5zZSBodHRwOi8vd3d3Lm9wZW5zb3VyY2Uub3JnL2xpY2Vuc2VzL21pdC1saWNlbnNlLnBocFxuICBBdXRob3IgVG9iaWFzIEtvcHBlcnMgQHNva3JhXG4qL1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoY3NzV2l0aE1hcHBpbmdUb1N0cmluZykge1xuICB2YXIgbGlzdCA9IFtdOyAvLyByZXR1cm4gdGhlIGxpc3Qgb2YgbW9kdWxlcyBhcyBjc3Mgc3RyaW5nXG5cbiAgbGlzdC50b1N0cmluZyA9IGZ1bmN0aW9uIHRvU3RyaW5nKCkge1xuICAgIHJldHVybiB0aGlzLm1hcChmdW5jdGlvbiAoaXRlbSkge1xuICAgICAgdmFyIGNvbnRlbnQgPSBcIlwiO1xuICAgICAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBpdGVtWzVdICE9PSBcInVuZGVmaW5lZFwiO1xuXG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIik7XG4gICAgICB9XG5cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIik7XG4gICAgICB9XG5cbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpO1xuICAgICAgfVxuXG4gICAgICBjb250ZW50ICs9IGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcoaXRlbSk7XG5cbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cblxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cblxuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIGNvbnRlbnQ7XG4gICAgfSkuam9pbihcIlwiKTtcbiAgfTsgLy8gaW1wb3J0IGEgbGlzdCBvZiBtb2R1bGVzIGludG8gdGhlIGxpc3RcblxuXG4gIGxpc3QuaSA9IGZ1bmN0aW9uIGkobW9kdWxlcywgbWVkaWEsIGRlZHVwZSwgc3VwcG9ydHMsIGxheWVyKSB7XG4gICAgaWYgKHR5cGVvZiBtb2R1bGVzID09PSBcInN0cmluZ1wiKSB7XG4gICAgICBtb2R1bGVzID0gW1tudWxsLCBtb2R1bGVzLCB1bmRlZmluZWRdXTtcbiAgICB9XG5cbiAgICB2YXIgYWxyZWFkeUltcG9ydGVkTW9kdWxlcyA9IHt9O1xuXG4gICAgaWYgKGRlZHVwZSkge1xuICAgICAgZm9yICh2YXIgayA9IDA7IGsgPCB0aGlzLmxlbmd0aDsgaysrKSB7XG4gICAgICAgIHZhciBpZCA9IHRoaXNba11bMF07XG5cbiAgICAgICAgaWYgKGlkICE9IG51bGwpIHtcbiAgICAgICAgICBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2lkXSA9IHRydWU7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG5cbiAgICBmb3IgKHZhciBfayA9IDA7IF9rIDwgbW9kdWxlcy5sZW5ndGg7IF9rKyspIHtcbiAgICAgIHZhciBpdGVtID0gW10uY29uY2F0KG1vZHVsZXNbX2tdKTtcblxuICAgICAgaWYgKGRlZHVwZSAmJiBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2l0ZW1bMF1dKSB7XG4gICAgICAgIGNvbnRpbnVlO1xuICAgICAgfVxuXG4gICAgICBpZiAodHlwZW9mIGxheWVyICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgIGlmICh0eXBlb2YgaXRlbVs1XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBpZiAobWVkaWEpIHtcbiAgICAgICAgaWYgKCFpdGVtWzJdKSB7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBpZiAoc3VwcG9ydHMpIHtcbiAgICAgICAgaWYgKCFpdGVtWzRdKSB7XG4gICAgICAgICAgaXRlbVs0XSA9IFwiXCIuY29uY2F0KHN1cHBvcnRzKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNF0gPSBzdXBwb3J0cztcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBsaXN0LnB1c2goaXRlbSk7XG4gICAgfVxuICB9O1xuXG4gIHJldHVybiBsaXN0O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoaXRlbSkge1xuICB2YXIgY29udGVudCA9IGl0ZW1bMV07XG4gIHZhciBjc3NNYXBwaW5nID0gaXRlbVszXTtcblxuICBpZiAoIWNzc01hcHBpbmcpIHtcbiAgICByZXR1cm4gY29udGVudDtcbiAgfVxuXG4gIGlmICh0eXBlb2YgYnRvYSA9PT0gXCJmdW5jdGlvblwiKSB7XG4gICAgdmFyIGJhc2U2NCA9IGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KGNzc01hcHBpbmcpKSkpO1xuICAgIHZhciBkYXRhID0gXCJzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtjaGFyc2V0PXV0Zi04O2Jhc2U2NCxcIi5jb25jYXQoYmFzZTY0KTtcbiAgICB2YXIgc291cmNlTWFwcGluZyA9IFwiLyojIFwiLmNvbmNhdChkYXRhLCBcIiAqL1wiKTtcbiAgICB2YXIgc291cmNlVVJMcyA9IGNzc01hcHBpbmcuc291cmNlcy5tYXAoZnVuY3Rpb24gKHNvdXJjZSkge1xuICAgICAgcmV0dXJuIFwiLyojIHNvdXJjZVVSTD1cIi5jb25jYXQoY3NzTWFwcGluZy5zb3VyY2VSb290IHx8IFwiXCIpLmNvbmNhdChzb3VyY2UsIFwiICovXCIpO1xuICAgIH0pO1xuICAgIHJldHVybiBbY29udGVudF0uY29uY2F0KHNvdXJjZVVSTHMpLmNvbmNhdChbc291cmNlTWFwcGluZ10pLmpvaW4oXCJcXG5cIik7XG4gIH1cblxuICByZXR1cm4gW2NvbnRlbnRdLmpvaW4oXCJcXG5cIik7XG59OyIsIlxuICAgICAgaW1wb3J0IEFQSSBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qc1wiO1xuICAgICAgaW1wb3J0IGRvbUFQSSBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0Rm4gZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzXCI7XG4gICAgICBpbXBvcnQgc2V0QXR0cmlidXRlcyBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydFN0eWxlRWxlbWVudCBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qc1wiO1xuICAgICAgaW1wb3J0IHN0eWxlVGFnVHJhbnNmb3JtRm4gZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qc1wiO1xuICAgICAgaW1wb3J0IGNvbnRlbnQsICogYXMgbmFtZWRFeHBvcnQgZnJvbSBcIiEhLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zdHlsZS5jc3NcIjtcbiAgICAgIFxuICAgICAgXG5cbnZhciBvcHRpb25zID0ge307XG5cbm9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0gPSBzdHlsZVRhZ1RyYW5zZm9ybUZuO1xub3B0aW9ucy5zZXRBdHRyaWJ1dGVzID0gc2V0QXR0cmlidXRlcztcblxuICAgICAgb3B0aW9ucy5pbnNlcnQgPSBpbnNlcnRGbi5iaW5kKG51bGwsIFwiaGVhZFwiKTtcbiAgICBcbm9wdGlvbnMuZG9tQVBJID0gZG9tQVBJO1xub3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7XG5cbnZhciB1cGRhdGUgPSBBUEkoY29udGVudCwgb3B0aW9ucyk7XG5cblxuXG5leHBvcnQgKiBmcm9tIFwiISEuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3N0eWxlLmNzc1wiO1xuICAgICAgIGV4cG9ydCBkZWZhdWx0IGNvbnRlbnQgJiYgY29udGVudC5sb2NhbHMgPyBjb250ZW50LmxvY2FscyA6IHVuZGVmaW5lZDtcbiIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgc3R5bGVzSW5ET00gPSBbXTtcblxuZnVuY3Rpb24gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcikge1xuICB2YXIgcmVzdWx0ID0gLTE7XG5cbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBzdHlsZXNJbkRPTS5sZW5ndGg7IGkrKykge1xuICAgIGlmIChzdHlsZXNJbkRPTVtpXS5pZGVudGlmaWVyID09PSBpZGVudGlmaWVyKSB7XG4gICAgICByZXN1bHQgPSBpO1xuICAgICAgYnJlYWs7XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIHJlc3VsdDtcbn1cblxuZnVuY3Rpb24gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpIHtcbiAgdmFyIGlkQ291bnRNYXAgPSB7fTtcbiAgdmFyIGlkZW50aWZpZXJzID0gW107XG5cbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBsaXN0Lmxlbmd0aDsgaSsrKSB7XG4gICAgdmFyIGl0ZW0gPSBsaXN0W2ldO1xuICAgIHZhciBpZCA9IG9wdGlvbnMuYmFzZSA/IGl0ZW1bMF0gKyBvcHRpb25zLmJhc2UgOiBpdGVtWzBdO1xuICAgIHZhciBjb3VudCA9IGlkQ291bnRNYXBbaWRdIHx8IDA7XG4gICAgdmFyIGlkZW50aWZpZXIgPSBcIlwiLmNvbmNhdChpZCwgXCIgXCIpLmNvbmNhdChjb3VudCk7XG4gICAgaWRDb3VudE1hcFtpZF0gPSBjb3VudCArIDE7XG4gICAgdmFyIGluZGV4QnlJZGVudGlmaWVyID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgdmFyIG9iaiA9IHtcbiAgICAgIGNzczogaXRlbVsxXSxcbiAgICAgIG1lZGlhOiBpdGVtWzJdLFxuICAgICAgc291cmNlTWFwOiBpdGVtWzNdLFxuICAgICAgc3VwcG9ydHM6IGl0ZW1bNF0sXG4gICAgICBsYXllcjogaXRlbVs1XVxuICAgIH07XG5cbiAgICBpZiAoaW5kZXhCeUlkZW50aWZpZXIgIT09IC0xKSB7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0ucmVmZXJlbmNlcysrO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnVwZGF0ZXIob2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdmFyIHVwZGF0ZXIgPSBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKTtcbiAgICAgIG9wdGlvbnMuYnlJbmRleCA9IGk7XG4gICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoaSwgMCwge1xuICAgICAgICBpZGVudGlmaWVyOiBpZGVudGlmaWVyLFxuICAgICAgICB1cGRhdGVyOiB1cGRhdGVyLFxuICAgICAgICByZWZlcmVuY2VzOiAxXG4gICAgICB9KTtcbiAgICB9XG5cbiAgICBpZGVudGlmaWVycy5wdXNoKGlkZW50aWZpZXIpO1xuICB9XG5cbiAgcmV0dXJuIGlkZW50aWZpZXJzO1xufVxuXG5mdW5jdGlvbiBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKSB7XG4gIHZhciBhcGkgPSBvcHRpb25zLmRvbUFQSShvcHRpb25zKTtcbiAgYXBpLnVwZGF0ZShvYmopO1xuXG4gIHZhciB1cGRhdGVyID0gZnVuY3Rpb24gdXBkYXRlcihuZXdPYmopIHtcbiAgICBpZiAobmV3T2JqKSB7XG4gICAgICBpZiAobmV3T2JqLmNzcyA9PT0gb2JqLmNzcyAmJiBuZXdPYmoubWVkaWEgPT09IG9iai5tZWRpYSAmJiBuZXdPYmouc291cmNlTWFwID09PSBvYmouc291cmNlTWFwICYmIG5ld09iai5zdXBwb3J0cyA9PT0gb2JqLnN1cHBvcnRzICYmIG5ld09iai5sYXllciA9PT0gb2JqLmxheWVyKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cblxuICAgICAgYXBpLnVwZGF0ZShvYmogPSBuZXdPYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICBhcGkucmVtb3ZlKCk7XG4gICAgfVxuICB9O1xuXG4gIHJldHVybiB1cGRhdGVyO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChsaXN0LCBvcHRpb25zKSB7XG4gIG9wdGlvbnMgPSBvcHRpb25zIHx8IHt9O1xuICBsaXN0ID0gbGlzdCB8fCBbXTtcbiAgdmFyIGxhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKTtcbiAgcmV0dXJuIGZ1bmN0aW9uIHVwZGF0ZShuZXdMaXN0KSB7XG4gICAgbmV3TGlzdCA9IG5ld0xpc3QgfHwgW107XG5cbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IGkrKykge1xuICAgICAgdmFyIGlkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbaV07XG4gICAgICB2YXIgaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4XS5yZWZlcmVuY2VzLS07XG4gICAgfVxuXG4gICAgdmFyIG5ld0xhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShuZXdMaXN0LCBvcHRpb25zKTtcblxuICAgIGZvciAodmFyIF9pID0gMDsgX2kgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBfaSsrKSB7XG4gICAgICB2YXIgX2lkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbX2ldO1xuXG4gICAgICB2YXIgX2luZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoX2lkZW50aWZpZXIpO1xuXG4gICAgICBpZiAoc3R5bGVzSW5ET01bX2luZGV4XS5yZWZlcmVuY2VzID09PSAwKSB7XG4gICAgICAgIHN0eWxlc0luRE9NW19pbmRleF0udXBkYXRlcigpO1xuXG4gICAgICAgIHN0eWxlc0luRE9NLnNwbGljZShfaW5kZXgsIDEpO1xuICAgICAgfVxuICAgIH1cblxuICAgIGxhc3RJZGVudGlmaWVycyA9IG5ld0xhc3RJZGVudGlmaWVycztcbiAgfTtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBtZW1vID0ge307XG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cblxuZnVuY3Rpb24gZ2V0VGFyZ2V0KHRhcmdldCkge1xuICBpZiAodHlwZW9mIG1lbW9bdGFyZ2V0XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgIHZhciBzdHlsZVRhcmdldCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IodGFyZ2V0KTsgLy8gU3BlY2lhbCBjYXNlIHRvIHJldHVybiBoZWFkIG9mIGlmcmFtZSBpbnN0ZWFkIG9mIGlmcmFtZSBpdHNlbGZcblxuICAgIGlmICh3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQgJiYgc3R5bGVUYXJnZXQgaW5zdGFuY2VvZiB3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQpIHtcbiAgICAgIHRyeSB7XG4gICAgICAgIC8vIFRoaXMgd2lsbCB0aHJvdyBhbiBleGNlcHRpb24gaWYgYWNjZXNzIHRvIGlmcmFtZSBpcyBibG9ja2VkXG4gICAgICAgIC8vIGR1ZSB0byBjcm9zcy1vcmlnaW4gcmVzdHJpY3Rpb25zXG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gc3R5bGVUYXJnZXQuY29udGVudERvY3VtZW50LmhlYWQ7XG4gICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgIC8vIGlzdGFuYnVsIGlnbm9yZSBuZXh0XG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gbnVsbDtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBtZW1vW3RhcmdldF0gPSBzdHlsZVRhcmdldDtcbiAgfVxuXG4gIHJldHVybiBtZW1vW3RhcmdldF07XG59XG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cblxuXG5mdW5jdGlvbiBpbnNlcnRCeVNlbGVjdG9yKGluc2VydCwgc3R5bGUpIHtcbiAgdmFyIHRhcmdldCA9IGdldFRhcmdldChpbnNlcnQpO1xuXG4gIGlmICghdGFyZ2V0KSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKFwiQ291bGRuJ3QgZmluZCBhIHN0eWxlIHRhcmdldC4gVGhpcyBwcm9iYWJseSBtZWFucyB0aGF0IHRoZSB2YWx1ZSBmb3IgdGhlICdpbnNlcnQnIHBhcmFtZXRlciBpcyBpbnZhbGlkLlwiKTtcbiAgfVxuXG4gIHRhcmdldC5hcHBlbmRDaGlsZChzdHlsZSk7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0QnlTZWxlY3RvcjsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBpbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucykge1xuICB2YXIgZWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzdHlsZVwiKTtcbiAgb3B0aW9ucy5zZXRBdHRyaWJ1dGVzKGVsZW1lbnQsIG9wdGlvbnMuYXR0cmlidXRlcyk7XG4gIG9wdGlvbnMuaW5zZXJ0KGVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG4gIHJldHVybiBlbGVtZW50O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydFN0eWxlRWxlbWVudDsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMoc3R5bGVFbGVtZW50KSB7XG4gIHZhciBub25jZSA9IHR5cGVvZiBfX3dlYnBhY2tfbm9uY2VfXyAhPT0gXCJ1bmRlZmluZWRcIiA/IF9fd2VicGFja19ub25jZV9fIDogbnVsbDtcblxuICBpZiAobm9uY2UpIHtcbiAgICBzdHlsZUVsZW1lbnQuc2V0QXR0cmlidXRlKFwibm9uY2VcIiwgbm9uY2UpO1xuICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKSB7XG4gIHZhciBjc3MgPSBcIlwiO1xuXG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChvYmouc3VwcG9ydHMsIFwiKSB7XCIpO1xuICB9XG5cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIkBtZWRpYSBcIi5jb25jYXQob2JqLm1lZGlhLCBcIiB7XCIpO1xuICB9XG5cbiAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBvYmoubGF5ZXIgIT09IFwidW5kZWZpbmVkXCI7XG5cbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIkBsYXllclwiLmNvbmNhdChvYmoubGF5ZXIubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChvYmoubGF5ZXIpIDogXCJcIiwgXCIge1wiKTtcbiAgfVxuXG4gIGNzcyArPSBvYmouY3NzO1xuXG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cblxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG5cbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuXG4gIHZhciBzb3VyY2VNYXAgPSBvYmouc291cmNlTWFwO1xuXG4gIGlmIChzb3VyY2VNYXAgJiYgdHlwZW9mIGJ0b2EgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICBjc3MgKz0gXCJcXG4vKiMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LFwiLmNvbmNhdChidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShzb3VyY2VNYXApKSkpLCBcIiAqL1wiKTtcbiAgfSAvLyBGb3Igb2xkIElFXG5cbiAgLyogaXN0YW5idWwgaWdub3JlIGlmICAqL1xuXG5cbiAgb3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbn1cblxuZnVuY3Rpb24gcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCkge1xuICAvLyBpc3RhbmJ1bCBpZ25vcmUgaWZcbiAgaWYgKHN0eWxlRWxlbWVudC5wYXJlbnROb2RlID09PSBudWxsKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG5cbiAgc3R5bGVFbGVtZW50LnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50KTtcbn1cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuXG5cbmZ1bmN0aW9uIGRvbUFQSShvcHRpb25zKSB7XG4gIHZhciBzdHlsZUVsZW1lbnQgPSBvcHRpb25zLmluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKTtcbiAgcmV0dXJuIHtcbiAgICB1cGRhdGU6IGZ1bmN0aW9uIHVwZGF0ZShvYmopIHtcbiAgICAgIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKTtcbiAgICB9LFxuICAgIHJlbW92ZTogZnVuY3Rpb24gcmVtb3ZlKCkge1xuICAgICAgcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCk7XG4gICAgfVxuICB9O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGRvbUFQSTsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCkge1xuICBpZiAoc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQpIHtcbiAgICBzdHlsZUVsZW1lbnQuc3R5bGVTaGVldC5jc3NUZXh0ID0gY3NzO1xuICB9IGVsc2Uge1xuICAgIHdoaWxlIChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCkge1xuICAgICAgc3R5bGVFbGVtZW50LnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKTtcbiAgICB9XG5cbiAgICBzdHlsZUVsZW1lbnQuYXBwZW5kQ2hpbGQoZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoY3NzKSk7XG4gIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBzdHlsZVRhZ1RyYW5zZm9ybTsiLCJjb25zdCBjcmVhdGVFbGVtZW50ID0ge1xuICAgIGNyZWF0ZVNlY3Rpb246IGZ1bmN0aW9uKGlkTmFtZSkge1xuICAgICAgICBsZXQgc2VjdGlvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzZWN0aW9uXCIpO1xuICAgICAgICBzZWN0aW9uLnNldEF0dHJpYnV0ZSgnaWQnLGlkTmFtZSk7XG4gICAgICAgIHJldHVybiBzZWN0aW9uO1xuICAgIH0sXG4gICAgY3JlYXRlRGl2OiBmdW5jdGlvbihpZE5hbWUpe1xuICAgICAgICBsZXQgZGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICAgICAgZGl2LnNldEF0dHJpYnV0ZSgnaWQnLGlkTmFtZSk7XG4gICAgICAgIHJldHVybiBkaXY7XG4gICAgfSxcbiAgICBjcmVhdGVQYXJhOiBmdW5jdGlvbih0ZXh0KXtcbiAgICAgICAgbGV0IHBhcmEgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwicFwiKTtcbiAgICAgICAgcGFyYS50ZXh0Q29udGVudCA9IHRleHQ7XG4gICAgICAgIHJldHVybiBwYXJhO1xuICAgIH0sXG4gICAgY3JlYXRlTGk6IGZ1bmN0aW9uKHVsLGFycil7XG4gICAgICAgIGZvcihsZXQgaT0wO2k8IGFyci5sZW5ndGg7aSsrKXtcbiAgICAgICAgICAgIGxldCBsaSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJsaVwiKTtcbiAgICAgICAgICAgIGxpLmlubmVySFRNTCA9IGFycltpXTtcbiAgICAgICAgICAgIHVsLmFwcGVuZENoaWxkKGxpKVxuICAgICAgICB9XG4gICAgICAgIHJldHVybiB1bDtcbiAgICB9LFxuICAgIGNyZWF0ZUg6IGZ1bmN0aW9uKG51bSx0ZXh0KXtcbiAgICAgICAgY29uc3QgaGVhZGluZyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoYGgke251bX1gKTtcbiAgICAgICAgaGVhZGluZy5pbm5lclRleHQgPSB0ZXh0O1xuICAgICAgICByZXR1cm4gaGVhZGluZ1xuICAgIH1cbn1cbi8vIGNvbnN0IGNyZWF0ZUNvbnRhaW5lciA9ICgpID0+e1xuLy8gICAgIGNvbnN0IG1haW4gPSBjcmVhdGVFbGVtZW50LmNyZWF0ZURpdignbWFpbkNvbnRhaW5lcicpO1xuLy8gICAgIGRvY3VtZW50LmJvZHkuYXBwZW5kQ2hpbGQobWFpbik7XG4vLyAgICAgY29uc3QgaGVhZGVyID0gY3JlYXRlRWxlbWVudC5jcmVhdGVIKDEsXCJCYXR0bGVzaGlwXCIpO1xuLy8gICAgIG1haW4uYXBwZW5kQ2hpbGQoaGVhZGVyKTtcbi8vICAgICBtYWluLmFwcGVuZENoaWxkKGNyZWF0ZUdhbWVCb2FyZCgpKTtcbi8vIH1cblxuLy8gY29uc3QgY3JlYXRlR2FtZUJvYXJkID0gKCkgPT57XG4vLyAgICAgbGV0IGdhbWVCb2FyZFNpemUgPSAxMDtcbi8vICAgICBjb25zdCBnYW1lQm9hcmQgPSBjcmVhdGVFbGVtZW50LmNyZWF0ZURpdignZ2FtZUJvYXJkJyk7XG4vLyAgICAgZm9yKGxldCBpPTA7IGk8KGdhbWVCb2FyZFNpemUgKiBnYW1lQm9hcmRTaXplKTtpKyspe1xuLy8gICAgICAgICBsZXQgZ2FtZUNlbGwgPSBjcmVhdGVFbGVtZW50LmNyZWF0ZURpdihgJHtpfWApXG4vLyAgICAgICAgIGdhbWVDZWxsLmNsYXNzTGlzdC5hZGQoXCJjZWxsXCIpO1xuLy8gICAgICAgICBnYW1lQm9hcmQuYXBwZW5kQ2hpbGQoZ2FtZUNlbGwpO1xuLy8gICAgIH1cbi8vICAgICByZXR1cm4gZ2FtZUJvYXJkXG4vLyB9XG5cblxuZXhwb3J0IHtjcmVhdGVFbGVtZW50fTsiLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdGlkOiBtb2R1bGVJZCxcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuIiwiLy8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbl9fd2VicGFja19yZXF1aXJlX18ubiA9IChtb2R1bGUpID0+IHtcblx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG5cdFx0KCkgPT4gKG1vZHVsZVsnZGVmYXVsdCddKSA6XG5cdFx0KCkgPT4gKG1vZHVsZSk7XG5cdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsIHsgYTogZ2V0dGVyIH0pO1xuXHRyZXR1cm4gZ2V0dGVyO1xufTsiLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwiaW1wb3J0ICcuL3N0eWxlLmNzcyc7XG5pbXBvcnQge2NyZWF0ZUVsZW1lbnR9IGZyb20gJy4vZG9tTWFuaXAuanMnO1xuXG5cbi8vRmFjdG9yeSBmdW5jdGlvbiB0byBjcmVhdGUgdGhlIHNoaXBzXG5jb25zdCBzaGlwRmFjdG9yeSA9IChuYW1lLGxlbmd0aCkgPT4ge1xuICAgIC8vY3JlYXRlcyBhbiBhcnJheSB0aGUgc2l6ZSBvZiB0aGUgc2hpcHMgbGVuZ3RoIHRvIGtlZXAgdHJhY2sgb2YgaGl0cy5cbiAgICBjb25zdCBzaGlwSGVhbHRoID0gW107XG5cbiAgICAvL3VwZGF0ZXMgdGhlIHNoaXBIZWFsdGggYXJyYXkgd2l0aCB0aGUgcG9zaXRpb24gdGhlIHNoaXAgZ290IGhpdCBpblxuICAgIGNvbnN0IGhpdCA9ICgpID0+IHtcbiAgICAgICAgc2hpcEhlYWx0aC5wdXNoKCd4JylcbiAgICAgICAgICAgIHJldHVybiBzaGlwSGVhbHRoO1xuICAgIH1cbiAgICAvL2lmIGV2ZXJ5IHZhbHVlIGluIHRoZSBzaGlwSGVhbHRoIGFycmF5IGlzIGhpdCB0aGlzIGZ1bmN0aW9uIHJldHVybnMgdGhhdCB0aGUgc2hpcCBpcyBzdW5rXG4gICAgY29uc3QgaXNTdW5rID0gKCkgPT4ge1xuICAgICAgICBpZihzaGlwSGVhbHRoLmxlbmd0aCA9PT0gbGVuZ3RoKXtcbiAgICAgICAgICAgIHJldHVybiB0cnVlXG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIGZhbHNlXG4gICAgfVxuICAgIHJldHVybiB7bmFtZSxsZW5ndGgsaGl0LCBpc1N1bmt9XG59XG5cbi8vRmFjdG9yeSBmdW5jdGlvbiB0byBjcmVhdGUgZ2FtZSBib2FyZFxuY29uc3QgZ2FtZUJvYXJkRmFjdG9yeSA9ICgpID0+e1xuICAgIGxldCBnYW1lQXJyYXkgPSBbXTtcbiAgICAvL2NyZWF0ZSBlbXB0eSBhcnJheSB0byBpbml0aWFsaXplIHRoZSBnYW1lXG4gICAgY29uc3Qgc3RhcnRHYW1lID0gKCkgPT57XG4gICAgICAgICAgICBnYW1lQXJyYXkgPSBbXG4gICAgICAgICAgICBbJycsJycsJycsJycsJycsJycsJycsJycsJycsJyddLFxuICAgICAgICAgICAgWycnLCcnLCcnLCcnLCcnLCcnLCcnLCcnLCcnLCcnXSxcbiAgICAgICAgICAgIFsnJywnJywnJywnJywnJywnJywnJywnJywnJywnJ10sXG4gICAgICAgICAgICBbJycsJycsJycsJycsJycsJycsJycsJycsJycsJyddLFxuICAgICAgICAgICAgWycnLCcnLCcnLCcnLCcnLCcnLCcnLCcnLCcnLCcnXSxcbiAgICAgICAgICAgIFsnJywnJywnJywnJywnJywnJywnJywnJywnJywnJ10sXG4gICAgICAgICAgICBbJycsJycsJycsJycsJycsJycsJycsJycsJycsJyddLFxuICAgICAgICAgICAgWycnLCcnLCcnLCcnLCcnLCcnLCcnLCcnLCcnLCcnXSxcbiAgICAgICAgICAgIFsnJywnJywnJywnJywnJywnJywnJywnJywnJywnJ10sXG4gICAgICAgICAgICBbJycsJycsJycsJycsJycsJycsJycsJycsJycsJyddXG4gICAgICAgIF1cblxuICAgIH1cbiAgICBsZXQgc2hpcHNBbGl2ZSA9IFtdO1xuXG4gICAgLy9wbGFjZXMgc2hpcCBpbiByb3cgYW5kIGNvbHVtbiBhbmQgb3JpZW50cyBob3cgdGhlIHBsYXllciB3YW50cyBcbiAgICBjb25zdCBwbGFjZSA9IChzaGlwLHJvdywgY29sdW1uLCBvcmllbnQpID0+IHtcbiAgICAgICAgLy9jaGVja3MgaWYgd2hlcmUgdGhlIHNoaXAgaXMgdG8gYmUgcGxhY2VkIGlzIGVtcHR5XG4gICAgICAgIGNvbnN0IGNhblBsYWNlID0gKCkgPT4ge1xuICAgICAgICAgICAgbGV0IGVtcHR5ID0gdHJ1ZVxuICAgICAgICAgICAgLy9jaGVja2luZyBpZiBzaGlwIGlzIGFscmVhZHkgaW4gdGhlIHNwb3QgbmV3IHNoaXAgaXMgdG8gYmUgcGxhY2VkXG4gICAgICAgICAgICBpZihvcmllbnQgPT09ICdob3Jpem9udGFsJyl7XG4gICAgICAgICAgICAgICAgZm9yKGxldCBpID0gY29sdW1uOyBpPCAoY29sdW1uK3NoaXAubGVuZ3RoKTsgaSsrKXtcbiAgICAgICAgICAgICAgICAgICAgaWYoZ2FtZUFycmF5W3Jvd11baV0gIT09ICcnKXtcbiAgICAgICAgICAgICAgICAgICAgICAgIGVtcHR5ID0gZmFsc2VcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0gIFxuICAgICAgICAgICAgZWxzZSBpZihvcmllbnQgPT09ICd2ZXJ0aWNhbCcpe1xuICAgICAgICAgICAgICAgIGZvcihsZXQgaSA9IHJvdzsgaTwgKHJvdytzaGlwLmxlbmd0aCk7IGkrKyl7XG4gICAgICAgICAgICAgICAgICAgIGlmKGdhbWVBcnJheVtpXVtjb2x1bW5dICE9PSAnJyl7XG4gICAgICAgICAgICAgICAgICAgICAgICBlbXB0eSA9IGZhbHNlXG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9ICBcbiAgICAgICAgICAgIHJldHVybiBlbXB0eVxuICAgICAgICB9O1xuICAgICAgICAvL2hvcml6b250YWwgb3JyaWVudGF0aW9uIHBsYWNlbWVudFxuICAgICAgICBpZihvcmllbnQgPT09ICdob3Jpem9udGFsJyAgJiYgY2FuUGxhY2UoKSkge1xuICAgICAgICAgICAgZm9yKGxldCBpID0gY29sdW1uOyBpPCAoY29sdW1uK3NoaXAubGVuZ3RoKTsgaSsrKXtcbiAgICAgICAgICAgICAgICBnYW1lQXJyYXlbcm93XVtpXSA9IHNoaXA7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBzaGlwc0FsaXZlLnB1c2goc2hpcC5uYW1lKVxuICAgICAgICB9XG5cbiAgICAgICAgLy92ZXJ0aWNhbCBvcnJpZW50YXRpb25zIHBsYWNlbWVudFxuICAgICAgICBlbHNlIGlmKG9yaWVudCA9PT0gJ3ZlcnRpY2FsJyAmJiBjYW5QbGFjZSgpKSB7XG4gICAgICAgICAgICBmb3IobGV0IGkgPSByb3c7IGk8KChzaGlwLmxlbmd0aCArIHJvdykpO2krKyl7XG4gICAgICAgICAgICAgICAgZ2FtZUFycmF5W2ldW2NvbHVtbl0gPSBzaGlwO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIHJldHVybiBnYW1lQXJyYXk7XG4gICAgfVxuXG5cbiAgICBjb25zdCByZWNpZXZlQXR0YWNrID0gKHJvdyxjb2x1bW4pID0+e1xuICAgICAgICBpZihnYW1lQXJyYXlbcm93XVtjb2x1bW5dID09PSAnJyl7XG4gICAgICAgICAgICBnYW1lQXJyYXlbcm93XVtjb2x1bW5dID0gJ3gnXG4gICAgICAgIH1cbiAgICAgICAgZWxzZXtcbiAgICAgICAgICAgIGdhbWVBcnJheVtyb3ddW2NvbHVtbl0uaGl0KCk7XG4gICAgICAgICAgICBpZihnYW1lQXJyYXlbcm93XVtjb2x1bW5dLmlzU3VuaygpKXtcbiAgICAgICAgICAgICAgICBzaGlwc0FsaXZlLnBvcChnYW1lQXJyYXlbcm93XVtjb2x1bW5dLm5hbWUpXG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBnYW1lQXJyYXlbcm93XVtjb2x1bW5dID0gJ1gnO1xuICAgICAgICAgICAgXG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIGdhbWVBcnJheVxuICAgIH1cbiAgICBjb25zdCBhcnJheUdldHRlciA9ICgpID0+IGdhbWVBcnJheTtcbiAgICByZXR1cm57c3RhcnRHYW1lLCBwbGFjZSwgcmVjaWV2ZUF0dGFjayxhcnJheUdldHRlcn1cbn1cblxuY29uc3QgcGxheWVyID0gKCkgPT57XG4gICAgbGV0IHBsYXllckJvYXJkID0gZ2FtZUJvYXJkRmFjdG9yeSgpO1xuICAgIHBsYXllckJvYXJkLnN0YXJ0R2FtZSgpO1xuICAgIGNvbnN0IHBsYXllclBsYWNlID0gKHNoaXAscm93LGNvbHVtbixvcmllbnQpID0+e1xuICAgICAgICBwbGF5ZXJCb2FyZC5wbGFjZShzaGlwLHJvdyxjb2x1bW4sb3JpZW50KTtcbiAgICAgICAgcmV0dXJuIHBsYXllckJvYXJkXG4gICAgfVxuICAgIGNvbnN0IHBsYXllckF0dGFjayA9IChjb21wdXRlckJvYXJkLGUpID0+IHtcbiAgICAgICAgY29uc3Qgcm93ID0gcGFyc2VJbnQoZS50YXJnZXQuaWRbMF0pXG4gICAgICAgIC8vIGxldCByb3cgPSBwcm9tcHQoJ0Nob29zZSByb3cgMC0xMCcpO1xuICAgICAgICBjb25zdCBjb2wgPSBwYXJzZUludChlLnRhcmdldC5pZFsxXSlcbiAgICAgICAgLy8gbGV0IGNvbCA9IHByb21wdCgnQ2hvb3NlIGNvbHVtbiAwLTEwJyk7XG4gICAgICAgIGNvbnNvbGUubG9nKGNvbXB1dGVyQm9hcmQuYXJyYXlHZXR0ZXIoKSlcbiAgICAgICAgY29tcHV0ZXJCb2FyZC5yZWNpZXZlQXR0YWNrKHJvdyxjb2wpO1xuICAgICAgICByZXR1cm4gdHJ1ZVxuICAgIH0gICBcbiAgICByZXR1cm4ge3BsYXllckJvYXJkLHBsYXllclBsYWNlLHBsYXllckF0dGFja31cbn1cblxuY29uc3QgY29tcHV0ZXIgPSAoKSA9PiB7XG4gICAgbGV0IGNvbXB1dGVyQm9hcmQgPSBnYW1lQm9hcmRGYWN0b3J5KCk7XG4gICAgY29tcHV0ZXJCb2FyZC5zdGFydEdhbWUoKTtcbiAgICBjb25zdCBjb21wdXRlclJhbmRvbUF0dGFjayA9IChwbGF5ZXJCb2FyZCkgPT57XG4gICAgICAgIGxldCByYW5kb21DaG9pY2UgPSAoKSA9PiB7XG4gICAgICAgICAgICBsZXQgcmFuZG9tUm93ID0gTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICoxMClcbiAgICAgICAgICAgIGxldCByYW5kb21Db2x1bW4gPSBNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiAxMClcbiAgICAgICAgICAgIHJldHVybiBbcmFuZG9tUm93LCByYW5kb21Db2x1bW5dXG4gICAgICAgIH1cbiAgICAgICAgbGV0IHJhbmRvbT0gcmFuZG9tQ2hvaWNlKCk7XG4gICAgICAgIGxldCByb3cgPSByYW5kb21bMF07XG4gICAgICAgIGxldCBjb2x1bW4gPSByYW5kb21bMV07XG4gICAgICAgIHBsYXllckJvYXJkLnJlY2lldmVBdHRhY2socm93LGNvbHVtbik7XG4gICAgICAgIHJldHVybiBwbGF5ZXJCb2FyZC5hcnJheUdldHRlcigpO1xuICAgIH1cbiAgICByZXR1cm4ge2NvbXB1dGVyQm9hcmQsY29tcHV0ZXJSYW5kb21BdHRhY2t9XG59XG5cbmNvbnN0IGluaXRHYW1lID0gKCkgPT57XG4gICAgY29uc3QgcGxheWVyMSA9IHBsYXllcigpO1xuICAgIGNvbnN0IGNvbXB1dGVyMSA9IGNvbXB1dGVyKCk7XG4gICAgY29uc3QgcGxheWVyU3ViID0gc2hpcEZhY3RvcnkoXCJzdWJtYXJpbmVcIiwzKTtcbiAgICBjb25zdCBwbGF5ZXJDYXJyaWVyID0gc2hpcEZhY3RvcnkoXCJjYXJyaWVyXCIsNSk7XG4gICAgY29uc3QgcGxheWVyQmF0dGxlc2hpcCA9IHNoaXBGYWN0b3J5KCdiYXR0bGVzaGlwJyw0KTtcbiAgICBjb25zdCBwbGF5ZXJDcnVpc2VyID0gc2hpcEZhY3RvcnkoJ2NydWlzZXInLDMpO1xuICAgIGNvbnN0IHBsYXllckRlc3Ryb3llciA9IHNoaXBGYWN0b3J5KCdkZXN0cm95ZXInLCAyKTtcbiAgICBjb25zdCBjb21wdXRlclN1YiA9IHNoaXBGYWN0b3J5KFwic3VibWFyaW5lXCIsMyk7XG4gICAgY29uc3QgY29tcHV0ZXJDYXJyaWVyID0gc2hpcEZhY3RvcnkoXCJjYXJyaWVyXCIsNSk7XG4gICAgY29uc3QgY29tcHV0ZXJCYXR0bGVzaGlwID0gc2hpcEZhY3RvcnkoJ2JhdHRsZXNoaXAnLDQpO1xuICAgIGNvbnN0IGNvbXB1dGVyQ3J1aXNlciA9IHNoaXBGYWN0b3J5KCdjcnVpc2VyJywzKTtcbiAgICBjb25zdCBjb21wdXRlckRlc3Ryb3llciA9IHNoaXBGYWN0b3J5KCdkZXN0cm95ZXInLCAyKTtcbiAgICBjcmVhdGVDb250YWluZXIoKTtcbiAgICBjcmVhdGVHYW1lQm9hcmRVSShwbGF5ZXIxLnBsYXllckJvYXJkLmFycmF5R2V0dGVyKCksY29tcHV0ZXIxLmNvbXB1dGVyQm9hcmQuYXJyYXlHZXR0ZXIoKSk7XG4gICAgXG4gICAgcGxheWVyMS5wbGF5ZXJQbGFjZShwbGF5ZXJTdWIsMCwwLCdob3Jpem9udGFsJyk7XG4gICAgcGxheWVyMS5wbGF5ZXJQbGFjZShwbGF5ZXJDYXJyaWVyLDEsMCwnaG9yaXpvbnRhbCcpO1xuICAgIHBsYXllcjEucGxheWVyUGxhY2UocGxheWVyQmF0dGxlc2hpcCwyLDAsJ2hvcml6b250YWwnKTtcbiAgICBwbGF5ZXIxLnBsYXllclBsYWNlKHBsYXllckNydWlzZXIsNCwwLCdob3Jpem9udGFsJyk7XG4gICAgcGxheWVyMS5wbGF5ZXJQbGFjZShwbGF5ZXJEZXN0cm95ZXIsNSwwLCdob3Jpem9udGFsJyk7XG4gICAgY29tcHV0ZXIxLmNvbXB1dGVyQm9hcmQucGxhY2UoY29tcHV0ZXJTdWIsMCwwLCdob3Jpem9udGFsJyk7XG4gICAgY29tcHV0ZXIxLmNvbXB1dGVyQm9hcmQucGxhY2UoY29tcHV0ZXJDYXJyaWVyLDEsMCwnaG9yaXpvbnRhbCcpO1xuICAgIGNvbXB1dGVyMS5jb21wdXRlckJvYXJkLnBsYWNlKGNvbXB1dGVyQmF0dGxlc2hpcCwyLDAsJ2hvcml6b250YWwnKTtcbiAgICBjb21wdXRlcjEuY29tcHV0ZXJCb2FyZC5wbGFjZShjb21wdXRlckNydWlzZXIsMywwLCdob3Jpem9udGFsJyk7XG4gICAgY29tcHV0ZXIxLmNvbXB1dGVyQm9hcmQucGxhY2UoY29tcHV0ZXJEZXN0cm95ZXIsNCwwLCdob3Jpem9udGFsJyk7XG4gICAgdXBkYXRlR2FtZWJvYXJkKHBsYXllcjEsY29tcHV0ZXIxKTtcbiAgICBjb25zdCBwbGF5ZXJHYW1lYm9hcmREaXYgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgncGxheWVyR2FtZWJvYXJkJyk7XG4gICAgcGxheWVyR2FtZWJvYXJkRGl2LmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJyxlID0+IHtcbiAgICAgICAgcGxheUdhbWUocGxheWVyMSxjb21wdXRlcjEsZSlcbiAgICB9KVxuICAgIH1cblxuY29uc3QgcGxheUdhbWUgPSAocGxheWVyMSxjb21wdXRlcjEsZSkgPT4ge1xuICAgIHBsYXllcjEucGxheWVyQXR0YWNrKGNvbXB1dGVyMS5jb21wdXRlckJvYXJkLGUpXG4gICAgY29tcHV0ZXIxLmNvbXB1dGVyUmFuZG9tQXR0YWNrKHBsYXllcjEucGxheWVyQm9hcmQpXG4gICAgdXBkYXRlR2FtZWJvYXJkKHBsYXllcjEsY29tcHV0ZXIxKTtcblxufVxuXG5jb25zdCB1cGRhdGVHYW1lYm9hcmQgPSAocGxheWVyMSxjb21wdXRlcjEpID0+e1xuICAgIGZvcihsZXQgaT0wOyBpPChwbGF5ZXIxLnBsYXllckJvYXJkLmFycmF5R2V0dGVyKCkubGVuZ3RoKTtpKyspe1xuICAgICAgICBmb3IobGV0IGo9MDsgajwocGxheWVyMS5wbGF5ZXJCb2FyZC5hcnJheUdldHRlcigpW2ldLmxlbmd0aCk7aisrKXtcbiAgICAgICAgICAgIFxuICAgICAgICAgICAgbGV0IGdhbWVDZWxsID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoYCR7aX0ke2p9YClcbiAgICAgICAgICAgIGlmKHR5cGVvZiBwbGF5ZXIxLnBsYXllckJvYXJkLmFycmF5R2V0dGVyKClbaV1bal0gPT09ICdvYmplY3QnKXtcbiAgICAgICAgICAgICAgICBsZXQgbmFtZSA9IHBsYXllcjEucGxheWVyQm9hcmQuYXJyYXlHZXR0ZXIoKVtpXVtqXS5uYW1lXG4gICAgICAgICAgICAgICAgZ2FtZUNlbGwuY2xhc3NMaXN0LmFkZChuYW1lKVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZSBpZihwbGF5ZXIxLnBsYXllckJvYXJkLmFycmF5R2V0dGVyKClbaV1bal0gPT09ICd4Jyl7XG4gICAgICAgICAgICAgICAgZ2FtZUNlbGwuY2xhc3NMaXN0LmFkZCgnZW1wdHknKVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZSBpZihwbGF5ZXIxLnBsYXllckJvYXJkLmFycmF5R2V0dGVyKClbaV1bal0gPT09ICdYJyl7XG4gICAgICAgICAgICAgICAgZ2FtZUNlbGwuY2xhc3NMaXN0LmFkZCgnaGl0JylcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cbiAgICBmb3IobGV0IGk9MDsgaTwoY29tcHV0ZXIxLmNvbXB1dGVyQm9hcmQuYXJyYXlHZXR0ZXIoKS5sZW5ndGgpO2krKyl7XG4gICAgICAgIGZvcihsZXQgaj0wOyBqPChjb21wdXRlcjEuY29tcHV0ZXJCb2FyZC5hcnJheUdldHRlcigpW2ldLmxlbmd0aCk7aisrKXtcbiAgICAgICAgICAgIGxldCBnYW1lQ2VsbCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKGAke2l9JHtqfWNvbXB1dGVyYClcbiAgICAgICAgICAgIGlmKHR5cGVvZiBjb21wdXRlcjEuY29tcHV0ZXJCb2FyZC5hcnJheUdldHRlcigpW2ldW2pdID09PSAnb2JqZWN0Jyl7XG4gICAgICAgICAgICAgICAgZ2FtZUNlbGwuaW5uZXJIVE1MID0gY29tcHV0ZXIxLmNvbXB1dGVyQm9hcmQuYXJyYXlHZXR0ZXIoKVtpXVtqXS5uYW1lXG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNle1xuICAgICAgICAgICAgICAgIGdhbWVDZWxsLmlubmVySFRNTCA9IGNvbXB1dGVyMS5jb21wdXRlckJvYXJkLmFycmF5R2V0dGVyKClbaV1bal07XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG59XG5cbmNvbnN0IGNyZWF0ZUNvbnRhaW5lciA9ICgpID0+e1xuICAgIGNvbnN0IG1haW4gPSBjcmVhdGVFbGVtZW50LmNyZWF0ZURpdignbWFpbkNvbnRhaW5lcicpO1xuICAgIGRvY3VtZW50LmJvZHkuYXBwZW5kQ2hpbGQobWFpbik7XG4gICAgY29uc3QgaGVhZGVyID0gY3JlYXRlRWxlbWVudC5jcmVhdGVIKDEsXCJCYXR0bGVzaGlwXCIpO1xuICAgIG1haW4uYXBwZW5kQ2hpbGQoaGVhZGVyKTtcbn1cblxuY29uc3QgY3JlYXRlR2FtZUJvYXJkVUkgPSAocGxheWVyMSxjb21wdXRlcjEpID0+IHtcbiAgICBjb25zdCBtYWluID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ21haW5Db250YWluZXInKTtcbiAgICBjb25zdCBnYW1lYm9hcmRzID0gY3JlYXRlRWxlbWVudC5jcmVhdGVEaXYoJ2dhbWVib2FyZHMnKTtcbiAgICBjb25zdCBwbGF5ZXJHYW1lYm9hcmQgPSBjcmVhdGVFbGVtZW50LmNyZWF0ZURpdigncGxheWVyR2FtZWJvYXJkJyk7XG4gICAgY29uc3QgY29tcHV0ZXJHYW1lYm9hcmQgPSBjcmVhdGVFbGVtZW50LmNyZWF0ZURpdignY29tcHV0ZXJHYW1lYm9hcmQnKTtcbiAgICBjb25zdCBwbGF5ZXJIZWFkZXIgPSBjcmVhdGVFbGVtZW50LmNyZWF0ZUgoMiwnUGxheWVyXFwncyBCb2FyZCcpO1xuICAgIGNvbnN0IGNvbXB1dGVySGVhZGVyID0gY3JlYXRlRWxlbWVudC5jcmVhdGVIKDIsJ0NvbXB1dGVyXFwncyBIZWFkZXInKVxuICAgIHBsYXllckhlYWRlci5zZXRBdHRyaWJ1dGUoJ2lkJywncGxheWVySGVhZGVyJyk7XG4gICAgY29tcHV0ZXJIZWFkZXIuc2V0QXR0cmlidXRlKCdpZCcsJ2NvbXB1dGVySGVhZGVyJyk7XG4gICAgZm9yKGxldCBpPTA7IGk8KHBsYXllcjEubGVuZ3RoKTtpKyspe1xuICAgICAgICBmb3IobGV0IGo9MDsgajwocGxheWVyMVtpXS5sZW5ndGgpO2orKyl7XG4gICAgICAgICAgICBsZXQgZ2FtZUNlbGwgPSBjcmVhdGVFbGVtZW50LmNyZWF0ZURpdihgJHtpfSR7an1gKVxuICAgICAgICAgICAgZ2FtZUNlbGwuY2xhc3NMaXN0LmFkZChcImNlbGxcIik7XG4gICAgICAgICAgICBwbGF5ZXJHYW1lYm9hcmQuYXBwZW5kQ2hpbGQoZ2FtZUNlbGwpO1xuICAgICAgICB9XG4gICAgfVxuICAgIGZvcihsZXQgaT0wOyBpPChjb21wdXRlcjEubGVuZ3RoKTtpKyspe1xuICAgICAgICBmb3IobGV0IGo9MDsgajwoY29tcHV0ZXIxW2ldLmxlbmd0aCk7aisrKXtcbiAgICAgICAgICAgIGxldCBnYW1lQ2VsbCA9IGNyZWF0ZUVsZW1lbnQuY3JlYXRlRGl2KGAke2l9JHtqfWNvbXB1dGVyYClcbiAgICAgICAgICAgIGdhbWVDZWxsLmNsYXNzTGlzdC5hZGQoXCJjZWxsXCIpO1xuICAgICAgICAgICAgY29tcHV0ZXJHYW1lYm9hcmQuYXBwZW5kQ2hpbGQoZ2FtZUNlbGwpO1xuICAgICAgICB9XG4gICAgfVxuICAgIG1haW4uYXBwZW5kQ2hpbGQoZ2FtZWJvYXJkcylcbiAgICBnYW1lYm9hcmRzLmFwcGVuZChwbGF5ZXJIZWFkZXIscGxheWVyR2FtZWJvYXJkLGNvbXB1dGVySGVhZGVyLGNvbXB1dGVyR2FtZWJvYXJkKVxuXG59XG5cbmluaXRHYW1lKClcblxuZXhwb3J0IHtzaGlwRmFjdG9yeSxnYW1lQm9hcmRGYWN0b3J5LCBwbGF5ZXIsY29tcHV0ZXJ9OyJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==