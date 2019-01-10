/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/config.json":
/*!*************************!*\
  !*** ./src/config.json ***!
  \*************************/
/*! exports provided: proto, url, params, default */
/***/ (function(module) {

eval("module.exports = {\"proto\":\"https\",\"url\":\"randomuser.me/api/?\",\"params\":{\"results\":\"50\",\"format\":\"json\",\"nat\":\"us\",\"gender\":\"\",\"password\":\"\",\"inc\":\"gender,name,location,email,phone,picture\"}};\n\n//# sourceURL=webpack:///./src/config.json?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nvar _personwidget = __webpack_require__(/*! ./widget/personwidget.js */ \"./src/widget/personwidget.js\");\n\nvar _personwidget2 = _interopRequireDefault(_personwidget);\n\nvar _config = __webpack_require__(/*! ./config.json */ \"./src/config.json\");\n\nvar _config2 = _interopRequireDefault(_config);\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nvar container = document.querySelector('.person-list-container');\nvar widget = new _personwidget2.default(_config2.default, container, [10, 15, 20]);\n\n//# sourceURL=webpack:///./src/index.js?");

/***/ }),

/***/ "./src/widget/personlist.js":
/*!**********************************!*\
  !*** ./src/widget/personlist.js ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n    value: true\n});\n\nvar _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\n// Make URI from config for request\nfunction buildUrl(config) {\n    var result = config.proto + '://' + config.url;\n    for (var key in config.params) {\n        result += key + '=' + config.params[key] + '&';\n    }\n    // return URI without last &\n    return result.slice(0, result.length - 1);\n}\n//\n\nvar PersonList = function () {\n    function PersonList(config, view) {\n        _classCallCheck(this, PersonList);\n\n        this.url = buildUrl(config);\n        this.view = view;\n        this.personList = [];\n    }\n\n    _createClass(PersonList, [{\n        key: 'sort',\n        value: function sort() {\n            this.personList.sort(function (person_a, person_b) {\n                var name_a = person_a.name.first + ' ' + person_a.name.last;\n                var name_b = person_b.name.first + ' ' + person_b.name.last;\n                return name_a.localeCompare(name_b);\n            });\n        }\n    }, {\n        key: 'reverse',\n        value: function reverse() {\n            this.personList.reverse();\n        }\n    }, {\n        key: 'updateData',\n        value: function updateData() {\n            var _this = this;\n\n            return new Promise(function (resolve, reject) {\n                var xhr = new XMLHttpRequest();\n                xhr.open('GET', _this.url, true);\n                xhr.responseType = 'json';\n\n                xhr.onreadystatechange = function () {\n                    if (xhr.readyState !== 4) return;\n                    if (xhr.status !== 200) {\n                        console.log(xhr.status + ': ' + xhr.statusText);\n                    } else {\n                        resolve(xhr.response.results);\n                    }\n                };\n                xhr.ontimeout = function () {\n                    console.log('Извините, запрос превысил максимальное время');\n                    // TODO update view\n                    reject('timeout');\n                };\n                xhr.onerror = function (error) {\n                    console.log('Error: ' + error);\n                    // TODO update view\n                    reject(error);\n                };\n                xhr.send();\n            });\n        }\n    }, {\n        key: 'update',\n        value: function update() {\n            // Calc count pages\n            var start = this.page * this.range,\n                end = start + this.range;\n            this.view.showList(this.personList.slice(start, end));\n        }\n    }]);\n\n    return PersonList;\n}();\n\nexports.default = PersonList;\n\n//# sourceURL=webpack:///./src/widget/personlist.js?");

/***/ }),

