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

module.exports = {"proto":"https","url":"randomuser.me/api/?","params":{"results":"50","format":"json","nat":"us","gender":"","password":"","inc":"gender,name,location,email,phone,picture"}};

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _personwidget = __webpack_require__(/*! ./widget/personwidget.js */ "./src/widget/personwidget.js");

var _personwidget2 = _interopRequireDefault(_personwidget);

var _config = __webpack_require__(/*! ./config.json */ "./src/config.json");

var _config2 = _interopRequireDefault(_config);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var container = document.querySelector('.person-list-container');
var widget = new _personwidget2.default(_config2.default, container, [10, 15, 20]);

/***/ }),

/***/ "./src/widget/personlist.js":
/*!**********************************!*\
  !*** ./src/widget/personlist.js ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

// Make URI from config for request
function buildUrl(config) {
    var result = config.proto + '://' + config.url;
    for (var key in config.params) {
        result += key + '=' + config.params[key] + '&';
    }
    // return URI without last &
    return result.slice(0, result.length - 1);
}
//

var PersonList = function () {
    function PersonList(config, view) {
        _classCallCheck(this, PersonList);

        this.url = buildUrl(config);
        this.view = view;
        this.personList = [];
    }

    _createClass(PersonList, [{
        key: 'sort',
        value: function sort() {
            this.personList.sort(function (person_a, person_b) {
                var name_a = person_a.name.first + ' ' + person_a.name.last;
                var name_b = person_b.name.first + ' ' + person_b.name.last;
                return name_a.localeCompare(name_b);
            });
        }
    }, {
        key: 'reverse',
        value: function reverse() {
            this.personList.reverse();
        }
    }, {
        key: 'updateData',
        value: function updateData() {
            var _this = this;

            return new Promise(function (resolve, reject) {
                var xhr = new XMLHttpRequest();
                xhr.open('GET', _this.url, true);
                xhr.responseType = 'json';

                xhr.onreadystatechange = function () {
                    if (xhr.readyState !== 4) return;
                    if (xhr.status !== 200) {
                        console.log(xhr.status + ': ' + xhr.statusText);
                    } else {
                        resolve(xhr.response.results);
                    }
                };
                xhr.ontimeout = function () {
                    console.log('Извините, запрос превысил максимальное время');
                    // TODO update view
                    reject('timeout');
                };
                xhr.onerror = function (error) {
                    console.log('Error: ' + error);
                    // TODO update view
                    reject(error);
                };
                xhr.send();
            });
        }
    }, {
        key: 'update',
        value: function update() {
            // Calc count pages
            var start = this.page * this.range,
                end = start + this.range;
            this.view.showList(this.personList.slice(start, end));
        }
    }]);

    return PersonList;
}();

exports.default = PersonList;

/***/ }),

/***/ "./src/widget/personview.js":
/*!**********************************!*\
  !*** ./src/widget/personview.js ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

// string -> String
function sentenceCase(str) {
    return str.slice(0, 1).toUpperCase() + str.slice(1);
}
// convert "4091 lakeshore rd" to "4091 Lakeshore Rd"
function parseAddress(street) {
    var array = street.split(' ');
    var result = '';
    for (var i = 0; i < array.length; i++) {
        result += ' ' + sentenceCase(array[i]);
    }
    return result;
}
// remove all children
function removeChildren(container) {
    var count = container.children.length;

    for (var i = 0; i < count; i++) {
        container.removeChild(container.firstElementChild);
    }
}
// Add DOM Element to container
function addElement(container, element, attr, content) {
    var elm = document.createElement(element);
    for (var key in attr) {
        elm.setAttribute(key, attr[key]);
    }
    if (content) {
        elm.innerText = content;
    }
    container.appendChild(elm);
    return elm;
}

var PersonView = function () {
    _createClass(PersonView, null, [{
        key: 'CLICK',

        // click event
        get: function get() {
            return 'click';
        }
        // active css class

    }, {
        key: 'ACTIVE',
        get: function get() {
            return 'active';
        }
        // hidden css class

    }, {
        key: 'HIDDEN',
        get: function get() {
            return 'hidden';
        }
    }]);

    function PersonView(container) {
        _classCallCheck(this, PersonView);

        this.container = container;
        this.sortSelector = container.querySelector('.sorting');
        this.viewList = container.querySelector('.view-list');
        this.ranges = container.querySelector('.ranges');
        this.pages = container.querySelector('.pages');
        this.modalOverlay = container.querySelector('.modal-overlay');
        this.modal = container.querySelector('.full-info');
    }

    _createClass(PersonView, [{
        key: 'showList',
        value: function showList(personList) {
            var _this = this;

            if (this.viewList.children.length > 0) {
                removeChildren(this.viewList);
            }

            personList.forEach(function (person) {
                var li = document.createElement('li'),
                    img = document.createElement('img'),
                    pName = document.createElement('p');
                img.src = person.picture.thumbnail;
                var _person$name = person.name,
                    title = _person$name.title,
                    first = _person$name.first,
                    last = _person$name.last;

                pName.innerText = sentenceCase(title) + '. ' + sentenceCase(first) + ' ' + sentenceCase(last);
                li.appendChild(img);
                li.appendChild(pName);

                li.addEventListener(PersonView.CLICK, function (event) {
                    return _this.showFullInfo(person, event);
                });

                _this.viewList.appendChild(li);
            });
        }
    }, {
        key: 'showRanges',
        value: function showRanges(ranges, controller) {
            var _this2 = this;

            ranges.forEach(function (range, index) {
                var li = document.createElement('li'),
                    a = document.createElement('a');
                if (!index) {
                    a.classList.add(PersonView.ACTIVE);
                    _this2.activeRange = a;
                }
                a.innerText = range;
                a.addEventListener(PersonView.CLICK, function (event) {
                    return controller.setRangeEvent(range, event);
                });
                li.appendChild(a);
                _this2.ranges.appendChild(li);
            });
            // return default range
            return ranges[0];
        }
    }, {
        key: 'setRangeActive',
        value: function setRangeActive(element) {
            this.activeRange.classList.remove(PersonView.ACTIVE);
            this.activeRange = element;
            this.activeRange.classList.add(PersonView.ACTIVE);
        }
    }, {
        key: 'showPages',
        value: function showPages(pageCount, controller) {
            var _this3 = this;

            if (this.pages.children.length > 0) {
                removeChildren(this.pages);
            }

            var _loop = function _loop(i) {
                var li = document.createElement('li'),
                    a = document.createElement('a');
                if (i === 0) {
                    a.classList.add(PersonView.ACTIVE);
                    _this3.activePage = a;
                }
                a.innerText = i + 1;
                a.addEventListener(PersonView.CLICK, function (event) {
                    return controller.setPageEvent(i, event);
                });
                li.appendChild(a);
                _this3.pages.appendChild(li);
            };

            for (var i = 0; i < pageCount; i++) {
                _loop(i);
            }
            // return default page
            return 0;
        }
    }, {
        key: 'setPageActive',
        value: function setPageActive(element) {
            this.activePage.classList.remove(PersonView.ACTIVE);
            this.activePage = element;
            this.activePage.classList.add(PersonView.ACTIVE);
        }
        // modal view

    }, {
        key: 'showFullInfo',
        value: function showFullInfo(person, event) {
            var over = this.modalOverlay;
            over.classList.remove(PersonView.HIDDEN);
            over.addEventListener(PersonView.CLICK, function () {
                return over.classList.add(PersonView.HIDDEN);
            });
            // show modal window
            var modal = this.modal;

            if (this.modal.children.length > 0) {
                removeChildren(this.modal);
            }

            modal.classList.remove(PersonView.HIDDEN);
            addElement(modal, 'img', { src: person.picture.large, alt: person.name.first + ' ' + person.name.last });
            var div = addElement(modal, 'div', {});
            addElement(div, 'p', {}, 'Street: ' + parseAddress(person.location.street));
            addElement(div, 'p', {}, 'City: ' + sentenceCase(person.location.city));
            addElement(div, 'p', {}, 'State: ' + sentenceCase(person.location.state));
            addElement(div, 'p', {}, 'Email: ' + person.email);
            addElement(div, 'p', {}, 'Phone: ' + person.phone);
        }
    }]);

    return PersonView;
}();

exports.default = PersonView;

/***/ }),

