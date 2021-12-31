"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.register = exports.matchPath = exports.getUrlPrefix = exports.findById = exports["default"] = exports.createUrl = exports.createTitle = exports.createComponent = void 0;
var __urlPrefix = '';
var __screens = {};

var register = function register(screen) {
  var screenObject = new screen();
  __screens[screenObject.getId()] = screenObject;
};

exports.register = register;

var matchPath = function matchPath(path) {
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
    var match = screen.match(pathSplit);

    if (match[0] !== null) {
      return match;
    }
  }

  return [null, null];
};

exports.matchPath = matchPath;

var findById = function findById(screenId) {
  if (screenId === null) {
    return null;
  } else if (__screens[screenId]) {
    return __screens[screenId];
  } else {
    return null;
  }
};

exports.findById = findById;

var createComponent = function createComponent(screenId) {
  var screen = findById(screenId);

  if (screen) {
    return screen.getComponent();
  } else {
    return null;
  }
};

exports.createComponent = createComponent;

var createTitle = function createTitle(screenId, screenData) {
  var screen = findById(screenId);

  if (screen && typeof screen.getTitle == 'function') {
    return screen.getTitle(screenData);
  } else {
    return null;
  }
};

exports.createTitle = createTitle;

var createUrl = function createUrl(screenId, screenData) {
  var screen = findById(screenId);

  if (screen) {
    return __urlPrefix + screen.getUrl(screenData);
  } else {
    return null;
  }
};

exports.createUrl = createUrl;

var getUrlPrefix = function getUrlPrefix() {
  return __urlPrefix;
};

exports.getUrlPrefix = getUrlPrefix;

var _default = function _default() {
  var urlPrefix = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : '';
  __urlPrefix = urlPrefix;
};

exports["default"] = _default;