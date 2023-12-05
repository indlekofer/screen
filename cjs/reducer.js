"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = exports.TYPE_CHANGE = exports.STATE_SCREEN_PREVIOUS = exports.STATE_SCREEN_DATA_PREVIOUS = exports.STATE_SCREEN_DATA = exports.STATE_SCREEN = exports.REDUCER = void 0;
var _immutable = require("immutable");
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return _typeof(key) === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
var _module = '@indlekofer/screen/';
var REDUCER = exports.REDUCER = _module + 'REDUCER';
var REDUCER_TYPE_ = REDUCER + '_TYPE_';
var TYPE_CHANGE = exports.TYPE_CHANGE = REDUCER_TYPE_ + 'CHANGE';
var REDUCER_STATE_ = REDUCER + '_STATE_';
var STATE_SCREEN = exports.STATE_SCREEN = REDUCER_STATE_ + 'SCREEN';
var STATE_SCREEN_DATA = exports.STATE_SCREEN_DATA = STATE_SCREEN + '_DATA';
var STATE_SCREEN_PREVIOUS = exports.STATE_SCREEN_PREVIOUS = STATE_SCREEN + '_PREVIOUS';
var STATE_SCREEN_DATA_PREVIOUS = exports.STATE_SCREEN_DATA_PREVIOUS = STATE_SCREEN_DATA + '_PREVIOUS';
var initialState = (0, _immutable.Map)(_defineProperty(_defineProperty(_defineProperty(_defineProperty({}, STATE_SCREEN, null), STATE_SCREEN_DATA, []), STATE_SCREEN_PREVIOUS, null), STATE_SCREEN_DATA_PREVIOUS, []));
var _default = exports["default"] = function _default() {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : initialState;
  var action = arguments.length > 1 ? arguments[1] : undefined;
  if (action.type == TYPE_CHANGE) {
    return state.withMutations(function (s) {
      initialState.mapKeys(function (k) {
        if (typeof action[k] != 'undefined') {
          s.set(k, action[k]);
        }
      });
    });
  } else {
    return state;
  }
};