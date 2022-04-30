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
/* harmony import */ var _domManip__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./domManip */ "./src/domManip.js");
// import { updateGameboard } from "./index";

// Code to visualize ship placement
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
        updateGameboard(player,computer);
        ship.isPlacedSetter(true);
        playerExit(event)
        if(isShipPlaced(ships) !== true && player.playerBoard.shipsAliveGetter().includes(ship.name)){
            userPlace(ships,player,computer,isShipPlaced(ships))
            ;(0,_domManip__WEBPACK_IMPORTED_MODULE_0__.updateHeader)(`Place your ${isShipPlaced(ships).name} anywhere on the player board`)
        }
        else if(player.playerBoard.shipsAliveGetter().length<5){
            userPlace(ships,player,computer,ship)
        }
        else if(isShipPlaced(ships)){
            let container = document.getElementById('btnContainer')
            container.removeChild(orientationBtn)
            playerBoard.removeEventListener('mouseout',playerExit);
            playerBoard.removeEventListener('mouseover',playerHover);
            (0,_domManip__WEBPACK_IMPORTED_MODULE_0__.updateHeader)('Click on the computer board to attack!')
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
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "computer": () => (/* reexport safe */ _factories_js__WEBPACK_IMPORTED_MODULE_2__.computer),
/* harmony export */   "gameBoardFactory": () => (/* reexport safe */ _factories_js__WEBPACK_IMPORTED_MODULE_2__.gameBoardFactory),
/* harmony export */   "player": () => (/* reexport safe */ _factories_js__WEBPACK_IMPORTED_MODULE_2__.player),
/* harmony export */   "shipFactory": () => (/* reexport safe */ _factories_js__WEBPACK_IMPORTED_MODULE_2__.shipFactory),
/* harmony export */   "updateGameboard": () => (/* binding */ updateGameboard)
/* harmony export */ });
/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./style.css */ "./src/style.css");
/* harmony import */ var _domManip_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./domManip.js */ "./src/domManip.js");
/* harmony import */ var _factories_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./factories.js */ "./src/factories.js");
/* harmony import */ var _playerPlace_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./playerPlace.js */ "./src/playerPlace.js");




