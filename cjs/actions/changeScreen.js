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
var _default = exports["default"] = function _default(screenId, screenData) {
  var usePushState = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : true;
  return function (dispatch, getState) {
    var previousScreenId = getState()[_reducer.REDUCER].get(_reducer.STATE_SCREEN);
    var previousScreenData = getState()[_reducer.REDUCER].get(_reducer.STATE_SCREEN_DATA);
    if (typeof window != 'undefined') {
      var title = (0, _screen.createTitle)(screenId, screenData);
      if (usePushState) {
        var url = (0, _screen.createUrl)(screenId, screenData, (0, _screen.getContext)());
        window.history.pushState({}, title, url);
      }
      if (title !== null) window.document.title = title;
    }
    //reset screen data
    if (typeof screenData == 'undefined' || screenData !== null && screenData.length == 0) {
      screenData = null;
    }
    dispatch(_defineProperty(_defineProperty(_defineProperty(_defineProperty({
      type: _reducer.TYPE_CHANGE
    }, _reducer.STATE_SCREEN, screenId), _reducer.STATE_SCREEN_DATA, screenData), _reducer.STATE_SCREEN_PREVIOUS, previousScreenId), _reducer.STATE_SCREEN_DATA_PREVIOUS, previousScreenData));
  };
};