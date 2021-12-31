import store, { injectReducer, removeReducer } from '@indlekofer/redux-store';
import Reducer, {
  REDUCER,
  STATE_SCREEN,
  STATE_SCREEN_DATA,
  STATE_SCREEN_PREVIOUS,
  STATE_SCREEN_DATA_PREVIOUS
} from './reducer';

import setupScreen, {
  register,
  matchPath,
  findById,
  createComponent,
  createTitle,
  createUrl,
  getUrlPrefix
} from './screen';

import changeScreen from './actions/changeScreen';
import changeScreenData from './actions/changeScreenData';
import popstate from './actions/popstate';
import previousScreen from './actions/previousScreen';

export const setup = (force = true) => {
  injectReducer(Reducer, REDUCER, force);
};

export const unset = () => {
  removeReducer(REDUCER);
};

setup(false);

export const dispatchChangeScreen = (screenId, screenData, usePushState = true) => {
  store.dispatch(changeScreen(screenId, screenData, usePushState));
};

export const dispatchChangeScreenData = (screenData) => {
  store.dispatch(changeScreenData(screenData));
};

export const dispatchPreviousScreen = (fallbackScreenId = null, fallbackScreenData = null, usePushState = true) => {
  store.dispatch(previousScreen(fallbackScreenId, fallbackScreenData, usePushState));
};

export {
  REDUCER,
  STATE_SCREEN,
  STATE_SCREEN_DATA,
  STATE_SCREEN_PREVIOUS,
  STATE_SCREEN_DATA_PREVIOUS,
  register,
  matchPath,
  findById,
  createComponent,
  createTitle,
  createUrl,
  getUrlPrefix,
  changeScreen,
  changeScreenData,
  popstate,
  previousScreen
};

export default setupScreen;
