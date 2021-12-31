"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _screen = require("../screen");

var _reducer = require("../reducer");

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var _default = function _default() {
  var fallbackScreenId = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : null;
  var fallbackScreenData = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : null;
  var usePushState = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : true;
  return function (dispatch, getState) {
    var _dispatch;

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

    dispatch((_dispatch = {
      type: _reducer.TYPE_CHANGE
    }, _defineProperty(_dispatch, _reducer.STATE_SCREEN, screenId), _defineProperty(_dispatch, _reducer.STATE_SCREEN_DATA, screenData), _defineProperty(_dispatch, _reducer.STATE_SCREEN_PREVIOUS, null), _defineProperty(_dispatch, _reducer.STATE_SCREEN_DATA_PREVIOUS, null), _dispatch));
  };
};

exports["default"] = _default;