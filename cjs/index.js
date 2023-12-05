"use strict";

function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
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
function _getRequireWildcardCache(e) { if ("function" != typeof WeakMap) return null; var r = new WeakMap(), t = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(e) { return e ? t : r; })(e); }
function _interopRequireWildcard(e, r) { if (!r && e && e.__esModule) return e; if (null === e || "object" != _typeof(e) && "function" != typeof e) return { "default": e }; var t = _getRequireWildcardCache(r); if (t && t.has(e)) return t.get(e); var n = { __proto__: null }, a = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var u in e) if ("default" !== u && Object.prototype.hasOwnProperty.call(e, u)) { var i = a ? Object.getOwnPropertyDescriptor(e, u) : null; i && (i.get || i.set) ? Object.defineProperty(n, u, i) : n[u] = e[u]; } return n["default"] = e, t && t.set(e, n), n; }
var setup = exports.setup = function setup() {
  var force = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : true;
  (0, _reduxStore.injectReducer)(_reducer["default"], _reducer.REDUCER, force);
};
var unset = exports.unset = function unset() {
  (0, _reduxStore.removeReducer)(_reducer.REDUCER);
};
setup(false);
var dispatchChangeScreen = exports.dispatchChangeScreen = function dispatchChangeScreen(screenId, screenData) {
  var usePushState = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : true;
  _reduxStore["default"].dispatch((0, _changeScreen["default"])(screenId, screenData, usePushState));
};
var dispatchChangeScreenData = exports.dispatchChangeScreenData = function dispatchChangeScreenData(screenData) {
  _reduxStore["default"].dispatch((0, _changeScreenData["default"])(screenData));
};
var dispatchPreviousScreen = exports.dispatchPreviousScreen = function dispatchPreviousScreen() {
  var fallbackScreenId = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : null;
  var fallbackScreenData = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : null;
  var usePushState = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : true;
  _reduxStore["default"].dispatch((0, _previousScreen["default"])(fallbackScreenId, fallbackScreenData, usePushState));
};
var _default = exports["default"] = _screen["default"];