import { createTitle, createUrl } from '../screen';
import {
  REDUCER,
  TYPE_CHANGE,
  STATE_SCREEN,
  STATE_SCREEN_PREVIOUS,
  STATE_SCREEN_DATA,
  STATE_SCREEN_DATA_PREVIOUS
} from '../reducer';


export default (fallbackScreenId = null, fallbackScreenData = null, usePushState = true) => (dispatch, getState) => {

  let screenId = getState()[REDUCER].get(STATE_SCREEN_PREVIOUS);
  let screenData = getState()[REDUCER].get(STATE_SCREEN_DATA_PREVIOUS);

  if (screenId === null) {
    screenId = fallbackScreenId;
    screenData = fallbackScreenData;
  }
  if (typeof window != 'undefined') {
    const title = createTitle(screenId, screenData);

    if (usePushState && typeof window.history != 'undefined') {
      const url = createUrl(screenId, screenData);
      window.history.pushState({}, title, url);
    }
    
    if (title !== null && typeof window.document != 'undefined') {
      window.document.title = title;
    }
  }
  dispatch({
    type: TYPE_CHANGE,
    [STATE_SCREEN]: screenId,
    [STATE_SCREEN_DATA]: screenData,
    [STATE_SCREEN_PREVIOUS]: null,
    [STATE_SCREEN_DATA_PREVIOUS]: null
  });
};

