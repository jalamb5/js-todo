/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/css-loader/dist/cjs.js!./dist/assets/style.css":
/*!*********************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./dist/assets/style.css ***!
  \*********************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
___CSS_LOADER_EXPORT___.push([module.id, "@import url(https://fonts.googleapis.com/css?family=Montserrat:100,200,300,400,700);"]);
// Module
___CSS_LOADER_EXPORT___.push([module.id, `body {
  background-color: #57886C;
  color: whitesmoke;
  display: grid;
  grid-template-columns: 1fr 3fr;
  grid-template-rows: 5rem 1fr;
  margin: 1rem;
  font-family: 'Montserrat', sans-serif;
}

form {
  display: grid;
  grid-template-columns: 1fr 2fr;
  grid-gap: 3px;
}
label {
  grid-column: 1;
}

.button {
  background-color: #98FB98;
  border: none;
  border-radius: 1rem;
  margin-top: .5rem;
}

#submit {
  grid-column: 1 / span 2;
}

#site-title {
  grid-row: 1;
  grid-column: 1 / span 2;

}

#sidebar {
  grid-column: 1;
  grid-row: 2;
  max-width: fit-content;
  max-height: fit-content;
}

#todos-container {
  grid-column: 2;
  grid-row: 1 / span 2;
  margin: 2rem;
  display: flex;
  flex-direction: column;
}

.todo-item {
  display: grid;
  gap: 5px;
  grid-template-columns: .25fr 1fr 1fr .5fr .25fr .25fr;
  padding-bottom: 5px;
  align-items: center;
}

.checkbox {
  height: 25px;
  width: 25px;
}

#list-container {
  padding-top: 1.5rem;
  display: flex;
  flex-direction: column;
}

.list {
  padding-bottom: .5rem;
  text-decoration: underline;
}
.list:hover, .edit-btn:hover, .delete-btn:hover {
  cursor: pointer;
}

#showAll {
  text-decoration: none;
  padding: 2px;
}

#new-list-form {
  padding-top: 1rem;
}

#modal-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

#closeModal {
  border-radius: .4rem;
  border: none;
  background-color: #98FB98;
  height: 25px;
  width: 25px;
  font-size: 1rem;
}

.todo-complete {
  color: rgb(63, 62, 62);
  text-decoration: line-through;
}

.edit-btn, .delete-btn {
  border: 0;
  background: none;
  opacity: .50;
  height: 25px;
  width: 25px;
}

.priority-low {
  color: #87ceeb;
}

.priority-medium {
  color: #98FB98;
}

.priority-high {
  color: #ff7f50;
}

.danger {
  border: none;
  background-color: #ff7f50;
  color: white;
  margin-top: 3rem;
}

`, "",{"version":3,"sources":["webpack://./dist/assets/style.css"],"names":[],"mappings":"AAEA;EACE,yBAAyB;EACzB,iBAAiB;EACjB,aAAa;EACb,8BAA8B;EAC9B,4BAA4B;EAC5B,YAAY;EACZ,qCAAqC;AACvC;;AAEA;EACE,aAAa;EACb,8BAA8B;EAC9B,aAAa;AACf;AACA;EACE,cAAc;AAChB;;AAEA;EACE,yBAAyB;EACzB,YAAY;EACZ,mBAAmB;EACnB,iBAAiB;AACnB;;AAEA;EACE,uBAAuB;AACzB;;AAEA;EACE,WAAW;EACX,uBAAuB;;AAEzB;;AAEA;EACE,cAAc;EACd,WAAW;EACX,sBAAsB;EACtB,uBAAuB;AACzB;;AAEA;EACE,cAAc;EACd,oBAAoB;EACpB,YAAY;EACZ,aAAa;EACb,sBAAsB;AACxB;;AAEA;EACE,aAAa;EACb,QAAQ;EACR,qDAAqD;EACrD,mBAAmB;EACnB,mBAAmB;AACrB;;AAEA;EACE,YAAY;EACZ,WAAW;AACb;;AAEA;EACE,mBAAmB;EACnB,aAAa;EACb,sBAAsB;AACxB;;AAEA;EACE,qBAAqB;EACrB,0BAA0B;AAC5B;AACA;EACE,eAAe;AACjB;;AAEA;EACE,qBAAqB;EACrB,YAAY;AACd;;AAEA;EACE,iBAAiB;AACnB;;AAEA;EACE,aAAa;EACb,8BAA8B;EAC9B,mBAAmB;AACrB;;AAEA;EACE,oBAAoB;EACpB,YAAY;EACZ,yBAAyB;EACzB,YAAY;EACZ,WAAW;EACX,eAAe;AACjB;;AAEA;EACE,sBAAsB;EACtB,6BAA6B;AAC/B;;AAEA;EACE,SAAS;EACT,gBAAgB;EAChB,YAAY;EACZ,YAAY;EACZ,WAAW;AACb;;AAEA;EACE,cAAc;AAChB;;AAEA;EACE,cAAc;AAChB;;AAEA;EACE,cAAc;AAChB;;AAEA;EACE,YAAY;EACZ,yBAAyB;EACzB,YAAY;EACZ,gBAAgB;AAClB","sourcesContent":["@import url('https://fonts.googleapis.com/css?family=Montserrat:100,200,300,400,700');\n\nbody {\n  background-color: #57886C;\n  color: whitesmoke;\n  display: grid;\n  grid-template-columns: 1fr 3fr;\n  grid-template-rows: 5rem 1fr;\n  margin: 1rem;\n  font-family: 'Montserrat', sans-serif;\n}\n\nform {\n  display: grid;\n  grid-template-columns: 1fr 2fr;\n  grid-gap: 3px;\n}\nlabel {\n  grid-column: 1;\n}\n\n.button {\n  background-color: #98FB98;\n  border: none;\n  border-radius: 1rem;\n  margin-top: .5rem;\n}\n\n#submit {\n  grid-column: 1 / span 2;\n}\n\n#site-title {\n  grid-row: 1;\n  grid-column: 1 / span 2;\n\n}\n\n#sidebar {\n  grid-column: 1;\n  grid-row: 2;\n  max-width: fit-content;\n  max-height: fit-content;\n}\n\n#todos-container {\n  grid-column: 2;\n  grid-row: 1 / span 2;\n  margin: 2rem;\n  display: flex;\n  flex-direction: column;\n}\n\n.todo-item {\n  display: grid;\n  gap: 5px;\n  grid-template-columns: .25fr 1fr 1fr .5fr .25fr .25fr;\n  padding-bottom: 5px;\n  align-items: center;\n}\n\n.checkbox {\n  height: 25px;\n  width: 25px;\n}\n\n#list-container {\n  padding-top: 1.5rem;\n  display: flex;\n  flex-direction: column;\n}\n\n.list {\n  padding-bottom: .5rem;\n  text-decoration: underline;\n}\n.list:hover, .edit-btn:hover, .delete-btn:hover {\n  cursor: pointer;\n}\n\n#showAll {\n  text-decoration: none;\n  padding: 2px;\n}\n\n#new-list-form {\n  padding-top: 1rem;\n}\n\n#modal-header {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n}\n\n#closeModal {\n  border-radius: .4rem;\n  border: none;\n  background-color: #98FB98;\n  height: 25px;\n  width: 25px;\n  font-size: 1rem;\n}\n\n.todo-complete {\n  color: rgb(63, 62, 62);\n  text-decoration: line-through;\n}\n\n.edit-btn, .delete-btn {\n  border: 0;\n  background: none;\n  opacity: .50;\n  height: 25px;\n  width: 25px;\n}\n\n.priority-low {\n  color: #87ceeb;\n}\n\n.priority-medium {\n  color: #98FB98;\n}\n\n.priority-high {\n  color: #ff7f50;\n}\n\n.danger {\n  border: none;\n  background-color: #ff7f50;\n  color: white;\n  margin-top: 3rem;\n}\n\n"],"sourceRoot":""}]);
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
  var list = [];

  // return the list of modules as css string
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
  };

  // import a list of modules into the list
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
    return [content].concat([sourceMapping]).join("\n");
  }
  return [content].join("\n");
};

/***/ }),

/***/ "./dist/assets/style.css":
/*!*******************************!*\
  !*** ./dist/assets/style.css ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../node_modules/css-loader/dist/cjs.js!./style.css */ "./node_modules/css-loader/dist/cjs.js!./dist/assets/style.css");

      
      
      
      
      
      
      
      
      

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
    var styleTarget = document.querySelector(target);

    // Special case to return head of iframe instead of iframe itself
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
  }

  // For old IE
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
  if (typeof document === "undefined") {
    return {
      update: function update() {},
      remove: function remove() {}
    };
  }
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

/***/ "./src/checkBox.js":
/*!*************************!*\
  !*** ./src/checkBox.js ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (checkboxListeners);

function markBox(todoDiv) {
  let key = todoDiv.id;
  let todoItem = JSON.parse(window.localStorage.getItem(key));

  if (todoItem.completed) {
    todoItem.completed = false;
    todoDiv.classList.remove('todo-complete');
  } else if (!todoItem.completed) {
    todoItem.completed = true;
    todoDiv.classList.add('todo-complete');
  }
  window.localStorage.setItem(key, JSON.stringify(todoItem));
}

function checkboxListeners() {
  let checkBoxes = document.querySelectorAll("input[type='checkbox']");

  checkBoxes.forEach((checkbox) => {
    checkbox.onclick = () => {
      markBox(checkbox.parentElement)
    }
  })
}


/***/ }),

/***/ "./src/deleteTodo.js":
/*!***************************!*\
  !*** ./src/deleteTodo.js ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   deleteListeners: () => (/* binding */ deleteListeners),
/* harmony export */   deleteTodo: () => (/* binding */ deleteTodo)
/* harmony export */ });
/* harmony import */ var _todoDisplay__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./todoDisplay */ "./src/todoDisplay.js");



function deleteTodo(key) {
  window.localStorage.setItem(key, '{"deleted":"deleted"}');

  let todosContainer = document.getElementById("todos-container");

  // Remove children from the container if they exist.
  if (todosContainer.children.length > 0) {
    while (todosContainer.firstChild) {
      todosContainer.removeChild(todosContainer.firstChild);
    }
  }
  (0,_todoDisplay__WEBPACK_IMPORTED_MODULE_0__.renderTodo)();
}

function deleteListeners() {
  let deleteButtons = document.querySelectorAll(".delete-btn");

  deleteButtons.forEach((deleteButton) => {
    deleteButton.onclick = () => {
      deleteTodo(deleteButton.parentElement.id);
    }
  })
}


/***/ }),

/***/ "./src/modal.js":
/*!**********************!*\
  !*** ./src/modal.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   modalListeners: () => (/* binding */ modalListeners),
/* harmony export */   renderModal: () => (/* binding */ renderModal)
/* harmony export */ });
/* harmony import */ var _todoForm__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./todoForm */ "./src/todoForm.js");

;

function renderModal() {
  const todosContainer = document.getElementById("todos-container");
  const modal = document.createElement('dialog');
  modal.id = "modal";

  todosContainer.appendChild(modal);
}

// Handle buttons outside modal.
function modalListeners() {
  const modal = document.getElementById("modal");
  let editButtons = document.querySelectorAll(".edit-btn");

  editButtons.forEach((editButton) => {
    editButton.onclick = () => {
      modal.showModal();
      updateModal(editButton.parentElement.id);
    }
  })
}

// Add todo data to modal.
function updateModal(key) {
  const modal = document.getElementById("modal");

  // clear any existing data.
  if (modal.children.length > 0) {
    while (modal.firstChild) {
      modal.removeChild(modal.firstChild);
    }
  }

  // add a title and close button.
  const headerDiv = document.createElement("div");
  const modalTitle = document.createElement("h3");
  headerDiv.id = "modal-header";
  modalTitle.textContent = "View / Edit To-do";

  const closeModal = document.createElement("button");
  closeModal.innerHTML = "&times";
  closeModal.id = "closeModal";

  headerDiv.append(modalTitle, closeModal);
  modal.appendChild(headerDiv);

  // Add listener to close button.
  closeModal.onclick = () => {
    modal.close()
  };

  // Pull todo info and prefill form with data.
  let todoItem = JSON.parse(window.localStorage.getItem(key));
  const todoData = document.createElement("form");

  todoData.addEventListener("submit", function (_event) {

    todoItem.title = todoData.elements.title.value;
    todoItem.dueDate = todoData.elements.dueDate.value;
    todoItem.priority = todoData.elements.priority.value;
    todoItem.notes = todoData.elements.notes.value;
    todoItem.list = todoData.elements.list.value;

    window.localStorage.setItem(key, JSON.stringify(todoItem));
  });

    todoData.innerHTML = `
      <label for="title">Title:</label>
      <input type="text" id="title" name="title" value="${todoItem.title}" required><br>

      <label for="due-date">Due Date:</label>
      <input type="date" id="due-date" name="dueDate" value=${todoItem.dueDate}><br>

      <label for="priority">Priority:</label>
      <input list="modal-priority-selections" name="priority" value=${todoItem.priority}>
      <datalist id="modal-priority-selections">
          <option value="High">High</option>
          <option value="Medium">Medium</option>
          <option value="Low">Low</option>
      </datalist><br>

      <label for="notes">Notes:</label>
      <textarea id="notes" name="notes">${todoItem.notes}</textarea><br>

      <label for="list">List:</label>
      <input list="modal-list-selections" id="list" name="list" value=${todoItem.list}>
      <datalist id="modal-list-selections"></datalist><br>

      <input type="submit" value="Edit Todo" id="submit" class="button">
    `;

  modal.appendChild(todoData);
  (0,_todoForm__WEBPACK_IMPORTED_MODULE_0__.listOptions)("edit");
}


