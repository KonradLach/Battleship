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
/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/getUrl.js */ "./node_modules/css-loader/dist/runtime/getUrl.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__);
// Imports



var ___CSS_LOADER_URL_IMPORT_0___ = new URL(/* asset import */ __webpack_require__(/*! ./SairaStencilOne-Regular.ttf */ "./src/SairaStencilOne-Regular.ttf"), __webpack_require__.b);
var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
var ___CSS_LOADER_URL_REPLACEMENT_0___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_0___);
// Module
___CSS_LOADER_EXPORT___.push([module.id, "@font-face {\n    font-family: 'SairaStencil';\n    src: url(" + ___CSS_LOADER_URL_REPLACEMENT_0___ + ") format('truetype');\n\n}\n*{\n    font-family: 'SairaStencil';\n}\nbody{\n    background-color: rgb(192, 217, 228);\n    width: 100%;\n    height: 100%;\n}\n#mainContainer{\n    display: block;\n}\n#gameboards{\n    display: grid;\n    grid-template-columns: repeat(2,1fr);\n    margin: 10px;\n    justify-items: center;\n    align-items: center;\n}\nh1{\n    text-align: center;\n    font-size: 46px;\n    letter-spacing: 5px;\n}\n#header{\n    font-size: 36px;\n    letter-spacing: 1px;\n}\n#playerHeader, #computerHeader{\n    width: 40vw;\n    grid-row-start: 0;\n    grid-row-end: 1;\n    text-align: center;\n}\n\n#playerGameboard, #computerGameboard{\n    display: grid;\n    grid-template-columns: repeat(10,1fr);\n    height: 40vw;\n    width: 40vw;\n}\n.cell{\n    border: 1px solid black;\n    height: 100%;\n    width: 100%;\n    text-align: center;\n    font-size: x-small;\n}\n\n.battleship{\n    background-color:#2b2424;\n}\n\n.submarine{\n    background-color: #18181a;\n}\n\n.cruiser{\n    background-color: #5e5e5e;\n}\n\n.carrier{\n    background-color: #412d44;\n}\n\n.destroyer{\n    background-color: #3a3a3a;\n}\n.empty{\n    background-color: #ffffff;\n}\n.hit{\n    background-color: #bb0000;\n}\n\n.selected{\n    background-color: rgb(105, 119, 122);\n}\n\n#btnContainer{\n    display: flex;\n    justify-content: center;\n    width: 100%;\n    gap: 20px;\n}\n\nbutton{\n    cursor: pointer;\n    outline: 0;\n    color: #fff;\n    background-color: #5a616d;\n\n    display: inline-block;\n    font-weight: 400;\n    line-height: 1.5;\n    text-align: center;\n    border: 2px solid #18181a;\n    padding: 6px 12px;\n    font-size: 16px;\n    border-radius: .25rem;\n    transition: color .15s ease-in-out,background-color .15s ease-in-out,border-color .15s ease-in-out,box-shadow .15s ease-in-out;\n\n}\nbutton:hover{\n    color: #fff;\n    background-color: #0d1014;\n    border-color: #373e47;\n}\n\n\n@media (max-width:500px) {\n    #gameboards{\n        display: block;\n        margin-left: auto;\n        margin-right: auto;\n    }\n    body{\n        margin:0;\n    }\n    #playerHeader,#playerGameboard,#computerHeader,#computerGameboard{\n        margin: auto;\n        margin-bottom: 10px;\n    }\n    #playerGameboard,#computerGameboard{\n        width: 80vw;\n        height: 80vw;\n    }\n}", "",{"version":3,"sources":["webpack://./src/style.css"],"names":[],"mappings":"AAAA;IACI,2BAA2B;IAC3B,+DAA4D;;AAEhE;AACA;IACI,2BAA2B;AAC/B;AACA;IACI,oCAAoC;IACpC,WAAW;IACX,YAAY;AAChB;AACA;IACI,cAAc;AAClB;AACA;IACI,aAAa;IACb,oCAAoC;IACpC,YAAY;IACZ,qBAAqB;IACrB,mBAAmB;AACvB;AACA;IACI,kBAAkB;IAClB,eAAe;IACf,mBAAmB;AACvB;AACA;IACI,eAAe;IACf,mBAAmB;AACvB;AACA;IACI,WAAW;IACX,iBAAiB;IACjB,eAAe;IACf,kBAAkB;AACtB;;AAEA;IACI,aAAa;IACb,qCAAqC;IACrC,YAAY;IACZ,WAAW;AACf;AACA;IACI,uBAAuB;IACvB,YAAY;IACZ,WAAW;IACX,kBAAkB;IAClB,kBAAkB;AACtB;;AAEA;IACI,wBAAwB;AAC5B;;AAEA;IACI,yBAAyB;AAC7B;;AAEA;IACI,yBAAyB;AAC7B;;AAEA;IACI,yBAAyB;AAC7B;;AAEA;IACI,yBAAyB;AAC7B;AACA;IACI,yBAAyB;AAC7B;AACA;IACI,yBAAyB;AAC7B;;AAEA;IACI,oCAAoC;AACxC;;AAEA;IACI,aAAa;IACb,uBAAuB;IACvB,WAAW;IACX,SAAS;AACb;;AAEA;IACI,eAAe;IACf,UAAU;IACV,WAAW;IACX,yBAAyB;;IAEzB,qBAAqB;IACrB,gBAAgB;IAChB,gBAAgB;IAChB,kBAAkB;IAClB,yBAAyB;IACzB,iBAAiB;IACjB,eAAe;IACf,qBAAqB;IACrB,8HAA8H;;AAElI;AACA;IACI,WAAW;IACX,yBAAyB;IACzB,qBAAqB;AACzB;;;AAGA;IACI;QACI,cAAc;QACd,iBAAiB;QACjB,kBAAkB;IACtB;IACA;QACI,QAAQ;IACZ;IACA;QACI,YAAY;QACZ,mBAAmB;IACvB;IACA;QACI,WAAW;QACX,YAAY;IAChB;AACJ","sourcesContent":["@font-face {\n    font-family: 'SairaStencil';\n    src: url('./SairaStencilOne-Regular.ttf') format('truetype');\n\n}\n*{\n    font-family: 'SairaStencil';\n}\nbody{\n    background-color: rgb(192, 217, 228);\n    width: 100%;\n    height: 100%;\n}\n#mainContainer{\n    display: block;\n}\n#gameboards{\n    display: grid;\n    grid-template-columns: repeat(2,1fr);\n    margin: 10px;\n    justify-items: center;\n    align-items: center;\n}\nh1{\n    text-align: center;\n    font-size: 46px;\n    letter-spacing: 5px;\n}\n#header{\n    font-size: 36px;\n    letter-spacing: 1px;\n}\n#playerHeader, #computerHeader{\n    width: 40vw;\n    grid-row-start: 0;\n    grid-row-end: 1;\n    text-align: center;\n}\n\n#playerGameboard, #computerGameboard{\n    display: grid;\n    grid-template-columns: repeat(10,1fr);\n    height: 40vw;\n    width: 40vw;\n}\n.cell{\n    border: 1px solid black;\n    height: 100%;\n    width: 100%;\n    text-align: center;\n    font-size: x-small;\n}\n\n.battleship{\n    background-color:#2b2424;\n}\n\n.submarine{\n    background-color: #18181a;\n}\n\n.cruiser{\n    background-color: #5e5e5e;\n}\n\n.carrier{\n    background-color: #412d44;\n}\n\n.destroyer{\n    background-color: #3a3a3a;\n}\n.empty{\n    background-color: #ffffff;\n}\n.hit{\n    background-color: #bb0000;\n}\n\n.selected{\n    background-color: rgb(105, 119, 122);\n}\n\n#btnContainer{\n    display: flex;\n    justify-content: center;\n    width: 100%;\n    gap: 20px;\n}\n\nbutton{\n    cursor: pointer;\n    outline: 0;\n    color: #fff;\n    background-color: #5a616d;\n\n    display: inline-block;\n    font-weight: 400;\n    line-height: 1.5;\n    text-align: center;\n    border: 2px solid #18181a;\n    padding: 6px 12px;\n    font-size: 16px;\n    border-radius: .25rem;\n    transition: color .15s ease-in-out,background-color .15s ease-in-out,border-color .15s ease-in-out,box-shadow .15s ease-in-out;\n\n}\nbutton:hover{\n    color: #fff;\n    background-color: #0d1014;\n    border-color: #373e47;\n}\n\n\n@media (max-width:500px) {\n    #gameboards{\n        display: block;\n        margin-left: auto;\n        margin-right: auto;\n    }\n    body{\n        margin:0;\n    }\n    #playerHeader,#playerGameboard,#computerHeader,#computerGameboard{\n        margin: auto;\n        margin-bottom: 10px;\n    }\n    #playerGameboard,#computerGameboard{\n        width: 80vw;\n        height: 80vw;\n    }\n}"],"sourceRoot":""}]);
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

/***/ "./node_modules/css-loader/dist/runtime/getUrl.js":
/*!********************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/getUrl.js ***!
  \********************************************************/
/***/ ((module) => {



module.exports = function (url, options) {
  if (!options) {
    options = {};
  }

  if (!url) {
    return url;
  }

  url = String(url.__esModule ? url.default : url); // If url is already wrapped in quotes, remove them

  if (/^['"].*['"]$/.test(url)) {
    url = url.slice(1, -1);
  }

  if (options.hash) {
    url += options.hash;
  } // Should url be wrapped?
  // See https://drafts.csswg.org/css-values-3/#urls


  if (/["'() \t\n]|(%20)/.test(url) || options.needQuotes) {
    return "\"".concat(url.replace(/"/g, '\\"').replace(/\n/g, "\\n"), "\"");
  }

  return url;
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
/* harmony export */   "createContainer": () => (/* binding */ createContainer),
/* harmony export */   "createElement": () => (/* binding */ createElement),
/* harmony export */   "createGameBoardUI": () => (/* binding */ createGameBoardUI),
/* harmony export */   "restartUI": () => (/* binding */ restartUI),
/* harmony export */   "updateHeader": () => (/* binding */ updateHeader)
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
const createContainer = () =>{
    const main = createElement.createDiv('mainContainer');
    document.body.appendChild(main);

}

const createGameBoardUI = (player1,computer1) => {
    const main = document.getElementById('mainContainer');
    const title = createElement.createH(1,"Battleship");
    main.appendChild(title);
    const header = createElement.createH(1,"Place your submarine anywhere on the player board");
    header.setAttribute('id','header');
    const gameboards = createElement.createDiv('gameboards');
    const playerGameboard = createElement.createDiv('playerGameboard');
    const computerGameboard = createElement.createDiv('computerGameboard');
    const playerHeader = createElement.createH(2,'Player\'s Board');
    const computerHeader = createElement.createH(2,'Computer\'s Board');
    const orientationBtn = document.createElement('button');
    orientationBtn.innerText = 'Horizontal'
    orientationBtn.setAttribute('id','orientBtn')
    const restartBtn = document.createElement('button');
    restartBtn.setAttribute('id','restartBtn');
    restartBtn.textContent = 'Restart'
    playerHeader.setAttribute('id','playerHeader');
    computerHeader.setAttribute('id','computerHeader');
    const btnContainer = createElement.createDiv('btnContainer');
    for(let i=0; i<(player1.length);i++){
        for(let j=0; j<(player1[i].length);j++){
            let gameCell = createElement.createDiv(`${i}${j}`)
            gameCell.classList.add("cell");
            playerGameboard.appendChild(gameCell);
        }
    }
    for(let i=0; i<(computer1.length);i++){
        for(let j=0; j<(computer1[i].length);j++){
            let gameCell = createElement.createDiv(`${i}${j}computer`)
            gameCell.classList.add("cell");
            computerGameboard.appendChild(gameCell);
        }
    }
    main.appendChild(header)
    btnContainer.append(orientationBtn,restartBtn)
    main.appendChild(btnContainer)
    main.appendChild(gameboards)
    gameboards.append(playerHeader,playerGameboard,computerHeader,computerGameboard)
}

const updateHeader = (text) => {
    const header = document.getElementById('header');
    header.textContent = text;
}

const restartUI = () => {
    const main = document.getElementById('mainContainer');
    main.innerHTML =''
}


/***/ }),

/***/ "./src/factories.js":
/*!**************************!*\
  !*** ./src/factories.js ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "computer": () => (/* binding */ computer),
/* harmony export */   "gameBoardFactory": () => (/* binding */ gameBoardFactory),
/* harmony export */   "player": () => (/* binding */ player),
/* harmony export */   "shipFactory": () => (/* binding */ shipFactory)
/* harmony export */ });


//Factory function to create the ships
const shipFactory = (name,length) => {
    //creates an array the size of the ships length to keep track of hits.
    const shipHealth = [];
    let isPlaced = false;
    const isPlacedSetter = (arg) => isPlaced = arg;
    const isPlacedGetter = () => isPlaced;
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
    return {name,length,hit, isSunk,isPlacedGetter,isPlacedSetter}
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
    //list of ships that are still alive
    let shipsAlive = [];
    const shipsAliveGetter = () => shipsAlive;
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
            shipsAlive.push(ship.name)
        }
        return gameArray;
    }

    //Recieves coordinates from the board to recieve an attack
    const recieveAttack = (row,column) =>{
        //If the gameArray is empty place a small x for a miss
        if(gameArray[row][column] === ''){
            gameArray[row][column] = 'x'
        }
        else{
            //if there is a ship at the coordinates hit the board and place a large X to show there is a hit
            gameArray[row][column].hit();
            //if isSunk returns true that ship gets popped from the shipsAlive array.
            if(gameArray[row][column].isSunk()){
                shipsAlive.pop(gameArray[row][column].name)
            }
            gameArray[row][column] = 'X';
            
        }
        return gameArray
    }
    
    const arrayGetter = () => gameArray;
    return{startGame, place, recieveAttack,arrayGetter, shipsAliveGetter}
}

//Player factor Function
const player = () =>{
    //creates a board for the player
    let playerBoard = gameBoardFactory();
    //Initializes the board for the player
    playerBoard.startGame();
    //Helper function for the place method
    const playerPlace = (ship,row,column,orient) =>{
        return playerBoard.place(ship,row,column,orient);
    }

    //recieves an attack and then sends that attack to the computerBoard
    const playerAttack = (computerBoard,e) => {
        const row = parseInt(e.target.id[0])
        const col = parseInt(e.target.id[1])
        computerBoard.recieveAttack(row,col);
        return true
    }   
    return {playerBoard,playerPlace,playerAttack}
}

//computer factory function
const computer = () => {
    //creates a board for the computer
    let computerBoard = gameBoardFactory();
    //Initializes the board for the computer
    computerBoard.startGame();
    //Selects a random coordinate.
    const computerRandomAttack = (playerBoard) =>{
        let randomChoice = () => {
            let randomRow = Math.floor(Math.random() *10)
            let randomColumn = Math.floor(Math.random() * 10)
            return [randomRow, randomColumn]
        }
        let random= randomChoice();
        let row = random[0];
        let column = random[1];
        if((playerBoard.arrayGetter()[row][column] === 'x') || (playerBoard.arrayGetter()[row][column] === 'X')){
            computerRandomAttack(playerBoard)
        }
        else{

            playerBoard.recieveAttack(row,column);
            return playerBoard.arrayGetter();
        }

    }
    return {computerBoard,computerRandomAttack}
}




/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "computer": () => (/* reexport safe */ _factories__WEBPACK_IMPORTED_MODULE_2__.computer),
/* harmony export */   "gameBoardFactory": () => (/* reexport safe */ _factories__WEBPACK_IMPORTED_MODULE_2__.gameBoardFactory),
/* harmony export */   "player": () => (/* reexport safe */ _factories__WEBPACK_IMPORTED_MODULE_2__.player),
/* harmony export */   "shipFactory": () => (/* reexport safe */ _factories__WEBPACK_IMPORTED_MODULE_2__.shipFactory),
/* harmony export */   "updateGameboard": () => (/* binding */ updateGameboard)
/* harmony export */ });
/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./style.css */ "./src/style.css");
/* harmony import */ var _domManip_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./domManip.js */ "./src/domManip.js");
/* harmony import */ var _factories__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./factories */ "./src/factories.js");
/* harmony import */ var _playerPlace__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./playerPlace */ "./src/playerPlace.js");




