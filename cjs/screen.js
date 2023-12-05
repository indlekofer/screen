"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.register = exports.matchPath = exports.getUrlPrefix = exports.getContext = exports.findById = exports["default"] = exports.createUrl = exports.createTitle = exports.createComponent = void 0;
var __urlPrefix = '';
var __context = null;
var __screens = {};
var register = exports.register = function register(screen) {
  var screenObject = new screen();
  __screens[screenObject.getId()] = screenObject;
};
var matchPath = exports.matchPath = function matchPath(path) {
  if (__urlPrefix.length > 0) {
    // expect path with prefix
    if (__urlPrefix.length <= path.length && path.indexOf(__urlPrefix) === 0) {
      // remove prefix from path
      path = path.substr(__urlPrefix.length);
    } else {
      return [null, null];
    }
  }
  var pathSplit = path.split('/');
  if (pathSplit.length > 1 && pathSplit[0] == '') {
    pathSplit.shift();
  }
  if (pathSplit.length >= 1 && pathSplit[0] == '') {
    pathSplit.shift();
  }
  var keys = Object.keys(__screens);
  for (var i = 0; i < keys.length; i++) {
    var screen = __screens[keys[i]];
    var match = screen.match(pathSplit, __context);
    if (match[0] !== null) {
      return match;
    }
  }
  return [null, null];
};
var findById = exports.findById = function findById(screenId) {
  if (screenId === null) {
    return null;
  } else if (__screens[screenId]) {
    return __screens[screenId];
  } else {
    return null;
  }
};
var createComponent = exports.createComponent = function createComponent(screenId) {
  var screen = findById(screenId);
  if (screen) {
    return screen.getComponent();
  } else {
    return null;
  }
};
var createTitle = exports.createTitle = function createTitle(screenId, screenData) {
  var screen = findById(screenId);
  if (screen && typeof screen.getTitle == 'function') {
    return screen.getTitle(screenData);
  } else {
    return null;
  }
};
var createUrl = exports.createUrl = function createUrl(screenId, screenData) {
  var screen = findById(screenId);
  if (screen) {
    var prefix = __urlPrefix;
    var url = screen.getUrl(screenData);
    // avoid double /
    if (prefix.charAt(prefix.length - 1) === '/') {
      prefix = prefix.slice(0, prefix.length - 1);
    }
    if (url.charAt(0) === '/') {
      url = url.slice(1);
    }
    return prefix + '/' + url;
  } else {
    return null;
  }
};
var getUrlPrefix = exports.getUrlPrefix = function getUrlPrefix() {
  return __urlPrefix;
};
var getContext = exports.getContext = function getContext() {
  return __context;
};
var _default = exports["default"] = function _default() {
  var urlPrefix = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : '';
  var context = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : null;
  __urlPrefix = urlPrefix;
  __context = context;
};