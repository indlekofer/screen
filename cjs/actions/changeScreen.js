"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _screen = require("../screen");

var _reducer = require("../reducer");

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var _default = function _default(screenId, screenData) {
  var usePushState = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : true;
  return function (dispatch, getState) {
    var _dispatch;

    var previousScreenId = getState()[_reducer.REDUCER].get(_reducer.STATE_SCREEN);

    var previousScreenData = getState()[_reducer.REDUCER].get(_reducer.STATE_SCREEN_DATA);

    if (typeof window != 'undefined') {
      var title = (0, _screen.createTitle)(screenId, screenData);

      if (usePushState) {
        var url = (0, _screen.createUrl)(screenId, screenData);
        window.history.pushState({}, title, url);
      }

      if (title !== null) window.document.title = title;
    } //reset screen data


    if (typeof screenData == 'undefined' || screenData !== null && screenData.length == 0) {
      screenData = null;
    }

    dispatch((_dispatch = {
      type: _reducer.TYPE_CHANGE
    }, _defineProperty(_dispatch, _reducer.STATE_SCREEN, screenId), _defineProperty(_dispatch, _reducer.STATE_SCREEN_DATA, screenData), _defineProperty(_dispatch, _reducer.STATE_SCREEN_PREVIOUS, previousScreenId), _defineProperty(_dispatch, _reducer.STATE_SCREEN_DATA_PREVIOUS, previousScreenData), _dispatch));
  };
};

exports["default"] = _default;