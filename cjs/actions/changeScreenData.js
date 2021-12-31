"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _reducer = require("../reducer");

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var _default = function _default(screenData) {
  return function (dispatch) {
    dispatch(_defineProperty({
      type: _reducer.TYPE_CHANGE
    }, _reducer.STATE_SCREEN_DATA, screenData));
  };
};

exports["default"] = _default;