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

#new-list-form {
  padding-top: 1rem;
}

#modal-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
}
`, "",{"version":3,"sources":["webpack://./dist/assets/style.css"],"names":[],"mappings":"AAAA;EACE,2BAA2B;EAC3B,aAAa;EACb,8BAA8B;EAC9B,4BAA4B;AAC9B;;AAEA;EACE,aAAa;EACb,8BAA8B;EAC9B,aAAa;EACb,qBAAqB;AACvB;AACA;EACE,cAAc;AAChB;AACA;EACE,uBAAuB;AACzB;;AAEA;EACE,WAAW;EACX,uBAAuB;;AAEzB;;AAEA;EACE,cAAc;EACd,WAAW;EACX,sBAAsB;EACtB,uBAAuB;AACzB;;AAEA;EACE,cAAc;EACd,WAAW;EACX,iBAAiB;EACjB,kBAAkB;EAClB,aAAa;EACb,sBAAsB;AACxB;;AAEA;EACE,aAAa;EACb,QAAQ;EACR,qDAAqD;EACrD,mBAAmB;EACnB,mBAAmB;AACrB;;AAEA;EACE,YAAY;EACZ,WAAW;AACb;;AAEA;EACE,mBAAmB;EACnB,aAAa;EACb,sBAAsB;AACxB;;AAEA;EACE,qBAAqB;EACrB,0BAA0B;AAC5B;AACA;EACE,eAAe;AACjB;;AAEA;EACE,iBAAiB;AACnB;;AAEA;EACE,aAAa;EACb,8BAA8B;EAC9B,mBAAmB;AACrB","sourcesContent":["body {\n  background-color: aliceblue;\n  display: grid;\n  grid-template-columns: 1fr 3fr;\n  grid-template-rows: 5rem 1fr;\n}\n\nform {\n  display: grid;\n  grid-template-columns: 1fr 2fr;\n  grid-gap: 3px;\n  /* flex-wrap: wrap; */\n}\nlabel {\n  grid-column: 1;\n}\n#submit {\n  grid-column: 1 / span 2;\n}\n\n#site-title {\n  grid-row: 1;\n  grid-column: 1 / span 2;\n\n}\n\n#sidebar {\n  grid-column: 1;\n  grid-row: 2;\n  max-width: fit-content;\n  max-height: fit-content;\n}\n\n#todos-container {\n  grid-column: 2;\n  grid-row: 2;\n  margin-left: 2rem;\n  margin-right: 2rem;\n  display: flex;\n  flex-direction: column;\n}\n\n.todo-item {\n  display: grid;\n  gap: 5px;\n  grid-template-columns: .25fr 1fr 1fr .5fr .25fr .25fr;\n  padding-bottom: 5px;\n  align-items: center;\n}\n\n.checkbox {\n  height: 25px;\n  width: 25px;\n}\n\n#list-container {\n  padding-top: 1.5rem;\n  display: flex;\n  flex-direction: column;\n}\n\n.list {\n  padding-bottom: .5rem;\n  text-decoration: underline;\n}\n.list:hover {\n  cursor: pointer;\n}\n\n#new-list-form {\n  padding-top: 1rem;\n}\n\n#modal-header {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n}\n"],"sourceRoot":""}]);
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
      <input type="text" id="list" name="list" value=${todoItem.list}><br>

      <input type="submit" value="Edit Todo" id="submit">
    `;

  modal.appendChild(todoData);
}


/***/ }),

