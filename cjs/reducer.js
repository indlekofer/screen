"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = exports.TYPE_CHANGE = exports.STATE_SCREEN_PREVIOUS = exports.STATE_SCREEN_DATA_PREVIOUS = exports.STATE_SCREEN_DATA = exports.STATE_SCREEN = exports.REDUCER = void 0;

var _immutable = require("immutable");

var _Map;

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var _module = '@indlekofer/screen/';
var REDUCER = _module + 'REDUCER';
exports.REDUCER = REDUCER;
var REDUCER_TYPE_ = REDUCER + '_TYPE_';
var TYPE_CHANGE = REDUCER_TYPE_ + 'CHANGE';
exports.TYPE_CHANGE = TYPE_CHANGE;
var REDUCER_STATE_ = REDUCER + '_STATE_';
var STATE_SCREEN = REDUCER_STATE_ + 'SCREEN';
exports.STATE_SCREEN = STATE_SCREEN;
var STATE_SCREEN_DATA = STATE_SCREEN + '_DATA';
exports.STATE_SCREEN_DATA = STATE_SCREEN_DATA;
var STATE_SCREEN_PREVIOUS = STATE_SCREEN + '_PREVIOUS';
exports.STATE_SCREEN_PREVIOUS = STATE_SCREEN_PREVIOUS;
var STATE_SCREEN_DATA_PREVIOUS = STATE_SCREEN_DATA + '_PREVIOUS';
exports.STATE_SCREEN_DATA_PREVIOUS = STATE_SCREEN_DATA_PREVIOUS;
var initialState = (0, _immutable.Map)((_Map = {}, _defineProperty(_Map, STATE_SCREEN, null), _defineProperty(_Map, STATE_SCREEN_DATA, []), _defineProperty(_Map, STATE_SCREEN_PREVIOUS, null), _defineProperty(_Map, STATE_SCREEN_DATA_PREVIOUS, []), _Map));

var _default = function _default() {
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

exports["default"] = _default;