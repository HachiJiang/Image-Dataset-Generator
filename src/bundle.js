/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;
/******/
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
/******/ 	// identity function for calling harmony imports with the correct context
/******/ 	__webpack_require__.i = function(value) { return value; };
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
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
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 183);
/******/ })
/************************************************************************/
/******/ ({

/***/ 14:
/***/ (function(module, exports) {

throw new Error("Module build failed: Error: ENOENT: no such file or directory, open '/Users/jianghong/GitHub/Image-Dataset-Generator/node_modules/react/react.js'\n    at Error (native)");

/***/ }),

/***/ 167:
/***/ (function(module, exports, __webpack_require__) {

/* REACT HOT LOADER */ if (false) { (function () { var ReactHotAPI = require("/Users/jianghong/GitHub/Image-Dataset-Generator/node_modules/react-hot-api/modules/index.js"), RootInstanceProvider = require("/Users/jianghong/GitHub/Image-Dataset-Generator/node_modules/react-hot-loader/RootInstanceProvider.js"), ReactMount = require("react-dom/lib/ReactMount"), React = require("react"); module.makeHot = module.hot.data ? module.hot.data.makeHot : ReactHotAPI(function () { return RootInstanceProvider.getRootInstances(ReactMount); }, React); })(); } try { (function () {

'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(14);

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var AddLocationForm = function (_Component) {
    _inherits(AddLocationForm, _Component);

    function AddLocationForm() {
        var _ref;

        var _temp, _this, _ret;

        _classCallCheck(this, AddLocationForm);

        for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
        }

        return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = AddLocationForm.__proto__ || Object.getPrototypeOf(AddLocationForm)).call.apply(_ref, [this].concat(args))), _this), _this.state = { name: '' }, _temp), _possibleConstructorReturn(_this, _ret);
    }

    _createClass(AddLocationForm, [{
        key: 'onNameChange',
        value: function onNameChange(e) {
            var name = e.target.value;
            this.setState({ name: name });
        }
    }, {
        key: 'addLocation',
        value: function addLocation(e) {
            if (e) e.preventDefault();
            this.props.addLocation(this.state.name);
            this.setState({ name: '' });
        }
    }, {
        key: 'componentDidMount',
        value: function componentDidMount() {
            this.nameInput.focus();
        }
    }, {
        key: 'render',
        value: function render() {
            var _this2 = this;

            var _props$pos = this.props.pos,
                x = _props$pos.x,
                y = _props$pos.y;

            var style = {
                left: x + 'px',
                top: y + 'px'
            };
            return _react2.default.createElement(
                'div',
                { className: 'add-location-form', style: style },
                _react2.default.createElement(
                    'form',
                    { onSubmit: this.addLocation.bind(this) },
                    _react2.default.createElement('input', { type: 'text',
                        value: this.state.name,
                        onChange: this.onNameChange.bind(this),
                        placeholder: 'Location Name',
                        ref: function ref(input) {
                            _this2.nameInput = input;
                        }
                    }),
                    _react2.default.createElement('input', { type: 'submit', value: 'Add' })
                )
            );
        }
    }]);

    return AddLocationForm;
}(_react.Component);

AddLocationForm.propTypes = {
    pos: _react.PropTypes.shape({
        x: _react.PropTypes.number.isRequired,
        y: _react.PropTypes.number.isRequired
    }).isRequired,
    addLocation: _react.PropTypes.func.isRequired
};
exports.default = AddLocationForm;

/* REACT HOT LOADER */ }).call(this); } finally { if (false) { (function () { var foundReactClasses = module.hot.data && module.hot.data.foundReactClasses || false; if (module.exports && module.makeHot) { var makeExportsHot = require("/Users/jianghong/GitHub/Image-Dataset-Generator/node_modules/react-hot-loader/makeExportsHot.js"); if (makeExportsHot(module, require("react"))) { foundReactClasses = true; } var shouldAcceptModule = true && foundReactClasses; if (shouldAcceptModule) { module.hot.accept(function (err) { if (err) { console.error("Cannot apply hot update to " + "AddLocationForm.js" + ": " + err.message); } }); } } module.hot.dispose(function (data) { data.makeHot = module.makeHot; data.foundReactClasses = foundReactClasses; }); })(); } }

/***/ }),

/***/ 168:
/***/ (function(module, exports, __webpack_require__) {

/* REACT HOT LOADER */ if (false) { (function () { var ReactHotAPI = require("/Users/jianghong/GitHub/Image-Dataset-Generator/node_modules/react-hot-api/modules/index.js"), RootInstanceProvider = require("/Users/jianghong/GitHub/Image-Dataset-Generator/node_modules/react-hot-loader/RootInstanceProvider.js"), ReactMount = require("react-dom/lib/ReactMount"), React = require("react"); module.makeHot = module.hot.data ? module.hot.data.makeHot : ReactHotAPI(function () { return RootInstanceProvider.getRootInstances(ReactMount); }, React); })(); } try { (function () {

'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _react = __webpack_require__(14);

var _react2 = _interopRequireDefault(_react);

var _Location = __webpack_require__(170);

var _Location2 = _interopRequireDefault(_Location);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var HEADERS = ['Location', 'X', 'Y']; // @TODO: display header

var DatasetViewer = function DatasetViewer(props) {
    var locations = props.locations;

    return _react2.default.createElement(
        'div',
        { className: 'dataset-container' },
        _react2.default.createElement(
            'div',
            { className: 'dataset-table' },
            locations.length < 1 ? _react2.default.createElement(
                'div',
                null,
                'No locations added.'
            ) : locations.map(function (location, index) {
                return _react2.default.createElement(_Location2.default, {
                    key: location.name,
                    index: index,
                    name: location.name,
                    x: location.x,
                    y: location.y,
                    removeLocation: function removeLocation(index) {
                        return props.removeLocation(index);
                    }
                });
            })
        ),
        _react2.default.createElement(
            'button',
            { className: 'savtBtn', onClick: props.saveDataset },
            'Export Dataset'
        )
    );
};

DatasetViewer.propTypes = {
    locations: _react.PropTypes.array.isRequired,
    saveDataset: _react.PropTypes.func.isRequired,
    removeLocation: _react.PropTypes.func.isRequired
};

exports.default = DatasetViewer;

/* REACT HOT LOADER */ }).call(this); } finally { if (false) { (function () { var foundReactClasses = module.hot.data && module.hot.data.foundReactClasses || false; if (module.exports && module.makeHot) { var makeExportsHot = require("/Users/jianghong/GitHub/Image-Dataset-Generator/node_modules/react-hot-loader/makeExportsHot.js"); if (makeExportsHot(module, require("react"))) { foundReactClasses = true; } var shouldAcceptModule = true && foundReactClasses; if (shouldAcceptModule) { module.hot.accept(function (err) { if (err) { console.error("Cannot apply hot update to " + "DatasetViewer.js" + ": " + err.message); } }); } } module.hot.dispose(function (data) { data.makeHot = module.makeHot; data.foundReactClasses = foundReactClasses; }); })(); } }

/***/ }),

/***/ 169:
/***/ (function(module, exports, __webpack_require__) {

/* REACT HOT LOADER */ if (false) { (function () { var ReactHotAPI = require("/Users/jianghong/GitHub/Image-Dataset-Generator/node_modules/react-hot-api/modules/index.js"), RootInstanceProvider = require("/Users/jianghong/GitHub/Image-Dataset-Generator/node_modules/react-hot-loader/RootInstanceProvider.js"), ReactMount = require("react-dom/lib/ReactMount"), React = require("react"); module.makeHot = module.hot.data ? module.hot.data.makeHot : ReactHotAPI(function () { return RootInstanceProvider.getRootInstances(ReactMount); }, React); })(); } try { (function () {

'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(14);

var _react2 = _interopRequireDefault(_react);

var _MarkerLayer = __webpack_require__(171);

var _MarkerLayer2 = _interopRequireDefault(_MarkerLayer);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var ImageViewer = function (_Component) {
    _inherits(ImageViewer, _Component);

    function ImageViewer() {
        _classCallCheck(this, ImageViewer);

        return _possibleConstructorReturn(this, (ImageViewer.__proto__ || Object.getPrototypeOf(ImageViewer)).apply(this, arguments));
    }

    _createClass(ImageViewer, [{
        key: '_onClick',
        value: function _onClick(e, callback) {
            e.preventDefault();

            var img = this.refs.imgDom;

            var _img$getBoundingClien = img.getBoundingClientRect(),
                left = _img$getBoundingClien.left,
                top = _img$getBoundingClien.top;

            var x = e.clientX - left;
            var y = e.clientY - top;

            callback({
                screenX: e.clientX, // refer to window top left corner
                screenY: e.clientY,
                x: parseInt(x * img.naturalWidth / img.width),
                y: parseInt(y * img.naturalHeight / img.height)
            });
        }
    }, {
        key: 'render',
        value: function render() {
            var _this2 = this;

            var _props = this.props,
                url = _props.url,
                onDropHandler = _props.onDropHandler,
                onClickHandler = _props.onClickHandler,
                markers = _props.markers,
                tipContent = _props.tipContent;

            var imgDom = this.refs.imgDom;
            var imgRect = imgDom && imgDom.getBoundingClientRect();

            return _react2.default.createElement(
                'div',
                { className: 'image-viewer',
                    onDrop: onDropHandler },
                _react2.default.createElement(
                    'div',
                    { className: 'image-container' },
                    _react2.default.createElement('img', { src: url,
                        alt: 'Drag image here!',
                        onClick: url && function (e) {
                            return _this2._onClick(e, onClickHandler);
                        },
                        ref: 'imgDom'
                    })
                ),
                markers && imgRect && _react2.default.createElement(_MarkerLayer2.default, { markers: markers,
                    onClick: url && function (e) {
                        return _this2._onClick(e, onClickHandler);
                    },
                    styles: imgRect
                }),
                _react2.default.createElement(
                    'div',
                    { className: 'tips' },
                    tipContent
                )
            );
        }
    }]);

    return ImageViewer;
}(_react.Component);

ImageViewer.propTypes = {
    url: _react.PropTypes.string.isRequired,
    tipContent: _react.PropTypes.string,
    onDropHandler: _react.PropTypes.func.isRequired,
    onClickHandler: _react.PropTypes.func.isRequired,
    markers: _react.PropTypes.array
};
exports.default = ImageViewer;

/* REACT HOT LOADER */ }).call(this); } finally { if (false) { (function () { var foundReactClasses = module.hot.data && module.hot.data.foundReactClasses || false; if (module.exports && module.makeHot) { var makeExportsHot = require("/Users/jianghong/GitHub/Image-Dataset-Generator/node_modules/react-hot-loader/makeExportsHot.js"); if (makeExportsHot(module, require("react"))) { foundReactClasses = true; } var shouldAcceptModule = true && foundReactClasses; if (shouldAcceptModule) { module.hot.accept(function (err) { if (err) { console.error("Cannot apply hot update to " + "ImageViewer.js" + ": " + err.message); } }); } } module.hot.dispose(function (data) { data.makeHot = module.makeHot; data.foundReactClasses = foundReactClasses; }); })(); } }

/***/ }),