/***/ "./src/widget/personview.js":
/*!**********************************!*\
  !*** ./src/widget/personview.js ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n    value: true\n});\n\nvar _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\n// string -> String\nfunction sentenceCase(str) {\n    return str.slice(0, 1).toUpperCase() + str.slice(1);\n}\n// convert \"4091 lakeshore rd\" to \"4091 Lakeshore Rd\"\nfunction parseAddress(street) {\n    var array = street.split(' ');\n    var result = '';\n    for (var i = 0; i < array.length; i++) {\n        result += ' ' + sentenceCase(array[i]);\n    }\n    return result;\n}\n// remove all children\nfunction removeChildren(container) {\n    var count = container.children.length;\n\n    for (var i = 0; i < count; i++) {\n        container.removeChild(container.firstElementChild);\n    }\n}\n// Add DOM Element to container\nfunction addElement(container, element, attr, content) {\n    var elm = document.createElement(element);\n    for (var key in attr) {\n        elm.setAttribute(key, attr[key]);\n    }\n    if (content) {\n        elm.innerText = content;\n    }\n    container.appendChild(elm);\n    return elm;\n}\n\nvar PersonView = function () {\n    _createClass(PersonView, null, [{\n        key: 'CLICK',\n\n        // click event\n        get: function get() {\n            return 'click';\n        }\n        // active css class\n\n    }, {\n        key: 'ACTIVE',\n        get: function get() {\n            return 'active';\n        }\n        // hidden css class\n\n    }, {\n        key: 'HIDDEN',\n        get: function get() {\n            return 'hidden';\n        }\n    }]);\n\n    function PersonView(container) {\n        _classCallCheck(this, PersonView);\n\n        this.container = container;\n        this.sortSelector = container.querySelector('.sorting');\n        this.viewList = container.querySelector('.view-list');\n        this.ranges = container.querySelector('.ranges');\n        this.pages = container.querySelector('.pages');\n        this.modalOverlay = container.querySelector('.modal-overlay');\n        this.modal = container.querySelector('.full-info');\n    }\n\n    _createClass(PersonView, [{\n        key: 'showList',\n        value: function showList(personList) {\n            var _this = this;\n\n            if (this.viewList.children.length > 0) {\n                removeChildren(this.viewList);\n            }\n\n            personList.forEach(function (person) {\n                var li = document.createElement('li'),\n                    img = document.createElement('img'),\n                    pName = document.createElement('p');\n                img.src = person.picture.thumbnail;\n                var _person$name = person.name,\n                    title = _person$name.title,\n                    first = _person$name.first,\n                    last = _person$name.last;\n\n                pName.innerText = sentenceCase(title) + '. ' + sentenceCase(first) + ' ' + sentenceCase(last);\n                li.appendChild(img);\n                li.appendChild(pName);\n\n                li.addEventListener(PersonView.CLICK, function (event) {\n                    return _this.showFullInfo(person, event);\n                });\n\n                _this.viewList.appendChild(li);\n            });\n        }\n    }, {\n        key: 'showRanges',\n        value: function showRanges(ranges, controller) {\n            var _this2 = this;\n\n            ranges.forEach(function (range, index) {\n                var li = document.createElement('li'),\n                    a = document.createElement('a');\n                if (!index) {\n                    a.classList.add(PersonView.ACTIVE);\n                    _this2.activeRange = a;\n                }\n                a.innerText = range;\n                a.addEventListener(PersonView.CLICK, function (event) {\n                    return controller.setRangeEvent(range, event);\n                });\n                li.appendChild(a);\n                _this2.ranges.appendChild(li);\n            });\n            // return default range\n            return ranges[0];\n        }\n    }, {\n        key: 'setRangeActive',\n        value: function setRangeActive(element) {\n            this.activeRange.classList.remove(PersonView.ACTIVE);\n            this.activeRange = element;\n            this.activeRange.classList.add(PersonView.ACTIVE);\n        }\n    }, {\n        key: 'showPages',\n        value: function showPages(pageCount, controller) {\n            var _this3 = this;\n\n            if (this.pages.children.length > 0) {\n                removeChildren(this.pages);\n            }\n\n            var _loop = function _loop(i) {\n                var li = document.createElement('li'),\n                    a = document.createElement('a');\n                if (i === 0) {\n                    a.classList.add(PersonView.ACTIVE);\n                    _this3.activePage = a;\n                }\n                a.innerText = i + 1;\n                a.addEventListener(PersonView.CLICK, function (event) {\n                    return controller.setPageEvent(i, event);\n                });\n                li.appendChild(a);\n                _this3.pages.appendChild(li);\n            };\n\n            for (var i = 0; i < pageCount; i++) {\n                _loop(i);\n            }\n            // return default page\n            return 0;\n        }\n    }, {\n        key: 'setPageActive',\n        value: function setPageActive(element) {\n            this.activePage.classList.remove(PersonView.ACTIVE);\n            this.activePage = element;\n            this.activePage.classList.add(PersonView.ACTIVE);\n        }\n        // modal view\n\n    }, {\n        key: 'showFullInfo',\n        value: function showFullInfo(person, event) {\n            var over = this.modalOverlay;\n            over.classList.remove(PersonView.HIDDEN);\n            over.addEventListener(PersonView.CLICK, function () {\n                return over.classList.add(PersonView.HIDDEN);\n            });\n            // show modal window\n            var modal = this.modal;\n\n            if (this.modal.children.length > 0) {\n                removeChildren(this.modal);\n            }\n\n            modal.classList.remove(PersonView.HIDDEN);\n            addElement(modal, 'img', { src: person.picture.large, alt: person.name.first + ' ' + person.name.last });\n            var div = addElement(modal, 'div', {});\n            addElement(div, 'p', {}, 'Street: ' + parseAddress(person.location.street));\n            addElement(div, 'p', {}, 'City: ' + sentenceCase(person.location.city));\n            addElement(div, 'p', {}, 'State: ' + sentenceCase(person.location.state));\n            addElement(div, 'p', {}, 'Email: ' + person.email);\n            addElement(div, 'p', {}, 'Phone: ' + person.phone);\n        }\n    }]);\n\n    return PersonView;\n}();\n\nexports.default = PersonView;\n\n//# sourceURL=webpack:///./src/widget/personview.js?");

/***/ }),

