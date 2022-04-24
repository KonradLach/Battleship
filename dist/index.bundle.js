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
    const gameboards = createElement.createDiv('gameboards');
    const playerGameboard = createElement.createDiv('playerGameboard');
    const computerGameboard = createElement.createDiv('computerGameboard');
    const playerHeader = createElement.createH(2,'Player\'s Board');
    const computerHeader = createElement.createH(2,'Computer\'s Header')
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
    //list of ships that are still alive
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
    const shipsAliveGetter = () => shipsAlive;
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
        playerBoard.place(ship,row,column,orient);
        return playerBoard
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
/* harmony export */   "computer": () => (/* reexport safe */ _factories__WEBPACK_IMPORTED_MODULE_2__.computer),
/* harmony export */   "gameBoardFactory": () => (/* reexport safe */ _factories__WEBPACK_IMPORTED_MODULE_2__.gameBoardFactory),
/* harmony export */   "player": () => (/* reexport safe */ _factories__WEBPACK_IMPORTED_MODULE_2__.player),
/* harmony export */   "shipFactory": () => (/* reexport safe */ _factories__WEBPACK_IMPORTED_MODULE_2__.shipFactory)
/* harmony export */ });
/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./style.css */ "./src/style.css");
/* harmony import */ var _domManip_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./domManip.js */ "./src/domManip.js");
/* harmony import */ var _factories__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./factories */ "./src/factories.js");




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

    //creates the UI
    (0,_domManip_js__WEBPACK_IMPORTED_MODULE_1__.createContainer)();
    (0,_domManip_js__WEBPACK_IMPORTED_MODULE_1__.createGameBoardUI)(player1.playerBoard.arrayGetter(),computer1.computerBoard.arrayGetter());
    

    player1.playerPlace(playerSub,0,0,'horizontal');
    player1.playerPlace(playerCarrier,1,0,'horizontal');
    player1.playerPlace(playerBattleship,2,0,'horizontal');
    player1.playerPlace(playerCruiser,4,0,'horizontal');
    player1.playerPlace(playerDestroyer,5,0,'horizontal');

    computerRandomPlace(computer1,computerSub);
    computerRandomPlace(computer1,computerCarrier);
    computerRandomPlace(computer1,computerBattleship);
    computerRandomPlace(computer1,computerCruiser);
    computerRandomPlace(computer1,computerDestroyer);
    console.log(computer1.computerBoard.arrayGetter())

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
                    console.log('Issue vert')
                    return false
                }
            }
            return true
        }
        else{
                //iterates through the ships length and adding the index to the column because it is placed horizontally. 
                //If the element is not empty it returns false
            for(let i = 0;i<ship.length;i++){
                if(computer.computerBoard.arrayGetter()[row][col+1] !== ''){
                    console.log('Issue hor')
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
                console.log('placed ' + ship.name + 'at ' + row + ' '+ col)
            }
            else{computerRandomPlace(computer,ship)}

        }
        //places the ship randomly in horizontal orrientation
        else{
            let row = Math.floor(Math.random()*10);
            let col = Math.floor(Math.random() * (10-ship.length));
            
            if(intersectCheck(computer,ship,row,col,'horizontal')){
                computer.computerBoard.place(ship,row,col,'horizontal')
                console.log('placed ' + ship.name + 'at ' + row + ' '+ col)
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
    console.log(computer.computerBoard.shipsAliveGetter())
    if(computer.computerBoard.shipsAliveGetter()  || player.playerBoard.shipsAliveGetter() === []){
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


})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDBCQUEwQixjQUFjO0FBQ3hDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDBCQUEwQixjQUFjO0FBQ3hDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGlCQUFpQjs7QUFFakI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxpQkFBaUI7QUFDakI7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLHFCQUFxQiw2Q0FBNkM7QUFDbEUseUJBQXlCLGdEQUFnRDtBQUN6RTtBQUNBLDBEQUEwRCxFQUFFLEVBQUUsRUFBRTtBQUNoRTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxxQkFBcUIsaURBQWlEO0FBQ3RFLHlCQUF5QixvREFBb0Q7QUFDN0UsMERBQTBELEVBQUUsRUFBRSxFQUFFO0FBQ2hFO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7QUFHQSIsInNvdXJjZXMiOlsid2VicGFjazovL2JhdHRsZXNoaXAvLi9zcmMvc3R5bGUuY3NzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vc3JjL3N0eWxlLmNzcz83MTYzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL3NyYy9kb21NYW5pcC5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vc3JjL2ZhY3Rvcmllcy5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwL3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL2JhdHRsZXNoaXAvd2VicGFjay9ydW50aW1lL2NvbXBhdCBnZXQgZGVmYXVsdCBleHBvcnQiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL2JhdHRsZXNoaXAvd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vc3JjL2luZGV4LmpzIl0sInNvdXJjZXNDb250ZW50IjpbIi8vIEltcG9ydHNcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiO1xudmFyIF9fX0NTU19MT0FERVJfRVhQT1JUX19fID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18pO1xuLy8gTW9kdWxlXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIFwiYm9keXtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDE5MiwgMjE3LCAyMjgpO1xcbiAgICB3aWR0aDogMTAwJTtcXG4gICAgaGVpZ2h0OiAxMDAlO1xcbn1cXG4jbWFpbkNvbnRhaW5lcntcXG4gICAgZGlzcGxheTogYmxvY2s7XFxufVxcbiNnYW1lYm9hcmRze1xcbiAgICBkaXNwbGF5OiBncmlkO1xcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IHJlcGVhdCgyLDFmcik7XFxuICAgIG1hcmdpbjogMTBweDtcXG59XFxuI3BsYXllckhlYWRlciwgI2NvbXB1dGVySGVhZGVye1xcbiAgICB3aWR0aDogNDB2dztcXG4gICAgZ3JpZC1yb3ctc3RhcnQ6IDA7XFxuICAgIGdyaWQtcm93LWVuZDogMTtcXG59XFxuXFxuI3BsYXllckdhbWVib2FyZCwgI2NvbXB1dGVyR2FtZWJvYXJke1xcbiAgICBkaXNwbGF5OiBncmlkO1xcblxcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IHJlcGVhdCgxMCwxZnIpO1xcbiAgICBoZWlnaHQ6IDQwdnc7XFxuICAgIHdpZHRoOiA0MHZ3O1xcbn1cXG4uY2VsbHtcXG4gICAgYm9yZGVyOiAxcHggc29saWQgYmxhY2s7XFxuICAgIGhlaWdodDogMTAwJTtcXG4gICAgd2lkdGg6IDEwMCU7XFxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcXG4gICAgZm9udC1zaXplOiB4LXNtYWxsO1xcbn1cXG5cXG4uYmF0dGxlc2hpcHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjojMmIyNDI0O1xcbiAgICBib3JkZXItdG9wOiAxcHggc29saWQgYmxhY2s7XFxufVxcblxcbi5zdWJtYXJpbmV7XFxuICAgIGJhY2tncm91bmQtY29sb3I6ICMxYzA5M2Y7XFxufVxcblxcbi5jcnVpc2Vye1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjM2I2NDdjO1xcbn1cXG5cXG4uY2FycmllcntcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzQxMmQ0NDtcXG59XFxuXFxuLmRlc3Ryb3llcntcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2NjMmNjNDtcXG59XFxuLmVtcHR5e1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmZmZmO1xcbn1cXG4uaGl0e1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjYzI4YTIzO1xcbn1cXG5cIiwgXCJcIix7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCJ3ZWJwYWNrOi8vLi9zcmMvc3R5bGUuY3NzXCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCJBQUFBO0lBQ0ksb0NBQW9DO0lBQ3BDLFdBQVc7SUFDWCxZQUFZO0FBQ2hCO0FBQ0E7SUFDSSxjQUFjO0FBQ2xCO0FBQ0E7SUFDSSxhQUFhO0lBQ2Isb0NBQW9DO0lBQ3BDLFlBQVk7QUFDaEI7QUFDQTtJQUNJLFdBQVc7SUFDWCxpQkFBaUI7SUFDakIsZUFBZTtBQUNuQjs7QUFFQTtJQUNJLGFBQWE7O0lBRWIscUNBQXFDO0lBQ3JDLFlBQVk7SUFDWixXQUFXO0FBQ2Y7QUFDQTtJQUNJLHVCQUF1QjtJQUN2QixZQUFZO0lBQ1osV0FBVztJQUNYLGtCQUFrQjtJQUNsQixrQkFBa0I7QUFDdEI7O0FBRUE7SUFDSSx3QkFBd0I7SUFDeEIsMkJBQTJCO0FBQy9COztBQUVBO0lBQ0kseUJBQXlCO0FBQzdCOztBQUVBO0lBQ0kseUJBQXlCO0FBQzdCOztBQUVBO0lBQ0kseUJBQXlCO0FBQzdCOztBQUVBO0lBQ0kseUJBQXlCO0FBQzdCO0FBQ0E7SUFDSSx5QkFBeUI7QUFDN0I7QUFDQTtJQUNJLHlCQUF5QjtBQUM3QlwiLFwic291cmNlc0NvbnRlbnRcIjpbXCJib2R5e1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMTkyLCAyMTcsIDIyOCk7XFxuICAgIHdpZHRoOiAxMDAlO1xcbiAgICBoZWlnaHQ6IDEwMCU7XFxufVxcbiNtYWluQ29udGFpbmVye1xcbiAgICBkaXNwbGF5OiBibG9jaztcXG59XFxuI2dhbWVib2FyZHN7XFxuICAgIGRpc3BsYXk6IGdyaWQ7XFxuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogcmVwZWF0KDIsMWZyKTtcXG4gICAgbWFyZ2luOiAxMHB4O1xcbn1cXG4jcGxheWVySGVhZGVyLCAjY29tcHV0ZXJIZWFkZXJ7XFxuICAgIHdpZHRoOiA0MHZ3O1xcbiAgICBncmlkLXJvdy1zdGFydDogMDtcXG4gICAgZ3JpZC1yb3ctZW5kOiAxO1xcbn1cXG5cXG4jcGxheWVyR2FtZWJvYXJkLCAjY29tcHV0ZXJHYW1lYm9hcmR7XFxuICAgIGRpc3BsYXk6IGdyaWQ7XFxuXFxuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogcmVwZWF0KDEwLDFmcik7XFxuICAgIGhlaWdodDogNDB2dztcXG4gICAgd2lkdGg6IDQwdnc7XFxufVxcbi5jZWxse1xcbiAgICBib3JkZXI6IDFweCBzb2xpZCBibGFjaztcXG4gICAgaGVpZ2h0OiAxMDAlO1xcbiAgICB3aWR0aDogMTAwJTtcXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xcbiAgICBmb250LXNpemU6IHgtc21hbGw7XFxufVxcblxcbi5iYXR0bGVzaGlwe1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiMyYjI0MjQ7XFxuICAgIGJvcmRlci10b3A6IDFweCBzb2xpZCBibGFjaztcXG59XFxuXFxuLnN1Ym1hcmluZXtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzFjMDkzZjtcXG59XFxuXFxuLmNydWlzZXJ7XFxuICAgIGJhY2tncm91bmQtY29sb3I6ICMzYjY0N2M7XFxufVxcblxcbi5jYXJyaWVye1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjNDEyZDQ0O1xcbn1cXG5cXG4uZGVzdHJveWVye1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjY2MyY2M0O1xcbn1cXG4uZW1wdHl7XFxuICAgIGJhY2tncm91bmQtY29sb3I6ICNmZmZmZmY7XFxufVxcbi5oaXR7XFxuICAgIGJhY2tncm91bmQtY29sb3I6ICNjMjhhMjM7XFxufVxcblwiXSxcInNvdXJjZVJvb3RcIjpcIlwifV0pO1xuLy8gRXhwb3J0c1xuZXhwb3J0IGRlZmF1bHQgX19fQ1NTX0xPQURFUl9FWFBPUlRfX187XG4iLCJcInVzZSBzdHJpY3RcIjtcblxuLypcbiAgTUlUIExpY2Vuc2UgaHR0cDovL3d3dy5vcGVuc291cmNlLm9yZy9saWNlbnNlcy9taXQtbGljZW5zZS5waHBcbiAgQXV0aG9yIFRvYmlhcyBLb3BwZXJzIEBzb2tyYVxuKi9cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcpIHtcbiAgdmFyIGxpc3QgPSBbXTsgLy8gcmV0dXJuIHRoZSBsaXN0IG9mIG1vZHVsZXMgYXMgY3NzIHN0cmluZ1xuXG4gIGxpc3QudG9TdHJpbmcgPSBmdW5jdGlvbiB0b1N0cmluZygpIHtcbiAgICByZXR1cm4gdGhpcy5tYXAoZnVuY3Rpb24gKGl0ZW0pIHtcbiAgICAgIHZhciBjb250ZW50ID0gXCJcIjtcbiAgICAgIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2YgaXRlbVs1XSAhPT0gXCJ1bmRlZmluZWRcIjtcblxuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpO1xuICAgICAgfVxuXG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpO1xuICAgICAgfVxuXG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKTtcbiAgICAgIH1cblxuICAgICAgY29udGVudCArPSBjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKGl0ZW0pO1xuXG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG5cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG5cbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG5cbiAgICAgIHJldHVybiBjb250ZW50O1xuICAgIH0pLmpvaW4oXCJcIik7XG4gIH07IC8vIGltcG9ydCBhIGxpc3Qgb2YgbW9kdWxlcyBpbnRvIHRoZSBsaXN0XG5cblxuICBsaXN0LmkgPSBmdW5jdGlvbiBpKG1vZHVsZXMsIG1lZGlhLCBkZWR1cGUsIHN1cHBvcnRzLCBsYXllcikge1xuICAgIGlmICh0eXBlb2YgbW9kdWxlcyA9PT0gXCJzdHJpbmdcIikge1xuICAgICAgbW9kdWxlcyA9IFtbbnVsbCwgbW9kdWxlcywgdW5kZWZpbmVkXV07XG4gICAgfVxuXG4gICAgdmFyIGFscmVhZHlJbXBvcnRlZE1vZHVsZXMgPSB7fTtcblxuICAgIGlmIChkZWR1cGUpIHtcbiAgICAgIGZvciAodmFyIGsgPSAwOyBrIDwgdGhpcy5sZW5ndGg7IGsrKykge1xuICAgICAgICB2YXIgaWQgPSB0aGlzW2tdWzBdO1xuXG4gICAgICAgIGlmIChpZCAhPSBudWxsKSB7XG4gICAgICAgICAgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpZF0gPSB0cnVlO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuXG4gICAgZm9yICh2YXIgX2sgPSAwOyBfayA8IG1vZHVsZXMubGVuZ3RoOyBfaysrKSB7XG4gICAgICB2YXIgaXRlbSA9IFtdLmNvbmNhdChtb2R1bGVzW19rXSk7XG5cbiAgICAgIGlmIChkZWR1cGUgJiYgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpdGVtWzBdXSkge1xuICAgICAgICBjb250aW51ZTtcbiAgICAgIH1cblxuICAgICAgaWYgKHR5cGVvZiBsYXllciAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICBpZiAodHlwZW9mIGl0ZW1bNV0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgaWYgKG1lZGlhKSB7XG4gICAgICAgIGlmICghaXRlbVsyXSkge1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgaWYgKHN1cHBvcnRzKSB7XG4gICAgICAgIGlmICghaXRlbVs0XSkge1xuICAgICAgICAgIGl0ZW1bNF0gPSBcIlwiLmNvbmNhdChzdXBwb3J0cyk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzRdID0gc3VwcG9ydHM7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgbGlzdC5wdXNoKGl0ZW0pO1xuICAgIH1cbiAgfTtcblxuICByZXR1cm4gbGlzdDtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGl0ZW0pIHtcbiAgdmFyIGNvbnRlbnQgPSBpdGVtWzFdO1xuICB2YXIgY3NzTWFwcGluZyA9IGl0ZW1bM107XG5cbiAgaWYgKCFjc3NNYXBwaW5nKSB7XG4gICAgcmV0dXJuIGNvbnRlbnQ7XG4gIH1cblxuICBpZiAodHlwZW9mIGJ0b2EgPT09IFwiZnVuY3Rpb25cIikge1xuICAgIHZhciBiYXNlNjQgPSBidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShjc3NNYXBwaW5nKSkpKTtcbiAgICB2YXIgZGF0YSA9IFwic291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247Y2hhcnNldD11dGYtODtiYXNlNjQsXCIuY29uY2F0KGJhc2U2NCk7XG4gICAgdmFyIHNvdXJjZU1hcHBpbmcgPSBcIi8qIyBcIi5jb25jYXQoZGF0YSwgXCIgKi9cIik7XG4gICAgdmFyIHNvdXJjZVVSTHMgPSBjc3NNYXBwaW5nLnNvdXJjZXMubWFwKGZ1bmN0aW9uIChzb3VyY2UpIHtcbiAgICAgIHJldHVybiBcIi8qIyBzb3VyY2VVUkw9XCIuY29uY2F0KGNzc01hcHBpbmcuc291cmNlUm9vdCB8fCBcIlwiKS5jb25jYXQoc291cmNlLCBcIiAqL1wiKTtcbiAgICB9KTtcbiAgICByZXR1cm4gW2NvbnRlbnRdLmNvbmNhdChzb3VyY2VVUkxzKS5jb25jYXQoW3NvdXJjZU1hcHBpbmddKS5qb2luKFwiXFxuXCIpO1xuICB9XG5cbiAgcmV0dXJuIFtjb250ZW50XS5qb2luKFwiXFxuXCIpO1xufTsiLCJcbiAgICAgIGltcG9ydCBBUEkgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanNcIjtcbiAgICAgIGltcG9ydCBkb21BUEkgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydEZuIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qc1wiO1xuICAgICAgaW1wb3J0IHNldEF0dHJpYnV0ZXMgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRTdHlsZUVsZW1lbnQgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanNcIjtcbiAgICAgIGltcG9ydCBzdHlsZVRhZ1RyYW5zZm9ybUZuIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanNcIjtcbiAgICAgIGltcG9ydCBjb250ZW50LCAqIGFzIG5hbWVkRXhwb3J0IGZyb20gXCIhIS4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc3R5bGUuY3NzXCI7XG4gICAgICBcbiAgICAgIFxuXG52YXIgb3B0aW9ucyA9IHt9O1xuXG5vcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtID0gc3R5bGVUYWdUcmFuc2Zvcm1Gbjtcbm9wdGlvbnMuc2V0QXR0cmlidXRlcyA9IHNldEF0dHJpYnV0ZXM7XG5cbiAgICAgIG9wdGlvbnMuaW5zZXJ0ID0gaW5zZXJ0Rm4uYmluZChudWxsLCBcImhlYWRcIik7XG4gICAgXG5vcHRpb25zLmRvbUFQSSA9IGRvbUFQSTtcbm9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50ID0gaW5zZXJ0U3R5bGVFbGVtZW50O1xuXG52YXIgdXBkYXRlID0gQVBJKGNvbnRlbnQsIG9wdGlvbnMpO1xuXG5cblxuZXhwb3J0ICogZnJvbSBcIiEhLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zdHlsZS5jc3NcIjtcbiAgICAgICBleHBvcnQgZGVmYXVsdCBjb250ZW50ICYmIGNvbnRlbnQubG9jYWxzID8gY29udGVudC5sb2NhbHMgOiB1bmRlZmluZWQ7XG4iLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIHN0eWxlc0luRE9NID0gW107XG5cbmZ1bmN0aW9uIGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpIHtcbiAgdmFyIHJlc3VsdCA9IC0xO1xuXG4gIGZvciAodmFyIGkgPSAwOyBpIDwgc3R5bGVzSW5ET00ubGVuZ3RoOyBpKyspIHtcbiAgICBpZiAoc3R5bGVzSW5ET01baV0uaWRlbnRpZmllciA9PT0gaWRlbnRpZmllcikge1xuICAgICAgcmVzdWx0ID0gaTtcbiAgICAgIGJyZWFrO1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiByZXN1bHQ7XG59XG5cbmZ1bmN0aW9uIG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKSB7XG4gIHZhciBpZENvdW50TWFwID0ge307XG4gIHZhciBpZGVudGlmaWVycyA9IFtdO1xuXG4gIGZvciAodmFyIGkgPSAwOyBpIDwgbGlzdC5sZW5ndGg7IGkrKykge1xuICAgIHZhciBpdGVtID0gbGlzdFtpXTtcbiAgICB2YXIgaWQgPSBvcHRpb25zLmJhc2UgPyBpdGVtWzBdICsgb3B0aW9ucy5iYXNlIDogaXRlbVswXTtcbiAgICB2YXIgY291bnQgPSBpZENvdW50TWFwW2lkXSB8fCAwO1xuICAgIHZhciBpZGVudGlmaWVyID0gXCJcIi5jb25jYXQoaWQsIFwiIFwiKS5jb25jYXQoY291bnQpO1xuICAgIGlkQ291bnRNYXBbaWRdID0gY291bnQgKyAxO1xuICAgIHZhciBpbmRleEJ5SWRlbnRpZmllciA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgIHZhciBvYmogPSB7XG4gICAgICBjc3M6IGl0ZW1bMV0sXG4gICAgICBtZWRpYTogaXRlbVsyXSxcbiAgICAgIHNvdXJjZU1hcDogaXRlbVszXSxcbiAgICAgIHN1cHBvcnRzOiBpdGVtWzRdLFxuICAgICAgbGF5ZXI6IGl0ZW1bNV1cbiAgICB9O1xuXG4gICAgaWYgKGluZGV4QnlJZGVudGlmaWVyICE9PSAtMSkge1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnJlZmVyZW5jZXMrKztcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS51cGRhdGVyKG9iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIHZhciB1cGRhdGVyID0gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucyk7XG4gICAgICBvcHRpb25zLmJ5SW5kZXggPSBpO1xuICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKGksIDAsIHtcbiAgICAgICAgaWRlbnRpZmllcjogaWRlbnRpZmllcixcbiAgICAgICAgdXBkYXRlcjogdXBkYXRlcixcbiAgICAgICAgcmVmZXJlbmNlczogMVxuICAgICAgfSk7XG4gICAgfVxuXG4gICAgaWRlbnRpZmllcnMucHVzaChpZGVudGlmaWVyKTtcbiAgfVxuXG4gIHJldHVybiBpZGVudGlmaWVycztcbn1cblxuZnVuY3Rpb24gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucykge1xuICB2YXIgYXBpID0gb3B0aW9ucy5kb21BUEkob3B0aW9ucyk7XG4gIGFwaS51cGRhdGUob2JqKTtcblxuICB2YXIgdXBkYXRlciA9IGZ1bmN0aW9uIHVwZGF0ZXIobmV3T2JqKSB7XG4gICAgaWYgKG5ld09iaikge1xuICAgICAgaWYgKG5ld09iai5jc3MgPT09IG9iai5jc3MgJiYgbmV3T2JqLm1lZGlhID09PSBvYmoubWVkaWEgJiYgbmV3T2JqLnNvdXJjZU1hcCA9PT0gb2JqLnNvdXJjZU1hcCAmJiBuZXdPYmouc3VwcG9ydHMgPT09IG9iai5zdXBwb3J0cyAmJiBuZXdPYmoubGF5ZXIgPT09IG9iai5sYXllcikge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG5cbiAgICAgIGFwaS51cGRhdGUob2JqID0gbmV3T2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgYXBpLnJlbW92ZSgpO1xuICAgIH1cbiAgfTtcblxuICByZXR1cm4gdXBkYXRlcjtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAobGlzdCwgb3B0aW9ucykge1xuICBvcHRpb25zID0gb3B0aW9ucyB8fCB7fTtcbiAgbGlzdCA9IGxpc3QgfHwgW107XG4gIHZhciBsYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucyk7XG4gIHJldHVybiBmdW5jdGlvbiB1cGRhdGUobmV3TGlzdCkge1xuICAgIG5ld0xpc3QgPSBuZXdMaXN0IHx8IFtdO1xuXG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBpKyspIHtcbiAgICAgIHZhciBpZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW2ldO1xuICAgICAgdmFyIGluZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleF0ucmVmZXJlbmNlcy0tO1xuICAgIH1cblxuICAgIHZhciBuZXdMYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obmV3TGlzdCwgb3B0aW9ucyk7XG5cbiAgICBmb3IgKHZhciBfaSA9IDA7IF9pIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgX2krKykge1xuICAgICAgdmFyIF9pZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW19pXTtcblxuICAgICAgdmFyIF9pbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKF9pZGVudGlmaWVyKTtcblxuICAgICAgaWYgKHN0eWxlc0luRE9NW19pbmRleF0ucmVmZXJlbmNlcyA9PT0gMCkge1xuICAgICAgICBzdHlsZXNJbkRPTVtfaW5kZXhdLnVwZGF0ZXIoKTtcblxuICAgICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoX2luZGV4LCAxKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBsYXN0SWRlbnRpZmllcnMgPSBuZXdMYXN0SWRlbnRpZmllcnM7XG4gIH07XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgbWVtbyA9IHt9O1xuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5cbmZ1bmN0aW9uIGdldFRhcmdldCh0YXJnZXQpIHtcbiAgaWYgKHR5cGVvZiBtZW1vW3RhcmdldF0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICB2YXIgc3R5bGVUYXJnZXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKHRhcmdldCk7IC8vIFNwZWNpYWwgY2FzZSB0byByZXR1cm4gaGVhZCBvZiBpZnJhbWUgaW5zdGVhZCBvZiBpZnJhbWUgaXRzZWxmXG5cbiAgICBpZiAod2luZG93LkhUTUxJRnJhbWVFbGVtZW50ICYmIHN0eWxlVGFyZ2V0IGluc3RhbmNlb2Ygd2luZG93LkhUTUxJRnJhbWVFbGVtZW50KSB7XG4gICAgICB0cnkge1xuICAgICAgICAvLyBUaGlzIHdpbGwgdGhyb3cgYW4gZXhjZXB0aW9uIGlmIGFjY2VzcyB0byBpZnJhbWUgaXMgYmxvY2tlZFxuICAgICAgICAvLyBkdWUgdG8gY3Jvc3Mtb3JpZ2luIHJlc3RyaWN0aW9uc1xuICAgICAgICBzdHlsZVRhcmdldCA9IHN0eWxlVGFyZ2V0LmNvbnRlbnREb2N1bWVudC5oZWFkO1xuICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgICAvLyBpc3RhbmJ1bCBpZ25vcmUgbmV4dFxuICAgICAgICBzdHlsZVRhcmdldCA9IG51bGw7XG4gICAgICB9XG4gICAgfVxuXG4gICAgbWVtb1t0YXJnZXRdID0gc3R5bGVUYXJnZXQ7XG4gIH1cblxuICByZXR1cm4gbWVtb1t0YXJnZXRdO1xufVxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5cblxuZnVuY3Rpb24gaW5zZXJ0QnlTZWxlY3RvcihpbnNlcnQsIHN0eWxlKSB7XG4gIHZhciB0YXJnZXQgPSBnZXRUYXJnZXQoaW5zZXJ0KTtcblxuICBpZiAoIXRhcmdldCkge1xuICAgIHRocm93IG5ldyBFcnJvcihcIkNvdWxkbid0IGZpbmQgYSBzdHlsZSB0YXJnZXQuIFRoaXMgcHJvYmFibHkgbWVhbnMgdGhhdCB0aGUgdmFsdWUgZm9yIHRoZSAnaW5zZXJ0JyBwYXJhbWV0ZXIgaXMgaW52YWxpZC5cIik7XG4gIH1cblxuICB0YXJnZXQuYXBwZW5kQ2hpbGQoc3R5bGUpO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydEJ5U2VsZWN0b3I7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpIHtcbiAgdmFyIGVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic3R5bGVcIik7XG4gIG9wdGlvbnMuc2V0QXR0cmlidXRlcyhlbGVtZW50LCBvcHRpb25zLmF0dHJpYnV0ZXMpO1xuICBvcHRpb25zLmluc2VydChlbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xuICByZXR1cm4gZWxlbWVudDtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzKHN0eWxlRWxlbWVudCkge1xuICB2YXIgbm9uY2UgPSB0eXBlb2YgX193ZWJwYWNrX25vbmNlX18gIT09IFwidW5kZWZpbmVkXCIgPyBfX3dlYnBhY2tfbm9uY2VfXyA6IG51bGw7XG5cbiAgaWYgKG5vbmNlKSB7XG4gICAgc3R5bGVFbGVtZW50LnNldEF0dHJpYnV0ZShcIm5vbmNlXCIsIG5vbmNlKTtcbiAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlczsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaikge1xuICB2YXIgY3NzID0gXCJcIjtcblxuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQob2JqLnN1cHBvcnRzLCBcIikge1wiKTtcbiAgfVxuXG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJAbWVkaWEgXCIuY29uY2F0KG9iai5tZWRpYSwgXCIge1wiKTtcbiAgfVxuXG4gIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2Ygb2JqLmxheWVyICE9PSBcInVuZGVmaW5lZFwiO1xuXG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJAbGF5ZXJcIi5jb25jYXQob2JqLmxheWVyLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQob2JqLmxheWVyKSA6IFwiXCIsIFwiIHtcIik7XG4gIH1cblxuICBjc3MgKz0gb2JqLmNzcztcblxuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG5cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuXG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cblxuICB2YXIgc291cmNlTWFwID0gb2JqLnNvdXJjZU1hcDtcblxuICBpZiAoc291cmNlTWFwICYmIHR5cGVvZiBidG9hICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgY3NzICs9IFwiXFxuLyojIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2Jhc2U2NCxcIi5jb25jYXQoYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoc291cmNlTWFwKSkpKSwgXCIgKi9cIik7XG4gIH0gLy8gRm9yIG9sZCBJRVxuXG4gIC8qIGlzdGFuYnVsIGlnbm9yZSBpZiAgKi9cblxuXG4gIG9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG59XG5cbmZ1bmN0aW9uIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpIHtcbiAgLy8gaXN0YW5idWwgaWdub3JlIGlmXG4gIGlmIChzdHlsZUVsZW1lbnQucGFyZW50Tm9kZSA9PT0gbnVsbCkge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuXG4gIHN0eWxlRWxlbWVudC5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudCk7XG59XG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cblxuXG5mdW5jdGlvbiBkb21BUEkob3B0aW9ucykge1xuICB2YXIgc3R5bGVFbGVtZW50ID0gb3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucyk7XG4gIHJldHVybiB7XG4gICAgdXBkYXRlOiBmdW5jdGlvbiB1cGRhdGUob2JqKSB7XG4gICAgICBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaik7XG4gICAgfSxcbiAgICByZW1vdmU6IGZ1bmN0aW9uIHJlbW92ZSgpIHtcbiAgICAgIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpO1xuICAgIH1cbiAgfTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBkb21BUEk7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQpIHtcbiAgaWYgKHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0KSB7XG4gICAgc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQuY3NzVGV4dCA9IGNzcztcbiAgfSBlbHNlIHtcbiAgICB3aGlsZSAoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpIHtcbiAgICAgIHN0eWxlRWxlbWVudC5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCk7XG4gICAgfVxuXG4gICAgc3R5bGVFbGVtZW50LmFwcGVuZENoaWxkKGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKGNzcykpO1xuICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gc3R5bGVUYWdUcmFuc2Zvcm07IiwiY29uc3QgY3JlYXRlRWxlbWVudCA9IHtcbiAgICBjcmVhdGVTZWN0aW9uOiBmdW5jdGlvbihpZE5hbWUpIHtcbiAgICAgICAgbGV0IHNlY3Rpb24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic2VjdGlvblwiKTtcbiAgICAgICAgc2VjdGlvbi5zZXRBdHRyaWJ1dGUoJ2lkJyxpZE5hbWUpO1xuICAgICAgICByZXR1cm4gc2VjdGlvbjtcbiAgICB9LFxuICAgIGNyZWF0ZURpdjogZnVuY3Rpb24oaWROYW1lKXtcbiAgICAgICAgbGV0IGRpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgICAgIGRpdi5zZXRBdHRyaWJ1dGUoJ2lkJyxpZE5hbWUpO1xuICAgICAgICByZXR1cm4gZGl2O1xuICAgIH0sXG4gICAgY3JlYXRlUGFyYTogZnVuY3Rpb24odGV4dCl7XG4gICAgICAgIGxldCBwYXJhID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInBcIik7XG4gICAgICAgIHBhcmEudGV4dENvbnRlbnQgPSB0ZXh0O1xuICAgICAgICByZXR1cm4gcGFyYTtcbiAgICB9LFxuICAgIGNyZWF0ZUxpOiBmdW5jdGlvbih1bCxhcnIpe1xuICAgICAgICBmb3IobGV0IGk9MDtpPCBhcnIubGVuZ3RoO2krKyl7XG4gICAgICAgICAgICBsZXQgbGkgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwibGlcIik7XG4gICAgICAgICAgICBsaS5pbm5lckhUTUwgPSBhcnJbaV07XG4gICAgICAgICAgICB1bC5hcHBlbmRDaGlsZChsaSlcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gdWw7XG4gICAgfSxcbiAgICBjcmVhdGVIOiBmdW5jdGlvbihudW0sdGV4dCl7XG4gICAgICAgIGNvbnN0IGhlYWRpbmcgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KGBoJHtudW19YCk7XG4gICAgICAgIGhlYWRpbmcuaW5uZXJUZXh0ID0gdGV4dDtcbiAgICAgICAgcmV0dXJuIGhlYWRpbmdcbiAgICB9XG59XG5jb25zdCBjcmVhdGVDb250YWluZXIgPSAoKSA9PntcbiAgICBjb25zdCBtYWluID0gY3JlYXRlRWxlbWVudC5jcmVhdGVEaXYoJ21haW5Db250YWluZXInKTtcbiAgICBkb2N1bWVudC5ib2R5LmFwcGVuZENoaWxkKG1haW4pO1xuICAgIGNvbnN0IGhlYWRlciA9IGNyZWF0ZUVsZW1lbnQuY3JlYXRlSCgxLFwiQmF0dGxlc2hpcFwiKTtcbiAgICBtYWluLmFwcGVuZENoaWxkKGhlYWRlcik7XG59XG5cbmNvbnN0IGNyZWF0ZUdhbWVCb2FyZFVJID0gKHBsYXllcjEsY29tcHV0ZXIxKSA9PiB7XG4gICAgY29uc3QgbWFpbiA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdtYWluQ29udGFpbmVyJyk7XG4gICAgY29uc3QgZ2FtZWJvYXJkcyA9IGNyZWF0ZUVsZW1lbnQuY3JlYXRlRGl2KCdnYW1lYm9hcmRzJyk7XG4gICAgY29uc3QgcGxheWVyR2FtZWJvYXJkID0gY3JlYXRlRWxlbWVudC5jcmVhdGVEaXYoJ3BsYXllckdhbWVib2FyZCcpO1xuICAgIGNvbnN0IGNvbXB1dGVyR2FtZWJvYXJkID0gY3JlYXRlRWxlbWVudC5jcmVhdGVEaXYoJ2NvbXB1dGVyR2FtZWJvYXJkJyk7XG4gICAgY29uc3QgcGxheWVySGVhZGVyID0gY3JlYXRlRWxlbWVudC5jcmVhdGVIKDIsJ1BsYXllclxcJ3MgQm9hcmQnKTtcbiAgICBjb25zdCBjb21wdXRlckhlYWRlciA9IGNyZWF0ZUVsZW1lbnQuY3JlYXRlSCgyLCdDb21wdXRlclxcJ3MgSGVhZGVyJylcbiAgICBwbGF5ZXJIZWFkZXIuc2V0QXR0cmlidXRlKCdpZCcsJ3BsYXllckhlYWRlcicpO1xuICAgIGNvbXB1dGVySGVhZGVyLnNldEF0dHJpYnV0ZSgnaWQnLCdjb21wdXRlckhlYWRlcicpO1xuICAgIGZvcihsZXQgaT0wOyBpPChwbGF5ZXIxLmxlbmd0aCk7aSsrKXtcbiAgICAgICAgZm9yKGxldCBqPTA7IGo8KHBsYXllcjFbaV0ubGVuZ3RoKTtqKyspe1xuICAgICAgICAgICAgbGV0IGdhbWVDZWxsID0gY3JlYXRlRWxlbWVudC5jcmVhdGVEaXYoYCR7aX0ke2p9YClcbiAgICAgICAgICAgIGdhbWVDZWxsLmNsYXNzTGlzdC5hZGQoXCJjZWxsXCIpO1xuICAgICAgICAgICAgcGxheWVyR2FtZWJvYXJkLmFwcGVuZENoaWxkKGdhbWVDZWxsKTtcbiAgICAgICAgfVxuICAgIH1cbiAgICBmb3IobGV0IGk9MDsgaTwoY29tcHV0ZXIxLmxlbmd0aCk7aSsrKXtcbiAgICAgICAgZm9yKGxldCBqPTA7IGo8KGNvbXB1dGVyMVtpXS5sZW5ndGgpO2orKyl7XG4gICAgICAgICAgICBsZXQgZ2FtZUNlbGwgPSBjcmVhdGVFbGVtZW50LmNyZWF0ZURpdihgJHtpfSR7an1jb21wdXRlcmApXG4gICAgICAgICAgICBnYW1lQ2VsbC5jbGFzc0xpc3QuYWRkKFwiY2VsbFwiKTtcbiAgICAgICAgICAgIGNvbXB1dGVyR2FtZWJvYXJkLmFwcGVuZENoaWxkKGdhbWVDZWxsKTtcbiAgICAgICAgfVxuICAgIH1cbiAgICBtYWluLmFwcGVuZENoaWxkKGdhbWVib2FyZHMpXG4gICAgZ2FtZWJvYXJkcy5hcHBlbmQocGxheWVySGVhZGVyLHBsYXllckdhbWVib2FyZCxjb21wdXRlckhlYWRlcixjb21wdXRlckdhbWVib2FyZClcblxufVxuXG5leHBvcnQge2NyZWF0ZUVsZW1lbnQsY3JlYXRlQ29udGFpbmVyLGNyZWF0ZUdhbWVCb2FyZFVJfTsiLCJcblxuLy9GYWN0b3J5IGZ1bmN0aW9uIHRvIGNyZWF0ZSB0aGUgc2hpcHNcbmNvbnN0IHNoaXBGYWN0b3J5ID0gKG5hbWUsbGVuZ3RoKSA9PiB7XG4gICAgLy9jcmVhdGVzIGFuIGFycmF5IHRoZSBzaXplIG9mIHRoZSBzaGlwcyBsZW5ndGggdG8ga2VlcCB0cmFjayBvZiBoaXRzLlxuICAgIGNvbnN0IHNoaXBIZWFsdGggPSBbXTtcblxuICAgIC8vdXBkYXRlcyB0aGUgc2hpcEhlYWx0aCBhcnJheSB3aXRoIHRoZSBwb3NpdGlvbiB0aGUgc2hpcCBnb3QgaGl0IGluXG4gICAgY29uc3QgaGl0ID0gKCkgPT4ge1xuICAgICAgICBzaGlwSGVhbHRoLnB1c2goJ3gnKVxuICAgICAgICAgICAgcmV0dXJuIHNoaXBIZWFsdGg7XG4gICAgfVxuICAgIC8vaWYgZXZlcnkgdmFsdWUgaW4gdGhlIHNoaXBIZWFsdGggYXJyYXkgaXMgaGl0IHRoaXMgZnVuY3Rpb24gcmV0dXJucyB0aGF0IHRoZSBzaGlwIGlzIHN1bmtcbiAgICBjb25zdCBpc1N1bmsgPSAoKSA9PiB7XG4gICAgICAgIGlmKHNoaXBIZWFsdGgubGVuZ3RoID09PSBsZW5ndGgpe1xuICAgICAgICAgICAgcmV0dXJuIHRydWVcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gZmFsc2VcbiAgICB9XG4gICAgcmV0dXJuIHtuYW1lLGxlbmd0aCxoaXQsIGlzU3Vua31cbn1cblxuLy9GYWN0b3J5IGZ1bmN0aW9uIHRvIGNyZWF0ZSBnYW1lIGJvYXJkXG5jb25zdCBnYW1lQm9hcmRGYWN0b3J5ID0gKCkgPT57XG4gICAgbGV0IGdhbWVBcnJheSA9IFtdO1xuICAgIC8vY3JlYXRlIGVtcHR5IGFycmF5IHRvIGluaXRpYWxpemUgdGhlIGdhbWVcbiAgICBjb25zdCBzdGFydEdhbWUgPSAoKSA9PntcbiAgICAgICAgICAgIGdhbWVBcnJheSA9IFtcbiAgICAgICAgICAgIFsnJywnJywnJywnJywnJywnJywnJywnJywnJywnJ10sXG4gICAgICAgICAgICBbJycsJycsJycsJycsJycsJycsJycsJycsJycsJyddLFxuICAgICAgICAgICAgWycnLCcnLCcnLCcnLCcnLCcnLCcnLCcnLCcnLCcnXSxcbiAgICAgICAgICAgIFsnJywnJywnJywnJywnJywnJywnJywnJywnJywnJ10sXG4gICAgICAgICAgICBbJycsJycsJycsJycsJycsJycsJycsJycsJycsJyddLFxuICAgICAgICAgICAgWycnLCcnLCcnLCcnLCcnLCcnLCcnLCcnLCcnLCcnXSxcbiAgICAgICAgICAgIFsnJywnJywnJywnJywnJywnJywnJywnJywnJywnJ10sXG4gICAgICAgICAgICBbJycsJycsJycsJycsJycsJycsJycsJycsJycsJyddLFxuICAgICAgICAgICAgWycnLCcnLCcnLCcnLCcnLCcnLCcnLCcnLCcnLCcnXSxcbiAgICAgICAgICAgIFsnJywnJywnJywnJywnJywnJywnJywnJywnJywnJ11cbiAgICAgICAgXVxuXG4gICAgfVxuICAgIC8vbGlzdCBvZiBzaGlwcyB0aGF0IGFyZSBzdGlsbCBhbGl2ZVxuICAgIGxldCBzaGlwc0FsaXZlID0gW107XG5cbiAgICAvL3BsYWNlcyBzaGlwIGluIHJvdyBhbmQgY29sdW1uIGFuZCBvcmllbnRzIGhvdyB0aGUgcGxheWVyIHdhbnRzIFxuICAgIGNvbnN0IHBsYWNlID0gKHNoaXAscm93LCBjb2x1bW4sIG9yaWVudCkgPT4ge1xuICAgICAgICAvL2NoZWNrcyBpZiB3aGVyZSB0aGUgc2hpcCBpcyB0byBiZSBwbGFjZWQgaXMgZW1wdHlcbiAgICAgICAgY29uc3QgY2FuUGxhY2UgPSAoKSA9PiB7XG4gICAgICAgICAgICBsZXQgZW1wdHkgPSB0cnVlXG4gICAgICAgICAgICAvL2NoZWNraW5nIGlmIHNoaXAgaXMgYWxyZWFkeSBpbiB0aGUgc3BvdCBuZXcgc2hpcCBpcyB0byBiZSBwbGFjZWRcbiAgICAgICAgICAgIGlmKG9yaWVudCA9PT0gJ2hvcml6b250YWwnKXtcbiAgICAgICAgICAgICAgICBmb3IobGV0IGkgPSBjb2x1bW47IGk8IChjb2x1bW4rc2hpcC5sZW5ndGgpOyBpKyspe1xuICAgICAgICAgICAgICAgICAgICBpZihnYW1lQXJyYXlbcm93XVtpXSAhPT0gJycpe1xuICAgICAgICAgICAgICAgICAgICAgICAgZW1wdHkgPSBmYWxzZVxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSAgXG4gICAgICAgICAgICBlbHNlIGlmKG9yaWVudCA9PT0gJ3ZlcnRpY2FsJyl7XG4gICAgICAgICAgICAgICAgZm9yKGxldCBpID0gcm93OyBpPCAocm93K3NoaXAubGVuZ3RoKTsgaSsrKXtcbiAgICAgICAgICAgICAgICAgICAgaWYoZ2FtZUFycmF5W2ldW2NvbHVtbl0gIT09ICcnKXtcbiAgICAgICAgICAgICAgICAgICAgICAgIGVtcHR5ID0gZmFsc2VcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0gIFxuICAgICAgICAgICAgcmV0dXJuIGVtcHR5XG4gICAgICAgIH07XG4gICAgICAgIC8vaG9yaXpvbnRhbCBvcnJpZW50YXRpb24gcGxhY2VtZW50XG4gICAgICAgIGlmKG9yaWVudCA9PT0gJ2hvcml6b250YWwnICAmJiBjYW5QbGFjZSgpKSB7XG4gICAgICAgICAgICBmb3IobGV0IGkgPSBjb2x1bW47IGk8IChjb2x1bW4rc2hpcC5sZW5ndGgpOyBpKyspe1xuICAgICAgICAgICAgICAgIGdhbWVBcnJheVtyb3ddW2ldID0gc2hpcDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHNoaXBzQWxpdmUucHVzaChzaGlwLm5hbWUpXG4gICAgICAgIH1cblxuICAgICAgICAvL3ZlcnRpY2FsIG9ycmllbnRhdGlvbnMgcGxhY2VtZW50XG4gICAgICAgIGVsc2UgaWYob3JpZW50ID09PSAndmVydGljYWwnICYmIGNhblBsYWNlKCkpIHtcbiAgICAgICAgICAgIGZvcihsZXQgaSA9IHJvdzsgaTwoKHNoaXAubGVuZ3RoICsgcm93KSk7aSsrKXtcbiAgICAgICAgICAgICAgICBnYW1lQXJyYXlbaV1bY29sdW1uXSA9IHNoaXA7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIGdhbWVBcnJheTtcbiAgICB9XG5cbiAgICAvL1JlY2lldmVzIGNvb3JkaW5hdGVzIGZyb20gdGhlIGJvYXJkIHRvIHJlY2lldmUgYW4gYXR0YWNrXG4gICAgY29uc3QgcmVjaWV2ZUF0dGFjayA9IChyb3csY29sdW1uKSA9PntcbiAgICAgICAgLy9JZiB0aGUgZ2FtZUFycmF5IGlzIGVtcHR5IHBsYWNlIGEgc21hbGwgeCBmb3IgYSBtaXNzXG4gICAgICAgIGlmKGdhbWVBcnJheVtyb3ddW2NvbHVtbl0gPT09ICcnKXtcbiAgICAgICAgICAgIGdhbWVBcnJheVtyb3ddW2NvbHVtbl0gPSAneCdcbiAgICAgICAgfVxuICAgICAgICBlbHNle1xuICAgICAgICAgICAgLy9pZiB0aGVyZSBpcyBhIHNoaXAgYXQgdGhlIGNvb3JkaW5hdGVzIGhpdCB0aGUgYm9hcmQgYW5kIHBsYWNlIGEgbGFyZ2UgWCB0byBzaG93IHRoZXJlIGlzIGEgaGl0XG4gICAgICAgICAgICBnYW1lQXJyYXlbcm93XVtjb2x1bW5dLmhpdCgpO1xuICAgICAgICAgICAgLy9pZiBpc1N1bmsgcmV0dXJucyB0cnVlIHRoYXQgc2hpcCBnZXRzIHBvcHBlZCBmcm9tIHRoZSBzaGlwc0FsaXZlIGFycmF5LlxuICAgICAgICAgICAgaWYoZ2FtZUFycmF5W3Jvd11bY29sdW1uXS5pc1N1bmsoKSl7XG4gICAgICAgICAgICAgICAgc2hpcHNBbGl2ZS5wb3AoZ2FtZUFycmF5W3Jvd11bY29sdW1uXS5uYW1lKVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZ2FtZUFycmF5W3Jvd11bY29sdW1uXSA9ICdYJztcbiAgICAgICAgICAgIFxuICAgICAgICB9XG4gICAgICAgIHJldHVybiBnYW1lQXJyYXlcbiAgICB9XG4gICAgY29uc3Qgc2hpcHNBbGl2ZUdldHRlciA9ICgpID0+IHNoaXBzQWxpdmU7XG4gICAgY29uc3QgYXJyYXlHZXR0ZXIgPSAoKSA9PiBnYW1lQXJyYXk7XG4gICAgcmV0dXJue3N0YXJ0R2FtZSwgcGxhY2UsIHJlY2lldmVBdHRhY2ssYXJyYXlHZXR0ZXIsIHNoaXBzQWxpdmVHZXR0ZXJ9XG59XG5cbi8vUGxheWVyIGZhY3RvciBGdW5jdGlvblxuY29uc3QgcGxheWVyID0gKCkgPT57XG4gICAgLy9jcmVhdGVzIGEgYm9hcmQgZm9yIHRoZSBwbGF5ZXJcbiAgICBsZXQgcGxheWVyQm9hcmQgPSBnYW1lQm9hcmRGYWN0b3J5KCk7XG4gICAgLy9Jbml0aWFsaXplcyB0aGUgYm9hcmQgZm9yIHRoZSBwbGF5ZXJcbiAgICBwbGF5ZXJCb2FyZC5zdGFydEdhbWUoKTtcbiAgICAvL0hlbHBlciBmdW5jdGlvbiBmb3IgdGhlIHBsYWNlIG1ldGhvZFxuICAgIGNvbnN0IHBsYXllclBsYWNlID0gKHNoaXAscm93LGNvbHVtbixvcmllbnQpID0+e1xuICAgICAgICBwbGF5ZXJCb2FyZC5wbGFjZShzaGlwLHJvdyxjb2x1bW4sb3JpZW50KTtcbiAgICAgICAgcmV0dXJuIHBsYXllckJvYXJkXG4gICAgfVxuXG4gICAgLy9yZWNpZXZlcyBhbiBhdHRhY2sgYW5kIHRoZW4gc2VuZHMgdGhhdCBhdHRhY2sgdG8gdGhlIGNvbXB1dGVyQm9hcmRcbiAgICBjb25zdCBwbGF5ZXJBdHRhY2sgPSAoY29tcHV0ZXJCb2FyZCxlKSA9PiB7XG4gICAgICAgIGNvbnN0IHJvdyA9IHBhcnNlSW50KGUudGFyZ2V0LmlkWzBdKVxuICAgICAgICBjb25zdCBjb2wgPSBwYXJzZUludChlLnRhcmdldC5pZFsxXSlcbiAgICAgICAgY29tcHV0ZXJCb2FyZC5yZWNpZXZlQXR0YWNrKHJvdyxjb2wpO1xuICAgICAgICByZXR1cm4gdHJ1ZVxuICAgIH0gICBcbiAgICByZXR1cm4ge3BsYXllckJvYXJkLHBsYXllclBsYWNlLHBsYXllckF0dGFja31cbn1cblxuLy9jb21wdXRlciBmYWN0b3J5IGZ1bmN0aW9uXG5jb25zdCBjb21wdXRlciA9ICgpID0+IHtcbiAgICAvL2NyZWF0ZXMgYSBib2FyZCBmb3IgdGhlIGNvbXB1dGVyXG4gICAgbGV0IGNvbXB1dGVyQm9hcmQgPSBnYW1lQm9hcmRGYWN0b3J5KCk7XG4gICAgLy9Jbml0aWFsaXplcyB0aGUgYm9hcmQgZm9yIHRoZSBjb21wdXRlclxuICAgIGNvbXB1dGVyQm9hcmQuc3RhcnRHYW1lKCk7XG4gICAgLy9TZWxlY3RzIGEgcmFuZG9tIGNvb3JkaW5hdGUuXG4gICAgY29uc3QgY29tcHV0ZXJSYW5kb21BdHRhY2sgPSAocGxheWVyQm9hcmQpID0+e1xuICAgICAgICBsZXQgcmFuZG9tQ2hvaWNlID0gKCkgPT4ge1xuICAgICAgICAgICAgbGV0IHJhbmRvbVJvdyA9IE1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqMTApXG4gICAgICAgICAgICBsZXQgcmFuZG9tQ29sdW1uID0gTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogMTApXG4gICAgICAgICAgICByZXR1cm4gW3JhbmRvbVJvdywgcmFuZG9tQ29sdW1uXVxuICAgICAgICB9XG4gICAgICAgIGxldCByYW5kb209IHJhbmRvbUNob2ljZSgpO1xuICAgICAgICBsZXQgcm93ID0gcmFuZG9tWzBdO1xuICAgICAgICBsZXQgY29sdW1uID0gcmFuZG9tWzFdO1xuICAgICAgICBpZigocGxheWVyQm9hcmQuYXJyYXlHZXR0ZXIoKVtyb3ddW2NvbHVtbl0gPT09ICd4JykgfHwgKHBsYXllckJvYXJkLmFycmF5R2V0dGVyKClbcm93XVtjb2x1bW5dID09PSAnWCcpKXtcbiAgICAgICAgICAgIGNvbXB1dGVyUmFuZG9tQXR0YWNrKHBsYXllckJvYXJkKVxuICAgICAgICB9XG4gICAgICAgIGVsc2V7XG4gICAgICAgICAgICBjb25zb2xlLmxvZyhwbGF5ZXJCb2FyZC5hcnJheUdldHRlcigpW3Jvd11bY29sdW1uXSlcbiAgICAgICAgICAgIHBsYXllckJvYXJkLnJlY2lldmVBdHRhY2socm93LGNvbHVtbik7XG4gICAgICAgICAgICByZXR1cm4gcGxheWVyQm9hcmQuYXJyYXlHZXR0ZXIoKTtcbiAgICAgICAgfVxuXG4gICAgfVxuICAgIHJldHVybiB7Y29tcHV0ZXJCb2FyZCxjb21wdXRlclJhbmRvbUF0dGFja31cbn1cblxuXG5leHBvcnQge3NoaXBGYWN0b3J5LGdhbWVCb2FyZEZhY3RvcnksIHBsYXllcixjb21wdXRlcn0iLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdGlkOiBtb2R1bGVJZCxcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuIiwiLy8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbl9fd2VicGFja19yZXF1aXJlX18ubiA9IChtb2R1bGUpID0+IHtcblx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG5cdFx0KCkgPT4gKG1vZHVsZVsnZGVmYXVsdCddKSA6XG5cdFx0KCkgPT4gKG1vZHVsZSk7XG5cdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsIHsgYTogZ2V0dGVyIH0pO1xuXHRyZXR1cm4gZ2V0dGVyO1xufTsiLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwiaW1wb3J0ICcuL3N0eWxlLmNzcyc7XG5pbXBvcnQge2NyZWF0ZUVsZW1lbnQsY3JlYXRlQ29udGFpbmVyLGNyZWF0ZUdhbWVCb2FyZFVJfSBmcm9tICcuL2RvbU1hbmlwLmpzJztcbmltcG9ydCB7c2hpcEZhY3RvcnksIHBsYXllciwgY29tcHV0ZXIsIGdhbWVCb2FyZEZhY3Rvcnl9IGZyb20gJy4vZmFjdG9yaWVzJztcblxuLy9pbml0aWxpemVzIHRoZSBnYW1lXG5jb25zdCBpbml0R2FtZSA9ICgpID0+e1xuICAgIC8vY3JlYXRlcyBhIHBsYXllciBhbmQgYSBjb21wdXRlclxuICAgIGNvbnN0IHBsYXllcjEgPSBwbGF5ZXIoKTtcbiAgICBjb25zdCBjb21wdXRlcjEgPSBjb21wdXRlcigpO1xuXG4gICAgLy9jcmVhdGVzIGFsbCBzaGlwcyBmb3IgcGxheWVyIGFuZCBjb21wdXRlclxuICAgIGNvbnN0IHBsYXllclN1YiA9IHNoaXBGYWN0b3J5KFwic3VibWFyaW5lXCIsMyk7XG4gICAgY29uc3QgcGxheWVyQ2FycmllciA9IHNoaXBGYWN0b3J5KFwiY2FycmllclwiLDUpO1xuICAgIGNvbnN0IHBsYXllckJhdHRsZXNoaXAgPSBzaGlwRmFjdG9yeSgnYmF0dGxlc2hpcCcsNCk7XG4gICAgY29uc3QgcGxheWVyQ3J1aXNlciA9IHNoaXBGYWN0b3J5KCdjcnVpc2VyJywzKTtcbiAgICBjb25zdCBwbGF5ZXJEZXN0cm95ZXIgPSBzaGlwRmFjdG9yeSgnZGVzdHJveWVyJywgMik7XG4gICAgY29uc3QgY29tcHV0ZXJTdWIgPSBzaGlwRmFjdG9yeShcInN1Ym1hcmluZVwiLDMpO1xuICAgIGNvbnN0IGNvbXB1dGVyQ2FycmllciA9IHNoaXBGYWN0b3J5KFwiY2FycmllclwiLDUpO1xuICAgIGNvbnN0IGNvbXB1dGVyQmF0dGxlc2hpcCA9IHNoaXBGYWN0b3J5KCdiYXR0bGVzaGlwJyw0KTtcbiAgICBjb25zdCBjb21wdXRlckNydWlzZXIgPSBzaGlwRmFjdG9yeSgnY3J1aXNlcicsMyk7XG4gICAgY29uc3QgY29tcHV0ZXJEZXN0cm95ZXIgPSBzaGlwRmFjdG9yeSgnZGVzdHJveWVyJywgMik7XG5cbiAgICAvL2NyZWF0ZXMgdGhlIFVJXG4gICAgY3JlYXRlQ29udGFpbmVyKCk7XG4gICAgY3JlYXRlR2FtZUJvYXJkVUkocGxheWVyMS5wbGF5ZXJCb2FyZC5hcnJheUdldHRlcigpLGNvbXB1dGVyMS5jb21wdXRlckJvYXJkLmFycmF5R2V0dGVyKCkpO1xuICAgIFxuXG4gICAgcGxheWVyMS5wbGF5ZXJQbGFjZShwbGF5ZXJTdWIsMCwwLCdob3Jpem9udGFsJyk7XG4gICAgcGxheWVyMS5wbGF5ZXJQbGFjZShwbGF5ZXJDYXJyaWVyLDEsMCwnaG9yaXpvbnRhbCcpO1xuICAgIHBsYXllcjEucGxheWVyUGxhY2UocGxheWVyQmF0dGxlc2hpcCwyLDAsJ2hvcml6b250YWwnKTtcbiAgICBwbGF5ZXIxLnBsYXllclBsYWNlKHBsYXllckNydWlzZXIsNCwwLCdob3Jpem9udGFsJyk7XG4gICAgcGxheWVyMS5wbGF5ZXJQbGFjZShwbGF5ZXJEZXN0cm95ZXIsNSwwLCdob3Jpem9udGFsJyk7XG5cbiAgICBjb21wdXRlclJhbmRvbVBsYWNlKGNvbXB1dGVyMSxjb21wdXRlclN1Yik7XG4gICAgY29tcHV0ZXJSYW5kb21QbGFjZShjb21wdXRlcjEsY29tcHV0ZXJDYXJyaWVyKTtcbiAgICBjb21wdXRlclJhbmRvbVBsYWNlKGNvbXB1dGVyMSxjb21wdXRlckJhdHRsZXNoaXApO1xuICAgIGNvbXB1dGVyUmFuZG9tUGxhY2UoY29tcHV0ZXIxLGNvbXB1dGVyQ3J1aXNlcik7XG4gICAgY29tcHV0ZXJSYW5kb21QbGFjZShjb21wdXRlcjEsY29tcHV0ZXJEZXN0cm95ZXIpO1xuICAgIGNvbnNvbGUubG9nKGNvbXB1dGVyMS5jb21wdXRlckJvYXJkLmFycmF5R2V0dGVyKCkpXG5cbiAgICB1cGRhdGVHYW1lYm9hcmQocGxheWVyMSxjb21wdXRlcjEpO1xuICAgIGNvbnN0IGNvbXB1dGVyR2FtZWJvYXJkRGl2ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2NvbXB1dGVyR2FtZWJvYXJkJyk7XG4gICAgY29tcHV0ZXJHYW1lYm9hcmREaXYuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLGUgPT4ge1xuICAgICAgICBwbGF5R2FtZShwbGF5ZXIxLGNvbXB1dGVyMSxlKVxuICAgIH0pXG4gICAgfVxuXG4vL1JhbmRvbWx5IHBsYWNlcyBjb21wdXRlciBzaGlwc1xuY29uc3QgY29tcHV0ZXJSYW5kb21QbGFjZSA9IChjb21wdXRlciwgc2hpcCkgPT4ge1xuICAgIC8vUmFuZG9tbHkgc2VsZWN0cyAwIG9yIDEuIDAgaXMgaG9yaXpvbnRhbCBhbmQgMSBpcyB2ZXJ0aWNhbFxuICAgIGxldCByYW5kb21PcmllbnRhdGlvbiA9IE1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIDIpO1xuICAgIC8vY2hlY2tzIHRvIHNoZWUgaWYgc2hpcCB3b3VsZCBpbnRlcnNlY3QgYW5vdGhlciBzaGlwIHRoYXQgaXMgYWxyZWFkeSBvbiB0aGUgYm9hcmRcbiAgICBjb25zdCBpbnRlcnNlY3RDaGVjayA9IChjb21wdXRlcixzaGlwLHJvdyxjb2wsb3JpZW50KT0+e1xuICAgICAgICBpZihvcmllbnQgPT09ICd2ZXJ0aWNhbCcpe1xuICAgICAgICAgICAgZm9yKGxldCBpID0gMDtpPHNoaXAubGVuZ3RoO2krKyl7XG4gICAgICAgICAgICAgICAgLy9pdGVyYXRlcyB0aHJvdWdoIHRoZSBzaGlwcyBsZW5ndGggYW5kIGFkZGluZyB0aGUgaW5kZXggdG8gdGhlIHJvdyBiZWNhdXNlIGl0IGlzIHBsYWNlZCB2ZXJ0aWNhbGx5LiBcbiAgICAgICAgICAgICAgICAvL0lmIHRoZSBlbGVtZW50IGlzIG5vdCBlbXB0eSBpdCByZXR1cm5zIGZhbHNlXG4gICAgICAgICAgICAgICAgaWYoY29tcHV0ZXIuY29tcHV0ZXJCb2FyZC5hcnJheUdldHRlcigpW3JvdytpXVtjb2xdICE9PSAnJyl7XG4gICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKCdJc3N1ZSB2ZXJ0JylcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGZhbHNlXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgcmV0dXJuIHRydWVcbiAgICAgICAgfVxuICAgICAgICBlbHNle1xuICAgICAgICAgICAgICAgIC8vaXRlcmF0ZXMgdGhyb3VnaCB0aGUgc2hpcHMgbGVuZ3RoIGFuZCBhZGRpbmcgdGhlIGluZGV4IHRvIHRoZSBjb2x1bW4gYmVjYXVzZSBpdCBpcyBwbGFjZWQgaG9yaXpvbnRhbGx5LiBcbiAgICAgICAgICAgICAgICAvL0lmIHRoZSBlbGVtZW50IGlzIG5vdCBlbXB0eSBpdCByZXR1cm5zIGZhbHNlXG4gICAgICAgICAgICBmb3IobGV0IGkgPSAwO2k8c2hpcC5sZW5ndGg7aSsrKXtcbiAgICAgICAgICAgICAgICBpZihjb21wdXRlci5jb21wdXRlckJvYXJkLmFycmF5R2V0dGVyKClbcm93XVtjb2wrMV0gIT09ICcnKXtcbiAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coJ0lzc3VlIGhvcicpXG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBmYWxzZVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHJldHVybiB0cnVlXG4gICAgICAgIH1cbiAgICB9XG4gICAgICAgIC8vcGxhY2VzIHRoZSBzaGlwIHJhbmRvbWx5IGluIHZlcnRpY2FsIG9yaWVudGF0aW9uXG4gICAgICAgIGlmKHJhbmRvbU9yaWVudGF0aW9uID09PSAxKXtcbiAgICAgICAgICAgIFxuICAgICAgICAgICAgbGV0IHJvdyA9IE1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqICgxMC1zaGlwLmxlbmd0aCkpO1xuICAgICAgICAgICAgbGV0IGNvbCA9IE1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSoxMCk7XG4gICAgICAgICAgICAvL2NoZWNrcyB0byBzZWUgaWYgaXQgaXMgaW50ZXJlY3RpbmcuIElmIHNvIHRoZW4gaXQgY2FsbHMgdGhlIHJhbmRvbVBsYWNlIGZ1bmN0aW9uIGFnYWluXG4gICAgICAgICAgICBpZihpbnRlcnNlY3RDaGVjayhjb21wdXRlcixzaGlwLHJvdyxjb2wsJ3ZlcnRpY2FsJykpe1xuICAgICAgICAgICAgICAgIGNvbXB1dGVyLmNvbXB1dGVyQm9hcmQucGxhY2Uoc2hpcCxyb3csY29sLCd2ZXJ0aWNhbCcpO1xuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKCdwbGFjZWQgJyArIHNoaXAubmFtZSArICdhdCAnICsgcm93ICsgJyAnKyBjb2wpXG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNle2NvbXB1dGVyUmFuZG9tUGxhY2UoY29tcHV0ZXIsc2hpcCl9XG5cbiAgICAgICAgfVxuICAgICAgICAvL3BsYWNlcyB0aGUgc2hpcCByYW5kb21seSBpbiBob3Jpem9udGFsIG9ycmllbnRhdGlvblxuICAgICAgICBlbHNle1xuICAgICAgICAgICAgbGV0IHJvdyA9IE1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSoxMCk7XG4gICAgICAgICAgICBsZXQgY29sID0gTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogKDEwLXNoaXAubGVuZ3RoKSk7XG4gICAgICAgICAgICBcbiAgICAgICAgICAgIGlmKGludGVyc2VjdENoZWNrKGNvbXB1dGVyLHNoaXAscm93LGNvbCwnaG9yaXpvbnRhbCcpKXtcbiAgICAgICAgICAgICAgICBjb21wdXRlci5jb21wdXRlckJvYXJkLnBsYWNlKHNoaXAscm93LGNvbCwnaG9yaXpvbnRhbCcpXG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coJ3BsYWNlZCAnICsgc2hpcC5uYW1lICsgJ2F0ICcgKyByb3cgKyAnICcrIGNvbClcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2V7Y29tcHV0ZXJSYW5kb21QbGFjZShjb21wdXRlcixzaGlwKX1cbiAgICAgICAgfVxufVxuXG5jb25zdCBwbGF5R2FtZSA9IChwbGF5ZXIxLGNvbXB1dGVyMSxlKSA9PiB7XG4gICAgXG4gICAgICAgIHBsYXllcjEucGxheWVyQXR0YWNrKGNvbXB1dGVyMS5jb21wdXRlckJvYXJkLGUpXG4gICAgICAgIGNvbXB1dGVyMS5jb21wdXRlclJhbmRvbUF0dGFjayhwbGF5ZXIxLnBsYXllckJvYXJkKVxuICAgICAgICB1cGRhdGVHYW1lYm9hcmQocGxheWVyMSxjb21wdXRlcjEpO1xufVxuXG5jb25zdCBnYW1lT3Zlcj0gKHBsYXllcixjb21wdXRlcikgPT4ge1xuICAgIGNvbnNvbGUubG9nKGNvbXB1dGVyLmNvbXB1dGVyQm9hcmQuc2hpcHNBbGl2ZUdldHRlcigpKVxuICAgIGlmKGNvbXB1dGVyLmNvbXB1dGVyQm9hcmQuc2hpcHNBbGl2ZUdldHRlcigpICB8fCBwbGF5ZXIucGxheWVyQm9hcmQuc2hpcHNBbGl2ZUdldHRlcigpID09PSBbXSl7XG4gICAgICAgIHJldHVybiB0cnVlXG4gICAgfVxuICAgIHJldHVybiBmYWxzZVxufVxuXG5jb25zdCB1cGRhdGVHYW1lYm9hcmQgPSAocGxheWVyMSxjb21wdXRlcjEpID0+e1xuICAgIGlmKCFnYW1lT3ZlcihwbGF5ZXIxLGNvbXB1dGVyMSkpe1xuICAgICAgICBmb3IobGV0IGk9MDsgaTwocGxheWVyMS5wbGF5ZXJCb2FyZC5hcnJheUdldHRlcigpLmxlbmd0aCk7aSsrKXtcbiAgICAgICAgICAgIGZvcihsZXQgaj0wOyBqPChwbGF5ZXIxLnBsYXllckJvYXJkLmFycmF5R2V0dGVyKClbaV0ubGVuZ3RoKTtqKyspe1xuICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgIGxldCBnYW1lQ2VsbCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKGAke2l9JHtqfWApXG4gICAgICAgICAgICAgICAgaWYodHlwZW9mIHBsYXllcjEucGxheWVyQm9hcmQuYXJyYXlHZXR0ZXIoKVtpXVtqXSA9PT0gJ29iamVjdCcpe1xuICAgICAgICAgICAgICAgICAgICBsZXQgbmFtZSA9IHBsYXllcjEucGxheWVyQm9hcmQuYXJyYXlHZXR0ZXIoKVtpXVtqXS5uYW1lXG4gICAgICAgICAgICAgICAgICAgIGdhbWVDZWxsLmNsYXNzTGlzdC5hZGQobmFtZSlcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgZWxzZSBpZihwbGF5ZXIxLnBsYXllckJvYXJkLmFycmF5R2V0dGVyKClbaV1bal0gPT09ICd4Jyl7XG4gICAgICAgICAgICAgICAgICAgIGdhbWVDZWxsLmNsYXNzTGlzdC5hZGQoJ2VtcHR5JylcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgZWxzZSBpZihwbGF5ZXIxLnBsYXllckJvYXJkLmFycmF5R2V0dGVyKClbaV1bal0gPT09ICdYJyl7XG4gICAgICAgICAgICAgICAgICAgIGdhbWVDZWxsLmNsYXNzTGlzdC5hZGQoJ2hpdCcpXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIGZvcihsZXQgaT0wOyBpPChjb21wdXRlcjEuY29tcHV0ZXJCb2FyZC5hcnJheUdldHRlcigpLmxlbmd0aCk7aSsrKXtcbiAgICAgICAgICAgIGZvcihsZXQgaj0wOyBqPChjb21wdXRlcjEuY29tcHV0ZXJCb2FyZC5hcnJheUdldHRlcigpW2ldLmxlbmd0aCk7aisrKXtcbiAgICAgICAgICAgICAgICBsZXQgZ2FtZUNlbGwgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChgJHtpfSR7an1jb21wdXRlcmApXG4gICAgICAgICAgICAgICAgaWYoY29tcHV0ZXIxLmNvbXB1dGVyQm9hcmQuYXJyYXlHZXR0ZXIoKVtpXVtqXSA9PT0gJ3gnKXtcbiAgICAgICAgICAgICAgICAgICAgZ2FtZUNlbGwuY2xhc3NMaXN0LmFkZCgnZW1wdHknKVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBlbHNlIGlmKGNvbXB1dGVyMS5jb21wdXRlckJvYXJkLmFycmF5R2V0dGVyKClbaV1bal0gPT09ICdYJyl7XG4gICAgICAgICAgICAgICAgICAgIGdhbWVDZWxsLmNsYXNzTGlzdC5hZGQoJ2hpdCcpXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxuICAgIGVsc2V7XG4gICAgICAgIGFsZXJ0KCdHYW1lIE92ZXInKVxuICAgIH1cbiAgICB9XG5cblxuaW5pdEdhbWUoKVxuXG5leHBvcnQge3NoaXBGYWN0b3J5LGdhbWVCb2FyZEZhY3RvcnksIHBsYXllcixjb21wdXRlcn07Il0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9