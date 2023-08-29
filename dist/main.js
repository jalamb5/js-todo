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
// Module
___CSS_LOADER_EXPORT___.push([module.id, `body {
  background-color: #c9b0cf;
  display: grid;
  grid-template-columns: 1fr 3fr;
  grid-template-rows: 5rem 1fr;
}

form {
  display: grid;
  grid-template-columns: 1fr 2fr;
  grid-gap: 3px;
  /* flex-wrap: wrap; */
}
label {
  grid-column: 1;
}

button {
  background-color: #d7f1d0;
  border: none;
  border-radius: 1rem;
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
  grid-row: 2;
  margin-left: 2rem;
  margin-right: 2rem;
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

.todo-complete {
  color: gray;
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


`, "",{"version":3,"sources":["webpack://./dist/assets/style.css"],"names":[],"mappings":"AAAA;EACE,yBAAyB;EACzB,aAAa;EACb,8BAA8B;EAC9B,4BAA4B;AAC9B;;AAEA;EACE,aAAa;EACb,8BAA8B;EAC9B,aAAa;EACb,qBAAqB;AACvB;AACA;EACE,cAAc;AAChB;;AAEA;EACE,yBAAyB;EACzB,YAAY;EACZ,mBAAmB;AACrB;;AAEA;EACE,uBAAuB;AACzB;;AAEA;EACE,WAAW;EACX,uBAAuB;;AAEzB;;AAEA;EACE,cAAc;EACd,WAAW;EACX,sBAAsB;EACtB,uBAAuB;AACzB;;AAEA;EACE,cAAc;EACd,WAAW;EACX,iBAAiB;EACjB,kBAAkB;EAClB,aAAa;EACb,sBAAsB;AACxB;;AAEA;EACE,aAAa;EACb,QAAQ;EACR,qDAAqD;EACrD,mBAAmB;EACnB,mBAAmB;AACrB;;AAEA;EACE,YAAY;EACZ,WAAW;AACb;;AAEA;EACE,mBAAmB;EACnB,aAAa;EACb,sBAAsB;AACxB;;AAEA;EACE,qBAAqB;EACrB,0BAA0B;AAC5B;AACA;EACE,eAAe;AACjB;;AAEA;EACE,qBAAqB;EACrB,YAAY;AACd;;AAEA;EACE,iBAAiB;AACnB;;AAEA;EACE,aAAa;EACb,8BAA8B;EAC9B,mBAAmB;AACrB;;AAEA;EACE,WAAW;EACX,6BAA6B;AAC/B;;AAEA;EACE,SAAS;EACT,gBAAgB;EAChB,YAAY;EACZ,YAAY;EACZ,WAAW;AACb;;AAEA;EACE,cAAc;AAChB;;AAEA;EACE,cAAc;AAChB;;AAEA;EACE,cAAc;AAChB","sourcesContent":["body {\n  background-color: #c9b0cf;\n  display: grid;\n  grid-template-columns: 1fr 3fr;\n  grid-template-rows: 5rem 1fr;\n}\n\nform {\n  display: grid;\n  grid-template-columns: 1fr 2fr;\n  grid-gap: 3px;\n  /* flex-wrap: wrap; */\n}\nlabel {\n  grid-column: 1;\n}\n\nbutton {\n  background-color: #d7f1d0;\n  border: none;\n  border-radius: 1rem;\n}\n\n#submit {\n  grid-column: 1 / span 2;\n}\n\n#site-title {\n  grid-row: 1;\n  grid-column: 1 / span 2;\n\n}\n\n#sidebar {\n  grid-column: 1;\n  grid-row: 2;\n  max-width: fit-content;\n  max-height: fit-content;\n}\n\n#todos-container {\n  grid-column: 2;\n  grid-row: 2;\n  margin-left: 2rem;\n  margin-right: 2rem;\n  display: flex;\n  flex-direction: column;\n}\n\n.todo-item {\n  display: grid;\n  gap: 5px;\n  grid-template-columns: .25fr 1fr 1fr .5fr .25fr .25fr;\n  padding-bottom: 5px;\n  align-items: center;\n}\n\n.checkbox {\n  height: 25px;\n  width: 25px;\n}\n\n#list-container {\n  padding-top: 1.5rem;\n  display: flex;\n  flex-direction: column;\n}\n\n.list {\n  padding-bottom: .5rem;\n  text-decoration: underline;\n}\n.list:hover, .edit-btn:hover, .delete-btn:hover {\n  cursor: pointer;\n}\n\n#showAll {\n  text-decoration: none;\n  padding: 2px;\n}\n\n#new-list-form {\n  padding-top: 1rem;\n}\n\n#modal-header {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n}\n\n.todo-complete {\n  color: gray;\n  text-decoration: line-through;\n}\n\n.edit-btn, .delete-btn {\n  border: 0;\n  background: none;\n  opacity: .50;\n  height: 25px;\n  width: 25px;\n}\n\n.priority-low {\n  color: #87ceeb;\n}\n\n.priority-medium {\n  color: #98FB98;\n}\n\n.priority-high {\n  color: #ff7f50;\n}\n\n\n"],"sourceRoot":""}]);
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

      <input type="submit" value="Edit Todo" id="submit">
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

    if (todoItem.deleted === "deleted") {
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
    editButton.innerHTML = '<img src="../dist/assets/edit-icon.png" class="edit-btn"/>';

    // Create delete button.
    let deleteButton = document.createElement("button");
    deleteButton.classList.add("delete-btn");
    deleteButton.innerHTML = '<img src="../dist/assets/delete-icon.png" class="delete-btn"/>';

    newTodo.append(checkBox, title, dueDate, priority, editButton, deleteButton);
    todosContainer.appendChild(newTodo);
  }
  body.appendChild(todosContainer);
  renderLists(listContainer, sidebarContainer);

  // Ensure onclick listeners are added to edit & delete buttons.
  (0,_deleteTodo__WEBPACK_IMPORTED_MODULE_0__.deleteListeners)();
  (0,_modal__WEBPACK_IMPORTED_MODULE_1__.modalListeners)();
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
  hideCompletedButton.textContent = "Hide Completed";

  // Create a hidden button to show all todos if filtering by list.
  const showAll = document.createElement("button");
  showAll.textContent = "Show All";
  showAll.id = "showAll";
  showAll.classList.add("list");
  showAll.style.display = "none";

  // Collect lists from all todo items in local storage.
  let lists = [];
  for (let i = 0; i < window.localStorage.length; i++) {
    let todoItem = JSON.parse(window.localStorage.getItem(i.toString()));
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
      <input type="submit" value="Create Todo" id="submit">
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
/* harmony import */ var _checkBox_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./checkBox.js */ "./src/checkBox.js");
/* harmony import */ var _deleteTodo_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./deleteTodo.js */ "./src/deleteTodo.js");
/* harmony import */ var _todoFilter_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./todoFilter.js */ "./src/todoFilter.js");
/* harmony import */ var _modal_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./modal.js */ "./src/modal.js");








(0,_todoForm_js__WEBPACK_IMPORTED_MODULE_1__.renderTodoForm)();
(0,_todoDisplay_js__WEBPACK_IMPORTED_MODULE_0__.renderTodo)();
(0,_modal_js__WEBPACK_IMPORTED_MODULE_6__.renderModal)();
(0,_checkBox_js__WEBPACK_IMPORTED_MODULE_3__["default"])();
(0,_modal_js__WEBPACK_IMPORTED_MODULE_6__.modalListeners)();
(0,_deleteTodo_js__WEBPACK_IMPORTED_MODULE_4__.deleteListeners)();
(0,_todoFilter_js__WEBPACK_IMPORTED_MODULE_5__.filterListeners)();
(0,_todoForm_js__WEBPACK_IMPORTED_MODULE_1__.listOptions)();

// For testing purposes only, clear data.
let clearButton = document.createElement("button");
clearButton.textContent = "Clear Data";
document.querySelector("body").appendChild(clearButton);

