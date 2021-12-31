"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
Object.defineProperty(exports, "REDUCER", {
  enumerable: true,
  get: function get() {
    return _reducer.REDUCER;
  }
});
Object.defineProperty(exports, "STATE_SCREEN", {
  enumerable: true,
  get: function get() {
    return _reducer.STATE_SCREEN;
  }
});
Object.defineProperty(exports, "STATE_SCREEN_DATA", {
  enumerable: true,
  get: function get() {
    return _reducer.STATE_SCREEN_DATA;
  }
});
Object.defineProperty(exports, "STATE_SCREEN_DATA_PREVIOUS", {
  enumerable: true,
  get: function get() {
    return _reducer.STATE_SCREEN_DATA_PREVIOUS;
  }
});
Object.defineProperty(exports, "STATE_SCREEN_PREVIOUS", {
  enumerable: true,
  get: function get() {
    return _reducer.STATE_SCREEN_PREVIOUS;
  }
});
Object.defineProperty(exports, "changeScreen", {
  enumerable: true,
  get: function get() {
    return _changeScreen["default"];
  }
});
Object.defineProperty(exports, "changeScreenData", {
  enumerable: true,
  get: function get() {
    return _changeScreenData["default"];
  }
});
Object.defineProperty(exports, "createComponent", {
  enumerable: true,
  get: function get() {
    return _screen.createComponent;
  }
});
Object.defineProperty(exports, "createTitle", {
  enumerable: true,
  get: function get() {
    return _screen.createTitle;
  }
});
Object.defineProperty(exports, "createUrl", {
  enumerable: true,
  get: function get() {
    return _screen.createUrl;
  }
});
exports.dispatchPreviousScreen = exports.dispatchChangeScreenData = exports.dispatchChangeScreen = exports["default"] = void 0;
Object.defineProperty(exports, "findById", {
  enumerable: true,
  get: function get() {
    return _screen.findById;
  }
});
Object.defineProperty(exports, "getUrlPrefix", {
  enumerable: true,
  get: function get() {
    return _screen.getUrlPrefix;
  }
});
Object.defineProperty(exports, "matchPath", {
  enumerable: true,
  get: function get() {
    return _screen.matchPath;
  }
});
Object.defineProperty(exports, "popstate", {
  enumerable: true,
  get: function get() {
    return _popstate["default"];
  }
});
Object.defineProperty(exports, "previousScreen", {
  enumerable: true,
  get: function get() {
    return _previousScreen["default"];
  }
});
Object.defineProperty(exports, "register", {
  enumerable: true,
  get: function get() {
    return _screen.register;
  }
});
exports.unset = exports.setup = void 0;

var _reduxStore = _interopRequireWildcard(require("@indlekofer/redux-store"));

var _reducer = _interopRequireWildcard(require("./reducer"));

var _screen = _interopRequireWildcard(require("./screen"));

var _changeScreen = _interopRequireDefault(require("./actions/changeScreen"));

var _changeScreenData = _interopRequireDefault(require("./actions/changeScreenData"));

var _popstate = _interopRequireDefault(require("./actions/popstate"));

var _previousScreen = _interopRequireDefault(require("./actions/previousScreen"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

var setup = function setup() {
  var force = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : true;
  (0, _reduxStore.injectReducer)(_reducer["default"], _reducer.REDUCER, force);
};

exports.setup = setup;

var unset = function unset() {
  (0, _reduxStore.removeReducer)(_reducer.REDUCER);
};

exports.unset = unset;
setup(false);

var dispatchChangeScreen = function dispatchChangeScreen(screenId, screenData) {
  var usePushState = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : true;

  _reduxStore["default"].dispatch((0, _changeScreen["default"])(screenId, screenData, usePushState));
};

exports.dispatchChangeScreen = dispatchChangeScreen;

var dispatchChangeScreenData = function dispatchChangeScreenData(screenData) {
  _reduxStore["default"].dispatch((0, _changeScreenData["default"])(screenData));
};

exports.dispatchChangeScreenData = dispatchChangeScreenData;

var dispatchPreviousScreen = function dispatchPreviousScreen() {
  var fallbackScreenId = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : null;
  var fallbackScreenData = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : null;
  var usePushState = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : true;

  _reduxStore["default"].dispatch((0, _previousScreen["default"])(fallbackScreenId, fallbackScreenData, usePushState));
};

exports.dispatchPreviousScreen = dispatchPreviousScreen;
var _default = _screen["default"];
exports["default"] = _default;