/***/ "./src/widget/personwidget.js":
/*!************************************!*\
  !*** ./src/widget/personwidget.js ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _personlist = __webpack_require__(/*! ./personlist.js */ "./src/widget/personlist.js");

var _personlist2 = _interopRequireDefault(_personlist);

var _personview = __webpack_require__(/*! ./personview.js */ "./src/widget/personview.js");

var _personview2 = _interopRequireDefault(_personview);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

// config: configuration for URI
// container: DOM element for widget
// ranges: array for peginations
var PersonWidget = function () {
    function PersonWidget(config, container, ranges) {
        var _this = this;

        _classCallCheck(this, PersonWidget);

        this.view = new _personview2.default(container);
        this.list = new _personlist2.default(config, this.view);
        this.list.updateData().then(function (result) {
            _this.list.personList = result;
            _this.list.sort();
            _this.setRanges(ranges);
            _this.list.update();
            _this.view.sortSelector.addEventListener('change', function (event) {
                return _this.sort(event);
            });
        }).catch(function (error) {
            _this.list.personList = [];
            // TODO Show Error
        });
    }
    // update view


    _createClass(PersonWidget, [{
        key: 'update',
        value: function update() {
            this.list.update();
        }
        // select list sorting

    }, {
        key: 'sort',
        value: function sort(event) {
            switch (event.currentTarget.value) {
                case 'normal':
                    this.list.sort();
                    break;
                case 'reverse':
                    this.list.reverse();
                    break;
            }
            this.list.update();
        }
    }, {
        key: 'setRanges',
        value: function setRanges(arr) {
            this.list.range = this.view.showRanges(arr, this);
            this.list.page = this.view.showPages(this.calcPages(), this);
        }
    }, {
        key: 'setRangeEvent',
        value: function setRangeEvent(range, event) {
            this.list.range = range;
            this.view.setRangeActive(event.currentTarget);
            this.list.page = this.view.showPages(this.calcPages(), this);
            this.list.update();
        }
    }, {
        key: 'setPageEvent',
        value: function setPageEvent(page, event) {
            this.list.page = page;
            this.view.setPageActive(event.currentTarget);
            this.list.update();
        }
    }, {
        key: 'calcPages',
        value: function calcPages() {
            var personCount = this.list.personList.length,
                range = this.list.range;
            var countPage = 0;
            if (!(personCount % range)) {
                countPage = personCount / range;
            } else {
                countPage = Math.floor(personCount / range) + 1;
            }
            return countPage;
        }
    }]);

    return PersonWidget;
}();

exports.default = PersonWidget;

