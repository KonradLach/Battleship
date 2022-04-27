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
___CSS_LOADER_EXPORT___.push([module.id, "body{\n    background-color: rgb(192, 217, 228);\n    width: 100%;\n    height: 100%;\n}\n#mainContainer{\n    display: block;\n}\n#gameboards{\n    display: grid;\n    grid-template-columns: repeat(2,1fr);\n    margin: 10px;\n}\n#playerHeader, #computerHeader{\n    width: 40vw;\n    grid-row-start: 0;\n    grid-row-end: 1;\n}\n\n#playerGameboard, #computerGameboard{\n    display: grid;\n\n    grid-template-columns: repeat(10,1fr);\n    height: 40vw;\n    width: 40vw;\n}\n.cell{\n    border: 1px solid black;\n    height: 100%;\n    width: 100%;\n    text-align: center;\n    font-size: x-small;\n}\n\n.battleship{\n    background-color:#2b2424;\n    border-top: 1px solid black;\n}\n\n.submarine{\n    background-color: #1c093f;\n}\n\n.cruiser{\n    background-color: #3b647c;\n}\n\n.carrier{\n    background-color: #412d44;\n}\n\n.destroyer{\n    background-color: #cc2cc4;\n}\n.empty{\n    background-color: #ffffff;\n}\n.hit{\n    background-color: #c28a23;\n}\n\n.selected{\n    background-color: aquamarine;\n}", "",{"version":3,"sources":["webpack://./src/style.css"],"names":[],"mappings":"AAAA;IACI,oCAAoC;IACpC,WAAW;IACX,YAAY;AAChB;AACA;IACI,cAAc;AAClB;AACA;IACI,aAAa;IACb,oCAAoC;IACpC,YAAY;AAChB;AACA;IACI,WAAW;IACX,iBAAiB;IACjB,eAAe;AACnB;;AAEA;IACI,aAAa;;IAEb,qCAAqC;IACrC,YAAY;IACZ,WAAW;AACf;AACA;IACI,uBAAuB;IACvB,YAAY;IACZ,WAAW;IACX,kBAAkB;IAClB,kBAAkB;AACtB;;AAEA;IACI,wBAAwB;IACxB,2BAA2B;AAC/B;;AAEA;IACI,yBAAyB;AAC7B;;AAEA;IACI,yBAAyB;AAC7B;;AAEA;IACI,yBAAyB;AAC7B;;AAEA;IACI,yBAAyB;AAC7B;AACA;IACI,yBAAyB;AAC7B;AACA;IACI,yBAAyB;AAC7B;;AAEA;IACI,4BAA4B;AAChC","sourcesContent":["body{\n    background-color: rgb(192, 217, 228);\n    width: 100%;\n    height: 100%;\n}\n#mainContainer{\n    display: block;\n}\n#gameboards{\n    display: grid;\n    grid-template-columns: repeat(2,1fr);\n    margin: 10px;\n}\n#playerHeader, #computerHeader{\n    width: 40vw;\n    grid-row-start: 0;\n    grid-row-end: 1;\n}\n\n#playerGameboard, #computerGameboard{\n    display: grid;\n\n    grid-template-columns: repeat(10,1fr);\n    height: 40vw;\n    width: 40vw;\n}\n.cell{\n    border: 1px solid black;\n    height: 100%;\n    width: 100%;\n    text-align: center;\n    font-size: x-small;\n}\n\n.battleship{\n    background-color:#2b2424;\n    border-top: 1px solid black;\n}\n\n.submarine{\n    background-color: #1c093f;\n}\n\n.cruiser{\n    background-color: #3b647c;\n}\n\n.carrier{\n    background-color: #412d44;\n}\n\n.destroyer{\n    background-color: #cc2cc4;\n}\n.empty{\n    background-color: #ffffff;\n}\n.hit{\n    background-color: #c28a23;\n}\n\n.selected{\n    background-color: aquamarine;\n}"],"sourceRoot":""}]);
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
/* harmony export */   "createContainer": () => (/* binding */ createContainer),
/* harmony export */   "createElement": () => (/* binding */ createElement),
/* harmony export */   "createGameBoardUI": () => (/* binding */ createGameBoardUI)
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
    const header = createElement.createH(1,"Battleship");
    main.appendChild(header);
}

const createGameBoardUI = (player1,computer1) => {
    const main = document.getElementById('mainContainer');
    const header = createElement.createH(1,"Place your Submarine anywhere");
    header.setAttribute('id','header');
    const gameboards = createElement.createDiv('gameboards');
    const playerGameboard = createElement.createDiv('playerGameboard');
    const computerGameboard = createElement.createDiv('computerGameboard');
    const playerHeader = createElement.createH(2,'Player\'s Board');
    const computerHeader = createElement.createH(2,'Computer\'s Header');
    const orientationBtn = document.createElement('button');
    orientationBtn.innerText = 'Horizontal'
    orientationBtn.setAttribute('id','orientBtn')
    playerHeader.setAttribute('id','playerHeader');
    computerHeader.setAttribute('id','computerHeader');
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
    main.appendChild(orientationBtn)
    main.appendChild(gameboards)
    gameboards.append(playerHeader,playerGameboard,computerHeader,computerGameboard)

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
            console.log(playerBoard.arrayGetter()[row][column])
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
    // playerHover(playerCarrier);
    // playerExit(playerCarrier);
    // playerPlace(playerCarrier,player1,computer1);
    (0,_playerPlace__WEBPACK_IMPORTED_MODULE_3__.playerPlace)(playerShips,player1,computer1,playerSub)
    // player1.playerPlace(playerSub,0,0,'horizontal');
    // player1.playerPlace(playerCarrier,1,0,'horizontal');
    // player1.playerPlace(playerBattleship,2,0,'horizontal');
    // player1.playerPlace(playerCruiser,4,0,'horizontal');
    // player1.playerPlace(playerDestroyer,5,0,'horizontal');

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
    
        player1.playerAttack(computer1.computerBoard,e)
        computer1.computerRandomAttack(player1.playerBoard)
        updateGameboard(player1,computer1);
}

const gameOver= (player,computer) => {
    // console.log(computer.computerBoard.shipsAliveGetter())
    if(computer.computerBoard.shipsAliveGetter().length ===0  || player.playerBoard.shipsAliveGetter().length === 0){
        return true
    }
    return false
}

const updateGameboard = (player1,computer1) =>{
    if(!gameOver(player1,computer1)){
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
    }
    else{
        alert('Game Over')
    }
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
/* harmony export */   "playerPlace": () => (/* binding */ playerPlace)
/* harmony export */ });
/* harmony import */ var _index__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./index */ "./src/index.js");

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
        if(beginIndex%10>(beginIndex+currentShip.length)%10 && (beginIndex+currentShip.length)%10 !== 0){
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
                console.log(index);
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
const playerPlace = (ships,player,computer,ship) => {
    let playerBoard = document.getElementById('playerGameboard');
    let orientationBtn = document.getElementById('orientBtn');
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
            playerPlace(ships,player,computer,isShipPlaced(ships))
        }
        else if(player.playerBoard.shipsAliveGetter().length<5){
            playerPlace(ships,player,computer,ship)
        }
    }, {once:true})
}

