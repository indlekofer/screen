let __urlPrefix = '';

const __screens = {};

export const register = (screen) => {
  const screenObject = new screen();
  __screens[screenObject.getId()] = screenObject;
};

export const matchPath = (path) => {
  if (__urlPrefix.length > 0) {
    // expect path with prefix
    if (__urlPrefix.length <= path.length && path.indexOf(__urlPrefix) === 0) {
      // remove prefix from path
      path = path.substr(__urlPrefix.length);
    } else {
      return [null, null];
    }
  }

  let pathSplit = path.split('/');

  if (pathSplit.length > 1 && pathSplit[0] == '') {
    pathSplit.shift();
  }
  if (pathSplit.length >= 1 && pathSplit[0] == '') {
    pathSplit.shift();
  }
  
  const keys = Object.keys(__screens);

  for (let i = 0; i < keys.length; i++) {
    const screen = __screens[keys[i]];

    const match = screen.match(pathSplit);
    if (match[0] !== null) {
      return match;
    }
  }

  return [null, null];
};

export const findById = (screenId) => {
  if (screenId === null) {
    return null;
  } else if (__screens[screenId]) {
    return __screens[screenId];
  } else {
    return null;
  }
};

export const createComponent = (screenId) => {
  const screen = findById(screenId);
  if (screen) {
    return screen.getComponent();
  } else {
    return null;
  }
};

export const createTitle = (screenId, screenData) => {
  const screen = findById(screenId);
  if (screen && typeof screen.getTitle == 'function') {
    return screen.getTitle(screenData);
  } else {
    return null;
  }
};

export const createUrl = (screenId, screenData) => {
  const screen = findById(screenId);
  if (screen) {
    return __urlPrefix + screen.getUrl(screenData);
  } else {
    return null;
  }
};

export const getUrlPrefix = () => {
  return __urlPrefix;
};

export default (urlPrefix = '') => {
  __urlPrefix = urlPrefix;
};