//initilizes the game
const initGame = () =>{
    //creates a player and a computer
    const player1 = (0,_factories__WEBPACK_IMPORTED_MODULE_2__.player)();
    const computer1 = (0,_factories__WEBPACK_IMPORTED_MODULE_2__.computer)();

    //creates all ships for player and computer
    const playerSub = (0,_factories__WEBPACK_IMPORTED_MODULE_2__.shipFactory)("submarine",3);
    const playerCarrier = (0,_factories__WEBPACK_IMPORTED_MODULE_2__.shipFactory)("carrier",5);
    const playerBattleship = (0,_factories__WEBPACK_IMPORTED_MODULE_2__.shipFactory)('battleship',4);
    const playerCruiser = (0,_factories__WEBPACK_IMPORTED_MODULE_2__.shipFactory)('cruiser',3);
    const playerDestroyer = (0,_factories__WEBPACK_IMPORTED_MODULE_2__.shipFactory)('destroyer', 2);
    const computerSub = (0,_factories__WEBPACK_IMPORTED_MODULE_2__.shipFactory)("submarine",3);
    const computerCarrier = (0,_factories__WEBPACK_IMPORTED_MODULE_2__.shipFactory)("carrier",5);
    const computerBattleship = (0,_factories__WEBPACK_IMPORTED_MODULE_2__.shipFactory)('battleship',4);
    const computerCruiser = (0,_factories__WEBPACK_IMPORTED_MODULE_2__.shipFactory)('cruiser',3);
    const computerDestroyer = (0,_factories__WEBPACK_IMPORTED_MODULE_2__.shipFactory)('destroyer', 2);

    let playerShips = [playerSub,playerCarrier,playerBattleship,playerCruiser,playerDestroyer]
    //creates the UI
    ;(0,_domManip_js__WEBPACK_IMPORTED_MODULE_1__.createContainer)();
    (0,_domManip_js__WEBPACK_IMPORTED_MODULE_1__.createGameBoardUI)(player1.playerBoard.arrayGetter(),computer1.computerBoard.arrayGetter());
    const restartBtn = document.getElementById('restartBtn');
    restartBtn.addEventListener('click',restartGame)
    ;(0,_playerPlace__WEBPACK_IMPORTED_MODULE_3__.userPlace)(playerShips,player1,computer1,playerSub)


    computerRandomPlace(computer1,computerSub);
    computerRandomPlace(computer1,computerCarrier);
    computerRandomPlace(computer1,computerBattleship);
    computerRandomPlace(computer1,computerCruiser);
    computerRandomPlace(computer1,computerDestroyer);
    console.log(computer1.computerBoard.arrayGetter());


    updateGameboard(player1,computer1);
    const computerGameboardDiv = document.getElementById('computerGameboard');
    computerGameboardDiv.addEventListener('click',e => {
        playGame(player1,computer1,e)
    })
}


//Randomly places computer ships
const computerRandomPlace = (computer, ship) => {
    //Randomly selects 0 or 1. 0 is horizontal and 1 is vertical
    let randomOrientation = Math.floor(Math.random() * 2);
    //checks to shee if ship would intersect another ship that is already on the board
    const intersectCheck = (computer,ship,row,col,orient)=>{
        if(orient === 'vertical'){
            for(let i = 0;i<ship.length;i++){
                //iterates through the ships length and adding the index to the row because it is placed vertically. 
                //If the element is not empty it returns false
                if(computer.computerBoard.arrayGetter()[row+i][col] !== ''){
                    return false
                }
            }
            return true
        }
        else{
                //iterates through the ships length and adding the index to the column because it is placed horizontally. 
                //If the element is not empty it returns false
            for(let i = 0;i<ship.length;i++){
                if(computer.computerBoard.arrayGetter()[row][col+i] !== ''){
                    return false
                }
            }
            return true
        }
    }
        //places the ship randomly in vertical orientation
    if(randomOrientation === 1){
        
        let row = Math.floor(Math.random() * (10-ship.length));
        let col = Math.floor(Math.random()*10);
        //checks to see if it is interecting. If so then it calls the randomPlace function again
        if(intersectCheck(computer,ship,row,col,'vertical')){
            computer.computerBoard.place(ship,row,col,'vertical');
        }
        else{computerRandomPlace(computer,ship)}

    }
    //places the ship randomly in horizontal orrientation
    else{
        let row = Math.floor(Math.random()*10);
        let col = Math.floor(Math.random() * (10-ship.length));
        
        if(intersectCheck(computer,ship,row,col,'horizontal')){
            computer.computerBoard.place(ship,row,col,'horizontal')
        }
        else{computerRandomPlace(computer,ship)}
    }
}

const playGame = (player1,computer1,e) => {
        if(!gameOver(player1,computer1)) {
        player1.playerAttack(computer1.computerBoard,e)
        computer1.computerRandomAttack(player1.playerBoard)
        }
        updateGameboard(player1,computer1);
}

const gameOver= (player,computer) => {

    if(computer.computerBoard.shipsAliveGetter().length ===0  || player.playerBoard.shipsAliveGetter().length === 0){
        (0,_domManip_js__WEBPACK_IMPORTED_MODULE_1__.updateHeader)('Game Over! Press Restart to play again!')
        return true
    }
    return false
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
            if(computer1.computerBoard.arrayGetter()[i][j] === 'x'){
                gameCell.classList.add('empty')
            }
            else if(computer1.computerBoard.arrayGetter()[i][j] === 'X'){
                gameCell.classList.add('hit')
            }
        }
    }
};

const restartGame = () => {
    (0,_domManip_js__WEBPACK_IMPORTED_MODULE_1__.restartUI)();
    initGame();

}




initGame()





/***/ }),

/***/ "./src/playerPlace.js":
/*!****************************!*\
  !*** ./src/playerPlace.js ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "isShipPlaced": () => (/* binding */ isShipPlaced),
/* harmony export */   "playerExit": () => (/* binding */ playerExit),
/* harmony export */   "playerHover": () => (/* binding */ playerHover),
/* harmony export */   "userPlace": () => (/* binding */ userPlace)
/* harmony export */ });
/* harmony import */ var _index__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./index */ "./src/index.js");
/* harmony import */ var _domManip__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./domManip */ "./src/domManip.js");


// Code to visualize ship placement

let currentShip;
//playerHover shows an outline of the ship to be placed
const playerHover = (event) => {
    let beginIndex = parseInt(event.target.id);
    let orientationBtn = document.getElementById('orientBtn');
    //Outline if it is Horizontal
    if(orientationBtn.textContent === 'Horizontal'){
        //Determines if the outline would be outside of the allowable range
        if(beginIndex%10>(beginIndex+currentShip.length)%10 && (beginIndex+currentShip.length)%10 !== 0){
        }
        else{
            //interates through the ship length to outline the correct length
            for(let i = 0; i<currentShip.length;i++){
                let index = beginIndex + i;
                //indexs under 10 begin with a 0 so we need to add a string '0' to the index
                if(index < 10){
                    index = '0' + index;
                }
                //gets the correct cells to select
                let currentTar = document.getElementById(`${index}`);
                
                currentTar.classList.add('selected');
            }
        }
    }
    //same as above but everything is multiplied by 10 to make it work for vertical placement
    else{
        console.log(beginIndex + currentShip.length*10)
        if((beginIndex + currentShip.length*10)>110){
        }
        else{
            for(let i = 0; i<currentShip.length*10;i+=10){
                let index = beginIndex + i;
                if(index < 10){
                    index = '0' + index;
                }
                let currentTar = document.getElementById(`${index}`);
                
                currentTar.classList.add('selected');
            }
        }
    }

}
//changes the orient button 
const orientBtn = () => {
    console.log('orient')
    let orientationBtn = document.getElementById('orientBtn');
    let playerBoard = document.getElementById('playerGameboard');
    //changes text when clicked
    if(orientationBtn.textContent === 'Horizontal'){
        orientationBtn.textContent = 'Vertical';
    }
    else{
        orientationBtn.textContent = 'Horizontal';
    }
    //4 lines below remove and add listeners so they update the orientation.
    playerBoard.removeEventListener('mouseout',playerExit);
    playerBoard.removeEventListener('mouseover',playerHover);
    playerBoard.addEventListener('mouseover',playerHover);
    playerBoard.addEventListener('mouseout',playerExit);
    
}
// Code to delete the ship visualization
const playerExit = (event) => {
    let beginIndex = parseInt(event.target.id);
    let orientationBtn = document.getElementById('orientBtn');
    if(orientationBtn.textContent === 'Horizontal'){
        for(let i = 0; i<currentShip.length;i++){
            let index = beginIndex + i;
            
            if(index < 10){
                index = '0' + index
            }
            let currentTar = document.getElementById(`${index}`);
            
            currentTar.classList.remove('selected');
        }
    }
    else{
        for(let i = 0; i<currentShip.length*10;i+=10){
            let index = beginIndex + i;
            
            if(index < 10){
                index = '0' + index
                console.log(index);
            }
            let currentTar = document.getElementById(`${index}`);
            
            currentTar.classList.remove('selected');
        }
    }

}

//Places ship
const userPlace = (ships,player,computer,ship) => {
    const playerBoard = document.getElementById('playerGameboard');
    const orientationBtn = document.getElementById('orientBtn');
    currentShip = ship;

    playerBoard.removeEventListener('mouseout',playerExit);
    playerBoard.removeEventListener('mouseover',playerHover);
    playerBoard.addEventListener('mouseover',playerHover);
    playerBoard.addEventListener('mouseout',playerExit);
    orientationBtn.addEventListener('click', orientBtn);

    playerBoard.addEventListener('click',function(event){
        let element = event.target.id;
        player.playerPlace(ship,parseInt(element[0]),parseInt(element[1]),orientationBtn.textContent.toLowerCase());
        (0,_index__WEBPACK_IMPORTED_MODULE_0__.updateGameboard)(player,computer);
        ship.isPlacedSetter(true);
        playerExit(event)
        if(isShipPlaced(ships) !== true && player.playerBoard.shipsAliveGetter().includes(ship.name)){
            userPlace(ships,player,computer,isShipPlaced(ships))
            ;(0,_domManip__WEBPACK_IMPORTED_MODULE_1__.updateHeader)(`Place your ${isShipPlaced(ships).name} anywhere on the player board`)
        }
        else if(player.playerBoard.shipsAliveGetter().length<5){
            userPlace(ships,player,computer,ship)
        }
        else if(isShipPlaced(ships)){
            let container = document.getElementById('btnContainer')
            container.removeChild(orientationBtn)
            playerBoard.removeEventListener('mouseout',playerExit);
            playerBoard.removeEventListener('mouseover',playerHover);
            (0,_domManip__WEBPACK_IMPORTED_MODULE_1__.updateHeader)('Click on the computer board to attack!')
        }
    }, {once:true})
}

const isShipPlaced= (arr) => {
    for(let i = 0; i<arr.length;i++){
        if(!arr[i].isPlacedGetter()){

            return arr[i]
        }
    }
    return true
}





/***/ }),

