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
  padding-bottom: .25rem;
}

#modal-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
}
`, "",{"version":3,"sources":["webpack://./dist/assets/style.css"],"names":[],"mappings":"AAAA;EACE,2BAA2B;EAC3B,aAAa;EACb,8BAA8B;EAC9B,4BAA4B;AAC9B;;AAEA;EACE,aAAa;EACb,8BAA8B;EAC9B,aAAa;EACb,qBAAqB;AACvB;AACA;EACE,cAAc;AAChB;AACA;EACE,uBAAuB;AACzB;;AAEA;EACE,WAAW;EACX,uBAAuB;;AAEzB;;AAEA;EACE,cAAc;EACd,WAAW;EACX,sBAAsB;EACtB,uBAAuB;AACzB;;AAEA;EACE,cAAc;EACd,WAAW;EACX,iBAAiB;EACjB,kBAAkB;EAClB,aAAa;EACb,sBAAsB;AACxB;;AAEA;EACE,aAAa;EACb,QAAQ;EACR,qDAAqD;EACrD,mBAAmB;EACnB,mBAAmB;AACrB;;AAEA;EACE,YAAY;EACZ,WAAW;AACb;;AAEA;EACE,mBAAmB;EACnB,aAAa;EACb,sBAAsB;AACxB;;AAEA;EACE,sBAAsB;AACxB;;AAEA;EACE,aAAa;EACb,8BAA8B;EAC9B,mBAAmB;AACrB","sourcesContent":["body {\n  background-color: aliceblue;\n  display: grid;\n  grid-template-columns: 1fr 3fr;\n  grid-template-rows: 5rem 1fr;\n}\n\nform {\n  display: grid;\n  grid-template-columns: 1fr 2fr;\n  grid-gap: 3px;\n  /* flex-wrap: wrap; */\n}\nlabel {\n  grid-column: 1;\n}\n#submit {\n  grid-column: 1 / span 2;\n}\n\n#site-title {\n  grid-row: 1;\n  grid-column: 1 / span 2;\n\n}\n\n#sidebar {\n  grid-column: 1;\n  grid-row: 2;\n  max-width: fit-content;\n  max-height: fit-content;\n}\n\n#todos-container {\n  grid-column: 2;\n  grid-row: 2;\n  margin-left: 2rem;\n  margin-right: 2rem;\n  display: flex;\n  flex-direction: column;\n}\n\n.todo-item {\n  display: grid;\n  gap: 5px;\n  grid-template-columns: .25fr 1fr 1fr .5fr .25fr .25fr;\n  padding-bottom: 5px;\n  align-items: center;\n}\n\n.checkbox {\n  height: 25px;\n  width: 25px;\n}\n\n#list-container {\n  padding-top: 1.5rem;\n  display: flex;\n  flex-direction: column;\n}\n\n.list {\n  padding-bottom: .25rem;\n}\n\n#modal-header {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n}\n"],"sourceRoot":""}]);
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
  (0,_todoDisplay__WEBPACK_IMPORTED_MODULE_0__["default"])();
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
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _deleteTodo__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./deleteTodo */ "./src/deleteTodo.js");
/* harmony import */ var _modal__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./modal */ "./src/modal.js");



/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (renderTodo);

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

  // Remove duplicates.
  let cleanedLists = [...new Set(lists)];

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
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _todoDisplay_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./todoDisplay.js */ "./src/todoDisplay.js");
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (renderTodoForm);


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
    (0,_todoDisplay_js__WEBPACK_IMPORTED_MODULE_0__["default"])(window.localStorage.length - 1);
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
      <input type="text" id="list" name="list" value="Default"><br>

      <input type="submit" value="Create Todo" id="submit">
  `;

  sidebarContainer.appendChild(form);
  body.appendChild(sidebarContainer);
}

function sendToStorage(todoItem) {
  window.localStorage.setItem(window.localStorage.length, todoItem);
};


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