/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vc3JjL2luZGV4LmpzIiwid2VicGFjazovLy8uL3NyYy93aWRnZXQvcGVyc29ubGlzdC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvd2lkZ2V0L3BlcnNvbnZpZXcuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3dpZGdldC9wZXJzb253aWRnZXQuanMiXSwibmFtZXMiOlsiY29udGFpbmVyIiwiZG9jdW1lbnQiLCJxdWVyeVNlbGVjdG9yIiwid2lkZ2V0IiwiUGVyc29uV2lkZ2V0IiwiY29uZmlnIiwiYnVpbGRVcmwiLCJyZXN1bHQiLCJwcm90byIsInVybCIsImtleSIsInBhcmFtcyIsInNsaWNlIiwibGVuZ3RoIiwiUGVyc29uTGlzdCIsInZpZXciLCJwZXJzb25MaXN0Iiwic29ydCIsInBlcnNvbl9hIiwicGVyc29uX2IiLCJuYW1lX2EiLCJuYW1lIiwiZmlyc3QiLCJsYXN0IiwibmFtZV9iIiwibG9jYWxlQ29tcGFyZSIsInJldmVyc2UiLCJQcm9taXNlIiwicmVzb2x2ZSIsInJlamVjdCIsInhociIsIlhNTEh0dHBSZXF1ZXN0Iiwib3BlbiIsInJlc3BvbnNlVHlwZSIsIm9ucmVhZHlzdGF0ZWNoYW5nZSIsInJlYWR5U3RhdGUiLCJzdGF0dXMiLCJjb25zb2xlIiwibG9nIiwic3RhdHVzVGV4dCIsInJlc3BvbnNlIiwicmVzdWx0cyIsIm9udGltZW91dCIsIm9uZXJyb3IiLCJlcnJvciIsInNlbmQiLCJzdGFydCIsInBhZ2UiLCJyYW5nZSIsImVuZCIsInNob3dMaXN0Iiwic2VudGVuY2VDYXNlIiwic3RyIiwidG9VcHBlckNhc2UiLCJwYXJzZUFkZHJlc3MiLCJzdHJlZXQiLCJhcnJheSIsInNwbGl0IiwiaSIsInJlbW92ZUNoaWxkcmVuIiwiY291bnQiLCJjaGlsZHJlbiIsInJlbW92ZUNoaWxkIiwiZmlyc3RFbGVtZW50Q2hpbGQiLCJhZGRFbGVtZW50IiwiZWxlbWVudCIsImF0dHIiLCJjb250ZW50IiwiZWxtIiwiY3JlYXRlRWxlbWVudCIsInNldEF0dHJpYnV0ZSIsImlubmVyVGV4dCIsImFwcGVuZENoaWxkIiwiUGVyc29uVmlldyIsInNvcnRTZWxlY3RvciIsInZpZXdMaXN0IiwicmFuZ2VzIiwicGFnZXMiLCJtb2RhbE92ZXJsYXkiLCJtb2RhbCIsImZvckVhY2giLCJwZXJzb24iLCJsaSIsImltZyIsInBOYW1lIiwic3JjIiwicGljdHVyZSIsInRodW1ibmFpbCIsInRpdGxlIiwiYWRkRXZlbnRMaXN0ZW5lciIsIkNMSUNLIiwiZXZlbnQiLCJzaG93RnVsbEluZm8iLCJjb250cm9sbGVyIiwiaW5kZXgiLCJhIiwiY2xhc3NMaXN0IiwiYWRkIiwiQUNUSVZFIiwiYWN0aXZlUmFuZ2UiLCJzZXRSYW5nZUV2ZW50IiwicmVtb3ZlIiwicGFnZUNvdW50IiwiYWN0aXZlUGFnZSIsInNldFBhZ2VFdmVudCIsIm92ZXIiLCJISURERU4iLCJsYXJnZSIsImFsdCIsImRpdiIsImxvY2F0aW9uIiwiY2l0eSIsInN0YXRlIiwiZW1haWwiLCJwaG9uZSIsImxpc3QiLCJ1cGRhdGVEYXRhIiwidGhlbiIsInNldFJhbmdlcyIsInVwZGF0ZSIsImNhdGNoIiwiY3VycmVudFRhcmdldCIsInZhbHVlIiwiYXJyIiwic2hvd1JhbmdlcyIsInNob3dQYWdlcyIsImNhbGNQYWdlcyIsInNldFJhbmdlQWN0aXZlIiwic2V0UGFnZUFjdGl2ZSIsInBlcnNvbkNvdW50IiwiY291bnRQYWdlIiwiTWF0aCIsImZsb29yIl0sIm1hcHBpbmdzIjoiO0FBQUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxrREFBMEMsZ0NBQWdDO0FBQzFFO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0Es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QkFBS1IsSUFBTCxDQUFVcEUsSUFBVixHQUFrQixLQUFLaEMsSUFBTCxDQUFVOEcsU0FBVixDQUFvQixLQUFLQyxTQUFMLEVBQXBCLEVBQXNDLElBQXRDLENBQWxCO0FBQ0g7OztzQ0FDYTlFLEssRUFBTzJDLEssRUFBTztBQUN4QixpQkFBS3dCLElBQUwsQ0FBVW5FLEtBQVYsR0FBa0JBLEtBQWxCO0FBQ0EsaUJBQUtqQyxJQUFMLENBQVVnSCxjQUFWLENBQXlCcEMsTUFBTThCLGFBQS9CO0FBQ0EsaUJBQUtOLElBQUwsQ0FBVXBFLElBQVYsR0FBa0IsS0FBS2hDLElBQUwsQ0FBVThHLFNBQVYsQ0FBb0IsS0FBS0MsU0FBTCxFQUFwQixFQUFzQyxJQUF0QyxDQUFsQjtBQUNBLGlCQUFLWCxJQUFMLENBQVVJLE1BQVY7QUFDSDs7O3FDQUNZeEUsSSxFQUFNNEMsSyxFQUFPO0FBQ3RCLGlCQUFLd0IsSUFBTCxDQUFVcEUsSUFBVixHQUFpQkEsSUFBakI7QUFDQSxpQkFBS2hDLElBQUwsQ0FBVWlILGFBQVYsQ0FBd0JyQyxNQUFNOEIsYUFBOUI7QUFDQSxpQkFBS04sSUFBTCxDQUFVSSxNQUFWO0FBQ0g7OztvQ0FDVztBQUNSLGdCQUFNVSxjQUFjLEtBQUtkLElBQUwsQ0FBVW5HLFVBQVYsQ0FBcUJILE1BQXpDO0FBQUEsZ0JBQ01tQyxRQUFjLEtBQUttRSxJQUFMLENBQVVuRSxLQUQ5QjtBQUVBLGdCQUFJa0YsWUFBWSxDQUFoQjtBQUNBLGdCQUFJLEVBQUVELGNBQWNqRixLQUFoQixDQUFKLEVBQTRCO0FBQ3hCa0YsNEJBQVlELGNBQWNqRixLQUExQjtBQUNILGFBRkQsTUFFTztBQUNIa0YsNEJBQVlDLEtBQUtDLEtBQUwsQ0FBWUgsY0FBY2pGLEtBQTFCLElBQW9DLENBQWhEO0FBQ0g7QUFDRCxtQkFBT2tGLFNBQVA7QUFDSDs7Ozs7O2tCQTFEZ0I5SCxZIiwiZmlsZSI6ImluZGV4LmpzIiwic291cmNlc0NvbnRlbnQiOlsiIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSB7fTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pIHtcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcbiBcdFx0fVxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0aTogbW9kdWxlSWQsXG4gXHRcdFx0bDogZmFsc2UsXG4gXHRcdFx0ZXhwb3J0czoge31cbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gZGVmaW5lIGdldHRlciBmdW5jdGlvbiBmb3IgaGFybW9ueSBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSBmdW5jdGlvbihleHBvcnRzLCBuYW1lLCBnZXR0ZXIpIHtcbiBcdFx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBuYW1lKSkge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBuYW1lLCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZ2V0dGVyIH0pO1xuIFx0XHR9XG4gXHR9O1xuXG4gXHQvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSBmdW5jdGlvbihleHBvcnRzKSB7XG4gXHRcdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuIFx0XHR9XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG4gXHR9O1xuXG4gXHQvLyBjcmVhdGUgYSBmYWtlIG5hbWVzcGFjZSBvYmplY3RcbiBcdC8vIG1vZGUgJiAxOiB2YWx1ZSBpcyBhIG1vZHVsZSBpZCwgcmVxdWlyZSBpdFxuIFx0Ly8gbW9kZSAmIDI6IG1lcmdlIGFsbCBwcm9wZXJ0aWVzIG9mIHZhbHVlIGludG8gdGhlIG5zXG4gXHQvLyBtb2RlICYgNDogcmV0dXJuIHZhbHVlIHdoZW4gYWxyZWFkeSBucyBvYmplY3RcbiBcdC8vIG1vZGUgJiA4fDE6IGJlaGF2ZSBsaWtlIHJlcXVpcmVcbiBcdF9fd2VicGFja19yZXF1aXJlX18udCA9IGZ1bmN0aW9uKHZhbHVlLCBtb2RlKSB7XG4gXHRcdGlmKG1vZGUgJiAxKSB2YWx1ZSA9IF9fd2VicGFja19yZXF1aXJlX18odmFsdWUpO1xuIFx0XHRpZihtb2RlICYgOCkgcmV0dXJuIHZhbHVlO1xuIFx0XHRpZigobW9kZSAmIDQpICYmIHR5cGVvZiB2YWx1ZSA9PT0gJ29iamVjdCcgJiYgdmFsdWUgJiYgdmFsdWUuX19lc01vZHVsZSkgcmV0dXJuIHZhbHVlO1xuIFx0XHR2YXIgbnMgPSBPYmplY3QuY3JlYXRlKG51bGwpO1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIobnMpO1xuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkobnMsICdkZWZhdWx0JywgeyBlbnVtZXJhYmxlOiB0cnVlLCB2YWx1ZTogdmFsdWUgfSk7XG4gXHRcdGlmKG1vZGUgJiAyICYmIHR5cGVvZiB2YWx1ZSAhPSAnc3RyaW5nJykgZm9yKHZhciBrZXkgaW4gdmFsdWUpIF9fd2VicGFja19yZXF1aXJlX18uZChucywga2V5LCBmdW5jdGlvbihrZXkpIHsgcmV0dXJuIHZhbHVlW2tleV07IH0uYmluZChudWxsLCBrZXkpKTtcbiBcdFx0cmV0dXJuIG5zO1xuIFx0fTtcblxuIFx0Ly8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubiA9IGZ1bmN0aW9uKG1vZHVsZSkge1xuIFx0XHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cbiBcdFx0XHRmdW5jdGlvbiBnZXREZWZhdWx0KCkgeyByZXR1cm4gbW9kdWxlWydkZWZhdWx0J107IH0gOlxuIFx0XHRcdGZ1bmN0aW9uIGdldE1vZHVsZUV4cG9ydHMoKSB7IHJldHVybiBtb2R1bGU7IH07XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsICdhJywgZ2V0dGVyKTtcbiBcdFx0cmV0dXJuIGdldHRlcjtcbiBcdH07XG5cbiBcdC8vIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbFxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5vID0gZnVuY3Rpb24ob2JqZWN0LCBwcm9wZXJ0eSkgeyByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iamVjdCwgcHJvcGVydHkpOyB9O1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCJcIjtcblxuXG4gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbiBcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKF9fd2VicGFja19yZXF1aXJlX18ucyA9IFwiLi9zcmMvaW5kZXguanNcIik7XG4iLCJpbXBvcnQgUGVyc29uV2lkZ2V0IGZyb20gJy4vd2lkZ2V0L3BlcnNvbndpZGdldC5qcyc7XG5pbXBvcnQgY29uZmlnIGZyb20gJy4vY29uZmlnLmpzb24nXG5cbmNvbnN0IGNvbnRhaW5lciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5wZXJzb24tbGlzdC1jb250YWluZXInKTtcbmNvbnN0IHdpZGdldCA9IG5ldyBQZXJzb25XaWRnZXQoY29uZmlnLCBjb250YWluZXIsIFsxMCwgMTUsIDIwXSk7XG5cbiIsIi8vIE1ha2UgVVJJIGZyb20gY29uZmlnIGZvciByZXF1ZXN0XG5mdW5jdGlvbiBidWlsZFVybChjb25maWcpIHtcbiAgICBsZXQgcmVzdWx0ID0gYCR7Y29uZmlnLnByb3RvfTovLyR7Y29uZmlnLnVybH1gO1xuICAgIGZvcihsZXQga2V5IGluIGNvbmZpZy5wYXJhbXMpIHtcbiAgICAgICAgcmVzdWx0ICs9IGAke2tleX09JHtjb25maWcucGFyYW1zW2tleV19JmA7XG4gICAgfVxuICAgIC8vIHJldHVybiBVUkkgd2l0aG91dCBsYXN0ICZcbiAgICByZXR1cm4gcmVzdWx0LnNsaWNlKDAscmVzdWx0Lmxlbmd0aCAtIDEpO1xufVxuLy9cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFBlcnNvbkxpc3Qge1xuXG4gICAgY29uc3RydWN0b3IoY29uZmlnLCB2aWV3KSB7XG4gICAgICAgIHRoaXMudXJsID0gYnVpbGRVcmwoY29uZmlnKTtcbiAgICAgICAgdGhpcy52aWV3ID0gdmlldztcbiAgICAgICAgdGhpcy5wZXJzb25MaXN0ID0gW107XG4gICAgfVxuICAgIHNvcnQoKSB7XG4gICAgICAgIHRoaXMucGVyc29uTGlzdC5zb3J0KCAocGVyc29uX2EsIHBlcnNvbl9iKSA9PiB7XG4gICAgICAgICAgICBjb25zdCBuYW1lX2EgPSBgJHtwZXJzb25fYS5uYW1lLmZpcnN0fSAke3BlcnNvbl9hLm5hbWUubGFzdH1gO1xuICAgICAgICAgICAgY29uc3QgbmFtZV9iID0gYCR7cGVyc29uX2IubmFtZS5maXJzdH0gJHtwZXJzb25fYi5uYW1lLmxhc3R9YDtcbiAgICAgICAgICAgIHJldHVybiBuYW1lX2EubG9jYWxlQ29tcGFyZShuYW1lX2IpO1xuICAgICAgICB9KTtcbiAgICB9XG4gICAgcmV2ZXJzZSgpIHtcbiAgICAgICAgdGhpcy5wZXJzb25MaXN0LnJldmVyc2UoKTtcbiAgICB9XG4gICAgdXBkYXRlRGF0YSgpIHtcbiAgICAgICAgcmV0dXJuIG5ldyBQcm9taXNlKChyZXNvbHZlLCByZWplY3QpID0+IHtcbiAgICAgICAgICAgIGNvbnN0IHhociA9IG5ldyBYTUxIdHRwUmVxdWVzdCgpO1xuICAgICAgICAgICAgeGhyLm9wZW4oJ0dFVCcsdGhpcy51cmwsIHRydWUpO1xuICAgICAgICAgICAgeGhyLnJlc3BvbnNlVHlwZSA9ICdqc29uJztcblxuICAgICAgICAgICAgeGhyLm9ucmVhZHlzdGF0ZWNoYW5nZSA9ICgpID0+IHtcbiAgICAgICAgICAgICAgICBpZih4aHIucmVhZHlTdGF0ZSAhPT0gNCkgcmV0dXJuO1xuICAgICAgICAgICAgICAgIGlmKHhoci5zdGF0dXMgIT09IDIwMCkge1xuICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhgJHt4aHIuc3RhdHVzfTogJHt4aHIuc3RhdHVzVGV4dH1gKTtcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICByZXNvbHZlKHhoci5yZXNwb25zZS5yZXN1bHRzKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9O1xuICAgICAgICAgICAgeGhyLm9udGltZW91dCA9ICgpID0+IHtcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyggJ9CY0LfQstC40L3QuNGC0LUsINC30LDQv9GA0L7RgSDQv9GA0LXQstGL0YHQuNC7INC80LDQutGB0LjQvNCw0LvRjNC90L7QtSDQstGA0LXQvNGPJyApO1xuICAgICAgICAgICAgICAgIC8vIFRPRE8gdXBkYXRlIHZpZXdcbiAgICAgICAgICAgICAgICByZWplY3QoJ3RpbWVvdXQnKTtcbiAgICAgICAgICAgIH07XG4gICAgICAgICAgICB4aHIub25lcnJvciA9IChlcnJvcikgPT4ge1xuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKGBFcnJvcjogJHtlcnJvcn1gKTtcbiAgICAgICAgICAgICAgICAvLyBUT0RPIHVwZGF0ZSB2aWV3XG4gICAgICAgICAgICAgICAgcmVqZWN0KGVycm9yKTtcbiAgICAgICAgICAgIH07XG4gICAgICAgICAgICB4aHIuc2VuZCgpO1xuICAgICAgICB9KTtcbiAgICB9XG4gICAgdXBkYXRlKCkge1xuICAgICAgICAvLyBDYWxjIGNvdW50IHBhZ2VzXG4gICAgICAgIGNvbnN0IHN0YXJ0ID0gdGhpcy5wYWdlICogdGhpcy5yYW5nZSxcbiAgICAgICAgICAgICAgZW5kICAgPSBzdGFydCArIHRoaXMucmFuZ2U7XG4gICAgICAgIHRoaXMudmlldy5zaG93TGlzdCh0aGlzLnBlcnNvbkxpc3Quc2xpY2Uoc3RhcnQsIGVuZCkpO1xuICAgIH1cbn1cbiIsIi8vIHN0cmluZyAtPiBTdHJpbmdcbmZ1bmN0aW9uIHNlbnRlbmNlQ2FzZShzdHIpIHtcbiAgICByZXR1cm4gc3RyLnNsaWNlKDAsIDEpLnRvVXBwZXJDYXNlKCkgKyBzdHIuc2xpY2UoMSk7XG59XG4vLyBjb252ZXJ0IFwiNDA5MSBsYWtlc2hvcmUgcmRcIiB0byBcIjQwOTEgTGFrZXNob3JlIFJkXCJcbmZ1bmN0aW9uIHBhcnNlQWRkcmVzcyhzdHJlZXQpIHtcbiAgICBjb25zdCBhcnJheSA9IHN0cmVldC5zcGxpdCgnICcpO1xuICAgIGxldCByZXN1bHQgPSAnJztcbiAgICBmb3IobGV0IGkgPSAwOyBpIDwgYXJyYXkubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgcmVzdWx0ICs9IGAgJHtzZW50ZW5jZUNhc2UoYXJyYXlbaV0pfWA7XG4gICAgfVxuICAgIHJldHVybiByZXN1bHQ7XG59XG4vLyByZW1vdmUgYWxsIGNoaWxkcmVuXG5mdW5jdGlvbiByZW1vdmVDaGlsZHJlbihjb250YWluZXIpIHtcbiAgICBjb25zdCBjb3VudCA9IGNvbnRhaW5lci5jaGlsZHJlbi5sZW5ndGg7XG5cbiAgICBmb3IobGV0IGkgPSAwOyBpIDwgY291bnQ7IGkrKykge1xuICAgICAgICBjb250YWluZXIucmVtb3ZlQ2hpbGQoY29udGFpbmVyLmZpcnN0RWxlbWVudENoaWxkKTtcbiAgICB9XG59XG4vLyBBZGQgRE9NIEVsZW1lbnQgdG8gY29udGFpbmVyXG5mdW5jdGlvbiBhZGRFbGVtZW50KGNvbnRhaW5lciwgZWxlbWVudCwgYXR0ciwgY29udGVudCkge1xuICAgIGNvbnN0IGVsbSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoZWxlbWVudCk7XG4gICAgZm9yKGxldCBrZXkgaW4gYXR0cikge1xuICAgICAgICBlbG0uc2V0QXR0cmlidXRlKGtleSwgYXR0cltrZXldKVxuICAgIH1cbiAgICBpZihjb250ZW50KSB7XG4gICAgICAgIGVsbS5pbm5lclRleHQgPSBjb250ZW50O1xuICAgIH1cbiAgICBjb250YWluZXIuYXBwZW5kQ2hpbGQoZWxtKTtcbiAgICByZXR1cm4gZWxtO1xufVxuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBQZXJzb25WaWV3IHtcbiAgICAvLyBjbGljayBldmVudFxuICAgIHN0YXRpYyBnZXQgQ0xJQ0soKSB7XG4gICAgICByZXR1cm4gJ2NsaWNrJztcbiAgICB9XG4gICAgLy8gYWN0aXZlIGNzcyBjbGFzc1xuICAgIHN0YXRpYyBnZXQgQUNUSVZFKCkge1xuICAgICAgcmV0dXJuICdhY3RpdmUnO1xuICAgIH1cbiAgICAvLyBoaWRkZW4gY3NzIGNsYXNzXG4gICAgc3RhdGljIGdldCBISURERU4oKSB7XG4gICAgICByZXR1cm4gJ2hpZGRlbic7XG4gICAgfVxuICAgIGNvbnN0cnVjdG9yKGNvbnRhaW5lcikge1xuICAgICAgICB0aGlzLmNvbnRhaW5lciAgICAgPSBjb250YWluZXI7XG4gICAgICAgIHRoaXMuc29ydFNlbGVjdG9yICA9IGNvbnRhaW5lci5xdWVyeVNlbGVjdG9yKCcuc29ydGluZycpO1xuICAgICAgICB0aGlzLnZpZXdMaXN0ICAgICAgPSBjb250YWluZXIucXVlcnlTZWxlY3RvcignLnZpZXctbGlzdCcpO1xuICAgICAgICB0aGlzLnJhbmdlcyAgICAgICAgPSBjb250YWluZXIucXVlcnlTZWxlY3RvcignLnJhbmdlcycpO1xuICAgICAgICB0aGlzLnBhZ2VzICAgICAgICAgPSBjb250YWluZXIucXVlcnlTZWxlY3RvcignLnBhZ2VzJyk7XG4gICAgICAgIHRoaXMubW9kYWxPdmVybGF5ICA9IGNvbnRhaW5lci5xdWVyeVNlbGVjdG9yKCcubW9kYWwtb3ZlcmxheScpO1xuICAgICAgICB0aGlzLm1vZGFsICAgICAgICAgPSBjb250YWluZXIucXVlcnlTZWxlY3RvcignLmZ1bGwtaW5mbycpO1xuICAgIH1cbiAgICBzaG93TGlzdChwZXJzb25MaXN0KSB7XG5cbiAgICAgICAgaWYodGhpcy52aWV3TGlzdC5jaGlsZHJlbi5sZW5ndGggPiAwKSB7XG4gICAgICAgICAgICByZW1vdmVDaGlsZHJlbih0aGlzLnZpZXdMaXN0KTtcbiAgICAgICAgfVxuXG4gICAgICAgIHBlcnNvbkxpc3QuZm9yRWFjaCgocGVyc29uKSA9PiB7XG4gICAgICAgICAgICBjb25zdCBsaSAgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdsaScpLFxuICAgICAgICAgICAgICAgICAgaW1nID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW1nJyksXG4gICAgICAgICAgICAgICAgICBwTmFtZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKTtcbiAgICAgICAgICAgIGltZy5zcmMgPSBwZXJzb24ucGljdHVyZS50aHVtYm5haWw7XG4gICAgICAgICAgICBjb25zdCB7IHRpdGxlLCBmaXJzdCwgbGFzdCB9ID0gcGVyc29uLm5hbWU7XG4gICAgICAgICAgICBwTmFtZS5pbm5lclRleHQgPSBgJHtzZW50ZW5jZUNhc2UodGl0bGUpfS4gJHtzZW50ZW5jZUNhc2UoZmlyc3QpfSAke3NlbnRlbmNlQ2FzZShsYXN0KX1gO1xuICAgICAgICAgICAgbGkuYXBwZW5kQ2hpbGQoaW1nKTtcbiAgICAgICAgICAgIGxpLmFwcGVuZENoaWxkKHBOYW1lKTtcblxuICAgICAgICAgICAgbGkuYWRkRXZlbnRMaXN0ZW5lcihQZXJzb25WaWV3LkNMSUNLLChldmVudCkgPT4gdGhpcy5zaG93RnVsbEluZm8ocGVyc29uLGV2ZW50KSk7XG5cbiAgICAgICAgICAgIHRoaXMudmlld0xpc3QuYXBwZW5kQ2hpbGQobGkpO1xuICAgICAgICB9KTtcbiAgICB9XG4gICAgc2hvd1JhbmdlcyhyYW5nZXMsIGNvbnRyb2xsZXIpIHtcbiAgICAgICAgcmFuZ2VzLmZvckVhY2goIChyYW5nZSwgaW5kZXgpID0+IHtcbiAgICAgICAgICAgIGNvbnN0IGxpID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnbGknKSxcbiAgICAgICAgICAgICAgICAgIGEgID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYScpO1xuICAgICAgICAgICAgaWYoIWluZGV4KSB7XG4gICAgICAgICAgICAgICAgYS5jbGFzc0xpc3QuYWRkKFBlcnNvblZpZXcuQUNUSVZFKTtcbiAgICAgICAgICAgICAgICB0aGlzLmFjdGl2ZVJhbmdlID0gYTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGEuaW5uZXJUZXh0ID0gcmFuZ2U7XG4gICAgICAgICAgICBhLmFkZEV2ZW50TGlzdGVuZXIoUGVyc29uVmlldy5DTElDSywgZXZlbnQgPT4gY29udHJvbGxlci5zZXRSYW5nZUV2ZW50KHJhbmdlLGV2ZW50KSk7XG4gICAgICAgICAgICBsaS5hcHBlbmRDaGlsZChhKTtcbiAgICAgICAgICAgIHRoaXMucmFuZ2VzLmFwcGVuZENoaWxkKGxpKTtcbiAgICAgICAgfSk7XG4gICAgICAgIC8vIHJldHVybiBkZWZhdWx0IHJhbmdlXG4gICAgICAgIHJldHVybiByYW5nZXNbMF07XG4gICAgfVxuICAgIHNldFJhbmdlQWN0aXZlKGVsZW1lbnQpIHtcbiAgICAgICAgdGhpcy5hY3RpdmVSYW5nZS5jbGFzc0xpc3QucmVtb3ZlKFBlcnNvblZpZXcuQUNUSVZFKTtcbiAgICAgICAgdGhpcy5hY3RpdmVSYW5nZSA9IGVsZW1lbnQ7XG4gICAgICAgIHRoaXMuYWN0aXZlUmFuZ2UuY2xhc3NMaXN0LmFkZChQZXJzb25WaWV3LkFDVElWRSk7XG4gICAgfVxuICAgIHNob3dQYWdlcyhwYWdlQ291bnQsIGNvbnRyb2xsZXIpIHtcblxuICAgICAgICBpZih0aGlzLnBhZ2VzLmNoaWxkcmVuLmxlbmd0aCA+IDApIHtcbiAgICAgICAgICAgIHJlbW92ZUNoaWxkcmVuKHRoaXMucGFnZXMpO1xuICAgICAgICB9XG5cbiAgICAgICAgZm9yKGxldCBpID0gMDsgaSA8IHBhZ2VDb3VudDsgaSsrKSB7XG4gICAgICAgICAgICBjb25zdCBsaSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2xpJyksXG4gICAgICAgICAgICAgICAgICBhICA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2EnKTtcbiAgICAgICAgICAgIGlmKCBpID09PSAwICkge1xuICAgICAgICAgICAgICAgIGEuY2xhc3NMaXN0LmFkZChQZXJzb25WaWV3LkFDVElWRSk7XG4gICAgICAgICAgICAgICAgdGhpcy5hY3RpdmVQYWdlID0gYTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGEuaW5uZXJUZXh0ID0gaSArIDE7XG4gICAgICAgICAgICBhLmFkZEV2ZW50TGlzdGVuZXIoUGVyc29uVmlldy5DTElDSywgZXZlbnQgPT4gY29udHJvbGxlci5zZXRQYWdlRXZlbnQoaSwgZXZlbnQpKTtcbiAgICAgICAgICAgIGxpLmFwcGVuZENoaWxkKGEpO1xuICAgICAgICAgICAgdGhpcy5wYWdlcy5hcHBlbmRDaGlsZChsaSk7XG4gICAgICAgIH1cbiAgICAgICAgLy8gcmV0dXJuIGRlZmF1bHQgcGFnZVxuICAgICAgICByZXR1cm4gMDtcbiAgICB9XG4gICAgc2V0UGFnZUFjdGl2ZShlbGVtZW50KSB7XG4gICAgICAgIHRoaXMuYWN0aXZlUGFnZS5jbGFzc0xpc3QucmVtb3ZlKFBlcnNvblZpZXcuQUNUSVZFKTtcbiAgICAgICAgdGhpcy5hY3RpdmVQYWdlID0gZWxlbWVudDtcbiAgICAgICAgdGhpcy5hY3RpdmVQYWdlLmNsYXNzTGlzdC5hZGQoUGVyc29uVmlldy5BQ1RJVkUpO1xuICAgIH1cbiAgICAvLyBtb2RhbCB2aWV3XG4gICAgc2hvd0Z1bGxJbmZvKHBlcnNvbiwgZXZlbnQpIHtcbiAgICAgICAgY29uc3Qgb3ZlciA9IHRoaXMubW9kYWxPdmVybGF5O1xuICAgICAgICBvdmVyLmNsYXNzTGlzdC5yZW1vdmUoUGVyc29uVmlldy5ISURERU4pO1xuICAgICAgICBvdmVyLmFkZEV2ZW50TGlzdGVuZXIoUGVyc29uVmlldy5DTElDSywoKSA9PiBvdmVyLmNsYXNzTGlzdC5hZGQoUGVyc29uVmlldy5ISURERU4pKTtcbiAgICAgICAgLy8gc2hvdyBtb2RhbCB3aW5kb3dcbiAgICAgICAgY29uc3QgbW9kYWwgPSB0aGlzLm1vZGFsO1xuXG4gICAgICAgIGlmKHRoaXMubW9kYWwuY2hpbGRyZW4ubGVuZ3RoID4gMCkge1xuICAgICAgICAgICAgcmVtb3ZlQ2hpbGRyZW4odGhpcy5tb2RhbCk7XG4gICAgICAgIH1cblxuICAgICAgICBtb2RhbC5jbGFzc0xpc3QucmVtb3ZlKFBlcnNvblZpZXcuSElEREVOKTtcbiAgICAgICAgYWRkRWxlbWVudChtb2RhbCwgJ2ltZycsIHsgc3JjOiBwZXJzb24ucGljdHVyZS5sYXJnZSwgYWx0OiBgJHtwZXJzb24ubmFtZS5maXJzdH0gJHtwZXJzb24ubmFtZS5sYXN0fWAgfSk7XG4gICAgICAgIGNvbnN0IGRpdiA9IGFkZEVsZW1lbnQobW9kYWwsICdkaXYnLCB7fSk7XG4gICAgICAgIGFkZEVsZW1lbnQoZGl2LCAncCcgICwge30sIGBTdHJlZXQ6ICR7cGFyc2VBZGRyZXNzKHBlcnNvbi5sb2NhdGlvbi5zdHJlZXQpfWApO1xuICAgICAgICBhZGRFbGVtZW50KGRpdiwgJ3AnICAsIHt9LCBgQ2l0eTogJHtzZW50ZW5jZUNhc2UocGVyc29uLmxvY2F0aW9uLmNpdHkpfWApO1xuICAgICAgICBhZGRFbGVtZW50KGRpdiwgJ3AnICAsIHt9LCBgU3RhdGU6ICR7c2VudGVuY2VDYXNlKHBlcnNvbi5sb2NhdGlvbi5zdGF0ZSl9YCk7XG4gICAgICAgIGFkZEVsZW1lbnQoZGl2LCAncCcgICwge30sIGBFbWFpbDogJHtwZXJzb24uZW1haWx9YCk7XG4gICAgICAgIGFkZEVsZW1lbnQoZGl2LCAncCcgICwge30sIGBQaG9uZTogJHtwZXJzb24ucGhvbmV9YCk7XG5cbiAgICB9XG59XG4iLCJpbXBvcnQgUGVyc29uTGlzdCBmcm9tICcuL3BlcnNvbmxpc3QuanMnO1xuaW1wb3J0IFBlcnNvblZpZXcgZnJvbSAnLi9wZXJzb252aWV3LmpzJztcblxuLy8gY29uZmlnOiBjb25maWd1cmF0aW9uIGZvciBVUklcbi8vIGNvbnRhaW5lcjogRE9NIGVsZW1lbnQgZm9yIHdpZGdldFxuLy8gcmFuZ2VzOiBhcnJheSBmb3IgcGVnaW5hdGlvbnNcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFBlcnNvbldpZGdldHtcbiAgICBjb25zdHJ1Y3Rvcihjb25maWcsIGNvbnRhaW5lciwgcmFuZ2VzKSB7XG4gICAgICAgIHRoaXMudmlldyA9IG5ldyBQZXJzb25WaWV3KGNvbnRhaW5lcik7XG4gICAgICAgIHRoaXMubGlzdCA9IG5ldyBQZXJzb25MaXN0KGNvbmZpZywgdGhpcy52aWV3KTtcbiAgICAgICAgdGhpcy5saXN0LnVwZGF0ZURhdGEoKVxuICAgICAgICAgICAgLnRoZW4oIHJlc3VsdCA9PiB7XG4gICAgICAgICAgICAgICAgdGhpcy5saXN0LnBlcnNvbkxpc3QgPSByZXN1bHQ7XG4gICAgICAgICAgICAgICAgdGhpcy5saXN0LnNvcnQoKTtcbiAgICAgICAgICAgICAgICB0aGlzLnNldFJhbmdlcyhyYW5nZXMpO1xuICAgICAgICAgICAgICAgIHRoaXMubGlzdC51cGRhdGUoKTtcbiAgICAgICAgICAgICAgICB0aGlzLnZpZXcuc29ydFNlbGVjdG9yLmFkZEV2ZW50TGlzdGVuZXIoJ2NoYW5nZScsKGV2ZW50KSA9PiB0aGlzLnNvcnQoZXZlbnQpKTtcbiAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAuY2F0Y2goIGVycm9yID0+IHtcbiAgICAgICAgICAgICAgICB0aGlzLmxpc3QucGVyc29uTGlzdCA9IFtdO1xuICAgICAgICAgICAgICAgIC8vIFRPRE8gU2hvdyBFcnJvclxuICAgICAgICAgICAgfSk7XG4gICAgfVxuICAgIC8vIHVwZGF0ZSB2aWV3XG4gICAgdXBkYXRlKCkge1xuICAgICAgICB0aGlzLmxpc3QudXBkYXRlKCk7XG4gICAgfVxuICAgIC8vIHNlbGVjdCBsaXN0IHNvcnRpbmdcbiAgICBzb3J0KGV2ZW50KSB7XG4gICAgICAgIHN3aXRjaCggZXZlbnQuY3VycmVudFRhcmdldC52YWx1ZSApIHtcbiAgICAgICAgICAgIGNhc2UgJ25vcm1hbCcgOlxuICAgICAgICAgICAgICAgIHRoaXMubGlzdC5zb3J0KCk7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICBjYXNlICdyZXZlcnNlJyA6XG4gICAgICAgICAgICAgICAgdGhpcy5saXN0LnJldmVyc2UoKTtcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgfVxuICAgICAgICB0aGlzLmxpc3QudXBkYXRlKClcbiAgICB9XG4gICAgc2V0UmFuZ2VzKGFycikge1xuICAgICAgICB0aGlzLmxpc3QucmFuZ2UgPSB0aGlzLnZpZXcuc2hvd1JhbmdlcyhhcnIsIHRoaXMpO1xuICAgICAgICB0aGlzLmxpc3QucGFnZSAgPSB0aGlzLnZpZXcuc2hvd1BhZ2VzKHRoaXMuY2FsY1BhZ2VzKCksIHRoaXMpO1xuICAgIH1cbiAgICBzZXRSYW5nZUV2ZW50KHJhbmdlLCBldmVudCkge1xuICAgICAgICB0aGlzLmxpc3QucmFuZ2UgPSByYW5nZTtcbiAgICAgICAgdGhpcy52aWV3LnNldFJhbmdlQWN0aXZlKGV2ZW50LmN1cnJlbnRUYXJnZXQpO1xuICAgICAgICB0aGlzLmxpc3QucGFnZSAgPSB0aGlzLnZpZXcuc2hvd1BhZ2VzKHRoaXMuY2FsY1BhZ2VzKCksIHRoaXMpO1xuICAgICAgICB0aGlzLmxpc3QudXBkYXRlKCk7XG4gICAgfVxuICAgIHNldFBhZ2VFdmVudChwYWdlLCBldmVudCkge1xuICAgICAgICB0aGlzLmxpc3QucGFnZSA9IHBhZ2U7XG4gICAgICAgIHRoaXMudmlldy5zZXRQYWdlQWN0aXZlKGV2ZW50LmN1cnJlbnRUYXJnZXQpO1xuICAgICAgICB0aGlzLmxpc3QudXBkYXRlKCk7XG4gICAgfVxuICAgIGNhbGNQYWdlcygpIHtcbiAgICAgICAgY29uc3QgcGVyc29uQ291bnQgPSB0aGlzLmxpc3QucGVyc29uTGlzdC5sZW5ndGgsXG4gICAgICAgICAgICAgIHJhbmdlICAgICAgID0gdGhpcy5saXN0LnJhbmdlO1xuICAgICAgICBsZXQgY291bnRQYWdlID0gMDtcbiAgICAgICAgaWYoICEocGVyc29uQ291bnQgJSByYW5nZSkgKXtcbiAgICAgICAgICAgIGNvdW50UGFnZSA9IHBlcnNvbkNvdW50IC8gcmFuZ2U7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBjb3VudFBhZ2UgPSBNYXRoLmZsb29yKCBwZXJzb25Db3VudCAvIHJhbmdlICkgKyAxO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiBjb3VudFBhZ2U7XG4gICAgfVxufVxuIl0sInNvdXJjZVJvb3QiOiIifQ==