/***/ 170:
/***/ (function(module, exports, __webpack_require__) {

/* REACT HOT LOADER */ if (false) { (function () { var ReactHotAPI = require("/Users/jianghong/GitHub/Image-Dataset-Generator/node_modules/react-hot-api/modules/index.js"), RootInstanceProvider = require("/Users/jianghong/GitHub/Image-Dataset-Generator/node_modules/react-hot-loader/RootInstanceProvider.js"), ReactMount = require("react-dom/lib/ReactMount"), React = require("react"); module.makeHot = module.hot.data ? module.hot.data.makeHot : ReactHotAPI(function () { return RootInstanceProvider.getRootInstances(ReactMount); }, React); })(); } try { (function () {

"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _react = __webpack_require__(14);

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Location = function Location(props) {
    return _react2.default.createElement(
        "div",
        { className: "location" },
        _react2.default.createElement(
            "div",
            { className: "location-info" },
            _react2.default.createElement(
                "a",
                { className: "remove-location",
                    onClick: function onClick() {
                        return props.removeLocation(props.index);
                    } },
                "\u2716"
            ),
            props.name
        ),
        _react2.default.createElement(
            "div",
            { className: "location-info location-x" },
            props.x
        ),
        _react2.default.createElement(
            "div",
            { className: "location-info location-y" },
            props.y
        )
    );
};

Location.propTypes = {
    name: _react.PropTypes.string.isRequired,
    x: _react.PropTypes.number.isRequired,
    y: _react.PropTypes.number.isRequired
};

exports.default = Location;

/* REACT HOT LOADER */ }).call(this); } finally { if (false) { (function () { var foundReactClasses = module.hot.data && module.hot.data.foundReactClasses || false; if (module.exports && module.makeHot) { var makeExportsHot = require("/Users/jianghong/GitHub/Image-Dataset-Generator/node_modules/react-hot-loader/makeExportsHot.js"); if (makeExportsHot(module, require("react"))) { foundReactClasses = true; } var shouldAcceptModule = true && foundReactClasses; if (shouldAcceptModule) { module.hot.accept(function (err) { if (err) { console.error("Cannot apply hot update to " + "Location.js" + ": " + err.message); } }); } } module.hot.dispose(function (data) { data.makeHot = module.makeHot; data.foundReactClasses = foundReactClasses; }); })(); } }

/***/ }),

/***/ 171:
/***/ (function(module, exports, __webpack_require__) {

/* REACT HOT LOADER */ if (false) { (function () { var ReactHotAPI = require("/Users/jianghong/GitHub/Image-Dataset-Generator/node_modules/react-hot-api/modules/index.js"), RootInstanceProvider = require("/Users/jianghong/GitHub/Image-Dataset-Generator/node_modules/react-hot-loader/RootInstanceProvider.js"), ReactMount = require("react-dom/lib/ReactMount"), React = require("react"); module.makeHot = module.hot.data ? module.hot.data.makeHot : ReactHotAPI(function () { return RootInstanceProvider.getRootInstances(ReactMount); }, React); })(); } try { (function () {

"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _react = __webpack_require__(14);

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var RADIUS = 7;

var MarkerLayer = function MarkerLayer(props) {
    return _react2.default.createElement(
        "svg",
        { className: "marker-layer",
            style: {
                left: props.styles.left + "px",
                top: props.styles.top + "px",
                width: props.styles.width + "px",
                height: props.styles.height + "px"
            },
            onClick: props.onClick },
        props.markers.map(function (marker) {
            return _react2.default.createElement(
                "g",
                { className: "marker", key: marker.name },
                _react2.default.createElement("circle", { className: "marker-circle",
                    r: RADIUS,
                    cx: marker.screenX - props.styles.left,
                    cy: marker.screenY - props.styles.top
                }),
                _react2.default.createElement(
                    "span",
                    { className: "marker-label" },
                    marker.name
                )
            );
        })
    );
};

MarkerLayer.propTypes = {
    markers: _react.PropTypes.arrayOf(_react.PropTypes.shape({
        screenX: _react.PropTypes.number.isRequired,
        screenY: _react.PropTypes.number.isRequired
    })).isRequired,
    styles: _react.PropTypes.shape({
        left: _react.PropTypes.number.isRequired,
        top: _react.PropTypes.number.isRequired,
        width: _react.PropTypes.number.isRequired,
        height: _react.PropTypes.number.isRequired
    }).isRequired,
    onClick: _react.PropTypes.func.isRequired
};

exports.default = MarkerLayer;

/* REACT HOT LOADER */ }).call(this); } finally { if (false) { (function () { var foundReactClasses = module.hot.data && module.hot.data.foundReactClasses || false; if (module.exports && module.makeHot) { var makeExportsHot = require("/Users/jianghong/GitHub/Image-Dataset-Generator/node_modules/react-hot-loader/makeExportsHot.js"); if (makeExportsHot(module, require("react"))) { foundReactClasses = true; } var shouldAcceptModule = true && foundReactClasses; if (shouldAcceptModule) { module.hot.accept(function (err) { if (err) { console.error("Cannot apply hot update to " + "MarkerLayer.js" + ": " + err.message); } }); } } module.hot.dispose(function (data) { data.makeHot = module.makeHot; data.foundReactClasses = foundReactClasses; }); })(); } }

/***/ }),

/***/ 183:
/***/ (function(module, exports, __webpack_require__) {

/* REACT HOT LOADER */ if (false) { (function () { var ReactHotAPI = require("/Users/jianghong/GitHub/Image-Dataset-Generator/node_modules/react-hot-api/modules/index.js"), RootInstanceProvider = require("/Users/jianghong/GitHub/Image-Dataset-Generator/node_modules/react-hot-loader/RootInstanceProvider.js"), ReactMount = require("react-dom/lib/ReactMount"), React = require("react"); module.makeHot = module.hot.data ? module.hot.data.makeHot : ReactHotAPI(function () { return RootInstanceProvider.getRootInstances(ReactMount); }, React); })(); } try { (function () {

'use strict';

var _react = __webpack_require__(14);

var _react2 = _interopRequireDefault(_react);

var _reactDom = __webpack_require__(80);

var _ImageDatasetGenerator = __webpack_require__(81);

var _ImageDatasetGenerator2 = _interopRequireDefault(_ImageDatasetGenerator);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

document.addEventListener('dragover', function (e) {
    e.preventDefault();
    return false;
}, false);

document.addEventListener('drop', function (e) {
    e.preventDefault();
    return false;
}, false);

(0, _reactDom.render)(_react2.default.createElement(_ImageDatasetGenerator2.default, null), document.getElementById('root'));

/* REACT HOT LOADER */ }).call(this); } finally { if (false) { (function () { var foundReactClasses = module.hot.data && module.hot.data.foundReactClasses || false; if (module.exports && module.makeHot) { var makeExportsHot = require("/Users/jianghong/GitHub/Image-Dataset-Generator/node_modules/react-hot-loader/makeExportsHot.js"); if (makeExportsHot(module, require("react"))) { foundReactClasses = true; } var shouldAcceptModule = true && foundReactClasses; if (shouldAcceptModule) { module.hot.accept(function (err) { if (err) { console.error("Cannot apply hot update to " + "index.js" + ": " + err.message); } }); } } module.hot.dispose(function (data) { data.makeHot = module.makeHot; data.foundReactClasses = foundReactClasses; }); })(); } }

/***/ }),

/***/ 80:
/***/ (function(module, exports) {

throw new Error("Module build failed: Error: ENOENT: no such file or directory, open '/Users/jianghong/GitHub/Image-Dataset-Generator/node_modules/react-dom/index.js'\n    at Error (native)");

/***/ }),

