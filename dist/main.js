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
  background-color: aliceblue;
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
.list:hover {
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
`, "",{"version":3,"sources":["webpack://./dist/assets/style.css"],"names":[],"mappings":"AAAA;EACE,2BAA2B;EAC3B,aAAa;EACb,8BAA8B;EAC9B,4BAA4B;AAC9B;;AAEA;EACE,aAAa;EACb,8BAA8B;EAC9B,aAAa;EACb,qBAAqB;AACvB;AACA;EACE,cAAc;AAChB;AACA;EACE,uBAAuB;AACzB;;AAEA;EACE,WAAW;EACX,uBAAuB;;AAEzB;;AAEA;EACE,cAAc;EACd,WAAW;EACX,sBAAsB;EACtB,uBAAuB;AACzB;;AAEA;EACE,cAAc;EACd,WAAW;EACX,iBAAiB;EACjB,kBAAkB;EAClB,aAAa;EACb,sBAAsB;AACxB;;AAEA;EACE,aAAa;EACb,QAAQ;EACR,qDAAqD;EACrD,mBAAmB;EACnB,mBAAmB;AACrB;;AAEA;EACE,YAAY;EACZ,WAAW;AACb;;AAEA;EACE,mBAAmB;EACnB,aAAa;EACb,sBAAsB;AACxB;;AAEA;EACE,qBAAqB;EACrB,0BAA0B;AAC5B;AACA;EACE,eAAe;AACjB;;AAEA;EACE,qBAAqB;EACrB,YAAY;AACd;;AAEA;EACE,iBAAiB;AACnB;;AAEA;EACE,aAAa;EACb,8BAA8B;EAC9B,mBAAmB;AACrB","sourcesContent":["body {\n  background-color: aliceblue;\n  display: grid;\n  grid-template-columns: 1fr 3fr;\n  grid-template-rows: 5rem 1fr;\n}\n\nform {\n  display: grid;\n  grid-template-columns: 1fr 2fr;\n  grid-gap: 3px;\n  /* flex-wrap: wrap; */\n}\nlabel {\n  grid-column: 1;\n}\n#submit {\n  grid-column: 1 / span 2;\n}\n\n#site-title {\n  grid-row: 1;\n  grid-column: 1 / span 2;\n\n}\n\n#sidebar {\n  grid-column: 1;\n  grid-row: 2;\n  max-width: fit-content;\n  max-height: fit-content;\n}\n\n#todos-container {\n  grid-column: 2;\n  grid-row: 2;\n  margin-left: 2rem;\n  margin-right: 2rem;\n  display: flex;\n  flex-direction: column;\n}\n\n.todo-item {\n  display: grid;\n  gap: 5px;\n  grid-template-columns: .25fr 1fr 1fr .5fr .25fr .25fr;\n  padding-bottom: 5px;\n  align-items: center;\n}\n\n.checkbox {\n  height: 25px;\n  width: 25px;\n}\n\n#list-container {\n  padding-top: 1.5rem;\n  display: flex;\n  flex-direction: column;\n}\n\n.list {\n  padding-bottom: .5rem;\n  text-decoration: underline;\n}\n.list:hover {\n  cursor: pointer;\n}\n\n#showAll {\n  text-decoration: none;\n  padding: 2px;\n}\n\n#new-list-form {\n  padding-top: 1rem;\n}\n\n#modal-header {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n}\n"],"sourceRoot":""}]);
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

function markBox(key) {
  let todoItem = JSON.parse(window.localStorage.getItem(key));

  if (todoItem.completed) {
    todoItem.completed = false;
  } else if (!todoItem.completed) {
    todoItem.completed = true;
  }
  window.localStorage.setItem(key, JSON.stringify(todoItem));
}

function checkboxListeners() {
  let checkBoxes = document.querySelectorAll("input[type='checkbox']");

  checkBoxes.forEach((checkbox) => {
    checkbox.onclick = () => {
      markBox(checkbox.parentElement.id)
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
      <select id="priority" name="priority" value=${todoItem.priority}>
          <option value="high">High</option>
          <option value="medium">Medium</option>
          <option value="low">Low</option>
      </select><br>

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
    }

    // Add todo info to page.
    const title = document.createElement("p");
    const dueDate = document.createElement("p");
    const priority = document.createElement("p");

    title.textContent = todoItem.title;
    dueDate.textContent = todoItem.dueDate;
    priority.textContent = todoItem.priority;

    // Create view / edit button.
    let editButton = document.createElement("button");
    editButton.classList.add("edit-btn");
    editButton.textContent = "✎";

    // Create delete button.
    let deleteButton = document.createElement("button");
    deleteButton.classList.add("delete-btn");
    deleteButton.textContent = "🗑";

    newTodo.append(checkBox, title, dueDate, priority, editButton, deleteButton);
    todosContainer.appendChild(newTodo);
  }
  body.appendChild(todosContainer);
  renderLists(listContainer, sidebarContainer);

  // Ensure onclick listeners are added to edit & delete buttons.
  (0,_deleteTodo__WEBPACK_IMPORTED_MODULE_0__.deleteListeners)();
  (0,_modal__WEBPACK_IMPORTED_MODULE_1__.modalListeners)();

  // For testing purposes only, clear data.
  let clearButton = document.createElement("button");
  clearButton.textContent = "Clear Data";
  body.appendChild(clearButton);

  clearButton.onclick = () => {
    window.localStorage.clear();
    location.reload();
  }
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
  listContainer.appendChild(showAll);
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
/* harmony export */   filterListeners: () => (/* binding */ filterListeners),
/* harmony export */   filterTodos: () => (/* binding */ filterTodos)
/* harmony export */ });


function filterTodos(list) {
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
    } else if (list === "Show All") {
      todoDiv.style.display = "";
      // rehide show all button.
      showAll.style.display = "none";
      continue;
    // hide the item if list doesn't match.
    } else if (todoItem.list !== list) {
      todoDiv.style.display = "none";
    // show item if list matches.
    } else {
      todoDiv.style.display = "";
    }
  }
}

function filterListeners() {
  let listLinks = document.querySelectorAll(".list");

  listLinks.forEach((list) => {
    list.onclick = () => {
      filterTodos(list.textContent);
    }
  })
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
          <option value="high">High</option>
          <option value="medium" selected>Medium</option>
          <option value="low">Low</option>
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

function renderNewListForm() {
  const sidebarContainer = document.getElementById("sidebar");
  const form = document.createElement("form");
  form.id = "new-list-form";

  form.addEventListener("submit", function (event) {
    event.preventDefault();

    const list = form.elements.new_list.value;

    // Reset the form after submission
    form.reset();

    // Send new list to options.
    listOptions(list);

  });

  form.innerHTML = `
      <label for="new_list">Title:</label>
      <input type="text" id="new_list" name="new_list" required><br>

      <label for"submit"></label>
      <input type="submit" value="New List" id="submit">
  `;

  sidebarContainer.appendChild(form);
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

})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUM2RztBQUNqQjtBQUM1Riw4QkFBOEIsbUZBQTJCLENBQUMsNEZBQXFDO0FBQy9GO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esc0JBQXNCO0FBQ3RCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTyx3RkFBd0YsWUFBWSxXQUFXLFlBQVksYUFBYSxPQUFPLEtBQUssVUFBVSxZQUFZLFdBQVcsWUFBWSxNQUFNLEtBQUssVUFBVSxNQUFNLEtBQUssWUFBWSxPQUFPLEtBQUssVUFBVSxhQUFhLE9BQU8sS0FBSyxVQUFVLFVBQVUsWUFBWSxhQUFhLE9BQU8sS0FBSyxVQUFVLFVBQVUsWUFBWSxhQUFhLFdBQVcsWUFBWSxPQUFPLEtBQUssVUFBVSxVQUFVLFlBQVksYUFBYSxhQUFhLE9BQU8sS0FBSyxVQUFVLFVBQVUsTUFBTSxLQUFLLFlBQVksV0FBVyxZQUFZLE9BQU8sS0FBSyxZQUFZLGFBQWEsTUFBTSxLQUFLLFVBQVUsT0FBTyxLQUFLLFlBQVksV0FBVyxNQUFNLEtBQUssWUFBWSxPQUFPLEtBQUssVUFBVSxZQUFZLGFBQWEsZ0NBQWdDLGdDQUFnQyxrQkFBa0IsbUNBQW1DLGlDQUFpQyxHQUFHLFVBQVUsa0JBQWtCLG1DQUFtQyxrQkFBa0Isd0JBQXdCLEtBQUssU0FBUyxtQkFBbUIsR0FBRyxXQUFXLDRCQUE0QixHQUFHLGlCQUFpQixnQkFBZ0IsNEJBQTRCLEtBQUssY0FBYyxtQkFBbUIsZ0JBQWdCLDJCQUEyQiw0QkFBNEIsR0FBRyxzQkFBc0IsbUJBQW1CLGdCQUFnQixzQkFBc0IsdUJBQXVCLGtCQUFrQiwyQkFBMkIsR0FBRyxnQkFBZ0Isa0JBQWtCLGFBQWEsMERBQTBELHdCQUF3Qix3QkFBd0IsR0FBRyxlQUFlLGlCQUFpQixnQkFBZ0IsR0FBRyxxQkFBcUIsd0JBQXdCLGtCQUFrQiwyQkFBMkIsR0FBRyxXQUFXLDBCQUEwQiwrQkFBK0IsR0FBRyxlQUFlLG9CQUFvQixHQUFHLGNBQWMsMEJBQTBCLGlCQUFpQixHQUFHLG9CQUFvQixzQkFBc0IsR0FBRyxtQkFBbUIsa0JBQWtCLG1DQUFtQyx3QkFBd0IsR0FBRyxxQkFBcUI7QUFDcCtEO0FBQ0EsaUVBQWUsdUJBQXVCLEVBQUM7Ozs7Ozs7Ozs7O0FDMUYxQjs7QUFFYjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EscURBQXFEO0FBQ3JEO0FBQ0E7QUFDQSxnREFBZ0Q7QUFDaEQ7QUFDQTtBQUNBLHFGQUFxRjtBQUNyRjtBQUNBO0FBQ0E7QUFDQSxxQkFBcUI7QUFDckI7QUFDQTtBQUNBLHFCQUFxQjtBQUNyQjtBQUNBO0FBQ0EscUJBQXFCO0FBQ3JCO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxzQkFBc0IsaUJBQWlCO0FBQ3ZDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHFCQUFxQixxQkFBcUI7QUFDMUM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxVQUFVO0FBQ1Ysc0ZBQXNGLHFCQUFxQjtBQUMzRztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxVQUFVO0FBQ1YsaURBQWlELHFCQUFxQjtBQUN0RTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxVQUFVO0FBQ1Ysc0RBQXNELHFCQUFxQjtBQUMzRTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7O0FDcEZhOztBQUViO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSx1REFBdUQsY0FBYztBQUNyRTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDZEEsTUFBa0c7QUFDbEcsTUFBd0Y7QUFDeEYsTUFBK0Y7QUFDL0YsTUFBa0g7QUFDbEgsTUFBMkc7QUFDM0csTUFBMkc7QUFDM0csTUFBc0c7QUFDdEc7QUFDQTs7QUFFQTs7QUFFQSw0QkFBNEIscUdBQW1CO0FBQy9DLHdCQUF3QixrSEFBYTs7QUFFckMsdUJBQXVCLHVHQUFhO0FBQ3BDO0FBQ0EsaUJBQWlCLCtGQUFNO0FBQ3ZCLDZCQUE2QixzR0FBa0I7O0FBRS9DLGFBQWEsMEdBQUcsQ0FBQyxzRkFBTzs7OztBQUlnRDtBQUN4RSxPQUFPLGlFQUFlLHNGQUFPLElBQUksc0ZBQU8sVUFBVSxzRkFBTyxtQkFBbUIsRUFBQzs7Ozs7Ozs7Ozs7QUMxQmhFOztBQUViO0FBQ0E7QUFDQTtBQUNBLGtCQUFrQix3QkFBd0I7QUFDMUM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxrQkFBa0IsaUJBQWlCO0FBQ25DO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsTUFBTTtBQUNOO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsTUFBTTtBQUNOO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxvQkFBb0IsNEJBQTRCO0FBQ2hEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxxQkFBcUIsNkJBQTZCO0FBQ2xEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7O0FDbkZhOztBQUViOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFFBQVE7QUFDUjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7OztBQ2pDYTs7QUFFYjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7O0FDVGE7O0FBRWI7QUFDQTtBQUNBLGNBQWMsS0FBd0MsR0FBRyxzQkFBaUIsR0FBRyxDQUFJO0FBQ2pGO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7QUNUYTs7QUFFYjtBQUNBO0FBQ0E7QUFDQTtBQUNBLGtEQUFrRDtBQUNsRDtBQUNBO0FBQ0EsMENBQTBDO0FBQzFDO0FBQ0E7QUFDQTtBQUNBLGlGQUFpRjtBQUNqRjtBQUNBO0FBQ0E7QUFDQSxhQUFhO0FBQ2I7QUFDQTtBQUNBLGFBQWE7QUFDYjtBQUNBO0FBQ0EsYUFBYTtBQUNiO0FBQ0E7QUFDQTtBQUNBLHlEQUF5RDtBQUN6RDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esa0NBQWtDO0FBQ2xDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7OztBQzVEYTs7QUFFYjtBQUNBO0FBQ0E7QUFDQTtBQUNBLElBQUk7QUFDSjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7Ozs7QUNiQSxpRUFBZSxpQkFBaUIsRUFBQzs7QUFFakM7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsSUFBSTtBQUNKO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDckJ1QztBQUNFOztBQUV6QztBQUNBLHFDQUFxQyxvQkFBb0I7O0FBRXpEOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEVBQUUsd0RBQVU7QUFDWjs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIOzs7Ozs7Ozs7Ozs7Ozs7OztBQ3pCc0M7QUFDdEMsQ0FBeUM7O0FBRXpDO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxHQUFHOztBQUVIO0FBQ0E7QUFDQSwwREFBMEQsZUFBZTs7QUFFekU7QUFDQSw4REFBOEQsaUJBQWlCOztBQUUvRTtBQUNBLG9EQUFvRCxrQkFBa0I7QUFDdEU7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSwwQ0FBMEMsZUFBZTs7QUFFekQ7QUFDQSx3RUFBd0UsY0FBYztBQUN0Rjs7QUFFQTtBQUNBOztBQUVBO0FBQ0EsRUFBRSxzREFBVztBQUNiOzs7Ozs7Ozs7Ozs7Ozs7OztBQzlGK0M7QUFDTjs7QUFFbkI7O0FBRXRCO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsVUFBVSxnQ0FBZ0M7QUFDMUM7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0EsRUFBRSw0REFBZTtBQUNqQixFQUFFLHNEQUFjOztBQUVoQjtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0Esa0JBQWtCLGdDQUFnQztBQUNsRDtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHOztBQUVIO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7Ozs7OztBQ3JJd0M7O0FBRXhDO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0Esa0JBQWtCLGdDQUFnQztBQUNsRDs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsTUFBTTtBQUNOO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxNQUFNO0FBQ047QUFDQTtBQUNBLE1BQU07QUFDTjtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIOzs7Ozs7Ozs7Ozs7Ozs7OztBQ3pDdUM7QUFDTzs7QUFFOUM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBLElBQUksMkRBQVU7O0FBRWQsR0FBRzs7QUFFSDtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0Esa0JBQWtCLGdDQUFnQztBQUNsRDtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxJQUFJO0FBQ0o7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUEsR0FBRzs7QUFFSDtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7Ozs7Ozs7OztVQzdJQTtVQUNBOztVQUVBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBOztVQUVBO1VBQ0E7O1VBRUE7VUFDQTtVQUNBOzs7OztXQ3RCQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EsaUNBQWlDLFdBQVc7V0FDNUM7V0FDQTs7Ozs7V0NQQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLHlDQUF5Qyx3Q0FBd0M7V0FDakY7V0FDQTtXQUNBOzs7OztXQ1BBOzs7OztXQ0FBO1dBQ0E7V0FDQTtXQUNBLHVEQUF1RCxpQkFBaUI7V0FDeEU7V0FDQSxnREFBZ0QsYUFBYTtXQUM3RDs7Ozs7V0NOQTs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDQTRDO0FBQ2U7QUFDaEI7QUFDRztBQUNJO0FBQ0E7QUFDTzs7QUFFekQsNERBQWM7QUFDZCwyREFBVTtBQUNWLHNEQUFXO0FBQ1gsd0RBQWlCO0FBQ2pCLHlEQUFjO0FBQ2QsK0RBQWU7QUFDZiwrREFBZTtBQUNmLHlEQUFXIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vanMtdG9kby8uL2Rpc3QvYXNzZXRzL3N0eWxlLmNzcyIsIndlYnBhY2s6Ly9qcy10b2RvLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qcyIsIndlYnBhY2s6Ly9qcy10b2RvLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanMiLCJ3ZWJwYWNrOi8vanMtdG9kby8uL2Rpc3QvYXNzZXRzL3N0eWxlLmNzcz81MmZhIiwid2VicGFjazovL2pzLXRvZG8vLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanMiLCJ3ZWJwYWNrOi8vanMtdG9kby8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanMiLCJ3ZWJwYWNrOi8vanMtdG9kby8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qcyIsIndlYnBhY2s6Ly9qcy10b2RvLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzIiwid2VicGFjazovL2pzLXRvZG8vLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qcyIsIndlYnBhY2s6Ly9qcy10b2RvLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanMiLCJ3ZWJwYWNrOi8vanMtdG9kby8uL3NyYy9jaGVja0JveC5qcyIsIndlYnBhY2s6Ly9qcy10b2RvLy4vc3JjL2RlbGV0ZVRvZG8uanMiLCJ3ZWJwYWNrOi8vanMtdG9kby8uL3NyYy9tb2RhbC5qcyIsIndlYnBhY2s6Ly9qcy10b2RvLy4vc3JjL3RvZG9EaXNwbGF5LmpzIiwid2VicGFjazovL2pzLXRvZG8vLi9zcmMvdG9kb0ZpbHRlci5qcyIsIndlYnBhY2s6Ly9qcy10b2RvLy4vc3JjL3RvZG9Gb3JtLmpzIiwid2VicGFjazovL2pzLXRvZG8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vanMtdG9kby93ZWJwYWNrL3J1bnRpbWUvY29tcGF0IGdldCBkZWZhdWx0IGV4cG9ydCIsIndlYnBhY2s6Ly9qcy10b2RvL3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly9qcy10b2RvL3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vanMtdG9kby93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL2pzLXRvZG8vd2VicGFjay9ydW50aW1lL25vbmNlIiwid2VicGFjazovL2pzLXRvZG8vLi9zcmMvaG9tZS5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBJbXBvcnRzXG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyBmcm9tIFwiLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gZnJvbSBcIi4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIjtcbnZhciBfX19DU1NfTE9BREVSX0VYUE9SVF9fXyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fKTtcbi8vIE1vZHVsZVxuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBgYm9keSB7XG4gIGJhY2tncm91bmQtY29sb3I6IGFsaWNlYmx1ZTtcbiAgZGlzcGxheTogZ3JpZDtcbiAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxZnIgM2ZyO1xuICBncmlkLXRlbXBsYXRlLXJvd3M6IDVyZW0gMWZyO1xufVxuXG5mb3JtIHtcbiAgZGlzcGxheTogZ3JpZDtcbiAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxZnIgMmZyO1xuICBncmlkLWdhcDogM3B4O1xuICAvKiBmbGV4LXdyYXA6IHdyYXA7ICovXG59XG5sYWJlbCB7XG4gIGdyaWQtY29sdW1uOiAxO1xufVxuI3N1Ym1pdCB7XG4gIGdyaWQtY29sdW1uOiAxIC8gc3BhbiAyO1xufVxuXG4jc2l0ZS10aXRsZSB7XG4gIGdyaWQtcm93OiAxO1xuICBncmlkLWNvbHVtbjogMSAvIHNwYW4gMjtcblxufVxuXG4jc2lkZWJhciB7XG4gIGdyaWQtY29sdW1uOiAxO1xuICBncmlkLXJvdzogMjtcbiAgbWF4LXdpZHRoOiBmaXQtY29udGVudDtcbiAgbWF4LWhlaWdodDogZml0LWNvbnRlbnQ7XG59XG5cbiN0b2Rvcy1jb250YWluZXIge1xuICBncmlkLWNvbHVtbjogMjtcbiAgZ3JpZC1yb3c6IDI7XG4gIG1hcmdpbi1sZWZ0OiAycmVtO1xuICBtYXJnaW4tcmlnaHQ6IDJyZW07XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG59XG5cbi50b2RvLWl0ZW0ge1xuICBkaXNwbGF5OiBncmlkO1xuICBnYXA6IDVweDtcbiAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAuMjVmciAxZnIgMWZyIC41ZnIgLjI1ZnIgLjI1ZnI7XG4gIHBhZGRpbmctYm90dG9tOiA1cHg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG59XG5cbi5jaGVja2JveCB7XG4gIGhlaWdodDogMjVweDtcbiAgd2lkdGg6IDI1cHg7XG59XG5cbiNsaXN0LWNvbnRhaW5lciB7XG4gIHBhZGRpbmctdG9wOiAxLjVyZW07XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG59XG5cbi5saXN0IHtcbiAgcGFkZGluZy1ib3R0b206IC41cmVtO1xuICB0ZXh0LWRlY29yYXRpb246IHVuZGVybGluZTtcbn1cbi5saXN0OmhvdmVyIHtcbiAgY3Vyc29yOiBwb2ludGVyO1xufVxuXG4jc2hvd0FsbCB7XG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbiAgcGFkZGluZzogMnB4O1xufVxuXG4jbmV3LWxpc3QtZm9ybSB7XG4gIHBhZGRpbmctdG9wOiAxcmVtO1xufVxuXG4jbW9kYWwtaGVhZGVyIHtcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xufVxuYCwgXCJcIix7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCJ3ZWJwYWNrOi8vLi9kaXN0L2Fzc2V0cy9zdHlsZS5jc3NcIl0sXCJuYW1lc1wiOltdLFwibWFwcGluZ3NcIjpcIkFBQUE7RUFDRSwyQkFBMkI7RUFDM0IsYUFBYTtFQUNiLDhCQUE4QjtFQUM5Qiw0QkFBNEI7QUFDOUI7O0FBRUE7RUFDRSxhQUFhO0VBQ2IsOEJBQThCO0VBQzlCLGFBQWE7RUFDYixxQkFBcUI7QUFDdkI7QUFDQTtFQUNFLGNBQWM7QUFDaEI7QUFDQTtFQUNFLHVCQUF1QjtBQUN6Qjs7QUFFQTtFQUNFLFdBQVc7RUFDWCx1QkFBdUI7O0FBRXpCOztBQUVBO0VBQ0UsY0FBYztFQUNkLFdBQVc7RUFDWCxzQkFBc0I7RUFDdEIsdUJBQXVCO0FBQ3pCOztBQUVBO0VBQ0UsY0FBYztFQUNkLFdBQVc7RUFDWCxpQkFBaUI7RUFDakIsa0JBQWtCO0VBQ2xCLGFBQWE7RUFDYixzQkFBc0I7QUFDeEI7O0FBRUE7RUFDRSxhQUFhO0VBQ2IsUUFBUTtFQUNSLHFEQUFxRDtFQUNyRCxtQkFBbUI7RUFDbkIsbUJBQW1CO0FBQ3JCOztBQUVBO0VBQ0UsWUFBWTtFQUNaLFdBQVc7QUFDYjs7QUFFQTtFQUNFLG1CQUFtQjtFQUNuQixhQUFhO0VBQ2Isc0JBQXNCO0FBQ3hCOztBQUVBO0VBQ0UscUJBQXFCO0VBQ3JCLDBCQUEwQjtBQUM1QjtBQUNBO0VBQ0UsZUFBZTtBQUNqQjs7QUFFQTtFQUNFLHFCQUFxQjtFQUNyQixZQUFZO0FBQ2Q7O0FBRUE7RUFDRSxpQkFBaUI7QUFDbkI7O0FBRUE7RUFDRSxhQUFhO0VBQ2IsOEJBQThCO0VBQzlCLG1CQUFtQjtBQUNyQlwiLFwic291cmNlc0NvbnRlbnRcIjpbXCJib2R5IHtcXG4gIGJhY2tncm91bmQtY29sb3I6IGFsaWNlYmx1ZTtcXG4gIGRpc3BsYXk6IGdyaWQ7XFxuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDFmciAzZnI7XFxuICBncmlkLXRlbXBsYXRlLXJvd3M6IDVyZW0gMWZyO1xcbn1cXG5cXG5mb3JtIHtcXG4gIGRpc3BsYXk6IGdyaWQ7XFxuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDFmciAyZnI7XFxuICBncmlkLWdhcDogM3B4O1xcbiAgLyogZmxleC13cmFwOiB3cmFwOyAqL1xcbn1cXG5sYWJlbCB7XFxuICBncmlkLWNvbHVtbjogMTtcXG59XFxuI3N1Ym1pdCB7XFxuICBncmlkLWNvbHVtbjogMSAvIHNwYW4gMjtcXG59XFxuXFxuI3NpdGUtdGl0bGUge1xcbiAgZ3JpZC1yb3c6IDE7XFxuICBncmlkLWNvbHVtbjogMSAvIHNwYW4gMjtcXG5cXG59XFxuXFxuI3NpZGViYXIge1xcbiAgZ3JpZC1jb2x1bW46IDE7XFxuICBncmlkLXJvdzogMjtcXG4gIG1heC13aWR0aDogZml0LWNvbnRlbnQ7XFxuICBtYXgtaGVpZ2h0OiBmaXQtY29udGVudDtcXG59XFxuXFxuI3RvZG9zLWNvbnRhaW5lciB7XFxuICBncmlkLWNvbHVtbjogMjtcXG4gIGdyaWQtcm93OiAyO1xcbiAgbWFyZ2luLWxlZnQ6IDJyZW07XFxuICBtYXJnaW4tcmlnaHQ6IDJyZW07XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG59XFxuXFxuLnRvZG8taXRlbSB7XFxuICBkaXNwbGF5OiBncmlkO1xcbiAgZ2FwOiA1cHg7XFxuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IC4yNWZyIDFmciAxZnIgLjVmciAuMjVmciAuMjVmcjtcXG4gIHBhZGRpbmctYm90dG9tOiA1cHg7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbn1cXG5cXG4uY2hlY2tib3gge1xcbiAgaGVpZ2h0OiAyNXB4O1xcbiAgd2lkdGg6IDI1cHg7XFxufVxcblxcbiNsaXN0LWNvbnRhaW5lciB7XFxuICBwYWRkaW5nLXRvcDogMS41cmVtO1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxufVxcblxcbi5saXN0IHtcXG4gIHBhZGRpbmctYm90dG9tOiAuNXJlbTtcXG4gIHRleHQtZGVjb3JhdGlvbjogdW5kZXJsaW5lO1xcbn1cXG4ubGlzdDpob3ZlciB7XFxuICBjdXJzb3I6IHBvaW50ZXI7XFxufVxcblxcbiNzaG93QWxsIHtcXG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcXG4gIHBhZGRpbmc6IDJweDtcXG59XFxuXFxuI25ldy1saXN0LWZvcm0ge1xcbiAgcGFkZGluZy10b3A6IDFyZW07XFxufVxcblxcbiNtb2RhbC1oZWFkZXIge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxufVxcblwiXSxcInNvdXJjZVJvb3RcIjpcIlwifV0pO1xuLy8gRXhwb3J0c1xuZXhwb3J0IGRlZmF1bHQgX19fQ1NTX0xPQURFUl9FWFBPUlRfX187XG4iLCJcInVzZSBzdHJpY3RcIjtcblxuLypcbiAgTUlUIExpY2Vuc2UgaHR0cDovL3d3dy5vcGVuc291cmNlLm9yZy9saWNlbnNlcy9taXQtbGljZW5zZS5waHBcbiAgQXV0aG9yIFRvYmlhcyBLb3BwZXJzIEBzb2tyYVxuKi9cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcpIHtcbiAgdmFyIGxpc3QgPSBbXTtcblxuICAvLyByZXR1cm4gdGhlIGxpc3Qgb2YgbW9kdWxlcyBhcyBjc3Mgc3RyaW5nXG4gIGxpc3QudG9TdHJpbmcgPSBmdW5jdGlvbiB0b1N0cmluZygpIHtcbiAgICByZXR1cm4gdGhpcy5tYXAoZnVuY3Rpb24gKGl0ZW0pIHtcbiAgICAgIHZhciBjb250ZW50ID0gXCJcIjtcbiAgICAgIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2YgaXRlbVs1XSAhPT0gXCJ1bmRlZmluZWRcIjtcbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKTtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIik7XG4gICAgICB9XG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKTtcbiAgICAgIH1cbiAgICAgIGNvbnRlbnQgKz0gY3NzV2l0aE1hcHBpbmdUb1N0cmluZyhpdGVtKTtcbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgcmV0dXJuIGNvbnRlbnQ7XG4gICAgfSkuam9pbihcIlwiKTtcbiAgfTtcblxuICAvLyBpbXBvcnQgYSBsaXN0IG9mIG1vZHVsZXMgaW50byB0aGUgbGlzdFxuICBsaXN0LmkgPSBmdW5jdGlvbiBpKG1vZHVsZXMsIG1lZGlhLCBkZWR1cGUsIHN1cHBvcnRzLCBsYXllcikge1xuICAgIGlmICh0eXBlb2YgbW9kdWxlcyA9PT0gXCJzdHJpbmdcIikge1xuICAgICAgbW9kdWxlcyA9IFtbbnVsbCwgbW9kdWxlcywgdW5kZWZpbmVkXV07XG4gICAgfVxuICAgIHZhciBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzID0ge307XG4gICAgaWYgKGRlZHVwZSkge1xuICAgICAgZm9yICh2YXIgayA9IDA7IGsgPCB0aGlzLmxlbmd0aDsgaysrKSB7XG4gICAgICAgIHZhciBpZCA9IHRoaXNba11bMF07XG4gICAgICAgIGlmIChpZCAhPSBudWxsKSB7XG4gICAgICAgICAgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpZF0gPSB0cnVlO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICAgIGZvciAodmFyIF9rID0gMDsgX2sgPCBtb2R1bGVzLmxlbmd0aDsgX2srKykge1xuICAgICAgdmFyIGl0ZW0gPSBbXS5jb25jYXQobW9kdWxlc1tfa10pO1xuICAgICAgaWYgKGRlZHVwZSAmJiBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2l0ZW1bMF1dKSB7XG4gICAgICAgIGNvbnRpbnVlO1xuICAgICAgfVxuICAgICAgaWYgKHR5cGVvZiBsYXllciAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICBpZiAodHlwZW9mIGl0ZW1bNV0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGlmIChtZWRpYSkge1xuICAgICAgICBpZiAoIWl0ZW1bMl0pIHtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBpZiAoc3VwcG9ydHMpIHtcbiAgICAgICAgaWYgKCFpdGVtWzRdKSB7XG4gICAgICAgICAgaXRlbVs0XSA9IFwiXCIuY29uY2F0KHN1cHBvcnRzKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNF0gPSBzdXBwb3J0cztcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgbGlzdC5wdXNoKGl0ZW0pO1xuICAgIH1cbiAgfTtcbiAgcmV0dXJuIGxpc3Q7XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChpdGVtKSB7XG4gIHZhciBjb250ZW50ID0gaXRlbVsxXTtcbiAgdmFyIGNzc01hcHBpbmcgPSBpdGVtWzNdO1xuICBpZiAoIWNzc01hcHBpbmcpIHtcbiAgICByZXR1cm4gY29udGVudDtcbiAgfVxuICBpZiAodHlwZW9mIGJ0b2EgPT09IFwiZnVuY3Rpb25cIikge1xuICAgIHZhciBiYXNlNjQgPSBidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShjc3NNYXBwaW5nKSkpKTtcbiAgICB2YXIgZGF0YSA9IFwic291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247Y2hhcnNldD11dGYtODtiYXNlNjQsXCIuY29uY2F0KGJhc2U2NCk7XG4gICAgdmFyIHNvdXJjZU1hcHBpbmcgPSBcIi8qIyBcIi5jb25jYXQoZGF0YSwgXCIgKi9cIik7XG4gICAgcmV0dXJuIFtjb250ZW50XS5jb25jYXQoW3NvdXJjZU1hcHBpbmddKS5qb2luKFwiXFxuXCIpO1xuICB9XG4gIHJldHVybiBbY29udGVudF0uam9pbihcIlxcblwiKTtcbn07IiwiXG4gICAgICBpbXBvcnQgQVBJIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzXCI7XG4gICAgICBpbXBvcnQgZG9tQVBJIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRGbiBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanNcIjtcbiAgICAgIGltcG9ydCBzZXRBdHRyaWJ1dGVzIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0U3R5bGVFbGVtZW50IGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzXCI7XG4gICAgICBpbXBvcnQgc3R5bGVUYWdUcmFuc2Zvcm1GbiBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzXCI7XG4gICAgICBpbXBvcnQgY29udGVudCwgKiBhcyBuYW1lZEV4cG9ydCBmcm9tIFwiISEuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3N0eWxlLmNzc1wiO1xuICAgICAgXG4gICAgICBcblxudmFyIG9wdGlvbnMgPSB7fTtcblxub3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybSA9IHN0eWxlVGFnVHJhbnNmb3JtRm47XG5vcHRpb25zLnNldEF0dHJpYnV0ZXMgPSBzZXRBdHRyaWJ1dGVzO1xuXG4gICAgICBvcHRpb25zLmluc2VydCA9IGluc2VydEZuLmJpbmQobnVsbCwgXCJoZWFkXCIpO1xuICAgIFxub3B0aW9ucy5kb21BUEkgPSBkb21BUEk7XG5vcHRpb25zLmluc2VydFN0eWxlRWxlbWVudCA9IGluc2VydFN0eWxlRWxlbWVudDtcblxudmFyIHVwZGF0ZSA9IEFQSShjb250ZW50LCBvcHRpb25zKTtcblxuXG5cbmV4cG9ydCAqIGZyb20gXCIhIS4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc3R5bGUuY3NzXCI7XG4gICAgICAgZXhwb3J0IGRlZmF1bHQgY29udGVudCAmJiBjb250ZW50LmxvY2FscyA/IGNvbnRlbnQubG9jYWxzIDogdW5kZWZpbmVkO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBzdHlsZXNJbkRPTSA9IFtdO1xuZnVuY3Rpb24gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcikge1xuICB2YXIgcmVzdWx0ID0gLTE7XG4gIGZvciAodmFyIGkgPSAwOyBpIDwgc3R5bGVzSW5ET00ubGVuZ3RoOyBpKyspIHtcbiAgICBpZiAoc3R5bGVzSW5ET01baV0uaWRlbnRpZmllciA9PT0gaWRlbnRpZmllcikge1xuICAgICAgcmVzdWx0ID0gaTtcbiAgICAgIGJyZWFrO1xuICAgIH1cbiAgfVxuICByZXR1cm4gcmVzdWx0O1xufVxuZnVuY3Rpb24gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpIHtcbiAgdmFyIGlkQ291bnRNYXAgPSB7fTtcbiAgdmFyIGlkZW50aWZpZXJzID0gW107XG4gIGZvciAodmFyIGkgPSAwOyBpIDwgbGlzdC5sZW5ndGg7IGkrKykge1xuICAgIHZhciBpdGVtID0gbGlzdFtpXTtcbiAgICB2YXIgaWQgPSBvcHRpb25zLmJhc2UgPyBpdGVtWzBdICsgb3B0aW9ucy5iYXNlIDogaXRlbVswXTtcbiAgICB2YXIgY291bnQgPSBpZENvdW50TWFwW2lkXSB8fCAwO1xuICAgIHZhciBpZGVudGlmaWVyID0gXCJcIi5jb25jYXQoaWQsIFwiIFwiKS5jb25jYXQoY291bnQpO1xuICAgIGlkQ291bnRNYXBbaWRdID0gY291bnQgKyAxO1xuICAgIHZhciBpbmRleEJ5SWRlbnRpZmllciA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgIHZhciBvYmogPSB7XG4gICAgICBjc3M6IGl0ZW1bMV0sXG4gICAgICBtZWRpYTogaXRlbVsyXSxcbiAgICAgIHNvdXJjZU1hcDogaXRlbVszXSxcbiAgICAgIHN1cHBvcnRzOiBpdGVtWzRdLFxuICAgICAgbGF5ZXI6IGl0ZW1bNV1cbiAgICB9O1xuICAgIGlmIChpbmRleEJ5SWRlbnRpZmllciAhPT0gLTEpIHtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS5yZWZlcmVuY2VzKys7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0udXBkYXRlcihvYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICB2YXIgdXBkYXRlciA9IGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpO1xuICAgICAgb3B0aW9ucy5ieUluZGV4ID0gaTtcbiAgICAgIHN0eWxlc0luRE9NLnNwbGljZShpLCAwLCB7XG4gICAgICAgIGlkZW50aWZpZXI6IGlkZW50aWZpZXIsXG4gICAgICAgIHVwZGF0ZXI6IHVwZGF0ZXIsXG4gICAgICAgIHJlZmVyZW5jZXM6IDFcbiAgICAgIH0pO1xuICAgIH1cbiAgICBpZGVudGlmaWVycy5wdXNoKGlkZW50aWZpZXIpO1xuICB9XG4gIHJldHVybiBpZGVudGlmaWVycztcbn1cbmZ1bmN0aW9uIGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpIHtcbiAgdmFyIGFwaSA9IG9wdGlvbnMuZG9tQVBJKG9wdGlvbnMpO1xuICBhcGkudXBkYXRlKG9iaik7XG4gIHZhciB1cGRhdGVyID0gZnVuY3Rpb24gdXBkYXRlcihuZXdPYmopIHtcbiAgICBpZiAobmV3T2JqKSB7XG4gICAgICBpZiAobmV3T2JqLmNzcyA9PT0gb2JqLmNzcyAmJiBuZXdPYmoubWVkaWEgPT09IG9iai5tZWRpYSAmJiBuZXdPYmouc291cmNlTWFwID09PSBvYmouc291cmNlTWFwICYmIG5ld09iai5zdXBwb3J0cyA9PT0gb2JqLnN1cHBvcnRzICYmIG5ld09iai5sYXllciA9PT0gb2JqLmxheWVyKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cbiAgICAgIGFwaS51cGRhdGUob2JqID0gbmV3T2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgYXBpLnJlbW92ZSgpO1xuICAgIH1cbiAgfTtcbiAgcmV0dXJuIHVwZGF0ZXI7XG59XG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChsaXN0LCBvcHRpb25zKSB7XG4gIG9wdGlvbnMgPSBvcHRpb25zIHx8IHt9O1xuICBsaXN0ID0gbGlzdCB8fCBbXTtcbiAgdmFyIGxhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKTtcbiAgcmV0dXJuIGZ1bmN0aW9uIHVwZGF0ZShuZXdMaXN0KSB7XG4gICAgbmV3TGlzdCA9IG5ld0xpc3QgfHwgW107XG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBpKyspIHtcbiAgICAgIHZhciBpZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW2ldO1xuICAgICAgdmFyIGluZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleF0ucmVmZXJlbmNlcy0tO1xuICAgIH1cbiAgICB2YXIgbmV3TGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKG5ld0xpc3QsIG9wdGlvbnMpO1xuICAgIGZvciAodmFyIF9pID0gMDsgX2kgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBfaSsrKSB7XG4gICAgICB2YXIgX2lkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbX2ldO1xuICAgICAgdmFyIF9pbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKF9pZGVudGlmaWVyKTtcbiAgICAgIGlmIChzdHlsZXNJbkRPTVtfaW5kZXhdLnJlZmVyZW5jZXMgPT09IDApIHtcbiAgICAgICAgc3R5bGVzSW5ET01bX2luZGV4XS51cGRhdGVyKCk7XG4gICAgICAgIHN0eWxlc0luRE9NLnNwbGljZShfaW5kZXgsIDEpO1xuICAgICAgfVxuICAgIH1cbiAgICBsYXN0SWRlbnRpZmllcnMgPSBuZXdMYXN0SWRlbnRpZmllcnM7XG4gIH07XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgbWVtbyA9IHt9O1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGdldFRhcmdldCh0YXJnZXQpIHtcbiAgaWYgKHR5cGVvZiBtZW1vW3RhcmdldF0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICB2YXIgc3R5bGVUYXJnZXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKHRhcmdldCk7XG5cbiAgICAvLyBTcGVjaWFsIGNhc2UgdG8gcmV0dXJuIGhlYWQgb2YgaWZyYW1lIGluc3RlYWQgb2YgaWZyYW1lIGl0c2VsZlxuICAgIGlmICh3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQgJiYgc3R5bGVUYXJnZXQgaW5zdGFuY2VvZiB3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQpIHtcbiAgICAgIHRyeSB7XG4gICAgICAgIC8vIFRoaXMgd2lsbCB0aHJvdyBhbiBleGNlcHRpb24gaWYgYWNjZXNzIHRvIGlmcmFtZSBpcyBibG9ja2VkXG4gICAgICAgIC8vIGR1ZSB0byBjcm9zcy1vcmlnaW4gcmVzdHJpY3Rpb25zXG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gc3R5bGVUYXJnZXQuY29udGVudERvY3VtZW50LmhlYWQ7XG4gICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgIC8vIGlzdGFuYnVsIGlnbm9yZSBuZXh0XG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gbnVsbDtcbiAgICAgIH1cbiAgICB9XG4gICAgbWVtb1t0YXJnZXRdID0gc3R5bGVUYXJnZXQ7XG4gIH1cbiAgcmV0dXJuIG1lbW9bdGFyZ2V0XTtcbn1cblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBpbnNlcnRCeVNlbGVjdG9yKGluc2VydCwgc3R5bGUpIHtcbiAgdmFyIHRhcmdldCA9IGdldFRhcmdldChpbnNlcnQpO1xuICBpZiAoIXRhcmdldCkge1xuICAgIHRocm93IG5ldyBFcnJvcihcIkNvdWxkbid0IGZpbmQgYSBzdHlsZSB0YXJnZXQuIFRoaXMgcHJvYmFibHkgbWVhbnMgdGhhdCB0aGUgdmFsdWUgZm9yIHRoZSAnaW5zZXJ0JyBwYXJhbWV0ZXIgaXMgaW52YWxpZC5cIik7XG4gIH1cbiAgdGFyZ2V0LmFwcGVuZENoaWxkKHN0eWxlKTtcbn1cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0QnlTZWxlY3RvcjsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBpbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucykge1xuICB2YXIgZWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzdHlsZVwiKTtcbiAgb3B0aW9ucy5zZXRBdHRyaWJ1dGVzKGVsZW1lbnQsIG9wdGlvbnMuYXR0cmlidXRlcyk7XG4gIG9wdGlvbnMuaW5zZXJ0KGVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG4gIHJldHVybiBlbGVtZW50O1xufVxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzKHN0eWxlRWxlbWVudCkge1xuICB2YXIgbm9uY2UgPSB0eXBlb2YgX193ZWJwYWNrX25vbmNlX18gIT09IFwidW5kZWZpbmVkXCIgPyBfX3dlYnBhY2tfbm9uY2VfXyA6IG51bGw7XG4gIGlmIChub25jZSkge1xuICAgIHN0eWxlRWxlbWVudC5zZXRBdHRyaWJ1dGUoXCJub25jZVwiLCBub25jZSk7XG4gIH1cbn1cbm1vZHVsZS5leHBvcnRzID0gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKSB7XG4gIHZhciBjc3MgPSBcIlwiO1xuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQob2JqLnN1cHBvcnRzLCBcIikge1wiKTtcbiAgfVxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwiQG1lZGlhIFwiLmNvbmNhdChvYmoubWVkaWEsIFwiIHtcIik7XG4gIH1cbiAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBvYmoubGF5ZXIgIT09IFwidW5kZWZpbmVkXCI7XG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJAbGF5ZXJcIi5jb25jYXQob2JqLmxheWVyLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQob2JqLmxheWVyKSA6IFwiXCIsIFwiIHtcIik7XG4gIH1cbiAgY3NzICs9IG9iai5jc3M7XG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG4gIHZhciBzb3VyY2VNYXAgPSBvYmouc291cmNlTWFwO1xuICBpZiAoc291cmNlTWFwICYmIHR5cGVvZiBidG9hICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgY3NzICs9IFwiXFxuLyojIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2Jhc2U2NCxcIi5jb25jYXQoYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoc291cmNlTWFwKSkpKSwgXCIgKi9cIik7XG4gIH1cblxuICAvLyBGb3Igb2xkIElFXG4gIC8qIGlzdGFuYnVsIGlnbm9yZSBpZiAgKi9cbiAgb3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbn1cbmZ1bmN0aW9uIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpIHtcbiAgLy8gaXN0YW5idWwgaWdub3JlIGlmXG4gIGlmIChzdHlsZUVsZW1lbnQucGFyZW50Tm9kZSA9PT0gbnVsbCkge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuICBzdHlsZUVsZW1lbnQucGFyZW50Tm9kZS5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQpO1xufVxuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGRvbUFQSShvcHRpb25zKSB7XG4gIGlmICh0eXBlb2YgZG9jdW1lbnQgPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICByZXR1cm4ge1xuICAgICAgdXBkYXRlOiBmdW5jdGlvbiB1cGRhdGUoKSB7fSxcbiAgICAgIHJlbW92ZTogZnVuY3Rpb24gcmVtb3ZlKCkge31cbiAgICB9O1xuICB9XG4gIHZhciBzdHlsZUVsZW1lbnQgPSBvcHRpb25zLmluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKTtcbiAgcmV0dXJuIHtcbiAgICB1cGRhdGU6IGZ1bmN0aW9uIHVwZGF0ZShvYmopIHtcbiAgICAgIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKTtcbiAgICB9LFxuICAgIHJlbW92ZTogZnVuY3Rpb24gcmVtb3ZlKCkge1xuICAgICAgcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCk7XG4gICAgfVxuICB9O1xufVxubW9kdWxlLmV4cG9ydHMgPSBkb21BUEk7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQpIHtcbiAgaWYgKHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0KSB7XG4gICAgc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQuY3NzVGV4dCA9IGNzcztcbiAgfSBlbHNlIHtcbiAgICB3aGlsZSAoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpIHtcbiAgICAgIHN0eWxlRWxlbWVudC5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCk7XG4gICAgfVxuICAgIHN0eWxlRWxlbWVudC5hcHBlbmRDaGlsZChkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShjc3MpKTtcbiAgfVxufVxubW9kdWxlLmV4cG9ydHMgPSBzdHlsZVRhZ1RyYW5zZm9ybTsiLCJleHBvcnQgZGVmYXVsdCBjaGVja2JveExpc3RlbmVycztcblxuZnVuY3Rpb24gbWFya0JveChrZXkpIHtcbiAgbGV0IHRvZG9JdGVtID0gSlNPTi5wYXJzZSh3aW5kb3cubG9jYWxTdG9yYWdlLmdldEl0ZW0oa2V5KSk7XG5cbiAgaWYgKHRvZG9JdGVtLmNvbXBsZXRlZCkge1xuICAgIHRvZG9JdGVtLmNvbXBsZXRlZCA9IGZhbHNlO1xuICB9IGVsc2UgaWYgKCF0b2RvSXRlbS5jb21wbGV0ZWQpIHtcbiAgICB0b2RvSXRlbS5jb21wbGV0ZWQgPSB0cnVlO1xuICB9XG4gIHdpbmRvdy5sb2NhbFN0b3JhZ2Uuc2V0SXRlbShrZXksIEpTT04uc3RyaW5naWZ5KHRvZG9JdGVtKSk7XG59XG5cbmZ1bmN0aW9uIGNoZWNrYm94TGlzdGVuZXJzKCkge1xuICBsZXQgY2hlY2tCb3hlcyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoXCJpbnB1dFt0eXBlPSdjaGVja2JveCddXCIpO1xuXG4gIGNoZWNrQm94ZXMuZm9yRWFjaCgoY2hlY2tib3gpID0+IHtcbiAgICBjaGVja2JveC5vbmNsaWNrID0gKCkgPT4ge1xuICAgICAgbWFya0JveChjaGVja2JveC5wYXJlbnRFbGVtZW50LmlkKVxuICAgIH1cbiAgfSlcbn1cbiIsImV4cG9ydCB7IGRlbGV0ZVRvZG8sIGRlbGV0ZUxpc3RlbmVycyB9O1xuaW1wb3J0IHtyZW5kZXJUb2RvfSBmcm9tIFwiLi90b2RvRGlzcGxheVwiO1xuXG5mdW5jdGlvbiBkZWxldGVUb2RvKGtleSkge1xuICB3aW5kb3cubG9jYWxTdG9yYWdlLnNldEl0ZW0oa2V5LCAne1wiZGVsZXRlZFwiOlwiZGVsZXRlZFwifScpO1xuXG4gIGxldCB0b2Rvc0NvbnRhaW5lciA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwidG9kb3MtY29udGFpbmVyXCIpO1xuXG4gIC8vIFJlbW92ZSBjaGlsZHJlbiBmcm9tIHRoZSBjb250YWluZXIgaWYgdGhleSBleGlzdC5cbiAgaWYgKHRvZG9zQ29udGFpbmVyLmNoaWxkcmVuLmxlbmd0aCA+IDApIHtcbiAgICB3aGlsZSAodG9kb3NDb250YWluZXIuZmlyc3RDaGlsZCkge1xuICAgICAgdG9kb3NDb250YWluZXIucmVtb3ZlQ2hpbGQodG9kb3NDb250YWluZXIuZmlyc3RDaGlsZCk7XG4gICAgfVxuICB9XG4gIHJlbmRlclRvZG8oKTtcbn1cblxuZnVuY3Rpb24gZGVsZXRlTGlzdGVuZXJzKCkge1xuICBsZXQgZGVsZXRlQnV0dG9ucyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoXCIuZGVsZXRlLWJ0blwiKTtcblxuICBkZWxldGVCdXR0b25zLmZvckVhY2goKGRlbGV0ZUJ1dHRvbikgPT4ge1xuICAgIGRlbGV0ZUJ1dHRvbi5vbmNsaWNrID0gKCkgPT4ge1xuICAgICAgZGVsZXRlVG9kbyhkZWxldGVCdXR0b24ucGFyZW50RWxlbWVudC5pZCk7XG4gICAgfVxuICB9KVxufVxuIiwiZXhwb3J0IHsgcmVuZGVyTW9kYWwsIG1vZGFsTGlzdGVuZXJzIH1cbmltcG9ydCB7IGxpc3RPcHRpb25zIH0gZnJvbSBcIi4vdG9kb0Zvcm1cIjtcblxuZnVuY3Rpb24gcmVuZGVyTW9kYWwoKSB7XG4gIGNvbnN0IHRvZG9zQ29udGFpbmVyID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJ0b2Rvcy1jb250YWluZXJcIik7XG4gIGNvbnN0IG1vZGFsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGlhbG9nJyk7XG4gIG1vZGFsLmlkID0gXCJtb2RhbFwiO1xuXG4gIHRvZG9zQ29udGFpbmVyLmFwcGVuZENoaWxkKG1vZGFsKTtcbn1cblxuLy8gSGFuZGxlIGJ1dHRvbnMgb3V0c2lkZSBtb2RhbC5cbmZ1bmN0aW9uIG1vZGFsTGlzdGVuZXJzKCkge1xuICBjb25zdCBtb2RhbCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwibW9kYWxcIik7XG4gIGxldCBlZGl0QnV0dG9ucyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoXCIuZWRpdC1idG5cIik7XG5cbiAgZWRpdEJ1dHRvbnMuZm9yRWFjaCgoZWRpdEJ1dHRvbikgPT4ge1xuICAgIGVkaXRCdXR0b24ub25jbGljayA9ICgpID0+IHtcbiAgICAgIG1vZGFsLnNob3dNb2RhbCgpO1xuICAgICAgdXBkYXRlTW9kYWwoZWRpdEJ1dHRvbi5wYXJlbnRFbGVtZW50LmlkKTtcbiAgICB9XG4gIH0pXG59XG5cbi8vIEFkZCB0b2RvIGRhdGEgdG8gbW9kYWwuXG5mdW5jdGlvbiB1cGRhdGVNb2RhbChrZXkpIHtcbiAgY29uc3QgbW9kYWwgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcIm1vZGFsXCIpO1xuXG4gIC8vIGNsZWFyIGFueSBleGlzdGluZyBkYXRhLlxuICBpZiAobW9kYWwuY2hpbGRyZW4ubGVuZ3RoID4gMCkge1xuICAgIHdoaWxlIChtb2RhbC5maXJzdENoaWxkKSB7XG4gICAgICBtb2RhbC5yZW1vdmVDaGlsZChtb2RhbC5maXJzdENoaWxkKTtcbiAgICB9XG4gIH1cblxuICAvLyBhZGQgYSB0aXRsZSBhbmQgY2xvc2UgYnV0dG9uLlxuICBjb25zdCBoZWFkZXJEaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICBjb25zdCBtb2RhbFRpdGxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImgzXCIpO1xuICBoZWFkZXJEaXYuaWQgPSBcIm1vZGFsLWhlYWRlclwiO1xuICBtb2RhbFRpdGxlLnRleHRDb250ZW50ID0gXCJWaWV3IC8gRWRpdCBUby1kb1wiO1xuXG4gIGNvbnN0IGNsb3NlTW9kYWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiYnV0dG9uXCIpO1xuICBjbG9zZU1vZGFsLmlubmVySFRNTCA9IFwiJnRpbWVzXCI7XG4gIGNsb3NlTW9kYWwuaWQgPSBcImNsb3NlTW9kYWxcIjtcblxuICBoZWFkZXJEaXYuYXBwZW5kKG1vZGFsVGl0bGUsIGNsb3NlTW9kYWwpO1xuICBtb2RhbC5hcHBlbmRDaGlsZChoZWFkZXJEaXYpO1xuXG4gIC8vIEFkZCBsaXN0ZW5lciB0byBjbG9zZSBidXR0b24uXG4gIGNsb3NlTW9kYWwub25jbGljayA9ICgpID0+IHtcbiAgICBtb2RhbC5jbG9zZSgpXG4gIH07XG5cbiAgLy8gUHVsbCB0b2RvIGluZm8gYW5kIHByZWZpbGwgZm9ybSB3aXRoIGRhdGEuXG4gIGxldCB0b2RvSXRlbSA9IEpTT04ucGFyc2Uod2luZG93LmxvY2FsU3RvcmFnZS5nZXRJdGVtKGtleSkpO1xuICBjb25zdCB0b2RvRGF0YSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJmb3JtXCIpO1xuXG4gIHRvZG9EYXRhLmFkZEV2ZW50TGlzdGVuZXIoXCJzdWJtaXRcIiwgZnVuY3Rpb24gKF9ldmVudCkge1xuXG4gICAgdG9kb0l0ZW0udGl0bGUgPSB0b2RvRGF0YS5lbGVtZW50cy50aXRsZS52YWx1ZTtcbiAgICB0b2RvSXRlbS5kdWVEYXRlID0gdG9kb0RhdGEuZWxlbWVudHMuZHVlRGF0ZS52YWx1ZTtcbiAgICB0b2RvSXRlbS5wcmlvcml0eSA9IHRvZG9EYXRhLmVsZW1lbnRzLnByaW9yaXR5LnZhbHVlO1xuICAgIHRvZG9JdGVtLm5vdGVzID0gdG9kb0RhdGEuZWxlbWVudHMubm90ZXMudmFsdWU7XG4gICAgdG9kb0l0ZW0ubGlzdCA9IHRvZG9EYXRhLmVsZW1lbnRzLmxpc3QudmFsdWU7XG5cbiAgICB3aW5kb3cubG9jYWxTdG9yYWdlLnNldEl0ZW0oa2V5LCBKU09OLnN0cmluZ2lmeSh0b2RvSXRlbSkpO1xuICB9KTtcblxuICAgIHRvZG9EYXRhLmlubmVySFRNTCA9IGBcbiAgICAgIDxsYWJlbCBmb3I9XCJ0aXRsZVwiPlRpdGxlOjwvbGFiZWw+XG4gICAgICA8aW5wdXQgdHlwZT1cInRleHRcIiBpZD1cInRpdGxlXCIgbmFtZT1cInRpdGxlXCIgdmFsdWU9XCIke3RvZG9JdGVtLnRpdGxlfVwiIHJlcXVpcmVkPjxicj5cblxuICAgICAgPGxhYmVsIGZvcj1cImR1ZS1kYXRlXCI+RHVlIERhdGU6PC9sYWJlbD5cbiAgICAgIDxpbnB1dCB0eXBlPVwiZGF0ZVwiIGlkPVwiZHVlLWRhdGVcIiBuYW1lPVwiZHVlRGF0ZVwiIHZhbHVlPSR7dG9kb0l0ZW0uZHVlRGF0ZX0+PGJyPlxuXG4gICAgICA8bGFiZWwgZm9yPVwicHJpb3JpdHlcIj5Qcmlvcml0eTo8L2xhYmVsPlxuICAgICAgPHNlbGVjdCBpZD1cInByaW9yaXR5XCIgbmFtZT1cInByaW9yaXR5XCIgdmFsdWU9JHt0b2RvSXRlbS5wcmlvcml0eX0+XG4gICAgICAgICAgPG9wdGlvbiB2YWx1ZT1cImhpZ2hcIj5IaWdoPC9vcHRpb24+XG4gICAgICAgICAgPG9wdGlvbiB2YWx1ZT1cIm1lZGl1bVwiPk1lZGl1bTwvb3B0aW9uPlxuICAgICAgICAgIDxvcHRpb24gdmFsdWU9XCJsb3dcIj5Mb3c8L29wdGlvbj5cbiAgICAgIDwvc2VsZWN0Pjxicj5cblxuICAgICAgPGxhYmVsIGZvcj1cIm5vdGVzXCI+Tm90ZXM6PC9sYWJlbD5cbiAgICAgIDx0ZXh0YXJlYSBpZD1cIm5vdGVzXCIgbmFtZT1cIm5vdGVzXCI+JHt0b2RvSXRlbS5ub3Rlc308L3RleHRhcmVhPjxicj5cblxuICAgICAgPGxhYmVsIGZvcj1cImxpc3RcIj5MaXN0OjwvbGFiZWw+XG4gICAgICA8aW5wdXQgbGlzdD1cIm1vZGFsLWxpc3Qtc2VsZWN0aW9uc1wiIGlkPVwibGlzdFwiIG5hbWU9XCJsaXN0XCIgdmFsdWU9JHt0b2RvSXRlbS5saXN0fT5cbiAgICAgIDxkYXRhbGlzdCBpZD1cIm1vZGFsLWxpc3Qtc2VsZWN0aW9uc1wiPjwvZGF0YWxpc3Q+PGJyPlxuXG4gICAgICA8aW5wdXQgdHlwZT1cInN1Ym1pdFwiIHZhbHVlPVwiRWRpdCBUb2RvXCIgaWQ9XCJzdWJtaXRcIj5cbiAgICBgO1xuXG4gIG1vZGFsLmFwcGVuZENoaWxkKHRvZG9EYXRhKTtcbiAgbGlzdE9wdGlvbnMoXCJlZGl0XCIpO1xufVxuIiwiaW1wb3J0IHsgZGVsZXRlTGlzdGVuZXJzIH0gZnJvbSBcIi4vZGVsZXRlVG9kb1wiO1xuaW1wb3J0IHsgbW9kYWxMaXN0ZW5lcnMgfSBmcm9tIFwiLi9tb2RhbFwiO1xuXG5leHBvcnQgeyByZW5kZXJUb2RvIH07XG5cbi8vIENoZWNrIGlmIGNvbnRlbnQgZGl2cyBleGlzdHMsIGlmIG5vdCBjcmVhdGUgdGhlbS5cbmZ1bmN0aW9uIGVzdGFibGlzaENvbnRhaW5lcnMoKSB7XG4gIGxldCB0b2Rvc0NvbnRhaW5lciA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwidG9kb3MtY29udGFpbmVyXCIpO1xuICBsZXQgbGlzdENvbnRhaW5lciA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwibGlzdC1jb250YWluZXJcIik7XG5cbiAgaWYgKCF0b2Rvc0NvbnRhaW5lcikge1xuICAgIHRvZG9zQ29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICB0b2Rvc0NvbnRhaW5lci5pZCA9IFwidG9kb3MtY29udGFpbmVyXCI7XG4gIH1cblxuICBpZiAoIWxpc3RDb250YWluZXIpIHtcbiAgICBsaXN0Q29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICBsaXN0Q29udGFpbmVyLmlkID0gXCJsaXN0LWNvbnRhaW5lclwiO1xuICB9XG5cbiAgcmV0dXJuIFt0b2Rvc0NvbnRhaW5lciwgbGlzdENvbnRhaW5lcl07XG59XG5cbmZ1bmN0aW9uIHJlbmRlclRvZG8oaSA9IDApIHtcbiAgY29uc3QgYm9keSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCJib2R5XCIpO1xuICBjb25zdCBzaWRlYmFyQ29udGFpbmVyID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJzaWRlYmFyXCIpO1xuICBjb25zdCBbdG9kb3NDb250YWluZXIsIGxpc3RDb250YWluZXJdID0gZXN0YWJsaXNoQ29udGFpbmVycygpO1xuXG4gIGZvciAoaTsgaSA8IHdpbmRvdy5sb2NhbFN0b3JhZ2UubGVuZ3RoOyBpKyspIHtcbiAgICBsZXQgdG9kb0l0ZW0gPSBKU09OLnBhcnNlKHdpbmRvdy5sb2NhbFN0b3JhZ2UuZ2V0SXRlbShpLnRvU3RyaW5nKCkpKTtcblxuICAgIGlmICh0b2RvSXRlbS5kZWxldGVkID09PSBcImRlbGV0ZWRcIikge1xuICAgICAgY29udGludWU7XG4gICAgfVxuXG4gICAgbGV0IG5ld1RvZG8gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgIG5ld1RvZG8uY2xhc3NMaXN0LmFkZChcInRvZG8taXRlbVwiKTtcbiAgICAvLyBBdHRhY2ggdGhlIHRvZG8gaXRlbSdzIGtleSBmb3IgbG9va3Vwcy5cbiAgICBuZXdUb2RvLmlkID0gaTtcblxuICAgIC8vIENyZWF0ZSBjaGVja2JveCBhbmQgZW5zdXJlIGl0IGlzIG1hcmtlZCBpZiB0aGUgdG9kbyBpcyBjb21wbGV0ZWQuXG4gICAgbGV0IGNoZWNrQm94ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImlucHV0XCIpO1xuICAgIGNoZWNrQm94LnR5cGUgPSBcImNoZWNrYm94XCI7XG4gICAgY2hlY2tCb3guY2xhc3NMaXN0LmFkZChcImNoZWNrYm94XCIpO1xuICAgIGlmICh0b2RvSXRlbS5jb21wbGV0ZWQpIHtcbiAgICAgIGNoZWNrQm94LmNoZWNrZWQgPSB0cnVlO1xuICAgIH1cblxuICAgIC8vIEFkZCB0b2RvIGluZm8gdG8gcGFnZS5cbiAgICBjb25zdCB0aXRsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJwXCIpO1xuICAgIGNvbnN0IGR1ZURhdGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwicFwiKTtcbiAgICBjb25zdCBwcmlvcml0eSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJwXCIpO1xuXG4gICAgdGl0bGUudGV4dENvbnRlbnQgPSB0b2RvSXRlbS50aXRsZTtcbiAgICBkdWVEYXRlLnRleHRDb250ZW50ID0gdG9kb0l0ZW0uZHVlRGF0ZTtcbiAgICBwcmlvcml0eS50ZXh0Q29udGVudCA9IHRvZG9JdGVtLnByaW9yaXR5O1xuXG4gICAgLy8gQ3JlYXRlIHZpZXcgLyBlZGl0IGJ1dHRvbi5cbiAgICBsZXQgZWRpdEJ1dHRvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJidXR0b25cIik7XG4gICAgZWRpdEJ1dHRvbi5jbGFzc0xpc3QuYWRkKFwiZWRpdC1idG5cIik7XG4gICAgZWRpdEJ1dHRvbi50ZXh0Q29udGVudCA9IFwi4pyOXCI7XG5cbiAgICAvLyBDcmVhdGUgZGVsZXRlIGJ1dHRvbi5cbiAgICBsZXQgZGVsZXRlQnV0dG9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImJ1dHRvblwiKTtcbiAgICBkZWxldGVCdXR0b24uY2xhc3NMaXN0LmFkZChcImRlbGV0ZS1idG5cIik7XG4gICAgZGVsZXRlQnV0dG9uLnRleHRDb250ZW50ID0gXCLwn5eRXCI7XG5cbiAgICBuZXdUb2RvLmFwcGVuZChjaGVja0JveCwgdGl0bGUsIGR1ZURhdGUsIHByaW9yaXR5LCBlZGl0QnV0dG9uLCBkZWxldGVCdXR0b24pO1xuICAgIHRvZG9zQ29udGFpbmVyLmFwcGVuZENoaWxkKG5ld1RvZG8pO1xuICB9XG4gIGJvZHkuYXBwZW5kQ2hpbGQodG9kb3NDb250YWluZXIpO1xuICByZW5kZXJMaXN0cyhsaXN0Q29udGFpbmVyLCBzaWRlYmFyQ29udGFpbmVyKTtcblxuICAvLyBFbnN1cmUgb25jbGljayBsaXN0ZW5lcnMgYXJlIGFkZGVkIHRvIGVkaXQgJiBkZWxldGUgYnV0dG9ucy5cbiAgZGVsZXRlTGlzdGVuZXJzKCk7XG4gIG1vZGFsTGlzdGVuZXJzKCk7XG5cbiAgLy8gRm9yIHRlc3RpbmcgcHVycG9zZXMgb25seSwgY2xlYXIgZGF0YS5cbiAgbGV0IGNsZWFyQnV0dG9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImJ1dHRvblwiKTtcbiAgY2xlYXJCdXR0b24udGV4dENvbnRlbnQgPSBcIkNsZWFyIERhdGFcIjtcbiAgYm9keS5hcHBlbmRDaGlsZChjbGVhckJ1dHRvbik7XG5cbiAgY2xlYXJCdXR0b24ub25jbGljayA9ICgpID0+IHtcbiAgICB3aW5kb3cubG9jYWxTdG9yYWdlLmNsZWFyKCk7XG4gICAgbG9jYXRpb24ucmVsb2FkKCk7XG4gIH1cbn1cblxuZnVuY3Rpb24gcmVuZGVyTGlzdHMobGlzdENvbnRhaW5lciwgc2lkZWJhckNvbnRhaW5lcikge1xuICAvLyBSZW1vdmUgY2hpbGRyZW4gZnJvbSB0aGUgbGlzdCBjb250YWluZXIgaWYgdGhleSBleGlzdC5cbiAgaWYgKGxpc3RDb250YWluZXIuY2hpbGRyZW4ubGVuZ3RoID4gMCkge1xuICAgIHdoaWxlIChsaXN0Q29udGFpbmVyLmZpcnN0Q2hpbGQpIHtcbiAgICAgIGxpc3RDb250YWluZXIucmVtb3ZlQ2hpbGQobGlzdENvbnRhaW5lci5maXJzdENoaWxkKTtcbiAgICB9XG4gIH1cblxuICAvLyBTZXQgdGl0bGUuXG4gIGxldCBsaXN0VGl0bGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaDJcIik7XG4gIGxpc3RUaXRsZS50ZXh0Q29udGVudCA9IFwiTGlzdHNcIjtcbiAgbGlzdENvbnRhaW5lci5hcHBlbmRDaGlsZChsaXN0VGl0bGUpO1xuXG4gIC8vIENyZWF0ZSBhIGhpZGRlbiBidXR0b24gdG8gc2hvdyBhbGwgdG9kb3MgaWYgZmlsdGVyaW5nIGJ5IGxpc3QuXG4gIGNvbnN0IHNob3dBbGwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiYnV0dG9uXCIpO1xuICBzaG93QWxsLnRleHRDb250ZW50ID0gXCJTaG93IEFsbFwiO1xuICBzaG93QWxsLmlkID0gXCJzaG93QWxsXCI7XG4gIHNob3dBbGwuY2xhc3NMaXN0LmFkZChcImxpc3RcIik7XG4gIHNob3dBbGwuc3R5bGUuZGlzcGxheSA9IFwibm9uZVwiO1xuXG4gIC8vIENvbGxlY3QgbGlzdHMgZnJvbSBhbGwgdG9kbyBpdGVtcyBpbiBsb2NhbCBzdG9yYWdlLlxuICBsZXQgbGlzdHMgPSBbXTtcbiAgZm9yIChsZXQgaSA9IDA7IGkgPCB3aW5kb3cubG9jYWxTdG9yYWdlLmxlbmd0aDsgaSsrKSB7XG4gICAgbGV0IHRvZG9JdGVtID0gSlNPTi5wYXJzZSh3aW5kb3cubG9jYWxTdG9yYWdlLmdldEl0ZW0oaS50b1N0cmluZygpKSk7XG4gICAgbGlzdHMucHVzaCh0b2RvSXRlbS5saXN0KTtcbiAgfVxuXG4gIC8vIENvbGxlY3QgbGlzdHMgZnJvbSBmb3JtIG9wdGlvbnMuXG4gIGNvbnN0IGxpc3RPcHRpb25zID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChcIi5saXN0LW9wdGlvbnNcIik7XG4gIGxpc3RPcHRpb25zLmZvckVhY2goKG9wdGlvbikgPT4ge1xuICAgIGxpc3RzLnB1c2gob3B0aW9uLnRleHRDb250ZW50KTtcbiAgfSlcblxuICAvLyBSZW1vdmUgZHVwbGljYXRlcyAmIGVtcHR5IHN0cmluZ3MuXG4gIGxldCBjbGVhbmVkTGlzdHMgPSBbLi4ubmV3IFNldChsaXN0cy5maWx0ZXIobGlzdCA9PiBsaXN0KSldO1xuXG4gIC8vIEFkZCBjbGVhbmVkIHVwIGxpc3RzIHRvIHBhZ2UuXG4gIGNsZWFuZWRMaXN0cy5mb3JFYWNoKChsaXN0KSA9PiB7XG4gICAgY29uc3QgbGlzdEVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiYVwiKTtcbiAgICBsaXN0RWxlbWVudC5jbGFzc0xpc3QuYWRkKFwibGlzdFwiKTtcbiAgICBsaXN0RWxlbWVudC50ZXh0Q29udGVudCA9IGxpc3Q7XG4gICAgbGlzdENvbnRhaW5lci5hcHBlbmRDaGlsZChsaXN0RWxlbWVudCk7XG4gIH0pO1xuICBsaXN0Q29udGFpbmVyLmFwcGVuZENoaWxkKHNob3dBbGwpO1xuICBzaWRlYmFyQ29udGFpbmVyLmFwcGVuZENoaWxkKGxpc3RDb250YWluZXIpO1xufVxuIiwiZXhwb3J0IHsgZmlsdGVyVG9kb3MsIGZpbHRlckxpc3RlbmVycyB9O1xuXG5mdW5jdGlvbiBmaWx0ZXJUb2RvcyhsaXN0KSB7XG4gIC8vIFJldmVhbCAnU2hvdyBBbGwnIGJ1dHRvbi5cbiAgY29uc3Qgc2hvd0FsbCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdzaG93QWxsJyk7XG4gIHNob3dBbGwuc3R5bGUuZGlzcGxheSA9IFwiXCI7XG5cbiAgLy8gRmlsdGVyIHRvZG9zIGJ5IGxpc3QuXG4gIGZvciAobGV0IGkgPSAwOyBpIDwgd2luZG93LmxvY2FsU3RvcmFnZS5sZW5ndGg7IGkrKykge1xuICAgIGxldCB0b2RvSXRlbSA9IEpTT04ucGFyc2Uod2luZG93LmxvY2FsU3RvcmFnZS5nZXRJdGVtKGkudG9TdHJpbmcoKSkpO1xuXG4gICAgLy8gZmluZCB0aGUgZGl2IGNvbnRhaW5pbmcgdGhpcyB0b2RvIGl0ZW0uXG4gICAgbGV0IHRvZG9EaXYgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChpKTtcblxuICAgIC8vIGlnbm9yZSBkZWxldGVkIHRvZG8gaXRlbXMuXG4gICAgaWYgKHRvZG9JdGVtLmRlbGV0ZWQgPT09IFwiZGVsZXRlZFwiKSB7XG4gICAgICBjb250aW51ZTtcbiAgICAvLyBpZiAnc2hvdyBhbGwnIGlzIGNsaWNrZWQsIHJlbW92ZSBhbnkgaGlkZGVuIGF0dHJpYnV0ZXMgYW5kIG1vdmUgdG8gbmV4dC5cbiAgICB9IGVsc2UgaWYgKGxpc3QgPT09IFwiU2hvdyBBbGxcIikge1xuICAgICAgdG9kb0Rpdi5zdHlsZS5kaXNwbGF5ID0gXCJcIjtcbiAgICAgIC8vIHJlaGlkZSBzaG93IGFsbCBidXR0b24uXG4gICAgICBzaG93QWxsLnN0eWxlLmRpc3BsYXkgPSBcIm5vbmVcIjtcbiAgICAgIGNvbnRpbnVlO1xuICAgIC8vIGhpZGUgdGhlIGl0ZW0gaWYgbGlzdCBkb2Vzbid0IG1hdGNoLlxuICAgIH0gZWxzZSBpZiAodG9kb0l0ZW0ubGlzdCAhPT0gbGlzdCkge1xuICAgICAgdG9kb0Rpdi5zdHlsZS5kaXNwbGF5ID0gXCJub25lXCI7XG4gICAgLy8gc2hvdyBpdGVtIGlmIGxpc3QgbWF0Y2hlcy5cbiAgICB9IGVsc2Uge1xuICAgICAgdG9kb0Rpdi5zdHlsZS5kaXNwbGF5ID0gXCJcIjtcbiAgICB9XG4gIH1cbn1cblxuZnVuY3Rpb24gZmlsdGVyTGlzdGVuZXJzKCkge1xuICBsZXQgbGlzdExpbmtzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChcIi5saXN0XCIpO1xuXG4gIGxpc3RMaW5rcy5mb3JFYWNoKChsaXN0KSA9PiB7XG4gICAgbGlzdC5vbmNsaWNrID0gKCkgPT4ge1xuICAgICAgZmlsdGVyVG9kb3MobGlzdC50ZXh0Q29udGVudCk7XG4gICAgfVxuICB9KVxufVxuIiwiZXhwb3J0IHsgcmVuZGVyVG9kb0Zvcm0sIGxpc3RPcHRpb25zIH07XG5pbXBvcnQgeyByZW5kZXJUb2RvIH0gZnJvbSBcIi4vdG9kb0Rpc3BsYXkuanNcIjtcblxuY2xhc3MgdG9kbyB7XG4gIGNvbnN0cnVjdG9yKHRpdGxlLCBkdWVEYXRlLCBwcmlvcml0eSwgbm90ZXMsIGxpc3QgPSBcImRlZmF1bHRcIikge1xuICAgIHRoaXMudGl0bGUgPSB0aXRsZTtcbiAgICB0aGlzLmR1ZURhdGUgPSBkdWVEYXRlO1xuICAgIHRoaXMucHJpb3JpdHkgPSBwcmlvcml0eTtcbiAgICB0aGlzLm5vdGVzID0gbm90ZXM7XG4gICAgdGhpcy5saXN0ID0gbGlzdDtcbiAgICB0aGlzLmNvbXBsZXRlZCA9IGZhbHNlO1xuICB9XG59XG5cbmZ1bmN0aW9uIHJlbmRlclRvZG9Gb3JtKCkge1xuICBjb25zdCBib2R5ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcImJvZHlcIik7XG5cbiAgY29uc3Qgc2lkZWJhckNvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gIHNpZGViYXJDb250YWluZXIuaWQgPSBcInNpZGViYXJcIjtcblxuICBjb25zdCBmb3JtID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImZvcm1cIik7XG4gIGZvcm0uYWRkRXZlbnRMaXN0ZW5lcihcInN1Ym1pdFwiLCBmdW5jdGlvbiAoZXZlbnQpIHtcbiAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuXG4gICAgY29uc3QgdGl0bGUgPSBmb3JtLmVsZW1lbnRzLnRpdGxlLnZhbHVlO1xuICAgIGNvbnN0IGR1ZURhdGUgPSBmb3JtLmVsZW1lbnRzLmR1ZURhdGUudmFsdWU7XG4gICAgY29uc3QgcHJpb3JpdHkgPSBmb3JtLmVsZW1lbnRzLnByaW9yaXR5LnZhbHVlO1xuICAgIGNvbnN0IG5vdGVzID0gZm9ybS5lbGVtZW50cy5ub3Rlcy52YWx1ZTtcbiAgICBjb25zdCBsaXN0ID0gZm9ybS5lbGVtZW50cy5saXN0LnZhbHVlO1xuXG4gICAgY29uc3QgbmV3VG9kbyA9IG5ldyB0b2RvKHRpdGxlLCBkdWVEYXRlLCBwcmlvcml0eSwgbm90ZXMsIGxpc3QpO1xuXG4gICAgLy8gUmVzZXQgdGhlIGZvcm0gYWZ0ZXIgc3VibWlzc2lvblxuICAgIGZvcm0ucmVzZXQoKTtcblxuICAgIC8vIFNlbmQgdG9kbyBvYmplY3QgdG8gbG9jYWxzdG9yYWdlLlxuICAgIHNlbmRUb1N0b3JhZ2UoSlNPTi5zdHJpbmdpZnkobmV3VG9kbykpO1xuXG4gICAgLy8gUmVuZGVyIG9ubHkgdGhlIG5ld2x5IGNyZWF0ZWQgdG9kby5cbiAgICByZW5kZXJUb2RvKHdpbmRvdy5sb2NhbFN0b3JhZ2UubGVuZ3RoIC0gMSk7XG5cbiAgfSk7XG5cbiAgZm9ybS5pbm5lckhUTUwgPSBgXG4gICAgICA8bGFiZWwgZm9yPVwidGl0bGVcIj5UaXRsZTo8L2xhYmVsPlxuICAgICAgPGlucHV0IHR5cGU9XCJ0ZXh0XCIgaWQ9XCJ0aXRsZVwiIG5hbWU9XCJ0aXRsZVwiIHJlcXVpcmVkPjxicj5cblxuICAgICAgPGxhYmVsIGZvcj1cImR1ZS1kYXRlXCI+RHVlIERhdGU6PC9sYWJlbD5cbiAgICAgIDxpbnB1dCB0eXBlPVwiZGF0ZVwiIGlkPVwiZHVlLWRhdGVcIiBuYW1lPVwiZHVlRGF0ZVwiPjxicj5cblxuICAgICAgPGxhYmVsIGZvcj1cInByaW9yaXR5XCI+UHJpb3JpdHk6PC9sYWJlbD5cbiAgICAgIDxzZWxlY3QgaWQ9XCJwcmlvcml0eVwiIG5hbWU9XCJwcmlvcml0eVwiPlxuICAgICAgICAgIDxvcHRpb24gdmFsdWU9XCJoaWdoXCI+SGlnaDwvb3B0aW9uPlxuICAgICAgICAgIDxvcHRpb24gdmFsdWU9XCJtZWRpdW1cIiBzZWxlY3RlZD5NZWRpdW08L29wdGlvbj5cbiAgICAgICAgICA8b3B0aW9uIHZhbHVlPVwibG93XCI+TG93PC9vcHRpb24+XG4gICAgICA8L3NlbGVjdD48YnI+XG5cbiAgICAgIDxsYWJlbCBmb3I9XCJub3Rlc1wiPk5vdGVzOjwvbGFiZWw+XG4gICAgICA8dGV4dGFyZWEgaWQ9XCJub3Rlc1wiIG5hbWU9XCJub3Rlc1wiPjwvdGV4dGFyZWE+PGJyPlxuXG4gICAgICA8bGFiZWwgZm9yPVwibGlzdFwiPkxpc3Q6PC9sYWJlbD5cbiAgICAgIDxpbnB1dCBsaXN0PVwibGlzdC1zZWxlY3Rpb25zXCIgaWQ9XCJsaXN0XCIgbmFtZT1cImxpc3RcIi8+XG4gICAgICA8ZGF0YWxpc3QgaWQ9XCJsaXN0LXNlbGVjdGlvbnNcIj48L2RhdGFsaXN0Pjxicj5cblxuICAgICAgPGxhYmVsIGZvcj1cInN1Ym1pdFwiPjwvbGFiZWw+XG4gICAgICA8aW5wdXQgdHlwZT1cInN1Ym1pdFwiIHZhbHVlPVwiQ3JlYXRlIFRvZG9cIiBpZD1cInN1Ym1pdFwiPlxuICBgO1xuXG4gIHNpZGViYXJDb250YWluZXIuYXBwZW5kQ2hpbGQoZm9ybSk7XG4gIGJvZHkuYXBwZW5kQ2hpbGQoc2lkZWJhckNvbnRhaW5lcik7XG59XG5cbmZ1bmN0aW9uIHNlbmRUb1N0b3JhZ2UodG9kb0l0ZW0pIHtcbiAgd2luZG93LmxvY2FsU3RvcmFnZS5zZXRJdGVtKHdpbmRvdy5sb2NhbFN0b3JhZ2UubGVuZ3RoLCB0b2RvSXRlbSk7XG59O1xuXG5mdW5jdGlvbiBsaXN0T3B0aW9ucyhlZGl0PWZhbHNlKSB7XG4gIGNvbnN0IGxpc3RTZWxlY3RvciA9IGVkaXQgPT09IFwiZWRpdFwiID8gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJtb2RhbC1saXN0LXNlbGVjdGlvbnNcIikgOiBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImxpc3Qtc2VsZWN0aW9uc1wiKTtcblxuICAvLyBDb2xsZWN0IGxpc3RzIGZyb20gYWxsIHRvZG8gaXRlbXMgaW4gbG9jYWwgc3RvcmFnZS5cbiAgbGV0IGxpc3RzID0gW107XG4gIGZvciAobGV0IGkgPSAwOyBpIDwgd2luZG93LmxvY2FsU3RvcmFnZS5sZW5ndGg7IGkrKykge1xuICAgIGxldCB0b2RvSXRlbSA9IEpTT04ucGFyc2Uod2luZG93LmxvY2FsU3RvcmFnZS5nZXRJdGVtKGkudG9TdHJpbmcoKSkpO1xuICAgIGxpc3RzLnB1c2godG9kb0l0ZW0ubGlzdCk7XG4gIH1cblxuICAvLyBSZW1vdmUgZHVwbGljYXRlcyAmIGVtcHR5IHN0cmluZ3MuXG4gIGxldCBjbGVhbmVkTGlzdHMgPSBbLi4ubmV3IFNldChsaXN0cy5maWx0ZXIobGlzdCA9PiBsaXN0KSldO1xuXG4gIC8vIFJlbW92ZSBhbnkgZXhpc3RpbmcgY2hpbGRyZW4gdG8gcHJldmVudCBkdXBsaWNhdGVzLlxuICBpZiAobGlzdFNlbGVjdG9yLmNoaWxkcmVuLmxlbmd0aCA+IDApIHtcbiAgICB3aGlsZSAobGlzdFNlbGVjdG9yLmZpcnN0Q2hpbGQpIHtcbiAgICAgIGxpc3RTZWxlY3Rvci5yZW1vdmVDaGlsZChsaXN0U2VsZWN0b3IuZmlyc3RDaGlsZCk7XG4gICAgfVxuICB9XG5cbiAgLy8gQWRkIG9wdGlvbnMgdG8gbGlzdCBzZWxlY3Rvciwgc2V0IHRvICdkZWZhdWx0JyBpZiBubyBsaXN0cyBjcmVhdGVkIHlldC5cbiAgaWYgKGNsZWFuZWRMaXN0cy5sZW5ndGggPT09IDApIHtcbiAgICBsZXQgb3B0aW9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcIm9wdGlvblwiKTtcbiAgICAvLyBvcHRpb24udGV4dENvbnRlbnQgPSBcIkRlZmF1bHRcIjtcbiAgICBvcHRpb24udmFsdWUgPSBcIkRlZmF1bHRcIjtcbiAgICBvcHRpb24uY2xhc3NMaXN0LmFkZChcImxpc3Qtb3B0aW9uc1wiKTtcbiAgICBsaXN0U2VsZWN0b3IuYXBwZW5kQ2hpbGQob3B0aW9uKTtcbiAgfSBlbHNlIHtcbiAgICBjbGVhbmVkTGlzdHMuZm9yRWFjaChsaXN0ID0+IHtcbiAgICAgIGxldCBvcHRpb24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwib3B0aW9uXCIpO1xuICAgICAgb3B0aW9uLnRleHRDb250ZW50ID0gbGlzdDtcbiAgICAgIG9wdGlvbi52YWx1ZSA9IGxpc3Q7XG4gICAgICBvcHRpb24uY2xhc3NMaXN0LmFkZChcImxpc3Qtb3B0aW9uc1wiKTtcbiAgICAgIGxpc3RTZWxlY3Rvci5hcHBlbmRDaGlsZChvcHRpb24pO1xuICAgIH0pXG4gIH1cbn1cblxuZnVuY3Rpb24gcmVuZGVyTmV3TGlzdEZvcm0oKSB7XG4gIGNvbnN0IHNpZGViYXJDb250YWluZXIgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInNpZGViYXJcIik7XG4gIGNvbnN0IGZvcm0gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZm9ybVwiKTtcbiAgZm9ybS5pZCA9IFwibmV3LWxpc3QtZm9ybVwiO1xuXG4gIGZvcm0uYWRkRXZlbnRMaXN0ZW5lcihcInN1Ym1pdFwiLCBmdW5jdGlvbiAoZXZlbnQpIHtcbiAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuXG4gICAgY29uc3QgbGlzdCA9IGZvcm0uZWxlbWVudHMubmV3X2xpc3QudmFsdWU7XG5cbiAgICAvLyBSZXNldCB0aGUgZm9ybSBhZnRlciBzdWJtaXNzaW9uXG4gICAgZm9ybS5yZXNldCgpO1xuXG4gICAgLy8gU2VuZCBuZXcgbGlzdCB0byBvcHRpb25zLlxuICAgIGxpc3RPcHRpb25zKGxpc3QpO1xuXG4gIH0pO1xuXG4gIGZvcm0uaW5uZXJIVE1MID0gYFxuICAgICAgPGxhYmVsIGZvcj1cIm5ld19saXN0XCI+VGl0bGU6PC9sYWJlbD5cbiAgICAgIDxpbnB1dCB0eXBlPVwidGV4dFwiIGlkPVwibmV3X2xpc3RcIiBuYW1lPVwibmV3X2xpc3RcIiByZXF1aXJlZD48YnI+XG5cbiAgICAgIDxsYWJlbCBmb3JcInN1Ym1pdFwiPjwvbGFiZWw+XG4gICAgICA8aW5wdXQgdHlwZT1cInN1Ym1pdFwiIHZhbHVlPVwiTmV3IExpc3RcIiBpZD1cInN1Ym1pdFwiPlxuICBgO1xuXG4gIHNpZGViYXJDb250YWluZXIuYXBwZW5kQ2hpbGQoZm9ybSk7XG59XG5cblxuIiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHRpZDogbW9kdWxlSWQsXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbiIsIi8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSAobW9kdWxlKSA9PiB7XG5cdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuXHRcdCgpID0+IChtb2R1bGVbJ2RlZmF1bHQnXSkgOlxuXHRcdCgpID0+IChtb2R1bGUpO1xuXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCB7IGE6IGdldHRlciB9KTtcblx0cmV0dXJuIGdldHRlcjtcbn07IiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18ubmMgPSB1bmRlZmluZWQ7IiwiaW1wb3J0IHtyZW5kZXJUb2RvfSBmcm9tIFwiLi90b2RvRGlzcGxheS5qc1wiO1xuaW1wb3J0IHtyZW5kZXJUb2RvRm9ybSwgbGlzdE9wdGlvbnMgfSBmcm9tIFwiLi90b2RvRm9ybS5qc1wiO1xuaW1wb3J0IGNzcyBmcm9tIFwiLi4vZGlzdC9hc3NldHMvc3R5bGUuY3NzXCI7XG5pbXBvcnQgY2hlY2tib3hMaXN0ZW5lcnMgZnJvbSBcIi4vY2hlY2tCb3guanNcIjtcbmltcG9ydCB7IGRlbGV0ZUxpc3RlbmVycyB9IGZyb20gXCIuL2RlbGV0ZVRvZG8uanNcIjtcbmltcG9ydCB7IGZpbHRlckxpc3RlbmVycyB9IGZyb20gXCIuL3RvZG9GaWx0ZXIuanNcIjtcbmltcG9ydCB7IHJlbmRlck1vZGFsLCBtb2RhbExpc3RlbmVycyB9IGZyb20gXCIuL21vZGFsLmpzXCI7XG5cbnJlbmRlclRvZG9Gb3JtKCk7XG5yZW5kZXJUb2RvKCk7XG5yZW5kZXJNb2RhbCgpO1xuY2hlY2tib3hMaXN0ZW5lcnMoKTtcbm1vZGFsTGlzdGVuZXJzKCk7XG5kZWxldGVMaXN0ZW5lcnMoKTtcbmZpbHRlckxpc3RlbmVycygpO1xubGlzdE9wdGlvbnMoKTtcbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==