const isShipPlaced= (arr) => {
    for(let i = 0; i<arr.length;i++){
        if(!arr[i].isPlacedGetter()){

            return arr[i]
        }
    }
    let playerBoard = document.getElementById('playerGameboard');
    playerBoard.removeEventListener('mouseover',playerHover);
    playerBoard.removeEventListener('mouseout',playerExit);

    return true
}





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
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module is referenced by other modules so it can't be inlined
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHVCQUF1QixxQkFBcUI7QUFDNUM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esd0RBQXdELE1BQU07QUFDOUQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHVCQUF1Qix3QkFBd0I7QUFDL0M7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esd0RBQXdELE1BQU07QUFDOUQ7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLFFBQVEsdURBQWU7QUFDdkI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUssR0FBRyxVQUFVO0FBQ2xCOztBQUVBO0FBQ0EsbUJBQW1CLGFBQWE7QUFDaEM7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7Ozs7Ozs7Ozs7VUN6SUE7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTs7VUFFQTtVQUNBOztVQUVBO1VBQ0E7VUFDQTs7Ozs7V0N0QkE7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLGlDQUFpQyxXQUFXO1dBQzVDO1dBQ0E7Ozs7O1dDUEE7V0FDQTtXQUNBO1dBQ0E7V0FDQSx5Q0FBeUMsd0NBQXdDO1dBQ2pGO1dBQ0E7V0FDQTs7Ozs7V0NQQTs7Ozs7V0NBQTtXQUNBO1dBQ0E7V0FDQSx1REFBdUQsaUJBQWlCO1dBQ3hFO1dBQ0EsZ0RBQWdELGFBQWE7V0FDN0Q7Ozs7O1VFTkE7VUFDQTtVQUNBO1VBQ0EiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vc3JjL3N0eWxlLmNzcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL3NyYy9zdHlsZS5jc3M/NzE2MyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9zcmMvZG9tTWFuaXAuanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL3NyYy9mYWN0b3JpZXMuanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL3NyYy9pbmRleC5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vc3JjL3BsYXllclBsYWNlLmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC93ZWJwYWNrL3J1bnRpbWUvY29tcGF0IGdldCBkZWZhdWx0IGV4cG9ydCIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwL3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwL3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL2JhdHRsZXNoaXAvd2VicGFjay9iZWZvcmUtc3RhcnR1cCIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwL3dlYnBhY2svc3RhcnR1cCIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwL3dlYnBhY2svYWZ0ZXItc3RhcnR1cCJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBJbXBvcnRzXG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIjtcbnZhciBfX19DU1NfTE9BREVSX0VYUE9SVF9fXyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fKTtcbi8vIE1vZHVsZVxuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBcImJvZHl7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYigxOTIsIDIxNywgMjI4KTtcXG4gICAgd2lkdGg6IDEwMCU7XFxuICAgIGhlaWdodDogMTAwJTtcXG59XFxuI21haW5Db250YWluZXJ7XFxuICAgIGRpc3BsYXk6IGJsb2NrO1xcbn1cXG4jZ2FtZWJvYXJkc3tcXG4gICAgZGlzcGxheTogZ3JpZDtcXG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiByZXBlYXQoMiwxZnIpO1xcbiAgICBtYXJnaW46IDEwcHg7XFxufVxcbiNwbGF5ZXJIZWFkZXIsICNjb21wdXRlckhlYWRlcntcXG4gICAgd2lkdGg6IDQwdnc7XFxuICAgIGdyaWQtcm93LXN0YXJ0OiAwO1xcbiAgICBncmlkLXJvdy1lbmQ6IDE7XFxufVxcblxcbiNwbGF5ZXJHYW1lYm9hcmQsICNjb21wdXRlckdhbWVib2FyZHtcXG4gICAgZGlzcGxheTogZ3JpZDtcXG5cXG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiByZXBlYXQoMTAsMWZyKTtcXG4gICAgaGVpZ2h0OiA0MHZ3O1xcbiAgICB3aWR0aDogNDB2dztcXG59XFxuLmNlbGx7XFxuICAgIGJvcmRlcjogMXB4IHNvbGlkIGJsYWNrO1xcbiAgICBoZWlnaHQ6IDEwMCU7XFxuICAgIHdpZHRoOiAxMDAlO1xcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICAgIGZvbnQtc2l6ZTogeC1zbWFsbDtcXG59XFxuXFxuLmJhdHRsZXNoaXB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IzJiMjQyNDtcXG4gICAgYm9yZGVyLXRvcDogMXB4IHNvbGlkIGJsYWNrO1xcbn1cXG5cXG4uc3VibWFyaW5le1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMWMwOTNmO1xcbn1cXG5cXG4uY3J1aXNlcntcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzNiNjQ3YztcXG59XFxuXFxuLmNhcnJpZXJ7XFxuICAgIGJhY2tncm91bmQtY29sb3I6ICM0MTJkNDQ7XFxufVxcblxcbi5kZXN0cm95ZXJ7XFxuICAgIGJhY2tncm91bmQtY29sb3I6ICNjYzJjYzQ7XFxufVxcbi5lbXB0eXtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZmZmZjtcXG59XFxuLmhpdHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2MyOGEyMztcXG59XFxuXFxuLnNlbGVjdGVke1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBhcXVhbWFyaW5lO1xcbn1cIiwgXCJcIix7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCJ3ZWJwYWNrOi8vLi9zcmMvc3R5bGUuY3NzXCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCJBQUFBO0lBQ0ksb0NBQW9DO0lBQ3BDLFdBQVc7SUFDWCxZQUFZO0FBQ2hCO0FBQ0E7SUFDSSxjQUFjO0FBQ2xCO0FBQ0E7SUFDSSxhQUFhO0lBQ2Isb0NBQW9DO0lBQ3BDLFlBQVk7QUFDaEI7QUFDQTtJQUNJLFdBQVc7SUFDWCxpQkFBaUI7SUFDakIsZUFBZTtBQUNuQjs7QUFFQTtJQUNJLGFBQWE7O0lBRWIscUNBQXFDO0lBQ3JDLFlBQVk7SUFDWixXQUFXO0FBQ2Y7QUFDQTtJQUNJLHVCQUF1QjtJQUN2QixZQUFZO0lBQ1osV0FBVztJQUNYLGtCQUFrQjtJQUNsQixrQkFBa0I7QUFDdEI7O0FBRUE7SUFDSSx3QkFBd0I7SUFDeEIsMkJBQTJCO0FBQy9COztBQUVBO0lBQ0kseUJBQXlCO0FBQzdCOztBQUVBO0lBQ0kseUJBQXlCO0FBQzdCOztBQUVBO0lBQ0kseUJBQXlCO0FBQzdCOztBQUVBO0lBQ0kseUJBQXlCO0FBQzdCO0FBQ0E7SUFDSSx5QkFBeUI7QUFDN0I7QUFDQTtJQUNJLHlCQUF5QjtBQUM3Qjs7QUFFQTtJQUNJLDRCQUE0QjtBQUNoQ1wiLFwic291cmNlc0NvbnRlbnRcIjpbXCJib2R5e1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMTkyLCAyMTcsIDIyOCk7XFxuICAgIHdpZHRoOiAxMDAlO1xcbiAgICBoZWlnaHQ6IDEwMCU7XFxufVxcbiNtYWluQ29udGFpbmVye1xcbiAgICBkaXNwbGF5OiBibG9jaztcXG59XFxuI2dhbWVib2FyZHN7XFxuICAgIGRpc3BsYXk6IGdyaWQ7XFxuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogcmVwZWF0KDIsMWZyKTtcXG4gICAgbWFyZ2luOiAxMHB4O1xcbn1cXG4jcGxheWVySGVhZGVyLCAjY29tcHV0ZXJIZWFkZXJ7XFxuICAgIHdpZHRoOiA0MHZ3O1xcbiAgICBncmlkLXJvdy1zdGFydDogMDtcXG4gICAgZ3JpZC1yb3ctZW5kOiAxO1xcbn1cXG5cXG4jcGxheWVyR2FtZWJvYXJkLCAjY29tcHV0ZXJHYW1lYm9hcmR7XFxuICAgIGRpc3BsYXk6IGdyaWQ7XFxuXFxuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogcmVwZWF0KDEwLDFmcik7XFxuICAgIGhlaWdodDogNDB2dztcXG4gICAgd2lkdGg6IDQwdnc7XFxufVxcbi5jZWxse1xcbiAgICBib3JkZXI6IDFweCBzb2xpZCBibGFjaztcXG4gICAgaGVpZ2h0OiAxMDAlO1xcbiAgICB3aWR0aDogMTAwJTtcXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xcbiAgICBmb250LXNpemU6IHgtc21hbGw7XFxufVxcblxcbi5iYXR0bGVzaGlwe1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiMyYjI0MjQ7XFxuICAgIGJvcmRlci10b3A6IDFweCBzb2xpZCBibGFjaztcXG59XFxuXFxuLnN1Ym1hcmluZXtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzFjMDkzZjtcXG59XFxuXFxuLmNydWlzZXJ7XFxuICAgIGJhY2tncm91bmQtY29sb3I6ICMzYjY0N2M7XFxufVxcblxcbi5jYXJyaWVye1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjNDEyZDQ0O1xcbn1cXG5cXG4uZGVzdHJveWVye1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjY2MyY2M0O1xcbn1cXG4uZW1wdHl7XFxuICAgIGJhY2tncm91bmQtY29sb3I6ICNmZmZmZmY7XFxufVxcbi5oaXR7XFxuICAgIGJhY2tncm91bmQtY29sb3I6ICNjMjhhMjM7XFxufVxcblxcbi5zZWxlY3RlZHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogYXF1YW1hcmluZTtcXG59XCJdLFwic291cmNlUm9vdFwiOlwiXCJ9XSk7XG4vLyBFeHBvcnRzXG5leHBvcnQgZGVmYXVsdCBfX19DU1NfTE9BREVSX0VYUE9SVF9fXztcbiIsIlwidXNlIHN0cmljdFwiO1xuXG4vKlxuICBNSVQgTGljZW5zZSBodHRwOi8vd3d3Lm9wZW5zb3VyY2Uub3JnL2xpY2Vuc2VzL21pdC1saWNlbnNlLnBocFxuICBBdXRob3IgVG9iaWFzIEtvcHBlcnMgQHNva3JhXG4qL1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoY3NzV2l0aE1hcHBpbmdUb1N0cmluZykge1xuICB2YXIgbGlzdCA9IFtdOyAvLyByZXR1cm4gdGhlIGxpc3Qgb2YgbW9kdWxlcyBhcyBjc3Mgc3RyaW5nXG5cbiAgbGlzdC50b1N0cmluZyA9IGZ1bmN0aW9uIHRvU3RyaW5nKCkge1xuICAgIHJldHVybiB0aGlzLm1hcChmdW5jdGlvbiAoaXRlbSkge1xuICAgICAgdmFyIGNvbnRlbnQgPSBcIlwiO1xuICAgICAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBpdGVtWzVdICE9PSBcInVuZGVmaW5lZFwiO1xuXG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIik7XG4gICAgICB9XG5cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIik7XG4gICAgICB9XG5cbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpO1xuICAgICAgfVxuXG4gICAgICBjb250ZW50ICs9IGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcoaXRlbSk7XG5cbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cblxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cblxuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIGNvbnRlbnQ7XG4gICAgfSkuam9pbihcIlwiKTtcbiAgfTsgLy8gaW1wb3J0IGEgbGlzdCBvZiBtb2R1bGVzIGludG8gdGhlIGxpc3RcblxuXG4gIGxpc3QuaSA9IGZ1bmN0aW9uIGkobW9kdWxlcywgbWVkaWEsIGRlZHVwZSwgc3VwcG9ydHMsIGxheWVyKSB7XG4gICAgaWYgKHR5cGVvZiBtb2R1bGVzID09PSBcInN0cmluZ1wiKSB7XG4gICAgICBtb2R1bGVzID0gW1tudWxsLCBtb2R1bGVzLCB1bmRlZmluZWRdXTtcbiAgICB9XG5cbiAgICB2YXIgYWxyZWFkeUltcG9ydGVkTW9kdWxlcyA9IHt9O1xuXG4gICAgaWYgKGRlZHVwZSkge1xuICAgICAgZm9yICh2YXIgayA9IDA7IGsgPCB0aGlzLmxlbmd0aDsgaysrKSB7XG4gICAgICAgIHZhciBpZCA9IHRoaXNba11bMF07XG5cbiAgICAgICAgaWYgKGlkICE9IG51bGwpIHtcbiAgICAgICAgICBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2lkXSA9IHRydWU7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG5cbiAgICBmb3IgKHZhciBfayA9IDA7IF9rIDwgbW9kdWxlcy5sZW5ndGg7IF9rKyspIHtcbiAgICAgIHZhciBpdGVtID0gW10uY29uY2F0KG1vZHVsZXNbX2tdKTtcblxuICAgICAgaWYgKGRlZHVwZSAmJiBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2l0ZW1bMF1dKSB7XG4gICAgICAgIGNvbnRpbnVlO1xuICAgICAgfVxuXG4gICAgICBpZiAodHlwZW9mIGxheWVyICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgIGlmICh0eXBlb2YgaXRlbVs1XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBpZiAobWVkaWEpIHtcbiAgICAgICAgaWYgKCFpdGVtWzJdKSB7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBpZiAoc3VwcG9ydHMpIHtcbiAgICAgICAgaWYgKCFpdGVtWzRdKSB7XG4gICAgICAgICAgaXRlbVs0XSA9IFwiXCIuY29uY2F0KHN1cHBvcnRzKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNF0gPSBzdXBwb3J0cztcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBsaXN0LnB1c2goaXRlbSk7XG4gICAgfVxuICB9O1xuXG4gIHJldHVybiBsaXN0O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoaXRlbSkge1xuICB2YXIgY29udGVudCA9IGl0ZW1bMV07XG4gIHZhciBjc3NNYXBwaW5nID0gaXRlbVszXTtcblxuICBpZiAoIWNzc01hcHBpbmcpIHtcbiAgICByZXR1cm4gY29udGVudDtcbiAgfVxuXG4gIGlmICh0eXBlb2YgYnRvYSA9PT0gXCJmdW5jdGlvblwiKSB7XG4gICAgdmFyIGJhc2U2NCA9IGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KGNzc01hcHBpbmcpKSkpO1xuICAgIHZhciBkYXRhID0gXCJzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtjaGFyc2V0PXV0Zi04O2Jhc2U2NCxcIi5jb25jYXQoYmFzZTY0KTtcbiAgICB2YXIgc291cmNlTWFwcGluZyA9IFwiLyojIFwiLmNvbmNhdChkYXRhLCBcIiAqL1wiKTtcbiAgICB2YXIgc291cmNlVVJMcyA9IGNzc01hcHBpbmcuc291cmNlcy5tYXAoZnVuY3Rpb24gKHNvdXJjZSkge1xuICAgICAgcmV0dXJuIFwiLyojIHNvdXJjZVVSTD1cIi5jb25jYXQoY3NzTWFwcGluZy5zb3VyY2VSb290IHx8IFwiXCIpLmNvbmNhdChzb3VyY2UsIFwiICovXCIpO1xuICAgIH0pO1xuICAgIHJldHVybiBbY29udGVudF0uY29uY2F0KHNvdXJjZVVSTHMpLmNvbmNhdChbc291cmNlTWFwcGluZ10pLmpvaW4oXCJcXG5cIik7XG4gIH1cblxuICByZXR1cm4gW2NvbnRlbnRdLmpvaW4oXCJcXG5cIik7XG59OyIsIlxuICAgICAgaW1wb3J0IEFQSSBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qc1wiO1xuICAgICAgaW1wb3J0IGRvbUFQSSBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0Rm4gZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzXCI7XG4gICAgICBpbXBvcnQgc2V0QXR0cmlidXRlcyBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydFN0eWxlRWxlbWVudCBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qc1wiO1xuICAgICAgaW1wb3J0IHN0eWxlVGFnVHJhbnNmb3JtRm4gZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qc1wiO1xuICAgICAgaW1wb3J0IGNvbnRlbnQsICogYXMgbmFtZWRFeHBvcnQgZnJvbSBcIiEhLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zdHlsZS5jc3NcIjtcbiAgICAgIFxuICAgICAgXG5cbnZhciBvcHRpb25zID0ge307XG5cbm9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0gPSBzdHlsZVRhZ1RyYW5zZm9ybUZuO1xub3B0aW9ucy5zZXRBdHRyaWJ1dGVzID0gc2V0QXR0cmlidXRlcztcblxuICAgICAgb3B0aW9ucy5pbnNlcnQgPSBpbnNlcnRGbi5iaW5kKG51bGwsIFwiaGVhZFwiKTtcbiAgICBcbm9wdGlvbnMuZG9tQVBJID0gZG9tQVBJO1xub3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7XG5cbnZhciB1cGRhdGUgPSBBUEkoY29udGVudCwgb3B0aW9ucyk7XG5cblxuXG5leHBvcnQgKiBmcm9tIFwiISEuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3N0eWxlLmNzc1wiO1xuICAgICAgIGV4cG9ydCBkZWZhdWx0IGNvbnRlbnQgJiYgY29udGVudC5sb2NhbHMgPyBjb250ZW50LmxvY2FscyA6IHVuZGVmaW5lZDtcbiIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgc3R5bGVzSW5ET00gPSBbXTtcblxuZnVuY3Rpb24gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcikge1xuICB2YXIgcmVzdWx0ID0gLTE7XG5cbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBzdHlsZXNJbkRPTS5sZW5ndGg7IGkrKykge1xuICAgIGlmIChzdHlsZXNJbkRPTVtpXS5pZGVudGlmaWVyID09PSBpZGVudGlmaWVyKSB7XG4gICAgICByZXN1bHQgPSBpO1xuICAgICAgYnJlYWs7XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIHJlc3VsdDtcbn1cblxuZnVuY3Rpb24gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpIHtcbiAgdmFyIGlkQ291bnRNYXAgPSB7fTtcbiAgdmFyIGlkZW50aWZpZXJzID0gW107XG5cbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBsaXN0Lmxlbmd0aDsgaSsrKSB7XG4gICAgdmFyIGl0ZW0gPSBsaXN0W2ldO1xuICAgIHZhciBpZCA9IG9wdGlvbnMuYmFzZSA/IGl0ZW1bMF0gKyBvcHRpb25zLmJhc2UgOiBpdGVtWzBdO1xuICAgIHZhciBjb3VudCA9IGlkQ291bnRNYXBbaWRdIHx8IDA7XG4gICAgdmFyIGlkZW50aWZpZXIgPSBcIlwiLmNvbmNhdChpZCwgXCIgXCIpLmNvbmNhdChjb3VudCk7XG4gICAgaWRDb3VudE1hcFtpZF0gPSBjb3VudCArIDE7XG4gICAgdmFyIGluZGV4QnlJZGVudGlmaWVyID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgdmFyIG9iaiA9IHtcbiAgICAgIGNzczogaXRlbVsxXSxcbiAgICAgIG1lZGlhOiBpdGVtWzJdLFxuICAgICAgc291cmNlTWFwOiBpdGVtWzNdLFxuICAgICAgc3VwcG9ydHM6IGl0ZW1bNF0sXG4gICAgICBsYXllcjogaXRlbVs1XVxuICAgIH07XG5cbiAgICBpZiAoaW5kZXhCeUlkZW50aWZpZXIgIT09IC0xKSB7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0ucmVmZXJlbmNlcysrO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnVwZGF0ZXIob2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdmFyIHVwZGF0ZXIgPSBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKTtcbiAgICAgIG9wdGlvbnMuYnlJbmRleCA9IGk7XG4gICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoaSwgMCwge1xuICAgICAgICBpZGVudGlmaWVyOiBpZGVudGlmaWVyLFxuICAgICAgICB1cGRhdGVyOiB1cGRhdGVyLFxuICAgICAgICByZWZlcmVuY2VzOiAxXG4gICAgICB9KTtcbiAgICB9XG5cbiAgICBpZGVudGlmaWVycy5wdXNoKGlkZW50aWZpZXIpO1xuICB9XG5cbiAgcmV0dXJuIGlkZW50aWZpZXJzO1xufVxuXG5mdW5jdGlvbiBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKSB7XG4gIHZhciBhcGkgPSBvcHRpb25zLmRvbUFQSShvcHRpb25zKTtcbiAgYXBpLnVwZGF0ZShvYmopO1xuXG4gIHZhciB1cGRhdGVyID0gZnVuY3Rpb24gdXBkYXRlcihuZXdPYmopIHtcbiAgICBpZiAobmV3T2JqKSB7XG4gICAgICBpZiAobmV3T2JqLmNzcyA9PT0gb2JqLmNzcyAmJiBuZXdPYmoubWVkaWEgPT09IG9iai5tZWRpYSAmJiBuZXdPYmouc291cmNlTWFwID09PSBvYmouc291cmNlTWFwICYmIG5ld09iai5zdXBwb3J0cyA9PT0gb2JqLnN1cHBvcnRzICYmIG5ld09iai5sYXllciA9PT0gb2JqLmxheWVyKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cblxuICAgICAgYXBpLnVwZGF0ZShvYmogPSBuZXdPYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICBhcGkucmVtb3ZlKCk7XG4gICAgfVxuICB9O1xuXG4gIHJldHVybiB1cGRhdGVyO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChsaXN0LCBvcHRpb25zKSB7XG4gIG9wdGlvbnMgPSBvcHRpb25zIHx8IHt9O1xuICBsaXN0ID0gbGlzdCB8fCBbXTtcbiAgdmFyIGxhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKTtcbiAgcmV0dXJuIGZ1bmN0aW9uIHVwZGF0ZShuZXdMaXN0KSB7XG4gICAgbmV3TGlzdCA9IG5ld0xpc3QgfHwgW107XG5cbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IGkrKykge1xuICAgICAgdmFyIGlkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbaV07XG4gICAgICB2YXIgaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4XS5yZWZlcmVuY2VzLS07XG4gICAgfVxuXG4gICAgdmFyIG5ld0xhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShuZXdMaXN0LCBvcHRpb25zKTtcblxuICAgIGZvciAodmFyIF9pID0gMDsgX2kgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBfaSsrKSB7XG4gICAgICB2YXIgX2lkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbX2ldO1xuXG4gICAgICB2YXIgX2luZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoX2lkZW50aWZpZXIpO1xuXG4gICAgICBpZiAoc3R5bGVzSW5ET01bX2luZGV4XS5yZWZlcmVuY2VzID09PSAwKSB7XG4gICAgICAgIHN0eWxlc0luRE9NW19pbmRleF0udXBkYXRlcigpO1xuXG4gICAgICAgIHN0eWxlc0luRE9NLnNwbGljZShfaW5kZXgsIDEpO1xuICAgICAgfVxuICAgIH1cblxuICAgIGxhc3RJZGVudGlmaWVycyA9IG5ld0xhc3RJZGVudGlmaWVycztcbiAgfTtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBtZW1vID0ge307XG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cblxuZnVuY3Rpb24gZ2V0VGFyZ2V0KHRhcmdldCkge1xuICBpZiAodHlwZW9mIG1lbW9bdGFyZ2V0XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgIHZhciBzdHlsZVRhcmdldCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IodGFyZ2V0KTsgLy8gU3BlY2lhbCBjYXNlIHRvIHJldHVybiBoZWFkIG9mIGlmcmFtZSBpbnN0ZWFkIG9mIGlmcmFtZSBpdHNlbGZcblxuICAgIGlmICh3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQgJiYgc3R5bGVUYXJnZXQgaW5zdGFuY2VvZiB3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQpIHtcbiAgICAgIHRyeSB7XG4gICAgICAgIC8vIFRoaXMgd2lsbCB0aHJvdyBhbiBleGNlcHRpb24gaWYgYWNjZXNzIHRvIGlmcmFtZSBpcyBibG9ja2VkXG4gICAgICAgIC8vIGR1ZSB0byBjcm9zcy1vcmlnaW4gcmVzdHJpY3Rpb25zXG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gc3R5bGVUYXJnZXQuY29udGVudERvY3VtZW50LmhlYWQ7XG4gICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgIC8vIGlzdGFuYnVsIGlnbm9yZSBuZXh0XG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gbnVsbDtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBtZW1vW3RhcmdldF0gPSBzdHlsZVRhcmdldDtcbiAgfVxuXG4gIHJldHVybiBtZW1vW3RhcmdldF07XG59XG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cblxuXG5mdW5jdGlvbiBpbnNlcnRCeVNlbGVjdG9yKGluc2VydCwgc3R5bGUpIHtcbiAgdmFyIHRhcmdldCA9IGdldFRhcmdldChpbnNlcnQpO1xuXG4gIGlmICghdGFyZ2V0KSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKFwiQ291bGRuJ3QgZmluZCBhIHN0eWxlIHRhcmdldC4gVGhpcyBwcm9iYWJseSBtZWFucyB0aGF0IHRoZSB2YWx1ZSBmb3IgdGhlICdpbnNlcnQnIHBhcmFtZXRlciBpcyBpbnZhbGlkLlwiKTtcbiAgfVxuXG4gIHRhcmdldC5hcHBlbmRDaGlsZChzdHlsZSk7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0QnlTZWxlY3RvcjsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBpbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucykge1xuICB2YXIgZWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzdHlsZVwiKTtcbiAgb3B0aW9ucy5zZXRBdHRyaWJ1dGVzKGVsZW1lbnQsIG9wdGlvbnMuYXR0cmlidXRlcyk7XG4gIG9wdGlvbnMuaW5zZXJ0KGVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG4gIHJldHVybiBlbGVtZW50O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydFN0eWxlRWxlbWVudDsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMoc3R5bGVFbGVtZW50KSB7XG4gIHZhciBub25jZSA9IHR5cGVvZiBfX3dlYnBhY2tfbm9uY2VfXyAhPT0gXCJ1bmRlZmluZWRcIiA/IF9fd2VicGFja19ub25jZV9fIDogbnVsbDtcblxuICBpZiAobm9uY2UpIHtcbiAgICBzdHlsZUVsZW1lbnQuc2V0QXR0cmlidXRlKFwibm9uY2VcIiwgbm9uY2UpO1xuICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKSB7XG4gIHZhciBjc3MgPSBcIlwiO1xuXG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChvYmouc3VwcG9ydHMsIFwiKSB7XCIpO1xuICB9XG5cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIkBtZWRpYSBcIi5jb25jYXQob2JqLm1lZGlhLCBcIiB7XCIpO1xuICB9XG5cbiAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBvYmoubGF5ZXIgIT09IFwidW5kZWZpbmVkXCI7XG5cbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIkBsYXllclwiLmNvbmNhdChvYmoubGF5ZXIubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChvYmoubGF5ZXIpIDogXCJcIiwgXCIge1wiKTtcbiAgfVxuXG4gIGNzcyArPSBvYmouY3NzO1xuXG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cblxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG5cbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuXG4gIHZhciBzb3VyY2VNYXAgPSBvYmouc291cmNlTWFwO1xuXG4gIGlmIChzb3VyY2VNYXAgJiYgdHlwZW9mIGJ0b2EgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICBjc3MgKz0gXCJcXG4vKiMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LFwiLmNvbmNhdChidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShzb3VyY2VNYXApKSkpLCBcIiAqL1wiKTtcbiAgfSAvLyBGb3Igb2xkIElFXG5cbiAgLyogaXN0YW5idWwgaWdub3JlIGlmICAqL1xuXG5cbiAgb3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbn1cblxuZnVuY3Rpb24gcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCkge1xuICAvLyBpc3RhbmJ1bCBpZ25vcmUgaWZcbiAgaWYgKHN0eWxlRWxlbWVudC5wYXJlbnROb2RlID09PSBudWxsKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG5cbiAgc3R5bGVFbGVtZW50LnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50KTtcbn1cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuXG5cbmZ1bmN0aW9uIGRvbUFQSShvcHRpb25zKSB7XG4gIHZhciBzdHlsZUVsZW1lbnQgPSBvcHRpb25zLmluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKTtcbiAgcmV0dXJuIHtcbiAgICB1cGRhdGU6IGZ1bmN0aW9uIHVwZGF0ZShvYmopIHtcbiAgICAgIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKTtcbiAgICB9LFxuICAgIHJlbW92ZTogZnVuY3Rpb24gcmVtb3ZlKCkge1xuICAgICAgcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCk7XG4gICAgfVxuICB9O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGRvbUFQSTsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCkge1xuICBpZiAoc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQpIHtcbiAgICBzdHlsZUVsZW1lbnQuc3R5bGVTaGVldC5jc3NUZXh0ID0gY3NzO1xuICB9IGVsc2Uge1xuICAgIHdoaWxlIChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCkge1xuICAgICAgc3R5bGVFbGVtZW50LnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKTtcbiAgICB9XG5cbiAgICBzdHlsZUVsZW1lbnQuYXBwZW5kQ2hpbGQoZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoY3NzKSk7XG4gIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBzdHlsZVRhZ1RyYW5zZm9ybTsiLCJjb25zdCBjcmVhdGVFbGVtZW50ID0ge1xuICAgIGNyZWF0ZVNlY3Rpb246IGZ1bmN0aW9uKGlkTmFtZSkge1xuICAgICAgICBsZXQgc2VjdGlvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzZWN0aW9uXCIpO1xuICAgICAgICBzZWN0aW9uLnNldEF0dHJpYnV0ZSgnaWQnLGlkTmFtZSk7XG4gICAgICAgIHJldHVybiBzZWN0aW9uO1xuICAgIH0sXG4gICAgY3JlYXRlRGl2OiBmdW5jdGlvbihpZE5hbWUpe1xuICAgICAgICBsZXQgZGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICAgICAgZGl2LnNldEF0dHJpYnV0ZSgnaWQnLGlkTmFtZSk7XG4gICAgICAgIHJldHVybiBkaXY7XG4gICAgfSxcbiAgICBjcmVhdGVQYXJhOiBmdW5jdGlvbih0ZXh0KXtcbiAgICAgICAgbGV0IHBhcmEgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwicFwiKTtcbiAgICAgICAgcGFyYS50ZXh0Q29udGVudCA9IHRleHQ7XG4gICAgICAgIHJldHVybiBwYXJhO1xuICAgIH0sXG4gICAgY3JlYXRlTGk6IGZ1bmN0aW9uKHVsLGFycil7XG4gICAgICAgIGZvcihsZXQgaT0wO2k8IGFyci5sZW5ndGg7aSsrKXtcbiAgICAgICAgICAgIGxldCBsaSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJsaVwiKTtcbiAgICAgICAgICAgIGxpLmlubmVySFRNTCA9IGFycltpXTtcbiAgICAgICAgICAgIHVsLmFwcGVuZENoaWxkKGxpKVxuICAgICAgICB9XG4gICAgICAgIHJldHVybiB1bDtcbiAgICB9LFxuICAgIGNyZWF0ZUg6IGZ1bmN0aW9uKG51bSx0ZXh0KXtcbiAgICAgICAgY29uc3QgaGVhZGluZyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoYGgke251bX1gKTtcbiAgICAgICAgaGVhZGluZy5pbm5lclRleHQgPSB0ZXh0O1xuICAgICAgICByZXR1cm4gaGVhZGluZ1xuICAgIH1cbn1cbmNvbnN0IGNyZWF0ZUNvbnRhaW5lciA9ICgpID0+e1xuICAgIGNvbnN0IG1haW4gPSBjcmVhdGVFbGVtZW50LmNyZWF0ZURpdignbWFpbkNvbnRhaW5lcicpO1xuICAgIGRvY3VtZW50LmJvZHkuYXBwZW5kQ2hpbGQobWFpbik7XG4gICAgY29uc3QgaGVhZGVyID0gY3JlYXRlRWxlbWVudC5jcmVhdGVIKDEsXCJCYXR0bGVzaGlwXCIpO1xuICAgIG1haW4uYXBwZW5kQ2hpbGQoaGVhZGVyKTtcbn1cblxuY29uc3QgY3JlYXRlR2FtZUJvYXJkVUkgPSAocGxheWVyMSxjb21wdXRlcjEpID0+IHtcbiAgICBjb25zdCBtYWluID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ21haW5Db250YWluZXInKTtcbiAgICBjb25zdCBoZWFkZXIgPSBjcmVhdGVFbGVtZW50LmNyZWF0ZUgoMSxcIlBsYWNlIHlvdXIgU3VibWFyaW5lIGFueXdoZXJlXCIpO1xuICAgIGhlYWRlci5zZXRBdHRyaWJ1dGUoJ2lkJywnaGVhZGVyJyk7XG4gICAgY29uc3QgZ2FtZWJvYXJkcyA9IGNyZWF0ZUVsZW1lbnQuY3JlYXRlRGl2KCdnYW1lYm9hcmRzJyk7XG4gICAgY29uc3QgcGxheWVyR2FtZWJvYXJkID0gY3JlYXRlRWxlbWVudC5jcmVhdGVEaXYoJ3BsYXllckdhbWVib2FyZCcpO1xuICAgIGNvbnN0IGNvbXB1dGVyR2FtZWJvYXJkID0gY3JlYXRlRWxlbWVudC5jcmVhdGVEaXYoJ2NvbXB1dGVyR2FtZWJvYXJkJyk7XG4gICAgY29uc3QgcGxheWVySGVhZGVyID0gY3JlYXRlRWxlbWVudC5jcmVhdGVIKDIsJ1BsYXllclxcJ3MgQm9hcmQnKTtcbiAgICBjb25zdCBjb21wdXRlckhlYWRlciA9IGNyZWF0ZUVsZW1lbnQuY3JlYXRlSCgyLCdDb21wdXRlclxcJ3MgSGVhZGVyJyk7XG4gICAgY29uc3Qgb3JpZW50YXRpb25CdG4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKTtcbiAgICBvcmllbnRhdGlvbkJ0bi5pbm5lclRleHQgPSAnSG9yaXpvbnRhbCdcbiAgICBvcmllbnRhdGlvbkJ0bi5zZXRBdHRyaWJ1dGUoJ2lkJywnb3JpZW50QnRuJylcbiAgICBwbGF5ZXJIZWFkZXIuc2V0QXR0cmlidXRlKCdpZCcsJ3BsYXllckhlYWRlcicpO1xuICAgIGNvbXB1dGVySGVhZGVyLnNldEF0dHJpYnV0ZSgnaWQnLCdjb21wdXRlckhlYWRlcicpO1xuICAgIGZvcihsZXQgaT0wOyBpPChwbGF5ZXIxLmxlbmd0aCk7aSsrKXtcbiAgICAgICAgZm9yKGxldCBqPTA7IGo8KHBsYXllcjFbaV0ubGVuZ3RoKTtqKyspe1xuICAgICAgICAgICAgbGV0IGdhbWVDZWxsID0gY3JlYXRlRWxlbWVudC5jcmVhdGVEaXYoYCR7aX0ke2p9YClcbiAgICAgICAgICAgIGdhbWVDZWxsLmNsYXNzTGlzdC5hZGQoXCJjZWxsXCIpO1xuICAgICAgICAgICAgcGxheWVyR2FtZWJvYXJkLmFwcGVuZENoaWxkKGdhbWVDZWxsKTtcbiAgICAgICAgfVxuICAgIH1cbiAgICBmb3IobGV0IGk9MDsgaTwoY29tcHV0ZXIxLmxlbmd0aCk7aSsrKXtcbiAgICAgICAgZm9yKGxldCBqPTA7IGo8KGNvbXB1dGVyMVtpXS5sZW5ndGgpO2orKyl7XG4gICAgICAgICAgICBsZXQgZ2FtZUNlbGwgPSBjcmVhdGVFbGVtZW50LmNyZWF0ZURpdihgJHtpfSR7an1jb21wdXRlcmApXG4gICAgICAgICAgICBnYW1lQ2VsbC5jbGFzc0xpc3QuYWRkKFwiY2VsbFwiKTtcbiAgICAgICAgICAgIGNvbXB1dGVyR2FtZWJvYXJkLmFwcGVuZENoaWxkKGdhbWVDZWxsKTtcbiAgICAgICAgfVxuICAgIH1cbiAgICBtYWluLmFwcGVuZENoaWxkKGhlYWRlcilcbiAgICBtYWluLmFwcGVuZENoaWxkKG9yaWVudGF0aW9uQnRuKVxuICAgIG1haW4uYXBwZW5kQ2hpbGQoZ2FtZWJvYXJkcylcbiAgICBnYW1lYm9hcmRzLmFwcGVuZChwbGF5ZXJIZWFkZXIscGxheWVyR2FtZWJvYXJkLGNvbXB1dGVySGVhZGVyLGNvbXB1dGVyR2FtZWJvYXJkKVxuXG59XG5cbmV4cG9ydCB7Y3JlYXRlRWxlbWVudCxjcmVhdGVDb250YWluZXIsY3JlYXRlR2FtZUJvYXJkVUl9OyIsIlxuXG4vL0ZhY3RvcnkgZnVuY3Rpb24gdG8gY3JlYXRlIHRoZSBzaGlwc1xuY29uc3Qgc2hpcEZhY3RvcnkgPSAobmFtZSxsZW5ndGgpID0+IHtcbiAgICAvL2NyZWF0ZXMgYW4gYXJyYXkgdGhlIHNpemUgb2YgdGhlIHNoaXBzIGxlbmd0aCB0byBrZWVwIHRyYWNrIG9mIGhpdHMuXG4gICAgY29uc3Qgc2hpcEhlYWx0aCA9IFtdO1xuICAgIGxldCBpc1BsYWNlZCA9IGZhbHNlO1xuICAgIGNvbnN0IGlzUGxhY2VkU2V0dGVyID0gKGFyZykgPT4gaXNQbGFjZWQgPSBhcmc7XG4gICAgY29uc3QgaXNQbGFjZWRHZXR0ZXIgPSAoKSA9PiBpc1BsYWNlZDtcbiAgICAvL3VwZGF0ZXMgdGhlIHNoaXBIZWFsdGggYXJyYXkgd2l0aCB0aGUgcG9zaXRpb24gdGhlIHNoaXAgZ290IGhpdCBpblxuICAgIGNvbnN0IGhpdCA9ICgpID0+IHtcbiAgICAgICAgc2hpcEhlYWx0aC5wdXNoKCd4JylcbiAgICAgICAgICAgIHJldHVybiBzaGlwSGVhbHRoO1xuICAgIH1cbiAgICAvL2lmIGV2ZXJ5IHZhbHVlIGluIHRoZSBzaGlwSGVhbHRoIGFycmF5IGlzIGhpdCB0aGlzIGZ1bmN0aW9uIHJldHVybnMgdGhhdCB0aGUgc2hpcCBpcyBzdW5rXG4gICAgY29uc3QgaXNTdW5rID0gKCkgPT4ge1xuICAgICAgICBpZihzaGlwSGVhbHRoLmxlbmd0aCA9PT0gbGVuZ3RoKXtcbiAgICAgICAgICAgIHJldHVybiB0cnVlXG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIGZhbHNlXG4gICAgfVxuICAgIHJldHVybiB7bmFtZSxsZW5ndGgsaGl0LCBpc1N1bmssaXNQbGFjZWRHZXR0ZXIsaXNQbGFjZWRTZXR0ZXJ9XG59XG5cbi8vRmFjdG9yeSBmdW5jdGlvbiB0byBjcmVhdGUgZ2FtZSBib2FyZFxuY29uc3QgZ2FtZUJvYXJkRmFjdG9yeSA9ICgpID0+e1xuICAgIGxldCBnYW1lQXJyYXkgPSBbXTtcbiAgICAvL2NyZWF0ZSBlbXB0eSBhcnJheSB0byBpbml0aWFsaXplIHRoZSBnYW1lXG4gICAgY29uc3Qgc3RhcnRHYW1lID0gKCkgPT57XG4gICAgICAgICAgICBnYW1lQXJyYXkgPSBbXG4gICAgICAgICAgICBbJycsJycsJycsJycsJycsJycsJycsJycsJycsJyddLFxuICAgICAgICAgICAgWycnLCcnLCcnLCcnLCcnLCcnLCcnLCcnLCcnLCcnXSxcbiAgICAgICAgICAgIFsnJywnJywnJywnJywnJywnJywnJywnJywnJywnJ10sXG4gICAgICAgICAgICBbJycsJycsJycsJycsJycsJycsJycsJycsJycsJyddLFxuICAgICAgICAgICAgWycnLCcnLCcnLCcnLCcnLCcnLCcnLCcnLCcnLCcnXSxcbiAgICAgICAgICAgIFsnJywnJywnJywnJywnJywnJywnJywnJywnJywnJ10sXG4gICAgICAgICAgICBbJycsJycsJycsJycsJycsJycsJycsJycsJycsJyddLFxuICAgICAgICAgICAgWycnLCcnLCcnLCcnLCcnLCcnLCcnLCcnLCcnLCcnXSxcbiAgICAgICAgICAgIFsnJywnJywnJywnJywnJywnJywnJywnJywnJywnJ10sXG4gICAgICAgICAgICBbJycsJycsJycsJycsJycsJycsJycsJycsJycsJyddXG4gICAgICAgIF1cblxuICAgIH1cbiAgICAvL2xpc3Qgb2Ygc2hpcHMgdGhhdCBhcmUgc3RpbGwgYWxpdmVcbiAgICBsZXQgc2hpcHNBbGl2ZSA9IFtdO1xuICAgIGNvbnN0IHNoaXBzQWxpdmVHZXR0ZXIgPSAoKSA9PiBzaGlwc0FsaXZlO1xuICAgIC8vcGxhY2VzIHNoaXAgaW4gcm93IGFuZCBjb2x1bW4gYW5kIG9yaWVudHMgaG93IHRoZSBwbGF5ZXIgd2FudHMgXG4gICAgY29uc3QgcGxhY2UgPSAoc2hpcCxyb3csIGNvbHVtbiwgb3JpZW50KSA9PiB7XG4gICAgICAgIC8vY2hlY2tzIGlmIHdoZXJlIHRoZSBzaGlwIGlzIHRvIGJlIHBsYWNlZCBpcyBlbXB0eVxuICAgICAgICBjb25zdCBjYW5QbGFjZSA9ICgpID0+IHtcbiAgICAgICAgICAgIGxldCBlbXB0eSA9IHRydWVcbiAgICAgICAgICAgIC8vY2hlY2tpbmcgaWYgc2hpcCBpcyBhbHJlYWR5IGluIHRoZSBzcG90IG5ldyBzaGlwIGlzIHRvIGJlIHBsYWNlZFxuICAgICAgICAgICAgaWYob3JpZW50ID09PSAnaG9yaXpvbnRhbCcpe1xuICAgICAgICAgICAgICAgIGZvcihsZXQgaSA9IGNvbHVtbjsgaTwgKGNvbHVtbitzaGlwLmxlbmd0aCk7IGkrKyl7XG4gICAgICAgICAgICAgICAgICAgIGlmKGdhbWVBcnJheVtyb3ddW2ldICE9PSAnJyl7XG4gICAgICAgICAgICAgICAgICAgICAgICBlbXB0eSA9IGZhbHNlXG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9ICBcbiAgICAgICAgICAgIGVsc2UgaWYob3JpZW50ID09PSAndmVydGljYWwnKXtcbiAgICAgICAgICAgICAgICBmb3IobGV0IGkgPSByb3c7IGk8IChyb3crc2hpcC5sZW5ndGgpOyBpKyspe1xuICAgICAgICAgICAgICAgICAgICBpZihnYW1lQXJyYXlbaV1bY29sdW1uXSAhPT0gJycpe1xuICAgICAgICAgICAgICAgICAgICAgICAgZW1wdHkgPSBmYWxzZVxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSAgXG4gICAgICAgICAgICByZXR1cm4gZW1wdHlcbiAgICAgICAgfTtcbiAgICAgICAgLy9ob3Jpem9udGFsIG9ycmllbnRhdGlvbiBwbGFjZW1lbnRcbiAgICAgICAgaWYob3JpZW50ID09PSAnaG9yaXpvbnRhbCcgICYmIGNhblBsYWNlKCkpIHtcbiAgICAgICAgICAgIGZvcihsZXQgaSA9IGNvbHVtbjsgaTwgKGNvbHVtbitzaGlwLmxlbmd0aCk7IGkrKyl7XG4gICAgICAgICAgICAgICAgZ2FtZUFycmF5W3Jvd11baV0gPSBzaGlwO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgc2hpcHNBbGl2ZS5wdXNoKHNoaXAubmFtZSlcbiAgICAgICAgfVxuXG4gICAgICAgIC8vdmVydGljYWwgb3JyaWVudGF0aW9ucyBwbGFjZW1lbnRcbiAgICAgICAgZWxzZSBpZihvcmllbnQgPT09ICd2ZXJ0aWNhbCcgJiYgY2FuUGxhY2UoKSkge1xuICAgICAgICAgICAgZm9yKGxldCBpID0gcm93OyBpPCgoc2hpcC5sZW5ndGggKyByb3cpKTtpKyspe1xuICAgICAgICAgICAgICAgIGdhbWVBcnJheVtpXVtjb2x1bW5dID0gc2hpcDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHNoaXBzQWxpdmUucHVzaChzaGlwLm5hbWUpXG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIGdhbWVBcnJheTtcbiAgICB9XG5cbiAgICAvL1JlY2lldmVzIGNvb3JkaW5hdGVzIGZyb20gdGhlIGJvYXJkIHRvIHJlY2lldmUgYW4gYXR0YWNrXG4gICAgY29uc3QgcmVjaWV2ZUF0dGFjayA9IChyb3csY29sdW1uKSA9PntcbiAgICAgICAgLy9JZiB0aGUgZ2FtZUFycmF5IGlzIGVtcHR5IHBsYWNlIGEgc21hbGwgeCBmb3IgYSBtaXNzXG4gICAgICAgIGlmKGdhbWVBcnJheVtyb3ddW2NvbHVtbl0gPT09ICcnKXtcbiAgICAgICAgICAgIGdhbWVBcnJheVtyb3ddW2NvbHVtbl0gPSAneCdcbiAgICAgICAgfVxuICAgICAgICBlbHNle1xuICAgICAgICAgICAgLy9pZiB0aGVyZSBpcyBhIHNoaXAgYXQgdGhlIGNvb3JkaW5hdGVzIGhpdCB0aGUgYm9hcmQgYW5kIHBsYWNlIGEgbGFyZ2UgWCB0byBzaG93IHRoZXJlIGlzIGEgaGl0XG4gICAgICAgICAgICBnYW1lQXJyYXlbcm93XVtjb2x1bW5dLmhpdCgpO1xuICAgICAgICAgICAgLy9pZiBpc1N1bmsgcmV0dXJucyB0cnVlIHRoYXQgc2hpcCBnZXRzIHBvcHBlZCBmcm9tIHRoZSBzaGlwc0FsaXZlIGFycmF5LlxuICAgICAgICAgICAgaWYoZ2FtZUFycmF5W3Jvd11bY29sdW1uXS5pc1N1bmsoKSl7XG4gICAgICAgICAgICAgICAgc2hpcHNBbGl2ZS5wb3AoZ2FtZUFycmF5W3Jvd11bY29sdW1uXS5uYW1lKVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZ2FtZUFycmF5W3Jvd11bY29sdW1uXSA9ICdYJztcbiAgICAgICAgICAgIFxuICAgICAgICB9XG4gICAgICAgIHJldHVybiBnYW1lQXJyYXlcbiAgICB9XG4gICAgXG4gICAgY29uc3QgYXJyYXlHZXR0ZXIgPSAoKSA9PiBnYW1lQXJyYXk7XG4gICAgcmV0dXJue3N0YXJ0R2FtZSwgcGxhY2UsIHJlY2lldmVBdHRhY2ssYXJyYXlHZXR0ZXIsIHNoaXBzQWxpdmVHZXR0ZXJ9XG59XG5cbi8vUGxheWVyIGZhY3RvciBGdW5jdGlvblxuY29uc3QgcGxheWVyID0gKCkgPT57XG4gICAgLy9jcmVhdGVzIGEgYm9hcmQgZm9yIHRoZSBwbGF5ZXJcbiAgICBsZXQgcGxheWVyQm9hcmQgPSBnYW1lQm9hcmRGYWN0b3J5KCk7XG4gICAgLy9Jbml0aWFsaXplcyB0aGUgYm9hcmQgZm9yIHRoZSBwbGF5ZXJcbiAgICBwbGF5ZXJCb2FyZC5zdGFydEdhbWUoKTtcbiAgICAvL0hlbHBlciBmdW5jdGlvbiBmb3IgdGhlIHBsYWNlIG1ldGhvZFxuICAgIGNvbnN0IHBsYXllclBsYWNlID0gKHNoaXAscm93LGNvbHVtbixvcmllbnQpID0+e1xuICAgICAgICByZXR1cm4gcGxheWVyQm9hcmQucGxhY2Uoc2hpcCxyb3csY29sdW1uLG9yaWVudCk7XG4gICAgfVxuXG4gICAgLy9yZWNpZXZlcyBhbiBhdHRhY2sgYW5kIHRoZW4gc2VuZHMgdGhhdCBhdHRhY2sgdG8gdGhlIGNvbXB1dGVyQm9hcmRcbiAgICBjb25zdCBwbGF5ZXJBdHRhY2sgPSAoY29tcHV0ZXJCb2FyZCxlKSA9PiB7XG4gICAgICAgIGNvbnN0IHJvdyA9IHBhcnNlSW50KGUudGFyZ2V0LmlkWzBdKVxuICAgICAgICBjb25zdCBjb2wgPSBwYXJzZUludChlLnRhcmdldC5pZFsxXSlcbiAgICAgICAgY29tcHV0ZXJCb2FyZC5yZWNpZXZlQXR0YWNrKHJvdyxjb2wpO1xuICAgICAgICByZXR1cm4gdHJ1ZVxuICAgIH0gICBcbiAgICByZXR1cm4ge3BsYXllckJvYXJkLHBsYXllclBsYWNlLHBsYXllckF0dGFja31cbn1cblxuLy9jb21wdXRlciBmYWN0b3J5IGZ1bmN0aW9uXG5jb25zdCBjb21wdXRlciA9ICgpID0+IHtcbiAgICAvL2NyZWF0ZXMgYSBib2FyZCBmb3IgdGhlIGNvbXB1dGVyXG4gICAgbGV0IGNvbXB1dGVyQm9hcmQgPSBnYW1lQm9hcmRGYWN0b3J5KCk7XG4gICAgLy9Jbml0aWFsaXplcyB0aGUgYm9hcmQgZm9yIHRoZSBjb21wdXRlclxuICAgIGNvbXB1dGVyQm9hcmQuc3RhcnRHYW1lKCk7XG4gICAgLy9TZWxlY3RzIGEgcmFuZG9tIGNvb3JkaW5hdGUuXG4gICAgY29uc3QgY29tcHV0ZXJSYW5kb21BdHRhY2sgPSAocGxheWVyQm9hcmQpID0+e1xuICAgICAgICBsZXQgcmFuZG9tQ2hvaWNlID0gKCkgPT4ge1xuICAgICAgICAgICAgbGV0IHJhbmRvbVJvdyA9IE1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqMTApXG4gICAgICAgICAgICBsZXQgcmFuZG9tQ29sdW1uID0gTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogMTApXG4gICAgICAgICAgICByZXR1cm4gW3JhbmRvbVJvdywgcmFuZG9tQ29sdW1uXVxuICAgICAgICB9XG4gICAgICAgIGxldCByYW5kb209IHJhbmRvbUNob2ljZSgpO1xuICAgICAgICBsZXQgcm93ID0gcmFuZG9tWzBdO1xuICAgICAgICBsZXQgY29sdW1uID0gcmFuZG9tWzFdO1xuICAgICAgICBpZigocGxheWVyQm9hcmQuYXJyYXlHZXR0ZXIoKVtyb3ddW2NvbHVtbl0gPT09ICd4JykgfHwgKHBsYXllckJvYXJkLmFycmF5R2V0dGVyKClbcm93XVtjb2x1bW5dID09PSAnWCcpKXtcbiAgICAgICAgICAgIGNvbXB1dGVyUmFuZG9tQXR0YWNrKHBsYXllckJvYXJkKVxuICAgICAgICB9XG4gICAgICAgIGVsc2V7XG4gICAgICAgICAgICBjb25zb2xlLmxvZyhwbGF5ZXJCb2FyZC5hcnJheUdldHRlcigpW3Jvd11bY29sdW1uXSlcbiAgICAgICAgICAgIHBsYXllckJvYXJkLnJlY2lldmVBdHRhY2socm93LGNvbHVtbik7XG4gICAgICAgICAgICByZXR1cm4gcGxheWVyQm9hcmQuYXJyYXlHZXR0ZXIoKTtcbiAgICAgICAgfVxuXG4gICAgfVxuICAgIHJldHVybiB7Y29tcHV0ZXJCb2FyZCxjb21wdXRlclJhbmRvbUF0dGFja31cbn1cblxuXG5leHBvcnQge3NoaXBGYWN0b3J5LGdhbWVCb2FyZEZhY3RvcnksIHBsYXllcixjb21wdXRlcn0iLCJpbXBvcnQgJy4vc3R5bGUuY3NzJztcbmltcG9ydCB7Y3JlYXRlRWxlbWVudCxjcmVhdGVDb250YWluZXIsY3JlYXRlR2FtZUJvYXJkVUl9IGZyb20gJy4vZG9tTWFuaXAuanMnO1xuaW1wb3J0IHtzaGlwRmFjdG9yeSwgcGxheWVyLCBjb21wdXRlciwgZ2FtZUJvYXJkRmFjdG9yeX0gZnJvbSAnLi9mYWN0b3JpZXMnO1xuaW1wb3J0IHsgcGxheWVySG92ZXIscGxheWVyRXhpdCxwbGF5ZXJQbGFjZSwgaXNTaGlwUGxhY2VkfSBmcm9tICcuL3BsYXllclBsYWNlJztcbi8vaW5pdGlsaXplcyB0aGUgZ2FtZVxuY29uc3QgaW5pdEdhbWUgPSAoKSA9PntcbiAgICAvL2NyZWF0ZXMgYSBwbGF5ZXIgYW5kIGEgY29tcHV0ZXJcbiAgICBjb25zdCBwbGF5ZXIxID0gcGxheWVyKCk7XG4gICAgY29uc3QgY29tcHV0ZXIxID0gY29tcHV0ZXIoKTtcblxuICAgIC8vY3JlYXRlcyBhbGwgc2hpcHMgZm9yIHBsYXllciBhbmQgY29tcHV0ZXJcbiAgICBjb25zdCBwbGF5ZXJTdWIgPSBzaGlwRmFjdG9yeShcInN1Ym1hcmluZVwiLDMpO1xuICAgIGNvbnN0IHBsYXllckNhcnJpZXIgPSBzaGlwRmFjdG9yeShcImNhcnJpZXJcIiw1KTtcbiAgICBjb25zdCBwbGF5ZXJCYXR0bGVzaGlwID0gc2hpcEZhY3RvcnkoJ2JhdHRsZXNoaXAnLDQpO1xuICAgIGNvbnN0IHBsYXllckNydWlzZXIgPSBzaGlwRmFjdG9yeSgnY3J1aXNlcicsMyk7XG4gICAgY29uc3QgcGxheWVyRGVzdHJveWVyID0gc2hpcEZhY3RvcnkoJ2Rlc3Ryb3llcicsIDIpO1xuICAgIGNvbnN0IGNvbXB1dGVyU3ViID0gc2hpcEZhY3RvcnkoXCJzdWJtYXJpbmVcIiwzKTtcbiAgICBjb25zdCBjb21wdXRlckNhcnJpZXIgPSBzaGlwRmFjdG9yeShcImNhcnJpZXJcIiw1KTtcbiAgICBjb25zdCBjb21wdXRlckJhdHRsZXNoaXAgPSBzaGlwRmFjdG9yeSgnYmF0dGxlc2hpcCcsNCk7XG4gICAgY29uc3QgY29tcHV0ZXJDcnVpc2VyID0gc2hpcEZhY3RvcnkoJ2NydWlzZXInLDMpO1xuICAgIGNvbnN0IGNvbXB1dGVyRGVzdHJveWVyID0gc2hpcEZhY3RvcnkoJ2Rlc3Ryb3llcicsIDIpO1xuICAgIGxldCBwbGF5ZXJTaGlwcyA9IFtwbGF5ZXJTdWIscGxheWVyQ2FycmllcixwbGF5ZXJCYXR0bGVzaGlwLHBsYXllckNydWlzZXIscGxheWVyRGVzdHJveWVyXVxuICAgIC8vY3JlYXRlcyB0aGUgVUlcbiAgICBjcmVhdGVDb250YWluZXIoKTtcbiAgICBjcmVhdGVHYW1lQm9hcmRVSShwbGF5ZXIxLnBsYXllckJvYXJkLmFycmF5R2V0dGVyKCksY29tcHV0ZXIxLmNvbXB1dGVyQm9hcmQuYXJyYXlHZXR0ZXIoKSk7XG4gICAgLy8gcGxheWVySG92ZXIocGxheWVyQ2Fycmllcik7XG4gICAgLy8gcGxheWVyRXhpdChwbGF5ZXJDYXJyaWVyKTtcbiAgICAvLyBwbGF5ZXJQbGFjZShwbGF5ZXJDYXJyaWVyLHBsYXllcjEsY29tcHV0ZXIxKTtcbiAgICBwbGF5ZXJQbGFjZShwbGF5ZXJTaGlwcyxwbGF5ZXIxLGNvbXB1dGVyMSxwbGF5ZXJTdWIpXG4gICAgLy8gcGxheWVyMS5wbGF5ZXJQbGFjZShwbGF5ZXJTdWIsMCwwLCdob3Jpem9udGFsJyk7XG4gICAgLy8gcGxheWVyMS5wbGF5ZXJQbGFjZShwbGF5ZXJDYXJyaWVyLDEsMCwnaG9yaXpvbnRhbCcpO1xuICAgIC8vIHBsYXllcjEucGxheWVyUGxhY2UocGxheWVyQmF0dGxlc2hpcCwyLDAsJ2hvcml6b250YWwnKTtcbiAgICAvLyBwbGF5ZXIxLnBsYXllclBsYWNlKHBsYXllckNydWlzZXIsNCwwLCdob3Jpem9udGFsJyk7XG4gICAgLy8gcGxheWVyMS5wbGF5ZXJQbGFjZShwbGF5ZXJEZXN0cm95ZXIsNSwwLCdob3Jpem9udGFsJyk7XG5cbiAgICBjb21wdXRlclJhbmRvbVBsYWNlKGNvbXB1dGVyMSxjb21wdXRlclN1Yik7XG4gICAgY29tcHV0ZXJSYW5kb21QbGFjZShjb21wdXRlcjEsY29tcHV0ZXJDYXJyaWVyKTtcbiAgICBjb21wdXRlclJhbmRvbVBsYWNlKGNvbXB1dGVyMSxjb21wdXRlckJhdHRsZXNoaXApO1xuICAgIGNvbXB1dGVyUmFuZG9tUGxhY2UoY29tcHV0ZXIxLGNvbXB1dGVyQ3J1aXNlcik7XG4gICAgY29tcHV0ZXJSYW5kb21QbGFjZShjb21wdXRlcjEsY29tcHV0ZXJEZXN0cm95ZXIpO1xuICAgIGNvbnNvbGUubG9nKGNvbXB1dGVyMS5jb21wdXRlckJvYXJkLmFycmF5R2V0dGVyKCkpO1xuXG5cbiAgICB1cGRhdGVHYW1lYm9hcmQocGxheWVyMSxjb21wdXRlcjEpO1xuICAgIGNvbnN0IGNvbXB1dGVyR2FtZWJvYXJkRGl2ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2NvbXB1dGVyR2FtZWJvYXJkJyk7XG4gICAgY29tcHV0ZXJHYW1lYm9hcmREaXYuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLGUgPT4ge1xuICAgICAgICBwbGF5R2FtZShwbGF5ZXIxLGNvbXB1dGVyMSxlKVxuICAgIH0pXG59XG5cblxuLy9SYW5kb21seSBwbGFjZXMgY29tcHV0ZXIgc2hpcHNcbmNvbnN0IGNvbXB1dGVyUmFuZG9tUGxhY2UgPSAoY29tcHV0ZXIsIHNoaXApID0+IHtcbiAgICAvL1JhbmRvbWx5IHNlbGVjdHMgMCBvciAxLiAwIGlzIGhvcml6b250YWwgYW5kIDEgaXMgdmVydGljYWxcbiAgICBsZXQgcmFuZG9tT3JpZW50YXRpb24gPSBNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiAyKTtcbiAgICAvL2NoZWNrcyB0byBzaGVlIGlmIHNoaXAgd291bGQgaW50ZXJzZWN0IGFub3RoZXIgc2hpcCB0aGF0IGlzIGFscmVhZHkgb24gdGhlIGJvYXJkXG4gICAgY29uc3QgaW50ZXJzZWN0Q2hlY2sgPSAoY29tcHV0ZXIsc2hpcCxyb3csY29sLG9yaWVudCk9PntcbiAgICAgICAgaWYob3JpZW50ID09PSAndmVydGljYWwnKXtcbiAgICAgICAgICAgIGZvcihsZXQgaSA9IDA7aTxzaGlwLmxlbmd0aDtpKyspe1xuICAgICAgICAgICAgICAgIC8vaXRlcmF0ZXMgdGhyb3VnaCB0aGUgc2hpcHMgbGVuZ3RoIGFuZCBhZGRpbmcgdGhlIGluZGV4IHRvIHRoZSByb3cgYmVjYXVzZSBpdCBpcyBwbGFjZWQgdmVydGljYWxseS4gXG4gICAgICAgICAgICAgICAgLy9JZiB0aGUgZWxlbWVudCBpcyBub3QgZW1wdHkgaXQgcmV0dXJucyBmYWxzZVxuICAgICAgICAgICAgICAgIGlmKGNvbXB1dGVyLmNvbXB1dGVyQm9hcmQuYXJyYXlHZXR0ZXIoKVtyb3craV1bY29sXSAhPT0gJycpe1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gZmFsc2VcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICByZXR1cm4gdHJ1ZVxuICAgICAgICB9XG4gICAgICAgIGVsc2V7XG4gICAgICAgICAgICAgICAgLy9pdGVyYXRlcyB0aHJvdWdoIHRoZSBzaGlwcyBsZW5ndGggYW5kIGFkZGluZyB0aGUgaW5kZXggdG8gdGhlIGNvbHVtbiBiZWNhdXNlIGl0IGlzIHBsYWNlZCBob3Jpem9udGFsbHkuIFxuICAgICAgICAgICAgICAgIC8vSWYgdGhlIGVsZW1lbnQgaXMgbm90IGVtcHR5IGl0IHJldHVybnMgZmFsc2VcbiAgICAgICAgICAgIGZvcihsZXQgaSA9IDA7aTxzaGlwLmxlbmd0aDtpKyspe1xuICAgICAgICAgICAgICAgIGlmKGNvbXB1dGVyLmNvbXB1dGVyQm9hcmQuYXJyYXlHZXR0ZXIoKVtyb3ddW2NvbCtpXSAhPT0gJycpe1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gZmFsc2VcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICByZXR1cm4gdHJ1ZVxuICAgICAgICB9XG4gICAgfVxuICAgICAgICAvL3BsYWNlcyB0aGUgc2hpcCByYW5kb21seSBpbiB2ZXJ0aWNhbCBvcmllbnRhdGlvblxuICAgIGlmKHJhbmRvbU9yaWVudGF0aW9uID09PSAxKXtcbiAgICAgICAgXG4gICAgICAgIGxldCByb3cgPSBNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiAoMTAtc2hpcC5sZW5ndGgpKTtcbiAgICAgICAgbGV0IGNvbCA9IE1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSoxMCk7XG4gICAgICAgIC8vY2hlY2tzIHRvIHNlZSBpZiBpdCBpcyBpbnRlcmVjdGluZy4gSWYgc28gdGhlbiBpdCBjYWxscyB0aGUgcmFuZG9tUGxhY2UgZnVuY3Rpb24gYWdhaW5cbiAgICAgICAgaWYoaW50ZXJzZWN0Q2hlY2soY29tcHV0ZXIsc2hpcCxyb3csY29sLCd2ZXJ0aWNhbCcpKXtcbiAgICAgICAgICAgIGNvbXB1dGVyLmNvbXB1dGVyQm9hcmQucGxhY2Uoc2hpcCxyb3csY29sLCd2ZXJ0aWNhbCcpO1xuICAgICAgICB9XG4gICAgICAgIGVsc2V7Y29tcHV0ZXJSYW5kb21QbGFjZShjb21wdXRlcixzaGlwKX1cblxuICAgIH1cbiAgICAvL3BsYWNlcyB0aGUgc2hpcCByYW5kb21seSBpbiBob3Jpem9udGFsIG9ycmllbnRhdGlvblxuICAgIGVsc2V7XG4gICAgICAgIGxldCByb3cgPSBNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkqMTApO1xuICAgICAgICBsZXQgY29sID0gTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogKDEwLXNoaXAubGVuZ3RoKSk7XG4gICAgICAgIFxuICAgICAgICBpZihpbnRlcnNlY3RDaGVjayhjb21wdXRlcixzaGlwLHJvdyxjb2wsJ2hvcml6b250YWwnKSl7XG4gICAgICAgICAgICBjb21wdXRlci5jb21wdXRlckJvYXJkLnBsYWNlKHNoaXAscm93LGNvbCwnaG9yaXpvbnRhbCcpXG4gICAgICAgIH1cbiAgICAgICAgZWxzZXtjb21wdXRlclJhbmRvbVBsYWNlKGNvbXB1dGVyLHNoaXApfVxuICAgIH1cbn1cblxuY29uc3QgcGxheUdhbWUgPSAocGxheWVyMSxjb21wdXRlcjEsZSkgPT4ge1xuICAgIFxuICAgICAgICBwbGF5ZXIxLnBsYXllckF0dGFjayhjb21wdXRlcjEuY29tcHV0ZXJCb2FyZCxlKVxuICAgICAgICBjb21wdXRlcjEuY29tcHV0ZXJSYW5kb21BdHRhY2socGxheWVyMS5wbGF5ZXJCb2FyZClcbiAgICAgICAgdXBkYXRlR2FtZWJvYXJkKHBsYXllcjEsY29tcHV0ZXIxKTtcbn1cblxuY29uc3QgZ2FtZU92ZXI9IChwbGF5ZXIsY29tcHV0ZXIpID0+IHtcbiAgICAvLyBjb25zb2xlLmxvZyhjb21wdXRlci5jb21wdXRlckJvYXJkLnNoaXBzQWxpdmVHZXR0ZXIoKSlcbiAgICBpZihjb21wdXRlci5jb21wdXRlckJvYXJkLnNoaXBzQWxpdmVHZXR0ZXIoKS5sZW5ndGggPT09MCAgfHwgcGxheWVyLnBsYXllckJvYXJkLnNoaXBzQWxpdmVHZXR0ZXIoKS5sZW5ndGggPT09IDApe1xuICAgICAgICByZXR1cm4gdHJ1ZVxuICAgIH1cbiAgICByZXR1cm4gZmFsc2Vcbn1cblxuY29uc3QgdXBkYXRlR2FtZWJvYXJkID0gKHBsYXllcjEsY29tcHV0ZXIxKSA9PntcbiAgICBpZighZ2FtZU92ZXIocGxheWVyMSxjb21wdXRlcjEpKXtcbiAgICAgICAgZm9yKGxldCBpPTA7IGk8KHBsYXllcjEucGxheWVyQm9hcmQuYXJyYXlHZXR0ZXIoKS5sZW5ndGgpO2krKyl7XG4gICAgICAgICAgICBmb3IobGV0IGo9MDsgajwocGxheWVyMS5wbGF5ZXJCb2FyZC5hcnJheUdldHRlcigpW2ldLmxlbmd0aCk7aisrKXtcbiAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICBsZXQgZ2FtZUNlbGwgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChgJHtpfSR7an1gKVxuICAgICAgICAgICAgICAgIGlmKHR5cGVvZiBwbGF5ZXIxLnBsYXllckJvYXJkLmFycmF5R2V0dGVyKClbaV1bal0gPT09ICdvYmplY3QnKXtcbiAgICAgICAgICAgICAgICAgICAgbGV0IG5hbWUgPSBwbGF5ZXIxLnBsYXllckJvYXJkLmFycmF5R2V0dGVyKClbaV1bal0ubmFtZVxuICAgICAgICAgICAgICAgICAgICBnYW1lQ2VsbC5jbGFzc0xpc3QuYWRkKG5hbWUpXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGVsc2UgaWYocGxheWVyMS5wbGF5ZXJCb2FyZC5hcnJheUdldHRlcigpW2ldW2pdID09PSAneCcpe1xuICAgICAgICAgICAgICAgICAgICBnYW1lQ2VsbC5jbGFzc0xpc3QuYWRkKCdlbXB0eScpXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGVsc2UgaWYocGxheWVyMS5wbGF5ZXJCb2FyZC5hcnJheUdldHRlcigpW2ldW2pdID09PSAnWCcpe1xuICAgICAgICAgICAgICAgICAgICBnYW1lQ2VsbC5jbGFzc0xpc3QuYWRkKCdoaXQnKVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBmb3IobGV0IGk9MDsgaTwoY29tcHV0ZXIxLmNvbXB1dGVyQm9hcmQuYXJyYXlHZXR0ZXIoKS5sZW5ndGgpO2krKyl7XG4gICAgICAgICAgICBmb3IobGV0IGo9MDsgajwoY29tcHV0ZXIxLmNvbXB1dGVyQm9hcmQuYXJyYXlHZXR0ZXIoKVtpXS5sZW5ndGgpO2orKyl7XG4gICAgICAgICAgICAgICAgbGV0IGdhbWVDZWxsID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoYCR7aX0ke2p9Y29tcHV0ZXJgKVxuICAgICAgICAgICAgICAgIGlmKGNvbXB1dGVyMS5jb21wdXRlckJvYXJkLmFycmF5R2V0dGVyKClbaV1bal0gPT09ICd4Jyl7XG4gICAgICAgICAgICAgICAgICAgIGdhbWVDZWxsLmNsYXNzTGlzdC5hZGQoJ2VtcHR5JylcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgZWxzZSBpZihjb21wdXRlcjEuY29tcHV0ZXJCb2FyZC5hcnJheUdldHRlcigpW2ldW2pdID09PSAnWCcpe1xuICAgICAgICAgICAgICAgICAgICBnYW1lQ2VsbC5jbGFzc0xpc3QuYWRkKCdoaXQnKVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cbiAgICBlbHNle1xuICAgICAgICBhbGVydCgnR2FtZSBPdmVyJylcbiAgICB9XG4gICAgfVxuXG5cbmluaXRHYW1lKClcblxuXG5cbmV4cG9ydCB7c2hpcEZhY3RvcnksZ2FtZUJvYXJkRmFjdG9yeSwgcGxheWVyLGNvbXB1dGVyLHVwZGF0ZUdhbWVib2FyZH07IiwiaW1wb3J0IHsgdXBkYXRlR2FtZWJvYXJkIH0gZnJvbSBcIi4vaW5kZXhcIjtcbi8vIENvZGUgdG8gdmlzdWFsaXplIHNoaXAgcGxhY2VtZW50XG5cbmxldCBjdXJyZW50U2hpcDtcbi8vcGxheWVySG92ZXIgc2hvd3MgYW4gb3V0bGluZSBvZiB0aGUgc2hpcCB0byBiZSBwbGFjZWRcbmNvbnN0IHBsYXllckhvdmVyID0gKGV2ZW50KSA9PiB7XG4gICAgbGV0IGJlZ2luSW5kZXggPSBwYXJzZUludChldmVudC50YXJnZXQuaWQpO1xuICAgIGxldCBvcmllbnRhdGlvbkJ0biA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdvcmllbnRCdG4nKTtcbiAgICAvL091dGxpbmUgaWYgaXQgaXMgSG9yaXpvbnRhbFxuICAgIGlmKG9yaWVudGF0aW9uQnRuLnRleHRDb250ZW50ID09PSAnSG9yaXpvbnRhbCcpe1xuICAgICAgICAvL0RldGVybWluZXMgaWYgdGhlIG91dGxpbmUgd291bGQgYmUgb3V0c2lkZSBvZiB0aGUgYWxsb3dhYmxlIHJhbmdlXG4gICAgICAgIGlmKGJlZ2luSW5kZXglMTA+KGJlZ2luSW5kZXgrY3VycmVudFNoaXAubGVuZ3RoKSUxMCAmJiAoYmVnaW5JbmRleCtjdXJyZW50U2hpcC5sZW5ndGgpJTEwICE9PSAwKXtcbiAgICAgICAgfVxuICAgICAgICBlbHNle1xuICAgICAgICAgICAgLy9pbnRlcmF0ZXMgdGhyb3VnaCB0aGUgc2hpcCBsZW5ndGggdG8gb3V0bGluZSB0aGUgY29ycmVjdCBsZW5ndGhcbiAgICAgICAgICAgIGZvcihsZXQgaSA9IDA7IGk8Y3VycmVudFNoaXAubGVuZ3RoO2krKyl7XG4gICAgICAgICAgICAgICAgbGV0IGluZGV4ID0gYmVnaW5JbmRleCArIGk7XG4gICAgICAgICAgICAgICAgLy9pbmRleHMgdW5kZXIgMTAgYmVnaW4gd2l0aCBhIDAgc28gd2UgbmVlZCB0byBhZGQgYSBzdHJpbmcgJzAnIHRvIHRoZSBpbmRleFxuICAgICAgICAgICAgICAgIGlmKGluZGV4IDwgMTApe1xuICAgICAgICAgICAgICAgICAgICBpbmRleCA9ICcwJyArIGluZGV4O1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAvL2dldHMgdGhlIGNvcnJlY3QgY2VsbHMgdG8gc2VsZWN0XG4gICAgICAgICAgICAgICAgbGV0IGN1cnJlbnRUYXIgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChgJHtpbmRleH1gKTtcbiAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICBjdXJyZW50VGFyLmNsYXNzTGlzdC5hZGQoJ3NlbGVjdGVkJyk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG4gICAgLy9zYW1lIGFzIGFib3ZlIGJ1dCBldmVyeXRoaW5nIGlzIG11bHRpcGxpZWQgYnkgMTAgdG8gbWFrZSBpdCB3b3JrIGZvciB2ZXJ0aWNhbCBwbGFjZW1lbnRcbiAgICBlbHNle1xuICAgICAgICBpZihiZWdpbkluZGV4JTEwPihiZWdpbkluZGV4K2N1cnJlbnRTaGlwLmxlbmd0aCklMTAgJiYgKGJlZ2luSW5kZXgrY3VycmVudFNoaXAubGVuZ3RoKSUxMCAhPT0gMCl7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZXtcbiAgICAgICAgICAgIGZvcihsZXQgaSA9IDA7IGk8Y3VycmVudFNoaXAubGVuZ3RoKjEwO2krPTEwKXtcbiAgICAgICAgICAgICAgICBsZXQgaW5kZXggPSBiZWdpbkluZGV4ICsgaTtcbiAgICAgICAgICAgICAgICBpZihpbmRleCA8IDEwKXtcbiAgICAgICAgICAgICAgICAgICAgaW5kZXggPSAnMCcgKyBpbmRleDtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgbGV0IGN1cnJlbnRUYXIgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChgJHtpbmRleH1gKTtcbiAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICBjdXJyZW50VGFyLmNsYXNzTGlzdC5hZGQoJ3NlbGVjdGVkJyk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG5cbn1cbi8vY2hhbmdlcyB0aGUgb3JpZW50IGJ1dHRvbiBcbmNvbnN0IG9yaWVudEJ0biA9ICgpID0+IHtcbiAgICBjb25zb2xlLmxvZygnb3JpZW50JylcbiAgICBsZXQgb3JpZW50YXRpb25CdG4gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnb3JpZW50QnRuJyk7XG4gICAgbGV0IHBsYXllckJvYXJkID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3BsYXllckdhbWVib2FyZCcpO1xuICAgIC8vY2hhbmdlcyB0ZXh0IHdoZW4gY2xpY2tlZFxuICAgIGlmKG9yaWVudGF0aW9uQnRuLnRleHRDb250ZW50ID09PSAnSG9yaXpvbnRhbCcpe1xuICAgICAgICBvcmllbnRhdGlvbkJ0bi50ZXh0Q29udGVudCA9ICdWZXJ0aWNhbCc7XG4gICAgfVxuICAgIGVsc2V7XG4gICAgICAgIG9yaWVudGF0aW9uQnRuLnRleHRDb250ZW50ID0gJ0hvcml6b250YWwnO1xuICAgIH1cbiAgICAvLzQgbGluZXMgYmVsb3cgcmVtb3ZlIGFuZCBhZGQgbGlzdGVuZXJzIHNvIHRoZXkgdXBkYXRlIHRoZSBvcmllbnRhdGlvbi5cbiAgICBwbGF5ZXJCb2FyZC5yZW1vdmVFdmVudExpc3RlbmVyKCdtb3VzZW91dCcscGxheWVyRXhpdCk7XG4gICAgcGxheWVyQm9hcmQucmVtb3ZlRXZlbnRMaXN0ZW5lcignbW91c2VvdmVyJyxwbGF5ZXJIb3Zlcik7XG4gICAgcGxheWVyQm9hcmQuYWRkRXZlbnRMaXN0ZW5lcignbW91c2VvdmVyJyxwbGF5ZXJIb3Zlcik7XG4gICAgcGxheWVyQm9hcmQuYWRkRXZlbnRMaXN0ZW5lcignbW91c2VvdXQnLHBsYXllckV4aXQpO1xuICAgIFxufVxuLy8gQ29kZSB0byBkZWxldGUgdGhlIHNoaXAgdmlzdWFsaXphdGlvblxuY29uc3QgcGxheWVyRXhpdCA9IChldmVudCkgPT4ge1xuICAgIGxldCBiZWdpbkluZGV4ID0gcGFyc2VJbnQoZXZlbnQudGFyZ2V0LmlkKTtcbiAgICBsZXQgb3JpZW50YXRpb25CdG4gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnb3JpZW50QnRuJyk7XG4gICAgaWYob3JpZW50YXRpb25CdG4udGV4dENvbnRlbnQgPT09ICdIb3Jpem9udGFsJyl7XG4gICAgICAgIGZvcihsZXQgaSA9IDA7IGk8Y3VycmVudFNoaXAubGVuZ3RoO2krKyl7XG4gICAgICAgICAgICBsZXQgaW5kZXggPSBiZWdpbkluZGV4ICsgaTtcbiAgICAgICAgICAgIFxuICAgICAgICAgICAgaWYoaW5kZXggPCAxMCl7XG4gICAgICAgICAgICAgICAgaW5kZXggPSAnMCcgKyBpbmRleFxuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKGluZGV4KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGxldCBjdXJyZW50VGFyID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoYCR7aW5kZXh9YCk7XG4gICAgICAgICAgICBcbiAgICAgICAgICAgIGN1cnJlbnRUYXIuY2xhc3NMaXN0LnJlbW92ZSgnc2VsZWN0ZWQnKTtcbiAgICAgICAgfVxuICAgIH1cbiAgICBlbHNle1xuICAgICAgICBmb3IobGV0IGkgPSAwOyBpPGN1cnJlbnRTaGlwLmxlbmd0aCoxMDtpKz0xMCl7XG4gICAgICAgICAgICBsZXQgaW5kZXggPSBiZWdpbkluZGV4ICsgaTtcbiAgICAgICAgICAgIFxuICAgICAgICAgICAgaWYoaW5kZXggPCAxMCl7XG4gICAgICAgICAgICAgICAgaW5kZXggPSAnMCcgKyBpbmRleFxuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKGluZGV4KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGxldCBjdXJyZW50VGFyID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoYCR7aW5kZXh9YCk7XG4gICAgICAgICAgICBcbiAgICAgICAgICAgIGN1cnJlbnRUYXIuY2xhc3NMaXN0LnJlbW92ZSgnc2VsZWN0ZWQnKTtcbiAgICAgICAgfVxuICAgIH1cblxufVxuXG4vL1BsYWNlcyBzaGlwXG5jb25zdCBwbGF5ZXJQbGFjZSA9IChzaGlwcyxwbGF5ZXIsY29tcHV0ZXIsc2hpcCkgPT4ge1xuICAgIGxldCBwbGF5ZXJCb2FyZCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdwbGF5ZXJHYW1lYm9hcmQnKTtcbiAgICBsZXQgb3JpZW50YXRpb25CdG4gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnb3JpZW50QnRuJyk7XG4gICAgY3VycmVudFNoaXAgPSBzaGlwO1xuXG4gICAgcGxheWVyQm9hcmQucmVtb3ZlRXZlbnRMaXN0ZW5lcignbW91c2VvdXQnLHBsYXllckV4aXQpO1xuICAgIHBsYXllckJvYXJkLnJlbW92ZUV2ZW50TGlzdGVuZXIoJ21vdXNlb3ZlcicscGxheWVySG92ZXIpO1xuICAgIHBsYXllckJvYXJkLmFkZEV2ZW50TGlzdGVuZXIoJ21vdXNlb3ZlcicscGxheWVySG92ZXIpO1xuICAgIHBsYXllckJvYXJkLmFkZEV2ZW50TGlzdGVuZXIoJ21vdXNlb3V0JyxwbGF5ZXJFeGl0KTtcbiAgICBvcmllbnRhdGlvbkJ0bi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIG9yaWVudEJ0bik7XG5cbiAgICBwbGF5ZXJCb2FyZC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsZnVuY3Rpb24oZXZlbnQpe1xuICAgICAgICBsZXQgZWxlbWVudCA9IGV2ZW50LnRhcmdldC5pZDtcbiAgICAgICAgcGxheWVyLnBsYXllclBsYWNlKHNoaXAscGFyc2VJbnQoZWxlbWVudFswXSkscGFyc2VJbnQoZWxlbWVudFsxXSksb3JpZW50YXRpb25CdG4udGV4dENvbnRlbnQudG9Mb3dlckNhc2UoKSk7XG4gICAgICAgIHVwZGF0ZUdhbWVib2FyZChwbGF5ZXIsY29tcHV0ZXIpO1xuICAgICAgICBzaGlwLmlzUGxhY2VkU2V0dGVyKHRydWUpO1xuICAgICAgICBwbGF5ZXJFeGl0KGV2ZW50KVxuICAgICAgICBpZihpc1NoaXBQbGFjZWQoc2hpcHMpICE9PSB0cnVlICYmIHBsYXllci5wbGF5ZXJCb2FyZC5zaGlwc0FsaXZlR2V0dGVyKCkuaW5jbHVkZXMoc2hpcC5uYW1lKSl7XG4gICAgICAgICAgICBwbGF5ZXJQbGFjZShzaGlwcyxwbGF5ZXIsY29tcHV0ZXIsaXNTaGlwUGxhY2VkKHNoaXBzKSlcbiAgICAgICAgfVxuICAgICAgICBlbHNlIGlmKHBsYXllci5wbGF5ZXJCb2FyZC5zaGlwc0FsaXZlR2V0dGVyKCkubGVuZ3RoPDUpe1xuICAgICAgICAgICAgcGxheWVyUGxhY2Uoc2hpcHMscGxheWVyLGNvbXB1dGVyLHNoaXApXG4gICAgICAgIH1cbiAgICB9LCB7b25jZTp0cnVlfSlcbn1cblxuY29uc3QgaXNTaGlwUGxhY2VkPSAoYXJyKSA9PiB7XG4gICAgZm9yKGxldCBpID0gMDsgaTxhcnIubGVuZ3RoO2krKyl7XG4gICAgICAgIGlmKCFhcnJbaV0uaXNQbGFjZWRHZXR0ZXIoKSl7XG5cbiAgICAgICAgICAgIHJldHVybiBhcnJbaV1cbiAgICAgICAgfVxuICAgIH1cbiAgICBsZXQgcGxheWVyQm9hcmQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgncGxheWVyR2FtZWJvYXJkJyk7XG4gICAgcGxheWVyQm9hcmQucmVtb3ZlRXZlbnRMaXN0ZW5lcignbW91c2VvdmVyJyxwbGF5ZXJIb3Zlcik7XG4gICAgcGxheWVyQm9hcmQucmVtb3ZlRXZlbnRMaXN0ZW5lcignbW91c2VvdXQnLHBsYXllckV4aXQpO1xuXG4gICAgcmV0dXJuIHRydWVcbn1cblxuXG5cbmV4cG9ydCB7cGxheWVySG92ZXIscGxheWVyRXhpdCxwbGF5ZXJQbGFjZSxpc1NoaXBQbGFjZWR9IiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHRpZDogbW9kdWxlSWQsXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbiIsIi8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSAobW9kdWxlKSA9PiB7XG5cdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuXHRcdCgpID0+IChtb2R1bGVbJ2RlZmF1bHQnXSkgOlxuXHRcdCgpID0+IChtb2R1bGUpO1xuXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCB7IGE6IGdldHRlciB9KTtcblx0cmV0dXJuIGdldHRlcjtcbn07IiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsIiIsIi8vIHN0YXJ0dXBcbi8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuLy8gVGhpcyBlbnRyeSBtb2R1bGUgaXMgcmVmZXJlbmNlZCBieSBvdGhlciBtb2R1bGVzIHNvIGl0IGNhbid0IGJlIGlubGluZWRcbnZhciBfX3dlYnBhY2tfZXhwb3J0c19fID0gX193ZWJwYWNrX3JlcXVpcmVfXyhcIi4vc3JjL2luZGV4LmpzXCIpO1xuIiwiIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9