/***/ "./src/SairaStencilOne-Regular.ttf":
/*!*****************************************!*\
  !*** ./src/SairaStencilOne-Regular.ttf ***!
  \*****************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "d71378f180e77f557c2e.ttf";

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
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = __webpack_modules__;
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
/******/ 	/* webpack/runtime/global */
/******/ 	(() => {
/******/ 		__webpack_require__.g = (function() {
/******/ 			if (typeof globalThis === 'object') return globalThis;
/******/ 			try {
/******/ 				return this || new Function('return this')();
/******/ 			} catch (e) {
/******/ 				if (typeof window === 'object') return window;
/******/ 			}
/******/ 		})();
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
/******/ 	/* webpack/runtime/publicPath */
/******/ 	(() => {
/******/ 		var scriptUrl;
/******/ 		if (__webpack_require__.g.importScripts) scriptUrl = __webpack_require__.g.location + "";
/******/ 		var document = __webpack_require__.g.document;
/******/ 		if (!scriptUrl && document) {
/******/ 			if (document.currentScript)
/******/ 				scriptUrl = document.currentScript.src
/******/ 			if (!scriptUrl) {
/******/ 				var scripts = document.getElementsByTagName("script");
/******/ 				if(scripts.length) scriptUrl = scripts[scripts.length - 1].src
/******/ 			}
/******/ 		}
/******/ 		// When supporting browsers where an automatic publicPath is not supported you must specify an output.publicPath manually via configuration
/******/ 		// or pass an empty string ("") and set the __webpack_public_path__ variable from your code to use your own logic.
/******/ 		if (!scriptUrl) throw new Error("Automatic publicPath is not supported in this browser");
/******/ 		scriptUrl = scriptUrl.replace(/#.*$/, "").replace(/\?.*$/, "").replace(/\/[^\/]+$/, "/");
/******/ 		__webpack_require__.p = scriptUrl;
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/jsonp chunk loading */
/******/ 	(() => {
/******/ 		__webpack_require__.b = document.baseURI || self.location.href;
/******/ 		
/******/ 		// object to store loaded and loading chunks
/******/ 		// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 		// [resolve, reject, Promise] = chunk loading, 0 = chunk loaded
/******/ 		var installedChunks = {
/******/ 			"index": 0
/******/ 		};
/******/ 		
/******/ 		// no chunk on demand loading
/******/ 		
/******/ 		// no prefetching
/******/ 		
/******/ 		// no preloaded
/******/ 		
/******/ 		// no HMR
/******/ 		
/******/ 		// no HMR manifest
/******/ 		
/******/ 		// no on chunks loaded
/******/ 		
/******/ 		// no jsonp function
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module is referenced by other modules so it can't be inlined
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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Qjs7QUFFQTtBQUNBLG1CQUFtQixhQUFhO0FBQ2hDOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O1VDOUlBO1VBQ0E7O1VBRUE7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7O1VBRUE7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7O1VBRUE7VUFDQTs7Ozs7V0N6QkE7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLGlDQUFpQyxXQUFXO1dBQzVDO1dBQ0E7Ozs7O1dDUEE7V0FDQTtXQUNBO1dBQ0E7V0FDQSx5Q0FBeUMsd0NBQXdDO1dBQ2pGO1dBQ0E7V0FDQTs7Ozs7V0NQQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLEdBQUc7V0FDSDtXQUNBO1dBQ0EsQ0FBQzs7Ozs7V0NQRDs7Ozs7V0NBQTtXQUNBO1dBQ0E7V0FDQSx1REFBdUQsaUJBQWlCO1dBQ3hFO1dBQ0EsZ0RBQWdELGFBQWE7V0FDN0Q7Ozs7O1dDTkE7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7Ozs7O1dDZkE7O1dBRUE7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBOztXQUVBOztXQUVBOztXQUVBOztXQUVBOztXQUVBOztXQUVBOztXQUVBOzs7OztVRXJCQTtVQUNBO1VBQ0E7VUFDQSIsInNvdXJjZXMiOlsid2VicGFjazovL2JhdHRsZXNoaXAvLi9zcmMvc3R5bGUuY3NzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvZ2V0VXJsLmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vc3JjL3N0eWxlLmNzcz83MTYzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL3NyYy9kb21NYW5pcC5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vc3JjL2ZhY3Rvcmllcy5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vc3JjL2luZGV4LmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9zcmMvcGxheWVyUGxhY2UuanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwL3dlYnBhY2svcnVudGltZS9jb21wYXQgZ2V0IGRlZmF1bHQgZXhwb3J0Iiwid2VicGFjazovL2JhdHRsZXNoaXAvd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL2JhdHRsZXNoaXAvd2VicGFjay9ydW50aW1lL2dsb2JhbCIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwL3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL2JhdHRsZXNoaXAvd2VicGFjay9ydW50aW1lL3B1YmxpY1BhdGgiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC93ZWJwYWNrL3J1bnRpbWUvanNvbnAgY2h1bmsgbG9hZGluZyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwL3dlYnBhY2svYmVmb3JlLXN0YXJ0dXAiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC93ZWJwYWNrL3N0YXJ0dXAiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC93ZWJwYWNrL2FmdGVyLXN0YXJ0dXAiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gSW1wb3J0c1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9HRVRfVVJMX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2dldFVybC5qc1wiO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8wX19fID0gbmV3IFVSTChcIi4vU2FpcmFTdGVuY2lsT25lLVJlZ3VsYXIudHRmXCIsIGltcG9ydC5tZXRhLnVybCk7XG52YXIgX19fQ1NTX0xPQURFUl9FWFBPUlRfX18gPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMF9fXyA9IF9fX0NTU19MT0FERVJfR0VUX1VSTF9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzBfX18pO1xuLy8gTW9kdWxlXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIFwiQGZvbnQtZmFjZSB7XFxuICAgIGZvbnQtZmFtaWx5OiAnU2FpcmFTdGVuY2lsJztcXG4gICAgc3JjOiB1cmwoXCIgKyBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8wX19fICsgXCIpIGZvcm1hdCgndHJ1ZXR5cGUnKTtcXG5cXG59XFxuKntcXG4gICAgZm9udC1mYW1pbHk6ICdTYWlyYVN0ZW5jaWwnO1xcbn1cXG5ib2R5e1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMTkyLCAyMTcsIDIyOCk7XFxuICAgIHdpZHRoOiAxMDAlO1xcbiAgICBoZWlnaHQ6IDEwMCU7XFxufVxcbiNtYWluQ29udGFpbmVye1xcbiAgICBkaXNwbGF5OiBibG9jaztcXG59XFxuI2dhbWVib2FyZHN7XFxuICAgIGRpc3BsYXk6IGdyaWQ7XFxuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogcmVwZWF0KDIsMWZyKTtcXG4gICAgbWFyZ2luOiAxMHB4O1xcbiAgICBqdXN0aWZ5LWl0ZW1zOiBjZW50ZXI7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxufVxcbmgxe1xcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICAgIGZvbnQtc2l6ZTogNDZweDtcXG4gICAgbGV0dGVyLXNwYWNpbmc6IDVweDtcXG59XFxuI2hlYWRlcntcXG4gICAgZm9udC1zaXplOiAzNnB4O1xcbiAgICBsZXR0ZXItc3BhY2luZzogMXB4O1xcbn1cXG4jcGxheWVySGVhZGVyLCAjY29tcHV0ZXJIZWFkZXJ7XFxuICAgIHdpZHRoOiA0MHZ3O1xcbiAgICBncmlkLXJvdy1zdGFydDogMDtcXG4gICAgZ3JpZC1yb3ctZW5kOiAxO1xcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxufVxcblxcbiNwbGF5ZXJHYW1lYm9hcmQsICNjb21wdXRlckdhbWVib2FyZHtcXG4gICAgZGlzcGxheTogZ3JpZDtcXG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiByZXBlYXQoMTAsMWZyKTtcXG4gICAgaGVpZ2h0OiA0MHZ3O1xcbiAgICB3aWR0aDogNDB2dztcXG59XFxuLmNlbGx7XFxuICAgIGJvcmRlcjogMXB4IHNvbGlkIGJsYWNrO1xcbiAgICBoZWlnaHQ6IDEwMCU7XFxuICAgIHdpZHRoOiAxMDAlO1xcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICAgIGZvbnQtc2l6ZTogeC1zbWFsbDtcXG59XFxuXFxuLmJhdHRsZXNoaXB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IzJiMjQyNDtcXG59XFxuXFxuLnN1Ym1hcmluZXtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzE4MTgxYTtcXG59XFxuXFxuLmNydWlzZXJ7XFxuICAgIGJhY2tncm91bmQtY29sb3I6ICM1ZTVlNWU7XFxufVxcblxcbi5jYXJyaWVye1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjNDEyZDQ0O1xcbn1cXG5cXG4uZGVzdHJveWVye1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjM2EzYTNhO1xcbn1cXG4uZW1wdHl7XFxuICAgIGJhY2tncm91bmQtY29sb3I6ICNmZmZmZmY7XFxufVxcbi5oaXR7XFxuICAgIGJhY2tncm91bmQtY29sb3I6ICNiYjAwMDA7XFxufVxcblxcbi5zZWxlY3RlZHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDEwNSwgMTE5LCAxMjIpO1xcbn1cXG5cXG4jYnRuQ29udGFpbmVye1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gICAgd2lkdGg6IDEwMCU7XFxuICAgIGdhcDogMjBweDtcXG59XFxuXFxuYnV0dG9ue1xcbiAgICBjdXJzb3I6IHBvaW50ZXI7XFxuICAgIG91dGxpbmU6IDA7XFxuICAgIGNvbG9yOiAjZmZmO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjNWE2MTZkO1xcblxcbiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XFxuICAgIGZvbnQtd2VpZ2h0OiA0MDA7XFxuICAgIGxpbmUtaGVpZ2h0OiAxLjU7XFxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcXG4gICAgYm9yZGVyOiAycHggc29saWQgIzE4MTgxYTtcXG4gICAgcGFkZGluZzogNnB4IDEycHg7XFxuICAgIGZvbnQtc2l6ZTogMTZweDtcXG4gICAgYm9yZGVyLXJhZGl1czogLjI1cmVtO1xcbiAgICB0cmFuc2l0aW9uOiBjb2xvciAuMTVzIGVhc2UtaW4tb3V0LGJhY2tncm91bmQtY29sb3IgLjE1cyBlYXNlLWluLW91dCxib3JkZXItY29sb3IgLjE1cyBlYXNlLWluLW91dCxib3gtc2hhZG93IC4xNXMgZWFzZS1pbi1vdXQ7XFxuXFxufVxcbmJ1dHRvbjpob3ZlcntcXG4gICAgY29sb3I6ICNmZmY7XFxuICAgIGJhY2tncm91bmQtY29sb3I6ICMwZDEwMTQ7XFxuICAgIGJvcmRlci1jb2xvcjogIzM3M2U0NztcXG59XFxuXFxuXFxuQG1lZGlhIChtYXgtd2lkdGg6NTAwcHgpIHtcXG4gICAgI2dhbWVib2FyZHN7XFxuICAgICAgICBkaXNwbGF5OiBibG9jaztcXG4gICAgICAgIG1hcmdpbi1sZWZ0OiBhdXRvO1xcbiAgICAgICAgbWFyZ2luLXJpZ2h0OiBhdXRvO1xcbiAgICB9XFxuICAgIGJvZHl7XFxuICAgICAgICBtYXJnaW46MDtcXG4gICAgfVxcbiAgICAjcGxheWVySGVhZGVyLCNwbGF5ZXJHYW1lYm9hcmQsI2NvbXB1dGVySGVhZGVyLCNjb21wdXRlckdhbWVib2FyZHtcXG4gICAgICAgIG1hcmdpbjogYXV0bztcXG4gICAgICAgIG1hcmdpbi1ib3R0b206IDEwcHg7XFxuICAgIH1cXG4gICAgI3BsYXllckdhbWVib2FyZCwjY29tcHV0ZXJHYW1lYm9hcmR7XFxuICAgICAgICB3aWR0aDogODB2dztcXG4gICAgICAgIGhlaWdodDogODB2dztcXG4gICAgfVxcbn1cIiwgXCJcIix7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCJ3ZWJwYWNrOi8vLi9zcmMvc3R5bGUuY3NzXCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCJBQUFBO0lBQ0ksMkJBQTJCO0lBQzNCLCtEQUE0RDs7QUFFaEU7QUFDQTtJQUNJLDJCQUEyQjtBQUMvQjtBQUNBO0lBQ0ksb0NBQW9DO0lBQ3BDLFdBQVc7SUFDWCxZQUFZO0FBQ2hCO0FBQ0E7SUFDSSxjQUFjO0FBQ2xCO0FBQ0E7SUFDSSxhQUFhO0lBQ2Isb0NBQW9DO0lBQ3BDLFlBQVk7SUFDWixxQkFBcUI7SUFDckIsbUJBQW1CO0FBQ3ZCO0FBQ0E7SUFDSSxrQkFBa0I7SUFDbEIsZUFBZTtJQUNmLG1CQUFtQjtBQUN2QjtBQUNBO0lBQ0ksZUFBZTtJQUNmLG1CQUFtQjtBQUN2QjtBQUNBO0lBQ0ksV0FBVztJQUNYLGlCQUFpQjtJQUNqQixlQUFlO0lBQ2Ysa0JBQWtCO0FBQ3RCOztBQUVBO0lBQ0ksYUFBYTtJQUNiLHFDQUFxQztJQUNyQyxZQUFZO0lBQ1osV0FBVztBQUNmO0FBQ0E7SUFDSSx1QkFBdUI7SUFDdkIsWUFBWTtJQUNaLFdBQVc7SUFDWCxrQkFBa0I7SUFDbEIsa0JBQWtCO0FBQ3RCOztBQUVBO0lBQ0ksd0JBQXdCO0FBQzVCOztBQUVBO0lBQ0kseUJBQXlCO0FBQzdCOztBQUVBO0lBQ0kseUJBQXlCO0FBQzdCOztBQUVBO0lBQ0kseUJBQXlCO0FBQzdCOztBQUVBO0lBQ0kseUJBQXlCO0FBQzdCO0FBQ0E7SUFDSSx5QkFBeUI7QUFDN0I7QUFDQTtJQUNJLHlCQUF5QjtBQUM3Qjs7QUFFQTtJQUNJLG9DQUFvQztBQUN4Qzs7QUFFQTtJQUNJLGFBQWE7SUFDYix1QkFBdUI7SUFDdkIsV0FBVztJQUNYLFNBQVM7QUFDYjs7QUFFQTtJQUNJLGVBQWU7SUFDZixVQUFVO0lBQ1YsV0FBVztJQUNYLHlCQUF5Qjs7SUFFekIscUJBQXFCO0lBQ3JCLGdCQUFnQjtJQUNoQixnQkFBZ0I7SUFDaEIsa0JBQWtCO0lBQ2xCLHlCQUF5QjtJQUN6QixpQkFBaUI7SUFDakIsZUFBZTtJQUNmLHFCQUFxQjtJQUNyQiw4SEFBOEg7O0FBRWxJO0FBQ0E7SUFDSSxXQUFXO0lBQ1gseUJBQXlCO0lBQ3pCLHFCQUFxQjtBQUN6Qjs7O0FBR0E7SUFDSTtRQUNJLGNBQWM7UUFDZCxpQkFBaUI7UUFDakIsa0JBQWtCO0lBQ3RCO0lBQ0E7UUFDSSxRQUFRO0lBQ1o7SUFDQTtRQUNJLFlBQVk7UUFDWixtQkFBbUI7SUFDdkI7SUFDQTtRQUNJLFdBQVc7UUFDWCxZQUFZO0lBQ2hCO0FBQ0pcIixcInNvdXJjZXNDb250ZW50XCI6W1wiQGZvbnQtZmFjZSB7XFxuICAgIGZvbnQtZmFtaWx5OiAnU2FpcmFTdGVuY2lsJztcXG4gICAgc3JjOiB1cmwoJy4vU2FpcmFTdGVuY2lsT25lLVJlZ3VsYXIudHRmJykgZm9ybWF0KCd0cnVldHlwZScpO1xcblxcbn1cXG4qe1xcbiAgICBmb250LWZhbWlseTogJ1NhaXJhU3RlbmNpbCc7XFxufVxcbmJvZHl7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYigxOTIsIDIxNywgMjI4KTtcXG4gICAgd2lkdGg6IDEwMCU7XFxuICAgIGhlaWdodDogMTAwJTtcXG59XFxuI21haW5Db250YWluZXJ7XFxuICAgIGRpc3BsYXk6IGJsb2NrO1xcbn1cXG4jZ2FtZWJvYXJkc3tcXG4gICAgZGlzcGxheTogZ3JpZDtcXG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiByZXBlYXQoMiwxZnIpO1xcbiAgICBtYXJnaW46IDEwcHg7XFxuICAgIGp1c3RpZnktaXRlbXM6IGNlbnRlcjtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG59XFxuaDF7XFxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcXG4gICAgZm9udC1zaXplOiA0NnB4O1xcbiAgICBsZXR0ZXItc3BhY2luZzogNXB4O1xcbn1cXG4jaGVhZGVye1xcbiAgICBmb250LXNpemU6IDM2cHg7XFxuICAgIGxldHRlci1zcGFjaW5nOiAxcHg7XFxufVxcbiNwbGF5ZXJIZWFkZXIsICNjb21wdXRlckhlYWRlcntcXG4gICAgd2lkdGg6IDQwdnc7XFxuICAgIGdyaWQtcm93LXN0YXJ0OiAwO1xcbiAgICBncmlkLXJvdy1lbmQ6IDE7XFxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcXG59XFxuXFxuI3BsYXllckdhbWVib2FyZCwgI2NvbXB1dGVyR2FtZWJvYXJke1xcbiAgICBkaXNwbGF5OiBncmlkO1xcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IHJlcGVhdCgxMCwxZnIpO1xcbiAgICBoZWlnaHQ6IDQwdnc7XFxuICAgIHdpZHRoOiA0MHZ3O1xcbn1cXG4uY2VsbHtcXG4gICAgYm9yZGVyOiAxcHggc29saWQgYmxhY2s7XFxuICAgIGhlaWdodDogMTAwJTtcXG4gICAgd2lkdGg6IDEwMCU7XFxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcXG4gICAgZm9udC1zaXplOiB4LXNtYWxsO1xcbn1cXG5cXG4uYmF0dGxlc2hpcHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjojMmIyNDI0O1xcbn1cXG5cXG4uc3VibWFyaW5le1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMTgxODFhO1xcbn1cXG5cXG4uY3J1aXNlcntcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzVlNWU1ZTtcXG59XFxuXFxuLmNhcnJpZXJ7XFxuICAgIGJhY2tncm91bmQtY29sb3I6ICM0MTJkNDQ7XFxufVxcblxcbi5kZXN0cm95ZXJ7XFxuICAgIGJhY2tncm91bmQtY29sb3I6ICMzYTNhM2E7XFxufVxcbi5lbXB0eXtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZmZmZjtcXG59XFxuLmhpdHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2JiMDAwMDtcXG59XFxuXFxuLnNlbGVjdGVke1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMTA1LCAxMTksIDEyMik7XFxufVxcblxcbiNidG5Db250YWluZXJ7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgICB3aWR0aDogMTAwJTtcXG4gICAgZ2FwOiAyMHB4O1xcbn1cXG5cXG5idXR0b257XFxuICAgIGN1cnNvcjogcG9pbnRlcjtcXG4gICAgb3V0bGluZTogMDtcXG4gICAgY29sb3I6ICNmZmY7XFxuICAgIGJhY2tncm91bmQtY29sb3I6ICM1YTYxNmQ7XFxuXFxuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcXG4gICAgZm9udC13ZWlnaHQ6IDQwMDtcXG4gICAgbGluZS1oZWlnaHQ6IDEuNTtcXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xcbiAgICBib3JkZXI6IDJweCBzb2xpZCAjMTgxODFhO1xcbiAgICBwYWRkaW5nOiA2cHggMTJweDtcXG4gICAgZm9udC1zaXplOiAxNnB4O1xcbiAgICBib3JkZXItcmFkaXVzOiAuMjVyZW07XFxuICAgIHRyYW5zaXRpb246IGNvbG9yIC4xNXMgZWFzZS1pbi1vdXQsYmFja2dyb3VuZC1jb2xvciAuMTVzIGVhc2UtaW4tb3V0LGJvcmRlci1jb2xvciAuMTVzIGVhc2UtaW4tb3V0LGJveC1zaGFkb3cgLjE1cyBlYXNlLWluLW91dDtcXG5cXG59XFxuYnV0dG9uOmhvdmVye1xcbiAgICBjb2xvcjogI2ZmZjtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzBkMTAxNDtcXG4gICAgYm9yZGVyLWNvbG9yOiAjMzczZTQ3O1xcbn1cXG5cXG5cXG5AbWVkaWEgKG1heC13aWR0aDo1MDBweCkge1xcbiAgICAjZ2FtZWJvYXJkc3tcXG4gICAgICAgIGRpc3BsYXk6IGJsb2NrO1xcbiAgICAgICAgbWFyZ2luLWxlZnQ6IGF1dG87XFxuICAgICAgICBtYXJnaW4tcmlnaHQ6IGF1dG87XFxuICAgIH1cXG4gICAgYm9keXtcXG4gICAgICAgIG1hcmdpbjowO1xcbiAgICB9XFxuICAgICNwbGF5ZXJIZWFkZXIsI3BsYXllckdhbWVib2FyZCwjY29tcHV0ZXJIZWFkZXIsI2NvbXB1dGVyR2FtZWJvYXJke1xcbiAgICAgICAgbWFyZ2luOiBhdXRvO1xcbiAgICAgICAgbWFyZ2luLWJvdHRvbTogMTBweDtcXG4gICAgfVxcbiAgICAjcGxheWVyR2FtZWJvYXJkLCNjb21wdXRlckdhbWVib2FyZHtcXG4gICAgICAgIHdpZHRoOiA4MHZ3O1xcbiAgICAgICAgaGVpZ2h0OiA4MHZ3O1xcbiAgICB9XFxufVwiXSxcInNvdXJjZVJvb3RcIjpcIlwifV0pO1xuLy8gRXhwb3J0c1xuZXhwb3J0IGRlZmF1bHQgX19fQ1NTX0xPQURFUl9FWFBPUlRfX187XG4iLCJcInVzZSBzdHJpY3RcIjtcblxuLypcbiAgTUlUIExpY2Vuc2UgaHR0cDovL3d3dy5vcGVuc291cmNlLm9yZy9saWNlbnNlcy9taXQtbGljZW5zZS5waHBcbiAgQXV0aG9yIFRvYmlhcyBLb3BwZXJzIEBzb2tyYVxuKi9cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcpIHtcbiAgdmFyIGxpc3QgPSBbXTsgLy8gcmV0dXJuIHRoZSBsaXN0IG9mIG1vZHVsZXMgYXMgY3NzIHN0cmluZ1xuXG4gIGxpc3QudG9TdHJpbmcgPSBmdW5jdGlvbiB0b1N0cmluZygpIHtcbiAgICByZXR1cm4gdGhpcy5tYXAoZnVuY3Rpb24gKGl0ZW0pIHtcbiAgICAgIHZhciBjb250ZW50ID0gXCJcIjtcbiAgICAgIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2YgaXRlbVs1XSAhPT0gXCJ1bmRlZmluZWRcIjtcblxuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpO1xuICAgICAgfVxuXG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpO1xuICAgICAgfVxuXG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKTtcbiAgICAgIH1cblxuICAgICAgY29udGVudCArPSBjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKGl0ZW0pO1xuXG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG5cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG5cbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG5cbiAgICAgIHJldHVybiBjb250ZW50O1xuICAgIH0pLmpvaW4oXCJcIik7XG4gIH07IC8vIGltcG9ydCBhIGxpc3Qgb2YgbW9kdWxlcyBpbnRvIHRoZSBsaXN0XG5cblxuICBsaXN0LmkgPSBmdW5jdGlvbiBpKG1vZHVsZXMsIG1lZGlhLCBkZWR1cGUsIHN1cHBvcnRzLCBsYXllcikge1xuICAgIGlmICh0eXBlb2YgbW9kdWxlcyA9PT0gXCJzdHJpbmdcIikge1xuICAgICAgbW9kdWxlcyA9IFtbbnVsbCwgbW9kdWxlcywgdW5kZWZpbmVkXV07XG4gICAgfVxuXG4gICAgdmFyIGFscmVhZHlJbXBvcnRlZE1vZHVsZXMgPSB7fTtcblxuICAgIGlmIChkZWR1cGUpIHtcbiAgICAgIGZvciAodmFyIGsgPSAwOyBrIDwgdGhpcy5sZW5ndGg7IGsrKykge1xuICAgICAgICB2YXIgaWQgPSB0aGlzW2tdWzBdO1xuXG4gICAgICAgIGlmIChpZCAhPSBudWxsKSB7XG4gICAgICAgICAgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpZF0gPSB0cnVlO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuXG4gICAgZm9yICh2YXIgX2sgPSAwOyBfayA8IG1vZHVsZXMubGVuZ3RoOyBfaysrKSB7XG4gICAgICB2YXIgaXRlbSA9IFtdLmNvbmNhdChtb2R1bGVzW19rXSk7XG5cbiAgICAgIGlmIChkZWR1cGUgJiYgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpdGVtWzBdXSkge1xuICAgICAgICBjb250aW51ZTtcbiAgICAgIH1cblxuICAgICAgaWYgKHR5cGVvZiBsYXllciAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICBpZiAodHlwZW9mIGl0ZW1bNV0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgaWYgKG1lZGlhKSB7XG4gICAgICAgIGlmICghaXRlbVsyXSkge1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgaWYgKHN1cHBvcnRzKSB7XG4gICAgICAgIGlmICghaXRlbVs0XSkge1xuICAgICAgICAgIGl0ZW1bNF0gPSBcIlwiLmNvbmNhdChzdXBwb3J0cyk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzRdID0gc3VwcG9ydHM7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgbGlzdC5wdXNoKGl0ZW0pO1xuICAgIH1cbiAgfTtcblxuICByZXR1cm4gbGlzdDtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKHVybCwgb3B0aW9ucykge1xuICBpZiAoIW9wdGlvbnMpIHtcbiAgICBvcHRpb25zID0ge307XG4gIH1cblxuICBpZiAoIXVybCkge1xuICAgIHJldHVybiB1cmw7XG4gIH1cblxuICB1cmwgPSBTdHJpbmcodXJsLl9fZXNNb2R1bGUgPyB1cmwuZGVmYXVsdCA6IHVybCk7IC8vIElmIHVybCBpcyBhbHJlYWR5IHdyYXBwZWQgaW4gcXVvdGVzLCByZW1vdmUgdGhlbVxuXG4gIGlmICgvXlsnXCJdLipbJ1wiXSQvLnRlc3QodXJsKSkge1xuICAgIHVybCA9IHVybC5zbGljZSgxLCAtMSk7XG4gIH1cblxuICBpZiAob3B0aW9ucy5oYXNoKSB7XG4gICAgdXJsICs9IG9wdGlvbnMuaGFzaDtcbiAgfSAvLyBTaG91bGQgdXJsIGJlIHdyYXBwZWQ/XG4gIC8vIFNlZSBodHRwczovL2RyYWZ0cy5jc3N3Zy5vcmcvY3NzLXZhbHVlcy0zLyN1cmxzXG5cblxuICBpZiAoL1tcIicoKSBcXHRcXG5dfCglMjApLy50ZXN0KHVybCkgfHwgb3B0aW9ucy5uZWVkUXVvdGVzKSB7XG4gICAgcmV0dXJuIFwiXFxcIlwiLmNvbmNhdCh1cmwucmVwbGFjZSgvXCIvZywgJ1xcXFxcIicpLnJlcGxhY2UoL1xcbi9nLCBcIlxcXFxuXCIpLCBcIlxcXCJcIik7XG4gIH1cblxuICByZXR1cm4gdXJsO1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoaXRlbSkge1xuICB2YXIgY29udGVudCA9IGl0ZW1bMV07XG4gIHZhciBjc3NNYXBwaW5nID0gaXRlbVszXTtcblxuICBpZiAoIWNzc01hcHBpbmcpIHtcbiAgICByZXR1cm4gY29udGVudDtcbiAgfVxuXG4gIGlmICh0eXBlb2YgYnRvYSA9PT0gXCJmdW5jdGlvblwiKSB7XG4gICAgdmFyIGJhc2U2NCA9IGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KGNzc01hcHBpbmcpKSkpO1xuICAgIHZhciBkYXRhID0gXCJzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtjaGFyc2V0PXV0Zi04O2Jhc2U2NCxcIi5jb25jYXQoYmFzZTY0KTtcbiAgICB2YXIgc291cmNlTWFwcGluZyA9IFwiLyojIFwiLmNvbmNhdChkYXRhLCBcIiAqL1wiKTtcbiAgICB2YXIgc291cmNlVVJMcyA9IGNzc01hcHBpbmcuc291cmNlcy5tYXAoZnVuY3Rpb24gKHNvdXJjZSkge1xuICAgICAgcmV0dXJuIFwiLyojIHNvdXJjZVVSTD1cIi5jb25jYXQoY3NzTWFwcGluZy5zb3VyY2VSb290IHx8IFwiXCIpLmNvbmNhdChzb3VyY2UsIFwiICovXCIpO1xuICAgIH0pO1xuICAgIHJldHVybiBbY29udGVudF0uY29uY2F0KHNvdXJjZVVSTHMpLmNvbmNhdChbc291cmNlTWFwcGluZ10pLmpvaW4oXCJcXG5cIik7XG4gIH1cblxuICByZXR1cm4gW2NvbnRlbnRdLmpvaW4oXCJcXG5cIik7XG59OyIsIlxuICAgICAgaW1wb3J0IEFQSSBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qc1wiO1xuICAgICAgaW1wb3J0IGRvbUFQSSBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0Rm4gZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzXCI7XG4gICAgICBpbXBvcnQgc2V0QXR0cmlidXRlcyBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydFN0eWxlRWxlbWVudCBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qc1wiO1xuICAgICAgaW1wb3J0IHN0eWxlVGFnVHJhbnNmb3JtRm4gZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qc1wiO1xuICAgICAgaW1wb3J0IGNvbnRlbnQsICogYXMgbmFtZWRFeHBvcnQgZnJvbSBcIiEhLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zdHlsZS5jc3NcIjtcbiAgICAgIFxuICAgICAgXG5cbnZhciBvcHRpb25zID0ge307XG5cbm9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0gPSBzdHlsZVRhZ1RyYW5zZm9ybUZuO1xub3B0aW9ucy5zZXRBdHRyaWJ1dGVzID0gc2V0QXR0cmlidXRlcztcblxuICAgICAgb3B0aW9ucy5pbnNlcnQgPSBpbnNlcnRGbi5iaW5kKG51bGwsIFwiaGVhZFwiKTtcbiAgICBcbm9wdGlvbnMuZG9tQVBJID0gZG9tQVBJO1xub3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7XG5cbnZhciB1cGRhdGUgPSBBUEkoY29udGVudCwgb3B0aW9ucyk7XG5cblxuXG5leHBvcnQgKiBmcm9tIFwiISEuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3N0eWxlLmNzc1wiO1xuICAgICAgIGV4cG9ydCBkZWZhdWx0IGNvbnRlbnQgJiYgY29udGVudC5sb2NhbHMgPyBjb250ZW50LmxvY2FscyA6IHVuZGVmaW5lZDtcbiIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgc3R5bGVzSW5ET00gPSBbXTtcblxuZnVuY3Rpb24gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcikge1xuICB2YXIgcmVzdWx0ID0gLTE7XG5cbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBzdHlsZXNJbkRPTS5sZW5ndGg7IGkrKykge1xuICAgIGlmIChzdHlsZXNJbkRPTVtpXS5pZGVudGlmaWVyID09PSBpZGVudGlmaWVyKSB7XG4gICAgICByZXN1bHQgPSBpO1xuICAgICAgYnJlYWs7XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIHJlc3VsdDtcbn1cblxuZnVuY3Rpb24gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpIHtcbiAgdmFyIGlkQ291bnRNYXAgPSB7fTtcbiAgdmFyIGlkZW50aWZpZXJzID0gW107XG5cbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBsaXN0Lmxlbmd0aDsgaSsrKSB7XG4gICAgdmFyIGl0ZW0gPSBsaXN0W2ldO1xuICAgIHZhciBpZCA9IG9wdGlvbnMuYmFzZSA/IGl0ZW1bMF0gKyBvcHRpb25zLmJhc2UgOiBpdGVtWzBdO1xuICAgIHZhciBjb3VudCA9IGlkQ291bnRNYXBbaWRdIHx8IDA7XG4gICAgdmFyIGlkZW50aWZpZXIgPSBcIlwiLmNvbmNhdChpZCwgXCIgXCIpLmNvbmNhdChjb3VudCk7XG4gICAgaWRDb3VudE1hcFtpZF0gPSBjb3VudCArIDE7XG4gICAgdmFyIGluZGV4QnlJZGVudGlmaWVyID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgdmFyIG9iaiA9IHtcbiAgICAgIGNzczogaXRlbVsxXSxcbiAgICAgIG1lZGlhOiBpdGVtWzJdLFxuICAgICAgc291cmNlTWFwOiBpdGVtWzNdLFxuICAgICAgc3VwcG9ydHM6IGl0ZW1bNF0sXG4gICAgICBsYXllcjogaXRlbVs1XVxuICAgIH07XG5cbiAgICBpZiAoaW5kZXhCeUlkZW50aWZpZXIgIT09IC0xKSB7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0ucmVmZXJlbmNlcysrO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnVwZGF0ZXIob2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdmFyIHVwZGF0ZXIgPSBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKTtcbiAgICAgIG9wdGlvbnMuYnlJbmRleCA9IGk7XG4gICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoaSwgMCwge1xuICAgICAgICBpZGVudGlmaWVyOiBpZGVudGlmaWVyLFxuICAgICAgICB1cGRhdGVyOiB1cGRhdGVyLFxuICAgICAgICByZWZlcmVuY2VzOiAxXG4gICAgICB9KTtcbiAgICB9XG5cbiAgICBpZGVudGlmaWVycy5wdXNoKGlkZW50aWZpZXIpO1xuICB9XG5cbiAgcmV0dXJuIGlkZW50aWZpZXJzO1xufVxuXG5mdW5jdGlvbiBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKSB7XG4gIHZhciBhcGkgPSBvcHRpb25zLmRvbUFQSShvcHRpb25zKTtcbiAgYXBpLnVwZGF0ZShvYmopO1xuXG4gIHZhciB1cGRhdGVyID0gZnVuY3Rpb24gdXBkYXRlcihuZXdPYmopIHtcbiAgICBpZiAobmV3T2JqKSB7XG4gICAgICBpZiAobmV3T2JqLmNzcyA9PT0gb2JqLmNzcyAmJiBuZXdPYmoubWVkaWEgPT09IG9iai5tZWRpYSAmJiBuZXdPYmouc291cmNlTWFwID09PSBvYmouc291cmNlTWFwICYmIG5ld09iai5zdXBwb3J0cyA9PT0gb2JqLnN1cHBvcnRzICYmIG5ld09iai5sYXllciA9PT0gb2JqLmxheWVyKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cblxuICAgICAgYXBpLnVwZGF0ZShvYmogPSBuZXdPYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICBhcGkucmVtb3ZlKCk7XG4gICAgfVxuICB9O1xuXG4gIHJldHVybiB1cGRhdGVyO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChsaXN0LCBvcHRpb25zKSB7XG4gIG9wdGlvbnMgPSBvcHRpb25zIHx8IHt9O1xuICBsaXN0ID0gbGlzdCB8fCBbXTtcbiAgdmFyIGxhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKTtcbiAgcmV0dXJuIGZ1bmN0aW9uIHVwZGF0ZShuZXdMaXN0KSB7XG4gICAgbmV3TGlzdCA9IG5ld0xpc3QgfHwgW107XG5cbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IGkrKykge1xuICAgICAgdmFyIGlkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbaV07XG4gICAgICB2YXIgaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4XS5yZWZlcmVuY2VzLS07XG4gICAgfVxuXG4gICAgdmFyIG5ld0xhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShuZXdMaXN0LCBvcHRpb25zKTtcblxuICAgIGZvciAodmFyIF9pID0gMDsgX2kgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBfaSsrKSB7XG4gICAgICB2YXIgX2lkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbX2ldO1xuXG4gICAgICB2YXIgX2luZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoX2lkZW50aWZpZXIpO1xuXG4gICAgICBpZiAoc3R5bGVzSW5ET01bX2luZGV4XS5yZWZlcmVuY2VzID09PSAwKSB7XG4gICAgICAgIHN0eWxlc0luRE9NW19pbmRleF0udXBkYXRlcigpO1xuXG4gICAgICAgIHN0eWxlc0luRE9NLnNwbGljZShfaW5kZXgsIDEpO1xuICAgICAgfVxuICAgIH1cblxuICAgIGxhc3RJZGVudGlmaWVycyA9IG5ld0xhc3RJZGVudGlmaWVycztcbiAgfTtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBtZW1vID0ge307XG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cblxuZnVuY3Rpb24gZ2V0VGFyZ2V0KHRhcmdldCkge1xuICBpZiAodHlwZW9mIG1lbW9bdGFyZ2V0XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgIHZhciBzdHlsZVRhcmdldCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IodGFyZ2V0KTsgLy8gU3BlY2lhbCBjYXNlIHRvIHJldHVybiBoZWFkIG9mIGlmcmFtZSBpbnN0ZWFkIG9mIGlmcmFtZSBpdHNlbGZcblxuICAgIGlmICh3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQgJiYgc3R5bGVUYXJnZXQgaW5zdGFuY2VvZiB3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQpIHtcbiAgICAgIHRyeSB7XG4gICAgICAgIC8vIFRoaXMgd2lsbCB0aHJvdyBhbiBleGNlcHRpb24gaWYgYWNjZXNzIHRvIGlmcmFtZSBpcyBibG9ja2VkXG4gICAgICAgIC8vIGR1ZSB0byBjcm9zcy1vcmlnaW4gcmVzdHJpY3Rpb25zXG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gc3R5bGVUYXJnZXQuY29udGVudERvY3VtZW50LmhlYWQ7XG4gICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgIC8vIGlzdGFuYnVsIGlnbm9yZSBuZXh0XG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gbnVsbDtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBtZW1vW3RhcmdldF0gPSBzdHlsZVRhcmdldDtcbiAgfVxuXG4gIHJldHVybiBtZW1vW3RhcmdldF07XG59XG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cblxuXG5mdW5jdGlvbiBpbnNlcnRCeVNlbGVjdG9yKGluc2VydCwgc3R5bGUpIHtcbiAgdmFyIHRhcmdldCA9IGdldFRhcmdldChpbnNlcnQpO1xuXG4gIGlmICghdGFyZ2V0KSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKFwiQ291bGRuJ3QgZmluZCBhIHN0eWxlIHRhcmdldC4gVGhpcyBwcm9iYWJseSBtZWFucyB0aGF0IHRoZSB2YWx1ZSBmb3IgdGhlICdpbnNlcnQnIHBhcmFtZXRlciBpcyBpbnZhbGlkLlwiKTtcbiAgfVxuXG4gIHRhcmdldC5hcHBlbmRDaGlsZChzdHlsZSk7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0QnlTZWxlY3RvcjsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBpbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucykge1xuICB2YXIgZWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzdHlsZVwiKTtcbiAgb3B0aW9ucy5zZXRBdHRyaWJ1dGVzKGVsZW1lbnQsIG9wdGlvbnMuYXR0cmlidXRlcyk7XG4gIG9wdGlvbnMuaW5zZXJ0KGVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG4gIHJldHVybiBlbGVtZW50O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydFN0eWxlRWxlbWVudDsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMoc3R5bGVFbGVtZW50KSB7XG4gIHZhciBub25jZSA9IHR5cGVvZiBfX3dlYnBhY2tfbm9uY2VfXyAhPT0gXCJ1bmRlZmluZWRcIiA/IF9fd2VicGFja19ub25jZV9fIDogbnVsbDtcblxuICBpZiAobm9uY2UpIHtcbiAgICBzdHlsZUVsZW1lbnQuc2V0QXR0cmlidXRlKFwibm9uY2VcIiwgbm9uY2UpO1xuICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKSB7XG4gIHZhciBjc3MgPSBcIlwiO1xuXG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChvYmouc3VwcG9ydHMsIFwiKSB7XCIpO1xuICB9XG5cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIkBtZWRpYSBcIi5jb25jYXQob2JqLm1lZGlhLCBcIiB7XCIpO1xuICB9XG5cbiAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBvYmoubGF5ZXIgIT09IFwidW5kZWZpbmVkXCI7XG5cbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIkBsYXllclwiLmNvbmNhdChvYmoubGF5ZXIubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChvYmoubGF5ZXIpIDogXCJcIiwgXCIge1wiKTtcbiAgfVxuXG4gIGNzcyArPSBvYmouY3NzO1xuXG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cblxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG5cbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuXG4gIHZhciBzb3VyY2VNYXAgPSBvYmouc291cmNlTWFwO1xuXG4gIGlmIChzb3VyY2VNYXAgJiYgdHlwZW9mIGJ0b2EgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICBjc3MgKz0gXCJcXG4vKiMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LFwiLmNvbmNhdChidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShzb3VyY2VNYXApKSkpLCBcIiAqL1wiKTtcbiAgfSAvLyBGb3Igb2xkIElFXG5cbiAgLyogaXN0YW5idWwgaWdub3JlIGlmICAqL1xuXG5cbiAgb3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbn1cblxuZnVuY3Rpb24gcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCkge1xuICAvLyBpc3RhbmJ1bCBpZ25vcmUgaWZcbiAgaWYgKHN0eWxlRWxlbWVudC5wYXJlbnROb2RlID09PSBudWxsKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG5cbiAgc3R5bGVFbGVtZW50LnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50KTtcbn1cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuXG5cbmZ1bmN0aW9uIGRvbUFQSShvcHRpb25zKSB7XG4gIHZhciBzdHlsZUVsZW1lbnQgPSBvcHRpb25zLmluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKTtcbiAgcmV0dXJuIHtcbiAgICB1cGRhdGU6IGZ1bmN0aW9uIHVwZGF0ZShvYmopIHtcbiAgICAgIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKTtcbiAgICB9LFxuICAgIHJlbW92ZTogZnVuY3Rpb24gcmVtb3ZlKCkge1xuICAgICAgcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCk7XG4gICAgfVxuICB9O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGRvbUFQSTsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCkge1xuICBpZiAoc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQpIHtcbiAgICBzdHlsZUVsZW1lbnQuc3R5bGVTaGVldC5jc3NUZXh0ID0gY3NzO1xuICB9IGVsc2Uge1xuICAgIHdoaWxlIChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCkge1xuICAgICAgc3R5bGVFbGVtZW50LnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKTtcbiAgICB9XG5cbiAgICBzdHlsZUVsZW1lbnQuYXBwZW5kQ2hpbGQoZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoY3NzKSk7XG4gIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBzdHlsZVRhZ1RyYW5zZm9ybTsiLCJjb25zdCBjcmVhdGVFbGVtZW50ID0ge1xuICAgIGNyZWF0ZVNlY3Rpb246IGZ1bmN0aW9uKGlkTmFtZSkge1xuICAgICAgICBsZXQgc2VjdGlvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzZWN0aW9uXCIpO1xuICAgICAgICBzZWN0aW9uLnNldEF0dHJpYnV0ZSgnaWQnLGlkTmFtZSk7XG4gICAgICAgIHJldHVybiBzZWN0aW9uO1xuICAgIH0sXG4gICAgY3JlYXRlRGl2OiBmdW5jdGlvbihpZE5hbWUpe1xuICAgICAgICBsZXQgZGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICAgICAgZGl2LnNldEF0dHJpYnV0ZSgnaWQnLGlkTmFtZSk7XG4gICAgICAgIHJldHVybiBkaXY7XG4gICAgfSxcbiAgICBjcmVhdGVQYXJhOiBmdW5jdGlvbih0ZXh0KXtcbiAgICAgICAgbGV0IHBhcmEgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwicFwiKTtcbiAgICAgICAgcGFyYS50ZXh0Q29udGVudCA9IHRleHQ7XG4gICAgICAgIHJldHVybiBwYXJhO1xuICAgIH0sXG4gICAgY3JlYXRlTGk6IGZ1bmN0aW9uKHVsLGFycil7XG4gICAgICAgIGZvcihsZXQgaT0wO2k8IGFyci5sZW5ndGg7aSsrKXtcbiAgICAgICAgICAgIGxldCBsaSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJsaVwiKTtcbiAgICAgICAgICAgIGxpLmlubmVySFRNTCA9IGFycltpXTtcbiAgICAgICAgICAgIHVsLmFwcGVuZENoaWxkKGxpKVxuICAgICAgICB9XG4gICAgICAgIHJldHVybiB1bDtcbiAgICB9LFxuICAgIGNyZWF0ZUg6IGZ1bmN0aW9uKG51bSx0ZXh0KXtcbiAgICAgICAgY29uc3QgaGVhZGluZyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoYGgke251bX1gKTtcbiAgICAgICAgaGVhZGluZy5pbm5lclRleHQgPSB0ZXh0O1xuICAgICAgICByZXR1cm4gaGVhZGluZ1xuICAgIH1cbn1cbmNvbnN0IGNyZWF0ZUNvbnRhaW5lciA9ICgpID0+e1xuICAgIGNvbnN0IG1haW4gPSBjcmVhdGVFbGVtZW50LmNyZWF0ZURpdignbWFpbkNvbnRhaW5lcicpO1xuICAgIGRvY3VtZW50LmJvZHkuYXBwZW5kQ2hpbGQobWFpbik7XG5cbn1cblxuY29uc3QgY3JlYXRlR2FtZUJvYXJkVUkgPSAocGxheWVyMSxjb21wdXRlcjEpID0+IHtcbiAgICBjb25zdCBtYWluID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ21haW5Db250YWluZXInKTtcbiAgICBjb25zdCB0aXRsZSA9IGNyZWF0ZUVsZW1lbnQuY3JlYXRlSCgxLFwiQmF0dGxlc2hpcFwiKTtcbiAgICBtYWluLmFwcGVuZENoaWxkKHRpdGxlKTtcbiAgICBjb25zdCBoZWFkZXIgPSBjcmVhdGVFbGVtZW50LmNyZWF0ZUgoMSxcIlBsYWNlIHlvdXIgc3VibWFyaW5lIGFueXdoZXJlIG9uIHRoZSBwbGF5ZXIgYm9hcmRcIik7XG4gICAgaGVhZGVyLnNldEF0dHJpYnV0ZSgnaWQnLCdoZWFkZXInKTtcbiAgICBjb25zdCBnYW1lYm9hcmRzID0gY3JlYXRlRWxlbWVudC5jcmVhdGVEaXYoJ2dhbWVib2FyZHMnKTtcbiAgICBjb25zdCBwbGF5ZXJHYW1lYm9hcmQgPSBjcmVhdGVFbGVtZW50LmNyZWF0ZURpdigncGxheWVyR2FtZWJvYXJkJyk7XG4gICAgY29uc3QgY29tcHV0ZXJHYW1lYm9hcmQgPSBjcmVhdGVFbGVtZW50LmNyZWF0ZURpdignY29tcHV0ZXJHYW1lYm9hcmQnKTtcbiAgICBjb25zdCBwbGF5ZXJIZWFkZXIgPSBjcmVhdGVFbGVtZW50LmNyZWF0ZUgoMiwnUGxheWVyXFwncyBCb2FyZCcpO1xuICAgIGNvbnN0IGNvbXB1dGVySGVhZGVyID0gY3JlYXRlRWxlbWVudC5jcmVhdGVIKDIsJ0NvbXB1dGVyXFwncyBCb2FyZCcpO1xuICAgIGNvbnN0IG9yaWVudGF0aW9uQnRuID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJyk7XG4gICAgb3JpZW50YXRpb25CdG4uaW5uZXJUZXh0ID0gJ0hvcml6b250YWwnXG4gICAgb3JpZW50YXRpb25CdG4uc2V0QXR0cmlidXRlKCdpZCcsJ29yaWVudEJ0bicpXG4gICAgY29uc3QgcmVzdGFydEJ0biA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpO1xuICAgIHJlc3RhcnRCdG4uc2V0QXR0cmlidXRlKCdpZCcsJ3Jlc3RhcnRCdG4nKTtcbiAgICByZXN0YXJ0QnRuLnRleHRDb250ZW50ID0gJ1Jlc3RhcnQnXG4gICAgcGxheWVySGVhZGVyLnNldEF0dHJpYnV0ZSgnaWQnLCdwbGF5ZXJIZWFkZXInKTtcbiAgICBjb21wdXRlckhlYWRlci5zZXRBdHRyaWJ1dGUoJ2lkJywnY29tcHV0ZXJIZWFkZXInKTtcbiAgICBjb25zdCBidG5Db250YWluZXIgPSBjcmVhdGVFbGVtZW50LmNyZWF0ZURpdignYnRuQ29udGFpbmVyJyk7XG4gICAgZm9yKGxldCBpPTA7IGk8KHBsYXllcjEubGVuZ3RoKTtpKyspe1xuICAgICAgICBmb3IobGV0IGo9MDsgajwocGxheWVyMVtpXS5sZW5ndGgpO2orKyl7XG4gICAgICAgICAgICBsZXQgZ2FtZUNlbGwgPSBjcmVhdGVFbGVtZW50LmNyZWF0ZURpdihgJHtpfSR7an1gKVxuICAgICAgICAgICAgZ2FtZUNlbGwuY2xhc3NMaXN0LmFkZChcImNlbGxcIik7XG4gICAgICAgICAgICBwbGF5ZXJHYW1lYm9hcmQuYXBwZW5kQ2hpbGQoZ2FtZUNlbGwpO1xuICAgICAgICB9XG4gICAgfVxuICAgIGZvcihsZXQgaT0wOyBpPChjb21wdXRlcjEubGVuZ3RoKTtpKyspe1xuICAgICAgICBmb3IobGV0IGo9MDsgajwoY29tcHV0ZXIxW2ldLmxlbmd0aCk7aisrKXtcbiAgICAgICAgICAgIGxldCBnYW1lQ2VsbCA9IGNyZWF0ZUVsZW1lbnQuY3JlYXRlRGl2KGAke2l9JHtqfWNvbXB1dGVyYClcbiAgICAgICAgICAgIGdhbWVDZWxsLmNsYXNzTGlzdC5hZGQoXCJjZWxsXCIpO1xuICAgICAgICAgICAgY29tcHV0ZXJHYW1lYm9hcmQuYXBwZW5kQ2hpbGQoZ2FtZUNlbGwpO1xuICAgICAgICB9XG4gICAgfVxuICAgIG1haW4uYXBwZW5kQ2hpbGQoaGVhZGVyKVxuICAgIGJ0bkNvbnRhaW5lci5hcHBlbmQob3JpZW50YXRpb25CdG4scmVzdGFydEJ0bilcbiAgICBtYWluLmFwcGVuZENoaWxkKGJ0bkNvbnRhaW5lcilcbiAgICBtYWluLmFwcGVuZENoaWxkKGdhbWVib2FyZHMpXG4gICAgZ2FtZWJvYXJkcy5hcHBlbmQocGxheWVySGVhZGVyLHBsYXllckdhbWVib2FyZCxjb21wdXRlckhlYWRlcixjb21wdXRlckdhbWVib2FyZClcbn1cblxuY29uc3QgdXBkYXRlSGVhZGVyID0gKHRleHQpID0+IHtcbiAgICBjb25zdCBoZWFkZXIgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnaGVhZGVyJyk7XG4gICAgaGVhZGVyLnRleHRDb250ZW50ID0gdGV4dDtcbn1cblxuY29uc3QgcmVzdGFydFVJID0gKCkgPT4ge1xuICAgIGNvbnN0IG1haW4gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnbWFpbkNvbnRhaW5lcicpO1xuICAgIG1haW4uaW5uZXJIVE1MID0nJ1xufVxuZXhwb3J0IHtjcmVhdGVFbGVtZW50LGNyZWF0ZUNvbnRhaW5lcixjcmVhdGVHYW1lQm9hcmRVSSx1cGRhdGVIZWFkZXIsIHJlc3RhcnRVSX07IiwiXG5cbi8vRmFjdG9yeSBmdW5jdGlvbiB0byBjcmVhdGUgdGhlIHNoaXBzXG5jb25zdCBzaGlwRmFjdG9yeSA9IChuYW1lLGxlbmd0aCkgPT4ge1xuICAgIC8vY3JlYXRlcyBhbiBhcnJheSB0aGUgc2l6ZSBvZiB0aGUgc2hpcHMgbGVuZ3RoIHRvIGtlZXAgdHJhY2sgb2YgaGl0cy5cbiAgICBjb25zdCBzaGlwSGVhbHRoID0gW107XG4gICAgbGV0IGlzUGxhY2VkID0gZmFsc2U7XG4gICAgY29uc3QgaXNQbGFjZWRTZXR0ZXIgPSAoYXJnKSA9PiBpc1BsYWNlZCA9IGFyZztcbiAgICBjb25zdCBpc1BsYWNlZEdldHRlciA9ICgpID0+IGlzUGxhY2VkO1xuICAgIC8vdXBkYXRlcyB0aGUgc2hpcEhlYWx0aCBhcnJheSB3aXRoIHRoZSBwb3NpdGlvbiB0aGUgc2hpcCBnb3QgaGl0IGluXG4gICAgY29uc3QgaGl0ID0gKCkgPT4ge1xuICAgICAgICBzaGlwSGVhbHRoLnB1c2goJ3gnKVxuICAgICAgICAgICAgcmV0dXJuIHNoaXBIZWFsdGg7XG4gICAgfVxuICAgIC8vaWYgZXZlcnkgdmFsdWUgaW4gdGhlIHNoaXBIZWFsdGggYXJyYXkgaXMgaGl0IHRoaXMgZnVuY3Rpb24gcmV0dXJucyB0aGF0IHRoZSBzaGlwIGlzIHN1bmtcbiAgICBjb25zdCBpc1N1bmsgPSAoKSA9PiB7XG4gICAgICAgIGlmKHNoaXBIZWFsdGgubGVuZ3RoID09PSBsZW5ndGgpe1xuICAgICAgICAgICAgcmV0dXJuIHRydWVcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gZmFsc2VcbiAgICB9XG4gICAgcmV0dXJuIHtuYW1lLGxlbmd0aCxoaXQsIGlzU3Vuayxpc1BsYWNlZEdldHRlcixpc1BsYWNlZFNldHRlcn1cbn1cblxuLy9GYWN0b3J5IGZ1bmN0aW9uIHRvIGNyZWF0ZSBnYW1lIGJvYXJkXG5jb25zdCBnYW1lQm9hcmRGYWN0b3J5ID0gKCkgPT57XG4gICAgbGV0IGdhbWVBcnJheSA9IFtdO1xuICAgIC8vY3JlYXRlIGVtcHR5IGFycmF5IHRvIGluaXRpYWxpemUgdGhlIGdhbWVcbiAgICBjb25zdCBzdGFydEdhbWUgPSAoKSA9PntcbiAgICAgICAgICAgIGdhbWVBcnJheSA9IFtcbiAgICAgICAgICAgIFsnJywnJywnJywnJywnJywnJywnJywnJywnJywnJ10sXG4gICAgICAgICAgICBbJycsJycsJycsJycsJycsJycsJycsJycsJycsJyddLFxuICAgICAgICAgICAgWycnLCcnLCcnLCcnLCcnLCcnLCcnLCcnLCcnLCcnXSxcbiAgICAgICAgICAgIFsnJywnJywnJywnJywnJywnJywnJywnJywnJywnJ10sXG4gICAgICAgICAgICBbJycsJycsJycsJycsJycsJycsJycsJycsJycsJyddLFxuICAgICAgICAgICAgWycnLCcnLCcnLCcnLCcnLCcnLCcnLCcnLCcnLCcnXSxcbiAgICAgICAgICAgIFsnJywnJywnJywnJywnJywnJywnJywnJywnJywnJ10sXG4gICAgICAgICAgICBbJycsJycsJycsJycsJycsJycsJycsJycsJycsJyddLFxuICAgICAgICAgICAgWycnLCcnLCcnLCcnLCcnLCcnLCcnLCcnLCcnLCcnXSxcbiAgICAgICAgICAgIFsnJywnJywnJywnJywnJywnJywnJywnJywnJywnJ11cbiAgICAgICAgXVxuXG4gICAgfVxuICAgIC8vbGlzdCBvZiBzaGlwcyB0aGF0IGFyZSBzdGlsbCBhbGl2ZVxuICAgIGxldCBzaGlwc0FsaXZlID0gW107XG4gICAgY29uc3Qgc2hpcHNBbGl2ZUdldHRlciA9ICgpID0+IHNoaXBzQWxpdmU7XG4gICAgLy9wbGFjZXMgc2hpcCBpbiByb3cgYW5kIGNvbHVtbiBhbmQgb3JpZW50cyBob3cgdGhlIHBsYXllciB3YW50cyBcbiAgICBjb25zdCBwbGFjZSA9IChzaGlwLHJvdywgY29sdW1uLCBvcmllbnQpID0+IHtcbiAgICAgICAgLy9jaGVja3MgaWYgd2hlcmUgdGhlIHNoaXAgaXMgdG8gYmUgcGxhY2VkIGlzIGVtcHR5XG4gICAgICAgIGNvbnN0IGNhblBsYWNlID0gKCkgPT4ge1xuICAgICAgICAgICAgbGV0IGVtcHR5ID0gdHJ1ZVxuICAgICAgICAgICAgLy9jaGVja2luZyBpZiBzaGlwIGlzIGFscmVhZHkgaW4gdGhlIHNwb3QgbmV3IHNoaXAgaXMgdG8gYmUgcGxhY2VkXG4gICAgICAgICAgICBpZihvcmllbnQgPT09ICdob3Jpem9udGFsJyl7XG4gICAgICAgICAgICAgICAgZm9yKGxldCBpID0gY29sdW1uOyBpPCAoY29sdW1uK3NoaXAubGVuZ3RoKTsgaSsrKXtcbiAgICAgICAgICAgICAgICAgICAgaWYoZ2FtZUFycmF5W3Jvd11baV0gIT09ICcnKXtcbiAgICAgICAgICAgICAgICAgICAgICAgIGVtcHR5ID0gZmFsc2VcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0gIFxuICAgICAgICAgICAgZWxzZSBpZihvcmllbnQgPT09ICd2ZXJ0aWNhbCcpe1xuICAgICAgICAgICAgICAgIGZvcihsZXQgaSA9IHJvdzsgaTwgKHJvdytzaGlwLmxlbmd0aCk7IGkrKyl7XG4gICAgICAgICAgICAgICAgICAgIGlmKGdhbWVBcnJheVtpXVtjb2x1bW5dICE9PSAnJyl7XG4gICAgICAgICAgICAgICAgICAgICAgICBlbXB0eSA9IGZhbHNlXG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9ICBcbiAgICAgICAgICAgIHJldHVybiBlbXB0eVxuICAgICAgICB9O1xuICAgICAgICAvL2hvcml6b250YWwgb3JyaWVudGF0aW9uIHBsYWNlbWVudFxuICAgICAgICBpZihvcmllbnQgPT09ICdob3Jpem9udGFsJyAgJiYgY2FuUGxhY2UoKSkge1xuICAgICAgICAgICAgZm9yKGxldCBpID0gY29sdW1uOyBpPCAoY29sdW1uK3NoaXAubGVuZ3RoKTsgaSsrKXtcbiAgICAgICAgICAgICAgICBnYW1lQXJyYXlbcm93XVtpXSA9IHNoaXA7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBzaGlwc0FsaXZlLnB1c2goc2hpcC5uYW1lKVxuICAgICAgICB9XG5cbiAgICAgICAgLy92ZXJ0aWNhbCBvcnJpZW50YXRpb25zIHBsYWNlbWVudFxuICAgICAgICBlbHNlIGlmKG9yaWVudCA9PT0gJ3ZlcnRpY2FsJyAmJiBjYW5QbGFjZSgpKSB7XG4gICAgICAgICAgICBmb3IobGV0IGkgPSByb3c7IGk8KChzaGlwLmxlbmd0aCArIHJvdykpO2krKyl7XG4gICAgICAgICAgICAgICAgZ2FtZUFycmF5W2ldW2NvbHVtbl0gPSBzaGlwO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgc2hpcHNBbGl2ZS5wdXNoKHNoaXAubmFtZSlcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gZ2FtZUFycmF5O1xuICAgIH1cblxuICAgIC8vUmVjaWV2ZXMgY29vcmRpbmF0ZXMgZnJvbSB0aGUgYm9hcmQgdG8gcmVjaWV2ZSBhbiBhdHRhY2tcbiAgICBjb25zdCByZWNpZXZlQXR0YWNrID0gKHJvdyxjb2x1bW4pID0+e1xuICAgICAgICAvL0lmIHRoZSBnYW1lQXJyYXkgaXMgZW1wdHkgcGxhY2UgYSBzbWFsbCB4IGZvciBhIG1pc3NcbiAgICAgICAgaWYoZ2FtZUFycmF5W3Jvd11bY29sdW1uXSA9PT0gJycpe1xuICAgICAgICAgICAgZ2FtZUFycmF5W3Jvd11bY29sdW1uXSA9ICd4J1xuICAgICAgICB9XG4gICAgICAgIGVsc2V7XG4gICAgICAgICAgICAvL2lmIHRoZXJlIGlzIGEgc2hpcCBhdCB0aGUgY29vcmRpbmF0ZXMgaGl0IHRoZSBib2FyZCBhbmQgcGxhY2UgYSBsYXJnZSBYIHRvIHNob3cgdGhlcmUgaXMgYSBoaXRcbiAgICAgICAgICAgIGdhbWVBcnJheVtyb3ddW2NvbHVtbl0uaGl0KCk7XG4gICAgICAgICAgICAvL2lmIGlzU3VuayByZXR1cm5zIHRydWUgdGhhdCBzaGlwIGdldHMgcG9wcGVkIGZyb20gdGhlIHNoaXBzQWxpdmUgYXJyYXkuXG4gICAgICAgICAgICBpZihnYW1lQXJyYXlbcm93XVtjb2x1bW5dLmlzU3VuaygpKXtcbiAgICAgICAgICAgICAgICBzaGlwc0FsaXZlLnBvcChnYW1lQXJyYXlbcm93XVtjb2x1bW5dLm5hbWUpXG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBnYW1lQXJyYXlbcm93XVtjb2x1bW5dID0gJ1gnO1xuICAgICAgICAgICAgXG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIGdhbWVBcnJheVxuICAgIH1cbiAgICBcbiAgICBjb25zdCBhcnJheUdldHRlciA9ICgpID0+IGdhbWVBcnJheTtcbiAgICByZXR1cm57c3RhcnRHYW1lLCBwbGFjZSwgcmVjaWV2ZUF0dGFjayxhcnJheUdldHRlciwgc2hpcHNBbGl2ZUdldHRlcn1cbn1cblxuLy9QbGF5ZXIgZmFjdG9yIEZ1bmN0aW9uXG5jb25zdCBwbGF5ZXIgPSAoKSA9PntcbiAgICAvL2NyZWF0ZXMgYSBib2FyZCBmb3IgdGhlIHBsYXllclxuICAgIGxldCBwbGF5ZXJCb2FyZCA9IGdhbWVCb2FyZEZhY3RvcnkoKTtcbiAgICAvL0luaXRpYWxpemVzIHRoZSBib2FyZCBmb3IgdGhlIHBsYXllclxuICAgIHBsYXllckJvYXJkLnN0YXJ0R2FtZSgpO1xuICAgIC8vSGVscGVyIGZ1bmN0aW9uIGZvciB0aGUgcGxhY2UgbWV0aG9kXG4gICAgY29uc3QgcGxheWVyUGxhY2UgPSAoc2hpcCxyb3csY29sdW1uLG9yaWVudCkgPT57XG4gICAgICAgIHJldHVybiBwbGF5ZXJCb2FyZC5wbGFjZShzaGlwLHJvdyxjb2x1bW4sb3JpZW50KTtcbiAgICB9XG5cbiAgICAvL3JlY2lldmVzIGFuIGF0dGFjayBhbmQgdGhlbiBzZW5kcyB0aGF0IGF0dGFjayB0byB0aGUgY29tcHV0ZXJCb2FyZFxuICAgIGNvbnN0IHBsYXllckF0dGFjayA9IChjb21wdXRlckJvYXJkLGUpID0+IHtcbiAgICAgICAgY29uc3Qgcm93ID0gcGFyc2VJbnQoZS50YXJnZXQuaWRbMF0pXG4gICAgICAgIGNvbnN0IGNvbCA9IHBhcnNlSW50KGUudGFyZ2V0LmlkWzFdKVxuICAgICAgICBjb21wdXRlckJvYXJkLnJlY2lldmVBdHRhY2socm93LGNvbCk7XG4gICAgICAgIHJldHVybiB0cnVlXG4gICAgfSAgIFxuICAgIHJldHVybiB7cGxheWVyQm9hcmQscGxheWVyUGxhY2UscGxheWVyQXR0YWNrfVxufVxuXG4vL2NvbXB1dGVyIGZhY3RvcnkgZnVuY3Rpb25cbmNvbnN0IGNvbXB1dGVyID0gKCkgPT4ge1xuICAgIC8vY3JlYXRlcyBhIGJvYXJkIGZvciB0aGUgY29tcHV0ZXJcbiAgICBsZXQgY29tcHV0ZXJCb2FyZCA9IGdhbWVCb2FyZEZhY3RvcnkoKTtcbiAgICAvL0luaXRpYWxpemVzIHRoZSBib2FyZCBmb3IgdGhlIGNvbXB1dGVyXG4gICAgY29tcHV0ZXJCb2FyZC5zdGFydEdhbWUoKTtcbiAgICAvL1NlbGVjdHMgYSByYW5kb20gY29vcmRpbmF0ZS5cbiAgICBjb25zdCBjb21wdXRlclJhbmRvbUF0dGFjayA9IChwbGF5ZXJCb2FyZCkgPT57XG4gICAgICAgIGxldCByYW5kb21DaG9pY2UgPSAoKSA9PiB7XG4gICAgICAgICAgICBsZXQgcmFuZG9tUm93ID0gTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICoxMClcbiAgICAgICAgICAgIGxldCByYW5kb21Db2x1bW4gPSBNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiAxMClcbiAgICAgICAgICAgIHJldHVybiBbcmFuZG9tUm93LCByYW5kb21Db2x1bW5dXG4gICAgICAgIH1cbiAgICAgICAgbGV0IHJhbmRvbT0gcmFuZG9tQ2hvaWNlKCk7XG4gICAgICAgIGxldCByb3cgPSByYW5kb21bMF07XG4gICAgICAgIGxldCBjb2x1bW4gPSByYW5kb21bMV07XG4gICAgICAgIGlmKChwbGF5ZXJCb2FyZC5hcnJheUdldHRlcigpW3Jvd11bY29sdW1uXSA9PT0gJ3gnKSB8fCAocGxheWVyQm9hcmQuYXJyYXlHZXR0ZXIoKVtyb3ddW2NvbHVtbl0gPT09ICdYJykpe1xuICAgICAgICAgICAgY29tcHV0ZXJSYW5kb21BdHRhY2socGxheWVyQm9hcmQpXG4gICAgICAgIH1cbiAgICAgICAgZWxzZXtcblxuICAgICAgICAgICAgcGxheWVyQm9hcmQucmVjaWV2ZUF0dGFjayhyb3csY29sdW1uKTtcbiAgICAgICAgICAgIHJldHVybiBwbGF5ZXJCb2FyZC5hcnJheUdldHRlcigpO1xuICAgICAgICB9XG5cbiAgICB9XG4gICAgcmV0dXJuIHtjb21wdXRlckJvYXJkLGNvbXB1dGVyUmFuZG9tQXR0YWNrfVxufVxuXG5cbmV4cG9ydCB7c2hpcEZhY3RvcnksZ2FtZUJvYXJkRmFjdG9yeSwgcGxheWVyLGNvbXB1dGVyfSIsImltcG9ydCAnLi9zdHlsZS5jc3MnO1xuaW1wb3J0IHtjcmVhdGVDb250YWluZXIsY3JlYXRlR2FtZUJvYXJkVUksdXBkYXRlSGVhZGVyLHJlc3RhcnRVSX0gZnJvbSAnLi9kb21NYW5pcC5qcyc7XG5pbXBvcnQge3NoaXBGYWN0b3J5LCBwbGF5ZXIsIGNvbXB1dGVyLCBnYW1lQm9hcmRGYWN0b3J5fSBmcm9tICcuL2ZhY3Rvcmllcyc7XG5pbXBvcnQge3VzZXJQbGFjZSx9IGZyb20gJy4vcGxheWVyUGxhY2UnO1xuLy9pbml0aWxpemVzIHRoZSBnYW1lXG5jb25zdCBpbml0R2FtZSA9ICgpID0+e1xuICAgIC8vY3JlYXRlcyBhIHBsYXllciBhbmQgYSBjb21wdXRlclxuICAgIGNvbnN0IHBsYXllcjEgPSBwbGF5ZXIoKTtcbiAgICBjb25zdCBjb21wdXRlcjEgPSBjb21wdXRlcigpO1xuXG4gICAgLy9jcmVhdGVzIGFsbCBzaGlwcyBmb3IgcGxheWVyIGFuZCBjb21wdXRlclxuICAgIGNvbnN0IHBsYXllclN1YiA9IHNoaXBGYWN0b3J5KFwic3VibWFyaW5lXCIsMyk7XG4gICAgY29uc3QgcGxheWVyQ2FycmllciA9IHNoaXBGYWN0b3J5KFwiY2FycmllclwiLDUpO1xuICAgIGNvbnN0IHBsYXllckJhdHRsZXNoaXAgPSBzaGlwRmFjdG9yeSgnYmF0dGxlc2hpcCcsNCk7XG4gICAgY29uc3QgcGxheWVyQ3J1aXNlciA9IHNoaXBGYWN0b3J5KCdjcnVpc2VyJywzKTtcbiAgICBjb25zdCBwbGF5ZXJEZXN0cm95ZXIgPSBzaGlwRmFjdG9yeSgnZGVzdHJveWVyJywgMik7XG4gICAgY29uc3QgY29tcHV0ZXJTdWIgPSBzaGlwRmFjdG9yeShcInN1Ym1hcmluZVwiLDMpO1xuICAgIGNvbnN0IGNvbXB1dGVyQ2FycmllciA9IHNoaXBGYWN0b3J5KFwiY2FycmllclwiLDUpO1xuICAgIGNvbnN0IGNvbXB1dGVyQmF0dGxlc2hpcCA9IHNoaXBGYWN0b3J5KCdiYXR0bGVzaGlwJyw0KTtcbiAgICBjb25zdCBjb21wdXRlckNydWlzZXIgPSBzaGlwRmFjdG9yeSgnY3J1aXNlcicsMyk7XG4gICAgY29uc3QgY29tcHV0ZXJEZXN0cm95ZXIgPSBzaGlwRmFjdG9yeSgnZGVzdHJveWVyJywgMik7XG5cbiAgICBsZXQgcGxheWVyU2hpcHMgPSBbcGxheWVyU3ViLHBsYXllckNhcnJpZXIscGxheWVyQmF0dGxlc2hpcCxwbGF5ZXJDcnVpc2VyLHBsYXllckRlc3Ryb3llcl1cbiAgICAvL2NyZWF0ZXMgdGhlIFVJXG4gICAgY3JlYXRlQ29udGFpbmVyKCk7XG4gICAgY3JlYXRlR2FtZUJvYXJkVUkocGxheWVyMS5wbGF5ZXJCb2FyZC5hcnJheUdldHRlcigpLGNvbXB1dGVyMS5jb21wdXRlckJvYXJkLmFycmF5R2V0dGVyKCkpO1xuICAgIGNvbnN0IHJlc3RhcnRCdG4gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgncmVzdGFydEJ0bicpO1xuICAgIHJlc3RhcnRCdG4uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLHJlc3RhcnRHYW1lKVxuICAgIHVzZXJQbGFjZShwbGF5ZXJTaGlwcyxwbGF5ZXIxLGNvbXB1dGVyMSxwbGF5ZXJTdWIpXG5cblxuICAgIGNvbXB1dGVyUmFuZG9tUGxhY2UoY29tcHV0ZXIxLGNvbXB1dGVyU3ViKTtcbiAgICBjb21wdXRlclJhbmRvbVBsYWNlKGNvbXB1dGVyMSxjb21wdXRlckNhcnJpZXIpO1xuICAgIGNvbXB1dGVyUmFuZG9tUGxhY2UoY29tcHV0ZXIxLGNvbXB1dGVyQmF0dGxlc2hpcCk7XG4gICAgY29tcHV0ZXJSYW5kb21QbGFjZShjb21wdXRlcjEsY29tcHV0ZXJDcnVpc2VyKTtcbiAgICBjb21wdXRlclJhbmRvbVBsYWNlKGNvbXB1dGVyMSxjb21wdXRlckRlc3Ryb3llcik7XG4gICAgY29uc29sZS5sb2coY29tcHV0ZXIxLmNvbXB1dGVyQm9hcmQuYXJyYXlHZXR0ZXIoKSk7XG5cblxuICAgIHVwZGF0ZUdhbWVib2FyZChwbGF5ZXIxLGNvbXB1dGVyMSk7XG4gICAgY29uc3QgY29tcHV0ZXJHYW1lYm9hcmREaXYgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnY29tcHV0ZXJHYW1lYm9hcmQnKTtcbiAgICBjb21wdXRlckdhbWVib2FyZERpdi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsZSA9PiB7XG4gICAgICAgIHBsYXlHYW1lKHBsYXllcjEsY29tcHV0ZXIxLGUpXG4gICAgfSlcbn1cblxuXG4vL1JhbmRvbWx5IHBsYWNlcyBjb21wdXRlciBzaGlwc1xuY29uc3QgY29tcHV0ZXJSYW5kb21QbGFjZSA9IChjb21wdXRlciwgc2hpcCkgPT4ge1xuICAgIC8vUmFuZG9tbHkgc2VsZWN0cyAwIG9yIDEuIDAgaXMgaG9yaXpvbnRhbCBhbmQgMSBpcyB2ZXJ0aWNhbFxuICAgIGxldCByYW5kb21PcmllbnRhdGlvbiA9IE1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIDIpO1xuICAgIC8vY2hlY2tzIHRvIHNoZWUgaWYgc2hpcCB3b3VsZCBpbnRlcnNlY3QgYW5vdGhlciBzaGlwIHRoYXQgaXMgYWxyZWFkeSBvbiB0aGUgYm9hcmRcbiAgICBjb25zdCBpbnRlcnNlY3RDaGVjayA9IChjb21wdXRlcixzaGlwLHJvdyxjb2wsb3JpZW50KT0+e1xuICAgICAgICBpZihvcmllbnQgPT09ICd2ZXJ0aWNhbCcpe1xuICAgICAgICAgICAgZm9yKGxldCBpID0gMDtpPHNoaXAubGVuZ3RoO2krKyl7XG4gICAgICAgICAgICAgICAgLy9pdGVyYXRlcyB0aHJvdWdoIHRoZSBzaGlwcyBsZW5ndGggYW5kIGFkZGluZyB0aGUgaW5kZXggdG8gdGhlIHJvdyBiZWNhdXNlIGl0IGlzIHBsYWNlZCB2ZXJ0aWNhbGx5LiBcbiAgICAgICAgICAgICAgICAvL0lmIHRoZSBlbGVtZW50IGlzIG5vdCBlbXB0eSBpdCByZXR1cm5zIGZhbHNlXG4gICAgICAgICAgICAgICAgaWYoY29tcHV0ZXIuY29tcHV0ZXJCb2FyZC5hcnJheUdldHRlcigpW3JvdytpXVtjb2xdICE9PSAnJyl7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBmYWxzZVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHJldHVybiB0cnVlXG4gICAgICAgIH1cbiAgICAgICAgZWxzZXtcbiAgICAgICAgICAgICAgICAvL2l0ZXJhdGVzIHRocm91Z2ggdGhlIHNoaXBzIGxlbmd0aCBhbmQgYWRkaW5nIHRoZSBpbmRleCB0byB0aGUgY29sdW1uIGJlY2F1c2UgaXQgaXMgcGxhY2VkIGhvcml6b250YWxseS4gXG4gICAgICAgICAgICAgICAgLy9JZiB0aGUgZWxlbWVudCBpcyBub3QgZW1wdHkgaXQgcmV0dXJucyBmYWxzZVxuICAgICAgICAgICAgZm9yKGxldCBpID0gMDtpPHNoaXAubGVuZ3RoO2krKyl7XG4gICAgICAgICAgICAgICAgaWYoY29tcHV0ZXIuY29tcHV0ZXJCb2FyZC5hcnJheUdldHRlcigpW3Jvd11bY29sK2ldICE9PSAnJyl7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBmYWxzZVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHJldHVybiB0cnVlXG4gICAgICAgIH1cbiAgICB9XG4gICAgICAgIC8vcGxhY2VzIHRoZSBzaGlwIHJhbmRvbWx5IGluIHZlcnRpY2FsIG9yaWVudGF0aW9uXG4gICAgaWYocmFuZG9tT3JpZW50YXRpb24gPT09IDEpe1xuICAgICAgICBcbiAgICAgICAgbGV0IHJvdyA9IE1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqICgxMC1zaGlwLmxlbmd0aCkpO1xuICAgICAgICBsZXQgY29sID0gTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpKjEwKTtcbiAgICAgICAgLy9jaGVja3MgdG8gc2VlIGlmIGl0IGlzIGludGVyZWN0aW5nLiBJZiBzbyB0aGVuIGl0IGNhbGxzIHRoZSByYW5kb21QbGFjZSBmdW5jdGlvbiBhZ2FpblxuICAgICAgICBpZihpbnRlcnNlY3RDaGVjayhjb21wdXRlcixzaGlwLHJvdyxjb2wsJ3ZlcnRpY2FsJykpe1xuICAgICAgICAgICAgY29tcHV0ZXIuY29tcHV0ZXJCb2FyZC5wbGFjZShzaGlwLHJvdyxjb2wsJ3ZlcnRpY2FsJyk7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZXtjb21wdXRlclJhbmRvbVBsYWNlKGNvbXB1dGVyLHNoaXApfVxuXG4gICAgfVxuICAgIC8vcGxhY2VzIHRoZSBzaGlwIHJhbmRvbWx5IGluIGhvcml6b250YWwgb3JyaWVudGF0aW9uXG4gICAgZWxzZXtcbiAgICAgICAgbGV0IHJvdyA9IE1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSoxMCk7XG4gICAgICAgIGxldCBjb2wgPSBNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiAoMTAtc2hpcC5sZW5ndGgpKTtcbiAgICAgICAgXG4gICAgICAgIGlmKGludGVyc2VjdENoZWNrKGNvbXB1dGVyLHNoaXAscm93LGNvbCwnaG9yaXpvbnRhbCcpKXtcbiAgICAgICAgICAgIGNvbXB1dGVyLmNvbXB1dGVyQm9hcmQucGxhY2Uoc2hpcCxyb3csY29sLCdob3Jpem9udGFsJylcbiAgICAgICAgfVxuICAgICAgICBlbHNle2NvbXB1dGVyUmFuZG9tUGxhY2UoY29tcHV0ZXIsc2hpcCl9XG4gICAgfVxufVxuXG5jb25zdCBwbGF5R2FtZSA9IChwbGF5ZXIxLGNvbXB1dGVyMSxlKSA9PiB7XG4gICAgICAgIGlmKCFnYW1lT3ZlcihwbGF5ZXIxLGNvbXB1dGVyMSkpIHtcbiAgICAgICAgcGxheWVyMS5wbGF5ZXJBdHRhY2soY29tcHV0ZXIxLmNvbXB1dGVyQm9hcmQsZSlcbiAgICAgICAgY29tcHV0ZXIxLmNvbXB1dGVyUmFuZG9tQXR0YWNrKHBsYXllcjEucGxheWVyQm9hcmQpXG4gICAgICAgIH1cbiAgICAgICAgdXBkYXRlR2FtZWJvYXJkKHBsYXllcjEsY29tcHV0ZXIxKTtcbn1cblxuY29uc3QgZ2FtZU92ZXI9IChwbGF5ZXIsY29tcHV0ZXIpID0+IHtcblxuICAgIGlmKGNvbXB1dGVyLmNvbXB1dGVyQm9hcmQuc2hpcHNBbGl2ZUdldHRlcigpLmxlbmd0aCA9PT0wICB8fCBwbGF5ZXIucGxheWVyQm9hcmQuc2hpcHNBbGl2ZUdldHRlcigpLmxlbmd0aCA9PT0gMCl7XG4gICAgICAgIHVwZGF0ZUhlYWRlcignR2FtZSBPdmVyISBQcmVzcyBSZXN0YXJ0IHRvIHBsYXkgYWdhaW4hJylcbiAgICAgICAgcmV0dXJuIHRydWVcbiAgICB9XG4gICAgcmV0dXJuIGZhbHNlXG59XG5cbmNvbnN0IHVwZGF0ZUdhbWVib2FyZCA9IChwbGF5ZXIxLGNvbXB1dGVyMSkgPT57XG4gICAgZm9yKGxldCBpPTA7IGk8KHBsYXllcjEucGxheWVyQm9hcmQuYXJyYXlHZXR0ZXIoKS5sZW5ndGgpO2krKyl7XG4gICAgICAgIGZvcihsZXQgaj0wOyBqPChwbGF5ZXIxLnBsYXllckJvYXJkLmFycmF5R2V0dGVyKClbaV0ubGVuZ3RoKTtqKyspe1xuICAgICAgICAgICAgXG4gICAgICAgICAgICBsZXQgZ2FtZUNlbGwgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChgJHtpfSR7an1gKVxuICAgICAgICAgICAgaWYodHlwZW9mIHBsYXllcjEucGxheWVyQm9hcmQuYXJyYXlHZXR0ZXIoKVtpXVtqXSA9PT0gJ29iamVjdCcpe1xuICAgICAgICAgICAgICAgIGxldCBuYW1lID0gcGxheWVyMS5wbGF5ZXJCb2FyZC5hcnJheUdldHRlcigpW2ldW2pdLm5hbWVcbiAgICAgICAgICAgICAgICBnYW1lQ2VsbC5jbGFzc0xpc3QuYWRkKG5hbWUpXG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlIGlmKHBsYXllcjEucGxheWVyQm9hcmQuYXJyYXlHZXR0ZXIoKVtpXVtqXSA9PT0gJ3gnKXtcbiAgICAgICAgICAgICAgICBnYW1lQ2VsbC5jbGFzc0xpc3QuYWRkKCdlbXB0eScpXG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlIGlmKHBsYXllcjEucGxheWVyQm9hcmQuYXJyYXlHZXR0ZXIoKVtpXVtqXSA9PT0gJ1gnKXtcbiAgICAgICAgICAgICAgICBnYW1lQ2VsbC5jbGFzc0xpc3QuYWRkKCdoaXQnKVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxuICAgIGZvcihsZXQgaT0wOyBpPChjb21wdXRlcjEuY29tcHV0ZXJCb2FyZC5hcnJheUdldHRlcigpLmxlbmd0aCk7aSsrKXtcbiAgICAgICAgZm9yKGxldCBqPTA7IGo8KGNvbXB1dGVyMS5jb21wdXRlckJvYXJkLmFycmF5R2V0dGVyKClbaV0ubGVuZ3RoKTtqKyspe1xuICAgICAgICAgICAgbGV0IGdhbWVDZWxsID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoYCR7aX0ke2p9Y29tcHV0ZXJgKVxuICAgICAgICAgICAgaWYoY29tcHV0ZXIxLmNvbXB1dGVyQm9hcmQuYXJyYXlHZXR0ZXIoKVtpXVtqXSA9PT0gJ3gnKXtcbiAgICAgICAgICAgICAgICBnYW1lQ2VsbC5jbGFzc0xpc3QuYWRkKCdlbXB0eScpXG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlIGlmKGNvbXB1dGVyMS5jb21wdXRlckJvYXJkLmFycmF5R2V0dGVyKClbaV1bal0gPT09ICdYJyl7XG4gICAgICAgICAgICAgICAgZ2FtZUNlbGwuY2xhc3NMaXN0LmFkZCgnaGl0JylcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cbn07XG5cbmNvbnN0IHJlc3RhcnRHYW1lID0gKCkgPT4ge1xuICAgIHJlc3RhcnRVSSgpO1xuICAgIGluaXRHYW1lKCk7XG5cbn1cblxuXG5cblxuaW5pdEdhbWUoKVxuXG5cblxuZXhwb3J0IHtzaGlwRmFjdG9yeSxnYW1lQm9hcmRGYWN0b3J5LCBwbGF5ZXIsY29tcHV0ZXIsdXBkYXRlR2FtZWJvYXJkfTsiLCJpbXBvcnQgeyB1cGRhdGVHYW1lYm9hcmQgfSBmcm9tIFwiLi9pbmRleFwiO1xuaW1wb3J0IHt1cGRhdGVIZWFkZXJ9IGZyb20gXCIuL2RvbU1hbmlwXCJcbi8vIENvZGUgdG8gdmlzdWFsaXplIHNoaXAgcGxhY2VtZW50XG5cbmxldCBjdXJyZW50U2hpcDtcbi8vcGxheWVySG92ZXIgc2hvd3MgYW4gb3V0bGluZSBvZiB0aGUgc2hpcCB0byBiZSBwbGFjZWRcbmNvbnN0IHBsYXllckhvdmVyID0gKGV2ZW50KSA9PiB7XG4gICAgbGV0IGJlZ2luSW5kZXggPSBwYXJzZUludChldmVudC50YXJnZXQuaWQpO1xuICAgIGxldCBvcmllbnRhdGlvbkJ0biA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdvcmllbnRCdG4nKTtcbiAgICAvL091dGxpbmUgaWYgaXQgaXMgSG9yaXpvbnRhbFxuICAgIGlmKG9yaWVudGF0aW9uQnRuLnRleHRDb250ZW50ID09PSAnSG9yaXpvbnRhbCcpe1xuICAgICAgICAvL0RldGVybWluZXMgaWYgdGhlIG91dGxpbmUgd291bGQgYmUgb3V0c2lkZSBvZiB0aGUgYWxsb3dhYmxlIHJhbmdlXG4gICAgICAgIGlmKGJlZ2luSW5kZXglMTA+KGJlZ2luSW5kZXgrY3VycmVudFNoaXAubGVuZ3RoKSUxMCAmJiAoYmVnaW5JbmRleCtjdXJyZW50U2hpcC5sZW5ndGgpJTEwICE9PSAwKXtcbiAgICAgICAgfVxuICAgICAgICBlbHNle1xuICAgICAgICAgICAgLy9pbnRlcmF0ZXMgdGhyb3VnaCB0aGUgc2hpcCBsZW5ndGggdG8gb3V0bGluZSB0aGUgY29ycmVjdCBsZW5ndGhcbiAgICAgICAgICAgIGZvcihsZXQgaSA9IDA7IGk8Y3VycmVudFNoaXAubGVuZ3RoO2krKyl7XG4gICAgICAgICAgICAgICAgbGV0IGluZGV4ID0gYmVnaW5JbmRleCArIGk7XG4gICAgICAgICAgICAgICAgLy9pbmRleHMgdW5kZXIgMTAgYmVnaW4gd2l0aCBhIDAgc28gd2UgbmVlZCB0byBhZGQgYSBzdHJpbmcgJzAnIHRvIHRoZSBpbmRleFxuICAgICAgICAgICAgICAgIGlmKGluZGV4IDwgMTApe1xuICAgICAgICAgICAgICAgICAgICBpbmRleCA9ICcwJyArIGluZGV4O1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAvL2dldHMgdGhlIGNvcnJlY3QgY2VsbHMgdG8gc2VsZWN0XG4gICAgICAgICAgICAgICAgbGV0IGN1cnJlbnRUYXIgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChgJHtpbmRleH1gKTtcbiAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICBjdXJyZW50VGFyLmNsYXNzTGlzdC5hZGQoJ3NlbGVjdGVkJyk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG4gICAgLy9zYW1lIGFzIGFib3ZlIGJ1dCBldmVyeXRoaW5nIGlzIG11bHRpcGxpZWQgYnkgMTAgdG8gbWFrZSBpdCB3b3JrIGZvciB2ZXJ0aWNhbCBwbGFjZW1lbnRcbiAgICBlbHNle1xuICAgICAgICBjb25zb2xlLmxvZyhiZWdpbkluZGV4ICsgY3VycmVudFNoaXAubGVuZ3RoKjEwKVxuICAgICAgICBpZigoYmVnaW5JbmRleCArIGN1cnJlbnRTaGlwLmxlbmd0aCoxMCk+MTEwKXtcbiAgICAgICAgfVxuICAgICAgICBlbHNle1xuICAgICAgICAgICAgZm9yKGxldCBpID0gMDsgaTxjdXJyZW50U2hpcC5sZW5ndGgqMTA7aSs9MTApe1xuICAgICAgICAgICAgICAgIGxldCBpbmRleCA9IGJlZ2luSW5kZXggKyBpO1xuICAgICAgICAgICAgICAgIGlmKGluZGV4IDwgMTApe1xuICAgICAgICAgICAgICAgICAgICBpbmRleCA9ICcwJyArIGluZGV4O1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBsZXQgY3VycmVudFRhciA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKGAke2luZGV4fWApO1xuICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgIGN1cnJlbnRUYXIuY2xhc3NMaXN0LmFkZCgnc2VsZWN0ZWQnKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cblxufVxuLy9jaGFuZ2VzIHRoZSBvcmllbnQgYnV0dG9uIFxuY29uc3Qgb3JpZW50QnRuID0gKCkgPT4ge1xuICAgIGNvbnNvbGUubG9nKCdvcmllbnQnKVxuICAgIGxldCBvcmllbnRhdGlvbkJ0biA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdvcmllbnRCdG4nKTtcbiAgICBsZXQgcGxheWVyQm9hcmQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgncGxheWVyR2FtZWJvYXJkJyk7XG4gICAgLy9jaGFuZ2VzIHRleHQgd2hlbiBjbGlja2VkXG4gICAgaWYob3JpZW50YXRpb25CdG4udGV4dENvbnRlbnQgPT09ICdIb3Jpem9udGFsJyl7XG4gICAgICAgIG9yaWVudGF0aW9uQnRuLnRleHRDb250ZW50ID0gJ1ZlcnRpY2FsJztcbiAgICB9XG4gICAgZWxzZXtcbiAgICAgICAgb3JpZW50YXRpb25CdG4udGV4dENvbnRlbnQgPSAnSG9yaXpvbnRhbCc7XG4gICAgfVxuICAgIC8vNCBsaW5lcyBiZWxvdyByZW1vdmUgYW5kIGFkZCBsaXN0ZW5lcnMgc28gdGhleSB1cGRhdGUgdGhlIG9yaWVudGF0aW9uLlxuICAgIHBsYXllckJvYXJkLnJlbW92ZUV2ZW50TGlzdGVuZXIoJ21vdXNlb3V0JyxwbGF5ZXJFeGl0KTtcbiAgICBwbGF5ZXJCb2FyZC5yZW1vdmVFdmVudExpc3RlbmVyKCdtb3VzZW92ZXInLHBsYXllckhvdmVyKTtcbiAgICBwbGF5ZXJCb2FyZC5hZGRFdmVudExpc3RlbmVyKCdtb3VzZW92ZXInLHBsYXllckhvdmVyKTtcbiAgICBwbGF5ZXJCb2FyZC5hZGRFdmVudExpc3RlbmVyKCdtb3VzZW91dCcscGxheWVyRXhpdCk7XG4gICAgXG59XG4vLyBDb2RlIHRvIGRlbGV0ZSB0aGUgc2hpcCB2aXN1YWxpemF0aW9uXG5jb25zdCBwbGF5ZXJFeGl0ID0gKGV2ZW50KSA9PiB7XG4gICAgbGV0IGJlZ2luSW5kZXggPSBwYXJzZUludChldmVudC50YXJnZXQuaWQpO1xuICAgIGxldCBvcmllbnRhdGlvbkJ0biA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdvcmllbnRCdG4nKTtcbiAgICBpZihvcmllbnRhdGlvbkJ0bi50ZXh0Q29udGVudCA9PT0gJ0hvcml6b250YWwnKXtcbiAgICAgICAgZm9yKGxldCBpID0gMDsgaTxjdXJyZW50U2hpcC5sZW5ndGg7aSsrKXtcbiAgICAgICAgICAgIGxldCBpbmRleCA9IGJlZ2luSW5kZXggKyBpO1xuICAgICAgICAgICAgXG4gICAgICAgICAgICBpZihpbmRleCA8IDEwKXtcbiAgICAgICAgICAgICAgICBpbmRleCA9ICcwJyArIGluZGV4XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBsZXQgY3VycmVudFRhciA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKGAke2luZGV4fWApO1xuICAgICAgICAgICAgXG4gICAgICAgICAgICBjdXJyZW50VGFyLmNsYXNzTGlzdC5yZW1vdmUoJ3NlbGVjdGVkJyk7XG4gICAgICAgIH1cbiAgICB9XG4gICAgZWxzZXtcbiAgICAgICAgZm9yKGxldCBpID0gMDsgaTxjdXJyZW50U2hpcC5sZW5ndGgqMTA7aSs9MTApe1xuICAgICAgICAgICAgbGV0IGluZGV4ID0gYmVnaW5JbmRleCArIGk7XG4gICAgICAgICAgICBcbiAgICAgICAgICAgIGlmKGluZGV4IDwgMTApe1xuICAgICAgICAgICAgICAgIGluZGV4ID0gJzAnICsgaW5kZXhcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhpbmRleCk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBsZXQgY3VycmVudFRhciA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKGAke2luZGV4fWApO1xuICAgICAgICAgICAgXG4gICAgICAgICAgICBjdXJyZW50VGFyLmNsYXNzTGlzdC5yZW1vdmUoJ3NlbGVjdGVkJyk7XG4gICAgICAgIH1cbiAgICB9XG5cbn1cblxuLy9QbGFjZXMgc2hpcFxuY29uc3QgdXNlclBsYWNlID0gKHNoaXBzLHBsYXllcixjb21wdXRlcixzaGlwKSA9PiB7XG4gICAgY29uc3QgcGxheWVyQm9hcmQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgncGxheWVyR2FtZWJvYXJkJyk7XG4gICAgY29uc3Qgb3JpZW50YXRpb25CdG4gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnb3JpZW50QnRuJyk7XG4gICAgY3VycmVudFNoaXAgPSBzaGlwO1xuXG4gICAgcGxheWVyQm9hcmQucmVtb3ZlRXZlbnRMaXN0ZW5lcignbW91c2VvdXQnLHBsYXllckV4aXQpO1xuICAgIHBsYXllckJvYXJkLnJlbW92ZUV2ZW50TGlzdGVuZXIoJ21vdXNlb3ZlcicscGxheWVySG92ZXIpO1xuICAgIHBsYXllckJvYXJkLmFkZEV2ZW50TGlzdGVuZXIoJ21vdXNlb3ZlcicscGxheWVySG92ZXIpO1xuICAgIHBsYXllckJvYXJkLmFkZEV2ZW50TGlzdGVuZXIoJ21vdXNlb3V0JyxwbGF5ZXJFeGl0KTtcbiAgICBvcmllbnRhdGlvbkJ0bi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIG9yaWVudEJ0bik7XG5cbiAgICBwbGF5ZXJCb2FyZC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsZnVuY3Rpb24oZXZlbnQpe1xuICAgICAgICBsZXQgZWxlbWVudCA9IGV2ZW50LnRhcmdldC5pZDtcbiAgICAgICAgcGxheWVyLnBsYXllclBsYWNlKHNoaXAscGFyc2VJbnQoZWxlbWVudFswXSkscGFyc2VJbnQoZWxlbWVudFsxXSksb3JpZW50YXRpb25CdG4udGV4dENvbnRlbnQudG9Mb3dlckNhc2UoKSk7XG4gICAgICAgIHVwZGF0ZUdhbWVib2FyZChwbGF5ZXIsY29tcHV0ZXIpO1xuICAgICAgICBzaGlwLmlzUGxhY2VkU2V0dGVyKHRydWUpO1xuICAgICAgICBwbGF5ZXJFeGl0KGV2ZW50KVxuICAgICAgICBpZihpc1NoaXBQbGFjZWQoc2hpcHMpICE9PSB0cnVlICYmIHBsYXllci5wbGF5ZXJCb2FyZC5zaGlwc0FsaXZlR2V0dGVyKCkuaW5jbHVkZXMoc2hpcC5uYW1lKSl7XG4gICAgICAgICAgICB1c2VyUGxhY2Uoc2hpcHMscGxheWVyLGNvbXB1dGVyLGlzU2hpcFBsYWNlZChzaGlwcykpXG4gICAgICAgICAgICB1cGRhdGVIZWFkZXIoYFBsYWNlIHlvdXIgJHtpc1NoaXBQbGFjZWQoc2hpcHMpLm5hbWV9IGFueXdoZXJlIG9uIHRoZSBwbGF5ZXIgYm9hcmRgKVxuICAgICAgICB9XG4gICAgICAgIGVsc2UgaWYocGxheWVyLnBsYXllckJvYXJkLnNoaXBzQWxpdmVHZXR0ZXIoKS5sZW5ndGg8NSl7XG4gICAgICAgICAgICB1c2VyUGxhY2Uoc2hpcHMscGxheWVyLGNvbXB1dGVyLHNoaXApXG4gICAgICAgIH1cbiAgICAgICAgZWxzZSBpZihpc1NoaXBQbGFjZWQoc2hpcHMpKXtcbiAgICAgICAgICAgIGxldCBjb250YWluZXIgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnYnRuQ29udGFpbmVyJylcbiAgICAgICAgICAgIGNvbnRhaW5lci5yZW1vdmVDaGlsZChvcmllbnRhdGlvbkJ0bilcbiAgICAgICAgICAgIHBsYXllckJvYXJkLnJlbW92ZUV2ZW50TGlzdGVuZXIoJ21vdXNlb3V0JyxwbGF5ZXJFeGl0KTtcbiAgICAgICAgICAgIHBsYXllckJvYXJkLnJlbW92ZUV2ZW50TGlzdGVuZXIoJ21vdXNlb3ZlcicscGxheWVySG92ZXIpO1xuICAgICAgICAgICAgdXBkYXRlSGVhZGVyKCdDbGljayBvbiB0aGUgY29tcHV0ZXIgYm9hcmQgdG8gYXR0YWNrIScpXG4gICAgICAgIH1cbiAgICB9LCB7b25jZTp0cnVlfSlcbn1cblxuY29uc3QgaXNTaGlwUGxhY2VkPSAoYXJyKSA9PiB7XG4gICAgZm9yKGxldCBpID0gMDsgaTxhcnIubGVuZ3RoO2krKyl7XG4gICAgICAgIGlmKCFhcnJbaV0uaXNQbGFjZWRHZXR0ZXIoKSl7XG5cbiAgICAgICAgICAgIHJldHVybiBhcnJbaV1cbiAgICAgICAgfVxuICAgIH1cbiAgICByZXR1cm4gdHJ1ZVxufVxuXG5cblxuZXhwb3J0IHtwbGF5ZXJIb3ZlcixwbGF5ZXJFeGl0LHVzZXJQbGFjZSxpc1NoaXBQbGFjZWR9IiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHRpZDogbW9kdWxlSWQsXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbi8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG5fX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBfX3dlYnBhY2tfbW9kdWxlc19fO1xuXG4iLCIvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuX193ZWJwYWNrX3JlcXVpcmVfXy5uID0gKG1vZHVsZSkgPT4ge1xuXHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cblx0XHQoKSA9PiAobW9kdWxlWydkZWZhdWx0J10pIDpcblx0XHQoKSA9PiAobW9kdWxlKTtcblx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgeyBhOiBnZXR0ZXIgfSk7XG5cdHJldHVybiBnZXR0ZXI7XG59OyIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18uZyA9IChmdW5jdGlvbigpIHtcblx0aWYgKHR5cGVvZiBnbG9iYWxUaGlzID09PSAnb2JqZWN0JykgcmV0dXJuIGdsb2JhbFRoaXM7XG5cdHRyeSB7XG5cdFx0cmV0dXJuIHRoaXMgfHwgbmV3IEZ1bmN0aW9uKCdyZXR1cm4gdGhpcycpKCk7XG5cdH0gY2F0Y2ggKGUpIHtcblx0XHRpZiAodHlwZW9mIHdpbmRvdyA9PT0gJ29iamVjdCcpIHJldHVybiB3aW5kb3c7XG5cdH1cbn0pKCk7IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsInZhciBzY3JpcHRVcmw7XG5pZiAoX193ZWJwYWNrX3JlcXVpcmVfXy5nLmltcG9ydFNjcmlwdHMpIHNjcmlwdFVybCA9IF9fd2VicGFja19yZXF1aXJlX18uZy5sb2NhdGlvbiArIFwiXCI7XG52YXIgZG9jdW1lbnQgPSBfX3dlYnBhY2tfcmVxdWlyZV9fLmcuZG9jdW1lbnQ7XG5pZiAoIXNjcmlwdFVybCAmJiBkb2N1bWVudCkge1xuXHRpZiAoZG9jdW1lbnQuY3VycmVudFNjcmlwdClcblx0XHRzY3JpcHRVcmwgPSBkb2N1bWVudC5jdXJyZW50U2NyaXB0LnNyY1xuXHRpZiAoIXNjcmlwdFVybCkge1xuXHRcdHZhciBzY3JpcHRzID0gZG9jdW1lbnQuZ2V0RWxlbWVudHNCeVRhZ05hbWUoXCJzY3JpcHRcIik7XG5cdFx0aWYoc2NyaXB0cy5sZW5ndGgpIHNjcmlwdFVybCA9IHNjcmlwdHNbc2NyaXB0cy5sZW5ndGggLSAxXS5zcmNcblx0fVxufVxuLy8gV2hlbiBzdXBwb3J0aW5nIGJyb3dzZXJzIHdoZXJlIGFuIGF1dG9tYXRpYyBwdWJsaWNQYXRoIGlzIG5vdCBzdXBwb3J0ZWQgeW91IG11c3Qgc3BlY2lmeSBhbiBvdXRwdXQucHVibGljUGF0aCBtYW51YWxseSB2aWEgY29uZmlndXJhdGlvblxuLy8gb3IgcGFzcyBhbiBlbXB0eSBzdHJpbmcgKFwiXCIpIGFuZCBzZXQgdGhlIF9fd2VicGFja19wdWJsaWNfcGF0aF9fIHZhcmlhYmxlIGZyb20geW91ciBjb2RlIHRvIHVzZSB5b3VyIG93biBsb2dpYy5cbmlmICghc2NyaXB0VXJsKSB0aHJvdyBuZXcgRXJyb3IoXCJBdXRvbWF0aWMgcHVibGljUGF0aCBpcyBub3Qgc3VwcG9ydGVkIGluIHRoaXMgYnJvd3NlclwiKTtcbnNjcmlwdFVybCA9IHNjcmlwdFVybC5yZXBsYWNlKC8jLiokLywgXCJcIikucmVwbGFjZSgvXFw/LiokLywgXCJcIikucmVwbGFjZSgvXFwvW15cXC9dKyQvLCBcIi9cIik7XG5fX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBzY3JpcHRVcmw7IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5iID0gZG9jdW1lbnQuYmFzZVVSSSB8fCBzZWxmLmxvY2F0aW9uLmhyZWY7XG5cbi8vIG9iamVjdCB0byBzdG9yZSBsb2FkZWQgYW5kIGxvYWRpbmcgY2h1bmtzXG4vLyB1bmRlZmluZWQgPSBjaHVuayBub3QgbG9hZGVkLCBudWxsID0gY2h1bmsgcHJlbG9hZGVkL3ByZWZldGNoZWRcbi8vIFtyZXNvbHZlLCByZWplY3QsIFByb21pc2VdID0gY2h1bmsgbG9hZGluZywgMCA9IGNodW5rIGxvYWRlZFxudmFyIGluc3RhbGxlZENodW5rcyA9IHtcblx0XCJpbmRleFwiOiAwXG59O1xuXG4vLyBubyBjaHVuayBvbiBkZW1hbmQgbG9hZGluZ1xuXG4vLyBubyBwcmVmZXRjaGluZ1xuXG4vLyBubyBwcmVsb2FkZWRcblxuLy8gbm8gSE1SXG5cbi8vIG5vIEhNUiBtYW5pZmVzdFxuXG4vLyBubyBvbiBjaHVua3MgbG9hZGVkXG5cbi8vIG5vIGpzb25wIGZ1bmN0aW9uIiwiIiwiLy8gc3RhcnR1cFxuLy8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4vLyBUaGlzIGVudHJ5IG1vZHVsZSBpcyByZWZlcmVuY2VkIGJ5IG90aGVyIG1vZHVsZXMgc28gaXQgY2FuJ3QgYmUgaW5saW5lZFxudmFyIF9fd2VicGFja19leHBvcnRzX18gPSBfX3dlYnBhY2tfcmVxdWlyZV9fKFwiLi9zcmMvaW5kZXguanNcIik7XG4iLCIiXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=