//initilizes the game
const initGame = () =>{
    //creates a player and a computer
    const player1 = (0,_factories_js__WEBPACK_IMPORTED_MODULE_2__.player)();
    const computer1 = (0,_factories_js__WEBPACK_IMPORTED_MODULE_2__.computer)();

    //creates all ships for player and computer
    const playerSub = (0,_factories_js__WEBPACK_IMPORTED_MODULE_2__.shipFactory)("submarine",3);
    const playerCarrier = (0,_factories_js__WEBPACK_IMPORTED_MODULE_2__.shipFactory)("carrier",5);
    const playerBattleship = (0,_factories_js__WEBPACK_IMPORTED_MODULE_2__.shipFactory)('battleship',4);
    const playerCruiser = (0,_factories_js__WEBPACK_IMPORTED_MODULE_2__.shipFactory)('cruiser',3);
    const playerDestroyer = (0,_factories_js__WEBPACK_IMPORTED_MODULE_2__.shipFactory)('destroyer', 2);
    const computerSub = (0,_factories_js__WEBPACK_IMPORTED_MODULE_2__.shipFactory)("submarine",3);
    const computerCarrier = (0,_factories_js__WEBPACK_IMPORTED_MODULE_2__.shipFactory)("carrier",5);
    const computerBattleship = (0,_factories_js__WEBPACK_IMPORTED_MODULE_2__.shipFactory)('battleship',4);
    const computerCruiser = (0,_factories_js__WEBPACK_IMPORTED_MODULE_2__.shipFactory)('cruiser',3);
    const computerDestroyer = (0,_factories_js__WEBPACK_IMPORTED_MODULE_2__.shipFactory)('destroyer', 2);

    let playerShips = [playerSub,playerCarrier,playerBattleship,playerCruiser,playerDestroyer]
    //creates the UI
    ;(0,_domManip_js__WEBPACK_IMPORTED_MODULE_1__.createContainer)();
    (0,_domManip_js__WEBPACK_IMPORTED_MODULE_1__.createGameBoardUI)(player1.playerBoard.arrayGetter(),computer1.computerBoard.arrayGetter());
    const restartBtn = document.getElementById('restartBtn');
    restartBtn.addEventListener('click',restartGame)
    ;(0,_playerPlace_js__WEBPACK_IMPORTED_MODULE_3__.userPlace)(playerShips,player1,computer1,playerSub)


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




})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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d2VicGFjazovL2JhdHRsZXNoaXAvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvZ2V0VXJsLmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vc3JjL3N0eWxlLmNzcz83MTYzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL3NyYy9kb21NYW5pcC5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vc3JjL2ZhY3Rvcmllcy5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vc3JjL3BsYXllclBsYWNlLmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC93ZWJwYWNrL3J1bnRpbWUvY29tcGF0IGdldCBkZWZhdWx0IGV4cG9ydCIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwL3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwL3dlYnBhY2svcnVudGltZS9nbG9iYWwiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL2JhdHRsZXNoaXAvd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwL3dlYnBhY2svcnVudGltZS9wdWJsaWNQYXRoIiwid2VicGFjazovL2JhdHRsZXNoaXAvd2VicGFjay9ydW50aW1lL2pzb25wIGNodW5rIGxvYWRpbmciLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL3NyYy9pbmRleC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBJbXBvcnRzXG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0dFVF9VUkxfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvZ2V0VXJsLmpzXCI7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzBfX18gPSBuZXcgVVJMKFwiLi9TYWlyYVN0ZW5jaWxPbmUtUmVndWxhci50dGZcIiwgaW1wb3J0Lm1ldGEudXJsKTtcbnZhciBfX19DU1NfTE9BREVSX0VYUE9SVF9fXyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8wX19fID0gX19fQ1NTX0xPQURFUl9HRVRfVVJMX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMF9fXyk7XG4vLyBNb2R1bGVcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgXCJAZm9udC1mYWNlIHtcXG4gICAgZm9udC1mYW1pbHk6ICdTYWlyYVN0ZW5jaWwnO1xcbiAgICBzcmM6IHVybChcIiArIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzBfX18gKyBcIikgZm9ybWF0KCd0cnVldHlwZScpO1xcblxcbn1cXG4qe1xcbiAgICBmb250LWZhbWlseTogJ1NhaXJhU3RlbmNpbCc7XFxufVxcbmJvZHl7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYigxOTIsIDIxNywgMjI4KTtcXG4gICAgd2lkdGg6IDEwMCU7XFxuICAgIGhlaWdodDogMTAwJTtcXG59XFxuI21haW5Db250YWluZXJ7XFxuICAgIGRpc3BsYXk6IGJsb2NrO1xcbn1cXG4jZ2FtZWJvYXJkc3tcXG4gICAgZGlzcGxheTogZ3JpZDtcXG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiByZXBlYXQoMiwxZnIpO1xcbiAgICBtYXJnaW46IDEwcHg7XFxuICAgIGp1c3RpZnktaXRlbXM6IGNlbnRlcjtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG59XFxuaDF7XFxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcXG4gICAgZm9udC1zaXplOiA0NnB4O1xcbiAgICBsZXR0ZXItc3BhY2luZzogNXB4O1xcbn1cXG4jaGVhZGVye1xcbiAgICBmb250LXNpemU6IDM2cHg7XFxuICAgIGxldHRlci1zcGFjaW5nOiAxcHg7XFxufVxcbiNwbGF5ZXJIZWFkZXIsICNjb21wdXRlckhlYWRlcntcXG4gICAgd2lkdGg6IDQwdnc7XFxuICAgIGdyaWQtcm93LXN0YXJ0OiAwO1xcbiAgICBncmlkLXJvdy1lbmQ6IDE7XFxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcXG59XFxuXFxuI3BsYXllckdhbWVib2FyZCwgI2NvbXB1dGVyR2FtZWJvYXJke1xcbiAgICBkaXNwbGF5OiBncmlkO1xcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IHJlcGVhdCgxMCwxZnIpO1xcbiAgICBoZWlnaHQ6IDQwdnc7XFxuICAgIHdpZHRoOiA0MHZ3O1xcbn1cXG4uY2VsbHtcXG4gICAgYm9yZGVyOiAxcHggc29saWQgYmxhY2s7XFxuICAgIGhlaWdodDogMTAwJTtcXG4gICAgd2lkdGg6IDEwMCU7XFxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcXG4gICAgZm9udC1zaXplOiB4LXNtYWxsO1xcbn1cXG5cXG4uYmF0dGxlc2hpcHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjojMmIyNDI0O1xcbn1cXG5cXG4uc3VibWFyaW5le1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMTgxODFhO1xcbn1cXG5cXG4uY3J1aXNlcntcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzVlNWU1ZTtcXG59XFxuXFxuLmNhcnJpZXJ7XFxuICAgIGJhY2tncm91bmQtY29sb3I6ICM0MTJkNDQ7XFxufVxcblxcbi5kZXN0cm95ZXJ7XFxuICAgIGJhY2tncm91bmQtY29sb3I6ICMzYTNhM2E7XFxufVxcbi5lbXB0eXtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZmZmZjtcXG59XFxuLmhpdHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2JiMDAwMDtcXG59XFxuXFxuLnNlbGVjdGVke1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMTA1LCAxMTksIDEyMik7XFxufVxcblxcbiNidG5Db250YWluZXJ7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgICB3aWR0aDogMTAwJTtcXG4gICAgZ2FwOiAyMHB4O1xcbn1cXG5cXG5idXR0b257XFxuICAgIGN1cnNvcjogcG9pbnRlcjtcXG4gICAgb3V0bGluZTogMDtcXG4gICAgY29sb3I6ICNmZmY7XFxuICAgIGJhY2tncm91bmQtY29sb3I6ICM1YTYxNmQ7XFxuXFxuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcXG4gICAgZm9udC13ZWlnaHQ6IDQwMDtcXG4gICAgbGluZS1oZWlnaHQ6IDEuNTtcXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xcbiAgICBib3JkZXI6IDJweCBzb2xpZCAjMTgxODFhO1xcbiAgICBwYWRkaW5nOiA2cHggMTJweDtcXG4gICAgZm9udC1zaXplOiAxNnB4O1xcbiAgICBib3JkZXItcmFkaXVzOiAuMjVyZW07XFxuICAgIHRyYW5zaXRpb246IGNvbG9yIC4xNXMgZWFzZS1pbi1vdXQsYmFja2dyb3VuZC1jb2xvciAuMTVzIGVhc2UtaW4tb3V0LGJvcmRlci1jb2xvciAuMTVzIGVhc2UtaW4tb3V0LGJveC1zaGFkb3cgLjE1cyBlYXNlLWluLW91dDtcXG5cXG59XFxuYnV0dG9uOmhvdmVye1xcbiAgICBjb2xvcjogI2ZmZjtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzBkMTAxNDtcXG4gICAgYm9yZGVyLWNvbG9yOiAjMzczZTQ3O1xcbn1cXG5cXG5cXG5AbWVkaWEgKG1heC13aWR0aDo1MDBweCkge1xcbiAgICAjZ2FtZWJvYXJkc3tcXG4gICAgICAgIGRpc3BsYXk6IGJsb2NrO1xcbiAgICAgICAgbWFyZ2luLWxlZnQ6IGF1dG87XFxuICAgICAgICBtYXJnaW4tcmlnaHQ6IGF1dG87XFxuICAgIH1cXG4gICAgYm9keXtcXG4gICAgICAgIG1hcmdpbjowO1xcbiAgICB9XFxuICAgICNwbGF5ZXJIZWFkZXIsI3BsYXllckdhbWVib2FyZCwjY29tcHV0ZXJIZWFkZXIsI2NvbXB1dGVyR2FtZWJvYXJke1xcbiAgICAgICAgbWFyZ2luOiBhdXRvO1xcbiAgICAgICAgbWFyZ2luLWJvdHRvbTogMTBweDtcXG4gICAgfVxcbiAgICAjcGxheWVyR2FtZWJvYXJkLCNjb21wdXRlckdhbWVib2FyZHtcXG4gICAgICAgIHdpZHRoOiA4MHZ3O1xcbiAgICAgICAgaGVpZ2h0OiA4MHZ3O1xcbiAgICB9XFxufVwiLCBcIlwiLHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcIndlYnBhY2s6Ly8uL3NyYy9zdHlsZS5jc3NcIl0sXCJuYW1lc1wiOltdLFwibWFwcGluZ3NcIjpcIkFBQUE7SUFDSSwyQkFBMkI7SUFDM0IsK0RBQTREOztBQUVoRTtBQUNBO0lBQ0ksMkJBQTJCO0FBQy9CO0FBQ0E7SUFDSSxvQ0FBb0M7SUFDcEMsV0FBVztJQUNYLFlBQVk7QUFDaEI7QUFDQTtJQUNJLGNBQWM7QUFDbEI7QUFDQTtJQUNJLGFBQWE7SUFDYixvQ0FBb0M7SUFDcEMsWUFBWTtJQUNaLHFCQUFxQjtJQUNyQixtQkFBbUI7QUFDdkI7QUFDQTtJQUNJLGtCQUFrQjtJQUNsQixlQUFlO0lBQ2YsbUJBQW1CO0FBQ3ZCO0FBQ0E7SUFDSSxlQUFlO0lBQ2YsbUJBQW1CO0FBQ3ZCO0FBQ0E7SUFDSSxXQUFXO0lBQ1gsaUJBQWlCO0lBQ2pCLGVBQWU7SUFDZixrQkFBa0I7QUFDdEI7O0FBRUE7SUFDSSxhQUFhO0lBQ2IscUNBQXFDO0lBQ3JDLFlBQVk7SUFDWixXQUFXO0FBQ2Y7QUFDQTtJQUNJLHVCQUF1QjtJQUN2QixZQUFZO0lBQ1osV0FBVztJQUNYLGtCQUFrQjtJQUNsQixrQkFBa0I7QUFDdEI7O0FBRUE7SUFDSSx3QkFBd0I7QUFDNUI7O0FBRUE7SUFDSSx5QkFBeUI7QUFDN0I7O0FBRUE7SUFDSSx5QkFBeUI7QUFDN0I7O0FBRUE7SUFDSSx5QkFBeUI7QUFDN0I7O0FBRUE7SUFDSSx5QkFBeUI7QUFDN0I7QUFDQTtJQUNJLHlCQUF5QjtBQUM3QjtBQUNBO0lBQ0kseUJBQXlCO0FBQzdCOztBQUVBO0lBQ0ksb0NBQW9DO0FBQ3hDOztBQUVBO0lBQ0ksYUFBYTtJQUNiLHVCQUF1QjtJQUN2QixXQUFXO0lBQ1gsU0FBUztBQUNiOztBQUVBO0lBQ0ksZUFBZTtJQUNmLFVBQVU7SUFDVixXQUFXO0lBQ1gseUJBQXlCOztJQUV6QixxQkFBcUI7SUFDckIsZ0JBQWdCO0lBQ2hCLGdCQUFnQjtJQUNoQixrQkFBa0I7SUFDbEIseUJBQXlCO0lBQ3pCLGlCQUFpQjtJQUNqQixlQUFlO0lBQ2YscUJBQXFCO0lBQ3JCLDhIQUE4SDs7QUFFbEk7QUFDQTtJQUNJLFdBQVc7SUFDWCx5QkFBeUI7SUFDekIscUJBQXFCO0FBQ3pCOzs7QUFHQTtJQUNJO1FBQ0ksY0FBYztRQUNkLGlCQUFpQjtRQUNqQixrQkFBa0I7SUFDdEI7SUFDQTtRQUNJLFFBQVE7SUFDWjtJQUNBO1FBQ0ksWUFBWTtRQUNaLG1CQUFtQjtJQUN2QjtJQUNBO1FBQ0ksV0FBVztRQUNYLFlBQVk7SUFDaEI7QUFDSlwiLFwic291cmNlc0NvbnRlbnRcIjpbXCJAZm9udC1mYWNlIHtcXG4gICAgZm9udC1mYW1pbHk6ICdTYWlyYVN0ZW5jaWwnO1xcbiAgICBzcmM6IHVybCgnLi9TYWlyYVN0ZW5jaWxPbmUtUmVndWxhci50dGYnKSBmb3JtYXQoJ3RydWV0eXBlJyk7XFxuXFxufVxcbip7XFxuICAgIGZvbnQtZmFtaWx5OiAnU2FpcmFTdGVuY2lsJztcXG59XFxuYm9keXtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDE5MiwgMjE3LCAyMjgpO1xcbiAgICB3aWR0aDogMTAwJTtcXG4gICAgaGVpZ2h0OiAxMDAlO1xcbn1cXG4jbWFpbkNvbnRhaW5lcntcXG4gICAgZGlzcGxheTogYmxvY2s7XFxufVxcbiNnYW1lYm9hcmRze1xcbiAgICBkaXNwbGF5OiBncmlkO1xcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IHJlcGVhdCgyLDFmcik7XFxuICAgIG1hcmdpbjogMTBweDtcXG4gICAganVzdGlmeS1pdGVtczogY2VudGVyO1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbn1cXG5oMXtcXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xcbiAgICBmb250LXNpemU6IDQ2cHg7XFxuICAgIGxldHRlci1zcGFjaW5nOiA1cHg7XFxufVxcbiNoZWFkZXJ7XFxuICAgIGZvbnQtc2l6ZTogMzZweDtcXG4gICAgbGV0dGVyLXNwYWNpbmc6IDFweDtcXG59XFxuI3BsYXllckhlYWRlciwgI2NvbXB1dGVySGVhZGVye1xcbiAgICB3aWR0aDogNDB2dztcXG4gICAgZ3JpZC1yb3ctc3RhcnQ6IDA7XFxuICAgIGdyaWQtcm93LWVuZDogMTtcXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xcbn1cXG5cXG4jcGxheWVyR2FtZWJvYXJkLCAjY29tcHV0ZXJHYW1lYm9hcmR7XFxuICAgIGRpc3BsYXk6IGdyaWQ7XFxuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogcmVwZWF0KDEwLDFmcik7XFxuICAgIGhlaWdodDogNDB2dztcXG4gICAgd2lkdGg6IDQwdnc7XFxufVxcbi5jZWxse1xcbiAgICBib3JkZXI6IDFweCBzb2xpZCBibGFjaztcXG4gICAgaGVpZ2h0OiAxMDAlO1xcbiAgICB3aWR0aDogMTAwJTtcXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xcbiAgICBmb250LXNpemU6IHgtc21hbGw7XFxufVxcblxcbi5iYXR0bGVzaGlwe1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiMyYjI0MjQ7XFxufVxcblxcbi5zdWJtYXJpbmV7XFxuICAgIGJhY2tncm91bmQtY29sb3I6ICMxODE4MWE7XFxufVxcblxcbi5jcnVpc2Vye1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjNWU1ZTVlO1xcbn1cXG5cXG4uY2FycmllcntcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzQxMmQ0NDtcXG59XFxuXFxuLmRlc3Ryb3llcntcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzNhM2EzYTtcXG59XFxuLmVtcHR5e1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmZmZmO1xcbn1cXG4uaGl0e1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjYmIwMDAwO1xcbn1cXG5cXG4uc2VsZWN0ZWR7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYigxMDUsIDExOSwgMTIyKTtcXG59XFxuXFxuI2J0bkNvbnRhaW5lcntcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICAgIHdpZHRoOiAxMDAlO1xcbiAgICBnYXA6IDIwcHg7XFxufVxcblxcbmJ1dHRvbntcXG4gICAgY3Vyc29yOiBwb2ludGVyO1xcbiAgICBvdXRsaW5lOiAwO1xcbiAgICBjb2xvcjogI2ZmZjtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzVhNjE2ZDtcXG5cXG4gICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xcbiAgICBmb250LXdlaWdodDogNDAwO1xcbiAgICBsaW5lLWhlaWdodDogMS41O1xcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICAgIGJvcmRlcjogMnB4IHNvbGlkICMxODE4MWE7XFxuICAgIHBhZGRpbmc6IDZweCAxMnB4O1xcbiAgICBmb250LXNpemU6IDE2cHg7XFxuICAgIGJvcmRlci1yYWRpdXM6IC4yNXJlbTtcXG4gICAgdHJhbnNpdGlvbjogY29sb3IgLjE1cyBlYXNlLWluLW91dCxiYWNrZ3JvdW5kLWNvbG9yIC4xNXMgZWFzZS1pbi1vdXQsYm9yZGVyLWNvbG9yIC4xNXMgZWFzZS1pbi1vdXQsYm94LXNoYWRvdyAuMTVzIGVhc2UtaW4tb3V0O1xcblxcbn1cXG5idXR0b246aG92ZXJ7XFxuICAgIGNvbG9yOiAjZmZmO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMGQxMDE0O1xcbiAgICBib3JkZXItY29sb3I6ICMzNzNlNDc7XFxufVxcblxcblxcbkBtZWRpYSAobWF4LXdpZHRoOjUwMHB4KSB7XFxuICAgICNnYW1lYm9hcmRze1xcbiAgICAgICAgZGlzcGxheTogYmxvY2s7XFxuICAgICAgICBtYXJnaW4tbGVmdDogYXV0bztcXG4gICAgICAgIG1hcmdpbi1yaWdodDogYXV0bztcXG4gICAgfVxcbiAgICBib2R5e1xcbiAgICAgICAgbWFyZ2luOjA7XFxuICAgIH1cXG4gICAgI3BsYXllckhlYWRlciwjcGxheWVyR2FtZWJvYXJkLCNjb21wdXRlckhlYWRlciwjY29tcHV0ZXJHYW1lYm9hcmR7XFxuICAgICAgICBtYXJnaW46IGF1dG87XFxuICAgICAgICBtYXJnaW4tYm90dG9tOiAxMHB4O1xcbiAgICB9XFxuICAgICNwbGF5ZXJHYW1lYm9hcmQsI2NvbXB1dGVyR2FtZWJvYXJke1xcbiAgICAgICAgd2lkdGg6IDgwdnc7XFxuICAgICAgICBoZWlnaHQ6IDgwdnc7XFxuICAgIH1cXG59XCJdLFwic291cmNlUm9vdFwiOlwiXCJ9XSk7XG4vLyBFeHBvcnRzXG5leHBvcnQgZGVmYXVsdCBfX19DU1NfTE9BREVSX0VYUE9SVF9fXztcbiIsIlwidXNlIHN0cmljdFwiO1xuXG4vKlxuICBNSVQgTGljZW5zZSBodHRwOi8vd3d3Lm9wZW5zb3VyY2Uub3JnL2xpY2Vuc2VzL21pdC1saWNlbnNlLnBocFxuICBBdXRob3IgVG9iaWFzIEtvcHBlcnMgQHNva3JhXG4qL1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoY3NzV2l0aE1hcHBpbmdUb1N0cmluZykge1xuICB2YXIgbGlzdCA9IFtdOyAvLyByZXR1cm4gdGhlIGxpc3Qgb2YgbW9kdWxlcyBhcyBjc3Mgc3RyaW5nXG5cbiAgbGlzdC50b1N0cmluZyA9IGZ1bmN0aW9uIHRvU3RyaW5nKCkge1xuICAgIHJldHVybiB0aGlzLm1hcChmdW5jdGlvbiAoaXRlbSkge1xuICAgICAgdmFyIGNvbnRlbnQgPSBcIlwiO1xuICAgICAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBpdGVtWzVdICE9PSBcInVuZGVmaW5lZFwiO1xuXG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIik7XG4gICAgICB9XG5cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIik7XG4gICAgICB9XG5cbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpO1xuICAgICAgfVxuXG4gICAgICBjb250ZW50ICs9IGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcoaXRlbSk7XG5cbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cblxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cblxuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIGNvbnRlbnQ7XG4gICAgfSkuam9pbihcIlwiKTtcbiAgfTsgLy8gaW1wb3J0IGEgbGlzdCBvZiBtb2R1bGVzIGludG8gdGhlIGxpc3RcblxuXG4gIGxpc3QuaSA9IGZ1bmN0aW9uIGkobW9kdWxlcywgbWVkaWEsIGRlZHVwZSwgc3VwcG9ydHMsIGxheWVyKSB7XG4gICAgaWYgKHR5cGVvZiBtb2R1bGVzID09PSBcInN0cmluZ1wiKSB7XG4gICAgICBtb2R1bGVzID0gW1tudWxsLCBtb2R1bGVzLCB1bmRlZmluZWRdXTtcbiAgICB9XG5cbiAgICB2YXIgYWxyZWFkeUltcG9ydGVkTW9kdWxlcyA9IHt9O1xuXG4gICAgaWYgKGRlZHVwZSkge1xuICAgICAgZm9yICh2YXIgayA9IDA7IGsgPCB0aGlzLmxlbmd0aDsgaysrKSB7XG4gICAgICAgIHZhciBpZCA9IHRoaXNba11bMF07XG5cbiAgICAgICAgaWYgKGlkICE9IG51bGwpIHtcbiAgICAgICAgICBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2lkXSA9IHRydWU7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG5cbiAgICBmb3IgKHZhciBfayA9IDA7IF9rIDwgbW9kdWxlcy5sZW5ndGg7IF9rKyspIHtcbiAgICAgIHZhciBpdGVtID0gW10uY29uY2F0KG1vZHVsZXNbX2tdKTtcblxuICAgICAgaWYgKGRlZHVwZSAmJiBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2l0ZW1bMF1dKSB7XG4gICAgICAgIGNvbnRpbnVlO1xuICAgICAgfVxuXG4gICAgICBpZiAodHlwZW9mIGxheWVyICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgIGlmICh0eXBlb2YgaXRlbVs1XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBpZiAobWVkaWEpIHtcbiAgICAgICAgaWYgKCFpdGVtWzJdKSB7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBpZiAoc3VwcG9ydHMpIHtcbiAgICAgICAgaWYgKCFpdGVtWzRdKSB7XG4gICAgICAgICAgaXRlbVs0XSA9IFwiXCIuY29uY2F0KHN1cHBvcnRzKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNF0gPSBzdXBwb3J0cztcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBsaXN0LnB1c2goaXRlbSk7XG4gICAgfVxuICB9O1xuXG4gIHJldHVybiBsaXN0O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAodXJsLCBvcHRpb25zKSB7XG4gIGlmICghb3B0aW9ucykge1xuICAgIG9wdGlvbnMgPSB7fTtcbiAgfVxuXG4gIGlmICghdXJsKSB7XG4gICAgcmV0dXJuIHVybDtcbiAgfVxuXG4gIHVybCA9IFN0cmluZyh1cmwuX19lc01vZHVsZSA/IHVybC5kZWZhdWx0IDogdXJsKTsgLy8gSWYgdXJsIGlzIGFscmVhZHkgd3JhcHBlZCBpbiBxdW90ZXMsIHJlbW92ZSB0aGVtXG5cbiAgaWYgKC9eWydcIl0uKlsnXCJdJC8udGVzdCh1cmwpKSB7XG4gICAgdXJsID0gdXJsLnNsaWNlKDEsIC0xKTtcbiAgfVxuXG4gIGlmIChvcHRpb25zLmhhc2gpIHtcbiAgICB1cmwgKz0gb3B0aW9ucy5oYXNoO1xuICB9IC8vIFNob3VsZCB1cmwgYmUgd3JhcHBlZD9cbiAgLy8gU2VlIGh0dHBzOi8vZHJhZnRzLmNzc3dnLm9yZy9jc3MtdmFsdWVzLTMvI3VybHNcblxuXG4gIGlmICgvW1wiJygpIFxcdFxcbl18KCUyMCkvLnRlc3QodXJsKSB8fCBvcHRpb25zLm5lZWRRdW90ZXMpIHtcbiAgICByZXR1cm4gXCJcXFwiXCIuY29uY2F0KHVybC5yZXBsYWNlKC9cIi9nLCAnXFxcXFwiJykucmVwbGFjZSgvXFxuL2csIFwiXFxcXG5cIiksIFwiXFxcIlwiKTtcbiAgfVxuXG4gIHJldHVybiB1cmw7XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChpdGVtKSB7XG4gIHZhciBjb250ZW50ID0gaXRlbVsxXTtcbiAgdmFyIGNzc01hcHBpbmcgPSBpdGVtWzNdO1xuXG4gIGlmICghY3NzTWFwcGluZykge1xuICAgIHJldHVybiBjb250ZW50O1xuICB9XG5cbiAgaWYgKHR5cGVvZiBidG9hID09PSBcImZ1bmN0aW9uXCIpIHtcbiAgICB2YXIgYmFzZTY0ID0gYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoY3NzTWFwcGluZykpKSk7XG4gICAgdmFyIGRhdGEgPSBcInNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2NoYXJzZXQ9dXRmLTg7YmFzZTY0LFwiLmNvbmNhdChiYXNlNjQpO1xuICAgIHZhciBzb3VyY2VNYXBwaW5nID0gXCIvKiMgXCIuY29uY2F0KGRhdGEsIFwiICovXCIpO1xuICAgIHZhciBzb3VyY2VVUkxzID0gY3NzTWFwcGluZy5zb3VyY2VzLm1hcChmdW5jdGlvbiAoc291cmNlKSB7XG4gICAgICByZXR1cm4gXCIvKiMgc291cmNlVVJMPVwiLmNvbmNhdChjc3NNYXBwaW5nLnNvdXJjZVJvb3QgfHwgXCJcIikuY29uY2F0KHNvdXJjZSwgXCIgKi9cIik7XG4gICAgfSk7XG4gICAgcmV0dXJuIFtjb250ZW50XS5jb25jYXQoc291cmNlVVJMcykuY29uY2F0KFtzb3VyY2VNYXBwaW5nXSkuam9pbihcIlxcblwiKTtcbiAgfVxuXG4gIHJldHVybiBbY29udGVudF0uam9pbihcIlxcblwiKTtcbn07IiwiXG4gICAgICBpbXBvcnQgQVBJIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzXCI7XG4gICAgICBpbXBvcnQgZG9tQVBJIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRGbiBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanNcIjtcbiAgICAgIGltcG9ydCBzZXRBdHRyaWJ1dGVzIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0U3R5bGVFbGVtZW50IGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzXCI7XG4gICAgICBpbXBvcnQgc3R5bGVUYWdUcmFuc2Zvcm1GbiBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzXCI7XG4gICAgICBpbXBvcnQgY29udGVudCwgKiBhcyBuYW1lZEV4cG9ydCBmcm9tIFwiISEuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3N0eWxlLmNzc1wiO1xuICAgICAgXG4gICAgICBcblxudmFyIG9wdGlvbnMgPSB7fTtcblxub3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybSA9IHN0eWxlVGFnVHJhbnNmb3JtRm47XG5vcHRpb25zLnNldEF0dHJpYnV0ZXMgPSBzZXRBdHRyaWJ1dGVzO1xuXG4gICAgICBvcHRpb25zLmluc2VydCA9IGluc2VydEZuLmJpbmQobnVsbCwgXCJoZWFkXCIpO1xuICAgIFxub3B0aW9ucy5kb21BUEkgPSBkb21BUEk7XG5vcHRpb25zLmluc2VydFN0eWxlRWxlbWVudCA9IGluc2VydFN0eWxlRWxlbWVudDtcblxudmFyIHVwZGF0ZSA9IEFQSShjb250ZW50LCBvcHRpb25zKTtcblxuXG5cbmV4cG9ydCAqIGZyb20gXCIhIS4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc3R5bGUuY3NzXCI7XG4gICAgICAgZXhwb3J0IGRlZmF1bHQgY29udGVudCAmJiBjb250ZW50LmxvY2FscyA/IGNvbnRlbnQubG9jYWxzIDogdW5kZWZpbmVkO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBzdHlsZXNJbkRPTSA9IFtdO1xuXG5mdW5jdGlvbiBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKSB7XG4gIHZhciByZXN1bHQgPSAtMTtcblxuICBmb3IgKHZhciBpID0gMDsgaSA8IHN0eWxlc0luRE9NLmxlbmd0aDsgaSsrKSB7XG4gICAgaWYgKHN0eWxlc0luRE9NW2ldLmlkZW50aWZpZXIgPT09IGlkZW50aWZpZXIpIHtcbiAgICAgIHJlc3VsdCA9IGk7XG4gICAgICBicmVhaztcbiAgICB9XG4gIH1cblxuICByZXR1cm4gcmVzdWx0O1xufVxuXG5mdW5jdGlvbiBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucykge1xuICB2YXIgaWRDb3VudE1hcCA9IHt9O1xuICB2YXIgaWRlbnRpZmllcnMgPSBbXTtcblxuICBmb3IgKHZhciBpID0gMDsgaSA8IGxpc3QubGVuZ3RoOyBpKyspIHtcbiAgICB2YXIgaXRlbSA9IGxpc3RbaV07XG4gICAgdmFyIGlkID0gb3B0aW9ucy5iYXNlID8gaXRlbVswXSArIG9wdGlvbnMuYmFzZSA6IGl0ZW1bMF07XG4gICAgdmFyIGNvdW50ID0gaWRDb3VudE1hcFtpZF0gfHwgMDtcbiAgICB2YXIgaWRlbnRpZmllciA9IFwiXCIuY29uY2F0KGlkLCBcIiBcIikuY29uY2F0KGNvdW50KTtcbiAgICBpZENvdW50TWFwW2lkXSA9IGNvdW50ICsgMTtcbiAgICB2YXIgaW5kZXhCeUlkZW50aWZpZXIgPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICB2YXIgb2JqID0ge1xuICAgICAgY3NzOiBpdGVtWzFdLFxuICAgICAgbWVkaWE6IGl0ZW1bMl0sXG4gICAgICBzb3VyY2VNYXA6IGl0ZW1bM10sXG4gICAgICBzdXBwb3J0czogaXRlbVs0XSxcbiAgICAgIGxheWVyOiBpdGVtWzVdXG4gICAgfTtcblxuICAgIGlmIChpbmRleEJ5SWRlbnRpZmllciAhPT0gLTEpIHtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS5yZWZlcmVuY2VzKys7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0udXBkYXRlcihvYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICB2YXIgdXBkYXRlciA9IGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpO1xuICAgICAgb3B0aW9ucy5ieUluZGV4ID0gaTtcbiAgICAgIHN0eWxlc0luRE9NLnNwbGljZShpLCAwLCB7XG4gICAgICAgIGlkZW50aWZpZXI6IGlkZW50aWZpZXIsXG4gICAgICAgIHVwZGF0ZXI6IHVwZGF0ZXIsXG4gICAgICAgIHJlZmVyZW5jZXM6IDFcbiAgICAgIH0pO1xuICAgIH1cblxuICAgIGlkZW50aWZpZXJzLnB1c2goaWRlbnRpZmllcik7XG4gIH1cblxuICByZXR1cm4gaWRlbnRpZmllcnM7XG59XG5cbmZ1bmN0aW9uIGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpIHtcbiAgdmFyIGFwaSA9IG9wdGlvbnMuZG9tQVBJKG9wdGlvbnMpO1xuICBhcGkudXBkYXRlKG9iaik7XG5cbiAgdmFyIHVwZGF0ZXIgPSBmdW5jdGlvbiB1cGRhdGVyKG5ld09iaikge1xuICAgIGlmIChuZXdPYmopIHtcbiAgICAgIGlmIChuZXdPYmouY3NzID09PSBvYmouY3NzICYmIG5ld09iai5tZWRpYSA9PT0gb2JqLm1lZGlhICYmIG5ld09iai5zb3VyY2VNYXAgPT09IG9iai5zb3VyY2VNYXAgJiYgbmV3T2JqLnN1cHBvcnRzID09PSBvYmouc3VwcG9ydHMgJiYgbmV3T2JqLmxheWVyID09PSBvYmoubGF5ZXIpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuXG4gICAgICBhcGkudXBkYXRlKG9iaiA9IG5ld09iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIGFwaS5yZW1vdmUoKTtcbiAgICB9XG4gIH07XG5cbiAgcmV0dXJuIHVwZGF0ZXI7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGxpc3QsIG9wdGlvbnMpIHtcbiAgb3B0aW9ucyA9IG9wdGlvbnMgfHwge307XG4gIGxpc3QgPSBsaXN0IHx8IFtdO1xuICB2YXIgbGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpO1xuICByZXR1cm4gZnVuY3Rpb24gdXBkYXRlKG5ld0xpc3QpIHtcbiAgICBuZXdMaXN0ID0gbmV3TGlzdCB8fCBbXTtcblxuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgaSsrKSB7XG4gICAgICB2YXIgaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tpXTtcbiAgICAgIHZhciBpbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhdLnJlZmVyZW5jZXMtLTtcbiAgICB9XG5cbiAgICB2YXIgbmV3TGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKG5ld0xpc3QsIG9wdGlvbnMpO1xuXG4gICAgZm9yICh2YXIgX2kgPSAwOyBfaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IF9pKyspIHtcbiAgICAgIHZhciBfaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tfaV07XG5cbiAgICAgIHZhciBfaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihfaWRlbnRpZmllcik7XG5cbiAgICAgIGlmIChzdHlsZXNJbkRPTVtfaW5kZXhdLnJlZmVyZW5jZXMgPT09IDApIHtcbiAgICAgICAgc3R5bGVzSW5ET01bX2luZGV4XS51cGRhdGVyKCk7XG5cbiAgICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKF9pbmRleCwgMSk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgbGFzdElkZW50aWZpZXJzID0gbmV3TGFzdElkZW50aWZpZXJzO1xuICB9O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIG1lbW8gPSB7fTtcbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuXG5mdW5jdGlvbiBnZXRUYXJnZXQodGFyZ2V0KSB7XG4gIGlmICh0eXBlb2YgbWVtb1t0YXJnZXRdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgdmFyIHN0eWxlVGFyZ2V0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3Rvcih0YXJnZXQpOyAvLyBTcGVjaWFsIGNhc2UgdG8gcmV0dXJuIGhlYWQgb2YgaWZyYW1lIGluc3RlYWQgb2YgaWZyYW1lIGl0c2VsZlxuXG4gICAgaWYgKHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCAmJiBzdHlsZVRhcmdldCBpbnN0YW5jZW9mIHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCkge1xuICAgICAgdHJ5IHtcbiAgICAgICAgLy8gVGhpcyB3aWxsIHRocm93IGFuIGV4Y2VwdGlvbiBpZiBhY2Nlc3MgdG8gaWZyYW1lIGlzIGJsb2NrZWRcbiAgICAgICAgLy8gZHVlIHRvIGNyb3NzLW9yaWdpbiByZXN0cmljdGlvbnNcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBzdHlsZVRhcmdldC5jb250ZW50RG9jdW1lbnQuaGVhZDtcbiAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgLy8gaXN0YW5idWwgaWdub3JlIG5leHRcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBudWxsO1xuICAgICAgfVxuICAgIH1cblxuICAgIG1lbW9bdGFyZ2V0XSA9IHN0eWxlVGFyZ2V0O1xuICB9XG5cbiAgcmV0dXJuIG1lbW9bdGFyZ2V0XTtcbn1cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuXG5cbmZ1bmN0aW9uIGluc2VydEJ5U2VsZWN0b3IoaW5zZXJ0LCBzdHlsZSkge1xuICB2YXIgdGFyZ2V0ID0gZ2V0VGFyZ2V0KGluc2VydCk7XG5cbiAgaWYgKCF0YXJnZXQpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoXCJDb3VsZG4ndCBmaW5kIGEgc3R5bGUgdGFyZ2V0LiBUaGlzIHByb2JhYmx5IG1lYW5zIHRoYXQgdGhlIHZhbHVlIGZvciB0aGUgJ2luc2VydCcgcGFyYW1ldGVyIGlzIGludmFsaWQuXCIpO1xuICB9XG5cbiAgdGFyZ2V0LmFwcGVuZENoaWxkKHN0eWxlKTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRCeVNlbGVjdG9yOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKSB7XG4gIHZhciBlbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInN0eWxlXCIpO1xuICBvcHRpb25zLnNldEF0dHJpYnV0ZXMoZWxlbWVudCwgb3B0aW9ucy5hdHRyaWJ1dGVzKTtcbiAgb3B0aW9ucy5pbnNlcnQoZWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbiAgcmV0dXJuIGVsZW1lbnQ7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0U3R5bGVFbGVtZW50OyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcyhzdHlsZUVsZW1lbnQpIHtcbiAgdmFyIG5vbmNlID0gdHlwZW9mIF9fd2VicGFja19ub25jZV9fICE9PSBcInVuZGVmaW5lZFwiID8gX193ZWJwYWNrX25vbmNlX18gOiBudWxsO1xuXG4gIGlmIChub25jZSkge1xuICAgIHN0eWxlRWxlbWVudC5zZXRBdHRyaWJ1dGUoXCJub25jZVwiLCBub25jZSk7XG4gIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXM7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopIHtcbiAgdmFyIGNzcyA9IFwiXCI7XG5cbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KG9iai5zdXBwb3J0cywgXCIpIHtcIik7XG4gIH1cblxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwiQG1lZGlhIFwiLmNvbmNhdChvYmoubWVkaWEsIFwiIHtcIik7XG4gIH1cblxuICB2YXIgbmVlZExheWVyID0gdHlwZW9mIG9iai5sYXllciAhPT0gXCJ1bmRlZmluZWRcIjtcblxuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwiQGxheWVyXCIuY29uY2F0KG9iai5sYXllci5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KG9iai5sYXllcikgOiBcIlwiLCBcIiB7XCIpO1xuICB9XG5cbiAgY3NzICs9IG9iai5jc3M7XG5cbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuXG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cblxuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG5cbiAgdmFyIHNvdXJjZU1hcCA9IG9iai5zb3VyY2VNYXA7XG5cbiAgaWYgKHNvdXJjZU1hcCAmJiB0eXBlb2YgYnRvYSAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgIGNzcyArPSBcIlxcbi8qIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtiYXNlNjQsXCIuY29uY2F0KGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KHNvdXJjZU1hcCkpKSksIFwiICovXCIpO1xuICB9IC8vIEZvciBvbGQgSUVcblxuICAvKiBpc3RhbmJ1bCBpZ25vcmUgaWYgICovXG5cblxuICBvcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xufVxuXG5mdW5jdGlvbiByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KSB7XG4gIC8vIGlzdGFuYnVsIGlnbm9yZSBpZlxuICBpZiAoc3R5bGVFbGVtZW50LnBhcmVudE5vZGUgPT09IG51bGwpIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cblxuICBzdHlsZUVsZW1lbnQucGFyZW50Tm9kZS5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQpO1xufVxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5cblxuZnVuY3Rpb24gZG9tQVBJKG9wdGlvbnMpIHtcbiAgdmFyIHN0eWxlRWxlbWVudCA9IG9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpO1xuICByZXR1cm4ge1xuICAgIHVwZGF0ZTogZnVuY3Rpb24gdXBkYXRlKG9iaikge1xuICAgICAgYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopO1xuICAgIH0sXG4gICAgcmVtb3ZlOiBmdW5jdGlvbiByZW1vdmUoKSB7XG4gICAgICByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KTtcbiAgICB9XG4gIH07XG59XG5cbm1vZHVsZS5leHBvcnRzID0gZG9tQVBJOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50KSB7XG4gIGlmIChzdHlsZUVsZW1lbnQuc3R5bGVTaGVldCkge1xuICAgIHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0LmNzc1RleHQgPSBjc3M7XG4gIH0gZWxzZSB7XG4gICAgd2hpbGUgKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKSB7XG4gICAgICBzdHlsZUVsZW1lbnQucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpO1xuICAgIH1cblxuICAgIHN0eWxlRWxlbWVudC5hcHBlbmRDaGlsZChkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShjc3MpKTtcbiAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IHN0eWxlVGFnVHJhbnNmb3JtOyIsImNvbnN0IGNyZWF0ZUVsZW1lbnQgPSB7XG4gICAgY3JlYXRlU2VjdGlvbjogZnVuY3Rpb24oaWROYW1lKSB7XG4gICAgICAgIGxldCBzZWN0aW9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInNlY3Rpb25cIik7XG4gICAgICAgIHNlY3Rpb24uc2V0QXR0cmlidXRlKCdpZCcsaWROYW1lKTtcbiAgICAgICAgcmV0dXJuIHNlY3Rpb247XG4gICAgfSxcbiAgICBjcmVhdGVEaXY6IGZ1bmN0aW9uKGlkTmFtZSl7XG4gICAgICAgIGxldCBkaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgICAgICBkaXYuc2V0QXR0cmlidXRlKCdpZCcsaWROYW1lKTtcbiAgICAgICAgcmV0dXJuIGRpdjtcbiAgICB9LFxuICAgIGNyZWF0ZVBhcmE6IGZ1bmN0aW9uKHRleHQpe1xuICAgICAgICBsZXQgcGFyYSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJwXCIpO1xuICAgICAgICBwYXJhLnRleHRDb250ZW50ID0gdGV4dDtcbiAgICAgICAgcmV0dXJuIHBhcmE7XG4gICAgfSxcbiAgICBjcmVhdGVMaTogZnVuY3Rpb24odWwsYXJyKXtcbiAgICAgICAgZm9yKGxldCBpPTA7aTwgYXJyLmxlbmd0aDtpKyspe1xuICAgICAgICAgICAgbGV0IGxpID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImxpXCIpO1xuICAgICAgICAgICAgbGkuaW5uZXJIVE1MID0gYXJyW2ldO1xuICAgICAgICAgICAgdWwuYXBwZW5kQ2hpbGQobGkpXG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHVsO1xuICAgIH0sXG4gICAgY3JlYXRlSDogZnVuY3Rpb24obnVtLHRleHQpe1xuICAgICAgICBjb25zdCBoZWFkaW5nID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChgaCR7bnVtfWApO1xuICAgICAgICBoZWFkaW5nLmlubmVyVGV4dCA9IHRleHQ7XG4gICAgICAgIHJldHVybiBoZWFkaW5nXG4gICAgfVxufVxuY29uc3QgY3JlYXRlQ29udGFpbmVyID0gKCkgPT57XG4gICAgY29uc3QgbWFpbiA9IGNyZWF0ZUVsZW1lbnQuY3JlYXRlRGl2KCdtYWluQ29udGFpbmVyJyk7XG4gICAgZG9jdW1lbnQuYm9keS5hcHBlbmRDaGlsZChtYWluKTtcblxufVxuXG5jb25zdCBjcmVhdGVHYW1lQm9hcmRVSSA9IChwbGF5ZXIxLGNvbXB1dGVyMSkgPT4ge1xuICAgIGNvbnN0IG1haW4gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnbWFpbkNvbnRhaW5lcicpO1xuICAgIGNvbnN0IHRpdGxlID0gY3JlYXRlRWxlbWVudC5jcmVhdGVIKDEsXCJCYXR0bGVzaGlwXCIpO1xuICAgIG1haW4uYXBwZW5kQ2hpbGQodGl0bGUpO1xuICAgIGNvbnN0IGhlYWRlciA9IGNyZWF0ZUVsZW1lbnQuY3JlYXRlSCgxLFwiUGxhY2UgeW91ciBzdWJtYXJpbmUgYW55d2hlcmUgb24gdGhlIHBsYXllciBib2FyZFwiKTtcbiAgICBoZWFkZXIuc2V0QXR0cmlidXRlKCdpZCcsJ2hlYWRlcicpO1xuICAgIGNvbnN0IGdhbWVib2FyZHMgPSBjcmVhdGVFbGVtZW50LmNyZWF0ZURpdignZ2FtZWJvYXJkcycpO1xuICAgIGNvbnN0IHBsYXllckdhbWVib2FyZCA9IGNyZWF0ZUVsZW1lbnQuY3JlYXRlRGl2KCdwbGF5ZXJHYW1lYm9hcmQnKTtcbiAgICBjb25zdCBjb21wdXRlckdhbWVib2FyZCA9IGNyZWF0ZUVsZW1lbnQuY3JlYXRlRGl2KCdjb21wdXRlckdhbWVib2FyZCcpO1xuICAgIGNvbnN0IHBsYXllckhlYWRlciA9IGNyZWF0ZUVsZW1lbnQuY3JlYXRlSCgyLCdQbGF5ZXJcXCdzIEJvYXJkJyk7XG4gICAgY29uc3QgY29tcHV0ZXJIZWFkZXIgPSBjcmVhdGVFbGVtZW50LmNyZWF0ZUgoMiwnQ29tcHV0ZXJcXCdzIEJvYXJkJyk7XG4gICAgY29uc3Qgb3JpZW50YXRpb25CdG4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKTtcbiAgICBvcmllbnRhdGlvbkJ0bi5pbm5lclRleHQgPSAnSG9yaXpvbnRhbCdcbiAgICBvcmllbnRhdGlvbkJ0bi5zZXRBdHRyaWJ1dGUoJ2lkJywnb3JpZW50QnRuJylcbiAgICBjb25zdCByZXN0YXJ0QnRuID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJyk7XG4gICAgcmVzdGFydEJ0bi5zZXRBdHRyaWJ1dGUoJ2lkJywncmVzdGFydEJ0bicpO1xuICAgIHJlc3RhcnRCdG4udGV4dENvbnRlbnQgPSAnUmVzdGFydCdcbiAgICBwbGF5ZXJIZWFkZXIuc2V0QXR0cmlidXRlKCdpZCcsJ3BsYXllckhlYWRlcicpO1xuICAgIGNvbXB1dGVySGVhZGVyLnNldEF0dHJpYnV0ZSgnaWQnLCdjb21wdXRlckhlYWRlcicpO1xuICAgIGNvbnN0IGJ0bkNvbnRhaW5lciA9IGNyZWF0ZUVsZW1lbnQuY3JlYXRlRGl2KCdidG5Db250YWluZXInKTtcbiAgICBmb3IobGV0IGk9MDsgaTwocGxheWVyMS5sZW5ndGgpO2krKyl7XG4gICAgICAgIGZvcihsZXQgaj0wOyBqPChwbGF5ZXIxW2ldLmxlbmd0aCk7aisrKXtcbiAgICAgICAgICAgIGxldCBnYW1lQ2VsbCA9IGNyZWF0ZUVsZW1lbnQuY3JlYXRlRGl2KGAke2l9JHtqfWApXG4gICAgICAgICAgICBnYW1lQ2VsbC5jbGFzc0xpc3QuYWRkKFwiY2VsbFwiKTtcbiAgICAgICAgICAgIHBsYXllckdhbWVib2FyZC5hcHBlbmRDaGlsZChnYW1lQ2VsbCk7XG4gICAgICAgIH1cbiAgICB9XG4gICAgZm9yKGxldCBpPTA7IGk8KGNvbXB1dGVyMS5sZW5ndGgpO2krKyl7XG4gICAgICAgIGZvcihsZXQgaj0wOyBqPChjb21wdXRlcjFbaV0ubGVuZ3RoKTtqKyspe1xuICAgICAgICAgICAgbGV0IGdhbWVDZWxsID0gY3JlYXRlRWxlbWVudC5jcmVhdGVEaXYoYCR7aX0ke2p9Y29tcHV0ZXJgKVxuICAgICAgICAgICAgZ2FtZUNlbGwuY2xhc3NMaXN0LmFkZChcImNlbGxcIik7XG4gICAgICAgICAgICBjb21wdXRlckdhbWVib2FyZC5hcHBlbmRDaGlsZChnYW1lQ2VsbCk7XG4gICAgICAgIH1cbiAgICB9XG4gICAgbWFpbi5hcHBlbmRDaGlsZChoZWFkZXIpXG4gICAgYnRuQ29udGFpbmVyLmFwcGVuZChvcmllbnRhdGlvbkJ0bixyZXN0YXJ0QnRuKVxuICAgIG1haW4uYXBwZW5kQ2hpbGQoYnRuQ29udGFpbmVyKVxuICAgIG1haW4uYXBwZW5kQ2hpbGQoZ2FtZWJvYXJkcylcbiAgICBnYW1lYm9hcmRzLmFwcGVuZChwbGF5ZXJIZWFkZXIscGxheWVyR2FtZWJvYXJkLGNvbXB1dGVySGVhZGVyLGNvbXB1dGVyR2FtZWJvYXJkKVxufVxuXG5jb25zdCB1cGRhdGVIZWFkZXIgPSAodGV4dCkgPT4ge1xuICAgIGNvbnN0IGhlYWRlciA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdoZWFkZXInKTtcbiAgICBoZWFkZXIudGV4dENvbnRlbnQgPSB0ZXh0O1xufVxuXG5jb25zdCByZXN0YXJ0VUkgPSAoKSA9PiB7XG4gICAgY29uc3QgbWFpbiA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdtYWluQ29udGFpbmVyJyk7XG4gICAgbWFpbi5pbm5lckhUTUwgPScnXG59XG5leHBvcnQge2NyZWF0ZUVsZW1lbnQsY3JlYXRlQ29udGFpbmVyLGNyZWF0ZUdhbWVCb2FyZFVJLHVwZGF0ZUhlYWRlciwgcmVzdGFydFVJfTsiLCJcblxuLy9GYWN0b3J5IGZ1bmN0aW9uIHRvIGNyZWF0ZSB0aGUgc2hpcHNcbmNvbnN0IHNoaXBGYWN0b3J5ID0gKG5hbWUsbGVuZ3RoKSA9PiB7XG4gICAgLy9jcmVhdGVzIGFuIGFycmF5IHRoZSBzaXplIG9mIHRoZSBzaGlwcyBsZW5ndGggdG8ga2VlcCB0cmFjayBvZiBoaXRzLlxuICAgIGNvbnN0IHNoaXBIZWFsdGggPSBbXTtcbiAgICBsZXQgaXNQbGFjZWQgPSBmYWxzZTtcbiAgICBjb25zdCBpc1BsYWNlZFNldHRlciA9IChhcmcpID0+IGlzUGxhY2VkID0gYXJnO1xuICAgIGNvbnN0IGlzUGxhY2VkR2V0dGVyID0gKCkgPT4gaXNQbGFjZWQ7XG4gICAgLy91cGRhdGVzIHRoZSBzaGlwSGVhbHRoIGFycmF5IHdpdGggdGhlIHBvc2l0aW9uIHRoZSBzaGlwIGdvdCBoaXQgaW5cbiAgICBjb25zdCBoaXQgPSAoKSA9PiB7XG4gICAgICAgIHNoaXBIZWFsdGgucHVzaCgneCcpXG4gICAgICAgICAgICByZXR1cm4gc2hpcEhlYWx0aDtcbiAgICB9XG4gICAgLy9pZiBldmVyeSB2YWx1ZSBpbiB0aGUgc2hpcEhlYWx0aCBhcnJheSBpcyBoaXQgdGhpcyBmdW5jdGlvbiByZXR1cm5zIHRoYXQgdGhlIHNoaXAgaXMgc3Vua1xuICAgIGNvbnN0IGlzU3VuayA9ICgpID0+IHtcbiAgICAgICAgaWYoc2hpcEhlYWx0aC5sZW5ndGggPT09IGxlbmd0aCl7XG4gICAgICAgICAgICByZXR1cm4gdHJ1ZVxuICAgICAgICB9XG4gICAgICAgIHJldHVybiBmYWxzZVxuICAgIH1cbiAgICByZXR1cm4ge25hbWUsbGVuZ3RoLGhpdCwgaXNTdW5rLGlzUGxhY2VkR2V0dGVyLGlzUGxhY2VkU2V0dGVyfVxufVxuXG4vL0ZhY3RvcnkgZnVuY3Rpb24gdG8gY3JlYXRlIGdhbWUgYm9hcmRcbmNvbnN0IGdhbWVCb2FyZEZhY3RvcnkgPSAoKSA9PntcbiAgICBsZXQgZ2FtZUFycmF5ID0gW107XG4gICAgLy9jcmVhdGUgZW1wdHkgYXJyYXkgdG8gaW5pdGlhbGl6ZSB0aGUgZ2FtZVxuICAgIGNvbnN0IHN0YXJ0R2FtZSA9ICgpID0+e1xuICAgICAgICAgICAgZ2FtZUFycmF5ID0gW1xuICAgICAgICAgICAgWycnLCcnLCcnLCcnLCcnLCcnLCcnLCcnLCcnLCcnXSxcbiAgICAgICAgICAgIFsnJywnJywnJywnJywnJywnJywnJywnJywnJywnJ10sXG4gICAgICAgICAgICBbJycsJycsJycsJycsJycsJycsJycsJycsJycsJyddLFxuICAgICAgICAgICAgWycnLCcnLCcnLCcnLCcnLCcnLCcnLCcnLCcnLCcnXSxcbiAgICAgICAgICAgIFsnJywnJywnJywnJywnJywnJywnJywnJywnJywnJ10sXG4gICAgICAgICAgICBbJycsJycsJycsJycsJycsJycsJycsJycsJycsJyddLFxuICAgICAgICAgICAgWycnLCcnLCcnLCcnLCcnLCcnLCcnLCcnLCcnLCcnXSxcbiAgICAgICAgICAgIFsnJywnJywnJywnJywnJywnJywnJywnJywnJywnJ10sXG4gICAgICAgICAgICBbJycsJycsJycsJycsJycsJycsJycsJycsJycsJyddLFxuICAgICAgICAgICAgWycnLCcnLCcnLCcnLCcnLCcnLCcnLCcnLCcnLCcnXVxuICAgICAgICBdXG5cbiAgICB9XG4gICAgLy9saXN0IG9mIHNoaXBzIHRoYXQgYXJlIHN0aWxsIGFsaXZlXG4gICAgbGV0IHNoaXBzQWxpdmUgPSBbXTtcbiAgICBjb25zdCBzaGlwc0FsaXZlR2V0dGVyID0gKCkgPT4gc2hpcHNBbGl2ZTtcbiAgICAvL3BsYWNlcyBzaGlwIGluIHJvdyBhbmQgY29sdW1uIGFuZCBvcmllbnRzIGhvdyB0aGUgcGxheWVyIHdhbnRzIFxuICAgIGNvbnN0IHBsYWNlID0gKHNoaXAscm93LCBjb2x1bW4sIG9yaWVudCkgPT4ge1xuICAgICAgICAvL2NoZWNrcyBpZiB3aGVyZSB0aGUgc2hpcCBpcyB0byBiZSBwbGFjZWQgaXMgZW1wdHlcbiAgICAgICAgY29uc3QgY2FuUGxhY2UgPSAoKSA9PiB7XG4gICAgICAgICAgICBsZXQgZW1wdHkgPSB0cnVlXG4gICAgICAgICAgICAvL2NoZWNraW5nIGlmIHNoaXAgaXMgYWxyZWFkeSBpbiB0aGUgc3BvdCBuZXcgc2hpcCBpcyB0byBiZSBwbGFjZWRcbiAgICAgICAgICAgIGlmKG9yaWVudCA9PT0gJ2hvcml6b250YWwnKXtcbiAgICAgICAgICAgICAgICBmb3IobGV0IGkgPSBjb2x1bW47IGk8IChjb2x1bW4rc2hpcC5sZW5ndGgpOyBpKyspe1xuICAgICAgICAgICAgICAgICAgICBpZihnYW1lQXJyYXlbcm93XVtpXSAhPT0gJycpe1xuICAgICAgICAgICAgICAgICAgICAgICAgZW1wdHkgPSBmYWxzZVxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSAgXG4gICAgICAgICAgICBlbHNlIGlmKG9yaWVudCA9PT0gJ3ZlcnRpY2FsJyl7XG4gICAgICAgICAgICAgICAgZm9yKGxldCBpID0gcm93OyBpPCAocm93K3NoaXAubGVuZ3RoKTsgaSsrKXtcbiAgICAgICAgICAgICAgICAgICAgaWYoZ2FtZUFycmF5W2ldW2NvbHVtbl0gIT09ICcnKXtcbiAgICAgICAgICAgICAgICAgICAgICAgIGVtcHR5ID0gZmFsc2VcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0gIFxuICAgICAgICAgICAgcmV0dXJuIGVtcHR5XG4gICAgICAgIH07XG4gICAgICAgIC8vaG9yaXpvbnRhbCBvcnJpZW50YXRpb24gcGxhY2VtZW50XG4gICAgICAgIGlmKG9yaWVudCA9PT0gJ2hvcml6b250YWwnICAmJiBjYW5QbGFjZSgpKSB7XG4gICAgICAgICAgICBmb3IobGV0IGkgPSBjb2x1bW47IGk8IChjb2x1bW4rc2hpcC5sZW5ndGgpOyBpKyspe1xuICAgICAgICAgICAgICAgIGdhbWVBcnJheVtyb3ddW2ldID0gc2hpcDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHNoaXBzQWxpdmUucHVzaChzaGlwLm5hbWUpXG4gICAgICAgIH1cblxuICAgICAgICAvL3ZlcnRpY2FsIG9ycmllbnRhdGlvbnMgcGxhY2VtZW50XG4gICAgICAgIGVsc2UgaWYob3JpZW50ID09PSAndmVydGljYWwnICYmIGNhblBsYWNlKCkpIHtcbiAgICAgICAgICAgIGZvcihsZXQgaSA9IHJvdzsgaTwoKHNoaXAubGVuZ3RoICsgcm93KSk7aSsrKXtcbiAgICAgICAgICAgICAgICBnYW1lQXJyYXlbaV1bY29sdW1uXSA9IHNoaXA7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBzaGlwc0FsaXZlLnB1c2goc2hpcC5uYW1lKVxuICAgICAgICB9XG4gICAgICAgIHJldHVybiBnYW1lQXJyYXk7XG4gICAgfVxuXG4gICAgLy9SZWNpZXZlcyBjb29yZGluYXRlcyBmcm9tIHRoZSBib2FyZCB0byByZWNpZXZlIGFuIGF0dGFja1xuICAgIGNvbnN0IHJlY2lldmVBdHRhY2sgPSAocm93LGNvbHVtbikgPT57XG4gICAgICAgIC8vSWYgdGhlIGdhbWVBcnJheSBpcyBlbXB0eSBwbGFjZSBhIHNtYWxsIHggZm9yIGEgbWlzc1xuICAgICAgICBpZihnYW1lQXJyYXlbcm93XVtjb2x1bW5dID09PSAnJyl7XG4gICAgICAgICAgICBnYW1lQXJyYXlbcm93XVtjb2x1bW5dID0gJ3gnXG4gICAgICAgIH1cbiAgICAgICAgZWxzZXtcbiAgICAgICAgICAgIC8vaWYgdGhlcmUgaXMgYSBzaGlwIGF0IHRoZSBjb29yZGluYXRlcyBoaXQgdGhlIGJvYXJkIGFuZCBwbGFjZSBhIGxhcmdlIFggdG8gc2hvdyB0aGVyZSBpcyBhIGhpdFxuICAgICAgICAgICAgZ2FtZUFycmF5W3Jvd11bY29sdW1uXS5oaXQoKTtcbiAgICAgICAgICAgIC8vaWYgaXNTdW5rIHJldHVybnMgdHJ1ZSB0aGF0IHNoaXAgZ2V0cyBwb3BwZWQgZnJvbSB0aGUgc2hpcHNBbGl2ZSBhcnJheS5cbiAgICAgICAgICAgIGlmKGdhbWVBcnJheVtyb3ddW2NvbHVtbl0uaXNTdW5rKCkpe1xuICAgICAgICAgICAgICAgIHNoaXBzQWxpdmUucG9wKGdhbWVBcnJheVtyb3ddW2NvbHVtbl0ubmFtZSlcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGdhbWVBcnJheVtyb3ddW2NvbHVtbl0gPSAnWCc7XG4gICAgICAgICAgICBcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gZ2FtZUFycmF5XG4gICAgfVxuICAgIFxuICAgIGNvbnN0IGFycmF5R2V0dGVyID0gKCkgPT4gZ2FtZUFycmF5O1xuICAgIHJldHVybntzdGFydEdhbWUsIHBsYWNlLCByZWNpZXZlQXR0YWNrLGFycmF5R2V0dGVyLCBzaGlwc0FsaXZlR2V0dGVyfVxufVxuXG4vL1BsYXllciBmYWN0b3IgRnVuY3Rpb25cbmNvbnN0IHBsYXllciA9ICgpID0+e1xuICAgIC8vY3JlYXRlcyBhIGJvYXJkIGZvciB0aGUgcGxheWVyXG4gICAgbGV0IHBsYXllckJvYXJkID0gZ2FtZUJvYXJkRmFjdG9yeSgpO1xuICAgIC8vSW5pdGlhbGl6ZXMgdGhlIGJvYXJkIGZvciB0aGUgcGxheWVyXG4gICAgcGxheWVyQm9hcmQuc3RhcnRHYW1lKCk7XG4gICAgLy9IZWxwZXIgZnVuY3Rpb24gZm9yIHRoZSBwbGFjZSBtZXRob2RcbiAgICBjb25zdCBwbGF5ZXJQbGFjZSA9IChzaGlwLHJvdyxjb2x1bW4sb3JpZW50KSA9PntcbiAgICAgICAgcmV0dXJuIHBsYXllckJvYXJkLnBsYWNlKHNoaXAscm93LGNvbHVtbixvcmllbnQpO1xuICAgIH1cblxuICAgIC8vcmVjaWV2ZXMgYW4gYXR0YWNrIGFuZCB0aGVuIHNlbmRzIHRoYXQgYXR0YWNrIHRvIHRoZSBjb21wdXRlckJvYXJkXG4gICAgY29uc3QgcGxheWVyQXR0YWNrID0gKGNvbXB1dGVyQm9hcmQsZSkgPT4ge1xuICAgICAgICBjb25zdCByb3cgPSBwYXJzZUludChlLnRhcmdldC5pZFswXSlcbiAgICAgICAgY29uc3QgY29sID0gcGFyc2VJbnQoZS50YXJnZXQuaWRbMV0pXG4gICAgICAgIGNvbXB1dGVyQm9hcmQucmVjaWV2ZUF0dGFjayhyb3csY29sKTtcbiAgICAgICAgcmV0dXJuIHRydWVcbiAgICB9ICAgXG4gICAgcmV0dXJuIHtwbGF5ZXJCb2FyZCxwbGF5ZXJQbGFjZSxwbGF5ZXJBdHRhY2t9XG59XG5cbi8vY29tcHV0ZXIgZmFjdG9yeSBmdW5jdGlvblxuY29uc3QgY29tcHV0ZXIgPSAoKSA9PiB7XG4gICAgLy9jcmVhdGVzIGEgYm9hcmQgZm9yIHRoZSBjb21wdXRlclxuICAgIGxldCBjb21wdXRlckJvYXJkID0gZ2FtZUJvYXJkRmFjdG9yeSgpO1xuICAgIC8vSW5pdGlhbGl6ZXMgdGhlIGJvYXJkIGZvciB0aGUgY29tcHV0ZXJcbiAgICBjb21wdXRlckJvYXJkLnN0YXJ0R2FtZSgpO1xuICAgIC8vU2VsZWN0cyBhIHJhbmRvbSBjb29yZGluYXRlLlxuICAgIGNvbnN0IGNvbXB1dGVyUmFuZG9tQXR0YWNrID0gKHBsYXllckJvYXJkKSA9PntcbiAgICAgICAgbGV0IHJhbmRvbUNob2ljZSA9ICgpID0+IHtcbiAgICAgICAgICAgIGxldCByYW5kb21Sb3cgPSBNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKjEwKVxuICAgICAgICAgICAgbGV0IHJhbmRvbUNvbHVtbiA9IE1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIDEwKVxuICAgICAgICAgICAgcmV0dXJuIFtyYW5kb21Sb3csIHJhbmRvbUNvbHVtbl1cbiAgICAgICAgfVxuICAgICAgICBsZXQgcmFuZG9tPSByYW5kb21DaG9pY2UoKTtcbiAgICAgICAgbGV0IHJvdyA9IHJhbmRvbVswXTtcbiAgICAgICAgbGV0IGNvbHVtbiA9IHJhbmRvbVsxXTtcbiAgICAgICAgaWYoKHBsYXllckJvYXJkLmFycmF5R2V0dGVyKClbcm93XVtjb2x1bW5dID09PSAneCcpIHx8IChwbGF5ZXJCb2FyZC5hcnJheUdldHRlcigpW3Jvd11bY29sdW1uXSA9PT0gJ1gnKSl7XG4gICAgICAgICAgICBjb21wdXRlclJhbmRvbUF0dGFjayhwbGF5ZXJCb2FyZClcbiAgICAgICAgfVxuICAgICAgICBlbHNle1xuXG4gICAgICAgICAgICBwbGF5ZXJCb2FyZC5yZWNpZXZlQXR0YWNrKHJvdyxjb2x1bW4pO1xuICAgICAgICAgICAgcmV0dXJuIHBsYXllckJvYXJkLmFycmF5R2V0dGVyKCk7XG4gICAgICAgIH1cblxuICAgIH1cbiAgICByZXR1cm4ge2NvbXB1dGVyQm9hcmQsY29tcHV0ZXJSYW5kb21BdHRhY2t9XG59XG5cblxuZXhwb3J0IHtzaGlwRmFjdG9yeSxnYW1lQm9hcmRGYWN0b3J5LCBwbGF5ZXIsY29tcHV0ZXJ9IiwiLy8gaW1wb3J0IHsgdXBkYXRlR2FtZWJvYXJkIH0gZnJvbSBcIi4vaW5kZXhcIjtcbmltcG9ydCB7dXBkYXRlSGVhZGVyfSBmcm9tIFwiLi9kb21NYW5pcFwiXG4vLyBDb2RlIHRvIHZpc3VhbGl6ZSBzaGlwIHBsYWNlbWVudFxuY29uc3QgdXBkYXRlR2FtZWJvYXJkID0gKHBsYXllcjEsY29tcHV0ZXIxKSA9PntcbiAgICBmb3IobGV0IGk9MDsgaTwocGxheWVyMS5wbGF5ZXJCb2FyZC5hcnJheUdldHRlcigpLmxlbmd0aCk7aSsrKXtcbiAgICAgICAgZm9yKGxldCBqPTA7IGo8KHBsYXllcjEucGxheWVyQm9hcmQuYXJyYXlHZXR0ZXIoKVtpXS5sZW5ndGgpO2orKyl7XG4gICAgICAgICAgICBcbiAgICAgICAgICAgIGxldCBnYW1lQ2VsbCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKGAke2l9JHtqfWApXG4gICAgICAgICAgICBpZih0eXBlb2YgcGxheWVyMS5wbGF5ZXJCb2FyZC5hcnJheUdldHRlcigpW2ldW2pdID09PSAnb2JqZWN0Jyl7XG4gICAgICAgICAgICAgICAgbGV0IG5hbWUgPSBwbGF5ZXIxLnBsYXllckJvYXJkLmFycmF5R2V0dGVyKClbaV1bal0ubmFtZVxuICAgICAgICAgICAgICAgIGdhbWVDZWxsLmNsYXNzTGlzdC5hZGQobmFtZSlcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2UgaWYocGxheWVyMS5wbGF5ZXJCb2FyZC5hcnJheUdldHRlcigpW2ldW2pdID09PSAneCcpe1xuICAgICAgICAgICAgICAgIGdhbWVDZWxsLmNsYXNzTGlzdC5hZGQoJ2VtcHR5JylcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2UgaWYocGxheWVyMS5wbGF5ZXJCb2FyZC5hcnJheUdldHRlcigpW2ldW2pdID09PSAnWCcpe1xuICAgICAgICAgICAgICAgIGdhbWVDZWxsLmNsYXNzTGlzdC5hZGQoJ2hpdCcpXG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG4gICAgZm9yKGxldCBpPTA7IGk8KGNvbXB1dGVyMS5jb21wdXRlckJvYXJkLmFycmF5R2V0dGVyKCkubGVuZ3RoKTtpKyspe1xuICAgICAgICBmb3IobGV0IGo9MDsgajwoY29tcHV0ZXIxLmNvbXB1dGVyQm9hcmQuYXJyYXlHZXR0ZXIoKVtpXS5sZW5ndGgpO2orKyl7XG4gICAgICAgICAgICBsZXQgZ2FtZUNlbGwgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChgJHtpfSR7an1jb21wdXRlcmApXG4gICAgICAgICAgICBpZihjb21wdXRlcjEuY29tcHV0ZXJCb2FyZC5hcnJheUdldHRlcigpW2ldW2pdID09PSAneCcpe1xuICAgICAgICAgICAgICAgIGdhbWVDZWxsLmNsYXNzTGlzdC5hZGQoJ2VtcHR5JylcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2UgaWYoY29tcHV0ZXIxLmNvbXB1dGVyQm9hcmQuYXJyYXlHZXR0ZXIoKVtpXVtqXSA9PT0gJ1gnKXtcbiAgICAgICAgICAgICAgICBnYW1lQ2VsbC5jbGFzc0xpc3QuYWRkKCdoaXQnKVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxufTtcbmxldCBjdXJyZW50U2hpcDtcbi8vcGxheWVySG92ZXIgc2hvd3MgYW4gb3V0bGluZSBvZiB0aGUgc2hpcCB0byBiZSBwbGFjZWRcbmNvbnN0IHBsYXllckhvdmVyID0gKGV2ZW50KSA9PiB7XG4gICAgbGV0IGJlZ2luSW5kZXggPSBwYXJzZUludChldmVudC50YXJnZXQuaWQpO1xuICAgIGxldCBvcmllbnRhdGlvbkJ0biA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdvcmllbnRCdG4nKTtcbiAgICAvL091dGxpbmUgaWYgaXQgaXMgSG9yaXpvbnRhbFxuICAgIGlmKG9yaWVudGF0aW9uQnRuLnRleHRDb250ZW50ID09PSAnSG9yaXpvbnRhbCcpe1xuICAgICAgICAvL0RldGVybWluZXMgaWYgdGhlIG91dGxpbmUgd291bGQgYmUgb3V0c2lkZSBvZiB0aGUgYWxsb3dhYmxlIHJhbmdlXG4gICAgICAgIGlmKGJlZ2luSW5kZXglMTA+KGJlZ2luSW5kZXgrY3VycmVudFNoaXAubGVuZ3RoKSUxMCAmJiAoYmVnaW5JbmRleCtjdXJyZW50U2hpcC5sZW5ndGgpJTEwICE9PSAwKXtcbiAgICAgICAgfVxuICAgICAgICBlbHNle1xuICAgICAgICAgICAgLy9pbnRlcmF0ZXMgdGhyb3VnaCB0aGUgc2hpcCBsZW5ndGggdG8gb3V0bGluZSB0aGUgY29ycmVjdCBsZW5ndGhcbiAgICAgICAgICAgIGZvcihsZXQgaSA9IDA7IGk8Y3VycmVudFNoaXAubGVuZ3RoO2krKyl7XG4gICAgICAgICAgICAgICAgbGV0IGluZGV4ID0gYmVnaW5JbmRleCArIGk7XG4gICAgICAgICAgICAgICAgLy9pbmRleHMgdW5kZXIgMTAgYmVnaW4gd2l0aCBhIDAgc28gd2UgbmVlZCB0byBhZGQgYSBzdHJpbmcgJzAnIHRvIHRoZSBpbmRleFxuICAgICAgICAgICAgICAgIGlmKGluZGV4IDwgMTApe1xuICAgICAgICAgICAgICAgICAgICBpbmRleCA9ICcwJyArIGluZGV4O1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAvL2dldHMgdGhlIGNvcnJlY3QgY2VsbHMgdG8gc2VsZWN0XG4gICAgICAgICAgICAgICAgbGV0IGN1cnJlbnRUYXIgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChgJHtpbmRleH1gKTtcbiAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICBjdXJyZW50VGFyLmNsYXNzTGlzdC5hZGQoJ3NlbGVjdGVkJyk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG4gICAgLy9zYW1lIGFzIGFib3ZlIGJ1dCBldmVyeXRoaW5nIGlzIG11bHRpcGxpZWQgYnkgMTAgdG8gbWFrZSBpdCB3b3JrIGZvciB2ZXJ0aWNhbCBwbGFjZW1lbnRcbiAgICBlbHNle1xuICAgICAgICBjb25zb2xlLmxvZyhiZWdpbkluZGV4ICsgY3VycmVudFNoaXAubGVuZ3RoKjEwKVxuICAgICAgICBpZigoYmVnaW5JbmRleCArIGN1cnJlbnRTaGlwLmxlbmd0aCoxMCk+MTEwKXtcbiAgICAgICAgfVxuICAgICAgICBlbHNle1xuICAgICAgICAgICAgZm9yKGxldCBpID0gMDsgaTxjdXJyZW50U2hpcC5sZW5ndGgqMTA7aSs9MTApe1xuICAgICAgICAgICAgICAgIGxldCBpbmRleCA9IGJlZ2luSW5kZXggKyBpO1xuICAgICAgICAgICAgICAgIGlmKGluZGV4IDwgMTApe1xuICAgICAgICAgICAgICAgICAgICBpbmRleCA9ICcwJyArIGluZGV4O1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBsZXQgY3VycmVudFRhciA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKGAke2luZGV4fWApO1xuICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgIGN1cnJlbnRUYXIuY2xhc3NMaXN0LmFkZCgnc2VsZWN0ZWQnKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cblxufVxuLy9jaGFuZ2VzIHRoZSBvcmllbnQgYnV0dG9uIFxuY29uc3Qgb3JpZW50QnRuID0gKCkgPT4ge1xuICAgIGNvbnNvbGUubG9nKCdvcmllbnQnKVxuICAgIGxldCBvcmllbnRhdGlvbkJ0biA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdvcmllbnRCdG4nKTtcbiAgICBsZXQgcGxheWVyQm9hcmQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgncGxheWVyR2FtZWJvYXJkJyk7XG4gICAgLy9jaGFuZ2VzIHRleHQgd2hlbiBjbGlja2VkXG4gICAgaWYob3JpZW50YXRpb25CdG4udGV4dENvbnRlbnQgPT09ICdIb3Jpem9udGFsJyl7XG4gICAgICAgIG9yaWVudGF0aW9uQnRuLnRleHRDb250ZW50ID0gJ1ZlcnRpY2FsJztcbiAgICB9XG4gICAgZWxzZXtcbiAgICAgICAgb3JpZW50YXRpb25CdG4udGV4dENvbnRlbnQgPSAnSG9yaXpvbnRhbCc7XG4gICAgfVxuICAgIC8vNCBsaW5lcyBiZWxvdyByZW1vdmUgYW5kIGFkZCBsaXN0ZW5lcnMgc28gdGhleSB1cGRhdGUgdGhlIG9yaWVudGF0aW9uLlxuICAgIHBsYXllckJvYXJkLnJlbW92ZUV2ZW50TGlzdGVuZXIoJ21vdXNlb3V0JyxwbGF5ZXJFeGl0KTtcbiAgICBwbGF5ZXJCb2FyZC5yZW1vdmVFdmVudExpc3RlbmVyKCdtb3VzZW92ZXInLHBsYXllckhvdmVyKTtcbiAgICBwbGF5ZXJCb2FyZC5hZGRFdmVudExpc3RlbmVyKCdtb3VzZW92ZXInLHBsYXllckhvdmVyKTtcbiAgICBwbGF5ZXJCb2FyZC5hZGRFdmVudExpc3RlbmVyKCdtb3VzZW91dCcscGxheWVyRXhpdCk7XG4gICAgXG59XG4vLyBDb2RlIHRvIGRlbGV0ZSB0aGUgc2hpcCB2aXN1YWxpemF0aW9uXG5jb25zdCBwbGF5ZXJFeGl0ID0gKGV2ZW50KSA9PiB7XG4gICAgbGV0IGJlZ2luSW5kZXggPSBwYXJzZUludChldmVudC50YXJnZXQuaWQpO1xuICAgIGxldCBvcmllbnRhdGlvbkJ0biA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdvcmllbnRCdG4nKTtcbiAgICBpZihvcmllbnRhdGlvbkJ0bi50ZXh0Q29udGVudCA9PT0gJ0hvcml6b250YWwnKXtcbiAgICAgICAgZm9yKGxldCBpID0gMDsgaTxjdXJyZW50U2hpcC5sZW5ndGg7aSsrKXtcbiAgICAgICAgICAgIGxldCBpbmRleCA9IGJlZ2luSW5kZXggKyBpO1xuICAgICAgICAgICAgXG4gICAgICAgICAgICBpZihpbmRleCA8IDEwKXtcbiAgICAgICAgICAgICAgICBpbmRleCA9ICcwJyArIGluZGV4XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBsZXQgY3VycmVudFRhciA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKGAke2luZGV4fWApO1xuICAgICAgICAgICAgXG4gICAgICAgICAgICBjdXJyZW50VGFyLmNsYXNzTGlzdC5yZW1vdmUoJ3NlbGVjdGVkJyk7XG4gICAgICAgIH1cbiAgICB9XG4gICAgZWxzZXtcbiAgICAgICAgZm9yKGxldCBpID0gMDsgaTxjdXJyZW50U2hpcC5sZW5ndGgqMTA7aSs9MTApe1xuICAgICAgICAgICAgbGV0IGluZGV4ID0gYmVnaW5JbmRleCArIGk7XG4gICAgICAgICAgICBcbiAgICAgICAgICAgIGlmKGluZGV4IDwgMTApe1xuICAgICAgICAgICAgICAgIGluZGV4ID0gJzAnICsgaW5kZXhcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhpbmRleCk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBsZXQgY3VycmVudFRhciA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKGAke2luZGV4fWApO1xuICAgICAgICAgICAgXG4gICAgICAgICAgICBjdXJyZW50VGFyLmNsYXNzTGlzdC5yZW1vdmUoJ3NlbGVjdGVkJyk7XG4gICAgICAgIH1cbiAgICB9XG5cbn1cblxuLy9QbGFjZXMgc2hpcFxuY29uc3QgdXNlclBsYWNlID0gKHNoaXBzLHBsYXllcixjb21wdXRlcixzaGlwKSA9PiB7XG4gICAgY29uc3QgcGxheWVyQm9hcmQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgncGxheWVyR2FtZWJvYXJkJyk7XG4gICAgY29uc3Qgb3JpZW50YXRpb25CdG4gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnb3JpZW50QnRuJyk7XG4gICAgY3VycmVudFNoaXAgPSBzaGlwO1xuXG4gICAgcGxheWVyQm9hcmQucmVtb3ZlRXZlbnRMaXN0ZW5lcignbW91c2VvdXQnLHBsYXllckV4aXQpO1xuICAgIHBsYXllckJvYXJkLnJlbW92ZUV2ZW50TGlzdGVuZXIoJ21vdXNlb3ZlcicscGxheWVySG92ZXIpO1xuICAgIHBsYXllckJvYXJkLmFkZEV2ZW50TGlzdGVuZXIoJ21vdXNlb3ZlcicscGxheWVySG92ZXIpO1xuICAgIHBsYXllckJvYXJkLmFkZEV2ZW50TGlzdGVuZXIoJ21vdXNlb3V0JyxwbGF5ZXJFeGl0KTtcbiAgICBvcmllbnRhdGlvbkJ0bi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIG9yaWVudEJ0bik7XG5cbiAgICBwbGF5ZXJCb2FyZC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsZnVuY3Rpb24oZXZlbnQpe1xuICAgICAgICBsZXQgZWxlbWVudCA9IGV2ZW50LnRhcmdldC5pZDtcbiAgICAgICAgcGxheWVyLnBsYXllclBsYWNlKHNoaXAscGFyc2VJbnQoZWxlbWVudFswXSkscGFyc2VJbnQoZWxlbWVudFsxXSksb3JpZW50YXRpb25CdG4udGV4dENvbnRlbnQudG9Mb3dlckNhc2UoKSk7XG4gICAgICAgIHVwZGF0ZUdhbWVib2FyZChwbGF5ZXIsY29tcHV0ZXIpO1xuICAgICAgICBzaGlwLmlzUGxhY2VkU2V0dGVyKHRydWUpO1xuICAgICAgICBwbGF5ZXJFeGl0KGV2ZW50KVxuICAgICAgICBpZihpc1NoaXBQbGFjZWQoc2hpcHMpICE9PSB0cnVlICYmIHBsYXllci5wbGF5ZXJCb2FyZC5zaGlwc0FsaXZlR2V0dGVyKCkuaW5jbHVkZXMoc2hpcC5uYW1lKSl7XG4gICAgICAgICAgICB1c2VyUGxhY2Uoc2hpcHMscGxheWVyLGNvbXB1dGVyLGlzU2hpcFBsYWNlZChzaGlwcykpXG4gICAgICAgICAgICB1cGRhdGVIZWFkZXIoYFBsYWNlIHlvdXIgJHtpc1NoaXBQbGFjZWQoc2hpcHMpLm5hbWV9IGFueXdoZXJlIG9uIHRoZSBwbGF5ZXIgYm9hcmRgKVxuICAgICAgICB9XG4gICAgICAgIGVsc2UgaWYocGxheWVyLnBsYXllckJvYXJkLnNoaXBzQWxpdmVHZXR0ZXIoKS5sZW5ndGg8NSl7XG4gICAgICAgICAgICB1c2VyUGxhY2Uoc2hpcHMscGxheWVyLGNvbXB1dGVyLHNoaXApXG4gICAgICAgIH1cbiAgICAgICAgZWxzZSBpZihpc1NoaXBQbGFjZWQoc2hpcHMpKXtcbiAgICAgICAgICAgIGxldCBjb250YWluZXIgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnYnRuQ29udGFpbmVyJylcbiAgICAgICAgICAgIGNvbnRhaW5lci5yZW1vdmVDaGlsZChvcmllbnRhdGlvbkJ0bilcbiAgICAgICAgICAgIHBsYXllckJvYXJkLnJlbW92ZUV2ZW50TGlzdGVuZXIoJ21vdXNlb3V0JyxwbGF5ZXJFeGl0KTtcbiAgICAgICAgICAgIHBsYXllckJvYXJkLnJlbW92ZUV2ZW50TGlzdGVuZXIoJ21vdXNlb3ZlcicscGxheWVySG92ZXIpO1xuICAgICAgICAgICAgdXBkYXRlSGVhZGVyKCdDbGljayBvbiB0aGUgY29tcHV0ZXIgYm9hcmQgdG8gYXR0YWNrIScpXG4gICAgICAgIH1cbiAgICB9LCB7b25jZTp0cnVlfSlcbn1cblxuY29uc3QgaXNTaGlwUGxhY2VkPSAoYXJyKSA9PiB7XG4gICAgZm9yKGxldCBpID0gMDsgaTxhcnIubGVuZ3RoO2krKyl7XG4gICAgICAgIGlmKCFhcnJbaV0uaXNQbGFjZWRHZXR0ZXIoKSl7XG5cbiAgICAgICAgICAgIHJldHVybiBhcnJbaV1cbiAgICAgICAgfVxuICAgIH1cbiAgICByZXR1cm4gdHJ1ZVxufVxuXG5cblxuZXhwb3J0IHtwbGF5ZXJIb3ZlcixwbGF5ZXJFeGl0LHVzZXJQbGFjZSxpc1NoaXBQbGFjZWR9IiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHRpZDogbW9kdWxlSWQsXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbi8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG5fX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBfX3dlYnBhY2tfbW9kdWxlc19fO1xuXG4iLCIvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuX193ZWJwYWNrX3JlcXVpcmVfXy5uID0gKG1vZHVsZSkgPT4ge1xuXHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cblx0XHQoKSA9PiAobW9kdWxlWydkZWZhdWx0J10pIDpcblx0XHQoKSA9PiAobW9kdWxlKTtcblx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgeyBhOiBnZXR0ZXIgfSk7XG5cdHJldHVybiBnZXR0ZXI7XG59OyIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18uZyA9IChmdW5jdGlvbigpIHtcblx0aWYgKHR5cGVvZiBnbG9iYWxUaGlzID09PSAnb2JqZWN0JykgcmV0dXJuIGdsb2JhbFRoaXM7XG5cdHRyeSB7XG5cdFx0cmV0dXJuIHRoaXMgfHwgbmV3IEZ1bmN0aW9uKCdyZXR1cm4gdGhpcycpKCk7XG5cdH0gY2F0Y2ggKGUpIHtcblx0XHRpZiAodHlwZW9mIHdpbmRvdyA9PT0gJ29iamVjdCcpIHJldHVybiB3aW5kb3c7XG5cdH1cbn0pKCk7IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsInZhciBzY3JpcHRVcmw7XG5pZiAoX193ZWJwYWNrX3JlcXVpcmVfXy5nLmltcG9ydFNjcmlwdHMpIHNjcmlwdFVybCA9IF9fd2VicGFja19yZXF1aXJlX18uZy5sb2NhdGlvbiArIFwiXCI7XG52YXIgZG9jdW1lbnQgPSBfX3dlYnBhY2tfcmVxdWlyZV9fLmcuZG9jdW1lbnQ7XG5pZiAoIXNjcmlwdFVybCAmJiBkb2N1bWVudCkge1xuXHRpZiAoZG9jdW1lbnQuY3VycmVudFNjcmlwdClcblx0XHRzY3JpcHRVcmwgPSBkb2N1bWVudC5jdXJyZW50U2NyaXB0LnNyY1xuXHRpZiAoIXNjcmlwdFVybCkge1xuXHRcdHZhciBzY3JpcHRzID0gZG9jdW1lbnQuZ2V0RWxlbWVudHNCeVRhZ05hbWUoXCJzY3JpcHRcIik7XG5cdFx0aWYoc2NyaXB0cy5sZW5ndGgpIHNjcmlwdFVybCA9IHNjcmlwdHNbc2NyaXB0cy5sZW5ndGggLSAxXS5zcmNcblx0fVxufVxuLy8gV2hlbiBzdXBwb3J0aW5nIGJyb3dzZXJzIHdoZXJlIGFuIGF1dG9tYXRpYyBwdWJsaWNQYXRoIGlzIG5vdCBzdXBwb3J0ZWQgeW91IG11c3Qgc3BlY2lmeSBhbiBvdXRwdXQucHVibGljUGF0aCBtYW51YWxseSB2aWEgY29uZmlndXJhdGlvblxuLy8gb3IgcGFzcyBhbiBlbXB0eSBzdHJpbmcgKFwiXCIpIGFuZCBzZXQgdGhlIF9fd2VicGFja19wdWJsaWNfcGF0aF9fIHZhcmlhYmxlIGZyb20geW91ciBjb2RlIHRvIHVzZSB5b3VyIG93biBsb2dpYy5cbmlmICghc2NyaXB0VXJsKSB0aHJvdyBuZXcgRXJyb3IoXCJBdXRvbWF0aWMgcHVibGljUGF0aCBpcyBub3Qgc3VwcG9ydGVkIGluIHRoaXMgYnJvd3NlclwiKTtcbnNjcmlwdFVybCA9IHNjcmlwdFVybC5yZXBsYWNlKC8jLiokLywgXCJcIikucmVwbGFjZSgvXFw/LiokLywgXCJcIikucmVwbGFjZSgvXFwvW15cXC9dKyQvLCBcIi9cIik7XG5fX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBzY3JpcHRVcmw7IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5iID0gZG9jdW1lbnQuYmFzZVVSSSB8fCBzZWxmLmxvY2F0aW9uLmhyZWY7XG5cbi8vIG9iamVjdCB0byBzdG9yZSBsb2FkZWQgYW5kIGxvYWRpbmcgY2h1bmtzXG4vLyB1bmRlZmluZWQgPSBjaHVuayBub3QgbG9hZGVkLCBudWxsID0gY2h1bmsgcHJlbG9hZGVkL3ByZWZldGNoZWRcbi8vIFtyZXNvbHZlLCByZWplY3QsIFByb21pc2VdID0gY2h1bmsgbG9hZGluZywgMCA9IGNodW5rIGxvYWRlZFxudmFyIGluc3RhbGxlZENodW5rcyA9IHtcblx0XCJpbmRleFwiOiAwXG59O1xuXG4vLyBubyBjaHVuayBvbiBkZW1hbmQgbG9hZGluZ1xuXG4vLyBubyBwcmVmZXRjaGluZ1xuXG4vLyBubyBwcmVsb2FkZWRcblxuLy8gbm8gSE1SXG5cbi8vIG5vIEhNUiBtYW5pZmVzdFxuXG4vLyBubyBvbiBjaHVua3MgbG9hZGVkXG5cbi8vIG5vIGpzb25wIGZ1bmN0aW9uIiwiaW1wb3J0ICcuL3N0eWxlLmNzcyc7XG5pbXBvcnQge2NyZWF0ZUNvbnRhaW5lcixjcmVhdGVHYW1lQm9hcmRVSSx1cGRhdGVIZWFkZXIscmVzdGFydFVJfSBmcm9tICcuL2RvbU1hbmlwLmpzJztcbmltcG9ydCB7c2hpcEZhY3RvcnksIHBsYXllciwgY29tcHV0ZXIsIGdhbWVCb2FyZEZhY3Rvcnl9IGZyb20gJy4vZmFjdG9yaWVzLmpzJztcbmltcG9ydCB7dXNlclBsYWNlfSBmcm9tICcuL3BsYXllclBsYWNlLmpzJztcbi8vaW5pdGlsaXplcyB0aGUgZ2FtZVxuY29uc3QgaW5pdEdhbWUgPSAoKSA9PntcbiAgICAvL2NyZWF0ZXMgYSBwbGF5ZXIgYW5kIGEgY29tcHV0ZXJcbiAgICBjb25zdCBwbGF5ZXIxID0gcGxheWVyKCk7XG4gICAgY29uc3QgY29tcHV0ZXIxID0gY29tcHV0ZXIoKTtcblxuICAgIC8vY3JlYXRlcyBhbGwgc2hpcHMgZm9yIHBsYXllciBhbmQgY29tcHV0ZXJcbiAgICBjb25zdCBwbGF5ZXJTdWIgPSBzaGlwRmFjdG9yeShcInN1Ym1hcmluZVwiLDMpO1xuICAgIGNvbnN0IHBsYXllckNhcnJpZXIgPSBzaGlwRmFjdG9yeShcImNhcnJpZXJcIiw1KTtcbiAgICBjb25zdCBwbGF5ZXJCYXR0bGVzaGlwID0gc2hpcEZhY3RvcnkoJ2JhdHRsZXNoaXAnLDQpO1xuICAgIGNvbnN0IHBsYXllckNydWlzZXIgPSBzaGlwRmFjdG9yeSgnY3J1aXNlcicsMyk7XG4gICAgY29uc3QgcGxheWVyRGVzdHJveWVyID0gc2hpcEZhY3RvcnkoJ2Rlc3Ryb3llcicsIDIpO1xuICAgIGNvbnN0IGNvbXB1dGVyU3ViID0gc2hpcEZhY3RvcnkoXCJzdWJtYXJpbmVcIiwzKTtcbiAgICBjb25zdCBjb21wdXRlckNhcnJpZXIgPSBzaGlwRmFjdG9yeShcImNhcnJpZXJcIiw1KTtcbiAgICBjb25zdCBjb21wdXRlckJhdHRsZXNoaXAgPSBzaGlwRmFjdG9yeSgnYmF0dGxlc2hpcCcsNCk7XG4gICAgY29uc3QgY29tcHV0ZXJDcnVpc2VyID0gc2hpcEZhY3RvcnkoJ2NydWlzZXInLDMpO1xuICAgIGNvbnN0IGNvbXB1dGVyRGVzdHJveWVyID0gc2hpcEZhY3RvcnkoJ2Rlc3Ryb3llcicsIDIpO1xuXG4gICAgbGV0IHBsYXllclNoaXBzID0gW3BsYXllclN1YixwbGF5ZXJDYXJyaWVyLHBsYXllckJhdHRsZXNoaXAscGxheWVyQ3J1aXNlcixwbGF5ZXJEZXN0cm95ZXJdXG4gICAgLy9jcmVhdGVzIHRoZSBVSVxuICAgIGNyZWF0ZUNvbnRhaW5lcigpO1xuICAgIGNyZWF0ZUdhbWVCb2FyZFVJKHBsYXllcjEucGxheWVyQm9hcmQuYXJyYXlHZXR0ZXIoKSxjb21wdXRlcjEuY29tcHV0ZXJCb2FyZC5hcnJheUdldHRlcigpKTtcbiAgICBjb25zdCByZXN0YXJ0QnRuID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3Jlc3RhcnRCdG4nKTtcbiAgICByZXN0YXJ0QnRuLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJyxyZXN0YXJ0R2FtZSlcbiAgICB1c2VyUGxhY2UocGxheWVyU2hpcHMscGxheWVyMSxjb21wdXRlcjEscGxheWVyU3ViKVxuXG5cbiAgICBjb21wdXRlclJhbmRvbVBsYWNlKGNvbXB1dGVyMSxjb21wdXRlclN1Yik7XG4gICAgY29tcHV0ZXJSYW5kb21QbGFjZShjb21wdXRlcjEsY29tcHV0ZXJDYXJyaWVyKTtcbiAgICBjb21wdXRlclJhbmRvbVBsYWNlKGNvbXB1dGVyMSxjb21wdXRlckJhdHRsZXNoaXApO1xuICAgIGNvbXB1dGVyUmFuZG9tUGxhY2UoY29tcHV0ZXIxLGNvbXB1dGVyQ3J1aXNlcik7XG4gICAgY29tcHV0ZXJSYW5kb21QbGFjZShjb21wdXRlcjEsY29tcHV0ZXJEZXN0cm95ZXIpO1xuICAgIGNvbnNvbGUubG9nKGNvbXB1dGVyMS5jb21wdXRlckJvYXJkLmFycmF5R2V0dGVyKCkpO1xuXG5cbiAgICB1cGRhdGVHYW1lYm9hcmQocGxheWVyMSxjb21wdXRlcjEpO1xuICAgIGNvbnN0IGNvbXB1dGVyR2FtZWJvYXJkRGl2ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2NvbXB1dGVyR2FtZWJvYXJkJyk7XG4gICAgY29tcHV0ZXJHYW1lYm9hcmREaXYuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLGUgPT4ge1xuICAgICAgICBwbGF5R2FtZShwbGF5ZXIxLGNvbXB1dGVyMSxlKVxuICAgIH0pXG59XG5cblxuLy9SYW5kb21seSBwbGFjZXMgY29tcHV0ZXIgc2hpcHNcbmNvbnN0IGNvbXB1dGVyUmFuZG9tUGxhY2UgPSAoY29tcHV0ZXIsIHNoaXApID0+IHtcbiAgICAvL1JhbmRvbWx5IHNlbGVjdHMgMCBvciAxLiAwIGlzIGhvcml6b250YWwgYW5kIDEgaXMgdmVydGljYWxcbiAgICBsZXQgcmFuZG9tT3JpZW50YXRpb24gPSBNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiAyKTtcbiAgICAvL2NoZWNrcyB0byBzaGVlIGlmIHNoaXAgd291bGQgaW50ZXJzZWN0IGFub3RoZXIgc2hpcCB0aGF0IGlzIGFscmVhZHkgb24gdGhlIGJvYXJkXG4gICAgY29uc3QgaW50ZXJzZWN0Q2hlY2sgPSAoY29tcHV0ZXIsc2hpcCxyb3csY29sLG9yaWVudCk9PntcbiAgICAgICAgaWYob3JpZW50ID09PSAndmVydGljYWwnKXtcbiAgICAgICAgICAgIGZvcihsZXQgaSA9IDA7aTxzaGlwLmxlbmd0aDtpKyspe1xuICAgICAgICAgICAgICAgIC8vaXRlcmF0ZXMgdGhyb3VnaCB0aGUgc2hpcHMgbGVuZ3RoIGFuZCBhZGRpbmcgdGhlIGluZGV4IHRvIHRoZSByb3cgYmVjYXVzZSBpdCBpcyBwbGFjZWQgdmVydGljYWxseS4gXG4gICAgICAgICAgICAgICAgLy9JZiB0aGUgZWxlbWVudCBpcyBub3QgZW1wdHkgaXQgcmV0dXJucyBmYWxzZVxuICAgICAgICAgICAgICAgIGlmKGNvbXB1dGVyLmNvbXB1dGVyQm9hcmQuYXJyYXlHZXR0ZXIoKVtyb3craV1bY29sXSAhPT0gJycpe1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gZmFsc2VcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICByZXR1cm4gdHJ1ZVxuICAgICAgICB9XG4gICAgICAgIGVsc2V7XG4gICAgICAgICAgICAgICAgLy9pdGVyYXRlcyB0aHJvdWdoIHRoZSBzaGlwcyBsZW5ndGggYW5kIGFkZGluZyB0aGUgaW5kZXggdG8gdGhlIGNvbHVtbiBiZWNhdXNlIGl0IGlzIHBsYWNlZCBob3Jpem9udGFsbHkuIFxuICAgICAgICAgICAgICAgIC8vSWYgdGhlIGVsZW1lbnQgaXMgbm90IGVtcHR5IGl0IHJldHVybnMgZmFsc2VcbiAgICAgICAgICAgIGZvcihsZXQgaSA9IDA7aTxzaGlwLmxlbmd0aDtpKyspe1xuICAgICAgICAgICAgICAgIGlmKGNvbXB1dGVyLmNvbXB1dGVyQm9hcmQuYXJyYXlHZXR0ZXIoKVtyb3ddW2NvbCtpXSAhPT0gJycpe1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gZmFsc2VcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICByZXR1cm4gdHJ1ZVxuICAgICAgICB9XG4gICAgfVxuICAgICAgICAvL3BsYWNlcyB0aGUgc2hpcCByYW5kb21seSBpbiB2ZXJ0aWNhbCBvcmllbnRhdGlvblxuICAgIGlmKHJhbmRvbU9yaWVudGF0aW9uID09PSAxKXtcbiAgICAgICAgXG4gICAgICAgIGxldCByb3cgPSBNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiAoMTAtc2hpcC5sZW5ndGgpKTtcbiAgICAgICAgbGV0IGNvbCA9IE1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSoxMCk7XG4gICAgICAgIC8vY2hlY2tzIHRvIHNlZSBpZiBpdCBpcyBpbnRlcmVjdGluZy4gSWYgc28gdGhlbiBpdCBjYWxscyB0aGUgcmFuZG9tUGxhY2UgZnVuY3Rpb24gYWdhaW5cbiAgICAgICAgaWYoaW50ZXJzZWN0Q2hlY2soY29tcHV0ZXIsc2hpcCxyb3csY29sLCd2ZXJ0aWNhbCcpKXtcbiAgICAgICAgICAgIGNvbXB1dGVyLmNvbXB1dGVyQm9hcmQucGxhY2Uoc2hpcCxyb3csY29sLCd2ZXJ0aWNhbCcpO1xuICAgICAgICB9XG4gICAgICAgIGVsc2V7Y29tcHV0ZXJSYW5kb21QbGFjZShjb21wdXRlcixzaGlwKX1cblxuICAgIH1cbiAgICAvL3BsYWNlcyB0aGUgc2hpcCByYW5kb21seSBpbiBob3Jpem9udGFsIG9ycmllbnRhdGlvblxuICAgIGVsc2V7XG4gICAgICAgIGxldCByb3cgPSBNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkqMTApO1xuICAgICAgICBsZXQgY29sID0gTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogKDEwLXNoaXAubGVuZ3RoKSk7XG4gICAgICAgIFxuICAgICAgICBpZihpbnRlcnNlY3RDaGVjayhjb21wdXRlcixzaGlwLHJvdyxjb2wsJ2hvcml6b250YWwnKSl7XG4gICAgICAgICAgICBjb21wdXRlci5jb21wdXRlckJvYXJkLnBsYWNlKHNoaXAscm93LGNvbCwnaG9yaXpvbnRhbCcpXG4gICAgICAgIH1cbiAgICAgICAgZWxzZXtjb21wdXRlclJhbmRvbVBsYWNlKGNvbXB1dGVyLHNoaXApfVxuICAgIH1cbn1cblxuY29uc3QgcGxheUdhbWUgPSAocGxheWVyMSxjb21wdXRlcjEsZSkgPT4ge1xuICAgICAgICBpZighZ2FtZU92ZXIocGxheWVyMSxjb21wdXRlcjEpKSB7XG4gICAgICAgIHBsYXllcjEucGxheWVyQXR0YWNrKGNvbXB1dGVyMS5jb21wdXRlckJvYXJkLGUpXG4gICAgICAgIGNvbXB1dGVyMS5jb21wdXRlclJhbmRvbUF0dGFjayhwbGF5ZXIxLnBsYXllckJvYXJkKVxuICAgICAgICB9XG4gICAgICAgIHVwZGF0ZUdhbWVib2FyZChwbGF5ZXIxLGNvbXB1dGVyMSk7XG59XG5cbmNvbnN0IGdhbWVPdmVyPSAocGxheWVyLGNvbXB1dGVyKSA9PiB7XG5cbiAgICBpZihjb21wdXRlci5jb21wdXRlckJvYXJkLnNoaXBzQWxpdmVHZXR0ZXIoKS5sZW5ndGggPT09MCAgfHwgcGxheWVyLnBsYXllckJvYXJkLnNoaXBzQWxpdmVHZXR0ZXIoKS5sZW5ndGggPT09IDApe1xuICAgICAgICB1cGRhdGVIZWFkZXIoJ0dhbWUgT3ZlciEgUHJlc3MgUmVzdGFydCB0byBwbGF5IGFnYWluIScpXG4gICAgICAgIHJldHVybiB0cnVlXG4gICAgfVxuICAgIHJldHVybiBmYWxzZVxufVxuXG5jb25zdCB1cGRhdGVHYW1lYm9hcmQgPSAocGxheWVyMSxjb21wdXRlcjEpID0+e1xuICAgIGZvcihsZXQgaT0wOyBpPChwbGF5ZXIxLnBsYXllckJvYXJkLmFycmF5R2V0dGVyKCkubGVuZ3RoKTtpKyspe1xuICAgICAgICBmb3IobGV0IGo9MDsgajwocGxheWVyMS5wbGF5ZXJCb2FyZC5hcnJheUdldHRlcigpW2ldLmxlbmd0aCk7aisrKXtcbiAgICAgICAgICAgIFxuICAgICAgICAgICAgbGV0IGdhbWVDZWxsID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoYCR7aX0ke2p9YClcbiAgICAgICAgICAgIGlmKHR5cGVvZiBwbGF5ZXIxLnBsYXllckJvYXJkLmFycmF5R2V0dGVyKClbaV1bal0gPT09ICdvYmplY3QnKXtcbiAgICAgICAgICAgICAgICBsZXQgbmFtZSA9IHBsYXllcjEucGxheWVyQm9hcmQuYXJyYXlHZXR0ZXIoKVtpXVtqXS5uYW1lXG4gICAgICAgICAgICAgICAgZ2FtZUNlbGwuY2xhc3NMaXN0LmFkZChuYW1lKVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZSBpZihwbGF5ZXIxLnBsYXllckJvYXJkLmFycmF5R2V0dGVyKClbaV1bal0gPT09ICd4Jyl7XG4gICAgICAgICAgICAgICAgZ2FtZUNlbGwuY2xhc3NMaXN0LmFkZCgnZW1wdHknKVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZSBpZihwbGF5ZXIxLnBsYXllckJvYXJkLmFycmF5R2V0dGVyKClbaV1bal0gPT09ICdYJyl7XG4gICAgICAgICAgICAgICAgZ2FtZUNlbGwuY2xhc3NMaXN0LmFkZCgnaGl0JylcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cbiAgICBmb3IobGV0IGk9MDsgaTwoY29tcHV0ZXIxLmNvbXB1dGVyQm9hcmQuYXJyYXlHZXR0ZXIoKS5sZW5ndGgpO2krKyl7XG4gICAgICAgIGZvcihsZXQgaj0wOyBqPChjb21wdXRlcjEuY29tcHV0ZXJCb2FyZC5hcnJheUdldHRlcigpW2ldLmxlbmd0aCk7aisrKXtcbiAgICAgICAgICAgIGxldCBnYW1lQ2VsbCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKGAke2l9JHtqfWNvbXB1dGVyYClcbiAgICAgICAgICAgIGlmKGNvbXB1dGVyMS5jb21wdXRlckJvYXJkLmFycmF5R2V0dGVyKClbaV1bal0gPT09ICd4Jyl7XG4gICAgICAgICAgICAgICAgZ2FtZUNlbGwuY2xhc3NMaXN0LmFkZCgnZW1wdHknKVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZSBpZihjb21wdXRlcjEuY29tcHV0ZXJCb2FyZC5hcnJheUdldHRlcigpW2ldW2pdID09PSAnWCcpe1xuICAgICAgICAgICAgICAgIGdhbWVDZWxsLmNsYXNzTGlzdC5hZGQoJ2hpdCcpXG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG59O1xuXG5jb25zdCByZXN0YXJ0R2FtZSA9ICgpID0+IHtcbiAgICByZXN0YXJ0VUkoKTtcbiAgICBpbml0R2FtZSgpO1xuXG59XG5cblxuXG5cbmluaXRHYW1lKClcblxuXG5cbmV4cG9ydCB7c2hpcEZhY3RvcnksZ2FtZUJvYXJkRmFjdG9yeSwgcGxheWVyLGNvbXB1dGVyLHVwZGF0ZUdhbWVib2FyZH07Il0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9