/***/ "./src/todoDisplay.js":
/*!****************************!*\
  !*** ./src/todoDisplay.js ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   renderLists: () => (/* binding */ renderLists),
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
      <input list="list-options" id="list" name="list />
      <datalist id="list-options"></datalist><br>

      <label for="submit"></label>
      <input type="submit" value="Create Todo" id="submit">
  `;

  sidebarContainer.appendChild(form);
  body.appendChild(sidebarContainer);
      // Render new list form.
      renderNewListForm();
}

function sendToStorage(todoItem) {
  window.localStorage.setItem(window.localStorage.length, todoItem);
};

function listOptions(newList=false) {
  const listSelector = document.getElementById("list")

  // Collect lists from all todo items in local storage.
  let lists = [];
  for (let i = 0; i < window.localStorage.length; i++) {
    let todoItem = JSON.parse(window.localStorage.getItem(i.toString()));
    lists.push(todoItem.list);
  }

  // Add new list if necessary.
  if (newList) {
    lists.push(newList);
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








// window.localStorage.clear();

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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IndlYnBhY2s6Ly9qcy10b2RvLy4vZGlzdC9hc3NldHMvc3R5bGUuY3NzIiwid2VicGFjazovL2pzLXRvZG8vLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzIiwid2VicGFjazovL2pzLXRvZG8vLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qcyIsIndlYnBhY2s6Ly9qcy10b2RvLy4vZGlzdC9hc3NldHMvc3R5bGUuY3NzPzUyZmEiLCJ3ZWJwYWNrOi8vanMtdG9kby8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qcyIsIndlYnBhY2s6Ly9qcy10b2RvLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qcyIsIndlYnBhY2s6Ly9qcy10b2RvLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzIiwid2VicGFjazovL2pzLXRvZG8vLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanMiLCJ3ZWJwYWNrOi8vanMtdG9kby8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzIiwid2VicGFjazovL2pzLXRvZG8vLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qcyIsIndlYnBhY2s6Ly9qcy10b2RvLy4vc3JjL2NoZWNrQm94LmpzIiwid2VicGFjazovL2pzLXRvZG8vLi9zcmMvZGVsZXRlVG9kby5qcyIsIndlYnBhY2s6Ly9qcy10b2RvLy4vc3JjL21vZGFsLmpzIiwid2VicGFjazovL2pzLXRvZG8vLi9zcmMvdG9kb0Rpc3BsYXkuanMiLCJ3ZWJwYWNrOi8vanMtdG9kby8uL3NyYy90b2RvRmlsdGVyLmpzIiwid2VicGFjazovL2pzLXRvZG8vLi9zcmMvdG9kb0Zvcm0uanMiLCJ3ZWJwYWNrOi8vanMtdG9kby93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly9qcy10b2RvL3dlYnBhY2svcnVudGltZS9jb21wYXQgZ2V0IGRlZmF1bHQgZXhwb3J0Iiwid2VicGFjazovL2pzLXRvZG8vd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL2pzLXRvZG8vd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly9qcy10b2RvL3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vanMtdG9kby93ZWJwYWNrL3J1bnRpbWUvbm9uY2UiLCJ3ZWJwYWNrOi8vanMtdG9kby8uL3NyYy9ob21lLmpzIl0sInNvdXJjZXNDb250ZW50IjpbIi8vIEltcG9ydHNcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fIGZyb20gXCIuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyBmcm9tIFwiLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiO1xudmFyIF9fX0NTU19MT0FERVJfRVhQT1JUX19fID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18pO1xuLy8gTW9kdWxlXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIGBib2R5IHtcbiAgYmFja2dyb3VuZC1jb2xvcjogYWxpY2VibHVlO1xuICBkaXNwbGF5OiBncmlkO1xuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDFmciAzZnI7XG4gIGdyaWQtdGVtcGxhdGUtcm93czogNXJlbSAxZnI7XG59XG5cbmZvcm0ge1xuICBkaXNwbGF5OiBncmlkO1xuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDFmciAyZnI7XG4gIGdyaWQtZ2FwOiAzcHg7XG4gIC8qIGZsZXgtd3JhcDogd3JhcDsgKi9cbn1cbmxhYmVsIHtcbiAgZ3JpZC1jb2x1bW46IDE7XG59XG4jc3VibWl0IHtcbiAgZ3JpZC1jb2x1bW46IDEgLyBzcGFuIDI7XG59XG5cbiNzaXRlLXRpdGxlIHtcbiAgZ3JpZC1yb3c6IDE7XG4gIGdyaWQtY29sdW1uOiAxIC8gc3BhbiAyO1xuXG59XG5cbiNzaWRlYmFyIHtcbiAgZ3JpZC1jb2x1bW46IDE7XG4gIGdyaWQtcm93OiAyO1xuICBtYXgtd2lkdGg6IGZpdC1jb250ZW50O1xuICBtYXgtaGVpZ2h0OiBmaXQtY29udGVudDtcbn1cblxuI3RvZG9zLWNvbnRhaW5lciB7XG4gIGdyaWQtY29sdW1uOiAyO1xuICBncmlkLXJvdzogMjtcbiAgbWFyZ2luLWxlZnQ6IDJyZW07XG4gIG1hcmdpbi1yaWdodDogMnJlbTtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbn1cblxuLnRvZG8taXRlbSB7XG4gIGRpc3BsYXk6IGdyaWQ7XG4gIGdhcDogNXB4O1xuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IC4yNWZyIDFmciAxZnIgLjVmciAuMjVmciAuMjVmcjtcbiAgcGFkZGluZy1ib3R0b206IDVweDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbn1cblxuLmNoZWNrYm94IHtcbiAgaGVpZ2h0OiAyNXB4O1xuICB3aWR0aDogMjVweDtcbn1cblxuI2xpc3QtY29udGFpbmVyIHtcbiAgcGFkZGluZy10b3A6IDEuNXJlbTtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbn1cblxuLmxpc3Qge1xuICBwYWRkaW5nLWJvdHRvbTogLjVyZW07XG4gIHRleHQtZGVjb3JhdGlvbjogdW5kZXJsaW5lO1xufVxuLmxpc3Q6aG92ZXIge1xuICBjdXJzb3I6IHBvaW50ZXI7XG59XG5cbiNuZXctbGlzdC1mb3JtIHtcbiAgcGFkZGluZy10b3A6IDFyZW07XG59XG5cbiNtb2RhbC1oZWFkZXIge1xuICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG59XG5gLCBcIlwiLHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcIndlYnBhY2s6Ly8uL2Rpc3QvYXNzZXRzL3N0eWxlLmNzc1wiXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiQUFBQTtFQUNFLDJCQUEyQjtFQUMzQixhQUFhO0VBQ2IsOEJBQThCO0VBQzlCLDRCQUE0QjtBQUM5Qjs7QUFFQTtFQUNFLGFBQWE7RUFDYiw4QkFBOEI7RUFDOUIsYUFBYTtFQUNiLHFCQUFxQjtBQUN2QjtBQUNBO0VBQ0UsY0FBYztBQUNoQjtBQUNBO0VBQ0UsdUJBQXVCO0FBQ3pCOztBQUVBO0VBQ0UsV0FBVztFQUNYLHVCQUF1Qjs7QUFFekI7O0FBRUE7RUFDRSxjQUFjO0VBQ2QsV0FBVztFQUNYLHNCQUFzQjtFQUN0Qix1QkFBdUI7QUFDekI7O0FBRUE7RUFDRSxjQUFjO0VBQ2QsV0FBVztFQUNYLGlCQUFpQjtFQUNqQixrQkFBa0I7RUFDbEIsYUFBYTtFQUNiLHNCQUFzQjtBQUN4Qjs7QUFFQTtFQUNFLGFBQWE7RUFDYixRQUFRO0VBQ1IscURBQXFEO0VBQ3JELG1CQUFtQjtFQUNuQixtQkFBbUI7QUFDckI7O0FBRUE7RUFDRSxZQUFZO0VBQ1osV0FBVztBQUNiOztBQUVBO0VBQ0UsbUJBQW1CO0VBQ25CLGFBQWE7RUFDYixzQkFBc0I7QUFDeEI7O0FBRUE7RUFDRSxxQkFBcUI7RUFDckIsMEJBQTBCO0FBQzVCO0FBQ0E7RUFDRSxlQUFlO0FBQ2pCOztBQUVBO0VBQ0UsaUJBQWlCO0FBQ25COztBQUVBO0VBQ0UsYUFBYTtFQUNiLDhCQUE4QjtFQUM5QixtQkFBbUI7QUFDckJcIixcInNvdXJjZXNDb250ZW50XCI6W1wiYm9keSB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiBhbGljZWJsdWU7XFxuICBkaXNwbGF5OiBncmlkO1xcbiAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxZnIgM2ZyO1xcbiAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiA1cmVtIDFmcjtcXG59XFxuXFxuZm9ybSB7XFxuICBkaXNwbGF5OiBncmlkO1xcbiAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxZnIgMmZyO1xcbiAgZ3JpZC1nYXA6IDNweDtcXG4gIC8qIGZsZXgtd3JhcDogd3JhcDsgKi9cXG59XFxubGFiZWwge1xcbiAgZ3JpZC1jb2x1bW46IDE7XFxufVxcbiNzdWJtaXQge1xcbiAgZ3JpZC1jb2x1bW46IDEgLyBzcGFuIDI7XFxufVxcblxcbiNzaXRlLXRpdGxlIHtcXG4gIGdyaWQtcm93OiAxO1xcbiAgZ3JpZC1jb2x1bW46IDEgLyBzcGFuIDI7XFxuXFxufVxcblxcbiNzaWRlYmFyIHtcXG4gIGdyaWQtY29sdW1uOiAxO1xcbiAgZ3JpZC1yb3c6IDI7XFxuICBtYXgtd2lkdGg6IGZpdC1jb250ZW50O1xcbiAgbWF4LWhlaWdodDogZml0LWNvbnRlbnQ7XFxufVxcblxcbiN0b2Rvcy1jb250YWluZXIge1xcbiAgZ3JpZC1jb2x1bW46IDI7XFxuICBncmlkLXJvdzogMjtcXG4gIG1hcmdpbi1sZWZ0OiAycmVtO1xcbiAgbWFyZ2luLXJpZ2h0OiAycmVtO1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxufVxcblxcbi50b2RvLWl0ZW0ge1xcbiAgZGlzcGxheTogZ3JpZDtcXG4gIGdhcDogNXB4O1xcbiAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAuMjVmciAxZnIgMWZyIC41ZnIgLjI1ZnIgLjI1ZnI7XFxuICBwYWRkaW5nLWJvdHRvbTogNXB4O1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG59XFxuXFxuLmNoZWNrYm94IHtcXG4gIGhlaWdodDogMjVweDtcXG4gIHdpZHRoOiAyNXB4O1xcbn1cXG5cXG4jbGlzdC1jb250YWluZXIge1xcbiAgcGFkZGluZy10b3A6IDEuNXJlbTtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbn1cXG5cXG4ubGlzdCB7XFxuICBwYWRkaW5nLWJvdHRvbTogLjVyZW07XFxuICB0ZXh0LWRlY29yYXRpb246IHVuZGVybGluZTtcXG59XFxuLmxpc3Q6aG92ZXIge1xcbiAgY3Vyc29yOiBwb2ludGVyO1xcbn1cXG5cXG4jbmV3LWxpc3QtZm9ybSB7XFxuICBwYWRkaW5nLXRvcDogMXJlbTtcXG59XFxuXFxuI21vZGFsLWhlYWRlciB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG59XFxuXCJdLFwic291cmNlUm9vdFwiOlwiXCJ9XSk7XG4vLyBFeHBvcnRzXG5leHBvcnQgZGVmYXVsdCBfX19DU1NfTE9BREVSX0VYUE9SVF9fXztcbiIsIlwidXNlIHN0cmljdFwiO1xuXG4vKlxuICBNSVQgTGljZW5zZSBodHRwOi8vd3d3Lm9wZW5zb3VyY2Uub3JnL2xpY2Vuc2VzL21pdC1saWNlbnNlLnBocFxuICBBdXRob3IgVG9iaWFzIEtvcHBlcnMgQHNva3JhXG4qL1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoY3NzV2l0aE1hcHBpbmdUb1N0cmluZykge1xuICB2YXIgbGlzdCA9IFtdO1xuXG4gIC8vIHJldHVybiB0aGUgbGlzdCBvZiBtb2R1bGVzIGFzIGNzcyBzdHJpbmdcbiAgbGlzdC50b1N0cmluZyA9IGZ1bmN0aW9uIHRvU3RyaW5nKCkge1xuICAgIHJldHVybiB0aGlzLm1hcChmdW5jdGlvbiAoaXRlbSkge1xuICAgICAgdmFyIGNvbnRlbnQgPSBcIlwiO1xuICAgICAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBpdGVtWzVdICE9PSBcInVuZGVmaW5lZFwiO1xuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKTtcbiAgICAgIH1cbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpO1xuICAgICAgfVxuICAgICAgY29udGVudCArPSBjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKGl0ZW0pO1xuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICByZXR1cm4gY29udGVudDtcbiAgICB9KS5qb2luKFwiXCIpO1xuICB9O1xuXG4gIC8vIGltcG9ydCBhIGxpc3Qgb2YgbW9kdWxlcyBpbnRvIHRoZSBsaXN0XG4gIGxpc3QuaSA9IGZ1bmN0aW9uIGkobW9kdWxlcywgbWVkaWEsIGRlZHVwZSwgc3VwcG9ydHMsIGxheWVyKSB7XG4gICAgaWYgKHR5cGVvZiBtb2R1bGVzID09PSBcInN0cmluZ1wiKSB7XG4gICAgICBtb2R1bGVzID0gW1tudWxsLCBtb2R1bGVzLCB1bmRlZmluZWRdXTtcbiAgICB9XG4gICAgdmFyIGFscmVhZHlJbXBvcnRlZE1vZHVsZXMgPSB7fTtcbiAgICBpZiAoZGVkdXBlKSB7XG4gICAgICBmb3IgKHZhciBrID0gMDsgayA8IHRoaXMubGVuZ3RoOyBrKyspIHtcbiAgICAgICAgdmFyIGlkID0gdGhpc1trXVswXTtcbiAgICAgICAgaWYgKGlkICE9IG51bGwpIHtcbiAgICAgICAgICBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2lkXSA9IHRydWU7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gICAgZm9yICh2YXIgX2sgPSAwOyBfayA8IG1vZHVsZXMubGVuZ3RoOyBfaysrKSB7XG4gICAgICB2YXIgaXRlbSA9IFtdLmNvbmNhdChtb2R1bGVzW19rXSk7XG4gICAgICBpZiAoZGVkdXBlICYmIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaXRlbVswXV0pIHtcbiAgICAgICAgY29udGludWU7XG4gICAgICB9XG4gICAgICBpZiAodHlwZW9mIGxheWVyICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgIGlmICh0eXBlb2YgaXRlbVs1XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgaWYgKG1lZGlhKSB7XG4gICAgICAgIGlmICghaXRlbVsyXSkge1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGlmIChzdXBwb3J0cykge1xuICAgICAgICBpZiAoIWl0ZW1bNF0pIHtcbiAgICAgICAgICBpdGVtWzRdID0gXCJcIi5jb25jYXQoc3VwcG9ydHMpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs0XSA9IHN1cHBvcnRzO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBsaXN0LnB1c2goaXRlbSk7XG4gICAgfVxuICB9O1xuICByZXR1cm4gbGlzdDtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGl0ZW0pIHtcbiAgdmFyIGNvbnRlbnQgPSBpdGVtWzFdO1xuICB2YXIgY3NzTWFwcGluZyA9IGl0ZW1bM107XG4gIGlmICghY3NzTWFwcGluZykge1xuICAgIHJldHVybiBjb250ZW50O1xuICB9XG4gIGlmICh0eXBlb2YgYnRvYSA9PT0gXCJmdW5jdGlvblwiKSB7XG4gICAgdmFyIGJhc2U2NCA9IGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KGNzc01hcHBpbmcpKSkpO1xuICAgIHZhciBkYXRhID0gXCJzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtjaGFyc2V0PXV0Zi04O2Jhc2U2NCxcIi5jb25jYXQoYmFzZTY0KTtcbiAgICB2YXIgc291cmNlTWFwcGluZyA9IFwiLyojIFwiLmNvbmNhdChkYXRhLCBcIiAqL1wiKTtcbiAgICByZXR1cm4gW2NvbnRlbnRdLmNvbmNhdChbc291cmNlTWFwcGluZ10pLmpvaW4oXCJcXG5cIik7XG4gIH1cbiAgcmV0dXJuIFtjb250ZW50XS5qb2luKFwiXFxuXCIpO1xufTsiLCJcbiAgICAgIGltcG9ydCBBUEkgZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanNcIjtcbiAgICAgIGltcG9ydCBkb21BUEkgZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydEZuIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qc1wiO1xuICAgICAgaW1wb3J0IHNldEF0dHJpYnV0ZXMgZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRTdHlsZUVsZW1lbnQgZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanNcIjtcbiAgICAgIGltcG9ydCBzdHlsZVRhZ1RyYW5zZm9ybUZuIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanNcIjtcbiAgICAgIGltcG9ydCBjb250ZW50LCAqIGFzIG5hbWVkRXhwb3J0IGZyb20gXCIhIS4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc3R5bGUuY3NzXCI7XG4gICAgICBcbiAgICAgIFxuXG52YXIgb3B0aW9ucyA9IHt9O1xuXG5vcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtID0gc3R5bGVUYWdUcmFuc2Zvcm1Gbjtcbm9wdGlvbnMuc2V0QXR0cmlidXRlcyA9IHNldEF0dHJpYnV0ZXM7XG5cbiAgICAgIG9wdGlvbnMuaW5zZXJ0ID0gaW5zZXJ0Rm4uYmluZChudWxsLCBcImhlYWRcIik7XG4gICAgXG5vcHRpb25zLmRvbUFQSSA9IGRvbUFQSTtcbm9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50ID0gaW5zZXJ0U3R5bGVFbGVtZW50O1xuXG52YXIgdXBkYXRlID0gQVBJKGNvbnRlbnQsIG9wdGlvbnMpO1xuXG5cblxuZXhwb3J0ICogZnJvbSBcIiEhLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zdHlsZS5jc3NcIjtcbiAgICAgICBleHBvcnQgZGVmYXVsdCBjb250ZW50ICYmIGNvbnRlbnQubG9jYWxzID8gY29udGVudC5sb2NhbHMgOiB1bmRlZmluZWQ7XG4iLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIHN0eWxlc0luRE9NID0gW107XG5mdW5jdGlvbiBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKSB7XG4gIHZhciByZXN1bHQgPSAtMTtcbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBzdHlsZXNJbkRPTS5sZW5ndGg7IGkrKykge1xuICAgIGlmIChzdHlsZXNJbkRPTVtpXS5pZGVudGlmaWVyID09PSBpZGVudGlmaWVyKSB7XG4gICAgICByZXN1bHQgPSBpO1xuICAgICAgYnJlYWs7XG4gICAgfVxuICB9XG4gIHJldHVybiByZXN1bHQ7XG59XG5mdW5jdGlvbiBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucykge1xuICB2YXIgaWRDb3VudE1hcCA9IHt9O1xuICB2YXIgaWRlbnRpZmllcnMgPSBbXTtcbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBsaXN0Lmxlbmd0aDsgaSsrKSB7XG4gICAgdmFyIGl0ZW0gPSBsaXN0W2ldO1xuICAgIHZhciBpZCA9IG9wdGlvbnMuYmFzZSA/IGl0ZW1bMF0gKyBvcHRpb25zLmJhc2UgOiBpdGVtWzBdO1xuICAgIHZhciBjb3VudCA9IGlkQ291bnRNYXBbaWRdIHx8IDA7XG4gICAgdmFyIGlkZW50aWZpZXIgPSBcIlwiLmNvbmNhdChpZCwgXCIgXCIpLmNvbmNhdChjb3VudCk7XG4gICAgaWRDb3VudE1hcFtpZF0gPSBjb3VudCArIDE7XG4gICAgdmFyIGluZGV4QnlJZGVudGlmaWVyID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgdmFyIG9iaiA9IHtcbiAgICAgIGNzczogaXRlbVsxXSxcbiAgICAgIG1lZGlhOiBpdGVtWzJdLFxuICAgICAgc291cmNlTWFwOiBpdGVtWzNdLFxuICAgICAgc3VwcG9ydHM6IGl0ZW1bNF0sXG4gICAgICBsYXllcjogaXRlbVs1XVxuICAgIH07XG4gICAgaWYgKGluZGV4QnlJZGVudGlmaWVyICE9PSAtMSkge1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnJlZmVyZW5jZXMrKztcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS51cGRhdGVyKG9iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIHZhciB1cGRhdGVyID0gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucyk7XG4gICAgICBvcHRpb25zLmJ5SW5kZXggPSBpO1xuICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKGksIDAsIHtcbiAgICAgICAgaWRlbnRpZmllcjogaWRlbnRpZmllcixcbiAgICAgICAgdXBkYXRlcjogdXBkYXRlcixcbiAgICAgICAgcmVmZXJlbmNlczogMVxuICAgICAgfSk7XG4gICAgfVxuICAgIGlkZW50aWZpZXJzLnB1c2goaWRlbnRpZmllcik7XG4gIH1cbiAgcmV0dXJuIGlkZW50aWZpZXJzO1xufVxuZnVuY3Rpb24gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucykge1xuICB2YXIgYXBpID0gb3B0aW9ucy5kb21BUEkob3B0aW9ucyk7XG4gIGFwaS51cGRhdGUob2JqKTtcbiAgdmFyIHVwZGF0ZXIgPSBmdW5jdGlvbiB1cGRhdGVyKG5ld09iaikge1xuICAgIGlmIChuZXdPYmopIHtcbiAgICAgIGlmIChuZXdPYmouY3NzID09PSBvYmouY3NzICYmIG5ld09iai5tZWRpYSA9PT0gb2JqLm1lZGlhICYmIG5ld09iai5zb3VyY2VNYXAgPT09IG9iai5zb3VyY2VNYXAgJiYgbmV3T2JqLnN1cHBvcnRzID09PSBvYmouc3VwcG9ydHMgJiYgbmV3T2JqLmxheWVyID09PSBvYmoubGF5ZXIpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuICAgICAgYXBpLnVwZGF0ZShvYmogPSBuZXdPYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICBhcGkucmVtb3ZlKCk7XG4gICAgfVxuICB9O1xuICByZXR1cm4gdXBkYXRlcjtcbn1cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGxpc3QsIG9wdGlvbnMpIHtcbiAgb3B0aW9ucyA9IG9wdGlvbnMgfHwge307XG4gIGxpc3QgPSBsaXN0IHx8IFtdO1xuICB2YXIgbGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpO1xuICByZXR1cm4gZnVuY3Rpb24gdXBkYXRlKG5ld0xpc3QpIHtcbiAgICBuZXdMaXN0ID0gbmV3TGlzdCB8fCBbXTtcbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IGkrKykge1xuICAgICAgdmFyIGlkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbaV07XG4gICAgICB2YXIgaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4XS5yZWZlcmVuY2VzLS07XG4gICAgfVxuICAgIHZhciBuZXdMYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obmV3TGlzdCwgb3B0aW9ucyk7XG4gICAgZm9yICh2YXIgX2kgPSAwOyBfaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IF9pKyspIHtcbiAgICAgIHZhciBfaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tfaV07XG4gICAgICB2YXIgX2luZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoX2lkZW50aWZpZXIpO1xuICAgICAgaWYgKHN0eWxlc0luRE9NW19pbmRleF0ucmVmZXJlbmNlcyA9PT0gMCkge1xuICAgICAgICBzdHlsZXNJbkRPTVtfaW5kZXhdLnVwZGF0ZXIoKTtcbiAgICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKF9pbmRleCwgMSk7XG4gICAgICB9XG4gICAgfVxuICAgIGxhc3RJZGVudGlmaWVycyA9IG5ld0xhc3RJZGVudGlmaWVycztcbiAgfTtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBtZW1vID0ge307XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gZ2V0VGFyZ2V0KHRhcmdldCkge1xuICBpZiAodHlwZW9mIG1lbW9bdGFyZ2V0XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgIHZhciBzdHlsZVRhcmdldCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IodGFyZ2V0KTtcblxuICAgIC8vIFNwZWNpYWwgY2FzZSB0byByZXR1cm4gaGVhZCBvZiBpZnJhbWUgaW5zdGVhZCBvZiBpZnJhbWUgaXRzZWxmXG4gICAgaWYgKHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCAmJiBzdHlsZVRhcmdldCBpbnN0YW5jZW9mIHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCkge1xuICAgICAgdHJ5IHtcbiAgICAgICAgLy8gVGhpcyB3aWxsIHRocm93IGFuIGV4Y2VwdGlvbiBpZiBhY2Nlc3MgdG8gaWZyYW1lIGlzIGJsb2NrZWRcbiAgICAgICAgLy8gZHVlIHRvIGNyb3NzLW9yaWdpbiByZXN0cmljdGlvbnNcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBzdHlsZVRhcmdldC5jb250ZW50RG9jdW1lbnQuaGVhZDtcbiAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgLy8gaXN0YW5idWwgaWdub3JlIG5leHRcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBudWxsO1xuICAgICAgfVxuICAgIH1cbiAgICBtZW1vW3RhcmdldF0gPSBzdHlsZVRhcmdldDtcbiAgfVxuICByZXR1cm4gbWVtb1t0YXJnZXRdO1xufVxuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGluc2VydEJ5U2VsZWN0b3IoaW5zZXJ0LCBzdHlsZSkge1xuICB2YXIgdGFyZ2V0ID0gZ2V0VGFyZ2V0KGluc2VydCk7XG4gIGlmICghdGFyZ2V0KSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKFwiQ291bGRuJ3QgZmluZCBhIHN0eWxlIHRhcmdldC4gVGhpcyBwcm9iYWJseSBtZWFucyB0aGF0IHRoZSB2YWx1ZSBmb3IgdGhlICdpbnNlcnQnIHBhcmFtZXRlciBpcyBpbnZhbGlkLlwiKTtcbiAgfVxuICB0YXJnZXQuYXBwZW5kQ2hpbGQoc3R5bGUpO1xufVxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRCeVNlbGVjdG9yOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKSB7XG4gIHZhciBlbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInN0eWxlXCIpO1xuICBvcHRpb25zLnNldEF0dHJpYnV0ZXMoZWxlbWVudCwgb3B0aW9ucy5hdHRyaWJ1dGVzKTtcbiAgb3B0aW9ucy5pbnNlcnQoZWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbiAgcmV0dXJuIGVsZW1lbnQ7XG59XG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydFN0eWxlRWxlbWVudDsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMoc3R5bGVFbGVtZW50KSB7XG4gIHZhciBub25jZSA9IHR5cGVvZiBfX3dlYnBhY2tfbm9uY2VfXyAhPT0gXCJ1bmRlZmluZWRcIiA/IF9fd2VicGFja19ub25jZV9fIDogbnVsbDtcbiAgaWYgKG5vbmNlKSB7XG4gICAgc3R5bGVFbGVtZW50LnNldEF0dHJpYnV0ZShcIm5vbmNlXCIsIG5vbmNlKTtcbiAgfVxufVxubW9kdWxlLmV4cG9ydHMgPSBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXM7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopIHtcbiAgdmFyIGNzcyA9IFwiXCI7XG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChvYmouc3VwcG9ydHMsIFwiKSB7XCIpO1xuICB9XG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJAbWVkaWEgXCIuY29uY2F0KG9iai5tZWRpYSwgXCIge1wiKTtcbiAgfVxuICB2YXIgbmVlZExheWVyID0gdHlwZW9mIG9iai5sYXllciAhPT0gXCJ1bmRlZmluZWRcIjtcbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIkBsYXllclwiLmNvbmNhdChvYmoubGF5ZXIubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChvYmoubGF5ZXIpIDogXCJcIiwgXCIge1wiKTtcbiAgfVxuICBjc3MgKz0gb2JqLmNzcztcbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cbiAgdmFyIHNvdXJjZU1hcCA9IG9iai5zb3VyY2VNYXA7XG4gIGlmIChzb3VyY2VNYXAgJiYgdHlwZW9mIGJ0b2EgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICBjc3MgKz0gXCJcXG4vKiMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LFwiLmNvbmNhdChidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShzb3VyY2VNYXApKSkpLCBcIiAqL1wiKTtcbiAgfVxuXG4gIC8vIEZvciBvbGQgSUVcbiAgLyogaXN0YW5idWwgaWdub3JlIGlmICAqL1xuICBvcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xufVxuZnVuY3Rpb24gcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCkge1xuICAvLyBpc3RhbmJ1bCBpZ25vcmUgaWZcbiAgaWYgKHN0eWxlRWxlbWVudC5wYXJlbnROb2RlID09PSBudWxsKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG4gIHN0eWxlRWxlbWVudC5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudCk7XG59XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gZG9tQVBJKG9wdGlvbnMpIHtcbiAgaWYgKHR5cGVvZiBkb2N1bWVudCA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgIHJldHVybiB7XG4gICAgICB1cGRhdGU6IGZ1bmN0aW9uIHVwZGF0ZSgpIHt9LFxuICAgICAgcmVtb3ZlOiBmdW5jdGlvbiByZW1vdmUoKSB7fVxuICAgIH07XG4gIH1cbiAgdmFyIHN0eWxlRWxlbWVudCA9IG9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpO1xuICByZXR1cm4ge1xuICAgIHVwZGF0ZTogZnVuY3Rpb24gdXBkYXRlKG9iaikge1xuICAgICAgYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopO1xuICAgIH0sXG4gICAgcmVtb3ZlOiBmdW5jdGlvbiByZW1vdmUoKSB7XG4gICAgICByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KTtcbiAgICB9XG4gIH07XG59XG5tb2R1bGUuZXhwb3J0cyA9IGRvbUFQSTsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCkge1xuICBpZiAoc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQpIHtcbiAgICBzdHlsZUVsZW1lbnQuc3R5bGVTaGVldC5jc3NUZXh0ID0gY3NzO1xuICB9IGVsc2Uge1xuICAgIHdoaWxlIChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCkge1xuICAgICAgc3R5bGVFbGVtZW50LnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKTtcbiAgICB9XG4gICAgc3R5bGVFbGVtZW50LmFwcGVuZENoaWxkKGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKGNzcykpO1xuICB9XG59XG5tb2R1bGUuZXhwb3J0cyA9IHN0eWxlVGFnVHJhbnNmb3JtOyIsImV4cG9ydCBkZWZhdWx0IGNoZWNrYm94TGlzdGVuZXJzO1xuXG5mdW5jdGlvbiBtYXJrQm94KGtleSkge1xuICBsZXQgdG9kb0l0ZW0gPSBKU09OLnBhcnNlKHdpbmRvdy5sb2NhbFN0b3JhZ2UuZ2V0SXRlbShrZXkpKTtcblxuICBpZiAodG9kb0l0ZW0uY29tcGxldGVkKSB7XG4gICAgdG9kb0l0ZW0uY29tcGxldGVkID0gZmFsc2U7XG4gIH0gZWxzZSBpZiAoIXRvZG9JdGVtLmNvbXBsZXRlZCkge1xuICAgIHRvZG9JdGVtLmNvbXBsZXRlZCA9IHRydWU7XG4gIH1cbiAgd2luZG93LmxvY2FsU3RvcmFnZS5zZXRJdGVtKGtleSwgSlNPTi5zdHJpbmdpZnkodG9kb0l0ZW0pKTtcbn1cblxuZnVuY3Rpb24gY2hlY2tib3hMaXN0ZW5lcnMoKSB7XG4gIGxldCBjaGVja0JveGVzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChcImlucHV0W3R5cGU9J2NoZWNrYm94J11cIik7XG5cbiAgY2hlY2tCb3hlcy5mb3JFYWNoKChjaGVja2JveCkgPT4ge1xuICAgIGNoZWNrYm94Lm9uY2xpY2sgPSAoKSA9PiB7XG4gICAgICBtYXJrQm94KGNoZWNrYm94LnBhcmVudEVsZW1lbnQuaWQpXG4gICAgfVxuICB9KVxufVxuIiwiZXhwb3J0IHsgZGVsZXRlVG9kbywgZGVsZXRlTGlzdGVuZXJzIH07XG5pbXBvcnQge3JlbmRlclRvZG99IGZyb20gXCIuL3RvZG9EaXNwbGF5XCI7XG5cbmZ1bmN0aW9uIGRlbGV0ZVRvZG8oa2V5KSB7XG4gIHdpbmRvdy5sb2NhbFN0b3JhZ2Uuc2V0SXRlbShrZXksICd7XCJkZWxldGVkXCI6XCJkZWxldGVkXCJ9Jyk7XG5cbiAgbGV0IHRvZG9zQ29udGFpbmVyID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJ0b2Rvcy1jb250YWluZXJcIik7XG5cbiAgLy8gUmVtb3ZlIGNoaWxkcmVuIGZyb20gdGhlIGNvbnRhaW5lciBpZiB0aGV5IGV4aXN0LlxuICBpZiAodG9kb3NDb250YWluZXIuY2hpbGRyZW4ubGVuZ3RoID4gMCkge1xuICAgIHdoaWxlICh0b2Rvc0NvbnRhaW5lci5maXJzdENoaWxkKSB7XG4gICAgICB0b2Rvc0NvbnRhaW5lci5yZW1vdmVDaGlsZCh0b2Rvc0NvbnRhaW5lci5maXJzdENoaWxkKTtcbiAgICB9XG4gIH1cbiAgcmVuZGVyVG9kbygpO1xufVxuXG5mdW5jdGlvbiBkZWxldGVMaXN0ZW5lcnMoKSB7XG4gIGxldCBkZWxldGVCdXR0b25zID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChcIi5kZWxldGUtYnRuXCIpO1xuXG4gIGRlbGV0ZUJ1dHRvbnMuZm9yRWFjaCgoZGVsZXRlQnV0dG9uKSA9PiB7XG4gICAgZGVsZXRlQnV0dG9uLm9uY2xpY2sgPSAoKSA9PiB7XG4gICAgICBkZWxldGVUb2RvKGRlbGV0ZUJ1dHRvbi5wYXJlbnRFbGVtZW50LmlkKTtcbiAgICB9XG4gIH0pXG59XG4iLCJleHBvcnQgeyByZW5kZXJNb2RhbCwgbW9kYWxMaXN0ZW5lcnMgfVxuXG5mdW5jdGlvbiByZW5kZXJNb2RhbCgpIHtcbiAgY29uc3QgdG9kb3NDb250YWluZXIgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInRvZG9zLWNvbnRhaW5lclwiKTtcbiAgY29uc3QgbW9kYWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaWFsb2cnKTtcbiAgbW9kYWwuaWQgPSBcIm1vZGFsXCI7XG5cbiAgdG9kb3NDb250YWluZXIuYXBwZW5kQ2hpbGQobW9kYWwpO1xufVxuXG4vLyBIYW5kbGUgYnV0dG9ucyBvdXRzaWRlIG1vZGFsLlxuZnVuY3Rpb24gbW9kYWxMaXN0ZW5lcnMoKSB7XG4gIGNvbnN0IG1vZGFsID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJtb2RhbFwiKTtcbiAgbGV0IGVkaXRCdXR0b25zID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChcIi5lZGl0LWJ0blwiKTtcblxuICBlZGl0QnV0dG9ucy5mb3JFYWNoKChlZGl0QnV0dG9uKSA9PiB7XG4gICAgZWRpdEJ1dHRvbi5vbmNsaWNrID0gKCkgPT4ge1xuICAgICAgbW9kYWwuc2hvd01vZGFsKCk7XG4gICAgICB1cGRhdGVNb2RhbChlZGl0QnV0dG9uLnBhcmVudEVsZW1lbnQuaWQpO1xuICAgIH1cbiAgfSlcbn1cblxuLy8gQWRkIHRvZG8gZGF0YSB0byBtb2RhbC5cbmZ1bmN0aW9uIHVwZGF0ZU1vZGFsKGtleSkge1xuICBjb25zdCBtb2RhbCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwibW9kYWxcIik7XG5cbiAgLy8gY2xlYXIgYW55IGV4aXN0aW5nIGRhdGEuXG4gIGlmIChtb2RhbC5jaGlsZHJlbi5sZW5ndGggPiAwKSB7XG4gICAgd2hpbGUgKG1vZGFsLmZpcnN0Q2hpbGQpIHtcbiAgICAgIG1vZGFsLnJlbW92ZUNoaWxkKG1vZGFsLmZpcnN0Q2hpbGQpO1xuICAgIH1cbiAgfVxuXG4gIC8vIGFkZCBhIHRpdGxlIGFuZCBjbG9zZSBidXR0b24uXG4gIGNvbnN0IGhlYWRlckRpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gIGNvbnN0IG1vZGFsVGl0bGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaDNcIik7XG4gIGhlYWRlckRpdi5pZCA9IFwibW9kYWwtaGVhZGVyXCI7XG4gIG1vZGFsVGl0bGUudGV4dENvbnRlbnQgPSBcIlZpZXcgLyBFZGl0IFRvLWRvXCI7XG5cbiAgY29uc3QgY2xvc2VNb2RhbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJidXR0b25cIik7XG4gIGNsb3NlTW9kYWwuaW5uZXJIVE1MID0gXCImdGltZXNcIjtcbiAgY2xvc2VNb2RhbC5pZCA9IFwiY2xvc2VNb2RhbFwiO1xuXG4gIGhlYWRlckRpdi5hcHBlbmQobW9kYWxUaXRsZSwgY2xvc2VNb2RhbCk7XG4gIG1vZGFsLmFwcGVuZENoaWxkKGhlYWRlckRpdik7XG5cbiAgLy8gQWRkIGxpc3RlbmVyIHRvIGNsb3NlIGJ1dHRvbi5cbiAgY2xvc2VNb2RhbC5vbmNsaWNrID0gKCkgPT4ge1xuICAgIG1vZGFsLmNsb3NlKClcbiAgfTtcblxuICAvLyBQdWxsIHRvZG8gaW5mbyBhbmQgcHJlZmlsbCBmb3JtIHdpdGggZGF0YS5cbiAgbGV0IHRvZG9JdGVtID0gSlNPTi5wYXJzZSh3aW5kb3cubG9jYWxTdG9yYWdlLmdldEl0ZW0oa2V5KSk7XG4gIGNvbnN0IHRvZG9EYXRhID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImZvcm1cIik7XG5cbiAgdG9kb0RhdGEuYWRkRXZlbnRMaXN0ZW5lcihcInN1Ym1pdFwiLCBmdW5jdGlvbiAoX2V2ZW50KSB7XG5cbiAgICB0b2RvSXRlbS50aXRsZSA9IHRvZG9EYXRhLmVsZW1lbnRzLnRpdGxlLnZhbHVlO1xuICAgIHRvZG9JdGVtLmR1ZURhdGUgPSB0b2RvRGF0YS5lbGVtZW50cy5kdWVEYXRlLnZhbHVlO1xuICAgIHRvZG9JdGVtLnByaW9yaXR5ID0gdG9kb0RhdGEuZWxlbWVudHMucHJpb3JpdHkudmFsdWU7XG4gICAgdG9kb0l0ZW0ubm90ZXMgPSB0b2RvRGF0YS5lbGVtZW50cy5ub3Rlcy52YWx1ZTtcbiAgICB0b2RvSXRlbS5saXN0ID0gdG9kb0RhdGEuZWxlbWVudHMubGlzdC52YWx1ZTtcblxuICAgIHdpbmRvdy5sb2NhbFN0b3JhZ2Uuc2V0SXRlbShrZXksIEpTT04uc3RyaW5naWZ5KHRvZG9JdGVtKSk7XG4gIH0pO1xuXG4gICAgdG9kb0RhdGEuaW5uZXJIVE1MID0gYFxuICAgICAgPGxhYmVsIGZvcj1cInRpdGxlXCI+VGl0bGU6PC9sYWJlbD5cbiAgICAgIDxpbnB1dCB0eXBlPVwidGV4dFwiIGlkPVwidGl0bGVcIiBuYW1lPVwidGl0bGVcIiB2YWx1ZT1cIiR7dG9kb0l0ZW0udGl0bGV9XCIgcmVxdWlyZWQ+PGJyPlxuXG4gICAgICA8bGFiZWwgZm9yPVwiZHVlLWRhdGVcIj5EdWUgRGF0ZTo8L2xhYmVsPlxuICAgICAgPGlucHV0IHR5cGU9XCJkYXRlXCIgaWQ9XCJkdWUtZGF0ZVwiIG5hbWU9XCJkdWVEYXRlXCIgdmFsdWU9JHt0b2RvSXRlbS5kdWVEYXRlfT48YnI+XG5cbiAgICAgIDxsYWJlbCBmb3I9XCJwcmlvcml0eVwiPlByaW9yaXR5OjwvbGFiZWw+XG4gICAgICA8c2VsZWN0IGlkPVwicHJpb3JpdHlcIiBuYW1lPVwicHJpb3JpdHlcIiB2YWx1ZT0ke3RvZG9JdGVtLnByaW9yaXR5fT5cbiAgICAgICAgICA8b3B0aW9uIHZhbHVlPVwiaGlnaFwiPkhpZ2g8L29wdGlvbj5cbiAgICAgICAgICA8b3B0aW9uIHZhbHVlPVwibWVkaXVtXCI+TWVkaXVtPC9vcHRpb24+XG4gICAgICAgICAgPG9wdGlvbiB2YWx1ZT1cImxvd1wiPkxvdzwvb3B0aW9uPlxuICAgICAgPC9zZWxlY3Q+PGJyPlxuXG4gICAgICA8bGFiZWwgZm9yPVwibm90ZXNcIj5Ob3Rlczo8L2xhYmVsPlxuICAgICAgPHRleHRhcmVhIGlkPVwibm90ZXNcIiBuYW1lPVwibm90ZXNcIj4ke3RvZG9JdGVtLm5vdGVzfTwvdGV4dGFyZWE+PGJyPlxuXG4gICAgICA8bGFiZWwgZm9yPVwibGlzdFwiPkxpc3Q6PC9sYWJlbD5cbiAgICAgIDxpbnB1dCB0eXBlPVwidGV4dFwiIGlkPVwibGlzdFwiIG5hbWU9XCJsaXN0XCIgdmFsdWU9JHt0b2RvSXRlbS5saXN0fT48YnI+XG5cbiAgICAgIDxpbnB1dCB0eXBlPVwic3VibWl0XCIgdmFsdWU9XCJFZGl0IFRvZG9cIiBpZD1cInN1Ym1pdFwiPlxuICAgIGA7XG5cbiAgbW9kYWwuYXBwZW5kQ2hpbGQodG9kb0RhdGEpO1xufVxuIiwiaW1wb3J0IHsgZGVsZXRlTGlzdGVuZXJzIH0gZnJvbSBcIi4vZGVsZXRlVG9kb1wiO1xuaW1wb3J0IHsgbW9kYWxMaXN0ZW5lcnMgfSBmcm9tIFwiLi9tb2RhbFwiO1xuXG5leHBvcnQgeyByZW5kZXJUb2RvLCByZW5kZXJMaXN0cyB9O1xuXG4vLyBDaGVjayBpZiBjb250ZW50IGRpdnMgZXhpc3RzLCBpZiBub3QgY3JlYXRlIHRoZW0uXG5mdW5jdGlvbiBlc3RhYmxpc2hDb250YWluZXJzKCkge1xuICBsZXQgdG9kb3NDb250YWluZXIgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInRvZG9zLWNvbnRhaW5lclwiKTtcbiAgbGV0IGxpc3RDb250YWluZXIgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImxpc3QtY29udGFpbmVyXCIpO1xuXG4gIGlmICghdG9kb3NDb250YWluZXIpIHtcbiAgICB0b2Rvc0NvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgdG9kb3NDb250YWluZXIuaWQgPSBcInRvZG9zLWNvbnRhaW5lclwiO1xuICB9XG5cbiAgaWYgKCFsaXN0Q29udGFpbmVyKSB7XG4gICAgbGlzdENvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgbGlzdENvbnRhaW5lci5pZCA9IFwibGlzdC1jb250YWluZXJcIjtcbiAgfVxuXG4gIHJldHVybiBbdG9kb3NDb250YWluZXIsIGxpc3RDb250YWluZXJdO1xufVxuXG5mdW5jdGlvbiByZW5kZXJUb2RvKGkgPSAwKSB7XG4gIGNvbnN0IGJvZHkgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiYm9keVwiKTtcbiAgY29uc3Qgc2lkZWJhckNvbnRhaW5lciA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwic2lkZWJhclwiKTtcbiAgY29uc3QgW3RvZG9zQ29udGFpbmVyLCBsaXN0Q29udGFpbmVyXSA9IGVzdGFibGlzaENvbnRhaW5lcnMoKTtcblxuICBmb3IgKGk7IGkgPCB3aW5kb3cubG9jYWxTdG9yYWdlLmxlbmd0aDsgaSsrKSB7XG4gICAgbGV0IHRvZG9JdGVtID0gSlNPTi5wYXJzZSh3aW5kb3cubG9jYWxTdG9yYWdlLmdldEl0ZW0oaS50b1N0cmluZygpKSk7XG5cbiAgICBpZiAodG9kb0l0ZW0uZGVsZXRlZCA9PT0gXCJkZWxldGVkXCIpIHtcbiAgICAgIGNvbnRpbnVlO1xuICAgIH1cblxuICAgIGxldCBuZXdUb2RvID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICBuZXdUb2RvLmNsYXNzTGlzdC5hZGQoXCJ0b2RvLWl0ZW1cIik7XG4gICAgLy8gQXR0YWNoIHRoZSB0b2RvIGl0ZW0ncyBrZXkgZm9yIGxvb2t1cHMuXG4gICAgbmV3VG9kby5pZCA9IGk7XG5cbiAgICAvLyBDcmVhdGUgY2hlY2tib3ggYW5kIGVuc3VyZSBpdCBpcyBtYXJrZWQgaWYgdGhlIHRvZG8gaXMgY29tcGxldGVkLlxuICAgIGxldCBjaGVja0JveCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJpbnB1dFwiKTtcbiAgICBjaGVja0JveC50eXBlID0gXCJjaGVja2JveFwiO1xuICAgIGNoZWNrQm94LmNsYXNzTGlzdC5hZGQoXCJjaGVja2JveFwiKTtcbiAgICBpZiAodG9kb0l0ZW0uY29tcGxldGVkKSB7XG4gICAgICBjaGVja0JveC5jaGVja2VkID0gdHJ1ZTtcbiAgICB9XG5cbiAgICAvLyBBZGQgdG9kbyBpbmZvIHRvIHBhZ2UuXG4gICAgY29uc3QgdGl0bGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwicFwiKTtcbiAgICBjb25zdCBkdWVEYXRlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInBcIik7XG4gICAgY29uc3QgcHJpb3JpdHkgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwicFwiKTtcblxuICAgIHRpdGxlLnRleHRDb250ZW50ID0gdG9kb0l0ZW0udGl0bGU7XG4gICAgZHVlRGF0ZS50ZXh0Q29udGVudCA9IHRvZG9JdGVtLmR1ZURhdGU7XG4gICAgcHJpb3JpdHkudGV4dENvbnRlbnQgPSB0b2RvSXRlbS5wcmlvcml0eTtcblxuICAgIC8vIENyZWF0ZSB2aWV3IC8gZWRpdCBidXR0b24uXG4gICAgbGV0IGVkaXRCdXR0b24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiYnV0dG9uXCIpO1xuICAgIGVkaXRCdXR0b24uY2xhc3NMaXN0LmFkZChcImVkaXQtYnRuXCIpO1xuICAgIGVkaXRCdXR0b24udGV4dENvbnRlbnQgPSBcIuKcjlwiO1xuXG4gICAgLy8gQ3JlYXRlIGRlbGV0ZSBidXR0b24uXG4gICAgbGV0IGRlbGV0ZUJ1dHRvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJidXR0b25cIik7XG4gICAgZGVsZXRlQnV0dG9uLmNsYXNzTGlzdC5hZGQoXCJkZWxldGUtYnRuXCIpO1xuICAgIGRlbGV0ZUJ1dHRvbi50ZXh0Q29udGVudCA9IFwi8J+XkVwiO1xuXG4gICAgbmV3VG9kby5hcHBlbmQoY2hlY2tCb3gsIHRpdGxlLCBkdWVEYXRlLCBwcmlvcml0eSwgZWRpdEJ1dHRvbiwgZGVsZXRlQnV0dG9uKTtcbiAgICB0b2Rvc0NvbnRhaW5lci5hcHBlbmRDaGlsZChuZXdUb2RvKTtcbiAgfVxuICBib2R5LmFwcGVuZENoaWxkKHRvZG9zQ29udGFpbmVyKTtcbiAgcmVuZGVyTGlzdHMobGlzdENvbnRhaW5lciwgc2lkZWJhckNvbnRhaW5lcik7XG5cbiAgLy8gRW5zdXJlIG9uY2xpY2sgbGlzdGVuZXJzIGFyZSBhZGRlZCB0byBlZGl0ICYgZGVsZXRlIGJ1dHRvbnMuXG4gIGRlbGV0ZUxpc3RlbmVycygpO1xuICBtb2RhbExpc3RlbmVycygpO1xufVxuXG5mdW5jdGlvbiByZW5kZXJMaXN0cyhsaXN0Q29udGFpbmVyLCBzaWRlYmFyQ29udGFpbmVyKSB7XG4gIC8vIFJlbW92ZSBjaGlsZHJlbiBmcm9tIHRoZSBsaXN0IGNvbnRhaW5lciBpZiB0aGV5IGV4aXN0LlxuICBpZiAobGlzdENvbnRhaW5lci5jaGlsZHJlbi5sZW5ndGggPiAwKSB7XG4gICAgd2hpbGUgKGxpc3RDb250YWluZXIuZmlyc3RDaGlsZCkge1xuICAgICAgbGlzdENvbnRhaW5lci5yZW1vdmVDaGlsZChsaXN0Q29udGFpbmVyLmZpcnN0Q2hpbGQpO1xuICAgIH1cbiAgfVxuXG4gIC8vIFNldCB0aXRsZS5cbiAgbGV0IGxpc3RUaXRsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJoMlwiKTtcbiAgbGlzdFRpdGxlLnRleHRDb250ZW50ID0gXCJMaXN0c1wiO1xuICBsaXN0Q29udGFpbmVyLmFwcGVuZENoaWxkKGxpc3RUaXRsZSk7XG5cbiAgLy8gQ3JlYXRlIGEgaGlkZGVuIGJ1dHRvbiB0byBzaG93IGFsbCB0b2RvcyBpZiBmaWx0ZXJpbmcgYnkgbGlzdC5cbiAgY29uc3Qgc2hvd0FsbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJidXR0b25cIik7XG4gIHNob3dBbGwudGV4dENvbnRlbnQgPSBcIlNob3cgQWxsXCI7XG4gIHNob3dBbGwuaWQgPSBcInNob3dBbGxcIjtcbiAgc2hvd0FsbC5jbGFzc0xpc3QuYWRkKFwibGlzdFwiKTtcbiAgc2hvd0FsbC5zdHlsZS5kaXNwbGF5ID0gXCJub25lXCI7XG5cbiAgLy8gQ29sbGVjdCBsaXN0cyBmcm9tIGFsbCB0b2RvIGl0ZW1zIGluIGxvY2FsIHN0b3JhZ2UuXG4gIGxldCBsaXN0cyA9IFtdO1xuICBmb3IgKGxldCBpID0gMDsgaSA8IHdpbmRvdy5sb2NhbFN0b3JhZ2UubGVuZ3RoOyBpKyspIHtcbiAgICBsZXQgdG9kb0l0ZW0gPSBKU09OLnBhcnNlKHdpbmRvdy5sb2NhbFN0b3JhZ2UuZ2V0SXRlbShpLnRvU3RyaW5nKCkpKTtcbiAgICBsaXN0cy5wdXNoKHRvZG9JdGVtLmxpc3QpO1xuICB9XG5cbiAgLy8gQ29sbGVjdCBsaXN0cyBmcm9tIGZvcm0gb3B0aW9ucy5cbiAgY29uc3QgbGlzdE9wdGlvbnMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKFwiLmxpc3Qtb3B0aW9uc1wiKTtcbiAgbGlzdE9wdGlvbnMuZm9yRWFjaCgob3B0aW9uKSA9PiB7XG4gICAgbGlzdHMucHVzaChvcHRpb24udGV4dENvbnRlbnQpO1xuICB9KVxuXG4gIC8vIFJlbW92ZSBkdXBsaWNhdGVzICYgZW1wdHkgc3RyaW5ncy5cbiAgbGV0IGNsZWFuZWRMaXN0cyA9IFsuLi5uZXcgU2V0KGxpc3RzLmZpbHRlcihsaXN0ID0+IGxpc3QpKV07XG5cbiAgLy8gQWRkIGNsZWFuZWQgdXAgbGlzdHMgdG8gcGFnZS5cbiAgY2xlYW5lZExpc3RzLmZvckVhY2goKGxpc3QpID0+IHtcbiAgICBjb25zdCBsaXN0RWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJhXCIpO1xuICAgIGxpc3RFbGVtZW50LmNsYXNzTGlzdC5hZGQoXCJsaXN0XCIpO1xuICAgIGxpc3RFbGVtZW50LnRleHRDb250ZW50ID0gbGlzdDtcbiAgICBsaXN0Q29udGFpbmVyLmFwcGVuZENoaWxkKGxpc3RFbGVtZW50KTtcbiAgfSk7XG4gIGxpc3RDb250YWluZXIuYXBwZW5kQ2hpbGQoc2hvd0FsbCk7XG4gIHNpZGViYXJDb250YWluZXIuYXBwZW5kQ2hpbGQobGlzdENvbnRhaW5lcik7XG59XG4iLCJleHBvcnQgeyBmaWx0ZXJUb2RvcywgZmlsdGVyTGlzdGVuZXJzIH07XG5cbmZ1bmN0aW9uIGZpbHRlclRvZG9zKGxpc3QpIHtcbiAgLy8gUmV2ZWFsICdTaG93IEFsbCcgYnV0dG9uLlxuICBjb25zdCBzaG93QWxsID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3Nob3dBbGwnKTtcbiAgc2hvd0FsbC5zdHlsZS5kaXNwbGF5ID0gXCJcIjtcblxuICAvLyBGaWx0ZXIgdG9kb3MgYnkgbGlzdC5cbiAgZm9yIChsZXQgaSA9IDA7IGkgPCB3aW5kb3cubG9jYWxTdG9yYWdlLmxlbmd0aDsgaSsrKSB7XG4gICAgbGV0IHRvZG9JdGVtID0gSlNPTi5wYXJzZSh3aW5kb3cubG9jYWxTdG9yYWdlLmdldEl0ZW0oaS50b1N0cmluZygpKSk7XG5cbiAgICAvLyBmaW5kIHRoZSBkaXYgY29udGFpbmluZyB0aGlzIHRvZG8gaXRlbS5cbiAgICBsZXQgdG9kb0RpdiA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKGkpO1xuXG4gICAgLy8gaWdub3JlIGRlbGV0ZWQgdG9kbyBpdGVtcy5cbiAgICBpZiAodG9kb0l0ZW0uZGVsZXRlZCA9PT0gXCJkZWxldGVkXCIpIHtcbiAgICAgIGNvbnRpbnVlO1xuICAgIC8vIGlmICdzaG93IGFsbCcgaXMgY2xpY2tlZCwgcmVtb3ZlIGFueSBoaWRkZW4gYXR0cmlidXRlcyBhbmQgbW92ZSB0byBuZXh0LlxuICAgIH0gZWxzZSBpZiAobGlzdCA9PT0gXCJTaG93IEFsbFwiKSB7XG4gICAgICB0b2RvRGl2LnN0eWxlLmRpc3BsYXkgPSBcIlwiO1xuICAgICAgLy8gcmVoaWRlIHNob3cgYWxsIGJ1dHRvbi5cbiAgICAgIHNob3dBbGwuc3R5bGUuZGlzcGxheSA9IFwibm9uZVwiO1xuICAgICAgY29udGludWU7XG4gICAgLy8gaGlkZSB0aGUgaXRlbSBpZiBsaXN0IGRvZXNuJ3QgbWF0Y2guXG4gICAgfSBlbHNlIGlmICh0b2RvSXRlbS5saXN0ICE9PSBsaXN0KSB7XG4gICAgICB0b2RvRGl2LnN0eWxlLmRpc3BsYXkgPSBcIm5vbmVcIjtcbiAgICAvLyBzaG93IGl0ZW0gaWYgbGlzdCBtYXRjaGVzLlxuICAgIH0gZWxzZSB7XG4gICAgICB0b2RvRGl2LnN0eWxlLmRpc3BsYXkgPSBcIlwiO1xuICAgIH1cbiAgfVxufVxuXG5mdW5jdGlvbiBmaWx0ZXJMaXN0ZW5lcnMoKSB7XG4gIGxldCBsaXN0TGlua3MgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKFwiLmxpc3RcIik7XG5cbiAgbGlzdExpbmtzLmZvckVhY2goKGxpc3QpID0+IHtcbiAgICBsaXN0Lm9uY2xpY2sgPSAoKSA9PiB7XG4gICAgICBmaWx0ZXJUb2RvcyhsaXN0LnRleHRDb250ZW50KTtcbiAgICB9XG4gIH0pXG59XG4iLCJleHBvcnQgeyByZW5kZXJUb2RvRm9ybSwgbGlzdE9wdGlvbnMgfTtcbmltcG9ydCB7cmVuZGVyVG9kbywgcmVuZGVyTGlzdHN9IGZyb20gXCIuL3RvZG9EaXNwbGF5LmpzXCI7XG5cbmNsYXNzIHRvZG8ge1xuICBjb25zdHJ1Y3Rvcih0aXRsZSwgZHVlRGF0ZSwgcHJpb3JpdHksIG5vdGVzLCBsaXN0ID0gXCJkZWZhdWx0XCIpIHtcbiAgICB0aGlzLnRpdGxlID0gdGl0bGU7XG4gICAgdGhpcy5kdWVEYXRlID0gZHVlRGF0ZTtcbiAgICB0aGlzLnByaW9yaXR5ID0gcHJpb3JpdHk7XG4gICAgdGhpcy5ub3RlcyA9IG5vdGVzO1xuICAgIHRoaXMubGlzdCA9IGxpc3Q7XG4gICAgdGhpcy5jb21wbGV0ZWQgPSBmYWxzZTtcbiAgfVxufVxuXG5mdW5jdGlvbiByZW5kZXJUb2RvRm9ybSgpIHtcbiAgY29uc3QgYm9keSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCJib2R5XCIpO1xuXG4gIGNvbnN0IHNpZGViYXJDb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICBzaWRlYmFyQ29udGFpbmVyLmlkID0gXCJzaWRlYmFyXCI7XG5cbiAgY29uc3QgZm9ybSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJmb3JtXCIpO1xuICBmb3JtLmFkZEV2ZW50TGlzdGVuZXIoXCJzdWJtaXRcIiwgZnVuY3Rpb24gKGV2ZW50KSB7XG4gICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcblxuICAgIGNvbnN0IHRpdGxlID0gZm9ybS5lbGVtZW50cy50aXRsZS52YWx1ZTtcbiAgICBjb25zdCBkdWVEYXRlID0gZm9ybS5lbGVtZW50cy5kdWVEYXRlLnZhbHVlO1xuICAgIGNvbnN0IHByaW9yaXR5ID0gZm9ybS5lbGVtZW50cy5wcmlvcml0eS52YWx1ZTtcbiAgICBjb25zdCBub3RlcyA9IGZvcm0uZWxlbWVudHMubm90ZXMudmFsdWU7XG4gICAgY29uc3QgbGlzdCA9IGZvcm0uZWxlbWVudHMubGlzdC52YWx1ZTtcblxuICAgIGNvbnN0IG5ld1RvZG8gPSBuZXcgdG9kbyh0aXRsZSwgZHVlRGF0ZSwgcHJpb3JpdHksIG5vdGVzLCBsaXN0KTtcblxuICAgIC8vIFJlc2V0IHRoZSBmb3JtIGFmdGVyIHN1Ym1pc3Npb25cbiAgICBmb3JtLnJlc2V0KCk7XG5cbiAgICAvLyBTZW5kIHRvZG8gb2JqZWN0IHRvIGxvY2Fsc3RvcmFnZS5cbiAgICBzZW5kVG9TdG9yYWdlKEpTT04uc3RyaW5naWZ5KG5ld1RvZG8pKTtcblxuICAgIC8vIFJlbmRlciBvbmx5IHRoZSBuZXdseSBjcmVhdGVkIHRvZG8uXG4gICAgcmVuZGVyVG9kbyh3aW5kb3cubG9jYWxTdG9yYWdlLmxlbmd0aCAtIDEpO1xuXG4gIH0pO1xuXG4gIGZvcm0uaW5uZXJIVE1MID0gYFxuICAgICAgPGxhYmVsIGZvcj1cInRpdGxlXCI+VGl0bGU6PC9sYWJlbD5cbiAgICAgIDxpbnB1dCB0eXBlPVwidGV4dFwiIGlkPVwidGl0bGVcIiBuYW1lPVwidGl0bGVcIiByZXF1aXJlZD48YnI+XG5cbiAgICAgIDxsYWJlbCBmb3I9XCJkdWUtZGF0ZVwiPkR1ZSBEYXRlOjwvbGFiZWw+XG4gICAgICA8aW5wdXQgdHlwZT1cImRhdGVcIiBpZD1cImR1ZS1kYXRlXCIgbmFtZT1cImR1ZURhdGVcIj48YnI+XG5cbiAgICAgIDxsYWJlbCBmb3I9XCJwcmlvcml0eVwiPlByaW9yaXR5OjwvbGFiZWw+XG4gICAgICA8c2VsZWN0IGlkPVwicHJpb3JpdHlcIiBuYW1lPVwicHJpb3JpdHlcIj5cbiAgICAgICAgICA8b3B0aW9uIHZhbHVlPVwiaGlnaFwiPkhpZ2g8L29wdGlvbj5cbiAgICAgICAgICA8b3B0aW9uIHZhbHVlPVwibWVkaXVtXCIgc2VsZWN0ZWQ+TWVkaXVtPC9vcHRpb24+XG4gICAgICAgICAgPG9wdGlvbiB2YWx1ZT1cImxvd1wiPkxvdzwvb3B0aW9uPlxuICAgICAgPC9zZWxlY3Q+PGJyPlxuXG4gICAgICA8bGFiZWwgZm9yPVwibm90ZXNcIj5Ob3Rlczo8L2xhYmVsPlxuICAgICAgPHRleHRhcmVhIGlkPVwibm90ZXNcIiBuYW1lPVwibm90ZXNcIj48L3RleHRhcmVhPjxicj5cblxuICAgICAgPGxhYmVsIGZvcj1cImxpc3RcIj5MaXN0OjwvbGFiZWw+XG4gICAgICA8aW5wdXQgbGlzdD1cImxpc3Qtb3B0aW9uc1wiIGlkPVwibGlzdFwiIG5hbWU9XCJsaXN0IC8+XG4gICAgICA8ZGF0YWxpc3QgaWQ9XCJsaXN0LW9wdGlvbnNcIj48L2RhdGFsaXN0Pjxicj5cblxuICAgICAgPGxhYmVsIGZvcj1cInN1Ym1pdFwiPjwvbGFiZWw+XG4gICAgICA8aW5wdXQgdHlwZT1cInN1Ym1pdFwiIHZhbHVlPVwiQ3JlYXRlIFRvZG9cIiBpZD1cInN1Ym1pdFwiPlxuICBgO1xuXG4gIHNpZGViYXJDb250YWluZXIuYXBwZW5kQ2hpbGQoZm9ybSk7XG4gIGJvZHkuYXBwZW5kQ2hpbGQoc2lkZWJhckNvbnRhaW5lcik7XG4gICAgICAvLyBSZW5kZXIgbmV3IGxpc3QgZm9ybS5cbiAgICAgIHJlbmRlck5ld0xpc3RGb3JtKCk7XG59XG5cbmZ1bmN0aW9uIHNlbmRUb1N0b3JhZ2UodG9kb0l0ZW0pIHtcbiAgd2luZG93LmxvY2FsU3RvcmFnZS5zZXRJdGVtKHdpbmRvdy5sb2NhbFN0b3JhZ2UubGVuZ3RoLCB0b2RvSXRlbSk7XG59O1xuXG5mdW5jdGlvbiBsaXN0T3B0aW9ucyhuZXdMaXN0PWZhbHNlKSB7XG4gIGNvbnN0IGxpc3RTZWxlY3RvciA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwibGlzdFwiKVxuXG4gIC8vIENvbGxlY3QgbGlzdHMgZnJvbSBhbGwgdG9kbyBpdGVtcyBpbiBsb2NhbCBzdG9yYWdlLlxuICBsZXQgbGlzdHMgPSBbXTtcbiAgZm9yIChsZXQgaSA9IDA7IGkgPCB3aW5kb3cubG9jYWxTdG9yYWdlLmxlbmd0aDsgaSsrKSB7XG4gICAgbGV0IHRvZG9JdGVtID0gSlNPTi5wYXJzZSh3aW5kb3cubG9jYWxTdG9yYWdlLmdldEl0ZW0oaS50b1N0cmluZygpKSk7XG4gICAgbGlzdHMucHVzaCh0b2RvSXRlbS5saXN0KTtcbiAgfVxuXG4gIC8vIEFkZCBuZXcgbGlzdCBpZiBuZWNlc3NhcnkuXG4gIGlmIChuZXdMaXN0KSB7XG4gICAgbGlzdHMucHVzaChuZXdMaXN0KTtcbiAgfVxuXG4gIC8vIFJlbW92ZSBkdXBsaWNhdGVzICYgZW1wdHkgc3RyaW5ncy5cbiAgbGV0IGNsZWFuZWRMaXN0cyA9IFsuLi5uZXcgU2V0KGxpc3RzLmZpbHRlcihsaXN0ID0+IGxpc3QpKV07XG5cbiAgLy8gUmVtb3ZlIGFueSBleGlzdGluZyBjaGlsZHJlbiB0byBwcmV2ZW50IGR1cGxpY2F0ZXMuXG4gIGlmIChsaXN0U2VsZWN0b3IuY2hpbGRyZW4ubGVuZ3RoID4gMCkge1xuICAgIHdoaWxlIChsaXN0U2VsZWN0b3IuZmlyc3RDaGlsZCkge1xuICAgICAgbGlzdFNlbGVjdG9yLnJlbW92ZUNoaWxkKGxpc3RTZWxlY3Rvci5maXJzdENoaWxkKTtcbiAgICB9XG4gIH1cblxuICAvLyBBZGQgb3B0aW9ucyB0byBsaXN0IHNlbGVjdG9yLCBzZXQgdG8gJ2RlZmF1bHQnIGlmIG5vIGxpc3RzIGNyZWF0ZWQgeWV0LlxuICBpZiAoY2xlYW5lZExpc3RzLmxlbmd0aCA9PT0gMCkge1xuICAgIGxldCBvcHRpb24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwib3B0aW9uXCIpO1xuICAgIC8vIG9wdGlvbi50ZXh0Q29udGVudCA9IFwiRGVmYXVsdFwiO1xuICAgIG9wdGlvbi52YWx1ZSA9IFwiRGVmYXVsdFwiO1xuICAgIG9wdGlvbi5jbGFzc0xpc3QuYWRkKFwibGlzdC1vcHRpb25zXCIpO1xuICAgIGxpc3RTZWxlY3Rvci5hcHBlbmRDaGlsZChvcHRpb24pO1xuICB9IGVsc2Uge1xuICAgIGNsZWFuZWRMaXN0cy5mb3JFYWNoKGxpc3QgPT4ge1xuICAgICAgbGV0IG9wdGlvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJvcHRpb25cIik7XG4gICAgICBvcHRpb24udGV4dENvbnRlbnQgPSBsaXN0O1xuICAgICAgb3B0aW9uLnZhbHVlID0gbGlzdDtcbiAgICAgIG9wdGlvbi5jbGFzc0xpc3QuYWRkKFwibGlzdC1vcHRpb25zXCIpO1xuICAgICAgbGlzdFNlbGVjdG9yLmFwcGVuZENoaWxkKG9wdGlvbik7XG4gICAgfSlcbiAgfVxufVxuXG5mdW5jdGlvbiByZW5kZXJOZXdMaXN0Rm9ybSgpIHtcbiAgY29uc3Qgc2lkZWJhckNvbnRhaW5lciA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwic2lkZWJhclwiKTtcbiAgY29uc3QgZm9ybSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJmb3JtXCIpO1xuICBmb3JtLmlkID0gXCJuZXctbGlzdC1mb3JtXCI7XG5cbiAgZm9ybS5hZGRFdmVudExpc3RlbmVyKFwic3VibWl0XCIsIGZ1bmN0aW9uIChldmVudCkge1xuICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG5cbiAgICBjb25zdCBsaXN0ID0gZm9ybS5lbGVtZW50cy5uZXdfbGlzdC52YWx1ZTtcblxuICAgIC8vIFJlc2V0IHRoZSBmb3JtIGFmdGVyIHN1Ym1pc3Npb25cbiAgICBmb3JtLnJlc2V0KCk7XG5cbiAgICAvLyBTZW5kIG5ldyBsaXN0IHRvIG9wdGlvbnMuXG4gICAgbGlzdE9wdGlvbnMobGlzdCk7XG5cbiAgfSk7XG5cbiAgZm9ybS5pbm5lckhUTUwgPSBgXG4gICAgICA8bGFiZWwgZm9yPVwibmV3X2xpc3RcIj5UaXRsZTo8L2xhYmVsPlxuICAgICAgPGlucHV0IHR5cGU9XCJ0ZXh0XCIgaWQ9XCJuZXdfbGlzdFwiIG5hbWU9XCJuZXdfbGlzdFwiIHJlcXVpcmVkPjxicj5cblxuICAgICAgPGxhYmVsIGZvclwic3VibWl0XCI+PC9sYWJlbD5cbiAgICAgIDxpbnB1dCB0eXBlPVwic3VibWl0XCIgdmFsdWU9XCJOZXcgTGlzdFwiIGlkPVwic3VibWl0XCI+XG4gIGA7XG5cbiAgc2lkZWJhckNvbnRhaW5lci5hcHBlbmRDaGlsZChmb3JtKTtcbn1cblxuXG4iLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdGlkOiBtb2R1bGVJZCxcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuIiwiLy8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbl9fd2VicGFja19yZXF1aXJlX18ubiA9IChtb2R1bGUpID0+IHtcblx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG5cdFx0KCkgPT4gKG1vZHVsZVsnZGVmYXVsdCddKSA6XG5cdFx0KCkgPT4gKG1vZHVsZSk7XG5cdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsIHsgYTogZ2V0dGVyIH0pO1xuXHRyZXR1cm4gZ2V0dGVyO1xufTsiLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5uYyA9IHVuZGVmaW5lZDsiLCJpbXBvcnQge3JlbmRlclRvZG99IGZyb20gXCIuL3RvZG9EaXNwbGF5LmpzXCI7XG5pbXBvcnQge3JlbmRlclRvZG9Gb3JtLCBsaXN0T3B0aW9ucyB9IGZyb20gXCIuL3RvZG9Gb3JtLmpzXCI7XG5pbXBvcnQgY3NzIGZyb20gXCIuLi9kaXN0L2Fzc2V0cy9zdHlsZS5jc3NcIjtcbmltcG9ydCBjaGVja2JveExpc3RlbmVycyBmcm9tIFwiLi9jaGVja0JveC5qc1wiO1xuaW1wb3J0IHsgZGVsZXRlTGlzdGVuZXJzIH0gZnJvbSBcIi4vZGVsZXRlVG9kby5qc1wiO1xuaW1wb3J0IHsgZmlsdGVyTGlzdGVuZXJzIH0gZnJvbSBcIi4vdG9kb0ZpbHRlci5qc1wiO1xuaW1wb3J0IHsgcmVuZGVyTW9kYWwsIG1vZGFsTGlzdGVuZXJzIH0gZnJvbSBcIi4vbW9kYWwuanNcIjtcblxuLy8gd2luZG93LmxvY2FsU3RvcmFnZS5jbGVhcigpO1xuXG5yZW5kZXJUb2RvRm9ybSgpO1xucmVuZGVyVG9kbygpO1xucmVuZGVyTW9kYWwoKTtcbmNoZWNrYm94TGlzdGVuZXJzKCk7XG5tb2RhbExpc3RlbmVycygpO1xuZGVsZXRlTGlzdGVuZXJzKCk7XG5maWx0ZXJMaXN0ZW5lcnMoKTtcbmxpc3RPcHRpb25zKCk7XG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=