/***/ }),

/***/ "./src/todoDisplay.js":
/*!****************************!*\
  !*** ./src/todoDisplay.js ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   renderTodo: () => (/* binding */ renderTodo)
/* harmony export */ });
/* harmony import */ var _deleteTodo__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./deleteTodo */ "./src/deleteTodo.js");
/* harmony import */ var _modal__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./modal */ "./src/modal.js");
/* harmony import */ var _checkBox__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./checkBox */ "./src/checkBox.js");






// Check if content divs exists, if not create them.
function establishContainers() {
  let todosContainer = document.getElementById("todos-container");
  let listContainer = document.getElementById("list-container");

  if (!todosContainer) {
    todosContainer = document.createElement("div");
    todosContainer.id = "todos-container";
  }

  if (!listContainer) {
    listContainer = document.createElement("div");
    listContainer.id = "list-container";
  }

  return [todosContainer, listContainer];
}

function renderTodo(i = 0) {
  const body = document.querySelector("body");
  const sidebarContainer = document.getElementById("sidebar");
  const [todosContainer, listContainer] = establishContainers();

  for (i; i < window.localStorage.length; i++) {
    let todoItem = JSON.parse(window.localStorage.getItem(i.toString()));

    // Check for null item if localStorage contains non-todo items, skip deleted.
    if (todoItem === null || todoItem.deleted === "deleted") {
      continue;
    }

    let newTodo = document.createElement("div");
    newTodo.classList.add("todo-item");
    // Attach the todo item's key for lookups.
    newTodo.id = i;

    // Create checkbox and ensure it is marked if the todo is completed.
    let checkBox = document.createElement("input");
    checkBox.type = "checkbox";
    checkBox.classList.add("checkbox");
    if (todoItem.completed) {
      checkBox.checked = true;
      newTodo.classList.add("todo-complete");
    }

    // Add todo info to page.
    const title = document.createElement("p");
    const dueDate = document.createElement("p");
    const priority = document.createElement("p");

    title.textContent = todoItem.title;
    dueDate.textContent = todoItem.dueDate;
    priority.textContent = todoItem.priority;

    // Add class for priority.
    priority.classList.add(`priority-${todoItem.priority.toLowerCase()}`);

    // Create view / edit button.
    let editButton = document.createElement("button");
    editButton.classList.add("edit-btn");
    editButton.innerHTML = '<img src="./assets/edit-icon.png" class="edit-btn"/>';

    // Create delete button.
    let deleteButton = document.createElement("button");
    deleteButton.classList.add("delete-btn");
    deleteButton.innerHTML = '<img src="./assets/delete-icon.png" class="delete-btn"/>';

    newTodo.append(checkBox, title, dueDate, priority, editButton, deleteButton);
    todosContainer.appendChild(newTodo);
  }
  body.appendChild(todosContainer);
  renderLists(listContainer, sidebarContainer);

  // Ensure onclick listeners are added to edit & delete buttons.
  (0,_deleteTodo__WEBPACK_IMPORTED_MODULE_0__.deleteListeners)();
  (0,_modal__WEBPACK_IMPORTED_MODULE_1__.modalListeners)();
  (0,_checkBox__WEBPACK_IMPORTED_MODULE_2__["default"])();
}

function renderLists(listContainer, sidebarContainer) {
  // Remove children from the list container if they exist.
  if (listContainer.children.length > 0) {
    while (listContainer.firstChild) {
      listContainer.removeChild(listContainer.firstChild);
    }
  }

  // Set title.
  let listTitle = document.createElement("h2");
  listTitle.textContent = "Lists";
  listContainer.appendChild(listTitle);

  // Create hide completed button.
  let hideCompletedButton = document.createElement("button");
  hideCompletedButton.id = "hideCompleted";
  hideCompletedButton.classList.add("button", "is-primary");
  hideCompletedButton.textContent = "Hide Completed";

  // Create a hidden button to show all todos if filtering by list.
  const showAll = document.createElement("button");
  showAll.textContent = "Show All";
  showAll.id = "showAll";
  showAll.classList.add("list", "button", "is-primary");
  showAll.style.display = "none";

  // Collect lists from all todo items in local storage.
  let lists = [];
  for (let i = 0; i < window.localStorage.length; i++) {
    let todoItem = JSON.parse(window.localStorage.getItem(i.toString()));
    // Check for null item if localStorage contains non-todo items.
    if (todoItem === null) {
      continue;
    }
    lists.push(todoItem.list);
  }

  // Collect lists from form options.
  const listOptions = document.querySelectorAll(".list-options");
  listOptions.forEach((option) => {
    lists.push(option.textContent);
  })

  // Remove duplicates & empty strings.
  let cleanedLists = [...new Set(lists.filter(list => list))];

  // Add cleaned up lists to page.
  cleanedLists.forEach((list) => {
    const listElement = document.createElement("a");
    listElement.classList.add("list");
    listElement.textContent = list;
    listContainer.appendChild(listElement);
  });
  listContainer.append(showAll, hideCompletedButton);
  sidebarContainer.appendChild(listContainer);
}


/***/ }),

/***/ "./src/todoFilter.js":
/*!***************************!*\
  !*** ./src/todoFilter.js ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   filterListeners: () => (/* binding */ filterListeners)
/* harmony export */ });


function filterTodos(filter) {
  // Reveal 'Show All' button.
  const showAll = document.getElementById('showAll');
  showAll.style.display = "";

  // Filter todos by list.
  for (let i = 0; i < window.localStorage.length; i++) {
    let todoItem = JSON.parse(window.localStorage.getItem(i.toString()));
    // Null checking
    if (todoItem === null) {
      continue;
    }

    // find the div containing this todo item.
    let todoDiv = document.getElementById(i);

    // ignore deleted todo items.
    if (todoItem.deleted === "deleted") {
      continue;
    // if 'show all' is clicked, remove any hidden attributes and move to next.
    } else if (filter === "Show All") {
      todoDiv.style.display = "";
      // rehide show all button.
      showAll.style.display = "none";
      continue;
    // hide completed items
    } else if (filter === "Hide Completed") {
      if (todoItem.completed === true) {
        todoDiv.style.display = "none";
      }
    // hide the item if list doesn't match.
    } else if (todoItem.list !== filter) {
      todoDiv.style.display = "none";
    // show item if list matches.
    } else {
      todoDiv.style.display = "";
    }
  }
}

function filterListeners() {
  // Listen for list filters.
  let listLinks = document.querySelectorAll(".list");

  listLinks.forEach((list) => {
    list.onclick = () => {
      filterTodos(list.textContent);
    }
  })

  // Listen for completed filters.
  let completedButton = document.getElementById("hideCompleted")
  completedButton.onclick = () => {
    filterTodos(completedButton.textContent);
  }
}


/***/ }),

/***/ "./src/todoForm.js":
/*!*************************!*\
  !*** ./src/todoForm.js ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   listOptions: () => (/* binding */ listOptions),
/* harmony export */   renderTodoForm: () => (/* binding */ renderTodoForm)
/* harmony export */ });
/* harmony import */ var _todoDisplay_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./todoDisplay.js */ "./src/todoDisplay.js");



class todo {
  constructor(title, dueDate, priority, notes, list = "default") {
    this.title = title;
    this.dueDate = dueDate;
    this.priority = priority;
    this.notes = notes;
    this.list = list;
    this.completed = false;
  }
}

function renderTodoForm() {
  const body = document.querySelector("body");

  const sidebarContainer = document.createElement("div");
  sidebarContainer.id = "sidebar";

  const form = document.createElement("form");
  form.addEventListener("submit", function (event) {
    event.preventDefault();

    const title = form.elements.title.value;
    const dueDate = form.elements.dueDate.value;
    const priority = form.elements.priority.value;
    const notes = form.elements.notes.value;
    const list = form.elements.list.value;

    const newTodo = new todo(title, dueDate, priority, notes, list);

    // Reset the form after submission
    form.reset();

    // Send todo object to localstorage.
    sendToStorage(JSON.stringify(newTodo));

    // Render only the newly created todo.
    (0,_todoDisplay_js__WEBPACK_IMPORTED_MODULE_0__.renderTodo)(window.localStorage.length - 1);

  });

  form.innerHTML = `
      <label for="title">Title:</label>
      <input type="text" id="title" name="title" required><br>

      <label for="due-date">Due Date:</label>
      <input type="date" id="due-date" name="dueDate"><br>

      <label for="priority">Priority:</label>
      <select id="priority" name="priority">
          <option value="High">High</option>
          <option value="Medium" selected>Medium</option>
          <option value="Low">Low</option>
      </select><br>

      <label for="notes">Notes:</label>
      <textarea id="notes" name="notes"></textarea><br>

      <label for="list">List:</label>
      <input list="list-selections" id="list" name="list"/>
      <datalist id="list-selections"></datalist><br>

      <label for="submit"></label>
      <input type="submit" value="Create Todo" id="submit" class="button">
  `;

  sidebarContainer.appendChild(form);
  body.appendChild(sidebarContainer);
}

function sendToStorage(todoItem) {
  window.localStorage.setItem(window.localStorage.length, todoItem);
};

function listOptions(edit=false) {
  const listSelector = edit === "edit" ? document.getElementById("modal-list-selections") : document.getElementById("list-selections");

  // Collect lists from all todo items in local storage.
  let lists = [];
  for (let i = 0; i < window.localStorage.length; i++) {
    let todoItem = JSON.parse(window.localStorage.getItem(i.toString()));
    // Null checking
    if (todoItem === null) {
      continue;
    }
    lists.push(todoItem.list);
  }

  // Remove duplicates & empty strings.
  let cleanedLists = [...new Set(lists.filter(list => list))];

  // Remove any existing children to prevent duplicates.
  if (listSelector.children.length > 0) {
    while (listSelector.firstChild) {
      listSelector.removeChild(listSelector.firstChild);
    }
  }

  // Add options to list selector, set to 'default' if no lists created yet.
  if (cleanedLists.length === 0) {
    let option = document.createElement("option");
    // option.textContent = "Default";
    option.value = "Default";
    option.classList.add("list-options");
    listSelector.appendChild(option);
  } else {
    cleanedLists.forEach(list => {
      let option = document.createElement("option");
      option.textContent = list;
      option.value = list;
      option.classList.add("list-options");
      listSelector.appendChild(option);
    })
  }
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
/******/ 	/* webpack/runtime/nonce */
/******/ 	(() => {
/******/ 		__webpack_require__.nc = undefined;
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!*********************!*\
  !*** ./src/home.js ***!
  \*********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _todoDisplay_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./todoDisplay.js */ "./src/todoDisplay.js");
/* harmony import */ var _todoForm_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./todoForm.js */ "./src/todoForm.js");
/* harmony import */ var _dist_assets_style_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../dist/assets/style.css */ "./dist/assets/style.css");
/* harmony import */ var _todoFilter_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./todoFilter.js */ "./src/todoFilter.js");
/* harmony import */ var _modal_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./modal.js */ "./src/modal.js");






(0,_todoForm_js__WEBPACK_IMPORTED_MODULE_1__.renderTodoForm)();
(0,_todoDisplay_js__WEBPACK_IMPORTED_MODULE_0__.renderTodo)();
(0,_modal_js__WEBPACK_IMPORTED_MODULE_4__.renderModal)();
(0,_modal_js__WEBPACK_IMPORTED_MODULE_4__.modalListeners)();
(0,_todoFilter_js__WEBPACK_IMPORTED_MODULE_3__.filterListeners)();
(0,_todoForm_js__WEBPACK_IMPORTED_MODULE_1__.listOptions)();

// For testing purposes only, clear data.
let clearButton = document.createElement("button");
clearButton.textContent = "Clear Data";
clearButton.classList.add("btn", "danger");
document.querySelector("body").appendChild(clearButton);

