"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _screen = require("../screen");
var _reducer = require("../reducer");
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return _typeof(key) === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
var _default = exports["default"] = function _default() {
  var fallbackScreenId = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : null;
  var fallbackScreenData = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : null;
  var usePushState = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : true;
  return function (dispatch, getState) {
    var screenId = getState()[_reducer.REDUCER].get(_reducer.STATE_SCREEN_PREVIOUS);
    var screenData = getState()[_reducer.REDUCER].get(_reducer.STATE_SCREEN_DATA_PREVIOUS);
    if (screenId === null) {
      screenId = fallbackScreenId;
      screenData = fallbackScreenData;
    }
    if (typeof window != 'undefined') {
      var title = (0, _screen.createTitle)(screenId, screenData);
      if (usePushState && typeof window.history != 'undefined') {
        var url = (0, _screen.createUrl)(screenId, screenData);
        window.history.pushState({}, title, url);
      }
      if (title !== null && typeof window.document != 'undefined') {
        window.document.title = title;
      }
    }
    dispatch(_defineProperty(_defineProperty(_defineProperty(_defineProperty({
      type: _reducer.TYPE_CHANGE
    }, _reducer.STATE_SCREEN, screenId), _reducer.STATE_SCREEN_DATA, screenData), _reducer.STATE_SCREEN_PREVIOUS, null), _reducer.STATE_SCREEN_DATA_PREVIOUS, null));
  };
};