/***/ "./src/widget/personwidget.js":
/*!************************************!*\
  !*** ./src/widget/personwidget.js ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n    value: true\n});\n\nvar _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();\n\nvar _personlist = __webpack_require__(/*! ./personlist.js */ \"./src/widget/personlist.js\");\n\nvar _personlist2 = _interopRequireDefault(_personlist);\n\nvar _personview = __webpack_require__(/*! ./personview.js */ \"./src/widget/personview.js\");\n\nvar _personview2 = _interopRequireDefault(_personview);\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\n// config: configuration for URI\n// container: DOM element for widget\n// ranges: array for peginations\nvar PersonWidget = function () {\n    function PersonWidget(config, container, ranges) {\n        var _this = this;\n\n        _classCallCheck(this, PersonWidget);\n\n        this.view = new _personview2.default(container);\n        this.list = new _personlist2.default(config, this.view);\n        this.list.updateData().then(function (result) {\n            _this.list.personList = result;\n            _this.list.sort();\n            _this.setRanges(ranges);\n            _this.list.update();\n            _this.view.sortSelector.addEventListener('change', function (event) {\n                return _this.sort(event);\n            });\n        }).catch(function (error) {\n            _this.list.personList = [];\n            // TODO Show Error\n        });\n    }\n    // update view\n\n\n    _createClass(PersonWidget, [{\n        key: 'update',\n        value: function update() {\n            this.list.update();\n        }\n        // select list sorting\n\n    }, {\n        key: 'sort',\n        value: function sort(event) {\n            switch (event.currentTarget.value) {\n                case 'normal':\n                    this.list.sort();\n                    break;\n                case 'reverse':\n                    this.list.reverse();\n                    break;\n            }\n            this.list.update();\n        }\n    }, {\n        key: 'setRanges',\n        value: function setRanges(arr) {\n            this.list.range = this.view.showRanges(arr, this);\n            this.list.page = this.view.showPages(this.calcPages(), this);\n        }\n    }, {\n        key: 'setRangeEvent',\n        value: function setRangeEvent(range, event) {\n            this.list.range = range;\n            this.view.setRangeActive(event.currentTarget);\n            this.list.page = this.view.showPages(this.calcPages(), this);\n            this.list.update();\n        }\n    }, {\n        key: 'setPageEvent',\n        value: function setPageEvent(page, event) {\n            this.list.page = page;\n            this.view.setPageActive(event.currentTarget);\n            this.list.update();\n        }\n    }, {\n        key: 'calcPages',\n        value: function calcPages() {\n            var personCount = this.list.personList.length,\n                range = this.list.range;\n            var countPage = 0;\n            if (!(personCount % range)) {\n                countPage = personCount / range;\n            } else {\n                countPage = Math.floor(personCount / range) + 1;\n            }\n            return countPage;\n        }\n    }]);\n\n    return PersonWidget;\n}();\n\nexports.default = PersonWidget;\n\n//# sourceURL=webpack:///./src/widget/personwidget.js?");

/***/ })

/******/ });