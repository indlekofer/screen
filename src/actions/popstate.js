import { TYPE_CHANGE, STATE_SCREEN, STATE_SCREEN_DATA } from '../reducer';
import { createTitle, matchPath } from '../screen';

export default (e) => (dispatch) => {
  e.preventDefault();
  let screenId, screenData;

  if (typeof window != 'undefined' && typeof window.location != 'undefined') {
    [screenId, screenData] = matchPath(window.location.pathname);

    if (typeof window.document != 'undefined') {
      const title = createTitle(screenId, screenData);

      if (title !== null) {
        window.document.title = title;
      }
    }
  } else {
    [screenId, screenData] = [null, null];
  }
  dispatch({
    type: TYPE_CHANGE,
    [STATE_SCREEN]: screenId,
    [STATE_SCREEN_DATA]: screenData
  });
};
