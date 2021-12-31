"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _reducer = require("../reducer");

var _screen = require("../screen");

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { var _i = arr == null ? null : typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"]; if (_i == null) return; var _arr = []; var _n = true; var _d = false; var _s, _e; try { for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

var _default = function _default(e) {
  return function (dispatch) {
    var _dispatch;

    e.preventDefault();
    var screenId, screenData;

    if (typeof window != 'undefined' && typeof window.location != 'undefined') {
      var _matchPath = (0, _screen.matchPath)(window.location.pathname);

      var _matchPath2 = _slicedToArray(_matchPath, 2);

      screenId = _matchPath2[0];
      screenData = _matchPath2[1];

      if (typeof window.document != 'undefined') {
        var title = (0, _screen.createTitle)(screenId, screenData);

        if (title !== null) {
          window.document.title = title;
        }
      }
    } else {
      screenId = null;
      screenData = null;
    }

    dispatch((_dispatch = {
      type: _reducer.TYPE_CHANGE
    }, _defineProperty(_dispatch, _reducer.STATE_SCREEN, screenId), _defineProperty(_dispatch, _reducer.STATE_SCREEN_DATA, screenData), _dispatch));
  };
};

exports["default"] = _default;