clearButton.onclick = () => {
  window.localStorage.clear();
  location.reload();
}



})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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ZGlzdC9hc3NldHMvc3R5bGUuY3NzIiwid2VicGFjazovL2pzLXRvZG8vLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzIiwid2VicGFjazovL2pzLXRvZG8vLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qcyIsIndlYnBhY2s6Ly9qcy10b2RvLy4vZGlzdC9hc3NldHMvc3R5bGUuY3NzPzUyZmEiLCJ3ZWJwYWNrOi8vanMtdG9kby8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qcyIsIndlYnBhY2s6Ly9qcy10b2RvLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qcyIsIndlYnBhY2s6Ly9qcy10b2RvLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzIiwid2VicGFjazovL2pzLXRvZG8vLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanMiLCJ3ZWJwYWNrOi8vanMtdG9kby8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzIiwid2VicGFjazovL2pzLXRvZG8vLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qcyIsIndlYnBhY2s6Ly9qcy10b2RvLy4vc3JjL2NoZWNrQm94LmpzIiwid2VicGFjazovL2pzLXRvZG8vLi9zcmMvZGVsZXRlVG9kby5qcyIsIndlYnBhY2s6Ly9qcy10b2RvLy4vc3JjL21vZGFsLmpzIiwid2VicGFjazovL2pzLXRvZG8vLi9zcmMvdG9kb0Rpc3BsYXkuanMiLCJ3ZWJwYWNrOi8vanMtdG9kby8uL3NyYy90b2RvRmlsdGVyLmpzIiwid2VicGFjazovL2pzLXRvZG8vLi9zcmMvdG9kb0Zvcm0uanMiLCJ3ZWJwYWNrOi8vanMtdG9kby93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly9qcy10b2RvL3dlYnBhY2svcnVudGltZS9jb21wYXQgZ2V0IGRlZmF1bHQgZXhwb3J0Iiwid2VicGFjazovL2pzLXRvZG8vd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL2pzLXRvZG8vd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly9qcy10b2RvL3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vanMtdG9kby93ZWJwYWNrL3J1bnRpbWUvbm9uY2UiLCJ3ZWJwYWNrOi8vanMtdG9kby8uL3NyYy9ob21lLmpzIl0sInNvdXJjZXNDb250ZW50IjpbIi8vIEltcG9ydHNcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fIGZyb20gXCIuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyBmcm9tIFwiLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiO1xudmFyIF9fX0NTU19MT0FERVJfRVhQT1JUX19fID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18pO1xuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBcIkBpbXBvcnQgdXJsKGh0dHBzOi8vZm9udHMuZ29vZ2xlYXBpcy5jb20vY3NzP2ZhbWlseT1Nb250c2VycmF0OjEwMCwyMDAsMzAwLDQwMCw3MDApO1wiXSk7XG4vLyBNb2R1bGVcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgYGJvZHkge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjNTc4ODZDO1xuICBjb2xvcjogd2hpdGVzbW9rZTtcbiAgZGlzcGxheTogZ3JpZDtcbiAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxZnIgM2ZyO1xuICBncmlkLXRlbXBsYXRlLXJvd3M6IDVyZW0gMWZyO1xuICBtYXJnaW46IDFyZW07XG4gIGZvbnQtZmFtaWx5OiAnTW9udHNlcnJhdCcsIHNhbnMtc2VyaWY7XG59XG5cbmZvcm0ge1xuICBkaXNwbGF5OiBncmlkO1xuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDFmciAyZnI7XG4gIGdyaWQtZ2FwOiAzcHg7XG59XG5sYWJlbCB7XG4gIGdyaWQtY29sdW1uOiAxO1xufVxuXG4uYnV0dG9uIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzk4RkI5ODtcbiAgYm9yZGVyOiBub25lO1xuICBib3JkZXItcmFkaXVzOiAxcmVtO1xuICBtYXJnaW4tdG9wOiAuNXJlbTtcbn1cblxuI3N1Ym1pdCB7XG4gIGdyaWQtY29sdW1uOiAxIC8gc3BhbiAyO1xufVxuXG4jc2l0ZS10aXRsZSB7XG4gIGdyaWQtcm93OiAxO1xuICBncmlkLWNvbHVtbjogMSAvIHNwYW4gMjtcblxufVxuXG4jc2lkZWJhciB7XG4gIGdyaWQtY29sdW1uOiAxO1xuICBncmlkLXJvdzogMjtcbiAgbWF4LXdpZHRoOiBmaXQtY29udGVudDtcbiAgbWF4LWhlaWdodDogZml0LWNvbnRlbnQ7XG59XG5cbiN0b2Rvcy1jb250YWluZXIge1xuICBncmlkLWNvbHVtbjogMjtcbiAgZ3JpZC1yb3c6IDEgLyBzcGFuIDI7XG4gIG1hcmdpbjogMnJlbTtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbn1cblxuLnRvZG8taXRlbSB7XG4gIGRpc3BsYXk6IGdyaWQ7XG4gIGdhcDogNXB4O1xuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IC4yNWZyIDFmciAxZnIgLjVmciAuMjVmciAuMjVmcjtcbiAgcGFkZGluZy1ib3R0b206IDVweDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbn1cblxuLmNoZWNrYm94IHtcbiAgaGVpZ2h0OiAyNXB4O1xuICB3aWR0aDogMjVweDtcbn1cblxuI2xpc3QtY29udGFpbmVyIHtcbiAgcGFkZGluZy10b3A6IDEuNXJlbTtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbn1cblxuLmxpc3Qge1xuICBwYWRkaW5nLWJvdHRvbTogLjVyZW07XG4gIHRleHQtZGVjb3JhdGlvbjogdW5kZXJsaW5lO1xufVxuLmxpc3Q6aG92ZXIsIC5lZGl0LWJ0bjpob3ZlciwgLmRlbGV0ZS1idG46aG92ZXIge1xuICBjdXJzb3I6IHBvaW50ZXI7XG59XG5cbiNzaG93QWxsIHtcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xuICBwYWRkaW5nOiAycHg7XG59XG5cbiNuZXctbGlzdC1mb3JtIHtcbiAgcGFkZGluZy10b3A6IDFyZW07XG59XG5cbiNtb2RhbC1oZWFkZXIge1xuICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG59XG5cbiNjbG9zZU1vZGFsIHtcbiAgYm9yZGVyLXJhZGl1czogLjRyZW07XG4gIGJvcmRlcjogbm9uZTtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzk4RkI5ODtcbiAgaGVpZ2h0OiAyNXB4O1xuICB3aWR0aDogMjVweDtcbiAgZm9udC1zaXplOiAxcmVtO1xufVxuXG4udG9kby1jb21wbGV0ZSB7XG4gIGNvbG9yOiByZ2IoNjMsIDYyLCA2Mik7XG4gIHRleHQtZGVjb3JhdGlvbjogbGluZS10aHJvdWdoO1xufVxuXG4uZWRpdC1idG4sIC5kZWxldGUtYnRuIHtcbiAgYm9yZGVyOiAwO1xuICBiYWNrZ3JvdW5kOiBub25lO1xuICBvcGFjaXR5OiAuNTA7XG4gIGhlaWdodDogMjVweDtcbiAgd2lkdGg6IDI1cHg7XG59XG5cbi5wcmlvcml0eS1sb3cge1xuICBjb2xvcjogIzg3Y2VlYjtcbn1cblxuLnByaW9yaXR5LW1lZGl1bSB7XG4gIGNvbG9yOiAjOThGQjk4O1xufVxuXG4ucHJpb3JpdHktaGlnaCB7XG4gIGNvbG9yOiAjZmY3ZjUwO1xufVxuXG4uZGFuZ2VyIHtcbiAgYm9yZGVyOiBub25lO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmY3ZjUwO1xuICBjb2xvcjogd2hpdGU7XG4gIG1hcmdpbi10b3A6IDNyZW07XG59XG5cbmAsIFwiXCIse1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W1wid2VicGFjazovLy4vZGlzdC9hc3NldHMvc3R5bGUuY3NzXCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCJBQUVBO0VBQ0UseUJBQXlCO0VBQ3pCLGlCQUFpQjtFQUNqQixhQUFhO0VBQ2IsOEJBQThCO0VBQzlCLDRCQUE0QjtFQUM1QixZQUFZO0VBQ1oscUNBQXFDO0FBQ3ZDOztBQUVBO0VBQ0UsYUFBYTtFQUNiLDhCQUE4QjtFQUM5QixhQUFhO0FBQ2Y7QUFDQTtFQUNFLGNBQWM7QUFDaEI7O0FBRUE7RUFDRSx5QkFBeUI7RUFDekIsWUFBWTtFQUNaLG1CQUFtQjtFQUNuQixpQkFBaUI7QUFDbkI7O0FBRUE7RUFDRSx1QkFBdUI7QUFDekI7O0FBRUE7RUFDRSxXQUFXO0VBQ1gsdUJBQXVCOztBQUV6Qjs7QUFFQTtFQUNFLGNBQWM7RUFDZCxXQUFXO0VBQ1gsc0JBQXNCO0VBQ3RCLHVCQUF1QjtBQUN6Qjs7QUFFQTtFQUNFLGNBQWM7RUFDZCxvQkFBb0I7RUFDcEIsWUFBWTtFQUNaLGFBQWE7RUFDYixzQkFBc0I7QUFDeEI7O0FBRUE7RUFDRSxhQUFhO0VBQ2IsUUFBUTtFQUNSLHFEQUFxRDtFQUNyRCxtQkFBbUI7RUFDbkIsbUJBQW1CO0FBQ3JCOztBQUVBO0VBQ0UsWUFBWTtFQUNaLFdBQVc7QUFDYjs7QUFFQTtFQUNFLG1CQUFtQjtFQUNuQixhQUFhO0VBQ2Isc0JBQXNCO0FBQ3hCOztBQUVBO0VBQ0UscUJBQXFCO0VBQ3JCLDBCQUEwQjtBQUM1QjtBQUNBO0VBQ0UsZUFBZTtBQUNqQjs7QUFFQTtFQUNFLHFCQUFxQjtFQUNyQixZQUFZO0FBQ2Q7O0FBRUE7RUFDRSxpQkFBaUI7QUFDbkI7O0FBRUE7RUFDRSxhQUFhO0VBQ2IsOEJBQThCO0VBQzlCLG1CQUFtQjtBQUNyQjs7QUFFQTtFQUNFLG9CQUFvQjtFQUNwQixZQUFZO0VBQ1oseUJBQXlCO0VBQ3pCLFlBQVk7RUFDWixXQUFXO0VBQ1gsZUFBZTtBQUNqQjs7QUFFQTtFQUNFLHNCQUFzQjtFQUN0Qiw2QkFBNkI7QUFDL0I7O0FBRUE7RUFDRSxTQUFTO0VBQ1QsZ0JBQWdCO0VBQ2hCLFlBQVk7RUFDWixZQUFZO0VBQ1osV0FBVztBQUNiOztBQUVBO0VBQ0UsY0FBYztBQUNoQjs7QUFFQTtFQUNFLGNBQWM7QUFDaEI7O0FBRUE7RUFDRSxjQUFjO0FBQ2hCOztBQUVBO0VBQ0UsWUFBWTtFQUNaLHlCQUF5QjtFQUN6QixZQUFZO0VBQ1osZ0JBQWdCO0FBQ2xCXCIsXCJzb3VyY2VzQ29udGVudFwiOltcIkBpbXBvcnQgdXJsKCdodHRwczovL2ZvbnRzLmdvb2dsZWFwaXMuY29tL2Nzcz9mYW1pbHk9TW9udHNlcnJhdDoxMDAsMjAwLDMwMCw0MDAsNzAwJyk7XFxuXFxuYm9keSB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjNTc4ODZDO1xcbiAgY29sb3I6IHdoaXRlc21va2U7XFxuICBkaXNwbGF5OiBncmlkO1xcbiAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxZnIgM2ZyO1xcbiAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiA1cmVtIDFmcjtcXG4gIG1hcmdpbjogMXJlbTtcXG4gIGZvbnQtZmFtaWx5OiAnTW9udHNlcnJhdCcsIHNhbnMtc2VyaWY7XFxufVxcblxcbmZvcm0ge1xcbiAgZGlzcGxheTogZ3JpZDtcXG4gIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMWZyIDJmcjtcXG4gIGdyaWQtZ2FwOiAzcHg7XFxufVxcbmxhYmVsIHtcXG4gIGdyaWQtY29sdW1uOiAxO1xcbn1cXG5cXG4uYnV0dG9uIHtcXG4gIGJhY2tncm91bmQtY29sb3I6ICM5OEZCOTg7XFxuICBib3JkZXI6IG5vbmU7XFxuICBib3JkZXItcmFkaXVzOiAxcmVtO1xcbiAgbWFyZ2luLXRvcDogLjVyZW07XFxufVxcblxcbiNzdWJtaXQge1xcbiAgZ3JpZC1jb2x1bW46IDEgLyBzcGFuIDI7XFxufVxcblxcbiNzaXRlLXRpdGxlIHtcXG4gIGdyaWQtcm93OiAxO1xcbiAgZ3JpZC1jb2x1bW46IDEgLyBzcGFuIDI7XFxuXFxufVxcblxcbiNzaWRlYmFyIHtcXG4gIGdyaWQtY29sdW1uOiAxO1xcbiAgZ3JpZC1yb3c6IDI7XFxuICBtYXgtd2lkdGg6IGZpdC1jb250ZW50O1xcbiAgbWF4LWhlaWdodDogZml0LWNvbnRlbnQ7XFxufVxcblxcbiN0b2Rvcy1jb250YWluZXIge1xcbiAgZ3JpZC1jb2x1bW46IDI7XFxuICBncmlkLXJvdzogMSAvIHNwYW4gMjtcXG4gIG1hcmdpbjogMnJlbTtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbn1cXG5cXG4udG9kby1pdGVtIHtcXG4gIGRpc3BsYXk6IGdyaWQ7XFxuICBnYXA6IDVweDtcXG4gIGdyaWQtdGVtcGxhdGUtY29sdW1uczogLjI1ZnIgMWZyIDFmciAuNWZyIC4yNWZyIC4yNWZyO1xcbiAgcGFkZGluZy1ib3R0b206IDVweDtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxufVxcblxcbi5jaGVja2JveCB7XFxuICBoZWlnaHQ6IDI1cHg7XFxuICB3aWR0aDogMjVweDtcXG59XFxuXFxuI2xpc3QtY29udGFpbmVyIHtcXG4gIHBhZGRpbmctdG9wOiAxLjVyZW07XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG59XFxuXFxuLmxpc3Qge1xcbiAgcGFkZGluZy1ib3R0b206IC41cmVtO1xcbiAgdGV4dC1kZWNvcmF0aW9uOiB1bmRlcmxpbmU7XFxufVxcbi5saXN0OmhvdmVyLCAuZWRpdC1idG46aG92ZXIsIC5kZWxldGUtYnRuOmhvdmVyIHtcXG4gIGN1cnNvcjogcG9pbnRlcjtcXG59XFxuXFxuI3Nob3dBbGwge1xcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xcbiAgcGFkZGluZzogMnB4O1xcbn1cXG5cXG4jbmV3LWxpc3QtZm9ybSB7XFxuICBwYWRkaW5nLXRvcDogMXJlbTtcXG59XFxuXFxuI21vZGFsLWhlYWRlciB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG59XFxuXFxuI2Nsb3NlTW9kYWwge1xcbiAgYm9yZGVyLXJhZGl1czogLjRyZW07XFxuICBib3JkZXI6IG5vbmU7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjOThGQjk4O1xcbiAgaGVpZ2h0OiAyNXB4O1xcbiAgd2lkdGg6IDI1cHg7XFxuICBmb250LXNpemU6IDFyZW07XFxufVxcblxcbi50b2RvLWNvbXBsZXRlIHtcXG4gIGNvbG9yOiByZ2IoNjMsIDYyLCA2Mik7XFxuICB0ZXh0LWRlY29yYXRpb246IGxpbmUtdGhyb3VnaDtcXG59XFxuXFxuLmVkaXQtYnRuLCAuZGVsZXRlLWJ0biB7XFxuICBib3JkZXI6IDA7XFxuICBiYWNrZ3JvdW5kOiBub25lO1xcbiAgb3BhY2l0eTogLjUwO1xcbiAgaGVpZ2h0OiAyNXB4O1xcbiAgd2lkdGg6IDI1cHg7XFxufVxcblxcbi5wcmlvcml0eS1sb3cge1xcbiAgY29sb3I6ICM4N2NlZWI7XFxufVxcblxcbi5wcmlvcml0eS1tZWRpdW0ge1xcbiAgY29sb3I6ICM5OEZCOTg7XFxufVxcblxcbi5wcmlvcml0eS1oaWdoIHtcXG4gIGNvbG9yOiAjZmY3ZjUwO1xcbn1cXG5cXG4uZGFuZ2VyIHtcXG4gIGJvcmRlcjogbm9uZTtcXG4gIGJhY2tncm91bmQtY29sb3I6ICNmZjdmNTA7XFxuICBjb2xvcjogd2hpdGU7XFxuICBtYXJnaW4tdG9wOiAzcmVtO1xcbn1cXG5cXG5cIl0sXCJzb3VyY2VSb290XCI6XCJcIn1dKTtcbi8vIEV4cG9ydHNcbmV4cG9ydCBkZWZhdWx0IF9fX0NTU19MT0FERVJfRVhQT1JUX19fO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qXG4gIE1JVCBMaWNlbnNlIGh0dHA6Ly93d3cub3BlbnNvdXJjZS5vcmcvbGljZW5zZXMvbWl0LWxpY2Vuc2UucGhwXG4gIEF1dGhvciBUb2JpYXMgS29wcGVycyBAc29rcmFcbiovXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKSB7XG4gIHZhciBsaXN0ID0gW107XG5cbiAgLy8gcmV0dXJuIHRoZSBsaXN0IG9mIG1vZHVsZXMgYXMgY3NzIHN0cmluZ1xuICBsaXN0LnRvU3RyaW5nID0gZnVuY3Rpb24gdG9TdHJpbmcoKSB7XG4gICAgcmV0dXJuIHRoaXMubWFwKGZ1bmN0aW9uIChpdGVtKSB7XG4gICAgICB2YXIgY29udGVudCA9IFwiXCI7XG4gICAgICB2YXIgbmVlZExheWVyID0gdHlwZW9mIGl0ZW1bNV0gIT09IFwidW5kZWZpbmVkXCI7XG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIik7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpO1xuICAgICAgfVxuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIik7XG4gICAgICB9XG4gICAgICBjb250ZW50ICs9IGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcoaXRlbSk7XG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIHJldHVybiBjb250ZW50O1xuICAgIH0pLmpvaW4oXCJcIik7XG4gIH07XG5cbiAgLy8gaW1wb3J0IGEgbGlzdCBvZiBtb2R1bGVzIGludG8gdGhlIGxpc3RcbiAgbGlzdC5pID0gZnVuY3Rpb24gaShtb2R1bGVzLCBtZWRpYSwgZGVkdXBlLCBzdXBwb3J0cywgbGF5ZXIpIHtcbiAgICBpZiAodHlwZW9mIG1vZHVsZXMgPT09IFwic3RyaW5nXCIpIHtcbiAgICAgIG1vZHVsZXMgPSBbW251bGwsIG1vZHVsZXMsIHVuZGVmaW5lZF1dO1xuICAgIH1cbiAgICB2YXIgYWxyZWFkeUltcG9ydGVkTW9kdWxlcyA9IHt9O1xuICAgIGlmIChkZWR1cGUpIHtcbiAgICAgIGZvciAodmFyIGsgPSAwOyBrIDwgdGhpcy5sZW5ndGg7IGsrKykge1xuICAgICAgICB2YXIgaWQgPSB0aGlzW2tdWzBdO1xuICAgICAgICBpZiAoaWQgIT0gbnVsbCkge1xuICAgICAgICAgIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaWRdID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgICBmb3IgKHZhciBfayA9IDA7IF9rIDwgbW9kdWxlcy5sZW5ndGg7IF9rKyspIHtcbiAgICAgIHZhciBpdGVtID0gW10uY29uY2F0KG1vZHVsZXNbX2tdKTtcbiAgICAgIGlmIChkZWR1cGUgJiYgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpdGVtWzBdXSkge1xuICAgICAgICBjb250aW51ZTtcbiAgICAgIH1cbiAgICAgIGlmICh0eXBlb2YgbGF5ZXIgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgaWYgKHR5cGVvZiBpdGVtWzVdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBpZiAobWVkaWEpIHtcbiAgICAgICAgaWYgKCFpdGVtWzJdKSB7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgaWYgKHN1cHBvcnRzKSB7XG4gICAgICAgIGlmICghaXRlbVs0XSkge1xuICAgICAgICAgIGl0ZW1bNF0gPSBcIlwiLmNvbmNhdChzdXBwb3J0cyk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzRdID0gc3VwcG9ydHM7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGxpc3QucHVzaChpdGVtKTtcbiAgICB9XG4gIH07XG4gIHJldHVybiBsaXN0O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoaXRlbSkge1xuICB2YXIgY29udGVudCA9IGl0ZW1bMV07XG4gIHZhciBjc3NNYXBwaW5nID0gaXRlbVszXTtcbiAgaWYgKCFjc3NNYXBwaW5nKSB7XG4gICAgcmV0dXJuIGNvbnRlbnQ7XG4gIH1cbiAgaWYgKHR5cGVvZiBidG9hID09PSBcImZ1bmN0aW9uXCIpIHtcbiAgICB2YXIgYmFzZTY0ID0gYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoY3NzTWFwcGluZykpKSk7XG4gICAgdmFyIGRhdGEgPSBcInNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2NoYXJzZXQ9dXRmLTg7YmFzZTY0LFwiLmNvbmNhdChiYXNlNjQpO1xuICAgIHZhciBzb3VyY2VNYXBwaW5nID0gXCIvKiMgXCIuY29uY2F0KGRhdGEsIFwiICovXCIpO1xuICAgIHJldHVybiBbY29udGVudF0uY29uY2F0KFtzb3VyY2VNYXBwaW5nXSkuam9pbihcIlxcblwiKTtcbiAgfVxuICByZXR1cm4gW2NvbnRlbnRdLmpvaW4oXCJcXG5cIik7XG59OyIsIlxuICAgICAgaW1wb3J0IEFQSSBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qc1wiO1xuICAgICAgaW1wb3J0IGRvbUFQSSBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0Rm4gZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzXCI7XG4gICAgICBpbXBvcnQgc2V0QXR0cmlidXRlcyBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydFN0eWxlRWxlbWVudCBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qc1wiO1xuICAgICAgaW1wb3J0IHN0eWxlVGFnVHJhbnNmb3JtRm4gZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qc1wiO1xuICAgICAgaW1wb3J0IGNvbnRlbnQsICogYXMgbmFtZWRFeHBvcnQgZnJvbSBcIiEhLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zdHlsZS5jc3NcIjtcbiAgICAgIFxuICAgICAgXG5cbnZhciBvcHRpb25zID0ge307XG5cbm9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0gPSBzdHlsZVRhZ1RyYW5zZm9ybUZuO1xub3B0aW9ucy5zZXRBdHRyaWJ1dGVzID0gc2V0QXR0cmlidXRlcztcblxuICAgICAgb3B0aW9ucy5pbnNlcnQgPSBpbnNlcnRGbi5iaW5kKG51bGwsIFwiaGVhZFwiKTtcbiAgICBcbm9wdGlvbnMuZG9tQVBJID0gZG9tQVBJO1xub3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7XG5cbnZhciB1cGRhdGUgPSBBUEkoY29udGVudCwgb3B0aW9ucyk7XG5cblxuXG5leHBvcnQgKiBmcm9tIFwiISEuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3N0eWxlLmNzc1wiO1xuICAgICAgIGV4cG9ydCBkZWZhdWx0IGNvbnRlbnQgJiYgY29udGVudC5sb2NhbHMgPyBjb250ZW50LmxvY2FscyA6IHVuZGVmaW5lZDtcbiIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgc3R5bGVzSW5ET00gPSBbXTtcbmZ1bmN0aW9uIGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpIHtcbiAgdmFyIHJlc3VsdCA9IC0xO1xuICBmb3IgKHZhciBpID0gMDsgaSA8IHN0eWxlc0luRE9NLmxlbmd0aDsgaSsrKSB7XG4gICAgaWYgKHN0eWxlc0luRE9NW2ldLmlkZW50aWZpZXIgPT09IGlkZW50aWZpZXIpIHtcbiAgICAgIHJlc3VsdCA9IGk7XG4gICAgICBicmVhaztcbiAgICB9XG4gIH1cbiAgcmV0dXJuIHJlc3VsdDtcbn1cbmZ1bmN0aW9uIG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKSB7XG4gIHZhciBpZENvdW50TWFwID0ge307XG4gIHZhciBpZGVudGlmaWVycyA9IFtdO1xuICBmb3IgKHZhciBpID0gMDsgaSA8IGxpc3QubGVuZ3RoOyBpKyspIHtcbiAgICB2YXIgaXRlbSA9IGxpc3RbaV07XG4gICAgdmFyIGlkID0gb3B0aW9ucy5iYXNlID8gaXRlbVswXSArIG9wdGlvbnMuYmFzZSA6IGl0ZW1bMF07XG4gICAgdmFyIGNvdW50ID0gaWRDb3VudE1hcFtpZF0gfHwgMDtcbiAgICB2YXIgaWRlbnRpZmllciA9IFwiXCIuY29uY2F0KGlkLCBcIiBcIikuY29uY2F0KGNvdW50KTtcbiAgICBpZENvdW50TWFwW2lkXSA9IGNvdW50ICsgMTtcbiAgICB2YXIgaW5kZXhCeUlkZW50aWZpZXIgPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICB2YXIgb2JqID0ge1xuICAgICAgY3NzOiBpdGVtWzFdLFxuICAgICAgbWVkaWE6IGl0ZW1bMl0sXG4gICAgICBzb3VyY2VNYXA6IGl0ZW1bM10sXG4gICAgICBzdXBwb3J0czogaXRlbVs0XSxcbiAgICAgIGxheWVyOiBpdGVtWzVdXG4gICAgfTtcbiAgICBpZiAoaW5kZXhCeUlkZW50aWZpZXIgIT09IC0xKSB7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0ucmVmZXJlbmNlcysrO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnVwZGF0ZXIob2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdmFyIHVwZGF0ZXIgPSBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKTtcbiAgICAgIG9wdGlvbnMuYnlJbmRleCA9IGk7XG4gICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoaSwgMCwge1xuICAgICAgICBpZGVudGlmaWVyOiBpZGVudGlmaWVyLFxuICAgICAgICB1cGRhdGVyOiB1cGRhdGVyLFxuICAgICAgICByZWZlcmVuY2VzOiAxXG4gICAgICB9KTtcbiAgICB9XG4gICAgaWRlbnRpZmllcnMucHVzaChpZGVudGlmaWVyKTtcbiAgfVxuICByZXR1cm4gaWRlbnRpZmllcnM7XG59XG5mdW5jdGlvbiBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKSB7XG4gIHZhciBhcGkgPSBvcHRpb25zLmRvbUFQSShvcHRpb25zKTtcbiAgYXBpLnVwZGF0ZShvYmopO1xuICB2YXIgdXBkYXRlciA9IGZ1bmN0aW9uIHVwZGF0ZXIobmV3T2JqKSB7XG4gICAgaWYgKG5ld09iaikge1xuICAgICAgaWYgKG5ld09iai5jc3MgPT09IG9iai5jc3MgJiYgbmV3T2JqLm1lZGlhID09PSBvYmoubWVkaWEgJiYgbmV3T2JqLnNvdXJjZU1hcCA9PT0gb2JqLnNvdXJjZU1hcCAmJiBuZXdPYmouc3VwcG9ydHMgPT09IG9iai5zdXBwb3J0cyAmJiBuZXdPYmoubGF5ZXIgPT09IG9iai5sYXllcikge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG4gICAgICBhcGkudXBkYXRlKG9iaiA9IG5ld09iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIGFwaS5yZW1vdmUoKTtcbiAgICB9XG4gIH07XG4gIHJldHVybiB1cGRhdGVyO1xufVxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAobGlzdCwgb3B0aW9ucykge1xuICBvcHRpb25zID0gb3B0aW9ucyB8fCB7fTtcbiAgbGlzdCA9IGxpc3QgfHwgW107XG4gIHZhciBsYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucyk7XG4gIHJldHVybiBmdW5jdGlvbiB1cGRhdGUobmV3TGlzdCkge1xuICAgIG5ld0xpc3QgPSBuZXdMaXN0IHx8IFtdO1xuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgaSsrKSB7XG4gICAgICB2YXIgaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tpXTtcbiAgICAgIHZhciBpbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhdLnJlZmVyZW5jZXMtLTtcbiAgICB9XG4gICAgdmFyIG5ld0xhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShuZXdMaXN0LCBvcHRpb25zKTtcbiAgICBmb3IgKHZhciBfaSA9IDA7IF9pIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgX2krKykge1xuICAgICAgdmFyIF9pZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW19pXTtcbiAgICAgIHZhciBfaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihfaWRlbnRpZmllcik7XG4gICAgICBpZiAoc3R5bGVzSW5ET01bX2luZGV4XS5yZWZlcmVuY2VzID09PSAwKSB7XG4gICAgICAgIHN0eWxlc0luRE9NW19pbmRleF0udXBkYXRlcigpO1xuICAgICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoX2luZGV4LCAxKTtcbiAgICAgIH1cbiAgICB9XG4gICAgbGFzdElkZW50aWZpZXJzID0gbmV3TGFzdElkZW50aWZpZXJzO1xuICB9O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIG1lbW8gPSB7fTtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBnZXRUYXJnZXQodGFyZ2V0KSB7XG4gIGlmICh0eXBlb2YgbWVtb1t0YXJnZXRdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgdmFyIHN0eWxlVGFyZ2V0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3Rvcih0YXJnZXQpO1xuXG4gICAgLy8gU3BlY2lhbCBjYXNlIHRvIHJldHVybiBoZWFkIG9mIGlmcmFtZSBpbnN0ZWFkIG9mIGlmcmFtZSBpdHNlbGZcbiAgICBpZiAod2luZG93LkhUTUxJRnJhbWVFbGVtZW50ICYmIHN0eWxlVGFyZ2V0IGluc3RhbmNlb2Ygd2luZG93LkhUTUxJRnJhbWVFbGVtZW50KSB7XG4gICAgICB0cnkge1xuICAgICAgICAvLyBUaGlzIHdpbGwgdGhyb3cgYW4gZXhjZXB0aW9uIGlmIGFjY2VzcyB0byBpZnJhbWUgaXMgYmxvY2tlZFxuICAgICAgICAvLyBkdWUgdG8gY3Jvc3Mtb3JpZ2luIHJlc3RyaWN0aW9uc1xuICAgICAgICBzdHlsZVRhcmdldCA9IHN0eWxlVGFyZ2V0LmNvbnRlbnREb2N1bWVudC5oZWFkO1xuICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgICAvLyBpc3RhbmJ1bCBpZ25vcmUgbmV4dFxuICAgICAgICBzdHlsZVRhcmdldCA9IG51bGw7XG4gICAgICB9XG4gICAgfVxuICAgIG1lbW9bdGFyZ2V0XSA9IHN0eWxlVGFyZ2V0O1xuICB9XG4gIHJldHVybiBtZW1vW3RhcmdldF07XG59XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gaW5zZXJ0QnlTZWxlY3RvcihpbnNlcnQsIHN0eWxlKSB7XG4gIHZhciB0YXJnZXQgPSBnZXRUYXJnZXQoaW5zZXJ0KTtcbiAgaWYgKCF0YXJnZXQpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoXCJDb3VsZG4ndCBmaW5kIGEgc3R5bGUgdGFyZ2V0LiBUaGlzIHByb2JhYmx5IG1lYW5zIHRoYXQgdGhlIHZhbHVlIGZvciB0aGUgJ2luc2VydCcgcGFyYW1ldGVyIGlzIGludmFsaWQuXCIpO1xuICB9XG4gIHRhcmdldC5hcHBlbmRDaGlsZChzdHlsZSk7XG59XG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydEJ5U2VsZWN0b3I7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpIHtcbiAgdmFyIGVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic3R5bGVcIik7XG4gIG9wdGlvbnMuc2V0QXR0cmlidXRlcyhlbGVtZW50LCBvcHRpb25zLmF0dHJpYnV0ZXMpO1xuICBvcHRpb25zLmluc2VydChlbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xuICByZXR1cm4gZWxlbWVudDtcbn1cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0U3R5bGVFbGVtZW50OyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcyhzdHlsZUVsZW1lbnQpIHtcbiAgdmFyIG5vbmNlID0gdHlwZW9mIF9fd2VicGFja19ub25jZV9fICE9PSBcInVuZGVmaW5lZFwiID8gX193ZWJwYWNrX25vbmNlX18gOiBudWxsO1xuICBpZiAobm9uY2UpIHtcbiAgICBzdHlsZUVsZW1lbnQuc2V0QXR0cmlidXRlKFwibm9uY2VcIiwgbm9uY2UpO1xuICB9XG59XG5tb2R1bGUuZXhwb3J0cyA9IHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlczsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaikge1xuICB2YXIgY3NzID0gXCJcIjtcbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KG9iai5zdXBwb3J0cywgXCIpIHtcIik7XG4gIH1cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIkBtZWRpYSBcIi5jb25jYXQob2JqLm1lZGlhLCBcIiB7XCIpO1xuICB9XG4gIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2Ygb2JqLmxheWVyICE9PSBcInVuZGVmaW5lZFwiO1xuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwiQGxheWVyXCIuY29uY2F0KG9iai5sYXllci5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KG9iai5sYXllcikgOiBcIlwiLCBcIiB7XCIpO1xuICB9XG4gIGNzcyArPSBvYmouY3NzO1xuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuICB2YXIgc291cmNlTWFwID0gb2JqLnNvdXJjZU1hcDtcbiAgaWYgKHNvdXJjZU1hcCAmJiB0eXBlb2YgYnRvYSAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgIGNzcyArPSBcIlxcbi8qIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtiYXNlNjQsXCIuY29uY2F0KGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KHNvdXJjZU1hcCkpKSksIFwiICovXCIpO1xuICB9XG5cbiAgLy8gRm9yIG9sZCBJRVxuICAvKiBpc3RhbmJ1bCBpZ25vcmUgaWYgICovXG4gIG9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG59XG5mdW5jdGlvbiByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KSB7XG4gIC8vIGlzdGFuYnVsIGlnbm9yZSBpZlxuICBpZiAoc3R5bGVFbGVtZW50LnBhcmVudE5vZGUgPT09IG51bGwpIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cbiAgc3R5bGVFbGVtZW50LnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50KTtcbn1cblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBkb21BUEkob3B0aW9ucykge1xuICBpZiAodHlwZW9mIGRvY3VtZW50ID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIHVwZGF0ZTogZnVuY3Rpb24gdXBkYXRlKCkge30sXG4gICAgICByZW1vdmU6IGZ1bmN0aW9uIHJlbW92ZSgpIHt9XG4gICAgfTtcbiAgfVxuICB2YXIgc3R5bGVFbGVtZW50ID0gb3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucyk7XG4gIHJldHVybiB7XG4gICAgdXBkYXRlOiBmdW5jdGlvbiB1cGRhdGUob2JqKSB7XG4gICAgICBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaik7XG4gICAgfSxcbiAgICByZW1vdmU6IGZ1bmN0aW9uIHJlbW92ZSgpIHtcbiAgICAgIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpO1xuICAgIH1cbiAgfTtcbn1cbm1vZHVsZS5leHBvcnRzID0gZG9tQVBJOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50KSB7XG4gIGlmIChzdHlsZUVsZW1lbnQuc3R5bGVTaGVldCkge1xuICAgIHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0LmNzc1RleHQgPSBjc3M7XG4gIH0gZWxzZSB7XG4gICAgd2hpbGUgKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKSB7XG4gICAgICBzdHlsZUVsZW1lbnQucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpO1xuICAgIH1cbiAgICBzdHlsZUVsZW1lbnQuYXBwZW5kQ2hpbGQoZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoY3NzKSk7XG4gIH1cbn1cbm1vZHVsZS5leHBvcnRzID0gc3R5bGVUYWdUcmFuc2Zvcm07IiwiZXhwb3J0IGRlZmF1bHQgY2hlY2tib3hMaXN0ZW5lcnM7XG5cbmZ1bmN0aW9uIG1hcmtCb3godG9kb0Rpdikge1xuICBsZXQga2V5ID0gdG9kb0Rpdi5pZDtcbiAgbGV0IHRvZG9JdGVtID0gSlNPTi5wYXJzZSh3aW5kb3cubG9jYWxTdG9yYWdlLmdldEl0ZW0oa2V5KSk7XG5cbiAgaWYgKHRvZG9JdGVtLmNvbXBsZXRlZCkge1xuICAgIHRvZG9JdGVtLmNvbXBsZXRlZCA9IGZhbHNlO1xuICAgIHRvZG9EaXYuY2xhc3NMaXN0LnJlbW92ZSgndG9kby1jb21wbGV0ZScpO1xuICB9IGVsc2UgaWYgKCF0b2RvSXRlbS5jb21wbGV0ZWQpIHtcbiAgICB0b2RvSXRlbS5jb21wbGV0ZWQgPSB0cnVlO1xuICAgIHRvZG9EaXYuY2xhc3NMaXN0LmFkZCgndG9kby1jb21wbGV0ZScpO1xuICB9XG4gIHdpbmRvdy5sb2NhbFN0b3JhZ2Uuc2V0SXRlbShrZXksIEpTT04uc3RyaW5naWZ5KHRvZG9JdGVtKSk7XG59XG5cbmZ1bmN0aW9uIGNoZWNrYm94TGlzdGVuZXJzKCkge1xuICBsZXQgY2hlY2tCb3hlcyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoXCJpbnB1dFt0eXBlPSdjaGVja2JveCddXCIpO1xuXG4gIGNoZWNrQm94ZXMuZm9yRWFjaCgoY2hlY2tib3gpID0+IHtcbiAgICBjaGVja2JveC5vbmNsaWNrID0gKCkgPT4ge1xuICAgICAgbWFya0JveChjaGVja2JveC5wYXJlbnRFbGVtZW50KVxuICAgIH1cbiAgfSlcbn1cbiIsImV4cG9ydCB7IGRlbGV0ZVRvZG8sIGRlbGV0ZUxpc3RlbmVycyB9O1xuaW1wb3J0IHtyZW5kZXJUb2RvfSBmcm9tIFwiLi90b2RvRGlzcGxheVwiO1xuXG5mdW5jdGlvbiBkZWxldGVUb2RvKGtleSkge1xuICB3aW5kb3cubG9jYWxTdG9yYWdlLnNldEl0ZW0oa2V5LCAne1wiZGVsZXRlZFwiOlwiZGVsZXRlZFwifScpO1xuXG4gIGxldCB0b2Rvc0NvbnRhaW5lciA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwidG9kb3MtY29udGFpbmVyXCIpO1xuXG4gIC8vIFJlbW92ZSBjaGlsZHJlbiBmcm9tIHRoZSBjb250YWluZXIgaWYgdGhleSBleGlzdC5cbiAgaWYgKHRvZG9zQ29udGFpbmVyLmNoaWxkcmVuLmxlbmd0aCA+IDApIHtcbiAgICB3aGlsZSAodG9kb3NDb250YWluZXIuZmlyc3RDaGlsZCkge1xuICAgICAgdG9kb3NDb250YWluZXIucmVtb3ZlQ2hpbGQodG9kb3NDb250YWluZXIuZmlyc3RDaGlsZCk7XG4gICAgfVxuICB9XG4gIHJlbmRlclRvZG8oKTtcbn1cblxuZnVuY3Rpb24gZGVsZXRlTGlzdGVuZXJzKCkge1xuICBsZXQgZGVsZXRlQnV0dG9ucyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoXCIuZGVsZXRlLWJ0blwiKTtcblxuICBkZWxldGVCdXR0b25zLmZvckVhY2goKGRlbGV0ZUJ1dHRvbikgPT4ge1xuICAgIGRlbGV0ZUJ1dHRvbi5vbmNsaWNrID0gKCkgPT4ge1xuICAgICAgZGVsZXRlVG9kbyhkZWxldGVCdXR0b24ucGFyZW50RWxlbWVudC5pZCk7XG4gICAgfVxuICB9KVxufVxuIiwiZXhwb3J0IHsgcmVuZGVyTW9kYWwsIG1vZGFsTGlzdGVuZXJzIH1cbmltcG9ydCB7IGxpc3RPcHRpb25zIH0gZnJvbSBcIi4vdG9kb0Zvcm1cIjtcblxuZnVuY3Rpb24gcmVuZGVyTW9kYWwoKSB7XG4gIGNvbnN0IHRvZG9zQ29udGFpbmVyID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJ0b2Rvcy1jb250YWluZXJcIik7XG4gIGNvbnN0IG1vZGFsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGlhbG9nJyk7XG4gIG1vZGFsLmlkID0gXCJtb2RhbFwiO1xuXG4gIHRvZG9zQ29udGFpbmVyLmFwcGVuZENoaWxkKG1vZGFsKTtcbn1cblxuLy8gSGFuZGxlIGJ1dHRvbnMgb3V0c2lkZSBtb2RhbC5cbmZ1bmN0aW9uIG1vZGFsTGlzdGVuZXJzKCkge1xuICBjb25zdCBtb2RhbCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwibW9kYWxcIik7XG4gIGxldCBlZGl0QnV0dG9ucyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoXCIuZWRpdC1idG5cIik7XG5cbiAgZWRpdEJ1dHRvbnMuZm9yRWFjaCgoZWRpdEJ1dHRvbikgPT4ge1xuICAgIGVkaXRCdXR0b24ub25jbGljayA9ICgpID0+IHtcbiAgICAgIG1vZGFsLnNob3dNb2RhbCgpO1xuICAgICAgdXBkYXRlTW9kYWwoZWRpdEJ1dHRvbi5wYXJlbnRFbGVtZW50LmlkKTtcbiAgICB9XG4gIH0pXG59XG5cbi8vIEFkZCB0b2RvIGRhdGEgdG8gbW9kYWwuXG5mdW5jdGlvbiB1cGRhdGVNb2RhbChrZXkpIHtcbiAgY29uc3QgbW9kYWwgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcIm1vZGFsXCIpO1xuXG4gIC8vIGNsZWFyIGFueSBleGlzdGluZyBkYXRhLlxuICBpZiAobW9kYWwuY2hpbGRyZW4ubGVuZ3RoID4gMCkge1xuICAgIHdoaWxlIChtb2RhbC5maXJzdENoaWxkKSB7XG4gICAgICBtb2RhbC5yZW1vdmVDaGlsZChtb2RhbC5maXJzdENoaWxkKTtcbiAgICB9XG4gIH1cblxuICAvLyBhZGQgYSB0aXRsZSBhbmQgY2xvc2UgYnV0dG9uLlxuICBjb25zdCBoZWFkZXJEaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICBjb25zdCBtb2RhbFRpdGxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImgzXCIpO1xuICBoZWFkZXJEaXYuaWQgPSBcIm1vZGFsLWhlYWRlclwiO1xuICBtb2RhbFRpdGxlLnRleHRDb250ZW50ID0gXCJWaWV3IC8gRWRpdCBUby1kb1wiO1xuXG4gIGNvbnN0IGNsb3NlTW9kYWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiYnV0dG9uXCIpO1xuICBjbG9zZU1vZGFsLmlubmVySFRNTCA9IFwiJnRpbWVzXCI7XG4gIGNsb3NlTW9kYWwuaWQgPSBcImNsb3NlTW9kYWxcIjtcblxuICBoZWFkZXJEaXYuYXBwZW5kKG1vZGFsVGl0bGUsIGNsb3NlTW9kYWwpO1xuICBtb2RhbC5hcHBlbmRDaGlsZChoZWFkZXJEaXYpO1xuXG4gIC8vIEFkZCBsaXN0ZW5lciB0byBjbG9zZSBidXR0b24uXG4gIGNsb3NlTW9kYWwub25jbGljayA9ICgpID0+IHtcbiAgICBtb2RhbC5jbG9zZSgpXG4gIH07XG5cbiAgLy8gUHVsbCB0b2RvIGluZm8gYW5kIHByZWZpbGwgZm9ybSB3aXRoIGRhdGEuXG4gIGxldCB0b2RvSXRlbSA9IEpTT04ucGFyc2Uod2luZG93LmxvY2FsU3RvcmFnZS5nZXRJdGVtKGtleSkpO1xuICBjb25zdCB0b2RvRGF0YSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJmb3JtXCIpO1xuXG4gIHRvZG9EYXRhLmFkZEV2ZW50TGlzdGVuZXIoXCJzdWJtaXRcIiwgZnVuY3Rpb24gKF9ldmVudCkge1xuXG4gICAgdG9kb0l0ZW0udGl0bGUgPSB0b2RvRGF0YS5lbGVtZW50cy50aXRsZS52YWx1ZTtcbiAgICB0b2RvSXRlbS5kdWVEYXRlID0gdG9kb0RhdGEuZWxlbWVudHMuZHVlRGF0ZS52YWx1ZTtcbiAgICB0b2RvSXRlbS5wcmlvcml0eSA9IHRvZG9EYXRhLmVsZW1lbnRzLnByaW9yaXR5LnZhbHVlO1xuICAgIHRvZG9JdGVtLm5vdGVzID0gdG9kb0RhdGEuZWxlbWVudHMubm90ZXMudmFsdWU7XG4gICAgdG9kb0l0ZW0ubGlzdCA9IHRvZG9EYXRhLmVsZW1lbnRzLmxpc3QudmFsdWU7XG5cbiAgICB3aW5kb3cubG9jYWxTdG9yYWdlLnNldEl0ZW0oa2V5LCBKU09OLnN0cmluZ2lmeSh0b2RvSXRlbSkpO1xuICB9KTtcblxuICAgIHRvZG9EYXRhLmlubmVySFRNTCA9IGBcbiAgICAgIDxsYWJlbCBmb3I9XCJ0aXRsZVwiPlRpdGxlOjwvbGFiZWw+XG4gICAgICA8aW5wdXQgdHlwZT1cInRleHRcIiBpZD1cInRpdGxlXCIgbmFtZT1cInRpdGxlXCIgdmFsdWU9XCIke3RvZG9JdGVtLnRpdGxlfVwiIHJlcXVpcmVkPjxicj5cblxuICAgICAgPGxhYmVsIGZvcj1cImR1ZS1kYXRlXCI+RHVlIERhdGU6PC9sYWJlbD5cbiAgICAgIDxpbnB1dCB0eXBlPVwiZGF0ZVwiIGlkPVwiZHVlLWRhdGVcIiBuYW1lPVwiZHVlRGF0ZVwiIHZhbHVlPSR7dG9kb0l0ZW0uZHVlRGF0ZX0+PGJyPlxuXG4gICAgICA8bGFiZWwgZm9yPVwicHJpb3JpdHlcIj5Qcmlvcml0eTo8L2xhYmVsPlxuICAgICAgPGlucHV0IGxpc3Q9XCJtb2RhbC1wcmlvcml0eS1zZWxlY3Rpb25zXCIgbmFtZT1cInByaW9yaXR5XCIgdmFsdWU9JHt0b2RvSXRlbS5wcmlvcml0eX0+XG4gICAgICA8ZGF0YWxpc3QgaWQ9XCJtb2RhbC1wcmlvcml0eS1zZWxlY3Rpb25zXCI+XG4gICAgICAgICAgPG9wdGlvbiB2YWx1ZT1cIkhpZ2hcIj5IaWdoPC9vcHRpb24+XG4gICAgICAgICAgPG9wdGlvbiB2YWx1ZT1cIk1lZGl1bVwiPk1lZGl1bTwvb3B0aW9uPlxuICAgICAgICAgIDxvcHRpb24gdmFsdWU9XCJMb3dcIj5Mb3c8L29wdGlvbj5cbiAgICAgIDwvZGF0YWxpc3Q+PGJyPlxuXG4gICAgICA8bGFiZWwgZm9yPVwibm90ZXNcIj5Ob3Rlczo8L2xhYmVsPlxuICAgICAgPHRleHRhcmVhIGlkPVwibm90ZXNcIiBuYW1lPVwibm90ZXNcIj4ke3RvZG9JdGVtLm5vdGVzfTwvdGV4dGFyZWE+PGJyPlxuXG4gICAgICA8bGFiZWwgZm9yPVwibGlzdFwiPkxpc3Q6PC9sYWJlbD5cbiAgICAgIDxpbnB1dCBsaXN0PVwibW9kYWwtbGlzdC1zZWxlY3Rpb25zXCIgaWQ9XCJsaXN0XCIgbmFtZT1cImxpc3RcIiB2YWx1ZT0ke3RvZG9JdGVtLmxpc3R9PlxuICAgICAgPGRhdGFsaXN0IGlkPVwibW9kYWwtbGlzdC1zZWxlY3Rpb25zXCI+PC9kYXRhbGlzdD48YnI+XG5cbiAgICAgIDxpbnB1dCB0eXBlPVwic3VibWl0XCIgdmFsdWU9XCJFZGl0IFRvZG9cIiBpZD1cInN1Ym1pdFwiIGNsYXNzPVwiYnV0dG9uXCI+XG4gICAgYDtcblxuICBtb2RhbC5hcHBlbmRDaGlsZCh0b2RvRGF0YSk7XG4gIGxpc3RPcHRpb25zKFwiZWRpdFwiKTtcbn1cbiIsImltcG9ydCB7IGRlbGV0ZUxpc3RlbmVycyB9IGZyb20gXCIuL2RlbGV0ZVRvZG9cIjtcbmltcG9ydCB7IG1vZGFsTGlzdGVuZXJzIH0gZnJvbSBcIi4vbW9kYWxcIjtcbmltcG9ydCBjaGVja2JveExpc3RlbmVycyBmcm9tIFwiLi9jaGVja0JveFwiO1xuXG5leHBvcnQgeyByZW5kZXJUb2RvIH07XG5cbi8vIENoZWNrIGlmIGNvbnRlbnQgZGl2cyBleGlzdHMsIGlmIG5vdCBjcmVhdGUgdGhlbS5cbmZ1bmN0aW9uIGVzdGFibGlzaENvbnRhaW5lcnMoKSB7XG4gIGxldCB0b2Rvc0NvbnRhaW5lciA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwidG9kb3MtY29udGFpbmVyXCIpO1xuICBsZXQgbGlzdENvbnRhaW5lciA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwibGlzdC1jb250YWluZXJcIik7XG5cbiAgaWYgKCF0b2Rvc0NvbnRhaW5lcikge1xuICAgIHRvZG9zQ29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICB0b2Rvc0NvbnRhaW5lci5pZCA9IFwidG9kb3MtY29udGFpbmVyXCI7XG4gIH1cblxuICBpZiAoIWxpc3RDb250YWluZXIpIHtcbiAgICBsaXN0Q29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICBsaXN0Q29udGFpbmVyLmlkID0gXCJsaXN0LWNvbnRhaW5lclwiO1xuICB9XG5cbiAgcmV0dXJuIFt0b2Rvc0NvbnRhaW5lciwgbGlzdENvbnRhaW5lcl07XG59XG5cbmZ1bmN0aW9uIHJlbmRlclRvZG8oaSA9IDApIHtcbiAgY29uc3QgYm9keSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCJib2R5XCIpO1xuICBjb25zdCBzaWRlYmFyQ29udGFpbmVyID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJzaWRlYmFyXCIpO1xuICBjb25zdCBbdG9kb3NDb250YWluZXIsIGxpc3RDb250YWluZXJdID0gZXN0YWJsaXNoQ29udGFpbmVycygpO1xuXG4gIGZvciAoaTsgaSA8IHdpbmRvdy5sb2NhbFN0b3JhZ2UubGVuZ3RoOyBpKyspIHtcbiAgICBsZXQgdG9kb0l0ZW0gPSBKU09OLnBhcnNlKHdpbmRvdy5sb2NhbFN0b3JhZ2UuZ2V0SXRlbShpLnRvU3RyaW5nKCkpKTtcblxuICAgIC8vIENoZWNrIGZvciBudWxsIGl0ZW0gaWYgbG9jYWxTdG9yYWdlIGNvbnRhaW5zIG5vbi10b2RvIGl0ZW1zLCBza2lwIGRlbGV0ZWQuXG4gICAgaWYgKHRvZG9JdGVtID09PSBudWxsIHx8IHRvZG9JdGVtLmRlbGV0ZWQgPT09IFwiZGVsZXRlZFwiKSB7XG4gICAgICBjb250aW51ZTtcbiAgICB9XG5cbiAgICBsZXQgbmV3VG9kbyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgbmV3VG9kby5jbGFzc0xpc3QuYWRkKFwidG9kby1pdGVtXCIpO1xuICAgIC8vIEF0dGFjaCB0aGUgdG9kbyBpdGVtJ3Mga2V5IGZvciBsb29rdXBzLlxuICAgIG5ld1RvZG8uaWQgPSBpO1xuXG4gICAgLy8gQ3JlYXRlIGNoZWNrYm94IGFuZCBlbnN1cmUgaXQgaXMgbWFya2VkIGlmIHRoZSB0b2RvIGlzIGNvbXBsZXRlZC5cbiAgICBsZXQgY2hlY2tCb3ggPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaW5wdXRcIik7XG4gICAgY2hlY2tCb3gudHlwZSA9IFwiY2hlY2tib3hcIjtcbiAgICBjaGVja0JveC5jbGFzc0xpc3QuYWRkKFwiY2hlY2tib3hcIik7XG4gICAgaWYgKHRvZG9JdGVtLmNvbXBsZXRlZCkge1xuICAgICAgY2hlY2tCb3guY2hlY2tlZCA9IHRydWU7XG4gICAgICBuZXdUb2RvLmNsYXNzTGlzdC5hZGQoXCJ0b2RvLWNvbXBsZXRlXCIpO1xuICAgIH1cblxuICAgIC8vIEFkZCB0b2RvIGluZm8gdG8gcGFnZS5cbiAgICBjb25zdCB0aXRsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJwXCIpO1xuICAgIGNvbnN0IGR1ZURhdGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwicFwiKTtcbiAgICBjb25zdCBwcmlvcml0eSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJwXCIpO1xuXG4gICAgdGl0bGUudGV4dENvbnRlbnQgPSB0b2RvSXRlbS50aXRsZTtcbiAgICBkdWVEYXRlLnRleHRDb250ZW50ID0gdG9kb0l0ZW0uZHVlRGF0ZTtcbiAgICBwcmlvcml0eS50ZXh0Q29udGVudCA9IHRvZG9JdGVtLnByaW9yaXR5O1xuXG4gICAgLy8gQWRkIGNsYXNzIGZvciBwcmlvcml0eS5cbiAgICBwcmlvcml0eS5jbGFzc0xpc3QuYWRkKGBwcmlvcml0eS0ke3RvZG9JdGVtLnByaW9yaXR5LnRvTG93ZXJDYXNlKCl9YCk7XG5cbiAgICAvLyBDcmVhdGUgdmlldyAvIGVkaXQgYnV0dG9uLlxuICAgIGxldCBlZGl0QnV0dG9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImJ1dHRvblwiKTtcbiAgICBlZGl0QnV0dG9uLmNsYXNzTGlzdC5hZGQoXCJlZGl0LWJ0blwiKTtcbiAgICBlZGl0QnV0dG9uLmlubmVySFRNTCA9ICc8aW1nIHNyYz1cIi4vYXNzZXRzL2VkaXQtaWNvbi5wbmdcIiBjbGFzcz1cImVkaXQtYnRuXCIvPic7XG5cbiAgICAvLyBDcmVhdGUgZGVsZXRlIGJ1dHRvbi5cbiAgICBsZXQgZGVsZXRlQnV0dG9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImJ1dHRvblwiKTtcbiAgICBkZWxldGVCdXR0b24uY2xhc3NMaXN0LmFkZChcImRlbGV0ZS1idG5cIik7XG4gICAgZGVsZXRlQnV0dG9uLmlubmVySFRNTCA9ICc8aW1nIHNyYz1cIi4vYXNzZXRzL2RlbGV0ZS1pY29uLnBuZ1wiIGNsYXNzPVwiZGVsZXRlLWJ0blwiLz4nO1xuXG4gICAgbmV3VG9kby5hcHBlbmQoY2hlY2tCb3gsIHRpdGxlLCBkdWVEYXRlLCBwcmlvcml0eSwgZWRpdEJ1dHRvbiwgZGVsZXRlQnV0dG9uKTtcbiAgICB0b2Rvc0NvbnRhaW5lci5hcHBlbmRDaGlsZChuZXdUb2RvKTtcbiAgfVxuICBib2R5LmFwcGVuZENoaWxkKHRvZG9zQ29udGFpbmVyKTtcbiAgcmVuZGVyTGlzdHMobGlzdENvbnRhaW5lciwgc2lkZWJhckNvbnRhaW5lcik7XG5cbiAgLy8gRW5zdXJlIG9uY2xpY2sgbGlzdGVuZXJzIGFyZSBhZGRlZCB0byBlZGl0ICYgZGVsZXRlIGJ1dHRvbnMuXG4gIGRlbGV0ZUxpc3RlbmVycygpO1xuICBtb2RhbExpc3RlbmVycygpO1xuICBjaGVja2JveExpc3RlbmVycygpO1xufVxuXG5mdW5jdGlvbiByZW5kZXJMaXN0cyhsaXN0Q29udGFpbmVyLCBzaWRlYmFyQ29udGFpbmVyKSB7XG4gIC8vIFJlbW92ZSBjaGlsZHJlbiBmcm9tIHRoZSBsaXN0IGNvbnRhaW5lciBpZiB0aGV5IGV4aXN0LlxuICBpZiAobGlzdENvbnRhaW5lci5jaGlsZHJlbi5sZW5ndGggPiAwKSB7XG4gICAgd2hpbGUgKGxpc3RDb250YWluZXIuZmlyc3RDaGlsZCkge1xuICAgICAgbGlzdENvbnRhaW5lci5yZW1vdmVDaGlsZChsaXN0Q29udGFpbmVyLmZpcnN0Q2hpbGQpO1xuICAgIH1cbiAgfVxuXG4gIC8vIFNldCB0aXRsZS5cbiAgbGV0IGxpc3RUaXRsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJoMlwiKTtcbiAgbGlzdFRpdGxlLnRleHRDb250ZW50ID0gXCJMaXN0c1wiO1xuICBsaXN0Q29udGFpbmVyLmFwcGVuZENoaWxkKGxpc3RUaXRsZSk7XG5cbiAgLy8gQ3JlYXRlIGhpZGUgY29tcGxldGVkIGJ1dHRvbi5cbiAgbGV0IGhpZGVDb21wbGV0ZWRCdXR0b24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiYnV0dG9uXCIpO1xuICBoaWRlQ29tcGxldGVkQnV0dG9uLmlkID0gXCJoaWRlQ29tcGxldGVkXCI7XG4gIGhpZGVDb21wbGV0ZWRCdXR0b24uY2xhc3NMaXN0LmFkZChcImJ1dHRvblwiLCBcImlzLXByaW1hcnlcIik7XG4gIGhpZGVDb21wbGV0ZWRCdXR0b24udGV4dENvbnRlbnQgPSBcIkhpZGUgQ29tcGxldGVkXCI7XG5cbiAgLy8gQ3JlYXRlIGEgaGlkZGVuIGJ1dHRvbiB0byBzaG93IGFsbCB0b2RvcyBpZiBmaWx0ZXJpbmcgYnkgbGlzdC5cbiAgY29uc3Qgc2hvd0FsbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJidXR0b25cIik7XG4gIHNob3dBbGwudGV4dENvbnRlbnQgPSBcIlNob3cgQWxsXCI7XG4gIHNob3dBbGwuaWQgPSBcInNob3dBbGxcIjtcbiAgc2hvd0FsbC5jbGFzc0xpc3QuYWRkKFwibGlzdFwiLCBcImJ1dHRvblwiLCBcImlzLXByaW1hcnlcIik7XG4gIHNob3dBbGwuc3R5bGUuZGlzcGxheSA9IFwibm9uZVwiO1xuXG4gIC8vIENvbGxlY3QgbGlzdHMgZnJvbSBhbGwgdG9kbyBpdGVtcyBpbiBsb2NhbCBzdG9yYWdlLlxuICBsZXQgbGlzdHMgPSBbXTtcbiAgZm9yIChsZXQgaSA9IDA7IGkgPCB3aW5kb3cubG9jYWxTdG9yYWdlLmxlbmd0aDsgaSsrKSB7XG4gICAgbGV0IHRvZG9JdGVtID0gSlNPTi5wYXJzZSh3aW5kb3cubG9jYWxTdG9yYWdlLmdldEl0ZW0oaS50b1N0cmluZygpKSk7XG4gICAgLy8gQ2hlY2sgZm9yIG51bGwgaXRlbSBpZiBsb2NhbFN0b3JhZ2UgY29udGFpbnMgbm9uLXRvZG8gaXRlbXMuXG4gICAgaWYgKHRvZG9JdGVtID09PSBudWxsKSB7XG4gICAgICBjb250aW51ZTtcbiAgICB9XG4gICAgbGlzdHMucHVzaCh0b2RvSXRlbS5saXN0KTtcbiAgfVxuXG4gIC8vIENvbGxlY3QgbGlzdHMgZnJvbSBmb3JtIG9wdGlvbnMuXG4gIGNvbnN0IGxpc3RPcHRpb25zID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChcIi5saXN0LW9wdGlvbnNcIik7XG4gIGxpc3RPcHRpb25zLmZvckVhY2goKG9wdGlvbikgPT4ge1xuICAgIGxpc3RzLnB1c2gob3B0aW9uLnRleHRDb250ZW50KTtcbiAgfSlcblxuICAvLyBSZW1vdmUgZHVwbGljYXRlcyAmIGVtcHR5IHN0cmluZ3MuXG4gIGxldCBjbGVhbmVkTGlzdHMgPSBbLi4ubmV3IFNldChsaXN0cy5maWx0ZXIobGlzdCA9PiBsaXN0KSldO1xuXG4gIC8vIEFkZCBjbGVhbmVkIHVwIGxpc3RzIHRvIHBhZ2UuXG4gIGNsZWFuZWRMaXN0cy5mb3JFYWNoKChsaXN0KSA9PiB7XG4gICAgY29uc3QgbGlzdEVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiYVwiKTtcbiAgICBsaXN0RWxlbWVudC5jbGFzc0xpc3QuYWRkKFwibGlzdFwiKTtcbiAgICBsaXN0RWxlbWVudC50ZXh0Q29udGVudCA9IGxpc3Q7XG4gICAgbGlzdENvbnRhaW5lci5hcHBlbmRDaGlsZChsaXN0RWxlbWVudCk7XG4gIH0pO1xuICBsaXN0Q29udGFpbmVyLmFwcGVuZChzaG93QWxsLCBoaWRlQ29tcGxldGVkQnV0dG9uKTtcbiAgc2lkZWJhckNvbnRhaW5lci5hcHBlbmRDaGlsZChsaXN0Q29udGFpbmVyKTtcbn1cbiIsImV4cG9ydCB7IGZpbHRlckxpc3RlbmVycyB9O1xuXG5mdW5jdGlvbiBmaWx0ZXJUb2RvcyhmaWx0ZXIpIHtcbiAgLy8gUmV2ZWFsICdTaG93IEFsbCcgYnV0dG9uLlxuICBjb25zdCBzaG93QWxsID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3Nob3dBbGwnKTtcbiAgc2hvd0FsbC5zdHlsZS5kaXNwbGF5ID0gXCJcIjtcblxuICAvLyBGaWx0ZXIgdG9kb3MgYnkgbGlzdC5cbiAgZm9yIChsZXQgaSA9IDA7IGkgPCB3aW5kb3cubG9jYWxTdG9yYWdlLmxlbmd0aDsgaSsrKSB7XG4gICAgbGV0IHRvZG9JdGVtID0gSlNPTi5wYXJzZSh3aW5kb3cubG9jYWxTdG9yYWdlLmdldEl0ZW0oaS50b1N0cmluZygpKSk7XG4gICAgLy8gTnVsbCBjaGVja2luZ1xuICAgIGlmICh0b2RvSXRlbSA9PT0gbnVsbCkge1xuICAgICAgY29udGludWU7XG4gICAgfVxuXG4gICAgLy8gZmluZCB0aGUgZGl2IGNvbnRhaW5pbmcgdGhpcyB0b2RvIGl0ZW0uXG4gICAgbGV0IHRvZG9EaXYgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChpKTtcblxuICAgIC8vIGlnbm9yZSBkZWxldGVkIHRvZG8gaXRlbXMuXG4gICAgaWYgKHRvZG9JdGVtLmRlbGV0ZWQgPT09IFwiZGVsZXRlZFwiKSB7XG4gICAgICBjb250aW51ZTtcbiAgICAvLyBpZiAnc2hvdyBhbGwnIGlzIGNsaWNrZWQsIHJlbW92ZSBhbnkgaGlkZGVuIGF0dHJpYnV0ZXMgYW5kIG1vdmUgdG8gbmV4dC5cbiAgICB9IGVsc2UgaWYgKGZpbHRlciA9PT0gXCJTaG93IEFsbFwiKSB7XG4gICAgICB0b2RvRGl2LnN0eWxlLmRpc3BsYXkgPSBcIlwiO1xuICAgICAgLy8gcmVoaWRlIHNob3cgYWxsIGJ1dHRvbi5cbiAgICAgIHNob3dBbGwuc3R5bGUuZGlzcGxheSA9IFwibm9uZVwiO1xuICAgICAgY29udGludWU7XG4gICAgLy8gaGlkZSBjb21wbGV0ZWQgaXRlbXNcbiAgICB9IGVsc2UgaWYgKGZpbHRlciA9PT0gXCJIaWRlIENvbXBsZXRlZFwiKSB7XG4gICAgICBpZiAodG9kb0l0ZW0uY29tcGxldGVkID09PSB0cnVlKSB7XG4gICAgICAgIHRvZG9EaXYuc3R5bGUuZGlzcGxheSA9IFwibm9uZVwiO1xuICAgICAgfVxuICAgIC8vIGhpZGUgdGhlIGl0ZW0gaWYgbGlzdCBkb2Vzbid0IG1hdGNoLlxuICAgIH0gZWxzZSBpZiAodG9kb0l0ZW0ubGlzdCAhPT0gZmlsdGVyKSB7XG4gICAgICB0b2RvRGl2LnN0eWxlLmRpc3BsYXkgPSBcIm5vbmVcIjtcbiAgICAvLyBzaG93IGl0ZW0gaWYgbGlzdCBtYXRjaGVzLlxuICAgIH0gZWxzZSB7XG4gICAgICB0b2RvRGl2LnN0eWxlLmRpc3BsYXkgPSBcIlwiO1xuICAgIH1cbiAgfVxufVxuXG5mdW5jdGlvbiBmaWx0ZXJMaXN0ZW5lcnMoKSB7XG4gIC8vIExpc3RlbiBmb3IgbGlzdCBmaWx0ZXJzLlxuICBsZXQgbGlzdExpbmtzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChcIi5saXN0XCIpO1xuXG4gIGxpc3RMaW5rcy5mb3JFYWNoKChsaXN0KSA9PiB7XG4gICAgbGlzdC5vbmNsaWNrID0gKCkgPT4ge1xuICAgICAgZmlsdGVyVG9kb3MobGlzdC50ZXh0Q29udGVudCk7XG4gICAgfVxuICB9KVxuXG4gIC8vIExpc3RlbiBmb3IgY29tcGxldGVkIGZpbHRlcnMuXG4gIGxldCBjb21wbGV0ZWRCdXR0b24gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImhpZGVDb21wbGV0ZWRcIilcbiAgY29tcGxldGVkQnV0dG9uLm9uY2xpY2sgPSAoKSA9PiB7XG4gICAgZmlsdGVyVG9kb3MoY29tcGxldGVkQnV0dG9uLnRleHRDb250ZW50KTtcbiAgfVxufVxuIiwiZXhwb3J0IHsgcmVuZGVyVG9kb0Zvcm0sIGxpc3RPcHRpb25zIH07XG5pbXBvcnQgeyByZW5kZXJUb2RvIH0gZnJvbSBcIi4vdG9kb0Rpc3BsYXkuanNcIjtcblxuY2xhc3MgdG9kbyB7XG4gIGNvbnN0cnVjdG9yKHRpdGxlLCBkdWVEYXRlLCBwcmlvcml0eSwgbm90ZXMsIGxpc3QgPSBcImRlZmF1bHRcIikge1xuICAgIHRoaXMudGl0bGUgPSB0aXRsZTtcbiAgICB0aGlzLmR1ZURhdGUgPSBkdWVEYXRlO1xuICAgIHRoaXMucHJpb3JpdHkgPSBwcmlvcml0eTtcbiAgICB0aGlzLm5vdGVzID0gbm90ZXM7XG4gICAgdGhpcy5saXN0ID0gbGlzdDtcbiAgICB0aGlzLmNvbXBsZXRlZCA9IGZhbHNlO1xuICB9XG59XG5cbmZ1bmN0aW9uIHJlbmRlclRvZG9Gb3JtKCkge1xuICBjb25zdCBib2R5ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcImJvZHlcIik7XG5cbiAgY29uc3Qgc2lkZWJhckNvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gIHNpZGViYXJDb250YWluZXIuaWQgPSBcInNpZGViYXJcIjtcblxuICBjb25zdCBmb3JtID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImZvcm1cIik7XG4gIGZvcm0uYWRkRXZlbnRMaXN0ZW5lcihcInN1Ym1pdFwiLCBmdW5jdGlvbiAoZXZlbnQpIHtcbiAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuXG4gICAgY29uc3QgdGl0bGUgPSBmb3JtLmVsZW1lbnRzLnRpdGxlLnZhbHVlO1xuICAgIGNvbnN0IGR1ZURhdGUgPSBmb3JtLmVsZW1lbnRzLmR1ZURhdGUudmFsdWU7XG4gICAgY29uc3QgcHJpb3JpdHkgPSBmb3JtLmVsZW1lbnRzLnByaW9yaXR5LnZhbHVlO1xuICAgIGNvbnN0IG5vdGVzID0gZm9ybS5lbGVtZW50cy5ub3Rlcy52YWx1ZTtcbiAgICBjb25zdCBsaXN0ID0gZm9ybS5lbGVtZW50cy5saXN0LnZhbHVlO1xuXG4gICAgY29uc3QgbmV3VG9kbyA9IG5ldyB0b2RvKHRpdGxlLCBkdWVEYXRlLCBwcmlvcml0eSwgbm90ZXMsIGxpc3QpO1xuXG4gICAgLy8gUmVzZXQgdGhlIGZvcm0gYWZ0ZXIgc3VibWlzc2lvblxuICAgIGZvcm0ucmVzZXQoKTtcblxuICAgIC8vIFNlbmQgdG9kbyBvYmplY3QgdG8gbG9jYWxzdG9yYWdlLlxuICAgIHNlbmRUb1N0b3JhZ2UoSlNPTi5zdHJpbmdpZnkobmV3VG9kbykpO1xuXG4gICAgLy8gUmVuZGVyIG9ubHkgdGhlIG5ld2x5IGNyZWF0ZWQgdG9kby5cbiAgICByZW5kZXJUb2RvKHdpbmRvdy5sb2NhbFN0b3JhZ2UubGVuZ3RoIC0gMSk7XG5cbiAgfSk7XG5cbiAgZm9ybS5pbm5lckhUTUwgPSBgXG4gICAgICA8bGFiZWwgZm9yPVwidGl0bGVcIj5UaXRsZTo8L2xhYmVsPlxuICAgICAgPGlucHV0IHR5cGU9XCJ0ZXh0XCIgaWQ9XCJ0aXRsZVwiIG5hbWU9XCJ0aXRsZVwiIHJlcXVpcmVkPjxicj5cblxuICAgICAgPGxhYmVsIGZvcj1cImR1ZS1kYXRlXCI+RHVlIERhdGU6PC9sYWJlbD5cbiAgICAgIDxpbnB1dCB0eXBlPVwiZGF0ZVwiIGlkPVwiZHVlLWRhdGVcIiBuYW1lPVwiZHVlRGF0ZVwiPjxicj5cblxuICAgICAgPGxhYmVsIGZvcj1cInByaW9yaXR5XCI+UHJpb3JpdHk6PC9sYWJlbD5cbiAgICAgIDxzZWxlY3QgaWQ9XCJwcmlvcml0eVwiIG5hbWU9XCJwcmlvcml0eVwiPlxuICAgICAgICAgIDxvcHRpb24gdmFsdWU9XCJIaWdoXCI+SGlnaDwvb3B0aW9uPlxuICAgICAgICAgIDxvcHRpb24gdmFsdWU9XCJNZWRpdW1cIiBzZWxlY3RlZD5NZWRpdW08L29wdGlvbj5cbiAgICAgICAgICA8b3B0aW9uIHZhbHVlPVwiTG93XCI+TG93PC9vcHRpb24+XG4gICAgICA8L3NlbGVjdD48YnI+XG5cbiAgICAgIDxsYWJlbCBmb3I9XCJub3Rlc1wiPk5vdGVzOjwvbGFiZWw+XG4gICAgICA8dGV4dGFyZWEgaWQ9XCJub3Rlc1wiIG5hbWU9XCJub3Rlc1wiPjwvdGV4dGFyZWE+PGJyPlxuXG4gICAgICA8bGFiZWwgZm9yPVwibGlzdFwiPkxpc3Q6PC9sYWJlbD5cbiAgICAgIDxpbnB1dCBsaXN0PVwibGlzdC1zZWxlY3Rpb25zXCIgaWQ9XCJsaXN0XCIgbmFtZT1cImxpc3RcIi8+XG4gICAgICA8ZGF0YWxpc3QgaWQ9XCJsaXN0LXNlbGVjdGlvbnNcIj48L2RhdGFsaXN0Pjxicj5cblxuICAgICAgPGxhYmVsIGZvcj1cInN1Ym1pdFwiPjwvbGFiZWw+XG4gICAgICA8aW5wdXQgdHlwZT1cInN1Ym1pdFwiIHZhbHVlPVwiQ3JlYXRlIFRvZG9cIiBpZD1cInN1Ym1pdFwiIGNsYXNzPVwiYnV0dG9uXCI+XG4gIGA7XG5cbiAgc2lkZWJhckNvbnRhaW5lci5hcHBlbmRDaGlsZChmb3JtKTtcbiAgYm9keS5hcHBlbmRDaGlsZChzaWRlYmFyQ29udGFpbmVyKTtcbn1cblxuZnVuY3Rpb24gc2VuZFRvU3RvcmFnZSh0b2RvSXRlbSkge1xuICB3aW5kb3cubG9jYWxTdG9yYWdlLnNldEl0ZW0od2luZG93LmxvY2FsU3RvcmFnZS5sZW5ndGgsIHRvZG9JdGVtKTtcbn07XG5cbmZ1bmN0aW9uIGxpc3RPcHRpb25zKGVkaXQ9ZmFsc2UpIHtcbiAgY29uc3QgbGlzdFNlbGVjdG9yID0gZWRpdCA9PT0gXCJlZGl0XCIgPyBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcIm1vZGFsLWxpc3Qtc2VsZWN0aW9uc1wiKSA6IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwibGlzdC1zZWxlY3Rpb25zXCIpO1xuXG4gIC8vIENvbGxlY3QgbGlzdHMgZnJvbSBhbGwgdG9kbyBpdGVtcyBpbiBsb2NhbCBzdG9yYWdlLlxuICBsZXQgbGlzdHMgPSBbXTtcbiAgZm9yIChsZXQgaSA9IDA7IGkgPCB3aW5kb3cubG9jYWxTdG9yYWdlLmxlbmd0aDsgaSsrKSB7XG4gICAgbGV0IHRvZG9JdGVtID0gSlNPTi5wYXJzZSh3aW5kb3cubG9jYWxTdG9yYWdlLmdldEl0ZW0oaS50b1N0cmluZygpKSk7XG4gICAgLy8gTnVsbCBjaGVja2luZ1xuICAgIGlmICh0b2RvSXRlbSA9PT0gbnVsbCkge1xuICAgICAgY29udGludWU7XG4gICAgfVxuICAgIGxpc3RzLnB1c2godG9kb0l0ZW0ubGlzdCk7XG4gIH1cblxuICAvLyBSZW1vdmUgZHVwbGljYXRlcyAmIGVtcHR5IHN0cmluZ3MuXG4gIGxldCBjbGVhbmVkTGlzdHMgPSBbLi4ubmV3IFNldChsaXN0cy5maWx0ZXIobGlzdCA9PiBsaXN0KSldO1xuXG4gIC8vIFJlbW92ZSBhbnkgZXhpc3RpbmcgY2hpbGRyZW4gdG8gcHJldmVudCBkdXBsaWNhdGVzLlxuICBpZiAobGlzdFNlbGVjdG9yLmNoaWxkcmVuLmxlbmd0aCA+IDApIHtcbiAgICB3aGlsZSAobGlzdFNlbGVjdG9yLmZpcnN0Q2hpbGQpIHtcbiAgICAgIGxpc3RTZWxlY3Rvci5yZW1vdmVDaGlsZChsaXN0U2VsZWN0b3IuZmlyc3RDaGlsZCk7XG4gICAgfVxuICB9XG5cbiAgLy8gQWRkIG9wdGlvbnMgdG8gbGlzdCBzZWxlY3Rvciwgc2V0IHRvICdkZWZhdWx0JyBpZiBubyBsaXN0cyBjcmVhdGVkIHlldC5cbiAgaWYgKGNsZWFuZWRMaXN0cy5sZW5ndGggPT09IDApIHtcbiAgICBsZXQgb3B0aW9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcIm9wdGlvblwiKTtcbiAgICAvLyBvcHRpb24udGV4dENvbnRlbnQgPSBcIkRlZmF1bHRcIjtcbiAgICBvcHRpb24udmFsdWUgPSBcIkRlZmF1bHRcIjtcbiAgICBvcHRpb24uY2xhc3NMaXN0LmFkZChcImxpc3Qtb3B0aW9uc1wiKTtcbiAgICBsaXN0U2VsZWN0b3IuYXBwZW5kQ2hpbGQob3B0aW9uKTtcbiAgfSBlbHNlIHtcbiAgICBjbGVhbmVkTGlzdHMuZm9yRWFjaChsaXN0ID0+IHtcbiAgICAgIGxldCBvcHRpb24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwib3B0aW9uXCIpO1xuICAgICAgb3B0aW9uLnRleHRDb250ZW50ID0gbGlzdDtcbiAgICAgIG9wdGlvbi52YWx1ZSA9IGxpc3Q7XG4gICAgICBvcHRpb24uY2xhc3NMaXN0LmFkZChcImxpc3Qtb3B0aW9uc1wiKTtcbiAgICAgIGxpc3RTZWxlY3Rvci5hcHBlbmRDaGlsZChvcHRpb24pO1xuICAgIH0pXG4gIH1cbn1cbiIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0aWQ6IG1vZHVsZUlkLFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4iLCIvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuX193ZWJwYWNrX3JlcXVpcmVfXy5uID0gKG1vZHVsZSkgPT4ge1xuXHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cblx0XHQoKSA9PiAobW9kdWxlWydkZWZhdWx0J10pIDpcblx0XHQoKSA9PiAobW9kdWxlKTtcblx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgeyBhOiBnZXR0ZXIgfSk7XG5cdHJldHVybiBnZXR0ZXI7XG59OyIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm5jID0gdW5kZWZpbmVkOyIsImltcG9ydCB7cmVuZGVyVG9kb30gZnJvbSBcIi4vdG9kb0Rpc3BsYXkuanNcIjtcbmltcG9ydCB7cmVuZGVyVG9kb0Zvcm0sIGxpc3RPcHRpb25zIH0gZnJvbSBcIi4vdG9kb0Zvcm0uanNcIjtcbmltcG9ydCBjc3MgZnJvbSBcIi4uL2Rpc3QvYXNzZXRzL3N0eWxlLmNzc1wiO1xuaW1wb3J0IHsgZmlsdGVyTGlzdGVuZXJzIH0gZnJvbSBcIi4vdG9kb0ZpbHRlci5qc1wiO1xuaW1wb3J0IHsgcmVuZGVyTW9kYWwsIG1vZGFsTGlzdGVuZXJzIH0gZnJvbSBcIi4vbW9kYWwuanNcIjtcblxucmVuZGVyVG9kb0Zvcm0oKTtcbnJlbmRlclRvZG8oKTtcbnJlbmRlck1vZGFsKCk7XG5tb2RhbExpc3RlbmVycygpO1xuZmlsdGVyTGlzdGVuZXJzKCk7XG5saXN0T3B0aW9ucygpO1xuXG4vLyBGb3IgdGVzdGluZyBwdXJwb3NlcyBvbmx5LCBjbGVhciBkYXRhLlxubGV0IGNsZWFyQnV0dG9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImJ1dHRvblwiKTtcbmNsZWFyQnV0dG9uLnRleHRDb250ZW50ID0gXCJDbGVhciBEYXRhXCI7XG5jbGVhckJ1dHRvbi5jbGFzc0xpc3QuYWRkKFwiYnRuXCIsIFwiZGFuZ2VyXCIpO1xuZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcImJvZHlcIikuYXBwZW5kQ2hpbGQoY2xlYXJCdXR0b24pO1xuXG5jbGVhckJ1dHRvbi5vbmNsaWNrID0gKCkgPT4ge1xuICB3aW5kb3cubG9jYWxTdG9yYWdlLmNsZWFyKCk7XG4gIGxvY2F0aW9uLnJlbG9hZCgpO1xufVxuXG5cbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==