/***/ 81:
/***/ (function(module, exports, __webpack_require__) {

/* REACT HOT LOADER */ if (false) { (function () { var ReactHotAPI = require("/Users/jianghong/GitHub/Image-Dataset-Generator/node_modules/react-hot-api/modules/index.js"), RootInstanceProvider = require("/Users/jianghong/GitHub/Image-Dataset-Generator/node_modules/react-hot-loader/RootInstanceProvider.js"), ReactMount = require("react-dom/lib/ReactMount"), React = require("react"); module.makeHot = module.hot.data ? module.hot.data.makeHot : ReactHotAPI(function () { return RootInstanceProvider.getRootInstances(ReactMount); }, React); })(); } try { (function () {

'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(14);

var _react2 = _interopRequireDefault(_react);

var _ImageViewer = __webpack_require__(169);

var _ImageViewer2 = _interopRequireDefault(_ImageViewer);

var _DatasetViewer = __webpack_require__(168);

var _DatasetViewer2 = _interopRequireDefault(_DatasetViewer);

var _AddLocationForm = __webpack_require__(167);

var _AddLocationForm2 = _interopRequireDefault(_AddLocationForm);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var IMAGE_FORMAT = ['.jpg', '.jpeg', '.bmp', '.png', '.gif'];

var ImageDatasetGenerator = function (_Component) {
    _inherits(ImageDatasetGenerator, _Component);

    // cache names to check dup

    function ImageDatasetGenerator(props) {
        _classCallCheck(this, ImageDatasetGenerator);

        var _this = _possibleConstructorReturn(this, (ImageDatasetGenerator.__proto__ || Object.getPrototypeOf(ImageDatasetGenerator)).call(this, props));

        _this.nameSet = new Set();


        _this.state = {
            imgUrl: '',
            locations: [{
                name: 'AAA',
                x: 11,
                y: 11
            }, {
                name: 'BBB',
                x: 22,
                y: 22
            }],
            posToAdd: null, // location position that user click to add
            tipContent: null
        };
        return _this;
    }

    /**
     * Callback for drop image
     * @param e
     */


    _createClass(ImageDatasetGenerator, [{
        key: 'onImageDrop',
        value: function onImageDrop(e) {
            var imgUrl = '';
            e.preventDefault();
            var _iteratorNormalCompletion = true;
            var _didIteratorError = false;
            var _iteratorError = undefined;

            try {
                var _loop = function _loop() {
                    var f = _step.value;

                    console.log('File(s) you dragged here: ', f.path);
                    if (IMAGE_FORMAT.some(function (format) {
                        return f.path.endsWith(format);
                    })) {
                        imgUrl = f.path;
                        return 'break';
                    }
                };

                for (var _iterator = e.dataTransfer.files[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
                    var _ret = _loop();

                    if (_ret === 'break') break;
                }
            } catch (err) {
                _didIteratorError = true;
                _iteratorError = err;
            } finally {
                try {
                    if (!_iteratorNormalCompletion && _iterator.return) {
                        _iterator.return();
                    }
                } finally {
                    if (_didIteratorError) {
                        throw _iteratorError;
                    }
                }
            }

            var tipContent = imgUrl ? "New image loaded!" : "File format not supported!";
            this.setState({
                imgUrl: imgUrl,
                locations: [],
                tipContent: tipContent
            });
            this.nameSet = new Set();
        }

        /**
         * Callback for click image
         * @param {Object} posToAdd: { screenX, screenY, x, y }
         */

    }, {
        key: 'onImageClick',
        value: function onImageClick(posToAdd) {
            if (this.state.imgUrl && posToAdd && posToAdd.x !== undefined && posToAdd.y !== undefined) {
                this.setState({ posToAdd: posToAdd });
            }
        }

        /**
         * Add location with input name
         * @param {String} name
         */

    }, {
        key: 'addLocation',
        value: function addLocation(name) {
            var newLocation = this.state.posToAdd;
            newLocation.name = name;

            if (name && !this.nameSet.has(name)) {
                this.setState({
                    posToAdd: null,
                    locations: [].concat(_toConsumableArray(this.state.locations), [newLocation]),
                    tipContent: 'Add location ' + name + ' with x=' + newLocation.x + ' y=' + newLocation.y
                });
                this.nameSet.add(name);
            } else {
                this.setState({
                    tipContent: 'Invalid or dup name'
                });
            }
        }

        /**
         * Remove location with input index
         * @param {number} index
         */

    }, {
        key: 'removeLocation',
        value: function removeLocation(index) {
            var locations = this.state.locations;
            var locationToRemove = locations[index];
            locations.splice(index, 1);
            this.setState({
                locations: locations,
                tipContent: locationToRemove.name + ' removed!'
            });
        }

        /**
         * Save dataset as local file
         */

    }, {
        key: 'saveDataset',
        value: function saveDataset() {
            var locations = this.state.locations;

            var tipContent = '';
            if (locations.length > 0) {
                // @TODO: hack, global event
                window.saveDataset(locations);
                tipContent = 'Save dataset successfully!';
            } else {
                tipContent = 'Warning: Empty dataset!';
            }
            this.setState({ tipContent: tipContent });
        }
    }, {
        key: 'render',
        value: function render() {
            var _state = this.state,
                imgUrl = _state.imgUrl,
                locations = _state.locations,
                posToAdd = _state.posToAdd,
                tipContent = _state.tipContent;

            return _react2.default.createElement(
                'div',
                { className: 'image-dataset-generator' },
                _react2.default.createElement(_ImageViewer2.default, { url: imgUrl,
                    tipContent: tipContent,
                    markers: locations,
                    onDropHandler: this.onImageDrop.bind(this),
                    onClickHandler: this.onImageClick.bind(this)
                }),
                _react2.default.createElement(_DatasetViewer2.default, { locations: locations,
                    saveDataset: this.saveDataset.bind(this),
                    removeLocation: this.removeLocation.bind(this)
                }),
                posToAdd && _react2.default.createElement(_AddLocationForm2.default, { pos: { x: posToAdd.screenX, y: posToAdd.screenY },
                    addLocation: this.addLocation.bind(this)
                })
            );
        }
    }]);

    return ImageDatasetGenerator;
}(_react.Component);

exports.default = ImageDatasetGenerator;

/* REACT HOT LOADER */ }).call(this); } finally { if (false) { (function () { var foundReactClasses = module.hot.data && module.hot.data.foundReactClasses || false; if (module.exports && module.makeHot) { var makeExportsHot = require("/Users/jianghong/GitHub/Image-Dataset-Generator/node_modules/react-hot-loader/makeExportsHot.js"); if (makeExportsHot(module, require("react"))) { foundReactClasses = true; } var shouldAcceptModule = true && foundReactClasses; if (shouldAcceptModule) { module.hot.accept(function (err) { if (err) { console.error("Cannot apply hot update to " + "ImageDatasetGenerator.js" + ": " + err.message); } }); } } module.hot.dispose(function (data) { data.makeHot = module.makeHot; data.foundReactClasses = foundReactClasses; }); })(); } }

/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAgMjE5OWYwMzZjMGQxZTRhMWViZDgiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvQWRkTG9jYXRpb25Gb3JtLmpzIiwid2VicGFjazovLy8uL3NyYy9jb21wb25lbnRzL0RhdGFzZXRWaWV3ZXIuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvSW1hZ2VWaWV3ZXIuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvTG9jYXRpb24uanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvTWFya2VyTGF5ZXIuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2luZGV4LmpzIiwid2VicGFjazovLy8uL3NyYy9jb250YWluZXJzL0ltYWdlRGF0YXNldEdlbmVyYXRvci5qcyJdLCJuYW1lcyI6WyJBZGRMb2NhdGlvbkZvcm0iLCJzdGF0ZSIsIm5hbWUiLCJlIiwidGFyZ2V0IiwidmFsdWUiLCJzZXRTdGF0ZSIsInByZXZlbnREZWZhdWx0IiwicHJvcHMiLCJhZGRMb2NhdGlvbiIsIm5hbWVJbnB1dCIsImZvY3VzIiwicG9zIiwieCIsInkiLCJzdHlsZSIsImxlZnQiLCJ0b3AiLCJiaW5kIiwib25OYW1lQ2hhbmdlIiwiaW5wdXQiLCJwcm9wVHlwZXMiLCJzaGFwZSIsIm51bWJlciIsImlzUmVxdWlyZWQiLCJmdW5jIiwiSEVBREVSUyIsIkRhdGFzZXRWaWV3ZXIiLCJsb2NhdGlvbnMiLCJsZW5ndGgiLCJtYXAiLCJsb2NhdGlvbiIsImluZGV4IiwicmVtb3ZlTG9jYXRpb24iLCJzYXZlRGF0YXNldCIsImFycmF5IiwiSW1hZ2VWaWV3ZXIiLCJjYWxsYmFjayIsImltZyIsInJlZnMiLCJpbWdEb20iLCJnZXRCb3VuZGluZ0NsaWVudFJlY3QiLCJjbGllbnRYIiwiY2xpZW50WSIsInNjcmVlblgiLCJzY3JlZW5ZIiwicGFyc2VJbnQiLCJuYXR1cmFsV2lkdGgiLCJ3aWR0aCIsIm5hdHVyYWxIZWlnaHQiLCJoZWlnaHQiLCJ1cmwiLCJvbkRyb3BIYW5kbGVyIiwib25DbGlja0hhbmRsZXIiLCJtYXJrZXJzIiwidGlwQ29udGVudCIsImltZ1JlY3QiLCJfb25DbGljayIsInN0cmluZyIsIkxvY2F0aW9uIiwiUkFESVVTIiwiTWFya2VyTGF5ZXIiLCJzdHlsZXMiLCJvbkNsaWNrIiwibWFya2VyIiwiYXJyYXlPZiIsImRvY3VtZW50IiwiYWRkRXZlbnRMaXN0ZW5lciIsImdldEVsZW1lbnRCeUlkIiwiSU1BR0VfRk9STUFUIiwiSW1hZ2VEYXRhc2V0R2VuZXJhdG9yIiwibmFtZVNldCIsIlNldCIsImltZ1VybCIsInBvc1RvQWRkIiwiZiIsImNvbnNvbGUiLCJsb2ciLCJwYXRoIiwic29tZSIsImVuZHNXaXRoIiwiZm9ybWF0IiwiZGF0YVRyYW5zZmVyIiwiZmlsZXMiLCJ1bmRlZmluZWQiLCJuZXdMb2NhdGlvbiIsImhhcyIsImFkZCIsImxvY2F0aW9uVG9SZW1vdmUiLCJzcGxpY2UiLCJ3aW5kb3ciLCJvbkltYWdlRHJvcCIsIm9uSW1hZ2VDbGljayJdLCJtYXBwaW5ncyI6IjtBQUFBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBLG1EQUEyQyxjQUFjOztBQUV6RDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGFBQUs7QUFDTDtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLG1DQUEyQiwwQkFBMEIsRUFBRTtBQUN2RCx5Q0FBaUMsZUFBZTtBQUNoRDtBQUNBO0FBQ0E7O0FBRUE7QUFDQSw4REFBc0QsK0RBQStEOztBQUVySDtBQUNBOztBQUVBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNoRUE7Ozs7Ozs7Ozs7OztJQUVxQkEsZTs7Ozs7Ozs7Ozs7Ozs7NE1BU2pCQyxLLEdBQVEsRUFBRUMsTUFBTSxFQUFSLEU7Ozs7O3FDQUVLQyxDLEVBQUc7QUFDWixnQkFBTUQsT0FBT0MsRUFBRUMsTUFBRixDQUFTQyxLQUF0QjtBQUNBLGlCQUFLQyxRQUFMLENBQWMsRUFBRUosVUFBRixFQUFkO0FBQ0g7OztvQ0FFV0MsQyxFQUFHO0FBQ1gsZ0JBQUlBLENBQUosRUFBT0EsRUFBRUksY0FBRjtBQUNQLGlCQUFLQyxLQUFMLENBQVdDLFdBQVgsQ0FBdUIsS0FBS1IsS0FBTCxDQUFXQyxJQUFsQztBQUNBLGlCQUFLSSxRQUFMLENBQWMsRUFBRUosTUFBTSxFQUFSLEVBQWQ7QUFDSDs7OzRDQUVtQjtBQUNoQixpQkFBS1EsU0FBTCxDQUFlQyxLQUFmO0FBQ0g7OztpQ0FFUTtBQUFBOztBQUFBLDZCQUNZLEtBQUtILEtBQUwsQ0FBV0ksR0FEdkI7QUFBQSxnQkFDR0MsQ0FESCxjQUNHQSxDQURIO0FBQUEsZ0JBQ01DLENBRE4sY0FDTUEsQ0FETjs7QUFFTCxnQkFBTUMsUUFBUTtBQUNWQyxzQkFBTUgsSUFBSSxJQURBO0FBRVZJLHFCQUFLSCxJQUFJO0FBRkMsYUFBZDtBQUlBLG1CQUNJO0FBQUE7QUFBQSxrQkFBSyxXQUFVLG1CQUFmLEVBQW1DLE9BQVFDLEtBQTNDO0FBQ0k7QUFBQTtBQUFBLHNCQUFNLFVBQVcsS0FBS04sV0FBTCxDQUFpQlMsSUFBakIsQ0FBc0IsSUFBdEIsQ0FBakI7QUFDSSw2REFBTyxNQUFLLE1BQVo7QUFDTywrQkFBUSxLQUFLakIsS0FBTCxDQUFXQyxJQUQxQjtBQUVPLGtDQUFXLEtBQUtpQixZQUFMLENBQWtCRCxJQUFsQixDQUF1QixJQUF2QixDQUZsQjtBQUdPLHFDQUFZLGVBSG5CO0FBSU8sNkJBQU0sYUFBQ0UsS0FBRCxFQUFXO0FBQUUsbUNBQUtWLFNBQUwsR0FBaUJVLEtBQWpCO0FBQXlCO0FBSm5ELHNCQURKO0FBT0ksNkRBQU8sTUFBSyxRQUFaLEVBQXFCLE9BQU0sS0FBM0I7QUFQSjtBQURKLGFBREo7QUFhSDs7Ozs7O0FBN0NnQnBCLGUsQ0FDVnFCLFMsR0FBWTtBQUNmVCxTQUFLLGlCQUFVVSxLQUFWLENBQWdCO0FBQ2pCVCxXQUFHLGlCQUFVVSxNQUFWLENBQWlCQyxVQURIO0FBRWpCVixXQUFHLGlCQUFVUyxNQUFWLENBQWlCQztBQUZILEtBQWhCLEVBR0ZBLFVBSlk7QUFLZmYsaUJBQWEsaUJBQVVnQixJQUFWLENBQWVEO0FBTGIsQztrQkFERnhCLGU7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDRnJCOzs7O0FBRUE7Ozs7OztBQUVBLElBQU0wQixVQUFVLENBQUMsVUFBRCxFQUFhLEdBQWIsRUFBa0IsR0FBbEIsQ0FBaEIsQyxDQUF3Qzs7QUFFeEMsSUFBTUMsZ0JBQWdCLFNBQWhCQSxhQUFnQixDQUFTbkIsS0FBVCxFQUFnQjtBQUNsQyxRQUFNb0IsWUFBWXBCLE1BQU1vQixTQUF4Qjs7QUFFQSxXQUNJO0FBQUE7QUFBQSxVQUFLLFdBQVUsbUJBQWY7QUFDSTtBQUFBO0FBQUEsY0FBSyxXQUFVLGVBQWY7QUFFUUEsc0JBQVVDLE1BQVYsR0FBbUIsQ0FBbkIsR0FDQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGFBREEsR0FFQUQsVUFBVUUsR0FBVixDQUFjLFVBQUNDLFFBQUQsRUFBV0MsS0FBWDtBQUFBLHVCQUNWO0FBQ0kseUJBQU1ELFNBQVM3QixJQURuQjtBQUVJLDJCQUFROEIsS0FGWjtBQUdJLDBCQUFPRCxTQUFTN0IsSUFIcEI7QUFJSSx1QkFBSTZCLFNBQVNsQixDQUpqQjtBQUtJLHVCQUFJa0IsU0FBU2pCLENBTGpCO0FBTUksb0NBQWlCO0FBQUEsK0JBQVNOLE1BQU15QixjQUFOLENBQXFCRCxLQUFyQixDQUFUO0FBQUE7QUFOckIsa0JBRFU7QUFBQSxhQUFkO0FBSlIsU0FESjtBQWlCSTtBQUFBO0FBQUEsY0FBUSxXQUFVLFNBQWxCLEVBQTRCLFNBQVV4QixNQUFNMEIsV0FBNUM7QUFBQTtBQUFBO0FBakJKLEtBREo7QUFxQkgsQ0F4QkQ7O0FBMEJBUCxjQUFjTixTQUFkLEdBQTBCO0FBQ3RCTyxlQUFXLGlCQUFVTyxLQUFWLENBQWdCWCxVQURMO0FBRXRCVSxpQkFBYSxpQkFBVVQsSUFBVixDQUFlRCxVQUZOO0FBR3RCUyxvQkFBZ0IsaUJBQVVSLElBQVYsQ0FBZUQ7QUFIVCxDQUExQjs7a0JBTWVHLGE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUN0Q2Y7Ozs7QUFFQTs7Ozs7Ozs7Ozs7O0lBRXFCUyxXOzs7Ozs7Ozs7OztpQ0FTUmpDLEMsRUFBR2tDLFEsRUFBVTtBQUNsQmxDLGNBQUVJLGNBQUY7O0FBRUEsZ0JBQU0rQixNQUFNLEtBQUtDLElBQUwsQ0FBVUMsTUFBdEI7O0FBSGtCLHdDQUlJRixJQUFJRyxxQkFBSixFQUpKO0FBQUEsZ0JBSVZ6QixJQUpVLHlCQUlWQSxJQUpVO0FBQUEsZ0JBSUpDLEdBSkkseUJBSUpBLEdBSkk7O0FBS2xCLGdCQUFNSixJQUFJVixFQUFFdUMsT0FBRixHQUFZMUIsSUFBdEI7QUFDQSxnQkFBTUYsSUFBSVgsRUFBRXdDLE9BQUYsR0FBWTFCLEdBQXRCOztBQUVBb0IscUJBQVM7QUFDTE8seUJBQVN6QyxFQUFFdUMsT0FETixFQUNlO0FBQ3BCRyx5QkFBUzFDLEVBQUV3QyxPQUZOO0FBR0w5QixtQkFBR2lDLFNBQVNqQyxJQUFJeUIsSUFBSVMsWUFBUixHQUF1QlQsSUFBSVUsS0FBcEMsQ0FIRTtBQUlMbEMsbUJBQUdnQyxTQUFTaEMsSUFBSXdCLElBQUlXLGFBQVIsR0FBd0JYLElBQUlZLE1BQXJDO0FBSkUsYUFBVDtBQU1IOzs7aUNBRVE7QUFBQTs7QUFBQSx5QkFDK0QsS0FBSzFDLEtBRHBFO0FBQUEsZ0JBQ0cyQyxHQURILFVBQ0dBLEdBREg7QUFBQSxnQkFDUUMsYUFEUixVQUNRQSxhQURSO0FBQUEsZ0JBQ3VCQyxjQUR2QixVQUN1QkEsY0FEdkI7QUFBQSxnQkFDdUNDLE9BRHZDLFVBQ3VDQSxPQUR2QztBQUFBLGdCQUNnREMsVUFEaEQsVUFDZ0RBLFVBRGhEOztBQUVMLGdCQUFNZixTQUFTLEtBQUtELElBQUwsQ0FBVUMsTUFBekI7QUFDQSxnQkFBTWdCLFVBQVVoQixVQUFVQSxPQUFPQyxxQkFBUCxFQUExQjs7QUFFQSxtQkFDSTtBQUFBO0FBQUEsa0JBQUssV0FBVSxjQUFmO0FBQ0ssNEJBQVNXLGFBRGQ7QUFFSTtBQUFBO0FBQUEsc0JBQUssV0FBVSxpQkFBZjtBQUNJLDJEQUFLLEtBQU1ELEdBQVg7QUFDSyw2QkFBSSxrQkFEVDtBQUVLLGlDQUFVQSxPQUFRO0FBQUEsbUNBQUssT0FBS00sUUFBTCxDQUFjdEQsQ0FBZCxFQUFpQmtELGNBQWpCLENBQUw7QUFBQSx5QkFGdkI7QUFHSyw2QkFBSTtBQUhUO0FBREosaUJBRko7QUFVUUMsMkJBQVdFLE9BQVgsSUFDQSx1REFBYSxTQUFVRixPQUF2QjtBQUNhLDZCQUFVSCxPQUFRO0FBQUEsK0JBQUssT0FBS00sUUFBTCxDQUFjdEQsQ0FBZCxFQUFpQmtELGNBQWpCLENBQUw7QUFBQSxxQkFEL0I7QUFFYSw0QkFBU0c7QUFGdEIsa0JBWFI7QUFnQkk7QUFBQTtBQUFBLHNCQUFLLFdBQVUsTUFBZjtBQUF3QkQ7QUFBeEI7QUFoQkosYUFESjtBQW9CSDs7Ozs7O0FBbERnQm5CLFcsQ0FDVmYsUyxHQUFZO0FBQ2Y4QixTQUFLLGlCQUFVTyxNQUFWLENBQWlCbEMsVUFEUDtBQUVmK0IsZ0JBQVksaUJBQVVHLE1BRlA7QUFHZk4sbUJBQWUsaUJBQVUzQixJQUFWLENBQWVELFVBSGY7QUFJZjZCLG9CQUFnQixpQkFBVTVCLElBQVYsQ0FBZUQsVUFKaEI7QUFLZjhCLGFBQVMsaUJBQVVuQjtBQUxKLEM7a0JBREZDLFc7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDSnJCOzs7Ozs7QUFFQSxJQUFNdUIsV0FBVyxTQUFYQSxRQUFXO0FBQUEsV0FDYjtBQUFBO0FBQUEsVUFBSyxXQUFVLFVBQWY7QUFDSTtBQUFBO0FBQUEsY0FBSyxXQUFVLGVBQWY7QUFDSTtBQUFBO0FBQUEsa0JBQUcsV0FBVSxpQkFBYjtBQUNHLDZCQUFTO0FBQUEsK0JBQU1uRCxNQUFNeUIsY0FBTixDQUFxQnpCLE1BQU13QixLQUEzQixDQUFOO0FBQUEscUJBRFo7QUFBQTtBQUFBLGFBREo7QUFLS3hCLGtCQUFNTjtBQUxYLFNBREo7QUFRSTtBQUFBO0FBQUEsY0FBSyxXQUFVLDBCQUFmO0FBQTJDTSxrQkFBTUs7QUFBakQsU0FSSjtBQVNJO0FBQUE7QUFBQSxjQUFLLFdBQVUsMEJBQWY7QUFBMkNMLGtCQUFNTTtBQUFqRDtBQVRKLEtBRGE7QUFBQSxDQUFqQjs7QUFjQTZDLFNBQVN0QyxTQUFULEdBQXFCO0FBQ2pCbkIsVUFBTSxpQkFBVXdELE1BQVYsQ0FBaUJsQyxVQUROO0FBRWpCWCxPQUFHLGlCQUFVVSxNQUFWLENBQWlCQyxVQUZIO0FBR2pCVixPQUFHLGlCQUFVUyxNQUFWLENBQWlCQztBQUhILENBQXJCOztrQkFNZW1DLFE7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDdEJmOzs7Ozs7QUFFQSxJQUFNQyxTQUFTLENBQWY7O0FBRUEsSUFBTUMsY0FBYyxTQUFkQSxXQUFjO0FBQUEsV0FDaEI7QUFBQTtBQUFBLFVBQUssV0FBVSxjQUFmO0FBQ0ssbUJBQVE7QUFDTDdDLHNCQUFNUixNQUFNc0QsTUFBTixDQUFhOUMsSUFBYixHQUFvQixJQURyQjtBQUVMQyxxQkFBS1QsTUFBTXNELE1BQU4sQ0FBYTdDLEdBQWIsR0FBbUIsSUFGbkI7QUFHTCtCLHVCQUFPeEMsTUFBTXNELE1BQU4sQ0FBYWQsS0FBYixHQUFxQixJQUh2QjtBQUlMRSx3QkFBUTFDLE1BQU1zRCxNQUFOLENBQWFaLE1BQWIsR0FBc0I7QUFKekIsYUFEYjtBQU9LLHFCQUFVMUMsTUFBTXVELE9BUHJCO0FBU1F2RCxjQUFNOEMsT0FBTixDQUFjeEIsR0FBZCxDQUFrQjtBQUFBLG1CQUNkO0FBQUE7QUFBQSxrQkFBRyxXQUFVLFFBQWIsRUFBc0IsS0FBTWtDLE9BQU85RCxJQUFuQztBQUNJLDBEQUFRLFdBQVUsZUFBbEI7QUFDUSx1QkFBSTBELE1BRFo7QUFFUSx3QkFBS0ksT0FBT3BCLE9BQVAsR0FBaUJwQyxNQUFNc0QsTUFBTixDQUFhOUMsSUFGM0M7QUFHUSx3QkFBS2dELE9BQU9uQixPQUFQLEdBQWlCckMsTUFBTXNELE1BQU4sQ0FBYTdDO0FBSDNDLGtCQURKO0FBTUk7QUFBQTtBQUFBLHNCQUFNLFdBQVUsY0FBaEI7QUFBaUMrQywyQkFBTzlEO0FBQXhDO0FBTkosYUFEYztBQUFBLFNBQWxCO0FBVFIsS0FEZ0I7QUFBQSxDQUFwQjs7QUF3QkEyRCxZQUFZeEMsU0FBWixHQUF3QjtBQUNwQmlDLGFBQVMsaUJBQVVXLE9BQVYsQ0FDTCxpQkFBVTNDLEtBQVYsQ0FBZ0I7QUFDWnNCLGlCQUFTLGlCQUFVckIsTUFBVixDQUFpQkMsVUFEZDtBQUVacUIsaUJBQVMsaUJBQVV0QixNQUFWLENBQWlCQztBQUZkLEtBQWhCLENBREssRUFLUEEsVUFOa0I7QUFPcEJzQyxZQUFRLGlCQUFVeEMsS0FBVixDQUFnQjtBQUNwQk4sY0FBTSxpQkFBVU8sTUFBVixDQUFpQkMsVUFESDtBQUVwQlAsYUFBSyxpQkFBVU0sTUFBVixDQUFpQkMsVUFGRjtBQUdwQndCLGVBQU8saUJBQVV6QixNQUFWLENBQWlCQyxVQUhKO0FBSXBCMEIsZ0JBQVEsaUJBQVUzQixNQUFWLENBQWlCQztBQUpMLEtBQWhCLEVBS0xBLFVBWmlCO0FBYXBCdUMsYUFBUyxpQkFBVXRDLElBQVYsQ0FBZUQ7QUFiSixDQUF4Qjs7a0JBZ0JlcUMsVzs7Ozs7Ozs7Ozs7OztBQzVDZjs7OztBQUNBOztBQUVBOzs7Ozs7QUFFQUssU0FBU0MsZ0JBQVQsQ0FBMEIsVUFBMUIsRUFBc0MsVUFBVWhFLENBQVYsRUFBYTtBQUMvQ0EsTUFBRUksY0FBRjtBQUNBLFdBQU8sS0FBUDtBQUNILENBSEQsRUFHRyxLQUhIOztBQUtBMkQsU0FBU0MsZ0JBQVQsQ0FBMEIsTUFBMUIsRUFBa0MsVUFBVWhFLENBQVYsRUFBYTtBQUMzQ0EsTUFBRUksY0FBRjtBQUNBLFdBQU8sS0FBUDtBQUNILENBSEQsRUFHRyxLQUhIOztBQUtBLHNCQUNJLG9FQURKLEVBRUkyRCxTQUFTRSxjQUFULENBQXdCLE1BQXhCLENBRkosRTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNmQTs7OztBQUNBOzs7O0FBQ0E7Ozs7QUFDQTs7Ozs7Ozs7Ozs7Ozs7QUFFQSxJQUFNQyxlQUFlLENBQUMsTUFBRCxFQUFTLE9BQVQsRUFBa0IsTUFBbEIsRUFBMEIsTUFBMUIsRUFBa0MsTUFBbEMsQ0FBckI7O0lBRU1DLHFCOzs7QUFDbUI7O0FBRXJCLG1DQUFZOUQsS0FBWixFQUFtQjtBQUFBOztBQUFBLGtKQUNUQSxLQURTOztBQUFBLGNBRm5CK0QsT0FFbUIsR0FGVCxJQUFJQyxHQUFKLEVBRVM7OztBQUdmLGNBQUt2RSxLQUFMLEdBQWE7QUFDVHdFLG9CQUFRLEVBREM7QUFFVDdDLHVCQUFXLENBQUM7QUFDUjFCLHNCQUFNLEtBREU7QUFFUlcsbUJBQUcsRUFGSztBQUdSQyxtQkFBRztBQUhLLGFBQUQsRUFJUjtBQUNDWixzQkFBTSxLQURQO0FBRUNXLG1CQUFHLEVBRko7QUFHQ0MsbUJBQUc7QUFISixhQUpRLENBRkY7QUFXVDRELHNCQUFVLElBWEQsRUFXTztBQUNoQm5CLHdCQUFZO0FBWkgsU0FBYjtBQUhlO0FBaUJsQjs7QUFFRDs7Ozs7Ozs7b0NBSVlwRCxDLEVBQUc7QUFDWCxnQkFBSXNFLFNBQVMsRUFBYjtBQUNBdEUsY0FBRUksY0FBRjtBQUZXO0FBQUE7QUFBQTs7QUFBQTtBQUFBO0FBQUEsd0JBR0ZvRSxDQUhFOztBQUlQQyw0QkFBUUMsR0FBUixDQUFZLDRCQUFaLEVBQTBDRixFQUFFRyxJQUE1QztBQUNBLHdCQUFJVCxhQUFhVSxJQUFiLENBQWtCO0FBQUEsK0JBQVVKLEVBQUVHLElBQUYsQ0FBT0UsUUFBUCxDQUFnQkMsTUFBaEIsQ0FBVjtBQUFBLHFCQUFsQixDQUFKLEVBQTBEO0FBQ3REUixpQ0FBU0UsRUFBRUcsSUFBWDtBQUNBO0FBQ0g7QUFSTTs7QUFHWCxxQ0FBYzNFLEVBQUUrRSxZQUFGLENBQWVDLEtBQTdCLDhIQUFvQztBQUFBOztBQUFBLDBDQUk1QjtBQUVQO0FBVFU7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTs7QUFVWCxnQkFBSTVCLGFBQWFrQixTQUFTLG1CQUFULEdBQStCLDRCQUFoRDtBQUNBLGlCQUFLbkUsUUFBTCxDQUFjO0FBQ1ZtRSw4QkFEVTtBQUVWN0MsMkJBQVcsRUFGRDtBQUdWMkI7QUFIVSxhQUFkO0FBS0EsaUJBQUtnQixPQUFMLEdBQWUsSUFBSUMsR0FBSixFQUFmO0FBQ0g7O0FBRUQ7Ozs7Ozs7cUNBSWFFLFEsRUFBVTtBQUNuQixnQkFBSSxLQUFLekUsS0FBTCxDQUFXd0UsTUFBWCxJQUFxQkMsUUFBckIsSUFBaUNBLFNBQVM3RCxDQUFULEtBQWV1RSxTQUFoRCxJQUE2RFYsU0FBUzVELENBQVQsS0FBZXNFLFNBQWhGLEVBQTJGO0FBQ3ZGLHFCQUFLOUUsUUFBTCxDQUFjLEVBQUVvRSxrQkFBRixFQUFkO0FBQ0g7QUFDSjs7QUFFRDs7Ozs7OztvQ0FJWXhFLEksRUFBTTtBQUNkLGdCQUFJbUYsY0FBYyxLQUFLcEYsS0FBTCxDQUFXeUUsUUFBN0I7QUFDQVcsd0JBQVluRixJQUFaLEdBQW1CQSxJQUFuQjs7QUFFQSxnQkFBSUEsUUFBUSxDQUFDLEtBQUtxRSxPQUFMLENBQWFlLEdBQWIsQ0FBaUJwRixJQUFqQixDQUFiLEVBQXFDO0FBQ2pDLHFCQUFLSSxRQUFMLENBQWM7QUFDVm9FLDhCQUFVLElBREE7QUFFVjlDLDREQUFlLEtBQUszQixLQUFMLENBQVcyQixTQUExQixJQUFxQ3lELFdBQXJDLEVBRlU7QUFHVjlCLGtEQUE0QnJELElBQTVCLGdCQUEyQ21GLFlBQVl4RSxDQUF2RCxXQUE4RHdFLFlBQVl2RTtBQUhoRSxpQkFBZDtBQUtBLHFCQUFLeUQsT0FBTCxDQUFhZ0IsR0FBYixDQUFpQnJGLElBQWpCO0FBQ0gsYUFQRCxNQU9PO0FBQ0gscUJBQUtJLFFBQUwsQ0FBYztBQUNWaUQsZ0NBQVk7QUFERixpQkFBZDtBQUdIO0FBQ0o7O0FBRUQ7Ozs7Ozs7dUNBSWV2QixLLEVBQU87QUFDbEIsZ0JBQUlKLFlBQVksS0FBSzNCLEtBQUwsQ0FBVzJCLFNBQTNCO0FBQ0EsZ0JBQU00RCxtQkFBbUI1RCxVQUFVSSxLQUFWLENBQXpCO0FBQ0FKLHNCQUFVNkQsTUFBVixDQUFpQnpELEtBQWpCLEVBQXdCLENBQXhCO0FBQ0EsaUJBQUsxQixRQUFMLENBQWM7QUFDVnNCLG9DQURVO0FBRVYyQiw0QkFBZWlDLGlCQUFpQnRGLElBQWhDO0FBRlUsYUFBZDtBQUlIOztBQUVEOzs7Ozs7c0NBR2M7QUFBQSxnQkFDRjBCLFNBREUsR0FDWSxLQUFLM0IsS0FEakIsQ0FDRjJCLFNBREU7O0FBRVYsZ0JBQUkyQixhQUFhLEVBQWpCO0FBQ0EsZ0JBQUkzQixVQUFVQyxNQUFWLEdBQW1CLENBQXZCLEVBQTBCO0FBQ3RCO0FBQ0E2RCx1QkFBT3hELFdBQVAsQ0FBbUJOLFNBQW5CO0FBQ0EyQiw2QkFBYSw0QkFBYjtBQUNILGFBSkQsTUFJTztBQUNIQSw2QkFBYSx5QkFBYjtBQUNIO0FBQ0QsaUJBQUtqRCxRQUFMLENBQWMsRUFBRWlELHNCQUFGLEVBQWQ7QUFDSDs7O2lDQUVRO0FBQUEseUJBQytDLEtBQUt0RCxLQURwRDtBQUFBLGdCQUNHd0UsTUFESCxVQUNHQSxNQURIO0FBQUEsZ0JBQ1c3QyxTQURYLFVBQ1dBLFNBRFg7QUFBQSxnQkFDc0I4QyxRQUR0QixVQUNzQkEsUUFEdEI7QUFBQSxnQkFDZ0NuQixVQURoQyxVQUNnQ0EsVUFEaEM7O0FBRUwsbUJBQ0k7QUFBQTtBQUFBLGtCQUFLLFdBQVUseUJBQWY7QUFDSSx1RUFBYSxLQUFNa0IsTUFBbkI7QUFDYSxnQ0FBYWxCLFVBRDFCO0FBRWEsNkJBQVUzQixTQUZ2QjtBQUdhLG1DQUFnQixLQUFLK0QsV0FBTCxDQUFpQnpFLElBQWpCLENBQXNCLElBQXRCLENBSDdCO0FBSWEsb0NBQWlCLEtBQUswRSxZQUFMLENBQWtCMUUsSUFBbEIsQ0FBdUIsSUFBdkI7QUFKOUIsa0JBREo7QUFPSSx5RUFBZSxXQUFZVSxTQUEzQjtBQUNlLGlDQUFjLEtBQUtNLFdBQUwsQ0FBaUJoQixJQUFqQixDQUFzQixJQUF0QixDQUQ3QjtBQUVlLG9DQUFpQixLQUFLZSxjQUFMLENBQW9CZixJQUFwQixDQUF5QixJQUF6QjtBQUZoQyxrQkFQSjtBQVlRd0QsNEJBQ0EsMkRBQWlCLEtBQU0sRUFBRTdELEdBQUc2RCxTQUFTOUIsT0FBZCxFQUF1QjlCLEdBQUc0RCxTQUFTN0IsT0FBbkMsRUFBdkI7QUFDaUIsaUNBQWMsS0FBS3BDLFdBQUwsQ0FBaUJTLElBQWpCLENBQXNCLElBQXRCO0FBRC9CO0FBYlIsYUFESjtBQW9CSDs7Ozs7O2tCQUdVb0QscUIiLCJmaWxlIjoiLi9zcmMvYnVuZGxlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSB7fTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pXG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG5cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGk6IG1vZHVsZUlkLFxuIFx0XHRcdGw6IGZhbHNlLFxuIFx0XHRcdGV4cG9ydHM6IHt9XG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmwgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIGlkZW50aXR5IGZ1bmN0aW9uIGZvciBjYWxsaW5nIGhhcm1vbnkgaW1wb3J0cyB3aXRoIHRoZSBjb3JyZWN0IGNvbnRleHRcbiBcdF9fd2VicGFja19yZXF1aXJlX18uaSA9IGZ1bmN0aW9uKHZhbHVlKSB7IHJldHVybiB2YWx1ZTsgfTtcblxuIFx0Ly8gZGVmaW5lIGdldHRlciBmdW5jdGlvbiBmb3IgaGFybW9ueSBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSBmdW5jdGlvbihleHBvcnRzLCBuYW1lLCBnZXR0ZXIpIHtcbiBcdFx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBuYW1lKSkge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBuYW1lLCB7XG4gXHRcdFx0XHRjb25maWd1cmFibGU6IGZhbHNlLFxuIFx0XHRcdFx0ZW51bWVyYWJsZTogdHJ1ZSxcbiBcdFx0XHRcdGdldDogZ2V0dGVyXG4gXHRcdFx0fSk7XG4gXHRcdH1cbiBcdH07XG5cbiBcdC8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSBmdW5jdGlvbihtb2R1bGUpIHtcbiBcdFx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0RGVmYXVsdCgpIHsgcmV0dXJuIG1vZHVsZVsnZGVmYXVsdCddOyB9IDpcbiBcdFx0XHRmdW5jdGlvbiBnZXRNb2R1bGVFeHBvcnRzKCkgeyByZXR1cm4gbW9kdWxlOyB9O1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCAnYScsIGdldHRlcik7XG4gXHRcdHJldHVybiBnZXR0ZXI7XG4gXHR9O1xuXG4gXHQvLyBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGxcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubyA9IGZ1bmN0aW9uKG9iamVjdCwgcHJvcGVydHkpIHsgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIHByb3BlcnR5KTsgfTtcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiXCI7XG5cbiBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oX193ZWJwYWNrX3JlcXVpcmVfXy5zID0gMTgzKTtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyB3ZWJwYWNrL2Jvb3RzdHJhcCAyMTk5ZjAzNmMwZDFlNGExZWJkOCIsImltcG9ydCBSZWFjdCwgeyBDb21wb25lbnQsIFByb3BUeXBlcyB9IGZyb20gJ3JlYWN0JztcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgQWRkTG9jYXRpb25Gb3JtIGV4dGVuZHMgQ29tcG9uZW50IHtcbiAgICBzdGF0aWMgcHJvcFR5cGVzID0ge1xuICAgICAgICBwb3M6IFByb3BUeXBlcy5zaGFwZSh7XG4gICAgICAgICAgICB4OiBQcm9wVHlwZXMubnVtYmVyLmlzUmVxdWlyZWQsXG4gICAgICAgICAgICB5OiBQcm9wVHlwZXMubnVtYmVyLmlzUmVxdWlyZWRcbiAgICAgICAgfSkuaXNSZXF1aXJlZCxcbiAgICAgICAgYWRkTG9jYXRpb246IFByb3BUeXBlcy5mdW5jLmlzUmVxdWlyZWRcbiAgICB9O1xuXG4gICAgc3RhdGUgPSB7IG5hbWU6ICcnIH07XG5cbiAgICBvbk5hbWVDaGFuZ2UoZSkge1xuICAgICAgICBjb25zdCBuYW1lID0gZS50YXJnZXQudmFsdWU7XG4gICAgICAgIHRoaXMuc2V0U3RhdGUoeyBuYW1lIH0pO1xuICAgIH1cblxuICAgIGFkZExvY2F0aW9uKGUpIHtcbiAgICAgICAgaWYgKGUpIGUucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgdGhpcy5wcm9wcy5hZGRMb2NhdGlvbih0aGlzLnN0YXRlLm5hbWUpO1xuICAgICAgICB0aGlzLnNldFN0YXRlKHsgbmFtZTogJycgfSk7XG4gICAgfVxuXG4gICAgY29tcG9uZW50RGlkTW91bnQoKSB7XG4gICAgICAgIHRoaXMubmFtZUlucHV0LmZvY3VzKCk7XG4gICAgfVxuXG4gICAgcmVuZGVyKCkge1xuICAgICAgICBjb25zdCB7IHgsIHkgfSA9IHRoaXMucHJvcHMucG9zO1xuICAgICAgICBjb25zdCBzdHlsZSA9IHtcbiAgICAgICAgICAgIGxlZnQ6IHggKyAncHgnLFxuICAgICAgICAgICAgdG9wOiB5ICsgJ3B4J1xuICAgICAgICB9O1xuICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJhZGQtbG9jYXRpb24tZm9ybVwiIHN0eWxlPXsgc3R5bGUgfT5cbiAgICAgICAgICAgICAgICA8Zm9ybSBvblN1Ym1pdD17IHRoaXMuYWRkTG9jYXRpb24uYmluZCh0aGlzKSB9PlxuICAgICAgICAgICAgICAgICAgICA8aW5wdXQgdHlwZT1cInRleHRcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWU9eyB0aGlzLnN0YXRlLm5hbWUgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9eyB0aGlzLm9uTmFtZUNoYW5nZS5iaW5kKHRoaXMpIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgIHBsYWNlaG9sZGVyPVwiTG9jYXRpb24gTmFtZVwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICByZWY9eyAoaW5wdXQpID0+IHsgdGhpcy5uYW1lSW5wdXQgPSBpbnB1dDsgfX1cbiAgICAgICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICAgICAgPGlucHV0IHR5cGU9XCJzdWJtaXRcIiB2YWx1ZT1cIkFkZFwiIC8+XG4gICAgICAgICAgICAgICAgPC9mb3JtPlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICk7XG4gICAgfVxufVxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9jb21wb25lbnRzL0FkZExvY2F0aW9uRm9ybS5qcyIsImltcG9ydCBSZWFjdCwgeyBQcm9wVHlwZXMgfSBmcm9tICdyZWFjdCc7XG5cbmltcG9ydCBMb2NhdGlvbiBmcm9tICcuL0xvY2F0aW9uJztcblxuY29uc3QgSEVBREVSUyA9IFsnTG9jYXRpb24nLCAnWCcsICdZJ107IC8vIEBUT0RPOiBkaXNwbGF5IGhlYWRlclxuXG5jb25zdCBEYXRhc2V0Vmlld2VyID0gZnVuY3Rpb24ocHJvcHMpIHtcbiAgICBjb25zdCBsb2NhdGlvbnMgPSBwcm9wcy5sb2NhdGlvbnM7XG5cbiAgICByZXR1cm4gKFxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImRhdGFzZXQtY29udGFpbmVyXCI+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImRhdGFzZXQtdGFibGVcIj5cbiAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgIGxvY2F0aW9ucy5sZW5ndGggPCAxID9cbiAgICAgICAgICAgICAgICAgICAgPGRpdj5ObyBsb2NhdGlvbnMgYWRkZWQuPC9kaXY+IDpcbiAgICAgICAgICAgICAgICAgICAgbG9jYXRpb25zLm1hcCgobG9jYXRpb24sIGluZGV4KSA9PiAoXG4gICAgICAgICAgICAgICAgICAgICAgICA8TG9jYXRpb25cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBrZXk9eyBsb2NhdGlvbi5uYW1lIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpbmRleD17IGluZGV4IH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBuYW1lPXsgbG9jYXRpb24ubmFtZSB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgeD17IGxvY2F0aW9uLnggfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHk9eyBsb2NhdGlvbi55IH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICByZW1vdmVMb2NhdGlvbj17IGluZGV4ID0+IHByb3BzLnJlbW92ZUxvY2F0aW9uKGluZGV4KSB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICAgICAgKSlcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDxidXR0b24gY2xhc3NOYW1lPVwic2F2dEJ0blwiIG9uQ2xpY2s9eyBwcm9wcy5zYXZlRGF0YXNldCB9PkV4cG9ydCBEYXRhc2V0PC9idXR0b24+XG4gICAgICAgIDwvZGl2PlxuICAgICk7XG59O1xuXG5EYXRhc2V0Vmlld2VyLnByb3BUeXBlcyA9IHtcbiAgICBsb2NhdGlvbnM6IFByb3BUeXBlcy5hcnJheS5pc1JlcXVpcmVkLFxuICAgIHNhdmVEYXRhc2V0OiBQcm9wVHlwZXMuZnVuYy5pc1JlcXVpcmVkLFxuICAgIHJlbW92ZUxvY2F0aW9uOiBQcm9wVHlwZXMuZnVuYy5pc1JlcXVpcmVkXG59O1xuXG5leHBvcnQgZGVmYXVsdCBEYXRhc2V0Vmlld2VyO1xuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9jb21wb25lbnRzL0RhdGFzZXRWaWV3ZXIuanMiLCJpbXBvcnQgUmVhY3QsIHsgQ29tcG9uZW50LCBQcm9wVHlwZXMgfSBmcm9tICdyZWFjdCc7XG5cbmltcG9ydCBNYXJrZXJMYXllciBmcm9tICcuL01hcmtlckxheWVyJztcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgSW1hZ2VWaWV3ZXIgZXh0ZW5kcyBDb21wb25lbnQge1xuICAgIHN0YXRpYyBwcm9wVHlwZXMgPSB7XG4gICAgICAgIHVybDogUHJvcFR5cGVzLnN0cmluZy5pc1JlcXVpcmVkLFxuICAgICAgICB0aXBDb250ZW50OiBQcm9wVHlwZXMuc3RyaW5nLFxuICAgICAgICBvbkRyb3BIYW5kbGVyOiBQcm9wVHlwZXMuZnVuYy5pc1JlcXVpcmVkLFxuICAgICAgICBvbkNsaWNrSGFuZGxlcjogUHJvcFR5cGVzLmZ1bmMuaXNSZXF1aXJlZCxcbiAgICAgICAgbWFya2VyczogUHJvcFR5cGVzLmFycmF5XG4gICAgfTtcblxuICAgIF9vbkNsaWNrKGUsIGNhbGxiYWNrKSB7XG4gICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcblxuICAgICAgICBjb25zdCBpbWcgPSB0aGlzLnJlZnMuaW1nRG9tO1xuICAgICAgICBjb25zdCB7IGxlZnQsIHRvcCB9ID0gaW1nLmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpO1xuICAgICAgICBjb25zdCB4ID0gZS5jbGllbnRYIC0gbGVmdDtcbiAgICAgICAgY29uc3QgeSA9IGUuY2xpZW50WSAtIHRvcDtcblxuICAgICAgICBjYWxsYmFjayh7XG4gICAgICAgICAgICBzY3JlZW5YOiBlLmNsaWVudFgsIC8vIHJlZmVyIHRvIHdpbmRvdyB0b3AgbGVmdCBjb3JuZXJcbiAgICAgICAgICAgIHNjcmVlblk6IGUuY2xpZW50WSxcbiAgICAgICAgICAgIHg6IHBhcnNlSW50KHggKiBpbWcubmF0dXJhbFdpZHRoIC8gaW1nLndpZHRoKSxcbiAgICAgICAgICAgIHk6IHBhcnNlSW50KHkgKiBpbWcubmF0dXJhbEhlaWdodCAvIGltZy5oZWlnaHQpXG4gICAgICAgIH0pO1xuICAgIH1cblxuICAgIHJlbmRlcigpIHtcbiAgICAgICAgY29uc3QgeyB1cmwsIG9uRHJvcEhhbmRsZXIsIG9uQ2xpY2tIYW5kbGVyLCBtYXJrZXJzLCB0aXBDb250ZW50IH0gPSB0aGlzLnByb3BzO1xuICAgICAgICBjb25zdCBpbWdEb20gPSB0aGlzLnJlZnMuaW1nRG9tO1xuICAgICAgICBjb25zdCBpbWdSZWN0ID0gaW1nRG9tICYmIGltZ0RvbS5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKTtcblxuICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJpbWFnZS12aWV3ZXJcIlxuICAgICAgICAgICAgICAgICBvbkRyb3A9eyBvbkRyb3BIYW5kbGVyIH0gPlxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiaW1hZ2UtY29udGFpbmVyXCI+XG4gICAgICAgICAgICAgICAgICAgIDxpbWcgc3JjPXsgdXJsIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICBhbHQ9XCJEcmFnIGltYWdlIGhlcmUhXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICBvbkNsaWNrPXsgdXJsICYmIChlID0+IHRoaXMuX29uQ2xpY2soZSwgb25DbGlja0hhbmRsZXIpKSB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgcmVmPVwiaW1nRG9tXCJcbiAgICAgICAgICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICBtYXJrZXJzICYmIGltZ1JlY3QgJiZcbiAgICAgICAgICAgICAgICAgICAgPE1hcmtlckxheWVyIG1hcmtlcnM9eyBtYXJrZXJzIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9eyB1cmwgJiYgKGUgPT4gdGhpcy5fb25DbGljayhlLCBvbkNsaWNrSGFuZGxlcikpIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN0eWxlcz17IGltZ1JlY3QgfVxuICAgICAgICAgICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ0aXBzXCI+eyB0aXBDb250ZW50IH08L2Rpdj5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICApO1xuICAgIH1cbn1cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvY29tcG9uZW50cy9JbWFnZVZpZXdlci5qcyIsImltcG9ydCBSZWFjdCwgeyBQcm9wVHlwZXMgfSBmcm9tICdyZWFjdCc7XG5cbmNvbnN0IExvY2F0aW9uID0gcHJvcHMgPT4gKFxuICAgIDxkaXYgY2xhc3NOYW1lPVwibG9jYXRpb25cIj5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJsb2NhdGlvbi1pbmZvXCI+XG4gICAgICAgICAgICA8YSBjbGFzc05hbWU9XCJyZW1vdmUtbG9jYXRpb25cIlxuICAgICAgICAgICAgICAgb25DbGljaz17KCkgPT4gcHJvcHMucmVtb3ZlTG9jYXRpb24ocHJvcHMuaW5kZXgpfT5cbiAgICAgICAgICAgICAgICDinJZcbiAgICAgICAgICAgIDwvYT5cbiAgICAgICAgICAgIHtwcm9wcy5uYW1lfVxuICAgICAgICA8L2Rpdj5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJsb2NhdGlvbi1pbmZvIGxvY2F0aW9uLXhcIj57cHJvcHMueH08L2Rpdj5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJsb2NhdGlvbi1pbmZvIGxvY2F0aW9uLXlcIj57cHJvcHMueX08L2Rpdj5cbiAgICA8L2Rpdj5cbik7XG5cbkxvY2F0aW9uLnByb3BUeXBlcyA9IHtcbiAgICBuYW1lOiBQcm9wVHlwZXMuc3RyaW5nLmlzUmVxdWlyZWQsXG4gICAgeDogUHJvcFR5cGVzLm51bWJlci5pc1JlcXVpcmVkLFxuICAgIHk6IFByb3BUeXBlcy5udW1iZXIuaXNSZXF1aXJlZFxufTtcblxuZXhwb3J0IGRlZmF1bHQgTG9jYXRpb247XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL2NvbXBvbmVudHMvTG9jYXRpb24uanMiLCJpbXBvcnQgUmVhY3QsIHsgUHJvcFR5cGVzIH0gZnJvbSAncmVhY3QnO1xuXG5jb25zdCBSQURJVVMgPSA3O1xuXG5jb25zdCBNYXJrZXJMYXllciA9IHByb3BzID0+IChcbiAgICA8c3ZnIGNsYXNzTmFtZT1cIm1hcmtlci1sYXllclwiXG4gICAgICAgICBzdHlsZT17IHtcbiAgICAgICAgICAgIGxlZnQ6IHByb3BzLnN0eWxlcy5sZWZ0ICsgXCJweFwiLFxuICAgICAgICAgICAgdG9wOiBwcm9wcy5zdHlsZXMudG9wICsgXCJweFwiLFxuICAgICAgICAgICAgd2lkdGg6IHByb3BzLnN0eWxlcy53aWR0aCArIFwicHhcIixcbiAgICAgICAgICAgIGhlaWdodDogcHJvcHMuc3R5bGVzLmhlaWdodCArIFwicHhcIlxuICAgICAgICAgfSB9XG4gICAgICAgICBvbkNsaWNrPXsgcHJvcHMub25DbGljayB9PlxuICAgICAgICB7XG4gICAgICAgICAgICBwcm9wcy5tYXJrZXJzLm1hcChtYXJrZXIgPT4gKFxuICAgICAgICAgICAgICAgIDxnIGNsYXNzTmFtZT1cIm1hcmtlclwiIGtleT17IG1hcmtlci5uYW1lIH0gPlxuICAgICAgICAgICAgICAgICAgICA8Y2lyY2xlIGNsYXNzTmFtZT1cIm1hcmtlci1jaXJjbGVcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHI9eyBSQURJVVMgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGN4PXsgbWFya2VyLnNjcmVlblggLSBwcm9wcy5zdHlsZXMubGVmdCB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY3k9eyBtYXJrZXIuc2NyZWVuWSAtIHByb3BzLnN0eWxlcy50b3AgfVxuICAgICAgICAgICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwibWFya2VyLWxhYmVsXCI+eyBtYXJrZXIubmFtZSB9PC9zcGFuPlxuICAgICAgICAgICAgICAgIDwvZz5cbiAgICAgICAgICAgICkpXG4gICAgICAgIH1cbiAgICA8L3N2Zz5cbik7XG5cbk1hcmtlckxheWVyLnByb3BUeXBlcyA9IHtcbiAgICBtYXJrZXJzOiBQcm9wVHlwZXMuYXJyYXlPZihcbiAgICAgICAgUHJvcFR5cGVzLnNoYXBlKHtcbiAgICAgICAgICAgIHNjcmVlblg6IFByb3BUeXBlcy5udW1iZXIuaXNSZXF1aXJlZCxcbiAgICAgICAgICAgIHNjcmVlblk6IFByb3BUeXBlcy5udW1iZXIuaXNSZXF1aXJlZFxuICAgICAgICB9KVxuICAgICkuaXNSZXF1aXJlZCxcbiAgICBzdHlsZXM6IFByb3BUeXBlcy5zaGFwZSh7XG4gICAgICAgIGxlZnQ6IFByb3BUeXBlcy5udW1iZXIuaXNSZXF1aXJlZCxcbiAgICAgICAgdG9wOiBQcm9wVHlwZXMubnVtYmVyLmlzUmVxdWlyZWQsXG4gICAgICAgIHdpZHRoOiBQcm9wVHlwZXMubnVtYmVyLmlzUmVxdWlyZWQsXG4gICAgICAgIGhlaWdodDogUHJvcFR5cGVzLm51bWJlci5pc1JlcXVpcmVkXG4gICAgfSkuaXNSZXF1aXJlZCxcbiAgICBvbkNsaWNrOiBQcm9wVHlwZXMuZnVuYy5pc1JlcXVpcmVkXG59O1xuXG5leHBvcnQgZGVmYXVsdCBNYXJrZXJMYXllcjtcblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvY29tcG9uZW50cy9NYXJrZXJMYXllci5qcyIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgeyByZW5kZXIgfSBmcm9tICdyZWFjdC1kb20nO1xuXG5pbXBvcnQgSW1hZ2VEYXRhc2V0R2VuZXJhdG9yIGZyb20gJy4vY29udGFpbmVycy9JbWFnZURhdGFzZXRHZW5lcmF0b3InO1xuXG5kb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKCdkcmFnb3ZlcicsIGZ1bmN0aW9uIChlKSB7XG4gICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgIHJldHVybiBmYWxzZTtcbn0sIGZhbHNlKTtcblxuZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcignZHJvcCcsIGZ1bmN0aW9uIChlKSB7XG4gICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgIHJldHVybiBmYWxzZTtcbn0sIGZhbHNlKTtcblxucmVuZGVyKFxuICAgIDxJbWFnZURhdGFzZXRHZW5lcmF0b3IgLz4sXG4gICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3Jvb3QnKVxuKTtcblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvaW5kZXguanMiLCJpbXBvcnQgUmVhY3QsIHsgQ29tcG9uZW50IH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IEltYWdlVmlld2VyIGZyb20gJy4uL2NvbXBvbmVudHMvSW1hZ2VWaWV3ZXInO1xuaW1wb3J0IERhdGFzZXRWaWV3ZXIgZnJvbSAnLi4vY29tcG9uZW50cy9EYXRhc2V0Vmlld2VyJztcbmltcG9ydCBBZGRMb2NhdGlvbkZvcm0gZnJvbSAnLi4vY29tcG9uZW50cy9BZGRMb2NhdGlvbkZvcm0nO1xuXG5jb25zdCBJTUFHRV9GT1JNQVQgPSBbJy5qcGcnLCAnLmpwZWcnLCAnLmJtcCcsICcucG5nJywgJy5naWYnXTtcblxuY2xhc3MgSW1hZ2VEYXRhc2V0R2VuZXJhdG9yIGV4dGVuZHMgQ29tcG9uZW50IHtcbiAgICBuYW1lU2V0ID0gbmV3IFNldCgpOyAvLyBjYWNoZSBuYW1lcyB0byBjaGVjayBkdXBcblxuICAgIGNvbnN0cnVjdG9yKHByb3BzKSB7XG4gICAgICAgIHN1cGVyKHByb3BzKTtcblxuICAgICAgICB0aGlzLnN0YXRlID0ge1xuICAgICAgICAgICAgaW1nVXJsOiAnJyxcbiAgICAgICAgICAgIGxvY2F0aW9uczogW3tcbiAgICAgICAgICAgICAgICBuYW1lOiAnQUFBJyxcbiAgICAgICAgICAgICAgICB4OiAxMSxcbiAgICAgICAgICAgICAgICB5OiAxMVxuICAgICAgICAgICAgfSwge1xuICAgICAgICAgICAgICAgIG5hbWU6ICdCQkInLFxuICAgICAgICAgICAgICAgIHg6IDIyLFxuICAgICAgICAgICAgICAgIHk6IDIyXG4gICAgICAgICAgICB9XSxcbiAgICAgICAgICAgIHBvc1RvQWRkOiBudWxsLCAvLyBsb2NhdGlvbiBwb3NpdGlvbiB0aGF0IHVzZXIgY2xpY2sgdG8gYWRkXG4gICAgICAgICAgICB0aXBDb250ZW50OiBudWxsXG4gICAgICAgIH07XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogQ2FsbGJhY2sgZm9yIGRyb3AgaW1hZ2VcbiAgICAgKiBAcGFyYW0gZVxuICAgICAqL1xuICAgIG9uSW1hZ2VEcm9wKGUpIHtcbiAgICAgICAgbGV0IGltZ1VybCA9ICcnO1xuICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgIGZvciAobGV0IGYgb2YgZS5kYXRhVHJhbnNmZXIuZmlsZXMpIHtcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKCdGaWxlKHMpIHlvdSBkcmFnZ2VkIGhlcmU6ICcsIGYucGF0aCk7XG4gICAgICAgICAgICBpZiAoSU1BR0VfRk9STUFULnNvbWUoZm9ybWF0ID0+IGYucGF0aC5lbmRzV2l0aChmb3JtYXQpKSkge1xuICAgICAgICAgICAgICAgIGltZ1VybCA9IGYucGF0aDtcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBsZXQgdGlwQ29udGVudCA9IGltZ1VybCA/IFwiTmV3IGltYWdlIGxvYWRlZCFcIiA6IFwiRmlsZSBmb3JtYXQgbm90IHN1cHBvcnRlZCFcIjtcbiAgICAgICAgdGhpcy5zZXRTdGF0ZSh7XG4gICAgICAgICAgICBpbWdVcmwsXG4gICAgICAgICAgICBsb2NhdGlvbnM6IFtdLFxuICAgICAgICAgICAgdGlwQ29udGVudFxuICAgICAgICB9KTtcbiAgICAgICAgdGhpcy5uYW1lU2V0ID0gbmV3IFNldCgpO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIENhbGxiYWNrIGZvciBjbGljayBpbWFnZVxuICAgICAqIEBwYXJhbSB7T2JqZWN0fSBwb3NUb0FkZDogeyBzY3JlZW5YLCBzY3JlZW5ZLCB4LCB5IH1cbiAgICAgKi9cbiAgICBvbkltYWdlQ2xpY2socG9zVG9BZGQpIHtcbiAgICAgICAgaWYgKHRoaXMuc3RhdGUuaW1nVXJsICYmIHBvc1RvQWRkICYmIHBvc1RvQWRkLnggIT09IHVuZGVmaW5lZCAmJiBwb3NUb0FkZC55ICE9PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICAgIHRoaXMuc2V0U3RhdGUoeyBwb3NUb0FkZCB9KTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIC8qKlxuICAgICAqIEFkZCBsb2NhdGlvbiB3aXRoIGlucHV0IG5hbWVcbiAgICAgKiBAcGFyYW0ge1N0cmluZ30gbmFtZVxuICAgICAqL1xuICAgIGFkZExvY2F0aW9uKG5hbWUpIHtcbiAgICAgICAgbGV0IG5ld0xvY2F0aW9uID0gdGhpcy5zdGF0ZS5wb3NUb0FkZDtcbiAgICAgICAgbmV3TG9jYXRpb24ubmFtZSA9IG5hbWU7XG5cbiAgICAgICAgaWYgKG5hbWUgJiYgIXRoaXMubmFtZVNldC5oYXMobmFtZSkpIHtcbiAgICAgICAgICAgIHRoaXMuc2V0U3RhdGUoe1xuICAgICAgICAgICAgICAgIHBvc1RvQWRkOiBudWxsLFxuICAgICAgICAgICAgICAgIGxvY2F0aW9uczogWy4uLnRoaXMuc3RhdGUubG9jYXRpb25zLCBuZXdMb2NhdGlvbl0sXG4gICAgICAgICAgICAgICAgdGlwQ29udGVudDogYEFkZCBsb2NhdGlvbiAke25hbWV9IHdpdGggeD0ke25ld0xvY2F0aW9uLnh9IHk9JHtuZXdMb2NhdGlvbi55fWBcbiAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgdGhpcy5uYW1lU2V0LmFkZChuYW1lKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHRoaXMuc2V0U3RhdGUoe1xuICAgICAgICAgICAgICAgIHRpcENvbnRlbnQ6ICdJbnZhbGlkIG9yIGR1cCBuYW1lJ1xuICAgICAgICAgICAgfSk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBSZW1vdmUgbG9jYXRpb24gd2l0aCBpbnB1dCBpbmRleFxuICAgICAqIEBwYXJhbSB7bnVtYmVyfSBpbmRleFxuICAgICAqL1xuICAgIHJlbW92ZUxvY2F0aW9uKGluZGV4KSB7XG4gICAgICAgIGxldCBsb2NhdGlvbnMgPSB0aGlzLnN0YXRlLmxvY2F0aW9ucztcbiAgICAgICAgY29uc3QgbG9jYXRpb25Ub1JlbW92ZSA9IGxvY2F0aW9uc1tpbmRleF07XG4gICAgICAgIGxvY2F0aW9ucy5zcGxpY2UoaW5kZXgsIDEpO1xuICAgICAgICB0aGlzLnNldFN0YXRlKHtcbiAgICAgICAgICAgIGxvY2F0aW9ucyxcbiAgICAgICAgICAgIHRpcENvbnRlbnQ6IGAke2xvY2F0aW9uVG9SZW1vdmUubmFtZX0gcmVtb3ZlZCFgXG4gICAgICAgIH0pO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIFNhdmUgZGF0YXNldCBhcyBsb2NhbCBmaWxlXG4gICAgICovXG4gICAgc2F2ZURhdGFzZXQoKSB7XG4gICAgICAgIGNvbnN0IHsgbG9jYXRpb25zIH0gPSB0aGlzLnN0YXRlO1xuICAgICAgICBsZXQgdGlwQ29udGVudCA9ICcnO1xuICAgICAgICBpZiAobG9jYXRpb25zLmxlbmd0aCA+IDApIHtcbiAgICAgICAgICAgIC8vIEBUT0RPOiBoYWNrLCBnbG9iYWwgZXZlbnRcbiAgICAgICAgICAgIHdpbmRvdy5zYXZlRGF0YXNldChsb2NhdGlvbnMpO1xuICAgICAgICAgICAgdGlwQ29udGVudCA9ICdTYXZlIGRhdGFzZXQgc3VjY2Vzc2Z1bGx5ISc7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICB0aXBDb250ZW50ID0gJ1dhcm5pbmc6IEVtcHR5IGRhdGFzZXQhJztcbiAgICAgICAgfVxuICAgICAgICB0aGlzLnNldFN0YXRlKHsgdGlwQ29udGVudCB9KTtcbiAgICB9XG5cbiAgICByZW5kZXIoKSB7XG4gICAgICAgIGNvbnN0IHsgaW1nVXJsLCBsb2NhdGlvbnMsIHBvc1RvQWRkLCB0aXBDb250ZW50IH0gPSB0aGlzLnN0YXRlO1xuICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJpbWFnZS1kYXRhc2V0LWdlbmVyYXRvclwiPlxuICAgICAgICAgICAgICAgIDxJbWFnZVZpZXdlciB1cmw9eyBpbWdVcmwgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aXBDb250ZW50PXsgdGlwQ29udGVudCB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1hcmtlcnM9eyBsb2NhdGlvbnMgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbkRyb3BIYW5kbGVyPXsgdGhpcy5vbkltYWdlRHJvcC5iaW5kKHRoaXMpIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb25DbGlja0hhbmRsZXI9eyB0aGlzLm9uSW1hZ2VDbGljay5iaW5kKHRoaXMpIH1cbiAgICAgICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICA8RGF0YXNldFZpZXdlciBsb2NhdGlvbnM9eyBsb2NhdGlvbnMgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNhdmVEYXRhc2V0PXsgdGhpcy5zYXZlRGF0YXNldC5iaW5kKHRoaXMpIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZW1vdmVMb2NhdGlvbj17IHRoaXMucmVtb3ZlTG9jYXRpb24uYmluZCh0aGlzKSB9XG4gICAgICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICBwb3NUb0FkZCAmJlxuICAgICAgICAgICAgICAgICAgICA8QWRkTG9jYXRpb25Gb3JtIHBvcz17IHsgeDogcG9zVG9BZGQuc2NyZWVuWCwgeTogcG9zVG9BZGQuc2NyZWVuWSB9IH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBhZGRMb2NhdGlvbj17IHRoaXMuYWRkTG9jYXRpb24uYmluZCh0aGlzKSB9XG4gICAgICAgICAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICApO1xuICAgIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgSW1hZ2VEYXRhc2V0R2VuZXJhdG9yO1xuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9jb250YWluZXJzL0ltYWdlRGF0YXNldEdlbmVyYXRvci5qcyJdLCJzb3VyY2VSb290IjoiIn0=