clearButton.onclick = () => {
  window.localStorage.clear();
  location.reload();
}

})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7Ozs7Ozs7VUNoSEE7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTs7VUFFQTtVQUNBOztVQUVBO1VBQ0E7VUFDQTs7Ozs7V0N0QkE7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLGlDQUFpQyxXQUFXO1dBQzVDO1dBQ0E7Ozs7O1dDUEE7V0FDQTtXQUNBO1dBQ0E7V0FDQSx5Q0FBeUMsd0NBQXdDO1dBQ2pGO1dBQ0E7V0FDQTs7Ozs7V0NQQTs7Ozs7V0NBQTtXQUNBO1dBQ0E7V0FDQSx1REFBdUQsaUJBQWlCO1dBQ3hFO1dBQ0EsZ0RBQWdELGFBQWE7V0FDN0Q7Ozs7O1dDTkE7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ0E0QztBQUNlO0FBQ2hCO0FBQ0c7QUFDSTtBQUNBO0FBQ087O0FBRXpELDREQUFjO0FBQ2QsMkRBQVU7QUFDVixzREFBVztBQUNYLHdEQUFpQjtBQUNqQix5REFBYztBQUNkLCtEQUFlO0FBQ2YsK0RBQWU7QUFDZix5REFBVzs7QUFFWDtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSIsInNvdXJjZXMiOlsid2VicGFjazovL2pzLXRvZG8vLi9kaXN0L2Fzc2V0cy9zdHlsZS5jc3MiLCJ3ZWJwYWNrOi8vanMtdG9kby8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanMiLCJ3ZWJwYWNrOi8vanMtdG9kby8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzIiwid2VicGFjazovL2pzLXRvZG8vLi9kaXN0L2Fzc2V0cy9zdHlsZS5jc3M/NTJmYSIsIndlYnBhY2s6Ly9qcy10b2RvLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzIiwid2VicGFjazovL2pzLXRvZG8vLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzIiwid2VicGFjazovL2pzLXRvZG8vLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanMiLCJ3ZWJwYWNrOi8vanMtdG9kby8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qcyIsIndlYnBhY2s6Ly9qcy10b2RvLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanMiLCJ3ZWJwYWNrOi8vanMtdG9kby8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzIiwid2VicGFjazovL2pzLXRvZG8vLi9zcmMvY2hlY2tCb3guanMiLCJ3ZWJwYWNrOi8vanMtdG9kby8uL3NyYy9kZWxldGVUb2RvLmpzIiwid2VicGFjazovL2pzLXRvZG8vLi9zcmMvbW9kYWwuanMiLCJ3ZWJwYWNrOi8vanMtdG9kby8uL3NyYy90b2RvRGlzcGxheS5qcyIsIndlYnBhY2s6Ly9qcy10b2RvLy4vc3JjL3RvZG9GaWx0ZXIuanMiLCJ3ZWJwYWNrOi8vanMtdG9kby8uL3NyYy90b2RvRm9ybS5qcyIsIndlYnBhY2s6Ly9qcy10b2RvL3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL2pzLXRvZG8vd2VicGFjay9ydW50aW1lL2NvbXBhdCBnZXQgZGVmYXVsdCBleHBvcnQiLCJ3ZWJwYWNrOi8vanMtdG9kby93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vanMtdG9kby93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL2pzLXRvZG8vd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly9qcy10b2RvL3dlYnBhY2svcnVudGltZS9ub25jZSIsIndlYnBhY2s6Ly9qcy10b2RvLy4vc3JjL2hvbWUuanMiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gSW1wb3J0c1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18gZnJvbSBcIi4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fIGZyb20gXCIuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCI7XG52YXIgX19fQ1NTX0xPQURFUl9FWFBPUlRfX18gPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyk7XG4vLyBNb2R1bGVcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgYGJvZHkge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjYzliMGNmO1xuICBkaXNwbGF5OiBncmlkO1xuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDFmciAzZnI7XG4gIGdyaWQtdGVtcGxhdGUtcm93czogNXJlbSAxZnI7XG59XG5cbmZvcm0ge1xuICBkaXNwbGF5OiBncmlkO1xuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDFmciAyZnI7XG4gIGdyaWQtZ2FwOiAzcHg7XG4gIC8qIGZsZXgtd3JhcDogd3JhcDsgKi9cbn1cbmxhYmVsIHtcbiAgZ3JpZC1jb2x1bW46IDE7XG59XG5cbmJ1dHRvbiB7XG4gIGJhY2tncm91bmQtY29sb3I6ICNkN2YxZDA7XG4gIGJvcmRlcjogbm9uZTtcbiAgYm9yZGVyLXJhZGl1czogMXJlbTtcbn1cblxuI3N1Ym1pdCB7XG4gIGdyaWQtY29sdW1uOiAxIC8gc3BhbiAyO1xufVxuXG4jc2l0ZS10aXRsZSB7XG4gIGdyaWQtcm93OiAxO1xuICBncmlkLWNvbHVtbjogMSAvIHNwYW4gMjtcblxufVxuXG4jc2lkZWJhciB7XG4gIGdyaWQtY29sdW1uOiAxO1xuICBncmlkLXJvdzogMjtcbiAgbWF4LXdpZHRoOiBmaXQtY29udGVudDtcbiAgbWF4LWhlaWdodDogZml0LWNvbnRlbnQ7XG59XG5cbiN0b2Rvcy1jb250YWluZXIge1xuICBncmlkLWNvbHVtbjogMjtcbiAgZ3JpZC1yb3c6IDI7XG4gIG1hcmdpbi1sZWZ0OiAycmVtO1xuICBtYXJnaW4tcmlnaHQ6IDJyZW07XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG59XG5cbi50b2RvLWl0ZW0ge1xuICBkaXNwbGF5OiBncmlkO1xuICBnYXA6IDVweDtcbiAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAuMjVmciAxZnIgMWZyIC41ZnIgLjI1ZnIgLjI1ZnI7XG4gIHBhZGRpbmctYm90dG9tOiA1cHg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG59XG5cbi5jaGVja2JveCB7XG4gIGhlaWdodDogMjVweDtcbiAgd2lkdGg6IDI1cHg7XG59XG5cbiNsaXN0LWNvbnRhaW5lciB7XG4gIHBhZGRpbmctdG9wOiAxLjVyZW07XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG59XG5cbi5saXN0IHtcbiAgcGFkZGluZy1ib3R0b206IC41cmVtO1xuICB0ZXh0LWRlY29yYXRpb246IHVuZGVybGluZTtcbn1cbi5saXN0OmhvdmVyLCAuZWRpdC1idG46aG92ZXIsIC5kZWxldGUtYnRuOmhvdmVyIHtcbiAgY3Vyc29yOiBwb2ludGVyO1xufVxuXG4jc2hvd0FsbCB7XG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbiAgcGFkZGluZzogMnB4O1xufVxuXG4jbmV3LWxpc3QtZm9ybSB7XG4gIHBhZGRpbmctdG9wOiAxcmVtO1xufVxuXG4jbW9kYWwtaGVhZGVyIHtcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xufVxuXG4udG9kby1jb21wbGV0ZSB7XG4gIGNvbG9yOiBncmF5O1xuICB0ZXh0LWRlY29yYXRpb246IGxpbmUtdGhyb3VnaDtcbn1cblxuLmVkaXQtYnRuLCAuZGVsZXRlLWJ0biB7XG4gIGJvcmRlcjogMDtcbiAgYmFja2dyb3VuZDogbm9uZTtcbiAgb3BhY2l0eTogLjUwO1xuICBoZWlnaHQ6IDI1cHg7XG4gIHdpZHRoOiAyNXB4O1xufVxuXG4ucHJpb3JpdHktbG93IHtcbiAgY29sb3I6ICM4N2NlZWI7XG59XG5cbi5wcmlvcml0eS1tZWRpdW0ge1xuICBjb2xvcjogIzk4RkI5ODtcbn1cblxuLnByaW9yaXR5LWhpZ2gge1xuICBjb2xvcjogI2ZmN2Y1MDtcbn1cblxuXG5gLCBcIlwiLHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcIndlYnBhY2s6Ly8uL2Rpc3QvYXNzZXRzL3N0eWxlLmNzc1wiXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiQUFBQTtFQUNFLHlCQUF5QjtFQUN6QixhQUFhO0VBQ2IsOEJBQThCO0VBQzlCLDRCQUE0QjtBQUM5Qjs7QUFFQTtFQUNFLGFBQWE7RUFDYiw4QkFBOEI7RUFDOUIsYUFBYTtFQUNiLHFCQUFxQjtBQUN2QjtBQUNBO0VBQ0UsY0FBYztBQUNoQjs7QUFFQTtFQUNFLHlCQUF5QjtFQUN6QixZQUFZO0VBQ1osbUJBQW1CO0FBQ3JCOztBQUVBO0VBQ0UsdUJBQXVCO0FBQ3pCOztBQUVBO0VBQ0UsV0FBVztFQUNYLHVCQUF1Qjs7QUFFekI7O0FBRUE7RUFDRSxjQUFjO0VBQ2QsV0FBVztFQUNYLHNCQUFzQjtFQUN0Qix1QkFBdUI7QUFDekI7O0FBRUE7RUFDRSxjQUFjO0VBQ2QsV0FBVztFQUNYLGlCQUFpQjtFQUNqQixrQkFBa0I7RUFDbEIsYUFBYTtFQUNiLHNCQUFzQjtBQUN4Qjs7QUFFQTtFQUNFLGFBQWE7RUFDYixRQUFRO0VBQ1IscURBQXFEO0VBQ3JELG1CQUFtQjtFQUNuQixtQkFBbUI7QUFDckI7O0FBRUE7RUFDRSxZQUFZO0VBQ1osV0FBVztBQUNiOztBQUVBO0VBQ0UsbUJBQW1CO0VBQ25CLGFBQWE7RUFDYixzQkFBc0I7QUFDeEI7O0FBRUE7RUFDRSxxQkFBcUI7RUFDckIsMEJBQTBCO0FBQzVCO0FBQ0E7RUFDRSxlQUFlO0FBQ2pCOztBQUVBO0VBQ0UscUJBQXFCO0VBQ3JCLFlBQVk7QUFDZDs7QUFFQTtFQUNFLGlCQUFpQjtBQUNuQjs7QUFFQTtFQUNFLGFBQWE7RUFDYiw4QkFBOEI7RUFDOUIsbUJBQW1CO0FBQ3JCOztBQUVBO0VBQ0UsV0FBVztFQUNYLDZCQUE2QjtBQUMvQjs7QUFFQTtFQUNFLFNBQVM7RUFDVCxnQkFBZ0I7RUFDaEIsWUFBWTtFQUNaLFlBQVk7RUFDWixXQUFXO0FBQ2I7O0FBRUE7RUFDRSxjQUFjO0FBQ2hCOztBQUVBO0VBQ0UsY0FBYztBQUNoQjs7QUFFQTtFQUNFLGNBQWM7QUFDaEJcIixcInNvdXJjZXNDb250ZW50XCI6W1wiYm9keSB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjYzliMGNmO1xcbiAgZGlzcGxheTogZ3JpZDtcXG4gIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMWZyIDNmcjtcXG4gIGdyaWQtdGVtcGxhdGUtcm93czogNXJlbSAxZnI7XFxufVxcblxcbmZvcm0ge1xcbiAgZGlzcGxheTogZ3JpZDtcXG4gIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMWZyIDJmcjtcXG4gIGdyaWQtZ2FwOiAzcHg7XFxuICAvKiBmbGV4LXdyYXA6IHdyYXA7ICovXFxufVxcbmxhYmVsIHtcXG4gIGdyaWQtY29sdW1uOiAxO1xcbn1cXG5cXG5idXR0b24ge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogI2Q3ZjFkMDtcXG4gIGJvcmRlcjogbm9uZTtcXG4gIGJvcmRlci1yYWRpdXM6IDFyZW07XFxufVxcblxcbiNzdWJtaXQge1xcbiAgZ3JpZC1jb2x1bW46IDEgLyBzcGFuIDI7XFxufVxcblxcbiNzaXRlLXRpdGxlIHtcXG4gIGdyaWQtcm93OiAxO1xcbiAgZ3JpZC1jb2x1bW46IDEgLyBzcGFuIDI7XFxuXFxufVxcblxcbiNzaWRlYmFyIHtcXG4gIGdyaWQtY29sdW1uOiAxO1xcbiAgZ3JpZC1yb3c6IDI7XFxuICBtYXgtd2lkdGg6IGZpdC1jb250ZW50O1xcbiAgbWF4LWhlaWdodDogZml0LWNvbnRlbnQ7XFxufVxcblxcbiN0b2Rvcy1jb250YWluZXIge1xcbiAgZ3JpZC1jb2x1bW46IDI7XFxuICBncmlkLXJvdzogMjtcXG4gIG1hcmdpbi1sZWZ0OiAycmVtO1xcbiAgbWFyZ2luLXJpZ2h0OiAycmVtO1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxufVxcblxcbi50b2RvLWl0ZW0ge1xcbiAgZGlzcGxheTogZ3JpZDtcXG4gIGdhcDogNXB4O1xcbiAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAuMjVmciAxZnIgMWZyIC41ZnIgLjI1ZnIgLjI1ZnI7XFxuICBwYWRkaW5nLWJvdHRvbTogNXB4O1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG59XFxuXFxuLmNoZWNrYm94IHtcXG4gIGhlaWdodDogMjVweDtcXG4gIHdpZHRoOiAyNXB4O1xcbn1cXG5cXG4jbGlzdC1jb250YWluZXIge1xcbiAgcGFkZGluZy10b3A6IDEuNXJlbTtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbn1cXG5cXG4ubGlzdCB7XFxuICBwYWRkaW5nLWJvdHRvbTogLjVyZW07XFxuICB0ZXh0LWRlY29yYXRpb246IHVuZGVybGluZTtcXG59XFxuLmxpc3Q6aG92ZXIsIC5lZGl0LWJ0bjpob3ZlciwgLmRlbGV0ZS1idG46aG92ZXIge1xcbiAgY3Vyc29yOiBwb2ludGVyO1xcbn1cXG5cXG4jc2hvd0FsbCB7XFxuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XFxuICBwYWRkaW5nOiAycHg7XFxufVxcblxcbiNuZXctbGlzdC1mb3JtIHtcXG4gIHBhZGRpbmctdG9wOiAxcmVtO1xcbn1cXG5cXG4jbW9kYWwtaGVhZGVyIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbn1cXG5cXG4udG9kby1jb21wbGV0ZSB7XFxuICBjb2xvcjogZ3JheTtcXG4gIHRleHQtZGVjb3JhdGlvbjogbGluZS10aHJvdWdoO1xcbn1cXG5cXG4uZWRpdC1idG4sIC5kZWxldGUtYnRuIHtcXG4gIGJvcmRlcjogMDtcXG4gIGJhY2tncm91bmQ6IG5vbmU7XFxuICBvcGFjaXR5OiAuNTA7XFxuICBoZWlnaHQ6IDI1cHg7XFxuICB3aWR0aDogMjVweDtcXG59XFxuXFxuLnByaW9yaXR5LWxvdyB7XFxuICBjb2xvcjogIzg3Y2VlYjtcXG59XFxuXFxuLnByaW9yaXR5LW1lZGl1bSB7XFxuICBjb2xvcjogIzk4RkI5ODtcXG59XFxuXFxuLnByaW9yaXR5LWhpZ2gge1xcbiAgY29sb3I6ICNmZjdmNTA7XFxufVxcblxcblxcblwiXSxcInNvdXJjZVJvb3RcIjpcIlwifV0pO1xuLy8gRXhwb3J0c1xuZXhwb3J0IGRlZmF1bHQgX19fQ1NTX0xPQURFUl9FWFBPUlRfX187XG4iLCJcInVzZSBzdHJpY3RcIjtcblxuLypcbiAgTUlUIExpY2Vuc2UgaHR0cDovL3d3dy5vcGVuc291cmNlLm9yZy9saWNlbnNlcy9taXQtbGljZW5zZS5waHBcbiAgQXV0aG9yIFRvYmlhcyBLb3BwZXJzIEBzb2tyYVxuKi9cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcpIHtcbiAgdmFyIGxpc3QgPSBbXTtcblxuICAvLyByZXR1cm4gdGhlIGxpc3Qgb2YgbW9kdWxlcyBhcyBjc3Mgc3RyaW5nXG4gIGxpc3QudG9TdHJpbmcgPSBmdW5jdGlvbiB0b1N0cmluZygpIHtcbiAgICByZXR1cm4gdGhpcy5tYXAoZnVuY3Rpb24gKGl0ZW0pIHtcbiAgICAgIHZhciBjb250ZW50ID0gXCJcIjtcbiAgICAgIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2YgaXRlbVs1XSAhPT0gXCJ1bmRlZmluZWRcIjtcbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKTtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIik7XG4gICAgICB9XG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKTtcbiAgICAgIH1cbiAgICAgIGNvbnRlbnQgKz0gY3NzV2l0aE1hcHBpbmdUb1N0cmluZyhpdGVtKTtcbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgcmV0dXJuIGNvbnRlbnQ7XG4gICAgfSkuam9pbihcIlwiKTtcbiAgfTtcblxuICAvLyBpbXBvcnQgYSBsaXN0IG9mIG1vZHVsZXMgaW50byB0aGUgbGlzdFxuICBsaXN0LmkgPSBmdW5jdGlvbiBpKG1vZHVsZXMsIG1lZGlhLCBkZWR1cGUsIHN1cHBvcnRzLCBsYXllcikge1xuICAgIGlmICh0eXBlb2YgbW9kdWxlcyA9PT0gXCJzdHJpbmdcIikge1xuICAgICAgbW9kdWxlcyA9IFtbbnVsbCwgbW9kdWxlcywgdW5kZWZpbmVkXV07XG4gICAgfVxuICAgIHZhciBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzID0ge307XG4gICAgaWYgKGRlZHVwZSkge1xuICAgICAgZm9yICh2YXIgayA9IDA7IGsgPCB0aGlzLmxlbmd0aDsgaysrKSB7XG4gICAgICAgIHZhciBpZCA9IHRoaXNba11bMF07XG4gICAgICAgIGlmIChpZCAhPSBudWxsKSB7XG4gICAgICAgICAgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpZF0gPSB0cnVlO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICAgIGZvciAodmFyIF9rID0gMDsgX2sgPCBtb2R1bGVzLmxlbmd0aDsgX2srKykge1xuICAgICAgdmFyIGl0ZW0gPSBbXS5jb25jYXQobW9kdWxlc1tfa10pO1xuICAgICAgaWYgKGRlZHVwZSAmJiBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2l0ZW1bMF1dKSB7XG4gICAgICAgIGNvbnRpbnVlO1xuICAgICAgfVxuICAgICAgaWYgKHR5cGVvZiBsYXllciAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICBpZiAodHlwZW9mIGl0ZW1bNV0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGlmIChtZWRpYSkge1xuICAgICAgICBpZiAoIWl0ZW1bMl0pIHtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBpZiAoc3VwcG9ydHMpIHtcbiAgICAgICAgaWYgKCFpdGVtWzRdKSB7XG4gICAgICAgICAgaXRlbVs0XSA9IFwiXCIuY29uY2F0KHN1cHBvcnRzKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNF0gPSBzdXBwb3J0cztcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgbGlzdC5wdXNoKGl0ZW0pO1xuICAgIH1cbiAgfTtcbiAgcmV0dXJuIGxpc3Q7XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChpdGVtKSB7XG4gIHZhciBjb250ZW50ID0gaXRlbVsxXTtcbiAgdmFyIGNzc01hcHBpbmcgPSBpdGVtWzNdO1xuICBpZiAoIWNzc01hcHBpbmcpIHtcbiAgICByZXR1cm4gY29udGVudDtcbiAgfVxuICBpZiAodHlwZW9mIGJ0b2EgPT09IFwiZnVuY3Rpb25cIikge1xuICAgIHZhciBiYXNlNjQgPSBidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShjc3NNYXBwaW5nKSkpKTtcbiAgICB2YXIgZGF0YSA9IFwic291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247Y2hhcnNldD11dGYtODtiYXNlNjQsXCIuY29uY2F0KGJhc2U2NCk7XG4gICAgdmFyIHNvdXJjZU1hcHBpbmcgPSBcIi8qIyBcIi5jb25jYXQoZGF0YSwgXCIgKi9cIik7XG4gICAgcmV0dXJuIFtjb250ZW50XS5jb25jYXQoW3NvdXJjZU1hcHBpbmddKS5qb2luKFwiXFxuXCIpO1xuICB9XG4gIHJldHVybiBbY29udGVudF0uam9pbihcIlxcblwiKTtcbn07IiwiXG4gICAgICBpbXBvcnQgQVBJIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzXCI7XG4gICAgICBpbXBvcnQgZG9tQVBJIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRGbiBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanNcIjtcbiAgICAgIGltcG9ydCBzZXRBdHRyaWJ1dGVzIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0U3R5bGVFbGVtZW50IGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzXCI7XG4gICAgICBpbXBvcnQgc3R5bGVUYWdUcmFuc2Zvcm1GbiBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzXCI7XG4gICAgICBpbXBvcnQgY29udGVudCwgKiBhcyBuYW1lZEV4cG9ydCBmcm9tIFwiISEuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3N0eWxlLmNzc1wiO1xuICAgICAgXG4gICAgICBcblxudmFyIG9wdGlvbnMgPSB7fTtcblxub3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybSA9IHN0eWxlVGFnVHJhbnNmb3JtRm47XG5vcHRpb25zLnNldEF0dHJpYnV0ZXMgPSBzZXRBdHRyaWJ1dGVzO1xuXG4gICAgICBvcHRpb25zLmluc2VydCA9IGluc2VydEZuLmJpbmQobnVsbCwgXCJoZWFkXCIpO1xuICAgIFxub3B0aW9ucy5kb21BUEkgPSBkb21BUEk7XG5vcHRpb25zLmluc2VydFN0eWxlRWxlbWVudCA9IGluc2VydFN0eWxlRWxlbWVudDtcblxudmFyIHVwZGF0ZSA9IEFQSShjb250ZW50LCBvcHRpb25zKTtcblxuXG5cbmV4cG9ydCAqIGZyb20gXCIhIS4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc3R5bGUuY3NzXCI7XG4gICAgICAgZXhwb3J0IGRlZmF1bHQgY29udGVudCAmJiBjb250ZW50LmxvY2FscyA/IGNvbnRlbnQubG9jYWxzIDogdW5kZWZpbmVkO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBzdHlsZXNJbkRPTSA9IFtdO1xuZnVuY3Rpb24gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcikge1xuICB2YXIgcmVzdWx0ID0gLTE7XG4gIGZvciAodmFyIGkgPSAwOyBpIDwgc3R5bGVzSW5ET00ubGVuZ3RoOyBpKyspIHtcbiAgICBpZiAoc3R5bGVzSW5ET01baV0uaWRlbnRpZmllciA9PT0gaWRlbnRpZmllcikge1xuICAgICAgcmVzdWx0ID0gaTtcbiAgICAgIGJyZWFrO1xuICAgIH1cbiAgfVxuICByZXR1cm4gcmVzdWx0O1xufVxuZnVuY3Rpb24gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpIHtcbiAgdmFyIGlkQ291bnRNYXAgPSB7fTtcbiAgdmFyIGlkZW50aWZpZXJzID0gW107XG4gIGZvciAodmFyIGkgPSAwOyBpIDwgbGlzdC5sZW5ndGg7IGkrKykge1xuICAgIHZhciBpdGVtID0gbGlzdFtpXTtcbiAgICB2YXIgaWQgPSBvcHRpb25zLmJhc2UgPyBpdGVtWzBdICsgb3B0aW9ucy5iYXNlIDogaXRlbVswXTtcbiAgICB2YXIgY291bnQgPSBpZENvdW50TWFwW2lkXSB8fCAwO1xuICAgIHZhciBpZGVudGlmaWVyID0gXCJcIi5jb25jYXQoaWQsIFwiIFwiKS5jb25jYXQoY291bnQpO1xuICAgIGlkQ291bnRNYXBbaWRdID0gY291bnQgKyAxO1xuICAgIHZhciBpbmRleEJ5SWRlbnRpZmllciA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgIHZhciBvYmogPSB7XG4gICAgICBjc3M6IGl0ZW1bMV0sXG4gICAgICBtZWRpYTogaXRlbVsyXSxcbiAgICAgIHNvdXJjZU1hcDogaXRlbVszXSxcbiAgICAgIHN1cHBvcnRzOiBpdGVtWzRdLFxuICAgICAgbGF5ZXI6IGl0ZW1bNV1cbiAgICB9O1xuICAgIGlmIChpbmRleEJ5SWRlbnRpZmllciAhPT0gLTEpIHtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS5yZWZlcmVuY2VzKys7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0udXBkYXRlcihvYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICB2YXIgdXBkYXRlciA9IGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpO1xuICAgICAgb3B0aW9ucy5ieUluZGV4ID0gaTtcbiAgICAgIHN0eWxlc0luRE9NLnNwbGljZShpLCAwLCB7XG4gICAgICAgIGlkZW50aWZpZXI6IGlkZW50aWZpZXIsXG4gICAgICAgIHVwZGF0ZXI6IHVwZGF0ZXIsXG4gICAgICAgIHJlZmVyZW5jZXM6IDFcbiAgICAgIH0pO1xuICAgIH1cbiAgICBpZGVudGlmaWVycy5wdXNoKGlkZW50aWZpZXIpO1xuICB9XG4gIHJldHVybiBpZGVudGlmaWVycztcbn1cbmZ1bmN0aW9uIGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpIHtcbiAgdmFyIGFwaSA9IG9wdGlvbnMuZG9tQVBJKG9wdGlvbnMpO1xuICBhcGkudXBkYXRlKG9iaik7XG4gIHZhciB1cGRhdGVyID0gZnVuY3Rpb24gdXBkYXRlcihuZXdPYmopIHtcbiAgICBpZiAobmV3T2JqKSB7XG4gICAgICBpZiAobmV3T2JqLmNzcyA9PT0gb2JqLmNzcyAmJiBuZXdPYmoubWVkaWEgPT09IG9iai5tZWRpYSAmJiBuZXdPYmouc291cmNlTWFwID09PSBvYmouc291cmNlTWFwICYmIG5ld09iai5zdXBwb3J0cyA9PT0gb2JqLnN1cHBvcnRzICYmIG5ld09iai5sYXllciA9PT0gb2JqLmxheWVyKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cbiAgICAgIGFwaS51cGRhdGUob2JqID0gbmV3T2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgYXBpLnJlbW92ZSgpO1xuICAgIH1cbiAgfTtcbiAgcmV0dXJuIHVwZGF0ZXI7XG59XG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChsaXN0LCBvcHRpb25zKSB7XG4gIG9wdGlvbnMgPSBvcHRpb25zIHx8IHt9O1xuICBsaXN0ID0gbGlzdCB8fCBbXTtcbiAgdmFyIGxhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKTtcbiAgcmV0dXJuIGZ1bmN0aW9uIHVwZGF0ZShuZXdMaXN0KSB7XG4gICAgbmV3TGlzdCA9IG5ld0xpc3QgfHwgW107XG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBpKyspIHtcbiAgICAgIHZhciBpZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW2ldO1xuICAgICAgdmFyIGluZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleF0ucmVmZXJlbmNlcy0tO1xuICAgIH1cbiAgICB2YXIgbmV3TGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKG5ld0xpc3QsIG9wdGlvbnMpO1xuICAgIGZvciAodmFyIF9pID0gMDsgX2kgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBfaSsrKSB7XG4gICAgICB2YXIgX2lkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbX2ldO1xuICAgICAgdmFyIF9pbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKF9pZGVudGlmaWVyKTtcbiAgICAgIGlmIChzdHlsZXNJbkRPTVtfaW5kZXhdLnJlZmVyZW5jZXMgPT09IDApIHtcbiAgICAgICAgc3R5bGVzSW5ET01bX2luZGV4XS51cGRhdGVyKCk7XG4gICAgICAgIHN0eWxlc0luRE9NLnNwbGljZShfaW5kZXgsIDEpO1xuICAgICAgfVxuICAgIH1cbiAgICBsYXN0SWRlbnRpZmllcnMgPSBuZXdMYXN0SWRlbnRpZmllcnM7XG4gIH07XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgbWVtbyA9IHt9O1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGdldFRhcmdldCh0YXJnZXQpIHtcbiAgaWYgKHR5cGVvZiBtZW1vW3RhcmdldF0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICB2YXIgc3R5bGVUYXJnZXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKHRhcmdldCk7XG5cbiAgICAvLyBTcGVjaWFsIGNhc2UgdG8gcmV0dXJuIGhlYWQgb2YgaWZyYW1lIGluc3RlYWQgb2YgaWZyYW1lIGl0c2VsZlxuICAgIGlmICh3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQgJiYgc3R5bGVUYXJnZXQgaW5zdGFuY2VvZiB3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQpIHtcbiAgICAgIHRyeSB7XG4gICAgICAgIC8vIFRoaXMgd2lsbCB0aHJvdyBhbiBleGNlcHRpb24gaWYgYWNjZXNzIHRvIGlmcmFtZSBpcyBibG9ja2VkXG4gICAgICAgIC8vIGR1ZSB0byBjcm9zcy1vcmlnaW4gcmVzdHJpY3Rpb25zXG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gc3R5bGVUYXJnZXQuY29udGVudERvY3VtZW50LmhlYWQ7XG4gICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgIC8vIGlzdGFuYnVsIGlnbm9yZSBuZXh0XG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gbnVsbDtcbiAgICAgIH1cbiAgICB9XG4gICAgbWVtb1t0YXJnZXRdID0gc3R5bGVUYXJnZXQ7XG4gIH1cbiAgcmV0dXJuIG1lbW9bdGFyZ2V0XTtcbn1cblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBpbnNlcnRCeVNlbGVjdG9yKGluc2VydCwgc3R5bGUpIHtcbiAgdmFyIHRhcmdldCA9IGdldFRhcmdldChpbnNlcnQpO1xuICBpZiAoIXRhcmdldCkge1xuICAgIHRocm93IG5ldyBFcnJvcihcIkNvdWxkbid0IGZpbmQgYSBzdHlsZSB0YXJnZXQuIFRoaXMgcHJvYmFibHkgbWVhbnMgdGhhdCB0aGUgdmFsdWUgZm9yIHRoZSAnaW5zZXJ0JyBwYXJhbWV0ZXIgaXMgaW52YWxpZC5cIik7XG4gIH1cbiAgdGFyZ2V0LmFwcGVuZENoaWxkKHN0eWxlKTtcbn1cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0QnlTZWxlY3RvcjsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBpbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucykge1xuICB2YXIgZWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzdHlsZVwiKTtcbiAgb3B0aW9ucy5zZXRBdHRyaWJ1dGVzKGVsZW1lbnQsIG9wdGlvbnMuYXR0cmlidXRlcyk7XG4gIG9wdGlvbnMuaW5zZXJ0KGVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG4gIHJldHVybiBlbGVtZW50O1xufVxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzKHN0eWxlRWxlbWVudCkge1xuICB2YXIgbm9uY2UgPSB0eXBlb2YgX193ZWJwYWNrX25vbmNlX18gIT09IFwidW5kZWZpbmVkXCIgPyBfX3dlYnBhY2tfbm9uY2VfXyA6IG51bGw7XG4gIGlmIChub25jZSkge1xuICAgIHN0eWxlRWxlbWVudC5zZXRBdHRyaWJ1dGUoXCJub25jZVwiLCBub25jZSk7XG4gIH1cbn1cbm1vZHVsZS5leHBvcnRzID0gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKSB7XG4gIHZhciBjc3MgPSBcIlwiO1xuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQob2JqLnN1cHBvcnRzLCBcIikge1wiKTtcbiAgfVxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwiQG1lZGlhIFwiLmNvbmNhdChvYmoubWVkaWEsIFwiIHtcIik7XG4gIH1cbiAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBvYmoubGF5ZXIgIT09IFwidW5kZWZpbmVkXCI7XG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJAbGF5ZXJcIi5jb25jYXQob2JqLmxheWVyLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQob2JqLmxheWVyKSA6IFwiXCIsIFwiIHtcIik7XG4gIH1cbiAgY3NzICs9IG9iai5jc3M7XG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG4gIHZhciBzb3VyY2VNYXAgPSBvYmouc291cmNlTWFwO1xuICBpZiAoc291cmNlTWFwICYmIHR5cGVvZiBidG9hICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgY3NzICs9IFwiXFxuLyojIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2Jhc2U2NCxcIi5jb25jYXQoYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoc291cmNlTWFwKSkpKSwgXCIgKi9cIik7XG4gIH1cblxuICAvLyBGb3Igb2xkIElFXG4gIC8qIGlzdGFuYnVsIGlnbm9yZSBpZiAgKi9cbiAgb3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbn1cbmZ1bmN0aW9uIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpIHtcbiAgLy8gaXN0YW5idWwgaWdub3JlIGlmXG4gIGlmIChzdHlsZUVsZW1lbnQucGFyZW50Tm9kZSA9PT0gbnVsbCkge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuICBzdHlsZUVsZW1lbnQucGFyZW50Tm9kZS5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQpO1xufVxuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGRvbUFQSShvcHRpb25zKSB7XG4gIGlmICh0eXBlb2YgZG9jdW1lbnQgPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICByZXR1cm4ge1xuICAgICAgdXBkYXRlOiBmdW5jdGlvbiB1cGRhdGUoKSB7fSxcbiAgICAgIHJlbW92ZTogZnVuY3Rpb24gcmVtb3ZlKCkge31cbiAgICB9O1xuICB9XG4gIHZhciBzdHlsZUVsZW1lbnQgPSBvcHRpb25zLmluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKTtcbiAgcmV0dXJuIHtcbiAgICB1cGRhdGU6IGZ1bmN0aW9uIHVwZGF0ZShvYmopIHtcbiAgICAgIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKTtcbiAgICB9LFxuICAgIHJlbW92ZTogZnVuY3Rpb24gcmVtb3ZlKCkge1xuICAgICAgcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCk7XG4gICAgfVxuICB9O1xufVxubW9kdWxlLmV4cG9ydHMgPSBkb21BUEk7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQpIHtcbiAgaWYgKHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0KSB7XG4gICAgc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQuY3NzVGV4dCA9IGNzcztcbiAgfSBlbHNlIHtcbiAgICB3aGlsZSAoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpIHtcbiAgICAgIHN0eWxlRWxlbWVudC5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCk7XG4gICAgfVxuICAgIHN0eWxlRWxlbWVudC5hcHBlbmRDaGlsZChkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShjc3MpKTtcbiAgfVxufVxubW9kdWxlLmV4cG9ydHMgPSBzdHlsZVRhZ1RyYW5zZm9ybTsiLCJleHBvcnQgZGVmYXVsdCBjaGVja2JveExpc3RlbmVycztcblxuZnVuY3Rpb24gbWFya0JveCh0b2RvRGl2KSB7XG4gIGxldCBrZXkgPSB0b2RvRGl2LmlkO1xuICBsZXQgdG9kb0l0ZW0gPSBKU09OLnBhcnNlKHdpbmRvdy5sb2NhbFN0b3JhZ2UuZ2V0SXRlbShrZXkpKTtcblxuICBpZiAodG9kb0l0ZW0uY29tcGxldGVkKSB7XG4gICAgdG9kb0l0ZW0uY29tcGxldGVkID0gZmFsc2U7XG4gICAgdG9kb0Rpdi5jbGFzc0xpc3QucmVtb3ZlKCd0b2RvLWNvbXBsZXRlJyk7XG4gIH0gZWxzZSBpZiAoIXRvZG9JdGVtLmNvbXBsZXRlZCkge1xuICAgIHRvZG9JdGVtLmNvbXBsZXRlZCA9IHRydWU7XG4gICAgdG9kb0Rpdi5jbGFzc0xpc3QuYWRkKCd0b2RvLWNvbXBsZXRlJyk7XG4gIH1cbiAgd2luZG93LmxvY2FsU3RvcmFnZS5zZXRJdGVtKGtleSwgSlNPTi5zdHJpbmdpZnkodG9kb0l0ZW0pKTtcbn1cblxuZnVuY3Rpb24gY2hlY2tib3hMaXN0ZW5lcnMoKSB7XG4gIGxldCBjaGVja0JveGVzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChcImlucHV0W3R5cGU9J2NoZWNrYm94J11cIik7XG5cbiAgY2hlY2tCb3hlcy5mb3JFYWNoKChjaGVja2JveCkgPT4ge1xuICAgIGNoZWNrYm94Lm9uY2xpY2sgPSAoKSA9PiB7XG4gICAgICBtYXJrQm94KGNoZWNrYm94LnBhcmVudEVsZW1lbnQpXG4gICAgfVxuICB9KVxufVxuIiwiZXhwb3J0IHsgZGVsZXRlVG9kbywgZGVsZXRlTGlzdGVuZXJzIH07XG5pbXBvcnQge3JlbmRlclRvZG99IGZyb20gXCIuL3RvZG9EaXNwbGF5XCI7XG5cbmZ1bmN0aW9uIGRlbGV0ZVRvZG8oa2V5KSB7XG4gIHdpbmRvdy5sb2NhbFN0b3JhZ2Uuc2V0SXRlbShrZXksICd7XCJkZWxldGVkXCI6XCJkZWxldGVkXCJ9Jyk7XG5cbiAgbGV0IHRvZG9zQ29udGFpbmVyID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJ0b2Rvcy1jb250YWluZXJcIik7XG5cbiAgLy8gUmVtb3ZlIGNoaWxkcmVuIGZyb20gdGhlIGNvbnRhaW5lciBpZiB0aGV5IGV4aXN0LlxuICBpZiAodG9kb3NDb250YWluZXIuY2hpbGRyZW4ubGVuZ3RoID4gMCkge1xuICAgIHdoaWxlICh0b2Rvc0NvbnRhaW5lci5maXJzdENoaWxkKSB7XG4gICAgICB0b2Rvc0NvbnRhaW5lci5yZW1vdmVDaGlsZCh0b2Rvc0NvbnRhaW5lci5maXJzdENoaWxkKTtcbiAgICB9XG4gIH1cbiAgcmVuZGVyVG9kbygpO1xufVxuXG5mdW5jdGlvbiBkZWxldGVMaXN0ZW5lcnMoKSB7XG4gIGxldCBkZWxldGVCdXR0b25zID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChcIi5kZWxldGUtYnRuXCIpO1xuXG4gIGRlbGV0ZUJ1dHRvbnMuZm9yRWFjaCgoZGVsZXRlQnV0dG9uKSA9PiB7XG4gICAgZGVsZXRlQnV0dG9uLm9uY2xpY2sgPSAoKSA9PiB7XG4gICAgICBkZWxldGVUb2RvKGRlbGV0ZUJ1dHRvbi5wYXJlbnRFbGVtZW50LmlkKTtcbiAgICB9XG4gIH0pXG59XG4iLCJleHBvcnQgeyByZW5kZXJNb2RhbCwgbW9kYWxMaXN0ZW5lcnMgfVxuaW1wb3J0IHsgbGlzdE9wdGlvbnMgfSBmcm9tIFwiLi90b2RvRm9ybVwiO1xuXG5mdW5jdGlvbiByZW5kZXJNb2RhbCgpIHtcbiAgY29uc3QgdG9kb3NDb250YWluZXIgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInRvZG9zLWNvbnRhaW5lclwiKTtcbiAgY29uc3QgbW9kYWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaWFsb2cnKTtcbiAgbW9kYWwuaWQgPSBcIm1vZGFsXCI7XG5cbiAgdG9kb3NDb250YWluZXIuYXBwZW5kQ2hpbGQobW9kYWwpO1xufVxuXG4vLyBIYW5kbGUgYnV0dG9ucyBvdXRzaWRlIG1vZGFsLlxuZnVuY3Rpb24gbW9kYWxMaXN0ZW5lcnMoKSB7XG4gIGNvbnN0IG1vZGFsID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJtb2RhbFwiKTtcbiAgbGV0IGVkaXRCdXR0b25zID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChcIi5lZGl0LWJ0blwiKTtcblxuICBlZGl0QnV0dG9ucy5mb3JFYWNoKChlZGl0QnV0dG9uKSA9PiB7XG4gICAgZWRpdEJ1dHRvbi5vbmNsaWNrID0gKCkgPT4ge1xuICAgICAgbW9kYWwuc2hvd01vZGFsKCk7XG4gICAgICB1cGRhdGVNb2RhbChlZGl0QnV0dG9uLnBhcmVudEVsZW1lbnQuaWQpO1xuICAgIH1cbiAgfSlcbn1cblxuLy8gQWRkIHRvZG8gZGF0YSB0byBtb2RhbC5cbmZ1bmN0aW9uIHVwZGF0ZU1vZGFsKGtleSkge1xuICBjb25zdCBtb2RhbCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwibW9kYWxcIik7XG5cbiAgLy8gY2xlYXIgYW55IGV4aXN0aW5nIGRhdGEuXG4gIGlmIChtb2RhbC5jaGlsZHJlbi5sZW5ndGggPiAwKSB7XG4gICAgd2hpbGUgKG1vZGFsLmZpcnN0Q2hpbGQpIHtcbiAgICAgIG1vZGFsLnJlbW92ZUNoaWxkKG1vZGFsLmZpcnN0Q2hpbGQpO1xuICAgIH1cbiAgfVxuXG4gIC8vIGFkZCBhIHRpdGxlIGFuZCBjbG9zZSBidXR0b24uXG4gIGNvbnN0IGhlYWRlckRpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gIGNvbnN0IG1vZGFsVGl0bGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaDNcIik7XG4gIGhlYWRlckRpdi5pZCA9IFwibW9kYWwtaGVhZGVyXCI7XG4gIG1vZGFsVGl0bGUudGV4dENvbnRlbnQgPSBcIlZpZXcgLyBFZGl0IFRvLWRvXCI7XG5cbiAgY29uc3QgY2xvc2VNb2RhbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJidXR0b25cIik7XG4gIGNsb3NlTW9kYWwuaW5uZXJIVE1MID0gXCImdGltZXNcIjtcbiAgY2xvc2VNb2RhbC5pZCA9IFwiY2xvc2VNb2RhbFwiO1xuXG4gIGhlYWRlckRpdi5hcHBlbmQobW9kYWxUaXRsZSwgY2xvc2VNb2RhbCk7XG4gIG1vZGFsLmFwcGVuZENoaWxkKGhlYWRlckRpdik7XG5cbiAgLy8gQWRkIGxpc3RlbmVyIHRvIGNsb3NlIGJ1dHRvbi5cbiAgY2xvc2VNb2RhbC5vbmNsaWNrID0gKCkgPT4ge1xuICAgIG1vZGFsLmNsb3NlKClcbiAgfTtcblxuICAvLyBQdWxsIHRvZG8gaW5mbyBhbmQgcHJlZmlsbCBmb3JtIHdpdGggZGF0YS5cbiAgbGV0IHRvZG9JdGVtID0gSlNPTi5wYXJzZSh3aW5kb3cubG9jYWxTdG9yYWdlLmdldEl0ZW0oa2V5KSk7XG4gIGNvbnN0IHRvZG9EYXRhID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImZvcm1cIik7XG5cbiAgdG9kb0RhdGEuYWRkRXZlbnRMaXN0ZW5lcihcInN1Ym1pdFwiLCBmdW5jdGlvbiAoX2V2ZW50KSB7XG5cbiAgICB0b2RvSXRlbS50aXRsZSA9IHRvZG9EYXRhLmVsZW1lbnRzLnRpdGxlLnZhbHVlO1xuICAgIHRvZG9JdGVtLmR1ZURhdGUgPSB0b2RvRGF0YS5lbGVtZW50cy5kdWVEYXRlLnZhbHVlO1xuICAgIHRvZG9JdGVtLnByaW9yaXR5ID0gdG9kb0RhdGEuZWxlbWVudHMucHJpb3JpdHkudmFsdWU7XG4gICAgdG9kb0l0ZW0ubm90ZXMgPSB0b2RvRGF0YS5lbGVtZW50cy5ub3Rlcy52YWx1ZTtcbiAgICB0b2RvSXRlbS5saXN0ID0gdG9kb0RhdGEuZWxlbWVudHMubGlzdC52YWx1ZTtcblxuICAgIHdpbmRvdy5sb2NhbFN0b3JhZ2Uuc2V0SXRlbShrZXksIEpTT04uc3RyaW5naWZ5KHRvZG9JdGVtKSk7XG4gIH0pO1xuXG4gICAgdG9kb0RhdGEuaW5uZXJIVE1MID0gYFxuICAgICAgPGxhYmVsIGZvcj1cInRpdGxlXCI+VGl0bGU6PC9sYWJlbD5cbiAgICAgIDxpbnB1dCB0eXBlPVwidGV4dFwiIGlkPVwidGl0bGVcIiBuYW1lPVwidGl0bGVcIiB2YWx1ZT1cIiR7dG9kb0l0ZW0udGl0bGV9XCIgcmVxdWlyZWQ+PGJyPlxuXG4gICAgICA8bGFiZWwgZm9yPVwiZHVlLWRhdGVcIj5EdWUgRGF0ZTo8L2xhYmVsPlxuICAgICAgPGlucHV0IHR5cGU9XCJkYXRlXCIgaWQ9XCJkdWUtZGF0ZVwiIG5hbWU9XCJkdWVEYXRlXCIgdmFsdWU9JHt0b2RvSXRlbS5kdWVEYXRlfT48YnI+XG5cbiAgICAgIDxsYWJlbCBmb3I9XCJwcmlvcml0eVwiPlByaW9yaXR5OjwvbGFiZWw+XG4gICAgICA8aW5wdXQgbGlzdD1cIm1vZGFsLXByaW9yaXR5LXNlbGVjdGlvbnNcIiBuYW1lPVwicHJpb3JpdHlcIiB2YWx1ZT0ke3RvZG9JdGVtLnByaW9yaXR5fT5cbiAgICAgIDxkYXRhbGlzdCBpZD1cIm1vZGFsLXByaW9yaXR5LXNlbGVjdGlvbnNcIj5cbiAgICAgICAgICA8b3B0aW9uIHZhbHVlPVwiSGlnaFwiPkhpZ2g8L29wdGlvbj5cbiAgICAgICAgICA8b3B0aW9uIHZhbHVlPVwiTWVkaXVtXCI+TWVkaXVtPC9vcHRpb24+XG4gICAgICAgICAgPG9wdGlvbiB2YWx1ZT1cIkxvd1wiPkxvdzwvb3B0aW9uPlxuICAgICAgPC9kYXRhbGlzdD48YnI+XG5cbiAgICAgIDxsYWJlbCBmb3I9XCJub3Rlc1wiPk5vdGVzOjwvbGFiZWw+XG4gICAgICA8dGV4dGFyZWEgaWQ9XCJub3Rlc1wiIG5hbWU9XCJub3Rlc1wiPiR7dG9kb0l0ZW0ubm90ZXN9PC90ZXh0YXJlYT48YnI+XG5cbiAgICAgIDxsYWJlbCBmb3I9XCJsaXN0XCI+TGlzdDo8L2xhYmVsPlxuICAgICAgPGlucHV0IGxpc3Q9XCJtb2RhbC1saXN0LXNlbGVjdGlvbnNcIiBpZD1cImxpc3RcIiBuYW1lPVwibGlzdFwiIHZhbHVlPSR7dG9kb0l0ZW0ubGlzdH0+XG4gICAgICA8ZGF0YWxpc3QgaWQ9XCJtb2RhbC1saXN0LXNlbGVjdGlvbnNcIj48L2RhdGFsaXN0Pjxicj5cblxuICAgICAgPGlucHV0IHR5cGU9XCJzdWJtaXRcIiB2YWx1ZT1cIkVkaXQgVG9kb1wiIGlkPVwic3VibWl0XCI+XG4gICAgYDtcblxuICBtb2RhbC5hcHBlbmRDaGlsZCh0b2RvRGF0YSk7XG4gIGxpc3RPcHRpb25zKFwiZWRpdFwiKTtcbn1cbiIsImltcG9ydCB7IGRlbGV0ZUxpc3RlbmVycyB9IGZyb20gXCIuL2RlbGV0ZVRvZG9cIjtcbmltcG9ydCB7IG1vZGFsTGlzdGVuZXJzIH0gZnJvbSBcIi4vbW9kYWxcIjtcblxuZXhwb3J0IHsgcmVuZGVyVG9kbyB9O1xuXG4vLyBDaGVjayBpZiBjb250ZW50IGRpdnMgZXhpc3RzLCBpZiBub3QgY3JlYXRlIHRoZW0uXG5mdW5jdGlvbiBlc3RhYmxpc2hDb250YWluZXJzKCkge1xuICBsZXQgdG9kb3NDb250YWluZXIgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInRvZG9zLWNvbnRhaW5lclwiKTtcbiAgbGV0IGxpc3RDb250YWluZXIgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImxpc3QtY29udGFpbmVyXCIpO1xuXG4gIGlmICghdG9kb3NDb250YWluZXIpIHtcbiAgICB0b2Rvc0NvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgdG9kb3NDb250YWluZXIuaWQgPSBcInRvZG9zLWNvbnRhaW5lclwiO1xuICB9XG5cbiAgaWYgKCFsaXN0Q29udGFpbmVyKSB7XG4gICAgbGlzdENvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgbGlzdENvbnRhaW5lci5pZCA9IFwibGlzdC1jb250YWluZXJcIjtcbiAgfVxuXG4gIHJldHVybiBbdG9kb3NDb250YWluZXIsIGxpc3RDb250YWluZXJdO1xufVxuXG5mdW5jdGlvbiByZW5kZXJUb2RvKGkgPSAwKSB7XG4gIGNvbnN0IGJvZHkgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiYm9keVwiKTtcbiAgY29uc3Qgc2lkZWJhckNvbnRhaW5lciA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwic2lkZWJhclwiKTtcbiAgY29uc3QgW3RvZG9zQ29udGFpbmVyLCBsaXN0Q29udGFpbmVyXSA9IGVzdGFibGlzaENvbnRhaW5lcnMoKTtcblxuICBmb3IgKGk7IGkgPCB3aW5kb3cubG9jYWxTdG9yYWdlLmxlbmd0aDsgaSsrKSB7XG4gICAgbGV0IHRvZG9JdGVtID0gSlNPTi5wYXJzZSh3aW5kb3cubG9jYWxTdG9yYWdlLmdldEl0ZW0oaS50b1N0cmluZygpKSk7XG5cbiAgICBpZiAodG9kb0l0ZW0uZGVsZXRlZCA9PT0gXCJkZWxldGVkXCIpIHtcbiAgICAgIGNvbnRpbnVlO1xuICAgIH1cblxuICAgIGxldCBuZXdUb2RvID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICBuZXdUb2RvLmNsYXNzTGlzdC5hZGQoXCJ0b2RvLWl0ZW1cIik7XG4gICAgLy8gQXR0YWNoIHRoZSB0b2RvIGl0ZW0ncyBrZXkgZm9yIGxvb2t1cHMuXG4gICAgbmV3VG9kby5pZCA9IGk7XG5cbiAgICAvLyBDcmVhdGUgY2hlY2tib3ggYW5kIGVuc3VyZSBpdCBpcyBtYXJrZWQgaWYgdGhlIHRvZG8gaXMgY29tcGxldGVkLlxuICAgIGxldCBjaGVja0JveCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJpbnB1dFwiKTtcbiAgICBjaGVja0JveC50eXBlID0gXCJjaGVja2JveFwiO1xuICAgIGNoZWNrQm94LmNsYXNzTGlzdC5hZGQoXCJjaGVja2JveFwiKTtcbiAgICBpZiAodG9kb0l0ZW0uY29tcGxldGVkKSB7XG4gICAgICBjaGVja0JveC5jaGVja2VkID0gdHJ1ZTtcbiAgICAgIG5ld1RvZG8uY2xhc3NMaXN0LmFkZChcInRvZG8tY29tcGxldGVcIik7XG4gICAgfVxuXG4gICAgLy8gQWRkIHRvZG8gaW5mbyB0byBwYWdlLlxuICAgIGNvbnN0IHRpdGxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInBcIik7XG4gICAgY29uc3QgZHVlRGF0ZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJwXCIpO1xuICAgIGNvbnN0IHByaW9yaXR5ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInBcIik7XG5cbiAgICB0aXRsZS50ZXh0Q29udGVudCA9IHRvZG9JdGVtLnRpdGxlO1xuICAgIGR1ZURhdGUudGV4dENvbnRlbnQgPSB0b2RvSXRlbS5kdWVEYXRlO1xuICAgIHByaW9yaXR5LnRleHRDb250ZW50ID0gdG9kb0l0ZW0ucHJpb3JpdHk7XG5cbiAgICAvLyBBZGQgY2xhc3MgZm9yIHByaW9yaXR5LlxuICAgIHByaW9yaXR5LmNsYXNzTGlzdC5hZGQoYHByaW9yaXR5LSR7dG9kb0l0ZW0ucHJpb3JpdHkudG9Mb3dlckNhc2UoKX1gKTtcblxuICAgIC8vIENyZWF0ZSB2aWV3IC8gZWRpdCBidXR0b24uXG4gICAgbGV0IGVkaXRCdXR0b24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiYnV0dG9uXCIpO1xuICAgIGVkaXRCdXR0b24uY2xhc3NMaXN0LmFkZChcImVkaXQtYnRuXCIpO1xuICAgIGVkaXRCdXR0b24uaW5uZXJIVE1MID0gJzxpbWcgc3JjPVwiLi4vZGlzdC9hc3NldHMvZWRpdC1pY29uLnBuZ1wiIGNsYXNzPVwiZWRpdC1idG5cIi8+JztcblxuICAgIC8vIENyZWF0ZSBkZWxldGUgYnV0dG9uLlxuICAgIGxldCBkZWxldGVCdXR0b24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiYnV0dG9uXCIpO1xuICAgIGRlbGV0ZUJ1dHRvbi5jbGFzc0xpc3QuYWRkKFwiZGVsZXRlLWJ0blwiKTtcbiAgICBkZWxldGVCdXR0b24uaW5uZXJIVE1MID0gJzxpbWcgc3JjPVwiLi4vZGlzdC9hc3NldHMvZGVsZXRlLWljb24ucG5nXCIgY2xhc3M9XCJkZWxldGUtYnRuXCIvPic7XG5cbiAgICBuZXdUb2RvLmFwcGVuZChjaGVja0JveCwgdGl0bGUsIGR1ZURhdGUsIHByaW9yaXR5LCBlZGl0QnV0dG9uLCBkZWxldGVCdXR0b24pO1xuICAgIHRvZG9zQ29udGFpbmVyLmFwcGVuZENoaWxkKG5ld1RvZG8pO1xuICB9XG4gIGJvZHkuYXBwZW5kQ2hpbGQodG9kb3NDb250YWluZXIpO1xuICByZW5kZXJMaXN0cyhsaXN0Q29udGFpbmVyLCBzaWRlYmFyQ29udGFpbmVyKTtcblxuICAvLyBFbnN1cmUgb25jbGljayBsaXN0ZW5lcnMgYXJlIGFkZGVkIHRvIGVkaXQgJiBkZWxldGUgYnV0dG9ucy5cbiAgZGVsZXRlTGlzdGVuZXJzKCk7XG4gIG1vZGFsTGlzdGVuZXJzKCk7XG59XG5cbmZ1bmN0aW9uIHJlbmRlckxpc3RzKGxpc3RDb250YWluZXIsIHNpZGViYXJDb250YWluZXIpIHtcbiAgLy8gUmVtb3ZlIGNoaWxkcmVuIGZyb20gdGhlIGxpc3QgY29udGFpbmVyIGlmIHRoZXkgZXhpc3QuXG4gIGlmIChsaXN0Q29udGFpbmVyLmNoaWxkcmVuLmxlbmd0aCA+IDApIHtcbiAgICB3aGlsZSAobGlzdENvbnRhaW5lci5maXJzdENoaWxkKSB7XG4gICAgICBsaXN0Q29udGFpbmVyLnJlbW92ZUNoaWxkKGxpc3RDb250YWluZXIuZmlyc3RDaGlsZCk7XG4gICAgfVxuICB9XG5cbiAgLy8gU2V0IHRpdGxlLlxuICBsZXQgbGlzdFRpdGxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImgyXCIpO1xuICBsaXN0VGl0bGUudGV4dENvbnRlbnQgPSBcIkxpc3RzXCI7XG4gIGxpc3RDb250YWluZXIuYXBwZW5kQ2hpbGQobGlzdFRpdGxlKTtcblxuICAvLyBDcmVhdGUgaGlkZSBjb21wbGV0ZWQgYnV0dG9uLlxuICBsZXQgaGlkZUNvbXBsZXRlZEJ1dHRvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJidXR0b25cIik7XG4gIGhpZGVDb21wbGV0ZWRCdXR0b24uaWQgPSBcImhpZGVDb21wbGV0ZWRcIjtcbiAgaGlkZUNvbXBsZXRlZEJ1dHRvbi50ZXh0Q29udGVudCA9IFwiSGlkZSBDb21wbGV0ZWRcIjtcblxuICAvLyBDcmVhdGUgYSBoaWRkZW4gYnV0dG9uIHRvIHNob3cgYWxsIHRvZG9zIGlmIGZpbHRlcmluZyBieSBsaXN0LlxuICBjb25zdCBzaG93QWxsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImJ1dHRvblwiKTtcbiAgc2hvd0FsbC50ZXh0Q29udGVudCA9IFwiU2hvdyBBbGxcIjtcbiAgc2hvd0FsbC5pZCA9IFwic2hvd0FsbFwiO1xuICBzaG93QWxsLmNsYXNzTGlzdC5hZGQoXCJsaXN0XCIpO1xuICBzaG93QWxsLnN0eWxlLmRpc3BsYXkgPSBcIm5vbmVcIjtcblxuICAvLyBDb2xsZWN0IGxpc3RzIGZyb20gYWxsIHRvZG8gaXRlbXMgaW4gbG9jYWwgc3RvcmFnZS5cbiAgbGV0IGxpc3RzID0gW107XG4gIGZvciAobGV0IGkgPSAwOyBpIDwgd2luZG93LmxvY2FsU3RvcmFnZS5sZW5ndGg7IGkrKykge1xuICAgIGxldCB0b2RvSXRlbSA9IEpTT04ucGFyc2Uod2luZG93LmxvY2FsU3RvcmFnZS5nZXRJdGVtKGkudG9TdHJpbmcoKSkpO1xuICAgIGxpc3RzLnB1c2godG9kb0l0ZW0ubGlzdCk7XG4gIH1cblxuICAvLyBDb2xsZWN0IGxpc3RzIGZyb20gZm9ybSBvcHRpb25zLlxuICBjb25zdCBsaXN0T3B0aW9ucyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoXCIubGlzdC1vcHRpb25zXCIpO1xuICBsaXN0T3B0aW9ucy5mb3JFYWNoKChvcHRpb24pID0+IHtcbiAgICBsaXN0cy5wdXNoKG9wdGlvbi50ZXh0Q29udGVudCk7XG4gIH0pXG5cbiAgLy8gUmVtb3ZlIGR1cGxpY2F0ZXMgJiBlbXB0eSBzdHJpbmdzLlxuICBsZXQgY2xlYW5lZExpc3RzID0gWy4uLm5ldyBTZXQobGlzdHMuZmlsdGVyKGxpc3QgPT4gbGlzdCkpXTtcblxuICAvLyBBZGQgY2xlYW5lZCB1cCBsaXN0cyB0byBwYWdlLlxuICBjbGVhbmVkTGlzdHMuZm9yRWFjaCgobGlzdCkgPT4ge1xuICAgIGNvbnN0IGxpc3RFbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImFcIik7XG4gICAgbGlzdEVsZW1lbnQuY2xhc3NMaXN0LmFkZChcImxpc3RcIik7XG4gICAgbGlzdEVsZW1lbnQudGV4dENvbnRlbnQgPSBsaXN0O1xuICAgIGxpc3RDb250YWluZXIuYXBwZW5kQ2hpbGQobGlzdEVsZW1lbnQpO1xuICB9KTtcbiAgbGlzdENvbnRhaW5lci5hcHBlbmQoc2hvd0FsbCwgaGlkZUNvbXBsZXRlZEJ1dHRvbik7XG4gIHNpZGViYXJDb250YWluZXIuYXBwZW5kQ2hpbGQobGlzdENvbnRhaW5lcik7XG59XG4iLCJleHBvcnQgeyBmaWx0ZXJMaXN0ZW5lcnMgfTtcblxuZnVuY3Rpb24gZmlsdGVyVG9kb3MoZmlsdGVyKSB7XG4gIC8vIFJldmVhbCAnU2hvdyBBbGwnIGJ1dHRvbi5cbiAgY29uc3Qgc2hvd0FsbCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdzaG93QWxsJyk7XG4gIHNob3dBbGwuc3R5bGUuZGlzcGxheSA9IFwiXCI7XG5cbiAgLy8gRmlsdGVyIHRvZG9zIGJ5IGxpc3QuXG4gIGZvciAobGV0IGkgPSAwOyBpIDwgd2luZG93LmxvY2FsU3RvcmFnZS5sZW5ndGg7IGkrKykge1xuICAgIGxldCB0b2RvSXRlbSA9IEpTT04ucGFyc2Uod2luZG93LmxvY2FsU3RvcmFnZS5nZXRJdGVtKGkudG9TdHJpbmcoKSkpO1xuXG4gICAgLy8gZmluZCB0aGUgZGl2IGNvbnRhaW5pbmcgdGhpcyB0b2RvIGl0ZW0uXG4gICAgbGV0IHRvZG9EaXYgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChpKTtcblxuICAgIC8vIGlnbm9yZSBkZWxldGVkIHRvZG8gaXRlbXMuXG4gICAgaWYgKHRvZG9JdGVtLmRlbGV0ZWQgPT09IFwiZGVsZXRlZFwiKSB7XG4gICAgICBjb250aW51ZTtcbiAgICAvLyBpZiAnc2hvdyBhbGwnIGlzIGNsaWNrZWQsIHJlbW92ZSBhbnkgaGlkZGVuIGF0dHJpYnV0ZXMgYW5kIG1vdmUgdG8gbmV4dC5cbiAgICB9IGVsc2UgaWYgKGZpbHRlciA9PT0gXCJTaG93IEFsbFwiKSB7XG4gICAgICB0b2RvRGl2LnN0eWxlLmRpc3BsYXkgPSBcIlwiO1xuICAgICAgLy8gcmVoaWRlIHNob3cgYWxsIGJ1dHRvbi5cbiAgICAgIHNob3dBbGwuc3R5bGUuZGlzcGxheSA9IFwibm9uZVwiO1xuICAgICAgY29udGludWU7XG4gICAgLy8gaGlkZSBjb21wbGV0ZWQgaXRlbXNcbiAgICB9IGVsc2UgaWYgKGZpbHRlciA9PT0gXCJIaWRlIENvbXBsZXRlZFwiKSB7XG4gICAgICBpZiAodG9kb0l0ZW0uY29tcGxldGVkID09PSB0cnVlKSB7XG4gICAgICAgIHRvZG9EaXYuc3R5bGUuZGlzcGxheSA9IFwibm9uZVwiO1xuICAgICAgfVxuICAgIC8vIGhpZGUgdGhlIGl0ZW0gaWYgbGlzdCBkb2Vzbid0IG1hdGNoLlxuICAgIH0gZWxzZSBpZiAodG9kb0l0ZW0ubGlzdCAhPT0gZmlsdGVyKSB7XG4gICAgICB0b2RvRGl2LnN0eWxlLmRpc3BsYXkgPSBcIm5vbmVcIjtcbiAgICAvLyBzaG93IGl0ZW0gaWYgbGlzdCBtYXRjaGVzLlxuICAgIH0gZWxzZSB7XG4gICAgICB0b2RvRGl2LnN0eWxlLmRpc3BsYXkgPSBcIlwiO1xuICAgIH1cbiAgfVxufVxuXG5mdW5jdGlvbiBmaWx0ZXJMaXN0ZW5lcnMoKSB7XG4gIC8vIExpc3RlbiBmb3IgbGlzdCBmaWx0ZXJzLlxuICBsZXQgbGlzdExpbmtzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChcIi5saXN0XCIpO1xuXG4gIGxpc3RMaW5rcy5mb3JFYWNoKChsaXN0KSA9PiB7XG4gICAgbGlzdC5vbmNsaWNrID0gKCkgPT4ge1xuICAgICAgZmlsdGVyVG9kb3MobGlzdC50ZXh0Q29udGVudCk7XG4gICAgfVxuICB9KVxuXG4gIC8vIExpc3RlbiBmb3IgY29tcGxldGVkIGZpbHRlcnMuXG4gIGxldCBjb21wbGV0ZWRCdXR0b24gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImhpZGVDb21wbGV0ZWRcIilcbiAgY29tcGxldGVkQnV0dG9uLm9uY2xpY2sgPSAoKSA9PiB7XG4gICAgZmlsdGVyVG9kb3MoY29tcGxldGVkQnV0dG9uLnRleHRDb250ZW50KTtcbiAgfVxufVxuIiwiZXhwb3J0IHsgcmVuZGVyVG9kb0Zvcm0sIGxpc3RPcHRpb25zIH07XG5pbXBvcnQgeyByZW5kZXJUb2RvIH0gZnJvbSBcIi4vdG9kb0Rpc3BsYXkuanNcIjtcblxuY2xhc3MgdG9kbyB7XG4gIGNvbnN0cnVjdG9yKHRpdGxlLCBkdWVEYXRlLCBwcmlvcml0eSwgbm90ZXMsIGxpc3QgPSBcImRlZmF1bHRcIikge1xuICAgIHRoaXMudGl0bGUgPSB0aXRsZTtcbiAgICB0aGlzLmR1ZURhdGUgPSBkdWVEYXRlO1xuICAgIHRoaXMucHJpb3JpdHkgPSBwcmlvcml0eTtcbiAgICB0aGlzLm5vdGVzID0gbm90ZXM7XG4gICAgdGhpcy5saXN0ID0gbGlzdDtcbiAgICB0aGlzLmNvbXBsZXRlZCA9IGZhbHNlO1xuICB9XG59XG5cbmZ1bmN0aW9uIHJlbmRlclRvZG9Gb3JtKCkge1xuICBjb25zdCBib2R5ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcImJvZHlcIik7XG5cbiAgY29uc3Qgc2lkZWJhckNvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gIHNpZGViYXJDb250YWluZXIuaWQgPSBcInNpZGViYXJcIjtcblxuICBjb25zdCBmb3JtID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImZvcm1cIik7XG4gIGZvcm0uYWRkRXZlbnRMaXN0ZW5lcihcInN1Ym1pdFwiLCBmdW5jdGlvbiAoZXZlbnQpIHtcbiAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuXG4gICAgY29uc3QgdGl0bGUgPSBmb3JtLmVsZW1lbnRzLnRpdGxlLnZhbHVlO1xuICAgIGNvbnN0IGR1ZURhdGUgPSBmb3JtLmVsZW1lbnRzLmR1ZURhdGUudmFsdWU7XG4gICAgY29uc3QgcHJpb3JpdHkgPSBmb3JtLmVsZW1lbnRzLnByaW9yaXR5LnZhbHVlO1xuICAgIGNvbnN0IG5vdGVzID0gZm9ybS5lbGVtZW50cy5ub3Rlcy52YWx1ZTtcbiAgICBjb25zdCBsaXN0ID0gZm9ybS5lbGVtZW50cy5saXN0LnZhbHVlO1xuXG4gICAgY29uc3QgbmV3VG9kbyA9IG5ldyB0b2RvKHRpdGxlLCBkdWVEYXRlLCBwcmlvcml0eSwgbm90ZXMsIGxpc3QpO1xuXG4gICAgLy8gUmVzZXQgdGhlIGZvcm0gYWZ0ZXIgc3VibWlzc2lvblxuICAgIGZvcm0ucmVzZXQoKTtcblxuICAgIC8vIFNlbmQgdG9kbyBvYmplY3QgdG8gbG9jYWxzdG9yYWdlLlxuICAgIHNlbmRUb1N0b3JhZ2UoSlNPTi5zdHJpbmdpZnkobmV3VG9kbykpO1xuXG4gICAgLy8gUmVuZGVyIG9ubHkgdGhlIG5ld2x5IGNyZWF0ZWQgdG9kby5cbiAgICByZW5kZXJUb2RvKHdpbmRvdy5sb2NhbFN0b3JhZ2UubGVuZ3RoIC0gMSk7XG5cbiAgfSk7XG5cbiAgZm9ybS5pbm5lckhUTUwgPSBgXG4gICAgICA8bGFiZWwgZm9yPVwidGl0bGVcIj5UaXRsZTo8L2xhYmVsPlxuICAgICAgPGlucHV0IHR5cGU9XCJ0ZXh0XCIgaWQ9XCJ0aXRsZVwiIG5hbWU9XCJ0aXRsZVwiIHJlcXVpcmVkPjxicj5cblxuICAgICAgPGxhYmVsIGZvcj1cImR1ZS1kYXRlXCI+RHVlIERhdGU6PC9sYWJlbD5cbiAgICAgIDxpbnB1dCB0eXBlPVwiZGF0ZVwiIGlkPVwiZHVlLWRhdGVcIiBuYW1lPVwiZHVlRGF0ZVwiPjxicj5cblxuICAgICAgPGxhYmVsIGZvcj1cInByaW9yaXR5XCI+UHJpb3JpdHk6PC9sYWJlbD5cbiAgICAgIDxzZWxlY3QgaWQ9XCJwcmlvcml0eVwiIG5hbWU9XCJwcmlvcml0eVwiPlxuICAgICAgICAgIDxvcHRpb24gdmFsdWU9XCJIaWdoXCI+SGlnaDwvb3B0aW9uPlxuICAgICAgICAgIDxvcHRpb24gdmFsdWU9XCJNZWRpdW1cIiBzZWxlY3RlZD5NZWRpdW08L29wdGlvbj5cbiAgICAgICAgICA8b3B0aW9uIHZhbHVlPVwiTG93XCI+TG93PC9vcHRpb24+XG4gICAgICA8L3NlbGVjdD48YnI+XG5cbiAgICAgIDxsYWJlbCBmb3I9XCJub3Rlc1wiPk5vdGVzOjwvbGFiZWw+XG4gICAgICA8dGV4dGFyZWEgaWQ9XCJub3Rlc1wiIG5hbWU9XCJub3Rlc1wiPjwvdGV4dGFyZWE+PGJyPlxuXG4gICAgICA8bGFiZWwgZm9yPVwibGlzdFwiPkxpc3Q6PC9sYWJlbD5cbiAgICAgIDxpbnB1dCBsaXN0PVwibGlzdC1zZWxlY3Rpb25zXCIgaWQ9XCJsaXN0XCIgbmFtZT1cImxpc3RcIi8+XG4gICAgICA8ZGF0YWxpc3QgaWQ9XCJsaXN0LXNlbGVjdGlvbnNcIj48L2RhdGFsaXN0Pjxicj5cblxuICAgICAgPGxhYmVsIGZvcj1cInN1Ym1pdFwiPjwvbGFiZWw+XG4gICAgICA8aW5wdXQgdHlwZT1cInN1Ym1pdFwiIHZhbHVlPVwiQ3JlYXRlIFRvZG9cIiBpZD1cInN1Ym1pdFwiPlxuICBgO1xuXG4gIHNpZGViYXJDb250YWluZXIuYXBwZW5kQ2hpbGQoZm9ybSk7XG4gIGJvZHkuYXBwZW5kQ2hpbGQoc2lkZWJhckNvbnRhaW5lcik7XG59XG5cbmZ1bmN0aW9uIHNlbmRUb1N0b3JhZ2UodG9kb0l0ZW0pIHtcbiAgd2luZG93LmxvY2FsU3RvcmFnZS5zZXRJdGVtKHdpbmRvdy5sb2NhbFN0b3JhZ2UubGVuZ3RoLCB0b2RvSXRlbSk7XG59O1xuXG5mdW5jdGlvbiBsaXN0T3B0aW9ucyhlZGl0PWZhbHNlKSB7XG4gIGNvbnN0IGxpc3RTZWxlY3RvciA9IGVkaXQgPT09IFwiZWRpdFwiID8gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJtb2RhbC1saXN0LXNlbGVjdGlvbnNcIikgOiBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImxpc3Qtc2VsZWN0aW9uc1wiKTtcblxuICAvLyBDb2xsZWN0IGxpc3RzIGZyb20gYWxsIHRvZG8gaXRlbXMgaW4gbG9jYWwgc3RvcmFnZS5cbiAgbGV0IGxpc3RzID0gW107XG4gIGZvciAobGV0IGkgPSAwOyBpIDwgd2luZG93LmxvY2FsU3RvcmFnZS5sZW5ndGg7IGkrKykge1xuICAgIGxldCB0b2RvSXRlbSA9IEpTT04ucGFyc2Uod2luZG93LmxvY2FsU3RvcmFnZS5nZXRJdGVtKGkudG9TdHJpbmcoKSkpO1xuICAgIGxpc3RzLnB1c2godG9kb0l0ZW0ubGlzdCk7XG4gIH1cblxuICAvLyBSZW1vdmUgZHVwbGljYXRlcyAmIGVtcHR5IHN0cmluZ3MuXG4gIGxldCBjbGVhbmVkTGlzdHMgPSBbLi4ubmV3IFNldChsaXN0cy5maWx0ZXIobGlzdCA9PiBsaXN0KSldO1xuXG4gIC8vIFJlbW92ZSBhbnkgZXhpc3RpbmcgY2hpbGRyZW4gdG8gcHJldmVudCBkdXBsaWNhdGVzLlxuICBpZiAobGlzdFNlbGVjdG9yLmNoaWxkcmVuLmxlbmd0aCA+IDApIHtcbiAgICB3aGlsZSAobGlzdFNlbGVjdG9yLmZpcnN0Q2hpbGQpIHtcbiAgICAgIGxpc3RTZWxlY3Rvci5yZW1vdmVDaGlsZChsaXN0U2VsZWN0b3IuZmlyc3RDaGlsZCk7XG4gICAgfVxuICB9XG5cbiAgLy8gQWRkIG9wdGlvbnMgdG8gbGlzdCBzZWxlY3Rvciwgc2V0IHRvICdkZWZhdWx0JyBpZiBubyBsaXN0cyBjcmVhdGVkIHlldC5cbiAgaWYgKGNsZWFuZWRMaXN0cy5sZW5ndGggPT09IDApIHtcbiAgICBsZXQgb3B0aW9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcIm9wdGlvblwiKTtcbiAgICAvLyBvcHRpb24udGV4dENvbnRlbnQgPSBcIkRlZmF1bHRcIjtcbiAgICBvcHRpb24udmFsdWUgPSBcIkRlZmF1bHRcIjtcbiAgICBvcHRpb24uY2xhc3NMaXN0LmFkZChcImxpc3Qtb3B0aW9uc1wiKTtcbiAgICBsaXN0U2VsZWN0b3IuYXBwZW5kQ2hpbGQob3B0aW9uKTtcbiAgfSBlbHNlIHtcbiAgICBjbGVhbmVkTGlzdHMuZm9yRWFjaChsaXN0ID0+IHtcbiAgICAgIGxldCBvcHRpb24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwib3B0aW9uXCIpO1xuICAgICAgb3B0aW9uLnRleHRDb250ZW50ID0gbGlzdDtcbiAgICAgIG9wdGlvbi52YWx1ZSA9IGxpc3Q7XG4gICAgICBvcHRpb24uY2xhc3NMaXN0LmFkZChcImxpc3Qtb3B0aW9uc1wiKTtcbiAgICAgIGxpc3RTZWxlY3Rvci5hcHBlbmRDaGlsZChvcHRpb24pO1xuICAgIH0pXG4gIH1cbn1cbiIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0aWQ6IG1vZHVsZUlkLFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4iLCIvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuX193ZWJwYWNrX3JlcXVpcmVfXy5uID0gKG1vZHVsZSkgPT4ge1xuXHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cblx0XHQoKSA9PiAobW9kdWxlWydkZWZhdWx0J10pIDpcblx0XHQoKSA9PiAobW9kdWxlKTtcblx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgeyBhOiBnZXR0ZXIgfSk7XG5cdHJldHVybiBnZXR0ZXI7XG59OyIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm5jID0gdW5kZWZpbmVkOyIsImltcG9ydCB7cmVuZGVyVG9kb30gZnJvbSBcIi4vdG9kb0Rpc3BsYXkuanNcIjtcbmltcG9ydCB7cmVuZGVyVG9kb0Zvcm0sIGxpc3RPcHRpb25zIH0gZnJvbSBcIi4vdG9kb0Zvcm0uanNcIjtcbmltcG9ydCBjc3MgZnJvbSBcIi4uL2Rpc3QvYXNzZXRzL3N0eWxlLmNzc1wiO1xuaW1wb3J0IGNoZWNrYm94TGlzdGVuZXJzIGZyb20gXCIuL2NoZWNrQm94LmpzXCI7XG5pbXBvcnQgeyBkZWxldGVMaXN0ZW5lcnMgfSBmcm9tIFwiLi9kZWxldGVUb2RvLmpzXCI7XG5pbXBvcnQgeyBmaWx0ZXJMaXN0ZW5lcnMgfSBmcm9tIFwiLi90b2RvRmlsdGVyLmpzXCI7XG5pbXBvcnQgeyByZW5kZXJNb2RhbCwgbW9kYWxMaXN0ZW5lcnMgfSBmcm9tIFwiLi9tb2RhbC5qc1wiO1xuXG5yZW5kZXJUb2RvRm9ybSgpO1xucmVuZGVyVG9kbygpO1xucmVuZGVyTW9kYWwoKTtcbmNoZWNrYm94TGlzdGVuZXJzKCk7XG5tb2RhbExpc3RlbmVycygpO1xuZGVsZXRlTGlzdGVuZXJzKCk7XG5maWx0ZXJMaXN0ZW5lcnMoKTtcbmxpc3RPcHRpb25zKCk7XG5cbi8vIEZvciB0ZXN0aW5nIHB1cnBvc2VzIG9ubHksIGNsZWFyIGRhdGEuXG5sZXQgY2xlYXJCdXR0b24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiYnV0dG9uXCIpO1xuY2xlYXJCdXR0b24udGV4dENvbnRlbnQgPSBcIkNsZWFyIERhdGFcIjtcbmRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCJib2R5XCIpLmFwcGVuZENoaWxkKGNsZWFyQnV0dG9uKTtcblxuY2xlYXJCdXR0b24ub25jbGljayA9ICgpID0+IHtcbiAgd2luZG93LmxvY2FsU3RvcmFnZS5jbGVhcigpO1xuICBsb2NhdGlvbi5yZWxvYWQoKTtcbn1cbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==