(0,_todoForm_js__WEBPACK_IMPORTED_MODULE_1__["default"])();
(0,_todoDisplay_js__WEBPACK_IMPORTED_MODULE_0__["default"])();
(0,_modal_js__WEBPACK_IMPORTED_MODULE_6__.renderModal)();
(0,_checkBox_js__WEBPACK_IMPORTED_MODULE_3__["default"])();
(0,_modal_js__WEBPACK_IMPORTED_MODULE_6__.modalListeners)();
(0,_deleteTodo_js__WEBPACK_IMPORTED_MODULE_4__.deleteListeners)();
(0,_todoFilter_js__WEBPACK_IMPORTED_MODULE_5__.filterListeners)();

})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUM2RztBQUNqQjtBQUM1Riw4QkFBOEIsbUZBQTJCLENBQUMsNEZBQXFDO0FBQy9GO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esc0JBQXNCO0FBQ3RCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTyx3RkFBd0YsWUFBWSxXQUFXLFlBQVksYUFBYSxPQUFPLEtBQUssVUFBVSxZQUFZLFdBQVcsWUFBWSxNQUFNLEtBQUssVUFBVSxNQUFNLEtBQUssWUFBWSxPQUFPLEtBQUssVUFBVSxhQUFhLE9BQU8sS0FBSyxVQUFVLFVBQVUsWUFBWSxhQUFhLE9BQU8sS0FBSyxVQUFVLFVBQVUsWUFBWSxhQUFhLFdBQVcsWUFBWSxPQUFPLEtBQUssVUFBVSxVQUFVLFlBQVksYUFBYSxhQUFhLE9BQU8sS0FBSyxVQUFVLFVBQVUsTUFBTSxLQUFLLFlBQVksV0FBVyxZQUFZLE9BQU8sS0FBSyxZQUFZLE9BQU8sS0FBSyxVQUFVLFlBQVksYUFBYSxnQ0FBZ0MsZ0NBQWdDLGtCQUFrQixtQ0FBbUMsaUNBQWlDLEdBQUcsVUFBVSxrQkFBa0IsbUNBQW1DLGtCQUFrQix3QkFBd0IsS0FBSyxTQUFTLG1CQUFtQixHQUFHLFdBQVcsNEJBQTRCLEdBQUcsaUJBQWlCLGdCQUFnQiw0QkFBNEIsS0FBSyxjQUFjLG1CQUFtQixnQkFBZ0IsMkJBQTJCLDRCQUE0QixHQUFHLHNCQUFzQixtQkFBbUIsZ0JBQWdCLHNCQUFzQix1QkFBdUIsa0JBQWtCLDJCQUEyQixHQUFHLGdCQUFnQixrQkFBa0IsYUFBYSwwREFBMEQsd0JBQXdCLHdCQUF3QixHQUFHLGVBQWUsaUJBQWlCLGdCQUFnQixHQUFHLHFCQUFxQix3QkFBd0Isa0JBQWtCLDJCQUEyQixHQUFHLFdBQVcsMkJBQTJCLEdBQUcsbUJBQW1CLGtCQUFrQixtQ0FBbUMsd0JBQXdCLEdBQUcscUJBQXFCO0FBQzN0RDtBQUNBLGlFQUFlLHVCQUF1QixFQUFDOzs7Ozs7Ozs7OztBQzdFMUI7O0FBRWI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHFEQUFxRDtBQUNyRDtBQUNBO0FBQ0EsZ0RBQWdEO0FBQ2hEO0FBQ0E7QUFDQSxxRkFBcUY7QUFDckY7QUFDQTtBQUNBO0FBQ0EscUJBQXFCO0FBQ3JCO0FBQ0E7QUFDQSxxQkFBcUI7QUFDckI7QUFDQTtBQUNBLHFCQUFxQjtBQUNyQjtBQUNBO0FBQ0EsS0FBSztBQUNMOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esc0JBQXNCLGlCQUFpQjtBQUN2QztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxxQkFBcUIscUJBQXFCO0FBQzFDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsVUFBVTtBQUNWLHNGQUFzRixxQkFBcUI7QUFDM0c7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsVUFBVTtBQUNWLGlEQUFpRCxxQkFBcUI7QUFDdEU7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsVUFBVTtBQUNWLHNEQUFzRCxxQkFBcUI7QUFDM0U7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7OztBQ3BGYTs7QUFFYjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsdURBQXVELGNBQWM7QUFDckU7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ2RBLE1BQWtHO0FBQ2xHLE1BQXdGO0FBQ3hGLE1BQStGO0FBQy9GLE1BQWtIO0FBQ2xILE1BQTJHO0FBQzNHLE1BQTJHO0FBQzNHLE1BQXNHO0FBQ3RHO0FBQ0E7O0FBRUE7O0FBRUEsNEJBQTRCLHFHQUFtQjtBQUMvQyx3QkFBd0Isa0hBQWE7O0FBRXJDLHVCQUF1Qix1R0FBYTtBQUNwQztBQUNBLGlCQUFpQiwrRkFBTTtBQUN2Qiw2QkFBNkIsc0dBQWtCOztBQUUvQyxhQUFhLDBHQUFHLENBQUMsc0ZBQU87Ozs7QUFJZ0Q7QUFDeEUsT0FBTyxpRUFBZSxzRkFBTyxJQUFJLHNGQUFPLFVBQVUsc0ZBQU8sbUJBQW1CLEVBQUM7Ozs7Ozs7Ozs7O0FDMUJoRTs7QUFFYjtBQUNBO0FBQ0E7QUFDQSxrQkFBa0Isd0JBQXdCO0FBQzFDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esa0JBQWtCLGlCQUFpQjtBQUNuQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE1BQU07QUFDTjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE1BQU07QUFDTjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esb0JBQW9CLDRCQUE0QjtBQUNoRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EscUJBQXFCLDZCQUE2QjtBQUNsRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7OztBQ25GYTs7QUFFYjs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxRQUFRO0FBQ1I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7QUNqQ2E7O0FBRWI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7OztBQ1RhOztBQUViO0FBQ0E7QUFDQSxjQUFjLEtBQXdDLEdBQUcsc0JBQWlCLEdBQUcsQ0FBSTtBQUNqRjtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7O0FDVGE7O0FBRWI7QUFDQTtBQUNBO0FBQ0E7QUFDQSxrREFBa0Q7QUFDbEQ7QUFDQTtBQUNBLDBDQUEwQztBQUMxQztBQUNBO0FBQ0E7QUFDQSxpRkFBaUY7QUFDakY7QUFDQTtBQUNBO0FBQ0EsYUFBYTtBQUNiO0FBQ0E7QUFDQSxhQUFhO0FBQ2I7QUFDQTtBQUNBLGFBQWE7QUFDYjtBQUNBO0FBQ0E7QUFDQSx5REFBeUQ7QUFDekQ7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGtDQUFrQztBQUNsQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7QUM1RGE7O0FBRWI7QUFDQTtBQUNBO0FBQ0E7QUFDQSxJQUFJO0FBQ0o7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7O0FDYkEsaUVBQWUsaUJBQWlCLEVBQUM7O0FBRWpDO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLElBQUk7QUFDSjtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIOzs7Ozs7Ozs7Ozs7Ozs7OztBQ3JCdUM7QUFDQTs7QUFFdkM7QUFDQSxxQ0FBcUMsb0JBQW9COztBQUV6RDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxFQUFFLHdEQUFVO0FBQ1o7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDs7Ozs7Ozs7Ozs7Ozs7OztBQ3pCc0M7O0FBRXRDO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxHQUFHOztBQUVIO0FBQ0E7QUFDQSwwREFBMEQsZUFBZTs7QUFFekU7QUFDQSw4REFBOEQsaUJBQWlCOztBQUUvRTtBQUNBLG9EQUFvRCxrQkFBa0I7QUFDdEU7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSwwQ0FBMEMsZUFBZTs7QUFFekQ7QUFDQSx1REFBdUQsY0FBYzs7QUFFckU7QUFDQTs7QUFFQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7OztBQzNGK0M7QUFDTjs7QUFFekMsaUVBQWUsVUFBVSxFQUFDOztBQUUxQjtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLFVBQVUsZ0NBQWdDO0FBQzFDOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLEVBQUUsNERBQWU7QUFDakIsRUFBRSxzREFBYztBQUNoQjs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLGtCQUFrQixnQ0FBZ0M7QUFDbEQ7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7Ozs7OztBQ3JId0M7O0FBRXhDO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0Esa0JBQWtCLGdDQUFnQztBQUNsRDs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsTUFBTTtBQUNOO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxNQUFNO0FBQ047QUFDQTtBQUNBLE1BQU07QUFDTjtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIOzs7Ozs7Ozs7Ozs7Ozs7O0FDekNBLGlFQUFlLGNBQWMsRUFBQztBQUNZOztBQUUxQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0EsSUFBSSwyREFBVTtBQUNkLEdBQUc7O0FBRUg7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7Ozs7Ozs7VUN2RUE7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTs7VUFFQTtVQUNBOztVQUVBO1VBQ0E7VUFDQTs7Ozs7V0N0QkE7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLGlDQUFpQyxXQUFXO1dBQzVDO1dBQ0E7Ozs7O1dDUEE7V0FDQTtXQUNBO1dBQ0E7V0FDQSx5Q0FBeUMsd0NBQXdDO1dBQ2pGO1dBQ0E7V0FDQTs7Ozs7V0NQQTs7Ozs7V0NBQTtXQUNBO1dBQ0E7V0FDQSx1REFBdUQsaUJBQWlCO1dBQ3hFO1dBQ0EsZ0RBQWdELGFBQWE7V0FDN0Q7Ozs7O1dDTkE7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ0EwQztBQUNDO0FBQ0E7QUFDRztBQUNJO0FBQ0E7QUFDTzs7QUFFekQ7O0FBRUEsd0RBQWM7QUFDZCwyREFBVTtBQUNWLHNEQUFXO0FBQ1gsd0RBQWlCO0FBQ2pCLHlEQUFjO0FBQ2QsK0RBQWU7QUFDZiwrREFBZSIsInNvdXJjZXMiOlsid2VicGFjazovL2pzLXRvZG8vLi9kaXN0L2Fzc2V0cy9zdHlsZS5jc3MiLCJ3ZWJwYWNrOi8vanMtdG9kby8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanMiLCJ3ZWJwYWNrOi8vanMtdG9kby8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzIiwid2VicGFjazovL2pzLXRvZG8vLi9kaXN0L2Fzc2V0cy9zdHlsZS5jc3M/NTJmYSIsIndlYnBhY2s6Ly9qcy10b2RvLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzIiwid2VicGFjazovL2pzLXRvZG8vLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzIiwid2VicGFjazovL2pzLXRvZG8vLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanMiLCJ3ZWJwYWNrOi8vanMtdG9kby8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qcyIsIndlYnBhY2s6Ly9qcy10b2RvLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanMiLCJ3ZWJwYWNrOi8vanMtdG9kby8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzIiwid2VicGFjazovL2pzLXRvZG8vLi9zcmMvY2hlY2tCb3guanMiLCJ3ZWJwYWNrOi8vanMtdG9kby8uL3NyYy9kZWxldGVUb2RvLmpzIiwid2VicGFjazovL2pzLXRvZG8vLi9zcmMvbW9kYWwuanMiLCJ3ZWJwYWNrOi8vanMtdG9kby8uL3NyYy90b2RvRGlzcGxheS5qcyIsIndlYnBhY2s6Ly9qcy10b2RvLy4vc3JjL3RvZG9GaWx0ZXIuanMiLCJ3ZWJwYWNrOi8vanMtdG9kby8uL3NyYy90b2RvRm9ybS5qcyIsIndlYnBhY2s6Ly9qcy10b2RvL3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL2pzLXRvZG8vd2VicGFjay9ydW50aW1lL2NvbXBhdCBnZXQgZGVmYXVsdCBleHBvcnQiLCJ3ZWJwYWNrOi8vanMtdG9kby93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vanMtdG9kby93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL2pzLXRvZG8vd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly9qcy10b2RvL3dlYnBhY2svcnVudGltZS9ub25jZSIsIndlYnBhY2s6Ly9qcy10b2RvLy4vc3JjL2hvbWUuanMiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gSW1wb3J0c1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18gZnJvbSBcIi4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fIGZyb20gXCIuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCI7XG52YXIgX19fQ1NTX0xPQURFUl9FWFBPUlRfX18gPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyk7XG4vLyBNb2R1bGVcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgYGJvZHkge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiBhbGljZWJsdWU7XG4gIGRpc3BsYXk6IGdyaWQ7XG4gIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMWZyIDNmcjtcbiAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiA1cmVtIDFmcjtcbn1cblxuZm9ybSB7XG4gIGRpc3BsYXk6IGdyaWQ7XG4gIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMWZyIDJmcjtcbiAgZ3JpZC1nYXA6IDNweDtcbiAgLyogZmxleC13cmFwOiB3cmFwOyAqL1xufVxubGFiZWwge1xuICBncmlkLWNvbHVtbjogMTtcbn1cbiNzdWJtaXQge1xuICBncmlkLWNvbHVtbjogMSAvIHNwYW4gMjtcbn1cblxuI3NpdGUtdGl0bGUge1xuICBncmlkLXJvdzogMTtcbiAgZ3JpZC1jb2x1bW46IDEgLyBzcGFuIDI7XG5cbn1cblxuI3NpZGViYXIge1xuICBncmlkLWNvbHVtbjogMTtcbiAgZ3JpZC1yb3c6IDI7XG4gIG1heC13aWR0aDogZml0LWNvbnRlbnQ7XG4gIG1heC1oZWlnaHQ6IGZpdC1jb250ZW50O1xufVxuXG4jdG9kb3MtY29udGFpbmVyIHtcbiAgZ3JpZC1jb2x1bW46IDI7XG4gIGdyaWQtcm93OiAyO1xuICBtYXJnaW4tbGVmdDogMnJlbTtcbiAgbWFyZ2luLXJpZ2h0OiAycmVtO1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xufVxuXG4udG9kby1pdGVtIHtcbiAgZGlzcGxheTogZ3JpZDtcbiAgZ2FwOiA1cHg7XG4gIGdyaWQtdGVtcGxhdGUtY29sdW1uczogLjI1ZnIgMWZyIDFmciAuNWZyIC4yNWZyIC4yNWZyO1xuICBwYWRkaW5nLWJvdHRvbTogNXB4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xufVxuXG4uY2hlY2tib3gge1xuICBoZWlnaHQ6IDI1cHg7XG4gIHdpZHRoOiAyNXB4O1xufVxuXG4jbGlzdC1jb250YWluZXIge1xuICBwYWRkaW5nLXRvcDogMS41cmVtO1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xufVxuXG4ubGlzdCB7XG4gIHBhZGRpbmctYm90dG9tOiAuMjVyZW07XG59XG5cbiNtb2RhbC1oZWFkZXIge1xuICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG59XG5gLCBcIlwiLHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcIndlYnBhY2s6Ly8uL2Rpc3QvYXNzZXRzL3N0eWxlLmNzc1wiXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiQUFBQTtFQUNFLDJCQUEyQjtFQUMzQixhQUFhO0VBQ2IsOEJBQThCO0VBQzlCLDRCQUE0QjtBQUM5Qjs7QUFFQTtFQUNFLGFBQWE7RUFDYiw4QkFBOEI7RUFDOUIsYUFBYTtFQUNiLHFCQUFxQjtBQUN2QjtBQUNBO0VBQ0UsY0FBYztBQUNoQjtBQUNBO0VBQ0UsdUJBQXVCO0FBQ3pCOztBQUVBO0VBQ0UsV0FBVztFQUNYLHVCQUF1Qjs7QUFFekI7O0FBRUE7RUFDRSxjQUFjO0VBQ2QsV0FBVztFQUNYLHNCQUFzQjtFQUN0Qix1QkFBdUI7QUFDekI7O0FBRUE7RUFDRSxjQUFjO0VBQ2QsV0FBVztFQUNYLGlCQUFpQjtFQUNqQixrQkFBa0I7RUFDbEIsYUFBYTtFQUNiLHNCQUFzQjtBQUN4Qjs7QUFFQTtFQUNFLGFBQWE7RUFDYixRQUFRO0VBQ1IscURBQXFEO0VBQ3JELG1CQUFtQjtFQUNuQixtQkFBbUI7QUFDckI7O0FBRUE7RUFDRSxZQUFZO0VBQ1osV0FBVztBQUNiOztBQUVBO0VBQ0UsbUJBQW1CO0VBQ25CLGFBQWE7RUFDYixzQkFBc0I7QUFDeEI7O0FBRUE7RUFDRSxzQkFBc0I7QUFDeEI7O0FBRUE7RUFDRSxhQUFhO0VBQ2IsOEJBQThCO0VBQzlCLG1CQUFtQjtBQUNyQlwiLFwic291cmNlc0NvbnRlbnRcIjpbXCJib2R5IHtcXG4gIGJhY2tncm91bmQtY29sb3I6IGFsaWNlYmx1ZTtcXG4gIGRpc3BsYXk6IGdyaWQ7XFxuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDFmciAzZnI7XFxuICBncmlkLXRlbXBsYXRlLXJvd3M6IDVyZW0gMWZyO1xcbn1cXG5cXG5mb3JtIHtcXG4gIGRpc3BsYXk6IGdyaWQ7XFxuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDFmciAyZnI7XFxuICBncmlkLWdhcDogM3B4O1xcbiAgLyogZmxleC13cmFwOiB3cmFwOyAqL1xcbn1cXG5sYWJlbCB7XFxuICBncmlkLWNvbHVtbjogMTtcXG59XFxuI3N1Ym1pdCB7XFxuICBncmlkLWNvbHVtbjogMSAvIHNwYW4gMjtcXG59XFxuXFxuI3NpdGUtdGl0bGUge1xcbiAgZ3JpZC1yb3c6IDE7XFxuICBncmlkLWNvbHVtbjogMSAvIHNwYW4gMjtcXG5cXG59XFxuXFxuI3NpZGViYXIge1xcbiAgZ3JpZC1jb2x1bW46IDE7XFxuICBncmlkLXJvdzogMjtcXG4gIG1heC13aWR0aDogZml0LWNvbnRlbnQ7XFxuICBtYXgtaGVpZ2h0OiBmaXQtY29udGVudDtcXG59XFxuXFxuI3RvZG9zLWNvbnRhaW5lciB7XFxuICBncmlkLWNvbHVtbjogMjtcXG4gIGdyaWQtcm93OiAyO1xcbiAgbWFyZ2luLWxlZnQ6IDJyZW07XFxuICBtYXJnaW4tcmlnaHQ6IDJyZW07XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG59XFxuXFxuLnRvZG8taXRlbSB7XFxuICBkaXNwbGF5OiBncmlkO1xcbiAgZ2FwOiA1cHg7XFxuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IC4yNWZyIDFmciAxZnIgLjVmciAuMjVmciAuMjVmcjtcXG4gIHBhZGRpbmctYm90dG9tOiA1cHg7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbn1cXG5cXG4uY2hlY2tib3gge1xcbiAgaGVpZ2h0OiAyNXB4O1xcbiAgd2lkdGg6IDI1cHg7XFxufVxcblxcbiNsaXN0LWNvbnRhaW5lciB7XFxuICBwYWRkaW5nLXRvcDogMS41cmVtO1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxufVxcblxcbi5saXN0IHtcXG4gIHBhZGRpbmctYm90dG9tOiAuMjVyZW07XFxufVxcblxcbiNtb2RhbC1oZWFkZXIge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxufVxcblwiXSxcInNvdXJjZVJvb3RcIjpcIlwifV0pO1xuLy8gRXhwb3J0c1xuZXhwb3J0IGRlZmF1bHQgX19fQ1NTX0xPQURFUl9FWFBPUlRfX187XG4iLCJcInVzZSBzdHJpY3RcIjtcblxuLypcbiAgTUlUIExpY2Vuc2UgaHR0cDovL3d3dy5vcGVuc291cmNlLm9yZy9saWNlbnNlcy9taXQtbGljZW5zZS5waHBcbiAgQXV0aG9yIFRvYmlhcyBLb3BwZXJzIEBzb2tyYVxuKi9cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcpIHtcbiAgdmFyIGxpc3QgPSBbXTtcblxuICAvLyByZXR1cm4gdGhlIGxpc3Qgb2YgbW9kdWxlcyBhcyBjc3Mgc3RyaW5nXG4gIGxpc3QudG9TdHJpbmcgPSBmdW5jdGlvbiB0b1N0cmluZygpIHtcbiAgICByZXR1cm4gdGhpcy5tYXAoZnVuY3Rpb24gKGl0ZW0pIHtcbiAgICAgIHZhciBjb250ZW50ID0gXCJcIjtcbiAgICAgIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2YgaXRlbVs1XSAhPT0gXCJ1bmRlZmluZWRcIjtcbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKTtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIik7XG4gICAgICB9XG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKTtcbiAgICAgIH1cbiAgICAgIGNvbnRlbnQgKz0gY3NzV2l0aE1hcHBpbmdUb1N0cmluZyhpdGVtKTtcbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgcmV0dXJuIGNvbnRlbnQ7XG4gICAgfSkuam9pbihcIlwiKTtcbiAgfTtcblxuICAvLyBpbXBvcnQgYSBsaXN0IG9mIG1vZHVsZXMgaW50byB0aGUgbGlzdFxuICBsaXN0LmkgPSBmdW5jdGlvbiBpKG1vZHVsZXMsIG1lZGlhLCBkZWR1cGUsIHN1cHBvcnRzLCBsYXllcikge1xuICAgIGlmICh0eXBlb2YgbW9kdWxlcyA9PT0gXCJzdHJpbmdcIikge1xuICAgICAgbW9kdWxlcyA9IFtbbnVsbCwgbW9kdWxlcywgdW5kZWZpbmVkXV07XG4gICAgfVxuICAgIHZhciBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzID0ge307XG4gICAgaWYgKGRlZHVwZSkge1xuICAgICAgZm9yICh2YXIgayA9IDA7IGsgPCB0aGlzLmxlbmd0aDsgaysrKSB7XG4gICAgICAgIHZhciBpZCA9IHRoaXNba11bMF07XG4gICAgICAgIGlmIChpZCAhPSBudWxsKSB7XG4gICAgICAgICAgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpZF0gPSB0cnVlO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICAgIGZvciAodmFyIF9rID0gMDsgX2sgPCBtb2R1bGVzLmxlbmd0aDsgX2srKykge1xuICAgICAgdmFyIGl0ZW0gPSBbXS5jb25jYXQobW9kdWxlc1tfa10pO1xuICAgICAgaWYgKGRlZHVwZSAmJiBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2l0ZW1bMF1dKSB7XG4gICAgICAgIGNvbnRpbnVlO1xuICAgICAgfVxuICAgICAgaWYgKHR5cGVvZiBsYXllciAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICBpZiAodHlwZW9mIGl0ZW1bNV0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGlmIChtZWRpYSkge1xuICAgICAgICBpZiAoIWl0ZW1bMl0pIHtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBpZiAoc3VwcG9ydHMpIHtcbiAgICAgICAgaWYgKCFpdGVtWzRdKSB7XG4gICAgICAgICAgaXRlbVs0XSA9IFwiXCIuY29uY2F0KHN1cHBvcnRzKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNF0gPSBzdXBwb3J0cztcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgbGlzdC5wdXNoKGl0ZW0pO1xuICAgIH1cbiAgfTtcbiAgcmV0dXJuIGxpc3Q7XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChpdGVtKSB7XG4gIHZhciBjb250ZW50ID0gaXRlbVsxXTtcbiAgdmFyIGNzc01hcHBpbmcgPSBpdGVtWzNdO1xuICBpZiAoIWNzc01hcHBpbmcpIHtcbiAgICByZXR1cm4gY29udGVudDtcbiAgfVxuICBpZiAodHlwZW9mIGJ0b2EgPT09IFwiZnVuY3Rpb25cIikge1xuICAgIHZhciBiYXNlNjQgPSBidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShjc3NNYXBwaW5nKSkpKTtcbiAgICB2YXIgZGF0YSA9IFwic291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247Y2hhcnNldD11dGYtODtiYXNlNjQsXCIuY29uY2F0KGJhc2U2NCk7XG4gICAgdmFyIHNvdXJjZU1hcHBpbmcgPSBcIi8qIyBcIi5jb25jYXQoZGF0YSwgXCIgKi9cIik7XG4gICAgcmV0dXJuIFtjb250ZW50XS5jb25jYXQoW3NvdXJjZU1hcHBpbmddKS5qb2luKFwiXFxuXCIpO1xuICB9XG4gIHJldHVybiBbY29udGVudF0uam9pbihcIlxcblwiKTtcbn07IiwiXG4gICAgICBpbXBvcnQgQVBJIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzXCI7XG4gICAgICBpbXBvcnQgZG9tQVBJIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRGbiBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanNcIjtcbiAgICAgIGltcG9ydCBzZXRBdHRyaWJ1dGVzIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0U3R5bGVFbGVtZW50IGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzXCI7XG4gICAgICBpbXBvcnQgc3R5bGVUYWdUcmFuc2Zvcm1GbiBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzXCI7XG4gICAgICBpbXBvcnQgY29udGVudCwgKiBhcyBuYW1lZEV4cG9ydCBmcm9tIFwiISEuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3N0eWxlLmNzc1wiO1xuICAgICAgXG4gICAgICBcblxudmFyIG9wdGlvbnMgPSB7fTtcblxub3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybSA9IHN0eWxlVGFnVHJhbnNmb3JtRm47XG5vcHRpb25zLnNldEF0dHJpYnV0ZXMgPSBzZXRBdHRyaWJ1dGVzO1xuXG4gICAgICBvcHRpb25zLmluc2VydCA9IGluc2VydEZuLmJpbmQobnVsbCwgXCJoZWFkXCIpO1xuICAgIFxub3B0aW9ucy5kb21BUEkgPSBkb21BUEk7XG5vcHRpb25zLmluc2VydFN0eWxlRWxlbWVudCA9IGluc2VydFN0eWxlRWxlbWVudDtcblxudmFyIHVwZGF0ZSA9IEFQSShjb250ZW50LCBvcHRpb25zKTtcblxuXG5cbmV4cG9ydCAqIGZyb20gXCIhIS4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc3R5bGUuY3NzXCI7XG4gICAgICAgZXhwb3J0IGRlZmF1bHQgY29udGVudCAmJiBjb250ZW50LmxvY2FscyA/IGNvbnRlbnQubG9jYWxzIDogdW5kZWZpbmVkO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBzdHlsZXNJbkRPTSA9IFtdO1xuZnVuY3Rpb24gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcikge1xuICB2YXIgcmVzdWx0ID0gLTE7XG4gIGZvciAodmFyIGkgPSAwOyBpIDwgc3R5bGVzSW5ET00ubGVuZ3RoOyBpKyspIHtcbiAgICBpZiAoc3R5bGVzSW5ET01baV0uaWRlbnRpZmllciA9PT0gaWRlbnRpZmllcikge1xuICAgICAgcmVzdWx0ID0gaTtcbiAgICAgIGJyZWFrO1xuICAgIH1cbiAgfVxuICByZXR1cm4gcmVzdWx0O1xufVxuZnVuY3Rpb24gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpIHtcbiAgdmFyIGlkQ291bnRNYXAgPSB7fTtcbiAgdmFyIGlkZW50aWZpZXJzID0gW107XG4gIGZvciAodmFyIGkgPSAwOyBpIDwgbGlzdC5sZW5ndGg7IGkrKykge1xuICAgIHZhciBpdGVtID0gbGlzdFtpXTtcbiAgICB2YXIgaWQgPSBvcHRpb25zLmJhc2UgPyBpdGVtWzBdICsgb3B0aW9ucy5iYXNlIDogaXRlbVswXTtcbiAgICB2YXIgY291bnQgPSBpZENvdW50TWFwW2lkXSB8fCAwO1xuICAgIHZhciBpZGVudGlmaWVyID0gXCJcIi5jb25jYXQoaWQsIFwiIFwiKS5jb25jYXQoY291bnQpO1xuICAgIGlkQ291bnRNYXBbaWRdID0gY291bnQgKyAxO1xuICAgIHZhciBpbmRleEJ5SWRlbnRpZmllciA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgIHZhciBvYmogPSB7XG4gICAgICBjc3M6IGl0ZW1bMV0sXG4gICAgICBtZWRpYTogaXRlbVsyXSxcbiAgICAgIHNvdXJjZU1hcDogaXRlbVszXSxcbiAgICAgIHN1cHBvcnRzOiBpdGVtWzRdLFxuICAgICAgbGF5ZXI6IGl0ZW1bNV1cbiAgICB9O1xuICAgIGlmIChpbmRleEJ5SWRlbnRpZmllciAhPT0gLTEpIHtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS5yZWZlcmVuY2VzKys7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0udXBkYXRlcihvYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICB2YXIgdXBkYXRlciA9IGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpO1xuICAgICAgb3B0aW9ucy5ieUluZGV4ID0gaTtcbiAgICAgIHN0eWxlc0luRE9NLnNwbGljZShpLCAwLCB7XG4gICAgICAgIGlkZW50aWZpZXI6IGlkZW50aWZpZXIsXG4gICAgICAgIHVwZGF0ZXI6IHVwZGF0ZXIsXG4gICAgICAgIHJlZmVyZW5jZXM6IDFcbiAgICAgIH0pO1xuICAgIH1cbiAgICBpZGVudGlmaWVycy5wdXNoKGlkZW50aWZpZXIpO1xuICB9XG4gIHJldHVybiBpZGVudGlmaWVycztcbn1cbmZ1bmN0aW9uIGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpIHtcbiAgdmFyIGFwaSA9IG9wdGlvbnMuZG9tQVBJKG9wdGlvbnMpO1xuICBhcGkudXBkYXRlKG9iaik7XG4gIHZhciB1cGRhdGVyID0gZnVuY3Rpb24gdXBkYXRlcihuZXdPYmopIHtcbiAgICBpZiAobmV3T2JqKSB7XG4gICAgICBpZiAobmV3T2JqLmNzcyA9PT0gb2JqLmNzcyAmJiBuZXdPYmoubWVkaWEgPT09IG9iai5tZWRpYSAmJiBuZXdPYmouc291cmNlTWFwID09PSBvYmouc291cmNlTWFwICYmIG5ld09iai5zdXBwb3J0cyA9PT0gb2JqLnN1cHBvcnRzICYmIG5ld09iai5sYXllciA9PT0gb2JqLmxheWVyKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cbiAgICAgIGFwaS51cGRhdGUob2JqID0gbmV3T2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgYXBpLnJlbW92ZSgpO1xuICAgIH1cbiAgfTtcbiAgcmV0dXJuIHVwZGF0ZXI7XG59XG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChsaXN0LCBvcHRpb25zKSB7XG4gIG9wdGlvbnMgPSBvcHRpb25zIHx8IHt9O1xuICBsaXN0ID0gbGlzdCB8fCBbXTtcbiAgdmFyIGxhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKTtcbiAgcmV0dXJuIGZ1bmN0aW9uIHVwZGF0ZShuZXdMaXN0KSB7XG4gICAgbmV3TGlzdCA9IG5ld0xpc3QgfHwgW107XG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBpKyspIHtcbiAgICAgIHZhciBpZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW2ldO1xuICAgICAgdmFyIGluZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleF0ucmVmZXJlbmNlcy0tO1xuICAgIH1cbiAgICB2YXIgbmV3TGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKG5ld0xpc3QsIG9wdGlvbnMpO1xuICAgIGZvciAodmFyIF9pID0gMDsgX2kgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBfaSsrKSB7XG4gICAgICB2YXIgX2lkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbX2ldO1xuICAgICAgdmFyIF9pbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKF9pZGVudGlmaWVyKTtcbiAgICAgIGlmIChzdHlsZXNJbkRPTVtfaW5kZXhdLnJlZmVyZW5jZXMgPT09IDApIHtcbiAgICAgICAgc3R5bGVzSW5ET01bX2luZGV4XS51cGRhdGVyKCk7XG4gICAgICAgIHN0eWxlc0luRE9NLnNwbGljZShfaW5kZXgsIDEpO1xuICAgICAgfVxuICAgIH1cbiAgICBsYXN0SWRlbnRpZmllcnMgPSBuZXdMYXN0SWRlbnRpZmllcnM7XG4gIH07XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgbWVtbyA9IHt9O1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGdldFRhcmdldCh0YXJnZXQpIHtcbiAgaWYgKHR5cGVvZiBtZW1vW3RhcmdldF0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICB2YXIgc3R5bGVUYXJnZXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKHRhcmdldCk7XG5cbiAgICAvLyBTcGVjaWFsIGNhc2UgdG8gcmV0dXJuIGhlYWQgb2YgaWZyYW1lIGluc3RlYWQgb2YgaWZyYW1lIGl0c2VsZlxuICAgIGlmICh3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQgJiYgc3R5bGVUYXJnZXQgaW5zdGFuY2VvZiB3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQpIHtcbiAgICAgIHRyeSB7XG4gICAgICAgIC8vIFRoaXMgd2lsbCB0aHJvdyBhbiBleGNlcHRpb24gaWYgYWNjZXNzIHRvIGlmcmFtZSBpcyBibG9ja2VkXG4gICAgICAgIC8vIGR1ZSB0byBjcm9zcy1vcmlnaW4gcmVzdHJpY3Rpb25zXG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gc3R5bGVUYXJnZXQuY29udGVudERvY3VtZW50LmhlYWQ7XG4gICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgIC8vIGlzdGFuYnVsIGlnbm9yZSBuZXh0XG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gbnVsbDtcbiAgICAgIH1cbiAgICB9XG4gICAgbWVtb1t0YXJnZXRdID0gc3R5bGVUYXJnZXQ7XG4gIH1cbiAgcmV0dXJuIG1lbW9bdGFyZ2V0XTtcbn1cblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBpbnNlcnRCeVNlbGVjdG9yKGluc2VydCwgc3R5bGUpIHtcbiAgdmFyIHRhcmdldCA9IGdldFRhcmdldChpbnNlcnQpO1xuICBpZiAoIXRhcmdldCkge1xuICAgIHRocm93IG5ldyBFcnJvcihcIkNvdWxkbid0IGZpbmQgYSBzdHlsZSB0YXJnZXQuIFRoaXMgcHJvYmFibHkgbWVhbnMgdGhhdCB0aGUgdmFsdWUgZm9yIHRoZSAnaW5zZXJ0JyBwYXJhbWV0ZXIgaXMgaW52YWxpZC5cIik7XG4gIH1cbiAgdGFyZ2V0LmFwcGVuZENoaWxkKHN0eWxlKTtcbn1cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0QnlTZWxlY3RvcjsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBpbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucykge1xuICB2YXIgZWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzdHlsZVwiKTtcbiAgb3B0aW9ucy5zZXRBdHRyaWJ1dGVzKGVsZW1lbnQsIG9wdGlvbnMuYXR0cmlidXRlcyk7XG4gIG9wdGlvbnMuaW5zZXJ0KGVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG4gIHJldHVybiBlbGVtZW50O1xufVxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzKHN0eWxlRWxlbWVudCkge1xuICB2YXIgbm9uY2UgPSB0eXBlb2YgX193ZWJwYWNrX25vbmNlX18gIT09IFwidW5kZWZpbmVkXCIgPyBfX3dlYnBhY2tfbm9uY2VfXyA6IG51bGw7XG4gIGlmIChub25jZSkge1xuICAgIHN0eWxlRWxlbWVudC5zZXRBdHRyaWJ1dGUoXCJub25jZVwiLCBub25jZSk7XG4gIH1cbn1cbm1vZHVsZS5leHBvcnRzID0gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKSB7XG4gIHZhciBjc3MgPSBcIlwiO1xuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQob2JqLnN1cHBvcnRzLCBcIikge1wiKTtcbiAgfVxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwiQG1lZGlhIFwiLmNvbmNhdChvYmoubWVkaWEsIFwiIHtcIik7XG4gIH1cbiAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBvYmoubGF5ZXIgIT09IFwidW5kZWZpbmVkXCI7XG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJAbGF5ZXJcIi5jb25jYXQob2JqLmxheWVyLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQob2JqLmxheWVyKSA6IFwiXCIsIFwiIHtcIik7XG4gIH1cbiAgY3NzICs9IG9iai5jc3M7XG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG4gIHZhciBzb3VyY2VNYXAgPSBvYmouc291cmNlTWFwO1xuICBpZiAoc291cmNlTWFwICYmIHR5cGVvZiBidG9hICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgY3NzICs9IFwiXFxuLyojIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2Jhc2U2NCxcIi5jb25jYXQoYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoc291cmNlTWFwKSkpKSwgXCIgKi9cIik7XG4gIH1cblxuICAvLyBGb3Igb2xkIElFXG4gIC8qIGlzdGFuYnVsIGlnbm9yZSBpZiAgKi9cbiAgb3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbn1cbmZ1bmN0aW9uIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpIHtcbiAgLy8gaXN0YW5idWwgaWdub3JlIGlmXG4gIGlmIChzdHlsZUVsZW1lbnQucGFyZW50Tm9kZSA9PT0gbnVsbCkge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuICBzdHlsZUVsZW1lbnQucGFyZW50Tm9kZS5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQpO1xufVxuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGRvbUFQSShvcHRpb25zKSB7XG4gIGlmICh0eXBlb2YgZG9jdW1lbnQgPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICByZXR1cm4ge1xuICAgICAgdXBkYXRlOiBmdW5jdGlvbiB1cGRhdGUoKSB7fSxcbiAgICAgIHJlbW92ZTogZnVuY3Rpb24gcmVtb3ZlKCkge31cbiAgICB9O1xuICB9XG4gIHZhciBzdHlsZUVsZW1lbnQgPSBvcHRpb25zLmluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKTtcbiAgcmV0dXJuIHtcbiAgICB1cGRhdGU6IGZ1bmN0aW9uIHVwZGF0ZShvYmopIHtcbiAgICAgIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKTtcbiAgICB9LFxuICAgIHJlbW92ZTogZnVuY3Rpb24gcmVtb3ZlKCkge1xuICAgICAgcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCk7XG4gICAgfVxuICB9O1xufVxubW9kdWxlLmV4cG9ydHMgPSBkb21BUEk7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQpIHtcbiAgaWYgKHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0KSB7XG4gICAgc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQuY3NzVGV4dCA9IGNzcztcbiAgfSBlbHNlIHtcbiAgICB3aGlsZSAoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpIHtcbiAgICAgIHN0eWxlRWxlbWVudC5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCk7XG4gICAgfVxuICAgIHN0eWxlRWxlbWVudC5hcHBlbmRDaGlsZChkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShjc3MpKTtcbiAgfVxufVxubW9kdWxlLmV4cG9ydHMgPSBzdHlsZVRhZ1RyYW5zZm9ybTsiLCJleHBvcnQgZGVmYXVsdCBjaGVja2JveExpc3RlbmVycztcblxuZnVuY3Rpb24gbWFya0JveChrZXkpIHtcbiAgbGV0IHRvZG9JdGVtID0gSlNPTi5wYXJzZSh3aW5kb3cubG9jYWxTdG9yYWdlLmdldEl0ZW0oa2V5KSk7XG5cbiAgaWYgKHRvZG9JdGVtLmNvbXBsZXRlZCkge1xuICAgIHRvZG9JdGVtLmNvbXBsZXRlZCA9IGZhbHNlO1xuICB9IGVsc2UgaWYgKCF0b2RvSXRlbS5jb21wbGV0ZWQpIHtcbiAgICB0b2RvSXRlbS5jb21wbGV0ZWQgPSB0cnVlO1xuICB9XG4gIHdpbmRvdy5sb2NhbFN0b3JhZ2Uuc2V0SXRlbShrZXksIEpTT04uc3RyaW5naWZ5KHRvZG9JdGVtKSk7XG59XG5cbmZ1bmN0aW9uIGNoZWNrYm94TGlzdGVuZXJzKCkge1xuICBsZXQgY2hlY2tCb3hlcyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoXCJpbnB1dFt0eXBlPSdjaGVja2JveCddXCIpO1xuXG4gIGNoZWNrQm94ZXMuZm9yRWFjaCgoY2hlY2tib3gpID0+IHtcbiAgICBjaGVja2JveC5vbmNsaWNrID0gKCkgPT4ge1xuICAgICAgbWFya0JveChjaGVja2JveC5wYXJlbnRFbGVtZW50LmlkKVxuICAgIH1cbiAgfSlcbn1cbiIsImV4cG9ydCB7IGRlbGV0ZVRvZG8sIGRlbGV0ZUxpc3RlbmVycyB9O1xuaW1wb3J0IHJlbmRlclRvZG8gZnJvbSBcIi4vdG9kb0Rpc3BsYXlcIjtcblxuZnVuY3Rpb24gZGVsZXRlVG9kbyhrZXkpIHtcbiAgd2luZG93LmxvY2FsU3RvcmFnZS5zZXRJdGVtKGtleSwgJ3tcImRlbGV0ZWRcIjpcImRlbGV0ZWRcIn0nKTtcblxuICBsZXQgdG9kb3NDb250YWluZXIgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInRvZG9zLWNvbnRhaW5lclwiKTtcblxuICAvLyBSZW1vdmUgY2hpbGRyZW4gZnJvbSB0aGUgY29udGFpbmVyIGlmIHRoZXkgZXhpc3QuXG4gIGlmICh0b2Rvc0NvbnRhaW5lci5jaGlsZHJlbi5sZW5ndGggPiAwKSB7XG4gICAgd2hpbGUgKHRvZG9zQ29udGFpbmVyLmZpcnN0Q2hpbGQpIHtcbiAgICAgIHRvZG9zQ29udGFpbmVyLnJlbW92ZUNoaWxkKHRvZG9zQ29udGFpbmVyLmZpcnN0Q2hpbGQpO1xuICAgIH1cbiAgfVxuICByZW5kZXJUb2RvKCk7XG59XG5cbmZ1bmN0aW9uIGRlbGV0ZUxpc3RlbmVycygpIHtcbiAgbGV0IGRlbGV0ZUJ1dHRvbnMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKFwiLmRlbGV0ZS1idG5cIik7XG5cbiAgZGVsZXRlQnV0dG9ucy5mb3JFYWNoKChkZWxldGVCdXR0b24pID0+IHtcbiAgICBkZWxldGVCdXR0b24ub25jbGljayA9ICgpID0+IHtcbiAgICAgIGRlbGV0ZVRvZG8oZGVsZXRlQnV0dG9uLnBhcmVudEVsZW1lbnQuaWQpO1xuICAgIH1cbiAgfSlcbn1cbiIsImV4cG9ydCB7IHJlbmRlck1vZGFsLCBtb2RhbExpc3RlbmVycyB9XG5cbmZ1bmN0aW9uIHJlbmRlck1vZGFsKCkge1xuICBjb25zdCB0b2Rvc0NvbnRhaW5lciA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwidG9kb3MtY29udGFpbmVyXCIpO1xuICBjb25zdCBtb2RhbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpYWxvZycpO1xuICBtb2RhbC5pZCA9IFwibW9kYWxcIjtcblxuICB0b2Rvc0NvbnRhaW5lci5hcHBlbmRDaGlsZChtb2RhbCk7XG59XG5cbi8vIEhhbmRsZSBidXR0b25zIG91dHNpZGUgbW9kYWwuXG5mdW5jdGlvbiBtb2RhbExpc3RlbmVycygpIHtcbiAgY29uc3QgbW9kYWwgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcIm1vZGFsXCIpO1xuICBsZXQgZWRpdEJ1dHRvbnMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKFwiLmVkaXQtYnRuXCIpO1xuXG4gIGVkaXRCdXR0b25zLmZvckVhY2goKGVkaXRCdXR0b24pID0+IHtcbiAgICBlZGl0QnV0dG9uLm9uY2xpY2sgPSAoKSA9PiB7XG4gICAgICBtb2RhbC5zaG93TW9kYWwoKTtcbiAgICAgIHVwZGF0ZU1vZGFsKGVkaXRCdXR0b24ucGFyZW50RWxlbWVudC5pZCk7XG4gICAgfVxuICB9KVxufVxuXG4vLyBBZGQgdG9kbyBkYXRhIHRvIG1vZGFsLlxuZnVuY3Rpb24gdXBkYXRlTW9kYWwoa2V5KSB7XG4gIGNvbnN0IG1vZGFsID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJtb2RhbFwiKTtcblxuICAvLyBjbGVhciBhbnkgZXhpc3RpbmcgZGF0YS5cbiAgaWYgKG1vZGFsLmNoaWxkcmVuLmxlbmd0aCA+IDApIHtcbiAgICB3aGlsZSAobW9kYWwuZmlyc3RDaGlsZCkge1xuICAgICAgbW9kYWwucmVtb3ZlQ2hpbGQobW9kYWwuZmlyc3RDaGlsZCk7XG4gICAgfVxuICB9XG5cbiAgLy8gYWRkIGEgdGl0bGUgYW5kIGNsb3NlIGJ1dHRvbi5cbiAgY29uc3QgaGVhZGVyRGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgY29uc3QgbW9kYWxUaXRsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJoM1wiKTtcbiAgaGVhZGVyRGl2LmlkID0gXCJtb2RhbC1oZWFkZXJcIjtcbiAgbW9kYWxUaXRsZS50ZXh0Q29udGVudCA9IFwiVmlldyAvIEVkaXQgVG8tZG9cIjtcblxuICBjb25zdCBjbG9zZU1vZGFsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImJ1dHRvblwiKTtcbiAgY2xvc2VNb2RhbC5pbm5lckhUTUwgPSBcIiZ0aW1lc1wiO1xuICBjbG9zZU1vZGFsLmlkID0gXCJjbG9zZU1vZGFsXCI7XG5cbiAgaGVhZGVyRGl2LmFwcGVuZChtb2RhbFRpdGxlLCBjbG9zZU1vZGFsKTtcbiAgbW9kYWwuYXBwZW5kQ2hpbGQoaGVhZGVyRGl2KTtcblxuICAvLyBBZGQgbGlzdGVuZXIgdG8gY2xvc2UgYnV0dG9uLlxuICBjbG9zZU1vZGFsLm9uY2xpY2sgPSAoKSA9PiB7XG4gICAgbW9kYWwuY2xvc2UoKVxuICB9O1xuXG4gIC8vIFB1bGwgdG9kbyBpbmZvIGFuZCBwcmVmaWxsIGZvcm0gd2l0aCBkYXRhLlxuICBsZXQgdG9kb0l0ZW0gPSBKU09OLnBhcnNlKHdpbmRvdy5sb2NhbFN0b3JhZ2UuZ2V0SXRlbShrZXkpKTtcbiAgY29uc3QgdG9kb0RhdGEgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZm9ybVwiKTtcblxuICB0b2RvRGF0YS5hZGRFdmVudExpc3RlbmVyKFwic3VibWl0XCIsIGZ1bmN0aW9uIChfZXZlbnQpIHtcblxuICAgIHRvZG9JdGVtLnRpdGxlID0gdG9kb0RhdGEuZWxlbWVudHMudGl0bGUudmFsdWU7XG4gICAgdG9kb0l0ZW0uZHVlRGF0ZSA9IHRvZG9EYXRhLmVsZW1lbnRzLmR1ZURhdGUudmFsdWU7XG4gICAgdG9kb0l0ZW0ucHJpb3JpdHkgPSB0b2RvRGF0YS5lbGVtZW50cy5wcmlvcml0eS52YWx1ZTtcbiAgICB0b2RvSXRlbS5ub3RlcyA9IHRvZG9EYXRhLmVsZW1lbnRzLm5vdGVzLnZhbHVlO1xuICAgIHRvZG9JdGVtLmxpc3QgPSB0b2RvRGF0YS5lbGVtZW50cy5saXN0LnZhbHVlO1xuXG4gICAgd2luZG93LmxvY2FsU3RvcmFnZS5zZXRJdGVtKGtleSwgSlNPTi5zdHJpbmdpZnkodG9kb0l0ZW0pKTtcbiAgfSk7XG5cbiAgICB0b2RvRGF0YS5pbm5lckhUTUwgPSBgXG4gICAgICA8bGFiZWwgZm9yPVwidGl0bGVcIj5UaXRsZTo8L2xhYmVsPlxuICAgICAgPGlucHV0IHR5cGU9XCJ0ZXh0XCIgaWQ9XCJ0aXRsZVwiIG5hbWU9XCJ0aXRsZVwiIHZhbHVlPVwiJHt0b2RvSXRlbS50aXRsZX1cIiByZXF1aXJlZD48YnI+XG5cbiAgICAgIDxsYWJlbCBmb3I9XCJkdWUtZGF0ZVwiPkR1ZSBEYXRlOjwvbGFiZWw+XG4gICAgICA8aW5wdXQgdHlwZT1cImRhdGVcIiBpZD1cImR1ZS1kYXRlXCIgbmFtZT1cImR1ZURhdGVcIiB2YWx1ZT0ke3RvZG9JdGVtLmR1ZURhdGV9Pjxicj5cblxuICAgICAgPGxhYmVsIGZvcj1cInByaW9yaXR5XCI+UHJpb3JpdHk6PC9sYWJlbD5cbiAgICAgIDxzZWxlY3QgaWQ9XCJwcmlvcml0eVwiIG5hbWU9XCJwcmlvcml0eVwiIHZhbHVlPSR7dG9kb0l0ZW0ucHJpb3JpdHl9PlxuICAgICAgICAgIDxvcHRpb24gdmFsdWU9XCJoaWdoXCI+SGlnaDwvb3B0aW9uPlxuICAgICAgICAgIDxvcHRpb24gdmFsdWU9XCJtZWRpdW1cIj5NZWRpdW08L29wdGlvbj5cbiAgICAgICAgICA8b3B0aW9uIHZhbHVlPVwibG93XCI+TG93PC9vcHRpb24+XG4gICAgICA8L3NlbGVjdD48YnI+XG5cbiAgICAgIDxsYWJlbCBmb3I9XCJub3Rlc1wiPk5vdGVzOjwvbGFiZWw+XG4gICAgICA8dGV4dGFyZWEgaWQ9XCJub3Rlc1wiIG5hbWU9XCJub3Rlc1wiPiR7dG9kb0l0ZW0ubm90ZXN9PC90ZXh0YXJlYT48YnI+XG5cbiAgICAgIDxsYWJlbCBmb3I9XCJsaXN0XCI+TGlzdDo8L2xhYmVsPlxuICAgICAgPGlucHV0IHR5cGU9XCJ0ZXh0XCIgaWQ9XCJsaXN0XCIgbmFtZT1cImxpc3RcIiB2YWx1ZT0ke3RvZG9JdGVtLmxpc3R9Pjxicj5cblxuICAgICAgPGlucHV0IHR5cGU9XCJzdWJtaXRcIiB2YWx1ZT1cIkVkaXQgVG9kb1wiIGlkPVwic3VibWl0XCI+XG4gICAgYDtcblxuICBtb2RhbC5hcHBlbmRDaGlsZCh0b2RvRGF0YSk7XG59XG4iLCJpbXBvcnQgeyBkZWxldGVMaXN0ZW5lcnMgfSBmcm9tIFwiLi9kZWxldGVUb2RvXCI7XG5pbXBvcnQgeyBtb2RhbExpc3RlbmVycyB9IGZyb20gXCIuL21vZGFsXCI7XG5cbmV4cG9ydCBkZWZhdWx0IHJlbmRlclRvZG87XG5cbi8vIENoZWNrIGlmIGNvbnRlbnQgZGl2cyBleGlzdHMsIGlmIG5vdCBjcmVhdGUgdGhlbS5cbmZ1bmN0aW9uIGVzdGFibGlzaENvbnRhaW5lcnMoKSB7XG4gIGxldCB0b2Rvc0NvbnRhaW5lciA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwidG9kb3MtY29udGFpbmVyXCIpO1xuICBsZXQgbGlzdENvbnRhaW5lciA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwibGlzdC1jb250YWluZXJcIik7XG5cbiAgaWYgKCF0b2Rvc0NvbnRhaW5lcikge1xuICAgIHRvZG9zQ29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICB0b2Rvc0NvbnRhaW5lci5pZCA9IFwidG9kb3MtY29udGFpbmVyXCI7XG4gIH1cblxuICBpZiAoIWxpc3RDb250YWluZXIpIHtcbiAgICBsaXN0Q29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICBsaXN0Q29udGFpbmVyLmlkID0gXCJsaXN0LWNvbnRhaW5lclwiO1xuICB9XG5cbiAgcmV0dXJuIFt0b2Rvc0NvbnRhaW5lciwgbGlzdENvbnRhaW5lcl07XG59XG5cbmZ1bmN0aW9uIHJlbmRlclRvZG8oaSA9IDApIHtcbiAgY29uc3QgYm9keSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCJib2R5XCIpO1xuICBjb25zdCBzaWRlYmFyQ29udGFpbmVyID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJzaWRlYmFyXCIpO1xuICBjb25zdCBbdG9kb3NDb250YWluZXIsIGxpc3RDb250YWluZXJdID0gZXN0YWJsaXNoQ29udGFpbmVycygpO1xuXG4gIGZvciAoaTsgaSA8IHdpbmRvdy5sb2NhbFN0b3JhZ2UubGVuZ3RoOyBpKyspIHtcbiAgICBsZXQgdG9kb0l0ZW0gPSBKU09OLnBhcnNlKHdpbmRvdy5sb2NhbFN0b3JhZ2UuZ2V0SXRlbShpLnRvU3RyaW5nKCkpKTtcblxuICAgIGlmICh0b2RvSXRlbS5kZWxldGVkID09PSBcImRlbGV0ZWRcIikge1xuICAgICAgY29udGludWU7XG4gICAgfVxuXG4gICAgbGV0IG5ld1RvZG8gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgIG5ld1RvZG8uY2xhc3NMaXN0LmFkZChcInRvZG8taXRlbVwiKTtcbiAgICAvLyBBdHRhY2ggdGhlIHRvZG8gaXRlbSdzIGtleSBmb3IgbG9va3Vwcy5cbiAgICBuZXdUb2RvLmlkID0gaTtcblxuICAgIC8vIENyZWF0ZSBjaGVja2JveCBhbmQgZW5zdXJlIGl0IGlzIG1hcmtlZCBpZiB0aGUgdG9kbyBpcyBjb21wbGV0ZWQuXG4gICAgbGV0IGNoZWNrQm94ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImlucHV0XCIpO1xuICAgIGNoZWNrQm94LnR5cGUgPSBcImNoZWNrYm94XCI7XG4gICAgY2hlY2tCb3guY2xhc3NMaXN0LmFkZChcImNoZWNrYm94XCIpO1xuICAgIGlmICh0b2RvSXRlbS5jb21wbGV0ZWQpIHtcbiAgICAgIGNoZWNrQm94LmNoZWNrZWQgPSB0cnVlO1xuICAgIH1cblxuICAgIC8vIEFkZCB0b2RvIGluZm8gdG8gcGFnZS5cbiAgICBjb25zdCB0aXRsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJwXCIpO1xuICAgIGNvbnN0IGR1ZURhdGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwicFwiKTtcbiAgICBjb25zdCBwcmlvcml0eSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJwXCIpO1xuXG4gICAgdGl0bGUudGV4dENvbnRlbnQgPSB0b2RvSXRlbS50aXRsZTtcbiAgICBkdWVEYXRlLnRleHRDb250ZW50ID0gdG9kb0l0ZW0uZHVlRGF0ZTtcbiAgICBwcmlvcml0eS50ZXh0Q29udGVudCA9IHRvZG9JdGVtLnByaW9yaXR5O1xuXG4gICAgLy8gQ3JlYXRlIHZpZXcgLyBlZGl0IGJ1dHRvbi5cbiAgICBsZXQgZWRpdEJ1dHRvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJidXR0b25cIik7XG4gICAgZWRpdEJ1dHRvbi5jbGFzc0xpc3QuYWRkKFwiZWRpdC1idG5cIik7XG4gICAgZWRpdEJ1dHRvbi50ZXh0Q29udGVudCA9IFwi4pyOXCI7XG5cbiAgICAvLyBDcmVhdGUgZGVsZXRlIGJ1dHRvbi5cbiAgICBsZXQgZGVsZXRlQnV0dG9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImJ1dHRvblwiKTtcbiAgICBkZWxldGVCdXR0b24uY2xhc3NMaXN0LmFkZChcImRlbGV0ZS1idG5cIik7XG4gICAgZGVsZXRlQnV0dG9uLnRleHRDb250ZW50ID0gXCLwn5eRXCI7XG5cbiAgICBuZXdUb2RvLmFwcGVuZChjaGVja0JveCwgdGl0bGUsIGR1ZURhdGUsIHByaW9yaXR5LCBlZGl0QnV0dG9uLCBkZWxldGVCdXR0b24pO1xuICAgIHRvZG9zQ29udGFpbmVyLmFwcGVuZENoaWxkKG5ld1RvZG8pO1xuICB9XG4gIGJvZHkuYXBwZW5kQ2hpbGQodG9kb3NDb250YWluZXIpO1xuICByZW5kZXJMaXN0cyhsaXN0Q29udGFpbmVyLCBzaWRlYmFyQ29udGFpbmVyKTtcblxuICAvLyBFbnN1cmUgb25jbGljayBsaXN0ZW5lcnMgYXJlIGFkZGVkIHRvIGVkaXQgJiBkZWxldGUgYnV0dG9ucy5cbiAgZGVsZXRlTGlzdGVuZXJzKCk7XG4gIG1vZGFsTGlzdGVuZXJzKCk7XG59XG5cbmZ1bmN0aW9uIHJlbmRlckxpc3RzKGxpc3RDb250YWluZXIsIHNpZGViYXJDb250YWluZXIpIHtcbiAgLy8gUmVtb3ZlIGNoaWxkcmVuIGZyb20gdGhlIGxpc3QgY29udGFpbmVyIGlmIHRoZXkgZXhpc3QuXG4gIGlmIChsaXN0Q29udGFpbmVyLmNoaWxkcmVuLmxlbmd0aCA+IDApIHtcbiAgICB3aGlsZSAobGlzdENvbnRhaW5lci5maXJzdENoaWxkKSB7XG4gICAgICBsaXN0Q29udGFpbmVyLnJlbW92ZUNoaWxkKGxpc3RDb250YWluZXIuZmlyc3RDaGlsZCk7XG4gICAgfVxuICB9XG5cbiAgLy8gU2V0IHRpdGxlLlxuICBsZXQgbGlzdFRpdGxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImgyXCIpO1xuICBsaXN0VGl0bGUudGV4dENvbnRlbnQgPSBcIkxpc3RzXCI7XG4gIGxpc3RDb250YWluZXIuYXBwZW5kQ2hpbGQobGlzdFRpdGxlKTtcblxuICAvLyBDcmVhdGUgYSBoaWRkZW4gYnV0dG9uIHRvIHNob3cgYWxsIHRvZG9zIGlmIGZpbHRlcmluZyBieSBsaXN0LlxuICBjb25zdCBzaG93QWxsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImJ1dHRvblwiKTtcbiAgc2hvd0FsbC50ZXh0Q29udGVudCA9IFwiU2hvdyBBbGxcIjtcbiAgc2hvd0FsbC5pZCA9IFwic2hvd0FsbFwiO1xuICBzaG93QWxsLmNsYXNzTGlzdC5hZGQoXCJsaXN0XCIpO1xuICBzaG93QWxsLnN0eWxlLmRpc3BsYXkgPSBcIm5vbmVcIjtcblxuICAvLyBDb2xsZWN0IGxpc3RzIGZyb20gYWxsIHRvZG8gaXRlbXMgaW4gbG9jYWwgc3RvcmFnZS5cbiAgbGV0IGxpc3RzID0gW107XG4gIGZvciAobGV0IGkgPSAwOyBpIDwgd2luZG93LmxvY2FsU3RvcmFnZS5sZW5ndGg7IGkrKykge1xuICAgIGxldCB0b2RvSXRlbSA9IEpTT04ucGFyc2Uod2luZG93LmxvY2FsU3RvcmFnZS5nZXRJdGVtKGkudG9TdHJpbmcoKSkpO1xuICAgIGxpc3RzLnB1c2godG9kb0l0ZW0ubGlzdCk7XG4gIH1cblxuICAvLyBSZW1vdmUgZHVwbGljYXRlcy5cbiAgbGV0IGNsZWFuZWRMaXN0cyA9IFsuLi5uZXcgU2V0KGxpc3RzKV07XG5cbiAgLy8gQWRkIGNsZWFuZWQgdXAgbGlzdHMgdG8gcGFnZS5cbiAgY2xlYW5lZExpc3RzLmZvckVhY2goKGxpc3QpID0+IHtcbiAgICBjb25zdCBsaXN0RWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJhXCIpO1xuICAgIGxpc3RFbGVtZW50LmNsYXNzTGlzdC5hZGQoXCJsaXN0XCIpO1xuICAgIGxpc3RFbGVtZW50LnRleHRDb250ZW50ID0gbGlzdDtcbiAgICBsaXN0Q29udGFpbmVyLmFwcGVuZENoaWxkKGxpc3RFbGVtZW50KTtcbiAgfSk7XG4gIGxpc3RDb250YWluZXIuYXBwZW5kQ2hpbGQoc2hvd0FsbCk7XG4gIHNpZGViYXJDb250YWluZXIuYXBwZW5kQ2hpbGQobGlzdENvbnRhaW5lcik7XG59XG4iLCJleHBvcnQgeyBmaWx0ZXJUb2RvcywgZmlsdGVyTGlzdGVuZXJzIH07XG5cbmZ1bmN0aW9uIGZpbHRlclRvZG9zKGxpc3QpIHtcbiAgLy8gUmV2ZWFsICdTaG93IEFsbCcgYnV0dG9uLlxuICBjb25zdCBzaG93QWxsID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3Nob3dBbGwnKTtcbiAgc2hvd0FsbC5zdHlsZS5kaXNwbGF5ID0gXCJcIjtcblxuICAvLyBGaWx0ZXIgdG9kb3MgYnkgbGlzdC5cbiAgZm9yIChsZXQgaSA9IDA7IGkgPCB3aW5kb3cubG9jYWxTdG9yYWdlLmxlbmd0aDsgaSsrKSB7XG4gICAgbGV0IHRvZG9JdGVtID0gSlNPTi5wYXJzZSh3aW5kb3cubG9jYWxTdG9yYWdlLmdldEl0ZW0oaS50b1N0cmluZygpKSk7XG5cbiAgICAvLyBmaW5kIHRoZSBkaXYgY29udGFpbmluZyB0aGlzIHRvZG8gaXRlbS5cbiAgICBsZXQgdG9kb0RpdiA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKGkpO1xuXG4gICAgLy8gaWdub3JlIGRlbGV0ZWQgdG9kbyBpdGVtcy5cbiAgICBpZiAodG9kb0l0ZW0uZGVsZXRlZCA9PT0gXCJkZWxldGVkXCIpIHtcbiAgICAgIGNvbnRpbnVlO1xuICAgIC8vIGlmICdzaG93IGFsbCcgaXMgY2xpY2tlZCwgcmVtb3ZlIGFueSBoaWRkZW4gYXR0cmlidXRlcyBhbmQgbW92ZSB0byBuZXh0LlxuICAgIH0gZWxzZSBpZiAobGlzdCA9PT0gXCJTaG93IEFsbFwiKSB7XG4gICAgICB0b2RvRGl2LnN0eWxlLmRpc3BsYXkgPSBcIlwiO1xuICAgICAgLy8gcmVoaWRlIHNob3cgYWxsIGJ1dHRvbi5cbiAgICAgIHNob3dBbGwuc3R5bGUuZGlzcGxheSA9IFwibm9uZVwiO1xuICAgICAgY29udGludWU7XG4gICAgLy8gaGlkZSB0aGUgaXRlbSBpZiBsaXN0IGRvZXNuJ3QgbWF0Y2guXG4gICAgfSBlbHNlIGlmICh0b2RvSXRlbS5saXN0ICE9PSBsaXN0KSB7XG4gICAgICB0b2RvRGl2LnN0eWxlLmRpc3BsYXkgPSBcIm5vbmVcIjtcbiAgICAvLyBzaG93IGl0ZW0gaWYgbGlzdCBtYXRjaGVzLlxuICAgIH0gZWxzZSB7XG4gICAgICB0b2RvRGl2LnN0eWxlLmRpc3BsYXkgPSBcIlwiO1xuICAgIH1cbiAgfVxufVxuXG5mdW5jdGlvbiBmaWx0ZXJMaXN0ZW5lcnMoKSB7XG4gIGxldCBsaXN0TGlua3MgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKFwiLmxpc3RcIik7XG5cbiAgbGlzdExpbmtzLmZvckVhY2goKGxpc3QpID0+IHtcbiAgICBsaXN0Lm9uY2xpY2sgPSAoKSA9PiB7XG4gICAgICBmaWx0ZXJUb2RvcyhsaXN0LnRleHRDb250ZW50KTtcbiAgICB9XG4gIH0pXG59XG4iLCJleHBvcnQgZGVmYXVsdCByZW5kZXJUb2RvRm9ybTtcbmltcG9ydCByZW5kZXJUb2RvIGZyb20gXCIuL3RvZG9EaXNwbGF5LmpzXCI7XG5cbmNsYXNzIHRvZG8ge1xuICBjb25zdHJ1Y3Rvcih0aXRsZSwgZHVlRGF0ZSwgcHJpb3JpdHksIG5vdGVzLCBsaXN0ID0gXCJkZWZhdWx0XCIpIHtcbiAgICB0aGlzLnRpdGxlID0gdGl0bGU7XG4gICAgdGhpcy5kdWVEYXRlID0gZHVlRGF0ZTtcbiAgICB0aGlzLnByaW9yaXR5ID0gcHJpb3JpdHk7XG4gICAgdGhpcy5ub3RlcyA9IG5vdGVzO1xuICAgIHRoaXMubGlzdCA9IGxpc3Q7XG4gICAgdGhpcy5jb21wbGV0ZWQgPSBmYWxzZTtcbiAgfVxufVxuXG5mdW5jdGlvbiByZW5kZXJUb2RvRm9ybSgpIHtcbiAgY29uc3QgYm9keSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCJib2R5XCIpO1xuXG4gIGNvbnN0IHNpZGViYXJDb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICBzaWRlYmFyQ29udGFpbmVyLmlkID0gXCJzaWRlYmFyXCI7XG5cbiAgY29uc3QgZm9ybSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJmb3JtXCIpO1xuICBmb3JtLmFkZEV2ZW50TGlzdGVuZXIoXCJzdWJtaXRcIiwgZnVuY3Rpb24gKGV2ZW50KSB7XG4gICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcblxuICAgIGNvbnN0IHRpdGxlID0gZm9ybS5lbGVtZW50cy50aXRsZS52YWx1ZTtcbiAgICBjb25zdCBkdWVEYXRlID0gZm9ybS5lbGVtZW50cy5kdWVEYXRlLnZhbHVlO1xuICAgIGNvbnN0IHByaW9yaXR5ID0gZm9ybS5lbGVtZW50cy5wcmlvcml0eS52YWx1ZTtcbiAgICBjb25zdCBub3RlcyA9IGZvcm0uZWxlbWVudHMubm90ZXMudmFsdWU7XG4gICAgY29uc3QgbGlzdCA9IGZvcm0uZWxlbWVudHMubGlzdC52YWx1ZTtcblxuICAgIGNvbnN0IG5ld1RvZG8gPSBuZXcgdG9kbyh0aXRsZSwgZHVlRGF0ZSwgcHJpb3JpdHksIG5vdGVzLCBsaXN0KTtcblxuICAgIC8vIFJlc2V0IHRoZSBmb3JtIGFmdGVyIHN1Ym1pc3Npb25cbiAgICBmb3JtLnJlc2V0KCk7XG5cbiAgICAvLyBTZW5kIHRvZG8gb2JqZWN0IHRvIGxvY2Fsc3RvcmFnZS5cbiAgICBzZW5kVG9TdG9yYWdlKEpTT04uc3RyaW5naWZ5KG5ld1RvZG8pKTtcblxuICAgIC8vIFJlbmRlciBvbmx5IHRoZSBuZXdseSBjcmVhdGVkIHRvZG8uXG4gICAgcmVuZGVyVG9kbyh3aW5kb3cubG9jYWxTdG9yYWdlLmxlbmd0aCAtIDEpO1xuICB9KTtcblxuICBmb3JtLmlubmVySFRNTCA9IGBcbiAgICAgIDxsYWJlbCBmb3I9XCJ0aXRsZVwiPlRpdGxlOjwvbGFiZWw+XG4gICAgICA8aW5wdXQgdHlwZT1cInRleHRcIiBpZD1cInRpdGxlXCIgbmFtZT1cInRpdGxlXCIgcmVxdWlyZWQ+PGJyPlxuXG4gICAgICA8bGFiZWwgZm9yPVwiZHVlLWRhdGVcIj5EdWUgRGF0ZTo8L2xhYmVsPlxuICAgICAgPGlucHV0IHR5cGU9XCJkYXRlXCIgaWQ9XCJkdWUtZGF0ZVwiIG5hbWU9XCJkdWVEYXRlXCI+PGJyPlxuXG4gICAgICA8bGFiZWwgZm9yPVwicHJpb3JpdHlcIj5Qcmlvcml0eTo8L2xhYmVsPlxuICAgICAgPHNlbGVjdCBpZD1cInByaW9yaXR5XCIgbmFtZT1cInByaW9yaXR5XCI+XG4gICAgICAgICAgPG9wdGlvbiB2YWx1ZT1cImhpZ2hcIj5IaWdoPC9vcHRpb24+XG4gICAgICAgICAgPG9wdGlvbiB2YWx1ZT1cIm1lZGl1bVwiIHNlbGVjdGVkPk1lZGl1bTwvb3B0aW9uPlxuICAgICAgICAgIDxvcHRpb24gdmFsdWU9XCJsb3dcIj5Mb3c8L29wdGlvbj5cbiAgICAgIDwvc2VsZWN0Pjxicj5cblxuICAgICAgPGxhYmVsIGZvcj1cIm5vdGVzXCI+Tm90ZXM6PC9sYWJlbD5cbiAgICAgIDx0ZXh0YXJlYSBpZD1cIm5vdGVzXCIgbmFtZT1cIm5vdGVzXCI+PC90ZXh0YXJlYT48YnI+XG5cbiAgICAgIDxsYWJlbCBmb3I9XCJsaXN0XCI+TGlzdDo8L2xhYmVsPlxuICAgICAgPGlucHV0IHR5cGU9XCJ0ZXh0XCIgaWQ9XCJsaXN0XCIgbmFtZT1cImxpc3RcIiB2YWx1ZT1cIkRlZmF1bHRcIj48YnI+XG5cbiAgICAgIDxpbnB1dCB0eXBlPVwic3VibWl0XCIgdmFsdWU9XCJDcmVhdGUgVG9kb1wiIGlkPVwic3VibWl0XCI+XG4gIGA7XG5cbiAgc2lkZWJhckNvbnRhaW5lci5hcHBlbmRDaGlsZChmb3JtKTtcbiAgYm9keS5hcHBlbmRDaGlsZChzaWRlYmFyQ29udGFpbmVyKTtcbn1cblxuZnVuY3Rpb24gc2VuZFRvU3RvcmFnZSh0b2RvSXRlbSkge1xuICB3aW5kb3cubG9jYWxTdG9yYWdlLnNldEl0ZW0od2luZG93LmxvY2FsU3RvcmFnZS5sZW5ndGgsIHRvZG9JdGVtKTtcbn07XG4iLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdGlkOiBtb2R1bGVJZCxcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuIiwiLy8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbl9fd2VicGFja19yZXF1aXJlX18ubiA9IChtb2R1bGUpID0+IHtcblx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG5cdFx0KCkgPT4gKG1vZHVsZVsnZGVmYXVsdCddKSA6XG5cdFx0KCkgPT4gKG1vZHVsZSk7XG5cdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsIHsgYTogZ2V0dGVyIH0pO1xuXHRyZXR1cm4gZ2V0dGVyO1xufTsiLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5uYyA9IHVuZGVmaW5lZDsiLCJpbXBvcnQgcmVuZGVyVG9kbyBmcm9tIFwiLi90b2RvRGlzcGxheS5qc1wiO1xuaW1wb3J0IHJlbmRlclRvZG9Gb3JtIGZyb20gXCIuL3RvZG9Gb3JtLmpzXCI7XG5pbXBvcnQgY3NzIGZyb20gXCIuLi9kaXN0L2Fzc2V0cy9zdHlsZS5jc3NcIjtcbmltcG9ydCBjaGVja2JveExpc3RlbmVycyBmcm9tIFwiLi9jaGVja0JveC5qc1wiO1xuaW1wb3J0IHsgZGVsZXRlTGlzdGVuZXJzIH0gZnJvbSBcIi4vZGVsZXRlVG9kby5qc1wiO1xuaW1wb3J0IHsgZmlsdGVyTGlzdGVuZXJzIH0gZnJvbSBcIi4vdG9kb0ZpbHRlci5qc1wiO1xuaW1wb3J0IHsgcmVuZGVyTW9kYWwsIG1vZGFsTGlzdGVuZXJzIH0gZnJvbSBcIi4vbW9kYWwuanNcIjtcblxuLy8gd2luZG93LmxvY2FsU3RvcmFnZS5jbGVhcigpO1xuXG5yZW5kZXJUb2RvRm9ybSgpO1xucmVuZGVyVG9kbygpO1xucmVuZGVyTW9kYWwoKTtcbmNoZWNrYm94TGlzdGVuZXJzKCk7XG5tb2RhbExpc3RlbmVycygpO1xuZGVsZXRlTGlzdGVuZXJzKCk7XG5maWx0ZXJMaXN0ZW5lcnMoKTtcbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==