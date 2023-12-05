import { createTitle, createUrl, getContext } from '../screen';
import {
  REDUCER,
  TYPE_CHANGE,
  STATE_SCREEN,
  STATE_SCREEN_PREVIOUS,
  STATE_SCREEN_DATA,
  STATE_SCREEN_DATA_PREVIOUS
} from '../reducer';


export default (screenId, screenData, usePushState = true) => (dispatch, getState) => {

  const previousScreenId = getState()[REDUCER].get(STATE_SCREEN);
  const previousScreenData = getState()[REDUCER].get(STATE_SCREEN_DATA);

  if (typeof window != 'undefined') {
    const title = createTitle(screenId, screenData);

    if (usePushState) {
      const url = createUrl(screenId, screenData, getContext());
      window.history.pushState({}, title, url);
    }
    
    if (title !== null) window.document.title = title;
  }
  //reset screen data
  if (typeof screenData == 'undefined' || screenData !== null && screenData.length == 0) {
    screenData = null;
  }

  dispatch({
    type: TYPE_CHANGE,
    [STATE_SCREEN]: screenId,
    [STATE_SCREEN_DATA]: screenData,
    [STATE_SCREEN_PREVIOUS]: previousScreenId,
    [STATE_SCREEN_DATA_PREVIOUS]: previousScreenData
  });
};
